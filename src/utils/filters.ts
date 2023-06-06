import type { ContentMenu } from '@builder.io/qwik-city'
import { FEATURE_FLAGS } from '~/config.mjs'

export function isMenuItemVisible({ text }: ContentMenu): boolean {
	return (
		import.meta.env.DEV ||
		(import.meta.env.MODE === 'production' && FEATURE_FLAGS.menu.test(text))
	)
}
