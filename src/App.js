import React from "react";
import CodeField from "./CodeField";
import ButtonPanel from "./ButtonPanel";
import Modal from "./Modal";
import questions from "./questions";
import "./App.sass";

const snippet = `'use strict';

    function fun(a, b) {
    return a + b;
    }
    console.log(this);
    `;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "about",
      question: questions[Math.floor(Math.random() * questions.length)]
    };

    this.openAbout = this.openAbout.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ view: "main" });
  }

  openAbout() {
    this.setState({ view: "about" });
  }

  render() {
    return (
      <div className="App">
        <header>
          {"What is "}
          <span className="header__this">{"this"}</span>
          {"?"}
        </header>
        <main>
          <CodeField content={this.state.question.codesnippet} />
          <ButtonPanel />
        </main>
        <footer>
          <button className="footer__about" onClick={this.openAbout}>
            {"No, seriously, what is this?"}
          </button>
        </footer>
        {this.state.view !== "main" && (
          <Modal content={this.state.view} closeHandler={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
