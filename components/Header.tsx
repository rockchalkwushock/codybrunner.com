import * as React from 'react'
import NextLink from 'next/link'

import { ThemeToggle } from './ThemeToggle'
import { constants } from '@utils/constants'

interface Props {
  currentRoute: string
}

export const Navigation: React.FC<Props> = ({ currentRoute }) => {
  return (
    <nav className="flex flex-col w-full px-8 space-y-8">
      <ul className="flex justify-center space-x-6">
        {constants.menu.map(({ path, text }, i) => (
          <li
            className={`text-2xl transform transition ease-in-out duration-200 ${
              currentRoute === path ? 'active-nav-link' : 'nav-link'
            }`}
            key={`nav-link-${path}-${i}`}
          >
            <NextLink href={path} passHref>
              <a>{text}</a>
            </NextLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <div className="p-2.5 rounded-full transition ease-in-out duration-200 group shadow shadow-indigo-300 bg-indigo-100 dark:bg-aura-purple-fading transform dark:shadow-aura-gray hover:shadow-none hover:scale-95">
          <ThemeToggle className="w-8 h-8 md:w-6 md:h-6 text-amber-500 dark:text-aura-orange group-hover:animate-spin" />
        </div>
      </div>
    </nav>
  )
}

export const Header: React.FC<Props> = ({ currentRoute }) => {
  return (
    <header className="flex flex-col mt-12 space-y-8 grid-in-header">
      <h1 className="text-4xl font-extrabold text-center text-indigo-500 dark:text-aura-purple">
        codybrunner.com
      </h1>
      <Navigation currentRoute={currentRoute} />
    </header>
  )
}
