import { component$ } from '@builder.io/qwik'
import { useDocumentHead } from '@builder.io/qwik-city'
import type { CategoryEnum, TagEnum } from '~/utils/posts'
import { CategoryLink } from './category-link'
import { TagLink } from './tag-link'

export const Signature = component$(() => {
	return (
		<div class='flex flex-col items-center justify-center'>
			<span class='text-xl font-medium'>~ Cody 🚀 🥃</span>
		</div>
	)
})

export const Taxonomies = component$(() => {
	const { frontmatter } = useDocumentHead()
	return (
		<div class='flex flex-col space-y-3'>
			{frontmatter.categories && frontmatter.categories.length > 0 && (
				<div class='flex items-center space-x-2'>
					<p class='uppercase my-0'>Categories:</p>
					<ul
						class='list-none flex items-center space-x-1 p-0 my-0'
						role='list'
					>
						{frontmatter.categories.map((category: CategoryEnum) => (
							<li
								class='flex group hover:bg-accent-800 border border-transparent rounded-2xl px-2 items-center justify-center p-0 my-0'
								key={category}
								role='listitem'
							>
								<CategoryLink class='group-hover:no-underline' href={category}>
									<span class='text-sm font-medium group-hover:text-white'>
										{category}
									</span>
								</CategoryLink>
							</li>
						))}
					</ul>
				</div>
			)}
			{frontmatter.tags && frontmatter.tags.length > 0 && (
				<div class='flex items-center space-x-2'>
					<p class='uppercase my-0'>Tags:</p>
					<ul
						class='list-none flex flex-wrap items-center space-x-1 p-0 my-0'
						role='list'
					>
						{frontmatter.tags.map((tag: TagEnum) => (
							<li
								class='flex group hover:bg-accent-800 border border-transparent rounded-2xl px-2 items-center justify-center p-0 my-0'
								key={tag}
								role='listitem'
							>
								<TagLink class='group-hover:no-underline' href={tag}>
									<span class='text-sm font-medium group-hover:text-white'>
										{tag}
									</span>
								</TagLink>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
})
