/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => ({
    entry: "./src/index.browser.ts",
    output: {
        filename: "deadbydaylight.js",
        libraryTarget: "umd",
        library: "DeadByDaylight",
        umdNamedDefine: true,
    },
    resolve: {
        extensions: [".ts"],
    },
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
            "process.env.TARGET": "browser",
        }),
        new CopyPlugin({ patterns: [{ from: "src/data.compiled", to: "data" }] }),
    ],
});
