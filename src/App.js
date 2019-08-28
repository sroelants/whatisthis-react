import React from "react";
import CodeField from "./CodeField";
import ButtonPanel from "./ButtonPanel";
import Modal from "./Modal";
import "./App.sass";
import about_content from "./content.js";

const snippet = `'use strict';

    function fun(a, b) {
    return a + b;
    }
    console.log(this);
    `;

class App extends React.Component {
  constructor() {
    super();
    this.state = { view: "about" };
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
          <CodeField content={snippet} />
          <ButtonPanel />
        </main>
        <footer>
          <a href="#" id="footer__about">
            {"No, seriously, what is this?"}
          </a>
        </footer>
        {this.state.view === "about" && <Modal content={about_content} />}
      </div>
    );
  }
}

export default App;
