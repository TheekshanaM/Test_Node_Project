module.exports = function (expressApp) {
  expressApp.use("/api/test", require("./test_route"));
};
