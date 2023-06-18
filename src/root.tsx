import { component$, useStyles$ } from '@builder.io/qwik'
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head'

import globalStyles from './styles/global.css?inline'
import '@fontsource/poppins'
import '@fontsource-variable/playfair-display'

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */
	useStyles$(globalStyles)

	return (
		<QwikCityProvider>
			<head>
				<RouterHead />
			</head>
			<body
				class='antialiased h-full w-full motion-safe:scroll-smooth flex flex-col dark:bg-primary-900 dark:text-primary-200'
				lang='en'
			>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	)
})
