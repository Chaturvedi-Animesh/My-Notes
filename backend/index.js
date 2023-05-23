const express = require("express");
const mongoose = require("mongoose");
const notesRouter = require("./Routes/noteRouter");
const userRouter = require("./Routes/userRouter");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3001;
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(morgan("combined"));
app.use(cookieParser())

const uri =
  "mongodb+srv://anichaturvedi2898:gV0YSe0HdQKlHJpc@cluster0.ctyy7i8.mongodb.net/MyNotes?retryWrites=true&w=majority";

mongoose.connect(uri);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected to database");

  app.use("/notes", notesRouter);
  app.use("/user", userRouter);

  app.listen(PORT, () => {
    console.log("Application up and running in port ", PORT);
  });
});
