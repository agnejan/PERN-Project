// import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
// const { Strategy as JwtStrategy, ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
// import * as dotenv from "dotenv";
const dotenv  = require('dotenv');
// import passport from "passport";
const passport  = require('passport');
// import pool from "../dbConfig.js";
const pool  = require('../dbConfig.js');

dotenv.config();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async function (
  jwt_payload,
  done
) {
  try {
    const res = await pool.query(
      "SELECT email, name, id FROM users WHERE email = $1;",
      [jwt_payload.email]
    );
    const user = res.rows[0];
    // console.log("🚀 ~ file: passport.js ~ line 21 ~ user", user);

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
});

const passportConfig = () => {
  passport.use(jwtStrategy);
};



const jwtAuth = passport.authenticate("jwt", { session: false });
// export const oAuth = passport.authenticate("oauth", { session: false });
module.exports = { jwtAuth,passportConfig}