const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  target: ['web', 'es4'],
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      { test: /\.hbs$/, loader: 'handlebars-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname, 'public'), 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // new ESLintPlugin(),
  ],
  devServer: {
    port: 9000,
  },
};
