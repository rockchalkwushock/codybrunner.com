import { component$, Slot } from '@builder.io/qwik'
import { Link, type LinkProps } from '@builder.io/qwik-city'

import { cx } from '~/utils/cx'

export const NavLink = component$<LinkProps>(({ class: cls, ...rest }) => {
	return (
		<Link class={cx('transition', cls)} {...rest}>
			<Slot />
		</Link>
	)
})
