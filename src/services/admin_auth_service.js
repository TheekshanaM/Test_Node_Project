let jwt = require("jsonwebtoken");
let config = require("../../config/config");
require("dotenv").config();

function adminAuthService(req, res, next) {
  if (!config.authenticateState) {
    next();
    return;
  }
  let token = req.headers["x-access-token"];
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.secretKey, function (err, decoded) {
    if (err)
      return res
        .status(403)
        .send({ auth: false, message: "Failed to authenticate token." });

    if (!decoded.isAdmin) {
      return res.status(401).send({ auth: false, message: "Unauthorize." });
    }
    // if everything good, save to request for use in other routes
    // req.userId = decoded._id;
    // req.UserCode = decoded.code;

    next();
  });
}

module.exports = adminAuthService;
