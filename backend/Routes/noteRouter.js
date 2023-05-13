const express = require("express");
const router = express.Router();

const Note = require("../models/noteModel");

router.get("/", (req, res) => {
  Note.find().then((notes) => {
    res.json(notes);
  }).catch(err=>{
    res.statusCode(500).json(err)
  });
});

router.post("/", (req, res) => {
  const newNote = new Note(req.body);
  newNote
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: err,
      });
    });
});

module.exports = router;
