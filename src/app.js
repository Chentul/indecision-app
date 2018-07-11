console.log("app.js is running ...");

// jsx - javascript xml
var template = <h1 className="myClass">This is JSX from src/app.js</h1>
var appRoute = document.getElementById("app");
ReactDOM.render(template, appRoute);