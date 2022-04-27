import React from "react";
import { Link } from "react-router-dom";
import Container from "../Styled Elements/Container/Container";
import Logo from "../Styled Elements/Logo/Logo";
import InputGroup from "../Styled Elements/InputGroup/InputGroup";
import Button from "../Styled Elements/Button/Button";
import Cutter from "../Styled Elements/Cutter/Cutter";
import GetTheApp from "../Styled Elements/GetTheApp/GetTheApp";
import Footer from "../Styled Elements/Footer/Footer";
import "./Login.css";

export default function Login() {
  return (
    <Container type="whole-page">
      <Container type="wrapper">
        <Container type="form option">
          <Logo />
          <div className="login-with-email">
            <InputGroup />
            <InputGroup />
            <Button />
          </div>
          <Cutter />
          <div className="links">
            <Link to="">
              <i class="fa-brands fa-facebook-square"></i> Login with Facebook
            </Link>
            <Link to="">Forgot Password?</Link>
          </div>
        </Container>
        <Container type="option">
          <p>Don't have an account?</p>
          <Link to="/register">Sign Up</Link>
        </Container>
        <GetTheApp />
      </Container>
      <Footer />
    </Container>
  );
}
