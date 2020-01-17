const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const pages = require('./webpack.pages.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: {
    js: './src/js/js.js',
    css: './src/js/css.js'
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin({
      ytAPIToken: ''
    }),
    new CopyPlugin([
      { from: './src/assets', to: 'assets' }
    ]),
    new HtmlWebpackPlugin({
      template: 'src/views/index.pug',
      filename: 'index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: '2017'
        }
      })
    ],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },

  output: {
    filename: '[name].[chunkhash].js'
  },

  devServer: {
    port: 50000,
    compress: true
  }
}

pages.pages.forEach(e => {
  module.exports.plugins.push(
    new HtmlWebpackPlugin({
      template: `src/views/${e}.pug`,
      filename: `${e}.html`
    })
  )
})
module.exports.plugins = module.exports.plugins.concat([
  new MiniCssExtractPlugin({ filename: 'css.[chunkhash].css' }),
  new CleanWebpackPlugin()
])
