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
          <li className="rounded-md shadow-md md:w-2/3 bg-indigo-50" key={slug}>
            <NextLink
              href={{
                pathname: '/blog/[...slug]',
                query: { slug: slug.split('/') },
              }}
              passHref
              scroll={false}
            >
              <a aria-label={`Link to ${title} Post`}>
                <div className="relative p-4 text-gray-900 rounded-md outline-none cursor-pointer group hover:bg-stone-200 focus:shadow-sm focus:text-gray-700 ">
                  <div className="relative space-y-4 pointer-events-none lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-y-6">
                    <span
                      className={
                        !publishedAt
                          ? 'w-min absolute -right-6 md:-right-8 md:-top-12 lg:-top-7 -top-10 py-1 px-4 h-min text-white font-bold shadow-lg shadow-orange-500 rounded-full bg-red-500'
                          : 'hidden'
                      }
                    >
                      Draft
                    </span>
                    <div className="flex items-center pr-4 lg:space-x-6 lg:pb-0 lg:col-span-3">
                      <div className="flex-shrink-0 hidden w-12 h-12 lg:inline-block">
                        <Image
                          alt="// TODO"
                          className="rounded-full"
                          height={48}
                          src={assetPath ?? '/images/pen-and-paper.svg'}
                          width={48}
                        />
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="text-lg tracking-tight text-gray-800 lg:text-lg lg:leading-8">
                          {description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center pt-4 space-x-6 border-t border-gray-900 lg:pl-4 lg:space-x-0 lg:border-l lg:border-t-0">
                      <div className="inline-block w-12 h-12 lg:hidden">
                        <Image
                          alt="// TODO"
                          className="rounded-full"
                          height={48}
                          src={assetPath ?? '/images/pen-and-paper.svg'}
                          width={48}
                        />
                      </div>
                      <div>
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6">
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
