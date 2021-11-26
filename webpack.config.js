const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'css', to: 'css' },
        { from: 'img', to: 'img' },
        { from: 'db', to: 'db' },
        { from: 'db/img', to: 'img' },
        { from: 'favicon', to: 'favicon' },
        { from: 'index.html' },
        { from: 'goods.html' }
      ],
    }),
    new CleanWebpackPlugin()
  ]
}
