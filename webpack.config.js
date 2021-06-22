/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = (env, argv) => ({
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        libraryTarget: "umd",
        library: "dbd",
        umdNamedDefine: true,
    },
    resolve: {
        extensions: [".ts"],
    },
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader", "eslint-loader"],
            },
            { enforce: "pre", test: /\.ts$/, loader: "source-map-loader" },
        ],
    },
    devtool: "source-map",
    plugins: [
        new Dotenv({ path: `./.${argv.mode}.env` }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
        }),
        new webpack.DefinePlugin({
            "process.env.TARGET": "node",
        }),
    ],
});
