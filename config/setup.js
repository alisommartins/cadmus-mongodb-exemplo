const _ = require('lodash');
const config = require('../config/configurations.json');
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];

global.environmentConfig = environmentConfig;
global.secret_token = environmentConfig.secret_token;

console.log(`global.environmentConfig: ${JSON.stringify(global.environmentConfig, undefined, global.environmentConfig.json_indentation)}`);
