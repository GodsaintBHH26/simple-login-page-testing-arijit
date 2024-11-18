import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {console.log(result)
        if(result.data === "Success"){
            navigate('/home')
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-info h-auto w-100">
      <form
        className="form p-5 d-flex flex-column w-50 h-50 justify-content-evenly bg-light m-5 rounded-3 shadow "
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <br />
        <label>
          <span>Email</span>
          <input
            className="input ms-2"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label><br />
        <label>
          <span>Password</span>
          <input
            className="input ms-2"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="submit mt-5 w-25 ">Submit</button><br />
        <p className="signin">
          Don't have an acount ? <Link to="/register">Signup</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login