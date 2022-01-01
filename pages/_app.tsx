import * as React from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

import '../styles/global.scss'
import SEO from '../next-seo.config'

import { BaseLayout } from '@layouts/BaseLayout'
import { constants } from '@utils/constants'

interface Props extends AppProps {}

const App: React.FC<Props> = ({ Component, pageProps, router }) => {
  const { instagram, linkedin, twitter } = constants.externalLinks

  return (
    <ThemeProvider attribute="class" enableColorScheme enableSystem>
      <DefaultSeo {...SEO} />
      <SocialProfileJsonLd
        name={constants.author}
        sameAs={[instagram.url, linkedin.url, twitter.url]}
        type="Person"
        url={constants.url}
      />
      <BaseLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </BaseLayout>
    </ThemeProvider>
  )
}

export default App
