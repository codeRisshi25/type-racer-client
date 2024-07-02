import React, { useState } from "react";
import socket from "../socketConfig.js";

const StartBtn = ({ player, gameID }) => {
  const [showBtn, setShowBtn] = useState(true);
  console.log(player);
  const { isPartyLeader } = player;

  const onClickHandler = () => {
    socket.emit("timer", { player, gameID });
    setShowBtn(false);
  }
    return isPartyLeader && showBtn ? (
      <button onClick={onClickHandler}>Start Game</button>
    ) : null;
};
export default StartBtn;
