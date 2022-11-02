import React from "react";
import "./Input.css";

export const Input = ({ className, placeholder }) => {
  return <input type="text" placeholder={placeholder} className={className} />;
};
