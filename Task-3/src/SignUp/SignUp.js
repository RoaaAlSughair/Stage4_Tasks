import React from "react";
import { Link } from "react-router-dom";
import InputGroup from "../Styled Elements/InputGroup/InputGroup";
import Button from "../Styled Elements/Button/Button";
import GetTheApp from "../Styled Elements/GetTheApp/GetTheApp";
import Footer from "../Styled Elements/Footer/Footer";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp-form option">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png?20160616034027"
          alt="Instagram Logo"
        />
        <Button />
        <div className="cutter">
          <hr className="line-cutter" />
          <p>Or</p>
          <hr className="line-cutter" />
        </div>
        <InputGroup />
        <InputGroup />
        <InputGroup />
        <InputGroup />
        <InputGroup />
        <InputGroup />
        <Button />
        <p>
          By signing up, you agree to our <Link to="#">Terms</Link>,{" "}
          <Link to="#">Data Policy</Link> and <Link to="#">Cookies policy</Link>
          .
        </p>
      </div>
      <div className="option">
        <p>Don't have an account?</p>
        <Link to="/register">Sign Up</Link>
      </div>
      <GetTheApp />
      <Footer />
    </div>
  );
}
