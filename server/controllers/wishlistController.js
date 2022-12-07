const pool  = require('../dbConfig.js');

const addToWishlist = async (req, res) => {
  try {
    const uid = req.user.id;
    const quoteid = req.params.id;
    const addedItem = await pool.query (" INSERT INTO wishlist ( user_id, quote_id ) VALUES ($1, $2) RETURNING *",
    [uid, quoteid] );
    res.json(addedItem.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.json(error.message);
  }
};

const getWishlist = async (req, res) => {
  try {
 const uid = req.user.id;
 const wishlist = await pool.query("SELECT * FROM wishlist LEFT JOIN quotes ON wishlist.quote_id=quotes.id WHERE wishlist.user_id=$1", [uid])
 res.json(wishlist.rows)
 //
  } catch (error) {
    console.log(error.message);
  }
}

const deleteFromWishlist = async (req, res) => {
  try {
    const uid = req.user.id;
    const quoteid = req.params.id;
    const removeItem = await pool.query (" DELETE FROM wishlist WHERE user_id = $1 AND quote_id = $2",
    [uid, quoteid] );
    res.json(quoteid);
    console.log('item was removed')
 //
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {addToWishlist, getWishlist, deleteFromWishlist}