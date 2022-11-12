// import pool from "../dbConfig.js";
import express from "express";
import { Router } from "express";
// import Student from "../models/student.js";
// import Quote from "../models/quote.js";

const router = express.Router(); // router is express feature to create API endpoints

// const router = express.Router();

// STUDENT ROUTERS
// router.get("/all", async (req, res) => {
//   console.log(req);
//   const students = await Student.findAll();
//   console.log("students", students);
//   return res.send(students);
// });

// router.get("/student/:id", async (req, res) => {
//   const student = await Student.findByPk(req.params.userId);
//   return res.send(student);
// });

// router.post("/new2", async (req, res) => {
//   console.log("req.body", req.body);
//   const student = await Student.create({
//     firstName: "Agnitaaaa",
//     age: 2,
//     lastName: "Janaaa",
//   });
//   return res.send(student);
// });

// QUOTE ROUTERS
// router.get("/all", async (req, res) => {
//   console.log(req);
//   const quotes = await Quote.findAll();
//   console.log("quotes", quotes);
//   return res.send(quotes);
// });

// router.post("/new2", async (req, res) => {
//   console.log("req.body", req.body);
//   const student = await Student.create({
//     firstName: "Agnitaaaa",
//     age: 2,
//     lastName: "Janaaa",
//   });
//   return res.send(student);
// });

// router.get("/test", (req, res) => {
//   res.send({ msg: "Test route is working" });
// });

// router.get("/all", async (req, res) => {
//   try {
//     const response = await pool.query("SELECT * FROM students");
//     res.json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

export default router;
