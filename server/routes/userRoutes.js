import express from "express";

import {
  register,
  getOneUser,
  getAllUsers,
  login,
  getProfile,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router(); // router is express feature to create API endpoints

router.get("/users", getAllUsers);
router.get("/users/:id", getOneUser);
router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);

export default router;
