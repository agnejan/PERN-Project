import express from "express";

import {
  register,
  getOneUser,
  getAllUsers,
  login,
} from "../controllers/userController.js";

const router = express.Router(); // router is express feature to create API endpoints

router.get("/users", getAllUsers);
router.get("/users/:id", getOneUser);
router.post("/register", register);
router.post("/login", login);

export default router;
