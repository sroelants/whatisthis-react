import React from "react";
import ModalButton from "./ModalButton";
import "./Modal.sass";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.type = props.type;
    this.content = props.content;
    this.closeModal = props.closeHandler;
    this.explanationHandler = props.explanationHandler;
    this.buttons = this.buttons.bind(this);
  }

  buttons(context) {
    switch (context) {
      case "answer":
        return (
          <div className="modal__options">
            <ModalButton type="explanation" onClick={this.explanationHandler} />
            <ModalButton type="next" />
          </div>
        );
      case "explanation":
        return (
          <div className="modal__options">
            <ModalButton type="next" />
          </div>
        );
      default:
        return null;
    }
  }

  render() {
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
          {this.buttons(this.type)}
        </div>
      </div>
    );
  }
}

export default Modal;
