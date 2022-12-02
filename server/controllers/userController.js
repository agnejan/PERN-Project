// import pool from "../dbConfig.js";
const pool  = require('../dbConfig.js');
// import bcrypt from "bcrypt";
const bcrypt  = require('bcrypt');
// import jwt from "jsonwebtoken";
const jwt  = require('jsonwebtoken');
// import * as dotenv from "dotenv"
const dotenv  = require('dotenv');

dotenv.config();

// REGISTRATION
const register = async (req, res) => {
  // destructuring request body
  const { name, email, password } = req.body;
  console.log("req.body", req.body);
  try {
    //checking if the email already exists in DB
    const data = await pool.query("SELECT * FROM users WHERE email = $1;", [
      email,
    ]);
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error:
          "This email is already taken, please log in or try another email",
        success: false,
      });
    } else {
      // if user does not exists
      // encrypting the password
      bcrypt.hash(password, 10, (err, hash) => {
        if (err)
          res.status(err).json({
            error: "Server error",
            success: false,
          });
        const newUser = {
          name,
          email,
          password: hash,
        };
        // inserting new user into DB
        pool.query(
          "INSERT INTO users (name, email, password) VALUES($1, $2, $3);",
          [newUser.name, newUser.email, newUser.password],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                error: "Database error",
                success: false,
              });
            } else {
              const token = jwt.sign(
                // generating a jwt token
                {
                  email: newUser.email,
                },
                process.env.SECRET_KEY
              );
              res.status(200).send({
                success: true,
                name: newUser.name,
                jwt: token,
              });
            }
          }
        );
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Database error while registering user!",
      success: false,
    });
  }
};

//LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await pool.query("SELECT * FROM users WHERE email= $1;", [
      email,
    ]);
    const user = data.rows;
    if (user.length === 0) {
      res.status(400).json({
        error: "User is not found, please Register first",
        success: false,
      });
    } else {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          res.status(500).json({
            error: "Server error",
          });
        } else if (result === true) {
          const token = jwt.sign({ email: email }, process.env.SECRET_KEY);
          res
            .status(200)
            .json({ success: true, name: user.name, token: token });
        } else {
          //declaring errors
          if (result != true)
            res.status(400).json({
              error: "Enter correct password!",
              success: false,
            });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occured while signing in!",
      success: false,
    });
  }
};

// LOGOUT
const logout = async () => {};

//GET ALL USERS
const getAllUsers = async (req, res) => {
  // console.log("req.params, req.query", req.params, req.query);
  try {
    const users = await pool.query("SELECT name, email FROM users");
    console.log("users", users);
    res.status(200).json(users.rows);
  } catch (error) {
    res.status(500).json({ error: error, success: false });
  }
};

//GET USER BY ID
const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1;", [
      id,
    ]);
    console.log("user", user);
    res.status(200).json({
      user: user.rows[0],
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
};

// GET USER PROFILE
const getProfile = async (req, res) => {
  // console.log("req.params, req.query", req.params, req.query);
  try {
    // const user = await pool.query(
    //   "SELECT name, email FROM users WHERE id = $1",
    //   [req.user.id]
    // );
    res.json(req.user);
    // console.log("req.user", req.user);
  } catch (error) {
    console.log("err.message", error.message);
    res.status(500).json("Server Error");
  }
};

module.exports = getProfile;
module.exports = register;
module.exports = login;
module.exports = logout;
module.exports = getAllUsers;
module.exports = getOneUser;