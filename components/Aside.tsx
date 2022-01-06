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
    <aside className="hidden lg:block lg:col-span-1">
      <div className="sticky top-0 flex flex-col items-start space-y-4 lg:block lg:border-l lg:border-l-indigo-500 dark:lg:border-l-aura-orange lg:px-4 lg:pt-4">
        <div className="relative w-24 h-24 overflow-hidden bg-transparent border border-indigo-200 rounded-full dark:bg-aura-white dark:border-aura-orange">
          <Image
            alt="// TODO"
            className="absolute rounded-full"
            height={96}
            src={post.assetPath ?? '/images/pen-and-paper.svg'}
            width={96}
          />
        </div>

        <div className="flex flex-col space-y-8">
          <dl className="aside-section">
            <dt>Published On</dt>
            <dd className="text-base font-medium leading-6">
              <time dateTime={publishedOn}>{publishedOn}</time>
            </dd>
          </dl>
          {updatedOn && (
            <dl className="aside-section">
              <dt>Updated On</dt>
              <dd className="text-base font-medium leading-6">
                <time dateTime={updatedOn}>{updatedOn}</time>
              </dd>
            </dl>
          )}
          <dl className="aside-section">
            <dt>Read Time</dt>
            <dd className="text-base font-medium leading-6">
              {post.readingTime}
            </dd>
          </dl>
          {asPath !== '/about' && (
            <dl className="aside-section">
              <dt>Tags</dt>
              <dd className="text-base font-medium leading-6">
                <Tags tags={post.tags} />
              </dd>
            </dl>
          )}
          <dl className="aside-section">
            <dt>Share</dt>
            <dd>
              <Share {...post} />
            </dd>
          </dl>
        </div>
      </div>
    </aside>
  )
}
