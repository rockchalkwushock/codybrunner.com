export interface Project {
	readonly description: string
	readonly company?: string
	readonly logo?: string
	readonly name: string
	readonly source?: string
	readonly technologies: string[]
	readonly url?: string
}

type ProjectType = 'oss' | 'personal' | 'professional'

type Projects = Record<ProjectType, Project[]>

export const projects: Projects = {
	oss: [
		{
			description: 'Vkontakte OAuth strategy for Micro',
			name: 'microauth-vkontakte',
			source: 'https://github.com/microauth/microauth-vkontakte',
			technologies: ['JavaScript'],
			url: 'https://www.npmjs.com/package/microauth-vkontakte',
		},
		{
			description:
				'Reactive publishing framework, filesystem-based with support for Markdown, nested hierarchies, and instant content rebuilding. Written in Elixir.',
			name: 'pardall_markdown',
			source: 'https://github.com/alfredbaudisch/pardall_markdown',
			technologies: ['Elixir'],
			url: 'https://hex.pm/packages/pardall_markdown',
		},
		{
			description:
				'Rehype plugin for parsing code blocks and adding titles to code blocks',
			name: 'rehype-code-titles',
			source: 'https://github.com/rockchalkwushock/rehype-code-titles',
			technologies: ['TypeScript'],
			url: 'https://www.npmjs.com/package/rehype-code-titles',
		},
	],
	personal: [
		{
			description: 'An Instagram clone written in Elixir and Ecto',
			name: 'ectogram',
			source: 'https://github.com/rockchalkwushock/ectogram',
			technologies: ['Ecto', 'Elixir', 'PostgreSQL'],
		},
		{
			description: 'Weather App that makes use of the OpenWeather API',
			name: 'weather-app',
			source: 'https://github.com/rockchalkwushock/weather-app',
			technologies: [
				'ReactJS',
				'React Query',
				'React Select',
				'TailwindCSS',
				'TypeScript',
				'Vite',
			],
			url: 'https://weather-app-rockchalkwushock.vercel.app/',
		},
		{
			description: 'Tic-tac-toe written using the React Context API',
			name: 'tic-tac-toe',
			source: 'https://github.com/rockchalkwushock/tic-tac-toe',
			technologies: ['ReactJS', 'TailwindCSS', 'TypeScript', 'Vite'],
			url: 'https://tic-tac-toe-indol-chi.vercel.app',
		},
	],
	professional: [
		{
			company: 'Appointlet',
			description: 'JavaScript SDK for Appointlet',
			logo: 'https://www.appointlet.com/wp-content/uploads/2022/06/brand-logo.svg',
			name: '@appointlet/appointlet-js',
			technologies: ['TypeScript'],
			url: 'https://www.npmjs.com/package/@appointlet/appointlet.js',
		},
		{
			company: 'Appointlet',
			description: 'Chrome Extension for Appointlet',
			logo: 'https://www.appointlet.com/wp-content/uploads/2022/06/brand-logo.svg',
			name: 'Appointlet Chrome Extension',
			technologies: ['Apollo', 'GraphQL', 'ReactJS', 'TypeScript'],
			url: 'https://chrome.google.com/webstore/detail/appointlet/oanmefncibhopinffldmcfpkhjfcnggo',
		},
		{
			company: 'Appointlet',
			description: 'User dashboard for Appointlet',
			logo: 'https://www.appointlet.com/wp-content/uploads/2022/06/brand-logo.svg',
			name: 'Appointlet Dashboard',
			technologies: ['GraphQL', 'ReactJS', 'React Query', 'TypeScript'],
			url: 'https://www.appointlet.com',
		},
		{
			company: 'Arrive Logistics',
			description: 'Logistics platform for freight brokers',
			logo: 'https://www.arrivelogistics.com/wp-content/uploads/2023/02/site-logo.png',
			name: 'XLR8 Platform',
			technologies: ['GraphQL', 'ReactJS', 'React Query', 'TypeScript'],
			url: 'https://www.arrivelogistics.com',
		},
		{
			company: 'Bitcoin IRA',
			description: 'Cryptocurrency IRA platform',
			logo: 'https://bitcoinira.com/wp-content/uploads/2018/11/bitcoin-ira-logo.svg',
			name: 'Bitcoin IRA',
			technologies: ['ReactJS', 'React Query', 'TypeScript'],
			url: 'https://bitcoinira.com',
		},
		{
			company: 'Weeldi',
			description: 'No code task automation software',
			logo: 'https://www.weeldi.com/uploads/1/2/4/1/124197795/weeldi-full-logo-color-resized_5.png',
			name: 'Weeldi',
			technologies: ['Elixir', 'Phoenix', 'ReactJS', 'TypeScript'],
			url: 'https://weeldi.com',
		},
	],
}
