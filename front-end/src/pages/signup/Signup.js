import "./Signup.css";
import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";

const SignupPage = () => {
  const [isSignedUp, setSignedUp] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSignup = () => {
    let userObj = { name, email, password };

    console.log(userObj);
    if (passwordConfirm === password) {
      setIsLoading(true);
      fetch("https://phase-3-project-w1v8.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj),
      }).then((response) => {
        if (response.ok) {
          setIsLoading(false);
          setSignedUp(true);
          alert("Signup successful");
        } else {
          setIsLoading(false);
          return response.json().then((error) => {
            let errorMessage = error.error;
            alert(errorMessage);
          });
        }
      });
    } else {
      alert("Password must match");
    }
  };

  if (isSignedUp) {
    return <Redirect exact to="/" />;
  }

  return (
    <main id="signup-page">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
      >
        <h4 className="form-title">Sign Up</h4>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm password *</label>
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
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
          <h4>Already have an account?</h4>
          <h4>
            <NavLink className="formlink" exact to="/">
              {" "}
              Login
            </NavLink>
          </h4>
        </span>
      </form>
    </main>
  );
};

export default SignupPage;
