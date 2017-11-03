const env = process.env.NODE_ENV;

const webpackConfigs = {
  'development': require('./webpack.config.dev.js'),
  'production': require('./webpack.config.production.js')
};

module.exports = webpackConfigs[env];
