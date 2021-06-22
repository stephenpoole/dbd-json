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
var factory_1 = __importDefault(require("./factory"));
var ModelFactory = /** @class */ (function (_super) {
    __extends(ModelFactory, _super);
    function ModelFactory(factories, model, data) {
        var _this = _super.call(this, data) || this;
        _this.instances = [];
        _this.model = model;
        _this.factories = factories;
        return _this;
    }
    ModelFactory.prototype.getModel = function (key) {
        var data = _super.prototype.get.call(this, key);
        if (data) {
            var instance = this.instances.find(function (item) { return item.index === key; });
            if (!instance) {
                // eslint-disable-next-line new-cap
                instance = new this.model(this.factories, data);
                this.instances.push(instance);
                instance.initialize();
            }
            return instance;
        }
        // eslint-disable-next-line new-cap
        return new this.model(this.factories);
    };
    ModelFactory.prototype.getModels = function (keys) {
        var _this = this;
        return keys.map(function (key) { return _this.getModel(key); });
    };
    ModelFactory.prototype.getAllModels = function () {
        var _this = this;
        return this.data.map(function (item) { return _this.getModel(item.index); });
    };
    return ModelFactory;
}(factory_1.default));
exports.default = ModelFactory;
//# sourceMappingURL=modelFactory.js.map