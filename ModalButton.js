import React from "react";
import HelpOutline from '@material-ui/icons'
import Autorenew from '@material-ui/icons'


const ModalButton = ({ type }) => {
  let icon;
  if (type == 'explanation') {
    icon = (<HelpOutline
          className="modal__button__helper-icon"
          variant="Explanation"
        />)
   else {

   }

  }
  return (
    <div className="modal__options">
      <button className="modal__button explanation">
        <HelpOutline
          className="modal__button__helper-icon"
          variant="Explanation"
        />
        <span className="modal__button__text">I don't get it.</span>
      </button>
    </div>
  );
};
