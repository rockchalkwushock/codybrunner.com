import * as React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { Cycle, motion, MotionProps, useCycle } from 'framer-motion'

import { Icon } from './Icon'
import { useDimensions } from '@hooks/useDimensions'
import { constants } from '@utils/constants'

const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  React.useEffect(() => {
    if (!mounted) return
    setMounted(true)
  }, [mounted])

  return resolvedTheme === 'dark' ? (
    <Icon className={className} name="sun" onClick={() => setTheme('light')} />
  ) : (
    <Icon className={className} name="moon" onClick={() => setTheme('dark')} />
  )
}

type MenuLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  MotionProps & {
    to: string
  }

const MenuLink = React.forwardRef<HTMLAnchorElement, MenuLinkProps>(
  ({ children, onClick, to, ...rest }, ref) => {
    return (
      <NextLink href={to} passHref>
        <motion.a {...rest} onClick={onClick} ref={ref}>
          {children}
        </motion.a>
      </NextLink>
    )
  }
)

type AnimatedMenuItemProps = React.LiHTMLAttributes<HTMLLIElement> &
  MotionProps & {}

const AnimatedMenuItem: React.FC<AnimatedMenuItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <motion.li
      variants={{
        closed: {
          opacity: 0,
          transition: {
            y: { stiffness: 1000 },
          },
          y: 50,
        },
        open: {
          opacity: 1,
          transition: {
            delay: 0.8,
            y: { stiffness: 1000, velocity: -100 },
          },
          y: 0,
        },
      }}
      {...rest}
    >
      {children}
    </motion.li>
  )
}

const AnimatedMenu: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  const { asPath } = useRouter()
  return (
    <motion.ul
      className="absolute z-20 flex-col items-center p-6 top-16 w-72"
      variants={{
        closed: {
          display: 'none',
          transition: {
            delay: 0.5,
            staggerChildren: 0.05,
            staggerDirection: -1,
          },
          width: 0,
        },
        open: {
          display: 'flex',
          transition: { delayChildren: 0.2, staggerChildren: 0.07 },
          width: '18rem',
        },
      }}
    >
      <motion.div className="flex flex-col items-center flex-grow w-full space-y-6">
        {constants.menu.map(({ path, text }, i) => (
          <AnimatedMenuItem
            aria-disabled={asPath === path}
            className="w-full text-2xl"
            key={`${text.toLocaleLowerCase()}--${i}`}
          >
            <MenuLink
              aria-disabled={asPath === path}
              className={`flex font-semibold justify-center ${
                asPath === path
                  ? 'bg-pink-500 rounded-lg py-1  text-stone-50 uppercase'
                  : ''
              }`}
              onClick={onNavigate}
              to={path}
            >
              <span aria-disabled={asPath === path}>{text}</span>
            </MenuLink>
          </AnimatedMenuItem>
        ))}
      </motion.div>
    </motion.ul>
  )
}

const AnimatedMenuToggle: React.FC<{ toggle: Cycle }> = ({ toggle }) => {
  return (
    <button
      className="absolute z-20 flex items-center justify-center w-12 h-12 bg-transparent border-0 rounded-full outline-none cursor-pointer left-4 top-5 focus:outline-none"
      onClick={() => toggle()}
    >
      <motion.svg height="24" viewBox="0 0 23 23" width="24">
        <motion.path
          className="stroke-current"
          strokeLinecap="round"
          strokeWidth="3"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          className="stroke-current"
          d="M 2 9.423 L 20 9.423"
          strokeLinecap="round"
          strokeWidth="3"
          transition={{ duration: 0.1 }}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          className="stroke-current"
          strokeLinecap="round"
          strokeWidth="3"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </motion.svg>
    </button>
  )
}

export const AnimatedMobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useCycle(false, true)
  const containerRef = React.useRef(null)
  const { height } = useDimensions(containerRef)

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
      return
    }
    document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onNavigate = React.useCallback(() => setIsOpen(), [])

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      className="relative h-20 lg:hidden"
      custom={height}
      initial={false}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 bottom-0 left-0 z-20 bg-indigo-200 shadow-lg"
        variants={{
          closed: {
            clipPath: 'circle(1.875rem at 2.5rem 2.5rem)',
            height: 'inherit',
            transition: {
              damping: 40,
              delay: 0.5,
              stiffness: 400,
              type: 'spring',
            },
            width: '5rem',
          },
          open: (height = 1000) => ({
            clipPath: `circle(${(height * 2 + 200) / 16}rem at 2.5rem 2.5rem)`,
            height: '100vh',
            transition: {
              restDelta: 2,
              stiffness: 20,
              type: 'spring',
            },
            width: '18rem',
          }),
        }}
      />
      <AnimatedMenu onNavigate={onNavigate} />
      <AnimatedMenuToggle toggle={setIsOpen} />
      <motion.button
        animate={isOpen ? 'open' : 'closed'}
        className="absolute z-20 p-2 transition duration-200 bg-indigo-200 rounded-full left-56 top-5 hover:bg-yellow-200"
        variants={{
          closed: {
            opacity: 0,
            transition: {
              delay: 0.1,
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
          open: {
            opacity: 1,
            transition: { delay: 0.7 },
          },
        }}
      >
        <ThemeToggle className="w-6 h-6 text-indigo-800" />
      </motion.button>
    </motion.div>
  )
}

export const DesktopNav: React.FC = () => {
  const { asPath } = useRouter()
  return (
    <div className="hidden lg:flex lg:justify-between lg:max-w-prose lg:mx-auto lg:text-2xl lg:w-full lg:py-8">
      <h1 className="lg:font-semibold lg:text-indigo-500">codybrunner.com</h1>
      <ul className="flex items-center space-x-8">
        {constants.menu.map(({ path, text }) => (
          <AnimatedMenuItem
            aria-disabled={asPath === path}
            className="w-full text-center hover:text-indigo-500"
            key={text.toLowerCase()}
          >
            <MenuLink
              aria-disabled={asPath === path}
              className={`${
                asPath === path ? 'font-semibold text-pink-500 underline' : ''
              }`}
              to={path}
            >
              <span aria-disabled={asPath === path}>{text.toLowerCase()}</span>
            </MenuLink>
          </AnimatedMenuItem>
        ))}
        <AnimatedMenuItem className="p-1 transition duration-200 bg-indigo-200 rounded-full hover:bg-yellow-200">
          <ThemeToggle className="text-indigo-500" />
        </AnimatedMenuItem>
      </ul>
    </div>
  )
}
