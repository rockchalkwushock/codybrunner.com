import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { Container } from '@components/Container'
import { Posts } from '@components/Posts'
import { Tags } from '@components/Tags'
import { Post } from '@interfaces/post'
import { constants } from '@utils/constants'
import {
  byDate,
  getAllPostsFrontMatter,
  getPostsByTag,
  getTags,
  sortPosts,
} from '@utils/mdx'

interface Props {
  posts: Array<Post>
  tag: string
  tags: Array<string>
}

const Topic: React.FC<Props> = ({ posts, tag, tags }) => {
  const { asPath } = useRouter()
  return (
    <>
      <NextSeo
        canonical={`${constants.url}${asPath}`}
        description={`All posts on Cody Brunner's blog that are tagged with the ${tag} tag.`}
        openGraph={{
          description: `All posts on Cody Brunner's blog that are tagged with the ${tag} tag.`,
          url: `${constants.url}${asPath}`,
        }}
        title={tag}
      />
      <Container as="main" className="px-8 text-xl grid-in-main space-y-14">
        <h1 className="text-3xl text-center">
          Posts tagged with:{' '}
          <span className="font-bold text-pink-500 dark:text-aura-pink">
            {tag}
          </span>
        </h1>

        <Posts posts={posts} />

        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-semibold dark:text-aura-red">
            Other Tags
          </h2>
          <Tags tags={tags} />
        </div>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsFrontMatter()
  const filePaths = getTags(posts).map(tag => ({
    // HACK: Fixes the ci/cd tag issue.
    params: { tag: tag.includes('/') ? tag.replace('/', '-') : tag },
  }))

  return {
    fallback: false,
    paths: filePaths,
  }
}

export const getStaticProps: GetStaticProps<
  Props,
  { tag: string }
> = async ctx => {
  // HACK: Fixes the ci/cd tag issue.
  const tag = ctx.params!.tag.includes('ci-cd')
    ? ctx.params!.tag.replace('-', '/')
    : ctx.params!.tag

  const posts = await getAllPostsFrontMatter()
  const postsByTag = getPostsByTag(posts, tag)
  const tags = getTags(posts)
    // Remove the current tag from the list of all other tags.
    .filter(t => t !== tag)
    .sort((a, b) => (a > b ? 1 : -1))

  return {
    props: {
      posts: sortPosts(postsByTag, byDate).reverse(),
      tag,
      tags,
    },
  }
}

export default Topic
