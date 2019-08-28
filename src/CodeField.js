import React from "react";

function CodeField({ content }) {
  return (
    <div className="codesnippet">
      <pre className="lang-js">
        <code class="lang-js codesnippet__content">{content}</code>
      </pre>
    </div>
  );
}

export default CodeField;
