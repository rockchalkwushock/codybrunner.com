import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

/**
 * Adds both:
 * - readingTime: "10 minutes"
 * - wordCount: 1200
 */
export function remarkReadingTime() {
	return function (tree, { data }) {
		const textOnPage = toString(tree)
		const readingTime = getReadingTime(textOnPage)

		data.astro.frontmatter.readingTime = readingTime.text
		data.astro.frontmatter.wordCount = readingTime.words
	}
}
