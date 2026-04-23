// next.config.js
const path = require('path');

module.exports = {
  // Define onde a pasta de pages está
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages');
    }
    return config;
  },
  pageExtensions: ['tsx', 'ts', 'js', 'jsx'], // Extensões para páginas
};