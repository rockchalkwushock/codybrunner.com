import * as React from 'react'
import { GetStaticProps } from 'next'
import { ArticleJsonLd, NextSeo } from 'next-seo'

import { Aside } from '@components/Aside'
import { Container } from '@components/Container'
import { Post } from '@interfaces/post'
import { MDXLayout } from '@layouts/MDXLayout'
import { getMDXBySlug, prepareMDX } from '@lib/mdx'

const technologies = [
  'apollographql',
  'bootstrap',
  'chakra-ui',
  'css3',
  'django',
  'elixir',
  'fly.io',
  'gatsbyjs',
  'graphql',
  'heroku',
  'html5',
  'javascript',
  'mongodb',
  'netlify',
  'nextjs',
  'nodejs',
  'phoenix',
  'postgresql',
  'python',
  'reactjs',
  'react-query',
  'redux',
  'styled-components',
  'tailwindcss',
  'typescript',
  'vercel',
  'x-state',
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
  ...technologies,
]

interface Props extends Post {}

const About: React.FC<Props> = post => {
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
        className="relative grid-in-main lg:grid lg:grid-cols-12 lg:gap-x-2"
      >
        <MDXLayout {...post} />
        <Aside {...post} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const source = await getMDXBySlug('about', 'about')
  const post = await prepareMDX(source)
  return { props: { ...post } }
}

export default About
