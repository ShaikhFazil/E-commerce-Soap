import React from "react";
import "./text.css";

const Text = ({ text }) => {
  return (
    <div className="text-container">
      <h2 className="text-heading">{text}</h2>
    </div>
  );
};

export default Text;
