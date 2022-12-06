// import express from "express";
const express = require("express")
// import { jwtAuth } from "../middleware/passport.js";
const { jwtAuth } = require("../middleware/passport.js")
// import { Router } from "express";
// import { postComment } from "../controllers/commentController.js";
const { postComment, getComments } = require("../controllers/commentController.js")
// import Student from "../models/student.js";
// import Quote from "../models/quote.js";

const router = express.Router(); // router is express feature to create API endpoints

router.post("/quotes/:id/comment", jwtAuth, postComment);
router.get("/quotes/:id/comment",  getComments);

// export default router;
// exports.router;
module.exports = router;