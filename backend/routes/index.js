const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Mili Ayarde");
});

module.exports = routes;
