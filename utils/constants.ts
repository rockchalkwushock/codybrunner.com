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
  socials: Array<{ label: string; text: string; url: string }>
  twitter: string
  url: string
}

export const appRegex = {
  blogSource: /data\/blog\//,
  mdx: /\.mdx?$/,
}

export interface Project {
  assetPath: string
  description: string
  name: string
  source?: string
  url?: string
}

export type ProjectType =
  | 'elixir'
  | 'enterprise'
  | 'javascript'
  | 'oss'
  | 'python'

interface MyProjects extends Record<ProjectType, Array<Project>> {}

export const constants: Constants = {
  age,
  author: 'Cody Brunner',
  bio: `Cody is a ${age} year old American software developer, Jayhawk, and US Navy veteran originally hailing from the boondocks of Kansas and now currently living with his wife and step-doggo in ${location}.`,
  copyright: `All Content © ${year}`,
  description: 'My stretch of pipe in the world wide inter-tubes.',
  externalLinks: {
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
  socials: [
    {
      label: "Link to Cody Brunner's Github",
      text: 'GitHub',
      url: 'https://github.com/rockchalkwushock',
    },
    {
      label: "Link to Cody Brunner's Instagram",
      text: 'Instagram',
      url: 'https://www.instagram.com/rockchalkwushock',
    },
    {
      label: "Link to Cody Brunner's LinkedIn",
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cody-brunner',
    },
    {
      label: "Link to Cody Brunner's Twitter",
      text: 'Twitter',
      url: 'https://twitter.com/RockChalkDev',
    },
  ],
  twitter: '@RockChalkDev',
  url: baseUrl,
}

export const paths = {
  blog: join(root, 'data', 'blog'),
}

export const projects: MyProjects = {
  elixir: [],
  enterprise: [
    {
      assetPath: '/images/react.svg',
      description:
        'Appointlet is scheduling software that integrates with Google and Office 365 calendars as well as numerous video conferencing providers.',
      name: 'Appointlet',
      url: 'https://appointlet.com',
    },
    {
      assetPath: '/images/react.svg',
      description: 'Chrome extension for Appointlet.',
      name: 'Appointlet Chrome Extension',
      url: 'https://chrome.google.com/webstore/detail/appointlet/oanmefncibhopinffldmcfpkhjfcnggo',
    },
    {
      assetPath: '/images/npm.svg',
      description:
        'JavaScript SDK for developers to work with the Appointlet API.',
      name: 'Appointlet SDK',
      url: 'https://www.npmjs.com/package/@appointlet/appointlet.js',
    },
  ],
  javascript: [
    {
      assetPath: '/images/nextjs.svg',
      description:
        'My personal website and blog built with MDX, NextJS, Tailwind, and TypeScript.',
      name: 'codybrunner.com',
      source: 'https://github.com/rockchalkwushock/codybrunner.com',
      url: 'https://codybrunner.com',
    },
  ],
  oss: [
    {
      assetPath: '/images/npm.svg',
      description: 'My first crack at publishing an OSS package on NPM.',
      name: 'how-to-open-source',
      source: 'https://github.com/rockchalkwushock/how-to-open-source',
      url: 'https://www.npmjs.com/package/how-to-open-source',
    },
    {
      assetPath: '/images/npm.svg',
      description: 'Vkontakte OAuth for the MicroJS framework.',
      name: 'microauth-vkontakte',
      source: 'https://github.com/microauth/microauth-vkontakte',
      url: 'https://www.npmjs.com/package/microauth-vkontakte',
    },
    {
      assetPath: '/images/npm.svg',
      description: 'My personal Eslint config.',
      name: '@rockchalkwushock/eslint-config',
      source: 'https://github.com/rockchalkwushock/eslint-config',
      url: 'https://www.npmjs.com/package/@rockchalkwushock/eslint-config',
    },
    {
      assetPath: '/images/npm.svg',
      description: 'My fork of the popular highlighter.',
      name: '@rockchalkwushock/prism-react-renderer',
      source: 'https://github.com/rockchalkwushock/prism-react-renderer',
      url: 'https://www.npmjs.com/package/@rockchalkwushock/prism-react-renderer',
    },
    {
      assetPath: '/images/npm.svg',
      description:
        'Rehype plugin for parsing code blocks and adding titles to code blocks.',
      name: 'rehype-code-titles',
      source: 'https://github.com/rockchalkwushock/rehype-code-titles',
      url: 'https://www.npmjs.com/package/rehype-code-titles',
    },
  ],
  python: [
    {
      assetPath: '/images/django.svg',
      description: 'A FitBit dashboard built using Django.',
      name: 'django-fit',
      source: 'https://github.com/rockchalkwushock/django-fit',
    },
  ],
}
