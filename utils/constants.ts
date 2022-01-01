// Native
import { join } from 'path'

import { formatDateTime } from './dateTime'

const root = process.cwd()
const year = formatDateTime(new Date(), 'full-year')

// Programmatically handle updating my age.
const age =
  new Date().getMonth() > 1 ? parseInt(year) - 1988 : parseInt(year) - 1 - 1988
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://codybrunner.com'
    : 'http://localhost:3000'
const location = 'Colombia'

type Constants = {
  age: number
  author: string
  bio: string
  copyright: string
  description: string
  externalLinks: Record<string, { label: string; text: string; url: string }>
  lang: 'en-US'
  location: string
  menu: Array<{ path: string; text: string }>
  twitter: string
  url: string
}

export const appRegex = {
  blogSource: /data\/blog\//,
  mdx: /\.mdx?$/,
}

export const constants: Constants = {
  age,
  author: 'Cody Brunner',
  bio: `Cody is a ${age} year old American software developer, Jayhawk, and US Navy veteran originally hailing from the boondocks of Kansas and now currently living with his wife and step-doggo in ${location}.`,
  copyright: `All Content © ${year}`,
  description: 'My stretch of pipe in the world wide inter-tubes.',
  externalLinks: {
    github: {
      label: "Link to Cody Brunner's Github",
      text: 'GitHub',
      url: 'https://github.com/rockchalkwushock',
    },
    instagram: {
      label: "Link to Cody Brunner's Instagram",
      text: 'Instagram',
      url: 'https://www.instagram.com/rockchalkwushock',
    },
    linkedin: {
      label: "Link to Cody Brunner's LinkedIn",
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cody-brunner',
    },
    twitter: {
      label: "Link to Cody Brunner's Twitter",
      text: 'Twitter',
      url: 'https://twitter.com/RockChalkDev',
    },
    resume: {
      label: "Link to Cody Brunner's Resume.",
      text: 'Resume',
      url: `${baseUrl}/resume.pdf`,
    },
    appointlet: {
      label: "Link to Cody Brunner's Appointlet Booking Page.",
      text: 'Schedule a time',
      url: 'https://appt.link/cody-brunner-dev',
    },
    rss: {
      label: 'Link to codybrunner.com RSS Feed.',
      text: 'RSS',
      url: `${baseUrl}/feed.xml`,
    },
    source: {
      label: 'Link to source code on GitHub',
      text: `All Content © ${year}`,
      url: 'https://github.com/rockchalkwushock/codybrunner.com',
    },
  },
  lang: 'en-US',
  location,
  menu: [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/blog', text: 'Blog' },
    // TODO Add projects page.
    // { path: '/projects', text: 'Projects' },
  ],
  twitter: '@RockChalkDev',
  url: baseUrl,
}

export const paths = {
  blog: join(root, 'data', 'blog'),
}
