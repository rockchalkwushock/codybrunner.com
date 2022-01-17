import * as React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { Post } from '@interfaces/post'

interface Props extends Post {}

// FIXME: Revisit the implementation of this and clean it up significantly
// It works for now.
const parseEntryToTitle = (str: string) => {
  const slug = str.split('/')[2].replace(/\d+\-/, '')

  return slug.split('').reduce((acc, char, i) => {
    if (i === 0) {
      acc = char.toUpperCase()
      return acc
    }
    if (char === '-') {
      acc += ` ${slug[i + 1].toUpperCase()}`
      return acc
    }
    if (slug[i - 1] === '-') {
      return acc
    }
    acc += char
    return acc
  }, '')
}

// FIXME: Revisit the implementation of this and clean it up significantly
// It works for now.
export const SeriesTableOfContents: React.FC<Props> = ({ series }) => {
  const { asPath } = useRouter()
  return series ? (
    <aside className={`${series ? 'lg:block lg:col-span-2' : 'lg:hidden'}`}>
      <div className="sticky top-0 flex flex-col items-start space-y-4 lg:block lg:px-4 lg:pt-4">
        <details className="" open>
          <summary className="text-2xl font-semibold text-indigo-700 list-none dark:text-aura-orange">
            Series Entries
          </summary>
          <ol className="flex flex-col pt-2 space-y-2 list-decimal list-inside">
            {series.entries.map(entry => (
              <li key={entry}>
                <NextLink
                  href={{
                    pathname: '/blog/[...slug]',
                    query: { slug: entry.split('/') },
                  }}
                  passHref
                >
                  <a
                    className={`${
                      asPath.includes(entry)
                        ? 'text-indigo-700 dark:text-aura-orange font-semibold'
                        : 'text-pink-500 dark:text-aura-purple'
                    } text-lg font-medium`}
                  >
                    {parseEntryToTitle(entry)}
                  </a>
                </NextLink>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </aside>
  ) : null
}
