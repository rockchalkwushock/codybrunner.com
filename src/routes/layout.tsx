import { component$, Slot } from '@builder.io/qwik'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Wrapper } from '~/components/wrapper'

export default component$(() => {
	return (
		<Wrapper>
			<Header />
			<main>
				<Slot />
			</main>
			<Footer />
		</Wrapper>
	)
})
