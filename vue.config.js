// module.exports = {
//     publicPath: '/adryantheo.github.io/'
//   }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/adryantheo/'
    : '/'
}