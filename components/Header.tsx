import * as React from 'react'
import NextLink from 'next/link'

import { constants } from '@utils/constants'

interface Props {
  currentRoute: string
}

export const Navigation: React.FC<Props> = ({ currentRoute }) => {
  return (
    <nav className="w-full px-8">
      <ul className="flex justify-center space-x-6">
        {constants.menu.map(({ path, text }, i) => (
          <li className="" key={`nav-link-${path}-${i}`}>
            <NextLink href={path} passHref>
              <a
                className={`text-2xl ${
                  currentRoute === path
                    ? 'text-red-500 font-semibold underline'
                    : 'text-black'
                }`}
              >
                {text}
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export const Header: React.FC<Props> = ({ currentRoute }) => {
  return (
    <header className="flex flex-col mt-12 space-y-8 grid-in-header">
      <h1 className="text-4xl font-extrabold text-center text-indigo-500">
        codybrunner.com
      </h1>
      <Navigation currentRoute={currentRoute} />
    </header>
  )
}
