import { component$, Slot } from '@builder.io/qwik'
import { Link, type LinkProps } from '@builder.io/qwik-city'

interface Props extends LinkProps {}

export const PostLink = component$<Props>(({ href, ...rest }) => {
	return (
		<Link href={`/blog/${href}`} {...rest}>
			<Slot />
		</Link>
	)
})
