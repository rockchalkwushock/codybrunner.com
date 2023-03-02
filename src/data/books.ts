interface Book {
	readonly authors: string[]
	readonly image?: string
	readonly title: string
	readonly url: string
}

type Shelf = 'currently-reading' | 'recommended'

export const books: Record<Shelf, Book[]> = {
	'currently-reading': [
		{
			authors: ['John Eldredge'],
			image: 'https://m.media-amazon.com/images/I/41j0+fV9CHL.jpg',
			title: 'Fathered by God: Learning What Your Dad Could Never Teach You',
			url: 'https://a.co/d/80TnSAI',
		},
		{
			authors: ['Eva A. Mendes'],
			image: 'https://m.media-amazon.com/images/I/510gQa74-gL.jpg',
			title: "Marriage and Lasting Relationships with Asperger's Syndrome",
			url: 'https://a.co/d/3v2WXtL',
		},
		{
			authors: ['Sean Moriarity'],
			image:
				'https://pragprog.com/titles/smgaelixir/genetic-algorithms-in-elixir/smgaelixir-500.jpg',
			title: 'Genetic Algorithms in Elixir',
			url: 'https://pragprog.com/titles/smgaelixir/genetic-algorithms-in-elixir/',
		},
	],
	recommended: [
		{
			authors: ['Ayn Rand'],
			title: 'Anthem',
			url: 'https://a.co/d/8rHjOEy',
		},
		{
			authors: ['Ayn Rand'],
			title: 'Atlas Shrugged',
			url: 'https://a.co/d/88pro3Y',
		},
		{
			authors: ['Ayn Rand'],
			title: 'The Fountainhead',
			url: 'https://a.co/d/c3g8b5a',
		},
		{
			authors: ['Victor Hugo'],
			title: 'Les Misérables',
			url: 'https://a.co/d/1fPgHbY',
		},
		{
			authors: ['Paulo Coelho'],
			title: 'The Alchemist',
			url: 'https://a.co/d/h0a1C4I',
		},
		{
			authors: ['Michael Crichton'],
			title: 'State of Fear',
			url: 'https://a.co/d/f9dhfEP',
		},
		{
			authors: ['David Goggins'],
			title: "Can't Hurt Me",
			url: 'https://a.co/d/cnzBYda',
		},
		{
			authors: ['Jocko Willink', 'Leif Babin'],
			title: 'Extreme Ownership',
			url: 'https://a.co/d/0wK7AXT',
		},
		{
			authors: ['Mel Robbins'],
			title: 'The 5 Second Rule',
			url: 'https://a.co/d/ak4pIOE',
		},
		{
			authors: ['Robert Kiyosaki'],
			title: 'Rich Dad Poor Dad',
			url: 'https://a.co/d/1HpPMo6',
		},
		{
			authors: ['Ryan Michler'],
			title: 'Sovereignty: The Battle for the Hearts and Minds of Men',
			url: 'https://a.co/d/1pZdVHt',
		},
		{
			authors: ['James Edward Gray, II', 'Bruce A. Tate'],
			title: 'Designing Elixir Systems with OTP',
			url: 'https://pragprog.com/titles/jgotp/designing-elixir-systems-with-otp/',
		},
		{
			authors: ['Chris McCord', 'Bruce A. Tate', 'José Valim'],
			title: 'Programming Phoenix 1.4',
			url: 'https://pragprog.com/titles/phoenix14/programming-phoenix-1-4/',
		},
		{
			authors: ['Darin Wilson', 'Eric Meadows-Jönsson'],
			title: 'Programming Ecto',
			url: 'https://pragprog.com/titles/wmecto/programming-ecto/',
		},
		{
			authors: ['Bruce Williams', 'Ben Wilson'],
			title: 'Craft GraphQL APIs in Elixir with Absinthe',
			url: 'https://pragprog.com/titles/wwgraphql/craft-graphql-apis-in-elixir-with-absinthe/',
		},
		{
			authors: ['Bruce A. Tate', 'Sophie DeBenedetto'],
			title: 'Programming Phoenix LiveView',
			url: 'https://pragprog.com/titles/liveview/programming-phoenix-liveview/',
		},
	],
}
