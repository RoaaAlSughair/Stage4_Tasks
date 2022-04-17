import React from "react";
import { Link } from "react-router-dom";
import "./GetTheApp.css";

export default function GetTheApp() {
  return (
    <div className="download-app">
      <p>Get the app</p>
      <div className="download-images">
        <Link to="#">
          <img
            className="download-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9xKp18-8mYVrKaK-8JI270M6JrWsHysfXw&usqp=CAU"
          />
        </Link>
        <Link to="#">
          <img
            className="download-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62HFwvaWHCw9eP2ISrktwXsMh1X_QnOC18w&usqp=CAU"
          />
        </Link>
      </div>
    </div>
  );
}
