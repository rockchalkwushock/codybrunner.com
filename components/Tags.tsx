import * as React from 'react'
import NextLink from 'next/link'

import { Icon } from './Icon'
import { Post } from '@interfaces/post'

interface Props extends Pick<Post, 'tags'> {}

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <ul className="flex flex-wrap">
      {tags?.map(tag => (
        <li key={tag} className="app-tag">
          <NextLink href={{ pathname: '/tags/[tag]', query: { tag } }} passHref>
            <a>
              <Icon name="hashtag" />
              <span>{tag}</span>
            </a>
          </NextLink>
        </li>
      ))}
    </ul>
  )
}
