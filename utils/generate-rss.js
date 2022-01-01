import { writeFileSync } from 'fs'
import { Feed } from 'feed'

import { getMDXBySlug, prepareMDX } from '@lib/mdx'
import { constants } from './constants'
import { getAllPostsFrontMatter } from './mdx'

async function generate() {
  const feed = new Feed({
    author: {
      name: constants.author,
      link: constants.url,
    },
    description: constants.description,
    copyright: constants.copyright,
    // favicon: '',
    feedLinks: {
      json: `${constants.url}/feed.json`,
      rss2: `${constants.url}/feed.xml`,
      atom: `${constants.url}/atom.xml`,
    },
    id: constants.url,
    // image: '',
    link: constants.url,
    title: constants.url,
    updated: new Date(),
  })

  const source = await getMDXBySlug('about', 'about')
  const aboutPage = await prepareMDX(source)
  const posts = await getAllPostsFrontMatter()

  const items = [...posts, aboutPage]

  items.forEach(item => {
    feed.addItem({
      date: new Date(item.createdAt),
      description: item.description,
      id: item.slug,
      image: posts.assetPath ?? undefined,
      link: item.canonicalUrl,
      published: new Date(item.publishedAt || item.createdAt),
      title: item.title,
    })
  })

  writeFileSync('./public/feed.xml', feed.rss2())
  writeFileSync('./public/feed.json', feed.json1())
  writeFileSync('./public/atom.xml', feed.atom1())
}

generate()
