import React from "react";
import "./Button.sass";

const Button = ({ label }) => {
  return <button className="button options__button"> {label} </button>;
};

export default Button;
