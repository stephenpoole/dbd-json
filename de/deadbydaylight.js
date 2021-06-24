(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DeadByDaylight", [], factory);
	else if(typeof exports === 'object')
		exports["DeadByDaylight"] = factory();
	else
		root["DeadByDaylight"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _get)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__.default)(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _superPropBase)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/data.compiled/enum.ts":
/*!***********************************!*\
  !*** ./src/data.compiled/enum.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Killer": () => (/* binding */ Killer),
/* harmony export */   "Power": () => (/* binding */ Power),
/* harmony export */   "Survivor": () => (/* binding */ Survivor),
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "Offering": () => (/* binding */ Offering),
/* harmony export */   "SurvivorOffering": () => (/* binding */ SurvivorOffering),
/* harmony export */   "KillerOffering": () => (/* binding */ KillerOffering),
/* harmony export */   "Addon": () => (/* binding */ Addon),
/* harmony export */   "KillerAddon": () => (/* binding */ KillerAddon),
/* harmony export */   "SurvivorAddon": () => (/* binding */ SurvivorAddon),
/* harmony export */   "Perk": () => (/* binding */ Perk),
/* harmony export */   "KillerPerk": () => (/* binding */ KillerPerk),
/* harmony export */   "SurvivorPerk": () => (/* binding */ SurvivorPerk)
/* harmony export */ });
var Killer = {
  NoOne: "NO_ONE",
  Trapper: "TRAPPER",
  Wraith: "WRAITH",
  Hillbilly: "HILLBILLY",
  Nurse: "NURSE",
  Huntress: "HUNTRESS",
  Shape: "SHAPE",
  Hag: "HAG",
  Cannibal: "CANNIBAL",
  Doctor: "DOCTOR",
  Nightmare: "NIGHTMARE",
  Pig: "PIG",
  Clown: "CLOWN",
  Spirit: "SPIRIT",
  Legion: "LEGION",
  Plague: "PLAGUE",
  Ghost: "GHOST",
  Demogorgon: "DEMOGORGON",
  Oni: "ONI",
  Deathslinger: "DEATHSLINGER",
  Executioner: "EXECUTIONER",
  Blight: "BLIGHT",
  Twins: "TWINS",
  Trickster: "TRICKSTER",
  Nemesis: "NEMESIS"
};
var Power = {
  SpencersLastBreath: "SPENCERS_LAST_BREATH",
  BearTrap: "BEAR_TRAP",
  WailingBell: "WAILING_BELL",
  Chainsaw: "CHAINSAW",
  HuntingHatchets: "HUNTING_HATCHETS",
  EvilWithin: "EVIL_WITHIN",
  BlackenedCatalyst: "BLACKENED_CATALYST",
  BubbasChainsaw: "BUBBAS_CHAINSAW",
  CartersSpark: "CARTERS_SPARK",
  DreamDemon: "DREAM_DEMON",
  JigsawsBaptism: "JIGSAWS_BAPTISM",
  TheAfterpieceTonic: "THE_AFTERPIECE_TONIC",
  YamaokasHaunting: "YAMAOKAS_HAUNTING",
  FeralFrenzy: "FERAL_FRENZY",
  VilePurge: "VILE_PURGE",
  NightShroud: "NIGHT_SHROUD",
  OftheAbyss: "OF_THE_ABYSS",
  YamaokasWrath: "YAMAOKAS_WRATH",
  TheRedeemer: "THE_REDEEMER",
  RitesofJudgment: "RITES_OF_JUDGMENT",
  BlightedCorruption: "BLIGHTED_CORRUPTION",
  BloodBond: "BLOOD_BOND",
  Showstopper: "SHOWSTOPPER",
  TVirus: "T_VIRUS"
};
var Survivor = {
  NoOne: "NO_ONE",
  DwightFairfield: "DWIGHT_FAIRFIELD",
  MegThomas: "MEG_THOMAS",
  ClaudetteMorel: "CLAUDETTE_MOREL",
  JakePark: "JAKE_PARK",
  NeaKarlsson: "NEA_KARLSSON",
  WilliamBillOverbeck: "WILLIAM_OVERBECK",
  DavidKing: "DAVID_KING",
  LaurieStrode: "LAURIE_STRODE",
  AceVisconti: "ACE_VISCONTI",
  FengMin: "FENG_MIN",
  QuentinSmith: "QUENTIN_SMITH",
  DetectiveTapp: "DAVID_TAPP",
  KateDenson: "KATE_DENSON",
  AdamFrancis: "ADAM_FRANCIS",
  JeffJohansen: "JEFF_JOHANSEN",
  JaneRomero: "JANE_ROMERO",
  AshleyJWilliams: "ASHLEY_J_WILLIAMS",
  NancyWheeler: "NANCY_WHEELER",
  SteveHarrington: "STEVE_HARRINGTON",
  YuiKimura: "YUI_KIMURA",
  ZarinaKassir: "ZARINA_KASSIR",
  CherylMason: "CHERYL_MASON",
  FelixRichter: "FELIX_RICHTER",
  lodieRakoto: "ELODIE_RAKOTO",
  YunJinLee: "YUN_JIN_LEE",
  JillValentine: "JILL_VALENTINE",
  LeonSKennedy: "LEON_SCOTT_KENNEDY"
};
var Item = {
  ChineseFirecracker: "CHINESE_FIRECRACKER",
  Flashlight: "FLASHLIGHT",
  WillOWisp: "WILL_O_WISP",
  SportFlashlight: "SPORT_FLASHLIGHT",
  UtilityFlashlight: "UTILITY_FLASHLIGHT",
  BrokenKey: "BROKEN_KEY",
  DullKey: "DULL_KEY",
  SkeletonKey: "SKELETON_KEY",
  Map: "MAP",
  RainbowMap: "RAINBOW_MAP",
  CampingAidKit: "CAMPING_AID_KIT",
  AllHallowsEveLunchbox: "ALL_HALLOWS_EVE_LUNCHBOX",
  FirstAidKit: "FIRST_AID_KIT",
  EmergencyMedKit: "EMERGENCY_MED_KIT",
  RangerMedKit: "RANGER_MED_KIT",
  WornOutTools: "WORN_OUT_TOOLS",
  Toolbox: "TOOLBOX",
  MechanicsToolbox: "MECHANICS_TOOLBOX",
  CommodiousToolbox: "COMMODIOUS_TOOLBOX",
  EngineersToolbox: "ENGINEERS_TOOLBOX",
  AlexsToolbox: "ALEXS_TOOLBOX",
  WinterPartyStarter: "WINTER_PARTY_STARTER",
  ThirdYearPartyStarter: "THIRD_YEAR_PARTY_STARTER",
  AnniversaryMedKit: "ANNIVERSARY_MED_KIT",
  AnniversaryFlashlight: "ANNIVERSARY_FLASHLIGHT"
};
var Offering = {
  BogLaurelSachet: "BOG_LAUREL_SACHET",
  FreshBogLaurel: "FRESH_BOG_LAUREL",
  FragrantBogLaurel: "FRAGRANT_BOG_LAUREL",
  CrispleafAmaranthSachet: "CRISPLEAF_AMARANTH_SACHET",
  FreshCrispleafAmaranth: "FRESH_CRISPLEAF_AMARANTH",
  FragrantCrispleafAmaranth: "FRAGRANT_CRISPLEAF_AMARANTH",
  PrimroseBlossomSachet: "PRIMROSE_BLOSSOM_SACHET",
  FreshPrimroseBlossom: "FRESH_PRIMROSE_BLOSSOM",
  FragrantPrimroseBlossom: "FRAGRANT_PRIMROSE_BLOSSOM",
  SweetWilliamSachet: "SWEET_WILLIAM_SACHET",
  FreshSweetWilliam: "FRESH_SWEET_WILLIAM",
  BoundEnvelope: "BOUND_ENVELOPE",
  SealedEnvelope: "SEALED_ENVELOPE",
  EscapeCake: "ESCAPE_CAKE",
  ChalkPouch: "CHALK_POUCH",
  CreamChalkPouch: "CREAM_CHALK_POUCH",
  IvoryChalkPouch: "IVORY_CHALK_POUCH",
  SaltPouch: "SALT_POUCH",
  VigosJarofSaltyLips: "VIGOS_JAR_OF_SALTY_LIPS",
  TarnishedCoin: "TARNISHED_COIN",
  ShinyCoin: "SHINY_COIN",
  PetrifiedOak: "PETRIFIED_OAK",
  ShroudofUnion: "SHROUD_OF_UNION",
  ShroudofBinding: "SHROUD_OF_BINDING",
  VigosShroud: "VIGOS_SHROUD",
  TanagerWreath: "TANAGER_WREATH",
  DevoutTanagerWreath: "DEVOUT_TANAGER_WREATH",
  ArdentTanagerWreath: "ARDENT_TANAGER_WREATH",
  RavenWreath: "RAVEN_WREATH",
  DevoutRavenWreath: "DEVOUT_RAVEN_WREATH",
  ArdentRavenWreath: "ARDENT_RAVEN_WREATH",
  SpottedOwlWreath: "SPOTTED_OWL_WREATH",
  DevoutSpottedOwlWreath: "DEVOUT_SPOTTED_OWL_WREATH",
  ArdentSpottedOwlWreath: "ARDENT_SPOTTED_OWL_WREATH",
  ShrikeWreath: "SHRIKE_WREATH",
  DevoutShrikeWreath: "DEVOUT_SHRIKE_WREATH",
  ArdentShrikeWreath: "ARDENT_SHRIKE_WREATH",
  HollowShell: "HOLLOW_SHELL",
  SurvivorPudding: "SURVIVOR_PUDDING",
  CutCoin: "CUT_COIN",
  ScratchedCoin: "SCRATCHED_COIN",
  MoldyOak: "MOLDY_OAK",
  RottenOak: "ROTTEN_OAK",
  PutridOak: "PUTRID_OAK",
  CypressMementoMori: "CYPRESS_MEMENTO_MORI",
  IvoryMementoMori: "IVORY_MEMENTO_MORI",
  EbonyMementoMori: "EBONY_MEMENTO_MORI",
  ShroudofSeparation: "SHROUD_OF_SEPARATION",
  BloodyPartyStreamers: "BLOODY_PARTY_STREAMERS",
  ClearReagent: "CLEAR_REAGENT",
  FaintReagent: "FAINT_REAGENT",
  HazyReagent: "HAZY_REAGENT",
  MurkyReagent: "MURKY_REAGENT",
  NewMoonBouquet: "NEW_MOON_BOUQUET",
  CrescentMoonBouquet: "CRESCENT_MOON_BOUQUET",
  QuarterMoonBouquet: "QUARTER_MOON_BOUQUET",
  FullMoonBouquet: "FULL_MOON_BOUQUET",
  MacmillanLedgerPage: "MACMILLAN_LEDGER_PAGE",
  SignedLedgerPage: "SIGNED_LEDGER_PAGE",
  MacmillansPhalanxBone: "MACMILLANS_PHALANX_BONE",
  ShreddedPlate: "SHREDDED_PLATE",
  VirginiaPlate: "VIRGINIA_PLATE",
  AzarovsKey: "AZAROVS_KEY",
  CattleTagTwo: "CATTLE_TAG_TWENTY_EIGHT",
  ColdwindCattleTagEight: "CATTLE_TAG_EIGHTY_ONE",
  HeartLocket: "HEART_LOCKET",
  LunacyTicket: "LUNACY_TICKET",
  PElliottLunacyTicket: "P_ELLIOT_LUNACY_TICKET",
  CharredWeddingPhotograph: "CHARRED_WEDDING_PHOTOGRAPH",
  HarvestFestivalLeaflet: "HARVEST_FESTIVAL_LEAFLET",
  DecrepitClapboard: "DECREPIT_CLAPBOARD",
  StrodeRealtyKey: "STRODE_REALTY_KEY",
  FumingCordage: "FUMING_CORDAGE",
  FumingWelcomeSign: "FUMING_WELCOME_SIGN",
  GrandmasCookbook: "GRANDMAS_COOKBOOK",
  EmergencyCertificate: "EMERGENCY_CERTIFICATE",
  PsychiatricAssessmentReport: "PSYCHIATRIC_ASSESSMENT_REPORT",
  ShatteredGlasses: "SHATTERED_GLASSES",
  PaintedRiverRock: "PAINTED_RIVER_ROCK",
  ChildrensBook: "CHILDRENS_BOOK",
  TheLastMask: "THE_LAST_MASK",
  ThePiedPiper: "THE_PIED_PIPER",
  BlackWard: "BLACK_WARD",
  WhiteWard: "WHITE_WARD",
  YamaokaFamilyCrest: "YAMAOKA_FAMILY_CREST",
  SacrificialWard: "SACRIFICIAL_WARD",
  MarysLetter: "MARYS_LETTER",
  JigsawPiece: "JIGSAW_PIECE",
  HawkinsNationalLaboratoryID: "HAWKINS_NATIONAL_LABORATORY_ID",
  DustyNoose: "DUSTY_NOOSE",
  GruesomeGateau: "GRUESOME_GATEAU",
  GhastlyGateau: "GHASTLY_GATEAU"
};
var SurvivorOffering = {
  BogLaurelSachet: "BOG_LAUREL_SACHET",
  FreshBogLaurel: "FRESH_BOG_LAUREL",
  FragrantBogLaurel: "FRAGRANT_BOG_LAUREL",
  CrispleafAmaranthSachet: "CRISPLEAF_AMARANTH_SACHET",
  FreshCrispleafAmaranth: "FRESH_CRISPLEAF_AMARANTH",
  FragrantCrispleafAmaranth: "FRAGRANT_CRISPLEAF_AMARANTH",
  PrimroseBlossomSachet: "PRIMROSE_BLOSSOM_SACHET",
  FreshPrimroseBlossom: "FRESH_PRIMROSE_BLOSSOM",
  FragrantPrimroseBlossom: "FRAGRANT_PRIMROSE_BLOSSOM",
  SweetWilliamSachet: "SWEET_WILLIAM_SACHET",
  FreshSweetWilliam: "FRESH_SWEET_WILLIAM",
  BoundEnvelope: "BOUND_ENVELOPE",
  SealedEnvelope: "SEALED_ENVELOPE",
  EscapeCake: "ESCAPE_CAKE",
  ChalkPouch: "CHALK_POUCH",
  CreamChalkPouch: "CREAM_CHALK_POUCH",
  IvoryChalkPouch: "IVORY_CHALK_POUCH",
  SaltPouch: "SALT_POUCH",
  VigosJarofSaltyLips: "VIGOS_JAR_OF_SALTY_LIPS",
  TarnishedCoin: "TARNISHED_COIN",
  ShinyCoin: "SHINY_COIN",
  PetrifiedOak: "PETRIFIED_OAK",
  ShroudofUnion: "SHROUD_OF_UNION",
  ShroudofBinding: "SHROUD_OF_BINDING",
  VigosShroud: "VIGOS_SHROUD"
};
var KillerOffering = {
  TanagerWreath: "TANAGER_WREATH",
  DevoutTanagerWreath: "DEVOUT_TANAGER_WREATH",
  ArdentTanagerWreath: "ARDENT_TANAGER_WREATH",
  RavenWreath: "RAVEN_WREATH",
  DevoutRavenWreath: "DEVOUT_RAVEN_WREATH",
  ArdentRavenWreath: "ARDENT_RAVEN_WREATH",
  SpottedOwlWreath: "SPOTTED_OWL_WREATH",
  DevoutSpottedOwlWreath: "DEVOUT_SPOTTED_OWL_WREATH",
  ArdentSpottedOwlWreath: "ARDENT_SPOTTED_OWL_WREATH",
  ShrikeWreath: "SHRIKE_WREATH",
  DevoutShrikeWreath: "DEVOUT_SHRIKE_WREATH",
  ArdentShrikeWreath: "ARDENT_SHRIKE_WREATH",
  HollowShell: "HOLLOW_SHELL",
  SurvivorPudding: "SURVIVOR_PUDDING",
  CutCoin: "CUT_COIN",
  ScratchedCoin: "SCRATCHED_COIN",
  MoldyOak: "MOLDY_OAK",
  RottenOak: "ROTTEN_OAK",
  PutridOak: "PUTRID_OAK",
  CypressMementoMori: "CYPRESS_MEMENTO_MORI",
  IvoryMementoMori: "IVORY_MEMENTO_MORI",
  EbonyMementoMori: "EBONY_MEMENTO_MORI",
  ShroudofSeparation: "SHROUD_OF_SEPARATION"
};
var Addon = {
  WideLens: "WIDE_LENS",
  PowerBulb: "POWER_BULB",
  LeatherGrip: "LEATHER_GRIP",
  Battery: "BATTERY",
  TirOptic: "TIR_OPTIC",
  RubberGrip: "RUBBER_GRIP",
  LowAmpFilament: "LOW_AMP_FILAMENT",
  HeavyDutyBattery: "HEAVY_DUTY_BATTERY",
  FocusLens: "FOCUS_LENS",
  LongLifeBattery: "LONG_LIFE_BATTERY",
  IntenseHalogen: "INTENSE_HALOGEN",
  HighEndSapphirelens: "HIGH_END_SAPPHIRE_LENS",
  OddBulb: "ODD_BULB",
  PrayerRope: "PRAYER_ROPE",
  ScratchedPearl: "SCRATCHED_PEARL",
  PrayerBeads: "PRAYER_BEADS",
  ErodedToken: "ERODED_TOKEN",
  GoldToken: "GOLD_TOKEN",
  WeavedRing: "WEAVED_RING",
  MilkyGlass: "MILKY_GLASS",
  BloodAmber: "BLOOD_AMBER",
  MapAddendum: "MAP_ADDENDUM",
  YellowWire: "YELLOW_WIRE",
  UnusualStamp: "UNUSUAL_STAMP",
  RetardantJelly: "RETARDANT_JELLY",
  RedTwine: "RED_TWINE",
  GlassBead: "GLASS_BEAD",
  OddStamp: "ODD_STAMP",
  BlackSilkCord: "BLACK_SILK_CORD",
  CrystalBead: "CRYSTAL_BEAD",
  RubberGloves: "RUBBER_GLOVES",
  ButterflyTape: "BUTTERFLY_TAPE",
  Bandages: "BANDAGES",
  Sponge: "SPONGE",
  SelfAdherentWrap: "SELF_ADHERENT_WRAP",
  NeedleThread: "NEEDLE_AND_THREAD",
  MedicalScissors: "MEDICAL_SCISSORS",
  GauzeRoll: "GAUZE_ROLL",
  SurgicalSuture: "SURGICAL_SUTURE",
  GelDressings: "GEL_DRESSINGS",
  AbdominalDressing: "ABDOMINAL_DRESSING",
  StypticAgent: "STYPTIC_AGENT",
  AntiHemorrhagicSyringe: "ANTI_HEMORRHAGIC_SYRINGE",
  SpringClamp: "SPRING_CLAMP",
  Scraps: "SCRAPS",
  CleanRag: "CLEAN_RAG",
  WireSpool: "WIRE_SPOOL",
  SocketSwivels: "SOCKET_SWIVELS",
  ProtectiveGloves: "PROTECTIVE_GLOVES",
  Instructions: "INSTRUCTIONS",
  GripWrench: "GRIP_WRENCH",
  CuttingWire: "CUTTING_WIRE",
  Hacksaw: "HACKSAW",
  BrandNewPart: "BRAND_NEW_PART",
  UniqueWeddingRing: "UNIQUE_WEDDING_RING",
  TrapperGloves: "TRAPPER_GLOVES",
  StrongCoilSpring: "STRONG_COIL_SPRING",
  FourCoilSpringKit: "FOUR_COIL_SPRING_KIT",
  LogwoodDye: "LOGWOOD_DYE",
  SerratedJaws: "SERRATED_JAWS",
  TrapSetters: "TRAP_SETTERS",
  TrapperBag: "TRAPPER_BAG",
  RustedJaws: "RUSTED_JAWS",
  SecondaryCoil: "SECONDARY_COIL",
  TarBottle: "TAR_BOTTLE",
  WaxBrick: "WAX_BRICK",
  OilyCoil: "OILY_COIL",
  FasteningTools: "FASTENING_TOOLS",
  StitchedBag: "STITCHED_BAG",
  BloodyCoil: "BLOODY_COIL",
  IridescentStone: "IRIDESCENT_STONE",
  TheSerpentSoot: "THE_SERPENT_SOOT",
  TheHoundSoot: "THE_HOUND_SOOT",
  TheGhostSoot: "THE_GHOST_SOOT",
  TheBeastSoot: "THE_BEAST_SOOT",
  BoneClapper: "BONE_CLAPPER",
  BlinkMud: "BLINK_MUD",
  WindstormMud: "WINDSTORM_MUD",
  SwiftHuntMud: "SWIFT_HUNT_MUD",
  BlindWarriorMud: "BLIND_WARRIOR_MUD",
  WindstormWhite: "WINDSTORM_WHITE",
  SwiftHuntWhite: "SWIFT_HUNT_WHITE",
  ShadowDanceWhite: "SHADOW_DANCE_WHITE",
  BlinkWhite: "BLINK_WHITE",
  BlindWarriorWhite: "BLIND_WARRIOR_WHITE",
  WindstormBlood: "WINDSTORM_BLOOD",
  SwiftHuntBlood: "SWIFT_HUNT_BLOOD",
  ShadowDanceBlood: "SHADOW_DANCE_BLOOD",
  AllSeeingBlood: "ALL_SEEING_BLOOD",
  CoxcombedClapper: "COXCOMBED_CLAPPER",
  AllSeeingSpirit: "ALL_SEEING_SPIRIT",
  HeavyClutch: "HEAVY_CLUTCH",
  SpeedLimiter: "SPEED_LIMITER",
  JunkyardAirFilter: "JUNKYARD_AIR_FILTER",
  SteelToeBoots: "STEEL_TOE_BOOTS",
  PuncturedMuffler: "PUNCTURED_MUFFLER",
  BigBuckle: "BIG_BUCKLE",
  OffBrandMotorOil: "OFF_BRAND_MOTOR_OIL",
  DadsBoots: "DADS_BOOTS",
  DeathEngravings: "DEATH_ENGRAVINGS",
  MothersHelpers: "MOTHERS_HELPERS",
  LowKickbackChains: "LOW_KICKBACK_CHAINS",
  LeafyMash: "LEAFY_MASH",
  DoomEngravings: "DOOM_ENGRAVINGS",
  BlackGrease: "BLACK_GREASE",
  TunedCarburetor: "TUNED_CARBURETOR",
  SpikedBoots: "SPIKED_BOOTS",
  PighouseGloves: "PIGHOUSE_GLOVES",
  LoproChains: "LOPRO_CHAINS",
  IridescentBrick: "IRIDESCENT_BRICK",
  ApexMuffler: "APEX_MUFFLER",
  WoodenHorse: "WOODEN_HORSE",
  WhiteNitComb: "WHITE_NIT_COMB",
  MetalSpoon: "METAL_SPOON",
  BadManKeepsake: "BAD_MAN_KEEPSAKE",
  PocketWatch: "POCKET_WATCH",
  DullBracelet: "DULL_BRACELET",
  DarkCincture: "DARK_CINCTURE",
  CatatonicBoysTreasure: "CATATONIC_BOYS_TREASURE",
  SpasmodicBreath: "SPASMODIC_BREATH",
  HeavyPanting: "HEAVY_PANTING",
  FragileWheeze: "FRAGILE_WHEEZE",
  AtaxicRespiration: "ATAXIC_RESPIRATION",
  AnxiousGasp: "ANXIOUS_GASP",
  PlaidFlannel: "PLAID_FLANNEL",
  KavanaghsLastBreath: "KAVANAGHS_LAST_BREATH",
  JennersLastBreath: "JENNERS_LAST_BREATH",
  CampbellsLastBreath: "CAMPBELLS_LAST_BREATH",
  BadMansLastBreath: "BAD_MANS_LAST_BREATH",
  TornBookmark: "TORN_BOOKMARK",
  Matchbox: "MATCHBOX",
  TackyEarrings: "TACKY_EARRINGS",
  BoyfriendsMemo: "BOYFRIENDS_MEMO",
  BlondHair: "BLOND_HAIR",
  ReflectiveFragment: "REFLECTIVE_FRAGMENT",
  MemorialFlower: "MEMORIAL_FLOWER",
  Jewelry: "JEWELRY",
  HairBrush: "HAIR_BRUSH",
  GlassFragment: "GLASS_FRAGMENT",
  DeadRabbit: "DEAD_RABBIT",
  MirrorShard: "MIRROR_SHARD",
  JudithsJournal: "JUDITHS_JOURNAL",
  JewelryBox: "JEWELRY_BOX",
  JMyersMemorial: "J_MYERS_MEMORIAL",
  HairBow: "HAIR_BOW",
  VanityMirror: "VANITY_MIRROR",
  TombstonePiece: "TOMBSTONE_PIECE",
  ScratchedMirror: "SCRATCHED_MIRROR",
  LockofHair: "LOCK_OF_HAIR",
  JudithsTombstone: "JUDITHS_TOMBSTONE",
  FragrantTuftofHair: "FRAGRANT_TUFT_OF_HAIR",
  RopeNecklet: "ROPE_NECKLET",
  PowderedEggshell: "POWDERED_EGGSHELL",
  DeadFlyMud: "DEAD_FLY_MUD",
  BogWater: "BOG_WATER",
  PussyWillowCatkins: "PUSSY_WILLOW_CATKINS",
  HalfEggshell: "HALF_EGGSHELL",
  DragonflyWings: "DRAGONFLY_WINGS",
  CypressNecklet: "CYPRESS_NECKLET",
  BloodiedWater: "BLOODIED_WATER",
  WillowWreath: "WILLOW_WREATH",
  SwampOrchidNecklet: "SWAMP_ORCHID_NECKLET",
  DriedCicada: "DRIED_CICADA",
  CrackedTurtleEgg: "CRACKED_TURTLE_EGG",
  BloodiedMud: "BLOODIED_MUD",
  ScarredHand: "SCARRED_HAND",
  RustyShackles: "RUSTY_SHACKLES",
  GranmasHeart: "GRANMAS_HEART",
  DisfiguredEar: "DISFIGURED_EAR",
  WaterloggedShoe: "WATERLOGGED_SHOE",
  MintRag: "MINT_RAG",
  MoldyElectrode: "MOLDY_ELECTRODE",
  MapleKnight: "MAPLE_KNIGHT",
  OrderClassI: "ORDER_CLASS_I",
  CalmClassI: "CALM_CLASS_I",
  ScrappedTape: "SCRAPPED_TAPE",
  PolishedElectrode: "POLISHED_ELECTRODE",
  InterviewTape: "INTERVIEW_TAPE",
  RestraintClassIi: "RESTRAINT_CLASS_II",
  OrderClassIi: "ORDER_CLASS_II",
  DisciplineClassIi: "DISCIPLINE_CLASS_II",
  CalmClassIi: "CALM_CLASS_II",
  HighStimulusElectrode: "HIGH_STIMULUS_ELECTRODE",
  RestraintClassIii: "RESTRAINT_CLASS_III",
  DisciplineClassIii: "DISCIPLINE_CLASS_III",
  RestraintCartersNotes: "RESTRAINT_CARTERS_NOTES",
  OrderCartersNotes: "ORDER_CARTERS_NOTES",
  DisciplineCartersNotes: "DISCIPLINE_CARTERS_NOTES",
  CalmCartersNotes: "CALM_CARTERS_NOTES",
  IridescentKing: "IRIDESCENT_KING",
  IridescentQueen: "IRIDESCENT_QUEEN",
  CoarseStone: "COARSE_STONE",
  YellowedCloth: "YELLOWED_CLOTH",
  BandagedHaft: "BANDAGED_HAFT",
  AmanitaToxin: "AMANITA_TOXIN",
  WeightedHead: "WEIGHTED_HEAD",
  ShinyPin: "SHINY_PIN",
  OakHaft: "OAK_HAFT",
  MannaGrassBraid: "MANNA_GRASS_BRAID",
  LeatherLoop: "LEATHER_LOOP",
  RoseRoot: "ROSE_ROOT",
  DeerskinGloves: "DEERSKIN_GLOVES",
  VenomousConcoction: "VENOMOUS_CONCOCTION",
  RustyHead: "RUSTY_HEAD",
  FlowerBabushka: "FLOWER_BABUSHKA",
  InfantryBelt: "INFANTRY_BELT",
  GlowingConcoction: "GLOWING_CONCOCTION",
  BegrimedHead: "BEGRIMED_HEAD",
  WoodenFox: "WOODEN_FOX",
  IridescentHead: "IRIDESCENT_HEAD",
  SoldiersPuttee: "SOLDIERS_PUTTEE",
  VegetableOil: "VEGETABLE_OIL_C",
  SparkPlug: "SPARK_PLUG_C",
  ChainsawFile: "CHAINSAW_FILE_C",
  PrimerBulb: "PRIMER_BULB_C",
  LongGuideBar: "LONG_GUIDE_BAR_C",
  KnifeScratches: "KNIFE_SCRATCHES",
  HomemadeMuffler: "HOMEMADE_MUFFLER_C",
  Chili: "CHILI",
  TheGrease: "THE_GREASE",
  TheBeastsMarks: "THE_BEASTS_MARKS",
  GrislyChain: "GRISLY_CHAIN",
  ShopLubricant: "SHOP_LUBRICANT_C",
  BegrimedChains: "BEGRIMED_CHAINS_C",
  DepthGaugeRake: "DEPTH_GUAGE_RAKE",
  LightChassis: "LIGHT_CHASSIS",
  RustedChain: "RUSTED_CHAIN",
  AwardWinningChili: "AWARD_WINNING_CHILI",
  IridescentFlesh: "IRIDESCENT_FLESH",
  CarburetorTuningGuide: "CARBURETOR_TUNING_GUIDE",
  WoolShirt: "WOOL_SHIRT",
  SheepBlock: "SHEEP_BLOCK",
  KidsDrawing: "KIDS_DRAWING",
  GardenRake: "GARDEN_RAKE",
  PrototypeClaws: "PROTOTYPE_CLAWS",
  OutdoorRope: "OUTDOOR_ROPE",
  NancysSketch: "NANCYS_SKETCH",
  GreenDress: "GREEN_DRESS",
  CatBlock: "CAT_BLOCK",
  UnicornBlock: "UNICORN_BLOCK",
  SwingChains: "SWING_CHAINS",
  NancysMasterpiece: "NANCYS_MASTERPIECE",
  JumpRope: "JUMP_ROPE",
  BlueDress: "BLUE_DRESS",
  PillBottle: "PILL_BOTTLE",
  PaintThinner: "PAINT_THINNER",
  ClassPhoto: "CLASS_PHOTO",
  ZBlock: "Z_BLOCK",
  RedPaintBrush: "RED_PAINT_BRUSH",
  BlackBox: "BLACK_BOX",
  WorkshopGrease: "WORKSHOP_GREASE",
  ShatteredSyringe: "SHATTERED_SYRINGE",
  JohnsMedicalFile: "JOHNS_MEDICAL_FILE",
  CombatStraps: "COMBAT_STRAPS",
  VideoTape: "VIDEO_TAPE",
  UtilityBlades: "UTILITY_BLADES",
  RazorWires: "RAZOR_WIRES",
  LastWill: "LAST_WILL",
  FaceMask: "FACE_MASK",
  SlowReleaseToxin: "SLOW_RELEASE_TOXIN",
  RustyAttachments: "RUSTY_ATTACHMENTS",
  JigsawsSketch: "JIGSAWS_SKETCH",
  InterlockingRazor: "INTERLOCKING_RAZOR",
  BagofGears: "BAG_OF_GEARS",
  TamperedTimer: "TAMPERED_TIMER",
  JigsawsAnnotatedPlan: "JIGSAWS_ANNOTATED_PLAN",
  CrateofGears: "CRATE_OF_GEARS",
  AmandasSecret: "AMANDAS_SECRET",
  RuleSetNoTwo: "RULES_SET_NO_2",
  AmandasLetter: "AMANDAS_LETTER",
  SmellyInnerSoles: "SMELLY_INNER_SOLES",
  RobinFeather: "ROBIN_FEATHER",
  FingerlessParadeGloves: "FINGERLESS_PARADE_GLOVES",
  PartyBottle: "PARTY_BOTTLE",
  ThickCorkStopper: "THICK_CORK_STOPPER",
  StickySodaBottle: "STICKY_SODA_BOTTLE",
  StarlingFeather: "STARLING_FEATHER",
  SolventJug: "SOLVENT_JUG",
  KeroseneCan: "KEROSENE_CAN",
  VhsPorn: "VHS_PORN",
  SulfuricAcidVial: "SULFURIC_ACID_VIAL",
  FlaskofBleach: "FLASK_OF_BLEACH",
  SpiritofHartshorn: "SPIRIT_OF_HARTSHORN",
  BottleofChloroform: "BOTTLE_OF_CHLOROFORM",
  GarishMakeupKit: "GARISH_MAKEUP_KIT",
  CheapGinBottle: "CHEAP_GIN_BOTTLE",
  EtherOnevol: "ETHER_15_VOL",
  CigarBox: "CIGAR_BOX",
  TattoosMiddleFinger: "TATTOOS_MIDDLE_FINGER",
  RedheadsPinkyFinger: "REDHEADS_PINKY_FINGER",
  Zri: "ZORI",
  ShiawaseAmulet: "SHIAWASE_AMULET",
  OrigamiCrane: "ORIGAMI_CRANE",
  GiftedBambooComb: "GIFTED_BAMBOO_COMB",
  WhiteHairRibbon: "WHITE_HAIR_RIBBON",
  RinsBrokenWatch: "RINS_BROKEN_WATCH",
  MuddySportsDayCap: "MUDDY_SPORTS_DAY_CAP",
  KaiunTalisman: "KAIUN_TALISMAN",
  JuniperBonsai: "JUNIPER_BONSAI",
  RustyFlute: "RUSTY_FLUTE",
  KatsumoriTalisman: "KATSUMORI_TALISMAN",
  KatanaTsuba: "KATANA_TSUBA",
  DirtyUwabaki: "DIRTY_UWABAKI",
  BloodyHairBrooch: "BLOODY_HAIR_BROOCH",
  YakuyokeAmulet: "YAKUYOKE_AMULET",
  WakizashiSaya: "WAKIZASHI_SAYA",
  PrayerBeadsBracelet: "PRAYER_BEADS_BRACELET",
  DriedCherryBlossom: "DRIED_CHERRY_BLOSSOM",
  MotherDaughterRing: "MOTHER_DAUGHTER_RING",
  FathersGlasses: "FATHERS_GLASSES",
  SmileyFacePin: "SMILEY_FACE_PIN",
  ScratchedRuler: "SCRATCHED_RULER",
  MischiefList: "MISCHIEF_LIST",
  FriendshipBracelet: "FRIENDSHIP_BRACELET",
  NeverSleepPills: "NEVERSLEEP_PILLS",
  MuralSketch: "MURAL_SKETCH",
  JuliesMixTape: "JULIES_MIX_TAPE",
  EtchedRuler: "ETCHED_RULER",
  DefacedSmileyPin: "DEFACED_SMILEY_PIN",
  TheLegionPin: "THE_LEGION_PIN",
  SusiesMixTape: "SUSIES_MIX_TAPE",
  StolenSketchBook: "STOLEN_SKETCH_BOOK",
  NastyBlade: "NASTY_BLADE",
  JoeysMixTape: "JOEYS_MIX_TAPE",
  StabWoundsStudy: "STAB_WOUNDS_STUDY",
  FranksMixTape: "FRANKS_MIX_TAPE",
  FilthyBlade: "FILTHY_BLADE",
  ColdDirt: "COLD_DIRT",
  IridescentButton: "IRIDESCENT_BUTTON",
  FumingMixTape: "FUMING_MIX_TAPE",
  PrayerTabletFragment: "PRAYER_TABLET_FRAGMENT",
  OlibanumIncense: "OLIBANUM_INCENSE",
  LimestoneSeal: "LIMESTONE_SEAL",
  HealingSalve: "HEALING_SALVE",
  ProphylacticAmulet: "PROPHYLACTIC_AMULET",
  PotentTincture: "POTENT_TINCTURE",
  HematiteSeal: "HEMATITE_SEAL",
  Emeticpotion: "EMETIC_POTION",
  BlessedApple: "BLESSED_APPLE",
  RubbingOil: "RUBBING_OIL",
  InfectedEmetic: "INFECTED_EMETIC",
  IncensedOintment: "INCENSED_OINTMENT",
  ExorcismAmulet: "EXORCISM_AMULET",
  AshenApple: "ASHEN_APPLE",
  WorshipTablet: "WORSHIP_TABLET",
  VileEmetic: "VILE_EMETIC",
  SeveredToe: "SEVERED_TOE",
  DevoteesAmulet: "DEVOTEES_AMULET",
  IridescentSeal: "IRIDESCENT_SEAL",
  BlackIncense: "BLACK_INCENSE",
  Philly: "PHILLY",
  WalleyesMatchbook: "WALLEYES_MATCHBOOK",
  HeadlinesCutouts: "HEADLINES_CUTOUTS",
  CheapCologne: "CHEAP_COLOGNE",
  TelephotoLens: "TELEPHOTO_LENS",
  OlsensJournal: "OLSENS_JOURNAL",
  OlsensAddressBook: "OLSENS_ADDRESS_BOO",
  MarkedMap: "MARKED_MAP",
  CinchStraps: "CINCH_STRAPS",
  OlsensWallet: "OLSENS_WALLET",
  LeatherKnifeSheath: "LEATHER_KNIFE_SHEATH",
  LastingPerfume: "LASTING_PERFUME",
  KnifeBeltClip: "KNIFE_BELT_CLIP",
  ChewedPen: "CHEWED_PEN",
  VictimsDetailedRoutine: "VICTIMS_DETAILED_ROUTINE",
  NightVisionMonocular: "NIGHT_VISION_MONOCULAR",
  DropLegKnifeSheath: "DROP_LEG_KNIFE_SHEATH",
  DriversLicense: "DRIVERS_LICENSE",
  GhostFaceCaughtonTape: "CAUGHT_ON_TAPE",
  OutdoorSecurityCamera: "OUTDOOR_SECURITY_CAMERA",
  RottenPumpkin: "ROTTEN_PUMPKIN",
  RatTail: "RAT_TAIL",
  RatLiver: "RAT_LIVER",
  BlackHeart: "BLACK_HEART",
  ViscousWebbing: "VISCOUS_WEBBING",
  StickyLining: "STICKY_LINING",
  RottenGreenTripe: "ROTTEN_GREEN_TRIPE",
  MewsGuts: "MEWS_GUTS",
  BarbsGlasses: "BARBS_GLASSES",
  VioletWaxcap: "VIOLET_WAXCAP",
  ThornyVines: "THORNY_VINES",
  ElevensSoda: "ELEVENS_SODA",
  DeerLung: "DEER_LUNG",
  BrassCaseLighter: "BRASS_CASE_LIGHTER",
  VermillionWebcap: "VERMILLION_WEBCAP",
  UpsideDownResin: "UPSIDE_DOWN_RESIN",
  UnknownEgg: "UNKNOWN_EGG",
  LifeguardWhistle: "LIFEGUARD_WHISTLE",
  RedMoss: "RED_MOSS",
  LeproseLichen: "LEPROSE_LICHEN",
  YakuYokeTalisman: "YAKUYOKE_TALISMAN",
  RottingRope: "ROTTING_ROPE",
  CrackedSakazuki: "CRACKED_SAKAZUKI",
  BlackenedToenail: "BLACKENED_TOENAIL",
  PolishedMaedate: "POLISHED_MAEDATE",
  InkLion: "INK_LION",
  ChippedSaihai: "CHIPPED_SAIHAI",
  ChildsWoodenSword: "CHILDS_WOODEN_SWORD",
  BloodySash: "BLOODY_SASH",
  YamaokaSashimono: "YAMAOKA_SASHIMONO",
  WoodenOniMask: "WOODEN_ONI_MASK",
  ShatteredWakizashi: "SHATTERED_WAKAZASHI",
  ScalpedTopknot: "SCALPED_TOPKNOT",
  KanaiAnzenTalisman: "KANAIANZEN_TALISMAN",
  TearSoakedTenugui: "TEAR_SOAKED_TENUGUI",
  SplinteredHull: "SPLINTERED_HULL",
  LionFang: "LION_FANG",
  AkitosCrutch: "AKITOS_CRUTCH",
  RenjirosBloodyGlove: "RENJIROS_BLOODY_GLOVE",
  IridescentFamilyCrest: "IRIDESCENT_FAMILY_CREST",
  SpitPolishRag: "SPIT_POLISH_RAG",
  SnakeOil: "SNAKE_OIL",
  RicketyChain: "RICKETY_CHAIN",
  ModifiedAmmoBelt: "MODIFIED_AMMO_BELT",
  RustedSpike: "RUSTED_SPIKE",
  PoisonOakLeaves: "POISON_OAK_LEAVES",
  MarshalsBadge: "MARSHALS_BADGE",
  JawSmasher: "JAW_SMASHER",
  ChewingTobacco: "CHEWING_TOBACCO",
  WardensKeys: "WARDENS_KEYS",
  WantedPoster: "WANTED_POSTER",
  TinOilCan: "TIN_OIL_CAN",
  HoneyLocustThorns: "HONEY_LOCUST_THORNS",
  BayshoresGoldTooth: "BAYSHORES_GOLD_TOOTH",
  PrisonChain: "PRISON_CHAIN",
  GoldCreekWhiskey: "GOLD_CREEK_WHISKEY",
  BayshoresCigar: "BAYSHORES_CIGAR",
  BarbedWire: "BARBED_WIRE",
  IridescentCoin: "IRIDESCENT_COIN",
  HellshireIron: "HELLSHIRE_IRON",
  LeadRing: "LEAD_RING",
  DeadButterfly: "DEAD_BUTTERFLY",
  CopperRing: "COPPER_RING",
  BlackStrap: "BLACK_STRAP",
  WaxDoll: "WAX_DOLL",
  Spearhead: "SPEARHEAD",
  LeopardPrintFabric: "LEOPARD_PRINT_FABRIC",
  ForgottenVideotape: "FORGOTTEN_VIDEOTAPE",
  CinderellaMusicBox: "CINDERELLA_MUSIC_BOX",
  ValtielSectPhotograph: "VALTIEL_SECT_PHOTOGRAPH",
  TabletoftheOppressor: "TABLET_OF_THE_OPPRESSOR",
  MistyDayRemainsofJudgment: "MISTY_DAY_REMAINS_OF_JUDGMENT",
  MannequinFoot: "MANNEQUIN_FOOT",
  BurningManPainting: "BURNING_MAN_PAINTING",
  ScarletEgg: "SCARLET_EGG",
  RustColoredEgg: "RUST_COLORED_EGG",
  LostMemoriesBook: "LOST_MEMORIES_BOOK",
  CrimsonCeremonyBook: "CRIMSON_CEREMONY_COOK",
  ObsidianGoblet: "OBSIDIAN_GOBLET",
  IridescentSealofMetatron: "IRIDESCENT_SEAL_OF_METATRON",
  PlaceboTablet: "PLACEBO_TABLET",
  Foxglove: "FOXGLOVE",
  CompoundSeven: "COMPOUND_SEVEN",
  ChippedMonocle: "CHIPPED_MONOCLE",
  ShreddedNotes: "SHREDDED_NOTES",
  PustulaDust: "PUSTULA_DUST",
  PlagueBile: "PLAGUE_BILE",
  CankerThorn: "CANKER_THORN",
  BlightedRat: "BLIGHTED_RAT",
  UmbraSalts: "UMBRA_SALTS",
  RoseTonic: "ROSE_TONIC",
  CompoundTwentyOne: "COMPOUND_TWENTY_ONE",
  BlightedCrow: "BLIGHTED_CROW",
  AdrenalineVial: "ADRENALINE_VIAL",
  VigosJournal: "VIGOS_JOURNAL",
  SummoningStone: "SUMMONING_STONE",
  SoulChemical: "SOUL_CHEMICAL",
  AlchemistsRing: "ALCHEMISTS_RING",
  IridescentBlightTag: "IRIDESCENT_BLIGHT_TAG",
  CompoundThirtyThree: "COMPOUND_THIRTY_THREE",
  ToySword: "TOY_SWORD",
  TinyFingernail: "TINY_FINGERNAIL",
  SouredMilk: "SOURED_MILK",
  CatFigurine: "CAT_FIGURINE",
  MadeleinesGlove: "MADELEINES_GLOVE",
  CeremonialCandelabrum: "CEREMONIAL_CANDELABRUM",
  CatsEye: "CATS_EYE",
  BloodyBlackHood: "BLOODY_BLACK_HOOD",
  BabyTeeth: "BABY_TEETH",
  WeightyRattle: "WEIGHTY_RATTLE",
  StaleBiscuit: "STALE_BISCUIT",
  SewerSludge: "SEWER_SLUDGE",
  RustedNeedle: "RUSTED_NEEDLE",
  MadeleinesScarf: "MADELEINES_SCARF",
  VictorsSoldier: "VICTORS_SOLDIER",
  SpinningTop: "SPINNING_TOP",
  ForestStew: "FOREST_STEW",
  DropofPerfume: "DROP_OF_PERFUME",
  SilencingCloth: "SILENCING_CLOTH",
  IridescentPendant: "IRIDESCENT_PENDANT",
  TrickPouch: "TRICK_POUCH",
  MementoBlades: "MEMENTO_BLADES",
  KillingPartChords: "KILLING_PART_CHORDS",
  InfernoWires: "INFERNO_WIRES",
  TequilaMoonrock: "TEQUILA_MOONROCK",
  OnTargetSingle: "ON_TARGET_SINGLE",
  LuckyBlade: "LUCKY_BLADE",
  JiWoonsAutograph: "JI_WOONS_AUTOGRAPH",
  CagedHeartShoes: "CAGED_HEART_SHOES",
  WaitingforYouWatch: "WAITING_FOR_YOU_WATCH",
  RipperBrace: "RIPPER_BRACE",
  MelodiousMurder: "MELODIOUS_MURDER",
  FizzSpinSoda: "FIZZ_SPIN_SODA",
  BloodyBoa: "BLOODY_BOA",
  TrickBlades: "TRICK_BLADES",
  EdgeofRevivalAlbum: "EDGE_OF_REVIVAL_ALBUM",
  DiamondCufflinks: "DIAMOND_CUFFLINKS",
  CutThruUSingle: "CUT_THRU_U_SINGLE",
  IridescentPhotocard: "IRIDESCENT_PHOTOCARD",
  DeathThroesCompilation: "DEATH_THROES_COMPILATION",
  VisitorWristband: "VISITOR_WRISTBAND",
  STARSFieldCombatManual: "STARS_FIELD_COMBAT_MANUAL",
  DamagedSyringe: "DAMAGED_SYRINGE",
  BriansIntestine: "BRIANS_INTESTINE",
  ZombieHeart: "ZOMBIE_HEART",
  MikhailsEye: "MIKHAILS_EYES",
  MarvinsBlood: "MARVINS_BLOOD",
  AdrenalineInjector: "ADRENALINE_INJECTOR",
  AdminWristband: "ADMIN_WRISTBAND",
  TyrantGore: "TYRANT_GORE",
  TVirusSample: "T_VIRUS_SAMPLE",
  SerotoninInjector: "SEROTONIN_INJECTOR",
  PlantFourVines: "PLANT_43_VINES",
  LickerTongue: "LICKER_TONGUE",
  NeParasite: "NE_A_PARSITE",
  JillsSandwich: "JILLS_SANDWICH",
  DepletedInkRibbon: "DEPLETED_INK_RIBBON",
  BrokenRecoveryCoin: "BROKEN_RECOVERY_COIN",
  ShatteredSTARSBadge: "SHATTERED_STARS_BADGE",
  IridescentUmbrellaBadge: "IRIDESCENT_UMBRELLA_BADGE"
};
var KillerAddon = {
  TrapperGloves: "TRAPPER_GLOVES",
  StrongCoilSpring: "STRONG_COIL_SPRING",
  FourCoilSpringKit: "FOUR_COIL_SPRING_KIT",
  LogwoodDye: "LOGWOOD_DYE",
  SerratedJaws: "SERRATED_JAWS",
  TrapSetters: "TRAP_SETTERS",
  TrapperBag: "TRAPPER_BAG",
  RustedJaws: "RUSTED_JAWS",
  SecondaryCoil: "SECONDARY_COIL",
  TarBottle: "TAR_BOTTLE",
  WaxBrick: "WAX_BRICK",
  OilyCoil: "OILY_COIL",
  FasteningTools: "FASTENING_TOOLS",
  StitchedBag: "STITCHED_BAG",
  BloodyCoil: "BLOODY_COIL",
  IridescentStone: "IRIDESCENT_STONE",
  TheSerpentSoot: "THE_SERPENT_SOOT",
  TheHoundSoot: "THE_HOUND_SOOT",
  TheGhostSoot: "THE_GHOST_SOOT",
  TheBeastSoot: "THE_BEAST_SOOT",
  BoneClapper: "BONE_CLAPPER",
  BlinkMud: "BLINK_MUD",
  WindstormMud: "WINDSTORM_MUD",
  SwiftHuntMud: "SWIFT_HUNT_MUD",
  BlindWarriorMud: "BLIND_WARRIOR_MUD",
  WindstormWhite: "WINDSTORM_WHITE",
  SwiftHuntWhite: "SWIFT_HUNT_WHITE",
  ShadowDanceWhite: "SHADOW_DANCE_WHITE",
  BlinkWhite: "BLINK_WHITE",
  BlindWarriorWhite: "BLIND_WARRIOR_WHITE",
  WindstormBlood: "WINDSTORM_BLOOD",
  SwiftHuntBlood: "SWIFT_HUNT_BLOOD",
  ShadowDanceBlood: "SHADOW_DANCE_BLOOD",
  AllSeeingBlood: "ALL_SEEING_BLOOD",
  CoxcombedClapper: "COXCOMBED_CLAPPER",
  AllSeeingSpirit: "ALL_SEEING_SPIRIT",
  HeavyClutch: "HEAVY_CLUTCH",
  SpeedLimiter: "SPEED_LIMITER",
  JunkyardAirFilter: "JUNKYARD_AIR_FILTER",
  SteelToeBoots: "STEEL_TOE_BOOTS",
  PuncturedMuffler: "PUNCTURED_MUFFLER",
  BigBuckle: "BIG_BUCKLE",
  OffBrandMotorOil: "OFF_BRAND_MOTOR_OIL",
  DadsBoots: "DADS_BOOTS",
  DeathEngravings: "DEATH_ENGRAVINGS",
  MothersHelpers: "MOTHERS_HELPERS",
  LowKickbackChains: "LOW_KICKBACK_CHAINS",
  LeafyMash: "LEAFY_MASH",
  DoomEngravings: "DOOM_ENGRAVINGS",
  BlackGrease: "BLACK_GREASE",
  TunedCarburetor: "TUNED_CARBURETOR",
  SpikedBoots: "SPIKED_BOOTS",
  PighouseGloves: "PIGHOUSE_GLOVES",
  LoproChains: "LOPRO_CHAINS",
  IridescentBrick: "IRIDESCENT_BRICK",
  ApexMuffler: "APEX_MUFFLER",
  WoodenHorse: "WOODEN_HORSE",
  WhiteNitComb: "WHITE_NIT_COMB",
  MetalSpoon: "METAL_SPOON",
  BadManKeepsake: "BAD_MAN_KEEPSAKE",
  PocketWatch: "POCKET_WATCH",
  DullBracelet: "DULL_BRACELET",
  DarkCincture: "DARK_CINCTURE",
  CatatonicBoysTreasure: "CATATONIC_BOYS_TREASURE",
  SpasmodicBreath: "SPASMODIC_BREATH",
  HeavyPanting: "HEAVY_PANTING",
  FragileWheeze: "FRAGILE_WHEEZE",
  AtaxicRespiration: "ATAXIC_RESPIRATION",
  AnxiousGasp: "ANXIOUS_GASP",
  PlaidFlannel: "PLAID_FLANNEL",
  KavanaghsLastBreath: "KAVANAGHS_LAST_BREATH",
  JennersLastBreath: "JENNERS_LAST_BREATH",
  CampbellsLastBreath: "CAMPBELLS_LAST_BREATH",
  BadMansLastBreath: "BAD_MANS_LAST_BREATH",
  TornBookmark: "TORN_BOOKMARK",
  Matchbox: "MATCHBOX",
  TackyEarrings: "TACKY_EARRINGS",
  BoyfriendsMemo: "BOYFRIENDS_MEMO",
  BlondHair: "BLOND_HAIR",
  ReflectiveFragment: "REFLECTIVE_FRAGMENT",
  MemorialFlower: "MEMORIAL_FLOWER",
  Jewelry: "JEWELRY",
  HairBrush: "HAIR_BRUSH",
  GlassFragment: "GLASS_FRAGMENT",
  DeadRabbit: "DEAD_RABBIT",
  MirrorShard: "MIRROR_SHARD",
  JudithsJournal: "JUDITHS_JOURNAL",
  JewelryBox: "JEWELRY_BOX",
  JMyersMemorial: "J_MYERS_MEMORIAL",
  HairBow: "HAIR_BOW",
  VanityMirror: "VANITY_MIRROR",
  TombstonePiece: "TOMBSTONE_PIECE",
  ScratchedMirror: "SCRATCHED_MIRROR",
  LockofHair: "LOCK_OF_HAIR",
  JudithsTombstone: "JUDITHS_TOMBSTONE",
  FragrantTuftofHair: "FRAGRANT_TUFT_OF_HAIR",
  RopeNecklet: "ROPE_NECKLET",
  PowderedEggshell: "POWDERED_EGGSHELL",
  DeadFlyMud: "DEAD_FLY_MUD",
  BogWater: "BOG_WATER",
  PussyWillowCatkins: "PUSSY_WILLOW_CATKINS",
  HalfEggshell: "HALF_EGGSHELL",
  DragonflyWings: "DRAGONFLY_WINGS",
  CypressNecklet: "CYPRESS_NECKLET",
  BloodiedWater: "BLOODIED_WATER",
  WillowWreath: "WILLOW_WREATH",
  SwampOrchidNecklet: "SWAMP_ORCHID_NECKLET",
  DriedCicada: "DRIED_CICADA",
  CrackedTurtleEgg: "CRACKED_TURTLE_EGG",
  BloodiedMud: "BLOODIED_MUD",
  ScarredHand: "SCARRED_HAND",
  RustyShackles: "RUSTY_SHACKLES",
  GranmasHeart: "GRANMAS_HEART",
  DisfiguredEar: "DISFIGURED_EAR",
  WaterloggedShoe: "WATERLOGGED_SHOE",
  MintRag: "MINT_RAG",
  MoldyElectrode: "MOLDY_ELECTRODE",
  MapleKnight: "MAPLE_KNIGHT",
  OrderClassI: "ORDER_CLASS_I",
  CalmClassI: "CALM_CLASS_I",
  ScrappedTape: "SCRAPPED_TAPE",
  PolishedElectrode: "POLISHED_ELECTRODE",
  InterviewTape: "INTERVIEW_TAPE",
  RestraintClassIi: "RESTRAINT_CLASS_II",
  OrderClassIi: "ORDER_CLASS_II",
  DisciplineClassIi: "DISCIPLINE_CLASS_II",
  CalmClassIi: "CALM_CLASS_II",
  HighStimulusElectrode: "HIGH_STIMULUS_ELECTRODE",
  RestraintClassIii: "RESTRAINT_CLASS_III",
  DisciplineClassIii: "DISCIPLINE_CLASS_III",
  RestraintCartersNotes: "RESTRAINT_CARTERS_NOTES",
  OrderCartersNotes: "ORDER_CARTERS_NOTES",
  DisciplineCartersNotes: "DISCIPLINE_CARTERS_NOTES",
  CalmCartersNotes: "CALM_CARTERS_NOTES",
  IridescentKing: "IRIDESCENT_KING",
  IridescentQueen: "IRIDESCENT_QUEEN",
  CoarseStone: "COARSE_STONE",
  YellowedCloth: "YELLOWED_CLOTH",
  BandagedHaft: "BANDAGED_HAFT",
  AmanitaToxin: "AMANITA_TOXIN",
  WeightedHead: "WEIGHTED_HEAD",
  ShinyPin: "SHINY_PIN",
  OakHaft: "OAK_HAFT",
  MannaGrassBraid: "MANNA_GRASS_BRAID",
  LeatherLoop: "LEATHER_LOOP",
  RoseRoot: "ROSE_ROOT",
  DeerskinGloves: "DEERSKIN_GLOVES",
  VenomousConcoction: "VENOMOUS_CONCOCTION",
  RustyHead: "RUSTY_HEAD",
  FlowerBabushka: "FLOWER_BABUSHKA",
  InfantryBelt: "INFANTRY_BELT",
  GlowingConcoction: "GLOWING_CONCOCTION",
  BegrimedHead: "BEGRIMED_HEAD",
  WoodenFox: "WOODEN_FOX",
  IridescentHead: "IRIDESCENT_HEAD",
  SoldiersPuttee: "SOLDIERS_PUTTEE",
  VegetableOil: "VEGETABLE_OIL_C",
  SparkPlug: "SPARK_PLUG_C",
  ChainsawFile: "CHAINSAW_FILE_C",
  PrimerBulb: "PRIMER_BULB_C",
  LongGuideBar: "LONG_GUIDE_BAR_C",
  KnifeScratches: "KNIFE_SCRATCHES",
  HomemadeMuffler: "HOMEMADE_MUFFLER_C",
  Chili: "CHILI",
  TheGrease: "THE_GREASE",
  TheBeastsMarks: "THE_BEASTS_MARKS",
  GrislyChain: "GRISLY_CHAIN",
  ShopLubricant: "SHOP_LUBRICANT_C",
  BegrimedChains: "BEGRIMED_CHAINS_C",
  DepthGaugeRake: "DEPTH_GUAGE_RAKE",
  LightChassis: "LIGHT_CHASSIS",
  RustedChain: "RUSTED_CHAIN",
  AwardWinningChili: "AWARD_WINNING_CHILI",
  IridescentFlesh: "IRIDESCENT_FLESH",
  CarburetorTuningGuide: "CARBURETOR_TUNING_GUIDE",
  WoolShirt: "WOOL_SHIRT",
  SheepBlock: "SHEEP_BLOCK",
  KidsDrawing: "KIDS_DRAWING",
  GardenRake: "GARDEN_RAKE",
  PrototypeClaws: "PROTOTYPE_CLAWS",
  OutdoorRope: "OUTDOOR_ROPE",
  NancysSketch: "NANCYS_SKETCH",
  GreenDress: "GREEN_DRESS",
  CatBlock: "CAT_BLOCK",
  UnicornBlock: "UNICORN_BLOCK",
  SwingChains: "SWING_CHAINS",
  NancysMasterpiece: "NANCYS_MASTERPIECE",
  JumpRope: "JUMP_ROPE",
  BlueDress: "BLUE_DRESS",
  PillBottle: "PILL_BOTTLE",
  PaintThinner: "PAINT_THINNER",
  ClassPhoto: "CLASS_PHOTO",
  ZBlock: "Z_BLOCK",
  RedPaintBrush: "RED_PAINT_BRUSH",
  BlackBox: "BLACK_BOX",
  WorkshopGrease: "WORKSHOP_GREASE",
  ShatteredSyringe: "SHATTERED_SYRINGE",
  JohnsMedicalFile: "JOHNS_MEDICAL_FILE",
  CombatStraps: "COMBAT_STRAPS",
  VideoTape: "VIDEO_TAPE",
  UtilityBlades: "UTILITY_BLADES",
  RazorWires: "RAZOR_WIRES",
  LastWill: "LAST_WILL",
  FaceMask: "FACE_MASK",
  SlowReleaseToxin: "SLOW_RELEASE_TOXIN",
  RustyAttachments: "RUSTY_ATTACHMENTS",
  JigsawsSketch: "JIGSAWS_SKETCH",
  InterlockingRazor: "INTERLOCKING_RAZOR",
  BagofGears: "BAG_OF_GEARS",
  TamperedTimer: "TAMPERED_TIMER",
  JigsawsAnnotatedPlan: "JIGSAWS_ANNOTATED_PLAN",
  CrateofGears: "CRATE_OF_GEARS",
  AmandasSecret: "AMANDAS_SECRET",
  RuleSetNoTwo: "RULES_SET_NO_2",
  AmandasLetter: "AMANDAS_LETTER",
  SmellyInnerSoles: "SMELLY_INNER_SOLES",
  RobinFeather: "ROBIN_FEATHER",
  FingerlessParadeGloves: "FINGERLESS_PARADE_GLOVES",
  PartyBottle: "PARTY_BOTTLE",
  ThickCorkStopper: "THICK_CORK_STOPPER",
  StickySodaBottle: "STICKY_SODA_BOTTLE",
  StarlingFeather: "STARLING_FEATHER",
  SolventJug: "SOLVENT_JUG",
  KeroseneCan: "KEROSENE_CAN",
  VhsPorn: "VHS_PORN",
  SulfuricAcidVial: "SULFURIC_ACID_VIAL",
  FlaskofBleach: "FLASK_OF_BLEACH",
  SpiritofHartshorn: "SPIRIT_OF_HARTSHORN",
  BottleofChloroform: "BOTTLE_OF_CHLOROFORM",
  GarishMakeupKit: "GARISH_MAKEUP_KIT",
  CheapGinBottle: "CHEAP_GIN_BOTTLE",
  EtherOnevol: "ETHER_15_VOL",
  CigarBox: "CIGAR_BOX",
  TattoosMiddleFinger: "TATTOOS_MIDDLE_FINGER",
  RedheadsPinkyFinger: "REDHEADS_PINKY_FINGER",
  Zri: "ZORI",
  ShiawaseAmulet: "SHIAWASE_AMULET",
  OrigamiCrane: "ORIGAMI_CRANE",
  GiftedBambooComb: "GIFTED_BAMBOO_COMB",
  WhiteHairRibbon: "WHITE_HAIR_RIBBON",
  RinsBrokenWatch: "RINS_BROKEN_WATCH",
  MuddySportsDayCap: "MUDDY_SPORTS_DAY_CAP",
  KaiunTalisman: "KAIUN_TALISMAN",
  JuniperBonsai: "JUNIPER_BONSAI",
  RustyFlute: "RUSTY_FLUTE",
  KatsumoriTalisman: "KATSUMORI_TALISMAN",
  KatanaTsuba: "KATANA_TSUBA",
  DirtyUwabaki: "DIRTY_UWABAKI",
  BloodyHairBrooch: "BLOODY_HAIR_BROOCH",
  YakuyokeAmulet: "YAKUYOKE_AMULET",
  WakizashiSaya: "WAKIZASHI_SAYA",
  PrayerBeadsBracelet: "PRAYER_BEADS_BRACELET",
  DriedCherryBlossom: "DRIED_CHERRY_BLOSSOM",
  MotherDaughterRing: "MOTHER_DAUGHTER_RING",
  FathersGlasses: "FATHERS_GLASSES",
  SmileyFacePin: "SMILEY_FACE_PIN",
  ScratchedRuler: "SCRATCHED_RULER",
  MischiefList: "MISCHIEF_LIST",
  FriendshipBracelet: "FRIENDSHIP_BRACELET",
  NeverSleepPills: "NEVERSLEEP_PILLS",
  MuralSketch: "MURAL_SKETCH",
  JuliesMixTape: "JULIES_MIX_TAPE",
  EtchedRuler: "ETCHED_RULER",
  DefacedSmileyPin: "DEFACED_SMILEY_PIN",
  TheLegionPin: "THE_LEGION_PIN",
  SusiesMixTape: "SUSIES_MIX_TAPE",
  StolenSketchBook: "STOLEN_SKETCH_BOOK",
  NastyBlade: "NASTY_BLADE",
  JoeysMixTape: "JOEYS_MIX_TAPE",
  StabWoundsStudy: "STAB_WOUNDS_STUDY",
  FranksMixTape: "FRANKS_MIX_TAPE",
  FilthyBlade: "FILTHY_BLADE",
  ColdDirt: "COLD_DIRT",
  IridescentButton: "IRIDESCENT_BUTTON",
  FumingMixTape: "FUMING_MIX_TAPE",
  PrayerTabletFragment: "PRAYER_TABLET_FRAGMENT",
  OlibanumIncense: "OLIBANUM_INCENSE",
  LimestoneSeal: "LIMESTONE_SEAL",
  HealingSalve: "HEALING_SALVE",
  ProphylacticAmulet: "PROPHYLACTIC_AMULET",
  PotentTincture: "POTENT_TINCTURE",
  HematiteSeal: "HEMATITE_SEAL",
  Emeticpotion: "EMETIC_POTION",
  BlessedApple: "BLESSED_APPLE",
  RubbingOil: "RUBBING_OIL",
  InfectedEmetic: "INFECTED_EMETIC",
  IncensedOintment: "INCENSED_OINTMENT",
  ExorcismAmulet: "EXORCISM_AMULET",
  AshenApple: "ASHEN_APPLE",
  WorshipTablet: "WORSHIP_TABLET",
  VileEmetic: "VILE_EMETIC",
  SeveredToe: "SEVERED_TOE",
  DevoteesAmulet: "DEVOTEES_AMULET",
  IridescentSeal: "IRIDESCENT_SEAL",
  BlackIncense: "BLACK_INCENSE",
  Philly: "PHILLY",
  WalleyesMatchbook: "WALLEYES_MATCHBOOK",
  HeadlinesCutouts: "HEADLINES_CUTOUTS",
  CheapCologne: "CHEAP_COLOGNE",
  TelephotoLens: "TELEPHOTO_LENS",
  OlsensJournal: "OLSENS_JOURNAL",
  OlsensAddressBook: "OLSENS_ADDRESS_BOO",
  MarkedMap: "MARKED_MAP",
  CinchStraps: "CINCH_STRAPS",
  OlsensWallet: "OLSENS_WALLET",
  LeatherKnifeSheath: "LEATHER_KNIFE_SHEATH",
  LastingPerfume: "LASTING_PERFUME",
  KnifeBeltClip: "KNIFE_BELT_CLIP",
  ChewedPen: "CHEWED_PEN",
  VictimsDetailedRoutine: "VICTIMS_DETAILED_ROUTINE",
  NightVisionMonocular: "NIGHT_VISION_MONOCULAR",
  DropLegKnifeSheath: "DROP_LEG_KNIFE_SHEATH",
  DriversLicense: "DRIVERS_LICENSE",
  GhostFaceCaughtonTape: "CAUGHT_ON_TAPE",
  OutdoorSecurityCamera: "OUTDOOR_SECURITY_CAMERA",
  RottenPumpkin: "ROTTEN_PUMPKIN",
  RatTail: "RAT_TAIL",
  RatLiver: "RAT_LIVER",
  BlackHeart: "BLACK_HEART",
  ViscousWebbing: "VISCOUS_WEBBING",
  StickyLining: "STICKY_LINING",
  RottenGreenTripe: "ROTTEN_GREEN_TRIPE",
  MewsGuts: "MEWS_GUTS",
  BarbsGlasses: "BARBS_GLASSES",
  VioletWaxcap: "VIOLET_WAXCAP",
  ThornyVines: "THORNY_VINES",
  ElevensSoda: "ELEVENS_SODA",
  DeerLung: "DEER_LUNG",
  BrassCaseLighter: "BRASS_CASE_LIGHTER",
  VermillionWebcap: "VERMILLION_WEBCAP",
  UpsideDownResin: "UPSIDE_DOWN_RESIN",
  UnknownEgg: "UNKNOWN_EGG",
  LifeguardWhistle: "LIFEGUARD_WHISTLE",
  RedMoss: "RED_MOSS",
  LeproseLichen: "LEPROSE_LICHEN",
  YakuYokeTalisman: "YAKUYOKE_TALISMAN",
  RottingRope: "ROTTING_ROPE",
  CrackedSakazuki: "CRACKED_SAKAZUKI",
  BlackenedToenail: "BLACKENED_TOENAIL",
  PolishedMaedate: "POLISHED_MAEDATE",
  InkLion: "INK_LION",
  ChippedSaihai: "CHIPPED_SAIHAI",
  ChildsWoodenSword: "CHILDS_WOODEN_SWORD",
  BloodySash: "BLOODY_SASH",
  YamaokaSashimono: "YAMAOKA_SASHIMONO",
  WoodenOniMask: "WOODEN_ONI_MASK",
  ShatteredWakizashi: "SHATTERED_WAKAZASHI",
  ScalpedTopknot: "SCALPED_TOPKNOT",
  KanaiAnzenTalisman: "KANAIANZEN_TALISMAN",
  TearSoakedTenugui: "TEAR_SOAKED_TENUGUI",
  SplinteredHull: "SPLINTERED_HULL",
  LionFang: "LION_FANG",
  AkitosCrutch: "AKITOS_CRUTCH",
  RenjirosBloodyGlove: "RENJIROS_BLOODY_GLOVE",
  IridescentFamilyCrest: "IRIDESCENT_FAMILY_CREST",
  SpitPolishRag: "SPIT_POLISH_RAG",
  SnakeOil: "SNAKE_OIL",
  RicketyChain: "RICKETY_CHAIN",
  ModifiedAmmoBelt: "MODIFIED_AMMO_BELT",
  RustedSpike: "RUSTED_SPIKE",
  PoisonOakLeaves: "POISON_OAK_LEAVES",
  MarshalsBadge: "MARSHALS_BADGE",
  JawSmasher: "JAW_SMASHER",
  ChewingTobacco: "CHEWING_TOBACCO",
  WardensKeys: "WARDENS_KEYS",
  WantedPoster: "WANTED_POSTER",
  TinOilCan: "TIN_OIL_CAN",
  HoneyLocustThorns: "HONEY_LOCUST_THORNS",
  BayshoresGoldTooth: "BAYSHORES_GOLD_TOOTH",
  PrisonChain: "PRISON_CHAIN",
  GoldCreekWhiskey: "GOLD_CREEK_WHISKEY",
  BayshoresCigar: "BAYSHORES_CIGAR",
  BarbedWire: "BARBED_WIRE",
  IridescentCoin: "IRIDESCENT_COIN",
  HellshireIron: "HELLSHIRE_IRON",
  LeadRing: "LEAD_RING",
  DeadButterfly: "DEAD_BUTTERFLY",
  CopperRing: "COPPER_RING",
  BlackStrap: "BLACK_STRAP",
  WaxDoll: "WAX_DOLL",
  Spearhead: "SPEARHEAD",
  LeopardPrintFabric: "LEOPARD_PRINT_FABRIC",
  ForgottenVideotape: "FORGOTTEN_VIDEOTAPE",
  CinderellaMusicBox: "CINDERELLA_MUSIC_BOX",
  ValtielSectPhotograph: "VALTIEL_SECT_PHOTOGRAPH",
  TabletoftheOppressor: "TABLET_OF_THE_OPPRESSOR",
  MistyDayRemainsofJudgment: "MISTY_DAY_REMAINS_OF_JUDGMENT",
  MannequinFoot: "MANNEQUIN_FOOT",
  BurningManPainting: "BURNING_MAN_PAINTING",
  ScarletEgg: "SCARLET_EGG",
  RustColoredEgg: "RUST_COLORED_EGG",
  LostMemoriesBook: "LOST_MEMORIES_BOOK",
  CrimsonCeremonyBook: "CRIMSON_CEREMONY_COOK",
  ObsidianGoblet: "OBSIDIAN_GOBLET",
  IridescentSealofMetatron: "IRIDESCENT_SEAL_OF_METATRON",
  PlaceboTablet: "PLACEBO_TABLET",
  Foxglove: "FOXGLOVE",
  CompoundSeven: "COMPOUND_SEVEN",
  ChippedMonocle: "CHIPPED_MONOCLE",
  ShreddedNotes: "SHREDDED_NOTES",
  PustulaDust: "PUSTULA_DUST",
  PlagueBile: "PLAGUE_BILE",
  CankerThorn: "CANKER_THORN",
  BlightedRat: "BLIGHTED_RAT",
  UmbraSalts: "UMBRA_SALTS",
  RoseTonic: "ROSE_TONIC",
  CompoundTwentyOne: "COMPOUND_TWENTY_ONE",
  BlightedCrow: "BLIGHTED_CROW",
  AdrenalineVial: "ADRENALINE_VIAL",
  VigosJournal: "VIGOS_JOURNAL",
  SummoningStone: "SUMMONING_STONE",
  SoulChemical: "SOUL_CHEMICAL",
  AlchemistsRing: "ALCHEMISTS_RING",
  IridescentBlightTag: "IRIDESCENT_BLIGHT_TAG",
  CompoundThirtyThree: "COMPOUND_THIRTY_THREE",
  ToySword: "TOY_SWORD",
  TinyFingernail: "TINY_FINGERNAIL",
  SouredMilk: "SOURED_MILK",
  CatFigurine: "CAT_FIGURINE",
  MadeleinesGlove: "MADELEINES_GLOVE",
  CeremonialCandelabrum: "CEREMONIAL_CANDELABRUM",
  CatsEye: "CATS_EYE",
  BloodyBlackHood: "BLOODY_BLACK_HOOD",
  BabyTeeth: "BABY_TEETH",
  WeightyRattle: "WEIGHTY_RATTLE",
  StaleBiscuit: "STALE_BISCUIT",
  SewerSludge: "SEWER_SLUDGE",
  RustedNeedle: "RUSTED_NEEDLE",
  MadeleinesScarf: "MADELEINES_SCARF",
  VictorsSoldier: "VICTORS_SOLDIER",
  SpinningTop: "SPINNING_TOP",
  ForestStew: "FOREST_STEW",
  DropofPerfume: "DROP_OF_PERFUME",
  SilencingCloth: "SILENCING_CLOTH",
  IridescentPendant: "IRIDESCENT_PENDANT",
  TrickPouch: "TRICK_POUCH",
  MementoBlades: "MEMENTO_BLADES",
  KillingPartChords: "KILLING_PART_CHORDS",
  InfernoWires: "INFERNO_WIRES",
  TequilaMoonrock: "TEQUILA_MOONROCK",
  OnTargetSingle: "ON_TARGET_SINGLE",
  LuckyBlade: "LUCKY_BLADE",
  JiWoonsAutograph: "JI_WOONS_AUTOGRAPH",
  CagedHeartShoes: "CAGED_HEART_SHOES",
  WaitingforYouWatch: "WAITING_FOR_YOU_WATCH",
  RipperBrace: "RIPPER_BRACE",
  MelodiousMurder: "MELODIOUS_MURDER",
  FizzSpinSoda: "FIZZ_SPIN_SODA",
  BloodyBoa: "BLOODY_BOA",
  TrickBlades: "TRICK_BLADES",
  EdgeofRevivalAlbum: "EDGE_OF_REVIVAL_ALBUM",
  DiamondCufflinks: "DIAMOND_CUFFLINKS",
  CutThruUSingle: "CUT_THRU_U_SINGLE",
  IridescentPhotocard: "IRIDESCENT_PHOTOCARD",
  DeathThroesCompilation: "DEATH_THROES_COMPILATION",
  VisitorWristband: "VISITOR_WRISTBAND",
  STARSFieldCombatManual: "STARS_FIELD_COMBAT_MANUAL",
  DamagedSyringe: "DAMAGED_SYRINGE",
  BriansIntestine: "BRIANS_INTESTINE",
  ZombieHeart: "ZOMBIE_HEART",
  MikhailsEye: "MIKHAILS_EYES",
  MarvinsBlood: "MARVINS_BLOOD",
  AdrenalineInjector: "ADRENALINE_INJECTOR",
  AdminWristband: "ADMIN_WRISTBAND",
  TyrantGore: "TYRANT_GORE",
  TVirusSample: "T_VIRUS_SAMPLE",
  SerotoninInjector: "SEROTONIN_INJECTOR",
  PlantFourVines: "PLANT_43_VINES",
  LickerTongue: "LICKER_TONGUE",
  NeParasite: "NE_A_PARSITE",
  JillsSandwich: "JILLS_SANDWICH",
  DepletedInkRibbon: "DEPLETED_INK_RIBBON",
  BrokenRecoveryCoin: "BROKEN_RECOVERY_COIN",
  ShatteredSTARSBadge: "SHATTERED_STARS_BADGE",
  IridescentUmbrellaBadge: "IRIDESCENT_UMBRELLA_BADGE"
};
var SurvivorAddon = {
  WideLens: "WIDE_LENS",
  PowerBulb: "POWER_BULB",
  LeatherGrip: "LEATHER_GRIP",
  Battery: "BATTERY",
  TirOptic: "TIR_OPTIC",
  RubberGrip: "RUBBER_GRIP",
  LowAmpFilament: "LOW_AMP_FILAMENT",
  HeavyDutyBattery: "HEAVY_DUTY_BATTERY",
  FocusLens: "FOCUS_LENS",
  LongLifeBattery: "LONG_LIFE_BATTERY",
  IntenseHalogen: "INTENSE_HALOGEN",
  HighEndSapphirelens: "HIGH_END_SAPPHIRE_LENS",
  OddBulb: "ODD_BULB",
  PrayerRope: "PRAYER_ROPE",
  ScratchedPearl: "SCRATCHED_PEARL",
  PrayerBeads: "PRAYER_BEADS",
  ErodedToken: "ERODED_TOKEN",
  GoldToken: "GOLD_TOKEN",
  WeavedRing: "WEAVED_RING",
  MilkyGlass: "MILKY_GLASS",
  BloodAmber: "BLOOD_AMBER",
  MapAddendum: "MAP_ADDENDUM",
  YellowWire: "YELLOW_WIRE",
  UnusualStamp: "UNUSUAL_STAMP",
  RetardantJelly: "RETARDANT_JELLY",
  RedTwine: "RED_TWINE",
  GlassBead: "GLASS_BEAD",
  OddStamp: "ODD_STAMP",
  BlackSilkCord: "BLACK_SILK_CORD",
  CrystalBead: "CRYSTAL_BEAD",
  RubberGloves: "RUBBER_GLOVES",
  ButterflyTape: "BUTTERFLY_TAPE",
  Bandages: "BANDAGES",
  Sponge: "SPONGE",
  SelfAdherentWrap: "SELF_ADHERENT_WRAP",
  NeedleThread: "NEEDLE_AND_THREAD",
  MedicalScissors: "MEDICAL_SCISSORS",
  GauzeRoll: "GAUZE_ROLL",
  SurgicalSuture: "SURGICAL_SUTURE",
  GelDressings: "GEL_DRESSINGS",
  AbdominalDressing: "ABDOMINAL_DRESSING",
  StypticAgent: "STYPTIC_AGENT",
  AntiHemorrhagicSyringe: "ANTI_HEMORRHAGIC_SYRINGE",
  SpringClamp: "SPRING_CLAMP",
  Scraps: "SCRAPS",
  CleanRag: "CLEAN_RAG",
  WireSpool: "WIRE_SPOOL",
  SocketSwivels: "SOCKET_SWIVELS",
  ProtectiveGloves: "PROTECTIVE_GLOVES",
  Instructions: "INSTRUCTIONS",
  GripWrench: "GRIP_WRENCH",
  CuttingWire: "CUTTING_WIRE",
  Hacksaw: "HACKSAW",
  BrandNewPart: "BRAND_NEW_PART",
  UniqueWeddingRing: "UNIQUE_WEDDING_RING"
};
var Perk = {
  BitterMurmur: "BITTER_MURMUR",
  Deerstalker: "DEERSTALKER",
  Distressing: "DISTRESSING",
  Insidious: "INSIDIOUS",
  HexNoOneEscapesDeath: "HEX_NO_ONE_ESCAPES_DEATH",
  HexThrilloftheHunt: "HEX_THRILL_OF_THE_HUNT",
  MonstrousShrine: "MONSTROUS_SHRINE",
  SloppyButcher: "SLOPPY_BUTCHER",
  SpiesfromtheShadows: "SPIES_FROM_THE_SHADOWS",
  Unrelenting: "UNRELENTING",
  Whispers: "WHISPERS",
  Stridor: "STRIDOR",
  Thanatophobia: "THANATOPHOBIA",
  ANursesCalling: "A_NURSES_CALLING",
  UnnervingPresence: "UNNERVING_PRESENCE",
  BrutalStrength: "BRUTAL_STRENGTH",
  Agitation: "AGITATION",
  Predator: "PREDATOR",
  Bloodhound: "BLOODHOUND",
  Shadowborn: "SHADOWBORN",
  Enduring: "ENDURING",
  Lightborn: "LIGHTBORN",
  Tinkerer: "TINKERER",
  Savethebestforlast: "SAVE_THE_BEST_FOR_LAST",
  Playwithyourfood: "PLAY_WITH_YOUR_FOOD",
  DyingLight: "DYING_LIGHT",
  HexTheThirdSeal: "HEX_THE_THIRD_SEAL",
  HexRuin: "HEX_RUIN",
  HexDevourHope: "HEX_DEVOUR_HOPE",
  OverwhelmingPresence: "OVERWHELMING_PRESENCE",
  MonitorAbuse: "MONITOR_AND_ABUSE",
  Overcharge: "OVERCHARGE",
  BeastofPrey: "BEAST_OF_PREY",
  TerritorialImperative: "TERRITORIAL_IMPERATIVE",
  HexHuntressLullaby: "HEX_HUNTRESS_LULLABY",
  KnockOut: "KNOCK_OUT",
  BarbecueChili: "BARBECUE_AND_CHILI",
  FranklinsDemise: "FRANKLINS_DEMISE",
  FireUp: "FIRE_UP",
  RememberMe: "REMEMBER_ME",
  BloodWarden: "BLOOD_WARDEN",
  HangmansTrick: "HANGMANS_TRICK",
  Surveillance: "SURVEILLANCE",
  MakeyourChoice: "MAKE_YOUR_CHOICE",
  IronGrasp: "IRON_GRASP",
  Coulrophobia: "COULROPHOBIA",
  PopGoestheWeasel: "POP_GOES_THE_WEASEL",
  Bamboozle: "BAMBOOZLE",
  SpiritFury: "SPIRIT_FURY",
  HexHauntedGround: "HEX_HAUNTED_GROUND",
  Rancor: "RANCOR",
  Discordance: "DISCORDANCE",
  MadGrit: "MAD_GRIT",
  IronMaiden: "IRON_MAIDEN",
  CorruptIntervention: "CORRUPT_INTERVENTION",
  InfectiousFright: "INFECTIOUS_FRIGHT",
  DarkDevotion: "DARK_DEVOTION",
  ImAllEars: "IM_ALL_EARS",
  ThrillingTremors: "THRILLING_TREMORS",
  FurtiveChase: "FURTIVE_CHASE",
  Surge: "SURGE",
  Mindbreaker: "MINDBREAKER",
  CruelLimits: "CRUEL_LIMITS",
  ZanshinTactics: "ZANSHIN_TACTICS",
  BloodEcho: "BLOOD_ECHO",
  Nemesis: "NEMESIS",
  Gearhead: "GEARHEAD",
  DeadMansSwitch: "DEAD_MANS_SWITCH",
  HexRetribution: "HEX_RETRIBUTION",
  ForcedPenance: "FORCED_PENANCE",
  TrailofTorment: "TRAIL_OF_TORMENT",
  Deathbound: "DEATHBOUND",
  DragonsGrip: "DRAGONS_GRIP",
  HexBloodFavor: "HEX_BLOOD_FAVOR",
  HexUndying: "HEX_UNDYING",
  Hoarder: "HOARDER",
  Oppression: "OPPRESSION",
  CoupdeGrce: "COUP_DE_GRACE",
  Starstruck: "STARSTRUCK",
  HexCrowdControl: "HEX_CROWD_CONTROL",
  NoWayOut: "NO_WAY_OUT",
  LethalPursuer: "LETHAL_PURSUER",
  Hysteria: "HYSTERIA",
  Eruption: "ERUPTION",
  DarkSense: "DARK_SENSE",
  DejaVu: "DEJA_VU",
  Hope: "HOPE",
  Kindred: "KINDRED",
  Lightweight: "LIGHTWEIGHT",
  NoOneLeftBehind: "NO_ONE_LEFT_BEHIND",
  PlunderersInstinct: "PLUNDERERS_INSTINCT",
  Premonition: "PREMONITION",
  Resilience: "RESILIENCE",
  SlipperyMeat: "SLIPPERY_MEAT",
  SmallGame: "SMALL_GAME",
  SpineChill: "SPINE_CHILL",
  ThisIsNotHappening: "THIS_IS_NOT_HAPPENING",
  Wellmakeit: "WELL_MAKE_IT",
  Bond: "BOND",
  ProveThyself: "PROVE_THYSELF",
  Leader: "LEADER",
  QuickQuiet: "QUICK_AND_QUIET",
  SprintBurst: "SPRINT_BURST",
  Adrenaline: "ADRENALINE",
  Empathy: "EMPATHY",
  BotanyKnowledge: "BOTANY_KNOWLEDGE",
  SelfCare: "SELF_CARE",
  IronWill: "IRON_WILL",
  CalmSpirit: "CALM_SPIRIT",
  Saboteur: "SABOTEUR",
  BalancedLanding: "BALANCED_LANDING",
  UrbanEvasion: "URBAN_EVASION",
  Streetwise: "STREETWISE",
  LeftBehind: "LEFT_BEHIND",
  BorrowedTime: "BORROWED_TIME",
  Unbreakable: "UNBREAKABLE",
  WereGonnaLiveForever: "WERE_GONNA_LIVE_FOREVER",
  DeadHard: "DEAD_HARD",
  NoMither: "NO_MITHER",
  SoleSurvivor: "SOLE_SURVIVOR",
  ObjectofObsession: "OBJECT_OF_OBSESSION",
  DecisiveStrike: "DECISIVE_STRIKE",
  OpenHanded: "OPEN_HANDED",
  UptheAnte: "UP_THE_ANTE",
  AceintheHole: "ACE_IN_THE_HOLE",
  Technician: "TECHNICIAN",
  Lithe: "LITHE",
  Alert: "ALERT",
  WakeUp: "WAKE_UP",
  Pharmacy: "PHARMACY",
  Vigil: "VIGIL",
  Tenacity: "TENACITY",
  DetectivesHunch: "DETECTIVES_HUNCH",
  StakeOut: "STAKE_OUT",
  DanceWithMe: "DANCE_WITH_ME",
  WindowsofOpportunity: "WINDOWS_OF_OPPORTUNITY",
  BoilOver: "BOIL_OVER",
  Diversion: "DIVERSION",
  Deliverance: "DELIVERANCE",
  Autodidact: "AUTODIDACT",
  Breakdown: "BREAKDOWN",
  Aftercare: "AFTERCARE",
  Distortion: "DISTORTION",
  Solidarity: "SOLIDARITY",
  Poised: "POISED",
  HeadOn: "HEAD_ON",
  FlipFlop: "FLIP_FLOP",
  BuckleUp: "BUCKLE_UP",
  MettleofMan: "METTLE_OF_MAN",
  BetterTogether: "BETTER_TOGETHER",
  Fixated: "FIXATED",
  InnerStrength: "INNER_STRENGTH",
  Babysitter: "BABYSITTER",
  Camaraderie: "CAMARADERIE",
  SecondWind: "SECOND_WIND",
  LuckyBreak: "LUCKY_BREAK",
  AnyMeansNecessary: "ANY_MEANS_NECESSARY",
  Breakout: "BREAKOUT",
  OfftheRecord: "OFF_THE_RECORD",
  RedHerring: "RED_HERRING",
  ForthePeople: "FOR_THE_PEOPLE",
  SoulGuard: "SOUL_GUARD",
  BloodPact: "BLOOD_PACT",
  RepressedAlliance: "REPRESSED_ALLIANCE",
  Visionary: "VISIONARY",
  DesperateMeasures: "DESPERATE_MEASURES",
  BuilttoLast: "BUILT_TO_LAST",
  Appraisal: "APPRAISAL",
  Deception: "DECEPTION",
  PowerStruggle: "POWER_STRUGGLE",
  FastTrack: "FAST_TRACK",
  SmashHit: "SMASH_HIT",
  SelfPreservation: "SELF_PRESERVATION",
  Counterforce: "COUNTERFORCE",
  Resurgence: "RESURGENCE",
  BlastMine: "BLAST_MINE",
  BitetheBullet: "BITE_THE_BULLET",
  Flashbang: "FLASHBANG",
  RookieSpirit: "ROOKIE_SPIRIT"
};
var KillerPerk = {
  BitterMurmur: "BITTER_MURMUR",
  Deerstalker: "DEERSTALKER",
  Distressing: "DISTRESSING",
  Insidious: "INSIDIOUS",
  HexNoOneEscapesDeath: "HEX_NO_ONE_ESCAPES_DEATH",
  HexThrilloftheHunt: "HEX_THRILL_OF_THE_HUNT",
  MonstrousShrine: "MONSTROUS_SHRINE",
  SloppyButcher: "SLOPPY_BUTCHER",
  SpiesfromtheShadows: "SPIES_FROM_THE_SHADOWS",
  Unrelenting: "UNRELENTING",
  Whispers: "WHISPERS",
  Stridor: "STRIDOR",
  Thanatophobia: "THANATOPHOBIA",
  ANursesCalling: "A_NURSES_CALLING",
  UnnervingPresence: "UNNERVING_PRESENCE",
  BrutalStrength: "BRUTAL_STRENGTH",
  Agitation: "AGITATION",
  Predator: "PREDATOR",
  Bloodhound: "BLOODHOUND",
  Shadowborn: "SHADOWBORN",
  Enduring: "ENDURING",
  Lightborn: "LIGHTBORN",
  Tinkerer: "TINKERER",
  Savethebestforlast: "SAVE_THE_BEST_FOR_LAST",
  Playwithyourfood: "PLAY_WITH_YOUR_FOOD",
  DyingLight: "DYING_LIGHT",
  HexTheThirdSeal: "HEX_THE_THIRD_SEAL",
  HexRuin: "HEX_RUIN",
  HexDevourHope: "HEX_DEVOUR_HOPE",
  OverwhelmingPresence: "OVERWHELMING_PRESENCE",
  MonitorAbuse: "MONITOR_AND_ABUSE",
  Overcharge: "OVERCHARGE",
  BeastofPrey: "BEAST_OF_PREY",
  TerritorialImperative: "TERRITORIAL_IMPERATIVE",
  HexHuntressLullaby: "HEX_HUNTRESS_LULLABY",
  KnockOut: "KNOCK_OUT",
  BarbecueChili: "BARBECUE_AND_CHILI",
  FranklinsDemise: "FRANKLINS_DEMISE",
  FireUp: "FIRE_UP",
  RememberMe: "REMEMBER_ME",
  BloodWarden: "BLOOD_WARDEN",
  HangmansTrick: "HANGMANS_TRICK",
  Surveillance: "SURVEILLANCE",
  MakeyourChoice: "MAKE_YOUR_CHOICE",
  IronGrasp: "IRON_GRASP",
  Coulrophobia: "COULROPHOBIA",
  PopGoestheWeasel: "POP_GOES_THE_WEASEL",
  Bamboozle: "BAMBOOZLE",
  SpiritFury: "SPIRIT_FURY",
  HexHauntedGround: "HEX_HAUNTED_GROUND",
  Rancor: "RANCOR",
  Discordance: "DISCORDANCE",
  MadGrit: "MAD_GRIT",
  IronMaiden: "IRON_MAIDEN",
  CorruptIntervention: "CORRUPT_INTERVENTION",
  InfectiousFright: "INFECTIOUS_FRIGHT",
  DarkDevotion: "DARK_DEVOTION",
  ImAllEars: "IM_ALL_EARS",
  ThrillingTremors: "THRILLING_TREMORS",
  FurtiveChase: "FURTIVE_CHASE",
  Surge: "SURGE",
  Mindbreaker: "MINDBREAKER",
  CruelLimits: "CRUEL_LIMITS",
  ZanshinTactics: "ZANSHIN_TACTICS",
  BloodEcho: "BLOOD_ECHO",
  Nemesis: "NEMESIS",
  Gearhead: "GEARHEAD",
  DeadMansSwitch: "DEAD_MANS_SWITCH",
  HexRetribution: "HEX_RETRIBUTION",
  ForcedPenance: "FORCED_PENANCE",
  TrailofTorment: "TRAIL_OF_TORMENT",
  Deathbound: "DEATHBOUND",
  DragonsGrip: "DRAGONS_GRIP",
  HexBloodFavor: "HEX_BLOOD_FAVOR",
  HexUndying: "HEX_UNDYING",
  Hoarder: "HOARDER",
  Oppression: "OPPRESSION",
  CoupdeGrce: "COUP_DE_GRACE",
  Starstruck: "STARSTRUCK",
  HexCrowdControl: "HEX_CROWD_CONTROL",
  NoWayOut: "NO_WAY_OUT",
  LethalPursuer: "LETHAL_PURSUER",
  Hysteria: "HYSTERIA",
  Eruption: "ERUPTION"
};
var SurvivorPerk = {
  DarkSense: "DARK_SENSE",
  DejaVu: "DEJA_VU",
  Hope: "HOPE",
  Kindred: "KINDRED",
  Lightweight: "LIGHTWEIGHT",
  NoOneLeftBehind: "NO_ONE_LEFT_BEHIND",
  PlunderersInstinct: "PLUNDERERS_INSTINCT",
  Premonition: "PREMONITION",
  Resilience: "RESILIENCE",
  SlipperyMeat: "SLIPPERY_MEAT",
  SmallGame: "SMALL_GAME",
  SpineChill: "SPINE_CHILL",
  ThisIsNotHappening: "THIS_IS_NOT_HAPPENING",
  Wellmakeit: "WELL_MAKE_IT",
  Bond: "BOND",
  ProveThyself: "PROVE_THYSELF",
  Leader: "LEADER",
  QuickQuiet: "QUICK_AND_QUIET",
  SprintBurst: "SPRINT_BURST",
  Adrenaline: "ADRENALINE",
  Empathy: "EMPATHY",
  BotanyKnowledge: "BOTANY_KNOWLEDGE",
  SelfCare: "SELF_CARE",
  IronWill: "IRON_WILL",
  CalmSpirit: "CALM_SPIRIT",
  Saboteur: "SABOTEUR",
  BalancedLanding: "BALANCED_LANDING",
  UrbanEvasion: "URBAN_EVASION",
  Streetwise: "STREETWISE",
  LeftBehind: "LEFT_BEHIND",
  BorrowedTime: "BORROWED_TIME",
  Unbreakable: "UNBREAKABLE",
  WereGonnaLiveForever: "WERE_GONNA_LIVE_FOREVER",
  DeadHard: "DEAD_HARD",
  NoMither: "NO_MITHER",
  SoleSurvivor: "SOLE_SURVIVOR",
  ObjectofObsession: "OBJECT_OF_OBSESSION",
  DecisiveStrike: "DECISIVE_STRIKE",
  OpenHanded: "OPEN_HANDED",
  UptheAnte: "UP_THE_ANTE",
  AceintheHole: "ACE_IN_THE_HOLE",
  Technician: "TECHNICIAN",
  Lithe: "LITHE",
  Alert: "ALERT",
  WakeUp: "WAKE_UP",
  Pharmacy: "PHARMACY",
  Vigil: "VIGIL",
  Tenacity: "TENACITY",
  DetectivesHunch: "DETECTIVES_HUNCH",
  StakeOut: "STAKE_OUT",
  DanceWithMe: "DANCE_WITH_ME",
  WindowsofOpportunity: "WINDOWS_OF_OPPORTUNITY",
  BoilOver: "BOIL_OVER",
  Diversion: "DIVERSION",
  Deliverance: "DELIVERANCE",
  Autodidact: "AUTODIDACT",
  Breakdown: "BREAKDOWN",
  Aftercare: "AFTERCARE",
  Distortion: "DISTORTION",
  Solidarity: "SOLIDARITY",
  Poised: "POISED",
  HeadOn: "HEAD_ON",
  FlipFlop: "FLIP_FLOP",
  BuckleUp: "BUCKLE_UP",
  MettleofMan: "METTLE_OF_MAN",
  BetterTogether: "BETTER_TOGETHER",
  Fixated: "FIXATED",
  InnerStrength: "INNER_STRENGTH",
  Babysitter: "BABYSITTER",
  Camaraderie: "CAMARADERIE",
  SecondWind: "SECOND_WIND",
  LuckyBreak: "LUCKY_BREAK",
  AnyMeansNecessary: "ANY_MEANS_NECESSARY",
  Breakout: "BREAKOUT",
  OfftheRecord: "OFF_THE_RECORD",
  RedHerring: "RED_HERRING",
  ForthePeople: "FOR_THE_PEOPLE",
  SoulGuard: "SOUL_GUARD",
  BloodPact: "BLOOD_PACT",
  RepressedAlliance: "REPRESSED_ALLIANCE",
  Visionary: "VISIONARY",
  DesperateMeasures: "DESPERATE_MEASURES",
  BuilttoLast: "BUILT_TO_LAST",
  Appraisal: "APPRAISAL",
  Deception: "DECEPTION",
  PowerStruggle: "POWER_STRUGGLE",
  FastTrack: "FAST_TRACK",
  SmashHit: "SMASH_HIT",
  SelfPreservation: "SELF_PRESERVATION",
  Counterforce: "COUNTERFORCE",
  Resurgence: "RESURGENCE",
  BlastMine: "BLAST_MINE",
  BitetheBullet: "BITE_THE_BULLET",
  Flashbang: "FLASHBANG",
  RookieSpirit: "ROOKIE_SPIRIT"
};


/***/ }),

/***/ "./src/lib/enum.ts":
/*!*************************!*\
  !*** ./src/lib/enum.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Rarity": () => (/* binding */ Rarity),
/* harmony export */   "Difficulty": () => (/* binding */ Difficulty),
/* harmony export */   "ItemType": () => (/* binding */ ItemType),
/* harmony export */   "ModifierType": () => (/* binding */ ModifierType),
/* harmony export */   "Language": () => (/* binding */ Language),
/* harmony export */   "LocaleFileName": () => (/* binding */ LocaleFileName)
/* harmony export */ });
var Player = {
  Survivor: 0,
  Killer: 1,
  None: 2
};
var Rarity = {
  Common: 0,
  Uncommon: 1,
  Rare: 2,
  VeryRare: 3,
  UltraRare: 4,
  Event: 5
};
var Difficulty = {
  Easy: 0,
  Intermediate: 1,
  Hard: 2
};
var ItemType = {
  Empty: 0,
  Flashlight: 1,
  Key: 2,
  Map: 3,
  AidKit: 4,
  Toolbox: 5,
  Firecracker: 6
};
var ModifierType = {
  None: 0,
  Power: 1,
  Item: 2,
  Addon: 3,
  Offering: 4,
  Perk: 5,
  Player: 6,
  PlayerType: 7
};
var Language = {
  English: "en",
  Spanish: "es",
  German: "de",
  French: "fr",
  Italian: "it",
  Japanese: "jp",
  Korean: "ko",
  Polish: "pl",
  Russian: "ru",
  Taiwanese: "th",
  Turkish: "tr",
  Chinese: "zh"
};
var LocaleFileName = {
  Items: "items",
  KillerAddons: "killerAddons",
  KillerOfferings: "killerOfferings",
  KillerPerks: "killerPerks",
  Killers: "killers",
  Powers: "powers",
  SharedOfferings: "sharedOfferings",
  SurvivorAddons: "survivorAddons",
  SurvivorOfferings: "survivorOfferings",
  SurvivorPerks: "survivorPerks",
  Survivors: "survivors"
};


/***/ }),

/***/ "./src/lib/factories.ts":
/*!******************************!*\
  !*** ./src/lib/factories.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _factory_itemFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory/itemFactory */ "./src/lib/factory/itemFactory.ts");
/* harmony import */ var _factory_killerAddonFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory/killerAddonFactory */ "./src/lib/factory/killerAddonFactory.ts");
/* harmony import */ var _factory_killerFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory/killerFactory */ "./src/lib/factory/killerFactory.ts");
/* harmony import */ var _factory_killerOfferingFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory/killerOfferingFactory */ "./src/lib/factory/killerOfferingFactory.ts");
/* harmony import */ var _factory_killerPerkFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory/killerPerkFactory */ "./src/lib/factory/killerPerkFactory.ts");
/* harmony import */ var _factory_powerFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory/powerFactory */ "./src/lib/factory/powerFactory.ts");
/* harmony import */ var _factory_sharedOfferingFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory/sharedOfferingFactory */ "./src/lib/factory/sharedOfferingFactory.ts");
/* harmony import */ var _factory_survivorAddonFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factory/survivorAddonFactory */ "./src/lib/factory/survivorAddonFactory.ts");
/* harmony import */ var _factory_survivorFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./factory/survivorFactory */ "./src/lib/factory/survivorFactory.ts");
/* harmony import */ var _factory_survivorOfferingFactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./factory/survivorOfferingFactory */ "./src/lib/factory/survivorOfferingFactory.ts");
/* harmony import */ var _factory_survivorPerkFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./factory/survivorPerkFactory */ "./src/lib/factory/survivorPerkFactory.ts");














var Factories = /*#__PURE__*/function () {
  function Factories(locale) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Factories);

    this.setLocale(locale);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Factories, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var language = this.locale ? this.locale.language : undefined;

      if (locale.language !== language) {
        this.item = new _factory_itemFactory__WEBPACK_IMPORTED_MODULE_2__.default(locale.data.items, this);
        this.killerAddon = new _factory_killerAddonFactory__WEBPACK_IMPORTED_MODULE_3__.default(locale.data.killerAddons, this);
        this.killer = new _factory_killerFactory__WEBPACK_IMPORTED_MODULE_4__.default(locale.data.killers, this);
        this.killerOffering = new _factory_killerOfferingFactory__WEBPACK_IMPORTED_MODULE_5__.default(locale.data.killerOfferings, this);
        this.killerPerk = new _factory_killerPerkFactory__WEBPACK_IMPORTED_MODULE_6__.default(locale.data.killerPerks, this);
        this.power = new _factory_powerFactory__WEBPACK_IMPORTED_MODULE_7__.default(locale.data.powers, this);
        this.sharedOffering = new _factory_sharedOfferingFactory__WEBPACK_IMPORTED_MODULE_8__.default(locale.data.sharedOfferings, this);
        this.survivorAddon = new _factory_survivorAddonFactory__WEBPACK_IMPORTED_MODULE_9__.default(locale.data.survivorAddons, this);
        this.survivor = new _factory_survivorFactory__WEBPACK_IMPORTED_MODULE_10__.default(locale.data.survivors, this);
        this.survivorOffering = new _factory_survivorOfferingFactory__WEBPACK_IMPORTED_MODULE_11__.default(locale.data.survivorOfferings, this);
        this.survivorPerk = new _factory_survivorPerkFactory__WEBPACK_IMPORTED_MODULE_12__.default(locale.data.survivorPerks, this);
      }
    }
  }]);

  return Factories;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factories);

/***/ }),

/***/ "./src/lib/factory/base/factory.ts":
/*!*****************************************!*\
  !*** ./src/lib/factory/base/factory.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Factory = /*#__PURE__*/function () {
  function Factory(data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Factory);

    this.data = data;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Factory, [{
    key: "get",
    value: function get(key) {
      var item = this.data.find(function (value) {
        return value.index === key;
      });
      return item;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      return !!this.get(key);
    }
  }]);

  return Factory;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factory);

/***/ }),

/***/ "./src/lib/factory/base/model.ts":
/*!***************************************!*\
  !*** ./src/lib/factory/base/model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




var Model = /*#__PURE__*/function () {
  function Model(factories, data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Model);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "initialized", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "frozen", false);

    if (data) {
      this.data = data;
    } else {
      this.data = {
        id: -1,
        index: "",
        name: "",
        description: "",
        image: ""
      };
    }

    this.factories = factories;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Model, [{
    key: "initialize",
    value: function initialize() {
      this.initialized = true;
    }
  }, {
    key: "freeze",
    value: function freeze() {
      this.frozen = true;
    }
  }, {
    key: "index",
    get: function get() {
      return this.data.index;
    }
  }, {
    key: "isEmpty",
    get: function get() {
      return !("index" in this.data && !!this.data.index && this.data.index.length > 0);
    }
  }]);

  return Model;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/lib/factory/base/modelFactory.ts":
/*!**********************************************!*\
  !*** ./src/lib/factory/base/modelFactory.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory */ "./src/lib/factory/base/factory.ts");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var ModelFactory = /*#__PURE__*/function (_Factory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(ModelFactory, _Factory);

  var _super = _createSuper(ModelFactory);

  function ModelFactory(factories, model, data) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ModelFactory);

    _this = _super.call(this, data);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "instances", []);

    _this.model = model;
    _this.factories = factories;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ModelFactory, [{
    key: "getModel",
    value: function getModel(key) {
      var data = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(ModelFactory.prototype), "get", this).call(this, key);

      if (data) {
        var instance = this.instances.find(function (item) {
          return item.index === key;
        });

        if (!instance) {
          // eslint-disable-next-line new-cap
          instance = new this.model(this.factories, data);
          this.instances.push(instance);
          instance.initialize();
        }

        return instance;
      } // eslint-disable-next-line new-cap


      return new this.model(this.factories);
    }
  }, {
    key: "getModels",
    value: function getModels(keys) {
      var _this2 = this;

      return keys.map(function (key) {
        return _this2.getModel(key);
      });
    }
  }, {
    key: "getAllModels",
    value: function getAllModels() {
      var _this3 = this;

      return this.data.map(function (item) {
        return _this3.getModel(item.index);
      });
    }
  }]);

  return ModelFactory;
}(_factory__WEBPACK_IMPORTED_MODULE_8__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModelFactory);

/***/ }),

/***/ "./src/lib/factory/itemFactory.ts":
/*!****************************************!*\
  !*** ./src/lib/factory/itemFactory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _model_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/item */ "./src/lib/factory/model/item.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var ItemFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ItemFactory, _ModelFactory);

  var _super = _createSuper(ItemFactory);

  function ItemFactory(data, factories) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ItemFactory);

    return _super.call(this, factories, _model_item__WEBPACK_IMPORTED_MODULE_5__.default, data);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ItemFactory, [{
    key: "typeExists",
    value: function typeExists(key) {
      return !!this.data.find(function (item) {
        return item.type === key;
      });
    }
  }]);

  return ItemFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_6__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFactory);

/***/ }),

/***/ "./src/lib/factory/killerAddonFactory.ts":
/*!***********************************************!*\
  !*** ./src/lib/factory/killerAddonFactory.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _model_addon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/addon */ "./src/lib/factory/model/addon.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var KillerAddonFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(KillerAddonFactory, _ModelFactory);

  var _super = _createSuper(KillerAddonFactory);

  function KillerAddonFactory(data, factories) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, KillerAddonFactory);

    _this = _super.call(this, factories, _model_addon__WEBPACK_IMPORTED_MODULE_7__.default, data);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "byOwner", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "byRarity", {});

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(KillerAddonFactory, [{
    key: "getModelsByOwner",
    value: function getModelsByOwner(key) {
      var ownerExists = this.factories.killer.exists(key);

      if (ownerExists) {
        if (!(key in this.byOwner)) {
          var addons = this.data.filter(function (addon) {
            return addon.owner === key;
          }).map(function (addon) {
            return addon.index;
          });
          this.byOwner[key] = this.getModels(addons);
        }

        return this.byOwner[key];
      }

      return [];
    }
  }, {
    key: "getModelsByRarity",
    value: function getModelsByRarity(key) {
      if (!(key in this.byRarity)) {
        var addons = this.data.filter(function (addon) {
          return addon.rarity === key;
        }).map(function (addon) {
          return addon.index;
        });
        this.byRarity[key] = this.getModels(addons);
      }

      return this.byRarity[key];
    }
  }]);

  return KillerAddonFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_8__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KillerAddonFactory);

/***/ }),

/***/ "./src/lib/factory/killerFactory.ts":
/*!******************************************!*\
  !*** ./src/lib/factory/killerFactory.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _model_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/player */ "./src/lib/factory/model/player.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var KillerFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(KillerFactory, _ModelFactory);

  var _super = _createSuper(KillerFactory);

  function KillerFactory(data, factories) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, KillerFactory);

    return _super.call(this, factories, _model_player__WEBPACK_IMPORTED_MODULE_4__.default, data);
  }

  return KillerFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_5__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KillerFactory);

/***/ }),

/***/ "./src/lib/factory/killerOfferingFactory.ts":
/*!**************************************************!*\
  !*** ./src/lib/factory/killerOfferingFactory.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _model_offering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/offering */ "./src/lib/factory/model/offering.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var KillerOfferingFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(KillerOfferingFactory, _ModelFactory);

  var _super = _createSuper(KillerOfferingFactory);

  function KillerOfferingFactory(data, factories) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, KillerOfferingFactory);

    return _super.call(this, factories, _model_offering__WEBPACK_IMPORTED_MODULE_4__.default, data);
  }

  return KillerOfferingFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_5__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KillerOfferingFactory);

/***/ }),

/***/ "./src/lib/factory/killerPerkFactory.ts":
/*!**********************************************!*\
  !*** ./src/lib/factory/killerPerkFactory.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _model_perk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/perk */ "./src/lib/factory/model/perk.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");
/* harmony import */ var _data_compiled_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/enum */ "./src/data.compiled/enum.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var KillerPerkFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(KillerPerkFactory, _ModelFactory);

  var _super = _createSuper(KillerPerkFactory);

  function KillerPerkFactory(data, factories) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, KillerPerkFactory);

    _this = _super.call(this, factories, _model_perk__WEBPACK_IMPORTED_MODULE_7__.default, data);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "byOwner", {});

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(KillerPerkFactory, [{
    key: "getModelsByOwner",
    value: function getModelsByOwner(key) {
      var ownerExists = key === _data_compiled_enum__WEBPACK_IMPORTED_MODULE_9__.Killer.NoOne || this.factories.killer.exists(key);

      if (ownerExists) {
        if (!(key in this.byOwner)) {
          var addons = this.data.filter(function (addon) {
            return addon.owner === key;
          }).map(function (addon) {
            return addon.index;
          });
          this.byOwner[key] = this.getModels(addons);
        }

        return this.byOwner[key];
      }

      return [];
    }
  }]);

  return KillerPerkFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_8__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KillerPerkFactory);

/***/ }),

/***/ "./src/lib/factory/model/addon.ts":
/*!****************************************!*\
  !*** ./src/lib/factory/model/addon.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enum */ "./src/lib/enum.ts");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../base/model */ "./src/lib/factory/base/model.ts");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Addon = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Addon, _Model);

  var _super = _createSuper(Addon);

  function Addon() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Addon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "modifier", _enum__WEBPACK_IMPORTED_MODULE_8__.ModifierType.Addon);

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Addon, [{
    key: "id",
    get: function get() {
      return this.data.id;
    }
  }, {
    key: "index",
    get: function get() {
      return this.data.index;
    }
  }, {
    key: "name",
    get: function get() {
      return this.data.name;
    }
  }, {
    key: "description",
    get: function get() {
      return this.data.description;
    }
  }, {
    key: "image",
    get: function get() {
      return this.data.image;
    }
  }, {
    key: "rarity",
    get: function get() {
      return this.data.rarity;
    }
  }, {
    key: "flavor",
    get: function get() {
      var _this$data;

      return (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.flavor;
    }
  }, {
    key: "type",
    get: function get() {
      return typeof this.data.type !== "undefined" ? this.data.type : _enum__WEBPACK_IMPORTED_MODULE_8__.ItemType.Empty;
    }
  }, {
    key: "owner",
    get: function get() {
      if (this._owner) {
        return this._owner;
      }

      return undefined;
    }
  }, {
    key: "player",
    get: function get() {
      if (this._owner) {
        var power = this._owner.data.power;
        var hasPower = typeof power === "string" && power.length > 0;

        if (hasPower) {
          return _enum__WEBPACK_IMPORTED_MODULE_8__.Player.Killer;
        }
      }

      return _enum__WEBPACK_IMPORTED_MODULE_8__.Player.Survivor;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      if (!this.isEmpty) {
        this.setOwner(this.data.owner);

        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Addon.prototype), "initialize", this).call(this);
      }
    }
  }, {
    key: "setOwner",
    value: function setOwner(owner) {
      if (owner) {
        var _this$factories = this.factories,
            killer = _this$factories.killer,
            survivor = _this$factories.survivor;
        var isKiller = killer.exists(owner);

        if (isKiller) {
          this._owner = killer.getModel(owner);
        } else {
          this._owner = survivor.getModel(owner);
        }
      }
    }
  }]);

  return Addon;
}(_base_model__WEBPACK_IMPORTED_MODULE_9__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Addon);

/***/ }),

/***/ "./src/lib/factory/model/index.ts":
/*!****************************************!*\
  !*** ./src/lib/factory/model/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* reexport safe */ _item__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Offering": () => (/* reexport safe */ _offering__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Perk": () => (/* reexport safe */ _perk__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Player": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Power": () => (/* reexport safe */ _power__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Addon": () => (/* reexport safe */ _addon__WEBPACK_IMPORTED_MODULE_5__.default)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/lib/factory/model/item.ts");
/* harmony import */ var _offering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offering */ "./src/lib/factory/model/offering.ts");
/* harmony import */ var _perk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perk */ "./src/lib/factory/model/perk.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/lib/factory/model/player.ts");
/* harmony import */ var _power__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./power */ "./src/lib/factory/model/power.ts");
/* harmony import */ var _addon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addon */ "./src/lib/factory/model/addon.ts");








/***/ }),

/***/ "./src/lib/factory/model/item.ts":
/*!***************************************!*\
  !*** ./src/lib/factory/model/item.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base/model */ "./src/lib/factory/base/model.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enum */ "./src/lib/enum.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Item = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Item, _Model);

  var _super = _createSuper(Item);

  function Item() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "modifier", _enum__WEBPACK_IMPORTED_MODULE_8__.ModifierType.Item);

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Item, [{
    key: "id",
    get: function get() {
      return this.data.id;
    }
  }, {
    key: "index",
    get: function get() {
      return this.data.index;
    }
  }, {
    key: "name",
    get: function get() {
      return this.data.name;
    }
  }, {
    key: "description",
    get: function get() {
      return this.data.description;
    }
  }, {
    key: "image",
    get: function get() {
      return this.data.image;
    }
  }, {
    key: "type",
    get: function get() {
      return this.data.type;
    }
  }, {
    key: "rarity",
    get: function get() {
      return this.data.rarity;
    }
  }, {
    key: "flavor",
    get: function get() {
      return this.data.flavor;
    }
  }]);

  return Item;
}(_base_model__WEBPACK_IMPORTED_MODULE_7__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ "./src/lib/factory/model/offering.ts":
/*!*******************************************!*\
  !*** ./src/lib/factory/model/offering.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base/model */ "./src/lib/factory/base/model.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enum */ "./src/lib/enum.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Offering = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Offering, _Model);

  var _super = _createSuper(Offering);

  function Offering() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Offering);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "modifier", _enum__WEBPACK_IMPORTED_MODULE_8__.ModifierType.Offering);

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Offering, [{
    key: "id",
    get: function get() {
      return this.data.id;
    }
  }, {
    key: "index",
    get: function get() {
      return this.data.index;
    }
  }, {
    key: "name",
    get: function get() {
      return this.data.name;
    }
  }, {
    key: "description",
    get: function get() {
      return this.data.description;
    }
  }, {
    key: "image",
    get: function get() {
      return this.data.image;
    }
  }, {
    key: "rarity",
    get: function get() {
      return this.data.rarity;
    }
  }, {
    key: "flavor",
    get: function get() {
      return this.data.flavor;
    }
  }]);

  return Offering;
}(_base_model__WEBPACK_IMPORTED_MODULE_7__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offering);

/***/ }),

/***/ "./src/lib/factory/model/perk.ts":
/*!***************************************!*\
  !*** ./src/lib/factory/model/perk.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base/model */ "./src/lib/factory/base/model.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../enum */ "./src/lib/enum.ts");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Perk = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Perk, _Model);

  var _super = _createSuper(Perk);

  function Perk() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Perk);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "modifier", _enum__WEBPACK_IMPORTED_MODULE_9__.ModifierType.Perk);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "_tierIndex", 2);

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Perk, [{
    key: "id",
    get: function get() {
      return this.data.id;
    }
  }, {
    key: "index",
    get: function get() {
      return this.data.index;
    }
  }, {
    key: "name",
    get: function get() {
      return this.data.name;
    }
  }, {
    key: "image",
    get: function get() {
      return this.data.image;
    }
  }, {
    key: "flavor",
    get: function get() {
      return this.data.flavor;
    }
  }, {
    key: "owner",
    get: function get() {
      if (this._owner) {
        return this._owner;
      }

      return undefined;
    }
  }, {
    key: "player",
    get: function get() {
      var isKiller = this.factories.killer.exists(this.index);

      if (isKiller) {
        return _enum__WEBPACK_IMPORTED_MODULE_9__.Player.Killer;
      }

      return _enum__WEBPACK_IMPORTED_MODULE_9__.Player.Survivor;
    }
  }, {
    key: "tier",
    get: function get() {
      return this._tierIndex + 1;
    }
  }, {
    key: "rarity",
    get: function get() {
      return this.data.rarity[this._tierIndex];
    }
  }, {
    key: "description",
    get: function get() {
      var _this2 = this;

      return this.data.description.split(/\{[0-9]{1,2}\}/g).reduce(function (prev, current, index, arr) {
        var isLastIndex = index === arr.length - 1;

        if (isLastIndex) {
          return "".concat(prev).concat(current);
        }

        return "".concat(prev).concat(current).concat(_this2.data.tiers[_this2._tierIndex][index]);
      }, "");
    }
  }, {
    key: "initialize",
    value: function initialize() {
      if (!this.isEmpty) {
        this.setOwner(this.data.owner);

        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Perk.prototype), "initialize", this).call(this);
      }
    }
  }, {
    key: "setTier",
    value: function setTier(tier) {
      var index = tier - 1;
      var max = this.data.rarity.length - 1;

      if (index >= 0 && index <= max) {
        this._tierIndex = tier - 1;
      }
    }
  }, {
    key: "setOwner",
    value: function setOwner(owner) {
      if (owner) {
        var _this$factories = this.factories,
            killer = _this$factories.killer,
            survivor = _this$factories.survivor;
        var isKiller = killer.exists(owner);

        if (isKiller) {
          this._owner = killer.getModel(owner);
        } else {
          this._owner = survivor.getModel(owner);
        }
      }
    }
  }]);

  return Perk;
}(_base_model__WEBPACK_IMPORTED_MODULE_8__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Perk);

/***/ }),

/***/ "./src/lib/factory/model/player.ts":
/*!*****************************************!*\
  !*** ./src/lib/factory/model/player.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base/model */ "./src/lib/factory/base/model.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../enum */ "./src/lib/enum.ts");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Player = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Player, _Model);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Player);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "modifier", _enum__WEBPACK_IMPORTED_MODULE_9__.ModifierType.Player);

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Player, [{
    key: "id",
    get: function get() {
      return this.data.id;
    }
  }, {
    key: "index",
    get: function get() {
      return this.data.index;
    }
  }, {
    key: "name",
    get: function get() {
      return this.data.name;
    }
  }, {
    key: "description",
    get: function get() {
      return this.data.description;
    }
  }, {
    key: "image",
    get: function get() {
      return this.data.image;
    }
  }, {
    key: "difficulty",
    get: function get() {
      return this.data.difficulty;
    }
  }, {
    key: "perks",
    get: function get() {
      if (this._perks) {
        return this._perks;
      }

      return [];
    }
  }, {
    key: "power",
    get: function get() {
      if (this._power) {
        return this._power;
      }

      return undefined;
    }
  }, {
    key: "player",
    get: function get() {
      var hasPower = typeof this.data.power === "string" && this.data.power.length > 0;

      if (hasPower) {
        return _enum__WEBPACK_IMPORTED_MODULE_9__.Player.Killer;
      }

      return _enum__WEBPACK_IMPORTED_MODULE_9__.Player.Survivor;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      if (!this.isEmpty) {
        this.setPerks(this.data.perks);
        this.setPower(this.data.power);

        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Player.prototype), "initialize", this).call(this);
      }
    }
  }, {
    key: "setPerks",
    value: function setPerks(perks) {
      var _this2 = this;

      var _this$factories = this.factories,
          killerPerk = _this$factories.killerPerk,
          survivorPerk = _this$factories.survivorPerk;
      this._perks = perks.map(function (value) {
        return _this2.player === _enum__WEBPACK_IMPORTED_MODULE_9__.Player.Killer ? killerPerk.getModel(value) : survivorPerk.getModel(value);
      });
    }
  }, {
    key: "setPower",
    value: function setPower(power) {
      if (power) {
        var factory = this.factories.power;
        this._power = this.player === _enum__WEBPACK_IMPORTED_MODULE_9__.Player.Killer ? factory.getModel(power) : undefined;
      }
    }
  }]);

  return Player;
}(_base_model__WEBPACK_IMPORTED_MODULE_8__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/lib/factory/model/power.ts":
/*!****************************************!*\
  !*** ./src/lib/factory/model/power.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base/model */ "./src/lib/factory/base/model.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../enum */ "./src/lib/enum.ts");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Power = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Power, _Model);

  var _super = _createSuper(Power);

  function Power() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Power);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "modifier", _enum__WEBPACK_IMPORTED_MODULE_9__.ModifierType.Power);

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Power, [{
    key: "id",
    get: function get() {
      return this.data.id;
    }
  }, {
    key: "index",
    get: function get() {
      return this.data.index;
    }
  }, {
    key: "name",
    get: function get() {
      return this.data.name;
    }
  }, {
    key: "description",
    get: function get() {
      return this.data.description;
    }
  }, {
    key: "image",
    get: function get() {
      return this.data.image;
    }
  }, {
    key: "flavor",
    get: function get() {
      return this.data.flavor;
    }
  }, {
    key: "owner",
    get: function get() {
      if (this._owner) {
        return this._owner;
      }

      return undefined;
    }
  }, {
    key: "player",
    get: function get() {
      return _enum__WEBPACK_IMPORTED_MODULE_9__.Player.Killer;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      if (!this.isEmpty) {
        this.setOwner(this.data.owner);

        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Power.prototype), "initialize", this).call(this);
      }
    }
  }, {
    key: "setOwner",
    value: function setOwner(owner) {
      if (owner) {
        this._owner = this.factories.killer.getModel(owner);
      }
    }
  }]);

  return Power;
}(_base_model__WEBPACK_IMPORTED_MODULE_8__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Power);

/***/ }),

/***/ "./src/lib/factory/powerFactory.ts":
/*!*****************************************!*\
  !*** ./src/lib/factory/powerFactory.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _model_power__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/power */ "./src/lib/factory/model/power.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var PowerFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(PowerFactory, _ModelFactory);

  var _super = _createSuper(PowerFactory);

  function PowerFactory(data, factories) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PowerFactory);

    return _super.call(this, factories, _model_power__WEBPACK_IMPORTED_MODULE_4__.default, data);
  }

  return PowerFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_5__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PowerFactory);

/***/ }),

/***/ "./src/lib/factory/sharedOfferingFactory.ts":
/*!**************************************************!*\
  !*** ./src/lib/factory/sharedOfferingFactory.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _model_offering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/offering */ "./src/lib/factory/model/offering.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var SharedOfferingFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(SharedOfferingFactory, _ModelFactory);

  var _super = _createSuper(SharedOfferingFactory);

  function SharedOfferingFactory(data, factories) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SharedOfferingFactory);

    return _super.call(this, factories, _model_offering__WEBPACK_IMPORTED_MODULE_4__.default, data);
  }

  return SharedOfferingFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_5__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedOfferingFactory);

/***/ }),

/***/ "./src/lib/factory/survivorAddonFactory.ts":
/*!*************************************************!*\
  !*** ./src/lib/factory/survivorAddonFactory.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _model_addon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/addon */ "./src/lib/factory/model/addon.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var SurvivorAddonFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(SurvivorAddonFactory, _ModelFactory);

  var _super = _createSuper(SurvivorAddonFactory);

  function SurvivorAddonFactory(data, factories) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SurvivorAddonFactory);

    _this = _super.call(this, factories, _model_addon__WEBPACK_IMPORTED_MODULE_7__.default, data);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "byType", {});

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SurvivorAddonFactory, [{
    key: "getModelsByType",
    value: function getModelsByType(key) {
      var itemExists = this.factories.item.typeExists(key);

      if (itemExists) {
        if (!(key in this.byType)) {
          var addons = this.data.filter(function (addon) {
            return addon.type === key;
          }).map(function (addon) {
            return addon.index;
          });
          this.byType[key] = this.getModels(addons);
        }

        return this.byType[key];
      }

      return [];
    }
  }]);

  return SurvivorAddonFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_8__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurvivorAddonFactory);

/***/ }),

/***/ "./src/lib/factory/survivorFactory.ts":
/*!********************************************!*\
  !*** ./src/lib/factory/survivorFactory.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _model_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/player */ "./src/lib/factory/model/player.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var SurvivorFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(SurvivorFactory, _ModelFactory);

  var _super = _createSuper(SurvivorFactory);

  function SurvivorFactory(data, factories) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SurvivorFactory);

    return _super.call(this, factories, _model_player__WEBPACK_IMPORTED_MODULE_4__.default, data);
  }

  return SurvivorFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_5__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurvivorFactory);

/***/ }),

/***/ "./src/lib/factory/survivorOfferingFactory.ts":
/*!****************************************************!*\
  !*** ./src/lib/factory/survivorOfferingFactory.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _model_offering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/offering */ "./src/lib/factory/model/offering.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var SurvivorOfferingFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(SurvivorOfferingFactory, _ModelFactory);

  var _super = _createSuper(SurvivorOfferingFactory);

  function SurvivorOfferingFactory(data, factories) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SurvivorOfferingFactory);

    return _super.call(this, factories, _model_offering__WEBPACK_IMPORTED_MODULE_4__.default, data);
  }

  return SurvivorOfferingFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_5__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurvivorOfferingFactory);

/***/ }),

/***/ "./src/lib/factory/survivorPerkFactory.ts":
/*!************************************************!*\
  !*** ./src/lib/factory/survivorPerkFactory.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _model_perk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/perk */ "./src/lib/factory/model/perk.ts");
/* harmony import */ var _base_modelFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/modelFactory */ "./src/lib/factory/base/modelFactory.ts");
/* harmony import */ var _data_compiled_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/enum */ "./src/data.compiled/enum.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var SurvivorPerkFactory = /*#__PURE__*/function (_ModelFactory) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(SurvivorPerkFactory, _ModelFactory);

  var _super = _createSuper(SurvivorPerkFactory);

  function SurvivorPerkFactory(data, factories) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SurvivorPerkFactory);

    _this = _super.call(this, factories, _model_perk__WEBPACK_IMPORTED_MODULE_7__.default, data);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "byOwner", {});

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SurvivorPerkFactory, [{
    key: "getModelsByOwner",
    value: function getModelsByOwner(key) {
      var ownerExists = key === _data_compiled_enum__WEBPACK_IMPORTED_MODULE_9__.Survivor.NoOne || this.factories.killer.exists(key);

      if (ownerExists) {
        if (!(key in this.byOwner)) {
          var addons = this.data.filter(function (addon) {
            return addon.owner === key;
          }).map(function (addon) {
            return addon.index;
          });
          this.byOwner[key] = this.getModels(addons);
        }

        return this.byOwner[key];
      }

      return [];
    }
  }]);

  return SurvivorPerkFactory;
}(_base_modelFactory__WEBPACK_IMPORTED_MODULE_8__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurvivorPerkFactory);

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories */ "./src/lib/factories.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale */ "./src/lib/locale.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Dbd = /*#__PURE__*/function () {
  function Dbd(data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Dbd);

    this.locale = new _locale__WEBPACK_IMPORTED_MODULE_4__.default(data);
    this.factory = new _factories__WEBPACK_IMPORTED_MODULE_3__.default(this.locale);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Dbd, [{
    key: "item",
    value: function item(key) {
      return this.factory.item.getModel(key);
    }
  }, {
    key: "items",
    value: function items() {
      return this.factory.item.getAllModels();
    }
  }, {
    key: "addon",
    value: function addon(key) {
      var addon = this.factory.survivorAddon.getModel(key);

      if (!addon.isEmpty) {
        return addon;
      }

      return this.factory.killerAddon.getModel(key);
    }
  }, {
    key: "survivorAddons",
    value: function survivorAddons(key) {
      if (typeof key === "number") {
        return this.factory.survivorAddon.getModelsByType(key);
      }

      return this.factory.survivorAddon.getAllModels();
    }
  }, {
    key: "killerAddons",
    value: function killerAddons(key) {
      if (typeof key === "number") {
        return this.factory.killerAddon.getModelsByOwner(key);
      }

      return this.factory.killerAddon.getAllModels();
    }
  }, {
    key: "offering",
    value: function offering(key) {
      var offering = this.factory.survivorOffering.getModel(key);

      if (offering) {
        return offering;
      }

      offering = this.factory.killerOffering.getModel(key);

      if (offering) {
        return offering;
      }

      return this.factory.sharedOffering.getModel(key);
    }
  }, {
    key: "survivorOfferings",
    value: function survivorOfferings() {
      var sharedOfferings = this.factory.sharedOffering.getAllModels();
      var survivorOfferings = this.factory.survivorOffering.getAllModels();
      return _objectSpread(_objectSpread({}, sharedOfferings), survivorOfferings);
    }
  }, {
    key: "killerOfferings",
    value: function killerOfferings() {
      var sharedOfferings = this.factory.sharedOffering.getAllModels();
      var killerOfferings = this.factory.killerOffering.getAllModels();
      return _objectSpread(_objectSpread({}, sharedOfferings), killerOfferings);
    }
  }, {
    key: "power",
    value: function power(key) {
      return this.factory.power.getModel(key);
    }
  }, {
    key: "powers",
    value: function powers() {
      return this.factory.power.getAllModels();
    }
  }, {
    key: "perk",
    value: function perk(key) {
      var perk = this.factory.survivorPerk.getModel(key);

      if (perk) {
        return perk;
      }

      return this.factory.killerPerk.getModel(key);
    }
  }, {
    key: "killerPerks",
    value: function killerPerks(key) {
      if (typeof key === "string") {
        return this.factory.killerPerk.getModelsByOwner(key);
      }

      return this.factory.killerPerk.getAllModels();
    }
  }, {
    key: "survivorPerks",
    value: function survivorPerks(key) {
      if (typeof key === "string") {
        return this.factory.survivorPerk.getModelsByOwner(key);
      }

      return this.factory.survivorPerk.getAllModels();
    }
  }, {
    key: "survivor",
    value: function survivor(key) {
      return this.factory.survivor.getModel(key);
    }
  }, {
    key: "survivors",
    value: function survivors() {
      return this.factory.survivor.getAllModels();
    }
  }, {
    key: "killer",
    value: function killer(key) {
      return this.factory.killer.getModel(key);
    }
  }, {
    key: "killers",
    value: function killers() {
      return this.factory.killer.getAllModels();
    }
  }]);

  return Dbd;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dbd);

/***/ }),

/***/ "./src/lib/locale.ts":
/*!***************************!*\
  !*** ./src/lib/locale.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);





var Locale = /*#__PURE__*/function () {
  function Locale(data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Locale);

    this.changeLanguage(data);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Locale, [{
    key: "changeLanguage",
    value: function () {
      var _changeLanguage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(data) {
        var currentLanguage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentLanguage = this.data ? this.data.language : undefined;

                if (!(data.language === currentLanguage)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                this.data = data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function changeLanguage(_x) {
        return _changeLanguage.apply(this, arguments);
      }

      return changeLanguage;
    }()
  }, {
    key: "language",
    get: function get() {
      return this.data.language;
    }
  }, {
    key: "items",
    get: function get() {
      return this.data.items;
    }
  }, {
    key: "killerAddons",
    get: function get() {
      return this.data.killerAddons;
    }
  }, {
    key: "killerOfferings",
    get: function get() {
      return this.data.killerOfferings;
    }
  }, {
    key: "killerPerks",
    get: function get() {
      return this.data.killerPerks;
    }
  }, {
    key: "killers",
    get: function get() {
      return this.data.killers;
    }
  }, {
    key: "powers",
    get: function get() {
      return this.data.powers;
    }
  }, {
    key: "sharedOfferings",
    get: function get() {
      return this.data.sharedOfferings;
    }
  }, {
    key: "survivorAddons",
    get: function get() {
      return this.data.survivorAddons;
    }
  }, {
    key: "survivorPerks",
    get: function get() {
      return this.data.survivorPerks;
    }
  }, {
    key: "survivors",
    get: function get() {
      return this.data.survivors;
    }
  }]);

  return Locale;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Locale);

/***/ }),

/***/ "./src/lib/locales/de.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/de.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_de_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/de/items.json */ "./src/data.compiled/locales/de/items.json");
/* harmony import */ var _data_compiled_locales_de_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/de/killerAddons.json */ "./src/data.compiled/locales/de/killerAddons.json");
/* harmony import */ var _data_compiled_locales_de_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/de/killerOfferings.json */ "./src/data.compiled/locales/de/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_de_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/de/killerPerks.json */ "./src/data.compiled/locales/de/killerPerks.json");
/* harmony import */ var _data_compiled_locales_de_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/de/killers.json */ "./src/data.compiled/locales/de/killers.json");
/* harmony import */ var _data_compiled_locales_de_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/de/powers.json */ "./src/data.compiled/locales/de/powers.json");
/* harmony import */ var _data_compiled_locales_de_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/de/sharedOfferings.json */ "./src/data.compiled/locales/de/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_de_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/de/survivorAddons.json */ "./src/data.compiled/locales/de/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_de_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/de/survivorOfferings.json */ "./src/data.compiled/locales/de/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_de_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/de/survivorPerks.json */ "./src/data.compiled/locales/de/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_de_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/de/survivors.json */ "./src/data.compiled/locales/de/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.German;
var data = {
  items: _data_compiled_locales_de_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_de_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_de_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_de_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_de_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_de_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_de_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_de_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_de_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_de_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_de_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
  language: language
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/data.compiled/locales/de/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/de/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Eine Reihe kleiner, explosiver Objekte, in eine dicke Papierverkleidung verpackt. Detoniert mit lautem Geknalle und intensiven Lichtblitzen. Kann als Ablenkung, als Blendgerät oder zum Feiern genutzt werden.<br><li><b>1 Einheit.</b></li>","name":"Chinesischer Böller","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"Eine Standardtaschenlampe. Kann genutzt werden, um dir deinen Weg in der Dunkelheit zu leuchten.<br><li><b>8 Sekunden</b> Nutzungsdauer.</li>","name":"Taschenlampe","flavor":"„Der Großteil der Batterielebensdauer wurde vom Vorbesitzer sinnlos verschwendet.“","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"Eine Taschenlampe, die mit einem besonderen Aufsatz ausgestattet ist, der das Licht orange färbt und einen kleinen Geist erscheinen lässt. <br><li><b>8 Sekunden</b> Nutzungsdauer. </li><li><b>Erhöht deutlich</b> die Anzahl freundlicher Geister in deinem Leben.</li>","name":"Irrlicht","flavor":"„Viel Spaß zu Halloween!“","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"Eine leichte Taschenlampe mit guter Griffigkeit. Ihre effiziente Technologie erzeugt ein kraftvolles Licht, während sie gleichzeitig weniger Energie verbraucht.<br><li><b>8 Sekunden Nutzungsdauer</b>.</li><li><b>Verringert leicht</b> den Batterieverbrauch der Taschenlampe.</li><li><b>Erhöht leicht</b> die Genauigkeit.</li>","name":"Sporttaschenlampe","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"Eine robuste, aber schwere Taschenlampe, die jede Menge Energie bereithält.<br><li><b>12 Sekunden Nutzungsdauer</b>.</li><li><b>Verringert leicht</b> die Genauigkeit.</li><li><b>Erhöht moderat</b> die Helligkeit des Lichtstrahls.</li><li><b>Verlängert moderat</b> die Dauer der Erblindung.</li>","name":"Nützliche Taschenlampe","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"Griff und Halm eines Schlüssels, in welchem eine ominöse Kraft vibriert. Die Kraft des zerbrochenen Schlüssels kann nicht direkt genutzt werden. Verschiedene Objekte können an seinem Biegering befestigt werden, um seine Kraft für unterschiedliche Effekte zu nutzen.<br><li><b>10 Sekunden</b> Nutzungsdauer.</li>","name":"Zerbrochener Schlüssel","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"Ein verbogener und matter Schlüssel, der einst große Kraft besaß. Die Kraft des Schlüssels kann nicht direkt genutzt werden. Verschiedene Objekte können an seinem Biegering befestigt werden, um die Kraft des matten Schlüssels für unterschiedliche Effekte zu nutzen.<br><li><b>5 Sekunden</b> Nutzungsdauer.</li><li>Kann verbraucht werden, um schwarze Schlösser zu öffnen.</li>","name":"Matter Schlüssel","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"Ein angelaufener und verbogener Schlüssel, in welchem eine ominöse Kraft vibriert. Die Kraft des Schlüssels kann nicht direkt genutzt werden. Verschiedene Objekte können an seinem Biegering befestigt werden, um die Kraft des Hauptschlüssels für unterschiedliche Effekte zu nutzen.<br><li><b>30 Sekunden</b> Nutzungsdauer</li><li>Kann verbraucht werden, um schwarze Schlösser zu öffnen.</li>","name":"Hauptschlüssel","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"Ein altes Pergament, hergestellt aus einem hautähnlichen Material. Es wurde aufgerollt und mit einem farblosen Lederband umwickelt. Das Halten und Verwenden der Karte entfesselt großes Potenzial der Aurawahrnehmungsfähigkeit, was die Karte langsam verbrennt. Solange die Karte noch über Einheiten verfügt, werden dir die Auren von Generatoren angezeigt, auf die du bereits gestoßen bist.<br><li><b>20 Sekunden</b> Nutzungsdauer.</li><li>Du beginnst mit <b>1</b> automatisch angezeigten Generator.</li><li>Schaltet die Fähigkeit frei, Generatoren im Umkreis von <b>8 Metern</b> aufzuspüren.</li>","name":"Karte","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"Ein Pergament, hergestellt aus seltsam frischer Haut. Das Blut am Rand ist noch nicht getrocknet. Es wurde aufgerollt und mit mehreren farbigen Bändern und Schnüren umwickelt. Das Halten und Verwenden der Karte entfesselt großes Potenzial der Aurawahrnehmungsfähigkeit, was die Karte langsam verbrennt. Solange die Karte noch über Einheiten verfügt, werden dir die Auren von Objekten angezeigt, auf die du bereits gestoßen bist.<br><li><b>20 Sekunden Nutzungsdauer</b>.</li><li>Du beginnst mit <b>3 Objekten</b>, die automatisch angezeigt werden.</li><li>Schaltet die Fähigkeit frei, <b>Ziele</b> im Umkreis von <b>8 Metern</b> aufzuspüren.</li><li>Schaltet die Fähigkeit frei, <b>schwarze Schlösser</b> im Umkreis von <b>8 Metern</b> aufzuspüren.</li><li>Schaltet die Fähigkeit frei, <b>Killereigentum</b> im Umkreis von <b>8 Metern</b> aufzuspüren.</li><li>Schaltet die Fähigkeit frei, <b>die Ausgangstore</b> im Umkreis von <b>8 Metern</b> aufzuspüren.</li>","name":"Regenbogenkarte","flavor":"„Es ist entmutigend. All dieses unsägliche Wissen und die mörderischen Strapazen, und noch immer nichts Greifbares, nichts Nützliches, um aus diesem Albtraum zu entkommen.“ –Vigos Tagebuch","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"Ein rudimentäres Erste-Hilfe-Set, das in Notfällen Leben retten kann, auch wenn einige Dinge darin fehlen.<br><li><b>16 Einheiten</b>.</li><li><b>Erhöht moderat</b> die Geschwindigkeit, mit der du andere heilst.</li><li>Schaltet die <b>Selbstheilungsaktion</b> frei.</li>","name":"Erste-Hilfe-Campingset","flavor":"„Hat gerade genug Material, um jemanden einigermaßen zusammenzuflicken.“","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"Eine Plastikbrotdose mit leuchtenden Halloween-Aufklebern voller Erste-Hilfe-Material.<br><li><b>24 Einheiten.</b></li><li><b>Erhöht deutlich</b> die Geschwindigkeit, mit der du andere heilst.</li><li>Schaltet die <b>Selbstheilungsaktion</b> frei.</li><li>Macht dich <b>deutlich sichtbarer</b>.</li>","name":"Halloween-Brotdose","flavor":"„Sicherheit geht vor! Vergewissere dich, dass man dich beim Halloween-Umzug gut sieht!“","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"Ein Standard-Erste-Hilfe-Set mit allen notwendigen Utensilien für die Behandlung einfacher bis ernsthafter Verletzungen.<br><li><b>24</b> Einheiten.</li><li><b>Erhöht deutlich</b> die Geschwindigkeit, mit der du andere heilst.</li><li>Schaltet die <b>Selbstheilungsaktion</b> frei.</li>","name":"Erste-Hilfe-Kasten","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"Ein robuster, gut sortierter Sanitätskasten, ausgestattet mit erstklassigen Notfallutensilien.<br><li><b>16 Einheiten</b>.</li><li><b>Erhöht enorm</b> die Geschwindigkeit, mit der du andere heilst.</li><li><b>Erhöht enorm</b> die Geschwindigkeit, mit der du dich selbst heilst.</li><li>Schaltet die <b>Selbstheilungsaktion</b> frei.</li>","name":"Notfall-Sani-Kasten","flavor":"\\"Es gibt für nahezu alles eine Heilung ... aber hierfür nicht.\\"","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"Eine große Metallkiste mit Medizinbedarf, speziell für Notfallrettungen in schwer zugänglichen, oft abgelegenen Regionen.<br><li><b>32 Einheiten</b>.</li><li><b>Erhöht enorm</b> die Geschwindigkeit, mit der du andere heilst.</li><li><b>Erhöht moderat</b> die Erfolgszonen des Fähigkeitschecks.</li><li><b>Erhöht moderat</b> die Bonuszonen des Fähigkeitschecks.</li><li>Schaltet die <b>Selbstheilungsaktion</b> frei.</li>","name":"Sani-Kasten des Rangers","flavor":"„Auf der Rückwand klebt ein kleines, graviertes Etikett: VK.ID-3994723“","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"Metallkiste mit ausgedienten Werkzeugen, die jeden Moment auseinanderbrechen könnten. Kann selbst ohne Übung für Reparaturen oder die Zerstörung verschiedener mechanischer Komponenten verwendet werden.<br><li><b>16 Einheiten</b>.</li><li><b>Erhöht moderat</b> die Reparaturgeschwindigkeit.</li><li><b>Verringert leicht</b> die Erfolgszonen des Fähigkeitschecks.</li><li>Schaltet die <b>Sabotageaktion</b> frei.</li>","name":"Abgenutzte Werkzeuge","flavor":"\\"Das nennst du Werkzeuge? Wirklich?\\"","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"Metallkiste mit einem Set aus grundlegenden Werkzeugen. Kann selbst ohne Übung für Reparaturen oder die Zerstörung verschiedener mechanischer Komponenten verwendet werden.<br><li><b>20 Einheiten</b>.</li><li><b>Erhöht moderat</b> die Reparaturgeschwindigkeit.</li><li>Schaltet die <b>Sabotageaktion</b> frei.</li><li><b>Erhöht leicht</b> die Sabotagegeschwindigkeit.</li>","name":"Werkzeugkiste","flavor":"\\"Es ist ungewiss, woher diese Werkzeuge stammen. Wurden sie von einem von uns hier hergebracht oder gehörten sie einem der Monster?\\"","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"Metallkiste mit Spezialwerkzeugen für Mechaniker. Kann selbst ohne Übung für Reparaturen oder die Zerstörung verschiedener mechanischer Komponenten verwendet werden.<br><li><b>16 Einheiten</b>.</li><li><b>Erhöht deutlich</b> die Reparaturgeschwindigkeit.</li><li>Schaltet die <b>Sabotageaktion</b> frei.</li><li><b>Verringert leicht</b> die Sabotagegeschwindigkeit.</li>","name":"Werkzeugkiste des Mechanikers","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"Eine große Metallkiste mit grundlegenden Werkzeugen und mechanischen Ersatzteilen. Kann selbst ohne Übung für Reparaturen oder die Zerstörung verschiedener mechanischer Komponenten verwendet werden.<br><li><b>32 Einheiten</b>.</li><li><b>Erhöht moderat</b> die Reparaturgeschwindigkeit.</li><li>Schaltet die <b>Sabotageaktion</b> frei.</li>","name":"Geräumige Werkzeugkiste","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"Metallkiste mit hoch spezialisierten Werkzeugen für Ingenieure. Die meisten der Werkzeuge können aber selbst von Neulingen noch für schnelle Reparaturen oder die Zerstörung verschiedener mechanischer Komponenten genutzt werden.<br><li><b>16 Einheiten</b>.</li><li><b>Erhöht enorm</b> die Reparaturgeschwindigkeit.</li><li>Schaltet die <b>Sabotageaktion</b> frei.</li><li><b>Verringert moderat</b> die Sabotagegeschwindigkeit.</li>","name":"Werkzeugkiste des Ingenieurs","flavor":"\\"Ich habe unvergleichliche Werkzeuge hergestellt und stand hilflos da, als sie mir gestohlen wurden. Das sind nur billige Nachbauten, vom Nebel ausgespien.\\" – Vigos Tagebuch","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"Eine Metallkiste, die hauptsächlich mit Sägen und Schraubstockgriffen verschiedener Größen, aber auch mit anderen Werkzeugen gefüllt ist. Auch wenn der Inhalt dieser Werkzeugkiste eindeutig für zerstörerische Zwecke gedacht ist, kann er genauso gut für die Reparatur verschiedener mechanischer Komponenten genutzt werden.<br><li><b>24 Einheiten</b>.</li><li><b>Erhöht leicht</b> die Reparaturgeschwindigkeit.</li><li>Schaltet die <b>Sabotageaktion</b> frei.</li><li><b>Erhöht deutlich</b> die Sabotagegeschwindigkeit.</li>","name":"Alex’ Werkzeugkiste","flavor":"\\"Die meisten Werkzeuge sind als \\\\\'Eigentum von Alex\\\\\' gekennzeichnet.\\"","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"Eine kleine, hoch explosive Tischdekoration. Detoniert mit lautem Geknalle und intensiven Lichtblitzen. Kann als Ablenkung, als Blendgerät oder zum Feiern genutzt werden.<br><li><b>1 Einheit.</b></li>","name":"Winter-Knallbonbon","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"Eine kleine, hochexplosive Tischdekoration. Detoniert mit lautem Geknalle, intensiven Lichtblitzen und buntem Konfetti. Kann als Ablenkung, als Blendgerät oder zum Feiern unseres dritten Geburtstags genutzt werden.<br><li><b>1 Einheit.</b></li>","name":"Partykracher zum dritten Geburtstag","flavor":"„Herzlichen Glückwunsch! Auf unsere drei gemeinsamen Jahre!“<br>–Das Team von Dead by Daylight","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"Ein Party-Sani-Kasten, der bei der vollständigen Heilung eines Überlebenden eine Konfetti-Explosion abgibt. Überraschung!<br><li><b>24 Einheiten</b></li><li><b>Erhöht deutlich</b> die Geschwindigkeit, mit der du andere heilen kannst.</li><li>Schaltet die Aktion <b>Selbstheilung</b> frei.</li>","name":"Geburtstag-Sani-Kasten","flavor":"„Alles Gute zum Geburtstag! Auf viele weitere Jahre!“<br>– Das Team von Dead by Daylight","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"Eine Partytaschenlampe, die beim Blenden des Killers eine Konfetti-Explosion abgibt. Überraschung!<br><li><b>8 Sekunden</b> Nutzungsdauer.</li>","name":"Geburtstagstaschenlampe","flavor":"„Alles Gute zum Geburtstag! Auf viele weitere Jahre!“<br>– Das Team von Dead by Daylight","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/de/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Schützende, gepolsterte Lederhandschuhe. <br><li><b>Erhöhen leicht</b> die Geschwindigkeit beim Auslegen von Bärenfallen.</li>","name":"Fallenstellerhandschuhe","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"Eine große, schwere Sprungfeder, die die Haltekraft der Bärenfalle deutlich verstärkt.<br><li><b>Verlängert leicht</b> die Zeit zum Entschärfen von Bärenfallen.</li>","name":"Starke Sprungfeder","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"Ein Ersatzset für Bärenfallen, das das übliche Doppelfedersystem durch 4 Sprungfedern ersetzt und die Haltekraft der Falle enorm verstärkt.<br><li><b>Verlängert moderat</b> die Zeit zum Entschärfen von Bärenfallen.</li>","name":"4-Sprungfedern-Set","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"Holzasche. Kann nach dem Aufkochen zur Färbung von Bärenfallen genutzt werden, um sie weniger sichtbar zu machen.<br><li><b>Verdunkelt moderat</b> alle Bärenfallen.</li>","name":"Blauholzfärbemittel","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"Diese Ersatzbügel für Bärenfallen haben sägeartige Klingen, die grauenvolle, offene Wunden verursachen, wenn sie zuklappen.<br><li>Von einer Bärenfalle gefangene Überlebende leiden unter dem Statuseffekt <b>Blutung</b> bis zur Heilung.</li>","name":"Gezahnte Bügel","flavor":"„Wie eine Raubbestie kann sie riechen und Blut aufspüren.“","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"Einfache Werkzeuge, die dazu geschaffen sind, schnell und sicher Bärenfallen aufzustellen.<br><li><b>Erhöhen moderat</b> die Geschwindigkeit beim Auslegen einer Bärenfalle.</li>","name":"Fallenwerkzeuge","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"Eine ausgehärtete Ledergürteltasche. Groß und robust genug, um Jagdausrüstung zu transportieren.<br><li>Du beginnst mit <b>1 zusätzlichen</b> Bärenfalle.</li><li>Erlaubt den Transport von <b>2 zusätzlichen</b> Bärenfallen.</li>","name":"Fallenstellertasche","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"Die Bügel dieser Bärenfalle sind übersät mit verkrusteten und ätzenden Rostflecken, wodurch es besonders schwierig wird, Verletzungen zu heilen.<br><li>Von einer Bärenfalle gefangene Überlebende erleiden den Statuseffekt <b>Zerfleischt</b>.","name":"Rostige Bügel","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"Eine Sekundärfeder, die die Wirkung einer Bärenfalle garantiert, wenn die Primärfedern unbrauchbar werden.<br><li><b>Verlängert deutlich</b> die Zeit zum Entschärfen von Bärenfallen.</li>","name":"Sekundärfeder","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"Eine schwarze, matte und klebrige Substanz, die Teer ähnelt. Wenn Bärenfallen damit behandelt werden, sind sie weitaus schwerer zu erkennen.<br><li><b>Verdunkelt deutlich</b> alle Bärenfallen.</li>","name":"Teerflasche","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"Ein Wachsblock, um Reibung zu verringern und die Bewegung von mechanischen Teilen zu erleichtern.<br><li><b>Verringert moderat</b> die Chance, aus einer Bärenfalle zu entkommen.</li>","name":"Wachsblock","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"Ein farbloses Öl, das die Handhabung der Fallenfedern riskanter macht.<br><li><b>Verlängert enorm</b> die Zeit zum Entschärfen von Bärenfallen.</li>","name":"Ölige Schraubenfeder","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"Ein spezielles Werkzeugset, das beim Auslegen von Bärenfallen verwendet wird, um ihre Wirksamkeit zu garantieren.<br><li><b>Erhöht enorm</b> die Geschwindigkeit beim Auslegen der Bärenfalle.</li><li><b>Verlängert deutlich</b> die Rettungs- und Fluchtdauer aus Bärenfallen.</li><li><b>Verringert moderat</b> die Chance, aus einer Bärenfalle zu entkommen.</li>","name":"Befestigungswerkzeuge","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"Ein sehr großer, aus Hautfetzen aller Art grob zusammengeflickter Beutel.<br><li>Du beginnst mit <b>2 zusätzlichen</b> Bärenfallen.</li><li>Ermöglicht den Transport von <b>2 zusätzlichen</b> Bärenfallen.</li>","name":"Genähter Beutel","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"Diese grausige, halb klebrige und halb glitschige Flüssigkeit macht den Umgang mit den Sprungfedern von Fallen gefährlicher.<br><li>Wenn eine Falle von einem <b>gesunden</b> Überlebenden sabotiert oder entschärft wird, fordern die blutigen Federn ihren Tribut und der Überlebende wird <b>verletzt</b>.</li><li><b>Verlängert leicht</b> die Zeit zum Entschärfen von Bärenfallen.</li>","name":"Blutige Schraubenfeder","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"Fallen, die mit diesem widerlich leuchtenden Stein geschärft wurden, scheinen ein Eigenleben zu haben.<br><li>Alle <b>30 Sekunden</b> wird eine zufällig gewählte geschlossene Bärenfalle wieder aktiviert.</li>","name":"Schillernder Stein","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"Das Laokeye-Symbol, das für Gerissenheit steht, wurde mit rußigen Fingern auf den Glockenkörper gemalt.<br><li>Der Geist <b>verlässt den verhüllten Zustand vollständig</b>, wenn er Paletten zerbricht oder Generatoren zerstört.</li>","name":"„Die Schlange“ – Ruß","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"Das Wonnug-Symbol, das für einen unvergleichlichen Fährtenleser steht, wurde mit rußigen Fingern auf den Glockenkörper gemalt.<br><li>Während der Geist verhüllt ist, sind frische Blutspuren <b>deutlich</b> besser erkennbar als gewöhnlich.</li>","name":"„Der Spürhund“ – Ruß","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"Das Khugwemuu-Symbol, das für die Geisterwelt steht, wurde mit rußigen Fingern auf den Glockenkörper gemalt.<br><li>Nach dem Enthüllen bleiben Terrorradius und roter Fleck des Geists <b>6</b> Sekunden lang unterdrückt.</li>","name":"„Der Geist“ – Ruß","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"Das Kunwulju-Symbol, das für das Reich der Furcht steht, wurde mit rußigen Fingern auf den Glockenkörper gemalt.<br><li>Der Terrorradius des Geists wird <b>nicht mehr unterdrückt</b>, wenn er verhüllt ist.</li><li>Blutpunkte für Verfolgungen und Überraschungsangriffe sind um 100 % erhöht.</li>","name":"„Die Bestie“ – Ruß","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"Ein Glockenklöppel, hergestellt aus einem glattpolierten Knochenstück. Wirft den Klang der Jammerglocke auf verwirrende Art und Weise zurück.<li>Überlebende können die <b>Entfernung</b> und <b>Richtung</b> der Jammerglocke nicht mehr ausmachen.</li>","name":"Knochenklöppel","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"Das Kratin-Symbol, das für schnelles Passieren steht, wurde mit lehmigen Fingern auf den Glockenkörper gemalt.<br><li><b>Verringert deutlich</b> die Zeit, die der Geist benötigt, um zu verschwinden.</li>","name":"„Flimmer“ – Schlamm","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"Das Ohuwe-Onmnea-Symbol, das für einen gewaltigen Sturm steht, wurde mit lehmigen Fingern auf den Glockenkörper gemalt.<li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit des Geists, während er verhüllt ist.</li>","name":"„Windsturm“ – Schlamm","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"Das Kuntin-Takkho-Symbol, das für ein rasches Herabstürzen auf die Beute steht, wurde mit schlammigen Fingern auf den Glockenkörper gemalt.<br><li><b>Verringert leicht</b> die Zeit bis zum Wiedererscheinen des Geists.</li>","name":"„Flinke Jagd“ – Schlamm","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"Das Baikra-Kaeug-Symbol, das für Wildheit steht, wurde mit lehmigen Fingern auf den Glockenkörper gemalt.<br><li><b>Überraschungsangriffe</b> fügen Überlebenden für <b>60 Sekunden</b> eine <b>Blindheit für Auren</b> zu.</li>","name":"„Blinder Krieger“ – Schlamm","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"Das Ohuwe-Onmnea-Symbol, das für einen gewaltigen Sturm steht, wurde mit weißer Tinte mit Fingern auf den Glockenkörper gemalt.<li><b>Erhöht deutlich</b> die Bewegungsgeschwindigkeit des Geists, während er verhüllt ist.</li>","name":"„Windsturm“ – Weiß","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"Das Kuntin-Takkho-Symbol, das für ein rasches Herabstürzen auf die Beute steht, wurde mit weißer Tinte mit Fingern auf den Glockenkörper gemalt.<br><li><b>Verringert moderat</b> die Zeit bis zum Wiedererscheinen des Geists.</li>","name":"„Flinke Jagd“ – Weiß","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"Das Yiwarick-Symbol, das für dunkle Synergie steht, wurde mit weißer Tinte mit Fingern auf den Glockenkörper gezeichnet.<br><li><b>Verkürzt deutlich</b> die Zeit, die in verhülltem Zustand benötigt wird, um durch Fenster zu springen, Schließschränke zu öffnen, Paletten und zerstörbare Objekte zu zerstören oder Generatoren zu beschädigen.</li>","name":"„Schattentanz“ – Weiß","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"Das Kratin-Symbol, das für schnelles Passieren steht, wurde mit weißer Tinte mit Fingern auf den Glockenkörper gemalt.<br><li><b>Verringert enorm</b> die Zeit, die der Geist benötigt, um zu verschwinden.</li>","name":"„Flimmer“ – Weiß","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"Das Baikra-Kaeug-Symbol, das für Wildheit steht, wurde mit weißer Farbe auf den Glockenkörper gemalt.<br><li>Überraschungsangriffe fügen Überlebenden die Statuseffekte <b>Zerfleischt</b> und <b>Blutung</b> zu, bis sie vollständig geheilt sind.</li>","name":"„Blinder Krieger“ – Weiß","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"Das Ohuwe-Onmnea-Symbol, das für einen gewaltigen Sturm steht, wurde mit Blut auf den Glockenkörper gestempelt.<br><li><b>Erhöht enorm</b> die Bewegungsgeschwindigkeit des Geistes, während er verhüllt ist.</li>","name":"„Windsturm“ – Blut","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"Das Kuntin-Takkho-Symbol, das für ein rasches Herabstürzen auf die Beute steht, wurde mit Blut auf die Glockenkrone gestempelt.<br><li><b>Verringert deutlich</b> die Zeit bis zum Wiedererscheinen des Geists.</li>","name":"„Flinke Jagd“ – Blut","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"Das Yiwarick-Symbol, das für dunkle Synergie steht, wurde mit Blut auf den Glockenkörper gestempelt.<br><li><b>Verkürzt enorm</b> die Zeit, die in verhülltem Zustand benötigt wird, um durch Fenster zu springen, Schließschränke zu öffnen, Paletten und zerstörbare Objekte zu zerstören oder Generatoren zu beschädigen.</li>","name":"„Schattentanz“ – Blut","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"Das Kra-Frabai-Symbol, das für den uns überwachenden Entitus steht, wurde mit Blut auf die Glockenkrone gestempelt.<br><li>Entfesselt das versteckte Potenzial der Aurawahrnehmungsfähigkeit. Im verhüllten Zustand werden dir die Auren der Überlebenden im Umkreis von <b>12 Metern</b> angezeigt.</li>","name":"„Allsehend“ – Blut","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"Ein mit einem geknoteten Strick umwickelter Glockenklöppel, der einen gedämpften Ton erzeugt. Er verströmt eine übelwollende Aura.<br><li>Macht die Jammerglocke <b>vollkommen geräuschlos</b>.</li>","name":"Zierknoten-Klöppel","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"Das Kra-Frabai-Symbol, das für den uns überwachenden Entitus steht, glüht ominös auf der Glockenkrone.<br><li>Entfesselt unglaubliches Potenzial der Aurawahrnehmungsfähigkeit. Im verhüllten Zustand kann der <b>Reparaturfortschritt von Generatoren</b> an der <b>Intensität ihrer Auren</b></li> abgelesen werden.","name":"„Allsehend“ – Gespenst","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"Eine qualitativ hochwertige Kupplung, die der Kettensäge einen ruhigen Lauf gibt.<br><br><li><b>Verkleinert</b> die Kollisionszone während des Kettensägensprints.</li>","name":"Schwere Kupplung","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"Eine mechanische Vorrichtung, welche die Kraftstoffmenge begrenzt, die von kleinen Motoren aufgenommen werden kann, um eine gleichbleibende und zuverlässige Geschwindigkeit zu gewährleisten.<br><br><li>Überlebende, die von der Kettensäge getroffen werden, bekommen einen Gesundheitsstatus abgezogen.</li><li>Du erhältst <b>100 %</b> mehr Blutpunkte für Kettensägentreffer-Punktereignisse.</li>","name":"Tempodrossel","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Ein eingerissener und staubiger Filter, der allerdings immer noch besser funktioniert als das Serienmodell.<br><br><li><b>Erhöht leicht</b> die Überhitzungsbegrenzung der Kettensäge.</li>","name":"Luftfilter vom Schrottplatz","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"Stiefel mit einer Stahlschutzkappe für die Zehen.<br><br><li><b>Verkürzen leicht</b> die Erholungsdauer, nachdem man mit der Kettensäge ein Objekt getroffen hat.</li>","name":"Stahlkappenstiefel","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"Ein grob modifizierter Schalldämpfer, der einen erhöhten Luftfluss ermöglicht.<br><br><li><b>Verlängert leicht</b> die Geschwindigkeit, mit der die Kettensäge abkühlt.</li>","name":"Schalldämpfer mit Lochblech","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"Ein ruhmreicher, strahlender Gürtel, wie er von vielen Country-Boys getragen wird.<br><br><li><b>Verringert</b> den Terrorradius um 8 Meter, wenn die Kettensäge überhitzt.</li>","name":"Feister Gürtel","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"Erschwingliches Öl, mit dem laute Ketten geschmiert werden können.<br><br><li><b>Verringert leicht</b> die Lautstärke der Geräusche, die von der Kettensäge verursacht werden.</li>","name":"Noname-Motoröl","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"Ein Paar zuverlässiger Stiefel, das dem Leichnam von Max Thompson Sr. abgenommen wurde.<br><br><li><b>Erhöht moderat</b> die Steuerung des Kettensägensprints.</li>","name":"Dads Stiefel","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"Gravuren auf dem Gehäuse der Kettensäge, die anzeigen, wie viele Leben sie schon ausgelöscht hat. Verleiht dem Benutzer Entschlossenheit.<br><li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit der Kettensäge.</li><li><b>Verlängert leicht</b> die Aufladezeit.</li><li>Kombinierbar.</li>","name":"Todesgravuren","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"Eine kleine Anzahl Koffeinpillen, die sich in Evelyn Thompsons Handtasche fanden. Zu den Nebenwirkungen zählen Nervosität und Reizbarkeit.<br><br><li><b>Verringert leicht</b> für 30 Sekunden die Aufladezeit, nachdem man von einer Palette betäubt wurde.</li><br>","name":"Mutters Helferlein","flavor":"\\"Herr Doktor, bitte noch mehr davon.\\" – Evelyn Thompson","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"Eine spezielle Kette, die die Wahrscheinlichkeit eines Rückstoßes verringert.<br><br><li><b>Verkürzt deutlich</b> die Strafzeit, wenn man während eines Kettensägensprints gegen ein Hindernis stößt.</li>","name":"Rückstoßverringerungskette","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"Ein feuchter Brei aus duftenden Blättern. Ein Jäger kann damit seinen Geruch übertünchen, wenn er auf Beutefang ist.<br><br><li>Sobald du mit der Kettensäge einen Treffer landest, erhältst du für 15 Sekunden den Statuseffekt „Unentdeckbar“.</li>","name":"Blätterbrei","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"Gravuren auf dem Gehäuse der Kettensäge, die jene düstere Bestie repräsentieren, die im Nebel lebt. Verleiht dem Benutzer Entschlossenheit.<br><li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit während eines Kettensägensprints.</li><li><b>Verlängert leicht</b> die Aufladezeit der Kettensäge.</li>","name":"Verhängnisgravur","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"Dicke Schminke, die unter den Augen aufgetragen werden kann, um weniger geblendet zu werden.<br><br><li><b>Erhöht moderat</b> die Abkühlrate der Kettensäge, wenn du von einer Taschenlampe angestrahlt wirst.</li>","name":"Schwarze Schminke","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"Trotz der Verschmutzung mit Dreck und Öl ist dieser Vergaser gut eingestellt.<br><br><li><b>Verkürzt moderat</b> die Aufladezeit der Kettensäge.</li><li><b>Verringert</b> die Grundbewegungsgeschwindigkeit auf 4,4 m/s.","name":"Getunter Vergaser","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"Stiefel mit Metallstiften an den Sohlen gewähren bei jedem Schritt mehr Stabilität und Kontrolle auf matschigem Boden.<br><li><b>Verbessert enorm</b> das Steuerungsvermögen bei Nutzung der Kettensäge.</li><li><b>Erhöht deutlich</b> die Zeitstrafe, wenn man gegen Objekte stößt.</li>","name":"Nagelstiefel","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"Widerlich stinkende Handschuhe, die mit unbekannten Substanzen verschmutzt sind. Sie sind allerdings aus einem dicken Stoff gefertigt.<br><br><li><b>Verringert moderat</b> die Hitze, die beim Gasgeben an der Kettensäge entsteht.</li><br>","name":"Schweinestallhandschuhe","flavor":"\\"Die Seele eines hart arbeitenden Mannes kann durch nichts beschmutzt werden.\\" – Max Thompson Sr.","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"Eine leichte Kette, die das Gewicht der Kettensäge verringert und somit für mehr Beweglichkeit sorgt.<br><br><li>Setze einen Kettensägensprint fort, nachdem du eine Palette oder eine Wand zerstört hast.</li><li>Überlebende, die innerhalb von 5 Sekunden nach der Zerstörung einer Palette oder Wand von der Kettensäge getroffen werden, bekommen einen einzelnen Gesundheitsstatus abgezogen.</li>","name":"LoPro-Kette","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"Dies war der erste Stein, der fiel, als die Barrikade von Max Juniors Zimmer einstürzte. Er steht bildhaft für seine Gefangenschaft.<br><br><li>Nachdem du einen Kettensägensprint 2 Sekunden lang durchgehalten hast, erhältst du den Statuseffekt „Unentdeckbar“. Dieser bleibt, bis du den Sprint beendest.</li><br>","name":"Schillernder Ziegelstein","flavor":"\\"Was machst du da für einen Aufstand, Junge?\\" – Max Thompson Sr.","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"Ein meisterhaft angefertigter Schalldämpfer für eine Kettensäge, der alle anderen in den Schatten stellt.<br><br><li>Die Kettensäge ist für Überlebende außerhalb des Terrorradius nicht zu hören.</li>","name":"Apex-Schalldämpfer","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"Ein unbemaltes, aus billigem Holz geschnitztes Spielzeug, das einem Pferd ähnelt. Einst war es das Symbol tiefer Verbundenheit zwischen einem katatonischen Patienten und seiner Krankenschwester.<br><li><b>Verringert moderat</b> die zusätzliche Ermüdung, die von misslungenen Teleportation-Angriffen herrührt.</li>","name":"Holzpferd","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"Ein parasitenbesetzter Nissenkamm aus der Klinik. Einst war er das Symbol tiefer Verbundenheit zwischen einer ängstlichen Patientin und ihrer Krankenschwester.<br><li><b>Verringert moderat</b> die Distanz von Teleportations-Sprungangriffen.</li><li>Erhöht die Blutpunkte für Punktereignisse durch <i>Teleportationsangriffe</i> um <b>100 %</b>.</li>","name":"Weißer Nissenkamm","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"Ein glanzloser, teilweise verrosteter und schmutziger Löffel aus Metall. Konfisziert vom Patienten aus Zimmer 202, dem „Bösen Mann“.<br><li>Wird ein Überlebender erfolgreich mit einer Teleportation angegriffen, werden seine Schmerzensschreie <b>60 Sekunden</b> lang <b>moderat lauter</b>.</li>","name":"Metalllöffel","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"Ein verfaulter Backenzahn, der dem toten „Bösen Mann“ entrissen wurde.<br><li>Triffst du einen Überlebenden mit einem Flimmer-Angriff, wird dessen Aura enthüllt, sofern dieser sich in einem Umkreis von <b>28 Metern</b> heilt oder geheilt wird, und zwar für <b>60 Sekunden</b>.</li>","name":"Andenken an den „Bösen Mann“","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"Eine verkohlte und zerbrochene Taschenuhr mit klappernden Teilen. Stammt von Krankenpflegerin Moris’ Leichnam.<br><li><b>Verlängert moderat</b> das Zeitfenster für Mehrfach-Teleportation.</li>","name":"Taschenuhr","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"Ein wertloses Schmuckstück, das vielleicht für jemanden von großer Bedeutung war. Stammt vom Leichnam des ängstlichen Mädchens.<br><li><b>Verringert moderat</b> die maximale Distanz der Teleportation.</li><li>Erhöht die Blutpunkte für Punktereignisse mit <i>präziser Teleportation</i> um <b>100 %</b>.</li>","name":"Glanzloser Armreif","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"Ein schwarzes Seil, das in Zeiten der Trauer als Gürtel genutzt wurde. Stammt von Pater Campbells Leichnam.<br><li><b>Verlängert moderat</b> die Ladegeschwindigkeit der Teleportation.</li>","name":"Dunkler Gürtel","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"Ein Tannenzapfen, der unerwartet die sich wiederholenden Bewegungen eines Patienten minderte. Stammt vom Leichnam des katatonischen Jungen.<br><li><b>Verringert deutlich</b> die zusätzliche Ermüdung durch Mehrfach-Teleportation.</li>","name":"Schatz des katatonischen Jungen","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"Der nervöse und zittrige Atemzug, gestohlen vom „Bösen Mann“. Pulsiert aggressiv und springt, wenn die Krankenschwester ihn berührt.<br><li>Wird ein Überlebender erfolgreich mit einer Teleportation angegriffen, <b>verliert die Krankenschwester die Fähigkeit, zur Teleportation</b> und erhöht sich ihre Grundbewegungsgeschwindigkeit auf <b>4,6 m/s</b>, und zwar für <b>60 Sekunden</b>.</li>","name":"Krampfhafter Atem","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"Der langsame und tiefe Atemzug, gestohlen vom fetten Krankenpfleger. Er vibriert matt, wenn die Krankenschwester ihn berührt.<br><li><b>Erhöht deutlich</b> die maximale Reichweite der Teleportation.</li><li><b>Verlängert deutlich</b> die maximale Aufladezeit der Teleportation.</li>","name":"Heftiges Keuchen","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"Der pfeifende und rasselnde Atem, gestohlen von Pater Campbell. Krümmt und biegt sich lautlos, wenn die Krankenschwester ihn berührt.<br><li><b>Verlängert deutlich</b> die Ladegeschwindigkeit der Teleportation.</li>","name":"Schwaches Röcheln","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"Der unregelmäßige und schwächer werdende Atemzug des katatonischen Jungen. Er ist normalerweise gleichmäßig und ruhig, wird aber unglaublich hektisch, sobald die Krankenschwester ihn berührt.<br><li><b>Verkürzt moderat</b> die Ermüdungszeit der Teleportation.</li>","name":"Unkoordinierter Atem","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"Das überraschte Keuchen von einem ängstlichen Mädchen, für das die Krankenschwester Zuneigung empfand. Es zuckt energisch zusammen, wenn die Krankenschwester es berührt.<br><li>Nutzt sie die Teleportation, um an einem Überlebenden vorbeizukommen, schreit dieser auf. Gewährt <b>200 Blutpunkte</b> in der Kategorie <i>Hinterhältigkeit</i>.</li>","name":"Ängstliches Keuchen","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"Ein zerfetztes Stück eines rot und schwarz karierten Lappens. Der Stofffetzen erfüllt die Krankenschwester mit verheerender Konzentration.<br><li>Ermöglicht es der Krankenschwester, Zielgebiete der Teleportation zu sehen.</li>","name":"Karierter Lappen","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"Ein kraftvoller letzter Atemzug, gestohlen von Harvey Kavanagh, einem Krankenpfleger der Crotus-Prenn-Anstalt. Er wabbelt heftig in den Händen der Krankenschwester.<br><li><b>Erhöht enorm</b> die maximale Reichweite der Teleportation.</li><li><b>Verlängert enorm</b> die maximale Aufladezeit der Teleportation.</li>","name":"Kavanaghs letzter Atem","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"Ein kraftvoller letzter Atemzug, gestohlen von Mary Jenner, einer Patientin der Crotus-Prenn-Anstalt. Zittert heftig in der Hand der Krankenschwester.<br><li>Nach der Teleportation kann die Krankenschwester sofort zu ihrer ursprünglichen Position zurückteleportieren, indem du die <i>Taste für die aktive Fähigkeit</i> drückst. Muss ausgelöst werden, bevor die Krankenschwester von Ermüdung heimgesucht wird.</li>","name":"Jenners letzter Atem","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"Ein kraftvoller letzter Atemzug, gestohlen von Pater Campbell, dem Priester der Crotus-Prenn-Anstalt. In den Händen der Krankenschwester knistert er stark.<br><li>Nach dem Wiedererscheinen aus einer komplett aufgeladenen Teleportation kann sich die Krankenschwester sofort mit halber Aufladung in ihre aktuelle Blickrichtung teleportieren.</li>","name":"Campbells letzter Atem","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"Ein kraftvoller letzter Atemzug, gestohlen vom „Bösen Mann“, einem Patienten der Crotus-Prenn-Anstalt. In den Händen der Krankenschwester gebärdet er sich wie wild.<br><li>Wird ein Überlebender erfolgreich mit einer Teleportation angegriffen, erhält die Krankenschwester den Status <b>Unentdeckbar</b>, und zwar für <b>16 Sekunden.</b>.</li><li>Dieser Effekt kann nur einmal alle <b>60 Sekunden</b> ausgelöst werden.</li>","name":"Letzter Atem des „Bösen Mannes“","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"Ein weißes, sauberes Band, das Teil eines heiligen Buchs war. Es ist das Symbol einer Auseinandersetzung.<br><li>Fügt <b>1</b> Teleportation-Aufladung hinzu.</li><li>Die Krankenschwester kann nur noch zu Orten in ihrer Sichtlinie teleportieren.</li>","name":"Zerfetztes Lesezeichen","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"Eine Streichholzschachtel mit einer seltsamen Sammlung nicht zusammenpassender Knöpfe. Sie dient als Erinnerung an einen schrecklichen Ort.<br><li>Entfernt <b>1</b> Aufladungseinheit der Teleportation.</li><li>Erhöht die Grundbewegungsgeschwindigkeit der Krankenschwester auf <b>4,2 m/s</b>.</li>","name":"Streichholzschachtel","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"Ein sehr billiges Schmuckstück aus Plastik. Es wurde bemalt, um wertvollerem Material zu ähneln.<br><li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit beim Verfolgen.</li>","name":"Billige Ohrringe","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"Eine „romantische“, wenn auch leicht schäbige Nachricht, um die Aufmerksamkeit einer weiblichen Geliebten zu erregen.<br><li><b>Erhöht leicht</b> den Sprungangriff bei <b>Diabolik I</b>.</li>","name":"Notiz des Freunds","flavor":"„Die Nachricht ist unterschrieben mit: D.“","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"Ein einzelnes, leicht gelocktes, blondes Haar.<br><li><b>Verlängert leicht</b> die Dauer von <b>Diabolik III</b>.</li><li><b>Erhöht leicht</b> die erforderliche Menge an Diabolik zum ersten Erreichen von <b>Diabolik III</b>.</li>","name":"Blondes Haar","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"Ein winziges Stück eines stark reflektierenden Materials, sehr wahrscheinlich von einem zerbrochenen Spiegel.<br><li><b>Diabolik II zeigt die Auren der Überlebenden an</b>, die mindestens <b>1 Sekunde</b> lang verfolgt wurden.</li><li>Die Auren bleiben <b>2 Sekunden</b> lang sichtbar.</li>","name":"Reflektierende Scherbe","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"Ein rosafarbener, teilweise verblasster und vertrockneter Rittersporn von einem Grabstein.<br><li><b>Erhöht leicht</b> die Rate, mit der Diabolik beim Verfolgen eines Überlebenden verdient wird.</li>","name":"Gedenkblume","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"Eine üppige Halskette, hergestellt aus Glasperlen und preiswertem Metall. Eines von Judiths Lieblingsstücken.<br><li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit beim Verfolgen.</li>","name":"Schmuck","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"Eine Bürste mit Nylonborsten, um Struktur und Weichheit ins Haar zu bringen.<br><li><b>Verlängert moderat</b> die Dauer von <b>Diabolik III</b>.</li><li><b>Erhöht leicht</b> die erforderliche Menge an Diabolik zum ersten Erreichen von <b>Diabolik III</b>.</li>","name":"Haarbürste","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"Ein winziges Stück gefärbten Glases, wahrscheinlich von einem zerbrochenen Gegenstand. Es ist unmöglich, seine genaue Herkunft zu bestimmen.<br><li><b>Diabolik I zeigt die Auren der Überlebenden an</b>, die mindestens <b>1 Sekunde</b> lang verfolgt wurden.</li><li>Die Auren bleiben <b>3 Sekunden</b> lang sichtbar.</li>","name":"Glasstück","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"Ein grauer Hase, der vom Kopf bis zum Schwanz aufgeschlitzt wurde.<br><li><b>Verringert moderat</b> den Terrorradius von <b>Diabolik II</b>.</li><li><b>Erhöht moderat</b> den Terrorradius von <b>Diabolik III</b>.</li>","name":"Toter Hase","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"Ein großes und scharfes Teilstück eines zerbrochenen Spiegels.<br><li><b>Diabolik II zeigt die Auren der Überlebenden an</b>, die mindestens <b>1 Sekunde</b> lang verfolgt wurden.</li><li>Die Auren bleiben <b>5 Sekunden</b> lang sichtbar.</li>","name":"Spiegelscherbe","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"Ein Tagebuch, das als Eigentum von Judith M. Myers gekennzeichnet ist. Die meisten Seiten sind mit beängstigenden und verstörenden Zeichnungen verunstaltet.<br><li>Ein Überlebender wird Ziel deiner <b>Besessenheit</b>.</li><li><b>Erhöht deutlich</b> die Rate, mit der Diabolik verdient wird, während du das Ziel deiner Besessenheit verfolgst.</li><li><i>Pro Partie kann nur ein Überlebender zum Ziel der Besessenheit werden.</i></li>","name":"Judiths Tagebuch","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"Eine karge Holzkiste, in der einst Kosmetikgegenstände aufbewahrt wurden.<br><li><b>Erhöht deutlich</b> die Bewegungsgeschwindigkeit beim Verfolgen.</li>","name":"Schmuckkästchen","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"Eine Hochglanzseite, die aus dem „Haddonfield High School“-Jahrbuch von 1965 herausgerissen wurde und die Judith Myers gewidmet ist.<br><li><b>Erhöht moderat</b> die Rate, mit der Diabolik beim Verfolgen eines Überlebenden verdient wird.</li>","name":"Gedenkseite für J. Myers","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"Eine blau karierte Schleife zum Zusammenbinden der Haare.<br><li><b>Verlängert deutlich</b> die Dauer von <b>Diabolik III</b>.</li><li><b>Erhöht leicht</b> die erforderliche Menge an Diabolik zum ersten Erreichen von <b>Diabolik III</b>.</li>","name":"Haarschleife","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"Ein aufstellbarer, tragbarer Schminkspiegel in perfektem Zustand, abgesehen von einer feinen Staubschicht und Gesichtspuder.<br><li><b>Diabolik II zeigt die Auren von Überlebenden</b> beim Verfolgen innerhalb einer Reichweite von <b>16 Metern</b> an.</li><li>Diabolik kann <b>STUFE II</b> nicht überschreiten.</li><li><b>Verringert leicht</b> die Bewegungsgeschwindigkeit.</li><li>Für jedes <b>Treffer</b>-Punktereignis werden <b>100 %</b> Blutpunkte je <b>Treffer</b>-Punktereignis in der Kategorie <b>Brutalität</b> gewährt, sowie zusätzlich <b>150 %</b> Blutpunkte in der Kategorie <b>Hinterhältigkeit</b>.</li>","name":"Schminkspiegel","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"Ein faustgroßes Stück Granit, das von einem zerbrochenen Grabstein stammt.<br><li>Schaltet die Fähigkeit frei, mit <b>Diabolik III</b> <b>gesunde oder verletzte Überlebende zu töten</b>.</li><li><b>Deaktiviert</b> die Fähigkeit, mit <b>Diabolik III</b> Überlebende zu verfolgen.</li><li>Das Töten eines Überlebenden <b>verringert deutlich</b> die Stärke von Diabolik.</li><li><b>Erhöht deutlich</b> die erforderliche Menge an Diabolik zum ersten Erreichen von <b>Diabolik III</b>.</li>","name":"Grabsteinstück","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"Ein tragbarer Schminkspiegel, der mit einem scharfen Metallgegenstand heftig zerkratzt wurde.<br><li><b>Diabolik I zeigt die Auren von Überlebenden</b> beim Verfolgen innerhalb einer Reichweite von <b>32 Metern</b> an.</li><li>Diabolik kann <b>STUFE I</b> nicht überschreiten.</li><li>Für jedes <b>Treffer</b>-Punktereignis werden <b>100 %</b> Blutpunkte je <b>Treffer</b>-Punktereignis in der Kategorie <b>Brutalität</b> gewährt, sowie zusätzlich <b>200 %</b> Blutpunkte in der Kategorie <b>Hinterhältigkeit</b>.</li>","name":"Zerkratzter Spiegel","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"Eine abgeschnittene, blonde Haarlocke, zusammengehalten von einem schwarzen Haargummi.<br><li><b>Erhöht enorm</b> die Dauer von <b>Diabolik III</b>.</li><li><b>Erhöht moderat</b> die erforderliche Menge an Diabolik zum ersten Erreichen von <b>Diabolik III</b>.</li>","name":"Haarlocke","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"Ein großer und schwerer Granitgrabstein, der vom „Mt. Sinclair“-Friedhof gestohlen wurde und Judith Myers gehört.<br><li>Schaltet die Fähigkeit frei, mit <b>Diabolik III</b> <b>gesunde oder verletzte Überlebende zu töten</b>.</li><li><b>Deaktiviert</b> die Fähigkeit, mit <b>Diabolik III</b> Überlebende zu verfolgen.</li><li><b>Erhöht enorm</b> die erforderliche Menge an Diabolik zum ersten Erreichen von <b>Diabolik III</b>.</li><li><b>Verringert moderat</b> die Bewegungsgeschwindigkeit.</li>","name":"Judiths Grabstein","flavor":"\\"Hier ruht unsere geliebte Tochter.\\"","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"Ein Büschel blonder Haare, das jemandem gewaltsam vom Kopf gerissen wurde. Verströmt einen leichten, femininen Blütenduft.<br><li><b>Unbegrenzte</b> Dauer von <b>Diabolik III</b>.</li><li><b>Erhöht enorm</b> die erforderliche Menge an Diabolik zum ersten Erreichen von <b>Diabolik III</b>.</li>","name":"Duftendes Haarbüschel","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"Ein starres Schmuckstück für den Hals, das aus toten Pflanzen hergestellt wurde.<br><li><b>Verkürzt leicht</b> die Zeit zur Platzierung von Phantomfallen.</li>","name":"Seil-Halskette","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"Winzige Eierschalenteile, die blassgolden schimmern.<br><li><b>Erhöht leicht</b> die Dauer von ausgelösten Phantomfallen.</li>","name":"Pulverisierte Eierschale","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"Ein kleiner Schlammbrocken, dessen schwarze Farbe von Überresten toter Fliegen stammt. Erhöht bei Verwendung die Ausdauer.<br><li><b>Erhöht leicht</b> die Entfernung, aus der die Hexe sich zu ihren Fallen teleportieren kann.</li>","name":"Schlamm mit toten Fliegen","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"Trübes Wasser in einem Tablettenfläschchen aus einer anderen Zeit.<br><li><b>Erhöht leicht</b> den Wirkungsbereich der Phantomfalle.</li>","name":"Sumpfwasser","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"Eine Handvoll kleiner, makelloser Blütenstände, von einem zarten gräulichen Fell bedeckt.<br><li>Zeigt die Auren von Überlebenden <b>3 Sekunden</b> lang an, wenn sie die Phantomfalle auslösen.</li>","name":"Weidenkätzchen","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"Eine Hälfte einer perfekten runden und leeren Eierschale.<br><li><b>Erhöht moderat</b> die Dauer von ausgelösten Phantomfallen.</li>","name":"Eierschalenhälfte","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"Eine Handvoll gelblicher Flügel, getrocknet und knusprig. Erhöht bei Verwendung die Ausdauer.<br><li><b>Erhöht moderat</b> die Entfernung, aus der die Hexe sich zu ihren Fallen teleportieren kann.</li>","name":"Libellenflügel","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"Ein starres Schmuckstück für den Hals, das aus toten Pflanzen hergestellt wurde und mit plump angefügter Zypressenrinde und Sumpfmoos verziert ist.<br><li><b>Verkürzt moderat</b> die Zeit zur Platzierung von Phantomfallen.</li>","name":"Zypressen-Halskette","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"Verdorbenes Wasser, aufgefangen in einem gefalteten Wasserlilienblatt.<br><li><b>Erhöht moderat</b> den Wirkungsbereich der Phantomfalle.</li>","name":"Blutiges Wasser","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"Drei zerbrechliche Weidenzweige, zusammengebunden, um einen dreieckigen Kranz zu formen.<br><li>Zeigt die Auren von Überlebenden <b>5 Sekunden</b> lang an, wenn sie die Phantomfalle auslösen.</li>","name":"Weidenkranz","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"Ein starres Schmuckstück für den Hals, das aus toten Pflanzen hergestellt wurde und mit verwelkten Orchideenblüten und -blättern verziert ist.<br><li><b>Verkürzt deutlich</b> die Zeit zum Platzieren von Phantomfallen.</li>","name":"Sumpforchideen-Halskette","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"Eine riesige Schlammzikade, mit einer feinen Ascheschicht überzogen. Knusprig. Erhöht bei Verwendung die Ausdauer.<br><li><b>Erhöht deutlich</b> die Entfernung, aus der die Hexe sich zu ihren Fallen teleportieren kann.</li>","name":"Getrocknete Zikade","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"Ein blassoranges Schildkrötenei, das aufgesprungen und leer ist.<br><li><b>Erhöht deutlich</b> die Dauer von ausgelösten Phantomfallen.</li>","name":"Zerbrochenes Schildkrötenei","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"Eine Handvoll Schlamm voller karmesinroter Blutadern. Die blutigen Schichten verleihen dem Schlamm Macht.<br><li><b>Erhöht deutlich</b> den Wirkungsbereich der Phantomfalle.</li>","name":"Blutiger Schlamm","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"Die zerfleischte, abgetrennte Hand des Schlachters aus dem Kannibalendorf. Die darin befindliche Lebensessenz setzt ungeheure Kräfte in der Macht der Hexe frei.<br><li>Schlammphantome können mit anderen Objekten zusammenstoßen.</li><li>Entfernt die Fähigkeit der Hexe, sich zu Fallen zu teleportieren.</li><li>Gewährt <b>300 %</b> Blutpunkte durch Hinterhältigkeit.</li><li>Übertrumpft alle anderen Zusätze.</li>","name":"Vernarbte Hand","flavor":"„...“ –Der Schlachter","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"Fesseln, die im Keller des Kannibalendorfs einst zum Festhalten von Gefangenen und Kadavern verwendet wurden. Die darin befindliche Lebensessenz setzt ungeheure Kräfte in der Macht der Hexe frei.<br><li>Ausgelöste Phantomfallen zeigen dem Überlebenden nicht an, dass sie ausgelöst wurden.</li><li>Die Falle erzeugt kein Hexenphantom.</li>","name":"Rostige Fesseln","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"Das kalte Herz der Stammesältesten aus dem Kannibalendorf. Die darin befindliche Lebensessenz setzt ungeheure Kräfte in der Macht der Hexe frei.<br><li>Verringert die Herzschlagreichweite der Hexe auf <b>0</b>, wenn ein Überlebender eine Phantomfalle auslöst.</li><li>Erhöht den Herzschlagradius des Schlammphantoms um <b>16 Meter</b>.</li>","name":"Großmutters Herz","flavor":"\\"Bring mir ein weiteres Stück des Mädchens.\\" – Großmutter","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"Das Ohr des tauben Jungen aus dem Kannibalendorf. Aufgrund diverser Schläge gegen den Kopf etwas deformiert. Die darin befindliche Lebensessenz setzt ungeheure Kräfte in der Macht der Hexe frei.<br><li>Überlebende, die eine Phantomfalle auslösen, werden für <b>6 Sekunden</b> taub.</li>","name":"Entstelltes Ohr","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"Ein Kinderschuh, der lange Zeit im Sumpfwasser verloren war. Die darin befindliche Lebensessenz setzt ungeheure Kräfte in der Macht der Hexe frei.<br><li>Überlebende im Umkreis der ausgelösten Phantomfalle leiden unter dem Statuseffekt <b><i>Eingeschränkt</i></b>.</li><li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit der Hexe.</li><li>Entfernt die Fähigkeit der Hexe, sich zu Fallen zu teleportieren.</li>","name":"Durchnässter Schuh","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"Ein kleines Stück Baumwollstoff des Kleids, das Lisa Sherwood am Tag ihres Verschwindens trug. Die darin befindliche Lebensessenz setzt ungeheure Kräfte in der Macht der Hexe frei.<br><li>Die Hexe kann sich zu jeder Phantomfalle im Level teleportieren.</li><li>Die Teleportation zu Phantomfallen hat eine Abklingzeit von <b>15 Sekunden</b>.</li>","name":"Makelloser Stofffetzen","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"Eine modrige Elektrode, die trotzdem noch eine schwache elektrische Ladung leitet.<br><li><b>Erhöht leicht</b> die Reichweite der <b>Schocktherapie</b>.</li>","name":"Alte Elektrode","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"Eine weiße Springer-Schachfigur aus Ahornholz. Dieses Geschenk eines alten Mannes ruft alte Erinnerungen zurück und erfüllt den Doktor mit verheerender Konzentration.<br><li>Zeigt den Wirkungsbereich deines <b>Schocktherapie</b>-<i>Spezialangriffs</i> an.</li>","name":"Ahornspringer","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"Ein konventionelles EKT-Verfahren. Es ist Teil des täglichen Ablaufs eines Patienten in Lérys Gedenkinstitut. Kann beim Patienten leichte Verwirrung hervorrufen.<br><li><b>Verkürzt leicht</b> die Abklingzeit von <b>statisches Feld</b>.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden unter dem <i>Symptom der Ordnung</i>.<li>Zerstörte Paletten können durch <i>Trugbilder von Paletten</i> ersetzt werden, die bestehen bleiben, bis man sich ihnen nähert.</li><li>Ein neues <i>Trugbild einer Palette</i> wird alle <b>20 Sekunden</b> an der Position einer willkürlich ausgewählten zerstörten Palette erzeugt.</li><li><b>Der Doktor</b> sieht die Auren der <i>Paletten-Trugbilder</i>.</li>","name":"„Ordnung“ – Klasse I","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"Ein riskantes EKT-Verfahren, basierend auf einer tiefen Wellenlänge, die diverse geistige Beschwerden lindert. Da Carters Funke als Quelle genutzt wird, kann die Prozedur beim Patienten milde Angstgefühle hervorrufen.<br><li><b>Vergrößert leicht</b> deinen Terrorradius, während <b>statisches Feld</b> bereit ist.</li><li><b>Verkleinert leicht</b> deinen Terrorradius, während <b>statisches Feld</b> sich in der Abklingzeit befindet.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden am <i>Symptom der Ruhe</i>.<li><b>Wahnsinn II</b>: Bewirkt <b>zeitweise</b>, dass Überlebende in der Ferne eine <i>Illusion des Terrorradius</i> hören.</li><li><b>Wahnsinn III</b>: Bewirkt <b>dauerhaft</b>, dass Überlebende in der Ferne eine <i>Illusion des Terrorradius</i> hören.</li>","name":"„Ruhe“ – Klasse I","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"Eine Audiokassette des Erweckungsprojekts, die größtenteils Rauschen enthält. Öffnet den Verstand des Doktors für alternative Behandlungsmethoden.<br><br><li>Die <i>Spezialfähigkeit</i> <b>Schocktherapie</b> wechselt von einem Kegel zu einem Ring, der <b>8 Meter</b> vor <b>dem Doktor</b> erscheint und einen äußeren Radius von <b>4,2 Metern</b> und einen inneren Radius von <b>3 Metern</b> hat.</li>","name":"Weggeworfene Kassette","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"Eine so gut wie neue Standardelektrode für die Elektrokrampfbehandlung.<br><li><b>Erhöht moderat</b> die Reichweite der <b>Schocktherapie</b>.</li>","name":"Glänzende Elektrode","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"Eine Audiokassette des Erweckungsprojekts mit der ungekürzten Befragung eines Opfers. Öffnet den Verstand des Doktors für alternative Behandlungsmethoden.<br><li>Die <i>Spezialfähigkeit</i> <b>Schocktherapie</b> wechselt von einem Kegel zu einem Strahl mit einer Reichweite von <b>24 Metern</b> und einer Breite von <b>2 Metern</b>.</li>","name":"Befragungskassette","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"Ein im Nebel entwickeltes, experimentelles EKT-Verfahren. Verwendet eine starke Wellenlänge, die das Bewusstsein des Patienten mit dem des Doktors verbindet. Diese Prozedur ist bekannt dafür, milde Halluzinationen beim Patienten hervorzurufen.<br><li>Auren von Überlebenden werden <b>1 Sekunde</b> lang angezeigt, wenn ihre <b>Wahnsinnsstufe</b> zunimmt.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden am <i>Symptom des Zwangs</i>.</li><li><b>Erhöht moderat</b> die Dauer der Erscheinung von <i>Trugbildern des Doktors</i>.</li><li><b>Der Doktor</b> sieht die Auren der <i>Trugbilder des Doktors</i>.</li>","name":"„Zwang“ – Klasse II","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"Ein EKT-Verfahren mit sehr starker Reizwirkung. Es ist Teil des täglichen Ablaufs eines Patienten in Lérys Gedenkinstitut. Kann beim Patienten moderate Verwirrung hervorrufen.<br><li><b>Verkürzt moderat</b> die Abklingzeit von <b>statisches Feld</b>.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden unter dem <i>Symptom der Ordnung</i>.<li>Zerstörte Paletten können durch <i>Trugbilder von Paletten</i> ersetzt werden, die bestehen bleiben, bis man sich ihnen nähert.</li><li>Ein neues <i>Trugbild einer Palette</i> wird alle <b>20 Sekunden</b> an der Position einer willkürlich ausgewählten zerstörten Palette erzeugt.</li><li><b>Der Doktor</b> sieht die Auren der <i>Paletten-Trugbilder</i>.</li><span class=\\"FlavorText\\">„Nebenwirkungen sind sehr selten.“ – Lérys Gedenkinstitut</span>","name":"„Ordnung“ – Klasse II","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"EKT-Verfahren des Erweckungsprojekts zur disziplinarischen Maßregelung, das eine fixe Menge an hoher Spannung einsetzt. Kann beim Patienten moderate Paranoia auslösen.<br><li><b>Verkürzt leicht</b> die Zündungsverzögerung von <b>Schocktherapie</b>.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden am <i>Symptom der Disziplin</i>.<li><b>Wahnsinn II</b>: Während der Jagd sehen Überlebende das <i>Trugbild eines roten Flecks</i> und den <i>Terrorradius</i>, als wäre <b>der Doktor</b> direkt hinter ihnen. Dieser Effekt hält noch <b>6 Sekunden</b> lang an, nachdem die Jagd zu Ende ist.</li><li><b>Wahnsinn III</b>: Das <i>Trugbild des roten Flecks</i> und der <i>Terrorradius</i> sind dauerhaft aktiv.</li><li><b>Der Doktor</b> sieht das <i>Trugbild des roten Flecks</i>.</li><span class=\\"FlavorText\\">„Unsere Patienten genießen die sorgfältigsten Umerziehungsmethoden.“ – Lérys Gedenkinstitut</span>","name":"„Disziplin“ – Klasse II","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"Ein riskantes EKT-Verfahren, basierend auf einer tiefen Wellenlänge, die diverse geistige Beschwerden lindert. Da Carters Funke als Quelle genutzt wird, kann die Prozedur beim Patienten moderate Angstgefühle hervorrufen.<br><li><b>Vergrößert moderat</b> deinen Terrorradius, während <b>statisches Feld</b> bereit ist.</li><li><b>Verkleinert moderat</b> deinen Terrorradius, während <b>statisches Feld</b> sich in der Abklingzeit befindet.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden am <i>Symptom der Ruhe</i>.<li><b>Wahnsinn II</b>: Bewirkt <b>zeitweise</b>, dass Überlebende in der Ferne eine <i>Illusion des Terrorradius</i> hören.</li><li><b>Wahnsinn III</b>: Bewirkt <b>dauerhaft</b>, dass Überlebende in der Ferne eine <i>Illusion des Terrorradius</i> hören.</li><span class=\\"FlavorText\\">„Die Elektrokrampftherapie ist eine der sichersten medizinischen Methoden.“ – Lérys Gedenkinstitut</span>","name":"„Ruhe“ – Klasse II","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"Eine experimentelle Elektrode, die über längere Zeit hinweg sehr hohen Ladungen standhalten kann.<br><li><b>Erhöht deutlich</b> die Reichweite deiner <b>Schocktherapie</b>.</li>","name":"Starke Reizelektrode","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"Ein im Nebel entwickeltes, experimentelles EKT-Verfahren. Verwendet eine starke Reizwellenlänge, um das Bewusstsein des Patienten mit dem des Doktors zu verbinden. Diese Prozedur ist bekannt dafür, äußerst starke Halluzinationen beim Patienten hervorzurufen.<br><li>Auren von Überlebenden werden <b>2 Sekunden</b> lang angezeigt, wenn ihre <b>Wahnsinnsstufe</b> zunimmt.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden am <i>Symptom des Zwangs</i>.<li><b>Erhöht moderat</b> die Dauer der Erscheinung von <i>Trugbildern des Doktors</i>.</li><li><b>Der Doktor</b> sieht die Auren der <i>Trugbilder des Doktors</i>.</li>","name":"„Zwang“ – Klasse III","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"EKT-Verfahren des Erweckungsprojekts zur disziplinarischen Maßregelung, das eine fixe Menge an sehr hoher Spannung einsetzt. Kann beim Patienten schwere Paranoia auslösen.<br><li><b>Verkürzt moderat</b> die Zündungsverzögerung von <b>Schocktherapie</b>.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden am <i>Symptom der Disziplin</i>.<li><b>Wahnsinn II</b>: Während der Jagd sehen Überlebende das <i>Trugbild eines roten Flecks</i> und den <i>Terrorradius</i>, als wäre <b>der Doktor</b> direkt hinter ihnen. Dieser Effekt hält noch <b>6 Sekunden</b> lang an, nachdem die Jagd zu Ende ist.</li><li><b>Wahnsinn III</b>: Das <i>Trugbild des roten Flecks</i> und der <i>Terrorradius</i> sind dauerhaft aktiv.</li><li><b>Der Doktor</b> sieht das <i>Trugbild des roten Flecks</i>.</li><span class=\\"FlavorText\\">„Respekt gegenüber unseren Patienten zählt zu unseren Grundprinzipien.“ – Lérys Gedenkinstitut</span>","name":"„Disziplin“ – Klasse III","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"Ein im Nebel entwickeltes, experimentelles EKT-Verfahren mit hastig geschriebenen Anmerkungen. Verwendet eine unerträgliche Reizwellenlänge, um das Bewusstsein des Patienten mit dem des Doktors zu verbinden. Diese Prozedur ist bekannt dafür, starke Halluzinationen beim Patienten hervorzurufen.<br><li>Auren von Überlebenden werden <b>3 Sekunden</b> lang angezeigt, wenn ihre <b>Wahnsinnsstufe</b> zunimmt.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden am <i>Symptom des Zwangs</i>.<br><li><b>Erhöht moderat</b> die Dauer der Erscheinung von <i>Trugbildern des Doktors</i>.</li><li><b>Der Doktor</b> sieht die Auren der <i>Trugbilder des Doktors</i>.</li><span class=\\"FlavorText\\">„ICH KANN IHRE <u>ABSCHEULICHEN</u> KRANKHEITEN SEHEN.“ – Notizen eines unbekannten Verfassers</span>","name":"„Zwang“ – Carters Notizen","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"Eine experimentelle Version des EKT-Verfahrens mit Kommentaren von Doktor Herman Carter höchstpersönlich. Der lange, fortdauernde Stimulus versetzt den Patienten in den Zustand schwerer Verwirrung.<br><li><b>Verkürzt deutlich</b> die Abklingzeit von <b>statisches Feld</b>.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden unter dem <i>Symptom der Ordnung</i>.<li>Zerstörte Paletten können durch <i>Trugbilder von Paletten</i> ersetzt werden, die bestehen bleiben, bis man sich ihnen nähert.</li><li>Ein neues <i>Trugbild einer Palette</i> wird alle <b>20 Sekunden</b> an der Position einer willkürlich ausgewählten zerstörten Palette erzeugt.</li><li><b>Der Doktor</b> sieht die Auren der <i>Paletten-Trugbilder</i>.</li><span class=\\"FlavorText\\">„Der Stimulus muss auf einer <u>Krämpfe verursachenden</u> Stufe gehalten werden.“ – H. Carter</span>","name":"„Ordnung“ – Carters Notizen","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"EKT-Verfahren des Erweckungsprojekts zur disziplinarischen Maßregelung mit Kommentaren von Doktor Herman Carter höchstpersönlich. Die unerträglich hohe Spannung versetzt den Patienten in einen Zustand schwerer Paranoia.<br><li><b>Verkürzt deutlich</b> die Zündungsverzögerung von <b>Schocktherapie</b>.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden am <i>Symptom der Disziplin</i>.<li><b>Wahnsinn II</b>: Während der Jagd sehen Überlebende das <i>Trugbild eines roten Flecks</i> und den <i>Terrorradius</i>, als wäre <b>der Doktor</b> direkt hinter ihnen. Dieser Effekt hält noch <b>6 Sekunden</b> lang an, nachdem die Jagd zu Ende ist.</li><li><b>Wahnsinn III</b>: Das <i>Trugbild des roten Flecks</i> und der <i>Terrorradius</i> sind dauerhaft aktiv.</li><li><b>Der Doktor</b> sieht das <i>Trugbild des roten Flecks</i>.</li><span class=\\"FlavorText\\">„Um zu verhindern, dass unsere beharrlicheren Subjekte einen Rückfall erleiden, ist der Einsatz maximaler Stufen für Disziplinarstrafen genehmigt.“ – H. Carter</span>","name":"„Disziplin“ – Carters Notizen","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"Eine experimentelle Version des EKT-Verfahrens mit Kommentaren von Doktor Herman Carter höchstpersönlich. Nutzt eine große Wellenlänge, die diverse geistige Beschwerden lindert. Da Carters Funke als Quelle genutzt wird, kann die Prozedur beim Patienten unbeherrschbare Angstgefühle hervorrufen.<br><li><b>Vergrößert deutlich</b> deinen Terrorradius, während <b>statisches Feld</b> bereit ist.</li><li><b>Verkleinert deutlich</b> deinen Terrorradius, während <b>statisches Feld</b> sich in der Abklingzeit befindet.</li><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> leiden am <i>Symptom der Ruhe</i>.<li><b>Wahnsinn II</b>: Bewirkt <b>zeitweise</b>, dass Überlebende in der Ferne eine <i>Illusion des Terrorradius</i> hören.</li><li><b>Wahnsinn III</b>: Bewirkt <b>dauerhaft</b>, dass Überlebende in der Ferne eine <i>Illusion des Terrorradius</i> hören.</li><span class=\\"FlavorText\\">„Schwerere Anfälle führen zu Katatonie. Aber wenigstens habe ich währenddessen meine <u>Ruhe</u>.“ – H. Carter</span>","name":"„Ruhe“ – Carters Notizen","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"Eine glasähnliche Schachfigur des Königs, die aus dem Nebel selbst geformt wurde. Die darin widerhallende Schwingung des Entitus kann selbst den stärksten Verstand brechen.<br><br>Überlebende mit dem Statuseffekt <b>Wahnsinn</b> erleiden eines der folgenden <i>Symptome: Ruhe, Disziplin, Ordnung</i> oder <i>Zwang</i>.<li>Bewirkt, dass Überlebende <b>zeitweise</b> in der Ferne eine <i>Illusion des Terrorradius</i> hören.</li><li>Während der Jagd sehen Überlebende das <i>Trugbild eines roten Flecks</i> und den <i>Terrorradius</i>, als wäre <b>der Doktor</b> direkt hinter ihnen. Dieser Effekt hält bei <b>Wahnsinn II</b> noch <b>6 Sekunden</b> lang an, nachdem die Jagd zu Ende ist, und ist bei <b>Wahnsinn III</b> dauerhaft aktiv.</li><li>Zerstörte Paletten können durch <i>Trugbilder von Paletten</i> ersetzt werden, die bestehen bleiben, bis man sich ihnen nähert. Ein neues <i>Trugbild einer Palette</i> wird alle <b>20 Sekunden</b> an der Position der zerstörten Palette erzeugt.</li><li><b>Verlängert moderat</b> die Dauer des <i>Trugbilds des Doktors</i>.</li><li><b>Der Doktor</b> sieht die <i>Trugbilder der roten Flecken</i> ebenso wie die Auren der <i>Trugbilder des Doktors und der Paletten</i>.</li>","name":"Schillernder König","flavor":"„Wer in das schillernde Glas blickt, stürzt sich selbst in den Wahnsinn.“","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"Eine glasähnliche Schachfigur des Königs, die aus dem Nebel selbst geformt wurde. Es ist nicht möglich, sie zu berühren, ohne einen erheblichen elektrischen Schlag zu bekommen.<br><li>Alle Überlebenden, die von den <i>Spezialfähigkeiten</i> <b>Schocktherapie</b> oder <b>statisches Feld</b> getroffen werden, erhalten eine andauernde <b>statische Ladung</b>. Reste der <b>statischen Ladung</b> bleiben an den Überlebenden haften, bis sie <i>entladen</i> sind.</li><li>Werden mehrere Überlebende von denselben <i>Spezialfähigkeiten</i> <b>Schocktherapie</b> oder <b>statisches Feld</b> getroffen, und befinden sie sich in einer Reichweite von <b>4 Metern</b> zueinander, erleiden sie keine <b>statische Ladung</b>.</li><li>Immer, wenn ein Überlebender in einen Umkreis von <b>4 Metern</b> zu einem anderen Überlebenden gerät, der eine <b>statische Ladung</b> an sich hat, erleidet der Überlebende einen Schock mit Effekten, die identisch zu denen der <b>Schocktherapie</b>-<i>Spezialfähigkeit</i> sind, und die <b>statische Ladung</b> wird sofort <i>entladen</i>.</li>","name":"Schillernde Königin","flavor":"„Sobald wir eine effektive Behandlungsmethode erarbeitet haben, können wir uns auf die Frage konzentrieren, wie man sie effizient nutzt.“ –H. Carter","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"Dieser Stein ist zu rau, um irgendetwas Gutes zu bewirken. Eine Klinge, die durch ihn beschädigt wurde, verursacht grauenhafte offene Wunden.<br><li>Die Schmerzenslaute von getroffenen Zielen sind um <b>50 %</b> verstärkt, bis sie vollständig geheilt sind.</li>","name":"Rauer Stein","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"Ein einfacher Fetzen, um Blasen zu behandeln und Eiter wegzuwischen.<br><li><b>+10 %</b> Beil-Fluggeschwindigkeit.</li>","name":"Vergilbtes Tuch","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"Verbandsmaterial, das straff um den Griff der Beile gewickelt wurde.<br><li><b>Verringert leicht</b> die Abklingzeit zwischen Beilwürfen.</li>","name":"Umwickelter Griff","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"Ein Gift, das auf die Klingen der Beile aufgetragen wird. Das Gift des Fliegenpilzes betäubt das Gehirn.<br><li>Getroffenes Ziel leidet <b>60 Sekunden</b> lang unter dem Statuseffekt <b><i>Erblindung</i></b>.</li><li>Nicht kombinierbar.</li>","name":"Fliegenpilzgift","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"Eine seltsam beschwerte Beilklinge, die so konstruiert ist, dass sie ihrem Ziel einen harten Schlag versetzt. Sie kann nur von einem Träger mit einem starken Arm verwendet werden.<br><li>Getroffenes Ziel leidet <b>10 Sekunden</b> lang unter dem Statuseffekt <b>Bewegungsunfähig</b>.</li>","name":"Beschwerte Klinge","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"Eine nahezu völlig abgewetzte, kupferne Anstecknadel, die jedoch auf Hochglanz poliert wurde. Wurde einer besonders herausfordernden Beute abgenommen.<br><li><b>Erhöht leicht</b> deine Bewegungsgeschwindigkeit, während du deine Wurfaktion vorbereitest.</li><li>Nicht kombinierbar.</li>","name":"Glänzende Anstecknadel","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"Ein polierter Griff, der die schnelle und listige Handhabung des tödlichen Werkzeugs gewährleistet.<br><li><b>Verringert moderat</b> die Abklingzeit zwischen Beilwürfen.</li>","name":"Eichengriff","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"Ein runder, dekorativer Kranz aus Süßgras. Dieses Erinnerungsstück an ein verlorenes Mädchen erfüllt die Jägerin mit Zorn und Konzentration.<br><li><b>Verringert moderat</b> die Vorbereitungszeit von Beilen.</li>","name":"Süßgraskranz","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"Dieser zu einer Schlaufe verknotete Lederriemen kann an einem Gürtel angebracht werden, um Werkzeuge zu transportieren.<br><li>Du beginnst mit <b>1 zusätzlichen</b> Beil.</li><li>Erhöht die Anzahl der maximal tragbaren Beile um <b>1</b>.</li>","name":"Lederschlaufe","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"Getrocknete Blütenblätter, die als Tee gebraut Ermüdung und Überanstrengung lindern.<br><li><b>+20 %</b> Beil-Fluggeschwindigkeit.</li>","name":"Rosenwurzel","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"Handschuhe aus gehärtetem Leder sorgen für einen sicheren Griff.<br><li><b>Verringert moderat</b> die Nachfüllzeit für Beile bei Schließschränken.</li>","name":"Rehlederhandschuhe","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"Ein giftiges Präparat, das auf die Klingen der Beile aufgetragen wird. Dieses trübe Präparat besteht hauptsächlich aus dem Gift der Kreuzotter und wirkt daher ermüdend.<br><li>Getroffenes Ziel leidet <b>5 Sekunden</b> lang unter dem Statuseffekt <b>Erschöpfung</b>.</li>","name":"Giftiges Präparat","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"Die Klingen dieser Beile sind übersät mit verkrusteten und ätzenden Rostflecken, die es besonders schwierig machen, Verletzungen zu heilen.<br><li>Ein getroffenes Ziel leidet unter dem Statuseffekt <b><i>Zerfleischt</i></b>.</li>","name":"Rostige Klinge","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"Ein sauberes, farbenfrohes Kopftuch mit Blumenmuster. Dieses Erinnerungsstück an ein verlorenes Mädchen erfüllt die Jägerin mit Zorn und Konzentration.<br><li><b>Verringert deutlich</b> die Vorbereitungszeit von Beilen.</li>","name":"Blumenkopftuch","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"Ein robuster Mehrzweckgürtel, der einem Soldaten abgenommen wurde. Dank einer Vielzahl an Lederschlaufen und Holstern sehr praktisch, um Werkzeuge zu transportieren.<br><li>Du beginnst mit <b>2 zusätzlichen</b> Beilen.</li><li>Erhöht die Anzahl der maximal tragbaren Beile um <b>2</b>.</li>","name":"Infanteristengürtel","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"Ein fremdartiges Gebräu, das ein schwaches, unheilvolles Licht ausstrahlt.<br><li>Auren getroffener Opfer werden dir <b>5 Sekunden</b> lang angezeigt.</li>","name":"Leuchtendes Gebräu","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"Die Klingen dieser Beile sind mit einer üblen Substanz verunreinigt, die jeden schwächt, der sie berührt.<br><li>Ein getroffenes Ziel leidet unter den Statuseffekten <b><i>Zerfleischt</i></b> und <b><i>Blutung</i></b>, bis es vollständig geheilt ist.</li><li>Nicht kombinierbar.</li>","name":"Beschmutzte Klinge","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"Diese Fuchsfigur ist grob geschnitzt und nur wenige Zentimeter groß. Eine Erinnerung daran, dass Tarnung und Gerissenheit so wirksam sind wie rohe Kraft.<br><li>Gewährt nach dem Nachladen für <b>15 Sekunden</b> den Statuseffekt <i><b>Unentdeckbar</b></i>.</li>","name":"Holzfuchs","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"Eine glasartige Beilklinge, die aus dem Nebel selbst erschaffen wurde. Die Klinge ist warm und verströmt die Macht des Entitus.<br><li>Erfolgreiche Treffer mit dem Beil versetzen gesunde Überlebende sofort in den Todesstatus.</li><li>Legt die Anzahl der maximal tragbaren Beile auf <b>1</b> fest.</li>","name":"Schillernde Klinge","flavor":"„Das schillernde Glas schneidet durch das Fleisch und die Seele.“","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"Ein Wickel von einem toten Soldaten. Er bietet Schutz und Unterstützung für Knöchel und Unterschenkel.<br><li>Die Jägerin bewegt sich mit <b>4,6 m/s</b>, wenn sie keine Beile hat.</li>","name":"Soldatengamasche","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"Ein ranziges Öl, genutzt als Schmiermittel geringer Qualität.<br><br><li><b>Verkürzt leicht</b> die Abklingzeit der Kettensäge, wenn du einen Überlebenden erfolgreich triffst.</li>","name":"Pflanzenöl","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"Eine saubere Zündkerze für eine Kettensäge.<br><br><li><b>Erhöht leicht</b> die Rate, mit der Einheiten aufgefüllt werden.</li>","name":"Zündkerze","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"Eine Feile, die dafür gedacht ist, Kettensägeketten zu bearbeiten.<br><li><b>Verkürzt leicht</b> die Dauer des Wutanfalls.</li>","name":"Kettensägenschleifer","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"Eine mechanische Vorrichtung, welche die Kraftstoffmenge festlegt, die von kleinen Motoren aufgenommen werden kann, um eine gleichbleibende und zuverlässige Geschwindigkeit zu gewährleisten.<br><br><li>Die Kettensäge versetzt Überlebende nicht automatisch in den Todesstatus.</li><li>Du erhältst <b>100 %</b> mehr Blutpunkte für Kettensägentreffer-Punktereignisse.</li>","name":"Tempodrossel","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Pumpt mehr Treibstoff in die Zündanlage, um einen schnellen und kraftvollen Start zu gewährleisten.<br><br><li><b>Erhöht moderat</b> die Rate, mit der Einheiten aufgefüllt werden.</li>","name":"Manuelle Kraftstoffpumpe","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"Eine robuste, eiserne Ersatzstange für lange Ketten.<br><br><li><b>Erhöht leicht</b> die Häufigkeit, wie oft Gas gegeben werden kann, bevor ein Wutanfall ausgelöst wird.</li>","name":"Lange Führungsschiene","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"Von einer sengenden Klinge verursachte Kratzer bedecken das Gehäuse der Kettensäge. Erinnerungen an Züchtigungen erfüllen den Besitzer mit Angst vor dem Versagen.<br><br><li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit mit der Kettensäge.</li><li><b>Verlängert leicht</b> die Aufladezeit.</li>","name":"Messerkratzer","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"Ein provisorischer Auspuff aus schwarzen Gasrohren.<br><br><li><b>Verkürzt moderat</b> die Dauer des Wutanfalls.</li>","name":"Selbstgebauter Auspuffdämpfer","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"Eine große Schale dampfendes Chili, damit du erholt und gestärkt bist.<br><br><li><b>Verlängert leicht</b> die Sprintdauer, wenn ein Zähler verbraucht wird.</li><li><b>Verlängert leicht</b> das Zeitfenster des Kettensägenschwungs.</li><br>","name":"Chili","flavor":"\\"Ich habe hier leckeres Barbecue!\\" – Drayton Sawyer","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"Eine dickflüssige, gelbliche Substanz, die von den Sawyers angerührt wurde. Wird zum Schmieren aller möglichen Dinge im Haushalt verwendet.<br><br><li><b>Erhöht moderat</b> die Häufigkeit, wie oft Gas gegeben werden kann, bevor ein Wutanfall ausgelöst wird.</li>","name":"Schmierfett","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"Schartige Macken bedecken das Gehäuse der Kettensäge – eine Strafe der düsteren Bestie, die im Nebel lebt. Erinnerungen an brutale Züchtigungen erfüllen den Besitzer mit Angst vor dem Versagen.<br><br><li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit mit der Kettensäge.</li><li><b>Verlängert leicht</b> die Aufladezeit.</li>","name":"Zeichen der Bestie","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"Eine Kette mit ungewöhnlich kräftigen Schneidezähnen, die Opfer verkrüppelt zurücklässt, selbst nachdem sie geheilt wurden.<br><li>Überlebende, die von der Kettensäge getroffen werden, erleiden den Statuseffekt <b>Zerfleischt</b>.","name":"Grässliche Kette","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"Ein Öl, das speziell für Kettensägen entworfen wurde. Ein besonderes Zusatzmittel verhindert den Auswurf des Öls.<br><br><li>Bringst du mit der Kettensäge einen Überlebenden zu Boden, während keine anderen Überlebenden in deinem Terrorradius sind, ist die Aura des Überlebenden <b>20 Sekunden</b> lang nicht zu sehen.</li>","name":"Werkstattschmierstoff","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"Diese Kette ist mit einer üblen Substanz verunreinigt, die jeden schwächt, der sie berührt.<br><br><li>Werden Überlebende mit der Kettensäge getroffen, lassen sie ihre Gegenstände fallen.</li>","name":"Beschmutzte Kette","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"Ein Werkzeug, das den Winkel des Tiefenbegrenzers vergrößert, damit die Kette mehr \\"Holz\\" frisst.<br><li><b>Erhöht</b> die Anzahl der Einheiten.</li><li><b>Verlängert leicht</b> die Aufladezeit.</li><li><b>Verringert leicht</b> die maximale Geschwindigkeit des Kettensägenschwungs.</li>","name":"Tiefenbegrenzer-Lehre","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"Ein leichtes und robustes Kettensägengehäuse mit einer kürzeren Führungsschiene für einfachere Handhabung der Kettensäge.<br><br><li>Beim Gasgeben sind die Auren der Überlebenden im Umkreis von <b>8 Metern</b> zu sehen.</li>","name":"Leichtes Gehäuse","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"Diese Kette ist übersät mit verkrusteten und ätzenden Rostflecken, die es besonders schwierig machen, Verletzungen zu heilen.<br><br><li>Überlebende, die von der Kettensäge verletzt werden, leiden unter dem Statuseffekt <b><i>Gebrochen</i></b>, und zwar für <b>90 Sekunden</b>.</li><li>Nicht kombinierbar.</li>","name":"Verrostete Kette","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"Eine große Schale mit scharfem Chili, das wegen seines erstklassigen Fleischs berühmt ist.<br><br><li><b>Verlängert moderat</b> die Sprintdauer beim Verbrauchen eines Zählers.</li><li><b>Verlängert moderat</b> das zusätzliche Zeitfenster für die Nutzung der Kettensäge.</li><br>","name":"Preisgekröntes Chili","flavor":"\\"Das Geheimnis steckt im Fleisch.\\" – Drayton Sawyer","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"Eine dünne Scheibe zarten, jungen Fleisches. Die Adern schimmern leicht, als ob noch immer Leben durch sie fließt.<br><br><li>Wird ein Überlebender mit der Kettensäge getroffen, so wird die Anzahl der Einheiten wieder aufgefüllt.</li><li>Begrenzt die maximale Dauer des Wutanfalls auf 8 Sekunden.</li><br>","name":"Schillerndes Fleisch","flavor":"\\"Es gibt Momente, in denen wir nicht glauben können, dass das, was gerade passiert, wirklich wahr ist. Dann sollte man sich selbst kneifen, um herauszufinden, dass es das tatsächlich ist.\\" – Pam Jones","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"Eine grob gezeichnete Anleitung zum ordnungsgemäßen Einstellen eines Kettensägenvergasers.<br><li>Verbraucht automatisch alle Einheiten, wenn ein Kettensägenschwung ausgeführt wird.</li><li><b>Verlängert leicht</b> die Dauer des Kettensägenschwungs.</li><li><b>Verringert leicht</b> die Höchstgeschwindigkeit des Kettensägenschwungs.</li>","name":"Vergasereinstellungsanleitung","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"Das orange-gelb-gestreifte Hemd eines kleinen Jungen. Ein angenähtes Namensschild identifiziert den Besitzer als „Jesse“.<br>Solange Überlebende in der <b>Traumwelt</b> sind:<li><b>Erhöht leicht</b> die Strafe auf den Fortschrittsrückgang bei <i>Heilung</i> und <i>Reparatur</i>.</li>","name":"Wollhemd","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"Ein weiß-blauer Holzblock zeigt zwei wollige Lämmer beim Grasen sowie den Buchstaben „S“.<li>Sobald ein Überlebender mit einer <b>Traumschlinge</b> oder <b>Traumpalette</b> interagiert, leidet der Überlebende 30 Sekunden lang unter dem <b>Statuseffekt „Erblindung“</b>.</li>","name":"Schafklotz","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"Eine Zeichnung ohne Namensangabe, die aber eindeutig von einem kleinen Kind stammt.<li>Du erhältst zusätzliche <b>200 Bonus-Blutpunkte</b> auf <b>Hinterhältigkeit</b>, wenn ein Überlebender eine <b>Traumschlinge</b> auslöst.</li><li><b>Verringert deutlich</b> die Geschwindigkeitsstrafe der <b>Traumschlinge</b> für Überlebende.</li>","name":"Kinderzeichnung","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"Eine kleine Harke, ein unabdingbares Werkzeug für jeden ernstzunehmenden Gärtner.<br>Ersetzt die <b>Traumschlingen</b> durch <b>Traumpaletten</b>.<li>7 <b>Traumzähler</b></li>","name":"Gartenrechen","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"Ein selbstgemachtes Werkzeug zum Trimmen von Sträuchern.<li>Ersetzt die <b>Traumschlingen</b> durch <b>Traumpaletten</b>.</li><li>7 <b>Traumzähler</b>.</li><li>Die Aura von Überlebenden ist für <i>den Albtraum</i> <b>4 Sekunden</b> lang zu sehen, wenn sie mit <b>Traumpaletten</b> interagieren.</li>","name":"Klauen-Prototyp","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"Robustes Seil für draußen, praktisch, um alles festzubinden.<br>Solange Überlebende in der <b>Traumwelt</b> sind:<li>Das Geräusch bei Generatorreparaturen ist <b>8 Meter weiter</b> zu hören.</li>","name":"Outdoor-Seil","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"Eine schnelle, grobe Skizze, gezeichnet mit einem Holzkohlestift und von Nancy H. signiert.<li><b>Erhöht leicht</b> die Stärke-Wiederherstellungsrate von <b>Traumprojektion</b> für alle Überlebenden in der <b>Traumwelt</b>.</li>","name":"Nancys Skizze","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"Das grüne Kleid eines kleinen Mädchens mit weißem Seidenband.<br>Solange Überlebende in der <b>Traumwelt</b> sind:<li><b>Erhöht leicht</b> die Strafe auf den Fortschrittsrückgang bei <i>Heilung</i> und <i>Reparatur</i>.</li><li>Die Auren der Überlebenden sind für <i>den Albtraum</i> für <b>3 Sekunden</b> zu sehen, wenn ein Fähigkeitscheck bei <i>Heilung</i> oder <i>Reparatur</i> scheitert.</li>","name":"Grünes Kleid","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"Ein weiß-lila Holzblock zeigt eine schlafende Katze sowie den Buchstaben „C“.<li>Sobald ein Überlebender mit einer <b>Traumschlinge</b> oder einer <b>Traumpalette</b> interagiert, leidet der Überlebende 60 Sekunden lang unter dem <b>Statuseffekt „Blutung“</b>.</li>","name":"Katzenklotz","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"Ein weiß-roter Holzblock zeigt ein sich aufbäumendes Einhorn sowie den Buchstaben „U“.<li>Sobald ein Überlebender mit einer <b>Traumschlinge</b> oder <b>Traumpalette</b> interagiert, leidet der Überlebende 60 Sekunden lang unter dem <b>Statuseffekt „Erblindung“</b>.</li>","name":"Einhornklotz","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"Rostige, aber stabile Ketten, die zum sicheren Festmachen einer Schaukel benutzt werden.<br>Solange Überlebende in der <b>Traumwelt</b> sind:<li>Das Geräusch ihrer Schritte ist <b>50 % lauter</b>.</li>","name":"Schaukelketten","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"Die Zeichnung einer Person, die Nancy Holbrook in der Badham-Vorschule angefertigt und als liebgewonnene Erinnerung verwahrt hat.<li><b>Erhöht moderat</b> die Stärke-Wiederherstellungsrate von <b>Traumprojektion</b> für alle Überlebenden in der <b>Traumwelt</b>.</li>","name":"Nancys Meisterwerk","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"Ein langes Springseil, dem man den jahrelangen Gebrauch ansieht.<br>Solange Überlebende in der <b>Traumwelt</b> sind:<li>Ihre Schmerzenslaute sind <b>50 % lauter</b>.</li>","name":"Springseil","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"Das blassblaue, mit weißer Spitze besetzte Kleid eines kleinen Mädchens. Die Vorderseite wurde durch große Schnitte verunstaltet.<br>Solange Überlebende in der <b>Traumwelt</b> sind:<li><b>Erhöht leicht</b> die Strafe auf den Fortschrittsrückgang bei <i>Heilung</i> und <i>Reparatur</i>.</li> <li>Die Auren der Überlebenden sind für <i>den Albtraum</i> <b>4 Sekunden</b> lang zu sehen, wenn ein Fähigkeitscheck bei <i>Heilung</i> oder <i>Reparatur</i> scheitert.</li>","name":"Blaues Kleid","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"Eine leere Pillendose, die zuvor ein Medikament namens Zoneral beinhaltete.<li>Überlebende sehen <i>den Albtraum</i> zeitweise in einem geringeren Abstand von <b>12</b> bis <b>24 Metern</b>.</li><li><i>Der Albtraum</i> ist für Überlebende ab <b>24 Metern</b> nicht zu sehen.</li><li><i>Der Albtraum</i> ist für wache Überlebende nicht zu sehen, während er einen Überlebenden trägt.</li>","name":"Pillenflasche","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"Ein Kanister mit hochexplosivem und entflammbarem Material.<li>Ersetzt die <b>Traumschlingen</b> durch <b>Traumpaletten</b>.</li><li>7 <b>Traumzähler</b>.</li><li>Die Aura von Überlebenden ist für <i>den Albtraum</i> <b>6 Sekunden</b> lang zu sehen, wenn sie mit <b>Traumpaletten</b> interagieren.</li>","name":"Farbverdünner","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"Ein großes Foto, das in der Badham-Vorschule aufgenommen wurde und den fröhlichen Jahrgang ’94/’95 zeigt.<li>Die Aktion <b>Traumprojektion</b> kann nicht mehr abgebrochen werden.</li><li>Alle Generatoren speien Blut, während <b>der Albtraum</b> sich auf die <b>Traumprojektion</b> konzentriert.</li><li>Die Projektion <i>des Albtraums</i> erscheint nicht, wenn <b>Traumprojektion</b> genutzt wird.</li>","name":"Klassenfoto","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"Ein stark zerkratzter und verbrannter Holzblock, an dem nur noch der Buchstabe „Z“ zu erkennen ist.<li>Sobald ein Überlebender mit einer <b>Traumschlinge</b> oder <b>Traumpalette</b> interagiert, leidet der Überlebende <b>60 Sekunden lang</b> unter dem Statuseffekt <b>Blutung</b>.</li><li>Ist der Überlebende gesund, blutet er für die Dauer des Statuseffekts <b>Blutung</b>.</li>","name":"Z-Klotz","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"Ein großer Farbpinsel, der vor blutroter Farbe trieft.<li>Alle Überlebenden beginnen die Prüfung in der <b>Traumwelt</b>.</li><li>Gescheiterte Fähigkeitschecks wecken Überlebende nicht, wenn sie in der <b>Traumwelt</b> sind.</li>","name":"Roter Farbpinsel","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"Ein schwarzer Karton voller Fotos.<br>Solange Überlebende in der <b>Traumwelt</b> sind:<li>Vor Kurzem geöffnete Ausgangstore sind für <b>15 Sekunden</b> gesperrt.</li>","name":"Schwarzer Karton","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"Eine Abwandlung der Jigsaw-Kiste: Die eingeölten Teile machen das Durchsuchen zu einem heiklen Unterfangen.<br><li><b>Erhöht leicht</b> die Wahrscheinlichkeit, beim Hantieren mit einer Jigsaw-Kiste einen Fähigkeitscheck auszulösen.</li>","name":"Werkstattschmierfett","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"Symbol für ein kaputtes Leben. Erinnerungen an ihr früheres Ich steigern ihre Entschlossenheit.<br><li><b>Verringert leicht</b> die Abklingzeit nach fehlgeschlagenen Angriffen aus dem Hinterhalt.</li>","name":"Zerbrochene Spritze","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"Die Krankenakte eines Krebspatienten. Erfüllt den Leser mit Furcht und Rücksichtslosigkeit.<br><li><b>Verringert leicht</b> die Vorbereitungsdauer für einen Angriff aus dem Hinterhalt.</li>","name":"Johns Krankenakte","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"Lederstreifen, die Stoff am richtigen Platz halten und so für mehr Beweglichkeit sorgen.<br><li><b>Verringern leicht</b> die Zeit, um sich zu ducken.</li>","name":"Kampfgurte","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"Eine Aufnahme von Jigsaw mit Erklärungen der Spielregeln für Amanda. Erinnerungen an ihr früheres Ich steigern ihre Entschlossenheit.<br><li><b>Verkürzt leicht</b> die Aufladezeit für Angriffe aus dem Hinterhalt.</li><li><b>Verringert leicht</b> die Abklingzeit nach fehlgeschlagenen Angriffen aus dem Hinterhalt.</li>","name":"Videokassette","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"Eine Abwandlung der umgekehrten Bärenfalle: Scharfe Klingen im Inneren der Falle zerfleischen das Opfer bei jeder Bewegung.<br><li>Überlebende in der umgekehrten Bärenfalle leiden unter dem Statuseffekt <b><i>Blutung</i></b>.</li>","name":"Nützliche Klingen","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"Eine Abwandlung der Jigsaw-Kiste: Die zusätzlichen rasiermesserscharfen Drähte machen das Durchsuchen besonders schwierig und unter Umständen auch schmerzhaft.<br><li><b>Erhöht moderat</b> die Wahrscheinlichkeit, beim Hantieren mit einer Jigsaw-Kiste einen Fähigkeitscheck auszulösen.</li>","name":"Rasiermesserscharfe Drähte","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"Eine verschlossene, mit Satin ausgekleidete Holzschatulle, in der sich ein Testament befindet.<br><li><b>Erhöht</b> die Anzahl verfügbarer umgekehrter Bärenfallen um <b>1</b>.<br>","name":"Letzter Wille","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"Eine Abwandlung der umgekehrten Bärenfalle: Die Gesichtsmaske aus schwerem Stoff, die mit einem Beruhigungsmittel versetzt ist, erschwert dem Opfer das Atmen und verringert so seine Konzentration.<br><li>Überlebende, die in der umgekehrten Bärenfalle gefangen sind, leiden unter dem Statuseffekt <i><b>Erblindung</b></i>.</li><li>Hat keinen Einfluss auf die Hervorhebung von Jigsaw-Kisten.</li>","name":"Atemmaske","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"Eine Abwandlung der umgekehrten Bärenfalle: Ein Gift, das nicht tödlich ist, aber den Körper so schwächt, dass er sich von keiner Anstrengung mehr ganz erholen kann.<br><li>Überlebende in der umgekehrten Bärenfalle leiden unter dem Statuseffekt <i><b>Erschöpfung</b></i>.</li>","name":"Langsam wirkendes Gift","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"Eine Abwandlung der umgekehrten Bärenfalle: Mundfixierung, übersät mit verkrusteten und ätzenden Rostflecken, die es besonders schwierig machen, Verletzungen zu heilen.<br><li>Verletzte Überlebende in der umgekehrten Bärenfalle leiden unter dem Statuseffekt <i><b>Zerfleischt</b></i>.</li>","name":"Rostige Befestigung","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"Ein verstörender, aber brillanter Fallenentwurf, der detailliert auf einem Blatt Papier festgehalten wurde.<br><li><b>Erhöht</b> die Anzahl verfügbarer Jigsaw-Kisten um <b>1</b>.</li>","name":"Jigsaws Skizze","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"Eine Abwandlung der Jigsaw-Kiste: Durch die zusätzlichen ineinandergreifenden Rasierklingen kann man seine Hand in der Jigsaw-Kiste nicht schnell bewegen, ohne sich die Handgelenke aufzuschlitzen.<br><li><b>Erhöht enorm</b> die Strafe für fehlgeschlagene Fähigkeitschecks bei Jigsaw-Kisten.</li>","name":"Ineinandergreifende Klingen","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"Ein paar mechanische Teile, mit denen herausfordernde Jigsaw-Kisten und leichter einstellbare, umgekehrte Bärenfallen gebaut werden können.<br><li><b>Verlängert leicht</b> die Zeit, die Überlebende zum Durchsuchen einer Jigsaw-Kiste brauchen.</li><li><b>Verkürzt leicht</b> die Zeit zum Aufsetzen der umgekehrten Bärenfalle.</li>","name":"Sack voller Zahnräder","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"Ein Timer, der modifiziert wurde. Eine Feder im Mechanismus sorgt dafür, dass sich die Zahnräder schneller drehen.<br><li><b>Verringert moderat</b> den Todestimer der umgekehrten Bärenfalle.</li>","name":"Manipulierter Timer","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"Ein verstörender, aber brillanter Fallenentwurf, der detailliert auf einem Blatt Papier festgehalten wurde.<br><li><b>Erhöht</b> die Anzahl verfügbarer Jigsaw-Kisten um <b>1</b>.</li><li><b>Erhöht moderat</b> den Todestimer umgekehrter Bärenfallen.</li>","name":"Jigsaws kommentierter Entwurf","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"Mit dieser Sammlung mechanischer Teile können besonders herausfordernde Jigsaw-Kisten und leichter einstellbare, umgekehrte Bärenfallen gebaut werden.<br><li><b>Verlängert deutlich</b> die Zeit, die Überlebende zum Durchsuchen einer Jigsaw-Kiste brauchen.</li><li><b>Verkürzt moderat</b> die Zeit, die benötigt wird, um einem Überlebenden eine umgekehrte Bärenfalle aufzusetzen.</li>","name":"Kiste voller Zahnräder","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"Eine schwarze Metallkiste mit einem Messer und verschiedenen Sanitätsartikeln, wie Verbände und Kompressen. Tiefe Schnitte verringern den Stress und wecken die Sinne.<br><li><b>Deaktiviert</b> die Fähigkeit des Schweins, die Auren von Jigsaw-Kisten zu sehen.</li><li><b>Du erhältst eine Benachrichtigung</b>, wenn ein Überlebender eine umgekehrte Bärenfalle entfernt.</li><li>Auren von Überlebenden, die eine umgekehrte Bärenfalle entfernen, werden dir <b>6 Sekunden</b> lang angezeigt.</li>","name":"Amandas Geheimnis","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"Nicht alle Spiele müssen dieselben Regeln haben.<br><li><b>Deaktiviert</b> die Fähigkeit der Überlebenden, hervorgehobene Jigsaw-Kisten zu sehen, bis ihre Falle ausgelöst wurde.</li>","name":"Regelwerk Nr. 2","flavor":"„Hören Sie bitte genau zu, es gibt Spielregeln.“ –Jigsaw","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"Ein Erpresserbrief an Amanda. Erfüllt den Leser mit Zorn und Konzentration.<br><li>In geduckter Haltung werden die Umrisse Überlebender innerhalb von 12 Metern angezeigt.</li><li><b>Reduziert</b> die Anzahl verfügbarer umgekehrter Bärenfallen um <b>3</b>.</li><li><b>Reduziert</b> die Anzahl verfügbarer Jigsaw-Kisten um <b>2</b>.</li>","name":"Amandas Brief","flavor":"\\\\„Amanda, in der Nacht, als Jill Gideon verloren hat, waren Sie mit Cecil zusammen. Sie haben ihr Kind getötet. Sie wissen es und ich weiß es.\\\\“ – Amandas Brief","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"Ein modrige Einlegesohle, die müden Füßen Komfort spendet.<br><li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit beim Nachfüllen von Flaschen.</li>","name":"Stinkende Einlegesohlen","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"Eine warme, weiche, orange Feder.<br><li><b>Verkürzt leicht</b> die Abklingzeit zwischen Würfen mit der Flasche.</li>","name":"Rotkehlchenfeder","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"Die abgeschnittenen Finger sind Teil der standardmäßigen Clown-Bekleidung und erlauben geschickte Manipulationen.\\n<li>Ändert die Flugbahn der geworfenen Flasche.</li>\\n","name":"Fingerlose Paradehandschuhe","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"Bringe die Party in Schwung!<br><br><li><b>Partyflaschen</b> verstreuen Konfetti, wenn sie zerbrechen, zusätzlich zu ihrem üblichen Gaseffekt.</li><li>Wenn du einen Überlebenden direkt mit einer <b>Partyflasche</b> triffst, werden Aktionen wie gewohnt unterbrochen und du verdienst <b>100 Blutpunkte</b>.</li>","name":"Partyflasche","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"Ein stabiler Korken, der perfekt auf die Flaschen des Nachspieltonikums passt.<br><li><b>Verringert moderat</b> die Nachfüllzeit.</li>","name":"Dicker Korkstöpsel","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"Eine leere, klebrige Flasche voll getrocknetem Zucker und Blut.<br><li>Du beginnst mit <b>1 zusätzlichen</b> Flasche.</li><li>Erhöht die maximale Anzahl getragener Flaschen um <b>1</b>.</li>","name":"Klebrige Limoflasche","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"Eine schwarze Feder mit grünem Glanz, sehr weich.<br><li><b>Verkürzt moderat</b> die Abklingzeit zwischen Würfen mit der Flasche.</li>","name":"Starenfeder","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"Ein flüchtiger chemischer Stoff, der die Atemwege reizt, aber die Aufnahme des Nachspielgegengifts verstärkt.<br><li><b>Verlängert moderat</b> die Dauer des Gestärkt-Effektes.</li>","name":"Krug mit Lösungsmittel","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"Eine dünne, klare und brennbare Flüssigkeit, die beim Einatmen den Verstand betäubt.<br><li>Benebelt lässt ein Ziel <b>30 Sekunden</b> lang unter dem Statuseffekt <b>Erblindung</b> leiden.</li>","name":"Kerosinkanister","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"Ein zeitloser Klassiker. Du wirst die Welt mit anderen Augen sehen.<br><li>Färbt die Wolken des Nachspieltonikums gelb.</li><li>Färbt die Wolken des Nachspielgegengifts lila.</li>","name":"Porno-Videokassette","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"Eine geruchlose, sirupartige Flüssigkeit, die sehr stark ätzend ist.<br><li>Benebelt lässt ein Ziel unter dem Statuseffekt <b>Zerfleischt</b> leiden.</li>","name":"Fläschchen mit Schwefelsäure","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"Ein wirkungsvoller chemischer Stoff, der Reizungen, Verbrennungen und Lungenschäden verursacht.<br><li>Das benebelte Ziel leidet <b>moderat</b> an einer zusätzlichen Strafe durch den <b>Eingeschränkt</b>-Status.</li>","name":"Flasche Bleichmittel","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"<li><b>Vergrößert moderat</b> den Wirkungsbereich des Nachspielgegengift-Gaseffekts.</li>","name":"Gespenst von Hartshorn","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"Ein süßlich riechender, organischer Stoff mit starken betäubenden Eigenschaften.<br><li><b>Vergrößert moderat</b> die Gaswolke des Nachspieltonikums.</li>","name":"Flasche Chloroform","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"Etwas fürs Gesicht und etwas fürs Gegengift. Das unbekannte Präparat intensiviert die Wirkung des Gegengifts.<br><li><b>Verlängert deutlich</b> die Dauer des Gestärkt-Effekts.</li>","name":"Auffallendes Schminkset","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"Das einzige Überbleibsel eines billigen, feuchtfröhlichen Abends mit verdammt starken Kopfschmerzen am Morgen danach.<br><li>Du beginnst mit <b>2 zusätzlichen</b> Flaschen.</li><li>Erhöht die maximale Anzahl getragener Flaschen um <b>2</b>.</li>","name":"Flasche mit billigem Gin","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"Ein sehr flüchtiger, organischer Stoff, der in dieser Konzentration giftig ist.<br><li><b>Verlängert deutlich</b> die Dauer des Benebelt-Effekts.</li>","name":"Ether, 15 Volumenprozent","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"Eine grausige und unvollständige Sammlung von Fingern. Erfüllt den Clown mit Sehnsucht und hilft ihm dabei, sich auf das Fertigen von Betäubungsmitteln zu konzentrieren.<br><li>Erhält ein Überlebender oder Killer den Gestärkt-Effekt, kann er die Auren aller anderen Überlebenden und des Killers innerhalb eines Umkreises von 16 m sehen.</li>","name":"Zigarrenkiste","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"Der geschätzte Mittelfinger eines großen, tätowierten Mannes. Schmeckt leicht nach Maschinenöl.<br><li>Auren von Überlebenden, die unter Benebelt oder Gestärkt leiden, werden dir <b>6 Sekunden</b> lang angezeigt.</li>","name":"Mittelfinger eines Tätowierten","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"Der geschätzte kleine Finger eines Rotschopfs. Duftet leicht. Schmeckt nach Potpourri und Lack.<br><li>Überlebende, die direkt mit einer Flasche des Nachspieltonikums getroffen werden, leiden am Statuseffekt <b>Gefährdet</b> für die Dauer der Benebelung.</li>","name":"Kleiner Finger eines Rotschopfs","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"Ein bequemes Paar flache Sandalen, das schnell an- und ausgezogen werden kann.<li>Erhöht leicht die Bewegungsgeschwindigkeit bei Yamaokas Spuk.</li><li>Kombinierbar.</li>","name":"Zōri","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"Ein Talisman, der einen zufrieden und tatkräftig stimmt.<li>Erhöht leicht die Dauer von Yamaokas Spuk.</li><li>Kombinierbar.</li>","name":"Shiawase-Amulett","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"Einer der tausend Kraniche, damit dein Wunsch in Erfüllung geht.<li>Erhöht leicht die Geschwindigkeit, mit der sich Yamaokas Spuk wieder auflädt.</li><li>Kombinierbar.</li>","name":"Origamikranich","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"Ein feiner Bambuskamm zum sanften Entwirren zerzauster Haare.<li>Verlängert leicht die Aufladezeit zum Aktivieren von Yamaokas Spuk.</li><li>Kombinierbar.</li>","name":"Geschenkter Bambuskamm","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"Eine Seidenschleife zum Bändigen wilder Haare.<li>Erhöht moderat die Aufladezeit zum Aktivieren von Yamaokas Spuk.</li><li>Kombinierbar.</li>","name":"Weißes Haarband","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"Eine Armbanduhr mit zerbrochenem Glas. Der Name „Rin“ wurde auf das Band gekritzelt.<li>Erhöht moderat die Geschwindigkeit, mit der sich Yamaokas Spuk wieder auflädt.</li><li>Kombinierbar.</li>","name":"Rins kaputte Uhr","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"Eine schlammige Sportkappe mit einem Highschool-Logo. Laut einem eingenähten Namensschild Eigentum von „Rin“.<li>Erhöht moderat die Bewegungsgeschwindigkeit bei Yamaokas Spuk.</li><li>Kombinierbar.</li>","name":"Schlammige Sportkappe","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"Ein Talisman, damit das Glück auf deiner Seite ist.<li>Erhöht moderat die Dauer von Yamaokas Spuk.</li><li>Kombinierbar.</li>","name":"Kaiun-Talisman","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"Bonsai mit dunklen, blaugrünen Blättern. Einst das Symbol der traditionsreichen Yamaoka-Familie.<li>Erhöht leicht die Häufigkeit des passiven Phasenwechsels.</li><li>Kombinierbar.</li>","name":"Wacholderbonsai","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"Eine rostige Querflöte, die gruselige Töne von sich gibt.<li>Erhöht deutlich die Geschwindigkeit, mit der sich Yamaokas Spuk wieder auflädt.</li><li>Kombinierbar.</li>","name":"Rostige Flöte","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"Katsumori-Talisman","name":"Katsumori-Talisman","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"Der Handschutz einer uralten Klinge. Wurde für die Yamaoka-Familie geschmiedet.<li>Erhöht leicht die Dauer bis zum Wiedererscheinen von Yamaokas Spuk.</li><li>Erhöht leicht die Bewegungsgeschwindigkeit beim Wiedererscheinen von Yamaokas Spuk.</li><li>Kombinierbar.</li>","name":"Tsuba eines Katanas","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"Ein praktisches Paar Hausschuhe.<li>Erhöht deutlich die Bewegungsgeschwindigkeit bei Yamaokas Spuk.</li><li>Kombinierbar.</li>","name":"Schmutziges Paar Uwabaki","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"Eine Haarspange mit getrocknetem Blut.<li>Verlängert deutlich die Aufladezeit zum Aktivieren von Yamaokas Spuk.</li><li>Kombinierbar.</li>","name":"Blutige Haarspange","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"Ein mächtiger Talisman, der verhindert, dass deine Vorhaben durch verdächtige Umstände vereitelt werden.<li><b>Erhöht enorm</b> die Dauer von Yamaokas Spuk.</li><li><b>Verringert leicht</b> die Bewegungsgeschwindigkeit von Yamaokas Spuk.</li>","name":"Yakuyoke-Amulett","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"Die Scheide einer uralten Klinge. Wurde für die Yamaoka-Familie geschmiedet.<li>Erhöht moderat die Dauer bis zum Wiedererscheinen von Yamaokas Spuk.</li><li>Erhöht moderat die Bewegungsgeschwindigkeit beim Wiedererscheinen von Yamaokas Spuk.</li>","name":"Wakizashi-Saya","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"Ein mächtiges Armband, auf dem ein heiliges Mantra steht.<li>Der Phasenwechsel-Klang kann von allen Überlebenden außerhalb des Terrorradius gehört werden.</li>","name":"Gebetsperlenarmband","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"Eine verwelkte, trockene Kirschblüte. Einst das Symbol für Sterblichkeit.<li>Erhöht leicht die Dauer des passiven Phasenwechsels.</li><li>Erhöht leicht die Häufigkeit des passiven Phasenwechsels.</li>","name":"Getrocknete Kirschblüte","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"Ein Silberring mit der Gravur „für meine geliebte Tochter“.<li>Erhöht enorm die Bewegungsgeschwindigkeit von Yamaokas Spuk.</li><li>Während Yamaokas Spuk sind keine Kratzspuren mehr sichtbar.</li>","name":"Mutter-Tochter-Ring","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"Brille, die einem überarbeiteten Büroangestellten gehörte.<li>Während Yamaokas Spuk sind Blutspuren von Überlebenden sichtbar.</li>","name":"Brille des Vaters","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"Ein freundlich blickender, leuchtend gelber Anstecker, der mit sarkastischer Absicht getragen wird.<li>Ein Treffer bei einem Überlebenden, der vom Killerinstinkt hervorgehoben ist, während er sich im Zustand „Wilde Raserei“ befindet, lässt den Statuseffekt „Erblindung“ für 60 Sekunden wirken.</li>","name":"Smiley-Button","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"Ein Holzlineal, in das Doppelkreuze tief eingekratzt wurden.<li><b>Verkürzt leicht</b> die zum Füllen der Stärkeleiste erforderliche Zeit.</li>","name":"Zerkratztes Lineal","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"Eine Liste mit schelmischen Missionen, die es zu erledigen gilt. Ein Erinnerungsstück an unbeschwertere Tage.<li><b>Verlängert leicht</b> die Dauer von „Wilde Raserei“.</li>","name":"Unfugliste","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"Ein weites, aus grauen und roten Schnüren geflochtenes Armband. Jemand hat mit dickem schwarzen Filzstift „F J S J“ darauf geschrieben.<li><b>Erhöht leicht</b> den Wahrnehmungsreichweite von „Killerinstinkt“.</li>","name":"Freundschaftsband","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"Tabletten mit äußerst hohem Koffeingehalt, die einen Energieschub für Klausuren oder anstrengende Aktivitäten gewähren.<li><b>Erhöhen moderat</b> die Wahrnehmungsreichweite von „Killerinstinkt“.</li>","name":"Wachhaltepillen","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"Eine Seite, die aus einem Notizbuch gerissen wurde und die grobe Skizze des Wandbilds der Legion enthält.<li><b>Verlängert moderat</b> die Dauer von „Wilde Raserei“.</li>","name":"Wandbildskizze","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"Eine düstere, deprimierende Mixkassette, die hauptsächlich aus Powerballaden und bedrückenden Songs besteht.<li><b>Verkleinert leicht</b> die Ermüdung nachdem „Wilde Raserei“ endet.</li>","name":"Julies Mixkassette","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"Ein Holzlineal, in das die Namen von Feinden tief eingeritzt wurden.<li><b>Verkürzt moderat</b> die zum Füllen der Stärkeleiste erforderliche Zeit.</li>","name":"Lineal mit Namen","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"Ein einstmals freundlich blickender, leuchtend gelber Anstecker mit einem entstellten Smiley. Ein Erkennungszeichen der Legion.<li>Ein Treffer bei einem Überlebenden, der vom Killerinstinkt hervorgehoben ist, während er sich im Zustand <i>Wilde Raserei</i> befindet, bewirkt den Statuseffekt <b><i>Zerfleischt</i></b>.</li>","name":"Entstellter Smiley-Button","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"Ein handgemachter Anstecker mit dem Gesicht der Legion. Nur für einschüchternde Herausforderungen zu verwenden.<li>Ein Treffer bei einem Überlebenden, der vom Killerinstinkt hervorgehoben ist, während er sich im Zustand „Wilde Raserei“ befindet, lässt den Statuseffekt „Gebrochen“ für 60 Sekunden wirken.</li>","name":"Legion-Button","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"Eine schnelle und aufregende Mixkassette mit stärkendem, halsbrecherischen Rhythmus.<li><b>Erhöht enorm</b> die Wahrnehmungsreichweite von „Killerinstinkt“.</li>","name":"Susies Mixkassette","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"Ein Skizzenbuch mit einfallsreichen, sinnträchtigen, aber leicht bizarren Entwürfen.<li><b>Erhöht deutlich</b> die Dauer von „Wilde Raserei“.</li>","name":"Gestohlenes Skizzenbuch","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"Diese Klinge ist mit unhygienischem Dreck besudelt, was damit verursachte Verletzungen sehr schwer zu behandeln macht.<li><b>Erhöht leicht</b> die benötigte Zeit, die Überlebende für die Durchführung der Genesen-Aktion benötigen.</li>","name":"Fiese Klinge","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"Ein Mix aus hämmernden Songs und heftigen Rhythmen, die beim Relaxen helfen, wenn einem das Leben übel mitspielt.<li><b>Verringert moderat</b> die Ermüdung, nachdem „Wilde Raserei“ endet.</li>","name":"Joeys Mixkassette","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"Ein medizinischer Artikel, der aus Ormonds öffentlicher Bücherei entwendet wurde und eine Studie über Wunden und Stichverletzungen verständlich darstellt.<li><b>Verkürzt moderat</b> den „Tiefe Wunde“-Timer aller Überlebenden.</li>","name":"Studie über Stichwunden","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"Geh niemals ohne deine Lieblingslieder auf die Jagd. Diese Songs bieten massive Verzerreffekte und laute Schlagzeugpassagen, die dein Trommelfell malträtieren.<li>Sorgt dafür, dass „Wilde Raserei“ den Timer für „Tiefe Wunde“ eines Überlebenden <b>deutlich reduziert</b>.</li>","name":"Franks Mixkassette","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"Diese Klinge ist mit altem Blut und Dreck besudelt, was damit verursachte Verletzungen sehr schwer zu behandeln macht.<li><b>Erhöht moderat</b> die benötigte Zeit, die Überlebende für die Durchführung der Genesen-Aktion benötigen.</li>","name":"Schmutzige Klinge","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"Eine Handvoll Erde, die von der letzten Ruhestätte des Hausmeisters stammt. Sie ist unnatürlich kalt.<li><b>Verringert deutlich</b> die Ermüdung nachdem „Wilde Raserei“ endet.</li>","name":"Kalte Erde","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"Ein glasartiger Anstecker, der nach dem Vorbild der Legion aus dem Nebel erschaffen wurde. Die Oberfläche ist warm und verströmt die Macht des Entitus.<br><br>Wenn ein Überlebender während „Wilde Raserei“ den Statuseffekt „Tiefe Wunde“ erhalten hat, gilt Folgendes:<br><li>Dein Terrorradius deckt <b>die gesamte Karte</b> ab.</li><li>Paletten, über die du kletterst, werden <b>sofort zerstört</b>.</li><br>Dieser Effekt hält so lange an, bis deine Stärkeleiste leer ist.<br>","name":"Schillernder Button","flavor":"„Die Jugend, die vom schillernden Glas vereinnahmt wird, stärkt und erweitert den Einflussbereich des Entitus.“","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"Düstere Rhythmen, rabiate Gitarrenklänge und abgründiger Gesang aus einer anderen Welt erfüllen den Geist mit einem vibrierenden sechsten Sinn.<li>Solange „Wilde Raserei“ verwendet wird, ist der <b>Reparaturfortschritt von Generatoren</b> an der <b>Intensität ihrer Auren</b> erkennbar.</li>","name":"Aggressive Mixkassette","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"Teil einer zerbrochenen Gebetstafel mit einer verdorbenen Beschwörung, die ursprünglich genutzt wurde, um Krankheiten und allgemeines Unwohlsein zu beseitigen.<li><b>Verkürzt leicht</b> die Aktivierungszeit des Vorrats Hingabe</li><li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit, während man Reinigung des Verderbens hält.</li>","name":"Teil einer Gebetstafel","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"Ein wertvolles Harz, das aus Weihrauchbäumen gewonnen und aufgrund des süßen Zitrusduftes bei Zeremonien eingesetzt wird.<li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit beim Aufladen von „Reinigung der Bösartigkeit“.</li>","name":"Weihrauchharz","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"Ein zylinderförmiges Siegel, das aus porösem Stein gefertigt wurde und die Szene eines Rituals mit geflügelten Gottheiten zeigt.<li><b>Verlängert leicht</b> die Infektionszeit von Objekten.</li>","name":"Kalksteinsiegel","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"Eine bitter riechende Paste aus zerdrückten Wurzeln, die drei Tage lang in Fischlake und zwei Tage lang in Wein mariniert wurden. Wird auf Hautauschläge aufgetragen.<li><b>Verkürzt leicht</b> die Abklingzeit von „Reinigung der Bösartigkeit“.</li>","name":"Heilsalbe","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"Ein Specksteinamulett, in das grob eine geflügelte Gottheit eingraviert ist, die Krankheiten abwehrt. Erfüllt den Träger mit Hingabe.<li><b>Erhöht leicht</b> die Dauer von „Reinigung des Verderbens“.</li>","name":"Prophylaktisches Amulett","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"Eine schäumende, trübe Flüssigkeit, die ein starkes Aroma von Kräutern und Alkohol verbreitet. Wird direkt auf Blasen aufgetragen.\\n<li><b>Verkürzt moderat</b> die Abklingzeit von „Reinigung der Bösartigkeit“.</li>","name":"Wirkungsvolle Tinktur","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"Ein zylinderförmiges Siegel aus einem metallischen Hartstein. Eine Gravur zeigt vogelköpfige Wesen, die neben seltsamen Maschinen stehen. Wird als Behälter für geweihte Asche genutzt.<li><b>Verlängert moderat</b> die Infektionszeit von Objekten.</li>","name":"Hämatitsiegel","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"Ein auf Senfwasser basierender Sirup, der beim Verzehr Erbrechen bewirkt. Wird benutzt, um das Böse aus dem Körper zu entfernen.<li><b>Erhöht leicht</b> die Wirksamkeit von „Reinigung der Bösartigkeit“.</li>","name":"Brechtrank","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"Eine perfekt gereifte Frucht zum Verzehr während der Reinigungszeremonie. Lecker.<li>Starte die Prüfung mit <b>1</b> verdorbenen Brunnen der Hingabe.</li>","name":"Gesegneter Apfel","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"Ein Becher voller Einreibeöl mit hustenlösender Wirkung. Verströmt den Duft von Lorbeer und Rosmarin.<li><b>Erhöht moderat</b> die Aufladegeschwindigkeit von „Reinigung der Bösartigkeit“.</li>","name":"Einreibeöl","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"Ein ekliger Sirup unbekannten Ursprungs. Nimmt man die gelbe Paste zu sich, muss man sich übergeben. Wird benutzt, um das Böse aus dem Körper zu entfernen.<li><b>Erhöht moderat</b> die Wirksamkeit von „Reinigung der Bösartigkeit“.</li>","name":"Infiziertes Brechmittel","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"Eine dunkle, wachsartige Paste, die mit Zedernsaft gestreckt wurde und ein süßes, erdiges Aroma verströmt. Wird direkt auf infizierte Haut aufgetragen.<li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit während des Aufladens von „Reinigung der Bösartigkeit“.</li><li><b>Verkürzt moderat</b> die Abklingzeit von „Reinigung der Bösartigkeit“.</li>","name":"Weihrauchsalbe","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"Ein Amulett aus Obsidian, das bei Exorzismusritualen die Übelkeit abwehrt. Ein Gebet an den Gott des Wahnsinns und der Seuchen ist als Inschrift darauf zu sehen. Es erfüllt den Träger mit leidenschaftlicher Hingabe.<li><b>Erhöht moderat</b> die Dauer von „Reinigung des Verderbens“.</li>","name":"Exorzismusamulett","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"Ein geschälter Apfel, der in geweihter Asche gewälzt wurde. Der Verzehr einer solchen Frucht vertreibt die bösen Geister der Verstorbenen.<li>Starte die Prüfung mit <b>1</b> verdorbenen Brunnen der Hingabe.</li><li><b>Verlängert leicht</b> die Infektionszeit bei Objekten.</li>","name":"Aschgrauer Apfel","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"Eine Steintafel, die mit Gold verziert ist und die Zeichnungen und Schriften einer verdorbenen Beschwörung zeigt, die ursprünglich genutzt wurde, um vergessene Gottheiten zu verehren.<li><b>Verkürzt moderat</b> die Aktivierungszeit des Brunnens der Hingabe.</li><li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit, während „Reinigung des Verderbens“ aktiv ist.</li>","name":"Verehrungstafel","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"Ein übel riechender und halb geronnener Trank aus nicht identifizierbaren Zutaten. Wird getrunken, um schnelles Erbrechen zu bewirken und somit das Böse aus dem Körper zu entfernen.<li><b>Erhöht deutlich</b> die Wirksamkeit von „Reinigung der Bösartigkeit“.</li>","name":"Ekliges Brechmittel","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"Der an einem Faden befestigte faulende Zeh von Adiris kann als Amulett um den Hals getragen werden. Strahlt abscheuliche Macht aus.<li><b>Erhöht deutlich</b> die Rate, mit der Überlebende sich bei Interaktionen infizieren.</li>","name":"Abgetrennter Zeh","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"Ein Blutsteinamulett, in welches das Abbild des babylonischen Gottes des Wahnsinns und der Seuchen eingraviert ist. Es erfüllt den Träger mit grenzenloser Hingabe.<li><b>Erhöht deutlich</b> die Dauer von „Reinigung des Verderbens“.</li>","name":"Amulett des Verehrers","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"Ein durchscheinendes, zylinderförmiges Siegel, das aus dem Nebel selbst gegossen wurde. Es trägt das Abbild der Seuche. Seine Oberfläche fühlt sich warm an und pulsiert mit der Macht des Entitus.<li><b>Verringert moderat</b> die Bewegungsgeschwindigkeit, während „Reinigung des Verderbens“ aktiv ist.</li><li><b>Verkürzt enorm</b> die Dauer von „Reinigung des Verderbens“.</li><li>Jedes Mal, wenn ein Generator abgeschlossen ist, wird „Reinigung der Bösartigkeit“ zu „Reinigung des Verderbens“.</li>","name":"Schillerndes Siegel","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Eine dunkle Paste, die aus spitzen Knochenspänen hergestellt wurde. Inhaliert man die üblen Dämpfe, wird der Verstand geschärft.<li>Die Auren von Überlebenden werden dir für <b>5 Sekunden</b> angezeigt, wenn diese sich übergeben.</li>","name":"Schwarzer Weihrauch","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"Die Kamera, die einem von Olsens Opfern in Philadelphia gestohlen wurde, wo er früher gearbeitet hat. Der Film darin hat seine letzte Nacht in der Stadt eingefangen.<br><li><b>Erhöht leicht</b> die Rate, mit der ein Überlebender markiert wird, wenn du dich nicht aus der Deckung lehnst.</li>","name":"„Philly“","flavor":"„Philly muss man einfach lieben. Die Stadt gibt und gibt, und ich möchte nichts davon missen.“ –Ghost Face","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"Ein Briefchen mit Streichhölzern von Walleyes, einer kleinen Bar in Nord-Roseville. Die Telefonnummer eines Opfers wurde in Blau darauf notiert. Einer der belastenden Beweise, die gefunden wurden.<br><li><b>Erhöht leicht</b> die Wiederherstellungsrate von <i>Mantel der Nacht</i>.</li>","name":"Walleyes-Streichholzbriefchen","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"Ausgeschnittene Schlagzeilen über ungelöste Mordfälle von Utah bis Pennsylvania. Obwohl Ghost Face nur einige der Schlagzeilen geschrieben hat, so hat er die Morde doch alle begangen.<br>Eine Übersicht über eigene Erfolge macht stolz und stärkt das Selbstbewusstsein.<br><li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit während der Verfolgung.</li>","name":"Ausgeschnittene Schlagzeilen","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"Ein Billigparfüm mit dem stechenden Geruch von Reinigungsalkohol. Ghost Face trägt es, um auf seine Anwesenheit aufmerksam zu machen. Reserviert für spontane Besuche.<br><li><b>Erhöht leicht</b> die Dauer, für die ein Überlebender markiert ist.</li>","name":"Billigparfüm","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"Manuelles Objektiv, mit dem man Fotos aus der Ferne machen kann, ohne bemerkt zu werden.<br><li><b>Erhöht leicht</b> die Rate, mit der ein Überlebender markiert wird, wenn du dich nicht aus der Deckung lehnst.</li><li><b>Erhöht leicht</b> die Dauer, für die ein Überlebender markiert bleibt.</li>","name":"Teleobjektiv","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"Ein Notizbuch mit Spiralbindung voller verschmierter, handgeschriebener Einträge. Im Tagebuch ist allerhand Ausrüstung aufgelistet, die man zum Verfolgen von Opfern benötigt. Während du die alten Methoden durchgehst, kommen aufregende Erinnerungen wieder hoch.<br><li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit beim Verfolgen.</li>","name":"Olsens Tagebuch","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"Voller unleserlichem Gekritzel in Blau. Alle Mordopfer von Roseville sind hier neben ihren Telefonnummern und Adressen aufgelistet.<br><li><b>Verbessert moderat</b> die Wiederherstellungsrate von <i>Mantel der Nacht</i>.</li>","name":"Olsens Adressbuch","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"Eine Karte von Nord-Roseville, Florida, mit Markierungen. Jedes X stellt ein Opfer von Ghost Face dar. Indem du deine Ziele planst, kannst du dich unerkannt durch die Straßen bewegen.<br><li><b>Erhöht moderat</b> die Dauer, für die „Killerinstinkt“ sichtbar ist, wenn der Killer enthüllt wurde.</li>","name":"Karte mit Markierungen","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"Schwarze Gurte, die alles an Ort und Stelle halten, wenn man auf Beute aus ist.<br><li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit, während du dich geduckt bewegst.</li>","name":"Sattelgurte ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"In Olsens Portemonnaie stecken dreißig Dollar Bargeld, die Mitgliedskarte eines Videoclubs sowie ein zusammengefaltetes Bild von Olsens erstem Opfer in Roseville. Wenn du belastende Beweise mit dir führst, erhöht das die Spannung und deine Entschlossenheit.<br><li><b>Erhöht deutlich</b> die Bewegungsgeschwindigkeit beim Verfolgen.</li>","name":"Olsens Portemonnaie","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"Eine leise und flexible Scheide für deine Klinge. Man kann sich leichter bewegen, wenn alles an Ort und Stelle fixiert ist.<br><li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit, während du geduckt bist.</li>","name":"Messerscheide aus Leder","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"Ein überwältigender Moschusduft, den Ghost Face trägt, um seine Anwesenheit zu verkünden. Für Opfer reserviert, über die er schreiben wollte.<br><li><b>Erhöht moderat</b> die Dauer, für die ein Überlebender markiert bleibt.</li>","name":"Lang anhaltendes Parfüm","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"Eine perfekte Gürtelhalterung, um deine Klinge heimlich zu tragen. Niemand ahnt, was du heute Abend vorhast.<br><li><b>Erhöht moderat</b> die Rate, mit der ein Überlebender markiert wird, wenn du dich nicht aus der Deckung lehnst.</li>","name":"Gürtelhalterung für Messer","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"Ein blauer Stift mit angekauter Kappe, die Spuren von Dannys DNA trägt. Ein belastender Beweis, der niemals gefunden wurde.<br><li><b>Erhöht deutlich</b> die Wiederherstellungsrate von <i>Mantel der Nacht</i>.</li>","name":"Angekauter Stift","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"Eine herausgerissene Seite mit dem Wochenablauf von Olsens erstem Opfer in Roseville. Durch das Zusammenstellen der Gewohnheiten eines Opfers kann man seine Handlungen vorausahnen. \\n<br><li><b>Erhöht moderat</b> die Dauer, für die „Killerinstinkt“ sichtbar ist, wenn der Killer enthüllt wurde.</li><li><b>Verringert moderat</b> die Wahrnehmungsreichweite, in der der Killer enthüllt wird, wenn „Mantel der Nacht“ aktiv ist.</li><br><span class=\\"FlavorText\\">„Ich habe dich schon eine Weile beobachtet. Ich möchte, dass es besonders wird. Die Sorte Schlagzeile, die niemand vergisst.“ –Ghost Face</span>","name":"Detaillierter Wochenablauf eines Opfers","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"Ein Nachtsichtobjektiv, das auch in der Dunkelheit noch scharfe Fotos ermöglicht. Ideal für heimliche Spontanbesuche am späten Abend.<br><li><b>Erhöht deutlich</b> die Rate, mit der ein Überlebender markiert wird, wenn du dich nicht aus der Deckung lehnst.</li>","name":"Nachtsichtmonokular","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"Ein Holster, das die Bewegungsfreiheit nicht einschränkt. Ideal, um schnelle und üble Wunden zuzufügen, während man sich frei bewegen kann. Wurde in der Nacht, in der Danny Philadelphia verließ, einem Streifenpolizisten gestohlen.<br><li><b>Erhöht deutlich</b> die Bewegungsgeschwindigkeit, während man sich geduckt bewegt.</li><span class=\\"FlavorText\\">„Bereit sein wie ein Pfadfinder – aber ohne die albernen Abzeichen. Was ich mir hole, ist viel besser.“ –Ghost Face</span>","name":"Beinmesserscheide","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"Ein Führerschein, der Olsens wahre Identität enthüllt: Danny Johnson.<br><li><b>Verringert deutlich</b> die Wahrnehmungsreichweite, innerhalb welcher der Killer entdeckt werden kann, solange <i>Mantel der Nacht</i> aktiv ist.</li>","name":"Führerschein","flavor":"„Alle wollen wissen, wer Ghost Face ist. Dabei sollten sie sich besser fragen, wer als Nächster dran ist.“ –Ghost Face","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"Die Videokassette, die Olsen besorgte, um einen Artikel zu schreiben, der Roseville in Angst und Schrecken versetzte.<br><li><b>Erhöht enorm</b> die Rate, mit der ein Überlebender markiert wird, wenn man sich aus der Deckung lehnt.</li><li><b>Verringert enorm</b> die Rate, mit der ein Überlebender markiert wird, wenn man sich nicht aus der Deckung lehnt.</li>","name":"„Ghost Face auf Video festgehalten“","flavor":"„Dieses Bildmaterial zeigt eine dunkle Gestalt, die am späten Abend in Nord-Roseville, Florida, in ein Haus einbricht. Am folgenden Morgen wurde die Polizei zu einem Mord in dieser Gegend gerufen. Verschließen Sie Ihre Türen, unter uns ist ein Killer. Er läuft frei herum, wie ein Geist in der Nacht.“ –Die Roseville Gazette","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"Eine kleine Überwachungskamera, mit der Ghost Face beim Einbruch in ein Haus in der Belleview Road in Nord-Roseville gefilmt wurde. Die Kamera war im perfekten Winkel angebracht, um einen Blick auf Ghost Face zu erhaschen, ohne der Polizei jedoch wirkliche Hinweise zu liefern.<br><li>Die Auren aller Überlebenden außerhalb deines Terrorradius werden für 4 Sekunden enthüllt, wenn ein markierter Überlebender in den Todesstatus versetzt wird.</li>","name":"Outdoor-Überwachungskamera","flavor":"„Ein Bild sagt mehr als tausend Worte.“ –Ghost Face","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"Kürbisfleisch, das von der verdorbenen Erde in Hawkins infiziert wurde.<li>Beim Durchqueren der anderen Seite wird das Portal, das du betrittst, zerstört. Du erhältst zusätzlich 200 Blutpunkte für die Durchquerung.</li>","name":"Verfaulter Kürbis","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"Ein zäher Rattenschwanz, der als Futter für den Demogorgon dient.<li><b>Verringert leicht</b> die Dauer für das Öffnen eines Portals.</li>","name":"Rattenschwanz","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"Ein feuchter Haufen salziger, weicher Leber.<li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit des Killers, während <b>Aus dem Abgrund</b> aufgeladen wird.</li>","name":"Rattenleber","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"Ein schwarzes, fermentiertes Herz, das einem Tentakelwesen von der anderen Seite aus der Brust gerissen wurde.<li><b>Erhöht leicht</b> die Wiederherstellungsrate nach geglücktem <b>Zerfetzen</b>.</li>","name":"Schwarzes Herz","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"Feuchte, elastische Gewebe, die die interdimensionalen Tunnel erweitern.<li><b>Verlängert leicht</b> die Zeit, die Überlebende benötigen, um ein Portal zu versiegeln.</li>","name":"Schmieriges Gewebe","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"Eine übelriechende zähflüssige Schicht, die in den interdimensionalen Tunneln klebt und sich dort ausbreitet.<li><b>Erhöht moderat</b> den Radius, in dem Überlebende von <b>Aus dem Abgrund</b> entdeckt werden können.</li>","name":"Klebriger Belag","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"Verfaulte Kutteln, die dem Demogorgon als Futter dienen.<li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit des Killers, während er die andere Seite durchquert.</li>","name":"Verfaulte grüne Kutteln","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"Die leckeren Innereien eines unglücklichen Opfers.<li><b>Erhöht</b> die Gesamtzahl der verfügbaren Portale um <b>1</b>.</li><li><b>Erhöht leicht</b> die Wiederherstellungsrate nach missglücktem <b>Zerfetzen</b>.</li>","name":"Mews Innereien","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"Eine zerbrochene Brille, die auf der anderen Seite war.<li><b>Erhöht leicht</b> die Wiederherstellungsgeschwindigkeit von <i>Zerfetzen</i> beim Zerstören einer Palette.</li>","name":"Barbs Brille","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"Ein Pilz mit dunklem Fleisch von der anderen Seite. Durch ihn kann der Demogorgon die Sinne seiner Beute telepathisch stören.<li><b>Verlängert leicht</b> die Dauer des Statuseffekts <b>Unentdeckbar</b>, der auf den Killer wirkt, wenn er aus einem Portal kommt.</li>","name":"Violetter Saftling","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"Dicke und dornige Ranken, die die interdimensionalen Tunnel verstärken und erweitern.<li><b>Erhöht leicht</b> die Dauer für das Versiegeln eines Portals durch Überlebende.</li><li><b>Erhöht leicht</b> den Radius, in dem Überlebende von <b>Aus dem Abgrund</b> entdeckt werden können.</li>","name":"Dornige Ranken","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"Eine Getränkedose, die mit psychischer Energie gefüllt ist.<li>Zeigt bei der Durchquerung der anderen Seite gelbe Auren an, wenn Generatoren repariert werden.</li>","name":"Eleven-Limonade","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"Eine rohe, gummiartige Lunge, die den Demogorgon neu belebt.<li><b>Erhöht deutlich</b> die Bewegungsgeschwindigkeit des Killers, während er die andere Seite durchquert.</li><li>Verringert die Anzahl verfügbarer Portale um <b>2</b>.</li>","name":"Rehlunge","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"Ein Feuerzeug, mit dem Ärger entfacht werden kann.<li>Überlebende, die unter dem Effekt eines Portals stehen, erleiden den Statuseffekt <b>„Erblindung“</b>. Sobald der Kontakt zum Portal abbricht, bleibt der Effekt weiterhin für <b>60 Sekunden</b> bestehen.</li>","name":"Messingfeuerzeug","flavor":"„Es erzeugt ein starkes, elektromagnetisches Feld. Es muss mit der anderen Seite in Kontakt gekommen sein.“ –Hawkins National Laboratory","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"Ein hellroter Giftpilz von der anderen Seite.<li><b>Erhöht moderat</b> die Dauer des Statuseffekts <b>Unentdeckbar</b>, der auf den Demogorgon wirkt, wenn er aus einem Portal kommt.</li>","name":"Zinnoberroter Raukopf","flavor":"„Wir experimentieren noch immer mit diesem Exemplar, denn bislang sind unsere Ergebnisse inkonsistent.“ –Hawkins National Laboratory","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"Ein klebriger und entflammbarer Saft, der das Tor zu den interdimensionalen Tunneln verstärkt.<li><b>Erhöht moderat</b> die Zeit, die Überlebende benötigen, um ein Portal zu versiegeln.</li>","name":"Harz der anderen Seite","flavor":"„Eine Probe, die wir einem Baum entnahmen, der ein Portal zu einer anderen Ebene verbarg. Untersuchungen zu ihren Wirkungen sind bislang unschlüssig.“ –Hawkins National Laboratory","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"Ein großes, warmes Ei, das mit einem ekelhaften Gewebe bedeckt ist.<li><b>Erhöht deutlich</b> die Wiederherstellungsrate der Stärke beim Durchqueren der anderen Seite.</li>","name":"Unbekanntes Ei","flavor":"„Ein großes Ei wurde auf der anderen Seite entdeckt. Jedoch hat keine Probe die Reise ins Labor überlebt, sodass wir keine Untersuchungen anstellen konnten.“ –Hawkins National Laboratory","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"Eine rostige Metallpfeife, die einst im öffentlichen Schwimmbad von Hawkins für Ordnung sorgte.<li>Überlebende in der Nähe von aktivierten Portalen werden vom Killerinstinkt angezeigt, ohne dass <b>Aus dem Abgrund</b> aufgeladen werden muss.</li>","name":"Bademeisterpfeife","flavor":"„Sie erzeugt ein starkes, elektromagnetisches Feld. Sie muss mit der anderen Seite in Kontakt gekommen sein.“ –Hawkins National Laboratory","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"Ein bewusstseinserweiterndes Moos, das auf der anderen Seite auf Baumrinde wächst.<li>Beim Durchqueren der anderen Seite tritt der Demogorgon leise, aber langsamer aus dem Zielportal.</li><li><b>Erhöht enorm</b> die Dauer des Statuseffekts <b>Unentdeckbar</b> des Demogorgon beim Durchqueren eines Portals.</li>","name":"Rotes Moos","flavor":"„Sein Verzehr verstärkt athletische Leistungen und verursacht Euphorie.“ –Hawkins National Laboratory","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"Eine wirksame Flechte, die in der anderen Seite wie Staub auf Steinen wächst.<li><b>Enthüllt die Auren</b> aller Überlebenden während der Durchquerung der anderen Seite und <b>3 Sekunden lang</b>, nachdem ein Portal durchschritten wurde.</li>","name":"Anderflechte","flavor":"„Eine kleine Dosis kann schwere Halluzinationen verursachen.“ –Hawkins National Laboratory","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"Da er seine Ziele für rein und gerecht hielt, trug Kazan ein Schmuckstück bei sich, um Böses abzuwenden, das ihn vom rechten Weg abbringen könnte.<li><b>Erhöht leicht</b> die Absorptionsgeschwindigkeit der Blutkugeln.</li>","name":"Yaku-Yoke-Talisman","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"Wäre das Seil stärker gewesen, hätte es Kazan vermutlich festgehalten. So aber konnte er entkommen und seine Häscher abschlachten.<li><b>Erhöht leicht</b> die Distanz, in der die Auren von Blutkugeln entdeckt werden können.</li>","name":"Zerfallendes Seil","flavor":"„Obwohl der Tod fokussiert ist, kennt er die Teleportation.“ –Renjiros Doktrin 14, 5 ","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"Eine Tasse von Kazans Hochzeitszeremonie, die schon kaputt ging, bevor die Nacht zu Ende war.<li><b>Verlängert leicht</b> die Laderate der Aktivierung, um <i>Blutzorn</i> zu starten.</li><li><b>Verkürzt leicht</b> die Deaktivierungszeit von <i>Blutzorn</i>.</li>","name":"Gesprungene Sakazuki","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"Fiel während einer der vielen hundert Winterwanderungen Kazans zum Tempel ab. Trotz seines Pilgerdaseins wollte Akitos Bein nie heilen.<li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit, während Blutkugeln absorbiert werden.</li>","name":"Schwarzer Zehennagel","flavor":"„Wenn ein Vater keine Opfer für seine Kinder bringt, was für ein Vater ist er dann?“ –Renjiros Doktrin 11, 12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"Ein Kopfschmuck mit Hörnern, den Kazan von seinem Helm abgerissen hatte, nachdem er mit einem Dämon verglichen worden war.<li><b>Erhöht leicht</b> die Aufladegeschwindigkeit von <i>Yamaokas Zorn<i>.</li>","name":"Poliertes Maedate","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"Eine Tuschezeichnung, die einst im Yamaoka-Anwesen hing. Sie zeigt die Geschichte eines Löwen, der von Mäusen gefressen wird.<li><b>Erhöht leicht</b> die Laderate der Aktivierung, um <i>Blutzorn</i> zu starten.</li><li><b>Verkürzt leicht</b> die Deaktivierungszeit von <i>Blutzorn</i>.</li><li><b>Verringert moderat</b> die Nutzungsstrafe von <i>Blutzorn</i>, wenn man einen Überlebenden niederstreckt.</li>","name":"Tuschelöwe","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"Ein Schlagstock, der einst Renjiro gehört hat, dann aber von Kazan bei dessen Abreise gestohlen wurde.<li><b>Verlängert leicht</b> die Dauer von <i>Blutzorn</i>.</li>","name":"Saihai mit Kerben","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"Akitos Übungsschwert. Das Kind hatte nach seiner Verletzung nur wenig Verwendung dafür.<li><b>Verlängert moderat</b> die Distanz, in der die Auren von Blutkugeln entdeckt werden können.</li>","name":"Kinderholzschwert","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"Blut von einem Jungen, der „Kazan, der adlige Hochstapler“ genannt wurde. Kazan verbarg die Anzeichen für den Kampf vor seinem Vater und weidete sich nur im Geheimen an der Schärpe.<li><b>Verlängert moderat</b> die Bewegungsgeschwindigkeit, während Blutkugeln absorbiert werden.</li>","name":"Blutige Schärpe","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"Das Banner der Yamaoka-Familie. Kazan war unglaublich stolz darauf.<li><b>Verlängert moderat</b> die Dauer von <i>Blutzorn</i>.</li>","name":"Yamaoka Sashimono","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"Eine Maske, die der junge Kazan kaufte, um Setsubun zu feiern. Der Mund wird von abstoßenden Zähnen geziert und kam später immer wieder in seinen Albträumen vor.<li><b>Erhöht leicht</b> die Anzahl an Blutkugeln, die Überlebende verlieren.</li>","name":"Hölzerne Oni-Maske","flavor":"„Es ist kein Zufall, dass der Mensch sich so gut mit Dämonen auskennt.“ –Renjiros Doktrin 3, 8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"Die Bruchstücke einer uralten Klinge, die von Kazan in einem Wutanfall zerstört wurde.<li><b>Erhöht moderat</b> die passive Laderate für <i>Yamaokas Zorn</i>.</li>","name":"Zerschlagenes Wakizashi","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"Der Haarknoten eines Samurai, der Kazans Ehre infrage gestellt hatte. An den Haarwurzeln hängt ein dünner Streifen blutiger Haut.<li><b>Erhöht deutlich</b> die Laderate für die Aktivierung, um <i>Dämonensprint</i> zu starten, während <i>Blutzorn</i> aktiv ist.</li>","name":"Haarknotenskalp","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"Ein Schmuckstück, das Kazan bei der Geburt gegeben wurde. Seine Kräfte sollen seine Familie vor Unheil beschützen.<li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit von <i>Dämonensprint</i>, während <i>Blutzorn</i> aktiv ist.</li>","name":"Kanai-anzen-Talisman","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"Das Stück Stoff, in das Kazans Mutter weinte, als er zu seiner Pilgerreise aufbrach, um die Samurai zu zerstören.<li><b>Verringert deutlich</b> die Nutzungsstrafe von <i>Blutzorn</i>, wenn man einen Überlebenden niederstreckt.</li>","name":"Tränengetränktes Tenugui","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"Bruchstücke eines Schiffs, auf dem Renjiro Yamaoka mitfuhr. Entgegen aller Wahrscheinlichkeiten scheint der Samurai überlebt zu haben.<li><b>Erhöht moderat</b> die Anzahl an Blutkugeln, die Überlebende verlieren.</li>","name":"Schiffsrumpfsplitter","flavor":"„Wenn du eine List planst, darfst niemandes Rat annehmen.“ –Renjiros Doktrin 7, 9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"Ein Zahn, der von einem exotischen Händler verkauft wurde. Er symbolisiert Macht und Vornehmheit.<li><b>Verlängert deutlich</b> die Dauer von <i>Blutzorn</i>.</li>","name":"Löwenzahn","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"Die Krücke, die Kazans Sohn nutzen musste, nachdem er von einem Baum gefallen war. Akitos Spielkameradin und ihre Familie wurden für den Unfall des Jungen bestraft.<li><b>Erhöht deutlich</b> die Bewegungsgeschwindigkeit von <i>Dämonensprint</i>, während <i>Blutzorn</i> aktiv ist.</li>","name":"Akitos Krücke","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"Der Handschuh, den Renjiro an sein Brustbein hielt, nachdem er von seinem Sohn erstochen wurde.<li>Alle Überlebenden können Blutkugeln sehen.</li><li>Ein Überlebender, der mit einer Blutkugel in Berührung kommt, absorbiert die Blutkugel, wodurch seine Aura für <b>2 Sekunden</b> für den Killer zu sehen ist.</li><li>Dieser Effekt wird kombiniert, und zwar mit jeder absorbierten Blutkugel.</li>","name":"Renjiros blutiger Handschuh","flavor":"„Wenn alles andere dich verlässt, dann halte dich an deiner Ehre fest.“ –Renjiros Doktrin 14, 12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"Ein Wappen, das seinen Besitzer als Angehöriger der Yamaoka-Familie ausweist.<br><li>Während <i>Blutzorn</i> aktiv ist, beginnen bei einem gescheiterten <i>Dämonenschlag</i> alle Überlebenden in einem <b>Radius von 12 Metern</b> zu schreien und zeigen dir damit ihre Position.</li>","name":"Irisierendes Familienwappen","flavor":"„Wisse, wer du bist, damit du dein Herz abschirmen kannst.“ –Renjiros Doktrin 11, 2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"Ein schmuddeliges Stück Sackleinen. Spucke und Ellbogenschmalz haben gereicht, um in einem heißen Gefecht die Harpune abzuwischen.<li><b>Verringert leicht</b> die Abklingzeit der Harpune.</li>","name":"Poliertuch ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"Eine Tinktur aus Ölen und Extrakten, die von einem fahrenden Händler stammen. Sie soll angeblich alles heilen, was einen plagt.<li><b>Erhöht leicht</b> die Rückziehgeschwindigkeit der Harpune.</li>","name":"Schlangenöl ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"Schwache Stahlglieder, die zuerst an Calebs Prototyp seiner Harpune Verwendung fanden. Obwohl die Kette fast auseinanderfällt, hat sie für ihn einen ideellen Wert.<li>Gewährt <b>50 %</b> Bonus-Blutpunkte für <i>Aufgespießt</i>-Punktereignisse.</li><li>Überlebende können sich leichter losreißen.</li>","name":"Klapprige Kette","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"Ein alter Munitionsgürtel, der an Calebs speziellen Waffen angepasst ist. Es klebt noch immer das feine rote Dreck der Wüste Arizonas daran.<li><b>Erhöht leicht</b> die Nachladegeschwindigkeit der Harpune.</li>","name":"Modifizierter Munitionsgürtel ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"Ein Schwellennagel, den Caleb in einem Moment krankhafter Neugier vorne an der Harpune befestigte. Die stumpfe Spitze verhindert, dass das Ziel sauber durchbohrt wird.<li>Trifft man damit einen aufgespießten Überlebenden, erleidet er den Statuseffekt <b>Zerfleischt</b>.</li>","name":"Rostiger Nagel ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"Caleb fand heraus, dass Pfeile, die mit dem Öl dieser gewöhnlich aussehenden Pflanze eingerieben sind, eine unerträgliche Blasenbildung um die Pfeilwunde bewirken.<li><b>Erhöht leicht</b> die Genesungsdauer des Überlebenden, wenn er vom Statuseffekt <b>Tiefe Wunde</b> betroffen ist.</li>","name":"Giftiges Eichenlaub","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"Ein silbernes Abzeichen vom Leichnam eines Gesetzeshüters aus Arizona, der sich in die Angelegenheiten der Hellshire-Bande eingemischt hatte.<li><b>Verkleinert leicht</b> den Terrorradius, während durchs Visier der Harpune gezielt wird.</li><li><b>Verringert leicht</b> die Bewegungsgeschwindigkeit, während durchs Visier der Harpune gezielt wird.</li><span class=\\"FlavorText\\">„Sprich ein letztes Gebet, denn zu Mittag wirst du hängen.“ – Caleb Quinn</span>","name":"Abzeichen des Marshals ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"Die Kugel, die Calebs Kiefer bei einer wilden Schießerei durchbohrte. Sie bringt den drängenden Wunsch nach Rache zurück.<li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit, während durchs Visier der Harpune gezielt wird.</li><span class=\\"FlavorText\\">„Mit dieser Schandtat an mir hast du dir den Tod ins Haus geholt.“ – Caleb Quinn</span>","name":"Kieferbrecher ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"Eine Dose gestutzter und gesüßter Tabakblätter, die einem ausgeweidetem Leichnam in Glenvale entwendet wurde. Stimuliert das Nervensystem.<li><b>Verkürzt moderat</b> die Betäubungsdauer, wenn ein Überlebender sich von der Harpune losreißt.</li>","name":"Kautabak","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"Das dumpfe Klimpern der Schlüssel lässt in Caleb heftige Erinnerungen hochkochen.<li><b>Erhöht moderat</b> die Nachladegeschwindigkeit der Harpune.</li>","name":"Direktorenschlüssel ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"Die vergilbten Überreste eines Steckbriefs von Mason Kelly, haben Caleb bei der Jagd auf Trab gehalten.<li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit, wenn durchs Visier der Harpune gezielt wird.</li><span class=\\"FlavorText\\">„Die Abrechnung wird gewaltig, das schwöre ich beim Grab meiner Mutter.“ – Caleb Quinn</span>","name":"Steckbrief ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"Eine Dose mit einer kleinen Menge Öl, mit dem die Reibung bei Maschinen verringert werden kann. Frühe Modelle der Harpune hatten regelmäßig Ladehemmungen, und Öl musste daher ständig griffbereit sein.<li><b>Verringert moderat</b> die Abklingzeit der Harpune, nach Fehlschüssen.</li>","name":"Öldose ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"Voller Wut über ein Opfer, das zuvor schon zweimal geflohen war, drehte Caleb Dornenzweige zu einem Pfeil zusammen, um ihn ins Ziel zu jagen.<li>Überlebende, die sich von einem Pfeil der Harpune losreißen können, erleiden den Statuseffekt <b>Zerfleischt</b>.</li>","name":"Dornenpfeil ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"Ein goldener Zahn, der Henry Bayshore gezogen wurde, als er um Gnade schrie – nur Stunden, bevor er kaltgemacht wurde.<li><b>Erhöht moderat</b> die Drehgeschwindigkeit der Harpune.</li><span class=\\"FlavorText\\">„Du solltest wissen, wo du hingehörst, verdammt noch mal.“ – Henry Bayshore</span>","name":"Bayshores Goldzahn","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"Eine dicke, schwere Kette, mit der einst eine Stahlkugel an Calebs Knöchel befestigt war. Sie wurde umfunktioniert, um nun einen Pfeil zu befestigen.<li><b>Erhöht deutlich</b> die Anzahl der Versuche, die ein Überlebender braucht, um sich davon loszureißen.</li><span class=\\"FlavorText\\">„Insassen, die außerhalb des Gefängnishofs arbeiten, müssen mit einer Stahlkugel fixiert werden, die nicht weniger als 18 Pfund wiegen darf.“ – Wachhandbuch der Strafanstalt Hellshire</span>","name":"Gefängniskette","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"Warmer Trost in einer Flasche, der Calebs Wut unterdrückt und seinen Schritt verlangsamt hat.<li><b>Verkleinert deutlich</b> den Terrorradius, während durchs Visier der Harpune gezielt wird.</li><li><b>Verringert moderat</b> die Bewegungsgeschwindigkeit, während durchs Visier der Harpune gezielt wird.</li><span class=\\"FlavorText\\">„Ein lieblicher Geschmack für die raue Front.“ – Werbeanzeige für „Gold Creek“, 1876</span>","name":"Gold-Creek-Whiskey","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"Eine Qualitätszigarre, die aus der Jackentasche von Calebs Boss gezogen wurde, während er über den Pfeil jammerte, der in seinem Bauch steckte.<li><b>Verkürzt deutlich</b> die Betäubungsdauer, wenn der Überlebende sich einen Pfeil rausziehen kann.</li><span class=\\"FlavorText\\">„Zeig mit dem Ding nicht auf mich, du großmäuliger Schwachkopf.“ – Henry Bayshore</span>","name":"Bayshores Zigarre","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"Biegsamer amerikanischer Stahl, der mit Stacheln versehen ist. Trotz seiner Einfachheit stellte Caleb fest, dass er um einen Pfeil gewickelt werden kann, um dessen Bösartigkeit zu erhöhen.<li><b>Verbessert moderat</b> die Genesungsdauer des Überlebenden, wenn er vom Statuseffekt <b>Tiefe Wunde</b> betroffen ist.</li></li><span class=\\"FlavorText\\">„Bald gibt es nichts mehr zu fürchten. Bis dahin müsst ihr mich fürchten.“ – Caleb Quinn</span>","name":"Stacheldraht","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"Eine glasartige Münze, die aus dem Nebel selbst geformt wurde. Sie ist die Bezahlung für die Dienste des Kopfgeldjägers.<li>Überlebende, die aus mindestens <b>15 Metern</b> Entfernung mit einem Pfeil erwischt werden, erleiden den Statuseffekt <b>gefährdet</b>, solange der Pfeil in ihnen steckt.</li><span class=\\"FlavorText\\">„Handel, die man in Verzweiflung abschließt, werden mit Wahnsinn bezahlt.“</span>","name":"Schillernde Münze","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"Das Brandeisen der Hellshire-Bande. Entgegen der Geschichten, die erzählt werden, wurden damit niemals Neulinge in der Bande gebrandmarkt, sondern ausschließlich besonders streitsüchtige Opfer. <li>Solange ein Pfeil in einem Überlebenden steckt, werden die Auren aller Überlebenden innerhalb deines Terrorradius gezeigt.</li><span class=\\"FlavorText\\">„Hellshire-Bande: Kämpfer für Gerechtigkeit oder Gesetzlose?“ – Schlagzeile der Glenvale Gazette</span>","name":"Hellshire-Brandeisen","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"In einem Kühlschrank gefunden. Ein abscheuliches aufgedunsenes Gesicht ist darauf zu sehen.<li><b>Verlängert leicht</b> den Zeitraum, in dem die Pfade von <b>Riten des Urteils</b> in der Umgebung verbleiben.</li>","name":"Bleiring ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"Ein Schmetterling, der auf einem Bett in den Wood Side Apartments gefunden wurde. Er fällt fast auseinander, wenn man ihn berührt.<li><b>Verlängert leicht</b> die Aufladerate von <b>Riten des Urteils</b>.</li>","name":"Toter Schmetterling ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"Gefunden im Keller des Krankenhauses Brookhaven. Das Bild einer Spinne ist darauf eingraviert.<li><b>Verlängert leicht</b> die Gesamtdauer, in der <b>Riten des Urteils</b> genutzt werden kann.</li>","name":"Kupferring ","flavor":"„Ich war im Keller des Kellers eingesperrt. Dort war es so eng und dunkel, und ich hatte so große Angst. Zwar habe ich meinen wertvollen Ring dort verloren, aber ich werde nie wieder dorthin zurückkehren.“","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"Ein Nylonriemen, mit dem ein Opfer an einem Metallrahmen festgebunden war. Durch die Farbe ist es schwierig, davon aufgesaugtes Blut zu erkennen.<li><b>Erhöht leicht</b> die Reichweite von <b>Bestrafung der Verdammten</b>.</li>","name":"Schwarzer Riemen ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"Eine aus Wachs geformte Puppe, die von einem Gefangenen angefertigt wurde, der kurz darauf sein Urteil empfing.<li><b>Vergrößert moderat</b> die Reichweite von <b>Bestrafung der Verdammten</b>.</li>","name":"Wachspuppe ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"Die scharfe, rostige Spitze eines Speers. Es klebt noch Blut von ihrem letzten Opfer daran.<li><b>Verlängert moderat</b> die Gesamtdauer, in der <b>Riten des Urteils</b> ausgeführt werden kann.</li>","name":"Speerspitze ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"Ein rosa Stofffetzen mit Druck im Leopardenmuster. Schwer zu sagen, wofür er benutzt wurde.<li><b>Verlängert leicht</b> die Dauer der Wirkung von <i>Killerinstinkt</i>, wenn dieser Effekt durch <b>Riten des Urteils</b> ausgelöst wurde.</li>","name":"Stoff mit Leopardenmuster  ","flavor":"„Es ist egal, wer ich bin. Ich bin wegen dir hier, James.“ – Maria","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"Eine Videokassette von einem Liebespaar, das in Silent Hill Urlaub macht. Trotz ihres ideellen Wertes, wurde sie im Lakeview Hotel zurückgelassen.<li><b>Verlängert moderat</b> die Aufladerate von <b>Riten des Urteils</b>.</li>","name":"Vergessene Videokassette ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"Eine Spieluhr mit einer Figur aus dem Märchen „Aschenputtel“. Sie stammt aus einem Koffer, der mit Aufklebern zahlreicher Reiseziele versehen war.<li><b>Verlängert moderat</b> den Zeitraum, in dem die Pfade von <b>Riten des Urteils</b> in der Umgebung verbleiben.</li>","name":"Spieldose „Aschenputtel“ ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"Ein Foto von zwei Personen mit roten Kapuzen. Der Titel lautet „Blutrotes und Weißes Bankett für die Götter“.<li><b>Erhöht deutlich</b> die Aufladerate von <b>Riten des Urteils</b>.</li>","name":"Foto der Valtiel-Sekte ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"Eine Metalltafel mit eingravierten Aztekenfiguren.<li><b>Verlängert deutlich</b> die Gesamtdauer, in der <b>Riten des Urteils</b> ausgeführt werden kann.</li>","name":"Tafel „Der Unterdrücker“ ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"Ein Gemälde von einer imposanten Figur, die eine Stahlpyramide auf ihrem Kopf trägt. Im Hintergrund sind Opfer in einen Käfig gesperrt.<li><b>Verlängert moderat</b> die Dauer der Wirkung von <i>Killerinstinkt</i>, wenn dieser durch <b>Riten des Urteils</b> ausgelöst wurde.</li>","name":"Nebliger Tag, Nachlass des Urteils ","flavor":"„Das ist er ...“","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"Der glatte graue Fuß einer Schaufensterpuppe, brutal vom Bein abgerissen.<li><b>Verlängert deutlich</b> den Zeitraum, in dem die Pfade von <b>Riten des Urteils</b> in der Umgebung verbleiben.</li>","name":"Schaufensterpuppenfuß ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"Ein Diagramm des Lakeview Hotels. Rote Flammen wurden über diesen Ort der Schuld gemalt.<li><b>Erhöht deutlich</b> die Reichweite von „Bestrafung der Verdammten“.</li>","name":"Bild „Brennender Mann“ ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"Ein frisches Ei, das auffallend rot ist. Es hat etwa die Größe eines Wachteleis.<li><b>Verlängert deutlich</b> die Dauer von <i>Killerinstinkt</i>, wenn dieser durch <b>Riten des Urteils</b> ausgelöst wurde.</li>","name":"Scharlachrotes Ei ","flavor":"„In meinem ganzen Leben hatte ich noch nie so viel Angst! Ich bin dir wirklich völlig egal, ... oder?“ – Maria","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"Ein seltsam aussehendes Ei in einem rötlichen Orange. Es hat etwa die Größe eines Wachteleis.<li>Überlebende, die von <b>Riten des Urteils</b> betroffen sind, erleiden den Statuseffekt <b>Erblindung</b>, und zwar für <b>60 Sekunden</b>.</li>","name":"Rostfarbenes Ei ","flavor":"„James, ... du hast mich glücklich gemacht.“ – Mary","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"Ein Buch über die Geschichte und die Legenden von Silent Hill und der umliegenden Gegend.<li>Überlebende, die von <b>Riten des Urteils</b> betroffen sind, leiden unter dem Statuseffekt <b>Ahnungslos</b>, und zwar für <b>15 Sekunden</b>.</li><span class=\\"FlavorText\\">„Sie nannten diesen Ort den ‚Ort der stillen Gespenster‘.“</span>","name":"Buch „Verlorene Erinnerungen“ ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"Ein Buch über einen uralten Gott. Autor unbekannt.<li>Verletzte Überlebende, die von <i>Folter</i> betroffen sind, erleiden den Statuseffekt <b>Blutung</b>.</li>","name":"Buch „Blutrote Zeremonie“ ","flavor":"„Sprich. Ich bin der Blutrote. Die Lügen und Nebel sind nicht sie sondern ich.“","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"Ein alt aussehender Kelch, der aus purem Obsidian geformt wurde.<li>Der <b>Henker</b> erhält den Statuseffekt <b>Unentdeckbar</b>, wenn er auf einem Pfad von <b>Riten des Urteils</b> steht.</li>","name":"Obsidiankelch ","flavor":"„Verzeih, dass ich dich geweckt habe. Aber ohne dich kann ich einfach nicht weitermachen.“ – James Sunderland","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"Ein Talisman mit einem merkwürdigen Design darauf. Der Einfluss des Entitus scheint es verändert zu haben.<li>Wenn du einen Überlebenden in einen <b>Bußkäfig</b> schickst, werden die Auren aller Überlebenden, die an <i>Folter</i> leiden für <b>6 Sekunden</b> angezeigt.</li>","name":"Schillerndes Metatron-Siegel ","flavor":"„Dieses magische Quadrat mit starken schützenden und bannenden Eigenschaften wird ‚Virun-Wappen VII‘ oder auch ‚Metatron-Siegel‘ genannt.“","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Eine völlig wirkungslose Pille ... oder?<b>Verringert moderat</b> die Bewegungsgeschwindigkeit beim Stürmen.</li><li>Verdiene <b>100%</b> Bonus-Blutpunkte bei Sturm-Punkteereignissen.</li>","name":"Placebo-Tablette ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"Eine giftige Pflanze, die Talbots Interesse an Chemie entfacht hat. Sie lässt tief vergrabene Erinnerungen wieder aufflammen.<br><br><li><b>Erhöht leicht</b> die Wiederherstellungsrate nach einem Sturm.</li> ","name":"Fingerhut ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"Diese frühe Probe hat zwar nicht die gewünschten Ergebnisse geliefert, aber trotzdem überraschende Effekte gezeigt.<br><br><li>Richte dich nach einer Ramme automatisch in Richtung des nächsten Überlebenden im Umkreis von <b>16 Metern</b> aus.</li>","name":"Präparat Sieben ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"Ein Monokel, das Talbot trotz seiner in späteren Jahren zunehmenden Sehschwäche nur selten genutzt hat.<br><br><li>Zeigt die Zielposition einer Ramme.</li>","name":"Vermacktes Monokel","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"Die Reste von Talbots Notizen. Es sind immer noch einige wertvolle Informationen darin enthalten.<br><br><li><b>Verringert</b> die Menge der verfügbaren Sturm-Zähler um <b>1.</b></li><li><b>Erhöht moderat</b> die Geschwindigkeit, mit der Zähler sich regenerieren.</li>","name":"Zerfetzte Notizen ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"Getrocknete Blütenblätter der Pustelblume, die zu feinem Mehl verarbeitet wurden.<br><br><li><b>Erhöht moderat</b> die Dauer der Ramme.</li>","name":"Pustelmehl ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"Eine Probe des Gallensekrets der Seuche, die destilliert und mit einem chemischen Gemisch behandelt wurde.<br><br><li><b>Erhöht leicht</b> die Wenderate beim Stürmen.</li>","name":"Seuchengalle","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"Ein ansehnlicher Dorn, der von einem Viszeralgeschwür abgeschnitten wurde. Er sondert ein mildes Gift ab.<br><br><li><b>Erhöht moderat</b> die Wiederherstellungsrate nach einem Sturm.</li> ","name":"Geschwürdorn","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"Eine Ratte, die kurzzeitig ins Leben zurückkehrte, als ihr Serum injiziert wurde. Sie wurde aber aggressiv und unkontrollierbar.<br><br><li><b>Erhöht moderat</b> die Sturm-Geschwindigkeit für den jeweils darauffolgenden Sturm.</li>","name":"Verfaulte Ratte ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"Gewöhnliches Meeressalz, das vorübergehend durch die Geisterwelt bewegt wurde, wodurch es seine Eigenschaften verändert hatte.<br><br><li><b>Erhöht moderat</b> die Wenderate beim Stürmen.</li>","name":"Umbrasalz ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"Eine Mischung aus getrockneten Rosen vom außerordentlich seltenen Neumondbouquet.<br><br><li><b>Verlängert deutlich</b> die Dauer der Ramme.</li>","name":"Rosentonikum ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"Ein für Menschen tödliches Serum. In jenen, die ... besonders sind, ruft es vorteilhafte Qualitäten hervor.<br><br><li>Beim Einleiten einer Ramme, enthüllt es die Auren der Überlebenden im Umkreis von <b>8 Metern</b> vom Ausgangspunkt der Kollision, und zwar für <b>3 Sekunden</b>.</li>","name":"Präparat Einundzwanzig ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"Eine tote Krähe, die auf groteske Weise durch ein Fäuleserum mutiert ist.<br><br><li><b>Erhöht deutlich</b> die Sturm-Geschwindigkeit für den jeweils darauffolgenden Sturm.</li> ","name":"Verfaulte Krähe ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"\\"Ein Hormon, das einem Subjekt gegen seinen Willen aus der Nebenniere entnommen wurde. Obwohl es für einen Energieschub sorgt, kann es beim Nutzer zu Ermüdung führen.<br><br><li><b>Verringert deutlich</b> die Wenderate beim Stürmen.</li><li><b>Erhöht deutlich</b> \\ndie Geschwindigkeit, mit der Zähler sich regenerieren.</li><li><b>Erhöht</b> die Anzahl verfügbarer Sturm-Zähler um <b>2.</b></li><li><b>Erhöht</b> den maximalen Blickwinkel beim Stürmen.</li><br><br><span class=\\"\\"FlavorText\\"\\">\\"\\"Bitte mach das nicht ...\\"\\"</span>\\"","name":"Adrenalinfläschchen ","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"Das Tagebuch eines Mannes, der behauptet, aus der Leere zurückgekehrt zu sein. Das Wissen, das darin aufgeschrieben ist, bietet praktischen Nutzen.<br><br><li>Du erhältst beim Stürmen den Statuseffekt <b>Unentdeckbar</b>.</li><br>","name":"Vigos Tagebuch ","flavor":"\\"In einer Wüste aus vergessenen Träumen und endloser Routine ist Gott derjenige, der den Ausweg kennt.\\" – Talbot Grimes","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"Talbot hatte diesen Stein verwendet, um etwas in die Wände der Opiumhöhle zu kratzen, das er für seine Forschung hielt.<br><br><li>Triffst du einen Überlebenden mit einem Tödlichen Sturm, wird der Entitus gerufen, damit er im Radius von <b>12 Metern</b> um deine Position für <b>6 Sekunden</b> Paletten blockiert.</li><br>","name":"Beschwörungsstein ","flavor":"\\"Der Tod ist erst der Anfang.\\"","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"Eine Chemikalie, die aus der Pinealdrüse eines kürzlich verstorbenen Überlebenden gepresst wurde.<br><br><li>Während eines Sturms wird in dem Moment, in dem du einen Umkreis von <b>16 Metern</b> um einen Überlebenden betrittst, der repariert oder heilt, ein <b>enorm</b> schwieriger Fähigkeitscheck für diesen Überlebenden ausgelöst. Kann einmal pro Überlebenden und pro Sturm aktiviert werden. Wird nicht bei einem Sturm ausgelöst, der innerhalb eines Umkreises von <b>16 Metern</b> um den Überlebenden beginnt.</li><br>","name":"Seelenchemikalie ","flavor":"\\"... steht unter Verdacht, atypische Veränderungen in der Aktivität der neuralen Rhythmik zu verursachen.\\" – Nicht näher benannter Text der Geheimschule","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"Ein Ring, wie er Chemikern beim Abschluss an der London School of Medicine überreicht wird. Er ist eine Erinnerung daran, niemals nachzulassen.<br><br><li><b>Einen Überlebenden mit einem “Tödlichen Sturm” zu treffen, lädt sofort alle Sturm-Zähler auf.</li><br>","name":"Alchemistenring ","flavor":"\\"Der Student wird der Grabräuberei und der Absicht nicht genehmigter wissenschaftlicher Tests bezichtigt.\\" – Tadel der Fakultät an Talbot Grimes, 1838","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"Ein glasartiges Labor-Etikett, das aus dem Nebel selbst erschaffen wurde. Entweder ein Geschenk vom Entitus oder ein grausamer Scherz, um die Fäule zu markieren, wie sie es einst mit anderen getan hat.<br><br><li>Sobald du alle Sturm-Zähler verbraucht hast, bewirkt dein letzter Tödlicher Sturm bei Überlebenden den Todesstatus.</li><br>","name":"Schillerndes Fäule-Etikett","flavor":"\\"Fortschritt erfordert drastische Veränderungen.\\" – Talbot Grimes","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"Talbots ultimativer Versuch eines Serums. Es ermöglichte zwar nicht seine Flucht, verursachte aber starke Nebenwirkungen.<br><br><li>Jeder Überlebende im Umkreis von<b>16 Metern</b> einer Ramme, erleidet den <b>Eingeschränkt</b>-Statuseffekt für <b>3 Sekunden</b>.</li><li>Zuschlagende Paletten und zerstörbare Wände werden sie vernichten und die Fäule für <b>1.5 Sekunden</b> betäuben.</li><br>","name":"Präparat Dreiunddreißig ","flavor":"\\"Die Zeit wird knapp. Hoffentlich ist es das jetzt ...\\" – Talbot Grimes","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"Ein winziges Spielzeugschwert, nur wenige Zentimeter lang. Victor brach in eine wilde Begeisterung aus, wenn er es in der Hand hielt.<br><br><li><b>Verkürzt leicht</b> die Dauer für das Aufladen eines Sprungs.</li>","name":"Spielzeugschwert","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"Charlotte beklagte Victors Tod auf viele Arten. Als die Fingernägel sich von seinen verwesenden Händen lösten, behielt sie einen als Erinnerung.<br><br><li><b>Verkürzt moderat</b> die Zeit, die es braucht, um Victor von Charlotte zu lösen.</li>","name":"Kleiner Fingernagel","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"Eine Metallflasche, die mit sauer gewordener Milch gefüllt ist. So laut Victor auch sein konnte, er wurde immer ganz ruhig, wenn man ihm seine Mahlzeit gab.<br><br><li><b>Vergrößert leicht</b> den Radius, in dem Victors Schreie zu hören sind.</li>","name":"Saure Milch","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"Eine Holzfigur, die der junge Victor entdeckt hatte. Er kreischte, bis seine Mutter sie auf dem Markt für ihn stahl und damit fast ihre Deckung auffliegen ließ.<br><br><li>Zeigt die Zielposition eines Sprungs.</li>","name":"Katzenfigur","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"Ein Handschuh, der einmal der Mutter der Zwillinge gehört hat. Manchmal wurde er aus lauter Verzweiflung vor Victors Mund gehalten, damit er keinen Mucks von sich gab.<br><br><li><b>Vergrößert moderat</b> den Radius, in dem Victors Schreie zu hören sind.</li>","name":"Madeleines Handschuh","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"Der Kerzenständer, den Victor umgestoßen hatte, was zur Folge hatte, dass seine Kidnapper verbrannten. Ein Symbol seiner Hartnäckigkeit.<br><br><li><b>Verlängert leicht</b> die Zeit, die ein Überlebender braucht, um Victor zu erschlagen.</li>","name":"Zeremonieller Kerzenständer","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"Ein Augapfel, der einmal einer Katze gehört hatte, die von der hungernden Deshayes-Familie gegessen wurde. Victor hatte das Auge vor seiner Mutter versteckt und benutzte es als Spielzeug.<br><br><li>Victors Schreie hören auf, wenn „Sprung“ vollständig aufgeladen ist.</li>","name":"Katzenauge","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"Eine Kapuze von einem der Männer die Charlotte gejagt hatten. Schon bald war er zum Gejagten geworden.<br><br><li><b>Verkürzt leicht</b> die Zeit, die es braucht, um Charlotte aus ihrem Schlafzustand zu wecken.</li>","name":"Blutige schwarze Kapuze","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"Zwei Zähne, die Victor schon vor langer Zeit verloren hatte. Sie sind ungewöhnlich scharf.<br><br><li>Überlebende, die Victor entfernen, erleiden für <b>15 Sekunden</b> den Statuseffekt <b>„Erblindung“</b>.</li>","name":"Milchzähne","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"Eine minderwertig hergestellte Rassel, wegen der Victor weinte, bis seine Mutter sie für ihn stahl. Für Kinderhände ist sie allerdings viel zu schwer.<br><br><li>Überlebende, die Victor entfernen, erleiden <b>20</b> Sekunden lang den Statuseffekt <b>Gebrochen</b>.</li> ","name":"Schwere Rassel","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"Ein harter, ungesäuerter Keks, den Madeleine auf einem Markt in der Stadt gestohlen hat. Es war nicht viel, aber immerhin besser als die meisten Mahlzeiten.<br><br><li><b>Verkürzt leicht</b> die Abklingzeit von „Sprung“.</li>","name":"Verdorbener Keks","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"Eine ekelhafte, klebrige Mischung, die bei einem Fluchtversuch durch die Kanalisation der Stadt an den Deshayes haften geblieben ist.<br><br><li><b>Verlängert leicht</b> die Zeit, die ein Überlebender braucht, um Victor zu entfernen.</li>","name":"Kanalschlamm","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"Rostige Nadel","name":"Rostige Nadel","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"Ein Kleidungsstück, das Madeleine kurz vor ihrem Tod getragen hat. Die Zwillinge haben es als Erinnerungsstück behalten.<br><br><li><b>Erhöht leicht</b> Victors Geschwindigkeit.</li><br>","name":"Madeleines Schal","flavor":"\\"... soll hiermit als Dienst am Allgemeinwohl und an der Auslöschung alles Bösen vermerkt werden.\\" – Untersuchung zum Tod von Madeleine Deshayes","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"Ein Spielzeugsoldat, an den Victor sich klammerte, wenn er Angst hatte. Irgendetwas daran rief in Charlotte immer Eifersucht hervor.<br><br><li>Wird Victor von einem Überlebenden erschlagen, während er untätig ist, ist dessen Aura für <b>6 Sekunden</b> zu sehen.</li><br>","name":"Victors Soldat","flavor":"\\"Ksch ... Ksch ... böhse Mänschen ...\\" – Victor Deshayes","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"Ein Holzkreisel, den die Zwillinge sich teilten, obwohl Victor ihn für sich alleine haben wollte. Er hatte gelernt, dass er bekommen konnte, was er wollte, wenn er nur ordentlich klammerte und schrie.<br><br><li>Wenn Victor sie anspringt, lassen Überlebende alle Gegenstände fallen.</li><br>","name":"Kreisel","flavor":"\\"Pst ... Pst ... Dann ist es halt deiner.\\" – Charlotte Deshayes","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"Ein Eintopf aus gehamstertem Gemüse. Moos und Rinde sollen als Zutat für ein Völlegefühl sorgen.<br><br><li><b>Erhöht moderat</b> Victors Geschwindigkeit.</li><br>","name":"Waldeintopf","flavor":"\\"Iss, Kind ... Iss. Sobald es im Bauch ist, wird es dir besser gehen.\\" – Madeleine Deshayes","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"Einer der wenigen Luxusartikel, die Madeleine aus ihrem vorigen Leben mitgenommen hat. Es hat einen angenehmen, entwaffnenden Duft.<br><br><li>Überlebende im Radius von Victors Schreien erleiden den Statuseffekt <b>Ahnungslos</b>.</li><br>","name":"Parfümtropfen","flavor":"\\"Hüte dich vor den Täuschungen der Hexen, denn sie nutzen das Gute im Herzen der Menschen aus.\\" – Die Geschichte der Hexen und Dämonen (1602)","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"Ein rauer Streifen Stoff, der der fünf Jahre alten Charlotte in den Mund gesteckt wurde, um sie vom Schreien abzuhalten, wenn die Hexenjäger in der Nähe waren.<br><br><li>Charlotte erhält für <b>20 Sekunden</b> den Statuseffekt <b>Unentdeckbar</b>, nachdem sie aus ihrem Zustand der Untätigkeit erwacht ist.</li><br>","name":"Stoffknebel","flavor":"„Ich mag das Spiel nicht mehr, Mutter ...“ – Charlotte Deshayes","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"Ein glasartiger Anhänger, der aus dem Nebel selbst geformt wurde. Darauf ist ein Porträt von Madeleine Deshayes zu sehen, doch irgendetwas an ihrer Darstellung wirkt beunruhigend.<br><br><li>Wird Victor, während er untätig ist, von einem Überlebenden erschlagen, erleidet dieser für <b>30 Sekunden</b> den Statuseffekt <b>Gefährdet</b>.</li><br>","name":"Schillernder Anhänger","flavor":"„Eure Verbindung ist kein Fluch, meine Lieben. Ihr könnt daraus Kraft beziehen.“ – Madeleine Deshayes","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"Ein Beutel mit mehreren versteckten Taschen. Wird von aufstrebenden Zauberern und all jenen verwendet, die etwas zu verbergen haben.<br><li><b>Erhöht</b> die Maximalmenge für Klingen um <b>10</b>.</li><li>Du beginnst die Prüfung mit <b>10</b> zusätzlichen Klingen.</li>","name":"Trickbeutel","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"Blutverkrustete Messer, von übermäßigem Gebrauch abgenutzt. Da sie bei Ji-Woons ersten Morden eingesetzt wurden, nehmen sie einen wichtigen Platz in seinem Herzen ein.<br><li>Erhalte <b>100 %</b> Bonus-Blutpunkte für <b>Publikumshit</b>-Punktereignisse.</li><li><b>Erhöht moderat</b> die Schnittwunden-Anzeige jedes Überlebenden.</li>","name":"Andenkenklingen","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"Ein Satz Akkorde, für die Ji-Woon nie ein Lied gefunden hat. Aber sie sind zweifellos eingängig.<br><li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit beim Werfen von Klingen.</li>","name":"Mordpartieakkorde","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"Verschmorte Kabel vom Studiobrand, bei dem vier der fünf Mitglieder von NO SPIN umkamen. Ihr Sterben ließ den Trickster entstehen.<br><li><b>Verlängert leicht</b> die Dauer des Hauptevents.</li>","name":"Infernokabel","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"Ein Drink, der in einer bescheidenen Bar in Changwon erfunden wurde. Zählt zu Ji-Woons Lieblingsgetränken.<br><li><b>Verlängert moderat</b> die Dauer des Hauptevents.</li>","name":"Tequila Moonrock","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"Eine unbekannte Single, die Ji-Woon vor seinem Aufstieg zum Star aufgenommen hat. Nur die größten Fans von NO SPIN haben dieses verborgene Juwel gesammelt.<br><li><b>Verlängert leicht</b> die Zeit, bevor die Schnittwunden-Anzeige abnimmt.</li>","name":"„On Target“-Single","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"Das erste Wurfmesser, das Ji-Woon je besaß. Sein Vater hat es ihm gekauft, damit er den Gästen im Familienrestaurant eine Show bieten konnte.<br><li><b>Verlängert leicht</b> die Abklingdauer der Schnittwunden-Anzeige jedes Überlebenden, wenn keine Klingen übrig sind.</li>","name":"Glücksklinge","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"Eine Unterschrift des Promis, der als Trickster bekannt ist. Auch wenn sein Handgelenk nach Hunderten von diesen schmerzte, war es motivierend zu wissen, dass er so beliebt war.<br><li><b>Erhöht leicht</b> die anfängliche Wurfrate von Klingen.</li>","name":"Ji-Woons Autogramm","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"Die Schuhe, die Ji-Woon im Musikvideo für „One Caged Heart“ trägt. Erlauben glatte, anmutige Tanzbewegungen.<br><li><b>Erhöhen moderat</b> die Bewegungsgeschwindigkeit beim Werfen von Klingen.</li>","name":"„One Caged Heart“-Schuhe","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"Eine Taschenuhr, die Ji-Woon während eines Live-Auftritts von „I’ll Be Waiting for You“ bei sich hatte. Es ist eine Requisite, die nie funktionieren wird.<br><li><b>Verlängert deutlich</b> die Abklingdauer der Schnittwunden-Anzeige jedes Überlebenden, wenn keine Klingen übrig sind.</li>","name":"„Waiting for You“-Uhr","flavor":"„Don’t run away<br>Don’t say we’re through<br>No way to escape this<br>I’ll be waiting for you.“<br>– „I’ll Be Waiting for You“ von NO SPIN","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"Ein Handgelenkschoner, den Ji-Woon beim Dreh des Musikvideos zu „Ripper“ trug. Unbeabsichtigt stabilisiert dieser Entwurf das Handgelenk besser als jedes medizinische Produkt.<br><li><b>Verlängert moderat</b> die Zeit, bevor die Schnittwunden-Anzeige abnimmt.</li>","name":"Ripper-Schoner","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"Eine Tonaufnahme der knappen, klaren Schreie der Opfer. Ji-Woon nahm die Geräusche in eines seiner bekannteren Lieder auf.<br><li><b>Verringert moderat</b> die Schnittwunden-Anzeige jedes Überlebenden.</li>","name":"Melodischer Mord","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"Eine limitierte Limodose als Werbung für NO SPIN. Hoher Zucker- und Koffeingehalt.<br><li><b>Erhöht moderat</b> die anfängliche Wurfrate.</li>","name":"Sprudel-Spin-Limo","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"Eine Boa, die Ji-Woon um den aufgeschlitzten Hals eines Opfers gelegt hat. Einige Taschen sind darin verborgen.<br><li><b>Erhöht</b> die Maximalmenge für Klingen um <b>15</b>.</li><li>Du beginnst die Prüfung mit <b>15</b> zusätzlichen Klingen.</li>","name":"Blutige Boa","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"Spezialklingen, die nur von jenen als fehlerhaft angesehen werden, denen es an Vorstellungskraft mangelt. Der junge Ji-Woon verzauberte Zuschauer mit seinen Tricks.<br><li>Klingen prallen zweimal von der Umgebung ab. </li><li>Treffer mit abgeprallten Klingen gewähren Bonus-Blutpunkte.</li>","name":"Trickklingen","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"Das erste Album des Tricksters. Die rauen und boshaften Klänge wurden von Fans unterschiedlich aufgenommen, von den Kritikern aber gelobt.<br><li>Klingen zersplittern, wenn sie die Umgebung treffen, und fügen nahen Überlebenden dabei <b>50 % Schnittwunden</b> zu.</li>","name":"„Edge of Revival“-Album","flavor":"„Your whisper on me<br>Warm as can be<br>Burning each breath<br>Till I can’t breathe.“<br>– „Whispers of Warmth“ von Trickster","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"Manschettenknöpfe, die in die Augen eines obsessiven Fans gedrückt wurden, der den Fehler gemacht hatte, Ji-Woon zu verfolgen. Wenn man das Blut abwischt, kann man so viel in den glitzernden Stücken erkennen.<br><li>Wenn die Schnittwunden-Anzeige eines Überlebenden einen Klingentreffer vom Maximum entfernt ist, wird seine Aura für <b>6 Sekunden</b> angezeigt.</li>","name":"Diamantmanschettenknöpfe","flavor":"„Schhh ... Du musst dein Blut nicht mehr sehen.“ – Ji-Woon Hak","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"Die erste von NO SPIN veröffentlichte Single nach Ji-Woons Beitritt zur Band. Ein immenser Erfolg in den koreanischen Charts.<br><li>Klingen durchbohren Überlebende.</li><li>Überlebende, die von derselben Klinge getroffen werden, erleiden <b>50 % Schnittwunden</b>.</li>","name":"„Cut Thru U“-Single","flavor":"„Can’t stop this love<br>That’s tearing your heart<br>Wherever you go<br>I will cut you apart.“<br>– „Cut Thru U“ von NO SPIN","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"Ein glasähnliches Foto, das aus dem Nebel selbst erschaffen wurde. Ji-Woons Augen glitzern holografisch in seinem grinsenden Gesicht.<br><li>Wenn die Schnittwunden-Anzeige eines Überlebenden einen Klingentreffer vom Maximum entfernt ist, erhält dieser den Statuseffekt <b>Gefährdet</b>.</li>","name":"Schillernde Fotokarte","flavor":"„Schon okay, schrei meinen Namen. Lass mich alles hören, was der Schmerz in dir weckt ...“ – Ji-Woon Hak","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"Eine Sammlung der letzten Laute von Ji-Woons Opfern, die auf einer Schallplatte festgehalten wurden. Erschreckend und grob.<br><li>Die Schnittwunden, die Klingen verursachen, hängen von der Nähe des Ziels ab, liegen aber bei mindestens <b>50 %</b>.</li><li>Jeder Treffer mit einer Klinge erhöht die von Klingen verursachten Schnittwunden bis zu einem Maximalwert von <b>200 %</b>.</li><li>Wenn eine Klinge nicht trifft, werden die von Klingen verursachten Schnittwunden auf den Anfangswert zurückgesetzt.</li>","name":"Todesschmerzen-Compilation","flavor":"„Bitte nicht ... mach, dass es nicht wehtut ... Ich kann nicht ... Ich ...“ – Nicht identifizierbare Stimme","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"Ein elektronisches Umbrella-Armband für Gäste der Einrichtung. Wird auch als Tracking-Gerät verwendet.<li><b>Erhöht moderat</b> die Wahrnehmungsreichweite von Zombies.</li>","name":"Gästearmband","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"Ein Handbuch mit dem gesammelten S.T.A.R.S.-Wissen zum Nahkampf. Von Chris Redfield überarbeitet.<li>Die Auren von Zombies werden <b>6 Sekunden</b> lang gelb, nachdem sie einen Überlebenden getroffen haben.</li>","name":"S.T.A.R.S.-Feldhandbuch","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"Medizinische Ausrüstung, der es während des Chaos, das über Raccoon City hereingebrochen ist, schlecht ergangen ist.<li><b>Erhöht moderat</b> die Zeit, die Überlebende brauchen, um den Impfstoff zu injizieren.</li><li><b>Erhöht leicht</b> die Dauer des Killerinstinkt-Effekts, wenn Überlebende den Impfstoff benutzen.</li>","name":"Kaputte Spritze","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"Der Dünndarm von Brian Irons, dem Chef des RPD. Ein appetitlicher Anblick für Zombies.<li><b>Erhöht leicht</b> die Bewegungsgeschwindigkeit von Zombies.</li>","name":"Brians Darm","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"Das Herz eines ausgeweideten Zombies. Es wird als gefährlicher Abfall eingestuft, da es definitiv voller Viren ist.<li><b>Erhöht moderat</b> die Mutationsrate, wenn Zombies mit Tentakelschlag zerstört werden.</li><br>","name":"Zombieherz","flavor":"„Worte helfen dir bei diesem Ding nicht.“ – Leon S. Kennedy","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"Wenig war von Mikhail übrig, aber sein linker Augapfel hat die Explosion, die ihn tötete, überlebt. Er ist ein Leckerbissen für Zombies.<li><b>Erhöht moderat</b> die Bewegungsgeschwindigkeit von Zombies.</li>","name":"Mikhails Auge","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"Das kontaminierte Blut eines Polizeibeamten von Raccoon City.<li><b>Erhöht moderat</b> die Mutationsrate, wenn Überlebende mit Tentakelschlag getroffen werden.</li><br>","name":"Marvins Blut","flavor":"„Du musst nur wissen, dass dieser Ort dein Verderben sein wird, wenn du nicht vorsichtig bist.“ – Marvin Branagh","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"Ein Hormon, das die Sinne verstärkt und den Körper auf den Kampf vorbereitet.<li><b>Erhöht deutlich</b> die Dauer des Killerinstinkt-Effekts, wenn Überlebende Impfstoff verwenden.</li>","name":"Adrenalin-Injektion","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"Ein elektronisches Umbrella-Armband für Verwalter der Einrichtung. Es erlaubt Zugang zu gesicherten Zonen, wird aber auch als Tracking-Gerät verwendet.<li><b>Erhöht deutlich</b> die Wahrnehmungsreichweite von Zombies.</li>","name":"Verwalterarmband","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"Eine beschädigte Probe eines T-002-Tyrant, der im Kampf gestorben ist. Es gibt Anzeichen schwerer Verbrennungen.<li><b>Erhöht moderat</b> die Mutationsrate, wenn Zombies mit Tentakelschlag zerstört werden.<li>Verkürzt moderat die Dauer bis zum erneuten Erscheinen von Zombies.","name":"Tyrant-Überreste","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"Eine Probe des T-Virus, das von der Umbrella Corporation entwickelt wird. Verursacht extreme Mutationen und Hirnschäden bei den Versuchspersonen.<li><b>Erhöht deutlich</b> die Mutationsrate, wenn Zombies mit Tentakelschlag zerstört werden. ","name":"T-Virus-Probe","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"Ein Hormon, das den Anwender leicht beruhigt, wenn Tarnung nötig ist.<li>Du erhältst den Statuseffekt <b>Unentdeckbar</b> für <b>15 Sekunden</b>, wenn ein Zombie zerstört wurde.</li>","name":"Serotonin-Injektion","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"Die verschlungenen Überreste einer mit dem T-Virus infizierten Pflanze, die einen der Wissenschaftler, die sie entwickelt haben, getötet hat.<li><b>Erhöht deutlich</b> die Zeit, die Überlebende zum Öffnen von Vorratskoffern brauchen.","name":"Ranken von Gewächs 43 ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"Eine klebrige Greifzunge, die sich um alles wickelt, was sie berührt.<li><b>Erhöht moderat</b> die Dauer, für die Überlebende nach der Kontamination <b>eingeschränkt</b> sind.</li><br>","name":"Licker-Zunge","flavor":"„Es ist wie ... ein Albtraum.“ – Claire Redfield","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"Ein Parasit, der bei der Entwicklung von Nemesis-T-Typen verwendet wurde. Er kann die Kontrolle über das Gehirn seines Wirts übernehmen.<li>Wenn Überlebende kontaminiert werden, erleiden sie den Statuseffekt <b>Ahnungslos</b> für 60 Sekunden.","name":"Ne-α-Parasit","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"Es ist komplett zerquetscht und voller Blut aus einem vergangenen Kampf. Aber es verströmt ein leckeres Aroma, das man nicht ignorieren kann.<li>Enthüllt die Aura eines Überlebenden für <b>12 Sekunden</b>, nachdem dieser einen Vorratskoffer aufgeschlossen hat.</li>","name":"Jills Sandwich","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"Wer wird sie jetzt retten? Aus irgendeinem Grund verleiht dieses ausgetrocknete Farbband den Zombies Energie.<li><b>Verkürzt deutlich</b> die Zeit bis zum erneuten Erscheinen der Zombies.</li><li>Erhöht moderat die Bewegungsgeschwindigkeit der Zombies.</li><li>Nachdem <b>5</b> Generatoren repariert wurden, erscheinen alle zerstörten Zombies in einem Ausgangsbereich wieder.</li><br>","name":"Leeres Farbband","flavor":"„Hör zu, nur damit du es weißt: Das ist das letzte verdammte Mal.“ – Jill Valentine","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"Eine Münze, die einen Vogel mit einem Lorbeerkranz zeigt. Sie ist in der Mitte zerbrochen.<li>Entfernt <b>1</b> Vorratskoffer aus der Prüfung.</li><br>","name":"Zerbrochene Erholungs-Münze","flavor":"„So habe ich mir meinen ersten Tag nicht vorgestellt.“ – Leon S. Kennedy","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"Ein Symbol der Hoffnung für Raccoon City, komplett zerstört.<li><b>Erhöht enorm</b> die Bewegungsgeschwindigkeit von Zombies für <b>30 Sekunden</b>, nachdem ein Generator repariert wurde.</li><br>","name":"Zerbrochenes S.T.A.R.S.-Abzeichen","flavor":"„S.T.A.R.S.“ – Nemesis","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"Ein glasähnliches Abzeichen, das aus dem Nebel selbst gefertigt wurde. Es steht für ein Unternehmen, das ethische und menschliche Grenzen der Wissenschaft weit überschritten hat.<li>Überlebende erleiden den Statuseffekt <b>Gefährdet</b> für <b>12 Sekunden</b>, wenn sie einen Impfstoff verwenden.</li><br>","name":"Schillerndes Umbrella-Logo","flavor":"„Verbindlichkeit, Ehrlichkeit, Integrität. Das sind die Grundwerte, die das Fundament von Umbrella Corp. bilden.“ – Dr. Matt Gorkis","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/de/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Gewährt <b>50%</b> Bonus-Blutpunkte in der Brutalitätskategorie.<br><li>Effekt summiert sich.</li>","name":"Tangarkranz","flavor":"\\"Gefertigt aus blutigen Stöcken und Gedärmen, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.\\"","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"Gewährt <b>75 %</b> Bonus-Blutpunkte in der Kategorie „Brutalität“.<br><li>Kombinierbar.</li>","name":"Inbrünstiger Tangarkranz","flavor":"„Inbrünstig hergestellt aus blutigen Stöcken und Gedärmen, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.“","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in der Kategorie „Brutalität“.<br><li>Kombinierbar.</li>","name":"Inbrünstiger Tangarkranz","flavor":"„Mit feuriger, unsterblicher Leidenschaft aus blutigen Stöcken und Gedärmen hergestellt, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.“","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"Gewährt <b>50%</b> Bonus-Blutpunkte in der Hinterhältigkeitskategorie.<br><li>Effekt summiert sich.</li>","name":"Rabenkranz","flavor":"\\"Hergestellt aus geschwärzten Zweigen und Kohlen, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.\\"","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"Gewährt <b>75 %</b> Bonus-Blutpunkte in der Kategorie „Hinterhältigkeit“.<br><li>Kombinierbar.</li>","name":"Inbrünstiger Rabenkranz","flavor":"„Inbrünstig hergestellt aus geschwärzten Zweigen und Kohlen, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.“","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in der Kategorie „Hinterhältigkeit“.<br><li>Kombinierbar.</li>","name":"Inbrünstiger Rabenkranz","flavor":"„Mit feuriger, unsterblicher Leidenschaft aus geschwärzten Zweigen und Kohlen hergestellt, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.“","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"Gewährt <b>50 %</b> Bonus-Blutpunkte in der Kategorie „Jäger“.<br><li>Kombinierbar.</li>","name":"Fleckenkauzkranz","flavor":"„Hergestellt aus scharfkantigen Metallen, Seilen und Federn, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.“","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"Gewährt <b>75%</b> Bonus-Blutpunkte in der Verfolgungskategorie.<br><li>Effekt summiert sich.</li>","name":"Inbrünstiger Fleckenkauzkranz","flavor":"\\"Andächtig hergestellt aus scharfkantigen Metallen, Seilen und Federn, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.\\"","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in der Kategorie „Jäger“.<br><li>Kombinierbar.</li>","name":"Inbrünstiger Fleckenkauzkranz","flavor":"„Mit feuriger, unsterblicher Leidenschaft aus scharfkantigen Metallen, Seilen und Federn hergestellt, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.“","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"Gewährt <b>50 %</b> Bonus-Blutpunkte in der Kategorie „Opfer“.<br><li>Kombinierbar.</li>","name":"Würgerkranz","flavor":"„Hergestellt aus Stöcken, Schnüren und Knochen, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.“","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"Gewährt <b>75%</b> Bonus-Blutpunkte in der Opferkategorie.<br><li>Effekt summiert sich.</li>","name":"Inbrünstiger Würgerkranz","flavor":"\\"Andächtig hergestellt aus Stöcken, Schnüren und Knochen, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.\\"","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in der Kategorie „Opfer“.<br><li>Kombinierbar.</li>","name":"Inbrünstiger Würgerkranz","flavor":"„Mit feuriger, unsterblicher Leidenschaft aus Stöcken, Schnüren und Knochen hergestellt, ruft dieser Kranz nach dem Segen des Entitus für mehr Blut.“","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"Gewährt <b>25 %</b> Bonus-Blutpunkte in allen Kategorien.<br><li>Kombinierbar.</li>","name":"Leere Hülle","flavor":"„Ein unidentifizierbarer Kokon, der von dem Wesen, das in ihm schlummerte, geöffnet wurde.“","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"Gewährt <b>100 %</b> zusätzliche Blutpunkte in allen Kategorien.<br><li>Betrifft nur den Besitzer.</li><li>Stapelbar.</li>","name":"Pudding des Überlebenden","flavor":"\\"Ein ziemlich versalzener Pudding ...\\"","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"Bittet den Entitus darum, das Erscheinen von <b>2</b> Truhen zu verhindern.<br><li>Kombinierbar.</li>","name":"Halbierte Münze","flavor":"„Zwei Hälften einer dicken, metallischen Münze.“","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"Fordert den Entitus auf, das Erscheinen <b>1</b> Kiste zu verhindern.<br><li>Effekt summiert sich.</li>","name":"Zerkratzte Münze","flavor":"\\"Eine unkenntliche Münze unbekannter Herkunft.\\"","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"Bittet den Entitus darum, die <b>Entfernung</b> zwischen Opferhaken in der Welt <b>leicht zu verringern</b>.<br><li>Kombinierbar.</li>","name":"Modriges Eichenholz","flavor":"„Ein feuchtes und zerfallendes Stück Eichenholz voller Schimmel.“","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"Bittet den Entitus darum, die <b>Entfernung</b> zwischen Opferhaken in der Welt <b>moderat zu verringern</b>.<br><li>Kombinierbar.</li>","name":"Morsches Eichenholz","flavor":"„Ein verfaulendes Stück Eichenholz, in das seltsame Markierungen geritzt sind.“","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"Bittet den Entitus darum, die <b>Entfernung</b> zwischen Opferhaken in der Welt <b>deutlich zu verringern</b>.<br><li>Kombinierbar.</li>","name":"Fauliges Eichenholz","flavor":"„Ein zerstörtes Stück Eichenholz, das schwarze, faulende Flüssigkeit absondert.“","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"Gewährt die Fähigkeit, mit eigener Hand <b>den letzten Überlebenden zu töten</b> bei der nächsten Runde.<br><li>Geheim.</li>","name":"Memento Mori aus Zypressenholz","flavor":"\\"Du hast gut gearbeitet, der Letzte gehört dir.\\"","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"Gewährt bei der nächsten Prüfung die Fähigkeit, einen Überlebenden, <b>der den zweiten Haken-Zustand erreicht hat</b>, <b>eigenhändig zu töten</b>.<li>Geheim.</li>","name":"Memento Mori aus Elfenbein","flavor":"\\"Gönne mir die Freude, einen umzubringen.\\"","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"Gewährt bei der nächsten Prüfung die Fähigkeit, alle Überlebenden, <b>die den zweiten Haken-Zustand erreicht haben</b>, <b>eigenhändig zu töten</b>.<li>Geheim.</li>","name":"Memento Mori aus Ebenholz","flavor":"\\"Ich könnte schwören, dass es mit der Bestie gesprochen hat. Es hielt inne, als wenn es in Ruhe den rauschenden Blättern lauschte und ... grinste dann.\\"","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"Alle Überlebenden beginnen die Runde einzeln.<br><li>Geheim</li>","name":"Tuch der Trennung","flavor":"\\"Ein dünnes, schwarzes Totenhemd, das auseinanderfällt.\\"","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/de/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Jedes Mal, wenn ein Generator vollständig repariert wurde, werden Überlebende in einem Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> vom reparierten Generator <span class=\\"Highlight2\\">{1} Sekunden</span> lang angezeigt.<br>Wurde der letzte Generator vollständig repariert, werden die Auren aller Überlebenden <span class=\\"Highlight3\\">{2} Sekunden</span> lang angezeigt.","name":"Verbittertes Gemurmel","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Zeigt die Auren von sterbenden Überlebenden an, wenn du im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> stehst.","name":"Pirscher","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"Deine furchteinflößende Erscheinung zeigt auf übernatürlich große Distanz Wirkung. Dein Terrorradius ist um <span class=\\"Highlight1\\">{0} %</span> vergrößert. Verdiene <span class=\\"Highlight2\\">{1} %</span> mehr Blutpunkte für Handlungen in der Hinterhältigkeitskategorie.","name":"Verstörend","flavor":"„Weide dich an ihrer Angst.“","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"Schaltet die Tarnfähigkeit frei.<br><br>Wenn du <span class=\\"Highlight1\\">{0} Sekunden</span> lang stillstehst, erhältst du den Statuseffekt <b>Unentdeckbar</b>, bis du dich wieder bewegst oder eine Aktion durchführst.","name":"Heimtückisch","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"Ein Fluch, der seine Kraft aus Hoffnung zieht. Du wirst von der Macht deines verfluchten Totems getrieben, wenn die Überlebenden kurz davor sind zu flüchten.<br>Sobald die Ausgangstore mit Energie versorgt sind, wird dieser Fluch auf ein glanzloses Totem angewendet, wenn auf der Karte noch eines existiert.</br><br>Solange der Fluch aktiv ist, <li>leiden Überlebende am Statuseffekt <b><i>Gefährdet</i></b>.</li><li>Deine Bewegungsgeschwindigkeit erhöht sich um <span class=\\"Highlight1\\">{0}%</span>.</li><br>Die Flucheffekte bleiben bestehen, solange das entsprechende Fluchtotem existiert.<br>","name":"Fluch: Niemand entrinnt dem Tod","flavor":"„Und die Bestie wurde schneller und kräftiger, als prasselten die schattenhaften Peitschen des Entitus auf ihren Rücken nieder.“","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"Ein Fluch, der seine Kraft aus Hoffnung zieht. Die falsche Hoffnung der Überlebenden erfüllt dich mit Erregung und stärkt deine Totems. Du erhältst für jedes auf der Karte verbleibende glanzlose und Fluchtotem einen Zähler.<br><li>Du erhältst pro Zähler <span class=\\"Highlight1\\">{0} %</span> mehr Blutpunkte für Aktionen in der Kategorie „Jäger“.</li><li>Die Zerstörungsgeschwindigkeit der Überlebenden wird pro Zähler um <span class=\\"Highlight2\\">{1} %</span> verringert.</li><li>Du wirst benachrichtigt, wenn jemand mit der Arbeit an einem Fluchtotem beginnt.</li><br><i>Die Flucheffekte dauern an, solange das entsprechende Fluchtotem besteht.</i>","name":"Fluch: Nervenkitzel der Jagd","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"Deine eifrige Pflege der Haken, die du im Keller gefunden hast, haben das Interesse des Entitus geweckt. Die Kellerhaken gewähren folgende Boni:<br><li><span class=\\"Highlight1\\">{0} %</span> schnellerer Entitus-Fortschritt.</li><li><span class=\\"Highlight2\\">{1} %</span> erhöhte Schwierigkeit für Fluchtversuche.</li><li><span class=\\"Highlight3\\">{2} %</span> erhöhtes Strafmaß für misslungene Fluchtversuche.</li>","name":"Monströser Schrein","flavor":"\\"Schließlich wirst du wissen, dass es kein Entkommen gibt. In den Tiefen hängend, erblickst du den einen Dunklen.\\"","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"Du weißt, wo du hinschlagen musst, um sie bluten zu lassen. Bei erfolgreichen <i>Grundangriffen</i> zugefügte Wunden bewirken die Statuseffekte <b>Zerfleischt</b> und <b>Blutung</b>. <b>Blutung</b> erhöht <span class=\\"Highlight\\">{0}</span> die Blutungshäufigkeit des Überlebenden.<br>Der von <i>Schlampiger Schlachter</i> verursachte Effekt <b>Blutung</b> wird aufgehoben, sobald der Überlebende vollständig geheilt ist.","name":"Schlampiger Schlachter","flavor":"\\"Es liegt in seiner sadistischen Natur. Es gibt keine schnelle Tötung, da ihm das obszöne Spektakel unseres Leidens zu viel Vergnügen bereitet.\\"","tiers":[["leicht"],["moderat"],["deutlich"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"Die in der Welt gefundenen Krähen können direkt mit dir kommunizieren. <span class=\\"Highlight1\\">{0} %</span> der Zeit geben dir krächzende Krähen einen visuellen Hinweis, wenn du dich im Umkreis von <span class=\\"Highlight2\\">{1} Meter(n)</span> befindest.<br><i>Spione des Schattens</i> hat einen Cooldown von <span class=\\"Highlight3\\">{2} Sekunden.</span> ","name":"Spione des Schattens","flavor":"„In den Schatten quälen sie, unsere Gedanken mit jedem Schrei vernarbend.“","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"Du erholst dich schneller von misslungenen Angriffen mit deiner Hauptwaffe. Die Abklingzeit nach misslungenen <i>Grundangriffen</i> wird um <span class=\\"Highlight1\\">{0} %</span> verkürzt.","name":"Unerbittlich","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"Du hast ansatzweise eine Ahnung von der Stimme des Entitus. Höre vereinzelt das Flüstern des Entitus, wenn du im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> eines Überlebenden stehst.","name":"Geflüster","flavor":"\\"Es ist nicht ganz klar, aber es scheint, als suche der Nebel die Nähe der Bestie auf, wie zu seiner Motivation.\\" - Notizbuch","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"Du bist äußerst empfindsam gegenüber der Atmung deines Opfers. Die Atmung von schmerzerfüllten Überlebenden ist <span class=\\"Highlight1\\">{0}%</span> lauter und die normale Atmung ist <span class=\\"Highlight2\\">{1}%</span> lauter.","name":"Stridor","flavor":"“Wenn du nicht aufhörst und weiteratmest ... kommt sie.”","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"Ihr Mut verblasst im Angesicht ihrer unbestreitbaren Sterblichkeit.<br>Alle Überlebenden erhalten für jeden verletzten, sterbenden oder festgehakten Überlebenden eine Schwächung von <span class=\\"Highlight1\\">{0} %</span> auf ihre Aktionsgeschwindigkeit für Reparatur, Sabotage und Zerstörung von Totems (maximal <span class=\\"Highlight1\\">{1} %</span>).","name":"Thanatophobie","flavor":"\\"Sie spielt mit uns und weidet sich an unserem Schmerz.\\"","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"Schaltet Potential in der eigenen Aura-Lesefähigkeit frei. Die Auren von Überlebenden, die heilen oder geheilt werden, werden dir angezeigt, wenn sie sich in <span class=\\"Highlight1\\">{0} Metern</span> Umkreis befinden.","name":"Der Ruf einer Krankenschwester","flavor":"“Noch immer an die Fragmente ihres vergangenen Lebens geheftet, zieht es sie zu jenen, die Hilfe brauchen.”","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"Deine bloße Anwesenheit flößt bereits große Angst ein. Überlebende innerhalb deines Terrorradius haben eine um <span class=\\"Highlight1\\">{0} %</span> erhöhte Chance, beim Reparieren oder Heilen einen Fähigkeitscheck abzurufen. Die abgerufene Erfolgszone eines Fähigkeitschecks ist um <span class=\\"Highlight2\\">{1} %</span> verkleinert.","name":"Zermürbende Präsenz","flavor":"\\"Seine Anwesenheit bricht über uns herein.\\"","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"Deine große Stärke erlaubt dir, die Abwehr deiner Opfer zu durchbrechen. Zerstöre umgestoßene <b>Paletten, zerstörbare Wände und Generatoren</b> <span class=\\"Highlight1\\">{0} %</span> schneller.","name":"Brutale Stärke","flavor":"\\"Es ist mehr als bloße Muskelkraft. Eine dunkle Energie treibt die Bestie an.\\"","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"Du bist begeistert vor lauter Vorfreude auf das Festhaken deiner Beute. Erhöht deine Bewegungsgeschwindigkeit während des Tragens von Körpern, um <span class=\\"Highlight1\\">{0} %</span>. Während des Tragens eines Körpers, ist dein Terrorradius um <span class=\\"Highlight2\\">{1} Meter</span> vergrößert.","name":"Erregung","flavor":"\\"Manchmal ist die Begeisterung, einen von uns festzuhaken, bedeutsamer, als der Wunsch, uns zu töten.\\"","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"Deine scharfsinnige Beobachtungsgabe erlaubt es dir, den Spuren flüchtender Überlebender zu folgen.<br>Von Überlebenden hinterlassene Kratzspuren erscheinen <span class=\\"Highlight\\">{0}</span> näher beieinander.","name":"Räuber","flavor":"„Höre nicht auf, dich zu bewegen und hoffe, dass du der Bestie stets zwei Schritte voraus bist.“ - Notizbuch","tiers":[["leicht"],["moderat"],["deutlich"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"Wie ein jagender Laufhund, riechst du Blutspuren auf eine lange Distanz. Frische Blutspuren sind <span class=\\"Highlight1\\">deutlich</span> besser wahrnehmbar als normal und können <span class=\\"Highlight2\\">{0} Sekunden</span> länger als normal verfolgt werden.","name":"Bluthund","flavor":"\\"Kieselsteine schimmern im Mondlicht; mein Leben sickert wie Wasser in einer Rinne dahin, so einfach zu verfolgen.\\"","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"Du hast eine scharfe Sicht im Dunkel der Nacht. Dein Blickfeld ist <span class=\\"Highlight2\\">{0} Grad</span> größer als gewöhnlich.<br><i>Der Effekt summiert sich nicht mit anderen Blickfeld-Vergrößerungen.</i>","name":"Schattengeborener","flavor":"\\"Strahlend in der finstersten Dunkelheit, durchbohren seine Augen die Nacht und brennen sich in deine Seele.\\"","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"Du spürst keinen Schmerz. Du verkürzt die Dauer der <b>Betäubung durch Paletten</b> um <span class=\\"Highlight1\\">{0} %</span>.","name":"Beständig","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"Im Gegensatz zu anderen Ungeheuern des Nebels hast du dich an das Licht angepasst. Du bist immun gegen Erblindung, die durch Taschenlampen, Böller, Blendgranaten und Sprengfallen verursacht wird. Die Aura von Überlebenden, die versuchen, dich zu blenden, wird für <span class=\\"Highlight1\\">{0} Sekunden</span> angezeigt.","name":"Lichtgeborener","flavor":"„Diese Monster ... sie passen sich an! Sie bilden seltsame neue Fähigkeiten aus!“ – Vigos Tagebuch","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"Wenn ein Generator zu <span class=\\"Highlight1\\">{0} %</span> repariert ist, erhältst du eine Benachrichtigung über ein lautes Geräusch, und du erhältst den Statuseffekt <b>Unentdeckbar</b> für <span class=\\"Highlight2\\">{2} Sekunden</span>.","name":"Tüftler","flavor":"„Der Hinterwäldler stellt beeindruckende Werkzeuge aus Schrottteilen her. Werkzeuge, dafür bestimmt, uns auf vielerlei Art zu verstümmeln ...“ –Notizbuch","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"Ein Überlebender wird Ziel deiner <b>Besessenheit</b>.<br>Du verdienst einen Zähler für jeden erfolgreichen <i>Grundangriff</i>, der nicht das Ziel der Besessenheit trifft. <br>Jeder Zähler gewährt eine kombinierbare, um <span class=\\"Highlight1\\">{0} %</span> verringerte Abklingzeit bei erfolgreichen <i>Grundangriffen</i>. Du kannst bis zu <span class=\\"Highlight2\\">{1}</span> Zähler verdienen.<br>Wenn du aber dein Ziel der Besessenheit mit einem <i>Grundangriff</i> triffst, verlierst du <span class=\\"Highlight3\\">{2}</span> Zähler.<br>Wird dein Ziel der Besessenheit geopfert oder getötet, kannst du keine Zähler mehr verdienen.<br><li><i>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</i></li>","name":"Das Beste kommt zum Schluss","flavor":"\\"Der Tod ist in deine kleine Stadt gekommen, Sheriff.\\" –Dr. Sam Loomis","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"Ein Überlebender wird Ziel deiner <b>Besessenheit</b>.<br>Jedes Mal, wenn du das Ziel der Besessenheit jagst und es entkommen lässt, erhältst du einen Bonus bis hin zu maximal {0} Zählern.<br>Jeder Zähler verbessert deine Bewegungsgeschwindigkeit um <span class=\\"Highlight1\\">{1} %</span>.<br>Jeder <i>Grundangriff</i> oder <i>Spezialangriff</i> verbraucht einen Zähler.<br><li><i>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</i></li>","name":"Spiele mit deinem Essen","flavor":"„Du hast sie zum Narren gehalten, nicht wahr, Michael? Aber nicht mich.“ – Dr. Sam Loomis","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"Du bist von einem Überlebenden <b>besessen</b>.<br>Das Ziel der Besessenheit erhält einen Bonus auf die Aktionsgeschwindigkeit für das vom Haken retten und Heilen anderer Überlebender von <span class=\\"Highlight1\\">{0} %</span>.<br>Jedes Mal, wenn du einen anderen Überlebenden als das Ziel der Besessenheit an einem Haken aufhängst und das Ziel der Besessenheit noch lebt, erhältst du einen Zähler.<br>Lebt das Ziel der Besessenheit noch, erhält jeder andere Überlebende für jeden Zähler eine Strafe von <span class=\\"Highlight2\\">{1} %</span> auf die Reparatur-, Heilungs- und Sabotagegeschwindigkeiten.<br><li><i>Der Killer kann immer nur von je einem Überlebenden besessen sein.</i></li>","name":"Erlöschendes Licht","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"Ein Fluch, der die eigene Aurawahrnehmungsfähigkeit behindert. Wird ein Überlebender mit einem <i>Grundangriff</i> getroffen, während das Fluchtotem aktiv ist, setzt der Statuseffekt <b>Erblindung</b> ein. Dieser Effekt gilt für die <span class=\\"Highlight1\\">{0}</span> zuletzt getroffenen Überlebenden.<br><i>Die Flucheffekte dauern an, solange das entsprechende Fluchtotem besteht.</i>","name":"Fluch: Das dritte Siegel","flavor":"„Sie hat deine Haut berührt, du trägst das Zeichen der Hexe!“","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"Ein Fluch, der die Fähigkeiten der Überlebenden bei der Reparatur von Generatoren beeinflusst. Alle Generatoren sind vom <i>Fluch: Ruin</i> betroffen. Wird ein Generator nicht von einem Überlebenden repariert, beginnt sofort und automatisch ein Reparatur-Rückgang mit <span class=\\"Highlight1\\">{0} %</span> der normalen Rückgangsgeschwindigkeit.<br><br><i>Die Flucheffekte dauern an, solange das entsprechende Fluchtotem besteht.</i><br>","name":"Fluch: Ruin","flavor":"„Auf dir liegt ein Fluch, der dich ins Verderben stürzt.“","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"Ein Fluch, der seine Kraft aus Hoffnung zieht. Die falsche Hoffnung der Überlebenden entfacht deinen Hunger. Wenn ein Überlebender in mindestens <span class=\\"Highlight1\\">24 Metern</span> Entfernung von einem Haken gerettet wird, erhält „Aufgezehrte Hoffnung“ einen Zähler.<br><li><span class=\\"Highlight3\\">2 Zähler</span>: Du erhältst <span class=\\"Highlight3\\">10 Sekunden</span> nach dem Festhaken eines Überlebenden <span class=\\"Highlight3\\">10 Sekunden</span> lang den Statuseffekt <b><i>Eile</i></b> in Höhe von <span class=\\"Highlight2\\">{0} %</span>.</li><li><span class=\\"Highlight3\\">3 Zähler</span>: Überlebende leiden unter dem Statuseffekt <b><i>Gefährdet</i></b>.</li><li><span class=\\"Highlight2\\">5 Zähler</span>: Du erhältst die Fähigkeit, Überlebende eigenhändig zu töten.</li><br><i>Die Flucheffekte dauern an, solange das entsprechende Fluchtotem besteht.</i><br>","name":"Fluch: Aufgezehrte Hoffnung","flavor":"„Wenn du nichts unternimmst, klebt ihr Blut an deinen Händen. Wenn du sie rettest, wird ihr Hunger wachsen.“","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"Allein mit deiner Gegenwart löst du bei anderen Grauen aus. Überlebende in deinem Terrorradius sind ineffizient.<br>Die Verbrauchsraten der Gegenstände betroffener Überlebender sind um <span class=\\"Highlight1\\">{0} %</span> erhöht.","name":"Erdrückende Präsenz","flavor":"\\"Mist! Ich habe den Verband verloren!\\"","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"Deine Planung ist präzise, deine Ausführung furchterregend.<br>Während einer Jagd wird dein Terrorradius um <span class=\\"Highlight1\\">{0} Meter</span> vergrößert. Andernfalls wird dein Terrorradius um <span class=\\"Highlight2\\">{0} Meter</span> verkleinert, und dein Blickfeld ist um <span class=\\"Highlight3\\">{1} Grad</span> größer.<br><i>Blickfeldboni sind nicht kombinierbar.</i>","name":"Beobachten und zuschlagen","flavor":"\\"Es ist Zeit für Ihre Behandlung!\\" – Der Doktor","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"Dein Hass auf Fortschritt treibt dich an.<br>Überlaste einen Generator mithilfe der Aktion <b>Generator beschädigen</b>. Der nächste Überlebende, der mit diesem Generator interagiert, muss einen <span class=\\"Highlight1\\">enorm</span> schwierigen Fähigkeitscheck bestehen. Ein misslungener Fähigkeitscheck resultiert in zusätzlichen <span class=\\"Highlight2\\">{0} %</span> Rückgang am Generator.<br>Ein erfolgreicher Fähigkeitscheck gewährt keinen Fortschritt, aber der Generator explodiert nicht.","name":"Überladen","flavor":"\\"Es ist eine Falle. Aber eine Falle, die jemand auslösen muss...\\" – Der Doktor","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"Deine Mordlust ist so stark, dass deine Verbindung mit dem Entitus kurzzeitig unterbrochen wird, wodurch du unberechenbar wirst.<br><br>Gewährt den Statuseffekt <b>Unentdeckbar</b>, sobald du Blutrausch, Gruppe I erreicht hast. Der Statuseffekt wird aufgehoben, wenn der Blutrausch wieder aufhört.<br><br><li>Du erhältst <span class=\\"Highlight1\\">{0} %</span> mehr Blutpunkte für Aktionen der Jäger-Kategorie.</li>","name":"Raubtier","flavor":"„Wo ist sie hin?“","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Auren Überlebender werden dir <span class=\\"Highlight1\\">{0} Sekunden</span> lang angezeigt, wenn sie den Keller betreten und du mehr als <span class=\\"Highlight2\\">{1} Meter</span> vom Kellereingang entfernt bist.<br><i>Gebietszwang</i> kann immer nur alle <span class=\\"Highlight3\\">{2} Sekunden</span> aktiviert werden.","name":"Gebietszwang","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"Ein Fluch, der seine Kraft aus Verzweiflung zieht. Deine Jagd ist ein unwiderstehliches Lied des Grauens, das die Aufmerksamkeit deiner Beute ablenkt. Überlebende erleiden einen Fortschrittsrückgang von <span class=\\"Highlight1\\">{0} %</span>, wenn sie bei einem Fähigkeitscheck versagen, während sie heilen oder reparieren.<br>Jedes Mal, wenn ein Überlebender festgehakt wird, gewinnt das Wiegenlied der Jägerin an Kraft. Dies wirkt sich auf Fähigkeitscheck-Warnungen beim Heilen und Reparieren aus:<br><li><b>1 bis 4 Zähler:</b> Die Zeit zwischen dem Warngeräusch des Fähigkeitschecks und dem Beginn des Fähigkeitschecks wird kürzer.</li><li><b>5 Zähler:</b> Kein Warngeräusch für Fähigkeitschecks.</li><br><i>Die Flucheffekte dauern an, solange das entsprechende Fluchtotem besteht.</i>","name":"Fluch: Wiegenlied der Jägerin","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"Das Trauma, das deine brutalen Angriffe verursachen, macht Hilfeschreie qualvoll und schwierig.<br>Überlebende, die durch deine Grundangriffe in den Todesstatus versetzt werden, sind für die anderen Überlebenden nicht zu sehen, wenn sie außerhalb einer Reichweite von <span class=\\"Highlight1\\">{2} Metern</span> sind.<br>Überlebende, die durch deine Grundangriffe in den Todesstatus versetzt werden, kriechen <span class=\\"Highlight2\\">{1} %</span> langsamer, und zwar für <span class=\\"Highlight3\\">{0} Sekunden</span>.<br>In dieser Zeit sind die Überlebenden vom Statuseffekt <b>Erblindung</b> betroffen.","name":"K. o.","flavor":"\\"Ach, diese Waffe ist nicht gut. Auf gute alte Weise ... mit einem Vorschlaghammer! Du wirst sehen, das ist viel besser. Auf diese Weise sterben sie besser.\\" – Nubbins Sawyer","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"Eine tiefe Verbundenheit mit dem Entitus schaltet das Potential der eigenen Aura-Lesefähigkeit frei. Nachdem du einen Überlebenden festgehakt hast, siehst du die Auren aller anderen Überlebenden für <span class=\\"Highlight1\\">{0} Sekunden</span>, wenn sie weiter als <span class=\\"Highlight2\\">{1} Meter</span> vom Haken entfernt sind.<br><li>Jedes Mal, wenn ein Überlebender zum ersten Mal festgehakt wird, erhältst du einen stapelbaren Bonus von <span class=\\"Highlight3\\">{2} %</span> auf alle erhaltenen Blutpunkte, bis zu einem Maximum von <span class=\\"Highlight4\\">{3} %</span>.<br>Die zusätzlichen Blutpunkte werden erst nach der Runde verliehen.</li>","name":"Barbecue und Chili","flavor":"\\"Das Töten bereitet mir kein Vergnügen. Aber es gibt Dinge, die getan werden müssen. Das heißt nicht, dass man es gern tun muss.\\" - Drayton Sawyer","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"Deine bösartigen Angriffe sorgen dafür, dass Überlebende beim Zusammenstoß ihren Gegenstand verlieren. Der verlorene Gegenstand wird vom Entitus verschlungen, wenn er nach <span class=\\"Highlight1\\">{0} Sekunden</span> nicht aufgehoben wird.<br>Die Gegenstände auf dem Boden innerhalb eines Radius von <span class=\\"Highlight2\\">{1} Metern</span> werden durch eine weiße Aura angezeigt. Die Aura der Gegenstände wird nach und nach rötlicher, bis diese vom Entitus verschlungen werden.","name":"Franklins Niedergang","flavor":"\\"Sally, ich höre etwas. Stopp! Stopp!\\" – Franklin","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"Der verstärkte Druck, deine Beute verlieren zu können, erfüllt dich mit Wut und bringt dir unerwartete Motivation. Jedes Mal, wenn Überlebende Reparaturen an einem Generator abschließen, wird „Einheizen“ mächtiger.<br><li>Für jeden reparierten Generator erhältst du einen kombinierbaren Geschwindigkeitsbonus von <span class=\\"Highlight1\\">{0} %</span> fürs Aufheben, Umstoßen, Überspringen und Beschädigen von Generatoren sowie fürs Zerstören von Paletten. Dies gilt für den Rest der Prüfung.</li>","name":"Einheizen","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"Ein Überlebender wird Ziel deiner <b>Besessenheit</b>. Jedes Mal, wenn du das Ziel der Besessenheit mit einem <i>Grundangriff</i> triffst, verlängerst du die Öffnungszeit der Ausgangstore um <span class=\\"Highlight1\\">{0} Sekunden</span>, und das bis zu einem Maximum von <span class=\\"Highlight2\\">{1} zusätzlichen Sekunden</span>.<br>Das Ziel der Besessenheit ist nicht von <i>Vergissmeinnicht</i> betroffen.<br><li><i>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</i></li>","name":"Vergissmeinnicht","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"Sobald sich ein Ausgangstor öffnet, wird „Blutwächter“ aktiviert. Die Auren aller Überlebenden, die sich in einem Ausgangsbereich befinden, werden dir angezeigt.<br>Einmal pro Partie und wenn Blutwächter aktiv ist, wird beim Festhaken eines Überlebenden der Entitus heraufbeschworen, der die beiden Ausgänge für alle Überlebenden <span class=\\"Highlight1\\">{0} Sekunden</span> lang versperrt.","name":"Blutwächter","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"Deine genialen Modifikationen der Haken alarmieren dich, wenn jemand versucht, sie zu manipulieren.<br><li>Du erhältst eine Benachrichtigung, wenn ein Überlebender beginnt, einen Haken zu sabotieren.</li><li>Während du einen Überlebenden trägst, kannst du die Aura aller Überlebenden innerhalb eines Radius von <span class=\\"Highlight1\\">{0}</span> Metern um einen Haken sehen.</li>","name":"Henkerstreich","flavor":"\\"Keine Ausreden, keine Ausflüchte ... Kein Heulen.\\" – Amanda Young","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"Schaltet das Potenzial der eigenen Aura-Lesefähigkeit frei. Alle zurückgehenden Generatoren werden mit einer weißen Aura hervorgehoben. Bei einer Unterbrechung des Rückgangs wird der jeweilige Generator für <span class=\\"Highlight1\\">{0} Sekunden</span> mit einer gelben Aura hervorgehoben.<br>Geräusche, die bei der Reparatur von Generatoren entstehen, sind auf zusätzliche <span class=\\"Highlight2\\">{1} Meter</span> zu hören.","name":"Überwachung","flavor":"„Wirst du dich benehmen?“ –Amanda Young","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"Wenn ein Überlebender einen anderen mindestens <span class=\\"Highlight1\\">{0} Meter</span> von dir entfernt vom Haken rettet, löst <i>Triff deine Wahl</i> den Statuseffekt <b><i>Gefährdet</i></b> aus und wendet ihn für <span class=\\"Highlight2\\">{1} Sekunden</span> auf den Retter an.<br><i>Triff deine Wahl</i> hat eine Abklingzeit von <span class=\\"Highlight3\\">{2} Sekunden</span>. ","name":"Triff deine Wahl","flavor":"\\"Du wärst überrascht, welche Werkzeuge Leben retten können.\\" – Amanda Young","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"Du hältst Überlebende so kraftvoll fest, dass es ihnen nahezu unmöglich ist, zu entkommen. Effekte durch Versuche der Überlebenden, sich aus deinem Griff herauszuwinden, werden um <span class=\\"Highlight1\\">{0} %</span> verringert. Die Zeit, um sich aus deinem Griff zu befreien, verlängert sich um <span class=\\"Highlight2\\">{1} %</span>.","name":"Eiserner Griff","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"Allein mit deiner Gegenwart löst du bei anderen Grauen aus. Überlebende innerhalb deines Terrorradius erleiden eine <span class=\\"Highlight1\\">{0} %ige</span> Strafe auf die Heilungsgeschwindigkeit.<br>","name":"Coulrophobie","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"Eine tiefe Bindung zum Entitus entfesselt große Kraft. Nachdem du einen Überlebenden festgehakt hast, verliert der nächste Generator, den du beschädigst, sofort <span class=\\"Highlight1\\">{0} %</span> seines Fortschritts. Der normale Rückgang wirkt erst, nach der Aktion „Generator beschädigen“.<br><i>Pop Goes the Weasel</i> ist <span class=\\"Highlight1\\">{1} Sekunden</span> lang aktiv, nachdem der Überlebende festgehakt wurde.","name":"Pop Goes the Weasel","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"Du springst um <span class=\\"Highlight1\\">{0} %</span> schneller.<br>Wenn du eine Sprungaktion durchführst, wird der Entitus gerufen, der den Sprungort <span class=\\"Highlight1\\">{1} Sekunden</span> lang blockiert.<br>Auf diese Weise kann immer nur 1 Sprungort blockiert werden. Der Sprungort ist nur für Überlebende blockiert.<br>Hat keine Auswirkung auf Paletten.","name":"Verblüffen","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"Jede Palette, die du zerstörst, vergrößert den Zorn des Entitus.<br>Wenn du <span class=\\"Highlight1\\">{0} Paletten</span> zerstört hast, zerbricht der Entitus sofort die nächste Palette, die dich betäubt.<br>Du leidest trotzdem unter der Strafe für den Betäubungseffekt.","name":"Zorn des Gespensts","flavor":"„Zorn ist ihr Blut.“","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"Zwei manipulierte Fluchtotems werden in der Prüfung erschaffen.<br>Wenn eines der beiden manipulierten Fluchtotems von einem Überlebenden zerstört wird, leiden alle Überlebenden <span class=\\"Highlight1\\">{0} Sekunden</span> lang unter dem <span class=\\"Highlight3\\">Statuseffekt „Gefährdet“</span>. <br>Das verbleibende manipulierte Fluchtotem wird sofort zu einem glanzlosen Totem.<br>","name":"Fluch: Verteufelter Boden","flavor":"„Ihr Zuhause wurde gottlos.“","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"Du bist von einem Überlebenden <b>besessen</b>.<br>Jedes Mal, wenn ein Generator repariert wurde, sieht das Ziel deiner Besessenheit <span class=\\"Highlight1\\">{0} Sekunden</span> lang deine Aura.<br>Jedes Mal, wenn ein Generator repariert wurde, werden dir die Aufenthaltsorte aller Überlebenden <span class=\\"Highlight2\\">{1} Sekunden</span> lang angezeigt.<br>Sind alle Generatoren repariert, erhält das Ziel deiner Besessenheit den Statuseffekt <span class=\\"Highlight3\\">Gefährdet</span> und du kannst diesen Überlebenden <span class=\\"Highlight3\\">töten</span>.<br><li><i>Der Killer kann immer nur von je einem Überlebenden besessen sein.</i></li>","name":"Hass","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"Jeder Generator in einem Umkreis von <span class=\\"Highlight1\\">{0} Metern</span>, der von zwei oder mehr Überlebenden repariert wird, ist durch eine gelbe Aura gekennzeichnet. Wird der Generator zum ersten Mal hervorgehoben, löst „Uneinigkeit“ eine Benachrichtigung über ein lautes Geräusch am Generator aus. Sobald der Generator nicht mehr in Reichweite ist oder nicht mehr von zwei oder mehr Überlebenden repariert wird, bleibt die Aura für weitere <span class=\\"Highlight2\\">4 Sekunden</span> bestehen.<br>","name":"Uneinigkeit","flavor":"\\"Klugscheißer werden umgebracht. Dafür sorgen wir immer.\\" – Die Legion","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"Während du einen Überlebenden trägst, erleidest du keine Abklingzeit für verfehlte <i>Grundangriffe</i>, und erfolgreiche Treffer mit einem <i>Grundangriff</i> bei anderen Überlebenden pausieren den Herauswinden-Timer des getragenen Überlebenden für <span class=\\"Highlight1\\">{0} Sekunden</span>.<br>","name":"Irrer Mut","flavor":"„Aus der Nummer kommen wir nicht mehr raus. Wir sind einfach zu gut darin.“ –Die Legion","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"Du öffnest Schließschränke <span class=\\"Highlight1\\">{0} %</span> schneller.<br><br>Überlebende, die Schließschränke verlassen, leiden <span class=\\"Highlight1\\">{2} Sekunden</span> lang unter dem Statuseffekt „Gefährdet“ und schreien, wodurch sie ihren Standort für <span class=\\"Highlight1\\">{1} Sekunden</span> verraten.<br>","name":"Eiserne Jungfrau","flavor":"„Dies ist kein Ort für Feiglinge.“ –Die Legion","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"Deine Gebete beschwören eine dunkle Macht herauf, welche die Überlebenschancen der Überlebenden verringert. Die <span class=\\"Highlight1\\">{0} Generatoren</span>, die am weitesten von dir entfernt sind, werden vom Entitus zu Beginn der Prüfung <span class=\\"Highlight1\\">{1} Sekunden</span> lang blockiert.<br>Während dieser Zeit können die Überlebenden diese Generatoren nicht reparieren. Betroffene Generatoren sind an einer weißen Aura zu erkennen.<br>","name":"Korrupte Intervention","flavor":"„Es soll im ganzen Land bekannt werden, dass die Götter die Ungläubigen verfluchen.“ (Adiris’ Tafel, 3, 7)","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"Die Schreie der Ungläubigen lassen dein Herz höherschlagen.<br>Alle Überlebenden, die sich innerhalb deines Terrorradius befinden, während ein anderer Überlebender in den Todesstatus versetzt wird, schreien auf und geben dir <span class=\\"Highlight1\\">{0} Sekunden</span> lang ihre Standorte preis.","name":"Ansteckende Angst","flavor":"„Der Schrecken befällt die Herzen der Ungläubigen, die zu Füßen der Gefallenen jammern.“ (Lobeshymne, 11, 4)","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"Die Zurschaustellung deiner Macht erzeugt eine turbulente Panik, die sich im ganzen Land ausbreitet.<br><br>Ein Überlebender wird Ziel deiner Besessenheit. Triffst du das Ziel der Besessenheit mit einem <i>Grundangriff</i>, wird dein Terrorradius auf das Ziel der Besessenheit übertragen. , und zwar für <span class=\\"Highlight2\\">{1} Sekunden</span>. Sein Radius wird auf <span class=\\"Highlight1\\">{0} Meter</span> eingestellt. Für die Dauer wird dir der Statuseffekt <b>Unentdeckbar</b> gewährt.<br><br>Der Überlebende mit dem übertragenen Terrorradius wird für andere Zwecke auch als „innerhalb des Terrorradius“ betrachtet.<br><br><li><i>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</i></li><br>","name":"Dunkle Hingabe","flavor":"„Und der Schrecken soll einen trotzenden Ungläubigen erfassen, der fälschlicherweise meine Ankunft verkünden wird.“ – Adiris’ Tafel, 48, 9","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"Deine Sinne werden im dunklen Reich des Entitus geschärft.<br><br>Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Die Aura eines jeden Überlebenden, der innerhalb eines Radius von <span class=\\"Highlight1\\">48 Metern</span> eine übereilte Aktion ausführt, wird dir für <span class=\\"Highlight2\\">{0} Sekunden</span> angezeigt.<br><br><i>Ich bin ganz Ohr</i> kann nur einmal alle <span class=\\"Highlight3\\">{1} Sekunden</span> ausgelöst werden.<br>","name":"Ich bin ganz Ohr","flavor":"„Es gibt keinen Grund zur Sorge. Ich habe mich mein ganzes Leben lang darauf vorbereitet.“ –Ghost Face","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"Deine finsteren Pläne und deine gewitzte Gelassenheit erwecken den Entitus.<br><br>Nachdem du dir einen Überlebenden geschnappt hast, werden alle Generatoren, die nicht von Überlebenden repariert werden, vom Entitus blockiert und können für die nächsten <span class=\\"Highlight1\\">{0} Sekunden</span> nicht repariert werden. Betroffene Generatoren sind an einer weißen Aura zu erkennen.<br><br><i>Durchdringendes Zittern</i> kann nur einmal alle <span class=\\"Highlight2\\">{1} Sekunden</span> ausgelöst werden.<br>","name":"Durchdringendes Zittern","flavor":"„Die Nacht ist mein Gehilfe, und hier dauert sie ewig.“ –Ghost Face","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"Ein Überlebender wird Ziel deiner <b>Besessenheit</b>. Du lauerst in den Schatten und eliminierst deine Opfer eines nach dem anderen. Wenn das Ziel deiner Besessenheit festgehakt wird, bekommt <i>Heimliche Verfolgungsjagd</i> einen Zähler hinzu, bis zu einem Maximum von <span class=\\"Highlight1\\">{0} Zählern</span>.<br><br>Jeder Zähler verringert deinen Terrorradius während der Jagd um <span class=\\"Highlight2\\">{1} Meter</span>.<br><br>Rettet ein Überlebender das Ziel der Besessenheit vom Haken, so wird der Retter zum Ziel der Besessenheit. Du verlierst alle Zähler, sollte das Ziel der Besessenheit geopfert oder getötet werden.<br><br><li><i>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</i></li><br>","name":"Heimliche Verfolgungsjagd","flavor":"„Du hast keine Ahnung, was ich mit dir vorhabe. Darüber werden sie wochenlang in den Nachrichten berichten, dafür werde ich sorgen.“ –Ghost Face","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"Deine unheimliche Gegenwart lädt die Luft mit Spannung auf und stört die Technik.<br><br>Versetzt du einen Überlebenden mit einem <i>Grundangriff</i> in den Todesstatus, explodieren alle Generatoren innerhalb eines Radius von <span class=\\"Highlight1\\">{0} Metern</span> sofort und löst zusätzlich einen sofortigen Fortschrittsrückgang von <span class=\\"Highlight2\\">{1} %</span> aus.<li><i>Spannungsstoß</i> kann nur einmal alle <span class=\\"Highlight3\\">{2} Sekunden</span> ausgelöst werden.</li><br>","name":"Spannungsstoß","flavor":"„Das Wesen scheint einen unbekannten Einfluss auf Elektrizität und Technik im Umfeld zu haben.“ –Hawkins National Laboratory","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"Deine quälende Gegenwart zehrt an deiner Beute und schwächt sie.<br><br>Während sie Generatoren reparieren, sind Überlebende vom Statuseffekt <b>Erschöpfung</b> betroffen.<br><br>Alle bereits vorhandenen Timer des Statuseffekts <b>Erschöpfung</b> werden pausiert, während die Überlebenden einen Generator reparieren. Nachdem sie ihre Reparatur beendet haben, erleiden die Überlebenden den Statuseffekt <b>Erschöpfung</b>, und zwar für <span class=\\"Highlight2\\">{1} Sekunden</span>.<br>","name":"Seelenbrecher","flavor":"„Die offenbare telepathische Fähigkeit des Testobjekts kann bei Individuen im Umfeld Empfindungen wie Furcht und Ermüdung auslösen.“ – Hawkins National Laboratory","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"Deine Verbindungen zu jenen aus der anderen Welt manifestieren sich, wenn deine Beute versucht, zu entkommen.<br><br>Jedes Mal, wenn ein Generator fertiggestellt wird, werden alle Fenster und Orte zum Springen innerhalb eines Radius von <span class=\\"Highlight1\\">{0} Metern</span> um den fertiggestellten Generator für die nächsten <span class=\\"Highlight2\\">{1} Sekunden</span> für alle Überlebenden blockiert.<br><br>Für die Dauer kannst du die Aura der durch <i>Grausame Grenzen</i> blockierten Orte zum Springen sehen.<br>","name":"Grausame Grenzen","flavor":"„Die Testobjekte scheinen den Zustand von Objekten im Umfeld zu beeinflussen, als ob sie in einer anderen Form innerhalb einer fremden Dimension existieren würden.“ –Hawkins National Laboratory","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Du bist geistig hellwach und erkennst die Schlüsselpunkte auf dem Schlachtfeld.<br><br>Die Auren aller Paletten, zerstörbaren Wände und Sprungpositionen innerhalb eines Umkreises von <span class=\\"Highlight1\\">{0} Metern</span> werden dir angezeigt.<br>","name":"Zanshin-Taktik","flavor":"„In der Stärke deines Feindes liegt Schwäche.“ – Renjiros Doktrin 12, 5","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"Die Agonie einer Person wird auf andere übertragen.<br><br>Wenn du einen Überlebenden festhakst, erleiden alle anderen verletzten Überlebenden die Statuseffekte <span class=\\"Highlight1\\">Blutung</span>und <span class=\\"Highlight1\\">Erschöpfung</span> für <span class=\\"Highlight2\\">{0} Sekunden</span>.<br><br><i>Blutecho</i> hat eine Abklingzeit von <span class=\\"Highlight3\\">{1} Sekunden.</span><br>","name":"Blutecho","flavor":"„Greife einen Feind mit Präzision an, dann werden selbst seine Verbündeten es spüren.“ –Renjiros Doktrin 6, 3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"Du willst dich an jenen rächen, die dir unrecht getan haben. Ein Überlebender, der dich blendet oder betäubt, indem er eine Palette oder einen Schließschrank nutzt, wird zum Ziel deiner Besessenheit.<br><br>Jedes Mal, wenn ein neuer Überlebender zum Ziel der Besessenheit wird, erleidet er den Statuseffekt <span class=\\"Highlight1\\">Ahnungslos</span>, und zwar für <span class=\\"Highlight2\\">{0} Sekunden</span>. Seine Aura kannst du dann für <span class=\\"Highlight3\\">{1} Sekunden</span> sehen.<br><br><li><i>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</i></li><br>","name":"Nemesis","flavor":"„Nur ein Narr würde einem Dämon ins Gesicht spucken und seinen Sieg verkünden.“ – Renjiros Doktrin 4, 9","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"Du hast einen guten Riecher für gut geölte Ausrüstung.<br><br>Nachdem du einen Überlebenden <span class=\\"Highlight1\\">{0}</span>-mal mit deinem <i>Grundangriff</i> getroffen hast, wird <i>Ausrüstungsspezi</i> für <span class=\\"Highlight2\\">{1} Sekunden</span> aktiviert.<br><br>Jedes Mal, wenn ein Überlebender beim Reparieren einen guten Fähigkeitscheck schafft, während <i>Ausrüstungsspezi</i> aktiv ist, wird der Generator durch eine gelbe Aura angezeigt, und zwar so lange, bis er vollständig repariert ist.<br>","name":"Ausrüstungsspezi","flavor":"„Manchmal ist es die beste Arbeit des Menschen, die ihn ins Grab bringt.“ – Der Gefängnisdirektor","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"Ein Überlebender wird Ziel deiner <b>Besessenheit</b>.<br><br>Nachdem du das Ziel der Besessenheit festgehakt hast, wird <i>Totenschalter</i> für die nächsten <span class=\\"Highlight1\\">{0} Sekunden</span> aktiviert. <br><br>Jeder Überlebende, der dann mit der Reparatur eines Generators aufhört, bevor dieser vollständig repariert ist, sorgt dafür, dass der Entitus den Generator blockiert, bis der Effekt <i>Totenschalter</i> endet. <br><br>Betroffene Generatoren werden durch eine weiße Aura hervorgehoben.<br><br><i>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</i><br>","name":"Totenschalter","flavor":"„Ich kenne den Gesichtsausdruck von Menschen, die begreifen, dass sie sterben werden.“ – Caleb Quinn","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"Ein Fluch, der bei seiner Zerstörung um sich schlägt. Jene, die hineingeraten, werden bestraft.<br><br>Jeder Überlebende, der ein glanzloses Totem zerstört, erleidet den Statuseffekt <b>Ahnungslos</b>, und zwar für <span class=\\"Highlight1\\">{0} Sekunden</span>.<br><br>Wird ein beliebiges Fluchtotem, einschließlich diesem, zerstört, werden die Auren aller Überlebenden für <span class=\\"Highlight2\\">{1} Sekunden</span> angezeigt.<br>","name":"Fluch: Vergeltung","flavor":"„Du dummer Narr, du hast dich selbst erledigt.“ – Caleb Quinn","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"Jene, die der Pflichterfüllung im Weg stehen, erwartet ein hartes Urteil.<br><br>Überlebende, die einen Schutztreffer einstecken, erleiden den Statuseffekt <b>Gebrochen</b>, und zwar für <span class=\\"Highlight1\\">{0} Sekunden.</span>","name":"Erzwungene Buße","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"Du führst deine Opfer entlang eines Pfades voller Schmerz und Bestrafung.<br><br>Nachdem du einen Generator beschädigt hast, wirst du <b>Unentdeckbar</b>, bis der Generator keine Rückschritte mehr macht oder ein Überlebender verletzt oder auf beliebige Weise in den Todesstatus versetzt wird. In dieser Zeit wird Überlebenden die gelbe Aura des Generators angezeigt.<br><br>Dieser Effekt kann nur einmal alle <span class=\\"Highlight1\\">{2} Sekunden</span> ausgelöst werden.","name":"Pfad der Folter","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"Es ist das Schicksal aller, deren Leben mit der Dunkelheit verflochten sind, gemeinsam zu leiden.<br><br>Heilt ein Überlebender einen anderen Überlebenden um einen Gesundheitsstatus, und zwar in einer Entfernung von mindestens <span class=\\"Highlight1\\">{0} Metern</span> vom Killer, so schreit der Überlebende, der die Heilungsaktion ausführt, und aktiviert <i>Todgeweiht</i> für die nächsten <span class=\\"Highlight2\\">{1} Sekunden</span>. In dieser Zeit leidet der Überlebende am Statuseffekt <b>Ahnungslos</b>, sofern er weiter als <span class=\\"Highlight3\\">{2} Meter</span> vom geheilten Überlebenden entfernt ist. ","name":"Todgeweiht","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"Nachdem du einen Generator beschädigt hast, gibt jeder Überlebende, der in den nächsten <span class=\\"Highlight1\\">{0} Sekunden</span> damit interagiert, für <span class=\\"Highlight2\\">{1} Sekunden</span> seine Position bekannt, indem er schreit, und erleidet den Statuseffekt <b>gefährdet</b> für <span class=\\"Highlight3\\">{2} Sekunden</span>.<br><br><i>Drachengriff</i> hat eine Abklingzeit von <span class=\\"Highlight4\\">{3} Sekunden</span>.<br>","name":"Drachengriff","flavor":"„In diesem Präparat steckt so viel Potenzial ... Selbst die kleinste Menge davon bewirkt übernatürliche Effekte.“ – Tagebuch von Talbot Grimes","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"Ein Fluch, der die Gunst des Entitus gewinnt, wenn Blut vergossen wird.<br><br>Sobald ein Überlebender mit einem <i>Grundangriff</i> getroffen wird, werden Paletten im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> um deine Position vom Entitus an Ort und Stelle für <span class=\\"Highlight2\\">{1} Sekunden</span> festgehalten. Diese Paletten können nicht umgestoßen werden.<br><br><i>Fluch: Blutgunst</i> hat eine Abklingzeit von <span class=\\"Highlight3\\">{2} Sekunden</span>.<br>","name":"Fluch: Blutgunst","flavor":"„Es wären keine großen Sprünge der Vorstellungskraft nötig, um anzunehmen, dass die Prüfungen eine Art biologische Reaktion sind.“ – Tagebuch von Talbot Grimes","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"Während <i>Fluch: Unsterblich</i> aktiv ist, werden die Auren aller Überlebenden im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> um glanzlose Totems angezeigt.<br><br>Wird ein anderes Fluchtotem zerstört, wird dieser Fluch auf das Totem mit Fluch: Unsterblich übertragen, und Fluch: Unsterblich wird deaktiviert. Alle Zähler, die der übertragene Fluch hatte, werden ebenfalls übertragen.","name":"Fluch: Unsterblich","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"Du beschützt das Wenige, das du hast, und passt auf, dass deine Vorräte unberührt bleiben.<br><br>Überlebende geben ihre Position preis, wenn sie mit einer Truhe interagieren oder sie einen Gegenstand aufnehmen, der sich in einem Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> um ihre Position befindet.<br><br>Die Prüfung beginnt mit <span class=\\"Highlight1\\">{1}</span> zusätzlichen Truhen in der Umgebung.","name":"Horter","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"Du hattest ein schwieriges Leben, deshalb machst du es anderen jetzt auch schwer.<br><br>Wenn du einen Generator beschädigst, störst du den Fortschritt von <span class=\\"Highlight1\\">{0}</span> weiteren, willkürlich ausgewählten Generatoren.<br><br>Wird einer der betroffenen Generatoren repariert, löst du einen Fähigkeitscheck für die Überlebenden aus, die ihn reparieren.<br><br><i>Unterdrückung</i> hat eine Abklingzeit von <span class=\\"Highlight2\\">{1}</span> Sekunden.<br>","name":"Unterdrückung","flavor":"\\"Verdamme sie, wie sie uns verdammen.\\" – Charlotte Deshayes","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"Während das Ende naht, bereitest du dich auf den Kill vor.<br><br>Immer, wenn ein Generator fertiggestellt wird, wird „Gnadenstoß“ stärker und erhältst du einen Zähler.<br><br>Verbrauche einen Zähler, um die Distanz deines nächsten Sprungangriffs um <span class=\\"Highlight1\\">{0} %</span> zu erhöhen.","name":"Gnadenstoß","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"Deine unvergleichliche Bühnenpräsenz verzaubert alle.<br><br>Wenn du einen Überlebenden trägst, leiden alle Überlebenden innerhalb deines Terrorradius unter dem Statuseffekt <b>Gefährdet</b>.<br>Der Effekt dauert <span class=\\"Highlight1\\">{0} Sekunden</span> für Überlebende, die deinen Terrorradius verlassen, und für jene innerhalb des Radius, wenn du den getragenen Überlebenden festhakst oder freilässt.<br><i>Groupie</i> hat eine Abklingzeit von <span class=\\"Highlight2\\">{1} Sekunden</span>, wenn ein Überlebender nicht mehr getragen wird.<br>","name":"Groupie","flavor":"„Genieße diesen Augenblick, nur wenige kommen mir so nah.“ – Ji-Woon Hak","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"Ein Fluch, der sicherstellt, dass alle Unwürdigen zusammengetrieben werden.<br><br>Der Entitus blockiert ein Fenster für <span class=\\"Highlight1\\">{0} Sekunden</span>, nachdem ein Überlebender <b>hastig</b> hindurchgesprungen ist.<br><br><i>Die Flucheffekte dauern an, solange das entsprechende Fluchtotem besteht.</i><br>","name":"Fluch: Publikumskontrolle","flavor":"„Du hast keine Kontrolle. Leute wie du können nur davon träumen.“ – Ji-Woon Hak","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"Du lässt nicht jeden Dahergelaufenen in den VIP-Raum.<br><br>Nachdem du einen Überlebenden zum ersten Mal festgehakt hast, erhältst du einen Zähler für <i>Kein Ausweg</i>.<br>Wenn der letzte Generator repariert wurde, blockiert der Entitus beide Schalter für das Ausgangstor für <span class=\\"Highlight1\\">{0} Sekunden</span> und zusätzlich <span class=\\"Highlight2\\">{1} Sekunden</span> pro Zähler in deinem Besitz.<br>","name":"Kein Ausweg","flavor":"„Dieses Geräusch, wenn du blutest ... Ich will es noch mal hören.“ – Ji-Woon Hak","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"Du wurdest erschaffen, um Ziele aufzuspüren und auszuschalten.<br><br>Zu Beginn der Prüfung werden dir die Auren aller Überlebenden für <span class=\\"Highlight1\\">{0} Sekunden</span> angezeigt.<br><br><span class= \\"FlavorText\\">„... weiß, was er will, und hört nicht auf, bis er es bekommen hat.“ – Carlos Oliveira<\\\\span>","name":"Tödlicher Verfolger","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"Du weißt, wie du ein Teammitglied brutal zurichten kannst, um für Panik zu sorgen.<br><br>Immer, wenn du einen gesunden Überlebenden mit einem Grundangriff in den verletzten Zustand versetzt, erleiden alle verletzten Überlebenden den Statuseffekt <b>Ahnungslos</b> für <span class=\\"Highlight1\\">{0} Sekunden</span>.<br><I>Hysterie</i> kann nur einmal alle <span class=\\"Highlight2\\">{1} Sekunden</span> ausgelöst werden.<br><br><span class= \\"FlavorText\\">„Tut mir leid, ich bin ein bisschen nervös geworden. Ich wusste nicht, was ich zu erwarten hatte.“ – Robert Kendo","name":"Hysterie","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"Der Ne-α-Parasit schenkt dir die Intelligenz und das Bewusstsein, die benötigt werden, um eine Falle zu stellen.<br><br>Wenn du einen Generator trittst, erscheint seine Aura gelb. Wenn du einen Überlebenden mit einem Grundangriff in den Todesstatus versetzt, explodiert jeder betroffene Generator. Der Fortschritt jedes Generators wird dabei um <span class=\\"Highlight1\\">{0} %</span> zurückgesetzt und die Auren verschwinden.<br>Jeder Überlebende, der einen Generator repariert, wenn dieser explodiert, schreit und erleidet den Statuseffekt „Bewegungsunfähig“ für <span class=\\"Highlight2\\">{1} Sekunden</span>.<br><i>Ausbruch</i> hat eine Abklingzeit von <span class=\\"Highlight3\\">{2} Sekunden</span>.<br><br><span class= \\"FlavorText\\">„Er kann Waffen verwenden?“ – Jill Valentine","name":"Ausbruch","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/de/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Evan MacMillan vergötterte seinen Vater. Er war nicht nur der Erbe eines großen Vermögens, er wusste auch, das Anwesen zu führen. Evan, der unter seiner starken Hand aufgewachsen war, leitete die Belegschaft nun mit harter Hand. Die Produktion war stets hoch und das MacMillan-Anwesen florierte unter der Führung des Vaters und des Sohns. Als sich Archie MacMillans geistige Gesundheit langsam verschlechterte, beschützte ihn Evan vor den zahlreichen Leuten, die einen Teil des Vermögens haben wollten. Egal, was sein Vater von ihm verlangte, Evan tat es.<br><br>Als Archie MacMillan schließlich durchdrehte, wurde Evan zu seinem Vollstrecker bei dem, was als schlimmster Massenmord in die moderne Geschichte einging. Es konnte nie bewiesen werden, dass Evan über hundert Männer in die dunklen Tunnel führte, bevor er sie in die Luft sprengte und so ihr Schicksal besiegelte. Die Geschichte des MacMillan-Anwesens ist eine Geschichte von Reichtum und Macht, die falsch genutzt wurden. Wie viele Vater und Sohn zum Opfer fielen, ist unbekannt. Es gibt keine Aufzeichnungen darüber, was aus Evan MacMillan wurde. Sein Vater stellt ein weiteres ungelöstes Rätsel dar: Er wurde im Keller seines eigenen Lagers gefunden – tot und verlassen.<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"Als Philip Ojomo in dieses Land kam, hatte er nichts außer die Hoffnung auf einen neuen Anfang. Er war glücklich, als man ihm eine Stelle beim Autohaven-Schrottplatz anbot. Ein kleiner Schrottplatz, auf dem bestochene Polizisten bei den zwielichtigen Geschäften, die dort stattfanden, ein Auge zudrückten. Ojomo war das egal. Kriminelle Aktivitäten kannte er schon aus seiner Heimat, und solange er nichts damit zu tun hatte, kümmerten sie ihn nicht. Er reparierte einfach Autos und bediente die Schrottpresse. Darin war er richtig gut. Ein Auto kam hinein, ein kleiner Metallwürfel kam heraus.<br><br>Eines düsteren Tages sah er durch Zufall, wie Blut aus einem der noch unversehrten Autos sickerte. Als er den Kofferraum öffnete, fand er dort einen jungen Mann, gefesselt und geknebelt und mit angsterfüllten Augen. Ojomo befreite den Mann, der nur wenige Meter weit kam, bevor Ojomos Chef ihn aufhielt und ihm die Kehle aufschlitzte. Als Ojomo Antworten forderte, bekam er die Erklärung, dass er nichts weiter als ein einfacher Henker war, da in so gut wie jedem Auto ein Mensch gewesen war. Das war ein „Service“, den der Schrottplatz gewissen „Kunden“ bot. Ojomo drehte durch. Er warf seinen Chef in die Presse und ließ ihn langsam zerquetschen. Als der Kopf herausschaute, packte Ojomo ihn und riss ihn mitsamt dem Rückgrat aus dem Körper. Dann verschwand er und wurde nie wieder gesehen.<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"Der Sohn der wohlhabenden Landbesitzer Max und Evelyn Thompson blieb namenlos, da er das ungewollte Kind grausamer Eltern war. So grässlich entstellt wie er war, wurde er von der Gesellschaft ferngehalten. Seine Eltern schämten sich so sehr für ihren Sohn, dass sie ihn mit Ziegelsteinen in einen Raum einmauerten und nur durch ein Loch in der Wand fütterten. Als der Junge ausbrechen konnte, nahm er grausame und schreckliche Rache und metzelte die Eltern nieder, die ihn gequält hatten, anstatt ihn liebevoll großzuziehen.<br><br>Nach vollbrachter Tat setzte er sein Leben auf der Farm fort und ließ seine kranken Gewaltfantasien an den Tieren aus, die frei herumlaufen konnten. Als er sich endlich von seinen Fesseln befreit hatte, rannte er durch die Maisfelder und jagte und tötete alles, was er finden konnte. Die Leichen von Max und Evelyn wurden nie gefunden, aber man fand gefolterte und ausgeweidete Tiere auf der gesamten Farm verstreut. Das Land um Coldwind Farm wurde bald aufgeteilt und verkauft. Für das Farmhaus aber fand sich nie ein Käufer. Vielleicht hatte das mit der Kettensäge zu tun, die man in warmen Sommernächten hören konnte.<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"Als Sally Smithson in die Stadt zog, träumte sie von Kinderfüßen und Gelächter im Holzhaus, das ihr Ehemann Andrew gebaut hatte. Doch eines Tages musste Andrews Vorarbeiter ihr einen Besuch abstatten, der ihr Leben für immer veränderte. Sie hatte keine andere Wahl, als für sich selbst zu sorgen, doch die einzige Anstellung, die sie fand, war in der Crotus-Prenn-Anstalt. Sie begann ganz unten und übernahm die harte Nachtschicht. Über die Jahre hinweg hatte ihr Verstand seine Grenzen erreicht, nach Jahrzehnten, in denen sie schreckliche Dinge sah, die sich unauslöschlich in ihr Gehirn brannten. Schließlich ertrug sie es nicht länger und Gedanken der Läuterung reiften in ihr. Als die Frühschicht an einem Septembertag zur Arbeit kam, fand sie über 50 tote Patienten in ihren Betten vor, und auch die vier Mitarbeiter waren tot. Nur Sally hatte die Nacht überlebt, doch sie hatte ihren Verstand verloren und schaukelte ununterbrochen vor und zurück. Sie wurde in einen Krankenwagen verfrachtet, der aber nie beim Krankenhaus ankam. Man fand ihn zerschmettert in einem nahen Wald. Alle Insassen waren tot, nur Sally konnte nicht gefunden werden.","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"Sobald Anna gehen gelernt hatte, unterrichtete ihre Mutter sie darin, ein hartes, einsames Leben in den Wäldern des Nordens zu führen. In einer solch abgelegenen und gefährlichen Gegend zu leben erforderte Können und Widerstandsfähigkeit. Wenn das Tageslicht zu schwach wurde, um produktive Arbeiten auszuführen, suchten sie Zuflucht in ihrem Haus, einer robusten, alten Hütte, die darauf ausgelegt war, den härtesten Wintern standzuhalten. Am Herdfeuer ruhte Anna sich in den Armen ihrer Mutter aus. Sie besaß lediglich einige hölzerne Spielzeuge und Masken, die ihre Mutter für sie hergestellt hatte. Während sie Geschichten und Wiegenliedern lauschte, sank sie in einen Schlummer voller glücklicher Träume, nicht ahnend, dass bestimmte Ereignisse schon bald alles ändern würden.<br><br>Anna und ihre Mutter pirschten sich an einen großen Elch im Wald heran. Sie wussten, dass es sich um eine gefährliche Jagdbeute handelte, doch der Winter war außergewöhnlich hart gewesen und ihre Nahrungsvorräte waren beinahe aufgebraucht. Die Furcht, zu verhungern, ängstigte sie mehr als alle Kreaturen des Waldes. Ohne Vorwarnung bäumte sich der Elch auf, röhrte und galoppierte wild auf Anna zu. Die ganze Welt schien unter den trampelnden Hufen des riesigen Geschöpfs zu erbeben, und vor Angst war sie wie gelähmt. Der Elch kam ihr so nahe, dass sie den mordlustigen Zorn in seinen Augen sehen konnte. Da sprang ihre Mutter mit erhobener Axt zwischen sie. Sie stieß einen markerschütternden Schrei aus, als der Elch sie mit seinem Geweih aufspießte und in die Luft hob. Wieder und wieder ließ sie die Axt mit all ihrer Kraft auf den Schädel des Elchs niedersausen, während dieser versuchte, sie abzuschütteln. Mit einem widerlichen Krachen zersplitterte das Geweih und Annas Mutter war frei. Das Tier brach zusammen.<br><br>Anna war zu klein, um den malträtierten Körper ihrer Mutter zu bewegen, und so setzte sie sich auf der Lichtung neben sie. Um sie von den Schmerzenslauten des sterbenden Elchs abzulenken, hielt Annas Mutter sie fest im Arm und summte ihr Lieblingswiegenlied. So saßen sie, während die Jägerin und der Elch langsam ruhiger und kälter wurden, bis Anna im stillen Wald ganz allein war. Irgendwann raffte sie sich auf und begab sich auf den langen Heimweg.<br><br>Sie war zwar immer noch ein Kind, wusste jedoch inzwischen genug über das Leben im frostigen Wald, um zu überleben. Sie folgte ihren Instinkten und wurde eins mit der Wildnis. Im Lauf der Jahre wurde sie stärker und perfektionierte ihre Jagdkünste. Je mehr sie zu einem gefährlichen Raubtier wurde, desto mehr versank ihre Menschlichkeit in vagen Träumen.<br><br>Sie weitete ihr Jagdgebiet aus und lebte von dem, was sie erlegte. Sie arbeitete sich von Eichhörnchen über Hasen, Nerze bis zu Füchsen hoch. Irgendwann wurde sie dieser Kreaturen überdrüssig und machte stattdessen Jagd auf gefährlichere Tiere wie Wölfe und Bären. Als eines Tages ahnungslose Reisende durch ihren Wald wanderten, entdeckte sie ihre neue Lieblingsbeute: Menschen. Unglückliche Seelen, die in ihrem Jagdgebiet unterwegs waren, wurden genauso geschlachtet wie alle anderen Tiere. Sie sammelte gerne ihre Werkzeuge und farbenprächtige Kleidungsstücke, und vor allem das Spielzeug von Kindern. Doch sie brachte es nie übers Herz, die kleinen Mädchen zu töten.<br><br>Diese brachte sie stattdessen zu ihrem Haus tief im Wald. Sie waren lieblich, und wenn sie die Mädchen ansah, erwachte etwas tief in ihrem Herzen. Sie sehnte sich nach der Nähe einer geliebten Person, einem eigenen Kind. Zwischen den geplünderten Holzspielzeugen, Puppen und Märchenbüchern, die sie nicht lesen konnte, legte sie den Mädchen grobe, scheuernde Stricke um den Hals und knotete diese an der Wand fest. Sie konnte sie nicht herumwandern lassen, da sie sonst mit Sicherheit den Tod in der Wildnis finden würden.<br><br>Doch jedes der Mädchen verkümmerte im Lauf der Zeit und starb an Kälte, Hunger oder einer Krankheit. Und jedes Mal stürzte dies Anna tiefer in Schmerzen, Sorgen und Wahnsinn. Sie war davon besessen, es immer wieder zu versuchen und begann damit, die Dörfer in der Nähe zu überfallen, um dort Familien abzuschlachten und deren Töchter zu entführen. Dabei trug sie eine der Tiermasken, die ihre Mutter vor so langer Zeit für sie gefertigt hatte, um die angsterfüllten Kinder zu besänftigen. Unter den Dorfbewohnern wurde bald eine Legende über die Bestienfrau, die im roten Wald ihr Unwesen trieb, erzählt: Die Jägerin, die Menschen tötete und kleine Mädchen fraß.<br><br>Irgendwann erreichte der Krieg auch den Wald. Deutsche Soldaten marschierten hindurch, um das zusammenbrechende russische Kaiserreich anzugreifen. Während dieser düsteren Zeiten gab es keine Reisenden mehr. Die Dorfbewohner hatten ihre Häuser aufgegeben und es gab keine Kinder mehr, nur noch Soldaten. Viele davon wurden mit grauenhaften Axtwunden aufgefunden. Ganze Trupps verschwanden unter unerklärlichen Umständen. Nach Kriegsende verloren sich auch die Gerüchte über die Jägerin im wuchernden roten Wald.","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"Manche Menschen sind einfach verdorben und von einer destillierten, reinen Form des Bösen erfüllt. Michael Myers ist solch eine Gestalt. Er hatte keine Probleme damit, anderen Leid zuzufügen. Im Gegenteil, es war genau das, was er wollte. Aber das Leben kann auch hart für jene sein, deren Verstand voller Grauen ist. Der Unterschied liegt nur darin, wie man versucht, diese Probleme zu lösen.<br><br>Michael zum Beispiel musste töten, um inneren Frieden zu finden. Nachdem er seine Schwester getötet hatte, fand die Polizei einen stummen Jungen, der als Clown verkleidet war, am Tatort vor. Wenn man ein wachsendes Feuer sieht, gießt man kein Benzin darüber. Aber genau das taten die Beamten, die keine Ahnung hatten, wie sich das auf den Dämon im Körper des Jungen auswirken würde. Michael in eine psychiatrische Klinik zu stecken, war ein schwacher Versuch, das Kind zu retten. Erfolglose Therapien und nächtliche Schreie machten ihn nur noch introvertierter und geistesgestörter. Die Menschen hofften, dass man Michael Myers bald nur noch in Nebensätzen erwähnte, ihn vergaß und begrub, einen Versager, der bald verschwinden würde. Aber dann ... entkam er.<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"Lisa Sherwood wuchs in einem beschaulichen Dorf auf. Die Dorfbewohner waren freundlich, die Ältesten schlichteten Auseinandersetzungen und bewahrten die alten Traditionen. Lisa gefielen vor allem die Zaubersymbole für Sicherheit und Glück, die sie ihr beibrachten. Eines Nachts, als sie sich auf ihrem Heimweg durch den Wald befand, zog plötzlich ein schrecklicher Sturm auf. In der nassen und glitschigen Dunkelheit stolperte sie und fiel auf den Kopf. Kaum bei Bewusstsein sah sie dunkle Schemen aus den Bäumen auf sie zukommen. Bald waren sie nahe genug, dass sie ihr böses, hungriges Grinsen sehen konnte.<br><br>An die Wand gefesselt wurde sie in einem überfluteten Keller gefangen gehalten. In der Dunkelheit konnte sie andere erkennen, deren offene Wunden von Fliegen umschwärmt waren. Lange überlebten sie nicht, wenn die Kannibalen begannen, mit rostigen Klingen Stückchen von ihren Körpern abzuschneiden. Aber Lisa hielt irgendwie durch. Ausgehungert und verstümmelt, füllten ihre mageren Arme die Fesseln bald nicht mehr aus. Sie zog daran, und das Metall schnitt durch Haut und Muskeln, bis sie frei war. Ihr Fleisch war von grausig gelbem Eiter besetzt und ihre Knochen ragten unter faulenden Wunden hervor. Sie konnte keinen Schritt mehr tun. Im Delirium dachte sie an Zuhause; an die Ältesten. Sie zeichnete die Symbole, die sie ihr beigebracht hatten. Ein dunkler Hunger erwachte in ihr. Einer, der nur mit Blut gestillt werden konnte. Sie wählte Vergeltung.<br>Die Polizei gelangte schließlich zum alten Haus im Sumpf. Seine Bewohner waren zerstückelt und verspeist worden. Die Zaubersymbole der Ältesten waren mit Blut auf den Boden gekritzelt. Lisas Leiche wurde nie gefunden.<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"Seit jeher beschäftigt Menschen die Frage, ob Mörder von Zwängen ihres kranken Verstands zu ihren abscheulichen Taten getrieben werden, oder ob sie durch Druck von außen dazu gezwungen werden. Aber für einen bestimmten Killer sind Natur und Erziehung untrennbar verbunden.<br><br>Leatherface tötet nicht aus dem Verlangen heraus, anderen seinen Willen aufzuzwingen, fleischliche Gelüste zu befriedigen oder die Stimmen in seinem Kopf zum Schweigen zu bringen. Er tötet, weil er Angst hat. Angst, dass andere ihm wehtun; Angst, dass seine Familie unzufrieden mit ihm ist; Angst, dass ihrer aller Begierde nach Menschenfleisch ans Licht kommt.<br><br>Er tut, was ihm aufgetragen wird. Seine Familie liebt ihn, und das ist alles, was zählt. Außenstehende sind eine Bedrohung und um Bedrohungen muss man sich kümmern. <br><br>Wie diese Kids, die ungebeten ins Haus kamen. So selbstsicher traten sie ein. Sie sahen sich im Haus um, zweifellos, um die Geheimnisse der Familie aufzudecken. Aber Leatherface kümmerte sich um sie und beschützte die Familie, wie man es ihm beigebracht hatte.<br><br>Er ist nicht nur der Beschützer. Er hat viele Rollen, und jede hat ihr eigenes Gesicht. Er serviert das Essen, kümmert sich um die Familie, zieht sich zu den Mahlzeiten schick an. Früher hatten die Großeltern für sie alle gesorgt, aber Opa ist jetzt alt und Oma ist seit einer Weile reglos, also mussten Leatherface und seine Brüder übernehmen. Für ihn bedeutet die Familie alles. Sie bedeutet Schutz und Sicherheit.<br><br>Aber obwohl er sein Bestes gab, konnte eines der Kinder entkommen. Er versuchte, das Mädchen aufzuhalten, jagte ihr nach, so schnell er konnte, aber sie hatte Hilfe: einen anderen Außenstehenden, der einen Truck fuhr. Der niederträchtige Truckfahrer tötete seinen Bruder, überfuhr ihn, als wäre er eine Beutelratte. Wutentbrannt stürzte sich Leatherface auf ihn, die Säge gezückt, um seine Familie zu rächen. Aber der Truckfahrer war zu schnell. Er schlug Leatherface zur Seite und setzte seine eigene Säge gegen ihn ein. <br><br>Während er zusah, wie die Außenstehenden davonfuhren, vermischten sich Wut, Trauer und Schmerz mit der Sorge darüber, was nun aus seiner Familie werden würde. Sicher würden sie mit der Polizei im Schlepptau zurückkehren und diese würde seine Brüder und seinen Großvater mitnehmen. Was würde er ohne sie tun? Ohne ihre Befehle würde er verkümmern und sterben.<br><br>Als seine Welt zusammenbrach, drehte sich Leatherface im Kreis, seine Säge umherschwingend, und versuchte, die unzähligen ihn umgebenden Bedrohungen von außen zu bekämpfen.<br><br>Dann übermannte ihn ein anderes Gefühl. Von außerhalb seiner Sicht kroch es mit kaltem Grauen über seine Haut. Und er erkannte: Was auch immer ihm Außenstehende antun konnten, es gab etwas Schlimmeres, etwas Größeres, das in den Schatten lauerte. Ein Schrecken erfüllte ihn, wie er ihn noch nie zuvor verspürt hatte. Aber fast war er auch tröstlich, genau wie die Angst, die er von seiner Familie kannte. Die Angst, sie zu enttäuschen.<br><br>Er wurde an einen Ort gebracht, vertraut und doch unerkennbar, und instinktiv wusste er, was er zu tun hatte. Er konnte nicht versagen, so wie er es bei seiner Familie getan hatte. Außenstehende würden kommen, aber er würde seine Fähigkeiten nutzen, um diese Bedrohungen zu besiegen. Es würde Schreie geben, aber er würde die Welt wieder zum Schweigen bringen. Bis nur noch das wohltuende Heulen der Säge zu hören wäre.<br><br>Sollen sie nur kommen, die Außenstehenden.","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"Da er außergewöhnliche Fähigkeiten in Psychologie zeigte, wurde Herman für eine besondere Ausbildung in einem Programm für vertiefende Neurowissenschaft ausgewählt. Diese fand in einer geheimen Einrichtung namens Lérys Gedenkinstitut in Illinois statt, doch das Gebäude gehörte in Wirklichkeit der CIA. Dort lernte Herman Dr. Otto Stamper kennen und führte unter seiner Leitung unkonventionelle und stets grausamere Behandlungen durch, um Gefangenen, die in das Institut geschickt wurden, Informationen zu entlocken. Es handelte sich nämlich auch um ein Geheimgefängnis und Umerziehungszentrum für zahlreiche Feinde der USA. Seine freizügige Anwendung der gewalttätigen Elektroschocktherapie zeigte dramatische Ergebnisse und enthüllte mehrere Bedrohungen für die nationale Sicherheit.<br><br>Über die Jahre hinweg wurde Herman als „Der Doktor“ bekannt, und niemand hinterfragte, ob er überhaupt einen Doktortitel hatte, oder was mit den Gefangenen geschah, nachdem sie ihre Informationen preisgegeben hatten. Erst nachdem der Kontakt zu Lérys Gedenkinstitut eine Woche lang abgebrochen war, wurde das wahre Grauen endlich aufgedeckt. Personal, Patienten und Gefangene wurden alle tot mit unterschiedlichen Arten von Kopftraumata aufgefunden. Alle Mitarbeiter und Gefangenen wurden identifiziert, auch Dr. Otto Stamper, aber von Herman „Dem Doktor“ Carter fehlte jede Spur.<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"Selbst zu seinen Lebzeiten war Freddy Krueger eine albtraumhafte Gestalt für alle, die ihn wirklich kannten. Er versteckte sich hinter einer Maske aus Wärme und Freundlichkeit und offenbarte sein wahres Temperament nur seinen Opfern. Als diesen Opfern endlich Glauben geschenkt wurde, suchten die Eltern Springwoods Freddy und nahmen das Gesetz selbst in die Hand. Sie dachten, dass das Feuer in jener Nacht sie vor diesem Monster gerettet hatte und dass ihre Kinder wieder in Sicherheit waren, aber Böses, das so stark ist wie das in ihm, findet immer einen Weg, um zu überleben.<br>Die Jahre verstrichen, das Grauen war begraben und die Opfer vergaßen gnädigerweise. Dann kehrte Freddy auf unerklärliche Weise zurück und Träume wurden wieder zu Albträumen.<br>Freddy richtete seine Wut gegen jene, die ihm seiner Meinung nach Unrecht getan hatten, und konzentrierte sie auf seine wahre Besessenheit: Nancy Holbrook. Aber er unterschätzte ihre Stärke und ihren Einfallsreichtum. Gemeinsam mit ihrem Freund Quentin konnte sie Freddy schwächen und ihn verstümmeln und ließ ihn ein weiteres Mal zum Sterben zurück.<br>Der Tod wollte Freddy schon beim ersten Aufeinandertreffen nicht, wieso also dachten sie, dass er ihn sich dieses Mal holen würde? Noch einmal kam er zurück, getrieben von Rachegelüsten. Er wandte sich dem Jungen zu, der ihm den Weg zu Nancy, seiner Nummer eins, versperrt hatte.<br>Freddy drang in Quentins Träume ein, terrorisierte ihn Nacht um Nacht, bis seine Kräfte und Abwehr auf ihrem Tiefpunkt waren. Als die Zeit gekommen war, zwang er den Jungen, zum dunklen Abbild der Badham-Vorschule zurückzukehren. Hier würde er sich endlich rächen.<br>Freddy verfolgte den Jungen durch die Gänge der Schule. Er ließ sich Zeit, genoss jeden Augenblick der Jagd. Das brachte ihm die größte Genugtuung: Der Geruch ihres Schweißes in der Luft, die abgehakten Stöße ihres von Furcht beschleunigten Atems. Die Opfer waren seinem Spiel ausgeliefert.<br>Da war der Junge, am Ende eines langen Gangs. Zu müde und verängstigt, um noch weiter davonzulaufen? Seinem Schicksal ergeben? Freddy kam näher, mit ausgestreckten Armen, die Klauen an der Wand schärfend. Ihre Spitzen fuhren ein Rohr entlang, und das Kreischen des Metalls verstärkte die Angst des Jungen noch.<br>Ein Funkenschauer ging zu Boden und regnete auf die Flüssigkeit, die den Fliesenboden bedeckte. Ein blaues Feuer entflammte und hatte schnell den ganzen Raum eingehüllt.<br>Der Junge ergriff die Flucht, als Freddy in rasender Wut aus den Flammen hervorsprang. Zimmer und Wände zogen verschwommen an ihnen vorbei, bis sie in Freddys Keller waren. Von hier gab es kein Entkommen.<br>Langsam näherte Freddy sich dem Jungen. Dessen Furcht war jetzt so groß, dass Freddy sie beinahe schmecken konnte, aber seine Augen brannten mit einem aufsässigen Hass, der beinahe schon bewundernswert war.<br>Freddy holte mit seinen Klauen aus.<br>Dann fühlte er eine weitere Präsenz im Raum; etwas Altes, Mächtiges und Dunkles. Ein Gifthauch umschloss ihn und seine einzige Sinneswahrnehmung war ein Geräusch wie das von Holzbalken, die sich in der Ferne bogen und ächzten. Das widerhallende Stöhnen von Metall, das auf Metall trifft. Etwas Obskures und Unverständliches, irgendwo zwischen Sprache und reinem Grauen.<br>Einen Moment fiel er und drehte sich, und dann war Freddy wieder in der Schule. Aber nicht in seiner. Sie sah gleich aus, aber sie fühlte sich anders an. Seine Kräfte waren auf gewisse Weise geschmälert und auf andere Weise konzentriert. Der Junge war nun weg, aber andere Beute spazierte durch die Gänge. Einige belanglos, andere mit dem Potenzial, seine neuen Lieblinge zu werden. Aber alle würden sie seinen Klauen zum Opfer fallen.","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"John Kramer, besser bekannt als Jigsaw, wollte, dass sein Sohn im chinesischen Jahr des Schweins zur Welt kommt. Dies sollte für Fruchtbarkeit und Wiedergeburt stehen. Ein neuer Anfang für ihn und seine Frau und der Beginn eines behüteten Lebens für seinen Sohn. Aber dieser Plan wurde in der Nacht zunichte gemacht, in der ein Junkie auf der Suche nach Drogen in die Klinik seiner Frau einbrach.<br><br>Dieses Ereignis hatte den Tod seines ungeborenen Sohnes zur Folge. John spürte den Junkie auf und machte ihn zum ersten Versuchsobjekt. Und so erhielt auch das Schwein für immer eine neue Bedeutung. Es wurde zum Symbol für die Krankheit, die John von innen auffraß, eine Erinnerung daran, dass wir nur Fleisch sind, solange wir uns nicht durch unsere Taten erheben, indem wir das Leben den Klauen des Todes entreißen.<br><br>Das Schwein wurde zu einem Instrument, einem Agenten Jigsaws, das die Versuchspersonen zu ihren Tests geleitete. Für einige, die siegreich daraus hervorgingen, stellte das Schwein immer noch eine Wiedergeburt dar – in ein Leben als Lehrlinge und Schüler Jigsaws. <br><br>So war es auch für Amanda Young, einer armen Seele, deren Leben eine Aneinanderreihung von Schmerzen war, sowohl für sie selbst als auch für jene in ihrem Umkreis. Das änderte sich jedoch, als sie Jigsaws Test antrat und bestand. Sie entschied, dass ihr Leben etwas wert war und widmete sich ganz Jigsaws Sache, sodass sie diese fortführen konnte, wenn dieser dem Krebs zum Opfer fallen würde.<br><br>Aber sie wurde immer abhängiger von John, und ihr Kummer über seinen bevorstehenden Tod vermischte sich mit dem Glauben, dass sich ihre Versuchsobjekte nicht selbst retten und somit in der Feuerprobe ihrer Spiele keine Wiedergeburt erfahren könnten. <br><br>Als John dies erkannte, konfrontierte er sie mit einem weiteren Spiel, einer weiteren Chance, sich selbst zu retten. Doch Amandas Taten waren von ihrem Zorn und ihrer Eifersucht geleitet. Sie bestand den Test nicht und wurde angeschossen.<br><br>Während sie auf dem Fliesenboden verblutete, verdunkelte sich Amandas Sicht, begleitet von einem Geräusch wie knarrendes Holz. Dann fand sie sich in einem Wald wieder und sah die Welt erneut durch die Augen eines Schweins. Bäume umgaben sie und die Äste griffen von allen Seiten nach ihr. Panik ergriff sie und sie hörte ihren Atem in der Maske widerhallen.<br><br>War sie verflucht worden? Verdammt dazu, den Rest ihres Lebens hier und in dieser Gestalt zu verbringen? Oder war dies nur ein weiterer Test? Vielleicht hatte sie gar nicht versagt? John war allen anderen immer einen Schritt voraus, plante jede Eventualität ein. Und er würde sie doch bestimmt nicht aufgeben.<br><br>Jigsaw mochte gestorben sein, aber er hatte sie einem anderen übergeben. Einem Wesen, für das sie wieder das Schwein sein konnte.<br><br>Schließlich sah sie, dass alle ihre Entscheidungen richtig gewesen waren. Die Zeit für Spiele war vorbei. Dieses Mal gab es für niemanden eine Chance auf Erlösung. Sie waren Fleisch, und dieses war für den Schlachter bestimmt. ","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"Kenneth Chase erblickte 1932 im Zuge einer schweren Geburt, die seine Mutter nicht überlebte, das Licht der Welt. Dieses Ereignis hatte eine Kluft zwischen ihm und seinem Vater zur Folge, die sie nie überbrücken konnten. Mit dem Jungen wuchsen auch die Abneigung seines Vaters und seine Vorliebe für Alkohol. Als Kenneth in die Schule kam, lebten sie praktisch getrennte Leben.<br><br>Was seine Noten anbelangte, fiel er nicht besonders auf, brillierte aber mit athletischem Können. Er wurde groß und stark und erbrachte fantastische Leistungen bei Leichtathletik-Sportveranstaltungen. Jeder Versuch, ihn zu Mannschaftssportarten zu drängen, blieb jedoch erfolglos.<br><br>Auf seinem Heimweg fand er oft Federn, und bald begann er eine Sammlung davon in einer Zigarrenschachtel unter seinem Bett. Da sein Vater entweder arbeitete oder völlig berauscht war, hatte Kenneth viel Zeit für sich, die er fasziniert von der Regelmäßigkeit der Federn und ihrer Weichheit auf seinen Lippen verbrachte. Er beobachtete die Vögel, die zum Vogelhaus im Garten kamen, und malte sich aus, wie weich sie sein müssten. So beschloss er, einen zu fangen. Er freundete sich mit dem örtlichen Zahnarzt an und konnte sich so bald ein Betäubungsmittel verschaffen. Damit bastelte er eine Falle am Vogelhaus, mit der er hoffte, einen Vogel lange genug bewusstlos zu machen, um ihn berühren zu können.<br><br>Nach einigen Fehlschlägen konnte er ein Rotkehlchen fangen. Als es in seiner Hand lag, erfüllte ihn plötzlich ein Hochgefühl, da ihm dieses Lebewesen schutzlos ausgeliefert war. Er hatte geplant, es nach dem Abklingen des Betäubungsmittels freizulassen, als sich aber die Augen des Vogels wieder öffneten und er begann, sich zu bewegen, blieb Kenneths Faust geschlossen. Seine Finger schlossen sich langsam um den Hals und er drückte zu, bis die Brustfedern sich endlich nicht mehr bewegten. Er entledigte sich des Kadavers und behielt nur eine Feder, mit der er eine neue Sammlung startete. Die erste kam ihm nun „unecht“ vor.<br><br>In den späten 1940ern hatte Kenneth die Schule verlassen und arbeitete als Hilfskellner in einem örtlichen Diner. Er hatte auch sein Beuteschema ausgeweitet, etwa auf Eichhörnchen, Waschbären und Hunde, und hatte ein Talent dafür entwickelt, die Dosis des Betäubungsmittels auf jedes Tier abzustimmen.<br><br>Anfang 1954 wurde ein junger Mann als vermisst gemeldet und die Stadt wurde bei seiner Suche auf den Kopf gestellt. Ein paar Monate später fand Kenneths Vater bei Arbeiten unter dem Haus eine Zigarrenschachtel. Er brach sie auf und sah zu seinem Entsetzen, dass sie Federn, Tierpfoten und einen menschlichen Finger enthielt.<br><br>Als Kenneth von der Arbeit zurückkam, sah er, wie sein Vater mit einer Zigarrenschachtel unter dem Haus hervorkroch. Er drehte um und kehrte nie wieder nach Hause zurück.<br><br>Nach einigen anstrengenden Wochen traf er auf einen Wanderzirkus und wurde dank seiner Stärke für die Arbeit mit den Seilen angestellt. Er nahm einen neuen Namen an: Jeffrey Hawk.<br><br>Plötzlich von einer Gemeinschaft mit engen Bindungen umgeben, musste „Jeffrey“ lernen, mit Leuten umzugehen. Er trug seine neue Persönlichkeit wie eine Verkleidung und galt bald als nett und hilfsbereit. Man hieß ihn in seiner neuen Familie willkommen.<br><br>Das nächste Jahrzehnt blieb er beim Zirkus und reiste durch die ganze USA. Aber da das Nomadenleben kaum Konsequenzen hatte, entwickelte er schlechte Angewohnheiten. Alkohol, ungesundes Essen, Drogen, er frönte allem im Übermaß. Eine Zeit lang waren diese Laster genug, aber dann meldeten sich seine alten Bedürfnisse zurück und er nutzte sein Nomadenleben als Deckung, um wieder zu töten. Er stahl den Schaustellern Kleidung und Make-up und machte sich eine Verkleidung, mit der er nahe genug an seine Opfer herankam, um sie zu betäuben. Dann brachte er sie zu seinem Wohnwagen, wo sie gefesselt und ihm ausgeliefert aufwachten. Er hatte seinen Spaß dabei, sie geistig und körperlich zu foltern und ihre Schreie trieben ihn an, bevor sie in der Nacht verhallten.<br><br>Wenn sie gebrochen waren, untersuchte er ihre Finger und suchte nach dem hübschesten. Er führte sie zu seiner Zunge, um den Leckersten zu finden. Hatte er den Besten gefunden, schnitt er ihn ab und fügte ihn stolz seiner Sammlung hinzu. Den Rest des Körpers entsorgte er wie nutzlosen Müll.<br><br>Männer, Frauen, Junge, Alte, alles war ihm recht. Das Geheimnis einer guten Sammlung liegt in ihrer Vielfalt, in den Erinnerungen und Geschichten, die sie weckt.<br><br>Er legte das Kostüm immer seltener ab und vergaß auch seine alte Persönlichkeit damit. Er nahm den Clown, sein wahres Ich, ganz an.<br><br>Mit der Zeit wurde er selbstgefällig und nachlässig. Ein Opfer konnte sich von seinen Fesseln befreien, während er seinen Kater ausschlief. Die Frau entkam und schrie um Hilfe, und als er aufwachte, fand er sich vom Rest des Zirkus umzingelt. Er trieb sein Pferd an und der Wagen verschwand in der Nacht.<br><br>Seither durchstreift er das Land, ein Parasit, der bei jedem Jahrmarkt oder Zirkus zu finden ist, aber nie in einem Programmheft auftaucht. Er lockte jene, die tapfer oder närrisch genug waren, ihm nahe zu kommen, an, hielt sie fest und zog weiter, bevor sie überhaupt vermisst wurden.<br><br>Irgendwo auf seinem Weg ließ er die gewöhnlichen Straßen der USA zurück, reiste durch einen Nebelschleier und betrat ein neues Reich. Es war ein Ort der Vergänglichkeit und des Wandels, was perfekt zu seinem gewählten Lebensstil passte. Er fühlte sich mehr zu Hause als je zuvor. Er schlug sein Lager auf und wartet auf den ersten Besucher.","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"Rin war das einzige Kind der Yamaoka-Familie. Sie wurde in den staubigen Räumen eines traditionsreichen Hauses in Kagawa großgezogen. Sie studierte Pädagogik in Takamatsu, einer Privatuniversität, was schwer auf den ohnehin schon unsicheren Finanzen ihrer Familie lastete. Im selben Jahr wurde ihre Mutter krank und die Rechnungen stapelten sich. Rin arbeitete neben dem Studium im vergeblichen Versuch, diese Last zu mindern.<br><br>Ihr Vater sah sich Schulden gegenüber, die nicht aufhörten, zu wachsen. Er begann, Doppelschichten zu übernehmen, in der Hoffnung auf eine Beförderung. Da begann seine Schlaflosigkeit. Ein dunkles Flüstern, das ihn an seine hoffnungslose Situation erinnerte, ließ ihn des Nachts nicht einschlafen. Die Erschöpfung ließ ihn den Bezug zur Wirklichkeit verlieren. Rins Vater kämpfte gegen die nächtliche flüsternde Stimme an und ergriff eine verzweifelte Maßnahme. Er suchte das Gespräch mit seinem Vorgesetzten und erklärte ihm seine Lage. Er bettelte um eine Zulage, einen Vorschuss, eine Auszeit – irgendetwas.<br><br>Seine Bitte wurde abgelehnt. Die Firma hatte ein fehlerhaftes Produkt auf den Markt gebracht, das sie teuer zu stehen kam. Jemand musste zur Rechenschaft gezogen werden, und Rins Vater war dafür gerade richtig. Nach 22 Dienstjahren wurde er entlassen.<br><br>An diesem Abend kam Rin nach der Arbeit nach Hause. Sie war länger geblieben, um Kunden zu bewirten, die im Restaurant verweilt waren. Als sie ihr Fahrrad im Schuppen abstellte, hörte sie ihre Mutter im Haus schreien.<br><br>Sie eilte hinein und stürmte die Treppe zum Schlafzimmer ihrer Eltern hinauf. Dort fand sie ihre Mutter in Stücken auf dem Boden vor. Ihre Gliedmaßen waren sauber abgeschnitten und in einer unnatürlichen Stellung drapiert. Ihre Brust war aufgeschnitten und gab ihren aufgebrochenen Brustkorb frei. Rin würgte.<br><br>Ein scharfes Katana sauste auf sie herab. Rin wehrte die Klinge ab, die sich in ihren bloßen Unterarm grub. Der Schock der Erkenntnis unterbrach ihren Schmerz: Ihr Vater führte das Katana mit einem stoischen Ausdruck. Sie schrie, um ihn zum Aufhören zu bewegen, aber er schlug nur erneut auf ihren Arm ein.<br><br>Sie stürmte davon und rutschte auf dem blutverschmierten Boden aus. Sie stützte sich am Türrahmen ab und hievte sich hoch. Das Katana schlitzte durch die Wand und spaltete ihren anderen Arm. Sie schrie vor Schmerz auf, als sie in den Flur humpelte, wo sie schon von der Klinge ihres Vaters erwartet wurde.<br><br>Sie taumelte zitternd zurück, als sie das weiche, lose Fleisch ihres Bauchs festhielt. Vor ihren Augen tanzten Bilder der verstreuten Glieder ihrer Mutter.<br><br>Rin stürzte sich auf ihren Vater, was ihn zurückstolpern ließ. Er schlug ihr in den aufgeschlitzten Bauch und die Schmerzen warfen sie zu Boden. Sie versuchte, wieder auf die Füße zu kommen, aber er schlitzte ihren Oberschenkel auf, sodass sie auf dem Boden zusammenbrach.<br><br>Als sie zur Treppe kroch, packte er sie an den Haaren und schleuderte sie gegen eine Trennwand. Beim Aufprall barst das Glas. Sie fiel hindurch und landete ein Stockwerk tiefer.<br><br>Irgendwo über ihr hörte sie Schritte. Mühsam bewegte sie sich schlängelnd durch das Meer aus Glassplittern. Die Scherben bohrten sich in ihr Fleisch, rissen es auf. Er musste aufgehalten werden. Er würde nicht damit davonkommen, was er ihr angetan hatte – was er ihrer Mutter angetan hatte.<br><br>Als sie Blut hustete, schürfte sie sich ihr Kinn am Glas auf, wodurch sie noch mehr blutete. Ein tiefer Herzschlag begann in ihren Ohren widerzuhallen. Ihr Körper fühlte sich so schwer an, dass sie sich nicht weiterbewegen konnte.<br><br>Der Boden vibrierte unter den Schritten ihres Vaters. Sie wusste, dass sie es nicht schaffen würde, aber es machte ihr nichts mehr aus. Er würde bezahlen, in diesem Leben oder dem nächsten.<br><br>Ein dunkler Nebel legte sich langsam wie ein Schleier über ihre Augen, aber er konnte ihren Zorn nicht unterdrücken. Sie würde nicht ruhen – noch nicht. Die Dunkelheit flüsterte ein Versprechen von Blut und Rache.<br><br>Ein Schwur wurde abgelegt und Rin schloss ihre Augen.","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"Frank Morrison war neunzehn und hatte nichts vorzuweisen. Nachdem er wegen einer Tätlichkeit gegen einen Schiedsrichter aus dem Basketballteam geworfen wurde, ging er auch nicht mehr zur Schule. Doch Frank hatte Potenzial und konnte andere trotz seiner freudlosen Kindheit begeistern. Im Alter von sechs Jahren musste er Calgary hinter sich lassen und wurde zwischen Heimen herumgeschoben. Egal, wie oft er handgreiflich wurde, Wutanfälle hatte oder in Prügeleien geriet, er wurde immer wieder in neue, unbekannte Häuser verfrachtet. Zuletzt war er vor drei Jahren umgezogen, als ihn Clive Andrews, sein letzter Pflegevater, von der Adoptionsagentur abgeholt hatte. Nach einer siebenstündigen Autofahrt erreichten sie endlich einen kleinen Bungalow in Ormond. Das war die längste Zeit, die sie je zusammen verbracht hatten. Clive war nämlich vorrangig damit beschäftigt, seine Barbesuche mit den Schecks vom Jugendamt zu finanzieren.<br><br>Ormond war ein kleines, verschlafenes Nest. An diesem abgelegenen Ort mit sechstausend Einwohnern herrschte fast das ganze Jahr lang nur grauer Winter. Frank versuchte alles, um in eine neue Pflegefamilie zu kommen, doch als ein wunderschönes Mädchen auf ihn aufmerksam wurde, gab er dieses Vorhaben auf. Julie war ein allseits beliebtes Mädchen und davon überzeugt, ein besseres Leben als das in Ormond verdient zu haben, und der Außenseiter Frank schien ihr Ausweg aus allem zu sein. Frank besuchte ihre Partys, auf denen alle Gäste jünger als er und leicht zu beeindrucken waren, was ihm gut gefiel. So lernte er den impulsiven Joey, der gerne angab, sowie die schüchterne, naive Susie, die Julies beste Freundin war, kennen.<br><br>Gemeinsam verbrachten sie viel Zeit in einer verlassenen Hütte auf dem Mount Ormond. Ihre Treffen waren eine willkommene Abwechslung von der langweiligen Gleichförmigkeit ihres tristen, unbedeutenden Alltags. Frank erkannte darin die Gelegenheit, ihren Mangel an Erfahrung zu etwas Mächtigerem zu machen. Er plante Nächte voller Ausschweifungen und Randale, um ihre Grenzen auszuloten. Mobbing, Vandalismus und Diebstahl wurden zu ihren ganz normalen Wochenendbeschäftigungen. Irgendwann waren sie an einem Punkt angelangt, von dem an sie alles taten, was er verlangte. Wenn sie ihre Masken aufsetzten, war nichts mehr tabu. Eines Abends forderte Frank Joey heraus, den Laden zu verwüsten, der ihn vor Kurzem gefeuert hatte. Nach Ladenschluss war es ein Leichtes, sich hineinzuschleichen, da das Gebäude ja leer sein sollte. Doch ein Gebäudereiniger, der noch arbeitete, schnappte sich Julie, als sie in seine Nähe kam. Als er ihre unterdrückten Schreie hörte, überkam Frank ein dunkler Impuls. Mit dem Messer in der Hand eilte er ihr zur Hilfe und versenkte ohne zu zögern die Klinge im Rücken des Mannes.<br><br>Als die Gruppe Frank schockiert anstarrte, forderte er sie auf, die Sache zu Ende zu bringen. Joey biss die Zähne zusammen und stach dem blutenden Mann in die Rippen. Susie wollte es nicht tun. Da schrie Frank sie an, sie müssten zu Ende bringen, was sie begonnen hatten. Julie schloss die Augen und stieß das Messer in den Brustkorb des Mannes. Dann drückte sie Susie das triefende Messer in die Hand. Nun waren sie alle beteiligt. Susie starrte Julie ungläubig an, als Frank ihre zitternde Hand ergriff und das Messer tief in die Kehle des Mannes jagte. Frank wies die anderen an, schnell zu handeln. Sie wischten das Blut vom Boden auf, verstauten den Leichnam im Kofferraum von Joeys Auto und brausten zum Mount Ormond.<br><br>Alle vier gruben im matschigen Schnee, um den Leichnam zu verscharren, als Frank eine Bewegung im Wald wahrnahm. Er schnappte sich sein Messer und verließ die Gruppe, um nachzusehen. Der Nebel um Frank verdichtete sich, und schon bald konnte er nichts mehr sehen. Er folgte seinen Fußspuren zurück und entdeckte einen geheimnisvollen Weg. Er folgte dem schaurigen Pfad, als würde die Dunkelheit ihn rufen. Julie, Susie und Joe waren mit dem Graben fertig, doch Frank war verschwunden. Julie entdeckte seine Fußspuren im matschigen Schnee und alle drei folgten dem Pfad, der sie tiefer in den Wald hineinführte. Als Julie, Susie und Joey an diesem Abend nicht nach Hause kamen, nahmen ihre Eltern an, dass sie mit Frank durchgebrannt sein mussten. Jede Familie hatte ihre eigene Theorie. Die Stimmung in der Stadt schlug jedoch um, als bei einer verlassenen Hütte auf dem Mount Ormond eine Leiche gefunden wurde.","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"Im Alter von fünf Jahren wurde Adiris, die Jüngste einer siebenköpfigen Familie, auf der ziegelroten Treppe des Tempels der Reinigung im Zentrum von Babylon zurückgelassen. Um ihren Schock und ihre Trauer zu verarbeiten, hielt sie sich an dem Glauben fest, dass die Götter einen Plan für sie bereithielten. Ihr neues Leben war erfüllt mit stiller Dienstbarkeit. Sie pflegte die Gärten, bereitete zeremonielle Mahlzeiten vor und polierte die zeremoniellen Räucherfässer. Nachts betete sie für ein Zeichen, das ihr einen Sinn zeigen sollte.<br><br>Als sie erwachsen wurde, diente sie während der jährlichen Ehrenzeremonie für den Steinbock, den Gott des Wassers und der Schöpfung, den hochrangigen Priestern. Sie schwang ein Räucherfass entlang der Säulenhalle und verteilte schwarzen Rauch, der die aufragenden kalten Steinsäulen erreichte, bevor er sich auflöste. Ihre Sorgen verflogen, und die erreichte Glückseligkeit gab ihr das Gefühl, den Göttern näher zu sein als je zuvor. An jedem folgenden Tag leistete sie harte Knochenarbeit, erfüllte ihre Pflichten und übernahm neue, während sie die Priester bei Reinigungsritualen unterstützte.<br><br>Die Priester benötigten immer mehr Hilfe. Täglich wurden Reinigungen durchgeführt, um die Nachfrage von außerhalb der Tempelmauern zu befriedigen. Denn dort hatte sich eine katastrophale Seuche ausgebreitet. Innerhalb von Monaten raffte die Krankheit auch die Priester dahin. Es dauerte nicht lange, bis sie zu schwach wurden, um überhaupt irgendwelche Rituale durchzuführen. Adiris, die schon bei vielen Reinigungsritualen geholfen hatte, war die Einzige, die noch damit weitermachen konnte. Die aufkommende Panik musste unterdrückt werden, und wenn auch nur von einer Novizin.<br><br>Bange vor ihrer ersten Zeremonie besuchte Adiris das Sanktuarium der Priester. Als sie die Kerzen anzündete, bemerkte sie eine kleine Öffnung an der Rückseite. Sie schlüpfte durch den Spalt und erreichte eine unter dem Sanktuarium verborgene Krypta. Die Kammer war leer – bis auf die goldene Statue einer Frau, die aufrecht stehend ihre Hände ausstreckte, die Finger mit Juwelen bedeckt. Das war das Zeichen, auf das Adiris so lange gewartet hatte.<br><br>Die große Halle war voller Anhänger, die sich verneigten, als Adiris eintrat. Sie schritt zum Steinaltar und nahm einen aus Silber geschmiedeten Zeremoniendolch auf. Ihre mit Rubinringen geschmückten Finger schlossen sich wie Klauen um den Griff. Die plötzliche Zurschaustellung von Luxus faszinierte die Anhänger, die bereits von ihrer Jugend und Schönheit überwältigt waren.<br><br>Als sie begann, den Schöpfungsepos zu rezitieren, wurde eine Frau in den hinteren Reihen ohnmächtig und brach zusammen. Adiris eilte zu ihr hin und bemerkte die schwarzen Blasen an ihren Füßen. Ohne zu zögern griff Adiris nach ihrer heiligen Klinge und schnitt damit ihren eigenen Zeh ab. Den blutigen Zeh bot sie den Göttern dar und bat sie, die Frau zu beschützen. Stille überkam die Anhänger, die Adiris von da an als ihre neue Priesterin verehrten.<br><br>Die Geschichten von ihrem Reichtum, ihrer Schönheit und Hingabe verbreiteten sich in der Stadt ebenso schnell wie die Krankheit. Schon bald bezeichneten Adiris’ Anhänger sie als Hohepriesterin von Babylon.<br><br>Doch ihr Glaube wurde auf die Probe gestellt, als die ersten Anzeichen der Infektion bei ihr zu erkennen waren. Sie hustete Schleim und Blut, auf ihrem Hals zeigten sich Abszesse, und ihr Fuß mit dem fehlenden Zeh wurde dunkel. Sie schämte sich deswegen und trug von da an eine Kopfbedeckung mit Schleier sowie ein Räucherfass, das den üblen Gestank der Krankheit übertünchte, den ihre Haut verströmte. In der Hoffnung, selbst gerettet zu werden, führte sie weiterhin die Rituale durch und bot ihren Anhängern Weihwasser und Nahrung an.<br><br>Doch kein Ritual konnte sie retten. In einem verzweifelten Versuch, die Götter zu besänftigen, verbannte Adiris sich selbst aus der Stadt. Sie reiste mit einigen wenigen Anhängern nach Norden und durch die kalten Wälder von Urartu, bis kein Vorankommen mehr möglich war.<br><br>Sie schlugen ihr Lager in einer feuchten Höhle auf, wo Adiris in einer Lache aus Erbrochenem lag. Ihr Fuß war inzwischen völlig schwarz geworden und so sehr angeschwollen, dass sie nicht mehr gehen konnte. Ihre Anhänger und sie erkannten in der Höhle die Wahrheit: Sie waren alle von der Seuche infiziert.<br><br>Zwischen ihren würgenden Anhängern kniend, sprach Adiris ein letztes Gebet. Der schwarze Weihrauch stieg in die feuchte Luft auf, um anschließend von einem kalten Windzug davongeweht zu werden.<br><br>Weder Adiris’ Leiche noch die Leichen ihrer Anhänger wurden je gefunden. Es gab viele Geschichten von ihrer Rückkehr, aber niemand wusste wirklich, welches Schicksal die Hohepriesterin von Babylon ereilt hatte.","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"Danny Johnson, der einigen auch als Jed Olsen bekannt war, schnappte sich die Zeitung von der Küchentheke: Sie war schon eine Woche alt, aber sein Gesicht war auf der Titelseite zu sehen, unscharf und eingefallen. Es war einer dieser schwülen Nachmittage in Florida, wenn Hitze und Luftfeuchtigkeit alles in der Küche durchdrang. Das ließ ihn selbst dann schwitzen, wenn er sich nicht bewegte. Er machte es sich zum Lesen in einem klammen Sessel bequem. Wehe, dieser Artikel wäre nicht gut. Seine Arbeit in Roseville war herausragend.<br><br><i><b>GHOST FACE IN LUFT AUFGELÖST</b><br><br>18. Juni 1993<br><br>Auf den ersten Blick war Jed Olsen ein bescheidener und enthusiastischer Freiberufler mit Erfahrung bei verschiedensten kleinen Zeitungen. Die Belegschaft bei der Roseville Gazette war begeistert davon, wie locker und ehrlich er zu sein schien. Daher wurde er schon nach fünf Minuten in seinem Bewerbungsgespräch nicht mehr als Fremder betrachtet.<br><br>„Jed entdeckte schnell den Chefredakteur im Raum, begrüßte ihn mit einem breiten Lächeln sowie einem festen Handschlag und sprach über die guten alten Werte Amerikas. Und das war es dann, er wurde genommen.“ –Ehem. Mitarbeiter der Roseville Gazette<br><br>Olsen hatte nie seinen wechselhaften Weg gerechtfertigt, der durch viele Kleinstädte in Utah und Pennsylvania führte. Es gab auch keine Überprüfung seiner früheren Jobs. Er hatte ein ordentliches Portfolio sowie eine vernünftige Einstellung. Und sie brauchten dringend einen neuen Mitarbeiter.<br><br><b>DIE ROSEVILLE-MORDE</b><br><br>Olsen arbeitete bereits seit fünf Monaten bei der Zeitung, als die Roseville-Morde begannen: Es gab gleichermaßen junge wie alte Opfer, alle in ihren Wohnungen erstochen. Den Berichten nach schienen die Opfer willkürlich ausgewählt worden zu sein, und doch kannte sich der Killer in ihren Häusern aus. Die mehrfachen Stichwunden wiesen auf persönliche Motive hin. Es wurden keine DNA-Spuren gefunden. Die örtliche Polizei war bestürzt: Die Morde waren zwar alle mit einer Wut ausgeführt worden, die für ein Verbrechen aus Leidenschaft sprach, aber nichtsdestotrotz waren sie mit kaltem Vorsatz begangen worden.<br><br>Der Mörder verfolgte seine Ziele auch oft. Von zwei Opfern ist bekannt, dass sie wenige Tage vor ihrem Tod auf dem Weg nach Hause von einer dunklen Gestalt verfolgt wurden. Der Mörder war ihnen vom Walleyes, einer kleinen Bar im nördlichen Roseville, gefolgt und machte Fotos von ihnen in ihrem Zuhause, während er nach einem Weg hinein suchte. Er beobachtete die Opfer wochenlang und notierte minutiös ihre Gewohnheiten und Tagesabläufe. Wenn er den Drang verspürte, sie zu ermorden, suchte er das verwundbarste Opfer von seiner Liste auf und brach leise in dessen Haus ein.<br><br>Das gesamte Team arbeitete an der Story über den Roseville-Mörder. Olsen wurde oft geschickt, um die Familien der Opfer zu interviewen und offizielle Kommentare der Polizei weiterzugeben. Was damals noch niemand wusste: Die Tatsache, dass er in diesen Fall verwickelt war, erhöhte die Anzahl der Todesopfer noch mehr.<br><br><b>GHOST FACE</b><br><br>Panik breitete sich in Roseville aus, als Olsen Bildmaterial von einer Gestalt mit Kapuze anfertigte, die nachts in ein Haus einbrach. Das maskierte Gesicht, ein weißer Fleck in der Dunkelheit, blickte für eine Sekunde in die Kamera, bevor die Gestalt im Haus verschwand. Mit „Ghost Face auf Video festgehalten“ war der folgende, von Olsen geschriebene Artikel betitelt. Er schien derzeit stolz auf seine Arbeit zu sein und genoss es, wie sehr die ganze Stadt seine Geistergeschichten fürchtete.<br><br>Wochen später verschwand Olsen und ließ auf seinem Schreibtisch eine Nachricht zurück:<br><br>„Ich hoffe, meine Geschichten haben euch gefallen. Es hat mir viel Spaß gemacht, ihnen Leben einzuhauchen. Keine Sorge, ich bin noch nicht fertig.“ –Jed Olsen<br><br><i>Die Polizei von Roseville weigert sich noch immer, das zu kommentieren, da Jed Olsen flüchtig ist.</i><br><br>Danny lächelte und riss den Artikel aus der Zeitung heraus. Als die Untersuchungen zu ihm führten, hatte er schnell seine Sachen gepackt und Roseville verlassen.<br><br>Er stand auf, das klamme Leder klebte an seiner Haut. Eine bedrückende Feuchtigkeit umgab ihn, als er das Schlafzimmer betrat. Kondenswasser lief an einem kleinen, beschlagenen Fenster herab, während Teile der Tapete schlaff herabhingen. Das Blumenmuster darauf war mit grauenvollen Fotos und Schlagzeilen aus Zeitungen bedeckt. Den eine Woche alten Artikel pinnte Danny über ein Bild von abgerissenen Skalpen. Ein schwacher Hungeranfall überfiel ihn, und er fragte sich, wann er zuletzt gegessen hatte. War es am Morgen, während er sein Messer und seine Kleidung gewaschen hatte? Oder gestern Abend, nachdem er dem Mädchen die Straße entlang gefolgt war? Er konnte sich nicht so recht erinnern.<br><br>Dann trat er einen Schritt zurück und bewunderte seine Arbeit an der Wand. Seine Gedanken schweiften ab, er erinnerte sich an all die Artikel, die er geschrieben, die Storys, die er geplant und die Szenen, die er zum Leben erweckt hatte.<br><br>Er erschauerte. Eine kühle Brise verwandelte die feuchte Luft des Schlafzimmers in einen undurchsichtigen, eiskalten Nebel. Eine Frau schrie. Totes Laub knirschte unter seinen Füßen.<br><br>Er lächelte voller Vorfreude. ","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"Ein Gesicht, das nur aus einem Maul voller nadelartiger Zähne besteht, sowie große, gebogene und extrem scharfe Klauen. Dazu kräftige Beine, um Opfer anzuspringen: Das macht den Demogorgon in jeder Dimension zu einem angsteinflößenden Monster. Er ist ein Albtraum voller ungezügelter Wut, der seine Beute jagt und in Stücke reißt. Jedes kleinste bisschen Fleisch und Eingeweide wird verschlungen, für die Aasfresser bleibt nichts übrig. Das Wesen kennt keine Leidenschaft und keine Hemmungen. Während es über seinem Opfer steht, sind weder Zweifel noch Gnade zu erkennen – lediglich dieser unersättliche Blutrausch, der es zum Todesschlag ausholen lässt. Der Demogorgon ist ein perfekter Jäger und ein makabrer Beleg für die Schrecken der anderen Seite. Genau darum hat der Entitus ihn ausgewählt.","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"Seinem Familiennamen Ehre zu machen, hatte Kazan Yamaoka nie gereicht. Er wollte den Ruf seines Vaters übertreffen und das beenden, was er als Ausdünnung der Samuraikultur betrachtete, da Bauern sich oft als Samurai ausgaben. Sein Vater hatte versucht, Kazans Aufmerksamkeit auf edlere Beschäftigungen zu richten, aber Kazan wollte nicht auf seinen Rat hören, borgte sich das Katana seines Vaters und begab sich auf eine finstere Pilgerreise, um seinen Wert unter Beweis zu stellen und Japan von den Hochstaplern zu befreien. Kazan ignorierte den Ehrenkodex, der ihm beigebracht worden war, und tötete Hochstapler auf den Hügeln, in den Tälern, an den Stränden und in den Wäldern. Seine Morde waren brutal, grausam und makaber. Er demütigte Bauern und Krieger gleichermaßen, riss ihnen die Haarknoten ab und die Rüstung vom Leib. Sein Zorn, sein Blutrausch und sein perverser Sinn für Ehre kannten keine Grenzen. Die Mönche nahmen an, er sei von etwas Dunklem und Außerweltlichem besessen und verfluchten ihn. Ein edler Fürst taufte ihn „Oni-Yamaoka“, den rachsüchtigen Samurai – eine Beleidigung sowohl für Kazan als auch für seine Familie.<br><br>Entschlossen, den Namen seiner Familie wieder zu rehabilitieren, schlachtete Kazan nun jeden ab, der es wagte, ihn Oni-Yamaoka zu nennen. Die Beleidigung verwirrte ihn. Er hatte die Besten besiegt und den Stand der Samurai bereinigt, indem er das Land von Hochstaplern befreit hatte. Wie konnte ihn also jemand als Oger bezeichnen? War es, weil er aufs Schlachtfeld hinausgezogen war und die wildesten Krieger niedergestreckt hatte? War es, weil er einen Kanabō genommen und Hunderte Schädel damit eingeschlagen hatte? Oder war es vielleicht, weil er immer eine Trophäe seiner Opfer mitgenommen hatte? Im Grunde war das egal. Als Oger bezeichnet zu werden, war mehr, als er ertragen konnte, und eine unheilvolle Stimme in seinem Kopf drängte ihn dazu, den Fürsten niederzustrecken, der seinen Namen besudelt hatte.<br><br>Als Kazan sich zur Stadt des Fürsten begab, stand ihm auf einem staubigen Pfad plötzlich ein Samurai gegenüber und versperrte ihm den Weg. Kazan machte seinen Kanabō bereit. Ohne ein Wort zu verlieren, griff der Samurai an und gewann schnell die Oberhand. Aber er zögerte. Mit einem vernichtenden Schlag zerbrach Kazan den Helm des Samurai und zerschmetterte seinen Schädel. Als Kazan sich dem gefallenen Samurai näherte, erblickte er das Gesicht seines Vaters und strauchelte zu Boden. Sein Vater blickte Kazan mit einer Mischung aus Scham und Reue an, während er sein Leben aushauchte. Kazan schloss seine Augen und schrie vor Schmerz, bis er nicht mehr konnte. Als er seine Augen wieder öffnete ... war sein Vater verschwunden. Er hatte nicht nur seinen Vater getötet, sondern auch noch zugelassen, dass Diebe seinen Leichnam mitnahmen, um die Rüstung zu plündern.<br><br>Verbittert, verloren und desillusioniert durchstreifte Kazan ziellos das Land, während die Stimme seines Vaters in seinem Kopf nachhallte, ihn verspottete, ihn an seine Fehler erinnerte, ihn immer wieder in eine unkontrollierte, schwarze Wut versetzte. Eines Tages, als er durch einen Wald ging, traf Kazan auf eine Oni-Statue. Er blieb stehen und verharrte lange Zeit regungslos. Die verwitterte und überwachsene Statue schien ihn lächerlich machen zu wollen, ihn zu beschuldigen, der Hochstapler-Samurai zu sein, den er so verzweifelt versucht hatte, zu vernichten. Kazan schüttelte die lachende Stimme aus seinem Kopf und erinnerte sich wieder an den Fürsten, der ihn als „Oni-Yamaoka“ bezeichnet und damit lächerlich gemacht hatte.<br><br>Mit frischem Zorn begab Kazan sich zu einer Stadt hoch in den schneebedeckten Bergen, wo der Fürst wohnte. Ein Dutzend Samurai fing Kazan an den Stadttoren ab. Ein Dutzend Samurai fiel seinem Kanabō zum Opfer. Seine Geschwindigkeit und seine Kraft waren unvergleichlich. Sein Zorn war unfassbar. Vor Blut und Innereien triefend, kämpfte sich Kazan durch die Stadt und fand bald den Fürsten, der sich in einer Villa versteckt hatte. Er zerrte ihn aus einem Schrank, durchtrennte seine Sehnen, um ihn unbeweglich zu machen, und sah ihn an, während er bettelte und winselte wie ein Hund. Ohne zu zögern rammte er dem Fürsten die Faust in den Mund und riss ihm die verdammte Zunge heraus, die seinen Namen entwürdigt hatte.<br><br>Zufrieden verließ Kazan die Villa, wo ihn Dutzende von Bauern erwarteten, die mit rostigen Sensen, spitzen Mistgabeln und schweren Knüppeln bewaffnet waren. Die ersten Angriffe überlebte er, aber es stürmten zu viele Angreifer aus allen Richtungen auf ihn ein. Innerhalb kürzester Zeit lag Kazan am Boden und starrte in einen kalten, gleichgültigen Himmel, der sich verdunkelte, während die Bauern unablässig auf ihn einstachen, um den „Oni“ zu foltern, der ihren geliebten Fürsten abgeschlachtet hatte. Der wilde Mob zerrte Kazan in eine kleine Steinmühle, um die Folter fortzusetzen, und überließ ihn letztendlich einem langsamen, qualvollen Tod. Als die Bauern zurückkehrten, war die Mühle mit einem seltsamen, schwarzen Nebel erfüllt, und Kazans Leichnam sowie sein Kanabō waren nirgends zu finden. Dies war der Anfang einer finsteren Legende über einen rachsüchtigen Oni, der die Stadt heimsuchte.","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"Caleb Quinn war im verstaubten Ödland des amerikanischen mittleren Westens geboren und Sohn von irischen Immigranten, die sich abmühen mussten, um zu überleben. Nahe der Front waren Krankheit, Hunger und Tod ein alltäglicher Anblick. Die Pioniere rangen um jeden Krümel, den sie in die Finger bekommen konnten, während die Tycoons ein Festmahl nach dem anderen abhielten. Calebs Vater, der früher Ingenieur war, hatte nur wenige Möglichkeiten, seinen Geschäften nachzugehen, da es überall hieß: „Iren nicht erwünscht“. Seine antiquierten Werkzeuge blieben jahrelang unberührt liegen, bis Caleb sie entdeckte. Als er das Interesse seines Sohnes an dem Gewerbe bemerkte, schenkte er ihm seinen alten Schraubenschlüssel. \\n\\nDie Geräte, die Caleb unter der Anleitung seines Vaters herstellte, fanden klassische Anwendungen. Doch als sein Vater fort war, nahm es eine üble Wendung. \\n\\nMit zunehmendem Alter wurden Calebs Ingenieursfähigkeiten marktfähiger, und die Arbeitgeber legten ihre Diskriminierung beiseite. Henry Bayshore, der Besitzer von United West Rail, stellte ihn ein. \\n\\nCalebs erste Erfindung war eine Waffe, die Schwellennägel in den Boden schoss. Als Nächstes baute er einen dampfbetriebenen Tunnelbohrer. Doch als Bayshore ihm Gleichgültigkeit vorgaukelte, tauchten die Geräte nach und nach bei anderen Unternehmen auf. Calebs Patente waren gestohlen und verkauft worden. \\n\\nEin vertrautes Gefühl strömte durch Calebs Adern und es nährte den stechenden Schmerz in seinem Herzen. Selbst jetzt kämpfte er um jeden Krümel, während die Reichen von seiner geistigen Arbeit profitierten. Als die Wut ihn übermannte, platzte er in Bayshores Büro und schlug sein Gesicht zu blutigen Brei. Als er fortgeschleift wurde, zog er seine Spezialwaffe, zielte auf den Bauch seines Bosses und drückte ab. Ein Schwellennagel durchbohrte Haut und Eingeweide – und nagelte Bayshore an seinem Schreibtisch fest. \\n\\nDas Einzige, was Caleb davor rettete, gehängt zu werden, war, dass Bayshore überraschend überlebte. Fünfzehn Jahre lang wurde Caleb in die Strafanstalt Hellshire eingesperrt. Sie war das erste private Gefängnis des Landes. In dieser Festung voller ungebildeter Verurteilter, fand er in dem gebildeten Gefängnisdirektor unerwartet einen Freund. Für ihn entwarf er Foltergeräte und erhielt im Gegenzug zusätzliche Mahlzeiten. Nach einer Weile bot der Direktor an, seine Strafe umzuwandeln. Es sprach von etwas, das mehr wert war als monetärer Reichtum: Politisches Kapital und, dass seine Verbindungen dafür sorgen würden, dass Bayshore zur Rechenschaft gezogen und lebenslang ins Gefängnis gebracht wird. Er hatte nur eine Bitte: Er sollte ihn reich machen. Das Gefängnis füllen. Seine Genialität dazu nutzen, Gesetzlose lebendig einzusperren. \\n\\nCaleb kehrte zu seiner Werkstatt zurück. Nach ein paar Modifikationen brachte er etwas Neues hervor: Die Harpune. Ihre erste Prüfung stand an, als ein Dieb eine chinesische Wäscherei ausraubte. Caleb nutzte die Gelegenheit und ließ seinen Prototyp von der Leine. Metallverbindungen kreischten, als der Pfeil abgeschossen wurde und sich in den Bauch des Ziels bohrte. Doch als er am Pfeil zerrte, riss dieser die Gedärme des Diebs mit einem hässlichen Geräusch heraus, sodass sie auf die dreckige Straße fielen. \\n\\nNach mehreren Überarbeitungen ließen die Ausweidungen nach. Der Gefängnisdirektor zog an einigen Strippen, und entließ einige irische Insassen, damit sie Calebs Gefolge bilden konnten. Die Hellshire-Bande war geboren. \\n\\nSechs Jahre lang zogen sie durch das Land und machten gesuchte Gesetzlose ausfindig, um sie ins Gefängnis zu bringen. Damit hielt Caleb seinen Teil der Abmachung ein. Nach einer blutigen Schlacht bei Glenvale fiel Calebs Blick auf die Schlagzeile einer Zeitung: Henry Bayshore kauft die Strafanstalt Hellshire. Auf einem Bild war zu sehen, wie ein entstellter Bayshore stolz die Hand des Direktors schüttelte. Calebs Herz schlug wie wild vor Wut, und sein Blut kochte, als würde es jeden Moment aus seinen Adern herausplatzen. Er war über den Tisch gezogen worden, ein Bauer im Spiel von reichen Leuten. \\n\\nDie Hellshire-Bande stand loyal hinter Caleb und forderte den Kopf des Direktors. In einer wilden Stampede platzten sie durch den Eingang des Gefängnisses und schrien wie blutrünstige Plünderer. Ein Wächter hob seine Pistole, zögerte jedoch. Ein Pfeil durchbohrte seine Brust. Caleb griff den Kopf des Mannes und knallte ihn gegen eine Gefängniszelle, bis er durch das Gitter spritzte. \\n\\nAls er das Büro des Gefängnisdirektors erreichte, trat Caleb die Tür auf und erfreute sich an dem Anblick: Nicht nur der Direktor kauerte in einer Ecke, sondern Henry Bayshore ebenfalls. Vom Zorn übermannt, griff Caleb, Bayshore an, schlug auf ihn ein und riss an seinem Fleisch. Blut tropfte dem Mann vom Gesicht und sammelte sich in Pfützen zu seinen Füßen. Danach schnappte die Hellshire-Bande sich den Direktor und brach ihm mit Tritten sämtliche Knochen. \\n\\nAls die zwei gebrochenen Männer darum bettelten, erlöst zu werden, zerrte die Bande sie zu den Insassen, von denen sich immer mehr versammelten. \\n\\nIn Blut und Schweiß gebadet hinkte Caleb zu seiner alten Zelle und schenkte Bayshores Schreien dabei kaum Beachtung. Er setzte sich auf die Bettkante, und Blut troff von seinen Fingerspitzen. Ein dichter, unnatürlicher Nebel strömte durch das vergitterte Fenster. Er zog seinen alten Schraubenschlüssel hervor, rostig und mit Rissen durchzogen, und strich mit dem Daumen über das Metall. Sein Blick verdunkelte sich. Er konnte sich nicht erinnern, seit wann er in seinem Besitz war. Es war ihm auch egal. Vor seinen Füßen sah er einen staubigen Pfad, und an dessen Ende, Silhouetten von allen, die ihn schlecht behandelt hatten: Die Jungs, die ihn drangsaliert hatten, die Bosse, die ihn ausgenutzt hatten, und auch hier ... Henry Bayshore. Aus dem Nebel erschienen die Werkzeuge, die er brauchte, um sie zu beseitigen: Gnadenlose Stahlhaken, brillant und wunderschön in ihrer Einfachheit. Ein Schmerz zog durch sein Bein, als er aufstand, doch er hielt ihn aus, ging vorwärts, entlang des dreckigen Weges und hierließ eine Spur aus Blut. ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"Pyramidenkopf ist ein sadistischer und gnadenloser Henker, der darauf fixiert ist, mit Schmerz zu bestrafen. Mit einem Stahlrahmen auf seinem Kopf und einer gewaltigen Klinge in der Hand ist er schon durch die höllischen Korridore von Silent Hill gelaufen und hat sich einer Pflicht verschrieben, die niemand wirklich verstand. Wo er ging, flohen sogar die Monster aus den Schatten. Und jene, die ihm in die Quere gerieten, fielen seinen hemmungslosen Aggressionen zum Opfer. Als sein Dienst beendet war und er nicht mehr gebraucht wurde, machte er sich für eine lange Ruhepause bereit. Und doch wurden seine Fähigkeiten andernorts benötigt. Der Nebel der ihn umströmte, war irgendwie anders als alles, woran er in Silent Hill gewöhnt gewesen war. Als ob jeder Hauch die Nerven eines Lebewesens beinhaltete, das nach ihm suchte. In diesem Moment gab es eine unausgesprochene Übereinkunft. Die wogende Wolke war eine Einladung zu Pflicht und Sadismus. Und Pyramidenkopf machte einen Schritt in diesen Nebel und nahm seine Verpflichtung wieder an. ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"Um den Zustand des Menschen zu verstehen, muss man sich über ihn erheben. Das war das Credo von Talbot Grimes, einem schottischen Chemiker, dessen ungebremste Ambitionen ihn in schwindelnde Höhen führten. Als kleiner Junge war er sehr beliebt – schlau, charismatisch und furchtlos, die Autoritäten herauszufordern – doch trotz seiner sozialen Verbindungen war er extrem unabhängig und verbrachte einen Großteil seiner Zeit damit, alleine die ausgedehnten Felder rund um seine Heimatstadt zu erkunden. Was als kindliche Neugier begann, endete fast im Tod, als er mit giftigem Fingerhut experimentierte. Tagelang musste er im Bett bleiben, war in Schweiß gebadet und gab jegliches Essen, das in seinen Magen gelang, wieder von sich. Als er wieder gesund wurde, war es nicht die Angst, die ihn packte, sondern die Faszination. Es lag für ihn etwas Magisches darin, wie eine einzelne Blume sich so drastisch auf ihn auswirken konnte.<br><br>Als er erwachsen war, entwickelten sich seine Ambitionen ebenso schnell wie seine fragwürdigen Methoden. Er besuchte die London School of Medicine und erhielt trotz einiger Verweise mehrere Auszeichnungen. Seine Bereitschaft, sich alles abzuverlangen, brachte ihm eine gute Position bei der Britischen Ostindien-Kompanie ein und innerhalb von sieben Jahren wurde er dort zum Chef-Chemiker ernannt. In dieser Zeit erreichte er eine seiner größten Errungenschaften: Eine Chemikalie, welche die Produktivität eines Arbeiters erhöhen, seinen Bedarf an Ruhepausen aber verringern konnte. Dafür wurde er mit einem Geheimlabor unter einem Gefangenenlager auf Dyer Island belohnt.<br><br>Dort, vor der Küste Indiens wurden Gefangene des Opiumkrieges zu seinen unfreiwilligen Subjekten, deren Einsatz dazu führte, dass er eine Droge entwickeln konnte, die es Soldaten ermöglichte, unglaublich starke Schmerzen auszuhalten. Auch wenn die meisten Nebenwirkungen nur gering waren, gab es Gerüchte, dass eine kleine Anzahl Soldaten durchgedreht sei. In Zuständen der Raserei massakrierten sie ganze Dörfer, spießten die Einwohner auf Bajonetten auf und ließen sie von Bäumen herabhängen. Zu diesem Thema gab es keine offiziellen Berichte, und Talbot lehnte es ab, sich selbst die Schuld für etwas zu geben, was seiner Ansicht nach nur übertriebene Kriegsgeschichten sein konnten.<br><br>Obwohl seine gefühllose Brillanz unerschütterlich zu sein schien, ignorierte er die Feinde, die er mit seiner fragwürdigen Arbeit angehäuft hatte. Die Erkenntnis traf ihn fast buchstäblich: Mit einem Stahlrohr gegen seinen Hinterkopf, als er nach Mangalore reiste. Er wurde gefesselt und in einen Wagen geladen. Als man ihm die Augenbinde abnahm, zeigte ein kränklicher Mann ihm ein Massengrab mit Hunderten Leichen. Talbot hatte bis dahin nicht gewusst, dass seine produktivitätssteigernde Droge bereits fast eine ganze Fabrik voll an Arbeitern getötet hatte. Im war sofort klar, dass er sich nicht gegen Wut und Beschuldigungen seines Entführers wehren konnte. Alles, was er tun konnte, war, sich zusammenzurollen, während die Schläge mit dem Stahlrohr auf ihn niedergingen. Sein Körper wurde in das Grab gestoßen und zum Sterben zurückgelassen. Im ständigen Wechsel zwischen Bewusstsein und finsterstem Schwarz kroch er umher, um einen Fluchtweg zu finden, wobei seine Finger in verwesendem Fleisch versanken. Schwarze Fliegen labten sich an seiner unbedeckten Haut und er spürte sie wie hundert Nadelstiche. Als er zusammenbrach, lag er von Angesicht zu Angesicht mit den haselnussbraunen Augen einer toten Frau. Er war zu schwach, um sich von dort wegzubewegen, daher blieb ihm nichts anderes, als sein Lebenswerk zu betrachten.<br><br>Doch dann wurde er vom Rande des Todes wieder zurückgeholt. Er fand sich auf einem kleinen Bett wieder, ein freundliches und faltiges Gesicht blickte ihn an. Mit jedem schmerzerfüllten Atemzug wurde er in einer alten Geheimschule, die sich nach außen hin als Kloster präsentierte, wieder gesund gepflegt. In grünen Gärten hinter hohen und unaufdringlichen Mauern studierten Mönche verbotene Schriften in dem Bemühen, den menschlichen Geist auf der Suche nach anderen Dimensionen zu erweitern. Sie glaubten daran, dass alle miteinander verbunden seien.<br><br>Talbots Wissen erwies sich als unentbehrlich, seine den Verstand verändernden Chemikalien passten nahtlos zu den Theorien der neuralen Erweiterung. Er begriff dann, dass seine Rettung kein Zufall gewesen war. Er wurde aus der Grube gezerrt, um insbesondere zum Wissen der Schule beizutragen. Er erklärte sich einverstanden zu helfen, bis er genesen war, und wurde mit der Erforschung einer Sache beauftragt, die von den Mönchen als „Seelenchemikalie“ bezeichnet wurde – einem Präparat, das aus der Epiphyse gewonnen wurde und das innere Auge des menschlichen Geistes öffnen konnte. Was als Gefallen für seine Retter begann, wurde schon bald zu einer Besessenheit seinerseits. Er durchstöberte die Schularchive voller verlorener Schriften, entdeckte wissenschaftliche Formeln, die zuvor undenkbare Ideen bestätigten. Er träumte davon, die Menschheit in eine neue Epoche der Erleuchtung zu führen. Vielleicht würde das dabei helfen, die Albträume von Hunderten toten Fabrikarbeitern – und zwei haselnussbraunen Augen – verblassen zu lassen.<br><br>Als er kurz vor dem Durchbruch stand, veränderte sich das Auftreten der Mönche. Zu ihrem sanften Lächeln gesellten sich nun unruhige Blicke, die schnell auswichen, wenn er sie bemerkte. Die höflichen Gespräche, an denen er sonst beteiligt gewesen war, wurden zu heimlichem Geflüster. Das Letzte, was er von der Schule sah, waren die Risse in der Zimmerdecke über seinem Bett, die sich wie Dendriten durch Gips verästelten.<br><br>Seine nächsten Erinnerungen waren ein zerschlagenes Mosaik aus Bildern und Empfindungen. Verwischte Lichter, Pferdehufe auf Pflastersteinen, raue Jute, die an seinen Wangen kratzte sowie unangenehme Stiche in seinem Arm. Er erwachte mit zerzausten Haaren und ungewaschen auf der Strohmatratze einer Opiumhöhle. Sein Geist war in dichtem Nebel versunken und sein erster Gedanke galt seinen Notizen – die einzigen Aufzeichnungen seiner bahnbrechenden Enthüllungen. Wild umherkriechend durchsuchte er den schäbigen Keller und bat dabei laut um Hilfe. Die anderen Insassen blickten von ihren Hängematten auf und hatten lediglich von Drogen vernebelte Augen sowie apathische Blicke, die schnell in einen Halbschlaf übergingen, für ihn übrig. Bevor er bemerkte, dass die in Roben gekleidete Person hinter ihm erschien, bohrte sich eine Nadel in seinen Arm, und die Welt verschwand erneut.<br><br>Aufgewacht. Wieder einmal. Jedes Mal benebelter als zuvor. Mit seiner Zunge ertastete er Lücken zwischen seinen Zähnen. Wie lange, fragte er sich. Eine schwache Erinnerung kehrte zurück. Die Seelenchemikalie. Seine Notizen. Kurz vor dem Durchbruch. Ein fernes Flüstern drang in seinen Geist.<br><br>Er fummelte an einem Stein herum, schärfte ihn mit zitternden Händen. Im gedämpften Licht der Höhle, unter all den katatonischen Besuchern ritzte er die Forschung aus seiner Erinnerung an die Wände. Er schrieb stundenlang, bis seine Finger bluteten, bewegte sich zum Boden hin, nahm alles auf, was die Stimme flüsterte, auch wenn er es nicht verstand. Als kein Platz mehr zum Schreiben war, ergriff er den Stein und ritzte die Nachricht in seine Brust. Blutüberströmt erlebte er, wie vor ihm ein Wunder geschah: Ein wunderschönes Feld aus üppigen orangen Blumen erschien. Die flüsternde Stimme flehte ihn an, das Feld zu betreten und Welten und Dimensionen zu entdecken, die jenseits der menschlichen Vorstellungskraft lagen. Einen Augenblick lang empfand Talbot das Gefühl der Neugier, wie er es als Kind besessen hatte.<br><br>Die Besucher der Opiumhöhle erwachten in Stille. Der trockene Duft von Rauch lag noch in der Luft. Als sie sich aus ihrem Drogennebel befreiten, fanden sie den Boden voller Blut; winzige Rinnsale flossen durch die Ritzen. Als die Augen sich an den dunklen Raum gewöhnt hatten, erschienen nach und nach die groben Buchstaben an den Wänden. Wieder und wieder – und ohne Ende – stand dort nur eine Zeile geschrieben: <i>Der Tod ist erst der Anfang</i>. ","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"Charlotte und Victor Deshayes sind siamesische Zwillinge, die eine emotionale Verbindung aufgebaut haben wie sonst niemand. Die Unwahrscheinlichkeit ihrer erfolgreichen Geburt im 17. Jahrhundert könnte als Wunder beschrieben werden, doch ihr Leben in Verfolgung begann damit sofort. Die Zwillinge kamen mit Victors Unterkörper am Brustkorb seiner Schwester verwachsen zur Welt. Seine Beine waren um ihre Muskeln und Organe gewunden. Er war kleiner als Charlotte und so gewachsen, als sei er ein Fortsatz ihres Körpers anstatt ein voll ausgebildeter Junge. Als die Neugeborenen schrien, tat es die Hebamme, die sie geholt hatte, ihnen gleich. Sie rannte aus dem Haus und schrie von einem Dämon, der von einer Hexe zur Welt gebracht worden sei. Und so begann die Jagd auf Charlotte, Victor und ihre Mutter Madeleine.<br><br>Die folgenden Jahre waren flüchtige Erinnerungen für die Zwillinge, und doch waren sie das, was sie am ehesten als normales Leben beschreiben würden. Sie glaubten, dass alle Kinder eine solche Reise mit ihrer Mutter unternahmen. Die Lauf- und Versteckspiele in Frankreichs Hinterland waren für sie völlig normal. Im Alter von fünf Jahren kam noch eine weitere Herausforderung zu den Spielen hinzu: Ihre Mutter erkrankte. Blass und erschöpft hatte Madeleine keine andere Wahl, als die Verantwortung der Nahrungsbeschaffung an Charlotte weiterzugeben. Das Mädchen brach mit der Last der zusätzlichen Kleidung, unter der Victors hervorstehender Körper verborgen war, von ihrem Zelt im Wald auf und marschierte zur nächstgelegenen Stadt. Sie stellte zwar einen ungewöhnlichen Anblick dar, aber sie tat, was sie gelernt hatte: auf eine Lücke im Marktgedränge warten und alles Essen abgreifen, das sie erwischen konnte. Dieses Spiel endete für sie zwar in einem Sieg, doch dieser war nur von kurzer Dauer.<br><br>Nach Mitternacht war das Lager der kleinen Familie von leuchtenden Flammen eingekreist, die durch die Dunkelheit flackerten. Ein einzelner Schrei im Befehlston durchbrach die Still der Nacht, und ein Mob aus Hexenjägern strömte herbei. Schmutzige Hände rissen die Zwillinge aus ihrem Bett. Charlotte trat wild nach allen Personen, die sich ihr näherten. Madeleine rief nach ihren Kindern, doch ihre Stimme wurde von einem Knüppel gegen ihren Kopf augenblicklich zum Schweigen gebracht. Victor kreischte – es war das Klagen einer gefangenen Ratte.<br><br>Die Jäger organisierten sich schnell. Ein Richter, der anwesend war, sprach Madeleine der Hexerei schuldig. Als Beweis diente ihre Dämonenbrut. Innerhalb von Minuten fesselten sie ihren bewusstlosen Körper an einen Baum und legten trockene Zweige und trockenes Moos um ihre Füße. Als sie erwachte, kämpfte sie nicht, sondern bat lediglich ihre Kinder, wegzuschauen. Ihnen wurde aber keine Wahl gelassen. Die Zwillinge wurden gezwungen, hinzusehen, als die Fackel angezündet wurde. Und sie mussten hinsehen, als die Flammen den Rock ihrer Mutter erfassten und ihr Fleisch versengten und verkohlten. Sie sahen zu, als Fett von ihrem Körper troff, wie ihr Gesicht Blasen schlug und sich verformte. Sie sahen zu, bis die Schreie, die ihre Stimmbänder zerrissen, aufhörten. Alles, was übrig blieb, war das Knistern der Glut sowie ein ekelerregender Gestank.<br><br>Jegliche Freude und Güte, die sie noch in sich hatten, starb mit ihrer Mutter. In einem Käfig wurden sie zu einem alten Holztempel gebracht und an eine geheimnisvolle Gruppe von Personen verkauft, die in dunkle Mäntel gehüllt waren. Victor reagierte mit der Wildheit eines tollwütigen Tieres, dem man sich nähert. Er schlug um sich und biss zu. Das Einzige, was ihn tröstete, war die Umarmung seiner Schwester. Charlotte fand bei all der Bitterkeit und des Hasses gegenüber ihrem Bruder eine neue Aufgabe darin, ihn zu beschützen.<br><br>In diesem Tempel waren sie jahrelang ungewöhnlichen Experimenten ausgesetzt – manche davon grausam, manche einfach nur unergründlich. Eines Tages sollten sie das Genick eines kleinen grauen Vogels brechen. Am nächsten Tag mussten sie Blut aus ihren Fingern in eine Vase voller Rosen tropfen lassen. An jedem siebten Tag mussten mit dem feuchten Ast einer Eiche unter ihrem Kopfkissen schlafen. Und dann war da noch der Gesang: ein nicht enden wollender Refrain von in Mäntel gehüllten Gestalten, der in regelmäßigen Abständen wiederholt wurde.<br><br>Nach einer Weile wurde ein letztes Experiment geplant. Zwei Gestalten in Roben trieben die Zwillinge ins Zentrum des Tempels. Dort wurde Charlotte in einem von Kerzen erhellten Raum auf einen Altar gehoben. Ein Mann blickte mit faltigem Gesicht unter seiner Kapuze hervor, legte je eine Hand auf die Stirn der beiden Zwillinge und untersuchte vorsichtig ihre Schädel. „Memento Mori“, sagte er und zog anschließend eine glänzende Klinge hervor.<br><br>Charlotte rollte zur Seite und schob ihren Bruder vom Altar herunter. Mit einem Schrei streckte er seinen Arm aus, so weit er konnte, und stieß einen Kerzenhalter zu Boden. Die Flammen griffen sofort auf das trockene Holz über. Sie fegten über den Boden und setzten die schwarzen Roben in Brand, die darüber schliffen. Todesschreie durchbohrten das Chaos und gaben Charlotte neue Kraft. Sie sprintete durch das Inferno, während ihr Blick von nichts als schwarzem Rauch und sengenden Flammen versperrt war. Eine schmerzhafte Schwere füllte ihre Lungen. Es war kein Ausgang zu finden. Jeder weitere Schritt führte nur in eine überwältigende Hitze. Sie fiel auf ihre Knie, rang nach Luft und sah dann … Sonnenlicht und Bäume. Sie stolperte von dem Feuer ins taufeuchte Gras. Ohne zurückzublicken, rannte sie in den Wald hinein und weiter – bis sie zusammenbrach.<br><br>Als Charlotte ihre Augen öffnete, griff sie nach Victors Hand. Er bewegte sich kein Stück. Sein Körper hing hilflos von ihrem Torso herunter. Sie klatsche ihm leicht ins Gesicht, blickte in seine traurigen, stummen Augen. Die Bewegungen, an die sie gewöhnt war – sein Körper, der an ihrer Haut zog, seine Beine, die gegen ihren Brustkorb drückten – hatten aufgehört. Victor war tot.<br><br>Charlotte hatte keine andere Wahl, als weiterzugehen, während sie trauerte, denn sie fürchtete, dass sie auf schwarze Mäntel und Hexenjäger stoßen könnte. Sie verbarg den Körper ihres Bruders unter ihrer Kleidung und marschierte zur Kanalisation einer nahegelegenen Stadt. Dort schlug sie ihr Lager auf, und ging oft los, um Lebensmittel zu stehlen. Wenn sie besonders verzweifelt war, nahm sie sich sogar die Kleie aus einem Schweinestall. Im Laufe der Jahre verging Victors Leichnam, seine Gliedmaßen trieften vor Eiter und wurden schwarz, doch sein Körper demonstrierte großen Widerstand, was die Verwesung insgesamt betraf. Es war, als ob das Blut seiner Schwester noch immer durch ihn strömte. Der Schutz seines leblosen Körpers wurde Charlottes einziger Lebenszweck. Sie weigerte sich, sich von dem letzten Familienmitglied zu trennen, das ihr noch geblieben war.<br><br>Das Leben in ihren Teenager-Jahren war ein Spiel des Überlebens. Ihr Hass auf die Menschheit wuchs mit jedem Tag, an dem sie mehr begriff, dass man sie nie in Ruhe lassen würde. Egal, wie viele bei ihren verbockten Raubzügen und verzweifelten Fluchtversuchen starben: Es gab immer noch mehr Menschen, die sie verfolgten und mit Worten der Verdammung beschimpften – Monster, Dämon, Hexe. Die schlimmsten davon waren die schwarzen Mäntel. Ihre Jagd nahm kein Ende, und sie war gezwungen, ständig Deckung zu suchen und später wieder zu flüchten.<br><br>Jahrelang war Charlotte auf der Flucht, sorgte aus purer Notwendigkeit für böses Blut und hielt in der Nacht ihren toten Bruder. Während eines eisigen Winters begann ihr Körper, aufzugeben. Die Nahrung war knapp, und die klapprigen Scheunen, in die sie sich zurückzog, konnten gegen die eisigen Temperaturen nichts ausrichten. Mit einer Sichel in der Hand saß sie an einem Lagerfeuer im Wald. Nie wusste sie, ob die schwarzen Mäntel sie noch vor der Kälte holen würden. Als sich an ihren Nasenflügeln Eis bildete, spürte Charlotte etwas, das sie noch nicht kannte: Resignation. Sie schloss ihre Augen und ergab sich der Ruhe des Todes … als plötzlich ein schriller und wilder Schrei in ihren Ohren erklang. Victor zuckte und schlug an ihrem Brustkorb wild um sich. Eine Nebelwolke umhüllte ihn. Noch bevor sie reagieren konnte, fiel er in einer blutigen Pfütze von ihr ab, landete im Schnee und lief davon.<br><br>Sich selbst vom Rande des Todes fortreißend, nahm sie die Verfolgung auf. Sie rief seinen Namen, rannte durch den Wald, bis ihre Beine sie kaum noch tragen konnten – bis sie endlich Victor sah, der am Rande eines dichten Nebels saß. Sein Gesicht sah verzerrt und wild aus. Er schrie, als eine Gestalt in dunklem Kapuzenmantel aus dem Nebel hervortrat, seinen Arm griff und ihn hochhob. Die Ruhe, die sich in Charlotte breitgemacht hatte, war verschwunden und durch brennenden Hass und Zorn ersetzt worden, die schon so lange in ihr schwelten. Ihre Sichel fest im Griff, stürmte sie in den Nebel und war bereit, jeden auszulöschen, der sich ihrem Bruder auch nur näherte.","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"Ji-Woon Hak genoss die Aufmerksamkeit anderer. Jedes Auge, das ihn beobachtete, und jede Zunge, die seinen Namen sprach, gab ihm Energie. Bei all dem Prestige hatte er nur ein Verlangen: mehr. Selbst als Kind fand er Wege, um sich ein Publikum zu verschaffen. Im Restaurant seiner Familie lockte er die Gäste mit seinen Auftritten mit Wurfmessern. Naive Touristen glaubten, dass dies eine traditionelle südkoreanische Kunst war, und gaben gern ihr Geld aus, um sie zu sehen. Ji-Woons Vater gab die Einnahmen des Restaurants für Tanz- und Gesangsstunden für seinen Sohn aus und trieb ihn dazu, nach dem Ruhm zu streben, den sein Vater nie erreichen konnte.<br><br>Ji-Woon enttäuschte ihn nicht. Jahrelang präsentierte er sein Können unbedeutenden Leuten bei Talentshows, bis er den Weg zum Ruhm einschlug. Yun-Jin Lee, eine Produzentin bei Mightee One Entertainment, holte Ji-Woon in ihr Trainingsprogramm. Er zog in ein Wohnheim nach Seoul, wo er 14 Stunden am Tag zu einen Star geformt wurde, Bewegungen und Gesang lernte und die richtige Balance zwischen Selbstbewusstsein und Bescheidenheit beigebracht bekam.<br><br>Der Prozess war mühsam, aber er lohnte sich. Yun-Jin wählte Ji-Woon als Mitglied von NO SPIN aus, um eine kantige Energie in ihre Lieder zu bringen. Der Ruhm folgte fast sofort. Ji-Woon lebte in einem Dunst von Interviews und Bewunderung, und während der hektische Terminplan seine Bandmitglieder erschöpfte, fühlte er sich belebt. Jeder Tag bestätigte ihm, dass er besser war als die Mittelmäßigkeit, die die Gesellschaft ausspuckte.<br><br>Aber mit der Zeit schmeckte der Champagner fad. In den Gesichtern seiner Fans sah er durch fünf geteilte Freude und Neid, die auf seine Bandmitglieder verteilt waren. Die Bestätigung, die ihn erfüllt hatte, hinterließ nun ein verzweifeltes Verlangen nach mehr.<br><br>Ji-Woon versuchte, sich nichts anmerken zu lassen und spielte einen Charme vor, der schon lange unter Abscheu begraben worden war. Er nahm das neueste Album von NO SPIN mit seinen Kollegen auf und machte dabei keine Fehler. Nach einer langen Mittagspause kehrte er ins Studio zurück, um ein Geschenk zu entdecken, das ihm das Schicksal gemacht hatte. Der Geruch angesengter Kabel war unverkennbar. Er stürmte in den Kontrollraum, dessen Tür durch heruntergefallene Lautsprecher versperrt war. Auf der anderen Seite schlugen seine Bandmitglieder gegen die Tür und ihre Schreie wurden vom Knistern des Feuers untermalt.<br><br>Ji-Woon rief ihnen zu, stürmte zu den Lautsprechern, nahm einen und ... hielt inne. Er erstarrte. Jeder Atemzug war ein bewusster, wohlüberlegter Vorgang, der seine gesamte Aufmerksamkeit beanspruchte. Die Schreie waren kaum hörbar, bis er langsam zurückwich. Und da hörte er es. Sie schrien seinen Namen, während sie verbrannten. Sie flehten ihn an, sie zu retten. Ji-Woon! Ji-Woon! Ji-Woon Hak! So etwas Schönes hatte er noch nie gehört. Als die Feuerwehrmänner kamen, waren seine Tränen echt.<br><br>Ji-Woon wurde als tragische Figur gefeiert, ein Held, der vergeblich versucht hatte, seine Freunde zu retten. Yun-Jin führte ihn bei Interviews vor, bis es Zeit für ein neues Image war. Er wurde als Trickster wiedergeboren, ein Solokünstler, der seine eigenen Songs schrieb, und unter seinem wilden Äußeren ein weiches Herz verbarg. Aber fernab der Konzertbühnen und Fernsehauftritte wuchs etwas Dunkleres.<br><br>Er hatte es auf Alleinlebende abgesehen und suchte sie in der Nacht auf. Der erste war ein Musikstudent mit einer faszinierenden Stimme. Ji-Woon weckte ihn mit einem Schlag seines Baseballschlägers auf den Kopf auf, fesselte seine Arme und Beine und knebelte ihn mit einem Stofffetzen, den er auf seinen Mund klebte. Er folterte ihn stundenlang und sezierte ihn bei lebendigem Leib. Trotzdem fehlte etwas – ein Geräusch, eine Verbindung. Er wollte die wunderbare Stimme seines Opfers hören, als er seinen Bauch aufschnitt, aber er vernahm nur erstickte Schreie durch den Stoff.<br><br>Er lernte und passte sich an.<br><br>Opfer mussten entführt und zu einem verlassenen Gebäude gebracht werden, wo sie hemmungslos ihre Gefühle herausschreien konnten. Er machte Musik daraus, verletzte sie an den richtigen Stellen, um verschiedene Schreie und Gejaule zu erzeugen. Wenn man den Lendenmuskel durchbohrte, erhielt man ein langes, kehliges Wimmern. Wenn man die Halsschlagader aufschlitzte, erhielt man ein Geräusch, wie wenn eine Katze erwürgt wurde. In ihrem Leiden lag eine Ehrlichkeit. Ji-Woon nahm jede Sitzung auf, mischte sie ab und arbeitete sie in seine Lieder ein, hinter Schichten von Melodien versteckt.<br><br>Seine Arbeit erfüllte ihn mit Freude. Er hinterließ der Polizei Hinweise und drapierte eine Nerzboa von einem aktuellen Fotoshooting um den aufgeschlitzten Hals eines Opfers. Für seinen nächsten Mord entfernte er einem Mann dieselben Zähne, die einem Boxer in einem seiner Musikvideos fehlten. Bei einem besonders dreisten Schrei nach Aufmerksamkeit tötete er einen Fan, den er bei einem VIP-Treffen kennengelernt hatte, steckte ihm Diamantmanschettenknöpfe in die Augenhöhlen und schrieb mit Blut ICH HABE GOTT GESEHEN auf seine Brust. Jede Szene war ein umwerfendes Spektakel.<br><br>Musik und Morde – Ji-Woons Werk wurde weltweit diskutiert. Aber als Gewalt zu seiner bevorzugten Kunstrichtung wurde, riss seine Musikkarriere ab. Die Einnahmen sanken und die Manager von Mightee One machten ihn dafür verantwortlich. Yun-Jin verteidigte ihn mit professioneller Heftigkeit, aber sie wurde überstimmt. Es wurde beschlossen, dass Ji-Woon seine Lieder nicht mehr selbst produzieren könnte.<br><br>Die Entscheidung war niederschmetternd. Seine Lieder ließen echte Menschlichkeit mit Musik verschmelzen, aber die Manager lehnten alles ab, was nicht typisch und erwartbar war. Dann sollte es eben so sein. Wenn sie seine Kunst nicht verstanden, würde er sie darin einbauen, bis sie es taten. \\n\\nEr hatte drei Monate Zeit bis zu seinem privaten Auftritt vor den Vorstandsmitgliedern von Mightee One. Drei Monate, um sein Meisterwerk zu planen. Er gab einem Tierarzt obszöne Mengen Geld für Kanister mit Lachgas und bestach dann einen Bühnentechniker im privaten Saal von Mightee One, um Zugang zum Raum zu erhalten. Seine Berühmtheit bescherte ihm einen Vertrauensbonus, den keine gewöhnliche Person erhalten würde. Als die Show bereit war, strömte Gas in den Raum, in dem die Manager und Bühnenhelfer Ji-Woon erwarteten, der praktischerweise zu spät kam. \\n\\nBei seiner Ankunft lagen halbbewusstlose Körper auf ihren Sitzen oder krabbelten auf dem Boden. Er arbeitete schnell, fesselte alle und hielt nur inne, als er zu Yun-Jin kam – die Frau, die ihn aus einem Drecksloch geholt und ihn auf den Weg gebracht hatte, den er verdient hatte. Sie würde belohnt werden und exklusiven Zugang zum kommenden Wunderwerk erhalten. Selbst betäubt kämpfte sie. In ihr wütete ein Sturm, sie war viel stärker als die anderen. Er setzte sie als einzige Zuschauerin in einen Sessel und sorgte dafür, dass ihre Augen offen blieben. Die anderen wurden schluchzend und heulend auf die Bühne gebracht, wo sie ihren letzten Auftritt haben sollten. Mit einem verächtlichen Grinsen verpasste er ihren Gesichtern Make-up und richtete die Bühnenlichter auf sie. Sie wurden zu seinen Instrumenten. \\n\\nVon selbstproduzierten Melodien begleitet quälte er sie, bewegte sich anmutig von einem zu anderem und erschuf ein opernhaftes Crescendo aus ihren Schreien. Sie schrien, wimmerten, kreischten, weinten um ihre Lieben, flehten nach ihren Müttern. Es war ein grandioser Ausbruch der Emotionen; dessen, was es bedeutete, Mensch zu sein, und dabei waren alle Augen auf Ji-Woon gerichtet. \\n\\nEingeweide hingen von der Bühne, bis das letzte menschliche Instrument mit einem Wurf seines Messers verstummte und die Musik stoppte. Voller Schweiß und Blut wandte der erschöpfte Ji-Woon sich Yun-Jin zu und verbeugte sich. Die Show war vorbei. Er hatte Perfektion erreicht. Mit der Klinge in der Hand kam er auf Yun-Jin zu, bereit, vor dem Ende die letzten offenen Probleme zu lösen. Aber als er sie erreichte – \\n\\nder Nebel. \\n\\nWoher er kam, wusste er nicht, aber er waberte um ihn herum, feucht, kühl ... einladend. Er sah die große Bühne: Krankenhäuser und Tempel, Wälder und Schlachthäuser – eine ewige Ebene, mit rostigen Haken geschmückt, und mit Millionen Augen, die ihm zusehen, vor ihm fliehen und <i>ihn erleben</i> würden. Er musste nur annehmen, ein Werkzeug des Nebels werden und vor allem: sie zum Schreien bringen. \\n\\nZugabe!","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"Nemesis wurde von der Umbrella Corporation erschaffen und ist eine fast unaufhaltbare, bioorganische Waffe, die darauf fixiert ist, ihre Ziele zu verfolgen und zu eliminieren. Als Teil der Tyrant-T-103-Reihe verfügt dieses Exemplar dank des implantierten NE-α-Parasiten über erhöhte Intelligenz und ein geschärftes Bewusstsein. Als seine erste Mission wurde Nemesis auf Raccoon City losgelassen, wo er ein einziges Ziel hatte: alle S.T.A.R.S.-Mitglieder auszulöschen. Nemesis kämpfte mehrmals gegen Jill Valentine, und auch wenn diese entkommen konnte, war Nemesis ihr stets auf den Fersen. Als er sein Opfer fast erreicht hatte, senkte sich ein seltsamer Nebel über ihn und vermischte sich mit dem Rauch einer Stadt, die im Chaos versank. Dieses Phänomen kümmerte ihn nicht. Die Eiseskälte und der verringerte Sauerstoffgehalt stellten für Nemesis keine Gefahr dar. Es zählte einzig und allein, die Mission im Nebel fortzusetzen: S.T.A.R.S. finden, S.T.A.R.S. auslöschen und alle töten, die im Weg sind.","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/de/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Ein kraftvoller und brutaler letzter Atemzug, gestohlen von Patrick Spencer, dem Leiter der Crotus-Prenn-Anstalt. Die Krankenschwester macht sich seine Energie zunutze, um mehrmals hintereinander schnell durch die Geisterwelt zu springen. Dadurch leidet sie an Ermüdung.<br><li>Gewährt die Teleportation.</li><li>Gewährt <b>1</b> zusätzliche Mehrfach-Teleportation.</li>","name":"Spencers letzter Atem","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"Ein großes Tellereisen aus Stahl. Diese Fallen liegen überall im Gebiet verteilt. Sie können aufgehoben und beliebig platziert werden.<br><br><b>BÄRENFALLE</b><br>Du beginnst die Prüfung standardmäßig mit <b>1 Bärenfalle</b>. Weitere kannst du in der Umgebung finden und einsammeln.<br><b>Bärenfalle legen:</b><br>Drücke und halte die <i>Stärketaste</i>, um eine <b>Bärenfalle</b> an einer geeigneten Position vor dir zu legen. Eine gelegte <b>Bärenfalle</b> macht einen Spieler, der in sie hineintritt, bewegungs- und handlungsunfähig. Ein gesunder Überlebender, der in eine gelegte <b>Bärenfalle</b> tappt, wird außerdem verletzt, kann aber versuchen, der Falle zu entkommen. Drücke die <i>Interaktionstaste</i>, um einen Überlebenden aufzunehmen, der von einer <b>Bärenfalle</b> handlungsunfähig gemacht wurde.<br><b>Falle zurücksetzen:</b><br>Drücke und halte die <i>Stärketaste</i>, während du neben einer <b>Bärenfalle</b> stehst, die in der Umgebung liegt, um sie an Ort und Stelle zurückzusetzen, sofern sie nicht schon gespannt ist.<b>Bärenfalle einsammeln:</b><br>Drücke die <i>Interaktionstaste</i>, während du neben einer <b>Bärenfalle</b> stehst, die in der Umgebung liegt, um sie einzusammeln. Standardmäßig kannst du maximal <b>1 Bärenfalle</b> tragen.","name":"Bärenfalle","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"Eine schwere, gusseiserne Glocke, durchdrungen von uralten Kräften. Wenn sie geläutet wird, kann ihr Besitzer die Geisterwelt betreten und darin herumwandeln.<br><br><b>JAMMERGLOCKE</b><br>Drücke und halte die <i>Stärketaste</i>, um dich zu <b>verhüllen</b>. Drücke und halte die <i>Stärketaste</i> erneut, während du verhüllt bist, um die <b>Verhüllung</b> aufzuheben, wodurch du beim Erscheinen <b>1 Sekunde</b> lang zusätzliche Geschwindigkeit erhältst. Die Jammerglocke ist in einer Entfernung von bis zu <b>24 Metern</b> zu hören.<br><br><b>Verhüllung</b><br>Während er verhüllt ist, erhält <b>der Geist</b> eine erhöhte Bewegungsgeschwindigkeit, fast vollständige Unsichtbarkeit und den Statuseffekt <b>Unentdeckbar</b>. <b>Der Geist</b> kann nicht angreifen, während er verhüllt ist, kann aber mit Objekten in der Umgebung interagieren. Wird er hellem Licht ausgesetzt, so verliert <b>der Geist</b> automatisch seine <b>Verhüllung</b>.","name":"Jammerglocke","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"Drücke und halte die <i>Stärketaste</i>, um einen Kettensägensprint auszuführen. Überlebende, die während eines Kettensägensprints getroffen werden, werden in den Todesstatus versetzt.<br><li>Jede Kettensägenaktion (Starten der Kettensäge, Gas geben an der Kettensäge und der <b>Kettensägensprint</b>) lassen die Überhitzungsanzeige steigen.</li><li>Sobald die <b>Überhitzungsanzeige</b> voll ist, kann die Kettensäge nicht verwendet werden, bis sie vollständig abgekühlt ist. Das Erreichen des Hitzemaximums unterbricht einen <b>Kettensägensprint</b>, der gerade ausgeführt wird, nicht.</li><li>Die <b>Überhitzungsanzeige</b> sinkt, wenn die Kettensäge nicht benutzt wird.</li> ","name":"Kettensäge","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"Eine Fähigkeit, die sie von ihrer Mutter gelernt und in der Wildnis perfektioniert hat. Die Jägerin kann Beile mit tödlicher Präzision werfen.<br><li>Du beginnst die Prüfung mit <b>5 Beilen</b>.</li><li>Lade den Wurf für maximale Wurfgeschwindigkeit auf.</li><li>Beile können bei <b>Schließschränken aufgefüllt werden</b>.</li>","name":"Jagdbeile","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"Die Dunkelheit in ihm nährt seine Entschlossenheit, seinen Opfern das Leben zu nehmen.<br><br><b>DIABOLIK</b><br>Die Aktivierung von <b>Diabolik</b> ermöglicht es <b>dem Wandler</b>, seine Beute deutlich zu sehen und durch ihre Verfolgung mehr böse Stärke aufzubauen. <br><br><b>Diabolik I</b><br>Gewährt den Statuseffekt <b>Unentdeckbar</b>. Die Bewegungsgeschwindigkeit ist leicht verringert. Beim <i>Grundangriff</i> ist der Sprungangriff etwas verkürzt.<br><br><b>Diabolik II</b><br>Verringert moderat den Terrorradius. Erhöht leicht die Bewegungsgeschwindigkeit. Beim <i>Grundangriff</i> ist der Sprungangriff etwas erweitert.<br><br><b>Diabolik III</b><br>Wird dies ausgelöst, leiden alle Überlebenden unter dem Statuseffekt <b>Gefährdet</b>. <b>Diabolik III</b> hält <b>60 Sekunden</b> lang an und geht danach in <b>Diabolik II</b> über.<br><br><b>SPEZIALFÄHIGKEIT: VERFOLGEN</b><br>Drücke und halte die <i>Stärketaste</i>, um sichtbare Überlebende zu verfolgen. Das Verfolgen von Überlebenden baut den Fortschritt innerhalb deiner <b>Diabolik</b>-Gruppen auf.<br><br><span class=\\"FlavorText\\">„Ich hab ihn vor fünfzehn Jahren kennengelernt. Man sagte mir, er sei ein hoffnungsloser Fall. Kein Verstand, kein Gewissen und auch nicht das elementarste Differenzierungsvermögen zwischen Leben und Tod, zwischen Gut und Böse, Recht oder Unrecht. Ich traf auf ein sechsjähriges Kind, mit einem blassen, farblosen, emotionslosen Blick und den schwärzesten Augen. Teuflischen Augen. Ich hab acht Jahre lang versucht, mit ihm Kontakt zu bekommen, dann nochmal sieben Jahre, um zu verhindern, dass er jemals wieder auf freien Fuß gesetzt wird. Ich wusste zu gut, was sich hinter diesen Augen verbirgt. Das absolut ... Böse.“ –Dr. Sam Loomis</span>","name":"Diabolik","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"Die Macht der Hexe entspringt einem geschwärzten Finger, der als Auslöser für ihre grausame Stärke benutzt wird. Die Hexe formt Schlamm nach ihrem Willen. Mit einfachen rituellen Zeichnungen erstellt sie aus Schlamm und Abfall trügerische Duplikate ihrer selbst, die sie anschließend zu verschiedenen Zwecken verwenden kann.<br><li>Gewährt die Fähigkeit, <b>10</b> Phantomfallen zu erschaffen und aufrechtzuerhalten.</li><li>Gewährt die Fähigkeit, sich sofort zu ausgelösten Phantomfallen im Umkreis von <b>40 Metern</b> zu begeben.</li>","name":"Geschwärzter Auslöser","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"Der Kannibale beginnt die Prüfung mit 3 Einheiten. Drücke und halte die <I>Stärketaste</i>, um eine Einheit zu verbrauchen und einen <b>Kettensägenschwung</b> auszuführen, mit dem du mehrere Ziele treffen kannst. Während eines <b>Kettensägenschwungs</b> getroffene Überlebende werden in den Todesstatus versetzt.<br><li>Nutze eine Einheit, um die Länge des <b>Kettensägenschwungs</b> zu erhöhen. Dadurch verlängert sich auch die Abklingzeit leicht.</li><li>Die Kettensägeneinheiten werden aufgefüllt, solange die Kettensäge nicht genutzt wird.</li><br><br>Die <b>Wutanfall-Anzeige</b> füllt sich langsam, wenn du an der Kettensäge Gas gibst. Sobald die Anzeige voll ist oder du während eines <b>Kettensägenschwungs</b> ein Objekt triffst, bekommt der Kannibale einen <b>Wutanfall</b>. Der <b>Wutanfall</b> verletzt alle Überlebenden in seinem Umfeld und versetzt sie in den Todesstatus.<br><li>Die Dauer des <b>Wutanfalls</b> erhöht sich mit jeder Einheit, die während des <b>Kettensägenschwungs</b> verbraucht wurde. Alle übrigen Einheiten gehen verloren.</li><li>Während eines <b>Wutanfalls</b> ist die Bewegungsgeschwindigkeit verringert.</li><li>Die <b>Wutanfall-Anzeige</b> leert sich, wenn die Kettensäge nicht benutzt wird. Während eines <b>Kettensägenschwungs</b> entleert sie sich vollständig.</li> ","name":"Bubbas Kettensäge","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>CARTERS FUNKE</b><br>Wird ein Überlebender vom <b>Doktor</b> erfolgreich mit dessen Spezialfähigkeiten <b>Schocktherapie</b> oder <b>statisches Feld</b> getroffen, erhöht sich der <i>Wahnsinn</i> des Überlebenden, wodurch er letztendlich den Statuseffekt <b>Wahnsinn</b> erleidet und zunehmend stärkere Effekte auslöst.<br><b>Wahnsinn I:</b><br>Lässt den Überlebenden einmal schreien, wodurch er dem <b>Doktor</b> seine Position verrät. Wirkt sich <b>leicht</b> auf die Platzierung und Richtung von Fähigkeitschecks aus.<br><b>Wahnsinn II:</b><br>Lässt den Überlebenden einmal schreien und Halluzinationen in Form eines <i>Trugbilds des Doktors</i> erleben. Wirkt sich <b>moderat</b> auf die Platzierung und Richtung von Fähigkeitschecks aus.<br><b>Wahnsinn III:</b><br>Lässt den Überlebenden wiederholt schreien und Halluzinationen in Form eines <i>Trugbilds des Doktors</i> erleben. Wirkt sich <b>enorm</b> auf die Platzierung und Richtung von Fähigkeitschecks aus. Der Überlebende kann keine Interaktionen der Kategorien Heilen, Reparieren, Sabotieren, Aufschließen oder Zerstören ausführen oder Gegenstände verwenden, bis er erfolgreich <i>Beruhige dich</i> ausführen kann. Bringt ein Überlebender die Aktion <i>Beruhige dich</i> zu Ende, wird er wieder zu <b>Wahnsinn I</b> herabgestuft.<br><br><b>SPEZIALFÄHIGKEIT: Schocktherapie</b><br>Drücke und halte die <i>Stärketaste</i>, um <b>Schocktherapie</b> auszuführen. Damit wird ein Schockangriff auf den Boden vor dir ausgeführt. Überlebende, die von <b>Schocktherapie</b> getroffen werden, erleiden erhöhten <i>Wahnsinn</i>, und alle Interaktionen, die sie ausführen, werden sofort unterbrochen. <b>Schocktherapie</b> kehrt den Statuseffekt <b>Ahnungslos</b> sofort um.<br><br><b>SPEZIALFÄHIGKEIT: Statisches Feld</b><br>Drücke und halte die <i>Taste für die aktive Fähigkeit</i>, um ein <b>statisches Feld</b> auszusenden, das alle Überlebenden im Terrorradius des Doktors schreien und erhöhten <i>Wahnsinn</i> erleiden lässt. <b>Statisches Feld</b> kann nur aktiviert werden, wenn gerade keine Abklingzeit stattfindet. <b>Statisches Feld</b> kehrt den Statuseffekt <b>Ahnungslos</b> sofort um.","name":"Carters Funke","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"Wache Überlebende hören den Terrorradius <b>des Albtraums</b> und sehen ihn innerhalb eines Radius von 16 Metern. Sie sehen ihn zeitweise in einem Abstand von 16 bis 32 Metern. Sonst ist er für sie nicht zu sehen. <b>Der Albtraum</b> versetzt Überlebende passiv über 60 Sekunden in den Schlaf und in die Traumwelt. Sie werden sofort in die Traumwelt versetzt, wenn er sie mit einem <i>Grundangriff</i> trifft.<br><br>In der Traumwelt sind die Überlebenden vom Statuseffekt <b>Ahnungslos</b> betroffen. Außerdem können sich <b>Traumschlingen</b> auf sie auswirken. Überlebende können aufwachen, indem sie bei einem Fähigkeitscheck scheitern oder wenn ein wacher Überlebender die Aktion <i>Aufwachen</i> ausführt, oder indem sie einen gefundenen Wecker benutzen. Jede weitere <i>Aufwachen</i>-Aktion dauert doppelt so lange wie die vorige. Wecker geben Überlebenden 30 Sekunden Zeit, bis sie wieder einschlafen.<br><br><b>SPEZIALFÄHIGKEIT: TRAUMSCHLINGE</b><br>Halte die <i>Stärketaste</i> gedrückt, um eine <b>Traumschlinge</b> zu platzieren. Überlebende erleiden den Statuseffekt <b>Eingeschränkt</b>, wenn sie mit einer <b>Traumschlinge</b> in Kontakt kommen und noch kurz danach.<br><br>Einige Zusätze können <b>Traumschlingen</b> durch <b>Traumpaletten</b> ersetzen. Traumpaletten erscheinen in der Traumwelt an Paletten-Positionen. Sie sind für <b>den Albtraum</b> hervorgehoben und betäuben ihn nicht.<br><br><b>TRAUMZÄHLER</b>:<br><b>Der Albtraum</b> beginnt mit 5 Traumzählern, die zum Platzieren von Traumschlingen verwendet werden können. Wenn alle Traumzähler ausgegeben sind, wird die zuerst platzierte Traumschlinge zerstört, sobald eine neue platziert wird.<br><br><b>SPEZIALFÄHIGKEIT: TRAUMPROJEKTION</b><br>Halte die <i>Taste für die aktive Fähigkeit</i> gedrückt, um zu einem Generator in deiner Sichtweite zu teleportieren. Für jeden Überlebenden in der Traumwelt verringert sich die Abklingzeit um 15 %.","name":"Traumdämon","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"Der Sache seines Lehrmeisters für immer verschrieben, straft es die Undankbaren und die Schuldigen mit Schläue und mörderischen Rätseln.<br><br><b>Das Schwein</b> kann sich getarnt fortbewegen, schnelle Angriffe aus dem Hinterhalt ausführen und Überlebenden tödliche umgekehrte Bärenfallen aufsetzen.<br><br><b>JIGSAWS TAUFE</b><br>Du beginnst die Prüfung mit <b>4</b> <i>inaktiven</i> umgekehrten Bärenfallen. Während du über einem Überlebenden mit Todesstatus stehst, drückst du die <i>Taste für die aktive Fähigkeit</i>, um ihm eine <i>inaktive</i> umgekehrte Bärenfalle aufzusetzen. Umgekehrte Bärenfallen werden <i>aktiv</i>, wenn ein beliebiger Generator in der Prüfung fertiggestellt wird.<br>Die Überlebenden können versuchen, sich selbst aus <i>aktiven</i> oder <i>inaktiven</i> umgekehrten Bärenfallen zu befreien, indem sie die Jigsaw-Kisten in der Umgebung nach dem richtigen Schlüssel durchsuchen.<br><b>Aktive umgekehrte Bärenfallen</b><br>Werden umgekehrte Bärenfallen <i>aktiv</i>, wird ein Countdown-Timer gestartet. Ein Überlebender, an dem sich eine <i>aktive</i> umgekehrte Bärenfalle befindet, wird automatisch geopfert, wenn sein Timer abläuft oder er versucht, die Prüfung mit einer aufsitzenden <i>aktiven</i> umgekehrten Bärenfalle zu verlassen.<br><br><b>SPEZIALFÄHIGKEIT: DUCKEN</b><br>Drücke die <i>Taste für die aktive Fähigkeit</i>, um dich zu ducken. Drücke die <i>Taste für die aktive Fähigkeit</i> erneut, während du geduckt bist, um dich wieder aufzurichten. <b>Das Schwein</b> bewegt sich langsamer, während es geduckt ist. <b>Das Schwein</b> bekommt den Statuseffekt <b>Unentdeckbar</b>, solange es geduckt ist.<br><br><b>SPEZIALANGRIFF: HINTERHALT</b><br>Drücke und halte die <i>Angriffstaste</i>, während du geduckt bist, um zu sprinten und einen <b>Hinterhalt</b>-Angriff auszuführen.<br><br><span class=\\"FlavorText\\">„Du wirst mir alles geben, jede Zelle deines Körpers. Die Zeichen auf deinen Armen stammen aus einem anderen Leben. Wir lassen dieses Leben zurück. Wenn du diesen Gang entlanggehst, gibt es kein Zurück. Verstehst du das?“ –Jigsaws Taufe</span>","name":"Jigsaws Taufe","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"In den Jahren seiner Experimente mit Betäubungsmitteln und Muskelentspannungsmitteln konnte der Clown einige wirksame Tränke und Formeln entwickeln. Mit seinem Liebling, dem Nachspieltonikum, hat er mit großartiger Wirkung viele unwillige Opfer betäubt und gefangen genommen. Das dazu passende Nachspielgegengift hat ebenfalls eine nützliche Wirkung.<br><br>Tippe auf die <i>Taste für die aktive Fähigkeit</i>, um zwischen <b>Nachspieltonikum</b> und <b>Nachspielgegengift</b> zu wechseln. Du kannst die <i>Stärketaste</i> antippen oder halten und loslassen, um eine Flasche zu werfen.<br><br>Drücke und halte die <i>Taste für die aktive Fähigkeit</i>, um deinen Flaschenvorrat aufzufüllen.<br><br><b>SPEZIALFÄHIGKEIT: Nachspieltonikum</b><br>Die Flasche zerbricht beim Aufprall und gibt eine lila Gaswolke frei, die Überlebende <b>benebelt</b>. <b>Benebelte</b> Überlebende leiden unter eingeschränkter Sicht, verringerter Bewegungsgeschwindigkeit sowie einem Hustenreiz, und zwar für 2 Sekunden.<br><br><b>SPEZIALFÄHIGKEIT: Nachspielgegengift</b><br>Die Flasche zerbricht beim Aufprall und gibt eine graue Gaswolke frei, die bei Aktivierung gelb wird. Der Clown und alle Überlebenden, die in eine aktive <b>Gegengiftwolke</b> treten, erhalten einen Bonus von 10 % auf ihre Bewegungsgeschwindigkeit, und zwar für 5 Sekunden. <b>Benebelte</b> Überlebende, die eine <b>Gegengiftwolke</b> betreten, werden geheilt.","name":"Das Nachspieltonikum","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"Das Gespenst kann seine Stärke, Yamaokas Spuk, nutzen, um eine geisterhafte Ebene zu betreten und an einem anderen Ort wieder aufzutauchen.<br><li>Halte die Stärketaste zum Aufladen gedrückt. Das Gespenst verlässt seinen physischen Körper und hinterlässt eine unbewegliche „Hülle“.</li><br>Ist Yamaokas Spuk aktiv:<li>Das Gespenst kann sich frei zu einem neuen Ort bewegen und ist für kurze Zeit schneller. Seine Bewegung wird immer noch vom physischen Umfeld und der Umgebung eingeschränkt.</li><li>Das Gespenst verlässt die physische Ebene und verliert alle Überlebenden aus dem Blick. Es kann aber noch die Kratzspuren wahrnehmen, die sie in der Umgebung hinterlassen.</li><li>Ein Geräuschhinweis erklingt an der aktuellen Position des Gespensts.</li><li>Ist die Stärke vorbei, behält das Gespenst den Geschwindigkeitsbonus für eine kurze Zeit bei und die Hülle verschwindet.</li><br>Bei der Verwendung von Yamaokas Spuk wird die Stärkeleiste des Gespensts verbraucht. Sie füllt sich nach einer Zeit automatisch wieder auf. Die Stärkeleiste muss ganz aufgeladen sein, bevor die Stärke erneut ausgelöst werden kann.","name":"Yamaokas Spuk","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"Sie waren nur eine Gruppe Freunde, bis Frank sie zu einer Legion machte. Jetzt beziehen sie ihre Stärke aus der spannenden Freiheit, die sie dadurch erhalten, dass sie sich nur ihren eigenen Regeln unterwerfen.<br><br><b>WILDE RASEREI</b><br>Löse <b>Wilde Raserei</b> aus, um mit hohem Tempo zu rennen und bei mehreren Überlebenden Kettenangriffe zu starten. Sobald deine Stärkeleiste voll ist, kannst du die <i>Stärketaste</i> drücken, um <b>Wilde Raserei</b> auszulösen. Während <b>Wilde Raserei</b> aktiv ist, bewegt sich <b>die Legion</b> schneller und bekommt Zugriff auf zusätzliche Fähigkeiten: <b>Palettensprung</b> und <b>Wilde Schlitzerei</b>.<br><br><b>SPEZIALFÄHIGKEIT: PALETTENSPRUNG</b><br>Drücke die <i>Interaktionstaste</i>, während <b>Wilde Raserei</b> aktiv ist, um einen <b>Palettensprung</b> an einer umgestoßenen Palette auszuführen.<br><br><b>SPEZIALANGRIFF: WILDE SCHLITZEREI</b><br>Drücke die <i>Angriffstaste</i>, während <b>Wilde Raserei</b> aktiv ist, um <b>Wilde Schlitzerei</b> auszuführen. Triffst du einen Überlebenden mit <b>Wilde Schlitzerei</b>, wird dieser Überlebende verletzt und erleidet den Statuseffekt <b>Tiefe Wunde</b>. Die Stärkeleiste der Legion wird wieder aufgefüllt, und alle Überlebenden innerhalb des Terrorradius, die nicht unter dem Statuseffekt <b>Tiefe Wunde</b> leiden, werden vom Killerinstinkt angezeigt. Ist der Überlebende bereits vom Statuseffekt <b>Tiefe Wunde</b> betroffen, endet <b>Wilde Raserei</b> sofort, ohne Wirkung zu zeigen.","name":"Wilde Raserei","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"Während die Seuche ihren Körper immer mehr in Besitz nahm, verschlechterte sich ihr Zustand: Ihre Zehen färbten sich schwarz, an ihrem Hals wucherten Zysten und sie erbrach Blut.<br><br><b>REINIGUNG DER BÖSARTIGKEIT</b><br>Infiziere Objekte in der Umgebung sowie Überlebende mit <b>Reinigung der Bösartigkeit</b>, um einen endlosen Kreislauf der Krankheit zu erzeugen. Drücke und halte die <i>Stärketaste</i>, um die <b>Reinigung der Bösartigkeit</b> aufzuladen, und lasse die Taste wieder los, um einen Strom infektiöser Galle auszuspucken. Triffst du einen Überlebenden, wird dieser infiziert. Triffst du ein Objekt in der Umgebung, so wird dieses für eine kurze Dauer infiziert. Überlebende, die mit infizierten Objekten interagieren, werden ebenfalls infiziert.<br><br>Sobald die Infektionsanzeige eines Überlebenden sich vollständig gefüllt hat, ist der Überlebende verletzt, erleidet den Statuseffekt <b>Gebrochen</b> und muss sich in gewissen Abständen zwanghaft übergeben.<br><br><b>SPEZIALFÄHIGKEIT: VERDERBEN SCHLUCKEN</b><br>Infizierte Überlebende können sich selbst vollständig heilen und ihre Infektion aufheben, indem sie sich in einem <i>Brunnen der Hingabe</i> reinigen. Durch diese Aktion wird der Brunnen verdorben, wodurch <b>die Seuche</b> das Verderben aufnehmen und ihre Reinigung verstärken kann. Drücke und halte die <i>Interaktionstaste</i>, während du bei einem <i>Brunnen der Hingabe</i> bist, um <b>Reinigung der Bösartigkeit</b> in <b>Reinigung des Verderbens</b> zu verwandeln. Diese Aktion entfernt das Verderben aus dem Brunnen.<br><br><b>SPEZIALANGRIFF: REINIGUNG DES VERDERBENS</b><br>Nachdem du die Fähigkeit <b>Verderben schlucken</b> genutzt hast, wird <b>Reinigung der Bösartigkeit</b> für eine kurze Dauer durch <b>Reinigung des Verderbens</b> ersetzt. <b>Reinigung des Verderbens</b> verursacht bei jedem Überlebenden, der von ihrem Strom getroffen wird, sofort Schaden. Allerdings werden Überlebende und Objekte in der Umgebung nicht mehr infiziert.","name":"Reinigung der Bösartigkeit","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>Ghost Face</b> hat seine Opfer wochenlang beobachtet und ihre Gewohnheiten minutiös notiert. Immer, wenn ihn der Drang zum Morden überkam, wusste er genau, wie und wann er zuschlagen konnte.<br><br><b>MANTEL DER NACHT</b><br>Drücke die <i>Stärketaste</i>, um den <b>Mantel der Nacht</b> zu aktivieren, wenn die Stärkeleiste voll ist. <b>Ghost Face</b> erhält den Statuseffekt <b>Unentdeckbar</b>, solange <b>Mantel der Nacht</b> aktiv ist. Führt er einen <i>Grundangriff</i> aus, entleert sich die Stärkeleiste vollständig und <b>Mantel der Nacht</b> wird deaktiviert.<br><b>Enthüllen</b><br>Überlebende in der Nähe von <b>Ghost Face</b> können versuchen, ihn zu <i>enthüllen</i>, indem sie für eine kurze Dauer in seine Richtung schauen. Eine erfolgreiche <i>Enthüllung</i> entleert die Stärkeleiste von <b>Ghost Face</b> vollständig und deaktiviert automatisch <b>Mantel der Nacht</b>. Die aktuelle Position von Überlebenden, die eine <i>Enthüllung</i> von <b>Ghost Face</b> bewirken, wird für eine kurze Dauer vom <i>Killerinstinkt</i> angezeigt.<br><br><b>SPEZIALFÄHIGKEIT: VERFOLGEN</b><br>Halte die <i>Stärketaste</i> gedrückt, um Überlebende zu verfolgen, während <b>Mantel der Nacht</b> aktiv ist. Halte die <i>Stärketaste</i> gedrückt, während du dich hinter einer Deckung befindest, um dich hervor zu lehnen und schneller verfolgen zu können. Schließt du die Verfolgung eines Überlebenden ab, wird dein Ziel <i>markiert</i>, und der Statuseffekt <b>Gefährdet</b> wird für begrenzte Zeit deiner <i>Markierung</i> hinzugefügt.<br><br><b>SPEZIALFÄHIGKEIT: DUCKEN</b><br>Drücke die Taste für die aktive Fähigkeit, um dich zu ducken. Drücke die Taste für die aktive Fähigkeit erneut, während du geduckt bist, um dich wieder aufzurichten. <b>Ghost Face</b> bewegt sich langsamer, während er geduckt ist.<br><br><span class=\\"FlavorText\\">„Beachte mich gar nicht. Genau, weiter so. Perfekt. Dieses Bild von dir werde ich aufbewahren.“ –Ghost Face</span>","name":"Mantel der Nacht","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"Eine unbekannte und fremde Macht ist durch seinen Körper geströmt. Plötzlich reißt der Boden auf und verschlingt den Demogorgon vollständig.<br><br><b>AUS DEM ABGRUND</b><br>Drücke und halte die <i>Stärketaste</i>, um <b>Aus dem Abgrund</b> komplett aufzuladen und zu aktivieren. Alle Überlebenden im nahen Umkreis eines aktivierten Portals werden vom Killerinstinkt angezeigt.<br><br><b>SPEZIALANGRIFF: ZERFETZEN</b><br>Drücke die <i>Angriffstaste</i>, während du <b>Aus dem Abgrund</b> auflädst oder hältst, um nach vorne zu stürzen und einen wilden Schlag auszuführen.<br><br><b>SPEZIALFÄHIGKEIT: PORTALE</b><br>Drücke die <i>Taste für die aktive Fähigkeit</i>, um auf dem Boden vor dir ein Portal zu öffnen.<br><b>Die andere Seite durchqueren</b><br>Stehst du auf einem platzierten Portal, während ein anderes Portal hervorgehoben ist, kannst du die <i>Taste für die aktive Fähigkeit</i> erneut drücken, um durch die andere Seite zu reisen und am Zielportal anzukommen.<br><b>Aktivierte Portale</b><br>Portale werden „aktiviert“, wenn man sie in eine beliebige Richtung durchschreitet. Nur aktivierte Portale können von Überlebenden versiegelt werden. Die Auren von aktivierten Portalen werden in gelb hervorgehoben.","name":"Aus dem Abgrund","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"Der Wunsch, schwächere Blutlinien zu vernichten, ist zu einer buchstäblichen Gewalt geworden.<br><br><b>YAMAOKAS ZORN</b><br>Absorbiere Blutkugeln, die von deinen verletzten Feinden zurückgelassen wurden. Drücke und halte die <i>Stärketaste</i>, um Blutkugeln aus der Umgebung zu absorbieren und deine Stärkeleiste zu füllen. Sobald deine Stärkeleiste voll ist, musst du die <i>Taste für die aktive Fähigkeit</i> drücken und halten, um <b>Blutzorn</b> einzuleiten.<br><b>Blutzorn:</b>\\nSolange <b>Blutzorn</b> aktiv ist, wird der <b>Oni</b> tödlich und erhält Zugriff auf zusätzliche Fähigkeiten: <b>Dämonensprint</b> und <b>Dämonenschlag</b>.<br><br><b>SPEZIALFÄHIGKEIT: Dämonensprint</b><br>Drücke und halte die <i>Stärketaste</i>, während <b>Blutzorn</b> aktiv ist, um einen <b>Dämonensprint</b> auszuführen. Diese Fähigkeit erlaubt es dem <b>Oni</b>, schnell große Distanzen zurückzulegen.<br><br><b>SPEZIALANGRIFF: Dämonenschlag</b><br>Drücke und halte die <i>Angriffstaste</i>, während <b>Blutzorn</b> aktiv ist, um einen <b>Dämonenschlag</b> in deine Blickrichtung auszuführen. <b>Dämonenschlag</b> hat eine erweiterte Sprungangriff-Reichweite und versetzt getroffene Überlebende sofort in den Todesstatus.","name":"Yamaokas Zorn","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"Die Genialität des Todesboten bringt ihm die Fähigkeit ein, Gesuchte mit einer einzigartigen Erfindung heranzuziehen: Ein stark modifiziertes Hybrid-Gewehr, bei dem die übliche Munition durch extrem spitze Pfeile ersetzt wird, die an einer Kette befestigt sind.<br><br><b>DER ERLÖSER</b><br>Drücke und halte die <i>Stärketaste</i>, um durchs Visier zu zielen. Drücke die <i>Angriffstaste</i>, um einen Pfeil abzufeuern, der sich in einem Überlebenden verhaken kann. Dadurch kann dieser gegen seinen Willen zum <b>Todesboten</b> herangezogen werden.<br><b>Heranziehen:</b><br>Während ein Überlebender von dem <b>Erlöser</b> aufgespießt ist, kannst du die <i>Stärketaste</i> drücken und halten, um ihn zu dir heranzuziehen. Der Überlebende kann versuchen, sich von der Kette zu befreien oder die Umgebung dazu nutzen, die Kette reißen zu lassen. Dadurch wird der <b>Todesbote</b> kurzzeitig betäubt und in den Zustand „verletzt“ versetzt. Der Statuseffekt <b>Tiefe Wunde</b> wirkt dann auf ihn. Nutzt man einen <i>Grundangriff</i>, während ein Überlebender aufgespießt ist, bricht die Kette. Weder der <b>Todesbote</b> noch der Überlebende erhalten dann eine Strafe. Wird ein Überlebender erfolgreich mit dem <i>Grundangriff</i> getroffen, während dieser aufgespießt ist, aber den Zustand „gesund“ hat, so bewirkt dies den Statuseffekt <b>Tiefe Wunde</b>.<br><b>Nachladen:</b><br><b>Der Erlöser</b> muss nach jedem Schuss nachgeladen werden, bevor er erneut abgefeuert werden kann. Drücke und halte die <i>Taste für die aktive Fähigkeit</i>, um den <b>Erlöser</b> nachzuladen.","name":"Der Erlöser","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"Öffne die Tore des Leidens und empfange dein Urteil! Das Große Messer teilt den Boden, lässt ein infernales Konstrukt aufsteigen und verbreitet unter allen, die sich nähern, Agonie.<br><br><b>RITEN DES URTEILS</b><br>Drücke und halte die <i>Stärketaste</i> zum Aktivieren. Bewege dich dann in eine beliebige Richtung, um einen Pfad zu legen.<br><br>Überlebende, die auf dem Pfad gehen oder rennen, lösen <i>Killerinstinkt</i> aus und sind von <i>Folter</i> betroffen. Überlebende, die unter dem Effekt der <i>Folter</i> leiden, können in einen <b>Bußkäfig</b> gesteckt werden, wenn sie den Todesstatus haben.<br><br><b>SPEZIALANGRIFF: Bestrafung der Verdammten</b><br>Drücke die <i>Angriffstaste</i>, während <b>Riten des Urteils</b> aktiv ist, um die <b>Bestrafung der Verdammten</b> auszuführen. Diese Fähigkeit erzeugt eine Welle, die alle Überlebenden in ihrem Weg verletzt.<br><br><b>SPEZIALFÄHIGKEIT: Bußkäfig</b><br>Drücke die <i>Taste für die aktive Fähigkeit</i>, während du über einem sterbenden Überlebenden stehst, der an <i>Folter</i> leidet, um ihn in einen <b>Bußkäfig</b> zu schicken. Überlebende in einem <b>Bußkäfig</b> können dem Entitus geopfert werden, als ob sie festgehakt wären. Während der zweiten Phase des Beschwörungsrituals sind sie gezwungen, Fähigkeitschecks auszuführen, um den Entitus fernzuhalten.<br><br>Ein Überlebender, der von einem anderen Überlebenden aus einem <b>Bußkäfig</b> gerettet wird oder selbst einen anderen Überlebenden daraus rettet, hebt <i>Folter</i> auf.<br><br><b>SPEZIALFÄHIGKEIT: Letztes Urteil</b><br>Drücke die <i>Taste für die aktive Fähigkeit</i>, wenn du über einem sterbenden Überlebenden stehst, der an <i>Folter</i> leidet und bereits die Kampf-Phase an einem Haken oder in einem Bußkäfig erreicht hat, um ihn hinzurichten.","name":"Riten des Urteils","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"Das Pustelserum strömt durch seine Adern und verdirbt seinen Geist und Körper. Gleichzeitig gewährt es ihm aber übernatürliche physische Fähigkeiten.<br><br><b>SPEZIALFÄHIGKEIT: STURM</b><br>Drücke die <i>Stärketaste</i>, um einen schnellen <b>Sturm</b> vorwärts zu starten. Dadurch wird ein <b>Sturm</b>-Zähler verbraucht. Während der <b>Sturm</b> ausgeführt wird, kann die Fäule keinen Angriff starten.<br><br><b>Stürme</b> gegen eine Wand oder ein Hindernis, um eine <b>Ramme</b> dagegen auszuführen. Trifft der <b>Sturm</b> weder Wand noch Hindernis oder besitzt die Fäule keine <b>Sturm</b>-Zähler mehr, führt das zu einem kurzen Zustand der Ermüdung und die Zähler müssen wieder aufgefüllt werden.<br><br><b>SPEZIALANGRIFF: TÖDLICHER STURM</b><br>Drücke nach einer <b>Ramme</b> die <i>Stärketaste</i>, um einen <b>Tödlichen Sturm</b> zu starten. Dadurch wird ein <b>Sturm</b>-Zähler verbraucht. Ein <b>Tödlicher Sturm</b> verhält sich genau so wie ein <b>Sturm</b>, nur kann die Fäule mit der <i>Angriffstaste</i> dabei Angriffe ausführen.","name":"Verfaultes Verderben","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"Obwohl sie für immer durch Blut und Trauma miteinander verbunden sind, besitzen die Zwillinge die Macht, sich von ihrem gemeinsamen Körper zu lösen. Gemeinsam jagen sie als Bruder und Schwester und verdoppeln somit die Bedrohung für Überlebende.<br><br><b>SPEZIALFÄHIGKEIT: Blutbande</b><br>Drücke und halte die <i>Stärketaste</i>, um <b>Victor</b> freizulassen. Du kannst auswählen, ob du <b>Charlotte</b> oder <b>Victor</b> steuern möchtest, indem du die <i>Taste für die aktive Fähigkeit</i> antippst.<br><br>Ist er auf sich allein gestellt, löst <b>Victor</b> den <b>Killerinstinkt</b> aus und zeigt <b>Charlotte</b> damit die Auren von Überlebenden, die in seiner Nähe gehen oder rennen. Überlebende, die <b>Victors</b> Schreie hören können, sind anfällig. <b>Victor</b> kann allerdings von Überlebenden erschlagen werden, während <b>Charlotte</b> gesteuert wird.<br><br>In dem Fall wächst <b>Victor</b> erneut an <b>Charlotte</b> an, sobald etwas Zeit vergangen ist.<br><br><b>SPEZIALANGRIFF: Sprung</b><br>Während du <b>Victor</b> steuerst, kannst du die <i>Taste für die aktive Fähigkeit</i> gedrückt halten, um einen <b>Sprung</b> aufzuladen. Tippe dann die <i>Angriffstaste</i> an, um ihn zu starten.<br><br>Landest du einen <b>Sprung</b> erfolgreich, erleidet der Überlebende Schaden. War der Überlebende bei voller Gesundheit, klammert sich <b>Victor</b> an ihm fest, löst den <b>Killerinstinkt</b> aus und zeigt die Positionen von allen Überlebenden im Umfeld. In diesem Zustand erleidet der Überlebende die Statuseffekte <b>Gebrochen</b>, <b>Ahnungslos</b> und <b>Bewegungsunfähig</b>. Weder kann er dann Schließschränke betreten, noch durchs Ausgangstor gehen. Der Überlebende kann <b>Victor</b> erschlagen, während dieser sich an ihn klammert, indem er die Aktion <b>Entfernen</b> ausführt.<br><br>Verfehlt <b>Victor</b> seinen <b>Sprung</b>, ist er vorübergehend verwundbar und kann von einem Überlebenden erschlagen werden. Landet Victor auf einem Hindernis, das größer ist als er selbst, wird er zerstört.","name":"Blutbande","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>Ji-Woon Hak nutzt sein verblüffendes Talent, das er sich in jahrelanger Übung angeeignet hat, und schickt eine schnelle Salve Messer los.</i><br><br><b>PUBLIKUMSHIT</b><br><br>Du beginnst die Prüfung mit <b>60 Klingen</b>. Halte die <i>Stärketaste</i> gedrückt, um auszuholen und den Wurfzustand zu aktivieren.<br><br>Tippe im Wurfzustand die <i>Angriffstaste</i>, um eine einzelne Klinge zu werfen, oder halte die <i>Angriffstaste</i> gedrückt, um eine Salve an Klingen loszuschicken. Dabei werden die Kontrolle und die Wurfrate erhöht, während sich die Bewegungsgeschwindigkeit verringert. Fülle Klingen an Schließschränken nach.<br><br><b>Schnittwunden-Anzeige:</b> Die <b>Schnittwunden-Anzeige</b> eines Überlebenden wird mit jedem Klingentreffer erhöht. Sobald die Anzeige voll ist, verliert er einen Gesundheitsstatus und wird entweder verletzt oder niedergestreckt.<br><br>Die Schnittwunden-Anzeige eines Überlebenden nimmt langsam ab, wenn er für kurze Zeit von keiner Klinge getroffen wurde. Wenn ein Überlebender mit einem Grundangriff getroffen wird, wird seine Schnittwunden-Anzeige sofort verringert.<br><br><b>SPEZIALFÄHIGKEIT: Hauptevent</b><br>Jeder Klingentreffer füllt die <b>Eventanzeige</b>. Sobald sie voll ist, kann <b>Hauptevent</b> durch Betätigen der <i>Taste für die aktive Fähigkeit</i> aktiviert werden. In diesem Modus wirft der Trickster für die Dauer von <b>Hauptevent</b> automatisch eine unbegrenzte Anzahl an Klingen. Seine Wurfrate ist deutlich erhöht und seine Bewegungsgeschwindigkeit wird nicht nach jedem Wurf verlangsamt. <b>Hauptevent</b> kann durch Betätigen der <i>Taste für die aktive Fähigkeit</i> abgebrochen werden. Dann wird die <b>Eventanzeige</b> auf 0 zurückgesetzt und die Abklingzeit für <b>Publikumshit</b> wird eingeleitet.","name":"Publikumshit","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"Ein Virus, das extreme Mutationen verursacht und auf andere übertragen werden kann. Nebenwirkungen umfassen erhöhte Aggression und Stärke.<br><br><b>SPEZIALANGRIFF: Tentakelschlag</b><br>Halte die Stärketaste gedrückt, um einen Angriff aufzuladen. Tippe dann auf die Angriffstaste, um den <b>Tentakelschlag</b> auszuführen. Wenn du einen Überlebenden mit dem <b>Tentakelschlag</b> triffst, erleidet dieser den Statuseffekt <b>Kontaminiert</b> und erhöht damit deine <b>Mutationsrate</b>. Wenn ein Überlebender bereits <b>kontaminiert</b> ist, verringert der <b>Tentakelschlag</b> seine Gesundheit.<br><br>Überlebende können die <b>Kontaminierung</b> heilen, indem sie einen <b>Impfstoff</b> aus <b>Vorratskoffern</b> bei sich oder anderen Überlebenden anwenden. Die Anzahl der <b>Impfstoffe</b> ist begrenzt. Nach der Verwendung eines <b>Impfstoffs</b> wird die Position des Überlebenden durch den Killerinstinkt angezeigt.<br><br><b>Mutationsrate:</b> Deine Stärke wächst mit steigender <b>Mutationsrate</b>. Bei <b>Mutationsrate 2</b> kannst du mit dem <b>Tentakelschlag</b> Paletten und zerstörbare Mauern zerschlagen. Bei <b>Mutationsrate 3</b> erhöht sich die Reichweite des <b>Tentakelschlags</b>. Das T-Virus-Symbol zeigt die aktuelle <b>Mutationsrate</b> an.<br><br><b>BESONDERER FEIND: Zombies</b><br>Wenn ein <b>Zombie</b> einen Überlebenden angreift, erleidet dieser den Effekt <b>Kontaminiert</b>. Wenn der Überlebende bereits <b>kontaminiert</b> ist, verringert sich seine Gesundheit.<br><br><b>Zombies</b> können mit einem <b>Tentakelschlag</b> zerstört werden, um deine <b>Mutationsrate</b> zu erhöhen. Überlebende können sie mit Paletten zerstören. Zerstörte <b>Zombies</b> kommen nach kurzer Zeit zurück.","name":"T-VIRUS","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/de/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in allen Kategorien für alle Spieler in dieser Prüfung.<br><li>Kombinierbar.</li>","name":"Blutige Partyluftschlangen","flavor":"„Eine Erinnerung an eine fantastische Feier, bei der sich Leute versammelt hatten, dann aber schreiend flüchteten.“","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"<b>Verringert leicht</b> den Schwarzen Schleier.<br><li>Effekt summiert sich.</li>","name":"Klares Reagenz","flavor":"\\"Der Nebelschleier bricht herein, er zieht alles in seinen dunklen Wahnsinn. Es gibt kein Weglaufen, kein Entrinnen, keine Zuflucht, außer für das reine Wasser des im Wald verlorenen Teichs.\\" - Unbekannt, Notizbuch","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"<b>Verdichtet leicht</b> den Dunklen Nebelschleier.<br><li>Effekt summiert sich.</li>","name":"Schwaches Reagenz","flavor":"\\"Gelähmt stehe ich in der Kälte, zurückbleibend mit dem Tod.\\"","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"<b>Verdichtet moderat</b> den dunklen Nebelschleier.<br><li>Kombinierbar.</li>","name":"Trübes Reagenz","flavor":"„Der Nebelschleier ist verführerisch, hypnotisierend. Ich liebe ihn und fürchte ihn zugleich.“ –Donnas Skizzenbuch","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"<b>Verdichtet stark</b> den dunklen Nebelschleier.<br><li>Kombinierbar.</li>","name":"Dunkles Reagenz","flavor":"„Der Nebelschleier scheint uns vor der Bestie zu beschützen, aber er ist ein Gift, ein Geschwür, welches uns mit Dunkelheit und Wahnsinn erfüllt.“ –Notizbuch eines unbekannten Verfassers","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"Bittet den Entitus um <b>dunkelstes Mondlicht</b>.","name":"Neumondbouquet ","flavor":"\\"Geh besser wieder schlafen, heute Nacht scheint der Mond nicht.\\"","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"Bittet den Entitus um <b>gedämpftes Mondlicht</b>.","name":"Sichelmondbouquet","flavor":"\\"Der Mond verschwindet langsam mit einem Lächeln: ‚Mach dir keine Sorgen, dein Geheimnis ist bei mir sicher.‘ Oder ist es ein übles Grinsen?\\"","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"Bittet den Entitus um <b>helleres Mondlicht</b>.","name":"Viertelmondbouquet","flavor":"\\"Der alte Mond zeigt sein Gesicht und blickt auf die Opfer herab.\\"","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"Bittet den Entitus um <b>hellstes Mondlicht</b>.","name":"Vollmondbouquet","flavor":"\\"Wenn der Mond aufgeht, heulen die Wölfe. Die Jagd beginnt.\\"","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"<b>Erhöht leicht</b> die Wahrscheinlichkeit, zum MacMillan-Anwesen geschickt zu werden, wenn sie verbrannt wird.<br><li>Kombinierbar.</li>","name":"MacMillans Kassenbuchseite","flavor":"„Eine zerrissene und verblichene Kassenbuchseite mit unleserlichen Informationen, abgesehen vom MacMillan-Stempel.“","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"<b>Erhöht deutlich</b> die Wahrscheinlichkeit, zum MacMillan-Anwesen geschickt zu werden, wenn sie verbrannt wird.<br><li>Kombinierbar.</li>","name":"Unterzeichnete Kassenbuchseite","flavor":"„Eine verblichene Seite eines Kassenbuchs, die auf Bergbauausrüstung und andere Transaktionen verweist. Unterschrieben von Archie MacMillan.“","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, zum MacMillan-Anwesen geschickt zu werden, wenn er verbrannt wird.<br><li>Kombinierbar.</li>","name":"MacMillans Fingerknochen","flavor":"„MacMillans Skelett wurde im Keller des Bergbaulagerhauses gefunden. Seine Beinknochen waren zerschmettert und ein Bergbauhammer lag in seinem Schoß.“","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"<b>Erhöht leicht</b> die Wahrscheinlichkeit, zum Autohaven-Schrottplatz geschickt zu werden, wenn es verbrannt wird.<br><li>Kombinierbar.</li>","name":"Zerfetztes Nummernschild","flavor":"„Ein stark verrostetes, verbogenes und verschlissenes Metallschild.“","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"<b>Erhöht deutlich</b> die Wahrscheinlichkeit, zum Autohaven-Schrottplatz geschickt zu werden, wenn es verbrannt wird.<br><li>Kombinierbar.</li>","name":"Nummernschild aus Virginia","flavor":"„Ein verrostetes und verbogenes Nummernschild aus dem Bundesstaat Virginia.“","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, zum Autohaven-Schrottplatz geschickt zu werden, wenn er verbrannt wird.<br><li>Kombinierbar.</li>","name":"Azarovs Schlüssel","flavor":"„Ein zerbrochener Schlüssel, der zu einem Fahrzeug unbekannter Marke gehört. Ein daran befestigtes Schlüsselband identifiziert den Besitzer als einen gewissen A. Azarov.“","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"<b>Erhöht leicht</b> die Wahrscheinlichkeit, zur Coldwind Farm geschickt zu werden, wenn sie verbrannt wird.<br><li>Kombinierbar.</li>","name":"Rindermarke 28","flavor":"„Eine blutverschmierte Rindermarke mit der Nummer 28.“","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"<b>Erhöht deutlich</b> die Wahrscheinlichkeit, zur Coldwind Farm geschickt zu werden, wenn sie verbrannt wird.<br><li>Kombinierbar.</li>","name":"Coldwind-Rindermarke 81","flavor":"„Eine blutverschmierte Rindermarke, gekennzeichnet mit ‚Coldwind Farm‘ und der Nummer 81.“","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, zur Coldwind Farm geschickt zu werden, wenn es verbrannt wird.<br><li>Kombinierbar.</li>","name":"Herzmedaillon","flavor":"„Eine Halskette mit silbernem Anhänger. Im schlichten Inneren ist E+M eingraviert.“","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"<b>Erhöht leicht</b> die Wahrscheinlichkeit, in die Crotus-Prenn-Anstalt geschickt zu werden, wenn er verbrannt wird.<br><li>Kombinierbar.</li>","name":"Überweisungsschein","flavor":"„Ein abgenutzter, verblichener Überweisungsschein mit unleserlicher Aufschrift.“","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"<b>Erhöht deutlich</b> die Wahrscheinlichkeit, in die Crotus-Prenn-Anstalt geschickt zu werden, wenn er verbrannt wird.<br><li>Kombinierbar.</li>","name":"P. Elliotts Überweisungsschein","flavor":"„Ein rosafarbener Überweisungsschein, auf dem steht, dass Philip Elliott in die Crotus-Prenn-Anstalt überstellt werden soll.“","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"<b>Erhöht enorm</b> die Chance, in die Crotus Prenn Zuflucht geschickt zu werden, wenn es verbrannt wird.","name":"Verkohltes Hochzeitsfoto","flavor":"\\"Ein verbranntes Portrait eines Paares an ihrem Hochzeitstag, die Gesichter sind komplett verkohlt und nicht identifizierbar.\\"","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"<b>Erhöht leicht</b> die Wahrscheinlichkeit, nach Haddonfield geschickt zu werden, wenn er verbrannt wird.<br><li>Kombinierbar.</li>","name":"Erntedankfest-Flyer","flavor":"„Ein verwaschenes Flugblatt für das Erntedankfest von 1978 in Haddonfield. Auf der Vorderseite prangt die Zeichnung eines großen Kürbisses.“","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"<b>Erhöht deutlich</b> die Wahrscheinlichkeit, nach Haddonfield geschickt zu werden, wenn sie verbrannt wird.<br><li>Kombinierbar.</li>","name":"Marode Dachschindel","flavor":"„Eine modrige und verfaulte Dachschindel aus Eichenholz, wie man sie auf fast allen Häusern in Haddonfield findet.“","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, nach Haddonfield geschickt zu werden, wenn er verbrannt wird.","name":"Strode-Immobilienschlüssel","flavor":"„Ein gewöhnlich wirkender Hausschlüssel. Der Schlüsselanhänger aus Pappe weist ihn als Eigentum der Strode-Immobilienfirma aus, darauf findet sich auch eine handgeschriebene Adresse: 45 Lampkin Lane.“","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"<b>Erhöht leicht</b> die Wahrscheinlichkeit, zum Backwater-Sumpf geschickt zu werden, wenn es verbrannt wird.<br><li>Kombinierbar.</li>","name":"Rauchendes Tauwerk","flavor":"„Ein verkohltes Stück eines Schiffsseils, das noch immer warmen Rauch verströmt.“","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"<b>Erhöht deutlich</b> die Wahrscheinlichkeit, zum Backwater-Sumpf geschickt zu werden, wenn es verbrannt wird.<br><li>Kombinierbar.</li>","name":"Rauchendes Willkommensschild","flavor":"„Ein Willkommensschild, das aus einem groben Stück eines vom Wasser glattgeschliffenen Zypressenbrettes hergestellt wurde. Das Schild ist verkohlt und raucht noch immer.“","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, zum Backwater-Sumpf geschickt zu werden, wenn es verbrannt wird.","name":"Großmutters Kochbuch","flavor":"„Eine ledergebundene Mappe, die grausame Menschenfleischrezepte enthält, wie zum Beispiel Großmutters Schlager: das gute Chili.“","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"<b>Erhöht leicht</b> die Wahrscheinlichkeit, in Lérys Gedenkinstitut geschickt zu werden, wenn es verbrannt wird.<br><li>Kombinierbar.</li>","name":"Notfallbescheinigung","flavor":"„Ein gelbes, durchschreibendes Formular, das einen Patienten sofort zur Notbehandlung einweist. Die kopierten Informationen sind verschmiert und unleserlich.“","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"<b>Erhöht deutlich</b> die Chance, in Lérys Gedenkinstitut geschickt zu werden, wenn er verbrannt wird.<br><li>Kombinierbar.</li>","name":"Psychiatrischer Beurteilungsbericht","flavor":"„Ein psychiatrischer Bericht, unterzeichnet von Herman Carter. Er beschreibt den Gedächtnisverlust eines Patienten und enthält Empfehlungen für die nächsten Schritte der Prozedur.“","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"<b>Erhöht enorm</b> die Chance, in Lérys Gedenkinstitut geschickt zu werden, wenn sie verbrannt wird.","name":"Kaputte Brille","flavor":"„Verbogene Lesebrille. Auf den kaputten Gläsern befinden sich Tropfen getrockneten Bluts.“","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"<b>Erhöht leicht</b> die Wahrscheinlichkeit, in den roten Wald geschickt zu werden, wenn er verbrannt wird.<br><li>Kombinierbar.</li>","name":"Bemalter Flusskiesel","flavor":"„Ein glatter, geschmeidiger Kieselstein, der in einem Wasserlauf poliert wurde. Mit roter, schwarzer und weißer Farbe dekoriert, sodass er wie ein ernst dreinschauender Bär aussieht.“","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"<b>Erhöht deutlich</b> die Wahrscheinlichkeit, in den roten Wald geschickt zu werden, wenn es verbrannt wird.<br><li>Kombinierbar.</li>","name":"Kinderbuch","flavor":"„Ein uraltes, zerfleddertes Geschichtenbuch, dessen Seiten Opfer der Elemente wurden.“","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, in den roten Wald geschickt zu werden, wenn sie verbrannt wird.","name":"Die letzte Maske","flavor":"„Eine wunderschön gefertigte Tigermaske, die einem Kind perfekt passen würde. Auf der Rückseite befindet sich eine verblasste Notiz in kyrillischer Schrift.“","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, nach Springwood geschickt zu werden, wenn er verbrannt wird.","name":"Der Rattenfänger","flavor":"„Von der Stadt verraten, holt er sich seine Rache, indem er ihnen alle ihre Kinder nimmt.“","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"Die Verbrennung dieser Opfergabe gewährt dir Schutz gegen den Verlust deiner Zusätze am Ende der Prüfung.","name":"Schwarze Abwehr","flavor":"„Höre meine Stimme, verschone mich, bewahre mich vor der Leere.“","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"Die Verbrennung dieser Opfergabe gewährt dir Schutz gegen den Verlust deiner Gegenstände und Zusätze.","name":"Weiße Abwehr","flavor":"\\"Bewahre mich vor dem Bösen, verteidige mich und stirb.\\"","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, zum Yamaoka-Anwesen geschickt zu werden, wenn es verbrannt wird.","name":"Wappen der Yamaoka-Familie","flavor":"„Ein zerstörtes Zuhause verlässt man nie. Man läuft nur so lange davon, bis einen die Erinnerungen nicht mehr verfolgen.“","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"Bittet den Entitus, alle Opfergaben abzulehnen, die die Wahrscheinlichkeit ändern, zu einem bestimmten Reich geschickt zu werden.<br>Lässt sich nur abbrechen, wenn vier identische Reich-Opfergaben gespielt werden.","name":"Opferabwehr","flavor":"„Blind unterwerfen wir uns deinem Willen und bitten dich um Führung.“","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, zur Midwich Elementary School geschickt zu werden, wenn man verbrennt.","name":"Marys Brief","flavor":"„In meinen rastlosen Träumen sehe ich diese Stadt.“","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"<b>Erhöht enorm</b> die Wahrscheinlichkeit, in die Gideon-Fleischfabrik geschickt zu werden, wenn es verbrannt wird.","name":"Puzzleteil","flavor":"„Herzlichen Glückwunsch. Sie leben weiter. Die meisten Menschen sind so undankbar, dass sie noch leben. Aber Sie nicht. Jetzt nicht mehr.“","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"<b>Erhöht enorm</b> die Chance, bei Verbrennungen zum Hawkins National Laboratory geschickt zu werden.","name":"Laborausweis vom Hawkins National Laboratory ","flavor":"„Ein durchnässter und blutverschmierter Ausweis mit einer Seriennummer.“","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"<b>Erhöht enorm</b> die Chance, bei Verbrennung zum Grab von Glenvale geschickt zu werden.","name":"Staubige Schlinge","flavor":"„Frag die Leute in diesem staubigen Land übers Überleben aus, und sie werden dir sagen, was eine Schlinge wirklich ist: eine verdammte Gnade.“","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"Eine schreckliche, den Magen durchschüttelnde Torte zur Feier von drei gemeinsamen Jahren. Gewährt <b>103 %</b> Bonus-Blutpunkte in allen Kategorien und für alle Spieler in dieser Prüfung.<br><li>Kombinierbar.</li>","name":"Ekeltorte","flavor":"„Herzlichen Glückwunsch! Auf unsere drei gemeinsamen Jahre!“<br>–Das Team von Dead by Daylight","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"Eine spektakulär schreckliche Torte zur Feier von vier gemeinsamen Jahren. Ist 1 % leckerer als eine Ekeltorte. Gewährt <b>104 %</b> Bonus-Blutpunkte in allen Kategorien und für alle Spieler in dieser Prüfung.<br><li>Kombinierbar.</li>","name":"Torte des Grauens","flavor":"„Herzlichen Glückwunsch! Auf viele weitere Jahre!“<br>– Das Team von Dead by Daylight","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/de/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Eine dünne, breite Linse in perfektem Zustand. Streut das Licht der Taschenlampe, verringert jedoch die Reichweite des Lichtstrahls.<br><li><b>Weitet moderat</b> den Lichtstrahl der Taschenlampe.</li><li><b>Verringert leicht</b> die Reichweite des Lichtstrahls.</li>","name":"Streulinse","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"Eine winzige Taschenlampenglühbirne mit höherer Wattzahl für einen helleren, kraftvolleren Lichtstrahl.<br><li><b>Verringert leicht</b> den Radius des Lichtstrahls.</li><li><b>Erhöht leicht</b> die Helligkeit des Lichtstrahls.</li><li><b>Erhöht leicht</b> die Dauer der Erblindung.</li>","name":"Powerglühbirne","flavor":"\\\\„Selbst das kräftigste Licht kann die Dunkelheit des schwarzen Nebels nicht durchdringen.\\\\“","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"Ein Lederband, das für bessere Griffigkeit um die Taschenlampe gewickelt wurde.<br><li><b>Verstärkt leicht</b> die Genauigkeit der Taschenlampe.</li>","name":"Ledergriff","flavor":"\\\\„Für zu viele waren schwitzige Hände das Todesurteil.\\\\“","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"Eine Standardbatterie unbekannter Marke.<br><li>Fügt einer Standardtaschenlampe <b>2 Sekunden</b> Nutzungsdauer hinzu.</li>","name":"Batterie","flavor":"\\\\„Eine weitere, fast leere Batterie.\\\\“","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"Eine Linsen- und Reflektorkombination, welche den Lichtstrahl der Taschenlampe verstärkt.<br><li><b>Erhöht moderat</b> die Helligkeit des Lichtstrahls.</li><li><b>Erhöht moderat</b> die Dauer der Erblindung.</li>","name":"Totalreflexions-Optik","flavor":"\\\\„Möge das Licht sie aus dem Schleier der Dunkelheit herausbrennen.\\\\“","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"Ein Gummigriff für besseren Halt, speziell für Taschenlampen.<br><li><b>Erhöht moderat</b> die Genauigkeit der Taschenlampe.</li>","name":"Gummigriff","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"Eine Glühbirne, dafür bestimmt, das Leben einer Taschenlampenbatterie zu verlängern.<br><li><b>Verringert moderat</b> den Verbrauch der Taschenlampenbatterie.</li>","name":"Einfacher Verstärkerdraht","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"Eine Batterie für \\\\„industrielle Anwendungen\\\\“.<br><li>Fügt einer Standardtaschenlampe <b>4 Sekunden</b> Nutzungsdauer hinzu.</li>","name":"Hochleistungsbatterie","flavor":"\\\\„Eine Batterie, die mit 8 Stunden Leistungsdauer beworben wird, hält im schwarzen Nebel nur wenige Sekunden.\\\\“","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"Eine dicke Glaslinse, die den Taschenlampenlichtstrahl bündelt, um seine Intensität zu erhöhen.<br><li><b>Erhöht leicht</b> die Reichweite des Lichtstrahls.</li><li><b>Verringert leicht</b> den Radius des Lichtstrahls.</li><li><b>Erhöht leicht</b> die Helligkeit des Lichtstrahls.</li><li><b>Erhöht leicht</b> die Dauer der Erblindung.</li>","name":"Fokuslinse","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"Ein neues Batteriemodell, das länger anhält.<br><li>Fügt einer Standardtaschenlampe <b>6 Sekunden</b> Nutzungsdauer hinzu.</li>","name":"Langlebige Batterie","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"Eine chemische Glühbirne, die ein intensives, helles Licht erzeugt.<br><li><b>Erhöht deutlich</b> die Helligkeit des Lichtstrahls.</li><li><b>Erhöht deutlich</b> die Dauer der Erblindung.</li>","name":"Starke Halogenlampe","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"Eine breite Linse aus kratzfestem Saphir, die die Stärke und die Reichweite des Lichtstrahls optimiert.<br><li><b>Weitet moderat</b> den Lichtstrahl der Taschenlampe.</li><li><b>Verstärkt leicht</b> den Lichtstrahl der Taschenlampe.</li><li><b>Verstärkt moderat</b> die Helligkeit des Lichtstrahls.</li><li><b>Erhöht moderat</b> die Dauer der Erblindung.</li>","name":"Premium-Saphirlinse","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"Eine schwere und völlig trübe Glühbirne unbekannter Herkunft, die ein schwaches Licht ausstrahlt, selbst wenn sie ausgeschaltet ist.<br><li><b>Erhöht enorm</b> die Helligkeit des Lichtstrahls.</li><li><b>Erhöht enorm</b> die Dauer der Erblindung.</li><li><b>Erhöht leicht</b> den Batterieverbrauch der Taschenlampe.</li>","name":"Merkwürdige Glühbirne","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"Ein straff geknotetes Seil, das bei Gebetsritualen verwendet wird. Kann am Schlüssel befestigt werden.<br><li>Fügt dem Schlüssel <b>10 Sekunden</b> Nutzungsdauer hinzu.</li>","name":"Gebetsseil","flavor":"\\"Bete, so viel du willst, doch deine Worte werden irgendwo dort im Nebel verschwinden.\\"","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"Eine poröse und zerkratzte weiße Perle. Ein winziger Biegering ermöglicht es, die Perle am Hauptschlüssel zu befestigen.<br><li><b>Erhöht moderat</b> die Reichweite der Aurawahrnehmungsfähigkeit des Schlüssels.</li>","name":"Zerkratzte Perle","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"Eine Kette, aus matten Glasperlen verschiedener Größe, die in Gebetsritualen benutzt wird. Kann dem Hauptschlüssel beigefügt werden.<br><li>Fügt dem Hauptschlüssel <b>15 Sekunden</b> Gebrauchsdauer hinzu.</li>","name":"Gebetsperlen","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"Ein stark abgenutztes Messingabzeichen. Falls einst eine Inschrift oder Zeichnung eingraviert war, ist sie heute komplett verschwunden. Es kann mit seinem Biegering am Schlüssel befestigt werden, um die Aurawahrnehmungsfähigkeit des Schlüssels zu beeinflussen.<br><li>Zeigt die <b>Auren von Überlebenden</b> im Umkreis von <b>24 Metern</b> an.</li>","name":"Abgegriffenes Abzeichen","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"Ein goldenes Abzeichen mit glanzlosem Erscheinungsbild. Beide Seiten sind glatt und ohne jegliche Inschrift. Es kann mit seinem Biegering am Schlüssel befestigt werden, um die Aurawahrnehmungsfähigkeit des Schlüssels zu beeinflussen.<br><li>Zeigt die <b>Auren von Überlebenden</b> im Umkreis von <b>48 Metern</b> an.</li>","name":"Goldenes Abzeichen","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"Ein alltäglicher Schlüsselring mit einem ungewöhnlichen, dunkelblauen Glanz. Um den Schlüssel selbst in dunkelsten Zeiten nicht zu verlieren, bindet der Ring ihn an den Nutzer.<br><li>Verliere im Falle deines Todes nicht den Schlüssel, sondern lieber diesen Zusatz.</li>","name":"Geschlungener Ring","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"Dieses undurchsichtige Glasstück gibt ein dumpf schwingendes Geräusch von sich. Wenn die Bodenluke mit dem Schlüssel aufgeschlossen wird, schützt der Glas-Zähler den Schlüssel vor dem Zerbrechen und leitet die Energie des Nebels in das Glas um.<br><li>Verliere beim Öffnen der Bodenluke nicht den Schlüssel, sondern lieber diesen Zusatz.</li>","name":"Milchiges Glas","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"Ein blutroter Bernstein, durchzogen von schwarzen Adern. Der Bernstein fühlt sich warm an. Er kann mit seinem Biegering am Schlüssel befestigt werden, um die Aurawahrnehmungsfähigkeit des Schlüssels zu beeinflussen.<br><li>Zeigt die <b>Aura des Killers</b> an, wenn du dich im Umkreis von <b>32 Metern</b> befindest. <b>Hoher Verbrauch</b> der Schlüsselenergie.</li>","name":"Blutbernstein","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"Ein Teilstück eines dichten, faserigen Materials. Eine unvollständige und verblasste Kartenzeichnung ist darauf abgebildet, welche für sich allein nutzlos ist.<br><li>Fügt eine <b>5 Sekundenaufladung</b> zu einer beliebigen Karte hinzu.</li>","name":"Kartenzusatz","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"Ein kurzes elektrisches Kabel. Beide Enden sind schwer beschädigt, als wäre es gewaltsam aus seinem Bestimmungsort gerissen worden. Es kann um eine Karte gebunden werden, um deren Aurawahrnehmungsfähigkeit zu verbessern.<br><li>Schaltet die Fähigkeit frei, <b>Ausgangstore</b> aufzuspüren.</li>","name":"Gelbes Kabel","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"Ein Holzstempel mit einer schraffierten Gummi-Unterseite zum Kennzeichnen von Dokumenten. Es ist unbekannt, wofür oder von wem dieser Stempel ursprünglich benutzt wurde. Kann mit einer Karte genutzt werden.<br><li><b>Erhöht moderat</b> die Reichweite der Kartenaufspürung.</li>","name":"Ungewöhnlicher Stempel","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"Eine schleimige, durchsichtige Substanz mit einem gespenstischen, lila Farbton. Dieses Gallert unbekannter Herkunft ist äußerst hitzeresistent.<br><li><b>Verlangsamt moderat</b> die Verbrennungs-Geschwindigkeit der Karte.</li>","name":"Hemmflüssigkeit","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"Ein stacheliges und rauhes Stück Schnur von tiefroter Farbe. Es kann um eine Karte gebunden werden, um ihre Aura-Lesefähigkeit zu verbessern.<br><li>Schaltet die Fähigkeit frei, <b>Killereigentum</b> zu verfolgen.</li>","name":"Rote Schnur","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"Ein seltsames, mit Gold umrandetes Glas, das zur Vergrößerung der Karte und zum Markieren einer bestimmten Position genutzt werden kann. Das Glas gibt Energie ab, die von Überlebenden gefühlt und gesehen werden kann.<br><li>Schaltet die Markierfähigkeit als Sekundäraktion frei.</li><li>Erstellt eine Markierung, die von allen Überlebenden gesehen werden kann.</li>","name":"Glasperle","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"Ein Stempel, geschnitzt aus robustem, hellem Holz. Der Text auf der Unterseite ist unleserlich: \\\\„kw’zvre’od\\\\“. Kann mit einer Karte genutzt werden.<br><li><b>Erhöht deutlich</b> die Reichweite der Kartenaufspürung.</li>","name":"Skurriler Stempel","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"Eine glatte, schwarze Schnur mit sanftem Anschein. Kann um eine Karte gewickelt werden, um ihre Aura-Lesefähigkeit zu verstärken.<br><li>Schaltet die Fähigkeit frei zum Aufspüren von <b>schwarzen Schlössern</b>.</li>","name":"Schwarze Seidenkordel","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"Ein aufwendiges Linsenset, verpackt in ein erstaunlich komplexes Gerät. Die Zahnräder zur Steuerung der Linsenausrichtung bewegen sich von selbst, ganz so, als würden sie sich auf etwas fokussieren, das für Menschenaugen unsichtbar ist.<br><li>Alle Überlebenden sehen die von der Karte erzeugte Aura, wenn ihr Besitzer sie aktiviert.</li>","name":"Kristallperle","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"Medizinische Einweghandschuhe zur Vermeidung von Kreuzkontamination.<br><li><b>Erhöht moderat</b> den Fortschrittsbonus für großartige Fähigkeitschecks.</li>","name":"Gummihandschuhe","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"Medizinisch geeignetes Band zum Verschließen kleinerer Wunden.<br><li><b>Erhöht leicht</b> die Heilungsgeschwindigkeit.</li>","name":"Schmetterlingsband","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"Ein Pack Bandagen, normalerweise im Erste-Hilfe-Kasten zu finden.<br><li>Fügt <b>8 Einheiten</b> zum Sani-Kasten hinzu.</li>","name":"Bandagen","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"Ein gewöhnlicher Schwamm, mit dem zusätzliches Blut aufgesaugt werden kann, um leichteren Zugang zu Wunden zu erhalten.<br><li><b>Erhöht deutlich</b> den Fortschrittsbonus für großartige Fähigkeitschecks.</li>","name":"Schwamm","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"Eine Packung Bandagen. Da sie ohne Verbandklammern aneinander haften, können sie schneller angelegt werden und müssen seltener nachgerichtet werden.<br><li>Fügt <b>8 Einheiten</b> zum Sani-Kasten hinzu.</li><li><b>Erhöht leicht</b> die Heilungsgeschwindigkeit.</li>","name":"Selbsthaftende Bandagen","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"Es ist nicht wirklich ein medizinisches Gerät, aber es dient zum schnellen und schmerzhaften Verschließen von Wunden.<br><li><b>Erhöht moderat</b> die Wahrscheinlichkeit, einen Fähigkeitscheck auszulösen.</li><li>Gewährt <b>100 % Bonus-Blutpunkte </b>für einen erfolgreichen großartigen Fähigkeitscheck.</li><li><b>Erhöht leicht</b> die Heilungsgeschwindigkeit.</li>","name":"Nadel und Faden","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"Eine Schere, entworfen, um einfach durch Stoffe zu schneiden.<br><li><b>Erhöht moderat</b> die Heilungsgeschwindigkeit.</li>","name":"Medizinische Schere","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"Eine sterile Binde, die bei vielen Arten von Wunden zum Einsatz kommt. Teil eines umfassenden Wundbehandlungssystems.<br><li>Fügt <b>12 Einheiten</b> zum Sani-Kasten hinzu.</li>","name":"Mullbinde","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"Ein medizinisches Gerät zum Verschließen und Stützen von Körpergewebe. Es ist zwar sehr effektiv, aber auch sehr schwierig zu benutzen.<br><li><b>Erhöht deutlich</b> die Wahrscheinlichkeit, einen Fähigkeitscheck auszulösen.</li><li>Gewährt <b>150 % Bonus-Blutpunkte </b>für einen erfolgreichen großartigen Fähigkeitscheck.</li><li><b>Erhöht leicht</b> die Heilungsgeschwindigkeit.</li>","name":"Chirurgischer Faden","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"Eine Packung Gelpolster zum Verschließen stark nässender Wunden.<br><li>Fügt <b>16 Einheiten</b> zum Sani-Kasten hinzu.</li>","name":"Gelkompressen","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"Ein äußerst saugfähiger Verband, um das Austreten von Körperflüssigkeiten bei großen Bauchwunden zu verhindern.<br><li><b>Erhöht deutlich</b> die Heilungsgeschwindigkeit.</li><li><b>Reduziert die Einheiten</b> um <b>8</b>.</li>","name":"Unterleibsverband","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"Ein weißes Pulver mit Gerinnungsmitteleigenschaften. Streue dieses Mittel auf eine Wunde, um die Blutung zu stoppen.<br><li>Drücke während der Heilung mit dem Sani-Kasten die Taste für die <i>Sekundäraktion</i>, um das Blutstillungsmittel zu verwenden.</li><li>Wird das <i>Blutstillungsmittel</i> bei einem verletzten Überlebenden verwendet, so erhält dieser den Statuseffekt <b>Kondition</b>, und zwar für <b>8 Sekunden</b>. <li>Verbraucht bei Nutzung den Sani-Kasten.</li>","name":"Blutstillungsmittel","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"Ein Blutstillungsmittel, das Blutungen binnen Sekunden stoppt.<br><li>Drücke die Taste für die <i>Sekundäraktion</i> während der Heilung mit dem Sani-Kasten, um die Blutstillungsspritze zu verwenden.</li><li>Der betroffene Überlebende erhält <b>16</b> Sekunden nach der Nutzung passiv einen Gesundheitsstatus.</li><li>Die benötigte Zeit wird von Talenten, Gegenständen und Zusätzen beeinflusst, die sich auf die <i>Heilungsgeschwindigkeit</i> auswirken.</li><li>Der Effekt wird unterbrochen, wenn sich der Gesundheitsstatus des Betroffenen verändert oder er aufgenommen wird.</li><li>Verbraucht bei Nutzung den Sani-Kasten.</li>","name":"Blutstillungsspritze","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"Nützliches Werkzeug, um Schläuche abzuklemmen oder Drähte zu befestigen und dadurch Beschädigungen und Verletzungen zu verhindern.<br><li>Die Geräusche, die du beim Reparieren verursachst, werden gedämpft. Außerdem wird die Entfernung, in der sie gehört werden können, um 8 m verringert.</li>","name":"Klemmzange","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"Federn, Schrauben und Zahnräder. Meist unbrauchbares Gerümpel.<br><li>Fügt <b>8 Einheiten</b> zur Werkzeugkiste hinzu.</li>","name":"Schrottteile","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"Ein alltäglicher Stoff. Verdächtig sauber.<br><li><b>Erhöht leicht</b> die Reparaturgeschwindigkeit der Werkzeugkiste.</li>","name":"Saubere Lumpen","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"Eine tragbare, aber schwere Kupferdrahtspule.<br><li>Fügt <b>12 Einheiten</b> zur Werkzeugkiste hinzu.</li>","name":"Drahtspule","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"Steckschlüsselaufsätze, die es aufgrund ihrer Beweglichkeit möglich machen, schwer zugängliche Bolzen innerhalb mechanischer Geräte zu erreichen.<br><li><b>Erhöhen moderat</b> die Reparaturgeschwindigkeit der Werkzeugkiste.</li>","name":"Schwenkbare Steckschlüsselaufsätze","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"Dicke Handschuhe, die zwar die Fingerfertigkeit einschränken, dafür aber die Hände vor Verletzungen schützen.<br><li>Dadurch wird der Killer nicht benachrichtigt, wenn mit der Werkzeugkiste ein Haken sabotiert wird.</li>","name":"Schutzhandschuhe","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"Jemand hat schnell etwas auf dieses Rindenstück gemalt, das allem Anschein nach eine Reparaturanleitung ist.<br><li>Eliminiert Fähigkeitschecks während der Reparaturen mit der Werkzeugkiste.</li>","name":"Anleitungen","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"Ein verstellbarer Schraubenschlüssel mit einem robusten Griff. Unverzichtbar in jeder Werkzeugkiste.<br><li>Haken, die mit dieser Werkzeugkiste sabotiert werden, benötigen zusätzliche 15 Sekunden zum erneuten Erscheinen.</li>","name":"Gripzange","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"Ein einfaches Schneidwerkzeug aus einem gezackten Metalldraht und zwei hölzernen Griffen.<br><li><b>Erhöht leicht</b> die Sabotagegeschwindigkeit der Werkzeugkiste.</li>","name":"Schneidedraht","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"Eine kleine Handsäge ausgestattet mit einem Metallschneidemesser.<br><li><b>Erhöht moderat</b> die Sabotagegeschwindigkeit der Werkzeugkiste.</li>","name":"Metallsäge","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"Dieses komplexe mechanische Teil erscheint seltsam fehl am Platz. Es ist sauber und glänzend, wie frisch aus der Fabrik.<br><li>Die <b>Reparaturaktion mit der Werkzeugkiste</b> wird durch <b>Nagelneues Teil installieren</b> ersetzt.</li><li><i>Nagelneues Teil installieren</i> repariert automatisch <b>15 %</b> eines Generators in <b>5 Sekunden</b>.</li><li>Während des Installierens erscheinen <b>2 schwierige Fähigkeitschecks</b>.</li><li>Das Bewältigen jedes Fähigkeitschecks resultiert in <b>5 % Reparaturfortschritt am Generator</b>, maximal aber <b>25 % Reparaturfortschritt am Generator</b>.</li><li><i>Dieser Zusatz wird bei seiner Benutzung vollständig verbraucht.</i></li>","name":"Nagelneues Teil","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"Ein gravierter Ehering, der aus dem Nebel aufgetaucht ist und mit einer unbeschreiblichen und unbegreiflichen Energie schwingt. <li>Enthüllt die Aura des Ziels der Besessenheit.</li><li>Verringert deine Chancen, zum Ziel der Besessenheit des Killers zu werden.</li>","name":"Einmaliger Ehering","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/de/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Gewährt <b>50 %</b> Bonus-Blutpunkte in der Kategorie „Ziel“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Lorbeerrosenduftsäckchen","flavor":"„Ein handtellergroßes, handgenähtes Säckchen, gefüllt mit getrockneten Blättern. Verbreitet ein schwaches, teeähnliches Aroma.“","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"Gewährt <b>75 %</b> Bonus-Blutpunkte in der Kategorie „Ziel“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Frische Lorbeerrosen","flavor":"„Eine wundervolle lila Blume, die inmitten des verdorbenen Sumpfes gedeiht. Verbreitet ein mildes, teeähnliches Aroma.“","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in der Kategorie „Ziel“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Wohlriechende Lorbeerrosen","flavor":"„Eine wundervolle lila Blume, die inmitten des verdorbenen Sumpfes gedeiht. Verbreitet ein starkes, teeähnliches Aroma.“","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"Gewährt <b>50 %</b> Bonus-Blutpunkte in der Kategorie „Überleben“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Fuchsschwanz-Duftkissen","flavor":"„Ein handtellergroßes, handgenähtes Säckchen, gefüllt mit perlenähnlichen Körnern. Amaranth, sagt man, ist unvergänglich.“","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"Gewährt <b>75 %</b> Bonus-Blutpunkte in der Kategorie „Überleben“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Frischer Fuchsschwanz","flavor":"„Die hellgrünen Blätter sind von eigenartigen, purpurroten Adern durchzogen. Amaranth, sagt man, ist unvergänglich.“","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in der Kategorie „Überleben“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Wohlriechender Fuchsschwanz","flavor":"„Die hellgrünen Blätter sind von eigenartigen, purpurroten Adern durchzogen. Riecht stark nach Rettich.“","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"Gewährt <b>50 %</b> Bonus-Blutpunkte in der Kategorie „Selbstlosigkeit“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Primelblütenduftkissen","flavor":"„Ein handtellergroßes, handgenähtes Säckchen mit 4 goldenen Blütenblättern darin. Die Primel öffnet sich erst kurz bevor die Nacht den Tag ablöst.“","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"Gewährt <b>75 %</b> Bonus-Blutpunkte in der Kategorie „Selbstlosigkeit“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Frische Primelblüten","flavor":"„Goldene Blumen, genau im richtigen Moment geerntet. Die Primel öffnet sich erst kurz bevor die Nacht den Tag ablöst.“","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in der Kategorie „Selbstlosigkeit“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Wohlriechende Primelblüten","flavor":"„Goldene Blumen, genau im richtigen Moment geerntet. Verbreiten ein stark erdiges und beruhigendes Aroma.“","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"Gewährt <b>50 %</b> Bonus-Blutpunkte in der Kategorie „Tapferkeit“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Bartnelkenduftkissen","flavor":"„Ein handtellergroßes, handgenähtes Säckchen mit einer Mischung aus blassen Blütenblättern und graublauem Blattwerk darin. Es verströmt einen stark würzigen, nelkenähnlichen Geruch.“","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"Gewährt <b>75 %</b> Bonus-Blutpunkte in der Kategorie „Tapferkeit“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Frische Bartnelke","flavor":"„Blumen mit pinken Blütenblättern und einem blutroten Inneren. Verbreitet einen würzigen, nelkenähnlichen Duft.“","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in der Kategorie „Tapferkeit“.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Frische Bartnelke","flavor":"„Blumen mit pinken Blütenblättern und einem blutroten Inneren. Verbreitet einen stark würzigen, nelkenähnlichen Duft.“","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"Gewährt <b>25 %</b> Bonus-Blutpunkte in <b>allen</b> Kategorien für alle Überlebenden.<br><li>Kombinierbar.</li>","name":"Umwickelter Umschlag","flavor":"„Ein offener Umschlag, der wieder verschlossen und mit 4 farbigen Bändern umwickelt wurde.“","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"Gewährt <b>25 %</b> Bonus-Blutpunkte in allen Kategorien.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Versiegelter Umschlag","flavor":"„Ein nicht adressierter, ungeöffneter Brief, der im Lauf der Zeit vergilbt ist. Sein Inhalt wird nie bekannt werden.“","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"Gewährt <b>100 %</b> Bonus-Blutpunkte in allen Kategorien.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Kuchen der Flucht","flavor":"„Das Bild dieses Kuchens ist auf jeden Fall echt.“","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"<b>Erhöht leicht</b> das Glück.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Kreidebeutel","flavor":"„Ein kleines Baumwollsäckchen, gefüllt mit weißem Kalkpulver unbekannter Herkunft. Manche glauben, es bringe Glück.“","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>Erhöht moderat</b> das Glück <b>aller</b> Überlebenden.<br><li>Kombinierbar.</li>","name":"Cremekreidebeutel","flavor":"„Eine bröckelige Miniaturstatuette aus schwarzem Salz, die eine kniende Frau darstellt, welche ein Gabe darbringt. Manche glauben, sie bringe Glück.“","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"<b>Erhöht deutlich</b> das Glück.<br><li>Betrifft nur den Besitzer.</li><li>Kombinierbar.</li>","name":"Elfenbeinkreidebeutel","flavor":"„Ein kleiner Lederbeutel mit einer geraden weißen Linie, die auf einer Seite von Hand aufgenäht wurde. Der Beutel ist mit elfenbeinfarbenem Kreidepulver gefüllt, das im Mondlicht schimmert. Manche glauben, es bringe Glück.“","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>Erhöht leicht</b> das Glück <b>aller</b> Überlebenden.<br><li>Kombinierbar.</li>","name":"Salzbeutel","flavor":"„Ein kleiner Baumwollbeutel, gefüllt mit schwarzen Salzkristallen. Manche glauben, sie bringen Glück. Verschütte sie nicht.“","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>Erhöht deutlich</b> das Glück <b>aller</b> Überlebenden.<br><li>Kombinierbar.</li>","name":"Vigos Gefäß mit salzigen Lippen","flavor":"„Ein fest verschlossenes Glasgefäß, das zerrissene menschliche Lippen enthält, die in einer trüben Lake schwimmen. Manche glauben, sie bringen Glück.“","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"Bittet den Entitus darum, <b>1</b> weitere Truhe zu erschaffen.<br><li>Kombinierbar.</li>","name":"Angelaufene Münze","flavor":"„Ein rundes Metallstück, das jeglichen Glanz verloren hat.“","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"Bittet den Entitus darum, <b>2</b> weitere Truhen zu erschaffen.<br><li>Kombinierbar.</li>","name":"Blanke Münze","flavor":"„Ein sauberes und poliertes Goldstück.“","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"Besänftigt den Entitus und <b>erhöht leicht</b> die <b>Entfernung</b> zwischen Opferhaken in der Welt.<br><li>Kombinierbar.</li>","name":"Versteinertes Eichenholz","flavor":"„Ein zerfallendes Stück versteinerten Holzes.“","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"Du beginnst die Prüfung mit jemand anderem.<br><li>Geheim.</li>","name":"Tuch der Vereinigung","flavor":"„Ein geknotetes Stück Stoff.“","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"Alle Überlebenden beginnen die Prüfung gemeinsam.<br><li>Geheim.</li>","name":"Tuch der Bindung","flavor":"„Ein rechtwinkliges und ausgewaschenes Stück Stoff mit kleinen Knoten an jedem Ende.“","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"Du beginnst die Prüfung so weit wie möglich vom Killer entfernt.<br><li>Geheim.</li>","name":"Vigos Leichentuch","flavor":"„Ich fand Sonderbares in den Jahren im Nebel, aber erst jetzt verstehe ich es, die unwiderlegbaren Regeln des Nebels zu brechen.“ –Vigos Tagebuch","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/de/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Jedes Mal, wenn ein Generator repariert worden ist, wird dir die Aura des Killers für <span class=\\"Highlight1\\">{0} Sekunden</span> angezeigt.<br>Wenn der letzte Generator mit Energie versorgt ist, wird dir die Aura des Killers für <span class=\\"Highlight2\\">{1} Sekunden</span> angezeigt.","name":"Dunkle Wahrnehmung","flavor":"„Lass Dir von einem alten Hasen sagen: Werde langsamer, überstürze nichts und versuche, dir nicht so viele Sorgen zu machen! Der beste Weg, ihn zu besiegen, ist, zu wissen, wie er denkt.“ –Verlorene Tonbänder, Murf","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Paranoia und die Angst vorm Versagen halten dich davon ab, Fehler zu wiederholen.<br>Die Auren von <span class=\\"Highlight1\\">{0}</span> Generatoren, die nahe beieinander stehen, werden dir zu Beginn der Partie und jedes Mal, wenn ein Generator vollständig repariert wurde, <span class=\\"Highlight2\\">{1} Sekunden</span> lang angezeigt.<br>Wenn du eine Karte hältst, die Generatoren aufspüren kann, werden die Generatoren, die durch <i>Déjà-vu-Erlebnis</i> angezeigt werden, der Karte hinzugefügt.","name":"Déjà-vu-Erlebnis","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"Die wachsende Chance auf eine erfolgreiche Flucht erfüllt dich mit Hoffnung und verleiht dir Flügel. Du erhältst <span class=\\"Highlight1\\">{0} %</span> mehr des Statuseffekts <b><i>Eile</i></b>, und zwar für <span class=\\"Highlight3\\">{1} Sekunden</span>, sobald die Ausgangstore mit Energie versorgt sind.<br>","name":"Hoffnung","flavor":"\\"Anschnallen, Leute! Los geht\'s!\\" - Verlorene Tonbänder: Nikki","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Während du am Haken hängst, werden allen anderen Überlebenden alle Auren der Überlebenden angezeigt. Wenn der Killer im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> ist, wird seine Aura allen anderen Überlebenden angezeigt.<br><br>Während ein anderer Überlebender als du festgehakt ist, werden dir die Auren aller anderen Überlebenden angezeigt. Ist der Killer im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> um den festgehakten Überlebenden, wird dir die Aura des Killers angezeigt.","name":"Verwandt","flavor":"„Seid nett zu einander. Wir sitzen alle im selben Boot.“ – Verlorene Tonbänder: Sujan","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"Dein Lauf ist leicht und sanft, was das Verfolgen deiner Spuren schwieriger macht. Kratzspuren bleiben <span class=\\"Highlight1\\">{0} Sekunden</span> weniger sichtbar als normal.","name":"Leichtgewicht","flavor":"\\"Mach langsam, er weiß, wo du warst ... Wie ich stets zu sagen pflege: Leb langsam und stirb alt.\\" - Verlorene Tonbänder: Dylan","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"Es ist unvorstellbar, jemanden zurückzulassen. Sobald zumindest ein Ausgangstor geöffnet wurde, erhältst du folgende Effekte:<br><li><span class=\\"Highlight1\\">{0} %</span> zusätzliche Blutpunkte, wenn du andere Überlebende heilst oder vom Haken rettest.</li><li><span class=\\"Highlight2\\">{1} %</span> zusätzliche Aktionsgeschwindigkeit, wenn du andere Überlebende heilst oder vom Haken rettest.</li><li>Die Auren aller anderen Überlebenden werden dir angezeigt.</li>","name":"Niemand wird zurückgelassen","flavor":"„... yeah, ohne Mist. Aber ich glaube, wir können ihn austricksen und zu Fall bringen, wenn wir zusammenarbeiten. Sei nicht so berechenbar und eigennützig!“ – Verlorene Tonbänder: Clyde","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Die Auren von ungeöffneten Kisten und Gegenständen werden dir angezeigt, wenn du im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> stehst. Gewährt eine <b>deutlich</b> verbesserte Chance, in den Truhen einen Gegenstand von höherer Seltenheit zu finden.","name":"Plündererspürsinn","flavor":"\\"Die Pioniere haben diese Kleinen stundenlang geplündert.\\" – Verlorene Tonbänder: Aizeyu","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"Du hast die unbestreitbare Fähigkeit, Gefahr zu spüren. Erhalte eine hörbare Warnung, wenn du in einem <span class=\\"Highlight1\\">45 Grad-</span>Kegel in die Richtung des Killers schaust, und zwar innerhalb einer Reichweite von <span class=\\"Highlight2\\">{0} Metern</span>. Die Vorwarnung hat eine Abklingzeit von <span class=\\"Highlight3\\">{1} Sekunden</span> nach jeder Aktivierung.","name":"Vorwarnung","flavor":"„Ich habe ein ungutes Gefühl dabei!“","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"Du bist in ernsten Situationen motiviert. Gewährt <span class=\\"Highlight1\\">{0} %</span> zusätzliche Geschwindigkeit fürs Reparieren, Sabotieren, Heilen, Retten von Haken, Springen, Zerstören von Totems, Öffnen von Ausgangstoren und Aufschließen von Truhen, wenn du verletzt bist.","name":"Widerstandsfähigkeit","flavor":"\\"Konzentriere dich, auch in diesen hoffnungslosen Zeiten.\\"","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"Du hast einen wirksamen Weg gefunden, um von Haken zu entkommen.<br><li>Gewährt dir bis zu <span class=\\"Highlight1\\">{0}</span> zusätzliche Fluchtversuche vom Haken.</li><li>Die Chance, von Haken zu entkommen, ist um <span class=\\"Highlight2\\">{1} %</span> erhöht.</li>","name":"Gerissenes Fleisch","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"Du hast die unbestreitbare Fähigkeit, Gefahr zu spüren. Erhalte eine hörbare Warnung, wenn du in einem <span class=\\"Highlight1\\">45 Grad-</span>Kegel innerhalb einer Reichweite von <span class=\\"Highlight2\\">{0} Metern</span> in die Richtung von Totems schaust. „Niederwild“ hat eine Abklingzeit von <span class=\\"Highlight3\\">{1} Sekunden</span> nach jeder Aktivierung. Für jedes glanzlose Totem und jedes Fluchtotem, das von einem beliebigen Spieler zerstört wird, erhältst du einen Zähler. Der Aufdeckungskegel von „Niederwild“ wird um <span class=\\"Highlight4\\">5 Grad</span> pro Zähler verringert.","name":"Niederwild","flavor":"„Nö.“ – Verlorene Tonbänder: Andy","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"Ein unnatürlicher Rückenschauer warnt dich vor drohendem Unheil. Du erhältst eine Warnung, wenn der Killer sich im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> von dir befindet und genau in deine Richtung blickt. Während „Kalter Rückenschauer“ aktiv ist, steigt die Wahrscheinlichkeit eines Fähigkeitschecks um <span class=\\"Highlight2\\">{1} %</span> und die Erfolgszonen werden um <span class=\\"Highlight3\\">{2} %</span> verkleinert. Während „Kalter Rückenschauer“ aktiv ist, ist deine Geschwindigkeit fürs Reparieren, Heilen, Sabotieren, Retten vom Haken, Springen, Zerstören, Öffnen von Ausgangstoren und Aufschließen von Truhen um <span class=\\"Highlight4\\">{3} %</span> erhöht.","name":"Kalter Rückenschauer","flavor":"\\"Es gibt eine Stimme, die keine Wörter benutzt. Hör zu.\\" – Verlorene Tonbänder: Sassy","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"Du arbeitest am besten, wenn du unter extremem Stress stehst. Die Erfolgszonen großartiger Fähigkeitschecks für Reparaturen und Heilung sind um <span class=\\"Highlight1\\">{0} %</span> größer, wenn du verletzt bist.","name":"Das geschieht nicht","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"Anderen zu helfen, stärkt deine Moral.<br><br>Rettest du einen Überlebenden vom Haken, erhältst du zusätzlich <span class=\\"Highlight1\\">{0} %</span> Geschwindigkeitsanstieg bei Heilungen, und zwar für <span class=\\"Highlight3\\">{1} Sekunden</span>.","name":"Wir schaffen das","flavor":"\\"Ich bin zuversichtlich, dass wir alle in einem Stück entkommen können, wenn wir uns gegenseitig helfen.\\"","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"Schaltet Potenzial in der eigenen Aura-Lesefähigkeit frei. Die Auren von Verbündeten werden dir angezeigt, wenn sie sich im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> befinden.","name":"Bindung","flavor":"\\"Wir müssen als Team arbeiten, denn ihr müsst überleben, damit ich überlebe!\\" - Dwight","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"Erhalte einen Reparaturgeschwindigkeitsbonus von <span class=\\"Highlight1\\">{0} %</span> für jeden anderen Überlebenden, der innerhalb eines Umkreises von <span class=\\"Highlight2\\">{1} Meter(n)</span> an einem Generator arbeitet. Derselbe Bonus wird außerdem auf alle anderen Überlebenden in Reichweite angewendet.<br>Du erhältst <span class=\\"Highlight3\\">{2} %</span> mehr Blutpunkte für Kooperationsaktionen.<br>Überlebende können jeweils nur von einem „Beweise dich“-Effekt profitieren.","name":"Beweise dich","flavor":"„Zeig mir, was du kannst!“ –Dwight","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"Du kannst ein Team zusammenstellen, um effizienter zusammenzuarbeiten. Erhöht die Geschwindigkeit der anderen Überlebenden für folgende Aktionen um <span class=\\"Highlight1\\">{0} %</span>, wenn sie sich in einem Umkreis von <span class=\\"Highlight2\\">{1} Metern</span> von dir aufhalten: Heilung, Sabotage, Rettung vom Haken, Zerstörung von Totems, Öffnen von Ausgangstoren und Aufschließen von Truhen.<br>Überlebende können jeweils nur von einem Anführer-Effekt profitieren.<br>Verlässt ein Überlebender den Wirkungsbereich des Anführer-Talents, dauert der Effekt noch <span class=\\"Highlight3\\">{2} Sekunden</span> lang an.","name":"Anführer","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Du verursachst weniger Geräusche als andere, wenn du über Hindernisse springst oder dich in Schließschränken versteckst.<br><br>Der Wahrnehmungs- und Audioradius von Geräuschen der Spring- und Versteckaktionen ist um <span class=\\"Highlight1\\">{0} %</span> verringert.<br><br>Dieser Effekt kann nur einmal alle <span class=\\"Highlight2\\">{1} Sekunden</span> aktiviert werden.","name":"Schnell und leise","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"Wenn du zu rennen beginnst, verfalle in einen Sprint mit <span class=\\"Highlight1\\">{0}%</span> deiner normalen Laufgeschwindigkeit für maximal <span class=\\"Highlight2\\">{1} Sekunden</span>.<br>Verursacht <span class=\\"Highlight4\\">{2} Sekunden</span> lang <i>Erschöpfung</i>.<br><i>Sprintboost</i> kann bei <i>Erschöpfung</i> nicht verwendet werden.<br>Beim Laufen erholst du dich nicht von <i>Erschöpfung</i>.","name":"Sprintboost","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Du bist erfüllt von unerwarteter Energie, wenn die Flucht kurz bevorsteht. <span class=\\"Highlight1\\">Heile sofort einen <b>Gesundheitsstatus</b></span> und sprinte mit <span class=\\"Highlight2\\">{0}%</span> deiner normalen Laufgeschwindigkeit für <span class=\\"Highlight3\\">{1} Sekunden</span>, wenn die Ausgangstore eingeschaltet sind. Adrenalin wird zurückgehalten, wenn du zum Zeitpunkt, an dem es seine Wirkung entfalten sollte, verhindert bist, und wird aktiviert, wenn du wieder frei bist.<br><i>Adrenalin</i> <b>weckt dich</b> bei Auslösung auf, falls du schläfst.<br><i>Adrenalin</i> ignoriert <i>Erschöpfung</i>.<br>Bewirkt <i>Erschöpfung</i> für <span class=\\"Highlight4\\">{2} Sekunden</span>.<br>Du erholst dich beim Laufen nicht von <i>Erschöpfung</i>.","name":"Adrenalin","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Die Auren von sterbenden oder verletzten Verbündeten werden dir im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> angezeigt. „Einfühlungsvermögen“ zeigt die Auren von Verbündeten, die in direktem Kontakt mit dem Killer sind, nicht an.","name":"Einfühlungsvermögen","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"Du verwandelst Pflanzen, die du in der Nähe des Lagerfeuers gefunden hast, in Tinkturen, die Blutungen verringern. Die <b>Heilungsgeschwindigkeit</b> und die <b>Effizienz von Heilungsgegenständen</b> werden um <span class=\\"Highlight1\\">{0} %</span> gesteigert.<br>","name":"Botanisches Wissen","flavor":"\\"Grundwissen in Botanik könnte eines Tages dein Leben retten.\\"","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"Schaltet die Fähigkeit frei, dich ohne Heilungsgegenstand mit <span class=\\"Highlight1\\">{0} %</span> der normalen Heilungsgeschwindigkeit selbst zu heilen. Erhöht die Effizienz der Selbstheilung mit Heilungsgegenstand um <span class=\\"Highlight3\\">{1} %</span>.","name":"Selbstfürsorge","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"Du kannst dich konzentrieren und verfällst in einen meditationsähnlichen Zustand, um den Schmerz etwas zu betäuben. Durch Verletzungen hervorgerufene Schmerzenslaute werden um <span class=\\"Highlight1\\">{0} %</span> verringert.","name":"Eiserner Wille","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"Tiere scheinen dir zu vertrauen, da sie in deiner Gegenwart oft ruhig bleiben. Reduziert die Wahrscheinlichkeit, Waldkreaturen aufzuschrecken, um <span class=\\"Highlight1\\">{0} %</span>.<br>Durch deine Seelenruhe überwindest du manchmal das Bedürfnis, bei Wahnsinn, Benebelung oder Verletzungen durch den Killer zu schreien.","name":"Seelenruhe","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit.<br><li>Du siehst die Auren von Haken in einem Radius von <span class=\\"Highlight1\\">56 Metern</span> um die Stelle, an der du einen Überlebenden aufgenommen hast.</li><br>Schaltet die Sabotagefähigkeit ohne Werkzeugkiste bei Haken frei.<br><li>Das Sabotieren eines Hakens ohne Werkzeugkiste dauert <span class=\\"Highlight2\\">2,5 Sekunden</span>.</li><li>Die Sabotageaktion hat eine Abklingzeit von <span class=\\"Highlight3\\">{0} Sekunden</span>.</li>","name":"Saboteur","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"Deine Beweglichkeit ist einzigartig.<br><br>Katzenähnliche Reflexe reduzieren die Taumeldauer von Stürzen um <span class=\\"Highlight1\\">{0} %</span> und die Lautstärke deiner Laute beim Stürzen um <span class=\\"Highlight1\\">100 %</span>. Nach der Landung beginnt dein Sprint mit <span class=\\"Highlight2\\">{1} %</span> deiner normalen Laufgeschwindigkeit, aber für maximal <span class=\\"Highlight3\\">{2} Sekunden</span>.<br><br>Verursacht den Statuseffekt <b>Erschöpfung</b>für <span class=\\"Highlight4\\">{3} Sekunden</span>.<br><br><i>Ausgewogene Landung</i> kann nicht verwendet werden, solange du unter <b>Erschöpfung</b> leidest.<br><br>Während du läufst, erholst du dich nicht vom Statuseffekt <b>Erschöpfung</b>.<br>","name":"Ausgewogene Landung","flavor":"„Ich bin schon von höheren Orten gesprungen.“ –Nea","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"Durch jahrelange Versteckspiele mit der Polizei hast du ein oder zwei Dinge über Tarnung gelernt. Deine Bewegungsgeschwindigkeit während des Kriechens ist um <span class=\\"Highlight1\\">{0}%</span> erhöht.","name":"Städtische Umgehung","flavor":"„Die Farbe ist noch immer frisch, aber ich bin schon lange weg.“ -Nea","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"Lange Nächte außerhalb haben dir beigebracht, bestens mit dem auszukommen, was du hast. Verringert den Verbrauch der Item-Einheiten um <span class=\\"Highlight1\\">{0}%</span> für dich und Verbündete in <span class=\\"Highlight2\\">{1} Metern</span> Umkreis. Sobald außer Reichweite, dauert dieser Effekt noch <span class=\\"Highlight4\\">{2} Sekunden an.</span>","name":"Gewieft","flavor":"\\"Lass mich dir zeigen, wie man das macht.\\" -Nea","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit.<br>Wenn du der letzte Überlebende in einer Prüfung bist, kannst du die Aura der Bodenluke in einer Reichweite von <span class=\\"Highlight1\\">{0}</span> Metern wahrnehmen.","name":"Zurückgelassen","flavor":"„Ich mein es verdammt nochmal ernst. Ich erledige das alleine!“ –Bill","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"Du wirst von unerwarteter Energie angetrieben, wenn du einen Verbündeten von einem Haken rettest.<br>Überlebende, die du vom Haken gerettet hast, erhalten den Statuseffekt <b>Kondition</b>, und zwar für <span class=\\"Highlight1\\">{0} Sekunden</span>.<br>","name":"Geliehene Zeit","flavor":"„Sticht wahrscheinlich wie die Hölle, aber es wird dich nicht umbringen. Auf geht’s, Soldat. Zeit, sich zu bewegen!“ – Bill Overbeck","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"In vergangenen Gefechten hast du so einiges über das Überleben gelernt.<br>Gewährt die Fähigkeit, dich <b>einmal pro Runde</b> vollständig von einem Todesstatus zu erholen. Beschleunigt Todeserholung um <span class=\\"Highlight1\\">{0}%</span>.","name":"Unbeugsam","flavor":"„Verdammt, ich bin total am Arsch!“ -Bill","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"Deine wenigen Freunde haben den besten Schutz verdient.<br>Wenn du einen anderen Überlebenden heilst, der sich im Todesstatus befindet, dann wird deine Heilungsgeschwindigkeit um <span class=\\"Highlight1\\">100 %</span> erhöht.<br>Du erhältst einen Zähler für das Ausführen einer der folgenden Aktionen:<li>Sichere Rettung vom Haken</li><li>Einen Treffer nehmen, um einen Überlebenden zu beschützen</li><li>Einen Überlebenden retten, indem der Killer durch eine Palette betäubt wird</li><li>Rettung eines Überlebenden durch Blenden des Killers mit einer Taschenlampe</li>Du erhältst einen kombinierbaren Bonus von <span class=\\"Highlight2\\">25 %</span> pro Zähler auf alle Blutpunkte-Gewinne (bis zu einem Maximum von <span class=\\"Highlight3\\">{1} %</span>). Die Bonus-Blutpunkte werden erst nach der Prüfung verliehen.","name":"Wir werden ewig leben","flavor":"„Na komm schon, zeig, was du drauf hast! Mir ist das alles scheißegal, Mann.“ – David King","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"Aktivierbares Talent.<br>Du stehst eine Verletzung durch. Bist du verletzt, nutze deine Adrenalinreserven und stürme schnell nach vorn, um Schaden zu vermeiden.<br><li>Drücke die Taste für die <i>aktive Fähigkeit</i>, während du läufst, um vorwärtszustürmen.</li><li>Während du voranstürmst, erleidest du keinen Schaden.</li><li>Verursacht <span class=\\"Highlight4\\">{0} Sekunden</span> lang den Statuseffekt <i>Erschöpfung</i>.<br>Während du läufst, erholst du dich nicht vom Statuseffekt <i>Erschöpfung</i>.</li>","name":"Hart im Nehmen","flavor":"„Eines Nachts, als wir durch ein Gässchen schlenderten, flog plötzlich eine Bierflasche an mir vorbei, und dann noch eine, und noch eine. Da dachte ich bei mir: ‚Das wird ein Spaß, Jungs, die möbeln wir auf!‘ Und es wurde eine richtig gute Prügelei, das kann ich dir sagen!“ –David King","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"Für die Dauer der Prüfung leidest du unter dem Statuseffekt <span class=\\"Highlight1\\">Gebrochen</span>.<br>Dein dickes Blut gerinnt praktisch sofort. <li>Du hinterlässt keine Blutpfützen.</li><li>Durch Verletzungen hervorgerufene Schmerzenslaute werden dauerhaft um <span class=\\"Highlight2\\">{0} %</span> verringert.</li><li>Gewährt die Fähigkeit, dich vollständig vom Todesstatus zu erholen.</li>","name":"Kein Gejammer","flavor":"„Ich bin durchgedreht. Hab ihm einfach eine verpasst ... Natürlich wurde ich deswegen gesperrt ... Danach bin ich in den Pub, hab mir ein paar Bier hinter die Binde gegossen und hab die Sache abgehakt. Hatte auch keinen Bock, deswegen rumzujammern, verstehst du? War mir alles scheißegal.“ –David King","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"Je mehr deiner Freunde dem Killer zum Opfer fallen, desto stärker wirst du abgeschirmt, und die <b>Aurawahrnehmungsfähigkeit</b> des Killers in Bezug auf dich wird gestört.<br>Jedes Mal, wenn ein Mit-Überlebender getötet oder geopfert wird, erhältst du einen Zähler. Für jeden Zähler kann der Killer deine Aura in einer maximalen Reichweite von <span class=\\"Highlight1\\">{0} Metern</span> pro <b>getötetem</b> oder <b>geopfertem</b> Überlebenden nicht erkennen.<br><li><i>Erhöht die Wahrscheinlichkeit, zum Ziel der Besessenheit des Killers zu werden.</i></li><li><i>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</i></li>","name":"Einziger Überlebender","flavor":"„Das war der schwarze Mann.“ – Laurie Strode","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"Eine übernatürliche Verbundenheit fesselt dich an den Killer.<br><br>Immer wenn deine Aura dem Killer offenbart wird, wird die Aura des Killers für dich sichtbar und du erhältst einen Bonus von <span class=\\"Highlight1\\">{0} %</span> auf die Heilungs-, Reparatur- und Zerstörungsgeschwindigkeit.<br>Wenn du das Ziel der Besessenheit bist, wird deine Aura dem Killer einmal alle <span class=\\"Highlight2\\">30 Sekunden</span> für <span class=\\"Highlight3\\">3 Sekunden</span> offenbart.<br>Erhöht die Wahrscheinlichkeit, zum Ziel der Besessenheit des Killers zu werden.<br>","name":"Objekt der Besessenheit","flavor":"„Er hat mich beobachtet!“ –Laurie Strode","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"Stich in einem Fluchtversuch auf deinen Angreifer ein.<br>Nachdem du vom Haken gerettet wurdest oder dich selbst davon befreit hast, wird <i>Entscheidungsschlag</i> für <span class=\\"Highlight1\\">{0} Sekunden</span> aktiviert.<br>Während er aktiv ist, kannst du einen Fähigkeitscheck durchführen, um dich aus dem Griff des Killers zu befreien und den Killer für <span class=\\"Highlight1\\">5 Sekunden</span> zu betäuben.<br><li>Bei Erfolg und Misserfolg des Fähigkeitschecks wird <i>Entscheidungsschlag</i> deaktiviert.</li><li>Betäubst du den Killer, wirst du zum Ziel seiner Besessenheit.</li><br>Die folgenden Interaktionen deaktivieren <i>Entscheidungsschlag</i>: <li>Reparieren eines Generators</li><li>Sich selbst oder andere heilen</li><li>Zerstören eines Totems</li><li>Sabotieren eines Hakens</li><li>Andere vom Haken befreien</li><br><li><i>Erhöht deine Chance, Ziel der Besessenheit zu werden.</i></li><li><i>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</i></li>","name":"Entscheidungsschlag","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"Stärkt die Aurawahrnehmungsfähigkeit von dir und deinem Team.<br><li>Erhöht die Reichweite der Aurawahrnehmung um <span class=\\"Highlight1\\">{0} Meter</span>.</li><li>Überlebende können immer nur von einem Effekt von <i>Offenes Blatt</i> betroffen sein.</li>","name":"Offenes Blatt","flavor":"„Aufpassen ist es, was mich die ganzen Jahre am Leben gehalten hat. Das und mein gutes Aussehen natürlich.“ –Ace","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"Am Ende wird alles gut; das weißt du doch. Dein Selbstvertrauen bestärkt das Gefühl der Hoffnung für jene um dich herum. Für jeden anderen Überlebenden, der noch lebt, gibt es einen Glücksbonus von <span class=\\"Highlight1\\">{0} %</span> für alle verbleibenden Überlebenden.","name":"Erhöhe den Einsatz","flavor":"„Was soll ich sagen? Ich hab einfach nur viel Glück ... Ich bin mir sicher, dass etwas davon auf dich abfärbt.“ - Ace","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"Fortuna scheint es stets gut mit dir zu meinen.<br>Wenn du einen Gegenstand aus einer Truhe nimmst, besteht eine Chance von <span class=\\"Highlight1\\">{0} %</span>, dass ein Zusatz der Seltenheit <span class=\\"Highlight2\\">Sehr selten</span> oder geringer beigefügt ist. Es besteht eine Chance von <br><span class=\\"Highlight3\\">{1} %</span> auf einen Zusatz der Seltenheit <span class=\\"Highlight4\\">Ungewöhnlich</span> oder geringer.<br>Wenn du entkommst, behältst du alle Zusätze deines Gegenstands.","name":"Ass im Ärmel","flavor":"„Nicht alles, was glänzt, ist Gold. Aber Gold ist an diesem Ort keinen Pfifferling wert, daher sollte sich dies als nützlich erweisen.“ – Ace","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"Du bist äußerst sorgfältig und präzise im Umgang mit Maschinen.<br>Die Geräusche, die du bei der Reparatur verursachst, werden gedämpft. Die Entfernung, auf die sie zu hören sind, wird um <span class=\\"Highlight2\\">{0} Meter</span> verringert. Bei einem misslungenen Reparatur-Fähigkeitscheck besteht eine Chance von <span class=\\"Highlight1\\">{1} %</span>, dass der Generator nicht explodiert.","name":"Technikerin","flavor":"„Das erledige ich ganz still und heimlich.“ –Feng Min","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"Verfalle nach einem <b>übereilten</b> Sprung in einen Sprint mit <span class=\\"Highlight1\\">{0} %</span> deiner normalen Laufgeschwindigkeit, und zwar für maximal <span class=\\"Highlight2\\">{1} Sekunden</span>. <br>Verursacht <span class=\\"Highlight4\\">{2} Sekunden</span> lang <i>Erschöpfung</i>.<br><i>Flink</i> kann bei <i>Erschöpfung</i> nicht verwendet werden.<br>Beim Laufen erholst du dich nicht von <i>Erschöpfung</i>.","name":"Flink","flavor":"„Warum so wütend?“ - Feng Min","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Deine Sinne sind aufs Äußerste geschärft.<br>Wenn der Killer etwas in Reichweite zerstört, kannst du ihn für <span class=\\"Highlight1\\">{0} Sekunden</span> sehen.","name":"Wachsam","flavor":"„Ich sehe dich.“ -Feng Min","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Sobald alle Generatoren laufen, werden dir die Ausgangstore im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> angezeigt. Während du die Ausgangstore öffnest, können andere Überlebende im Umkreis von <span class=\\"Highlight2\\">{1} Metern</span> von dir deine Aura sehen.<br>Solange <i>Aufwachen!</i> aktiv ist, kannst du Ausgangstore <span class=\\"Highlight3\\">{2} %</span> schneller öffnen.","name":"Aufwachen!","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"Du bist gut im Finden von Medizin. Das Aufschließen von Truhen geht <span class=\\"Highlight1\\">{0} %</span> schneller vonstatten, und der dabei verursachte Lärm sowie die Hörweite werden um <span class=\\"Highlight2\\">{1} Meter</span> vermindert.<br><i>Apotheke</i> gewährt dir bei deiner <b>ersten</b> aufgeschlossenen Truhe einen Notfall-Sani-Kasten.<br>","name":"Apotheke","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"Du passt auch dann auf deine Freunde auf, wenn es hart auf hart kommt. Du und deine Verbündeten in <span class=\\"Highlight1\\">{0} Metern</span> Reichweite erholt euch von den Statuseffekten <b>Erschöpfung, Blutung, Eingeschränkt</b> und <b>Erblindung</b> <span class=\\"Highlight2\\">{1} %</span> schneller. Sobald außer Reichweite, dauert dieser Effekt noch <span class=\\"Highlight4\\">{2} Sekunden</span> an.<br>","name":"Nachtwache","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"Nichts hält dich auf. Deine wilde Beharrlichkeit in heiklen Situationen lässt dich <span class=\\"Highlight1\\">{0}%</span> schneller kriechen und gleichzeitig erholen.","name":"Beharrlichkeit","flavor":"„Was zur Hölle ist das? Den Mistkerl schnapp ich mir!“ – Detective David Tapp","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Wird ein Generator fertiggestellt, werden dir die Auren von Generatoren, Truhen und Totems innerhalb von <span class=\\"Highlight1\\">{0} Metern</span> für <span class=\\"Highlight2\\">{1} Sekunden</span> angezeigt.<br>Wenn du eine Karte hältst, die Ziele verfolgen kann, werden Generatoren, Truhen und Totems, die durch <i>Tapps Verdacht</i> angezeigt werden, der Karte hinzugefügt.","name":"Tapps Verdacht","flavor":"\\"Können Sie uns sagen, wo Sie letzte Nacht waren?\\" – Detective David Tapp","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"Wenn du dem Killer näherkommst, erfüllt dich das mit Entschlossenheit. Pro <span class=\\"Highlight1\\">{0} Sekunden</span>, die du dich innerhalb des Terrorradius des Killers befindest und nicht bei einer Jagd, erhältst du einen Zähler (max. <span class=\\"Highlight2\\">{1} Zähler</span>).<br>Wenn für <i>Observierung</i> mindestens <b>1 Zähler</b> gesammelt wurde, gelten gute Fähigkeitschecks als großartige Fähigkeitschecks und <b>1 Zähler</b> wird verbraucht. Außerdem wird ein zusätzlicher Bonus von <span class=\\"Highlight3\\">1 %</span> auf den Reparaturfortschritt des Generators gewährt.","name":"Observierung","flavor":"\\"Ich hatte dich. Ich hatte dich in die Knie gezwungen. Du hast Angst, weil wir dich hatten. Wir werden diesen Fall abschließen!\\" – Detective David Tapp","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"Beim Durchführen eines schnellen Sprungs oder beim Verlassen eines Schließschranks mit einem Sprint, hinterlässt du für <span class=\\"Highlight1\\">{0} Sekunden</span> keine Kratzspuren.<br><i>„Tanz mit mir“</i> hat einen Cooldown von <span class=\\"Highlight4\\">{1} Sekunden</span>. ","name":"Tanz mit mir","flavor":"„Bereit für die nächste Show, <br>tanz mit mir, ja, genauso. <br>Mach’s mir nach, ’ne Pause gibt’s nicht,<br>tanz mit mir, bis der Tag anbricht.“<br>-Kate Densons „Tanz mit mir“","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Auren von Paletten, zerstörbaren Wänden und Objekten, über die gesprungen werden kann, werden dir innerhalb eines Umkreises von <span class=\\"Highlight1\\">{0} Metern</span> angezeigt. <br><i>Gelegenheiten nutzen</i> hat eine Abklingzeit von <span class=\\"Highlight1\\">{1} Sekunden</span> beim Springen oder Umstoßen einer Palette während einer Jagd. ","name":"Gelegenheit nutzen","flavor":"„Arbeite hart und mit Geschick, <br>verlier dein Ziel nicht aus dem Blick. <br>Der Erfolg ist nicht mehr weit,<br>nutze die Gelegenheit.“<br>– Kate Densons \\"Gelegenheit nutzen\\"","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"Du bist ein Kämpfer und tust alles, um dich dem Griff des Feinds zu entziehen. Die Wirksamkeit deiner Mühen erhöhen sich um <span class=\\"Highlight1\\">{0} %</span>. <br>Du verringerst die Fähigkeit des Killers, Hakenauren in einem Umkreis von <span class=\\"Highlight1\\">{1} Metern</span> zu sehen.","name":"Wildpferd","flavor":"„Ich buckle und bocke,<br>ich kann es nicht lassen, <br>und deine Hände, sie können mich nicht fassen.“<br>-Kate Densons „Wildpferd“","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"Aktivierbares Talent.<br>Wenn du dich <span class=\\"Highlight1\\">{0} Sekunden</span> lang im Terrorradius des Killers befindest und das nicht bei einer Jagd, wird <i>Ablenkung</i> aktiviert.<br><li>Ist <i>Ablenkung</i> aktiviert, drücke die Taste für die <i>aktive Fähigkeit</i>, wenn du geduckt und bewegungslos bist, um einen Stein zu werfen, der den Killer in einer Entfernung von <span class=\\"Highlight2\\">20 Metern</span> ablenkt.</li><br><li>Der Timer des Talents wird zurückgesetzt, sobald die Fähigkeit aktiviert wird.</li><br>Das Ablenkungsmanöver besteht aus:<br><li>Einer Benachrichtigung über ein lautes Geräusch</li><li>Kratzspuren</li>","name":"Ablenkung","flavor":"„Es gibt einfache Dinge und es gibt richtige Dinge. Wenn du die beiden verwechselst, kann man nicht sagen, was aus dir wird.“ – Adam Francis","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"Nachdem du die sichere Rettung vom Haken eines Überlebenden durchgeführt hast, wird <i>Befreiung</i> aktiviert.<br>Du hast nun eine Chance von <span class=\\"Highlight1\\">100 %</span>, dich bei einem Fluchtversuch selbst vom Haken zu befreien.<br>Eine erfolgreiche <i>Befreiung</i> vom Haken löst den Statuseffekt <span class=\\"Highlight2\\">Gebrochen</span> für <span class=\\"Highlight3\\">{0} Sekunden</span> aus.","name":"Befreiung","flavor":"„Ich wurde von einem strengen Mann großgezogen, der mir beibrachte, das Beste aus einer schlimmen Situation zu machen.“ –Adam Francis","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"Du beginnst die Prüfung mit einer <span class=\\"Highlight1\\">-{1} %-igen</span> Fortschrittsstrafe für Fähigkeitschecks beim Heilen von Überlebenden.<br>Für jeden erfolgreich abgeschlossenen Fähigkeitscheck beim Heilen eines Überlebenden erhältst du einen Zähler, bis maximal <span class=\\"Highlight2\\">{0} Zähler</span>.<br>Jeder Zähler gewährt dir einen Fortschrittsbonus von <span class=\\"Highlight1\\">+{2} %</span>.<br>Während der Verwendung von <i>Autodidakt</i> können keine großartigen Fähigkeitschecks ausgeführt werden.<li><i>Autodidakt</i> wird nicht aktiviert, wenn ein Sani-Kasten bei der Heilung verwendet wird.</li>","name":"Autodidakt","flavor":"„Deinen Möglichkeiten sind keine Grenzen gesetzt, solange du hart arbeitest.“ – Adam Francis","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"Immer, wenn du selbst von einem Haken entkommst oder davon gerettet wirst, geht der Haken kaputt und du siehst <span class=\\"Highlight1\\">{0} Sekunden</span> lang die Aura des Killers. Es dauert <span class=\\"Highlight2\\">180 Sekunden</span>, bis ein Haken, der durch dieses Talent zerbrochen wurde, wieder entsteht.<br>","name":"Zerlegen","flavor":"„Sturm aus dem Bauch der Bestie“<br>Dies ist eine Skizze/Zeichnung auf einem Stück Holz, das ich am Straßenrand fand. Ich hatte den Eindruck, es hatte eine Geschichte zu erzählen. Und es hat seine zweite Chance nicht vertan. – Jeff, Tinte und Öllavierung auf Holzscheibe, 12x16 cm","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit.<br><br>Du siehst die Aura von jedem Überlebenden,<br><li>den du von einem Haken rettest oder der dich von einem Haken rettet;</li><li>an dem du eine Heilung abschließt oder der eine Heilung an dir abschließt.</li><br>Die anderen sehen deine Aura ebenfalls.<br><br>Dies gilt für bis zu <span class=\\"Highlight1\\">{0} Überlebende(n)</span>. Alle Effekte dieses Talents werden zurückgesetzt, wenn du vom Killer festgehakt wirst.<br>","name":"Nachsorge","flavor":"„Eine Gnade, die den Sturm zerreißt“<br>Eine Arbeit in Öl zu Ehren meiner besten Kumpel, die zufällig auch die besten Musiker sind, die ich kenne. Ihr erstes Album ist immer noch mein Lieblingswerk. Es hat mich durch eine dunkle Zeit meines Lebens begleitet. –Jeff, Öl auf Leinwand, 40x40 cm","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"Du startest die Prüfung mit <span class=\\"Highlight1\\">{0} Zählern</span>.<br><br>Falls der Killer deine Aura sehen würde, wird <i>Verzerrung</i> aktiviert und ein Zähler verbraucht.<br><br>Für die nächsten <span class=\\"Highlight1\\">{1} Sekunden</span>, solange <i>Verzerrung</i> aktiv ist, hiterlässt du keine Kratzspuren und kann der Killer deine Aura nicht sehen.<br><li><i>Verzerrung</i> kann nicht aktiviert werden, wenn du den Todesstatus hast oder in einer Falle gefangen bist.</li><br>","name":"Verzerrung","flavor":"„Der Tod vom Mantel der Falkenfedern in die Irre geführt“<br>Skizze, die von ein paar schlaflosen Nächten im Winter inspiriert wurde. Erkundung nordischer Mythologie: Tapferkeit kann deine Fehler verbergen – selbst dann, wenn du besonders verwundbar bist. – Jeff, Bleistift auf Tonpapier, 12x12","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"Im Teilen von schmerzhaften Erlebnissen liegt die Kraft der Heilung.<br>Heilst du einen Überlebenden ohne Nutzung eines Sani-Kastens, während du selbst verletzt bist, heilst du dich auch mit einer Wandelrate von <span class=\\"Highlight1\\">{0} %</span>.","name":"Solidarität","flavor":"„Auftauchen, wenn es hart auf hart kommt, sich die Probleme der Leute anhören und jene unterstützen, die es brauchen – so wird man stärker, so wächst man.“ – Jane Romero","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"Das Erreichen von Zielen stärkt dein Selbstbewusstsein.<br>Sobald ein Generator repariert ist, hinterlässt du für <span class=\\"Highlight1\\">{0} Sekunden</span> keine Kratzspuren.","name":"Selbstsicher","flavor":"„Okay, ruhig bleiben. Nicht zu viel nachdenken und weitergehen. Du machst das schon.“ - Jane Romero","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"Hast du einen Entschluss gefasst, sollte sich dir besser niemand in den Weg stellen.<br><br>Stehst du <span class=\\"Highlight1\\">{0} Sekunden</span> lang in einem Schließschrank, wird <i>Frontal</i> aktiviert.<br>Solange <i>Frontal</i> aktiv ist, musst du eine übereilte Aktion ausführen, um den Schließschrank zu verlassen und <i>Frontal</i> zu nutzen. Befindet sich der Killer in der Reichweite von <i>Frontal</i>, wird er für <span class=\\"Highlight1\\">{1} Sekunden</span> betäubt.<br>Löst den Statuseffekt <span class=\\"Highlight3\\">Erschöpfung</span> <span class=\\"Highlight1\\">{2} Sekunden</span> lang aus. <br>„Frontal“ kann nicht verwendet werden, solange du erschöpft bist.<br>Während du läufst, erholst du dich nicht vom Statuseffekt <span class=\\"Highlight3\\">Erschöpfung</span>. <br><i>Frontal</i> kann nicht verwendet werden, wenn sich Krähen in deiner Nähe versammelt haben, weil du zu lange untätig warst.<br>","name":"Frontal","flavor":"„An Menschen erinnert man sich wegen der Hindernisse, die sie überwinden. Man kann weglaufen und vergessen, wozu man in der Lage ist, oder man kann sich den Ängsten stellen und die Welt daran erinnern, wer man ist.“ –Jane Romero","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"Du hast ein verblüffendes Talent dafür, dem Unausweichlichen zu entkommen.<br><br>Liegst du im Sterben, werden <span class=\\"Highlight1\\">{0} %</span> deines Erholungsfortschritts in Abwehrfortschritt umgewandelt, wenn du vom Killer aufgenommen wirst. Und zwar bis zu einem Maximum von <span class=\\"Highlight2\\">{1} %</span> des gesamten Abwehrfortschritts.<br>","name":"Flip-Flop","flavor":"„Ich erwisch dich beim Flip-Flop“ - Ash Williams","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"Entfesselt das Potenzial der Aurawahrnehmungsfähigkeit. Der Erholungsfortschritt sterbender Überlebender lässt sich im Umkreis von bis zu <span class=\\"Highlight1\\">{0} Metern</span> anhand der Intensität ihrer Auren erkennen.<br><br>Bringst du einen Überlebenden vom Todesstatus in den Status „Verletzt“, können sowohl der geheilte Überlebende als auch du selbst die Aura des Killers <span class=\\"Highlight2\\">{1} Sekunden</span> lang sehen.<br>","name":"Anschnallen","flavor":"„Geisterschläger lassen niemals einen Menschen zurück.“ –Ash Williams","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"Das Böse findet dich immer.<br><br>Nachdem du dir <span class=\\"Highlight1\\">{0} </span>Schutztreffer-Punktereignisse verdient hast, wird <i>Der Eifer der Menschen</i> aktiviert. <br><br>Nach der Aktivierung wird jeglicher Schaden, der dich vom Zustand <b>„Verletzt“</b> in den <b>Todesstatus</b> versetzen würde, ignoriert.<br><br>Sobald du dich das nächste Mal bis zur vollen Gesundheit heilst, sieht der Killer deine Aura, wenn du weiter als <span class=\\"Highlight2\\">{1} Meter</span> von ihm entfernt bist.<br><br><i>Der Eifer der Menschen</i> wird deaktiviert, wenn du das nächste Mal in den Todesstatus versetzt wirst.<br><i><li>Erhöht die Wahrscheinlichkeit, zum Ziel der Besessenheit des Killers zu werden.</li><li>Der Killer kann immer nur von je einem Überlebenden <b>besessen</b> sein.</li></i><br>","name":"Der Eifer der Menschen","flavor":"„Auf meinem Rücken sieht das Böse eine Zielscheibe von der Größe des Tiger-Stadions.“ –Ash Williams","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"Du willst Gerechtigkeit und die Wahrheit aufdecken – egal, welche Hürden dich davon abhalten könnten.<br><br>Die Aura des Generators, den du gerade reparierst, wird allen anderen Überlebenden innerhalb von <span class=\\"Highlight1\\">{0} Metern</span> gezeigt.<br><br>Bringt der Killer einen Überlebenden zu Boden, während du einen Generator reparierst, siehst du <span class=\\"Highlight2\\">{1} Sekunden</span> lang die Aura aller anderen Überlebenden.<br>","name":"Besser gemeinsam","flavor":"„Lass uns das Labor bis auf die Grundmauern niederbrennen.“ –Nancy Wheeler","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"Wenn du dir ein Ziel gesetzt hast, gibt es kein Zurück mehr – dann ist es besser, um Vergebung zu bitten, anstatt um Erlaubnis. <br><br>Du kannst die ganze Zeit deine eigenen Kratzspuren sehen.<br><br>Du gehst <span class=\\"Highlight1\\">{0} %</span> schneller.<br>","name":"Fixiert","flavor":"„Ich will zu Ende bringen, was wir begonnen haben. Ich will es töten.“ – Nancy Wheeler","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"Du hörst in dich hinein und vertraust auf deine Instinkte, wenn du dich verlassen und einsam fühlst.<br><br>Jedes Mal, wenn du ein Totem zerstört hast, wird <i>Innere Kraft</i> aktiviert. Bist du bereits vom <b>Statuseffekt „Gebrochen“</b> betroffen, wird <i>Innere Kraft</i> nicht aktiviert.<br><br>Während <i>Innere Kraft</i> aktiv ist, wirst du bei einer Verletzung vollständig geheilt, wenn du dich für <span class=\\"Highlight1\\">{0} Sekunden</span> in einem Schließschrank versteckst.<br><br><i>Innere Kraft</i> wird deaktiviert, sobald sie erfolgreich ausgelöst wurde.<br>","name":"Innere Kraft","flavor":"„Ständig habe ich so getan, als sei alles gut. Ist es aber nicht.“ –Nancy Wheeler","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"Obwohl dir der Ruft nacheilt, egozentrisch zu sein, riskierst du alles, um jenen in Not zu helfen.<br><br>Wenn du einen Überlebenden vom Haken rettest, hinterlässt der vom Haken befreite Überlebende für die nächsten <span class=\\"Highlight1\\">{0} Sekunden</span> keine Kratzspuren oder Blutspuren. Du siehst die Aura des Killers, und der Killer sieht deine Aura für <span class=\\"Highlight2\\">{1} Sekunden</span>.<br>","name":"Babysitter","flavor":"„Ich habe versprochen, euch Knallköpfe zu retten, und genau das habe ich gerade vor.“ –Steve Harrington","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"Das Leben hat dich gelehrt, wie wichtig die Freundschaft ist, die dir Kraft gibt.<br><br>Während du an einem Haken hängst und in der Kampfphase bist, wird <i>Kameradschaft</i> aktiviert.<br><br>Befindet sich ein anderer Überlebender innerhalb einer Reichweite von <span class=\\"Highlight1\\">{0} Metern</span>, während <i>Kameradschaft</i> aktiviert ist, wird der Haken-Timer für <span class=\\"Highlight2\\">{1} Sekunden</span> pausiert.<br>","name":"Kameradschaft","flavor":"„Denk also dran, wenn du dorthin kommst: Tu so, als ob es dir egal wäre. Na bitte, du lernst dazu, mein Freund. Du lernst dazu.“ –Steve Harrington","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"Wenn du andere Überlebende um den Gegenwert eines Gesundheitsstatus geheilt hast, wird <i>Aufschwung</i> aktiviert. Bist du bereits vom Statuseffekt <span class=\\"Highlight1\\">Gebrochen</span> betroffen, wird <i>Aufschwung</i> nicht aktiviert.<br><br>Während <i>Aufschwung</i> aktiv ist, wirkt sich beim nächsten Mal, wenn du vom Haken befreit wirst oder dich selbst vom Haken rettest, der Statuseffekt <span class=\\"Highlight1\\">Gebrochen</span> auf dich aus. Nach einer Gesamtdauer von <span class=\\"Highlight2\\">{0} Sekunden</span> heilt <i>Aufschwung</i> dich vollständig.<br><br><i>Aufschwung</i> wird deaktiviert, sobald du vollständig geheilt bist oder in den Todesstatus versetzt wirst, bevor <i>Aufschwung</i> erfolgreich ausgelöst wurde. Du verlierst den Statuseffekt <span class=\\"Highlight1\\">Gebrochen</span>.<br>","name":"Aufschwung","flavor":"„Ja, das ist ein Nein.“ –Steve Harrington","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"Du hast schon reichlich Kratzer und Prellungen abbekommen, aber das Glück ist immer auf deiner Seite.<br><br><i>Glück gehabt</i> wird immer dann aktiviert, wenn du verletzt bist. Solange <i>Glück gehabt</i> aktiv ist, hinterlässt du für insgesamt <span class=\\"Highlight1\\">{0} Sekunden</span> keine Blutspuren oder Kratzspuren.<br><br><i>Glück gehabt</i> wird für den Rest der Prüfung dauerhaft deaktiviert, wenn die Gesamtdauer verstrichen ist.<br>","name":"Glück gehabt","flavor":"„Das reicht nicht, um mich zu schlagen. Nicht einmal ansatzweise.“ –Yui Kimura ","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"Du musst für dich selbst kämpfen und dabei alles nutzen, was zur Verfügung steht.<br><br>Drücke und halte die <i>Taste für die aktive Fähigkeit</i> für <span class=\\"Highlight1\\">{0} Sekunden</span>, während du neben einer umgestoßenen Palette stehst, um sie wieder aufzurichten.<br><br><i>Mit allen Mitteln</i> hat eine Abklingzeit von <span class=\\"Highlight2\\">{1} Sekunden</span>.<br>","name":"Mit allen Mitteln","flavor":"„Ich werde dich mit allem angreifen, was mir zur Verfügung steht. Und danach noch einmal.“ –Yui Kimura","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"Wenn jemand in der Klemme steckt, schaltest du einen Gang hoch und inspirierst ihn, jedes Hindernis zu überwinden.<br><br>Im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> um einen getragenen Überlebenden erhältst du den Statuseffekt <span class=\\"Highlight2\\">Eile</span> und bewegst dich mit <span class=\\"Highlight3\\">{1} %</span> höherer Geschwindigkeit. Die Geschwindigkeit beim Herauswinden des Überlebenden erhöht sich um <span class=\\"Highlight4\\">{2} %</span>.<br>","name":"Ausbruch","flavor":"„Komm, wir werden schon einen Weg hier heraus finden.“ –Yui Kimura ","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"Du hast gelernt, dass ein leiser Angriff manchmal das Beste ist. <br><br>Sobald du vom Haken gerettet wurdest oder dem Haken entkommen bist, wird <i>Vertraulich</i> für <span class=\\"Highlight1\\">{0} Sekunden</span> aktiviert. <br><br>Solange <i>Vertraulich</i> aktiv ist, wird deine Aura dem Killer nicht angezeigt, und die Schmerzenslaute bei Verletzungen werden um <span class=\\"Highlight2\\">{1} %</span> verringert.<br>","name":"Vertraulich","flavor":"„Vertraue mir, ich stelle meine Untersuchungen sorgfältig und unauffällig an.“ – Zarina Kassir","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"Du hast bemerkt, dass die Leute ihre Aufmerksamkeit immer auf die lauteste Sache richten.<br><br>Sobald du einen Generator für mindestens <span class=\\"Highlight1\\">{0} Sekunden</span> repariert hast, wird er mit einer gelben Aura hervorgehoben, die nur du sehen kannst. Der Generator bleibt hervorgehoben, bis er vollständig repariert ist, du einen neuen Generator reparierst oder in einen Schließschrank steigst. <br><br>Steigst du in einen Schließschrank, wird an der hervorgehobenen Position des Generators eine Lautes-Geräusch-Anzeige ausgelöst, die nur der Killer sehen kann.<br><li><i>Roter Hering</i> kann nur einmal alle <span class=\\"Highlight2\\">{1} Sekunden</span> ausgelöst werden.</li><br>","name":"Roter Hering","flavor":"„Die Nachrichten lassen alles Lästige und Komplexe weg, und das ist eigentlich die Wahrheit.“ – Zarina Kassir","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"Für andere riskierst du Verletzungen und dein Leben. <br><br><i>Für das Volk</i> ist nur aktiv, während du bei voller Gesundheit bist.<br><br>Drücke die <i>Taste für die aktive Fähigkeit</i>, wenn du einen anderen Überlebenden ohne Sani-Kasten heilst, um ihn sofort vom Zustand „sterbend“ in den Zustand „verletzt“ oder vom Zustand „verletzt“ in den Zustand „gesund“ zu versetzen.<br><br>Du wirst verletzt und erleidest den Statuseffekt <b>Gebrochen</b> für <span class=\\"Highlight1\\">{0} Sekunden</span>.<br><br>Du wirst zum Ziel der Besessenheit.<br><br>Nutzt du dieses Talent, <b>verringert</b> dies zu Beginn einer Prüfung die Wahrscheinlichkeit, dass du zum Ziel der Besessenheit des Killers wirst.<br>","name":"Für das Volk","flavor":"„Wir können unsere eigene Geschichte schreiben und bestimmen, wie sie wirklich endet.“ – Zarina Kassir","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"Du hast enorme Härten durchgemacht und bist dadurch stärker geworden.<br><br>Du erhältst den Statuseffekt <b>Kondition</b> für <span class=\\"Highlight1\\">{0} Sekunden</span>, nachdem du geheilt wurdest oder dich vom Todesstatus erholt hast.<br>Während ein Fluch auf dich wirkt, kannst du dich vollständig vom Todesstatus erholen.<br><br>Dieser Effekt kann nur einmal alle <span class=\\"Highlight2\\">30 Sekunden</span> ausgelöst werden.","name":"Seelenwächter","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"Es ist, als ob ein latenter Teil von dir erwacht ist. Du hast das Gefühl, außerhalb von dir selbst nach Hilfe greifen zu können.<br><br>Wenn du oder das Ziel der Besessenheit verletzt seid, seht ihr gegenseitig eure Auren.<br><br>Sobald das Ziel der Besessenheit geheilt ist oder es dich geheilt hat, erhaltet ihr beide einen <span class=\\"Highlight1\\">{1} %</span>-igen Statuseffekt <b>Eile</b>, und zwar bis ihr mehr als<span class=\\"Highlight2\\">16m</span> voneinander entfernt seid.<br><br>Verringert die Wahrscheinlichkeit, das Ziel der Besessenheit zu sein.<br><br>Wenn du das Ziel der Besessenheit bist, wird dieses Talent deaktiviert.","name":"Blutpakt","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"Du bist daran gewöhnt, von boshaften Kräften gejagt zu werden, und du hast angefangen, dies zu deinem Vorteil zu nutzen.<br><br><i>Verdrängtes Bündnis</i> wird aktiviert, nach dem Generatoren für insgesamt <span class=\\"Highlight1\\">{0} Sekunden</span> repariert wurden.<br><br>Reparierst du einen Generator, während dieses Talent aktiv ist, kannst du die <i>Taste für die aktive Fähigkeit</i> drücken, um den Entitus zu rufen, damit er den Generator für <span class=\\"Highlight2\\">{1} Sekunden</span> blockiert. Das Talent wird dann deaktiviert.<br><br>Betroffene Generatoren sind für alle Überlebenden anhand einer weißen Aura zu erkennen.","name":"Verdrängtes Bündnis ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"Du bist erstaunlich gut auf deine Flucht konzentriert.<br><br>Du siehst die Auren von Generatoren im Umkreis von <span class=\\"Highlight1\\">{0} Metern</span>.<br><br>Jedes Mal, wenn die Reparatur eines Generators abgeschlossen ist, wird <i>Visionär</i> für <span class=\\"Highlight2\\">{1} Sekunden</span> deaktiviert.","name":"Visionär","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"Du weigerst dich, zu scheitern – selbst in deiner finstersten Stunde.<br><br>Für jeden verletzten, festgehakten oder sterbenden Überlebenden erhöht sich die Geschwindigkeit deiner Aktionen zur Heilung oder Rettung vom Haken um <span class=\\"Highlight1\\">{0} %</span>.<br>","name":"Verzweifelte Maßnahmen","flavor":"„Wenn sie mit einer Abrissbirne zu deinem Haus kommen, dann brauchst du dickere Wände.“ – Felix Richter","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"Du weißt, wie du das Maximum aus deinen Werkzeugen herausholen kannst.<br><br>Einmal pro Prüfung füllt ein aufgebrauchter Gegenstand <span class=\\"Highlight1\\">{0} %</span> seiner Einheiten nach <span class=\\"Highlight2\\">{1} Sekunden</span> auf.<br>","name":"Gebaut für die Ewigkeit","flavor":"„Architektur ist die Seele der Zivilisation.“ – Felix Richter","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"Dein scharfer Blick bemerkt Dinge, die viele andere übersehen.<br><br>Du beginnst die Prüfung mit <span class=\\"Highlight1\\">{0} Zählern</span>. Ist eine Truhe bereits geöffnet worden, kannst du einen Zähler aufbrauchen, um darin nach einem Gegenstand zu suchen. Diese Suche kann nur einmal pro Truhe durchgeführt werden.<br><br>Du durchsuchst Truhen <span class=\\"Highlight2\\">{1} %</span> schneller.","name":"Einschätzung","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"Dein abenteuerlicher Lebensstil erfordert Momente der listigen Irreführung.<br><br>Interagierst du mit einem Schließschrank, während du sprintest, wird eine Benachrichtigung über ein lautes Geräusch an deiner Position ausgelöst. Du hinterlässt dann <span class=\\"Highlight1\\">{0} Sekunden</span> lang keine Kratzspuren.<br><br>Du kannst keine Schließschränke mehr betreten, während du sprintest und während dieses Talent aktiv ist.<br><br><i>Täuschung</i> kann nur einmal alle <span class=\\"Highlight2\\">{1} Sekunden</span> ausgelöst werden.","name":"Täuschung","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"Du hast nie aufgegeben und wirst auch jetzt nicht damit anfangen.<br><br>Erreichst du <span class=\\"Highlight1\\">{0} %</span> des Herauswinden-Fortschritts, während du vom Killer getragen wirst, wird <i>Wildes Herauswinden</i> aktiviert. Während <i>Wildes Herauswinden</i> aktiv ist, kannst du eine in der Nähe stehende Palette umstoßen, um einen Killer zu betäuben.<br>","name":"Wildes Herauswinden","flavor":"\\"Ich habe mich darauf verlassen, dass andere mich beschützen, und ich habe alles verloren. Nie wieder.\\" – Élodie Rakoto","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"Manchmal muss man andere opfern, um selbst voranzukommen.<br><br>Immer wenn ein anderer Überlebender festgehakt wird, erhältst du <span class=\\"Highlight1\\">{0} Zähler</span>. Du verbrauchst alle Zähler nach einem großartigen Fähigkeitscheck bei einem Generator. Jeder verbrauchte Zähler gewährt dir <span class=\\"Highlight2\\">{1} %</span> zusätzlichen Fortschritt für einen großartigen Fähigkeitscheck bei der Reparatur von Generatoren.<br>","name":"Überholspur","flavor":"„Die Schwachen werden zuerst geopfert. So ist die Natur, so ist das Geschäft ... Es ist die Wahrheit, die viele nicht sehen wollen.“ – Yun-Jin","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"Wenn dein Rivale einen Fehler macht, nutzt du die Gelegenheit.<br><br>Nachdem du den Killer mit einer Palette betäubt hast, verfällst du in einen Sprint mit <span class=\\"Highlight1\\">{0} %</span> deines normalen Lauftempos für <span class=\\"Highlight2\\">{1} Sekunden.</span><br>Verursacht den Statuseffekt <b>Erschöpfung</b> für <span class=\\"Highlight3\\">{2} Sekunden.</span><br>Dieses Talent kann nicht während <b>Erschöpfung</b> verwendet werden.<br>","name":"Superhit","flavor":"„Ich hatte mit Psychopathen in Anzügen zu tun. Du bist einfach nur hässlicher und schäbiger gekleidet.“ – Yun-Jin","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"Das Leben ist gnadenlos. Manchmal ist es am besten, auf sich selbst aufzupassen.<br><br>Immer wenn ein anderer Überlebender in einem Umkreis von <span class=\\"Highlight1\\">{0} Metern</span> von einem Grundangriff oder Spezialangriff getroffen wird, wird <i>Selbstschutz</i> aktiviert.<br>Deine Kratzspuren, Blutpfützen und Schmerzenslaute sind für <span class=\\"Highlight2\\">{1} Sekunden</span> verborgen.<br>","name":"Selbstschutz","flavor":"„Etwas, das ich in der Branche gelernt habe: Wenn die Axt geschwungen wird, solltest du deinen Kopf unten behalten.“ – Yun-Jin","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"Du weißt, wie du einem Feind standhalten kannst, der stärker ist als du. Es beginnt damit, seine Unterstützung zu jagen und auszuschalten.<br><br>Du zerstörst Totems <b>20 %</b> schneller. Wenn du ein Totem zerstört hast, siehst du für <span class=\\"Highlight1\\">{0} Sekunden</span> die Aura des Totems, das am weitesten von dir entfernt ist, und du gewinnst bis zum Ende der Prüfung einen zusätzlichen kombinierbaren Geschwindigkeitsbonus von <span class=\\"Highlight2\\">{1} %</span> für das Zerstören von Totems.<br><br><span class= \\"FlavorText\\">„Ich habe nichts gegen ein wenig Detektivarbeit.“ – Jill Valentine</span>","name":"Gegengewalt","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"Du hast verschwindend geringen Überlebenschancen getrotzt ... und du wirst es wieder tun.<br><br>Du erhältst sofort <span class=\\"Highlight1\\">{0} %</span> Heilfortschritt, wenn du vom Haken befreit wurdest oder dich selbst befreit hast.<br><br><span class= \\"FlavorText\\">„Jetzt bin ich an der Reihe, Miststück.“ – Jill Valentine</span>","name":"Wiederaufleben","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"Wenn ein direkter Kampf keine Option ist, findest du trotzdem Möglichkeiten, zurückzuschlagen.<br><br><i>Sprengfalle</i> wird aktiviert, nachdem du insgesamt <span class=\\"Highlight1\\">{0} %</span> Reparaturfortschritt an Generatoren gesammelt hast.<br>Wenn du einen Generator mindestens <span class=\\"Highlight2\\">{1}Sekunden</span> lang repariert hast, wähle die <i>Taste für die aktive Fähigkeit</i>, um eine Falle anzubringen, die für <span class=\\"Highlight3\\">{2} Sekunden</span> aktiv bleibt. Betroffene Generatoren werden allen Überlebenden mit einer gelben Aura angezeigt. Pro Generator kann nur eine Falle aktiv sein.<br><li>Wenn der Killer einen Generator mit Falle zerstört, explodiert die Falle und betäubt ihn. Alle in der Nähe werden geblendet. Danach wird <i>Sprengfalle</i> deaktiviert.</li><br><br><span class= \\"FlavorText\\">„Du willst S.T.A.R.S.? Dann kriegst du S.T.A.R.S.!“ – Jill Valentine</span>","name":"Sprengfalle","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"Du fühlst Schmerz wie alle anderen, aber du bevorzugst es, das nicht zu zeigen.<br><br>Du machst keine Geräusche, auch keine Schmerzenslaute beim Heilen. Es gibt keine Benachrichtigung über ein Geräusch bei fehlgeschlagenem Heilungs-Fähigkeitscheck und die Heilung wird nur um <span class=\\"Highlight1\\">{0} %</span> zurückgesetzt.<br><br><span class= \\"FlavorText\\">„Ich schaffe das.“ – Leon S. Kennedy</span>","name":"Zähne zusammenbeißen","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"Du hast dich an die Welt im Chaos angepasst und machst das Beste aus den Trümmern.<br><br>Wenn du <span class=\\"Highlight1\\">{0} %</span> Fortschritt an einem beliebigen Generator erreicht hast, wird die <i>Blendgranate</i> aktiviert.<br>Betritt mit leeren Händen einen Schließschrank und drücke die Taste für die aktive Fähigkeit, um eine Blendgranate herzustellen.<br><li>1 Aufladung.</li><li>Explodiert mit einem lauten Knall und blendendem Licht.</li><li>Verursacht eine Benachrichtigung über ein Geräusch.</li><li>Kann zur Ablenkung oder zum Blenden genutzt werden.</li><br>Du lässt die Blendgranate zurück, wenn du der Prüfung entkommst.<br><br><span class= \\"FlavorText\\">„Verpiss dich!“ – Leon S. Kennedy</span>","name":"Blendgranate","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"Du behältst Ziele sorgfältig im Blick, wenn sie schwer zu verfolgen sind.<br><br>Schließe <span class=\\"Highlight1\\">{0}</span> gute oder großartige Fähigkeitschecks bei der Reparatur von Generatoren ab, um <i>Entschlossener Anfänger</i> für den Rest der Prüfung zu aktivieren.<br>Nach der Aktivierung siehst du die Aura von Generatoren, die Fortschritt verlieren.<br><br><span class= \\"FlavorText\\">„Ich werde das beenden, Lieutenant. Versprochen.“ – Leon S. Kennedy</span>","name":"Entschlossener Anfänger","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/de/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/de/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Ein nervöser Anführer, der seine Mitstreiter finden und ihre Effizienz steigern kann.<BR><BR>Mit seinen persönlichen Talenten <B>Bindung</B>, <B>Beweise dich</B> und <B>Anführer</B> gelangt er in die Nähe anderer Überlebender und gewährt Boni auf deren sowie seine eigenen Aktionen.","name":"Dwight Fairfield","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"Eine energiegeladene Sportlerin, die nahezu jedem Killer entkommen kann.<BR><BR>Mit ihren persönlichen Talenten <B>Schnell und leise</B>, <B>Sprintboost</B> und <B>Adrenalin</B> kann sie Jagden entkommen und den Killer hinter sich lassen.","name":"Meg Thomas","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"Eine wissbegierige Botanikerin, die anderen und sich selbst beim Überlebenskampf hilft.<BR><BR>Mit ihren persönlichen Talenten <B>Einfühlungsvermögen</B>, <B>Botanisches Wissen</B> und <B>Selbstfürsorge</B> kann sie verletzte Überlebende finden und sich selbst sowie ihr Team wirkungsvoller heilen.","name":"Claudette Morel","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"Ein einzelgängerischer Überlebenskünstler, der die meisten Situationen alleine meistern kann.<BR><BR>Mit seinen persönlichen Talenten <B>Eiserner Wille</B>, <B>Seelenruhe</B> und <B>Saboteur</B> kann er sich effizienter durchs Gelände bewegen und auch verletzt überleben.","name":"Jake Park","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"Eine städtische Künstlerin, die geschickt fliehen und sich verstecken kann.<BR><BR>Mit ihren persönlichen Talenten <B>Ausgewogene Landung</B>, <B>Städtische Umgehung</B> und <B>Gewieft</B> kann sie Ziele leichter erreichen und sich schnell davonmachen.","name":"Nea Karlsson","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"Ein alter Soldat, der sich mit kritischen Situationen gut auskennt.<BR><BR>Mit seinen persönlichen Talenten <B>Zurückgelassen</B>, <B>Geliehene Zeit</B> und <B>Unbeugsam</B> wächst er in Notlagen über sich hinaus.","name":"William „Bill“ Overbeck","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"Ein grober Schläger, bei dem es sich auszahlt, viel zu riskieren.<BR><BR>Seine persönlichen Talente <B>Wir werden ewig leben</B>, <B>Hart im Nehmen</B> und <B>Kein Gejammer</B> erlauben einen aggressiven, provokanten Spielstil, machen ihn jedoch auch verwundbar.","name":"David King","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"Eine entschlossene Überlebende, die für jede Herausforderung bereit ist.<BR><BR>Mit ihren persönlichen Talenten <B>Einziger Überlebender</B>, <B>Objekt der Besessenheit</B> und <B>Entscheidungsschlag</B> steigert sie ihre Überlebenschancen zwar enorm, wird aber auch leichter zum Ziel.","name":"Laurie Strode","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"Ein Glücksspieler, der die Chancen des ganzen Teams verbessert.<BR><BR>Mit seinen persönlichen Talenten <B>Offenes Blatt</B>, <B>Erhöhe den Einsatz</B> und <B>Ass im Ärmel</B> erhöht er das Glück aller Überlebenden und hilft beim Aufschließen von Truhen.","name":"Ace Visconti","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"Eine ehrgeizige Wettkämpferin, die sich gut auf Ziele konzentrieren und ihre Aufmerksamkeit schnell umlenken kann.<BR><BR>Ihre persönlichen Talente <B>Technikerin</B>, <B>Flink</B> und <B>Wachsam</B> helfen ihr dabei, Generatoren zu reparieren und den Killer zu entdecken.","name":"Feng Min","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"Ein entschlossener Traumwandler, der die Überlebenschancen und die Heilfähigkeiten seines Teams steigert.<BR><BR>Mit seinen persönlichen Talenten <B>Aufwachen!</B>, <B>Apotheke</B> und <B>Nachtwache</B> hilft er Überlebenden dabei, die Ausgangstore zu finden und sich effizienter zu erholen.","name":"Quentin Smith","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"Ein besessener Detective, der Ziele schneller entdecken und abschließen kann.<BR><BR>Mit seinen persönlichen Talenten <B>Beharrlichkeit</B>, <B>Tapps Verdacht</B> und <B>Observierung</B> kann er sich voll und ganz auf Ziele konzentrieren und sich rasch erholen.","name":"Detective Tapp","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"Eine Sängerin mit großen Hoffnungen, die das Beste aus ihrer Umgebung herausholen kann. <br><br>Ihre persönlichen Talente <b>Tanz mit mir</b>, <b>Gelegenheit nutzen</b> und <b>Wildpferd</b> gewähren ihr den Weitblick und die Lebhaftigkeit, mit denen sie aus den düstersten Situationen entkommen kann.","name":"Kate Denson","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"Ein einfallsreicher Lehrer, der sich auf neue Umstände einstellen und Strategien dafür entwickeln kann. <br><br>Seine persönlichen Talente <b>Ablenkung</b>, <b>Befreiung</b> und <b>Autodidakt</b> helfen ihm, den Killer abzulenken, aussichtslose Situationen zu überleben und im Verlauf der Prüfung geschickter zu werden.","name":"Adam Francis","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"Ein ruhiger Künstler, der den größten Widrigkeiten zum Trotz standhaft bleibt.<br><br>Seine persönlichen Talente <b>Zerlegen</b>, <b>Nachsorge</b> und <b>Verzerrung</b> gewähren ihm Vorteile beim Beobachten und helfen ihm dabei, sich vor dem Killer zu verstecken.","name":"Jeff Johansen","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"Eine einflussreiche Prominente, die gegen den Strom schwimmt und Herausforderungen frontal begegnet.<br><br>Ihre persönlichen Talente <b>Solidarität</b>, <b>Selbstsicher</b> und <b>Frontal</b> geben ihr flexible Fähigkeiten, mit denen sie anderen und sich selbst helfen kann, um gefährlichen Situationen zu entkommen.","name":"Jane Romero","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"Ein einsamer Wolf, dreist und eigensinnig. Ein Mann, der fürs Überleben gemacht ist.<br><br>Seine persönlichen Talente <b>Flip-Flop</b>, <b>Anschnallen</b> und <b>Der Eifer der Menschen</b> geben ihm zusätzliche Widerstandsfähigkeit gegen Schmerzen und Anstrengungen. Außerdem verleihen sie ihm die Fähigkeit, seinen Freunden aus schwierigen Situationen herauszuhelfen. ","name":"Ashley J. Williams","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"Eine aufstrebende Journalistin, die scharfsinnige Beobachtungen machen und Einsichten erlangen kann, die anderen verwehrt bleiben.<br><br>Ihre persönlichen Talente <b>Besser gemeinsam</b>, <b>Fixiert</b> und <b>Innere Kraft</b> geben ihr die Informationen und den Mut, die sie braucht, um unerwartete Herausforderungen zu bestehen.","name":"Nancy Wheeler","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"Eine ehemalige Sportskanone. Er kann die anderen Überlebenden beschützen und mit seiner eigenen Art von Humor gut unterstützen.<br><br>Seine persönlichen Talente <b>Babysitter</b>, <b>Kameradschaft</b> und <b>Aufschwung</b> helfen ihm, Killer abzulenken, Schmerzen zu ertragen und sich wieder in den Kampf zu stürzen.","name":"Steve Harrington","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"Eine abgehärtete Straßenrennfahrerin, die in herausfordernden Situationen Vorteile für sich und andere Überlebende gewinnen kann.<br><br>Ihre persönlichen Talente <b>Glück gehabt</b>, <b>Mit allen Mitteln</b> und <b>Ausbruch</b> bieten ihr die Möglichkeit, ihre Blutspuren zu verdecken, umgestoßene Paletten wiederaufzurichten und hilflosen Überlebenden zu helfen.","name":"Yui Kimura","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"Eine beherzte Dokumentarfilmerin, die gewieft genug ist, um unbemerkt zu bleiben und somit anderen Überlebenden helfen zu können.<br><br>Ihre persönlichen Talente <b>Vertraulich</b>, <b>Roter Hering</b> und <b>Für das Volk</b> helfen ihr dabei, im Angesicht der Gefahr im Verborgenen zu bleiben, Ablenkungen zu schaffen und andere schnell zu heilen, indem sie ihre eigene Sicherheit riskiert.","name":"Zarina Kassir","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"Cheryl Mason ist eine junge Veteranin des Schreckens, die sowohl sich selbst als auch ihr Team stärkt.<br><br>Ihre persönlichen Talente <b>Seelenwächter</b>, <b>Blutpakt</b> und <b>Verdrängtes Bündnis</b> ermöglichen es ihr, enorme Härten zu überleben, mit Teammitgliedern in Kontakt zu bleiben und Ziele zu planen.","name":"Cheryl Mason","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"Ein visionärer Architekt, der seine gnadenlose Entschlossenheit dazu nutzen kann, einen Plan zu schmieden, um anderen Überlebenden zu helfen.<br><br>Seine persönlichen Talente <b>Visionär</b>, <b>Verzweifelte Maßnahmen</b> und <b>Gebaut für die Ewigkeit</b> helfen ihm, Generatoren zu enthüllen, Überlebende zu retten und aus seinen Werkzeugen das Maximum herauszuholen.","name":"Felix Richter","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"Sie ist eine Ermittlerin in okkultistischen Bereichen, die raffinierte Tricks sowie sture Entschlossenheit nutzen kann, um am Leben zu bleiben.<br><br>Ihre persönlichen Talente <b>Einschätzung</b>, <b>Täuschung</b> und <b>Wildes Herauswinden</b> ermöglichen es ihr, auf neue Art und Weise mit Objekten zu interagieren, während sie einen Plan B hat, um Killern zu entkommen.","name":"Élodie Rakoto","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"Eine eigennützige Musikproduzentin, die auch in unruhigen Zeiten ihre Ziele umsetzt.<br><br>Ihre persönlichen Talente <b>Überholspur</b>, <b>Superhit</b> und <b>Selbstschutz</b> ermöglichen es ihr, ihre Fähigkeiten zu verbessern, wenn andere Schaden nehmen, und bei einer Jagd schnell zu entkommen. ","name":"Yun-Jin Lee","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"Jill Valentine ist ein Gründungsmitglied von S.T.A.R.S. und hat schon unzählige bioorganische Waffen besiegt.<br><br>Mit ihren persönlichen Talenten <b>Gegengewalt</b>, <b>Wiederaufleben</b> und <b>Sprengfalle</b> kann sie indirekt zurückschlagen und ihre Teammitglieder kräftig unterstützen. ","name":"Jill Valentine","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"Leon S. Kennedy ist ein frischgebackener Polizist, der während des Ausbruchs in Raccoon City weit mehr leistete, als seine Pflicht verlangt hätte.<br><br>Mit seinen persönlichen Talenten <b>Zähne zusammenbeißen</b>, <b>Blendgranate</b> und <b>Entschlossener Anfänger</b> kann er Schmerzen ignorieren, den Killer verwirren und schwer zu verfolgende Ziele im Blick behalten. ","name":"Leon S. Kennedy","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./de/index.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": () => (/* binding */ Client),
/* harmony export */   "AddonModel": () => (/* reexport safe */ _src_lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Addon),
/* harmony export */   "ItemModel": () => (/* reexport safe */ _src_lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Item),
/* harmony export */   "OfferingModel": () => (/* reexport safe */ _src_lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Offering),
/* harmony export */   "PerkModel": () => (/* reexport safe */ _src_lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Perk),
/* harmony export */   "PlayerModel": () => (/* reexport safe */ _src_lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Player),
/* harmony export */   "PowerModel": () => (/* reexport safe */ _src_lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Power),
/* harmony export */   "Killer": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Killer),
/* harmony export */   "Power": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Power),
/* harmony export */   "Survivor": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Survivor),
/* harmony export */   "Item": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Item),
/* harmony export */   "Offering": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Offering),
/* harmony export */   "SurvivorOffering": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.SurvivorOffering),
/* harmony export */   "KillerOffering": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.KillerOffering),
/* harmony export */   "Addon": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Addon),
/* harmony export */   "KillerAddon": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.KillerAddon),
/* harmony export */   "SurvivorAddon": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.SurvivorAddon),
/* harmony export */   "Perk": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Perk),
/* harmony export */   "KillerPerk": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.KillerPerk),
/* harmony export */   "SurvivorPerk": () => (/* reexport safe */ _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.SurvivorPerk),
/* harmony export */   "PlayerType": () => (/* reexport safe */ _src_lib_enum__WEBPACK_IMPORTED_MODULE_0__.Player),
/* harmony export */   "Rarity": () => (/* reexport safe */ _src_lib_enum__WEBPACK_IMPORTED_MODULE_0__.Rarity),
/* harmony export */   "Difficulty": () => (/* reexport safe */ _src_lib_enum__WEBPACK_IMPORTED_MODULE_0__.Difficulty),
/* harmony export */   "ItemType": () => (/* reexport safe */ _src_lib_enum__WEBPACK_IMPORTED_MODULE_0__.ItemType),
/* harmony export */   "ModifierType": () => (/* reexport safe */ _src_lib_enum__WEBPACK_IMPORTED_MODULE_0__.ModifierType),
/* harmony export */   "Language": () => (/* reexport safe */ _src_lib_enum__WEBPACK_IMPORTED_MODULE_0__.Language),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_lib_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/lib/enum */ "./src/lib/enum.ts");
/* harmony import */ var _src_data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/data.compiled/enum */ "./src/data.compiled/enum.ts");
/* harmony import */ var _src_lib_factory_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/lib/factory/model */ "./src/lib/factory/model/index.ts");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/lib */ "./src/lib/index.ts");
/* harmony import */ var _src_lib_locales_de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/de */ "./src/lib/locales/de.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_de__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map