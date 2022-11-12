import pg from "pg";
// // import Sequelize from "sequelize";

// this is connecting postgress database with our backend
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  database: "quoteapp",
  port: "5432",
});

// // const sequelize = new Sequelize("test", "postgres", "postgres", {
// //   dialect: "postgres",
// // });
export default pool;
