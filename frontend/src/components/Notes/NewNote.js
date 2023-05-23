import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/slice/note";
function NewNote() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    dispatch(addNote(text));
    setText("");
  };

  return (
    <div
      class="input-group mx-auto my-3"
      style={{ width: "500px", height: "50px" }}
    >
      <input
        type="search"
        class="form-control rounded"
        placeholder="Add New Note"
        aria-label="Search"
        aria-describedby="search-addon"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="button"
        onClick={onSubmitHandler}
        class="btn btn-outline-primary"
      >
        ADD
      </button>
    </div>
  );
}

export default NewNote;
