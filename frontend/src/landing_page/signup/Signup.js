import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-center",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-center",
    });

  const validateInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Alphanumeric, 3-20 chars
    if (!email || !emailRegex.test(email)) {
      handleError("Please enter a valid email address.");
      return false;
    }
    if (!username || !usernameRegex.test(username)) {
      handleError("Username must be 3-20 characters, letters, numbers, or underscores.");
      return false;
    }
    if (!password || password.length < 6) {
      handleError("Password must be at least 6 characters long.");
      return false;
    }
    // Optionally, add more password checks: at least one number, one letter, etc.
    if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      handleError("Password must contain at least one letter and one number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          sessionStorage.setItem("authStatus", "authed");
          window.location.replace("http://localhost:3001/?signup=true");
        }, 1000);
       
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <div className="container">
      <div className="row p-3 mt-5">
        <div className="col">
          <h1 className="text-center mb-4" style={{ fontSize: "50px" }}>
            Open a free demat and trading account online
          </h1>
          <h4 className="text-muted fs-5 text-center">
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </h4>
        </div>
      </div>
      <div className="row p-5" style={{ marginBottom: "60px" }}>
        <div className="col-1"></div>
        <div className="col-5">
          <img src="media/images/account_open.svg" alt="..." />
        </div>
        <div className="col-5 p-4">
          <form onSubmit={handleSubmit}>
            <h1>Signup now</h1>
            <p>Or track your existing application</p>
            <input
              type="text"
              placeholder="Username"
              className="mb-1 p-2"
              name="username"
              value={username}
              onChange={handleOnChange}
              
              style={{
                width: "60%",
                outline: "none",
                borderRadius: "5px",
                borderWidth: "1px",
              }}
            />
            <br />
             <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleOnChange}
              
              className="mb-1 p-2"
              style={{
                width: "60%",
                outline: "none",
                borderRadius: "5px",
                borderWidth: "1px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-1 p-2"
              name="password"
              value={password}
              onChange={handleOnChange}
              
              style={{
                width: "60%",
                outline: "none",
                borderRadius: "5px",
                borderWidth: "1px",
              }}
            />
            <br />
            <input
              type="submit"
              value="SignUp"
              className="btn btn-primary fs-5 mb-2"
              style={{ width: "60%" }}
            />

            <br />
            <span style={{ marginLeft: "8px" }}>
              If you have an existing account?
            </span>
            <Link to={"/login"}>login</Link>
          </form>
          <ToastContainer />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Signup;
