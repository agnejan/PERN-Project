import express from "express";
import { jwtAuth } from "../middleware/passport.js";
// import { Router } from "express";
import { postComment } from "../controllers/commentController.js";
// import Student from "../models/student.js";
// import Quote from "../models/quote.js";

const router = express.Router(); // router is express feature to create API endpoints

router.post("/quotes/:id/comment", jwtAuth, postComment);

export default router;
