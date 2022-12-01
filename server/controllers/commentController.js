import pool from "../dbConfig.js";

export const postComment = async (req, res) => {
  try {
    const uid = req.user.id;
    const quoteid = req.params.id;
    const { comment } = req.body;
    const newComment = await pool.query(
      " INSERT INTO comments ( comment, user_id, quote_id ) VALUES ($1, $2, $3) RETURNING *",
      [comment, uid, quoteid]
    );
    res.json(newComment.rows);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
};
