import { resolve } from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

export default {
  context: resolve('frontend'),
  entry: {
    bundle: ['./vendors.js', './index.js']
  },
  output: {
    path: resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:4000'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.less', '.json'],
    alias: {
      node_modules: resolve('./node_modules'),
      assets: resolve('frontend/assets'),
      styles: resolve('frontend/styles'),
      store: resolve('frontend/store'),
      constants: resolve('frontend/constants'),
      actions: resolve('frontend/actions'),
      reducers: resolve('frontend/reducers'),
      containers: resolve('frontend/containers'),
      components: resolve('frontend/components'),
      helpers: resolve('frontend/helpers')
    }
  },
  module: {
    rules: [
     { test: /\.(js|jsx)?$/, loader: 'babel-loader', exclude: /node_modules/ },
     { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
     { test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
     { test: /\.(png|jpg|gif)$/, loader: "file-loader?name=images/img-[hash:6].[ext]" },
     { test: /\.html$/, loader: 'html-loader' },
     {
       test: /\.css$/,
       use: [
         'style-loader',
         {
      	   loader: 'css-loader',
      	   options: { modules: true },
      	 },
      ],
     },
     { test: /\.(scss|sass)$/, use: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        'sass-loader'
       ]
     }
    ]
  }
};
