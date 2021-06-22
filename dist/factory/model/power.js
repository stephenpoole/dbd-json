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
var Power = /** @class */ (function (_super) {
    __extends(Power, _super);
    function Power() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modifier = enum_1.ModifierType.Power;
        return _this;
    }
    Object.defineProperty(Power.prototype, "id", {
        get: function () {
            return this.data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Power.prototype, "index", {
        get: function () {
            return this.data.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Power.prototype, "name", {
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Power.prototype, "description", {
        get: function () {
            return this.data.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Power.prototype, "image", {
        get: function () {
            return this.data.image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Power.prototype, "flavor", {
        get: function () {
            return this.data.flavor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Power.prototype, "owner", {
        get: function () {
            if (this._owner) {
                return this._owner;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Power.prototype, "player", {
        get: function () {
            return enum_1.Player.Killer;
        },
        enumerable: false,
        configurable: true
    });
    Power.prototype.initialize = function () {
        if (!this.isEmpty) {
            this.setOwner(this.data.owner);
            _super.prototype.initialize.call(this);
        }
    };
    Power.prototype.setOwner = function (owner) {
        if (owner) {
            this._owner = this.factories.killer.getModel(owner);
        }
    };
    return Power;
}(model_1.default));
exports.default = Power;
//# sourceMappingURL=power.js.map