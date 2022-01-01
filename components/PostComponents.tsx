import * as React from 'react'
import NextLink from 'next/link'

import { Image } from './Image'
import { Tag } from './Tag'
import { Post } from '@interfaces/post'
import { formatDateTime } from '@utils/dateTime'

interface PostCardProps extends Post {}

const truncate = (text: string, by = 80) =>
  text.length > by ? `${text.substring(0, by)}...` : text

export const PostCard: React.FC<PostCardProps> = ({
  assetPath,
  createdAt,
  description,
  publishedAt,
  slug,
  tags,
  title,
  updatedAt,
}) => {
  return (
    <PostLink className="post-card group" slug={slug}>
      <div className="flex items-center space-x-6 md:space-x-0 md:space-y-6 md:flex-col">
        <div className="w-28 md:w-32">
          <Image
            alt=""
            className="rounded-full bg-stone-100"
            height={32}
            width={32}
            layout="responsive"
            // TODO Get a stock image to stick here.
            src={assetPath ?? ''}
          />
        </div>
        <div className="flex flex-col w-full space-y-2">
          <div className="flex flex-col">
            <h1 className="text-2xl font-medium">{title}</h1>
            <span>
              {formatDateTime(
                updatedAt || publishedAt || createdAt,
                'full-date-localized'
              )}
            </span>
            <hr className="hidden w-full my-2 border-pink-500 md:block" />
          </div>
          <p className="hidden font-semibold text-ellipsis md:block">
            {truncate(description)}
          </p>
          {tags && tags.length > 0 && (
            <>
              <hr className="hidden w-full my-2 border-pink-500 md:block" />
              <ul className="flex space-x-3">
                {tags.slice(0, 3).map((tag, i) => (
                  <Tag key={`tag-${tag}-${i}`} tag={tag} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </PostLink>
  )
}

interface PostLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  slug: string
}

export const PostLink = React.forwardRef<HTMLAnchorElement, PostLinkProps>(
  ({ children, onClick, slug, ...rest }, ref) => {
    return (
      <NextLink
        // Because posts are catch-all routes we need
        // "slug" to be an array NOT a string.
        href={{ pathname: '/blog/[...slug]', query: { slug: slug.split('/') } }}
        passHref
        // We set this to false so we don't get the wonky behavior of NextLink scrolling
        // us to the top of the page and then framer-motion initiating the page transition.
        scroll={false}
      >
        <a {...rest} onClick={onClick} ref={ref}>
          {children}
        </a>
      </NextLink>
    )
  }
)
