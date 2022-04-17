import React from "react";
import { Link } from "react-router-dom";
import InputGroup from "../Styled Elements/InputGroup/InputGroup";
import Button from "../Styled Elements/Button/Button";
import GetTheApp from "../Styled Elements/GetTheApp/GetTheApp";
import Footer from "../Styled Elements/Footer/Footer";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="options-and-forms">
        <div className="login-form option">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png?20160616034027"
            alt="Instagram Logo"
          />
          <div className="login-with-email">
            <InputGroup />
            <InputGroup />
            <Button />
          </div>
          <div className="cutter">
            <hr className="line-cutter" />
            <p>Or</p>
            <hr className="line-cutter" />
          </div>
          <div className="links">
            <Link to="">
              <i class="fa-brands fa-facebook-square"></i> Login with Facebook
            </Link>
            <Link to="">Forgot Password?</Link>
          </div>
        </div>
        <div className="option">
          <p>Don't have an account?</p>
          <Link to="/register">Sign Up</Link>
        </div>
        <GetTheApp />
      </div>
      <Footer />
    </div>
  );
}
