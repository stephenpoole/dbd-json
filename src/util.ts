import pkgJson = require("../package.json");

class Util {
    static version(): string {
        return pkgJson.version;
    }
}

export default Util;
