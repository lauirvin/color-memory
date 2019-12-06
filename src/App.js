import React, { Fragment, useEffect, useState } from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import Board from "./components/Board";

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const generateCards = () => {
      const colors = ["#FE9992", "#FFF9A5", "#C6E3C9", "#AFE3E3"];
      const cardList = shuffle(duplicateElements(colors, 4));

      let finalCards = [];
      cardList.forEach((color, index) => {
        finalCards.push({
          id: index,
          color: color
        });
      });

      setCards(finalCards);
    };

    generateCards();
  }, []);

  const duplicateElements = (array, times) => {
    return array.reduce((res, current) => {
      return res.concat(Array(times).fill(current));
    }, []);
  };

  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        noMatch();
      }
    }
  };

  const noMatch = () => {
    setTimeout(resetCards, 800);
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = id => flipped.includes(id);

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);

    return flippedCard.color === clickedCard.color;
  };

  return (
    <Fragment>
      <Header />
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </Fragment>
  );
};

export default App;
