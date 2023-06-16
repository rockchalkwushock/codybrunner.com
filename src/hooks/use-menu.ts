import { useSignal } from '@builder.io/qwik'
import { useContent, useLocation, useNavigate } from '@builder.io/qwik-city'

import { isMenuItemVisible } from '~/utils/filters'

export function useMenu() {
	const navigate = useNavigate()
	const { url } = useLocation()
	const isOpen = useSignal(false)
	const { menu } = useContent()
	const options = useSignal(menu?.items?.filter(isMenuItemVisible) ?? [])

	return {
		isOpen,
		navigate,
		options,
		url: url.pathname,
	}
}
