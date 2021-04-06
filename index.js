const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const error = require("./src/services/error");

app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

process.env.TZ = "Asia/Colombo";
require("./src/startup/logging")();
require("./src/routes/route")(app);
app.use(error);
require("./src/startup/db")();
require("./src/startup/prod")(app);

//access public folder
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to test project");
});

// listen for requests
app.listen(process.env.backEndPort, () => {
  console.log("Server is listening on port " + process.env.backEndPort);
});
