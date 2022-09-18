import type { DateTimeFormatOptions } from '@interfaces/helpers'
import { CATEGORIES, Category, Post, Tag, TAGS } from '@interfaces/post'

/**
 * @name dedupeArray/1
 * @desc Function for removing duplicate values from array.
 * @param array {Array<T>}
 * @returns {Array<T>}
 */
export const dedupeArray = <T>(array: Array<T>): Array<T> => [...new Set(array)]

const dateTimeFormatMap: Record<
	DateTimeFormatOptions,
	Intl.DateTimeFormatOptions
> = {
	'date-medium': { dateStyle: 'medium' },
	'date-medium-with-short-time': {
		dateStyle: 'medium',
		hour12: false,
		timeStyle: 'short',
	},
}

/**
 * @name formatDateTime/2
 * @desc Util function for parsing a datetime string to a desired format based on current locale of user.
 * @param dateTimeString {String}
 * @param format {DateTimeFormatOptions}
 * @returns {String}
 */
export function formatDateTime(
	dateTimeString: string,
	format?: DateTimeFormatOptions
): string {
	const locale = new Intl.DateTimeFormat().resolvedOptions().locale
	const options = format ? dateTimeFormatMap[format] : undefined
	const date = new Date(dateTimeString)
	return new Intl.DateTimeFormat(locale, options).format(date)
}

export function parsePostSlug(url?: string) {
	return url
		?.replace(/(src\/data\/)|(?:posts\/)/g, '')
		.replace('.mdx', '') as string
}

/**
 * @name parseRawPost/1
 * @desc Util function for parsing post to desired interface.
 * @param post {Post}
 * @returns post {Post}
 */
export function parseRawPost(post: Post): Post {
	const slug = parsePostSlug(post.url) as string

	return {
		...post,
		frontmatter: {
			...post.frontmatter,
			createdAt: formatDateTime(post.frontmatter.createdAt, 'date-medium'),
			modifiedAt: post.frontmatter.modifiedAt
				? formatDateTime(post.frontmatter.modifiedAt, 'date-medium')
				: undefined,
			publishedAt: post.frontmatter.publishedAt
				? formatDateTime(post.frontmatter.publishedAt, 'date-medium')
				: undefined,
			slug,
		},
	}
}

/**
 * @name byDate/2
 * @desc Orders posts from oldest to newest.
 * @param post1 - {Post}
 * @param post2 - {Post}
 * @returns {number}
 */
export function byDate(post1: Post, post2: Post): number {
	return (
		new Date(
			post2.frontmatter.publishedAt || post2.frontmatter.createdAt
		).valueOf() -
		new Date(
			post1.frontmatter.publishedAt || post1.frontmatter.createdAt
		).valueOf()
	)
}

/**
 * @name isFeatured/1
 * @desc Util fn for filtering out featured posts.
 * @param post {Post}
 * @returns {boolean}
 */
export function isFeatured(post: Post): boolean {
	return post.frontmatter.featured
}

/**
 * @name publishedOnly/1
 * @desc Filter out posts in draft status.
 * @param post {Post}
 * @returns {boolean}
 */
export function publishedOnly(post: Post): boolean {
	return !post.frontmatter.draft
}

/**
 * @name filterPosts/2
 * @desc Takes an array of posts & a callback to filter the array of posts.
 * @param posts {Array<Post>}
 * @param cb {(post:Post) => boolean}
 * @returns {Array<Post>}
 */
export function filterPosts(
	posts: Array<Post>,
	cb: (post: Post) => boolean
): Array<Post> {
	return posts.filter(cb)
}

/**
 * @name getRelatedPosts/3
 * @desc Fetches posts that are related to the current post via
 * the tags of the current post.
 * @param currentPost {Post}
 * @param posts {Array<Post>}
 * @param quantity {number}
 * @returns {Array<Post>}
 */
export function getRelatedPosts(
	currentPost: Post,
	posts: Array<Post>,
	quantity = 2
): Array<Post> {
	if (!currentPost.frontmatter.tags) {
		return []
	}
	// Take the current post's tags and create a map where the keys map to
	// an empty array for later storing posts that possess that key as a tag.
	const tagMap = currentPost.frontmatter.tags.reduce((cache, tag) => {
		cache[tag] = []
		return cache
	}, {} as Record<Tag, Array<Post>>)

	// Loop over all the posts...
	for (const post of posts) {
		if (post.frontmatter.tags) {
			// Loop over all the tags of the given post...
			for (const tag of post.frontmatter.tags) {
				// Check to see if the current tag exists in the tagMap.
				// We don't want the current post to end up in the list of related posts
				// so check the slugs are not equal to the current post.
				if (
					!!tagMap[tag] &&
					post.frontmatter.slug !== currentPost.frontmatter.slug
				) {
					tagMap[tag].push(post)
				}
			}
		}
	}

	// NOTE: Why does dedupeArray work here?
	// As we loop the tagMap and add the posts associated to the current tag
	// to the cache we are assembling an array of objects. Those objects have
	// a memory reference. Should we push the same object to the array then
	// we have two of the same memory references present.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
	const relatedPosts = dedupeArray(
		Object.keys(tagMap).reduce((cache, key) => {
			// If tagMap only has one key return all the associated posts.
			if (Object.keys(tagMap).length === 1) {
				return [...cache, ...tagMap[key as Tag]]
			}
			// If there are more than one key in tagMap take the first 2 posts from each key.
			if (Object.keys(tagMap).length > 1) {
				cache = [...cache, ...tagMap[key as Tag].slice(0, quantity)]
			}

			return cache
		}, [] as Array<Post>)
	)

	// Return an array of related posts based on our tagMap that is sorted
	// from most recent.
	return sortPosts(
		relatedPosts.length > 5 ? relatedPosts.slice(0, 5) : relatedPosts,
		byDate
	).reverse()
}

/**
 * @name sortPosts/2
 * @desc Takes array of posts and a callback for sorting the posts
 * return a copy of the initial array of posts sorted.
 * @param posts {Array<Post>}
 * @param cb {(p1: Post, p2: Post) => number}
 * @returns {Array<Post>}
 */
export function sortPosts(
	posts: Array<Post>,
	cb: (p1: Post, p2: Post) => number
): Array<Post> {
	const copyOfPosts = posts
	return copyOfPosts.sort(cb)
}

/**
 * @name getTags/1
 * @desc Helper for getting all tags from all posts
 * and returning a deduped array of those tags.
 * @param posts
 * @returns {Array<Tag>}
 */
export function getTags(posts: Array<Post>): Array<Tag> {
	return dedupeArray(
		posts.reduce((tags, post) => {
			if (post.frontmatter.tags) {
				return [...tags, ...post.frontmatter.tags]
			}
			return []
		}, [] as Array<Tag>)
	)
}

/**
 * @name getCategories/2
 * @desc Helper for getting all categories from all posts
 * and returning a deduped array of those categories.
 * @param posts
 * @returns {Array<Category>}
 */
export function getCategories(posts: Array<Post>): Array<Category> {
	return dedupeArray(
		posts.reduce((categories, post) => {
			if (post.frontmatter.category) {
				return [...categories, post.frontmatter.category]
			}
			return []
		}, [] as Array<Category>)
	)
}

// /**
//  * @name getTaxonomy/1
//  * @desc Generic util fn for getting all instances of a given taxonomy type.
//  * @param posts {Array<Post>}
//  * @returns {Array<Category | Tag>}
//  */
// export function getTaxonomy<T = Category | Tag>(posts: Array<Post>): Array<T> {
// 	return dedupeArray(
// 		posts.reduce((acc, post) => {
// 			// post.frontmatter.category
// 			// post.frontmatter.tags
// 			return acc
// 		}, [] as Array<T>)
// 	)
// }

/**
 * @name getPostsByTaxonomy/2
 * @desc Generic util fn for returning an array of posts based on a give taxonomy value.
 * @param posts {Array<Post>}
 * @param taxonomy {Category | Tag}
 * @returns {Array<Post>}
 */
export function getPostsByTaxonomy<T = Category | Tag>(
	posts: Array<Post>,
	taxonomy: T
): Array<Post> {
	return posts.filter(post => {
		// Categories
		if (CATEGORIES.includes(taxonomy as unknown as Category)) {
			return post.frontmatter.category === (taxonomy as unknown as Category)
		}
		// Tags
		if (TAGS.includes(taxonomy as unknown as Tag)) {
			return (
				post.frontmatter.tags &&
				post.frontmatter.tags.includes(taxonomy as unknown as Tag)
			)
		}
	})
}

/**
 * @name addPagination/1
 * @desc Util fn for adding next and previous posts to the data structure for pagination.
 * @param posts {Array<Post>}
 * @returns {Array<Post>}
 */
export function addPagination(posts: Array<Post>): Array<Post> {
	return posts.reduce((acc, post, index) => {
		acc.push({
			...post,
			frontmatter: {
				...post.frontmatter,
				nextPost:
					acc.length === 0 ? undefined : posts[acc.length - 1].frontmatter.slug,
				previousPost:
					posts.length === acc.length + 1
						? undefined
						: posts[index + 1].frontmatter.slug,
			},
		})
		return acc
	}, [] as Array<Post>)
}

export function fetchAndBuildPosts(rawPosts: Array<Post>): Array<Post> {
	// Parse, Sort, and add pagination to each post.
	let posts = addPagination(sortPosts(rawPosts.map(parseRawPost), byDate))

	// If executing in production filter out drafts.
	if (import.meta.env.PROD) {
		posts = filterPosts(posts, publishedOnly)
	}

	return posts
}
