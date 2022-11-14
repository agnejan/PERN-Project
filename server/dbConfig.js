import pg from "pg";
// // import Sequelize from "sequelize";

// this is connecting postgress database with our backend
const { Pool } = pg;

// const pool = new Pool({
//   user: "xxxx",
//   password: "xxx",
//   host: "xxx",
//   database: "xxx",
//   port: "xxx",
// });

const pool = new Pool({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  database: process.env.database,
  port: process.env.port,
});

// // const sequelize = new Sequelize("test", "postgres", "postgres", {
// //   dialect: "postgres",
// // });
export default pool;
