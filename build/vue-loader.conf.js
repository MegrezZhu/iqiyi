let utils = require('./utils');
let config = require('../config');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProd
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProd
  })
};
