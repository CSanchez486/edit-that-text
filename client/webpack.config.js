const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // TODO: Add and configure workbox plugins for a service worker and manifest file.
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'J.A.T.E'
      }),

      // Inject service worker to manifest
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),

      // Creates manifest.json file
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'J.A.T.E',
        description: 'Just Another Text Editor',
        start_url: '/',
        publicPath: '/',
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
