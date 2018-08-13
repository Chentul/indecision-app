// Higher Order Component (HOC) - A component that renders another component
// Bid advantages to use HOC
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);
 
const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
				) : (
					<p>Please login to view the info</p>
				)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
	<AuthInfo info={"This are the details"} 
							isAuthenticated={true} />,
	document.getElementById('app')
);

// ReactDOM.render(
// 	<AdminInfo info={"This are the details"} 
// 							isAdmin={true} />,
// 	document.getElementById('app')
// );