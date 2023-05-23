const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
const jwt = require("../jwt/jwt");

router
  .post("/register", (req, res) => {
    User.findOne({
      email: req.body.email,
    }).then((data) => {
      if (data == null) {
        User.create(req.body)
          .then((data) => {
            const token = jwt.signin(data.email);

            res.status(201).cookie("token", token, { httpOnly: true }).json({
              message: "Success"
            });
          })
          .catch((err) => {
            res.status(400).json({
              message: err,
            });
          });
      } else {
        res.status(400).json({
          message: "Duplicate",
        });
      }
    });
  })
  .post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
      email: email,
    })
      .then((user) => {
        if (user.password == password) {
          const token = jwt.signin(user.email);
          res.status(200).cookie("token", token, { httpOnly: true }).json({
            message: "Success"
          });
        } else {
          res.status(401).json({
            status: "Wrong Password",
          });
        }
      })
      .catch((err) => {
        res.status(401).json({
          status: "Email not found",
        });
      });
  })
  .post('/logout',(req,res)=>{
    res.clearCookie('token').end()
  })

module.exports = router;
