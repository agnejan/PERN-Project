const express = require("express")
const { jwtAuth } = require("../middleware/passport.js")
const { addToWishlist, getWishlist, deleteFromWishlist } = require("../controllers/wishlistController.js")

const router = express.Router();

router.post("/quotes/:id/addtowishlist", jwtAuth, addToWishlist);
router.get("/wishlist",  jwtAuth, getWishlist);
router.delete("/quotes/:id/removefromwishlist", jwtAuth, deleteFromWishlist);

module.exports = router;