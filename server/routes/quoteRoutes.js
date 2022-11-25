// import pool from "../dbConfig.js";
import express from "express";
import { jwtAuth } from "../middleware/passport.js";
// import { Router } from "express";
import {
  getAllQuotes,
  postNewQuote,
  getOneQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quoteController.js";
// import Student from "../models/student.js";
// import Quote from "../models/quote.js";

const router = express.Router(); // router is express feature to create API endpoints

router.get("/quotes", getAllQuotes);
router.get("/quotes/:id", getOneQuote);
router.put("/quotes/:id", updateQuote);
router.post("/newquote", jwtAuth, postNewQuote); //add here the middleware - using the request object acces user info
router.delete("/quotes/:id", deleteQuote);

export default router;
