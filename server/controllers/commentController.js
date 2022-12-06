// import pool from "../dbConfig.js";
const pool  = require('../dbConfig.js');

const postComment = async (req, res) => {
  try {
    const uid = req.user.id;
    const quoteid = req.params.id;
    const { comment } = req.body;
    const newComment = await pool.query(
      " INSERT INTO comments ( comment, user_id, quote_id ) VALUES ($1, $2, $3) RETURNING *",
      [comment, uid, quoteid]
    );
    res.json(newComment.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
};

const getComments = async (req, res) => {
  try {
    const {id} = req.params;
    const comments = await pool.query(" SELECT * FROM comments WHERE quote_id=$1", [id]);
    res.json(comments.rows)
    console.log('comments', comments)
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {postComment, getComments}