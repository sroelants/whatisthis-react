import React from "react";
import HelpOutline from "@material-ui/icons/HelpOutline";
import Autorenew from "@material-ui/icons/Autorenew";
import "./ModalButton.sass";

const ModalButton = props => {
  let button;
  if (props.type === "explanation") {
    button = (
      <button className="button modal__button">
        <HelpOutline
          className="modal__button__helper-icon"
          variant="Explanation"
        />
        <span className="modal__button__text">I don't get it.</span>
      </button>
    );
  } else {
    button = (
      <button className="button modal__button">
        <Autorenew className="modal__button__helper-icon" variant="Next" />
        <span className="modal__button__text">Give me another one!</span>
      </button>
    );
  }

  return button;
};

export default ModalButton;
