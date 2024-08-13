import React , { useState, useEffect } from "react";
import socket from "../socketConfig.js";
import "../styles/general.css";

const CountDown = props =>{
    const [timer, setTimer] = useState({countDown : "",msg: ""});
    useEffect(() => {
        socket.on("timer", (time) => {
            setTimer(time);
        });
        socket.on("done",()=>{
            socket.removeAllListeners("timer");
        });
    }, []);
    const {countDown, msg} = timer;
    return (
        <div>
            <h3 className="countDown">{countDown}</h3>
        </div>
    );
}
export default CountDown;
