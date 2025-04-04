const app = require('./app');
const serverless = require('serverless-http');

const handler = serverless(app);

module.exports.handler = handler;
