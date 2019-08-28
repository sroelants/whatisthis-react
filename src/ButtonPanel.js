import React from "react";
import Button from "./Button";
import "./ButtonPanel.sass";

const ButtonPanel = () => {
  return (
    <div className="button-panel">
      <Button label="window" />
      <Button label="person" />
      <Button label="Person" />
      <Button label="person2" />
    </div>
  );
};

export default ButtonPanel;
