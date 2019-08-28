import React from "react";
import CodeField from "./CodeField";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <header>
        {"What is "}
        <span className="this">{"this"}</span>
        {"?"}
      </header>
      <main>
        <CodeField content="let str = &quot;this is a js string&quot;" />
      </main>
    </div>
  );
}

export default App;
