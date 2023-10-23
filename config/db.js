require('dotenv').config();

const initOptions = {
  error(err, e) {
    if (e.cn) {
      console.error('Erro de conexão:', err);
    }
  },
};

const pgp = require('pg-promise')(initOptions);

const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const db = pgp(connection);
console.log("Conexão com o banco de dados estabelecida com sucesso!");


module.exports = db;
