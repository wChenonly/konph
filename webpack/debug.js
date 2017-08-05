
var path = require('path')
var gen = require('./packinfogen')

gen(true)

var config = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    library: 'konph',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../.package'),
    filename: 'konph.js',
    umdNamedDefine: true
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: []
}

module.exports = config
