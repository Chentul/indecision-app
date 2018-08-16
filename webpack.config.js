const path = require('path');

module.exports = {
	// entry: './src/app.js', //  the main file
	// entry: './src/playground/redux-expensify.js',
	// entry: './src/playground/hoc.js',
	entry: './src/expensify/app.js', // expensify-app
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		// everything that are out from /no_modules and has the .js extension, compile it on babel-loader
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.s?css$/, 
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	// only works on google chrome
	devtool: "cheap-module-eval-source-map", 
	devServer: { 
	// set de devServer for webpack
		contentBase: path.join(__dirname, 'public'),
	}
};
