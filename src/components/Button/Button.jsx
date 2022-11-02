import React from "react";
import "./Button.css";

export const Button = ({ children, md, mu }) => {
  return (
    <div className="button" onMouseDown={md} onMouseUp={mu}>
      <span>{children}</span>
    </div>
  );
};
