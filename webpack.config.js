/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const config = argv => ({
    resolve: {
        extensions: [".ts"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"],
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
    ],
});

const nodeConfig = {
    entry: "./src/node.ts",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "../deadbydaylight.node/dist"),
        filename: "index.js",
        libraryTarget: "umd",
        libraryExport: "default",
        chunkFilename: "[name].js",
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.TARGET": JSON.stringify("node"),
        }),
    ],
};

const browserConfig = {
    entry: "./src/browser.ts",
    target: "web",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "deadbydaylight.js",
        globalObject: "this",
        umdNamedDefine: true,
        library: {
            name: "DeadByDaylight",
            type: "umd",
        },
        chunkFilename: "[name].[chunkhash].js",
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.TARGET": JSON.stringify("browser"),
        }),
        new CleanWebpackPlugin(),
    ],
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = (env, argv) => {
    const base = config(argv);
    const node = {
        ...base,
        ...nodeConfig,
        plugins: base.plugins.concat(nodeConfig.plugins),
    };
    const browser = {
        ...base,
        ...browserConfig,
        plugins: base.plugins.concat(browserConfig.plugins),
    };

    return [browser, node];
};
