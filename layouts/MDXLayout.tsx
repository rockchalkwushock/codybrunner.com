import * as React from 'react'
import NextLink from 'next/link'
import { getMDXComponent } from 'mdx-bundler/client'

import { CodeBlock } from '@components/CodeBlock'
import { Image } from '@components/Image'
import { Posts } from '@components/Posts'
import { Post } from '@interfaces/post'
import { formatDateTime } from '@utils/dateTime'
import { Tags } from '@components/Tags'

interface Props extends Post {
  relatedPosts?: Array<Post>
}

export const MDXLayout: React.FC<Props> = ({ source, ...post }) => {
  const MDXContent = React.useMemo(() => getMDXComponent(source), [source])

  return (
    <div className="flex flex-col space-y-8 lg:col-span-3">
      <div className="flex flex-col items-center space-y-8">
        <header className="flex flex-col w-full px-8 space-y-4 rounded-t-lg">
          <h1 className="text-4xl font-medium leading-tight text-center text-indigo-700 dark:text-aura-purple lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-col items-center w-full lg:flex-row lg:justify-between lg:items-start">
            <div className="flex items-center space-x-2 lg:hidden">
              <div className="relative bg-white border border-indigo-600 rounded-full dark:border-aura-purple h-9 w-9">
                <Image
                  alt="Cody Brunner Avatar"
                  className="rounded-full"
                  layout="fill"
                  objectFit="contain"
                  src="/images/me.jpg"
                />
              </div>
              <div className="flex flex-col">
                <p>
                  {`${post.author} / ${formatDateTime(
                    post.publishedAt || post.createdAt,
                    'full-date-localized'
                  )}`}
                </p>
                {post.updatedAt && (
                  <span>
                    Updated:{' '}
                    {formatDateTime(post.updatedAt, 'full-date-localized')}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              <p className="">{post.readingTime}</p>
            </div>
          </div>
        </header>
        {/* <hr className="w-full border-indigo-500 lg:hidden" /> */}
        <article
          className="w-screen px-8 prose prose-xl break-words lg:w-full prose-slate lg:prose-2xl dark:prose-invert"
          id="postContent"
        >
          <MDXContent
            components={{
              div: ({ children, className }) =>
                className === 'rehype-code-title' ? (
                  <div className={`${className}`}>{children}</div>
                ) : (
                  <div>{children}</div>
                ),
              // @ts-ignore
              pre: ({ children: { props } }) => (
                <CodeBlock
                  code={props.children.trim()}
                  language={
                    props.className && props.className.replace('language-', '')
                  }
                />
              ),
            }}
          />
        </article>
      </div>
      <div className="flex flex-col px-8 space-y-8">
        {!post.slug.match(/(about|my-gear)/) && post.tags && (
          <section className="flex flex-col space-y-8">
            {/* <hr className="w-full border-indigo-500" /> */}
            <div className="flex items-center justify-between">
              {post.tags && <Tags tags={post.tags} />}
            </div>
            {/* <hr className="w-full border-indigo-500" /> */}
          </section>
        )}
        <section
          className={`flex ${
            post.previousPost && post.nextPost
              ? 'justify-between'
              : post.previousPost
              ? 'justify-end'
              : 'justify-start'
          }`}
        >
          {post.nextPost && (
            <NextLink
              href={{
                pathname: '/blog/[...slug]',
                query: { slug: post.nextPost.split('/') },
              }}
              passHref
            >
              <a className="pagination-button">Previous</a>
            </NextLink>
          )}
          {post.previousPost && (
            <NextLink
              href={{
                pathname: '/blog/[...slug]',
                query: { slug: post.previousPost.split('/') },
              }}
              passHref
            >
              <a className="pagination-button">Next</a>
            </NextLink>
          )}
        </section>
        {!!post.relatedPosts && !!post.relatedPosts.length && (
          <section className="flex flex-col space-y-8">
            <h1 className="text-3xl font-semibold text-center underline">
              Related Posts
            </h1>
            <Posts posts={post.relatedPosts} />
          </section>
        )}
      </div>
    </div>
  )
}
