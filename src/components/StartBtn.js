import React, { useState } from "react";
import socket from "../socketConfig.js";

const StartBtn = ({ player, gameID }) => {
  const [showBtn, setShowBtn] = useState(true);
  const { isPartyLeader } = player;

  const onClickHandler = () => {
    socket.emit("timer", { playerID: player._id, gameID });
    setShowBtn(false);
  }
    return isPartyLeader && showBtn ? (
      <button onClick={onClickHandler}>Start Game</button>
    ) : null;
};
export default StartBtn;
