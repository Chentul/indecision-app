'use strict';

console.log("app.js is running ...");

// create app object title/subtitle
// use title/subtitle in the template
// render template
var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer'
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
	React.createElement(
		'p',
		null,
		app.subtitle
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
// var userName = 'Vicente Noriega';
// var userAge = 27;
// var userLocation = 'Guadalajara Jalisco, México.';
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoute = document.getElementById("app");

ReactDOM.render(template, appRoute);
