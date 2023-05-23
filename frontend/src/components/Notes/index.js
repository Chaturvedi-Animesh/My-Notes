import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NewNote from "./NewNote";
import Notes from "./Notes";

function NotesComponent() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.users);

  useEffect(() => {
    if (user.isLoggedIn === false) {
      navigate("/login");
    }
  });
  return (
    <>
      <NewNote />
      <Notes />
    </>
  );
}

export default NotesComponent;
