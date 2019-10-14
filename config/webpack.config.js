/*globals module, require */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    externals: {
        'react': 'react'
    },
    mode: "production",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    output: {
        libraryTarget: "commonjs",
        filename: "[name].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: 'package.json' },
            { from: 'README.md' },
            { from: './src/index.ts' },
        ]),
    ]
};
