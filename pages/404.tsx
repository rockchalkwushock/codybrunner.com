import * as React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { constants } from '@utils/constants'
import { Container } from '@components/Container'

const Custom404: React.FC = () => {
  const { asPath } = useRouter()
  return (
    <Container as="main" className="px-8 text-center grid-in-main space-y-14">
      <NextSeo
        canonical={`${constants.url}${asPath}`}
        description="404 - Not Found"
        openGraph={{
          description: '404 - Not Found',
          url: `${constants.url}${asPath}`,
        }}
        title="Not Found"
      />

      <h1 className="m-16 text-2xl md:text-4xl">Page Not Found</h1>
    </Container>
  )
}

export default Custom404
