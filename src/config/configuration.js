import { config } from 'dotenv';

config();

const enVars = process.env;
const configuration = Object.freeze({

  serviceUrl: enVars.SERVICE_URL,
  port: enVars.PORT,

});

console.log('config is ::::: ', configuration);
export default configuration;
