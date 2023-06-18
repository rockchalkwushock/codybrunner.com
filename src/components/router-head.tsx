import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'
import { SITE } from '~/config.mjs'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const head = useDocumentHead()
	const loc = useLocation()

	const title = `${head.title} | codybrunner.com`
	return (
		<>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />

			<link href='/manifest.json' rel='manifest' />

			{/* Favicons */}
			<link
				href='/apple-touch-icon.png'
				rel='apple-touch-icon'
				sizes='180x180'
				type='image/png'
			/>
			<link
				href='/favicon-32x32.png'
				rel='icon'
				sizes='32x32'
				type='image/png'
			/>
			<link
				href='/favicon-16x16.png'
				rel='icon'
				sizes='16x16'
				type='image/png'
			/>
			<link href='/favicon.ico' rel='icon' sizes='48x48' type='image/svg+xml' />

			{/* Bots */}
			<meta name='robots' content='follow, index' />

			{/* Canonical URL */}
			<link rel='canonical' href={loc.url.href} />

			{/* Primary Meta Tags*/}
			<meta name='author' content={SITE.author} />
			<meta name='title' content={title} />
			<title>{title}</title>

			{head.meta.map(m => (
				<meta key={m.key} {...m} />
			))}

			{head.links.map(l => (
				<link key={l.key} {...l} />
			))}

			{head.styles.map(s => (
				<style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
			))}
		</>
	)
})
