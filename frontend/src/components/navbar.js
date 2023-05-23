import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slice/user";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  return (
    <>
      <nav class="navbar navbar-dark bg-primary px-5">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1" href="#">
            My Notes
          </span>
          <button style={{
            display : user.isLoggedIn ? "" : "none"
          }}
            type="button"
            class="btn btn-danger"
            onClick={() => dispatch(logoutUser())}
          >
            Log out
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
