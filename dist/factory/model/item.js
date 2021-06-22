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
var model_1 = __importDefault(require("../base/model"));
var enum_1 = require("../../enum");
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modifier = enum_1.ModifierType.Item;
        return _this;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this.data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "index", {
        get: function () {
            return this.data.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "description", {
        get: function () {
            return this.data.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "image", {
        get: function () {
            return this.data.image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "rarity", {
        get: function () {
            return this.data.rarity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "flavor", {
        get: function () {
            return this.data.flavor;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}(model_1.default));
exports.default = Item;
//# sourceMappingURL=item.js.map