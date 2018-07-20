const path = require('path');

module.exports = {
	entry: './src/app.js',
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
		}]
	},
	devtool: "cheap-module-eval-source-map", // only works on google chrome
	devServer: { // set de devServer for webpack
		contentBase: path.join(__dirname, 'public'),
	}
};