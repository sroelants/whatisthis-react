import React from "react";

const about_content = (
  <div>
    <h1>An educational game for beginning JS developers</h1>
    <p>
      For a long time, javascript was considered a confusing, poorly designed
      programming language that has far outgrown its domain of use. With the
      newer ECMA specifications (ES6 and above), many of these gripes are
      becoming a thing of the past.
    </p>
    <p>
      One thing that has not changed, however, is javascript's implementation of
      the <code>this</code> keyword that seemingly differs from how most other
      languages have implemented it. To say that <code>this</code>
      <a
        href="https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        is a{" "}
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        stumbling block{" "}
      </a>
      <a
        href="https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        for many{" "}
      </a>
      <a
        href="https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        javascript beginners{" "}
      </a>
      would be an understatement.
    </p>

    <p>
      {" "}
      This page will not go into a detailed explanation of the inner workings of
      the <code>this</code> keyword. There's plenty of those to be found online
      (I list some references at the bottom). Instead, I will try to give a
      short explanation with every code example of what exactly is happening.
    </p>

    <p>
      The idea for this site came up in a discussion on the
      <a
        href="https://syntax.fm/show/162/the-fundamentals-js"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Syntax podcast
      </a>{" "}
      on javascript fundamentals. I highly recommend the podcast to anyone
      starting out in front end development!
    </p>

    <p>Some references, in no particular order</p>
    <dl>
      <dt>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN documentation
        </a>
      </dt>
      <dd>As always, the MDN docs should be the first place to go to.</dd>
      <dt>
        <a
          href="http://www.digital-web.com/articles/scope_in_javascript/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mike West on javascript scope
        </a>
      </dt>
      <dd>
        This article explains the mechanics of <code>this</code> in the wider
        context of javascript scoping.
      </dd>
      <dt>
        <a
          href="https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gentle explanation of <code>this</code> keyword in javascript
        </a>
      </dt>
      <dd>A long but excellent and detailed description by Dmitri Pavlutin.</dd>
    </dl>
  </div>
);
export default about_content;
