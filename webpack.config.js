module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/src/public/js",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}