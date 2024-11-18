import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {console.log(result)
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-info h-auto w-100">
      <form
        className="form p-5 d-flex flex-column w-50 h-50 justify-content-evenly bg-light m-5 rounded-3 shadow "
        onSubmit={handleSubmit}
      >
        <h1 className="title">Register </h1>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex g-4">
          <label>
            <span>Name</span>
            <input
              className="input ms-2"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div><br />
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
          Already have an acount ? <Link to="/login">Signin</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Signup;
