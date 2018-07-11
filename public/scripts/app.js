"use strict";

console.log("app.js is running ...");

// jsx - javascript xml
var template = React.createElement(
  "h1",
  { className: "myClass" },
  "This is JSX from src/app.js"
);
var appRoute = document.getElementById("app");
ReactDOM.render(template, appRoute);
