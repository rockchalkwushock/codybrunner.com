import { component$ } from '@builder.io/qwik'

import { toJson } from '~/utils/jsonld'

interface JsonLdProps {
	scriptId?: string
	type?: string
}

interface BlogPostJsonLdProps extends JsonLdProps {
	author: string
	dateModified: string
	datePublished: string
	description: string
	image: string
	title: string
	url: string
}

export const BlogPostJsonLd = component$<BlogPostJsonLdProps>(
	({ scriptId, ...rest }) => {
		return (
			<script
				dangerouslySetInnerHTML={toJson({
					jsonld: rest,
					type: 'BlogPosting',
				})}
				data-testid={scriptId}
				id={scriptId}
				type='application/ld+json'
			/>
		)
	}
)

interface WebPageJsonLdProps extends JsonLdProps {
	description: string
	pageName: string
	siteTitle: string
	url: string
}

export const WebPageJsonLd = component$<WebPageJsonLdProps>(
	({ scriptId, ...rest }) => {
		return (
			<script
				dangerouslySetInnerHTML={toJson({
					jsonld: rest,
					type: 'WebPage',
				})}
				data-testid={scriptId}
				id={scriptId}
				type='application/ld+json'
			/>
		)
	}
)

interface WebSiteJsonLdProps extends JsonLdProps {
	description: string
	name: string
	potentialAction?: {
		queryInput: string
		target: string
	}
	sameAs: string[]
	url: string
}

export const WebSiteJsonLd = component$<WebSiteJsonLdProps>(
	({ scriptId, ...rest }) => {
		return (
			<script
				dangerouslySetInnerHTML={toJson({
					jsonld: rest,
					type: 'WebSite',
				})}
				data-testid={scriptId}
				id={scriptId}
				type='application/ld+json'
			/>
		)
	}
)
