console.log("app.js is running ...");

// create app object title/subtitle
// use title/subtitle in the template
// render template
var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer'
};
// jsx - javascript xml
var template = ( 
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
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
// var userName = 'Vicente Noriega';
// var userAge = 27;
// var userLocation = 'Guadalajara Jalisco, México.';
var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

var appRoute = document.getElementById("app");

ReactDOM.render(template, appRoute);
