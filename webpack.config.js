/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
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

const browserConfig = {
    target: "web",
    output: {
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

    const all = {
        ...base,
        ...browserConfig,
        plugins: base.plugins.concat(browserConfig.plugins),
        output: {
            ...browserConfig.output,
            path: path.resolve(__dirname, "./all"),
        },
        entry: "./src/all/index.ts",
    };
    const en = {
        ...base,
        ...browserConfig,
        plugins: base.plugins.concat(browserConfig.plugins),
        output: {
            ...browserConfig.output,
            path: path.resolve(__dirname, "./en"),
        },
        entry: "./src/en/index.ts",
    };
    const es = {
        ...en,
        entry: "./src/es/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./es"),
        },
    };
    const de = {
        ...en,
        entry: "./src/de/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./de"),
        },
    };
    const fr = {
        ...en,
        entry: "./src/fr/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./fr"),
        },
    };
    const it = {
        ...en,
        entry: "./src/it/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./it"),
        },
    };
    const jp = {
        ...en,
        entry: "./src/jp/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./jp"),
        },
    };
    const ko = {
        ...en,
        entry: "./src/ko/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./ko"),
        },
    };
    const pl = {
        ...en,
        entry: "./src/pl/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./pl"),
        },
    };
    const ru = {
        ...en,
        entry: "./src/ru/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./ru"),
        },
    };
    const th = {
        ...en,
        entry: "./src/th/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./th"),
        },
    };
    const tr = {
        ...en,
        entry: "./src/tr/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./tr"),
        },
    };
    const zh = {
        ...en,
        entry: "./src/zh/index.ts",
        output: {
            ...en.output,
            path: path.resolve(__dirname, "./zh"),
        },
    };

    return [all, en, es, de, fr, it, jp, ko, pl, ru, th, tr, zh];
};
