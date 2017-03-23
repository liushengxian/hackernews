const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	filename: './index.html',
	template: './src/index.html'
})


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	module:{
		loaders: [
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.css/,
			exclude: /^node_modules$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		},
		{
			test: /\.less/,
			exclude: /^node_modules$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader!less-loader'
			})
		},
		{
			test: /\.(png|jpg)$/,
			exclude: /^node_modules$/,
			loader: 'url?limit=2000&name=[name].[ext]'
		},
		{
			test: /\.ico$/,
			exclude:/^node_modules$/,
			loader: 'file-loader?name=[name].[ext]'
		}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		htmlWebpackPlugin
	],
	resolve:{
		alias:{
			'vue$': 'vue/dist/vue.common.js'
		}
	}

};