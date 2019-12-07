import React, { useState, useEffect, Fragment } from "react";
import Popup from "reactjs-popup";

const Highscores = ({ open, closeWindow }) => {
  const [highscores, setHighscores] = useState();
  const [available, setAvailability] = useState();

  useEffect(() => {
    const existingScores = localStorage.getItem("highscores"); // Fetch score data from localStorage

    if (existingScores === null) {
      setHighscores([]);
      setAvailability(false); // If score does not exist, change state to show "Complete a game to register your score!" message
    } else {
      let allScores = JSON.parse(existingScores);

      // Sort score by descending order
      allScores.sort((a, b) => {
        return b.score - a.score;
      });

      setHighscores(allScores);
      setAvailability(true); // Shows score table conditionally if there is existing score
    }
  }, [open]);

  return (
    <Popup open={open} closeOnDocumentClick={false}>
      <div className="highscores-window">
        {available ? (
          <Fragment>
            <h1>HIGHSCORES </h1>
            <div className="table">
              <div className="row">
                <div className="col mod-rank">Rank</div>
                <div className="col mod-name">Name</div>
                <div className="col mod-score">Score</div>
              </div>
              <hr />
              <div className="rank-data">
                {highscores.map((user, rank) => (
                  <div className="row mod-data" key={rank}>
                    <div className="col mod-rank">{rank + 1}</div>
                    <div className="col mod-name">{user.name}</div>
                    <div className="col mod-score">{user.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        ) : (
          <div className="unavailable">
            <h2>Complete a game to register your score!</h2>
          </div>
        )}
        <button onClick={closeWindow} className="close">
          <span>CLOSE</span>
        </button>
      </div>
    </Popup>
  );
};

export default Highscores;
