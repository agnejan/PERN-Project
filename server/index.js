import express from "express";
import userRoutes from "./routes/userRoutes.js";
import sequelize from "./dbConfig.js";
// import "dotenv/config";
import pool from "./dbConfig.js";

//create express app
const app = express();
// instantiate router feature and add to the express app

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET route to query users table using Sequelize
app.get("/test", async (req, res) => {
  console.log("req", req);
  res.send("test");
});
//using router for a specific api
app.use("/students", userRoutes);
const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  app.listen(5000, () => console.log("Example app listening on port 5000"));
});

// app.listen(5000, () => {
//   console.log("server is now listening at port 5000");
// });

export default app;
