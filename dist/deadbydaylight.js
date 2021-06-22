(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DeadByDaylight", [], factory);
	else if(typeof exports === 'object')
		exports["DeadByDaylight"] = factory();
	else
		root["DeadByDaylight"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./src/enum.ts":
/*!*********************!*\
  !*** ./src/enum.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Survivor = exports.Killer = exports.Language = exports.ModifierType = exports.ItemType = exports.Difficulty = exports.Rarity = exports.Player = exports.Amounts = void 0;
var Amounts;
(function (Amounts) {
    Amounts[Amounts["Slightly"] = 0] = "Slightly";
    Amounts[Amounts["Moderately"] = 1] = "Moderately";
    Amounts[Amounts["Considerably"] = 2] = "Considerably";
    Amounts[Amounts["Tremendously"] = 3] = "Tremendously";
})(Amounts || (Amounts = {}));
exports.Amounts = Amounts;
var Player;
(function (Player) {
    Player[Player["Survivor"] = 0] = "Survivor";
    Player[Player["Killer"] = 1] = "Killer";
    Player[Player["None"] = 2] = "None";
})(Player || (Player = {}));
exports.Player = Player;
var Rarity;
(function (Rarity) {
    Rarity[Rarity["Common"] = 0] = "Common";
    Rarity[Rarity["Uncommon"] = 1] = "Uncommon";
    Rarity[Rarity["Rare"] = 2] = "Rare";
    Rarity[Rarity["VeryRare"] = 3] = "VeryRare";
    Rarity[Rarity["UltraRare"] = 4] = "UltraRare";
    Rarity[Rarity["Event"] = 5] = "Event";
})(Rarity || (Rarity = {}));
exports.Rarity = Rarity;
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 0] = "Easy";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Hard"] = 2] = "Hard";
})(Difficulty || (Difficulty = {}));
exports.Difficulty = Difficulty;
var ItemType;
(function (ItemType) {
    ItemType[ItemType["Empty"] = 0] = "Empty";
    ItemType[ItemType["Flashlight"] = 1] = "Flashlight";
    ItemType[ItemType["Key"] = 2] = "Key";
    ItemType[ItemType["Map"] = 3] = "Map";
    ItemType[ItemType["AidKit"] = 4] = "AidKit";
    ItemType[ItemType["Toolbox"] = 5] = "Toolbox";
    ItemType[ItemType["Firecracker"] = 6] = "Firecracker";
})(ItemType || (ItemType = {}));
exports.ItemType = ItemType;
var ModifierType;
(function (ModifierType) {
    ModifierType[ModifierType["None"] = 0] = "None";
    ModifierType[ModifierType["Power"] = 1] = "Power";
    ModifierType[ModifierType["Item"] = 2] = "Item";
    ModifierType[ModifierType["Addon"] = 3] = "Addon";
    ModifierType[ModifierType["Offering"] = 4] = "Offering";
    ModifierType[ModifierType["Perk"] = 5] = "Perk";
    ModifierType[ModifierType["Player"] = 6] = "Player";
    ModifierType[ModifierType["PlayerType"] = 7] = "PlayerType";
})(ModifierType || (ModifierType = {}));
exports.ModifierType = ModifierType;
var Language;
(function (Language) {
    Language["English"] = "en";
    Language["Spanish"] = "es";
    Language["German"] = "de";
    Language["French"] = "fr";
    Language["Italian"] = "it";
    Language["Japanese"] = "jp";
    Language["Korean"] = "ko";
    Language["Polish"] = "pl";
    Language["Russian"] = "ru";
    Language["Taiwanese"] = "th";
    Language["Turkish"] = "tr";
    Language["Chinese"] = "zh";
})(Language || (Language = {}));
exports.Language = Language;
var Killer;
(function (Killer) {
    Killer["NoOne"] = "NOONE";
    Killer["Trapper"] = "TRAPPER";
    Killer["Wraith"] = "WRAITH";
    Killer["Hillbilly"] = "HILLBILLY";
    Killer["Nurse"] = "NURSE";
    Killer["Huntress"] = "HUNTRESS";
    Killer["Shape"] = "SHAPE";
    Killer["Hag"] = "HAG";
    Killer["Cannibal"] = "CANNIBAL";
    Killer["Doctor"] = "DOCTOR";
    Killer["Nightmare"] = "NIGHTMARE";
    Killer["Pig"] = "PIG";
    Killer["Clown"] = "CLOWN";
    Killer["Spirit"] = "SPIRIT";
    Killer["Legion"] = "LEGION";
    Killer["Plague"] = "PLAGUE";
    Killer["Ghost"] = "GHOST";
    Killer["Demogorgon"] = "DEMOGORGON";
    Killer["Oni"] = "ONI";
    Killer["Deathslinger"] = "DEATHSLINGER";
    Killer["Executioner"] = "EXECUTIONER";
    Killer["Blight"] = "BLIGHT";
    Killer["Twins"] = "TWINS";
    Killer["Trickster"] = "TRICKSTER";
    Killer["Nemesis"] = "NEMESIS";
})(Killer || (Killer = {}));
exports.Killer = Killer;
var Survivor;
(function (Survivor) {
    Survivor["NoOne"] = "NOONE";
    Survivor["Dwight"] = "DWIGHT_FAIRFIELD";
    Survivor["Meg"] = "MEG_THOMAS";
    Survivor["Claudette"] = "CLAUDETTE_MOREL";
    Survivor["Jake"] = "JAKE_PARK";
    Survivor["Nea"] = "NEA_KARLSSON";
    Survivor["Bill"] = "WILLIAM_OVERBECK";
    Survivor["David"] = "DAVID_KING";
    Survivor["Laurie"] = "LAURIE_STRODE";
    Survivor["Ace"] = "ACE_VISCONTI";
    Survivor["Feng"] = "FENG_MIN";
    Survivor["Quentin"] = "QUENTIN_SMITH";
    Survivor["Tapp"] = "DAVID_TAPP";
    Survivor["Kate"] = "KATE_DENSON";
    Survivor["Adam"] = "ADAM_FRANCIS";
    Survivor["Jeff"] = "JEFF_JOHANSEN";
    Survivor["Jane"] = "JANE_ROMERO";
    Survivor["Ash"] = "ASHLEY_J_WILLIAMS";
    Survivor["Nancy"] = "NANCY_WHEELER";
    Survivor["Steve"] = "STEVE_HARRINGTON";
    Survivor["Yui"] = "YUI_KIMURA";
    Survivor["Zarina"] = "ZARINA_KASSIR";
    Survivor["Cheryl"] = "CHERYL_MASON";
    Survivor["Felix"] = "FELIX_RICHTER";
    Survivor["Elodie"] = "ELODIE_RAKOTO";
    Survivor["YunJin"] = "YUN_JIN_LEE";
    Survivor["Jill"] = "JILL_VALENTINE";
    Survivor["Leon"] = "LEON_SCOTT_KENNEDY";
})(Survivor || (Survivor = {}));
exports.Survivor = Survivor;


/***/ }),

/***/ "./src/factories.ts":
/*!**************************!*\
  !*** ./src/factories.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var itemFactory_1 = __importDefault(__webpack_require__(/*! ./factory/itemFactory */ "./src/factory/itemFactory.ts"));
var killerAddonFactory_1 = __importDefault(__webpack_require__(/*! ./factory/killerAddonFactory */ "./src/factory/killerAddonFactory.ts"));
var killerFactory_1 = __importDefault(__webpack_require__(/*! ./factory/killerFactory */ "./src/factory/killerFactory.ts"));
var killerOfferingFactory_1 = __importDefault(__webpack_require__(/*! ./factory/killerOfferingFactory */ "./src/factory/killerOfferingFactory.ts"));
var killerPerkFactory_1 = __importDefault(__webpack_require__(/*! ./factory/killerPerkFactory */ "./src/factory/killerPerkFactory.ts"));
var powerFactory_1 = __importDefault(__webpack_require__(/*! ./factory/powerFactory */ "./src/factory/powerFactory.ts"));
var sharedOfferingFactory_1 = __importDefault(__webpack_require__(/*! ./factory/sharedOfferingFactory */ "./src/factory/sharedOfferingFactory.ts"));
var survivorAddonFactory_1 = __importDefault(__webpack_require__(/*! ./factory/survivorAddonFactory */ "./src/factory/survivorAddonFactory.ts"));
var survivorFactory_1 = __importDefault(__webpack_require__(/*! ./factory/survivorFactory */ "./src/factory/survivorFactory.ts"));
var survivorOfferingFactory_1 = __importDefault(__webpack_require__(/*! ./factory/survivorOfferingFactory */ "./src/factory/survivorOfferingFactory.ts"));
var survivorPerkFactory_1 = __importDefault(__webpack_require__(/*! ./factory/survivorPerkFactory */ "./src/factory/survivorPerkFactory.ts"));
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


/***/ }),

/***/ "./src/factory/base/factory.ts":
/*!*************************************!*\
  !*** ./src/factory/base/factory.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Factory = /** @class */ (function () {
    function Factory(data) {
        this.data = data;
    }
    Factory.prototype.get = function (key) {
        var item = this.data.find(function (value) { return value.index === key; });
        return item;
    };
    Factory.prototype.exists = function (key) {
        return !!this.get(key);
    };
    return Factory;
}());
exports.default = Factory;


/***/ }),

/***/ "./src/factory/base/model.ts":
/*!***********************************!*\
  !*** ./src/factory/base/model.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Model = /** @class */ (function () {
    function Model(factories, data) {
        this.initialized = false;
        this.frozen = false;
        if (data) {
            this.data = data;
        }
        else {
            this.data = {
                id: -1,
                index: "",
                name: "",
                description: "",
                image: "",
            };
        }
        this.factories = factories;
    }
    Model.prototype.initialize = function () {
        this.initialized = true;
    };
    Model.prototype.freeze = function () {
        this.frozen = true;
    };
    Object.defineProperty(Model.prototype, "index", {
        get: function () {
            return this.data.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "isEmpty", {
        get: function () {
            return !("index" in this.data && !!this.data.index && this.data.index.length > 0);
        },
        enumerable: false,
        configurable: true
    });
    return Model;
}());
exports.default = Model;


/***/ }),

/***/ "./src/factory/base/modelFactory.ts":
/*!******************************************!*\
  !*** ./src/factory/base/modelFactory.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var factory_1 = __importDefault(__webpack_require__(/*! ./factory */ "./src/factory/base/factory.ts"));
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


/***/ }),

/***/ "./src/factory/itemFactory.ts":
/*!************************************!*\
  !*** ./src/factory/itemFactory.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var item_1 = __importDefault(__webpack_require__(/*! ./model/item */ "./src/factory/model/item.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
var ItemFactory = /** @class */ (function (_super) {
    __extends(ItemFactory, _super);
    function ItemFactory(data, factories) {
        return _super.call(this, factories, item_1.default, data) || this;
    }
    ItemFactory.prototype.typeExists = function (key) {
        return !!this.data.find(function (item) { return item.type === key; });
    };
    return ItemFactory;
}(modelFactory_1.default));
exports.default = ItemFactory;


/***/ }),

/***/ "./src/factory/killerAddonFactory.ts":
/*!*******************************************!*\
  !*** ./src/factory/killerAddonFactory.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var addon_1 = __importDefault(__webpack_require__(/*! ./model/addon */ "./src/factory/model/addon.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
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


/***/ }),

/***/ "./src/factory/killerFactory.ts":
/*!**************************************!*\
  !*** ./src/factory/killerFactory.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var player_1 = __importDefault(__webpack_require__(/*! ./model/player */ "./src/factory/model/player.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
var KillerFactory = /** @class */ (function (_super) {
    __extends(KillerFactory, _super);
    function KillerFactory(data, factories) {
        return _super.call(this, factories, player_1.default, data) || this;
    }
    return KillerFactory;
}(modelFactory_1.default));
exports.default = KillerFactory;


/***/ }),

/***/ "./src/factory/killerOfferingFactory.ts":
/*!**********************************************!*\
  !*** ./src/factory/killerOfferingFactory.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var offering_1 = __importDefault(__webpack_require__(/*! ./model/offering */ "./src/factory/model/offering.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
var KillerOfferingFactory = /** @class */ (function (_super) {
    __extends(KillerOfferingFactory, _super);
    function KillerOfferingFactory(data, factories) {
        return _super.call(this, factories, offering_1.default, data) || this;
    }
    return KillerOfferingFactory;
}(modelFactory_1.default));
exports.default = KillerOfferingFactory;


/***/ }),

/***/ "./src/factory/killerPerkFactory.ts":
/*!******************************************!*\
  !*** ./src/factory/killerPerkFactory.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var perk_1 = __importDefault(__webpack_require__(/*! ./model/perk */ "./src/factory/model/perk.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
var enum_1 = __webpack_require__(/*! ../enum */ "./src/enum.ts");
var KillerPerkFactory = /** @class */ (function (_super) {
    __extends(KillerPerkFactory, _super);
    function KillerPerkFactory(data, factories) {
        var _this = _super.call(this, factories, perk_1.default, data) || this;
        _this.byOwner = {};
        return _this;
    }
    KillerPerkFactory.prototype.getModelsByOwner = function (key) {
        var ownerExists = key === enum_1.Killer.NoOne || this.factories.killer.exists(key);
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
    return KillerPerkFactory;
}(modelFactory_1.default));
exports.default = KillerPerkFactory;


/***/ }),

/***/ "./src/factory/model/addon.ts":
/*!************************************!*\
  !*** ./src/factory/model/addon.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var enum_1 = __webpack_require__(/*! ../../enum */ "./src/enum.ts");
var model_1 = __importDefault(__webpack_require__(/*! ../base/model */ "./src/factory/base/model.ts"));
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
    Object.defineProperty(Addon.prototype, "flavor", {
        get: function () {
            var _a;
            return (_a = this.data) === null || _a === void 0 ? void 0 : _a.flavor;
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
                var hasPower = typeof power === "string" && power.length > 0;
                if (hasPower) {
                    return enum_1.Player.Killer;
                }
            }
            return enum_1.Player.Survivor;
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


/***/ }),

/***/ "./src/factory/model/index.ts":
/*!************************************!*\
  !*** ./src/factory/model/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Addon = exports.Power = exports.Player = exports.Perk = exports.Offering = exports.Item = void 0;
var item_1 = __importDefault(__webpack_require__(/*! ./item */ "./src/factory/model/item.ts"));
exports.Item = item_1.default;
var offering_1 = __importDefault(__webpack_require__(/*! ./offering */ "./src/factory/model/offering.ts"));
exports.Offering = offering_1.default;
var perk_1 = __importDefault(__webpack_require__(/*! ./perk */ "./src/factory/model/perk.ts"));
exports.Perk = perk_1.default;
var player_1 = __importDefault(__webpack_require__(/*! ./player */ "./src/factory/model/player.ts"));
exports.Player = player_1.default;
var power_1 = __importDefault(__webpack_require__(/*! ./power */ "./src/factory/model/power.ts"));
exports.Power = power_1.default;
var addon_1 = __importDefault(__webpack_require__(/*! ./addon */ "./src/factory/model/addon.ts"));
exports.Addon = addon_1.default;


/***/ }),

/***/ "./src/factory/model/item.ts":
/*!***********************************!*\
  !*** ./src/factory/model/item.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var model_1 = __importDefault(__webpack_require__(/*! ../base/model */ "./src/factory/base/model.ts"));
var enum_1 = __webpack_require__(/*! ../../enum */ "./src/enum.ts");
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
    Object.defineProperty(Item.prototype, "type", {
        get: function () {
            return this.data.type;
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


/***/ }),

/***/ "./src/factory/model/offering.ts":
/*!***************************************!*\
  !*** ./src/factory/model/offering.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var model_1 = __importDefault(__webpack_require__(/*! ../base/model */ "./src/factory/base/model.ts"));
var enum_1 = __webpack_require__(/*! ../../enum */ "./src/enum.ts");
var Offering = /** @class */ (function (_super) {
    __extends(Offering, _super);
    function Offering() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modifier = enum_1.ModifierType.Offering;
        return _this;
    }
    Object.defineProperty(Offering.prototype, "id", {
        get: function () {
            return this.data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Offering.prototype, "index", {
        get: function () {
            return this.data.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Offering.prototype, "name", {
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Offering.prototype, "description", {
        get: function () {
            return this.data.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Offering.prototype, "image", {
        get: function () {
            return this.data.image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Offering.prototype, "rarity", {
        get: function () {
            return this.data.rarity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Offering.prototype, "flavor", {
        get: function () {
            return this.data.flavor;
        },
        enumerable: false,
        configurable: true
    });
    return Offering;
}(model_1.default));
exports.default = Offering;


/***/ }),

/***/ "./src/factory/model/perk.ts":
/*!***********************************!*\
  !*** ./src/factory/model/perk.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var model_1 = __importDefault(__webpack_require__(/*! ../base/model */ "./src/factory/base/model.ts"));
var enum_1 = __webpack_require__(/*! ../../enum */ "./src/enum.ts");
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
            var isKiller = this.factories.killer.exists(this.index);
            if (isKiller) {
                return enum_1.Player.Killer;
            }
            return enum_1.Player.Survivor;
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


/***/ }),

/***/ "./src/factory/model/player.ts":
/*!*************************************!*\
  !*** ./src/factory/model/player.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var model_1 = __importDefault(__webpack_require__(/*! ../base/model */ "./src/factory/base/model.ts"));
var enum_1 = __webpack_require__(/*! ../../enum */ "./src/enum.ts");
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
    Object.defineProperty(Player.prototype, "difficulty", {
        get: function () {
            return this.data.difficulty;
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


/***/ }),

/***/ "./src/factory/model/power.ts":
/*!************************************!*\
  !*** ./src/factory/model/power.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var model_1 = __importDefault(__webpack_require__(/*! ../base/model */ "./src/factory/base/model.ts"));
var enum_1 = __webpack_require__(/*! ../../enum */ "./src/enum.ts");
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


/***/ }),

/***/ "./src/factory/powerFactory.ts":
/*!*************************************!*\
  !*** ./src/factory/powerFactory.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var power_1 = __importDefault(__webpack_require__(/*! ./model/power */ "./src/factory/model/power.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
var PowerFactory = /** @class */ (function (_super) {
    __extends(PowerFactory, _super);
    function PowerFactory(data, factories) {
        return _super.call(this, factories, power_1.default, data) || this;
    }
    return PowerFactory;
}(modelFactory_1.default));
exports.default = PowerFactory;


/***/ }),

/***/ "./src/factory/sharedOfferingFactory.ts":
/*!**********************************************!*\
  !*** ./src/factory/sharedOfferingFactory.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var offering_1 = __importDefault(__webpack_require__(/*! ./model/offering */ "./src/factory/model/offering.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
var SharedOfferingFactory = /** @class */ (function (_super) {
    __extends(SharedOfferingFactory, _super);
    function SharedOfferingFactory(data, factories) {
        return _super.call(this, factories, offering_1.default, data) || this;
    }
    return SharedOfferingFactory;
}(modelFactory_1.default));
exports.default = SharedOfferingFactory;


/***/ }),

/***/ "./src/factory/survivorAddonFactory.ts":
/*!*********************************************!*\
  !*** ./src/factory/survivorAddonFactory.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var addon_1 = __importDefault(__webpack_require__(/*! ./model/addon */ "./src/factory/model/addon.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
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


/***/ }),

/***/ "./src/factory/survivorFactory.ts":
/*!****************************************!*\
  !*** ./src/factory/survivorFactory.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var player_1 = __importDefault(__webpack_require__(/*! ./model/player */ "./src/factory/model/player.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
var SurvivorFactory = /** @class */ (function (_super) {
    __extends(SurvivorFactory, _super);
    function SurvivorFactory(data, factories) {
        return _super.call(this, factories, player_1.default, data) || this;
    }
    return SurvivorFactory;
}(modelFactory_1.default));
exports.default = SurvivorFactory;


/***/ }),

/***/ "./src/factory/survivorOfferingFactory.ts":
/*!************************************************!*\
  !*** ./src/factory/survivorOfferingFactory.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var offering_1 = __importDefault(__webpack_require__(/*! ./model/offering */ "./src/factory/model/offering.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
var SurvivorOfferingFactory = /** @class */ (function (_super) {
    __extends(SurvivorOfferingFactory, _super);
    function SurvivorOfferingFactory(data, factories) {
        return _super.call(this, factories, offering_1.default, data) || this;
    }
    return SurvivorOfferingFactory;
}(modelFactory_1.default));
exports.default = SurvivorOfferingFactory;


/***/ }),

/***/ "./src/factory/survivorPerkFactory.ts":
/*!********************************************!*\
  !*** ./src/factory/survivorPerkFactory.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var perk_1 = __importDefault(__webpack_require__(/*! ./model/perk */ "./src/factory/model/perk.ts"));
var modelFactory_1 = __importDefault(__webpack_require__(/*! ./base/modelFactory */ "./src/factory/base/modelFactory.ts"));
var enum_1 = __webpack_require__(/*! ../enum */ "./src/enum.ts");
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


/***/ }),

/***/ "./src/index.browser.ts":
/*!******************************!*\
  !*** ./src/index.browser.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PowerModel = exports.PlayerModel = exports.PerkModel = exports.OfferingModel = exports.ItemModel = exports.AddonModel = exports.Survivor = exports.Killer = exports.Language = exports.ModifierType = exports.ItemType = exports.Difficulty = exports.Rarity = exports.Amounts = exports.PlayerType = exports.Client = void 0;
var enum_1 = __webpack_require__(/*! ./enum */ "./src/enum.ts");
Object.defineProperty(exports, "Amounts", ({ enumerable: true, get: function () { return enum_1.Amounts; } }));
Object.defineProperty(exports, "PlayerType", ({ enumerable: true, get: function () { return enum_1.Player; } }));
Object.defineProperty(exports, "Rarity", ({ enumerable: true, get: function () { return enum_1.Rarity; } }));
Object.defineProperty(exports, "Difficulty", ({ enumerable: true, get: function () { return enum_1.Difficulty; } }));
Object.defineProperty(exports, "ItemType", ({ enumerable: true, get: function () { return enum_1.ItemType; } }));
Object.defineProperty(exports, "ModifierType", ({ enumerable: true, get: function () { return enum_1.ModifierType; } }));
Object.defineProperty(exports, "Language", ({ enumerable: true, get: function () { return enum_1.Language; } }));
Object.defineProperty(exports, "Killer", ({ enumerable: true, get: function () { return enum_1.Killer; } }));
Object.defineProperty(exports, "Survivor", ({ enumerable: true, get: function () { return enum_1.Survivor; } }));
var factories_1 = __importDefault(__webpack_require__(/*! ./factories */ "./src/factories.ts"));
var model_1 = __webpack_require__(/*! ./factory/model */ "./src/factory/model/index.ts");
Object.defineProperty(exports, "AddonModel", ({ enumerable: true, get: function () { return model_1.Addon; } }));
Object.defineProperty(exports, "ItemModel", ({ enumerable: true, get: function () { return model_1.Item; } }));
Object.defineProperty(exports, "OfferingModel", ({ enumerable: true, get: function () { return model_1.Offering; } }));
Object.defineProperty(exports, "PerkModel", ({ enumerable: true, get: function () { return model_1.Perk; } }));
Object.defineProperty(exports, "PlayerModel", ({ enumerable: true, get: function () { return model_1.Player; } }));
Object.defineProperty(exports, "PowerModel", ({ enumerable: true, get: function () { return model_1.Power; } }));
var locale_browser_1 = __importDefault(__webpack_require__(/*! ./locale.browser */ "./src/locale.browser.ts"));
var Dbd = /** @class */ (function () {
    function Dbd() {
    }
    Dbd.prototype.setLanguage = function (language) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.locale = new locale_browser_1.default();
                        return [4 /*yield*/, this.locale.changeLanguage(language)];
                    case 1:
                        _a.sent();
                        this.factory = new factories_1.default(this.locale);
                        return [2 /*return*/];
                }
            });
        });
    };
    Dbd.prototype.item = function (key) {
        return this.factory.item.getModel(key);
    };
    Dbd.prototype.items = function () {
        return this.factory.item.getAllModels();
    };
    Dbd.prototype.addon = function (key) {
        var addon = this.factory.survivorAddon.getModel(key);
        if (!addon.isEmpty) {
            return addon;
        }
        return this.factory.killerAddon.getModel(key);
    };
    Dbd.prototype.survivorAddons = function (key) {
        if (typeof key === "number") {
            return this.factory.survivorAddon.getModelsByType(key);
        }
        return this.factory.survivorAddon.getAllModels();
    };
    Dbd.prototype.killerAddons = function (key) {
        if (typeof key === "number") {
            return this.factory.killerAddon.getModelsByOwner(key);
        }
        return this.factory.killerAddon.getAllModels();
    };
    Dbd.prototype.offering = function (key) {
        var offering = this.factory.survivorOffering.getModel(key);
        if (offering) {
            return offering;
        }
        offering = this.factory.killerOffering.getModel(key);
        if (offering) {
            return offering;
        }
        return this.factory.sharedOffering.getModel(key);
    };
    Dbd.prototype.survivorOfferings = function () {
        var sharedOfferings = this.factory.sharedOffering.getAllModels();
        var survivorOfferings = this.factory.survivorOffering.getAllModels();
        return __assign(__assign({}, sharedOfferings), survivorOfferings);
    };
    Dbd.prototype.killerOfferings = function () {
        var sharedOfferings = this.factory.sharedOffering.getAllModels();
        var killerOfferings = this.factory.killerOffering.getAllModels();
        return __assign(__assign({}, sharedOfferings), killerOfferings);
    };
    Dbd.prototype.power = function (key) {
        return this.factory.power.getModel(key);
    };
    Dbd.prototype.powers = function () {
        return this.factory.power.getAllModels();
    };
    Dbd.prototype.perk = function (key) {
        var perk = this.factory.survivorPerk.getModel(key);
        if (perk) {
            return perk;
        }
        return this.factory.killerPerk.getModel(key);
    };
    Dbd.prototype.killerPerks = function (key) {
        if (typeof key === "string") {
            return this.factory.killerPerk.getModelsByOwner(key);
        }
        return this.factory.killerPerk.getAllModels();
    };
    Dbd.prototype.survivorPerks = function (key) {
        if (typeof key === "string") {
            return this.factory.survivorPerk.getModelsByOwner(key);
        }
        return this.factory.survivorPerk.getAllModels();
    };
    Dbd.prototype.survivor = function (key) {
        return this.factory.survivor.getModel(key);
    };
    Dbd.prototype.survivors = function () {
        return this.factory.survivor.getAllModels();
    };
    Dbd.prototype.killer = function (key) {
        return this.factory.killer.getModel(key);
    };
    Dbd.prototype.killers = function () {
        return this.factory.killer.getAllModels();
    };
    return Dbd;
}());
var Client = Dbd;
exports.Client = Client;


/***/ }),

/***/ "./src/locale.browser.ts":
/*!*******************************!*\
  !*** ./src/locale.browser.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var resolver_1 = __importDefault(__webpack_require__(/*! ./resolver */ "./src/resolver.ts"));
var Locale = /** @class */ (function () {
    function Locale() {
        this.resolver = new resolver_1.default();
    }
    Locale.prototype.changeLanguage = function (language) {
        return __awaiter(this, void 0, void 0, function () {
            var currentLanguage, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentLanguage = this.data ? this.data.language : undefined;
                        if (language === currentLanguage) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.resolver.get(language)];
                    case 1:
                        data = _a.sent();
                        this.data = data;
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Locale.prototype, "language", {
        get: function () {
            return this.data.language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "items", {
        get: function () {
            return this.data.items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "killerAddons", {
        get: function () {
            return this.data.killerAddons;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "killerOfferings", {
        get: function () {
            return this.data.killerOfferings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "killerPerks", {
        get: function () {
            return this.data.killerPerks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "killers", {
        get: function () {
            return this.data.killers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "powers", {
        get: function () {
            return this.data.powers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "sharedOfferings", {
        get: function () {
            return this.data.sharedOfferings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "survivorAddons", {
        get: function () {
            return this.data.survivorAddons;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "survivorPerks", {
        get: function () {
            return this.data.survivorPerks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "survivors", {
        get: function () {
            return this.data.survivors;
        },
        enumerable: false,
        configurable: true
    });
    return Locale;
}());
exports.default = Locale;


/***/ }),

/***/ "./src/resolver.ts":
/*!*************************!*\
  !*** ./src/resolver.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isomorphic_fetch_1 = __importDefault(__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js"));
var util_1 = __importDefault(__webpack_require__(/*! ./util */ "./src/util.ts"));
var LocaleResolver = /** @class */ (function () {
    function LocaleResolver() {
        this.locales = {};
    }
    LocaleResolver.prototype.fetch = function (language, file) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var base, response, json;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        base = (_a = "http://localhost:8080/dbd-json/dist") === null || _a === void 0 ? void 0 : _a.replace("$VERSION", util_1.default.version());
                        return [4 /*yield*/, isomorphic_fetch_1.default(base + "/data/" + language + "/" + file + ".json", {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _b.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    LocaleResolver.prototype.get = function (language) {
        return __awaiter(this, void 0, void 0, function () {
            var items, killerAddons, killerOfferings, killerPerks, killers, powers, sharedOfferings, survivorAddons, survivorPerks, survivorOfferings, survivors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!(language in this.locales)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.fetch(language, "items")];
                    case 1:
                        items = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "killerAddons")];
                    case 2:
                        killerAddons = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "killerOfferings")];
                    case 3:
                        killerOfferings = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "killerPerks")];
                    case 4:
                        killerPerks = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "killers")];
                    case 5:
                        killers = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "powers")];
                    case 6:
                        powers = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "sharedOfferings")];
                    case 7:
                        sharedOfferings = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "survivorAddons")];
                    case 8:
                        survivorAddons = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "survivorPerks")];
                    case 9:
                        survivorPerks = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "survivorOfferings")];
                    case 10:
                        survivorOfferings = _a.sent();
                        return [4 /*yield*/, this.fetch(language, "survivors")];
                    case 11:
                        survivors = _a.sent();
                        this.locales[language] = {
                            items: items,
                            killerAddons: killerAddons,
                            killerOfferings: killerOfferings,
                            killerPerks: killerPerks,
                            killers: killers,
                            powers: powers,
                            sharedOfferings: sharedOfferings,
                            survivorAddons: survivorAddons,
                            survivorOfferings: survivorOfferings,
                            survivorPerks: survivorPerks,
                            survivors: survivors,
                            language: language,
                        };
                        _a.label = 12;
                    case 12: return [2 /*return*/, this.locales[language]];
                }
            });
        });
    };
    return LocaleResolver;
}());
exports.default = LocaleResolver;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var pkgJson = __webpack_require__(/*! ../package.json */ "./package.json");
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.version = function () {
        return pkgJson.version;
    };
    return Util;
}());
exports.default = Util;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Headers": () => (/* binding */ Headers),
/* harmony export */   "Request": () => (/* binding */ Request),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "DOMException": () => (/* binding */ DOMException),
/* harmony export */   "fetch": () => (/* binding */ fetch)
/* harmony export */ });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@stephenpoole/deadbydaylight","version":"5.0.0","description":"A complete Dead by Daylight dataset.","main":"dist/index.js","types":"dist/src/index.d.ts","files":["dist/**/*"],"scripts":{"start":"yarn start:node && yarn start:browser","dev":"yarn dev:node && yarn dev:browser","start:node":"webpack --mode=production && yarn types","dev:node":"webpack --mode=development","start:browser":"webpack --config=webpack.umd.config.js --mode=production","dev:browser":"webpack --config=webpack.umd.config.js --mode=development","build":"node ./localization/build.js","types":"tsc -p tsconfig.json --emitDeclarationOnly --skipLibCheck","test":"nyc ts-mocha --reporter min --require babel-register \\"./test/**/*.ts\\"","docs":"typedoc --excludeExternals --externalPattern \\"**/node_modules/**\\" --name \\"Dead By Daylight Database\\" --out \\"docs/deadbydaylight\\" \\"src\\"","coverage":"nyc --reporter=lcov yarn test","snyk":"snyk protect"},"repository":{"type":"git","url":"git+https://github.com/stephenpoole/deadbydaylight.git"},"author":"Stephen Poole","license":"MIT","bugs":{"url":"https://github.com/stephenpoole/deadbydaylight/issues"},"homepage":"https://github.com/stephenpoole/deadbydaylight#readme","devDependencies":{"@istanbuljs/nyc-config-typescript":"^1.0.1","@types/chai":"^4.2.19","@types/isomorphic-fetch":"^0.0.35","@types/node":"^15.12.4","@types/webpack":"^4.4.24","@types/webpack-env":"^1.16.0","@typescript-eslint/eslint-plugin":"^2.27.0","@typescript-eslint/parser":"^2.27.0","babel-register":"^6.26.0","chai":"^4.3.4","circular-dependency-plugin":"^5.2.2","codecov":"^3.8.2","copy-webpack-plugin":"^9.0.0","dotenv-webpack":"^7.0.3","eslint":"^6.8.0","eslint-config-airbnb-base":"^14.1.0","eslint-loader":"^4.0.0","eslint-plugin-import":"^2.16.0","mocha":"^5.2.0","nyc":"^15.1.0","snyk":"^1.639.0","source-map":"^0.7.3","source-map-loader":"^3.0.0","source-map-support":"^0.5.10","ts-loader":"^9.2.3","ts-mocha":"^8.0.0","ts-node":"^10.0.0","typedoc":"^0.21.0","typescript":"^4.3.4","webpack":"^5.40.0","webpack-cli":"^4.7.2","webpack-node-externals":"^1.7.2"},"dependencies":{"isomorphic-fetch":"^3.0.0"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.browser.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map