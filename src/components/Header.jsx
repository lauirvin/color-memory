import React from "react";

const Header = ({ score }) => {
  return (
    <header>
      <li className="logo">
        <span className="C">C</span>
        <span className="O">O</span>
        <span className="L">L</span>
        <span className="Os">O</span>
        <span className="R">R</span>Memory
      </li>
      <li className="score">SCORE: {score}</li>
      <li className="buttons">
        <button className="highscores">
          <span>HIGHSCORES</span>
        </button>
        <button className="restart">
          <span>RESTART</span>
        </button>
      </li>
    </header>
  );
};

export default Header;
