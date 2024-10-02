const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restodb-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'icon-fontawesome',
          },
        },

        {
          urlPattern: ({ url }) => url.href.startsWith('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/webfonts/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'icon-fontawesome-webfonts',
          },
        },
      ],
    }),
  ],
});
