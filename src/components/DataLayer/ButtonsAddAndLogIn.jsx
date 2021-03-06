import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import "../styles/buttonsAddLogIn/buttonsAddLogIn.css";

const ButtonsAddAndLogIn = () => {
  return (
    <div className="addLogIn">
      <button type="button">
        <AiOutlineFileAdd />
      </button>
      <button type="button">
        <BiLogInCircle />
      </button>
    </div>
  );
};

export default ButtonsAddAndLogIn;
