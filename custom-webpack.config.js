module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](@angular|ngx-scrollbar|rxjs)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
}
