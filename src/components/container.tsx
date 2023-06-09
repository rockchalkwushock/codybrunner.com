import { component$, Slot } from '@builder.io/qwik'
import { cx } from '~/utils/cx'

interface Props {
	class?: string
	style?: string | Record<string, number | string | undefined>
}

export const OuterContainer = component$<Props>(({ class: cls, style }) => {
	return (
		<div class={cx(cls, 'sm:px-8')} style={style}>
			<div class='mx-auto max-w-7xl lg:px-8'>
				<Slot />
			</div>
		</div>
	)
})

export const InnerContainer = component$(() => {
	return (
		<div class='relative px-4 sm:px-8 lg:px-12'>
			<div class='mx-auto max-w-2xl lg:max-w-5xl'>
				<Slot />
			</div>
		</div>
	)
})

export const Container = component$<Props>(({ class: cls, style }) => {
	return (
		<OuterContainer class={cls} style={style}>
			<InnerContainer>
				<Slot />
			</InnerContainer>
		</OuterContainer>
	)
})
