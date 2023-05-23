const express = require("express");
const router = express.Router();
const auth= require("../middleware/auth")
const Note = require("../models/noteModel");


router.use(auth)

router.get("/", (req, res) => {

  console.log(req.body.email);


  Note.find({email : req.body.email})
    .then((notes) => {
      res.status(200).json(notes);
    })
    .catch((err) => {
      res.status(500).json(err);
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

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Note.findByIdAndUpdate(id, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Note.findByIdAndDelete(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
