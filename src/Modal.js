import React from "react";
import "./Modal.sass";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.content = props.content;
    this.closeModal = props.closeHandler;
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
        </div>
      </div>
    );
  }
}

export default Modal;
