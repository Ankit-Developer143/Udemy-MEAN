var express = require("express");
var router = express.Router();
var User = require("../models/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("This is the auth Fields");
});
router.post("/register", function (req, res, next) {
  if (!req.body.email || !req.body.username || !req.body.password) {
    res.json({ success: false, message: "You must Provided an e-mail" });
  } else {
    const user = new User({
      email: req.body.email.toLowerCase(),
      username: req.body.username.toLowerCase(),
      password: req.body.password,
    });
    user.save((err) => {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          message: err,
        });
      } else {
        res.json({ success: false, message: "Success" });
      }
    });
  }
});

module.exports = router;
