import * as React from 'react'
import NextLink from 'next/link'

import { Icon } from './Icon'
import { Post } from '@interfaces/post'

interface Props extends Pick<Post, 'tags'> {}

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <ul className="flex flex-wrap">
      {tags?.map(tag => (
        <li
          key={tag}
          className="flex-none mt-2 mr-2 text-indigo-700 transition duration-300 ease-in-out transform border border-indigo-500 rounded-lg shadow-md cursor-pointer hover:shadow-none hover:bg-indigo-500 hover:text-white hover:border-transparent hover:scale-95"
        >
          <NextLink
            href={{ pathname: '/tags/[tag]', query: { tag } }}
            passHref
            scroll={false}
          >
            <a className="flex text-base items-center w-full px-1 py-0.5 rounded-lg">
              <Icon name="hashtag" />
              <span>{tag}</span>
            </a>
          </NextLink>
        </li>
      ))}
    </ul>
  )
}
