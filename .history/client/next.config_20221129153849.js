/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
module.exports = withTM(withCSS(withSass({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      }
    })
    return config
  }
})))