import React from "react";
import Prism from "prismjs";
import "./prism-monokai.css";
import "./CodeField.sass";

class CodeField extends React.Component {
  constructor(props) {
    super(props);
    this.content = props.content;
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="codesnippet">
        <pre className="lang-js">
          <code class="lang-js codesnippet__content">{this.content}</code>
        </pre>
      </div>
    );
  }
}

export default CodeField;
