import React from "react";
import  { useEffect } from "react";
import CountDown from "./CountDown.js";
import { useNavigate } from "react-router-dom";
import StartBtn from "./StartBtn.js";
import socket from "../socketConfig.js";
import DisplayWords from './DisplayWords.js';

const findPlayer = (players) => {
  return players.find((player) => player.socketID === socket.id);
};

const TypeRacer = ({ gameState }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { _id, players , words} = gameState;
  const player = findPlayer(players);
  console.log(player);

  useEffect(() => {
    if (_id === "") {
      navigate("/", { replace: true }); // Use navigate for redirection
    }
  }, [_id, navigate]);

  return (
    <div>
      <DsiplayWords words={words} player={player} />
      <CountDown />
      <StartBtn player={player} gameID={_id} />
    </div>
  );
};

export default TypeRacer;
