import React from "react";

const Button = ({ bgColor, color, size, text, boarderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, boarderRadius }}
      className={`text-${size} p-3
  hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
