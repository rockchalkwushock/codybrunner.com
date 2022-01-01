import * as React from 'react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

import { AnimatedMobileNav, DesktopNav } from '@components/MenuComponents'
import { constants } from '@utils/constants'
import { isServer } from '@utils/helpers'

interface Props {}

export const BaseLayout: React.FC<Props> = ({ children }) => {
  const [show, setShow] = React.useState<'hidden' | 'flex'>('flex')
  const footerLinks = Object.keys(constants.externalLinks)

  React.useEffect(() => {
    if (!isServer && window.innerWidth >= 1024) {
      window.addEventListener('scroll', onScroll)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onScroll = React.useCallback(
    () => setShow(window.pageYOffset >= 800 ? 'hidden' : 'flex'),
    []
  )
  return (
    <>
      <header
        className={`sticky top-0 z-50 items-center justify-between w-full bg-stone-50 dark:bg-stone-900 ${show}`}
      >
        <DesktopNav />

        <AnimatedMobileNav />
      </header>

      <main className="px-5 grow">
        <motion.section
          animate="animate"
          exit="exit"
          initial="initial"
          variants={{
            animate: {
              opacity: 1,
              transition: {
                duration: 0.4,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.4,
              },
            },
            initial: {
              opacity: 0,
            },
          }}
        >
          <motion.div
            animate="animate"
            className="flex flex-col mx-auto space-y-8 max-w-prose"
            initial="initial"
            variants={{
              animate: {
                transition: { delayChildren: 0, staggerChildren: 0.1 },
              },
              initial: {},
            }}
          >
            {children}
          </motion.div>
        </motion.section>
      </main>

      <footer className="grid max-w-xl grid-cols-1 pb-8 mx-auto text-xl gap-y-4 md:grid-cols-3">
        <ul className="flex flex-col w-full space-y-4">
          {constants.menu.map(({ path, text }) => (
            <li
              className="w-full text-center transition duration-200 transform hover:text-indigo-700 hover:font-semibold hover:scale-110"
              key={`footer-menu-${path}`}
            >
              <NextLink href={path} passHref>
                <a>{text}</a>
              </NextLink>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col space-y-4 flex-colw-full">
          {footerLinks.slice(0, 4).map(key => (
            <li
              className="w-full text-center transition duration-200 transform hover:text-indigo-700 hover:font-semibold hover:scale-110"
              key={`footer-${key}`}
            >
              <a
                aria-label={constants.externalLinks[key].label}
                href={constants.externalLinks[key].url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {key === 'appointlet'
                  ? 'Contact'
                  : constants.externalLinks[key].text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col w-full space-y-4">
          {footerLinks.slice(4).map(key => (
            <li
              className="w-full text-center transition duration-200 transform hover:text-indigo-700 hover:font-semibold hover:scale-110"
              key={`footer-${key}`}
            >
              <a
                aria-label={constants.externalLinks[key].label}
                href={constants.externalLinks[key].url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {key === 'appointlet'
                  ? 'Contact'
                  : constants.externalLinks[key].text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}
