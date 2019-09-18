import { config } from 'dotenv';

config();

const enVars = process.env;
const configuration = Object.freeze({

  serviceUrl: enVars.SERVICE_URL,
  port: enVars.PORT,
  secretKey: enVars.SECRET_KEY,

});

console.log('config is ::::: ', configuration);
export default configuration;
