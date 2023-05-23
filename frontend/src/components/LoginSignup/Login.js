import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slice/user";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const user = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/notes");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    dispatch(loginUser(loginData));
  };

  return (
    <form
      style={{
        width: "500px",
        height: "fit-content",
        margin: "1rem auto",
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit}
    >
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          name="email"
          id="floatingEmail"
          placeholder="name@example.com"
          value={loginData.email}
          onChange={handleChange}
        />
        <label htmlFor="floatingEmail">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          name="password"
          id="floatingPassword"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <Button variant="primary" type="submit">
        LOGIN
      </Button>
      <p>
        Not Registered? <Link to="/">Register</Link>
      </p>
    </form>
  );
}

export default Login;
