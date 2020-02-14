const webpack = require('webpack'); // to access built-in plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
require("babel-register");


// Webpack Configuration
module.exports = {
  entry: {
    M: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    publicPath: '/',
    filename: '[name].[hash].B.js',
    chunkFilename: '[id].bundle_[chunkhash].js',
    sourceMapFilename: '[file].map'
  },
  // module
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      /// css file
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      //sass
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },

        ],
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: true,
      cleanOnceBeforeBuildPatterns: ['www', '*'],
      dangerouslyAllowCleanPatternsOutsideProject: false,
  }),
  new webpack.ProgressPlugin(), 
    new HtmlWebpackPlugin({
      chunks: ['M'],
      filename: 'index.html',
      template: 'src/index.html',
      
    }),
  ],

  devServer: {
    port: 80,
    hot: true,
  },
  optimization: {
    splitChunks: {
      name: false,
    }
  }
  // OPTIONAL
  // Reload On File Change
  // watch: true,
  // Development Tools (Map Errors To Source File)
  // devtool 'source-map',
};


