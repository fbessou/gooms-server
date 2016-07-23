path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	resolve: {
		extensions: ["", ".ts", ".js"]
	},
	output: {
		filename: "gooms.js"
	},
	entry: {
		"app": path.resolve("./src/main.ts")
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts-loader"
			}
		],
		postLoaders: [
			{
				include: path.resolve('node_modules/pixi.js'),
				loader: 'transform/cacheable?brfs'
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
	plugins : [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			chunksSortMode: 'dependency'
		})
	],
	devServer: {
		port:1337
	}
}
