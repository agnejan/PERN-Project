import express from "express";
import quoteRoutes from "./routes/quoteRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import cors from "cors";
import { passportConfig } from "./middleware/passport.js";
import passport from "passport";
// import pool from "./dbConfig.js"; //  this is ES6 syntax instead of const pool = require("./db");

//create express app
const app = express();

//middleware

//instantiate router feature and add it to the express app
const router = express.Router();
app.use(router);

app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true }));

// set the cross origin security to allow all origin (TO BE CHANGED IN PRODUCTION!)
app.use(cors()); // this means any front end is allowed to communitate with backend

app.use(passport.initialize());
passportConfig(passport);

app.listen(5000, () => {
  console.log("server is now listening at port 5000");
});

app.use("", quoteRoutes);
app.use("", userRoutes);
app.use("", commentRoutes);

export default app;
