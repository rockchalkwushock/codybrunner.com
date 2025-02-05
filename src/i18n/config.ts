import type { Schema } from './schema'

export const defaultLang = 'en'
export const routes: Record<Language, Record<AppRoutes, string>> = {
	en: {
		about: 'about',
		projects: 'projects',
	},
}
export const showDefaultLang = false
export const languages = {
	en: 'English',
} as const

export type AppRoutes = 'about' | 'projects'
export type Language = keyof typeof languages

const currentYear = new Date().getFullYear()

export const translations: Schema = {
	en: {
		'about.content.history':
			'I shipped the first iteration of this website in 2016 through GitHub Pages with just HTML & CSS. Over the years it has mostly been ReactJS using frameworks like NextJS and GatsbyJS. Hosting for the most part has been through Vercel; however I now use Fly. This iteration has been built with Astro & TailwindCSS with the blog running on the same with MDX.',
		'about.content.paragraph-one':
			'After several failed attempts at higher education and a stint in the US Navy with a tour in Afghanistan; I found myself working graveyard shift as a CNC laser operator and hating my life. I started teaching myself how to code as early as 2012, but never really thought it could be a career. It was not until I was six months away from an engineering degree that my heart was not in anymore that I decided to take the plunge and go all in on teaching myself software development.',
		'about.content.paragraph-two':
			"Growing up and spending roughly 30 uninterrupted years in the 'middle of nowhere' Kansas; I made the choice to move across the country to Portland, Oregon in 2018. I spent two years there working my first job in the tech industry before moving to Colombia in 2020. Since then, I've been living outside of Bogotá, working remotely for companies all over the world, and running my own development agency, JokinglyBadTech LLC.",
		'about.content.paragraph-three':
			"When I'm not working, I enjoy spending time with my dog, Max, whom I adopted from a rescue shelter in 2024. I also love weight lifting, traveling, learning guitar, tinkering with my Raspberry Pi, and smoking meats and cheeses.",
		'about.content.title':
			'I’m Cody Brunner. I live in Bogotá, Colombia, where I work on software of the future.',
		'about.metadata.description':
			'Cody Brunner is an American expat living in Bogotá, Colombia. He served in the US Navy and one tour of duty in Afghanistan. He is currently searching for my next role in the industry. He primarily works with GraphQL, Node, ReactJS, and TypeScript. He is also a contributor to the open source community. Other technologies he works with include Astro, Elixir, Golang, NextJS, Phoenix, Python, ReactJS, tRPC, and TypeScript.',
		'about.metadata.imageAlt': 'Cody Brunner in Paipa, Colombia',
		'about.metadata.title': 'About',
		'footer.copyright': `2016-${currentYear} Cody Brunner`,
		'footer.rights': 'All rights reserved',
		'footer.rss': 'RSS Feed',
		'footer.rss.label': 'Go to my RSS Feed.',
		'home.articles.alt': 'No Articles At This Time',
		'home.articles.heading': 'No Articles At This Time',
		'home.hero.description':
			"Hey! I'm Cody, a Christian, US Navy Veteran, Jayhawk, and an American expat living outside of Bogotá, Colombia. I am currently searching for my next role in the industry. In my free time, you can find me in the gym, teaching myself guitar, or smoking some brisket or ribs.",
		'home.hero.heading':
			'Software developer, veteran, and smoker of the meats.',
		'home.profile.alt': 'Image of Cody Brunner',
		'home.resume.button': 'Download CV',
		'home.resume.button.label': 'Download CV',
		'home.resume.heading': 'Work',
		'home.resume.item.frontend': 'Frontend Developer',
		'home.resume.item.fullstack': 'Fullstack Developer',
		'home.resume.item.owner': 'Owner',
		'home.resume.item.present': 'Present',
		'home.resume.item.senior': 'Senior Frontend Developer',
		'home.resume.item.web': 'Web Developer',
		'home.resume.company.heading': 'Company',
		'home.resume.date.heading': 'Date',
		'home.resume.role.heading': 'Role',
		'locale.label': 'Switch to Spanish',
		'nav.about': 'About',
		'nav.about.label': 'Go to About Page.',
		'nav.articles': 'Articles',
		'nav.articles.label': 'Go to blog.codybrunner.com.',
		'nav.home': 'Home',
		'nav.home.label': 'Go to Home Page.',
		'nav.mobile.close': 'Close',
		'nav.mobile.close.label': 'Close Navigation Menu.',
		'nav.mobile.subTitle': 'Navigation',
		'nav.mobile.title': 'Menu',
		'nav.projects': 'Projects',
		'nav.projects.label': 'Go to Projects Page.',
		'notfound.image.alt': 'Page Not Found',
		'notfound.link.content': 'Back to Home Page',
		'notfound.link.label': 'Go to homepage',
		'notfound.metadata.description': 'Oops! Looks like you are lost.',
		'notfound.metadata.title': 'Not Found',
		'notfound.title': 'Oops! Looks like you are lost.',
		'projects.content.intro':
			'After several years in the industry here is a few of the projects I have worked on over the years. From personal projects to open source contributions to professional work.',
		// TODO: Add 'projects.content.portfolio....'
		'projects.content.title': 'My Portfolio',
		'projects.metadata.description':
			'Welcome to my portfolio showcasing my journey as a software developer in the tech industry. Here, you will find a collection of my work that reflects my passion for coding and problem-solving. From personal side projects to enterprise-level applications and contributions to open source, this portfolio encompasses the breadth of my experience. I have leveraged an array of cutting-edge technologies throughout my projects, including JavaScript/TypeScript, ReactJS, TailwindCSS, Phoenix LiveView, Elixir, NextJS, and Remix. Each project represents a unique challenge and demonstrates my ability to build robust, scalable, and user-friendly solutions. Feel free to explore the diverse range of applications, delve into the code, and witness the creativity and craftsmanship that went into each endeavor.',
		'projects.metadata.title': 'Portfolio',
		'socials.coffee': 'Follow me on Buy Me a Coffee',
		'socials.github': 'Follow me on GitHub',
		'socials.instagram': 'Follow me on Instagram',
		'socials.linkedin': 'Follow me on LinkedIn',
		'socials.twitter': 'Follow me on Twitter',
		'socials.upwork': 'Hire me on UpWork',
	},
} as const
