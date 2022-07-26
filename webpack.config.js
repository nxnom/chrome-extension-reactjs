// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {
    popup: path.resolve('src/popup.js'),
    options: path.resolve('src/options.js'),
    background: path.resolve('src/background.js'),
    'content-script': path.resolve('src/content-script.js'),
  },
  output: {
    path: path.resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Popup Page',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlWebpackPlugin({
      title: 'Options Page',
      filename: 'options.html',
      chunks: ['options'],
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist'),
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-react']],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    config.devtool = false;
  } else {
    config.mode = 'development';
    config.devtool = 'cheap-source-map';
  }
  return config;
};
