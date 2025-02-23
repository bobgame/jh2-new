module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        angular: {
          test: /[\\/]node_modules[\\/]@angular[\\/]/,
          name: 'angular',
          chunks: 'all',
        },
        ngxScrollbar: {
          test: /[\\/]node_modules[\\/]ngx-scrollbar[\\/]/,
          name: 'ngx-scrollbar',
          chunks: 'all',
        },
        rxjs: {
          test: /[\\/]node_modules[\\/]rxjs[\\/]/,
          name: 'rxjs',
          chunks: 'all',
        },
        // Add more cache groups as needed
      },
    },
  },
}
