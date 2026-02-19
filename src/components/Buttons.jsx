import React from "react";

const Button = ({ text, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-white text-primary font-bold py-2 px-4 rounded hover:bg-gray-200 transition"
    >
      {text}
    </button>
  );
};

export default Button;
