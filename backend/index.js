const express = require("express");
const mongoose = require("mongoose");
const notesRouter = require("./Routes/noteRouter");

const app = express();
const PORT = 3001;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://anichaturvedi2898:gV0YSe0HdQKlHJpc@cluster0.ctyy7i8.mongodb.net/MyNotes?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected to database");

  app.use("/notes", notesRouter);

  app.listen(PORT, () => {
    console.log("Application up and running in port ", PORT);
  });
});
