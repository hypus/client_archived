require('dotenv').config();

module.exports = {
  env: {
    GRAPHQL_DEV_URI: process.env.GRAPHQL_DEV_URI,
  },
};
