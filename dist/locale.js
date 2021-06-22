"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum");
var Locales = __importStar(require("./locales"));
var Locale = /** @class */ (function () {
    function Locale(data) {
        this.changeLanguage(data);
    }
    Locale.prototype.changeLanguage = function (language) {
        var currentLanguage = this.data ? this.data.language : undefined;
        if (language === currentLanguage) {
            return;
        }
        var data = Locales.en;
        switch (language) {
            case enum_1.Language.Chinese:
                data = Locales.zh;
                break;
            case enum_1.Language.English:
                data = Locales.en;
                break;
            case enum_1.Language.French:
                data = Locales.fr;
                break;
            case enum_1.Language.German:
                data = Locales.de;
                break;
            case enum_1.Language.Italian:
                data = Locales.it;
                break;
            case enum_1.Language.Japanese:
                data = Locales.jp;
                break;
            case enum_1.Language.Korean:
                data = Locales.ko;
                break;
            case enum_1.Language.Polish:
                data = Locales.pl;
                break;
            case enum_1.Language.Russian:
                data = Locales.ru;
                break;
            case enum_1.Language.Spanish:
                data = Locales.es;
                break;
            case enum_1.Language.Taiwanese:
                data = Locales.th;
                break;
            case enum_1.Language.Turkish:
                data = Locales.tr;
                break;
            default:
            // noop
        }
        this.data = data;
    };
    Object.defineProperty(Locale.prototype, "language", {
        get: function () {
            return this.data.language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "items", {
        get: function () {
            return this.data.items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "killerAddons", {
        get: function () {
            return this.data.killerAddons;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "killerOfferings", {
        get: function () {
            return this.data.killerOfferings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "killerPerks", {
        get: function () {
            return this.data.killerPerks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "killers", {
        get: function () {
            return this.data.killers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "powers", {
        get: function () {
            return this.data.powers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "sharedOfferings", {
        get: function () {
            return this.data.sharedOfferings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "survivorAddons", {
        get: function () {
            return this.data.survivorAddons;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "survivorPerks", {
        get: function () {
            return this.data.survivorPerks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "survivors", {
        get: function () {
            return this.data.survivors;
        },
        enumerable: false,
        configurable: true
    });
    return Locale;
}());
exports.default = Locale;
//# sourceMappingURL=locale.js.map