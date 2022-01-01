// https://github.com/iamvishnusankar/next-sitemap
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://codybrunner.com'
    : 'localhost:3000'

module.exports = {
  changefreq: 'weekly',
  exclude: ['/api/*'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        allow: '/',
        userAgent: '*',
      },
      {
        disallow: '/api',
        userAgent: '*',
      },
    ],
  },
  siteUrl: baseUrl,
}
