// import pool from "../dbConfig.js";
const pool  = require("../dbConfig.js");

const getAllQuotes = async (req, res) => {
  try {
    // console.log("req", req);
    const allQuotes = await pool.query(" SELECT * FROM quotes");
    res.json(allQuotes.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const getUserQuotes = async (req, res) => {
  try {
    const uid = req.user.id;
    const userQuotes = await pool.query(
      " SELECT * FROM quotes WHERE user_id = $1",
      [uid]
    );
    res.json(userQuotes.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const postNewQuote = async (req, res) => {
  try {
    const uid = req.user.id;
    console.log(
      "🚀 ~ file: quoteController.js ~ line 16 ~ postNewQuote ~ uid",
      uid
    );

    const { quote, picture, author, publication, genre } = req.body;
    console.log(
      "🚀 ~ file: quoteController.js ~ line 17 ~ postNewQuote ~ req.body",
      req
    );
    const newQuote = await pool.query(
      " INSERT INTO quotes (quote, picture, author, publication, genre, user_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [quote, picture, author, publication, genre, uid]
    );
    res.json(newQuote.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
};

const getOneQuote = async (req, res) => {
  try {
    // console.log("req.params", req.params);
    const { id } = req.params; // this is instead writing const id = req.params.id
    const quote = await pool.query("SELECT * FROM quotes WHERE id = $1", [id]);
    res.json(quote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

const updateQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const { quote, picture, author, publication, genre } = req.body;
    const updateQuote = await pool.query(
      "UPDATE quotes SET quote = $1, picture = $2, author = $3, publication = $4, genre = $5 WHERE id = $6",
      [quote, picture, author, publication, genre, id]
    );
    res.json("updated");
  } catch (error) {
    console.error(error.message);
  }
};
//add restriction - JOIN sql command

const deleteQuote = async (req, res) => {
  try {
    const uid = req.user.id;
    const { id } = req.params;
    const deleteQuote = await pool.query(
      "DELETE FROM quotes WHERE id = $1 AND user_id = $2",
      [id, uid]
    );
    res.json("Quote was deleted");
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
};

module.exports = {deleteQuote,
updateQuote, 
getOneQuote,
postNewQuote,
getUserQuotes,
getAllQuotes }
// exports.deleteQuote;
// exports.updateQuote;
// exports.getOneQuote;
// exports.postNewQuote;
// exports.getUserQuotes;
// exports.getAllQuotes;
