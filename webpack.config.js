const webpack = require('webpack');
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
      }
    ]
  }
};

module.exports = config;