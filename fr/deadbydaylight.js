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

/***/ "./src/lib/locales/fr.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/fr.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_fr_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/fr/items.json */ "./src/data.compiled/locales/fr/items.json");
/* harmony import */ var _data_compiled_locales_fr_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/fr/killerAddons.json */ "./src/data.compiled/locales/fr/killerAddons.json");
/* harmony import */ var _data_compiled_locales_fr_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/fr/killerOfferings.json */ "./src/data.compiled/locales/fr/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_fr_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/fr/killerPerks.json */ "./src/data.compiled/locales/fr/killerPerks.json");
/* harmony import */ var _data_compiled_locales_fr_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/fr/killers.json */ "./src/data.compiled/locales/fr/killers.json");
/* harmony import */ var _data_compiled_locales_fr_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/fr/powers.json */ "./src/data.compiled/locales/fr/powers.json");
/* harmony import */ var _data_compiled_locales_fr_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/fr/sharedOfferings.json */ "./src/data.compiled/locales/fr/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_fr_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/fr/survivorAddons.json */ "./src/data.compiled/locales/fr/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_fr_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/fr/survivorOfferings.json */ "./src/data.compiled/locales/fr/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_fr_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/fr/survivorPerks.json */ "./src/data.compiled/locales/fr/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_fr_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/fr/survivors.json */ "./src/data.compiled/locales/fr/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.French;
var data = {
  items: _data_compiled_locales_fr_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_fr_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_fr_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_fr_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_fr_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_fr_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_fr_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_fr_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_fr_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_fr_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_fr_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/fr/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/fr/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Un chapelet de petits explosifs gainés de papier épais. Explose en rafales avec d\'intenses flashs lumineux. Peut être utilisé pour créer une diversion, pour éblouir ou pour faire la fête.<br><li><b>1 charge.</b></li>","name":"Pétard chinois","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"Une lampe de poche standard. Peut être utilisée pour vous éclairer dans l\'obscurité.<br><li><b>8 secondes</b> d\'utilisation</li>","name":"Lampe de poche","flavor":"« La pile a été presque entièrement utilisée par le précédent propriétaire. »","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"Lampe de poche munie d\'un filtre spécial qui rend sa lumière orange et projette un petit fantôme. <br><li><b>8 secondes</b> d\'utilisation.</li><li><b>Augmente considérablement</b> la présence du gentil fantôme dans votre vie.</li>","name":"Feu follet","flavor":"« Bonne chasse aux bonbons ! »","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"Une lampe de poche légère offrant une bonne prise en main. Sa technologie efficace produit une lumière plus puissante tout en consommant moins d\'énergie.<br><li><b>8 secondes d\'utilisation</b>.</li><li><b>Réduit légèrement</b> la consommation de pile de la lampe de poche.</li><li><b>Augmente légèrement</b> la précision.</li>","name":"Lampe torche de sport","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"Une lampe de poche solide mais lourde qui est très puissante.<br><li><b>12 secondes d\'utilisation</b>.</li><li><b>Réduit légèrement</b> la précision.</li><li><b>Augmente modérément</b> l\'éclat du faisceau.</li><li><b>Augmente modérément</b> la durée de l\'aveuglement.</li>","name":"Lampe de poche utilitaire","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"La tête et le panneton d\'une clé, vibrant de puissance. Le pouvoir de la clé cassée ne peut pas s\'activer tout seul. De nombreux objets peuvent être attachés à son anneau, qui canalise le pouvoir de la clé cassée pour obtenir différents effets. <br><li><b>10 secondes</b> d\'utilisation.</li>","name":"Clé cassée","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"Une clé terne et tordue qui renfermait autrefois une grande puissance. Le pouvoir de la clé ne peut pas s\'activer tout seul. De nombreux objets peuvent être attachés à son anneau, qui canalise le pouvoir de la clé pour obtenir différents effets.<br><li><b>5 secondes</b> d\'utilisation.</li><li>Peut être utilisée pour ouvrir des serrures noires.</li>","name":"Clé émoussée","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"Une clé tordue et ternie, vibrant d\'une puissance menaçante. Le pouvoir de la clé ne peut pas s\'activer tout seul. De nombreux objets peuvent être attachés à son anneau, qui canalise le pouvoir du passe-partout pour obtenir différents effets. <br><li><b>30 secondes</b> d\'utilisation.</li><li>Peut être utilisée pour ouvrir des serrures noires.</li>","name":"Passe-partout","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"Un vieux morceau de parchemin en peau. Il est roulé et fermé par un lacet en cuir uni. Tenir et orienter la carte débloque un grand potentiel de capacité de repérage d\'auras, qui consume lentement la carte. L\'aura des générateurs que vous avez déjà découverts vous sera révélée aussi longtemps qu\'il restera des charges pour la carte.<br><li><b>20 secondes</b> d\'utilisation.</li><li>Commence avec <b>1</b> générateur localisé automatiquement.</li><li>Débloque la capacité de localiser les générateurs dans un rayon de <b>8 mètres</b>.</li>","name":"Carte","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"Un morceau de parchemin en peau étrangement fraîche. Le sang sur les bords n\'est pas encore sec. Il est roulé et maintenu serré par de nombreuses ficelles de couleurs variées. Tenir et orienter la carte débloque un grand potentiel de capacité de repérage d\'auras, qui consume lentement la carte. Les objets pourvus d\'aura que vous avez déjà découverts vous seront révélés aussi longtemps qu\'il restera des charges pour la carte. <br><li><b>20 secondes d\'utilisation</b>.</li><li>Commence avec <b>3 objets</b> suivis automatiquement.</li><li>Débloque la capacité de <b>localiser des objectifs</b> dans un rayon de <b>8 mètres</b>.</li><li>Débloque la capacité de <b>localiser des serrures noires</b> dans un rayon de <b>8 mètres</b>.</li><li>Débloque la capacité de <b>localiser les biens du tueur</b> dans un rayon de <b>8 mètres</b>.</li><li>Débloque la capacité de <b>localiser les portes de sortie</b> dans un rayon de <b>8 mètres</b>.</li>","name":"Carte arc-en-ciel","flavor":"« Ça me met le moral à plat. Tout ce savoir, tous ces efforts éreintants et pourtant, toujours rien de concret, rien d\'utile pour sortir de ce cauchemar. » - Journal de Vigo","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"Une trousse de soins rudimentaire qui peut sauver des vies même si elle est incomplète.<br><li><b>16 charges</b>.</li><li><b>Augmente modérément</b> la vitesse à laquelle vous soignez les autres.</li><li>Débloque l’action d’<b>auto-soins</b>.</li>","name":"Trousse de soins de camping","flavor":"« À peine de quoi réaliser un pansement décent. »","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"Boîte à déjeuner en plastique ornée d\'autocollants Halloween phosphorescents et contenant du matériel médical de secours.<br><li><b>24 charges.</b></li><li><b>Augmente considérablement</b> la vitesse à laquelle vous soignez les autres.</li><li>Débloque l\'action d\'<b>auto-soins</b>.</li><li>Vous rend <b>beaucoup plus visible</b>.</li>","name":"Boîte à déjeuner Halloween","flavor":"« La sécurité avant tout ! Assurez-vous que tout le monde vous voie pendant la chasse aux bonbons. »","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"Une trousse de soins standard avec tout l\'équipement nécessaire pour traiter des blessures légères ou graves.<br><li><b>24</b> charges.</li><li><b>Augmente considérablement</b> la vitesse à laquelle vous soignez les autres.</li><li>Débloque l\'action d\'<b>auto-soins</b>.</li>","name":"Trousse de premiers soins","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"Une trousse de soins résistante et bien rangée, composée des meilleures fournitures médicales.<br><li><b>16 charges</b>.</li><li><b>Augmente énormément</b> la vitesse à laquelle vous soignez les autres.</li><li><b>Augmente énormément</b> la vitesse à laquelle vous vous soignez.</li><li>Débloque l’action d’<b>auto-soins</b>.</li>","name":"Trousse de soins d’urgence","flavor":"« À tout mal correspond un remède. Enfin, presque... »","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"Une grande boîte en métal contenant des fournitures médicales destinées à des sauvetages en terrain difficile.<br><li><b>32 charges</b>.</li><li><b>Augmente énormément</b> la vitesse à laquelle vous soignez les autres.</li><li><b>Augmente modérément</b> les zones de succès des tests d’habileté.</li><li><b>Augmente modérément</b> les zones bonus des tests d’habileté.</li><li>Débloque l’action d’<b>auto-soins</b>.</li>","name":"Trousse de soins de garde forestier","flavor":"« Une petite étiquette imprimée est collée sous le couvercle : VK.ID-3994723 »","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"Boîte en métal contenant des outils fort abîmés qui peuvent casser à tout moment. Même sans entraînement, elle peut être utilisée pour réparer ou casser de nombreux composants mécaniques.<br><li><b>16 charges</b>.</li><li><b>Augmente modérément</b> la vitesse de réparation.</li><li><b>Réduit légèrement</b> les zones de succès des tests d\'habileté.</li><li>Débloque l\'action de <b>sabotage</b>.</li>","name":"Outils usés","flavor":"« Et vous appelez ça des outils ? Sérieusement ?! »","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"Boîte en métal contenant un ensemble d\'outils de base. Même sans entraînement, elle peut être utilisée pour réparer ou casser de nombreux composants mécaniques.<br><li><b>20 charges</b>.</li><li><b>Augmente modérément</b> la vitesse de réparation.</li><li>Débloque l\'action de <b>sabotage</b>.</li><li><b>Augmente légèrement</b> la vitesse de sabotage.</li>","name":"Boîte à outils","flavor":"« On ignore d\'où viennent ces outils. Ont-ils été apportés par l\'un d\'entre nous ou appartenaient-ils à un de ces monstres ? »","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"Boîte en métal contenant des outils spécialisés de mécanicien. Même sans entraînement, elle peut être utilisée pour réparer ou casser de nombreux composants mécaniques.<br><li><b>16 charges</b>.</li><li><b>Augmente considérablement</b> la vitesse de réparation.</li><li>Débloque l\'action de <b>sabotage</b>.</li><li><b>Réduit légèrement</b> la vitesse de sabotage.</li>","name":"Boîte à outils de mécanicien","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"Une grande boîte en métal contenant des outils de base et des pièces mécaniques de rechange. Même sans entraînement, elle peut être utilisée pour réparer ou casser de nombreux composants mécaniques.<br><li><b>32 charges</b>.</li><li><b>Augmente modérément</b> la vitesse de réparation.</li><li>Débloque l\'action de <b>sabotage</b>.</li>","name":"Boîte à outils spacieuse","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"Boîte en métal contenant des outils très spécialisés de technicien. La plupart des outils peuvent toutefois être utilisés par des débutants pour réparer ou casser de nombreux composants mécaniques.<br><li><b>16 charges</b>.</li><li><b>Augmente énormément</b> la vitesse de réparation.</li><li>Débloque l\'action de <b>sabotage</b>.</li><li><b>Réduit modérément</b> la vitesse de sabotage.</li>","name":"Boîte à outils de technicien","flavor":"« J\'ai créé des outils inestimables et je suis resté pétrifié de terreur quand ils me les ont volés. Ceux-ci ne sont que de pâles copies recrachées par la brume. » - Journal de Vigo","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"Une boîte en métal contenant principalement des scies et des étaux de tailles différentes, mais aussi d\'autres outils. Même si le contenu de cette boîte à outils est clairement destiné à des actes de destruction, il peut aussi être utilisé pour réparer de nombreux composants mécaniques.<br><li><b>24 charges</b>.</li><li><b>Augmente légèrement</b> la vitesse de réparation.</li><li>Débloque l\'action de <b>sabotage</b>.</li><li><b>Augmente considérablement</b> la vitesse de sabotage.</li>","name":"Boîte à outils d\'Alex","flavor":"« La plupart des outils portent la mention \\"propriété d\'Alex\\". »","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"Une petite décoration de table fortement explosive. Explose avec un boum retentissant et un éclair de lumière intense. Peut s\'utiliser pour créer une diversion, pour éblouir ou pour faire la fête.<br><li><b>1 charge.</b></li>","name":"Papillote de la fête d\'hiver","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"Une petite décoration de table fortement explosive. Explose avec un boum retentissant, un éclair de lumière intense et un tas de confettis. Peut s’utiliser pour créer une diversion, pour éblouir ou pour fêter nos trois ans ensemble.<br><li><b>1 charge.</b></li>","name":"Cadeau de 3e anniversaire","flavor":"« Joyeux anniversaire ! Pour ces trois années à vos côtés ! »<br>– L’équipe de Dead by Daylight","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"Une trousse de soins festive qui explose en confettis en soignant complètement un survivant. Surprise !<br><li><b>24 charges</b>.</li><li><b>Augmente considérablement</b> la vitesse à laquelle vous soignez les autres.</li><li>Débloque l’action d’<b>auto-soins</b>.</li>","name":"Trousse de soins d\'anniversaire","flavor":"« Joyeux anniversaire ! Pourvu que ça dure ! »<br>- L’équipe de Dead by Daylight","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"Une lampe de poche festive qui explose en confettis en aveuglant un tueur. Surprise !<br><li><b>8 secondes</b> d’utilisation</li>","name":"Lampe de poche d\'anniversaire","flavor":"« Joyeux anniversaire ! Pourvu que ça dure ! »<br>- L’équipe de Dead by Daylight","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/fr/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Paire de gants de protection en cuir rembourré. <br><li><b>Augmente légèrement</b> la vitesse d\'installation de pièges à ours.</li>","name":"Gants du Piégeur","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"Un ressort hélicoïdal grand et lourd, qui ajoute une pression supplémentaire à la prise des pièges à ours.<br><li><b>Augmente légèrement</b> le temps de désamorçage des pièges à ours.</li>","name":"Puissant ressort hélicoïdal","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"Un kit alternatif pour les pièges à ours qui remplace le système habituel à deux ressorts par quatre ressorts hélicoïdaux, ce qui renforce grandement la prise du piège.<br><li><b>Augmente modérément</b> le temps de désamorçage des pièges à ours.</li>","name":"Kit à quatre ressorts","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"Cendres de bois. Une fois bouillies, elles peuvent être utilisées pour teindre les pièges à ours et les rendre moins visibles.<br><li><b>Obscurcit modérément</b> tous les pièges à ours.</li>","name":"Teinture à bois","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"Ces mâchoires de rechange pour piège à ours ont des lames dentelées qui occasionnent d\'horribles blessures quand elles se referment.<br><li>Les survivants saisis par un piège à ours souffrent de l\'effet de statut <b>Hémorragie</b> jusqu\'à utilisation de soins.</li>","name":"Mâchoires dentelées","flavor":"\\"Tel un prédateur, elles peuvent sentir et pister le sang.\\"","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"Un outil simple conçu pour installer rapidement des pièges à ours en toute sécurité.<br><li><b>Augmente modérément</b> la vitesse d\'installation des pièges à ours.</li>","name":"Tendeurs de pièges","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"Une sacoche en cuir traité. Ample et solide, pour transporter du matériel de chasse.<br><li>Vous commencez avec <b>1</b> piège à ours supplémentaire.</li><li>Permet le transport de <b>2</b> pièges à ours supplémentaires.</li>","name":"Sacoche du Piégeur","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"Les mâchoires de ce piège à ours sont couvertes d’éclats de rouille qui rendent les blessures particulièrement difficiles à soigner.<br><li>Les survivants saisis par un piège à ours souffrent de l’effet de statut <b>Estropiement</b>.","name":"Mâchoires rouillées","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"Un deuxième ressort qui préserve l\'efficacité d\'un piège à ours si le premier ressort lâche.<br><li><b>Augmente considérablement</b> le temps de désamorçage des pièges à ours.</li>","name":"Ressort secondaire","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"Une substance noire, mate et collante semblable au goudron. Appliquée sur les pièges à ours, elle les rend beaucoup plus discrets.<br><li><b>Assombrit considérablement</b> tous les pièges à ours.</li>","name":"Bouteille de goudron","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"Un bloc de cire utilisé pour réduire la friction et faciliter le mouvement des pièces mécaniques.<br><li><b>Réduit modérément</b> les chances d\'évasion des pièges à ours.</li>","name":"Brique de cire","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"Une huile claire qui rend la manipulation des ressorts des pièges encore plus dangereuse.<br><li><b>Augmente énormément</b> le temps de désamorçage des pièges à ours.</li>","name":"Ressort huilé","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"Une série d\'outils aidant à l\'assemblage des pièges à ours afin de garantir leur efficacité.<br><li><b>Augmente énormément</b> la vitesse d\'installation des pièges à ours.</li><li><b>Augmente considérablement</b> le temps de sauvetage et d\'évasion des pièges à ours.</li><li><b>Réduit modérément</b> les chances d\'évasion des pièges à ours.</li>","name":"Outils d\'assemblage","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"Un grand sac formé de bouts de peau de toutes sortes grossièrement cousus ensemble.<br><li>Vous commencez avec <b>2</b> pièges à ours supplémentaires.</li><li>Permet le transport de <b>2</b> pièges à ours supplémentaires.</li>","name":"Sac cousu","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"Mi-collant, mi-glissant, ce liquide opaque rend la manipulation des pièges bien plus délicate.<br><li>Lorsqu\'un piège est saboté ou désamorcé par un survivant <b>en bonne santé</b>, les ressorts sanglants lui en font payer le prix, et ce survivant devient <b>blessé</b>.</li><li><b>Augmente légèrement</b> le temps de désamorçage des pièges à ours.</li>","name":"Ressort sanglant","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"Les pièges affûtés par cette pierre à la lueur dérangeante semblent étrangement prendre vie.<br><li>Toutes les <b>30 secondes</b>, un piège à ours fermé devient aléatoirement actif.</li>","name":"Pierre iridescente","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"Le symbole d\'Oas-Nek, qui représente la ruse, est tracé à la suie sur le corps de la cloche.<br><li>Le Spectre <b>se dévoilera complètement</b> en brisant des palettes ou en endommageant des générateurs pendant l\'invisibilité.</li>","name":"« Le Serpent » - Suie","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"Le symbole de Ghud-Boiye, qui représente un traqueur hors pair, est tracé à la suie sur le corps de la cloche.<br><li>Les traces de sang frais sont <b>considérablement</b> plus visibles.</li>","name":"« Le Molosse » - Suie","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"Le symbole Khugwemuu, qui représente le monde des esprits, est tracé à la suie sur le corps de la cloche.<br><li>Après l\'état d\'invisibilité, la trace rouge et le rayon de terreur du Spectre resteront supprimés pendant <b>6</b> secondes.</li>","name":"« Ghost Face » - Suie","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"Le symbole de Kunwulju, qui représente le royaume de terreur, est tracé à la suie sur le corps de la cloche.<br><li>Le rayon de terreur du Spectre <b>n\'est plus supprimé</b> pendant l\'invisibilité.</li><li>Les points de sang accordés pour la traque et les attaques-surprises sont augmentés de 100 %.</li>","name":"« La Bête » - Suie","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"Un battant de cloche en os finement poli. Provoque la résonance et la déformation confuse des sons de la Cloche des Lamentations.<li>Les survivants ne peuvent plus discerner la <b>distance</b> ni la <b>direction</b> de la Cloche des Lamentations.</li>","name":"Battant en os","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"Le symbole de Kratin, qui représente une mort rapide, est tracé sur le corps de la cloche avec de la boue.<br><li><b>Réduit considérablement</b> le délai de disparition du Spectre.</li>","name":"« Évanouissement » - Boue","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"Le symbole d’Ohuwe-Onmnea, qui représente une tempête violente, est tracé sur le corps de la cloche avec de la boue.<li><b>Augmente modérément</b> la vitesse de mouvement du Spectre pendant l’invisibilité.</li>","name":"« Tempête » - Boue","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"Le symbole de Kuntin-Takkho, qui représente l’attaque rapide d’une proie, est tracé sur le corps de la cloche avec de la boue.<br><li><b>Réduit légèrement</b> le délai de réapparition du Spectre.</li>","name":"« Chasse preste » - Boue","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"Le symbole de Baikra-Kaeug, qui représente la férocité, est tracé sur le corps de la cloche avec de la boue.<br><li>Les <b>attaques surprise</b> infligent aux survivants un <b>aveuglement d\'aura</b> pendant <b>60 secondes</b>.</li>","name":"« Guerrier aveugle » - Boue","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"Le symbole d’Ohuwe-Onmnea, qui représente une tempête violente, est dessiné à l’encre blanche sur le corps de la cloche.<li><b>Augmente considérablement</b> la vitesse de mouvement du Spectre pendant l’invisibilité.</li>","name":"« Tempête » - Blanc","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"Le symbole de Kuntin-Takkho, qui représente l’attaque rapide d’une proie, est dessiné à l’encre blanche sur le corps de la cloche.<br><li><b>Réduit modérément</b> le délai de réapparition du Spectre.</li>","name":"« Chasse preste » - Blanc","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"Le symbole de Yiwarick, qui représente la synergie, est dessiné à l’encre blanche sur le corps de la cloche.<br><li><b>Réduit considérablement</b> le temps nécessaire pour passer par une fenêtre, ouvrir les casiers, briser les palettes et les objets qui peuvent l’être, ou pour endommager les générateurs pendant l’invisibilité.</li>","name":"« Danse de l\'Ombre » - Blanc","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"Le symbole de Kratin, qui représente une mort rapide, est dessiné à l’encre blanche sur le corps de la cloche.<br><li><b>Réduit énormément</b> le délai de disparition du Spectre.</li>","name":"« Évanouissement » - Blanc","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"Le symbole de Baikra-Kaeug, qui représente la férocité, est dessiné à l’encre blanche sur la robe de la cloche.<br><li>Les attaques surprise infligent aux survivants les effets de statut <b>Estropiement</b> et <b>Hémorragie</b> jusqu’à ce qu’ils soient complètement guéris.</li>","name":"« Guerrier aveugle » - Blanc","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"Le symbole d’Ohuwe-Onmnea, qui représente une tempête violente, est estampillé avec du sang sur le haut de la cloche.<br><li><b>Augmente énormément</b> la vitesse de mouvement du Spectre pendant l’invisibilité.</li>","name":"« Tempête » - Sang","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"Le symbole de Kuntin-Takkho, qui représente l’attaque rapide d’une proie, est estampillé sur le haut de la cloche avec du sang.<br><li><b>Réduit considérablement</b> le délai de réapparition du Spectre.</li>","name":"« Chasse preste » - Sang","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"Le symbole de Yiwarick, qui représente la synergie, est estampillé sur le haut de la cloche avec du sang.<br><li><b>Réduit énormément</b> le temps nécessaire pour passer par une fenêtre, ouvrir les casiers, briser les palettes et les objets qui peuvent l’être, ou pour endommager les générateurs pendant l’invisibilité.</li>","name":"« Danse de l\'Ombre » - Sang","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"Le symbole Kra-Frabai, qui représente l\'Entité qui nous surveille, est estampillé sur le haut de la cloche avec du sang.<br><li>Débloque la capacité de repérage d\'auras. Les auras des survivants invisibles dans un rayon de <b>12 mètres</b> vous sont révélées.</li>","name":"« Clairvoyant » - Sang","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"Une corde serrée autour du battant de cloche pour en atténuer le son. Une aura maléfique en émane. <br><li>Réduit la Cloche des Lamentations au <b>silence total.</b></li>","name":"Battant encordé","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"Le symbole Kra-Frabai, qui représente l\'Entité qui nous surveille, luit de façon menaçante sur le haut de la cloche.<br><li>Débloque un potentiel insoupçonné dans la capacité de repérage d\'auras de son porteur. Pendant l\'invisibilité, l\'<b>état de réparation d\'un générateur</b> peut être lu par l\'<b>intensité de son aura.</b></li>","name":"« Clairvoyant » - Esprit","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"Un embrayage de bonne facture qui fluidifie le mouvement de la chaîne.<br><br><li><b>Réduit</b> la zone d’impact pendant une Attaque ruée.</li>","name":"Embrayage lourd","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"Un dispositif mécanique qui limite l’arrivée d’essence, permettant un régime sûr et régulier.<br><br><li>Les survivants frappés par la tronçonneuse perdent un seul segment de santé.</li><li>Obtenez <b>100 %</b> de points de sang en plus lors des événements à score Coup de tronçonneuse.</li>","name":"Limiteur de vitesse","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Un filtre fêlé et couvert de poussière, mais qui fonctionne toujours mieux que le modèle d’origine.<br><br><li><b>Augmente légèrement</b> la limite de surchauffe de la tronçonneuse.</li>","name":"Filtre à air de la décharge","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"Bottes renforcées aux orteils pour une meilleure protection contre les impacts.<br><br><li><b>Réduit légèrement</b> le temps de récupération après avoir frappé un objet avec la tronçonneuse.</li>","name":"Bottes à coque en acier","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"Un silencieux grossièrement modifié pour permettre une meilleure circulation de l’air.<br><br><li><b>Augmente légèrement</b> la vitesse de refroidissement de la tronçonneuse.</li>","name":"Silencieux percé","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"Une magnifique ceinture reluisante, comme celle que portent tous les bons petits gars du coin.<br><br><li><b>Réduit</b> le rayon de terreur de 8 mètres quand la tronçonneuse surchauffe.</li>","name":"La boucle","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"Une huile abordable que vous pouvez utiliser pour graisser les chaînes bruyantes.<br><br><li><b>Réduit légèrement</b> le bruit de la tronçonneuse.</li>","name":"Huile moteur bon marché","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"Une paire de bottes de confiance, récupérées sur le cadavre de Max Thompson Sr.<br><br><li><b>Augmente modérément</b> la maniabilité d’Attaque ruée.</li>","name":"Bottes à papa","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"Encoches gravées sur la poignée de la tronçonneuse qui représentent le nombre de vies qu\'elle a enlevées. Renforce la détermination de l\'utilisateur.<br><li><b>Augmente légèrement</b> la vitesse de mouvement de la tronçonneuse.</li><li><b>Augmente légèrement</b> le temps de charge.</li><li>Cumulable.</li>","name":"Tableau de chasse","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"Une petite quantité de pilules de caféine trouvées dans le sac à main d’Evelyn Thompson. Parmi les effets secondaires on trouve la nervosité et l’irritabilité.<br><br><li><b>Réduit légèrement</b> le temps de charge de la tronçonneuse pendant 30 secondes après un étourdissement à l’aide d’une palette.</li><br>","name":"Remède à maman","flavor":"« Docteur, donnez-m’en plus s’il vous plaît. » — Evelyn Thompson","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"Une chaîne spécialisée qui réduit la probabilité de recul.<br><br><li><b>Réduit considérablement</b> le temps de pénalité quand vous heurtez des obstacles pendant une Attaque ruée.</li>","name":"Chaînes à faible recul","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"Un mélange humide de feuilles odorantes qui masque l’odeur d’un chasseur qui traque sa proie.<br><br><li>Gagnez l’effet de statut Indétectable pendant 15 secondes après avoir porté un coup de tronçonneuse.</li>","name":"Mélange de feuilles","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"Encoches gravées sur la poignée de la tronçonneuse qui représentent la bête obscure vivant dans la brume. Renforce la détermination de l’utilisateur.<br><li><b>Augmente modérément</b> la vitesse de mouvement lors d\'une Attaque ruée.</li><li><b>Augmente légèrement</b> le temps de charge d\'Attaque ruée.</li>","name":"Gravures de mort","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"On peut appliquer cette graisse épaisse sous les yeux pour réduire les éblouissements.<br><br><li><b>Augmente modérément</b> la vitesse de refroidissement de la tronçonneuse quand une lampe de poche vous éclaire.</li>","name":"Graisse noire","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"Bien qu’il soit couvert d’huile et de poussière, ce carburateur est parfaitement réglé.<br><br><li><b>Réduit modérément</b> le temps de charge de la tronçonneuse.</li><li><b>Réduit</b> la vitesse de mouvement de base à 4,4 m/s.","name":"Carburateur réglé","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"Bottes munies d’un système de pointes métalliques qui se plantent dans la boue pour plus de stabilité et de contrôle à chaque pas.<br><li><b>Augmente énormément</b> la vitesse de rotation en utilisant la tronçonneuse.</li><li><b>Augmente considérablement</b> le temps de pénalité quand vous heurtez des objets.</li>","name":"Bottes à pointes","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"Des gants à l’odeur rance, salis de substances inconnues. Malgré tous leurs défauts, leur tissu est vraiment épais.<br><br><li><b>Réduit modérément</b> la chaleur subie lorsque la tronçonneuse fonctionne.</li><br>","name":"Gants de porcherie","flavor":"« Rien ne peut souiller l’âme d’un brave travailleur. » — Max Thompson Sr.","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"Des chaînes légères qui réduisent le poids de la tronçonneuse, permettant une meilleure maniabilité.<br><br><li>Poursuivez votre Attaque ruée après avoir brisé une palette ou un mur.</li><li>Les survivants frappés par la tronçonneuse moins de 5 secondes après avoir brisé une palette ou un mur perdent un seul segment de santé.</li>","name":"Chaînes profil bas","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"Représentant autrefois le confinement de Max Jr, c’est la première brique qui est tombée quand la barricade de sa chambre s’est effondrée.<br><br><li>Après avoir maintenu une Attaque ruée pendant 2 secondes, vous gagnez l’effet de statut Indétectable jusqu’à ce que vous arrêtiez de sprinter.</li><br>","name":"Brique irisée","flavor":"« C’est quoi ce bordel que t’es en train de me monter, merdeux ? » — Max Thompson Sr.","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"Un silencieux pour tronçonneuse conçu de main de maître, supérieur à tous les autres.<br><br><li>La tronçonneuse est silencieuse pour les survivants en dehors du rayon de terreur.</li>","name":"Silencieux de pointe","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"Un jouet sculpté dans du bois brut bon marché et supposé ressembler à un cheval. Autrefois le symbole du lien étroit entre un patient catatonique et son infirmière.<br><li><b>Réduit modérément</b> la fatigue supplémentaire des attaques téléportées ratées.</li>","name":"Cheval de bois","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"Un peigne à lentes de la clinique, autrefois le symbole du lien étroit entre une patiente anxieuse et son infirmière.<br><li><b>Réduit modérément</b> la distance des attaques chargées téléportées.</li><li>Augmente de <b>100%</b> les points de sang des événements à score <i>Attaque téléportée</i>.</li>","name":"Peigne à lentes blanc","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"Une simple cuillère en métal, en partie rouillée et tachée. Confisquée au patient de la chambre 202, le « méchant ».<br><li>Frapper un survivant avec une attaque téléportée réussie <b>augmente modérément</b> les bruits dus à la douleur pendant <b>60 secondes</b>.</li>","name":"Cuillère en métal","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"Une molaire pourrie extirpée de la main du cadavre du « méchant ».<br><li>Frapper un survivant avec une attaque téléportée réussie dévoile son aura quand il se soigne ou est soigné jusqu’à <b>28 mètres</b> pendant <b>60 secondes</b>.</li>","name":"Souvenir du méchant","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"Une montre à gousset cassée et carbonisée, prise sur le corps de l’infirmière Moris.<br><li><b>Augmente modérément</b> la durée de la fenêtre de téléportations en chaîne.</li>","name":"Montre à gousset","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"Une babiole qui avait peut-être une valeur sentimentale pour quelqu’un. Prise sur le corps de la jeune fille anxieuse.<br><li><b>Réduit modérément</b> la distance maximale de téléportation.</li><li>Augmente de <b>100 %</b> les points de sang des événements à score <i>Téléportation précise</i></li>.","name":"Bracelet terne","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"Une corde noire, utilisée comme ceinture en temps de deuil, prise sur le corps du père Campbell.<br><li><b>Augmente modérément</b> la vitesse de recharge de téléportation.</li>","name":"Ceinture obscure","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"Une pomme de pin qui avait un effet incroyablement apaisant sur les mouvements répétitifs d’un patient. Prise sur le corps du garçon catatonique.<br><li><b>Réduit considérablement</b> la fatigue supplémentaire causée par les téléportations en chaîne.</li>","name":"Trésor d\'un garçon catatonique","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"La respiration nerveuse et tremblante volée au « méchant ». Vibre et saute agressivement au contact de l’Infirmière.<br><li>Frapper un survivant avec une attaque téléportée réussie <b>désactive la capacité de téléportation de l’Infirmière</b> et augmente sa vitesse de mouvement de base à <b>4,6 m/s</b> pendant <b>60 secondes</b>.</li>","name":"Respiration spasmodique","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"La respiration lente et chargée volée au gros agent hospitalier. Oscille faiblement au contact de l’Infirmière.<br><li><b>Augmente considérablement</b> la portée maximale de téléportation.</li><li><b>Augmente considérablement</b> le temps de charge maximale de téléportation.</li>","name":"Halètement intense","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"La respiration sifflante et les râles volés au père Campbell. Se courbe et se plie sans bruit au toucher de l’Infirmière.<br><li><b>Augmente considérablement</b> la vitesse de recharge de téléportation.</li>","name":"Respiration difficile","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"La respiration irrégulière et faiblissante collectée sur le garçon catatonique. Normalement stable et calme, elle devient incroyablement agitée au contact de l’Infirmière.<br><li><b>Réduit modérément</b> la durée de l’état de fatigue consécutif à la téléportation.</li>","name":"Respiration ataxique","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"Le cri de surprise d’une fille anxieuse que l’Infirmière adorait. Vibre vivement au contact de l’Infirmière.<br><li>Se téléporter à proximité d’un survivant le fait crier et rapporte <b>200 points de sang</b> dans la catégorie <i>Sournois</i>.</li>","name":"Cri d\'anxiété","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"Un morceau de plaid rouge et noir déchiré qui confère à l’Infirmière une concentration dévastatrice.<br><li>Permet à l’Infirmière de voir les destinations cibles de téléportation.</li>","name":"Morceau de plaid","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"Un dernier souffle puissant arraché à l’agent hospitalier Harvey Kavanagh. Dans les mains de l’Infirmière, il remue vigoureusement.<br><li><b>Augmente énormément</b> la portée maximale de téléportation.</li><li><b>Augmente énormément</b> le temps de charge maximale de téléportation.</li>","name":"Dernier souffle de Kavanagh","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"Le dernier souffle puissant volé à la patiente Mary Jenner de l’asile Crotus Prenn. Dans les mains de l’Infirmière, il tremble avec intensité.<br><li>Après une téléportation, permet à l’Infirmière de se retéléporter immédiatement à son emplacement d\'origine en appuyant sur le <i>bouton de capacité active</i>. Vous devez l’activer avant que l’Infirmière ne succombe à la fatigue.</li>","name":"Dernier souffle de Jenner","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"Un dernier souffle déchirant arraché au père Campbell de l’asile de Crotus Prenn. Dans les mains de l’Infirmière, il grésille vivement.<br><li>Quand elle réapparaît après une téléportation complètement chargée, l’Infirmière se téléporte immédiatement avec une demi charge dans la direction face à elle.</li>","name":"Dernier souffle de Campbell","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"Un dernier souffle puissant arraché au « méchant », patient de l’asile de Crotus Prenn. Dans les mains de l’Infirmière, il tressaute intensément.<br><li>Frapper un survivant avec une attaque téléportée réussie octroie le statut <b>Indétectable</b> à l’Infirmière pendant <b>16 secondes</b>.</li><li>Cet effet ne peut être activé que toutes les <b>60 secondes</b>.</li>","name":"Dernier souffle du « méchant »","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"Un morceau de ruban blanc immaculé autrefois attaché à un livre sacré. Jadis symbole d’une dispute.<br><li>Ajoute <b>1</b> charge de téléportation.</li><li>Les téléportations sont limitées à la ligne de mire de l’Infirmière.</li>","name":"Signet déchiré","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"Une boîte d’allumettes contenant une étrange collection de boutons dépareillés, triste souvenir d’un lieu horrible.<br><li>Supprime <b>1</b> charge de téléportation.</li><li>Augmente la vitesse de mouvement de base de l’Infirmière à <b>4,2 m/s</b>.</li>","name":"Boîte d\'allumettes","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"Un bijou vraiment bas de gamme en plastique. Peint pour tenter de ressembler à du métal précieux.<br><li><b>Augmente légèrement</b> la vitesse de mouvement lorsque vous traquez une cible.</li>","name":"Boucles d\'oreilles kitsch","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"Une note supposée être « romantique », plutôt glauque, écrite pour attirer l\'attention d\'une petite amie.<br><li><b>Augmente légèrement</b> l\'attaque chargée de <b>Mal intérieur I</b>.</li>","name":"Note du petit ami","flavor":"« La note est signée : D. »","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"Un seul brin de cheveux blonds.<br><li><b>Augmente légèrement</b> la durée de <b>Mal intérieur III</b>.</li><li><b>Augmente légèrement</b> la quantité de mal requise pour atteindre <b>Mal intérieur III</b> la première fois.</li>","name":"Cheveux blonds","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"Un morceau hautement réfléchissant provenant probablement d’un miroir brisé.<br><li><b>Mal intérieur II révèle l’aura des survivants</b> qui ont été traqués pendant au moins <b>1 seconde</b>.</li><li>L’aura reste visible pendant <b>2 secondes</b>.</li>","name":"Fragment réfléchissant","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"Un pied d’alouette rose à moitié fané trouvé sur une tombe.<br><li><b>Augmente légèrement</b> la vitesse à laquelle le mal vous envahit quand vous traquez un survivant.</li>","name":"Fleur commémorative","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"Un grand collier constitué de perles et de matériaux pas chers. Un des favoris de Judith.<br><li><b>Augmente modérément</b> la vitesse de mouvement lorsque vous traquez une cible.</li>","name":"Bijoux","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"Une brosse à cheveux en nylon utilisée pour ajouter du volume et de la douceur aux cheveux.<br><li><b>Augmente modérément</b> la durée de <b>Mal intérieur III</b>.</li><li><b>Augmente légèrement</b> la quantité de mal requise pour atteindre <b>Mal intérieur III</b> la première fois.</li>","name":"Brosse à cheveux","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"Un bout de verre teinté provenant probablement d\'un objet brisé. Il est impossible de déterminer son origine.<br><li><b>Mal intérieur I révèle l\'aura des survivants</b> qui ont été traqués pendant au moins <b>1 seconde</b>.</li><li>L\'aura reste visible pendant <b>3 secondes</b>.</li>","name":"Fragment de verre","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"Un lapin gris ouvert de la tête aux pieds.<br><li><b>Réduit modérément</b> le rayon de terreur de <b>Mal intérieur II</b>.</li><li><b>Augmente modérément</b> le rayon de terreur de <b>Mal intérieur III</b>.</li>","name":"Lapin mort","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"Un gros éclat de verre coupant provenant d’un miroir.<br><li><b>Mal intérieur II révèle l’aura des survivants</b> qui ont été traqués pendant au moins <b>1 seconde</b>.</li><li>L’aura reste visible pendant <b>5 secondes</b>.</li>","name":"Morceau de miroir","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"Un journal appartenant à Judith M. Myers. La plupart des pages sont recouvertes de gribouillis perturbants, voire inquiétants.<br><li>Vous êtes <b>obsédé</b> par un survivant.</li><li><b>Augmente considérablement</b> la vitesse à laquelle le mal vous envahit quand vous traquez la personne qui vous obsède.</li><li><i>Une seule obsession par partie.</i></li>","name":"Journal de Judith","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"Une boîte quelconque dans laquelle des objets d’apparat étaient autrefois conservés.<br><li><b>Augmente considérablement</b> la vitesse de mouvement lorsque vous traquez une cible.</li>","name":"Boite à bijoux","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"Une page glacée déchirée de l’album de la promotion 1965 du lycée d’Haddonfield, dédiée à la mémoire de Judith Myers.<br><li><b>Augmente modérément</b> la vitesse à laquelle le mal vous envahit quand vous traquez un survivant.</li>","name":"Mémorial de J.Myers","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"Un ruban à motif écossais parfait pour les cheveux.<br><li><b>Augmente considérablement</b> la durée de <b>Mal intérieur III</b>.</li><li><b>Augmente légèrement</b> la quantité de mal requise pour atteindre <b>Mal intérieur III</b> la première fois.</li>","name":"Ruban","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"Un miroir sur pied portable en parfait état, si ce n\'est la fine couche de poussière et de poudre qui le recouvre. <br><li><b>Mal intérieur II révèle l\'aura des survivants</b> quand vous les traquez dans un rayon de <b>16 mètres</b>.</li><li>Mal intérieur ne peut progresser au-delà du <b>PALIER II</b>.</li><li><b>Réduit légèrement</b> la vitesse de mouvement.</li><li>Chaque fois que vous <b>frappez</b> un survivant, confère <b>100 %</b> de points de sang pour l\'avoir l\'avoir <b>frappé</b> dans la catégorie <b>Brutalité</b> et <b>150 %</b> de points de sang supplémentaires dans la catégorie <b>Sournoiserie</b>.</li>","name":"Miroir","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"Un bout de granite de la taille d’un poing provenant d’une pierre tombale brisée.<br><li>Débloque la capacité de <b>tuer des survivants en bonne santé ou blessés</b> avec <b>Mal intérieur III</b>.</li><li><b>Désactive</b> la capacité de traquer avec <b>Mal intérieur III</b>.</li><li>Tuer un survivant <b>draine considérablement</b> la puissance de Mal intérieur.</li><li><b>Augmente considérablement</b> la quantité de mal requise pour atteindre <b>Mal intérieur III</b> la première fois.</li>","name":"Morceau de pierre tombale","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"Un miroir sur pied portable qui a été violemment rayé avec un objet métallique pointu. <br><li><b>Mal intérieur I révèle l\'aura des survivants</b> quand vous les traquez dans un rayon de <b>32 mètres</b>.</li><li>Mal intérieur ne peut progresser au-delà du <b>PALIER I</b>.</li><li>Chaque fois que vous <b>frappez</b> un survivant, confère <b>100 %</b> de points de sang pour l\'avoir l\'avoir <b>frappé</b> dans la catégorie <b>Brutalité</b> et <b>200 %</b> de points de sang supplémentaires dans la catégorie <b>Sournoiserie</b>.</li>","name":"Miroir rayé","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"Une seule mèche de cheveux blonds, attachés avec un élastique noir.<br><li><b>Augmente énormément</b> la durée de <b>Mal intérieur III</b>.</li><li><b>Augmente modérément</b> la quantité de mal requise pour atteindre <b>Mal intérieur III</b> la première fois.</li>","name":"Mèche de cheveux","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"Une grande pierre tombale en granite volée dans le cimetière du Mont Sinclair, appartenant à Judith Myers.<br><li>Débloque la capacité de <b>tuer des survivants en bonne santé ou blessés</b> avec <b>Mal intérieur III</b>.</li><li><b>Désactive</b> la capacité de traquer avec <b>Mal intérieur III</b>.</li><li><b>Augmente énormément</b> la quantité de mal requise pour atteindre <b>Mal intérieur III</b> la première fois.</li><li><b>Réduit modérément</b> la vitesse de mouvement.</li>","name":"Pierre tombale de Judith","flavor":"« Ici repose notre fille bien-aimée. »","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"Une touffe de cheveux blonds qui a été violemment arrachée du cuir chevelu de quelqu’un. Libère des effluves de parfum pour femme.<br><li>Durée d’utilisation de <b>Mal intérieur III</b> <b>illimitée</b>.</li><li><b>Augmente énormément</b> la quantité de mal requise pour atteindre <b>Mal intérieur III</b> la première fois.</li>","name":"Touffe de cheveux parfumée","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"Un bibelot rigide porté autour du cou, conçu à partir de débris végétaux.<br><li><b>Réduit légèrement</b> le temps d\'installation des pièges fantômes.</li>","name":"Pendentif en corde","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"De minuscules fragments de coquille d’œuf qui dégagent un halo doré pâle.<br><li><b>Augmente légèrement</b> la durée du piège fantôme.</li>","name":"Coquille d\'œuf broyée","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"Un petit tas de boue, noir à cause des restes de mouches. À dévorer pour gagner de l’énergie.<br><li><b>Augmente légèrement</b> la distance à partir de laquelle la Harpie peut se téléporter vers ses pièges.</li>","name":"Boue et mouches mortes","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"Eau trouble contenue dans un flacon d\'un autre temps.<br><li><b>Augmente légèrement</b> la portée efficace du piège fantôme.</li>","name":"Eau croupie","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"Une poignée de petites fleurs immaculées couvertes de poils gris.<br><li>Révèle l\'aura des survivants pendant <b>3 secondes</b> quand ils déclenchent un piège fantôme.</li>","name":"Chatons de Saule","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"La moitié d\'une coquille d\'œuf parfaitement ronde.<br><li><b>Augmente modérément</b> la durée des pièges fantômes.</li>","name":"Demi-coquille d\'œuf","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"Une poignée d\'ailes jaunâtres, sèches et croustillantes. À dévorer pour gagner de l\'énergie.<br><li><b>Augmente modérément</b> la distance à partir de laquelle la Harpie peut se téléporter vers ses pièges.</li>","name":"Ailes de libellule","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"Un bibelot rigide porté autour du cou, conçu à partir de débris végétaux et décoré grossièrement avec de l\'écorce de cyprès et de la mousse des marais.<br><li><b>Réduit modérément</b> le temps d\'installation des pièges fantômes.</li>","name":"Pendentif en Cyprès","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"Eau polluée contenue dans une feuille de nénuphar pliée.<br><li><b>Augmente modérément</b> la portée à laquelle le piège fantôme est efficace.</li>","name":"Eau sanglante","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"Trois branches de saule fragiles attachées pour former une couronne triangulaire.<br><li>Révèle l\'aura des survivants pendant <b>5 secondes</b> quand ils déclenchent un piège fantôme.</li>","name":"Couronne en saule","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"Un bibelot rigide porté autour du cou, conçu à partir de débris végétaux et décoré de pétales et de feuilles d\'orchidée fanées.<br><li><b>Réduit considérablement</b> le temps d\'installation des pièges fantômes.</li>","name":"Pendentif en Orchidée des Marais","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"Une grande cigale des marais couverte d\'une fine couche de cendres. Croquante. À dévorer pour gagner de l\'énergie.<br><li><b>Augmente considérablement</b> la distance à partir de laquelle la Harpie peut se téléporter vers ses pièges.</li>","name":"Cigale séchée","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"Un œuf de tortue orange pâle, fendu et vidé de son contenu.<br><li><b>Augmente considérablement</b> la durée des pièges fantômes déclenchés.</li>","name":"Œuf de tortue fendu","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"Une poignée de boue veinée de stries rouges. Les couches de sang fortifient la boue.<br><li><b>Augmente considérablement</b> la portée efficace des pièges fantômes.</li>","name":"Boue sanglante","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"La main tranchée du boucher du village de cannibales. L\'essence de vie qui y est enfermée libère tout le potentiel du pouvoir de la Harpie.<br><li>Une collision est ajoutée au fantôme de boue.</li><li>Retire la capacité de la Harpie à se téléporter jusqu\'aux pièges.</li><li>Confère <b>300 %</b> de points de sang dans la catégorie Sournoiserie.</li><li>Prime sur tous les autres accessoires.</li>","name":"Main balafrée","flavor":"« … » - Le Boucher","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"Des chaînes qui étaient autrefois utilisées pour retenir les prisonniers et les carcasses dans le garde-manger du village cannibale. L’essence de vie qui y est enfermée libère tout le potentiel du pouvoir de la Harpie.<br><li>Les pièges fantômes déclenchés ne donnent aux survivants aucune indication relative à leur déclenchement.</li><li>Le piège ne fait pas apparaître un fantôme de la Harpie.</li>","name":"Chaînes rouillées","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"Le cœur froid de la matriarche du village de cannibales. L’essence de vie qui y est enfermée libère tout le potentiel du pouvoir de la Harpie.<br><li>Le rythme cardiaque de la Harpie descend à <b>0</b> quand un survivant déclenche un piège fantôme.</li><li>Augmente le rayon du rythme cardiaque des fantômes de boue de <b>16 mètres</b>.</li>","name":"Cœur de Grand-mère","flavor":"« Apportez-moi une autre tranche de la fille. » - Grand-mère","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"L’oreille du garçon sourd du village de cannibales. Déformée par de nombreux coups portés à la tête. L’essence de vie qui y est enfermée libère tout le potentiel du pouvoir de la Harpie.<br><li>Les survivants qui déclenchent un piège fantôme sont rendus sourds pendant <b>6 secondes</b>.</li>","name":"Oreille déformée","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"Une chaussure d’enfant, depuis longtemps perdue dans l’eau croupie. L’essence de vie qui y est enfermée libère tout le potentiel du pouvoir de la Harpie.<br><li>Le piège déclenché inflige l’effet de statut <b><i>Entrave</i></b> à tout survivant se trouvant dans son rayon d’action.</li><li>Augmente <b>légèrement</b> la vitesse de mouvement de la Harpie.</li><li>Retire la capacité de la Harpie à se téléporter jusqu’aux pièges.</li>","name":"Chaussure détrempée","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"Un petit morceau de coton arraché à la robe que portait Lisa Sherwood le jour de sa disparition. L\'essence de vie qui y est enfermée libère tout le potentiel du pouvoir de la Harpie.<br><li>La Harpie peut se téléporter jusqu\'à n\'importe quel piège fantôme du niveau.</li><li>La téléportation vers un piège fantôme a un temps de rechargement de <b>15 secondes</b>.</li>","name":"Chiffon impeccable","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"Une vieille électrode qui peut faire transiter un faible courant électrique.<br><li><b>Augmente légèrement</b> la portée d’<b>Électrochocs</b>.</li>","name":"Vieille électrode","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"Le cavalier d’un jeu d’échecs en érable. Ce cadeau d’un ancien fait resurgir de vieux souvenirs et octroie une concentration dévastatrice au Docteur.<br><li>Révèle la zone d’effet de votre <i>attaque spéciale</i> <b>Électrochocs</b>.</li>","name":"Cavalier érable","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"Procédure d’électrochocs conventionnelle qui fait partie du traitement quotidien des patients à l’Institut de la mémoire de Léry. Peut créer un état de confusion léger chez le patient.<br><li><b>Réduit légèrement</b> le temps de recharge d’<b>Explosion électrique</b>.</li><br>Les survivants avec l’effet de statut <b>Folie</b> souffrent de l’<i>affliction Ordre</i> :<li>les palettes brisées peuvent être remplacées par des <i>palettes chimériques</i> qui persistent jusqu’à ce qu’on s’en approche.</li><li><i>Les palettes chimériques</i> sont générées aléatoirement toutes les <b>20 secondes</b> à l’emplacement d’une palette brisée.</li><li><b>Le Docteur</b> peut voir l’aura des <i>palettes chimériques</i>.</li>","name":"« Ordre » - Cours I","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"Une procédure d’électrochocs qui envoie une puissante longueur d’onde pour apaiser certaines maladies mentales. Avec l’Étincelle de Carter comme source, cette procédure peut créer une légère anxiété chez le patient.<br><li><b>Augmente légèrement</b> votre rayon de terreur quand <b>Explosion électrique</b> est prête.</li><li><b>Réduit légèrement</b> votre rayon de terreur pendant la récupération d’<b>Explosion électrique</b>.</li><br>Les survivants avec l’effet de statut <b>Folie</b> sont victimes de l’<i>affliction Calme</i>.<li><b>Folie II</b> : les survivants entendent <b>par intermittence</b> un <i>rayon de terreur fictif</i> au loin.</li><li><b>Folie III</b> : les survivants entendent <b>en permanence</b> un <i>rayon de terreur fictif</i> au loin.</li>","name":"« Calme » - Cours I","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"Une cassette vidéo du Projet Réveil qui contient surtout du bruit blanc. Elle ouvre l\'esprit du Docteur pour trouver de nouveaux traitements.<br><br><li> La <i>capacité spéciale</i> <b>Électrochocs</b> prend la forme d\'un anneau, apparaît à <b>8 mètres</b> devant <b>le Docteur</b>, possède un rayon de <b>4,2 mètres</b> et un rayon intérieur de <b>3 mètres</b>.</li>","name":"Cassette abimée","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"Une électrode classique presque neuve, utilisée pour l’électroconvulsivothérapie.<br><li><b>Augmente modérément</b> la portée d’<b>Électrochocs</b>.</li>","name":"Électrode brillante","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"Une cassette vidéo du Projet Réveil qui contient un entretien avec l\'une des victimes. Elle ouvre l\'esprit du Docteur pour trouver de nouveaux traitements.<br><li>La <i>capacité spéciale</i> <b>Électrochocs</b> cesse d\'être un cône et se transforme en un rayon d\'une portée de <b>24 mètres</b> et d\'une largeur de <b>2 mètres</b>.</li>","name":"Cassette d\'entretien","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"Une procédure d\'électrochocs expérimentale développée dans la brume. Ce traitement envoie une longueur d\'onde qui lie les esprits du patient et du Docteur. Ce procédé est connu pour générer des cas d\'hallucinations légères chez le patient.<br><li>Les auras des survivants sont affichées pendant <b>1 seconde</b> lorsque leur niveau de <b>folie</b> augmente.</li><br>Les survivants avec l\'effet de statut <b>Folie</b> sont victimes de l\'<i>affliction Contrainte</i> :</li><li><b>augmente modérément</b> la durée des <i>docteurs fictifs</i>.</li><li><b>Le Docteur</b> peut voir les auras des <i>docteurs fictifs</i>.</li>","name":"« Contrainte » - Cours II","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"Procédure d’électrochocs intense qui fait partie du traitement quotidien des patients à l’Institut de la mémoire de Léry. Peut créer un état de confusion modéré chez le patient.<br><li><b>Réduit modérément</b> le temps de recharge d’<b>Explosion électrique</b>.</li><br>Les survivants avec l’effet de statut <b>Folie</b> souffrent de l’<i>affliction Ordre</i> :<li>les palettes brisées peuvent être remplacées par des <i>palettes chimériques</i> qui persistent jusqu’à ce qu’on s’en approche.</li><li><i>Les palettes chimériques</i> sont générées aléatoirement toutes les <b>20 secondes</b> à l’emplacement d’une palette brisée.</li><li><b>Le Docteur</b> peut voir l’aura des <i>palettes chimériques</i>.</li><span class=\\"FlavorText\\">« Les effets secondaires sont très rares. » - Institut de la mémoire de Léry</span>","name":"« Ordre » - Cours II","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"Procédure d’électrochocs du Projet Réveil utilisée comme mesure disciplinaire qui administre une dose fixe et un voltage très élevé. Peut créer une état de paranoïa modéré chez le patient.<br><li><b>Réduit légèrement</b> le délai de déflagration d’<b>Électrochocs</b>.</li><br>Les survivants avec l’effet de statut <b>Folie</b> sont victimes de l’<i>affliction Discipline</i>.<li><b>Folie II</b> : durant une poursuite, ils perçoivent la <i>tache rouge fictive</i> et le <i>rayon de terreur</i>, comme si <b>le Docteur</b> était juste derrière eux. Cet effet persiste <b>6 secondes</b> après la fin de la poursuite.</li><li><b>Folie III</b> : la <i>tache rouge fictive</i> et le <i>rayon de terreur</i> sont tout le temps actifs.</li><li><b>Le Docteur</b> voit aussi la <i>tache rouge fictive</i>.</li><span class=\\"FlavorText\\">« Nous rééduquons nos patients avec le plus grand soin. » - Institut de la mémoire de Léry</span>","name":"« Discipline » - Cours II","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"Une procédure d’électrochocs risquée qui envoie une puissante longueur d’onde pour apaiser certains problèmes mentaux. Avec l’Étincelle de Carter comme source, cette procédure peut créer une certaine anxiété chez le patient.<br><li><b>Augmente modérément</b> votre rayon de terreur quand <b>Explosion électrique</b> est prête.</li><li><b>Réduit modérément</b> votre rayon de terreur pendant la récupération d’<b>Explosion électrique</b>.</li><br>Les survivants avec l’effet de statut <b>Folie</b> sont victimes de l’<i>affliction Calme</i>.<li><b>Folie II</b> : les survivants entendent <b>par intermittence</b> un <i>rayon de terreur fictif</i> au loin.</li><li><b>Folie III</b> : les survivants entendent <b>en permanence</b> un <i>rayon de terreur fictif</i> au loin.</li><span class=\\"FlavorText\\">« La thérapie par électrochocs est l’une des procédures médicales les plus sûres. » - Institut de la mémoire de Léry.</span>","name":"« Calme » - Cours II","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"Une électrode expérimentale capable de résister à de très puissantes charges pendant une longue période.<br><li><b>Augmente considérablement</b> la portée d’<b>Électrochocs</b>.</li>","name":"Électrode à stimulation élevée","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"Une procédure d’électrochocs expérimentale développée dans la brume. Ce traitement envoie une longueur d’onde hautement stimulante qui lie les esprits du patient et du Docteur. Ce procédé est connu pour créer des hallucinations sévères chez le patient.<br><li>Les auras des survivants sont affichées pendant <b>2 secondes</b> lorsque leur niveau de <b>folie</b> augmente.</li><br>Les survivants avec l’effet de statut <b>Folie</b> sont victimes de l’<i>affliction Contrainte</i> :<li><b>Augmente modérément</b> la durée des <i>docteurs fictifs</i>.</li><li><b>Le Docteur</b> peut voir les auras des <i>docteurs fictifs</i>.</li>","name":"« Contrainte » - Cours III","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"Procédure d’électrochocs du Projet Réveil utilisée comme mesure disciplinaire qui administre une dose fixe et un voltage très élevé. Peut créer un état de paranoïa profond chez le patient.<br><li><b>Réduit modérément</b> le délai de déflagration d’<b>Électrochocs</b>.</li><br>Les survivants avec l’effet de statut <b>Folie</b> sont victimes de l’<i>affliction Discipline</i>.<li><b>Folie II</b> : durant une poursuite, ils perçoivent la <i>tache rouge fictive</i> et le <i>rayon de terreur</i>, comme si <b>le Docteur</b> était juste derrière eux. Cet effet persiste <b>6 secondes</b> après la fin de la poursuite.</li><li><b>Folie III</b> : la <i>tache rouge fictive</i> et le <i>rayon de terreur</i> sont tout le temps actifs.</li><li><b>Le Docteur</b> voit aussi la <i>tache rouge fictive</i>.</li><span class=\\"FlavorText\\">« Le respect de nos patients est à la base même de nos principes. » - Institut de la mémoire de Léry</span>","name":"« Discipline » - Cours III","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"Une procédure d’électrochocs expérimentale développée dans la brume et raturée de nombreuses annotations. Ce traitement envoie un stimulus insupportable qui lie les esprits du patient et du Docteur. Ce procédé est connu pour créer des hallucinations sévères chez le patient.<br><li>Les auras des survivants sont affichées pendant <b>3 secondes</b> lorsque leur niveau de <b>folie</b> augmente.</li><br>Les survivants avec l’effet de statut <b>Folie</b> sont victimes de l’<i>affliction Contrainte</i> :<br><li><b>Augmente modérément</b> la <i>durée des docteurs fictifs</i>.</li><li><b>Le Docteur</b> peut voir les auras des <i>docteurs fictifs</i>.</li><span class=\\"FlavorText\\">« JE VOIS TOUTES LEURS <u>RÉPUGNANTES</u> MALADIES. » - Notes non signées</span>","name":"« Contrainte » - Notes de Carter","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"Version expérimentale de la procédure d’électrochocs, annotée de la main même du Docteur Herman Carter. La longue durée de la stimulation peut laisser le patient dans un état de confusion sévère.<br><li><b>Réduit considérablement</b> le temps de recharge d’<b>Explosion électrique</b>.</li><br>Les survivants avec l’effet de statut <b>Folie</b> souffrent de l’<i>affliction Ordre</i> :<li>les palettes brisées peuvent être remplacées par des <i>palettes chimériques</i> qui persistent jusqu’à ce qu’on s’en approche.</li><li><i>Les palettes chimériques</i> sont générées aléatoirement toutes les <b>20 secondes</b> à l’emplacement d’une palette brisée.</li><li><b>Le Docteur</b> peut voir l’aura des <i>palettes chimériques</i>.</li><span class=\\"FlavorText\\">« La stimulation doit être ininterrompue de sorte à maintenir les <u>convulsions</u>. » - H. Carter</span>","name":"« Ordre » - Notes de Carter","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"Procédure d’électrochocs du Projet Réveil utilisée comme mesure disciplinaire, annotée par le docteur Herman Carter lui-même. Le voltage très élevé laisse le patient dans un état de paranoïa sévère.<br><li><b>Réduit considérablement</b> le délai de déflagration d’<b>Électrochocs</b>.</li><br>Les survivants avec l’effet de statut <b>Folie</b> sont victimes de l’<i>affliction Discipline</i>.<li><b>Folie II</b> : durant une poursuite, ils perçoivent la <i>tache rouge fictive</i> et le <i>rayon de terreur</i>, comme si <b>le Docteur</b> était juste derrière eux. Cet effet persiste <b>6 secondes</b> après la fin de la poursuite.</li><li><b>Folie III</b> : la <i>tache rouge fictive</i> et le <i>rayon de terreur</i> sont tout le temps actifs.</li><li><b>Le Docteur</b> voit aussi la <i>tache rouge fictive</i>.</li><span class=\\"FlavorText\\">« Pour éviter les rechutes de nos cas les plus complexes, utilisez le niveau maximum lors des mesures disciplinaires. » - H. Carter</span>","name":"« Discipline » - Notes de Carter","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"Une procédure d’électrochocs expérimentale annotée par le docteur Herman Carter lui-même. Ce traitement envoie une puissante longueur d’onde qui apaise certaines maladies mentales. Avec l’Étincelle de Carter comme source, cette procédure crée une peur et une anxiété incontrôlables chez le patient.<br><li><b>Augmente considérablement</b> votre rayon de terreur quand <b>Explosion électrique</b> est prête.</li><li><b>Réduit considérablement</b> votre rayon de terreur pendant la récupération d’<b>Explosion électrique</b>.</li><br>Les survivants avec l’effet de statut <b>Folie</b> sont victimes de l’<i>affliction Calme</i>.<li><b>Folie II</b> : les survivants entendent <b>par intermittence</b> un <i>rayon de terreur fictif</i> au loin.</li><li><b>Folie III</b> : les survivants entendent <b>en permanence</b> un <i>rayon de terreur fictif</i> au loin.</li><span class=\\"FlavorText\\">« Des crises de haute qualité déclenchent une catatonie. Au moins, j’ai la <u>paix</u> tant que ça dure. » - H. Carter</span>","name":"« Calme » - Notes de Carter","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"Une pièce d’échecs à l’effigie du roi, ressemblant à du verre et moulée à partir de la Brume elle-même. La trace de l’Entité qui résonne en elle peut briser les esprits les plus puissants.<br><br>Les survivants avec l’effet de statut <b>Folie</b> souffrent des <i>afflictions suivantes : Calme, Discipline, Ordre,</i> et <i>Contrainte</i>.<li>Ils entendent <b>par intermittence</b> un <i>rayon de terreur fictif</i> au loin.</li><li>Durant une poursuite, ils perçoivent la <i>tache rouge fictive</i> et le <i>rayon de terreur</i>, comme si <b>le Docteur</b> était juste derrière eux. Cet effet persiste <b>6 secondes</b> après la fin de la poursuite en cas de <b>Folie II</b> et est actif tout le temps en cas de <b>Folie III</b>.</li><li>Les palettes brisées peuvent être remplacées par des <i>palettes chimériques</i> qui persistent jusqu’à ce qu’on s’en approche. Les <i>palettes chimériques</i> sont générées toutes les <b>20 secondes</b> à l’emplacement d’une palette brisée.</li><li><b>Augmente modérément</b> la durée des <i>docteurs fictifs</i>.</li><li><b>Le Docteur</b> voit aussi les <i>taches rouges fictives</i> ainsi que les auras des <i>docteurs fictifs et des palettes chimériques</i>.</li>","name":"Roi iridescent","flavor":"« Plonger son regard dans le verre iridescent revient à sombrer dans la folie. »","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"Une pièce d’échec à l’effigie de la reine, ressemblant à du verre et moulée à partir de la Brume elle-même. Le moindre contact inflige une décharge électrique considérable.<br><li>Tous les survivants frappés par les <i>capacités spéciales</i> <b>Électrochocs</b> ou <b>Explosion électrique</b> reçoivent une <b>Charge électrique</b> durable. Les survivants conservent la <b>Charge électrique</b> jusqu’à ce qu’elle soit <i>évacuée</i>.</li><li>Plusieurs survivants frappés par la même <i>capacité spéciale</i> <b>Électrochocs</b> ou <b>Explosion électrique</b> à moins de <b>4 mètres</b> les uns des autres n’obtiennent pas de <b>Charge électrique</b>.</li><li>Dès qu’un survivant est à moins de <b>4 mètres</b> d’un autre survivant avec une <b>Charge électrique</b>, le survivant subit une électrocution avec les mêmes effets que la <i>capacité spéciale</i> <b>Électrochocs</b> et la <b>Charge électrique</b> est immédiatement <i>évacuée</i>.</li>","name":"Reine iridescente","flavor":"« Dès que nous aurons établi un traitement efficace, nous pourrons étudier les méthodes d’administration les plus efficaces. » -H. Carter","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"Cette pierre est trop grossière pour être utilisable. Une lame qu’elle aura endommagée infligera de terribles blessures ouvertes.<br><li>Les grognements de douleur des cibles touchées augmentent de <b>50 %</b> jusqu’à ce qu’elles soient complètement soignées.</li>","name":"Pierre grossière","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"Un simple bout de textile pour soigner les boursouflures et enlever le pus.<br><li><b>+ 10 %</b> de vitesse de vol de hachette.</li>","name":"Tissu jaune","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"Pansements de premiers soins enroulés et attachés fermement au manche de la hachette.<br><li><b>Réduit légèrement</b> le temps de récupération entre les lancers de hachette.</li>","name":"Manche bandé","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"Une toxine appliquée sur la lame de la hachette. La toxine de l’amanite engourdit l’esprit.<br><li>La cible touchée souffre de l’effet de statut <b><i>Aveuglement</i></b> pendant <b>60 secondes</b>.</li><li>Non cumulable.</li>","name":"Toxine d\'amanite","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"Une tête de hachette étrangement lestée, conçue pour porter un coup violent à la cible. Son porteur doit avoir de la force dans les bras.<br><li>La cible touchée souffre de l’effet de statut <b>Immobilisé</b> pendant <b>10 secondes</b>.</li>","name":"Tête lestée","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"Une épingle en cuivre abimée et méconnaissable mais extrêmement lustrée. Pillée sur une proie particulièrement coriace.<br><li><b>Augmente légèrement</b> votre vitesse de mouvement quand vous préparez votre lancer.</li><li>Non cumulable.</li>","name":"Épingle brillante","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"Manche poli qui permet un maniement rapide et sournois de cet outil mortel.<br><li><b>Réduit modérément</b> le temps de récupération entre les lancers de hachette.</li>","name":"Manche en chêne","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"Une tresse décorative circulaire en glycérie. Ce souvenir d\'une petite perdue augmente la rage et la concentration de la Chasseuse.<br><li><b>Réduit modérément</b> le temps de préparation de la hachette.</li>","name":"Tresse de glycérie","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"Cette bande de cuir nouée en forme de boucle peut être attachée à une ceinture pour faciliter le transport d\'outils.<br><li>Commence avec <b>1</b> hachette supplémentaire.</li><li>Augmente le nombre maximum de hachettes transportées de <b>1</b>.</li>","name":"Boucle en cuir","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"Des pétales séchés qui, préparés avec un thé, soulagent les symptômes de la fatigue et de l’épuisement.<br><li><b>+20 %</b> à la vitesse de jet de hachette.</li>","name":"Racine rose","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"Gants en cuir tanné qui protègent les mains et assurent les prises.<br><li><b>Réduit modérément</b> le temps de recharge des hachettes dans un casier.</li><li>Non cumulable.</li>","name":"Gants en peau de daim","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"Une concoction toxique appliquée sur la lame de la hachette. La concoction trouble est principalement composée de venin de vipère péliade, qui lui confère ses propriétés fatigantes.<br><li>La cible touchée souffre de l’effet de statut <b>Épuisement</b> pendant <b>5 secondes</b>.</li>","name":"Concoction vénéneuse","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"Ces têtes de hachettes sont couvertes d’éclats de rouille qui rendent les blessures particulièrement difficiles à soigner.<br><li>La cible touchée souffre de l’effet de statut <b><i>Estropiement</i></b>.</li>","name":"Tête rouillée","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"Un mouchoir propre et coloré décoré d\'un motif de fleur. Ce souvenir d\'une petite perdue augmente la rage et la concentration de la Chasseuse.<br><li><b>Réduit considérablement</b> le temps de préparation de la hachette.</li>","name":"Poupée russe à fleurs","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"Un ceinturon robuste, pillé sur un soldat. Ses multiples boucles et poches en cuir sont utiles pour transporter des outils.<br><li>Commence avec <b>2</b> hachettes supplémentaires.</li><li>Augmente le nombre maximum de hachettes transportées de <b>2</b>.</li>","name":"Ceinture d\'infanterie","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"Une concoction surnaturelle à la faible lueur de mauvais augure.<br><li>Les auras des victimes touchées vous sont visibles pendant <b>5 secondes</b>.</li>","name":"Concoction luisante","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"La tête de ces hachettes est tachée d’une substance fétide qui inflige des faiblesses à tous ceux qu’elle touche.<br><li>La cible frappée souffre des effets de statut <b><i>Estropiement</i></b> et <b><i>Hémorragie</i></b> jusqu’à ce qu’elle soit complètement guérie.</li><li>Non cumulable.</li>","name":"Tête souillée","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"Grossièrement sculptée, cette statuette de renard ne mesure pas plus de quelques centimètres. Un rappel que la furtivité et l’ingéniosité sont tout aussi efficaces que la force brute.<br><li>Octroie l’effet de statut <i><b>Indétectable</b></i> pendant <b>15 secondes</b> après avoir rechargé.</li>","name":"Renard de bois","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"Une tête de hachette semblable à du verre, moulée dans la Brume elle-même. Cette lame est chaude d’une énergie qui émane de l’Entité.<br><li>Les coups de hachette réussis plongent immédiatement les survivants en bonne santé en état critique.</li><li>Règle le nombre maximum de hachettes transportées à <b>1</b>.</li>","name":"Tête iridescente","flavor":"« Le verre iridescent tranche aussi bien la chair que l’âme. »","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"Une bande récupérée sur le cadavre d’un soldat, qui protège et soutient la cheville et le mollet.<br><li>La Chasseuse se déplace à <b>4,6 m/s</b> quand elle n’a plus de hachettes.</li>","name":"Bande molletière de soldat","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"Une huile rance utilisée comme lubrifiant de fortune.<br><br><li><b>Réduit légèrement</b> le temps de refroidissement de la tronçonneuse en cas d’attaque réussie contre un survivant.</li>","name":"Huile Végétale","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"Une bougie d’allumage propre pour tronçonneuse.<br><br><li><b>Augmente légèrement</b> la vitesse de remplissage des charges.</li>","name":"Bougie d\'Allumage","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"Une lime spéciale pour aiguiser les chaînes de tronçonneuses.<br><li><b>Réduit légèrement</b> la durée de la crise.</li>","name":"Aiguiseur de Chaîne","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"Un dispositif mécanique qui limite l’arrivée d’essence, induisant un régime sûr et régulier.<br><br><li>La tronçonneuse ne déclenche pas automatiquement un état critique.</li><li>Obtenez <b>100 %</b> de points de sang en plus lors des événements à score Coup de tronçonneuse.</li>","name":"Limiteur de vitesse","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Injecte plus de carburant dans le système d’allumage pour garantir un démarrage rapide et puissant.<br><br><li><b>Augmente modérément</b> la vitesse de remplissage des charges. </li>","name":"Poire d\'Amorçage","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"Une solide barre de remplacement en fer pour les chaînes plus longues.<br><br><li><b>Augmente légèrement</b> la durée de vrombissement disponible avant le déclenchement d’une crise.</li>","name":"Guide Allongé","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"Des éraflures causées par une lame marquent la tronçonneuse. Les souvenirs de violentes réprimandes emplissent son utilisateur d’une constante peur de l’échec.<br><br><li><b>Augmente légèrement</b> la vitesse de mouvement de la tronçonneuse.</li><li><b>Augmente légèrement</b> le temps de charge.</li>","name":"Griffures de couteau","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"Un système d’échappement improvisé fait de conduites de gaz.<br><br><li><b>Réduit modérément</b> la durée de la crise.</li>","name":"Silencieux fait maison","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"Un grand bol de chili pour rester en forme et conserver votre énergie.<br><br><li><b>Augmente légèrement</b> la durée de sprint quand un jeton est consommé.</li><li><b>Augmente légèrement</b> la fenêtre d’utilisation supplémentaire de Balayage à la tronçonneuse.</li><br>","name":"Chili","flavor":"« J’ai un bon barbecue juste ici ! » - Drayton Sawyer","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"Un épais liquide jaunâtre destiné à lubrifier diverses machines et concocté par les Sawyer.<br><br><li><b>Augmente modérément</b> la durée de vrombissement disponible avant le déclenchement d’une crise.</li>","name":"La graisse","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"Des marques de dents couvrent le corps de la tronçonneuse, châtiments de la sombre bête qui vit dans le brouillard. Les souvenirs de violentes réprimandes emplissent son utilisateur d’une constante peur de l’échec.<br><br><li><b>Augmente modérément</b> la vitesse de mouvement de la tronçonneuse.</li><li><b>Augmente légèrement</b> le temps de charge.</li>","name":"Les marques de la Bête","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"Une chaîne aux dents robustes et acérées qui laisse les victimes estropiées, même après avoir reçu des soins.<br><li>Les survivants frappés par la tronçonneuse souffrent de l’effet de statut <b>Estropiement</b>.","name":"Chaîne macabre","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"Une huile spécialement conçue pour les tronçonneuses. Un additif spécial empêche les pertes d’huile.<br><br><li>Abattre un survivant avec la tronçonneuse tant qu’aucun autre survivant n’est dans votre rayon de terreur dissimule l’aura du survivant pendant <b>20 secondes.</b></li>","name":"Lubrifiant d\'Atelier","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"Cette chaîne est tachée d’une substance fétide qui affaiblit tous ceux qu’elle touche.<br><br><li>Les survivants frappés par cette tronçonneuse lâchent leurs objets.</li>","name":"Chaînes souillées","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"Outil qui augmente l’angle de profondeur, permettant à la chaîne de manger plus de « bois ».<br><li><b>Augmente</b> le nombre de charges.</li><li><b>Augmente légèrement</b> le temps de charge.</li><li><b>Réduit légèrement</b> la vitesse maximale de Balayage à la tronçonneuse.</li>","name":"Allonge de profondeur","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"Un châssis léger et solide pourvu d’un guide raccourci qui rend la tronçonneuse plus facile à manier.<br><br><li>Tant qu’elle vrombit, vous voyez l’aura des survivants à moins de <b>8 mètres.</b></li>","name":"Châssis léger","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"Cette chaîne est couverte d’éclats de rouille qui rendent les blessures particulièrement difficiles à soigner.<br><br><li>Les survivants blessés par la tronçonneuse souffrent de l’effet de statut <b><i>Brisé</i></b> pendant <b>90 secondes</b>.</li><li>Non cumulable.</li>","name":"Chaîne rouillée","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"Un grand bol de chili épicé rendu célèbre par sa viande de première qualité.<br><br><li><b>Augmente modérément</b> la durée de sprint quand un jeton est consommé.</li><li><b>Augmente modérément</b> la fenêtre d’utilisation supplémentaire de la tronçonneuse.</li><br>","name":"Chili primé","flavor":"« Le secret est dans la viande. » - Drayton Sawyer","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"Une fine tranche de chair jeune et bien lisse. Les veines scintillent d’un éclat luminescent, comme si la vie circulait encore à l’intérieur.<br><br><li>Frapper un survivant avec la tronçonneuse remplit ses charges.</li><li>Limite la durée maximale de la crise à 8 secondes.</li><br>","name":"Chair iridescente","flavor":"« Il y a des moments où l’on a du mal à croire que ce qu’il se passe est bien réel. Pincez-vous et vous verrez que si. » — Pam Jones","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"Un guide grossièrement dessiné pour ajuster et régler un carburateur de tronçonneuse.<br><li>Utilise automatiquement toutes les charges au moment de déclencher un Balayage à la tronçonneuse.</li><li><b>Augmente légèrement</b> la durée de Balayage à la tronçonneuse.</li><li><b>Réduit légèrement</b> la vitesse maximale de Balayage à la tronçonneuse.</li>","name":"Guide de réglage de carburateur","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"Le maillot à rayures orange et jaunes d’un petit garçon. Le nom de « Jesse » y est cousu.<br>Tant que les survivants sont dans le <b>monde onirique</b> :<li><b>augmente légèrement</b> les pénalités de régression de <i>soins</i> et de <i>réparation</i>.</li>","name":"Maillot en laine","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"Un bloc de bois blanc et bleu qui représente deux agneaux laineux en train de paître ainsi que la lettre « S ».<li>Lorsqu’un survivant interagit avec un <b>attrape-rêve</b> ou une <b>palette onirique</b>, il souffre de l’<b>effet de statut Aveuglement</b> pendant 30 secondes.</li>","name":"Bloc mouton","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"Un dessin anonyme très clairement réalisé par un jeune enfant.<li>Gagnez <b>200 points de sang supplémentaires</b> en <b>Sournoiserie</b> quand un survivant déclenche un <b>attrape-rêve</b>.</li><li><b>Réduit considérablement</b> la pénalité de vitesse d’<b>attrape-rêve</b> des survivants.</li>","name":"Dessin d\'enfant","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"Un petit râteau, l’outil indispensable de tout jardinier accompli.<br>Remplace les <b>attrape-rêves</b> par des <b>palettes oniriques</b>.<li>7 <b>jetons de rêve.</b></li>","name":"Râteau","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"Un outil de conception artisanale permettant de tailler les buissons plus facilement.<li>Remplace les <b>attrape-rêves</b> par des <b>palettes oniriques</b>.</li><li>7 <b>jetons de rêve</b>.</li><li>Lorsqu’ils interagissent avec des <b>palettes oniriques</b>, les auras des survivants sont visibles par le <i>Cauchemar</i> pendant <b>4 secondes</b>.</li>","name":"Prototype de griffes","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"Une corde solide pour l’extérieur, très pratique pour attacher tout et n’importe quoi.<br>Tant que des survivants se trouvent dans le <b>monde onirique</b> :<li>le bruit des réparations de générateurs peut être entendu à partir de <b>8 mètres de distance</b>.</li>","name":"Corde de randonnée","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"Un croquis sommaire aux traits épais réalisé avec un fusain et signé Nancy H.<li><b>Augmente légèrement</b> la vitesse de récupération de <b>projection onirique</b> pour chaque survivant dans le <b>monde onirique</b>.</li>","name":"Croquis de Nancy","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"La robe vert pâle ornée d’un ruban blanc soyeux d’une petite fille.<br>Tant que les survivants sont dans le <b>monde onirique</b> :<li><b>augmente légèrement</b> les pénalités de régression de <i>soins</i> et de <i>réparation</i>.</li> <li>Les auras des survivants sont visibles pour <i>le Cauchemar</i> pendant <b>3 secondes</b> en cas d’échec au test d’habileté pour les <i>soins</i> ou les <i>réparations</i>.</li>","name":"Robe verte","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"Un bloc de bois blanc et violet qui représente un chat endormi ainsi que la lettre « C ».<li>Lorsqu’un survivant interagit avec un <b>attrape-rêve</b> ou une <b>palette onirique</b>, il souffre de l’effet de statut <b>Hémorragie</b> pendant 60 secondes.</li>","name":"Bloc chat","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"Un bloc de bois blanc et rouge qui représente une licorne en train de caracoler ainsi que la lettre « U ».<li>Lorsqu’un survivant interagit avec un <b>attrape-rêve</b> ou une <b>palette onirique</b>, il souffre de l’effet de statut <b>Aveuglement</b> pendant 60 secondes.</li>","name":"Bloc licorne","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"Des chaînes rouillées, mais solides, servant à accrocher fermement un siège de balançoire.<br>Tant que des survivants se trouvent dans le <b>monde onirique</b> :<li>leurs bruits de pas sont <b>50 % plus bruyants</b>.</li>","name":"Chaînes de balançoire","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"Le portrait d’un personnage, réalisé par Nancy Holbrook à Badham et conservé comme un précieux souvenir.<li><b>Augmente modérément</b> la vitesse de récupération de <b>projection onirique</b> pour chaque survivant dans le <b>monde onirique</b>.</li>","name":"Chef-d\'œuvre de Nancy","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"Une corde à sauter double qui porte les marques de nombreuses années d’utilisation.<br>Tant que des survivants se trouvent dans le <b>monde onirique</b> :<li>les grognements de douleur sont <b>50 % plus bruyants</b>.</li>","name":"Corde à sauter","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"La robe bleu pâle ornée de dentelle blanche d’une petite fille, déchirée par de larges entailles sur le devant.<br>Tant que les survivants sont dans le <b>monde onirique</b> :<li><b>augmente légèrement</b> les pénalités de régression de <i>soins</i> et de <i>réparation</i>.</li> <li>Les auras des survivants sont visibles pour <i>le Cauchemar</i> pendant <b>4 secondes</b> en cas d’échec au test d’habileté pour les <i>soins</i> ou les <i>réparations</i>.</li>","name":"Robe bleue","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"Une boîte de pilules vide qui contenait des médicaments du nom de Zoneral.<li>Les survivants verront le <i>Cauchemar</i> par intermittence à une distance réduite de <b>12</b> à <b>24 mètres</b>.</li><li><i>Le Cauchemar</i> est invisible pour les survivants au-delà de <b>24 mètres</b>.</li><li>Les survivants éveillés ne voient pas <i>Le Cauchemar</i> lorsqu’il porte un survivant.</li>","name":"Flacon de cachets","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"Une boîte d’un liquide extrêmement inflammable et explosif.<li>Remplace les <b>attrape-rêves</b> par des <b>palettes oniriques</b>.</li><li>7 <b>jetons de rêve</b>.</li><li>Lorsqu’ils interagissent avec des <b>palettes oniriques</b>, les auras des survivants sont visibles par le <i>Cauchemar</i> pendant <b>6 secondes</b>.</li>","name":"Diluant à peinture","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"Une grande photo prise à l’école maternelle de Badham qui représente la joyeuse promotion de 94-95.<li>Il n’est plus possible d’annuler <b>projection onirique</b>.</li><li>Tous les générateurs crachent du sang tant que <b>le Cauchemar</b> canalise <b>projection onirique</b>.</li><li>La projection du <i>Cauchemar</i> n’apparaîtra pas lors de la <b>projection onirique</b></li>","name":"Photo de classe","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"Un bloc de bois éraflé et calciné sur lequel reste uniquement lisible la lettre « Z ».<li>Lorsqu’un survivant interagit avec un <b>attrape-rêve</b> ou une <b>palette onirique</b>, il souffre de l’effet de statut <b>Hémorragie</b> pendant <b>60 secondes</b>.</li><li>Si le survivant est en forme, il saignera pour la durée de l’effet de statut <b>Hémorragie</b>.</li>","name":"Bloc « Z »","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"Un large pinceau, enduit de peinture pourpre encore humide.<li>Tous les survivants commencent la partie dans le <b>monde onirique</b>.</li><li>Les tests d’habileté ratés ne réveillent pas les survivants dans le <b>monde onirique</b>.</li>","name":"Pinceau avec peinture rouge","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"Une boîte en carton noire remplie de photos.<br>Tant que des survivants se trouvent dans le <b>monde onirique</b> :<li>les portes de sortie récemment ouvertes sont bloquées pendant <b>15 secondes.</b></li>","name":"Boîte noire","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"Modification pour la boîte puzzle : les pièces lubrifiées rendent la fouille plus délicate.<br><li><b>Augmente légèrement</b> les chances d’activation d’un test d’habileté lors de l’interaction avec une boîte puzzle.</li>","name":"Lubrifiant","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"Symbole d’un mode de vie décadent. Le souvenir de sa vie passée renforce sa détermination.<br><li><b>Réduit légèrement</b> la récupération de l’embuscade ratée.</li>","name":"Seringue brisée","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"Le dossier médical d’un homme atteint du cancer. Sa lecture terrifie le lecteur et le rend imprudent.<br><li><b>Réduit légèrement</b> le temps de charge de l’embuscade.</li>","name":"Dossier médical de John","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"Sangles en cuir qui maintiennent le tissu en place et facilitent les mouvements.<br><li><b>Réduit légèrement</b> le temps qu\'il faut pour s\'accroupir.</li>","name":"Sangles de combat","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"Enregistrement de Jigsaw expliquant les règles du jeu à Amanda. Le souvenir de sa vie passée renforce sa détermination.<br><li><b>Réduit légèrement</b> le temps de charge de l’embuscade.</li><li><b>Réduit légèrement</b> la récupération de l’embuscade ratée.</li>","name":"Cassette vidéo","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"Modification pour le piège à ours inversé : des lames acérées fixées à l\'intérieur du piège lacèrent la victime au moindre mouvement.<br><li>Les survivants pris dans le piège à ours inversé souffrent de l\'effet de statut <b><i>Hémorragie</i></b>.</li>","name":"Lames de cutter","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"Modification pour la boîte puzzle : l’ajout de lames de rasoir enchevêtrées empêche la victime de faire des mouvements brusques sans se trancher les poignets.<br><li><b>Augmente modérément</b> les chances d’activation du test d’habileté lors d’une interaction avec la boîte puzzle.</li>","name":"Fil barbelé","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"Boîte en bois doublée de satin et équipée d’un fermoir, faisant partie d’un testament.<br><li><b>Ajoute</b> <b>1</b> piège à ours inversé disponible.<br>","name":"Testament","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"Modification pour le piège à ours inversé : le masque de tissu épais, maintenant imprégné d\'un sédatif, asphyxie partiellement la victime et l\'empêche de se concentrer.<br><li>Les survivants pris dans le piège à ours inversé souffrent de l\'effet de statut <i><b>Aveuglement</b></i>.</li><li>Pas d\'effet sur la surbrillance de la boîte puzzle.</li>","name":"Masque","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"Modification pour le piège à ours inversé : un poison non fatal qui affaiblit la victime et l\'empêche de récupérer entièrement après un effort.<br><li>Les survivants pris dans le piège à ours inversé souffrent de l\'effet de statut <i><b>Épuisement</b></i>.</li>","name":"Toxine à libération lente","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"Modification pour le piège à ours inversé : des dents couvertes d’éclats de rouille qui rendent les blessures particulièrement difficiles à soigner.<br><li>Les survivants blessés pris dans le piège à ours inversé souffrent de l’effet de statut <i><b>Estropiement</b></i>.</li>","name":"Dents rouillées","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"Les plans sur papier d’un piège ingénieux quoique perturbant, annotés par Jigsaw.<br><li><b>Ajoute</b> <b>1</b> boîte puzzle disponible.</li>","name":"Croquis de Jigsaw","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"Modification pour la boîte puzzle : l\'ajout de lames de rasoir enchevêtrées empêche la victime de faire des mouvements brusques sans se trancher les poignets.<br><li><b>Augmente énormément</b> la pénalité des tests d\'habileté échoués sur les boîtes puzzle.</li>","name":"Rasoirs enchevêtrés","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"Ces pièces mécaniques permettent de créer des boîtes puzzles complexes et des pièges à ours inversés faciles à installer.<br><li><b>Augmente légèrement</b> le temps qu’il faut à un survivant pour fouiller une boîte puzzle.</li><li><b>Réduit légèrement</b> le temps qu’il faut pour poser le piège à ours inversé.</li>","name":"Sac de rouages","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"Quelqu’un a trafiqué ce minuteur. Un ressort dans le mécanisme accélère la rotation des rouages.<br><li><b>Réduit modérément</b> le délai d’activation du piège à ours inversé.</li>","name":"Minuteur trafiqué","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"Les plans d’un piège ingénieux quoique perturbant, dessinés de façon détaillée sur une feuille de papier.<br><li><b>Ajoute</b> <b>1</b> boîte puzzle disponible.</li><li><b>Augmente modérément</b> le délai d’activation du piège à ours inversé.</li>","name":"Croquis annoté de Jigsaw","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"Cet ensemble de pièces mécaniques permet de créer des boîtes puzzles encore plus complexes et des pièges à ours inversés plus faciles à installer.<br><li><b>Augmente considérablement</b> le temps qu’il faut à un survivant pour fouiller une boîte puzzle.</li><li><b>Réduit modérément</b> le temps qu’il faut pour poser le piège à ours inversé sur un survivant.</li>","name":"Caisse de rouages","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"Boîte métallique noire contenant un couteau et du matériel médical (bandages, compresses, etc.). Les coupures profondes réduisent le stress et éveillent les sens.<br><li><b>Désactive</b> la capacité du Cochon à voir les auras des boîtes puzzles.</li><li><b>Une notification apparaît</b> quand un survivant retire un piège à ours inversé.</li><li>Les auras des survivants qui retirent un piège à ours inversé vous sont révélées pendant <b>6 secondes</b>.</li>","name":"Secret d\'Amanda","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"Chaque jeu a ses règles.<br><li><b>Désactive</b> la capacité des survivants à voir les auras des boîtes puzzles jusqu\'à l\'activation de leur piège.</li>","name":"Ensemble de règles n° 2","flavor":"« Écoutez, il y a des règles. » -Jigsaw","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"Lettre de chantage à l’attention d’Amanda. Sa lecture insuffle rage et concentration à son lecteur.<br><li>Les silhouettes des survivants à 12 mètres de distance sont visibles en étant accroupi.</li><li><b>Supprime</b> <b>3</b> pièges à ours inversés disponibles.</li><li><b>Supprime</b> <b>2</b> boîtes puzzles disponibles.</li>","name":"Lettre à Amanda","flavor":"« Amanda, tu étais avec Cecil la nuit où Jill a perdu Gideon. Tu as tué leur enfant. Nous le savons tous les deux. » -Lettre à Amanda","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"Une semelle intérieure moisie, très confortable pour les pieds fatigués.<br><li>Augmente <b>modérément</b> la vitesse de mouvement en rechargeant des bouteilles.</li>","name":"Semelles intérieures puantes","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"Une plume d’un orangé chaud, douce au toucher.<br><li>Réduit <b>légèrement</b> le temps de récupération entre les jets de bouteilles.</li>","name":"Plume de rouge-gorge","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"Pièce d’un costume de Clown normal, les bouts des doigts coupés confèrent une grande dextérité.\\n<li>Change l’arc du lancer de bouteille.</li>\\n","name":"Mitaines de parade","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"Animez la fête !<br><br><li>Les <b>Bouteilles de fête</b> projettent des confettis lorsqu\'elles sont brisées, en plus de leur effet gazeux habituel.</li><li>Toucher un survivant avec une <b>Bouteille de fête</b> interrompt ses actions comme d\'habitude, et rapporte <b>100 points de sang</b>.</li>","name":"Bouteille de fête","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"Un bouchon résistant qui s’adapte merveilleusement aux bouteilles de Tonique d’after.<br><li>Réduit <b>modérément</b> le temps de recharge.</li>","name":"Bouchon épais","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"Une bouteille vide, poisseuse de sucre et de sang séché.<br><li>Débute avec <b>1 bouteille supplémentaire</b>. </li><li>Augmente de <b>1</b> le nombre maximum de bouteilles portées. </li>","name":"Bouteille de soda collante","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"Une plume noire aux reflets émeraude, très douce au toucher.<br><li>Réduit <b>modérément</b> le temps de récupération entre les jets de bouteilles. </li>","name":"Plume d\'étourneau","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"Un composé chimique volatil qui irrite les voies respiratoires, mais augmente l’absorption de l’Antidote d’after.<br><li>Augmente <b>modérément</b> la durée de l’effet Revigoré.</li>","name":"Bidon de solvant","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"Un combustible liquide fluide et clair qui engourdit l’esprit s’il est inhalé.<br><li>La cible touchée souffre de l’effet de statut <b>Aveuglement</b> pendant <b>30 secondes</b>.</li>","name":"Bidon de kérosène","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"Un classique en son genre. Vous verrez les choses différemment.<br><li>Rend les nuages du Tonique d’after jaunes.</li><li>Rend les nuages de l’Antidote d’after violets.</li>","name":"Cassette VHS de porno","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"Un liquide sirupeux et inodore, extrêmement corrosif.<br><li>La cible intoxiquée souffre de l’effet de statut <b>Estropiement</b>.</li>","name":"Flacon d\'acide sulfurique","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"Un agent chimique puissant qui déclenche des irritations, des brûlures et des lésions aux poumons.<br><li>La cible victime d\'Intoxication souffre <b>modérément</b> d\'une pénalité d\'<b>entrave</b> supplémentaire.</li>","name":"Flacon de détergent","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"<li>Augmente <b>modérément</b> la zone d’effet du gaz Antidote d’after.</li>","name":"Esprit de Hartshorn","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"Un composé organique à l’odeur douçâtre et aux fortes propriétés anesthésiantes.<br><li>Étend <b>modérément</b> la zone d’effet du gaz Tonique d’after.</li>","name":"Bouteille de chloroforme","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"Un peu pour le visage, un peu pour l’Antidote. Le composé secret intensifie les effets de l’Antidote.<br><li>Augmente <b>considérablement</b> la durée de l’effet Revigoré.</li>","name":"Boîte à maquillage criard","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"Seul vestige d’un bon moment bon marché et d’un mal de tête carabiné.<br><li>Commence avec <b>2 bouteilles supplémentaires</b>. </li><li>Augmente de <b>2</b> le nombre maximum de bouteilles portées. </li>","name":"Bouteille de gin bon marché","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"Un composé organique fortement volatil, toxique à ce niveau de concentration.<br><li>Augmente <b>considérablement</b> la durée de l’effet Intoxication.</li>","name":"Éther à 15 % du volume","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"Une collection sinistre et incomplète de doigts. Éveille les désirs du Clown et amplifie sa capacité à fabriquer des concoctions.<br><li>Quand un survivant ou un tueur est Revigoré, il voit l’aura de tous les autres joueurs dans un rayon de 16 m.</li>","name":"Boîte à cigares","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"Le majeur chéri d’un grand homme tatoué. Il a un léger goût d’huile pour machine.<br><li>Vous révèle l’aura des survivants Intoxiqués ou Revigorés pendant <b>6 secondes</b>.</li>","name":"Majeur de Tattoo","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"Le petit doigt chéri d\'une personne rousse. Odeur légère. Sent le pot-pourri et le vernis.<br><li>Les survivants touchés directement par une bouteille de Tonique d\'after souffrent de l\'effet de statut <b>À découvert</b> pour la durée de l\'intoxication.</li>","name":"Petit doigt de personne rousse","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"Une confortable paire de sandales plates faciles à mettre et à enlever.<li>Augmente légèrement la vitesse de mouvement de la Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Zōri","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"Un talisman qui rend heureux et enthousiaste.<li>Augmente légèrement la durée de la Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Amulette porte-bonheur","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"Une des mille grues pour que votre vœu soit exaucé.<li>Augmente légèrement la récupération de pouvoir de la Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Grue en origami","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"Un peigne fin en bambou pour démêler en douceur les cheveux ébouriffés.<li>Augmente légèrement la vitesse de charge de l’activation de Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Peigne en bambou offert","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"Un bandeau soyeux pour dompter les cheveux rebelles.<li>Augmente modérément la vitesse de charge de l’activation de Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Ruban blanc pour cheveux","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"Une montre-bracelet dont le verre est brisé. Le nom « Rin » est griffonné sur le bracelet.<li>Augmente modérément la récupération de pouvoir de la Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Montre cassée de Rin","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"Une casquette de sport arborant le logo d\'un lycée. Le nom « Rin » y est cousu.<li>Augmente modérément la vitesse de mouvement de la Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Casquette de sport boueuse","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"Un talisman pour que la chance soit avec vous.<li>Augmente modérément la durée de la Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Talisman de chance","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"Un bonsaï au feuillage bleu-vert foncé. Représentait autrefois la tradition de la famille Yamaoka.<li>Augmente légèrement la fréquence de disparition passive.</li><li>Cumulable.</li>","name":"Bonsaï de genévrier","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"Une flûte traversière rouillée au son obsédant.<li>Augmente considérablement la récupération de pouvoir de la Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Flûte rouillée","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"Talisman de réussite","name":"Talisman de réussite","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"La garde d\'une lame ancestrale. Fabriquée pour la famille Yamaoka.<li>Augmente légèrement la durée de réapparition de la Hantise de Yamaoka.</li><li>Augmente légèrement la vitesse de mouvement de la réapparition de la Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Tsuba pour katana","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"Une paire de chaussures d\'intérieur pratiques.<li>Augmente considérablement la vitesse de mouvement de la Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Chaussures uwabaki sales","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"Une broche pour les cheveux tachée de sang séché.<li>Augmente considérablement la vitesse de charge de l’activation de Hantise de Yamaoka.</li><li>Cumulable.</li>","name":"Broche de cheveux sanglante","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"Un puissant talisman pour empêcher que vos efforts soient entravés par des circonstances suspectes.<li><b>Augmente énormément</b> la durée de la Hantise de Yamaoka.</li><li><b>Réduit légèrement</b> la vitesse de mouvement de la Hantise de Yamaoka.</li>","name":"Amulette Yakuyoke","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"Le fourreau d\'une lame ancestrale. Fabriqué autrefois pour la famille Yamaoka.<li>Augmente modérément la durée de réapparition de la Hantise de Yamaoka.</li><li>Augmente modérément la vitesse de mouvement de la réapparition de la Hantise de Yamaoka.</li>","name":"Fourreau de wakizashi","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"Un puissant bracelet sur lequel on peut lire un mantra sacré.<li>Tous les survivants en dehors du rayon de terreur entendent le son de disparition.</li>","name":"Bracelet en perles de prière","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"Une fleur de cerisier séchée qui s\'effrite. Autrefois le symbole de la mortalité.<li>Augmente légèrement la durée de disparition passive.</li><li>Augmente légèrement la fréquence de disparition passive.</li>","name":"Fleur de cerisier séchée","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"Une bague en argent sur laquelle est gravé : « Pour ma fille chérie ».<li>Augmente énormément la vitesse de mouvement de la Hantise de Yamaoka.</li><li>Les marques d\'éraflure ne sont plus visibles lors de l\'utilisation de la Hantise de Yamaoka.</li>","name":"Bague mère-fille","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"Une paire de lunettes qui appartenaient à un père employé surmené.<li>Les traînées de sang de survivant sont visibles lors de l\'utilisation de la Hantise de Yamaoka.</li>","name":"Lunettes de père","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"Un badge jaune vif et amical servant de déclaration sarcastique.<li>Frapper un survivant signalé par Instinct de tueur sous l’effet de Frénésie animale applique l’effet de statut Aveuglement pendant 60 secondes.</li>","name":"Badge smiley","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"Une règle en bois très éraflée, portant des marques d\'entailles.<li><b>Réduit légèrement</b> le temps requis pour remplir la jauge de pouvoir.</li>","name":"Règle éraflée","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"Une liste de méfaits à accomplir, en souvenir de jours meilleurs.<li><b>Augmente légèrement la</b> durée de Frénésie animale.</li>","name":"Liste de méfaits","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"Un large bracelet en ficelle tressée grise et rouge. Elle porte l\'inscription « F J S J », écrite grossièrement à l\'encre noire.<li><b>Augmente légèrement</b> la portée de détection d\'Instinct de tueur.</li>","name":"Bracelet d\'amitié","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"Cachets à forte teneur en caféine, qui vous maintiennent éveillé pour les examens ou pour des activités épuisantes.<li><b>Augmente modérément</b> la portée de détection d\'Instinct de tueur.</li>","name":"Cachets anti-sommeil","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"Une esquisse de la fresque de la Légion, arrachée à un carnet.<li><b>Augmente modérément</b> la durée de Frénésie animale.</li>","name":"Fresque","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"Une cassette de morceaux sombres et dépressifs, principalement des ballades rythmées et des mélodies lugubres.<li><b>Réduit légèrement</b> la fatigue à la fin de Frénésie animale.</li>","name":"Cassette de musique de Julie","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"Une règle en bois très entaillée, portant le nom d\'ennemis.<li><b>Réduit modérément</b> le temps requis pour remplir la jauge de pouvoir.</li>","name":"Règle entaillée","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"Le badge jaune vif et autrefois amical d’un smiley défiguré. Icône typique de la Légion.<li>Frapper un survivant signalé par Instinct de tueur sous l’effet de <i>Frénésie animale</i> applique l’effet de statut <b><i>Estropiement</i></b>.</li>","name":"Badge smiley défiguré","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"Un badge fait main avec le visage de la Légion. À utiliser exclusivement pour les tentatives d’intimidation.<li>Frapper un survivant signalé par Instinct de tueur sous l’effet de Frénésie animale applique l’effet de statut Brisé pendant 60 secondes.</li>","name":"Badge de la Légion","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"Une cassette de musique rapide et exaltante, dont les chansons galvanisantes ont un tempo à briser le cou.<li><b>Augmente énormément</b> la portée de détection d\'Instinct de tueur.</li>","name":"Cassette de musique de Susie","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"Un carnet à dessin rempli d\'esquisses imaginatives et évocatrices, quoique légèrement étranges.<li><b>Augmente considérablement</b> la durée de Frénésie animale.</li>","name":"Carnet à dessin volé","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"Cette lame est tachée de sanies non hygiéniques qui rendent bien plus difficile la suture des blessures.<li><b>Augmente légèrement</b> le temps requis pour que les survivants accomplissent l\'action Suturer.</li>","name":"Lame vicieuse","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"Une liste de morceaux tonitruants au rythme infernal, pour déstresser quand la vie vous fait des crasses.<li><b>Réduit modérément</b> la fatigue à la fin de Frénésie animale.</li>","name":"Cassette de musique de Joey","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"Un article médical imprimé, volé à la bibliothèque d’Ormond et qui vulgarise une étude sur les lésions et les blessures par arme blanche.<li><b>Réduit modérément</b> le chronomètre de Blessure profonde pour tous les survivants.</li>","name":"Étude sur les blessures par arme blanche","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"Ne partez jamais en mission meurtrière sans vos chansons. Une liste de morceaux aux distorsions énormes et aux percussions assourdissantes à percer les tympans.<li>Permet aux attaques sous Frénésie animale de <b>réduire considérablement</b> le chronomètre de Blessure profonde d’un survivant.</li>","name":"Cassette de musique de Frank","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"Cette lame est tachée de sanies et de sang vicié qui rendent bien plus difficile la suture des blessures.<li><b>Augmente modérément</b> le temps requis pour que les survivants accomplissent l\'action Suturer.</li>","name":"Lame dégoûtante","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"Une poignée de terre ramassée sur la dernière demeure du concierge. Elle est d\'un froid surnaturel.<li><b>Réduit considérablement</b> la fatigue à la fin de Frénésie animale.</li>","name":"Terre froide","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"Un badge en simili-verre, moulé à partir de la Brume pour ressembler à la Légion. Sa surface est chaude et vibre de la puissance de l\'Entité.<br><br>Quand l\'effet de statut Blessure profonde a été appliqué durant Frénésie animale :<br><li>votre rayon de terreur affecte <b>toute la carte.</b></li><li>toutes les palettes par-dessus lesquelles vous sautez sont <b>immédiatement brisées.</b></li><br>Cet effet dure jusqu\'à ce que la jauge de pouvoir soit vidée.<br>","name":"Badge irisé","flavor":"« La jeunesse consumée par le verre irisé amplifie et étend la portée de l\'Entité. »","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"Un rythme sombre, des cris violents et un chant impossible venu d\'un autre monde remplissent l\'esprit d\'un sixième sens vibrant.<li>Lors de l\'utilisation de Frénésie animale, la <b>progression dans la réparation des générateurs</b> peut être déterminée par l\'<b>intensité de leur aura.</b></li>","name":"Cassette de musique fumante","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"Une tablette de pierre fragmentée avec une incantation corrompue, utilisée à l\'origine pour purger les maux et sensations de malaise général.<li><b>Réduit légèrement</b> le temps d\'activation du bassin de dévotion.</li><li><b>Augmente légèrement</b> la vitesse de mouvement durant la purge de corruption.</li>","name":"Fragment de tablette de prière","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"Résine précieuse extraite du Boswellia, utilisée lors de cérémonies pour son doux parfum citrique.<li><b>Augmente légèrement</b> la vitesse de mouvement en chargeant purge d\'infamie.</li>","name":"Olibanum","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"Un sceau cylindrique en pierre poreuse représentant un rituel avec des divinités ailées.<li><b>Augmente légèrement</b> le temps d\'infection des objets.</li>","name":"Sceau calcaire","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"Une pâte de racines broyées à la forte odeur amère, marinées dans de la saumure pendant trois jours et dans du vin pendant deux jours de plus. À appliquer sur les éruptions cutanées.<li><b>Réduit légèrement</b> le temps de récupération de Purge d\'infamie.</li>","name":"Baume de soins","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"Une amulette en stéatite gravée d\'une divinité ailée qui repousse la maladie. Le porteur est pris de dévotion.<li><b>Augmente légèrement</b> la durée de purge de corruption.</li>","name":"Amulette prophylactique","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"Un liquide mousseux et trouble qui imprègne l\'air d\'un fort parfum d\'herbes et d\'alcool. À appliquer directement sur les cloques.\\n<li><b>Réduit modérément</b> le temps de récupération de purge d\'infamie.</li>","name":"Teinture forte","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"Un sceau cylindrique forgé à partir d\'une pierre dure métallique, sur lequel sont gravés des êtres à tête d\'oiseau aux côtés d\'étranges machines. Utilisé comme conteneur de cendres sanctifiées.<li><b>Augmente modérément</b> le temps d\'infection des objets.</li>","name":"Sceau d\'hématite","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"Un sirop à base de moutarde qui donne très vite envie de vomir quand on en boit. Sert à purger le mal d\'un corps.<li><b>Augmente légèrement</b> l\'efficacité de Purge d\'infamie.</li>","name":"Potion vomitive","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"Un fruit bien mûr pour rompre le jeûne pendant la cérémonie de purification. Délicieux.<li>Commencez la partie avec <b>1</b> bassin de dévotion corrompu supplémentaire.</li>","name":"Pomme bénie","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"Un gobelet d\'huile de massage aux capacités expectorantes. Dégage un parfum persistant de laurier et de romarin.<li><b>Augmente modérément</b> la vitesse de charge de purge d\'infamie.</li>","name":"Huile de massage","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"Un sirop immonde d\'origine inconnue. Cet épais liquide jaune provoque des vomissements quand on l\'ingère. Sert à purger le mal d\'un corps.<li><b>Augmente modérément</b> l\'efficacité de Purge d\'infamie.</li>","name":"Vomi infecté","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"Une pâte sombre cireuse, imprégnée de sève de cèdre qui dégage un doux arôme terreux. À appliquer directement sur la peau infectée.<li><b>Augmente légèrement</b> la vitesse de mouvement en chargeant purge d\'infamie.</li><li><b>Réduit modérément</b> le temps de récupération de purge d\'infamie.</li>","name":"Onguent odorant","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"Une amulette d\'obsidienne qui évite d\'avoir la nausée pendant un exorcisme. Contient une prière au dieu du chaos et de la pestilence. Le porteur est pris d\'une dévotion féroce.<li><b>Augmente modérément</b> la durée de purge de corruption.</li>","name":"Amulette d\'exorcisme","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"Une pomme pelée recouverte de cendres sanctifiées. Manger ce fruit repousse les esprits malfaisants des défunts.<li>Commencez la partie avec <b>1</b> bassin de dévotion corrompu supplémentaire.</li><li><b>Augmente légèrement</b> le temps d\'infection des objets.</li>","name":"Pomme grisâtre","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"Une tablette de pierre décorée d\'or, contenant les dessins et textes d\'une incantation corrompue, utilisée à l\'origine pour adorer les divinités oubliées.<li><b>Réduit modérément</b> le temps d\'activation du bassin de dévotion.</li><li><b>Augmente modérément</b> la vitesse de mouvement durant la purge de corruption.</li>","name":"Tablette d\'adoration","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"Une potion nauséabonde aux ingrédients inconnus à moitié figés. À boire pour provoquer rapidement des vomissements. Sert à purger le mal d\'un corps.<li><b>Augmente considérablement</b> l\'efficacité de Purge d\'infamie.</li>","name":"Vomitif abominable","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"L\'orteil en décomposition d\'Adiris, porté en amulette autour du cou. Dégage une puissance maléfique.<li><b>Augmente considérablement</b> la vitesse à laquelle les survivants souffrent d\'infection lors d\'interactions.</li>","name":"Orteil tranché","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"Une pierre de sang montée en amulette, finement gravée à l\'effigie du dieu babylonien du chaos et de la pestilence. Le porteur est pris d\'une dévotion sans limite.<li><b>Augmente considérablement</b> la durée de purge de corruption.</li>","name":"Amulette de l\'adepte","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"Un sceau cylindrique translucide moulé à partir de la Brume avec l\'effigie de l\'Épidémie. Sa surface est chaude et vibre de la puissance de l\'Entité.<li><b>Réduit modérément</b> la vitesse de mouvement durant la purge de corruption.</li><li><b>Réduit énormément</b> la durée de la purge de corruption.</li><li>La purge d\'infamie devient une purge de corruption chaque fois qu\'un générateur est terminé.</li>","name":"Sceau iridescent","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Une pâte sombre faite de copeaux osseux affilés. Respirer ses émanations fétides affûte l\'Œil de l\'Esprit.<li>L\'aura des survivants vous est révélée pendant <b>5 secondes</b> quand ils vomissent.</li>","name":"Encens noir","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"Caméra volée à une victime d’Olsen à Philadelphie, où il travaillait auparavant. La bobine présente sa dernière nuit dans cette ville.<br><li><b>Augmente légèrement</b> la vitesse de marquage d’un survivant quand vous ne vous inclinez pas depuis une cachette.</li>","name":"« Philly »","flavor":"« Qu’est-ce que je peux aimer Philly... Elle m’a tout donné et je ne veux rien en oublier. » – Ghost Face","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"Un paquet d’allumettes du Walleyes, un petit bar au nord de Roseville. Le numéro de téléphone d’une victime est gribouillé au stylo bleu. Une des preuves incriminantes trouvées.<br><li><b>Augmente légèrement</b> la vitesse de récupération de <i>Linceul nocturne</i>.</li>","name":"Allumettes du Walleyes","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"Des coupures de presse traitant d\'assassinats non résolus de l\'Utah jusqu\'en Pennsylvanie. Ghost Face n\'a écrit que quelques-uns de ces articles, mais il est bien l\'auteur de tous ces meurtres.<br>Garder la trace de vos succès vous rend fier et augmente votre confiance.<br><li><b>Augmente légèrement</b> la vitesse de déplacement lorsque vous traquez une cible.</li>","name":"Coupures de presse","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"Eau de Cologne bon marché au fort parfum d’alcool dénaturé. Ghost Face la porte pour avertir de sa présence. Réservée aux visites improvisées.<br><li><b>Augmente légèrement</b> la durée de la marque d’un survivant.</li>","name":"Eau de Cologne bon marché","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"Objectif manuel pour ne pas vous faire repérer quand que vous prenez des photos de loin.<br><li><b>Augmente légèrement</b> la vitesse de marquage d’un survivant quand vous ne vous inclinez pas depuis une cachette.</li><li><b>Augmente légèrement</b> la durée de la marque d’un survivant.</li>","name":"Téléobjectif","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"Un calepin à spirales contenant de nombreuses entrées écrites à la main. Le journal détaille les différents équipements utilisés pour traquer les victimes. Vous revivez des souvenirs palpitants en relisant vos précédentes méthodes.<br><li><b>Augmente modérément</b> la vitesse de déplacement lorsque vous traquez une cible.</li>","name":"Journal d’Olsen","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"Rempli de textes illisibles écrits au stylo bleu. La liste de toutes les victimes des meurtres de Roseville figure, ainsi que leur numéro de téléphone et leur adresse.<br><li><b>Augmente modérément</b> la vitesse de récupération de <i>Linceul nocturne</i>.</li>","name":"Carnet d’adresses d’Olsen","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"La carte annotée du nord de Roseville, en Floride. Chaque X représente une victime de Ghost Face. Planifier vos cibles vous permet de rôder dans les rues sans y être détecté.<br><li><b>Augmente modérément</b> la durée de visibilité d’Instinct de tueur quand le tueur est révélé.</li>","name":"Carte marquée","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"Sangles noires qui maintiennent tout en place pendant la traque.<br><li><b>Augmente légèrement</b> la vitesse de mouvement accroupi.</li>","name":"Sangles ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"Le portefeuille d’Olsen contient trente dollars, une carte d’abonnement à un vidéo-club et la photo pliée de sa première victime de Roseville. Porter des preuves incriminantes augmente votre excitation et votre détermination.<br><li><b>Augmente considérablement</b> la vitesse de déplacement lorsque vous traquez une cible.</li>","name":"Portefeuille d’Olsen","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"Fourreau souple et discret pour porter votre couteau. C’est plus facile de se déplacer quand tout est bien en place.<br><li><b>Augmente modérément</b> la vitesse de mouvement accroupi.</li>","name":"Fourreau de couteau en cuir","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"Un fort parfum musqué porté par Ghost Face pour annoncer sa présence. Réservé aux victimes sur qui il compte écrire.<br><li><b>Réduit modérément</b> la durée de la marque d’un survivant.</li>","name":"Parfum durable","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"Une pince de ceinture idéale pour porter votre couteau en toute discrétion. Personne ne sait ce que vous préparez pour ce soir.<br><li><b>Augmente modérément</b> la vitesse de marquage d’un survivant quand vous ne vous inclinez pas depuis une cachette.</li>","name":"Pince de ceinture à couteau","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"Stylo bleu au capuchon mâchouillé qui contient des traces d’ADN de Danny. Une preuve incriminante qui n’a jamais été trouvée.<br><li><b>Augmente considérablement</b> la vitesse de récupération de <i>Linceul nocturne</i>.</li>","name":"Stylo mâchouillé","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"Une page déchirée détaillant la routine hebdomadaire de la première victime de Roseville d’Olsen. Prendre note des habitudes sur votre victime vous permet d’anticiper ses mouvements. \\n<br><li><b>Augmente modérément</b> la durée de visibilité d’Instinct de tueur quand le tueur est révélé.</li><li><b>Réduit modérément</b> la portée de détection pour révéler le tueur quand Linceul nocturne est actif.</li><br><span class=\\"FlavorText\\">« Ça fait un moment que je t’observe. Je voulais que ce soit spécial, un gros titre que personne n’oubliera jamais. » - Ghost Face</span>","name":"Routine détaillée de la victime","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"Objectif de vision nocturne permettant de prendre des photos nettes même en pleine obscurité. Parfait pour de discrètes visites tardives à l’improviste.<br><li><b>Augmente considérablement</b> la vitesse de marquage d’un survivant quand vous ne vous inclinez pas depuis une cachette.</li>","name":"Objectif de vision nocturne","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"Fourreau permettant une grande liberté de mouvement : idéal pour infliger rapidement de lourdes blessures tout en se déplaçant librement. Volé à un agent de patrouille la nuit où Danny a quitté Philadelphie.<br><li><b>Augmente considérablement</b> la vitesse de mouvement accroupi.</li><span class=\\"FlavorText\\">« Je dois me tenir prêt comme un scout, mais sans les badges ridicules. Ma récompense est bien meilleure. » - Ghost Face</span>","name":"Fourreau de couteau fixe","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"Un permis de conduire dévoilant la véritable identité d’Olsen : Danny Johnson.<br><li><b>Réduit considérablement</b> la portée à laquelle un survivant détecte le tueur quand <i>Linceul nocturne</i> est actif.</li>","name":"Permis de conduire","flavor":"« Tous voudront savoir qui est Ghost Face, mais la vraie question est de savoir qui sera le suivant. » - Ghost Face","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"Cassette obtenue par Olsen pour écrire un article qui a terrorisé Roseville.<br><li><b>Augmente énormément</b> la vitesse de marquage d’un survivant quand vous vous inclinez depuis votre cachette.</li><li><b>Réduit énormément</b> la vitesse de marquage d’un survivant quand vous ne vous inclinez pas depuis une cachette.</li>","name":"« Ghost Face surpris en direct »","flavor":"« Dans ce film, on peut apercevoir une silhouette sombre entrer en pleine nuit dans une maison au nord de Roseville, en Floride. La police a reçu un appel le lendemain matin, l\'informant d’un meurtre dans la zone. Verrouillez vos portes, un meurtrier rôde dans le voisinage, au cœur de la nuit. » – La Gazette de Roseville","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"Une petite caméra de surveillance qui a saisi l\'effraction de Ghost Face dans une maison de Belleview Road au nord de Roseville. La caméra était parfaitement installée pour capturer un aperçu de Ghost Face sans fournir de preuves réelles à la police.<br><li>L\'aura de tous les survivants en dehors de votre rayon de terreur est révélée pendant 4 secondes quand un survivant marqué entre en état critique.</li>","name":"Caméra de sécurité extérieure","flavor":"« Une image vaut mille mots. » – Ghost Face","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"Chair de citrouille infectée par la terre putride de Hawkins.<li>Pendant la traversée du monde à l’envers, votre portail d’entrée est détruit. Gagnez 200 points de sang supplémentaires pour la traversée.</li>","name":"Citrouille pourrie","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"Une queue de rat caoutchouteuse dont s’alimente le Démogorgon.<li><b>Réduit légèrement</b> le temps requis pour ouvrir un portail.</li>","name":"Queue de rat","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"Un tas dégoulinant de foie moelleux salé.<li><b>Augmente légèrement</b> la vitesse de mouvement du tueur pendant la charge de <b>Né de l’abîme</b>.</li>","name":"Foie de rat","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"Un cœur noir fermenté arraché de la poitrine d’une créature à tentacules du monde à l’envers.<li><b>Augmente légèrement</b> la vitesse de récupération d’attaque de <b>Déchiqueter</b>.</li>","name":"Cœur noir","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"Des toiles humides et élastiques qui élargissent les tunnels inter-dimensionnels.<li><b>Augmente légèrement</b> le temps pris par les survivants pour sceller un portail.</li>","name":"Toile visqueuse","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"Une pellicule fétide et visqueuse qui recouvre les tunnels inter-dimensionnels.<li><b>Augmente modérément</b> le rayon dans lequel les survivants peuvent être détectés avec <b>Né de l’abîme</b>.</li>","name":"Revêtement gluant","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"Des tripes décomposées qui alimentent le Démogorgon.<li><b>Augmente légèrement</b> la vitesse de mouvement du tueur pendant qu’il traverse le monde à l’envers.</li>","name":"Tripes vertes décomposées","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"Les délicieux boyaux d’une pauvre victime.<li><b>Augmente</b> de <b>1</b> le nombre total de portails disponibles.</li><li><b>Augmente légèrement</b> la vitesse de récupération d’attaque ratée de <b>Déchiqueter</b>.</li>","name":"Boyaux de Miaou","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"Une paire de lunettes cassées qui ont voyagé dans le monde à l’envers.<li><b>Augmente légèrement</b> la vitesse de récupération de <i>Déchiqueter</i> en brisant une palette.</li>","name":"Lunettes de Barb","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"Un champignon à chair sombre du monde à l’envers qui permet au Démogorgon de fausser télépathiquement les sens de sa proie.<li><b>Augmente légèrement</b> la durée de l’<b>effet de statut Indétectable</b> appliqué au tueur quand il émerge d’un portail.</li>","name":"Bonnet cireux violet","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"D’épaisses plantes rampantes épineuses qui s’étendent partout dans les tunnels inter-dimensionnels et les renforcent.</li><li><b>Augmente légèrement</b> le temps pris par les survivants pour sceller un portail.<li><b>Augmente légèrement</b> le rayon dans lequel les survivants peuvent être détectés par <b>Né de l’abîme</b>.</li>","name":"Lianes épineuses","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"Une cannette de soda chargée d’énergie psychique.<li>Les générateurs en cours de réparation apparaissent avec une aura jaune pendant la traversée du monde à l’envers.</li>","name":"Soda de Onze","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"Un poumon caoutchouteux et à vif qui revigore le Démogorgon.<li><b>Augmente considérablement</b> la vitesse de mouvement du tueur pendant qu’il traverse le monde à l’envers.</li><li>Réduit le nombre de portails disponibles de <b>2</b>.</li>","name":"Poumon de biche","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"Un briquet utilisé pour faire des bêtises.<li>Les survivants sous l’effet d’un portail souffrent de l’effet de statut <b>Aveuglement</b>. Cet effet persiste pendant <b>60 secondes</b> après avoir perdu contact avec le portail.</li>","name":"Briquet en cuivre","flavor":"« Émet un puissant champ électromagnétique : cela doit avoir été en contact avec le monde à l’envers. » - Laboratoire national d’Hawkins","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"Un champignon vénéneux rouge vif du monde à l’envers.<li><b>Augmente modérément</b> la durée de l’effet de statut <b>Indétectable</b> appliqué au Démogorgon quand il sort d’un portail.</li>","name":"Petit bonnet vermillon","flavor":"« Nous poursuivons l’étude de ce spécimen. Jusqu’à présent nos résultats sont incohérents. » - Laboratoire national d’Hawkins","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"De la sève gluante inflammable qui renforce le portail vers les tunnels inter-dimensionnels.<li><b>Augmente modérément</b> le temps pris par les survivants pour sceller un portail.</li>","name":"Résine sens dessus dessous","flavor":"« Un échantillon pris sur l’arbre dissimulant un portail vers une autre dimension. Les études sur ses effets ne sont pas concluantes. » - Laboratoire national d’Hawkins","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"Un gros œuf chaud recouvert d’une sorte de toile répugnante.<li><b>Augmente considérablement</b>la vitesse de récupération de pouvoir de traversée du monde à l’envers.</li>","name":"Œuf inconnu","flavor":"« Un gros œuf a été aperçu dans le monde à l’envers, mais aucun échantillon n’a survécu au voyage de retour jusqu’au laboratoire pour être examiné. » - Laboratoire national d’Hawkins","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"Un sifflet en métal rouillé qui donnait autrefois le ton à l’école publique d’Hawkins.<li>Les survivants près de portails activés sont signalés par Instinct de tueur sans avoir à charger <b>Né de l’abîme</b>.</li>","name":"Sifflet de maître-nageur","flavor":"« Émet un puissant champ électromagnétique : cela doit avoir été en contact avec le monde à l’envers. » - Laboratoire national d’Hawkins","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"Une mousse psychédélique qui pousse sur l’écorce des arbres du monde à l’envers.<li>Pendant la traversée du monde à l’envers, le Démogorgon sort du portail cible en silence, mais plus lentement.</li><li><b>Augmente énormément</b> la durée de l’effet de statut <b>Indétectable</b> appliqué au Démogorgon quand il sort d’un portail.</li>","name":"Mousse rouge","flavor":"« Consommer ses feuilles amplifie les capacités athlétiques et provoque un effet euphorisant. » - Laboratoire national d’Hawkins","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"Un puissant lichen qui pousse comme du chiendent dans le monde à l’envers.<li><b>Révèle les auras</b> de tous les survivants pendant la traversée du monde à l’envers, et durant <b>3 secondes</b> après être sorti d’un portail.</li>","name":"Lichen lépreux","flavor":"« Une faible dose peut provoquer de violentes hallucinations. » - Laboratoire national d’Hawkins","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"Considérant ses objectifs purs et justes, Kazan portait une babiole pour repousser le mal qui tenterait de l’attirer.<li><b>Augmente légèrement</b> la vitesse d’absorption des orbes de sang.</li>","name":"Talisman Yakuyoke","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"Si la corde avait été plus solide, elle aurait pu contenir Kazan. Malheureusement, il est parvenu à s’échapper avant de massacrer ses ravisseurs.<li><b>Augmente légèrement</b> la distance de détection de l’aura des orbes de sang.</li>","name":"Corde en décomposition","flavor":"« Bien que la mort soit nette, il est du genre à sourciller. » - Doctrine de Renjiro 14:5 ","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"Une tasse de la cérémonie de mariage de Kazan, abîmée dès le premier soir.<li><b>Augmente légèrement</b> la vitesse de charge d’activation pour lancer <i>Fureur sanglante</i>.</li><li><b>Réduit légèrement</b> le temps de désactivation de <i>Fureur sanglante</i>.</li>","name":"Sakazuki fêlée","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"Chute à l’occasion d’une des centaines de randonnées hivernales au temple de Kazan. Malgré son pèlerinage, la jambe d’Akito n’a jamais guéri.<li><b>Augmente légèrement</b> la vitesse de mouvement en absorbant des orbes de sang.</li>","name":"Ongle de pied noirci","flavor":"« Si un père ne se sacrifie pas pour ses enfants, de qui est-il donc le père ? » - Doctrine de Renjiro 11:12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"Un cimier à cornes que Kazan a arraché de son casque après avoir été comparé à un démon.<li><b>Augmente légèrement</b> la vitesse de recharge passive de <i>Colère de Yamaoka<i>.</li>","name":"Maedate lustré","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"Une peinture à l’encre autrefois exposée dans la propriété Yamaoka, qui dépeint l’histoire d’un lion dévoré par des souris.<li><b>Augmente légèrement</b> la vitesse de charge d’activation pour lancer <i>Fureur sanglante</i>.</li><li><b>Réduit légèrement</b> le temps de désactivation de <i>Fureur sanglante</i>.</li><li><b>Réduit modérément</b> la pénalité de consommation de <i>Fureur sanglante</i> en abattant un survivant.</li>","name":"Lion à l’encre","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"Un bâton qui appartenait à Renjiro, dérobé par Kazan à son départ.<li><b>Augmente légèrement</b> la durée de <i>Fureur sanglante</i>.</li>","name":"Saihai ébréché","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"Épée d’entraînement d’Akito. L’enfant n’en avait aucune utilité après sa blessure.<li><b>Augmente modérément</b> la distance de détection de l’aura des orbes de sang.</li>","name":"Épée de bois d’enfant","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"Sang d’un garçon qui a traité Kazan de noble imposteur. Kazan a caché les preuves de la bagarre à son père et il se délecte souvent de l’écharpe en secret.<li><b>Augmente modérément</b> la vitesse de mouvement en absorbant des orbes de sang.</li>","name":"Écharpe sanglante","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"La bannière de la famille Yamaoka. Kazan en éprouvait une immense fierté.<li><b>Augmente modérément</b> la durée de <i>Fureur sanglante</i>.</li>","name":"Yamaoka Sashimono","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"Un masque acheté par le jeune Kazan pour fêter Setsubun. Son horrible gueule remplie de crocs commença à envahir ses cauchemars.<li><b>Augmente légèrement</b> la quantité d’orbes de sang lâchés par les survivants.</li>","name":"Masque d’Oni en bois","flavor":"« Ce n’est pas une coïncidence si cet homme s’y connaît autant en démons. » - Doctrine de Renjiro 3:8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"Les fragments d’une lame ancestrale, détruite par Kazan dans une crise de rage.<li><b>Augmente modérément</b> la vitesse de recharge passive de <i>Colère de Yamaoka</i>.</li>","name":"Wakizashi brisé","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"Le chignon d’un samouraï qui a osé remettre en question l’honneur de Kazan. Les racines s’accrochent à une fine bande de chair ensanglantée.<li><b>Augmente considérablement</b> la vitesse de charge d’activation pour lancer <i>Ruée démoniaque</i> quand <i>Fureur sanglante</i> est active.</li>","name":"Chignon scalpé","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"Une babiole offerte à Kazan à sa naissance. Ses pouvoirs sont censés protéger sa famille.<li><b>Augmente modérément</b> la vitesse de mouvement de <i>Ruée démoniaque</i> quand <i>Fureur sanglante</i> est active.</li>","name":"Talisman Kanai Anzen","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"Le mouchoir dans lequel la mère de Kazan pleurait quand il s’en alla pour son pèlerinage de purification du samouraï.<li><b>Réduit considérablement</b> la pénalité de consommation de <i>Fureur sanglante</i> en abattant un survivant.</li>","name":"Tenugui imbibé de larmes","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"L’épave du navire qui transportait Renjiro Yamaoka. Contre toute attente, le samouraï légendaire semble avoir survécu.<li><b>Augmente modérément</b> la quantité d’orbes de sang lâchés par les survivants.</li>","name":"Coque éventrée","flavor":"« Pour préparer un subterfuge, n’écoutez que vous. » - Doctrine de Renjiro 7:9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"Une dent achetée à un vendeur de curiosités, elle symbolise la puissance et la noblesse.<li><b>Augmente considérablement</b> la durée de <i>Fureur sanglante</i>.</li>","name":"Croc de lion","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"La béquille utilisée par le fils de Kazan après sa chute d’un arbre. Le camarade d’Akito et sa famille furent punis pour la blessure du garçon.<li><b>Augmente considérablement</b> la vitesse de mouvement de <i>Ruée démoniaque</i> quand <i>Fureur sanglante</i> est active.</li>","name":"Béquille d’Akito","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"Le gant que Renjiro maintenait sur son sternum après avoir été frappé par son fils.<li>Tous les survivants peuvent voir les orbes de sang.</li><li>Quand un survivant entre en contact avec un orbe de sang, il l’absorbe et le tueur peut alors voir son aura pendant <b>2 secondes</b>.</li><li>Cet effet est cumulable pour chaque orbe de sang absorbé.</li>","name":"Gant sanglant de Renjiro","flavor":"« Quand tout le reste échoue, accrochez-vous à votre honneur. » - Doctrine de Renjiro 14:12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"Un blason qui indique que son porteur appartient à la famille Yamaoka.<br><li>Tant que <i>Fureur sanglante</i> est active, rater un <i>Coup démoniaque</i> fera crier tous les survivants dans un <b>rayon de 12 mètres</b> et vous révèlera leur position actuelle.</li>","name":"Blason de famille irisé","flavor":"« Apprenez à vous connaître pour protéger votre cœur » - Doctrine de Renjiro 11:2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"Un morceau de toile crasseux. Un peu de salive et d’huile de coude ont suffi à nettoyer le fusil harpon dans le feu d’une fusillade.<li><b>Réduit légèrement</b> le temps de récupération du fusil harpon.</li>","name":"Tissu d\'astiquage ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"Une teinture d’huiles et d’extraits censée soigner tous les maux, achetée à un vendeur ambulant.<li><b>Augmente légèrement</b> la vitesse de moulinet du fusil harpon.</li>","name":"Poudre de perlimpinpin ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"Des maillons d’acier peu résistants, utilisés sur le prototype de fusil harpon de Caleb. Malgré les défauts de sa chaîne, sa valeur sentimentale est immense.<li>Octroie <b>50 %</b> de points de sang bonus pour les événements à score <i>Harponné</i>.</li><li>Les survivants se libèrent plus facilement.</li>","name":"Chaîne fragile","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"Une vieille ceinture à munitions modifiée par Caleb pour son armement spécialisé. Elle est encore couverte de la fine poussière rouge du désert du Territoire de l’Arizona.<li><b>Augmente légèrement</b> la vitesse de recharge du fusil harpon.</li>","name":"Ceinture à munitions modifiée ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"Un crampon de chemin de fer fixé par Caleb à l’avant du fusil harpon dans un moment de curiosité morbide. Sa pointe émoussée l’empêche de transpercer proprement sa cible.<li>Frapper un survivant harponné lui inflige l’effet de statut <b>Estropiement</b>.</li>","name":"Crampon rouillé ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"Une plante d’apparence ordinaire. Caleb a découvert que les lances enduites de son huile infligent des boursouflures insupportables autour des blessures.<li><b>Augmente légèrement</b> le temps de suture du survivant quand il est affecté par l’effet de statut <b>Blessure profonde</b>.</li>","name":"Feuilles de sumac de l\'Ouest","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"Un insigne en argent pris sur le cadavre d’un policier qui chercha à toucher les primes du gang de Hellshire sur le Territoire de l’Arizona.<li><b>Réduit modérément</b> le rayon de terreur en ciblant à l’aide du viseur du fusil harpon.</li><li><b>Réduit légèrement</b> la vitesse de mouvement en ciblant à l’aide du viseur du fusil harpon.</li><span class=\\"FlavorText\\">« Fais tes prières, tu pendras au bout d’une corde à midi pile. » - Caleb Quinn</span>","name":"Insigne de Marshal ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"La balle qui traversa la mâchoire de Caleb pendant une fusillade frénétique. Elle lui rappelle son désir brûlant de vengeance.<li><b>Augmente légèrement</b> la vitesse de mouvement en ciblant à l’aide du viseur du fusil harpon.</li><span class=\\"FlavorText\\">« Tu as invité la mort à te rendre visite dès que tu m’as fait du tort. » - Caleb Quinn</span>","name":"Casseur de mâchoires ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"Une boîte de feuilles de tabac, découpées et adoucies, prise sur un cadavre éventré à Glenvale. Stimule le système nerveux.<li><b>Réduit modérément</b> la durée d’étourdissement quand un survivant se libère d’un harpon.</li>","name":"Tabac à mâcher","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"Pour Caleb, le cliquetis sourd des clés évoque de violents souvenirs.<li><b>Augmente modérément</b> la vitesse de recharge du fusil harpon.</li>","name":"Clés du directeur ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"Les restes jaunis d\'un avis de recherche au nom de Mason Kelly, qui a permis à Caleb de rester concentré sur sa traque.<li><b>Augmente modérément</b> la vitesse de mouvement en ciblant à l\'aide du viseur du fusil harpon.</li><span class=\\"FlavorText\\">« L\'addition va être salée, je le jure sur la tombe de ma mère. » - Caleb Quinn</span>","name":"Avis de recherche ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"Un bidon contenant une faible quantité d’huile pour réduire la friction de la machinerie. Les premiers modèles du fusil harpon s’enrayaient facilement, et l’huile devait être à portée de main.<li><b>Réduit modérément</b> le temps de récupération du fusil harpon.</li>","name":"Bidon d\'huile ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"Énervé d’avoir laissé filer une prime à deux reprises, Caleb façonna des branches d’épineux en une lance qu’il planta au sol.<li>Les survivants qui se libèrent d’un harpon souffrent de l’effet de statut <b>Estropiement</b>.</li>","name":"Épines de févier épineux ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"Une dent en or arrachée à Henry Bayshore pendant qu’il demandait grâce, plusieurs heures avant qu’il ne soit achevé.<li><b>Augmente modérément</b> la vitesse de moulinet du fusil harpon.</li><span class=\\"FlavorText\\">« Tu dois apprendre à connaître ta place, mon garçon. » - Henry Bayshore</span>","name":"Dent en or de Bayshore","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"Une lourde chaîne épaisse terminée par un boulet d’acier et qui enserrait autrefois la cheville de Caleb. Elle peut désormais être fixée à une lance.<li><b>Augmente considérablement</b> les charges requises pour qu’un survivant se libère d’une lance.</li><span class=\\"FlavorText\\">« Tout codétenu qui travaille hors de la cour de la prison doit être lesté d’un boulet d’acier d’au moins 9 kilos. » - Livret des gardiens du pénitentiaire de Hellshire</span>","name":"Chaîne de prison","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"Le chaud réconfort d’une bouteille qui apaisa la colère de Caleb et ralentit son allure.<li><b>Réduit modérément</b> le rayon de terreur en ciblant à l’aide du viseur du fusil harpon.</li><li><b>Réduit modérément</b> la vitesse de mouvement en ciblant à l’aide du viseur du fusil harpon.</li><span class=\\"FlavorText\\">« Le doux goût de la beauté sauvage de la Frontière » - Publicité de Gold Creek, 1876</span>","name":"Bourbon Gold Creek","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"Un excellent cigare, piqué dans la veste du patron de Caleb pendant qu’il hurlait à cause de la lance logée dans son abdomen.<li><b>Réduit considérablement</b> la durée d’étourdissement quand un survivant se libère d’une lance.</li><span class=\\"FlavorText\\">« Ne pointe pas ça vers moi, espèce de demeuré. » - Henry Bayshore</span>","name":"Cigare de Bayshore","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"De l’acier flexible américain bordé de pointes coupantes. Malgré sa simplicité, Caleb a découvert qu’il pouvait l’enrouler autour d’une lance pour augmenter sa brutalité.<li><b>Augmente modérément</b> le temps de suture du survivant quand il est affecté par l’effet de statut <b>Blessure profonde</b>.</li></li><span class=\\"FlavorText\\">« Bientôt, il n’y aura plus rien à craindre. En attendant, tu peux avoir peur de moi. » - Caleb Quinn</span>","name":"Fil barbelé","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"Une pièce ressemblant à du verre, moulée à partir de la Brume elle-même. Paiement aux chasseurs de primes pour les services rendus.<li>Les survivants harponnés à au moins <b>15 mètres</b> de distance souffrent de l’effet de statut <b>À découvert</b> tant qu’ils restent harponnés.</li><span class=\\"FlavorText\\">« Les accords passés par désespoir se paient par la folie. »</span>","name":"Pièce irisée","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"Le fer à marquer du gang de Hellshire. En dépit du folklore, il n’a jamais été appliqué sur les nouveaux membres, par contre il a servi à marquer les primes les plus récalcitrantes.<li>Tant qu’un survivant est harponné, l’aura de tous les survivants dans votre rayon de terreur vous est révélée.</li><span class=\\"FlavorText\\">« Le gang de Hellshire : justiciers ou hors-la-loi ? » - Titre de la Gazette de Glenvale</span>","name":"Fer de Hellshire","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"Trouvé dans un réfrigérateur, un visage bouffi répugnant est gravé dessus.<li><b>Augmente légèrement</b> la durée des pistes des <b>Rites du jugement</b> dans l’environnement.</li>","name":"Anneau d’étain ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"Trouvé sur un lit dans les appartements Woodside, un papillon fragile et qui risque de tomber en morceaux au moindre contact.<li><b>Augmente légèrement</b> la vitesse de recharge des <b>Rites du jugement</b>.</li>","name":"Papillon mort ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"Trouvée dans la cave de l’hôpital Brookhaven, un dessin d’araignée est gravé dessus.<li><b>Augmente légèrement</b> le nombre de fois total où les <b>Rites du jugement</b> peuvent être effectués.</li>","name":"Anneau de cuivre ","flavor":"« J’étais enfermée dans le sous-sol du sous-sol. J’y étais tellement à l’étroit et il y faisait si sombre... j’avais si peur. J’ai perdu ma bague chérie. Mais je n’y retournerai jamais plus. »","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"Une sangle en nylon utilisée pour retenir une victime à une structure en métal. Il est difficile de distinguer le sang qui la recouvre en raison de sa couleur.<li><b>Augmente légèrement</b> la portée de <b>Châtiment des damnés</b>.</li>","name":"Sangle noire ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"Une poupée de cire sculptée à la main par un prisonnier qui affronterait bientôt son verdict.<li><b>Augmente modérément</b> la portée de <b>Châtiment des damnés</b>.</li>","name":"Poupée de cire ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"La pointe rouillée affilée d’une lance, souillée du sang de sa dernière victime.<li><b>Augmente légèrement</b> le nombre total de fois où les <b>Rites du jugement</b> peuvent être effectués.</li>","name":"Fer de lance ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"Un morceau de tissu rose à imprimé léopard. Difficile de savoir ce à quoi il a pu servir.<li><b>Augmente légèrement</b> la durée d’<i>Instinct de tueur</i> suite à une activation par <b>Rites du jugement</b>.</li>","name":"Tissu à imprimé léopard  ","flavor":"« Peu importe qui je suis, je suis là pour toi, James. » - Maria","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"Une cassette vidéo de deux amants en vacances à Silent Hill. Malgré sa valeur sentimentale, elle a été laissée à l’hôtel Lakeview.<li><b>Augmente modérément</b> la vitesse de recharge des <b>Rites du jugement</b>.</li>","name":"Cassette vidéo oubliée ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"Une boîte à musique avec un personnage du conte de Cendrillon. Trouvée à l’intérieur d’une valise décorée d’autocollants de multiples destinations.<li><b>Augmente modérément</b> la durée des pistes des <b>Rites du jugement</b> dans l’environnement.</li>","name":"Boîte à musique « Cendrillon » ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"La photographie de deux silhouettes vêtues de capuches rouges intitulée Banquet cramoisi et blanc en l’honneur des Dieux.<li><b>Augmente considérablement</b> la vitesse de recharge des <b>Rites du jugement</b>.</li>","name":"Photographie de la secte de Valtiel ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"Une tablette en métal sur laquelle sont gravées des représentations aztèques.<li><b>Augmente considérablement</b> le nombre total de fois où les <b>Rites du jugement</b> peuvent être effectués.</li>","name":"Tablette de l’Oppresseur ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"La peinture d’une silhouette imposante qui porte une pyramide d’acier sur la tête. En arrière-plan, des victimes sont enfermées dans des cages.<li><b>Augmente modérément</b> la durée d’<i>Instinct de tueur</i> suite à une activation par <b>Rites du jugement</b>.</li>","name":"Jour de brume, restes du Jugement ","flavor":"« C’est lui... »","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"Le pied gris et lisse d’un mannequin, brutalement arraché de sa jambe.<li><b>Augmente considérablement</b> la durée des pistes des <b>Rites du jugement</b> dans l’environnement.</li>","name":"Pied de mannequin ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"Un schéma de l’hôtel Lakeview. Des flammes rouges sont peintes sur ce lieu empli de culpabilité.<li><b>Augmente considérablement</b> la portée de Châtiment des damnés.</li>","name":"Peinture de l’homme en feu ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"Un œuf frais rouge de la taille approximative d’un œuf de caille.<li><b>Augmente considérablement</b> la durée d’<i>Instinct de tueur</i> suite à une activation par <b>Rites du jugement</b>.</li>","name":"Œuf écarlate ","flavor":"« Je n’ai jamais eu aussi peur de toute ma vie ! Tu te fichais complètement de moi... n’est-ce pas ? » - Maria","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"De couleur orange rougeâtre, cet œuf de la taille approximative d’un œuf de caille semble vieux.<li>Les survivants affectés par <b>Rites du jugement</b> souffrent de l’effet de statut <b>Aveuglement</b> pendant <b>60 secondes</b>.</li>","name":"Œuf couleur rouille ","flavor":"« James... Tu m’as rendue heureuse. » - Mary","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"Parle de l’histoire, des légendes de Silent Hill et des environs.<li>Les survivants affectés par <b>Rites du jugement</b> souffrent de l’effet de statut <b>Inconscient</b> pendant <b>15 secondes</b>.</li><span class=\\"FlavorText\\">« Ils appellent cet endroit le Refuge des âmes muettes. »</span>","name":"Livre « Souvenirs perdus » ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"Un livre sur un dieu ancien, d’un auteur inconnu.<li>Les survivants blessés affectés par <i>Tourment</i> souffrent de l’effet de statut <b>Hémorragie</b>.</li>","name":"Livre « Cérémonie Crimson » ","flavor":"« Parle. Je suis le grand Crimson. Maître du mensonge et du brouillard. »","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"Une coupe d’aspect ancien, en obsidienne pure.<li><b>Le Bourreau</b> gagne l’effet de statut <b>Indétectable</b> quand il se trouve sur une piste des <b>Rites du jugement</b>.</li>","name":"Coupe en obsidienne ","flavor":"« Pardon de t’avoir réveillé. Mais sans toi, je n’ai plus envie de vivre. » - James Sunderland","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"Un talisman gravé d’un motif étrange. L’influence de l’Entité semble l’avoir altéré.<li>Lorsque vous envoyez un survivant dans une <b>Cage d’expiation</b>, l’aura de tous les survivants souffrant de <i>Tourment</i> est révélée pendant <b>6 secondes</b>.</li>","name":"Sceau de Métatron iridescent ","flavor":"« Ce carré magique aux puissantes propriétés protectrices et de dissipation est connu comme l’Emblème Virun VII ou Sceau de Métatron. »","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Une pilule complètement inefficace... ou pas ?<br><br><li><b>Diminue modérément</b> la vitesse lors d’une Ruée.</li><li>Gagne <b>100%</b> plus de points de sang sur les évènements de Ruées.</li> ","name":"Comprimé placebo ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"Une plante toxique qui a éveillé l’intérêt de Talbot pour la chimie. Elle ravive des souvenirs profondément enfouis.<br><br><li><b>Augmente légèrement</b> la vitesse de rétablissement après une Ruée.</li>","name":"Digitale ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"Cet échantillon des premiers jours ne put atteindre les résultats espérés mais démontra néanmoins des effets surprenants.<br><br><li>Fait automatiquement face au survivant le plus proche après un Impact dans un rayon de <b>16 mètres</b>.</li>","name":"Composé n° 7 ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"Un monocle très peu utilisé par Talbot malgré sa vue faiblissante ces dernières années.<br><br><li>Indique l’emplacement cible d’un Impact.</li>","name":"Monocle ébréché","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"Ce qu’il reste des notes de Talbot... Elles renferment encore de précieuses informations.<br><br><li><b>Réduit</b> la quantité de jetons de Ruée de <b>1.</b></li><li><b>Augmente modérément</b> la régénération de jetons.</li>","name":"Notes déchirées ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"Pétales de pustulas séchés broyés en une fine poussière.<br><br><li><b>Augmente modérément</b> la durée d’Impact.</li>","name":"Poussière de pustulas ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"Un échantillon de la bile du Fléau, distillé et traité à l’aide d’un mélange de substances chimiques.<br><br><li><b>Augmente légèrement</b> la rotation lors d’une Ruée.</li>","name":"Bile du Fléau","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"Une épine de belle taille, arrachée d’un ulcère viscéral et qui sécrète une légère toxine.<br><br><li><b>Augmente modérément</b> la vitesse de rétablissment après une Ruée.</li> ","name":"Ronce d’ulcère","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"Un rat qui a brièvement repris vie après une injection de sérum, devenant alors agressif et incontrôlable.<br><br><li><b>Augmente modérément</b> la vitesse de chaque Ruée consécutive.</li>","name":"Rat du Fléau ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"Du sel de mer normal qui a traversé le monde des esprits pendant un instant, ce qui a altéré ses propriétés.<br><br><li><b>Augmente modérément</b> la vitesse de rotation pendant une Ruée.</li>","name":"Sels des ombres ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"Un mélange composé des roses séchées de l\'extrêmement rare Bouquet de nouvelle lune.<br><br><li><b>Augmente considérablement</b> la durée d’Impact.</li>","name":"Tonifiant aux roses ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"Un sérum, mortel pour les humains, qui éveille des qualités bénéfiques chez ceux qui sont... différents.<br><br><li>Lors d’un Impact, révèle l’aura des survivants jusqu\'à <b>8 mètres</b> du point de collision pendant <b>3 secondes</b>.</li>","name":"Composé n° 21 ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"Un corbeau mort aux mutations grotesques provoquées par le sérum du Fléau.<br><br><li><b>Augmente considérablement</b> la vitesse de chaque Ruée consécutive.</li> \\n","name":"Corbeau du Fléau ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"Une hormone extraite de la glande surrénale d’un sujet réticent. Bien qu’elle fournisse une poussée d’énergie, elle peut fatiguer son utilisateur.<br><br><li><b>Réduit énormément</b> la rotation durant une Ruée.</li><li><b>Augmente énormément</b> la régénération de jetons de Ruée. </li><li><b>Augmente</b> la quantité de jetons de Ruée de <b>2.</b></li><li><b>Augmente considérablement</b> l’angle maximal de vue lors d’une Ruée.</li><br>","name":"Fiole d’adrénaline ","flavor":"« S’il vous plaît, ne faites pas ça... »","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"Le journal d’un homme qui affirmait être revenu du Néant. Les informations qu’il contient ont des applications pratiques.<br><br><li>Gagnez l’effet de statut <b>Indétectable</b> pendant une Ruée.</li><br>","name":"Journal de Vigo ","flavor":"« Au milieu d’un désert de rêves oubliés et de routine perpétuelle, l’homme avec une échappatoire est un dieu. » - Talbot Grimes","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"Talbot a utilisé cette pierre pour graver ce qu’il pensait être ses recherches sur les murs de la fumerie d’opium.<br><br><li>Frapper un survivant avec une Ruée mortelle invoque l’Entité pour bloquer les palettes dans un rayon de <b>12 mètres</b> autour de votre position pendant <b>6 secondes</b>.</li><br>","name":"Pierre d’invocation ","flavor":"« La mort n’est que le commencement. »","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"Une substance chimique tirée de la glande pinéale d’un survivant récemment décédé.<br><br><li>Pendant une Ruée, quand vous entrez dans le rayon de <b>16 mètres</b> d’un survivant en train de réparer ou soigner, vous déclenchez pour ce dernier un test d’habileté d’une difficulté <b>énorme</b>. Peut être activé une fois par survivant par Ruée. Ne se déclenche pas suite à une Ruée qui commence à moins de <b>16 mètres</b> du survivant.</li><br>","name":"Substance d’âme ","flavor":"« ... soupçonné de provoquer des altérations atypiques de l’activité rythmique neuronale. » - Mystérieux travail d’études non attribué","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"Un anneau donné aux chimistes diplômés de l’école de médecine de Londres... C\'est un rappel de l\'ambition sans frein.<br><br><li>Frapper une victime lors d’une Ruée mortelle recharge instantanément tous les jetons de Ruée.</li><br>","name":"Anneau d’alchimiste ","flavor":"« L’étudiant est accusé de pillage de tombes dans le but d’effectuer des tests scientifiques non autorisés. » — Réprimande de Talbot Grimes, 1838","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"Une étiquette de laboratoire ressemblant à du verre, moulée à partir de la Brume elle-même. Cadeau de l’Entité ou cruelle plaisanterie pour marquer le Fléau comme il le faisait lui-même aux autres autrefois.<br><br><li>Après avoir utilisé tous les jetons de Ruée, votre dernière Ruée mortelle met le survivant en État critique.</li><br>","name":"Étiquette irisée du Fléau","flavor":"« Le progrès requiert des changements drastiques. » —Talbot Grimes","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"Avant-dernière tentative de Talbot pour concevoir un sérum. Même s’il n\'a pas facilité sa fuite, il infligeait de puissants effets secondaires.<br><br><li>Tout Survivant dans un rayon de <b>16 mètres</b> d’un Impact souffrira de l’effet de statut <b>Entrave</b> pendant <b>3 secondes</b>.</li><li>Effectuer une Ruée sur une palette ou un mur destructible le brisera et étourdira le Fléau durant <b>1.5 secondes.</b></li><br>","name":"Composé n° 33 ","flavor":"« Le temps manque. Espérons que ça marche cette fois... » - Talbot Grimes","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"Une épée en bois minuscule, de quelques centimètres. Quand il la brandissait, Victor était pris d’un violent enthousiasme.<br><br><li><b>Réduit légèrement</b> le temps de charge de Bond.</li>","name":"Épée de bois","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"Charlotte avait plusieurs manières de pleurer la mort de Victor. Quand ses ongles commencèrent à tomber de ses mains pourrissantes, elle en conserva un en souvenir.<br><br><li><b>Réduit modérément</b> le temps nécessaire pour que Victor se sépare de Charlotte.</li>","name":"Petit ongle","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"Une bouteille métallique remplie de lait, tourné depuis belle lurette. Aussi bruyant qu’il pût être, Victor se taisait dès qu’on lui offrait ça à manger.<br><br><li><b>Augmente légèrement</b> le rayon des cris de Victor.</li>","name":"Lait tourné","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"Une figurine en bois qui a attiré l’attention de Victor. Il a hurlé jusqu’à ce que sa mère la dérobe sur le marché, manquant de peu de les faire prendre.<br><br><li>Indique l’emplacement cible d’un Bond.</li>","name":"Figurine de chat","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"Un gant qui appartenait autrefois à la mère des Jumeaux. Lors des moments les plus désespérés, elle l’appliquait sur la bouche de Victor pour l’empêcher de faire le moindre bruit.<br><br><li><b>Augmente modérément</b> le rayon des cris de Victor.</li>","name":"Gant de Madeleine","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"Le candélabre que Victor a renversé, mettant le feu à ses ravisseurs. Un symbole de sa ténacité.<br><br><li><b>Augmente légèrement</b> le temps dont a besoin un survivant pour écraser Victor.</li>","name":"Candélabre cérémoniel","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"Un globe oculaire qui avait appartenu à un chat dévoré par la famille Deshayes complètement affamée. Victor l’avait caché à sa mère et il l’utilisait comme un jouet.<br><br><li>Les cris de Victor cessent quand Bond est complètement chargé.</li>","name":"Œil de chat","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"La capuche d’un des hommes qui chassaient Charlotte. Il est très vite devenu sa proie.<br><br><li><b>Réduit légèrement</b> le temps dont a besoin Charlotte pour sortir de son état de sommeil.</li>","name":"Capuche noire sanglante","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"Deux dents que Victor a perdues depuis longtemps. Elles sont incroyablement tranchantes.<br><br><li>Les survivants qui se débarrassent de Victor souffrent de l’effet de statut <b>Aveuglement</b> pendant <b>15 secondes.</b></li>","name":"Dents de bébé","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"Un hochet mal taillé pour lequel Victor a pleuré jusqu’à ce que sa mère le vole. Beaucoup trop lourd pour le confier à un enfant.<br><br><li>Les survivants qui se débarrassent de Victor souffrent de l’effet de statut <b>Brisé</b> pendant <b>20 secondes.</b></li> ","name":"Hochet lourd","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"Un biscuit sans levain tout dur que Madeleine a dérobé sur le marché d’un village. Ce n’était pas grand-chose, mais c’était déjà bien mieux que la plupart de ses repas.<br><br><li><b>Réduit légèrement</b> le temps de recharge de Bond.</li>","name":"Biscuit rassis","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"Une mixture gluante répugnante qui a recouvert les Deshayes quand ils se sont enfuis par les égouts de la ville.<br><br><li><b>Augmente légèrement</b> le temps requis par un survivant pour se débarrasser de Victor.</li>","name":"Vase des égouts","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"Aiguille rouillée","name":"Aiguille rouillée","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"Un vêtement porté par Madeleine peu avant sa mort. Les Jumeaux l’ont conservé en souvenir.<br><br><li><b>Augmente légèrement</b> la vitesse de Victor.</li><br>","name":"Écharpe de Madeleine","flavor":"« ... doit donc par la présente être considéré comme un service rendu à l’intérêt général et pour l’extermination du mal. » — Enquête sur la mort de Madeleine Deshayes","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"Un soldat, jouet auquel Victor s’accrochait quand il avait peur. Pour une raison qu’elle ignore, Charlotte éprouvait de la jalousie quand elle le voyait.<br><br><li>Si un survivant écrase Victor quand il est inoccupé, son aura est révélée pendant <b>6 secondes.</b></li><br>","name":"Petit soldat de Victor","flavor":"« Tu... tu... er... méc... cha... » — Victor Deshayes","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"Une toupie en bois appartenant aux Jumeaux, mais Victor l’a toujours voulue rien que pour lui. Il a découvert qu’il pouvait avoir tout ce qu’il voulait s’il s’y accrochait suffisamment en criant.<br><br><li>Les survivants lâchent les objets qu’ils transportent lorsque Victor leur saute dessus.</li><br>","name":"Toupie","flavor":"« Chut... chut... c’est pour toi. » — Charlotte Deshayes","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"Un potage de légumes sauvages assortis à de la mousse et de l’écorce pour simuler une sensation d’abondance.<br><br><li><b>Augmente modérément</b> la vitesse de Victor.</li><br>","name":"Potage des bois","flavor":"« Mange... mange, mon enfant. Tu te sentiras mieux après avoir avalé. » — Madeleine Deshayes","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"L’un des rares luxes que Madeleine a réussi à emporter dans sa fuite. Son parfum est agréable et désarmant.<br><br><li>Les survivants dans le rayon des cris de Victor souffrent de l’effet de statut <b>Inconscient</b>.</li><br>","name":"Goutte de parfum","flavor":"« Méfiez-vous des perfides sorcières, qui abusent de la bonté du cœur des hommes. » — Histoire des sorcières et des démons (1602)","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"Un bout de tissu rêche que Charlotte se mettait dans la bouche quand elle avait cinq ans. Pratique pour l’empêcher de crier quand les chasseurs de sorcières étaient proches.<br><br><li>Charlotte bénéficie de l’effet de statut <b>Indétectable</b> pendant <b>20 secondes</b> après s’être réveillée de son état d’inoccupation.</li><br>","name":"Bâillon","flavor":"« Ce jeu ne me plaît plus, maman... » — Charlotte Deshayes","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"Un pendentif ressemblant à du verre modelé à partir de la brume. Il arbore un portrait pour le moins perturbant de Madeleine Deshayes.<br><br><li>Si un survivant écrase Victor quand il est inoccupé, il souffre de l’effet de statut <b>À découvert</b> pendant <b>30 secondes.</b></li><br>","name":"Pendentif irisé","flavor":"« Votre lien n’est pas une malédiction, mes amours. C’est une force dans laquelle vous devez puiser. » — Madeleine Deshayes","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"Un sac aux nombreuses poches secrètes. Utilisé par les magiciens en herbe et par ceux qui ont quelque chose à cacher.<br><li><b>Augmente</b> de <b>10</b> le maximum de lames portées.</li><li>Commencez la partie avec <b>10</b> lames supplémentaires.</li>","name":"Sac à malice","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"Couteaux rouillés, usés d\'avoir trop servi. Utilisés au cours des premiers meurtres de Ji-Woon, ils sont chers à son cœur.<br><li>Gagnez <b>100 %</b> de points de sang bonus pour les événements à score <b>Succès fou</b>.</li><li><b>Augmente modérément</b> la jauge de Lacération de chaque survivant.</li>","name":"Lames souvenirs","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"Une suite d\'accords avec laquelle Ji-Woon n\'a jamais créé de chanson. Mais elle sonne vraiment bien.<br><li><b>Augmente légèrement</b> la vitesse de mouvement en lançant les lames.</li>","name":"Accords de partition mortels","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"Câbles brûlés provenant de l\'incendie du studio qui coûta la vie à quatre des cinq membres des NO SPIN. Leur mort a donné naissance au Farceur.<br><li><b>Augmente légèrement</b> la durée d\'Événement principal.</li>","name":"Câbles infernaux","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"Une boisson créée dans un modeste bar de Changwon. Ji-Woon en a fait sa favorite.<br><li><b>Augmente modérément</b> la durée d\'Événement principal.</li>","name":"Tequila sélénite","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"Un single underground produit par Ji-Woon avant qu\'il ne devienne célèbre. Seuls les plus grands fans des NO SPIN possèdent cette perle rare.<br><li><b>Augmente légèrement</b> la durée avant que la jauge de Lacération ne commence à diminuer.</li>","name":"Lancer précis","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"Le premier couteau de lancer jamais possédé par Ji-Woon. Son père l\'avait acheté, car il voulait qu\'il monte avec un spectacle pour les clients du restaurant familial.<br><li><b>Augmente légèrement</b> la durée de la baisse de la jauge de Lacération de chaque survivant, une fois à court de lames.</li>","name":"Lame porte-bonheur","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"L\'autographe de la star nommée le Farceur. Même si son poignet était douloureux après en avoir écrit des centaines, il trouvait vivifiant de se savoir aussi demandé.<br><li><b>Augmente légèrement</b> la cadence initiale de lancer de lames.</li>","name":"Autographe de Ji-Woon","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"Chaussures que portait Ji-Woon dans le clip de One Caged Heart. Permet des mouvements de danse fluides et gracieux sur les pointes.<br><li><b>Augmente modérément</b> la vitesse de mouvement en lançant des lames.</li>","name":"Chaussures One Caged Heart","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"Une montre-gousset portée par Ji-Woon durant la performance en direct de I\'ll Be Waiting for You. C\'est un accessoire de scène qui n\'a jamais fonctionné et qui ne fonctionnera jamais.<br><li><b>Augmente considérablement</b> la durée de la baisse de la jauge de Lacération, une fois à court de lames.</li>","name":"Montre Waiting for You","flavor":"« Don’t run away<br>Don’t say we’re through<br>No way to escape this<br>I’ll be waiting for you »<br>— « I’ll Be Waiting for You » des NO SPIN","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"Un protège-poignet porté par Ji-Woon durant le tournage du clip de Ripper. Bien que ça ne soit pas volontaire, sa conception stabilise l\'articulation bien mieux que de nombreuses attelles de poignet.<br><li><b>Augmente modérément</b> la durée avant que la jauge de Lacération ne commence à diminuer.</li>","name":"Protège-poignet de Ripper","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"Un enregistrement audio des hurlements très clairs d\'une victime. Ji-Woon les a intégrés à un de ses morceaux les plus populaires.<br><li><b>Réduit modérément</b> la jauge de Lacération de chaque survivant.</li>","name":"Meurtre mélodieux","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"Une canette de soda en édition limitée pour la promotion des NO SPIN. Forte concentration en sucre et caféine.<br><li><b>Augmente modérément</b> la cadence initiale de lancer.</li>","name":"Soda Fizz-Spin","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"Un boa que Ji-Woon a enroulé autour de la gorge tranchée d\'une victime. Il dissimule plusieurs poches secrètes.<br><li><b>Augmente</b> de <b>15</b> le maximum de lames portées.</li><li>Commencez la partie avec <b>15</b> lames supplémentaires.</li>","name":"Boa sanglant","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"Lames spéciales que seuls ceux qui manquent d\'imagination trouvent défectueuses. Dans sa jeunesse, Ji-Woon éblouissait les spectateurs avec ses tours.<br><li>Les lames ricochent deux fois sur l\'environnement. </li><li>Les impacts de ricochet octroient des points de sang bonus.</li>","name":"Lames truquées","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"Le premier album du Farceur. Le ton âpre et cruel a reçu un accueil des fans en demi-teinte, en dépit des louanges de la critique.<br><li>Les lames se brisent en heurtant l\'environnement, infligeant <b>50 % de Lacération</b> aux survivants à proximité.</li>","name":"Album Edge of Revival","flavor":"« Your whisper on me<br>Warm as can be<br>Burning each breath<br>Till I can’t breathe »<br>— « Whispers of Warmth » du Farceur","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"Boutons de manchette enfoncés dans les orbites d\'un fan sasaeng qui a commis l\'erreur de harceler Ji-Woon. Si l\'on en essuie le sang, leur scintillement en révèle beaucoup.<br><li>Quand la jauge de Lacération d\'un survivant est à un coup de lame de son maximum, son aura est révélée pendant <b>6 secondes</b>.</li>","name":"Boutons de manchette en diamant","flavor":"« Chuuut... Comme ça, tu ne vois plus ton sang. » —Ji-Woon Hak","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"Le premier single des NO SPIN après que Ji-Woon a rejoint leurs rangs. Il a fait un tabac au hit-parade coréen.<br><li>Les lames transpercent les survivants.</li><li>Les survivants suivants touchés par la même lame subissent <b>50 % de lacération</b>.</li>","name":"Single Cut Thru U","flavor":"« Can\'t stop this love<br>That\'s tearing your heart<br>Wherever you go<br>I will cut you apart »<br>— « Cut Thru U » des NO SPIN","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"Une photo, ressemblant à du verre et moulée à partir de la Brume elle-même. Les yeux de Ji-Woon brillent d’un effet holographique sur son visage grimaçant.<br><li>Quand la jauge de Lacération est à un coup de lame de son maximum, le survivant subit l’effet de statut <b>À découvert</b>.</li>","name":"Photo irisée","flavor":"« Vas-y, hurle mon nom. Que je perçoive tout ce que la douleur éveille... » — Ji-Woon Hak","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"Une collection des derniers sons émis par les victimes de Ji-Woon, maintenant sur disque vinyle. Terrifiant et à l\'émotion brute.<br><li>La Lacération infligée par les lames se base sur la proximité de la cible, avec un seuil de départ de <b>50 %</b>.</li><li>Chaque impact de lame augmente la lacération jusqu\'à un maximum de <b>200 %</b>.</li><li>Dès qu\'une lame rate sa cible, Lacération retombe à sa valeur initiale.</li>","name":"Compilation d\'agonies mortelles","flavor":"« Pitié, non... ne me faites pas souffrir... Je ne... Je... » — Voix non identifiée","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"Un bracelet électronique d’Umbrella pour les visiteurs de ses infrastructures. Sert également de dispositif de suivi.<li><b>Augmente modérément</b> la portée de détection des zombies.</li>","name":"Bracelet de visiteur","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"Un manuel qui compile les techniques de combat rapproché du S.T.A.R.S., annoté par Chris Redfield.<li>L’aura des zombies devient jaune pendant <b>6 secondes</b> après avoir frappé un survivant.</li>","name":"Manuel de combat du S.T.A.R.S.","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"Équipement médical qui a peu servi quand le chaos a envahi Raccoon City.<li><b>Augmente modérément</b> le temps requis par les survivants pour s’injecter le vaccin.</li><li><b>Augmente légèrement</b> la durée de l’effet Instinct de tueur quand les survivants utilisent le vaccin.</li>","name":"Seringue abîmée","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"L’intestin grêle de Brian Irons, chef du RCPD. Une vision alléchante pour les zombies.<li><b>Augmente légèrement</b> la vitesse de mouvement des zombies.</li>","name":"Intestin de Brian","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"Le cœur d’un zombie éviscéré. Considéré comme un déchet toxique car il regorge de virus.<li><b>Augmente modérément</b> le taux de mutation en détruisant des zombies avec Coup de tentacule.</li><br>","name":"Cœur de zombie","flavor":"« Ça ne sert à rien de discuter avec cette chose. » — Leon S. Kennedy","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"Bien qu’il ne reste pas grand-chose de Mikhail, son globe oculaire gauche a survécu à l’explosion qui l’a tué. Un vrai délice pour zombies.<li><b>Augmente modérément</b> la vitesse de mouvement des zombies.</li>","name":"Œil de Mikhail","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"Le sang contaminé d’un agent de police de Raccoon City.<li><b>Augmente modérément</b> le taux de mutation en frappant des survivants avec Coup de tentacule.</li><br>","name":"Sang de Marvin","flavor":"« Tout ce que vous devez savoir, c’est que ce lieu vous dévorera vivant, si vous ne faites pas attention. » — Marvin Branagh","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"Une hormone qui amplifie les sens et prépare le corps au combat.<li><b>Augmente considérablement</b> la durée de l’effet Instinct de tueur quand les survivants utilisent le vaccin.</li>","name":"Injecteur d’adrénaline","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"Un bracelet électronique d’Umbrella pour les administrateurs de ses infrastructures. En plus de servir de dispositif de suivi, il permet d’accéder aux zones sûres.<li><b>Augmente considérablement</b> la portée de détection des zombies.</li>","name":"Bracelet d’administrateur","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"Un échantillon endommagé d’un Tyrant T-002 mort au combat. Il présente des marques de brûlures sévères.<li><b>Augmente modérément</b> le taux de mutation en détruisant des zombies avec Coup de tentacule.<li>Réduit modérément le temps de réapparition des zombies.","name":"Carnage de Tyrant","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"Un échantillon du virus T développé par Umbrella Corporation. Il inflige des mutations extrêmes et des lésions cérébrales aux sujets.<li><b>Augmente considérablement</b> le taux de mutation en détruisant des zombies avec Coup de tentacule. ","name":"Échantillon du virus T","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"Une hormone qui apaise légèrement l’utilisateur quand la furtivité est requise.<li>Obtenez l’effet de statut <b>Indétectable</b> pendant <b>15 secondes</b> quand un zombie est détruit.</li>","name":"Injecteur de sérotonine","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"Les restes enchevêtrés d’une plante infectée par le virus T. Elle a tué l’un des scientifiques responsables de son développement.<li><b>Augmente considérablement</b> le temps requis par les survivants pour ouvrir des caisses de ravitaillement.","name":"Lianes de plante 43 ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"Une langue gluante préhensile qui attrape facilement tout ce qu’elle touche.<li><b>Augmente modérément</b> le temps d’<b>Entrave</b> des survivants après leur contamination.</li><br>","name":"Langue de Licker","flavor":"« C’est comme un cauchemar... » — Claire Redfield","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"Un parasite utilisé pour développer les Nemesis types T, capable de prendre le contrôle du cerveau de son hôte.<li>Les survivants contaminés souffrent de l’effet de statut <b>Inconscient</b>.","name":"Parasite Ne-α","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"Malheureusement, il est tout écrasé et dégouline du sang d’un combat récent. Malgré cela, il dégage un parfum délicieux impossible à manquer.<li>Dévoile l’aura d’un survivant pendant <b>12 secondes</b> après avoir déverrouillé une caisse de ravitaillement.</li>","name":"Sandwich de Jill","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"Qui va les sauver à présent ? Ce ruban d’encre sec a quelque chose qui stimule les zombies.<li><b>Réduit considérablement</b> le temps de réapparition des zombies.</li><li>Augmente modérément la vitesse de mouvement des zombies.</li><li>Quand <b>5</b> générateurs sont réparés, tout zombie détruit réapparaît à une zone de sortie.</li><br>","name":"Ruban d’encre vide","flavor":"« Je vais être aussi claire que possible... c’est la dernière fois. » — Jill Valentine","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"Une pièce qui représente un oiseau, entouré d’une couronne de laurier. Elle est brisée en deux.<li>Supprime <b>1</b> caisse de ravitaillement de la partie.</li><br>","name":"Pièce de récupération brisée","flavor":"« Ce n’est pas comme ça que j’imaginais mon premier jour... » — Leon S. Kennedy","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"Un symbole d’espoir pour la ville de Raccoon City, complètement détruit.<li><b>Augmente énormément</b> la vitesse de mouvement des zombies pendant <b>30 secondes</b> après la réparation d’un générateur.</li><br>","name":"Insigne brisé du S.T.A.R.S.","flavor":"« S.T.A.R.S... » — Nemesis","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"Un insigne ressemblant à du verre et moulé à partir de la Brume elle-même. Il représente une corporation qui a dépassé les limites éthiques de la science.<li>Les survivants souffrent de l’effet de statut <b>À découvert</b> pendant <b>12 secondes</b> en utilisant un vaccin.</li><br>","name":"Insigne irisé d’Umbrella","flavor":"« L’engagement, l’honnêteté et l’intégrité sont les valeurs fondamentales à la base d’Umbrella Corp. » — Dr. Matt Gorkis","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/fr/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Confère <b>50 %</b> de points de sang bonus dans la catégorie Brutalité.<br><li>Cumulable.</li>","name":"Couronne de tangara","flavor":"« Composée de bouts de bois et de tripes, cette couronne réclame plus de sang à l\'Entité. »","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"Confère <b>75 %</b> de points de sang bonus dans la catégorie Brutalité.<br><li>Cumulable.</li>","name":"Couronne de tangara dévote","flavor":"« Finement réalisée avec des bouts de bois et des tripes, cette couronne réclame plus de sang à l\'Entité. »","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"Confère <b>100 %</b> de points de sang bonus dans la catégorie Brutalité.<br><li>Cumulable.</li>","name":"Couronne de tangara ardente","flavor":"« Confectionnée avec passion, cette couronne faite de bouts de bois et de tripes réclame plus de sang à l\'Entité. »","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"Confère <b>50 %</b> de points de sang bonus dans la catégorie Sournoiserie.<br><li>Cumulable.</li>","name":"Couronne de corbeau","flavor":"« Composée de branches noircies et de charbon, cette couronne réclame plus de sang à l\'Entité. »","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"Confère <b>75 %</b> de points de sang bonus dans la catégorie Sournoiserie.<br><li>Cumulable.</li>","name":"Couronne de corbeau dévote","flavor":"« Finement réalisée avec des branches noircies et du charbon, cette couronne réclame plus de sang à l\'Entité. »","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"Confère <b>100 %</b> de points de sang bonus dans la catégorie Sournoiserie.<br><li>Cumulable.</li>","name":"Couronne de corbeau ardente","flavor":"« Confectionnée avec passion, cette couronne faite de branches noircies et de charbon réclame plus de sang à l\'Entité. »","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"Confère <b>50 %</b> de points de sang bonus dans la catégorie Chasse.<br><li>Cumulable.</li>","name":"Couronne de chouette tachetée","flavor":"« Composée de métaux acérés, de cordes et de plumes, cette couronne réclame plus de sang à l\'Entité. »","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"Confère <b>75 %</b> de points de sang bonus dans la catégorie Chasse.<br><li>Cumulable.</li>","name":"Couronne de chouette tachetée dévote","flavor":"« Finement réalisée avec des métaux acérés, des cordes et des plumes, cette couronne réclame plus de sang à l\'Entité. »","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"Confère <b>100 %</b> de points de sang bonus dans la catégorie Chasse.<br><li>Cumulable.</li>","name":"Couronne de chouette tachetée ardente","flavor":"« Confectionnée avec passion, cette couronne faite de métaux acérés, de cordes et de plumes réclame plus de sang à l\'Entité. »","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"Confère <b>50 %</b> de points de sang bonus dans la catégorie Sacrifice.<br><li>Cumulable.</li>","name":"Couronne de pie","flavor":"« Composée de bouts de bois, de liens et d\'os, cette couronne réclame plus de sang à l\'Entité. »","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"Confère <b>75 %</b> de points de sang bonus dans la catégorie Sacrifice.<br><li>Cumulable.</li>","name":"Couronne de pie dévote","flavor":"« Finement réalisée avec des bouts de bois, des liens et des os, cette couronne réclame plus de sang à l\'Entité. »","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"Confère <b>100 %</b> de points de sang bonus dans la catégorie Sacrifice.<br><li>Cumulable.</li>","name":"Couronne de pie ardente","flavor":"« Confectionnée avec passion, cette couronne faite de bouts de bois, de liens et d\'os réclame plus de sang à l\'Entité. »","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"Confère <b>25 %</b> de points de sang bonus dans toutes les catégories.<br><li>Cumulable.</li>","name":"Cocon vide","flavor":"« Une sorte de cocon, ouvert par la créature qui se trouvait à l\'intérieur. »","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"Accorde <b>100 %</b> de points de sang bonus dans toutes les catégories.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Pudding de survivant","flavor":"« Un pudding très salé... »","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"Fait appel à l\'Entité pour empêcher l\'apparition de <b>2</b> coffres.<br><li>Cumulable.</li>","name":"Pièce de monnaie coupée","flavor":"« Les deux moitiés d\'une pièce de monnaie métallique épaisse. »","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"Fait appel à l\'Entité pour empêcher l\'apparition d\'<b>1</b> coffre.<br><li>Cumulable.</li>","name":"Pièce de monnaie griffée","flavor":"« Une pièce de monnaie très usée d\'origine inconnue. »","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"Fait appel à l\'Entité pour <b>diminuer légèrement</b> la <b>distance</b> entre des crochets sacrificiels apparaissant dans le monde de jeu.<br><li>Cumulable.</li>","name":"Chêne moisi","flavor":"« Morceau de chêne humide et pourri couvert de mousse. »","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"Fait appel à l\'Entité pour <b>diminuer modérément</b> la <b>distance</b> entre des crochets sacrificiels apparaissant dans le monde de jeu.<br><li>Cumulable.</li>","name":"Chêne pourri","flavor":"« Un morceau de chêne en ruine suintant un liquide noir putrescent. »","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"Fait appel à l\'Entité pour <b>diminuer considérablement</b> la <b>distance</b> entre des crochets sacrificiels apparaissant dans le monde.<br><li>Cumulable.</li>","name":"Chêne putride","flavor":"« Un morceau de chêne en ruine suintant un liquide noir putrescent. »","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"Confère la capacité de <b>tuer le dernier survivant</b> vous-même pendant la prochaine partie.<br><li>Secret.</li>","name":"Memento Mori en cyprès","flavor":"« Vous avez bien travaillé, le dernier est pour vous. »","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"Confère la capacité de <b>tuer un survivant</b> que vous avez vous-même passé au <b>deuxième statut de crochet</b> durant la prochaine partie.<li>Secret.</li>","name":"Memento Mori en ivoire","flavor":"« Accordez-moi le plaisir d’en tuer un. »","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"Confère la capacité de <b>tuer tous les survivants</b> que vous avez vous-même passés au <b>deuxième statut de crochet</b> durant la prochaine partie.<li>Secret.</li>","name":"Memento Mori en ébène","flavor":"« Je pourrais jurer qu’il a parlé avec la bête. Il s’est arrêté comme s’il écoutait calmement le bruissement des feuilles, puis... il a souri. »","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"Tous les survivants commencent la partie séparés.<br><li>Secret.</li>","name":"Linceul de séparation","flavor":"« Un fin linceul noir qui tombe en pièces. »","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/fr/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Débloque une capacité de repérage d\'auras. Chaque fois qu\'un générateur est complètement réparé, les survivants dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span> du générateur sont révélés pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br>Lorsque le dernier générateur est entièrement réparé, toutes les auras des survivants sont révélées pendant <span class=\\"Highlight3\\">{2} secondes.</span>","name":"Murmure amer","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"Débloque une capacité de repérage d\'aura. Révèle l\'aura des survivants en état critique dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>.","name":"Pisteur","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"Votre épouvantable odeur porte incroyablement loin. Votre rayon de terreur augmente de <span class=\\"Highlight1\\">{0} %</span>. Obtenez <span class=\\"Highlight2\\">{1} %</span> de points de sang supplémentaires pour les actions de la catégorie Sournoiserie.","name":"Inquiétant","flavor":"« Savourez leur peur. »","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"Débloque la capacité de furtivité.<br><br>Rester immobile pendant <span class=\\"Highlight1\\">{0} secondes</span> pour bénéficier de l’effet de statut <b>Indétectable</b> jusqu’à ce que vous bougiez ou agissiez à nouveau.","name":"Insidieux","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"Un sort qui puise sa force dans l\'espoir. La puissance de votre totem ensorcelé vous anime alors que les survivants sont sur le point de s\'échapper.<br>Une fois les portes de sortie alimentées, si un totem passif est encore présent sur la carte, ce sort s\'y applique.</br><br>Tant que le sort est actif,<li>les survivants subissent l\'effet de statut <b><i>À découvert</i></b>.</li><li>Votre vitesse de mouvement est augmentée de <span class=\\"Highlight1\\">{0} %.</span></li><br>L\'effet du sort persiste tant que le totem est présent.<br>","name":"Sort : Personne n\'échappe à la mort","flavor":"« Et la bête devint plus rapide et plus féroce, comme si des coups de fouet invisibles de l\'Entité lui lacéraient le dos. »","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"Un sort qui puise sa force dans l\'espoir. Les faux espoirs des survivants vous excitent et renforcent vos totems. Vous gagnez un jeton pour chaque totem ensorcelé ou passif restant sur la carte. <br><li>Remportez <span class=\\"Highlight1\\">{0} %</span> de points de sang en plus par jeton pour les actions de la catégorie Chasseur.</li><li>La vitesse de purification de totem par les survivants est réduite de <span class=\\"Highlight2\\">{1} %</span> pour chaque jeton.</li><li>Vous recevez une alerte quand quelqu\'un commence à s\'attaquer à un totem ensorcelé.</li><br><i>Les effets du sort persistent tant que le totem ensorcelé concerné est debout.</i>","name":"Sort : Euphorie de la chasse","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"La fervente attention que vous accordez aux crochets du sous-sol a suscité l\'intérêt de l\'Entité. Les crochets du sous-sol confèrent les bonus suivants : <br><li><span class=\\"Highlight1\\">{0} %</span> de progression plus rapide de l\'Entité.</li><li><span class=\\"Highlight2\\">{1} %</span> d\'augmentation de la difficulté des tentatives d\'évasion.</li><li><span class=\\"Highlight3\\">{2} %</span> d\'augmentation des pénalités d\'échec de libération.</li>","name":"Sanctuaire monstrueux","flavor":"« Et là, vous saurez qu\'il n\'y a plus d\'issue. Pendu dans les profondeurs, vous ferez face à l\'être obscur. »","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"Boucher sadique","tiers":[["Vous savez où frapper pour faire mal. Les blessures infligées par des <i>attaques de base</i> réussies provoquent les effets de statut <b>Estropiement</b> et <b>Hémorragie</b>. <b>Hémorragie</b> augmente <span class=\\"Highlight1\\">légèrement</span> la fréquence de saignement du survivant.<br>L’effet <b>Hémorragie</b> occasionné par <i>Boucher sadique</i> est supprimé une fois que le survivant est complètement guéri.<br><span class=\\"FlavorText\\">« C’est dans sa nature sadique. Oubliez les mises à mort rapides ; il se délecte du spectacle obscène de l’agonie. »</span>"],["Vous savez où frapper pour faire mal. Les blessures infligées par des <i>attaques de base</i> réussies provoquent les effets de statut <b>Estropiement</b> et <b>Hémorragie</b>. <b>Hémorragie</b> augmente <span class=\\"Highlight1\\">modérément</span> la fréquence de saignement du survivant.<br>L’effet <b>Hémorragie</b> occasionné par <i>Boucher sadique</i> est supprimé une fois que le survivant est complètement guéri.<br><span class=\\"FlavorText\\">« C’est dans sa nature sadique. Oubliez les mises à mort rapides ; il se délecte du spectacle obscène de l’agonie. »</span>"],["Vous savez où frapper pour faire mal. Les blessures infligées par des <i>attaques de base</i> réussies provoquent les effets de statut <b>Estropiement</b> et <b>Hémorragie</b>. <b>Hémorragie</b> augmente <span class=\\"Highlight1\\">considérablement</span> la fréquence de saignement du survivant.<br>L’effet <b>Hémorragie</b> occasionné par <i>Boucher sadique</i> est supprimé une fois que le survivant est complètement guéri.<br><span class=\\"FlavorText\\">« C’est dans sa nature sadique. Oubliez les mises à mort rapides ; il se délecte du spectacle obscène de l’agonie. »</span>"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"Les corbeaux peuvent communiquer directement avec vous. Dans <span class=\\"Highlight1\\">{0} %</span> des cas, les corbeaux vous donnent un signal visuel quand vous vous trouvez dans un rayon de <span class=\\"Highlight2\\">{1} mètres</span>.<br><i>Espions de l\'ombre</i> a un temps de recharge de <span class=\\"Highlight3\\">{2} secondes.</span>.","name":"Espions de l\'ombre","flavor":"« Depuis les ombres ils nous tourmentent, marquant nos esprits à chaque hurlement. »","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"Les attaques manquées avec votre arme principale ont un temps de rechargement plus court. Le temps de rechargement des <i>attaques de base</i> manquées est réduit de <span class=\\"Highlight1\\">{0} %</span>.","name":"Implacable","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"Vous comprenez la voix de l\'Entité de façon rudimentaire. Entendez sporadiquement le murmure de l\'Entité lorsqu\'un survivant se trouve dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>.","name":"Murmures","flavor":"« On en sait peu sur la brume, mais il est indéniable qu\'elle est souvent du côté de la bête. » - Carnet de notes","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"Vous êtes extrêmement sensible à la respiration de votre proie. La respiration des survivants en difficulté est <span class=\\"Highlight1\\">{0} %</span> plus forte et la respiration normale est <span class=\\"Highlight2\\">{1} %</span> plus forte.","name":"Stridor","flavor":"« Si vous ne vous arrêtez pas pour reprendre votre souffle... elle le reprendra pour vous. »","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"Leur courage s\'évanouit face à un trépas inéluctable.<br>Pour chaque survivant blessé, en état critique ou suspendu à un crochet, tous les survivants reçoivent une pénalité de <span class=\\"Highlight1\\">{0} %</span>, jusqu’à un maximum de <span class=\\"Highlight1\\">{1} %</span> aux temps de réparation, de sabotage et de purification de totem.","name":"Thanatophobie","flavor":"« Elle joue avec nous et se délecte de notre douleur. »","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"Débloque une capacité de repérage d\'auras. Les auras des survivants qui donnent des soins ou en reçoivent vous sont révélées dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>.","name":"Vocation de l\'Infirmière","flavor":"« Toujours attachée à des fragments de sa vie passée, elle est attirée par ceux qui ont besoin d\'aide. »","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"Votre seule présence inspire la peur. Les survivants qui se trouvent dans votre rayon de terreur ont <span class=\\"Highlight1\\">{0} %</span> de chances supplémentaires d\'activer des tests d\'habileté lors des réparations ou des soins. Les zones de succès sont réduites de <span class=\\"Highlight2\\">{1} %</span>.","name":"Présence perturbante","flavor":"« Nous sentons sa présence. »","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"Votre force immense vous permet de réduire en lambeaux les défenses de vos proies. Détruisez les <b>palettes lâchées, les murs qui peuvent l\'être et les générateurs</b> <span class=\\"Highlight1\\">{0} %</span> plus vite.","name":"Force brute","flavor":"« Il n\'y a pas que les muscles. Une sombre puissance motive la bête. »","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"Vous êtes tout excité à l\'idée de suspendre votre proie. Augmente votre vitesse quand vous transportez un corps de <span class=\\"Highlight1\\">{0} %</span>. Pendant le transport du corps, votre rayon de terreur augmente de <span class=\\"Highlight2\\">{1} mètres</span>.","name":"Agitation","flavor":"« À un moment, l\'excitation à l\'idée de nous accrocher prend le pas sur le désir de nous tuer. »","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"Prédateur","tiers":[["Votre capacité de pistage développée vous permet de prendre la direction des traces laissées par les survivants en fuite.<br>Les marques d\'éraflure laissées par les survivants apparaîtront <span class=\\"Highlight1\\">légèrement</span> plus proches l\'une de l\'autre.<br><span class=\\"FlavorText\\">« Ne vous arrêtez jamais et priez pour garder une longueur d\'avance sur la bête. » - Carnet de notes</span>"],["Votre capacité de pistage développée vous permet de prendre la direction des traces laissées par les survivants en fuite.<br>Les marques d\'éraflure laissées par les survivants apparaîtront <span class=\\"Highlight1\\">modérément</span> plus proches l\'une de l\'autre.<br><span class=\\"FlavorText\\">« Ne vous arrêtez jamais et priez pour garder une longueur d\'avance sur la bête. » - Carnet de notes</span>"],["Votre capacité de pistage développée vous permet de prendre la direction des traces laissées par les survivants en fuite.<br>Les marques d\'éraflure laissées par les survivants apparaîtront <span class=\\"Highlight1\\">considérablement</span> plus proches l\'une de l\'autre.<br><span class=\\"FlavorText\\">« Ne vous arrêtez jamais et priez pour garder une longueur d\'avance sur la bête. » - Carnet de notes</span>"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"Tel un chien de chasse, vous flairez les traces de sang à grande distance. Les traces de sang frais sont <span class=\\"Highlight1\\">considérablement</span> plus visibles et peuvent être suivies pendant <span class=\\"Highlight2\\">{0} secondes</span> de plus que la normale.","name":"Chien de Sang","flavor":"« Des cailloux scintillent au clair de lune ; ma vie s\'écoule en une piste facile à suivre. »","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"Vous avez une vue perçante dans l\'obscurité. Votre champ de vision est supérieur à la normale de <span class=\\"Highlight2\\">{0} degrés</span>.<br><i>Ne se cumule pas avec les autres améliorations du champ de vision.</i>","name":"Résistance à l\'obscurité","flavor":"\'\'Luisant dans l\'obscurité, ses yeux percent la nuit et brûlent votre âme.\\"","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"Vous êtes résistant à la douleur. Vous réduisez la durée des <b>étourdissements par palette</b> de <span class=\\"Highlight1\\">{0} %</span>.","name":"Tenace","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"Contrairement aux autres créatures de la brume, vous n’êtes plus aussi sensible à la lumière. Vous êtes immunisé à l’aveuglement provoqué par les lampes de poche et les pétards. L’aura des survivants qui tentent de vous aveugler est révélée pendant <span class=\\"Highlight1\\">{0} secondes.</span>","name":"Résistance à la lumière","flavor":"« Ces monstres... Ils s’adaptent ! Ils développent d’étranges capacités. » - Journal de Vigo","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"Lorsqu’un générateur est réparé à <span class=\\"Highlight1\\">{0} %</span>, un fort avertissement sonore est déclenché et vous bénéficiez de l’effet de statut <b>Indétectable</b> pendant <span class=\\"Highlight2\\">{2} secondes</span>.","name":"Réparateur","flavor":"« Le Montagnard crée des outils impressionnants à partir de ferraille... des outils destinés à nous mutiler de façon créative. » - Carnet de notes","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"Vous devenez <b>obsédé</b> par un survivant.<br>Vous obtenez un jeton pour chaque <i>attaque de base</i> portée qui n’est pas infligée à votre obsession. <br>Chaque jeton octroie une réduction cumulable de <span class=\\"Highlight1\\">{0} %</span> sur la récupération des <i>attaques de base</i> réussies et vous pouvez engranger jusqu’à <span class=\\"Highlight2\\">{1}</span> jetons.<br>Frapper votre obsession avec une <i>attaque de base</i> vous fera perdre <span class=\\"Highlight3\\">{2}</span> jetons. <br>Vous ne pouvez plus gagner de jetons si votre obsession est sacrifiée ou tuée.<br><li><i>Le tueur ne peut être <b>obsédé</b> que par un survivant à la fois.</i></li>","name":"Gardons le meilleur pour la fin","flavor":"« La mort arrive en ville, shérif. » - Dr Sam Loomis","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"Vous devenez <b>obsédé</b> par un survivant.<br>Chaque fois que vous chassez la cible de votre obsession et que vous la laissez s’échapper, vous recevez un jeton jusqu’à un maximum de {0} jetons.<br>Chaque jeton augmente votre vitesse de mouvement de <span class=\\"Highlight1\\">{1} %</span>.<br>Effectuer une <i>attaque de base</i> ou une <i>attaque spéciale</i> consomme un jeton.<br><li><i>Le tueur ne peut être <b>obsédé</b> que par un survivant à la fois.</i></li>","name":"Jouer avec la nourriture","flavor":"« Tu les a tous eus, n’est-ce pas Michael ? Mais pas moi. » - Dr. Sam Loomis","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"Vous devenez <b>obsédé</b> par un survivant.<br>Votre obsession bénéficie d’un bonus de <span class=\\"Highlight1\\">{0} %</span> à la vitesse d’action pour décrocher et soigner d’autres survivants.<br>Chaque fois que vous accrochez un survivant autre que votre obsession, si elle est en vie, vous gagnez un jeton.<br>Si l’obsession est en vie, tous les autres survivants reçoivent une pénalité de vitesse de réparation, de sabotage et de soins de <span class=\\"Highlight2\\">{1} %</span> pour chaque jeton.<br><li><i>Le tueur ne peut être obsédé que par un survivant à la fois.</i></li>","name":"Lumière mourante","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"Un sort qui entrave la capacité de repérage d’auras. Frapper un survivant avec une <i>attaque de base</i> pendant que le totem ensorcelé est actif applique l’effet de statut <b>Aveuglement</b>. Cet effet s’applique aux <span class=\\"Highlight1\\">{0}</span> derniers survivants frappés.<br><i>Les effets du sort persistent tant que le totem ensorcelé est en place.</i>","name":"Sort : Le troisième sceau","flavor":"« Elle a touché votre peau, vous portez la marque de la sorcière ! »","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"Un sort qui affecte la progression des réparations des générateurs de tous les survivants. Tous les générateurs sont affectés par le <i>sort : Ruine</i>. Si un générateur n\'est pas en train d\'être réparé par un survivant, la progression de sa réparation régresse immédiatement et automatiquement à <span class=\\"Highlight1\\">{0} %</span> de la vitesse de régression normale.<br><br><i>Les effets du sort persistent tant que le totem ensorcelé est en place.</i><br>","name":"Sort : Ruine","flavor":"« Une malédiction est sur vous, elle causera votre perte. »","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"Un sort qui puise sa force dans l\'espoir. Les faux espoirs des survivants aiguisent votre faim. Quand un survivant est sauvé d\'un crochet qui se trouve au moins à <span class=\\"Highlight1\\">24 mètres</span>, Mangeur d\'espoir reçoit un jeton.<br><li><span class=\\"Highlight3\\">2 jetons</span> : obtenez <span class=\\"Highlight2\\">{0} %</span> à l\'effet de statut <b><i>Rapidité</i></b>, <span class=\\"Highlight3\\">10 secondes</span> après avoir suspendu un survivant et pendant <span class=\\"Highlight3\\">10 secondes</span>.</li><li><span class=\\"Highlight3\\">3 jetons</span> : les survivants souffrent du statut <b><i>À découvert</i></b>.</li><li><span class=\\"Highlight2\\">5 jetons</span> : confère la possibilité de tuer les survivants de vos propres mains.</li><br><i>Les effets du sort persistent tant que le totem ensorcelé est en place.</i><br>","name":"Sort : Mangeur d\'espoir","flavor":"« Si vous ne faites rien, vous avez leur mort sur la conscience. Si vous les sauvez, vous attisez sa faim. »","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"Votre seule présence inspire une véritable peur. Les survivants dans votre rayon de terreur souffrent d\'inefficacité.<br>Le taux de consommation d\'objets des survivants affectés est augmenté de <span class=\\"Highlight1\\">{0} %</span>.","name":"Présence écrasante","flavor":"« Merde ! J\'ai fait tomber la gaze ! »","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"Méticuleux dans votre approche, terrifiant dans son application.<br>Tandis que vous pourchassez un survivant, votre rayon de terreur augmente de <span class=\\"Highlight1\\">{0} mètres</span>. Dans le cas contraire, il est réduit de <span class=\\"Highlight2\\">{0} mètres</span> et votre champ de vision s\'élargit de <span class=\\"Highlight3\\">{1} degrés</span>.<br><i>Les améliorations du champ de vision ne sont pas cumulables.</i>","name":"Surveillance et maltraitance","flavor":"« C\'est l\'heure de votre traitement ! » - Le Docteur","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"La haine du progrès vous anime.<br>Surchargez un générateur en effectuant l\'action <b>Endommager le générateur</b>. Le prochain survivant à interagir avec ce générateur doit faire face à un test d\'habileté d\'une difficulté <span class=\\"Highlight1\\">énorme</span>. Échouer au test d\'habileté génère une perte de progression supplémentaire de <span class=\\"Highlight2\\">{0} %</span>.<br>Réussir le test d\'habileté ne génère aucune progression, mais empêche l\'explosion du générateur.","name":"Surcharge","flavor":"« C\'est un piège. Mais un piège dans lequel on doit tomber... » - Le Docteur","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"Votre désir de tuer est si intense que vous perdez momentanément votre connexion avec l’Entité, ce qui vous rend totalement imprévisible.<br><br>Octroie l’effet de statut <b>Indétectable</b> après l’obtention de Soif de sang palier 1. L’effet de statut est supprimé dès que vous perdez Soif de sang.<br><br><li>Vous gagnez <span class=\\"Highlight1\\">{0} %</span> de points de sang supplémentaires en exécutant des actions de la catégorie Chasseur.</li>","name":"Prédateur","flavor":"« Où est-elle passée ? »","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"Renforce la capacité de repérage d\'aura. Les auras des survivants vous sont révélées pendant <span class=\\"Highlight1\\">{0} secondes</span> lorsqu\'ils entrent dans la cave et que vous vous trouvez à plus de <span class=\\"Highlight2\\">{1} mètres</span> de l\'entrée de cette dernière.<br><i>Instinct territorial</i> ne peut être activé qu\'une fois toutes les <span class=\\"Highlight3\\">{2} secondes</span>.","name":"Instinct territorial","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"Un sort qui puise sa force dans le désespoir. Votre traque devient une chanson entêtante qui trouble l’attention de vos proies. Les survivants subissent un malus de régression de <span class=\\"Highlight1\\">{0} %</span> quand ils ratent un test d’habileté en soignant ou en réparant.<br>Chaque fois qu’un survivant est suspendu à un crochet, la Berceuse de la Chasseuse gagne en puissance et affecte les avertissements de tests d’habileté de soins et de réparations.<br><li><b>1 à 4 jetons :</b> le délai entre le son d’avertissement du test d’habileté et ce dernier se raccourcit.</li><li><b>5 jetons :</b> aucun avertissement de test d’habileté.</li><br><i>Les effets du sort persistent tant que le totem ensorcelé est debout.</i>","name":"Sort : Berceuse de la Chasseuse","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"Le traumatisme causé par vos attaques brutales rend difficile le simple fait de crier à l’aide.<br>L’aura des survivants, auxquels vous infligez l’état critique avec vos attaques de base, n’est pas révélée aux autres survivants s’ils se tiennent à plus de <span class=\\"Highlight1\\">{2} mètres</span>.<br>Les survivants auxquels vous infligez l’état critique avec vos attaques de base rampent <span class=\\"Highlight2\\">{1} % plus lentement</span> pendant <span class=\\"Highlight3\\">{0} secondes</span>.<br>Pendant ce temps, les survivants sont affectés par l’effet de statut <b>Aveuglement</b>.","name":"K.O.","flavor":"« Oh, cette arme à feu ne sert à rien. Faisons ça à l’ancienne... avec une masse ! Ils meurent mieux ainsi. » - Nubbins Sawyer","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"Un lien profond avec l\'Entité débloque le potentiel de repérer les auras. Après avoir pendu un survivant à un crochet, les auras de tous les autres survivants vous sont révélées pendant <span class=\\"Highlight1\\">{0} secondes</span> s\'ils sont à plus de <span class=\\"Highlight2\\">{1} mètres</span> du crochet.<br><li>Donne <span class=\\"Highlight3\\">{2} %</span> de Points de sang bonus cumulables à chaque fois qu\'un survivant est pendu au crochet pour la première fois, jusqu\'à un maximum de <span class=\\"Highlight4\\">{3} %</span>.<br>Les Points de sang bonus ne sont accordés qu\'après la partie.</li>","name":"Chili et barbecue","flavor":"\\"Je ne prends aucun plaisir à tuer. Il y a simplement des choses qui ont besoin d\'être faites. Ça ne veut pas dire qu\'on doit aimer ça.\\" - Drayton Sawyer","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"Votre cruelle attaque force les survivants à lâcher leur objet à l’impact. L’objet perdu sera consommé par l’Entité au bout de <span class=\\"Highlight1\\">{0} secondes</span> s’il n’est pas ramassé.<br>Dévoile les objets au sol à moins de <span class=\\"Highlight2\\">{1} mètres</span> à l’aide d’une aura blanche. L’aura des objets au sol passe au rouge jusqu’à ce qu’ils soient consommés par l’Entité.","name":"Chute de Franklin","flavor":"« Sally, j’entends quelque chose. Stop ! Stop ! » - Franklin","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"Perdre votre proie fait monter la pression, vous emplit de rage et vous procure un élan de motivation inattendu. Chaque fois qu’un survivant termine la réparation d’un générateur, Intensité ardente gagne en puissance.<br><li>Pour chaque générateur réparé, vous obtenez un bonus cumulable de <span class=\\"Highlight1\\">{0} %</span> jusqu’à la fin de la partie sur la vitesse de ramassage, de lâcher, de saut d’obstacles, de destruction de palettes et de générateurs.</li>","name":"Intensité ardente","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"Vous devenez <b>obsédé</b> par un survivant. Chaque fois que vous frappez votre obsession avec une <i>attaque de base</i>, le temps d’ouverture des portes de sortie est augmenté de <span class=\\"Highlight1\\">{0} secondes</span>, jusqu’à un maximum de <span class=\\"Highlight2\\">{1} secondes supplémentaires</span>.<br>L’obsession n’est pas affectée par <i>Souviens-toi de moi.</i><br><li><i>Le tueur ne peut être <b>obsédé</b> que par un survivant à la fois.</i></li>","name":"Souviens-toi de moi","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"Dès qu\'une porte de sortie est ouverte, le Gardien du sang est activé. Les auras des survivants situés dans les zones de sortie vous sont révélées. <br>Une fois par partie, pendre un survivant à un crochet lorsque le Gardien du sang est activé fait appel à l\'Entité pour empêcher tous les survivants de sortir pendant <span class=\\"Highlight1\\">{0} secondes</span>.","name":"Gardien du sang","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"Les modifications astucieuses que vous avez apportées aux crochets vous préviennent si on y touche.<br><li>Vous recevez une alerte quand un survivant commence à saboter un crochet.</li><li>Lorsque vous portez un survivant, vous voyez l’aura du moindre survivant à <span class=\\"Highlight1\\">{0} mètres</span> d’un crochet.</li>","name":"Coup du pendu","flavor":"« Pas d’excuses, pas d’hésitation... Et pas de larmes. » - Amanda Young","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"Renforce la capacité de repérage d\'auras. Tous les générateurs inversés sont entourés d\'une aura blanche. Si l\'inversion est interrompue, le générateur se retrouve entouré d\'une aura jaune pendant <span class=\\"Highlight1\\">{0} secondes</span>.<br>Les bruits causés par la réparation d\'un générateur sont audibles à <span class=\\"Highlight2\\">{1} mètres</span> de plus.","name":"Surveillance","flavor":"« Vous allez être sage ? » - Amanda Young","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"Quand un survivant en libère un autre d’un crochet, à au moins <span class=\\"Highlight1\\">{0} mètres</span> de vous, <i>Prise de décision</i> force le survivant à crier et lui applique l’effet de statut <b><i>À découvert</i></b> pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br><i>Prise de décision</i> a un temps de récupération de <span class=\\"Highlight3\\">{2} secondes</span>. ","name":"Prise de décision","flavor":"« Vous seriez surpris de savoir quel genre d’outils peuvent vous sauver la vie » -Amanda Young","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"Votre poigne de fer rend toute tentative de fuite presque impossible. L\'effet des ruades des survivants est réduit de <span class=\\"Highlight1\\">{0} %</span>. Le temps nécessaire pour se libérer de votre étreinte augmente de <span class=\\"Highlight2\\">{1} %</span>.","name":"Poigne de fer","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"Votre seule présence inspire l\'effroi. Les survivants dans votre rayon de terreur ont <span class=\\"Highlight1\\">{0} %</span> de malus de vitesse de progression des soins.<br>","name":"Coulrophobie","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"Un lien profond avec l\'Entité débloque une force immense. Après avoir suspendu un survivant à un crochet, le générateur suivant que vous endommagez perd immédiatement <span class=\\"Highlight1\\">{0} %</span> de sa progression. La régression normale est appliquée au générateur suite à l\'action Endommager le générateur.<br><i>Le tour est joué</i> est actif pendant <span class=\\"Highlight1\\">{1} secondes</span> après que le survivant a été suspendu.","name":"Le tour est joué","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"Votre vitesse lors d\'un saut d\'obstacles est <span class=\\"Highlight1\\">{0} %</span> plus rapide.<br>Sauter par-dessus un obstacle fait que l\'Entité bloque le lieu de cette action pendant <span class=\\"Highlight1\\">{1} secondes</span>.<br>Un seul lieu peut être bloqué de cette manière à tout moment (il n\'est bloqué que pour les survivants). <br>N\'affecte pas les palettes.","name":"Déboussoler","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"Chaque palette que vous détruisez amplifie la rage de l\'Entité.<br>Après avoir détruit <span class=\\"Highlight1\\">{0} palettes</span>, la prochaine fois que vous serez étourdi par une palette, l\'Entité détruira instantanément celle-ci.<br>Vous souffrirez tout de même de la pénalité de l\'effet Étourdi.","name":"Fureur de l\'esprit","flavor":"« Elle a la fureur dans le sang. »","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"Deux totems ensorcelés piégés apparaissent durant la partie.<br>Lorsque l\'un des deux totems ensorcelés piégés est purifié par un Survivant, tous les Survivants souffrent de l\'<span class=\\"Highlight3\\">effet de statut À découvert</span> pendant <span class=\\"Highlight1\\">{0} secondes</span>. <br>Le totem ensorcelé piégé restant devient immédiatement un totem passif.","name":"Sort : Terrain hanté","flavor":"\\"Sa maison a été profanée.\\"","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"Vous devenez <b>obsédé</b> par un survivant.<br>Chaque fois qu\'un générateur est terminé, l\'obsession voit votre aura pendant <span class=\\"Highlight1\\">{0} secondes </span>.<br>Chaque fois qu\'un générateur est terminé, les emplacements de tous les survivants vous sont révélés pendant <span class=\\"Highlight2\\">{1} secondes </span>.<br>Une fois tous les générateurs terminés, l\'obsession possède l\'effet de statut <span class=\\"Highlight3\\">À découvert </span>et le tueur peut <span class=\\"Highlight3\\">éliminer</span> l\'obsession.<br><li><i>Le tueur ne peut être obsédé que par un survivant à la fois.</i></li>","name":"Rancœur","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"Tout générateur à une distance de <span class=\\"Highlight1\\">{0} mètres</span> en cours de réparation par au moins deux survivants est signalé par une aura jaune. Quand le générateur est illuminé pour la première fois, Discorde déclenche un fort avertissement sonore sur le générateur. Lorsque le générateur n’est plus à portée ou n’est plus en cours de réparation par au moins deux survivants, l’aura subsiste pendant <span class=\\"Highlight2\\">4 secondes</span>.<br>","name":"Discorde","flavor":"« Les petits malins finissent toujours par se faire tuer. Comptez sur nous pour nous en assurer. » - La Légion","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"Quand vous portez un survivant, vous ne subissez pas de temps de récupération pour les <i>attaques de base</i> manquées, et toucher un autre survivant avec une <i>attaque de base</i> interrompt le chronomètre durant lequel le survivant porté peut se débattre pendant <span class=\\"Highlight1\\">{0}</span> secondes.<br>","name":"Cran dément","flavor":"« Vous ne vous en tirerez pas. On est bien trop forts pour vous. » - La Légion","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"Vous ouvrez les casiers <span class=\\"Highlight1\\">{0} %</span> plus vite.<br><br>Quand un survivant sort d\'un casier, il souffre de l\'effet de statut À découvert pendant <span class=\\"Highlight1\\">{2} secondes</span> et sa position est révélée pendant <span class=\\"Highlight1\\">{1} secondes</span>.<br>","name":"Vierge de fer","flavor":"« Ce n\'est pas un endroit pour les lâches. » - La Légion","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"Vos prières invoquent une puissance maléfique qui compromet les chances des survivants de s’en sortir. Les <span class=\\"Highlight1\\">{0} générateurs</span> les plus éloignés de vous sont bloqués par l’Entité pendant <span class=\\"Highlight1\\">{1} secondes</span> au début de la partie.<br>Pendant ce laps de temps, les survivants ne peuvent pas les réparer. Les générateurs affectés sont entourés d’une aura blanche.<br>","name":"Intervention maléfique","flavor":"« Que tous en ces terres sachent que les dieux punissent les infidèles. » (La Tablette d’Adiris, 3.7.)","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"Les cris des infidèles font bondir votre cœur.<br>Les survivants présents dans votre rayon de terreur pendant qu’un autre survivant entre en état critique hurleront, vous révélant leur position pendant <span class=\\"Highlight1\\">{0} secondes</span>.","name":"Peur contagieuse","flavor":"« L’horreur emplit le cœur des infidèles qui pleurent aux pieds de la victime. » (Cantique, 11.4)","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"La démonstration de vos pouvoirs provoque un vent de panique qui gagne toute la région.<br><br>Vous devenez obsédé par un survivant. Si vous parvenez à toucher votre obsession avec une <i>attaque de base</i>, vous lui transférez votre rayon de terreur pendant <span class=\\"Highlight2\\">{1} secondes</span> avec un rayon de <span class=\\"Highlight1\\">{0} mètres</span>. Vous bénéficiez de l’effet de statut <b>Indétectable</b> pendant toute cette durée.<br><br>Le survivant avec le rayon de terreur transféré est également considéré comme étant « à l’intérieur du rayon de terreur » à toutes fins utiles.<br><br><li><i>Le tueur ne peut être <b>obsédé</b> que par un seul survivant à la fois.</i></li><br>","name":"Sombre dévotion","flavor":"« Et la terreur s’abattra sur un mécréant qui annoncera à tort ma venue. » (La Tablette d’Adiris, 48.9)","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"Vos sens sont aiguisés dans le sombre royaume de l’Entité.<br><br>Débloque le potentiel de repérage d’aura d’une personne. L’aura de tout survivant effectuant une action précipitée à moins de <span class=\\"Highlight1\\">48 mètres</span> de votre emplacement est révélée pendant <span class=\\"Highlight2\\">{0} secondes</span>.<br><br><i>Je vous écoute</i> ne peut être déclenché qu’une fois toutes les <span class=\\"Highlight3\\">{1} secondes</span>.<br>","name":"Je vous écoute","flavor":"« Ne vous en faites pas. Je m’y prépare depuis toujours. » – Ghost Face","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"Vos sombres projets et votre ruse suscitent l\'intérêt de l\'Entité.<br><br>Après avoir ramassé un survivant, tous les générateurs non réparés pas les survivants sont bloqués par l\'Entité et ne peuvent pas être réparés pendant les <span class=\\"Highlight1\\">{0} prochaines secondes</span>. Les générateurs affectés sont entourés d\'une aura blanche.<br><br><i>Frissons palpitants</i> ne peut être activé qu\'une fois toutes les <span class=\\"Highlight2\\">{1} secondes</span>.<br>","name":"Frissons palpitants","flavor":"« Sans fin, la nuit est toujours là pour m\'assister. » – Ghost Face","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"Vous devenez <b>obsédé</b> par un survivant. Vous guettez dans l’ombre, éliminant vos victimes les unes après les autres. Quand votre obsession est suspendue à un crochet, <i>Poursuite furtive</i> reçoit un jeton, pour un maximum de <span class=\\"Highlight1\\">{0} jetons</span>.<br><br>Chaque jeton réduit votre rayon de terreur de <span class=\\"Highlight2\\">{1} mètres</span> pendant une poursuite.<br><br>Quand un survivant sauve l’obsession d’un crochet, le sauveteur devient l’obsession. Vous perdez tous vos jetons si l’obsession est sacrifiée ou tuée.<br><br><li><i>Le tueur ne peut être <b>obsédé</b> que par un survivant à la fois.</i></li><br>","name":"Poursuite furtive","flavor":"« Vous n’avez pas idée de ce que j’ai en réserve. La presse en parlera pendant des semaines... J’y veillerai. » – Ghost Face","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"Votre présence inquiétante électrifie l’air et interfère avec la technologie.<br><br>Plonger un survivant en état critique avec une <i>attaque de base</i> provoque l’explosion immédiate et le recul de tous les générateurs dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>. Les générateurs affectés par Surtension perdent immédiatement <span class=\\"Highlight2\\">{1} %</span> de leur progression.<li><i>Surtension</i> peut uniquement être déclenchée une fois toutes les <span class=\\"Highlight3\\">{2} secondes</span>.</li><br>","name":"Surtension","flavor":"« La créature semble avoir une influence inconnue sur l’électricité et les appareils électroniques proches. » - Laboratoire national d’Hawkins","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"Votre présence éprouvante fatigue et affaiblit votre proie.<br><br>Quand ils réparent les générateurs, les survivants souffrent de l’effet de statut <b>Épuisement</b>.<br><br>Tout chronomètre d’effet de statut <b>Épuisement</b> existant est mis en pause pendant que le survivant répare un générateur. Après avoir terminé la réparation, le survivant souffre de l’effet de statut <b>Épuisement</b> pendant <span class=\\"Highlight2\\">{1} seconde(s)</span>.<br>","name":"Briseur d’esprit","flavor":"« Les capacités télépathiques du spécimen peuvent faire naître des sentiments d’effroi et de fatigue chez les individus proches. » - Laboratoire national d’Hawkins","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"Vos liens avec l’autre monde se manifestent quand votre proie tente de s’échapper.<br><br>Chaque fois qu’un générateur est réparé, dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span> autour de celui-ci, les fenêtres et les sauts d’obstacles sont bloqués pour tous les survivants pendant <span class=\\"Highlight2\\">{1} secondes</span>. <br><br>Vous voyez l’aura des sauts d’obstacles bloqués par <i>Limites cruelles</i> pendant toute sa durée.<br>","name":"Limites cruelles","flavor":"« Le spécimen semble capable d’affecter les objets proches comme s’ils existaient sous une autre forme dans une dimension différente de la nôtre. » -Laboratoire national d’Hawkins","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"Débloque le potentiel de repérage d\'aura. Vous faites preuve de vigilance et restez attentif aux zones clés du champ de bataille.<br><br>Vous voyez l’aura de l’ensemble des palettes, murs destructibles et emplacements de saut d’obstacles dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>.<br>","name":"Tactiques de Zanshin","flavor":"« La faiblesse de votre ennemi réside dans sa force. » - Doctrine de Renjiro 12:5","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"L’agonie d’un survivant est infligée aux autres.<br><br>Lorsque vous suspendez un survivant, tous les survivants blessés souffrent des effets de statut <span class=\\"Highlight1\\">Hémorragie</span> et <span class=\\"Highlight1\\">Épuisement</span> pendant <span class=\\"Highlight2\\">{0} secondes</span>.<br><br><i>Écho sanguin</i> a un temps de rechargement de <span class=\\"Highlight3\\">{1} secondes.</span><br>","name":"Écho sanguin","flavor":"« Attaquez un ennemi avec précision et ses alliés le sentiront. » - Doctrine de Renjiro 6:3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"Vous cherchez à vous venger de ceux qui vous ont fait du tort. Un survivant qui parvient à vous aveugler ou à vous étourdir avec une palette ou un casier devient votre obsession.<br><br>Dès qu’un nouveau survivant devient l’obsession, il est affecté par l’effet de statut <span class=\\"Highlight1\\">Inconscient</span> pendant <span class=\\"Highlight2\\">{0} secondes</span> et vous voyez son aura pendant <span class=\\"Highlight3\\">{1} secondes</span>.<br><br><li><i>Le tueur ne peut être <b>obsédé</b> que par un seul survivant à la fois.</i></li><br>","name":"Ennemi juré","flavor":"« Seul un idiot peut cracher au visage d’un démon et croire en avoir triomphé. » - Doctrine de Renjiro 4:9","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"Vous avez l\'œil pour du matériel en bon état.<br><br>Après avoir frappé un survivant <span class=\\"Highlight1\\">{0}</span> fois avec votre <i>attaque de base</i>, <i>Bricolo</i> s\'active pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br><br>Quand <i>Bricolo</i> est actif, chaque fois qu\'un survivant effectue un bon test d\'habileté pendant une réparation, le générateur est signalé par une aura jaune tant qu\'il est en cours de réparation.<br>","name":"Bricolo","flavor":"« Parfois, un homme finit dans la tombe à cause de son chef-d\'œuvre. » - Directeur de la prison","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"Un survivant devient votre <b>obsession</b>.<br><br>Après avoir suspendu l’obsession, <i>Dispositif de l’homme mort</i> s’active pendant <span class=\\"Highlight1\\">{0} secondes</span>. <br><br>Une fois activé, tout survivant qui s’arrête avant d’avoir entièrement réparé le générateur fait que l’Entité bloque ce dernier jusqu’à la fin de l’effet de <i>Dispositif de l’homme mort</i>. <br><br>Les générateurs affectés sont entourés d’une aura blanche.<br><br><i>Le tueur ne peut être <b>obsédé</b> que par un survivant à la fois.</i><br>","name":"Dispositif de l’homme mort","flavor":"« J’ai vu le regard d’un homme au moment où il réalise qu’il est sur le point de mourir. » - Caleb Quinn","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"Un sort qui se déclenche au moment de sa destruction. Ceux qui vous contrarient seront punis.<br><br>Tout survivant qui purifie un totem passif subira l’effet de statut <b>Inconscient</b> pendant <span class=\\"Highlight1\\">{0} secondes</span>.<br><br>Si un totem ensorcelé est purifié, y compris celui-ci, l’aura de tous les survivants est révélée pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br>","name":"Sort : Châtiment","flavor":"« Sombre idiot, tu l’as activé toi-même. » - Caleb Quinn","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"Ceux qui se mettent en travers du devoir tombe sous le coup d’un terrible jugement.<br><br>Les survivants qui subissent un coup de protection souffrent de l’effet de statut <b>Brisé</b> pendant <span class=\\"Highlight1\\">{0} secondes.</span>","name":"Pénitence forcée","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"Vous guidez vos victimes sur un chemin de souffrance et châtiment.<br><br>Après avoir frappé un générateur, vous devenez <b>Indétectable</b> jusqu’à ce que le générateur cesse de régresser, ou bien qu’un survivant soit blessé ou mis en état critique. Pendant ce temps, l’aura jaune du générateur est révélée aux survivants.<br><br>Cet effet ne peut être activé qu’une seule fois toutes les <span class=\\"Highlight1\\">{2} secondes.</span>","name":"Piste de souffrance","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"Ceux dont la vie est entrelacée dans les ténèbres sont destinés à souffrir ensemble.<br><br>Quand un survivant soigne un segment de santé d’un autre survivant à au moins <span class=\\"Highlight1\\">{0} mètres</span> du tueur, le survivant qui effectue l’action de soin se met à crier, révélant leur position et activant <i>Lien mortel</i> pendant les <span class=\\"Highlight2\\">{1} secondes suivantes.</span> Pendant ce temps, le survivant souffre de l’effet de statut <b>Inconscient</b> quand il est à plus de <span class=\\"Highlight3\\">{2} mètres</span> du survivant soigné. ","name":"Lien mortel","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"Après avoir frappé un générateur, le premier survivant qui interagit avec dans les <span class=\\"Highlight1\\">{0} prochaines secondes</span> se met à crier, dévoilant sa position pendant <span class=\\"Highlight2\\">{1} secondes</span>, et il souffre de l’effet de statut <b>À découvert</b> pendant <span class=\\"Highlight3\\">{2} secondes</span>.<br><br><i>Prise du dragon</i> a un temps de recharge de <span class=\\"Highlight4\\">{3} secondes</span>.<br>","name":"Prise du dragon","flavor":"« Ce composé a un tel potentiel... même une dose minime a des effets anormaux. » - Journal de Talbot Grimes","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"Un sort qui gagne les faveurs de l’Entité en faisant couler du sang.<br><br>Quand un survivant est frappé avec une <i>attaque de base</i>, les palettes à moins de <span class=\\"Highlight1\\">{0} mètres</span> de votre position sont maintenues en place par l’Entité pendant <span class=\\"Highlight2\\">{1} secondes</span>. Impossible de les faire tomber.<br><br><i>Sort : Faveur de sang</i> a un temps de recharge de <span class=\\"Highlight3\\">{2} secondes</span>.<br>","name":"Sort : Faveur de sang","flavor":"« Il n’est pas difficile d’imaginer que les épreuves sont une sorte de réponse biologique. » - Journal de Talbot Grimes","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"Pendant que le <i>Sort : Immortel</i> est actif, l’aura des survivants à moins de <span class=\\"Highlight1\\">{0} mètres</span> d’un totem passif est révélée.<br><br>Quand un autre totem ensorcelé est purifié, le sort de ce totem est transféré au totem Sort : Immortel, désactivant ce sort. Tous les jetons du sort transféré le sont également.","name":"Sort : Immortel","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"Vous protégez le peu que vous avez et vous êtes attentif à toute activité dans vos réserves.<br><br>Les survivants dévoilent leur position quand ils interagissent avec un coffre ou lorsqu’ils ramassent un objet à moins de <span class=\\"Highlight1\\">{0} mètres</span> de votre position.<br><br>La partie commence avec un maximum de <span class=\\"Highlight1\\">{1}</span> coffres supplémentaires sur la carte.","name":"Écureuil","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"La vie n’a pas été tendre avec vous, et vous le rendez bien aux autres.<br><br>Lorsque vous endommagez un générateur, un maximum de <span class=\\"Highlight1\\">{0}</span> autres générateurs aléatoires régressent également.<br><br>Si les générateurs affectés sont en cours de réparation, tout survivant en train de les réparer doit effectuer un test d’habileté difficile.<br><br><i>Oppression</i> a un temps de recharge de <span class=\\"Highlight2\\">{1}</span> secondes. <br>","name":"Oppression","flavor":"« Condamnes-les comme ils nous ont eux-mêmes condamnés. » — Charlotte Deshayes","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"Quand la fin est proche, vous cherchez à porter le coup fatal.<br><br>Chaque fois qu’un générateur est terminé, Coup de grâce gagne en puissance. Vous gagnez un jeton.<br><br>Consommez un jeton pour augmenter la distance de votre prochaine attaque chargée de <span class=\\"Highlight1\\">{0} %</span>.","name":"Coup de grâce","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"Votre sens inégalé de la mise en scène éblouit tout le monde.<br><br>Quand vous portez un survivant, tout autre survivant dans votre rayon de terreur subit l’effet de statut <b>À découvert</b>.<br>L’effet persiste pendant <span class=\\"Highlight1\\">{0} secondes</span> sur les survivants qui quittent votre rayon de terreur, et sur ceux dans le rayon lorsque vous suspendez ou relâchez le survivant porté.<br><i>Intimidé</i> a un temps de recharge de <span class=\\"Highlight2\\">{1} secondes</span> une fois que vous ne portez plus le survivant.<br>","name":"Intimidé","flavor":"« Profitez de cet instant, rares sont ceux qui m’approchent d’aussi près. » — Ji-Woon Hak","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"Un sort qui fait en sorte que ceux qui vous sont inférieurs soient correctement guidés.<br><br>L’Entité bloque une fenêtre pendant<span class=\\"Highlight1\\"> {0} secondes</span> après qu’un survivant a fait un saut <b>précipité</b> au travers.<br><br><i>Les effets du sort persistent tant que le Totem ensorcelé est debout.</i><br>","name":"Sort : Contrôle des foules","flavor":"« Vous ne contrôlez rien. Comme il se doit pour les gens de votre sorte. » — Ji-Woon Hak","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"Vous n’allez pas laisser n’importe qui accéder au carré VIP.<br><br>Après avoir suspendu un survivant à un crochet pour la première fois, <i>Aucune issue</i> gagne un jeton.<br>Quand le dernier générateur est réparé, l’Entité bloque les deux interrupteurs de la porte de sortie pendant <span class=\\"Highlight1\\">{0} secondes</span>, plus <span class=\\"Highlight2\\">{1} secondes</span> supplémentaires pour chaque jeton en votre possession.<br>","name":"Aucune issue","flavor":"« Ce son, quand vous saignez... je veux l’entendre à nouveau. » — Ji-Woon Hak","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"Vous avez été conçu pour traquer et éliminer vos cibles.<br><br>Au début de la partie, l’aura de tous les survivants est dévoilée pendant <spanclass=\\"Highlight1\\">{0} secondes.</span><br><br><span class= \\"FlavorText\\">« ... il sait ce qu’il veut et il n’abandonnera pas avant de réussir. » — Carlos Oliveira<\\\\span>","name":"Poursuivant meurtrier","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"Vous savez comment maltraiter un membre d’une équipe pour provoquer la panique.<br><br>Lorsque vous blessez un survivant en bonne santé avec une attaque de base, tous les survivants blessés souffrent de l’effet de statut <b>Inconscient</b> pendant <span class=\\"Highlight1\\">{0} secondes</span>.<br><I>Hystérie</i> peut uniquement être déclenchée toutes les <span class=\\"Highlight2\\">{1} secondes.</span><br><br><span class= \\"FlavorText\\">« Désolé d’être un peu nerveux. Je ne savais pas trop à quoi m’attendre. » — Robert Kendo","name":"Hystérie","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"Le parasite NE-α vous confère l’intelligence et la conscience nécessaire pour poser un piège.<br><br>Après avoir frappé un générateur, son aura apparaît en jaune. Lorsque vous plongez un survivant en état critique à l’aide d’une attaque de base, tous les générateurs affectés explosent, perdant <span class=\\"Highlight1\\">{0} %</span> de leur progression et entraînant la disparition de leur aura.<br>Tout survivant qui répare un générateur quand il explose, se met à crier et souffre de l’effet de statut Immobilisé pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br><i>Éruption</i> a un temps de récupération de <span class=\\"Highlight3\\">{2} secondes.</span><br><br><span class= \\"FlavorText\\">« Il peut utiliser des armes ? » — Jill Valentine","name":"Éruption","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/fr/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Evan MacMillan idolâtrait son père. Pas seulement parce qu\'il était l\'héritier d\'une grande fortune, mais surtout du fait de sa façon de gérer le domaine. Élevé sous sa poigne ferme, Evan avait pris l\'habitude de diriger les ouvriers d\'une main de fer. La production était toujours excellente et le domaine MacMillan prospéra sous la férule du père, comme du fils. Tout le temps où la santé mentale d\'Archie MacMillan se désintégra lentement, Evan le protégea du troupeau qui réclamait une part de sa fortune. Quoi que lui demandait son père, Evan s\'exécutait.<br><br>Quand Archie MacMillan perdit complètement pied, Evan fut l\'exécuteur de ce qui deviendrait le pire massacre de l\'histoire moderne. Ils n\'arrivèrent jamais à prouver qu\'Evan avait mené une centaine d\'hommes dans ces tunnels sombres avant de déclencher l\'explosion qui devait sceller leur sort. L\'histoire du domaine MacMillan est faite de richesse et de pouvoir qui tournèrent horriblement mal. Personne ne sait combien de victimes firent le père et le fils. Aucune archive ne mentionne ce qu\'il est advenu d\'Evan MacMillan. Son père constitue un autre mystère non résolu. Il fut retrouvé dans le sous-sol de son propre entrepôt, mort et abandonné.<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"Philip Ojomo arriva dans ce pays avec pour tout bagage l\'espoir d\'un nouveau départ. Il fut heureux quand on lui proposa un travail à la casse Autohaven. C\'était une petite casse auto où les policiers se faisaient graisser la patte pour détourner le regard des affaires louches qui s\'y pratiquaient. Ojomo s\'en fichait. Il avait côtoyé de près le crime dans son pays natal, et tant qu\'on ne l\'impliquait pas, il ne s\'en mêlait pas. Lui, il réparait les véhicules et faisait marcher la presse. Et il le faisait très bien. On insérait une voiture et un petit cube métallique en sortait.<br><br>Jusqu\'à ce jour fatal où, par hasard, il vit du sang couler d\'une des voitures à compacter. En ouvrant le coffre, il trouva un jeune homme, bâillonné, ligoté et au regard paniqué. Ojomo libéra l\'homme qui réussit à faire dix pas avant que le patron d\'Ojomo ne l\'arrête et ne lui tranche la gorge. Quand Ojomo exigea des réponses, on lui expliqua qu\'il avait en fait été un simple bourreau car presque chaque véhicule contenait une âme, c\'était le « service » que fournissait la casse auto à certains « clients ». Ojomo perdit pied et par la même occasion, la tête. Il jeta son patron dans la presse et l\'actionna doucement, quand la tête en sortit, Ojomo l\'attrapa et extirpa tête et colonne vertébrale du corps. Puis il quitta les lieux et on ne le revit jamais.<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"Fils de riches propriétaires Max et Evelyn Thompson, ce garçon sans nom était un enfant non désiré, né de parents cruels. Horriblement défiguré, il fut écarté du monde. Ils avaient tellement honte de leur fils qu\'ils l\'emmurèrent dans une pièce le nourrissant par un trou dans le mur. Quand le garçon s\'échappa, il se vengea sauvagement et terriblement, massacrant les parents qui l\'avaient torturé au lieu de l\'élever.<br><br>Son méfait accompli, il continua à vivre à la ferme, reportant sa violence pathologique sur les animaux qui étaient libres. Quand il arriva enfin à se libérer de ses entraves, il courut dans les champs de blé, pourchassant et massacrant tout ce qu\'il pouvait trouver. Les corps de Max et Evelyn ne furent jamais retrouvés, mais on découvrit des animaux torturés et éviscérés dans toute la ferme. La succession de Coldwind Farm fut rapidement réglée, ses terres divisées et vendues. Personne ne se présenta pour acheter la ferme. Peut-être était-ce dû au son d\'une tronçonneuse que l\'on pouvait entendre durant les chaudes nuits d\'été.<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"Sally Smithson arriva en ville rêvant de rires et de jeux d\'enfants dans une maison bâtie par son mari Andrew. Et un jour le contremaître d\'Andrew dut rendre visite à Sally, changeant à jamais sa vie. Sans autre solution, Sally dut se débrouiller, mais le seul emploi qu\'elle put décrocher fut à l\'asile de Crotus Prenn. Elle débuta au bas de l\'échelle, par les nuits, le plus dur. Au fil des années, son esprit avait atteint ses limites, des décennies à voir des choses trop horribles pour être regardées. À la fin, elle ne put plus le supporter, c\'est alors que germa en elle le concept de purification. Quand l\'équipe du matin arriva sur place un jour de septembre, elle trouva cinquante patients morts, figés dans leur lit, et 4 membres du personnel, tout aussi décédés. Seule Sally avait survécu à cette nuit mais son esprit s\'était brisé et elle se balançait sans arrêt d\'avant en arrière. Ils la firent monter dans une ambulance, mais cette dernière n\'atteint jamais l\'hôpital. On la retrouva accidentée, dans un bois des alentours, le personnel soignant était mort et Sally introuvable.","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"Dès qu\'Anna a été capable de marcher, sa mère a commencé à lui apprendre comment survivre à une vie dure et solitaire dans les bois du nord. Habiter dans une zone aussi reculée et dangereuse demandait du talent et de la résistance. Quand le soleil n\'était plus assez haut pour des activités productives, elles se réfugiaient dans leur maison, un vielle maison en bois robuste, construite pour résister aux hivers les plus rudes. Près de la chaleur de l\'âtre, Anne se reposait entre les bras de sa mère, entourée de quelques jouets en bois et de masques que cette dernière avait fabriqués pour elle. S\'endormant au son d\'histoires et de berceuses, elle faisait de doux rêves, ignorante des événements qui allaient bientôt tout changer.<br><br>Anna et sa mère traquaient un grand élan dans les bois. Elles savaient la proie dangereuse mais l\'hiver avait été particulièrement rigoureux et il ne leur restait presque plus de nourriture. Le spectre de la famine les effrayait plus que n\'importe quelle créature de la forêt. Sans prévenir, l\'élan se dressa sur ses pattes arrière, meugla et chargea Anna. Elle était paralysée de peur et le monde entier semblait trembler sous les sabots tonnants de l\'immense bête. L\'élan était assez près pour qu\'Anna voit la furie meurtrière dans ses yeux quand sa mère se jeta en travers de son chemin, la hache à la main. Un cri à glacer le sang s\'échappa de ses lèvres alors que l\'élan l\'empalait sur ses bois et la soulevait en l\'air. De toute ses forces, elle abattit la hache sur sa tête, encore et encore, alors qu\'il tentait de se débarrasser d\'elle. Avec un craquement écœurant, les bois se brisèrent et la mère d\'Anna fut libérée. La bête s\'écroula.<br><br>Anna était trop petite pour déplacer le corps brisé de sa mère, elle s\'assit donc près d\'elle, dans la clairière où elle était tombée. Pour la distraire des cris de l\'élan à l\'agonie, la mère d\'Anna la pris contre elle et lui murmura sa berceuse préférée. Elles restèrent ainsi, l\'immobilité et le froid gagnant la chasseuse et l\'élan, jusqu\'à ce qu\'Anna soit seule dans la forêt silencieuse. Elle finit par se lever et entama le long trajet du retour vers la maison.<br><br>Encore une enfant, elle en savait juste assez sur la vie dans la forêt gelée pour survivre. Elle suivit son instinct et finit par ne faire plus qu\'un avec la nature. Elle grandit et gagna en force et s\'entraîna à la chasse. À mesure qu\'elle se transformait en un dangereux prédateur, son humanité devint un rêve à demi-oublié.<br><br>Elle étendit son territoire et vécut de ses prises. Ses proies passèrent de l\'écureuil et du lièvre au vison et au renard. Elle finit par s\'en lasser et chassa des animaux plus dangereux comme le loup et l\'ours. Quand des voyageurs innocents passèrent dans ses bois, elle découvrit sa nouvelle proie préférée : les humains. Les âmes malchanceuses qui s\'égaraient sur son territoire étaient massacrées comme n\'importe quel autre animal. Elle aimait collecter leurs outils et leurs habits colorés, et surtout leurs jouets quand il y avait des petits. Mais elle ne se résolut jamais à tuer les petites filles.<br><br>Elle ramenait ces dernières dans sa maison, au fond des bois. Elles étaient précieuses, et les regarder éveillait quelque chose au plus profond de son cœur. Elle recherchait désespérément la proximité d\'un être cher, d\'un enfant à elle. Au milieu de son butin fait de jouets en bois, poupées et livres de contes qu\'elle ne pouvait pas lire, les fillettes étaient tenues en laisse par une corde rugueuse solidement attachée au mur. Elle ne pouvait pas les laisser vagabonder, elles mourraient sûrement là-dehors.<br><br>Mais chaque fois les fillettes s\'anémiaient et mouraient de froid, de faim ou de maladie. Et chaque fois, cela plongeait Anna dans des abimes de douleur, de peine et de folie. Elle ne pouvait s\'empêcher de réessayer, et commença à faire des raids sur les villages les plus proches pour massacrer des familles et enlever leurs filles. Elle portait un des masques d\'animaux que sa mère avait créés pour elle bien des années auparavant, pour tenter de calmer les enfants apeurés. Les villageois répandirent la légende d\'une semi-bête qui rôdait dans la Forêt Rouge : La Chasseuse, qui tuait les hommes et dévorait les petites filles.<br><br>La guerre finit par atteindre la forêt. Des soldats allemands commencèrent à la traverser, pour aller attaquer l\'empire russe au bord de l\'effondrement. Durant ces temps sombres, les voyageurs ne passèrent plus. Les villageois avaient abandonné leurs maisons, et il n\'y avait plus de petits, seulement des soldats. On en retrouva beaucoup criblés de coups de hache. Des groupes entiers disparaissaient mystérieusement. Une fois la guerre terminée, les rumeurs de la Chasseuse disparurent avec elle, englouties par la Forêt Rouge.","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"Certains humains sont tout simplement de la mauvaise graine. Une graine bouffie d\'une forme pure et concentrée de mal. Michael Myers est l\'une de ces graines. Infliger de la douleur aux autres ne lui posait aucun problème. En fait, c\'est exactement ce qu\'il recherchait. Mais la vie peut être dure, même pour ceux dont l\'esprit est rempli de terreur. La différence vient juste de la façon dont on résout ces problèmes.<br><br>Michael lui, avait besoin de tuer pour retrouver sa paix intérieure. Quand il assassina sa sœur, la police trouva sur les lieux un garçon silencieux, déguisé en clown. Quand on découvre un début d\'incendie, on ne jette pas de l\'essence dessus. Mais c\'est ce qu\'a fait l\'administration, qui ne se doutait pas que cela façonnerait le démon qui avait pris possession de ce garçon. Envoyer Michael dans un asile psychiatrique était une tentative pathétique pour sauver l\'enfant. Une thérapie vouée à l\'échec et les hurlements nocturnes aggravèrent encore son introversion et sa folie. Les gens espéraient que la parenthèse Michael Myers se refermerait, vite enterrée, vite oubliée, un raté qui ne tarderait pas à nourrir les asticots. Mais c\'est alors qu\'il... s\'échappa.<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"Lisa Sherwood grandit dans une ville paisible. Ses habitants étaient gentils ; les anciens servaient de médiateurs dans les disputes et maintenaient vivantes les traditions. Lisa appréciait particulièrement les sorts qu\'ils lui apprirent à dessiner pour se protéger et avoir de la chance. Une nuit, alors qu\'elle rentrait chez elle en passant par les bois, un orage terrible éclata sans prévenir. Dans l\'obscurité et sous la pluie, elle glissa et se cogna la tête. À demi assommée, elle vit de sombres silhouettes approcher entre les arbres. Bientôt, elles furent assez près pour qu\'elle distingue leurs sourires grimaçants, carnassiers et maléfiques.<br><br>Ils l\'enchaînèrent à un mur dans une cave inondée. Dans la pénombre, elles pouvaient voir qu\'il y avait d\'autres gens, dont les plaies ouvertes étaient couvertes de mouches. Ils ne survécurent pas longtemps quand les cannibales commencèrent à découper des parties de leur corps avec leurs lames rouillées mais, on ne sait comment, Lisa résista. Affamée et mutilée, ses bras devinrent assez maigres pour que ses entraves aient du jeu. Elle tira, et le métal déchira sa peau et ses muscles jusqu\'à ce qu\'elle se libère. Un pus jaune et visqueux s\'échappait de ses chairs et ses os étaient visibles sous ses blessures gangrenées. Elle ne pouvait pas aller plus loin. En plein délire, elle pensa à son foyer ; elle pensa aux anciens. Elle traça les symboles qu\'ils lui avaient appris. Une faim ténébreuse s\'éveilla en elle. Qui avait soif de sang. Elle choisit la vengeance.<br>Les recherches de la police finirent par les amener à la vieille baraque dans les marais. Ses occupants avaient été démembrés et dévorés. Les sorts des anciens étaient gribouillés avec du sang sur le plancher. Le corps de Lisa ne fut jamais retrouvé.<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"La question de savoir si les tueurs réalisent leurs horribles actes sous l\'effet de leur cerveau malade ou s\'ils y sont conduits par des influences extérieures a longtemps fait l\'objet de débats. Mais pour un tueur, nature et éducation sont inextricablement liées.<br><br>Leatherface ne tue pas pour imposer sa volonté aux autres, ni même pour faire taire les voix dans sa tête ou satisfaire des pulsions sanguinaires. Il tue car il a peur. Il a peur que les autres le blessent, peur de décevoir sa famille, peur que leur appétit commun pour la chair humaine ne soit découvert.<br><br>Il fait ce qu\'on lui dit, sa famille l\'aime et c\'est tout ce qui importe. Les étrangers sont une menace et les menaces doivent être éliminées. <br><br>Par exemple, ces enfants qui ont pénétré dans sa maison sans y être invités. Ils sont entrés comme s\'ils étaient chez eux. Ils ont commencé à fouiner, à la recherche des secrets familiaux, sans aucun doute. Mais Face de cuir s\'est occupé d\'eux pour protéger sa famille, comme on le lui avait appris.<br><br>Il n\'est pas qu\'un protecteur, non. Il endosse plusieurs rôles, et chacun de ses rôles a son propre visage. Il sert le repas, s\'occupe de la famille, s\'habille correctement lorsqu\'ils mangent. Son grand-père et sa grand-mères avaient l\'habitude de s\'occuper de tout le monde, mais le grand-père est dorénavant âgé et sa grand-mère n\'est plus très mobile, alors Face de cuir et ses frères ont repris le flambeau. La famille représente tout pour lui. La famille signifie confort et sécurité. <br><br>Bien qu\'il ait fait de son mieux, l\'une des enfants a réussi à s\'enfuir. Il a essayé de l\'en empêcher, la traquant aussi rapidement que possible, mais elle avait un complice : un autre étranger, au volant d\'un camion. Le routier tua son frère et l\'écrasa comme un animal sauvage. Enragé, Face de cuir lui sauta dessus, la tronçonneuse prête à venger sa famille, mais le routier était trop rapide. Il assomma Face de cuir et retourna son arme contre lui. <br><br>Tandis qu\'il regardait les étrangers s\'enfuir, la fureur et la tristesse s\'ajoutèrent à l\'inquiétude de ce qui arriverait à sa famille. Ils reviendraient avec la police, et les flics embarqueraient ses frères et son grand-père. Sans eux, que deviendrait-il ? Sans leurs ordres, il dépérirait et finirait par mourir.<br><br>Sous l\'émotion de voir son monde s\'écrouler, Face de cuir agita sa tronçonneuse dans tous les sens, essayant de combattre les myriades de menaces qui rôdaient tout autour.<br><br>Puis, un autre sentiment l\'envahit, une sensation invisible parcourant sa peau avec une terreur glaciale. Il réalisa que peu importe ce que les étrangers lui feraient, il existait quelque chose de bien pire, quelque chose de plus grand qui vivait dans l\'ombre. Une terreur nouvelle l\'emplissait, incomparable avec tout ce qu\'il avait vécu par le passé. Mais c\'était presque réconfortant, semblable à la peur qu\'il ressentait avec sa famille. La peur de les décevoir.<br><br>Il se sentir guidé vers un endroit à la fois familier et inconnu, puis comprit instinctivement ce qu\'il devrait faire. Il n\'échouerait pas comme ça avait été le cas avec sa famille. Les étrangers viendraient, mais il utiliserait ses capacités pour surmonter toutes les menaces. Il y aurait des cris, mais il les ferait taire. Jusqu\'à ce qu\'il ne reste plus que le son de sa tronçonneuse.<br><br>Laissez venir les étrangers.","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"Doté d\'une aptitude exceptionnelle pour la psychologie, Herman a été soigneusement sélectionné pour intégrer la formation spéciale d\'un programme de neuroscience avancée. Basé sur un site secret en Illinois connu sous le nom d\'Institut de la mémoire de Léry, c\'est en fait une couverture pour la CIA. C\'est là que Herman rencontra le docteur Otto Stamper. Sous sa supervision, il commença à utiliser des méthodes toujours plus étranges et cruelles pour extraire des informations des prisonniers envoyés à l\'institut, qui servait aussi de prison secrète et de centre de rééducation pour quiconque était jugé dangereux pour les U.S.A. Son utilisation à tout va d\'une thérapie violente à base d\'électrochocs donna des résultats extraordinaires et plusieurs menaces à la sécurité nationale furent mises au jour.<br><br>Les années passant, Herman devint connu comme Le Docteur et personne ne s\'interrogea sur le fait de savoir s\'il avait un diplôme de médecin ou même ce qui arrivait aux prisonniers une fois qu\'ils avaient tout dit. Ce n\'est qu\'après le silence radio complet d\'une semaine de l\'Institut de la mémoire de Léry que la véritable horreur fut enfin découverte. On retrouva les corps du personnel, des patients et des prisonniers, et tous présentaient différentes formes de traumatisme crânien. Les cadavres du personnel et des prisonniers furent tous retrouvés, y compris celui du Dr Otto Stamper, mais aucun signe de Herman « Le Docteur » Carter.<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"De son vivant, Freddy Krueger était une créature de cauchemar pour ceux qui le connaissaient réellement. Tapi derrière un masque de gentillesse et de bienveillance, le véritable tempérament de Freddy n\'était connu que de ses victimes. Une fois leurs témoignages recueillis, les parents de Springwood organisèrent une chasse à l\'homme afin de trouver Freddy et de rendre justice eux-mêmes. Cette nuit-là, ils pensèrent que le feu suffirait à les débarrasser de ce monstre, que leurs enfants étaient enfin hors de danger ; ils ignoraient cependant qu\'il leur faudrait bien plus que des flammes pour détruire un pareil démon. <br>Les années passèrent, le scénario d\'horreur fut enterré, les victimes finirent par oublier ce qui leur était arrivé. C\'est alors que Freddy ressurgit mystérieusement, prêt à transformer les rêves en cauchemars une fois encore.<br>Freddy concentra sa fureur sur ceux qui, d\'après lui, lui avaient fait du mal, ce qui l\'amena à sa véritable obsession : Nancy Holbrook. Cependant, il avait sous-estimé sa force et son ingéniosité. Aidée de son ami Quentin, elle parvint à affaiblir Freddy qui, après avoir été mutilé, fut de nouveau laissé pour mort. <br>La mort n\'avait pas accepté Freddy la première fois, pourquoi l\'aurait-elle fait cette fois-ci ? C\'est ainsi qu\'il revint, aveuglé par la vengeance. Il se concentra alors sur sa proie numéro un, le garçon qui s\'était interposé entre Nancy et lui. <br>Freddy envahit les rêves de Quentin, le terrorisant nuit après nuit, jusqu\'à ce qu\'il soit trop faible pour se défendre. Au moment opportun, il obligea le garçon à retourner dans le sombre reflet de l\'école maternelle de Badham. C\'est là qu\'il aurait son ultime vengeance.<br> Freddy traqua le garçon dans les couloirs de l\'école. Il prit son temps, savourant chaque instant de la chasse. C\'était ce qu\'il préférait le plus, l\'odeur de transpiration dans l\'air et la respiration haletante de ses victimes terrifiées. Elles étaient à sa merci. <br>Le garçon était là, au bout d\'un long couloir. La peur et la fatigue l\'empêchaient-elles de s\'enfuir ? Avait-il accepté son sort ? Freddy se rapprocha en écartant les bras, les griffes raclant les parois des murs. Elles éraflèrent un tuyau dont le crissement métallique ne fit qu\'aggraver la peur du garçon.<br>Un déluge d\'étincelles tomba en pluie sur le sol et sur le liquide qui recouvrait le carrelage. En un éclair, une flamme bleu envahit la pièce.<br>Le garçon prit la fuite, tandis que Freddy surgissait des flammes au comble de la fureur. Après un défilé de salles et de murs, ils arrivèrent dans la cave de Freddy. Il n\'y avait plus aucune issue possible.<br>Freddy se rapprocha lentement du garçon. Sa peur était si intense qu\'elle était presque palpable, mais ses yeux brûlaient d\'une haine provocante qui était presque admirable. <br>Freddy rentra ses griffes.<br>C\'est alors qu\'il sentit une autre présence près de lui : une présence ancienne, sombre et puissante. Un miasme l\'entoura et tout ce qu\'il pouvait percevoir, c\'était un bruit semblable au craquement de poutres en bois au loin. Le gémissement résonnant du métal broyé contre le métal. Un bruit obscur et inexplicable, à mi-chemin entre un langage et la terreur incarnée.<br>Freddy se sentit tomber et tournoyer, puis il se retrouva à l\'école. Mais ce n\'était pas son école. Elle était identique, mais quelque chose lui semblait différent. Une partie de ses pouvoirs était plus modérée, tandis qu\'une autre était plus concentrée. Le garçon n\'était plus là, mais les couloirs regorgeaient de nouvelles proies. Certaines ne présentaient pas de réel intérêt ; d\'autres allaient devenir ses nouveaux favoris. Mais toutes devraient tomber sous ses griffes.","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"Si John Kramer, plus connu sous le nom de Jigsaw, voulait que son fils naisse sous le signe chinois du cochon, c\'était pour symboliser la fertilité et le renouveau. Ce serait un nouveau départ pour sa femme et lui, et le début d\'une vie heureuse pour son fils. Mais son rêve vola en éclat la nuit où un junkie s\'introduisit dans la clinique de sa femme dans l\'espoir de voler des médicaments. <br><br>Son fils à naître mourut lors de l\'incident. John finit par retrouver le coupable et en fit son premier cobaye. Et la signification du cochon changea à tout jamais. Il devint une représentation de la maladie qui rongeait John de l\'intérieur, lui rappelant que nous ne sommes que de la viande, à moins de nous élever par nos actions et d\'arracher la vie des mâchoires mêmes de la mort.<br><br>Le Cochon devint un intermédiaire, un agent de Jigsaw qui menait les cobayes à l\'expérience. Pour ceux qui en sortaient vainqueurs, le Cochon pouvait encore signifier la renaissance, dans une nouvelle vie en tant qu\'apprentis, voire même disciples de Jigsaw. <br><br>Ce fut le cas d\'Amanda Young, une âme troublée dont la vie consistait en une série de blessures qu\'elle s\'infligeait à elle et aux autres. Tout cela changea quand elle affronta le test de Jigsaw et en sortit victorieuse. Elle décida que sa vie valait quelque chose et adhéra à la cause de Jigsaw, prête à lui succéder alors que le cancer le rongeait.<br><br>Mais elle finit par devenir dépendante de John. L\'angoisse qu\'elle nourrissait face à l\'approche de sa mort se mêlant à la conviction que leurs cobayes n\'étaient pas capables de se sauver, de renaître grâce aux épreuves du jeu. <br><br>Voyant cela, John lui proposa un autre jeu, une autre chance de salut, mais Amanda laissa la rage et la jalousie dicter ses actions. Elle échoua et reçut une balle pour seule récompense. <br><br>Alors qu\'elle se vidait de son sang sur le carrelage, l\'obscurité enveloppa Amanda et elle perçut le bruit du bois qui craquait. Elle se retrouva dans la forêt, voyant à nouveau le monde au travers des yeux d\'un cochon. Elle était entourée d\'arbres dont les branches la griffaient de toute part. La panique s\'empara d\'elle, alors qu\'elle entendait sa propre respiration résonner à l\'intérieur du masque.<br><br>Était-elle maudite, condamnée à passer le reste de sa vie ainsi, dans ce déguisement ? Ou était-ce un autre test ? Elle n\'avait peut-être pas échoué, après tout ? John avait toujours eu une longueur d\'avance sur tout le monde et s\'était toujours préparé à toute éventualité. Il ne l\'aurait sûrement pas abandonnée ainsi...<br><br>Jigsaw était peut-être mort, mais il l\'avait confiée à quelqu\'un d\'autre. Quelqu\'un pour qui elle serait à nouveau le Cochon.<br><br>Elle comprenait maintenant qu\'elle avait toujours pris les bonnes décisions. Le jeu était terminé. Aucun d\'eux n\'aurait droit au salut. Ils n\'étaient que de la viande destinée à mourir. ","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"Kenneth Chase naquit en 1932 suite à un accouchement compliqué, qui coûta la vie à sa mère. Cet événement creusa un fossé, jamais refermé, entre son père et lui. À mesure que le garçon grandissait, le ressentiment de son père à son encontre et son alcoolisme en faisait de même. Quand Kenneth fut en âge d\'aller à l\'école, ils vivaient la plupart du temps chacun de leur côté.<br><br>Ses résultats scolaires étaient moyens, au contraire de ses prouesses athlétiques significatives. Il devint grand et fort, excella dans les compétitions de course, mais rejeta toute les tentatives pour lui faire intégrer une équipe.<br><br>En rentrant chez lui de l\'école, il trouvait souvent des plumes par terre et il commença rapidement à les collectionner. Il les conservait dans une boîte à cigares, sous son lit. Comme son père était soit au travail, soit abruti par l\'alcool, Kenneth passait beaucoup de temps seul, hypnotisé par la régularité des barbillons des plumes et sentant leur douceur alors qu\'il les passait sur ses lèvres. En observant les oiseaux qui venait dans la mangeoire du jardin, il imagina à quel point ils devaient être doux et entreprit d\'en attraper un. Il entra dans les bonnes grâces du dentiste du coin et se procura bientôt un anesthésique. Il s\'en servit pour fabriquer un piège sur la mangeoire, en espérant endormir un oiseau assez longtemps pour pouvoir le toucher.<br><br>Après plusieurs échecs, il réussit à piéger un rouge-gorge. Alors que celui-ci reposait dans sa main, il ressentit l\'excitation d\'avoir une vie à sa merci. Il avait prévu de relâcher l\'oiseau dès qu\'il aurait récupéré de son anesthésie. Au lieu de cela, dès que ce dernier ouvrit les yeux et commença à se débattre il maintint sa prise. Ses doigts se serrèrent lentement autour de sa gorge, pressant jusqu\'à ce que les plumes de sa poitrine ne se soulèvent plus. Il se débarrassa du cadavre, ne conservant qu\'une plume qui inaugura sa nouvelle collection, la précédente ayant été jugée factice.<br><br>À la fin des années 40, Kenneth quitta l\'école et commença à travailler comme commis dans un restaurant local. Il était également passé à des proies plus grandes comme des écureuils, des ratons-laveurs et des chiens et était devenu doué pour adapter la dose d\'anesthésiant à chacun d\'entre eux.<br><br>Au début de 1954, un jeune homme disparut et toute la ville fut mise sens dessus dessous pour le rechercher. Quelques mois plus tard, le père de Kenneth, alors qu\'il rampait sous la maison pour effectuer des travaux, trouva une boîte à cigares. Il l\'ouvrit et vit, horrifié, qu\'elle contenait des plumes, des pattes d\'animaux et un doigt d\'homme.<br><br>En rentrant de son travail, Kenneth aperçut son père quitter le soubassement, une boîte à cigares dans les mains. Il tourna les talons et ne revint plus jamais chez lui.<br><br>Après quelques semaines difficiles, il croisa la route d\'un cirque ambulant qui l\'embaucha comme manœuvre, du fait de sa force prodigieuse. Il prit le nom de Jeffrey Hawk.<br><br>Tout à coup entouré d\'une communauté soudée, « Jeffrey » dut apprendre à se socialiser. Il endossa une nouvelle personnalité, comme s\'il se déguisait, devint charmant et attentionné, et sa nouvelle famille lui souhaita la bienvenue.<br><br>Au cours des dix années qui suivirent, il resta avec le cirque, voyageant à travers tous les États-Unis. Mais cette vie itinérante lui évitant toute conséquence, il prit de mauvaises habitudes. Boisson, nourriture déséquilibrée, drogue, il plongea à l\'excès dans chacune d\'entre elles. Pendant un temps ces vices lui suffirent, puis ses anciens travers refirent surface et son existence nomade lui procura une couverture pour reprendre ses tueries. Il vola aux artistes des vêtements et du maquillage, se fabriquant un déguisement qui lui permettrait d\'approcher ses victimes avant de les anesthésier et de les ramener à sa roulotte. Quand elles se réveillaient, elles étaient ligotées et à sa merci. Il pouvait alors s\'amuser en les torturant physiquement et mentalement, leurs cris l\'excitant, avant de se perdre dans la nuit.<br><br>Une fois leurs forces épuisées, il examinait attentivement leurs doigts, cherchant le plus joli, passant sa langue sur eux pour découvrir le plus savoureux. Dès qu\'il l\'avait trouvé, il le coupait et l\'ajoutait fièrement à sa collection, puis se débarrassait du corps comme s\'il s\'agissait d\'un détritus.<br><br>Homme, femme, jeune, vieux, il s\'en moquait. Ce qui fait une bonne collection, c\'est la variété des souvenirs et des histoires qu\'elle évoque.<br><br>Il quitta de moins en moins son costume, abandonnant son ancienne personnalité pour devenir le clown en lui, son être véritable.<br><br>Avec le temps il devint trop sûr de lui et négligent. Une victime réussit à se libérer de ses entraves pendant qu\'il cuvait. Elle s\'échappa, appelant au secours et il émergea pour trouver le reste du cirque qui se précipitait sur lui. Il fouetta son cheval et sa roulotte disparut dans la nuit.<br><br>Depuis il a écumé le pays. Comme un parasite il accompagnait toujours une fête foraine ou un cirque, mais n\'apparaissait jamais sur l\'affiche. Il attirait ceux assez courageux, ou assez fous, pour l\'approcher, les piégeait et partait avant que quelqu\'un s\'aperçoivent qu\'ils avaient disparu.<br><br>À un moment donné, il laissa derrière lui les routes ordinaires des USA, voyageant au travers d\'un voile de brume et pénétrant dans un nouveau royaume. C\'était un lieu au caractère transitoire et éphémère, parfait pour la vie qu\'il avait choisi de mener. Se sentant plus chez lui que jamais auparavant, il s\'installa et attendit son premier visiteur.","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"Rin était l\'unique enfant de la famille Yamaoka. Elle grandit dans les couloirs poussiéreux d\'une maison traditionnelle de Kagawa. Elle étudia l\'enseignement à l\'université privée de Takamatsu, ce qui pesa lourdement sur les finances fragiles de sa famille. Cette année-là, sa mère tomba malade et les factures commencèrent à s\'accumuler. Rin commença à travailler à temps partiel dans une vaine tentative d\'aider à alléger le fardeau.<br><br>Son père était criblé de dettes qui augmentaient sans cesse. Il commença à travailler deux fois plus, dans l\'espoir d\'obtenir une promotion. C\'est à cette époque qu\'il commença à perdre le sommeil. Un sinistre murmure le maintenait éveillé toute la nuit, comme un rappel de sa situation désespérée. Épuisé, il commença à perdre le sens de la réalité. Luttant pour refuser ce que la voix lui murmurait pendant la nuit, le père de Rin posa un geste désespéré. Il rencontra son supérieur et lui expliqua sa situation. Il le supplia pour obtenir une prime, une promotion, un congé, n\'importe quoi.<br><br>Sa demande fut refusée. L\'entreprise avait lancé une ligne de production défectueuse qui lui coûtait très cher. Quelqu\'un devait porter le blâme et le père de Rin convenait parfaitement. Il fut renvoyé après vingt-deux ans de service.<br><br>Ce soir-là, Rin rentra à la maison après le travail. Elle était restée tard pour divertir les clients qui s\'étaient attardés au restaurant. Alors qu\'elle garait son vélo dans l\'abri de jardin, elle entendit le hurlement de sa mère venu de la maison.<br><br>Elle se précipita à l\'intérieur et monta les escaliers jusqu\'à la chambre de ses parents. Là, elle trouva sa mère en morceaux sur le sol. Ses membres tranchés étaient emmêlés dans une position anormale. Sa poitrine avait été découpée, dévoilant sa cage thoracique béante. Rin eut un haut-le-cœur.<br><br>Un katana aiguisé vint s\'effondrer avec fracas. Rin bloqua la lame, qui cisailla son avant-bras dénudé. Le choc de la reconnaissance stoppa net la douleur : son père tenait le katana, avec une expression stoïque. Elle hurla pour qu\'il s\'arrête, mais il entailla à nouveau son bras.<br><br>Elle se précipita pour sortir et glissa sur le sol trempé de sang. Elle se releva en s\'appuyant sur le cadre de la porte. Le katana traversa le mur, fendant son autre bras. Elle hurla de douleur alors qu\'elle boitait dans le couloir, puis fut de nouveau atteinte par la lame de son père.<br><br>Elle recula en tremblant, alors qu\'elle retenait la chair molle de son abdomen. Les images des membres emmêlés de sa mère défilèrent devant ses yeux.<br><br>Rin s\'élança vers son père, le faisant trébucher. Il frappa son abdomen lacéré et elle s\'effondra sous la douleur. Alors qu\'elle s\'efforçait de se relever, il entailla sa cuisse, la faisant s\'écrouler sur le sol.<br><br>Alors qu\'elle rampait vers les escaliers, il la prit par les cheveux et la tira brusquement contre une cloison. Le verre se brisa sous l\'impact et elle tomba à travers, atterrissant à l\'étage du bas.<br><br>Elle entendit des bruits de pas quelque part au-dessus d\'elle. Avec effort, elle bougea, se vrillant un passage à travers une mer de verre cassé. Les éclats la rongeaient, déchirant sa chair. Il devait être arrêté. Il ne s\'en tirerait pas avec ce qu\'il lui avait fait – avec ce qu\'il avait fait à sa mère.<br><br>Rin crachait du sang, qui se mêlait à celui de son menton écorché par le verre. Son pouls commença à résonner sourdement dans ses oreilles. Elle sentait que son corps était tellement lourd qu\'elle ne pouvait plus bouger.<br><br>Le sol trembla sous les pas de son père. Elle savait qu\'elle ne s\'en sortirait pas, mais cela n\'avait plus d\'importance. Elle lui ferait payer, dans cette vie ou la suivante.<br><br>Une brume épaisse voila doucement ses yeux, mais elle ne pouvait pas apaiser sa colère. Elle ne trouverait pas le repos – pas maintenant. L\'obscurité murmura, promettant une vengeance sanglante.<br><br>Un serment fut prêté et Rin ferma les yeux.","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"Frank Morrison avait dix-neuf ans mais ne les faisait pas. Il avait arrêté l’école après avoir été expulsé de l’équipe de basket pour avoir poussé un arbitre dans les gradins. Toutefois, Frank avait du potentiel et un charisme rare malgré son enfance difficile. À six ans, il fut emmené loin de Calgary et commença à passer de famille d’accueil en famille d’accueil. Il avait beau crier, faire des scènes et se bagarrer, il était sans cesse placé dans de nouveaux foyers inconnus. Il déménagea pour la dernière fois trois ans auparavant quand son dernier père adoptif, Clive Andrews, le sortit du centre d’adoption. Ils roulèrent pendant sept heures avant d’atteindre un petit bungalow à Ormond. Ce devait être l’unique fois où ils passeraient autant de temps ensemble. Clive était trop occupé à monnayer le chèque des allocations contre des verres au bar.<br><br>Ormond était une petite ville endormie, une commune reculée de six cents habitants où les hivers gris semblaient durer la majeure partie de l’année. Frank faisait tout son possible pour partir dans une autre famille adoptive, mais il changea d’avis quand il tapa dans l’œil d’une belle fille. Julie était une fille populaire, convaincue qu’elle méritait mieux que de vivre à Ormond, et Frank, en tant qu’étranger, était son billet de sortie. Frank participait aux fêtes qu’elle organisait, où tout le monde était plus jeune que lui et facilement impressionné, ce qui lui plaisait. Il rencontra l’impulsif Joey, qui aimait parader, et la timide et naïve Susie, la meilleure amie de Julie.<br><br>Ils traînaient souvent dans un chalet abandonné sur le mont Ormond. Ces instants passés ensemble leur permettaient de sortir du conformisme ennuyeux de leur insignifiant train-train quotidien. Frank y vit l’occasion de transformer leur manque d’expérience en puissance. Il fit se succéder les nuits de débauche et de destruction, testant leurs limites. Intimidation, vandalisme et vol constituaient l’essentiel de leur agenda du week-end. Ils finirent par en arriver au point où ils faisaient tout ce qu’il demandait. Il n’y avait plus aucune limite une fois leurs masques enfilés. Un soir, Frank mit Joey au défi de vandaliser la boutique qui l’avait récemment renvoyé. Ils se faufilèrent assez facilement à l’intérieur du bâtiment censé être vide hors des horaires d’ouverture. Mais un agent d’entretien était encore sur les lieux et attrapa Julie dès qu’elle fut à proximité. Au son de ses cris étouffés, une sombre pulsion s’empara de Frank. Il fonça vers elle pour l’aider, son couteau à la main et le planta dans le dos de l’homme sans la moindre hésitation.<br><br>Alors que le groupe se retournait choqué vers Frank, il leur ordonna de terminer le boulot. Joey serra les dents, se saisit du couteau et poignarda l’homme entre les côtes. Susie ne voulait pas le faire. Frank lui cria dessus. Il fallait finir ce qu’ils avaient commencé. Julie ferma les yeux et planta le couteau dans la poitrine de l’homme. Elle passa le couteau sanguinolant à Susie. Dorénavant, ils étaient tous impliqués là-dedans, tous ensemble. Susie resta à fixer Julie, incrédule, tandis que Frank tenait ses mains tremblantes et inséra le couteau profondément dans la gorge de l’homme. Frank leur dit de s’activer. Il fallait nettoyer le sang au sol, mettre le corps dans le coffre de la voiture de Joey et filer au Mont Ormond.<br><br>Les quatre se retrouvèrent à creuser dans la boue neigeuse pour se débarrasser du corps lorsque Frank repéra quelque chose qui se déplaçait dans les bois. Il attrapa son couteau et quitta le groupe pour aller vérifier. Le brouillard s’épaissit autour de Frank, devenant si dense qu’il ne voyait plus devant lui. Il revint sur ses pas et tomba sur une piste inquiétante. Il suivit cet effrayant sentier, comme s’il était appelé par les ombres. Julie, Susie et Joey terminèrent de creuser mais Frank resta introuvable. Julie remarqua ses traces de pas boueuses dans la neige et les trois ados suivirent cette piste, qui les entraîna plus profond encore dans les bois. Lorsque Julie, Susie et Joey ne rentrèrent pas chez eux ce soir-là, leurs parents pensèrent qu’ils s’étaient enfuis avec Frank. Chaque famille établit une théorie différente. Cependant, l’ambiance de la ville changea lorsqu’un corps fut découvert dans un chalet abandonné sur le Mont Ormond.","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"Alors qu\'elle n\'avait que cinq ans, Adiris, dernière d\'une famille de sept, fut abandonnée sur les marches de briques rouges ardentes du temple de la purification au cœur de Babylone. Pour surmonter sa douleur, elle n\'eut d\'autre choix que de se convaincre que c\'était la volonté des dieux. Elle entama alors une nouvelle vie faite de servitude et de silence, s\'occupant des jardins, préparant les repas de cérémonie et veillant à l\'entretien des encensoirs cérémoniels. Le soir, elle priait dans l\'espoir de recevoir un signe qui lui indiquerait le but de son existence.<br><br>Une fois majeure, elle assista les prêtres de haut rang à l\'occasion de la cérémonie annuelle en l\'honneur du Capricorne, le dieu de l\'eau et de la création. Elle déambula dans la grande salle hypostyle avec un encensoir, laissant échapper de sombres fumées épaisses qui se dissipèrent au contact des imposantes colonnes de pierre froide. Toutes ses préoccupations s’envolèrent alors, et la béatitude qu’elle éprouva la rapprocha des dieux comme jamais auparavant. À chaque jour qui suivit, elle redoubla d\'efforts, remplissant ses tâches et en acceptant de nouvelles pour assister les prêtres lors des rituels de purification.<br><br>Ces derniers se déroulaient tous les jours et les prêtres avaient toujours besoin de plus d\'aide pour répondre aux demandes à l’extérieur des murs du grand temple, où une terrible épidémie faisait rage. En quelques mois seulement, les prêtres contractèrent eux aussi la maladie. Très vite, ils furent trop faibles pour effectuer le moindre rite et Adiris, qui avait assisté à tant de ces rituels de purification, fut la seule encore capable de continuer. La panique grandissait et il fallait bien la contenir, même si elle n’était qu’une simple novice.<br><br>Nerveuse avant sa première cérémonie, Adiris se rendit dans le sanctuaire des prêtres. Ce n’est qu’après avoir allumé les bougies qu’elle remarqua une embrasure dans le fond de la pièce. Elle s’y glissa et déboucha alors sur une crypte cachée sous le sanctuaire. La chambre était nue à l’exception de la statue en or d’une femme, tendant les mains, les doigts couverts de bijoux. C’était le signe qu’Adiris attendait depuis si longtemps.<br><br>La grande salle fourmillait de disciples, tous inclinés, au moment où Adiris entra. Elle s’avança rapidement jusqu’à l’autel de briques avant de se saisir d’une dague cérémonielle en argent, ses mains ornées de bagues à cabochon de rubis enveloppant la lame comme des griffes. Ce soudain étalage d’opulence intrigua les disciples, déjà sous le choc face à sa jeunesse et sa beauté.<br><br>Alors qu’elle commençait à réciter l’épopée de la création, une femme s’évanouit dans le fond de la pièce. Adiris se précipita à ses côtés et remarqua les cloques noires sur ses pieds. Sans la moindre hésitation, Adiris s’empara de la lame sacrée avant de trancher son propre orteil. Elle l\'offrit alors, tout ensanglanté, aux dieux et les supplia de protéger la femme. Le silence s’empara des disciples qui vénérèrent Adiris comme leur nouvelle prêtresse.<br><br>Les récits sur sa richesse, sa beauté, et sa dévotion commencèrent à se répandre dans la ville, tout aussi rapidement que l’épidémie. Très vite, les disciples d’Adiris en firent la grande prêtresse de Babylone.<br><br>Mais sa foi fut mise à l’épreuve à l’apparition des premiers signes d’infection ; sa toux n’était plus qu’un mélange de sang et de mucosités, son cou était couvert d’abcès, et son pied dont elle avait tranché l’orteil vira au noir. Son état la couvrant de honte, elle commença à porter une coiffe voilée et un encensoir afin de couvrir l’odeur rance qui lui collait à la peau. Dans l’espoir d’être sauvée, elle continua à procéder aux rituels, offrant de l’eau bénite et de la nourriture à ses fidèles.<br><br>Malheureusement, aucun rituel ne pouvait la sauver. Dans une tentative désespérée d’apaiser les dieux, Adiris s’exila de la ville. Elle voyagea au nord avec quelques disciples, s’aventurant dans les froides régions boisées de l’Uratu, jusqu’à ce qu’elle ne puisse plus continuer davantage.<br><br>Ils campèrent dans une grotte humide, Adiris gisant dans son propre vomi. Son pied, désormais complètement noir, avait tellement gonflé qu’elle ne pouvait plus avancer. C’est là qu’avec ses fidèles, ils firent face à la triste réalité : ils avaient tous été infectés par la peste.<br><br>Agenouillée parmi ses disciples pris de vomissements, Adiris fit une dernière prière. Les fumées noires d’encens s’élevèrent dans l’humidité ambiante avant d’être soufflées par une brise froide.<br><br>Ni le corps d’Adiris, ni celui de ses disciples ne furent retrouvés. Nombreux sont ceux qui partagent des histoires sur son retour mais personne ne sait quel fut le sort de la grande prêtresse de Babylone.","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"Connu par certains comme Jed Olsen, Danny Johnson prit le journal sur le comptoir de la cuisine. Il était vieux d’une semaine, mais son visage granuleux et creusé était en couverture. C’était l’une de ces après-midis étouffantes typiques de Floride, où rien dans la cuisine n’échappe à la chaleur et l’humidité ambiantes, et celle-ci ne manquait pas de le faire suer sur place. Il se traîna jusque dans un fauteuil pour lire le journal. Cet article avait intérêt à en valoir la peine, son travail à Roseville avait été remarquable.<br><br><i><b>GHOST FACE DISPARAÎT</b></i><br><br>18 juin 1993<br><br>À première vue, Jed Olsen n’était qu’un simple pigiste motivé qui avait déjà travaillé pour des quotidiens mineurs. Tous les employés de la Gazette de Roseville appréciaient sa décontraction et son honnêteté apparentes, et il ne lui avait fallu pas plus de cinq minutes pendant son entretien pour se sentir comme à la maison :<br><br>« Jed a très vite repéré le rédacteur en chef dans la pièce, il lui a souri, lui a serré la main et a commencé à lui parler des bonnes vieilles valeurs américaines. Et l’affaire était réglée. » — Ancien contributeur de la Gazette de Roseville<br><br>Olsen n’a jamais justifié sa carrière erratique, qui l’a mené à passer par de nombreuses petites villes d’Utah jusqu’en Pennsylvanie. Aucune vérification de ses précédents emplois n’avait été effectuée. Il pouvait compter sur une expérience honorable et sa bonne attitude, sans oublier qu’il leur fallait un contributeur au plus vite.<br><br><b>LES MEURTRES DE ROSEVILLE</b><br><br>Olsen travaillait au journal depuis cinq mois quand les meurtres de Roseville ont commencé. Les victimes, jeunes ou âgées, avaient toutes été poignardées chez elles. D’après les rapports, elles semblaient choisies au hasard, mais le tueur connaissait les maisons. Les multiples blessures à l’arme blanche indiquaient une motivation personnelle. Aucune trace d’ADN n’avait été retrouvée. La police locale était hagarde. Les meurtres étaient réalisés avec la violence d’un crime passionnel, mais visiblement prémédités.<br><br>Le tueur aimait également suivre ses cibles. Deux victimes avaient rapporté avoir été suivies par une silhouette sombre en rentrant chez elle, quelques jours avant leur mort. Le tueur avait dû les prendre en filature depuis le Walleyes, un petit bar au nord de Roseville, et avait photographié leur maison, tout en cherchant un moyen de s’y introduire. Il pouvait observer la même proie pendant des semaines, enregistrant la moindre de ses habitudes. Quand il ressentait l’envie de tuer, il rendait visite à la victime la plus vulnérable de sa liste et se faufilait discrètement dans son domicile.<br><br>Tout le monde travaillait sur l’histoire des meurtres de Roseville. Olsen devait souvent aller interroger la famille des victimes et transmettre les déclarations officielles de la police. Personne ne l’imaginait alors, mais il vint s’ajouter à la liste finale des victimes.<br><br><b>GHOST FACE</b><br><br>Roseville fut prise de panique quand Olsen présenta des images d’une personne portant une cagoule se glissant dans une maison de nuit. La personne masquée, une tache blanche dans l’obscurité, fixa la caméra pendant un instant, avant de disparaître à l’intérieur. « Ghost Face surpris en direct » fut le titre de l’article écrit par Olsen. À l’époque, il semblait fier de son travail, profitant de la peur de tous pour nourrir ses histoires de fantômes.<br><br>Quelques semaines plus tard, Olsen laissa un message sur son bureau, à son lieu de travail, avant de disparaître :<br><br>« J’espère que vous avez aimé mes histoires, j’ai adoré leur donner vie. Ne vous en faites pas, je n’ai pas terminé. » – Jed Olsen<br><br>Les forces de l’ordre de Roseville refusent toujours de faire le moindre commentaire alors que Jed Olsen est toujours en cavale. <br><br>Danny arracha la page de l’article tout en souriant. Il avait filé discrètement de Roseville sitôt que l’enquête s’était intéressée à lui.<br><br>Il se leva, le siège humide lui collant à la peau. L’humidité écrasante l’enveloppa alors qu’il entrait dans la chambre. La condensation s’écoulait lentement sur la minuscule fenêtre embuée et le papier-peint luttait pour tenir aux murs. Son motif fleuri était recouvert de photos horribles et de coupures de presse. Danny accrocha l’article vieux d’une semaine au-dessus d’une photo de scalpes lacérés. C’est alors qu’il commença à ressentir des crampes d’estomac et se demanda quand il avait mangé pour la dernière fois. Ce matin, en lavant son couteau et ses vêtements ? Ou hier soir, après avoir suivi la fille dans la rue ? Il ne parvenait pas à s’en souvenir.<br><br>Il fit un pas en arrière et se mit à admirer son œuvre sur le mur. Son esprit s’égarait, se souvenant de tous les articles qu’il avait écrits, les histoires qu’il avait planifiées et les scènes qu’il avait reproduites.<br><br>Un frisson le traversa. Une brise à glacer le sang avait changé l’humidité de la chambre en une épaisse brume gelée. Une femme poussa un cri. Des feuilles mortes craquaient sous ses pieds.<br><br>Il esquissa un sourire.","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"Sa gueule béante bordée de crocs tels des aiguilles pour visage, ses énormes griffes courbes aiguisées, et ses puissantes pattes pour bondir sur ses victimes, font du Démogorgon un monstre terrifiant, peu importe la dimension où on le croise. C’est un véritable cauchemar de pure rage non contenue quand il pourchasse sa proie et la déchiquète, dévorant jusqu’au dernier morceau de chair, et ne laissant pas la moindre miette aux charognards. La créature n’éprouve aucune forme de compassion ni de retenue. Quand elle se penche au-dessus de sa victime, elle ne doute pas et ne ressent aucune pitié. Suivant son instinct, elle assouvit sa soif de sang au moment de porter le coup fatal. Preuve macabre des horreurs qui hantent le monde à l’envers, le Démogorgon est le parfait chasseur, ce qui explique l’intérêt de l’Entité.","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"Faire honneur à son nom de famille n’a jamais été suffisant pour Kazan Yamaoka. Il voulait dépasser la réputation de son père et mettre fin à ce qu’il considérait comme l’appauvrissement de la culture samouraï à cause de fermiers se faisant passer pour des samouraïs. Son père a bien essayé d’attirer son attention sur des objectifs plus nobles, mais Kazan refusait de l’écouter, et emprunta le katana de son père, avant de se lancer dans un sombre pèlerinage pour prouver sa valeur et libérer le Japon des imposteurs. Ignorant le code qui lui avait été transmis, Kazan massacra les imposteurs dans les collines, les vallées, sur les plages et dans les bois. Les meurtres étaient violents, cruels et morbides. Il humilia les fermiers et les guerriers, leur arrachant chignons et armures. Sa rage, sa soif de sang et son sens retors de l’honneur n’avaient pas de limite. Les moines pensaient qu’il était possédé par un être sombre d’un autre monde et ils le maudirent tandis qu’un noble seigneur commença à l’appeler « Oni-Yamaoka », le samouraï enragé, une insulte pour Kazan et sa famille.<br><br>Décidé à restaurer le nom de sa famille, Kazan massacra quiconque avait osé l’appeler Oni-Yamaoka. L’insulte le perturbait. Il avait vaincu les meilleurs et purifié la classe des samouraïs en éliminant les imposteurs. Comment pouvaient-ils le traiter d’ogre ? Était-ce parce qu’il était parti au combat éliminer les guerriers les plus terribles ? Ou pour avoir pris un kanabō afin de broyer des centaines de crânes avec ? Ou en raison de son besoin de conserver un « trophée » de ses victimes ? Cela n’avait pas d’importance. Se faire traiter d’ogre était bien trop pour lui et une voix menaçante dans sa tête le poussa à éliminer le seigneur qui avait profané son nom.<br><br>Alors qu’il se dirigeait vers la ville du seigneur, sur une route de terre, Kazan se retrouva soudain face à un samouraï qui lui bloquait le chemin. Kazan empoigna son kanabō. Sans un mot, le samouraï attaqua et prit rapidement le dessus, mais il hésita un instant. D’un coup dévastateur, Kazan frappa le samouraï à la tête, fendant son casque et son crâne. Alors qu’il approchait du samouraï à terre, Kazan reconnut le visage de son père et recula en titubant. Dans son dernier souffle, son père le fixa d’un regard empli de honte et de regret. Kazan lui ferma les yeux et cria de douleur jusqu’à ce qu’il ne puisse plus crier davantage. Quand il rouvrit les yeux, son père avait disparu. Non seulement il avait tué son père, mais il avait laissé des bandits dérober son corps et son armure.<br><br>Amer, perdu et désabusé, Kazan erra sans but, la voix de son père résonnant dans sa tête, le provoquant, lui rappelant ses échecs, le poussant à des éclats de colère incontrôlables. Un jour, alors qu’il marchait en forêt, Kazan tomba par hasard sur une statue d’Oni. Il s’arrêta net et se tint en face immobile pendant un long moment. La statue érodée et recouverte de végétation semblait se moquer de lui, l’accuser d’être le samouraï imposteur qu’il avait tant cherché à détruire. Kazan ignora la voix moqueuse dans sa tête et se souvint du seigneur qui s’était moqué de lui en le traitant d’« Oni-Yamaoka ».<br><br>Sa colère retrouvée, Kazan se rendit dans la ville aux montagnes enneigées où résidait le seigneur. Une dizaine de samouraïs vinrent à la rencontre de Kazan aux portes de la ville. Une dizaine de samouraïs tombèrent sous les coups de son kanabō. Sa vitesse et sa force n’avaient pas d’égal. Sa rage était incompréhensible. Couvert de sang et de tripes, Kazan se fraya un chemin dans la ville et trouva rapidement le seigneur caché dans sa demeure. Il le traîna hors d’un placard, lui trancha les tendons afin de l’immobiliser et l’observa supplier et se tortiller tel un chien. Sans la moindre hésitation, il plongea son poing dans la bouche du seigneur et en arracha la langue perverse qui avait profané son nom.<br><br>Satisfait, Kazan sortit pour se retrouver encerclé par des dizaines de fermiers armés de faux rouillées, de fourches aiguisées et de lourds gourdins. Il survécut aux premiers assauts, mais ses assaillants étaient trop nombreux et l’attaquaient de tous les côtés. Très vite, Kazan se retrouva à terre, observant le ciel froid et indifférent s’assombrir, tandis que les fermiers se relayaient afin de poignarder et torturer l’« Oni » qui avait massacré leur seigneur. La foule frénétique traîna Kazan dans un moulin en pierre pour continuer de le torturer et pour l’y laisser agoniser lentement, dans des douleurs atroces. À leur retour, le moulin était rempli d’une étrange brume noire, mais le cadavre de Kazan et son kanabō avaient disparus. Ce fut là le début de la sombre légende de l’Oni enragé qui hante la ville.","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"Né en plein cœur des badlands couverts de poussière du Midwest, Caleb Quinn était le fils de pauvres immigrants irlandais. Sur la Frontière, la maladie, la famine, et la mort étaient monnaie courante, et les pionniers se battaient pour les miettes qu\'ils pouvaient tenter de récupérer tandis que les magnats s\'empiffraient. Le père de Caleb, qui avait été ingénieur, avait peu d\'options pour travailler car les commerces affichaient tous la même pancarte : « Irlandais s\'abstenir ». Ses outils vieillots n\'avaient pas été touchés depuis des années quand Caleb les redécouvrit. Notant l\'intérêt de son fils pour le métier, il lui offrit sa vieille clé. \\n\\nLes appareils fabriqués par Caleb sur les conseils de son père avaient d\'étranges applications, mais lorsque son père s\'absentait, leur emploi devenait plus sombre. Il dissimula les plans d\'un masque qui plantait des aiguilles barbelées dans les yeux d\'un être humain et les arrachait de leur orbite, ainsi que des croquis montrant les garçons qui l\'avaient harcelé portant son masque. \\n\\nAu fil des ans, Caleb put tirer profit de ses dons d\'ingénierie et les employeurs laissèrent de côté leur discrimination. Il fut recruté par Henry Bayshore, propriétaire de la United West Rail. \\n\\nCaleb inventa d\'abord un pistolet qui tirait dans le sol des crampons de chemin de fer. Ensuite, il créa une perceuse de tunnels à vapeur. Mais alors que Bayshore feignait l\'indifférence... Les appareils de Caleb commencèrent à apparaître dans d\'autres compagnies, tandis que ses brevets lui étaient dérobés avant d\'être revendus. \\n\\nUne sensation familière traversa le sang de Caleb, alimentant la douleur poignante qu\'il ressentait au fond de lui. Même à présent, il luttait pour les miettes tandis que les nantis profitaient de son intellect. Submergé par la rage, il fit irruption dans le bureau de Bayshore et réduisit sa tête en une pulpe sanglante. Alors qu\'il se faisait emmener, il colla son pistolet spécial sur le ventre de son patron et appuya sur la détente. Un crampon de chemin de fer traversa la chair et les viscères de Bayshore, le clouant à son bureau. \\n\\nLa seule chose qui sauva Caleb de la corde fut l\'improbable survie de Bayshore. Pendant quinze ans, Caleb fut enfermé à la prison de Hellshire, la première prison privée du pays. Au cœur d\'une forteresse de taulards illettrés, il trouvât un ami des plus improbables en la personne du directeur de la prison. Il concevait pour lui des appareils de torture et recevait en échange des rations supplémentaires. Au bout d\'un certain temps, le directeur lui proposa de commuer sa sentence. Il lui mentionna quelque chose de plus important que la richesse monétaire… le capital politique… et que ses contacts pouvaient monter un coup contre Bayshore et le mettre derrière les barreaux à vie. Il n\'eut qu\'une seule demande : le rendre riche. Remplir la prison. Faire preuve d\'ingéniosité pour ramener les hors-la-loi en vie. \\n\\nCaleb retourna à son atelier et après quelques modifications, il en émergea avec quelque chose de nouveau… le fusil harpon. Le premier test eu lieu lorsqu\'un voleur attaqua une blanchisserie chinoise. Profitant de l\'occasion, Caleb utilisa son prototype. Les joints de métal grincèrent au moment de tirer le crampon, qui vint se planter dans l\'abdomen de la cible. Mais alors que la lance le ferrait, elle accrocha les intestins du voleur et dans un bruit horrible, les éparpilla sur la route poussiéreuse. \\n\\nAprès plusieurs versions, les cas d\'éviscérations diminuèrent. Le directeur de la prison tira quelques ficelles et libéra des prisonniers irlandais pour former le gang de Caleb. Ce fut la naissance du gang de Hellshire. \\n\\nPendant six ans, ils maraudèrent, traquant les hors-la-loi recherchés, remplissant leur part du marché. Après un combat sanglant à Glenvale, Caleb remarqua le titre d\'un journal : Henry Bayshore achète la prison de Hellshire. Sur l\'image, un Bayshore défiguré serrait la main du directeur. Le cœur de Caleb battit de rage, et le sang coulant dans ses veines sembla en ébullition. Il s\'était fait rouler, tel le pion de la partie d\'un nanti. \\n\\nLe gang de Hellshire jura loyauté à Caleb et demanda la tête du directeur. Dans un galop rugissant, ils forcèrent les portes de la prison, hurlant tels des pillards sanguinaires. Un garde leva son arme mais il hésita. Une lance lui perça la poitrine. Caleb attrapa la tête de l\'homme et l\'éclata contre une cellule de prison jusqu\'à ce qu\'elle puisse passer entre les barreaux. \\n\\nArrivé au bureau du directeur, Caleb défonça la porte du pied et la chance sembla lui sourire. Non seulement il découvrit le directeur de prison apeuré dans un coin, mais également Henry Bayshore. Submergé par la rage, Caleb se précipita sur Bayshore, le frappant, le matraquant et déchirant sa chair. Le sang de l\'homme dégoulinait de son visage, formant une flaque pourpre à ses pieds. Le gang de Hellshire déferla sur le directeur, lui brisant les os à chaque coup. \\n\\nAlors que les deux hommes brisés suppliaient qu\'on les achève, le gang les traîna au réfectoire où ils furent jetés en pâture aux prisonniers. \\n\\nCouvert de sang et de sueur, Caleb clopina jusque dans son ancienne cellule, remarquant à peine les cris de Bayshore. Il s\'assit sur le bord du lit alors que des gouttes de sang ruisselaient de ses doigts. Une épaisse brume surnaturelle filtra par la fenêtre à barreaux. Il prit sa vieille clé rouillée et fendue, et passa le pouce le long du métal, l\'observant le regard hagard. Il ne pouvait pas se rappeler du jour où il l\'avait obtenue. Et il s\'en fichait. À ses pieds, il distingua un chemin de terre. Au bout, les silhouettes de tous ceux qui lui avaient causé du tort : les garçons qui l\'avaient harcelé, les cadres qui avaient profité de lui, et encore une fois... Henry Bayshore. Émergeant de la brume, les outils pour s\'en débarrasser : d\'impitoyables crochets d\'acier, brillants et magnifiques de par leur simplicité. Sa jambe lui faisait mal mais il supporta la douleur et se releva, empruntant le chemin de terre, ne laissant qu\'une traînée de sang derrière lui. ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"Bourreau sadique sans pitié, Pyramid Head ne vit que pour infliger de la douleur. Encombré par la structure en acier sur sa tête et armé d’une énorme lame qu’il traîne derrière lui, il errait dans les couloirs infernaux de Silent Hill, dévoué à une tâche que personne n’a jamais compris. Partout où il allait, même les monstres préféraient se tapir dans les ombres, et ceux qui croisaient sa route enduraient toute sa violence. Quand sa présence ne fut plus requise et qu’il avait accompli son devoir, il se prépara pour un long repos ; pourtant ses talents étaient requis ailleurs. Le brouillard qui l’enveloppa était différent de celui auquel il était habitué à Silent Hill, comme si chaque volute était formée par les nerfs d’une créature, se tortillant à sa recherche. À cet instant, une sorte d’accord tacite fut établi. Le nuage tourbillonnant était une invitation au devoir et au sadisme, et Pyramid Head accepta à nouveau ses obligations. ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"Pour comprendre la condition humaine, il est nécessaire de la dépasser. Tel était le credo de Talbot Grimes, un chimiste écossais dont l’ambition effrénée le mena très loin. Enfant, c\'était un garçon populaire... intelligent, charismatique et n’hésitant pas à défier l’autorité... Mais malgré cela, il était très indépendant, passant beaucoup de temps à explorer seul les champs qui s’étendaient autour de sa ville. Ce qui au départ n’était qu’une simple curiosité infantile faillit avoir des conséquences fatales après des expérimentations avec un lopin de digitale vénéneuse. Pendant plusieurs jours, il dut rester alité, dégoulinant de sueur, régurgitant le moindre aliment qui atteignait son estomac. Une fois remis sur pied, ce n’est pas la peur qui le guida, mais la fascination. L’effet aussi drastique d’une si petite fleur avait quelque chose de magique.<br><br>Une fois adulte, son ambition se développa aussi vite que ses méthodes douteuses. Il étudia à l’école de médecine de Londres et il y excella malgré plusieurs réprimandes. Son désir de repousser les limites lui valut un poste auprès de la Compagnie britannique des Indes orientales, et au bout de sept ans, il fut nommé chimiste en chef. Avec le temps, il réalisa l’un de ses plus grands exploits : une substance chimique capable d’augmenter la productivité des ouvriers tout en réduisant leur besoin de repos. Sa récompense fut un laboratoire secret sous le camp de prisonniers de l’île de Dyer.<br><br>Au large des côtes indiennes, les prisonniers de la guerre de l’opium devinrent ses sujets réticents, menant ainsi au développement d’une drogue qui permettait aux soldats de supporter un niveau de douleur incroyable. La plupart des effets secondaires étaient mineurs, mais la rumeur parlait de quelques soldats qui avaient perdu la tête. Dans leur état d’enragement, ils avaient massacré des villages entiers, empalant les populations de leurs baïonnettes, avant de les laisser pendre aux arbres. Il n’y eut aucun rapport officiel à ce sujet et Talbot refusa d\'assumer la responsabilité de ce qui ne pouvait être que des récits de guerre exagérés.<br><br>Son génie insensible semblait imperturbable, mais il n’avait pas idée du nombre d’ennemis que ses travaux douteux avaient générés. Littéralement, cette idée le frappa, à l’aide d’une barre d’acier derrière la tête, lors d’un voyage à Mangalore. Ligoté, il fut chargé dans un wagon. Quand on lui retira le bandeau des yeux, un homme maladif lui montra une fosse commune remplie de centaines de cadavres. Sans qu’il le sache, la drogue d’augmentation de productivité de Talbot avait tué presque tous les ouvriers d’une usine. Il savait qu’il ne pouvait pas se défendre contre la colère et les accusations de son ravisseur… il ne pouvait que se rouler en boule tandis que pleuvaient sur lui les coups de barre d’acier. Il fut jeté dans le charnier et laissé pour mort. Au travers d\'un cycle d\'évanouissements et de reprises de connaissance, il parvint à s’en échapper en rampant, ses doigts s\'enfonçant dans les chairs putréfiées. Des mouches noires se délectaient de sa peau non protégée, telles des centaines d’aiguilles qui le déchiraient. Épuisé, il s’effondra et tomba nez-à-nez avec les yeux noisette éblouissants d’une femme morte. Trop faible pour s\'éloigner, il ne put rien faire d’autre que constater l’œuvre de sa vie.<br><br>Et c’est alors, au seuil de la mort, qu’il fut sauvé. Il se retrouva sur un petit lit, un visage ridé chaleureux l’observant. Malgré sa respiration douloureuse, il fut soigné dans une ancienne école mystérieuse derrière une façade de monastère. Dans des jardins verdoyants derrière de hauts murs modestes, des moines étudiaient des textes interdits, cherchant à étendre l’esprit humain à la recherche d’autres dimensions, croyant qu\'elles étaient connectées les unes aux autres.<br><br>Les connaissances de Talbot s’avérèrent indispensables, ses composés chimiques altérant les esprits s’intégrant parfaitement aux théories d’expansion neuronale. Il réalisa alors que son salut n’était pas une simple coïncidence… Il avait été tiré de la fosse pour faire progresser les connaissances de l’école. Il accepta de les aider jusqu’à ce que sa guérison soit complète, s’occupant de la recherche de ce que les moines appelaient la substance d’âme, un composé dérivé de la glande pinéale capable d’ouvrir l’œil de l’esprit. Ce qui au départ n’était qu’un service rendu à ses sauveurs, devint rapidement une obsession. Alors qu’il consultait les archives d’anciens textes de l’école, il découvrit des formules scientifiques qui venaient confirmer des idées autrefois impensables. Il rêva de conduire l’humanité vers une nouvelle ère d’illumination. Peut-être qu’alors les cauchemars de centaines d’ouvriers morts, et ceux d\'yeux noisette, disparaîtraient.<br><br>Alors qu’il approchait d’une avancée, l’attitude des moines changea. Leurs sourires agréables étaient accompagnés de regards gênés et fuyants. Les conversations polies se changèrent en murmures étouffés. La dernière chose qu’il vit de l’école fut la fissure au plafond au-dessus de son lit, telle une dendrite dans le plâtre.<br><br>Ses souvenirs suivants étaient une mosaïque brisée d’images et de sensations. Des filets de lumière, des sabots de chevaux sur les pavés, la toile de jute rêche sur ses joues, et de violentes morsures au bras. Il se réveilla sale et en loques, étendu sur le matelas de paille d’une fumerie d’opium. L’esprit profondément embrumé, il pensa en premier à ses notes, unique preuve de ses découvertes révolutionnaires. Il chercha frénétiquement, rampant dans le sous-sol miteux, criant à l’aide. Les autres occupants l’observèrent depuis leur hamac, n’offrant rien d’autre que des regards apathiques noyés dans la drogue, puis sombrèrent rapidement dans la torpeur. Avant qu’il ne puisse la remarquer, une silhouette en robes apparut derrière lui et lui planta une aiguille dans le bras, et le monde se dissipa de nouveau.<br><br>Éveillé. À nouveau. À chaque fois, encore plus brumeux que la fois antérieure. Il passa sa langue sur les orifices vides entre ses dents. Combien de temps se demanda-t-il. Un vague souvenir lui revint. La substance d’âme. Ses notes. L\'instant fatidique d’une découverte. Un murmure lointain lui traversa l’esprit.<br><br>Il chercha une pierre et l’aiguisa de ses mains tremblantes. Dans la lumière tamisée de l’antre, au milieu des occupants catatoniques, il grava de mémoire ses recherches sur les murs. Il écrivit pendant des heures jusqu’à ce que ses doigts saignent, avant de continuer au sol, prenant note de tout ce que la voix lui murmurait malgré son incapacité à tout comprendre. Quand il ne lui resta plus de place pour écrire, il continua de graver le message sur sa poitrine. Couvert de sang, il fut le témoin d’un miracle… un magnifique champ de fleurs orange luxuriantes lui apparut. Le murmure l’appela, l’incitant à pénétrer dans le champ et à découvrir des mondes et des dimensions dépassant la compréhension humaine. Pendant un instant, Talbot ressentit la sensation d’émerveillement de son enfance.<br><br>Les occupants de la fumerie d’opium se réveillèrent en silence, l’odeur sèche de fumée imprégnant l’air ambiant. Émergeant du brouillard provoqué par la drogue, ils découvrirent le sol de pierre couvert de sang, de minuscules ruisselets s’écoulant le long des fissures. Tandis que leur vue s’adaptait à l’obscurité de la pièce, ils commencèrent à remarquer les textes irréguliers griffonnés. Une phrase et une seule se répétait sans fin : <i>La mort n’est que le commencement</i>.","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"Enfants siamois, Charlotte et Victor Deshayes ont développé un lien émotionnel rare. L’invraisemblance de leur naissance au XVIIe siècle pourrait passer pour un miracle, mais elle déclencha presque immédiatement une vie de persécution. Les jumeaux étaient venus au monde avec le bas du corps de Victor soudé à la poitrine de sa sœur, ses jambes enroulées autour des muscles et organes de cette dernière. Plus petit que Charlotte, il avait plus grandi en excroissance du corps de celle-ci qu’en enfant complètement formé. Les nouveau-nés se mirent à hurler, tout comme la sage-femme qui les avait aidés à naître et qui s\'enfuit de la maison en hurlant qu’une sorcière avait donné vie à un démon. C’est alors que commença la traque de Charlotte, Victor, et de leur mère, Madeleine.<br><br>Les années suivantes ne furent que de fugaces souvenirs pour les jumeaux, mais c\'était là ce qui ressemblait le plus à une vie normale. Ils s\'imaginaient que tous les enfants vivaient le même périple avec leur mère, que les parties de cache-cache dans la campagne française n’avaient rien d’exceptionnel. À l’âge de cinq ans, ils durent faire face à un nouveau défi quand leur mère tomba malade. Pale et épuisée, Madeleine n’eut d’autre choix que de déléguer la recherche de nourriture à Charlotte. Enfouie sous une couche de vêtements qui dissimulaient le corps protubérant de Victor, la jeune fille s’éloigna de leur tente en forêt et se dirigea vers la ville à proximité. Malgré son apparence était spéciale, mais elle se souvint de son entraînement, attendant une opportunité sur le marché pour chiper toute la nourriture possible. C’était une victoire dans le jeu, mais de courte durée.<br><br>Après minuit, des flammes encerclèrent le campement de la famille, dansant dans l’obscurité. Un cri brisa le silence de la nuit, donnant l’ordre à une foule de chasseurs de sorcières d’attaquer. Des mains crasseuses tirèrent les jumeaux de leur lit, Charlotte frappant du pied frénétiquement quiconque approchait. Madeleine criait pour ses enfants, mais un coup de gourdin sur son crâne se chargea de la faire taire. Victor poussa un cri strident, couinant tel un rat pris au piège.<br><br>Les chasseurs se coordonnèrent rapidement. Un juge désigné à la levée déclara Madeleine coupable de sorcellerie, preuve étant sa progéniture démoniaque. En quelques minutes, ils attachèrent son corps inconscient à un arbre, entourant ses pieds de brindilles sèches et de mousse. À son réveil, elle ne lutta pas, suppliant uniquement de ne pas laisser ses enfants la voir ainsi. Il n’en fut rien et les jumeaux furent forcés à regarder la torche allumée et les flammes dansant sur la jupe de leur mère, dévorant ses chairs. Ils virent comment la graisse dégoulinait de son cadavre, son visage tordu recouvert de cloques. Ils regardèrent jusqu’à ce que les hurlements qui déchiraient ses cordes vocales cessent, et qu\'il ne subsiste plus que le crépitement des braises et une puanteur à soulever le cœur.<br><br>La moindre trace de bonheur et de bonté qu’il y avait en eux s’éteint à la mort de leur mère. Mis en cage et transportés jusqu\'à un vieux temple en bois, ils furent revendus à un groupe d\'hommes mystérieux, vêtus de capes noires. Victor réagissait avec la férocité d’une bête enragée envers quiconque l’approchait, cherchant à mordre et à griffer. Seule sa sœur était capable de l’apaiser. Amère et haineuse envers tout le monde à l’exception de son frère, Charlotte se découvrit un but dans la protection de son frère.<br><br>Dans le temple, ils furent les sujets d’expériences inhabituelles pendant des années, parfois cruelles, mais le plus souvent déroutantes. Un jour, ils devaient briser le cou d’un petit oiseau gris. Le lendemain, les hommes les faisaient saigner au-dessus d’un vase de roses. Tous les sept jours, ils dormaient avec une branche de chêne humide sous leur oreiller. Sans oublier les chants, émis à intervalles réguliers par un chœur interminable de silhouettes cachées.<br><br>Jusqu’à ce que l’expérience finale soit programmée. Deux silhouettes guidèrent les jumeaux au centre du temple, maintenant Charlotte sur un autel dans une pièce éclairée par des candélabres. Le visage ridé d’un homme les scruta sous sa capuche, appliquant une main sur le front de chaque jumeau et procédant à un examen attentif de leur crâne. Il prononça les mots « Memento mori », tandis qu’il s\'emparait d\'une lame brillante.<br><br>Charlotte se jeta sur le côté, éloignant son frère de l’autel. Dans un cri strident, il tendit le bras aussi loin que possible et fit tomber un candélabre à terre. Le bois sec prit feu en un instant. Les flammes se propagèrent au sol, incendiant les robes noires. Des cris d’agonie transpercèrent le chaos, ce qui ne manqua pas de revigorer Charlotte. Elle se précipita à travers le brasier, ne voyant rien d’autre que de la fumée noire et des flammes torrides. Ses poumons, chargés d\'un air lourd, se firent douloureux. Elle ne trouvait pas de sortie, le moindre pas la menant vers la chaleur écrasante. Suffocant, elle tomba à genoux, et ce fut là qu’elle la vit, la lueur du soleil au travers des arbres. Elle trébucha hors des flames au milieu d’une parcelle d\'herbe couverte de rosée. Sans se retourner, elle courut dans la forêt jusqu\'à ce qu\'elle s\'écroule d\'épuisement.<br><br>Lorsque Charlotte ouvrit les yeux, elle chercha la main de Victor. Il n\'essaya même pas de bouger, son corps suspendu à son torse, inerte. Elle saisit son visage et observa ses yeux tristes, immobiles. Les mouvements auxquels elle était habituée, son corps tiraillant sa peau, ses jambes tapotant la cavité de sa poitrine, tout cela avait cessé. Victor était mort.<br><br>Charlotte n’eut d’autre choix que de continuer d’avancer en pleurant, de crainte que les capes noires et les chasseurs de sorcière ne la retrouvent. Elle dissimula le cadavre de son frère sous ses vêtements et se dirigea vers les égouts d’une ville proche. Elle y monta son campement, sortant pour voler la nourriture qu’elle pouvait et s’attaquant aux granges pour chiper la bouillie des cochons quand elle était désespérée. Au fil des ans, le cadavre de Victor finit par pourrir, ses membres noircis suintant, mais résistant à la décomposition totale, comme si le sang de sa sœur circulait encore à l’intérieur. Protéger son corps sans vie devint la seule raison d’être de Charlotte qui refusait de se séparer de l’unique famille qui lui restait.<br><br>Son adolescence fut un véritable exercice de survie. Sa haine pour l’humanité augmenta de jour en jour, car elle réalisa qu’ils ne la laisseraient jamais vivre en paix. Peu importe combien avaient perdu la vie lors de ses larcins bâclés et autres tentatives désespérées de s’échapper, ils seraient toujours plus nombreux à la poursuivre et à la traiter de monstre, de démon, de sorcière. Et les capes noires étaient les pires de tous. Ils la pourchassaient sans cesse, la forçant constamment à abandonner son abri et à prendre la fuite.<br><br>Charlotte passa des années à fuir, faisant couler le sang par nécessité, veillant sur son frère mort depuis longtemps. Durant un hiver particulièrement froid, son corps commença à lâcher. La nourriture se faisait rare et son refuge branlant ne la protégeait pas des températures glaciales. Armée d’une faucille, elle se recroquevilla près de son feu de camp dans les bois, ignorant si les capes noires l’emporteraient avant que le froid ne s’en charge. Tandis que ses narines et ses lèvres gelées prenaient une légère teinte bleutée, Charlotte ressentit quelque chose qu’elle n’avait jamais éprouvé jusqu’à ce jour : l’acceptation. Elle ferma les yeux et s’ouvrit à la sérénité de la mort quand elle entendit un cri strident et féroce. Victor fut alors pris de spasmes et s’agita sur son torse, un nuage de brume l’enveloppant. Avant qu’elle ne puisse réagir, il tomba à terre dans une flaque de sang et partit en courant dans la neige.<br><br>Refusant de céder à la mort, elle s\'élança à sa poursuite, l’appelant par son nom. Elle courut dans la forêt jusqu’à ce qu’elle aperçoive Victor, assis à proximité d’une brume épaisse. Son visage, tordu et sauvage, hurla tandis qu’une silhouette sombre à capuche émergea de la brume, l’attrapa par le bras et l’emporta. La sérénité éprouvée par Charlotte s’était évanouie, laissant place à une haine bouillonnante et à la rage sur laquelle elle s’était appuyée pendant si longtemps. Serrant firmament sa faucille, elle s’élança dans la brume, prête à éviscérer quiconque approcherait de son frère.","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"Ji-Woon Hak s\'épanouissait sous l\'attention des autres, alimenté par les regards l\'observant et quiconque prononçait son nom. Malgré le prestige, il ne désirait qu\'une seule chose : en obtenir toujours davantage. Même quand il était enfant, il trouvait toujours le moyen d\'attirer l\'attention d\'autrui. Quand il travaillait dans le restaurant familial, il attirait la clientèle par ses spectacles de lancer de couteaux. Les touristes crédules pensaient que c\'était là quelque chose de traditionnel en Corée du Sud, distribuant volontiers leur argent en retour. Le père de Ji-Woon dépensait les gains du restaurant dans des cours de danse et de chant pour son fils, l\'incitant à atteindre la gloire que lui ne connaîtrait jamais.<br><br>Ji-Woon ne le déçut pas. Après des années passées à régaler des moins-que-rien de ses capacités à l\'occasion de concours de talents, la gloire s\'ouvrit à lui. Yun-Jin Lee, une productrice de Mightee One Entertainment, recruta Ji-Woon dans son programme. Il fut transféré dans un dortoir à Séoul où, quatorze heures par jour, on lui apprit à se déplacer et à chanter, à trouver le bon équilibre entre la confiance et la modestie, afin d\'en faire une star.<br><br>Le processus fut épuisant, mais le résultat concluant. Yun-Jin sélectionna Ji-Woon pour l\'intégrer au boys band NO SPIN et il apporta toute son énergie brute à leurs chansons. La gloire fut presque immédiate. Ji-Woon connut alors l\'adoration des fans, enchaînant les interviews, et bien que leur calendrier effréné épuisa les autres membres du groupe, lui se sentait revigoré. Chaque jour venait affirmer qu\'il était bien meilleur que toute la médiocrité vomie par la société.<br><br>Mais au fil du temps, il commença à se lasser du champagne. Quand il regardait ses fans, il voyait comment leur joie et leur envie étaient divisées en cinq, dilué entre les membres du groupe. Il tenait là sa confirmation, mais il était désespéré, ce n\'était pas assez et il en voulait toujours plus.<br><br>Ji-Woon maintenait les apparences, dissimulant son profond dégoût derrière un charme artificiel. Il enregistra le dernier album de NO SPIN avec ses compagnons, sans jamais rater la moindre note. Après une longue pause déjeuner, il retourna au studio où il découvrit que le destin lui avait fait un cadeau. L\'odeur de câbles brûlés était facilement reconnaissable. Il se précipita en régie, et vit comment la porte était bloquée par des haut-parleurs tombés. De l\'autre côté, les membres du groupe tambourinaient à la porte, leurs cris accompagnés par le crépitement des flammes.<br><br>Ji-Woon les interpela, avant de se précipiter vers les haut-parleurs, d\'en saisir un et de s\'arrêter net. Il se figea sur place. Chaque inspiration était un processus conscient et délibéré nécessitant toute son attention... les cris proches étaient à peine audibles, et lentement, il recula. C\'est alors qu\'il les entendit. Ils hurlaient son nom tandis que les flammes les dévoraient. Ils criaient à l\'aide. Ji-Woon ! Ji-Woon ! Ji-Woon Hak ! Il n\'avait jamais rien entendu de si beau. À l\'arrivée des pompiers, ses larmes étaient sincères.<br><br>Ji-Woon fut glorifié comme une figure tragique, un héros qui avait fait tout son possible dans une vaine tentative pour sauver ses amis. Yun-Jin lui fit enchaîner les interviews jusqu\'à ce que le moment soit venu de lui donner une nouvelle image. Il avait ressuscité, sous le nom du Farceur, un artiste solo qui produisait ses propres chansons, arborant un cœur sensible sous une apparence sauvage. Mais loin des plateaux de télévision et des concerts, quelque chose de sombre grandit en lui.<br><br>Il cibla ceux qui vivaient seuls, s\'en prenant à eux à la nuit tombée. Sa première victime fut un étudiant de conservatoire à la voix captivante. Ji-Woon le réveilla à l\'aide d\'une batte de baseball sur son crâne, lui attachant les bras et les jambes, le bâillonnant avec un chiffon scotché sur sa bouche. Il le tortura pendant des heures, le disséquant vivant. Mais il lui manquait quelque chose... un lien. Il voulait entendre la voix merveilleuse de sa victime supplier tandis qu\'il l\'éventrait, mais il n\'obtint que des cris étouffés au travers de son bâillon.<br><br>Il apprit la leçon et s\'adapta.<br><br>Les victimes devaient être enlevées puis menées dans un bâtiment abandonné où il pourrait laissait leur voix transmettre librement leurs émotions. Il créa de la musique grâce à elles, faisant pression aux bons endroits pour activer différents types de cris et hurlements. Poignarder le carré des lombes provoquait un long gémissement guttural, mais trancher la carotide créait un son similaire à celui d\'un chat en train de se faire étrangler. Il y avait une forme d\'honnêteté dans leur souffrance. Ji-Woon enregistrait chaque session, les synthétisant et les retravaillant pour les intégrer à ses chansons, les dissimulant derrière des couches mélodiques.<br><br>Son œuvre le remplissait de joie. Il laissa des indices à la police, disposant un boa de vison d\'une récente séance photo autour de la gorge tranchée d\'une victime. Pour son meurtre suivant, il arracha les dents d\'un homme, pour qu\'il ressemble à celles du boxeur d\'un de ses clips. À l\'occasion d\'un appel particulièrement audacieux visant à attirer l\'attention, il tua une fan connue lors d\'une rencontre VIP, remplaçant ses yeux par des boutons de manchette en diamant et écrivant J\'AI VU DIEU en lettres de sang sur sa poitrine. Chaque scène était un spectacle éblouissant.<br><br>Entre sa musique et ses meurtres, le monde entier parlait de l\'œuvre de Ji-Woon. Néanmoins, la violence devint sa forme d\'art préférée, ce qui affecta sa carrière musicale. Les recettes diminuaient et les cadres de Mightee One commencèrent à le signaler. Yun-Jin, dans une rage professionnelle, prit sa défense, mais elle était en infériorité numérique. Ji-Woon se vit alors interdire de produire ses propres chansons.<br><br>La décision fut dévastatrice. Ses chansons fusionnaient l\'humanité la plus authentique à la musique, mais les cadres rejetaient tout ce qui n\'était pas générique et prévu. Sa décision était prise. S\'ils étaient incapables de comprendre son art, il les y intégrerait jusqu\'à ce qu\'ils y parviennent. \\n\\nIl disposait de trois mois avant de se produire à l\'occasion d\'un concert privé pour le conseil d\'administration de Mightee One ; trois mois pour préparer son magnum opus. Il transféra des sommes folles à un vétérinaire en échange de bonbonnes de protoxyde d\'azote, puis soudoya le technicien de scène du théâtre privé de Mightee One pour lui donner accès à la salle. Le bénéfice du doute que lui octroyait sa célébrité, personne d\'autre ne pouvait en profiter. Quand son spectacle fut prêt, le gaz circulait dans la pièce où les cadres et les machinistes attendaient Ji-Woon, qui comme par hasard, était en retard. \\n\\nÀ son arrivée, les corps semi-conscients étaient affalés sur leurs fauteuils et à même le sol. Il travailla rapidement, ligotant tous les assistants, marquant seulement une pause en arrivant à Yun-Jin, la femme qui l\'avait sorti de son trou à rats et poussé sur la voie qu\'il méritait. Elle aurait droit à sa récompense, et profiterait d\'un accès spécial au merveilleux spectacle à venir. Même sous sédation, elle luttait, une violente tempête faisant rage en elle, bien plus forte que les autres. Il l\'installa comme unique membre du public, la forçant à garder les yeux ouverts. Les autres furent menés sur scène en pleurs pour procéder à leur acte final. D\'un rire méprisant, il les maquilla tout en les giflant et dirigea les projecteurs sur eux. Ils devinrent ses instruments. \\n\\nSur le son de mélodies auto-produites, il les tortura, virevoltant avec grâce d\'un corps à l\'autre, menant un crescendo lyrique à partir de leurs gémissements. Ils hurlaient, gémissaient, pleuraient, et imploraient leurs proches, appelaient leur mère. Ce fut une superbe effusion d\'émotions, l\'essence même de l\'être humain, et ils le firent tout en fixant Ji-Woon du regard. \\n\\nLes viscères se vidaient sur scène puis il lança son couteau, afin de taire le dernier instrument humain et mettre un terme à la musique. Épuisé, couvert de sueur et de sang, Ji-Woon regarda Yun-Jin et fit une révérence. Rappel. Il avait atteint la perfection. Lame en main, il se dirigea vers Yun-Jin, prêt à régler les derniers détails avant le générique de fin. Mais alors qu\'il l\'approchait... \\n\\nle brouillard. \\n\\nIl ignorait son origine, mais il s\'éleva autour d\'eux, humide, froid... agréable. Il vit la grande scène : des hôpitaux et des temples, des forêts et des abattoirs... un plan éternel décoré de crochets rouillés, alimenté par le million d\'yeux qui l\'observeraient, le fuiraient, <i> feraient l\'expérience d\'une rencontre avec lui</i>. Il lui suffisait d\'accepter, de devenir un instrument du brouillard et, plus important, de les faire crier. \\n\\nEncore !","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"Conçu par Umbrella Corporation, le Nemesis est une arme bio-organique quasi imparable, centrée sur la traque et l’élimination de ses cibles. Issu en partie de la série Tyrant T-103, l’intelligence et la conscience de ce spécimen sont améliorées grâce à l\'implantation du parasite NE-α. Sa première mission se déroula à Racoon City, où il suivait un objectif particulier : exterminer les membres du S.T.A.R.S. Ravageant la ville, le Nemesis affronta Jill Valentine plusieurs fois, et bien qu’elle parvint chaque fois à s’échapper, il n’était jamais bien loin. Il avait presque réussi à attraper sa cible, lorsqu’une brume étrange l’enveloppa, se mêlant à la fumée de la ville plongée dans le chaos. Le phénomène n’avait aucune importance pour lui, l’oxygène froid et appauvri ne représentait pas la moindre menace à ses yeux. Avançant droit dans la brume, il était décidé à remplir sa mission : trouver les S.T.A.R.S., exterminer les S.T.A.R.S., et tuer quiconque se mettrait en travers de son chemin.","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/fr/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Un dernier souffle déchirant et violent arraché à Patrick Spencer, directeur de l\'asile de Crotus Penn. Canaliser son énergie permet à l\'Infirmière de rejoindre le monde des esprits en se téléportant plusieurs fois d\'affilée, ce qui la met dans un état d\'épuisement.<br><li>Confère la téléportation.</li><li>Confère <b>1</b> Téléportation en chaîne supplémentaires.</li>","name":"Dernier souffle de Spencer","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"Un grand piège à patte en acier. On trouve des pièges tout autour de la zone, prêts à être ramassés et installés n’importe où.<br><br><b>PIÈGE À OURS</b><br>Par défaut, vous commencez la partie avec <b>1 piège à ours</b>. Trouvez-en plus sur le terrain et récupérez-les.<br><b>Installer un piège à ours :</b><br>Appuyez et maintenez le <i>bouton Pouvoir</i> pour placer un <b>piège à ours</b> devant vous à un emplacement adéquat. Un <b>piège à ours</b> installé immobilise et handicape tout joueur qui marche dessus. Un survivant en bonne santé qui marche sur un <b>piège à ours</b> installé se blesse mais peut tenter de se sortir du piège. Appuyez sur le <i>bouton Interaction</i> pour attraper un survivant handicapé par un <b>piège à ours</b> à proximité.<br><b>Réarmer un piège :</b><br>Appuyez et maintenez le <i>bouton Pouvoir</i> près d’un <b>piège à ours</b> sur le terrain, s’il n’est pas déjà armé.<b>Récupérer un piège à ours :</b><br>Appuyez sur le <i>bouton Interaction</i> près d’un <b>piège à ours</b> sur le terrain pour le récupérer. Par défaut, vous pouvez porter au maximum <b>1 piège à ours</b>.","name":"Piège à ours","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"Lourde cloche en fonte dotée de pouvoirs anciens. Permet à l’utilisateur d’entrer dans le monde des esprits quand il la fait sonner.<br><br><b>CLOCHE DES LAMENTATIONS</b><br>Appuyez et maintenez le <i>bouton Pouvoir</i> pour <b>Disparaître</b>. Appuyez et maintenez le <i>bouton Pouvoir</i> pendant l’invisibilité pour <b>Réapparaître</b>, ce qui vous octroie un boost de vitesse qui dure <b>1 seconde</b> après votre réapparition. La Cloche des Lamentations peut être entendue à <b>24 mètres</b>.<br><br><b>Disparaître :</b><br>pendant l’invisibilité, <b>le Spectre</b> bénéficie d’une vitesse de mouvement supérieure, d’une invisibilité presque totale, et de l’effet de statut <b>Indétectable</b>. <b>Le Spectre</b> ne peut pas attaquer pendant l’invisibilité, mais il peut interagir avec les objets de l’environnement. L’exposition à une forte lumière force <b>le Spectre</b> à <b>Réapparaître</b> automatiquement.","name":"Cloche des lamentations","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"Appuyez et maintenez le <i>bouton Pouvoir</i> pour lancer une Attaque ruée. Les survivants frappés pendant une Attaque ruée passent en état critique.<br><li> Chaque action de tronçonneuse (démarrer la tronçonneuse, la faire vrombir, et les <b>Attaques ruées</b>) entraîne la hausse de la jauge de surchauffe.</li><li> Si la <b>jauge de surchauffe</b> est pleine, la tronçonneuse ne peut pas être utilisée avant d’avoir complètement refroidi. Atteindre la limite de chaleur ne met pas fin à une <b>Attaque ruée</b> en cours.</li><li>La <b>jauge de surchauffe</b> diminue quand la tronçonneuse n’est pas utilisée.</li>","name":"Tronçonneuse","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"Une compétence enseignée par sa mère et maîtrisée dans la nature. La Chasseuse peut lancer des hachettes avec une précision létale.<br><li>Débute la partie avec <b>5 hachettes</b>.</li><li>Le lancer peut être chargé pour augmenter leur vitesse.</li><li>Récupérez des hachettes dans les <b>casiers</b>.</li>","name":"Hachettes de chasse","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"Les ténèbres qui l’habitent lui donnent la détermination nécessaire pour ôter la vie à ses victimes.<br><br><b>MAL INTÉRIEUR</b><br>Activer <b>Mal intérieur</b> permet à <b>la Silhouette</b> de voir sa proie clairement et d’emmagasiner encore plus de pouvoir malfaisant en la traquant. <br><br><b>Mal intérieur I</b><br>Octroie l’effet de statut <b>Indétectable</b>. Réduit légèrement la vitesse de mouvement. Réduit légèrement l’allonge de <i>l’attaque de base</i>.<br><br><b>Mal intérieur II</b><br>Réduit modérément le rayon de terreur. Augmente légèrement la vitesse de mouvement. Augmente légèrement l’allonge de <i>l’attaque de base</i>.<br><br><b>Mal intérieur III</b><br>Une fois activé, tous les survivants souffrent de l’effet de statut <b>À découvert</b>. <b>Mal intérieur III</b> dure <b>60 secondes</b>, après quoi il retombe à <b>Mal intérieur II</b>.<br><br><b>CAPACITÉ SPÉCIALE : TRAQUER</b><br>Maintenez enfoncé le <i>bouton Pouvoir</i> pour Traquer tous les survivants visibles. Traquer des survivants augmente la progression du rang de <b>Mal intérieur</b>.<br><br><span class=\\"FlavorText\\">« Je l’ai rencontré, il y a de cela quinze ans. On m’avait dit qu’il était dénué de tout ; de raison, de conscience, de compréhension et qu’il lui manquait même les notions élémentaires de vie et de mort, de bien et de mal. Je l’ai rencontré alors qu’il était âgé de six ans, pâle, sans émotion, doté des yeux les plus noirs qu’il m’ait été donné de voir... les yeux du démon. J’ai passé huit longues années à essayer d’établir un contact avec lui, puis sept autres à essayer de l’enfermer, car j’avais alors réalisé que derrière ces yeux se cachait tout simplement le mal le plus pur qui soit. » - Dr Sam Loomis</span>","name":"Mal intérieur","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"Source du pouvoir de la Harpie, un doigt noirci utilisé pour catalyser son terrible pouvoir. La Harpie contrôle et façonne la boue selon ses désirs. Avec de simples dessins rituels, elle crée des répliques trompeuses d\'elle-même, faites de boue et de plantes en décomposition. Elle les utilise pour produire différents effets.<br><li>Confère la capacité de créer et de conserver <b>10</b> pièges fantômes.</li><li>Confère la capacité de se téléporter directement vers un fantôme quand il est déclenché dans un rayon de <b>40 mètres</b>.</li>","name":"Catalyseur noir","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"Le Cannibale commence la partie avec 3 charges. Appuyez et maintenez le <I>bouton Pouvoir</i> pour consumer une charge et effectuer une attaque <b>Balayage à la tronçonneuse</b> capable de frapper plusieurs cibles. Les survivants frappés pendant un <b>Balayage à la tronçonneuse</b> passent en état critique.<br><li>Utilisez une charge pour étendre la longueur du <b>Balayage à la tronçonneuse</b>. Ceci implique un temps de recharge légèrement plus long.</li><li> Les charges de tronçonneuse se rechargent quand elle n’est pas utilisée.</li><br><br>La <b>jauge de crise</b> se remplit lentement lorsque la tronçonneuse vrombit. Une fois la jauge pleine, ou après avoir frappé un objet pendant un <b>Balayage à la tronçonneuse</b>, le Cannibale entre en <b>crise</b>. La <b>crise</b> inflige des dégâts aux survivants qui l’entourent et les plonge en état critique.<br><li>La durée de la <b>crise</b> augmente pour chaque charge utilisée pendant le <b>Balayage à la tronçonneuse</b>. Toute charge restante est perdue.</li><li> Pendant une <b>crise</b>, la vitesse de mouvement est réduite.</li><li>La <b>jauge de crise</b> diminue quand la tronçonneuse n’est pas utilisée et elle se vide complètement pendant un <b>Balayage à la tronçonneuse</b>.</li> ","name":"Tronçonneuse de beauf","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>ÉTINCELLE DE CARTER</b><br>Frapper des survivants avec les capacités spéciales du <b>Docteur</b>, <b>Électrochocs</b> ou <b>Explosion électrique</b>, augmente la <i>folie</i> du survivant, lui infligeant finalement l’effet de statut <b>Folie</b> et déclenchant des effets de plus en plus puissants.<br><b>Folie I :</b><br>Pousse les survivants à crier une fois, dévoilant leur position au <b>Docteur</b>. Affecte <b>légèrement</b> la position et le sens du test d’habileté.<br><b>Folie II :</b><br>Pousse les survivants à crier une fois et leur inflige des hallucinations sous la forme d’un <i>docteur fictif</i>. Affecte <b>modérément</b> la position et le sens du test d’habileté.<br><b>Folie III :</b><br>Pousse les survivants à crier par intermittence et leur inflige des hallucinations sous la forme d’un <i>docteur fictif</i>. Affecte <b>énormément</b> la position et le sens du test d’habileté. Le survivant ne peut pas soigner, réparer, saboter, déverrouiller, purifier ou utiliser d\'objets tant qu’il ne parvient pas à <i>Se secouer</i>. Quand un survivant parvient à <i>Se secouer</i>, il revient à <b>Folie I</b>.<br><br><b>CAPACITÉ SPÉCIALE : Électrochocs</b><br>Appuyez et maintenez le <i>bouton Pouvoir</i> pour administrer des <b>Électrochocs</b>, ce qui projette une attaque électrique à distance au sol devant vous. La <i>folie</i> des survivants frappés par <b>Électrochocs</b> augmente et les interactions qu’ils ont entamées sont immédiatement interrompues. <b>Électrochocs</b> annule immédiatement l’effet de statut <b>Inconscient</b>.<br><br><b>CAPACITÉ SPÉCIALE : Explosion électrique</b><br>Appuyez et maintenez le <i>bouton de capacité active</i> pour lancer une <b>Explosion électrique</b> qui pousse tous les survivants dans le rayon de terreur du Docteur à crier et qui augmente leur <i>folie</i>. <b>Explosion électrique</b> peut uniquement être activée en dehors de la phase de récupération. <b>Explosion électrique</b> annule immédiatement l’effet de statut <b>Inconscient</b>.","name":"Étincelle de Carter","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"Les survivants éveillés entendent le rayon de terreur <b>du Cauchemar</b>. Ils le voient en permanence jusqu’à 16 mètres, par intermittence de 16 à 32 mètres, mais plus du tout au-delà. <b>Le Cauchemar</b> endort de manière passive les survivants pendant 60 secondes et les envoie dans le monde onirique, ils y entrent aussi automatiquement avec une <i>attaque de base</i>.<br><br>Dans le monde onirique, les survivants subissent l’effet de statut <b>Inconscient</b> et peuvent être affectés par les <b>attrape-rêves</b>. Les survivants peuvent se réveiller en échouant aux tests d’habileté, si un survivant éveillé accomplit l’action <i>Debout</i>, ou en utilisant les réveils qu’ils trouvent. Chaque <i>Debout</i> successif prend deux fois plus longtemps à réaliser. Utiliser le réveil immunise les survivants contre le sommeil pendant 30 secondes.<br><br><b>CAPACITÉ SPÉCIALE : ATTRAPE-RÊVE</b><br>Maintenez le <i>bouton Pouvoir</i> pour placer un <b>attrape-rêve</b>. Les survivants souffriront de l’effet de statut <b>Entrave</b> en touchant un <b>attrape-rêve</b> et pour une courte durée après l’avoir touché.<br><br>Certains accessoires permettent de remplacer les <b>attrape-rêves</b> par des <b>palettes oniriques</b>. Dans le monde onirique, les palettes oniriques apparaissent à l’emplacement habituel des palettes. <b>Le Cauchemar</b> les voit en surbrillance et elles ne l’étourdissent pas.<br><br><b>JETONS DE RÊVE</b> :<br><b>Le Cauchemar</b> commence avec 5 jetons de rêve pour placer des attrape-rêves. Une fois tous les jetons dépensés, l’attrape-rêve le plus ancien est détruit et un nouveau est placé.<br><br><b>CAPACITÉ SPÉCIALE : PROJECTION ONIRIQUE</b><br>Maintenez le <i>bouton de capacité active</i> pour vous téléporter jusqu’à un générateur visible. Pour chaque survivant dans le monde onirique, le temps de recharge est réduit de 15 %.","name":"Démon des rêves","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"À jamais dévouée à la cause de son maître, elle punit les ingrats et les coupables à grand renfort de ruse et de casse-têtes mortels.<br><br><b>Le Cochon</b> peut se déplacer furtivement, courir lors des embuscades et placer des pièges à ours inversés mortels sur la tête des survivants.<br><br><b>BAPTÊME DE JIGSAW</b><br>Vous commencez la partie avec <b>4</b> pièges à ours inversés <i>inactifs</i>. Lorsque vous vous tenez au-dessus d’un survivant en état critique, appuyez sur le <i>bouton de capacité active</i> pour placer une piège à ours inversé <i>inactif</i> sur le survivant. Les pièges à ours inversés deviennent <i>actifs</i> quand un générateur de la partie est terminé.<br>Les survivants peuvent se libérer des pièges à ours inversés <i>actifs</i> ou <i>inactifs</i> en fouillant les boîtes puzzle disséminées aux alentours pour trouver la bonne clé.<br><b>Pièges à ours inversés actifs</b><br>Quand les pièges à ours inversés deviennent <i>actifs</i>, ils déclenchent un compte à rebours. Un survivant avec un piège à ours inversé <i>actif</i> est automatiquement sacrifié à la fin du chronomètre ou s’il tente de quitter la partie en étant toujours muni d’un piège à ours inversé <i>actif</i>.<br><br><b>CAPACITÉ SPÉCIALE : S’ACCROUPIR</b><br>Appuyez sur le <i>bouton de capacité active</i> pour vous accroupir. Appuyez de nouveau sur le <i>bouton de capacité active</i> en étant accroupi pour vous relever. <b>Le Cochon</b> se déplace plus lentement en étant accroupi. <b>Le Cochon</b> bénéficie de l’effet de statut <b>Indétectable</b> en étant accroupi.<br><br><b>ATTAQUE SPÉCIALE : EMBUSCADE</b><br>Appuyez et maintenez le <i>bouton d’attaque</i> en étant accroupi pour courir et effectuer une attaque en <b>Embuscade</b>.<br><br><span class=\\"FlavorText\\">« Tu me donneras tout, chaque cellule de ton corps. Les traces sur tes bras appartiennent à une autre vie. Cette vie n’existe plus. Une fois dans ce couloir, tu ne peux plus faire demi-tour. Est-ce que tu comprends ? » - Le baptême de Jigsaw</span>","name":"Baptême de Jigsaw","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"Durant toutes ses années à expérimenter des anesthésiants et des décontractants, le Clown a développé plusieurs concoctions et formules efficaces. Il s’est servi de sa préférée, le Tonique d’after, avec d’excellents résultats, intoxiquant et capturant de nombreuses victimes. L’Antidote d’after associé a également des effets pratiques.<br><br>Touchez le <i>bouton de capacité active</i> pour passer du <b>Tonique d’after</b> à l’<b>Antidote d’after</b>. Touchez ou maintenez puis relâchez le <i>bouton Pouvoir</i> pour lancer une bouteille.<br><br>Appuyez et maintenez le <i>bouton de capacité active</i> pour remplir à nouveau vos bouteilles.<br><br><b>CAPACITÉ SPÉCIALE : Tonique d’after</b><br>La bouteille se brisera au contact, libérant un nuage de gaz violet qui <b>intoxiquera</b> les survivants. Les survivants <b>intoxiqués</b> souffriront d’une vue amoindrie, d’une vitesse de mouvement réduite et d’une toux irrépressible durant 2 secondes.<br><br><b>CAPACITÉ SPÉCIALE : Antidote d’after</b><br>La bouteille se brisera au contact, libérant un nuage de gaz gris qui devient jaune après activation. Le Clown et les survivants qui entrent dans un <b>nuage d’Antidote</b> actif gagnent un bonus de vitesse de mouvement de 10 % pendant 5 secondes. Les survivants <b>intoxiqués</b> qui entrent dans un <b>nuage d’Antidote</b> sont guéris.","name":"Tonique d\'after","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"L\'Esprit peut utiliser son pouvoir, la Hantise de Yamaoka, pour pénétrer un sphère éthérique et réapparaître à un nouvel endroit.<br><li>Maintenez le bouton Pouvoir pour charger. L\'Esprit quittera son corps physique, laissant une « coquille » immobile.</li><br>Pendant que la Hantise de Yamaoka est active :<li>l\'Esprit peut passer librement à un nouvel endroit, se déplaçant plus rapidement pendant une courte durée. Il reste limité à un déplacement à l\'intérieur du milieu et de l\'environnement physiques.</li><li>l\'Esprit quitte la sphère physique, perdant de vue tous les survivants. Cependant, il peut toujours sentir les marques d\'éraflure qu\'ils laissent dans l\'environnement.</li><li>l\'Esprit émettra un signal sonore depuis son emplacement actuel.</li><li>une fois le pouvoir terminé, l\'Esprit conserve son boost de vitesse pendant un courts laps de temps et sa coquille disparaît.</li><br>L\'utilisation de la Hantise de Yamaoka vide la barre de pouvoir de l\'Esprit. Cette barre se remplira automatiquement au fil du temps et doit être pleine pour que le pouvoir puisse être déclenché à nouveau.","name":"Hantise de Yamaoka","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"Ils formaient un groupe d’amis comme les autres jusqu’à ce que Frank fasse d’eux la Légion. Désormais, ils tirent une force immense de la liberté palpitante qu’ils éprouvent en n’obéissant plus qu’à leurs propres lois.<br><br><b>FRÉNÉSIE ANIMALE</b><br>Activez <b>Frénésie animale</b> pour courir très vite et enchaîner les attaques contre plusieurs survivants. Quand votre jauge de puissance est pleine, appuyez sur le <i>bouton Pouvoir</i> pour lancer <b>Frénésie animale</b>. Tant que <b>Frénésie animale</b> est active, <b>la Légion</b> se déplace plus vite et accède à des capacités supplémentaires : <b>Saut de palette</b> et <b>Lacération sauvage</b>.<br><br><b>CAPACITÉ SPÉCIALE : SAUT DE PALETTE</b><br>Appuyez sur le <i>bouton Interaction</i> quand <b>Frénésie animale</b> est active, pour effectuer un <b>Saut de palette</b> au-dessus d’une palette lâchée.<br><br><b>ATTAQUE SPÉCIALE : LACÉRATION SAUVAGE</b><br>Appuyez sur le <i>bouton Attaque</i> tant que <b>Frénésie animale</b> est active, pour effectuer une <b>Lacération sauvage</b>. Toucher un survivant avec <b>Lacération sauvage</b> le blesse et lui inflige l’effet de statut <b>Blessure profonde</b>. La jauge de puissance de la Légion est remplie et tous les survivants dans le rayon de terreur non affectés par l’effet de statut <b>Blessure profonde</b> sont signalés par l’Instinct de tueur. Si le survivant est déjà affecté par l’effet de statut <b>Blessure profonde</b>, <b>Frénésie animale</b> cesse immédiatement et sans effet.","name":"Frénésie animale","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"Son état empira alors que le mal se propageait à tout son corps. Ses orteils noircirent, son cou se couvrit de kystes et elle vomissait fréquemment du sang.<br><br><b>PURGE D’INFAMIE</b><br>Infectez les objets de l’environnement et les survivants avec <b>Purge d’infamie</b> pour créer un cycle continu de maladie. Appuyez et maintenez le <i>bouton Pouvoir</i> pour charger <b>Purge d’infamie</b> et lâchez le bouton pour projeter un jet de bile infectieuse. Un survivant atteint devient infecté. Un objet de l’environnement atteint devient infecté pour une courte durée. Les survivants qui interagissent avec des objets infectés le deviennent également.<br><br>Quand l’indicateur d’infection d’un survivant est totalement rempli, il est blessé, souffre de l’effet de statut <b>Brisé</b>, et il se met à vomir à intervalles irréguliers.<br><br><b>CAPACITÉ SPÉCIALE : FESTIN DE CORRUPTION</b><br>Les survivants infectés peuvent complètement se soigner et éliminer leur infection en se purifiant dans un <i>bassin de dévotion</i>. Cette action corrompt le bassin et permet à <b>l’Épidémie</b> de s’alimenter de la corruption pour amplifier sa purge. Appuyez et maintenez le <i>bouton Interaction</i> à côté d’un <i>bassin de dévotion</i> corrompu pour transformer <b>Purge d’infamie</b> en <b>Purge de corruption</b>. Cette action élimine la corruption du bassin.<br><br><b>ATTAQUE SPÉCIALE : PURGE DE CORRUPTION</b><br>Après avoir utilisé la capacité <b>Festin de corruption</b>, <b>Purge d’infamie</b> est remplacée par <b>Purge de corruption</b> pour un court instant. <b>Purge de corruption</b> blesse immédiatement le moindre survivant atteint, mais n’applique plus d’infection aux survivants et aux objets de l’environnement.","name":"Purge d\'infamie","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>Ghost Face</b> avait l’habitude de surveiller ses victimes pendant des semaines, enregistrant avec soins leurs habitudes. Quand le besoin de tuer devenait trop pressant, il savait exactement où et comment frapper.<br><br><b>LINCEUL NOCTURNE</b><br>Appuyez sur le <i>bouton Pouvoir</i> pour activer <b>Linceul nocturne</b> quand la jauge de puissance est pleine. <b>Ghost Face</b> bénéficie de l’effet de statut <b>Indétectable</b> tant que <b>Linceul nocturne</b> est actif. Effectuer une <i>attaque de base</i> vide complètement la jauge de puissance et désactive <b>Linceul nocturne</b>.<br><b>Détecter</b><br>Les survivants proches de <b>Ghost Face</b> peuvent tenter de le <i>détecter</i> en regardant dans sa direction pendant un court instant. Une <i>détection</i> réussie vide complètement la jauge de puissance de <b>Ghost Face</b> et désactive automatiquement <b>Linceul nocturne</b>. L’emplacement des survivants qui <i>détectent</i> <b>Ghost Face</b> est indiqué par <i>Instinct de tueur</i> pour un très court instant.<br><br><b>CAPACITÉ SPÉCIALE : TRAQUER</b><br>Maintenez enfoncé le <i>bouton Pouvoir</i> pour traquer vos victimes pendant que <b>Linceul nocturne</b> est actif. Maintenez enfoncé le <i>bouton Pouvoir</i> derrière une cachette pour en sortir et traquer plus rapidement. Réussir à traquer un survivant <i>marquera</i> votre cible et appliquera l’effet de statut <b>À découvert</b> à votre <i>marque</i> pour une durée limitée.<br><br><b>CAPACITÉ SPÉCIALE : S’ACCROUPIR</b><br>Appuyez sur le bouton de capacité active pour vous accroupir. Appuyez de nouveau sur le bouton de capacité active en étant accroupi pour vous relever. <b>Ghost Face</b> se déplace plus lentement en position accroupie.<br><br><span class=\\"FlavorText\\">« Oubliez que je suis là. Parfait, continuez comme ça. Bien. C’est l’image que je veux garder de vous. » – Ghost Face</span>","name":"Linceul nocturne","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"Un pouvoir inconnu, venu d’un autre monde, envahit son corps. Soudain, le sol s’ouvrit, engloutissant le Démogorgon.<br><br><b>NÉ DE L’ABÎME</b><br>Touchez ou maintenez le <i>bouton Pouvoir</i> pour complètement charger et activer <b>Né de l’abîme</b>. Tous les survivants à proximité d’un portail activé seront signalés par votre Instinct de tueur.<br><br><b>ATTAQUE SPÉCIALE : DÉCHIQUETER</b><br>Appuyez sur le <i>bouton Attaque</i> tout en chargeant ou en maintenant <b>Né de l’abîme</b> afin de plonger en avant et d\'asséner une vilaine lacération.<br><br><b>CAPACITÉ SPÉCIALE : PORTAILS</b><br>Appuyez sur le <i>bouton de capacité active</i> pour ouvrir un portail au sol devant vous.<br><b>Traverser le monde à l’envers</b><br>Lorsque vous vous tenez sur un portail placé et qu’un portail différent est en surbrillance, appuyez de nouveau sur le <i>bouton de capacité active</i> pour voyager au travers du monde à l’envers et atteindre le portail visé.<br><b>Portails activés</b><br>Les portails deviennent « activés » quand ils sont utilisés une première fois, comme entrée ou sortie. Seuls les portails activés peuvent être scellés par les survivants. L’aura des portails activés est illuminée en jaune.","name":"Né de l’abîme","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"Le désir de détruire des lignées inférieures incarné en une force réelle.<br><br><b>COLÈRE DE YAMAOKA</b><br>Absorbez les orbes de sang laissés par vos ennemis blessés. Appuyez et maintenez le <i>bouton Pouvoir</i> pour absorber des orbes de sang dans l’environnement et remplir votre jauge de puissance. Quand votre jauge de puissance est pleine, appuyez et maintenez le <i>bouton de capacité active</i> pour lancer <b>Fureur sanglante</b>.<br><b>Fureur sanglante :</b>\\ntant que <b>Fureur sanglante</b> est active, <b>l’Oni</b> devient létal et accède à des capacités supplémentaires : <b>Ruée démoniaque</b> et <b>Coup démoniaque</b>.<br><br><b>CAPACITÉ SPÉCIALE : Ruée démoniaque</b><br>Appuyez et maintenez le <i>bouton Pouvoir</i> quand <b>Fureur sanglante</b> est active pour effectuer une <b>Ruée démoniaque</b>. Cette capacité permet à <b>l’Oni</b> de parcourir de grandes distances rapidement.<br><br><b>ATTAQUE SPÉCIALE : Coup démoniaque</b><br>Appuyez et maintenez le <i>bouton Attaque</i> quand <b>Fureur sanglante</b> est active pour effectuer un <b>Coup démoniaque</b> devant vous. <b>Coup démoniaque</b> a une plus grande portée et plonge immédiatement les survivants touchés en état critique.","name":"Colère de Yamaoka","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"Le génie du Lance-mort lui confère la capacité d’attraper les primes grâce à une invention unique... un fusil hybride lourdement modifié qui remplace les munitions traditionnelles par des pointes affilées fixées à une chaîne.<br><br><b>L’EXPIATEUR</b><br>Appuyez et maintenez le <i>bouton Pouvoir</i> pour viser des cibles. Appuyez sur le <i>bouton Attaque</i> pour tirer une lance qui peut transpercer un survivant, ce qui permet ensuite de le ramener vers <b>le Lance-mort</b> contre sa volonté.<br><b>Mouliner :</b><br>Quand un survivant est harponné par <b>l’Expiateur</b>, appuyez et maintenez le <i>bouton Pouvoir</i> pour le ramener vers vous. Le survivant peut se débattre contre la chaîne ou utiliser l’environnement pour la casser. S’il y arrive, <b>le Lance-mort</b> est brièvement étourdi et le survivant est blessé, subissant l’effet de statut <b>Blessure profonde</b>. Utiliser une <i>attaque de base</i> sur un survivant harponné casse la chaîne sans qu’aucun malus ne soit appliqué, que ce soit au <b>Lance-mort</b> ou au survivant. Porter un coup à un survivant harponné avec une <i>attaque de base</i> s’il est en bonne santé l’afflige également de l’effet de statut <b>Blessure profonde</b>.<br><b>Recharger :</b><br><b>l’Expiateur</b> doit être rechargé après chaque tir pour pouvoir faire feu à nouveau. Appuyez et maintenez le <i>bouton de capacité active</i> pour recharger <b>l’Expiateur</b>.","name":"L’expiateur","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"Ouvrez les portes de la souffrance et subissez le jugement ! Le Grand couteau fend le sol, laissant place à une création infernale et répandant l’agonie sur tous ceux qui approchent.<br><br><b>RITES DU JUGEMENT</b><br>Maintenez le <i>bouton Pouvoir</i> pour les activer. Une fois activés, déplacez-vous dans n’importe quelle direction pour tracer une piste au sol.<br><br>Les survivants qui marchent ou courent sur la piste déclenchent <i>Instinct de tueur</i> et sont affectés par <i>Tourment</i>. Les survivants affectés par <i>Tourment</i> peuvent être envoyés dans une <b>Cage d’expiation</b> quand ils sont en état critique.<br><br><b>ATTAQUE SPÉCIALE : Châtiment des damnés</b><br>Appuyez sur le <i>bouton Attaque</i> quand <b>Rites du jugement</b> est actif pour déclencher le <b>Châtiment des damnés</b>. Cette capacité lance une vague de force qui blesse les survivants sur son chemin.<br><br><b>CAPACITÉ SPÉCIALE : Cage d’expiation</b><br>Appuyez sur le <i>bouton de capacité active</i> lorsque vous vous tenez au-dessus d’un survivant en état critique et qui souffre de <i>Tourment</i> pour l’envoyer dans une <b>Cage d’expiation</b>. Les survivants dans une <b>Cage d’expiation</b> peuvent être sacrifiés comme s’ils étaient suspendus à un crochet. Pendant la seconde phase du rituel d’invocation, ils seront forcés de réussir des tests d’habileté pour repousser l’Entité.<br><br>Être secouru ou secourir un autre survivant d’une <b>Cage d’expiation</b> supprime <i>Tourment</i>.<br><br><b>CAPACITÉ SPÉCIALE : Jugement final</b><br>Appuyez sur le <i>bouton de capacité active</i> lorsque vous vous tenez au-dessus d’un survivant en état critique qui souffre de <i>Tourment</i>, et qui a déjà atteint la phase de lutte sur un crochet ou dans une cage, pour l’exécuter.","name":"Rites du jugement","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"Le sérum de pustulas s’écoule dans ses veines, corrompant son corps et son esprit, tout en lui conférant des capacités physiques surnaturelles.<br><br><b>CAPACITÉ SPÉCIALE : RUÉE</b><br>Appuyez sur le <i>bouton Pouvoir</i> pour effectuer rapidement une <b>Ruée</b> vers l\'avant. Cela utilise un jeton de <b>Ruée</b>. Le Fléau ne peut pas effectuer d’attaque pendant une <b>Ruée</b>.<br><br>Faites une <b>Ruée</b> contre un mur ou un obstacle dans l\'environnement pour déclencher un <b>Impact</b>. Si la <b>Ruée</b> n’entre pas en contact avec un mur ou un obstacle, ou si le Fléau n’a plus de jetons de <b>Ruée</b>, il plongera dans un bref état de fatigue et commencera à recharger les jetons.<br><br><b>ATTAQUE SPÉCIALE : RUÉE MORTELLE</b><br>Après un <b>Impact</b>, appuyez sur le <i>bouton Pouvoir</i> pour lancer une <b>Ruée mortelle</b>. Cela utilise un jeton de <b>Ruée</b>. Une <b>Ruée mortelle</b> est identique à une <b>Ruée</b>, si ce n\'est que le Fléau peut lancer des attaques à l’aide du <i>bouton Attaque.</i>","name":"Corruption du Fléau","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"Bien que liés à jamais par leur sang et leurs traumatismes, les Jumeaux ont acquis la capacité de séparer le corps qu’ils partagent. Ensemble, ils chassent en tant que frère et sœur, présentant ainsi une double menace pour les survivants.<br><br><b>CAPACITÉ SPÉCIALE : Lien du sang</b><br>Appuyez et maintenez le <i>bouton Pouvoir</i> pour libérer <b>Victor</b>. Passez de <b>Charlotte</b> à <b>Victor</b> en appuyant sur le <i>bouton de capacité active</i>.<br><br>Quand il est seul, <b>Victor</b> déclenche <b>Instinct de tueur</b>, signalant à <b>Charlotte</b> le contour des survivants qui marchent ou courent près de lui. Les survivants qui peuvent entendre les cris de <b>Victor</b> sont exposés. Néanmoins, <b>Victor</b> peut être écrasé par les survivants quand vous contrôlez <b>Charlotte</b>.<br><br>S’il se fait écraser, <b>Victor</b> réapparaît sur <b>Charlotte</b> au bout d’un moment.<br><br><b>ATTAQUE SPÉCIALE : Bond</b><br>Lorsque vous contrôlez <b>Victor</b>, maintenez le <i>bouton de capacité active</i> pour charger un <b>Bond</b> et appuyez sur le <i>bouton Attaque</i> pour l’activer.<br><br>Un <b>Bond</b> réussi inflige des dégâts au survivant. Si le survivant avait toute sa santé, <b>Victor</b> s’y accroche, déclenchant <b>Instinct de tueur</b> et dévoilant la position de tous les survivants proches. Le survivant souffre alors des effets de statut <b>Brisé</b>, <b>Inconscient</b> et <b>Immobilisé</b>. De même, il est incapable d’entrer dans les casiers et d’emprunter la porte de sortie. Le survivant auquel <b>Victor</b> est accroché peut l’écraser en effectuant l’action <b>Supprimer</b>.<br><br>Si <b>Victor</b> rate son <b>Bond</b>, il est temporairement vulnérable et peut se faire écraser par un survivant. Si Victor atterrit sur un obstacle plus grand que lui, il est détruit.","name":"Lien du sang","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>Une compétence hypnotisante, peaufinée par une vie de pratique, Ji-Woon Hak libère une volée de couteaux à une cadence élevée.</i><br><br><b>SUCCÈS FOU</b><br><br>Commencez la partie avec <b>60 lames</b>. Maintenez appuyé le <i>bouton Pouvoir</i> pour vous préparer et entrer en état de lancer.<br><br>Dans cet état, touchez le <i>bouton Attaque</i> pour lancer une seule lame, ou maintenez le <i>bouton Attaque</i> pour libérer une volée de lames. La volée augmente le contrôle et la cadence de lancer tout en réduisant la vitesse de mouvement. Rechargez vos lames dans les casiers.<br><br><b>Jauge de Lacération :</b> la <b>jauge de Lacération</b> d\'un survivant augmente chaque fois qu\'il est touché par une lame. Une fois pleine, il perd un segment de santé, subissant l\'état Blessé ou Mis à terre.<br><br>La jauge de Lacération d\'un survivant baisse petit à petit s\'il n\'est pas touché par une lame pendant un court moment. Toucher un survivant avec une attaque de base fait immédiatement baisser sa jauge de Lacération.<br><br><b>CAPACITÉ SPÉCIALE : Événement principal</b><br>Chaque lame qui touche remplit la <b>jauge d\'événement</b>. Une fois pleine, <b>Événement principal</b> peut être activé en appuyant sur le <i>bouton Capacité</i>. Dans ce mode, le Farceur lance automatiquement un nombre de lames illimité pour toute la durée d\'<b>Événement principal</b>. Sa cadence de lancer est augmente considérablement et sa vitesse de mouvement n\'est pas réduite à chaque lancer. <b>Événement principal</b> peut être annulé en appuyant sur le <i>bouton de capacité active</i>. Cela réinitialise la <b>jauge d\'événement</b> à 0 et lance le temps de récupération de <b>Succès fou</b>.","name":"Succès fou","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"Un virus qui inflige des mutations extrêmes et qui peut être transmis. Les effets secondaires incluent une agressivité et une force amplifiées.<br><br><b>ATTAQUE SPÉCIALE : Coup de tentacule</b><br>Appuyez et maintenez le bouton Pouvoir pour charger une attaque. Une fois chargée, touchez le bouton Attaque pour effectuer un <b>Coup de tentacule</b>. Frapper un survivant à l’aide de <b>Coup de tentacule</b> lui inflige l’effet de statut <b>Contaminé</b> et augmente votre <b>taux de mutation</b>. Si un survivant est déjà <b>contaminé</b>, <b>Coup de tentacule</b> réduit sa santé.<br><br>Les survivants peuvent soigner la <b>Contamination</b> qui les affecte ou qui affecte d’autres survivants à l’aide d’un <b>Vaccin</b> disponible dans les <b>caisses de ravitaillement</b>. Le nombre de <b>Vaccins</b> est limité. Après avoir utilisé un <b>Vaccin</b>, l’emplacement du survivant est dévoilé par Instinct de tueur.<br><br><b>Taux de mutation :</b> votre puissance augmente suivant votre <b>taux de mutation</b>. Au niveau <b>2 de taux de mutation</b>, la portée de <b>Coup de tentacule</b> augmente. Au niveau <b>3 de taux de mutation</b>, <b>Coup de tentacule</b> peut détruire des palettes et des murs destructibles. L’icône du virus T indique le niveau actuel du <b>taux de mutation</b>.<br><br><b>ENNEMI SPÉCIAL : zombies</b><br>Quand un <b>zombie</b> attaque un survivant, il lui inflige l’effet <b>Contaminé</b>. Si le survivant est déjà <b>Contaminé</b>, sa santé diminue.<br><br><b>Les zombies</b> peuvent être détruits d\'un <b>Coup de tentacule</b> pour augmenter votre <b>taux de mutation</b> et les survivants peuvent les détruire avec des palettes. Les <b>zombies</b> détruits réapparaissent après un court instant.","name":"VIRUS T","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/fr/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Accorde <b>100 %</b> de points de sang bonus dans toutes les catégories pour tous les joueurs de cette partie.<br><li>Cumulable.</li>","name":"Banderoles de fête sanglante","flavor":"« Le souvenir d\'un bon temps sanglant quand les gens venaient ensemble, mais repartaient en hurlant. »","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"<b>Dissipe légèrement</b> la Brume Noire.<br><li>Cumulable.</li>","name":"Réactif transparent","flavor":"« La brume se propage, avalant tout dans sa profonde folie. Il n\'y a pas d\'issue, pas d\'échappatoire, pas d\'abris sauf les eaux claires de l\'étang perdu dans la forêt. » - Inconnu, carnet de notes","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"<b>Épaissit légèrement</b> la Brume Noire.<br><li>Cumulable.</li>","name":"Réactif faible","flavor":"« Paralysé, j\'attends la mort dans le froid. »","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"<b>Épaissit modérément</b> la Brume Noire.<br><li>Cumulable.</li>","name":"Réactif vaporeux","flavor":"« La brume est attirante, fascinante. Je l\'aime et je la crains à la fois. » - Carnet de dessin de Donna","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"<b>Épaissit fortement</b> la Brume Noire.<br><li>Cumulable.</li>","name":"Réactif trouble","flavor":"« La brume semble nous protéger de la bête, mais c\'est un poison, un cancer qui nous remplit de noirceur et de folie. » - Inconnu, carnet de notes","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"Réclame un <b>clair de lune très obscur</b> à l’Entité.","name":"Bouquet de nouvelle lune ","flavor":"« Vous feriez mieux de retourner vous coucher, il n’y a pas de lune ce soir. »","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"Réclame un <b>clair de lune plus obscur</b> à l’Entité.","name":"Bouquet de Croissant de Lune","flavor":"« La lune disparaît lentement dans un sourire : \\"Ne vous inquiétez pas, votre secret ne risque rien avec moi...\\" ou est-ce un rictus ? »","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"Réclame un <b>clair de lune plus lumineux</b> à l’Entité.","name":"Bouquet de quart de lune","flavor":"« La vieille lune montre son visage, baissant ses yeux sur les proies. »","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"Réclame un <b>clair de lune très lumineux</b> à l’Entité.","name":"Bouquet de pleine lune","flavor":"« Comme la lune s’élève, le loup hurle et la chasse commence. »","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"<b>Augmente légèrement</b> la probabilité d\'être envoyé à la propriété MacMillan une fois brûlée.<br><li>Cumulable.</li>","name":"Page du registre de MacMillan","flavor":"« Une page de registre déchirée, au texte effacé par le temps, totalement illisible à l\'exception du cachet de MacMillan. »","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"<b>Augmente considérablement</b> la probabilité d\'être envoyé à la propriété MacMillan une fois brûlée.<br><li>Cumulable.</li>","name":"Page de registre signée","flavor":"« Une page de registre au texte effacé par le temps, relative à du matériel minier et à d\'autres transactions. Signée par Archie MacMillan. »","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"<b>Augmente énormément</b> la probabilité d\'être envoyé à la propriété MacMillan une fois brûlée.<br><li>Cumulable.</li>","name":"Phalange de MacMillan","flavor":"« Les restes de MacMillan furent retrouvés dans le sous-sol de l\'entrepôt de la mine. Un marteau de mineur se trouvait à côté des os fracassés de ses jambes. »","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"<b>Augmente légèrement</b> la probabilité d\'être envoyé à la casse Autohaven une fois brûlée.<br><li>Cumulable.</li>","name":"Plaque d\'immatriculation trouée","flavor":"« Une plaque de métal fortement rouillée, pliée et tordue. »","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"<b>Augmente considérablement</b> la probabilité d\'être envoyé à la casse Autohaven une fois brûlée.<br><li>Cumulable.</li>","name":"Plaque d\'immatriculation de Virginie","flavor":"« Une plaque rouillée et pliée de l\'État de Virginie. »","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"<b>Augmente énormément</b> la probabilité d\'être envoyé à la casse Autohaven une fois brûlée.<br><li>Cumulable.</li>","name":"Clé d\'Azarov","flavor":"« La clé cassée d\'un véhicule de marque inconnue. D\'après le porte-clés, le propriétaire serait un certain A. Azarov. »","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"<b>Augmente légèrement</b> la probabilité d\'être envoyé à Coldwind Farm une fois brûlée.<br><li>Cumulable.</li>","name":"Étiquette à bétail - 28","flavor":"« Une étiquette à bétail tachée de sang, frappée du numéro 28. »","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"<b>Augmente considérablement</b> la probabilité d\'être envoyé à Coldwind Farm une fois brûlée.<br><li>Cumulable.</li>","name":"Étiquette à bétail de Coldwind - 81","flavor":"« Une étiquette à bétail tachée de sang, estampillée Coldwind Farm et frappée du numéro 81. »","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"<b>Augmente énormément</b> la probabilité d\'être envoyé à Coldwind Farm une fois brûlé.<br><li>Cumulable.</li>","name":"Médaillon en cœur","flavor":"« Un collier avec un cœur en argent. Les initiales E+M sont gravées dans la face interne. »","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"<b>Augmente légèrement</b> la probabilité d\'être envoyé à l\'Asile de Crotus Prenn une fois brûlé.<br><li>Cumulable.</li>","name":"Certificat de démence","flavor":"« Un billet usé et terni au texte illisible. »","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"<b>Augmente considérablement</b> la probabilité d\'être envoyé à l\'Asile de Crotus Prenn une fois brûlé.<br><li>Cumulable.</li>","name":"Certificat de démence de P. Elliott","flavor":"« Un billet rose ordonnant le transfert de Philip Elliot à l\'Asile de Crotus Prenn. »","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"<b>Augmente énormément</b> la probabilité d\'être envoyé à l\'Asile de Crotus Prenn une fois brûlée.","name":"Photo de mariage calcinée","flavor":"« La photo brûlée d\'un couple prise le jour des noces. Les visages sont calcinés et impossibles à identifier. »","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"<b>Augmente légèrement</b> les chances d\'être envoyé à Haddonfield une fois brûlé.<br><li>Cumulable.</li>","name":"Brochure du Festival de la Moisson","flavor":"« Une brochure d\'information délavée contenant la planification du Festival de la Moisson d\'Haddonfield \'78. Une grande citrouille façon cartoon est visible sur la couverture. »","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"<b>Augmente considérablement</b> les chances d\'être envoyé à Haddonfield une fois brûlé.<br><li>Cumulable.</li>","name":"Bardeau décrépit","flavor":"« Un bardeau pourri et moisi comme on en trouve dans la plupart des maisons d\'Haddonfield. »","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"<b>Augmente énormément</b> les chances d\'être envoyé à Haddonfield une fois brûlé.","name":"Clé de la propriété Strode","flavor":"« Une clé de maison, anodine en apparence. Sur l\'étiquette en carton qui y est attachée, on peut lire \\"Propriété des Strode\\", et une adresse écrite à la main : \\"45 Lampkin Lane\\". »","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"<b>Augmente légèrement</b> la probabilité d\'être envoyé au marais de Backwater une fois brûlée.<br><li>Cumulable.</li>","name":"Cordage fumant","flavor":"« Un morceau de cordage marin brûlé dont se dégage toujours une fumée chaude. »","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"<b>Augmente considérablement</b> la probabilité d\'être envoyé au marais de Backwater une fois brûlée.<br><li>Cumulable.</li>","name":"Panneau de bienvenue fumant","flavor":"« Un panneau de bienvenue grossièrement fabriqué en planches de cyprès. Le panneau est calciné. Il est toujours fumant. »","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"<b>Augmente énormément</b> la probabilité d\'être envoyé au marais de Backwater une fois brûlée.","name":"Livre de recettes de Grand-mère","flavor":"« Un classeur en cuir contenant d\'horribles recettes à base de chair humaine, comme le bon vieux chili de grand-mère. »","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"<b>Augmente légèrement</b> la probabilité d\'être envoyé à l\'Institut de la mémoire de Léry quand utilisé.<br><li>Cumulable.</li>","name":"Certificat d\'urgence","flavor":"« Une copie carbone jaunie d\'un certificat d\'admission en détention immédiate pour traitement d\'urgence. Le reste des informations est couvert de taches et illisible. »","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"<b>Augmente considérablement</b> la probabilité d\'être envoyé à l\'Institut de la mémoire de Léry quand utilisé.<br><li>Cumulable.</li>","name":"Rapport d\'évaluation psychiatrique","flavor":"« Un rapport d\'évaluation psychiatrique signé par Herman Carter. Il décrit la maladie mentale qui crée de sérieux conflits avec la capacité du patient à vivre de façon indépendante : la dépendance à Internet. »","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"<b>Augmente énormément</b> la probabilité d\'être envoyé à l\'Institut de la mémoire de Léry quand utilisé.","name":"Lunettes cassées","flavor":"« Des lunettes tordues. Des éclaboussures de sang sont visibles sur ce qui reste des verres cassés. »","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"<b>Augmente légèrement</b> les chances d\'être envoyé dans la Forêt rouge après avoir été brûlé.<br><li>Cumulable.</li>","name":"Galet peint","flavor":"« Une pierre douce et soyeuse, polie par un ruisseau. Décorée de peinture rouge, noire et blanche, elle représente un ours à la mine sérieuse. »","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"<b>Augmente considérablement</b> les chances d\'être envoyé dans la Forêt rouge après avoir été brûlé.<br><li>Cumulable.</li>","name":"Livre pour enfants","flavor":"« Un vieux livre de contes abimé dont les pages ont été arrachées par les éléments. »","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"<b>Augmente énormément</b> les chances d\'être envoyé dans la Forêt rouge après avoir été brûlé.","name":"Le Dernier Masque","flavor":"« Un masque de tigre magnifiquement réalisé qui irait parfaitement sur un visage d\'enfant. Une note pâlie en alphabet cyrillique est inscrite au dos. »","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"<b>Augmente énormément</b> les chances d\'être envoyé à Springwood en cas d\'utilisation.","name":"Le joueur de flûte","flavor":"« Trahi par le village, il exerce sa vengeance en emportant tous leurs enfants. »","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"Brûler cette offrande vous confère protection contre la perte de vos accessoires en fin de partie.","name":"Parade noire","flavor":"« Entendez ma voix, guidez-moi, protégez-moi du vide. »","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"Brûler cette offrande vous protège contre la perte de votre objet et de vos accessoires.","name":"Parade blanche","flavor":"« Protégez-moi du mal, défendez-moi, puis mourez. »","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"<b>Augmente énormément</b> les chances d\'être envoyé à la propriété de Yamaoka lorsque brûlé.","name":"Blason de la famille Yamaoka","flavor":"« On ne quitte jamais une maison brisée. On ne peut que la fuir jusqu\'à ce que les souvenirs cessent de nous hanter. »","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"Invoque l’Entité pour rejeter toutes les offrandes qui modifient les chances d’être envoyé dans un royaume spécifique.<br>Ceci peut uniquement être annulé si quatre offrandes de royaume identiques sont jouées.","name":"Acte sacrificiel","flavor":"« Aveugles, nous soumettons notre volonté et implorons votre aide. »","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"<b>Augmente énormément</b> la probabilité d’être envoyé à l’école primaire Midwich quand elle est brûlée.","name":"Lettre de Mary","flavor":"« Cette ville apparaît dans mes rêves agités. »","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"<b>Augmente énormément</b> les chances d\'être envoyé dans l\'usine de conditionnement de viande Gideon en cas d\'utilisation.","name":"Pièce de puzzle","flavor":"« Félicitations ! Tu es toujours en vie. La plupart des gens ne réalisent pas la chance qu\'ils ont d\'être en vie. Mais pas toi. Plus maintenant. »","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"<b>Augmente énormément</b> les chances d’être envoyé au laboratoire national d’Hawkins en cas de brûlure.","name":"Carte d’identification du laboratoire national d’Hawkins ","flavor":"« Une carte d’identification tachée de sang avec un numéro de série. »","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"<b>Augmente énormément</b> les chances d’être envoyé à la tombe de Glenvale en cas de brûlure.","name":"Nœud coulant poussiéreux","flavor":"« Demandez à quiconque tente de survivre sur cette terre noyée dans la poussière et tous vous diront ce qu’est un bon nœud coulant... une preuve de compassion. »","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"Un super gâteau à vous retourner l’estomac, idéal pour marquer nos trois ans ensemble. Confère <b>103 %</b> de points de sang bonus dans toutes les catégories pour tous les joueurs de cette partie.<br><li>Cumulable</li>","name":"Gâteau repoussant","flavor":"« Joyeux anniversaire ! Pour ces trois années à vos côtés ! »<br>– L’équipe de Dead by Daylight","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"Un spectaculaire gâteau sinistre pour marquer nos quatre ans ensemble. 1 % plus savoureux qu’un Gâteau repoussant. Confère <b>104 %</b> de points de sang bonus dans toutes les catégories pour tous les joueurs de cette partie.<br><li>Cumulable</li>","name":"Gâteau effrayant","flavor":"« Joyeux anniversaire ! Pour de nombreuses autres années ensemble ! »<br>– L’équipe de Dead by Daylight","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/fr/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Une lentille fine et large en parfait état. Conçue pour élargir le faisceau de la lampe de poche au détriment de la portée à laquelle elle est efficace.<br><li><b>Élargit modérément</b> le faisceau de la lampe de poche.</li><li><b>Réduit légèrement</b> la portée du faisceau de la lampe de poche.</li>","name":"Lentille large","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"Une petite ampoule de lampe de poche à la puissance plus élevée qui garantit un faisceau plus lumineux.<br><li><b>Réduit légèrement</b> le rayon du faisceau de la lampe de poche.</li><li><b>Augmente légèrement</b> l’éclat du faisceau.</li><li><b>Augmente légèrement</b> la durée de l’Aveuglement.</li>","name":"Ampoule électrique","flavor":"« Même la lampe la plus puissante ne peut percer la noirceur de la brume noire. »","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"Une bande de cuir enroulée autour de la lampe de poche pour améliorer la prise en main.<br><li><b>Augmente légèrement</b> la précision de la lampe de poche.</li>","name":"Poignée en cuir","flavor":"« Beaucoup ont péri car ils transpiraient des mains. »","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"Une pile standard de marque inconnue.<br><li>Ajoute <b>2 secondes</b> d’utilisation à la lampe de poche classique.</li>","name":"Pile","flavor":"« Encore une pile presque à plat. »","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"Assemblage d’une lentille et d’un réflecteur qui agrandit le faisceau de la lampe de poche.<br><li><b>Augmente modérément</b> l’éclat du faisceau.</li><li><b>Augmente modérément</b> la durée de l’Aveuglement.</li>","name":"Optique à réflexion totale","flavor":"« Laissez la lumière dévoiler leur linceul noir. »","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"Une poignée en caoutchouc spécialement conçue pour s’adapter aux lampes de poche pour en améliorer la prise en main.<br><li><b>Augmente modérément</b> la précision de la lampe de poche.</li>","name":"Poignée en caoutchouc","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"Une ampoule à filament conçue pour allonger la durée de vie des piles d’une lampe de poche.<br><li><b>Réduit modérément</b> la consommation de piles de la lampe de poche.</li>","name":"Filament Bas Ampérage","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"Une pile portant la mention « puissance industrielle. »<br><li>Ajoute <b>4 secondes</b> d’utilisation à la lampe de poche classique.</li>","name":"Pile haute performance","flavor":"« Une pile conçue pour durer 8 heures ne dure que quelques secondes dans la brume noire. »","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"Une lentille de verre épaisse qui concentre le faisceau de la lampe de poche pour augmenter son intensité.<br><li><b>Augmente légèrement</b> la portée du faisceau de la lampe de poche.</li><li><b>Réduit légèrement</b> le rayon du faisceau de la lampe de poche.</li><li><b>Augmente légèrement</b> l’éclat du faisceau.</li><li><b>Augmente légèrement</b> la durée de l’Aveuglement.</li>","name":"Lentilles focales","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"Un modèle récent de pile qui dure plus longtemps.<br><li>Ajoute <b>6 secondes</b> d’utilisation à une lampe de poche normale.</li>","name":"Pile longue durée","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"Une ampoule chimique qui génère une lumière intense.<br><li><b>Augmente considérablement</b> l’éclat du faisceau.</li><li><b>Augmente considérablement</b> la durée de l’Aveuglement.</li>","name":"Lampe halogène intense","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"Une large lentille en saphir impossible à rayer qui optimise la puissance et la portée du faisceau de lumière.<br><li><b>Élargit modérément</b> le faisceau de la lampe de poche.</li><li><b>Augmente légèrement</b> le faisceau de la lampe de poche.</li><li><b>Augmente modérément</b> l\'éclat du faisceau.</li><li><b>Augmente modérément</b> la durée de l\'aveuglement.</li>","name":"Lentille haut de gamme en saphir","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"Une ampoule lourde et complètement opaque d’origine inconnue qui émet une faible lumière même quand la lampe est éteinte.<br><li><b>Augmente énormément</b> l’éclat du faisceau.</li><li><b>Augmente énormément</b> la durée de l’Aveuglement.</li><li><b>Augmente légèrement</b> la consommation d’énergie de la lampe de poche.</li>","name":"Ampoule bizarre","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"Corde finement tressée utilisée dans les rituels. Peut être attachée à la clé.<br><li>Ajoute <b>10 secondes</b> d’utilisation à la clé.</li>","name":"Corde de prière","flavor":"« Priez tant que vous voulez, vos mots se perdent ici dans le brouillard. »","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"Une perle poreuse griffée. Un minuscule anneau permet de l’attacher à la clé.<br><li><b>Augmente modérément</b> la portée de repérage d’aura de la clé.</li>","name":"Perle griffée","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"Un collier de perles mates de tailles variées utilisé dans des rituels. Peut être attaché à la clé.<br><li>Ajoute <b>15 secondes</b> d’utilisation à la clé.</li>","name":"Perles de Prière","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"Un jeton très usé en laiton. Si une inscription quelconque fut un jour gravée dessus, elle a aujourd\'hui totalement disparu. Peut être associé à la clé grâce à son anneau, pour canaliser la capacité de repérage d\'aura de la clé.<br><li>Révèle l\'<b>aura des survivants</b> dans un rayon de <b>24 mètres</b>.</li>","name":"Jeton Rongé","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"Un jeton doré et terne. Les faces sont lisses et ne portent aucune inscription. Peut être attaché à la clé grâce à son anneau pour canaliser la capacité de repérage d\'aura de la clé.<br><li>Révèle l\'<b>aura des survivants</b> dans un rayon de <b>48 mètres</b>.</li>","name":"Jeton en or","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"Un porte-clés apparemment sans intérêt avec un lustre bleuâtre sombre. Il lie la clé à son utilisateur, empêchant ce dernier de le perdre, même dans les pires moments.<br><li>Ne perdez pas la clé si vous mourez, perdez plutôt cet accessoire.</li>","name":"Anneau porte-clés","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"Ce morceau de verre opaque émet une vibration sonore sourde. Quand la clé est utilisée pour débloquer la trappe, le jeton de verre empêche la clé de casser en canalisant à l\'intérieur l’énergie de la brume.<br><li>Ne perdez pas la clé en ouvrant la trappe, perdez plutôt cet accessoire.</li>","name":"Verre opalin","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"Ambre rouge sang strié de veines noires. L\'ambre est chaud au toucher. Peut être associé à la clé en utilisant son anneau pour canaliser la capacité de repérage d\'aura de la clé.<br><li>Visualisez l\'<b>aura du tueur</b> dans un rayon de <b>32 mètres</b> au prix d\'<b>une grande dépense</b> d\'énergie de la clé.</li>","name":"Ambre de sang","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"Une pièce fragmentée en matériau épais et fibreux. Un dessin de carte partiel et effacé est imprimé dessus, inutilisable en l’état.<br><li>Ajoute une charge de <b>5 secondes</b> à toute carte.</li>","name":"Carte : Addenda","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"Un petit câble électrique. Les extrémités sont très abîmées, comme s\'il avait été littéralement arraché de là où il se trouvait initialement. Peut être attaché à une carte pour améliorer sa capacité de repérage d\'aura.<br><li>Débloque la capacité de localiser les <b>portes de sortie</b>.</li>","name":"Fil jaune","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"Un cachet en bois utilisé pour estampiller des documents. Difficile de savoir qui l’utilisait, ni dans quel but. Peut être utilisé avec une carte.<br><li><b>Augmente modérément</b> la portée de la capacité de suivi de la carte.</li>","name":"Cachet étrange","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"Une substance gluante, translucide, d’un épouvantable bleu lavande. Cette gelée d’origine inconnue est particulièrement résistante à la chaleur.<br><li><b>Réduit modérément</b> la vitesse d’usure de la carte.</li>","name":"Gelée retardatrice","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"Une ficelle rêche aux fibres piquantes, d\'un rouge profond. Peut être enroulée autour d\'une carte pour améliorer sa capacité de repérage d\'aura.<br><li>Débloque la capacité de localiser les <b>biens du tueur</b>.</li>","name":"Ficelle Rouge","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"Une perle étrange, cerclée d\'or qui peut servir à grossir la carte et marquer un point précis. La perle émet une énergie qui peut être vue et sentie par les survivants.<br><li>Débloque la capacité de marqueur comme action secondaire.</li><li>Crée un marqueur qui peut être vu par tous les survivants.</li>","name":"Perle de verre","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"Un cachet sculpté dans du bois clair. Le texte du cachet est incompréhensible : « kw’zvre’od ». Peut être utilisé avec une carte.<br><li><b>Augmente considérablement</b> la portée de la capacité de suivi de la carte.</li>","name":"Cachet étrange","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"Un cordon noir et lisse. Peut être attaché autour d\'une carte pour améliorer sa capacité de repérage d\'aura.<br><li>Débloque la capacité de localiser les <b>serrures noires</b>.</li>","name":"Cordon de Soie Noire","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"Un appareil complexe constitué d\'un assemblage compliqué de lentilles. Les engrenages contrôlant le grossissement se règlent automatiquement sur quelque chose d\'invisible à l\'œil nu.<br><li>Chaque survivant voit l\'aura générée par la carte quand il est activé.</li>","name":"Lentilles de cristal","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"Des gants médicaux jetables pour éviter les contaminations croisées.<br><li><b>Augmente modérément</b> le bonus de progression en cas d’excellents tests d’habileté.</li>","name":"Gants de Caoutchouc","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"Sparadrap de qualité médicale utilisé pour couvrir de petites blessures.<br><li><b>Augmente légèrement</b> la vitesse de soins.</li>","name":"Sutures Cutanées","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"Un paquet de pansements que l’on trouve en général dans les trousses de premiers soins.<br><li>Ajoute <b>8 charges</b> à la trousse de soins.</li>","name":"Pansements","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"Une simple éponge utilisée pour absorber les excès de sang, permettant un accès plus facile aux blessures.<br><li><b>Augmente considérablement</b> le bonus de progression en cas d’excellents tests d’habileté.</li>","name":"Éponge","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"Un rouleau de bandages adhésifs pratiques pour couvrir rapidement les blessures ne nécessitant pas de pansements compliqués.<br><li>Ajoute <b>8 charges</b> à la trousse de soins.</li><li><b>Augmente légèrement</b> la vitesse de soins.</li>","name":"Rouleau de sparadrap","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"Ce n’est pas vraiment un instrument médical à proprement parler, mais ça peut être utilisé pour refermer rapidement et douloureusement une plaie ouverte.<br><li><b>Augmente modérément</b> les chances de générer un test d’habileté.</li><li><b>100 % de points de sang bonus</b> pour l’obtention de tests d’habileté excellents.</li><li><b>Augmente légèrement</b> la vitesse de soins.</li>","name":"Fil et aiguille","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"Des ciseaux conçus pour couper facilement le textile.<br><li><b>Augmente modérément</b> la vitesse de soins.</li>","name":"Ciseaux Médicaux","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"De la gaze stérile utilisée pour traiter toutes sortes de blessures, selon la charte générale des soins médicaux.<br><li>Ajoute <b>12 charges</b> à la trousse de soins.</li>","name":"Bande de gaze","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"Matériel médical servant à refermer les blessures ouvertes. Bien que très efficace, la suture chirurgicale est difficile à utiliser.<br><li><b>Augmente considérablement</b> les chances de générer un test d’habileté.</li><li><b>150 % de points de sang bonus</b> offerts en obtenant des tests d’habileté excellents.</li><li><b>Augmente légèrement</b> la vitesse de soins.</li>","name":"Suture chirurgicale","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"Un paquet de pansements imbibés de gel utilisés pour soigner les blessures purulentes.<br><li>Ajoute <b>16 charges</b> à la trousse de soins.</li>","name":"Pansements hydrogels","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"Un pansement extrêmement absorbant qui limite la perte de fluides corporels en cas de large blessure abdominale.<br><li><b>Augmente considérablement</b> la vitesse de soins.</li><li><b>Réduit la charge</b> de <b>8</b>.</li>","name":"Pansement abdominal","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"Une poudre blanche aux vertus coagulantes. Appliquer sur une blessure pour arrêter l’hémorragie.<br><li>Appuyez sur le bouton d’<i>action secondaire</i> pendant un soin avec la trousse de soins pour utiliser l’agent styptique.</li><li>Quand l’<i>agent styptique</i> est utilisé sur un survivant blessé, il obtient l’effet de statut <b>Endurance</b> pendant <b>8 secondes</b>. <li>Consomme la trousse de soins.</li>","name":"Agent styptique","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"Une substance hémostatique qui arrête le saignement en quelques secondes.<br><li>Appuyez sur le bouton d’<i>action secondaire</i> pendant un soin avec la trousse de soins pour utiliser la seringue antihémorragique.</li><li>Le survivant affecté récupèrera passivement un segment de santé <b>16</b> secondes après son emploi.</li><li>Le temps requis est modifié par les compétences, objets et accessoires qui affectent les <i>vitesses de soins</i>.</li><li>Cet effet est annulé quand l’état de santé du survivant affecté change ou s’il est ramassé.</li><li>Consomme la trousse de soins.</li>","name":"Seringue antihémorragique","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"Un outil utile pour maintenir des tuyaux ou des câbles en place et éviter les accidents.<br><li>Les bruits occasionnés par vos réparations et la distance à laquelle ils peuvent être perçus sont réduits de 8 mètres.</li>","name":"Pince à ressort","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"Ressorts, vis et engrenages. Principalement de la ferraille inutilisable.<br><li>Ajoute <b>8 charges</b> à la boîte à outils.</li>","name":"Ferraille","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"Un banal chiffon. Si propre qu’il en est suspect.<br><li><b>Augmente légèrement</b> la vitesse de réparation de la boîte à outils.</li>","name":"Chiffon Propre","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"Une bobine de fil de cuivre, portable mais lourde.<br><li>Ajoute <b>12 charges</b> à la boîte à outils.</li>","name":"Bobine de fil","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"Les tourillons fournissent allonge et flexibilité pour atteindre les boulons difficiles d’accès au plus profond des dispositifs mécaniques.<br><li><b>Augmente modérément</b> la vitesse de réparation de la boîte à outils.</li>","name":"Tourillons","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"Des gants épais qui réduisent la dextérité mais qui protègent des blessures.<br><li>Empêche d\'avertir le tueur lors du sabotage d\'un crochet avec la boîte à outils.</li>","name":"Gants de protection","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"Quelqu\'un semble avoir peint rapidement des instructions de réparation sur ce morceau d\'écorce.<br><li>Élimine les tests d\'habileté en réparant avec la boîte à outils.</li>","name":"Instructions","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"Une clé à molette ajustable avec un manche solide. Indispensable dans toute boîte à outils.<br><li>Les crochets sabotés à l\'aide de la boîte à outils nécessitent 15 secondes de plus pour réapparaître.</li>","name":"Clé Ajustable","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"Un outil tranchant rudimentaire fait de câbles métalliques dentelés et de deux poignées en bois.<br><li><b>Augmente légèrement</b> la vitesse de sabotage de la boîte à outils.</li>","name":"Fil à couper","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"Une petite scie à main équipée d’une lame à métaux.<br><li><b>Augmente modérément</b> la vitesse de sabotage de la boîte à outils.</li>","name":"Scie à Métaux","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"Cette pièce mécanique sophistiquée semble ne pas cadrer avec le lieu. Elle est propre et brillante comme si elle sortait de l’usine.<br><li><b>Réparer avec la boîte à outils</b> est remplacé par <b>Installer une toute nouvelle pièce</b>.</li><li>Installer la <i>Toute nouvelle pièce</i> réparera automatiquement <b>15 %</b> d’un générateur en <b>5</b> secondes.</li><li>Pendant l’installation, vous devrez effectuer <b>2</b> tests d’habileté difficiles.</li><li>Réussir un test d’habileté donnera <b>5 % de progression de réparation de générateur</b>, jusqu’à un total de <b>25 % de progression de réparation de générateur</b>.</li><li><i>Cet accessoire est consommé après utilisation.</i></li>","name":"Toute nouvelle pièce","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"Une alliance gravée qui est apparue de la Brume et résonne d’une énergie incompréhensible et indescriptible.<li>Dévoile l’aura de l’obsession.</li><li>Réduit vos chances de devenir l’obsession du tueur.</li><li>Cumulable</li>","name":"Alliance unique","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/fr/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Confère <b>50 %</b> de points de sang bonus dans la catégorie Objectif.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Sachet de kalmia pâle","flavor":"« Un sachet cousu à la main de la taille d\'une paume, contenant des feuilles séchées. Une faible odeur de thé s\'en dégage. »","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"Confère <b>75 %</b> de points de sang bonus dans la catégorie Objectif.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Kalmia pâle frais","flavor":"« Une magnifique fleur mauve qui pousse au milieu des marais. Une odeur de thé s\'en dégage. »","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"Confère <b>100 %</b> de points de sang bonus dans la catégorie Objectif.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Kalmia pâle parfumé","flavor":"« Une magnifique fleur mauve qui pousse au milieu des marais. Une forte odeur de thé s\'en dégage. »","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"Confère <b>50 %</b> de points de sang bonus dans la catégorie Survie.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Sachet de feuilles d\'amarante","flavor":"« Un sachet cousu à la main de la taille d\'une paume, contenant des sortes de perles. On dit que l\'amarante est éternelle. »","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"Confère <b>75 %</b> de points de sang bonus dans la catégorie Survie.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Feuille d\'amarante fraîche","flavor":"« Les feuilles vert pâle sont rehaussées de nervures pourpres. On dit que l\'amarante est éternelle. »","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"Confère <b>100 %</b> de points de sang bonus dans la catégorie Survie.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Feuille d\'Amarante Parfumée","flavor":"« Les feuilles vert pâle sont rehaussées de nervures pourpres. Une forte odeur de radis s\'en dégage. »","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"Confère <b>50 %</b> de points de sang bonus dans la catégorie Altruisme.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Sachet de fleurs de primevères","flavor":"« Un sachet cousu à la main de la taille d\'une paume, contenant 4 pétales d\'or. La primevère s\'ouvre au tout dernier moment du jour, juste avant que le soleil ne fasse place à la nuit. »","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"Confère <b>75 %</b> de points de sang bonus dans la catégorie Altruisme.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Primevère en fleurs fraîche","flavor":"« Des fleurs dorées cueillies à leur apogée. La primevère s\'ouvre au tout dernier moment du jour, juste avant que le soleil ne fasse place à la nuit. »","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"Confère <b>100 %</b> de points de sang bonus dans la catégorie Altruisme.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Primevère en fleurs parfumée","flavor":"« Des fleurs dorées cueillies à leur apogée. Un fort arôme de terre réconfortant s\'en dégage. »","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"Confère <b>50 %</b> de points de sang bonus dans la catégorie Audace.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Sachet d\'œillets de Poète","flavor":"« Un sachet cousu à la main de la taille d\'une paume, contenant un mélange de pétales pâles et de feuilles bleuâtres glauques. Une odeur forte qui rappelle le clou de girofle s\'en dégage. »","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"Confère <b>75 %</b> de points de sang bonus dans la catégorie Audace.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Œillet de poète frais","flavor":"« Des fleurs aux pétales roses et aux pistils rouge sang. Une odeur de clou de girofle s\'en dégage. »","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"Confère <b>100 %</b> de points de sang bonus dans la catégorie Audace.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Œillet de poète frais","flavor":"« Des fleurs aux pétales roses et aux pistils rouge sang. Une forte odeur épicée de clou de girofle s\'en dégage. »","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"Confère <b>25 %</b> de points de sang bonus dans <b>toutes</b> les catégories pour tous les survivants.<br><li>Cumulable.</li>","name":"Enveloppe attachée","flavor":"« Une enveloppe ouverte qui a été scellée à nouveau puis attachée avec 4 rubans colorés. »","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"Confère <b>25 %</b> de points de sang bonus dans toutes les catégories.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Enveloppe fermée","flavor":"« Une enveloppe scellée sans destinataire, jaunie par le temps. Son message ne sera jamais révélé. »","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"Accorde <b>100 %</b> de points de sang bonus dans toutes les catégories.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Gâteau de fuite","flavor":"« Cette photo d\'un gâteau est bien réelle. »","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"<b>Augmente légèrement</b> la chance.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Pochette de craie","flavor":"« Un petit sac en coton rempli d\'une poudre blanche et crayeuse d\'origine inconnue. Certains pensent qu\'elle porte chance. »","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>Augmente modérément</b> la chance de <b>tous</b> les survivants.<br><li>Cumulable.</li>","name":"Pochette de craie crème","flavor":"« Une statuette miniature friable faite de sel noir représentant une femme agenouillée offrant un cadeau. Certains pensent qu\'elle porte chance. »","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"<b>Augmente considérablement</b> la chance.<br><li>Personnel.</li><li>Cumulable.</li>","name":"Pochette de Craie Ivoire","flavor":"« Un petit sac de cuir orné d\'une ligne blanche cousue à la main sur l\'un de ses côtés. Le sac est rempli d\'une poudre crayeuse ivoire qui brille sous le clair de lune. Certains pensent qu\'elle porte chance. »","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>Augmente légèrement</b> la chance de <b>tous</b> les survivants.<br><li>Cumulable.</li>","name":"Pochette de sel","flavor":"« Un petit sac en coton rempli de cristaux de sel noirs. Certains pensent qu\'ils portent chance. Il faut faire attention de ne pas les renverser. »","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>Augmente considérablement</b> la chance de <b>tous</b> les survivants.<br><li>Cumulable.</li>","name":"Jarre de lèvres salées de Vigo","flavor":"« Une jarre de verre scellée avec précaution contenant des lèvres humaines lacérées qui flottent dans une saumure trouble. Certains pensent qu\'elle porte chance. »","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"Fait appel à l\'Entité pour créer <b>1</b> coffre supplémentaire.<br><li>Cumulable.</li>","name":"Pièce de monnaie usée","flavor":"« Une pièce de métal circulaire qui a perdu son lustre. »","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"Fait appel à l\'Entité pour créer <b>2</b> coffres supplémentaires.<br><li>Cumulable.</li>","name":"Pièce de monnaie brillante","flavor":"« Une pièce en or propre et polie. »","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"Calme l\'Entité et <b>augmente légèrement</b> la <b>distance</b> entre des crochets sacrificiels apparaissant dans le monde de jeu.<br><li>Cumulable.</li>","name":"Chêne pétrifié","flavor":"« Vieux morceau de bois pétrifié en décomposition. »","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"Vous commencez la partie avec quelqu\'un d\'autre.<br><li>Secret.</li>","name":"Linceul d\'union","flavor":"« Un morceau de tricot. »","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"Tous les survivants commencent la partie ensemble.<br><li>Secret.</li>","name":"Linceul d\'entrave","flavor":"« Un carré de tissu délavé avec de petits nœuds aux extrémités. »","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"Vous commencez la partie aussi loin que possible du tueur.<br><li>Secret.</li>","name":"Linceul de Vigo","flavor":"« Au fil des ans, j\'ai trouvé de nombreuses merveilles dans la brume, mais je comprends seulement maintenant comment enfreindre les règles irréfragables de la brume. » - Journal de Vigo","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/fr/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Débloque le potentiel de repérage d’aura d’une personne. Chaque fois qu’un générateur est réparé, l’aura du tueur vous est révélée pendant <span class=\\"Highlight1\\">{0} secondes</span>.<br>Lorsque le dernier générateur est mis sous tension, l’aura du tueur vous est révélée pendant <span class=\\"Highlight2\\">{1} secondes</span>.","name":"Sentiment obscur","flavor":"« Écoutez donc les conseils d’un ancien : allez-y doucement, ne vous précipitez surtout pas et essayez de ne pas trop vous tracasser ! La meilleure façon de le battre, c’est de savoir comment il pense. » - Enregistrements perdus : Murf","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"Débloque une capacité de repérage d\'aura. La paranoïa, associée à la peur de l\'échec, vous aide à ne pas répéter les mêmes erreurs.<br>Les auras de <span class=\\"Highlight1\\">{0}</span> générateurs proches les uns des autres vous sont révélées pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br>Si vous tenez une carte permettant de localiser les générateurs, ceux révélés par <i>Déjà-vu</i> sont ajoutés à la carte.","name":"Déjà-vu","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"Les perspectives d\'évasion réussie vous comblent d\'espoir et vous donnent des ailes. Dès que le courant électrique des portes de sortie est rétabli, vous recevez un effet de statut <b><i>Rapidité</i></b> de <span class=\\"Highlight1\\">{0} %</span> pendant <span class=\\"Highlight3\\">{1} secondes</span>.<br>","name":"Espoir","flavor":"« Accrochez-vous, les tarés ! On décolle d\'ici ! » - Enregistrements perdus : Nikki","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"Débloque le potentiel de repérage d’aura. Quand vous êtes sur le crochet, toutes les auras de survivants sont révélées aux autres survivants. Si le tueur se trouve dans un rayon de <span class=\\"Highlight1\\">{0} mètre</span>, son aura est révélée à tous les survivants.<br><br>Quand un survivant autre que vous est suspendu au crochet, vous voyez l’aura de tous les autres survivants. Si le tueur se trouve dans un rayon de <span class=\\"Highlight1\\">{0} mètre(s)</span> du survivant suspendu, vous voyez l’aura du tueur.","name":"Parenté","flavor":"« Soyez solidaires. On est tous dans le même bateau. » - Enregistrements perdus : Sujan","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"Votre foulée souple et légère rend vos traces difficiles à pister. Les empreintes restent visibles <span class=\\"Highlight1\\">{0} secondes</span> de moins que la normale.","name":"Poids plume","flavor":"« Prends ton temps, il sait où tu étais... Comme je l\'ai toujours dit : vis lentement et vis longtemps. » - Enregistrements perdus : Dylan","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"Il est impensable d’abandonner quelqu’un. Quand l’une des portes de sortie s’ouvre, vous bénéficiez des effets suivants :<br><li><span class=\\"Highlight1\\">{0} %</span> de points de sang supplémentaires pour avoir soigné ou décroché d’autres survivants.</li><li>Bonus de <span class=\\"Highlight2\\">{1} %</span> à la vitesse d’action pour soigner ou décrocher d’autres survivants.</li><li>Vous voyez l’aura de tous les autres survivants.</li>","name":"On n\'abandonne personne","flavor":"« ... ouais, sans rire. Mais je crois qu’on peut se montrer plus malins que lui et le coiffer au poteau si on bosse ensemble. Soyez imprévisibles et évitez d’être égoïstes ! » - Enregistrements perdus : Clyde","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"Débloque le potentiel de repérage d’aura. L’aura des coffres fermés et des objets de l’environnement vous est révélée quand ils se trouvent dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>. Augmente <b>considérablement</b> les chances de trouver un article de grande rareté dans les coffres.","name":"Instinct de Pillard","flavor":"« Les pionniers avaient l’habitude de fouiller ces boîtes pendant des heures. » - Enregistrements perdus : Aizeyu","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"Vous avez un indéniable talent pour sentir le danger. Recevez un avertissement sonore quand vous regardez dans la direction du tueur dans un cône de <span class=\\"Highlight1\\">45 degrés</span> et dans un rayon de <span class=\\"Highlight2\\">{0} mètres</span>. Prémonition a un temps de recharge de <span class=\\"Highlight3\\">{1} secondes</span> à chaque activation.","name":"Prémonition","flavor":"« J’ai un mauvais pressentiment ! »","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"Vous êtes proactif dans les situations d\'urgence. Alloue <span class=\\"Highlight1\\">{0} %</span> de vitesse supplémentaire aux réparations, sabotages, soins, décrochages, sauts d\'obstacles, purifications, ouvertures des portes de sortie et déverrouillages quand vous êtes blessé.","name":"Résistance","flavor":"« Restez concentré, même dans les pires moments. »","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"Vous avez développé une technique efficace pour vous libérer des crochets. <br><li>Augmente de <span class=\\"Highlight1\\">{0}</span> le nombre de tentatives pour se libérer du crochet.</li><li>Les tentatives de libération de crochets ont une chance de réussite supérieure de <span class=\\"Highlight2\\">{1} %</span>.</li>","name":"Viande glissante","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"Vous avez un indéniable talent pour sentir le danger. Recevez un avertissement sonore quand vous regardez dans la direction de totems dans un cône de <span class=\\"Highlight1\\">45 degrés</span> et dans un rayon de <span class=\\"Highlight2\\">{0} mètres</span>. Petit Gibier a un temps de rechargement de <span class=\\"Highlight3\\">{1} secondes</span> à chaque activation. Pour chaque totem passif et totem ensorcelé purifié par un joueur, vous gagnez un jeton. Le cône de détection de Petit gibier est réduit de <span class=\\"Highlight4\\">5 degrés</span> par jeton.","name":"Petit gibier","flavor":"« Oh non non non. » -Enregistrements perdus : Andy","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"Un frisson surnaturel vous avertit d\'un danger imminent. Vous êtes informé quand le tueur regarde directement dans votre direction et qu\'il se trouve à moins de <span class=\\"Highlight1\\">{0} mètre(s)</span> de vous. Tant que Frisson est actif, vous avez <span class=\\"Highlight2\\">{1} %</span> de chances supplémentaires de générer un test d’habileté avec des zones de succès réduites de <span class=\\"Highlight3\\">{2} %</span>. Tant que Frisson est actif, vos vitesses de réparation, de sabotage, de soins, de décrochage, de saut d\'obstacles, de purification, d\'ouverture de porte de sortie et de déverrouillage augmentent de <span class=\\"Highlight4\\">{3} %</span>.","name":"Frisson","flavor":"« Il existe une voix qui se passe de mots. Écoute. » - Enregistrements perdus : Sassy","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"Vous êtes plus performant sous pression. Les zones de succès des tests d’habileté excellents des réparations et des soins sont élargies de <span class=\\"Highlight1\\">{0} %</span> quand vous êtes blessé.","name":"Ce n\'est pas en train d\'arriver","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"Aider les autres vous remonte le moral.<br><br>Lorsque vous sauvez un survivant d’un crochet, vous gagnez <span class=\\"Highlight1\\">{0} %</span> d’augmentation de vitesse de soins lorsque vous soignez les autres, et ce pendant <span class=\\"Highlight3\\">{1} secondes</span>.","name":"Nous y arriverons","flavor":"\\"Je sais qu’on peut tous s’en sortir en vie si on s’entraide.\\"","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"Débloque une capacité de repérage d\'auras. L\'aura des alliés vous est révélée quand ils se trouvent dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>.","name":"Lien","flavor":"« Nous devons travailler en équipe. Vous devez survivre pour que je puisse moi aussi le faire ! » - Dwight","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"Augmente la vitesse de réparation de <span class=\\"Highlight1\\">{0} %</span> par survivant supplémentaire travaillant sur un générateur dans un rayon de <span class=\\"Highlight2\\">{1} mètres</span>. Ce bonus s\'applique également à tous les autres survivants à portée.<br>Rapporte <span class=\\"Highlight3\\">{2} %</span> de points de sang supplémentaires lors des actions en coop.<br>Les survivants ne peuvent pas avoir plus d\'un effet « Montrez ce que vous savez faire » en même temps.","name":"Montrez ce que vous savez faire","flavor":"« Montre-moi ce que tu sais faire ! » - Dwight","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"Vous êtes capable d\'organiser une équipe pour qu\'elle coopère plus efficacement. Augmente la vitesse de soins, de sabotage, de décrochage, de purification, d\'ouverture des portes de sortie et de déverrouillage de coffre des autres survivants de <span class=\\"Highlight1\\">{0} %</span>, quand ils se trouvent dans un rayon de <span class=\\"Highlight2\\">{1} mètre</span> autour de vous.<br>Les survivants ne peuvent pas avoir plus d\'un effet Meneur à la fois.<br>Même hors de portée du Meneur, l\'effet persiste pendant <span class=\\"Highlight3\\">{2} secondes</span> pour les autres survivants.","name":"Meneur","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Vous faites moins de bruit que les autres en sautant par-dessus les obstacles ou en vous cachant dans des casiers.<br><br>La distance à laquelle le bruit causé par ces actions est détecté diminue de <span class=\\"Highlight1\\">{0} %</span>.<br><br>Cet effet ne peut se déclencher qu’une fois toutes les <span class=\\"Highlight2\\">{1} secondes</span>.","name":"Rapide et silencieux","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"Quand vous commencez à courir, vous sprintez à <span class=\\"Highlight1\\">{0} %</span> de votre vitesse normale pendant un maximum de <span class=\\"Highlight2\\">{1} secondes</span>.<br>Provoque <i>Épuisement</i> pendant <span class=\\"Highlight4\\">{2} secondes</span>.<br><i>Course effrénée</i> ne peut pas être utilisée pendant <i>Épuisement</i>.<br>Vous ne récupérez pas de l\'effet <i>Épuisement</i> en courant.","name":"Course effrénée","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Alors que vous êtes sur le point de vous échapper, vous vous sentez insufflé d\'une énergie nouvelle. Quand le courant électrique des portes de sortie est rétabli, <span class=\\"Highlight1\\">vous récupérez instantanément un <b>segment de santé</b></span> et courez à <span class=\\"Highlight2\\">{0} %</span> de votre vitesse normale pendant <span class=\\"Highlight3\\">{1} secondes</span>. Adrénaline est en pause si vous êtes immobilisé au moment où elle devrait faire effet et sera activée quand vous serez libéré.<br><i>Adrénaline</i> vous <b>réveille</b> si vous dormez quand elle est activée.<br><i>Adrénaline</i> ignore <i>Épuisement</i>.<br>Provoque l\'<i>Épuisement</i> pendant <span class=\\"Highlight4\\">{2} secondes</span>.<br>Vous ne récupérez pas de l\'effet <i>Épuisement</i> en courant.","name":"Adrénaline","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"Débloque une capacité de repérage d\'auras. Celles des alliés en état critique ou blessés vous sont révélées dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>. Empathie ne révèle pas l\'aura des alliés quand ils sont en contact direct avec le tueur.","name":"Empathie","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"Vous transformez les plantes bordant le camp en teintures qui réduisent les hémorragies. La <b>vitesse de soins</b> et l\'<b>efficacité des objets de soins</b> augmentent de <span class=\\"Highlight1\\">{0} %</span>.","name":"Connaissances en botanique","flavor":"\\"Une connaissance élémentaire de la botanique pourrait un jour vous sauver la vie.\\"","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"Débloque la capacité de vous soigner sans objet de soins à <span class=\\"Highlight1\\">{0} %</span> de la vitesse de soins normale. Augmente l\'efficacité des auto-soins avec objet de soins de <span class=\\"Highlight3\\">{1} %</span>.","name":"Prophylaxie","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"Vous êtes capable de vous concentrer pour entrer dans un état méditatif qui vous fait oublier la douleur. Les gémissements de douleur causés par les blessures sont réduits de <span class=\\"Highlight1\\">{0} %</span>.","name":"Volonté de fer","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"Les animaux semblent vous faire confiance, car ils ne sont que rarement effrayés par votre présence. Réduit la probabilité d\'alerter les animaux des bois de <span class=\\"Highlight1\\">{0} %</span>.<br>Esprit calme vous permet de surmonter l\'envie de crier.","name":"Esprit calme","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"Débloque le potentiel de repérage d\'aura.<br><li>Vous voyez les auras dans un rayon de <span class=\\"Highlight1\\">56 mètres</span> autour du point de ramassage si un survivant est en train d\'être transporté.</li><br>Débloque la capacité de sabotage de crochets sans boîte à outils.<br><li>Saboter un crochet sans boîte à outils prend <span class=\\"Highlight2\\">2,5 secondes</span>.</li><li>L\'action de sabotage a un temps de recharge de <span class=\\"Highlight3\\">{0} secondes</span>.</li>","name":"Saboteur","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"Votre agilité est incomparable.<br><br>Lorsque vous tombez de haut, vos réflexes de chat réduisent la durée des étourdissements consécutifs aux chutes de <span class=\\"Highlight1\\">{0} %</span> et le volume des grognements en tombant de <span class=\\"Highlight1\\">100%</span>. Vous courez à <span class=\\"Highlight2\\">{1} %</span> de votre vitesse normale pendant un maximum de <span class=\\"Highlight3\\">{2} secondes</span>.<br><br>Provoque l’effet de statut <b>Épuisement</b> pendant <span class=\\"Highlight4\\">{3} secondes</span>.<br><br>Impossible d’utiliser <i>Atterrissage équilibré</i> sous l’effet de statut <b>Épuisement</b>.<br><br>Vous ne vous rétablissez pas de l’effet de statut <b>Épuisement</b> tant que vous courez.<br>","name":"Atterrissage équilibré","flavor":"« J’ai sauté d’endroits plus hauts que ça. » - Nea","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"Des années passées à éviter la police vous ont appris pas mal de trucs en matière de furtivité. Votre vitesse de mouvement en position accroupie augmente de <span class=\\"Highlight1\\">{0} %</span>.","name":"Évasion Urbaine","flavor":"« La peinture est encore fraîche, mais je suis partie depuis longtemps. » - Nea","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"De longues nuits solitaires vous ont appris à faire beaucoup avec peu de moyens. Réduit la consommation de charge d\'un objet de <span class=\\"Highlight1\\">{0} %</span> pour vous et vos alliés se trouvant dans un rayon de <span class=\\"Highlight2\\">{1} mètres</span>. Une fois hors de portée, cette effet dure pendant <span class=\\"Highlight4\\">{2} secondes.</span>","name":"Ad Augusta Per Angusta","flavor":"« Tu t\'y prends mal ! Laisse-moi te montrer comment ça marche. » -Nea","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Débloque le potentiel de repérage d’aura d’une personne.<br>Si vous êtes le dernier survivant lors de la partie, vous pouvez voir l’aura de la trappe jusqu’à <span class=\\"Highlight1\\">{0}</span> mètres.","name":"Laissé pour mort","flavor":"« Ça suffit les âneries. Je vais faire ça tout seul ! » -Bill","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"Une énergie insoupçonnée vous remplit en sauvant un allié d’un crochet.<br>Les survivants décrochés bénéficient de l’effet de statut <b>Endurance</b> pendant <span class=\\"Highlight1\\">{0} secondes</span>.<br>","name":"Sur la réserve","flavor":"« Ça fait un mal de chien, mais ça vous tuera pas. Sus à l’ennemi, soldat. Il est temps de se bouger ! » - Bill Overbeck","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"Votre expérience du combat vous a appris quelques précieuses leçons sur comment survivre. <br><b>Une fois par partie</b>, vous avez la capacité de vous rétablir entièrement de l\'état critique. Augmente la vitesse de récupération depuis l\'état critique de <span class=\\"Highlight1\\">{0} %</span>.","name":"Indéfectible","flavor":"« Bon sang ! Je suis vraiment FURIBARD ! » -Bill","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"Le peu d\'amis que vous avez méritent la meilleure protection possible.<br>Lorsque vous soignez un autre survivant en état critique, votre vitesse de soins est augmentée de <span class=\\"Highlight1\\">100 %.</span><br>Gagnez un jeton en effectuant l\'une des actions suivantes :<li>Effectuer un décrochage sécuritaire</li><li>Encaisser un coup pour protéger un survivant</li><li>Secourir un survivant en étourdissant le tueur avec une palette</li><li>Secourir un survivant en aveuglant tueur avec une lampe de poche</li>Gagnez <span class=\\"Highlight2\\">25 %</span> de bonus cumulable par jeton sur tous vos gains de points de sang jusqu\'à un maximum de <span class=\\"Highlight3\\">{1} %</span>. Vous ne recevrez les points de sang qu\'après la partie.","name":"Nous vivrons éternellement","flavor":"« Allez, qu\'on en finisse ! J\'en ai rien à carrer, moi. » - David King","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"Compétence active.<br>Vous êtes plus solide que vous ne le pensez. Lorsque vous êtes blessé, vous puisez dans vos réserves d’adrénaline pour vous élancer vers l’avant et éviter les dégâts.<br><li>Appuyez sur le bouton de <i>Capacité active</i> en courant pour sprinter vers l’avant.</li><li>Durant le sprint, vous évitez les dégâts.</li><li>Inflige l\'effet de statut <i>Épuisement</i> pendant <span class=\\"Highlight4\\">{0} secondes</span>.<br>Vous ne récupérez pas de l’effet de statut <i>Épuisement</i> en courant.</li>","name":"Drôlement dur","flavor":"« On marchait dans la ruelle une nuit quand une bouteille de bière a volé, pis une autre et pis une autre encore. Je m’suis dit, « On va s’en payer une tranche les mecs, allons-y ! » Ç’a été une belle baston, juré, craché ! » - David King","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"Vous êtes affecté par l’effet de statut <span class=\\"Highlight1\\">Brisé</span> pendant toute la durée de la partie.<br>Votre sang épais coagule presque instantanément. <li>Vous ne laissez pas de flaques de sang.</li><li>Les gémissements de douleur dus aux blessures sont toujours réduits de <span class=\\"Highlight2\\">{0} %</span>.</li><li>Vous accorde la possibilité de récupérer pleinement d’un état critique.</li>","name":"Pas envie","flavor":"« J’ai perdu la boule. Je lui en ai juste assené un. Ils sont venus et ils m’ont banni. Après j’ai été au pub, j’ai bu quelques bières et j’ai tourné la page. Je n’avais de toute façon pas envie de me prendre la tête avec tout ça, tu vois ce que je veux dire ? Ça me gonflait. » - David King","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"Tandis que vos compagnons succombent au tueur les uns après les autres, vous vous isolez de plus en plus, ce qui vous dissimule et perturbe les <b>capacités de repérage d’aura</b> du tueur.<br>Chaque fois qu’un survivant est tué ou sacrifié, vous gagnez un jeton. Pour chaque jeton, votre aura est invisible pour le tueur dans un rayon maximal de <span class=\\"Highlight1\\">{0} mètres</span> par survivant <b>tué</b> ou <b>sacrifié</b>.<br><li><i>Augmente vos chances d’être la cible de l’obsession du tueur.</i></li><li><i>Le tueur ne peut être <b>obsédé</b> que par un seul survivant à la fois.</i></li>","name":"Dernier survivant","flavor":"« C’était le croquemitaine. » - Laurie Strode","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"Un lien surnaturel vous unit au tueur.<br><br>Quand votre aura lui est révélée, vous voyez la sienne en retour et vous gagnez un bonus de <span class=\\"Highlight1\\">{0} %</span> à la vitesse de guérison, de réparation et de purification.<br>Si vous êtes l’obsession, votre aura est révélée au tueur pendant <span class=\\"Highlight2\\">3 secondes</span> toutes les <span class=\\"Highlight3\\">30 secondes</span>.<br>Augmente vos chances de devenir l’obsession.<br>","name":"Objet d\'obsession","flavor":"« Il m’observait ! » - Laurie Strode","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"Vous poignardez votre agresseur pour tenter de vous échapper.<br>Après avoir été libéré du crochet ou l’avoir fait vous-même, <i>Coup décisif</i> s’active durant <span class=\\"Highlight1\\">{0} secondes</span>.<br>Si le tueur vous attrape quand Coup décisif est actif, réussissez un test d’habileté pour en réchapper et l’étourdir pendant <span class=\\"Highlight1\\">5 secondes</span>.<br><li>Réussir ou rater le test d’habileté désactive <i>Coup décisif</i>.</li><li>Vous devenez l’obsession du tueur après l’avoir étourdi.</li><br>Tant que <i>Coup décisif</i> est activé, les interactions suivantes le désactivent :<li>Réparer un générateur</li><li>Soigner les autres ou soi-même</li><li>Purifier un totem</li><li>Saboter un crochet</li><li>Décrocher d’autres survivants</li><br><li><i>Augmente vos chances de devenir l’obsession du tueur.</i></li><li><i>Le tueur ne peut être <b>obsédé</b> que par un survivant à la fois.</i></li>","name":"Coup décisif","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"Renforce vos capacités de repérage d’auras et celles de votre équipe.<br><li>Augmente la portée du repérage d’auras de <span class=\\"Highlight1\\">{0} mètres</span>.</li><li>Les survivants peuvent uniquement être affectés par un effet <i>Le cœur sur la main</i> à la fois.</li>","name":"Le cœur sur la main","flavor":"« C’est en étant attentif que j’ai pu rester en vie toutes ces années. Enfin, ça et aussi grâce à mon physique de tombeur. » - Ace","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"Tout se terminera bien, vous le sentez. Votre confiance en vous ravive l\'espoir de ceux qui se trouvent autour de vous. Confère <span class=\\"Highlight1\\">{0} %</span> de bonus de chance à tous les survivants, pour chaque survivant encore en vie.","name":"Augmenter la mise","flavor":"« Quoi vous dire ? Je suis juste un type incroyablement chanceux... Un peu de ma bonne fortune devrait déteindre sur vous. » - Ace","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"Dame Fortune semble vous choyer en permanence.<br>Quand vous trouvez un objet dans un coffre, il y a <span class=\\"Highlight1\\">{0} %</span> de chances qu’un accessoire <span class=\\"Highlight2\\">très rare</span> ou inférieur y soit attaché.<br><span class=\\"Highlight3\\">{1} %</span> de chances de trouver un accessoire <span class=\\"Highlight4\\">peu commun</span> ou inférieur.<br>En vous échappant, conservez tous les accessoires de votre objet.","name":"Un Ace dans la manche","flavor":"« Tout ce qui brille n’est pas or. Mais l’or ne vaut pas un kopeck dans cet enfer, alors ceci pourrait s’avérer utile. » - Ace","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"Vous êtes capable de manier des machines avec la plus grande précision et attention.<br>Le bruit occasionné par vos réparations et la distance à laquelle ils peuvent être perçus sont réduits de <span class=\\"Highlight2\\">{0} mètres</span>. Si le test d\'habileté pour la réparation échoue, il y a <span class=\\"Highlight1\\">{1} %</span> de chances que l\'explosion du générateur soit évitée.","name":"Technicien","flavor":"« Sur ce coup là, je vais faire preuve de discrétion. » - Feng Min","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"Après un saut <b>précipité</b>, vous courez à <span class=\\"Highlight1\\">{0} %</span> de votre vitesse normale pendant un maximum de <span class=\\"Highlight2\\">{1} secondes</span>. <br>Provoque <i>Épuisement</i> pendant <span class=\\"Highlight4\\">{2} secondes</span>.<br><i>Souple</i> ne peut pas être utilisé pendant <i>Épuisement</i>.<br>Vous ne récupérez pas de l\'effet <i>Épuisement</i> tant que vous courez.","name":"Souple","flavor":"« Ça ne va pas ? » - Feng Min","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Vos sens aiguisés sont en alerte.<br>Lorsque le tueur casse quelque chose, il vous est révélé pendant <span class=\\"Highlight1\\">{0} secondes</span>.","name":"Vigilant","flavor":"« Ma vision est sans pareille. » -Feng Min","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"Débloque le potentiel de repérer les auras. Une fois que tous les générateurs ont été activés, les portes de sortie vous sont révélées à une portée de <span class=\\"Highlight1\\">{0} mètres</span>. Votre aura est révélée aux autres survivants jusqu\'à <span class=\\"Highlight2\\">{1} mètres</span> lorsque vous ouvrez les portes de sortie.<br>Lorsque <i>Debout !</i> est actif, vous ouvrez les portes de sortie <span class=\\"Highlight3\\">{2} %</span> plus rapidement.","name":"Debout !","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"Vous avez un don pour trouver des médicaments. Vous déverrouillez les coffres <span class=\\"Highlight1\\">{0} %</span> plus rapidement, et le bruit occasionné ainsi que la distance à laquelle il peut être perçu sont réduits de <span class=\\"Highlight2\\">{1} mètres.</span><br><i>Pharmacie</i> vous permet de trouver une trousse de soins d’urgence à coup sûr dans le <b>premier</b> coffre déverrouillé.<br>","name":"Pharmacie","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"Vous veillez sur vos amis même dans les situations les plus rudes. Vous, et vos alliés dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>, récupérez des effets de statut <b>Épuisement, Hémorragie, Entrave</b> et <b>Aveuglement</b> <span class=\\"Highlight2\\">{1} %</span> plus rapidement. Une fois hors de portée, cet effet dure pendant <span class=\\"Highlight4\\">{2} secondes.</span><br>","name":"Vigil","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"Rien ne vous arrête. Votre incroyable ténacité dans les situations difficiles vous permet de ramper <span class=\\"Highlight1\\">{0} %</span> plus vite tout en récupérant.","name":"Ténacité","flavor":"« Qu\'est-ce que c\'est que ça ? Je vais coffrer ce fumier ! » -Inspecteur David Tapp","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"Débloque le potentiel de repérage d\'aura. Quand un générateur est terminé, l\'aura des générateurs, des coffres et des totems dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span> vous est révélée pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br>Si vous détenez une carte qui peut suivre les objectifs, les générateurs, les coffres et les totems révélés par <i>Intuition de l\'inspecteur</i> y sont ajoutés.","name":"Intuition de l\'inspecteur","flavor":"« Pouvez-vous nous dire où vous étiez la nuit dernière ? » - Inspecteur David Tapp","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"Votre détermination augmente quand vous vous rapprochez du tueur. À chaque fois que vous passez <span class=\\"Highlight1\\">{0} secondes</span> dans le rayon de terreur du tueur sans être poursuivi, vous gagnez un jeton (jusqu\'à <span class=\\"Highlight2\\">{1} jetons</span> maximum).<br>Quand <i>En planque</i> bénéficie d\'au moins <b>1 jeton</b>, les Bons tests d\'habileté sont considérés comme d\'Excellents tests d\'habileté, ils consomment <b>1 jeton</b> et octroient un bonus supplémentaire d\'<span class=\\"Highlight3\\">1 %</span> à la progression de réparation du générateur.","name":"En planque","flavor":"« Je vous tenais. Vous étiez à ma merci. Vous avez la trouille parce qu\'on a failli vous coffrer. Nous allons résoudre cette enquête ! » - Inspecteur David Tapp","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"Lors d\'un saut d\'obstacle rapide ou si vous quittez un casier en vitesse, vous ne laissez pas de marques d\'éraflure pendant <span class=\\"Highlight1\\">{0} secondes</span>.<br><i>Danse avec moi</i> a un temps de récupération de <span class=\\"Highlight4\\">{1} secondes</span>. ","name":"Danse avec moi","flavor":"« Un autre spectacle est monté, <br>Danse avec moi car la tempête va éclater, <br>Suis mes pas, essaie de m\'imiter,<br>Danse avec moi jusqu\'à l\'aurore tant espérée. »<br> - « Danse avec moi » de Kate Denson","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"Débloque le potentiel de repérage d\'aura. L\'aura des palettes, des murs destructibles et des sauts d\'obstacles vous est révélée dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>. <br><i>Parfaite occasion</i> a un temps de récupération de <span class=\\"Highlight1\\">{1} secondes</span> lorsque vous faites tomber une palette ou lors d\'un saut d\'obstacles pendant une poursuite. ","name":"Parfaite occasion","flavor":"« Haut les cœurs, travaillez dur, faites-vous un nom, <br>Visez, tirez, le centre de la cible fera votre renom, <br>Sachez la valeur de la foi, de la famille et interdit d\'être grognon, <br>Ouvrez grand, voici venue votre parfaite occasion. »<br> - « Fenêtre d\'opportunité » de Kate Denson","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"Vous êtes un battant et faites votre possible pour vous sortir des griffes du tueur. Vos effets de lutte contre le tueur sont augmentés de <span class=\\"Highlight1\\">{0} %</span>. <br>Vous obscurcissez la capacité du tueur à voir l\'aura des crochets sur <span class=\\"Highlight1\\">{1} mètres</span>.","name":"Effusion","flavor":"« Tête brûlée,<br> Besoin de liberté, <br>Tes mains ne me garderont pas piégée. »<br> - « Effusion » de Kate Denson","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"Compétence pouvant être activée.<br>Se trouver dans le rayon de terreur du tueur lorsqu’il n’y a pas de poursuite pendant <span class=\\"Highlight1\\">{0} secondes</span> active <i>Diversion</i>.<br><li>Une fois <i>Diversion</i> activée, appuyez sur le bouton de <i>capacité active</i> en étant accroupi et immobile afin de jeter un caillou à une distance de <span class=\\"Highlight2\\">20 mètres</span>, qui crée une distraction pour le tueur.</li><br><li>Le chrono de la compétence est réinitialisé après l’activation de la capacité.</li><br>Détail de la distraction :<br><li>alerte par un fort bruit</li> et des <li>marques d’éraflure</li>","name":"Diversion","flavor":"« Il y a ce qui est facile, et il y a ce qui est juste. Si vous confondez les deux, impossible de dire ce que vous deviendrez. » - Adam Francis","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"Après avoir réalisé le décrochage sécuritaire d’un autre survivant, <i>Libération</i> s’active. <br>Vous avez désormais <span class=\\"Highlight1\\">100 %</span> de chances de vous décrocher vous-même lors d’une tentative d’évasion.<br>Une <i>Libération</i> du crochet réussie déclenche l’effet de statut <span class=\\"Highlight2\\">Brisé</span> pendant <span class=\\"Highlight3\\">{0} secondes</span>.","name":"Libération","flavor":"« J’ai été élevé par un homme strict qui m’a appris comment tirer le meilleur parti d’une mauvaise situation. » -Adam Francis","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"Vous commencez la partie avec <span class=\\"Highlight1\\">-{1} %</span> de malus de progression pour les tests d’habileté de guérison des survivants.<br>Chaque fois que vous réussissez un test d’habileté en soignant un survivant, vous recevez un jeton, jusqu’à un maximum de <span class=\\"Highlight2\\">{0} jetons</span>.<br>Chaque jeton vous confère <span class=\\"Highlight1\\">+{2} %</span> de progression bonus.<br>Les tests d’habileté excellents ne peuvent pas être réalisés lorsque vous utilisez <i>Autodidacte</i>.<li><i>Autodidacte</i> n’est pas actif lorsque vous utilisez une trousse de soins.</li>","name":"Autodidacte","flavor":"« Il n’y a pas de limites à ce que vous pouvez accomplir, tant que vous y parvenez avec un travail rigoureux. » -Adam Francis","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"Chaque fois que vous êtes libéré d’un crochet (en vous échappant ou en étant secouru), ce dernier se brise et vous pouvez voir l’aura du tueur pendant <span class=\\"Highlight1\\">{0} secondes</span>. Un crochet brisé par cette compétence met <span class=\\"Highlight2\\">180 secondes</span> à réapparaître.<br>","name":"Dépression","flavor":"« Charge dans le ventre de la bête »<br>Croquis peint réalisé sur un bout de bois trouvé au bord de la route. J’avais la sensation qu’il avait une histoire à raconter, et il ne m’a pas déçu. – Jeff, lavis à l’encre et à l’huile sur un morceau de bois, 30x40","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"Débloque la capacité à voir les auras.<br><br>Vous voyez l\'aura de tout survivant :<br><li>que vous sauvez ou qui vous sauvent d\'un crochet.</li><li>que vous soignez ou qui vous soignent.</li><br>Le survivant voit lui aussi votre aura.<br><br>Vous pouvez faire cela avec un maximum de <span class=\\"Highlight1\\">{0} survivant(s)</span>. Tous les effets de cette compétence sont réinitialisés quand le tueur vous suspend à un crochet.<br>","name":"Convalescence","flavor":"« Clémence déchirant la tempête »<br>Peinture à l\'huile en l\'honneur de mes meilleurs amis, qui sont également les meilleurs musiciens que je connais. Leur premier album reste mon préféré. Il m\'a beaucoup aidé pendant une période difficile de ma vie. – Jeff, peinture à l\'huile sur toile, 40x40","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"Vous commencez la partie avec <span class=\\"Highlight1\\">{0} jetons</span>.<br><br>Quand votre aura devrait être visible par le tueur, <i>Distorsion</i> s’active et un jeton est consommé.<br><br>Durant les <span class=\\"Highlight1\\">{1} prochaines secondes</span>, tant que <i>Distorsion</i> est activée, vous ne laissez pas de marques d’éraflures et votre aura n’est pas détectée par le tueur.<br><li><i>Distorsion</i> ne peut être activée lorsque vous êtes dans un état critique ou pris dans un piège.</li><br>","name":"Distorsion","flavor":"« La mort bernée par la cape en plumes de faucon »<br>Croquis réalisé au cours de plusieurs nuits d’insomnie en plein hiver. Exploration de la mythologie scandinave : le courage permet de cacher ses faiblesses, même quand on est vulnérable. – Jeff, crayonné sur papier, 30x30","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"Partager des expériences douloureuses a un pouvoir curatif.<br>Quand vous êtes blessé, soigner un survivant sans trousse de soins vous soigne également à un taux de conversion de <span class=\\"Highlight1\\">{0} %</span>.","name":"Solidarité","flavor":"« C’est en étant présent quand ça va mal, en restant à l’écoute des problèmes des autres et en soutenant ceux dans le besoin qu’on devient plus fort et qu’on grandit. » - Jane Romero","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"Atteindre des objectifs renforce votre confiance.<br>Quand un générateur est réparé, vous ne laissez aucune marque d\'éraflures pendant <span class=\\"Highlight1\\">{0} secondes</span>.","name":"Assurance","flavor":"« OK, reste calme. Ne réfléchis pas trop et continue d\'avancer. Tu vas y arriver. » - Jane Romero","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"Quand vous avez décidé de faire quelque chose, mieux vaut ne pas se mettre en travers de votre route.<br><br>Après <span class=\\"Highlight1\\">{0} secondes</span> à l’intérieur d’un casier, <i>Détermination</i> s’active.<br>Tant que <i>Détermination</i> est active, effectuez une action précipitée en sortant du casier pour utiliser <i>Détermination</i>. Si le tueur se tient dans la portée d’effet de <i>Détermination</i>, il est étourdi pendant <span class=\\"Highlight1\\">{1} secondes</span>.<br>Provoque l’effet de statut <span class=\\"Highlight3\\">Épuisement</span> pendant <span class=\\"Highlight1\\">{2} secondes</span>. <br>Détermination ne peut pas être utilisé quand vous êtes épuisé.<br>Vous ne récupérez pas de l’effet de statut <span class=\\"Highlight3\\">Épuisement</span> pendant que vous courez. <br><i>Détermination</i> ne peut pas être utilisé si votre arrêt prolongé a attiré des corbeaux.<br>","name":"De front","flavor":"« On se souvient des gens grâce aux épreuves qu’ils surmontent. Vous pouvez fuir et oublier ce dont vous êtes capable, ou vous pouvez affronter vos peurs et rappeler au monde qui vous êtes. » - Jane Romero","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"Vous possédez la capacité improbable d\'échapper à l\'inévitable.<br><br>En état critique, <span class=\\"Highlight1\\">{0} %</span> de vos progrès de récupération sont convertis en progrès de gigotement quand le Tueur vous saisit, jusqu\'à un maximum de <span class=\\"Highlight2\\">{1} %</span> de progrès de gigotement au total.<br>","name":"Gigoteur","flavor":"\\"Allez, j\'y go d\'agneau.\\" - Ash Williams","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"Renforce la capacité de repérage d\'auras. Le stade de récupération des survivants en état critique peut être déterminé par l\'intensité de leur aura à une distance maximale de <span class=\\"Highlight1\\">{0} mètres</span>.<br><br>Quand vous aidez un survivant à passer de l\'état critique à blessé, le survivant et vous-même voyez l\'aura du Tueur pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br>","name":"Accrochez-vous","flavor":"\\"Les buteurs de fantômes n\'abandonnent jamais un homme.\\" - Ash Williams","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"Le mal parvient toujours à vous trouver.<br><br><i>Force de caractère</i> s’active après avoir effectué Coup de protection <span class=\\"Highlight1\\">{0} fois</span> lors d\'un événement à score.<br><br>Une fois la compétence activée, la prochaine attaque qui devrait vous faire passer d’un <b>état blessé</b> à un <b>état critique</b> est ignorée.<br><br>La prochaine fois que vous récupérerez 100 % de votre santé, votre aura sera détectée par le tueur si vous êtes à plus de <span class=\\"Highlight2\\">{1} mètres</span> de lui.<br><br><i>Force de caractère</i> sera désactivée la prochaine fois que vous serez en état critique.<br><i><li>Augmente vos chances de devenir l’obsession du tueur.</li><li>Le tueur ne peut être <b>obsédé</b> que par un survivant à la fois.</li></i><br>","name":"Force de caractère","flavor":"« Le mal a placardé une cible dans mon dos et elle fait la taille d’un stade de foot. » - Ash Williams","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"Vous cherchez la justice et la vérité sans tenir compte des obstacles.<br><br>L’aura du générateur que vous êtes en train de réparer apparaît à tous les autres survivants situés à moins de <span class=\\"Highlight1\\">{0} mètres</span>.<br><br>Si le tueur met à terre un survivant pendant que vous réparez un générateur, vous voyez l’aura de tous les autres survivants pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br>","name":"Mieux ensemble","flavor":"« Brûlons ce laboratoire jusqu’aux fondations. » - Nancy Wheeler","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"Quand vous avez un objectif en tête, vous n’y renoncez pas : mieux vaut demander pardon que la permission. <br><br>Vous pouvez voir vos propres marques d’éraflure en permanence.<br><br>Vous marchez <span class=\\"Highlight1\\">{0} %</span> plus vite.<br>","name":"Obnubilé","flavor":"« Je veux finir ce que j’ai commencé. Je veux le tuer. » - Nancy Wheeler","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"Vous vous concentrez sur vous-même et faites confiance à votre instinct quand vous vous sentez seul et perdu.<br><br>Chaque fois que vous purifiez un totem, <i>Force intérieure</i> s’active. Si vous avez déjà l’<b>effet de statut Brisé</b>, <i>Force intérieure</i> ne s’active pas.<br><br>Tant que <i>Force intérieure</i> est activée, se cacher dans un casier pendant <span class=\\"Highlight1\\">{0} secondes</span> en étant blessé vous soignera automatiquement de blessé à en forme.<br><br><i>Force intérieure</i> se désactive dès cela fait.<br>","name":"Force intérieure","flavor":"« Pendant tout ce temps, j’ai essayé de prétendre que tout allait bien, mais ce n’est pas le cas. » - Nancy Wheeler","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"Bien que vous ayez la réputation d’être égocentrique, vous risquez tout pour aider ceux dans le besoin.<br><br>Lorsque vous libérez un survivant d’un crochet, il ne laisse pas de marques d’éraflure ni de traînée de sang pendant <span class=\\"Highlight1\\">{0} secondes</span>. Vous voyez l’aura du tueur et il voit la vôtre pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br>","name":"Baby-sitter","flavor":"« J’ai promis de tous vous protéger, et je vais le faire. » - Steve Harrington","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"La vie vous a appris l’importance de l’amitié ce qui vous a rendu plus fort.<br><br>Tant que vous êtes sur le crochet pendant la phase de lutte, <i>Camaraderie</i> s’active.<br><br>Si un autre survivant se tient à <span class=\\"Highlight1\\">{0} mètres</span> de vous pendant que <i>Camaraderie</i> est activée, le chronomètre de crochet est mis en pause pendant <span class=\\"Highlight2\\">{1} secondes</span>.<br>","name":"Camaraderie","flavor":"« Alors, n’oublie pas… quand tu entres, fais comme si tu t’en fichais. C’est ça, tu apprends mon ami. Tu apprends. » - Steve Harrington","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"Après avoir soigné l’équivalent d’un état de santé chez les autres survivants, <i>Second souffle</i> s’active. Si vous êtes déjà sous l’effet de statut <span class=\\"Highlight1\\">Brisé</span>, <i>Second souffle</i> ne s’active pas.<br><br>Tant que <i>Second souffle</i> est activé, votre libération suivante d’un crochet, avec ou sans aide, vous place sous l’effet de statut <span class=\\"Highlight1\\">Brisé</span>. Après une durée totale de <span class=\\"Highlight2\\">{0} secondes</span>, <i>Second souffle</i> vous soigne automatiquement de blessé à en forme.<br><br><i>Second souffle</i> se désactive dès que vous êtes en forme ou si vous tombez en état critique avant que <i>Second souffle</i> termine avec succès son activation. Vous perdez l’effet de statut <span class=\\"Highlight1\\">Brisé</span>.<br>","name":"Second souffle","flavor":"« Ouais, mais non. » - Steve Harrington","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"Vous avez encaissé votre lot de coups et de bleus, mais la chance a toujours été de votre côté.<br><br><i>Coup de chance</i> s’active quand vous êtes blessé. Tant que <i>Coup de chance</i> est actif, vous ne laissez pas de traces de sang ni de marques d’éraflures pendant un total de <span class=\\"Highlight1\\">{0} secondes</span>.<br><br>Une fois cette durée écoulée, <i>Coup de chance</i> est désactivé de manière permanente pour le reste de la partie.<br>","name":"Coup de chance","flavor":"« Ça ne suffit pas pour me vaincre. Loin de là. » - Yui Kimura ","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"Vous vous battez pour vous-même, utilisant tout ce qui vous passe par la main pour avoir l’avantage.<br><br>Appuyez et maintenez le <i>bouton de capacité active</i> pendant <span class=\\"Highlight1\\">{0} secondes</span> à côté d’une palette lâchée pour la réinitialiser en position verticale.<br><br><i>Par tous les moyens</i> a un temps de recharge de <span class=\\"Highlight2\\">{1} secondes</span>.<br>","name":"Par tous les moyens","flavor":"« Je vais te frapper de toutes mes forces. Et après, je vais recommencer. » - Yui Kimura ","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"Quand quelqu’un a des problèmes, vous vous donnez à fond et vous poussez les autres à surmonter les obstacles.<br><br>À <span class=\\"Highlight1\\">{0} mètres</span> maximum d’un survivant transporté, vous bénéficiez de l’effet de statut <span class=\\"Highlight2\\">Rapidité</span>, votre vitesse de mouvement augmente de <span class=\\"Highlight3\\">{1} %</span> et la vitesse de gigotement du survivant transporté augmente de <span class=\\"Highlight4\\">{2} %</span>.<br>","name":"Fugue","flavor":"« Allez, on va se tailler une sortie. » - Yui Kimura ","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"Vous avez appris qu’une approche discrète est parfois la meilleure option. <br><br>Quand on vous libère d’un crochet ou que vous vous en échappez, <i>Confidentiel</i> s’active pendant <span class=\\"Highlight1\\">{0} secondes</span>. <br><br>Tant que <i>Confidentiel</i> est activé, le tueur ne voit pas votre aura et les grognements de douleur provoqués par les blessures sont réduits de <span class=\\"Highlight2\\">{1} %</span>.<br>","name":"Confidentiel","flavor":"« Crois-moi, j’enquête discrètement et de fond en comble. » - Zarina Kassir","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"Vous avez remarqué que les gens font attention à ce qui fait le plus de bruit.<br><br>Après avoir réparé un générateur pendant au moins <span class=\\"Highlight1\\">{0} secondes</span>, il sera entouré d’une aura jaune que personne d’autre que vous ne pourra voir. Le générateur reste signalé jusqu’à ce que vous le répariez complètement, que vous répariez un autre générateur, ou que vous entriez dans un casier. <br><br>Entrer dans un casier déclenche un fort signal sonore du générateur que seul le tueur peut voir. <br><li><i>Leurre</i> ne peut être activé qu’une fois toutes les <span class=\\"Highlight2\\">{1} secondes</span>.</li><br>","name":"Leurre","flavor":"« Les informations coupent ce qui est complexe et pesant... en somme, la vérité. » - Zarina Kassir","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"Vous risquez votre vie et de vous blesser pour les autres.<br><br><i>Pour le peuple</i> est uniquement actif quand votre santé est pleine.<br><br>Appuyez sur le <i>bouton de capacité active</i> lorsque vous soignez un autre survivant sans trousse de soins pour immédiatement le soigner de l’état critique à blessé, ou de blessé à en bonne santé.<br><br>Vous êtes blessé et recevez l’effet de statut <b>Brisé</b> pendant <span class=\\"Highlight1\\">{0} secondes</span>.<br><br>Vous devenez l’Obsession.<br><br>Équiper cette compétence <b>réduit</b> vos chances de devenir l’obsession du tueur au début d’une partie.<br>","name":"Pour le peuple","flavor":"« Nous pouvons écrire notre propre histoire et décider comment elle s’achève. » - Zarina Kassir","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"Vous avez surmonté d’énormes épreuves, ce qui vous a rendu plus fort.<br><br>Gagnez l’effet de statut <b>Endurance</b> pendant <span class=\\"Highlight1\\">{0} secondes</span> après avoir reçu des soins ou après avoir récupéré de l’état critique.<br>Quand vous subissez une malédiction à la suite d’un sort, vous pouvez récupérer complètement de l’état critique.<br><br>Cet effet peut uniquement être déclenché toutes les <span class=\\"Highlight2\\">30 secondes.</span>","name":"Protection de l’âme","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"C’est comme si une part latente de vous-même s’était réveillée. Vous avez la sensation de pouvoir vous dépasser pour porter secours.<br><br>Lorsque l’obsession ou vous-même êtes blessés, vous voyez vos auras respectives.<br><br>Après avoir terminé une action de soin sur l’obsession, ou quand celle-ci termine une action de soin sur vous, vous gagnez tous les deux un effet de statut <b>Rapidité</b> de <span class=\\"Highlight1\\">{1} %</span> jusqu\'à ce que vous soyez à plus de <span class=\\"Highlight2\\">16 m</span> l\'un de l\'autre.<br><br>Réduit les probabilités de devenir l’obsession.<br><br>Si vous êtes l’obsession, cette compétence se désactive.","name":"Pacte de sang","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"Vous avez l\'habitude que des forces maléfiques vous poursuivent et vous avez commencé à l’utiliser à votre avantage.<br><br><i>Alliance inhibée</i> s’active après avoir réparé des générateurs pendant un total de <span class=\\"Highlight1\\">{0} secondes.</span><br><br>Quand vous réparez un générateur avec la compétence active, appuyez sur le <i>bouton de capacité active</i> pour faire appel à l’Entité afin de bloquer le générateur pendant <span class=\\"Highlight2\\">{1} secondes.</span> La compétence se désactive.<br><br>Les générateurs affectés sont indiqués par une aura blanche à tous les survivants.","name":"Alliance inhibée ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"Vous êtes incroyablement concentré sur les moyens de vous enfuir.<br><br>Vous voyez l’aura des générateurs dans un rayon de <span class=\\"Highlight1\\">{0} mètres</span>.<br><br>Quand un générateur est réparé, <i>Visionnaire</i> est désactivé pendant <span class=\\"Highlight2\\">{1} secondes</span>.","name":"Visionnaire","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"Même dans vos pires moments, vous refusez d’échouer.<br><br>Pour chaque survivant blessé, suspendu à un crochet ou en état critique, la vitesse de vos soins et de vos décrochages augmente de <span class=\\"Highlight1\\">{0} %</span>.<br>","name":"Mesures désespérées","flavor":"« S’ils utilisent un boulet de démolition, construisez des murs plus solides. » - Felix Richter","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"Vous savez comment tirer le meilleur de vos outils.<br><br>Une fois par partie, un objet vidé de ses charges en récupérera <span class=\\"Highlight1\\">{0} %</span> au bout de <span class=\\"Highlight2\\">{1} secondes</span>.<br>","name":"Conçu pour durer","flavor":"« L’architecture est l’âme de la civilisation. » - Felix Richter","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"Vous avez l’œil pour remarquer ce que beaucoup négligent.<br><br>Commencez la partie avec <span class=\\"Highlight1\\">{0} jetons</span>. Quand un coffre a déjà été ouvert, consommez un jeton pour le fouiller à la recherche d’un objet. Vous ne pouvez le faire qu’une seule fois par coffre.<br><br>Votre fouille des coffres est <span class=\\"Highlight2\\">{1} %</span> plus rapide.","name":"Estimation","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"Votre style de vie aventureux vous pousse à donner de mauvaises indications.<br><br>Interagir avec un casier tout en sprintant déclenchera un fort avertissement sonore à votre emplacement et vous permettra de ne pas laisser de marques d’éraflures pendant <span class=\\"Highlight1\\">{0} secondes</span>.<br><br>Vous ne pouvez plus entrer dans les casiers lorsque vous sprintez et tant que cette compétence est active.<br><br><i>Supercherie</i> peut uniquement être déclenché une fois toutes les <span class=\\"Highlight2\\">{1} secondes</span>.","name":"Supercherie","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"Vous n’avez jamais abandonné et vous ne comptez pas commencer aujourd’hui.<br><br>Quand le tueur vous transporte, débattez-vous jusqu’à <span class=\\"Highlight1\\">{0} %</span> de la barre de progression pour activer <i>Bras de fer</i>. Tant que <i>Bras de fer</i> est activé, vous pouvez faire tomber une palette debout à proximité pour étourdir le tueur.<br>","name":"Bras de fer","flavor":"« Je n’ai compté sur les autres pour me protéger qu’une seule fois et j’ai tout perdu. Plus jamais ça. » — Élodie Rakoto","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"Parfois, pour passer en tête, il faut sacrifier les autres.<br><br>Chaque fois qu’un survivant est suspendu à un crochet, vous gagnez <span class=\\"Highlight1\\">{0} jetons.</span>Vous consommez tous vos jetons après un excellent test d’habileté sur un générateur. Chaque jeton consommé accorde <span class=\\"Highlight2\\">{1} %</span> de progression bonus pour les tests d’habileté excellents lors de la réparation de générateurs.<br>","name":"Voie rapide","flavor":"« Les faibles sont sacrifiés en premier. C’est la nature, ce sont les affaires... c’est une vérité que la plupart refusent d’entendre. » — Yun-Jin","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"Quand votre rival fait une erreur, vous saisissez votre chance.<br><br>Après avoir étourdi le tueur avec une palette, sprintez à <span class=\\"Highlight1\\">{0} %</span> de votre vitesse normale pendant <span class=\\"Highlight2\\">{1} secondes.</span><br>Déclenche l’effet de statut <b>Épuisement</b> pendant <span class=\\"Highlight3\\">{2} secondes.</span><br>Cette compétence ne peut être utilisée pendant <b>Épuisement</b>.<br>","name":"Coup écrasant","flavor":"« J’ai déjà eu affaire à des psychopathes en costume. Tu es juste plus moche et plus mal fagoté. » —Yun-Jin","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"La vie ne pardonne rien. Parfois, il vaut mieux se préoccuper de soi-même.<br><br>Chaque fois qu’un autre survivant à <span class=\\"Highlight1\\">{0} mètres</span> de vous est frappé par une attaque de base ou une attaque spéciale, <i>Instinct de survie</i> s’active.<br>Vos marques d’éraflures, vos flaques de sang et vos gémissements de douleur sont invisibles pendant <span class=\\"Highlight2\\">{1} secondes.</span><br>","name":"Instinct de survie","flavor":"« J’ai appris une chose dans ce métier : quand les haches volent, baissez la tête. » — Yun-Jin","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"Vous savez comment faire face à un ennemi plus fort que vous, et cela commence en pourchassant et éliminant son soutien.<br><br>Vous purifiez les totems <b>20 %</b> plus vite. Après avoir purifié un totem, vous voyez l’aura du totem le plus éloigné de vous pendant <span class=\\"Highlight1\\">{0} secondes</span> et vous gagnez un bonus de vitesse cumulable supplémentaire de <span class=\\"Highlight2\\">{1} %</span> pour purifier des totems tout le reste de la partie.<br><br><span class= \\"FlavorText\\">« Je ne suis pas contre un peu de travail de détective. » — Jill Valentine</span>","name":"Contre-force","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"Vous avez survécu à des situations quasi impossibles... et vous recommencerez.<br><br>Obtenez une progression de soins de <span class=\\"Highlight1\\">{0} %</span> immédiatement après avoir été libéré d’un crochet ou vous être libéré vous-même.<br><br><span class= \\"FlavorText\\">« C’est mon tour, saloperie. » — Jill Valentine</span>","name":"Renaissance","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"Lorsque le combat direct n’est pas une option, vous trouvez toujours un moyen de contre-attaquer.<br><br><i>Mine explosive</i> s’active après avoir terminé un total de <span class=\\"Highlight1\\">{0} %</span> de segments de progression de réparation des générateurs.<br>Après avoir réparé un générateur pendant au moins 3 secondes, appuyez sur le <i>bouton de capacité</i> pour installer un piège qui reste actif pendant <span class=\\"Highlight2\\">{2} secondes</span>. L’aura des générateurs affectés est révélée en jaune à tous les survivants. Un seul piège peut être actif sur un générateur.<br><li>Lorsque le tueur frappe un générateur piégé, le piège explose, étourdissant et aveuglant quiconque se trouve à proximité. <i>Mine explosive</i> est alors désactivée.</li><br><br><span class= \\"FlavorText\\">« Tu veux les S.T.A.R.S. ? Je vais te faire goûter aux S.T.A.R.S. ! » - Jill Valentine</span>","name":"Mine explosive","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"Vous souffrez autant que n’importe qui, mais vous préférez que les autres ne le sachent pas.<br><br>Vous ne faites pas de bruit, pas même de grognements de douleur, pendant vos soins. Il n’y a pas de notification sonore lors de tests d’habileté de soins ratés et la guérison recule uniquement de <span class=\\"Highlight1\\">{0} %.</span><br><br><span class= \\"FlavorText\\">« Je peux le faire. » — Leon S. Kennedy</span>","name":"Serrer les dents","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"Vous vous êtes adapté à un monde en proie au chaos et vous tirez le meilleur parti des débris alentour.<br><br>Après avoir atteint {0} % de progression sur un générateur, <i>Grenade aveuglante</i> s’active.<br>Entrez dans un casier les mains vides et appuyez sur le bouton de capacité pour fabriquer une grenade aveuglante.<br><li>1 charge.</li><li>Explose avec fracas dans une lueur aveuglante.</li><li>Génère une notification sonore.</li><li>Peut servir à distraire ou à aveugler.</li><br>Vous abandonnez la grenade aveuglante derrière vous lorsque vous vous échappez de la partie.<br><br><span class= \\"FlavorText\\">« Hors de ma vue » — Leon S. Kennedy</span>","name":"Grenade aveuglante","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"Vous ne perdez pas de vue vos objectifs quand ils vous glissent entre les doigts.<br><br>Terminez <span class=\\"Highlight1\\">{0}</span> tests d’habileté bons ou excellents en réparant des générateurs pour activer <i>Esprit de bleusaille</i> pour le reste de la partie.<br>Une fois actif, vous pouvez voir l’aura des générateurs en régression.<br><br><span class= \\"FlavorText\\">« J’y mettrai fin, lieutenant. Je le promets. » — Leon S. Kennedy</span>","name":"Esprit de bleusaille","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/fr/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/fr/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Meneur nerveux, capable de situer ses alliés et d\'améliorer leur efficacité.<BR><BR>Ses compétences <B>Lien</B>, <B>Montrez ce que vous savez faire</B> et <B>Meneur</B> lui permette de s\'approcher des autres survivants et de lui procurer des bonus aux actions de chacun.","name":"Dwight Fairfield","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"Une athlète pleine d\'énergie, capable de semer la plupart des tueurs.<BR><BR>Ses compétences <B>Rapide et silencieux</B>, <B>Course Effrénée</B> et <B>Adrénaline</B> lui donnent un avantage pour fuir et mettre de la distance entre elle et le tueur.","name":"Meg Thomas","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"Une botaniste studieuse capable d\'améliorer la survie de son équipe en plus de la sienne.<BR><BR>Ses compétences <B>Empathie</B>, <B>Connaissances en Botanique</B> et <B>Prophylaxie</B>, lui permettent de repérer les survivants blessés et de les soigner plus efficacement.","name":"Claudette Morel","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"Un survivaliste solitaire capable de s\'en sortir dans la plupart des situations.<BR><BR>Ses compétences <B>Volonté de Fer</B>, <B>Esprit calme</B> et <B>Saboteur</B> lui permettent de se déplacer plus efficacement dans l\'environnement et de survivre tout en étant blessé.","name":"Jake Park","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"Une artiste urbaine capable de fuir facilement et de se cacher.<BR><BR>Ses compétences <B>Atterrissage Équilibré</B>, <B>Évasion Urbaine</B> et <B>Ad Augusta Per Angusta</B> en font un choix idéal pour accomplir certains objectifs et s\'enfuir rapidement.","name":"Nea Karlsson","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"Un vieux soldat habitué aux situations désespérées.<BR><BR>Ses compétences <B>Laissé pour mort</B>, <B>Sur la réserve</B> et <B>Indéfectible</B> le rendent plus puissant dans les pires moments.","name":"William « Bill » Overbeck","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"Un ferrailleur endurci qui récompense la prise de risque.<BR><BR>Ses compétences <B>Nous vivrons éternellement</B>, <B>Drôlement dur</B> et <B>Pas envie</B> récompenses un style de jeu basé sur la confrontation, mais le rendent vulnérable.","name":"David King","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"Une survivante déterminée, prête à relever tous les défis.<BR><BR>Ses compétences <B>Dernier survivant</B>, <B>Objet d\'obsession</B> et <B>Coup décisif</B> lui fournissent des compétences de survie en échange d\'être plus exposée.","name":"Laurie Strode","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"Un parieur chanceux qui améliore les chances de toute l\'équipe.<BR><BR>Ses compétences <B>Main tendue</B>, <B>Augmenter la mise</B> et <B>Un Ace dans la Manche</B> renforcent la chance de tous les survivants et les aident à déverrouiller les coffres.","name":"Ace Visconti","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"Une compétitrice acharnée capable de rapidement adapter sa stratégie pour affronter tout un tas de situations.<BR><BR>Ses compétences <B>Technicien</B>, <B>Souple</B> et <B>Vigilant</B> l\'aident à réparer les générateurs et à localiser le tueur.","name":"Feng Min","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"Un marche-rêves déterminé qui améliore la survie et la récupération de son équipe.<BR><BR>Ses compétences personnelles <B>Debout !</B>, <B>Pharmacie</B> et <B>Vigilant</B> aident les survivants à localiser les portes de sortie et à récupérer plus rapidement.","name":"Quentin Smith","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"Un détective déterminé qui peut localiser et terminer les objectifs plus rapidement.<BR><BR>Ses compétences personnelles <B>Ténacité</B>, <B>Intuition de l\'inspecteur</B> et <B>En planque</B> l\'aident à se concentrer sur les objectifs et à récupérer rapidement.","name":"Inspecteur Tapp","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"Un rossignol plein d\'espoir, capable de tirer le meilleur parti de son environnement. <br><br>Ses compétences personnelles, <b>Danse avec moi</b>, <b>Parfaite occasion</b> et <b>Effusion</b>, lui accordent anticipation et cran pour se tirer des situations les plus dangereuses.","name":"Kate Denson","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"Un professeur plein de ressources, capable de s\'adapter à de nouvelles circonstances et de développer des stratégies appropriées. <br><br>Ses compétences personnelles, <b>Diversion</b>, <b>Libération</b> et <b>Autodidacte</b>, l\'aident à détourner l\'attention du tueur, à survire à des situations désespérées et à devenir de plus en plus doué au fil de la partie.","name":"Adam Francis","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"Un artiste calme, qui résiste contre vents et marées.<br><br>Ses compétences personnelles, <b>Dépression</b>, <b>Convalescence</b> et <b>Distorsion</b>, lui accordent un avantage en observation et l\'aident à dissimuler sa présence au tueur.","name":"Jeff Johansen","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"Une célébrité influente qui va à contre-courant pour affronter les défis bille en tête.<br><br>Ses compétences, <b>Solidarité</b>, <b>Assurance</b> et <b>De front</b> lui procurent une capacité d\'adaptation qui lui permet d\'aider les autres, ainsi qu\'elle-même, à se sortir de situations délicates.","name":"Jane Romero","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"Un loup solitaire, arrogant et têtu. Un homme taillé pour la survie.<br><br>Ses compétences personnelles, <b>Gigoteur</b>, <b>Accrochez-vous</b> et <b>Force de caractère</b> lui procurent une résistance supplémentaire à la douleur et face à l’adversité, ainsi que la possibilité de sortir ses amis de situations délicates. ","name":"Ashley J. Williams","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"Une journaliste en herbe, capable de faire des observations pertinentes et de saisir des éléments qui échappent aux autres.<br><br>Ses compétences personnelles, <b>Mieux ensemble</b>, <b>Obnubilé</b> et <b>Force intérieure</b>, lui donnent les informations et le courage nécessaires pour affronter des défis imprévus.","name":"Nancy Wheeler","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"Un ancien sportif populaire capable de protéger et d\'aider ses compagnons survivants tout en apportant sa propre présence d’esprit et une dose de sarcasme.<br><br>Ses compétences personnelles, <b>Baby-sitter</b>, <b>Camaraderie</b> et <b>Second souffle</b>, l’aident à créer des distractions, à supporter la douleur et à reprendre le combat.","name":"Steve Harrington","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"Une pilote de courses de rue endurcie, capable de gagner des avantages pour elle et les autres survivants lors de situations éprouvantes.<br><br>Ses compétences personnelles, <b>Coup de chance</b>, <b>Par tous les moyens</b> et <b>Fugue</b>, lui permettent de couvrir ses traînées de sang, de réinitialiser les palettes lâchées et d’aider les survivants sans défense.","name":"Yui Kimura","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"Une documentariste courageuse, capable de se fondre dans le décor et d’apporter une aide importante aux autres survivants.<br><br>Ses compétences personnelles, <b>Confidentiel</b>, <b>Leurre</b> et <b>Pour le peuple</b>, lui permettent de rester cachée à proximité du danger, de créer des diversions et de rapidement soigner les autres en s’exposant au péril.","name":"Zarina Kassir","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"Cheryl Mason est une jeune femme habituée à la terreur, capable de s’auto-motiver et d’encourager son équipe.<br><br>Ses compétences personnelles, <b>Protection de l’âme</b>, <b>Pacte de sang</b> et <b>Alliance inhibée</b> lui permettent de surmonter d’énormes épreuves, de rester en contact avec ses coéquipiers et de mettre au point des objectifs.","name":"Cheryl Mason","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"Un architecte visionnaire, capable d’utiliser son implacable détermination pour trouver un moyen d’aider les autres survivants.<br><br>Ses compétences personnelles <b>Visionnaire</b>, <b>Mesures désespérées</b> et <b>Conçu pour durer</b> l’aident à révéler les générateurs, secourir les survivants et tirer le meilleur parti de ses outils.","name":"Felix Richter","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"Une enquêtrice de l’occulte, capable d’utiliser de nombreuses astuces et sa détermination sans faille pour rester en vie.<br><br>Ses compétences personnelles <b>Estimation</b>, <b>Supercherie</b> et <b>Bras de fer</b> lui permettent d’interagir avec des objets de manière différente, tout en ayant un plan de secours pour échapper aux tueurs. ","name":"Élodie Rakoto","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"Une productrice de musique égocentrique, capable de pousser ses pions même en cas de tempête.<br><br>Ses compétences, <b>Voie rapide</b>, <b>Coup écrasant</b> et <b>Instinct de survie</b>, lui permettent d\'améliorer ses capacités quand les autres sont blessés et d\'échapper rapidement à une poursuite. ","name":"Yun-Jin Lee","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"Jill Valentine est une des fondatrices du S.T.A.R.S. qui a réussi à venir à bout d’innombrables armes bio-organiques.<br><br>Ses compétences personnelles, <b>Contre-force</b>, <b>Renaissance</b> et <b>Mine explosive</b> lui permettent de se défendre indirectement, tout en offrant un soutien solide à ses coéquipiers. ","name":"Jill Valentine","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"Leon S. Kennedy est un jeune agent de police qui a fait bien plus que son simple devoir pendant l’épidémie de Raccoon City.<br><br>Ses compétences personnelles, <b>Serrer les dents</b>, <b>Grenade aveuglante</b> et <b>Esprit de bleusaille</b> lui permettent d’ignorer la douleur, de désorienter le tueur et de suivre les objectifs perdus. ","name":"Leon S. Kennedy","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./fr/index.ts ***!
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
/* harmony import */ var _src_lib_locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/fr */ "./src/lib/locales/fr.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_fr__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map