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
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enum */ "./src/lib/enum.ts");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factories */ "./src/lib/factories.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale */ "./src/lib/locale.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Dbd = /*#__PURE__*/function () {
  function Dbd(resolver) {
    var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _enum__WEBPACK_IMPORTED_MODULE_5__.Language.English;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Dbd);

    this.resolver = resolver;
    this.loading = this.changeLanguage(language);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Dbd, [{
    key: "whileFetchingLocale",
    value: function whileFetchingLocale() {
      if (this.loading) {
        return this.loading;
      }

      return Promise.resolve();
    }
  }, {
    key: "changeLanguage",
    value: function () {
      var _changeLanguage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(language) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.locale = new _locale__WEBPACK_IMPORTED_MODULE_7__.default(this.resolver);
                this.loading = this.locale.changeLanguage(language);
                _context.next = 4;
                return this.whileFetchingLocale();

              case 4:
                this.loading = undefined;
                this.factory = new _factories__WEBPACK_IMPORTED_MODULE_6__.default(this.locale);

              case 6:
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);






var Locale = /*#__PURE__*/function () {
  function Locale(resolver) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Locale);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "loaded", false);

    // eslint-disable-next-line new-cap
    this.resolver = resolver;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Locale, [{
    key: "changeLanguage",
    value: function () {
      var _changeLanguage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(language) {
        var currentLanguage, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentLanguage = this.data ? this.data.language : undefined;

                if (!(language === currentLanguage)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                this.loaded = false;
                _context.next = 6;
                return this.resolver.get(language);

              case 6:
                data = _context.sent;
                this.loaded = true;
                this.data = data;

              case 9:
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

/***/ "./src/lib/resolver.ts":
/*!*****************************!*\
  !*** ./src/lib/resolver.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enum */ "./src/lib/enum.ts");







var LocaleResolver = /*#__PURE__*/function () {
  function LocaleResolver() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, LocaleResolver);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "locales", {});
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(LocaleResolver, [{
    key: "import",
    value: function () {
      var _import2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(language, file) {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__("./src/data.compiled/locales lazy recursive ^\\.\\/.*\\.json$ include: \\.json$")("./".concat(language, "/").concat(file, ".json"));

              case 2:
                _ref = _context.sent;
                data = _ref["default"];
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function _import(_x, _x2) {
        return _import2.apply(this, arguments);
      }

      return _import;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(language) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (language in this.locales) {
                  _context2.next = 36;
                  break;
                }

                data = {
                  items: [],
                  killerAddons: [],
                  killerOfferings: [],
                  killerPerks: [],
                  killers: [],
                  powers: [],
                  sharedOfferings: [],
                  survivorAddons: [],
                  survivorPerks: [],
                  survivorOfferings: [],
                  survivors: [],
                  language: language
                };
                _context2.next = 4;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.Items);

              case 4:
                data.items = _context2.sent;
                _context2.next = 7;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.KillerAddons);

              case 7:
                data.killerAddons = _context2.sent;
                _context2.next = 10;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.KillerOfferings);

              case 10:
                data.killerOfferings = _context2.sent;
                _context2.next = 13;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.KillerPerks);

              case 13:
                data.killerPerks = _context2.sent;
                _context2.next = 16;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.Killers);

              case 16:
                data.killers = _context2.sent;
                _context2.next = 19;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.Powers);

              case 19:
                data.powers = _context2.sent;
                _context2.next = 22;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.SharedOfferings);

              case 22:
                data.sharedOfferings = _context2.sent;
                _context2.next = 25;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.SurvivorAddons);

              case 25:
                data.survivorAddons = _context2.sent;
                _context2.next = 28;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.SurvivorPerks);

              case 28:
                data.survivorPerks = _context2.sent;
                _context2.next = 31;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.SurvivorAddons);

              case 31:
                data.survivorOfferings = _context2.sent;
                _context2.next = 34;
                return this["import"](language, _enum__WEBPACK_IMPORTED_MODULE_5__.LocaleFileName.Survivors);

              case 34:
                data.survivors = _context2.sent;
                this.locales[language] = data;

              case 36:
                return _context2.abrupt("return", this.locales[language]);

              case 37:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function get(_x3) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);

  return LocaleResolver;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocaleResolver);

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

/***/ "./src/data.compiled/locales lazy recursive ^\\.\\/.*\\.json$ include: \\.json$":
/*!*********************************************************************************************************************!*\
  !*** ./src/data.compiled/locales/ lazy ^\.\/.*\.json$ include: \.json$ chunkName: deadbydaylight. namespace object ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./de/items.json": [
		"./src/data.compiled/locales/de/items.json",
		"deadbydaylight.0"
	],
	"./de/killerAddons.json": [
		"./src/data.compiled/locales/de/killerAddons.json",
		"deadbydaylight.1"
	],
	"./de/killerOfferings.json": [
		"./src/data.compiled/locales/de/killerOfferings.json",
		"deadbydaylight.2"
	],
	"./de/killerPerks.json": [
		"./src/data.compiled/locales/de/killerPerks.json",
		"deadbydaylight.3"
	],
	"./de/killers.json": [
		"./src/data.compiled/locales/de/killers.json",
		"deadbydaylight.4"
	],
	"./de/powers.json": [
		"./src/data.compiled/locales/de/powers.json",
		"deadbydaylight.5"
	],
	"./de/sharedOfferings.json": [
		"./src/data.compiled/locales/de/sharedOfferings.json",
		"deadbydaylight.6"
	],
	"./de/survivorAddons.json": [
		"./src/data.compiled/locales/de/survivorAddons.json",
		"deadbydaylight.7"
	],
	"./de/survivorOfferings.json": [
		"./src/data.compiled/locales/de/survivorOfferings.json",
		"deadbydaylight.8"
	],
	"./de/survivorPerks.json": [
		"./src/data.compiled/locales/de/survivorPerks.json",
		"deadbydaylight.9"
	],
	"./de/survivors.json": [
		"./src/data.compiled/locales/de/survivors.json",
		"deadbydaylight.10"
	],
	"./en/items.json": [
		"./src/data.compiled/locales/en/items.json",
		"deadbydaylight.11"
	],
	"./en/killerAddons.json": [
		"./src/data.compiled/locales/en/killerAddons.json",
		"deadbydaylight.12"
	],
	"./en/killerOfferings.json": [
		"./src/data.compiled/locales/en/killerOfferings.json",
		"deadbydaylight.13"
	],
	"./en/killerPerks.json": [
		"./src/data.compiled/locales/en/killerPerks.json",
		"deadbydaylight.14"
	],
	"./en/killers.json": [
		"./src/data.compiled/locales/en/killers.json",
		"deadbydaylight.15"
	],
	"./en/powers.json": [
		"./src/data.compiled/locales/en/powers.json",
		"deadbydaylight.16"
	],
	"./en/sharedOfferings.json": [
		"./src/data.compiled/locales/en/sharedOfferings.json",
		"deadbydaylight.17"
	],
	"./en/survivorAddons.json": [
		"./src/data.compiled/locales/en/survivorAddons.json",
		"deadbydaylight.18"
	],
	"./en/survivorOfferings.json": [
		"./src/data.compiled/locales/en/survivorOfferings.json",
		"deadbydaylight.19"
	],
	"./en/survivorPerks.json": [
		"./src/data.compiled/locales/en/survivorPerks.json",
		"deadbydaylight.20"
	],
	"./en/survivors.json": [
		"./src/data.compiled/locales/en/survivors.json",
		"deadbydaylight.21"
	],
	"./es/items.json": [
		"./src/data.compiled/locales/es/items.json",
		"deadbydaylight.22"
	],
	"./es/killerAddons.json": [
		"./src/data.compiled/locales/es/killerAddons.json",
		"deadbydaylight.23"
	],
	"./es/killerOfferings.json": [
		"./src/data.compiled/locales/es/killerOfferings.json",
		"deadbydaylight.24"
	],
	"./es/killerPerks.json": [
		"./src/data.compiled/locales/es/killerPerks.json",
		"deadbydaylight.25"
	],
	"./es/killers.json": [
		"./src/data.compiled/locales/es/killers.json",
		"deadbydaylight.26"
	],
	"./es/powers.json": [
		"./src/data.compiled/locales/es/powers.json",
		"deadbydaylight.27"
	],
	"./es/sharedOfferings.json": [
		"./src/data.compiled/locales/es/sharedOfferings.json",
		"deadbydaylight.28"
	],
	"./es/survivorAddons.json": [
		"./src/data.compiled/locales/es/survivorAddons.json",
		"deadbydaylight.29"
	],
	"./es/survivorOfferings.json": [
		"./src/data.compiled/locales/es/survivorOfferings.json",
		"deadbydaylight.30"
	],
	"./es/survivorPerks.json": [
		"./src/data.compiled/locales/es/survivorPerks.json",
		"deadbydaylight.31"
	],
	"./es/survivors.json": [
		"./src/data.compiled/locales/es/survivors.json",
		"deadbydaylight.32"
	],
	"./fr/items.json": [
		"./src/data.compiled/locales/fr/items.json",
		"deadbydaylight.33"
	],
	"./fr/killerAddons.json": [
		"./src/data.compiled/locales/fr/killerAddons.json",
		"deadbydaylight.34"
	],
	"./fr/killerOfferings.json": [
		"./src/data.compiled/locales/fr/killerOfferings.json",
		"deadbydaylight.35"
	],
	"./fr/killerPerks.json": [
		"./src/data.compiled/locales/fr/killerPerks.json",
		"deadbydaylight.36"
	],
	"./fr/killers.json": [
		"./src/data.compiled/locales/fr/killers.json",
		"deadbydaylight.37"
	],
	"./fr/powers.json": [
		"./src/data.compiled/locales/fr/powers.json",
		"deadbydaylight.38"
	],
	"./fr/sharedOfferings.json": [
		"./src/data.compiled/locales/fr/sharedOfferings.json",
		"deadbydaylight.39"
	],
	"./fr/survivorAddons.json": [
		"./src/data.compiled/locales/fr/survivorAddons.json",
		"deadbydaylight.40"
	],
	"./fr/survivorOfferings.json": [
		"./src/data.compiled/locales/fr/survivorOfferings.json",
		"deadbydaylight.41"
	],
	"./fr/survivorPerks.json": [
		"./src/data.compiled/locales/fr/survivorPerks.json",
		"deadbydaylight.42"
	],
	"./fr/survivors.json": [
		"./src/data.compiled/locales/fr/survivors.json",
		"deadbydaylight.43"
	],
	"./it/items.json": [
		"./src/data.compiled/locales/it/items.json",
		"deadbydaylight.44"
	],
	"./it/killerAddons.json": [
		"./src/data.compiled/locales/it/killerAddons.json",
		"deadbydaylight.45"
	],
	"./it/killerOfferings.json": [
		"./src/data.compiled/locales/it/killerOfferings.json",
		"deadbydaylight.46"
	],
	"./it/killerPerks.json": [
		"./src/data.compiled/locales/it/killerPerks.json",
		"deadbydaylight.47"
	],
	"./it/killers.json": [
		"./src/data.compiled/locales/it/killers.json",
		"deadbydaylight.48"
	],
	"./it/powers.json": [
		"./src/data.compiled/locales/it/powers.json",
		"deadbydaylight.49"
	],
	"./it/sharedOfferings.json": [
		"./src/data.compiled/locales/it/sharedOfferings.json",
		"deadbydaylight.50"
	],
	"./it/survivorAddons.json": [
		"./src/data.compiled/locales/it/survivorAddons.json",
		"deadbydaylight.51"
	],
	"./it/survivorOfferings.json": [
		"./src/data.compiled/locales/it/survivorOfferings.json",
		"deadbydaylight.52"
	],
	"./it/survivorPerks.json": [
		"./src/data.compiled/locales/it/survivorPerks.json",
		"deadbydaylight.53"
	],
	"./it/survivors.json": [
		"./src/data.compiled/locales/it/survivors.json",
		"deadbydaylight.54"
	],
	"./jp/items.json": [
		"./src/data.compiled/locales/jp/items.json",
		"deadbydaylight.55"
	],
	"./jp/killerAddons.json": [
		"./src/data.compiled/locales/jp/killerAddons.json",
		"deadbydaylight.56"
	],
	"./jp/killerOfferings.json": [
		"./src/data.compiled/locales/jp/killerOfferings.json",
		"deadbydaylight.57"
	],
	"./jp/killerPerks.json": [
		"./src/data.compiled/locales/jp/killerPerks.json",
		"deadbydaylight.58"
	],
	"./jp/killers.json": [
		"./src/data.compiled/locales/jp/killers.json",
		"deadbydaylight.59"
	],
	"./jp/powers.json": [
		"./src/data.compiled/locales/jp/powers.json",
		"deadbydaylight.60"
	],
	"./jp/sharedOfferings.json": [
		"./src/data.compiled/locales/jp/sharedOfferings.json",
		"deadbydaylight.61"
	],
	"./jp/survivorAddons.json": [
		"./src/data.compiled/locales/jp/survivorAddons.json",
		"deadbydaylight.62"
	],
	"./jp/survivorOfferings.json": [
		"./src/data.compiled/locales/jp/survivorOfferings.json",
		"deadbydaylight.63"
	],
	"./jp/survivorPerks.json": [
		"./src/data.compiled/locales/jp/survivorPerks.json",
		"deadbydaylight.64"
	],
	"./jp/survivors.json": [
		"./src/data.compiled/locales/jp/survivors.json",
		"deadbydaylight.65"
	],
	"./ko/items.json": [
		"./src/data.compiled/locales/ko/items.json",
		"deadbydaylight.66"
	],
	"./ko/killerAddons.json": [
		"./src/data.compiled/locales/ko/killerAddons.json",
		"deadbydaylight.67"
	],
	"./ko/killerOfferings.json": [
		"./src/data.compiled/locales/ko/killerOfferings.json",
		"deadbydaylight.68"
	],
	"./ko/killerPerks.json": [
		"./src/data.compiled/locales/ko/killerPerks.json",
		"deadbydaylight.69"
	],
	"./ko/killers.json": [
		"./src/data.compiled/locales/ko/killers.json",
		"deadbydaylight.70"
	],
	"./ko/powers.json": [
		"./src/data.compiled/locales/ko/powers.json",
		"deadbydaylight.71"
	],
	"./ko/sharedOfferings.json": [
		"./src/data.compiled/locales/ko/sharedOfferings.json",
		"deadbydaylight.72"
	],
	"./ko/survivorAddons.json": [
		"./src/data.compiled/locales/ko/survivorAddons.json",
		"deadbydaylight.73"
	],
	"./ko/survivorOfferings.json": [
		"./src/data.compiled/locales/ko/survivorOfferings.json",
		"deadbydaylight.74"
	],
	"./ko/survivorPerks.json": [
		"./src/data.compiled/locales/ko/survivorPerks.json",
		"deadbydaylight.75"
	],
	"./ko/survivors.json": [
		"./src/data.compiled/locales/ko/survivors.json",
		"deadbydaylight.76"
	],
	"./pl/items.json": [
		"./src/data.compiled/locales/pl/items.json",
		"deadbydaylight.77"
	],
	"./pl/killerAddons.json": [
		"./src/data.compiled/locales/pl/killerAddons.json",
		"deadbydaylight.78"
	],
	"./pl/killerOfferings.json": [
		"./src/data.compiled/locales/pl/killerOfferings.json",
		"deadbydaylight.79"
	],
	"./pl/killerPerks.json": [
		"./src/data.compiled/locales/pl/killerPerks.json",
		"deadbydaylight.80"
	],
	"./pl/killers.json": [
		"./src/data.compiled/locales/pl/killers.json",
		"deadbydaylight.81"
	],
	"./pl/powers.json": [
		"./src/data.compiled/locales/pl/powers.json",
		"deadbydaylight.82"
	],
	"./pl/sharedOfferings.json": [
		"./src/data.compiled/locales/pl/sharedOfferings.json",
		"deadbydaylight.83"
	],
	"./pl/survivorAddons.json": [
		"./src/data.compiled/locales/pl/survivorAddons.json",
		"deadbydaylight.84"
	],
	"./pl/survivorOfferings.json": [
		"./src/data.compiled/locales/pl/survivorOfferings.json",
		"deadbydaylight.85"
	],
	"./pl/survivorPerks.json": [
		"./src/data.compiled/locales/pl/survivorPerks.json",
		"deadbydaylight.86"
	],
	"./pl/survivors.json": [
		"./src/data.compiled/locales/pl/survivors.json",
		"deadbydaylight.87"
	],
	"./pt/items.json": [
		"./src/data.compiled/locales/pt/items.json",
		"deadbydaylight.88"
	],
	"./pt/killerAddons.json": [
		"./src/data.compiled/locales/pt/killerAddons.json",
		"deadbydaylight.89"
	],
	"./pt/killerOfferings.json": [
		"./src/data.compiled/locales/pt/killerOfferings.json",
		"deadbydaylight.90"
	],
	"./pt/killerPerks.json": [
		"./src/data.compiled/locales/pt/killerPerks.json",
		"deadbydaylight.91"
	],
	"./pt/killers.json": [
		"./src/data.compiled/locales/pt/killers.json",
		"deadbydaylight.92"
	],
	"./pt/powers.json": [
		"./src/data.compiled/locales/pt/powers.json",
		"deadbydaylight.93"
	],
	"./pt/sharedOfferings.json": [
		"./src/data.compiled/locales/pt/sharedOfferings.json",
		"deadbydaylight.94"
	],
	"./pt/survivorAddons.json": [
		"./src/data.compiled/locales/pt/survivorAddons.json",
		"deadbydaylight.95"
	],
	"./pt/survivorOfferings.json": [
		"./src/data.compiled/locales/pt/survivorOfferings.json",
		"deadbydaylight.96"
	],
	"./pt/survivorPerks.json": [
		"./src/data.compiled/locales/pt/survivorPerks.json",
		"deadbydaylight.97"
	],
	"./pt/survivors.json": [
		"./src/data.compiled/locales/pt/survivors.json",
		"deadbydaylight.98"
	],
	"./ru/items.json": [
		"./src/data.compiled/locales/ru/items.json",
		"deadbydaylight.99"
	],
	"./ru/killerAddons.json": [
		"./src/data.compiled/locales/ru/killerAddons.json",
		"deadbydaylight.100"
	],
	"./ru/killerOfferings.json": [
		"./src/data.compiled/locales/ru/killerOfferings.json",
		"deadbydaylight.101"
	],
	"./ru/killerPerks.json": [
		"./src/data.compiled/locales/ru/killerPerks.json",
		"deadbydaylight.102"
	],
	"./ru/killers.json": [
		"./src/data.compiled/locales/ru/killers.json",
		"deadbydaylight.103"
	],
	"./ru/powers.json": [
		"./src/data.compiled/locales/ru/powers.json",
		"deadbydaylight.104"
	],
	"./ru/sharedOfferings.json": [
		"./src/data.compiled/locales/ru/sharedOfferings.json",
		"deadbydaylight.105"
	],
	"./ru/survivorAddons.json": [
		"./src/data.compiled/locales/ru/survivorAddons.json",
		"deadbydaylight.106"
	],
	"./ru/survivorOfferings.json": [
		"./src/data.compiled/locales/ru/survivorOfferings.json",
		"deadbydaylight.107"
	],
	"./ru/survivorPerks.json": [
		"./src/data.compiled/locales/ru/survivorPerks.json",
		"deadbydaylight.108"
	],
	"./ru/survivors.json": [
		"./src/data.compiled/locales/ru/survivors.json",
		"deadbydaylight.109"
	],
	"./th/items.json": [
		"./src/data.compiled/locales/th/items.json",
		"deadbydaylight.110"
	],
	"./th/killerAddons.json": [
		"./src/data.compiled/locales/th/killerAddons.json",
		"deadbydaylight.111"
	],
	"./th/killerOfferings.json": [
		"./src/data.compiled/locales/th/killerOfferings.json",
		"deadbydaylight.112"
	],
	"./th/killerPerks.json": [
		"./src/data.compiled/locales/th/killerPerks.json",
		"deadbydaylight.113"
	],
	"./th/killers.json": [
		"./src/data.compiled/locales/th/killers.json",
		"deadbydaylight.114"
	],
	"./th/powers.json": [
		"./src/data.compiled/locales/th/powers.json",
		"deadbydaylight.115"
	],
	"./th/sharedOfferings.json": [
		"./src/data.compiled/locales/th/sharedOfferings.json",
		"deadbydaylight.116"
	],
	"./th/survivorAddons.json": [
		"./src/data.compiled/locales/th/survivorAddons.json",
		"deadbydaylight.117"
	],
	"./th/survivorOfferings.json": [
		"./src/data.compiled/locales/th/survivorOfferings.json",
		"deadbydaylight.118"
	],
	"./th/survivorPerks.json": [
		"./src/data.compiled/locales/th/survivorPerks.json",
		"deadbydaylight.119"
	],
	"./th/survivors.json": [
		"./src/data.compiled/locales/th/survivors.json",
		"deadbydaylight.120"
	],
	"./tr/items.json": [
		"./src/data.compiled/locales/tr/items.json",
		"deadbydaylight.121"
	],
	"./tr/killerAddons.json": [
		"./src/data.compiled/locales/tr/killerAddons.json",
		"deadbydaylight.122"
	],
	"./tr/killerOfferings.json": [
		"./src/data.compiled/locales/tr/killerOfferings.json",
		"deadbydaylight.123"
	],
	"./tr/killerPerks.json": [
		"./src/data.compiled/locales/tr/killerPerks.json",
		"deadbydaylight.124"
	],
	"./tr/killers.json": [
		"./src/data.compiled/locales/tr/killers.json",
		"deadbydaylight.125"
	],
	"./tr/powers.json": [
		"./src/data.compiled/locales/tr/powers.json",
		"deadbydaylight.126"
	],
	"./tr/sharedOfferings.json": [
		"./src/data.compiled/locales/tr/sharedOfferings.json",
		"deadbydaylight.127"
	],
	"./tr/survivorAddons.json": [
		"./src/data.compiled/locales/tr/survivorAddons.json",
		"deadbydaylight.128"
	],
	"./tr/survivorOfferings.json": [
		"./src/data.compiled/locales/tr/survivorOfferings.json",
		"deadbydaylight.129"
	],
	"./tr/survivorPerks.json": [
		"./src/data.compiled/locales/tr/survivorPerks.json",
		"deadbydaylight.130"
	],
	"./tr/survivors.json": [
		"./src/data.compiled/locales/tr/survivors.json",
		"deadbydaylight.131"
	],
	"./zh/items.json": [
		"./src/data.compiled/locales/zh/items.json",
		"deadbydaylight.132"
	],
	"./zh/killerAddons.json": [
		"./src/data.compiled/locales/zh/killerAddons.json",
		"deadbydaylight.133"
	],
	"./zh/killerOfferings.json": [
		"./src/data.compiled/locales/zh/killerOfferings.json",
		"deadbydaylight.134"
	],
	"./zh/killerPerks.json": [
		"./src/data.compiled/locales/zh/killerPerks.json",
		"deadbydaylight.135"
	],
	"./zh/killers.json": [
		"./src/data.compiled/locales/zh/killers.json",
		"deadbydaylight.136"
	],
	"./zh/powers.json": [
		"./src/data.compiled/locales/zh/powers.json",
		"deadbydaylight.137"
	],
	"./zh/sharedOfferings.json": [
		"./src/data.compiled/locales/zh/sharedOfferings.json",
		"deadbydaylight.138"
	],
	"./zh/survivorAddons.json": [
		"./src/data.compiled/locales/zh/survivorAddons.json",
		"deadbydaylight.139"
	],
	"./zh/survivorOfferings.json": [
		"./src/data.compiled/locales/zh/survivorOfferings.json",
		"deadbydaylight.140"
	],
	"./zh/survivorPerks.json": [
		"./src/data.compiled/locales/zh/survivorPerks.json",
		"deadbydaylight.141"
	],
	"./zh/survivors.json": [
		"./src/data.compiled/locales/zh/survivors.json",
		"deadbydaylight.142"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/data.compiled/locales lazy recursive ^\\.\\/.*\\.json$ include: \\.json$";
module.exports = webpackAsyncContext;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"deadbydaylight.0":"5dd3e8927ebb6a33f954","deadbydaylight.1":"e218a7d6724ca6daccdc","deadbydaylight.2":"f4bccd258ba3abbcd99c","deadbydaylight.3":"549af05bb57ce7443798","deadbydaylight.4":"a1ddc8d53a8a63a90441","deadbydaylight.5":"3ee9ad9480f4334a010e","deadbydaylight.6":"b43d6141115365975340","deadbydaylight.7":"b3ca03c71dc088630641","deadbydaylight.8":"114ef1bd3672e6d496b9","deadbydaylight.9":"46ca3c57b793032fe818","deadbydaylight.10":"94ead2e79ce72ffcd219","deadbydaylight.11":"588c1b2e64531d3e8ec4","deadbydaylight.12":"29a07abe00b8051d64cd","deadbydaylight.13":"0733c7c1254592040dcc","deadbydaylight.14":"405b9b0bb5f828cb9e90","deadbydaylight.15":"83a947b7babd993dcd53","deadbydaylight.16":"342ea23d911502772c77","deadbydaylight.17":"3022b934c1d5434ac700","deadbydaylight.18":"dc9f9927589a4faa794d","deadbydaylight.19":"666014e915d18a6edd5d","deadbydaylight.20":"84d606f175b6bfd3852e","deadbydaylight.21":"d3c0aa62013330ca84e8","deadbydaylight.22":"6a9c279ec45d16db7513","deadbydaylight.23":"46a2692e6e6103fccc22","deadbydaylight.24":"c65e2e2bdbc31c519c82","deadbydaylight.25":"261259feadee6dadc165","deadbydaylight.26":"9fa9f6d90a0add928f9c","deadbydaylight.27":"2db69e2242de409e63ac","deadbydaylight.28":"3d335908f77e434dfe58","deadbydaylight.29":"b7d8b90a8fe44994c221","deadbydaylight.30":"4751e87cf06eb709614b","deadbydaylight.31":"648ff51dfc4674f70155","deadbydaylight.32":"312dcc424df4cd32de9a","deadbydaylight.33":"4dc6e5332f61c48d3f49","deadbydaylight.34":"8eb60455a6a940ec2aec","deadbydaylight.35":"292d6896115df3ed2431","deadbydaylight.36":"3a0a5974c3079b855eab","deadbydaylight.37":"825d24263bc5d96e7fb4","deadbydaylight.38":"3cab43d3e8533524e0b8","deadbydaylight.39":"816a798f5d50a70c452e","deadbydaylight.40":"6e6ae289d60406268f95","deadbydaylight.41":"df0b3f0a70dd56f540f2","deadbydaylight.42":"69dc414b5f697d2b67c6","deadbydaylight.43":"3f99c0fc3bf5b769bc0b","deadbydaylight.44":"feafa3c470f43fd3a52f","deadbydaylight.45":"fd936d5df2255a3484d7","deadbydaylight.46":"b577ddbaf7dc6e9e41c6","deadbydaylight.47":"b2e67dd156f05936f14e","deadbydaylight.48":"266fb59b047733b83845","deadbydaylight.49":"08a2df401000d9a1e4f5","deadbydaylight.50":"f31d23166fdc2a4cc2eb","deadbydaylight.51":"ea79b3a3d8f772052c4b","deadbydaylight.52":"9278fcd41137d21363df","deadbydaylight.53":"359f0ad6354b1743ddb3","deadbydaylight.54":"bbe4a7605c7bb0811bd3","deadbydaylight.55":"099c71dffce6ce8c9bf2","deadbydaylight.56":"5432d9329326ce4bd58c","deadbydaylight.57":"7d470cb66b7a43606b6d","deadbydaylight.58":"734b2693d7f9563116ea","deadbydaylight.59":"6b53e50b0e2078a819ba","deadbydaylight.60":"15b088394ccecdf7fa58","deadbydaylight.61":"107e0cb7d205748402c5","deadbydaylight.62":"7b0a856af8f5c62febcd","deadbydaylight.63":"e6f0b2034be6e2f265d8","deadbydaylight.64":"87560e235578864b9424","deadbydaylight.65":"4ca993d17d3a6f54ffd9","deadbydaylight.66":"928e8df15520fd46f78f","deadbydaylight.67":"21902f17e8e30dc30ffb","deadbydaylight.68":"d478c7ccf5a59bfff501","deadbydaylight.69":"785b30c7ec5746776a3e","deadbydaylight.70":"c3eca90684789ac035df","deadbydaylight.71":"3edff2c3bd2eed6ddfc4","deadbydaylight.72":"ad53ef883db61299528c","deadbydaylight.73":"46c89c0c2856dba3418c","deadbydaylight.74":"f88bbdac9a06055db4e0","deadbydaylight.75":"9aa0b6eed381b16c36ca","deadbydaylight.76":"0f09f5e6fdde4874be64","deadbydaylight.77":"03f89bba36acbdb3fa84","deadbydaylight.78":"e1862a83957dc3aa43c5","deadbydaylight.79":"5eabbdadf4e5eea3c565","deadbydaylight.80":"164d48a133dc2174e646","deadbydaylight.81":"5a7a7eb1278278f4ee52","deadbydaylight.82":"1e779341c87b9dce687c","deadbydaylight.83":"54333992a927f44cb5ba","deadbydaylight.84":"4c538dbf48f560ae905d","deadbydaylight.85":"4b32e9273b2e105a01b3","deadbydaylight.86":"801a8a2b280ad974e104","deadbydaylight.87":"98e7c98fab15db41e403","deadbydaylight.88":"baa720cdbccb22d67b2c","deadbydaylight.89":"7a6ff20812d87567747a","deadbydaylight.90":"8200efe80e27eeb0ca22","deadbydaylight.91":"d326fe1425e4d7ec5d3b","deadbydaylight.92":"ac3257823d52a6174df6","deadbydaylight.93":"b7aa0831c6f749cc8ad1","deadbydaylight.94":"7384b74c8e8ead15956d","deadbydaylight.95":"2741c6a45dea4ef67616","deadbydaylight.96":"bbe5c9039344c2c0fa3f","deadbydaylight.97":"4712bd7185e5324d62b8","deadbydaylight.98":"1f32947c7a8ec8ea74ef","deadbydaylight.99":"fd2fef772d32e96bd351","deadbydaylight.100":"48571c809fb0b4757495","deadbydaylight.101":"c89529cfc0204dcc4762","deadbydaylight.102":"e4f0f83fe5cde6410fdb","deadbydaylight.103":"53f8689e80a0999bd9eb","deadbydaylight.104":"eae48c23e906e2cefda4","deadbydaylight.105":"cd7aafb93371e97eaabf","deadbydaylight.106":"71c5bab792d1ce141063","deadbydaylight.107":"783c9e7d4d12173fccda","deadbydaylight.108":"64bfea39c77e20a40e0a","deadbydaylight.109":"33c986659a13682d95e3","deadbydaylight.110":"3b683cf9a7833d6bb7ff","deadbydaylight.111":"7940e5d0e0c136f35954","deadbydaylight.112":"edb9f6ab9c4cae32aa6e","deadbydaylight.113":"60a40a485a1d92554a6a","deadbydaylight.114":"d3986dfe80f47c78ec74","deadbydaylight.115":"143a6fc813e383a0f6c4","deadbydaylight.116":"4719b6f7ed38acd9e069","deadbydaylight.117":"46ea0de3bf00d709b726","deadbydaylight.118":"83eeff243558750ee0ae","deadbydaylight.119":"2bf83aec7ce9f19f0db1","deadbydaylight.120":"b646a3f9154908071ab8","deadbydaylight.121":"d841bb475ea629e6e84e","deadbydaylight.122":"74b74fcd036ee9dd36e8","deadbydaylight.123":"a2840ae93bbc81d04a8d","deadbydaylight.124":"085751f7d456d84c47fa","deadbydaylight.125":"63abf27535d6c7359f83","deadbydaylight.126":"0fcd7125a759630141a9","deadbydaylight.127":"7802b9ac9e88cc092d9a","deadbydaylight.128":"090aebac384993016517","deadbydaylight.129":"0e20c937553fd95177db","deadbydaylight.130":"dff6ab1b0299b7ee68df","deadbydaylight.131":"9cb0a6c15cdd54cd0cc1","deadbydaylight.132":"cab0894988ddd2eca970","deadbydaylight.133":"2412157d0bb36aea171a","deadbydaylight.134":"bbe2c2321d3fc9b65ad9","deadbydaylight.135":"5bf5ba49b5daa1c82897","deadbydaylight.136":"05f64470e5cd974ffde4","deadbydaylight.137":"0374e223fdca2e4a28e6","deadbydaylight.138":"f637b1e0e9e0b6bad6ff","deadbydaylight.139":"f82a8a8c63ec4fef578e","deadbydaylight.140":"e78550d8debd752c07c5","deadbydaylight.141":"e3b2a38ff290ed75d1f0","deadbydaylight.142":"c28bd97ff2bd2b064880"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "DeadByDaylight:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = this["webpackChunkDeadByDaylight"] = this["webpackChunkDeadByDaylight"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/browser.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": () => (/* binding */ Client),
/* harmony export */   "AddonModel": () => (/* reexport safe */ _lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Addon),
/* harmony export */   "ItemModel": () => (/* reexport safe */ _lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Item),
/* harmony export */   "OfferingModel": () => (/* reexport safe */ _lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Offering),
/* harmony export */   "PerkModel": () => (/* reexport safe */ _lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Perk),
/* harmony export */   "PlayerModel": () => (/* reexport safe */ _lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Player),
/* harmony export */   "PowerModel": () => (/* reexport safe */ _lib_factory_model__WEBPACK_IMPORTED_MODULE_2__.Power),
/* harmony export */   "Killer": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Killer),
/* harmony export */   "Power": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Power),
/* harmony export */   "Survivor": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Survivor),
/* harmony export */   "Item": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Item),
/* harmony export */   "Offering": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Offering),
/* harmony export */   "SurvivorOffering": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.SurvivorOffering),
/* harmony export */   "KillerOffering": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.KillerOffering),
/* harmony export */   "Addon": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Addon),
/* harmony export */   "KillerAddon": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.KillerAddon),
/* harmony export */   "SurvivorAddon": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.SurvivorAddon),
/* harmony export */   "Perk": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.Perk),
/* harmony export */   "KillerPerk": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.KillerPerk),
/* harmony export */   "SurvivorPerk": () => (/* reexport safe */ _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__.SurvivorPerk),
/* harmony export */   "PlayerType": () => (/* reexport safe */ _lib_enum__WEBPACK_IMPORTED_MODULE_0__.Player),
/* harmony export */   "Rarity": () => (/* reexport safe */ _lib_enum__WEBPACK_IMPORTED_MODULE_0__.Rarity),
/* harmony export */   "Difficulty": () => (/* reexport safe */ _lib_enum__WEBPACK_IMPORTED_MODULE_0__.Difficulty),
/* harmony export */   "ItemType": () => (/* reexport safe */ _lib_enum__WEBPACK_IMPORTED_MODULE_0__.ItemType),
/* harmony export */   "ModifierType": () => (/* reexport safe */ _lib_enum__WEBPACK_IMPORTED_MODULE_0__.ModifierType),
/* harmony export */   "Language": () => (/* reexport safe */ _lib_enum__WEBPACK_IMPORTED_MODULE_0__.Language),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/enum */ "./src/lib/enum.ts");
/* harmony import */ var _data_compiled_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.compiled/enum */ "./src/data.compiled/enum.ts");
/* harmony import */ var _lib_factory_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/factory/model */ "./src/lib/factory/model/index.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib */ "./src/lib/index.ts");
/* harmony import */ var _lib_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/resolver */ "./src/lib/resolver.ts");






var Client = function Client(language) {
  return new _lib__WEBPACK_IMPORTED_MODULE_3__.default(new _lib_resolver__WEBPACK_IMPORTED_MODULE_4__.default(), language);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map