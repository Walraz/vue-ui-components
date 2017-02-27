const path = require('path')

module.exports = {
  entry: './test/app.js',
  output: {
    filename: 'bundle.js',
    path: './test',
  },
  devtool: 'eval',
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
}
