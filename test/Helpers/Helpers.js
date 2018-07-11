const data = require('../../');
const fs = require('fs');
const images = (() => {
    const path =
        'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Dead By Daylight\\DeadByDaylight\\Content\\UI\\Icons';

    if (fs.existsSync(path)) {
        return Helpers.walkFilesSync(path);
    } else {
        return [];
    }
})();
let Enum = data.Enum;
let killers = data.Killers;
let survivors = data.Survivors;

export class Helpers {
    static resolve(done, value = true) {
        if (typeof done === 'function') {
            !!value ? done() : done(new Error());
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
            !arr.filter(item => value[property] === value).length
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
        this.resolve(done, value in Enum.Rarities);
    }
    static isItem(done, value) {
        this.resolve(done, value in Enum.ItemTypes);
    }
    static isKiller(done, value, allowGeneric = false) {
        for (let { index } of killers) {
            if (value === index) {
                this.resolve(done);
                return;
            }
        }
        this.resolve(done, allowGeneric ? value === 'ALL' : false);
    }
    static isSurvivor(done, value, allowGeneric = false) {
        for (let { index } of survivors) {
            if (value === index) {
                this.resolve(done);
                return;
            }
        }
        this.resolve(done, allowGeneric ? value === 'ALL' : false);
    }
    static walkFilesSync(path) {
        var fs = fs || require('fs'),
            files = fs.readdirSync(path);
        filelist = filelist || [];
        files.forEach(function(file) {
            if (fs.statSync(dir + file).isDirectory()) {
                filelist = this.walkFilesSync(dir + file + '/', filelist);
            } else {
                filelist.push(file.name);
            }
        });
        return filelist;
    }
    static imageExists(done, value, type) {
        if (!images.length) {
            this.resolve(done, true);
            return;
        }

        let name = '';

        switch (type) {
            case Enum.ModifierTypes.ADDON:
                name = `iconAddon_${value}.jpg`;
                break;
            case Enum.ModifierTypes.ITEM:
                name = `iconItem_${value}.jpg`;
                break;
            case Enum.ModifierTypes.OFFERING:
                name = `iconFavors_${value}.jpg`;
                break;
            case Enum.ModifierTypes.PERK:
                name = `iconPerks_${value}.jpg`;
                break;
            case Enum.ModifierTypes.PLAYER:
                name = `${value}_charSelect_portrait.jpg`;
                break;
            case Enum.ModifierTypes.POWER:
                name = `iconPowers_${value}.jpg`;
                break;
            default:
                this.resolve(done, false);
                return;
        }

        this.resolve(done, images.indexOf(name) > -1);
    }
}
