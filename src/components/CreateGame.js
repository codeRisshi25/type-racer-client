import React, { useState } from "react";
import NavBar from "./NavBar";
import socket from "../socketConfig";
import "../styles/GameLobby.css";

const CreateGame = (props) => {
  const [nickName, setNickName] = useState("");

  const onChange = (e) => {
    setNickName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("create-game", nickName);
  };

  return (
    <>
      <div className="blur-screen">
        <NavBar />
        <div className="wrapper-main">
          <div className="form-wrapper">
            <h1 className="join-game">create game</h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="nickName">Enter Nick Name</label>
                <input
                  type="text"
                  name="nickName"
                  value={nickName}
                  onChange={onChange}
                  placeholder="Nick Name"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateGame;
