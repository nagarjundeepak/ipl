const jwttoken = require("jsonwebtoken");
const keys = require("./keys");
// Access Middleware
module.exports = function(req, res, next) {
  // getting auth token from header
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send("Access Denied!");
  } else {
    try {
      const verified = jwt.verify(token, keys.secretKey);
      req.user = verified;
      next();
    } catch (err) {
      return res.status(400).send("Invalid Token");
    }
  }
};
