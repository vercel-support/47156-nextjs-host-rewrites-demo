module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path((?!wood/).*)',
          has: [
            {
              type: 'host',
              value: 'wood.47156-nextjs-host-rewrites-demo.vercel-support.app',
            },
          ],
          destination: '/wood/:path*',
        }
      ]
    }
  }
}
