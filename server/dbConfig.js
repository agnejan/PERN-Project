// import pg from "pg";
import Sequelize from "sequelize";

// const { Pool } = pg;

// const pool = new Pool({
//   user: "postgres",
//   password: "postgres",
//   host: "localhost",
//   database: "test",
//   port: "5432",
// });

const sequelize = new Sequelize("test", "postgres", "postgres", {
  dialect: "postgres",
});
export default sequelize;
