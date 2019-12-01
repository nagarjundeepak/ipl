const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
const { dbURI } = require("./config/keys");
const users = require("./routes/users");
const matches = require("./routes/matches");
// Authentication by Passport
const passport = require("passport");
app.use(passport.initialize());
require("./config/passport")(passport);
// Connect
mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.error(`Connection error ${err}`);
  });
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use("/api/users", users);
app.use("/api/matches", matches);
// Listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to ${port}`));
