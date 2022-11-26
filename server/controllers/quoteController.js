import pool from "../dbConfig.js";

export const getAllQuotes = async (req, res) => {
  try {
    console.log("req", req);
    const allQuotes = await pool.query(" SELECT * FROM quotes");
    res.json(allQuotes.rows);
  } catch (error) {
    console.error(error.message);
  }
};

export const postNewQuote = async (req, res) => {
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
      " INSERT INTO quotes (quote, picture, author, publication, genre, user_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", // here inserting extra column with user ID
      [quote, picture, author, publication, genre, uid]
    );
    res.json(newQuote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};
// add user reference

export const getOneQuote = async (req, res) => {
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
};

export const updateQuote = async (req, res) => {
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
};
//add restriction - JOIN sql command

export const deleteQuote = async (req, res) => {
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
};
//add restriction
