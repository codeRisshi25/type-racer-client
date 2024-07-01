import React from "react";
import { useNavigate } from "react-router-dom";

const GameMenu = (props) => {
  let navigate = useNavigate();
  return (
    <div className="text-center">
      <h1>Welcome to Type Racer</h1>
      <button
        type="button"
        onClick={() => navigate("/game/create")}
        className="btn btn-primary btn-lg mr-3"
      >
        Create Game
      </button>
      <button
        type="button"
        onClick={() => navigate("/game/join")} // Assuming you meant to navigate to '/game/join' for the second button
        className="btn btn-primary btn-lg mr-3"
      >
        Join Game
      </button>
    </div>
  );
};

export default GameMenu;
