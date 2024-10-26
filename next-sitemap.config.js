module.exports = {
  siteUrl: 'https://letoasteur.com/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: [
          '/reservations',
        ]
      },
      { userAgent: '*', allow: '/' }
    ]
  },
  exclude: [
    '/reservations',
  ]
}
