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
var Perk = /** @class */ (function (_super) {
    __extends(Perk, _super);
    function Perk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modifier = enum_1.ModifierType.Perk;
        _this._tierIndex = 2;
        return _this;
    }
    Object.defineProperty(Perk.prototype, "id", {
        get: function () {
            return this.data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perk.prototype, "index", {
        get: function () {
            return this.data.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perk.prototype, "name", {
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perk.prototype, "image", {
        get: function () {
            return this.data.image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perk.prototype, "flavor", {
        get: function () {
            return this.data.flavor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perk.prototype, "owner", {
        get: function () {
            if (this._owner) {
                return this._owner;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perk.prototype, "player", {
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
    Object.defineProperty(Perk.prototype, "tier", {
        get: function () {
            return this._tierIndex + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perk.prototype, "rarity", {
        get: function () {
            return this.data.rarity[this._tierIndex];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perk.prototype, "description", {
        get: function () {
            var _this = this;
            return this.data.description
                .split(/\{[0-9]{1,2}\}/g)
                .reduce(function (prev, current, index, arr) {
                var isLastIndex = index === arr.length - 1;
                if (isLastIndex) {
                    return "" + prev + current;
                }
                return "" + prev + current + _this.data.tiers[_this._tierIndex][index];
            }, "");
        },
        enumerable: false,
        configurable: true
    });
    Perk.prototype.initialize = function () {
        if (!this.isEmpty) {
            this.setOwner(this.data.owner);
            _super.prototype.initialize.call(this);
        }
    };
    Perk.prototype.setTier = function (tier) {
        var index = tier - 1;
        var max = this.data.rarity.length - 1;
        if (index >= 0 && index <= max) {
            this._tierIndex = tier - 1;
        }
    };
    Perk.prototype.setOwner = function (owner) {
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
    return Perk;
}(model_1.default));
exports.default = Perk;
//# sourceMappingURL=perk.js.map