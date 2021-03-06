import { ItemType, PlayerType } from "../../../src/en";
import { Helpers } from "./";

export class PropertyValidate {
    static id(value, arr) {
        return describe("#id", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "id");
            });
            it("should be a number", function (done) {
                Helpers.isNumber(done, value.id);
            });
            it("should be unique", function (done) {
                Helpers.unique(done, value.id, "id", arr);
            });
        });
    }

    static index(value, arr) {
        return describe("#index", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "index");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.index);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.index);
            });
            it("should be unique", function (done) {
                Helpers.unique(done, value.index, "index", arr);
            });
        });
    }

    static _name(value, arr) {
        return describe("#name", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "name");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.name);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.name);
            });
            it("should not be a locale id", function (done) {
                Helpers.isNotLocaleId(done, value.name);
            });
            if (value.id !== 101 && value.id !== 403) {
                // the only repeated addon is Speed Limiter between billy and bubba
                it("should be unique", function (done) {
                    Helpers.unique(done, value.name, "name", arr);
                });
            }
        });
    }

    static addonType(value, arr) {
        return describe("#type", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "type");
            });
            it("should be a number", function (done) {
                Helpers.isNumber(done, value.type);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.type);
            });
            it("should be a valid item", function (done) {
                Helpers.isItem(done, value.type);
            });
        });
    }

    static itemType(value, arr) {
        return this.addonType(value, arr);
    }

    static owner(value, arr, unique = true) {
        return describe("#owner", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "owner");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.owner);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.owner);
            });
            if (unique) {
                it("should be unique", function (done) {
                    Helpers.unique(done, value.owner, "owner", arr);
                });
            }
        });
    }

    static rarity(value, arr) {
        return describe("#rarity", function () {
            if (typeof value === "object") {
                it("should exist", function (done) {
                    Helpers.exists(done, value, "rarity");
                });
            }
            const property = typeof value === "object" ? value.rarity : value;
            it("should be a number", function (done) {
                Helpers.isNumber(done, property);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, property);
            });
            it("should be a valid rarity", function (done) {
                Helpers.isRarity(done, property);
            });
        });
    }

    static difficulty(value, arr) {
        return describe("#difficulty", function () {
            if (typeof value === "object") {
                it("should exist", function (done) {
                    Helpers.exists(done, value, "difficulty");
                });
            }
            const property = typeof value === "object" ? value.difficulty : value;
            it("should be a number", function (done) {
                Helpers.isNumber(done, property);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, property);
            });
            it("should be a valid difficulty", function (done) {
                Helpers.isDifficulty(done, property);
            });
        });
    }

    static description(value, arr) {
        return describe("#description", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "description");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.description);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.description);
            });
            it("should not be a locale id", function (done) {
                Helpers.isNotLocaleId(done, value.description);
            });
            it("should be unique", function (done) {
                Helpers.unique(done, value.description, "description", arr);
            });
        });
    }

    static story(value, arr) {
        return describe("#story", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "story");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.story);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.story);
            });
            it("should not be a locale id", function (done) {
                Helpers.isNotLocaleId(done, value.story);
            });
            it("should be unique", function (done) {
                Helpers.unique(done, value.story, "story", arr);
            });
        });
    }

    static tier(value, arr) {
        return describe("#tier", function () {
            it("should be a string or number", function (done) {
                Helpers.isStringOrNumber(done, value);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value);
            });
        });
    }

    static flavor(value, arr) {
        return describe("#flavor", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "flavor");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.flavor);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.flavor);
            });
        });
    }

    static power(value, arr) {
        return describe("#power", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "power");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.power);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.power);
            });
        });
    }

    static addonOwner(value, arr) {
        return describe("#owner", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "owner");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.owner);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.owner);
            });
            it("should be a valid killer", function (done) {
                Helpers.isKiller(done, value.owner);
            });
        });
    }

    static image(value, arr, type) {
        return describe("#image", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "image");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.image);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.image);
            });
            it("should exist in the filesystem", function (done) {
                Helpers.imageExists(done, value.image, type);
            });
        });
    }

    static perkOwner(value, arr, type) {
        return describe("#owner", function () {
            it("should exist", function (done) {
                Helpers.exists(done, value, "owner");
            });
            it("should be a string", function (done) {
                Helpers.isString(done, value.owner);
            });
            it("should not be empty", function (done) {
                Helpers.isNotEmpty(done, value.owner);
            });
            if (type === PlayerType.Killer) {
                it("should be a valid killer", function (done) {
                    Helpers.isKiller(done, value.owner, true);
                });
            } else if (type === PlayerType.Survivor) {
                it("should be a valid survivor", function (done) {
                    Helpers.isSurvivor(done, value.owner, true);
                });
            }
        });
    }

    static powerOwner(value, arr, type) {
        return this.perkOwner(value, arr, type);
    }
}
