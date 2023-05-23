import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../../redux/slice/note";

function Note({ note }) {
  const dispatch = useDispatch();
  const buttonStyle = {
    margin: "2px",
  };

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(note.note);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateNote({
        id: note._id,
        text: text,
      })
    );
    setEditing(false);
  };

  return (
    <div
      style={{
        width: "500px",
        height: "fit-content",
        margin: "1rem auto",
        padding: "5px",
        boxShadow: "1px 2px 9px rgb(122 122 122)",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: editing ? "none" : "flex",
          padding: "5px",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{text}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={() => setEditing(true)}
          >
            <i className="fas fa-pen" />
          </Button>
          <Button
            style={buttonStyle}
            variant="danger"
            onClick={() => dispatch(deleteNote(note._id))}
          >
            <i className="fas fa-trash" />
          </Button>
        </div>
      </div>

      <form
        style={{
          display: editing ? "flex" : "none",
          padding: "5px",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onSubmit={handleOnSubmit}
      >
        <input
          style={{
            width: "420px",
            border: "none",
            borderBottom: "1px solid black",
          }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button style={buttonStyle} type="submit" variant="primary">
          <i class="fas fa-check" />
        </Button>
      </form>
    </div>
  );
}

export default Note;
