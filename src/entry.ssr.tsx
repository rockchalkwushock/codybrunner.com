/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
	renderToStream,
	type RenderToStreamOptions,
} from '@builder.io/qwik/server'
import { manifest } from '@qwik-client-manifest'
import Root from './root'
import { cx } from './utils/cx'

export default function (opts: RenderToStreamOptions) {
	// Determine if the theme cookie is set.
	const hasThemeCookie =
		opts.serverData?.requestHeaders.cookie.includes('theme')
	// Determine if the theme cookie is set to dark.
	const setDarkTheme =
		hasThemeCookie &&
		opts.serverData?.requestHeaders.cookie.substring(6) === 'dark'

	return renderToStream(<Root />, {
		manifest,
		...opts,
		// Use container attributes to set attributes on the html tag.
		containerAttributes: {
			class: cx(
				'antialiased h-full w-full motion-safe:scroll-smooth',
				setDarkTheme && 'dark'
			),
			lang: 'en-us',
			...opts.containerAttributes,
		},
	})
}
