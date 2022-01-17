import * as React from 'react'

import { Post } from '@interfaces/post'
import { Maybe } from '@interfaces/helpers'

interface Props extends Post {}

// FIXME: Revisit the implementation of this and clean it up significantly
// It works for now.
export const TableOfContents: React.FC<Props> = ({ toc }) => {
  const [activeLink, setActiveLink] = React.useState<Maybe<string>>(null)

  React.useEffect(() => {
    if (!toc) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id)
          }
        })
      },
      { rootMargin: '0% 0% -80% 0%' }
    )

    toc.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      observer.observe(el)
    })

    return () => {
      toc.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return
        observer.unobserve(el)
      })
    }
  }, [toc])

  return toc ? (
    <details
      className="pt-3 border-t border-t-indigo-500 dark:border-t-aura-orange"
      open
    >
      <summary className="text-2xl font-semibold text-indigo-700 list-none dark:text-aura-orange">
        Table of Contents
      </summary>
      <ol className="flex flex-col pt-2 space-y-2 list-decimal list-inside">
        {toc.map(({ id, text }, i) => (
          <li key={`#${i}--${id}`}>
            <a
              className={`${
                activeLink === id
                  ? 'text-indigo-700 dark:text-aura-orange font-semibold'
                  : 'text-pink-500 dark:text-aura-purple'
              } text-lg font-medium  `}
              href={`#${id}`}
            >
              {text
                .replace(/\_/g, '')
                .replace(
                  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                  ''
                )}
            </a>
          </li>
        ))}
      </ol>
    </details>
  ) : null
}
