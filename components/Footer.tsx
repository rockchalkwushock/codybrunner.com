import * as React from 'react'

import { Container } from './Container'
import { Navigation } from './Header'
import { SocialLinks } from './SocialLinks'
import { constants } from '@utils/constants'

interface Props {
  currentRoute: string
}

export const Footer: React.FC<Props> = ({ currentRoute }) => {
  return (
    <footer className="pb-8 mt-16 space-y-4 grid-in-footer">
      <Container>
        <Navigation currentRoute={currentRoute} />
      </Container>
      <Container>
        <SocialLinks />
      </Container>
      <Container className="text-center">
        <a
          aria-label={constants.externalLinks.source.label}
          href={constants.externalLinks.source.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-xl font-semibold dark:text-aura-red hover:underline">
            {constants.externalLinks.source.text}
          </span>
        </a>
      </Container>
    </footer>
  )
}
