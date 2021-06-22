"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var addon_1 = __importDefault(require("./model/addon"));
var modelFactory_1 = __importDefault(require("./base/modelFactory"));
var KillerAddonFactory = /** @class */ (function (_super) {
    __extends(KillerAddonFactory, _super);
    function KillerAddonFactory(data, factories) {
        var _this = _super.call(this, factories, addon_1.default, data) || this;
        _this.byOwner = {};
        _this.byRarity = {};
        return _this;
    }
    KillerAddonFactory.prototype.getModelsByOwner = function (key) {
        var ownerExists = this.factories.killer.exists(key);
        if (ownerExists) {
            if (!(key in this.byOwner)) {
                var addons = this.data
                    .filter(function (addon) { return addon.owner === key; })
                    .map(function (addon) { return addon.index; });
                this.byOwner[key] = this.getModels(addons);
            }
            return this.byOwner[key];
        }
        return [];
    };
    KillerAddonFactory.prototype.getModelsByRarity = function (key) {
        if (!(key in this.byRarity)) {
            var addons = this.data
                .filter(function (addon) { return addon.rarity === key; })
                .map(function (addon) { return addon.index; });
            this.byRarity[key] = this.getModels(addons);
        }
        return this.byRarity[key];
    };
    return KillerAddonFactory;
}(modelFactory_1.default));
exports.default = KillerAddonFactory;
//# sourceMappingURL=killerAddonFactory.js.map