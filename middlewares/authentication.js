const jsonwebtoken = require("jsonwebtoken");
const { SecretKey } = require("../config/env");

const auth = (roles) => (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  jsonwebtoken.verify(token, SecretKey, (error, decoded) => {
    if (error) {
      return res.status(400).send("Invalid token.");
    }

    if (!roles.includes(decoded.role)) {
      return res.status(403).send("Access denied.");
    }

    req.user = decoded;
    next();
  });
};

module.exports = auth;