path = require("path")
module.exports = {
	resolve: {
		extensions: ["", ".ts", ".js"]
	},
	output: {
		filename: "gooms.js"
	},
	entry: {
		"app": path.resolve("./src/index.ts")
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts-loader"
			}
		]
	},
	node: {
		global: 'window',
		crypto: 'empty',
		module:false,
		clearImmediate: false,
		setImmediate: false
	},
	devServer: {
		port:1337
	}
}
