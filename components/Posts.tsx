import * as React from 'react'
import NextLink from 'next/link'

import { Image } from './Image'
import { Tags } from './Tags'
import { Post } from '@interfaces/post'
import { formatDateTime } from '@utils/dateTime'

interface Props {
  posts: Array<Post>
}

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="flex flex-col items-center space-y-8">
      {posts.map(
        ({
          assetPath,
          createdAt,
          description,
          publishedAt,
          slug,
          tags,
          title,
          updatedAt,
        }) => (
          <li className="post-item" key={slug}>
            <NextLink
              href={{
                pathname: '/blog/[...slug]',
                query: { slug: slug.split('/') },
              }}
              passHref
            >
              <a aria-label={`Link to ${title} Post`}>
                <div className="post-card">
                  <div className="relative space-y-4 pointer-events-none lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-y-6">
                    <span className={!publishedAt ? 'draft-badge' : 'hidden'}>
                      Draft
                    </span>
                    <div className="flex items-center pr-4 lg:space-x-6 lg:pb-0 lg:col-span-3">
                      {/* Tablet & Desktop View */}
                      <div className="relative flex-shrink-0 hidden w-12 h-12 overflow-hidden bg-indigo-200 border border-indigo-200 rounded-full dark:bg-aura-white dark:border-aura-green lg:inline-block">
                        <Image
                          alt="// TODO"
                          className="absolute rounded-full"
                          height={48}
                          src={assetPath ?? '/images/pen-and-paper.svg'}
                          width={48}
                        />
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-left dark:text-aura-white">
                          {title}
                        </h1>
                        <p className="text-lg tracking-tight text-gray-800 dark:text-aura-white lg:text-lg lg:leading-8">
                          {description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center pt-4 space-x-6 border-t border-gray-900 dark:border-aura-white lg:pl-4 lg:space-x-0 lg:border-l lg:border-t-0">
                      {/* Mobile View */}
                      <div className="relative flex-shrink-0 inline-block w-12 h-12 overflow-hidden bg-indigo-200 border border-indigo-200 rounded-full dark:bg-aura-white dark:border-aura-green lg:hidden">
                        <Image
                          alt="// TODO"
                          className="absolute rounded-full"
                          height={48}
                          src={assetPath ?? '/images/pen-and-paper.svg'}
                          width={48}
                        />
                      </div>
                      <div>
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 dark:text-aura-white">
                            <time>
                              {formatDateTime(
                                updatedAt || publishedAt || createdAt,
                                'full-date-localized'
                              )}
                            </time>
                          </dd>
                        </dl>
                        {tags && <Tags tags={tags} />}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </NextLink>
          </li>
        )
      )}
    </ul>
  )
}
