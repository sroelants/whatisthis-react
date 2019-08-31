import React from "react";
import HelpOutline from "@material-ui/icons/HelpOutline";
import Autorenew from "@material-ui/icons/Autorenew";
import "./ModalButton.sass";

const ModalButton = ({ type, clickHandler }) => {
  function button(type) {
    switch (type) {
      case "explanation":
        return (
          <button className="button modal__button" onClick={clickHandler}>
            <HelpOutline
              className="modal__button__helper-icon"
              variant="Explanation"
            />
            <span className="modal__button__text">I don't get it.</span>
          </button>
        );
      case "next":
        return (
          <button className="button modal__button" onClick={clickHandler}>
            <Autorenew className="modal__button__helper-icon" variant="Next" />
            <span className="modal__button__text">Give me another one!</span>
          </button>
        );
      default:
        return null;
    }
  }

  return button(type);
};

export default ModalButton;
