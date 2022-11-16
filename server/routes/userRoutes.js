import express from "express";
// import { Router } from "express";
import { createUser } from "../controllers/userController.js";
// import Student from "../models/student.js";
// import Quote from "../models/quote.js";

const router = express.Router(); // router is express feature to create API endpoints

router.get("/newuser", createUser);

export default router;
