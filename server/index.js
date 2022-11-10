import express from "express";
import userRoutes from "./routes/userRoutes.js";
import sequelize from "./dbConfig.js";
import "dotenv/config";
import pool from ".dbConfig.js";

//create express app
const app = express();
// instantiate router feature and add to the express app
const router = express.Router();
app.use(router);
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

//write first GET route for testing
router.get("/test", (req, res) => {
  res.send({ msg: "Test route is working" });
});

//GET route to quere users table using Sequelize
app.get("/rawquery", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM students");
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
});

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  app.listen(5000, () => console.log("Example app listening on port 5000"));
});

//using router for a specific api
app.use("/students", userRoutes);

// app.listen(5000, () => {
//   console.log("server is now listening at port 5000");
// });

export default app;
