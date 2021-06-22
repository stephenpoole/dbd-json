const fs = require("fs");
const path = require("path");

const load = async subpath => {
    const data = await fs.promises.readFile(path.resolve(__dirname, subpath));
    return JSON.parse(data);
};

const save = async (subpath, filename, data) => {
    const fullPath = path.resolve(__dirname, `../src/data.compiled/${subpath}`);
    const dirExists = fs.existsSync(fullPath);
    if (!dirExists) {
        await fs.promises.mkdir(fullPath);
    }

    return fs.promises.writeFile(
        path.resolve(__dirname, `../src/data.compiled/${subpath}/${filename}`),
        JSON.stringify(data, undefined, 4)
    );
};

const getFlavorText = text => {
    const regex = new RegExp(/^(.*)<br>?<span class=\\?"FlavorText\\?">(.*)<\/span>/g);
    const [a, description, flavor] = regex.exec(text) || [];
    return { description: !!description ? description : text, flavor };
};

const compileStrings = async language => {
    const data = await load(`./locales/${language}.json`);
    const keys = Object.values(data)[0];

    // killers
    const killers = await load("../src/data/killers.json");
    let output = killers
        .map(({ description, ...data }) => {
            if (description in keys) {
                return {
                    description: keys[description],
                    ...data,
                };
            } else {
                console.error(`killers (${data.name}) description ${description} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "killers.json", output);

    // powers
    const powers = await load("../src/data/powers.json");
    output = powers
        .map(({ name, description, ...data }) => {
            if (description in keys && name in keys) {
                return {
                    description: keys[description],
                    name: keys[name],
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(`powers (${data.index}) description ${description} did not exist`);
            }
            if (!(name in keys)) {
                console.error(`powers (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "powers.json", output);

    // survivors
    const survivors = await load("../src/data/survivors.json");
    output = survivors
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                return {
                    description: keys[description],
                    name: keys[name],
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(`survivors (${data.index}) description ${description} did not exist`);
            }
            if (!(name in keys)) {
                console.error(`survivors (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "survivors.json", output);

    // items
    const items = await load("../src/data/items.json");
    output = items
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription,
                    name: keys[name],
                    ...(flavor && { flavor }),
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(`items (${data.index}) description ${description} did not exist`);
            }
            if (!(name in keys)) {
                console.error(`items (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "items.json", output);

    // shared offerings
    const sharedOfferings = await load("../src/data/sharedOfferings.json");
    output = sharedOfferings
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription,
                    name: keys[name],
                    ...(flavor && { flavor }),
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(
                    `sharedOfferings (${data.index}) description ${description} did not exist`
                );
            }
            if (!(name in keys)) {
                console.error(`sharedOfferings (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "sharedOfferings.json", output);

    // survivor offerings
    const survivorOfferings = await load("../src/data/survivorOfferings.json");
    output = survivorOfferings
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription,
                    name: keys[name],
                    ...(flavor && { flavor }),
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(
                    `survivorOfferings (${data.index}) description ${description} did not exist`
                );
            }
            if (!(name in keys)) {
                console.error(`survivorOfferings (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "survivorOfferings.json", output);

    // killer offerings
    const killerOfferings = await load("../src/data/killerOfferings.json");
    output = killerOfferings
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription,
                    name: keys[name],
                    ...(flavor && { flavor }),
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(
                    `killerOfferings (${data.index}) description ${description} did not exist`
                );
            }
            if (!(name in keys)) {
                console.error(`killerOfferings (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "killerOfferings.json", output);

    // survivor addons
    const survivorAddons = await load("../src/data/survivorAddons.json");
    output = survivorAddons
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription,
                    name: keys[name],
                    ...(flavor && { flavor }),
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(
                    `survivorAddons (${data.index}) description ${description} did not exist`
                );
            }
            if (!(name in keys)) {
                console.error(`survivorAddons (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "survivorAddons.json", output);

    // killer addons
    const killerAddons = await load("../src/data/killerAddons.json");
    output = killerAddons
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription,
                    name: keys[name],
                    ...(flavor && { flavor }),
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(
                    `killerAddons (${data.index}) description ${description} did not exist`
                );
            }
            if (!(name in keys)) {
                console.error(`killerAddons (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "killerAddons.json", output);

    // killer perks
    const killerPerks = await load("../src/data/killerPerks.json");
    output = killerPerks
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription,
                    name: keys[name],
                    ...(flavor && { flavor }),
                    ...data,
                };
            }

            if (Array.isArray(description) && name in keys) {
                // [[text1,considerably,text],[text1,slightly,text2],[text1,kindof,text2]]
                const parts = description
                    .map(item => {
                        if (item in keys) {
                            return keys[item];
                        }
                        return undefined;
                    })
                    .filter(item => !!item)
                    .map(item =>
                        item.split(
                            /<span class=\\?"Highlight[0-9]{1}?\\?">([a-zA-Z0-9%]+)<\/span>/g
                        )
                    );

                let tiers = {};
                let builtDescription = "";
                if (parts.length === description.length && parts.length > 0) {
                    const comparer = parts[0];
                    let replaceCount = 0;
                    for (let i = 0; i < parts[0].length; i += 1) {
                        let isIndexEqual = true;
                        for (let j = 0; j < parts.length; j += 1) {
                            if (parts[j][i] !== comparer[i]) {
                                isIndexEqual = false;
                            }
                        }

                        if (isIndexEqual) {
                            builtDescription += comparer[i];
                        } else {
                            builtDescription += `<span class="Highlight">{${replaceCount++}}</span>`;

                            for (let j = 0; j < parts.length; j += 1) {
                                if (typeof tiers[j] === "undefined") {
                                    tiers[j] = [];
                                }
                                const value = parts[j][i] ? parts[j][i] : "";
                                tiers[j].push(value);
                            }
                        }
                    }
                    tiers = Object.values(tiers);
                }

                const { description: newDescription, flavor } = getFlavorText(builtDescription);
                return {
                    description: newDescription,
                    name: keys[name],
                    ...(flavor && { flavor }),
                    tiers,
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(
                    `killerPerks (${data.index}) description ${description} did not exist`
                );
            }
            if (!(name in keys)) {
                console.error(`killerPerks (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "killerPerks.json", output);

    // survivor perks
    const survivorPerks = await load("../src/data/survivorPerks.json");
    // TODO: add predator / sloppy butcher
    output = survivorPerks
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription,
                    name: keys[name],
                    ...(flavor && { flavor }),
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(
                    `survivorPerks (${data.index}) description ${description} did not exist`
                );
            }
            if (!(name in keys)) {
                console.error(`survivorPerks (${data.index}) name ${name} did not exist`);
            }
        })
        .filter(item => !!item);
    save(language, "survivorPerks.json", output);
};

const languages = (() => {
    const path = "./localization/locales/";

    if (fs.existsSync(path)) {
        function walkFilesSync(path, filelist = []) {
            fs.readdirSync(path).forEach(function (file) {
                if (fs.statSync(path + file).isDirectory()) {
                    filelist = walkFilesSync(path + file + "/", filelist);
                } else {
                    filelist.push(file);
                }
            });
            return filelist;
        }
        return walkFilesSync(path);
    } else {
        return [];
    }
})();

(async () => {
    const fullPath = path.resolve(__dirname, `../src/data.compiled`);
    const dirExists = fs.existsSync(fullPath);
    if (!dirExists) {
        await fs.promises.mkdir(fullPath);
    }
    await fs.promises.rmdir("../src/data.compiled", { recursive: true });
    languages.forEach(file => {
        const locale = file.substring(0, file.indexOf("."));
        compileStrings(locale);
    });
})();
