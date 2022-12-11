// import pg from "pg";
const pg = require("pg");
// import * as dotenv from "dotenv";
const dotenv = require('dotenv');
// // import Sequelize from "sequelize";

dotenv.config({ path: ".env.local" });
// console.log(process.env.DB_USER);

// this is connecting postgress database with our backend
const { Pool } = pg;

const connectionString = process.env.CONNECTION_STRING;

const pool = new Pool ({
  connectionString,
});

// pool.query('SELECT NOW()', (err, res) => {
//   pool.end()
// })

// const pool = new Pool({
//   user: "xxx",
//   password: "xxx",
//   host: "xxx",
//   database: "xxx",
//   port: "xxx",
// });

// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT,
// });

// // const sequelize = new Sequelize("test", "postgres", "postgres", {
// //   dialect: "postgres",
// // });
// export default pool;
module.exports = pool;
