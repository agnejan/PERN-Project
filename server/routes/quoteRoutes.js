// import pool from "../dbConfig.js";
// import express from "express";
const express = require("express")
// import { jwtAuth } from "../middleware/passport.js";
const { jwtAuth } = require("../middleware/passport.js")
// import { Router } from "express";
// import {
//   getAllQuotes,
//   postNewQuote,
//   getOneQuote,
//   updateQuote,
//   deleteQuote,
//   getUserQuotes,
// } from "../controllers/quoteController.js";

const {
  getAllQuotes,
  postNewQuote,
  getOneQuote,
  updateQuote,
  deleteQuote,
  getUserQuotes,
} = require("../controllers/quoteController.js");
// const { Model } = require("sequelize");
// import Student from "../models/student.js";
// import Quote from "../models/quote.js";

const router = express.Router(); // router is express feature to create API endpoints

router.get("/quotes", getAllQuotes);
router.get("/myquotes", jwtAuth, getUserQuotes);
router.get("/quotes/:id", getOneQuote);
router.put("/quotes/:id",jwtAuth, updateQuote);
router.post("/newquote", jwtAuth, postNewQuote); //add here the middleware - using the request object acces user info
router.delete("/myquotes/:id", jwtAuth, deleteQuote); // inserting jwtAuth here adds the request object and thus can access user info

// export default router;
// exports.router;
module.exports = router;