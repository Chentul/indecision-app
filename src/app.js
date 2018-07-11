console.log("app.js is running ...");

// jsx - javascript xml
var template = ( 
	<div>
		<h1>Indecision App</h1>
		<p>This is some info</p>
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

var templateTwo = (
	<div>
		<h1>Vicente Noriega</h1>
		<p>Age: 27</p>
		<p>Location: Guadalajara Jalisco, México</p>
	</div>
);

var appRoute = document.getElementById("app");

ReactDOM.render(templateTwo, appRoute);
