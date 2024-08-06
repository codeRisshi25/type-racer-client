import React from "react";
import "../styles/CopyCode.css";

const CopyCopy = ({ player, gameID, isOpen }) => {
  const { isPartyLeader } = player;

  const onClick = () => {
    navigator.clipboard.writeText(gameID);
    alert("Game ID copied to clipboard!");
  }

  return (
    <>
      {isPartyLeader && isOpen ? (
        <div className="copy-code-wrapper">
          <h3>Send this code to your friends for them to join</h3>
          <div className="copy-section">
            <p>{gameID}</p>
            <button onClick={onClick}>COPY CODE</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CopyCopy;
