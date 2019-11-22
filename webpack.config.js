const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';
  return {
    entry: {
      app: [
        'core-js/features/promise',
        'core-js/stable/object/assign',
        './src/index.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: devMode ? '[name].bundle.js' : '[name].[hash].bundle.js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
    optimization: {
      minimizer: [
        new TerserJSPlugin({
          cache: true, // существенно ускоряет сборку
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    performance: {
      // hints: false,
      maxEntrypointSize: 512000,
      // maxAssetSize: 512000,
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
            'postcss-loader',
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
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: devMode
            ? JSON.stringify('development')
            : JSON.stringify('production'),
        },
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: true,
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css',
      }),
      new CopyWebpackPlugin([
        { from: 'src/favicon.ico', to: './' },
        { from: 'src/404.html', to: './' },
        { from: '.nojekyll', to: './' },
      ]),
      new Dotenv(),
    ],
  };
};
