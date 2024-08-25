import React, { useState, useEffect, useRef } from "react";
import socket from "../socketConfig.js";
import "../styles/general.css"

const Form = ({isOpen, isOver, gameID}) => {
  const [userInput, setUserInput] = useState("");
  const textInput = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      textInput.current.focus();
    }
  }, [isOpen]);

  const resetForm = () => {
    setUserInput("");
  };

  const onChange = (e) => {
    let value = e.target.value;
    let lastChar = value.charAt(value.length - 1);
    if (lastChar === " ") {
      socket.emit("userInput", { userInput, gameID });
      resetForm();
    } else if (/^[a-zA-Z]$/.test(lastChar)) {
      setUserInput(e.target.value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-here">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            readOnly={isOpen || isOver}
            onChange={onChange}
            value={userInput}
            className="words-form"
            ref={textInput}
            placeholder="type here..."
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
