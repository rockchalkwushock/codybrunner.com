import { component$, Slot } from '@builder.io/qwik'
import { Link, type LinkProps } from '@builder.io/qwik-city'

import type { CategoryEnum } from '~/utils/posts'

interface Props extends Omit<LinkProps, 'href'> {
	href: CategoryEnum
}

export const CategoryLink = component$<Props>(({ href, ...rest }) => {
	return (
		<Link href={`/categories/${href}`} {...rest}>
			<Slot />
		</Link>
	)
})
