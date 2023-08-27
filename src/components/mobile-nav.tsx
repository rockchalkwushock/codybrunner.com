import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { cn } from '~/utils/helpers'

export function MobileNav({
  currentPath,
}: {
  currentPath: string
}): JSX.Element {
  return (
    <Popover className="pointer-events-auto md:hidden">
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-primary-800 shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur dark:bg-primary-800/90 dark:text-primary-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <svg
          aria-hidden="true"
          className="ml-3 h-auto w-2 stroke-primary-500 group-hover:stroke-primary-700 dark:group-hover:stroke-primary-400"
          viewBox="0 0 8 6"
        >
          <path
            className="fill-none"
            d="M1.75 1.75 4 4.25l2.25-2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-primary-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-primary-900/5 dark:ring-primary-800 dark:bg-primary-900"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <svg
                  aria-hidden="true"
                  className="text-sm h-6 w-6 font-medium text-primary-600 dark:text-primary-400"
                  view-box="0 0 24 24"
                >
                  <path
                    className="stroke-current fill-none"
                    d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </Popover.Button>
              <h2 className="text-sm font-medium text-primary-600 dark:text-primary-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-primary-100 text-base text-primary-800 dark:divide-primary-100/5 dark:text-primary-300">
                <li className="">
                  <Popover.Button
                    aria-label="Go to Home Page"
                    as="a"
                    className={cn(
                      'block py-2',
                      currentPath === '/' &&
                        'text-accent-500 dark:text-accent-400 font-semibold'
                    )}
                    href="/"
                  >
                    Home
                  </Popover.Button>
                </li>
                <li className="">
                  <Popover.Button
                    aria-label="Go to About Page"
                    as="a"
                    className={cn(
                      'block py-2',
                      currentPath.startsWith('/about') &&
                        'text-accent-500 dark:text-accent-400 font-semibold'
                    )}
                    href="/about"
                  >
                    About
                  </Popover.Button>
                </li>
                <li className="">
                  <Popover.Button
                    aria-label="Go to Bookshelf Page"
                    as="a"
                    className={cn(
                      'block py-2',
                      currentPath.startsWith('/bookshelf') &&
                        'text-accent-500 dark:text-accent-400 font-semibold'
                    )}
                    href="/bookshelf"
                  >
                    Bookshelf
                  </Popover.Button>
                </li>
                <li className="">
                  <Popover.Button
                    aria-label="Go to Projects Page"
                    as="a"
                    className={cn(
                      'block py-2',
                      currentPath.startsWith('/projects') &&
                        'text-accent-500 dark:text-accent-400 font-semibold'
                    )}
                    href="/projects"
                  >
                    Projects
                  </Popover.Button>
                </li>
                <li className="">
                  <Popover.Button
                    aria-label="Go to Uses Page"
                    as="a"
                    className={cn(
                      'block py-2',
                      currentPath.startsWith('/uses') &&
                        'text-accent-500 dark:text-accent-400 font-semibold'
                    )}
                    href="/uses"
                  >
                    Uses
                  </Popover.Button>
                </li>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
