import * as React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { constants } from '@utils/constants'

const Custom404: React.FC = () => {
  const { asPath } = useRouter()
  return (
    <section className="flex flex-col mx-auto space-y-8 max-w-prose">
      <NextSeo
        canonical={`${constants.url}${asPath}`}
        description="404 - Not Found"
        openGraph={{
          description: '404 - Not Found',
          url: `${constants.url}${asPath}`,
        }}
        title="Not Found"
      />
      <h1>Page Not Found</h1>
    </section>
  )
}

export default Custom404
