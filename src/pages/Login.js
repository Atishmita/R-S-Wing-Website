import React, { useState } from "react";
import "../components/login/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    }  else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (password === "") {
      setErrMsg("Please give your Password");
    } else {
      setSuccessMsg(
        `Thank you ${username}`
      );
      setErrMsg("");
      setUsername("");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <section id="login">
      <div className="login-container">
        <div className="login-heading">Login</div>
        <form className="login-form">
          {errMsg && <p className="error-msg">{errMsg}</p>}
          {successMsg && <p className="success-msg">{successMsg}</p>}
          <div className="login-form-field">
            <label>Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
            />
          </div>
          <div className="login-form-field email">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </div>
          <div className="login-form-field">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            ></input>
          </div>
          <div className="login-form-field">
            <button onClick={handleSend} className="login-submit-button">
              Submit
            </button>
          </div>
          {errMsg && <p className="error-msg">{errMsg}</p>}
          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>
      </div>
    </section>
  );
};

export default Login;


