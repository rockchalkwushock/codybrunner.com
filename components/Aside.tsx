import * as React from 'react'
import { useRouter } from 'next/router'

import { Image } from './Image'
import { Share } from './Share'
import { Tags } from './Tags'
import { Post } from '@interfaces/post'
import { formatDateTime } from '@utils/dateTime'

interface Props extends Post {}

export const Aside: React.FC<Props> = post => {
  const { asPath } = useRouter()
  const publishedOn = formatDateTime(
    post.publishedAt || post.createdAt,
    'full-date-localized'
  )
  const updatedOn = post.updatedAt
    ? formatDateTime(post.updatedAt, 'full-date-localized')
    : undefined

  return (
    // TODO Look into the scroll-m-# class and how it works
    <aside className="hidden lg:block">
      <div className="sticky top-0 flex flex-col items-start lg:block lg:border-l lg:border-l-indigo-500 lg:px-4 lg:pt-4">
        <Image
          alt=""
          className="bg-indigo-100 rounded-full"
          height={90}
          src={post.assetPath ?? '/images/pen-and-paper.svg'}
          width={90}
        />
        <div className="flex flex-col space-y-8">
          <dl className="flex flex-col space-y-1">
            <dt className="font-semibold text-indigo-700">Published On</dt>
            <dd className="text-base font-medium leading-6">
              <time dateTime={publishedOn}>{publishedOn}</time>
            </dd>
          </dl>
          {updatedOn && (
            <dl className="flex flex-col space-y-1">
              <dt className="font-semibold text-indigo-700">Updated On</dt>
              <dd className="text-base font-medium leading-6">
                <time dateTime={updatedOn}>{updatedOn}</time>
              </dd>
            </dl>
          )}
          <dl className="flex flex-col space-y-1">
            <dt className="font-semibold text-indigo-700">Read Time</dt>
            <dd className="text-base font-medium leading-6">
              {post.readingTime}
            </dd>
          </dl>
          {asPath !== '/about' && (
            <dl className="flex flex-col space-y-1">
              <dt className="font-semibold text-indigo-700">Tags</dt>
              <dd className="text-base font-medium leading-6">
                <ul className="flex flex-wrap">
                  <Tags tags={post.tags} />
                </ul>
              </dd>
            </dl>
          )}
          <dl className="flex flex-col space-y-1">
            <dt className="font-semibold text-indigo-700">Share</dt>
            <dd>
              <Share {...post} />
            </dd>
          </dl>
        </div>
      </div>
    </aside>
  )
}
