import { component$, Slot } from '@builder.io/qwik'
import { Link, type LinkProps } from '@builder.io/qwik-city'

import type { TagEnum } from '~/utils/posts'

interface Props extends Omit<LinkProps, 'href'> {
	href: TagEnum
}

export const TagLink = component$<Props>(({ href, ...rest }) => {
	return (
		<Link href={`/tags/${href}`} {...rest}>
			<Slot />
		</Link>
	)
})
