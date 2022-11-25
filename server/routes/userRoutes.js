import express from "express";
import validation from "../middleware/validation.js";
import { authMiddleware } from "../middleware/authorizationMiddleware.js";
import { jwtAuth } from "../middleware/passport.js";

import {
  register,
  getOneUser,
  getAllUsers,
  login,
  getProfile,
} from "../controllers/userController.js";

const router = express.Router(); // router is express feature to create API endpoints

router.get("/users", getAllUsers);
router.get("/users/:thisIsAnURLParam", getAllUsers);
// router.get("/users/:id", getOneUser);
router.post("/register", validation, register);
router.post("/login", validation, login);
router.get("/profile", jwtAuth, getProfile);

export default router;
