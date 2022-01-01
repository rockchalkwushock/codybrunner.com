import * as React from 'react'
import { GetStaticProps } from 'next'
import Script from 'next/script'

import { Image } from '@components/Image'
import { PostCard } from '@components/PostComponents'
import { Post } from '@interfaces/post'
import { constants } from '@utils/constants'
import { filterPosts, getAllPostsFrontMatter } from '@utils/mdx'

interface Props {
  featured: Array<Post>
  posts: Array<Post>
}

const Home: React.FC<Props> = ({ featured, posts }) => {
  return (
    <>
      <header className="flex flex-col items-center p-4 space-y-4 bg-indigo-200 rounded-lg dark:bg-indigo-500 md:justify-evenly md:space-y-0 md:flex-row">
        <div className="w-32 md:w-52">
          <Image
            alt="Cody Brunner Avatar"
            className="rounded-full"
            height={32}
            layout="responsive"
            src="/images/me.jpg"
            width={32}
          />
        </div>
        <p className="md:w-60 md:text-lg">{constants.bio}</p>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl text-center">Featured Posts</h2>
          <ul className="flex flex-col space-y-4">
            {featured.map(post => (
              <PostCard key={post.slug} {...post} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl text-center">Latest Posts</h2>
          <ul className="flex flex-col space-y-4">
            {posts.map(post => (
              <PostCard key={post.slug} {...post} />
            ))}
          </ul>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-52">
        <h2 className="absolute z-10 text-4xl font-semibold text-white top-4 left-6 md:left-12">
          Contact Me!
        </h2>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full transform h-52"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
              className="fill-indigo-500"
            ></path>
          </svg>
        </div>
        <a
          aria-label={constants.externalLinks.appointlet.label}
          className="absolute appointlet-button top-18 left-24 md:left-52"
          data-appointlet-modal
          href={constants.externalLinks.appointlet.url}
          // NOTE: This is needed due to my custom styles.
          onClick={() => false}
        >
          {constants.externalLinks.appointlet.text}
        </a>
      </div>
      <Script src="https://js.appointlet.com" />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPostsFrontMatter()

  return {
    props: {
      featured: filterPosts(posts, ({ featured }) => !!featured) ?? [],
      posts: filterPosts(posts, p => !p.featured)
        .reverse()
        .slice(0, 3),
    },
  }
}

export default Home
