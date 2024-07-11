import React from "react";

const CustomButton = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 rounded-md border-[2px] border-blue-700 border-solid bg-slate-950 blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
};

export default CustomButton;
