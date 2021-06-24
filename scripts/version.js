/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs").promises;
const path = require("path");
const nodePkg = require("../../deadbydaylight.node/package.json");
const pkg = require("../package.json");

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
    nodePkg.version = pkg.version;
    await fs.writeFile(
        path.resolve(__dirname, "../../deadbydaylight.node/package.json"),
        JSON.stringify(nodePkg, undefined, 2)
    );
})();
