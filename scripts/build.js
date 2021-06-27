/* eslint-disable max-len */
const fs = require("fs");
const path = require("path");

const dest = "../src/data.compiled";

const exists = path => new Promise(resolve => fs.exists(path, resolve));

const load = async subpath => {
    console.log("load", path.resolve(__dirname, subpath));
    const data = await fs.promises.readFile(path.resolve(__dirname, subpath));
    return JSON.parse(data);
};

const saveJson = async (subpath, filename, data) => {
    const fullPath = path.resolve(__dirname, `${dest}/${subpath}`);
    console.log("save", path.resolve(__dirname, `${dest}/${subpath}/${filename}`));
    const dirExists = await exists(fullPath);
    if (!dirExists) {
        await fs.promises.mkdir(fullPath, { recursive: true });
    }

    return fs.promises.writeFile(
        path.resolve(__dirname, `${dest}/${subpath}/${filename}`),
        JSON.stringify(data, undefined, 4)
    );
};

const save = async (subpath, filename, data) => {
    const fullPath = path.resolve(__dirname, `${dest}/${subpath}`);
    console.log("save", path.resolve(__dirname, `${dest}/${subpath}/${filename}`));
    const dirExists = await exists(fullPath);
    if (!dirExists) {
        await fs.promises.mkdir(fullPath);
    }

    return fs.promises.writeFile(path.resolve(__dirname, `${dest}/${subpath}/${filename}`), data);
};

const getFlavorText = text => {
    const regex = new RegExp(/^(.*)<br>?<span class=\\?"FlavorText\\?">(.*)<\/span>/g);
    const [a, description, flavor] = regex.exec(text) || [];
    return { description: !!description ? description : text, flavor };
};

const buildEnum = data =>
    data.reduce((prev, current) => {
        const key = current.name
            .replace(/-[a-z]{1}/g, item => item.toUpperCase())
            .match(/[a-zA-Z0-9]+/g)
            .map(word => {
                const map = {
                    1: "One",
                    2: "Two",
                    3: "Three",
                    4: "Four",
                    5: "Five",
                    6: "Six",
                    7: "Seven",
                    8: "Eight",
                    9: "Nine",
                    0: "Zero",
                };
                const first = word.substring(0, 1).trim();
                return first in map ? map[first] : first + word.substring(1).toLowerCase().trim();
            })
            .join("");

        const exists = prev.filter(([curKey]) => key === curKey);
        if (exists.length === 0) {
            prev.push([key, current.index]);
        }
        return prev;
    }, []);

const stringifyEnum = (data, name, omit = "") => {
    let str = `const enum ${name} {\n`;
    data.forEach(([key = "", value = ""]) => {
        str += `    ${key.replace(omit, "")} = "${value}",\n`;
    });
    str += "}";
    return str;
};

const compileStrings = async language => {
    const data = await load(`./locales/${language}.json`);
    const keys = Object.values(data)[0];
    const enums = {};

    // killers
    const killers = await load("../src/data/killers.json");
    let output = killers
        .map(({ description, story, name, ...data }) => {
            if (description in keys && story in keys && name in keys) {
                return {
                    description: keys[description].trim(),
                    name: keys[name].trim(),
                    story: keys[story].trim(),
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(`killers (${data.index}) description ${description} did not exist`);
            }
            if (!(name in keys)) {
                console.error(`killers (${data.index}) name ${name} did not exist`);
            }
            if (!(story in keys)) {
                console.error(`killers (${data.index}) story ${story} did not exist`);
            }
        })
        .filter(item => !!item);
    saveJson(`locales/${language}`, "killers.json", output);
    if (language === "en") {
        const result = buildEnum(output);
        result.unshift(["NoOne", "NO_ONE"]);
        enums.killers = result;
    }

    // powers
    const powers = await load("../src/data/powers.json");
    output = powers
        .map(({ name, description, ...data }) => {
            if (description in keys && name in keys) {
                return {
                    description: keys[description].trim(),
                    name: keys[name].trim(),
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
    saveJson(`locales/${language}`, "powers.json", output);
    if (language === "en") {
        enums.powers = buildEnum(output);
    }

    // survivors
    const survivors = await load("../src/data/survivors.json");
    output = survivors
        .map(({ description, name, story, ...data }) => {
            if (description in keys && story in keys && name in keys) {
                return {
                    description: keys[description].trim(),
                    name: keys[name].trim(),
                    story: keys[story].trim(),
                    ...data,
                };
            }

            if (!(description in keys)) {
                console.error(`survivors (${data.index}) description ${description} did not exist`);
            }
            if (!(name in keys)) {
                console.error(`survivors (${data.index}) name ${name} did not exist`);
            }
            if (!(story in keys)) {
                console.error(`survivors (${data.index}) story ${story} did not exist`);
            }
        })
        .filter(item => !!item);
    saveJson(`locales/${language}`, "survivors.json", output);
    if (language === "en") {
        const result = buildEnum(output);
        result.unshift(["NoOne", "NO_ONE"]);
        enums.survivors = result;
    }

    // items
    const items = await load("../src/data/items.json");
    output = items
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription.trim(),
                    name: keys[name].trim(),
                    ...(flavor && { flavor: flavor.trim() }),
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
    saveJson(`locales/${language}`, "items.json", output);
    if (language === "en") {
        enums.items = buildEnum(output);
    }

    // shared offerings
    const sharedOfferings = await load("../src/data/sharedOfferings.json");
    output = sharedOfferings
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription.trim(),
                    name: keys[name].trim(),
                    ...(flavor && { flavor: flavor.trim() }),
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
    saveJson(`locales/${language}`, "sharedOfferings.json", output);
    if (language === "en") {
        enums.sharedOfferings = buildEnum(output);
    }

    // survivor offerings
    const survivorOfferings = await load("../src/data/survivorOfferings.json");
    output = survivorOfferings
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription.trim(),
                    name: keys[name].trim(),
                    ...(flavor && { flavor: flavor.trim() }),
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
    saveJson(`locales/${language}`, "survivorOfferings.json", output);
    if (language === "en") {
        enums.survivorOfferings = buildEnum(output);
    }

    // killer offerings
    const killerOfferings = await load("../src/data/killerOfferings.json");
    output = killerOfferings
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription.trim(),
                    name: keys[name].trim(),
                    ...(flavor && { flavor: flavor.trim() }),
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
    saveJson(`locales/${language}`, "killerOfferings.json", output);
    if (language === "en") {
        enums.killerOfferings = buildEnum(output);
    }

    // survivor addons
    const survivorAddons = await load("../src/data/survivorAddons.json");
    output = survivorAddons
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription.trim(),
                    name: keys[name].trim(),
                    ...(flavor && { flavor: flavor.trim() }),
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
    saveJson(`locales/${language}`, "survivorAddons.json", output);
    if (language === "en") {
        enums.survivorAddons = buildEnum(output);
    }

    // killer addons
    const killerAddons = await load("../src/data/killerAddons.json");
    output = killerAddons
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription.trim(),
                    name: keys[name].trim(),
                    ...(flavor && { flavor: flavor.trim() }),
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
    saveJson(`locales/${language}`, "killerAddons.json", output);
    if (language === "en") {
        enums.killerAddons = buildEnum(output);
    }

    // killer perks
    const killerPerks = await load("../src/data/killerPerks.json");
    output = killerPerks
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription.trim(),
                    name: keys[name].trim(),
                    ...(flavor && { flavor: flavor.trim() }),
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
    saveJson(`locales/${language}`, "killerPerks.json", output);
    if (language === "en") {
        enums.killerPerks = buildEnum(output);
    }

    // survivor perks
    const survivorPerks = await load("../src/data/survivorPerks.json");
    // TODO: add predator / sloppy butcher
    output = survivorPerks
        .map(({ description, name, ...data }) => {
            if (description in keys && name in keys) {
                const { description: newDescription, flavor } = getFlavorText(keys[description]);
                return {
                    description: newDescription.trim(),
                    name: keys[name].trim(),
                    ...(flavor && { flavor: flavor.trim() }),
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
    saveJson(`locales/${language}`, "survivorPerks.json", output);

    if (language === "en") {
        enums.survivorPerks = buildEnum(output);

        const offerings = [
            ...enums.survivorOfferings,
            ...enums.killerOfferings,
            ...enums.sharedOfferings,
        ];
        const addons = [...enums.survivorAddons, ...enums.killerAddons];
        const perks = [...enums.killerPerks, ...enums.survivorPerks];
        const enumOutput = `${stringifyEnum(enums.killers, "Killer", "The")}\n
${stringifyEnum(enums.powers, "Power")}\n
${stringifyEnum(enums.survivors, "Survivor")}\n
${stringifyEnum(enums.items, "Item")}\n
${stringifyEnum(offerings, "Offering")}\n
${stringifyEnum(enums.survivorOfferings, "SurvivorOffering")}\n
${stringifyEnum(enums.killerOfferings, "KillerOffering")}\n
${stringifyEnum(addons, "Addon")}\n
${stringifyEnum(enums.killerAddons, "KillerAddon")}\n
${stringifyEnum(enums.survivorAddons, "SurvivorAddon")}\n
${stringifyEnum(perks, "Perk")}\n
${stringifyEnum(enums.killerPerks, "KillerPerk")}\n
${stringifyEnum(enums.survivorPerks, "SurvivorPerk")}\n
export {
    Killer,
    Power,
    Survivor,
    Item,
    Offering,
    SurvivorOffering,
    KillerOffering,
    Addon,
    KillerAddon,
    SurvivorAddon,
    Perk,
    KillerPerk,
    SurvivorPerk
};\n`;
        save("", "enum.ts", enumOutput);
    }
};

const languages = (() => {
    const fullPath = path.resolve(__dirname, "./locales/");

    if (fs.existsSync(fullPath)) {
        function walkFilesSync(fullPath, filelist = []) {
            fs.readdirSync(fullPath).forEach(function (file) {
                if (fs.statSync(fullPath + "/" + file).isDirectory()) {
                    filelist = walkFilesSync(fullPath + "/" + file + "/", filelist);
                } else {
                    filelist.push(file);
                }
            });
            return filelist;
        }
        return walkFilesSync(fullPath);
    } else {
        return [];
    }
})();

(async () => {
    const fullPath = path.resolve(__dirname, dest);
    await fs.promises.rmdir(fullPath, { recursive: true });
    await fs.promises.mkdir(fullPath);

    languages.forEach(file => {
        const locale = file.substring(0, file.indexOf("."));
        compileStrings(locale);
    });
})();
