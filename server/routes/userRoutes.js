import pool from "../dbConfig.js";
import express from "express";
import { Router } from "express";
import Student from "..models/student.js";

const router = Router(); // router is express feature to create API endpoints

// const router = express.Router();

router.get("/", async (req, res) => {
  const students = await Student.findAll();
  console.log(students, "students");
  return res.send(students);
});

router.get("/:studentId", async (req, res) => {
  const student = await Student.findByPk(req.params.userId);
  return res.send(user);
});

router.post("/new", async (req, res) => {
  console.log("req.body", req.body);
  const user = await Student.create({
    firstName: req.body.firstName,
  });

  return res.send(user);
});

// router.get("/all", async (req, res) => {
//   try {
//     const response = await pool.query("SELECT * FROM students");
//     res.json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

export default router;
