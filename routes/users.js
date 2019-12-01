const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const keys = require("../config/keys");
const passport = require("passport");
// Get Models
const { Users, regValidate, loginValidate } = require("../models/Users");
// Authentication
const auth = require("../config/auth");

router.get("/", (req, res) => {
  res.send("Hello Users API");
});

// POST method == Register
router.post("/register", (req, res) => {
  // Validation checkpoint
  const { error } = regValidate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      type: error.details[0].path[0],
      msg: error.details[0].message
    });
  }
  // new user auth
  const newUser = new Users({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  // Checking whether email is already there
  Users.findOne({ email: req.body.email }).then(emailMatch => {
    if (emailMatch) {
      return res.status(400).json({
        status: "error",
        type: "email",
        msg: "Email is already registered with us."
      });
    }
    // Check Username already taken
    Users.findOne({ username: req.body.username }).then(userNameMatch => {
      if (userNameMatch) {
        return res.status(400).json({
          status: "error",
          type: "username",
          msg: "Username is already taken."
        });
      }
      // Hashing the password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          // putting this to DB
          newUser
            .save()
            .then(post => {
              res.json(post);
            })
            .catch(err => {
              console.error(err);
            });
        });
      });
    });
  });
});

// POST == Login
router.post("/login", (req, res) => {
  // Validation checkpoint
  const { error } = loginValidate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      type: error.details[0].path[0],
      msg: error.details[0].message
    });
  }
  // Check email available in DB or not
  Users.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(400).json({
        status: "error",
        type: "email",
        msg: "Email is not available"
      });
    }
    // check for password correct or wrong
    bcrypt.compare(req.body.password, user.password).then(isMatch => {
      if (isMatch) {
        // generating JWT
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email
        };

        jwt.sign(payload, keys.secretKey, { expiresIn: 3600 }, (err, token) => {
          // getting user from token
          const decode = jwt_decode(token);

          res.json({
            success: true,
            token: "Bearer " + token,
            decode: decode
          });
        });
      } else {
        return res.status(400).json({
          status: "error",
          type: "password",
          msg: "Password is incorrect"
        });
      }
    });
  });
});

// Protected Route
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("success");
  }
);

// Exporting
module.exports = router;
