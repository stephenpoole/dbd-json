const data = require('../../');
const fs = require('fs');
const images = (() => {
    const path =
        'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Dead By Daylight\\DeadByDaylight\\Content\\UI\\Icons\\';

    if (fs.existsSync(path)) {
        function walkFilesSync(path, filelist = []) {
            fs.readdirSync(path).forEach(function(file) {
                if (fs.statSync(path + file).isDirectory()) {
                    filelist = walkFilesSync(path + file + '/', filelist);
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

export class Helpers {
    static resolve(done, value = true, message) {
        if (typeof done === 'function') {
            !!value ? done() : done(new Error(message));
        }
    }

    static isJSON(done, value) {
        try {
            const j = JSON.stringify(value);
            JSON.parse(j);
            this.resolve(done);
        } catch (e) {
            console.log(e);
            this.resolve(done, false);
        }
    }

    static exists(done, value, property) {
        this.resolve(done, property in value);
    }

    static isNumber(done, value) {
        const passed = typeof value === 'number';
        this.resolve(done, passed);
        return passed;
    }

    static isString(done, value) {
        const passed = typeof value === 'string';
        this.resolve(done, passed);
        return passed;
    }

    static isStringOrNumber(done, value) {
        this.resolve(
            done,
            this.isString(undefined, value) || this.isNumber(undefined, value)
        );
    }

    static unique(done, value, property, arr) {
        this.resolve(
            done,
            arr.filter(item => item[property] == value).length === 1
        );
    }

    static occurrences(done, value, needle, count = 1) {
        this.resolve(done, value.split(needle).length - 1 === count);
    }

    static isNotEmpty(done, value) {
        switch (typeof value) {
            case 'object':
                if (Array.isArray(value)) {
                    this.resolve(done, value.length);
                } else {
                    this.resolve(done, Object.keys(value).length);
                }
                break;
            case 'string':
                this.resolve(done, value.length);
                break;
            case 'number':
                this.resolve(done);
                break;
            default:
                this.resolve(done, false);
                break;
        }
    }

    static isLength(done, value, length) {
        this.resolve(done, value.length === length);
    }

    static isArray(done, value) {
        this.resolve(done, Array.isArray(value));
    }

    static isRarity(done, value) {
        this.resolve(done, value in data.Enum.Rarities);
    }

    static isItem(done, value) {
        this.resolve(done, value in data.Enum.ItemTypes);
    }

    static isKiller(done, value, allowGeneric = false) {
        for (let { index } of data.Killers) {
            if (value === index) {
                this.resolve(done);
                return;
            }
        }
        this.resolve(done, allowGeneric ? value === 'ALL' : false);
    }

    static isSurvivor(done, value, allowGeneric = false) {
        for (let { index } of data.Survivors) {
            if (value === index) {
                this.resolve(done);
                return;
            }
        }
        this.resolve(done, allowGeneric ? value === 'ALL' : false);
    }

    static isPerk(done, value, type) {
        if (typeof value === 'object') {
            value = value.index;
        }
        const perks =
            type === data.Enum.PlayerTypes.KILLER
                ? data.KillerPerks
                : data.SurvivorPerks;

        this.resolve(
            done,
            perks.filter(perk => perk.index === value).length === 1,
            value
        );
    }

    static imageExists(done, value, type) {
        if (!images.length) {
            this.resolve(done, true);
            return;
        }

        let name = '';

        switch (type) {
            case data.Enum.ModifierTypes.ADDON:
                name = `iconAddon_${value}.png`;
                break;
            case data.Enum.ModifierTypes.ITEM:
                name = `iconItems_${value}.png`;
                break;
            case data.Enum.ModifierTypes.OFFERING:
                name = `iconFavors_${value}.png`;
                break;
            case data.Enum.ModifierTypes.PERK:
                name = `iconPerks_${value}.png`;
                break;
            case data.Enum.ModifierTypes.PLAYER:
                name = `${value}_charSelect_portrait.png`;
                break;
            case data.Enum.ModifierTypes.POWER:
                name = `iconPowers_${value}.png`;
                break;
            default:
                this.resolve(done, false);
                return;
        }

        this.resolve(done, images.indexOf(name) > -1, name);
    }

    static tagsMatch(done, value, tags) {
        for (let tag of tags) {
            if (
                value.split(`%${tag}`).length !== value.split(`%/${tag}`).length
            ) {
                this.resolve(done, false);
                return;
            }
        }

        this.resolve(done, true);
    }
}
