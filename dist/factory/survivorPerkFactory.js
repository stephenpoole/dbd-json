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
var perk_1 = __importDefault(require("./model/perk"));
var modelFactory_1 = __importDefault(require("./base/modelFactory"));
var enum_1 = require("../enum");
var SurvivorPerkFactory = /** @class */ (function (_super) {
    __extends(SurvivorPerkFactory, _super);
    function SurvivorPerkFactory(data, factories) {
        var _this = _super.call(this, factories, perk_1.default, data) || this;
        _this.byOwner = {};
        return _this;
    }
    SurvivorPerkFactory.prototype.getModelsByOwner = function (key) {
        var ownerExists = key === enum_1.Survivor.NoOne || this.factories.killer.exists(key);
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
    return SurvivorPerkFactory;
}(modelFactory_1.default));
exports.default = SurvivorPerkFactory;
//# sourceMappingURL=survivorPerkFactory.js.map