import React from "react";
import Card from "./Card";

const Board = ({ cards, flipped, handleClick, disabled, solved, score }) => {
  return (
    <div className="container">
      <h1 className="score mod-mobile">SCORE: {score}}</h1>
      <div className="board">
        {cards.map((card, index) => (
          <Card
            key={index}
            id={index}
            color={card.color}
            back={"#FFFFFF"}
            flipped={flipped.includes(index)}
            solved={solved.includes(card.id)}
            handleClick={() => handleClick(index)}
            disabled={disabled || solved.includes(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
