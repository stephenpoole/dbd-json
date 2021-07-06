const fs = require("fs");
const path = require("path");
const lastVersionPath = "./version.txt";
const filePath =
    "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Dead by Daylight\\DeadByDaylight\\Content\\Version\\DeadByDaylightVersionNumber.txt";

fs.stat(path.resolve(__dirname, lastVersionPath), (error, stat) => {
    let lastVersion;
    if (stat) {
        lastVersion = fs.readFileSync(path.resolve(__dirname, lastVersionPath)).toString();
    }
    const version = fs.readFileSync(filePath).toString();
    if (lastVersion !== version) {
        console.log(lastVersion, "=>", version);
    } else {
        console.log("no updates");
    }

    fs.writeFileSync(path.resolve(__dirname, lastVersionPath), version);
});
