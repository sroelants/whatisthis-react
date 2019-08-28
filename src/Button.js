import React from "react";
import "./Button.sass";

const Button = props => {
  return (
    <button className="button options__button" onClick={props.answerHandler}>
      {" "}
      {props.label}{" "}
    </button>
  );
};

export default Button;
