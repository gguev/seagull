const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    background: path.resolve('src/Background/Background.ts'),
    popup: path.resolve('src/Popup/Popup.tsx'),
    steamContentScript: path.resolve('src/ContentScript/steamContentScript.tsx'),
    gogContentScript: path.resolve('src/ContentScript/gogContentScript.tsx'),
    epicContentScript: path.resolve('src/ContentScript/epicContentScript.tsx'),
    fitgirlContentScript: path.resolve('src/ContentScript/fitgirlContentScript.tsx')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist'),
        }
      ]
    }),
    ...getHtmlPlugins([
      'popup',
      'options'
    ]),
  ],
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve('dist'),
  },
  /* this entire section is fucking up my background script. fix it later if I need to */
  // optimization: {
  //   splitChunks: {
  //     chunks(chunk) {
  //       if (chunk.name !== 'contentScript') {
  //         return chunk.name
  //       }
  //       //return chunk.name !== 'contentScript' 
  //     },
  //   },
  // }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: 'ReviewApp',
    filename: `${chunk}.html`,
    chunks: [chunk],
  }))
}
