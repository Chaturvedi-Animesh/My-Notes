import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/slice/user";

function Register() {
  const user = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [registerData, setResgisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/notes");
    }
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setResgisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
    dispatch(registerUser(registerData));
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
          type="text"
          class="form-control"
          id="floatingName"
          name="name"
          placeholder=" "
          value={registerData.name}
          onChange={handleChange}
        />
        <label htmlFor="floatingName">Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          name="email"
          id="floatingEmail"
          placeholder="name@example.com"
          value={registerData.email}
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
          value={registerData.password}
          onChange={handleChange}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <Button variant="primary" type="submit">
        REGISTER
      </Button>
      <p>
        Already Registered? <Link to="/login">Login</Link>{" "}
      </p>
    </form>
  );
}

export default Register;
