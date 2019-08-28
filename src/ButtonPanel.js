import React from "react";
import Button from "./Button";
import "./ButtonPanel.sass";

const ButtonPanel = ({ options }) => {
  const buttons = options.map((l, i) => <Button label={l} key={i} />);
  return <div className="button-panel">{buttons}</div>;
};

export default ButtonPanel;
