require('dotenv').config();

const env = {
  Port: process.env.Port,
  Uri: process.env.Uri,
  SecretKey: process.env.SecretKey,
};

if (!env.Uri || !env.SecretKey) {
  throw new Error('Missing required environment variables');
}

module.exports = env;