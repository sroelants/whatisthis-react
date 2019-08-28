import React from "react";
import CodeField from "./CodeField";
import ButtonPanel from "./ButtonPanel";
import Modal from "./Modal";
import questions from "./questions";
import { about_content, correct_content, incorrect_content } from "./content";
import "./App.sass";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "main",
      question: questions[Math.floor(Math.random() * questions.length)]
    };

    this.openAbout = this.openAbout.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  closeModal() {
    this.setState({ view: "main" });
  }

  openAbout() {
    this.setState({ view: "about" });
  }

  checkAnswer(str) {
    if (str === this.state.question.correct) {
      return () => this.setState({ view: "correct" });
    } else {
      return () => this.setState({ view: "incorrect" });
    }
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
          <ButtonPanel
            options={this.state.question.options}
            answerHandler={this.checkAnswer}
          />
        </main>
        <footer>
          <button className="footer__about" onClick={this.openAbout}>
            {"No, seriously, what is this?"}
          </button>
        </footer>
        {this.state.view === "about" && (
          <Modal content={about_content} closeHandler={this.closeModal} />
        )}
        {this.state.view === "correct" && (
          <Modal content={correct_content} closeHandler={this.closeModal} />
        )}
        {this.state.view === "incorrect" && (
          <Modal content={incorrect_content} closeHandler={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
