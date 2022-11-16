import pool from "../dbConfig.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, passwrod } = req.body;
    console.log(req.body);
    const newUser = await pool.query(
      " INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, passwrod]
    );
    res.json(newUser.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};
