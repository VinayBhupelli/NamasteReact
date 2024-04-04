// CDN link is replaced with import
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement JS-object => HTMLElement(render)
const Heading = React.createElement(
  "div",
  { id: "parent" },
  "Heading using React createElement"
);
console.log(Heading);
// JSX - HTML like Syntax (transpiled before it reaches JS Engine)
// JSX => React.createElement => ReactElement JS-object => HTMLElement(render)
const jsxheading = (
  <h1 id="heading" className="Header">
    Heading using JSX 🚀
  </h1>
);
console.log(jsxheading);

// both Heading and jsxheading are object and identical

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);

// React Component
// Two Types of components
// Class Based components - OLD way
// Functional Based Components - NEW way

// React Functional Component
// It is just a Normal JS function which returns a JSX(react element)
// Always write with capital letter

// Converting Element to Component (Add Capital letter and ()=>)
const JsxHeading = () => (
  <h1 id="heading" className="Header">
    Heading using JSX 🚀
  </h1>
);
console.log(JsxHeading);

// Converting it into JS Function (older way)
const JsxHeading1 = function () {
  return (
    <h1 id="heading" className="Header">
      Heading using JSX 🚀
    </h1>
  );
};
console.log(JsxHeading1);

// {} you can write any JS expression inside it (can inject any JS code it gets converted into HTML)
let number = 1000;
const testing = () => {
  return (
    <div>
      {number}
      <div>{200 + 300}</div>
      {jsxheading}
    </div>
  );
};
// Component Compositions
const HeadingComponent = () => {
  return (
    <div>
      <JsxHeading />
      <h1>Functional Component</h1>
    </div>
  );
};
// Another valid way of writing
const HeadingComponent2 = () => <h1>Functional Component</h1>;

// How to render Functional Component
root.render(<HeadingComponent />);

// Infinte Loop
// component inside element and element inside component

// JSX also takes care of Injections Like CrossSiteScripting
// Which happens when api fetched data is called in {} JS code
// It sanitizes the code first

// ALL are same
// <Title />
// <Title></Title>
// {Title()}
