"use strict";

console.log("app.js is running ...");

// jsx - javascript xml
var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Indecision App"
	),
	React.createElement(
		"p",
		null,
		"This is some info"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item one"
		),
		React.createElement(
			"li",
			null,
			"Item two"
		)
	)
);

// Create a templateTwo var JSX expression
//	div
//		h1 -> Your name
//		p -> Age: 27 ...
//		p -> Location: Guadalajara Jal
// Render TemplateTwo instead of template

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Vicente Noriega"
	),
	React.createElement(
		"p",
		null,
		"Age: 27"
	),
	React.createElement(
		"p",
		null,
		"Location: Guadalajara Jalisco, M\xE9xico"
	)
);

var appRoute = document.getElementById("app");

ReactDOM.render(templateTwo, appRoute);
