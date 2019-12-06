import React from "react";

const Card = ({ disabled, handleClick, id, flipped, solved, back, color }) => {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => (disabled ? null : handleClick(id))}
      style={flipped || solved ? { background: color } : { background: back }}
    ></div>
  );
};

export default Card;
