import React from "react";
import Button from "./Button";
import "./ButtonPanel.sass";

const ButtonPanel = props => {
  const buttons = props.options.map((l, i) => (
    <Button label={l} key={i} answerHandler={props.answerHandler(l)} />
  ));
  return <div className="button-panel">{buttons}</div>;
};

export default ButtonPanel;
