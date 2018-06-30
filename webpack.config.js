const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MODE = process.env.NODE_ENV || 'development'
const enabledSourcemap = (MODE === 'development')

const js = {
  mode: MODE,
  entry: `${ __dirname }/src/index.js`,
  output: {
    filename: 'index.js',
    path: `${ __dirname }/public/js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: 'public',
    open: false
  }
}

const css = {
  mode: MODE,
  entry: `${ __dirname }/src/scss/style.scss`,
  output: {
    path: `${ __dirname }/public/css`,
    filename: 'style.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: !enabledSourcemap,
                sourceMap: enabledSourcemap
              }
            }, 
            {
              loader: 'sass-loader',
              options: {
                sourceMap: enabledSourcemap
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = [js, css]
