import * as React from 'react'
import type { NextRouter } from 'next/router'

import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

interface Props extends Pick<NextRouter, 'route'> {}

export const BaseLayout: React.FC<Props> = ({ children, route }) => {
  return (
    <div className="grid min-h-screen gap-y-8 grid-areas-mobile grid-cols-mobile grid-rows-mobile">
      <Header currentRoute={route} />
      {children}
      <Footer currentRoute={route} />
    </div>
  )
}
