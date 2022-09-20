import type {
	AccessTokenResponse,
	CurrentEpisode,
	CurrentEpisodeResponse,
	CurrentTrack,
	CurrentTrackResponse,
	RecentTrack,
	RecentTrackResponse,
} from '@interfaces/spotify'

export async function getAccessToken(): Promise<AccessTokenResponse> {
	const params = new URLSearchParams({
		grant_type: 'refresh_token',
		refresh_token: import.meta.env.SPOTIFY_REFRESH_TOKEN,
	})

	const token = Buffer.from(
		`${import.meta.env.SPOTIFY_CLIENT_ID}:${
			import.meta.env.SPOTIFY_CLIENT_SECRET
		}`
	).toString('base64')

	const response = await fetch('https://accounts.spotify.com/api/token', {
		body: params.toString(),
		headers: {
			Authorization: `Basic ${token}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
	})

	return await response.json()
}

export async function getNowPlaying(): Promise<
	CurrentEpisode | CurrentTrack | RecentTrack
> {
	// Authenticate with Spotify.
	const { access_token } = await getAccessToken()

	// Fetch data if I am currently listening to Spotify.
	const res = await fetch(
		'https://api.spotify.com/v1/me/player/currently-playing?additional_types=episode,track',
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}
	)

	// If the request fails...
	if (res.status === 204 || res.status > 400) {
		// Fetch data for the last track played.
		const res = await fetch(
			'https://api.spotify.com/v1/me/player/recently-played?limit=1',
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		)

		// If the request fails...
		if (res.status === 204 || res.status > 400) {
			// Reject with the appropriate data envelope.
			return Promise.resolve<RecentTrack>({
				artist: null,
				isLastPlayed: false,
				name: null,
				url: null,
			})
		}

		// Parse the recent track data.
		const r = (await res.json()) as RecentTrackResponse

		// Resolve with the recently played track.
		return Promise.resolve<RecentTrack>({
			artist: r.items[0].track.artists
				.map(a => a.name)
				.join(', ')
				.trim(),
			isLastPlayed: true,
			name: r.items[0].track.name,
			url: r.items[0].track.external_urls.spotify,
		})
	}

	// Parse the currently playing track data.
	const r = (await res.json()) as CurrentTrackResponse | CurrentEpisodeResponse

	let response

	if (r.currently_playing_type === 'episode') {
		r as CurrentEpisodeResponse
		response = {
			isPlaying: true,
			name: r.item.name,
			podcast: r.item.show.name,
			url: r.item.show.external_urls.spotify,
		} as CurrentEpisode
	} else {
		r as CurrentTrackResponse
		response = {
			artist: r.item.artists
				.map(a => a.name)
				.join(', ')
				.trim(),
			isPlaying: true,
			name: r.item.name,
			url: r.item.external_urls.spotify,
		} as CurrentTrack
	}

	// Resolve with the currently playing track.
	return Promise.resolve<CurrentEpisode | CurrentTrack>(response)
}
