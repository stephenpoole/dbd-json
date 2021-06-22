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
var SurvivorAddonFactory = /** @class */ (function (_super) {
    __extends(SurvivorAddonFactory, _super);
    function SurvivorAddonFactory(data, factories) {
        var _this = _super.call(this, factories, addon_1.default, data) || this;
        _this.byType = {};
        return _this;
    }
    SurvivorAddonFactory.prototype.getModelsByType = function (key) {
        var itemExists = this.factories.item.typeExists(key);
        if (itemExists) {
            if (!(key in this.byType)) {
                var addons = this.data
                    .filter(function (addon) { return addon.type === key; })
                    .map(function (addon) { return addon.index; });
                this.byType[key] = this.getModels(addons);
            }
            return this.byType[key];
        }
        return [];
    };
    return SurvivorAddonFactory;
}(modelFactory_1.default));
exports.default = SurvivorAddonFactory;
//# sourceMappingURL=survivorAddonFactory.js.map