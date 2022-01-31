import * as React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ArticleJsonLd, NextSeo } from 'next-seo'

import { Posts } from '@components/Posts'
import { Post } from '@interfaces/post'
import { constants } from '@utils/constants'
import { getAllPostsFrontMatter } from '@utils/mdx'
import { Container } from '@components/Container'

interface Props {
  posts: Array<Post>
}

const BlogIndex: React.FC<Props> = ({ posts }) => {
  const { asPath } = useRouter()
  return (
    <>
      <NextSeo
        canonical={`${constants.url}${asPath}`}
        description="My musings about the everyday challenges of life and things I have learned in software development."
        openGraph={{
          description:
            'My musings about the everyday challenges of life and things I have learned in software development.',
          url: `${constants.url}${asPath}`,
        }}
        title="Blog"
      />
      <ArticleJsonLd
        authorName={constants.author}
        dateModified={posts[0].updatedAt!}
        datePublished={posts[0].publishedAt || posts[0].createdAt}
        description="My musings about the everyday challenges of life and things I have learned in software development."
        // TODO
        images={[]}
        title="codybrunner-dev.vercel.app | Blog"
        url={`${constants.url}${asPath}`}
      />
      <Container
        as="main"
        className="px-8 text-xl text-justify grid-in-main space-y-14"
      >
        <Posts posts={posts} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPostsFrontMatter()

  return {
    props: {
      // Descending published order.
      posts: posts.reverse(),
    },
  }
}

export default BlogIndex
