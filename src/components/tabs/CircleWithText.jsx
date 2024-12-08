import React from "react";
import "./CircleWithText.css";

// Single CircleWithText Component
const CircleWithText = ({ imageSrc, title }) => {
  return (
    <div className="circle-with-text">
      {/* Circle with Image */}
      <div className="circle">
        <img src={imageSrc} alt={title} className="circle-image" />
      </div>
      {/* Text below the Circle */}
      <div className="title">{title}</div>
    </div>
  );
};

// Grid Component with Dynamic Data
const CircleWithTextGrid = ({ data }) => {
  return (
    <div className="circle-grid-container">
      {data.map((item) => (
        <CircleWithText key={item.id} imageSrc={item.imageSrc} title={item.title} />
      ))}
    </div>
  );
};

export default CircleWithTextGrid;
