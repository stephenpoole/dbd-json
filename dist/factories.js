"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var itemFactory_1 = __importDefault(require("./factory/itemFactory"));
var killerAddonFactory_1 = __importDefault(require("./factory/killerAddonFactory"));
var killerFactory_1 = __importDefault(require("./factory/killerFactory"));
var killerOfferingFactory_1 = __importDefault(require("./factory/killerOfferingFactory"));
var killerPerkFactory_1 = __importDefault(require("./factory/killerPerkFactory"));
var powerFactory_1 = __importDefault(require("./factory/powerFactory"));
var sharedOfferingFactory_1 = __importDefault(require("./factory/sharedOfferingFactory"));
var survivorAddonFactory_1 = __importDefault(require("./factory/survivorAddonFactory"));
var survivorFactory_1 = __importDefault(require("./factory/survivorFactory"));
var survivorOfferingFactory_1 = __importDefault(require("./factory/survivorOfferingFactory"));
var survivorPerkFactory_1 = __importDefault(require("./factory/survivorPerkFactory"));
var Factories = /** @class */ (function () {
    function Factories(locale) {
        this.setLocale(locale);
    }
    Factories.prototype.setLocale = function (locale) {
        var language = this.locale ? this.locale.language : undefined;
        if (locale.language !== language) {
            this.item = new itemFactory_1.default(locale.data.items, this);
            this.killerAddon = new killerAddonFactory_1.default(locale.data.killerAddons, this);
            this.killer = new killerFactory_1.default(locale.data.killers, this);
            this.killerOffering = new killerOfferingFactory_1.default(locale.data.killerOfferings, this);
            this.killerPerk = new killerPerkFactory_1.default(locale.data.killerPerks, this);
            this.power = new powerFactory_1.default(locale.data.powers, this);
            this.sharedOffering = new sharedOfferingFactory_1.default(locale.data.sharedOfferings, this);
            this.survivorAddon = new survivorAddonFactory_1.default(locale.data.survivorAddons, this);
            this.survivor = new survivorFactory_1.default(locale.data.survivors, this);
            this.survivorOffering = new survivorOfferingFactory_1.default(locale.data.survivorOfferings, this);
            this.survivorPerk = new survivorPerkFactory_1.default(locale.data.survivorPerks, this);
        }
    };
    return Factories;
}());
exports.default = Factories;
//# sourceMappingURL=factories.js.map