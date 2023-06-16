import { component$, Slot } from '@builder.io/qwik'
import { type LinkProps, Link } from '@builder.io/qwik-city'

import { cx } from '~/utils/cx'

export const SocialLink = component$<LinkProps>(
	({ 'aria-label': label, class: cls, href }) => {
		return (
			<Link
				aria-label={label}
				class={cx('group -m-1 p-1', cls)}
				href={href}
				rel='noopener noreferrer'
				target='_blank'
			>
				<Slot />
			</Link>
		)
	}
)
