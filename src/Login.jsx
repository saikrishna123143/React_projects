import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  let username = useRef(null);
  let password = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let LoginCheck = () => {
    if (username.current.value === "sairam" && password.current.value === "sairam") {
      dispatch(login(username.current.value));
      navigate('/');
    } else {
      window.alert("Your credentials are incorrect. Please check again!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" ref={username} className="form-control" placeholder="Enter your username" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" ref={password} className="form-control" placeholder="Enter your password" />
        </div>
        <button className="btn btn-primary w-100" onClick={LoginCheck}>Login</button>
      </div>
    </div>
  );
}

export default Login;
