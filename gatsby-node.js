const path = require('path');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = function({config, env}) {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, 'src'),
      extensions: ['', '.js', '.jsx', '.json'],
    }
  });
  return config;
}
