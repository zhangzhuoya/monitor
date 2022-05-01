const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8081,
        open: true,
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./src/index.html"
        }
    )]
}