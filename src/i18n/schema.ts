import { z } from 'zod'

export type Schema = z.infer<typeof schema>

const languageSchema = z.strictObject({
	'about.content.history': z.string(),
	'about.content.paragraph-one': z.string(),
	'about.content.paragraph-two': z.string(),
	'about.content.paragraph-three': z.string(),
	'about.content.title': z.string(),
	'about.metadata.description': z.string(),
	'about.metadata.imageAlt': z.string(),
	'about.metadata.title': z.string(),
	'bookshelf.content.intro': z.string(),
	'bookshelf.content.title': z.string(),
	'bookshelf.metadata.description': z.string(),
	'bookshelf.metadata.title': z.string(),
	'bookshelf.section.one': z.string(),
	'bookshelf.section.two': z.string(),
	'bookshelf.section.three': z.string(),
	'bookshelf.section.four': z.string(),
	'bookshelf.section.five': z.string(),
	'bookshelf.section.six': z.string(),
	'footer.copyright': z.string(),
	'footer.rights': z.string(),
	'home.articles.alt': z.string(),
	'home.articles.heading': z.string(),
	'home.hero.description': z.string(),
	'home.hero.heading': z.string(),
	'home.profile.alt': z.string(),
	'home.resume.button': z.string(),
	'home.resume.button.label': z.string(),
	'home.resume.heading': z.string(),
	'home.resume.item.frontend': z.string(),
	'home.resume.item.fullstack': z.string(),
	'home.resume.item.owner': z.string(),
	'home.resume.item.present': z.string(),
	'home.resume.item.senior': z.string(),
	'home.resume.item.web': z.string(),
	'home.resume.company.heading': z.string(),
	'home.resume.date.heading': z.string(),
	'home.resume.role.heading': z.string(),
	'locale.label': z.string(),
	'nav.about': z.string(),
	'nav.about.label': z.string(),
	'nav.bookshelf': z.string(),
	'nav.bookshelf.label': z.string(),
	'nav.home': z.string(),
	'nav.home.label': z.string(),
	'nav.meet': z.string(),
	'nav.meet.label': z.string(),
	'nav.mobile.close': z.string(),
	'nav.mobile.close.label': z.string(),
	'nav.mobile.subTitle': z.string(),
	'nav.mobile.title': z.string(),
	'nav.projects': z.string(),
	'nav.projects.label': z.string(),
	'nav.uses': z.string(),
	'nav.uses.label': z.string(),
	'projects.content.intro': z.string(),
	// TODO: Add 'projects.content.portfolio....'
	'projects.content.title': z.string(),
	'projects.metadata.description': z.string(),
	'projects.metadata.title': z.string(),
	'socials.email': z.string(),
	'socials.github': z.string(),
	'socials.instagram': z.string(),
	'socials.linkedin': z.string(),
	'socials.telegram': z.string(),
	'socials.twitter': z.string(),
	'uses.content.intro': z.string(),
	// TODO: Add 'uses.content.XXX....'
	'uses.content.section-one.title': z.string(),
	'uses.content.section-two.title': z.string(),
	'uses.content.section-three.title': z.string(),
	'uses.content.title': z.string(),
	'uses.metadata.description': z.string(),
	'uses.metadata.title': z.string(),
})

export const schema = z.strictObject({
	en: languageSchema,
	es: languageSchema,
})
