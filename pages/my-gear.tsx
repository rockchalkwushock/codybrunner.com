import * as React from 'react'
import { GetStaticProps } from 'next'
import { ArticleJsonLd, NextSeo } from 'next-seo'

import { Container } from '@components/Container'
import { Aside } from '@components/Aside'
import { Post } from '@interfaces/post'
import { MDXLayout } from '@layouts/MDXLayout'
import { getMDXBySlug, prepareMDX } from '@lib/mdx'
const hardware = [
  'Anker Soundcore Liberty Air 2 Pro',
  'APC Back-UPS',
  'Apple iMac',
  'Apple M1 MacBook Pro',
  'Autonomous.ai ErgoChair Pro',
  'Autonomous.ai SmartDesk Core',
  'Dell Curved 4K UHD Monitor',
  'Samsung T5 SSD',
  'Soundcore by Anker Life Q35',
  'Thule Crossover 2 Laptop Backpack',
  'VIVO Single Monitor Desk Mount',
]

const software = [
  'Aura Theme',
  'Alfred App',
  'Bartender App',
  'Beekeeper Studio App',
  'Bitwarden App',
  'Cryptomator App',
  'Docker App',
  'Flow App',
  'Homebrew',
  'iTerm App',
  'Numi App',
  'Obsidian App',
  'Paste App',
  'Spotify App',
  'SubTrack App',
  'Telegram App',
  'TLDR',
  'TorGuard VPN App',
  'Visual Studio Code',
  'World Clock App',
]

const customTags = [
  'Colombia',
  'expatriate',
  'Elixir Developer',
  'Frontend Developer',
  'Fullstack Developer',
  'Python Developer',
  'React Developer',
  'Software Developer',
  'Web Developer',
  ...hardware,
  ...software,
]

interface Props extends Post {}

const MyGear: React.FC<Props> = post => {
  return (
    <>
      <NextSeo
        canonical={post.canonicalUrl}
        description={post.description}
        openGraph={{
          article: {
            authors: [post.author],
            modifiedTime: post.updatedAt ?? undefined,
            publishedTime: post.publishedAt ?? undefined,
            tags: customTags,
          },
          type: 'article',
          url: post.canonicalUrl,
        }}
        title={post.title}
      />
      <ArticleJsonLd
        authorName={[post.author]}
        datePublished={post.publishedAt || post.createdAt}
        dateModified={post.updatedAt ?? undefined}
        description={post.description}
        // TODO
        images={[]}
        // TODO
        publisherLogo=""
        publisherName={post.author}
        title={post.title}
        url={post.canonicalUrl}
      />
      <Container
        as="main"
        className="relative grid-in-main lg:grid lg:grid-cols-4 lg:gap-x-6"
      >
        <MDXLayout {...post} />
        <Aside {...post} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const source = await getMDXBySlug('my-gear', 'my-gear')
  const post = await prepareMDX(source)
  return { props: { ...post } }
}

export default MyGear
