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
var enum_1 = require("../../enum");
var model_1 = __importDefault(require("../base/model"));
var Addon = /** @class */ (function (_super) {
    __extends(Addon, _super);
    function Addon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modifier = enum_1.ModifierType.Addon;
        return _this;
    }
    Object.defineProperty(Addon.prototype, "id", {
        get: function () {
            return this.data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addon.prototype, "index", {
        get: function () {
            return this.data.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addon.prototype, "name", {
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addon.prototype, "description", {
        get: function () {
            return this.data.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addon.prototype, "image", {
        get: function () {
            return this.data.image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addon.prototype, "rarity", {
        get: function () {
            return this.data.rarity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addon.prototype, "type", {
        get: function () {
            return typeof this.data.type !== "undefined" ? this.data.type : enum_1.ItemType.Empty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addon.prototype, "owner", {
        get: function () {
            if (this._owner) {
                return this._owner;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addon.prototype, "player", {
        get: function () {
            if (this._owner) {
                var power = this._owner.data.power;
                var hasPower = power === "string" && power.length > 0;
                if (hasPower) {
                    return enum_1.Player.Killer;
                }
                return enum_1.Player.Survivor;
            }
            return enum_1.Player.None;
        },
        enumerable: false,
        configurable: true
    });
    Addon.prototype.initialize = function () {
        if (!this.isEmpty) {
            this.setOwner(this.data.owner);
            _super.prototype.initialize.call(this);
        }
    };
    Addon.prototype.setOwner = function (owner) {
        if (owner) {
            var _a = this.factories, killer = _a.killer, survivor = _a.survivor;
            var isKiller = killer.exists(owner);
            if (isKiller) {
                this._owner = killer.getModel(owner);
            }
            else {
                this._owner = survivor.getModel(owner);
            }
        }
    };
    return Addon;
}(model_1.default));
exports.default = Addon;
//# sourceMappingURL=addon.js.map