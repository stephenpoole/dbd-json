module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                exclude: ["proposal-dynamic-import"],
            },
        ],
        "@babel/preset-typescript",
    ],
    plugins: [
        [
            "const-enum",
            {
                transform: "constObject",
            },
        ],
        ["@babel/transform-runtime"],
    ],
};
