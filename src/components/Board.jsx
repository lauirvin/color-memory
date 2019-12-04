import React from "react";
import Card from "./Card";

const Board = () => {
  return (
    <div className="container">
      <h1 className="score mod-mobile">SCORE: 51</h1>
      <div className="board">
        <Card />
      </div>
    </div>
  );
};

export default Board;
