const path = require('path')

const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withReactSvg = require('next-react-svg')

const plugins = [withMDX, withReactSvg]

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['tsx', 'mdx'],
  include: [path.resolve(__dirname, 'src/assets')],
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
  },
}

module.exports = withPlugins([...plugins], nextConfig)
