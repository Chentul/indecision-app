console.log("app.js is running ...");

// jsx - javascript xml
var template = React.createElement(
	'p',
	{ className: 'myClass', id:'myId' },
	'This is a "React.createElement" component from app.js'
);
var appRoute = document.getElementById("app");
ReactDOM.render(template, appRoute);