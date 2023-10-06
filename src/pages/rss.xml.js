import rss from '@astrojs/rss'

// https://docs.astro.build/en/guides/rss/#setting-up-astrojsrss
export async function GET(context) {
	return rss({
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
		// `<description>` field in output xml
		description:
			"Welcome to Cody's personal website and tech blog! Based in Colombia, Cody is a Senior Frontend Developer at Bitcoin IRA, the world's first trusted crypto IRA platform. Explore his journey and insights in software development.",
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: [],
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: context.site,
		stylesheet: '/rss/styles.xsl',
		// `<title>` field in output xml
		title: 'RSS Feed | codybrunner.com',
	})
}
