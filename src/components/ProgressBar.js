import React from "react";
import "../styles/ProgressBarComponent.css";

const calculatePercentage = (player, wordsLength) => {
  if (player.currentWordIndex !== 0) {
    return ((player.currentWordIndex / wordsLength) * 100).toFixed(2) + "%";
  }
  return 0;
};

const ProgressBar = ({ player, players, wordsLength }) => {
  const percentage = calculatePercentage(player, wordsLength);

  return (
    <div>
      {
        <>
          <div className="prog-wrap">
            <h5 className="player-nickname">{player.nickName}</h5>
            <div className="progress" key={player._id}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: percentage }}
              >
                {percentage}
              </div>
            </div>
          </div>
        </>
      }
      {players.map((playerObj) => {
        const percentage = calculatePercentage(playerObj, wordsLength);
        return playerObj._id !== player._id ? (
          <>
            <div className="prog-wrap">
              <h5 className="player-nickname">{playerObj.nickName}</h5>
              <div className="progress" key={playerObj._id}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: percentage }}
                >
                  {percentage}
                </div>
              </div>
            </div>
          </>
        ) : null;
      })}
    </div>
  );
};

export default ProgressBar;
