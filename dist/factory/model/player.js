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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modifier = enum_1.ModifierType.Player;
        return _this;
    }
    Object.defineProperty(Player.prototype, "id", {
        get: function () {
            return this.data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "index", {
        get: function () {
            return this.data.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "description", {
        get: function () {
            return this.data.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "image", {
        get: function () {
            return this.data.image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "perks", {
        get: function () {
            if (this._perks) {
                return this._perks;
            }
            return [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "power", {
        get: function () {
            if (this._power) {
                return this._power;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "player", {
        get: function () {
            var hasPower = typeof this.data.power === "string" && this.data.power.length > 0;
            if (hasPower) {
                return enum_1.Player.Killer;
            }
            return enum_1.Player.Survivor;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.initialize = function () {
        if (!this.isEmpty) {
            this.setPerks(this.data.perks);
            this.setPower(this.data.power);
            _super.prototype.initialize.call(this);
        }
    };
    Player.prototype.setPerks = function (perks) {
        var _this = this;
        var _a = this.factories, killerPerk = _a.killerPerk, survivorPerk = _a.survivorPerk;
        this._perks = perks.map(function (value) {
            return _this.player === enum_1.Player.Killer
                ? killerPerk.getModel(value)
                : survivorPerk.getModel(value);
        });
    };
    Player.prototype.setPower = function (power) {
        if (power) {
            var factory = this.factories.power;
            this._power = this.player === enum_1.Player.Killer ? factory.getModel(power) : undefined;
        }
    };
    return Player;
}(model_1.default));
exports.default = Player;
//# sourceMappingURL=player.js.map