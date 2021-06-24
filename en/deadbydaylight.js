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

/***/ "./src/lib/locales/en.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/en.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_en_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/en/items.json */ "./src/data.compiled/locales/en/items.json");
/* harmony import */ var _data_compiled_locales_en_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/en/killerAddons.json */ "./src/data.compiled/locales/en/killerAddons.json");
/* harmony import */ var _data_compiled_locales_en_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/en/killerOfferings.json */ "./src/data.compiled/locales/en/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_en_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/en/killerPerks.json */ "./src/data.compiled/locales/en/killerPerks.json");
/* harmony import */ var _data_compiled_locales_en_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/en/killers.json */ "./src/data.compiled/locales/en/killers.json");
/* harmony import */ var _data_compiled_locales_en_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/en/powers.json */ "./src/data.compiled/locales/en/powers.json");
/* harmony import */ var _data_compiled_locales_en_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/en/sharedOfferings.json */ "./src/data.compiled/locales/en/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_en_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/en/survivorAddons.json */ "./src/data.compiled/locales/en/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_en_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/en/survivorOfferings.json */ "./src/data.compiled/locales/en/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_en_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/en/survivorPerks.json */ "./src/data.compiled/locales/en/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_en_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/en/survivors.json */ "./src/data.compiled/locales/en/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.English;
var data = {
  items: _data_compiled_locales_en_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_en_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_en_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_en_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_en_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_en_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_en_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_en_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_en_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_en_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_en_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/en/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/en/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"A row of small explosive devices wrapped in heavy paper casing. Detonates into loud bangs and intense light flashes. Can be used as a distraction, as a blinding device or to celebrate.<br><li><b>1 charge.</b></li>","name":"Chinese Firecracker","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"A standard Flashlight. Can be used to light your way in the darkness.<br><li><b>8 seconds</b> of use.</li>","name":"Flashlight","flavor":"\\"Most of the battery life was wastefully used by the previous owner.\\"","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"A Flashlight equipped with a special lens cover that adds an orange tint and a little ghost to the beam. <br><li><b>8 Seconds</b> of use. </li><li><b>Considerably increases</b> Friendly Ghost in your life.</li>","name":"Will O\' Wisp","flavor":"\\"Happy Trick or Treating!\\"","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"A very portable Flashlight with a good grip. Its efficient technology produces a powerful light while consuming less power.<br><li><b>8 Seconds of use</b>.</li><li><b>Slightly decreases</b> the Flashlight battery consumption.</li><li><b>Slightly increases</b> accuracy.</li>","name":"Sport Flashlight","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"A sturdy but heavy Flashlight that packs a lot of power.<br><li><b>12 Seconds of use</b>.</li><li><b>Slightly reduces</b> accuracy.</li><li><b>Moderately increases</b> the beam\'s visual brightness.</li><li><b>Moderately increases</b> the Blindness duration.</li>","name":"Utility Flashlight","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"The bow and shank of a key, vibrating with power. The broken key\'s power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the broken key\'s power into various effects. <br><li><b>10 seconds</b> of use.</li>","name":"Broken Key","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"A bent and dull Key that once held great power. The Key\'s power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the Dull Key\'s remaining power into various effects.<br><li><b>5 seconds</b> of use.</li><li>Can be consumed to open the Hatch.</li>","name":"Dull Key","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"A tarnished and crooked key, vibrating with ominous power. The key\'s power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the Skeleton Key\'s power into various effects.<br><li><b>30 seconds</b> of use.</li><li>Can be consumed to open the Hatch.</li>","name":"Skeleton Key","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"An old piece of parchment made out of a skin-like material. It is rolled and sealed with an uncolored leather string. Holding and channeling the Map unlocks great potential in one\'s aura reading ability which slowly burns the Map. Generators\' auras which you have already encountered are revealed to you for as long as the Map has charges left.<br><li><b>20 seconds</b> of use.</li><li>Start with <b>1</b> generator automatically tracked.</li><li>Unlocks the ability to track generators within a <b>8 meter</b> range.</li>","name":"Map","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"A piece of parchment made out of oddly fresh skin. Blood on its edge has yet to dry. It is rolled and sealed with multiple colored ropes and cords. Holding and channelling the Map unlocks great potential in one\'s aura reading ability which slowly burns up the Map. Objects with auras which you have already encountered are revealed to you for as long as the Map has charges left. <br><li><b>20 seconds of use</b>.</li><li>Start with <b>3 objects</b> automatically tracked.</li><li>Unlocks the ability to <b>track objectives</b> within an <b>8-meter</b> range.</li><li>Unlocks the ability to <b>track the Hatch</b> within an <b>8-meter</b> range.</li><li>Unlocks the ability to <b>track the Killer\'s belongings</b> within an <b>8-meter</b> range.</li><li>Unlocks the ability to <b>track the exit gates</b> within an <b>8-meter</b> range.</li>","name":"Rainbow Map","flavor":"\\"It disheartens me. All this unspeakable knowledge and gruelling effort and yet nothing tangible, nothing usable to get out of this nightmare.\\" -Vigo\'s Journal","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"A rudimentary aid kit which can save lives in emergencies, even if it\'s lacking some of its supplies.<br><li><b>16 charges</b>.</li><li><b>Moderately increases</b> the speed that you heal others.</li><li>Unlocks the <b>self-healing</b> action.</li>","name":"Camping Aid Kit","flavor":"\\"Barely has enough material for a decent patch-up.\\"","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"A plastic lunchbox with phosphorescent Halloween stickers that has been packed with first-aid equipment.<br><li><b>24 charges.</b></li><li><b>Considerably increases</b> the speed that you heal others.</li><li>Unlocks the <b>self-healing</b> action.</li><li>Makes you <b>considerably more visible</b>.</li>","name":"All Hallows\' Eve Lunchbox","flavor":"\\"Safety first! Make sure you can be seen when trick or treating.\\"","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"A standard first aid kit with all the necessary equipment for treating common to more serious injuries.<br><li><b>24 charges.</b></li><li><b>Considerably increases</b> the speed that you heal others.</li><li>Unlocks the <b>self-healing</b> action.</li>","name":"First Aid Kit","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"A sturdy and well organized medical kit equipped with top condition emergency supplies.<br><li><b>16 charges</b>.</li><li><b>Tremendously increases</b> the speed that you heal others.</li><li><b>Tremendously increases</b> the speed that you heal yourself.</li><li>Unlocks the <b>self-healing</b> action.</li>","name":"Emergency Med-kit","flavor":"\\"There is a cure for almost everything… but not for this.\\"","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"A large metal box containing medical supplies aimed for emergency rescues in hard to reach, often isolated locations.<br><li><b>32 charges</b>.</li><li><b>Tremendously increases</b> the speed that you heal others.</li><li><b>Moderately increases</b> Skill Check success zones.</li><li><b>Moderately increases</b> Skill Check bonus zones.</li><li>Unlocks the <b>self-healing</b> action.</li>","name":"Ranger Med-kit","flavor":"\\"A small engraved label can be found glued to the back panel: VK.ID-3994723.\\"","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"Metal box containing out of condition tools that could break at any moment. Even without training, can be used to repair or break various mechanical components.<br><li><b>16 charges</b>.</li><li><b>Moderately increases</b> repair speed.</li><li><b>Slightly decreases</b> Skill Check success zones.</li><li>Unlocks the <b>sabotage</b> action.</li>","name":"Worn-out Tools","flavor":"\\"You call these tools?… Really?\\"","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"Metal box containing a set of basic tools. Even without training, can be used to repair or break various mechanical components.<br><li><b>20 charges.</b></li><li><b>Moderately increases</b> repair speed.</li><li>Unlocks the <b>sabotage</b> action.</li><li><b>Slightly increases</b> sabotage speed.</li>","name":"Toolbox","flavor":"\\"It is unclear as to where these tools come from. Were they brought in by one of us or did they belong to one of the monsters?\\"","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"Metal box with specialized mechanics tools. Even without training, can be used to repair or break various mechanical components.<br><li><b>16 charges</b>.</li><li><b>Considerably increases</b> repair speed.</li><li>Unlocks the <b>sabotage</b> action.</li><li><b>Slightly decreases</b> sabotage speed.</li>","name":"Mechanic\'s Toolbox","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"A large metal box containing basic tools and extra mechanical parts. Even without training, can be used to repair or break various mechanical components.<br><li><b>32 charges</b>.</li><li><b>Moderately increases</b> repair speed.</li><li>Unlocks the <b>sabotage</b> action.</li>","name":"Commodious Toolbox","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"Metal box with highly specialized tools meant for engineering. Most of the tools can still be used by neophytes to make fast repairs or break various mechanical components.<br><li><b>16 charges</b>.</li><li><b>Tremendously increases</b> repair speed.</li><li>Unlocks the <b>sabotage</b> action.</li><li><b>Moderately decreases</b> sabotage speed.</li>","name":"Engineer\'s Toolbox","flavor":"\\"I\'ve created tools beyond compare and stood paralyzed as they were stolen from me. These are but a poor replica, spat out by The Fog.\\" –Vigo\'s Journal","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"A metal box containing mainly saws and vice grips of varying sizes but also other tools. Even though the content of this Toolbox is clearly aimed at destructive deeds, it can be used to repair various mechanical components as well.<br><li><b>24 charges</b>.</li><li><b>Slightly increases</b> repair speed.</li><li>Unlocks the <b>sabotage</b> action.</li><li><b>Considerably increases</b> sabotage speed.</li>","name":"Alex\'s Toolbox","flavor":"\\"Most of the tools are identified as \'owned by Alex\'.\\"","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"A small, highly-explosive dinner table decoration. Detonates into loud bangs and intense light flashes. Can be used as a distraction, as a blinding device or to celebrate.<br><li><b>1 charge.</b></li>","name":"Winter Party Starter","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"A small, highly-explosive dinner table decoration. Detonates into loud bangs, intense light flashes, and playful confetti. Can be used as a distraction, as a blinding device or to celebrate our three years together.<br><li><b>1 charge.</b></li>","name":"Third Year Party Starter","flavor":"“Happy Anniversary! Here\'s to our three years together!\\"<br>– The Dead by Daylight Team","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"A festive Med-kit that explodes with confetti upon fully healing a Survivor. Surprise!<br><li><b>24 charges</b>.</li><li><b>Considerably increases</b> the speed that you heal others.</li><li>Unlocks the <b>self-healing</b> action.</li>","name":"Anniversary Med-kit","flavor":"\\"Happy Anniversary! Here\'s to many more!\\"<br>- The Dead by Daylight Team","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"A festive Flashlight that explodes with confetti upon blinding a Killer. Surprise!<br><li><b>8 Seconds</b> of use.</li>","name":"Anniversary Flashlight","flavor":"\\"Happy Anniversary! Here\'s to many more!\\"<br>- The Dead by Daylight Team","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/en/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Protective padded leather gloves. <br><li><b>Slightly increases</b> Bear Trap setting speed.</li>","name":"Trapper Gloves","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"A large and heavy Coil spring which add a good amount of strength to the Bear Trap hold.<br><li><b>Slightly increases</b> Bear Trap disarm time.</li>","name":"Strong Coil Spring","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"A replacement kit for Bear Traps which changes the usual dual spring system with 4 coil springs adding a great amount of strength to the traps\' hold.<br><li><b>Moderately increases</b> the Bear Trap disarm time.</li>","name":"4-Coil Spring Kit","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"Wood Ashes. When boiled, can be used to dye Bear Traps and make them less noticeable.<br><li><b>Moderately darkens</b> all Bear Traps.</li>","name":"Logwood Dye","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"These replacement Bear Trap jaws have saw like blades which cause awful open wounds when they snap.<br><li>Survivors caught in a Bear Trap suffer from the <b>Hemorrhage</b> status effect until healed.</li>","name":"Serrated Jaws","flavor":"\\"Like a predatory beast, it can smell and track blood.\\"","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"Simple tools designed to quickly and safely set Bear Traps.<br><li><b>Moderately increases</b> Bear Trap setting speed.</li>","name":"Trap Setters","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"A cured leather waist bag. Large and sturdy to transport hunting equipment.<br><li>Start with <b>1 extra</b> Bear Trap</li><li>Allows the transportation of <b>2 extra</b> Bear Traps.</li>","name":"Trapper Bag","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"These Bear Trap jaws are covered with crusty and volatile rust spots that makes injuries particularly difficult to heal.<br><li>Survivors caught in a Bear Trap suffer from the <b>Mangled</b> status effect.","name":"Rusted Jaws","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"A secondary coil which keeps a Bear Trap effective in times when the primary coils becomes unusable.<br><li><b>Considerably increases</b> the Bear Trap disarm time.</li>","name":"Secondary Coil","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"A black, matte and sticky substance similar to tar. When applied to Bear Traps, makes them far less noticeable.<br><li><b>Considerably darkens</b> all Bear Traps.</li>","name":"Tar Bottle","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"A block of wax used to lower friction and facilitate movement in mechanical parts.<br><li><b>Moderately reduces</b> the chance of escaping a Bear Trap.</li>","name":"Wax Brick","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"A clear oil that makes handling the traps\' springs more hazardous.<br><li><b>Tremendously increases</b> the Bear Traps disarm time.</li>","name":"Oily Coil","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"A specialized set of tools used to fasten Bear Traps to ensure their effectiveness.<br><li><b>Tremendously increases</b> Bear Trap setting speed.</li><li><b>Considerably increases</b> the rescue and escape time from Bear Traps.</li><li><b>Moderately reduces</b> the chances of escaping a Bear Trap.</li>","name":"Fastening Tools","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"Skin pieces of all sorts crudely stitched together making for a very large bag.<br><li>Start with <b>2 extra</b> Bear Traps.</li><li>Allows the transportation of <b>2 extra</b> Bear Traps.</li>","name":"Stitched Bag","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"Part sticky, part slippery, this grim liquid makes handling the traps\' springs more dangerous.<br><li>When a trap is disarmed by a <b>healthy</b> Survivor, the bloody coils exact their price and that Survivor becomes <b>injured</b>.</li><li><b>Slightly increases</b> Bear Trap disarm time.</li>","name":"Bloody Coil","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"Traps sharpened with this sickly gleaming stone seem to gain a life of their own.<br><li>Every <b>30 seconds</b>, one closed Bear Trap chosen at random becomes set.</li>","name":"Iridescent Stone","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"The Laokeye symbol, representing cunning, is finger-drawn out of soot on the body of the bell.<br><li>The Wraith will <b>Uncloak completely</b> when breaking pallets or damaging generators while Cloaked.</li>","name":"\\"The Serpent\\" - Soot","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"The Wonnug symbol, representing a peerless tracker, is finger-drawn out of soot on the body of the bell.<br><li>While Cloaked, fresh blood marks are <b>considerably</b> more discernible than normal.</li>","name":"\\"The Hound\\" - Soot","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"The Khugwemuu symbol, representing the spirit world, is finger-drawn out of soot on the body of the bell.<br><li>After Uncloaking, the Wraith\'s Terror Radius and Red Stain will remain suppressed for <b>6</b> seconds.</li>","name":"\\"The Ghost\\" - Soot","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"The Kunwulju symbol, representing the realm of fear, is finger-drawn out of soot on the body of the bell.<br><li>The Wraith\'s Terror Radius is <b>no longer suppressed</b> while Cloaked.</li><li>Bloodpoints granted for Stalking and surprise attacks are increased by 100%.</li>","name":"\\"The Beast\\" - Soot","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"A bell clapper made from a highly polished piece of bone. Causes the sounds of the Wailing Bell to echo and warp chaotically.<li>Survivors can no longer discern the Wailing Bell\'s <b>distance</b> or <b>direction.</b></li>","name":"Bone Clapper","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"The Kratin symbol, representing quick passing, is finger-drawn in mud on the body of the Bell.<br><li><b>Considerably</b> reduces The Wraith\'s disappearance time.</li>","name":"\\"Blink\\" - Mud","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"The Ohuwe-Onmnea symbol, representing a howling storm, is finger-drawn in mud on the body of the Bell.<li><b> Moderately increases</b> The Wraith\'s movement speed while Cloaked.</li>","name":"\\"Windstorm\\"- Mud","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"The Kuntin-Takkho symbol, representing rapid descent on prey, is finger-drawn in mud on the body of the Bell.<br><li><b>Slightly reduces</b> The Wraith\'s reappearance time.</li>","name":"\\"Swift Hunt\\" - Mud","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"The Baikra-Kaeug symbol, representing ferocity, is finger-drawn in mud on the body of the Bell.<br><li><b>Surprise attacks</b> inflict Survivors with <b>aura blindness</b> for <b>60 seconds.</b></li>","name":"\\"Blind Warrior\\" - Mud","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"The Ohuwe-Onmnea symbol, representing a howling storm, is finger-drawn in white ink on the body of the Bell.<li><b>Considerably increases</b> The Wraith\'s movement speed while Cloaked.</li>","name":"\\"Windstorm\\" - White","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"The Kuntin-Takkho symbol, representing rapid descent on prey, is finger-drawn in white ink on the body of the Bell.<br><li><b>Moderately reduces</b> The Wraith\'s reappearance time.</li>","name":"\\"Swift Hunt\\" - White","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"The Yiwarick symbol, representing dark synergy, is finger-drawn in white ink on the body of the Bell.<br><li><b>Considerably reduces</b> the time required to vault windows, open lockers, break pallets and breakables, or damage generators while Cloaked.</li>","name":"\\"Shadow Dance\\" - White","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"The Kratin symbol, representing quick passing, is finger-drawn in white ink on the body of the Bell.<br><li><b>Tremendously reduces</b> The Wraith\'s disappearance time.</li>","name":"\\"Blink\\" - White","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"The Baikra-Kaeug symbol, representing ferocity, is finger-drawn in white ink on the body of the Bell.<br><li>Surprise attacks inflict Survivors with the <b>Mangled</b> and <b>Hemorrhage</b> status effects until fully healed.</li>","name":"\\"Blind Warrior\\" - White","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"The Ohuwe-Onmnea symbol, representing a howling storm, is stamped in blood on the body of the bell.<br><li><b>Tremendously increases</b> The Wraith\'s movement speed while Cloaked.</li>","name":"\\"Windstorm\\" - Blood","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"The Kuntin-Takkho symbol, representing rapid descent on prey, is stamped in blood on the head of the Bell.<br><li><b>Considerably reduces</b> The Wraith\'s reappearance time.</li>","name":"\\"Swift Hunt\\" - Blood","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"The Yiwarick symbol, representing dark synergy, is stamped in blood on the body of the Bell.<br><li><b>Tremendously reduces</b> the time required to vault windows, open lockers, break pallets and breakables, or damage generators while Cloaked.</li>","name":"\\"Shadow Dance\\" - Blood","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"The Kra-Frabai symbol, representing The Entity watching over us, is stamped in blood on the head of the Bell.<br><li>Unlocks hidden potential in one\'s aura reading ability. While Cloaked, the auras of Survivors within <b>12 meters</b> are revealed to you.</li>","name":"\\"All Seeing\\" - Blood","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"A simple coxcomb knotted rope wrapped around the bell clapper to muffle its sound. A malevolent aura emanates from it. <br><li>Renders the Wailing Bell <b>completely silent.</b></li>","name":"Coxcombed Clapper","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"The Kra-Frabai symbol, representing The Entity watching over us, glows ominously on the head of the bell.<br><li>Unlocks awesome potential in one\'s aura reading ability. While Cloaked, the <b>repair progress of generators</b> can be determined by the <b>intensity of their auras.</b></li>","name":"\\"All Seeing\\" - Spirit","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"A well-made clutch that keeps the chain moving smoothly.<br><br><li><b>Decreases</b> the collision zone during a Chainsaw Sprint.</li>","name":"Heavy Clutch","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"A mechanical device that limits the amount of fuel small engines can intake at one time, forcing a constant and safe speed.<br><br><li>Survivors hit with the Chainsaw are damaged for a single health state.</li><li>Get <b>100%</b> more Bloodpoints for Chainsaw Hit score events.</li>","name":"Speed Limiter","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"A cracked and dusty filter, it still manages to work better than the stock model.<br><br><li><b>Slightly increases</b> the Chainsaw’s overheat limit.</li>","name":"Junkyard Air Filter","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"Boots with a reinforced toe that offer protection from impact.<br><br><li><b>Slightly decreases</b> recovery time after hitting an object with the Chainsaw.</li>","name":"Steel Toe Boots","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"A roughly modified muffler that allows for extra air flow.<br><br><li><b>Slightly increases</b> the Chainsaw’s rate of cooling.</li>","name":"Punctured Muffler","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"A glorious, shining belt worn by many good ol’ country boys.<br><br><li><b>Decreases</b> Terror Radius by 8 meters when the Chainsaw is overheating.</li>","name":"Big Buckle","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"Affordable oil that can be used to lubricate noisy chains.<br><br><li><b>Slightly reduces</b> the noise made by the Chainsaw.</li>","name":"Off-Brand Motor Oil","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"A pair of trusty boots, pulled from the corpse of Max Thompson Sr.<br><br><li><b>Moderately increases</b> Chainsaw Sprint steering.</li>","name":"Dad\'s Boots","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"Engravings found on the Chainsaw body counting the amount of lives it took. Fills the user with determination.<br><li><b>Slightly increases</b> the Chainsaw\'s movement speed.</li><li><b>Slightly increases</b> Chainsaw charge time.</li>","name":"Death Engravings","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"A small number of caffeine pills found in Evelyn Thompson’s purse. Side effects include nervousness and irritability.<br><br><li><b>Slightly decreases</b> Chainsaw charge time for 30 seconds after being stunned by a pallet.</li><br>","name":"Mother\'s Helpers","flavor":"\\"Doctor, please, more of these.\\" —Evelyn Thompson","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"A specialized chain that reduces the likelihood of kickback.<br><br><li><b>Considerably reduces</b> the time penalty when bumping into obstacles during a Chainsaw Sprint.</li>","name":"Low Kickback Chains","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"A wet mash of fragrant leaves that mask a hunter’s scent when stalking prey.<br><br><li>Gain the Undetectable status effect for 15 seconds after landing a Chainsaw hit.</li>","name":"Leafy Mash","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"Engravings found on the Chainsaw body representing the dark beast that lives in The Fog. Fills the user with determination.<br><li><b>Moderately increases</b> movement speed during a Chainsaw Sprint.</li><li><b>Slightly increases</b> Chainsaw charge time.</li>","name":"Doom Engravings","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"Thick grease that can be applied beneath the eyes to reduce glare.<br><br><li><b>Moderately increases</b> the Chainsaw\'s rate of cooling when a Flashlight is shining on you.</li>","name":"Black Grease","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"Despite being caked in dirt and oil, this carburetor has been well adjusted.<br><br><li><b>Moderately decreases</b> Chainsaw charge time.</li><li><b>Reduce</b> base movement speed to 4.4 m/s.","name":"Tuned Carburetor","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"Boots with strapped-on pieces of metal which burrow in mud for more stability and control with each step.<br><li><b>Tremendously increases</b> steering while using the Chainsaw.</li><li><b>Considerably increases</b> the time penalty when bumping in objects.</li>","name":"Spiked Boots","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"Rancid smelling gloves, soiled with unknown substances. Despite everything wrong with them, they do have thick fabric.<br><br><li><b>Moderately decreases</b> the heat gained when starting to rev the Chainsaw.</li><br>","name":"Pighouse Gloves","flavor":"\\"Ain’t no mess can stain a hard-workin\' man’s soul.\\" — Max Thompson Sr.","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"Light chains that decrease the weight of the Chainsaw, allowing for greater maneuverability.<br><br><li>Continue a Chainsaw Sprint after breaking a pallet or a wall.</li><li>Survivors hit with the Chainsaw within 5 seconds of breaking a pallet or a wall are damaged for a single health state.</li>","name":"LoPro Chains","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"Once representative of Max Jr’s confinement, this was the first brick to fall when his room’s barricade came crashing down.<br><br><li>After maintaining a Chainsaw Sprint for 2 seconds, gain the Undetectable status effect until you stop sprinting.</li><br>","name":"Iridescent Brick","flavor":"\\"What kinda ruckus you stirrin’, boy?\\" — Max Thompson Sr.","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"A masterfully crafted chainsaw muffler that outperforms all others.<br><br><li>Chainsaw is silent for Survivors outside the Terror Radius.</li>","name":"Apex Muffler","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"An unpainted toy carved out of cheap wood to resemble a horse. Once the symbol of a deep connection between a catatonic patient and his nurse.<br><li><b>Moderately decreases</b> extra fatigue from missed Blink attacks.</li>","name":"Wooden Horse","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"A parasitic nit comb taken from the clinic. Once the symbol of a deep connection between an anxious patient and her nurse.<br><li><b>Moderately decreases</b> the distance of Blink lunge attacks.</li><li>Increases bloodpoints for <i>Blink attack</i> score events by <b>100%</b>.</li>","name":"White Nit Comb","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"A dull, partially rusted and stained metallic spoon. Confiscated from room 202\'s patient, the \\"Bad Man\\".<br><li>Hitting a Survivor with a successful Blink attack causes their sounds of pain to be <b>Moderately louder</b> for <b>60 seconds</b>.</li>","name":"Metal Spoon","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"A rotten molar extirpated from the \\"Bad Man\'s\\" cold dead hand.<br><li>Hitting a Survivor with a successful Blink attack causes their auras to be revealed when healing or being healed within a <b>28 meter</b> range for <b>60 seconds</b>.</li>","name":"Bad Man Keepsake","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"A charred and broken pocket watch with rattling pieces. Taken from Nurse Moris\' body.<br><li><b>Moderately increases</b> the length of the Chain Blink window.</li>","name":"Pocket Watch","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"A worthless piece of jewelry that might have had an important significance to someone. Taken from the anxious girl\'s body.<br><li><b>Moderately decreases</b> maximum Blink distance.</li><li>Increases Bloodpoints for <i>precise Blink</i> score events by <b>100%</b></li>","name":"Dull Bracelet","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"A black rope used as a belt in times of mourning. Taken from Father Campbell\'s body.<br><li><b>Moderately increases</b> Blink recharge speed.</li>","name":"Dark Cincture","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"A pine-cone which unexpectedly calmed a patient\'s repetitive movement. Taken from the catatonic boy\'s body.<br><li><b>Considerably reduces</b> extra fatigue from Chain Blinks.</li>","name":"Catatonic Boy\'s Treasure","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"The twitchy and tremulous breath stolen from the \\"Bad Man.\\" Aggressively pulses and jumps at The Nurse\'s touch.<br><li>Hitting a Survivor with a successful Blink attack <b>disables The Nurse\'s ability to Blink</b> and increases The Nurse\'s base movement speed to <b>4.6 m/s</b> for <b>60 seconds.</b></li>","name":"Spasmodic Breath","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"The slow and bulging breath stolen from the fat orderly. Dimly oscillates at The Nurse\'s touch.<br><li><b>Considerably increases</b> maximum Blink range.</li><li><b>Considerably increases</b> maximum Blink charge time.</li>","name":"Heavy Panting","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"The whistling and rattling breath stolen from Father Campbell. Silently curves and bends at The Nurse\'s touch.<br><li><b>Considerably increases</b> Blink recharge speed.</li>","name":"Fragile Wheeze","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"The irregular and deteriorating breath collected from the catatonic boy. Normally stable and calm, becomes incredibly agitated at The Nurse\'s touch.<br><li><b>Moderately decreases</b> Blink fatigue duration.</li>","name":"Ataxic Respiration","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"The gasp of surprise collected from an anxious girl which The Nurse was fond of. Twitches vigorously at The Nurse\'s touch.<br><li>Blinking past a Survivor causes them to scream and awards <b>200 Bloodpoints</b> in the <i>Deviousness</i> category.</li>","name":"Anxious Gasp","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"A torn piece of red and black plaid flannel. The scrap of fabric imbues The Nurse with devastating focus.<br><li>Allows The Nurse to see Blink target locations.</li>","name":"Plaid Flannel","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"A powerful last breath snatched from Crotus Prenn asylum orderly Harvey Kavanagh. In the hands of The Nurse, it wobbles with intensity.<br><li><b>Tremendously increases</b> maximum Blink range.</li><li><b>Tremendously increases</b> maximum Blink charge time.</li>","name":"Kavanagh\'s Last Breath","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"A powerful last breath snatched from Crotus Prenn asylum patient Mary Jenner. In the hands of The Nurse, it trembles with intensity.<br><li>After Blinking, allows The Nurse to immediately Blink back to her original position by pressing the <i>Active Ability button</i>. Must be triggered before The Nurse succumbs to fatigue.</li>","name":"Jenner\'s Last Breath","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"A powerful last breath snatched from Crotus Prenn asylum priest Father Campbell. In the hands of The Nurse, it crackles with intensity.<br><li>After reappearing from a fully charged Blink, The Nurse immediately Blinks at half charge in the direction she is currently facing.</li>","name":"Campbell\'s Last Breath","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"A powerful last breath snatched from Crotus Prenn asylum patient \\"the Bad Man.\\" In the hands of The Nurse, it jolts with intensity.<br><li>Hitting a Survivor with a successful Blink attack grants The Nurse\'s the <b>Undetectable</b> status for <b>16  seconds</b>.</li><li>This effect may be only triggered once every <b>60 seconds</b>.</li>","name":"\\"Bad Man\'s\\" Last Breath","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"A white and pristine piece of ribbon once attached to a sacred book. Serves as the symbol of a dispute.<br><li>Adds <b>1</b> Blink charge.</li><li>Blinks are restricted to locations in the Nurse\'s line of sight.</li>","name":"Torn Bookmark","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"A matchbox containing an odd collection of mismatched buttons. Serves as a reminder of a horrible place.<br><li>Removes <b>1</b> Blink charge.</li><li>Increases The Nurse\'s base movement speed to <b>4.2 m/s</b>.</li>","name":"Matchbox","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"A very cheap piece of jewelry made from plastic. Painted to resemble precious material.<br><li><b>Slightly increases</b> movement speed while Stalking.</li>","name":"Tacky Earrings","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"A \\"romantic\\", if slightly sleazy, note left around to draw the attention of a female lover.<br><li><b>Slightly increases</b> the lunge of <b>Evil Within I</b>.</li>","name":"Boyfriend\'s Memo","flavor":"\\"The note is signed: D.\\"","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"A single slightly wavy blond hair.<br><li><b>Slightly increases</b> the duration of <b>Evil Within III</b>.</li><li><b>Slightly increases</b> the amount of evil required to reach <b>Evil Within III</b> for the first time.</li>","name":"Blond Hair","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"A tiny piece of a highly reflective material most probably from a broken mirror.<br><li><b>Evil Within II reveals the aura of Survivors</b> who\'ve been Stalked for at least <b>1 second</b>.</li><li>Aura stays visible for a duration of <b>2 seconds</b>.</li>","name":"Reflective Fragment","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"A partially faded and dried pink larkspur picked up from a gravestone.<br><li><b>Slightly increases</b> the rate at which evil is gained when Stalking a Survivor.</li>","name":"Memorial Flower","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"A large necklace made of beads and inexpensive metals. One of Judith\'s favorites.<br><li><b>Moderately increases</b> movement speed while Stalking.</li>","name":"Jewelry","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"A nylon bristle brush used to add body and softness to hair.<br><li><b>Moderately increases</b> the duration of <b>Evil Within III</b>.</li><li><b>Slightly increases</b> the amount of evil required to reach <b>Evil Within III</b> for the first time.</li>","name":"Hair Brush","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"A tiny piece of tinted glass, probably from a broken object. It is impossible to determine its origin.<br><li><b>Evil Within I reveals the aura of Survivors</b> who\'ve been Stalked for at least <b>1 second</b>.</li><li>Aura stays visible for a duration of <b>3 seconds</b>.</li>","name":"Glass Fragment","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"A grey rabbit which has been opened from neck to tail.<br><li><b>Moderately reduces</b> the Terror Radius of <b>Evil Within II</b>.</li><li><b>Moderately increases</b> the Terror Radius of <b>Evil Within III</b>.</li>","name":"Dead Rabbit","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"A large and sharp piece of a broken mirror.<br><li><b>Evil Within II reveals the aura of Survivors</b> who\'ve been Stalked for at least <b>1 second</b>.</li><li>Aura stays visible for a duration of <b>5 seconds</b>.</li>","name":"Mirror Shard","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"A journal identified as owned by Judith M. Myers. Most of the pages are defaced with frightening and disturbing drawings.<br><li>You become <b>obsessed</b> with one Survivor.</li><li><b>Considerably increases</b> the rate at which evil is gained when Stalking your Obsession.</li><li><i>Only one Obsession per match.</i></li>","name":"Judith\'s Journal","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"A barren wooden box in which vanity items were once stored.<br><li><b>Considerably increases</b> movement speed while Stalking.</li>","name":"Jewelry Box","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"A glossy page ripped from the \'65 Haddonfield High School yearbook, one dedicated to the memory of Judith Myers.<br><li><b>Moderately increases</b> the rate at which evil is gained when Stalking a Survivor.</li>","name":"J.Myers Memorial","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"A blue tartan ribbon used to tie hair.<br><li><b>Considerably increases</b> the duration of <b>Evil Within III</b>.</li><li><b>Slightly increases</b> the amount of evil required to reach <b>Evil Within III</b> for the first time.</li>","name":"Hair Bow","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"A standing portable vanity mirror in perfect condition except for a fine layer of dust and face powder covering it.<br><li><b>Evil Within II reveals Survivors\' auras</b> when Stalking within a <b>16 meter</b> range.</li><li>Evil Within cannot progress past <b>TIER II.</b></li><li><b>Slightly reduces</b> movement speed.</li><li>For each <b>Hit</b> score event, grant <b>100%</b> Bloodpoints for the <b>Hit</b> score event in the <b>Brutality</b> category and an additional <b>150%</b> Bloodpoints in the <b>Deviousness</b> category.</li>","name":"Vanity Mirror","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"A fist-sized granite piece taken from a broken tombstone.<br><li>Unlocks the ability to <b>kill healthy or injured Survivors</b> with <b>Evil Within III</b>.</li><li><b>Disables</b> the ability to Stalk with <b>Evil Within III</b>.</li><li>Killing a Survivor <b>considerably drains</b> the power of Evil Within.</li><li><b>Considerably increases</b> the amount of evil required to reach <b>Evil Within III</b> for the first time.</li>","name":"Tombstone Piece","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"A standing portable vanity mirror which has been violently scratched with a sharp metallic object.<br><li><b>Evil Within I reveals Survivors\' auras</b> when Stalking within a <b>32 meter</b> range.</li><li>Evil Within cannot progress past <b>TIER I</b>.</li><li>For each <b>Hit</b> score event, grant <b>100%</b> Bloodpoints for the <b>Hit</b> score event in the <b>Brutality</b> category and an additional <b>200%</b> Bloodpoints in the <b>Deviousness</b> category.</li>","name":"Scratched Mirror","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"A cut lock of blond hair bunched with a black elastic.<br><li><b>Tremendously increases</b> the duration of <b>Evil Within III</b>.</li><li><b>Moderately increases</b> the amount of evil required to reach <b>Evil Within III</b> for the first time.</li>","name":"Lock of Hair","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"A large and heavy granite tombstone stolen from Mt. Sinclair cemetery, belonging to Judith Myers.<br><li>Unlocks the ability to <b>kill healthy, or injured Survivors</b> with <b>Evil Within III</b>.</li><li><b>Disables</b> the ability to Stalk with <b>Evil Within III</b>.</li><li><b>Tremendously increases</b> the amount of evil required to reach <b>Evil Within III</b> for the first time.</li><li><b>Moderately decreases</b> movement speed.</li>","name":"Judith\'s Tombstone","flavor":"\\"Here lies our beloved daughter.\\"","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"A tuft of blond hair which was forcefully torn off someone\'s scalp. Releases hints of feminine floral fragrance.<br><li><b>Unlimited</b> duration of <b>Evil within III</b>.</li><li><b>Tremendously increases</b> the amount of evil required to reach <b>Evil Within III</b> for the first time.</li>","name":"Fragrant Tuft of Hair","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"A rigid ornament worn around the neck made from dead plants.<br><li><b>Slightly reduces</b> the setting time of Phantasm Traps.</li>","name":"Rope Necklet","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"Minuscule eggshell fragments shimmering with a pale golden hue.<br><li><b>Slightly increases</b> the tripped Phantasm Trap duration time.</li>","name":"Powdered Eggshell","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"A small lump of mud, black with the remains of flies. Devoured to increase stamina.<br><li><b>Slightly increases</b> the distance from where The Hag can Teleport to her traps.</li>","name":"Dead Fly Mud","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"Murky water contained in a glass pill bottle from another time.<br><li><b>Slightly increases</b> the effective Phantasm Trap range.</li>","name":"Bog Water","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"A handful of small, pristine flower clusters covered in a fine greyish fur.<br><li>Reveals the Survivor’s aura for <b>3 seconds</b> when they trip the Phantasm Trap.</li>","name":"Pussy Willow Catkins","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"One half of a perfectly round hollow eggshell.<br><li><b>Moderately increases</b> the tripped Phantasm Trap duration time.</li>","name":"Half Eggshell","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"A handful of yellowish wings, dry and crisp. Devoured to increase stamina.<br><li><b>Moderately increases</b> the distance from where The Hag can Teleport to her traps.</li>","name":"Dragonfly Wings","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"A rigid ornament worn around the neck made from dead plants adorned with crudely attached cypress bark and swamp moss.<br><li><b>Moderately reduces</b> the setting time of Phantasm Traps.</li>","name":"Cypress Necklet","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"Tainted water contained in a folded waterlily leaf.<br><li><b>Moderately increases</b> the effective Phantasm Trap range.</li>","name":"Bloodied Water","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"Three frail willow branches attached to form a triangular wreath.<br><li>Reveals the Survivor’s aura for <b>5 seconds</b> when they trip the Phantasm Trap.</li>","name":"Willow Wreath","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"A rigid ornament worn around the neck made from dead plants adorned with withered orchid petals and leaves.<br><li><b>Considerably reduces</b> the setting time of Phantasm Traps.</li>","name":"Swamp Orchid Necklet","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"A large swamp cicada covered in a fine layer of ash. Crispy. Devoured to increase stamina.<br><li><b>Considerably increases</b> the distance from where The Hag can Teleport to her traps.</li>","name":"Dried Cicada","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"A pale orange turtle egg, cracked and emptied of its content.<br><li><b>Considerably increases</b> the tripped Phantasm Trap duration time.</li>","name":"Cracked Turtle Egg","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"A handful of mud with veins of deep crimson. The bloody layers empower the mud.<br><li><b>Considerably increases</b> the effective Phantasm Trap range.</li>","name":"Bloodied Mud","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"The cut up, severed hand of the cannibal village butcher. The trapped life essence within unlocks tremendous potential in The Hag\'s power.<br><li>Mud Phantasms have collision.</li><li>Removes The Hag\'s ability to Teleport to traps.</li><li>Grants <b>300%</b> Bloodpoints from Deviousness.</li><li>Trumps all other add-ons.</li>","name":"Scarred Hand","flavor":"\\"…\\" -The Butcher","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"Shackles once used to hold prisoners and carcasses in the cannibal village cellar. The trapped life essence within unlocks tremendous potential in The Hag\'s power.<br><li>Tripped Phantasm Traps give no indication of being tripped to the Survivor.</li><li>Trap does not spawn a Hag Phantasm.</li>","name":"Rusty Shackles","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"The cold heart of the cannibal village elder. The trapped life essence within unlocks tremendous potential in The Hag\'s power.<br><li>Reduces The Hag\'s heartbeat range to <b>0</b> when a Survivor trips a Phantasm Trap.</li><li>Increases Mud Phantasm’s heartbeat radius by <b>16 meters</b>.</li>","name":"Granma\'s Heart","flavor":"\\"Bring me another slice of the girl.\\" -Grandma","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"The cannibal village deaf boy\'s ear. Deformed due to several hits to the head. The trapped life essence within unlocks tremendous potential in The Hag\'s power.<br><li>Survivors who trip a Phantasm Trap are deafened for <b>6 seconds</b>.</li>","name":"Disfigured Ear","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"A child\'s shoe, long lost in the bog\'s waters. The trapped life essence within unlocks tremendous potential in The Hag\'s power.<br><li>Survivors within a Phantasm Trap\'s trigger range will suffer from the <b><i>Hindered</i></b> status effect.</li><li>Increases the Hag\'s movement speed <b>slightly</b>.</li><li>Removes The Hag\'s ability to Teleport to traps.</li>","name":"Waterlogged Shoe","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"A small piece of cotton torn from the dress worn by Lisa Sherwood on the day she disappeared. The trapped life essence within unlocks tremendous potential in The Hag\'s power.<br><li>The Hag can Teleport to any Phantasm Trap in the level.</li><li>Phantasm Trap Teleport has a cooldown of <b>15 seconds</b>.</li>","name":"Mint Rag","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"A moldy electrode which nevertheless conducts a weak electrical current.<br><li><b>Slightly increases</b> range of <b>Shock Therapy</b>.</li>","name":"Moldy Electrode","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"A white knight chess piece made of maple. This gift from an old man brings back distant memories and imbues The Doctor with devastating focus.<br><li>Reveals the area of effect of your <b>Shock Therapy</b> <i>special attack</i>.</li>","name":"Maple Knight","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"A conventional ECT procedure, part of a patient\'s daily routine at the Léry\'s Memorial Institute. Can cause a state of mild confusion in the patient.<br><li><b>Slightly Decreases</b> the cooldown of <b>Static Blast</b>.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Order</i>:<li>Broken pallets may appear to be replaced with <i>illusionary pallets</i> that persist until approached.</li><li>A new <i>illusionary pallet</i> is generated at the location of a random broken pallet every <b>20 seconds</b>.</li><li><b>The Doctor</b> sees the auras of <i>illusionary pallets</i>.</li>","name":"\\"Order\\" - Class I","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"An ECT procedure using a deep wavelength that soothes various mental illness. With Carter\'s Spark as its source, this procedure can cause mild anxiety in the patient.<br><li><b>Slightly Increases</b> your Terror Radius while <b>Static Blast</b> is ready.</li><li><b>Slightly Decreases</b> your Terror Radius while <b>Static Blast</b> is on cooldown.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Calm</i>:<li><b>Madness II</b>: <b>Intermittently</b> causes Survivors to hear a distant <i>illusionary Terror Radius</i>.</li><li><b>Madness III</b>: <b>Constantly</b> causes Survivors to hear a distant <i>illusionary Terror Radius</i>.</li>","name":"\\"Calm\\" - Class I","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"A compact cassette from Project Awakening containing mostly white noise. Opens The Doctor\'s mind to alternate treatment methods.<br><br><li><b>Shock Therapy</b> <i>special ability</i> changes from a cone to a ring, appearing <b>8 meters</b> in front of <b>The Doctor</b>, with an outer radius of <b>4.2 meters</b> and an inner radius of <b>3 meters</b>.</li>","name":"Scrapped Tape","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"A like-new electrode, standard equipment to conduct electroconvulsive treatments.<br><li><b>Moderately increases</b> range of <b>Shock Therapy</b>.</li>","name":"Polished Electrode","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"A compact cassette from Project Awakening containing an un-edited interview of a victim. Opens The Doctor\'s mind to alternate treatment methods.<br><li><b>Shock Therapy</b> <i>special ability</i> changes from a cone to a beam with a <b>24 meter</b> range and a <b>2 meter</b> width.</li>","name":"Interview Tape","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"An experimental ECT procedure developed within The Fog. Uses a wavelength that links the patient\'s and Doctor\'s minds. This procedure is known to cause mild cases of hallucinations in the patient.<br><li>Reveals Survivors\' auras for <b>1 second</b> when their <b>Madness</b> level increases.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Restraint</i>:</li><li><b>Moderately Increases</b> <i>illusionary Doctor</i> duration.</li><li><b>The Doctor</b> sees the auras of <i>illusionary Doctors</i>.</li>","name":"\\"Restraint\\" - Class II","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"A high stimulus ECT procedure, part of a patient daily routine at the Léry\'s Memorial Institute. Can cause a state of moderate confusion in the patient.<br><li><b>Moderately Decreases</b> the cooldown of <b>Static Blast</b>.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Order</i>:<li>Broken pallets may appear to be replaced with <i>illusionary pallets</i> that persist until approached.</li><li>A new <i>illusionary pallet</i> is generated at the location of a random broken pallet every <b>20 seconds</b>.</li><li><b>The Doctor</b> sees the auras of <i>illusionary pallets</i>.</li><span class=\\"FlavorText\\">\\"Side effects are very rare.\\" -Léry\'s Memorial Institute</span>","name":"\\"Order\\" - Class II","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"Project Awakening ECT procedure for disciplinary action which uses a fixed dose at high voltage. Can cause a state of moderate paranoia in the patient.<br><li><b>Slightly Decreases</b> the detonation delay of <b>Shock Therapy</b>.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Discipline</i>:<li><b>Madness II</b>: While in a chase, Survivors perceive an <i>illusionary Red Stain</i> and <i>Terror Radius</i> as though <b>The Doctor</b> were directly behind them. This effect persists for <b>6 seconds</b> after the chase ends.</li><li><b>Madness III</b>: <i>illusionary Red Stain</i> and <i>Terror Radius</i> are constantly active.</li><li><b>The Doctor</b> also sees the <i>illusionary Red Stain</i>.</li><span class=\\"FlavorText\\">\\"We re-educate our patients with the greatest care.\\" -Léry\'s Memorial Institute</span>","name":"\\"Discipline\\" - Class II","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"A risky ECT procedure using a deep wavelength that soothes various mental illness. With Carter\'s Spark as its source, this procedure can cause moderate anxiety in the patient.<br><li><b>Moderately Increases</b> your Terror Radius while <b>Static Blast</b> is ready.</li><li><b>Moderately Decreases</b> your Terror Radius while <b>Static Blast</b> is on cooldown.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Calm</i>:<li><b>Madness II</b>: <b>Intermittently</b> causes Survivors to hear a distant <i>illusionary Terror Radius</i>.</li><li><b>Madness III</b>: <b>Constantly</b> causes Survivors to hear a distant <i>illusionary Terror Radius</i>.</li><span class=\\"FlavorText\\">\\"Electroconvulsive therapy is one of the safest medical procedures.\\" -Léry\'s Memorial Institute</span>","name":"\\"Calm\\" - Class II","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"An experimental electrode that can withstand very-high charges for a longer period of time.<br><li><b>Considerably increases</b> range of <b>Shock Therapy</b>.</li>","name":"High Stimulus Electrode","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"An experimental ECT procedure developed within The Fog. Uses a high stimulus wavelength to link the patient\'s and Doctor\'s minds. This procedure is known to cause serious cases of hallucinations in the patient.<br><li>Reveals Survivors\' auras for <b>2 seconds</b> when their <b>Madness</b> level increases.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Restraint</i>:<li><b>Moderately Increases</b> <i>illusionary Doctor</i> duration.</li><li><b>The Doctor</b> sees the auras of <i>illusionary</i> Doctors.</li>","name":"\\"Restraint\\" - Class III","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"Project Awakening ECT procedure for disciplinary action which uses a fixed dose at very high voltage. Can cause a state of serious paranoia in the patient.<br><li><b>Moderately Decreases</b> the detonation delay of <b>Shock Therapy</b>.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Discipline</i>:<li><b>Madness II</b>: While in a chase, Survivors perceive an <i>illusionary Red Stain</i> and <i>Terror Radius</i> as though <b>The Doctor</b> were directly behind them. This effect persists for <b>6 seconds</b> after the chase ends.</li><li><b>Madness III</b>: <i>illusionary Red Stain</i> and <i>Terror Radius</i> are constantly active.</li><li><b>The Doctor</b> also sees the <i>illusionary Red Stain</i>.</li><span class=\\"FlavorText\\">\\"Respect of our patients is at the core of our principles.\\" -Léry\'s Memorial Institute</span>","name":"\\"Discipline\\" - Class III","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"An experimental ECT procedure developed within The Fog, crudely annotated. Uses an unbearable stimulus wavelength to link the patient\'s and Doctor\'s minds. This procedure is known to cause severe cases of hallucinations in the patient.<br><li>Reveals Survivors\' auras for <b>3 seconds</b> when their <b>Madness</b> level increases.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Restraint</i>:<br><li><b>Moderately Increases</b> <i>illusionary Doctor duration</i>.</li><li><b>The Doctor</b> sees the auras of <i>illusionary Doctors</i>.</li><span class=\\"FlavorText\\">\\"I CAN SEE THEIR <u>DISGUSTING</u> ILLNESSES.\\" -Unsigned Notes</span>","name":"\\"Restraint\\" - Carter\'s Notes","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"An experimental version of the ECT procedure, annotated by Doctor Herman Carter himself. The long, constant stimulus leaves the patient in a state of severe confusion.<br><li><b>Considerably Decreases</b> the cooldown of <b>Static Blast</b>.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Order</i>:<li>Broken pallets may appear to be replaced with <i>illusionary pallets</i> that persist until approached.</li><li>A new <i>illusionary pallet</i> is generated at the location of a random broken pallet every <b>20 seconds</b>.</li><li><b>The Doctor</b> sees the auras of <i>illusionary pallets</i>.</li><span class=\\"FlavorText\\">\\"The stimulus must be kept active at a <u>convulsive</u> level.\\" -H. Carter</span>","name":"\\"Order\\" - Carter\'s Notes","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"Project Awakening ECT procedure for disciplinary action, annotated by Doctor Herman Carter himself. The intolerably high voltage leaves the patient in an severe state of paranoia.<br><li><b>Considerably Decreases</b> the detonation delay of <b>Shock Therapy</b>.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Discipline</i>:<li><b>Madness II</b>: While in a chase, Survivors perceive an <i>illusionary Red Stain</i> and <i>Terror Radius</i> as though <b>The Doctor</b> were directly behind them. This effect persists for <b>6 seconds</b> after the chase ends.</li><li><b>Madness III</b>: <i>illusionary Red Stain</i> and <i>Terror Radius</i> are constantly active.</li><li><b>The Doctor</b> also sees the <i>illusionary Red Stain</i>.</li><span class=\\"FlavorText\\">\\"To avoid relapse from our most tenacious subjects, use maximum levels when proceeding with disciplinary actions.\\" -H. Carter</span>","name":"\\"Discipline\\" - Carter\'s Notes","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"An experimental version of the ECT procedure annotated by Doctor Herman Carter himself. Uses a deep wavelength that soothes various mental illness. With Carter\'s Spark as its source, this procedure causes uncontrollable fear and anxiety in the patient.<br><li><b>Considerably Increases</b> your Terror Radius while <b>Static Blast</b> is ready.</li><li><b>Considerably Decreases</b> your Terror Radius while <b>Static Blast</b> is on cooldown.</li><br>Survivors with <b>Madness</b> status effect suffer from the <i>Affliction of Calm</i>:<li><b>Madness II</b>: <b>Intermittently</b> causes Survivors to hear a distant <i>illusionary Terror Radius</i>.</li><li><b>Madness III</b>: <b>Constantly</b> causes Survivors to hear a distant <i>illusionary Terror Radius</i>.</li><span class=\\"FlavorText\\">\\"Higher quality seizures trigger catatonia. At least it gives me <u>peace</u> for the time it lasts.\\" -H. Carter</span>","name":"\\"Calm\\" - Carter\'s Notes","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"A glass-like king chess piece molded from The Fog Itself. The Entity\'s trace reverberating within can break the most powerful minds.<br><br>Survivors with <b>Madness</b> status effect suffer from the following <i>Afflictions: Calm, Discipline, Order,</i> and <i>Restraint</i>.<li><b>Intermittently</b> causes Survivors to hear a distant <i>illusionary Terror Radius</i>.</li><li>While in a chase, Survivors perceive an <i>illusionary Red Stain</i> and <i>Terror Radiu</i>s as though <b>The Doctor</b> were directly behind them. This effect persists for <b>6 seconds</b> after the chase ends in <b>Madness II</b> and is constantly active in <b>Madness III</b>.</li><li>Broken pallets may appear to be replaced with <i>illusionary pallets</i> that persist until approached. A new <i>illusionary pallets</i> is generated at the location of a random broken pallet every <b>20 seconds</b>.</li><li><b>Moderately Increases</b> <i>illusionary Doctor</i> duration.</li><li><b>The Doctor</b> sees <i>illusionary Red Stains</i> as well as the auras of <i>illusionary Doctors and illusionary pallets</i>.</li>","name":"Iridescent King","flavor":"\\"Gazing in the iridescent glass is plunging oneself into madness\\" -Unsigned Notes","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"A glass-like queen chess piece molded from The Fog Itself. It can\'t be touched without receiving a considerable jolt of electricity.<br><li>All Survivors struck by the <b>Shock Therapy</b> or <b>Static Blast</b> <i>special abilities</i> acquire a lingering <b>Static Charge</b>. The <b>Static Charge</b> remains with The Survivor(s) until <i>discharged</i>.</li><li>Multiple Survivors struck by the same <b>Shock Therapy</b> or <b>Static Blast</b> <i>special ability</i> that are within <b>4 meters</b> of each other do not acquire a <b>Static Charge</b>.</li><li>Any time a Survivor is within <b>4 meters</b> of another Survivor carrying a <b>Static Charge</b>, The Survivor receives a shock with identical effects as the <b>Shock Therapy</b> <i>special ability</i> and the <b>Static Charge</b> is <i>discharged</i> immediately.</li>","name":"Iridescent Queen","flavor":"\\"Once we have established an effective method of treatment, we can focus on its efficient means of delivery.\\" -H. Carter","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"This stone is too coarse to do any good. A blade damaged by it inflicts awful open wounds.<br><li>The grunts of pain from hit targets are increased by <b>50%</b> until they are fully healed.</li>","name":"Coarse Stone","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"A simple scrap of material to tend to blisters and wipe the puss away.<br><li><b>+10%</b> Hatchet flight speed.</li>","name":"Yellowed Cloth","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"First-aid bandages securely rolled and attached to the Hatchets\' haft.<br><li><b>Slightly decreases</b> cooldown time between Hatchet Throws.</li>","name":"Bandaged Haft","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"A toxin applied to the Hatchets\' blade. The Amanita mushrooms\' toxin numbs the mind.<br><li>Hit target suffers from the <b><i>Blindness</i></b> status effect for <b>60 seconds</b>.</li><li>Does not stack.</li>","name":"Amanita Toxin","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"An oddly weighted hatchet head, crafted to deliver a hard blow to its target. It requires a wielder with a strong arm.<br><li>Hit target suffers from the <b>Incapacitated</b> status effect for <b>10 seconds</b>.</li>","name":"Weighted Head","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"A copper pin defaced beyond recognition yet polished to a high sheen. Pillaged from a particularly difficult prey.<br><li><b>Slightly increases</b> your movement speed while winding up your throw action.</li><li>Does not stack.</li>","name":"Shiny Pin","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"A polished haft which allows for a quick and sly manipulation of the deadly tool.<br><li><b>Moderately decreases</b> cooldown time between Hatchet Throws.</li>","name":"Oak Haft","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"A circular decorative braid made from manna grass. This memory of a lost little one fills the Huntress with rage and focus.<br><li><b>Moderately decreases</b> Hatchet wind up time.</li>","name":"Manna Grass Braid","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"This leather strip tied into a loop can be attached to a belt to allow easy transportation of tools.<br><li>Start with <b>1 extra</b> Hatchet.</li><li>Increases maximum carried Hatchet amount by <b>1</b>.</li>","name":"Leather Loop","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"Dried petals that relieve symptoms of fatigue and overexertion when brewed in a tea.<br><li><b>+20%</b> Hatchet flight speed.</li>","name":"Rose Root","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"Cured leather gloves that protect the hands and give a sure grip.<br><li><b>Moderately decreases</b> Hatchets\' reload time at a locker.</li>","name":"Deerskin Gloves","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"A toxic concoction applied to the Hatchets\' blade. The murky concoction is mainly composed of Berus snake venom which gives it fatiguing capabilities.<br><li>Hit target suffers from the <b>Exhausted</b> status effect for <b>5 seconds</b>.</li>","name":"Venomous Concoction","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"These Hatchets\' heads are covered with crusty and volatile rust spots that makes injuries particularly difficult to heal.<br><li>Hit target suffers from the <b><i>Mangled</i></b> status effect.</li>","name":"Rusty Head","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"A clean and colorful kerchief adorned with a flower pattern. This memory of a lost little one fills the Huntress with rage and focus.<br><li><b>Considerably decreases</b> Hatchet wind up time.</li>","name":"Flower Babushka","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"A sturdy utility belt pillaged from a soldier. Its multiple leather loops and holsters are useful to transport tools.<br><li>Start with <b>2 extra</b> Hatchets.</li><li>Increases maximum carried Hatchet amount by <b>2</b>.</li>","name":"Infantry Belt","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"An otherworldly concoction that faintly glows a foreboding light.<br><li>Hit victims\' auras are shown to you for <b>5 seconds</b>.</li>","name":"Glowing Concoction","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"These Hatchets\' heads are stained with a foul substance that afflict anyone it touches with debilities.<br><li>Hit target suffers from the <b><i>Mangled</i></b> and <b><i>Hemorrhage</i></b> status effects until fully healed.</li><li>Does not stack.</li>","name":"Begrimed Head","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"Roughly carved, this fox statuette is no more than a few inches. A reminder that stealth and cunning is as effective as raw power.<br><li>Grants the <i><b>Undetectable</b></i> status effect for <b>15 seconds</b> after reloading.</li>","name":"Wooden Fox","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"A glass-like Hatchet head molded from The Fog Itself. The blade is warm and reverberating with The Entity\'s power.<br><li>Successful Hatchet hits immediately put healthy Survivors into the dying state.</li><li>Sets maximum number of carried Hatchets to <b>1</b>.</li>","name":"Iridescent Head","flavor":"\\"The iridescent glass cuts through flesh and soul.\\"","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"A wrap taken from a dead soldier, it provides protection and support to the ankle and lower leg.<br><li>The Huntress moves <b>4.6 m/s</b> when she has no Hatchets.</li>","name":"Soldier\'s Puttee","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"A rancid oil used as a poor quality lubricant.<br><br><li><b>Slightly decreases</b> the Chainsaw\'s cooldown when successfully hitting a Survivor.</li>","name":"Vegetable Oil","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"A clean spark plug fitted for a Chainsaw.<br><br><li><b>Slightly increases</b> the rate at which charges replenish.</li>","name":"Spark Plug","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"A file whose purpose is to hone Chainsaw chains.<br><li><b>Slightly reduces</b> the Tantrum duration.</li>","name":"Chainsaw File","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"A mechanical device that limits the amount of fuel small engines can intake at one time, forcing a constant and safe speed.<br><br><li>Chainsaw does not automatically trigger dying state.</li><li>Get <b>100%</b> more Bloodpoints for Chainsaw Hit score events.</li>","name":"Speed Limiter","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Pumps more gas in the ignition system to ensure a quick and powerful start.<br><br><li><b>Moderately increases</b> the rate at which charges replenish. </li>","name":"Primer Bulb","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"A sturdy iron replacement bar for long chains.<br><br><li><b>Slightly increases</b> the amount of revving available before triggering a Tantrum.</li>","name":"Long Guide Bar","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"Scratches cover the Chainsaw\'s body, caused by a searing blade. Memories of reprimands fill its holder with the fear of failure.<br><br><li><b>Slightly increases</b> Chainsaw movement speed.</li><li><b>Slightly increases</b> charge time.</li>","name":"Knife Scratches","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"A makeshift exhaust system made of black gas pipes.<br><br><li><b>Moderately reduces</b> the Tantrum duration.</li>","name":"Homemade Muffler","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"A big bowl of steaming chili to keep you fresh and strong.<br><br><li><b>Slightly increases</b> dash duration when a token is consumed.</li><li><b>Slightly increases</b> the additional Chainsaw Sweep window.</li><br>","name":"Chili","flavor":"\\"I got some good barbecue here! \\" -Drayton Sawyer","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"A thick yellowish ooze, concocted by the Sawyers. Used for all-purpose lubrication around their house.<br><br><li><b>Moderately increases</b> the amount of revving available before triggering a Tantrum.</li>","name":"The Grease","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"Jagged marks cover the Chainsaw\'s body, punishment from the dark beast that lives in The Fog. Memories of violent reprimands fill its holder with the fear of failure.<br><br><li><b>Moderately increases</b> Chainsaw movement speed.</li><li><b>Slightly increases</b> charge time.</li>","name":"The Beast\'s Marks","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"A chain with unusually hefty cutter teeth that leaves victims crippled even after being healed.<br><li>Survivors hit by the Chainsaw suffer from the <b>Mangled</b> status effect.","name":"Grisly Chain","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"An oil specifically formulated for chainsaws. A special additive prevents oil throw off.<br><br><li>Downing a Survivor with the Chainsaw while no other Survivors are in your Terror Radius will hide the Survivor\'s aura for <b>20 seconds.</b></li>","name":"Shop Lubricant","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"This chain is stained with a foul substance that debilitates anyone it touches.<br><br><li>Chainsaw hits cause Survivors to drop their items.</li>","name":"Begrimed Chains","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"Tool that increases the angle of the depth gauge, making the chain eat more \\"wood\\".<br><li><b>Increases</b> the number of charges.</li><li><b>Slightly increases</b> charge time.</li><li><b>Slightly decreases</b> the Chainsaw Sweep\'s maximum speed.</li>","name":"Depth Gauge Rake","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"A light and durable Chainsaw chassis with a shorter guide bar. Makes the Chainsaw easier to handle.<br><br><li>While revving, see the auras of Survivors within <b>8 meters.</b></li>","name":"Light Chassis","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"This chain is covered with crusty and volatile rust spots that make injuries particularly difficult to heal.<br><br><li>Survivors injured by the Chainsaw suffer from the <b><i>Broken</i></b> status effect for <b>90 seconds</b>.</li><li>Does not stack.</li>","name":"Rusted Chain","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"A big bowl of spicy chili made famous thanks to prime meat.<br><br><li><b>Moderately increases</b> dash duration when a token is consumed.</li><li><b>Moderately increases</b> the additional Chainsaw window.</li><br>","name":"Award-Winning Chili","flavor":"\\"The secret\'s in the meat.\\" -Drayton Sawyer","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"A thin slice of smooth, young flesh. The veins shimmer with luminescent glow, as if life still flows within.<br><br><li>Hitting a Survivor with the Chainsaw replenishes its charges.</li><li>Limits the maximum Tantrum duration to 8 seconds.</li><br>","name":"Iridescent Flesh","flavor":"\\"There are moments when we cannot believe that what is happening is really true. Pinch yourself and you may find out that it is.\\" — Pam Jones","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"A crudely drawn guide to properly adjust and tune a Chainsaw carburetor.<br><li>Automatically consume all charges when triggering a Chainsaw Sweep.</li><li><b>Slightly increases</b> the Chainsaw Sweep\'s duration.</li><li><b>Slightly decreases</b> the Chainsaw Sweep\'s maximum speed.</li>","name":"Carburetor Tuning Guide","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"A small boy\'s orange and yellow striped shirt. Identified with a sewn name tag to \\"Jesse\\".<br>While Survivors are in the <b>Dream World</b>:<li><b>Slightly increases</b> <i>healing</i> and <i>repair</i> regression penalties.</li>","name":"Wool Shirt","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"A white and blue wooden block depicting two wooly lamb grazing and the letter \\"S\\".<li>After a Survivor interacts with a <b>Dream Snare</b> or <b>Dream Pallet</b>, The Survivor suffers from the <b>Blindness</b> status effect for <b>30 seconds</b>.</li>","name":"Sheep Block","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"An unattributed drawing clearly crafted by a young child.<li>Gain an extra <b>200 bonus Bloodpoints</b> towards <b>Deviousness</b> when a Survivor triggers a <b>Dream Snare</b>.</li><li><b>Considerably decreases</b> the <b>Dream Snare</b> speed penalty for Survivors.</li>","name":"Kid\'s Drawing","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"A small claw rake, a must have tool for any accomplished gardener.<br>Replace <b>Dream Snares</b> with <b>Dream Pallets</b>.<li>7 <b>Dream Tokens.</b></li>","name":"Garden Rake","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"A homemade tool to facilitate bush trimming.<li>Replaces <b>Dream Snares</b> with <b>Dream Pallets</b>.</li><li>7 <b>Dream Tokens</b>.</li><li>Survivors have their aura revealed to <i>The Nightmare</i> for <b>4 seconds</b> when they interact with <b>Dream Pallets</b>.</li>","name":"Prototype Claws","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"Sturdy outdoor rope, handy to tie up anything.<br>While Survivors are in the <b>Dream World</b>:<li>The sounds of their generator repairs can be heard from <b>8 meters further away</b>.</li>","name":"Outdoor Rope","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"A crude and bold sketch made with fusain, signed Nancy H.<li><b>Slightly increases</b> <b>Dream Projection</b> power recovery speed for each Survivor in the <b>Dream World</b>.</li>","name":"Nancy\'s Sketch","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"A little girl\'s green dress with a silky white ribbon.<br>While Survivors are in the <b>Dream World</b>:<li><b>Slightly increases</b> <i>healing</i> and <i>repair</i> regression penalties.</li><li>A Survivor\'s aura will be revealed to <i>The Nightmare</i> for <b>3 seconds</b> whenever they fail a <i>healing</i> or <i>repair</i> Skill Check.</li>","name":"Green Dress","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"A white and purple wooden block depicting a sleeping cat and the letter \\"C\\".<li>After a Survivor interacts with a <b>Dream Snare</b> or <b>Dream Pallet</b>, The Survivor suffers from the <b>Hemorrhage</b> status effect for <b>60 seconds</b>.</li>","name":"Cat Block","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"A white and red wooden block depicting a prancing unicorn and the letter \\"U\\".<li>After a Survivor interacts with a <b>Dream Snare</b> or <b>Dream Pallet</b>, The Survivor suffers from the <b>Blindness</b> status effect for <b>60 seconds</b>.</li>","name":"Unicorn Block","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"Rusty but sturdy chains used to securely attach a swing seat.<br>While Survivors are in the <b>Dream World</b>:<li>The sounds of their footsteps are <b>50% louder</b>.</li>","name":"Swing Chains","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"A painting of a character, made by Nancy Holbrook at Badham and kept as a treasured memory.<li><b>Moderately increases</b> <b>Dream Projection</b> power recovery speed for each Survivor in the <b>Dream World</b>.</li>","name":"Nancy\'s Masterpiece","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"A long double dutch jump rope, stained with many years of use.<br>While Survivors are in the <b>Dream World</b>:<li>The sounds of their grunts of pain are <b>50% louder</b>.</li>","name":"Jump Rope","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"A little girl\'s pale blue dress with white lace which front is ruined by large cuts.<br>While Survivors are in the <b>Dream World</b>:<li><b>Slightly increases</b> <i>healing</i> and <i>repair</i> regression penalties.</li><li>A Survivor\'s aura will be revealed to <i>The Nightmare</i> for <b>4 seconds</b> whenever they fail a <i>healing</i> or <i>repair</i> Skill Check.</li>","name":"Blue Dress","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"An empty pill bottle which once contained a medicine called Zoneral.<li>Survivors will see <i>The Nightmare</i> intermittently at a reduced distance of <b>12 meters</b> to <b>24 meters</b>.</li><li><i>The Nightmare</i> is invisible to Survivors beyond <b>24 meters</b>.</li><li><i>The Nightmare</i> is invisible to awake Survivors while carrying a Survivor.</li>","name":"Pill Bottle","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"A tin of a highly volatile and inflammable material.<li>Replaces <b>Dream Snares</b> with <b>Dream Pallets</b>.</li><li>7 <b>Dream Tokens</b>.</li><li>Survivors have their aura revealed to <i>The Nightmare</i> for <b>6 seconds</b> when they interact with <b>Dream Pallets</b>.</li>","name":"Paint Thinner","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"A large photograph taken at Badham preschool showing the cheerful class of 94-95.<li>Channeling <b>Dream Projection</b> can no longer be cancelled.</li><li>All generators will spew blood while <b>The Nightmare</b> channels <b>Dream Projection</b>.</li><li><i>The Nightmare\'s</i> projection will not appear when using <b>Dream Projection.</b></li>","name":"Class Photo","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"A deeply scratched and burnt wooden block which only recognizable feature is the letter \\"Z\\".<li>After a Survivor interacts with a <b>Dream Snare</b> or <b>Dream Pallet</b>, The Survivor suffers from the <b>Hemorrhage</b> status effect for <b>60 seconds</b>.</li><li>If The Survivor is healthy, they will bleed for the duration of the <b>Hemorrhage</b> status effect.</li>","name":"\\"Z\\" Block","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"A large paint brush, wet with crimson paint.<li>All Survivors start the trial in the <b>Dream World</b>.</li><li>Failed Skill Checks do not wake up Survivors in the <b>Dream World</b>.</li>","name":"Red Paint Brush","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"A black cardboard box filled with photographs.<br>While Survivors are in the <b>Dream World</b>:<li>Recently-opened exit gates are blocked for <b>15 seconds</b>.</li>","name":"Black Box","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"A modification to the Jigsaw Box: the lubricated parts make the search a more a delicate exercise.<br><li><b>Slightly increases</b> Skill Checks trigger odds when interacting with a Jigsaw Box.</li>","name":"Workshop Grease","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"Symbol of a broken way of life. Reminiscing about her past-self hardens her determination.<br><li><b>Slightly decreases</b> the Ambush Attack miss cooldown.</li>","name":"Shattered Syringe","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"The medical file of a cancerous man. Fills the reader with dread and recklessness.<br><li><b>Slightly decreases</b> the Ambush Attack Charging Time.</li>","name":"John\'s Medical File","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"Leather straps that hold fabric in place for nimbler movement.<br><li><b>Slightly decreases</b> time it takes to Crouch.</li>","name":"Combat Straps","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"A recording of Jigsaw, explaining the game\'s rules to Amanda. Reminiscing about her past-self hardens her determination.<br><li><b>Slightly decreases</b> the Ambush attack charging time.</li><li><b>Slightly decreases</b> the Ambush attack miss cooldown.</li>","name":"Video Tape","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"A modification to the Reverse Bear Trap: Sharp blades attached to the trap\'s interior lacerate the victim with every movement.<br><li>Survivors caught in a Reverse Bear Trap suffer from the <b><i>Hemorrhage</i></b> status effect.</li>","name":"Utility Blades","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"A modification to the Jigsaw Box: The addition of razor sharp wires makes it extra difficult and potentially painful to search.<br><li><b>Moderately Increases</b> Skill Check trigger odds when interacting with a Jigsaw Box.</li>","name":"Razor Wires","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"A latched wooden box with a satin lining, offered as part of a last will.<br><li><b>Increases</b> available Reverse Bear Trap by <b>1</b>.<br>","name":"Last Will","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"A modification to the Reverse Bear Trap: The heavy cloth face mask, laced with a sedative, partially suffocates the target making it hard to concentrate.<br><li>Survivors caught in a Reverse Bear Trap suffer from the <i><b>Blindness</b></i> status effect.</li><li>Does not affect the Jigsaw Box highlight.</li>","name":"Face Mask","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"A modification to the Reverse Bear Trap: A poison that is not fatal but weakens the body and makes it nearly impossible to recover fully from any effort.<br><li>Survivors caught in a Reverse Bear Trap suffer from the <i><b>Exhausted</b></i> status effect.</li>","name":"Slow-Release Toxin","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"A modification to the Reverse Bear Trap: Mouth spikes, covered with crusty and volatile rust spots that make injuries particularly difficult to heal.<br><li>Injured Survivors caught in a Reverse Bear Trap suffer from the <i><b>Mangled</b></i> status effect.</li>","name":"Rusty Attachments","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"A disturbing, yet brilliant, trap design sketched in details on a sheet of paper.<br><li><b>Increases</b> available Jigsaw Boxes by <b>1</b>.</li>","name":"Jigsaw\'s Sketch","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"A modification to the Jigsaw Box: The addition of interlocking razor blades makes it impossible to move suddenly in the Jigsaw Box without slitting one\'s wrists.<br><li><b>Tremendously Increases</b> the penalty of failed Skill Checks on Jigsaw Boxes.</li>","name":"Interlocking Razor","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"A few mechanical parts that allow the creation of challenging Jigsaw Boxes and easier to install Reverse Bear Traps.<br><li><b>Slightly increases</b> time it takes Survivor to Search a Jigsaw Box.</li><li><b>Slightly decreases</b> time it takes to put the Reverse Bear Trap.</li>","name":"Bag of Gears","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"A timer that has been fiddled with. A spring in the mechanism forces the gears to turn faster.<br><li><b>Moderately reduces</b> the Reverse Bear Trap death timer.</li>","name":"Tampered Timer","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"A disturbing, yet brilliant, trap design layed down on paper and annotated by Jigsaw.<br><li><b>Increases</b> available Jigsaw Boxes by <b>1</b>.</li><li><b>Moderately increases</b> the Reverse Bear Trap death timer.</li>","name":"Jigsaw\'s Annotated Plan","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"This collection of mechanical parts allows the creation of extra-challenging Jigsaw Boxes and Reverse Bear Traps that are easier to install.<br><li><b>Considerably increases</b> time it takes Survivor to Search a Jigsaw Box.</li><li><b>Moderately decrease</b> time it takes to put the Reverse Bear Trap on a Survivor.</li>","name":"Crate of Gears","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"A black metal box containing a knife and various medical supplies, such as bandages and compresses. Deep cuts reduce stress and awaken the senses.<br><li><b>Disables</b> The Pig\'s ability to see Jigsaw Boxes\' auras.</li><li><b>Gain a notification</b> when a Survivor removes a Reverse Bear Trap.</li><li>Auras of Survivors removing a Reverse Bear Trap are revealed to you for <b>6 seconds</b>.</li>","name":"Amanda\'s Secret","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"Not all games need to have the same rules.<br><li><b>Disables</b> the Survivors\' ability to see Jigsaw Boxes highlighted until their Trap is activated.</li>","name":"Rule Set No.2","flavor":"\\"Listen, there are rules\\" -Jigsaw","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"A blackmailing letter for the attention of Amanda. Fills the reader with rage and focus.<br><li>While Crouched, see outlines of Survivors within a 12-meter range.</li><li><b>Reduces</b> available Reverse Bear Traps by <b>3</b>.</li><li><b>Reduces</b> available Jigsaw Boxes by <b>2</b>.</li>","name":"Amanda\'s Letter","flavor":"\\"Amanda, you were with Cecil the night Jill lost Gideon. You killed their child. You know it and I know it.\\" -Amanda\'s Letter","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"A moldy inner sole which gives much comfort to tired feet.<br><li><b>Moderately</b> increase movement speed while reloading bottles.</li>","name":"Smelly Inner Soles","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"A warm orange feather, soft to the touch.<br><li><b>Slightly</b> decreases cooldown time between bottle throws.</li>","name":"Robin Feather","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"Part of the standard Clown apparel; the cut fingers allow for dexterous manipulations.\\n<li>Changes thrown bottle arc.</li>\\n","name":"Fingerless Parade Gloves","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"Be the life of the party!<br><br><li><b>Party Bottles</b> emit confetti when they break, in addition to their usual gas effect.</li><li>Hitting a Survivor directly with a <b>Party Bottle</b> interrupts actions as usual, and awards <b>100 bloodpoints</b>.</li>","name":"Party Bottle","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"A sturdy cork, fitting The Afterpiece Tonic bottles perfectly.<br><li><b>Moderately</b> decreases reload Time.</li>","name":"Thick Cork Stopper","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"An empty bottle, sticky with dried sugar and blood.<br><li>Start with <b>1 extra</b> bottle. </li><li>Increases maximum carried bottles amount by <b>1</b>. </li>","name":"Sticky Soda Bottle","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"A black feather with an emerald sheen, very soft to the touch.<br><li><b>Moderately</b> decreases cooldown time between The bottle throws. </li>","name":"Starling Feather","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"A volatile chemical compound that irritates the respiratory tract, but increases absorption of The Afterpiece Antidote.<br><li><b>Moderately</b> increases the Invigorated effect duration.</li>","name":"Solvent Jug","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"A thin and clear combustible liquid which numbs the mind when inhaled.<br><li>Intoxicated target suffers from the <b>Blindness</b> status effect for <b>30 seconds</b>.</li>","name":"Kerosene Can","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"An all time classic. You won\'t see things quite the same again.<br><li>Makes The Afterpiece Tonic clouds yellow.</li><li>Makes The Afterpiece Antidote clouds purple.</li>","name":"VHS Porn","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"An odorless syrupy liquid which is highly corrosive.<br><li>Intoxicated target suffers from the <b>Mangled</b> status effect.</li>","name":"Sulfuric Acid Vial","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"A potent chemical which causes irritation, burn and lungs damage.<br><li>Intoxicated target suffers <b>Moderately</b> from an extra <b>Hindered</b> Penalty.</li>","name":"Flask of Bleach","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"A pungent chemical compound consisting of ammonia. One whiff is enough to jolt even the most sluggish of minds.<br><li><b>Moderately</b> expands The Afterpiece Antidote Gas area.</li>","name":"Spirit of Hartshorn","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"A sweet-smelling organic compound with strong anesthetic capabilities.<br><li><b>Moderately</b> expands The Afterpiece Tonic Gas area.</li>","name":"Bottle of Chloroform","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"Some for the face and some for the Antidote. The unknown compound intensifies the Antidote\'s effects.<br><li><b>Considerably</b> increases Invigorated Effect duration.</li>","name":"Garish Makeup Kit","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"Along with a hell of a headache, the only remnant of a good time, done cheap.<br><li>Start with <b>2 extra</b> bottles. </li><li>Increases maximum carried bottles amount by <b>2</b>. </li>","name":"Cheap Gin Bottle","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"A highly volatile organic compound, toxic at this concentration.<br><li><b>Considerably</b> increases Intoxicated Effect duration.</li>","name":"Ether 15 vol%","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"A grim and incomplete collection of fingers. Fills The Clown with longing and focuses his chemical crafting abilities.<br><li>When a Survivor or Killer becomes Invigorated, they see all other Survivor and Killer auras within a 16m radius.</li>","name":"Cigar Box","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"The prized middle finger of a large tattooed man. Has a faint taste of machinery oil.<br><li>Auras of Intoxicated or Invigorated Survivors are revealed to you for <b>6 seconds</b>.</li>","name":"Tattoo\'s Middle Finger","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"The prized pinky of a redhead. Faintly fragrant. Tastes of potpourri and varnish.<br><li>Survivors hit directly by a bottle of The Afterpiece Tonic suffer from the <b>Exposed</b> status effect for the duration of the intoxication.</li>","name":"Redhead\'s Pinky Finger","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"A comfortable pair of flat sandals that can easily be slipped on and off.<li><b>Slightly increases</b> Yamaoka’s Haunting movement speed.</li>","name":"Zōri","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"A talisman that makes one happy and enthusiastic.<li><b>Slightly increases</b> Yamaoka’s Haunting duration.</li>","name":"Shiawase Amulet","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"One of the one thousand orizuru for your wish to come true.<li><b>Slightly increases</b> Yamaoka’s Haunting power recovery speed.</li>","name":"Origami Crane","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"A narrow tooth bamboo comb to gently untangle disheveled hair.<li><b>Slightly increases</b> Yamaoka’s Haunting activation charge speed.</li>","name":"Gifted Bamboo Comb","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"A silken bow to tame wild hair.<li><b>Moderately increases</b> Yamaoka’s Haunting activation charge speed.</li>","name":"White Hair Ribbon","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"A wristwatch with a shattered glass. The name \\"Rin\\" is scribbled on the wristband.<li><b>Moderately Increases</b> Yamaoka’s Haunting power recovery speed.</li>","name":"Rin\'s Broken Watch","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"A muddy sport cap with a High School logo. Identified with a sewn name tag to \\"Rin\\".<li><b>Moderately increases</b> Yamaoka’s Haunting movement speed.</li>","name":"Muddy Sports Day Cap","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"A talisman to get luck on your side.<li><b>Moderately increases</b> Yamaoka’s Haunting duration.</li>","name":"Kaiun Talisman","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"Dark blue-green foliage bonsai tree. Once the symbol of Yamaoka family tradition.<li><b>Slightly increases</b> the frequency of passive phasing.</li>","name":"Juniper Bonsai","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"A rusty transverse flute with a haunting sound.<li><b>Considerably increases</b> Yamaoka’s Haunting power recovery speed.</li>","name":"Rusty Flute","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"Katsumori Talisman","name":"Katsumori Talisman","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"The handguard of an ancestral blade. Crafted for the Yamaoka family.<li><b>Slightly increases</b> Yamaoka’s Haunting reappearance duration.</li><li><b>Slightly increases</b> Yamaoka’s Haunting reappearance speed.</li>","name":"Katana Tsuba","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"A handy pair of indoor shoes.<li><b>Considerably increases</b> Yamaoka’s Haunting movement speed.</li>","name":"Dirty Uwabaki","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"A hair brooch crusted with dried blood.<li><b>Considerably increases</b> Yamaoka’s Haunting activation charge speed.</li>","name":"Bloody Hair Brooch","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"A powerful talisman to protect your endeavors from being hindered by suspicious circumstances.<li><b>Tremendously increases</b> Yamaoka’s Haunting duration.</li><li><b>Slightly decreases</b> Yamaoka’s Haunting movement speed.</li>","name":"Yakuyoke Amulet","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"The scabbard of an ancestral blade. Once crafted for the Yamaoka family.<li><b>Moderately increases</b> Yamaoka’s Haunting reappearance duration.</li><li><b>Moderately increases</b> Yamaoka’s Haunting reappearance speed.</li>","name":"Wakizashi Saya","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"A powerful bracelet that reads a sacred mantra.<li>The phasing sound emission is heard by all Survivors outside of the Terror Radius.</li>","name":"Prayer Beads Bracelet","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"A crumbling, dried cherry flower. Once the symbol of mortality.<li><b>Slightly increases</b> passive phasing duration.</li><li><b>Slightly increases</b> the frequency of passive phasing.</li>","name":"Dried Cherry Blossom","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"A silver ring engraved with “for my precious daughter.”<li><b>Tremendously increases</b> Yamaoka’s Haunting movement speed.</li><li>Scratch marks are no longer visible while using Yamaoka’s Haunting.</li>","name":"Mother-Daughter Ring","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"A pair of dad glasses that belonged to an overworked salaryman.<li>Survivor blood trails are visible while using Yamaoka’s Haunting.</li>","name":"Father\'s Glasses","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"A friendly-looking bright yellow button used as a sarcastic statement.<li>Hitting a Survivor highlighted by Killer Instinct while in Feral Frenzy applies the Blindness status effect for 60 seconds.</li>","name":"Smiley Face Pin","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"A wooden ruler deeply scratched with hash marks.<li><b>Slightly decreases</b> the time required to refill the power gauge.</li>","name":"Scratched Ruler","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"A list of mischievous missions to accomplish; memento of brighter days.<li><b>Slightly increases</b> Feral Frenzy duration.</li>","name":"Mischief List","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"A wide gray and red braided rope bracelet. The inscription \\"F J S J\\" can be seen, crudely written in bold black ink.<li><b>Slightly increases</b> Killer Instinct\'s detection range.</li>","name":"Friendship Bracelet","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"Highly caffeinated tablets to make you extra sharp for exams or other draining activities.<li><b>Moderately increases</b> Killer Instinct\'s detection range.</li>","name":"Never-Sleep Pills","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"A rough sketch of The Legion mural torn from a notebook.<li><b>Moderately increases</b> Feral Frenzy duration.</li>","name":"Mural Sketch","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"A dark and depressing mix tape made mainly from power ballads with gloomy melodies.<li><b>Slightly decreases</b> fatigue after Feral Frenzy ends.</li>","name":"Julie\'s Mix Tape","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"A wooden ruler deeply etched with the names of enemies.<li><b>Moderately decreases</b> the time required to refill the power gauge.</li>","name":"Etched Ruler","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"A once friendly-looking bright yellow button of a defaced smiley. A signature icon of The Legion.<li>Hitting a Survivor highlighted by Killer Instinct while in <i>Feral Frenzy</i> applies the <b><i>Mangled</i></b> status effect.</li>","name":"Defaced Smiley Pin","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"A handmade button with the face of The Legion. To use exclusively on intimidation dares.<li>Hitting a Survivor highlighted by Killer Instinct while in Feral Frenzy applies the Broken status effect for 60 seconds.</li>","name":"The Legion Pin","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"A fast and thrilling mix tape of energizing songs with break-neck beats.<li><b>Tremendously increases Killer Instinct\'s</b> detection range.</li>","name":"Susie\'s Mix Tape","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"A sketch book with imaginative and evocative, if not slightly bizarre, sketches.<li><b>Considerably increases</b> Feral Frenzy duration.</li>","name":"Stolen Sketch Book","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"This blade is stained with unsanitary spots of grime that make injuries particularly difficult to mend.<li><b>Slightly increases</b> the amount of time required for Survivors to complete the Mend action.</li>","name":"Nasty Blade","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"A mix of bangin\' tracks and slammin\' beats for chillaxin\' when life\'s a bitch.<li><b>Moderately decreases</b> fatigue after Feral Frenzy ends.</li>","name":"Joey\'s Mix Tape","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"A printed medical article stolen from Ormond\'s public library vulgarizing a study on lesions and stab wounds.<li><b>Moderately decreases</b> the Deep Wound timer of all Survivors.</li>","name":"Stab Wounds Study","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"Never go on a kill mission without your tunes. A track list of massive distortion and loud percussion that stabs at your eardrums.<li>Allows Feral Frenzy attacks to <b>considerably reduce</b> a Survivor\'s Deep Wound timer.</li>","name":"Frank\'s Mix Tape","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"This blade is stained with foul spots of blood and grime that make injuries particularly difficult to mend.<li><b>Moderately increases</b> the amount of time required for Survivors to complete the Mend action.</li>","name":"Filthy Blade","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"A handful of dirt collected from the janitor\'s final resting place. It is unnaturally cold.<li><b>Considerably decreases</b> fatigue after Feral Frenzy ends.</li>","name":"Cold Dirt","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"A glass-like button molded from The Fog that captures The Legion’s likeness. The surface is warm and reverberating with The Entity\'s power.<br><br>During Feral Frenzy:<br><li>Your Terror Radius affects <b>the entire map.</b></li><li>Any pallets you vault are <b>immediately broken.</b></li><br>This effect lasts until the power gauge is depleted.<br>","name":"Iridescent Button","flavor":"“The youth consumed by the iridescent glass magnifies and widens the reach of The Entity.”","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"Dark beats, violent shreds and unfathomable vocals from another world fill the mind with a vibrating sixth sense.<li>While using Feral Frenzy, the <b>repair progress of generators</b> can be determined by the <b>intensity of their auras.</b></li>","name":"Fuming Mix Tape","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"A fragmented stone tablet with a corrupted incantation originally used to purge illnesses and feelings of general malaise.<li><b>Slightly decreases</b> Pool of Devotion activation time.</li><li><b>Slightly increases</b> movement Speed while holding Corrupt Purge.</li>","name":"Prayer Tablet Fragment","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"Precious resin extracted from Boswellia trees, used during ceremonies for their sweet citrusy fragrance.<li><b>Slightly increases</b> movement speed while charging Vile Purge.</li>","name":"Olibanum Incense","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"A cylindrical seal made from porous stone that displays a ritualistic scene with winged deities.<li><b>Slightly increases</b> infection time on objects.</li>","name":"Limestone Seal","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"A bitterly pungent paste of crushed roots, which were marinated in fish brine for three days and in wine for two. Applied on skin rashes.<li><b>Slightly decreases</b> Vile Purge cooldown.</li>","name":"Healing Salve","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"A soapstone amulet crudely engraved with a winged deity that wards off sickness. Fills the wearer with devotion.<li><b>Slightly increases</b> Duration of Corrupt Purge.</li>","name":"Prophylactic Amulet","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"A frothing, murky liquid that permeates the air with an acute aroma of herbs and alcohol. Applied directly on blisters.\\n<li><b>Moderately decreases</b> Vile Purge cooldown.</li>","name":"Potent Tincture","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"A cylindrical seal forged from a metallic hardstone, engraved with bird-headed beings that stood next to strange machines. Used as a container for sanctified ashes.<li><b>Moderately increases</b> infection time on objects.</li>","name":"Hematite Seal","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"A mustard-water based syrup that induces vomiting when consumed. Used to purge evil from the body.<li><b>Slightly increases</b> Vile Purge effectiveness.</li>","name":"Emetic potion","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"A perfectly ripe fruit to break fast during the purification ceremony. Delicious.<li>Start trial with <b>1</b> additional corrupted Pool of Devotion.</li>","name":"Blessed Apple","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"A beaker of rubbing oil with expectorant quality. Exudes the evergreen scent of laurel and rosemary.<li><b>Moderately increases</b> Vile Purge charge speed.</li>","name":"Rubbing Oil","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"A disgusting syrup of unknown origin. The thick yellow liquid is consumed to induce vomiting. Used to purge evil from the body.<li><b>Moderately increases</b> Vile Purge effectiveness.</li>","name":"Infected Emetic","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"A dark waxy paste, laced with cedar sap that diffuse a sweet and earthy aroma. Applied directly on infected skin.<li><b>Slightly increases</b> movement speed while charging Vile Purge.</li><li><b>Moderately decreases</b> Vile Purge cooldown.</li>","name":"Incensed Ointment","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"An obsidian amulet to ward off sickness during exorcism rituals. Inscribed with a prayer to the god of mayhem and pestilence. Fills the wearer with fierce devotion.<li><b>Moderately increases</b> the duration of Corrupt Purge.</li>","name":"Exorcism Amulet","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"A peeled apple rolled into sanctified ashes. Eating such a fruit warded off the malignantly envious spirits of the deceased.<li>Start trial with <b>1</b> additional corrupted Pool of Devotion.</li><li><b>Slightly increases</b> infection time on objects.</li>","name":"Ashen Apple","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"A stone tablet adorned with gold showing the drawings and writings of a corrupted incantation used originally to worship forgotten deities.<li><b>Moderately decreases</b> Pool of Devotion activation time.</li><li><b>Moderately increases</b> movement Speed while holding Corrupt Purge.</li>","name":"Worship Tablet","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"A foul-smelling and half-congealed potion of unidentifiable ingredients. Consumed to rapidly induce vomiting. Used to purge evil from the body.<li><b>Considerably increases</b> Vile Purge effectiveness.</li>","name":"Vile Emetic","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"The decaying severed toe of Adiris, weaved on a thread and worn as an amulet around the neck. Radiates with vile power.<li><b>Considerably increases</b> the rate Survivors gain infection from interactions.</li>","name":"Severed Toe","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"A bloodstone amulet carved intricately with the effigy of the Babylonian god of mayhem and pestilence. Fills the wearer with boundless devotion.<li><b>Considerably increases</b> duration of Corrupt Purge.</li>","name":"Devotee\'s Amulet","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"A translucent cylindrical seal molded from The Fog Itself with the effigy of The Plague. Its surface is warm and pulsates with The Entity\'s power.<li><b>Moderately decrease</b> movement Speed while holding Corrupt Purge.</li><li><b>Tremendously decreases</b> the duration of Corrupt Purge.</li><li>Vile Purge becomes Corrupt Purge every time a generator is completed.</li>","name":"Iridescent Seal","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"A dark paste made of sharp osseous shavings. The inhaling of its foul fumes sharpens the mind\'s eye.<li>Survivors\' auras are revealed to you for <b>5 seconds</b> when they vomit.</li>","name":"Black Incense","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"Stolen camera from a victim of Olsen’s in Philadelphia, where he worked before. The film inside captured his last night in the city.<br><li><b>Slightly increases</b> the rate at which a Survivor becomes Marked when not leaning from cover.</li>","name":"“Philly”","flavor":"“Gotta love Philly: keeps giving and giving and I don’t wanna forget any of it.” –The Ghost Face","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"A sheet of matches from Walleyes, a small bar in Northern Roseville. A victim’s phone number is scribbled in blue. One of the incriminating pieces of evidence found.<br><li><b>Slightly increases</b> <i>Night Shroud</i> power recovery rate.</li>","name":"Walleyes Matchbook","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"Cutouts of articles covering unsolved murder cases from Utah to Pennsylvania. While Ghost Face only authored some of the headlines, he committed all the murders.<br>Compiling your success makes you proud and boosts your confidence.<br><li><b>Slightly increases</b> movement speed while Stalking.</li>","name":"Headlines Cutouts","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"Dollar store cologne with a pungent scent of rubbing alcohol. Worn by Ghost Face to make his presence known. Reserved for impromptu visits.<br><li><b>Slightly increases</b> the duration of a Survivor staying Marked.</li>","name":"Cheap Cologne","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"Manual focus lens to remain undetected while taking pictures from afar.<br><li><b>Slightly increases</b> the rate at which a Survivor becomes Marked when not leaning from cover.</li><li><b>Slightly increases</b> the duration of a Survivor staying Marked.</li>","name":"Telephoto Lens","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"A spiral notebook filled with stained, handwritten entries. The journal details different equipment used to stalk victims. Going through your past methods triggers thrilling memories.<br><li><b>Moderately increases</b> movement speed while Stalking.</li>","name":"Olsen’s Journal","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"Filled in blunt, blue crabbed writing. All the Roseville murder victims are listed there, along with their phone number and address.<br><li><b>Moderately Increases</b> <i>Night Shroud</i> power recovery rate.</li>","name":"Olsen\'s Address Book","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"The annotated map of Northern Roseville, Florida. Each X represents a victim of The Ghost Face. Mapping out your targets allows you to roam the streets undetected.<br><li><b>Slightly increases</b> the duration that Killer Instinct is visible when The Killer is revealed.</li>","name":"Marked Map","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"Black straps that keep everything in place while on the prowl.<br><li><b>Slightly increases</b> movement speed while Crouched.</li>","name":"Cinch Straps ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"Olsen’s wallet holds thirty dollars in cash, a video club membership card, and a folded picture of Olsen’s first Roseville victim. Carrying incriminating evidence boosts your excitement and resolve.<br><li><b>Considerably increases</b> movement speed while Stalking.</li>","name":"Olsen’s Wallet","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"Quiet and flexible sheath to carry your blade. Movement is easier when things are fastened into place.<br><li><b>Moderately increases</b> movement speed while Crouched.</li>","name":"Leather Knife Sheath","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"An overpowering musky fragrance worn by Ghost Face to announce his presence. Reserved for victims he planned to write about.<br><li><b>Moderately increases</b> the duration of a Survivor staying Marked.</li>","name":"Lasting Perfume","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"Perfect belt clip to scout carry your blade discreetly. No one knows what you’re planning to do tonight.<br><li><b>Moderately increases</b> the rate at which a Survivor becomes Marked when not leaning from cover.</li>","name":"Knife Belt Clip","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"Blue pen with a chewed cap that holds traces of Danny’s DNA. Incriminating evidence that was never found.<br><li><b>Considerably increases</b> <i>Night Shroud</i> power recovery rate.</li>","name":"Chewed Pen","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"A ripped page outlining the weekly routine of Olsen’s first victim in Roseville. Compiling your victim’s habits allows you to anticipate their movements.  \\n<br><li><b>Moderately increases</b> the duration that Killer Instinct is visible when The Killer is revealed.</li><li><b>Moderately decreases</b> the detection range to reveal The Killer while Night Shroud is active.</li><br><span class=\\"FlavorText\\">“I’ve been watching you for a while. I wanted this to be special; the kind of headlines that people don’t forget.” -The Ghost Face</span>","name":"Victim’s Detailed Routine","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"Night vision lens enabling sharp photos even when shrouded in darkness. Ideal for discreet, impromptu visits late at night.<br><li><b>Considerably increases</b> the rate at which a Survivor becomes Marked when not leaning from cover.</li>","name":"Night Vision Monocular","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"Sheath allowing a full motion range: ideal to inflict quick and powerful wounds while moving freely. Stolen from a patrol officer the night Danny left Philadelphia.<br><li><b>Considerably increases</b> movement speed while Crouched.</li><span class=\\"FlavorText\\">“Gotta get ready like a scout– without the stupid patches. What I get is much better.” -The Ghost Face</span>","name":"Drop-Leg Knife Sheath","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"A driver’s license revealing Olsen’s true identity: Danny Johnson.<br><li><b>Considerably decreases</b> the detection range to reveal The Killer while <i>Night Shroud</i> is active.</li>","name":"Driver\'s License","flavor":"\\"They all want to know who The Ghost Face is. But what they should ask is, who’s next.\\" -The Ghost Face","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"Tape obtained by Olsen to write an article that terrorized Roseville.<br><li><b>Tremendously increases</b> the rate at which a Survivor becomes Marked when leaning from cover.</li><li><b>Considerably decreases</b> the rate at which a Survivor becomes Marked when not leaning from cover.</li>","name":"“Ghost Face Caught on Tape”","flavor":"“In this footage, a dark figure is seen entering a house late at night in Northern Roseville, Florida. The police were called the next morning to report a murder in the area. Lock your doors: a killer is in our midst, roaming freely, like a Ghost in the night.” –The Roseville Gazette","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"A small surveillance camera that filmed Ghost Face breaking into a house on Belleview Road in Northern Roseville. The camera was positioned at the perfect angle to catch a glimpse of Ghost Face without providing any real clues to the police.<br><li>The auras of all Survivors outside of your Terror Radius are revealed for 4 seconds when a Marked Survivor is put into the dying state.</li>","name":"Outdoor Security Camera","flavor":"\\"An image is worth a thousand words.” –The Ghost Face","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"Pumpkin flesh infected by the rotten soil in Hawkins.<li>When traversing the Upside Down, the portal you enter is destroyed. Gain an additional 200 Bloodpoints for the traversal.</li>","name":"Rotten Pumpkin","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"A chewy rat tail for The Demogorgon to consume.<li><b>Slightly decreases</b> the time taken to open a Portal.</li>","name":"Rat Tail","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"A soggy pile of salty, soft liver.<li><b>Slightly increases</b> Killer movement speed while charging <b>Of the Abyss</b>.</li>","name":"Rat Liver","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"A black fermented heart ripped from the chest of a tentacled creature in the Upside Down.<li><b>Slightly increases</b> <b>Shred</b> hit attack recovery speed.</li>","name":"Black Heart","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"Wet, elastic webs that broaden the interdimensional tunnels.<li><b>Slightly increases</b> the time taken by Survivors to seal a Portal.</li>","name":"Viscous Webbing","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"A fetid, viscous layer that covers and expands the interdimensional tunnels.<li><b>Moderately increases</b> the radius in which Survivors can be detected by <b>Of the Abyss</b>.</li>","name":"Sticky Lining","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"Rotten tripe that fuels The Demogorgon.<li><b>Slightly increases</b> Killer movement Speed while traversing the Upside Down.</li>","name":"Rotten Green Tripe","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"The tasty guts of an unfortunate victim.<li><b>Increases</b> the total number of available Portals by <b>1</b>.</li><li><b>Slightly increases</b> <b>Shred</b> missed attack recovery speed.</li>","name":"Mew\'s Guts","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"A broken pair of glasses that traveled to the Upside Down.<li><b>Slightly increases</b> <i>Shred</i> recovery speed when breaking a pallet</li>","name":"Barb\'s Glasses","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"A dark fleshed mushroom from the Upside Down that allows The Demogorgon to telepathically distort the senses in its prey.<li><b>Slightly increases</b> the duration of the <b>Undetectable</b> status effect applied to The Demogorgon when emerging from a Portal.</li>","name":"Violet Waxcap","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"Thick, thorny vines that stretch and reinforce the interdimensional tunnels.<li><b>Slightly increases</b> the time taken by Survivors to seal a Portal.</li><li><b>Slightly increases</b> the radius in which Survivors can be detected by <b>Of the Abyss</b>.</li>","name":"Thorny Vines","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"A soda can charged with psychic energy.<li>Shows yellow Auras for Generators being repaired while traversing the Upside Down</li>","name":"Eleven\'s Soda","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"A raw, rubbery lung that reinvigorates The Demogorgon.<li><b>Considerably increases</b> Killer movement Speed while traversing the Upside Down.</li><li>Reduces number of available portals by <b>2</b>.</li>","name":"Deer Lung","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"A lighter used to ignite trouble.<li>Survivors under the effect of a Portal suffer from the <b>Blindness</b> status effect. Once out of contact with the Portal, this effect persists for <b>60 seconds</b>.</li>","name":"Brass Case Lighter","flavor":"“Emits a strong electromagnetic field: it must have come into contact with the Upside Down.” - Hawkins National Laboratory","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"A bright red poisonous mushroom from the Upside Down.<li><b>Moderately increases</b> the duration of the <b>Undetectable</b> status effect applied to The Demogorgon when emerging from a Portal.</li>","name":"Vermillion Webcap","flavor":"\\"Still experimenting with this specimen, so far our results are inconsistent.\\" - Hawkins National Laboratory","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"A sticky, flammable sap that fortifies the gateway to the interdimensional tunnels.<li><b>Moderately increases</b> the time taken by Survivors to seal a Portal.</li>","name":"Upside Down Resin","flavor":"“A sample taken from a tree that concealed a Portal to another plane. Studies on its effects are inconclusive.”- Hawkins National Laboratory","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"A large, warm egg coated in gruesome webbing.<li><b>Considerably increases</b> the power recovery speed of traversing the Upside Down.</li>","name":"Unknown Egg","flavor":"“A large egg was sighted in the Upside Down, but no sample survived the trip to the lab for proper examination.” - Hawkins National Laboratory","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"A rusty, metal whistle that once ruled the Hawkins public pool.<li>Survivors near activated Portals are indicated by Killer Instinct without having to charge <b>Of the Abyss</b>.</li><li><b>Slightly</b> reduces detection radius.</li>","name":"Lifeguard Whistle","flavor":"“Emits a strong electromagnetic field: it must have come into contact with the Upside Down.” - Hawkins National Laboratory","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"A psychedelic moss that grows on tree barks in the Upside Down.<li>When traversing the Upside Down, The Demogorgon emerges from the target portal silently but more slowly.</li><li><b>Tremendously increases</b> the duration of the <b>Undetectable</b> status effect applied to The Demogorgon when emerging from a portal.</li>","name":"Red Moss","flavor":"“Consuming its leaf enhances athletic performance and causes euphoria.” - Hawkins National Laboratory","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"A potent lichen that grows like dust on the rocks in the Upside Down.<li><b>Reveals the Auras</b> of all Survivors while traversing the Upside Down, and for <b>3 seconds</b> after emerging from a portal.</li>","name":"Leprose Lichen","flavor":"“One small dose can cause severe hallucinations.” - Hawkins National Laboratory","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"Considering his goals pure and just, Kazan carried a trinket to ward off evil that might lead him astray.<li><b>Slightly increases</b> Blood Orbs absorption speed.</li>","name":"Yaku-Yoke Talisman","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"Had the rope been stronger, it would have likely held Kazan. As it was, he escaped and butchered his captors.<li><b>Slightly increases</b> the distance that Blood Orb auras can be detected.</li>","name":"Rotting Rope","flavor":"\\"Though Death is focused, he has been known to blink.\\" -Renjiro\'s Doctrine 14:5 ","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"A cup from Kazan\'s wedding ceremony, it never made it through the night before being damaged.<li><b>Slightly increases</b> activation charge rate to initiate <i>Blood Fury</i>.</li><li><b>Slighty decreases</b> deactivation time of <i>Blood Fury</i>.</li>","name":"Cracked Sakazuki","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"Fell off during one of Kazan\'s hundred winter treks to the temple. Despite his pilgrimage, Akito\'s leg would never heal.<li><b>Slightly increases</b> movement speed while absorbing Blood Orbs.</li>","name":"Blackened Toenail","flavor":"\\"If a father sacrifices not for his children, then who does he father?\\" -Renjiro\'s Doctrine 11:12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"A horned crest Kazan tore from his helmet after being compared to a demon.<li><b>Slightly increases</b> passive recharge rate of <i>Yamaoka\'s Wrath</i>.</li>","name":"Polished Maedate","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"An ink painting that once hung in the Yamaoka estate. Depicts the story of a lion eaten by mice.<li><b>Slightly increases</b> activation charge rate to initiate <i>Blood Fury</i>.</li><li><b>Slight decreases</b> deactivation time of <i>Blood Fury</i>.</li><li><b>Moderately decreases</b> consumption penalty of <i>Blood Fury</i> when downing a Survivor.</li>","name":"Ink Lion","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"A baton that belonged to Renjiro, it was stolen by Kazan upon his departure.<li><b>Slightly increases</b> the duration of <i>Blood Fury</i>.</li>","name":"Chipped Saihai","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"Akito\'s practice sword. The child had little use for it after his injury.<li><b>Moderately increases</b> the distance that Blood Orb auras can be detected.</li>","name":"Child\'s Wooden Sword","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"Blood from a boy who called Kazan The Imposter Noble. Kazan hid evidence of the fight from his father, often reveling at the sash in secret.<li><b>Moderately increases</b> movement speed while absorbing Blood Orbs.</li>","name":"Bloody Sash","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"The banner of the Yamaoka family, Kazan felt an overwhelming pride from it.<li><b>Moderately increases</b> the duration of <i>Blood Fury</i>.</li>","name":"Yamaoka Sashimono","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"A mask that a young Kazan bought to celebrate Setsubun, its repulsively fanged mouth began haunting his nightmares.<li><b>Slightly increases</b> the amount of Blood Orbs dropped by Survivors.</li>","name":"Wooden Oni Mask","flavor":"\\"It is no coincidence that man is so familiar with demons.\\" -Renjiro\'s Doctrine 3:8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"The fragments of an ancestral blade, destroyed by Kazan in a fit of rage.<li><b>Moderately increases</b> passive recharge rate of <i>Yamaoka\'s Wrath</i>.</li>","name":"Shattered Wakizashi","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"The topknot of a samurai who questioned Kazan\'s honor. The roots cling to a thin strip of bloody skin.<li><b>Considerably increases</b> activation charge rate to initiate <i>Demon Dash</i> while <i>Blood Fury</i> is active.</li>","name":"Scalped Topknot","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"A trinket given to Kazan at birth, its powers are meant to protect his family from harm.<li><b>Moderately Increases</b> movement speed of <i>Demon Dash</i> while <i>Blood Fury</i> is active.</li>","name":"Kanai-anzen Talisman","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"The cloth that Kazan\'s mother cried into when he left on his pilgrimage to cleanse the samurai.<li><b>Considerably decreases</b> consumption penalty of <i>Blood Fury</i> when downing a Survivor.</li>","name":"Tear Soaked Tenugui","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"Fragments of a ship that carried Renjiro Yamaoka. Against all odds, the legendary samurai seemed to survive.<li><b>Moderately increases</b> the amount of Blood Orbs dropped by Survivors.</li>","name":"Splintered Hull","flavor":"\\"To plan subterfuge, begin with a counsel of none.\\" -Renjiro\'s Doctrine 7:9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"A tooth sold from an exotic vendor, it symbolizes power and nobility.<li><b>Considerably increases</b> the duration of <i>Blood Fury</i>.</li>","name":"Lion Fang","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"The crutch used by Kazan\'s son after falling from a tree. Akito\'s playmate and her family were punished for the boy\'s injury.<li><b>Considerably increases</b> movement speed of <i>Demon Dash</i> while <i>Blood Fury</i> is active.</li>","name":"Akito\'s Crutch","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"The glove Renjiro held to his sternum following the strike dealt by his son.<li>All Survivors can see Blood Orbs.</li><li>A Survivor coming into contact with a Blood Orb will absorb the Blood Orb and reveal their aura to The Killer for <b>2 seconds</b>.</li><li>This effect stacks for each Blood Orb absorbed.</li>","name":"Renjiro’s Bloody Glove","flavor":"\\"When all else spills out, cling only to your honor.\\" -Renjiro\'s Doctrine 14:12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"A crest that denotes its owner as being a part of the Yamaoka family.<br><li>While <i>Blood Fury</i> is active, missing a <i>Demon Strike</i> will cause all Survivors within a <b>12-meter radius</b> to scream and reveal their current location to you.</li>","name":"Iridescent Family Crest","flavor":"\\"Know who you are so you may shield your heart.\\" -Renjiro\'s Doctrine 11:2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"A grimy piece of burlap. Spit and elbow grease was enough to wipe down the speargun in the heat of a shootout.<li><b>Slightly decreases</b> the Speargun’s cool-down time after missed shots.</li>","name":"Spit Polish Rag ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"A tincture of oils and extracts purchased from a travelling salesman. Purported to cure all that ails you.<li><b>Slightly increases</b> the Speargun’s Reeling speed.</li>","name":"Snake Oil ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"Weak steel links first used on Caleb\'s prototype Speargun. Despite the chain\'s failings, it holds sentimental value.<li>Grants <b>50%</b> bonus Bloodpoints for <i>Speared</i> score events.</li><li>Survivors break free more easily.</li>","name":"Rickety Chain","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"An old ammo belt Caleb altered for his specialized weaponry. Still holds the fine red dirt of the Arizona Territory desert.<li><b>Slightly increases</b> the Speargun’s Reload speed.</li>","name":"Modified Ammo Belt ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"A railroad spike that Caleb fastened to the front of the Speargun during a moment of morbid curiosity. The dull tip prevents it from cleanly piercing its target.<li>Hitting a speared Survivor inflicts the <b>Mangled</b> status effect.</li>","name":"Rusted Spike ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"An ordinary looking plant, Caleb found that spears coated in its oil caused unbearable blistering around wounds.<li><b>Slightly increases</b> Survivor’s Mending time when affected by the <b>Deep Wound</b> status effect.</li>","name":"Poison Oak Leaves","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"A silver badge taken from the corpse of a lawman in Arizona Territory who interfered with the Hellshire Gang’s bounties.<li><b>Slighty reduces</b> the Terror Radius while aiming down the Speargun’s sights.</li><li><b>Slightly reduces</b> movement speed while aiming down the Speargun’s sights.</li><span class=\\"FlavorText\\">“Get your prayers in, you’ll be swinging by noon.” -Caleb Quinn</span>","name":"Marshal\'s Badge ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"The bullet that ripped through Caleb’s jaw during a frenzied shootout. It brings back a burning desire for revenge.<li><b>Slightly increases</b> movement speed while aiming down the Speargun’s sights.</li><span class=\\"FlavorText\\">\\"You called death to your door the instant you done me wrong.\\" -Caleb Quinn</span>","name":"Jaw Smasher ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"A can of clipped and sweetened tobacco leaves lifted from a gutted body in Glenvale. Stimulates the nervous system.<li><b>Moderately decreases</b> the stun duration when Survivor’s break free from the Speargun.</li>","name":"Chewing Tobacco","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"The dull jangle of the keys evokes a furious memory within Caleb.<li><b>Moderately increases</b> the Speargun’s Reload speed.</li>","name":"Warden’s Keys ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"The yellowed remains of a wanted poster for Mason Kelly. Kept Caleb focused on the hunt.<li><b>Moderately increases</b> movement speed while aiming down the Speargun’s sights.</li><span class=\\"FlavorText\\">\\"You\'ll be met with a fierce reckoning, swear it on my mum’s grave.\\" -Caleb Quinn</span>","name":"Wanted Poster ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"A can holding a small amount of oil to reduce friction in machinery. Early models of the Speargun were notorious for jamming, and oil had to be readily available.<li><b>Moderately decreases</b> the Speargun\'s cool-down time after missed shots.</li>","name":"Tin Oil Can ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"Angered with a bounty who fled twice before, Caleb twisted thorn branches onto a spear and let it loose.<li>Survivors who break free from the Speargun are inflicted with the <b>Mangled</b> status effect.</li>","name":"Honey Locust Thorns ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"A golden tooth torn from Henry Bayshore as he screamed for mercy, hours before he was finished off.<li><b>Moderately increases</b> the Speargun’s Reeling speed.</li><span class=\\"FlavorText\\">“Know your place, boy. Know your damn place.” -Henry Bayshore</span>","name":"Bayshore’s Gold Tooth","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"A thick, heavy chain that once held a steel ball and latched to Caleb’s ankle. It’s been repurposed to hook onto a spear.<li><b>Considerably increases</b> the charges required for a Survivor to break free from a spear.</li><span class=\\"FlavorText\\">“Inmates working beyond the prison yard must be affixed with a steel ball of no less than 18 pounds.” -Hellshire Penitentiary Guard Book</span>","name":"Prison Chain","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"Warm comfort in a bottle that quelled Caleb’s anger and slowed his step.<li><b>Moderately reduces</b> the Terror Radius while aiming down the Speargun’s sights.</li><li><b>Moderately reduces</b> movement speed while aiming down the Speargun’s sights.</li><span class=\\"FlavorText\\">“A smooth taste for the rugged frontier” -Gold Creek Advertisement, 1876</span>","name":"Gold Creek Whiskey","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"A quality cigar, plucked from the jacket of Caleb’s boss while he wailed over the spear lodged in his abdomen.<li><b>Considerably decreases</b> the stun duration when Survivors break free from a spear.</li><span class=\\"FlavorText\\">“Do not point that thing at me, you slack-jawed imbecile.” -Henry Bayshore</span>","name":"Bayshore’s Cigar","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"Pliable American made steel lined with sharp barbs. Despite its simplicity, Caleb found it could be wrapped around a spear to increase its viciousness.<li><b>Moderately increases</b> Survivor’s Mending time when affected by the <b>Deep Wound</b> status effect.</li></li><span class=\\"FlavorText\\">“There won’t be nothing to fear soon. Till then, fear me.” -Caleb Quinn</span>","name":"Barbed Wire","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"A glass-like coin moulded from The Fog itself. Payment to the bounty hunter for services rendered.<li>Survivors speared from at least <b>15 meters</b> away are inflicted with the <b>Exposed</b> status effect for as long as they remain speared.</li><span class=\\"FlavorText\\">“Deals made in desperation are paid for in madness.”</span>","name":"Iridescent Coin","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"The Hellshire Gang’s branding iron. Despite folklore, it never made its mark on new initiates, instead having been used to brand particularly quarrelsome bounties.<li>For as long as a Survivor remains speared, the auras of all Survivors within your Terror Radius are revealed.</li><span class=\\"FlavorText\\">“Hellshire Gang: Justice Seekers or Outlaws?” -Glenvale Gazette headline</span>","name":"Hellshire Iron","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"Found in a refrigerator. It’s engraved with a disgusting, bloated face.<li><b>Slightly increases</b> the duration <b>Rites of Judgment</b> trails remain in the environment.</li>","name":"Lead Ring ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"A butterfly found on a bed at Wood Side Apartments. It’s frail and nearly falls apart when touched.<li><b>Slightly increases</b> the recharge rate of <b>Rites of Judgment</b>.</li>","name":"Dead Butterfly ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"Found in the basement of Brookhaven Hospital. It’s engraved with a picture of a spider.<li><b>Slightly increases</b> the total amount of time that <b>Rites of Judgment</b> can be performed.</li>","name":"Copper Ring ","flavor":"“I was locked up inside the basement’s basement. It was so small and dark, and I was so afraid. I dropped my precious ring. But I’ll never, ever go back there.”","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"A nylon strap that was used to restrain a victim to a metal frame. The color makes it difficult to see the blood soaked into it.<li><b>Slightly increases</b> the reach of <b>Punishment of the Damned</b>.</li>","name":"Black Strap ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"A doll carved from wax, handcrafted by a prisoner who would soon face their judgment.<li><b>Moderately increases</b> the reach of <b>Punishment of the Damned</b>.</li>","name":"Wax Doll ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"The sharp, rusted tip of a spear. It’s flaked with blood from its last victim.<li><b>Moderately increases</b> the total amount of time that <b>Rites of Judgment</b> can be performed.</li>","name":"Spearhead ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"A shred of pink, leopard print fabric. It’s difficult to tell what it was used for.<li><b>Slightly increases</b> the duration of <i>Killer Instinct</i> when triggered by <b>Rites of Judgment</b>.</li>","name":"Leopard-Print Fabric  ","flavor":"“It doesn’t matter who I am. I’m here for you, James.” -Maria","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"A videotape of two lovers vacationing in Silent Hill. Despite its sentimental value, it was left behind in the Lakeview Hotel.<li><b>Moderately increases</b> the recharge rate of <b>Rites of Judgment</b>.</li>","name":"Forgotten Videotape ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"A music box with a figure from the fairy tale Cinderella. Found inside a suitcase adorned with stickers from multiple destinations.<li><b>Moderately increases</b> the duration <b>Rites of Judgment</b> trails remain in the environment.</li>","name":"Cinderella Music Box ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"A photograph of two figures in red hoods. Entitled Crimson and White Banquet for the Gods.<li><b>Considerably increases</b> the recharge rate of <b>Rites of Judgment</b>.</li>","name":"Valtiel Sect Photograph ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"A metal tablet engraved with Aztec figures.<li><b>Considerably increases</b> the total amount of time that <b>Rites of Judgment</b> can be performed.</li>","name":"Tablet of the Oppressor ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"A painting of an imposing figure wearing a steel pyramid atop his head. Victims are caged in the background.<li><b>Moderately increases</b> the duration of <i>Killer Instinct</i> when triggered by <b>Rites of Judgment</b>.</li>","name":"Misty Day, Remains of Judgment ","flavor":"\\"It’s him...”","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"The smooth grey foot of a mannequin, brutally torn from its leg.<li><b>Considerably increases</b> the duration <b>Rites of Judgment</b> trails remain in the environment.</li>","name":"Mannequin Foot ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"\\t\\nA diagram of the Lakeview Hotel. Red flames are painted over this place of guilt.<li><b>Considerably increases</b> the reach of <b>Punishment of the Damned</b>.</li>","name":"Burning Man Painting ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"A fresh egg, strikingly red in color. About the size of a quail’s egg.<li><b>Considerably increases</b> the duration of <i>Killer Instinct</i> when triggered by <b>Rites of Judgment</b>.</li>","name":"Scarlet Egg ","flavor":"\\"I’ve never been so scared in my whole life! You couldn’t care less about me... could you?” -Maria","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"An old-looking egg, colored reddish orange. About the size of a quail’s egg.<li>Survivors affected by <b>Rites of Judgment</b> suffer from the <b>Blindness</b> status effect for <b>60 seconds</b>.</li>","name":"Rust-colored Egg ","flavor":"“James... You made me happy.” -Mary","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"A book about the history and legends of Silent Hill and the surrounding area.<li>Survivors affected by <b>Rites of Judgment</b> suffer from the <b>Oblivious</b> status effect for <b>15 seconds</b>.</li><span class=\\"FlavorText\\">“They called this place ‘The Place of the Silent Spirits.’”</span>","name":"Lost Memories Book ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"A book about an ancient god. Author unknown.<li>Injured Survivors affected by <i>Torment</i> suffer from the <b>Hemorrhage</b> status effect.</li>","name":"Crimson Ceremony Book","flavor":"“Speak. I am the Crimson One. The lies and the mist are not they, but I.”","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"An ancient looking goblet carved from pure obsidian.<li><b>The Executioner</b> gains the <b>Undetectable</b> status effect when standing on a <b>Rites of Judgment</b> trail.</li>","name":"Obsidian Goblet ","flavor":"“Forgive me for waking you. But without you, I just can’t go on.” -James Sunderland","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"A talisman with an odd design inscribed on it. The Entity’s influence seems to have altered it.<li>When sending a Survivor to a <b>Cage of Atonement</b>, the auras of all Survivors suffering from <i>Torment</i> are revealed for <b>6 seconds.</b></li>","name":"Iridescent Seal of Metatron ","flavor":"\\"This magic square, with strong protective and dispelling properties, is called the \'Virun VII Crest\' or the \'Seal of Metatron\'.”","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"A pill that’s utterly ineffective... or is it?<br><br><li><b>Moderately decreases</b> movement speed while Rushing.</li><li>Gain <b>100%</b> bonus Bloodpoints on Rush score events.</li>","name":"Placebo Tablet ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"A poisonous plant that sparked Talbot’s interest in chemistry. It rekindles deeply buried memories.<br><br><li><b>Slightly increases</b> recovery speed after a Rush.</li>","name":"Foxglove ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"This early sample failed to achieve desired results but demonstrated surprising effects regardless.<br><br><li>Automatically face the nearest Survivor within <b>16 meters</b> after a Slam.</li>","name":"Compound Seven ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"A monocle Talbot rarely used despite his eyesight weakening in later years.<br><br><li>Displays the target location of a Slam.</li>","name":"Chipped Monocle","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"The remnants of Talbot’s notes, they still contain some valuable information within.<br><br><li><b>Decreases</b> the amount of available Rush tokens by <b>1.</b></li><li><b>Moderately increases</b> token regeneration rate.</li>","name":"Shredded Notes ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"Dried pustula petals ground into a fine dust.<br><br><li><b>Moderately increases</b> Slam duration.</li>","name":"Pustula Dust ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"A sample of The Plague’s bile, distilled and treated with a mixture of chemicals.<br><br><li><b>Slightly increases</b> turn rate while Rushing.</li>","name":"Plague Bile","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"A sizable thorn snipped from a visceral canker. It secretes a mild toxin.<br><br><li><b>Moderately increases</b> recovery speed after a Rush.</li>","name":"Canker Thorn","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"A rat that briefly returned to life when injected with serum, becoming aggressive and uncontrollable.<br><br><li><b>Moderately increases</b> Rush speed for each consecutive Rush.</li>","name":"Blighted Rat ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"Regular sea salt that has momentarily passed through the spirit world, altering its properties in the process.<br><br><li><b>Moderately increases</b> turn rate while Rushing.</li>","name":"Umbra Salts ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"A mixture made with dried roses from the exceedingly rare New Moon Bouquet.<br><br><li><b>Considerably increases</b> Slam duration.</li> ","name":"Rose Tonic ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"A serum that\'s fatal to humans. It evokes beneficial qualities in those who are... something more.<br><br><li>When initiating a Slam, reveal the aura of Survivors within <b>8 meters</b> of the collision location for <b>3 seconds</b>.</li>","name":"Compound Twenty-One ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"A dead crow that has been grotesquely mutated by blight serum.<br><br><li><b>Considerably increases</b> Rush speed for each consecutive Rush.</li>","name":"Blighted Crow ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"A hormone removed from an unwilling subject’s adrenal gland. Though it provides a jolt of energy, it can fatigue its user.<br><br><li><b>Tremendously reduces</b> turn rate while Rushing.</li><li><b>Tremendously increases</b> token regeneration rate.</li><li><b>Increases</b> the amount of available Rush tokens by <b>2.</b></li><li><b>Considerably increases</b> maximum look angle while Rushing.</li><br>","name":"Adrenaline Vial ","flavor":"\\"Please, don\'t do this...\\"","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"The journal of a man who claimed to have returned from the Void. The knowledge within has practical applications.<br><br><li>Gain the <b>Undetectable</b> status effect while Rushing.</li><br>","name":"Vigo\'s Journal ","flavor":"\\"In a wasteland of forgotten dreams and endless routine, the man with a way out is God.\\" —Talbot Grimes","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"Talbot used this stone to carve what he believed was his research into the opium den’s walls.<br><br><li>Hitting a Survivor with a Lethal Rush will call upon The Entity to block pallets within a <b>12 meter</b> radius of your location for <b>6 seconds</b>.</li><br>","name":"Summoning Stone ","flavor":"\\"Death is only the beginning.\\"","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"A chemical squeezed from the pineal gland of a recently deceased Survivor.<br><br><li>During a Rush, the moment you enter the <b>16-meter</b> radius around a Survivor who is repairing or healing, trigger a <b>tremendously</b> difficult Skill Check for that Survivor. Can activate once per Survivor per Rush. Does not trigger for a Rush starting within <b>16 meters</b> of the Survivor.</li><br>","name":"Soul Chemical ","flavor":"\\"...suspected to cause atypical alterations in neural rhythmic activity.\\" —Unlabeled mystery school text","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"A ring given to chemists graduating from the London School of Medicine. It’s a reminder of unrestrained ambition.<br><br><li>Hitting a Survivor with a Lethal Rush will instantly recharge all Rush tokens.</li><br>","name":"Alchemist’s Ring ","flavor":"\\"The student is accused of grave robbing with the intent of unsanctioned scientific testing.\\" —Faculty reprimand of Talbot Grimes, 1838","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"A glass-like laboratory tag, moulded from The Fog itself. Either a gift from The Entity or a cruel jest to tag The Blight as he once did to others.<br><br><li>Upon using all Rush tokens, your last Lethal Rush will put Survivors into the dying state.</li><br>","name":"Iridescent Blight Tag","flavor":"\\"Progress requires drastic change.\\" —Talbot Grimes","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"Talbot’s penultimate attempt at a serum. Though it did not facilitate his escape, it did have powerful side effects.<br><br><li>Any Survivor within <b>16 meters</b> of a Slam will suffer from the <b>Hindered</b> status effect for <b>3 seconds</b>.</li><li>Slamming pallets or breakable walls will destroy them and stun The Blight for <b>1.5 seconds.</b></li><br>","name":"Compound Thirty-Three ","flavor":"\\"Time is scarce. Let this be the one...\\" —Talbot Grimes","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"A miniscule toy sword, only a few inches long. Holding it brought out a violent enthusiasm in Victor.<br><br><li><b>Slightly decreases</b> the time to charge a Pounce.</li>","name":"Toy Sword","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"Charlotte had many ways to mourn Victor’s death. As the fingernails loosened from his rotting hands, she took one in remembrance.<br><br><li><b>Moderately decreases</b> the time for Victor to separate from Charlotte.</li>","name":"Tiny Fingernail","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"A metal bottle filled with milk that has since soured. Loud as Victor could be, he quieted down when presented with his meal.<br><br><li><b>Slightly increases</b> the radius of Victor\'s shrieks.</li>","name":"Soured Milk","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"A wooden figure that had caught young Victor\'s eye. He shrieked until his mother stole it from the market, nearly blowing their cover.<br><br><li>Displays the target location of a Pounce.</li>","name":"Cat Figurine","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"A glove once owned by The Twins’ mother. During desperate times, it was held over Victor’s mouth to keep him from making a peep.<br><br><li><b>Moderately increases</b> the radius of Victor\'s shrieks.</li>","name":"Madeleine’s Glove","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"The candelabrum that Victor tipped over, causing his captors to burn. A symbol of his tenacity.<br><br><li><b>Slightly increases</b> the time needed for a Survivor to crush Victor.</li>","name":"Ceremonial Candelabrum","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"An eyeball that belonged to a cat eaten by the starving Deshayes’ family. Victor hid it from his mother, using it as a toy.<br><br><li>Victor\'s shrieks stop when Pounce is fully charged.</li>","name":"Cat’s Eye","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"A hood from one of the men that hunted Charlotte. Soon, he became the prey.<br><br><li><b>Slightly decreases</b> the time it takes for Charlotte to be awoken from her dormant state.</li>","name":"Bloody Black Hood","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"Two teeth that Victor lost long ago. They’re unusually sharp.<br><br><li>Survivors who remove Victor suffer from the <b>Blindness</b> status effect for <b>15 seconds.</b></li>","name":"Baby Teeth","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"A shoddily carved rattle that Victor cried over until his mother stole it for him. It’s entirely too heavy to be trusted to a child.<br><br><li>Survivors who remove Victor suffer from the <b>Broken</b> status effect for <b>20 seconds.</b></li> ","name":"Weighty Rattle","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"A hard, unleavened biscuit that Madeleine stole from a town’s market. It wasn’t much, but it was better than most meals.<br><br><li><b>Slightly decreases</b> the cooldown of Pounce.</li>","name":"Stale Biscuit","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"A disgusting, sticky mixture that covered the Deshayes during an escape attempt through the city sewers.<br><br><li><b>Slightly increases</b> the time it takes for a Survivor to remove Victor.</li>","name":"Sewer Sludge","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"Rusted Needle","name":"Rusted Needle","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"A cloth Madeleine wore shortly before her death. The Twins kept it as a memento.<br><br><li><b>Slightly increases</b> Victor’s speed.</li><br>","name":"Madeleine’s Scarf","flavor":"\\"...shall hereby be recorded as a service to the greater good and the extermination of evil.\\" — Inquiry into the death of Madeleine Deshayes","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"A toy soldier Victor clung to when scared. Something about it evoked jealousy in Charlotte.<br><br><li>If a Survivor crushes Victor while he’s idle, their aura is revealed for <b>6 seconds.</b></li><br>","name":"Victor’s Soldier","flavor":"\\"Kch--kch—k’ull bawd mennn...\\" — Victor Deshayes","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"A wooden top shared between The Twins, though Victor wanted it for his own. He learned he could get what he wanted if he clung tightly and screamed.<br><br><li>Survivors drop any carried item when pounced on by Victor.</li><br>","name":"Spinning Top","flavor":"\\"Hush... hush... it is yours then.\\" — Charlotte Deshayes","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"A stew of foraged vegetables mixed with moss and bark to create a false sense of fullness.<br><br><li><b>Moderately increases</b> Victor’s speed.</li><br>","name":"Forest Stew","flavor":"\\"Eat... eat, child. You’ll feel better when it’s down.\\" — Madeleine Deshayes","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"One of the few luxuries Madeleine escaped her past life with. It has a pleasant, disarming scent.<br><br><li>Survivors within the radius of Victor\'s shrieking suffer from the <b>Oblivious</b> status effect.</li><br>","name":"Drop of Perfume","flavor":"\\"Beware the deceit of witches, for they exploit the goodness in men’s hearts.\\" — A History of Witches and Demons (1602)","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"A coarse strip of cloth that a five-year-old Charlotte would put in her mouth. Stopped her from screaming when witch hunters were nearby.<br><br><li>Charlotte is granted the <b>Undetectable</b> status effect for <b>20 seconds</b> after waking from her idle state.</li><br>","name":"Silencing Cloth","flavor":"\\"I don’t like this game anymore, Mother...\\" — Charlotte Deshayes","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"A glass-like pendant moulded from The Fog itself. There’s a portrait of Madeleine Deshayes upon it, though something about her depiction seems unsettling.<br><br><li>If a Survivor crushes Victor while he’s idle, they suffer from the <b>Exposed</b> status effect for <b>30 seconds.</b></li><br>","name":"Iridescent Pendant","flavor":"\\"Your binding is no curse, my loves. It is your strength to draw upon.\\" — Madeleine Deshayes","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"A pouch with a number of hidden pockets. Used by aspiring magicians and those with something to hide.<br><li><b>Increase</b> the maximum carried Blades by <b>10</b>.</li><li>Start the trial with <b>10</b> extra Blades.</li>","name":"Trick Pouch","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"Blood-rusted knives, worn from overuse. Employed during Ji-Woon\'s early murders, they hold a place of importance in his heart.<br><li>Gain <b>100%</b> bonus Bloodpoints for <b>Showstopper</b> score events.</li><li><b>Moderately increases</b> each Survivor’s Laceration Meter.</li>","name":"Memento Blades","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"A set of chords that Ji-Woon never found a song for. Still, the sound is undeniably catchy.<br><li><b>Slightly increases</b> movement speed while throwing Blades.</li>","name":"Killing Part Chords","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"Burnt wires from the studio fire that killed four of the five NO SPIN members. Their deaths gave rise to The Trickster.<br><li><b>Slightly increases</b> the duration of Main Event.</li>","name":"Inferno Wires","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"A drink invented in a modest Changwon bar. Became a favorite of Ji-Woon\'s.<br><li><b>Moderately increases</b> the duration of Main Event.</li>","name":"Tequila Moonrock","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"An underground single produced by Ji-Woon before achieving fame. Only the biggest NO SPIN fans collected this hidden gem.<br><li><b>Slightly increases</b> the time before the Laceration Meter starts decaying.</li>","name":"On Target Single","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"The first throwing knife Ji-Woon ever owned. Purchased by his father, he was expected to put on a show for those frequenting the family restaurant.<br><li><b>Slightly increases</b> each Survivor’s Laceration Meter decay duration when out of Blades.</li>","name":"Lucky Blade","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"A signature from the celebrity known as The Trickster. Sore as his wrist was after hundreds of these, it was invigorating to know he was so in demand.<br><li><b>Slightly increases</b> the initial throw rate of Blades.</li>","name":"Ji-Woon\'s Autograph","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"Shoes that Ji-Woon wore during the music video for One Caged Heart. Allows for smooth, graceful movements of the point dance.<br><li><b>Moderately increases</b> movement speed while throwing Blades.</li>","name":"Caged Heart Shoes","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"A pocket watch worn by Ji-Woon during a live performance of I’ll Be Waiting for You. It’s a stage prop that doesn’t work and never will.<br><li><b>Considerably increases</b> each Survivor\'s Laceration Meter decay duration when out of Blades.</li>","name":"Waiting for You Watch","flavor":"“Don’t run away<br>Don’t say we’re through<br>No way to escape this<br>I’ll be waiting for you”<br>— NO SPIN’s “I’ll Be Waiting for You”","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"A wrist brace worn by Ji-Woon during the filming of his music video Ripper. Though unintentional, the design stabilizes the wrist better than many medical braces.<br><li><b>Moderately increases</b> the time before the Laceration Meter starts decaying.</li>","name":"Ripper Brace","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"An audio file of victims’ crisp, clear shrieks. Ji-Woon incorporated the sounds into one of his more popular tracks.<br><li><b>Moderately decreases</b> each Survivor’s Laceration Meter.</li>","name":"Melodious Murder","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"A limited edition can of soda promoting NO SPIN. High sugar and caffeine content.<br><li><b>Moderately increases</b> the initial throw rate.</li>","name":"Fizz-Spin Soda","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"A boa that Ji-Woon draped around a victim’s slashed neck. A number of pockets are concealed within it.<br><li><b>Increase</b> the maximum carried Blades by <b>15</b>.</li><li>Start the trial with <b>15</b> extra Blades.</li>","name":"Bloody Boa","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"Specialty blades that are only seen as faulty by those who lack imagination. A young Ji-Woon dazzled spectators with the tricks he performed.<br><li>Blades ricochet off the environment twice. </li><li>Ricochet hits grant bonus Bloodpoints.</li>","name":"Trick Blades","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"The Trickster’s debut album. The coarse and vicious tone was met with a mixed reaction from fans despite critical acclaim.<br><li>Blades shatter when hitting the environment, dealing <b>50% Laceration</b> to nearby Survivors.</li>","name":"Edge of Revival Album","flavor":"“Your whisper on me<br>Warm as can be<br>Burning each breath<br>Till I can’t breathe”<br>— The Trickster’s “Whispers of Warmth”","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"Cufflinks gouged into the eyes of a sasaeng fan who made the mistake of stalking Ji-Woon. Rubbing off the blood, there’s so much to be seen in the glitter.<br><li>When a Survivor’s Laceration Meter is one Blade hit away from the maximum, reveal their aura for <b>6 seconds</b>.</li>","name":"Diamond Cufflinks","flavor":"“Shhh... You don’t have to see your blood anymore.” —Ji-Woon Hak","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"The first single released by NO SPIN after Ji-Woon joined their ranks. Scored an all-kill on the Korean charts.<br><li>Blades pierce through Survivors.</li><li>Subsequent Survivors hit by the same Blade receive <b>50% Laceration</b>.</li>","name":"Cut Thru U Single","flavor":"“Can\'t stop this love<br>That\'s tearing your heart<br>Wherever you go<br>I will cut you apart”<br>— NO SPIN’s “Cut Thru U”","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"A glass-like photo molded from The Fog itself. Ji-Woon\'s eyes shimmer holographically on his grinning face.<br><li>When a Survivor’s Laceration Meter is one Blade hit away from the maximum, they are inflicted with the <b>Exposed</b> status effect.</li>","name":"Iridescent Photocard","flavor":"“It’s okay, scream my name. Let me hear everything the pain awakens...” —Ji-Woon Hak","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"A collection of the final sounds from Ji-Woon\'s victims, adapted to a vinyl record. Terrifying and emotionally raw.<br><li>Laceration caused by Blades is based on proximity to the target, starting at a minimum of <b>50%</b>.</li><li>Each Blade hit increases the Laceration caused by Blades to a maximum of <b>200%</b>.</li><li>Once a Blade misses, the Laceration caused by Blades is reset to its initial value.</li>","name":"Death Throes Compilation","flavor":"“Please, no... don’t make it hurt... I can’t... I...” —Unidentified Voice","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"An electronic Umbrella wristband for visitors to the facility. It also doubles as a tracking device.<li><b>Moderately extends</b> zombie detection range.</li>","name":"Visitor Wristband","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"A manual of compiled S.T.A.R.S. close-range combat knowledge. Edited by Chris Redfield.<li>Zombies’ auras turn yellow for <b>6 seconds</b> after hitting a Survivor.</li>","name":"S.T.A.R.S. Field Combat Manual","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"Medical equipment that fared poorly during the chaos that overwhelmed Raccoon City.<li><b>Moderately increases</b> time it takes Survivors to inject Vaccine.</li><li><b>Slightly increases</b> length of Killer Instinct effect time when Survivors use Vaccine.</li>","name":"Damaged Syringe","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"The small intestine of Brian Irons, chief of the RPD. It\'s an appetizing sight for zombies.<li><b>Slightly increases</b> zombie movement speed.</li>","name":"Brian’s Intestine","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"The heart of an eviscerated zombie. It’s considered hazardous waste as it’s certainly teeming with viruses.<li><b>Moderately increases</b> mutation rate when destroying zombies with Tentacle Strike.</li><br>","name":"Zombie Heart","flavor":"\\"Words won’t work on this thing.\\" —Leon S. Kennedy","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"While little was left of Mikhail, his left eyeball survived the blast that killed him. It remains a tasty treat for zombies.<li><b>Moderately increases</b> zombie movement speed.</li>","name":"Mikhail’s Eye","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"The contaminated blood of a Raccoon City police officer.<li><b>Moderately increases</b> mutation rate when hitting Survivors with Tentacle Strike.</li><br>","name":"Marvin’s Blood","flavor":"\\"All you need to know is that this place will eat you alive if you’re not careful.\\" —Marvin Branagh","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"A hormone that heightens senses and prepares the body to fight.<li><b>Considerably increases</b> length of Killer Instinct effect time when Survivors use Vaccine.</li>","name":"Adrenaline Injector","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"An electronic Umbrella wristband for administrators of the facility. While allowing access to secure areas, it also doubles as a tracking device.<li><b>Considerably extends</b> zombie detection range.</li>","name":"Admin Wristband","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"A damaged sample from a T-002 Tyrant that died in combat. There are signs of severe burns.<li><b>Moderately increases</b> mutation rate when destroying zombies with Tentacle Strike.<li><b>Moderately decreases</b> zombie respawn time.","name":"Tyrant Gore","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"A sample of the T-Virus developed by Umbrella Corporation, it causes extreme mutations and brain damage in its subjects.<li><b>Considerably increases</b> mutation rate when destroying zombies with Tentacle Strike. ","name":"T-Virus Sample","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"A hormone that slightly relaxes the user for when stealth is required.<li>Gain the <b>Undetectable</b> status effect for <b>15 seconds</b> when a zombie is destroyed.</li>","name":"Serotonin Injector","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"The tangled remnants of a plant infected with the T-Virus, it killed one of the researchers who developed it.<li><b>Considerably increases</b> time for Survivors to open Supply Cases.","name":"Plant 43 Vines ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"A sticky prehensile tongue that easily wraps around anything it touches.<li><b>Moderately increases</b> the amount of time Survivors are <b>Hindered</b> after being Contaminated.</li><br>","name":"Licker Tongue","flavor":"\\"It’s like... a nightmare.\\" —Claire Redfield","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"A parasite used in the development of Nemesis T-Types, it’s capable of hijacking its host’s brain.<li>When receiving the Contamination effect, a Survivor suffers from <b>Oblivious</b> status effect for 60 sec.","name":"NE-α Parasite","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"It’s tragically squished and dripping with blood from a recent battle. Despite that, it has a delicious aroma that can’t be missed.<li>Reveals a Survivor\'s aura for <b>12 seconds</b> after they unlock a Supply Case.</li>","name":"Jill’s Sandwich","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"Who will save them now? There’s something about this ink ribbon being dry that energizes zombies.<li><b>Considerably decreases</b> zombie respawn time.</li><li><b>Moderately increases</b> zombie movement speed.</li><li>When <b>5</b> generators are repaired, any destroyed zombies respawn in an exit area.</li><br>","name":"Depleted Ink Ribbon","flavor":"\\"Look, just so you know... this is the last fucking time.\\" —Jill Valentine","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"A coin depicting a bird framed by a laurel wreath. It’s broken in half.<li>Removes <b>1</b> Supply Case from the trial.</li><br>","name":"Broken Recovery Coin","flavor":"\\"This is not how I imagined my first day.\\" —Leon S. Kennedy","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"A symbol of hope for Raccoon City, utterly destroyed.<li><b>Tremendously increases</b> zombie movement speed for <b>30 seconds</b> after a generator is repaired.</li><br>","name":"Shattered S.T.A.R.S. Badge","flavor":"\\"S.T.A.R.S...\\" —Nemesis","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"A glass-like badge moulded from The Fog itself. It represents a corporation that pushed far beyond ethical and humane science.<li>Survivors are inflicted with the <b>Exposed</b> status effect for <b>12 seconds</b> when using a Vaccine.</li><br>","name":"Iridescent Umbrella Badge","flavor":"\\"Commitment, honesty, integrity. These are the core values that create the foundation of Umbrella Corp.\\" —Dr. Matt Gorkis","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/en/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Grants <b>50%</b> bonus Bloodpoints in the Brutality category.<br><li>Stacks.</li>","name":"Tanager Wreath","flavor":"\\"Crafted out of bloody sticks and guts, this wreath calls on The Entity\'s blessing for more blood.\\"","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"Grants <b>75%</b> bonus Bloodpoints in the Brutality category.<br><li>Stacks.</li>","name":"Devout Tanager Wreath","flavor":"\\"Devoutly crafted out of bloody sticks and guts, this wreath calls on The Entity\'s blessing for more blood.\\"","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"Grants <b>100%</b> bonus Bloodpoints in the Brutality category.<br><li>Stacks.</li>","name":"Ardent Tanager Wreath","flavor":"\\"Crafted with a fiery, undying passion out of bloody sticks and guts, this wreath calls on The Entity\'s blessing for more blood.\\"","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"Grants <b>50%</b> bonus Bloodpoints in the Deviousness category.<br><li>Stacks.</li>","name":"Raven Wreath","flavor":"\\"Crafted out of blackened branches and coals, this wreath calls on The Entity\'s blessing for more blood.\\"","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"Grants <b>75%</b> bonus Bloodpoints in the Deviousness category.<br><li>Stacks.</li>","name":"Devout Raven Wreath","flavor":"\\"Devoutly crafted out of blackened branches and coals, this wreath calls on The Entity\'s blessing for more blood.\\"","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"Grants <b>100%</b> bonus Bloodpoints in the Deviousness category.<br><li>Stacks.</li>","name":"Ardent Raven Wreath","flavor":"\\"Crafted with a fiery, undying passion out of blackened branches and coals, this wreath calls on The Entity\'s blessing for more blood.\\"","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"Grants <b>50%</b> bonus Bloodpoints in the Hunting category.<br><li>Stacks.</li>","name":"Spotted Owl Wreath","flavor":"\\"Crafted out of sharp metals, ropes and feathers, this wreath calls on The Entity\'s blessing for more blood.\\"","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"Grants <b>75%</b> bonus Bloodpoints in the Hunting category.<br><li>Stacks.</li>","name":"Devout Spotted Owl Wreath","flavor":"\\"Devoutly crafted out of sharp metals, ropes and feathers, this wreath calls on The Entity\'s blessing for more blood.\\"","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"Grants <b>100%</b> bonus Bloodpoints in the Hunting category.<br><li>Stacks.</li>","name":"Ardent Spotted Owl Wreath","flavor":"\\"Crafted with a fiery, undying passion out of sharp metals, ropes and feathers, this wreath calls on The Entity\'s blessing for more blood.\\"","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"Grants <b>50%</b> bonus Bloodpoints in the Sacrifice category.<br><li>Stacks.</li>","name":"Shrike Wreath","flavor":"\\"Crafted out of sticks, strings and bones, this wreath calls on The Entity\'s blessing for more blood.\\"","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"Grants <b>75%</b> bonus Bloodpoints in the Sacrifice category.<br><li>Stacks.</li>","name":"Devout Shrike Wreath","flavor":"\\"Devoutly crafted out of sticks, strings and bones, this wreath calls on The Entity\'s blessing for more blood.\\"","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"Grants <b>100%</b> bonus Bloodpoints in the Sacrifice category.<br><li>Stacks.</li>","name":"Ardent Shrike Wreath","flavor":"\\"Crafted with a fiery, undying passion out of sticks, strings and bones, this wreath calls on The Entity\'s blessing for more blood.\\"","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"Grants <b>25%</b> bonus Bloodpoints in all categories.<br><li>Stacks.</li>","name":"Hollow Shell","flavor":"\\"An unidentifiable cocoon which was breached by whatever was inside.\\"","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"Grants <b>100%</b> bonus Bloodpoints in all categories.<br><li>Personal.</li><li>Stacks.</li>","name":"Survivor Pudding","flavor":"\\"A heavily salted pudding…\\"","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"Calls on The Entity to prevent the appearance of <b>2</b> chests.<br><li>Stacks.</li>","name":"Cut Coin","flavor":"\\"Two halves of a thick metallic coin.\\"","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"Calls on The Entity to prevent the appearance of <b>1</b> chest.<br><li>Stacks.</li>","name":"Scratched Coin","flavor":"\\"A defaced coin of unknown origin.\\"","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"Calls upon The Entity to <b>Slightly decrease</b> the <b>distance</b> between sacrificial hooks appearing in the world.<br><li>Stacks.</li>","name":"Moldy Oak","flavor":"\\"A damp and decaying piece of oak replete with mold.\\"","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"Calls upon The Entity to <b>Moderately decrease</b> the <b>distance</b> between sacrificial hooks appearing in the world.<br><li>Stacks.</li>","name":"Rotten Oak","flavor":"\\"A decomposing piece of oak in which strange markings have been etched.\\"","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"Calls upon The Entity to <b>Considerably decrease</b> the <b>distance</b> between sacrificial hooks appearing in the world.<br><li>Stacks.</li>","name":"Putrid Oak","flavor":"\\"A ruined piece of oak oozing with a black putrescent liquid.\\"","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"Grants the ability to <b>kill the last Survivor</b> by your hand during the next trial.<br><li>Secret.</li>","name":"Cypress Memento Mori","flavor":"\\"You worked well, the last one is yours.\\"","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"Grants the ability to <b>kill one Survivor</b> who has reached the <b>second Hook State</b> by your hand during the next trial.<li>Secret.</li>","name":"Ivory Memento Mori","flavor":"\\"Grant me the favor of killing one.\\"","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"Grants the ability to <b>kill all Survivors</b> who have reached the <b>second Hook State</b> by your hand during the next trial.<li>Secret.</li>","name":"Ebony Memento Mori","flavor":"\\"I could swear It spoke to the beast. It came to a halt, as if calmly listening to the leaves rustling, and then… grinned.\\"","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"All Survivors start the trial separated.<br><li>Secret.</li>","name":"Shroud of Separation","flavor":"\\"A thin black shroud which is falling apart.\\"","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/en/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Unlocks potential in one\'s aura reading ability. Each time a generator is fully repaired, Survivors within <span class=\\"Highlight1\\">{0} meters</span> of the completed generator will be revealed for <span class=\\"Highlight2\\">{1} seconds</span>.<br>When the last generator is fully repaired, all the Survivors\' auras are revealed for <span class=\\"Highlight3\\">{2} seconds</span>.","name":"Bitter Murmur","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"Unlocks potential in one\'s aura reading ability. Reveals dying Survivors\' auras when standing within a <span class=\\"Highlight1\\">{0} meter</span> range.","name":"Deerstalker","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"Your horrifying emanation strikes at a supernaturally long distance. Your Terror Radius is increased by <span class=\\"Highlight1\\">{0}%</span>. Gain <span class=\\"Highlight2\\">{1}%</span> more Bloodpoints for actions in the Deviousness category.","name":"Distressing","flavor":"\\"Bask in their fear.\\"","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"Unlocks the stealth ability.<br><br>Standing still for <span class=\\"Highlight1\\">{0} seconds</span> grants you the <b>Undetectable</b> status effect until you move or act again.","name":"Insidious","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"A Hex rooting its power on hope. You are animated by the power of your Hex Totem when the Survivors are on the verge of escaping.<br>Once the exit gates are powered, if there is a Dull Totem remaining on the map, this Hex is applied to it.</br><br>While this Hex is active,<li>Survivors suffer from the <b><i>Exposed</i></b> status effect.</li><li>Your movement speed is increased by <span class=\\"Highlight1\\">{0}%</span></li><br>The Hex effects persist as long as the related Hex Totem is standing.<br>","name":"Hex: No One Escapes Death","flavor":"\\"And the beast became faster and more powerful as if The Entity\'s shadowy whips were lashing at its back.\\"","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"A Hex rooting its power on hope. The false hope of Survivors fills you with excitement and strengthen your Totems. For each Dull and Hex Totem remaining on the map gain a token. <br><li>Gain <span class=\\"Highlight1\\">{0}%</span> more Bloodpoints for actions in the Hunter category for each token.</li><li>Survivors\' cleansing speed is reduced by <span class=\\"Highlight2\\">{1}%</span> for each token.</li><li>Gain a notification when someone starts working on a Hex Totem.</li><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>","name":"Hex: Thrill of the Hunt","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"Your fervent care of the hooks found in the basement have aroused The Entity\'s interest. The basement hooks grant the following bonuses:<br><li><span class=\\"Highlight1\\">{0}%</span> faster Entity progress.</li><li><span class=\\"Highlight2\\">{1}%</span> increased difficulty on escape attempts.</li><li><span class=\\"Highlight3\\">{2}%</span> increased penalty on escape fails.</li>","name":"Monstrous Shrine","flavor":"\\"Then you will know that there is no escape. When hanging in the depths, you face the dark one.\\"","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"You know where to hit to make them bleed. Wounds inflicted by successful <i>basic attacks</i> cause the <b>Mangled</b> and <b>Hemorrhage</b> status effects. <b>Hemorrhage</b> <span class=\\"Highlight\\">{0}</span> increases the Survivor\'s bleeding frequency.<br>The <b>Hemorrhage</b> effect caused by <i>Sloppy Butcher</i> is removed once the Survivor is fully healed.","name":"Sloppy Butcher","flavor":"\\"It\'s in its sadistic nature. There is no swift kill as it delights in the obscene spectacle of our agonizing suffering.\\"","tiers":[["slightly"],["moderately"],["considerably"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"The crows found in the world can communicate with you directly. <span class=\\"Highlight1\\">{0}%</span> of the time, cawing crows give you a visual cue when you are within a <span class=\\"Highlight2\\">{1} meter</span> range.<br><i>Spies From The Shadows</i> has a cooldown of <span class=\\"Highlight3\\">{2} seconds.</span> ","name":"Spies from the Shadows","flavor":"\\"In the shadows they torment, scarring our minds with each scream.\\"","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"You recuperate faster from missed attacks made with your main weapon. The cooldown after missed <i>basic attacks</i> is reduced by <span class=\\"Highlight1\\">{0}%</span>.","name":"Unrelenting","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"You have a rudimentary understanding of The Entity\'s voice. Sporadically hear The Entity\'s whisper when standing within a <span class=\\"Highlight1\\">{0} meter</span> range of a Survivor.","name":"Whispers","flavor":"\\"It\'s unclear as to the motivations of The Fog, but it is undeniable that it often takes the beast\'s side.\\" -Notebook","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"You are acutely sensitive to the breathing of your prey. Breathing of Survivors in pain is <span class=\\"Highlight1\\">{0}%</span> louder and regular breathing is <span class=\\"Highlight2\\">{1}%</span> louder.","name":"Stridor","flavor":"“If you don’t stop and catch your breath… she will.”","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"Their courage fades in the face of undeniable mortality.<br>For each injured, dying, or hooked Survivor, all Survivors receive a penalty of <span class=\\"Highlight1\\">{0}%</span> to a maximum of <span class=\\"Highlight1\\">{1}%</span> to repair, sabotage and Totem-cleansing speeds.","name":"Thanatophobia","flavor":"\\"She plays with us and revels in our pain.\\"","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"Unlocks potential in one\'s aura reading ability. The auras of Survivors who are healing or being healed are revealed to you when they are within a <span class=\\"Highlight1\\">{0} meter</span> range.","name":"A Nurse\'s Calling","flavor":"“Still attached to the fragments of her past life, she is drawn to those in need of help.”","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"Your presence alone instills great fear. Survivors within your Terror Radius have a <span class=\\"Highlight1\\">{0}%</span> greater chance of triggering Skill Checks when repairing or healing. Triggered Skill Checks\' success zones are reduced by <span class=\\"Highlight2\\">{1}%</span>.","name":"Unnerving Presence","flavor":"\\"Its presence befalls us.\\"","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"Your great strength allows you to shred through your prey\'s defenses. Destroy dropped <b>pallets, breakable walls, and generators</b> <span class=\\"Highlight1\\">{0}%</span> faster.","name":"Brutal Strength","flavor":"\\"It\'s more than muscles. A dark power motivates the beast.\\"","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"You get excited in anticipation of hooking your prey. Increases your movement speed while transporting bodies by <span class=\\"Highlight1\\">{0}%</span>. While transporting a body, your Terror Radius is increased by <span class=\\"Highlight2\\">{1} meters</span>.","name":"Agitation","flavor":"\\"At some point, the excitement of hooking one of us becomes more important than the desire to kill us.\\"","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"Your acute tracking ability allows you to hone in on disturbances left by running Survivors.<br>Scratch marks left by Survivors will spawn <span class=\\"Highlight\\">{0}</span> closer together.","name":"Predator","flavor":"\\"Never stop moving and hope you\'re always two steps ahead of the beast.\\" -Notebook","tiers":[["slightly"],["moderately"],["considerably"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"Like a hunting scent hound, you smell traces of blood at a great distance. Fresh blood marks are <span class=\\"Highlight1\\">considerably</span> more discernible than normal and can be tracked for <span class=\\"Highlight2\\">{0} seconds</span> longer than normal.","name":"Bloodhound","flavor":"\\"Pebbles shimmering in the moonlight; my life drips down in a trail so easy to follow.\\"","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"You have a keen vision in the darkness of the night. Your field of view is <span class=\\"Highlight2\\">{0} degrees</span> wider than normal.<br><i>Does not stack with other FOV increases.</i>","name":"Shadowborn","flavor":"\\"Shining in the darkest dark, his eyes pierce the night and sting your soul.\\"","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"You are resilient to pain. You reduce the duration of <b>pallet stuns</b> by <span class=\\"Highlight1\\">{0}%</span>.","name":"Enduring","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"Unlike other beasts of The Fog, you have adapted to light. You are immune to Blindness caused by Flashlights, firecrackers, flashbangs, and blast mines. Survivors that attempt blinding you have their aura revealed for <span class=\\"Highlight1\\">{0} seconds.</span>","name":"Lightborn","flavor":"\\"These monsters… they adapt! They emerge with strange new abilities.\\" -Vigo\'s Journal","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"When a generator is repaired to <span class=\\"Highlight1\\">{0}%</span> repair progress, it triggers a loud noise notification and you are granted the <b>Undetectable</b> status effect for <span class=\\"Highlight2\\">{2} seconds</span>.","name":"Tinkerer","flavor":"\\"The Hillbilly makes impressive tools out of scraps. Tools aimed at maiming us in creative ways...\\" -Notebook","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"You become <b>obsessed</b> with one Survivor.<br>Earn a token for each successful <i>basic attack</i> that is not dealt to the Obsession. <br>Each token grants a stackable <span class=\\"Highlight1\\">{0}%</span> decreased successful <i>basic attack</i> cooldown, you can earn up to <span class=\\"Highlight2\\">{1}</span> tokens.<br>Hitting your Obsession with a <i>basic attack</i> will cause you to lose <span class=\\"Highlight3\\">{2}</span> tokens. <br>You can no longer gain tokens if your Obsession is sacrificed or killed.<br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li>","name":"Save the best for last","flavor":"\\"Death has come to your little town, sheriff.\\" -Dr. Sam Loomis","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"You become <b>obsessed</b> with one Survivor.<br>Every time you chase your Obsession and let them escape, you receive a token up to a maximum of {0} tokens.<br>Each token increases your movement speed by <span class=\\"Highlight1\\">{1}%</span>.<br>Performing a <i>basic attack</i> or <i>Special Attack</i> spends one token.<br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li>","name":"Play with your food","flavor":"“You\'ve fooled them, haven\'t you Michael? But not me.” -Dr. Sam Loomis","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"You become <b>obsessed</b> with one Survivor.<br>Your Obsession gains a <span class=\\"Highlight1\\">{0}%</span> action speed bonus to unhooking and healing other Survivors.<br>Each time you hook a Survivor other than the Obsession, if the Obsession is alive, gain a token.<br>If the Obsession is alive, all Survivors who are not the Obsession get <span class=\\"Highlight2\\">{1}%</span> penalty to repair, healing and sabotage speeds for each token.<br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li>","name":"Dying Light","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"A Hex that hinders one\'s aura reading ability. Hitting a Survivor with a <i>basic attack</i> while the Hex Totem is active applies the <b>Blindness</b> status effect. This effect applies to the last <span class=\\"Highlight1\\">{0}</span> Survivors hit.<br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>","name":"Hex: The Third Seal","flavor":"“She touched your skin, you bear the witch\'s mark!”","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"A Hex that affects all Survivors\' generator repairs progress. All generators are affected by <i>Hex: Ruin</i>. While a generator is not being repaired by a Survivor, it will immediately and automatically regress repair progress at <span class=\\"Highlight1\\">{0}%</span> of the normal regression speed.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br>","name":"Hex: Ruin","flavor":"“A curse is upon you. It will be your ruin.”","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"A Hex rooting its power on hope. The false hope of Survivors ignites your hunger. When a Survivor is rescued from a hook at least <span class=\\"Highlight1\\">24 meters</span> away, Devour Hope receives a token.<br><li><span class=\\"Highlight3\\">2 Tokens</span>: Gain a <span class=\\"Highlight2\\">{0}%</span> <b><i>Haste</i></b> status effect,<span class=\\"Highlight3\\">10 seconds</span> after hooking a Survivor, for a duration of <span class=\\"Highlight3\\">10 seconds</span>.</li><li><span class=\\"Highlight3\\">3 Tokens</span>: Survivors suffer from the <b><i>Exposed</i></b> status effect.</li><li><span class=\\"Highlight2\\">5 Tokens</span>: Grants the ability to kill Survivors by your own hand.</li><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br>","name":"Hex: Devour Hope","flavor":"“If you do nothing, you have their blood on your hands. If you save them, her hunger grows.“","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"Your presence alone instills great fear. Survivors within your Terror Radius suffer from inefficiency.<br>Affected Survivors\' item consumption rates are increased by <span class=\\"Highlight1\\">{0}%</span>.","name":"Overwhelming Presence","flavor":"\\"Shit!! I dropped the gauze!\\"","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"Meticulous in your approach, terrifying in your application.<br>While in a chase, your Terror Radius is increased by <span class=\\"Highlight1\\">{0} meters</span>. Otherwise, your Terror Radius is decreased by <span class=\\"Highlight2\\">{0} meters</span> and your field of view is increased by <span class=\\"Highlight3\\">{1} degrees</span>.<br><i>Field of view gains do not stack.</i>","name":"Monitor & Abuse","flavor":"\\"It\'s time for your treatment!\\" -The Doctor","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"You are fuelled by your hate for progress.<br>Overcharge a generator by performing the <b>Damage Generator</b> action. The next Survivor interacting with that generator is faced with a <span class=\\"Highlight1\\">tremendously</span> difficult Skill Check. Failing the Skill Check results in an additional <span class=\\"Highlight2\\">{0}%</span> loss of progress.<br>Succeeding the Skill Check grants no progress but prevents the generator explosion.","name":"Overcharge","flavor":"\\"It is a trap. But a trap one must step in…\\" -The Doctor","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"Your lust for a kill is so intense that your connection with The Entity is momentarily lost, making you totally unpredictable.<br><br>Grants the <b>Undetectable</b> status effect after gaining Bloodlust Tier I. The status effect is removed once you lose Bloodlust.<br><br><li>Gain <span class=\\"Highlight1\\">{0}%</span> more Bloodpoints for actions in the Hunter Category.</li>","name":"Beast of Prey","flavor":"\\"Where did she go?\\"","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"Unlocks potential in one\'s aura reading ability. Survivors\' auras are revealed to you for <span class=\\"Highlight1\\">{0} seconds</span> when they enter the basement and you are more than <span class=\\"Highlight2\\">{1} meters</span> away from the basement entrance.<br><i>Territorial Imperative</i> can only be triggered once every <span class=\\"Highlight3\\">{2} seconds</span>.","name":"Territorial Imperative","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey\'s attention. Survivors receive a <span class=\\"Highlight1\\">{0}%</span> regression penalty when missing a Skill Check while healing or repairing.<br>Each time a Survivor is hooked, Huntress Lullaby grows in power. It affects healing and repairing Skill Check warnings:<br><li><b>1 to 4 Tokens:</b> Time between the Skill Check warning sound and the Skill Check becomes shorter.</li><li><b>5 Tokens:</b> No Skill Check warning.</li><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>","name":"Hex: Huntress Lullaby","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"The trauma caused by your brutal attacks makes crying for help painfully difficult.<br>Survivors put into the dying state by your basic attacks are not revealed to other Survivors when they are standing outside of a <span class=\\"Highlight1\\">{2}-meter</span> range.<br>Survivors put into the dying state by your basic attacks crawl <span class=\\"Highlight2\\">{1}% slower</span> for <span class=\\"Highlight3\\">{0} seconds</span>.<br>During this time, Survivors are affected by the <b>Blindness</b> status effect.","name":"Knock Out","flavor":"\\"Oh, that gun\'s no good. The old way… with a sledge! You see, that way\'s better. They die better that way.\\" -Nubbins Sawyer","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"A deep bond with The Entity unlocks potential in one\'s aura reading ability. After hooking a Survivor, all other Survivors\' auras are revealed to you for <span class=\\"Highlight1\\">{0} seconds</span> when they are further than <span class=\\"Highlight2\\">{1} meters</span> from the hook.<br><li>Each time that a Survivor is hooked for the first time, gain a <span class=\\"Highlight3\\">{2}%</span> stackable bonus to all Bloodpoint gains up to a maximum of <span class=\\"Highlight4\\">{3}%</span>.<br>The bonus Bloodpoints are only awarded post-trial.</li>","name":"Barbecue & Chili","flavor":"\\"I just can\'t take no pleasure in killing. There\'s just some things you gotta do. Don\'t mean you have to like it.\\" -Drayton Sawyer","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"Your vicious attacks make Survivors drop their item on impact. The lost item will be consumed by The Entity after <span class=\\"Highlight1\\">{0} seconds</span> if it is not picked up.<br>Reveal  items on the ground within <span class=\\"Highlight2\\">{1} meters</span> with a white aura. The aura of items on the ground fade to red until they are consumed by The Entity.","name":"Franklin\'s Demise","flavor":"\\"Sally, I hear something. Stop! Stop!\\" -Franklin","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"The increased pressure of losing your prey fills you with anger and gives you unsuspected motivation. Each time the Survivors complete repairs on a generator, Fire Up grows in power.<br><li>For each generator completed, gain a <span class=\\"Highlight1\\">{0}%</span> stackable buff that grants a speed bonus to picking up, dropping, vaulting, damaging generators, and breaking pallets for the remainder of the trial.</li>","name":"Fire Up","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"You become <b>obsessed</b> with one Survivor. Each time you hit your Obsession with a <i>basic attack</i>, you increase the opening time of the exit gates by <span class=\\"Highlight1\\">{0} seconds</span> up to a maximum of <span class=\\"Highlight2\\">{1} additional seconds</span>.<br>The Obsession is not affected by <i>Remember Me.</i><br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li>","name":"Remember Me","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"As soon as an exit gate is opened, Blood Warden is activated. The auras of any Survivors located within Exit areas are revealed to you. <br>Once per match, hooking a Survivor while Blood Warden is active calls upon The Entity to block both Exits for all Survivors for <span class=\\"Highlight1\\">{0} seconds</span>.","name":"Blood Warden","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"Your ingenious modifications to hooks alert you of tampering.<br><li>Gain a notification when a Survivor begins sabotaging a hook.</li><li>While carrying a Survivor, see the aura of any Survivor within <span class=\\"Highlight1\\">{0} meters</span> of a hook.</li>","name":"Hangman\'s Trick","flavor":"\\"No excuses, no equivocations… No crying.\\" -Amanda Young","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"Unlocks potential in one\'s aura reading ability. Any regressing generator will be highlighted by a white aura. If the regression is interrupted on a generator, it will be highlighted by a yellow aura for <span class=\\"Highlight1\\">{0} seconds</span>.<br>Noises created by generator repairs are audible at an additional <span class=\\"Highlight2\\">{1} meters</span>.","name":"Surveillance","flavor":"\\"Are you gonna behave?\\" -Amanda Young","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"When a Survivor rescues another from a hook at least <span class=\\"Highlight1\\">{0} meters</span> away from you, <i>Make your Choice</i> causes the Survivor to scream and applies the <b><i>Exposed</i></b> status effect to them for <span class=\\"Highlight2\\">{1} seconds</span>.<br><i>Make your Choice</i> has a cooldown of <span class=\\"Highlight3\\">{2} seconds</span>. ","name":"Make your Choice","flavor":"\\"You\'d be surprised what tools can save a life.\\" -Amanda Young","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"Your powerful hold on the Survivors causes escapes to be nearly impossible. Effects of Survivor struggling are reduced by <span class=\\"Highlight1\\">{0}%</span>. Time to struggle out of your grasp is increased by <span class=\\"Highlight2\\">{1}%</span>.","name":"Iron Grasp","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"Your presence alone instills great fear. Survivors within your Terror Radius have a <span class=\\"Highlight1\\">{0}%</span> penalty to healing progress speed.<br>","name":"Coulrophobia","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"A deep bond with The Entity unlocks great strength. After hooking a Survivor, the next generator you damage instantly loses <span class=\\"Highlight1\\">{0}%</span> of its progress. Normal generator regression applies after the Damage Generator action.<br><i>Pop Goes the Weasel</i> is active for <span class=\\"Highlight1\\">{1} seconds</span> after the Survivor is hooked.","name":"Pop Goes the Weasel","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"Your vault speed is <span class=\\"Highlight1\\">{0}%</span> faster.<br>Performing a vault action calls upon The Entity to block that vault location for <span class=\\"Highlight1\\">{1} seconds</span>.<br>Only 1 vault location may be blocked in this way at any time. The vault location is blocked only for Survivors. <br>Does not affect pallets.","name":"Bamboozle","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"Each pallet you break magnifies the wrath of The Entity.<br>After breaking <span class=\\"Highlight1\\">{0} pallets</span>, the next time you are stunned by a pallet, The Entity will instantly break the pallet.<br>You still suffer from the stun effect penalty.","name":"Spirit Fury","flavor":"“Fury is her blood.”","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"Two trapped Hex Totems will spawn in the trial.<br>When either one of the two trapped Hex Totems is cleansed by a Survivor, all Survivors suffer from the <span class=\\"Highlight3\\">Exposed status effect</span> for <span class=\\"Highlight1\\"> {0} seconds</span>. <br>The remaining trapped Hex Totem immediately becomes a Dull Totem.<br>","name":"Hex: Haunted Ground","flavor":"“Her home became profane.”","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"You become <b>obsessed</b> with one Survivor.<br>Each time a generator is completed, your Obsession sees your aura for <span class=\\"Highlight1\\"> {0} seconds</span>.<br>Each time a generator is completed, all Survivors\' locations are revealed to you for <span class=\\"Highlight2\\"> {1} seconds</span>.<br>Once all generators are completed, the Obsession has the <span class=\\"Highlight3\\">Exposed </span>status effect and you can <span class=\\"Highlight3\\">kill</span> your Obsession.<br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li>","name":"Rancor","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"Any generator within a range of <span class=\\"Highlight1\\">{0} meters</span> that is being repaired by two or more Survivors is marked by a yellow aura. When the generator is first highlighted, Discordance triggers a loud noise notification on the generator. After the generator is no longer within range or is no longer being repaired by two or more Survivors, the aura remains for another <span class=\\"Highlight2\\">4 seconds</span>.<br>","name":"Discordance","flavor":"\\"Smartasses get killed. We always see to that.\\" -The Legion","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"While carrying a Survivor, you suffer no cooldown for missed <i>basic attacks</i> and successfully hitting another Survivor with a <i>basic attack</i> will pause the carried Survivor’s wiggle timer for <span class=\\"Highlight1\\">{0} seconds</span>.<br>","name":"Mad Grit","flavor":"“There’s no getting out of this now. We’re too good at it.” -The Legion","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"You open lockers <span class=\\"Highlight1\\">{0}%</span> faster.<br><br>Survivors who exit lockers suffer from the Exposed status effect for <span class=\\"Highlight1\\">{2} seconds</span> and scream, revealing their location for <span class=\\"Highlight1\\">{1} seconds</span>.<br>","name":"Iron Maiden","flavor":"“This is no place for cowards.” -The Legion","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"Your prayers invoke a dark power that meddles with the Survivors’s chances of survival. <span class=\\"Highlight1\\">{0} generators</span> located furthest from you are blocked by The Entity for <span class=\\"Highlight1\\">{1} seconds</span> at the start of the trial.<br>Survivors cannot repair these generators for the duration. Affected generators are highlighted by a white aura.<br>","name":"Corrupt Intervention","flavor":"“It shall be known across the land that the Gods curse the unfaithful.” (The Tablet of Adiris, 3.7.)","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"The cries of the unfaithful makes your heart leap.<br>Any Survivors that are within your Terror Radius while another Survivor is put into the dying state will yell and reveal their location to you for <span class=\\"Highlight1\\">{0} seconds</span>.","name":"Infectious Fright","flavor":"“Horror overcomes the heart of infidels who cry at the feet of the fallen.” (Hymn of Praise, 11. 4)","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"The display of your powers creates a whirlwind of panic that spreads throughout the land.<br><br>You become obsessed with one Survivor. Hitting the Obsession with a <i>basic attack</i> transfers your Terror Radius to the Obsession for <span class=\\"Highlight2\\">{1} seconds</span>, and sets its radius to <span class=\\"Highlight1\\">{0} meters</span>. You are granted the <b>Undetectable</b> status effect for the duration.<br><br>The Survivor with the transferred Terror Radius is also considered to be \\"inside the Terror Radius\\" for other purposes.<br><br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br>","name":"Dark Devotion","flavor":"“And terror shall take hold of a defiant non-believer, who shall falsely announce my arrival.” (The Tablet of Adiris, 48.9)","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"Your keen senses are sharpened in the dark realm of The Entity.<br><br>Unlocks potential in one\'s aura reading ability. Any Survivor performing a rushed action within <span class=\\"Highlight1\\">48 meters</span> from your location will have their aura revealed for <span class=\\"Highlight2\\">{0} seconds</span>.<br><br><i>I\'m All Ears</i> can only be triggered once every <span class=\\"Highlight3\\">{1} seconds</span>.<br>","name":"I\'m All Ears","flavor":"“There is no need to worry. I’ve been preparing my whole life for this.\\" –The Ghost Face","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"Your dark designs and shrewd composure rouse The Entity.<br><br>After picking up a Survivor, all Generators not being repaired by Survivors are blocked by The Entity and cannot be repaired for the next <span class=\\"Highlight1\\">{0} seconds</span>. Affected generators are highlighted by a white aura.<br><br><i>Thrilling Tremors</i> can only be triggered once every <span class=\\"Highlight2\\">{1} seconds</span>.<br>","name":"Thrilling Tremors","flavor":"\\"The night assists me and it’s endless here.\\" –The Ghost Face","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"You become <b>obsessed</b> with one Survivor. You lurk in the shadows, eliminating your victims one by one. When your Obsession is hooked, <i>Furtive Chase</i> receives a token, up to a maximum of <span class=\\"Highlight1\\">{0} tokens</span>.<br><br>Each token decreases your Terror Radius by <span class=\\"Highlight2\\">{1} meters</span> while in a chase.<br><br>When a Survivor rescues the Obsession from a hook, the rescuer becomes the Obsession. You lose all your tokens if the Obsession is sacrificed or killed.<br><br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br>","name":"Furtive Chase","flavor":"\\"You have no idea what I have planned for you. It’ll be in the news for weeks: I’ll make sure of it.\\" –The Ghost Face","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"Your eerie presence charges the air and interferes with technology.<br><br>Putting a Survivor into the dying state with a <i>basic attack</i> causes all generators within a <span class=\\"Highlight1\\">{0} meter radius</span> instantly to explode and begin regressing. Generators affected by Surge immediately lose <span class=\\"Highlight2\\">{1}%</span> of their progress.<li><i>Surge</i> can only be triggered once every  <span class=\\"Highlight3\\">{2} seconds</span>.</li><br>","name":"Surge","flavor":"“The creature appears to have some unknown influence over electricity and nearby electronics.” -Hawkins National Laboratory","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"Your distressing presence drains and weakens your prey.<br><br>While repairing generators, Survivors are afflicted by the <b>Exhausted</b> status effect.<br><br>Any existing <b>Exhausted</b> status effect timers are paused while the Survivor is repairing a generator. After ending the repair action, the Survivor is afflicted by the <b>Exhausted</b> status effect for <span class=\\"Highlight2\\">{1} seconds</span>.<br>","name":"Mindbreaker","flavor":"\\"The specimen\'s apparent telepathic ability can evoke feelings of dread and fatigue in nearby individuals.\\" -Hawkins National Laboratory","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"Your ties to the otherworldly manifest when your prey attempts to get away.<br><br>Every time a generator is completed, all windows and vault locations within a <span class=\\"Highlight1\\">{0} meter radius</span> of the completed generator are blocked for all Survivors for the next <span class=\\"Highlight2\\">{1} seconds</span>. <br><br>You see the aura of the vault locations blocked by <i>Cruel Limits</i> for the duration.<br>","name":"Cruel Limits","flavor":"“The specimen seems to be able to affect the state of nearby objects, as if they existed in some other form within a dimension alternate to our own.” -Hawkins National Laboratory","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"Unlocks potential in one\'s aura reading ability. You are mentally alert and aware of key points on the battlefield.<br><br>The auras of all pallets, breakable walls, and vault locations are revealed to you within a <span class=\\"Highlight1\\">{0} meter</span> range.<br>","name":"Zanshin Tactics","flavor":"“Within your enemy’s strength is weakness.” -Renjiro’s Doctrine 12:5","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"The agony of one is inflicted on others.<br><br>When hooking a Survivor, all other injured Survivors suffer from the <span class=\\"Highlight1\\">Hemorrhage</span> and <span class=\\"Highlight1\\">Exhaustion</span> status effect for <span class=\\"Highlight2\\">{0} seconds</span>.<br><br><i>Blood Echo</i> has a cooldown of <span class=\\"Highlight3\\">{1} seconds.</span><br>","name":"Blood Echo","flavor":"“Attack an enemy with precision and their allies will feel it.” -Renjiro’s Doctrine 6:3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"You seek retribution on those who have wronged you. A Survivor who blinds you or stuns you using a pallet or locker becomes your Obsession.<br><br>Anytime a new Survivor becomes the Obsession, they are affected by the <span class=\\"Highlight1\\">Oblivious</span> status effect for <span class=\\"Highlight2\\">{0} seconds</span> and their aura is shown to you for <span class=\\"Highlight3\\">{1} seconds</span>.<br><br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br>","name":"Nemesis","flavor":"“Only a fool would spit in a demon’s face and declare victory.” -Renjiro’s Doctrine 4:9","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"You’ve got an ear for well-oiled gears.<br><br>After hitting a Survivor <span class=\\"Highlight1\\">{0}</span> times with your <i>basic attack</i>, <i>Gearhead</i> activates for <span class=\\"Highlight2\\">{1} seconds</span>.<br><br>While <i>Gearhead</i> is active, each time a Survivor completes a Good Skill Check while repairing, the generator will be revealed by a yellow aura for as long as it is being repaired.<br>","name":"Gearhead","flavor":"\\"Sometimes a man\'s best work is what puts him in the grave.\\" -The prison warden","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"You become <b>obsessed</b> with one Survivor.<br><br>After hooking the Obsession, <i>Dead Man’s Switch</i> activates for the next <span class=\\"Highlight1\\">{0} seconds</span>. <br><br>While activated, any Survivor that stops repairing a generator before it is fully repaired causes The Entity to block the generator until <i>Dead Man’s Switch\'s</i> effect ends. <br><br>Affected generators are highlighted by a white aura.<br><br><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i><br>","name":"Dead Man’s Switch\\t","flavor":"\\"I\'ve seen the look on a man\'s face when he realizes he\'s going to die.\\" -Caleb Quinn","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"A Hex that lashes out upon its destruction. Those who cross you will be punished.<br><br>Any Survivor who cleanses a Dull Totem will suffer from the <b>Oblivious</b> status effect for <span class=\\"Highlight1\\">{0} seconds</span>.<br><br>If any Hex Totem is cleansed, including this one, the auras of all Survivors are revealed for <span class=\\"Highlight2\\">{1} seconds</span>.<br>","name":"Hex: Retribution","flavor":"\\"Bloody fool, you pulled the trigger on yourself.\\" -Caleb Quinn","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"Those who stand in the way of duty will suffer harsh judgment.<br><br>Survivors who take a protection hit are inflicted with the <b>Broken</b> status effect for <span class=\\"Highlight1\\">{0} seconds.</span>","name":"Forced Penance","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"You guide your victims along a path of pain and punishment.<br><br>After kicking a generator, you become <b>Undetectable</b> until the generator stops regressing or a Survivor is injured or put into the dying state by any means. During this time, the generator’s yellow aura is revealed to Survivors.<br><br>This effect can only trigger once every <span class=\\"Highlight1\\">{2} seconds.</span>","name":"Trail of Torment","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"Those whose lives are intertwined in darkness are destined to suffer together.<br><br>When a Survivor heals another Survivor for one health state at least <span class=\\"Highlight1\\">{0} meters</span> away from the Killer, the Survivor performing the healing action will scream, revealing their location and activating <i>Deathbound</i> for the next <span class=\\"Highlight2\\">{1} seconds.</span> During that time, the Survivor will suffer from the <b>Oblivious</b> status effect when further than <span class=\\"Highlight3\\">{2} meters</span> away from the healed Survivor. ","name":"Deathbound","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"After kicking a generator, for the next <span class=\\"Highlight1\\">{0} seconds</span>, the first Survivor that interacts with it will scream, revealing their location for <span class=\\"Highlight2\\">{1} seconds</span>, and becoming afflicted with the <b>Exposed</b> status effect for <span class=\\"Highlight3\\">{2} seconds</span>.<br><br><i>Dragon’s Grip</i> has a cooldown of <span class=\\"Highlight4\\">{3} seconds</span>.<br>","name":"Dragon’s Grip","flavor":"“Such potential in this compound... even the slightest trace causes unnatural effects.” —Journal of Talbot Grimes","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"A Hex that gains The Entity’s favor when blood is spilled.<br><br>When a Survivor is hit with a <i>basic attack</i>, pallets within <span class=\\"Highlight1\\">{0} meters</span> of your location are held in place by The Entity for <span class=\\"Highlight2\\">{1} seconds</span>. These pallets cannot be pulled down.<br><br><i>Hex: Blood Favor</i> has a cooldown of <span class=\\"Highlight3\\">{2} seconds</span>.<br>","name":"Hex: Blood Favor","flavor":"“It would be no leap of the imagination to suggest that the trials are a biological response of sorts.” —Journal of Talbot Grimes","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"While <i>Hex: Undying</i> is active, Survivors within <span class=\\"Highlight1\\">{0} meters</span> of any Dull Totem have their aura revealed.<br><br>When another Hex Totem is cleansed, that Totem\'s Hex transfers to the Hex: Undying Totem, deactivating Hex: Undying. Any tokens the transferred Hex had are transferred as well.","name":"Hex: Undying","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"You protect what little you have and are attentive to any disturbance of your stockpiles.<br><br>Survivors reveal their location when they interact with a chest or when they pick up an item within <span class=\\"Highlight1\\">{0} meters</span> of your location.<br><br>The trial begins with up to <span class=\\"Highlight1\\">{1}</span> additional chests in the environment.","name":"Hoarder","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"Life has been difficult for you, so you’ll make it difficult for others.<br><br>When you damage a generator, up to <span class=\\"Highlight1\\">{0}</span> other random generators also begin regressing.<br><br>If the affected generators are being repaired, any Survivors repairing them receive a difficult Skill Check.<br><br><i>Oppression</i> has a cooldown of <span class=\\"Highlight2\\">{1}</span> seconds. <br>","name":"Oppression","flavor":"\\"Damn them as they would damn us.\\" —Charlotte Deshayes","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"As the end nears, you go in for the kill.<br><br>Each time a generator is completed, Coup de Grâce grows in power. Gain a token.<br><br>Consume one token to increase the distance of your next lunge attack by <span class=\\"Highlight1\\">{0}%</span>.","name":"Coup de Grâce","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"Your unmatched showmanship dazzles all.<br><br>While carrying a Survivor, any other Survivors within your Terror Radius suffer from the <b>Exposed</b> status effect.<br>The effect persists for <span class=\\"Highlight1\\">{0} seconds</span> on Survivors who leave your Terror Radius, as well as those within the radius when you hook or release the carried Survivor.<br><i>Starstruck</i> has a cooldown of <span class=\\"Highlight2\\">{1} seconds</span> once a Survivor is no longer carried.<br>","name":"Starstruck","flavor":"\\"Enjoy this moment, few get so close.\\" — Ji-Woon Hak","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"A Hex that ensures those lesser than you are properly herded.<br><br>The Entity blocks a window for<span class=\\"Highlight1\\"> {0} seconds</span> after a Survivor performs a <b>rushed</b> vault through it.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br>","name":"Hex: Crowd Control","flavor":"\\"You have no control. People like you never did.\\" — Ji-Woon Hak","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"You\'re not going to let just anyone into the VIP room.<br><br>After hooking a Survivor for the first time, <i>No Way Out</i> gains a token.<br>When the last generator is repaired, The Entity blocks both exit gate switches for <span class=\\"Highlight1\\">{0} seconds</span>, plus an additional  <span class=\\"Highlight2\\">{1} seconds</span> for each token in your possession.<br>","name":"No Way Out","flavor":"\\"That sound when you bleed...let me hear it again.\\" — Ji-Woon Hak","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"You\'ve been designed to track down and eliminate targets.<br><br>At the start of the trial, the auras of all Survivors are revealed to you for <span class=\\"Highlight1\\">{0} seconds.</span><br><br><span class= \\"FlavorText\\">\\"...it knows what it wants and won\'t stop till it gets it.\\" —Carlos Oliveira<\\\\span>","name":"Lethal Pursuer","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"You know how to brutalize one member of a team to cause a panic.<br><br>Whenever a healthy Survivor becomes injured by any means, all injured Survivors suffer from the <b>Oblivious</b> status effect for <span class=\\"Highlight1\\">{0} seconds</span><br><I>Hysteria</i> can only trigger once every <span class=\\"Highlight2\\">{1} seconds.</span><br><br><span class= \\"FlavorText\\">\\"Sorry I got a little jumpy there. Didn\'t know quite what to expect.\\" —Robert Kendo","name":"Hysteria","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"The NE-α parasite provides you with the intelligence and awareness needed to set a trap.<br><br>After kicking a generator, its aura is highlighted in yellow.<br><li>Whenever a Survivor enters the dying state, every affected generator explodes, losing <span class=\\"Highlight1\\">{0}%</span> worth of progress and starts to regress.</li><li>Any Survivor repairing a generator when it explodes will scream and suffer from the <b>Incapacitated</b> status effect for <span class=\\"Highlight2\\">{1} seconds</span>.</li><br><i>Eruption</i> has a cooldown of <span class=\\"Highlight3\\">{2} seconds.</span><br><br><span class= \\"FlavorText\\">\\"It can use weapons?\\" —Jill Valentine","name":"Eruption","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/en/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Evan MacMillan idolized his father. It wasn’t just that he was heir to a great fortune, it was the way he ran the estate. Raised under his firm hand, Evan had taken to running the workforce with an iron fist. Production was always high and the MacMillan Estate prospered under father and son. As Archie MacMillan’s mental health slowly degenerated, Evan protected him from the herd who wanted a piece of the fortune. No matter what his father asked of him, Evan would do.<br><br>When Archie MacMillan finally snapped, Evan became his enforcer in what would become known as the worst mass murder in modern history. They never proved that Evan lead over a hundred men into those dark tunnels before detonating the explosives and sealing them to their fate. The tale of the MacMillan Estate is a tale of wealth and power gone very wrong. How many victims fell to the hands of father and son is unknown. No record was ever made of what became of Evan MacMillan. His father is another unsolved puzzle, found in the basement of his own warehouse - dead and abandoned.<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"Philip Ojomo came to this country without anything other than hope for a new beginning. He was happy as he got offered a job at Autohaven Wreckers. A small scrap yard where bribed cops turned a blind eye on the somewhat shady business that took place. Ojomo didn’t care. He had seen criminal activity up close in his homeland, and as long as he didn’t get involved, he let things be. He just fixed cars and handled the crusher. Something he did really well. A car went in, a small, metallic cube came out.<br><br>It was not until one gloomy day that he, just by accident, saw some blood coming from one of the un-crushed cars. As he opened the trunk he found a young man, gagged with tied hands and panic filled eyes. Ojomo freed the man who managed to run ten feet before Ojomo’s boss stopped him and slit his throat. As Ojomo demanded answers he was explained that he’d been nothing more than a simple executioner as more or less every car had a soul in them. This was a \\"service\\" the scrap yard provided to certain \\"clients\\". Ojomo snapped and went ballistic. He threw his boss in the crusher and let it slowly compress, as the head stuck out, Ojomo grabbed it and pulled head and spine out of the body. Then he left, and was never seen again.<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"The son of wealthy landowners Max and Evelyn Thompson, this unnamed boy was an unwanted child born to savage parents. Hideously disfigured, he was shut away from society. So ashamed they were of their son, they bricked him into a room and fed him through a hole in the wall. When the boy escaped, he took his revenge savagely and terribly, slaughtering the parents who had tortured him instead of raising him.<br><br>After the deed was done, he continued to live his life at the farm, taking out his deranged violence on the animals that were allowed to run free. As he finally broke free from his shackles, he ran through the cornfields, chasing and slaughtering whatever he could find. They never found the bodies of Max and Evelyn, but they did find tortured and disemboweled animals, all over the farm. Coldwind Farm was quickly settled and the land split up and sold off. There was never a buyer for the farmhouse. Perhaps because of that sound of a chainsaw you could hear throughout those hot summer nights.<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"Sally Smithson came to town with dreams of children’s feet and laughter in a wooden home built by her husband Andrew. And one day Andrew’s foreman had to pay Sally a visit, forever changing her life. With no other option, Sally had to find a way but the only employment she could get was at the Crotus Prenn Asylum. She started at the bottom, doing the hard night shift. Over the years, her mind had reached its limits, decades of seeing horrid things that violate the eyes. Finally, she could not take it anymore and concepts of purification emerged inside her. As the morning staff arrived one day in September, they found over fifty patients dead in their beds, and four staff members, also dead. Only Sally had survived the night but her mind was gone, rocking back and forth non-stop. They got her into an ambulance, but that ambulance never reached the hospital. It was found crashed in a nearby wood, all the staff dead and Sally nowhere to be found.","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"As soon as Anna was able to walk, her mother started teaching her how to survive a harsh, solitary life in the northern woods. Living in such an extremely remote and dangerous area required skill and resilience. When sunlight became too dim for productive activities, they would take refuge in their house, a sturdy old cabin constructed to resist the toughest winters. Close to the hearth’s warmth, Anna would rest in her mother’s arms, surrounded by the few wooden toys and masks she had crafted for her. Drifting off to sleep with stories and lullabies, she dreamt happy dreams, ignorant of the events that would soon change everything.<br><br>Anna and her mother were stalking a great elk through the woods. They knew it was dangerous prey, but it had been a particularly difficult winter and they were almost out of food. The specter of starvation frightened them more than any forest creature. Without warning, the elk reared, bellowed and charged at Anna. She was paralyzed with fear as the whole world seemed to shake under the immense beast\'s pounding hooves. The elk was close enough for Anna to see the murderous fury in its eyes when her mother threw herself in its path, axe in hand. A bloodcurdling scream escaped from her lips as the elk impaled her upon its antlers and hoisted her into the air. With all her strength, she brought her axe down on its head again and again while it tried to shake her loose. With a sickening crack, the antlers snapped and Anna\'s mother was free. The beast collapsed.<br><br>Anna was too small to move her mother\'s broken body, so she sat with her in the clearing where she had fallen. To distract her from the dying elk\'s cries, Anna\'s mother held her and hummed her favorite lullaby. They stayed like that, the huntress and the elk getting quieter and colder, until Anna was alone in the silent forest. Eventually she stood up and started the long walk back home.<br><br>Still a child, she knew just enough about life in the frozen forest to survive. She followed her instincts and became one with the wild. She got older and stronger and practiced her hunt. As she grew into a dangerous predator, her humanity became a half-remembered dream.<br><br>She widened her territory and lived off her hunts. She worked her way up through squirrels and hares and mink and foxes. Eventually she grew tired of them and hunted more dangerous animals like wolves and bears. When unsuspecting travelers came through her woods, she discovered her new favorite prey: humans. Unlucky souls who strayed into her territory were slaughtered like any other animal. She liked to collect their tools and colorful garments and especially toys when there were little ones. But she could never bring herself to kill the little girls.<br><br>Girls she would take back to her house, deep in the woods. They were precious, and looking at them woke up something deep in her heart. She craved the closeness of a loved one, a child of her own. Among the pillaged wooden toys, dolls and story books she couldn’t read, the girls would be tied by the neck with a rough and chafing rope fastened firmly to the wall. She couldn’t let them wander off, or they would surely die outside.<br><br>Every time, the girls would waste away and die of cold or starvation or sickness. Every time, it plunged Anna deeper into pain and sorrow and madness. She was compelled to try again, and started raiding the nearest villages to slaughter families and kidnap their daughters. She wore one of the animal masks her mother crafted for her so many years earlier to try to calm the frightened children. Villagers spread the legend of a half-beast lurking in Red Forest: The Huntress, who killed men and ate little girls.<br><br>War eventually came to the forest. German soldiers began to pass through, on the march to attack the collapsing Russian Empire. During these dark times, there were no more travelers. The villagers had abandoned their homes, and no more little ones to be found; only soldiers. Many of them were found with violent axe wounds. Whole groups disappeared mysteriously. Once the war was over, the rumours of The Huntress disappeared with it, engulfed by the Red Forest.","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"Some humans are simply bad seeds. Seeds infused with a distilled and pure form of evil. Michael Myers is one of those seeds. He had no issues with causing the pain of others. Instead, it was exactly what he sought. But even life can be tough on those with minds filled with terror. The difference is just how one goes about to solve those problems.<br><br>For Michael, he had to kill to find some inner peace. As he took his sister’s life, the police found a silent boy dressed as a clown at the scene. When one stumbles upon a growing fire, one does not pour gasoline on it. But this was an action taken by officials that had no idea how it would shape this demon in the boy’s body. Sending Michael to a mental institution was a feeble attempt to save the child. Unsuccessful therapy and nightly screams just made him even more introvert and deranged. People hoped that Michael Myers would end up a parenthesis, soon to be forgotten and buried, a failure that soon were to rot away. But then…he escaped.<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"Lisa Sherwood grew up in a quiet town. The people of the village were kind, and the elders helped settle their disputes and keep the old traditions alive. Lisa was particularly fond of the charms they taught her to draw for safety and good fortune. One night, as she was walking home through the woods, a terrible storm struck without warning. In the slick wet darkness, she lost her footing and struck her head. Slipping in and out of consciousness, she watched dark shapes approach between the trees. Soon they were close enough for her to make out their evil, hungry grins.<br><br>They kept her chained to the wall in a flooded cellar. Through the gloom, she could see others, whose open wounds swarmed with flies. They did not survive long once the cannibals began carving bites from their bodies with their rusted blades, but somehow Lisa persisted. Starved and mutilated, her gaunt arms became loose in their shackles. She pulled, and the metal tore through skin and muscle until she was free. Her flesh oozed viscous yellow pus and bones were visible beneath gangrenous wounds. She could go no further. Delirious, she thought of home; she thought of the elders. She traced the symbols they had taught her. A dark hunger stirred inside her. It yearned for blood. She chose vengeance.<br><br>The police search eventually brought them to the old house in the swamp. Its inhabitants had been dismembered and devoured. The elders’ charms were scrawled in blood on the floor. Lisa’s body was never found.<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"Whether Killers perform their heinous acts by the compulsions of their diseased minds, or if they are forced into them by external pressures, has long been a matter of debate. But for one Killer, nature and nurture are inextricably linked.<br><br>Leatherface kills not from a desire to exert his will over others, to satisfy carnal urges, or even to quiet the voices in his head. He kills because he is scared. Scared that others will hurt him; scared that his family will be displeased with him, scared that their shared willingness to eat human flesh will be discovered.<br><br>He does as he is told, his family loves him and that is all that matters. Outsiders are a threat, and threats need to be dealt with. <br><br>Like those kids that came into the house, uninvited. Walked in like they owned the place. Looked around the house, trying to find out his family’s secrets, no doubt. But Leatherface dealt with them, protected his family, just as he’d been taught.<br><br>He is not just protector, he has many roles, and each role has its own face. He serves dinner, cares for the family, dresses well when they eat. His Grandpa and Ma used to care for them all, but Grandpa is old now and she has been still for a while, so Leatherface and his brothers had to take over. Family is everything to him. Family is security and safety. <br><br>But, even though he did his best, one of the kids got away. He tried to stop her, chasing after her as fast as he could, but she had help: another outsider, driving a truck. The evil trucker killed his brother, ran him over like he was a possum. In a fury, Leatherface leapt at him, the saw ready to avenge his family, but the trucker was too quick. He knocked Leatherface aside and turned his own saw against him. <br><br>As he watched the outsiders driving away, the rage, grief and pain combined with the worry about what would happen to his family now. They would surely return with the police, and the police would take his brothers, his Grandpa. Without them, what would he do? Without their commands, he would wither and die.<br><br>As his world collapsed, Leatherface spun in circles, swinging the saw all around, trying to fight off the myriad external threats that surrounded him.<br><br>Then another feeling overtook him. It came from outside his vision, crawling over his skin with cold dread. He realised that no matter what outsiders could do to him, there was something worse, something bigger that lived in the shadows. He was filled with a terror unlike any he had ever felt before. But it was almost comforting, like the fear he’d felt with his family. The fear of disappointing them.<br><br>He was brought to a place that was familiar but unknowable, and he instinctively knew what he had to do. He couldn’t fail it, the way he had his family. Outsiders would come but he would use his skills to overcome any threats. There would be screaming, but he could make the world quiet again. Until the only sound remaining was the blessed howl of the saw.<br><br>Let the outsiders come.","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"Showing exceptional aptitude in psychology, Herman was handpicked for special training in an advanced neuroscience program located in a secret black site facility in Illinois known as the Léry Memorial Institute, really a front for the CIA. This is where Herman met Dr. Otto Stamper where under his guidance, Herman began to use strange and ever increasingly vicious methods to extract information from prisoners sent to the institute, which was also a covert prison and re-education center for whoever was the USA’s current nemesis. His liberal use of violent electroshock therapy revealed dramatic results and several threats to national security were uncovered.<br><br>Over the years, Herman became known as The Doctor and no one ever questioned if he had even held a medical certificate or even what happened to the prisoners after they had given up their information. It was only after the Léry Memorial Institute went silent for a week that the true horror was finally discovered. The personnel, patients, and prisoners were all found dead with all types of head trauma. All personnel and prisoners\' bodies were accounted for, including Dr. Otto Stamper, but no sign of Herman “The Doctor” Carter.<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"Even while he lived, Freddy Krueger was a creature of nightmare for those who truly knew him. Hiding behind a mask of warmth and friendliness, Freddy\'s actual temperament was known only to his victims. When those victims were finally heard, the parents of Springwood tracked Freddy down and took the law into their own hands. They thought fire had rid them of a monster that night, that their children were finally safe, but evil as strong as his has a way of surviving.<br><br>Years passed, the horror was buried, the victims mercifully forgot. Then, somehow, Freddy returned, and dreams became nightmares once again.<br><br>Freddy focused his anger on those he felt had wronged him, building up to his one true obsession: Nancy Holbrook. But he underestimated her strength and resourcefulness. Together with her friend, Quentin, she managed to weaken Freddy, mutilating him and leaving him for dead once more.<br><br>Death didn\'t want Freddy the first time he encountered it, why did they think it would take him now? He emerged once more, consumed with vengeance. Then he turned his sights on the boy who had blocked his path to Nancy, his number one. <br><br>Freddy invaded Quentin\'s dreams, terrorizing him night after night, until his strength and defenses would be at their lowest. When the time was right, he forced the boy to return to the dark reflection of Badham Preschool. Here he would have his final revenge.<br><br>Freddy stalked the boy through the school\'s halls. He took his time, savoring every moment of the hunt. This was what he enjoyed the most: the smell of their sweat in the air, the ragged gasps of their terrified breath. They were his to play with. <br><br>There was the boy, at the end of a long corridor. Too tired and scared to run anymore? Resigned to his fate? Freddy closed in, arms wide, claws raking the wall. Their tips traced along a pipe, the metallic shrieking only adding to the boy’s apprehension.<br><br>A shower of sparks rained on the ground, and into the liquid that covered the tiled floor. A blue flame blossomed and quickly engulfed the room.<br><br>The boy took flight as Freddy burst from the flames in a fury. Rooms and walls raced past in a blur until they were in Freddy\'s basement. There would be no escape from here.<br><br>Slowly Freddy closed in on the boy. His fear was so strong now that Freddy could almost taste it, but his eyes burned with a defiant hatred that was almost admirable. <br><br>Freddy drew back his claws.<br><br>Then Freddy felt another presence with him; something old, powerful and dark. A miasma enveloped him and the only sensation was a sound like wooden beams flexing and creaking in the distance. The echoing groan of metal crushed against metal. Something arcane and unknowable, half-way between language and pure terror. <br><br>There was a moment of falling and spinning, and then Freddy was back in the school. But not his school. It looked the same, but it felt different. His powers were tempered in some ways and focused in others. The boy had gone for now, but other prey walked the hallways. Some would be inconsequential; others would become his new favorites. All would fall before his claws.","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"When John Kramer, better known as Jigsaw, planned for his son to be born during the Chinese Zodiac’s Year of the Pig, he wanted it to represent fertility and rebirth; a new beginning for him and his wife, and the start of a charmed life for his son. But that plan was shattered on the night that a junkie broke into his wife’s clinic, hoping to score. <br><br>After this event resulted in the death of his unborn son, John finally caught up with the junkie, making him his first test subject, and the Pig was changed forever too. It became a representation of the disease that was rotting John from the inside, a reminder that we are just meat unless we elevate ourselves through our actions, by grasping life from the jaws of death.<br><br>The Pig became a vessel, an agent of Jigsaw, conveying the subjects to their test. For some of those who emerged victorious, the Pig could still be a rebirth, into their new lives as apprentices, even disciples, of Jigsaw. <br><br>That was the case for Amanda Young, a troubled soul, whose life had been a catalogue of harm, both to herself and those around her. That changed when she faced, and bested, Jigsaw’s test. Deciding her life was worth something, she became devoted to Jigsaw’s cause, ready to take over when the cancer consumed him.<br><br>But she became more dependent on John, her anguish at his impending death combining with a belief that their test subjects weren’t capable of saving themselves, of being reborn in the crucible of the games. <br><br>Seeing this, John presented her with another game, another chance to save herself, but Amanda let her rage and jealousy rule her actions. She failed the test and took a bullet as a consequence. <br><br>Bleeding out on the tiled floor, darkness engulfed Amanda’s vision, accompanied by a sound like creaking wood. Then she was in a forest, once more viewing the world through the eyes of a Pig. Trees surrounded her, their branches clawing at her from all sides. Waves of panic washed over her and she could hear her breath reverberating inside the mask.<br><br>Had she been damned, cursed to spend her days here, in this guise? Or maybe this was another test? Maybe she hadn’t failed at all? John always thought one step ahead of everyone else, planned for every eventuality, and he would never give up on her, surely?<br><br>Jigsaw may have gone but he had passed her onto another. A being for whom she would be The Pig again.<br><br>Ultimately, she saw now that she had been right in the choices she had made. The time for games was over. There was no chance of redemption for any of them. They were meat, and meat was destined for slaughter. ","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"Kenneth Chase was born in 1932 by a difficult labor, which his mother wouldn’t survive. This event drove a rift between him and his father that never closed. As the boy grew, so did his father’s resentment, and his drinking habit. By the time Kenneth was at school, they lived mostly separate lives.<br><br>Academically, he was unremarkable, coasting by on his significant athletic prowess. He grew tall and strong, excelling at track events, but shunned any attempts to coax him into team sports.<br><br>On his walk home from school, he would often find feathers on the ground and he soon began a collection, keeping them in a cigar box under his bed. With his father either at work or in an alcohol-induced stupor, Kenneth had hours to spend alone, transfixed by the regularity of the feathers’ barbs and feeling the softness as he ran them over his lips. Watching the birds that came to the feeder in his garden, he imagined how soft they must be and resolved to catch one. He ingratiated himself with the local dentist, soon procuring some anesthetic. Using this, he rigged up a trap on the feeder, that he hoped would knock out a bird long enough that he could touch it.<br><br>After a few failed attempts, he managed to trap a robin. As it lay in his hand, he felt a sudden rush, of a life at his mercy. He had planned to release it once it recovered from the anesthetic. Instead, as its eyes flickered back into consciousness and it began to struggle, his grip remained firm. His fingers slowly tightened around its throat, squeezing until its chest feathers were finally still. He disposed of the body, keeping just a feather, with which he started a new collection, discarding the others as ‘fake’.<br><br>By the late 1940s, Kenneth had left school and started working as a busboy at a local diner. He had also escalated to larger prey, like squirrels, raccoons and dogs, becoming skilled at customizing the anesthetic dosage for each.<br><br>In early 1954, a young man went missing and the town was turned upside down in the search. A few months later, Kenneth’s father, while doing some work in the crawlspace under the house, found a cigar box. He broke it open and saw, to his horror, that it contained feathers, animal paws, and a man’s finger.<br><br>Returning from work, Kenneth saw his father leaving the crawlspace with a cigar box in his hands. He turned on his heel and never went home again.<br><br>After a few weeks of living rough, he encountered a traveling circus and, with his prodigious strength, was hired to work the ropes. He assumed a new name: Jeffrey Hawk.<br><br>Suddenly surrounded by a close-knit community, “Jeffrey” had to learn to socialize. He donned a new personality like a disguise, quickly becoming known as charming and helpful, and was welcomed into his new family.<br><br>Over the next decade, he stayed with the circus, traveling the length and breadth of the USA. But, with the itinerant life providing few repercussions, he fell into bad habits. Drink, junk food, drugs, he indulged all of them to excess. For a time, these vices were enough, but then his old urges returned and his nomadic existence became a cover for him to resume killing. He stole clothes and makeup from performers, fashioning a disguise that would let him get close to his victims before he anesthetized them, bringing them back to his caravan, where they would awake to find themselves bound and at his mercy. He would finally get to have his fun, mentally and physically torturing them, their screams fueling him, before being lost in the night.<br><br>Once their strength was at its lowest, he would carefully examine their fingers, searching for the prettiest, running them over his tongue to find the tastiest. Once he found the best, he would cut it from their hand and proudly add it to his collection, disposing of the rest of the body as pointless waste.<br><br>Men, women, young, old, he didn’t care. The essence of a good collection is in the variety, in the memories and stories they evoke.<br><br>He removed the costume less and less, shedding his old personality with it, fully embracing the clown, his true self.<br><br>With time, he became complacent and sloppy. A victim managed to work free of her bindings while he was sleeping off the drink. She escaped, screaming for help, and he awoke to find the rest of the circus bearing down on him. He whipped his horse and the caravan disappeared into the night.<br><br>Since then he has roamed the country, a parasite who could always be found at a carnival or circus, but who would never been seen on any playbill. He lured those brave, or foolish, enough to come near, trapped them and moved on before they could be found missing.<br><br>Somewhere along the way, he left the ordinary roads of the USA behind him, traveling through a veil of mist and entering a new realm. It was a place of transience and impermanence, perfectly suiting the life he had chosen to lead. Feeling more at home than he had in his entire life, he set up camp and waited for his first visitor.","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"Rin was the only child of the Yamaoka family. She was raised in the dusty halls of a traditional house in Kagawa. She studied Education at Takamatsu, a private university, which weighed heavily on her family’s shaky finances. Her mother got ill that year and the bills started piling up. Rin worked part-time in a futile attempt to help lighten the load.<br><br>Her father faced a debt that grew without end. He started working double-shifts in hopes of obtaining a promotion. That’s when he started losing sleep. A dark whisper would keep him awake all night, reminding him of his hopeless situation. Exhausted, he started to lose grasp of reality. Fighting to deny what the voice whispered at night, Rin’s father made a desperate move. He met with his superior and explained his situation. He begged for a bonus, an advance, time-off---anything.<br><br>His request was denied. The company had launched a defective production line that was costing them dearly. Someone had to be held accountable and Rin’s father fitted the bill perfectly. He was fired after twenty-two years of service.<br><br>That evening, Rin came home from work. She’d stayed late to entertain customers that lingered at the restaurant. As she parked her bike in the shed, she heard her mother’s scream from the house.<br><br>She rushed in, climbing up the stairs to her parents’ room. There she found bits and pieces of her mother on the floor. Her limbs were clean-cut, tangled up in an unnatural position. Her breasts were sliced up, revealing her rib cage, which was cracked open. Rin gagged.<br><br>A sharp katana came crashing down. Rin blocked the blade, which bit into her bare forearm. The shock of recognition interrupted her pain: her father was wielding the katana with a stoic expression. She cried out to make him stop, but he slashed her arm again.<br><br>She rushed off and slid on the blood-smeared floor. Using the doorframe as support, she raised herself up. The katana ripped through the wall, cleaving her other arm. She screamed in pain as she limped into the hallway, only to be met by her father’s blade.<br><br>She stepped back, trembling, as she held together the soft loose flesh of her abdomen. Images of her mother’s tangled limbs flashed before her eyes.<br><br>Rin charged at her father, making him stumble back. He punched her torn abdomen and she reclined in pain. As she struggled to get back up, he slashed her thigh, making her collapse on the floor.<br><br>As she crawled towards the stairs, he grabbed her hair and yanked her against a partition. The glass shattered on impact and she fell through, landing one floor down.<br><br>She heard footsteps somewhere above her. With effort, she moved, worming her way into a sea of broken glass. The shards gnawed at her, ripping her flesh. He had to be stopped. He would not get away with what he’d done to her—with what he’d done to her mother.<br><br>Coughing up blood, her chin grazed the glass, adding to the bleeding. A low-pitched heartbeat started to ring in her ears. Her body felt so heavy she could no longer move.<br><br>The ground shook with her father’s footsteps. She knew she was not going to make it, but she no longer cared. She would make him pay, in this life or the next.<br><br>A dark Fog slowly veiled her eyes, but it could not subdue her rage. She would not rest—not yet. The darkness whispered, promising blood and revenge.<br><br>An oath was made and Rin closed her eyes.","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"Frank Morrison was nineteen and had little to show for it. He’d stopped attending school after being kicked out of the basketball team for shoving a referee into the stands. Yet Frank was a man of potential, who could light up a room despite his bleak childhood. At six years old, he’d been taken away from Calgary to start a circuit of foster homes. No matter how many times he’d lashed out, threw tantrums and got into fights, they’d kept moving him to new, unfamiliar houses. His last move had been three years prior when his last foster dad, Clive Andrews, had picked him up from the adoption center. They’d been on the road for seven hours before reaching a small bungalow in Ormond. It would be the longest time they’d spend together. Clive was too busy trading cheques from Family Services for drinks at the bar.<br><br>Ormond was a small, stale place; a remote town of six thousand inhabitants where gray winters drag on for most of the year. Frank did everything he could to get into another adoptive family, but he changed his mind when he caught the attention of a beautiful girl. Julie was a popular girl who was convinced that she deserved better than a life in Ormond, and Frank, as an outsider, was her ticket out. Frank attended the parties she threw where everyone was younger than him and easily impressed, which he liked. He met the impulsive Joey, who liked to show off, and the shy, naive Susie, who was Julie’s best friend.<br><br>They would hang out at an abandoned lodge up Mount Ormond. Their time together was the perfect break from the boring conformity of their small, insignificant everyday lives. Frank saw it as an opportunity to shape their lack of experience into something powerful. He lined up nights of debauchery and rampage, testing their limits. Bullying, vandalism, and theft were essentially their weekend plans. It came to a point where they would do anything he asked. Nothing was off-limits when they put their masks on. One evening, Frank dared Joey to vandalize the store that had recently fired him. They snuck inside easily enough as the building was supposed to be empty after closing hours. But a cleaner who was still there grabbed Julie as soon as she came near. Hearing her stifled cries, a dark impulse took over Frank. He rushed to her aid knife in hand and, without hesitating, planted the blade into the cleaner’s back.<br><br>As the group stared at Frank in shock, he ordered them to finish the job. Joey clenched his jaw, grabbed the knife, and stabbed the bleeding man in the ribs. Susie didn’t want to do it. Frank shouted at her; they had to finish what they’d started. Julie closed her eyes and jabbed the knife into the man’s chest. She handed the wet blade to Susie: they were all in this together now. Susie stared at Julie in disbelief as Frank grabbed her trembling hands and inserted the knife deep into the man’s throat. Frank told them to move fast: they mopped the blood off the floor, stashed the body in the trunk of Joey’s car and drove up Mount Ormond.<br><br>All four were digging in the muddy snow to dispose of the body when Frank spotted something moving through the woods. He grabbed his knife and broke from the group to check it out. The Fog thickened around Frank, becoming so dense that he soon could no longer see ahead. He retraced his steps and stumbled on an ominous trail. He followed the eerie path, as if called by the darkness. Julie, Susie, and Joey finished digging but Frank was nowhere to be seen. Julie spotted his muddy footsteps in the snow and the three of them followed the trail, which took them deeper into the woods. When Julie, Susie, and Joey did not return home that night, their parents thought they’d run away with Frank. Each family came up with a different theory. The mood of the town changed, however, when a body was found by an abandoned lodge up Mount Ormond.","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"When she was five years old, Adiris, the youngest of a family of seven, was left on the brick-red burning steps of the Temple of Purgation at the center of Babylon. To process her shock and sorrow, she held onto the belief that the gods had a plan for her. Her new life was one of quiet servitude. She would tend to the gardens, prepare ceremonial meals, and polish ceremonial incense burners. At night, she would pray for a sign that would reveal her purpose.<br><br>When she came of age, she attended the high-ranking priests during the yearly worshiping of the sea-goat, the god of water and creation. Swinging a censer down the great hypostyle hall, she cast thick black fumes that reached the cold towering stone pillars before dissipating. Her worries lifted, and the resulting bliss made her feel closer to the gods than ever. She worked herself to the bone each day that followed, fulfilling her duties while taking on new ones, as she aided the priests during purification rituals.<br><br>The priests were more and more in need of assistance. Cleansings were being performed daily to answer the demand from outside the high temple walls, where a catastrophic plague had resurfaced. Within months, the priests contracted the disease. It did not take long before they became too weak to perform any kind of ritual. Adiris, having assisted many purification rituals, was the only one able to carry on. The swelling panic had to be contained, even if by a novice.<br><br>Anxious before her first ceremony, Adiris visited the priests’s sanctuary chamber. When she lit the candles, she noticed a narrow opening at the back. Sliding through the gap, she reached a crypt hidden under the sanctuary. The chamber was bare except for the golden statue of a woman, who stood with outstretched hands, her fingers covered in jewels. It was the sign Adiris had been waiting for.<br><br>The great hall was packed with followers who bowed down as Adiris entered. She strode to the brick altar and grabbed a ceremonial dagger forged in silver, her ruby ringed fingers wrapping around the blade like claws. The sudden display of luxury intrigued the followers, who were struck already by her youth and beauty.<br><br>As she began reciting the epic of creation, a woman at the back swooned and collapsed. Adiris rushed to her and noticed the black blisters covering her feet. Without hesitation, Adiris grabbed her sacred blade and swung it at her own foot, severing a toe. Then she offered the bloody part to the gods, asking them to protect the woman.  A silence fell over the followers, who revered Adiris as their new priestess.<br><br>Tales of her wealth, beauty, and devotion began to spread across the city as quickly as the disease.  Soon, Adiris’s followers called her the High Priestess of Babylon.<br><br>But her faith was tried when she showed the first signs of infection; her cough became a mix of phlegm and blood, her neck erupted in abscesses, and her four-toed foot darkened. Ashamed of her condition, she began wearing a veiled headpiece and carried a censer that masked the rancid smell of sick that clang to her skin. Hoping to be saved, she kept performing the rituals, offering blessed water and food to her followers.<br><br>But no ritual could save her. In a desperate attempt to appease the gods, Adiris banished herself from the city. She traveled north with a few followers, venturing through the cold woodlands of Urashtu, until it was no longer possible to walk.<br><br>They camped in a damp cave, where Adiris lay in a pool of vomit. Her foot, which had turned black, was so swollen she could not go any further. Her followers and she realized the truth in that cave: they were all infected with the plague.<br><br>Kneeling among her retching followers, Adiris made one last prayer. The black fumes of incense rose into the damp air before being wiped off by a cold breeze.<br><br>Neither the body of Adiris nor her followers were ever found. Many told tales of her return, but no one truly knew what fate had befallen the High Priestess of Babylon.","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"Danny Johnson, known as Jed Olsen by some, grabbed the newspaper from the kitchen counter: it was a week old, but his face was on the front page, grainy and sunken. It was one of those muggy afternoons in Florida when heat and humidity permeated everything in the kitchen, making him sweat while standing still. He slouched in a damp chair to read. This article had better be good—his work in Roseville had been outstanding.<br><br><i><b>GHOST FACE DISAPPEARS</b></i><br><br>June 18, 1993<br><br>At first glance, Jed Olsen was a modest and enthusiastic freelancer with experience in a variety of small newspapers. The staff at the Roseville Gazette appreciated how easy-going and honest he seemed, and so he was treated as a stranger for no more than five minutes into his interview:<br><br>“Jed quickly spotted the editor-in-chief in the room, gave him a wide smile and a firm handshake, and talked about good old American values. And that was it, he was in.”—Ex-Contributor at the Roseville Gazette<br><br>Olsen never justified his erratic career path, which zigzagged between several small towns from Utah to Pennsylvania. There was no verification of his previous jobs. He had a decent portfolio plus a good attitude, and they needed a contributor right away.<br><br><b>THE ROSEVILLE MURDERS</b><br><br>Olsen had been working at the newspaper for five months when the Roseville Murders began: victims from young to old, stabbed to death in their homes. From the reports, the victims seemed chosen at random, yet the killer knew his way around in the houses. The multiple stab wounds indicated a personal motive. No traces of DNA were found. The local police were confounded: the murders were carried with fury akin to a crime of passion yet coldly premeditated.<br><br>The murderer also liked to stalk his targets. Two victims had reported being followed on their way home by a dark figure, a few days prior their death. The killer would follow them from Walleyes, a small bar in Northern Roseville, and snap pictures of them at home, while looking for a way in. He could watch the same victim for weeks, meticulously registering their habits and routines. When he felt the urge to kill, he’d visit the most vulnerable victim on his list, and break inside the house quietly.<br><br>The whole staff worked on the Roseville Murders story. Olsen was often sent to interview the family of victims and relay official statements from the police. Unknown to everyone at the time, his involvement added to the final body count.<br><br><b>THE GHOST FACE</b><br><br>Panic swelled in Roseville when Olsen produced footage of a hooded figure breaking into a house at night. The masked face, a white blur in the dark, stared at the camera for a second, before disappearing inside. “Ghost Face Caught on Tape” was the resulting article, written by Olsen. He seemed proud of his work at the time, enjoying how the whole town feared his ghost stories.<br><br>Weeks later, Olsen left a note on his work desk and disappeared:<br><br>“I hope you liked my stories--I enjoyed bringing them to life. Don’t worry, I\'m not done.” –Jed Olsen<br><br>The Roseville law enforcement still refuses to comment as Jed Olsen remains at large. <br><br>Danny smiled, ripping out the article from the newspaper. When the investigation had been pointing to him, he’d packed his bags and left Roseville swiftly.<br><br>He got up, the clammy seat pulling his skin. An oppressive humidity engulfed him as he entered the bedroom. Condensation dribbled on a small misted-up window as bits of cracked wallpaper hung limply. Its floral pattern was covered with gruesome photos and newspaper headlines. Danny pinned the week-old article on top of a picture of lacerated scalps. A faint pang of hunger hit him, and he wondered when he had eaten last. Was it this morning, while washing his knife and clothes? Or was it last night, after following that girl down the street? He couldn’t remember clearly.<br><br>Taking a step back, he admired his work on the wall. His mind drifted, remembering all the articles he’d written, the stories he’d planned, and the scenes he’d brought to life.<br><br>A shiver ran through him. A chilling breeze transformed the bedroom\'s humidity into an opaque, freezing Fog. A woman shrieked. Dead leaves crunched under his feet.<br><br>He smiled in anticipation.","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"A blooming mouth full of needle-like teeth for a face, large, curved, razor-sharp claws, and powerful legs to pounce on victims, make The Demogorgon a frightening monster to face in any dimension. It is a nightmare of unrestrained, feral rage as it hunts down its prey and rips it to pieces, devouring every last morsel of flesh and gore, leaving nothing for scavengers. The creature is untouched by any sense of compassion or restraint. Looming over its victim, it shows no doubt or mercy, just the pure instinct of its insatiable bloodlust as it delivers the deathblow. A perfect hunter, The Demogorgon is a macabre testament to the horrors lurking in the Upside Down and why it was choice pickings for The Entity.","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"Honoring his family name was never enough for Kazan Yamaoka. He wanted to surpass his father’s reputation and end what he saw as the thinning of samurai culture with farmers often posing as samurai.  His father tried to turn Kazan’s attention to more noble pursuits, but Kazan refused to heed his advice, and borrowing his father’s katana, he embarked on a dark pilgrimage to prove his worth and rid Japan of imposters. Ignoring the code that had been taught to him, Kazan killed imposters in the hills and the valleys, on the beaches and in the woodland. The killings were brutal, cruel and morbid. He humiliated farmers and warriors alike, yanking off their topknots and stripping them of their armor. His rage, bloodlust and perverse sense of honor knew no bounds. Monks believed he was possessed by something dark and otherworldly and cursed him while a noble lord began to call him ‘Oni-Yamaoka,’ the rageful samurai, an insult both to Kazan and his family.<br><br>Determined to redeem his family’s name, Kazan now butchered anyone who dared call him Oni-Yamaoka. The insult confused him. He had defeated the best and he had purified the samurai class by ridding the land of imposters. How could anyone refer to him as an ogre? Had it been because he had marched onto a battlefield to cut down the fiercest warriors. Had it been because he had taken a kanabo and dashed hundreds of skulls with it?  Or had it been because of his need to secure a ‘trophy’ from his victims. It didn’t matter. Being called an ogre was more than he could bear and an ominous voice in his head urged him to strike down the lord who had desecrated his name.<br><br>As Kazan made for the lord’s town, he suddenly found himself face to face with a samurai standing on a dirt road, blocking his way. Kazan readied his kanabo. Without a word, the samurai attacked and quickly secured the upper hand. But he hesitated. With a devastating blow, Kazan crushed the samurai’s head and cracked his helmet. As Kazan approached the fallen samurai, he saw his father’s face and staggered back to his haunches. His father stared at Kazan with mingled shame and regret as he issued his last breath. Kazan closed his eyes and screamed in agony until he could scream no more. When he opened his eyes again… his father was gone. Not only had he killed his father, but he had allowed thieves to steal his body for armor.<br><br>Bitter, lost and disillusioned, Kazan roamed the land aimlessly with his father’s voice rattling in his head, taunting him, reminding him of his failures, sending him into fits of uncontrollable black rage. One day, walking in the woods, Kazan happened upon an Oni statue. He stopped and stood motionless for a long moment. The weathered and overgrown statue seemed to be ridiculing him, accusing him of being the imposter samurai he had so desperately sought to destroy. Kazan shook the laughing voice out of his head and half remembered the lord who had ridiculed him as ‘Oni-Yamaoka.’<br><br>With renewed anger, Kazan journeyed to a town high up in the snowy mountains where the lord resided. A dozen samurai met Kazan at the gates of the town. A dozen samurai fell to his kanabo. His speed and strength were unmatched. His rage was incomprehensible. Covered in blood and gore, Kazan battled through the town and soon found the lord hiding in a villa. He dragged him out of a cabinet, sliced his tendons to immobilize him and watched him beg and squirm like a dog. Without hesitation, he thrust his fist into the lord’s mouth and yanked out the wicked tongue that had desecrated his name.<br><br>Satisfied, Kazan exited the villa to find himself surrounded by dozens of farmers wielding rusted scythes, sharp pitchforks, and heavy clubs. He survived the first few assaults, but there were too many attackers coming from every direction. Within moments Kazan was on the ground staring at a cold, indifferent, darkening sky as farmers took turns stabbing and torturing the ‘Oni’ who had butchered their beloved lord. The frenzied mob dragged Kazan into a small stone mill to continue the torture and finally left him to die a slow, agonizing death. When they returned, the mill was filled with a strange black fog and Kazan’s body and the kanabo were nowhere to be found. It was the beginning of a dark legend about a rageful Oni haunting the town.","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"Born in the dust-ridden badlands of the American Midwest, Caleb Quinn was son to struggling Irish immigrants. On the edge of the frontier, sickness, famine, and death were common sights, and pioneers contended for whatever scraps they could claim while tycoons feasted. Caleb\'s father, once an engineer, had few options to ply his trade as businesses posted a common sign: No Irish Need Apply. His antiquated tools laid untouched for years until Caleb uncovered them. Noticing his son’s interest in the trade, he gifted him his old wrench.<br><br>The devices Caleb made under his father’s guidance had quaint applications, but when his father was away, they took a grim turn. He hid plans for a mask that would gouge barbed needles into a human’s eyes and rip them from their sockets, complete with sketches of it fitted on boys who bullied him.<br><br>With age, Caleb\'s engineering abilities became marketable and employers put their discrimination aside. Henry Bayshore, the owner of United West Rail, hired him.<br><br>Caleb first invented a gun that shot railroad spikes into the ground. Next, he made a steam-powered tunneling drill. But as Bayshore feigned indifference, the devices began turning up at other companies, the patents stolen from Caleb and sold.<br><br>A familiar sensation coursed through Caleb\'s blood, feeding the sharp pain in his heart. Rage overwhelming him, he burst into Bayshore’s office and smashed his face into a bloody stew. As he was pulled away, he pushed his specialized gun to his boss’ gut and squeezed the trigger. A railroad spike plowed through skin and viscera, nailing Bayshore to his desk.<br><br>The only thing that saved Caleb from hanging was Bayshore\'s unlikely survival. For fifteen years, Caleb was confined to Hellshire Penitentiary, the nation’s first private prison. In a fortress of illiterate convicts, he found an unlikely friend in the educated prison warden. He designed torture devices for him and in return received extra meals. After a time, the warden offered to commute his sentence. He spoke of something greater than monetary wealth—political capital—and that his connections could have Bayshore framed and rotting behind bars for life. He had only one request: Make him rich. Fill the prison. Use ingenuity to bring outlaws in alive.<br><br>Caleb returned to his workshop, and with a few modifications emerged with something new—the speargun. The first trial occurred when a thief robbed a Chinese laundry. Seizing on the opportunity, Caleb unleashed his prototype. Metal joints screeched as the spike shot forward, gouging into the target\'s abdomen. But as the spear tugged it caught the thief\'s intestines and, with an ungodly sound, yanked them onto the dusty road. After several iterations the disembowelments dwindled, but Caleb had already earned his new nickname: The Deathslinger.<br><br>Looking to protect his asset, the prison warden pulled strings and released Irish inmates to form Caleb\'s posse. The Hellshire Gang was born. For six years they roamed the country collecting wanted outlaws for the prison, fulfilling their end of the bargain. After a bloody battle at Glenvale, Caleb caught notice of a newspaper headline: Henry Bayshore Purchases Hellshire Penitentiary. In the picture, a disfigured Bayshore proudly shook the warden’s hand. Caleb\'s heart pounded with rage, blood swelling as if it would burst from his veins. He’d been sold out, a pawn in a rich man\'s game.<br><br>The Hellshire Gang pledged their loyalty to Caleb and called for the warden’s head. In a thundering gallop, they smashed through the prison entrance, shrieking like bloodthirsty marauders.  A guard raised his pistol but hesitated. A spear punctured his chest. Caleb grabbed the man\'s head and slammed it against a prison cell until it spilled through the bars.<br><br>Reaching the warden\'s office, Caleb kicked the door and was met with a fortunate sight—it wasn’t only the prison warden who cowered in a corner, but Henry Bayshore. Overpowered with rage, Caleb rushed Bayshore, beating, bludgeoning, tearing at his flesh. The man\'s blood dripped from his face, crimson pooling at his feet. The Hellshire Gang swarmed the warden, snapping bones with each kick.<br><br>With the two men broken and begging for death, the posse dragged them to the commons where they were left to the growing crowd of prisoners.<br><br>Soaked in blood and sweat, Caleb hobbled to his old cell, hardly paying notice to Bayshore’s screams. He sat on the bed’s edge as drops of blood ran from his fingertips. A thick, unnatural fog streamed through the barred window. He pulled out his old wrench, cracked and rusted, and ran a thumb along the metal, regarding it with faded eyes. He couldn’t remember when it came into his possession. He didn’t care to remember. At his feet he saw a dusty path, and, at its end, silhouettes of all who had done him wrong: the boys who bullied him, the executives who took advantage of him, and, again... Henry Bayshore. Emerging from a fog were the tools to dispose of them—unforgiving steel hooks, brilliant and beautiful in their simplicity. Pain tore through his leg as he stood but he endured, pushing onward, walking the dusty path, leaving a trail of blood flowing behind him. ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"A sadistic and merciless executioner, Pyramid Head is fixated on dispensing punishment through pain.<br><br>Encumbered by the steel frame upon his head and with a hulking great blade in tow, he stalked the hellish corridors of Silent Hill, committed to a duty that no one truly understood. Where he trod, even monsters fled for the shadows, and those who crossed his path fell victim to unrestrained acts of aggression. When his duty was complete and his presence no longer needed, he prepared for the long rest—and yet, his skills were required elsewhere.<br><br>The Fog that streamed over him was somehow different than that he was accustomed to in Silent Hill, as if each wisp contained the nerves of a creature, writhing, seeking him out. There was an unspoken agreement in that moment. The billowing cloud was an invitation to duty and sadism, and Pyramid Head, stepping into The Fog, accepted his obligation once more. ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"To understand the human condition, one must rise above it. This was the credo of Talbot Grimes, a Scottish chemist whose unrestrained ambition took him to towering heights. As a boy, he was a popular child—bright, charismatic, and unafraid to challenge authority—yet despite his social graces he was fiercely independent, spending much of his time exploring the sprawling fields near his town alone. What began as a child\'s curiosity nearly turned deadly after experimenting with a patch of poisonous foxglove. For days, he laid in bed dripping with sweat, purging any food that touched his stomach. When he recovered, it wasn\'t fear that gripped him, but fascination. There was something magical in how a single flower could so drastically affect him.<br><br>Into his adult years, his ambition developed as quickly as his questionable methods. He attended the London School of Medicine and excelled despite several reprimands. His willingness to push the limits secured him a position with the British East India Company, and within seven years he was made head chemist. In time, he completed one of his greatest achievements: a chemical that could increase a worker\'s productivity while reducing their need for rest. He was rewarded with a secret laboratory beneath a prison camp on Dyer Island.<br><br>There, off the coast of India, prisoners from the Opium War became his unwilling subjects, leading to a drug that allowed soldiers to withstand incredible amounts of pain. Though most side effects were minor, there were rumors that a small number of soldiers went mad. In feral states, they massacred villages, impaling the populace on bayonets, leaving them hanging from trees. There were no official reports on the subject, and Talbot refused to blame himself for what could only be exaggerated war stories.<br><br>Though his callous brilliance seemed unflappable, he was ignorant to the enemies his questionable work had amassed. The realization struck him quite literally—with a steel pipe to the back of his head during a trip to Mangalore. He was bound and loaded into a wagon. When his blindfold was removed, a sickly man showed him a mass grave filled with hundreds of bodies. Unbeknownst to Talbot, his productivity-increasing drug had killed nearly an entire factory\'s worth of workers. He knew he couldn\'t defend himself against the anger and accusations of his abductor—all he could do was curl up as the blows from the steel pipe rained down. His body was thrown into the grave and left for dead. Shifting between consciousness and the darkest black, he crawled for an escape, fingers sinking into rotting flesh. Black flies feasted on his uncovered skin, the sensation of a hundred pin pricks stabbing into him. As he collapsed, he came face to face with a dead woman’s dazzling hazel eyes. Too weak to pull away, he could do nothing but witness his life’s work.<br><br>Then, from the edge of death, he was brought back. He found himself on a small bed as a kindly, wrinkled face looked over him. With each pained breath, he was nursed back to health in an ancient mystery school posing as a monastery. In verdant gardens behind tall, unassuming walls, monks studied forbidden texts, striving to expand the human mind in the search for other dimensions—believing one to be connected to the other.<br><br>Talbot’s knowledge proved indispensable, his mind-altering chemicals integrating seamlessly with theories of neural expansion. He realized then that his salvation was no coincidence—he was plucked from the pit specifically to advance the school’s knowledge. He agreed to help until his recovery was complete, being tasked with researching what the monk’s called the soul chemical, a compound derived from the pineal gland that could open the mind’s eye. What began as a favor to his saviors, soon became an obsession. Poring over the school’s archives of lost texts, he uncovered scientific formulas that confirmed previously unthinkable ideas. He dreamt of ushering humankind into a new period of enlightenment. Perhaps then, the nightmares of hundreds of dead factory workers—and of those two hazel eyes—would fade from his mind.<br><br>As he came closer to a breakthrough, the demeanor of the monks shifted. The gentle smiles they offered were paired with uneasy eyes that quickly darted away when spotted. The polite conversations he was once privy to turned to hushed murmurs. The last thing he would see of the school was the cracked ceiling above his bed, branching like a dendrite through plaster.<br><br>His next memories were a shattered mosaic of images and sensations. Smearing lights, horse hoofs on cobblestone, coarse burlap scratching at his cheeks, and sharp bites into his arm. He awoke ragged and unwashed, splayed on the straw mattress of an opium den. Mind in a dense fog, his first thought was of his notes, the only record of his groundbreaking revelations. He searched frantically, scrambling through the dingy basement, pleading aloud for help. The few other denizens looked up from their hammocks, offering nothing but drug-soaked eyes and apathetic gazes that soon fell into half-slumber. Before he noticed the robed figure appear behind him, a needle plunged into his arm and the world disappeared once more.<br><br>Awoken. Again. Each time, hazier than the last. He tongued at hollow gaps between his teeth. How long, he wondered. A faint memory returned. The soul chemical. His notes. The verge of a breakthrough. A faraway whisper entered his mind.<br><br>He fumbled with a stone, sharpening it with shaking hands. In the dim light of the den, amongst the catatonic occupants, he carved his research from memory into the walls. He wrote for hours until his fingers bled, moving to the floor, taking in everything the voice whispered despite his inability to comprehend it. When there was nowhere left to write, he gripped the stone and carved the message into his chest. Stained with blood, he witnessed a miracle appear before him—a magnificent field of lush, orange flowers. The whispered voice beckoned to him, urging him to enter the field and discover worlds and dimensions beyond human comprehension. For a moment, Talbot felt the sense of wonder he possessed as a child.<br><br>The denizens of the opium den awoke to silence, the dry scent of smoke still lingering in the air. Shambling out of their drug-hazed fog, they found the stone floor wet with blood, tiny rivulets coursing through the cracks. As eyes adjusted to the darkened room, the jagged lettering scrawled along its length began to appear. Written over and over without end, there was but one single line: <i>Death Is Only the Beginning</i>.","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"A pair of conjoined twins, Charlotte and Victor Deshayes formed an emotional bond like none other. The unlikeliness of their successful birth in the 17th century could be described as miraculous, yet it immediately brought about their life of persecution. The twins emerged with Victor’s lower body affixed into the chest of his sister, legs twisted around her muscles and organs. He was smaller than Charlotte, grown as if he were an appendage of her body rather than a fully formed boy. As the newborns screeched, so too did the midwife who delivered them, running from the home, yelling of a demon birthed by a witch. So began the hunting of Charlotte, Victor, and their mother Madeleine.<br><br>The coming years were fleeting memories for the twins, yet they were the closest thing to a normal life they would know. The journey with their mother was what they believed all children underwent, the games of running and hiding through France’s countryside being an ordinary occurrence. At the age of five, a new challenge to the game was presented as their mother fell ill. Pale and exhausted, Madeleine had no choice but to pass responsibility of collecting food onto Charlotte. The girl, burdened under extra clothing that concealed Victor’s protruding body, set out from their forest tent and marched to the nearby town. Though a peculiar sight, she did what she had been trained for, waiting for an opening at the market and swiping whatever food she could. It was a victory in the game, but one short-lived.<br><br>After midnight, glowing flames surrounded the family’s encampment, bobbing through the darkness. A single commanding shout broke the night’s silence and a mob of witch hunters streamed in. Grubby hands tore the twins from their bed, Charlotte frantically kicking all who approached. Madeleine cried for her children, her voice abruptly silenced by a club to her skull. Victor shrieked, the wailings of a trapped rat.<br><br>The hunters coordinated quickly. A judge on hand declared Madeleine guilty of witchcraft, evidenced by her demon spawn. Within minutes, they shackled her unconscious body to a tree, surrounding her feet with dry twigs and moss. As she awoke, she did not struggle, only begged her children to turn away. They would be given no choice. The twins were forced to watch as the torch was lit, and they watched as flames leapt up their mother’s skirt, charring and sizzling her flesh. They watched as fat dripped from her body, and her face bubbled and twisted. They watched until the screams that tore her vocal cords were no more, and all that was left was the crackling of embers and a nauseating stench.<br><br>Whatever joy and goodness were in them died with their mother. Caged and transported to an old wooden temple, they were sold to a secretive group clad in dark cloaks. Victor reacted with the ferocity of a rabid beast at any who approached, clawing and biting. The only solace that could calm him was the embrace of his sister. Charlotte, bitter and hateful to all but her brother, found purpose in being his protector.<br><br>Within the temple, they were exposed to unusual experiments for years—some cruel, many simply baffling. One day they would be made to break the neck of a small grey bird. The next, they would bleed their fingers into a vase of roses. Every seventh day, they would sleep with the branch of a damp oak beneath their pillow. Then there was the chanting: a never-ending chorus from cloaked figures on scheduled intervals. <br><br>In time, a final experiment was planned. Two robed figures herded the twins to the center of the temple, holding Charlotte upon an altar in a room alit with candelabras. The wrinkled face of a man peered from under his hood, placing a hand on the forehead of each twin, making careful examination of their skulls. Memento mori, he uttered, as he withdrew a shining blade.<br><br>Charlotte rolled to her side, shifting her brother off the altar. With a screech, he stretched his arm as far as he could, knocking a candelabra to the ground. The flames took to the dry wood immediately. They swept over the floor, igniting the black robes that brushed against it. Screams of agony pierced the chaos, invigorating Charlotte. She dashed through the inferno, vision concealed with nothing but black smoke and blazing flame. A painful heaviness filled her lungs. No exit could be found, every step leading to overwhelming heat. She fell to her knees, suffocating, and then saw it—sunlight, trees. She stumbled from the fire into dewy grass. Without looking back, she ran into the forest until she collapsed.<br><br>When Charlotte opened her eyes, she reached for Victor’s hand. He made no attempt to budge. His body hung helplessly from her torso. She clasped his face, stared into his sad, still eyes. The movements she was accustomed to—his body pulling at her skin, his legs prodding at the cavity in her chest—were no more. Victor was dead.<br><br>Charlotte had no choice but to continue moving as she mourned, fearing black cloaks and witch hunters were prowling. She concealed her brother’s corpse under her clothing and marched for the sewers of a nearby city. There, she set up camp, emerging often to steal whatever food she could, resorting to raiding barns for pig slop when desperation set in. Throughout the years, Victor’s corpse rotted as his limbs oozed and blackened, yet his body demonstrated resistance to complete decomposition, as if his sister’s blood still coursed through him. Protecting his lifeless body became Charlotte’s sole reason for being, refusing to ever be separated from the only family she had left.<br><br>Life in her teenage years was a game of survival. Her hatred for humanity grew each day under the realization they would never leave her be. No matter how many died during her botched robberies and desperate attempts to escape, there would always be more to pursue and sling words of condemnation at her—monster, demon, witch. And it was the black cloaks who were the worst of them. Their hunt for her was unending, forcing her to constantly abandon shelter and run.<br><br>For years, Charlotte fled, drawing blood out of necessity, cradling her long-dead brother in the night. During a frigid winter, her body began to break down. Food was scarce and the refuge of rickety shacks were no use against freezing temperatures. Sickle in hand, she sheltered near her campfire in the woods, not knowing if the black cloaks would take her before the cold did. As frost crystalized around her nostrils and her lips took on a gentle blue hue, Charlotte felt something she had never experienced: acceptance. She closed her eyes, opening herself to the serenity of death when—a shriek, shrill and vicious pierced her ears. Victor spasmed and flailed from her chest, a cloud of fog encompassing him. Before she could react, he spilled from her in a bloody puddle, landing on the snow and running.<br><br>Pulling herself from the edge of death, she gave chase. Calling his name, she ran through the forest until her legs could hardly carry her, until finally, within her view, was Victor, sitting at the edge of a thick fog. His face, twisted and feral, screamed as a dark hooded figure emerged from the fog, grabbed his arm, and seized him. The serenity that had crept into Charlotte was extinguished, replaced with the seething hatred and rage she had depended on for so long. With a tight grip on her sickle, she charged into the fog, prepared to eviscerate any who set foot near her brother.","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"Ji-Woon Hak thrived under the attention of others, energized by every eye that watched him and every tongue that spoke his name. Amidst the prestige, he had only one desire: more. Even as a child he found ways to draw crowds. Working at his family’s restaurant, he attracted business with spectacles he performed using throwing knives. Gullible tourists believed this was a traditional South Korean experience, gladly parting with their money to witness it. Ji-Woon\'s father spent the restaurant’s earnings on dancing and vocal lessons for his son, pushing him to attain the fame he never could.<br><br>Ji-Woon did not disappoint. After years showcasing his abilities to nobodies at talent shows, he hit the track to stardom. Yun-Jin Lee, a producer at Mightee One Entertainment, recruited Ji-Woon into her training program. He transferred to a dormitory in Seoul where, for fourteen hours a day, he was crafted into a star, taught how to move and sing, how to carry himself with the right balance of confidence and modesty.<br><br>Draining as the process was, it worked. Yun-Jin selected Ji-Woon to join the band NO SPIN, bringing a raw energy to their tracks. Fame was almost immediate. Ji-Woon lived in a daze of interviews and adoration, and though the frenzied schedule exhausted his bandmates, he was invigorated. Each day was an affirmation that he was greater than the mediocrity society spewed out.<br><br>But over time, the champagne grew stale. When he looked at his fans, he saw their joy and envy split five ways, thinned out between each band member. The validation that had surged through him left a desperate yearning for more.<br><br>Ji-Woon kept up impressions, mimicking a charm long buried under loathing. He recorded the latest NO SPIN album with his bandmates, never missing a beat. After a lengthy lunch break, he returned to the studio to discover fate had granted him a gift. The scent of burning wires was unmistakable. He rushed to the control room, finding the door blocked by fallen speakers. On the other side, his bandmates pounded on the door, their cries accompanied by the crackling of flames.<br><br>Ji-Woon called to them, dashing to the speakers, grabbing one and—stopping. He froze. Each breath was a conscious, deliberate process requiring all his attention, the nearby cries hardly audible until, slowly, he backed away. And then he heard it. They were screaming his name as they burnt. Screaming for him to save them. Ji-Woon! Ji-Woon! Ji-Woon Hak! It was the most beautiful thing he’d ever heard. When the fire crew arrived, his tears were genuine.<br><br>Ji-Woon was celebrated as a tragic figure, a hero who did all he could in a futile attempt to save his friends. Yun-Jin paraded him through interviews until it was time to rebrand. He was reborn as The Trickster, a solo artist who produced his own songs, sporting a soft heart beneath a wild exterior. But, away from concert set-ups and television stages, something darker grew.<br><br>He targeted those who lived alone, coming to them in the night. The first was a college music student with a captivating voice. Ji-Woon woke him with a baseball bat to the skull, binding his arms and legs, gagging him with a rag duct taped into his mouth. He tortured him for hours, dissecting him alive. Yet there was something missing—a sound, a connection. He wanted to hear the victim’s wonderous voice pleading as he cut his belly open, but all he received was muffled cries through a rag.<br><br>He learned and adjusted.<br><br>Victims had to be abducted, driven to an abandoned building where he could let their voices carry unrestrained emotion. He made music from them, prodding in the right places to evoke different types of shrieks and howls. Stabbing the quadratus lumborum elicited a long, guttural wail, while slashing the carotid artery created a sound similar to a cat being strangled. There was honesty in their suffering. Ji-Woon recorded each session, synthesizing and working them into his songs, hiding them behind layers of melodies.<br><br>He was elated with his work. He left hints for police, arranging a mink boa from a recent photoshoot around a victim’s slashed throat. For his next killing, he removed the teeth from a man that a boxer in one of his music videos was without. During a particularly audacious plea for attention, he killed a fan he had met during a VIP meet-up, replacing her eyes with his diamond cufflinks and writing I HAVE SEEN GOD in blood across her chest. Each scene was a dazzling spectacle.<br><br>Between music and murder, Ji-Woon’s work was discussed globally. However, as violence became his preferred art style, his music career took a hit. Revenue was down and Mightee One executives pointed their fingers at him. Yun-Jin, with professional fury, came to his defense, but she was outnumbered. It was decided that Ji-Woon could no longer self-produce his songs.<br><br>The decision was devastating. His tracks fused genuine humanity into music, yet executives rejected anything that wasn’t generic and expected. And so be it. If they couldn’t understand his art, he would incorporate them into it until they did. \\n\\nHe had three months until he was to perform a private show for Mightee One’s board members; three months to plan his magnum opus. He transferred obscene amounts of money to a veterinarian in exchange for cannisters of nitrous oxide, then bribed the stage technician of Mightee One’s private theatre for access to the room. His celebrity granted him a benefit of the doubt no regular person could conceive. When the show was ready, gas seeped into the room as executives and stagehands awaited Ji-Woon, conveniently running behind schedule. \\n\\nWhen he arrived, half-conscious bodies were splayed in their seats and crawling across the floor. He worked quickly, binding everyone, pausing only when he came to Yun-Jin—the woman who had plucked him from a mudhole and set him on the path he deserved. She would be rewarded, granted special access to the coming display of wonder. Even under sedation, she fought, a raging storm within her, far stronger than the others. He propped her up as the lone audience member, prying her eyes open. The others, sniveling and sobbing, were brought on stage to perform their final act. With a contemptable sneer, he slapped makeup onto their faces and shone stage lights upon them. They became his instruments. \\n\\nTo the sound of self-produced melodies, he tortured them, gracefully dashing from one body to another, conducting an operatic crescendo from their wailings. They shouted, whimpered, screamed, cried for their loved ones, cried for their mothers. It was a magnificent outpouring of emotion, of what it meant to be human, and they did it with eyes fixed on Ji-Woon. \\n\\nViscera drained from the stage until, with the toss of his throwing knife, the final human instrument fell silent and the music stopped. Covered in sweat and blood, an exhausted Ji-Woon looked to Yun-Jin and bowed. Curtain call. He had attained perfection. With blade in hand, he made his way to Yun-Jin, prepared to tie up loose ends before the credits rolled. But as he reached her— \\n\\nThe Fog. \\n\\nFrom where, he didn’t know, but it billowed around them, damp, cool... comfortable. He saw the grand stage: hospitals and temples, forests and slaughterhouses—an eternal plane adorned with rusted hooks, sustained by the million eyes that would watch him, run from him, <i>experience him</i>. All he had to do was accept, become an implement of The Fog and, most importantly, make them scream. \\n\\nEncore!","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"Designed by Umbrella Corporation, The Nemesis is a nearly unstoppable super solider fixated on pursuing and eliminating its targets. Part of the Tyrant T-103 series, this specimen has increased intelligence and awareness due to the NE-α parasite implanted within it. Its first mission unleashed it upon Raccoon City, where it had a singular objective: exterminate S.T.A.R.S. members. Rampaging through the city, The Nemesis faced off against Jill Valentine multiple times, and though she managed to escape, he was never far behind. He nearly had his target, when a strange fog descended upon them, mixing with the smoke of a city in chaos. The phenomenon meant nothing to him—the frigid cold and decreased oxygen never posing a threat. All that mattered was soldiering on into the fog, continuing the mission: find S.T.A.R.S., exterminate S.T.A.R.S., and kill anyone who gets in the way.","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/en/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"A powerful and violent last breath snatched from Crotus Prenn Asylum warden Patrick Spencer. Channelling its energy allows The Nurse to pierce and jump through the spirit world in a Blink multiple times in a row. Doing so leaves her in a state of fatigue.<br><li>Grants the Blink.</li><li>Grants <b>1</b> additional Chain Blink.</li>","name":"Spencer\'s Last Breath","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"A large foothold trap made of steel. Traps are found lying around the area waiting to be picked up and set anywhere.<br><br><b>BEAR TRAP</b><br>By default, you start the trial with <b>1 Bear Trap</b>. Find and collect more throughout the environment.<br><br><b>Set Bear Trap:</b><br>Press and hold the <i>Power button</i> to set a <b>Bear Trap</b> on a valid location in front of you. A set <b>Bear Trap</b> will immobilize and incapacitate any player that steps on it. A healthy Survivor that steps in a set <b>Bear Trap</b> will also become injured but may attempt to escape the trap. Press the <i>Interaction button</i> to pick-up a nearby Survivor who is Incapacitated by a <b>Bear Trap</b>.<br><br><b>Reset Trap:</b><br>Press and hold the <i>Power button</i> while standing near a <b>Bear Trap</b> in the environment to reset it where it lies, if it is not already set.<br><br><b>Collect Bear Trap:</b><br>Press the <i>Interaction button</i> while standing near a <b>Bear Trap</b> in the environment to collect it. By default, you may carry a maximum of <b>1 Bear Trap</b> at any time.","name":"Bear Trap","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"A heavy cast iron bell imbued with ancient powers. Allows its user to enter and walk the spirit world when rung.<br><br><b>WAILING BELL</b><br>Press and hold the <i>Power button</i> to <b>Cloak</b>. Press and hold the <i>Power button</i> again while Cloaked to <b>Uncloak</b>, granting a <b>1 second</b> burst of speed upon reappearing. The Wailing Bell can be heard up to a distance of <b>24 meters</b>.<br><br><b>Cloak:</b><br>While Cloaked, <b>The Wraith</b> is granted increased movement speed, near total invisibility, and the <b>Undetectable</b> status effect. <b>The Wraith</b> may not attack while Cloaked, but can interact with environmental objects. Exposure to bright light forces <b>The Wraith</b> to automatically <b>Uncloak</b>.","name":"Wailing Bell","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"Press and hold the <i>Power button</i> to break into a Chainsaw Sprint. Survivors hit during a Chainsaw Sprint are put into the dying state.<br><li> Each Chainsaw action (starting the Chainsaw, revving the Chainsaw, and <b>Chainsaw Sprinting</b>) will cause the overheat meter to increase.</li><li> When the <b>overheat meter</b> is filled, the Chainsaw cannot be used until it fully cools down. Reaching the heat capacity will not interrupt an ongoing <b>Chainsaw Sprint</b>.</li><li>The <b>overheat meter</b> decreases when the Chainsaw is not in use.</li> ","name":"Chainsaw","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"A skill taught by her mother and mastered in the wild. The Huntress can hurl Hatchets with deadly precision.<br><li>Start the trial with <b>5 Hatchets</b>.</li><li>Charge throw for maximum throwing speed.</li><li>Refill Hatchets at <b>Lockers</b>.</li>","name":"Hunting Hatchets","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"The darkness inside feeds his determination to take the life of his prey.<br><br><b>EVIL WITHIN</b><br>Activating <b>Evil Within</b> allows <b>The Shape</b> to see his prey clearly and build up more evil power by Stalking them. <br><br><b>Evil Within I:</b><br>Grants <b>Undetectable</b> status effect. Slightly decreased movement speed. <i>Basic attack</i> has a slightly decreased lunge.<br><br><b>Evil Within II:</b><br>Moderately decreased Terror Radius. Slightly increased movement speed. <i>Basic attack</i> has a slightly increased lunge.<br><br><b>Evil Within III:</b><br>When triggered, all Survivors suffer from the <b>Exposed</b> status effect. <b>Evil Within III</b> lasts for <b>60 seconds</b>, after which, it regresses to <b>Evil Within II</b>.<br><br><b>SPECIAL ABILITY: STALK</b><br>Press and hold the <i>Power button</i> to Stalk all visible Survivors. Stalking Survivors builds up your progress through <b>Evil Within</b> tiers.<br><br><span class=\\"FlavorText\\">\\"I met him, fifteen years ago; I was told there was nothing left; no reason, no conscience, no understanding; and even the most rudimentary sense of life or death, of good or evil, right or wrong. I met this six-year-old child, with this blank, pale, emotionless face, and the blackest eyes… the devil\'s eyes. I spent eight years trying to reach him, and then another seven trying to keep him locked up because I realized that what was living behind that boy\'s eyes was purely and simply… evil.\\" -Dr Sam Loomis</span>","name":"Evil Within","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"The source of The Hag\'s power, a blackened finger used as a catalyst for her terrible power. The Hag bends and shapes mud to her will. With simple ritualistic drawings, she creates deceitful duplicates of herself made from mud and decay which she can use for various effects.<br><li>Grants the ability to create and maintain <b>10</b> Phantasm Traps.</li><li>Grants the ability to instantly travel to triggered Phantasm Traps when within a <b>40 meter</b> range.</li>","name":"Blackened Catalyst","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"The Cannibal starts the trial with 3 charges. Press and hold the <I>Power button</i> to consume one charge and perform a <b>Chainsaw Sweep</b> attack that can hit multiple targets. Survivors hit during a <b>Chainsaw Sweep</b> are put into the dying state.<br><li>Use a charge to extend the length of the <b>Chainsaw Sweep</b>. Doing this incurs a slightly longer cooldown.</li><li> Chainsaw charges replenish when the chainsaw is not in use.</li><br><br>The <b>Tantrum Meter</b> slowly fills when revving the Chainsaw. Once the meter is full, or after hitting an object during a <b>Chainsaw Sweep</b>, The Cannibal unleashes a <b>Tantrum</b>. The <b>Tantrum</b> damages any Survivor’s around him and puts them into the dying state.<br><li>The <b>Tantrum</b> duration increases for each charge that had been used during the <b>Chainsaw Sweep</b>. Any remaining charges are lost.</li><li> During a <b>Tantrum</b>, movement speed is decreased.</li><li>The <b>Tantrum Meter</b> decreases when the Chainsaw is not in use and completely depletes during a <b>Chainsaw Sweep</b>.</li> ","name":"Bubba\'s Chainsaw","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>CARTER\'S SPARK</b><br>Successfully striking Survivors with <b>The Doctor\'s</b> special abilities, <b>Shock Therapy</b> or <b>Static Blast</b>, increases the Survivor\'s <i>Madness</i>, eventually afflicting them with the <b>Madness</b> status effect and triggering increasingly potent effects.<br><b>Madness I:</b><br>Causes Survivors to scream once, revealing their position to <b>The Doctor</b>. <b>Slightly</b> affects Skill Check placement and direction.<br><b>Madness II:</b><br>Causes Survivors to scream once and experience hallucinations in the form of an <i>illusionary Doctor</i>. <b>Moderately</b> affects Skill Check placement and direction.<br><b>Madness III:</b><br>Causes Survivors to scream intermittently and experience hallucinations in the form of an <i>illusionary Doctor</i>. <b>Tremendously</b> affects Skill Check placement and direction. The Survivor cannot heal, repair, sabotage, unlock, cleanse, or use items until they successfully <i>Snap Out Of It</i>. When a Survivor completes the <i>Snap Out Of It</i> action, they return to <b>Madness I</b>.<br><br><b>SPECIAL ABILITY: Shock Therapy</b><br>Press and hold the <i>Power button</i> to perform <b>Shock Therapy</b>, unleashing a ranged shock attack on the ground in front of you. Survivors struck by <b>Shock Therapy</b> gain increased <i>Madness</i> and any interactions they are performing are immediately interrupted. <b>Shock Therapy</b> immediately negates the <b>Oblivious</b> status effect.<br><br><b>SPECIAL ABILITY: Static Blast</b><br>Press and hold the <i>Active Ability button</i> to perform a <b>Static Blast</b>, causing all Survivors within The Doctor\'s Terror Radius to scream and gain increased <i>Madness</i>. <b>Static Blast</b> can only be activated when not on cooldown. <b>Static Blast</b> immediately negates the <b>Oblivious</b> status effect.","name":"Carter\'s Spark","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"Awake Survivors hear <b>The Nightmare</b>\'s Terror Radius and see him within 16 meters, intermittently see him from 16 to 32 meters, and cannot see him beyond that. <b>The Nightmare</b> passively puts Survivors to sleep and into the Dream World over a span of 60 seconds, and immediately puts them into the Dream World by hitting them with a <i>basic attack</i>.<br><br>In the Dream World, Survivors are afflicted with the <b>Oblivious</b> status effect and can be affected by <b>Dream Snares</b>. Survivors can wake up by failing Skill Checks, having an awake Survivor perform the <i>Wake Up action</i>, or using alarm clocks they find. Each successive <i>Wake Up action</i> takes twice as long. Alarm clocks provide Survivors with immunity to sleep for 30 seconds.<br><br><b>SPECIAL ABILITY: DREAM SNARE</b><br>Hold the <i>Power button</i> to place a <b>Dream Snare</b>. Survivors will be afflicted by the <b>Hindered</b> status effect during, and shortly after, touching a <b>Dream Snare</b>.<br><br>Some add-ons let <b>Dream Pallets</b> replace <b>Dream Snares</b>. Dream Pallets spawn at pallet locations in the Dream World. They are highlighted for <b>The Nightmare</b> and do not stun him.<br><br><b>DREAM TOKENS</b>:<br><b>The Nightmare</b> starts with 5 dream tokens to use for placing Dream Snares. When all tokens are spent, the oldest Dream Snare is destroyed as a new one is placed.<br><br><b>SPECIAL ABILITY: DREAM PROJECTION</b><br>Hold the <i>Active Ability button</i> to teleport to a generator in your view. For each Survivor in the Dream World, the cooldown is reduced by 15%.","name":"Dream Demon","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"Forever devoted to her master\'s cause, she punishes the ungrateful and the guilty with slyness and murderous puzzles.<br><br><b>The Pig</b> can move stealthily, dash in Ambush attacks and put deadly Reverse Bear Traps on Survivors\' heads.<br><br><b>JIGSAW\'S BAPTISM</b><br>Start the trial with <b>4</b> <i>inactive</i> Reverse Bear Traps. While standing over a Survivor in the dying state, press the <i>Active Ability button</i> to place an <i>inactive</i> Reverse Bear Trap on The Survivor. Reverse Bear Traps become <i>active</i> when any generator in the trial is completed.<br>Survivors may attempt to free themselves from <i>active</i> or <i>inactive</i> Reverse Bear Traps by searching Jigsaw Boxes located in the environment to find the correct key.<br><b>Active Reverse Bear Traps:</b><br>When Reverse Bear Traps become <i>active</i>, they initiate a countdown timer. A Survivor with an <i>active</i> Reverse Bear Trap is automatically sacrificed when their timer expires or if they attempt to leave the trial with an <i>active</i> Reverse Bear Trap still attached.<br><br><b>SPECIAL ABILITY: CROUCH</b><br>Press the <i>Active Ability button</i> to Crouch. Press the <i>Active Ability button</i> again while Crouched to stand. <b>The Pig</b> moves at a slower speed while Crouched. <b>The Pig</b> is granted the <b>Undetectable</b> status effect while Crouched.<br><br><b>SPECIAL ATTACK: AMBUSH</b><br>Press and hold the <i>Attack button</i> while Crouched to dash and perform an <b>Ambush</b> attack.<br><br><span class=\\"FlavorText\\">\\"You will give everything to me, every cell in your body. The marks on your arms, they\'re from another life. We\'ll leave that life behind. When you walk down that corridor there is no turning back. Do you understand that?\\" -Jigsaw\'s Baptism</span>","name":"Jigsaw\'s Baptism","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"Throughout his years experimenting with anesthetics and muscle relaxants, The Clown developed several effective concoctions and formulas. He has used his favorite, The Afterpiece Tonic, to great effect, intoxicating and capturing many unwilling victims. The associated Afterpiece Antidote also has useful effects.<br><br>Tap the <i>Active Ability button</i> to switch between the <b>Afterpiece Tonic</b> and the <b>Afterpiece Antidote</b>. Tap or hold and release the <i>Power button</i> to launch a bottle.<br><br>Press and hold the <i>Active Ability button</i> to replenish your bottles.<br><br><b>SPECIAL ABILITY: Afterpiece Tonic</b><br>On contact, the bottle will break, releasing a purple gas cloud that <b>intoxicates</b> Survivors. <b>Intoxicated</b> Survivors will suffer from impaired vision, reduced movement speed, and involuntary coughing for 2 seconds.<br><br><b>SPECIAL ABILITY: Afterpiece Antidote</b><br>On contact, the bottle will break, releasing a gray gas cloud which turns yellow upon activation. The Clown and any Survivors who enter an active <b>Antidote cloud</b> gain a 10% movement speed bonus for 5 seconds. <b>Intoxicated</b> Survivors who enter an <b>Antidote cloud</b> are cured.","name":"The Afterpiece Tonic","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"The Spirit can use her power, Yamaoka’s Haunting, to enter an ethereal plane and reappear at a new location.<br><li>Tap and Hold the Power button to charge. The Spirit will depart her physical body, leaving behind a stationary \'husk\'.</li><br>While Yamaoka’s Haunting is active:<li>The Spirit may traverse freely to a new location, moving at a faster rate for a short duration. She is still confined to movement within the physical environments and surroundings.</li><li>The Spirit leaves the physical plane, losing sight of all Survivors. She can, however, still sense the scratch marks they leave in the environment.</li><li>The Spirit will produce an audible cue at her current location.</li><li>Once the power has ended, The Spirit retains her speed boost for a brief period and her husk fades away.</li><br>Using Yamaoka’s Haunting depletes The Spirit\'s power bar. The power bar will automatically replenish over time. The power bar must be fully replenished before it can be triggered again.","name":"Yamaoka’s Haunting","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"They were a plain group of friends until Frank formed them into a Legion. Now they draw power from the thrilling freedom of not abiding to any rule but their own.<br><br><b>FERAL FRENZY</b><br>Trigger <b>Feral Frenzy</b> to run at a high speed and chain attacks between multiple Survivors. When your power gauge is full, press the <i>Power button</i> to initiate <b>Feral Frenzy</b>. While <b>Feral Frenzy</b> is active, <b>The Legion</b> moves faster and gains access to additional abilities: <b>Pallet Vault</b> and <b>Feral Slash</b>.<br><br><b>SPECIAL ABILITY: PALLET VAULT</b><br>Press the <i>Interaction button</i> while <b>Feral Frenzy</b> is active, to perform a <b>Pallet Vault</b> at a dropped pallet.<br><br><b>SPECIAL ATTACK: FERAL SLASH</b><br>Press the <i>Attack button</i> while <b>Feral Frenzy</b> is active, to perform a <b>Feral Slash</b>. Hitting a Survivor with <b>Feral Slash</b> puts the Survivor into the injured state and inflicts the <b>Deep Wound</b> status effect. The Legion\'s power gauge is refilled and all Survivors within the Terror Radius not afflicted by the <b>Deep Wound</b> status effect are indicated by Killer Instinct. If the Survivor is already afflicted by the <b>Deep Wound</b> status effect, <b>Feral Frenzy</b> ends immediately without effect.","name":"Feral Frenzy","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"Her condition deteriorated as the plague overtook her body: her toes blackened, her neck mushroomed into cysts, and her throat gagged with bloody vomit.<br><br><b>VILE PURGE</b><br>Infect environmental objects and Survivors with <b>Vile Purge</b> to create an unending cycle of sickness. Press and hold the <i>Power button</i> charge <b>Vile Purge</b>, and release the button to unleash a stream of infectious bile. Hitting a Survivor will cause them to become infected. Hitting an environmental object will cause it to become infected for a short time. Survivors interacting with infected objects will also become infected.<br><br>When a Survivor\'s infection indicator is completely filled, The Survivor is put into the injured state, is afflicted by the <b>Broken</b> status effect, and forced to vomit at random intervals.<br><br><b>SPECIAL ABILITY: INGEST CORRUPTION</b><br>Infected Survivors can heal themselves to full health and cure their infection by cleansing at a <i>Pool of Devotion</i>. This action corrupts the pool, allowing <b>The Plague</b> to consume the corruption and empower her purge. Press and hold the <i>Interaction button</i> while next to a corrupt <i>Pool of Devotion</i> to transform <b>Vile Purge</b> into <b>Corrupt Purge</b>. This action removes the corruption from the pool.<br><br><b>SPECIAL ATTACK: CORRUPT PURGE</b><br>After using the <b>Ingest Corruption</b> ability, <b>Vile Purge</b> is replaced by <b>Corrupt Purge</b> a for a short duration. <b>Corrupt Purge</b> instantly damages any Survivor hit by its stream, however, it no longer applies infection to Survivors or environmental objects.","name":"Vile Purge","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>The Ghost Face</b> used to study his victims for weeks, meticulously registering their habits. When the urge to kill swelled, he’d know exactly how and where to strike.<br><br><b>NIGHT SHROUD</b><br>Press the <i>Power button</i> to activate <b>Night Shroud</b> when the power gauge is full. <b>The Ghost Face</b> is granted the <b>Undetectable</b> status effect while <b>Night Shroud</b> is active. Performing a <i>basic attack</i> fully depletes the power gauge and deactivates <b>Night Shroud</b>.<br><br><b>Reveal:</b><br>Survivors within proximity to <b>The Ghost Face</b> may attempt to <i>reveal</i> him by looking in his direction for a short duration. A successful <i>reveal</i> fully depletes <b>The Ghost Face\'s</b> power gauge and automatically deactivates <b>Night Shroud</b>. Survivors who <i>reveal</i> <b>The Ghost Face</b> have their current location indicated by <i>Killer Instinct</i> for a very short duration.<br><br><b>SPECIAL ABILITY: STALK</b><br>Hold down the <i>Power button</i> to Stalk Survivors while <b>Night Shroud</b> is active. Hold down the <i>Power button</i> while behind cover to lean out and Stalk at a faster rate. Completing Stalk progress on a Survivor <i>Marks</i> your target and applies the <b>Exposed</b> status effect to your <i>Mark</i> for a limited amount of time.<br><br><b>SPECIAL ABILITY: CROUCH</b><br>Press the Active Ability button to Crouch. Press the Active Ability button again while Crouched to stand. <b>The Ghost Face</b> moves at a slower speed while Crouched.<br><br><span class=\\"FlavorText\\">“Don’t mind me. That’s it, keep going. Perfect. That’s the image I’ll keep of you.” –The Ghost Face</span>","name":"Night Shroud","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"An unknown and otherworldly power surged through its body. Suddenly the ground ripped open, swallowing The Demogorgon whole.<br><br><b>OF THE ABYSS</b><br>Press and hold the <i>Power button</i> to fully charge and activate <b>Of the Abyss</b>. All Survivors within a close proximity to an activated Portal will be indicated by Killer Instinct.<br><br><b>SPECIAL ATTACK: SHRED</b><br>Press the <i>Attack button</i> while charging or holding <b>Of the Abyss</b> to dive forward and unleash a vicious slash.<br><br><b>SPECIAL ABILITY: PORTALS</b><br>Press the <i>Active Ability button</i> to open a Portal on the ground in front of you.<br><br><b>Traverse Upside Down:</b><br>While standing on a placed Portal with a different Portal highlighted, press the <i>Active Ability button</i> again to travel through the Upside Down to arrive at the targeted Portal.<br><br><b>Activated Portals:</b><br>Portals become \'activated\' when they are first traversed to or from. Only activated Portals may be sealed by Survivors. Activated Portal auras are highlighted in yellow.","name":"Of the Abyss","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"The desire to destroy weaker bloodlines shaped into a literal force.<br><br><b>YAMAOKA\'S WRATH</b><br>Absorb Blood Orbs left by your injured foes. Press and hold the <i>Power button</i> to absorb Blood Orbs in the environment and fill your power gauge. When your power gauge is full, press and hold the <i>Active Ability button</i> to initiate <b>Blood Fury</b>.<br><br><b>Blood Fury:</b>\\nWhile <b>Blood Fury</b> is active, <b>The Oni</b> becomes lethal and gains access to additional abilities: <b>Demon Dash</b> and <b>Demon Strike</b>.<br><br><b>SPECIAL ABILITY: Demon Dash</b><br>Press and hold the <i>Power button</i> while <b>Blood Fury</b> is active to perform a <b>Demon Dash</b>. This ability allows <b>The Oni</b> to cover large distances at high speed.<br><br><b>SPECIAL ATTACK: Demon Strike</b><br>Press and hold the <i>Attack button</i> while <b>Blood Fury</b> is active to perform a <b>Demon Strike</b> in the direction you are facing. <b>Demon Strike</b> has an extended lunge range and successful hits immediately put healthy Survivors into the dying state.","name":"Yamaoka\'s Wrath","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"The Deathslinger’s ingenuity affords him the ability to Reel in bounties with a unique invention—a heavily modified, hybrid rifle that replaces conventional ammunition with a razor-sharp spear affixed to a chain.<br><br><b>THE REDEEMER</b><br>Press and hold the <i>Power button</i> to aim down sights. Press the <i>Attack button</i> to shoot a spear that can lodge itself in a Survivor, allowing them to be Reeled in towards <b>The Deathslinger</b> against their will.<br><br><b>Reel:</b><br>While a Survivor is speared by <b>The Redeemer</b>, press and hold the <i>Power button</i> to Reel them in towards you. Survivors may struggle against the chain or use the environment to pressure the chain to break. Doing so will result in briefly stunning <b>The Deathslinger</b> as well as putting The Survivor in the injured state and applying the <b>Deep Wound</b> status effect. Using a <i>basic attack</i> while a Survivor is speared will break the chain without applying a penalty to either <b>The Deathslinger</b> or The Survivor. Successfully hitting a Survivor with a <i>basic attack</i> while they are speared and healthy will also apply the <b>Deep Wound</b> status effect.<br><br><b>Reload:</b><br><b>The Redeemer</b> must be Reloaded after every shot, before it may be fired again. Press the <i>Active Ability button</i> to Reload <b>The Redeemer</b>.","name":"The Redeemer","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"Open the gates of suffering and be judged! The Great Knife splits the ground, giving rise to an infernal construct and spreading agony to all who approach.<br><br><b>RITES OF JUDGMENT</b><br>Hold the <i>Power button</i> to activate, then move in any direction to carve a trail into the ground.<br><br>Survivors who walk or run on the trail will trigger <i>Killer Instinct</i> and be afflicted with <i>Torment</i>. Survivors affected by <i>Torment</i> may be sent to a <b>Cage of Atonement</b> while they are in the dying state.<br><br><b>SPECIAL ATTACK: Punishment of the Damned</b><br>Press the <i>Attack button</i> while <b>Rites of Judgment</b> is active to perform <b>Punishment of the Damned</b>. This unleashes a wave of force, damaging any Survivors in its path.<br><br><b>SPECIAL ABILITY: Cage of Atonement</b><br>Press the <i>Active Ability button</i> while standing over a dying Survivor suffering from <i>Torment</i> to send them to a <b>Cage of Atonement</b>. Survivors in a <b>Cage of Atonement</b> can be sacrificed as if they were on a hook. During the second phase of the summoning ritual they will be forced to complete Skill Checks to hold off The Entity.<br><br>Being rescued or rescuing another Survivor from a <b>Cage of Atonement</b> will remove <i>Torment</i>.<br><br><b>SPECIAL ABILITY: Final Judgment</b><br>Press the <i>Active Ability button</i> when standing over a dying Survivor suffering from <i>Torment</i> who has already reached struggle phase on a hook or in a cage to execute them.","name":"Rites of Judgment","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"Pustula serum courses through his veins, corrupting his mind and body, yet granting him unnatural physical abilities.<br><br><b>SPECIAL ABILITY: RUSH</b><br>Press the <i>Power button</i> to quickly <b>Rush</b> forward. Doing so consumes a <b>Rush</b> token. While performing <b>Rush</b>, The Blight cannot launch an attack.<br><br><b>Rush</b> into a wall or obstacle in the environment to <b>Slam</b> onto it. If the <b>Rush</b> fails to connect with a wall or obstacle, or if The Blight is out of <b>Rush</b> tokens, he will enter a short fatigue state and begin recharging the tokens.<br><br><b>SPECIAL ATTACK: LETHAL RUSH</b><br>Following a <b>Slam</b>, press the <i>Power button</i> to launch a <b>Lethal Rush</b>. Doing so consumes a <b>Rush</b> token. A <b>Lethal Rush</b> behaves the same as a <b>Rush</b>, except that The Blight may launch an attack by pressing the <i>Attack button.</i>","name":"Blighted Corruption","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"Though forever bound through blood & trauma, The Twins have been granted the power to separate from their shared body. Together they hunt as brother and sister, doubling the threat to Survivors.<br><br><b>Blood Bond</b><br>Press and hold the <i>Power button</i> to unleash <b>Victor</b>. Swap control between <b>Charlotte</b> and <b>Victor</b> by tapping the <i>Ability button</i>.<br><br>While left on his own, <b>Victor</b> will trigger <b>Killer Instinct</b>, revealing to <b>Charlotte</b> the outlines of Survivors who are walking or running near him. Survivors who can hear <b>Victor’s</b> shrieks are susceptible. However, <b>Victor</b> can be crushed by Survivors while <b>Charlotte</b> is being controlled.<br><br>If crushed, <b>Victor</b> will re-grow on <b>Charlotte</b> after some time has passed.<br><br><b>SPECIAL ATTACK: Pounce</b><br>While controlling <b>Victor</b>, hold the <i>Ability button</i> to charge a <b>Pounce</b> and tap the <i>Attack button</i> to unleash it.<br><br>Successfully landing a <b>Pounce</b> deals damage to the Survivor. If the Survivor was at full health, <b>Victor</b> will latch on, triggering <b>Killer Instinct</b> and revealing the location of all nearby Survivors. While latched on, the Survivor will be afflicted with the <b>Broken</b>, <b>Oblivious</b>, and <b>Incapacitated</b> status effects. They will be unable to enter lockers or leave through the exit gate. The Survivor can crush <b>Victor</b> while he\'s latched onto them by completing the <b>Remove</b> action.<br><br>If <b>Victor</b> misses his <b>Pounce</b>, he is momentarily vulnerable and can be crushed by a Survivor. If Victor lands on an obstacle taller than himself, he will be destroyed.","name":"Blood Bond","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"A mesmerizing skill honed through a lifetime of practice, Ji-Woon Hak unleashes a flurry of knives with rapid-fire speed.<br><br><b>SHOWSTOPPER</b><br><br>Start the trial with <b>60 Blades</b>. Press and hold the <i>Power button</i> to wind up and enter the throw state.<br><br>While in the throw state, tap the <i>Attack button</i> to throw a single Blade, or hold down the <i>Attack button</i> to unleash a flurry of Blades. Throwing a flurry increases control and throw rate while decreasing movement speed. Restock Blades at lockers.<br><br><b>Laceration Meter:</b> A Survivor’s <b>Laceration Meter</b> increases each time they’re hit by a Blade. Once the meter is filled, they will lose a health state, either becoming injured or downed.<br><br>A Survivor’s Laceration Meter will gradually decrease if they have not been hit by a Blade for a short time. Hitting a Survivor with a basic attack will immediately decrease their Laceration Meter.<br><br><b>SPECIAL ABILITY: Main Event</b><br>Each Blade hit fills the <b>Event Meter</b>. Once full, <b>Main Event</b> can be activated by pressing the <i>Ability button</i>. In this mode, The Trickster automatically throws unlimited Blades for the duration of <b>The Main Event</b>. His throw rate is significantly increased and his movement speed does not decrease after each throw. <b>The Main Event</b> can be cancelled by pressing the <i>Ability button</i>. Doing so resets the <b>Event Meter</b> to 0 and initiates a cooldown on <b>Showstopper</b>.","name":"Showstopper","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"A virus that causes extreme mutations and can be transferred to others. Heightens aggression and strength within The Nemesis.<br><br><b>SPECIAL ATTACK: Tentacle Strike</b><br>Press and hold the Power button to charge an attack. Once charged, tap the Attack button. Hitting a Survivor with <b>Tentacle Strike</b> afflicts them with the <b>Contaminated</b> status effect and increases your <b>Mutation Rate</b>. If a Survivor is already <b>Contaminated</b>, <b>Tentacle Strike</b> damages their health and increases <b>Mutation Rate</b>.<br><br> <b>Vaccine</b> found in <b>Supply Cases</b> cures <b>Contamination</b>. Their availability is limited. After using a <b>Vaccine</b>, the Survivor’s location is revealed by Killer Instinct.<br><br><b>Mutation Rate:</b> Your power expands as your <b>Mutation Rate</b> grows. At <b>Mutation Rate 2</b>, <b>Tentacle Strike</b> can destroy pallets and breakable walls. At <b>Mutation Rate 3</b>, <b>Tentacle Strike</b>’s range increases. The T-Virus icon displays the current <b>Mutation Rate</b>.<br><br><b>SPECIAL ENEMY: Zombies</b><br>If a <b>zombie</b> hits a Survivor, they inflict them with the <b>Contaminated</b> effect. If already <b>Contaminated</b>, their health will be damaged.<br><br><b>Zombies</b> can be destroyed by a <b>Tentacle Strike</b> to increase your <b>Mutation Rate</b>, and Survivors can destroy them with pallets. Destroyed <b>zombies</b> eventually respawn.","name":"T-VIRUS","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/en/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Grants <b>100%</b> bonus Bloodpoints in all categories for all players this trial.<br><li>Stacks</li>","name":"Bloody Party Streamers","flavor":"\\"A reminder of a bloody good time when people came together, but left screaming.\\"","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"<b>Slightly lessens</b> the Dark Mist.<br><li>Stacks.</li>","name":"Clear Reagent","flavor":"\\"The Mist rolls in, traps all in Its deep madness. There is no running, no escape, no asylum, except for the clear waters of the pond lost in the forest.\\" -Unknown, Notebook","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"<b>Slightly thickens</b> the Dark Mist.<br><li>Stacks.</li>","name":"Faint Reagent","flavor":"\\"Paralyzed, I stand in the cold as death lingers.\\"","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"<b>Moderately thickens</b> the Dark Mist.<br><li>Stacks.</li>","name":"Hazy Reagent","flavor":"\\"The Mist is alluring, hypnotizing. I love It and fear It at the same time.\\" -Donna\'s Sketchbook","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"<b>Greatly thickens</b> the Dark Mist.<br><li>Stacks.</li>","name":"Murky Reagent","flavor":"\\"The Mist seems to protect us from the beast, but it is a poison, a cancer, filling us with darkness and insanity.\\" -Unknown, Notebook","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"Calls upon The Entity for the <b>darkest moonlight</b>.","name":"New Moon Bouquet ","flavor":"\\"Better go back to sleep, there is no moon this night.\\"","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"Calls upon The Entity for a <b>dimmed moonlight</b>.","name":"Crescent Moon Bouquet","flavor":"\\"The moon slowly fades into a smile: \'Don\'t worry, your secret is safe with me.\' Or is it a grin?\\"","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"Calls upon The Entity for a <b>brighter moonlight</b>.","name":"Quarter Moon Bouquet","flavor":"\\"The old moon shows her face, looking down on the prey.\\"","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"Calls upon The Entity for the <b>brightest moonlight</b>.","name":"Full Moon Bouquet","flavor":"\\"As the moon rises, the wolves howl, marking the beginning of the hunt.\\"","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"<b>Slightly increases</b> the chances of being sent to the MacMillan Estate when burnt.<br><li>Stacks.</li>","name":"MacMillan Ledger Page","flavor":"\\"A torn and faded-out ledger page with unreadable information except for the MacMillan stamp.\\"","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"<b>Considerably increases</b> the chances of being sent to the MacMillan Estate when burnt.<br><li>Stacks.</li>","name":"Signed Ledger Page","flavor":"\\"A faded-out ledger page referring to mining related equipment and other transactions. Signed by Archie MacMillan.\\"","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"<b>Tremendously increases</b> the chances of being sent to the MacMillan Estate when burnt.<br><li>Stacks.</li>","name":"MacMillan\'s Phalanx Bone","flavor":"\\"MacMillan\'s skeletal remains were found in the basement of the mine\'s storehouse. His leg bones shattered into pieces and a mining hammer lying in his lap.\\"","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"<b>Slightly increases</b> the chances of being sent to the Autohaven Wreckers when burnt.<br><li>Stacks.</li>","name":"Shredded Plate","flavor":"\\"A heavily rusted, bent and torn metal sheet.\\"","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"<b>Considerably increases</b> the chances of being sent to the Autohaven Wreckers when burnt.<br><li>Stacks.</li>","name":"Virginia Plate","flavor":"\\"A rusted and bent license plate from the state of Virginia.\\"","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"<b>Tremendously increases</b> the chances of being sent to the Autohaven Wreckers when burnt.<br><li>Stacks.</li>","name":"Azarov\'s Key","flavor":"\\"A broken key belonging to a vehicle of unknown brand. A keychain attached to it identifies the owner as a certain A. Azarov.\\"","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"<b>Slightly increases</b> the chances of being sent to Coldwind Farm when burnt.<br><li>Stacks.</li>","name":"Cattle Tag-28","flavor":"\\"A bloodstained cattle tag identified with the number \'28\'.\\"","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"<b>Considerably increases</b> the chances of being sent to Coldwind Farm when burnt.<br><li>Stacks.</li>","name":"Coldwind Cattle Tag-81","flavor":"\\"A bloodstained cattle tag identified with \'Coldwind Farm\' and the number \'81\'.\\"","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"<b>Tremendously increases</b> the chances of being sent to Coldwind Farm when burnt.<br><li>Stacks.</li>","name":"Heart Locket","flavor":"\\"A silver heart locket necklace. The simple interior is engraved with the following: \'E+M\'.\\"","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"<b>Slightly increases</b> the chances of being sent to Crotus Prenn Asylum when burnt.<br><li>Stacks.</li>","name":"Lunacy Ticket","flavor":"\\"A worn and faded-out ticket of paper with unreadable information.\\"","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"<b>Considerably increases</b> the chances of being sent to Crotus Prenn Asylum when burnt.<br><li>Stacks.</li>","name":"P.Elliott Lunacy Ticket","flavor":"\\"A pink paper ticket identifying Philip Elliott as to be transferred to Crotus Prenn Asylum.\\"","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"<b>Tremendously increases</b> the chances of being sent to Crotus Prenn Asylum when burnt.","name":"Charred Wedding Photograph","flavor":"\\"A burned portrait of a couple on their wedding day, the faces are completely charred and unidentifiable.\\"","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"<b>Slightly increases</b> the chances of being sent to Haddonfield when burnt.<br><li>Stacks.</li>","name":"Harvest Festival Leaflet","flavor":"\\"A washed out informational leaflet for the \'78 Haddonfield Harvest Festival. A large cartoon pumpkin is depicted on the front.\\"","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"<b>Considerably increases</b> the chances of being sent to Haddonfield when burnt.<br><li>Stacks.</li>","name":"Decrepit Clapboard","flavor":"\\"A moldy and rotten beaded oak clapboard like the ones found on most houses of Haddonfield.\\"","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"<b>Tremendously increases</b> the chances of being sent to Haddonfield when burnt.","name":"Strode Realty Key","flavor":"\\"A house key, mundane in appearance. A cardboard key-tag attached to it reads \'Strode Real Estate\', followed by a handwritten address: \'45 Lampkin Lane\'.\\"","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"<b>Slightly increases</b> the chances of being sent to Backwater Swamp when burnt.<br><li>Stacks.</li>","name":"Fuming Cordage","flavor":"\\"A burnt piece of marine rope still emitting a warm smoke.\\"","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"<b>Considerably increases</b> the chances of being sent to Backwater Swamp when burnt.<br><li>Stacks.</li>","name":"Fuming Welcome Sign","flavor":"\\"A welcome sign made from a coarse piece of water polished cypress board. The sign is charred and still fuming.\\"","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"<b>Tremendously increases</b> the chances of being sent to Backwater Swamp when burnt.","name":"Grandma\'s Cookbook","flavor":"\\"A leather-bound binder containing horrible human meat recipes such as the granny-slappin’ good chili.\\"","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"<b>Slightly increases</b> the chances of being sent to Léry\'s Memorial Institute when burnt.<br><li>Stacks.</li>","name":"Emergency Certificate","flavor":"\\"A yellow carbon-copy certificate which admits a patient into immediate detention for emergency treatment. Copied information are smudged and unreadable.\\"","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"<b>Considerably increases</b> the chances of being sent to Léry\'s Memorial Institute when burnt.<br><li>Stacks.</li>","name":"Psychiatric Assessment Report","flavor":"\\"A Psychiatric report signed by Herman Carter. It describes the memory deterioration of a patient and contains suggestions for next steps in the procedure.\\"","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"<b>Tremendously increases</b> the chances of being sent to Léry\'s Memorial Institute when burnt.","name":"Shattered Glasses","flavor":"\\"Bent reading glasses. Speckles of dried blood can be seen on the shattered lens.\\"","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"<b>Slightly increases</b> the chances of being sent to Red Forest when burnt.<br><li>Stacks</li>","name":"Painted River Rock","flavor":"\\"A slick and soft rock, polished by a stream. Decorated with red, black and white paint to depict a serious looking bear.\\"","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"<b>Considerably increases</b> the chances of being sent to Red Forest when burnt.<br><li>Stacks</li>","name":"Children\'s Book","flavor":"\\"An ancient and decrepit story book, the pages of which have been lost to the elements.\\"","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"<b>Tremendously increases</b> the chances of being sent to Red Forest when burnt.","name":"The Last Mask","flavor":"\\"A beautifully crafted tiger mask that would fit snug on a child\'s face. A faded note in Cyrillic letters can be found scripted on the back.\\"","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"<b>Tremendously increases</b> the chances of being sent to Springwood when burnt.","name":"The Pied Piper","flavor":"\\"Betrayed by the town, he exacts his revenge by taking all their children.\\"","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"Burning this offering grants you protection against the loss of your add-ons at the end of the trial.","name":"Black Ward","flavor":"\\"Hear my voice, spare my ways, protect me from the void.\\"","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"Burning this offering grants you protection against the loss of your item and add-ons.","name":"White Ward","flavor":"\\"Keep me from evil, defend me, and pass away.\\"","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"<b>Tremendously increases</b> the chances of being sent to Yamaoka Estate when burnt.","name":"Yamaoka Family Crest","flavor":"\\"You never leave a broken home. You only run away until the memories stop haunting you.\\"","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"Calls upon The Entity to reject all offerings that alter the chance of being sent to a specific realm.<br>This can only be canceled if four identical realm offerings are played.","name":"Sacrificial Ward","flavor":"“With blind eyes, we surrender our will and appeal to you for guidance.”","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"<b>Tremendously increases</b> the chance to be sent to Midwich Elementary School when burnt.","name":"Mary’s Letter","flavor":"\\"In my restless dreams, I see that town.\\"","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"<b>Tremendously increases</b> the chances of being sent to Gideon Meat Packing Plant when burnt.","name":"Jigsaw Piece","flavor":"\\"Congratulations. You are still alive. Most people are so ungrateful to be alive. But not you. Not anymore.\\"","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"<b>Tremendously increases</b> the chance to be sent to Hawkins National Laboratory when burnt.","name":"Hawkins National Laboratory I.D. ","flavor":"\\"A soggy, bloodstained identification card with a serial number.\\"","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"<b>Tremendously increases</b> the chance to be sent to Grave of Glenvale when burnt.","name":"Dusty Noose","flavor":"“Ask anyone trying to survive on this dust-choked land and they’ll tell you what a noose really is—a damn mercy.”","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"A terrific stomach-churning cake to mark our three years together. Grants <b>103%</b> bonus Bloodpoints in all categories for all players this trial.<br><li>Stacks</li>","name":"Gruesome Gateau","flavor":"“Happy Anniversary! Here\'s to our three years together!\\"<br>– The Dead by Daylight Team","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"A spectacularly grim cake to mark our four years together. 1% tastier than a Gruesome Gateau. Grants <b>104%</b> bonus Bloodpoints in all categories for all players this trial.<br><li>Stacks</li>","name":"Ghastly Gateau","flavor":"\\"Happy Anniversary! Here\'s to many more!\\"<br>- The Dead by Daylight Team","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/en/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"A thin wide lens in perfect condition. Designed to spread the Flashlight beam at the cost of reducing its range of effectiveness.<br><li><b>Moderately widens</b> the Flashlight beam.</li><li><b>Slightly decreases</b> the range of the Flashlight beam.</li>","name":"Wide Lens","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"A tiny Flashlight bulb that packs more wattage for a brighter, more powerful light beam.<br><li><b>Slightly narrows</b> the radius of the Flashlight beam.</li><li><b>Slightly increases</b> the beam\'s visual brightness.</li><li><b>Slightly increases</b> the Blindness duration.</li>","name":"Power Bulb","flavor":"\\"Even the most powerful light cannot pierce through The Black Fog\'s darkness.\\"","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"A leather strip wrapped around the Flashlight for more grip.<br><li><b>Slightly increases</b> the Flashlight\'s accuracy.</li>","name":"Leather Grip","flavor":"\\"Too many have fallen due to sweaty hands.\\"","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"A standard battery of unknown brand.<br><li>Adds <b>2 seconds</b> of use to a standard Flashlight.</li>","name":"Battery","flavor":"\\"Another nearly empty battery.\\"","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"A lens and reflector combo which can magnify a Flashlight\'s beam.<br><li><b>Moderately increases</b> the beam\'s visual brightness.</li><li><b>Moderately increases</b> the Blindness duration.</li>","name":"TIR Optic","flavor":"\\"Let the light burn them out of their dark shroud.\\"","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"A rubber grip specifically fitting Flashlights for more grip.<br><li><b>Moderately increases</b> the Flashlight\'s accuracy.</li>","name":"Rubber Grip","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"A filament bulb designed to extend a Flashlight battery\'s life.<br><li><b>Moderately decreases</b> Flashlight battery consumption.</li>","name":"Low Amp Filament","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"A battery marked as \\"industrial strength\\".<br><li>Adds <b>4 seconds</b> of use to a standard Flashlight.</li>","name":"Heavy Duty Battery","flavor":"\\"A battery advertised as lasting 8 hours lasts only a couple of seconds in The Black Fog.\\"","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"A thick glass lens that focuses the Flashlight beam to increase its intensity.<br><li><b>Slightly increases</b> the range of the Flashlight beam.</li><li><b>Slightly narrows</b> the radius of the Flashlight beam.</li><li><b>Slightly increases</b> the beam\'s visual brightness.</li><li><b>Slightly increases</b> the Blindness duration.</li>","name":"Focus Lens","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"A recent model of battery that lasts longer.<br><li>Adds <b>6 seconds</b> of use to a standard Flashlight.</li>","name":"Long Life Battery","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"A chemical bulb that generates an intensely clear light.<br><li><b>Considerably increases</b> the beam\'s visual brightness.</li><li><b>Considerably increases</b> the Blindness duration.</li>","name":"Intense Halogen","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"A wide lens made of unscratchable sapphire that optimises the power and range of the light beam.<br><li><b>Moderately widens</b> the Flashlight beam.</li><li><b>Slightly increases</b> the Flashlight beam.</li><li><b>Moderately increases</b> the beam\'s visual brightness.</li><li><b>Moderately increases</b> the Blindness duration.</li>","name":"High-end Sapphire lens","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"A heavy and completely opaque bulb of unknown origin which emits a faint light even when turned off.<br><li><b>Tremendously increases</b> the beam\'s visual brightness.</li><li><b>Tremendously increases</b> the Blindness duration.</li><li><b>Slightly increases</b> the Flashlight battery consumption.</li>","name":"Odd Bulb","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"Tightly knitted rope used in praying rituals. Can be attached to the Key.<br><li>Adds <b>10 seconds</b> of use to the Key.</li>","name":"Prayer Rope","flavor":"\\"Pray all you want, your words are getting lost somewhere up there, in The Fog.\\"","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"A porous and scratched white pearl. A minuscule jump ring allows the pearl to be attached to the Key.<br><li><b>Moderately increases</b> the range of the Key\'s aura reading ability.</li>","name":"Scratched Pearl","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"A chain of matte beads of various sizes used in praying rituals. Can be attached to the Key.<br><li>Adds <b>15 seconds</b> of use to the Key.</li>","name":"Prayer Beads","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"A heavily worn out token made of brass. If an inscription or drawing was once engraved in it, it has today completely disappeared. Can be attached to the Key using its jump ring to channel the Key\'s aura reading ability.<br><li>Reveals <b>Survivors\' auras</b> when within a <b>24 meter</b> range.</li>","name":"Eroded Token","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"A gold token with a dull appearance. Both faces are smooth and void of any inscriptions. Can be attached to the Key using its jump ring to channel the key\'s aura reading ability.<br><li>Reveals <b>Survivors\' auras</b> when within a <b>48 meter</b> range.</li>","name":"Gold Token","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"A mundane key ring in appearance with an unusual bluish dark sheen. The ring binds the Key to the user, preventing its loss even in the darkest of times.<br><li>Do not lose the Key on death, lose this add-on instead.</li>","name":"Weaved Ring","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"This opaque piece of glass emits a dull vibrating noise. When the Key is used to unlock the Hatch, the glass token protects the Key from breaking, channeling The Fog\'s energy into the glass.<br><li>Do not lose the Key when unlocking the Hatch, lose this add-on instead.</li>","name":"Milky Glass","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"A blood-red amber striped with black veins. The amber is warm to the touch. Can be attached to the Key using its jump ring to channel the key\'s aura reading ability.<br><li>Reveals the <b>Killer\'s aura</b> when within a <b>32 meter</b> range at the <b>great expense</b> of the Key\'s energy.</li>","name":"Blood Amber","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"A fragmented piece of a thick fibrous material. A partial and faded Map is drawn on it which by itself is useless.<br><li>Adds a <b>5 second charge</b> to any Map.</li>","name":"Map Addendum","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"A small electrical wire. Both ends are heavily damaged like it has been forcefully torn out of its intended location. Can be tied around a Map to enhance its aura reading ability.<br><li>Unlocks the ability to track <b>exit gates</b>.</li>","name":"Yellow Wire","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"A wooden stamp with a crosshatched rubber pad used to mark documents. It is unclear as to how or by whom this stamp was originally used. Can be used with a Map.<br><li><b>Moderately increases</b> the range of the Map tracking ability.</li>","name":"Unusual Stamp","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"A slimy, translucent substance with a ghastly lavender shade. This jelly from unknown origin is highly resistant to heat.<br><li><b>Moderately slows down</b> the burning rate of the Map.</li>","name":"Retardant Jelly","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"A bristly and rough piece of twine of a deep red color. Can be tied around a Map to enhance its aura reading ability.<br><li>Unlocks the ability to track the <b>Killer\'s belongings</b>.</li>","name":"Red Twine","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"A strange bead circled with gold that can be used to magnify the Map and mark a specific position. The bead emits an energy which can be felt and seen by Survivors.<br><li>Unlocks the marker ability on secondary action.</li><li>Creates a marker that can be seen by all Survivors.</li>","name":"Glass Bead","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"A stamp carved out of sturdy blonde wood. The text found at the base is incomprehensible: \\"kw\'zvre\'od\\". Can be used with a Map.<br><li><b>Considerably increases</b> the range of the Map tracking ability.</li>","name":"Odd Stamp","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"A smooth black cord with a soft appearance. Can be tied around a Map to enhance its aura reading ability.<br><li>Unlocks the ability to track <b>the Hatch</b>.</li>","name":"Black Silk Cord","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"An intricate set of lenses wrapped up in an astonishingly complex apparatus. The gears controlling the lenses\' focus move by themselves as to focus on something invisible to humans.<br><li>Every Survivor sees the aura generated by the Map when the owner activates it.</li>","name":"Crystal Bead","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"Disposable medical gloves to avoid cross-contamination.<br><li><b>Moderately increases</b> progression bonus for succeeding Great Skill Checks.</li>","name":"Rubber Gloves","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"Medical quality tape used to close small wounds.<br><li><b>Slightly increases</b> healing speed.</li>","name":"Butterfly Tape","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"A pack of bandages usually found in first aid kits.<br><li>Adds <b>8 charges</b> to the Med-kit.</li>","name":"Bandages","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"A mundane sponge used to soak up extra blood, providing easier access to wounds.<br><li><b>Considerably increases</b> progression bonus for succeeding Great Skill Checks.</li>","name":"Sponge","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"A pack of bandages that sticks to themselves without the need of clips for a faster patch-up that requires less readjustments.<br><li>Adds <b>8 charges</b> to the Med-kit.</li><li><b>Slightly increases</b> the healing speed.</li>","name":"Self Adherent Wrap","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"Not exactly a medical device, however it can be used to quickly and painfully close up a wound.<br><li><b>Moderately increases</b> the chances of triggering a Skill Check.</li><li><b>100% Bonus Bloodpoints </b> granted for succeeding Great Skill Checks.</li><li><b>Slightly increases</b> healing speed.</li>","name":"Needle & Thread","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"Scissors designed to easily cut through textiles.<br><li><b>Moderately increases</b> healing speed.</li>","name":"Medical Scissors","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"A sterile gauze used for a variety of wounds. Part of a total wound care system.<br><li>Adds <b>12 charges</b> to the Med-kit.</li>","name":"Gauze Roll","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"A medical device used to close and hold body tissue. Even though it\'s very effective, the surgical suture is challenging to use.<br><li><b>Considerably increases</b> the chances of triggering a Skill Check.</li><li><b>150% Bonus Bloodpoints </b> granted for succeeding Great Skill Checks.</li><li><b>Slightly increases</b> healing speed.</li>","name":"Surgical Suture","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"A pack of gel forming pads used to patch up heavily exudating wounds.<br><li>Adds <b>16 charges</b> to the Med-kit.</li>","name":"Gel Dressings","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"A highly absorbent pad that prevents bodily fluid leakage when applied to large abdominal wounds.<br><li><b>Considerably increases</b> healing speed.</li><li><b>Reduce charges</b> by <b>8</b>.</li>","name":"Abdominal Dressing","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"A white powder with coagulant properties. Apply the agent to a wound to stop it from hemorrhaging.<br><li>Press the <i>Secondary Action</i> button while healing with the Med-kit to use the Styptic Agent.</li><li>When the <i>Styptic Agent</i> is used on an injured Survivor, they gain the <b>Endurance</b> status effect for <b>8 seconds</b>.<li>Consumes the Med-kit on use.</li>","name":"Styptic Agent","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"An anti-hemorrhagic substance that stops the bleeding in a matter of seconds.<br><li>Press the <i>Secondary Action</i> button while healing with the Med-kit to use the Anti-Hemorrhagic Syringe.</li><li>The affected Survivor will passively gain a health state <b>16</b> seconds after use.</li><li>The time required is modified by perks, items and add-ons that affect <i>Healing Speeds</i>.</li><li>This effect is canceled when the affected Survivor changes health state or is picked up.</li><li>Consumes the Med-kit on use.</li>","name":"Anti-Hemorrhagic Syringe","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"Useful tool to clamp hoses or hold wires in place and prevent damage or injury.<br><li>The noises caused by your repairs and their hearing distance are reduced by 8 meters.</li>","name":"Spring Clamp","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"Springs, screws and gears. Mostly unusable junk.<br><li>Adds <b>8 charges</b> to the Toolbox.</li>","name":"Scraps","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"A mundane rag. Suspiciously clean.<br><li><b>Slightly increases</b> the Toolbox\'s repair speed.</li>","name":"Clean Rag","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"A portable but heavy spool of copper wire.<br><li>Adds <b>12 charges</b> to the Toolbox.</li>","name":"Wire Spool","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"Swivels provide bend and flexibility for bolts that are out of reach, deep within mechanical devices.<br><li><b>Moderately increases</b> the Toolbox repair speed.</li>","name":"Socket Swivels","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"Thick gloves which reduce manual dexterity but protect hands from injury.<br><li>Prevents the Killer from being notified when sabotaging a hook with the Toolbox.</li>","name":"Protective Gloves","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"Someone quickly painted what seems to be repair instructions on this piece of bark.<br><li>Eliminates Skill Checks while repairing with the Toolbox.</li>","name":"Instructions","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"An adjustable wrench with a tough grip. Essential in any Toolbox.<br><li>Hooks sabotaged using the Toolbox take an extra 15 seconds to respawn.</li>","name":"Grip Wrench","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"A rudimentary cutting tool made from a jagged metal wire and two wooden handles.<br><li><b>Slightly increases</b> the Toolbox\'s sabotage speed.</li>","name":"Cutting Wire","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"A small hand saw mounted with a metal cutting blade.<br><li><b>Moderately increases</b> the Toolbox\'s sabotage speed.</li>","name":"Hacksaw","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"This intricate mechanical part feels oddly out of place. It is clean and shiny as if straight out of the factory.<br><li><b>Toolbox Repair</b> action is replaced with <b>Install Brand New Part</b>.</li><li>Installing the <i>Brand New Part</i> will automatically repair <b>15%</b> of a generator over <b>5 seconds</b>.</li><li>During the installation, you will be faced with <b>2 difficult Skill Checks</b>.</li><li>Successfully hitting a Skill Check will result in an additional <b>5% generator repair progress</b>, up to a total of <b>25% generator repair progress</b>.</li><li><i>This add-on is consumed after use</i></li>","name":"Brand New Part","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"An engraved wedding ring that emerged from The Fog and resonates with an indescribable and incomprehensible energy. <li>Reveals the Obsession\'s aura.</li><li>Decreases your chances to be The Killer’s Obsession.</li>","name":"Unique Wedding Ring","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/en/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Grants <b>50%</b> bonus Bloodpoints in the Objective category.<br><li>Personal.</li><li>Stacks.</li>","name":"Bog Laurel Sachet","flavor":"\\"A palm-sized hand-sewn sachet filled with dry leaves. Releases a faint tea-like aroma.\\"","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"Grants <b>75%</b> bonus Bloodpoints in the Objective category.<br><li>Personal.</li><li>Stacks.</li>","name":"Fresh Bog Laurel","flavor":"\\"A beautiful purple flower that grows in the midst of the tainted swamp. Releases a mild tea-like aroma.\\"","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"Grants <b>100%</b> bonus Bloodpoints in the Objective category.<br><li>Personal.</li><li>Stacks.</li>","name":"Fragrant Bog Laurel","flavor":"\\"A beautiful purple flower that grows in the midst of the tainted swamp. Releases a strong tea-like aroma.\\"","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"Grants <b>50%</b> bonus Bloodpoints in the Survival category.<br><li>Personal.</li><li>Stacks.</li>","name":"Crispleaf Amaranth Sachet","flavor":"\\"A palm-sized hand-sewn sachet stuffed with bead-like grain. Amaranth is said to be everlasting.\\"","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"Grants <b>75%</b> bonus Bloodpoints in the Survival category.<br><li>Personal.</li><li>Stacks.</li>","name":"Fresh Crispleaf Amaranth","flavor":"\\"The pale green leaves are highlighted with peculiar crimson veins. Amaranth is said to be everlasting.\\"","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"Grants <b>100%</b> bonus Bloodpoints in the Survival category.<br><li>Personal.</li><li>Stacks.</li>","name":"Fragrant Crispleaf Amaranth","flavor":"\\"The pale green leaves are highlighted with peculiar crimson veins. Releases a strong radish aroma.\\"","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"Grants <b>50%</b> bonus Bloodpoints in the Altruism category.<br><li>Personal.</li><li>Stacks.</li>","name":"Primrose Blossom Sachet","flavor":"\\"A palm-sized hand-sewn sachet containing 4 gold petals. The primrose opens at the very last moment before the sun gives place to the night.\\"","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"Grants <b>75%</b> bonus Bloodpoints in the Altruism category.<br><li>Personal.</li><li>Stacks.</li>","name":"Fresh Primrose Blossom","flavor":"\\"Golden flowers harvested at their peak. The primrose opens at the very last moment before the sun gives place to the night.\\"","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"Grants <b>100%</b> bonus Bloodpoints in the Altruism category.<br><li>Personal.</li><li>Stacks.</li>","name":"Fragrant Primrose Blossom","flavor":"\\"Golden flowers harvested at their peak. Releases a strong earthy and comforting aroma.\\"","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"Grants <b>50%</b> bonus Bloodpoints in the Boldness category.<br><li>Personal.</li><li>Stacks.</li>","name":"Sweet William Sachet","flavor":"\\"A palm-sized hand-sewn sachet containing a mix of pale petals and glaucous bluish leaves. Releases a strong spicy, clove-like scent.\\"","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"Grants <b>75%</b> bonus Bloodpoints in the Boldness category.<br><li>Personal.</li><li>Stacks.</li>","name":"Fresh Sweet William","flavor":"\\"A bunch of flowers with pink petals and a blood red core. Releases a spicy, clove-like scent.\\"","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"Grants <b>100%</b> bonus Bloodpoints in the Boldness category.<br><li>Personal.</li><li>Stacks.</li>","name":"Fresh Sweet William","flavor":"\\"A bunch of flowers with pink petals and a blood red core. Releases a strong spicy, clove-like scent.\\"","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"Grants <b>25%</b> bonus Bloodpoints in <b>all</b> categories to all Survivors.<br><li>Stacks.</li>","name":"Bound Envelope","flavor":"\\"An opened envelope re-sealed and bound with 4 colored ribbons.\\"","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"Grants <b>25%</b> bonus Bloodpoints in all categories.<br><li>Personal.</li><li>Stacks.</li>","name":"Sealed Envelope","flavor":"\\"An unaddressed and unopened envelope yellowed by time. Its message will never be known.\\"","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"Grants <b>100%</b> bonus Bloodpoints in all categories.<br><li>Personal.</li><li>Stacks.</li>","name":"Escape! Cake","flavor":"\\"This picture of a cake sure is real.\\"","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"<b>Slightly increases</b> luck.<br><li>Personal.</li><li>Stacks.</li>","name":"Chalk Pouch","flavor":"\\"A small cotton pouch filled with a white chalky powder of unknown origin. Some believe it brings good fortune.\\"","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>Moderately increases</b> luck of <b>all</b> Survivors.<br><li>Stacks.</li>","name":"Cream Chalk Pouch","flavor":"\\"A friable miniature statuette made of black salt representing a woman in a kneeling position offering a gift. Some believe it brings good fortune.\\"","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"<b>Considerably increases</b> luck.<br><li>Personal.</li><li>Stacks.</li>","name":"Ivory Chalk Pouch","flavor":"\\"A small leather pouch displaying a straight white line hand-sewn on one of its sides. The bag is filled with an ivory chalky powder that shines under the moonlight. Some believe it brings good fortune.\\"","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>Slightly increases</b> luck of <b>all</b> Survivors.<br><li>Stacks.</li>","name":"Salt Pouch","flavor":"\\"A small cotton pouch filled with black salt crystals. Some believe it brings good fortune. Don\'t spill it.\\"","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>Considerably increases</b> luck of <b>all</b> Survivors.<br><li>Stacks.</li>","name":"Vigo\'s Jar of Salty Lips","flavor":"\\"A tightly sealed glass jar containing torn human lips floating in a murky brine. Some believe it brings good fortune.\\"","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"Calls on The Entity to create <b>1</b> more chest.<br><li>Stacks.</li>","name":"Tarnished Coin","flavor":"\\"A round piece of metal which has lost all sheen.\\"","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"Calls on The Entity to create <b>2</b> more chests.<br><li>Stacks.</li>","name":"Shiny Coin","flavor":"\\"A clean and polished piece of gold.\\"","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"Calms The Entity and <b>Slightly increases</b> the <b>distance</b> between sacrificial hooks appearing in the world.<br><li>Stacks.</li>","name":"Petrified Oak","flavor":"\\"A deteriorating piece of petrified wood.\\"","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"You start the trial with someone else.<br><li>Secret.</li>","name":"Shroud of Union","flavor":"\\"A knotted piece of fabric.\\"","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"All Survivors start the trial together.<br><li>Secret.</li>","name":"Shroud of Binding","flavor":"\\"A square and washed out piece of fabric with small knots on each end.\\"","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"You start the trial as far as possible from the Killer.<br><li>Secret.</li>","name":"Vigo\'s Shroud","flavor":"\\"I found marvels through the years in The Fog, but only now do I understand how to bend The Fog\'s irrefragable rules.\\" -Vigo\'s Journal","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/en/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Unlocks potential in one\'s aura reading ability. Each time a generator is completed, The Killer\'s aura is revealed to you for <span class=\\"Highlight1\\">{0} seconds</span>.<br>When the last generator is powered the Killer\'s aura is revealed to you for <span class=\\"Highlight2\\">{1} seconds</span>.","name":"Dark Sense","flavor":"\\"Take it from an old-timer: Slow down, don\'t rush and try not to worry so much! The best way to beat him is to know how he thinks.\\" -Lost Tapes: Murf","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"Unlocks potential in one\'s aura reading ability. Paranoia paired with the horror of failure drives you to avoid repeating the same mistakes.<br>The auras of <span class=\\"Highlight1\\">{0}</span> generators which are in close proximity to one another are revealed to you for <span class=\\"Highlight2\\">{1} seconds</span>, at the start of the match and each time a generator is completed.<br>If you are holding a map that can track generators, generators revealed by <i>Deja Vu</i> are added to the map.","name":"Deja Vu","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"The growing odds of a successful escape fill you with hope and give you wings. As soon as the exit gates are powered you gain a <span class=\\"Highlight1\\">{0}%</span> <b><i>Haste</i></b> status effect for <span class=\\"Highlight3\\">{1} seconds</span>.<br>","name":"Hope","flavor":"\\"Buckle up, fuckos! Let\'s roll!\\" -Lost Tapes: Nikki","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"Unlocks potential in one\'s aura reading ability. While you are on the hook, all Survivor\'s auras are revealed to all other Survivors. If The Killer is within a <span class=\\"Highlight1\\">{0} meter</span> range, The Killer\'s aura is revealed to all other Survivors.<br><br>While a Survivor other than you is on the hook, all other Survivors’ auras are revealed to you. If The Killer is within a <span class=\\"Highlight1\\">{0} meter</span> range of the hooked Survivor, The Killer\'s aura is revealed to you.","name":"Kindred","flavor":"“Be kind to one another. We’re all in this together.” -Lost Tapes: Sujan","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"Your running is light and soft, making your tracks harder to follow. Scratch marks stay visible <span class=\\"Highlight1\\">{0} seconds</span> less than normal.","name":"Lightweight","flavor":"\\"Take it slow, he knows where you\'ve been… just like I`ve always said: live slow and die old.\\" -Lost Tapes: Dylan","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"It is inconceivable to leave someone behind. Once at least one exit gate is opened, you gain the following effects:<br><li><span class=\\"Highlight1\\">{0}%</span> additional Bloodpoints for healing and unhooking other Survivors.</li><li><span class=\\"Highlight2\\">{1}%</span> bonus action speed when healing and unhooking other Survivors.</li><li>The auras of all other Survivors are revealed to you.</li>","name":"No One Left Behind","flavor":"\\"...yeah, no shit. But I believe we can outsmart and overthrow him if we work together. Don\'t be predictable and selfish!\\" -Lost Tapes: Clyde","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"Unlocks potential in one\'s aura reading ability. The auras of unopened chests and items in the environment are revealed to you when standing within a <span class=\\"Highlight1\\">{0} meter</span> range. Grants a <b>considerably</b> better chance at finding an item of higher rarity from chests.","name":"Plunderer\'s Instinct","flavor":"\\"The pioneers used to loot these babies for hours.\\" -Lost Tapes: Aizeyu","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of the Killer in a <span class=\\"Highlight1\\">45 degree</span> cone within a range of <span class=\\"Highlight2\\">{0} meters</span>. Premonition has a cooldown of <span class=\\"Highlight3\\">{1} seconds</span> each time it activates.","name":"Premonition","flavor":"\\"I have a bad feeling about this!\\"","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"You are motivated in dire situations. Grants <span class=\\"Highlight1\\">{0}%</span> additional speed when repairing, sabotaging, healing, unhooking, vaulting, cleansing, opening exit gates, and unlocking while injured.","name":"Resilience","flavor":"\\"Focus, even in these desperate times.\\"","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"You have developed an efficient way to get off hooks.<br><li>Grants up to <span class=\\"Highlight1\\">{0}</span> extra escape attempts on the hook.</li><li>Hook escape attempts have a <span class=\\"Highlight2\\">{1}%</span> increased chance to succeed.</li>","name":"Slippery Meat","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of Totems in a <span class=\\"Highlight1\\">45-degree</span> cone within a range of <span class=\\"Highlight2\\">{0} meters</span>. Small Game has a cooldown of <span class=\\"Highlight3\\">{1} seconds</span> each time it activates. For each Dull Totem and Hex Totem cleansed by any player, gain a Token. Small Game\'s detection cone is reduced by <span class=\\"Highlight4\\">5 degrees</span> per token.","name":"Small Game","flavor":"\\"Nope.\\" -Lost Tapes: Andy","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"An unnatural tingle warns you of impending doom. Get notified when the Killer is looking directly in your direction and standing within a <span class=\\"Highlight1\\">{0} meter</span> range. While Spine Chill is active, Skill Check trigger odds are increased by <span class=\\"Highlight2\\">{1}%</span> with success zones reduced by <span class=\\"Highlight3\\">{2}%</span>. While Spine Chill is active your speed while repairing, sabotaging, healing, unhooking, vaulting, cleansing, opening exit gates, and unlocking is increased by <span class=\\"Highlight4\\">{3}%</span>.","name":"Spine Chill","flavor":"\\"There is a voice that doesn\'t use words. Listen.\\" -Lost Tapes: Sassy","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"You perform at your best when you are under extreme stress. Great Skill Check success zones when repairing and healing get <span class=\\"Highlight1\\">{0}%</span> bigger when you are injured.","name":"This Is Not Happening","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"Helping others heightens your morale.<br><br>When you rescue a Survivor from a hook, gain a <span class=\\"Highlight1\\">{0}%</span> speed increase while healing others for <span class=\\"Highlight3\\">{1} seconds</span>.","name":"We\'ll make it","flavor":"\\"I\'m confident we can all escape in one piece if we help each other.\\"","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"Unlocks potential in one\'s aura reading ability. Allies\' auras are revealed to you when they are within a <span class=\\"Highlight1\\">{0} meter</span> range.","name":"Bond","flavor":"\\"We have to work as a team, I need you to survive so that I can survive!\\" -Dwight","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"For every other Survivor working on a generator within a <span class=\\"Highlight2\\">{1} meter</span> range, gain <span class=\\"Highlight1\\">{0}%</span> repair speed bonus. This same bonus is also applied to all other Survivors within range.<br>Gain <span class=\\"Highlight3\\">{2}%</span> more Bloodpoints for coop actions.<br>Survivors can only be affected by one Prove Thyself effect at a time.","name":"Prove Thyself","flavor":"\\"Show me what you can do!\\" -Dwight","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"You\'re able to organize a team to cooperate more efficiently. Increases other Survivors\' healing, sabotage, unhooking, cleansing, opening exit gates, and chest unlocking speeds by <span class=\\"Highlight1\\">{0}%</span> when they are within a <span class=\\"Highlight2\\">{1} meter</span> range from you.<br>Survivors can only be affected by one Leader effect at a time.<br>This effect persists on other Survivors for <span class=\\"Highlight3\\">{2} seconds</span> after leaving the Leader\'s effective perk range.","name":"Leader","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"You do not make as much noise as others when quickly vaulting over obstacles or hiding in lockers.<br><br>The vault and hide actions\' noise detection and audio range is reduced by <span class=\\"Highlight1\\">{0}%</span>.<br><br>This effect can only trigger once every <span class=\\"Highlight2\\">{1} seconds</span>.","name":"Quick & Quiet","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"When starting to run, break into a sprint at <span class=\\"Highlight1\\">{0}%</span> of your normal running speed for a maximum of <span class=\\"Highlight2\\">{1} seconds</span>.<br>Causes the <i>Exhausted</i> status effect for <span class=\\"Highlight4\\">{2} seconds</span>.<br><i>Sprint Burst</i> cannot be used while <i>Exhausted</i>.<br>You do not recover from the <i>Exhausted</i> status effect while running.","name":"Sprint Burst","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"You are fuelled by unexpected energy when on the verge of escape. <span class=\\"Highlight1\\">Instantly heal one <b>health state</b></span> and sprint at <span class=\\"Highlight2\\">{0}%</span> of your normal running speed for <span class=\\"Highlight3\\">{1} seconds</span> when the exit gates are powered. Adrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed.<br><i>Adrenaline</i> will <b>wake you up</b> if you are asleep when it triggers.<br><i>Adrenaline</i> ignores the <i>Exhausted</i> status effect.<br>Causes the <i>Exhausted</i> status effect for <span class=\\"Highlight4\\">{2} seconds</span>.<br>You do not recover from the <i>Exhausted</i> status effect when running.","name":"Adrenaline","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"Unlocks potential in one\'s aura reading ability. Dying or injured allies\' auras are revealed to you when within a <span class=\\"Highlight1\\">{0} meter</span> range. Empathy does not reveal auras of allies when they are in direct contact with the Killer.","name":"Empathy","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"You transform plants found around the campfire into tinctures that slow down bleeding. <b>Healing speed</b> and <b>healing item efficiency</b> are increased by <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Botany Knowledge","flavor":"\\"Basic botany knowledge could save your life someday.\\"","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"Unlocks the ability to heal yourself without a healing item at <span class=\\"Highlight1\\">{0}%</span> the normal healing speed. Increases the efficiency of healing item self-heal by <span class=\\"Highlight3\\">{1}%</span>.","name":"Self-Care","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"You\'re able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by <span class=\\"Highlight1\\">{0}%</span>.","name":"Iron Will","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"Animals seem to trust you as they often stay calm in your presence. Reduces chances of alerting woodland creatures by <span class=\\"Highlight1\\">{0}%</span>.<br>Calm Spirit allows you to overcome the urge to scream.","name":"Calm Spirit","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"Unlocks potential in one\'s aura reading ability.<br><li>See hook auras in a <span class=\\"Highlight1\\">56 meter</span> radius from the pickup spot if a Survivor is being carried.</li><br>Unlocks the ability to sabotage hooks without a Toolbox.<br><li>Sabotaging a hook without a Toolbox takes <span class=\\"Highlight2\\">2.5 seconds</span>.</li><li>The sabotage action has a <span class=\\"Highlight3\\">{0} second</span> cooldown.</li>","name":"Saboteur","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"Your agility is incomparable.<br><br>After falling from a height, cat-like reflexes reduce your stagger duration from falling by <span class=\\"Highlight1\\">{0}%</span> and reduce the volume of grunts from falling by <span class=\\"Highlight1\\">100%</span>. You start sprinting at <span class=\\"Highlight2\\">{1}%</span> your normal running speed for a maximum of <span class=\\"Highlight3\\">{2} seconds</span>.<br><br>Causes the <b>Exhausted</b> status effect for <span class=\\"Highlight4\\">{3} seconds</span>.<br><br><i>Balanced Landing</i> cannot be used while <b>Exhausted</b>.<br><br>You do not recover from the <b>Exhausted</b> status effect while running.<br>","name":"Balanced Landing","flavor":"\\"I\'ve jumped from higher places.\\" -Nea","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"Years of evading the cops taught you a thing or two about stealth. Your movement speed while crouching is increased by <span class=\\"Highlight1\\">{0}%</span>.","name":"Urban Evasion","flavor":"\\"The paint is still fresh but I\'m long gone.\\" -Nea","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"Long nights out taught you to do a lot with what you\'ve got. Reduce consumption rate of item charge by <span class=\\"Highlight1\\">{0}%</span> for you and allies within a <span class=\\"Highlight2\\">{1} meter</span> range. Once out of range, this effect persists for <span class=\\"Highlight4\\">{2} seconds.</span>","name":"Streetwise","flavor":"\\"You\'re doing it wrong! Let me show you how it\'s done.\\" -Nea","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Unlocks potential in one\'s aura reading ability.<br>If you are the last Survivor remaining in the trial, you can see the aura of the Hatch within a <span class=\\"Highlight1\\">{0} meter</span> range.","name":"Left Behind","flavor":"\\"I\'m not horseshittin\' around. I\'m doing this alone!\\" -Bill","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"You are fueled by unexpected energy when saving an ally from a hook.<br>Survivors you unhook gain the <b>Endurance</b> status effect for <span class=\\"Highlight1\\">{0} seconds</span>.<br>","name":"Borrowed Time","flavor":"\\"Probably stings like hell, but it ain\'t gonna kill ya. Up and at \'em soldier. Time to move!\\" — Bill Overbeck","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"Past battles have taught you a thing or two about survival.<br>Grants the ability to fully recover from the dying state <b>once per trial</b>. Increases dying recovery speed by <span class=\\"Highlight1\\">{0}%</span>.","name":"Unbreakable","flavor":"\\"Goddammit, I am seriously FUBAR!\\" -Bill","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"Your few friends deserve the best protection.<br>When healing another Survivor in the dying state, your healing speed is increased by <span class=\\"Highlight1\\">100%.</span><br>Gain a token for performing any of the following actions:<li>Perform a Safe Hook Rescue</li><li>Take a hit to protect a Survivor</li><li>Rescue a Survivor by stunning the Killer with a pallet</li><li>Rescue a Survivor by blinding the Killer with a Flashlight</li>Gain a <span class=\\"Highlight2\\">25%</span> stackable bonus per token to all Bloodpoint gains up to a maximum of <span class=\\"Highlight3\\">{1}%</span>. The bonus Bloodpoints are only awarded post-trial.","name":"We\'re Gonna Live Forever","flavor":"“Come on then, let’s ‘ave it! I don’t give a shit pal.” -David King","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"Activatable perk.<br>You can take a beating. When injured, tap into your adrenaline bank and dash forward quickly to avoid damage.<br><li>Press the <i>Active Ability</i> button while running to dash forward.</li><li>During the dash, you avoid damage.</li><li>Causes the <i>Exhausted</i> status effect for <span class=\\"Highlight4\\">{0} seconds</span>.<br>You do not recover from the <i>Exhausted</i> status effect while running.</li>","name":"Dead Hard","flavor":"“We were walkin’ through t’ginnel one night when a beer bottle flew past me, then another, and another. I thought to myself, “Gonna ’ave some fun ‘ere lads, let’s get stuck in!” It were a right dust up, I swear down!” -David King","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"You are affected by the <span class=\\"Highlight1\\">Broken</span> status effect for the duration of the trial.<br>Your thick blood coagulates practically instantly. <li>You don\'t leave pools of blood.</li><li>Grunts of pain caused by injuries are reduced by <span class=\\"Highlight2\\">{0}%</span> at any time.</li><li>Grants the ability to fully recover from the dying state.</li>","name":"No Mither","flavor":"“I lost it. Just lamped him one. They went and banned me didn’t they. Went t’pub afterwards, had a few pints and moved on to the next chapter. I couldn’t be mithered with it all anyway, you know what I mean? Can’t be arsed.” -David King","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"As more of your friends fall to the Killer, you become shrouded in isolation and the Killer\'s <b>aura reading abilities</b> towards you are disrupted.<br>Every time a fellow Survivor is killed or sacrificed, gain a token. For each token, your aura cannot be read by The Killer within a max range of <span class=\\"Highlight1\\">{0} meters</span> for each <b>killed</b> or <b>sacrificed</b> Survivor.<br><li><i>Increases your chances of being The Killer\'s Obsession.</i></li><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li>","name":"Sole Survivor","flavor":"“It was the boogeyman.” -Laurie Strode","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"A supernatural bond links you to the Killer.<br><br>Whenever your aura is revealed to the Killer, the Killer\'s aura becomes visible to you and you gain a <span class=\\"Highlight1\\">{0}%</span> bonus to healing, repairing and cleansing speed.<br>If you are the Obsession, your aura is revealed to the killer for <span class=\\"Highlight2\\">3 seconds</span> once every <span class=\\"Highlight3\\">30 seconds</span><br>Increases your chances of being the Obsession.<br>","name":"Object of Obsession","flavor":"“He was watching me!” -Laurie Strode","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"Stab at your aggressor in an attempt to escape.<br>After being unhooked or unhooking yourself, <i>Decisive Strike</i> activates for <span class=\\"Highlight1\\">{0} seconds</span>.<br>While active, complete a Skill Check when grabbed by the Killer to escape, stunning them for <span class=\\"Highlight1\\">5 seconds</span>.<br><li>Succeeding or failing the Skill Check disables <i>Decisive Strike</i>.</li><li>You become the Obsession after stunning the Killer.</li><br>While active, the following interactions deactivate <i>Decisive Strike</i>:<li>Repairing a generator</li><li>Healing yourself or others</li><li>Cleansing a Totem</li><li>Sabotaging a hook</li><li>Unhooking others</li><br><li><i>Increases your chance to be the Obsession.</i></li><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li>","name":"Decisive Strike","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"Strengthens the potential of you and your team\'s aura reading abilities.<br><li>Increases aura reading ranges by <span class=\\"Highlight1\\">{0} meters</span>.</li><li>Survivors may only be affected by one <i>Open-Handed</i> effect at a time.</li>","name":"Open-Handed","flavor":"“Paying attention is what kept me alive through the years. That, and my good looks of course.” -Ace","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"All will be well in the end; you just know it. Your confidence strengthens the feeling of hope for those around you. For each other Survivor still alive, grant a <span class=\\"Highlight1\\">{0}%</span> bonus of luck to all remaining Survivors.","name":"Up the Ante","flavor":"“What can I say? I’m just a very lucky guy… I’m sure some of it will rub off on you.” -Ace","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"Lady Luck always seems to be throwing something good your way.<br>When retrieving an item from a chest, there is a <span class=\\"Highlight1\\">{0}%</span> chance that a <span class=\\"Highlight2\\">Very Rare</span> (or lower) add-on will be attached to it.<br><span class=\\"Highlight3\\">{1}%</span> chance of finding an add-on of <span class=\\"Highlight4\\">Uncommon</span> rarity (or lower).<br>When escaping, keep any add-ons your item has.","name":"Ace in the Hole","flavor":"“Everything that glitters isn’t gold. But gold isn\'t worth a damn in this place, so this should come in handy.” -Ace","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"You are apt at handling machinery with the greatest care and precision.<br>The noises caused by your repairs and their hearing distance are reduced by <span class=\\"Highlight2\\">{0} meters</span>. On a failed repair Skill Check, there is a <span class=\\"Highlight1\\">{1}%</span> chance the generator explosion will be prevented.","name":"Technician","flavor":"“I’m gonna stealth this one.” -Feng Min","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"After performing a <b>rushed</b> vault, break into a sprint at <span class=\\"Highlight1\\">{0}%</span> of your normal running speed for a maximum of <span class=\\"Highlight2\\">{1} seconds</span>. <br>Causes the <i>Exhausted</i> status effect for <span class=\\"Highlight4\\">{2} seconds</span>.<br><i>Lithe</i> cannot be used while <i>Exhausted</i>.<br>You do not recover from the <i>Exhausted</i> status effect while running.","name":"Lithe","flavor":"“U mad?” -Feng Min","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Your acute senses are on high alert.<br>When the Killer performs a break action, the Killer is revealed to you for <span class=\\"Highlight1\\">{0} seconds</span>.","name":"Alert","flavor":"“I have true sight.” -Feng Min","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"Unlocks potential in one\'s aura reading ability. Once all generators are powered, exit gates are revealed to you within a <span class=\\"Highlight1\\">{0} meter</span> range. While opening the exit gates, reveal your aura to other Survivors up to <span class=\\"Highlight2\\">{1} meters</span>.<br>While <i>Wake Up!</i> is active, you open the exit gates <span class=\\"Highlight3\\">{2}%</span> faster.","name":"Wake Up!","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"You have a knack for finding medicine. Unlocking chests is <span class=\\"Highlight1\\">{0}%</span> faster and the noises this causes, along with their hearing distances, are reduced by <span class=\\"Highlight2\\">{1} meters.</span><br><i>Pharmacy</i> guarantees an Emergency Med-kit on your <b>first</b> unlocked chest.<br>","name":"Pharmacy","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"You look over your friends even in dire situations. You and your allies within a <span class=\\"Highlight1\\">{0} meter</span> range recover from the <b>Exhausted, Hemorrhage, Hindered</b> and <b>Blindness</b> status effects <span class=\\"Highlight2\\">{1}%</span> faster. Once out of range, this effect persists for <span class=\\"Highlight4\\">{2} seconds.</span><br>","name":"Vigil","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"There is nothing stopping you. Your ferocious tenacity in dire situations allows you to crawl <span class=\\"Highlight1\\">{0}%</span> faster and recover at the same time.","name":"Tenacity","flavor":"\\"What the hell is this? I\'m taking this bastard down!\\" -Detective David Tapp","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"Unlocks potential in one\'s aura reading ability. When a generator is completed, the auras of generators, chests and Totems within <span class=\\"Highlight1\\">{0} meters</span> are revealed to you for <span class=\\"Highlight2\\">{1} seconds</span>.<br>If you are holding a Map that can track objectives, generators, chests and Totems revealed by <i>Detective\'s Hunch</i> are added to the Map.","name":"Detective\'s Hunch","flavor":"\\"Are you able to tell us where you were last night?\\" -Detective David Tapp","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"Getting close to the Killer fills you with determination. For each <span class=\\"Highlight1\\">{0} seconds</span> you are standing within the Killer Terror Radius and not in a chase, you gain a token up to a maximum of <span class=\\"Highlight2\\">{1} tokens</span>.<br>When <i>Stake Out</i> has at least <b>1 token</b>, Good Skill Checks are considered Great Skill Checks, consume <b>1 token</b>, and grant an additional <span class=\\"Highlight3\\">1%</span> bonus to generator repair progress.","name":"Stake Out","flavor":"\\"I had you, I had you on your knees. You\'re runnin\' scared because we had you. We\'re gonna close this case!\\" -Detective David Tapp","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"When performing a fast vault or leaving a locker in a sprint, you leave no scratch marks for <span class=\\"Highlight1\\">{0} seconds</span>.<br><i>Dance With Me</i> has a cooldown of <span class=\\"Highlight4\\">{1} seconds</span>. ","name":"Dance With Me","flavor":"“Another show’s off and runnin’, <br>Dance with me, cuz there’s a storm a comin’, <br>Follow my boots, try to keep up,<br>Dance with me, until sun up.”<br>-Kate Denson\'s \\"Dance With Me\\"","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"Unlocks potential in one\'s aura reading ability. Auras of pallets, breakable walls, and vault locations are revealed to you when within a <span class=\\"Highlight1\\">{0} meter</span> range. <br><i>Windows of Opportunity</i> has a cooldown of <span class=\\"Highlight1\\">{1} seconds</span> when vaulting or dropping a pallet during a chase. ","name":"Windows of Opportunity","flavor":"“Rise and shine, work hard, carve out your name, <br>Take aim, pull the trigger, hit the bulls eye for fame, <br>Know the value of faith, an’ family, and don’t you complain,<br>Open wide, your windows of opportunity.”<br>-Kate Denson\'s \\"Windows of Opportunity\\"","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"You are a battler and do everything to escape a foe\'s grasp. Your struggling effects on The Killer are increased by <span class=\\"Highlight1\\">{0}%</span>. <br>You obscure The Killer\'s ability to see hook auras within <span class=\\"Highlight1\\">{1} meters</span>.","name":"Boil Over","flavor":"“Buck and Wild,<br> Swing to be free, <br>Your hands just can’t keep ahold of me.”<br>-Kate Denson’s “Boil Over”","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"Activatable perk.<br>Being within the Killer Terror Radius while not in a chase for <span class=\\"Highlight1\\">{0} seconds</span> activates <i>Diversion</i>.<br><li>Once <i>Diversion</i> is activated, press the <i>Active Ability</i> button while crouched and motionless to throw a pebble, which creates a distraction for The Killer at a distance of <span class=\\"Highlight2\\">20 meters</span>.</li><br><li>The perk timer resets once the ability has been activated.</li><br>The distraction consists of:<br><li>A loud noise notification</li><li>Scratch marks</li>","name":"Diversion","flavor":"“There’s what is easy and then there’s what is right. If you confuse the two, there’s no telling what you become.” -Adam Francis","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"After performing a safe hook rescue on another Survivor, <i>Deliverance</i> activates.<br>You now have a <span class=\\"Highlight1\\">100%</span> chance of unhooking yourself during the escape attempt.<br>A successful <i>Deliverance</i> from the hook triggers the <span class=\\"Highlight2\\">Broken</span> status effect for <span class=\\"Highlight3\\">{0} seconds</span>.","name":"Deliverance","flavor":"“I was raised by a strict man who taught me how to make the best of a bad situation.” -Adam Francis","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"You start the trial with a <span class=\\"Highlight1\\">-{1}%</span> progress penalty for Skill Checks to heal Survivors.<br>For every successful Skill Check while healing a Survivor, you receive a token up to a maximum of <span class=\\"Highlight2\\">{0} tokens</span>.<br>Each token grants you a <span class=\\"Highlight1\\">+{2}%</span> progress bonus.<br>Great Skill Checks cannot be performed while using <i>Autodidact</i>.<li><i>Autodidact</i> is not active when using a Med Kit to heal.</li>","name":"Autodidact","flavor":"“There’s no limit to what you can achieve, as long as you back it up with hard work.” -Adam Francis","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"Any time you are removed from a hook (escaped or saved), the hook breaks and the Killer\'s aura is shown to you for <span class=\\"Highlight1\\">{0} seconds</span>. A hook broken by this perk takes <span class=\\"Highlight2\\">180 seconds</span> to respawn.<br>","name":"Breakdown","flavor":"“Charge from the Belly of the Beast.”<br>Here\'s a sketch/painting on a piece of wood I saw by the side of the road. I felt like it got a story to tell. And it didn’t waste its second chance. –Jeff, ink and oil wash on slice of wood, 12x16","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"Unlocks potential in one\'s aura reading ability.<br><br>You see the aura of every Survivor that:<br><li>You rescue from a hook, or rescues you from a hook;</li><li>You complete a healing action on, or completes a healing action on you.</li><br>They also see your aura.<br><br>This occurs for up to <span class=\\"Highlight1\\">{0} Survivors</span>. All effects of <i>Aftercare</i> are reset when you are hooked by The Killer.<br>","name":"Aftercare","flavor":"“A Mercy that Rips the Storm.”<br>Oil work to honor my best buddies who happen to be the best musicians I know. Their first album is still my favorite. It got me through a dark time in my life. –Jeff, oil on canvas, 16x16","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"You start the trial with <span class=\\"Highlight1\\">{0} tokens</span>.<br><br>When your aura would be shown to The Killer, <i>Distortion</i> activates and a token is consumed.<br><br>For the next <span class=\\"Highlight1\\">{1} seconds</span> while <i>Distortion</i> is activated, you do not leave scratch marks and your aura will not be shown to The Killer.<br><li><i>Distortion</i> does not activate when you are in dying state or in a trap.</li><br>","name":"Distortion","flavor":"“Death Fooled by the Cloak of Falcon Feathers.”<br>Sketch inspired by a few sleepless nights during winter. Exploration of Norse mythology: bravery can conceal your flaws, even when you are at your most vulnerable. –Jeff, pencil on toned paper, 12x12","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"Sharing painful experiences has the power to heal.<br>While injured, healing a Survivor without using a Med-kit also heals you at a <span class=\\"Highlight1\\">{0}%</span> conversion rate.","name":"Solidarity","flavor":"“Showing up when things get rough, listening to people’s problems, and supporting those in need; that’s how you become stronger, that’s how you grow.” –Jane Romero","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"Achieving goals boosts your confidence.<br>After a generator is completed, you leave no scratch marks for <span class=\\"Highlight1\\"> {0} seconds</span>.","name":"Poised","flavor":"“Ok, stay calm. Don’t overthink it and just keep moving forward: you got this. –Jane Romero","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"When your mind is set, there better be no one standing in your way.<br><br>While standing in a locker, for <span class=\\"Highlight1\\">{0} seconds</span>, <i>Head On</i> activates.<br>While <i>Head On</i> is activated, perform a rush action to leave a locker to use <i>Head On</i>. If The Killer is standing within <i>Head On\'s</i> effective range, The Killer is stunned for <span class=\\"Highlight1\\">{1} seconds</span>.<br>Causes the <span class=\\"Highlight3\\">Exhausted</span> status effect for <span class=\\"Highlight1\\">{2} seconds</span>. <br>Head On cannot be used while Exhausted.<br>You do not recover from the <span class=\\"Highlight3\\">Exhausted</span> status effect while running. <br><i>Head On</i> cannot be used when you have idle crows.<br>","name":"Head On","flavor":"“People are remembered for the challenges they overcome. You can run away and forget what you’re capable of or you can face your fears and remind the world who you are.” –Jane Romero","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"You have an uncanny ability to escape the inevitable.<br><br>While in dying state, <span class=\\"Highlight1\\">{0}%</span> of your recovery progression is converted into wiggle progression when you are picked up by The Killer, up to a maximum of <span class=\\"Highlight2\\">{1}%</span> total wiggle progression.<br>","name":"Flip-Flop","flavor":"\\"Catch ya on the flip-flop.\\" -Ash Williams","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"Unlocks potential in one\'s aura reading ability. The recovery progress of dying Survivors can be determined by the intensity of their auras at a distance of up to <span class=\\"Highlight1\\">{0} meters</span>.<br><br>When you heal a Survivor from the dying state to injured, both the healed Survivor and yourself see The Killer\'s aura for a duration of <span class=\\"Highlight2\\">{1} seconds</span>.<br>","name":"Buckle Up","flavor":"“Ghost beaters never leave a man behind.\\" -Ash Williams","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"Evil has a way of always finding you.<br><br>After you earn <span class=\\"Highlight1\\">{0} </span>Protection Hit scoring events, <i>Mettle of Man</i> activates. <br><br>Once activated, the next occasion that would put you into the <b>dying state</b> from the <b>injured state</b> is ignored.<br><br>The next time you heal back to full health, your aura will be revealed to the Killer when you are further than <span class=\\"Highlight2\\">{1} meters</span> from the Killer.<br><br><i>Mettle of Man</i> will deactivate the next time you are put into the dying state.<br><i><li>Increases your chances to be the Killer’s Obsession.</li><li>The Killer can only be <b>obsessed</b> with one Survivor at a time.</li></i><br>","name":"Mettle of Man","flavor":"\\"Evil has a bullseye on my back the size of Tiger Stadium.\\" -Ash Williams","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"You seek justice and uncover the truth no matter what obstacle stands in your way.<br><br>The aura of the generator you are currently repairing is revealed to all other Survivors located within <span class=\\"Highlight1\\">{0} meters</span>.<br><br>If The Killer downs a Survivor while you are repairing a generator, you see the aura of all other Survivors for <span class=\\"Highlight2\\">{1} seconds</span>.<br>","name":"Better Together","flavor":"“Let’s burn that lab to the ground.” -Nancy Wheeler","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"When you have a goal in mind, there’s no turning back: better to ask forgiveness than permission. <br><br>You can see your own scratch marks at all times.<br><br>You walk <span class=\\"Highlight1\\">{0}%</span> faster.<br>","name":"Fixated","flavor":"\\"I wanna finish what we started. I want to kill it.\\" -Nancy Wheeler","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"You look inward and trust your instincts when you feel lost and alone.<br><br>Each time you complete a Totem cleanse action, <i>Inner Strength</i> activates. If you are already afflicted by the <b>Broken</b> status effect, <i>Inner Strength</i> does not activate.<br><br>While <i>Inner Strength</i> is active, hiding inside a locker for <span class=\\"Highlight1\\">{0} seconds</span> while injured automatically heals you from injured to healthy.<br><br><i>Inner Strength</i> becomes deactivated as soon as it has successfully triggered.<br>","name":"Inner Strength","flavor":"“All this time I’ve been trying so hard to pretend like everything’s fine, but it’s not.” -Nancy Wheeler","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"While you have a reputation for being self-centered, you risk it all to help those in need.<br><br>When you unhook a Survivor, the unhooked Survivor leaves no scratch marks or blood trail for the next <span class=\\"Highlight1\\">{0} seconds</span>. You see The Killer\'s aura and The Killer sees your aura for <span class=\\"Highlight2\\">{1} seconds</span>.<br>","name":"Babysitter","flavor":"“I promised to keep you shitheads safe, and that’s exactly what I plan on doing.” -Steve Harrington","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"Life has taught you the importance of friendship which has given you strength.<br><br>While you are on the hook in the struggle phase, <i>Camaraderie</i> activates.<br><br>If another Survivor is within <span class=\\"Highlight1\\">{0} meters</span> of you while <i>Camaraderie</i> is activated, the hook timer is paused for <span class=\\"Highlight2\\">{1} seconds</span>.<br>","name":"Camaraderie","flavor":"\\"So, remember once you get in there… pretend like you don’t care. There you go, you’re learning my friend. You’re learning.” -Steve Harrington","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"When you have healed other Survivors for the equivalent of one health state, <i>Second Wind</i> activates. If you are already afflicted by the <span class=\\"Highlight1\\">Broken</span> status effect, <i>Second Wind</i> does not activate.<br><br>While <i>Second Wind</i> is activated, the next time you are unhooked or you unhook yourself, you are affected by the <span class=\\"Highlight1\\">Broken</span> status effect. After a total duration of <span class=\\"Highlight2\\">{0} seconds</span>, <i>Second Wind</i> automatically heals you from injured to healthy.<br><br><i>Second Wind</i> deactivates once you become healthy or if you are put into the dying state before <i>Second Wind</i> successfully triggers. You lose the <span class=\\"Highlight1\\">Broken</span> status effect.<br>","name":"Second Wind","flavor":"\\"Yeah, that’s a no.\\" -Steve Harrington","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"You’ve had your share of scrapes and bruises, but luck’s always on your side.<br><br><i>Lucky Break</i> activates any time you are injured. While <i>Lucky Break</i> is active, you won’t leave trails of blood or scratch marks for a total of <span class=\\"Highlight1\\">{0} seconds</span>.<br><br><i>Lucky Break</i> is permanently deactivated for the remainder of the Trial once the total duration has elapsed.<br>","name":"Lucky Break","flavor":"“That’s not enough to beat me. Not even close.” -Yui Kimura ","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"You stand up for yourself, using whatever’s on hand to gain an advantage.<br><br>Press and hold the <i>Active Ability button</i> for <span class=\\"Highlight1\\">{0} seconds</span> while standing beside a dropped pallet to reset it to its upright position.<br><br><i>Any Means Necessary</i> has a cooldown of <span class=\\"Highlight2\\">{1} seconds</span>.<br>","name":"Any Means Necessary","flavor":"“I’ll hit you with everything I’ve got. Then I’ll do it again.” -Yui Kimura ","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"You kick into high gear when someone’s in trouble, inspiring them to overcome any obstacle.<br><br>When within <span class=\\"Highlight1\\">{0} meters</span> of a carried Survivor, you gain the <span class=\\"Highlight2\\">Haste</span> status effect, moving at <span class=\\"Highlight3\\">{1}%</span> increased speed. The carried Survivor’s wiggle speed is increased by <span class=\\"Highlight4\\">{2}%</span>.<br>","name":"Breakout","flavor":"“Come, we’re going to rip our way out of this.” -Yui Kimura ","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"You’ve learned that a quiet approach is sometimes best. <br><br>Once you are unhooked or escape from the hook, <i>Off the Record</i> activates for <span class=\\"Highlight1\\">{0} seconds</span>. <br><br>While <i>Off the Record</i> is active, your aura will not be shown to The Killer and grunts of pain caused by injuries are reduced by <span class=\\"Highlight2\\">{1}%</span>.<br>","name":"Off the Record","flavor":"\\"Trust me, I investigate thoroughly and discreetly.\\" -Zarina Kassir","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"You’ve noticed that people pay attention to whatever makes the loudest noise.<br><br>After repairing a generator for at least <span class=\\"Highlight1\\">{0} seconds</span>, it will be highlighted to you with a yellow aura. The generator stays highlighted until it is fully repaired, or you repair a new generator, or enter a locker. <br><br>Entering any locker will trigger a loud noise indicator for The Killer at the highlighted generator\'s location. <br><li><i>Red Herring</i> can only be triggered once every <span class=\\"Highlight2\\">{1} seconds</span>.</li><br>","name":"Red Herring","flavor":"\\"The news edit out what is burdensome and complex, which is the truth.\\" -Zarina Kassir","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"You risk life and injury for others.<br><br><i>For the People</i> is only active while at full health.<br><br>Press the <i>Active Ability button</i> while healing another Survivor without a med kit to instantly heal them from dying to injured, or from injured to healthy.<br><br>You become injured and receive the <b>Broken</b> status effect for <span class=\\"Highlight1\\">{0} seconds</span>.<br><br>You become the Obsession.<br><br>Equipping this perk <b>decreases</b> your chances to be The Killer’s Obsession at the start of the trial.<br>","name":"For the People","flavor":"\\"We can write our own story and decide how it really ends.\\" -Zarina Kassir","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"You have been through immense hardship and you’re stronger for it.<br><br>Gain the <b>Endurance</b> status effect for <span class=\\"Highlight1\\">{0} seconds</span> after being healed or having recovered from the dying state.<br>While cursed by a Hex, you can fully recover from the dying state.<br><br>This effect can only trigger once every <span class=\\"Highlight2\\">30 seconds.</span>","name":"Soul Guard","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"It’s as if a latent part of yourself has awakened. You feel like you can reach out beyond yourself for assistance.<br><br>When you or the Obsession are injured, you both see each other\'s auras.<br><br>After completing a healing action on the Obsession, or having the Obsession complete a healing action on you, you both gain a <span class=\\"Highlight1\\">{1}%</span> <b>Haste</b> status effect until no longer within <span class=\\"Highlight2\\">16m</span> of each other.<br><br>Reduces the odds of being the Obsession.<br><br>If you are the Obsession, this perk deactivates.","name":"Blood Pact","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"You’re accustomed to being hunted by malicious forces, and you’ve begun using it to your advantage.<br><br><i>Repressed Alliance</i> activates after repairing generators for a total of <span class=\\"Highlight1\\">{0} seconds.</span><br><br>When repairing a generator while the perk is active, press the <i>Active Ability button</i> to call upon The Entity to block the generator for <span class=\\"Highlight2\\">{1} seconds.</span> The perk deactivates.<br><br>Affected generators will be revealed by a white aura to all Survivors.","name":"Repressed Alliance ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"You’re remarkably focused on your means of escape.<br><br>You see generator’s auras within <span class=\\"Highlight1\\">{0} meters</span>.<br><br>Anytime a generator is completed, <i>Visionary</i> is disabled for <span class=\\"Highlight2\\">{1} seconds</span>.","name":"Visionary","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"You refuse to fail, even during your darkest hour.<br><br>For each injured, hooked, or dying Survivor, increase the speed of your healing and unhook actions by <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Desperate Measures","flavor":"\\"When they come with a wrecking ball, build stronger walls.” —Felix Richter","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"You know how to get the most out of your tools.<br><br>Once per trial, a depleted item will refill <span class=\\"Highlight1\\">{0}%</span> of its charges after <span class=\\"Highlight2\\">{1} seconds</span>.<br>","name":"Built to Last","flavor":"\\"Architecture is the soul of civilization.” —Felix Richter","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"You have a careful eye that notices what many overlook.<br><br>Start the trial with <span class=\\"Highlight1\\">{0} tokens</span>. When a chest has already been opened, consume a token to rummage through it for an item. Rummaging can only be performed once per chest.<br><br>You rummage through chests <span class=\\"Highlight2\\">{1}%</span> faster.","name":"Appraisal","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"Your adventurous lifestyle requires moments of crafty misdirection.<br><br>Interacting with a locker while sprinting will trigger a loud noise notification at your location and cause you to leave no scratch marks for <span class=\\"Highlight1\\">{0} seconds</span>.<br><br>You no longer enter lockers while sprinting and while this perk is active.<br><br><i>Deception</i> can only be triggered once every <span class=\\"Highlight2\\">{1} seconds</span>.","name":"Deception","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"You’ve never given up and you’re not about to start now.<br><br>While being carried by The Killer, reaching <span class=\\"Highlight1\\">{0}%</span> wiggle progress activates <i>Power Struggle</i>. While <i>Power Struggle</i> is active, you can drop a nearby, standing pallet to stun The Killer.<br>","name":"Power Struggle","flavor":"“I relied on others to protect me once and I lost everything. Never again.” —Élodie Rakoto","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"Sometimes the sacrifice of others is necessary to get ahead.<br><br>Whenever another Survivor is hooked, you gain <span class=\\"Highlight1\\">{0} tokens.</span>You consume all tokens after a great Skill Check on a generator. Each token consumed grants a <span class=\\"Highlight2\\">{1}%</span> bonus progression for great Skill Checks when repairing generators.<br>","name":"Fast Track","flavor":"\\"The weak are sacrificed first. It\'s nature, it\'s business... it\'s the truth most refuse to face.\\" — Yun-Jin","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"When your rival makes a mistake, you seize the opportunity.<br><br>After stunning the Killer with a pallet, break into a sprint at <span class=\\"Highlight1\\">{0}%</span> your normal running speed for <span class=\\"Highlight2\\">{1} seconds.</span><br>Causes the <b>Exhausted</b> status effect for <span class=\\"Highlight3\\">{2} seconds.</span><br>This perk cannot be used while <b>Exhausted</b>.<br>","name":"Smash Hit","flavor":"\\"I\'ve dealt with psychopaths in suits. You\'re just uglier and worse dressed.\\" —Yun-Jin","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"Life\'s unforgiving. Sometimes it\'s best to look out for yourself.<br><br>Whenever another Survivor within <span class=\\"Highlight1\\">{0} meters</span> of you gets hit by a basic attack or a special attack, <i>Self-Preservation</i> activates.<br>Your Scratch Marks, Pools of Blood and Grunts of Pain are hidden for <span class=\\"Highlight2\\">{1} seconds.</span><br>","name":"Self-Preservation","flavor":"\\"Something I learned in the industry: when the axe is swinging, keep your head down.\\" — Yun-Jin","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"You know how to withstand an enemy stronger than you, and it starts with hunting down and knocking out their support.<br><br>You cleanse totems <b>20%</b> faster. After cleansing a totem, you see the aura of the furthest totem from you for <span class=\\"Highlight1\\">{0} seconds</span> and you gain an additional <span class=\\"Highlight2\\">{1}%</span> stackable speed bonus to cleansing totems for the remainder of the trial.<br><br><span class= \\"FlavorText\\">\\"I don\'t mind a little detective work.\\" —Jill Valentine</span>","name":"Counterforce","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"You\'ve come back from near impossible odds... and you\'ll do it again.<br><br>Gain <span class=\\"Highlight1\\">{0}%</span> healing progress instantly after being unhooked or unhooking yourself.<br><br><span class= \\"FlavorText\\">\\"It\'s my turn, bitch.\\" —Jill Valentine</span>","name":"Resurgence","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"When direct combat isn\'t an option, you still find ways to strike back.<br><br><i>Blast Mine</i> activates after completing a total of <span class=\\"Highlight1\\">{0}%</span> worth of repair progress on generators.<br>After repairing a generator for at least <span class=\\"Highlight2\\">{1} seconds</span>, press the <i>Ability button</i> to install a trap which stays active for <span class=\\"Highlight3\\">{2} seconds</span>. Affected generators will be revealed to all Survivors by a yellow aura. Only one trap can be active on a generator.<br><li>When the Killer damages a trapped generator, the trap explodes, stunning them and blinding anyone nearby. <i>Blast Mine</i> is then deactivated.</li><br><br><span class= \\"FlavorText\\">\\"You want S.T.A.R.S.? I\'ll give you S.T.A.R.S.! \\"  —Jill Valentine</span>","name":"Blast Mine","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"Pain hurts you as much as anyone, but you\'d prefer others don\'t know that.<br><br>When healing, you and the Survivor you\'re healing make no noise, including grunts of pain. There is no noise notification on failed healing skill checks and healing regresses by only <span class=\\"Highlight1\\">{0}%.</span><br><br><span class= \\"FlavorText\\">\\"I can do this.\\" —Leon S. Kennedy</span>","name":"Bite the Bullet","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"You\'ve adapted to a world in chaos and making what you can from the debris.<br><br>After completing <span class=\\"Highlight1\\"> {0}%</span> progress on any generator, <i>Flashbang</i> activates.<br>Enter a locker while empty-handed and press the Ability button to craft a flash grenade.<br><li>1 charge.</li><li>Detonates with a loud bang and flashing light.</li><li>Creates a noise notification.</li><li>Can be used to distract or blind.</li><br>You leave the flash grenade behind when escaping the trial.<br><br><span class= \\"FlavorText\\">\\"Get outta my face!\\" —Leon S. Kennedy</span>","name":"Flashbang","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"You keep a careful eye on objectives when they\'re slipping away.<br><br>Complete <span class=\\"Highlight1\\">{0}</span> good or great Skill Checks while repairing generators to activate <i>Rookie Spirit</i> for the remainder of the trial.<br>Once active, you can see the aura of regressing generators.<br><br><span class= \\"FlavorText\\">\\"I\'ll stop this, lieutenant. I promise.\\" —Leon S. Kennedy</span>","name":"Rookie Spirit","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/en/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/en/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"A nervous leader, able to locate his allies and increase their effectiveness.<BR><BR>His personal perks, <B>Bond</B>, <B>Prove Thyself</B> and <B>Leader</B>, allow him to get in proximity of other Survivors and provide bonuses to their actions as well as his own.","name":"Dwight Fairfield","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"An energetic athlete, able to outrun most Killers.<BR><BR>Her personal perks, <B>Quick & Quiet</B>, <B>Sprint Burst</B> and <B>Adrenaline</B>, give her advantage to escape chases and put distance between herself and the Killer.","name":"Meg Thomas","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"A studious botanist, able to boost her team\'s survivability as well as her own.<BR><BR>Her personal perks, <B>Empathy</B>, <B>Botany Knowledge</B> and <B>Self Care</B>, allow her to spot injured Survivors and heal her team and herself more effectively.","name":"Claudette Morel","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"A solitary survivalist, able to hold his own in most situations.<BR><BR>His personal perks, <B>Iron Will</B>, <B>Calm Spirit</B> and <B>Saboteur</B>, allow him to more effectively move about the environment and survive while injured.","name":"Jake Park","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"An urban artist, able to easily escape and hide.<BR><BR>Her personal perks, <B>Balanced Landing</B>, <B>Urban Evasion</B> and <B>Streetwise</B>, make her well suited to completing objectives and rapid evasion.","name":"Nea Karlsson","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"An old soldier, accustomed to dealing with critical situations.<BR><BR>His personal perks, <B>Left Behind</B>, <B>Borrowed Time</B> and <B>Unbreakable</B>, make him more powerful in dire moments.","name":"William \\"Bill\\" Overbeck","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"A rugged scrapper, rewarding high-risk play.<BR><BR>His personal perks, <B>We\'re Gonna Live Forever</B>, <B>Dead Hard</B> and <B>No Mither</B>, reward an aggressive, confrontational playstyle but leave him vulnerable.","name":"David King","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"A determined Survivor, prepared to weather any challenge.<BR><BR>Her personal perks, <B>Sole Survivor</B>, <B>Object of Obsession</B> and <B>Decisive Strike</B>, grant her powerful survival abilities at the cost of leaving her exposed.","name":"Laurie Strode","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"A lucky gambler, improving the odds of the entire team.<BR><BR>His personal perks, <B>Open Handed</B>, <B>Up the Ante</B> and <B>Ace in the Hole</B>, boost the Luck of all Survivors and help with unlocking chests.","name":"Ace Visconti","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"An objective-focused competitor who can quickly adapt her strategy to meet a vast range of challenging situations.<BR><BR>Her personal perks, <B>Technician</B>, <B>Lithe</B> and <B>Alert</B>, help her with repairing generators and locating the Killer.","name":"Feng Min","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"A resolute dreamwalker, increasing the survivability and recovery of his team.<BR><BR>His personal perks, <B>Wake Up!</B>, <B>Pharmacy</B> and <B>Vigil</B>, help Survivors locate exit gates and recover more easily.","name":"Quentin Smith","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"An obsessed detective, able to locate and complete objectives faster.<BR><BR>His personal perks, <B>Tenacity</B>, <B>Detective\'s Hunch</B> and <B>Stake Out</B>, make him objective-focused and able to rapidly recover.","name":"Detective Tapp","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"A hopeful songbird, able to make the most of her surroundings. <br><br>Her personal perks, <b>Dance With Me</b>, <b>Windows of Opportunity</b> and <b>Boil Over</b>, grant her the foresight and feistiness to escape even the most dire situations.","name":"Kate Denson","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"A resourceful teacher, able to adapt to new circumstances and develop strategies accordingly. <br><br>His personal perks, <b>Diversion</b>, <b>Deliverance</b> and <b>Autodidact</b>, help him to distract The Killer, survive desperate situations, and become more skilled as the trial continues.","name":"Adam Francis","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"A quiet artist, standing steadfast against impossible odds.<br><br>His personal perks, <b>Breakdown</b>, <b>Aftercare</b> and <b>Distortion</b>, give him observational advantages and help to hide his presence from The Killer.","name":"Jeff Johansen","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"An influential celebrity, going against the grain to tackle challenges head on.<br><br>Her personal perks, <b>Solidarity</b>, <b>Poised</b> and <b>Head On</b>, give her a flexible skillset that allow her to help others, as well as herself, to escape dangerous situations.","name":"Jane Romero","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"An \\"alone wolf,\\" cocky and headstrong; a man built for survival.<br><br>His personal perks, <b>Flip-Flop</b>, <b>Buckle Up</b> and <b>Mettle of Man</b>, give him additional resilience to pain and hardship, as well as the ability to help his friends out of sticky situations. ","name":"Ashley J. Williams","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"An aspiring journalist, able to make acute observations and gain insights that others may miss.<br><br>Her personal perks, <b>Better Together</b>, <b>Fixated</b> and <b>Inner Strength</b>, give her the information and courage she needs to tackle unexpected challenges.","name":"Nancy Wheeler","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"A former jock, able to protect and support his fellow Survivors while providing his own brand of humor.<br><br>His personal perks, <b>Babysitter</b>, <b>Camaraderie</b> and <b>Second Wind</b>, enable him to distract Killers, tolerate pain, and get back into the fight.","name":"Steve Harrington","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"A hardened street racer, able to gain advantages for her and her fellow Survivors in challenging situations.<br><br>Her personal perks, <b>Lucky Break</b>, <b>Any Means Necessary</b> and <b>Breakout</b>, enable her to cover her blood trails, reset dropped pallets, and assist helpless Survivors.","name":"Yui Kimura","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"A plucky documentarian, able to use her street smarts to avoid detection and greatly assist other Survivors.<br><br>Her personal perks, <b>Off The Record</b>, <b>Red Herring</b> and <b>For the People</b>, help her remain hidden in the face of danger, create distractions, and quickly heal others by forgoing her own safety.","name":"Zarina Kassir","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"Cheryl Mason is a young veteran of terror, emboldening both herself and her team.<br><br>Her personal perks, <b>Soul Guard</b>, <b>Blood Pact</b>, and <b>Repressed Alliance</b>, allow her to survive through immense hardship, stay in contact with team members, and plan objectives.","name":"Cheryl Mason","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"A visionary architect, able to use his relentless determination to form a plan and help other Survivors.<br><br>His personal perks, <b>Visionary</b>, <b>Desperate Measures</b>, and <b>Built to Last</b>, help him reveal generators, rescue Survivors, and get the most from his tools.","name":"Felix Richter","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"An occult investigator, able to use cunning tricks and stubborn resolve to keep herself alive.<br><br>Her personal perks, <b>Appraisal</b>, <b>Deception</b>, and <b>Power Struggle</b>, allow her to interact with objects in new ways, all while having a backup plan to escape Killers. ","name":"Élodie Rakoto","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"A self-interested music producer, able to advance her goals during turbulent times.<br><br>Her personal perks, <b>Fast Track</b>, <b>Smash Hit</b>, and <b>Self-Preservation</b>, allow her to improve her abilities when others are harmed, and quickly escape from a chase. ","name":"Yun-Jin Lee","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"Jill Valentine is a founding member of S.T.A.R.S. who has triumphed over countless bio-organic weapons.<br><br>Her personal perks, <b>Counterforce</b>, <b>Resurgence</b>, and <b>Blast Mine</b>, allow her to indirectly fight back, while offering strong support to her teammates. ","name":"Jill Valentine","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"Leon S. Kennedy is a rookie police officer who went beyond the call of duty during the outbreak in Raccoon City.<br><br>His personal perks, <b>Bite the Bullet</b>, <b>Flashbang</b>, and <b>Rookie Spirit</b>, allow him to ignore pain, disorient the Killer, and track objectives being lost. ","name":"Leon S. Kennedy","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./en/index.ts ***!
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
/* harmony import */ var _src_lib_locales_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/en */ "./src/lib/locales/en.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_en__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map