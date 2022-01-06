import * as React from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import { ThemeProvider } from 'next-themes'

import '../styles/global.scss'
import SEO from '../next-seo.config'

import { BaseLayout } from '@layouts/BaseLayout'
import { constants } from '@utils/constants'

interface Props extends AppProps {}

const App: React.FC<Props> = ({ Component, pageProps, router }) => {
  const [_, instagram, linkedin, twitter] = constants.socials

  return (
    <ThemeProvider attribute="class" enableColorScheme enableSystem>
      <DefaultSeo {...SEO} />
      <SocialProfileJsonLd
        name={constants.author}
        sameAs={[instagram.url, linkedin.url, twitter.url]}
        type="Person"
        url={constants.url}
      />
      <BaseLayout route={router.route}>
        <Component {...pageProps} key={router.asPath} />
      </BaseLayout>
    </ThemeProvider>
  )
}

export default App
