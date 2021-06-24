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

/***/ "./src/lib/locales/es.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/es.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_es_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/es/items.json */ "./src/data.compiled/locales/es/items.json");
/* harmony import */ var _data_compiled_locales_es_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/es/killerAddons.json */ "./src/data.compiled/locales/es/killerAddons.json");
/* harmony import */ var _data_compiled_locales_es_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/es/killerOfferings.json */ "./src/data.compiled/locales/es/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_es_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/es/killerPerks.json */ "./src/data.compiled/locales/es/killerPerks.json");
/* harmony import */ var _data_compiled_locales_es_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/es/killers.json */ "./src/data.compiled/locales/es/killers.json");
/* harmony import */ var _data_compiled_locales_es_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/es/powers.json */ "./src/data.compiled/locales/es/powers.json");
/* harmony import */ var _data_compiled_locales_es_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/es/sharedOfferings.json */ "./src/data.compiled/locales/es/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_es_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/es/survivorAddons.json */ "./src/data.compiled/locales/es/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_es_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/es/survivorOfferings.json */ "./src/data.compiled/locales/es/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_es_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/es/survivorPerks.json */ "./src/data.compiled/locales/es/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_es_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/es/survivors.json */ "./src/data.compiled/locales/es/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.Spanish;
var data = {
  items: _data_compiled_locales_es_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_es_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_es_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_es_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_es_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_es_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_es_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_es_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_es_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_es_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_es_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/es/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/es/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Una fila de pequeños dispositivos explosivos envueltos en una gruesa capa de papel. Al explotar, provocan fuertes estallidos y fogonazos de luz. Se pueden usar como distracción, para cegar o para celebrar algo.<br><li><b>1 carga.</b></li>","name":"Petardos chinos","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"Una linterna estándar. Puedes usarla para iluminar tu camino en la oscuridad.<br><li><b>8 segundos</b> de uso.</li>","name":"Linterna","flavor":"\\"El dueño anterior desperdició la mayor parte de pila\\".","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"Una linterna equipada con un filtro especial que tiñe el haz de luz de naranja y le añade la silueta de un fantasma. <br><li><b>8 segundos</b> de uso. </li><li><b>Aumenta considerablemente</b> la aparición de fantasmas amistosos en tu vida.</li>","name":"Fuego fatuo","flavor":"\\"¡Feliz Halloween!\\".","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"Una linterna muy manejable y de gran agarre. Su tecnología eficiente produce una luz intensa que consume menos energía.<br><li><b>8 segundos de uso</b>.</li><li><b>Reduce ligeramente</b> el consumo de energía de la linterna.</li><li><b>Aumenta ligeramente</b> la precisión.</li>","name":"Linterna deportiva","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"Una linterna robusta, algo pesada, pero de gran potencia.<br><li><b>12 segundos de uso</b>.</li><li><b>Reduce ligeramente</b> la precisión.</li><li><b>Aumenta moderadamente</b> el brillo del haz de la linterna.</li><li><b>Aumenta moderadamente</b> la duración de la ceguera.</li>","name":"Linterna multiusos","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"La parte superior de una llave, imbuida de un poder que la hace vibrar. El poder de la llave no puede activarse por sí solo. Es posible unir diversos objetos a su anilla de engarce, que canaliza el poder de la llave para producir todo tipo de efectos. <br><li><b>10 segundos</b> de uso.</li>","name":"Llave rota","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"Una llave deslustrada y torcida que tiempo atrás fue muy poderosa. El poder de la llave no puede activarse por sí solo. Es posible unir diversos objetos a su anilla de engarce, que canaliza el poder de la llave para producir todo tipo de efectos.<br><li><b>5 segundos</b> de uso.</li><li>Se puede utilizar para abrir cerraduras negras.</li>","name":"Llave deslustrada","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"Una llave deslustrada y torcida, imbuida de un poder amenazador que la hace vibrar. El poder de la llave no puede activarse por sí solo. Es posible unir diversos objetos a su anilla de engarce, que canaliza el poder de la llave para producir todo tipo de efectos.<br><li><b>30 segundos</b> de uso.</li><li>Se puede utilizar para abrir cerraduras negras.</li>","name":"Llave esqueleto","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"Un viejo trozo de pergamino hecho de material parecido a la piel. Está enrollado y sellado con un cordel de cuero incoloro. Si se sujeta y se canalizan las energías de su interior, permite percibir almas a costa de que el mapa se vaya quemando lentamente. Las auras de los generadores que ya hayas encontrado antes se te revelarán mientras le queden cargas al mapa.<br><li><b>20 segundos</b> de uso.</li><li>Empieza con <b>1</b> generador localizado automáticamente.</li><li>Permite localizar generadores en un radio de <b>8 metros</b>.</li>","name":"Mapa","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"Un trozo de pergamino hecho con piel extrañamente fresca. La sangre del borde aún no se ha secado del todo. Está enrollado y sellado con varias cuerdas y cordones de colores. Si se sujeta y se canalizan las energías de su interior, permite percibir almas a costa de que el mapa se vaya quemando lentamente. Los objetos con auras que ya hayas encontrado antes se te revelarán mientras le queden cargas al mapa.<br><li><b>20 segundos de uso</b>.</li><li>Empieza con <b>3 objetos</b> localizados automáticamente.</li><li>Permite <b>localizar objetivos</b> en un radio de <b>8 metros</b>.</li><li>Permite <b>localizar cerraduras negras</b> en un radio de <b>8 metros</b>.</li><li>Permite <b>husmear las pertenencias del asesino</b> en un radio de <b>8 metros</b>.</li><li>Permite <b>localizar las puertas de salida</b> en un radio de <b>8 metros</b>.</li>","name":"Mapa arco iris","flavor":"\\"Es descorazonador. Tantos conocimientos inefables, tantos esfuerzos extenuantes, ¿y para qué? No hay nada tangible, nada que sirva para escapar de esta pesadilla\\". (Diario de Vigo)","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"Un rudimentario botiquín de primeros auxilios que puede salvar vidas en caso de emergencia, incluso aunque le falte algún que otro suministro.<br><li><b>16 cargas</b>.</li><li><b>Aumenta moderadamente</b> la velocidad a la que curas a otros.</li><li>Permite usar <b>Autocuración</b>.</li>","name":"Botiquín de primeros auxilios de acampada","flavor":"\\"Apenas posee material suficiente para una cura decente\\".","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"Una fiambrera de plástico con pegatinas fosforescentes de Halloween rellena de suministros para primeros auxilios.<br><li><b>24 cargas.</b></li><li><b>Aumenta considerablemente</b> la velocidad a la que curas a otros.</li><li>Permite usar <b>Autocuración</b>.</li><li>Te hace <b>considerablemente más visible</b>.</li>","name":"Fiambrera de Halloween","flavor":"\\"¡La seguridad es lo primero! Asegúrate de poder ver con tu disfraz de Halloween\\".","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"Un botiquín de primeros auxilios con todos los suministros necesarios para tratar heridas leves y graves.<br><li><b>24 cargas.</b> </li><li><b>Aumenta considerablemente</b> la velocidad a la que curas a otros.</li><li>Permite usar <b>Autocuración</b>.</li>","name":"Botiquín de primeros auxilios","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"Un botiquín médico robusto y bien organizado, equipado con suministros de emergencia de primera calidad.<br><li><b>16 cargas</b>.</li><li><b>Aumenta tremendamente</b> la velocidad a la que curas a otros.</li><li><b>Aumenta tremendamente</b> la velocidad a la que te curas.</li><li>Permite usar <b>Autocuración</b>.</li>","name":"Botiquín de emergencia","flavor":"\\"Hay una cura para casi todo... pero no para esto\\".","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"Una caja grande de metal que contiene suministros médicos para rescates de emergencia en lugares inaccesibles y muchas veces aislados.<br><li><b>32 cargas</b>.</li><li><b>Aumenta tremendamente</b> la velocidad a la que curas a otros.</li><li><b>Aumenta moderadamente</b> las áreas de éxito en pruebas de habilidad.</li><li><b>Aumenta moderadamente</b> las zonas con bonificación de las pruebas de habilidad.</li><li>Permite usar <b>Autocuración</b>.</li>","name":"Botiquín de guardabosques","flavor":"\\"Pegada en la parte posterior se puede ver una etiqueta en la que pone lo siguiente: VK.ID-3994723\\".","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"Caja de metal que contiene herramientas en malas condiciones que podrían romperse en cualquier momento. Incluso siendo profano en la materia se pueden usar para reparar o romper diferentes componentes mecánicos.<br><li><b>16 cargas</b>.</li><li><b>Aumenta moderadamente</b> la velocidad de reparación.</li><li><b>Reduce ligeramente</b> el área de éxito de las pruebas de habilidad.</li><li>Permite usar <b>Sabotaje</b>.</li>","name":"Herramientas desgastadas","flavor":"\\"¿Llamas herramientas a esto?... ¿En serio?\\".","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"Una caja de metal que contiene un juego de herramientas básicas. Incluso siendo profano en la materia se puede usar para reparar o romper diferentes componentes mecánicos.<br><li><b>20 cargas.</b></li><li><b>Aumenta moderadamente</b> la velocidad de reparación.</li><li>Permite usar <b>Sabotaje</b>.</li><li><b>Aumenta ligeramente</b> la velocidad de sabotaje.</li>","name":"Caja de herramientas","flavor":"\\"Se desconoce el origen de estas herramientas. ¿Las habrá traído uno de los nuestros o habrán pertenecido a alguno de los monstruos?\\".","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"Caja de metal que contiene herramientas mecánicas especializadas. Incluso siendo profano en la materia se puede usar para reparar o romper diferentes componentes mecánicos.<br><li><b>16 cargas</b>.</li><li><b>Aumenta considerablemente</b> la velocidad de reparación.</li><li>Permite usar <b>Sabotaje</b>.</li><li><b>Reduce ligeramente</b> la velocidad de sabotaje.</li>","name":"Caja de herramientas de mecánica","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"Una caja grande de metal que contiene herramientas básicas y recambios mecánicos. Incluso siendo profano en la materia se puede usar para reparar o romper diferentes componentes mecánicos.<br><li><b>32 cargas</b>.</li><li><b>Aumenta moderadamente</b> la velocidad de reparación.</li><li>Permite usar <b>Sabotaje</b>.</li>","name":"Caja de herramientas espaciosa","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"Una caja de metal con herramientas altamente especializadas de ingeniería. Aun así, los neófitos todavía se las pueden apañar para llevar a cabo reparaciones rápidas de diversos componentes mecánicos con ellas.<br><li><b>16 cargas</b>.</li><li><b>Aumenta tremendamente</b> la velocidad de reparación.</li><li>Permite usar <b>Sabotaje</b>.</li><li><b>Reduce moderadamente</b> la velocidad de sabotaje.</li>","name":"Caja de herramientas de ingeniería","flavor":"\\"He creado herramientas incomparables y me quedé paralizado mientras me las robaban. Estas no son más que pobres réplicas, escupidas por la niebla\\". (Diario de Vigo)","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"Una caja de metal que contiene principalmente serruchos y alicates de presión de diferentes tamaños, pero también otras herramientas. Aunque el contenido de esta caja de herramientas está destinado sin duda a fines destructivos, también sirve para reparar diversos componentes mecánicos.<br><li><b>24 cargas</b>.</li><li><b>Aumenta ligeramente</b> la velocidad de reparación.</li><li>Permite usar <b>Sabotaje</b>.</li><li><b>Aumenta considerablemente</b> la velocidad de Sabotaje.</li>","name":"Caja de herramientas de Alex","flavor":"\\"En la mayoría de las herramientas pone \'propiedad de Alex\'\\".","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"Un adorno para cenas pequeño y muy explosivo. Al detonar, produce fuertes estallidos y fogonazos de luz. Se puede usar como distracción, para cegar o para celebrar algo.<br><li><b>1 carga.</b></li>","name":"Petardo invernal","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"Un adorno para cenas pequeño y muy explosivo. Al detonar, produce fuertes estallidos, fogonazos de luz y confeti. Se puede usar como distracción, para cegar o para celebrar nuestro tercer aniversario.<br><li><b>1 carga.</b></li>","name":"Petardo del tercer aniversario","flavor":"\\"¡Feliz aniversario! ¡Brindemos por estos tres años juntos!\\".<br>(El equipo de Dead by Daylight)","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"Un botiquín festivo que desata una explosión de confeti tras curar por completo a un superviviente. ¡Sorpresa!<br><li><b>24 cargas</b>.</li><li><b>Aumenta considerablemente</b> la velocidad a la que curas a los demás.</li><li>Permite usar <b>Autocuración</b>.</li>","name":"Botiquín de aniversario","flavor":"\\"¡Feliz aniversario! ¡Que sean muchos más!\\".<br>(El equipo de Dead by Daylight)","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"Una linterna festiva que desata una explosión de confeti tras cegar al asesino. ¡Sorpresa!<br><li><b>8 segundos</b> de uso.</li>","name":"Linterna de aniversario","flavor":"\\"¡Feliz aniversario! ¡Que sean muchos más!\\".<br>(El equipo de Dead by Daylight)","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/es/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Guantes acolchados de cuero. <br><li><b>Aumentan ligeramente</b> la velocidad a la que se instalan las trampas para osos.</li>","name":"Guantes de trampero","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"Muelle helicoidal grande y pesado que le imprime más agarre a la trampa para osos.<br><li><b>Aumenta ligeramente</b> el tiempo que se tarda en desarmar las trampas para osos.</li>","name":"Muelle fuerte","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"Un kit de repuestos de trampas para osos que sustituye el sistema habitual de dos muelles por otro de cuatro muelles helicoidales, lo que le imprime más agarre a la trampa.<br><li><b>Aumenta moderadamente</b> el tiempo que se tarda en desarmar las trampas para osos.</li>","name":"Kit de 4 muelles","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"Cenizas de madera que se pueden hervir y aplicar sobre las trampas para osos a modo de camuflaje.<br><li><b>Oculta moderadamente</b> todas las trampas para osos.</li>","name":"Pigmento de palo de Campeche","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"Estas mandíbulas de recambio para trampas para osos poseen cuchillas serradas que provocan horribles heridas abiertas.<br><li>Los supervivientes atrapados en una trampa para osos sufren el efecto de estado <b>Hemorragia</b> hasta que se curan del todo.</li>","name":"Mandíbulas serradas","flavor":"\\"Como una bestia depredadora, puede oler y rastrear la sangre\\".","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"Herramientas sencillas diseñadas para instalar las trampas para osos de manera rápida y segura.<br><li><b>Aumentan moderadamente</b> la velocidad a la que se instalan las trampas para osos.</li>","name":"Bases para trampas","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"Riñonera de cuero curtido. Es grande y resistente, pensada para trasportar equipo de caza.<br><li>Comienzas con <b>1 trampa para osos adicional</b>.</li><li>Permite transportar <b>2 trampas para osos adicionales</b>.</li>","name":"Bolsa de trampero","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"Estas mandíbulas de trampas para osos están recubiertas de una costra de óxido que impide que las heridas se curen fácilmente.<br><li>Los supervivientes atrapados en una trampa para osos sufren el efecto de estado <b>Laceración</b>.","name":"Mandíbulas oxidadas","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"Muelle secundario que mantiene la efectividad de la trampa para osos cuando el muelle principal se queda inutilizado.<br><li><b>Aumenta considerablemente</b> el tiempo que se tarda en desarmar las trampas para osos.</li>","name":"Muelle secundario","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"Sustancia negra, opaca y pegajosa parecida a la brea. Cuando se aplica a las trampas para osos, las hace mucho menos visibles.<br><li><b>Oculta considerablemente</b> todas las trampas para osos.</li>","name":"Frasco de brea","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"Trozo de cera que sirve para reducir la fricción y facilitar el movimiento de los componentes mecánicos.<br><li><b>Reduce moderadamente</b> las probabilidades de escapar de una trampa para osos.</li>","name":"Ladrillo de cera","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"Aceite transparente que hace que sea resulte más peligroso manipular los muelles de las trampas.<br><li><b>Aumenta tremendamente</b> el tiempo que se tarda en desarmar las trampas para osos.</li>","name":"Muelle aceitoso","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"Conjunto especializado de herramientas para fijar las trampas para osos con el fin de garantizar su efectividad.<br><li><b>Aumenta tremendamente</b> la velocidad a la que se instalan las trampas para osos.</li><li><b>Aumenta considerablemente</b> el tiempo necesario para liberarse y escapar de las trampas para osos.</li><li><b>Reduce moderadamente</b> las probabilidades de escapar de una trampa para osos.</li>","name":"Herramientas de fijación","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"Trozos de piel de todo tipo cosidos toscamente para hacer una bolsa grande.<br><li>Empiezas con <b>2 trampas para osos adicionales</b>.</li><li>Permite transportar <b>2 trampas para osos adicionales</b>.</li>","name":"Bolsa de jirones","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"Este desagradable líquido viscoso hace que resulte más peligroso manipular los muelles de las trampas.<br><li>Cuando un superviviente <b>ileso</b> sabotea o desarma una trampa, los muelles ensangrentados se cobran su precio y el superviviente se queda <b>herido</b>.</li><li><b>Aumenta ligeramente</b> el tiempo que se tarda en desarmar las trampas para osos.</li>","name":"Muelle ensangrentado","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"Las trampas afiladas con esta piedra de brillo enfermizo parecen cobrar vida.<br><li>Cada <b>30 segundos</b>, una trampa para osos cerrada al azar se instala sola.</li>","name":"Piedra iridiscente","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"El símbolo de Laokeye, que representa la astucia, está dibujado con el dedo en hollín en el medio de la campana.<br><li>El Espectro <b>se materializará por completo</b> al romper palés o dañar generadores mientras está oculto.</li>","name":"\\"La serpiente\\" Hollín","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"El símbolo de Wonnug, que representa a un rastreador sin parangón, está dibujado con el dedo en hollín en el medio de la campana.<br><li>Mientras estás oculto, las marcas de sangre fresca son <b>considerablemente</b> más perceptibles de lo normal.</li>","name":"\\"El sabueso\\" - Hollín","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"El símbolo de Khugwemuu, que representa el reino de los espíritus, está dibujado con el dedo en hollín en el medio de la campana.<br><li>Cuando el Espectro se materializa, el radio de terror y la marca roja se suprimen durante <b>6</b> segundos.</li>","name":"\\"El Fantasma\\" - Hollín","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"El símbolo de Kunwulju, que representa el reino del miedo, está dibujado con el dedo en hollín en el medio de la campana.<br><li>El radio de terror del Espectro <b>ya no se suprime</b> mientras está oculto.</li><li>Los puntos de sangre por acechar y llevar a cabo ataques sorpresa aumentan un 100 %.</li>","name":"\\"La bestia\\" - Hollín","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"Badajo hecho con un hueso muy pulido. Hace que los tañidos de la Campana gimiente reverberen y se distorsionen de forma caótica.<li>Los supervivientes ya no podrán distinguir a qué <b>distancia</b> ni en qué <b>dirección</b> se encuentra la campana.</li>","name":"Badajo de hueso","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"El símbolo de Kratin, que representa la muerte rápida, está dibujado con el dedo en barro en el medio de la campana.<br><li>Reduce <b>considerablemente</b> el tiempo que tarda en desaparecer el Espectro.</li>","name":"\\"Proyección\\" - Barro","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"El símbolo de Ohuwe-Onmnea, que representa una tormenta aullante, está dibujado con el dedo en barro en el medio de la campana.<li><b>Aumenta moderadamente</b> la velocidad de movimiento del Espectro mientras está oculto.</li>","name":"\\"Vendaval\\" - Barro","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"El símbolo de Kuntin-Takkho, que representa el descenso rápido sobre una presa, está dibujado con el dedo en barro en el medio de la campana.<br><li><b>Reduce ligeramente</b> el tiempo que tarda en reaparecer el Espectro.</li>","name":"\\"Cacería rápida\\" - Barro","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"El símbolo de Baikra-Kaeug, que representa la ferocidad, está dibujado con el dedo en barro en el medio de la campana.<br><li><b>Los ataques sorpresa</b> infligen <b>ceguera de aura</b> a los supervivientes durante <b>60 segundos</b>.</li>","name":"\\"Guerrero ciego\\" - Barro","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"El símbolo de Ohuwe-Onmnea, que representa una tormenta aullante, está dibujado con el dedo en tinta blanca en el medio de la campana.<li><b>Aumenta considerablemente</b> la velocidad de movimiento del Espectro mientras está oculto.</li>","name":"\\"Vendaval\\" - Blanco","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"El símbolo de Kuntin-Takkho, que representa el descenso rápido sobre una presa, está dibujado con el dedo en tinta blanca en el medio de la campana.<br><li><b>Reduce moderadamente</b> el tiempo que tarda en reaparecer el Espectro.</li>","name":"\\"Cacería rápida\\" - Blanco","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"El símbolo de Yiwarick, que representa la sinergia oscura, está dibujado con el dedo en tinta blanca en el medio de la campana.<br><li><b>Reduce considerablemente</b> el tiempo necesario para atravesar ventanas, abrir taquillas, romper palés y elementos destruibles o dañar generadores mientras estás oculto.</li>","name":"\\"Danza Sombría\\" - Blanco","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"El símbolo de Kratin, que representa la muerte rápida, está dibujado con el dedo en tinta blanca en el medio de la campana.<br><li><b>Reduce tremendamente</b> el tiempo que tarda en desaparecer el Espectro.</li>","name":"\\"Proyección\\" - Blanco","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"El símbolo de Baikra-Kaeug, que representa la ferocidad, está dibujado con el dedo en tinta blanca en el medio de la campana.<br><li>Los ataques sorpresa infligen los efectos de estado <b>Laceración</b> y <b>Hemorragia</b> a los supervivientes hasta que se curen por completo.</li>","name":"\\"Guerrero ciego\\" - Blanco","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"El símbolo de Ohuwe-Onmnea, que representa una tormenta aullante, está estampado con sangre en el medio de la campana.<br><li><b>Aumenta tremendamente</b> la velocidad de movimiento del Espectro mientras está oculto.</li>","name":"\\"Vendaval\\" - Sangre","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"El símbolo de Kuntin-Takkho, que representa el descenso rápido sobre una presa, está estampado con sangre en la parte superior de la campana.<br><li><b>Reduce considerablemente</b> el tiempo que tarda en reaparecer el Espectro.</li>","name":"\\"Cacería rápida\\" - Sangre","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"El símbolo de Yiwarick, que representa la sinergia oscura, está estampado con sangre en el medio de la campana.<br><li><b>Reduce tremendamente</b> el tiempo necesario para atravesar ventanas, abrir taquillas, romper palés y elementos destruibles o dañar generadores mientras estás oculto.</li>","name":"\\"Danza sombría\\" - Sangre","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"El símbolo de Kra-Frabai, que representa al Ente que nos cuida, está estampado con sangre en la parte superior de la campana.<br><li>Despierta el potencial oculto que permite percibir auras. Mientras estás oculto, se te revelarán las auras de los supervivientes en un radio de <b>12 metros</b>.</li>","name":"\\"Lo veo todo\\" - Sangre","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"Cuerda trenzada que rodea al badajo para amortiguar los sonidos. Un aura malévola emana de ella. <br><li><b>Silencia completamente</b> la Campana gimiente</li>","name":"Badajo trenzado","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"El símbolo de Kra-Frabai, que representa al Ente que nos cuida, brilla ominosamente en la parte superior de la campana.<br><li>Despierta la increíble capacidad de percibir auras. Mientras estás oculto, el <b>progreso de reparación de los generadores</b> puede distinguirse según la <b>intensidad de sus auras.</b></li>","name":"\\"Lo veo todo\\" - Espíritu","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"Un embrague resistente que mantiene la fluidez de movimiento de la cadena.<br><br><li><b>Reduce</b> el área de colisión durante un esprint con motosierra.</li>","name":"Embrague pesado","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"Un dispositivo mecánico que limita la cantidad de combustible que pueden absorber los motores pequeños para así garantizar una velocidad más segura y constante.<br><br><li>Los supervivientes golpeados por la motosierra sufren un daño de un solo estado de salud.</li><li>Obtienes un <b>100 %</b> adicional de puntos de sangre por golpes con la motosierra.</li>","name":"Limitador de velocidad","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Un filtro agrietado y polvoriento que, a pesar de todo, funciona mejor que los modelos estándar.<br><br><li><b>Aumenta ligeramente</b> el límite de sobrecalentamiento de la motosierra.</li>","name":"Filtro de aire del desguace","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"Botas con la punta reforzada que protegen de los impactos.<br><br><li><b>Reduce ligeramente</b> el tiempo de recuperación tras golpear un objeto con la motosierra.</li>","name":"Botas con punta de acero","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"Un silenciador modificado toscamente para permitir un mayor flujo de aire.<br><br><li><b>Aumenta ligeramente</b> la velocidad de enfriamiento de la motosierra.</li>","name":"Silenciador agujereado","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"Un espectacular cinturón brillante que causa furor entre los muchachos de campo.<br><br><li><b>Reduce</b> el radio de terror 8 metros cuando la motosierra se está sobrecalentando.</li>","name":"Hebilla grande","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"Aceite barato que se puede usar para lubricar cadenas ruidosas.<br><br><li><b>Reduce ligeramente</b> el ruido de la motosierra.</li>","name":"Aceite de motor genérico","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"Un par de botas buenas sacadas del cadáver de Max Thompson sénior.<br><br><li><b>Aumenta moderadamente</b> la maniobrabilidad del esprint con motosierra.</li>","name":"Botas de papá","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"Grabados en el cuerpo de la motosierra que cuentan el número de vidas que ha segado. Llena de determinación a su usuario.<br><li><b>Aumenta ligeramente</b> la velocidad de movimiento de la motosierra.</li><li><b>Aumenta ligeramente</b> el tiempo de carga.</li><li>Acumulable.</li>","name":"Grabados de muertes","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"Unas cuantas píldoras de cafeína que estaban en el bolso de Evelyn Thompson. Entre sus efectos secundarios se encuentran el nerviosismo y la irritabilidad.<br><br><li><b>Reduce ligeramente</b> el tiempo de carga de la motosierra durante 30 segundos después de que te aturdan con un palé.</li><br>","name":"Ayuda para mamá","flavor":"\\"Doctor, por favor, deme algunas más\\". (Evelyn Thompson)","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"Una cadena especializada que reduce la probabilidad de retroceso.<br><br><li><b>Reduce considerablemente</b> la penalización de tiempo al tropezarte contra obstáculos durante un esprint con motosierra.</li>","name":"Cadenas de bajo retroceso","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"Una mezcla húmeda de hojas aromáticas que enmascara el olor del cazador a la hora de acechar a su presa.<br><br><li>Aplica el efecto de estado Indetectable durante 15 segundos tras golpear con la motosierra.</li>","name":"Mezcla de hojas","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"Grabados en el cuerpo de la motosierra que cuentan el número de vidas que ha segado la bestia oscura que habita en la niebla. Llena de determinación a su usuario.<br><li><b>Aumenta moderadamente</b> la velocidad de movimiento durante un esprint con motosierra.</li><li><b>Aumenta ligeramente</b> el tiempo de carga de la motosierra.</li>","name":"Grabados malditos","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"Grasa espesa que se puede aplicar debajo de los ojos para reducir el deslumbramiento.<br><br><li><b>Aumenta moderadamente</b> la velocidad de enfriamiento de la motosierra cuando te alumbran con una linterna.</li>","name":"Grasa negra","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"Aunque está lleno de polvo y aceite, este carburador se mantiene bien ajustado.<br><br><li><b>Reduce moderadamente</b> el tiempo de carga de la motosierra.</li><li><b>Reduce</b> la velocidad de movimiento base a 4,4 metros por segundo.","name":"Carburador ajustado","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"Botas con piezas de metal que se meten en el barro para conseguir mayor control y estabilidad al caminar.<br><li><b>Aumenta tremendamente</b> la maniobrabilidad mientras utilizas la motosierra.</li><li><b>Aumenta considerablemente</b> la penalización de tiempo al tropezarte contra objetos.</li>","name":"Botas con pinchos","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"Guantes con olor a rancio y manchas de sustancias desconocidas. A pesar de su mal estado, la tela es gruesa.<br><br><li><b>Reduce moderadamente</b> el calor que genera la motosierra cuando empieza a revolucionarse.</li><br>","name":"Guantes de pocilga","flavor":"\\"No hay condiciones que puedan manchar el alma de un hombre trabajador\\". (Max Thompson sénior)","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"Cadenas ligeras que disminuyen el peso de la motosierra, lo que facilita su maniobrabilidad.<br><br><li>Continúa con un esprint con motosierra tras romper un palé o una pared.</li><li>Los supervivientes golpeados por la motosierra en menos de 5 segundos tras haber roto un palé o una pared sufren un daño de un solo estado de salud.</li>","name":"Cadenas livianas","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"Este ladrillo, emblema del confinamiento de Max Jr., fue el primero en caer cuando la barricada de su habitación empezó a derrumbarse.<br><br><li>Tras realizar un esprint con la motosierra durante 2 segundos, se te aplica el efecto de estado Indetectable hasta que dejes de esprintar.</li><br>","name":"Ladrillo iridiscente","flavor":"\\"¿Qué es ese alboroto, chaval?\\". (Max Thompson sénior)","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"Un silenciador para motosierra fabricado con tal maestría que supera a cualquier otro.<br><br><li>Los supervivientes no oyen la motosierra fuera del radio de terror.</li>","name":"Silenciador supremo","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"Un juguete sin pintar, tallado con forma de caballo en madera barata. En su momento fue símbolo de una profunda conexión entre un paciente catatónico y su enfermera.<br><li><b>Reduce moderadamente</b> la fatiga extra al fallar ataques tras Proyección.</li>","name":"Caballito de madera","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"Un peine para piojos traído de la clínica. En su momento fue símbolo de una profunda conexión entre una paciente con ansiedad y su enfermera.<br><li><b>Reduce moderadamente</b> la distancia de las embestidas tras Proyección.</li><li>Aumenta <b>un 100 %</b> el número de puntos de sangre obtenidos tras <i>proyecciones</i>.</li>","name":"Peine para piojos blanco","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"Una cuchara de metal sin brillo y medio oxidada, confiscada al paciente de la habitación 202, el \\"Hombre Malo\\".<br><li>Al golpear a un superviviente con un ataque de Proyección, sus quejidos de dolor se vuelven <b>moderadamente más ruidosos</b> durante <b>60 segundos</b>.</li>","name":"Cuchara de metal","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"Una muela podrida arrebatada de la mano del cadáver del \\"Hombre Malo\\".<br><li>Si golpeas a un superviviente al usar Proyección, percibirás su aura cuando se esté o lo estén curando dentro de una distancia de <b>28 metros</b> durante <b>60 segundos</b>.</li>","name":"Recuerdo del \\"Hombre Malo\\"","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"Un reloj de bolsillo roto y quemado, cuyas piezas tintinean. Se recuperó del cuerpo de la enfermera Moris.<br><li><b>Aumenta moderadamente</b> el tiempo disponible para encadenar proyecciones.</li>","name":"Reloj de bolsillo","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"Una pieza de joyería sin valor que quizás tuvo un gran significado para alguien. La encontraron en el cadáver de la chica ansiosa.<br><li><b>Reduce moderadamente</b> la distancia máxima de Proyección.</li><li>Aumenta un <b>100 %</b> los puntos de sangre obtenidos por <i>proyecciones precisas</i>.</li>","name":"Brazalete sin brillo","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"Un cordel negro que se usaba como cinturón para los momentos de luto. Arrebatado del cuerpo del padre Campbell.<br><li><b>Aumenta moderadamente</b> la velocidad de recarga de Proyección.</li>","name":"Cinturón oscuro","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"Una piña que, sorprendentemente, conseguía apaciguar los movimientos repetitivos de un paciente. Arrebatada del cuerpo del chico catatónico.<br><li><b>Reduce considerablemente</b> la fatiga extra de las proyecciones combinadas.</li>","name":"Tesoro del chico catatónico","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"Un aliento trémulo y nervioso arrebatado al \\"Hombre Malo\\". Palpita y salta con agresividad al entrar en contacto con la Enfermera.<br><li>Si golpea a un superviviente tras usar Proyección, <b>la Enfermera pierde la capacidad de proyectarse</b> y su velocidad de movimiento base aumenta a <b>4,6 m/s</b> durante <b>60 segundos</b>.</li>","name":"Aliento espasmódico","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"El aliento pesado arrebatado al camillero obeso. Oscila débilmente al entrar en contacto con la Enfermera.<br><li><b>Aumenta considerablemente</b> la distancia máxima de Proyección.</li><li><b>Aumenta considerablemente</b> el tiempo de carga máximo de Proyección.</li>","name":"Jadeo intenso","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"Un estertor sibilante robado al padre Campbell. Se curva e inclina en silencio al entrar en contacto con la Enfermera.<br><li><b>Aumenta considerablemente</b> la velocidad de recarga de Proyección.</li>","name":"Respiración frágil","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"La respiración irregular y deteriorada obtenida del chico catatónico. Normalmente se mantiene estable y tranquila, pero se agita violentamente al entrar en contacto con la Enfermera.<br><li><b>Reduce moderadamente</b> la duración de la fatiga tras usar Proyección.</li>","name":"Respiración atáxica","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"El aliento de sorpresa de una chica ansiosa que la Enfermera apreciaba. Se retuerce enérgicamente al entrar en contacto con la Enfermera.<br><li>Al proyectarse hacia un superviviente, este grita y otorga <b>200 puntos de sangre</b> en la categoría <i>Malicia</i>.</li>","name":"Aliento ansioso","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"Un trozo rasgado de franela de cuadros rojos y negros. Este pedazo de tela otorga a la Enfermera una capacidad de concentración devastadora.<br><li>Permite ver el punto hasta donde llega la Proyección.</li>","name":"Franela de cuadros","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"Un poderoso último aliento arrebatado a Harvey Kavanagh, camillero del psiquiátrico Crotus Prenn. En manos de la Enfermera se agita con intensidad.<br><li><b>Aumenta tremendamente</b> la distancia máxima de Proyección.</li><li><b>Aumenta tremendamente</b> el tiempo de carga máximo de Proyección.</li>","name":"Último suspiro de Kavanagh","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"Un poderoso último aliento arrebatado a Mary Jenner, paciente del psiquiátrico Crotus Prenn. En manos de la Enfermera, tiembla con intensidad.<br><li>Tras usar Proyección, la Enfermera vuelve a proyectarse inmediatamente hacia su posición original pulsando el <i>botón de la habilidad activa</i>. Debe activarse antes de que le afecte la fatiga.</li>","name":"Último suspiro de Jenner","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"Un último y poderoso aliento arrebatado al cura del psiquiátrico Crotus Prenn, el padre Campbell. Crepita con intensidad en las manos de la Enfermera.<br><li>Después de reaparecer tras una Proyección cargada al máximo, la Enfermera se proyecta inmediatamente a mitad de carga hacia la dirección en la que esté mirando.</li>","name":"Último suspiro de Campbell","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"Un poderoso último suspiro arrebatado al \\"Hombre Malo\\", un paciente del psiquiátrico Crotus Prenn. En manos de la Enfermera, se agita con intensidad.<br><li>Si golpea a un superviviente al usar Proyección, la Enfermera adquiere el efecto de estado <b>Indetectable</b> durante <b>16 segundos</b>.</li><li>Este efecto solo se puede activar una vez cada <b>60 segundos</b>.</li>","name":"Último suspiro del \\"Hombre Malo\\"","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"Un trozo de cinta blanca e inmaculada que antiguamente estuvo unida a un libro sagrado. Es el símbolo de una disputa.<br><li>Añade <b>1</b> carga de Proyección.</li><li>La Enfermera solo puede proyectarse a lugares que estén dentro de su línea de visión.</li>","name":"Marcapáginas desgarrado","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"Una caja de cerillas que contiene una extraña colección de botones desemparejados. Es el recuerdo de un lugar horrible.<br><li>Elimina <b>1</b> carga de Proyección.</li><li>Aumenta la velocidad de movimiento base de la Enfermera a <b>4,2 m/s</b>.</li>","name":"Caja de cerillas","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"Bisutería barata hecha de plástico. Pintada para imitar un material precioso.<br><li><b>Aumenta ligeramente</b> la velocidad de movimiento mientras acechas.</li>","name":"Pendientes horteras","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"Una nota \\"romántica\\", aunque algo sórdida, dejada para atraer la atención de una amante.<br><li><b>Aumenta ligeramente</b> la embestida de <b>Mal interior I</b>.</li>","name":"Nota del novio","flavor":"La nota está firmada con una \\"D\\".","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"Un pelo rubio ligeramente ondulado.<br><li><b>Aumenta ligeramente</b> la duración de <b>Mal interior III</b>.</li><li><b>Aumenta ligeramente</b> la cantidad de maldad necesaria para llegar a <b>Mal interior III</b> por primera vez.</li>","name":"Pelo Rubio","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"Un pequeño fragmento de material muy reflectante, probablemente de un espejo roto.<br><li><b>Mal interior II revela el aura de los supervivientes</b> que hayan sido acechados durante al menos <b>1 segundo</b>.</li><li>El aura permanece visible durante <b>2 segundos</b>.</li>","name":"Fragmento reflectante","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"Una consuelda seca y medio descolorida, recogida de una tumba.<br><li><b>Aumenta ligeramente</b> la velocidad a la que ganas maldad cuando acechas a un superviviente.</li>","name":"Flor de la tumba","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"Un collar grande hecho con cuentas y metales baratos. Uno de los favoritos de Judith.<br><li><b>Aumenta moderadamente</b> la velocidad de movimiento mientras acechas.</li>","name":"Joyería","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"Un cepillo con cerdas de nailon para suavizar el pelo y darle cuerpo.<br><li><b>Aumenta moderadamente</b> la duración de <b>Mal interior III</b>.</li><li><b>Aumenta ligeramente</b> la cantidad de maldad necesaria para llegar a <b>Mal interior III</b> por primera vez.</li>","name":"Cepillo","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"Un pequeño fragmento de cristal coloreado, probablemente de algún objeto roto. Es imposible determinar su origen.<br><li><b>Mal interior I revela el aura de los supervivientes</b> que hayan sido acechados durante al menos <b>1 segundo</b>.</li><li>El aura permanece visible durante <b>3 segundos</b>.</li>","name":"Fragmento de cristal","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"Un conejo gris abierto en canal.<br><li><b>Reduce moderadamente</b> el radio de terror de <b>Mal interior II</b>.</li><li><b>Aumenta moderadamente</b> el radio de terror de <b>Mal interior III</b>.</li>","name":"Conejo muerto","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"Un trozo grande y afilado de espejo.<br><li><b>Mal interior II revela el aura de los supervivientes</b> que hayan sido acechados durante al menos <b>1 segundo</b>.</li><li>El aura permanece visible durante <b>5 segundos</b>.</li>","name":"Trozo de espejo","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"Un diario que perteneció a Judith M. Myers. La mayoría de las páginas están cubiertas de dibujos macabros.<br><li>Te <b>obsesionas</b> con un superviviente.</li><li><b>Aumenta considerablemente</b> la velocidad a la que ganas maldad cuando acechas a tu obsesión.</li><li><i>Solo una obsesión por partida.</i></li>","name":"Diario de Judith","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"Una caja de madera vacía en la que se solían guardar objetos de tocador.<br><li><b>Aumenta considerablemente</b> la velocidad de movimiento mientras acechas.</li>","name":"Joyero","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"Una página brillante arrancada del anuario de 1965 del instituto de Haddonfield, dedicada a la memoria de Judith Myers.<br><li><b>Aumenta moderadamente</b> la velocidad a la que ganas maldad cuando acechas a un superviviente.</li>","name":"Homenaje a J. Myers","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"Un lazo a cuadros azul para el pelo.<br><li><b>Aumenta considerablemente</b> la duración de <b>Mal interior III</b>.</li><li><b>Aumenta ligeramente</b> la cantidad de maldad necesaria para llegar a <b>Mal interior III</b> por primera vez.</li>","name":"Lazo","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"Un espejo de maquillaje portátil en perfecto estado, salvo por una fina película de suciedad y polvos para la cara.<br><li><b>Mal interior II revela las auras de los supervivientes</b> dentro de un alcance de <b>16 metros</b> mientras acechas.</li><li>Mal interior no puede pasar de <b>NIVEL II</b>.</li><li><b>Reduce ligeramente</b> la velocidad de movimiento.</li><li>Cada <b>golpe</b> otorga un <b>100 %</b> de puntos de sangre para el apartado de <b>golpes</b> en la categoría <b>Brutalidad</b>, y un <b>150 %</b> de puntos de sangre adicionales en la categoría <b>Malicia</b>.</li>","name":"Espejo de maquillaje","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"Un trozo de granito del tamaño de un puño perteneciente a una lápida rota.<br><li>Permite <b>matar a supervivientes ilesos o heridos</b> con <b>Mal interior III</b>.</li><li><b>Impide</b> acechar con <b>Mal interior III</b>.</li><li>Matar a un superviviente <b>merma considerablemente</b> el poder de Mal interior.</li><li><b>Aumenta considerablemente</b> la cantidad de maldad necesaria para llegar a <b>Mal interior III</b> por primera vez.</li>","name":"Trozo de lápida","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"Un espejo de maquillaje portátil brutalmente rayado con algo metálico y afilado.<br><li><b>Mal interior I revela las auras de los supervivientes</b> acechados dentro de un alcance de <b>32 metros</b>.</li><li>Mal interior no puede sobrepasar el <b>NIVEL 1</b>.</li><li>Cada <b>golpe</b> otorga un <b>100 %</b> de puntos de sangre para el apartado de <b>golpes</b> en la categoría <b>Brutalidad</b>, y un <b>200 %</b> de puntos de sangre adicionales en la categoría <b>Malicia</b>.</li>","name":"Espejo rayado","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"Un mechón de pelo rubio atado con una goma negra.<br><li><b>Aumenta tremendamente</b> la duración de <b>Mal interior III</b>.</li><li><b>Aumenta moderadamente</b> la cantidad de maldad necesaria para llegar a <b>Mal interior III</b> por primera vez.</li>","name":"Mechón de Pelo","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"Una lápida de granito grande y pesada, perteneciente a Judith Myers, robada del cementerio de Mt. Sinclair.<br><li>Permite <b>matar a supervivientes ilesos o heridos</b> con <b>Mal interior III</b>.</li><li><b>Impide</b> acechar con <b>Mal interior III</b> por primera vez.</li><li><b>Aumenta tremendamente</b> la cantidad de maldad necesaria para llegar a <b>Mal interior III</b>.</li><li><b>Reduce moderadamente</b> la velocidad de movimiento.</li>","name":"Lápida de Judith","flavor":"\\"Aquí yace nuestra querida hija\\".","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"Una mata de pelo rubio arrancado a la fuerza del cuero cabelludo de alguien. Desprende un ligero aroma a fragancia floral de mujer.<br><li>Duración <b>ilimitada</b> de <b>Mal interior III</b>.</li><li><b>Aumenta tremendamente</b> la cantidad de maldad necesaria para llegar a <b>Mal interior III</b> por primera vez.</li>","name":"Mata de pelo perfumada","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"Un ornamento rígido para el cuello hecho con plantas muertas.<br><li><b>Reduce ligeramente</b> el tiempo que se tarda en colocar las trampas fantasma.</li>","name":"Collar de cuerda","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"Fragmentos diminutos de cáscara de huevo con un pálido brillo dorado.<br><li><b>Aumenta ligeramente</b> la duración de las trampas fantasma activadas.</li>","name":"Cáscara de huevo triturada","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"Un pequeño montón de fango, ennegrecido con restos de moscas. Se consume para aumentar la resistencia.<br><li><b>Aumenta ligeramente</b> la distancia desde la que la Bruja se puede teletransportar hasta sus trampas.</li>","name":"Fango con moscas muertas","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"Agua turbia contenida en un frasco para pastillas de cristal de otra época.<br><li><b>Aumenta ligeramente</b> el radio de efectividad de las trampas fantasma.</li>","name":"Agua de pantano","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"Un puñado de pequeñas flores inmaculadas, organizadas en ramilletes y cubiertas de una fina pelusilla grisácea.<br><li>Muestra el aura de los supervivientes durante <b>3 segundos</b> cuando activan trampas fantasma.</li>","name":"Flores de sauce blanco","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"Media cáscara de huevo redonda y vacía.<br><li><b>Aumenta moderadamente</b> la duración de las trampas fantasma activadas.</li>","name":"Media cáscara de huevo","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"Un puñado de alas amarillentas, secas y crujientes. Se consume para aumentar la resistencia.<br><li><b>Aumenta moderadamente</b> la distancia desde la que la Bruja se puede teletransportar hasta sus trampas.</li>","name":"Alas de libélula","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"Un ornamento rígido para el cuello hecho con plantas muertas y adornado toscamente con corteza de ciprés y musgo de pantano.<br><li><b>Reduce moderadamente</b> el tiempo que se tarda en colocar las trampas fantasma.</li>","name":"Collar de ciprés","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"Agua mancillada contenida en una hoja plegada de nenúfar.<br><li><b>Aumenta moderadamente</b> el alcance del efecto de las trampas fantasma.</li>","name":"Agua ensangrentada","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"Tres ramas frágiles de sauce dispuestas en forma de guirnalda triangular.<br><li>Muestra el aura de los supervivientes durante <b>5 segundos</b> cuando tropiezan con alguna trampa fantasma.</li>","name":"Guirnalda de sauce","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"Un ornamento rígido para el cuello hecho con plantas muertas y adornado con hojas y pétalos marchitos de orquídea.<br><li><b>Reduce considerablemente</b> el tiempo que se tarda en colocar las trampas fantasma.</li>","name":"Collar de orquídeas de pantano","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"Una gran cigarra de pantano cubierta con una fina capa de ceniza. Crujiente. Se consume para aumentar la resistencia.<br><li><b>Aumenta considerablemente</b> la distancia desde la que la Bruja se puede teletransportar hasta sus trampas.</li>","name":"Cigarra seca","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"Un huevo de tortuga de color naranja pálido, cascado y vaciado.<br><li><b>Aumenta considerablemente</b> la duración de las trampas fantasma activadas.</li>","name":"Huevo de tortuga cascado","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"Un puñado de lodo con vetas de un intenso color carmesí. Las capas ensangrentadas fortalecen el fango.<br><li><b>Aumenta considerablemente</b> el radio de efectividad de las trampas fantasma.</li>","name":"Fango ensangrentado","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"La mano destrozada y cercenada del carnicero del pueblo caníbal. La esencia de vida atrapada en su interior despierta un enorme potencial en el poder de la Bruja.<br><li>Los fantasmas de fango se solidifican y es posible chocar contra ellos.</li><li>Impide que la Bruja pueda teletransportarse hasta las trampas.</li><li>Otorga un <b>300 %</b> de puntos de sangre por Malicia.</li><li>Se superpone a cualquier otro accesorio.</li>","name":"Mano con cicatrices","flavor":"\\"...\\". (El Carnicero)","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"Cadenas que se usaron para albergar a prisioneros y cadáveres en el sótano del pueblo caníbal. La esencia de vida atrapada en su interior despierta un enorme potencial en el poder de la Bruja.<br><li>Los supervivientes no recibirán ninguna señal de que las trampas fantasma han sido activadas.</li><li>La trampas no generan un fantasma de la Bruja.</li>","name":"Cadenas oxidadas","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"El frío corazón de la anciana del pueblo caníbal. La esencia de vida atrapada en su interior despierta un enorme potencial en el poder de la Bruja.<br><li>Reduce los latidos de corazón de la Bruja a <b>0</b> cuando algún superviviente activa una trampa fantasma.</li><li>Aumenta el radio de terror de los fantasmas de fango <b>16 metros</b>.</li>","name":"Corazón de la abuela","flavor":"\\"Tráeme otro pedazo de la chica\\". (La abuela)","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"La oreja del chico sordo del pueblo caníbal. Deformada por los golpes recibidos en la cabeza. La esencia de vida atrapada en su interior despierta un enorme potencial en el poder de la Bruja.<br><li>Los supervivientes que activen una trampa fantasma se quedan sordos durante <b>6 segundos</b>.</li>","name":"Oreja desfigurada","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"Un zapato de niño, perdido hace mucho tiempo en las aguas del pantano. La esencia de vida atrapada en su interior despierta un enorme potencial en el poder de la Bruja.<br><li>Los supervivientes que estén dentro del alcance de una trampa activada sufrirán el efecto de estado <b><i>Entorpecimiento</i></b>.</li><li>Aumenta <b>ligeramente</b> la velocidad de movimiento de la Bruja.</li><li>Impide que la Bruja pueda teletransportarse hasta las trampas.</li>","name":"Zapato empapado","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"Un pequeño trozo de algodón desgarrado del vestido que llevaba Lisa Sherwood el día de su desaparición. La esencia de vida atrapada en su interior despierta un enorme potencial en el poder de la Bruja.<br><li>La Bruja puede teletransportarse a cualquier trampa fantasma del escenario.</li><li>El teletransporte tiene un recarga de <b>15 segundos</b>.</li>","name":"Jirón verde","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"Un electrodo mohoso que aún conduce una corriente eléctrica débil.<br><li><b>Aumenta ligeramente</b> el alcance de <b>Terapia de choque</b>.</li>","name":"Electrodo mohoso","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"Un caballo blanco de ajedrez hecho de madera de arce. Este regalo de un anciano hace que el Doctor rememore recuerdos lejanos y le infunde una concentración devastadora.<br><li>Permite ver el área de efecto del <i>ataque especial</i> <b>Terapia de choque</b>.</li>","name":"Caballo de arce","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"Una terapia de electrochoque convencional, utilizada como parte de la rutina diaria de los pacientes en el Instituto Conmemorativo Léry. Puede causar confusión leve a los pacientes.<br><li><b>Reduce ligeramente</b> el tiempo de recarga de <b>Explosión estática</b>.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Orden</i>:<li>Los palés rotos pueden parecer haber sido reemplazados por <i>palés imaginarios</i>, que desaparecen al acercarse.</li><li>Un nuevo <i>palé imaginario</i> se genera cada <b>20 segundos</b> en la ubicación de un palé roto al azar.</li><li><b>El Doctor</b> ve las auras de los <i>palés imaginarios</i>.</li>","name":"Orden (clase I)","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"Una terapia de electrochoque que usa ondas profundas para calmar varias enfermedades mentales. Se basa en Chispa de Carter y puede causar ansiedad leve en el paciente.<br><li><b>Aumenta ligeramente</b> tu radio de terror mientras <b>Explosión estática</b> está lista.</li><li><b>Reduce ligeramente</b> tu radio de terror mientras <b>Explosión estática</b> se está recargando.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Calma</i>:<li><b>Locura II</b>: Hace que los supervivientes oigan <b>de manera intermitente</b> un <i>radio de terror imaginario</i> en la distancia.</li><li><b>Locura III</b>: Hace que los supervivientes oigan <b>de forma constante</b> un <i>radio de terror imaginario</i> en la distancia.</li>","name":"Calma (clase I)","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"Una cinta de casete del proyecto Despertar que básicamente contiene ruido blanco. Abre la mente del Doctor a métodos de tratamiento alternativos.<br><br>La <i>habilidad especial</i> <li><b>Terapia de choque</b> cambia de un cono a un círculo proyectado <b>8 metros</b> delante del <b>Doctor</b>, con un radio exterior de <b>4,2 metros</b> y un radio interior de <b>3 metros</b>.</li>","name":"Cinta desechada","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"Un equipo de electrodos estándar prácticamente nuevo para llevar a cabo tratamientos de electrochoque.<br><li><b>Aumenta moderadamente</b> el alcance de <b>Terapia de choque</b>.</li>","name":"Electrodo pulido","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"Una cinta de casete del proyecto Despertar que contiene una entrevista sin editar con una víctima. Abre la mente del Doctor a métodos de tratamiento alternativos.<br><li>La <i>habilidad especial</i> <b>Terapia de choque</b> cambia de un cono a un haz con <b>24 metros</b> de alcance y <b>2 metros</b> de diámetro.</li>","name":"Cinta de entrevista","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"Una terapia de electrochoque experimental desarrollada en la niebla. Usa una onda que conecta las mentes del paciente y el Doctor. Este procedimiento causa alucinaciones leves al paciente.<br><li>Revela las auras de los supervivientes durante <b>1 segundo</b> cuando aumenta su nivel de <b>Locura</b>.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Restricción</i>:<b>Aumenta moderadamente</b> la duración de las <i>manifestaciones imaginarias</i> del Doctor.</li><b>El Doctor</b> ve las auras de las <i>manifestaciones imaginarias</i> del Doctor.</li>","name":"Restricción (clase II)","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"Una terapia de electrochoque de alto estímulo, utilizada como parte de la rutina diaria de los pacientes en el Instituto Conmemorativo Léry. Puede causar confusión moderada a los pacientes.<br><li><b>Reduce moderadamente</b> el tiempo de recarga de <b>Explosión estática</b>.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Orden</i>:<li>Los palés rotos pueden parecer haber sido reemplazados por <i>palés imaginarios</i>, que desaparecen al acercarse.</li><li>Un nuevo <i>palé imaginario</i> se genera cada <b>20 segundos</b> en la ubicación de un palé roto al azar.</li><li><b>El Doctor</b> ve las auras de los <i>palés imaginarios</i>.</li><span class=\\"FlavorText\\">\\"Los efectos secundarios son muy poco frecuentes\\". (Instituto Conmemorativo Léry)</span>","name":"Orden (clase II)","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"Una terapia de electrochoque del proyecto Despertar, usada como medida disciplinaria. Utiliza una dosis fija a un voltaje elevado. Puede causar paranoia moderada al paciente.<br><li><b>Reduce ligeramente</b> el retardo de detonación de <b>Terapia de choque</b>.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Disciplina</i>:<li><b>Locura II</b>: Durante una persecución, los supervivientes perciben una <i>marca roja</i> y un <i>radio de terror</i> imaginarios como si tuvieran al <b>Doctor</b> justo detrás. El efecto perdura durante <b>6 segundos</b> tras el final de dicha persecución.</li><li><b>Locura III</b>: La <i>marca roja</i> y el <i>radio de terror</i> imaginarios están activos constantemente.</li><li><b>El Doctor</b> también ve la <i>marca roja imaginaria</i>.</li><span class=\\"FlavorText\\">\\"Reeducamos a nuestros pacientes con el mayor de los cuidados\\". (Instituto Conmemorativo Léry)</span>","name":"Disciplina (clase II)","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"Una arriesgada terapia de electrochoque que usa ondas profundas para calmar varias enfermedades mentales. Se basa en Chispa de Carter, y puede causar ansiedad moderada en el paciente.<br><li><b>Aumenta moderadamente</b> tu radio de terror mientras <b>Explosión estática</b> está lista.</li><li><b>Reduce moderadamente</b> tu radio de terror mientras <b>Explosión estática</b> se está recargando.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Calma</i>:<li><b>Locura II</b>: Hace que los supervivientes oigan <b>de manera intermitente</b> un <i>radio de terror imaginario</i> en la distancia.</li><li><b>Locura III</b>: Hace que los supervivientes oigan <b>de forma constante</b> un <i>radio de terror imaginario</i> en la distancia.</li><span class=\\"FlavorText\\">\\"La terapia de electrochoque es uno de los procedimientos médicos más seguros\\". (Instituto Conmemorativo Léry)</span>","name":"Calma (clase II)","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"Un electrodo experimental capaz de soportar una carga muy grande durante un largo periodo de tiempo.<br><li><b>Aumenta considerablemente</b> el alcance de <b>Terapia de choque</b>.</li>","name":"Electrodo de alto estímulo","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"Una terapia de electrochoque experimental desarrollada en la niebla. Usa una onda de alto estímulo para conectar las mentes del paciente y el Doctor. Este procedimiento causa alucinaciones graves al paciente.<br><li>Revela las auras de los supervivientes durante <b>2 segundos</b> cuando aumenta su nivel de <b>Locura</b>.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Restricción</i>:<li><b>Aumenta moderadamente</b> la duración de las <i>manifestaciones imaginarias</i> del Doctor.</li><li><b>El Doctor</b> ve las auras de las <i>manifestaciones imaginarias</i> del Doctor.</li>","name":"Restricción (clase III)","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"Una terapia de electrochoque del proyecto Despertar, usada como medida disciplinaria. Utiliza una dosis fija a un voltaje muy elevado. Puede causar paranoia grave al paciente.<br><li><b>Reduce moderadamente</b> el retardo de detonación de <b>Terapia de choque</b>.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Disciplina</i>:<li><b>Locura II</b>: Durante una persecución, los supervivientes perciben una <i>marca roja</i> y un <i>radio de terror</i> imaginarios como si tuvieran al <b>Doctor</b> justo detrás. El efecto perdura durante <b>6 segundos</b> tras el final de dicha persecución.</li><li><b>Locura III</b>: La <i>marca roja</i> y el <i>radio de terror</i> imaginarios están activos constantemente.</li><li><b>El Doctor</b> también ve la <i>marca roja imaginaria</i>.</li><span class=\\"FlavorText\\">\\"El respeto por nuestros pacientes es uno de nuestros principios básicos\\". (Instituto Conmemorativo Léry)</span>","name":"Disciplina (clase III)","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"Una terapia de electrochoque experimental desarrollada en la niebla, con anotaciones rudimentarias. Usa una onda de estímulo insoportable para conectar las mentes del paciente y el Doctor. Este procedimiento causa alucinaciones graves al paciente.<br><li>Revela las auras de los supervivientes durante <b>3 segundos</b> cuando aumenta su nivel de <b>Locura</b>.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Restricción</i>:<br><li><b>Aumenta moderadamente</b> la <i>duración de las manifestaciones imaginarias del Doctor</i>.</li><li><b>El Doctor</b> ve las auras de las <i>manifestaciones imaginarias del Doctor</i>.</li><span class=\\"FlavorText\\">\\"VEO SUS <u>DESAGRADABLES</u> ENFERMEDADES\\". (Notas anónimas)</span>","name":"Restricción (notas de Carter)","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"Una versión experimental de la terapia de electrochoque, con notas del propio doctor Herman Carter. El estímulo constante y prolongado deja a los pacientes en un estado de confusión grave.<br><li><b>Reduce considerablemente</b> el tiempo de recarga de <b>Explosión estática</b>.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Orden</i>:<li>Los palés rotos pueden parecer haber sido reemplazados por <i>palés imaginarios</i>, que desaparecen al acercarse.</li><li>Un nuevo <i>palé imaginario</i> se genera cada <b>20 segundos</b> en la ubicación de un palé roto al azar.</li><li><b>El Doctor</b> ve las auras de los <i>palés imaginarios</i>.</li><span class=\\"FlavorText\\">\\"El estímulo debe mantenerse activo a un nivel <u>convulsivo</u>\\". (H. Carter)</span>","name":"Orden (notas de Carter)","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"Una terapia de electrochoque del proyecto Despertar, con notas del propio doctor Herman Carter. Se usa como medida disciplinaria. Una dosis de voltaje intolerablemente alto deja al paciente en un estado severo de paranoia.<br><li><b>Reduce considerablemente</b> el retardo de detonación de <b>Terapia de choque</b>.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Disciplina</i>:<li><b>Locura II</b>: Durante una persecución, los supervivientes perciben una <i>marca roja</i> y un <i>radio de terror</i> imaginarios como si tuvieran al <b>Doctor</b> justo detrás. El efecto perdura durante <b>6 segundos</b> tras el final de dicha persecución.</li><li><b>Locura III</b>: La <i>marca roja</i> y el <i>radio de terror</i> imaginarios están activos constantemente.</li><li><b>El Doctor</b> también ve la <i>marca roja imaginaria</i>.</li><span class=\\"FlavorText\\">\\"Para evitar que nuestros sujetos más tenaces recaigan, usamos los niveles máximos al aplicar medidas disciplinarias\\". (H. Carter)</span>","name":"Disciplina (notas de Carter)","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"Una versión experimental de la terapia de electrochoque con notas del propio doctor Herman Carter. Usa ondas profundas para calmar varias enfermedades mentales. Se basa en Chispa de Carter, y puede causar ansiedad y miedo incontrolables en el paciente.<br><li><b>Aumenta considerablemente</b> tu radio de terror mientras <b>Explosión estática</b> está lista.</li><li><b>Reduce considerablemente</b> tu radio de terror mientras <b>Explosión estática</b> se está recargando.</li><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren el <i>síntoma Calma</i>:<li><b>Locura II</b>: Hace que los supervivientes oigan <b>de manera intermitente</b> un <i>radio de terror imaginario</i> en la distancia.</li><li><b>Locura III</b>: Hace que los supervivientes oigan <b>de forma constante</b> un <i>radio de terror imaginario</i> en la distancia.</li><span class=\\"FlavorText\\">\\"Las convulsiones de mayor calidad generan catatonia, lo que al menos hace que me sienta en <u>paz</u> mientras dura\\". (H. Carter)</span>","name":"Calma (notas de Carter)","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"Un rey de ajedrez de aspecto cristalino moldeado a partir de la propia niebla. El rastro del Ente que reverbera dentro puede destrozar hasta las mentes más poderosas.<br><br>Los supervivientes con el efecto de estado <b>Locura</b> sufren los siguientes <i>síntomas: Calma, Disciplina, Orden</i> y <i>Restricción</i>.<li>Hace que los supervivientes oigan <b>de manera intermitente</b> un <i>radio de terror imaginario</i> en la distancia.</li><li>Durante una persecución, los supervivientes perciben una <i>marca roja</i> y un <i>radio de terror</i> imaginarios como si tuvieran al <b>Doctor</b> justo detrás. El efecto perdura durante <b>6 segundos</b> tras el final de dicha persecución con <b>Locura II</b> y se mantiene activo en todo momento con <b>Locura III</b>.</li><li>Los palés rotos pueden parecer haber sido reemplazados por <i>palés imaginarios</i>, que desaparecen al acercarse. Un nuevo <i>palé imaginario</i> se genera cada <b>20 segundos</b> en la ubicación de un palé roto al azar.</li><li><b>Aumenta moderadamente</b> la duración de las <i>manifestaciones imaginarias</i> del Doctor.</li><li><b>El Doctor</b> ve las <i>marcas rojas imaginarias</i>, al igual que las auras de las <i>manifestaciones imaginarias del Doctor y los palés imaginarios</i>.</li>","name":"Rey iridiscente","flavor":"\\"Observar el cristal iridiscente es zambullirse en la locura\\".","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"Una reina de ajedrez de aspecto cristalino moldeada a partir de la propia niebla. No se puede tocar sin recibir una descarga considerable de electricidad.<br><li>Todos los supervivientes golpeados por las <i>habilidades especiales</i> <b>Terapia de choque</b> o <b>Explosión estática</b> adquieren una <b>Carga estática</b> duradera. La <b>Carga estática</b> afecta al superviviente hasta que <i>se descarga</i>.</li><li>Si se golpea a varios supervivientes que estén a menos de <b>4 metros</b> de distancia entre sí con la misma <i>habilidad especial</i> de <b>Terapia de choque</b> o <b>Explosión estática</b>, no adquieren ninguna <b>Carga Estática</b>.</li><li>Cuando un superviviente se acerca a menos de <b>4 metros</b> de otro que esté afectado por una <b>Carga estática</b>, recibe una descarga que le provoca los mismos efectos que produce la <i>habilidad especial</i> <b>Terapia de choque</b>, pero la <b>Carga estática</b> <i>se descarga</i> de inmediato.</li>","name":"Reina iridiscente","flavor":"\\"Una vez establecida una metodología eficaz, podemos centrarnos en sus medios de suministro más eficientes\\". (H. Carter)","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"Esta piedra es demasiado basta para servir de nada. Las hojas machacadas con ella provocan terribles heridas abiertas.<br><li>Los gruñidos de dolor de los objetivos golpeados aumentan un <b>50 %</b> hasta que se curan por completo.</li>","name":"Piedra basta","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"Un trozo de tela básico para tapar ampollas y limpiar el pus.<br><li><b>+10 %</b> de velocidad de trayectoria del destral.</li>","name":"Trapo amarillo","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"Vendas de primeros auxilios firmemente enrolladas y amarradas al mango de los destrales.<br><li><b>Reduce ligeramente</b> el tiempo de recarga entre lanzamientos de destrales.</li>","name":"Mango vendado","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"Una toxina que se aplica a la hoja de los destrales. La toxina de las setas amanita nubla la mente.<br><li>El objetivo afectado sufre el efecto de estado <b><i>Ceguera</i></b> durante <b>60 segundos</b>.</li><li>No acumulable.</li>","name":"Toxina de amanita","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"Una cabeza de destral pesada, fabricada para asestar un golpe contundente a su blanco. Para llevarlo, hace falta mucha fuerza.<br><li>El objetivo golpeado sufre el efecto de estado <b>Incapacitación</b> durante <b>10 segundos</b>.</li>","name":"Cabeza lastrada","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"Una insignia de cobre tan deformada que resulta casi irreconocible, pero pulida hasta dotarla de un lustre intenso. Botín de una presa particularmente difícil.<br><li><b>Aumenta ligeramente</b> la velocidad de movimiento mientras te preparas para lanzar.</li><li>No acumulable.</li>","name":"Insignia reluciente","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"Un mango pulido que permite manejar la letal herramienta de forma rápida y disimulada.<br><li><b>Reduce moderadamente</b> el tiempo de recarga entre lanzamientos de destrales.</li>","name":"Mango de roble","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"Una trenza decorativa circular hecha de hierba del maná. Este recuerdo de una niña perdida provoca un arrebato de ira y de determinación a la Cazadora.<br><li><b>Reduce moderadamente</b> el tiempo de preparación de los destrales.</li>","name":"Trenza de hierba del maná","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"Esta tira de cuero atada en forma de presilla se puede acoplar a un cinturón para poder transportar herramientas con facilidad.<br><li>Empiezas con <b>1 destral adicional</b>.</li><li>Aumenta el número máximo de destrales que puedes llevar en <b>1</b>.</li>","name":"Presilla de cuero","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"Pétalos secos de pústula que alivian los síntomas de fatiga y esfuerzo excesivo cuando se preparan como infusión.<br><li><b>+20 %</b> de velocidad de trayectoria del destral.</li>","name":"Raíz de rosa","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"Guantes de cuero curtido que protegen las manos y mejoran el agarre.<br><li><b>Reducen moderadamente</b> el tiempo de recarga de los destrales en una taquilla.</li>","name":"Guantes de piel de ciervo","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"Un preparado tóxico que se aplica a la hoja de los destrales. Se compone principalmente de veneno de víbora, que le otorga propiedades extenuantes.<br><li>El objetivo golpeado sufre el efecto de estado <b>Agotamiento</b> durante <b>5 segundos</b>.</li>","name":"Preparado venenoso","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"Estos cabezales de destral están recubiertos de una costra de óxido que impide que las heridas se curen fácilmente.<br><li>El objetivo golpeado sufre el efecto de estado <b><i>Laceración</i>.</b></li>","name":"Cabezal oxidado","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"Un pañuelo estampado de flores limpio y colorido. Este recuerdo de una niña perdida provoca un arrebato de ira y de determinación a la Cazadora.<br><li><b>Reduce considerablemente</b> el tiempo de preparación de los destrales.</li>","name":"Babushka de flores","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"Un resistente cinturón de herramientas que perteneció a un soldado caído. Sus numerosas presillas y bolsillos sirven para transportar herramientas.<br><li>Empiezas con <b>2 destrales adicionales</b>.</li><li>Aumenta el número máximo de destrales que puedes llevar en <b>2</b>.</li>","name":"Cinturón de infantería","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"Un preparado etéreo que brilla con una luz tenue e inquietante.<br><li>Ves durante <b>5 segundos</b> el aura de las víctimas golpeadas.</li>","name":"Preparado brillante","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"El cabezal de los destrales está manchado con una sustancia repugnante que afecta a todo aquel que lo toca.<br><li>El objetivo afectado sufre los efectos de estado <b><i>Laceración</i></b> y <b><i>Hemorragia</i></b> hasta que se cure por completo.</li><li>No acumulable.</li>","name":"Cabezal mugroso","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"Una tosca y diminuta estatuilla de un zorro, recordatorio de que el sigilo y la astucia son tan letales como la fuerza bruta.<br><li>Aplica el efecto de estado <i><b>Indetectable</b></i> durante <b>15 segundos</b> tras recargar.</li>","name":"Zorro de madera","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"Un destral de aspecto cristalino moldeado a partir de la mismísima niebla. La hoja está templada y reverbera con el poder del Ente.<br><li>Los golpes de destral hacen que los supervivientes ilesos caigan en estado agonizante al instante.</li><li>El número máximo de destrales que puedes llevar cambia a <b>1</b>.</li>","name":"Cabezal iridiscente","flavor":"\\"El vidrio iridiscente atraviesa la carne y el alma\\".","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"Trozo de tela de un soldado muerto que protege y sujeta el tobillo y la pantorrilla.<br><li>La Cazadora se mueve a <b>4,6 m/s</b> cuando no tenga ningún destral.</li>","name":"Polaina de soldado","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"Un aceite rancio usado para lubricar deficientemente.<br><br><li><b>Reduce ligeramente</b> el tiempo de recarga de la motosierra al golpear un superviviente.</li>","name":"Aceite Vegetal","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"Una bujía limpia perfecta para la motosierra.<br><br><li><b>Aumenta ligeramente</b> la velocidad a la que se restablecen las cargas.</li>","name":"Bujía","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"Una lima para afilar la cadena de una motosierra.<br><li><b>Reduce ligeramente</b> la duración de la rabieta.</li>","name":"Lima para Motosierra","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"Un dispositivo mecánico que limita la cantidad de combustible que pueden absorber los motores pequeños para así garantizar una velocidad más segura y constante.<br><br><li>La motosierra no provoca automáticamente el estado agonizante.</li><li>Obtienes un <b>100 %</b> adicional de puntos de sangre por golpes con la motosierra.</li>","name":"Limitador de velocidad","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Bombea más gasolina al sistema de ignición para garantizar un arranque rápido y potente.<br><br><li><b>Aumenta moderadamente</b> la velocidad a la que se restablecen las cargas.</li>","name":"Bombilla de Combustible","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"Una robusta espada de hierro de recambio para cadenas largas.<br><br><li><b>Aumenta ligeramente</b> la revoluciones disponibles antes de activar una rabieta.</li>","name":"Espada Larga","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"El cuerpo de la motosierra está lleno de tajos causados por una hoja ardiente. Los recuerdos de los violentos correctivos recibidos causan a su portador un miedo pavoroso al fracaso.<br><br><li><b>Aumenta ligeramente</b> la velocidad de movimiento de la motosierra.</li><li><b>Aumenta ligeramente</b> el tiempo de carga.</li>","name":"Tajos de cuchillo","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"Un improvisado sistema de escape de humos hecho con tuberías negras de gas.<br><br><li><b>Reduce moderadamente</b> la duración de la rabieta.</li>","name":"Silenciador casero","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"Un gran bol de chile humeante que tonifica y revitaliza a quien lo toma.<br><br><li><b>Aumenta ligeramente</b> la duración del esprint cuando se consume un distintivo.</li><li><b>Aumenta ligeramente</b> la maniobrabilidad adicional del barrido con la motosierra.</li><br>","name":"Chile","flavor":"\\"¡Hoy cenamos barbacoa!\\". (Drayton Sawyer)","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"Líquido espeso y amarillento elaborado por los Sawyer. Sirve como lubricante multiusos doméstico.<br><br><li><b>Aumenta moderadamente</b> las revoluciones disponibles antes de activar una rabieta.</li>","name":"La grasa","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"El cuerpo de la motosierra está cubierto de dentelladas, castigo de la bestia oscura que vive en la niebla. Los recuerdos de los violentos correctivos recibidos causan a su portador un miedo pavoroso al fracaso.<br><br><li><b>Aumenta moderadamente</b> la velocidad de movimiento de la motosierra.</li><li><b>Aumenta ligeramente</b> el tiempo de carga.</li>","name":"Las marcas de la bestia","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"Una cadena con dientes especialmente afilados y robustos que deja a la víctima tullida aun después de curarse.<br><li>Los supervivientes golpeados por la motosierra sufren el efecto de estado <b>Laceración</b>.","name":"Cadena horripilante","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"Un aceite diseñado especialmente para motosierras. Un aditivo especial evita las emisiones.<br><br><li>Si derribas a un superviviente con la motosierra y no hay más supervivientes dentro de tu radio de terror, su aura permanecerá oculta para el resto durante <b>20 segundos</b>.</li>","name":"Lubricante Común","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"Esta cadena está manchada de una sustancia repugnante que debilita a quien la toca.<br><br><li>Los golpes de la motosierra hacen que los supervivientes suelten los objetos que lleven encima.</li>","name":"Cadenas mugrosas","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"Una herramienta que aumenta el ángulo de profundidad, lo que hace que la cadena corte mejor \\"la madera\\".<br><li><b>Aumenta</b> el número de cargas.</li><li><b>Aumenta ligeramente</b> el tiempo de carga.</li><li><b>Reduce ligeramente</b> la velocidad máxima del barrido con la motosierra.</li>","name":"Medidor de profundidad","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"Un chasis de motosierra ligero y duradero con una espada más corta. Hace que la motosierra sea más fácil de manejar.<br><br><li>Al revolucionar, ves las auras de los supervivientes que estén a un máximo de <b>8 metros.</b></li>","name":"Bastidor ligero","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"Esta cadena está recubierta de una costra de óxido que impide que las heridas se curen fácilmente.<br><br><li>Los supervivientes heridos por la motosierra sufren el efecto de estado <b><i>Desesperanza</i></b> durante <b>90 segundos</b>.</li><li>No acumulable.</li>","name":"Cadena oxidada","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"Un gran bol de chile picante famoso por su carne de calidad.<br><br><li><b>Aumenta moderadamente</b> la duración del esprint al consumir un distintivo.</li><li><b>Aumenta moderadamente</b> el barrido adicional con la motosierra.</li><br>","name":"Chile de primera","flavor":"\\"El secreto está en la carne\\". (Drayton Sawyer)","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"Un filete delgadito de carne joven y suave. Las venas brillan con un resplandor luminiscente, como si aún quedara vida en ellas.<br><br><li>Las cargas de la motosierra se restablecen al golpear a un superviviente con ella.</li><li>Limita la duración máxima de la rabieta a 8 segundos.</li><br>","name":"Carne iridiscente","flavor":"\\"Hay momentos en los que no podemos creer que lo que está sucediendo sea real. Pellízcate y quizá descubras que lo es\\". (Pam Jones)","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"Una guía con dibujos toscos sobre cómo ajustar y poner a punto el carburador de una motosierra.<br><li>Consume automáticamente todas las cargas al activar un barrido con motosierra.</li><li><b>Aumenta ligeramente</b> la duración del barrido con motosierra.</li><li><b>Reduce ligeramente</b> la velocidad máxima del barrido con la motosierra.</li>","name":"Guía del carburador","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"Una camiseta de niño a rayas naranjas y amarillas que tiene cosida una etiqueta con el nombre \\"Jesse\\".<br>Mientras los supervivientes están en el <b>mundo de los sueños</b>:<li><b>Aumenta ligeramente</b> las penalizaciones en <i>curaciones</i> y <i>reparaciones</i>.</li>","name":"Camiseta de lana","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"Un bloque de madera blanco y azul en el que aparecen dos corderos lanudos pastando y la letra \\"S\\".<li>Cuando un superviviente interacciona con una <b>trampa de los sueños</b> o un <b>palé de los sueños</b>, se le aplica el <b>efecto de estado Ceguera</b> durante 30 segundos.</li>","name":"Bloque de ovejas","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"Un dibujo anónimo, sin duda garabateado por un niño pequeño.<li>Obtienes <b>200 puntos de sangre adicionales</b> en <b>Malicia</b> cada vez que un superviviente active una <b>trampa de los sueños</b>.</li><li><b>Aumenta considerablemente</b> la reducción de velocidad que aplican las <b>trampas de los sueños</b> a los supervivientes.</li>","name":"Dibujo de niño","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"Un rastrillo manual pequeño, herramienta esencial para cualquier jardinero que se precie.<br>Sustituye las <b>trampas de los sueños</b> por <b>palés de los sueños</b>.<li>7 <b>distintivos de sueño</b>.</li>","name":"Rastrillo de jardín","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"Una herramienta improvisada para podar arbustos.<li>Sustituye las <b>trampas de los sueños</b> por <b>palés de los sueños</b>.</li><li>7 <b>distintivos de sueño</b>.</li><li>Las auras de los supervivientes se muestran a <i>la Pesadilla</i> durante <b>4 segundos</b> cuando interaccionan con <b>palés de los sueños</b>.</li>","name":"Prototipo de garras","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"Una robusta cuerda para exteriores, útil para atar cualquier cosa.<br>Mientras los supervivientes están en el <b>mundo de los sueños</b>:<li>Los sonidos de las reparaciones de generadores se pueden escuchar a <b>8 metros de distancia</b>.</li>","name":"Cuerda para exteriores","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"Un boceto tosco e intenso a carboncillo firmado por Nancy H.<li><b>Aumenta ligeramente</b> la velocidad a la que se recupera el poder <b>Proyección de los sueños</b> por cada superviviente que esté en el <b>mundo de los sueños</b>.</li>","name":"Boceto de Nancy","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"Un vestido de niña verde con un lazo blanco de seda.<br>Mientras los supervivientes están en el <b>mundo de los sueños</b>:<li><b>Aumenta ligeramente</b> las penalizaciones en <i>curaciones</i> y <i>reparaciones</i>.</li><li>Las auras de los supervivientes se muestran a <i>la Pesadilla</i> durante <b>3 segundos</b> cuando fallan una prueba de habilidad de <i>curación</i> o <i>reparación</i>.</li>","name":"Vestido verde","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"Un bloque de madera blanco y morado en el que aparece un gato dormido y la letra \\"C\\".<li>Cuando un superviviente interacciona con una <b>trampa de los sueños</b> o un <b>palé de los sueños</b>, se le aplica el <b>efecto de estado Hemorragia</b> durante 60 segundos.</li>","name":"Bloque de gato","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"Un bloque de madera blanco y rojo en el que aparece un unicornio y la letra \\"U\\".<li>Cuando un superviviente interacciona con una <b>trampa de los sueños</b> o un <b>palé de los sueños</b>, se le aplica el <b>efecto de estado Ceguera</b> durante 60 segundos.</li>","name":"Bloque de unicornio","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"Cadenas oxidadas, pero fuertes, que sujetaban el asiento de un columpio.<br>Mientras los supervivientes están en el <b>mundo de los sueños</b>:<li>Los sonidos de sus pisadas son un <b>50 % más ruidosos</b>.</li>","name":"Cadenas de columpio","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"Un dibujo de alguien, realizado por Nancy Holbrook en Badham, y conservado como un valioso recuerdo.<li><b>Aumenta moderadamente</b> la velocidad de recuperación del poder <b>Proyección de los sueños</b> por cada superviviente que esté en el <b>mundo de los sueños</b>.</li>","name":"Obra maestra de Nancy","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"Una larga comba doble, manchada por años de uso.<br>Mientras los supervivientes están en el <b>mundo de los sueños</b>:<li>Sus gruñidos de dolor son un <b>50 % más ruidosos</b>.</li>","name":"Comba","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"Un vestido de niña azul claro con lazo blanco cuya pechera presenta múltiples cortes.<br>Mientras los supervivientes están en el <b>mundo de los sueños</b>:<li><b>Aumenta ligeramente</b> las penalizaciones en <i>curaciones</i> y <i>reparaciones</i>.</li><li>Las auras de los supervivientes se muestran a <i>la Pesadilla</i> durante <b>4 segundos</b> cuando fallan una prueba de habilidad de <i>curación</i> o <i>reparación</i>.</li>","name":"Vestido azul","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"Un frasco vacío de un medicamento llamado Zoneral.<li>Los supervivientes verán a la <i>Pesadilla</i> de manera intermitente a una distancia reducida de <b>de 12 a 24 metros</b><b></b>.</li><li><i>La Pesadilla</i> es invisible para los supervivientes a más de <b>24 metros</b> de distancia.</li><li><i>La Pesadilla</i> no puede despertar a nadie mientras carga con un superviviente.</li>","name":"Frasco de pastillas","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"Una lata que contiene una sustancia muy volátil e inflamable.<li>Sustituye las <b>trampas de los sueños</b> por <b>palés de los sueños</b>.</li><li>7 <b>distintivos de sueño</b>.</li><li>Las auras de los supervivientes se muestran a <i>la Pesadilla</i> durante <b>6 segundos</b> cuando interaccionan con <b>palés de los sueños</b>.</li>","name":"Disolvente de pintura","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"Una enorme fotografía tomada en la guardería Badham, en la que aparece sonriente la clase del 94-95.<li>Ya no se puede cancelar la canalización de <b>Proyección de los sueños</b>.</li><li>Todos los generadores escupirán sangre mientras <b>la Pesadilla</b> canalice <b>Proyección de los sueños</b>.</li><li>La proyección de <i>la Pesadilla</i> no aparecerá mientras esté usando <b>Proyección de los sueños</b>.</li>","name":"Fotografía de clase","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"Un bloque de madera arañado y quemado en el que solo se reconoce la letra \\"Z\\".<li>Cuando un superviviente interacciona con una <b>trampa de los sueños</b> o un <b>palé de los sueños</b>, se le aplica el efecto de estado <b>Hemorragia</b> durante <b>60 segundos</b>.</li><li>Si el superviviente está ileso, sangrará mientras dure el efecto de estado <b>Hemorragia</b>.</li>","name":"Bloque \\"Z\\"","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"Una brocha gruesa empapada en pintura carmesí.<li>Todos los supervivientes empiezan la partida en el <b>mundo de los sueños</b>.</li><li>Las pruebas de habilidad fallidas no despiertan a los supervivientes en el <b>mundo de los sueños</b>.</li>","name":"Brocha con pintura roja","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"Una caja de cartón negra llena de fotografías.<br>Mientras los supervivientes están en el <b>mundo de los sueños</b>:<li>Las puertas de salida cerradas recientemente se bloquearán durante <b>15 segundos</b></li>.","name":"Caja negra","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"Una modificación para la caja de Puzle: la lubricación de las piezas complica enormemente buscar en estas cajas.<br><li><b>Aumenta ligeramente</b> las probabilidades de que se activen pruebas de habilidad al interaccionar con una caja de Puzle.</li>","name":"Aceite de taller","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"El símbolo de una vida echada a perder. El recuerdo de su pasado refuerza su determinación.<br><li><b>Reduce ligeramente</b> el tiempo de recarga tras un ataque de emboscada fallido.</li>","name":"Jeringuilla rota","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"El expediente médico de un hombre con cáncer. Provoca pavor a quien lo lee y lo lleva a cometer imprudencias.<br><li><b>Reduce ligeramente</b> el tiempo de carga de los ataques de emboscada.</li>","name":"Expediente médico de John","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"Correas de cuero que ajustan la ropa al cuerpo para facilitar los movimientos.<br><li><b>Reduce ligeramente</b> el tiempo que tardas en agacharte.</li>","name":"Correas de combate","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"Una grabación de Puzle en la que explica las reglas del juego a Amanda. El recuerdo de cómo era antes refuerza su determinación.<br><li><b>Reduce ligeramente</b> el tiempo de carga de los ataques de emboscada.</li><li><b>Reduce ligeramente</b> el tiempo de recarga tras un ataque de emboscada fallido.</li>","name":"Cinta de vídeo","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"Una modificación para la trampa para osos invertida: las afiladas cuchillas unidas al interior del mecanismo infligen cortes a la víctima cada vez que se mueve.<br><li>Los supervivientes atrapados en una trampa para osos invertida sufren el efecto de estado <b><i>Hemorragia</i></b>.</li>","name":"Cuchillas multiuso","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"Una modificación para la caja de Puzle: el añadido de alambre de espinas muy afilado hace que buscar resulte extremadamente difícil y potencialmente doloroso.<br><li><b>Aumenta moderadamente</b> las probabilidades de que se active una prueba de habilidad al interaccionar con una caja de Puzle.</li>","name":"Alambre de espinas","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"Una caja cerrada de madera, revestida con un material sedoso y ofrecida como parte de una última voluntad.<br><li><b>Aumenta</b> las trampas para osos invertidas disponibles en <b>1</b>.<br>","name":"Última voluntad","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"Una modificación para la trampa para osos invertida: la pesada máscara facial de tela, equipada con un sedante, dificulta la respiración del objetivo y dificulta su concentración.<br><li>Los supervivientes atrapados en una trampa para osos invertida sufren el efecto de estado <i><b>Ceguera</b></i>.</li><li>No afecta a la iluminación de las cajas de Puzle.</li>","name":"Máscara facial","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"Una modificación para la trampa para osos invertida: un veneno que, sin ser letal, debilita el cuerpo y hace que resulte prácticamente imposible recuperarse completamente tras un esfuerzo.<br><li>Los supervivientes atrapados en una trampa para osos invertida sufren el efecto de estado <i><b>Agotamiento</b></i>.</li>","name":"Toxina de liberación lenta","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"Una modificación para la trampa para osos invertida: pinchos en la boca, recubiertos de una costra de óxido que impide que las heridas se curen fácilmente.<br><li>Los supervivientes heridos atrapados en una trampa para osos invertida sufren el efecto de estado <i><b>Laceración</b></i>.</li>","name":"Accesorios oxidados","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"El boceto detallado de una trampa perturbadora, aunque brillante.<br><li><b>Aumenta</b> las cajas de Puzle disponibles en <b>1</b>.</li>","name":"Boceto de Puzle","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"Una modificación para la caja de Puzle: las cuchillas impiden que el superviviente realice movimientos bruscos sin cortarse las muñecas.<br><li><b>Aumenta tremendamente</b> la penalización por pruebas de habilidad fallidas en cajas de Puzle.</li>","name":"Cuchillas entrecruzadas","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"Unas cuantas piezas mecánicas que te permiten crear cajas de Puzle complejas y trampas para osos invertidas más fáciles de instalar.<br><li><b>Aumenta ligeramente</b> el tiempo que tarda un superviviente en buscar en una caja de Puzle.</li><li><b>Reduce ligeramente</b> el tiempo que tardas en colocar la trampa para osos invertida.</li>","name":"Bolsa de engranajes","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"Un temporizador adulterado. Un muelle instalado en el mecanismo hace que los engranajes giren a mayor velocidad.<br><li><b>Reduce moderadamente</b> el temporizador mortal de la trampa para osos invertida.</li>","name":"Temporizador manipulado","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"El boceto y anotaciones de una trampa perturbadora —y brillante— diseñada por Puzle.<br><li><b>Aumenta</b> las cajas de Puzle disponibles en <b>1</b>.</li><li><b>Aumenta moderadamente</b> el temporizador mortal de la trampa para osos invertida.</li>","name":"Plano con anotaciones de Puzle","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"Esta colección de piezas mecánicas te permite crear cajas de Puzle extremadamente complejas y trampas para osos invertidas más fáciles de instalar.<br><li><b>Aumenta considerablemente</b> el tiempo que tarda un superviviente en buscar en una caja de Puzle.</li><li><b>Reduce moderadamente</b> el tiempo que tardas en colocarle la trampa para osos invertida a un superviviente.</li>","name":"Caja de engranajes","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"Una caja de metal que contiene un cuchillo y varios suministros médicos, como vendas y apósitos. Los cortes profundos reducen el estrés y agudizan los sentidos.<br><li><b>Impide</b> que la Cerda pueda ver el aura de las cajas de Puzle.</li><li><b>Recibes un aviso</b> cuando un superviviente elimina una trampa para osos invertida.</li><li>Podrás ver el aura de los supervivientes que eliminen una trampa para osos invertida durante <b>6 segundos</b>.</li>","name":"Secreto de Amanda","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"Los juegos no tienen por qué tener todos las mismas reglas.<br><li><b>Impide </b> que los supervivientes puedan ver las cajas de Puzle iluminadas hasta que se activa su trampa.</li>","name":"Conjunto de reglas n.º 2","flavor":"\\"Escucha con atención las reglas\\". (Puzle)","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"Una carta de extorsión dirigida a Amanda. Provoca un arrebato de ira y de determinación a quien la lee.<br><li>Mientras estás de cuclillas, puedes ver el contorno de los supervivientes en un radio de 12 metros.</li><li><b>Reduce</b> las trampas para osos invertidas disponibles en <b>3</b>.</li><li><b>Reduce</b> las cajas de Puzle disponibles en <b>2</b>.</li>","name":"Carta de Amanda","flavor":"\\"Amanda, estabas con Cecil la noche que Jill perdió a Gideon. Vosotros matasteis a su hijo. Tú lo sabes y yo también\\". (Carta de Amanda)","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"Unas plantillas mohosas que brindan mucha comodidad a los pies cansados.<br><li>Aumenta <b>moderadamente</b> la velocidad de movimiento mientras recargas botellas.</li>","name":"Plantillas nauseabundas","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"Una pluma muy suave de color naranja intenso.<br><li>Reduce <b>ligeramente</b> el tiempo de recarga entre lanzamientos de botellas.</li>","name":"Pluma de petirrojo","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"Parte del atuendo habitual del Payaso. Los dedos cortados aportan mayor facilidad de movimientos.\\n<li>Cambian el ángulo de lanzamiento de botellas.</li>\\n","name":"Guantes sin dedos","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"¡Conviértete en el alma de la fiesta!<br><br><li><b>Frascos de Fiesta</b> emiten confeti cuando se rompen, además de su efecto habitual de gas.</li><li> Golpear a un Superviviente directamente con un <b>Frasco de Fiesta</b> interrumpe acciones, y otorga <b>100 puntos de sangre</b>.</li>","name":"Frasco de fiesta","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"Un compuesto químico volátil que irrita el tracto respiratorio, pero incrementa la absorción del Antídoto para el Último Acto.<br><li>Aumenta <b>moderadamente</b> la duración del efecto Tonificación.</li>","name":"Tapón de corcho grueso","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"Una botella vacía, pringosa debido a una combinación de azúcar seco y sangre.<br><li>Empiezas con <b>1 botella adicional</b>. </li><li>Aumenta el límite de botellas que puedes llevar en <b>1</b>. </li>","name":"Botella de refresco pringosa","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"Una pluma negra muy suave con un brillo esmeralda.<br><li>Reduce <b>moderadamente</b> el tiempo de recarga entre lanzamientos de botellas. </li>","name":"Pluma de estornino","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"Un compuesto químico volátil que irrita el tracto respiratorio, pero incrementa la absorción del Antídoto para el Último Acto.<br><li>Aumenta <b>moderadamente</b> la duración del efecto Tonificación.</li>","name":"Jarra de disolvente","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"Un líquido combustible transparente que nubla la mente cuando se inhala.<br><li>El objetivo intoxicado sufre el efecto de estado <b>Ceguera</b> durante <b>30 segundos</b>.</li>","name":"Lata de queroseno","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"Un clásico eterno. No volverás a ver las cosas igual.<br><li>Vuelve las nubes de El Último Acto de color amarillo.</li><li>Vuelve las nubes del Antídoto para el Último Acto de color morado.</li>","name":"Cinta de vídeo porno","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"Un líquido viscoso, inodoro y muy corrosivo.<br><li>El objetivo intoxicado sufre el efecto de estado <b>Laceración</b>.</li>","name":"Ampolla de ácido sulfúrico","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"Un potente químico que causa irritación, quemaduras y daño pulmonar.<br><li>El objetivo intoxicado sufre <b>moderadamente</b> una penalización adicional por <b>Entorpecimiento</b>.</li>","name":"Frasco de lejía","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"Un compuesto químico acre a base de amonia. Olerlo brevemente es suficiente para sacudir hasta a las mentes más lentas. Amplía <b>moderadamente</b> el área de efecto del Antídoto para el Último Acto.","name":"Espíritu de Hartshorn","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"Un compuesto orgánico de olor dulzón con fuertes propiedades anestésicas.<br><li>Amplía <b>moderadamente</b> el área de efecto del gas El último acto.</li>","name":"Botella de cloroformo","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"Un poco para la cara y otro poco para el antídoto. El compuesto desconocido intensifica sus efectos.<br><li>Aumenta <b>considerablemente</b> la duración del efecto Tonificación.</li>","name":"Kit de maquillaje estridente","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"Junto a un dolor de cabeza de mil demonios, lo único que queda tras una buena juerga en plan tacaño.<br><li>Empiezas con <b>2 botellas adicionales</b>. </li><li>Aumenta el máximo de botellas que puedes llevar en <b>2</b>. </li>","name":"Botella de ginebra barata","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"Un compuesto orgánico muy volátil. Su concentración resulta tóxica.<br><li>Aumenta <b>considerablemente</b> la duración del efecto Intoxicación.</li>","name":"Éter de 15 % del vol.","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"Una macabra colección de dedos incompleta. Estimula la capacidad de elaboración química del Payaso.<br><li>Cuando a un superviviente o asesino se le aplica el efecto Tonificación, ve las auras del resto de supervivientes y asesinos en un radio de 16 metros.</li>","name":"Caja de puros","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"El valioso dedo corazón de un corpulento hombre tatuado. Sabe un poco a aceite de maquinaria.<br><li>Se te revelan las auras de los supervivientes intoxicados o tonificados durante <b>6 segundos</b>.</li>","name":"Dedo corazón de tatuado","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"El valioso meñique de un pelirrojo. Ligeramente perfumado. Sabe a flores secas y a barniz.<br><li>Los supervivientes golpeados directamente con una botella de El Último Acto sufren el efecto de estado <b>Vulnerabilidad</b> mientras dure la intoxicación.</li>","name":"Meñique de pelirrojo","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"Un par de sandalias planas muy cómodas, fáciles de poner y de quitar.<li>Aumenta ligeramente la velocidad de movimiento de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Zori","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"Un talismán que otorga felicidad y entusiasmo.<li>Aumenta ligeramente la duración de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Amuleto de shiawase","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"Uno de los mil orizuru para que se cumpla tu deseo.<li>Aumenta ligeramente la velocidad de recuperación de poder de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Grulla de origami","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"Un fino peine de bambú para desenredar suavemente el pelo enmarañado.<li>Aumenta ligeramente la velocidad a la que se carga la activación de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Peine de bambú excepcional","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"Una cinta de seda para controlar el cabello rebelde.<li>Aumenta moderadamente la velocidad a la que se carga la activación de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Cinta blanca","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"Un reloj de pulsera con la esfera rota. Tiene escrito en la correa el nombre \\"Rin\\".<li>Aumenta moderadamente la velocidad de recuperación de poder de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Reloj roto de Rin","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"Una gorra deportiva, manchada de barro, con el logotipo de un instituto. Tiene cosida una etiqueta que pone \\"Rin\\".<li>Aumenta moderadamente la velocidad de movimiento de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Gorra deportiva embarrada","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"Un talismán para que la suerte esté de tu lado.<li>Aumenta moderadamente la duración de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Talismán de kaiun","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"Un bonsái de hojas verde azuladas. En el pasado, fue el símbolo de la familia Yamaoka.<li>Aumenta ligeramente la frecuencia del cambio de plano pasivo.</li><li>Acumulable.</li>","name":"Bonsái de enebro","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"Una flauta travesera oxidada que emite un sonido sobrecogedor.<li>Aumenta considerablemente la velocidad de recuperación de poder de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Flauta oxidada","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"Talismán de katsumori","name":"Talismán de katsumori","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"El guardamano de una espada ancestral, fabricado para la familia Yamaoka.<li>Aumenta ligeramente la duración de la reaparición de Fantasma de Yamaoka.</li><li>Aumenta ligeramente la velocidad de movimiento al reaparecer de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Tsuba de catana","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"Un par de prácticos zapatos para interiores.<li>Aumentan considerablemente la velocidad de movimiento de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Uwabaki sucios","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"Un prendedor para el pelo, manchado de sangre reseca.<li>Aumenta considerablemente la velocidad a la que se carga la activación de Fantasma de Yamaoka.</li><li>Acumulable.</li>","name":"Prendedor ensangrentado","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"Un poderoso talismán que te protege contra cualquier circunstancia sospechosa que pueda suponerte una traba.<li><b>Aumenta tremendamente</b> la duración de Fantasma de Yamaoka.</li><li><b>Reduce ligeramente</b> la velocidad de movimiento de Fantasma de Yamaoka.</li>","name":"Amuleto de yakuyoke","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"La vaina de una hoja ancestral, fabricada para la familia Yamaoka.<li>Aumenta moderadamente la duración de la reaparición de Fantasma de Yamaoka.</li><li>Aumenta moderadamente la velocidad de movimiento al reaparecer de Fantasma de Yamaoka.</li>","name":"Saya de wakizashi","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"Una poderosa pulsera que tiene inscrito un mantra sagrado.<li>Todos los supervivientes que se encuentren fuera del radio de terror oyen la emisión de sonido del cambio de plano.</li>","name":"Pulsera de rosario","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"Una flor de cerezo seca. En el pasado simbolizaba la mortalidad.<li>Aumenta ligeramente la duración del cambio de plano pasivo.</li><li>Aumenta ligeramente la frecuencia del cambio de plano pasivo.</li>","name":"Flor de cerezo seca","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"Un anillo de plata con la frase \\"Para mi querida hija\\" grabada.<li>Aumenta tremendamente la velocidad de movimiento de Fantasma de Yamaoka.</li><li>Las marcas de arañazos ya no se ven cuando utilizas Fantasma de Yamaoka.</li>","name":"Anillo de madre a hija","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"Un par de gafas que pertenecían a un padre y oficinista estresado.<li>Los rastros de sangre de los supervivientes son visibles mientras usas Fantasma de Yamaoka.</li>","name":"Gafas de padre","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"Un botón amarillo brillante de aspecto simpático que se usa de manera sarcástica.<li>Golpear a un superviviente señalado por Instinto asesino mientras Frenesí salvaje está activo causa el efecto de estado Ceguera durante 60 segundos.</li>","name":"Chapa de carita sonriente","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"Una regla de madera plagada de arañazos profundos.<li><b>Reduce ligeramente</b> el tiempo necesario para llenar del todo el indicador de poder.</li>","name":"Regla rayada","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"Una lista de misiones mezquinas que cumplir, recuerdo de días mejores.<li><b>Aumenta ligeramente</b> la duración de Frenesí salvaje.</li>","name":"Lista de malas acciones","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"Una pulsera amplia de cuerdas rojas y grises trenzadas entre sí. Lleva la inscripción \\"F J S J\\" escrita con tinta de un intenso color negro.<li><b>Aumenta ligeramente</b> el radio de detección de Instinto asesino.</li>","name":"Pulsera de la amistad","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"Comprimidos con alto contenido en cafeína para espabilarte en épocas de exámenes o actividades que requieran mucha energía.<li><b>Aumenta moderadamente</b> el radio de detección de Instinto asesino.</li>","name":"Pastillas para no dormir","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"Un esbozo del mural de la Legión arrancado de un cuaderno.<li><b>Aumenta moderadamente</b> la duración de Frenesí salvaje.</li>","name":"Boceto de mural","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"Un casete oscuro y deprimente compuesto principalmente por baladas y melodías tristes.<li><b>Reduce ligeramente</b> la fatiga después de Frenesí salvaje.</li>","name":"Casete de Julie","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"Una regla de madera con los nombres de los enemigos firmemente grabados.<li><b>Reduce moderadamente</b> el tiempo necesario para rellenar el indicador de poder.</li>","name":"Regla grabada","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"Un botón amarillo brillante de una desfigurada carita sonriente, en su momento de aspecto simpático. Un símbolo característico de la Legión.<li>Golpear a un superviviente señalado por Instinto asesino mientras <i>Frenesí salvaje</i> está activo causa el efecto de estado <b><i>Laceración</i></b>.</li>","name":"Chapa de carita sonriente desfigurada","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"Un pin hecho a mano con la cara de la Legión. Solo se puede usar en retos intimidatorios.<li>Golpear a un superviviente señalado por Instinto asesino mientras Frenesí salvaje está activo causa el efecto de estado Desesperanza durante 60 segundos.</li>","name":"Pin de la Legión","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"Un casete cañero con canciones llenas de energía y ritmos muy rápidos.<li><b>Aumenta tremendamente</b> el radio de detección de Instinto asesino.</li>","name":"Casete de Susie","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"Un cuaderno con bocetos creativos y evocadores, aunque quizás algo estrambóticos.<li><b>Aumenta considerablemente</b> la duración de Frenesí salvaje.</li>","name":"Cuaderno de bocetos robado","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"Esta cuchilla tiene unas manchas asquerosas de sangre y suciedad que dificultan particularmente la sanación de las heridas.<li><b>Aumenta ligeramente</b> la cantidad de tiempo que los supervivientes necesitan para completar la acción Sanar.</li>","name":"Cuchilla repugnante","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"Una mezcla de temas y ritmos geniales con los que relajarte cuando la vida sea un asco.<li><b>Reduce moderadamente</b> la fatiga después de Frenesí salvaje.</li>","name":"Casete de Joey","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"Un artículo médico robado de la biblioteca pública de Ormond que vulgariza un estudio sobre lesiones y heridas de arma blanca.<li><b>Reduce moderadamente</b> el temporizador de Herida profunda en todos los supervivientes.</li>","name":"Estudio de heridas de arma blanca","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"Nunca vayas de matanza sin tu música. Una lista de canciones llena de efectos ensordecedores y de una percusión atronadora de las que revientan los tímpanos.<li><b>Reduce considerablemente</b> la duración del temporizador de Herida profunda de un superviviente al atacar en Frenesí salvaje.</li>","name":"Casete de Frank","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"Esta cuchilla tiene unas manchas asquerosas de sangre y suciedad que dificultan particularmente la sanación de las heridas.<li><b>Aumenta moderadamente</b> la cantidad de tiempo que los supervivientes necesitan para completar la acción Sanar.</li>","name":"Cuchilla asquerosa","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"Un puñado de tierra recogida en el lugar de descanso eterno del conserje. Desprende un frío antinatural.<li><b>Reduce considerablemente</b> la fatiga después de Frenesí salvaje.</li>","name":"Mugre fría","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"Un botón de aspecto cristalino moldeado a partir de la niebla que representa los gustos de la Legión. La superficie es cálida y reverbera con el poder del Ente.<br><br>Durante Frenesí salvaje:<br><li>Tu radio de terror se extiende <b>a todo el mapa</b></li><li>Los palés que saltes <b>se rompen de inmediato.</b></li><br>Este efecto dura hasta que se agota tu indicador de poder.<br>","name":"Botón iridiscente","flavor":"\\"La juventud consumida por el cristal iridiscente magnifica el alcance del Ente\\".","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"Ritmos oscuros y acordes violentos en una jerga incomprensible que aportan a tu mente un vibrante sexto sentido.<li>Mientras usas Frenesí salvaje, puedes distinguir el <b>progreso de reparación de los generadores</b> según la <b>intensidad de sus auras.</b></li>","name":"Casete humeante","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"Una tablilla de piedra fragmentada sobre la que se ha escrito un ensalmo corrupto que originalmente servía para eliminar las enfermedades y la sensación de malestar general.<li><b>Reduce ligeramente</b> la duración de la activación de las fuentes de devoción.</li><li><b>Aumenta ligeramente</b> la velocidad de movimiento mientras mantienes Purga corrupta.</li>","name":"Fragmento de tablilla de oraciones","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"Valiosa resina de olíbano, el llamado árbol del incienso, usada en ceremonias por su fragancia dulce y cítrica.<li><b>Aumenta ligeramente</b> la velocidad de movimiento mientras se carga Purga vil.</li>","name":"Incienso de olíbano","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"Un sello cilíndrico de piedra porosa que muestra un ritual con deidades aladas.<li><b>Aumenta ligeramente</b> la duración de la infección en los objetos.</li>","name":"Sello de piedra caliza","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"Una pasta tremendamente acre elaborada a base de raíces molidas que posteriormente han sido maceradas en salmuera durante tres días y en vino durante otros dos. Se aplica en erupciones cutáneas.<li><b>Reduce ligeramente</b> el tiempo de recarga de Purga vil.</li>","name":"Ungüento curativo","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"Un amuleto de esteatita con la imagen toscamente grabada de una deidad alada que protege contra las enfermedades. Imbuye al portador con devoción.<li><b>Aumenta ligeramente</b> la duración de la Purga corrupta.</li>","name":"Amuleto profiláctico","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"Un líquido turbio y espumoso que impregna el ambiente con un fuerte aroma a hierbas y alcohol. Se aplica directamente sobre las ampollas.\\n<li><b>Reduce moderadamente</b> el tiempo de recarga de Purga vil.</li>","name":"Tintura potente","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"Un sello cilíndrico metálico, con incrustaciones de seres con cabeza de pájaro junto a máquinas extrañas. Sirve de recipiente para cenizas santificadas.<li><b>Aumenta moderadamente</b> la duración de la infección en los objetos.</li>","name":"Sello de hematita","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"Un líquido espeso elaborado a base de mostaza y agua, cuya ingestión induce el vómito. Sirve para expulsar el mal del cuerpo.<li><b>Aumenta ligeramente</b> la efectividad de Purga vil.</li>","name":"Poción emética","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"Una fruta en su punto álgido de maduración para romper el ayuno durante la ceremonia de purificación. Deliciosa.<li>Comienzas la partida con <b>1</b> fuente de devoción corrupta adicional.</li>","name":"Manzana bendita","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"Un recipiente con aceite cutáneo de cualidades expectorantes. Desprende los perennes aromas del laurel y el romero.<li><b>Aumenta moderadamente</b> la velocidad de carga de Purga vil.</li>","name":"Aceite cutáneo","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"Un denso líquido cetrino de origen desconocido. Su ingestión induce el vómito. Sirve para expulsar el mal del cuerpo.<li><b>Aumenta moderadamente</b> la efectividad de Purga vil.</li>","name":"Emético infectado","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"Una pasta oscura y cerosa, mezclada con sabia de cedro, que desprende un dulce aroma a tierra. Se aplica directamente sobre la piel infectada.<li><b>Aumenta ligeramente</b> la velocidad de movimiento mientras se carga Purga vil.</li><li><b>Reduce moderadamente</b> el tiempo de recarga de Purga vil.</li>","name":"Ungüento aromático","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"Un amuleto de obsidiana para inhibir las náuseas durante los rituales de exorcismo. Tiene grabada una oración al dios del caos y las plagas. Imbuye al portador con una fuerte devoción.<li><b>Aumenta moderadamente</b> la duración de la Purga corrupta.</li>","name":"Amuleto de exorcismo","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"Una manzana pelada cubierta de cenizas santificadas. Comerla servía para repeler a los espíritus malignos y envidiosos de los fallecidos.<li>Comienzas la partida con <b>1</b> fuente de devoción corrupta adicional.</li><li><b>Aumenta ligeramente</b> la duración de la infección en los objetos.</li>","name":"Manzana con cenizas","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"Una tablilla de piedra adornada con oro que muestra dibujos y escrituras de conjuros corruptos usados originalmente para adorar a deidades olvidadas.<li><b>Reduce moderadamente</b> la duración de la activación de las fuentes de devoción.</li><li><b>Aumenta moderadamente</b> la velocidad de movimiento mientras mantienes Purga corrupta.</li>","name":"Tablilla de rituales","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"Una poción de textura pastosa y olor nauseabundo, elaborada a base de ingredientes desconocidos. Su ingestión induce rápidamente el vómito. Sirve para expulsar el mal del cuerpo.<li><b>Aumenta considerablemente</b> la efectividad de Purga vil.</li>","name":"Emético vil","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"El dedo del pie putrefacto de Adiris, unido a una cadena y portado como amuleto en el cuello.<li><b>Aumenta considerablemente</b> el ritmo al que los supervivientes se infectan mediante interacciones.</li>","name":"Dedo amputado","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"Un amuleto hecho de heliotropo, tallado con la efigie del dios babilonio del caos y las plagas. Imbuye al portador con una devoción desmedida.<li><b>Aumenta considerablemente</b> la duración de la Purga corrupta.</li>","name":"Amuleto de devoción","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"Un sello cilíndrico y translúcido con la efigie de la Plaga moldeado a partir de la mismísima niebla. Su superficie está caliente y late con el poder del Ente.<li><b>Reduce moderadamente</b> la velocidad de movimiento mientras mantienes Purga corrupta.</li><li><b>Reduce tremendamente</b> la duración de Purga corrupta.</li><li>La Purga vil se convierte en Purga corrupta cada vez que se completa un generador.</li>","name":"Sello iridiscente","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Una pasta oscura hecha de virutas de huesos. Inhalar sus nauseabundos vapores agudiza la visión mental.<li>Las auras de los supervivientes se te mostrarán durante <b>5 segundos</b> cuando vomiten.</li>","name":"Incienso negro","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"Una cámara robada a una víctima de Olsen en Filadelfia, donde solía trabajar. La cinta que contiene captó su última noche en la ciudad.<br><li><b>Aumenta ligeramente</b> la velocidad a la que se marca a un superviviente mientras no te asomas desde una cobertura.</li>","name":"\\"Filadelfia\\"","flavor":"\\"Es imposible que no te encante Filadelfia: siempre da más y más, y no quiero olvidarme de nada\\". (Ghost Face)","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"Una caja de cerillas del Walleyes, un bar pequeñito del norte de Roseville. Tiene apuntado en color azul el número de teléfono de una víctima. Una de las pruebas incriminatorias que se encontraron.<br><li><b>Aumenta ligeramente</b> la velocidad de recuperación de poder de <i>Velo de la noche</i>.</li>","name":"Caja de cerillas del Walleyes","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"Recortes de artículos sobre casos de asesinatos sin resolver entre Utah y Pensilvania. Ghost Face solo escribió unos cuantos de los titulares, pero cometió todos los asesinatos.<br>Recopilar tus éxitos te enorgullece y refuerza tu confianza.<br><li><b>Aumenta ligeramente</b> la velocidad de movimiento al acechar.</li>","name":"Recortes de titulares","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"Colonia de bazar que apesta a alcohol. Ghost Face se la pone para hacerse notar. Reservada para visitas improvisadas.<br><li><b>Aumenta ligeramente</b> el tiempo que el superviviente permanece marcado.</li>","name":"Colonia barata","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"Objetivo de enfoque manual para permanecer oculto mientras tomas fotos desde lejos.<br><li><b>Aumenta ligeramente</b> la velocidad a la que se marca a un superviviente mientras no te asomas desde una cobertura.</li><li><b>Aumenta ligeramente</b> el tiempo que el superviviente permanece marcado.</li>","name":"Teleobjetivo","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"Un cuaderno de espiral con anotaciones manchadas. En el diario aparecen detallados varios equipos para acechar a las víctimas. Repasar tus antiguos métodos te hace evocar recuerdos intensos.<br><li><b>Aumenta moderadamente</b> la velocidad de movimiento al acechar.</li>","name":"Diario de Olsen","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"Está escrita con tinta azul clara y difícil de descifrar. En ella aparecen todas las víctimas de asesinato de Roseville, junto con sus teléfonos y direcciones.<br><li><b>Aumenta moderadamente</b> la velocidad de recuperación de poder de <i>Velo de la noche</i>.</li>","name":"Agenda de contactos de Olsen","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"El mapa con anotaciones del norte de Roseville, Florida. Cada X corresponde a una víctima de Ghost Face. Marcar en él a tus objetivos te permite deambular por las calles sin que te detecten.<br><li><b>Aumenta moderadamente</b> el tiempo que se mantiene visible Instinto asesino tras revelar al asesino.</li>","name":"Mapa con anotaciones","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"Correas negras que lo mantienen todo en su sitio mientras andas al acecho.<br><li><b>Aumenta ligeramente</b> la velocidad de movimiento mientras estás en cuclillas.</li>","name":"Correas de sujeción ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"En la cartera de Olsen hay treinta dólares en efectivo, una tarjeta de socio de un videoclub y una foto doblada de la primera víctima de Olsen en Roseville. Tu emoción y tu capacidad resolutiva aumentan al llevar encima pruebas incriminatorias.<br><li><b>Aumenta considerablemente</b> la velocidad de movimiento al acechar.</li>","name":"Cartera de Olsen","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"Una funda silenciosa y flexible para llevar el cuchillo. Es más fácil moverse cuando las cosas están sujetas en su sitio.<br><li><b>Aumenta moderadamente</b> la velocidad de movimiento al ir de cuclillas.</li>","name":"Funda de cuero para cuchillo","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"Una penetrante fragancia almizcleña que Ghost Face se ponía para advertir de su presencia. La reservaba para las víctimas sobre las que quería escribir.<br><li><b>Aumenta moderadamente</b> el tiempo que el superviviente permanece marcado.</li>","name":"Perfume duradero","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"Un clip de cinturón perfecto para explorar y llevar el cuchillo con discreción. Nadie sabe lo que pretendes hacer esta noche.<br><li><b>Aumenta moderadamente</b> la velocidad a la que se marca a un superviviente mientras no te asomas desde una cobertura.</li>","name":"Clip de cinturón para cuchillo","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"Bolígrafo azul cuya capucha mordisqueada contiene restos de ADN de Danny. Es una prueba incriminatoria que no se llegó a encontrar nunca.<br><li><b>Aumenta considerablemente</b> la velocidad de recuperación de poder de <i>Velo de la noche</i>.</li>","name":"Bolígrafo mordisqueado","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"\\"Una página arrancada en la que aparece descrita la rutina semanal de la primera víctima de Olsen en Roseville. Recopilar los hábitos de tu víctima te permite adelantarte a sus movimientos. \\n<br><li><b>Aumenta moderadamente</b> el tiempo que se mantiene visible Instinto asesino tras revelar al asesino.</li><li><b>Reduce moderadamente</b> el radio de detección para revelar al asesino mientras Velo de la noche está activo.</li><br><span class=\\"FlavorText\\">\\"Llevo un tiempo observándote. Quería que este momento fuera especial; uno de esos titulares que nadie olvida\\". (Ghost Face)</span>","name":"Rutina detallada de la víctima","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"Lente de visión nocturna que permite hacer fotos nítidas incluso en la más absoluta oscuridad. Ideal para visitas inesperadas y discretas a altas horas de la madrugada.<br><li><b>Aumenta considerablemente</b> la velocidad a la que se marca a un superviviente mientras no te asomas desde una cobertura.</li>","name":"Lente de visión nocturna","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"Funda que permite gozar de una gran movilidad, ideal para provocar heridas rápidas y profundas mientras te mueves con libertad. Robada a un agente de policía la noche en que Danny se marchó de Filadelfia.<br><li><b>Aumenta considerablemente</b> la velocidad de movimiento al estar de cuclillas.</li><span class=\\"FlavorText\\">\\"Tengo que prepararme como explorador, pero sin las ridículas condecoraciones. Lo que consigo es mucho mejor\\". (Ghost Face)</span>","name":"Funda de cuchillo para pernera","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"Un carnet de conducir que muestra la verdadera identidad de Olsen: Danny Johnson.<br><li><b>Reduce considerablemente</b> el radio de detección para revelar al asesino mientras <i>Velo de la noche</i> está activo.</li>","name":"Carnet de conducir","flavor":"\\"Todos quieren saber quién es Ghost Face, cuando lo que deberían preguntarse realmente es... quién será el siguiente\\". (Ghost Face)","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"Cinta que Olsen usó para escribir un artículo con el que sembrar el terror en Roseville.<br><li><b>Aumenta tremendamente</b> la velocidad a la que se marca a un superviviente desde una cobertura.</li><li><b>Reduce tremendamente</b> la velocidad a la que se marca a un superviviente al no asomarte desde una cobertura.</li>","name":"\\"Ghost Face capturado en vídeo\\"","flavor":"\\"En este vídeo, se puede ver a una figura oscura colándose en una casa a altas horas de la madrugada en el norte de Roseville, Florida. Al día siguiente, la policía recibió una llamada para denunciar un asesinato en la zona. Cerrad bien las puertas: hay un asesino entre nosotros, campando a sus anchas, como un fantasma en la noche\\". (La Roseville Gazette)","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"Una pequeña cámara de vigilancia que grabó a Ghost Face entrando en una casa en Belleview Road, al norte de Roseville. La cámara estaba colocada en el ángulo perfecto para captar durante un instante a Ghost Face sin dejar pista alguna a la policía.<br><li>Las auras de todos los supervivientes que se encuentren fuera de tu radio de terror se te revelan durante 4 segundos cuando dejas agonizante a un superviviente marcado.</li>","name":"Cámara de seguridad exterior","flavor":"\\"Una imagen vale más que mil palabras\\". (Ghost Face)","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"Pulpa de calabaza infectada por la tierra podrida de Hawkins.<li>Al cruzar el Mundo Del Revés, se destruye el portal por el que entras. Gana 200 puntos de sangre adicionales por el recorrido.</li>","name":"Calabaza podrida","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"Una correosa cola de rata para que devore el Demogorgon.<li><b>Reduce ligeramente</b> el tiempo necesario para abrir un portal.</li>","name":"Cola de rata","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"Una pasta de hígado salado.<li><b>Aumenta ligeramente</b> la velocidad de movimiento del asesino mientras carga <b>Desde el abismo</b>.</li>","name":"Hígado de rata","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"Un corazón negro fermentado, arrancado del pecho de una criatura con tentáculos en el Mundo Del Revés.<li><b>Aumenta ligeramente</b> la velocidad de recuperación de un ataque con <b>Desmenuzar</b>.</li>","name":"Corazón negro","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"Membrana elástica y húmeda que se extiende por los túneles interdimensionales.<li><b>Aumenta ligeramente</b> el tiempo que los supervivientes tardan en sellar un portal.</li>","name":"Membrana viscosa","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"Una capa viscosa y fétida que cubre los túneles interdimensionales.<li><b>Aumenta moderadamente</b> la distancia a la que se puede detectar a los supervivientes con <b>Desde el abismo</b>.</li>","name":"Mucosa pegajosa","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"Tripas podridas que llenan al Demogorgon de energía.<li><b>Aumenta ligeramente</b> la velocidad de movimiento del asesino al cruzar el Mundo Del Revés.</li>","name":"Tripas verdes podridas","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"Las sabrosas entrañas de una víctima desdichada.<li><b>Aumenta</b> <b>en 1</b> el número total de portales disponibles.</li><li><b>Aumenta ligeramente</b> la velocidad a la que te recuperas tras fallar un ataque con <b>Desmenuzar</b>.</li>","name":"Entrañas de Mews","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"Un par de gafas rotas que viajaron hasta el Mundo Del Revés.<li><b>Aumenta ligeramente</b> la velocidad de recuperación de <i>Desmenuzar</i> al romper un palé.</li>","name":"Gafas de Barb","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"Un hongo oscuro y carnoso, procedente del Mundo Del Revés, que permite que el Demogorgon pueda distorsionar telepáticamente los sentidos de su presa.<li><b>Aumenta ligeramente</b> la duración del <b>efecto de estado Indetectable</b> que afecta al asesino cuando sale de un portal.</li>","name":"Hongo violeta","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"Enredaderas gruesas y espinosas que refuerzan los túneles interdimensionales.<li><b>Aumenta ligeramente</b> el tiempo que los supervivientes tardan en sellar un portal.</li><li><b>Aumenta ligeramente</b> la distancia a la que se puede detectar a los supervivientes con <b>Desde el abismo</b>.</li>","name":"Enredaderas espinosas","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"Una lata de refresco cargada de energía psíquica.<li>Muestra las auras amarillas de los generadores en reparación al cruzar el Mundo Del Revés.</li>","name":"Refresco de Once","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"Un pulmón crudo y gelatinoso que fortalece al Demogorgon.<li><b>Aumenta considerablemente</b> la velocidad de movimiento del asesino al cruzar el Mundo Del Revés.</li><li>Reduce el número de portales disponibles en <b>2</b>.</li>","name":"Pulmón de ciervo","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"Un mechero utilizado para generar problemas incendiarios.<li>Los supervivientes que estén afectados por un portal sufren el efecto de estado <b>Ceguera</b>. A partir del momento en que dejen de estar en contacto con el portal, el efecto persistirá durante <b>60 segundos</b>.</li>","name":"Mechero de latón","flavor":"\\"Emite un fuerte campo electromagnético. Debe de haber estado en contacto con el Mundo Del Revés\\". (Laboratorio Nacional de Hawkins)","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"Un hongo de color rojo brillante perteneciente al Mundo Del Revés.<li><b>Aumenta moderadamente</b> la duración del <b>efecto de estado Indetectable</b> que afecta al Demogorgon al salir de un portal.</li>","name":"Hongo bermellón","flavor":"\\"Aún estamos realizando experimentos con el espécimen. De momento no tenemos resultados concluyentes\\". (Laboratorio Nacional de Hawkins)","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"Savia inflamable y pegajosa que refuerza la puerta de entrada a los túneles interdimensionales.<li><b>Aumenta moderadamente</b> el tiempo que los supervivientes tardan en sellar un portal.</li>","name":"Resina del Mundo Del Revés","flavor":"\\"Una muestra tomada del tronco del árbol que ocultaba un portal a otra dimensión. Los estudios realizados sobre sus efectos no son concluyentes\\". (Laboratorio Nacional de Hawkins)","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"Un huevo enorme y caliente, cubierto con una membrana repugnante.<li><b>Aumenta considerablemente</b> la velocidad de recuperación del poder de cruzar el Mundo Del Revés.</li>","name":"Huevo desconocido","flavor":"\\"Avistamos un huevo enorme en el Mundo Del Revés, pero no sobrevivió ni una sola muestra para poder examinarla en condiciones\\". (Laboratorio Nacional de Hawkins)","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"Un silbato de metal oxidado que en su día se usaba para vigilar la piscina pública de Hawkins.<li>Los supervivientes que estén cerca de portales activados aparecerán con Instinto asesino sin tener que cargar <b>Desde el abismo</b>.</li>","name":"Silbato de socorrista","flavor":"\\"Emite un fuerte campo electromagnético. Debe de haber estado en contacto con el Mundo Del Revés\\". (Laboratorio Nacional de Hawkins)","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"Un musgo alucinógeno que crece en las cortezas de los árboles en el Mundo Del Revés.<li>Al cruzar el Mundo Del Revés, el Demogorgon sale del portal objetivo de forma silenciosa, aunque se mueve más lentamente.</li><li><b>Aumenta tremendamente</b> la duración del efecto de estado <b>Indetectable</b> que se le aplica al Demogorgon al salir de un portal.</li>","name":"Musgo rojo","flavor":"\\"Consumir sus hojas sirve para mejorar el rendimiento deportivo y provoca euforia\\". (Laboratorio Nacional de Hawkins)","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"Un liquen potente que crece a un ritmo vertiginoso sobre las piedras del Mundo Del Revés.<li><b>Revela el aura</b> de todos los supervivientes al cruzar el Mundo Del Revés y durante <b>3 segundos</b> tras salir de un portal.</li>","name":"Liquen musgoso","flavor":"\\"Una pequeña dosis puede provocar alucinaciones graves\\". (Laboratorio Nacional de Hawkins)","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"Kazan, que consideraba que sus objetivos eran puros y justos, llevaba un amuleto para protegerse del mal que podía hacer que se desviase del buen camino.<li><b>Aumenta ligeramente</b> la velocidad de absorción de los orbes de sangre.</li>","name":"Talismán Yaku-Yoke","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"Si la cuerda hubiera sido más fuerte, Kazan seguramente no hubiera podido liberarse. Pero no fue el caso, así que consiguió escaparse y asesinó a sus secuestradores.<li><b>Aumenta ligeramente</b> la distancia a la que se puede detectar las auras de los orbes de sangre.</li>","name":"Cuerda podrida","flavor":"\\"Aunque la muerte siempre está observando, se sabe que a veces parpadea\\". (Doctrina de Renjiro, 14:5) ","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"Un cuenco de la boda de Kazan. No llegó a aguantar toda la noche sin dañarse.<li><b>Aumenta ligeramente</b> la velocidad a la que se carga la activación de <i>Furia sangrienta</i>.</li><li><b>Reduce ligeramente</b> la duración de la desactivación de <i>Furia sangrienta</i>.</li>","name":"Sakazuki resquebrajado","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"Se cayó durante una de las innumerables caminatas de invierno de Kazan hasta el templo. A pesar de su peregrinaje, la pierna de Akito nunca llegó a curarse.<li><b>Aumenta ligeramente</b> la velocidad de movimiento al absorber orbes de sangre.</li>","name":"Uña del pie ennegrecida","flavor":"\\"Si un padre no es capaz de sacrificarse por sus hijos, ¿cómo puede hacerse llamar padre?\\". (Doctrina de Renjiro, 11:12)","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"Una cimera con cuernos que Kazan arrancó de su casco después de que lo comparasen con un demonio.<li><b>Aumenta ligeramente</b> la velocidad de recarga pasiva de <i>Cólera de Yamaoka<i>.</li>","name":"Maedate pulido","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"Un cuadro pintado con tinta que decoraba la residencia Yamaoka. Retrata la historia de un león devorado por ratones.<li><b>Aumenta ligeramente</b> la velocidad a la que se carga la activación de <i>Furia sangrienta</i>.</li><li><b>Reduce ligeramente</b> la duración de la desactivación de <i>Furia sangrienta</i>.</li><li><b>Reduce moderadamente</b> la penalización de consumo de <i>Furia sangrienta</i> al derribar a un superviviente.</li>","name":"León de tinta","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"Un bastón que pertenecía a Renjiro y que Kazan robó al marcharse.<li><b>Aumenta ligeramente</b> la duración de <i>Furia sangrienta</i>.</li>","name":"Saihai astillado","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"La espada de prácticas de Akito. Al pequeño no le sirvió de mucho tras su lesión.<li><b>Aumenta moderadamente</b> la distancia a la que se puede detectar las auras de los orbes de sangre.</li>","name":"Espada de madera de niño","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"Sangre de un chico que llamó a Kazan \\"Noble Farsante\\". Kazan, que a menudo disfrutaba poniéndose la banda en secreto, le ocultó las pruebas de la pelea a su padre.<li><b>Aumenta moderadamente</b> la velocidad de movimiento al absorber orbes de sangre.</li>","name":"Banda ensangrentada","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"El estandarte de la familia Yamaoka. A Kazan le llenaba de un orgullo inconmensurable.<li><b>Aumenta moderadamente</b> la duración de <i>Furia sangrienta</i>.</li>","name":"Sashimono de Yamaoka","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"Una máscara que un joven Kazan compró para celebrar el Setsubun. Su repulsiva boca llena de colmillos empezó a atormentarlo en sueños.<li><b>Aumenta ligeramente</b> la cantidad de orbes de sangre que dejan los supervivientes.</li>","name":"Máscara de oni de madera","flavor":"\\"No es casualidad que el hombre esté tan acostumbrado a los demonios\\". (Doctrina de Renjiro, 3:8)","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"Los fragmentos de una espada ancestral que Kazan destruyó en un arrebato de ira.<li><b>Aumenta moderadamente</b> la velocidad de recarga pasiva de <i>Cólera de Yamaoka</i>.</li>","name":"Wakizashi destrozada","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"El rodete de un samurái que puso en entredicho el honor de Kazan. Las raíces están adheridas a una fina tira de piel ensangrentada.<li><b>Aumenta considerablemente</b> la velocidad a la que se carga la activación de <i>Velocidad demoníaca</i> mientras <i>Furia sangrienta</i> está activa.</li>","name":"Rodete arrancado","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"Un amuleto que Kazan recibió al nacer. Sus poderes sirven para proteger a su familia de todo mal.<li><b>Aumenta moderadamente</b> la velocidad de movimiento de <i>Velocidad demoníaca</i> mientras <i>Furia sangrienta</i> está activa.</li>","name":"Talismán Kanai-anzen","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"El pañuelo en el que la madre de Kazan lloró cuando este se fue de peregrinaje para purificar a los samuráis.<li><b>Reduce considerablemente</b> la penalización de consumo de <i>Furia sangrienta</i> al derribar a un superviviente.</li>","name":"Tenugui empapado de lágrimas","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"Fragmentos de un barco en el que viajó Renjiro Yamaoka. Contra todo pronóstico, parece que el legendario samurái logró sobrevivir.<li><b>Aumenta moderadamente</b> la cantidad de orbes de sangre que sueltan los supervivientes.</li>","name":"Casco astillado","flavor":"\\"Para planificar un subterfugio, empieza por no contar con nadie\\". (Doctrina de Renjiro, 7:9)","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"Un diente vendido por un comerciante exótico que simboliza el poder y la nobleza.<li><b>Aumenta considerablemente</b> la duración de <i>Furia sangrienta</i>.</li>","name":"Colmillo de león","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"La muleta que utilizó el hijo de Kazan tras caerse de un árbol. La amiga de Akito y su familia recibieron un castigo por la lesión del chico.<li><b>Aumenta considerablemente</b> la velocidad de movimiento de <i>Velocidad demoníaca</i> mientras <i>Furia sangrienta</i> está activa.</li>","name":"Muleta de Akito","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"El guante que Renjiro se llevó al esternón tras el golpe de su hijo.<li>Todos los supervivientes pueden ver los orbes de sangre.</li><li>Un superviviente que entre en contacto con un orbe de sangre lo absorberá y revelará su aura al asesino durante <b>2 segundos</b>.</li><li>Este efecto se acumula con cada orbe de sangre absorbido.</li>","name":"Guante ensangrentado de Renjiro","flavor":"\\"Cuando todo vaya mal, aférrate al honor.\\" (Doctrina de Renjiro, 14:12)","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"Un blasón que indica que su propietario forma parte de la familia Yamaoka.<br><li>Mientras <i>Furia sangrienta</i> esté activa, si fallas <i>Golpe demoníaco</i>, todos los supervivientes que estén dentro de un <b>radio de 12 metros</b> gritarán y se revelará su ubicación.</li>","name":"Blasón familiar iridiscente","flavor":"\\"Sé consciente de quién eres para poder proteger tu corazón\\". (Doctrina de Renjiro, 11:2)","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"Un mugriento jirón de arpillera. Bastaba con un escupitajo y con frotar un poco para limpiar el lanzaarpones en el fragor de un tiroteo.<li><b>Reduce ligeramente</b> el tiempo de recarga del lanzaarpones tras errar el tiro.</li>","name":"Trapo pulidor ensalivado ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"Una tintura elaborada a base de aceites y extractos, comprada a un vendedor ambulante. Supuestamente cura cualquier dolencia.<li><b>Aumenta ligeramente</b> la velocidad de recogida del lanzaarpones.</li>","name":"Aceite de serpiente ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"Eslabones desgastados de acero que Caleb usó en su primer prototipo del lanzaarpones. Pese a su evidente fragilidad, guardan un gran valor sentimental para él.<li>Otorga un <b>50 %</b> extra de puntos de sangre por <i>Aciertos</i>.</li><li>Los supervivientes se liberan con mayor facilidad.</li>","name":"Cadena desvencijada","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"Una cartuchera antigua, modificada por Caleb para usarla con su armamento especializado. Sigue conteniendo tierra fina y roja del desierto de Arizona.<li><b>Aumenta ligeramente</b> la velocidad de recarga del lanzaarpones.</li>","name":"Cartuchera modificada ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"Un clavo de ferrocarril que Caleb amarró al frontal del lanzaarpones en un momento de curiosidad morbosa. La punta roma evita que se clave limpiamente en su objetivo.<li>Golpear a un superviviente arponeado inflige el efecto de estado <b>Laceración</b>.</li>","name":"Clavo oxidado ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"Caleb descubrió que los arpones impregnados con la savia de esta planta de aspecto mundano provocaban la aparición de ampollas dolorosísimas alrededor de las heridas.<li><b>Aumenta ligeramente</b> el tiempo que tarda en sanarse un superviviente mientras sufre el efecto de estado <b>Herida profunda</b>.</li>","name":"Hojas de roble venenoso","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"Una placa plateada recogida del cuerpo de un agente del orden público que había metido las narices en los asuntos de la banda de Hellshire en Arizona.<li><b>Reduce ligeramente</b> el radio de terror mientras apuntas con la mira del lanzaarpones.</li><li><b>Reduce ligeramente</b> la velocidad de movimiento mientras apuntas con la mira del lanzaarpones.</li><span class=\\"FlavorText\\">\\"Ve rezando lo que sepas, estarás colgando del cuello antes del mediodía\\". (Caleb Quinn)</span>","name":"Placa de sheriff ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"La bala que atravesó la mandíbula de Caleb durante un frenético tiroteo. Revive un vehemente deseo de venganza.<li><b>Aumenta ligeramente</b> la velocidad de movimiento mientras apuntas con la mira del lanzaarpones.</li><span class=\\"FlavorText\\">\\"Llamaste a la muerte a tu puerta en el instante en que me agraviaste\\". (Caleb Quinn)</span>","name":"Destrozamandíbulas ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"Una lata de hojas de tabaco machacadas y endulzadas, obtenida de un cadáver destripado en Glenvale. Estimula el sistema nervioso.<li><b>Reduce moderadamente</b> la duración del aturdimiento cuando un superviviente se libera del lanzaarpones.</li>","name":"Tabaco de mascar","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"El leve tintineo de las llaves evoca furibundos recuerdos en Caleb.<li><b>Aumenta moderadamente</b> la velocidad de recarga del lanzaarpones.</li>","name":"Llaves del alcaide ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"Los amarillentos restos de un cartel de \\"Se busca\\" que muestra a Mason Kelly. Mantenía a Caleb centrado en la caza.<li><b>Aumenta moderadamente</b> la velocidad de movimiento mientras apuntas con la mira del lanzaarpones.</li><span class=\\"FlavorText\\">\\"Vas a desear no haber nacido, te lo juro por la memoria de mi madre\\". (Caleb Quinn)</span>","name":"Cartel de \\"Se busca\\" ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"Una lata con una pequeña cantidad de aceite para reducir la fricción en la maquinaria. Los primeros modelos de lanzaarpones tenían la mala reputación de atascarse y hacía falta tener aceite a mano.<li><b>Reduce moderadamente</b> el tiempo de recarga del lanzaarpones tras errar el tiro.</li>","name":"Lata de aceite ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"Encolerizado por un botín que ya se le había escapado dos veces, Caleb retorció ramas espinosas alrededor de un arpón y lo soltó.<li>Los supervivientes que se liberen del lanzaarpones sufren el efecto de estado <b>Laceración</b>.</li>","name":"Espinas de acacia ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"Un diente de oro arrancado a Henry Bayshore mientras pedía clemencia a gritos, horas antes de que lo remataran.<li><b>Aumenta moderadamente</b> la velocidad de recogida del lanzaarpones.</li><span class=\\"FlavorText\\">\\"Más te vale saber cuál es tu sitio, chico. Tu puñetero sitio\\". (Henry Bayshore)</span>","name":"Diente de oro de Bayshore","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"Una cadena gruesa y pesada que en su momento sujeto una bola de acero al tobillo de Caleb. Está adaptada para ir enganchada a un arpón.<li><b>Aumenta considerablemente</b> las cargas requeridas para que un superviviente se libere de un arpón.</li><span class=\\"FlavorText\\">\\"Los reclusos que trabajen fuera del patio de la prisión deben llevar una bola de acero de no menos de 8 kilos\\". (Libro de guardias de la penitenciaría de Hellshire)</span>","name":"Cadena de presidio","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"Cálido solaz en una botella que apaciguaba la furia de Caleb y ralentizaba su paso.<li><b>Reduce moderadamente</b> el radio de terror mientras apuntas con la mira del lanzaarpones.</li><li><b>Reduce moderadamente</b> la velocidad de movimiento mientras apuntas con la mira del lanzaarpones.</li><span class=\\"FlavorText\\">\\"Un sabor suave para una dura frontera\\". (Anuncio de Gold Creek, 1876)</span>","name":"Whisky Gold Creek","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"Un puro de calidad, sustraído de la chaqueta del jefe de Caleb mientras gimoteaba debido al arpón que tenía alojado en el abdomen.<li><b>Reduce considerablemente</b> la duración del aturdimiento cuando un superviviente se libera del arpón.</li><span class=\\"FlavorText\\">\\"No me apuntes con esa cosa, pedazo de idiota\\". (Henry Bayshore)</span>","name":"Puro de Bayshore","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"Acero maleable estadounidense con púas. Caleb descubrió que, pese a su simplicidad, se podía acoplar a un arpón para aumentar los daños que este infligía.<li><b>Aumenta moderadamente</b> el tiempo que tarda en sanarse un superviviente tras sufrir el efecto de estado <b>Herida profunda</b>.</li></li><span class=\\"FlavorText\\">\\"Muy pronto ya no habrá nada que temer. Hasta entonces, témeme a mí\\". (Caleb Quinn)</span>","name":"Alambre de espino","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"Moneda de aspecto cristalino moldeada a partir de la propia niebla. Pago para el cazarrecompensas por los servicios prestados.<li>Los supervivientes arponeados desde una distancia de al menos <b>15 metros</b> sufren el efecto de estado <b>Vulnerabilidad</b> hasta que se libren del arpón.</li><span class=\\"FlavorText\\">\\"Los acuerdos firmados con desesperación se pagan en locura\\".</span>","name":"Moneda iridiscente","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"El hierro de marcar de la banda de Hellshire. A pesar de las historias que contaba la gente, no se utilizaba sobre los nuevos iniciados, sino que se empleaba para marcar a objetivos especialmente beligerantes.<li>Las auras de todos los supervivientes que se encuentren dentro de tu radio de terror se revelan mientras el superviviente queda arponeado.</li><span class=\\"FlavorText\\">\\"La banda de Hellshire: ¿justicieros o forajidos?\\". (Titular de la Glenvale Gazette)</span>","name":"Hierro de Hellshire","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"Encontrado en un refrigerador. Lleva grabado un repugnante rostro hinchado.<li><b>Aumenta ligeramente</b> la duración de los rastros de <b>Ritos de sentencia</b> en el entorno.</li>","name":"Anillo de plomo ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"Una mariposa encontrada en una cama de los apartamentos Wood Side. Es frágil y casi se deshace al tocarla.<li><b>Aumenta ligeramente</b> el tiempo necesario para recargar <b>Ritos de sentencia</b>.</li>","name":"Mariposa muerta ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"Encontrado en el sótano del hospital Brookhaven. Tiene grabada la imagen de una araña.<li><b>Aumenta ligeramente</b> el tiempo total que se puede usar <b>Ritos de sentencia</b>.</li>","name":"Anillo de cobre ","flavor":"\\"Estaba encerrado en el sótano del sótano. Era tan pequeño y oscuro y yo sentía tanto temor. Se me cayó mi precioso anillo. Pero nunca jamás volveré allí\\".","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"Una correa de nailon que se usó para sujetar a una víctima contra una estructura de metal. Su color hace que resulte difícil ver la sangre que la recubre.<li><b>Aumenta ligeramente</b> el alcance de <b>Castigo de los condenados</b>.</li>","name":"Correa negra ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"Una muñeca tallada de cera, hecha a mano por un prisionero que no tardaría en afrontar su sentencia.<li><b>Aumenta moderadamente</b> el alcance de <b>Castigo de los condenados</b>.</li>","name":"Muñeca de cera ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"La punta afilada y oxidada de una lanza. Está manchada con sangre de su última víctima.<li><b>Aumenta moderadamente</b> el tiempo total que se puede usar <b>Ritos de sentencia</b>.</li>","name":"Punta de lanza ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"Un trozo de tela estampada de leopardo rosa. Cuesta saber para qué se usaba.<li><b>Aumenta ligeramente</b> la duración de <i>Instinto asesino</i> cuando se activa mediante <b>Ritos de sentencia</b>.</li>","name":"Tela estampada de leopardo  ","flavor":"\\"No importa quién sea yo... Estoy aquí para ti, James\\". (Maria)","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"Una cinta de vídeo de una pareja de vacaciones en Silent Hill. A pesar de su valor sentimental, se la dejaron en el hotel Lakeview.<li><b>Aumenta moderadamente</b> el tiempo necesario para recargar <b>Ritos de sentencia</b>.</li>","name":"Cinta de vídeo olvidada ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"Una caja de música con una figura del cuento de la Cenicienta. Estaba dentro de una maleta adornada con pegatinas de varios destinos.<li><b>Aumenta moderadamente</b> la duración de los rastros de <b>Ritos de sentencia</b> en el entorno.</li>","name":"Caja de música \\"Cenicienta\\" ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"Una fotografía que muestra a dos figuras con capuchas rojas. Se titula \\"Carmesí y Banquete Blanco para los Dioses\\".<li><b>Aumenta considerablemente</b> el tiempo necesario para recargar <b>Ritos de sentencia</b>.</li>","name":"Fotografía de la secta de Valtiel ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"Una tablilla metálica con figuras aztecas grabadas.<li><b>Aumenta considerablemente</b> el tiempo total que se puede usar <b>Ritos de sentencia</b>.</li>","name":"Tablilla del \\"Opresor\\" ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"Un cuadro de una figura imponente que lleva una pirámide de acero en la cabeza. Hay víctimas enjauladas en el fondo.<li><b>Aumenta moderadamente</b> la duración de <i>Instinto asesino</i> cuando se activa mediante <b>Ritos de sentencia</b>.</li>","name":"Día neblinoso, restos del Juicio ","flavor":"\\"Es él...\\".","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"El pie gris de un maniquí, arrancado brutalmente de su pierna.<li><b>Aumenta considerablemente</b> la duración de los rastros de <b>Ritos de sentencia</b> en el entorno.</li>","name":"Pie de maniquí ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"Un diagrama del hotel Lakeview. Hay llamas pintadas por todo este lugar impío.<li><b>Aumenta considerablemente</b> la distancia de Castigo de los condenados.</li>","name":"Pintura de hombre ardiendo ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"Un huevo fresco de un color rojo muy llamativo. Tiene el tamaño de un huevo de codorniz.<li><b>Aumenta considerablemente</b> la duración de <i>Instinto asesino</i> cuando se activa mediante <b>Ritos de sentencia</b>.</li>","name":"Huevo escarlata ","flavor":"\\"¡Nunca había estado tan asustada en toda mi vida! No te importo lo más mínimo, ¿no es cierto?\\". (Maria)","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"Un huevo que parece viejo, de color naranja rojizo. Tiene el tamaño de un huevo de codorniz.<li>Los supervivientes afectados por <b>Ritos de sentencia</b> sufren el efecto de estado <b>Ceguera</b> durante <b>60 segundos</b>.</li>","name":"Huevo color de orín ","flavor":"\\"James... me hiciste muy feliz\\". (Mary)","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"Un libro acerca de la historia y leyendas de Silent Hill y del área circundante.<li>Los supervivientes afectados por <b>Ritos de sentencia</b> sufren el efecto de estado <b>Inconsciencia</b> durante <b>15 segundos</b>.</li><span class=\\"FlavorText\\">\\"A este lugar lo llamaban \'El Lugar de los Espíritus Silenciosos\'\\".</span>","name":"Libro \\"Memorias perdidas\\" ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"Un libro de autor desconocido sobre un dios antiguo.<li>Los supervivientes heridos afectados por <i>Tormento</i> sufren el efecto de estado <b>Hemorragia</b>.</li>","name":"Libro \\"Ceremonia Crimson\\" ","flavor":"\\"Habla. Yo soy el Crimson. Las mentiras y la niebla no son ellas sino yo\\".","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"Copa de aspecto antiguo tallada en obsidiana pura.<li><b>El Verdugo</b> obtiene el efecto de estado <b>Indetectable</b> al permanecer inmóvil sobre un rastro de <b>Ritos de sentencia</b>.</li>","name":"Copa de obsidiana ","flavor":"\\"Perdóname por haberte despertado. Pero sin ti, nada tiene sentido\\". (James Sunderland)","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"Un talismán con un diseño extraño. Parece que la influencia del Ente lo ha alterado.<li>Al enviar a un superviviente a una <b>Jaula de expiación</b>, las auras de todos los supervivientes que sufran <i>Tormento</i> se revelan durante <b>6 segundos</b>.</li>","name":"Sello de Metatrón iridiscente ","flavor":"\\"Este cuadrado mágico, con fuertes propiedades protectoras y disipadoras, es llamado el \'Emblema Virun VII\' o el \'Sello de Metatrón\'\\".","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Una píldora totalmente ineficaz... ¿o no?<br><br><li><b>Disminuye moderadamente</b> la velocidad de movimiento durante una Acometida.</li><li>Gana un <b>100%</b> de Puntos de sangre extra durante los eventos de puntuación de Acometida.","name":"Placebo ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"Una planta venenosa que despertó el interés de Talbot por la química. Reaviva recuerdos que estaban profundamente enterrados.<br><br><li><b>Aumenta ligeramente</b> la velocidad de recuperación después de una Acometida.</li> ","name":"Dedalera ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"Esta primera muestra no arrojó los resultados esperados, pero, a pesar de todo, demostró unos efectos sorprendentes.<br><br><li>Haz frente automáticamente al superviviente más cercano en un radio de <b>16 metros</b> después de un Topetazo.</li>","name":"Compuesto siete ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"Un monóculo que Talbot usaba muy raramente a pesar de su deterioro visual con el paso de los años.<br><br><li>Muestra la ubicación del objetivo de un Topetazo.</li>","name":"Monóculo resquebrajado","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"Los restos de las notas de Talbot. Aún contienen información valiosa.<br><br><li><b>Disminuye</b> en <b>1</b> la cantidad de distintivos de Acometida. </li><li><b>Aumenta moderadamente</b> la velocidad de regeneración de distintivos.</li>","name":"Notas destrozadas ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"Pétalos secos de pústula, convertidos en un polvo fino.<br><br><li><b>Aumenta moderadamente</b> la duración del Topetazo.</li>","name":"Polvo de pústula ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"Una muestra de la bilis de la Plaga, destilada y tratada con una mezcla de sustancias químicas.<br><br><li><b>Aumenta ligeramente</b> la velocidad de giro durante Acometida.</li>","name":"Bilis de la Plaga","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"Una espina bastante grande, extraída de una úlcera visceral. Segrega una toxina leve.<br><br><li><b>Aumenta moderadamente</b> la velocidad de recuperación después de una Acometida.</li> ","name":"Espina ulcerosa","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"Una rata que resucitó momentáneamente al inocularle el suero, pero en un estado agresivo e incontrolable.<br><br><li><b>Aumenta moderadamente</b> la velocidad de Acometida con cada Acometida consecutiva.</li>","name":"Rata deteriorada ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"Sal marina común que ha atravesado momentáneamente el mundo espiritual, lo cual ha alterado sus propiedades.<br><br><li><b>Aumenta moderadamente</b> la velocidad de giro al usar Acometida.</li>","name":"Sales umbrías ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"Una mezcla elaborada a partir de rosas secas procedentes del ramillete de luna nueva tan difícil de encontrar.<br><br><li><b>Aumenta considerablemente</b> la duración de Topetazo.</li>","name":"Tónico de rosas ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"Un suero letal para los humanos que evoca cualidades beneficiosas para los que son... algo más.<br><br><li>Al iniciar un Topetazo, revelas durante <b>3 segundos</b> el aura de los supervivientes que se hallen en un radio de <b>8 metros</b> del lugar de la colisión.</li>","name":"Compuesto veintiuno ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"Un cuervo muerto que ha mutado de forma grotesca debido al suero del Deterioro.<br><br><li><b>Aumenta considerablemente</b> la velocidad de Acometida con cada Acometida consecutiva.</li> ","name":"Cuervo deteriorado ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"Una hormona extraída de la glándula suprarrenal de un sujeto reticente. Aumenta los niveles de energía, pero puede causar fatiga.<br><br><li><b>Reduce tremendamente</b> la velocidad de giro durante Acometida.</li><li><b>Aumenta tremendamente</b> la velocidad a la que se regeneran los distintivos. <b>Aumenta</b> la cantidad de distintivos de Acometida en <b>2.<b>Aumenta considerablemente</b> el ángulo de vista máximo durante Acometida.</li><br>","name":"Vial de adrenalina ","flavor":"\\"Por favor, no lo hagas...\\".","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"El diario de un hombre que decía haber vuelto desde el Vacío. Los conocimientos que alberga tienen aplicaciones prácticas.<br><br><li>Se te aplica el efecto de estado <b>Indetectable</b> mientras usas Acometida.</li><br>","name":"Diario de Vigo ","flavor":"\\"En un páramo de sueños olvidados y de rutinas interminables, el hombre que tiene una salida es Dios\\". (Talbot Grimes)","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"Talbot usó esta piedra para tallar lo que creía que era su investigación sobre las paredes del fumadero de opio.<br><br><li>Golpear a un superviviente con Acometida letal invocará al Ente para que bloquee los palés que estén a una distancia máxima de <b>12 metros</b> de tu ubicación durante <b>6 segundos</b>.</li><br>","name":"Piedra de invocación ","flavor":"\\"La muerte solo es el comienzo\\".","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"Una sustancia química extraída de la glándula pineal de un superviviente recién fallecido.<br><br><li>Durante una acometida, cuando entras en el radio de <b>16 metros</b> de un superviviente que esté reparando algo o curándose, activa una prueba de habilidad <b>tremendamente</b> difícil para ese superviviente. Se puede activar una vez por superviviente y acometida. No activa una acometida que comience en un radio de <b>16 metros</b> del superviviente.</li><br>","name":"Sustancia química del alma ","flavor":"\\"... se sospecha que produce alteraciones en la actividad rítmica neuronal\\".\\\\ (Texto académico sobre un misterio sin etiquetar)","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"Un anillo que se les otorga a los que se gradúan como químicos en la Facultad de Medicina de Londres. Es el recuerdo de una ambición descontrolada.<br><br><li>Golpear a un superviviente con una Acometida letal regenerará instantáneamente todos los distintivos de Acometida.</li><br>","name":"Anillo de alquimista ","flavor":"\\"Al estudiante se le acusa de saquear tumbas con el fin de llevar a cabo experimentos científicos no autorizados\\". (Amonestación estudiantil de Talbot Grimes, 1838)","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"Una etiqueta cristalina de laboratorio, moldeada a partir de la propia niebla. Puede ser un regalo del Ente o una broma cruel con la que etiquetar al Deterioro como él había hecho anteriormente con los demás.<br><br><li>Al utilizar todos los distintivos de Acometida, tu última Acometida letal dejará a los supervivientes en estado agonizante.</li><br>","name":"Etiqueta del Deterioro iridiscente","flavor":"\\"Todo progreso exige un cambio drástico\\". (Talbot Grimes)","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"El penúltimo intento de suero de Talbot. Aunque no le facilitó la huida, tenía efectos secundarios poderosos.<br><br><li>Cualquier superviviente en un radio de <b>16 metros</b> de un Topetazo sufrirá el efecto <b>Entorpecimiento</b> durante <b>3 segundos</b>.</li><li>Golpear elementos destruíbles y palés los destruirá y aturdirá al Deterioro durante <b>1,5 segundos.</b></li><br>","name":"Compuesto treinta y tres ","flavor":"\\"El tiempo escasea. Este objetivo me vale...\\". (Talbot Grimes)","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"Una espada de juguete minúscula. Cuando Victor la blandía, sacaba su lado más entusiasta... y agresivo.<br><br><li><b>Reduce ligeramente</b> el tiempo para cargar un ataque en salto.</li>","name":"Espada de juguete","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"Charlotte tenía muchas formas de llorar la muerte de Victor. Cuando las uñas se desprendieron de sus manos putrefactas, se quedó una como recuerdo.<br><br><li><b>Reduce moderadamente</b> el tiempo que tarda Victor en separarse de Charlotte.</li>","name":"Uña diminuta","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"Una botella metálica llena de leche rancia. Por muy chillón que fuera Victor, siempre se calmaba cuando le daban de comer.<br><br><li><b>Aumenta ligeramente</b> el radio de los chillidos de Victor.</li>","name":"Leche agria","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"Una figurilla de madera que captó la atención de Victor. Chilló y chilló hasta que su madre la robó en el mercado, y casi los atrapan.<br><br><li>Muestra la ubicación del objetivo del ataque en salto.</li>","name":"Figurilla de gato","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"Un guante que perteneció a la madre de los Mellizos. En los momentos de mayor desesperación, servía para taparle la boca a Victor cuando hacía ruido.<br><br><li><b>Aumenta moderadamente</b> el radio de los chillidos de Victor.</li>","name":"Guante de Madeleine","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"El candelabro que Victor tiró al suelo para quemar a sus captores. Todo un símbolo de su tenacidad.<br><br><li><b>Aumenta ligeramente</b> el tiempo que necesita un superviviente para machacar a Victor.</li>","name":"Candelabro ceremonial","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"Un globo ocular que perteneció a un gato devorado por la hambrienta familia Deshayes. Victor lo conservó a escondidas de su madre para usarlo como juguete.<br><br><li>Los chillidos de Victor se detienen cuando el ataque en salto se carga por completo.</li>","name":"Ojo de gato","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"La capucha de uno de los hombres que dieron caza a Charlotte, aunque él terminó siendo la presa.<br><br><li><b>Reduce ligeramente</b> el tiempo que tarda Charlotte en despertar de su estado de letargo.</li>","name":"Capucha negra sangrienta","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"Dos dientes que perdió Victor hace mucho tiempo. Sorprendentemente, están muy afilados.<br><br><li>Los supervivientes que eliminen a Victor sufren el efecto de estado <b>Ceguera</b> durante <b>15 segundos.</b></li>","name":"Dientes de leche","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"Un sonajero tosco del que Victor se encaprichó, por lo que su madre tuvo que robarlo. Pesa mucho y no es aconsejable dejárselo a un niño.<br><br><li>Los supervivientes que eliminan a Victor sufren el efecto de estado <b>Desesperanza</b> durante <b>20 segundos.</b></li> ","name":"Sonajero pesado","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"Una galleta dura y ácima que Madeleine robó en el mercado de una aldea. No era gran cosa, pero era mejor que casi todo lo que comían.<br><br><li><b>Reduce ligeramente</b> el tiempo de recarga del ataque en salto.</li>","name":"Galleta rancia","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"Una mezcla asquerosa y pegajosa de la que quedaron cubiertos los Deshayes durante un intento de huida por las alcantarillas de la ciudad.<br><br><li><b>Aumenta ligeramente</b> el tiempo que tarda un superviviente en eliminar a Victor.</li>","name":"Aguas residuales","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"Aguja oxidada","name":"Aguja oxidada","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"Un trapo que Madeleine llevaba puesto justo antes de morir. Los Mellizos lo guardan a modo de recuerdo.<br><br><li><b>Aumenta ligeramente</b> la velocidad de Victor.</li><br>","name":"Bufanda de Madeleine","flavor":"\\"... quedará registrado como un servicio por un bien mayor y la erradicación del mal\\".\\\\ (Investigación de la muerte de Madeleine Deshayes)","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"Un soldadito de plomo al que Victor se aferraba cuando tenía miedo. Por algún motivo, Charlotte tenía celos de aquel juguete.<br><br><li>Si un superviviente machaca a Victor cuando está activo, se podrá ver su aura durante <b>6 segundos.</b></li><br>","name":"Soldado de Victor","flavor":"\\"¡Pam, pam! ¡Mata a los malos!\\"\\\\ (Victor Deshayes)","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"Una peonza de madera que pertenecía a los Mellizos, aunque a Victor no le gustaba compartirla. Aprendió que podía conseguir lo que quisiera si se aferraba con fuerza a ello y chillaba.<br><br><li>Si Victor se abalanza sobre los supervivientes, dejarán caer cualquier objeto que lleven encima.</li><br>","name":"Peonza","flavor":"\\"Calma, calma... Para ti, si quieres\\". (Charlotte Deshayes)","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"Un guiso hecho de verduras silvestres y mezclado con musgo y corteza de árbol para darle consistencia.<br><br><li><b>Aumenta moderadamente</b> la velocidad de Victor.</li><br>","name":"Guiso silvestre","flavor":"\\"Come... Come, pequeño. Hará que te sientas mejor\\".\\\\ (Madeleine Deshayes)","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"Uno de los pocos lujos que Madeleine conservaba de su vida pasada. Tiene un aroma agradable y embriagador.<br><br><li>Los supervivientes que estén en el radio de los chillidos de Victor sufren el efecto de estado <b>Inconsciencia</b>.</li><br>","name":"Gota de perfume","flavor":"\\"Protegeos bien de las artes de las brujas, ya que se aprovechan de la bondad de los corazones de los hombres\\".\\\\ (Historia de brujas y demonios, 1602)","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"Un trozo de tela áspera que Charlotte se metía en la boca cuando tenía cinco años para no gritar cuando los cazadores de brujas andaban cerca.<br><br><li>Charlotte recibe el efecto de estado <b>Indetectable</b> durante <b>20 segundos</b> tras despertar de su estado inactivo.</li><br>","name":"Trapo silenciador","flavor":"\\"Mamá, este juego ya no me gusta...\\". — Charlotte Deshayes","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"Un colgante de aspecto cristalino fabricado con la niebla. Tiene un retrato de Madeleine, aunque hay algo en su semblante que resulta inquietante.<br><br><li>Si un superviviente machaca a Victor mientras está inactivo, sufrirá el efecto de estado <b>Vulnerabilidad</b> durante <b>30 segundos.</b></li><br>","name":"Colgante iridiscente","flavor":"\\"Vuestra unión no es ninguna condena, amores míos, es una fuerza a la que recurrir\\". — Madeleine Deshayes","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"Una bolsa con varios bolsillos secretos, muy popular entre los aspirantes a magos y quienes tengan algo que ocultar.<br><li><b>Aumenta</b> en <b>10</b> la cantidad máxima de cuchillos que puede llevar.</li><li>Comienzas la partida con <b>10</b> cuchillos adicionales.</li>","name":"Bolsa de tramposo","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"Unos cuchillos ensangrentados y oxidados, desgastados por el uso. Ji-Woon los utilizó en sus primeros asesinatos, así que poseen un valor sentimental para él.<br><li>Gana un <b>100 %</b> de puntos de sangre adicionales con los eventos de puntuación de <b>Furor</b>.</li><li><b>Aumenta moderadamente</b> el medidor de desgarro de cada superviviente.</li>","name":"Hojas del recuerdo","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"Una secuencia de acordes para los que Ji-Woon jamás encontró una canción. Pese a todo, no se puede negar que la melodía es pegadiza.<br><li><b>Aumenta ligeramente</b> la velocidad de movimiento mientras lanza cuchillos.</li>","name":"Acordes letales","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"Unos cables quemados del incendio en el estudio que acabaron con la vida de cuatro de los cinco miembros de NO SPIN. Sus muertes originaron la existencia del Traicionero.<br><li><b>Aumenta ligeramente</b> la duración del evento principal.</li>","name":"Cables infernales","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"Bebida creada en un humilde bar de Changwon y una de las favoritas de Ji-Woon.<br><li><b>Aumenta moderadamente</b> la duración del evento principal.</li>","name":"Tequila Moonrock","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"Un sencillo de poca calidad producido por el mismo Ji-Woon antes de hacerse famoso. Solo los auténticos seguidores de NO SPIN poseen semejante tesoro.<br><li><b>Aumenta ligeramente</b> el tiempo antes de que el medidor de desgarro empiece a disminuir.</li>","name":"Camino del éxito","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"El primer cuchillo que tuvo Ji-Woon. Se lo compró su padre, confiando en que el pequeño actuara para los clientes de su restaurante familiar.<br><li><b>Aumenta ligeramente</b> la duración de deterioro del medidor de desgarro de cada superviviente cuando no te queden cuchillos.</li>","name":"Hoja de la suerte","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"La firma de la estrella conocida como \\"Traicionero\\". Por mucho que le doliera la muñeca tras firmar cientos de autógrafos, le animaba saber que era tan popular.<br><li><b>Aumenta ligeramente</b> el ritmo de lanzamiento de los cuchillos.</li>","name":"Autógrafo de Ji-Woon","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"Ji-Woon lució estos zapatos en el videoclip de \\"Corazón enjaulado\\" que le permiten bailar con movimientos ágiles y elegantes.<br><li><b>Aumenta moderadamente</b> la velocidad de movimiento mientras lanza cuchillos.</li>","name":"Zapatos \\"Corazón enjaulado\\"","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"Un reloj de bolsillo que llevó Ji-Woon durante un concierto de \\"Te estaré esperando\\". Es un objeto de atrezo, así que no funciona.<br><li><b>Aumenta considerablemente</b> la duración de la disminución del medidor de desgarro de cada superviviente cuando se quede sin cuchillos.</li>","name":"Reloj de la espera","flavor":"\\"No huyas/<br>No digas que lo nuestro se ha acabado/<br>No tienes forma de escapar/<br>Te estaré esperando\\".<br>\\"Te estaré esperando\\" (NO SPIN)","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"Una muñequera que Ji-Woon se puso durante la grabación del videoclip \\"Desgarrador\\". Aunque no era su intención original, el diseño sujeta la muñeca mejor que otros artículos ortopédicos.<br><li><b>Aumenta moderadamente</b> el tiempo antes de que el medidor de desgarro empiece a disminuir.</li>","name":"Muñequera milagrosa","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"Una grabación nítida de los chillidos de las víctimas. Ji-Woon incluyó esos sonidos en uno de sus temas más populares.<br><li><b>Reduce moderadamente</b> el medidor de desgarro de cada superviviente.</li>","name":"Asesinato melódico","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"Una lata de refresco de edición limitada de NO SPIN. Posee un alto contenido de azúcar y cafeína.<br><li><b>Aumenta moderadamente</b> el ritmo de lanzamiento inicial.</li>","name":"Bebida carbonatada","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"Una boa que Ji-Woon colocó sobre una víctima degollada. En su interior hay varios bolsillos secretos.<br><li><b>Aumenta</b> en <b>15</b> la cantidad máxima de cuchillos que puedes llevar.</li><li>Comienzas la partida con <b>15</b> cuchillos adicionales.</li>","name":"Boa sangrienta","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"Unas hojas especiales. Para quienes carezcan de imaginación, solo verán unos cuchillos defectuosos. De pequeño, Ji-Woon deslumbraba al público con sus trucos.<br><li>Los cuchillos rebotan en el entorno dos veces. </li><li>Los rebotes otorgan puntos de sangre adicionales.</li>","name":"Hojas engañosas","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"El álbum debut del Traicionero. Su temática violenta y descarnada hizo que tuviera una acogida de los fans bastante tibia, pero fue muy aclamado entre la crítica.<br><li>Los cuchillos se destrozan al alcanzar el entorno, infligiendo un <b>50 % de desgarro</b> a los supervivientes cercanos.</li>","name":"Álbum \\"Frontera de resurrección\\"","flavor":"\\"Tu susurro sobre mí/<br>Nada más cálido puedo sentir/<br>Quemando cada aliento/<br>Hasta dejarme sin respiración\\".<br>(\\"Susurros cálidos\\", el Traicionero)","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"Unos gemelos clavados en los ojos de una fan sasaeng que cometió el error de acosar a Ji-Woon. Al quitar la sangre, puede apreciarse su espectacular brillo.<br><li>Cuando el medidor de desgarro del superviviente esté a un golpe para llegar al máximo, se mostrará su aura durante <b>6 segundos</b>.</li>","name":"Gemelos de diamante","flavor":"\\"Shh... Ya no tendrás que ver tu propia sangre\\". (Ji-Woon Hak)","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"El primer sencillo de NO SPIN publicado tras la llegada de Ji-Woon a la banda. Tuvo una recepción brutal en todas las listas de éxitos coreanas.<br><li>Los cuchillos atraviesan a los supervivientes.</li><li>Los siguientes supervivientes a los que alcance ese mismo cuchillo sufrirán un <b>50 % de desgarro</b>. </li>","name":"Sencillo \\"Atravesando tu corazón\\"","flavor":"\\"Este amor no se detiene/<br>Te desgarra el corazón/<br>Vayas donde vayas/<br>Te partiré en dos\\".<br>(\\"Atravesando tu corazón\\", NO SPIN)","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"Una foto vítrea moldeada por la mismísima niebla. La intensa mirada de Ji-Woon es el mejor complemento para su diabólica sonrisa.<br><li>Cuando el medidor de desgarro de un superviviente está a un ataque de cuchillo de llegar al máximo, sufrirá el efecto de estado <b>Vulnerabilidad</b>.</li>","name":"Fotografía iridiscente","flavor":"\\"Tranquila, grita mi nombre... Quiero escuchar todo lo que el dolor despierta...\\". (Ji-Woon Hak)","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"Una recopilación de los últimos sonidos de las víctimas de Ji-Woon en un disco de vinilo. Aterrador y cargado de emoción.<br><li>El desgarro que provocan los cuchillos depende de su proximidad al objetivo, con un mínimo de <b>50 %</b>.</li><li>Cada ataque de cuchillo aumenta el daño por desgarro que causan, con un máximo de <b>200 %</b>.</li><li>Si falla un cuchillo, se restablece el valor de desgarro inicial provocado por los mismos.</li>","name":"Recopilación \\"Agonía de muerte\\"","flavor":"\\"No, te lo ruego... No me hagas daño, por favor... No...\\" (Anónimo)","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"Una pulsera electrónica de Umbrella para los visitantes de las instalaciones que también funciona como dispositivo de rastreo.<li><b>Amplía moderadamente</b> el alcance de detección de zombis.</li>","name":"Pulsera de visitante","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"Un manual que recoge los conocimientos de combate cuerpo a cuerpo de S.T.A.R.S. editado por Chris Redfield.<li>Las auras de los zombis se vuelven amarillas durante <b>6 segundos</b> tras atacar a un superviviente.</li>","name":"Manual de combate de S.T.A.R.S.","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"Material médico que sufrió desperfectos durante el caos que asoló Raccoon City.<li><b>Aumenta moderadamente</b> el tiempo que tardan los supervivientes en inyectarse vacunas.</li><li><b>Aumenta ligeramente</b> la duración del efecto Instinto asesino cuando los supervivientes usen una vacuna.</li>","name":"Jeringuilla dañada","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"El intestino delgado de Brian Irons, jefe de policía de Raccoon City. Todo un manjar para los zombis.<li><b>Aumenta ligeramente</b> la velocidad de movimiento de los zombis.</li>","name":"Intestino de Brian","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"El corazón de un zombi destripado. Se considera un residuo peligroso, ya que está plagado de virus.<li><b>Aumenta moderadamente</b> la tasa de mutación al destruir zombis con Golpe de tentáculo.</li><br>","name":"Corazón de zombi","flavor":"\\"No sirve de nada tratar de razonar con esta cosa\\". (Leon S. Kennedy)","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"Aunque no quedó mucho de Mikhail, su ojo izquierdo sobrevivió a la explosión que acabó con él. Toda una delicia para los zombis.<li><b>Aumenta moderadamente</b> la velocidad de movimiento de los zombis.</li>","name":"Ojo de Mikhail","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"La sangre infectada de un agente de policía de Raccoon City.<li><b>Aumenta moderadamente</b> la tasa de mutación al golpear a los supervivientes con Golpe de tentáculo.</li><br>","name":"Sangre de Marvin","flavor":"\\"Y recuerda: si no tienes cuidado, este lugar será tu tumba\\". (Marvin Branagh)","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"Una hormona que agudiza los sentidos y prepara el cuerpo para pelear.<li><b>Aumenta considerablemente</b> la duración del efecto Instinto asesino cuando los supervivientes usen vacunas.</li>","name":"Inyector de adrenalina","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"Una pulsera electrónica de Umbrella para los administradores de las instalaciones. Permite acceder a las zonas altamente protegidas y también funciona como dispositivo de rastreo.<li><b>Amplía considerablemente</b> el alcance de detección de zombis.</li>","name":"Pulsera de administrador","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"Una muestra dañada de un Tyrant T-002 que cayó en combate. Tiene marcas de haber sufrido quemaduras graves.<li><b>Aumenta moderadamente</b> la tasa de mutación al destruir zombis con Golpe de tentáculo.<li>Reduce moderadamente el tiempo de reaparición de zombis.","name":"Resto de Tyrant","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"Una muestra del virus T, desarrollado por la corporación Umbrella, que provoca mutaciones abominables y daños cerebrales en los sujetos de pruebas.<li><b>Aumenta considerablemente</b> la tasa de mutación al destruir zombis con Golpe de tentáculo. ","name":"Muestra del virus T","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"Una hormona que relaja ligeramente al usuario cuando necesite sigilo.<li>Se te aplica el efecto de estado <b>Indetectable</b> durante <b>15 segundos</b> cuando se destruya un zombi.</li>","name":"Inyector de serotonina","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"Los restos enredados de una planta infectada con el virus T que mató a uno de sus investigadores.<li><b>Aumenta considerablemente</b> el tiempo que tienen los supervivientes para abrir las cajas de suministros.","name":"Vid de planta 43 ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"Una lengua prensil y pegajosa que envuelve ágilmente todo lo que toca.<li><b>Aumenta moderadamente</b> la duración de <b>Entorpecimiento</b> de los supervivientes tras sufrir Ponzoña.</li><br>","name":"Lengua de Licker","flavor":"\\"Esto es... como una pesadilla\\". (Claire Redfield)","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"Un parásito empleado en el desarrollo de Némesis tipo T capaz de apropiarse del cerebro de su huésped.<li>Al sufrir Ponzoña, un superviviente sufre el efecto de estado <b>Inconsciencia</b> durante 60 segundos.","name":"Parásito NE-α","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"Tentempié trágicamente aplastado y pringado de sangre tras una pelea reciente. Sin embargo, conserva un aroma delicioso.<li>Muestra el aura de un superviviente durante <b>12 segundos</b> tras desbloquear una caja de suministros.</li>","name":"Sándwich de Jill","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"¿Quién los salvará ahora? Esta cinta de tinta seca tiene algo que vigoriza a los zombis.<li><b>Reduce considerablemente</b> el tiempo de reaparición de zombis.</li><li>Aumenta moderadamente la velocidad de movimiento de los zombis.</li><li>Cuando se reparen <b>5</b> generadores, todos los zombis destruidos reaparecerán en una zona de salida.</li><br>","name":"Cinta de tinta seca","flavor":"\\"Para que lo sepáis, esta será la última vez\\". (Jill Valentine)","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"Una moneda partida en dos con la imagen de un pájaro alrededor de una corona de laureles.<li>Elimina <b>1</b> caja de suministros de la partida.</li><br>","name":"Moneda de recuperación rota","flavor":"\\"Jamás pensé que mi primer día sería así\\". (Leon S. Kennedy)","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"Un símbolo de esperanza para Raccoon City que está completamente destrozado.<li><b>Aumenta tremendamente</b> la velocidad de movimiento de los zombis durante <b>30 segundos</b> tras reparar un generador.</li><br>","name":"Placa de S.T.A.R.S. destrozada","flavor":"\\"S.T.A.R.S....\\". (Némesis)","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"Una placa vítrea moldeada a partir de la mismísima niebla. Representa a una corporación que violó los límites de la moralidad y humanidad en la investigación científica.<li>Los supervivientes sufren el efecto de estado <b>Vulnerabilidad</b> durante <b>12 segundos</b> al usar vacunas.</li><br>","name":"Placa iridiscente de Umbrella","flavor":"\\"Compromiso, honestidad, integridad. Estos son los valores fundamentales que sientan las bases de la corporación Umbrella\\". (Dr. Matt Gorkis)","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/es/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Otorga un <b>50 %</b> de puntos de sangre extra en la categoría Brutalidad.<br><li>Acumulable.</li>","name":"Guirnalda del cardenal","flavor":"\\"Esta guirnalda, fabricada con devoción a base de palos ensangrentados y tripas, suplica la bendición del Ente para conseguir más sangre\\".","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"Otorga un <b>75 %</b> de puntos de sangre extra en la categoría Brutalidad.<br><li>Acumulable.</li>","name":"Guirnalda del cardenal devoto","flavor":"\\"Esta guirnalda, fabricada con devoción a base de palos ensangrentados y tripas, suplica la bendición del Ente para conseguir más sangre\\".","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en la categoría Brutalidad.<br><li>Acumulable.</li>","name":"Guirnalda del cardenal ferviente","flavor":"\\"Esta guirnalda, fabricada con una pasión intensa y eterna a base de palos ensangrentados y tripas, suplica la bendición del Ente para conseguir más sangre\\".","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"Otorga un <b>50 %</b> de puntos de sangre extra en la categoría Malicia.<br><li>Acumulable.</li>","name":"Guirnalda del cuervo","flavor":"\\"Esta guirnalda, fabricada a base de ramas oscurecidas y carbón, suplica la bendición del Ente para conseguir más sangre\\".","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"Otorga un <b>75 %</b> de puntos de sangre extra en la categoría Malicia.<br><li>Acumulable.</li>","name":"Guirnalda del cuervo devoto","flavor":"\\"Esta guirnalda, fabricada con devoción a base de ramas oscurecidas y carbón, suplica la bendición del Ente para conseguir más sangre\\".","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en la categoría Malicia.<br><li>Acumulable.</li>","name":"Guirnalda del cuervo ferviente","flavor":"\\"Esta guirnalda, fabricada con una pasión intensa y eterna a base de ramas oscurecidas y carbón, suplica la bendición del Ente para conseguir más sangre\\".","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"Otorga un <b>50 %</b> de puntos de sangre extra en la categoría Caza.<br><li>Acumulable.</li>","name":"Guirnalda del búho moteado","flavor":"\\"Esta guirnalda, fabricada a base de metales afilados, cuerdas y plumas, suplica la bendición del Ente para conseguir más sangre\\".","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"Otorga un <b>75 %</b> de puntos de sangre extra en la categoría Caza.<br><li>Acumulable.</li>","name":"Guirnalda del búho moteado devoto","flavor":"\\"Esta guirnalda, fabricada con devoción a base de metales afilados, cuerdas y plumas, suplica la bendición del Ente para conseguir más sangre\\".","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en la categoría Caza.<br><li>Acumulable.</li>","name":"Guirnalda del búho moteado ferviente","flavor":"\\"Esta guirnalda, fabricada con una pasión intensa y eterna a base de metales afilados, cuerdas y plumas, suplica la bendición del Ente para conseguir más sangre\\".","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"Otorga un <b>50 %</b> de puntos de sangre extra en la categoría Sacrificio.<br><li>Acumulable.</li>","name":"Guirnalda del alcaudón","flavor":"\\"Esta guirnalda, fabricada a base de palos, cuerdas y huesos, suplica la bendición del Ente para conseguir más sangre\\".","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"Otorga un <b>75 %</b> de puntos de sangre extra en la categoría Sacrificio.<br><li>Acumulable.</li>","name":"Guirnalda del alcaudón devoto","flavor":"\\"Esta guirnalda, fabricada con devoción a base de palos, cuerdas y huesos, suplica la bendición del Ente para conseguir más sangre\\".","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en la categoría Sacrificio.<br><li>Acumulable.</li>","name":"Guirnalda del alcaudón ferviente","flavor":"\\"Esta guirnalda, fabricada con una pasión intensa y eterna a base de palos, cuerdas y huesos, suplica la bendición del Ente para conseguir más sangre\\".","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"Otorga un <b>25 %</b> de puntos de sangre extra en todas las categorías.<br><li>Acumulable.</li>","name":"Cáscara hueca","flavor":"\\"Un capullo irreconocible que ha sido rasgado por lo que albergaba en su interior\\".","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"Otorga un <b>100%</b> de puntos de sangre extra en todas las categorías.<br><li>Personal.</li><li>Acumulable.</li>","name":"Mousse de superviviente","flavor":"\\"Una mousse muy salada\\".","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"Invoca al Ente para evitar la aparición de <b>2</b> cofres.<br><li>Acumulable.</li>","name":"Moneda cortada","flavor":"\\"Dos mitades de una gruesa moneda de metal\\".","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"Invoca al Ente para evitar la aparición de <b>1</b> cofre.<br><li>Acumulable.</li>","name":"Moneda rayada","flavor":"\\"Una moneda desfigurada de origen desconocido\\".","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"Invoca al Ente para <b>reducir ligeramente</b> la <b>distancia</b> entre los ganchos de sacrificio que aparecen en el mundo.<br><li>Acumulable.</li>","name":"Roble mohoso","flavor":"\\"Un trozo de roble húmedo y podrido repleto de moho\\".","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"Invoca al Ente para <b>reducir moderadamente</b> la <b>distancia</b> entre los ganchos de sacrificio que aparecen en el mundo.<br><li>Acumulable.</li>","name":"Roble podrido","flavor":"\\"Un trozo de roble en descomposición con extrañas marcas grabadas\\".","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"Invoca al Ente para <b>reducir considerablemente</b> la <b>distancia</b> entre los ganchos de sacrificio que aparecen en el mundo.<br><li>Acumulable.</li>","name":"Roble Putrefacto","flavor":"\\"Un trozo de roble putrefacto que rezuma un extraño líquido negro\\".","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"Permite <b>matar con tus propias manos al último superviviente</b> durante la próxima partida.<br><li>Secreto.</li>","name":"Memento mori de ciprés","flavor":"\\"Buen trabajo, el último es tuyo\\".","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"Otorga la habilidad de <b>matar con tus propias manos a un superviviente</b> que llegue a la <b>segunda etapa de asimilación</b> durante la próxima partida.<li>Secreto.</li>","name":"Memento mori de marfil","flavor":"\\"Concédeme el favor de matar a uno\\".","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"Permite <b>matar con tus propias manos a todos los supervivientes</b> que lleguen a la <b>segunda etapa de asimilación</b> durante la próxima partida.<li>Secreto.</li>","name":"Memento mori de ébano","flavor":"\\"Juraría que se puso a hablar con la bestia. Se detuvo abruptamente, como parándose a escuchar tranquilamente el susurro de las hojas, y luego... sonrió\\".","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"Todos los supervivientes comienzan la partida separados.<br><li>Secreto.</li>","name":"Velo de separación","flavor":"\\"Un fino velo negro que se está despedazando\\".","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/es/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Permite percibir auras. Cada vez que se repara por completo un generador, podrás ver las auras de los supervivientes que se encuentren a menos de <span class=\\"Highlight1\\">{0} metros</span> de este durante <span class=\\"Highlight2\\">{1} segundos</span>.<br>Cuando se trate del último, podrás ver las auras de todos los supervivientes de la partida durante <span class=\\"Highlight3\\">{2} segundos</span>.","name":"Murmullo amargo","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"Permite percibir auras. Se te revelan las auras de supervivientes agonizantes en un radio de <span class=\\"Highlight1\\">{0} metros</span>.","name":"Acechador de ciervos","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"Tu aura de escalofrío alcanza distancias sobrenaturales. Tu radio de terror aumenta un <span class=\\"Highlight1\\">{0} %</span>. Consigues un <span class=\\"Highlight2\\">{1} %</span> adicional de puntos de sangre en la categoría Malicia.","name":"Desasosiego","flavor":"\\"Deléitate con su miedo\\".","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"Te permite usar sigilo.<br><br>Si te quedas inmóvil durante <span class=\\"Highlight1\\">{0} segundos</span>, se te aplica el efecto de estado <b>Indetectable</b> hasta que te muevas o realices una acción.","name":"Insidia","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"Un maleficio que basa su poder en la esperanza. Te anima la fuerza de tu tótem de maleficio cuando los supervivientes están a punto de escapar.<br>Cuando las puertas de salida se abren, se aplica este maleficio a cualquier tótem opaco que quede en el mapa.</br><br>Cuando este maleficio se activa,<li>los supervivientes sufren el efecto de estado <b><i>Vulnerabilidad</i></b>.</li><li>Tu velocidad de movimiento aumenta en un <span class=\\"Highlight1\\">{0} %</span></li>.<br>Los efectos del maleficio persisten mientras el tótem correspondiente siga en pie.<br>","name":"Maleficio: Nadie escapa de la muerte","flavor":"\\"Y la bestia se volvió más veloz y poderosa, como si el sombrío látigo del Ente estuviera azotando su lomo\\".","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"Un maleficio que basa su poder en la esperanza. La falsa esperanza de los supervivientes te estimula y fortalece tus tótems. Consigues un distintivo por cada tótem apagado o de maleficio que quede en el mapa. <br><li>Cada distintivo te proporciona un <span class=\\"Highlight1\\">{0} %</span> más de puntos de sangre por acciones de la categoría Caza.</li><li>La velocidad de purificación de los supervivientes se reduce un <span class=\\"Highlight2\\">{1} %</span> por cada distintivo.</li><li>Recibes un aviso cuando alguien se pone a manipular un tótem de maleficio.</li><br><i>Los efectos del maleficio perduran mientras su tótem de maleficio correspondiente siga en pie.</i>","name":"Maleficio: La emoción de la caza","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"El fervor con el que cuidas los ganchos hallados en el sótano ha despertado el interés del Ente. Los ganchos del sótano otorgan las siguientes bonificaciones:<br><li>El Ente progresa un <span class=\\"Highlight1\\">{0} %</span> más rápido. </li><li>Los intentos de huida son un <span class=\\"Highlight2\\">{1} %</span> menos efectivos.</li><li>La penalización por intentos de escapar fallidos aumenta un <span class=\\"Highlight3\\">{2} %</span>.</li>","name":"Santuario monstruoso","flavor":"\\"Entonces sabrás que no existe escapatoria. Al colgar en las profundidades, te enfrentas al ser oscuro\\".","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"Sabes dónde dar el golpe para hacerlos sangrar. Tus <i>ataques básicos</i> causan los efectos de estado <b>Laceración</b> y <b>Hemorragia</b>. <b>Hemorragia</b> aumenta <span class=\\"Highlight\\">{0}</span> la profusión de sangre de los supervivientes.<br>El efecto <b>Hemorragia</b> causado por <i>Carnicero chapucero</i> desaparece cuando el superviviente se cura por completo.","name":"Carnicero chapucero","flavor":"\\"Lleva el sadismo en la sangre. No existe una muerte rápida, pues se deleita con el morboso espectáculo de nuestra agonía\\".","tiers":[["ligeramente"],["moderadamente"],["considerablemente"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"Los cuervos que te rodean pueden comunicarse directamente contigo. El <span class=\\"Highlight1\\">{0} %</span> de las veces, los cuervos te dan una pista visual con sus graznidos cuando te encuentras dentro un radio de <span class=\\"Highlight2\\">{1} metros</span>.<br><i>Espías de las sombras</i> tiene un tiempo de recuperación de <span class=\\"Highlight3\\">{2} segundos.</span>","name":"Espías de las sombras","flavor":"\\"En las sombras nos atormentan, torturándonos la mente con cada grito\\".","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"Te recuperas más rápido de los ataques fallidos con tu arma principal. El tiempo de recarga tras <i>ataques básicos</i> fallidos se reduce un <span class=\\"Highlight1\\">{0} %</span>.","name":"Implacable","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"Percibes de manera muy rudimentaria la voz del Ente. Oyes esporádicamente el susurro del Ente cuando te encuentras a menos de <span class=\\"Highlight1\\">{0} metros</span> de algún superviviente.","name":"Murmullos","flavor":"\\"Las motivaciones de la niebla no están claras, pero resulta innegable que suele ponerse del lado de la bestia\\". (Cuaderno)","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"Eres muy sensible a la respiración de tu presa. La respiración de los supervivientes que sufren es un <span class=\\"Highlight1\\">{0} %</span> más ruidosa y la respiración normal lo es un <span class=\\"Highlight2\\">{1} %</span> más.","name":"Aliento","flavor":"“Si no te detienes para recuperar tu aliento... ella lo hará”.","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"Pierden por completo el valor cuando se enfrentan a su propia mortalidad.<br>Por cada superviviente herido, agonizante o enganchado, todos los supervivientes sufren una penalización de velocidad en reparaciones, sabotajes y purificaciones de tótem del <span class=\\"Highlight1\\">{0} %</span>, hasta un máximo del <span class=\\"Highlight1\\">{1} %</span>.","name":"Tanatofobia","flavor":"\\"Juega con nosotros y disfruta con nuestro dolor\\".","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"Desbloquea el potencial de la habilidad de analizar auras. Se te revelan las auras de los supervivientes que se están curando o están siendo curados si se encuentran en un radio de <span class=\\"Highlight1\\">{0} metros</span>.","name":"Vocación de enfermera","flavor":"“Apegada aún a los restos de su pasado, se siente atraída por los que necesitan ayuda”.","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"Tu mera presencia infunde pavor. Los supervivientes que se encuentren dentro de tu radio de terror tienen un <span class=\\"Highlight1\\">{0} %</span> más de probabilidades de activar pruebas de habilidad cuando reparan o curan. El área de éxito de dichas pruebas de habilidad se reduce un <span class=\\"Highlight2\\">{1} %</span>.","name":"Presencia perturbadora","flavor":"\\"Su presencia nos sobreviene\\".","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"Tu enorme fuerza te permite atravesar fácilmente las defensas de tus presas. Rompes <b>generadores, elementos destruibles y palés</b> derribados un <span class=\\"Highlight1\\">{0} %</span> más rápido.","name":"Fuerza brutal","flavor":"\\"Es algo más que músculos. Un poder oscuro motiva a la bestia\\".","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"El ansia por colgar a tu presa hace que te bulla la sangre. Aumenta tu velocidad un <span class=\\"Highlight1\\">{0} %</span> mientras cargas con alguien. Mientras cargas con alguien, tu radio de terror aumenta <span class=\\"Highlight2\\">{1} metros</span>.","name":"Agitación","flavor":"\\"En cierto momento, el ansia por llegar a colgar a uno de nosotros supera incluso el deseo de matarnos\\".","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"Gracias a tus sentidos sobrenaturales puedes ver las perturbaciones que dejan los supervivientes al correr.<br>Las marcas de arañazos que dejan los supervivientes aparecerán <span class=\\"Highlight\\">{0}</span> más cerca.","name":"Depredación","flavor":"\\"No dejes de moverte nunca, y procura mantener siempre cierta ventaja sobre la bestia\\". (Cuaderno)","tiers":[["ligeramente"],["moderadamente"],["considerablemente"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"Con tu olfato de sabueso eres capaz de percibir rastros de sangre a largas distancias. Las marcas de sangre fresca son <span class=\\"Highlight1\\">considerablemente</span> más perceptibles de lo normal, y permanecen visibles durante <span class=\\"Highlight2\\">{0} segundos</span> más.","name":"Sabueso de sangre","flavor":"\\"Como guijarros que reflejan la luz de la luna, mi vida gotea formando un camino sencillo de seguir\\".","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"Posees una vista aguda en medio de la oscuridad nocturna. Tu campo de visión es <span class=\\"Highlight2\\">{0} grados</span> más amplio de lo normal.<br><i>No se acumula con otras mejoras del campo de visión.</i>","name":"Hijo de las sombras","flavor":"\\"Sus ojos, brillando en la oscuridad más profunda, atraviesan la noche hasta atravesarte alma\\".","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"Eres resistente al dolor. Te recuperas de los <b>aturdimientos de palés</b> un <span class=\\"Highlight1\\">{0} %</span> más rápido.","name":"Resistente","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"A diferencia de las demás bestias de la niebla, te has adaptado a la luz. Eres inmune a la ceguera causada por linternas, petardos, granadas aturdidoras y minas explosivas. Verás el aura de los supervivientes que intenten cegarte durante <span class=\\"Highlight1\\">{0} segundos.</span>","name":"Hijo de la luz","flavor":"\\"¡Estos monstruos... se adaptan! Reaparecen con nuevas y extrañas habilidades\\". (Diario de Vigo)","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"Cuando un generador se repara un <span class=\\"Highlight1\\">{0} %</span>, se genera una notificación de ruido intenso y se te aplica el efecto de estado <b>Indetectable</b> durante <span class=\\"Highlight2\\">{2} segundos</span>.","name":"Manitas","flavor":"\\"El Pueblerino fabrica herramientas impresionantes con mera chatarra. Herramientas destinadas a mutilarnos de manera creativa...\\". (Cuaderno)","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"Te <b>obsesionas</b> con un superviviente.<br>Consigues un distintivo cada vez que golpeas con un <i>ataque básico</i> a alguien que no sea la obsesión. <br>Cada uno otorga una reducción acumulable del <span class=\\"Highlight1\\">{0} %</span> en el tiempo de recarga de <i>ataques básicos</i> con éxito. Puedes ganar hasta un máximo de <span class=\\"Highlight2\\">{1}</span> distintivos.<br>Golpear a tu obsesión con un <i>ataque básico</i> te hará perder <span class=\\"Highlight3\\">{2}</span> distintivos. <br>Si tu obsesión muere, dejarás de ganar distintivos.<br><li><i>El asesino no puede <b>obsesionarse</b> con más de un superviviente.</i></li>","name":"Lo mejor para el final","flavor":"\\"La muerte ha llegado a su pueblo, sheriff\\". (Dr. Sam Loomis)","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"Te <b>obsesionas</b> con un superviviente.<br>Cada vez que persigues a tu obsesión y la dejas escapar, ganas un distintivo, hasta un máximo de {0}. <br>Por cada uno que tengas, tu velocidad de movimiento aumenta un <span class=\\"Highlight1\\">{1} %</span>.<br>Cada <i>ataque básico</i> o <i>especial</i> consume un distintivo.<br><li><i>El asesino solo se puede <b>obsesionar</b> con un superviviente a la vez.</i></li>","name":"Jugar con la comida","flavor":"\\"Has engañado a todos excepto a mí, Michael\\". (Dr. Sam Loomis)","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"Te <b>obsesionas</b> con un superviviente.<br>Tu obsesión obtiene un <span class=\\"Highlight1\\">{0} %</span> de bonificación en la velocidad de acción al desenganchar y curar a otros supervivientes.<br>Cada vez que enganches a un superviviente que no sea la obsesión, si la obsesión sigue con vida, obtienes un distintivo.<br>Si la obsesión sigue con vida, el resto de supervivientes sufre una penalización de velocidad en reparaciones, curaciones y sabotajes del <span class=\\"Highlight2\\">{1} %</span>.<br><li><i>El asesino no puede obsesionarse con más de un superviviente.</i></li>","name":"Luz que agoniza","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"Un maleficio que repercute negativamente en la capacidad de percibir auras. Mientras el tótem de maleficio siga activo, cuando golpeas a un enemigo con un <i>ataque básico</i> le provocas el efecto de estado <b>Ceguera</b>. Dicho efecto se mantiene en los últimos <span class=\\"Highlight1\\">{0}</span> supervivientes a los que hayas golpeado.<br><i>Los efectos del maleficio perduran mientras su tótem de maleficio correspondiente siga en pie.</i>","name":"Maleficio: El tercer sello","flavor":"\\"Te ha tocado la piel, ¡llevas la marca de la bruja!\\".","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"Un maleficio que repercute en la habilidad de todos los supervivientes para reparar generadores. <i>Maleficio: Ruina</i> afecta a todos los generadores. Cuando un generador no esté siendo reparado por un superviviente, el progreso de reparación comenzará a revertirse de forma inmediata y automática a un <span class=\\"Highlight1\\">{0} %</span> de la velocidad de reversión normal.<br><br><i>Los efectos del maleficio perduran mientras su tótem de maleficio correspondiente siga en pie.</i><br>","name":"Maleficio: Ruina","flavor":"\\"Una maldición ha caído sobre ti, será tu ruina\\".","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"Un maleficio que basa su poder en la esperanza. La falsa esperanza de los supervivientes despierta tu apetito. Cuando se libera de un gancho a un superviviente que esté al menos a <span class=\\"Highlight1\\">24 metros</span> de distancia, el Devorador de esperanza recibe una medalla.<br><li><span class=\\"Highlight3\\">2 medallas</span>: Obtienes un <span class=\\"Highlight2\\">{0} %</span> de <b><i>impulso de velocidad</i></b> durante <span class=\\"Highlight3\\">10 segundos</span> después de colgar a un superviviente. El impulso de velocidad se activa <span class=\\"Highlight3\\">10 segundos</span> después de colgar a un superviviente.</li><li><span class=\\"Highlight3\\">3 medallas</span>: Los supervivientes sufren el efecto de estado <b><i>Vulnerable</i></b>.</li><li><span class=\\"Highlight2\\">5 medallas</span>: Otorga la habilidad de matar supervivientes con tus propias manos.</li><br><i>Los efectos del maleficio persisten mientras el tótem correspondiente siga en pie.</i>","name":"Maleficio: Devoradora de esperanza","flavor":"\\"Si no haces nada, tus manos estarán manchadas de sangre. Si los salvas, aumentarás su apetito\\".","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"Tu mera presencia infunde pavor. Los supervivientes que se encuentren dentro de tu radio de terror se mueren de miedo y se vuelven más torpes.<br>Los objetos de los supervivientes afectados se consumen un <span class=\\"Highlight1\\">{0} %</span> más rápido.","name":"Presencia abrumadora","flavor":"\\"¡Mierda! ¡Se me ha caído la gasa!\\".","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"Un acercamiento meticuloso y una aplicación aterradora.<br>Durante una persecución, tu radio de terror aumenta <span class=\\"Highlight1\\">{0} metros</span>. En los demás casos, tu radio de terror disminuye <span class=\\"Highlight2\\">{0} metros</span> y tu campo de visión aumenta <span class=\\"Highlight3\\">{1} grados</span>.<br><i>Las ventajas del campo de visión no se acumulan.</i>","name":"Monitorización y abuso","flavor":"\\"¡Es la hora del tratamiento!\\". (El Doctor)","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"Te impulsa el odio hacia que se arreglen los generadores.<br>Al llevar a cabo la acción <b>Dañar generador</b>, lo sobrecargas. El próximo superviviente que interaccione con él se enfrentará a una prueba de habilidad <span class=\\"Highlight1\\">tremendamente</span> difícil. Si no la supera, el índice de reparación se revertirá un <span class=\\"Highlight2\\">{0} %</span> adicional.<br>Si la supera, la cantidad arreglada no aumentará, pero sí evitará que el generador explote.","name":"Sobrecarga","flavor":"\\"Es una trampa. Pero una trampa a la que te tienes que enfrentar...\\". (El Doctor)","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"Tus ganas de matar son tan intensas que pierdes la conexión con el Ente por un instante y te vuelves totalmente impredecible.<br><br>Aplica el efecto de estado <b>Indetectable</b> tras llegar a nivel I de Sed de sangre y se disipa en cuanto pierdes Sed de sangre.<br><br><li>Obtienes un <span class=\\"Highlight1\\">{0} %</span> extra de puntos de sangre con acciones de la categoría Caza.</li>","name":"Bestia de presa","flavor":"\\"¿Dónde se ha metido?\\".","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"Permite percibir auras. Se te revelan las auras de los supervivientes durante <span class=\\"Highlight1\\">{0} segundos</span> cuando entran en el sótano y tú estás a más de <span class=\\"Highlight2\\">{1} metros</span> de distancia.<br><i>Instinto territorial</i> solo se puede activar una vez cada <span class=\\"Highlight3\\">{2} segundos</span>.","name":"Instinto territorial","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"Un maleficio que basa su poder en la pérdida de la esperanza. Cazas entonando una irresistible y funesta melodía que afecta a la capacidad de atención de tus presas. Los supervivientes sufren una penalización del <span class=\\"Highlight1\\">{0} %</span> de regresión si fallan una prueba de habilidad mientras están curando o reparando.<br>Cada vez que cuelgas de un gancho a un superviviente, Nana de cazadora gana en poder. Repercute en las advertencias de las pruebas de habilidad de curación y reparación:<br><li><b>De 1 a 4 distintivos:</b> Se reduce el tiempo que transcurre entre el sonido de advertencia y la prueba de habilidad.</li><li><b>5 distintivos:</b> Se elimina el sonido de advertencia previo a las pruebas de habilidad.</li><br><i>Los efectos del maleficio perduran mientras su tótem de maleficio correspondiente siga en pie.</i>","name":"Maleficio: Nana de cazadora","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"El trauma causado por tus brutales ataques hace que pedir ayuda resulte extremadamente difícil.<br>Los supervivientes que estén a más de <span class=\\"Highlight1\\">{2} metros</span> de distancia no verán a los supervivientes que hayas dejado agonizantes con ataques básicos.<br>Los supervivientes que hayas dejado agonizantes con ataques básicos se arrastrarán un <span class=\\"Highlight2\\">{1} % más lento</span> a lo largo de <span class=\\"Highlight3\\">{0} segundos</span>.<br>Durante este tiempo, los supervivientes sufrirán el efecto de estado <b>Ceguera</b>.","name":"Noqueo","flavor":"\\"Ah, esa pistola es un asco. A la antigua usanza... ¡De las de almádena! Verás, así es mucho mejor. Así mueren mejor\\". (Nubbins Sawyer)","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"Un profundo vínculo con el Ente te permite percibir auras. Tras colgar a un superviviente, podrás ver el aura del resto durante <span class=\\"Highlight1\\">{0} segundos</span> si están a más de <span class=\\"Highlight2\\">{1} metros</span> de distancia del gancho.<br><li>Cada vez que cuelgas a un superviviente por primera vez, consigues un multiplicador acumulable de puntos de sangre del <span class=\\"Highlight3\\">{2} %</span> hasta un máximo del <span class=\\"Highlight4\\">{3} %</span>.<br>Esta bonificación solo se concede después de la partida.</li>","name":"Barbacoa y chile","flavor":"\\"Matar no me produce ningún placer. Hay cosas que uno tiene hacer, sin más. No tienen por qué gustarte\\". (Drayton Sawyer)","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"Tus violentos ataques obligan a los supervivientes a soltar los objetos que llevan encima. El Ente consumirá dichos objetos tras <span class=\\"Highlight1\\">{0} segundos</span> si no los recogen.<br>Un aura blanca mostrará los objetos del suelo que estén a un máximo de <span class=\\"Highlight2\\">{1} metros</span>. El aura de los objetos que estén en el suelo se irá volviendo de color rojo de forma progresiva hasta que el Ente los consuma del todo.","name":"Muerte de Franklin","flavor":"\\"Sally, oigo algo. ¡Para! ¡Para!\\". (Franklin)","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"La presión añadida ante la posibilidad de perder a tus presas te imbuye de ira y te proporciona una motivación insospechada. Enfurecimiento crece en poder cada vez que un superviviente termina de reparar un generador.<br><li>Por cada generador completado, recibes una bonificación acumulable de velocidad del <span class=\\"Highlight1\\">{0} %</span> durante el resto de la partida a la hora de recoger o soltar objetos, saltar, dañar generadores y romper palés.</li>","name":"Enfurecimiento","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"Te <b>obsesionas</b> con un superviviente. Cada vez que golpeas a tu obsesión con un <i>ataque básico</i>, aumentas en <span class=\\"Highlight1\\">{0} segundos</span> el tiempo que tardan en abrirse las puertas de salida, hasta un máximo de <span class=\\"Highlight2\\">{1} segundos adicionales</span>.<br>La obsesión es inmune a <i>Recuérdame.</i><br><li><i>El asesino no puede <b>obsesionarse</b> con más de un superviviente.</i></li>","name":"Recuérdame","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"En cuando se abre una puerta de salida, Guardián de sangre se activa. Verás las auras de los supervivientes que se encuentren en las zonas de salida. <br>Una vez por partida, si cuelgas a un superviviente mientras Guardián de sangre esté activa, invocarás al Ente, que bloqueará las dos salidas para todos los supervivientes durante <span class=\\"Highlight1\\">{0} segundos </span>.","name":"Guardián de sangre","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"Tus ingeniosas modificaciones para los ganchos te alertan cuando son manipulados.<br><li>Si un superviviente empieza a sabotear un gancho, recibes una notificación.</li><li>Mientras cargues con un superviviente, verás el aura de cualquier superviviente que esté a menos de <span class=\\"Highlight1\\">{0} metros</span> del gancho.</li>","name":"Truco del verdugo","flavor":"\\"Nada de excusas, ni de equivocaciones... ni de lágrimas\\". (Amanda Young)","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"Permite percibir auras. Los generadores que se estén revirtiendo se iluminan con un aura blanca. Cuando se revierten del todo, el aura se vuelve amarilla durante <span class=\\"Highlight1\\">{0} segundos</span>.<br>La distancia a la que se percibe el ruido de las reparaciones aumenta <span class=\\"Highlight2\\">{1} metros</span>.","name":"Supervisión","flavor":"\\"¿Vas a portarte bien?\\". (Amanda Young)","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"Cuando un superviviente rescata a otro de un gancho a una distancia de al menos <span class=\\"Highlight1\\">{0} metros</span> de ti, <i>Toma una decisión</i> hace gritar al superviviente y le aplica el efecto de estado <b><i>Vulnerabilidad</i></b> durante <span class=\\"Highlight2\\">{1} segundos</span>.<br><i>Toma una decisión</i> tiene un tiempo de recarga de <span class=\\"Highlight3\\">{2} segundos</span>. ","name":"Toma una decisión","flavor":"\\"Te sorprenderían las herramientas que pueden salvar vidas\\". (Amanda Young)","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"Sujetas con tanta fuerza a los supervivientes que su posibilidad de liberarse es casi nula. El efecto del forcejeo de los supervivientes se reduce un <span class=\\"Highlight1\\">{0} %</span>. El tiempo necesario para desembarazarse de ti aumenta un <span class=\\"Highlight2\\">{1} %</span>.","name":"Apretón de hierro","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"Tu mera presencia infunde pavor. Los supervivientes que se encuentren dentro de tu radio de terror sufren una penalización del <span class=\\"Highlight1\\">{0} %</span> en su velocidad de curación.<br>","name":"Coulrofobia","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"Un profundo vínculo con el Ente te proporciona una fuerza descomunal. Tras colgar a un superviviente en un gancho, se pierde instantáneamente el <span class=\\"Highlight1\\">{0} %</span> del progreso del siguiente generador que dañes. Tras la acción de Dañar generador, la reversión de la reparación proseguirá a la velocidad habitual.<br><i>Pim, pam, pum</i> estará activa durante <span class=\\"Highlight1\\">{1} segundos</span> después de colgar al superviviente.","name":"Pim, pam, pum","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"Tu velocidad de salto aumenta un <span class=\\"Highlight1\\">{0} %</span>.<br>El Ente bloquea durante <span class=\\"Highlight1\\">{1} segundos cada lugar por el que saltes</span>.<br>Solo se bloquea 1 lugar al mismo tiempo debido a esto. El bloqueo solo afecta a supervivientes. <br>No se aplica a palés.","name":"Desconcierto","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"Cada palé que rompas incrementará la ira del Ente.<br>Tras romper <span class=\\"Highlight1\\">{0} palés</span>, la próxima vez que te aturdan con uno el Ente romperá el palé al instante.<br>Aun así, sufrirás la penalización del efecto de aturdimiento.","name":"Furia espiritual","flavor":"\\"La furia es su sangre\\".","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"Aparecerán dos tótems de maleficio en la partida.<br>Cuando alguno de los supervivientes purifique uno de los dos tótems atrapados, todos los supervivientes se verán afectados por el <span class=\\"Highlight3\\">efecto de estado Vulnerabilidad</span> durante <span class=\\"Highlight1\\">{0} segundos </span>.<br>El tótem de maleficio atrapado restante se convertirá inmediatamente en un tótem opaco.","name":"Maleficio: Tierra embrujada","flavor":"\\"Su hogar se convirtió en profano\\".","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"Te <b>obsesionas</b> con un superviviente.<br>Cada vez que se complete un generador, tu obsesión podrá ver tu aura durante <span class=\\"Highlight1\\">{0} segundos</span>.<br>Cada vez que se complete un generador, podrás ver dónde se encuentran todos los supervivientes durante <span class=\\"Highlight2\\">{1} segundos</span>.<br>En cuanto se completen todos los generadores, la obsesión pasa a sufrir el efecto de estado <span class=\\"Highlight3\\">Vulnerabilidad</span>, y el asesino podrá <span class=\\"Highlight3\\">matarla</span>.<br><li><i>El asesino no puede obsesionarse con más de un superviviente.</i></li>","name":"Rencor","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"Cualquier generador a menos de <span class=\\"Highlight1\\">{0} metros</span> que esté siendo reparado por dos o más supervivientes se iluminará con un aura amarilla. La primera vez que esto ocurra con cada generador, Discordancia activará una notificación de ruido intenso sobre este. Si el generador pasa a estar demasiado lejos o hay menos de dos supervivientes reparándolo, el aura permanecerá visible durante otros <span class=\\"Highlight2\\">4 segundos</span>.<br>","name":"Discordancia","flavor":"\\"Los listillos siempre mueren. Nosotros nos aseguramos de ello\\". (La Legión)","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"Mientras cargas con un superviviente, los <i>ataques básicos</i> que falles no tendrán tiempo de recarga y, si logras golpear a otro superviviente<i></i>, el temporizador de forcejeo del que llevas a cuestas se detendrá durante <span class=\\"Highlight1\\">{0} segundos</span>.<br>","name":"Furia ciega","flavor":"\\"Ya no hay forma de salir de esto. Se nos da demasiado bien\\". (La Legión).","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"Abres taquillas un <span class=\\"Highlight1\\">{0} %</span> más rápido.<br><br>Cuando un superviviente sale de una taquilla, se ve afectado por el efecto de estado Vulnerabilidad durante <span class=\\"Highlight1\\">{2} segundos</span> y grita, revelando su ubicación durante <span class=\\"Highlight1\\">{1} segundos</span>.<br>","name":"Doncella de hierro","flavor":"\\"Este no es lugar para cobardes\\". (La Legión)","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"Tus plegarias invocan a una fuerza oscura que reduce las posibilidades de los supervivientes. El Ente bloquea los <span class=\\"Highlight1\\">{0} generadores</span> que están ubicados más lejos de ti durante <span class=\\"Highlight1\\">{1} segundos</span> al principio de la partida.<br>Los supervivientes no pueden reparar esos generadores mientras dure el efecto. Los generadores afectados se iluminarán con un aura blanca.<br>","name":"Intervención corrupta","flavor":"\\"Se sabrá en todas partes que los dioses maldicen a los infieles\\". (La tablilla de Adiris, 3.7)","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"Se te acelera el corazón al oír los gritos de los infieles.<br>Cualquier superviviente que esté dentro de tu radio de terror cuando dejes agonizante a alguien gritará y te revelará su ubicación durante <span class=\\"Highlight1\\">{0} segundos</span>.","name":"Terror contagioso","flavor":"\\"El terror se apodera de los infieles, y gritan a los pies de los caídos\\". (Himno de alabanza, 11.4)","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"Tu exhibición de poder genera una ola de pánico que se extiende por todo el terreno.<br><br>Te obsesionas con un superviviente. Golpear a tu obsesión con un <i>golpe básico</i> le transfiere tu radio de terror durante <span class=\\"Highlight2\\">{1} segundos</span> y lo establece en <span class=\\"Highlight1\\">{0} metros</span>. Mientras dure el efecto, se te aplica el efecto de estado <b>Indetectable</b>.<br><br>El superviviente con el radio de terror transferido también se considera \\"dentro del radio de terror\\" a todos los efectos.<br><br><li><i>El asesino no puede <b>obsesionarse</b> con más de un superviviente.</i></li><br>","name":"Devoción oscura","flavor":"\\"Y el terror se apoderará del infiel insolente que anunciará falsamente mi advenimiento\\". (La tablilla de Adiris, 48.9)","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"Tus sentidos se agudizan en el reino oscuro del Ente.<br><br>Permite percibir auras. El aura de cualquier superviviente que lleve a cabo una acción rápida dentro de una distancia de <span class=\\"Highlight1\\">48 metros</span> se te revelará durante <span class=\\"Highlight2\\">{0} segundos</span>.<br><br><i>Soy todo oídos</i> solo se puede activar una vez cada <span class=\\"Highlight3\\">{1} segundos</span>.<br>","name":"Soy todo oídos","flavor":"\\"No hay de qué preocuparse. Llevo toda la vida preparándome para esto\\". (Ghost Face)","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"Tus oscuros diseños y tu maliciosa tranquilidad enardecen al Ente.<br><br>Tras atrapar a un superviviente, el Ente bloqueará todos los generadores que no se estén reparando en ese momento, e impedirá que se puedan reparar durante <span class=\\"Highlight1\\">{0} segundos</span>. El aura de los generadores afectados aparecerá iluminada en blanco.<br><br><i>Temblores trepidantes</i> solo se puede activar una vez cada <span class=\\"Highlight2\\">{1} segundos</span>.<br>","name":"Temblores trepidantes","flavor":"\\"La noche está a mi favor y aquí no tiene fin\\". (Ghost Face)","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"Te <b>obsesionas</b> con un superviviente. Acechas en las sombras y eliminas a tus víctimas una a una. Cuando cuelgas a tu obsesión, <i>Persecución furtiva</i> recibe un distintivo, hasta un máximo de <span class=\\"Highlight1\\">{0}</span>.<br><br>Cada distintivo reduce tu radio de terror <span class=\\"Highlight2\\">{1} metros</span> durante una persecución.<br><br>Cuando un superviviente rescata a tu obsesión de un gancho, el rescatador se convierte en tu obsesión. Pierdes todos tus distintivos si la obsesión es sacrificada o asesinada.<br><br><li><i>El asesino no puede tener más de una <b>obsesión</b> a la vez.</i></li><br>","name":"Persecución furtiva","flavor":"\\"No tienes ni idea de lo que tengo planeado para ti. Será noticia durante semanas. Me aseguraré de ello personalmente\\". (Ghost Face)","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"Tu misteriosa presencia sobrecarga el ambiente y afecta a los dispositivos tecnológicos.<br><br>Al dejar agonizante a un superviviente con <i>un ataque básico</i>, todos los generadores que estén dentro de un radio de <span class=\\"Highlight1\\">{0} metros</span> explotan al instante y comienzan a revertirse. Los generadores afectados por Sobretensión pierden inmediatamente un <span class=\\"Highlight2\\">{1} %</span> de su progreso.<li><i>Sobretensión</i> solo se puede activar una vez cada <span class=\\"Highlight3\\">{2} segundos</span>.</li><br>","name":"Sobretensión","flavor":"\\"Al parecer, la criatura influye de alguna manera en la electricidad y los aparatos electrónicos cercanos\\". (Laboratorio Nacional de Hawkins)","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"Tu inquietante presencia agota y debilita a tu presa.<br><br>Cuando los supervivientes estén reparando generadores, sufrirán el <b>efecto de estado Agotamiento</b>.<br><br>Cuando los supervivientes estén reparando un generador, los temporizadores del <b>efecto de estado Agotamiento</b> se detendrán y el <b>efecto</b> pasará a durar <span class=\\"Highlight2\\">{1} segundos</span> tras haber finalizado la reparación.<br>","name":"Quebrantamentes","flavor":"\\"La aparente telepatía del espécimen puede provocar sensación de terror y cansancio en los individuos cercanos\\". (Laboratorio Nacional de Hawkins)","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"Tus vínculos con el mundo sobrenatural se manifiestan cuando tu presa trata de escapar.<br><br>Cada vez que se repara por completo un generador, todas las ventanas y los lugares por los que se pueda saltar que se encuentren en un radio de <span class=\\"Highlight1\\">{0} metros</span> quedan bloqueados para todos los supervivientes durante <span class=\\"Highlight2\\">{1} segundos</span>. <br><br>Durante ese tiempo, ves el aura de todos los lugares de salto bloqueados por <i>Restricción cruel</i>.<br>","name":"Restricción cruel","flavor":"\\"Parece que el espécimen es capaz de alterar el estado de los objetos cercanos, como si existieran también en una dimensión distinta de la nuestra\\". (Laboratorio Nacional de Hawkins)","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"Permite percibir auras. Estás alerta mentalmente y te conoces los puntos clave del campo de batalla.<br><br>Las auras de todos los palés, muros destruibles y saltos se te revelan a una distancia de <span class=\\"Highlight1\\">{0} metros</span>.<br>","name":"Tácticas de zanshin","flavor":"\\"En la fuerza de tu enemigo hay debilidad\\". (Doctrina de Renjiro, 12:5)","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"La agonía se vuelve contagiosa.<br><br>Al colgar a un superviviente, todos los supervivientes heridos se ven afectados por los efectos de estado <span class=\\"Highlight1\\">Hemorragia</span> y <span class=\\"Highlight1\\">Agotamiento</span> durante <span class=\\"Highlight2\\">{0} segundos</span>.<br><br><i>Eco sangriento</i> tiene una recarga de <span class=\\"Highlight3\\">{1} segundos.</span><br>","name":"Eco sangriento","flavor":"\\"Ataca a un enemigo con precisión y sus aliados lo sentirán\\". (Doctrina de Renjiro, 6:3)","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"Buscas venganza contra los que te han hecho daño. Cuando un superviviente te ciega o te aturde haciendo uso de un palé o de una taquilla, se convierte en tu obsesión.<br><br>Cuando un superviviente nuevo se convierte en la obsesión, se le aplica el efecto de estado <span class=\\"Highlight1\\">Inconsciencia</span> durante <span class=\\"Highlight2\\">{0} segundos</span> y se te revela su aura durante <span class=\\"Highlight3\\">{1} segundos</span>.<br><br><li><i>El asesino no puede <b>obsesionarse</b> con más de un superviviente.</i></li><br>","name":"Némesis","flavor":"\\"Solo un necio le escupiría a un demonio a la cara y cantaría victoria\\". (Doctrina de Renjiro, 4:9)","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"Tienes oído para detectar cuándo funcionan a la perfección las máquinas.<br><br>Después de golpear a un superviviente <span class=\\"Highlight1\\">{0}</span> veces con tu <i>ataque básico</i>, <i>Oído para la maquinaria</i> se activa durante <span class=\\"Highlight2\\">{1} segundos</span>.<br><br>Mientras <i>Oído para la maquinaria</i> esté activa, cada vez que un superviviente supere una prueba de habilidad mientras repare, el generador brillará con un aura amarilla hasta que no quede nadie reparándolo.<br>","name":"Oído para la maquinaria","flavor":"\\"A veces el mejor trabajo de un hombre es el que lo lleva a la tumba\\". (El alcaide)","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"Te <b>obsesionas</b> con un superviviente.<br><br>Tras colgar a tu obsesión, <i>Interruptor del hombre muerto</i> se activa durante los siguientes <span class=\\"Highlight1\\">{0} segundos</span>. <br><br>Mientras esté activo, cualquier superviviente que deje de reparar un generador antes de que esté completamente reparado hace que el Ente bloquee el generador hasta que acabe el efecto de <i>Interruptor de hombre muerto</i>. <br><br>Los generadores afectados se iluminarán con un aura blanca.<br><br><i>El asesino no puede <b>obsesionarse</b> con más de un superviviente.</i><br>","name":"Interruptor del hombre muerto","flavor":"\\"He visto la expresión en la cara de un hombre cuando se da cuenta de que va a morir\\". (Caleb Quinn)","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"Una maldición que se desata cuando se la destruye. Aquellos que te contraríen serán castigados.<br><br>Cualquier superviviente que purifique un tótem apagado sufrirá el efecto de estado <b>Inconsciencia</b> durante <span class=\\"Highlight1\\">{0} segundos</span>.<br><br>Si se purifica cualquier tótem de maleficio, incluido este, se revelarán las auras de todos los supervivientes durante <span class=\\"Highlight2\\">{1} segundos</span>.<br>","name":"Maleficio: Represalias","flavor":"\\"Serás idiota, tú mismo acabas de apretar el gatillo\\". (Caleb Quinn)","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"Quienes se interpongan en el camino del deber sufrirán una dura sentencia.<br><br>Los supervivientes que reciben un golpe por protección sufren el efecto de estado <b>Desesperanza</b> durante <span class=\\"Highlight1\\">{0} segundos.</span>","name":"Imposición de penitencia","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"Guías a tus víctimas por un camino de dolor y castigo.<br><br>Tras golpear un generador, se te aplica el efecto <b>Indetectable</b> hasta que el progreso del generador deje de revertirse o hasta que un superviviente quede herido o agonizante por cualquier medio. Durante este tiempo, los supervivientes podrán ver el aura del generador.<br><br>Este efecto solo se puede activar una vez cada <span class=\\"Highlight1\\">{2} segundos</span>.","name":"Rastro de tormento","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"Aquellos cuyas vidas se entrelazan en la oscuridad están destinados a sufrir juntos.<br><br>Cuando un superviviente cura un estado de salud a otro a al menos <span class=\\"Highlight1\\">{0} metros</span> del asesino, el superviviente que esté realizando la curación gritará, revelará su ubicación y activará <i>Vínculo mortal</i> durante los siguientes <span class=\\"Highlight2\\">{1} segundos.</span> Durante ese tiempo, el superviviente sufrirá el efecto de estado <b>Inconsciencia</b> cuando esté a más de <span class=\\"Highlight3\\">{2} metros</span> del superviviente al que ha curado. ","name":"Vínculo mortal","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"Tras golpear un generador, el primer superviviente que interaccione con él durante los siguientes <span class=\\"Highlight1\\">{0} segundos</span> gritará, revelará su ubicación durante <span class=\\"Highlight2\\">{1} segundos</span> y sufrirá el efecto de estado <b>Vulnerabilidad</b> durante <span class=\\"Highlight3\\">{2} segundos</span>.<br><br><i>Agarre del dragón</i> tiene un tiempo de recarga de <span class=\\"Highlight4\\">{3} segundos</span>.<br>","name":"Agarre del dragón","flavor":"\\"Este compuesto tiene tanto potencial... que hasta la cantidad más mínima causa efectos sobrenaturales\\". (Diario de Talbot Grimes)","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"Un maleficio que hace que te ganes el favor del Ente cuando hay un derramamiento de sangre.<br><br>Al golpear a un superviviente con un <i>ataque básico</i>, el Ente mantendrá en su lugar los palés que estén a un máximo de <span class=\\"Highlight1\\">{0} metros</span> de tu ubicación durante <span class=\\"Highlight2\\">{1} segundos</span>. No es posible derribar estos palés.<br><br><i>Maleficio: Favor de sangre</i> tiene un tiempo de recarga de <span class=\\"Highlight3\\">{2} segundos</span>.<br>","name":"Maleficio: Favor de sangre","flavor":"\\"No es nada descabellado sugerir que las partidas son una especie de respuesta biológica\\". (Diario de Talbot Grimes)","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"Mientras <i>Maleficio: Inmortal</i> esté activo, se revelarán las auras de los supervivientes que se encuentren a una distancia máxima de <span class=\\"Highlight1\\">{0} metros</span> de cualquier tótem apagado.<br><br>Si alguien purifica un tótem de maleficio distinto, el maleficio vinculado de este último se transferirá al tótem de Maleficio: Inmortal, sustituyéndolo. Los distintivos que tuviera el maleficio de origen también se transfieren.","name":"Maleficio: Inmortal","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"Proteges lo poco que tienes y prestas atención a la más mínima injerencia con tus posesiones.<br><br>Los supervivientes revelan su posición cuando interaccionen con un cofre o recojan un objeto a una máxima de <span class=\\"Highlight1\\">{0} metros</span> de tu ubicación.<br><br>La partida comienza con hasta <span class=\\"Highlight1\\">{1}</span> cofres adicionales en el entorno.","name":"Acaparadora","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"Como la vida no te ha tratado bien, quieres complicársela al resto del mundo.<br><br>Cuando dañes un generador, se revertirá el progreso de hasta <span class=\\"Highlight1\\">{0}</span> generadores aleatorios.<br><br>Si se está reparando alguno de esos generadores, activa una prueba de habilidad difícil para cada superviviente involucrado.<br><br><i>Opresión</i> tiene un tiempo de recarga de <span class=\\"Highlight2\\">{1}</span> segundos. <br>","name":"Opresión","flavor":"\\"Condénalos, igual que ellos harían con nosotros\\".\\\\ (Charlotte Deshayes)","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"Se acerca el fin y decides asestar el golpe final.<br><br>Cada vez que se complete un generador, aumenta el poder de Golpe de gracia. Obtén un distintivo.<br><br>Consume un distintivo para aumentar la distancia de la próxima embestida un <span class=\\"Highlight1\\">{0} %</span>.","name":"Golpe de gracia","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"Tu carisma sin parangón deja deslumbrados a todos.<br><br>Al llevar a un superviviente, los demás supervivientes en tu radio de terror sufrirán el efecto de estado <b>Vulnerabilidad</b>.<br>El efecto dura <span class=\\"Highlight1\\">{0} segundos</span> en aquellos supervivientes que se alejen de tu radio de terror o permanezcan en él cuando enganches o sueltes al superviviente al que llevas.<br><i>Deslumbrado</i> tiene un tiempo de recarga de <span class=\\"Highlight2\\">{1} segundos</span> cuando ya no lleves a un superviviente.<br>","name":"Deslumbrado","flavor":"\\"Disfruta del momento, la mayoría no llegan tan lejos\\". (Ji-Woon Hak)","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"Un maleficio que asegura una manipulación absoluta a quienes son inferiores a ti.<br><br>El Ente bloquea una ventana durante<span class=\\"Highlight1\\"> {0} segundos</span> cuando un superviviente realiza un salto <b>acelerado</b> a través de ella.<br><br><i>Los efectos del maleficio perduran mientras su tótem de maleficio correspondiente siga en pie.</i><br>","name":"Maleficio: Control de masas","flavor":"\\"Eres igual que los demás; no sabes controlarte\\". (Ji-Woon Hak)","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"No todo el mundo puede acceder a la sala vip, obviamente.<br><br>Tras enganchar a un superviviente por primera vez, <i>Sin escapatoria</i> gana un distintivo.<br>Cuando se repare el último generador, el Ente bloquea ambos interruptores de la puerta de salida durante <span class=\\"Highlight1\\">{0} segundos</span>, y <span class=\\"Highlight2\\">{1} segundos</span> adicionales por cada distintivo que tengas.<br>","name":"Sin escapatoria","flavor":"\\"El sonido de tu sangre derramándose... Quiero oírlo otra vez\\". (Ji-Woon Hak)","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"Has sido creado para rastrear y aniquilar objetivos.<br><br>Al comienzo de la partida, podrás ver las auras de todos los supervivientes durante <span class=\\"Highlight1\\">{0} segundos.</span><br><br><span class= \\"FlavorText\\">\\"... sabe lo que quiere y no se detendrá hasta conseguirlo\\". (Carlos Oliveira)<\\\\span>","name":"Acecho letal","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"Sabes cómo agredir al miembro de un equipo para desatar el pánico.<br><br>Cuando provocas una herida a un superviviente ileso con un ataque básico, todos los supervivientes heridos sufren el efecto de estado <b>Inconsciencia</b> durante <span class=\\"Highlight1\\">{0} segundos.</span><br><I>Histeria</i> solo se puede activar una vez cada <span class=\\"Highlight2\\">{1} segundos.</span><br><br><span class= \\"FlavorText\\">\\"Perdona, me he puesto un poco nervioso. No sabía qué esperarme\\". (Robert Kendo)","name":"Histeria","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"El parásito NE-α te proporciona la inteligencia y consciencia necesarias para poner una trampa.<br><br>Tras patear un generador, su aura se iluminará de color amarillo. Cuando dejas a un superviviente en estado agonizante con un ataque básico, explotarán todos los generadores afectados, revirtiendo su progreso un <span class=\\"Highlight1\\">{0} %</span> y haciendo que su aura desaparezca.<br>Cualquier superviviente que esté reparando un generador cuando explote, gritará y sufrirá el efecto de estado Incapacitación durante <span class=\\"Highlight2\\">{1} segundos</span><br><i>Erupción</i> tiene un tiempo de recarga de <span class=\\"Highlight3\\">{2} segundos.</span><br><br><span class= \\"FlavorText\\">\\"¿Sabe utilizar armas?\\". (Jill Valentine)","name":"Erupción","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/es/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Evan MacMillan adoraba a su padre. No solo por ser el heredero de su gran fortuna, sino por cómo administraba su finca. Educado con mano firme, Evan pasó a dirigir a los trabajadores con mano de hierro. La producción siempre era alta y la finca MacMillan prosperó bajo la dirección de padre e hijo. Cuando la salud mental de Archie MacMillan empezó a deteriorarse, Evan lo protegió de la chusma que quería una parte de su fortuna. Hacía todo lo que su padre le pedía, fuese lo que fuese.<br><br>Cuando Archie MacMillan perdió la cabeza del todo, Evan pasó a ser su brazo armado y se convirtió en el mayor asesino de masas de la historia moderna. Nunca pudieron demostrar que había llevado a más de cien hombres a los túneles antes de detonar los explosivos y condenarlos a una muerte segura. La historia de la finca MacMillan es una historia de riqueza y poder con un final terrorífico. No se sabe el número de víctimas que cayeron víctimas de padre e hijo. No hay ningún indicio sobre qué pasó con Evan MacMillan. Su padre es otro rompecabezas sin resolver. Su cuerpo sin vida fue hallado, solo y abandonado, en el sótano de un almacén.<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"Philip Ojomo llegó a los Estados Unidos sin más equipaje que la esperanza de un nuevo comienzo. Se alegró mucho cuando le ofrecieron un trabajo en el desguace Autohaven. Se trataba de un pequeño cementerio de automóviles donde los policías sobornados hacían la vista gorda con los negocios turbios que allí se cocían. A Ojomo no le importaba. Había sido testigo de actividades criminales en su país, pero mientras no lo implicasen a él, no se metía en problemas. Se limitaba a arreglar coches y a controlar la machacadora. Algo que se le daba muy bien. Entraba un coche y salía un pequeño cubo de metal.<br><br>No fue hasta un día gris en el que, con gran sorpresa, vio que brotaba sangre de uno de los coches sin comprimir. Cuando abrió el maletero, vio a un joven amordazado, maniatado y con la mirada aterrada. Ojomo liberó al chico, que apenas pudo correr unos metros antes de que el jefe de Ojomo lo atrapase y le rajase la garganta. Cuando Ojomo le pidió explicaciones, este le contó que todo este tiempo había estado trabajando como verdugo, ya que casi todos los coches tenían a alguien dentro y se trataba de un \\"servicio\\" más que el desguace proporcionaba a ciertos \\"clientes\\". Ojomo se puso hecho una furia. Tiró a su jefe a la machacadora y dejó que lo aplastase. La cabeza se había quedado fuera, así que Ojomo la agarró y la separó del cuerpo, sacando la espina dorsal con ella. Luego, se marchó y nadie volvió a saber de él.<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"Este niño sin nombre, vástago de los adinerados terratenientes Max y Evelyn Thompson, fue el hijo no deseado de unos padres despiadados. Al estar horriblemente desfigurado, lo apartaron de la sociedad. Estaban tan avergonzados de su hijo que lo encerraron en una habitación y la tapiaron. Le daban de comer a través de un agujero en la pared. Cuando el niño se escapó, asesinó a sus padres de una forma terrible y salvaje como venganza por haberlo torturado en vez de educarlo como a un hijo.<br><br>Tras cometer esta atrocidad, siguió viviendo en la granja, volcando su rabia contra los animales que vivían sueltos. Libre de sus ataduras, se puso a correr entre los campos de maíz, persiguiendo y aniquilando cualquier ser vivo que pudiera encontrar. Nunca encontraron los cuerpos de Max y Evelyn, pero sí animales torturados y destripados por toda la granja. La granja Coldwind se clausuró rápidamente, y la tierra se dividió y se vendió. Nadie llegó a comprar la casa familiar. Tal vez debido al sonido de motosierra que podía oírse en las calurosas noches de verano.<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"Sally Smithson llegó a la ciudad con la ilusión de vivir rodeada de niños correteando por todas partes y pasándoselo en grande en una casa de madera construida por su marido Andrew. Un día, Sally recibió la visita inesperada del capataz de Andrew, con noticias que cambiarían su vida para siempre. Se quedó sin opciones, y tuvo que buscar una forma de ganarse la vida. El único empleo que consiguió encontrar fue en el psiquiátrico Crotus Prenn. Empezó desde abajo, encargándose del desagradable turno de noche. Con el paso de los años, tras décadas enteras viendo día tras día la peor miseria humana, su mente ya no pudo soportarlo más. En su interior empezó a tomar forma la idea de purificarlos a todos. Cuando los empleados del turno de mañana llegaron un día de septiembre, se encontraron a más de 50 pacientes muertos en sus camas, junto con los cuerpos de cuatro empleados. Solo Sally seguía con vida, pero había perdido la cordura. Se mecía hacia delante y hacia atrás sin parar. La metieron en una ambulancia que nunca llegó al hospital. Se encontró el vehículo empotrado contra un árbol cercano, con los enfermeros muertos en su interior y ni rastro de Sally.","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"Anna apenas sabía caminar cuando su madre empezó a enseñarle a sobrevivir en las duras y solitarias tierras de los bosques del norte. Para vivir en una zona tan extremadamente peligrosa y remota, se necesita habilidad y resistencia. Si la luz del sol se volvía demasiado tenue como para poder hacer algo productivo, se refugiaban en su casa, una cabaña vieja y robusta construida para resistir los inviernos más duros. Junto al calor de la chimenea, Anna descansaba en los brazos de su madre, rodeada de los pocos juguetes y máscaras de madera que ella le había fabricado. Entre cuentos y nanas, se quedaba dormida y tenía dulces sueños, ajena a los acontecimientos que pronto lo cambiarían todo.<br><br>Anna y su madre acechaban a un alce enorme en el bosque. Sabían que era una presa peligrosa, pero estaba siendo un invierno especialmente difícil y casi no les quedaba nada de comer. La idea de morir de hambre las asustaba más que cualquier criatura del bosque. De improviso, el alce se encabritó, bramó y cargó contra Anna. Ella se quedó paralizada de miedo mientras el mundo entero parecía sacudirse bajo los cascos de la inmensa bestia. El alce estaba tan cerca que Anna vio la furia asesina en sus ojos y, de repente, su madre se interpuso entre los dos, hacha en mano. Un grito desgarrador le recorrió la garganta mientras el alce la atravesaba con los cuernos y la levantaba en el aire. Anna lo golpeó con el hacha en la cabeza con todas sus fuerzas, una y otra vez, mientras el animal intentaba quitársela de encima. La cornamenta se partió con un crujido horrible, y dejó finalmente libre a la madre. La bestia se desplomó.<br><br>Anna era demasiado pequeña como para mover el cuerpo destrozado de un adulto, así que se sentó junto a ella en el claro donde había caído. Para distraerla de los bramidos agonizantes del alce, la madre de Anna la abrazó y tarareó su nana favorita. Así se quedaron, mientras la cazadora y el alce se enfriaban y enmudecían, hasta que Anna se quedó sola en el bosque silencioso. Al final se levantó y emprendió el largo camino de regreso a casa.<br><br>Aun siendo una niña, sabía lo suficiente sobre el gélido bosque como para sobrevivir. Siguió sus instintos y se fundió con la naturaleza. Creció, se hizo más fuerte y no dejó de mejorar en la caza. Se convirtió en una depredadora peligrosa, cuya humanidad se había convertido en una sombra de un sueño casi olvidado.<br><br>Fue ampliando su territorio y alimentándose de lo que cazaba. Se centraba en las ardillas, las liebres, los visones y los zorros. Al cabo de un tiempo, se cansó de ellos y pasó a cazar animales más peligrosos, como lobos y osos. Cuando unos incautos viajeros se adentraron en su bosque, descubrió una nueva presa favorita: los humanos. Las pobres almas que se extraviaban y llegaban a su territorio acababan degolladas como cualquier otro animal. Se convirtió en coleccionista de sus herramientas, prendas de ropa y, sobre todo, de juguetes cuando había algún niño en el grupo. Pero jamás mató a ninguna niña.<br><br>A ellas se las llevaba a su casa, en las profundidades del bosque. Eran preciosas y, al verlas, algo se despertaba en lo más profundo de su interior. Ansiaba tener junto a sí un ser querido, una hija. Entre juguetes de madera, muñecos y cuentos que no sabía leer, ataba a las niñas del cuello con una cuerda áspera que sujetaba firmemente a la pared. No podía permitir que se alejaran o sufrirían una muerte segura en el bosque.<br><br>Una y otra vez, las niñas se consumían y acababan muriéndose de frío, hambre o alguna enfermedad. Una y otra vez, aquello sumía a Anna en un dolor, una pena y una locura más profundos en cada ocasión. Se sentía obligada a intentarlo de nuevo y atacaba las aldeas cercanas para asesinar a las familias y secuestrar a sus hijas. Se colocaba una de las máscaras de animal que su madre le había fabricado hacía tanto tiempo, con la idea de tranquilizar con ellas a las niñas asustadas. Los aldeanos difundieron la leyenda de que una especie de bestia acechaba en el bosque rojo: la Cazadora, que mataba a los hombres y se comía a las niñas.<br><br>La guerra acabó llegando al bosque. Los soldados alemanes empezaron a atravesarlo, camino a atacar al moribundo Imperio ruso. En aquellos tiempos sombríos ya no pasaban viajeros. Los aldeanos habían abandonado sus hogares y ya no encontraba niños, solo soldados. Muchos de ellos fueron encontrados con violentas heridas de hacha. Desaparecieron misteriosamente grupos enteros. La guerra llegó a su fin, y con ella los rumores sobre la Cazadora, sepultados en el bosque rojo.","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"Algunos seres humanos no son más que manzanas podridas. Manzanas podridas imbuidas de pura maldad. Michael Myers es uno de ellos. No sentía remordimiento alguno por provocar dolor a los demás. Es más, disfrutaba con ello. Pero incluso el mero hecho de vivir puede ser duro para quienes tienen la mente abrumada por el terror. La diferencia está en cómo se enfrenta cada uno a esos problemas.<br><br>En el caso de Michael, tenía que matar para encontrar algo de paz. Cuando le arrebató la vida a su hermana, la policía encontró a un niño callado, vestido de payaso, en la escena del crimen. Cuando alguien se encuentra con fuego no le echa gasolina. Pero eso es lo que hizo la policía, que no tenía ni idea de cómo afectaría al demonio que habitaba el cuerpo del niño. Enviar a Michael a una institución psiquiátrica fue un error. Las terapias infructuosas y los alaridos nocturnos solo consiguieron hacerlo más introvertido y perturbado. Todo el mundo esperaba que Michael Myers se quedase allí para siempre, olvidado y enterrado, como un error que se pudriría dentro de cuatro paredes. Pero cierto día... se escapó.<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"Lisa Sherwood creció en un pueblo tranquilo de gente amable, donde los ancianos procuraban resolver las disputas y mantener vivas las tradiciones. Lisa sentía predilección por los talismanes que le habían enseñado a dibujar para tener protección y buena suerte. Una noche, mientras volvía a casa a través del bosque, estalló una terrible tormenta de repente. Se resbaló en el medio de la oscuridad y se golpeó la cabeza. Mientras perdía la consciencia, vio varias figuras oscuras acercarse a ella desde la espesura. Pronto se encontraron lo suficientemente cerca como para poder vislumbrar unas malvadas y voraces sonrisas.<br><br>Se despertó encadenada a la pared de un sótano inundado. En la penumbra podía distinguir a más gente, con heridas abiertas cubiertas de moscas. No tardaron mucho en morir cuando los caníbales empezaron a cortarles trozos del cuerpo con sus cuchillos oxidados... Pero, de alguna forma, Lisa consiguió sobrevivir. Hambrienta y mutilada como estaba, sus grilletes comenzaron a aflojarse sobre sus brazos cada vez más delgados. Tiró y tiró, hasta que el metal le desgarró los músculos y la piel, pero consiguió liberarse. Su carne rezumaba pus amarillento, y los huesos eran discernibles a través de las heridas gangrenadas. Se sentía incapaz de seguir adelante. En medio del delirio, recordó su hogar, recordó a los ancianos... Trazó los símbolos que le habían enseñado. Una sed oscura se despertó en su interior. Ansiaba sangre. Sucumbió a la venganza.<br>La investigación finalmente llevó a la policía a la vieja casa del pantano. Sus habitantes habían sido descuartizados y devorados. El suelo estaba cubierto con los talismanes de los ancianos, garabateados con sangre. Nunca encontraron el cuerpo de Lisa.<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"Desde hace mucho tiempo existe el debate de si las atrocidades que cometen los asesinos se deben a compulsiones de sus mentes enfermizas o a presiones externas, pero hay un asesino para el cual lo innato y lo adquirido van de la mano.<br><br>Cara de Cuero no mata por deseo de imponer su voluntad a los demás, satisfacer necesidades carnales o silenciar a las voces de su cabeza. Mata por miedo. Miedo de que le hagan daño, de que su familia se enfade con él, de que se descubra la costumbre que comparten de comer carne humana...<br><br>Es obediente, su familia lo quiere y eso es lo único que importa. Los demás son una amenaza y las amenazas hay que eliminarlas.<br><br>Como aquellos muchachos que entraron en su casa sin permiso y se pasearon por ella como si fuera suya. Lo registraron todo, seguro que para descubrir los secretos de su familia. Pero Cara de Cuero se encargó de ellos, tal como le enseñaron.<br><br>Es más que un protector, tiene muchas responsabilidades y cada una tiene sus facetas: sirve la cena, cuida de la familia, se viste como es debido para comer. Sus abuelos cuidaban de ellos, pero el abuelo ya está viejo y la abuela lleva tiempo sin poder moverse, así que Cara de Cuero y sus hermanos han tenido que tomar el relevo. La familia lo es todo para él. La familia es seguridad y protección.<br><br>Pero, aunque hizo todo lo que pudo, una de las muchachas se escapó. Intentó detenerla, persiguiéndola lo más rápido que pudo, pero ella contaba con ayuda: otro intruso que conducía un camión. El malvado camionero mató a su hermano: lo atropelló como si se tratara de una alimaña. Ciego de furia, Cara de Cuero se abalanzó sobre él, con la motosierra lista para vengar a su familia, pero el camionero fue demasiado rápido. Golpeó a Cara de Cuero y lo hirió con su propia motosierra.<br><br>Mientras veía a los intrusos marcharse, a la ira, la pena y el dolor se le añadió la preocupación por su familia. Seguro que volverían con la policía y que se llevarían a sus hermanos y a su abuelo. Y sin ellos, ¿qué sería de él? Sin sus órdenes, se debilitaría y moriría.<br><br>Mientras su mundo se derrumbaba, Cara de Cuero no paraba de dar vueltas, blandiendo la motosierra en todas direcciones, intentando combatir el sinfín de amenazas externas que lo agobiaban.<br><br>Y entonces lo embriagó otra sensación. Algo pavoroso apareció desde fuera de su campo de visión, reptando sobre su piel. Se dio cuenta de que daba igual lo que los intrusos pudieran hacerle, porque había algo peor, algo mucho más grande, habitando en las sombras. El miedo se apoderó de él como nunca antes, pero resultaba casi reconfortante, porque se parecía mucho al que le hacía sentir su familia. El miedo a decepcionarlos.<br><br>Fue conducido hasta un lugar que le resultaba familiar, y a la vez misterioso. Instintivamente supo lo que tenía que hacer. No podía fracasar como lo había hecho con su familia. Los intrusos vendrían, pero él usaría sus habilidades para vencer a cualquier amenaza. Se producirían gritos, pero él volvería a silenciar al mundo hasta que el único sonido que quedara fuera el bendito aullido de su motosierra.<br><br>Venid, intrusos.","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"Tras mostrar aptitudes extraordinarias para la psicología, Herman fue elegido para realizar un curso de formación especial en un programa avanzado de neurociencia, que se celebraba en el Instituto Conmemorativo Léry, unas instalaciones secretas en Illinois controladas por la CIA. Allí fue donde Herman conoció al doctor Otto Stamper. Bajo su supervisión, Herman empezó a emplear extraños métodos cada vez más crueles para sonsacar información a los presos enviados al instituto, que en realidad era también una prisión y un centro de reeducación secreto para quienquiera que fuera el enemigo de los Estados Unidos del momento. El uso indiscriminado de las violentas terapias de electrochoque dio excelentes resultados, y fruto de ello se pudo descubrir varias amenazas a la seguridad nacional.<br><br>Con los años, a Herman se le empezó a conocer como el Doctor, y nadie cuestionaba si contaba con un título académico de medicina o no, ni qué les ocurría a los presos cuando ya habían revelado la información. Solo se descubrió la horrible verdad después de que no se tuvieran noticias del Instituto Conmemorativo Léry durante toda una semana. Encontraron a los empleados, pacientes y presos muertos, con todo tipo de contusiones en la cabeza. Fue posible identificar los cadáveres de los presos y del personal, incluido el del doctor Otto Stamper, pero no había ni rastro de Herman Carter, alias el Doctor.<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"Incluso en vida, Freddy Krueger fue una criatura de pesadilla para aquellos que lo conocieron de verdad. Oculta tras una máscara de amabilidad y simpatía, Freddy solo revelaba su auténtica naturaleza a sus víctimas. Cuando los padres de Springwood se enteraron, salieron a dar caza a Freddy y se tomaron la justicia por su mano. Pensaron que el fuego les había librado de un monstruo aquella noche, y que sus hijos por fin estarían a salvo. Cuánto se equivocaban: un mal tan poderoso como el suyo siempre encuentra la forma de sobrevivir.<br>Pasaron los años y el horror se enterró; sus víctimas pasaron página y lo olvidaron todo. Entonces, de alguna manera, Freddy regresó y los sueños se convirtieron nuevamente en pesadillas.<br>Freddy centró su ira en quienes le habían hecho daño y, especialmente, en su verdadera obsesión: Nancy Holbrook. No obstante, subestimó la fuerza e ingenio de esta, quien, junto a su amigo Quentin, se las arregló para debilitar a Freddy, mutilarlo y darlo por muerto una vez más.<br>La muerte no había querido acoger a Freddy en su primer encuentro, ¿por qué se pensaron que iba a hacerlo ahora? Una vez más, volvió a resurgir, sediento de venganza. Y esta vez concentró su rabia en el chico que le había impedido llegar hasta Nancy, su obsesión número uno.<br>Freddy invadió los sueños de Quentin y lo aterrorizó noche tras noche, hasta dejarlo sin fuerzas y sin entereza. Cuando llegó el momento, obligó al chico a volver al oscuro reflejo de la guardería Badham. Allí consumaría su venganza.<br>Freddy acechó al muchacho por los pasillos del colegio. Se tomó su tiempo, saboreando cada momento de la caza. Esto era lo que más disfrutaba: el olor a sudor en el aire, los jadeos irregulares de la respiración aterrorizada de sus presas. Eran suyas, y podía jugar con ellas cuanto quisiera.<br>Allí estaba el chico, al final de un largo pasillo. ¿Demasiado cansado y asustado como para seguir huyendo? ¿Se había resignado a su destino? Freddy empezó a acercarse con los brazos extendidos, arañando la pared con sus garras. Con las puntas raspó una tubería para que el chirrido metálico agudizara el terror del muchacho.<br>Una lluvia de chispas cayó sobre el líquido que cubría el suelo de baldosa. Surgió una llama azul que rápidamente se extendió por todo el pasillo.<br>El chico salió corriendo mientras Freddy se abría camino entre las llamas con una furia inusitada. Atravesaron salas y paredes como una exhalación, hasta que llegaron al sótano de Freddy. Allí no había escapatoria.<br>Freddy se acercó lentamente al chico. Tenía tanto miedo, que Freddy casi podía saborearlo, pero sus ojos brillaban con un odio desafiante que resultaba casi admirable.<br>Freddy levantó sus garras.<br>Pero, de repente, sintió otra presencia junto a él: algo antiguo, poderoso y oscuro. Una nube tenebrosa lo envolvió... Lo único que podía sentir era un ruido como de vigas de madera doblándose y crujiendo en la distancia, y el gemido reverberante de metal contra metal. Algo arcano e irreconocible, a medio camino entre palabras y el terror más puro.<br>Tras caer y girar una y otra vez en el vacío, Freddy se encontró de nuevo en la guardería. Pero no era SU guardería. Parecía la misma, pero tenía algo diferente. Sus poderes se habían reducido en algunos aspectos y agudizado en otros. El chico parecía haber desaparecido, pero otras víctimas recorrían los pasillos. Algunas serían intrascendentes y otras se convertirían en sus nuevas presas favoritas. Todas sucumbirían bajo sus garras.","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"John Kramer, más conocido como Puzle, planificó el nacimiento de su hijo para el año del cerdo del zodiaco chino como un tributo a la fertilidad y el renacimiento; un nuevo comienzo para su mujer y para él, y el inicio de una vida dichosa para su hijo. Pero todos sus planes se fueron al traste la noche fatídica en que un drogadicto se coló en la clínica de su mujer para robar. <br><br>Este hecho le costó la vida a su hijo no nato, así que capturó al drogadicto y lo convirtió en su primer sujeto de pruebas. El Cerdo había cambiado para siempre. Se transformó en la personificación de la enfermedad que pudría el cuerpo de John, un recordatorio de que no somos más que carne a menos que trascendamos nuestros propios seres aferrándonos a la vida en las fauces de la muerte.<br><br>El Cerdo se convirtió en su estandarte, un agente de Puzle que le proporcionaba los sujetos de pruebas. Para los que las superaban, el Cerdo podía seguir representando el renacimiento en forma de aprendices o, incluso, discípulos de Puzle. <br><br>Ese fue el caso de Amanda Young, un alma atormentada cuya vida se reducía al dolor, tanto el que sufría ella misma como el que hacía padecer a aquellos que la rodeaban. Todo esto cambió al enfrentarse a la prueba y superarla. Al fin aceptó que su vida tenía valor, y se hizo devota de la causa, lista para tomar el relevo cuando el cáncer lo terminara de consumir.<br><br>Pero cada vez dependía más de John; sentía angustia por su muerte inminente y estaba convencida de que sus sujetos de pruebas jamás serían capaces de salvarse a sí mismos, de renacer en el crisol de las pruebas. <br><br>A cuenta de ello, John la hizo partícipe de un nuevo juego, una nueva oportunidad de salvarse a sí misma, pero Amanda permitió que la ira y los celos dominarán sus actos. No superó la prueba y, como consecuencia, recibió un balazo. <br><br>Mientras se desangraba en el suelo alicatado, la oscuridad tiñó su visión, acompañada por el misterioso crujir de unas ramas. Se despertó en un bosque, viendo el mundo de nuevo a través de los ojos de la Cerda. Estaba rodeada de árboles, que extendían hacia ella sus ramas desde todas las direcciones. El pánico se apoderó de ella y notó que su respiración reverberaba agitada dentro de la máscara.<br><br>¿Había sido condenada a pasar el resto de sus días en ese lugar, con ese disfraz? ¿O se trataba de otra prueba? Quizá no había fracasado. John siempre iba un paso por delante de los demás, adelantándose a cualquier circunstancia, y jamás la dejaría de lado, ¿no?<br><br>Puzle ya no estaba, pero la había cedido a otra entidad. Un ser para el que volvería a ser la Cerda.<br><br>Al final, comprendió que sus decisiones habían sido acertadas. Se habían acabado los juegos. La redención no era una opción para ninguno de ellos. Al fin y al cabo eran carne, y la carne siempre muere. ","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"Kenneth Chase nació en 1932 tras un parto difícil que le costó la vida a su madre. Esta tragedia creó una brecha entre padre e hijo que nunca se cerró. A medida que el chico crecía, también lo hacían el resentimiento y los problemas con el alcohol de su padre. Cuando Kenneth empezó a ir a la escuela, ya apenas se dirigían la palabra.<br><br>El chico no destacó en nada salvo en los deportes. Creció alto y fuerte, y sobresalía en las pruebas atléticas, pero se negó a ingresar en ningún equipo.<br><br>De camino a casa solía encontrar plumas en el suelo, y empezó a coleccionarlas. Las guardaba en una caja de puros bajo la cama. Su padre estaba todo el día trabajando o sumido en el estupor causado por la bebida. Kenneth se pasaba las horas solo, fascinado por la regularidad de los bordes de las plumas, sintiendo su suavidad al pasárselas por los labios. Al contemplar los pájaros que acudían al comedero en su jardín, se imaginaba lo suaves que serían, y finalmente se decidió a atrapar uno. Se ganó la simpatía del dentista local, y consiguió hacerse con algunos anestésicos que echó en el comedero de las aves. Con esta trampa, esperaba poder dormir a un pájaro el tiempo suficiente como para poder tocarlo.<br><br>Tras varios intentos fallidos, consiguió capturar a un petirrojo. La sensación de tener la vida del animal en sus manos le produjo una súbita excitación. Había pensado liberarlo en cuanto se recuperara de la anestesia, pero, en lugar de ello, esperó a que los ojos de la criatura recobraran la consciencia. En el momento en que el animal empezó a debatirse, no aflojó su agarre. Le apretó el pescuezo con fuerza hasta que las plumas del pecho dejaron de movérsele. Se deshizo del cuerpo, pero conservó una pluma, con la que empezó una nueva colección. El resto las tiró por ser \\"falsas\\".<br><br>A finales de la década de los 40, Kenneth ya había dejado el instituto y trabajaba como camarero en un restaurante local. Había pasado a presas más grandes, como ardillas, mapaches o perros. Se hizo un experto a la hora de calcular la dosis de anestesia necesaria para cada uno.<br><br>A principios de 1954, un joven desapareció. El pueblo lo buscó hasta debajo de las piedras, pero no sirvió de nada. Unos meses más tarde, el padre de Kenneth halló la caja de puros mientras hacía unos arreglos en el sótano de la casa. Al abrirlo, contempló horrorizado una colección de plumas, patas de animales y un dedo humano.<br><br>Al volver del trabajo, Kenneth vio a su padre salir del sótano con la caja de puros en las manos. No dijo nada, simplemente se dio la vuelta y jamás volvió a pisar su hogar.<br><br>Tras varias semanas viviendo a la intemperie, dio con un circo ambulante y, dada su asombrosa fuerza, lo contrataron para ajustar las cuerdas. Adoptó un nuevo nombre: Jeffrey Hawk.<br><br>A \\"Jeffrey\\" no le quedó otra que aprender a socializar en esa comunidad tan cerrada de la que ya formaba parte. Adoptó una nueva personalidad, a modo de disfraz, y pronto se labró la fama de persona servicial y encantadora, lo que le granjeó el aprecio de su nueva familia.<br><br>Durante la siguiente década, formó parte del circo y viajó de una punta a otra de los Estados Unidos. Pero esa existencia no le resultaba gratificante y poco a poco empezó a caer en malos hábitos. Bebida, comida basura, drogas... Todo, y en exceso. Durante un tiempo le bastó con esos vicios, pero no tardaron en resurgir sus viejos instintos y el estilo de vida nómada le venía muy bien como tapadera para sus asesinatos. Robó ropa y maquillaje a los actores para confeccionarse un disfraz con el que acercarse a sus víctimas, anestesiarlas y luego llevarlas a su caravana. Cuando se despertaban, comprendían con horror que estaban a su merced. Disfrutaba atormentándolas física y psicológicamente. La desesperación de aquellos gritos perdiéndose en la noche eran el estímulo que necesitaba.<br><br>Cuando apenas les quedaban fuerzas, Kenneth examinaba sus dedos con detenimiento en busca del más bonito y los relamía para dar con el más sabroso. Cuando se decantaba por uno, lo rebanaba para añadirlo orgullosamente a su colección, deshaciéndose del resto del cuerpo.<br><br>Hombres o mujeres, jóvenes o viejos, le valía cualquiera. La esencia de una buena colección está en la variedad, en los recuerdos e historias que evoca.<br><br>Poco a poco fue despojándose menos del disfraz y más de su antigua personalidad, hasta asimilar del todo su verdadero ser: el Payaso.<br><br>Con el tiempo, se volvió confiado y descuidado. Una de sus víctimas logró escapar de las ataduras mientras él dormía la mona. La mujer pidió ayuda a gritos y, cuando Kenneth se despertó, ya tenía a todo el circo encima. Sin embargo, logró montar en su caballo a tiempo y perderse con su caravana en la noche.<br><br>A partir de entonces, recorrió el país como un parásito de ferias y circos, que aparecía pese a no figurar nunca en el programa. Quienes eran lo bastante valientes o tontos como para acercarse a él eran atrapados. Luego, desaparecía antes de que nadie se percatase de su ausencia.<br><br>Tras mucho deambular, dejó de transitar las rutas convencionales de los Estados Unidos y atravesó un velo de niebla que lo condujo a otra dimensión. Un espacio de transitoriedad e impermanencia que se ajustaba perfectamente a la existencia que él había elegido. Sintiéndose más a gusto de lo que había estado en toda su vida, se asentó y esperó pacientemente a su primer visitante.","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"Rin era la única descendiente de la familia Yamaoka. Se crio entre las polvorientas paredes de una casa tradicional en Kagawa. Estudió Educación en Takamatsu, una universidad privada, lo cual supuso un duro golpe a la ya de por sí precaria situación financiera de la familia. Ese mismo año, su madre enfermó y las facturas comenzaron a acumularse. Rin consiguió trabajo a tiempo parcial en un esfuerzo inútil por tratar de mejorar la situación económica familiar.<br><br>Su padre se enfrentaba a una deuda que no dejaba de crecer, así que comenzó a trabajar doble jornada con la esperanza de conseguir un ascenso. Fue entonces cuando empezó a no poder dormir. Un susurro siniestro lo mantenía despierto toda la noche y le recordaba lo desesperada que era su situación. Estaba tan agotado que empezó a perder contacto con la realidad. Decidido a luchar contra lo que la voz le susurraba por las noches, el padre de Rin recurrió a una medida desesperada. Se reunió con su jefe, le explicó su situación y le rogó que le concediese una bonificación, un anticipo, una baja laboral..., lo que fuera.<br><br>Su solicitud fue rechazada. La empresa había sacado una remesa defectuosa que le había ocasionado muchos gastos. Necesitaban un cabeza de turco, y el padre de Rin tenía el perfil idóneo para ello. Lo despidieron tras veintidós años de servicio.<br><br>Esa noche, Rin llegó a casa después de trabajar. Había tenido que atender a unos clientes que se habían quedado hasta tarde en el restaurante. Mientras dejaba la bicicleta en el cobertizo, escuchó los gritos de su madre provenientes del interior de la casa.<br><br>Entró a toda prisa y subió la escaleras que conducían a la habitación de sus padres. Se encontró a su madre cortada en pedazos en el suelo. Le habían cercenado limpiamente los miembros y estaban colocados en una posición antinatural. Tenía los pechos rebanados, lo que dejaba entrever su caja torácica enteramente abierta. Rin comenzó a sentir arcadas.<br><br>Una catana afilada cayó sobre ella. La joven bloqueó el ataque con el antebrazo desnudo. El intenso dolor se vio interrumpido por una espeluznante revelación: era su padre quien blandía la catana, con una mueca estoica. Le gritó que se detuviera, pero este volvió a cortarle nuevamente el brazo.<br><br>Trató de huir, pero resbaló en el suelo empapado de sangre. Sirviéndose del marco de la puerta como apoyo, consiguió levantarse. La catana atravesó la pared y le alcanzó el brazo sano. Escapó hacia el pasillo aullando de dolor, pero no pudo evitar la espada de su padre.<br><br>Retrocedió aterrorizada mientras intentaba sujetarse la carne blanda que le colgaba del abdomen. La imagen de las extremidades de su madre se sucedieron como una película en su cabeza.<br><br>Rin cargó contra su padre y consiguió hacer que se trastabillase. Pero se recuperó lo suficiente como para golpear con el puño el destrozado abdomen de la chica, lo que la hizo retorcerse de dolor. Mientras intentaba levantarse con las pocas fuerzas que le quedaban, su padre le desgarró el muslo, obligándola a desplomarse.<br><br>Rin comenzó a arrastrarse en dirección a las escaleras, pero su padre la agarró del pelo y la estampó contra una mampara. El cristal se rompió a causa del impacto y Rin cayó al piso de abajo.<br><br>Oyó pasos por encima de ella. Consiguió moverse a duras penas hacia un mar de cristales rotos que le cortaban la carne, pero eso ya no importaba. Tenía que detenerle. Tenía que hacerle pagar por lo que les había hecho a su madre y a ella.<br><br>Rin tosió sangre, y al hacerlo se golpeó contra un cristal y se cortó la barbilla. Comenzó a percibir un latido grave. Parecía que su cuerpo pesara tanto que le resultaba imposible moverse.<br><br>El suelo tembló con los pasos de su padre. Rin sabía que no sobreviviría, pero ya no le importaba. Se vengaría, en esta vida o en la otra.<br><br>Una oscura niebla comenzó a oscurecerle la visión, pero eso no templó su ira. No descansaría, todavía no. La oscuridad susurró y le prometió sangre y venganza.<br><br>Se selló un juramento y Rin cerró los ojos.","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"Frank Morrison tenía 19 años mal aprovechados. Dejó el instituto cuando lo echaron del equipo de baloncesto por empujar a un árbitro contra las gradas. Sin embargo, Frank era un hombre con potencial que, a pesar de su triste infancia, iluminaba con su presencia cualquier habitación en la que entraba. A los seis años, lo sacaron de Calgary y comenzó un recorrido por casas de acogida. Por muchas veces que se liara a golpes, montara un escándalo y se metiera en peleas, no dejaban de trasladarlo de una casa desconocida a otra. Su última mudanza había sido tres años atrás, cuando su último padre de acogida, Clive Andrews, lo recogió del centro de adopción. Viajaron durante siete horas y llegaron a un pequeño bungaló en Ormond. Fue la ocasión en la que pasaron más tiempo juntos. Clive estaba demasiado ocupado canjeando los cheques de los servicios sociales por copas en el bar.<br><br>Ormond era un lugar pequeño y aburrido, un pueblo perdido de 6000 habitantes donde los inviernos grises se prolongan y ocupan gran parte del año. Frank hizo todo lo posible para conseguir otra familia adoptiva, pero cambió de idea cuando una chica preciosa se fijó en él. Julie era una chica popular, convencida de que se merecía algo mejor que pasarse la vida en Ormond. Frank, que era forastero, sería su billete de salida. Frank iba a las fiestas que ella organizaba, donde todos eran menores que él y fáciles de impresionar. Eso le gustaba. Conoció al impulsivo de Joey, a quien le encantaba fanfarronear, y a la tímida e inocente Susie, que era la mejor amiga de Julie.<br><br>Se juntaban en una cabaña abandonada en el monte Ormond. El tiempo que pasaban juntos era perfecto para desconectar de la insulsa conformidad de su insignificante día a día. Frank lo vio como una oportunidad para convertir su falta de experiencia en algo poderoso. Empezó a organizar noches de desfase y desenfreno para tantear sus límites. Acoso, vandalismo y robo, esos eran sus planes para el fin de semana. Llegó un momento en que hacían todo lo que él les pedía. No había límites cuando se ponían la máscara. Una noche, Frank desafió a Joey a destrozar la tienda de la que acababa de ser despedido. Se colaron en ella con bastante facilidad, pues ya habían cerrado y se suponía que a esas horas estaba vacía. Pero un empleado de la limpieza que todavía estaba por allí descubrió a Julie y la capturó. Al escuchar sus gritos sofocados, un oscuro impulso se apoderó de Frank. Fue hacia ella rápidamente, cuchillo en mano, y sin dudarlo un instante se lo clavó en la espalda al hombre.<br><br>El grupo se quedó conmocionado, observando a Frank con los ojos como platos. Este les ordenó que acabaran el trabajo. Joey apretó los dientes, agarró el cuchillo y apuñaló al hombre en las costillas. Susie no quería hacerlo. Frank le gritó. Tenían que terminar lo que habían empezado. Julie cerró los ojos y apuñaló al hombre en el pecho. Le pasó el cuchillo empapado a Susie. Ahora todos estaban en el mismo barco. Susie miró a Julie sin dar crédito, y Frank le agarró sus manos temblorosas y enterró el cuchillo en la garganta del tipo. Frank les dijo que había que actuar rápido: limpiaron la sangre del suelo, escondieron el cadáver en el maletero del coche de Joey y se dirigieron al monte Ormond.<br><br>Los cuatro empezaron a cavar en la sucia nieve para deshacerse del cadáver, y de repente Frank vio algo moviéndose en el bosque. Agarró el cuchillo y se separó del grupo para comprobar qué era. La niebla se hizo más densa a su alrededor, hasta que no pudo ver lo que tenía delante de las narices. Volvió sobre sus pasos y descubrió un rastro misterioso. Comenzó a seguirlo, era como si la oscuridad lo estuviera llamando. Julie, Susie y Joey terminaron de cavar, pero no vieron a Frank por ninguna parte. Julie descubrió sus pisadas, que se dirigían hacia el corazón del bosque, así que las siguieron juntos los tres. Cuando Julie, Susie y Joey no volvieron a casa aquella noche, sus padres pensaron que habían huido con Frank. A cada familia se le ocurrió una teoría diferente. Sin embargo, la atmósfera cambió en todo el pueblo tras el descubrimiento de un cadáver cerca de una cabaña abandonada en el monte Ormond.","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"Cuando tenía cinco años, Adiris, la más pequeña de cinco hermanos, fue abandonada en los abrasadores escalones de ladrillo rojo del Templo de la Purgación de Babilonia. Para poder lidiar con el trauma y el dolor, se aferró a la creencia de que los dioses tenían un plan para ella. Su nueva vida consistía en una tranquila servidumbre. Cuidaba los jardines, preparaba comidas ceremoniales y abrillantaba los quemadores de incienso rituales. Por las noches, rezaba por una señal que revelase su propósito en la vida.<br><br>Cuando creció, le encomendaron asistir a los sacerdotes de más alto rango durante la adoración anual de la cabra marina, el dios del agua y la creación. Adiris balanceó el incensario por la sala hipóstila para lanzar densas humaredas negras que llegaban a los imponentes pilares de piedra antes de desvanecerse. Sus preocupaciones desaparecieron y se sintió bendecida de una forma que la acercaba más que nunca a los dioses. Trabajó tan duro como pudo a partir de entonces: cumplía con sus obligaciones, aceptaba tareas extra y ayudaba a los sacerdotes durante los rituales de purificación.<br><br>Los sacerdotes necesitaban cada vez más y más ayuda. Se realizaban purificaciones diarias para responder a la demanda que llegaba desde fuera de los altos muros del templo, donde había resurgido una catastrófica plaga. En cuestión de meses, los sacerdotes contrajeron la enfermedad. En poco tiempo, estaban demasiado débiles como para poder llevar a cabo ningún tipo de ritual. Adiris, que había asistido en muchos rituales de purificación, era la única que podía seguir llevándolos a cabo. Resultaba perentorio contener el pánico, aunque fuera a manos de una novicia.<br><br>Nerviosa antes de su primera ceremonia, Adiris visitó la cámara del santuario de los sacerdotes. Mientras encendía las velas, vio una estrecha apertura al fondo. Se coló como pudo por el hueco y llegó a una cripta oculta bajo el santuario. En la cámara había solamente una estatua dorada de una mujer, con las manos extendidas y los dedos cubiertos de joyas. Era la señal que Adiris llevaba esperando tanto tiempo.<br><br>El gran salón estaba repleto de seguidores que se inclinaron a la llegada de Adiris. Con grandes zancadas, llegó hasta el altar de ladrillo y tomó la daga ceremonial forjada en plata. Sus dedos cubiertos por anillos de rubíes se aferraron a la hoja como si fuesen garras. Esa repentina muestra de ostentación intrigó a los seguidores, que ya estaban sorprendidos por su belleza y juventud.<br><br>Cuando empezó a recitar la épica de la creación, una mujer del fondo se desmayó. Adiris se acercó a ella corriendo y se dio cuenta de que tenía los pies cubiertos de ampollas negras. Sin dudarlo, cogió la hoja sagrada y se cortó un dedo del pie con ella. Seguidamente, se lo ofreció a los dioses, todavía ensangrentado, y les suplicó que protegieran a aquella pobre mujer. Entre los seguidores se hizo el silencio y, desde entonces, la proclamaron su nueva sacerdotisa.<br><br>Las historias sobre su riqueza, belleza y devoción se propagaron por toda la ciudad tan rápido como la enfermedad. Sus seguidores no tardaron en referirse a ella como la suma sacerdotisa de Babilonia.<br><br>Pero la fe de Adiris fue puesta a prueba cuando mostró los primeros signos de la infección. Empezó a toser una mezcla de flemas y sangre, le empezaron a aparecer abscesos en el cuello y el pie que ahora tenía cuatro dedos empezó a oscurecérsele. Avergonzada por su enfermedad, comenzó a llevar un velo y un incensario con el que enmascarar el hedor rancio que desprendía su piel. Con la esperanza de que los dioses la salvaran, siguió llevando a cabo los rituales y ofreciendo agua y comida bendecidas a sus seguidores.<br><br>Pero ningún ritual podía salvarla. En un intento desesperado por apaciguar a los dioses, Adiris se autoexilió de la ciudad. Viajó hacia el norte con varios seguidores, atreviéndose a cruzar los fríos bosques de Urashtu, hasta que caminar dejó de ser posible.<br><br>Acamparon en una cueva húmeda, donde Adiris yacía en un charco de vómito. Tenía tan hinchado el pie, ya completamente negro, que no podía avanzar más. Tanto ella como sus seguidores se dieron cuenta de la verdad en esa cueva: se habían infectado todos con la plaga.<br><br>Adiris se arrodilló entre todos y llevó a cabo una última oración. El humo negro del incienso se elevó por el aire húmedo antes de que una fría brisa se lo llevara.<br><br>Jamás se encontraron los cuerpos de Adiris ni de sus seguidores. Se contaron muchas historias sobre su retorno, pero nadie sabe realmente cuál fue la suerte que corrió la suma sacerdotisa de Babilonia.","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"Danny Johnson, conocido por algunos como Jed Olsen, cogió el periódico que estaba sobre la encimera. Era de hacía una semana, pero en la portada aparecía su cara, hundida y borrosa. Era una de esas tardes de bochorno de Florida en las que el calor y la humedad impregnaban toda la cocina, haciendo que fuera imposible no sudar. Se arrellanó en una silla húmeda a leer. Esperaba que el artículo fuera bueno, porque había hecho un trabajo excepcional en Roseville.<br><br><i><b>GHOST FACE DESAPARECE</b><br><br>18 de junio de 1993<br><br>A primera vista, Jed Olsen era un trabajador por cuenta propia modesto y entusiasta, con experiencia en varios periódicos pequeños. Al equipo de la Roseville Gazette le pareció muy sincero y buena gente, así que a los cinco minutos de entrevista ya había conseguido que lo trataran como a uno más de la familia:<br><br>\\"Jed localizó enseguida al redactor jefe, le dio un firme apretón de manos con una gran sonrisa en el rostro y habló de los buenos valores estadounidenses de toda la vida. Y eso fue todo, así nos ganó\\". (Excolaborador de la Roseville Gazette).<br><br>Olsen nunca justificó su errática trayectoria profesional, que se repartía entre varios pueblos desde Utah a Pensilvania. No se comprobaron sus trabajos anteriores. Tenía experiencia y buena actitud, y necesitaban a un colaborador cuanto antes.<br><br><b>LOS CRÍMENES DE ROSEVILLE</b><br><br>Olsen llevaba cinco meses trabajando en el periódico cuando comenzaron los crímenes de Roseville, en los que personas de todas las edades aparecían apuñaladas en sus hogares. Según los informes, parecía que el asesino elegía a sus víctimas al azar, pero conocía bien sus casas. Las múltiples puñaladas indicaban una motivación personal. No se encontraron rastros de ADN. La policía local estaba desconcertada, ya que los asesinatos se habían cometido con una ira semejante a la de un crimen pasional, pero se habían premeditado con frialdad.<br><br>Al asesino también le gustaba acechar a sus objetivos. Unos días antes de su muerte, dos víctimas habían denunciado que una figura negra las había seguido cuando volvían a casa. El asesino las seguía desde el Walleyes, un pequeño bar al norte de Roseville, y les hacía fotos cuando estaban en casa, mientras buscaba una forma de entrar. Podía pasarse semanas enteras vigilando a sus víctimas, registrando con meticulosidad sus hábitos y costumbres. Cuando sentía la pulsión de matar, iba a la casa de la víctima más vulnerable de su lista y se colaba en ella sin hacer ruido.<br><br>Todo el equipo estaba trabajando en la historia de los crímenes de Roseville. A menudo mandaban a Olsen a entrevistar a las familias de las víctimas y a cubrir las declaraciones oficiales de la policía. En esa época nadie lo sabía, pero su implicación aumentó el número total de muertos.<br><br><b>GHOST FACE</b><br><br>En Roseville cundió el pánico cuando Olsen grabó a una figura encapuchada colándose en una casa por la noche. Su cara enmascarada, una mancha blanca en la oscuridad, miró un segundo a la cámara antes de desaparecer en el interior. A raíz de este hecho, Olsen escribió el artículo \\"Ghost Face capturado en vídeo\\". Parecía orgulloso de su trabajo, contento de ver a toda la ciudad aterrorizada con sus historias de fantasmas.<br><br>Semanas después, Olsen dejó una nota en su escritorio y desapareció:<br><br>\\"Espero que os hayan gustado mis historias tanto como yo he disfrutado haciéndolas realidad. No os preocupéis, aún no he terminado\\". (Jed Olsen)<br><br>Las fuerzas del orden de Roseville se niegan a hacer declaraciones incluso a día de hoy, y Jed Olsen sigue en libertad.<br><br>Danny sonrió mientras arrancaba el artículo del periódico. Cuando la investigación apuntó hacia él, hizo las maletas y se fue pitando de Roseville.<br><br>Se levantó de la silla, que se le había pegado a la piel. Una humedad agobiante lo envolvía al entrar en la habitación. Gotas de condensación se deslizaban por una pequeña ventana empañada, y de la pared colgaban trozos rasgados del empapelado. El estampado floral estaba cubierto de fotos horripilantes y titulares de periódicos. Danny clavó el artículo encima de una foto de cueros cabelludos lacerados. Sintió una pequeña punzada de hambre y se preguntó cuándo había comido por última vez. ¿Había sido esa mañana, mientras lavaba el cuchillo y la ropa? ¿O la noche anterior, después de seguir a aquella chica calle abajo? No lo recordaba bien.<br><br>Dio un paso atrás para admirar su obra en la pared. Se recreó recordando todos los artículos que había escrito, todas las historias que había planeado y las escenas a las que había dado vida.<br><br>Un escalofrío le recorrió el cuerpo. Una fría brisa transformó la humedad de la habitación en una niebla opaca y helada. Una mujer chilló. Hojas muertas crujieron bajo sus pies.<br><br>Sonrió expectante. ","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"El Demogorgon, con su boca con forma de flor repleta de dientes puntiagudos, sus garras largas y afiladas, y sus patas de fuertes músculos con las que poder abalanzarse sobre sus víctimas, es un ser que resulta aterrador en cualquier dimensión. Es una pesadilla poseída por una ira incontenible que la impulsa a dar caza a sus presas para luego desmembrarlas y devorarlas hasta el último vestigio de carne, sin dejar nada para los carroñeros. La criatura no tiene compasión ni control. Se cierne sobre su víctima sin ningún atisbo de duda ni clemencia, movida a matar por una sed de sangre insaciable. El Demogorgon es un cazador perfecto, el paradigma macabro de los horrores que acechan el Mundo Del Revés, motivo por el cual el Ente lo ha elegido.","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"Honrar su apellido nunca fue suficiente para Kazan Yamaoka. Quería superar la reputación de su padre y poner fin a lo que él veía como la decadencia de la cultura samurái por culpa de los granjeros que se hacían pasar por samuráis. Su padre trató de desviar la atención de Kazan hacia causas más nobles, pero este se negó a escuchar sus consejos y, armado con la catana de su padre, emprendió un peregrinaje oscuro para mostrar su valía y librar a Japón de los farsantes. Haciendo caso omiso del código que le habían enseñado, Kazan mató a los farsantes en las colinas y en los valles, en las playas y en los bosques. Los asesinatos fueron brutales, crueles y macabros. Humilló a granjeros y guerreros por igual, despojándolos de sus rodetes y armaduras. Su rabia, su sed de sangre y su perverso sentido del honor no tenían límite. Los monjes creyeron que algo oscuro y sobrenatural lo había poseído, así que lo maldijeron; un noble comenzó a llamarlo \\"Oni Yamaoka\\", el samurái colérico, un insulto para Kazan y su familia.<br><br>Decidido a redimir su apellido, Kazan asesinó a todo aquel que se atreviese a llamarlo Oni Yamaoka. Tal insulto lo confundía. Había derrotado a los mejores, y también había purificado a los samuráis al deshacerse de los farsantes. ¿Cómo podían tratarlo de ogro? ¿Era por haber asesinado a los asesinos más feroces? ¿Por haber reventado cientos de cráneos con un kanabo? ¿O por su necesidad de llevarse un \\"trofeo\\" de sus víctimas? No importaba. No podía soportar que lo llamaran ogro; en su cabeza resonó una voz siniestra que le instaba a matar al señor que había mancillado su nombre.<br><br>Mientras Kazan se dirigía a la ciudad del señor, se encontró en un camino con un samurái que le bloqueaba el paso. Kazan preparó su kanabo. Sin mediar palabra, el samurái atacó y enseguida demostró su superioridad. Pero en el último instante dudó. Con un golpe devastador, Kazan le aplastó la cabeza y le rompió el casco. Cuando se acercó al samurái caído, vio el rostro de su padre y se tambaleó de la impresión. La mirada de su padre era de una mezcla entre vergüenza y arrepentimiento cuando soltó su último aliento. Kazan cerró los ojos y gritó de angustia hasta que ya no pudo más. Cuando los volvió a abrir... su padre había desaparecido. No solo había matado a su padre, sino que además había permitido que los ladrones se llevaran su cuerpo para robarle la armadura.<br><br>Resentido, perdido y desilusionado, Kazan vagaba sin rumbo mientras la voz de su padre le reverberaba en la cabeza, burlándose de él, recordándole sus errores, provocándole ataques de furia incontrolables. Un día, caminando por el bosque, se encontró con la estatua de un oni. Se detuvo y permaneció inmóvil durante un buen rato. Parecía que aquella antigua y desgastada estatua lo estaba ridiculizando y acusando de ser uno de esos samuráis falsos que tanto ansiaba destruir. Sacudió la cabeza para deshacerse de aquella voz burlona y recordó a medias a aquel señor que se había burlado de él llamándolo \\"Oni Yamaoka\\".<br><br>Consumido por una ira renovada, se dirigió a la ciudad en lo alto de las montañas nevadas donde vivía el señor. A las puertas de la ciudad lo esperaba una docena de samuráis. Todos ellos cayeron bajo el filo de su kanabo. Su fuerza y su velocidad eran inigualables; su rabia, inconmensurable. Cubierto de sangre y vísceras, se abrió paso por la ciudad y no tardó en encontrar al señor, que estaba escondido en una villa. Lo arrastró al exterior, le seccionó los tendones para inmovilizarlo y lo observó suplicar y retorcerse como un perro. Sin un solo atisbo de duda, le introdujo el puño en la boca y arrancó la lengua con la que había mancillado su nombre.<br><br>Satisfecho, salió de la cabaña y se encontró rodeado por docenas de granjeros armados con hoces, horcas y palos. Sobrevivió a los primeros ataques, pero eran demasiados y estaban por todas partes. En cuestión de segundos, Kazan estaba en el suelo observando el frío e indiferente cielo mientras los granjeros se turnaban para apuñalar y torturar al Oni que había acabado con la vida de su querido señor. La frenética multitud llevó a Kazan a un pequeño molino de piedra para continuar con la tortura y, finalmente, lo dejaron allí para que sufriera una muerte lenta y agonizante. Cuando regresaron, el molino estaba cubierto por una extraña niebla negra, y el cadáver y el kanabo de Kazan habían desaparecido. Ese fue el comienzo de una leyenda oscura sobre un Oni colérico que acecha la ciudad.","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"Nacido en las polvorientas tierras baldías del Medio Oeste americano, Caleb Quinn se crio en el seno de una humilde familia de inmigrantes irlandeses. En los límites de la frontera, la enfermedad, el hambre y la muerte eran compañeras habituales, y los pioneros se enfrentaban entre sí por cualquier migaja mientras los magnates vivían entre el lujo y las ostentaciones. El padre de Caleb, antiguo ingeniero, tenía pocas posibilidades de ejercer su oficio debido a los carteles que colgaban habitualmente en cualquier negocio: \\"No se aceptan irlandeses\\". Sus anticuadas herramientas llevaban muchos años sin usarse cuando Caleb las descubrió. Al darse cuenta del interés que su hijo mostraba en el oficio, le regaló su vieja llave inglesa.\\n\\nLos dispositivos que Caleb creó bajo la tutela de su padre tenían utilidades pintorescas, pero cuando su padre no estaba, adquirían unas connotaciones más oscuras. Ocultó los planos de una máscara que incrustaba púas espinosas en los ojos y los arrancaba de sus cuencas, con bocetos de cómo se la colocaría a los niños que lo acosaban.\\n\\nCon la edad, las habilidades de ingeniero de Caleb ganaron valor comercial y las empresas dejaron a un lado sus prejuicios. Henry Bayshore, el propietario de United West Rail, lo contrató.\\n\\nEl primer invento de Caleb allí fue una pistola de clavos para las vías del ferrocarril. Posteriormente, diseñó un taladro tunelador de vapor. A pesar de que Bayshore fingía no darles importancia, los dispositivos empezaron a aparecer en otras compañías. Le había robado las patentes a Caleb y las había vendido.\\n\\nUna sensación ya conocida le recorrió las venas y alimentó el dolor agudo que albergaba en su corazón. Incluso entonces, luchaba por las migajas mientras los ricos se beneficiaban de su trabajo intelectual. La ira se apoderó de él: entró en la oficina de Bayshore y le destrozó la cara hasta convertirla en una pulpa sangrienta. Mientras lo apartaban de él, Caleb empujó su pistola contra el abdomen de su jefe y apretó el gatillo. Un clavo de ferrocarril se abrió paso a través de piel y vísceras hasta dejar clavado a Bayshore a su mesa.\\n\\nLo único que salvó a Caleb de la horca fue que, increíblemente, Bayshore sobrevivió. Caleb pasó quince años confinado en la penitenciaría de Hellshire, la primera cárcel privada del país. En una fortaleza plagada de convictos analfabetos, forjó una inesperada amistad con el alcaide. Diseñaba aparatos de tortura para él a cambio de comida extra. Tras un tiempo, el alcaide le ofreció conmutar su pena. Habló de algo más importante que la riqueza económica: el poder político. Sus contactos podían incriminar a Bayshore y hacer que se pudriera entre rejas de por vida. Solo pedía una cosa a cambio: que lo hiciera rico. Que usase su ingenio para llenar la prisión de forajidos con vida.\\n\\nCaleb volvió a su taller y con unas pocas modificaciones inventó algo nuevo: el lanzaarpones. La primera prueba fue cuando un ladrón robó en una lavandería china. Aprovechando la oportunidad, Caleb estrenó su prototipo. Las juntas de metal chirriaron cuando el proyectil salió disparado y se incrustó en el abdomen de su objetivo. Al tirar del arpón, este se agarró a los intestinos del pobre infeliz y, con un sonido sobrecogedor, los desparramó sobre el camino polvoriento.\\n\\nTras varias pruebas, los destripamientos menguaron. El alcaide usó sus contactos y liberó a más convictos irlandeses, quienes pasaron a conformar la cuadrilla de Caleb. Había nacido la banda de Hellshire.\\n\\nRecorrieron todo el país durante seis años aprehendiendo a forajidos para cumplir con su parte del trato. Tras una sangrienta batalla en Glenvale, Caleb descubrió un titular en el periódico: \\"Henry Bayshore compra la penitenciaria de Hellshire. En la fotografía, un Bayshore desfigurado le estrechaba la mano al alcaide con orgullo. El corazón de Caleb comenzó a latir con furia, bombeando sangre como si fuera a salírsele de las venas. Lo había vendido, había sido un peón en el juego de un rico.\\n\\nLa banda de Hellshire juró lealtad a Caleb y pidió la cabeza del alcaide. A todo galope, irrumpieron por la entrada a la prisión, gritando como saqueadores sedientos de sangre. Un guardia alzo la pistola, pero vaciló. Un arpón le perforó el pecho. Caleb le cogió la cabeza y la estampó contra una celda hasta que cupo entre las rejas.\\n\\nAl llegar al despacho del alcaide, Caleb echó abajo la puerta y tuvo la agradable sorpresa de encontrar a Henry Bayshore junto al alcaide, que se encogía de miedo en una esquina. Dominado por la rabia, Caleb fue directo a por Bayshore. Lo golpeó, lo apaleó, le desgarró la carne. La sangre le caía copiosamente por la cara y formaba un charco carmesí a sus pies. La banda de Hellshire se abalanzó sobre el alcaide y le rompió los huesos a patadas.\\n\\nLos dos hombres estaban destrozados y suplicaban por que acabaran con sus vidas; la banda los arrastró hasta el comedor y se los entregó a los prisioneros.\\n\\nEmpapado de sangre y sudor, Caleb se arrastró cojeando hasta su antigua celda, sin prestar atención a los gritos de Bayshore. Se sentó al borde de la cama y observó las gotas de sangre que caían de entre sus dedos. Una niebla gruesa y antinatural entró por la ventana enrejada. Sacó su vieja llave inglesa oxidada y recorrió el metal con el pulgar, estudiándolo con los ojos perdidos. No conseguía recordar cuándo la había conseguido. No le importaba. A sus pies vio un camino polvoriento y, a su final, siluetas de todo el que le había hecho daño: los niños que lo acosaron, los ejecutivos que se aprovecharon de él y, de nuevo... Henry Bayshore. De la niebla emergieron las herramientas para librarse de ellos: despiadados garfios de metal, brillantes y hermosos en su simplicidad. El dolor le perforó la pierna al ponerse de pie, pero lo resistió y siguió adelante por el sendero polvoriento, dejando un rastro de sangre tras de sí. ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"Pirámide Cabeza es un verdugo sádico y despiadado que está obsesionado con castigar a la gente a través del dolor. Pertrechado con un casco de metal en la cabeza y una espada descomunal a la espalda, acechaba entre los pasillos infernales de Silent Hill, comprometido con un deber que nadie llegaba a entender del todo. Hasta los monstruos huían nada más verlo para buscar cobijo entre las sombras, y aquellos que se cruzaban en su camino caían víctimas de actos de agresividad descontrolada. Cuando cumplió con su cometido y se dejó de necesitar su presencia, se preparó para el largo descanso... pero sus habilidades se requirieron en otro lugar. La niebla que lo rodeaba era distinta a la de Silent Hill, como si cada mota contuviese los nervios de una criatura, retorciéndose y buscándolo. En aquel momento se selló un acuerdo tácito. La nube ondulada era una invitación al deber y al sadismo, y Pirámide Cabeza, adentrándose en la niebla, aceptó su obligación una vez más. ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"Para comprender la condición humana, hay que superponerse a ella. Ese era el credo de Talbot Grimes, un químico escocés cuya ambición desenfrenada lo llevó a lo más alto. De niño era muy popular; un chico inteligente y carismático al que no le daba miedo enfrentarse a la autoridad. A pesar de sus habilidades sociales, tenía un carácter muy independiente y pasaba muchísimo tiempo explorando en solitario los inmensos campos que había cerca de su ciudad. Lo que empezó siendo mera curiosidad infantil casi le termina costando la vida al experimentar con dedalera venenosa. Se pasó días en la cama, sudando y vomitando todo alimento que le llegaba al estómago. Cuando se recuperó, no era miedo lo que sentía, sino fascinación. Había algo mágico en que una simple flor pudiera afectarle tan seriamente.<br><br>Durante su vida adulta, su ambición se desarrolló tan rápido como la cuestionabilidad de sus prácticas. Estudió en la Facultad de Medicina de Londres, donde sobresalió pese a sus repetidas amonestaciones. Su disposición a forzar los limites le aseguró un puesto en la empresa British East India, y en menos de siete años ya había ascendido a responsable del Departamento de Química. Con el tiempo, consiguió uno de sus mayores logros: un compuesto capaz de aumentar la productividad de los trabajadores. Como premio, se le confió un laboratorio secreto detrás de un campamento de prisioneros en Dyer Island.<br><br>Allí, cerca de la costa de India, los prisioneros de la Guerra del Opio se convirtieron en sus sujetos de pruebas para una droga que estaba desarrollando, gracias a la cual los soldados eran capaces de soportar unas cantidades increíbles de dolor. Aunque casi ninguno de los efectos secundarios revestía importancia, corría el rumor de un pequeño grupo de soldados se había vuelto loco y, fuera de sí, había masacrado aldeas y empalado a sus habitantes con bayonetas, para luego colgarlos de los árboles. No había informes oficiales sobre ese tema, y Talbot se negaba a sentirse culparse por algo que bien podía no ser más que un cuento de viejas.<br><br>Su insensible genialidad parecía imperturbable, pero ignoraba la cantidad de enemigos que había amasado con su cuestionable trabajo. El golpe de realidad fue literal, propinado en la nuca con una tubería de acero durante un viaje a Mangalore. Lo ataron y lo metieron en un carro. Cuando le quitaron la venda de los ojos, un hombre de aspecto enfermizo le mostró una fosa común con cientos de cadáveres. Talbot no lo sabía, pero su droga para aumentar la productividad había matado ya a un número de personas equivalente a una fábrica llena de trabajadores. Sabía que no podía defenderse contra la rabia y las acusaciones de su secuestrador; lo único que pudo hacer fue encogerse mientras le llovían los golpes de la tubería de acero. Dado por muerto, su cuerpo fue abandonado en la fosa común. Debatiéndose entre la vida y la muerte, empezó a arrastrarse en busca de una salida, hundiendo los dedos en la carne en descomposición. Había moscas negras alimentándose de las partes expuestas de su cuerpo. Era como si le estuvieran clavando cientos de alfileres. Al desplomarse, cayó frente a los ojos color miel de una fallecida. Demasiado débil como para empujarla, solo pudo quedarse inmóvil, contemplando los frutos del trabajo de su vida.<br><br>Volvió a la vida desde el borde de la muerte. Estaba en una cama pequeña, y un rostro amable y lleno de arrugas lo estaba observando. Le dolía cada inspiración, pero recibió cuidados hasta que se recuperó por completo en una antigua escuela de misterio que simulaba ser un monasterio. Los monjes estudiaban textos prohibidos en verdes jardines tras altos muros con la intención de trascender la mente humana en busca de otras dimensiones, pues creían que estaban conectadas entre sí.<br><br>Los conocimientos de Talbot demostraron ser esenciales. Sus compuestos para alterar la mente se integraban perfectamente con las teorías de la trascendencia neural. Se dio cuenta de que su salvación no había sido ninguna coincidencia, sino que lo habían sacado de la fosa a propósito con el fin de ampliar los conocimientos de la escuela. Aceptó ayudar hasta que se recuperase por completo y le encargaron la investigación de lo que los monjes llamaban \\"la sustancia química del alma\\", un compuesto derivado de la glándula pineal que podía activar la visión mental. Lo que empezó como un favor hacia sus salvadores no tardó en convertirse en una obsesión. Al revisar los archivos de textos perdidos de la escuela, descubrió fórmulas científicas que confirmaban ideas que se creían impensables. Soñó con llevar a la humanidad a un nuevo período de iluminación. Quizá de esa manera las pesadillas de los centenares de cadáveres de los trabajadores de la fábrica, y las de los dos ojos color miel, desaparecerían de su mente.<br><br>A medida que progresaba, la actitud de los monjes cambió. Las sonrisas amables que solían ofrecer comenzaron a acompañarse de miradas inquietas que se desviaban al menor contacto visual. Las conversaciones educadas se acabaron convirtiendo en murmullos silenciosos. Lo último que vio de la escuela fue el techo agrietado que contemplaba desde su cama, ramificándose como una dendrita a través del yeso.<br><br>Lo siguiente que recordó fue un mosaico destrozado de imágenes y sensaciones. Luces deslumbrantes, cascos de caballo sobre los adoquines, arpillera gruesa arañándole las mejillas y picaduras punzantes en el brazo. Se despertó, harapiento y sucio, acostado sobre una cama de paja en un fumadero de opio. Sumido en una densa niebla, lo primero en lo que pensó fue en sus notas, el único registro que tenía de sus innovadoras revelaciones. Rebuscó desesperadamente el sucio sótano, pidiendo ayuda a gritos. Las pocas personas que allí había alzaron la vista desde sus hamacas y tan solo pudieron ofrecerle ojos afectados por la droga y miradas apáticas que pronto se sumieron en una especie de sopor. No se percató de la figura que estaba detrás de él, y cuando sintió el pinchazo de la aguja en el brazo, el mundo desapareció una vez más.<br><br>Volvió a despertarse. Cada vez era peor que la anterior. Rozó con la lengua los huecos que tenía entre los dientes. Se preguntó cuánto tiempo habría pasado. Se le vino a la cabeza un vago recuerdo. La sustancia química del alma. Sus notas. Estar al borde de un descubrimiento. Un susurro lejano le invadió la mente.<br><br>Empezó a tantear con una piedra y la afiló con las manos temblorosas. Bajo la luz tenue del fumadero, entre sus catatónicos ocupantes, empezó a tallar en las paredes su investigación. Escribió durante horas, hasta que le sangraron los dedos, asimilando todo lo que la voz le susurraba pese a ser incapaz de comprenderlo. Cuando se quedó sin espacio para escribir, cogió la piedra y se talló el mensaje en el pecho. Ensangrentado, fue testigo del milagro que apareció ante sus ojos: un magnífico jardín de flores naranjas y exuberantes. La voz susurrante lo llamó y le pidió que se adentrara en el jardín para descubrir mundos y dimensiones más allá de la comprensión humana. Por un momento, Talbot sintió la misma fascinación que cuando era niño.<br><br>Los ocupantes del fumadero de opio se despertaron en silencio entre el olor seco del humo aún presente en el ambiente. Cuando la niebla de la droga se disipó, vieron la sangre que cubría el suelo y que se iba acumulando poco a poco en las juntas. Cuando sus ojos se adaptaron a la oscuridad de la habitación, comenzaron a distinguir las letras. Había una sola frase, pero se repetía una y otra vez: <i>La muerte solo es el principio</i>.","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"Charlotte y Victor Deshayes son dos hermanos siameses que poseían un vínculo emocional incomparable. Superaron la poca probabilidad de supervivencia que tenían al nacer en el siglo XVII, lo que podría considerarse un milagro, si bien les trajo una vida plagada de persecuciones. La parte inferior del cuerpo de Victor estaba adherida al pecho de su hermana, y las piernas abrazaban sus músculos y órganos. Era más pequeño que Charlotte, y parecía más un apéndice del cuerpo de su hermana que un niño completamente formado. Cuando los recién nacidos chillaron nada más venir al mundo, la matrona reaccionó aterrorizada. Salió huyendo de aquella casa, gritando que una bruja había dado a luz a un demonio. Así comenzó la caza de Charlotte, Victor y su madre, Madeleine.<br><br>Los años posteriores solo fueron recuerdos fugaces para los mellizos. Aun así, era lo más parecido a una vida normal para ellos. Pensaban que los viajes que hacían con su madre eran algo común para todos los niños. Huir y ocultarse por la campiña francesa formaba parte de la rutina. Cuando cumplieron cinco años, se les presentó un nuevo desafío: su madre cayó enferma. Pálida y agotada, a Madeleine no le quedó más remedio que encargarle a Charlotte la tarea de buscar comida. La niña, que siempre llevaba una capa adicional de ropa para ocultar a Victor, salió de la tienda de campaña montada en el bosque y partió hacia la aldea más cercana. Aunque resultaba una visión peculiar, hizo lo que le habían enseñado: esperó la oportunidad adecuada en el mercado y afanó toda la comida posible. Una victoria, sí, pero muy fugaz.<br><br>Pasada la medianoche, unas llamas oscilantes rodearon el asentamiento de la familia en medio de la oscuridad. Un grito que infundía temor y respeto rompió el silencio de la noche y a continuación apareció una muchedumbre de cazadores de brujas. Unas manos ansiosas arrancaron a los mellizos de su cama, Charlotte se defendió a patadas de quienes se acercaban. Madeleine gritó por sus hijos, pero un garrote en el cráneo ahogó su voz súbitamente, mientras Victor chillaba como una rata atrapada.<br><br>Los cazadores se coordinaron rápidamente. Un tribunal declaró a Madeleine culpable de brujería, y como prueba tenían su descendencia diabólica. En cuestión de minutos encadenaron su cuerpo inconsciente a un árbol, y le cubrieron los pies con ramitas secas y musgo. Cuando recobró el conocimiento, no opuso resistencia y solo les suplicó a sus hijos que huyeran, pero estos no tuvieron elección: les obligaron a observar cómo encendían la antorcha y cómo las llamas subían por la falda de su madre, chamuscando y devorando su carne. Vieron cómo la grasa se desprendía del cuerpo y su rostro se deformaba. Estuvieron mirando hasta que los gritos que destrozaron sus cuerdas vocales dejaron de oírse y solo quedó el chasquido de las ascuas y un hedor nauseabundo.<br><br>Cualquier sentimiento de felicidad y bondad que hubiera en aquellos hermanos murió junto con su madre. Fueron enjaulados y llevados hasta un viejo templo de madera, donde unos personajes reservados, ataviados con túnicas negras, los compraron. Victor reaccionaba como una bestia salvaje cuando intentaban acercarse a ellos, arañando y mordiendo. Lo único que lo tranquilizaba era el abrazo de su hermana. Charlotte, que sentía un profundo resentimiento hacia todo el mundo excepto hacia su hermano, encontró un nuevo propósito: sería su protectora.<br><br>En el templo fueron expuestos durante años a experimentos fuera de lo común: algunos eran crueles, y otros, simplemente sorprendentes. En una ocasión, les obligaron a romperle el cuello a un pequeño pájaro gris. En otra, hicieron que los dedos les sangraran en un jarrón con rosas. Cada siete días, dormían con una rama de roble húmeda bajo la almohada. Y después estaban los cánticos: aquellas figuras entonaban un coro incesante con una rígida periodicidad.<br><br>Finalmente, se planeó un último experimento: dos figuras guiaron a los mellizos al centro del templo y colocaron a Charlotte en el altar de una sala iluminada por candelabros. El rostro arrugado de un hombre los observaba por debajo de la caperuza, mientras colocaba una mano en la frente de cada hermano y examinaba cuidadosamente sus cráneos. \\"Memento mori\\", pronunció, mientras sacaba una hoja brillante.<br><br>Charlotte se escabulló y sacó del altar a su hermano. Victor emitió un chillido y estiró el brazo tanto como pudo, con lo que tiró un candelabro. Las llamas engulleron rápidamente la madera seca y se propagaron por el suelo, encendiendo las túnicas negras que llegaban hasta él. Los gritos agónicos atravesaban aquel infierno, enardecían a Charlotte. Mientras atravesaba aquel horror, solo acertaba a ver humo negro y llamas abrasadoras. Una pesadez dolorosa llenaba sus pulmones. No hallaba ninguna salida y cada paso que daba le hacía sentir más y más calor. Se derrumbó ahogada y, de repente, vio luz y árboles... Pasó del fuego a una hierba húmeda. Sin mirar atrás, corrió hacia el bosque, donde perdió el conocimiento.<br><br>Cuando abrió los ojos, Charlotte buscó la mano de su hermano, pero este no reaccionaba: su cuerpo yacía inerte. Le agarró la cara y miró fijamente a su hermano. Los movimientos a los que estaba acostumbrada, cómo tiraba de su piel, las piernas que salían de un hueco en el pecho... todo había desaparecido. Victor estaba muerto.<br><br>A Charlotte no le quedó más remedio que continuar mientras lloraba la muerte de su hermano, temiendo que las gentes con túnicas negras y los cazadores de brujas la encontraran. Ocultó el cadáver de su hermano bajo la ropa y se adentró en las cloacas de una ciudad cercana. Se asentó en ese lugar y solo salía para robar comida; en las épocas de mayor desesperación, saqueaba graneros para llevarse la comida de los cerdos. Con el paso de los años, el cadáver de Victor se pudrió, y las extremidades se necrosaron y supuraron. Aun así, era como si su cuerpo se resistiera a descomponerse del todo, como si la sangre de su hermana lo alimentara. Proteger el cuerpo inerte de Victor se convirtió en el único motivo de la existencia de Charlotte. Se resistía a separarse de la única familia que le quedaba.<br><br>La adolescencia se convirtió en supervivencia pura. El odio que sentía por la humanidad crecía día tras día, sobre todo cuando se dio cuenta de que jamás la dejarían en paz. No importaba cuántos murieran en sus robos e intentos desesperados por huir, siempre habría más persiguiéndola y profiriéndole palabras espantosas: monstruo, demonio, bruja... Los peores eran los de las túnicas negras. La buscaban incesantemente y la obligaban a huir de cualquier sitio donde se asentara.<br><br>Charlotte estuvo huyendo durante años, matando cuando era necesario y acunando a su hermano muerto por las noches. Durante un invierno especialmente crudo, el cuerpo empezó a fallarle. La comida escaseaba y las chozas mugrientas no la protegían de aquellas gélidas temperaturas. Hoz en mano, se resguardó cerca de la hoguera que había montado en el bosque, sin saber si los túnicas negras se la llevarían antes que el frío. Cuando la escarcha se cristalizó en sus fosas nasales y los labios se tornaron de una tonalidad azulada, Charlotte sintió algo completamente distinto: aceptación. Cerró los ojos y abrazó la serenidad de la muerte cuando, de repente, escuchó un chillido ensordecedor. Victor se sacudió en su pecho, y una nube de niebla lo envolvía. Antes de que pudiera reaccionar, se separó de su cuerpo dejando un charco sangriento, aterrizando en la nieve y salió huyendo.<br><br>Recobrando las fuerzas justo en el borde de la muerte, Charlotte salió en su búsqueda. Lo llamó incesantemente y corrió por el bosque hasta que le fallaron las fuerzas. Finalmente logró ver a Victor sentado sobre una niebla espesa. Su rostro, salvaje y retorcido, gritaba mientras una figura encapuchada salía de entre la niebla, lo agarraba por el brazo y se lo llevaba. La tranquilidad que había sentido Charlotte desapareció de repente y regresaron el odio y la rabia que tan familiares le resultaban. Agarrando firmemente la hoz, se adentró en la niebla, dispuesta a destripar a quien se acercase a su hermano.","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"Ji-Woon Hak se crecía cuando llamaba la atención de los demás; se sentía más vivo con cada mirada que se clavaba en él y con cada lengua que pronunciaba su nombre. Entre todo aquel prestigio, solo tenía un único anhelo: conseguir más. Desde que era niño sabía cómo enamorar al público. Trabajaba en el restaurante de la familia y atraía a los clientes con su espectáculo de lanzamiento de cuchillos. Los turistas más ingenuos se creían que era algo típico de la cultura surcoreana y pagaban encantados más dinero para presenciar la actuación. El padre de Ji-Woon se gastaba todo el dinero que producía el negocio en clases de baile y canto para su hijo, para que alcanzara la fama que él no pudo tener.<br><br>Ji-Woon no le decepcionó. Tras años mostrando su destreza a los idiotas de los programas de cazatalentos, puso rumbo al estrellato. Yun-Jin Lee, una productora de Mightee One Entertainment, decidió incluir a Ji-Woon en su programa de formación. Se lo llevó a un internado de Seúl donde practicaba catorce horas al día para convertirse en una estrella: aprendió a moverse, a cantar y a obtener el equilibrio perfecto entre seguridad e inocencia.<br><br>Aunque era agotador, aquel esfuerzo dio sus frutos. Yun-Jin escogió a Ji-Woon para entrar en el grupo NO SPIN y así darles un toque más descarnado a sus temas. El éxito llegó casi de inmediato. Ji-Woon vivía en una burbuja, entre entrevistas y la adoración del público. Aunque esa apretada agenda dejaba exhaustos a sus compañeros, él se sentía más vivo. Cada día era la confirmación de que estaba por encima de la mediocridad de la sociedad.<br><br>No obstante, poco a poco, aquella fama le supo a poco. Cuando observaba a sus fans, veía cómo aquella alegría y envidia se dividía entre los cinco miembros del grupo, disminuyendo así su valor. Aquella validación con la que tanto había disfrutado ahora le dejaba con el deseo de obtener más.<br><br>Ji-Woon mantuvo su imagen, fingiendo encanto donde solo había odio incrustado en su ser. Grabó el último álbum de NO SPIN junto a los demás miembros del grupo sin ningún inconveniente. Tras un largo parón para comer, regresó al estudio para descubrir el regalo que le había hecho el destino. El olor a cables quemados era inconfundible. Corrió hacia la sala de control y vio que la puerta había quedado bloqueada por unos altavoces. Al otro lado, sus compañeros aporreaban la puerta desesperados; sus alaridos se acompasaban con el crujido de las llamas.<br><br>Ji-Woon se dirigió a ellos, corrió hacia los altavoces para apartarlos y... se detuvo. Permaneció inmóvil. Cada respiración era un esfuerzo consciente y deliberado que exigía toda su atención. Apenas se podían escuchar los chillidos hasta que, poco a poco, se alejó de allí. Y después, lo escuchó. Mientras las llamas los engullían, gritaban su nombre. Le suplicaban que los salvara. ¡Ji-Woon! ¡Ji-Woon! ¡Ji-Woon Hak! Nunca había oído nada tan maravilloso. Cuando llegaron los bomberos, sus lágrimas no eran fingidas.<br><br>Ji-Woon quedó encumbrado como una figura trágica, un héroe que había arriesgado la vida para salvar a sus amigos. Yun-Jin sacó provecho de la situación y lo llevó a incontables entrevistas, hasta que fue necesario un cambio de imagen. Volvió a emerger como el Traicionero, un artista en solitario que producía sus propias canciones. Bajo su salvaje apariencia se ocultaba un tierno corazón. Sin embargo, cuando no actuaba en conciertos ni escenarios de televisión, algo muy oscuro creía en su interior.<br><br>Acechaba por la anoche a víctimas que vivían solas. El primero fue un universitario del conservatorio con una voz maravillosa. Ji-Woon lo despertó golpeándole el cráneo con un bate de béisbol, lo ató de pies y manos y lo amordazó con un trapo que fijó con cinta adhesiva. Se pasó horas torturándolo y diseccionándolo vivo. Aun así, le faltaba algo...: un sonido, una conexión. Quería escuchar aquella maravillosa voz suplicando mientras le abría el vientre, pero solo escuchaba los gritos ahogados por el trapo.<br><br>Aprendió de la experiencia y modificó sus métodos.<br><br>Tenía que secuestrar a las víctimas y llevarlas a un edificio abandonado donde pudieran gritar sin ningún tipo de limitación. Usó esos sonidos para crear música, hiriéndolas en diferentes lugares para producir varios alaridos y aullidos. Apuñalar el músculo cuadrado lumbar provoca un gemido largo y gutural, y rajar la arteria carótida hace que las personas suenen como si se estrangulara un gato. Su sufrimiento transmitía sinceridad. Ji-Woon grababa todas las sesiones y usaba sintetizadores para incorporarlas en sus temas, camuflando esos espantosos sonidos entre varias capas de melodías.<br><br>Disfrutaba enormemente con este trabajo. Además, iba dejando pistas a la policía. Por ejemplo, colocó una estola de visón, usada en una sesión de fotos reciente, alrededor de una víctima degollada. En el siguiente asesinato, extrajo los dientes de un hombre para que se pareciera a un boxeador que aparecía en uno de sus videoclips. Durante otro desesperado intento por llamar la atención, asesinó a una fan que había conocido en un encuentro vip. Tras arrancarle los ojos, colocó unos gemelos de diamante en las órbitas y le escribió con sangre en el pecho la frase: \\"HE VISTO A DIOS\\". Cada escena era un espectáculo impresionante.<br><br>Entre la música y los asesinatos, la obra de Ji-Woon estaba en boca de todo el mundo. Sin embargo, toda esta entrega por el arte de la violencia hizo que su carrera musical se resintiera. Los ingresos disminuyeron considerablemente y los ejecutivos de Mightee One lo señalaron como responsable. Yun-Jin lo defendió con uñas y dientes, pero no contaba con el respaldo de nadie. Se decidió que Ji-Woon dejaría de producir sus propios temas.<br><br>Esa decisión resultó ser devastadora. Sus temas mezclaban humanidad y música, pero el estudio solo quería cosas genéricas y comerciales. Esa fue la gota que colmó el vaso. Si no lograban entender su arte, les incorporaría en el mismo para que lo apreciaran. \\n\\nTenía tres meses para preparar una actuación privada para la junta ejecutiva de Mightee One. Tres meses para planear su obra maestra. Le pagó muchísimo dinero a un veterinario a cambio de botes del gas de la risa. Después, sobornó al técnico de escena del auditorio privado de Mightee One para tener acceso al lugar. Su fama le permitía gozar del beneficio de la duda; algo que una persona anónima jamás tendría. Cuando el espectáculo estuvo listo, el gas se fue filtrando en el lugar mientras los ejecutivos y tramoyistas esperaban a Ji-Woon, que se había retrasado a propósito. \\n\\nCuando llegó, los cuerpos semiinconscientes yacían en sus asientos o se arrastraban por el suelo. Rápidamente amordazó a todo el mundo y solo se detuvo cuando llegó a Yun-Jin. Al fin y al cabo, ella lo había sacado del atolladero y le había encauzado hasta estar donde merecía. Por eso la recompensaría con un asiento privilegiado para el inminente espectáculo. Aunque estaba sedada, Yun-Jin se defendió, aprovechando la ira que sentía en su interior, mucho más intensa que la del resto. Como única asistente al espectáculo, la colocó y la obligó a mantener los ojos abiertos para que disfrutara. Los demás ejecutivos no dejaban de llorar, pero Ji-Woon los subió igualmente al escenario para llevar a cabo el último acto. Con una mueca de desprecio, los maquilló toscamente y los iluminó con unos focos. Se convirtieron en sus instrumentos. \\n\\nAl ritmo de unas melodías creadas por él mismo, los fue torturando, moviéndose grácilmente de un cuerpo a otro y produciendo un crescendo operístico con sus lamentos. Las víctimas gritaban, gimoteaban, chillaban y llamaban a sus seres queridos, a sus madres... Fue un despliegue de emociones fantástico, la revelación de la condición humana... y no apartaban la mirada de Ji-Woon. \\n\\nLas vísceras adornaban el escenario hasta que un cuchillo puso fin al sonido del último instrumento humano. La música se detuvo. Ji-Woon, cubierto de sudor y sangre y exhausto, miró a Yun-Jin y le hizo una reverencia. Fin del espectáculo. Había alcanzado la perfección. Se acercó a Yun-Jin cuchillo en mano, dispuesto a liberarla de sus ataduras antes de terminar. Pero, justo cuando se acercaba a ella, llegó...\\n\\n... la niebla. \\n\\nNo sabía de dónde provenía, pero aquel frío húmedo los envolvió... y era una sensación agradable. Acertó a ver un majestuoso escenario: hospitales y templos, bosques y mataderos... un plano eterno adornado con ganchos oxidados donde un millón de ojos lo verían, huirían de él y disfrutarían de <i>la experiencia</i> que les podía proporcionar. Solo tenía que aceptar, convertirse en parte de la niebla y, lo más importante de todo, hacer que gritaran sin parar. \\n\\n¿Un bis?","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"Creado por la corporación Umbrella, Némesis es un arma bioorgánica prácticamente invencible cuyo único objetivo es cazar y aniquilar a sus objetivos. Este espécimen forma parte de la serie Tyrant T-103 y posee una inteligencia y consciencia mayores gracias al parásito NE-α que lleva implantado. Su primera misión fue en Raccoon City, donde tenía un objetivo específico: exterminar a los miembros de S.T.A.R.S. Némesis devastó la ciudad y se enfrentó varias veces a Jill Valentine. Aunque la joven logró escapar, él siempre le pisaba los talones. Justo cuando iba a atraparla, una niebla muy extraña cayó sobre ambos, entremezclándose con el humo de una ciudad sumida en el caos. Para él, este fenómeno carecía de importancia; un frío intenso y una reducción de oxígeno no resultaban ningún tipo de amenaza. Lo único que importaba era avanzar por la niebla y proseguir con su misión: encontrar a los miembros de S.T.A.R.S., exterminarlos y matar a quien se interponga en su camino.","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/es/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Un último aliento poderoso y violento arrebatado a un vigilante del psiquiátrico Crotus Prenn, Patrick Spencer. Al canalizar su energía, la Enfermera puede adentrarse en el mundo de los espíritus y proyectarse instantáneamente a través de él varias veces seguidas a costa de un gran desgaste de energía que le causa fatiga.<br><li>Otorga Proyección.</li><li>Concede <b>1</b> Proyección adicional.</li>","name":"Último suspiro de Spencer","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"Un gran cepo hecho de acero. Las trampas se hallan diseminadas por la zona a la espera de que las recojas y las instales en cualquier parte.<br><br><b>TRAMPA PARA OSOS</b><br>Por defecto, empiezas la partida con <b>1 trampa para osos</b>. Busca y encuentra más en el entorno.<br><b>Instalar trampa para osos:</b><br>Mantén pulsado el <i>botón de poder</i> para instalar una <b>trampa para osos</b> en una ubicación válida frente a ti. Una <b>trampa para osos</b> instalada inmovilizará e incapacitará a cualquier personaje que la pise. Un superviviente ileso que ponga un pie en una <b>trampa para osos</b> instalada también resultará herido, pero puede intentar escapar de ella. Pulsa el <i>botón de interacción</i> para recoger a un superviviente cercano que esté incapacitado por una <b>trampa para osos</b>.<br><b>Reinstalar trampa:</b><br>Mantén pulsado el <i>botón de poder</i> mientras estás cerca de una <b>trampa para osos</b> desactivada que haya por el terreno para reinstalarla donde está y dejarla lista de nuevo. <b>Recoger trampa para osos:</b><br>Pulsa el <i>botón de interacción</i> mientras estás cerca de una <b>trampa para osos</b> que haya por el terreno para recogerla. Por defecto, puedes llevar hasta un máximo de <b>1 trampa para osos</b> a la vez.","name":"Trampa para osos","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"Una pesada campana de hierro fundido, imbuida de poderes ancestrales. Permite al usuario acceder al mundo de los espíritus y desplazarse por él.<br><br><b>CAMPANA GIMIENTE</b><br>Mantén pulsado el <i>botón de poder</i> para <b>ocultarte</b>. Vuelve a pulsar el <i>botón de poder</i> para <b>reaparecer</b>, lo que aumenta la velocidad de movimiento durante <b>1 segundo</b>. La Campana gimiente se puede oír desde una distancia de <b>24 metros</b>.<br><br><b>Ocultarte</b><br>Cuando está oculto, <b>el Espectro</b> adquiere un aumento de velocidad de movimiento, invisibilidad casi total y el efecto de estado <b>Indetectable</b>. <b>El Espectro</b> no puede atacar mientras está oculto, pero puede interaccionar con objetos del entorno. La exposición a luces brillantes hace que <b>el Espectro</b> <b>reaparezca</b> automáticamente.","name":"Campana gimiente","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"Mantén pulsado el <i>botón de poder</i> para iniciar un esprint con motosierra. Los supervivientes golpeados durante un esprint con motosierra se quedan en estado agonizante.<br><li> Cada acción con la motosierra (encenderla, revolucionarla y <b>esprintar con ella</b>) aumentará el medidor de sobrecalentamiento.</li><li> Cuando el <b>medidor de sobrecalentamiento</b> llegue al máximo, la motosierra no se podrá usar hasta que se haya enfriado por completo. Alcanzar el sobrecalentamiento máximo no detendrá un <b>esprint con motosierra</b> ya iniciado.</li><li>El <b>medidor de sobrecalentamiento</b> se reduce cuando no se está usando la motosierra.</li>","name":"Motosierra","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"Una habilidad enseñada por su madre y dominada en la naturaleza. La Cazadora puede arrojar destrales con una precisión letal.<br><li>Empiezas la partida con <b>5 destrales</b>.</li><li>Carga el disparo para lanzarlos con la máxima velocidad.</li><li>Consigue destrales en las <b>taquillas</b>.</li>","name":"Destrales de caza","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"La oscuridad interior alimenta su determinación de arrebatarles la vida a sus presas.<br><br><b>MAL INTERIOR</b><br>Activar <b>Mal interior</b> permite que <b>la Forma</b> vea a sus presas con claridad y acumule más poder maligno al acecharlas. <br><br><b>Mal Interior I</b><br>Aplica el efecto de estado <b>Indetectable</b>. Se reduce ligeramente la velocidad de movimiento y el alcance de la embestida con el <i>ataque básico</i>.<br><br><b>Mal Interior II</b><br>Se reduce moderadamente el radio de terror. Aumenta ligeramente la velocidad de movimiento y el alcance de la embestida con el <i>ataque básico</i>.<br><br><b>Mal Interior III</b><br>Los supervivientes golpeados sufrirán el efecto de estado <b>Vulnerabilidad</b>. <b></b>Dura <b>60 segundos</b> y después se revierte a <b>Mal Interior II</b>.<br><br><b>HABILIDAD ESPECIAL: ACECHAR</b><br>Mantén pulsado el <i>botón de poder</i> para acechar a todos los supervivientes visibles. Acechar a supervivientes hace aumentar el nivel de <b>Mal Interior</b>.<br><br><span class=\\"FlavorText\\">\\"Lo conocí hace quince años; me dijeron que no le quedaba nada: ni razonamiento, ni conciencia ni comprensión; ni siquiera el concepto más rudimentario de vida o muerte, de bien o mal, de lo que es correcto o incorrecto. Conocí a este niño de seis años, de cara inexpresiva, sin emoción, y con los ojos más sombríos... Los ojos del diablo. Dediqué ocho años a intentar conectar con él y, después, otros siete a conseguir mantenerlo encerrado, porque me di cuenta de que lo que habitaba tras la mirada de ese chico era pura y sencillamente... maldad\\". (Dr. Sam Loomis)</span>","name":"Mal interior","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"La fuente del poder de la Bruja, un dedo ennegrecido que emplea como catalizador de su terrible poder. La Bruja puede moldear el barro a su antojo. Mediante dibujos rituales sencillos, crea con barro y podredumbre imágenes traicioneras de sí misma que puede usar para diversos fines. <br><li>Permite crear y mantener <b>10</b> trampas fantasma.</li><li> Permite desplazarse instantáneamente hasta las trampas activadas que estén a no más de <b>40 metros</b>.</li>","name":"Catalizador ennegrecido","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"El Caníbal empieza la partida con 3 cargas. Mantén pulsado el <I>botón de poder</i> para consumir una carga y realizar un <b>barrido con motosierra</b> capaz de golpear a varios objetivos. Los supervivientes golpeados por un <b>barrido con motosierra</b> entran en estado agonizante.<br><li>Utiliza una carga para aumentar la duración del <b>barrido con motosierra</b>. Al hacerlo, el tiempo de recarga será ligeramente mayor.</li><li> Las cargas de la motosierra se restablecerán cuando no la estés usando.</li><br><br> El <b>medidor de rabieta</b> se irá llenando lentamente al revolucionar la motosierra. Cuando el medidor llega al máximo o cuando golpea un objeto durante un <b>barrido con motosierra</b>, al Caníbal le entra una <b>rabieta</b>. La <b>rabieta</b> daña a los supervivientes que estén a su alrededor y los deja en estado agonizante.<br><li>La duración de la <b>rabieta</b> aumenta por cada carga que se haya usado durante el <b>barrido con motosierra</b>. Las cargas restantes se perderán.</li><li> Durante una <b>rabieta</b>, la velocidad de movimiento se reduce.</li><li> El <b>medidor de rabieta</b> disminuye cuando no se está usando la motosierra, y se agota por completo durante el <b>barrido con motosierra</b>.</li> ","name":"Motosierra de Bubba","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>CHISPA DE CARTER</b><br>Golpear a los supervivientes con alguna de las habilidades especiales del <b>Doctor</b>, <b>Terapia de choque</b> o <b>Explosión estática</b>, les aumenta los niveles de <i>Locura</i><b></b> y les provoca unos efectos cada vez más graves.<br><b>Locura I:</b><br>Hace que los supervivientes griten una vez, lo que revela su posición al <b>Doctor</b>. Afecta <b>ligeramente</b> a la ubicación y dirección de las pruebas de habilidad.<br><b>Locura II:</b><br>Hace que los supervivientes griten una vez y sufran alucinaciones en forma de <i>manifestaciones imaginarias del Doctor</i>. Afecta <b>moderadamente</b> a la ubicación y dirección de las pruebas de habilidad.<br><b>Locura III:</b><br>Hace que los supervivientes griten de manera intermitente y sufran alucinaciones en forma de <i>manifestaciones imaginarias del Doctor</i>. Afecta <b>tremendamente</b> a la ubicación y dirección de las pruebas de habilidad. El superviviente no puede curar, reparar, sabotear, desbloquear ni purificar ni usar objetos hasta que hayan conseguido <i>Recuperar la cordura</i>. Cuando un superviviente completa <i>Recuperar la cordura</i>, vuelve al estado <b>Locura I</b>.<br><br><b>HABILIDAD ESPECIAL: Terapia de choque</b><br>Mantén pulsado el <i>botón de poder</i> para usar <b>Terapia de choque</b> y desatar un ataque de choque a distancia por el suelo delante de ti. La <i>Locura</i> de los supervivientes a los que golpeas con <b>Terapia de choque</b> aumenta, y cualquier acción que estén realizando se interrumpe de inmediato. <b>Terapia de choque</b> anula de inmediato el efecto de estado <b>Inconsciencia</b>.<br><br><b>HABILIDAD ESPECIAL: Explosión estática</b><br>Mantén pulsado el <i>botón de la habilidad activa</i> para usar <b>Explosión estática</b> y así aumentar la <i>Locura</i> de todos los supervivientes que se encuentren dentro del radio de terror del Doctor y hacer que griten. <b>Explosión estática</b> solo se puede activar si no se está recargando. <b>Explosión estática</b> anula de inmediato el efecto de estado <b>Inconsciencia</b>.","name":"Chispa de Carter","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"Los supervivientes que están despiertos pueden oír el radio de terror y ver a <b>la Pesadilla</b> en un radio de 16 metros. Los supervivientes ven a la Pesadilla de forma intermitente a una distancia de entre 16 y 32 metros. Más allá de esa distancia, resulta invisible para ellos. <b>La Pesadilla</b> provoca el sueño de los supervivientes y hace que entren en el mundo de los sueños durante 60 segundos, y los lleva al mundo de los sueños golpeándolos con un <i>ataque básico</i>.<br><br>Una vez allí, los supervivientes sufren el efecto de estado <b>Inconsciencia</b> y pueden verse afectados por las <b>trampas de los sueños</b>. Los supervivientes pueden despertarse fallando pruebas de habilidad, encontrando a un superviviente que esté despierto para realizar la <i>acción ¡Despierta!</i> o usando los despertadores de la partida. Cada <i>acción ¡Despierta!</i> sucesiva tarda el doble de tiempo. Los despertadores proporcionan 30 segundos de inmunidad al sueño a los supervivientes.<br><br><b>HABILIDAD ESPECIAL: TRAMPA DE LOS SUEÑOS</b><br>Mantén pulsado el <i>botón de poder</i> para colocar una <b>trampa de los sueños</b>. Los supervivientes sufrirán el efecto de estado <b>Entorpecimiento</b> mientras estén tocando una <b>trampa de los sueños</b> y un breve periodo de tiempo después.<br><br>Algunos accesorios permiten cambiar <b>palés de los sueños</b> por <b>trampas de los sueños</b>. Los palés de los sueños aparecen en ubicaciones del mundo de los sueños donde haya palés. Se iluminarán para <b>la Pesadilla</b> y no lo aturdirán. <br><br><b>DISTINTIVOS DE SUEÑO</b>: <br><b>La Pesadilla</b> comienza con 5 distintivos de sueño que podrá usar para colocar trampas de los sueños. Cuando los haya gastado todos, se destruirá la trampa más antigua al colocar una nueva.<br><br><b>HABILIDAD ESPECIAL: PROYECCIÓN DE LOS SUEÑOS</b><br>Mantén pulsado el <i>botón de la habilidad activa</i> para teletransportarte a un generador que tengas a la vista. El tiempo de recarga se reduce un 15 % por cada superviviente que esté en el mundo de los sueños.","name":"Demonio de los sueños","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"Siempre leal a la causa de su maestro, castiga a los ingratos y culpables con astucia y puzles asesinos.<br><br><b>La Cerda</b> puede moverse con sigilo, emboscar y colocar trampas para osos invertidas en las cabezas de los supervivientes.<br><br><b>BAUTIZO DE PUZLE</b><br>Comienzas la partida con <b>4</b> trampas para osos invertidas <i>inactivas</i>. Cuando estés junto a un superviviente agonizante, pulsa el <i>botón de la habilidad activa</i> para colocarle una trampa para osos invertida <i>inactiva</i>. Se <i>activan</i> cuando se repara por completo un generador.<br>Los supervivientes pueden intentar liberarse de trampas para osos invertidas <i>activas</i> o <i>inactivas</i> buscando en las cajas de Puzle que se encuentran repartidas por todo el entorno hasta encontrar la llave correcta.<br><b>Trampas para osos invertidas activas</b><br>Cuando las trampas para osos invertidas se <i>activan</i>, inician un temporizador. Los supervivientes con una trampa para osos invertida <i>activa</i> son sacrificados de forma automática cuando el tiempo se agota o si tratan de abandonar la zona de la partida<i></i>.<br><br><b>HABILIDAD ESPECIAL: AGACHARTE</b><br>Pulsa el <i>botón de la habilidad activa</i> para agacharte. Vuelve a pulsarlo<i></i> para levantarte. <b>La Cerda</b> se mueve más despacio al ir de cuclillas, pero <b></b>adquiere el efecto de estado <b>Indetectable</b>.<br><br><b>ATAQUE ESPECIAL: EMBOSCADA</b><br>Mantén pulsado el <i>botón de ataque</i> mientras estás de cuclillas para llevar a cabo un ataque de <b>emboscada</b>.<br><br><span class=\\"FlavorText\\">\\"Me lo darás todo, cada célula de tu cuerpo. Las marcas de tus brazos son de otra vida. Dejaremos esa vida en el pasado. Cuando atravieses ese pasillo, no habrá vuelta atrás. ¿Lo entiendes?\\". (Bautizo de Puzle)</span>","name":"Bautizo de Puzle","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"A lo largo de los años que lleva experimentando con anestésicos y relajantes musculares, el Payaso ha desarrollado varias mezclas y fórmulas realmente efectivas. Su favorita, \\"El último acto\\", le está dando unos resultados magníficos a la hora de intoxicar y capturar a muchas de sus víctimas. Su antídoto también tiene efectos útiles.<br><br>Pulsa el <i>botón de la habilidad activa</i> para alternar entre El último acto y Antídoto para el primer acto. Pulsa el botón de poder, o bien mantenlo pulsado y luego suéltalo, para lanzar una botella.<br><br>Mantén pulsado el botón de la <i>habilidad activa</i> para rellenar tus botellas.<br><br><b>HABILIDAD ESPECIAL: El último acto</b><br>El recipiente está diseñado para romperse con el impacto y liberar así una nube de gas morada que intoxica a los supervivientes. Los supervivientes afectados sufrirán una reducción de velocidad de movimiento y de visión, y toserán involuntariamente durante 2 segundos.<br><br><b>HABILIDAD ESPECIAL: Antídoto para el primer acto</b><br>El recipiente está diseñado para romperse con el impacto y liberar así una nube de gas grisáceo que se teñirá de amarillo al activarse. El Payaso y cualquier superviviente que entre en una nube de antídoto activa, obtendrá una bonificación de velocidad de movimiento del 10 % durante 5 segundos. También cura a los supervivientes intoxicados.","name":"El último acto","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"El Espíritu puede utilizar su poder, Fantasma de Yamaoka, para cambiar a un plano etéreo y reaparecer en una ubicación nueva.<br><li>Mantén pulsado el botón de poder para cargarlo. El Espíritu abandonará su forma física y dejará una \\"cáscara\\" inerte tras de sí.</li><br>Mientras Fantasma de Yamaoka está activo:<li>El Espíritu puede desplazarse libremente y se mueve con mayor rapidez durante unos instantes. No podrá atravesar entornos físicos.</li><li>El Espíritu abandona el plano físico y no podrá ver a ningún superviviente. Sin embargo, podrá detectar las marcas de arañazos que dejan.</li><li>El Espíritu emitirá una señal auditiva por donde pase.</li><li>Cuando finalice el poder, el Espíritu mantendrá el aumento de velocidad momentáneamente, pero su cáscara desaparecerá.</li><br>Usar Fantasma de Yamaoka gasta la barra de poder, aunque se recarga con el tiempo. Deberá llenarse por completo antes de poder volver a usarlo.","name":"Fantasma de Yamaoka","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"Era un grupo de amigos normal y corriente hasta que Frank los convirtió en la Legión. Ahora se alimentan de la apasionante y descabellada libertad de no acatar ninguna norma salvo las suyas.<br><br><b>FRENESÍ SALVAJE</b><br>Activa <b>Frenesí salvaje</b> para correr a gran velocidad y encadenar ataques entre varios supervivientes. Cuando el indicador de poder esté lleno, mantén pulsado el <i>botón de poder</i> para iniciar <b>Frenesí salvaje</b>. Cuando <b>Frenesí salvaje</b> está activa, <b>la Legión</b> se mueve más deprisa y accede a habilidades adicionales: <b>Salto de palé</b> y <b>Corte salvaje</b>.<br><br><b>HABILIDAD ESPECIAL: SALTO DE PALÉ</b><br>Pulsa el <i>botón de interacción</i> mientras <b>Frenesí salvaje</b> está activa para realizar <b>Salto de palé</b> sobre un palé derribado.<br><br><b>ATAQUE ESPECIAL: CORTE SALVAJE</b><br>Pulsa el <i>botón de ataque</i> mientras <b>Frenesí salvaje</b> está activa para llevar a cabo <b>Corte salvaje</b>. Si golpeas a un superviviente con <b>Corte salvaje</b>, el superviviente pasa a estar herido y sufre el efecto de estado <b>Herida profunda</b>. El indicador de poder de la Legión se llena e Instinto asesino revela a todos los supervivientes que se hallen dentro del radio de terror sin estar sufriendo el efecto de estado <b>Herida profunda</b>. Si el superviviente ya está sufriendo el efecto de estado <b>Herida profunda</b>, <b>Frenesí salvaje</b> se desactiva de inmediato sin causar ningún efecto.","name":"Frenesí salvaje","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"Su enfermedad empeoró a medida que la plaga se iba apoderando de su cuerpo: los dedos de los pies se le ennegrecieron, el cuello se le infestó de quistes y empezó a atragantarse con vómitos de sangre.<br><br><b>PURGA VIL</b><br>Infecta objetos del entorno y a supervivientes con <b>Purga vil</b> para crear un ciclo interminable de enfermedad. Mantén pulsado el <i>botón de poder</i> para cargar <b>Purga vil</b>. Al soltarlo, expulsas un chorro de bilis infecciosa. Si golpeas a un superviviente, quedará infectado. Si golpeas un objeto del entorno, quedará infectado durante un corto periodo de tiempo. Los supervivientes que interaccionen con objetos infectados también se contagiarán.<br><br>Si el indicador de infección del superviviente está completamente lleno, este pasa a estar herido y comienza a sufrir el efecto de estado <b>Desesperanza</b>, además de empezar a vomitar a intervalos aleatorios.<br><br><b>HABILIDAD ESPECIAL: CORRUPCIÓN DE INGESTA</b><br>Los supervivientes infectados pueden recuperar la salud por completo y curarse de la infección purificándose en una <i>fuente de devoción</i>. Esta acción corrompe la fuente, y permite que <b>la Plaga</b> consuma la corrupción para fortalecer su purga. Mantén pulsado el <i>botón de interacción</i> junto a una <i>fuente de devoción</i> corrupta para transformar <b>Purga vil</b> en <b>Purga corrupta</b>. Esta acción elimina la corrupción de la fuente.<br><br><b>ATAQUE ESPECIAL: PURGA CORRUPTA</b><br>Tras utilizar la habilidad <b>Corrupción de ingesta</b>, <b>Purga corrupta</b> sustituye a <b>Purga vil</b> durante un corto periodo de tiempo. <b>Purga corrupta</b> daña de forma instantánea a los supervivientes que entren en contacto con el chorro, pero ya no infecta a supervivientes ni objetos del entorno.","name":"Purga vil","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>Ghost Face</b> solía estudiar a sus víctimas y registrar sus hábitos meticulosamente durante varias semanas. Cuando la pulsión de matar se volvía irrefrenable, sabía exactamente cómo y dónde atacar.<br><br><b>VELO DE LA NOCHE</b><br>Pulsa el <i>botón de poder</i> para activar <b>Velo de la noche</b> cuando el indicador de poder esté lleno. Mientras <b>Velo de la noche</b> esté activo, <b>Ghost Face</b> adquirirá el efecto de estado <b>Indetectable</b>. Realizar un <i>ataque básico</i> consumirá todo tu indicador de poder y desactivará <b>Velo de la noche</b>.<br><b>Revelación</b><br>Los supervivientes que estén cerca de <b>Ghost Face</b> pueden <i>revelarlo</i> si ven en su dirección durante unos instantes. La <i>revelación</i> gastará completamente el indicador de poder de <b>Ghost Face</b> y desactivará automáticamente <b>Velo de la noche</b>. <i>Instinto asesino</i> mostrará durante unos instantes la ubicación de los supervivientes que <i>revelen</i> a <b>Ghost Face</b>.<br><br><b>HABILIDAD ESPECIAL: ACECHAR</b><br>Mantén pulsado el <i>botón de poder</i> para acechar a supervivientes mientras <b>Velo de la noche</b> está activo. Mantén pulsado el <i>botón de poder</i> mientras estás tras algún objeto para asomarte y acechar a mayor velocidad. Acechar por completo a un superviviente <i>marca</i> a tu objetivo y le aplica el efecto de estado <b>Vulnerabilidad</b> <i></i>temporalmente.<br><br><b>HABILIDAD ESPECIAL: AGACHARTE</b><br>Pulsa el botón de la habilidad activa para ponerte de cuclillas. Vuelve a pulsarlo para levantarte. Mientras está de cuclillas, <b>Ghost Face</b> se mueve más despacio.<br><br><span class=\\"FlavorText\\">\\"Como si yo no estuviera. Mírame. Eso es, sigue así. Perfecto. Recordaré esta imagen de ti\\". (Ghost Face)</span>","name":"Velo de la noche","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"Un poder sobrenatural desconocido emergió de su cuerpo. De repente, el suelo se abre y engulle al Demogorgon.<br><br><b>DESDE EL ABISMO</b><br>Mantén pulsado el <i>botón de poder</i> para cargar y activar <b>Desde el abismo</b>. Instinto asesino señalará a todos los supervivientes que estén cerca de un portal activado.<br><br><b>ATAQUE ESPECIAL: DESMENUZAR</b><br>Pulsa el <i>botón de ataque</i> mientras cargas o mantienes <b>Desde el abismo</b> para abalanzarte y atacar con un corte feroz.<br><br><b>HABILIDAD ESPECIAL: PORTALES</b><br>Pulsa el <i>botón de la habilidad activa</i> para abrir un portal en el suelo delante de ti.<br><b>Cruzar el Mundo Del Revés</b><br>Cuando estés delante de un portal y tengas otro portal diferente iluminado, vuelve a pulsar el <i>botón de la habilidad activa</i> para viajar a través del Mundo Del Revés hasta el portal deseado.<br><b>Portales activados</b><br>Los portales se activan al atravesarlos por primera vez. Los supervivientes solo pueden sellar portales activados. El aura de los portales activados es amarilla.","name":"Desde el abismo","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"El deseo de destruir linajes más débiles dio forma a un poder material.<br><br><b>CÓLERA DE YAMAOKA</b><br>Absorbes orbes de sangre de tus enemigos heridos. Mantén pulsado el <i>botón de poder</i> para absorber orbes de sangre del entorno y llenar tu indicador de poder. Cuando esté lleno, mantén pulsado el <i>botón de la habilidad activa</i> para iniciar <b>Furia sangrienta</b>.<br><b>Furia sangrienta:</b>\\nCuando <b>Furia sangrienta</b> está activa, <b>el Oni</b> se vuelve letal y accede a habilidades especiales: <b>Velocidad demoníaca</b> y <b>Golpe demoníaco</b>.<br><br><b>HABILIDAD ESPECIAL: Velocidad demoníaca</b><br>Mantén pulsado el <i>botón de poder</i> mientras <b>Furia sangrienta</b> está activa para desplazarte a una <b>Velocidad demoníaca</b>. Esta habilidad permite <b>al Oni</b> recorrer largas distancias rápidamente.<br><br><b>ATAQUE ESPECIAL: Golpe demoníaco</b><br>Mantén pulsado el <i>botón de ataque</i> mientras <b>Furia sangrienta</b> está activa para asestar un <b>Golpe demoníaco</b> en la dirección a la que estés mirando. <b>Golpe demoníaco</b> tiene un gran alcance y, al golpear a los supervivientes ilesos, los deja agonizantes de forma inmediata.","name":"Cólera de Yamaoka","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"El ingenio del Arponero le otorga la habilidad de capturar a sus presas con un invento único: un fusil híbrido muy modificado que reemplaza la munición convencional por un afiladísimo arpón fijado a una cadena.<br><br><b>APREHENSOR</b><br>Mantén pulsado el <i>botón de poder</i> para apuntar. Pulsa el <i>botón de ataque</i> para disparar un arpón a un superviviente y así poder atraerlo contra su voluntad hacia <b>el Arponero</b>.<br><b>Recoger:</b><br>Mientras un superviviente siga arponeado por <b>Aprehensor</b>, mantén el <i>botón de poder</i> para atraerlo hacia ti. El superviviente puede intentar librarse de la cadena o usar el entorno para tensionarla hasta que se rompa. Si lo consigue, el superviviente se quedará herido y sufrirá el efecto de estado <b>Herida profunda</b>, pero dejará aturdido durante unos instantes al <b>Arponero</b>. Si usas un <i>ataque básico</i> mientras tienes sujeto a un superviviente con un arpón, la cadena se romperá sin aplicar penalización alguna ni <b>al Arponero</b> ni al superviviente. Si golpeas a un superviviente ileso con un <i>ataque básico</i> mientras está sujeto por un arpón, le aplicarás el efecto de estado <b>Herida profunda</b>.<br><b>Recargar:</b><br><b>Aprehensor</b> debe recargarse tras cada disparo antes de poder volver a activarse. Mantén pulsado el <i>botón de la habilidad activa</i> para recargar <b>Aprehensor</b>.","name":"Aprehensor","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"¡Abre las puertas del sufrimiento y recibe tu sentencia! El cuchillo grande divide el suelo y da lugar a una construcción infernal que propaga el sufrimiento por todas las inmediaciones.<br><br><b>RITOS DE SENTENCIA</b><br>Mantén pulsado el <i>botón de poder</i> para activarla y muévete en cualquier dirección para crear un rastro en el suelo.<br><br>Los supervivientes que caminen o corran por el rastro activarán <i>Instinto asesino</i> y sufrirán <i>Tormento</i>. Es posible enviar a los supervivientes afectados por <i>Tormento</i> a una <b>Jaula de expiación</b> cuando estén agonizantes.<br><br><b>ATAQUE ESPECIAL: Castigo de los condenados</b><br>Pulsa el <i>botón de ataque</i> mientras <b>Ritos de sentencia</b> esté activo para utilizar <b>Castigo de los condenados</b>. Esto libera una onda de fuerza que daña a los supervivientes que se crucen en su camino.<br><br><b>HABILIDAD ESPECIAL: Jaula de expiación</b><br>Pulsa el <i>botón de la habilidad activa</i> mientras te encuentres sobre un superviviente agonizante afectado por <i>Tormento</i> para enviarlo a una <b>Jaula de expiación</b>. Puedes sacrificar a los supervivientes que se encuentren en una <b>Jaula de expiación</b> como si estuvieran en un gancho. Durante la segunda fase del ritual de invocación, estarán obligados a completar pruebas de habilidad para contener al Ente.<br><br>Si te rescatan o rescatas a otro superviviente de una <b>Jaula de expiación</b> desaparecerá el efecto de <i>Tormento</i>.<br><br><b>HABILIDAD ESPECIAL: Sentencia definitiva</b><br>Pulsa el <i>botón de la habilidad activa</i> mientras te encuentres sobre un superviviente agonizante afectado por <i>Tormento</i> y que haya alcanzado la fase de pugna colgado de un gancho o en una jaula para ejecutarlo.","name":"Ritos de sentencia","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"El suero de pústula corre por sus venas y le corrompe la mente y el cuerpo, además de otorgarle habilidades físicas sobrenaturales.<br><br><b>HABILIDAD ESPECIAL: ACOMETIDA</b><br>Pulsa el <i>botón de poder</i> para realizar una <b>Acometida</b> rápida hacia delante. Al hacerlo, consumirás un distintivo de <b>Acometida</b>. Mientras está usando <b>Acometida</b>, el Deterioro no podrá lanzar ataques.<br><br>Usa <b>Acometida</b> contra una pared u obstáculo del entorno para darle un <b>Topetazo</b>. Si <b>Acometida</b> no da contra ninguna pared u obstáculo, o si el Deterioro se queda sin distintivos de <b>Acometida</b>, entrará en estado de fatiga durante unos instantes y comenzará a recargar los distintivos.<br><br><b>ATAQUE ESPECIAL: ACOMETIDA LETAL</b><br>Tras un <b>Topetazo</b>, pulsa el <i>botón de poder</i> para realizar una <b>Acometida letal</b>. Al hacerlo, consumirás un distintivo de <b>Acometida</b>. La <b>Acometida letal</b> es igual que una <b>Acometida</b> normal, solo que el Deterioro puede atacar pulsando el <i>botón de ataque</i>.","name":"Corrupción deteriorada","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"Aunque la sangre y los traumas hayan unido a los Mellizos para la eternidad, tienen la capacidad de separarse del cuerpo que comparten. Juntos, cazan como hermano y hermana, duplicando la amenaza para los supervivientes.<br><br><b>HABILIDAD ESPECIAL: Vínculo de sangre</b><br>Mantén pulsado el <i>botón de poder</i> para separar a <b>Victor</b>. Intercambia los controles entre <b>Charlotte</b> y <b>Victor</b> tocando el <i>botón de la habilidad</i>.<br><br>Mientras esté solo, <b>Victor</b> activará <b>Instinto asesino</b>, mostrándole a <b>Charlotte</b> las siluetas de los supervivientes que caminen o corran cerca de él. Los supervivientes que puedan oír los chillidos de <b>Victor</b> se verán afectados por él. Sin embargo, los supervivientes pueden machacar a <b>Victor</b> si estás controlando a <b>Charlotte</b> en ese momento.<br><br>Si lo machacan, <b>Victor</b> reaparecerá en <b>Charlotte</b> después de un tiempo.<br><br><b>ATAQUE ESPECIAL: Ataque en salto</b><br>Mientras controlas a <b>Victor</b>, mantén pulsado el <i>botón de la habilidad</i> para cargar un <b>Ataque en salto</b> y toca el <i>botón de ataque</i> para ejecutarlo.<br><br>Si el <b>Ataque en salto</b> acierta a golpear, infligirá daños al superviviente. Si el superviviente tenía la salud al máximo, <b>Victor</b> se agarrará a él y activará <b>Instinto asesino</b>, lo que mostrará la ubicación de los supervivientes que haya cerca. Mientras Victor esté aferrado, el superviviente sufrirá los efectos de estado <b>Desesperanza</b>, <b>Inconsciencia</b> e <b>Incapacitación</b>. No podrá entrar en taquillas ni salir por la puerta de salida. El superviviente podrá machacar a <b>Victor</b> mientras está aferrado a él si completa la acción <b>Eliminar</b>.<br><br>Si <b>Victor</b> falla el <b>Ataque en salto</b>, se quedará expuesto momentáneamente y un superviviente podrá machacarlo. Si Victor cae en un obstáculo de mayor altura que él, se destruirá.","name":"Vínculo de sangre","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>Una habilidad fascinante, perfeccionada tras una vida entrenando, Ji-Woon Hak desata una ráfaga de cuchillos a una velocidad pasmosa.</i><br><br><b>FUROR</b><br><br>Comienza la partida con <b>60 cuchillos</b>. Pulsa y mantén pulsado el <i>botón de poder</i> para activarte y entrar en el modo de lanzamiento.<br><br>Mientras estés en ese modo, toca el <i>botón de ataque</i> para lanzar un solo cuchillo, o mantén pulsado el <i>botón de ataque</i> para liberar una descarga de cuchillos. Si lo haces, aumentarás el control y el ritmo de lanzamiento, pero se reducirá la velocidad de movimiento. Los cuchillos se repondrán en las taquillas.<br><br><b>Medidor de desgarro:</b> El <b>medidor de desgarro</b> de un superviviente aumenta cada vez que le alcanza un cuchillo. Cuando el medidor esté lleno, perderá un estado de salud, sufriendo heridas o cayendo derribado.<br><br>El medidor de desgarro de un superviviente se reducirá gradualmente si no le alcanza un cuchillo durante un breve periodo de tiempo. Al alcanzar a un superviviente con un ataque básico, se reducirá inmediatamente su medidor de desgarro.<br><br><b>HABILIDAD ESPECIAL: Evento principal</b><br>Cada ataque con cuchillo llena el <b>medidor de evento</b>. Cuando se llene, podrás activar el <b>evento principal</b> pulsando el <i>botón de la habilidad</i>. En este modo, el Traicionero arroja automáticamente una cantidad ilimitada de cuchillos mientras dure <b>el evento principal</b>. Su ritmo de lanzamiento aumenta considerablemente y sus movimientos no se ven afectados con cada lanzamiento. Puedes cancelar <b>el evento principal</b> pulsando el <i>botón de la habilidad</i>. Si lo haces, el <b>medidor del evento</b> volverá a cero y se iniciará una recarga en <b>Furor</b>.","name":"Furor","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"Un virus que provoca mutaciones extremas y se puede transmitir a otros. Sus efectos intensifican la fuerza y agresividad de Némesis.<br><br><b>ATAQUE ESPECIAL: Golpe de tentáculo</b><br>Mantén pulsado el botón de poder para cargar un ataque. Cuando se cargue, toca el botón de ataque para desatar <b>Golpe de tentáculo</b>. Al atacar a un superviviente con <b>Golpe de tentáculo</b>, le causa el efecto de estado <b>Ponzoña</b> y aumenta tu <b>tasa de mutación</b>. Si un superviviente ya sufre <b>Ponzoña</b>, el <b>Golpe de tentáculo</b> dañará su salud.<br><br>Los supervivientes pueden curar <b>Ponzoña</b> con una <b>vacuna</b>, disponibles en las <b>cajas de suministros</b> que llevan ellos y otros supervivientes. La cantidad de <b>vacunas</b> es limitada. Tras usar una <b>vacuna</b>, Instinto asesino revelará la ubicación del superviviente.<br><br><b>Tasa de mutación:</b> tu poder se incrementa a medida que aumenta tu <b>tasa de mutación</b>. Con la <b>tasa de mutación 2</b>, <b>Golpe de tentáculo</b> puede destruir palés y muros destruibles. Con la <b>tasa de mutación 3</b>, aumentará el alcance de <b>Golpe de tentáculo</b>. El icono del virus T muestra el nivel actual de la <b>tasa de mutación</b>.<br><br><b>ENEMIGO ESPECIAL: zombis</b><br>Cuando un <b>zombi</b> ataque a un superviviente, sufrirá el efecto de estado <b>Ponzoña</b>. Si el superviviente <b>ya lo está sufriendo</b>, se reducirá su salud.<br><br>Los <b>zombis</b> se pueden destruir con <b>Golpe de tentáculo</b> para aumentar tu <b>tasa de mutación</b> y los supervivientes pueden destruirlos con palés. Los <b>zombis</b> destruidos reaparecerán tras un breve periodo de tiempo.","name":"VIRUS T","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/es/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en todas las categorías a todos los jugadores de esta partida.<br><li>Acumulable.</li>","name":"Serpentinas de fiesta ensangrentadas","flavor":"\\"Un recuerdo de un momento en que la gente vino toda junta a pasárselo de muerte y se marchó gritando\\".","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"<b>Aclara ligeramente</b> la niebla oscura.<br><li>Acumulable.</li>","name":"Reactivo transparente","flavor":"\\"La bruma llega y atrapa todo dentro su intensa locura. No hay salida, ni escape, ni refugio, salvo por las aguas cristalinas del estanque perdido en el bosque\\". (Autor desconocido, cuaderno)","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"<b>Espesa ligeramente</b> la niebla oscura.<br><li>Acumulable.</li>","name":"Reactivo translúcido","flavor":"\\"Incapaz de moverme, permanezco en medio del frío mientras la muerte merodea por el lugar\\".","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"<b>Espesa moderadamente</b> la niebla oscura.<br><li>Acumulable.</li>","name":"Reactivo turbio","flavor":"\\"La niebla es seductora e hipnotizante. La amo y la temo al mismo tiempo\\". (Cuaderno de bocetos de Donna)","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"<b>Espesa enormemente</b> la niebla oscura.<br><li>Acumulable.</li>","name":"Reactivo opaco","flavor":"\\"La niebla parece protegernos de la bestia, pero es un veneno, un cáncer que nos llena de oscuridad y locura\\". (Autor desconocido, cuaderno)","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"Invoca al Ente para crear una <b>luz de luna mucho más oscura</b>.","name":"Ramillete de luna nueva ","flavor":"\\"Mejor vuélvete a dormir, no hay luna esta noche\\".","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"Invoca al Ente para crear una <b>luz de luna más oscura</b>.","name":"Ramillete de luna creciente","flavor":"\\"La luna se desvanece lentamente, formando una sonrisa: \'No te preocupes, tu secreto está a salvo conmigo\'. ¿O será una mueca?\\".","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"Invoca al Ente para crear una <b>luz de luna más brillante</b>.","name":"Ramillete de luna menguante","flavor":"\\"La vieja luna muestra su cara, contemplando desde arriba a sus presas\\".","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"Invoca al Ente para crear una <b>luz de luna mucho más brillante</b>.","name":"Ramillete de Luna Llena","flavor":"\\"Cuando la luna se pone, los lobos aúllan para dar comienzo a la cacería\\".","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"<b>Aumenta ligeramente</b> la probabilidad de que se te envíe a la finca MacMillan.<br><li>Acumulable.</li>","name":"Página del libro de contabilidad de MacMillan","flavor":"\\"Una página descolorida de un libro de contabilidad con información ilegible junto al sello de los MacMillan\\".","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"<b>Aumenta considerablemente</b> la probabilidad de que se te envíe a la finca MacMillan.<br><li>Acumulable.</li>","name":"Página firmada de libro de contabilidad","flavor":"\\"Una página descolorida de un libro de contabilidad sobre equipo de minería y otras transacciones. Firmada por Archie MacMillan\\".","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe a la finca MacMillan.<br><li>Acumulable.</li>","name":"Hueso de falange de MacMillan","flavor":"\\"Los restos óseos de MacMillan fueron hallados en el sótano del depósito de la mina. En su regazo tenía los huesos destrozados de sus piernas y un martillo de minero\\".","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"<b>Aumenta ligeramente</b> la probabilidad de que se te envíe al desguace Autohaven.<br><li>Acumulable.</li>","name":"Matrícula destrozada","flavor":"\\"Una lámina de metal muy oxidada, doblada y rota\\".","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"<b>Aumenta considerablemente</b> la probabilidad de que se te envíe al desguace Autohaven.<br><li>Acumulable.</li>","name":"Matrícula de Virginia","flavor":"\\"Una matrícula doblada y oxidada del estado de Virginia\\".","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe al desguace Autohaven.<br><li>Acumulable.</li>","name":"Llave de Azarov","flavor":"\\"Una llave rota de un vehículo de marca desconocida. El llavero identifica al dueño como un tal A. Azarov\\".","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"<b>Aumenta ligeramente</b> la probabilidad de que se te envíe a la Granja Coldwind.<br><li>Acumulable.</li>","name":"Etiqueta de ganado n.º 28","flavor":"\\"Una etiqueta de ganado manchada de sangre que lleva el número 28\\".","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"<b>Aumenta considerablemente</b> la probabilidad de que se te envíe a la Granja Coldwind.<br><li>Acumulable.</li>","name":"Etiqueta de ganado Coldwind n.º 81","flavor":"\\"Una etiqueta de ganado manchada de sangre en la que pone \'Granja Coldwind\' y el número 81\\".","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe a la Granja Coldwind.<br><li>Acumulable.</li>","name":"Medallón de corazón","flavor":"\\"Un medallón de plata en forma de corazón. El sencillo interior viene tallado con las iniciales \'E+M\'\\".","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"<b>Aumenta ligeramente</b> la probabilidad de que se te envíe al psiquiátrico Crotus Prenn.<br><li>Acumulable. </li>","name":"Billete a la locura","flavor":"\\"Un billete de papel desgastado y descolorido con información ilegible\\".","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"<b>Aumenta considerablemente</b> la probabilidad de que se te envíe al psiquiátrico Crotus Prenn.<br><li>Acumulable.</li>","name":"Billete a la locura de P. Elliott","flavor":"\\"Un billete de papel rosa en el que se prescribe el traslado de Philip Elliott al psiquiátrico Crotus Prenn\\".","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe al psiquiátrico Crotus Prenn.","name":"Fotografía de boda quemada","flavor":"\\"Un retrato quemado de una pareja en el día de su boda cuyos rostros aparecen totalmente quemados e inidentificables\\".","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"<b>Aumenta ligeramente</b> la probabilidad de que se te envíe a Haddonfield.<br><li>Acumulable.</li>","name":"Panfleto de la Fiesta de la Cosecha","flavor":"\\"Un panfleto informativo descolorido de la Fiesta de la Cosecha de Haddonfield de 1978. Tiene una gran calabazada dibujada en la parte delantera\\".","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"<b>Aumenta considerablemente</b> la probabilidad de que se te envíe a Haddonfield.<br><li>Acumulable.</li>","name":"Tablilla decrépita","flavor":"\\"Una tablilla de roble mohosa y podrida, similar a las de la mayoría de las casas de Haddonfield\\".","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe a Haddonfield.","name":"Llave de la inmobiliaria Strode","flavor":"\\"La llave de una casa, sin nada de especial. Tiene una etiqueta de cartón en la que pone \'Inmobiliaria Strode\', seguida de la dirección \'Avenida Lampkin, n.º 45\'\\".","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"<b>Aumenta ligeramente</b> la probabilidad de que se te envíe al pantano de aguas estancadas.<br><li>Acumulable</li>","name":"Cordaje humeante","flavor":"\\"Un trozo quemado de cuerda náutica que todavía emite humo caliente\\".","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"<b>Aumenta considerablemente</b> la probabilidad de que se te envíe al pantano de aguas estancadas.<br><li>Acumulable.</li>","name":"Señal de bienvenida humeante","flavor":"\\"Una señal de bienvenida hecha con una tosca tabla de ciprés pulida por el agua. Está carbonizada y todavía le sale humo\\".","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe al pantano de aguas estancadas.","name":"Libro de cocina de la abuela","flavor":"\\"Un libro con tapas de cuero que contiene recetas escalofriantes con carne humana, como el \'delicioso chile abofeteado de la abuela\'\\".","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"<b>Aumenta ligeramente</b> la probabilidad de que se te envíe al Instituto Conmemorativo Léry.<br><li>Acumulable.</li>","name":"Certificado de emergencia","flavor":"\\"Una fotocopia de un certificado para ingresar a un paciente que necesita tratamiento de emergencia. La información está borrosa y resulta ilegible\\".","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"<b>Aumenta considerablemente</b> la probabilidad de que se te envíe al Instituto Conmemorativo Léry.<br><li>Acumulable.</li>","name":"Informe de evaluación psiquiátrica","flavor":"\\"Un informe psiquiátrico firmado por Herman Carter. Describe el deterioro mental del paciente e incluye sugerencias para los siguientes pasos del procedimiento\\".","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe al Instituto Conmemorativo Léry.","name":"Gafas rotas","flavor":"\\"Gafas de lectura dobladas. Se puede apreciar gotas de sangre seca en la lente destrozada\\".","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"<b>Aumenta ligeramente</b> la probabilidad de que se te envíe al bosque rojo.<br><li>Acumulable.</li>","name":"Piedra de río pintada","flavor":"\\"Una piedra suave, pulida por la corriente. Decorada con pintura roja, negra y blanca para representar un oso con expresión seria\\".","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"<b>Aumenta considerablemente</b> la probabilidad de que se te envíe al bosque rojo.<br><li>Acumulable.</li>","name":"Libro infantil","flavor":"\\"Un libro de cuentos viejo y ajado, cuyas páginas se han perdido debido a los elementos\\".","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe al bosque rojo.","name":"La última máscara","flavor":"\\"Una máscara de tigre hermosamente elaborada que encajaría en la cara de un niño. En el reverso hay una nota borrosa en alfabeto cirílico\\".","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe a Springwood.","name":"El flautista de Hamelín","flavor":"\\"Traicionado por la ciudad, consuma su venganza llevándose a todos sus hijos\\".","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"Quemar esta ofrenda te otorga protección contra la pérdida de tus accesorios al final de la partida.","name":"Defensa negra","flavor":"\\"Oye mi voz, perdona mis actos y protégeme del vacío\\".","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"Quemar esta ofrenda te otorga protección contra la pérdida de tu objeto y tus accesorios.","name":"Guardián blanco","flavor":"\\"Aléjame del mal, defiéndeme y desaparece\\".","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe a la residencia Yamaoka.","name":"Blasón familiar de los Yamaoka","flavor":"\\"Nunca abandonas un hogar roto. Solo huyes hasta que los recuerdos dejan de atormentarte\\".","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"Invoca al Ente para que rechace todas las ofrendas que alteren la posibilidad de ser enviados a un reino específico.<br>Su efecto solo se puede neutralizar con cuatro ofrendas idénticas al mismo reino.","name":"Cámara de sacrificios","flavor":"\\"Con ojos ciegos, renunciamos a nuestra voluntad y rogamos que nos guíes\\".","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe a la Escuela de primaria Midwich.","name":"Carta de Mary","flavor":"\\"En mis sueños más inquietos veo esa ciudad\\".","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe a la planta procesadora de carne Gideon.","name":"Pieza de Puzle","flavor":"\\"Enhorabuena. Sigues con vida. La mayoría de la gente no agradece seguir con vida. Pero tú no. Ya no\\".","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe al Laboratorio Nacional de Hawkins.","name":"Tarjeta de identificación del Laboratorio Nacional de Hawkins ","flavor":"\\"Una tarjeta de identificación ensangrentada y húmeda con un número de serie\\".","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"<b>Aumenta tremendamente</b> la probabilidad de que se te envíe a Tumba de Glenvale.","name":"Nudo corredizo","flavor":"\\"Pregúntale a alguien que esté luchando por sobrevivir en estas tierras polvorientas lo que representa realmente un nudo corredizo. Compasión, ni más ni menos que compasión\\".","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"Una tarta terrible de las que revuelven el estómago para celebrar nuestro tercer aniversario. Otorga una bonificación de puntos de sangre del <b>103 %</b> en todas las categorías para todos los jugadores de la partida.<br><li>Acumulable</li>","name":"Tarta horripilante","flavor":"\\"¡Feliz aniversario! ¡Brindemos por estos tres años juntos!\\".<br>(El equipo de Dead by Daylight)","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"Una tarta increíblemente aterradora para celebrar nuestros cuatro años juntos. Es un 1 % más sabrosa que una Tarta horripilante. Otorga un <b>104 %</b> extra de puntos de sangre en todas las categorías a todos los jugadores de la partida.<br><li>Acumulable</li>","name":"Tarta fantasmagórica","flavor":"\\"¡Feliz aniversario! ¡Que sean muchos más!\\".<br>(El equipo de Dead by Daylight)","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/es/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Una lente delgada y amplia en perfectas condiciones. Diseñada para ensanchar el haz de la linterna al precio de reducir su alcance.<br><li><b>Ensancha moderadamente</b> el haz de la linterna.</li><li><b>Reduce ligeramente</b> el alcance del haz de la linterna.</li>","name":"Lente ancha","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"Una diminuta bombilla de mayor potencia para emitir un haz más brillante y potente.<br><li><b>Estrecha ligeramente</b> la anchura del haz de la linterna.</li><li><b>Aumenta ligeramente</b> el brillo del haz de la linterna.</li><li><b>Aumenta ligeramente</b> la duración de la ceguera.</li>","name":"Bombilla de alta potencia","flavor":"\\"Ni siquiera la luz más poderosa puede atravesar la oscuridad de la niebla negra\\".","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"Una tira de cuero atada alrededor de la linterna para mayor agarre.<br><li><b>Aumenta ligeramente</b> la precisión de la linterna.</li>","name":"Mango de cuero","flavor":"\\"Demasiados han caído por culpa de unas manos sudorosas\\".","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"Una pila estándar de marca desconocida.<br><li>Añade <b>2 segundos</b> de uso a una linterna normal.</li>","name":"Pila","flavor":"\\"Otra pila casi sin carga\\".","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"Una combinación de lente y reflector que magnifica el haz de la linterna.<br><li><b>Aumenta moderadamente</b> el brillo del haz de la linterna.</li><li><b>Aumenta moderadamente</b> la duración de la ceguera.</li>","name":"Lentes TIR","flavor":"\\"Que la luz los libere de su manto de oscuridad\\".","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"Un mango de goma ideal para conseguir un mejor agarre con la linterna.<br><li><b>Aumenta moderadamente</b> la precisión de la linterna.</li>","name":"Mango de goma","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"Una bombilla incandescente diseñada para extender la vida útil de una pila para linterna.<br><li><b>Reduce moderadamente</b> el consumo de la pila para linterna.</li>","name":"Filamento de Bajo Amperaje","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"Una pila etiquetada como \\"de uso industrial\\".<br><li>Añade <b>4 segundos</b> de uso a una linterna estándar.</li>","name":"Pila de gran autonomía","flavor":"\\"Una pila que anuncian que dura 8 horas, en la niebla negra tiene una autonomía de apenas un par de segundos\\".","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"Una lente de cristal gruesa que concentra el haz de la linterna para incrementar su intensidad.<br><li><b>Aumenta ligeramente</b> el alcance del haz de la linterna.</li><li><b>Estrecha ligeramente</b> la anchura del haz de la linterna.</li><li><b>Aumenta ligeramente</b> el brillo del haz de la linterna.</li><li><b>Aumenta ligeramente</b> la duración de la ceguera.</li>","name":"Lente de enfoque","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"Un modelo reciente de pila que dura más tiempo.<br><li>Añade <b>6 segundos</b> de uso a una linterna común.</li>","name":"Pila de larga duración","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"Una bombilla química que genera una intensa luz clara.<br><li><b>Aumenta considerablemente</b> el brillo del haz de la linterna.</li><li><b>Aumenta considerablemente</b> la duración de la ceguera.</li>","name":"Halógeno potente","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"Una lente grande hecha de zafiro resistente a los arañazos que optimiza la potencia y el alcance del haz de la linterna.<br><li><b>Ensancha moderadamente</b> el haz de la linterna.</li><li><b>Aumenta ligeramente</b> el haz de la linterna.</li><li><b>Aumenta moderadamente</b> el brillo del haz de la linterna.</li><li><b>Aumenta moderadamente</b> la duración de la ceguera.</li>","name":"Lente de zafiro de calidad superior","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"Una bombilla dura y totalmente opaca de origen desconocido que emite una luz mortecina incluso cuando está apagada.<br><li><b>Aumenta tremendamente</b> el brillo del haz de la linterna.</li><li><b>Aumenta tremendamente</b> la duración de la ceguera.</li><li><b>Aumenta ligeramente</b> el consumo de energía de la linterna.</li>","name":"Bombilla rara","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"Una cuerda bien tejida que se usa en rituales de oración. Se puede atar a la llave.<br><li>Añade <b>10 segundos</b> de uso a la llave.</li>","name":"Cordón de oración","flavor":"\\"Reza todo lo que quieras, que tus palabras se perderán allá en lo alto, entre la niebla\\".","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"Una perla blanca porosa y rayada. Se acopla a la llave mediante una pequeña anilla de engarce.<br><li><b>Aumenta moderadamente</b> el alcance de la percepción de auras de la llave.</li>","name":"Perla rayada","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"Una cadena de cuentas opacas de varios tamaños utilizada en oraciones rituales. Se puede unir a la llave.<br><li>Añade <b>15 segundos</b> de uso a la llave.</li>","name":"Rosario","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"Un distintivo muy desgastado hecho de latón. Si en algún momento llegó a tener alguna inscripción o dibujo grabados, ya se han borrado completamente. Se puede unir a la llave utilizando la anilla de engarce para conseguir que pueda percibir auras.<br><li>Revela el <b>aura de los supervivientes</b> en un radio de <b>24 metros</b>.</li>","name":"Distintivo erosionado","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"Un distintivo de oro bastante simple. Ambas caras están lisas y sin ninguna inscripción. Se puede unir a la llave utilizando la anilla de engarce para conseguir que pueda percibir auras.<br><li>Revela el <b>aura de los supervivientes</b> en un radio de <b>48 metros</b>.</li>","name":"Distintivo de oro","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"Un aro de llavero común y corriente en apariencia, con un lustre azul oscuro inusual. El aro vincula la llave al usuario, lo que evita su pérdida incluso en los tiempos más oscuros.<br><li>No pierdas la llave al morir, sacrifica este accesorio en su lugar.</li>","name":"Anilla entrelazada","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"Esta pieza opaca de vidrio emite un ligero sonido vibrante. Cuando usas la llave para desbloquear la trampilla, la pieza de vidrio absorbe la energía de la niebla para evitar que la llave se rompa.<br><li>No pierdas la llave cuando abras la trampilla, sacrifica este accesorio en su lugar.</li>","name":"Vidrio opalescente","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"Un ámbar color rojo sangre con vetas negras. El ámbar es tibio al tacto. Se puede unir a la llave utilizando la anilla de engarce para conseguir que pueda percibir auras.<br><li>Revela el <b>aura del asesino</b> en un radio de <b>32 metros</b> a un <b>gran coste</b> de la energía de la llave.</li>","name":"Ámbar de Sangre","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"Un trozo de un grueso material fibroso. Tiene un mapa incompleto y descolorido dibujado en él que, por sí mismo, no sirve para nada.<br><li>Añade <b>5 segundos de carga</b> a cualquier mapa.</li>","name":"Apéndice de Mapa","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"Un cable eléctrico pequeño. Ambos extremos están muy dañados, como si lo hubieran arrancado violentamente de su lugar. Se puede atar alrededor de un mapa para mejorar su capacidad de percepción de auras.<br><li>Permite localizar <b>puertas de salida</b>.</li>","name":"Cable amarillo","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"Un sello de madera con una almohadilla de goma de líneas entrecruzadas. Sirve para marcar documentos. No se sabe quién lo utilizaba originalmente ni para qué. Puede usarse con un mapa.<br><li><b>Aumenta moderadamente</b> el alcance de la capacidad de búsqueda del mapa.</li>","name":"Sello inusual","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"Una baba viscosa y traslúcida con un desagradable tono lavanda. Pese a su origen desconocido, es muy resistente al calor.<br><li><b>Ralentiza moderadamente</b> el ritmo al que se quema el mapa.</li>","name":"Gelatina retardante","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"Un erizado y áspero pedazo de cordel de color carmesí. Se puede atar alrededor de un mapa con el fin de mejorar su habilidad para ver auras.<br><li>Desbloquea la habilidad para rastrear las <b>pertenencias del asesino</b>.</li>","name":"Cordel Rojo","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"Una extraña lupa ribeteada de oro que puede usarse para magnificar el mapa y marcar una posición específica. La lupa emite una energía que los supervivientes pueden percibir.<br><li>Permite usar la habilidad Marcador como acción secundaria.</li><li>Crea un marcador que puede ser visto por todos los supervivientes.</li>","name":"Lupa de vidrio","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"Un sello tallado en un bloque de madera dorada. El texto escrito en su base resulta incomprensible: \\"kw\'zvre\'od\\". Puede usarse con un mapa.<br><li><b>Aumenta considerablemente</b> el alcance de la capacidad de búsqueda del mapa.</li>","name":"Sello extraño","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"Una cuerda negra lisa de una apariencia suave. Puede amarrarse alrededor de un mapa para mejorar su habilidad de análisis de auras.<br><li>Desbloquea la habilidad para rastrear <b>candados negros</b>.</li>","name":"Cuerda de Seda Negra","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"Un intrincado juego de lentes envuelto en un dispositivo impresionantemente complejo. Los engranajes que controlan el foco de las lentes se mueven por sí solos para apuntar a algo invisible para los humanos.<br><li>Todos los supervivientes ven el aura que genera el mapa cuando el portador lo activa.</li>","name":"Lupa de cristal","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"Guantes estériles desechables para evitar contaminaciones.<br><li><b>Aumenta moderadamente</b> la bonificación de progreso al realizar pruebas de habilidad excelentes.</li>","name":"Guantes de Goma","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"Esparadrapo que se usa para cerrar heridas menores.<br><li><b>Aumenta ligeramente</b> la velocidad de curación.</li>","name":"Sutura Adhesiva","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"Paquete de apósitos muy habitual en botiquines de primeros auxilios.<br><li>Añade <b>8 cargas</b> al botiquín.</li>","name":"Vendajes","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"Esponja común y corriente que sirve para absorber el exceso de sangre y facilitar el acceso a las heridas.<br><li><b>Aumenta considerablemente</b> la bonificación de progreso al realizar pruebas de habilidad excelentes.</li>","name":"Esponja","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"Un paquete de vendas autoadhesivas que evitan el uso de pinzas, lo que permite un vendaje más rápido que requiere menos reajustes.<br><li>Añade <b>8 cargas</b> al botiquín.</li><li><b>Aumenta ligeramente</b> la velocidad de curación.</li>","name":"Venda adhesiva","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"No es que sea un instrumento médico, pero se puede usar para cerrar una herida de manera rápida y dolorosa.<br><li><b>Aumenta moderadamente</b> la probabilidad de activar una prueba de habilidad.</li><li><b>100 % de puntos de sangre adicionales</b> al realizar pruebas de habilidad excelentes.</li><li><b>Aumenta ligeramente</b> la velocidad de curación.</li>","name":"Aguja e hilo","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"Tijeras diseñadas para cortar la tela fácilmente.<br><li><b>Aumentan moderadamente</b> la velocidad de curación.</li>","name":"Tijeras Médicas","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"Una gasa estéril que se puede usar para diversas heridas. Forma parte de un sistema completo de tratamiento.<br><li>Añade <b>12 cargas</b> al botiquín.</li>","name":"Rollo de gasa","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"Un artilugio médico que sirve para cerrar y mantener en su sitio los tejidos corporales. Es muy efectivo, pero no resulta nada fácil de usar.<br><li><b>Aumenta considerablemente</b> la probabilidad de que aparezca una prueba de habilidad.</li><li><b>150 % de puntos de sangre adicionales </b> al realizar pruebas de habilidad excelentes.</li><li><b>Aumenta ligeramente</b> la velocidad de curación.</li>","name":"Sutura quirúrgica","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"Un gel que forma apósitos para tratar heridas que sangran con intensidad.<br><li>Añade <b>16 cargas</b> al botiquín.</li>","name":"Apósitos de hidrogel","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"Una venda con gran capacidad de absorción que evita la pérdida de fluidos corporales cuando se aplica sobre heridas abdominales de gran tamaño.<br><li><b>Aumenta considerablemente</b> la velocidad de curación.</li><li><b>Reduce las cargas</b> en <b>8</b>.</li>","name":"Apósito abdominal","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"Un polvo blanco con propiedades coagulantes. Aplica la sustancia a una herida para detener la hemorragia.<br><li>Pulsa el botón de <i>acción secundaria</i> mientras estás curando con el botiquín para usar el astringente.</li><li>Al usarlo<i></i> sobre un superviviente herido, se le aplica el efecto de estado <b>Resistencia</b> durante <b>8 segundos</b>. <li>Consume por completo el botiquín.</li>","name":"Astringente","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"Una sustancia antihemorrágica que detiene el sangrado en cuestión de segundos.<br><li>Pulsa el botón de <i>acción secundaria</i> mientras estás curando con el botiquín para usar la jeringa antihemorrágica.</li><li>El superviviente afectado obtendrá un estado de salud de forma pasiva una vez transcurridos <b>16</b> segundos desde su uso.</li><li>El tiempo necesario varía en función de las habilidades, los objetos y accesorios que afecten a la <i>velocidad de curación</i>.</li><li>Este efecto se cancela si el superviviente afectado cambia de estado de salud o si el asesino lo agarra.</li><li>Consume por completo el botiquín.</li>","name":"Jeringa antihemorrágica","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"Una herramienta útil para sujetar tubos o alambres y así evitar heridas.<br><li>Tus reparaciones hacen menos ruido y la distancia desde la que se oyen se reduce en 8 metros.</li>","name":"Alicates","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"Muelles, tornillos y ruedas dentadas. Chatarra inútil en su mayoría.<br><li>Añade <b>8 cargas</b> a la caja de herramientas.</li>","name":"Chatarra","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"Un trapo común y corriente. Sospechosamente limpio.<br><li><b>Aumenta ligeramente</b> la velocidad de reparación de la caja de herramientas.</li>","name":"Trapo Limpio","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"Un pesado carrete portátil de alambre de cobre.<br><li>Añade <b>12 cargas</b> a la caja de herramientas.</li>","name":"Carrete de Alambre","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"Los mangos articulados proporcionan flexibilidad a la hora de manipular tornillos que están fuera de alcance en el interior de aparatos mecánicos.<br><li><b>Aumenta moderadamente</b> la velocidad de reparación con la caja de herramientas.</li>","name":"Llave articulada","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"Guantes gruesos que reducen la habilidad con las manos, pero las protegen contra lesiones.<br><li>Evitan que se notifique al asesino cuando se sabotea un gancho con una caja de herramientas.</li>","name":"Guantes protectores","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"Alguien se dio prisa en pintar lo que parecen ser instrucciones de reparación en este trozo de corteza.<br><li>Elimina las pruebas de habilidad al reparar con la caja de herramientas.</li>","name":"Instrucciones","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"Unos alicates ajustables de mango fuerte. Esenciales en cualquier caja de herramientas.<br><li>Los ganchos saboteados usando la caja de herramientas tardan 15 segundos más en reaparecer.</li>","name":"Alicate de Presión","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"Una rudimentaria herramienta de dos mangos hecha para cortar con alambres dentados.<br><li><b>Aumenta ligeramente</b> la velocidad de sabotaje con la caja de herramientas.</li>","name":"Alambre para cortar","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"Un pequeño serrucho con una cuchilla de metal.<br><li><b>Aumenta moderadamente</b> la velocidad de sabotaje de la caja de herramientas.</li>","name":"Serrucho de Metal","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"Esta intrincada pieza metálica no parece encajar en este lugar. Está limpia y reluciente, como recién salida de fábrica.<br><li>La acción <b>Reparar con caja de herramientas</b> se sustituye por <b>Instalar recambio nuevo</b>.</li><li>Al instalar el <i>recambio nuevo</i> se reparará de forma automática un <b>15 %</b> del generador en un proceso que dura <b>5 segundos</b>.</li><li>Durante la instalación se activarán <b>2 pruebas de habilidad difíciles</b>.</li><li>Cada prueba de habilidad que superes te concederá un <b>5 % de progreso de reparación</b> adicional, hasta un total máximo del <b>25 %</b>.</li><li><i>Este accesorio se consume tras el uso</i></li>","name":"Recambio Nuevo","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"Un anillo de boda grabado que surgió de la niebla y que rezuma una energía indescriptible e incomprensible. <li>Revela el aura de la obsesión.</li><li>Reduce las posibilidades de convertirte en la obsesión del asesino.</li>","name":"Anillo de boda único","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/es/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Otorga un <b>50 %</b> de puntos de sangre extra en la categoría Objetivos.<br><li>Personal.</li><li>Acumulable.</li>","name":"Saquito con laurel salvaje","flavor":"\\"Un saquito, del tamaño de un puño, cosido a mano. Está lleno de hojas secas. Desprende un sutil aroma a té\\".","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"Otorga un <b>75 %</b> de puntos de sangre extra en la categoría Objetivos.<br><li>Personal.</li><li>Acumulable.</li>","name":"Laurel salvaje fresco","flavor":"\\"Una hermosa flor púrpura que crece en medio de la ciénaga contaminada. Desprende un sutil aroma a té\\".","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en la categoría Objetivos.<br><li>Personal.</li><li>Acumulable.</li>","name":"Laurel salvaje aromático","flavor":"\\"Una hermosa flor púrpura que crece en medio de la ciénaga contaminada. Desprende un sutil aroma a té\\".","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"Otorga un <b>50 %</b> de puntos de sangre extra en la categoría Supervivencia.<br><li>Personal.</li><li>Acumulable.</li>","name":"Saquito con amaranto","flavor":"\\"Un saquito, del tamaño de un puño, cosido a mano. Está lleno de granos redondos. Se dice que el amaranto es eterno\\".","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"Otorga un <b>75 %</b> de puntos de sangre extra en la categoría Supervivencia.<br><li>Personal.</li><li>Acumulable.</li>","name":"Amaranto fresco","flavor":"\\"Unas peculiares venas carmesíes resaltan en el fondo verde pálido de las hojas. Se dice que el amaranto es eterno\\".","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en la categoría Supervivencia.<br><li>Personal.</li><li>Acumulable.</li>","name":"Amaranto aromático","flavor":"\\"Unas peculiares venas carmesíes resaltan en el fondo verde pálido de las hojas. Desprende un fuerte aroma a rábano\\".","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"Otorga un <b>50 %</b> de puntos de sangre extra en la categoría Altruismo.<br><li>Personal.</li><li>Acumulable.</li>","name":"Saquito con flores de primavera","flavor":"\\"Un saquito, del tamaño de un puño, cosido a mano. Contiene 4 pétalos de oro. La primavera florece en el instante previo a que el sol ceda el paso a la noche\\".","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"Otorga un <b>75 %</b> de puntos de sangre extra en la categoría Altruismo.<br><li>Personal.</li><li>Acumulable.</li>","name":"Flor de primavera fresca","flavor":"\\"Flores doradas, cosechadas en su punto álgido. La primavera florece en el instante previo a que el sol ceda el paso a la noche\\".","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en la categoría Altruismo.<br><li>Personal.</li><li>Acumulable.</li>","name":"Flor de primavera aromática","flavor":"\\"Flores doradas, cosechadas en su punto álgido. Desprenden un fuerte y reconfortante aroma a tierra\\".","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"Otorga un <b>50 %</b> de puntos de sangre extra en la categoría Audacia.<br><li>Personal.</li><li>Acumulable.</li>","name":"Saquito con minutisa","flavor":"\\"Un saquito, del tamaño de un puño, cosido a mano. Está lleno de una mezcla de pétalos pálidos y hojas glaucas. Desprende un fuerte aroma a especias similar al clavo\\".","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"Otorga un <b>75 %</b> de puntos de sangre extra en la categoría Audacia.<br><li>Personal.</li><li>Acumulable.</li>","name":"Minutisa Fresca","flavor":"\\"Un ramito de flores con pétalos color rosa y núcleo rojo sangre. Desprende un fuerte aroma a especias similar al clavo\\".","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en la categoría Audacia.<br><li>Personal.</li><li>Acumulable.</li>","name":"Minutisa Fresca","flavor":"\\"Un ramito de flores con pétalos color rosa y núcleo rojo sangre. Desprende un fuerte aroma a especias similar al clavo\\".","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"Otorga un <b>25%</b> de puntos de sangre extra a todos los supervivientes en <b>todas</b> las categorías.<br><li>Acumulable.</li>","name":"Sobre atado","flavor":"\\"Un sobre abierto que se volvió a sellar y se ató con 4 cintas de colores\\".","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"Otorga un <b>25 %</b> de puntos de sangre extra en todas las categorías.<br><li>Personal.</li><li>Acumulable.</li>","name":"Sobre sellado","flavor":"\\"Un sobre sin abrir y sin destinatario, amarilleado por el tiempo. Nunca se llegará a conocer su mensaje\\".","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"Otorga un <b>100 %</b> de puntos de sangre extra en todas las categorías.<br><li>Personal.</li><li>Acumulable.</li>","name":"Tarta de... ¡huida!","flavor":"\\"Esta imagen de una tarta sí que es real\\".","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"<b>Aumenta ligeramente</b> la suerte.<br><li>Personal.</li><li>Acumulable.</li>","name":"Bolsita con tiza","flavor":"\\"Un pequeño saco de algodón que contiene un polvo blanquecino de origen desconocido. Algunos creen que da buena suerte\\".","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>Aumenta moderadamente</b> la suerte de <b>todos</b> los supervivientes.<br><li>Acumulable.</li>","name":"Saquito de polvo color crema","flavor":"\\"Una estatuilla de sal negra en miniatura fácilmente desmenuzable. Representa a una mujer arrodillada ofreciendo un obsequio. Algunos creen que da buena suerte\\".","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"<b>Aumenta considerablemente</b> la suerte.<br><li>Personal.</li><li>Acumulable.</li>","name":"Saquito de polvo color marfil","flavor":"\\"Un pequeño saco de cuero con una línea blanca cosida a mano en uno de sus lados. Contiene un polvo calcáreo color marfil que brilla bajo la luz de la luna. Algunos creen que da buena suerte\\".","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>Aumenta ligeramente</b> la suerte de <b>todos</b> los supervivientes.<br><li>Acumulable.</li>","name":"Saquito de sal","flavor":"\\"Un saquito de algodón que contiene cristales de sal negra. Algunos creen que da buena suerte. No los derrames\\".","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>Aumenta considerablemente</b> la suerte de <b>todos</b> los supervivientes.<br><li>Acumulable.</li>","name":"Bote de labios salados de Vigo","flavor":"\\"Un bote de cristal cerrado con fuerza que contiene labios humanos flotando en salmuera turbia. Algunos creen que da buena suerte\\".","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"Invoca al Ente para crear <b>1</b> cofre adicional.<br><li>Acumulable.</li>","name":"Moneda deslustrada","flavor":"\\"Una pieza redonda de metal que ha perdido todo su lustre\\".","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"Invoca al Ente para crear <b>2</b> cofres más.<br><li>Acumulable.</li>","name":"Moneda brillante","flavor":"\\"Una pieza de oro limpia y pulida\\".","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"Calma al Ente y <b>aumenta ligeramente</b> la <b>distancia</b> entre los ganchos de sacrificio que aparecen en el mundo.<br><li>Acumulable.</li>","name":"Roble petrificado","flavor":"\\"Un trozo podrido de madera petrificada\\".","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"Inicias la partida junto a otro superviviente.<br><li>Secreto.</li>","name":"Velo de unión","flavor":"\\"Un trozo de tela anudado\\".","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"Todos los supervivientes comienzan la partida juntos.<br><li>Secreto.</li>","name":"Velo de vinculación","flavor":"\\"Un trozo cuadrado de tela descolorida con pequeños nudos en cada extremo\\".","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"Inicias tu partida lo más lejos posible del asesino.<br><li>Secreto.</li>","name":"Velo de Vigo","flavor":"\\"A lo largo de los años en la niebla me he encontrado con maravillas de todo tipo, pero hasta ahora no sabía cómo quebrar las reglas inflexibles que la rigen\\". (Diario de Vigo)","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/es/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Permite percibir auras. Cada vez que se repara por completo un generador, podrás ver el aura del asesino durante <span class=\\"Highlight1\\">{0} segundos</span>.<br>Cuando se trate del último, podrás ver el aura del asesino durante <span class=\\"Highlight2\\">{1} segundos</span>.","name":"Percepción oscura","flavor":"\\"Te lo dice alguien con experiencia: relájate, no te apresures ¡y procura no preocuparte tanto! La mejor forma de combatirlo es saber cómo piensa\\". (Cintas perdidas: Murf)","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"Permite percibir auras. Tu paranoia y tu terror al fracaso te impulsan a evitar repetir viejos errores.<br>Al principio de la partida y cada vez que se complete un generador, se te revelan durante <span class=\\"Highlight2\\">{1} segundos</span> las auras de <span class=\\"Highlight1\\">{0}</span> generadores próximos entre sí.<br>Si tienes en la mano un mapa que pueda localizar generadores, los revelados por <i>Déjà vu</i> se añaden a él.","name":"Déjà vu","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"Estar tan cerca de poder escapar renueva tus esperanzas y tus fuerzas. Obtienes un <span class=\\"Highlight1\\">{0} %</span> del efecto de estado <b><i>Celeridad</i></b> durante <span class=\\"Highlight3\\">{1} segundos</span> en cuanto las puertas de salida se activan.<br>","name":"Esperanza","flavor":"\\"¡Apretaos bien los cinturones, capullos! ¡Que nos largamos!\\". (Cintas perdidas: Nikki)","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"Permite percibir auras. Mientras estés en el gancho, las auras de todos los supervivientes se revelan al resto de supervivientes. Si el asesino se encuentra dentro de un radio de <span class=\\"Highlight1\\">{0} metros</span>, su aura también se hace visible para el resto de supervivientes.<br><br>Cuando otro superviviente está colgado de un gancho, se te revela el aura de los demás supervivientes. Si el asesino se encuentra dentro de una distancia de <span class=\\"Highlight1\\">{0} metros</span> respecto al superviviente enganchado, se te revela su aura.","name":"Familia","flavor":"\\"Portaos bien los unos con los otros. Estamos juntos en esto\\". (Cintas perdidas: Sujan)","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"Corres con agilidad y gracia, lo que hace que sea más difícil seguir tu rastro. Las huellas de pisadas permanecen visibles <span class=\\"Highlight1\\">{0} segundos</span> menos de lo normal.<br>","name":"De pies ligeros","flavor":"\\"Tómatelo con calma. Sabe dónde has estado... Por eso yo siempre he dicho: vive despacio y muere viejo\\". (Las cintas perdidas: Dylan)","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"Es inconcebible abandonar a alguien. En cuanto las puertas de salida se activan, se te aplican los siguientes efectos:<br><li><span class=\\"Highlight1\\">{0} %</span> de puntos de sangre adicionales por curar y rescatar a otros supervivientes.</li><li><span class=\\"Highlight2\\">{1} %</span> de bonificación de velocidad de acción al curar y rescatar a otros supervivientes.</li><li>Se te revela el aura de los demás supervivientes.</li>","name":"Nadie se queda atrás","flavor":"\\"... Sí, está claro. Pero podemos ser más listos que él y ganarle por la mano si trabajamos juntos. ¡No nos podemos permitir ser previsibles y egoístas!\\". (Cintas perdidas: Clyde)","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"Permite percibir auras. Las auras de los cofres que no estén abiertos y de los objetos del entorno se te revelan cuando te encuentras dentro de un radio de <span class=\\"Highlight1\\">{0} metros</span>. Otorga una probabilidad <b>considerablemente</b> superior de encontrar un objeto de mayor rareza en los cofres.","name":"Instinto de saqueador","flavor":"\\"En el Oeste se pasaban horas con esto\\". (Las cintas perdidas: Aizeyu)","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"Tienes la capacidad natural de detectar el peligro. Recibes una advertencia sonora al ver en dirección al asesino en un área cónica de <span class=\\"Highlight1\\">45 grados</span> y dentro de un radio de <span class=\\"Highlight2\\">{0} metros</span>. Premonición tiene un tiempo de recarga de <span class=\\"Highlight3\\">{1} segundos</span>.","name":"Premonición","flavor":"\\"¡Esto me da mala espina!\\".","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"Te motivas cuando te encuentras en aprietos. Otorga un <span class=\\"Highlight1\\">{0} %</span> de velocidad adicional a reparaciones, sabotajes, curaciones, rescates, saltos, purificaciones, aperturas de puertas de salida y desbloqueos mientras sufres heridas.","name":"Resiliencia","flavor":"\\"Concéntrate, incluso en los momentos más desesperados\\".","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"Has desarrollado una forma eficiente de liberarte de los ganchos.<br><li>Otorga hasta <span class=\\"Highlight1\\">{0}</span> intentos más para liberarte de ganchos.</li><li>La probabilidad de liberarte de las ganchos aumenta un <span class=\\"Highlight2\\">{1} %</span>.</li>","name":"Carne resbaladiza","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"Tienes la capacidad natural de detectar el peligro. Recibes una advertencia sonora al mirar en dirección a tótems en un área cónica de <span class=\\"Highlight1\\">45 grados</span> dentro de un radio de <span class=\\"Highlight2\\">{0} metros</span>. Caza menor tiene un tiempo de recarga de <span class=\\"Highlight3\\">{1} segundos</span> cada vez que se activa. Por cada tótem apagado y tótem de maleficio que purifique un jugador, obtendrás un distintivo. El cono de detección de Caza menor se reduce en <span class=\\"Highlight4\\">5 grados</span> por distintivo.","name":"Caza menor","flavor":"\\"Nop\\". (Cintas perdidas: Andy)","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"Un estremecimiento sobrenatural te advierte de que algo malo está a punto de ocurrir. Recibes un aviso cuando el asesino vea en tu dirección dentro de un radio de <span class=\\"Highlight1\\">{0} metros</span>. Mientras Escalofríos está activa, la probabilidad de que surjan pruebas de habilidad aumenta un <span class=\\"Highlight2\\">{1} %</span>, y el tamaño de sus áreas de éxito se reduce un <span class=\\"Highlight3\\">{2} %</span>. Mientras Escalofríos está activa, las velocidades de reparación, curación, sabotaje, rescate, salto, purificación, desbloqueo y apertura de puertas de salida aumentan un <span class=\\"Highlight4\\">{3} %</span>.","name":"Escalofríos","flavor":"\\"Hay una voz que no usa palabras. Escucha\\". (Cintas perdidas: Sassy)","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"Das lo mejor de ti en las situaciones de mayor presión. El tamaño de las áreas de éxito para superar pruebas de habilidad excelentes de reparación y curación aumenta un <span class=\\"Highlight1\\">{0} %</span> si tienes heridas.","name":"Esto no puede estar pasando","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"Ayudar a otros aumenta tu moral.<br><br>Cuando rescates a un superviviente de un gancho, obtienes un aumento del <span class=\\"Highlight1\\">{0} %</span> de velocidad de curación a otros supervivientes durante <span class=\\"Highlight3\\">{1} segundos</span>.","name":"Lo conseguiremos","flavor":"\\"Seguro que lograremos salir sanos y salvos de esta si nos ayudamos los unos a los otros\\".","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"Desbloquea la capacidad de percibir auras. Se te revelan las auras de los aliados en un radio de <span class=\\"Highlight1\\">{0} metros</span>.<br>","name":"Vínculo","flavor":"\\"Tenemos que trabajar como un equipo. ¡Necesito que sobreviváis para que yo también pueda hacerlo!\\". (Dwight)","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"Por cada otro superviviente trabajando en un generador dentro de un rango de <span class=\\"Highlight2\\">{1} metros</span>, recibes una bonificación del <span class=\\"Highlight1\\">{0} %</span> de velocidad de reparación. La misma bonificación también se aplica al resto de supervivientes dentro de ese rango.<br>Consigues un <span class=\\"Highlight3\\">{2} %</span> más de puntos de sangre por acciones cooperativas.<br>Los supervivientes solo pueden recibir un efecto Demuestra lo que vales a la vez.<br>","name":"Demuestra lo que vales","flavor":"\\"¡Te mostraré lo que puedo hacer!\\". -Dwight","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"Eres capaz de organizar un equipo para que se coordine con mayor eficacia. Aumenta un <span class=\\"Highlight1\\">{0} %</span> las velocidades de curación, sabotaje, rescate de ganchos, purificación, apertura de puertas de salida y desbloqueo de cofres de los demás supervivientes cuando se encuentran a menos de <span class=\\"Highlight2\\">{1} metros</span> de ti.<br>Los supervivientes no pueden recibir el efecto de más de un líder.<br>El efecto sigue activo durante <span class=\\"Highlight3\\">{2} segundos</span> una vez fuera del alcance de Líder.","name":"Líder","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"No haces tanto ruido como los demás cuando saltas sobre obstáculos o te ocultas en las taquillas a toda velocidad.<br><br>El alcance del sonido y la detección del ruido para las acciones de salto y escondite se reducen un <span class=\\"Highlight1\\">{0} %</span>.<br><br>Este efecto solo se puede activar una vez cada <span class=\\"Highlight2\\">{1} segundos</span>.","name":"Velocidad silenciosa","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"Cuando te pones a correr, aceleras a un <span class=\\"Highlight1\\">{0} %</span> de tu velocidad normal de carrera durante un máximo de <span class=\\"Highlight2\\">{1} segundos</span>. <br>Causa el efecto de estado <i>Agotamiento</i> durante <span class=\\"Highlight4\\">{2} segundos</span>.<br>No puedes usar <i>Esprint</i> puede mientras sufres <i>Agotamiento</i>.<br>No te recuperas del efecto de estado <i>Agotamiento</i> mientras corres.","name":"Esprint","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Cuando estás a punto de escapar, te invade una energía inesperada. <span class=\\"Highlight1\\">Te curas instantáneamente un <b>estado de salud</b></span> y corres a un <span class=\\"Highlight2\\">{0} %</span> de tu velocidad normal de carrera durante <span class=\\"Highlight3\\">{1} segundos</span> en cuanto las puertas de salida se activan. Si estás incapacitado en el momento en que debería actuar, Adrenalina no surte efecto hasta que te liberas.<br><i>Adrenalina</i> te <b>despierta</b> si se activa mientras estás dormido.<br><i>Adrenalina</i> permite ignorar el efecto de estado <i>Agotamiento</i>.<br>Causa el efecto de estado <i>Agotamiento</i> durante <span class=\\"Highlight4\\">{2} segundos</span>.<br>No te recuperas del efecto de estado <i>Agotamiento</i> mientras corres.","name":"Adrenalina","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"Permite percibir auras. Las auras de aliados agonizantes o heridos se te revelan en un radio de <span class=\\"Highlight1\\">{0} metros</span>. Empatía no revela las auras de los aliados cuando están en contacto directo con el asesino.","name":"Empatía","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"Usas algunas plantas halladas en la hoguera para elaborar tinturas que inhiben el sangrado. La <b>velocidad de curación</b> y la <b>eficiencia de los objetos curativos</b> aumentan un <span class=\\"Highlight1\\">{0} %</span>.<br>","name":"Conocimientos de botánica","flavor":"\\"Unos conocimientos básicos sobre botánica podrían salvar tu vida algún día\\".","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"Permite curarte sin objetos curativos a un <span class=\\"Highlight1\\">{0} %</span> de la velocidad normal. Aumenta la eficiencia de los objetos curativos un <span class=\\"Highlight3\\">{1} %</span>.","name":"Autocuración","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"Puedes concentrarte y entrar en estado semimeditativo para atenuar el dolor. Los gruñidos provocados por heridas se reducen un <span class=\\"Highlight1\\">{0} %</span>.","name":"Voluntad de hierro","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"Parece que los animales confían en ti, ya que mantienen la calma en tu presencia. Reduce un <span class=\\"Highlight1\\">{0} %</span> la probabilidad de alertar a criaturas del bosque.<br>Espíritu calmado te permite controlar el impulso de gritar.","name":"Espíritu calmado","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"Permite percibir auras.<br><li>Puedes ver las auras de los ganchos en un radio de <span class=\\"Highlight1\\">56 metros</span> desde el punto de recogida si el asesino carga con un superviviente.</li><br>Permite sabotear ganchos sin necesidad de tener una caja de herramientas.<br><li>Sabotear un gancho sin caja de herramientas lleva <span class=\\"Highlight2\\">2,5 segundos</span>.</li><li>Sabotaje tiene un tiempo de recarga de <span class=\\"Highlight3\\">{0} s</span>.</li>","name":"Sabotear","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"Tienes una agilidad inigualable.<br><br>Tras caer desde cierta altura, tus reflejos felinos reducen el tiempo que tardas en recuperarte un <span class=\\"Highlight1\\">{0} %</span> y el volumen de los gruñidos al aterrizar un <span class=\\"Highlight1\\">100 %</span>. Empiezas a correr a un <span class=\\"Highlight2\\">{1} %</span> de tu velocidad normal durante un máximo de <span class=\\"Highlight3\\">{2} segundos</span>.<br><br>Causa el efecto de estado <b>Agotamiento</b> durante <span class=\\"Highlight4\\">{3} segundos</span>.<br><br>No puedes usar <i>Caída equilibrada</i> mientras sufres <b>Agotamiento</b>.<br><br>No te recuperas del efecto de estado <b>Agotamiento</b> mientras corres.<br>","name":"Caída equilibrada","flavor":"\\"He saltado desde lugares más altos\\". (Nea)","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"Los años que has pasado huyendo de la policía te han enseñado a moverte con sigilo. La velocidad de movimiento mientras avanzas agachada aumenta un <span class=\\"Highlight1\\">{0} %</span>.<br>","name":"Evasión urbana","flavor":"\\"La pintura aún está fresca, pero yo me fui hace tiempo\\". (Nea)","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"Las largas salidas nocturnas te han enseñado a sacar partido de lo que tienes. Reduce la velocidad de consumo de la carga de objetos en un <span class=\\"Highlight1\\">{0} %</span> para ti y para los aliados en un alcance de <span class=\\"Highlight2\\">{1} metros</span>. Una vez fuera del alcance, el efecto durará <span class=\\"Highlight4\\">{2} segundos.</span><br>","name":"Con calle","flavor":"«¡Lo estás haciendo mal! Déjame que te enseñe cómo se hace». (Nea)","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Permite percibir auras.<br>Si eres el último superviviente con vida en la partida, podrás ver el aura de la trampilla a una distancia de <span class=\\"Highlight1\\">{0}</span> metros.","name":"Abandonado a tu suerte","flavor":"\\"No estoy para tonterías. ¡Esto lo hago yo aunque sea solo!\\". (Bill)","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"Te invade una energía inesperada cuando rescatas a un aliado de un gancho.<br>Los supervivientes que desenganches obtienen el efecto de estado <b>Resistencia</b> durante los siguientes <span class=\\"Highlight1\\">{0} segundos</span>.<br>","name":"Tiempo prestado","flavor":"\\"Seguro que duele un montón, pero de esta no la palmas, así que levanta, soldado. ¡En marcha!\\". (Bill Overbeck)","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"Tu experiencia en combate te ha enseñado alguna cosa que otra sobre supervivencia.<br>Podrás recuperarte por completo del estado agonizante <b>una vez por partida</b>. Aumenta un <span class=\\"Highlight1\\">{0} %</span> la velocidad de recuperación cuando estás agonizante.","name":"Inquebrantable","flavor":"\\"¡Mierda! ¡Estoy bien jodido!\\". (Bill)","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"Tus amigos merecen la máxima protección.<br>Cuando cures a un superviviente agonizante, tu velocidad de curación aumenta un <span class=\\"Highlight1\\">100 %.</span><br>Obtienes un distintivo por realizar cualquiera de las siguientes acciones:<li>Rescate de gancho seguro</li><li>Sufrir un golpe por proteger a un superviviente</li><li>Rescatar a un superviviente aturdiendo al asesino con un palé</li><li>Rescatar a un superviviente cegando al asesino con una linterna</li>Obtienes un multiplicador acumulable de puntos de sangre del <span class=\\"Highlight2\\">25 %</span> por distintivo, hasta un máximo del <span class=\\"Highlight3\\">{1} %</span>. Los puntos de sangre adicionales solo se otorgan después de la partida.","name":"Vamos a vivir para siempre","flavor":"\\"¡Venga, atrévete! Me la suda, socio\\". (David King)","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"Habilidad activable.<br>No eres ningún blandengue, precisamente. Cuando presientes que te van a herir, te entra un subidón de adrenalina que hace que te vuelen los pies.<br><li>Pulsa el botón de la <i>habilidad activa</i> mientras corres para impulsarte hacia adelante.</li><li>Durante dicho impulso eres invulnerable al daño.</li><li>Causa el efecto de estado <i>Agotamiento</i> durante <span class=\\"Highlight4\\">{0} segundos</span>.<br>No te recuperas del efecto de estado <i>Agotamiento</i> mientras corres.</li>","name":"Fajador","flavor":"\\"Íbamos por un callejón una noche cuando casi me da una botella de cerveza, y luego otra, y otra más. Y yo solo podía pensar: \'Cómo nos vamos a divertir, muchachos. ¡Al lío!\'. Fue una pelea justa, ¡en serio!\\". (David King)","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"Sufres el efecto de estado <span class=\\"Highlight1\\">Desesperanza</span> durante toda la partida.<br>Tu sangre espesa se coagula prácticamente al instante. <li>No dejas charcos de sangre.</li><li>Los gruñidos de dolor causados por las heridas se reducen un <span class=\\"Highlight2\\">{0} %</span> en todo momento.</li><li>Te permite recuperarte completamente del estado agonizante.</li>","name":"Me la pela","flavor":"\\"Se me fue la olla. Le pegué de hostias al flipao ese. Me echaron y todo el percal... Así que me fui al bar, me tomé unas pintas y a otra cosa. Total, me la pela, ¿me entiendes o qué? Yo paso\\". (David King)","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"A medida que tus amigos caigan en manos del asesino, te embargará la soledad y la <b>capacidad del asesino para detectar tu aura</b> se verá perturbada.<br>Cada vez que un superviviente sea asesinado o sacrificado, obtendrás un distintivo. Por cada distintivo, el asesino no podrá detectar tu aura a una distancia máxima de <span class=\\"Highlight1\\">{0} metros</span> por cada superviviente <b>asesinado</b> o <b>sacrificado</b>.<br><li><i>Aumenta las probabilidades de que te conviertas en la obsesión del asesino.</i></li><li><i>El asesino no puede <b>obsesionarse</b> con más de un superviviente a la vez.</i></li>","name":"Solo quedo yo","flavor":"\\"Era el hombre del saco\\". (Laurie Strode)","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"Un vínculo sobrenatural te une al asesino.<br><br>Cuando se muestra tu aura al asesino, también podrás ver la suya y obtienes un <span class=\\"Highlight1\\">{0} %</span> adicional a la velocidad de curación, reparación y purificación.<br>Si eres la obsesión, tu aura se mostrará al asesino durante <span class=\\"Highlight2\\">3 segundos</span> una vez cada <span class=\\"Highlight3\\">30 segundos</span>.<br>Aumenta las probabilidades de que seas la obsesión del asesino.<br>","name":"Objeto de obsesión","flavor":"\\"¡Me estaba mirando!\\". (Laurie Strode)","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"Apuñala a tu agresor en un intento por escapar.<br>Después de que alguien te desenganche o de que te desenganches por tus propios medios, <i>Golpe decisivo</i> se activará durante <span class=\\"Highlight1\\">{0} segundos</span>.<br>Mientras dure su efecto, completa una prueba de habilidad para escapar del agarre del asesino y aturdirlo durante <span class=\\"Highlight1\\">5 segundos</span>.<br><li>Tanto si has tenido éxito o no con la prueba de habilidad, se desactivará <i>Golpe decisivo</i>.</li><li>Te conviertes en la obsesión tras aturdir al asesino.</li><br>Mientras esté activa, las siguientes interacciones desactivarán <i>Golpe decisivo</i>:<li>Reparar un generador</li><li>Curarte a ti o a otros</li><li>Purificar un tótem</li><li>Sabotear un gancho</li><li>Desenganchar a otros</li><br><li><i>Aumenta la probabilidad de que te conviertas en la obsesión.</i></li><li><i>El asesino no puede <b>obsesionarse</b> con más de un superviviente.</i></li>","name":"Golpe decisivo","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"Mejora la capacidad de percibir auras de tu equipo y tuya.<br><li>Aumenta el alcance de la percepción de auras en <span class=\\"Highlight1\\">{0} metros</span>.</li><li>Los supervivientes solo se verán afectados por un efecto de <i>A mano descubierta</i> cada vez.</li>","name":"A mano descubierta","flavor":"\\"Prestar atención es lo que me ha mantenido con vida todos estos años. Eso y mi atractivo, por supuesto\\". (Ace)","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"Al final todo saldrá bien, simplemente lo sabes. Tu confianza fortalece la esperanza de los que te rodean. Por cada superviviente vivo, otorga un <span class=\\"Highlight1\\">{0} %</span> de suerte adicional al resto de supervivientes.","name":"Subir las apuestas","flavor":"\\"¿Qué puedo decir? Solo soy un tipo con mucha suerte... Seguro que algo se te pega\\". (Ace)","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"Parece que la suerte siempre está de tu parte.<br>Al sacar un objeto de un cofre, hay un <span class=\\"Highlight1\\">{0} %</span> de probabilidades de que lleve un accesorio <span class=\\"Highlight2\\">muy raro</span> (o inferior) y un <br><span class=\\"Highlight3\\">{1} %</span> de probabilidades de que lleve un accesorio <span class=\\"Highlight4\\">poco común</span> (o inferior).<br>Al escapar, conservas cualquier accesorio que tenga tu objeto.","name":"As en la manga","flavor":"\\"No todo lo que brilla es oro. Pero el oro no vale nada en este lugar, así que esto podría ser útil\\". (Ace)","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"Se te da muy bien manejar máquinas con precisión y cuidado.<br>Tus reparaciones hacen menos ruido y la distancia desde la que se oyen se reduce <span class=\\"Highlight2\\">{0} metros</span>. Si fallas una prueba de habilidad de reparación, tienes un <span class=\\"Highlight1\\">{1} %</span> de probabilidad de que el generador no explote.","name":"Pericia técnica","flavor":"\\"A sigilosa no me gana nadie\\". (Feng Min)","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"Tras dar un salto <b>acelerado</b>, aceleras a un <span class=\\"Highlight1\\">{0} %</span> de tu velocidad normal de carrera durante un máximo de <span class=\\"Highlight2\\">{1} segundos</span>. <br>Causa <i>Agotamiento</i> durante <span class=\\"Highlight4\\">{2} segundos</span>.<br><i>Agilidad</i> no se puede usar cuando sufres <i>Agotamiento</i>.<br>No te recuperas del <i>Agotamiento</i> al correr.<br>","name":"Agilidad","flavor":"\\"¿Te has enfadado?\\". (Feng Min)","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Tus agudos sentidos están en alerta máxima.<br>Cuando el asesino rompe algo, puedes verlo durante <span class=\\"Highlight1\\">{0} segundos</span>.<br>","name":"Alerta","flavor":"«Tengo una vista privilegiada». (Feng Min)","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"Permite percibir auras. Cuando se repare el último generador, verás las puertas de salida dentro de un radio de <span class=\\"Highlight1\\">{0} metros</span>. Mientras abres una puerta, el resto de supervivientes verá tu aura dentro de una distancia de <span class=\\"Highlight2\\">{1} metros</span>.<br>Mientras <i>¡Despierta!</i> esté activo, abrirás las puertas de salida un <span class=\\"Highlight3\\">{2} %</span> más rápido.","name":"¡Despierta!","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"Se te da bien encontrar medicinas. Desbloqueas los cofres un <span class=\\"Highlight1\\">{0} %</span> más rápido. Además, haces menos ruido, y la distancia desde la que se oye se reduce <span class=\\"Highlight2\\">{1} metros.</span><br><i>Farmacia</i> te garantiza un botiquín de emergencia cuando desbloquees tu <b>primer</b> cofre.<br>","name":"Farmacia","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"Cuidas de tus amigos hasta en las situaciones más extremas. Tanto tú como tus aliados en un radio de <span class=\\"Highlight1\\">{0} metros</span> os recuperáis de los efectos de estado <b>Agotamiento, Hemorragia, Entorpecimiento</b> y <b>Ceguera</b> un <span class=\\"Highlight2\\">{1} %</span> más rápido. Una vez fuera de alcance, el efecto seguirá activo durante <span class=\\"Highlight4\\">{2} segundos</span>.<br>","name":"Vigilia","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"Nada puede detenerte. Tu feroz tenacidad en las situaciones más extremas te permite arrastrarte un <span class=\\"Highlight1\\">{0} %</span> más rápido y recuperarte al mismo tiempo.<br>","name":"Tenacidad","flavor":"\\"¿Qué demonios es esto? \\"¡Voy a acabar con ese bastardo!\\". - Detective David Tapp","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"Permite percibir auras. Cuando se complete un generador, podrás ver el aura de los generadores, cofres y tótems en un radio de <span class=\\"Highlight1\\">{0} metros</span> durante <span class=\\"Highlight2\\">{1} segundos</span>.<br>Si tienes en la mano un mapa que pueda localizar objetivos, generadores, cofres y tótems revelados con <i>Corazonada</i>, se añaden al mapa.","name":"Corazonada","flavor":"\\"¿Podría decirnos dónde estuvo anoche?\\". (Detective David Tapp)","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"Estar cerca del asesino te llena de determinación. Por cada <span class=\\"Highlight1\\">{0} segundos</span> que pases dentro del radio de terror del asesino sin que te esté persiguiendo, consigues un distintivo, hasta un máximo de <span class=\\"Highlight2\\">{1}</span>.<br>Cuando <i>Bajo vigilancia</i> tenga al menos <b>1 distintivo</b>, la siguiente prueba de habilidad superada se considerará excelente y consumirá <b>1 distintivo</b>.","name":"Bajo vigilancia","flavor":"\\"Te tenía de rodillas. Luego huiste, huiste asustado porque te tenía. ¡Voy a cerrar este caso!\\". (Detective David Tapp)","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"Cuando das un salto rápido o sales corriendo de una taquilla, no dejas marcas de arañazos durante <span class=\\"Highlight1\\">{0} segundos</span>.<br><i>Baila conmigo</i> tiene un tiempo de recuperación de <span class=\\"Highlight1\\">{1} segundos</span>. <br>","name":"Baila conmigo","flavor":"\\"Otra canción empieza a sonar. <br>Baila conmigo, se avecina tempestad. <br>Sigue mis pasos, sígueme el ritmo.<br>Hasta el amanecer, baila conmigo\\".<br>(\\"Baila conmigo\\", de Kate Denson)","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"Permite percibir auras. Se te revelan las auras de palés y saltos a menos de <span class=\\"Highlight1\\">{0} metros</span>. <br><i>Oportunidades</i> tiene un tiempo de recarga de <span class=\\"Highlight1\\">{1} segundos</span> cuando saltas o dejas caer un palé durante una persecución.","name":"Oportunidades","flavor":"\\"Madruga, esfuérzate, trabaja con empeño.<br>Apunta a la fama y dispara sin dudar.<br>La fe y la familia debes valorar.<br>Crea oportunidades para cumplir tus sueños\\".<br>\\"Oportunidades\\". (Kate Denson)","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"Tienes un espíritu luchador y haces todo por zafarte del enemigo. Tus efectos de forcejeo contra el asesino aumentan en un <span class=\\"Highlight1\\">{0} %</span>. <br>Nublas la habilidad del asesino para ver auras de gancho en un radio de <span class=\\"Highlight1\\">{1} metros</span>.<br>","name":"Arrebato","flavor":"\\"A golpes y patadas<br> intento liberarme: <br>tus manos no pueden pararme\\".<br>(\\"Arrebato\\", de Kate Denson)","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"Habilidad activable.<br><i>Distracción</i> se activa cuando permaneces <span class=\\"Highlight1\\">{0} segundos</span> en el radio de terror del asesino sin que te persiga.<br><li>Cuando <i>Distracción</i> esté activa, pulsa el botón de la <i>habilidad activa</i> mientras estás inmóvil y de cuclillas para lanzar una piedra que produce una distracción para el asesino a una distancia de <span class=\\"Highlight2\\">20 metros</span>.</li><br><li>El temporizador de la habilidad se reinicia tras activarse.</li><br>La distracción consiste en:<br><li>Una notificación de ruido intenso</li><li>Marcas de arañazos</li>","name":"Distracción","flavor":"\\"Está el camino fácil y el camino correcto. Si no eres capaz de distinguirlos, puedes convertirte en un monstruo\\". (Adam Francis)","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"La habilidad <i>Liberación</i> se activa tras llevar a cabo un rescate de gancho seguro a otro superviviente.<br>Pasas a tener un <span class=\\"Highlight1\\">100 %</span> de probabilidades de desengancharte cuando lo intentes.<br>Al <i></i>hacerlo, se activará el efecto de estado <span class=\\"Highlight2\\">Desesperanza</span> durante <span class=\\"Highlight3\\">{0} segundos</span>.","name":"Liberación","flavor":"\\"Me crio un hombre muy estricto que me enseñó a sacar el máximo partido en situaciones desfavorables\\". (Adam Francis)","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"Empiezas la partida con una penalización de progreso del <span class=\\"Highlight1\\">{1} %</span> en pruebas de habilidad de curar a supervivientes.<br>Por cada prueba de habilidad que superes mientras curas a algún superviviente, consigues un distintivo, hasta un máximo de <span class=\\"Highlight2\\">{0}</span>.<br>Por cada distintivo, recibes un <span class=\\"Highlight1\\">{2} %</span> de progreso adicional.<br>No podrás conseguir pruebas de habilidad excelentes mientras usas <i>Autodidacta</i>.<li><i>Autodidacta</i> no aplica si usas un botiquín para curar.</li>","name":"Autodidacta","flavor":"\\"Puedes conseguir cualquier cosa que te propongas si te esfuerzas realmente por ello\\". (Adam Francis)","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"Cada vez que te liberas de un gancho (por tus medios o con ayuda), el gancho se rompe y se te revela el aura del asesino durante <span class=\\"Highlight1\\">{0} segundos</span>. Un gancho roto con esta habilidad tarda <span class=\\"Highlight2\\">180 segundos</span> en reaparecer.<br>","name":"Ruptura","flavor":"\\"Embiste desde el vientre de la bestia\\".<br>\\"Este es un boceto o dibujo en un trozo de madera que vi junto a la carretera. Sentí que tenía una historia que contar. Y no desaprovechó su segunda oportunidad\\". (Jeff, pintura con tinta y óleo sobre trozo de madera, 12 x 16)","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"Permite percibir auras.<br><br>Puedes ver el aura de todos los supervivientes que:<br><li>Rescates de un gancho o te rescaten de un gancho.</li><li>Cures con una acción completa de curación o te curen con una acción completa de curación.</li><br>Ellos también podrán ver tu aura.<br><br>Podrás ver el aura de hasta <span class=\\"Highlight1\\">{0} supervivientes.</span> Todos los efectos de esta habilidad desaparecerán si te cuelga el asesino.<br>","name":"Postratamiento","flavor":"\\"Una piedad que desgarra la tormenta\\".<br>\\"Obra al óleo en honor a mis mejores amigos, que también son los mejores músicos que conozco. Su primer álbum sigue siendo mi favorito. Me ayudó a superar una mala época de mi vida\\". (Jeff, óleo sobre lienzo, 16 x 16)","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"Inicias la partida con <span class=\\"Highlight1\\">{0} distintivos</span>.<br><br>Cuando el asesino esté a punto de ver tu aura, <i>Distorsión</i> se activará y gastará uno de esos distintivos.<br><br>Durante los siguientes <span class=\\"Highlight1\\">{1} segundos</span>, mientras <i>Distorsión</i> esté activa, el asesino no verá tu aura ni dejarás marcas de arañazos.<br><li><i>Distorsión</i> no se activa si estás agonizante o en una trampa.</li><br>","name":"Distorsión","flavor":"\\"Muerte engañada por el manto de plumas de halcón\\".<br>Boceto inspirado por varias noches de insomnio durante el invierno. Estudio de mitología nórdica: el valor puede ocultar tus defectos, incluso cuando eres más vulnerable. (Jeff, lápiz sobre cartón coloreado, 12 x 12)","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"Compartir experiencias dolorosas tiene el poder de curar.<br>Si te han herido, cuando curas a un superviviente sin usar un botiquín también te curas a ti a un <span class=\\"Highlight1\\">{0} %</span> de la velocidad normal.","name":"Solidaridad","flavor":"\\"Hay que estar ahí cuando las cosas se ponen difíciles, para escuchar los problemas de la gente y apoyar a quienes lo necesitan: así es como te haces más fuerte, así es como creces\\". (Jane Romero)","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"Alcanzar objetivos te da confianza.<br>Después de completar un generador, no dejas marcas de arañazos durante <span class=\\"Highlight1\\"> {0} segundos</span>.<br>","name":"Serenidad","flavor":"\\"Vale, tranquila. No le des más vueltas y sigue adelante: puedes hacerlo\\". (Jane Romero)","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"Si algo se te mete entre ceja y ceja, mejor que nadie se interponga en tu camino.<br><br><i>De frente</i> se activa cuando te escondes en una taquilla durante <span class=\\"Highlight1\\">{0} segundos</span>.<br>Mientras <i>De frente</i> esté activa, puedes realizar una acción rápida para salir de la taquilla y usar <i>De frente</i>. Si el asesino está al alcance de <i>De frente</i>, queda aturdido durante <span class=\\"Highlight1\\">{1} segundos</span>.<br>Causa el efecto de estado <span class=\\"Highlight3\\">Agotamiento</span> durante <span class=\\"Highlight1\\">{2} segundos</span>. <br>No puedes usar De frente mientras sufres Agotamiento.<br>No te recuperas del efecto de estado <span class=\\"Highlight3\\">Agotamiento</span> mientras corres. <br>No se puede usar <i>De frente</i> cuando tienes cuervos por inactividad.<br>","name":"De frente","flavor":"\\"A la gente se la recuerda por los obstáculos que superan. Puedes esconderte y olvidar de lo que eres capaz, o puedes enfrentarte a tus miedos y recordarle al mundo quién eres\\". (Jane Romero)","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"Tienes una habilidad asombrosa para escapar de lo inevitable.<br><br>Cuando estás agonizante, un <span class=\\"Highlight1\\">{0} %</span> de tu progreso de recuperación se convierte en progreso de forcejeo cuando te recoge el asesino, hasta un máximo del <span class=\\"Highlight2\\">{1} %</span> del total.<br>","name":"Hasta otra","flavor":"\\"Ale, hasta otra\\". (Ash Williams)","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"Permite percibir auras. Es posible distinguir lo avanzada que está la recuperación de los supervivientes agonizantes según la intensidad de sus auras a una distancia de hasta <span class=\\"Highlight1\\">{0} metros</span>.<br><br>Cuando cures a un superviviente agonizante hasta que solo se quede herido, tanto tú como dicho superviviente podréis ver el aura del asesino durante <span class=\\"Highlight2\\">{1} segundos</span>.<br>","name":"Sujétate","flavor":"\\"Los machacafantasmas no dejamos a nadie atrás\\". (Ash Williams)","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"El mal siempre termina encontrándote.<br><br><i>El temple del hombre</i> se activa después de recibir <span class=\\"Highlight1\\">{0} golpes</span> por proteger a supervivientes.<br><br>Una vez activada, serás invulnerable a cualquier daño recibido que te hubiera dejado <b>agonizante</b> cuando estés <b>herido</b>.<br><br>La próxima vez que recuperes tu salud al completo, tu aura se le revelará al asesino si te encuentras a más de <span class=\\"Highlight2\\">{1} metros</span> de él.<br><br><i>El temple del hombre</i> no se desactivará hasta que vuelva a dejarte agonizante.<br><i><li>Aumenta tus posibilidades de ser la obsesión del asesino.</li><li>El asesino no puede <b>obsesionarse</b> con más de un superviviente.</li></i><br>","name":"El temple del hombre","flavor":"\\"El mal me ha puesto una diana en el culo del tamaño de un estadio de fútbol\\". (Ash Williams)","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"Buscas justicia y revelar la verdad sin importar los obstáculos con los que te tropieces por el camino.<br><br>El aura del generador que estés reparando se revela a los demás supervivientes que se encuentren en un radio de <span class=\\"Highlight1\\">{0} metros</span>.<br><br>Si el asesino derriba a un superviviente mientras estás reparando un generador, ves el aura de los demás supervivientes durante <span class=\\"Highlight2\\">{1} segundos</span>.<br>","name":"Mejor juntos","flavor":"\\"Haremos que arda el laboratorio\\". (Nancy Wheeler)","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"Cuando te fijas un objetivo, no hay vuelta atrás: mejor pedir perdón que pedir permiso. <br><br>Ves tus marcas de arañazos propias en todo momento.<br><br>Caminas un <span class=\\"Highlight1\\">{0} %</span> más deprisa.<br>","name":"Fijación","flavor":"\\"Quiero terminar lo que hemos empezado. Quiero matarlo\\". (Nancy Wheeler)","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"Buscas en tu interior y confías en tu instinto siempre que te embarga la desolación y pierdes el rumbo.<br><br>Cada vez que purificas un tótem, se activa <i>Fuerza interior</i>. <i>Fuerza interior</i> no se activa si estás sufriendo el <b>efecto de estado Desesperanza</b>.<br><br>Si te han herido, si te escondes en una taquilla durante <span class=\\"Highlight1\\">{0} segundos</span> mientras <i>Fuerza interior</i> esté activa te recuperarás por completo.<br><br><i>Fuerza interior</i> se desactiva inmediatamente después de surtir efecto.<br>","name":"Fuerza interior","flavor":"\\"Todo este tiempo me esforzaba por fingir que todo iba bien, pero no es así\\". (Nancy Wheeler)","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"A pesar de tener fama de persona egocéntrica, lo arriesgas todo para ayudar a quienes te necesitan.<br><br>Cuando desenganchas a un superviviente, este no deja marcas de arañazos ni rastros de sangre durante <span class=\\"Highlight1\\">{0} segundos</span>. El asesino y tú podéis ver vuestras respectivas auras durante <span class=\\"Highlight2\\">{1} segundos</span>.<br>","name":"Canguro","flavor":"\\"He prometido manteneros a salvo, y eso es lo que pienso hacer\\". (Steve Harrington)","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"La vida te ha demostrado lo importante que es la amistad, que te ha dado fuerzas.<br><br>Mientras estés en la fase de pugna, se activa <i>Camaradería</i>.<br><br>Si otro superviviente se encuentra dentro de un radio de <span class=\\"Highlight1\\">{0} metros</span> mientras <i>Camaradería</i> está activa, el temporizador del gancho se detiene durante <span class=\\"Highlight2\\">{1} segundos</span>.<br>","name":"Camaradería","flavor":"\\"Oye, recuerda: cuando entres ahí... pasas de todo. Vas aprendiendo, colega. Vas aprendiendo\\". (Steve Harrington)","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"Cuando curas a otros supervivientes el equivalente a un estado de salud, se activa <i>Segundo aliento</i>. <i>Segundo aliento</i> no se activa si estás sufriendo el efecto de estado <span class=\\"Highlight1\\">Desesperanza</span>.<br><br>Mientras <i>Segundo aliento</i> esté activa, la próxima vez que te desenganchen o te desenganches tú por tus propios medios se te aplicará el efecto de estado <span class=\\"Highlight1\\">Desesperanza</span>. Después de <span class=\\"Highlight2\\">{0} segundos</span>, <i>Segundo aliento</i> te curará por completo.<br><br><i>Segundo aliento</i> se desactivará cuando te hayas recuperado del todo o si te dejan en estado agonizante antes de que <i>Segundo aliento</i> llegue a activarse. Perderás el efecto de estado <span class=\\"Highlight1\\">Desesperanza</span>.<br>","name":"Segundo aliento","flavor":"\\"Ah, pues va a ser que no\\". (Steve Harrington)","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"Te has llevado unos buenos rasguños y moretones, pero la suerte siempre está de tu lado.<br><br><i>Golpe de suerte</i> se activa en cuanto te hieren. Mientras <i>Golpe de suerte</i> está activa, no dejas rastros de sangre ni marcas de arañazos durante <span class=\\"Highlight1\\">{0} segundos</span>.<br><br><i>Golpe de suerte</i> queda desactivada de forma permanente para el resto de la partida una vez transcurrido ese tiempo.<br>","name":"Golpe de suerte","flavor":"\\"Eso no basta para vencerme. Ni por asomo\\". (Yui Kimura) ","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"Te defiendes usando cualquier cosa que tengas a mano para sacar ventaja.<br><br>Mantén pulsado el <i>botón de la habilidad activa</i> durante <span class=\\"Highlight1\\">{0} segundos</span> mientras estás junto a un palé derribado para volver a dejarlo en su posición original.<br><br><i>Cueste lo que cueste</i> tiene un tiempo de recarga de <span class=\\"Highlight2\\">{1} segundos</span>.<br>","name":"Cueste lo que cueste","flavor":"\\"Te golpearé con todas mis fuerzas, y luego volveré a hacerlo\\". (Yui Kimura) ","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"Cuando alguien tiene problemas, te vienes arriba y lo animas a superar cualquier obstáculo.<br><br>Cuando estás a menos de <span class=\\"Highlight1\\">{0} metros</span> de un superviviente con el que esté cargando el asesino, se te aplica afecta el efecto de estado <span class=\\"Highlight2\\">Celeridad</span>, que aumenta un <span class=\\"Highlight3\\">{1} %</span> tu velocidad de movimiento. El superviviente forcejea un <span class=\\"Highlight4\\">{2} %</span> más rápido.<br>","name":"Fuga","flavor":"\\"Venga, vamos a salir de esta\\". (Yui Kimura) ","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"Has aprendido que a veces la mejor estrategia es la discreción.<br><br>Cuando te desenganchen o escapes del gancho, <i>Extraoficial</i> se activa durante <span class=\\"Highlight1\\">{0} segundos</span>. <br><br>Mientras <i>Extraoficial</i> siga activa, no se mostrará tu aura al asesino y los gruñidos de dolor causados por las heridas se reducen un <span class=\\"Highlight2\\">{1} %</span>.<br>","name":"Extraoficial","flavor":"\\"Confía en mí, investigo todo a conciencia y con discreción\\". (Zarina Kassir)","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"Has descubierto que la gente siempre presta atención a lo que hace más ruido.<br><br>Tras reparar un generador durante al menos <span class=\\"Highlight1\\">{0} segundos</span>, se iluminará con un aura amarilla solo visible para ti. El generador permanecerá iluminado hasta que sea reparado por completo, repares otro generador o entres en una taquilla.<br><br>Entrar en una taquilla activará una notificación de ruido intenso para el asesino en la ubicación del generador iluminado. <br><li><i>Bulo</i> solo puede activarse una vez cada <span class=\\"Highlight2\\">{1} segundos</span>.</li><br>","name":"Bulo","flavor":"\\"Las noticias dejan fuera lo dificultoso y complejo: la verdad\\". (Zarina Kassir)","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"Te arriesgas a morir y a que te hieran por otras personas.<br><br><i>Por los demás</i> solo está activo mientras tengas la salud al máximo.<br><br>Pulsa el <i>botón de la habilidad activa</i> mientras cures a otro superviviente sin un botiquín para curarlo al momento de agonizante a herido o de herido a ileso.<br><br>A cambio, tú te quedas herido y sufres el efecto de estado <b>Desesperanza</b> durante <span class=\\"Highlight1\\">{0} segundos</span>.<br><br>Te conviertes en la obsesión.<br><br>Equipar esta habilidad <b>reduce</b> las posibilidades de que te conviertas en la obsesión al inicio de la partida.<br>","name":"Por los demás","flavor":"\\"Podemos escribir nuestra propia historia y decidir cómo acaba de verdad\\". (Zarina Kassir)","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"Superar las enormes penalidades a las que te has tenido que enfrentar te ha hecho más fuerte.<br><br>Se te aplica el efecto de estado <b>Resistencia</b> durante <span class=\\"Highlight1\\">{0} segundos</span> después de que te curen o de haberte recuperado tras estar agonizante.<br>Mientras te afecte un maleficio, puedes recuperarte por completo del estado agonizante.<br><br>Este efecto solo se puede activar una vez cada <span class=\\"Highlight2\\">30 segundos</span>.","name":"Salvaguarda de alma","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"Es como si una parte latente de ti hubiera despertado. Sientes que puedes buscar ayuda más allá de tu propio ser.<br><br>Cuando la obsesión o tú estáis heridos, ella ve tu aura y tú la suya.<br><br>Después de completar una acción de curación sobre la obsesión o de que ella complete una acción de curación sobre ti, se os aplica a ambos un <span class=\\"Highlight1\\">{1} %</span> del efecto de estado <b>Celeridad</b> hasta que estéis a más de <span class=\\"Highlight2\\">16 m</span> el uno del otro.<br><br>Reduce las posibilidades de ser la obsesión.<br><br>Si eres la obsesión, esta habilidad se desactiva.","name":"Pacto de sangre","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"Te has acostumbrado a que te persigan las fuerzas malignas y has empezado a usarlo a tu favor.<br><br><i>Supresión de alianza</i> se activa tras reparar generadores durante un total de <span class=\\"Highlight1\\">{0} segundos.</span><br><br>Al reparar un generador mientras la habilidad está activa, pulsa el <i>botón de la habilidad activa</i> para invocar al Ente y bloquear el generador durante <span class=\\"Highlight2\\">{1} segundos.</span> La habilidad se desactiva.<br><br>Los generadores afectados brillarán con un aura blanca que se mostrará a todos los supervivientes.","name":"Supresión de alianza ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"Tienes una facilidad innata para encontrar formas de escapar.<br><br>Ves las auras de los generadores a una distancia máxima de <span class=\\"Highlight1\\">{0} metros</span>.<br><br><i>Visión de futuro</i> se desactiva durante <span class=\\"Highlight2\\">{1} segundos</span> cada vez que se completa un generador.","name":"Visión de futuro","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"Te niegas a fracasar incluso en tus peores momentos.<br><br>Por cada superviviente herido, enganchado o agonizante, la velocidad de tus acciones de curación y desenganche aumenta un <span class=\\"Highlight1\\">{0} %</span>.<br>","name":"Medidas desesperadas","flavor":"\\"Cuando vengan con una bola de demolición, construye muros más fuertes\\". (Felix Richter)","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"Sabes cómo sacarles partido a tus herramientas.<br><br>Una vez por partida, se rellenará un <span class=\\"Highlight1\\">{0} %</span> de las cargas de un objeto <span class=\\"Highlight2\\">{1} segundos</span> después de que este se haya gastado por completo.<br>","name":"Construcción duradera","flavor":"\\"La arquitectura es el alma de la civilización\\". (Felix Richter)","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"Posees una capacidad de observación superior a la media.<br><br>Comienzas la partida con <span class=\\"Highlight1\\">{0} distintivos</span>. Si ya se ha abierto un cofre, puedes gastar un distintivo para buscar un objeto en él. Solo puedes rebuscar una vez por cofre.<br><br>La velocidad a la que rebuscas en los cofres aumenta un <span class=\\"Highlight2\\">{1} %</span>.","name":"Evaluación","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"Tu estilo de vida aventurero trae consigo momentos donde deberás sacar tu lado más astuto.<br><br>Si interactúas con una taquilla al esprintar, se activará una notificación de ruido intenso en tu ubicación y no dejarás marcas de arañazos durante los próximos <span class=\\"Highlight1\\">{0} segundos</span>.<br><br>Ya no podrás entrar en las taquillas al esprintar y mientras la habilidad esté activa.<br><br><i>Engaño</i> solo puede activarse una vez cada <span class=\\"Highlight2\\">{1} segundos</span>.","name":"Engaño","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"Nunca te has rendido, así que tampoco vas a hacerlo ahora.<br><br>Cuando un asesino te lleva, forcejea hasta alcanzar un <span class=\\"Highlight1\\">{0} %</span> para activar <i>Lucha intensa</i>. Cuando <i>Lucha intensa</i> esté activa, podrás soltar un palé fijo cercano para aturdir a un asesino.<br>","name":"Lucha intensa","flavor":"\\"En el pasado, confié en otras personas para que me protegieran y lo perdí todo. No volveré a cometer el mismo error\\".\\\\ (Élodie Rakoto)","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"A veces, es necesario que otros se sacrifiquen por tu propio bien.<br><br>Cada vez que se enganche otro superviviente, obtienes <span class=\\"Highlight1\\">{0} distintivos.</span> Consumes todos los distintivos tras una prueba de habilidad excelente en un generador. Cada distintivo consumido obtiene una progresión adicional del <span class=\\"Highlight2\\">{1} %</span> con las pruebas de habilidad excelentes al reparar generadores.<br>","name":"Primera línea","flavor":"\\"Primero hay que sacrificar a los débiles. Está escrito en la naturaleza, en los negocios... Muchos se niegan a aceptar esta realidad\\". (Yun-Jin)","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"Cuando tu rival comete un error, tienes que aprovechar la oportunidad.<br><br>Tras aturdir al asesino con un palé, esprinta con un <span class=\\"Highlight1\\">{0} %</span> de tu habilidad normal cuando corres durante <span class=\\"Highlight2\\">{1} segundos.</span><br>Provoca el efecto de estado <b>Agotamiento</b> durante <span class=\\"Highlight3\\">{2} segundos.</span><br>Esta habilidad no se puede usar con <b>Agotamiento</b>.<br>","name":"Éxito aplastante","flavor":"\\"Me he enfrentado a muchos psicópatas trajeados. Tú eres igual, solo que más desagradable y con menos estilo\\". (Yun-Jin)","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"La vida es cruel y es mejor no depender de nadie.<br><br>Cuando otro superviviente sufra un ataque básico o especial a <span class=\\"Highlight1\\">{0} metros</span> de ti, se activará <i>Autoconservación</i>.<br>Tus marcas de arañazos, charcos de sangre y gruñidos de dolor se ocultan durante <span class=\\"Highlight2\\">{1} segundos.</span><br>","name":"Autoconservación","flavor":"\\"Si he aprendido algo en esta industria, es lo siguiente: cuando el hacha empiece a oscilar, agacha la cabeza\\". (Yun-Jin)","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"Sabes resistir ante un enemigo más fuerte que tú: lo principal es dar caza y acabar con sus refuerzos.<br><br>Purifica tótems un <b>20 %</b> más rápido. Tras purificar un tótem, ves el aura del tótem más lejano a ti durante <span class=\\"Highlight1\\">{0} segundos</span> y obtienes un <span class=\\"Highlight2\\">{1} %</span> de velocidad adicional acumulable para purificar tótems para el resto de la partida.<br><br><span class= \\"FlavorText\\">\\"No me desagrada hacer un poco de detective\\". (Jill Valentine)</span>","name":"Contrafuerza","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"Has sobrevivido a algo que parecía imposible... y volverás a hacerlo.<br><br>Obtienes un <span class=\\"Highlight1\\">{0} %</span> de velocidad de curación al instante después de que alguien te desenganche o de que te desenganches por tus propios medios.<br><br><span class= \\"FlavorText\\">\\"Ahora es mi turno, bicho asqueroso\\". (Jill Valentine)</span>","name":"Resurgimiento","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"Cuando el combate cuerpo a cuerpo no es una opción, siempre se te ocurre alguna alternativa.<br><br><i>Mina explosiva</i> se activa tras completar un total de <span class=\\"Highlight1\\">{0} %</span> como progreso de reparación de generadores.<br>Después de reparar un generador durante un mínimo de <span class=\\"Highlight2\\">{1} segundos</span>, pulsa el <i>botón de la habilidad</i> para instalar una trampa que permanezca activa durante <span class=\\"Highlight3\\">{2} segundos</span>. Los generadores afectados se mostrarán a los supervivientes con un aura amarilla. Solo se puede activar una trampa en un generador.<br><li>Cuando el asesino patea un generador con trampa, esta explota, aturdiendo y cegando a quienes estén cerca. A continuación, <i>Mina explosiva</i> se desactivará.</li><br><br><span class= \\"FlavorText\\">\\"¡Ahora sí que vas a ver las estrellas!\\". (Jill Valentine)</span>","name":"Mina explosiva","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"Sientes el dolor igual que el resto, pero no quieres que nadie se entere.<br><br>No emites ningún sonido cuando te estés curando, ni un gruñido. No habrá una notificación de ruido en las pruebas de habilidad de curación fallidas ni en las curaciones revertidas en solo un <span class=\\"Highlight1\\">{0} %.</span><br><br><span class= \\"FlavorText\\">\\"Puedo hacerlo\\". (Leon S. Kennedy)</span>","name":"De tripas corazón","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"Te has adaptado a un mundo sumido en el caos.<br><br>Tras completar un <span class=\\"Highlight1\\">{0} %</span> de progreso con cualquier generador, se activa <i>Granada aturdidora</i>.<br>Entra en una taquilla sin llevar nada y pulsa el botón de la habilidad para fabricar una granada.<br><li>1 carga.</li><li>Explota con un ruido y luz intensos.</li><li>Crea una notificación de ruido.</li><li>Puede usarse para distraer o cegar.</li><br>La granada se queda atrás cuando escapas de la partida.<br><br><span class= \\"FlavorText\\">\\"¡Largo de aquí!\\". (Leon S. Kennedy)</span>","name":"Granada aturdidora","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"Prestas mucha atención a los objetivos cuando se escapan.<br><br>Completa <span class=\\"Highlight1\\">{0}</span> pruebas de habilidad superadas o excelentes mientras reparas generadores para activar <i>Espíritu de novato</i> para el resto de la partida.<br>Cuando se active, podrás ver el aura de los generadores revertidos.<br><br><span class= \\"FlavorText\\">\\"Pondré fin a esto, teniente. Se lo prometo\\". (Leon S. Kennedy)</span>","name":"Espíritu de novato","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/es/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/es/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Un líder nervioso, capaz de localizar a sus aliados y aumentar su eficacia.<BR><BR>Sus habilidades personales <B>Vínculo</B>, <B>Demuestra lo que vales</B> y <B>Líder</B> le permiten acercarse al resto de supervivientes y proporcionar bonificaciones para todos.","name":"Dwight Fairfield","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"Una atleta enérgica capaz de superar en velocidad a la mayoría de los asesinos.<BR><BR>Sus habilidades personales <B>Velocidad silenciosa</B>, <B>Esprint</B> y <B>Adrenalina</B> le proporcionan una gran ventaja para escapar en las persecuciones y alejarse del asesino.","name":"Meg Thomas","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"Una botánica estudiosa que puede aumentar su capacidad de supervivencia y la de su equipo.<BR><BR>Sus habilidades personales <B>Empatía</B>, <B>Conocimientos de botánica</B> y <B>Autocuración</B> le permiten detectar a supervivientes heridos, así como curar a su equipo y a sí misma.","name":"Claudette Morel","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"Un preparacionista solitario, capaz de apañárselas por su cuenta en la mayoría de las situaciones.<BR><BR>Sus habilidades personales <B>Voluntad de hierro</B>, <B>Espíritu calmado</B> y <B>Sabotear</B> le permiten moverse mejor por el entorno y sobrevivir pese a posibles heridas.","name":"Jake Park","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"Una artista urbana, capaz de escapar y esconderse fácilmente.<BR><BR>Sus habilidades personales <B>Caída equilibrada</B>, <B>Evasión urbana</B> y <B>Con calle</B> la capacitan para completar objetivos y huir rápidamente.","name":"Nea Karlsson","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"Un viejo soldado acostumbrado a enfrentarse a situaciones extremas.<BR><BR>Sus habilidades personales <B>Abandonado a tu suerte</B>, <B>Tiempo prestado</B> e <B>Inquebrantable</B> lo hacen más poderoso en los momentos difíciles.","name":"William \\"Bill\\" Overbeck","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"Un macarra al que gusta vivir al límite.<BR><BR>Sus habilidades personales <B>Vamos a vivir para siempre</B>, <B>Fajador</B> y <B>Me la pela</B> concitan grandes recompensas por un estilo de juego agresivo y beligerante que conlleva sus riesgos.","name":"David King","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"Una superviviente decidida, preparada para enfrentarse a cualquier desafío.<BR><BR>Sus habilidades personales <B>Solo quedo yo</B>, <B>Objeto de obsesión</B> y <B>Golpe decisivo</B> le conceden poderosas capacidades de supervivencia a costa de quedarse expuesta.","name":"Laurie Strode","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"Un jugador afortunado que mejora las probabilidades de éxito de todo el equipo.<BR><BR>Sus habilidades personales <B>A mano descubierta</B>, <B>Subir las apuestas</B> y <B>As en la manga</B> aumentan la suerte de todos los supervivientes y ayudan a desbloquear cofres.","name":"Ace Visconti","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"Una competidora centrada en sus objetivos, capaz de adaptar su estrategia rápidamente para afrontar toda clase de retos.<BR><BR>Sus habilidades personales <B>Pericia técnica</B>, <B>Agilidad</B> y <B>Alerta</B> la ayudan a reparar generadores y a localizar al asesino.","name":"Feng Min","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"Un caminante de sueños decidido que aumenta la capacidad de supervivencia y de recuperación de su equipo.<BR><BR>Sus habilidades personales <B>¡Despierta!</B>, <B>Farmacia</B> y <B>Vigilia</B> ayudan a los supervivientes a localizar las puertas de salida y a recuperarse más fácilmente.","name":"Quentin Smith","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"Un detective obsesionado, capaz de localizar y completar objetivos con mayor rapidez.<BR><BR>Sus habilidades personales <B>Tenacidad</B>, <B>Corazonada</B> y <B>Bajo vigilancia</B> le permiten concentrarse en sus objetivos y recuperarse rápidamente.","name":"Detective Tapp","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"Un ave cantora llena de esperanza que sabe aprovechar al máximo su entorno. <br><br>Sus habilidades personales <b>Baila conmigo</b>, <b>Oportunidades</b> y <b>Arrebato</b> le conceden energía y anticipación para escapar de las situaciones más desesperadas.","name":"Kate Denson","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"Un profesor con muchos recursos, capaz de adaptarse a nuevas situaciones y de desarrollar estrategias para solventarlas.<br><br>Sus habilidades personales <b>Distracción</b>, <b>Liberación</b> y <b>Autodidacta</b> le serán de ayuda para distraer al asesino, sobrevivir a situaciones desesperadas e incrementar su destreza conforme avanza la partida.","name":"Adam Francis","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"Un artista silencioso que no pierde la calma ni en las peores circunstancias.<br><br>Sus habilidades personales <b>Ruptura</b>, <b>Postratamiento</b> y <b>Distorsión</b> le proporcionan ventajas de observación y le ayudan a esconderse del asesino.","name":"Jeff Johansen","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"Una influyente figura que va a contracorriente para enfrentarse a los problemas de frente.<br><br>Sus habilidades personales <b>Solidaridad</b>, <b>Serenidad</b> y <b>De frente</b> le confieren un conjunto flexible de habilidades de gran utilidad, tanto para ella como para otras personas, a la hora de escapar de situaciones peligrosas.","name":"Jane Romero","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"Un \\"lobo solitario\\", chulo y testarudo como ninguno; un hombre hecho para sobrevivir.<br><br>Sus habilidades personales <b>Hasta otra</b>, <b>Sujétate</b> y <b>El temple del hombre</b> le otorgan resistencia adicional contra el dolor y la adversidad, así como la capacidad de ayudar a sus amigos a salir de situaciones complicadas. ","name":"Ashley J. Williams","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"Una aspirante a periodista capaz de observar con detalle y obtener información que a los demás se les suele escapar.<br><br>Sus habilidades personales, <b>Mejor juntos</b>, <b>Fijación</b> y <b>Fuerza interior</b> le proporcionan los datos y el coraje que necesita para hacer frente a desafíos inesperados.","name":"Nancy Wheeler","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"Abusón reformado que ahora ayuda al resto de supervivientes, sin sacrificar por ello su humor marca de la casa.<br><br>Sus habilidades personales <b>Canguro</b>, <b>Camaradería</b> y <b>Segundo aliento</b> servirán para distraer a los asesinos, sobreponerse al dolor y regresar a la batalla.","name":"Steve Harrington","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"Una endurecida corredora callejera capaz de obtener ventajas para ella y para el resto de supervivientes en situaciones desesperadas.<br><br>Sus habilidades personales, <b>Golpe de suerte</b>, <b>Cueste lo que cueste</b> y <b>Fuga</b> le permiten cubrir sus rastros de sangre, recolocar palés usados y ayudar a supervivientes indefensos.","name":"Yui Kimura","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"Una intrépida documentalista, capaz de usar todo lo que ha aprendido en las calles para poder servir de gran ayuda a otros supervivientes y evitar ser detectada.<br><br>Sus habilidades personales, <b>Extraoficial</b>, <b>Bulo</b> y <b>Por los demás</b>, la ayudan a permanecer oculta ante el peligro, crear distracciones y poner en peligro su propia integridad para curar con rapidez a los demás.","name":"Zarina Kassir","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"Cheryl Mason es una joven que se vale de su amplia experiencia en mundos del terror para infundir confianza a su equipo y a sí misma.<br><br>Sus habilidades personales <b>Salvaguarda de alma</b>, <b>Pacto de sangre</b> y <b>Supresión de alianza</b> le permiten sobrevivir a grandes obstáculos, mantenerse en contacto con sus compañeros y planificar objetivos.","name":"Cheryl Mason","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"Un arquitecto con visión de futuro, capaz de enfocar su determinación incansable para trazar un plan y ayudar a otros supervivientes.<br><br>Sus habilidades personales <b>Visión de futuro</b>, <b>Medidas desesperadas</b> y <b>Construcción duradera</b> lo ayudan a revelar generadores, rescatar supervivientes y aprovechar al máximo sus herramientas.","name":"Felix Richter","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"Una investigadora de las artes ocultas capaz de emplear trucos astutos y una gran dosis de determinación para sobrevivir.<br><br>Sus habilidades personales, <b>Evaluación</b>, <b>Engaño</b> y <b>Lucha intensa</b>, le permiten interactuar con los objetos de múltiples maneras, y siempre tiene un plan B para huir de los asesinos. ","name":"Élodie Rakoto","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"Una egoísta productora musical capaz de alcanzar sus objetivos incluso en los momentos más complicados.<br><br>Sus habilidades personales, <b>Primera línea</b>, <b>Éxito aplastante</b> y <b>Autoconservación</b> le permiten mejorar su habilidad cuando otros sufren daños, además de huir rápidamente de una persecución. ","name":"Yun-Jin Lee","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"Jill Valentine es una de las primeras miembros de S.T.A.R.S. que ha sobrevivido a cientos de armas bioorgánicas.<br><br>Sus habilidades personales, <b>Contrafuerza</b>, <b>Resurgimiento</b> y <b>Mina explosiva</b>, le permiten defenderse de forma indirecta, mientras ayuda a sus compañeros. ","name":"Jill Valentine","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"Leon S. Kennedy es un agente de policía novato que se excedió en sus obligaciones durante el brote de Raccoon City.<br><br>Sus habilidades personales, <b>De tripas corazón</b>, <b>Granada aturdidora</b> y <b>Espíritu de novato</b>, le permiten ignorar el dolor, distraer al asesino y rastrear objetivos perdidos. ","name":"Leon S. Kennedy","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./es/index.ts ***!
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
/* harmony import */ var _src_lib_locales_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/es */ "./src/lib/locales/es.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_es__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map