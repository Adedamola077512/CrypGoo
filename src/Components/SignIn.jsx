import React from "react";
import "./SignIn.css"; // Make sure this file matches the updated classes
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Login</h2>
        <form className="signin-form" action="#">
          <div className="signin-input-group">
            <input required type="email" className="signin-input" />
            <label className="signin-label">Email</label>
          </div>

          <div className="signin-input-group">
            <input required type="password" className="signin-input" />
            <label className="signin-label">Password</label>
          </div>

          <div className="signin-forgot">
            <a href="#">Forgot your password?</a>
          </div>

          <button className="signin-btn" type="submit">
            Login
          </button>

          <div className="signin-link">
              <Link
                to="/SignUp"
                className="text"
              >
                Sign Up
              </Link>
          </div>
        </form>
      </div>

      {Array.from({ length: 50 }).map((_, i) => (
        <span key={i} style={{ "--i": i }}></span>
      ))}
    </div>
  );
};

export default SignIn;
