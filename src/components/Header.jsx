import React, { useState } from "react";
import Highscores from "./Highscores";

const Header = ({ score, restartCards }) => {
  const [open, setOpen] = useState(false);

  const openHighScores = () => {
    setOpen(true);
  };

  const closeWindow = () => {
    setOpen(false);
  };

  return (
    <header>
      <Highscores open={open} closeWindow={closeWindow} />
      <ul>
        <li className="logo">
          <span className="C">C</span>
          <span className="O">O</span>
          <span className="L">L</span>
          <span className="Os">O</span>
          <span className="R">R</span>Memory
        </li>
        <li className="score">SCORE: {score}</li>
        <li className="buttons">
          <button onClick={openHighScores} className="highscores">
            <span>HIGHSCORES</span>
          </button>
          <button onClick={restartCards} className="restart">
            <span>RESTART</span>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
