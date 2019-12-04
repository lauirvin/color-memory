import React, { useState, useEffect } from "react";
import Card from "./Card";

const Board = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let cardList = [
      {
        name: "red",
        color: "#FE9992"
      },
      {
        name: "yellow",
        color: "#FFF9A5"
      },
      {
        name: "green",
        color: "#C6E3C9"
      },
      {
        name: "blue",
        color: "#AFE3E3"
      }
    ];

    const duplicateElements = (array, times) => {
      return array.reduce((res, current) => {
        return res.concat(Array(times).fill(current));
      }, []);
    };

    const shuffle = array => {
      return array.sort(() => Math.random() - 0.5);
    };

    cardList = shuffle(duplicateElements(cardList, 4));

    setCards(cardList);
  }, []);

  console.log(cards);

  return (
    <div className="container">
      <h1 className="score mod-mobile">SCORE: 51</h1>
      <div className="board">
        {cards.map((card, i) => (
          <Card key={i} color={card.color} />
        ))}
      </div>
    </div>
  );
};

export default Board;
