import * as React from 'react'
import { GetStaticProps } from 'next'
import { ArticleJsonLd, NextSeo } from 'next-seo'

import { Post } from '@interfaces/post'
import { MDXLayout } from '@layouts/MDXLayout'
import { getMDXBySlug, prepareMDX } from '@lib/mdx'

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
            // tags: customTags, // TODO
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
      <MDXLayout {...post} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const source = await getMDXBySlug('about', 'about')
  const post = await prepareMDX(source)
  return { props: { ...post } }
}

export default About
