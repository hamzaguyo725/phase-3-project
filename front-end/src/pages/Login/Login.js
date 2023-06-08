import "./Login.css";
import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";


const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLoading(true);

    let userObj = { email, password };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    }).then((response) => {
      if (response.ok) {
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        return response.json().then((error) => {
          let errorMessage = error.error;
          alert(errorMessage);
        });
      }
    });
  };

  if (isLoggedIn) {
    return <Redirect exact to="/dashboard" />;
  }


  return (
    <main id="login-page">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h4 className="form-title">Login</h4>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
        </div>

        <button type="submit" className="form-btn">
          Login
          {isLoading && (
            <div className="loader-cont">
              <div className="loader-ball"></div>
              <div className="loader-ball"></div>
              <div className="loader-ball"></div>
            </div>
          )}
        </button>
        <span className="account_link">
          <h4>Don't have an account yet?</h4>
          <h4 >
            <NavLink className="formlink" to='/register'>Sign up</NavLink>
          </h4>
        </span>
      </form>
    </main>
  );
};

export default LoginPage;
