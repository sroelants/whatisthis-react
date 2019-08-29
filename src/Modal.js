import React from "react";
import ModalButton from "./ModalButton";
import "./Modal.sass";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.type = props.type;
    this.content = props.content;
    this.closeModal = props.closeHandler;
  }

  render() {
    function buttons(context) {
      if (context === "answer") {
        return (
          <div className="modal__options">
            <ModalButton type="explanation" />
            <ModalButton type="next" />
          </div>
        );
      } else if (context === "explanation") {
        return (
          <div className="modal__options">
            <ModalButton type="next" />
          </div>
        );
      } else {
        return null;
      }
    }

    return (
      <div>
        <div className="mask" />
        <div className="modal">
          <button className="modal__close" onClick={this.closeModal}>
            <span role="img" aria-label="close">
              &#10060;
            </span>
          </button>
          {this.content}
          {buttons(this.type)}
        </div>
      </div>
    );
  }
}

export default Modal;
