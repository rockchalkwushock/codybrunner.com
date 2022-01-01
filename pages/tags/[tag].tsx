import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { PostCard } from '@components/PostComponents'
import { Tag } from '@components/Tag'
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
      <h1 className="text-2xl text-center">
        Posts tagged with:{' '}
        <span className="font-bold text-pink-500">{tag}</span>
      </h1>

      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map(post => (
          <PostCard key={post.slug} {...post} />
        ))}
      </ul>

      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl">Other Tags</h2>
        <ul className="grid grid-cols-3 gap-4 md:grid-cols-5">
          {tags.map(tag => (
            <li key={tag}>
              <Tag tag={tag} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsFrontMatter()
  const filePaths = getTags(posts).map(tag => ({ params: { tag } }))

  return {
    fallback: false,
    paths: filePaths,
  }
}

export const getStaticProps: GetStaticProps<
  Props,
  { tag: string }
> = async ctx => {
  const tag = ctx.params!.tag
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
