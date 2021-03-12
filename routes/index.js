var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const config = require("../config/database");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
