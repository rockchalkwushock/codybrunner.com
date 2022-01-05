import * as React from 'react'

import { constants } from '@utils/constants'
import { Icon } from './Icon'

interface Props {}

const pickStyles = (text: string) => {
  const styles: Record<string, string> = {
    github: 'md:hover:bg-black',
    instagram: 'md:hover:bg-instagram',
    linkedin: 'md:hover:bg-linkedin',
    twitter: 'md:hover:bg-twitter',
  }
  return styles[text]
}

export const SocialLinks: React.FC<Props> = () => {
  return (
    <ul className="flex items-center justify-center space-x-2">
      {constants.socials.map(({ label, text, url }) => (
        <li
          className={`social-button group ${pickStyles(text.toLowerCase())}`}
          key={`social-links-${label}`}
        >
          <a
            aria-label={label}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon
              className="w-8 h-8 md:group-hover:animate-wiggle"
              // @ts-ignore
              name={text.toLowerCase()}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
