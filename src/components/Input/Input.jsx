import React from "react";
import "./Input.css";

export const Input = ({ className, placeholder, change, setChange }) => {
  return (
    <input
      className={className}
      type="text"
      value={change}
      placeholder={placeholder}
      onChange={(e) => setChange(e.target.value)}
    />
  );
};
