import { useState } from "react";
import { Button } from "react-bootstrap";

function Note({ note }) {
  const buttonStyle = {
    margin: "2px",
  };

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(note.note);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ width: "500px", height: "fit-content", margin: "1rem auto" }}>
      <div
        style={{
          padding: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "1px 2px 9px rgb(122 122 122)",
          borderRadius: "8px",
        }}
      >
        <div>
          <div style={{ display: editing ? "none" : "" }}>{text}</div>
          <form
            style={{
              display: editing ? "inline" : "none",
            }}
            onSubmit={handleOnSubmit}
          >
            <input
              style={{
                width: "385px",
                border: "none",
                borderBottom: "1px solid black",
              }}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            style={buttonStyle}
            variant="primary"
            onClick={() => setEditing((prevstate) => !prevstate)}
          >
            <i className="fas fa-pen" />
          </Button>
          <Button style={buttonStyle} variant="danger">
            <i className="fas fa-trash" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Note;
