import React, { Fragment, useEffect, useState } from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import Board from "./components/Board";
import Register from "./components/Register";

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    generateCards();
  }, []);

  useEffect(() => {
    if (solved.length === 16) {
      setComplete(true);
    }
  }, [solved]);

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
        setScore(score + 5);
        resetCards();
      } else {
        noMatch();
        setScore(score - 1);
      }
    }
  };

  const noMatch = () => {
    setTimeout(resetCards, 500);
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = id => {
    flipped.includes(id);
  };

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);

    return flippedCard.color === clickedCard.color;
  };

  const restartCards = () => {
    setCards([]);
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
    setScore(0);
    setComplete(false);

    generateCards();
  };

  return (
    <Fragment>
      <Register score={score} complete={complete} restartCards={restartCards} />
      <Header score={score} restartCards={restartCards} />
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
        score={score}
      />
    </Fragment>
  );
};

export default App;
