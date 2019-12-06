import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";

const Register = ({ score, complete, restartCards }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setOpen(complete);
    }, 750);
  }, [complete]);

  const closeWindow = () => {
    setOpen(false);
    restartCards();
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
      localStorage.setItem("highscores", JSON.stringify([currentScore]));
    } else {
      let allScores = JSON.parse(highscores);
      allScores.push(currentScore);
      localStorage.setItem("highscores", JSON.stringify(allScores));
    }

    closeWindow();
  };

  return (
    <Popup open={open} closeOnDocumentClick={false}>
      <div className="register">
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
          <button className="done" onClick={submitScore}>
            <span>DONE</span>
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default Register;