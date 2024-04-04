// CDN link is replaced with import
import React from "react";
import ReactDOM from "react-dom/client";

// This is a Single Element
const newheading = React.createElement("h1",{id : "heading"},"This code is added from react script!");

// This is Nested Element
const parent = React.createElement(
    "div",
    {id : "parent"}, 
    React.createElement( // this also becomes an object 
        "div",
        {id : "child"},
        [[React.createElement("h1",{id: "heading"},"I am child1"),React.createElement("h2",{id:"heading"},"I am child2")],
        [React.createElement("h1",{id: "heading2"},"I am child1"),React.createElement("h2",{id:"heading2"},"I am child2")]]));  

// this gives an object not html tag
console.log(newheading);

const newroot = ReactDOM.createRoot(document.getElementById("newroot"));
// this render takes the object and creates the corresponding element inside the browser
newroot.render(parent);
// newroot.render(newheading);

// ReactElement(Object) => HTML(Browser Understands)