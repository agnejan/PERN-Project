import express from "express";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
// import sequelize from "./dbConfig.js";
// import "dotenv/config";
import pool from "./dbConfig.js"; //  this is ES6 syntax instead of const pool = require("./db");

//create express app
const app = express();

//middleware
app.use(cors()); // this means any front end is allowed to communitate with backend, dpmt
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true }));

//ROUTES//

//create a quote
app.post("/newquote", async (req, res) => {
  try {
    const { quote, picture, author, publication, genre } = req.body;
    console.log(req.body);
    const newQuote = await pool.query(
      " INSERT INTO quotes (quote, picture, author, publication, genre) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [quote, picture, author, publication, genre]
    );
    res.json(newQuote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all quotes

app.get("/quotes", async (req, res) => {
  try {
    const allQuotes = await pool.query(" SELECT * FROM quotes");
    res.json(allQuotes.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get one quote

app.get("/quotes/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const quote = await pool.query("SELECT * FROM quotes WHERE quote_id = $1", [
      id,
    ]);
    res.json(quote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//uptade a quote

app.put("/quotes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { quote, picture, author, publication, genre } = req.body;
    const updateQuote = await pool.query(
      "UPDATE quotes SET quote = $1, picture = $2, author = $3, publication = $4, genre = $5 WHERE quote_id = $6",
      [quote, picture, author, publication, genre, id]
    );
    res.json("updated");
  } catch (error) {
    console.error(error.message);
  }
});

//delete a quote

app.delete("/quotes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuote = await pool.query(
      "DELETE FROM quotes WHERE quote_id = $1",
      [id]
    );
    res.json("Quote was deleted");
  } catch (error) {
    console.error(error.message);
  }
});

//--------------------//
//GET route to query users table using Sequelize
// app.get("/test", async (req, res) => {
//   console.log("req", req);
//   res.send("this is sequelize test response");
// });

//using router for a specific api
// app.use("/students", userRoutes);
// const eraseDatabaseOnSync = true;

// sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
//   app.listen(5000, () => console.log("Example app listening on port 5000"));
// });
//------------------//
app.listen(5000, () => {
  console.log("server is now listening at port 5000");
});

export default app;
