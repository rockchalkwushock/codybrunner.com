import * as React from 'react'
import Script from 'next/script'

import { constants } from '@utils/constants'

interface Props {}

export const ScheduleButton: React.FC<Props> = () => {
  return (
    <div className="flex justify-center">
      <a
        aria-label={constants.externalLinks.appointlet.label}
        className="appointlet-button"
        data-appointlet-modal
        href={constants.externalLinks.appointlet.url}
        // NOTE: This is needed due to my custom styles.
        onClick={() => false}
      >
        {constants.externalLinks.appointlet.text}
      </a>
      <Script src="https://js.appointlet.com" />
    </div>
  )
}
