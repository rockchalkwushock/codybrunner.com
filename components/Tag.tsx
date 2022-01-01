import * as React from 'react'
import NextLink from 'next/link'

import { Icon } from './Icon'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string
}

export const Tag = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, onClick, tag, ...rest }, ref) => {
    return (
      <NextLink
        href={{ pathname: '/tags/[tag]', query: { tag } }}
        passHref
        scroll={false}
      >
        <a
          {...rest}
          className="bg-indigo-600 text-white dark:bg-indigo-800 flex items-center px-2 py-1.5 rounded-lg group-hover:bg-pink-600 hover:bg-pink-600"
          onClick={onClick}
          ref={ref}
        >
          <Icon name="hashtag" />
          {tag}
        </a>
      </NextLink>
    )
  }
)
