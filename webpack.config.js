/* eslint-disable @typescript-eslint/no-var-requires */
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        libraryTarget: "umd",
        library: "dbd-db",
        umdNamedDefine: true,
    },
    resolve: {
        extensions: [".ts"],
    },
    target: "es5",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["awesome-typescript-loader", "eslint-loader"],
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ],
    },
    devtool: "source-map",
    plugins: [
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
        }),
    ],
};
