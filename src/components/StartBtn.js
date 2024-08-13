import React, { useState } from "react";
import socket from "../socketConfig.js";
import "../styles/general.css";

const StartBtn = ({ player, gameID }) => {
  const [showBtn, setShowBtn] = useState(true);
  const { isPartyLeader } = player;

  const onClickHandler = () => {
    socket.emit("timer", { playerID: player._id, gameID });
    setShowBtn(false);
  }
    return isPartyLeader && showBtn ? (
      <button className="startBtn" onClick={onClickHandler}>Start Game</button>
    ) : null;
};
export default StartBtn;
