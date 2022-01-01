/**
 * @type {import('next').NextConfig}
 **/
const customNextConfig = {
  env: {
    IMAGE_WORKER_URL: process.env.IMAGE_WORKER_URL,
  },
  eslint: {
    dirs: ['components', 'hooks', 'layouts', 'lib', 'pages', 'utils'],
  },
  // Needed for `next export` to run correctly.
  images: {
    loader: 'custom',
    path: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      // https://github.com/vercel/next.js/issues/7755
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      }
    }
    if (!dev && isServer) {
      const originalEntry = config.entry

      config.entry = async () => {
        const entries = { ...(await originalEntry()) }
        entries['utils/generate-rss.js'] = 'utils/generate-rss.js'
        return entries
      }
      console.warn('switching to preact')
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
      console.warn('preact')
    }
    return config
  },
}

module.exports = customNextConfig
