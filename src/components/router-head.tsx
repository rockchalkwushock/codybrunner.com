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
			<link rel='icon' type='image/svg+xml' href='/favicons/favicon.ico' />

			{/* Bots */}
			<meta name='robots' content='follow, index' />

			{/* Canonical URL */}
			<link rel='canonical' href={loc.url.href} />

			{/* TODO: RSS Feed */}

			{/* Primary Meta Tags*/}
			<meta name='author' content={SITE.author} />
			<meta name='description' content={SITE.description} />
			<meta name='title' content={title} />
			<title>{title}</title>

			{/* TODO: OG / Twitter */}

			{/* TODO: Partytown + Fathom Analytics */}

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
