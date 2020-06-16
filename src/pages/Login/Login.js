import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import placeholder from "../../assets/image-placeholder.jpg";
import "./Login.css";
import useInputState from "../../hooks/useInputState";
import useToggleState from "../../hooks/useToggleState";

const Login = ({ history }) => {
  const [email, setEmail, resetEmail] = useInputState(localStorage.email || "");
  const [password, setPassword, resetPassword] = useInputState(
    localStorage.password || ""
  );
  const [checkbox, setCheckBox] = useToggleState();
  const [status, setStatus] = useState("");
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let url;
    if (process.env.NODE_ENV === "production") {
      url = "https://gsp-server-3w1sr9578.now.sh/login";
    } else {
      url = "http://localhost:3001/login";
    }

    const handleLogin = async () => {
      const res = await axios.post(url, {
        email,
        password,
      });
      setStatus(res.data.status);
      window.localStorage.setItem("token", res.data.token);
      if (checkbox === true) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      }
    };
    handleLogin();
    resetEmail();
    resetPassword();
    setCheckBox(false);
  };

  useEffect(() => {
    if (status === "success") {
      sessionStorage.setItem("isLoggedIn", true);
      history.push("/contacts");
    } else if (status === "error" || status === "empty")
      emailRef.current.focus();
  }, [status, history]);

  const errorOrEmpty = () => {
    if (status === "error")
      return "Incorrect username/password. Please try again.";
    else if (status === "empty") return "Please enter email and password.";
    else return;
  };

  return (
    <div className="Login">
      <div className="Login-image">
        <img src={placeholder} alt="Placeholder" />
      </div>
      <div className="Login-form">
        <div className="Login-info info">
          Email: contacts@app.com. Password: password.
        </div>
        <div className="Login-title">
          <h1>Contacts App</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="Login-input"
            type="text"
            value={email}
            onChange={setEmail}
            placeholder="Email Address"
            aria-label="Email Address"
            ref={emailRef}
          />
          <input
            className="Login-input"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Password"
            aria-label="Password"
          />
          <label className="Login-checkbox">
            <input type="checkbox" value={checkbox} onChange={setCheckBox} />
            Remember me
          </label>
          <button type="submit">Login</button>
        </form>
        <div
          className={`Login-info ${
            (status === "error" || status === "empty") && "error"
          }`}
        >
          {errorOrEmpty()}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
