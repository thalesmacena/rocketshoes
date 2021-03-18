const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  env: {
    API_URL: 'https://rocketshoes-neon.vercel.app/api'
    // API_URL: 'http://localhost:3000/api'
  }
});
