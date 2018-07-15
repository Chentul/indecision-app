'use strict';

console.log("app.js is running ...");

// if statement
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" : "No options"

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: ['One', 'Two']
};
// jsx - javascript xml
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? "Here are your options" : "No options"
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

// Create a templateTwo var JSX expression
//	div
//		h1 -> Your name
//		p -> Age: 27 ...
//		p -> Location: Guadalajara Jal
// Render TemplateTwo instead of template
var user = {
	name: 'Vicente Noriega',
	age: 27,
	location: 'Guadalajara Jalisco, México'
};
function getLocation(location) {
	if (location) return React.createElement(
		'p',
		null,
		'Location: ',
		location
	);
	return undefined;
}
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoute = document.getElementById("app");

ReactDOM.render(template, appRoute);
