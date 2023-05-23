const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  note: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;
