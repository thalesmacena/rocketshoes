const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  env: {
    API_URL: 'https://rocketshoes-neon.vercel.app/api'
  }
});
