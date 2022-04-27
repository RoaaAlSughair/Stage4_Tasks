import React from "react";
import "./Container.css";

export default function Container({children, type}) {
  return <div className={type}>{children}</div>;
}
