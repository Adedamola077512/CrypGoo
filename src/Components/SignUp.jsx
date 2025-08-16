import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"; // Make sure this file exists

const SignUp = () => {
  return (
    <>
      {/* From Uiverse.io by ammarsaa */}
      <form className="form">
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>

        <div className="flex">
          <label>
            <input className="input" type="text" required />
            <span>Firstname</span>
          </label>

          <label>
            <input className="input" type="text" required />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" required />
          <span>Email</span>
        </label>

        <label>
          <input className="input" type="password" required />
          <span>Password</span>
        </label>

        <label>
          <input className="input" type="password" required />
          <span>Confirm password</span>
        </label>

        <button className="submit">Submit</button>
        <p className="signin">
          Already have an account? 
            <Link
                to="/SignIn"
                className="text"
              >
                Sign Up
            </Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;
