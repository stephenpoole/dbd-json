"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerModel = exports.PlayerModel = exports.PerkModel = exports.OfferingModel = exports.ItemModel = exports.AddonModel = exports.Survivor = exports.Killer = exports.Language = exports.ModifierType = exports.ItemType = exports.Difficulty = exports.Rarity = exports.Amounts = exports.PlayerType = void 0;
var enum_1 = require("./enum");
Object.defineProperty(exports, "Amounts", { enumerable: true, get: function () { return enum_1.Amounts; } });
Object.defineProperty(exports, "PlayerType", { enumerable: true, get: function () { return enum_1.Player; } });
Object.defineProperty(exports, "Rarity", { enumerable: true, get: function () { return enum_1.Rarity; } });
Object.defineProperty(exports, "Difficulty", { enumerable: true, get: function () { return enum_1.Difficulty; } });
Object.defineProperty(exports, "ItemType", { enumerable: true, get: function () { return enum_1.ItemType; } });
Object.defineProperty(exports, "ModifierType", { enumerable: true, get: function () { return enum_1.ModifierType; } });
Object.defineProperty(exports, "Language", { enumerable: true, get: function () { return enum_1.Language; } });
Object.defineProperty(exports, "Killer", { enumerable: true, get: function () { return enum_1.Killer; } });
Object.defineProperty(exports, "Survivor", { enumerable: true, get: function () { return enum_1.Survivor; } });
var factories_1 = __importDefault(require("./factories"));
var model_1 = require("./factory/model");
Object.defineProperty(exports, "AddonModel", { enumerable: true, get: function () { return model_1.Addon; } });
Object.defineProperty(exports, "ItemModel", { enumerable: true, get: function () { return model_1.Item; } });
Object.defineProperty(exports, "OfferingModel", { enumerable: true, get: function () { return model_1.Offering; } });
Object.defineProperty(exports, "PerkModel", { enumerable: true, get: function () { return model_1.Perk; } });
Object.defineProperty(exports, "PlayerModel", { enumerable: true, get: function () { return model_1.Player; } });
Object.defineProperty(exports, "PowerModel", { enumerable: true, get: function () { return model_1.Power; } });
var locale_1 = __importDefault(require("./locale"));
var Dbd = /** @class */ (function () {
    function Dbd(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.language, language = _c === void 0 ? enum_1.Language.English : _c;
        this.setLanguage(language);
    }
    Dbd.prototype.setLanguage = function (language) {
        this.locale = new locale_1.default(language);
        this.factory = new factories_1.default(this.locale);
    };
    Dbd.prototype.item = function (key) {
        return this.factory.item.getModel(key);
    };
    Dbd.prototype.items = function () {
        return this.factory.item.getAllModels();
    };
    Dbd.prototype.addon = function (key) {
        var addon = this.factory.survivorAddon.getModel(key);
        if (!addon.isEmpty) {
            return addon;
        }
        return this.factory.killerAddon.getModel(key);
    };
    Dbd.prototype.survivorAddons = function (key) {
        if (typeof key === "number") {
            return this.factory.survivorAddon.getModelsByType(key);
        }
        return this.factory.survivorAddon.getAllModels();
    };
    Dbd.prototype.killerAddons = function (key) {
        if (typeof key === "number") {
            return this.factory.killerAddon.getModelsByOwner(key);
        }
        return this.factory.killerAddon.getAllModels();
    };
    Dbd.prototype.offering = function (key) {
        var offering = this.factory.survivorOffering.getModel(key);
        if (offering) {
            return offering;
        }
        offering = this.factory.killerOffering.getModel(key);
        if (offering) {
            return offering;
        }
        return this.factory.sharedOffering.getModel(key);
    };
    Dbd.prototype.survivorOfferings = function () {
        var sharedOfferings = this.factory.sharedOffering.getAllModels();
        var survivorOfferings = this.factory.survivorOffering.getAllModels();
        return __assign(__assign({}, sharedOfferings), survivorOfferings);
    };
    Dbd.prototype.killerOfferings = function () {
        var sharedOfferings = this.factory.sharedOffering.getAllModels();
        var killerOfferings = this.factory.killerOffering.getAllModels();
        return __assign(__assign({}, sharedOfferings), killerOfferings);
    };
    Dbd.prototype.power = function (key) {
        return this.factory.power.getModel(key);
    };
    Dbd.prototype.powers = function () {
        return this.factory.power.getAllModels();
    };
    Dbd.prototype.perk = function (key) {
        var perk = this.factory.survivorPerk.getModel(key);
        if (perk) {
            return perk;
        }
        return this.factory.killerPerk.getModel(key);
    };
    Dbd.prototype.killerPerks = function (key) {
        if (typeof key === "string") {
            return this.factory.killerPerk.getModelsByOwner(key);
        }
        return this.factory.killerPerk.getAllModels();
    };
    Dbd.prototype.survivorPerks = function (key) {
        if (typeof key === "string") {
            return this.factory.survivorPerk.getModelsByOwner(key);
        }
        return this.factory.survivorPerk.getAllModels();
    };
    Dbd.prototype.survivor = function (key) {
        return this.factory.survivor.getModel(key);
    };
    Dbd.prototype.survivors = function () {
        return this.factory.survivor.getAllModels();
    };
    Dbd.prototype.killer = function (key) {
        return this.factory.killer.getModel(key);
    };
    Dbd.prototype.killers = function () {
        return this.factory.killer.getAllModels();
    };
    return Dbd;
}());
exports.default = Dbd;
//# sourceMappingURL=index.js.map