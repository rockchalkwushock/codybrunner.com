/**
 * @type {import('next').NextConfig}
 **/
const customNextConfig = {
  eslint: {
    dirs: ['components', 'hooks', 'layouts', 'lib', 'pages', 'utils'],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    return config
  },
}

module.exports = customNextConfig
