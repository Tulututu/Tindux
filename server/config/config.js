require('dotenv').config();
const env = process.env

const development = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  host: env.HOST,
  dialect: "mysql",
  port: env.PORT
};

const production = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  host: env.HOST,
  dialect: "mysql",
  port: env.PORT
};

const test= {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  host: env.HOST,
  dialect: "mysql",
  port: env.PORT
};

module.exports = {development, production, test}
