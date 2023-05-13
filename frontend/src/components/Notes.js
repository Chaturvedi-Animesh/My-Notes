import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../redux/slice/note";
import Note from "./Note";

function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </>
  );
}

export default Notes;
