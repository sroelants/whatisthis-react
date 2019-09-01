import React from 'react';
import CodeField from './CodeField';
import ButtonPanel from './ButtonPanel';
import Modal from './Modal';
import questions from './questions';
import { aboutContent, correctContent, incorrectContent } from './content';
import './App.sass';

function getQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const question = getQuestion();

    this.state = {
      view: 'main',
      codesnippet: question.codesnippet,
      options: question.options,
      correct: question.correct,
      explanation: question.explanation,
    };

    this.openAbout = this.openAbout.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.showExplanation = this.showExplanation.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.getModal = this.getModal.bind(this);
  }

  getModal(view) {
    const { explanation } = this.state;
    switch (view) {
      case 'correct':
        return (
          <Modal
            type="answer"
            content={correctContent}
            closeHandler={this.closeModal}
            explanationHandler={this.showExplanation}
            nextHandler={this.nextQuestion}
          />
        );
      case 'incorrect':
        return (
          <Modal
            type="answer"
            content={incorrectContent}
            closeHandler={this.closeModal}
            explanationHandler={this.showExplanation}
            nextHandler={this.nextQuestion}
          />
        );
      case 'explanation':
        // We pass the 'view' as a key to the explanation modal. This is
        // a complete hack, but by changing the key of the modal, we forcefully
        // trigger an update.
        return (
          <Modal
            type="explanation"
            content={explanation}
            closeHandler={this.closeModal}
            nextHandler={this.nextQuestion}
            key={view}
          />
        );
      case 'about':
        return (
          <Modal
            type="about"
            content={aboutContent}
            closeHandler={this.closeModal}
          />
        );
      default:
        return null;
    }
  }

  nextQuestion() {
    const {
      codesnippet, options, correct, explanation,
    } = getQuestion();
    this.setState({
      view: 'main',
      codesnippet,
      options,
      correct,
      explanation,
    });
  }

  checkAnswer(str) {
    const { correct } = this.state;
    if (str === correct) {
      return () => this.setState({ view: 'correct' });
    }
    return () => this.setState({ view: 'incorrect' });
  }

  showExplanation() {
    this.setState({ view: 'explanation' });
    this.forceUpdate();
  }

  openAbout() {
    this.setState({ view: 'about' });
  }

  closeModal() {
    this.setState({ view: 'main' });
  }

  render() {
    const { view, options, codesnippet } = this.state;
    // We pass the 'codesnippet' as a key to the CodeField. This is
    // a complete hack, but by changing the key of the modal, we forcefully
    // trigger an update.
    return (
      <div className="App">
        <header>
          {'What is '}
          <span className="header__this">this</span>
          {'?'}
        </header>
        <main>
          <CodeField key={codesnippet} content={codesnippet} />
          <ButtonPanel options={options} answerHandler={this.checkAnswer} />
        </main>
        <footer>
          <button
            type="button"
            className="footer__about"
            onClick={this.openAbout}
          >
            {'No, seriously, what is this?'}
          </button>
        </footer>
        {this.getModal(view)}
      </div>
    );
  }
}

export default App;
