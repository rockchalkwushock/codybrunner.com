import * as React from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'

import '../styles/global.scss'
import SEO from '../next-seo.config'
import { constants } from '@utils/constants'

interface Props extends AppProps {}

const App: React.FC<Props> = ({ Component, pageProps, router }) => {
  const { instagram, linkedin, twitter } = constants.externalLinks

  return (
    <>
      <DefaultSeo {...SEO} />
      <SocialProfileJsonLd
        name={constants.author}
        sameAs={[instagram, linkedin, twitter]}
        type="Person"
        url={constants.url}
      />
      <Component {...pageProps} key={router.asPath} />
    </>
  )
}

export default App
