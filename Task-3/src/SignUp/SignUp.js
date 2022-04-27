import React from "react";
import { Link } from "react-router-dom";
import Container from "../Styled Elements/Container/Container";
import Logo from "../Styled Elements/Logo/Logo";
import InputGroup from "../Styled Elements/InputGroup/InputGroup";
import Cutter from "../Styled Elements/Cutter/Cutter";
import Button from "../Styled Elements/Button/Button";
import GetTheApp from "../Styled Elements/GetTheApp/GetTheApp";
import Footer from "../Styled Elements/Footer/Footer";
import "./SignUp.css";

export default function SignUp() {
  return (
    <Container type="whole-page">
      <Container type="wrapper">
        <Container type="form option">
          <Logo />
          <p>Sign up to see photos and videos from your friends.</p>
          <Button />
          <Cutter />
          <div className="login-with-email">
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <InputGroup />
            <Button />
          </div>
          <p>
            By signing up, you agree to our <Link to="#">Terms</Link>,{" "}
            <Link to="#">Data Policy</Link> and{" "}
            <Link to="#">Cookies policy</Link>.
          </p>
        </Container>
        <Container type="option">
          <p>Have an account?</p>
          <Link to="/register">Log In</Link>
        </Container>
        <GetTheApp />
      </Container>
      <Footer />
    </Container>
  );
}
