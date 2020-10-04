const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const BUILD_DIRECTORY = path.resolve(__dirname, 'build');
const SOURCE_DIRECTORY = path.resolve(__dirname, 'src');
const FILE_NAME = 'light-weight-table.js';

const config = {
  entry: SOURCE_DIRECTORY,
  output: {
    path: BUILD_DIRECTORY,
    filename: FILE_NAME,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SOURCE_DIRECTORY,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'light-weight-table.css',
    })
  ]
};

module.exports = config;