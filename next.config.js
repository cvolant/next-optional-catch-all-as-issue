module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/blog/:slug*',
        destination: '/news/:slug*',
      },
    ]
  },
}
