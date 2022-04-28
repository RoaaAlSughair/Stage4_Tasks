import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import InputGroup from "../InputGroup/InputGroup";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Logo />
      <InputGroup />
      <div className="icon-wrapper">
        <Link to="#" className="icon">
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link to="#" className="icon">
          <i className="fa-regular fa-paper-plane"></i>
        </Link>
        <Link to="#" className="icon">
          <i className="fa-regular fa-square-plus"></i>
        </Link>
        <Link to="#" className="icon">
          <i className="fa-regular fa-compass"></i>
        </Link>
        <Link to="#" className="icon">
          <i className="fa-regular fa-heart"></i>
        </Link>
        <Link to="#" className="icon">
          <i className="fa-regular fa-circle-user"></i>
        </Link>
      </div>
    </nav>
  );
}
