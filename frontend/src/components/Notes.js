import { useState } from "react";
import Note from "./Note";

function Notes() {

  const [notes, setNotes] = useState([
    {
      id: 1,
      note: "This is note 1",
    },
    {
      id: 2,
      note: "This is note 2",
    },
    {
      id: 3,
      note: "This is note 3",
    },
    {
      id: 4,
      note: "This is note 4",
    },
    {
      id: 5,
      note: "This is note 5",
    },
  ]);

  return (
    <>
      {notes.map((note) => (
        <Note 
        note = {note} />
      ))}
    </>
  );
}

export default Notes;
