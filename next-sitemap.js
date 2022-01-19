// https://github.com/iamvishnusankar/next-sitemap
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
  siteUrl: 'https://codybrunner.com',
}
