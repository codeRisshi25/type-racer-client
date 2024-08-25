import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import socket from "../socketConfig";
import "../styles/GameLobby.css"

const JoinGame = (props) => {
  const [userInput, setuserInput] = useState({ gameID: "", nickName: "" });

  const onChange = (e) => {
    setuserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    socket.emit("join-game", userInput);
  };

  return (
    <>
      <div className="blur-screen">
        <NavBar />
        <div className="wrapper-main">
          <div className="form-wrapper">
            <h1 className="join-game">join game</h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="gameID">Enter Game ID</label>
                <input
                  type="text"
                  name="gameID"
                  value={userInput.gameID}
                  onChange={onChange}
                  placeholder="GameID"
                  className="form-control"
                  required
                />
                <label htmlFor="nickName">Enter Nick Name</label>
                <input
                  type="text"
                  name="nickName"
                  value={userInput.nickName}
                  onChange={onChange}
                  placeholder="Nick Name"
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default JoinGame;
