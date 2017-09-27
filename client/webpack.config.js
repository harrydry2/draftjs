const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: './client/src/index.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.sass|\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
				}),
			},
			{
				test: /plugin\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	// devServer: {
	// 	contentBase: path.join(__dirname, 'dist'),
	// 	compress: true,
	// 	port: 9000,
	// },
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
		}),
		new ExtractTextPlugin('bundle.css'),
	],
};