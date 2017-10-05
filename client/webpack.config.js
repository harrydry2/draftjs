const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// minify build
const CompressionPlugin = require("compression-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: {
		// bundle: './client/src/index.js',
		bundle: './src/index.js',
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
	plugins: [
		new HtmlWebpackPlugin({
			// template: './client/index.html',
			template: './index.html',
		}),
		new ExtractTextPlugin('bundle.css'),

		// minify
		new BundleAnalyzerPlugin(),
		new CompressionPlugin({
		  asset: "[path].gz[query]",
		  algorithm: "gzip",
		  test: /\.js/,
		  threshold: 10240,
		  minRatio: 0,
		  // deleteOriginalAssets: true,
		})
	],
};