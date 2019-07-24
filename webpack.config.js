const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';
  return {
    entry: {
      app: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: devMode ? '[name].bundle.js' : '[name].[hash].bundle.js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: devMode ? 'inline-source-map' : false,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            // 'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
          ],
        },
        {
          test: /\.(png|gif|jpe?g|svg)$/i,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)/i,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css',
      }),
      new Dotenv(),
    ],
  };
};
