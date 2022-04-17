import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="#">Meta</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Blog</Link>
        </li>
        <li>
          <Link to="#">Jobs</Link>
        </li>
        <li>
          <Link to="#">Help</Link>
        </li>
        <li>
          <Link to="#">API</Link>
        </li>
        <li>
          <Link to="#">Privacy</Link>
        </li>
        <li>
          <Link to="#">Terms</Link>
        </li>
        <li>
          <Link to="#">Top Accounts</Link>
        </li>
        <li>
          <Link to="#">Hashtags</Link>
        </li>
        <li>
          <Link to="#">Locations</Link>
        </li>
        <li>
          <Link to="#">Instagram Lite</Link>
        </li>
        <li>
          <Link to="#">
            English <i class="fa-solid fa-chevron-down chevron"></i>
          </Link>
        </li>
        <li>
          &copy; 2022 Instagram from Meta
        </li>
      </ul>
    </footer>
  );
}
