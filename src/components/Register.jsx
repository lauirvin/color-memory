import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";

const Register = ({ score, complete, restartCards }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(complete);
    }, 800); // Time to open the register window after completing the game
  }, [complete]);

  useEffect(() => {
    name.length > 0 ? setDisabled(false) : setDisabled(true); // Disable/Enable button conditionally - if input is empty
  }, [name]);

  const closeWindow = () => {
    setOpen(false);
    restartCards(); // Restarts game if user chooses not to register their score
  };

  const userName = e => {
    setName(e.target.value);
  };

  const submitScore = () => {
    const highscores = localStorage.getItem("highscores");
    const currentScore = {
      name: name,
      score: score
    };

    if (highscores === null) {
      localStorage.setItem("highscores", JSON.stringify([currentScore])); // Creates highscore data in localStorage if users score does not exist
    } else {
      let allScores = JSON.parse(highscores);
      allScores.push(currentScore); // Adds score to score list
      localStorage.setItem("highscores", JSON.stringify(allScores)); // Updates localStorage data with newly added score data
    }

    closeWindow();
  };

  return (
    <Popup open={open} closeOnDocumentClick={false}>
      <div className="register-window">
        <h1>YOU SCORED: {score}</h1>
        <hr />
        <h2>Enter your name below:</h2>
        <input
          type="text"
          name="firstname"
          placeholder="Name"
          onChange={userName}
        />
        <div className="buttons">
          <button className="close" onClick={closeWindow}>
            <span>CLOSE</span>
          </button>
          <button disabled={disabled} className="done" onClick={submitScore}>
            <span>DONE</span>
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default Register;
