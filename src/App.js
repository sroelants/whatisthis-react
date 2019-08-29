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
    this.showExplanation = this.checkAnswer.bind(this);
    this.getModal = this.getModal.bind(this);
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

  showExplanation() {
    this.setState({ view: "explanation" });
  }

  getModal() {
    if (this.state.view === "correct") {
      return (
        <Modal
          type="answer"
          content={correct_content}
          closeHandler={this.closeModal}
          explanationHandler={this.showExplanation}
        />
      );
    } else if (this.state.view === "incorrect") {
      return (
        <Modal
          type="answer"
          content={incorrect_content}
          closeHandler={this.closeModal}
        />
      );
    } else if (this.state.view === "about") {
      return (
        <Modal
          type="about"
          content={about_content}
          closeHandler={this.closeModal}
        />
      );
    } else if (this.state.view === "explanation") {
      return (
        <Modal
          type="explanation"
          content={this.state.question.explanation}
          closeHandler={this.closeModal}
        />
      );
    }
    return null;
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
        {this.getModal()}
      </div>
    );
  }
}

export default App;
