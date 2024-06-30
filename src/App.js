import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameMenu from './components/GameMenu';
import history from './history.js'
import socket from './socketConfig.js';
import { useEffect } from 'react';

function App() {
  useEffect(()=> {
    socket.on('test',msg=>{
    console.log(msg);
    })
  })
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<GameMenu />} />
      </Routes>
    </Router>
  );
}

export default App;