import { constants } from './utils/constants'

const config = {
  additionalMetaTags: [
    {
      content: 'width=device-width, initial-scale=1',
      name: 'viewport',
    },
    {
      content: constants.author,
      name: 'author',
    },
  ],
  canonical: constants.url,
  description: constants.description,
  nofollow: false,
  noindex: false,
  openGraph: {
    locale: constants.lang,
    site_name: constants.author,
    type: 'website',
    url: constants.url,
  },
  robotsProps: {
    maxSnippet: 180,
    noarchive: true,
    noimageindex: true,
    nosnippet: false,
    notranslate: false,
  },
  title: 'Home',
  titleTemplate: '%s | codybrunner.com',
  twitter: {
    cardType: 'summary_large_image',
    handle: constants.twitter,
    site: constants.twitter,
  },
}

export default config
