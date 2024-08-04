import React, { useState, useEffect, useRef } from "react";
import socket from "../socketConfig.js";

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
    } else {
      setUserInput(e.target.value);
    }
  };
  return (
    <div className="text-here">
      <form>
        <div className="form-group">
          <input
            type="text"
            readOnly={isOver || isOpen}
            onChange={onChange}
            value={userInput}
            className="form-control"
            ref={textInput}
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
