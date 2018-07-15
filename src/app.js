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
var template = ( 
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
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
	if(location)
		return <p>Location: {location}</p>;
	return undefined;
}
var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18 ) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

var appRoute = document.getElementById("app");

ReactDOM.render(template, appRoute);