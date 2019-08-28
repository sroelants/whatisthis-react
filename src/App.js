import React from "react";
import CodeField from "./CodeField";
import ButtonPanel from "./ButtonPanel";
import "./App.sass";
const snippet = `'use strict';

    function fun(a, b) {
    return a + b;
    }
    console.log(this);
    `;

function App() {
  return (
    <div className="App">
      <header>
        {"What is "}
        <span className="this">{"this"}</span>
        {"?"}
      </header>
      <main>
        <CodeField content={snippet} />
        <ButtonPanel />
      </main>
    </div>
  );
}

export default App;
