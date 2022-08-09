import React from "react";
import "./Button.css";

//button sizes: sm, med, lg, xl

const SIZES = ["small", "med", "large", "xlarge"];

export const Button = ({ color1, color2, children, onClick, size }) => {
  const checkButtonSize = SIZES.includes(size) ? size : SIZES[1];

  return (
    <button
      onClick={onClick}
      style={{ background: `linear-gradient(90deg, ${color1},${color2})` }}
      className={`btn ${checkButtonSize}`}
    >
      {children}
    </button>
  );
};

export default Button;
