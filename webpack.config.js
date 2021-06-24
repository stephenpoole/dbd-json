/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");
const CircularDependencyPlugin = require("circular-dependency-plugin");

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
    entry: "./node/index.ts",
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
    const en = {
        ...base,
        ...browserConfig,
        plugins: base.plugins.concat(browserConfig.plugins),
        output: {
            ...browserConfig.output,
            path: path.resolve(__dirname, "./en"),
        },
        entry: "./en/index.ts",
    };
    const es = {
        ...en,
        entry: "./es/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./es"),
        },
    };
    const de = {
        ...en,
        entry: "./de/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./de"),
        },
    };
    const fr = {
        ...en,
        entry: "./fr/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./fr"),
        },
    };
    const it = {
        ...en,
        entry: "./it/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./it"),
        },
    };
    const jp = {
        ...en,
        entry: "./jp/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./jp"),
        },
    };
    const ko = {
        ...en,
        entry: "./ko/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./ko"),
        },
    };
    const pl = {
        ...en,
        entry: "./pl/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./pl"),
        },
    };
    const ru = {
        ...en,
        entry: "./ru/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./ru"),
        },
    };
    const th = {
        ...en,
        entry: "./th/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./th"),
        },
    };
    const tr = {
        ...en,
        entry: "./tr/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./tr"),
        },
    };
    const zh = {
        ...en,
        entry: "./zh/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./zh"),
        },
    };

    return [en, es, de, fr, it, jp, ko, pl, ru, th, tr, zh, node];
};
