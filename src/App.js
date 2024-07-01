import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import GameMenu from "./components/GameMenu";
import CreateGame from "./components/CreateGame.js";
import history from "./history.js";
import socket from "./socketConfig.js";
import { useEffect, useState } from "react";

function App() {
  const [gameState, setGameState] = useState({
    _id: "",
    isOpen: false,
    players: [],
    words: [],
  });
  useEffect(() => {
    socket.on("updateGame", (game) => {
      console.log(game);
      setGameState(game);
    });
    return () => {
      socket.removeAllListeners();
    }
  }, []);
  useEffect(() => {
    if (gameState._id !== "") {
      history.push(`/game/${gameState._id}`);
    }
  }, [gameState._id]);
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<GameMenu/>} />
        <Route path="/game/create" element={<CreateGame/>}/>
      </Routes>
    </Router>
  );
}

export default App;
