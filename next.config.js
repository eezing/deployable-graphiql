const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

module.exports = withCSS({
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  webpack: config => {
    config.plugins.push(new webpack.IgnorePlugin(/.flow$/));
    return config;
  }
});
