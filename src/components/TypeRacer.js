import React from "react";
import  { useEffect } from "react";
import CountDown from "./CountDown.js";
import { useNavigate } from "react-router-dom";
import StartBtn from "./StartBtn.js";
import socket from "../socketConfig.js";
import DisplayWords from './DisplayWords.js';
import Form from './Form.js';
import ProgressBar from "./ProgressBar"
import ScoreBoard from "./ScoreBoard";
import NavBar from "./NavBar.js"

const findPlayer = (players) => {
  return players.find((player) => player.socketID === socket.id);
};

const TypeRacer = ({ gameState }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { _id, players , words, isOpen , isOver} = gameState;
  const player = findPlayer(players);
  useEffect(() => {
    if (_id === "") {
      navigate("/", { replace: true }); // Use navigate for redirection
    }
  }, [_id, navigate]);
  return (
    <div>
      <div className="blur-screen">
      <NavBar/>
      <DisplayWords words={words} player={player} />
      <ProgressBar players={players} player={player} wordsLength={words.length}/>
      <Form isOpen={isOpen} isOver={isOver} player={player} gameID={_id} />
      <CountDown />
      <StartBtn player={player} gameID={_id} />
      <ScoreBoard players={players}/>
    </div>
    </div>
  );
};

export default TypeRacer;
