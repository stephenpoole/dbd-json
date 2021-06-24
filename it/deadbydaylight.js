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

/***/ "./src/lib/locales/it.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/it.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_it_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/it/items.json */ "./src/data.compiled/locales/it/items.json");
/* harmony import */ var _data_compiled_locales_it_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/it/killerAddons.json */ "./src/data.compiled/locales/it/killerAddons.json");
/* harmony import */ var _data_compiled_locales_it_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/it/killerOfferings.json */ "./src/data.compiled/locales/it/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_it_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/it/killerPerks.json */ "./src/data.compiled/locales/it/killerPerks.json");
/* harmony import */ var _data_compiled_locales_it_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/it/killers.json */ "./src/data.compiled/locales/it/killers.json");
/* harmony import */ var _data_compiled_locales_it_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/it/powers.json */ "./src/data.compiled/locales/it/powers.json");
/* harmony import */ var _data_compiled_locales_it_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/it/sharedOfferings.json */ "./src/data.compiled/locales/it/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_it_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/it/survivorAddons.json */ "./src/data.compiled/locales/it/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_it_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/it/survivorOfferings.json */ "./src/data.compiled/locales/it/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_it_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/it/survivorPerks.json */ "./src/data.compiled/locales/it/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_it_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/it/survivors.json */ "./src/data.compiled/locales/it/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.Italian;
var data = {
  items: _data_compiled_locales_it_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_it_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_it_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_it_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_it_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_it_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_it_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_it_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_it_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_it_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_it_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/it/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/it/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Una fila di piccoli dispositivi esplosivi avvolti in un involucro di carta spessa. Esplodendo, genera forti scoppi e intensi lampi di luce. Può essere usato come diversivo, come dispositivo accecante o per festeggiare.<br><li><b>1 carica.</b></li>","name":"Petardo cinese","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"Una torcia elettrica standard. Può essere utilizzata per illuminare il tuo cammino nell\'oscurità.<br><li><b>8 secondi</b> di utilizzo.</li>","name":"Torcia elettrica","flavor":"\\"Gran parte della carica della batteria è stata sprecata dal suo precedente proprietario.\\"","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"Una torcia elettrica dotata di uno speciale coperchio per lenti, che aggiunge una tinta arancione e un piccolo fantasma al fascio luminoso. <br><li><b>8 secondi</b> di utilizzo. </li><li><b>Aumenta considerevolmente</b> la presenza di Ghost Face amichevole nella tua vita.</li>","name":"Fuoco fatuo","flavor":"\\"Buon dolcetto o scherzetto!\\"","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"Una torcia elettrica molto facile da trasportare, con una buona presa. La sua efficiente tecnologia produce una luce potente, pur consumando meno energia. <br><li><b>8 secondi di utilizzo</b>.</li><li><b>Riduce leggermente</b> il consumo della batteria della torcia.</li><li><b>Aumenta leggermente</b> la precisione.</li>","name":"Torcia elettrica sportiva","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"Una torcia elettrica robusta ma pesante, di elevata potenza.<br><li><b>12 secondi di utilizzo</b>.</li><li><b>Riduce leggermente</b> la precisione.</li><li><b>Aumenta moderatamente</b> la luminosità visiva del fascio luminoso.</li><li><b>Aumenta moderatamente</b> la durata dell\'accecamento.</li>","name":"Torcia elettrica utilitaria","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"Impugnatura e gambo di una chiave, vibranti di potere. Il potere della chiave rotta non può essere auto-innescato. Vari oggetti possono essere appesi al suo anello di salto per incanalare il potere della chiave rotta in vari effetti.<br><li><b>10 secondi</b> di utilizzo.</li>","name":"Chiave rotta","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"Una chiave storta e scolorita, un tempo portatrice di un grande potere. Il potere della chiave non può essere auto-innescato. Vari oggetti possono essere appesi al suo anello di salto, per incanalare il potere della chiave sbiadita in effetti vari.<br><li><b>5 secondi</b> di utilizzo.</li><li>Può essere consumata per aprire le serrature oscure.</li>","name":"Chiave sbiadita","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"Una chiave ossidata e deformata, vibrante di un\'energia inquietante. Il potere della chiave non può essere auto innescato. Vari oggetti possono essere appesi al suo anello di salto per incanalare il potere della Chiave Universale in vari effetti.<br><li><b>30 secondi</b> di utilizzo.</li><li>Può essere consumata per aprire le serrature oscure.</li>","name":"Chiave universale","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"Un pezzo di una vecchia pergamena fatta di un materiale simile alla pelle. È arrotolato e chiuso da una stringa di cuoio incolore. Mantenendo e incanalando la mappa, viene sbloccato un grande potenziale di capacità di lettura dell\'aura che lentamente brucia la mappa. Le aure dei generatori che hai già incontrato restano visibili per tutto il tempo in cui la mappa ha della carica rimanente.<br><li><b>20 secondi</b> di utilizzo.</li><li>Inizia con <b>1</b> generatore individuato automaticamente.</li><li>Sblocca l\'abilità di individuazione generatori in un raggio di <b>8 metri</b>.</li>","name":"Mappa","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"Un pezzo di pergamena in pelle stranamente fresca. Il sangue sui bordi non è ancora asciutto. È arrotolata e chiusa da diversi cordoncini colorati. Mantenendo e incanalando il potere della mappa, viene sbloccato un grande potenziale di capacità di lettura dell\'aura, che lentamente brucia la mappa stessa. Le aure degli oggetti che hai già incontrato restano visibili per tutto il tempo in cui la mappa ha della carica rimanente. <br><li><b>20 secondi di utilizzo</b>.</li><li>Inizia con <b>3 oggetti</b> individuati automaticamente.</li><li>Sblocca l\'abilità di <b>individuazione oggetti</b> in un raggio di <b>8 metri</b>.</li><li>Sblocca l\'abilità di <b>individuazione delle serrature oscure</b> in un raggio di <b>8 metri</b>.</li><li>Sblocca l\'abilità di <b>individuazione degli effetti personali del killer</b> in un raggio di <b>8 metri</b>.</li><li>Sblocca l\'abilità di <b>individuazione dei cancelli d\'uscita</b> in un raggio di <b>8 metri</b>.</li>","name":"Mappa arcobaleno","flavor":"\\"Sono avvilito. Tutta questa incredibile conoscenza e questo sforzo estenuante e tuttavia niente di tangibile, nulla che possa essere utilizzato per uscire da questo incubo.\\" - Dal Diario di Vigo","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"Un kit di pronto soccorso rudimentale che può salvare vite umane in condizioni di emergenza, sebbene vi sia qualche elemento mancante.<br><li><b>16 cariche</b>.</li><li><b>Aumenta moderatamente</b> la velocità con cui guarisci gli altri.</li><li>Sblocca l\'azione di <b>autoguarigione</b>.</li>","name":"Kit di pronto soccorso da campeggio","flavor":"\\"Contiene materiale appena sufficiente per una sutura decente.\\"","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"Un cestino per il pranzo di plastica con adesivi fosforescenti di Halloween, pieno di attrezzature per il primo soccorso.<br><li><b>24 cariche.</b></li><li><b>Aumenta considerevolmente</b> la velocità con cui guarisci gli altri.</li><li>Sblocca l\'azione di <b>autoguarigione</b>.</li><li>Ti rende <b>considerevolmente più visibile</b>.</li>","name":"Cestino del pranzo della vigilia di Ognissanti","flavor":"\\"La sicurezza al primo posto! Assicurati di essere visto quando fai dolcetto o scherzetto.\\"","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"Un ordinario kit di pronto soccorso con tutto l\'equipaggiamento necessario per il trattamento di lesioni, da comuni a più gravi.<br><li><b>24 cariche.</b></li><li><b>Aumenta considerevolmente</b> la velocità con cui guarisci gli altri.</li><li>Sblocca l\'azione di <b>autoguarigione</b>.</li>","name":"Kit di pronto soccorso","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"Un robusto e ben organizzato kit medico, contenente forniture mediche in ottime condizioni.<br><li><b>16 cariche</b>.</li><li><b>Aumenta straordinariamente</b> la velocità con cui guarisci gli altri.</li><li><b>Aumenta straordinariamente</b> la velocità di autoguarigione.</li><li>Sblocca l\'azione di <b>autoguarigione</b>.</li>","name":"Kit medico per le emergenze","flavor":"\\"C\'è una cura per tutto... ma non per questo.\\"","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"Una scatola metallica di grandi dimensioni contenente forniture mediche per salvataggi d\'emergenza in zone difficili da raggiungere e spesso isolate.<br><li><b>32 cariche</b>.</li><li><b>Aumenta straordinariamente</b> la velocità con cui guarisci gli altri.</li><li><b>Aumenta moderatamente</b> le aree di successo del Test Abilità.</li><li><b>Aumenta moderatamente</b> le aree bonus del Test Abilità.</li><li>Sblocca l\'azione di <b>autoguarigione</b>.</li>","name":"Kit medico da ranger","flavor":"\\"Una piccola etichetta può essere trovata incollata al pannello posteriore, con la seguente incisione: VK.ID-3994723\\"","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"Scatola metallica contenente attrezzi in cattive condizioni che possono rompersi in qualunque momento. Anche senza alcun tipo di formazione, possono essere usati per riparare o distruggere varie componenti meccaniche.<br><li><b>16 cariche</b>.</li><li><b>Aumenta moderatamente</b> la velocità di riparazione.</li><li><b>Riduce leggermente</b> le aree di successo del Test Abilità.</li><li>Sblocca l\'azione di <b>sabotaggio</b>.</li>","name":"Attrezzi usurati","flavor":"\\"E questi li chiami attrezzi? Sul serio?\\"","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"Scatola metallica contenente un set di attrezzi di base. Anche senza alcun tipo di formazione, possono essere usati per riparare o distruggere vari componenti meccanici.<br><li><b>20 cariche.</b></li><li><b>Aumenta moderatamente</b> la velocità di riparazione.</li><li>Sblocca l\'azione di <b>sabotaggio</b>.</li><li><b>Aumenta leggermente</b> la velocità di sabotaggio.</li>","name":"Cassetta degli attrezzi","flavor":"\\"La provenienza di questi attrezzi non è chiara. Sono stati portati qui da uno di noi o appartenevano a uno dei mostri?\\"","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"Scatola metallica con attrezzatura altamente specializzata, utilizzata in campo meccanico. Anche senza alcun tipo di formazione, può essere usata per riparare o distruggere vari componenti meccanici.<br><li><b>16 cariche</b>.</li><li><b>Aumenta considerevolmente</b> la velocità di riparazione.</li><li>Sblocca l\'azione di <b>sabotaggio</b>.</li><li><b>Riduce leggermente</b> la velocità di sabotaggio.</li>","name":"Cassetta degli attrezzi da meccanico","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"Una scatola metallica di grandi dimensioni contenente attrezzatura di base e parti meccaniche aggiuntive. Anche senza alcun tipo di formazione, può essere usata per riparare o distruggere vari componenti meccanici.<br><li><b>32 cariche</b>.</li><li><b>Aumenta moderatamente</b> la velocità di riparazione.</li><li>Sblocca l\'azione di <b>sabotaggio</b>.</li>","name":"Cassetta degli attrezzi spaziosa","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"Scatola metallica con attrezzatura altamente specializzata, utilizzata in campo ingegneristico. Anche senza alcun tipo di formazione, molti degli attrezzi possono comunque essere usati per effettuare riparazioni veloci o distruggere vari componenti meccanici.<br><li><b>16 cariche</b>.</li><li><b>Aumenta straordinariamente</b> la velocità di riparazione.</li><li>Sblocca l\'azione di <b>sabotaggio</b>.</li><li><b>Riduce moderatamente</b> la velocità di sabotaggio.</li>","name":"Cassetta degli attrezzi da ingegnere","flavor":"\\"Ho creato attrezzi incomparabili e sono rimasto paralizzato mentre mi venivano portati via. Questi non sono altro che una mediocre replica, rigurgitata dalla Nebbia.\\" - dal Diario di Vigo","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"Una scatola di metallo contenente principalmente seghe e morse di varie dimensioni, ma anche altri strumenti. Anche se il contenuto di tale cassetta è chiaramente rivolto ad atti distruttivi, esso può essere usato anche per riparare vari componenti meccanici.<br><li><b>24 cariche</b>.</li><li><b>Aumenta leggermente</b> la velocità di riparazione.</li><li>Sblocca l\'azione di <b>sabotaggio</b>.</li><li><b>Aumenta considerevolmente</b> la velocità di sabotaggio.</li>","name":"Cassetta degli attrezzi di Alex","flavor":"\\"Molti degli attrezzi sono contrassegnati come \\"di proprietà di Alex\\\\\'.\\"","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"Un piccolo centrotavola altamente esplosivo. Quando viene innescato, genera forti scoppi e intensi lampi di luce. Può essere usato come diversivo, come dispositivo accecante o per festeggiare.<br><li><b>1 carica.</b></li>","name":"Anima della festa invernale","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"Un piccolo centrotavola altamente esplosivo. Quando viene innescato, genera forti scoppi, intensi lampi di luce e coriandoli colorati. Può essere usato come diversivo, come dispositivo accecante o per festeggiare insieme i nostri primi tre anni.<br><li><b>1 carica.</b></li>","name":"Iniziatore della festa per il terzo anno","flavor":"\\"Buon anniversario! Alla vostra, e ai nostri tre anni insieme!\\"<br>- Il team di Dead by Daylight","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"Un kit medico festivo che guarisce completamente il sopravvissuto e spara una pioggia di coriandoli. Sorpresa!<br><li><b>24 cariche</b>.</li><li><b>Aumenta considerevolmente</b> la velocità con cui guarisci gli altri.</li><li>Sblocca l\'azione di <b>autoguarigione</b>.</li>","name":"Kit medico dell\'anniversario","flavor":"\\"Buon anniversario! Alla vostra, e a tanti altri anni insieme!\\"<br>- Il team di Dead by Daylight","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"Una torcia festiva che acceca il killer e spara una pioggia di coriandoli. Sorpresa!<br><li><b>8 secondi</b> di utilizzo.</li>","name":"Torcia dell\'anniversario","flavor":"\\"Buon anniversario! Alla vostra, e a tanti altri anni insieme!\\"<br>- Il team di Dead by Daylight","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/it/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Guanti protettivi di pelle imbottita. <br><li><b>Aumentano leggermente</b> la velocità di posa delle Trappole per Orsi.</li>","name":"Guanti da cacciatore","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"Una molla grossa e pesante che aggiunge molta forza alla presa delle tagliole.<br><li><b>Aumenta leggermente</b> il tempo di disarmo delle tagliole.</li>","name":"Molla elicoidale forte","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"Un kit di sostituzione per le tagliole, che cambia il solito sistema a doppia molla con un sistema a 4 molle elicoidali aggiungendo una forza notevole alla presa.<br><li><b>Aumenta moderatamente</b> il tempo di disarmo delle tagliole.</li>","name":"Kit di 4 molle elicoidali","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"Cenere di legno. Se bollita, può essere usata per tingere le Trappole per Orsi, rendendole meno evidenti.<br><li><b>Scurisce moderatamente</b> tutte le Trappole per Orsi.</li>","name":"Tintura di legno di campeggio","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"Queste ganasce di ricambio per tagliole hanno lame simili a quelle di una sega e, scattando, causano terribili ferite.<br><li>I sopravvissuti finiti in una tagliola subiscono danni dall\'effetto <b>Emorragia</b> finché non vengono curati.</li>","name":"Ganasce serrate","flavor":"\\"Come una bestia predatrice, può sentire l\'odore e seguire le tracce di sangue.\\"","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"Attrezzi semplici progettati per posizionare le Trappole per Orsi velocemente e in sicurezza.<br><li><b>Aumenta moderatamente</b> la velocità di posa delle Trappole per Orsi.</li>","name":"Fissaggi per trappole","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"Una borsa da cintura in cuoio indurito. Grande e robusta per il trasporto di attrezzature da Cacciatore.<br><li>Inizia con <b>1 Trappola per Orsi</b> extra.</li><li>Consente il trasporto di <b>1 Trappola per Orsi</b> extra.</li>","name":"Borsa da cacciatore","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"Le ganasce di queste tagliole sono ricoperte di ruggine incrostata e volatile, che rende le ferite inflitte particolarmente difficili da guarire.<br><li>I sopravvissuti finiti in una tagliola subiscono l\'effetto <b>Lacerazione</b>.","name":"Ganasce arrugginite","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"Una molla secondaria che mantiene una tagliola funzionale quando quelle primarie diventano inutilizzabili.<br><li><b>Aumenta considerevolmente</b> il tempo di disarmo delle tagliole.</li>","name":"Molla secondaria","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"Una sostanza nera, opaca e appiccicosa simile al catrame. Se applicata alle Trappole per Orsi, le rende meno evidenti.<br><li><b>Oscura considerevolmente</b> tutte le Trappole per Orsi.</li>","name":"Bottiglia di catrame","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"Un blocco di cera utilizzato per diminuire l\'attrito e facilitare il movimento delle parti meccaniche.<br><li><b>Riduce moderatamente</b> le probabilità di fuga da una Trappola per Orsi.</li>","name":"Blocco di cera","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"Un olio chiaro che rende più pericolosa la manipolazione della molla delle tagliole.<br><li><b>Aumenta straordinariamente</b> il tempo di disarmo delle tagliole.</li>","name":"Molla oleosa","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"Un set specialistico di attrezzi utili per fissare le Trappole per Orsi, assicurandone l\'efficacia.<br><li><b>Aumenta straordinariamente</b> la velocità di posa delle Trappole per Orsi.</li><li><b>Aumenta considerevolmente</b> il tempo di soccorso e fuga dalle Trappole per Orsi.</li><li><b>Riduce moderatamente</b> la probabilità di fuga dalle Trappole per Orsi.</li>","name":"Sistemi di fissaggio","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"Pezzi di pelle di tutti i tipi crudelmente cuciti insieme per realizzare una borsa di dimensioni considerevoli.<br><li>Inizia con <b>2 Trappole per Orsi</b> extra.</li><li>Consente il trasporto di <b>2 Trappole per Orsi</b> extra.</li>","name":"Borsa ricucita","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"In parte appiccicoso e scivoloso, questo liquido lugubre rende più pericolosa la manipolazione della molla delle tagliole.<br><li>Quando una tagliola viene sabotata o disarmata da un sopravvissuto <b>sano</b>, le molle insanguinate pretendono un sacrificio, e quel sopravvissuto diventa <b>ferito</b>.</li><li><b>Aumenta leggermente</b> il tempo di disarmo delle tagliole.</li>","name":"Molla insanguinata","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"Le trappole affilate con questa pietra dal debole bagliore sembrano acquisire una vita propria.<br><li>Ogni <b>30 secondi</b>, viene posizionata una Trappola per Orsi chiusa e scelta a caso.</li>","name":"Pietra iridescente","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"Il simbolo Laokeye, raffigurante l\'astuzia, è disegnato con le dita sul corpo della campana utilizzando fuliggine.<br><li>Se invisibile, lo Spettro diventerà <b>completamente visibile</b> quando spacca i bancali o danneggia i generatori.</li>","name":"\\"Il Serpente\\" - Fuliggine","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"Il simbolo Wonnug, raffigurante un segugio fedele, è disegnato con le dita sul corpo della campana utilizzando fuliggine.<br><li>Se invisibile, le tracce di sangue fresco sono <b>considerevolmente</b> più distinguibili del normale.</li>","name":"\\"Il Segugio\\" - Fuliggine","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"Il simbolo Khugwemuu, raffigurante il mondo degli spiriti, è disegnato con le dita sul corpo della campana utilizzando fuliggine.<br><li>Tornando visibile, il raggio di terrore e la macchia rossa dello Spettro rimangono inattivi per <b>6 secondi</b>.</li>","name":"\\"Ghost Face\\" - Fuliggine","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"Il simbolo Kunwulju, raffigurante il regno delle paure, è disegnato con le dita sul corpo della campana utilizzando della fuliggine.<br><li>Il raggio di terrore dello Spettro <b>non è più inattivo</b> quando invisibile.</li><li>I Punti Sangue assegnati per la persecuzione e gli attacchi a sorpresa aumentano del 100%.</li>","name":"\\"La Bestia\\" - Fuliggine","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"Un batacchio per campana realizzato con un pezzo d\'osso completamente lucidato. Distorce e fa riecheggiare in modo disorientante il suono della Campana del Pianto.<li>I sopravvissuti non riescono più a percepire la <b>distanza</b> o la <b>direzione</b> della Campana del Pianto.</li>","name":"Batacchio d\'osso","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"Il simbolo Kratin, raffigurante il passaggio rapido, è disegnato con le dita sul corpo della campana utilizzando del fango.<br><li><b>Riduce considerevolmente</b> il tempo di scomparsa dello Spettro.</li>","name":"\\"Battito di ciglia\\" - Fango","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"Il simbolo Ohuwe-Onmnea, raffigurante una violenta tempesta, è disegnato con le dita sul corpo della campana utilizzando il fango.<li><b>Aumenta moderatamente</b> la velocità di movimento dello Spettro, se invisibile.</li>","name":"\\"Tempesta di vento\\" - Fango","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"Il simbolo Kuntin-Takkho, raffigurante una picchiata sulla preda, è disegnato con le dita sul corpo della campana utilizzando del fango.<br><li><b>Riduce leggermente</b> il tempo di ricomparsa dello Spettro.</li>","name":"\\"Caccia rapida\\" - Fango","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"Il simbolo Baikra-Kaeug, raffigurante la ferocia, è disegnato con le dita sul corpo della campana utilizzando il fango.<br><li>Gli <b>attacchi a sorpresa</b> infliggono <b>Accecamento dell\'aura</b> ai sopravvissuti per <b>60 secondi.</b></li>","name":"\\"Guerriero accecato\\" - Fango","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"Il simbolo Ohuwe-Onmnea, raffigurante una violenta tempesta, è disegnato con le dita sul corpo della campana utilizzando inchiostro bianco.<li><b>Aumenta considerevolmente</b> la velocità di movimento dello Spettro, se invisibile.</li>","name":"\\"Tempesta di vento\\" - Bianco","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"Il simbolo Kuntin-Takkho, raffigurante una picchiata sulla preda, è disegnato con le dita sul corpo della campana utilizzando inchiostro bianco.<br><li><b>Riduce moderatamente</b> il tempo di ricomparsa dello Spettro.</li>","name":"\\"Caccia rapida\\" - Bianco","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"Il simbolo Yiwarick, raffigurante la sinergia oscura, è disegnato con le dita sul corpo della campana utilizzando inchiostro bianco.<br><li><b>Riduce considerevolmente</b> il tempo per saltare le finestre, aprire gli armadietti, spaccare i bancali e altri oggetti frantumabili o danneggiare i generatori quando invisibile.</li>","name":"\\"Danza delle ombre\\" - Bianco","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"Il simbolo Kratin, raffigurante il passaggio rapido, è disegnato con le dita sul corpo della campana utilizzando inchiostro bianco.<br><li><b>Riduce straordinariamente</b> il tempo di scomparsa dello Spettro.</li>","name":"\\"Battito di ciglia\\" - Bianco","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"Il simbolo Baikra-Kaeug, raffigurante la ferocia, è disegnato con le dita sul corpo della campana utilizzando inchiostro bianco.<br><li>Gli attacchi a sorpresa infliggono gli effetti <b>Lacerazione</b> ed <b>Emorragia</b> ai sopravvissuti fino alla completa guarigione.</li>","name":"\\"Guerriero accecato\\" - Bianco","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"Il simbolo Ohuwe-Onmnea, raffigurante una violenta tempesta, è disegnato con il sangue sul corpo della campana.<br><li><b>Aumenta straordinariamente</b> la velocità di movimento dello Spettro, se invisibile.</li>","name":"\\"Tempesta di vento\\" - Sangue","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"Il simbolo Kuntin-Takkho, raffigurante una picchiata sulla preda, è disegnato con il sangue nella parte superiore della campana.<br><li><b>Riduce considerevolmente</b> il tempo di ricomparsa dello Spettro.</li>","name":"\\"Caccia rapida\\" - Sangue","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"Il simbolo Yiwarick, raffigurante la sinergia oscura, è stampato con il sangue sul corpo della campana.<br><li><b>Riduce straordinariamente</b> il tempo per saltare le finestre, aprire gli armadietti, spaccare i bancali e altri oggetti frantumabili o danneggiare i generatori quando invisibile.</li>","name":"\\"Danza delle ombre\\" - Sangue","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"Il simbolo Kra-Frabai, raffigurante l\'Entità che veglia su di noi, è stampato col sangue sulla parte superiore della campana.<br><li>Sblocca il potenziale nascosto nell\'abilità di lettura dell\'aura. Se invisibile, ti viene rivelata l\'aura dei sopravvissuti in un raggio di <b>12 metri</b>.</li>","name":"\\"Onniveggente\\" - Sangue","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"Una corda intrecciata, avvolta intorno al batacchio della campana per creare un suono più delicato. Emana un\'aura sinistra.<br><li><b>Silenzia completamente</b> la Campana del Pianto.</li>","name":"Batacchio con intreccio","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"Il simbolo Kra-Frabai, raffigurante l\'entità che ci sorveglia, balugina in maniera sinistra sulla parte superiore della campana.<br><li>Sblocca il potenziale nascosto nell\'abilità di lettura dell\'aura. Se invisibile, il <b>progresso di riparazione dei generatori</b> è determinabile dall\'<b>intensità delle loro aure.</b></li>","name":"\\"Onniveggente\\" - Spirito","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"Un meccanismo di qualità che riduce la frizione della catena.<br><br><li><b>Riduce</b> la zona d\'urto durante lo scatto con la motosega.</li>","name":"Ingranaggio pesante","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"Un dispositivo meccanico che limita la quantità di carburante che piccoli motori possono assumere in una sola volta, forzando una velocità sicura e costante.<br><br><li>I sopravvissuti colpiti con la motosega subiscono un danno pari a uno stato di salute.</li><li>Ottieni il <b>100%</b> di Punti Sangue in più per gli eventi motosega.</li>","name":"Limitatore di velocità","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Un filtro crepato e impolverato, ma che funziona meglio del modello di serie.<br><br><li><b>Aumenta leggermente</b> il limite di surriscaldamento della motosega.</li>","name":"Filtro dell\'aria di scarto","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"Stivali dalla punta rinforzata per garantire maggiore protezione negli impatti.<br><br><li><b>Riducono leggermente</b> il tempo di recupero dopo aver colpito un oggetto con la motosega.</li>","name":"Stivali con punta in acciaio","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"Una marmitta modificata alla buona che consente un maggiore flusso d\'aria.<br><br><li><b>Aumenta leggermente</b> la velocità di raffreddamento della motosega.</li>","name":"Marmitta forata","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"Una cintura lucente indossata da molti veterani.<br><br><li><b>Riduce</b> il raggio di terrore di 8 metri quando la motosega si surriscalda.</li>","name":"Fibbia vistosa","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"Un olio economico usato per lubrificare catene sferraglianti.<br><br><li><b>Riduce leggermente</b> il rumore prodotto dalla motosega.</li>","name":"Olio per motore sottomarca","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"Un paio di stivali affidabili, rubati dal cadavere di Max Thompson Sr.<br><br><li><b>Aumentano moderatamente</b> il controllo durante lo sprint con la motosega.</li>","name":"Stivali di papino","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"Incisioni trovate sul corpo della motosega con il conteggio del numero di vite stroncate dalla stessa. Instilla determinazione nell\'utilizzatore della motosega.<br><li><b>Aumenta leggermente</b> la velocità di movimento della motosega.</li><li><b>Aumenta leggermente</b> il tempo di carica.</li><li>Cumulabile.</li>","name":"Incisioni di morte","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"Una piccola quantità di pillole alla caffeina rinvenute nella borsetta di Evelyn Thompson. Gli effetti collaterali includono nervosismo e irritabilità.<br><br><li><b>Riducono leggermente</b> il tempo di carica della motosega per 30 secondi dopo essere stato stordito da un bancale.</li><br>","name":"Aiuto della mamma","flavor":"\\"Dottore, la prego, me ne dia altre.\\" - Evelyn Thompson","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"Una speciale catena che riduce il rischio di contraccolpo.<br><br><li><b>Riduce considerevolmente</b> il tempo di penalità quando sbatti contro un ostacolo durante lo sprint con la motosega.</li>","name":"Catene efficienti","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"Una poltiglia umidiccia di foglie fresche che coprono l\'odore del cacciatore in una battuta di caccia.<br><br><li>Ricevi l\'effetto Impercettibile per 15 secondi dopo aver sferrato un colpo con la motosega.</li>","name":"Poltiglia di foglie","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"Incisioni trovate sul corpo della motosega raffiguranti la bestia oscura che vive nella Nebbia. Instillano determinazione in chi la usa.<br><li><b>Aumenta moderatamente</b> la velocità di movimento durante uno scatto con la motosega.</li><li><b>Aumenta leggermente</b> il tempo di carica della motosega.</li>","name":"Incisioni di sventura","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"Grasso viscoso da applicare sotto gli occhi per ridurre il riverbero.<br><br><li><b>Aumenta moderatamente</b> la velocità di raffreddamento della motosega quando ti illumina una torcia.</li>","name":"Grasso nero","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"Nonostante la sporcizia e le macchie d\'olio, questo carburatore è stato rimesso in sesto decentemente.<br><br><li><b>Riduce moderatamente</b> il tempo di carica della motosega.</li><li><b>Riduce</b> la velocità di movimento base a 4,4 m/s.","name":"Carburatore sistemato","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"Stivali con borchie di metallo che si piantano nel fango per garantire maggior controllo e stabilità a ogni passo.<br><li><b>Aumentano straordinariamente</b> il controllo durante l\'utilizzo della motosega.</li><li><b>Aumentano considerevolmente</b> il tempo di penalità quando sbatti contro gli oggetti.</li>","name":"Stivali con borchie","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"Guanti puzzolenti, insozzati con sostanze sconosciute. Nonostante tutto, sono fatti di un materiale molto spesso.<br><br><li><b>Riducono moderatamente</b> il calore quando inizi a mandare su di giri la motosega.</li><br>","name":"Guanti da porcile","flavor":"\\"Nulla può macchiare l\'animo di un uomo operoso.\\" - Max Thompson Sr.","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"Catene leggere che alleggeriscono la motosega, consentendo una maggiore manovrabilità.<br><br><li>Lo scatto con la motosega prosegue anche dopo aver rotto un bancale o aver frantumato un muro.</li><li>I sopravvissuti colpiti con la motosega entro 5 secondi dalla rottura di un bancale o di un muro subiscono un danno pari a uno stato di salute.</li>","name":"Catene LoPro","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"Questo mattone, un tempo prova della prigionia di Max Jr., fu il primo a cascare quando crollò la barricata nella sua stanza.<br><br><li>Dopo aver usato lo scatto con motosega per 2 secondi, ricevi l\'effetto Impercettibile fino al termine dello sprint.</li><br>","name":"Mattone iridescente","flavor":"\\"Che stai tramando, ragazzo?\\" - Max Thompson Sr.","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"Una marmitta per motoseghe realizzata a opera d\'arte. Di gran lunga superiore a tutte le altre.<br><br><li>La motosega non emette alcun suono per i sopravvissuti fuori dal raggio di terrore.</li>","name":"Marmitta Apex","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"Un giocattolo non verniciato a forma di cavallo, intagliato in un legno economico. Un tempo simboleggiava il legame profondo tra un paziente catatonico e la sua infermiera.<br><li><b>Riduce moderatamente</b> l\'affaticamento extra causato dagli attacchi con il Battito di Ciglia mancati.</li>","name":"Cavallo di legno","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"Un pettine antipidocchi preso dalla clinica. Una volta era il simbolo della profonda connessione tra un\'ansiosa paziente e la sua infermiera.<br><li><b>Riduce moderatamente</b> la distanza degli attacchi in affondo con il Battito di Ciglia.</li><li>Aumenta del <b>100%</b> i Punti Sangue degli eventi <i>attacco con il Battito di Ciglia</i>.</li>","name":"Pettine bianco","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"Un normale cucchiaio di metallo, in parte sporco e arrugginito. Confiscato al paziente della stanza 202, il cosiddetto \\"Uomo Cattivo\\".<br><li>Colpire un sopravvissuto con un Battito di Ciglia ne provoca un gemito di dolore <b>moderatamente più rumoroso</b> per <b>60 secondi</b>.</li>","name":"Cucchiaio di metallo","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"Un molare cariato estratto dalla mano ferma del cosiddetto \\"Uomo cattivo\\".<br><li>Colpire un sopravvissuto con il Battito di Ciglia rivela la sua aura quando cura o viene curato entro un raggio di <b>28 metri</b> per <b>60 secondi</b>.</li>","name":"Cimelio dell\'Uomo Cattivo","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"Un orologio da taschino rotto e annerito con pezzi sferraglianti. Preso dal corpo dell\'infermiera Moris.<br><li><b>Aumenta moderatamente</b> il periodo di concatenazione del Battito di Ciglia.</li>","name":"Orologio da taschino","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"Un monile senza valore che potrebbe aver avuto un importante significato per qualcuno. Preso dal corpo della ragazza ansiosa.<br><li><b>Riduce moderatamente</b> la distanza massima da cui è possibile effettuare il Battito di Ciglia.</li><li>Aumenta del <b>100%</b> i Punti Sangue per gli eventi <i>Battito di Ciglia preciso</i></li>","name":"Braccialetto sbiadito","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"Una corda nera usata come cintura in tempo di lutto. Presa dal corpo di Padre Campbell.<br><li><b>Aumenta moderatamente</b> la velocità di ricarica del Battito di Ciglia.</li>","name":"Cintura tenebrosa","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"Una pigna capace inaspettatamente di calmare i movimenti ripetitivi di un paziente. Presa dal corpo del ragazzo catatonico.<br><li><b>Riduce considerevolmente</b> l\'affaticamento extra causato dai Battiti di Ciglia concatenati.</li>","name":"Tesoro del ragazzo catatonico","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"Il respiro tremulo e nervoso strappato all\'Uomo Cattivo. Batte e salta aggressivamente al tocco dell\'Infermiera.<br><li>Colpire un sopravvissuto con il Battito di Ciglia <b>disattiva il Battito di Ciglia dell\'Infermiera</b> e incrementa la sua velocità di movimento a <b>4,6 m/s</b> per <b>60 secondi</b>.</li>","name":"Respiro spasmodico","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"Il respiro lento e affaticato strappato all\'Assistente grosso. Oscilla debolmente al tocco dell\'Infermiera.<br><li><b>Aumenta considerevolmente</b> il raggio massimo del Battito di Ciglia.</li><li><b>Aumenta considerevolmente</b> il tempo di carica massimo del Battito di Ciglia.</li>","name":"Grande affanno","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"Il respiro rantolante sottratto a Padre Campbell. Si flette sinuoso e silenzioso al tocco dell\'Infermiera.<br><li><b>Aumenta considerevolmente</b> la velocità di ricarica del Battito di Ciglia.</li>","name":"Rantolo gracile","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"Il respiro debole e irregolare strappato al ragazzo catatonico. Normalmente stabile e calmo, diventa incredibilmente agitato al tocco dell\'Infermiera.<br><li><b>Riduce moderatamente</b> la durata dell\'affaticamento dovuto al Battito di Ciglia.</li>","name":"Respirazione atassica","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"Il sospiro di sorpresa di una ragazza ansiosa alla quale l\'Infermiera si era affezionata. Si agita vigorosamente al tocco dell\'Infermiera.<br><li>Passare accanto ai sopravvissuti con il Battito di Ciglia li fa urlare e ti fa ottenere <b>200 Punti Sangue</b> nella categoria <i>Dissimulazione</i>.</li>","name":"Sospiro ansioso","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"Un pezzo lacero di flanella a quadri rossi e neri. Il pezzo di stoffa impregna l\'Infermiera di un fuoco devastante.<br><li>Permette all\'Infermiera di vedere le destinazioni del Battito di Ciglia.</li>","name":"Flanella con motivo scozzese","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"Un potente ultimo respiro strappato a Harvey Kavanagh, assistente dell\'ospedale psichiatrico Crotus Prenn. Nelle mani dell\'Infermiera oscilla intensamente.<br><li><b>Aumenta straordinariamente</b> il raggio massimo del Battito di Ciglia.</li><li><b>Aumenta straordinariamente</b> il tempo di carica massimo del Battito di Ciglia.</li>","name":"Ultimo respiro di Kavanagh","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"Un potente ultimo respiro strappato a Mary Jenner, paziente dell\'ospedale psichiatrico Crotus Prenn. Nelle mani dell\'Infermiera crepita intensamente.<br><li>Dopo aver usato un Battito di Ciglia, l\'Infermiera può immediatamente usarlo nuovamente per tornare alla posizione originaria premendo il <i>pulsante abilità attiva</i>. Deve essere usato prima che l\'Infermiera abbia la peggio a causa dell\'affaticamento.</li>","name":"Ultimo respiro di Jenner","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"Un potente ultimo respiro strappato al prete dell\'ospedale psichiatrico Crotus Prenn, Padre Campbell. Nelle mani dell\'Infermiera crepita intensamente.<br><li>Dopo essere riapparsa da un Battito di Ciglia completamente carico, l\'Infermiera esegue subito un secondo Battito di Ciglia di carica dimezzata nella direzione verso cui è rivolta.</li>","name":"Ultimo respiro di Campbell","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"Un potente ultimo respiro strappato all\'Uomo Cattivo, paziente dell\'ospedale psichiatrico Crotus Prenn. Nelle mani dell\'Infermiera sobbalza intensamente.<br><li>Colpire un sopravvissuto con un attacco del Battito di Ciglia conferisce all\'Infermiera lo stato <b>Impercettibile</b> per <b>16 secondi</b>.</li><li>L\'effetto è attivabile una volta ogni <b>60 secondi</b>.</li>","name":"Ultimo respiro dell\'Uomo Cattivo","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"Un pezzo di nastro bianco immacolato, una volta attaccato a un libro sacro. Funge come simbolo di una disputa.<br><li>Aggiunge <b>1</b> carica al Battito di Ciglia.</li><li>È possibile usare il Battito di Ciglia solo nei luoghi che rientrano nel campo visivo dell\'Infermiera.</li>","name":"Segnalibro lacerato","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"Una scatola di fiammiferi contenente una strana collezione di bottoni spaiati. Funge da promemoria di un luogo nefasto.<br><li>Rimuove <b>1</b> carica del Battito di Ciglia.</li><li>Aumenta la velocità di movimento base dell\'Infermiera fino a <b>4,2 m/s</b>.</li>","name":"Scatola di fiammiferi","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"Un pezzo di gioielleria piuttosto scadente, realizzato in plastica e verniciato per dargli una parvenza di materiale prezioso.<br><li><b>Aumenta leggermente</b> la velocità di movimento mentre perseguiti la tua vittima.</li>","name":"Orecchini pacchiani","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"Un \\"romantico\\" seppur squallido, bigliettino lasciato in giro per attirare l\'attenzione di un\'amante femminile.<br><li><b>Aumenta leggermente</b> l\'affondo di <b>Malvagità Innata I</b>.</li>","name":"Bigliettino del fidanzato","flavor":"\\"Il biglietto è firmato: D.\\"","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"Un singolo capello biondo leggermente ondulato.<br><li><b>Aumenta leggermente</b> la durata di <b>Malvagità Innata III</b>.</li><li><b>Aumenta leggermente</b> il quantitativo di male richiesto per raggiungere <b>Malvagità Innata III</b> la prima volta.</li>","name":"Capello biondo","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"Un piccolo pezzo di un materiale altamente riflettente, probabilmente appartenente a uno specchio rotto.<br><li><b>Malvagità Innata II rivela l\'aura dei sopravvissuti</b> che sono stati perseguitati per almeno <b>1 secondo</b>.</li><li>L\'aura resta visibile per <b>2 secondi</b>.</li>","name":"Frammento riflettente","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"Un delfinio parzialmente secco e sbiadito raccolto da una lapide.<br><li><b>Aumenta leggermente</b> il tasso di ottenimento del male quando perseguiti un sopravvissuto.</li>","name":"Fiore del memorial","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"Un\'ampia collana realizzata con metalli e perline poco costose. Una delle preferite di Judith.<br><li><b>Aumenta moderatamente</b> la velocità di movimento mentre perseguiti la tua vittima.</li>","name":"Gioielli","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"Una spazzola in setole di nylon usata per dare corpo e morbidezza ai capelli.<br><li><b>Aumenta moderatamente</b> la durata di <b>Malvagità Innata III</b>.</li><li><b>Aumenta leggermente</b> il quantitativo di male richiesto per raggiungere <b>Malvagità Innata III</b> la prima volta.</li>","name":"Spazzola per capelli","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"Un piccolo pezzo di vetro colorato, probabilmente appartenente a un oggetto rotto. Non è possibile determinarne l\'origine.<br><li><b>Malvagità Innata I</b> rivela l\'aura dei sopravvissuti che sono stati perseguitati per almeno <b>1 secondo</b>.</li><li>L\'aura resta visibile per <b>3 secondi</b>.</li>","name":"Frammento di vetro","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"Un coniglio grigio che è stato aperto dal collo alla coda.<br><li><b>Riduce moderatamente</b> il raggio di terrore di <b>Malvagità Innata II</b>.</li><li><b>Aumenta moderatamente</b> il raggio di terrore di <b>Malvagità Innata III</b>.</li>","name":"Coniglio morto","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"Un pezzo grande e tagliente di uno specchio rotto.<br><li><b>Malvagità Innata II rivela l\'aura dei sopravvissuti</b> che sono stati perseguitati per almeno <b>1 secondo</b>.</li><li>L\'aura resta visibile per <b>5 secondi</b>.</li>","name":"Scheggia di specchio","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"Un diario appartenuto a Judith M. Myers. La maggior parte delle pagine sono state imbrattate da disegni inquietanti e spaventosi.<br><li>Diventi <b>ossessionato</b> da uno dei sopravvissuti.</li><li><b>Aumenta considerevolmente</b> il tasso di ottenimento del male quando perseguiti l\'oggetto della tua ossessione.</li><li><i>Una sola ossessione per partita.</i></li>","name":"Diario di Judith","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"Un cofanetto di legno vuoto, un tempo contenente oggetti di bigiotteria.<br><li><b>Aumenta considerevolmente</b> la velocità di movimento mentre perseguiti la tua vittima.</li>.","name":"Scrigno dei gioielli","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"Una pagina lucida strappata dall\'annuario del \'65 del liceo Haddonfield, dedicata alla memoria di Judith Myers.<br><li><b>Aumenta moderatamente</b> il tasso di ottenimento del male quando perseguiti un sopravvissuto.</li>","name":"Memorial di J. Myers","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"Un nastro scozzese blu usato per raccogliere i capelli.<br><li><b>Aumenta considerevolmente</b> la durata di <b>Malvagità Innata III</b>.</li><li><b>Aumenta leggermente</b> il quantitativo di male richiesto per raggiungere <b>Malvagità Innata III</b> la prima volta.</li>","name":"Nastro per capelli","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"Uno specchietto portatile con base in perfette condizioni a eccezione del sottile strato di polvere e cipria che lo ricopre.<br><li><b>Malvagità Innata II rivela l\'aura dei sopravvissuti</b> quando li perseguiti a un raggio di <b>16 metri</b>.</li><li>Malvagità Innata non può superare il <b>LIVELLO II</b>.</li><li><b>Riduce leggermente</b> la velocità di movimento.</li><li>Per ciascun evento <b>Colpo</b>, conferisce il <b>100%</b> di Punti Sangue per l\'evento <b>Colpo</b> nella categoria <b>Brutalità</b> e il <b>150%</b> di Punti Sangue aggiuntivi nella categoria <b>Dissimulazione</b>.</li>","name":"Specchietto","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"Un pezzo di granito delle dimensioni di un pugno preso da una lapide rotta.<br><li>Sblocca l\'abilità di <b>uccidere i sopravvissuti sani o feriti</b> con <b>Malvagità Innata III</b>.</li><li><b>Disattiva</b> l\'abilità di perseguitare qualcuno con <b>Malvagità Innata III</b>.</li><li>L\'uccisione di un sopravvissuto <b>drena considerevolmente</b> il potere di Malvagità Innata.</li><li><b>Aumenta considerevolmente</b> il quantitativo di male richiesto per raggiungere <b>Malvagità Innata III</b> la prima volta.</li>","name":"Pezzo di lapide","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"Uno specchietto portatile con base, brutalmente graffiato con un oggetto metallico.<br><li><b>Malvagità Innata I rivela l\'aura dei sopravvissuti</b> quando li perseguiti a un raggio di <b>32 metri</b>.</li><li>Malvagità Innata non può superare il <b>LIVELLO I</b>.</li><li>Per ciascun evento <b>Colpo</b>, conferisce il <b>100%</b> di Punti Sangue per l\'evento <b>Colpo</b> nella categoria <b>Brutalità</b> e il <b>200%</b> di Punti Sangue aggiuntivi nella categoria <b>Dissimulazione</b>.</li>","name":"Specchio graffiato","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"Una ciocca di capelli biondi tagliati e raccolti con un elastico nero.<br><li><b>Aumenta straordinariamente</b> la durata di <b>Malvagità Innata III</b>.</li><li><b>Aumenta moderatamente</b> il quantitativo di male richiesto per raggiungere <b>Malvagità Innata III</b> la prima volta.</li>","name":"Ciocca di capelli","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"Un\'ampia e pesante lapide di granito rubata dal cimitero di Mt. Sinclair, appartenente a Judith Myers.<br><li>Sblocca l\'abilità di <b>uccidere i sopravvissuti sane o feriti</b> con <b>Malvagità Innata III</b>.</li><li><b>Disattiva</b> l\'abilità di perseguitare qualcuno con <b>Malvagità Innata III</b>.</li><li><b>Aumenta straordinariamente</b> il quantitativo di male richiesto per raggiungere <b>Malvagità Innata III</b> la prima volta.</li><li><b>Riduce moderatamente</b> la velocità di movimento.</li>","name":"Lapide di Judith","flavor":"\\"Qui giace la nostra amata figlia.\\"","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"Un ciuffo di capelli biondi strappato via con la forza dallo scalpo di qualcuno. Rilascia sentori di profumo floreale femminile.<br><li>Durata <b>illimitata</b> di <b>Malvagità Innata III</b>.</li><li><b>Aumenta straordinariamente</b> il quantitativo di male richiesto per raggiungere <b>Malvagità Innata III</b> la prima volta.</li>","name":"Ciuffo di capelli profumati","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"Un ornamento rigido da indossare intorno al collo realizzato con piante morte.<br><li><b>Riduce leggermente</b> il tempo di posa delle trappole Fantasma.</li>","name":"Collana di corda","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"Minuscoli frammenti di guscio d\'uovo dai riflessi di una pallida tonalità dorata.<br><li><b>Aumenta leggermente</b> la durata della trappola Fantasma innescata.</li>","name":"Guscio d\'uovo triturato","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"Un piccolo grumo di fango, annerito da resti di mosche. Usato per aumentare l\'energia.<br><li><b>Aumenta leggermente</b> la distanza dalla quale la Strega si può teletrasportare verso le sue trappole.</li>","name":"Fango con mosche morte","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"Acqua torbida contenuta in una bottiglia di vetro per pillole d\'altri tempi.<br><li><b>Aumenta leggermente</b> il raggio d\'azione effettivo della trappola Fantasma.</li>","name":"Acqua di palude","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"Una manciata di fiorellini a grappolo immacolati e coperti da un sottile manto grigiastro.<br><li>Rivela l\'aura dei sopravvissuti per <b>3 secondi</b>, quando innescano la trappola Fantasma.</li>","name":"Amenti di salice di micio","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"La metà di un guscio d\'uovo vuoto perfettamente rotondo.<br><li><b>Aumenta moderatamente</b> la durata della trappola Fantasma innescata.</li>","name":"Mezzo guscio d\'uovo","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"Una manciata di ali giallastre, secche e indurite. Si usano per aumentare l\'energia.<br><li><b>Aumenta moderatamente</b> la distanza dalla quale la Strega si può teletrasportare verso le sue trappole.</li>","name":"Ali di libellula","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"Un ornamento rigido da indossare intorno al collo realizzato con piante morte e decorato con corteccia di cipresso attaccata rozzamente e muschio di palude.<br><li><b>Riduce moderatamente</b> il tempo di posa delle trappole Fantasma.</li>","name":"Collana di cipresso","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"Acqua contaminata contenuta in una foglia di ninfea ripiegata su se stessa.<br><li><b>Aumenta moderatamente</b> il raggio d\'azione effettivo della trappola Fantasma.</li>","name":"Acqua insanguinata","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"Tre fragili ramoscelli di salice attaccati tra loro per realizzare una corona triangolare.<br><li>Rivela l\'aura del sopravvissuto per <b>5 secondi</b> quando innesca la trappola Fantasma.</li>","name":"Corona di salice","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"Un ornamento rigido da indossare intorno al collo realizzato con piante morte e decorato con foglie e petali di orchidea appassiti.<br><li><b>Riduce considerevolmente</b> il tempo di posa delle trappole Fantasma.</li>","name":"Collana di orchidee palustri","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"Una grande cicala di palude ricoperta da un sottile strato di cenere. Fragile. Si usa per aumentare l\'energia.<br><li><b>Aumenta considerevolmente</b> la distanza dalla quale la Strega si può teletrasportare verso le sue trappole.</li>","name":"Cicala essiccata","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"Un uovo di tartaruga di un colore arancione pallido, lesionato e svuotato del suo contenuto.<br><li><b>Aumenta considerevolmente</b> la durata della trappola Fantasma innescata.</li>","name":"Uovo di tartaruga lesionato","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"Una manciata di fango con profonde venature cremisi. Gli strati insanguinati potenziano il fango.<br><li><b>Aumenta considerevolmente</b> il raggio d\'azione effettivo delle trappole Fantasma.</li>","name":"Fango insanguinato","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"La mano mozzata del macellaio del villaggio dei cannibali. L\'essenza della vita che vi è imprigionata sblocca un potenziale straordinario nel potere della Strega.<br><li>I Fantasmi del Fango sono dotati di capacità d\'urto.</li><li>Annulla l\'abilità della Strega di teletrasportarsi verso le trappole.</li><li>Garantisce il <b>300%</b> di Punti Sangue da Dissimulazione.</li><li>Prevale su tutti gli altri accessori.</li>","name":"Mano sfregiata","flavor":"\\"...\\" -Il Macellaio","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"Catene un tempo usate per i prigionieri e le carcasse nel seminterrato del villaggio dei cannibali. L\'essenza della vita in esse intrappolata sblocca l\'enorme potenziale del potere della Strega.<br><li>Le trappole Fantasma calpestate non danno alcuna indicazione ai sopravvissuti riguardo all\'avvenuto innesco.</li><li>La trappola non genera un Fantasma della Strega.</li>","name":"Catene arrugginite","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"Il cuore di pietra del vecchio cannibale del villaggio. L\'essenza della vita che vi è imprigionata sblocca l\'enorme potenziale del potere della Strega.<br><li>Riduce la portata del battito cardiaco della Strega a <b>0</b> quando un sopravvissuto calpesta una trappola Fantasma.</li><li>Aumenta il raggio del battito cardiaco del Fantasma di Fango di <b>16 metri</b>.</li>","name":"Cuore della nonna","flavor":"\\"Portami un\'altra fetta della ragazza\\". - Nonna","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"L\'orecchio del ragazzo sordo del villaggio dei cannibali. Deformato a causa di ripetuti colpi alla testa. L\'essenza della vita che vi è imprigionata sblocca l\'enorme potenziale del potere della Strega.<br><li>I sopravvissuti che calpestano una trappola Fantasma restano assordati per <b>6 secondi</b>.</li>","name":"Orecchio sfigurato","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"Una scarpa da bambini, persa da tempo nelle acque della palude. L\'essenza della vita che vi è imprigionata sblocca l\'enorme potenziale del potere della Strega.<br><li>I sopravvissuti nel raggio della trappola Fantasma innescata subiscono l\'effetto di stato del <b><i>Rallentamento</i></b>.</li><li><b>Aumenta leggermente</b> la velocità di movimento della Strega.</li><li>Annulla l\'abilità della Strega di teletrasportarsi verso le trappole.</li>","name":"Scarpa fradicia","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"Un piccolo brandello di cotone strappato dal vestito indossato da Lisa Sherwood il giorno in cui scomparve. L\'essenza della vita che vi è imprigionata sblocca l\'enorme potenziale del potere della Strega.<br><li>La Strega si può teletrasportare verso qualunque trappola Fantasma presente nel livello.</li><li>Il teletrasporto verso una trappola Fantasma ha un tempo di ricarica di <b>15 secondi</b>.</li>","name":"Brandello di stoffa in buone condizioni","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"Un elettrodo antiquato che comunque conduce una corrente elettrica di bassa intensità.<br><li><b>Aumenta leggermente</b> il raggio della <b>Terapia d\'urto</b>.</li>","name":"Elettrodo antiquato","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"Un Cavallo degli scacchi bianco in legno d\'acero. Questo regalo da parte di un vecchio fa rivivere lontani ricordi al Dottore e lo pervade di una concentrazione tagliente.<br><li>Rivela l\'area d\'effetto del tuo <i>attacco speciale</i> della <b>Terapia d\'urto</b>.</li>","name":"Cavallo d\'acero","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"Una tecnica di elettroshock convenzionale, parte della routine quotidiana dei pazienti dell\'Istituto Commemorativo Léry. Può causare uno stato di confusione leggera nel paziente.<br><li><b>Riduce leggermente</b> il tempo di ricarica dell\'<b>Esplosione statica</b>.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitto <i>Ordine</i>:<li>possono apparire dei bancali spaccati da sostituire con <i>bancali illusori</i> che perdurano finché non gli si è vicino.</li><li>I <i>bancali illusori</i> si generano ogni <b>20 secondi</b> nel punto dove si trova il bancale spaccato.</li><li><b>Il Dottore</b> vede le aure dei <i>bancali illusori</i>.</li>","name":"\\"Ordine\\" -Lezione I","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"Una rischiosa tecnica di elettroshock che sfrutta una lunghezza d\'onda penetrante per attenuare diversi disturbi mentali. Se implementata usando la Scintilla di Carter, potrebbe causare uno stato d\'ansia moderato nel paziente.<br><li><b>Aumenta leggermente</b> il tuo raggio di terrore mentre <b>Esplosione statica</b> è pronta.</li><li><b>Riduce leggermente</b> il tuo raggio di terrore mentre <b>Esplosione statica</b> si ricarica.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitta la <i>Calma</i>:<li><b>Pazzia II</b>: fa udire ai sopravvissuti un <i>raggio di terrore illusorio</i> a <b>intermittenza</b>.</li><li><b>Pazzia III</b>: fa udire ai sopravvissuti un <i>raggio di terrore illusorio</i> <b>costante</b>.</li>","name":"\\"Calma\\" - Lezione I","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"Un\'audiocassetta del progetto Risveglio contenente per lo più rumore bianco. Apre la mente del Dottore a trattamenti alternativi.<br><br><li><i>L\'abilità speciale</i> di <b>Terapia d\'urto</b> cambia da un cono a un anello, comparendo <b>8 metri</b> davanti al <b>Dottore</b>, con un raggio esterno di <b>4,2 metri</b> e un raggio interno di <b>3 metri</b>.</li>","name":"Nastro rovinato","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"Un elettrodo standard tirato a lucido usato per le terapie di elettroshock.<br><li><b>Aumenta moderatamente</b> il raggio della <b>Terapia d\'urto</b>.</li>","name":"Elettrodo lucidato","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"Un\'audiocassetta del progetto Risveglio che contiene un\'intervista non editata con una vittima, da cui il Dottore trae ispirazione per creare nuove procedure alternative.<br><li>L\'<i>abilità speciale</i> <b>Terapia d\'urto</b> cambia da forma conica a raggio con <b>24 metri</b> di lunghezza e <b>2 metri</b> di larghezza.</li>","name":"Nastro dell\'intervista","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"Una tecnica di elettroshock sperimentale sviluppata all\'interno della Nebbia. Sfrutta una lunghezza d\'onda in grado di collegare la mente del Dottore a quella del paziente. Questa procedura scatena lievi casi di allucinazioni nei pazienti.<br><li>Rivela le aure dei sopravvissuti per <b>1 secondo</b> quando la loro <b>Pazzia</b> aumenta.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitto il <i>Contenimento</i>:</li><li><b>aumenta moderatamente</b> la durata delle <i>illusioni del Dottore</i>.</li><li><b>Il Dottore</b> vede le aure delle <i>illusioni del Dottore</i>.</li>","name":"\\"Contenimento\\" - Lezione II","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"Una tecnica di elettroshock ad alta intensità, parte della routine quotidiana dei pazienti dell\'Istituto Commemorativo Léry. Può causare uno stato di confusione moderato nel paziente.<br><li><b>Riduce moderatamente</b> il tempo di ricarica dell\'<b>Esplosione statica</b>.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitto <i>Ordine</i>:<li>possono apparire dei bancali spaccati da sostituire con <i>bancali illusori</i> che perdurano finché non gli si è vicino.</li><li>I <i>bancali illusori</i> si generano ogni <b>20 secondi</b> nel punto dove si trova il bancale spaccato.</li><li><b>Il Dottore</b> vede le aure dei <i>bancali illusori</i>.</li><span class=\\"FlavorText\\">\\"Effetti collaterali sporadici.\\" - Istituto Commemorativo Léry</span>","name":"\\"Ordine\\" - Lezione II","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"Una tecnica di elettroshock, parte del progetto Risveglio, usata come misura disciplinare, che sfrutta una dose fissa con un voltaggio elevato. Può indurre un moderato stato di paranoia nel paziente.<br><li><b>Riduce leggermente</b> il ritardo di sprigionamento della <b>Terapia d\'urto</b>.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitta la <i>Disciplina</i>:<li><b>Pazzia II</b>: durante un inseguimento, i sopravvissuti percepiscono un\'<i>illusione della macchia rossa</i> e del <i>raggio di terrore</i> come se <b>il Dottore</b> fosse proprio dietro di loro. L\'effetto persiste per <b>6 secondi</b> dopo il termine dell\'inseguimento.</li><li><b>Pazzia III</b>: <i>le illusioni della macchia rossa</i> e del <i>raggio di terrore</i> sono attive permanentemente.</li><li>Anche <b>il Dottore</b> vede la <i>macchia rossa illusoria</i>.</li><span class=\\"FlavorText\\">\\"Rieduchiamo i nostri pazienti con la massima cura.\\" - Istituto Commemorativo Léry</span>","name":"\\"Disciplina\\" - Lezione II","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"Una rischiosa tecnica di elettroshock che sfrutta una lunghezza d\'onda penetrante per attenuare diversi disturbi mentali. Se implementata usando la Scintilla di Carter, potrebbe causare uno stato d\'ansia moderato nel paziente.<br><li><b>Aumenta moderatamente</b> il tuo raggio di terrore mentre <b>Esplosione statica</b> è pronta.</li><li><b>Riduce moderatamente</b> il tuo raggio di terrore mentre <b>Esplosione statica</b> si ricarica.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitta la <i>Calma</i>:<li><b>Pazzia II</b>: fa udire ai sopravvissuti un <i>raggio di terrore illusorio</i> a <b>intermittenza</b>.</li><li><b>Pazzia III</b>: fa udire ai sopravvissuti un <i>raggio di terrore illusorio</i> <b>costante</b>.</li><span class=\\"FlavorText\\">\\"L\'elettroshock è una delle procedure mediche più sicure.\\" - Istituto Commemorativo Léry</span>","name":"\\"Calma\\" - Lezione II","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"Un elettrodo sperimentale che può sopportare scariche molto elevate per un lungo periodo di tempo.<br><li><b>Aumenta considerevolmente</b> il raggio della <b>Terapia d\'urto</b>.</li>","name":"Elettrodo resistente","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"Una tecnica di elettroshock sperimentale sviluppata all\'interno della Nebbia. Sfrutta una lunghezza d\'onda dall\'elevata intensità in grado di collegare la mente del Dottore a quella del paziente. Questa procedura scatena seri casi di allucinazioni nei pazienti.<br><li>Rivela le aure dei sopravvissuti per <b>2 secondi</b> quando la loro <b>Pazzia</b> aumenta.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitto il <i>Contenimento</i>:<li><b>aumenta moderatamente</b> la durata delle <i>illusioni del Dottore</i>.</li><li><b>Il Dottore</b> vede le aure delle <i>illusioni del Dottore</i>.</li>","name":"\\"Contenimento\\" - Lezione III","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"Una tecnica di elettroshock, parte del progetto Risveglio, usata come misura disciplinare, che sfrutta una dose fissa con un voltaggio estremamente elevato. Può indurre un serio stato di paranoia nel paziente.<br><li><b>Riduce moderatamente</b> il ritardo di sprigionamento della <b>Terapia d\'urto</b>.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitta la <i>Disciplina</i>:<li><b>Pazzia II</b>: durante un inseguimento, i sopravvissuti percepiscono un\'<i>illusione della macchia rossa</i> e del <i>raggio di terrore</i> come se <b>il Dottore</b> fosse proprio dietro di loro. L\'effetto persiste per <b>6 secondi</b> dopo il termine dell\'inseguimento.</li><li><b>Pazzia III</b>: <i>le illusioni della macchia rossa</i> e del <i>raggio di terrore</i> sono attive permanentemente.</li><li>Anche <b>il Dottore</b> vede la <i>macchia rossa illusoria</i>.</li><span class=\\"FlavorText\\">\\"La nostra etica ruota attorno al rispetto dei pazienti.\\" - Istituto Commemorativo Léry</span>","name":"\\"Disciplina\\" - Lezione III","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"Una tecnica di elettroshock sperimentale sviluppata all\'interno della Nebbia, descritta in maniera grossolana. Sfrutta una lunghezza d\'onda di insopportabile intensità in grado di collegare la mente del Dottore a quella del paziente. Questa procedura scatena gravi casi di allucinazioni nei pazienti.<br><li>Rivela le aure dei sopravvissuti per <b>3 secondi</b> quando la loro <b>Pazzia</b> aumenta.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitto il <i>Contenimento</i>:<br><li><b>Aumenta moderatamente</b> la durata delle <i>illusioni del Dottore</i>.</li><li><b>Il Dottore</b> vede le aure delle <i>illusioni del Dottore</i>.</li><span class=\\"FlavorText\\">POSSO VEDERE I LORO <u>RIVOLTANTI</u> DISTURBI.\\" - Appunti non firmati</span>","name":"\\"Contenimento\\" - Appunti di Carter","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"Una versione sperimentale della tecnica di elettroshock descritta dal dott. Herman Carter in persona. Il lungo e costante stimolo lascia il paziente in un grave stato di confusione.<br><li><b>Riduce considerevolmente</b> il tempo di ricarica dell\'<b>Esplosione statica</b>.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitto <i>Ordine</i>:<li>possono apparire dei bancali spaccati da sostituire con <i>bancali illusori</i> che perdurano finché non gli si è vicino.</li><li>I <i>bancali illusori</i> si generano ogni <b>20 secondi</b> nel punto dove si trova il bancale spaccato.</li><li><b>Il Dottore</b> vede le aure dei <i>bancali illusori</i>.</li><span class=\\"FlavorText\\">\\"Lo stimolo dev\'essere costante e mantenuto a un livello <u>convulsivo</u>.\\" -H. Carter</span>","name":"\\"Ordine\\" - Appunti di Carter","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"Una tecnica di elettroshock, parte del progetto Risveglio, usata come misura disciplinare e descritta dal dott. Carter in persona. L\'intensità intollerabile del voltaggio lascia il paziente in un grave stato di paranoia.<br><li><b>Riduce considerevolmente</b> il ritardo di sprigionamento della <b>Terapia d\'urto</b>.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitta la <i>Disciplina</i>:<li><b>Pazzia II</b>: durante un inseguimento, i sopravvissuti percepiscono un\'<i>illusione della macchia rossa</i> e del <i>raggio di terrore</i> come se <b>il Dottore</b> fosse proprio dietro di loro. L\'effetto persiste per <b>6 secondi</b> dopo il termine dell\'inseguimento.</li><li><b>Pazzia III</b>: <i>le illusioni della macchia rossa</i> e del <i>raggio di terrore</i> sono attive permanentemente.</li><li>Anche <b>il Dottore</b> vede la <i>macchia rossa illusoria</i>.</li><span class=\\"FlavorText\\">\\"Per evitare episodi di ricaduta nei soggetti più tenaci, vanno adottate misure disciplinari estreme.\\" -H. Carter</span>","name":"\\"Disciplina\\" - Appunti di Carter","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"Una versione sperimentale della tecnica di elettroshock descritta dal dott. Herman Carter in persona. Sfrutta una lunghezza d\'onda penetrante per attenuare diversi disturbi mentali. Se implementata usando la Scintilla di Carter, potrebbe causare uno stato di ansia e paura incontrollabile nel paziente.<br><li><b>Aumenta considerevolmente</b> il tuo raggio di terrore mentre <b>Esplosione statica</b> è pronta.</li><li><b>Riduce considerevolmente</b> il tuo raggio di terrore mentre <b>Esplosione statica</b> si ricarica.</li><br>Ai sopravvissuti con <b>Pazzia</b> viene inflitta la <i>Calma</i>:<li><b>Pazzia II</b>: fa udire ai sopravvissuti un <i>raggio di terrore illusorio</i> a <b>intermittenza</b>.</li><li><b>Pazzia III</b>: fa udire ai sopravvissuti un <i>raggio di terrore illusorio</i> <b>costante</b>.</li><span class=\\"FlavorText\\">\\"Crisi intense inducono uno stato catatonico. Finché dura, riesco a trovare un po\' di <u>pace</u>.\\" - H. Carter</span>","name":"\\"Calma\\" - Appunti di Carter","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"Un Re degli scacchi in vetro plasmato dalla Nebbia. La traccia dell\'Entità che lo pervade può spezzare le menti più forti.<br><br>Ai sopravvissuti con <b>Pazzia</b> vengono inflitte queste sofferenze: <i>Calma, Disciplina, Ordine</i> e <i>Contenimento</i>.<li>Fa udire ai sopravvissuti un <i>raggio di terrore illusorio</i> a <b>intermittenza</b>.</li><li>Durante un inseguimento, i sopravvissuti percepiscono un\'<i>illusione della macchia rossa</i> e del <i>raggio di terrore</i> come se <b>il Dottore</b> fosse proprio dietro di loro. Questo effetto persiste per <b>6 secondi</b> dopo il termine dell\'inseguimento in <b>Pazzia II</b> ed è costantemente attivo in <b>Pazzia III</b>.</li><li>Possono apparire dei bancali spaccati da sostituire con <i>bancali illusori</i> che perdurano finché non gli si è vicino. I <i>bancali illusori</i> si generano ogni <b>20 secondi</b> nel punto dove si trova il bancale spaccato.</li><li><b>Aumenta moderatamente</b> la durata delle <i>illusioni del Dottore</i>.</li><li><b>Il Dottore</b> vede le <i>illusioni delle macchie rosse</i> e le aure delle <i>illusioni del Dottore e dei bancali illusori</i>.</li>","name":"Re iridescente","flavor":"\\"Uno sguardo a questo pezzo di vetro iridescente e si sprofonda nella pazzia.\\"","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"Una Regina degli scacchi in vetro plasmata dalla Nebbia. Al minimo contatto si è pervasi da una notevole scossa elettrica.<br><li>Tutti i sopravvissuti colpiti dalle <i>abilità speciali</i> di <b>Terapia d\'urto</b> o <b>Esplosione statica</b> acquisiscono una <b>Carica statica</b> persistente. La <b>Carica statica</b> persiste fino alla <i>scarica</i>.</li><li>I sopravvissuti colpiti dalla stessa <i>abilità speciale</i> di <b>Terapia d\'urto</b> o <b>Esplosione statica</b> entro <b>4 metri</b> di distanza l\'uno dall\'altro non acquisiscono alcuna <b>Carica statica</b>.</li><li>Ogni volta che un sopravvissuto si trova entro <b>4 metri</b> da un altro sopravvissuto pervaso dalla <b>Carica statica</b>, riceve una scossa con gli stessi identici effetti dell\'<i>abilità speciale</i> <b>Terapia d\'urto</b>, e la <b>Carica statica</b> si <i>scarica</i> all\'istante.</li>","name":"Regina iridescente","flavor":"\\"Una volta stabilito un metodo di cura valido, ci concentreremo sulla somministrazione più efficace.\\" - H. Carter","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"Questa pietra è troppo grezza, non promette niente di buono. La lama modificata da questa pietra infligge terribili ferite aperte.<br><li>I lamenti di dolore dei bersagli colpiti aumentano del <b>50%</b> finché non guariscono del tutto.</li>","name":"Pietra grezza","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"Un panno con cui medicare le vesciche e ripulirle dal pus.<br><li><b>+10%</b> alla velocità di volo dell\'accetta.</li>","name":"Panno ingiallito","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"L\'impugnatura dell\'accetta è fasciata con delle bende.<br><li><b>Riduce leggermente</b> il tempo di ricarica tra i lanci dell\'accetta.</li>","name":"Impugnatura fasciata","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"Applica una tossina alla lama dell\'accetta. La tossina dell\'ovolo malefico intorpidisce la mente.<br><li>Il bersaglio subisce l\'effetto <b><i>Accecamento</i></b> per <b>60 secondi</b>.</li><li>Non cumulabile.</li>","name":"Tossina di ovolo malefico","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"Una testa d\'ascia particolarmente pesante per trafiggere il bersaglio con potenza strabiliante. Chi la impugna deve avere un bicipite da spavento.<br><li>Il bersaglio colpito subisce l\'effetto <b>Immobilizzato</b> per <b>10 secondi</b>.</li>","name":"Testa pesante","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"Una spilla di rame estremamente deformata ma tirata a lucido. Rubata a una preda molto difficile.<br><li><b>Aumenta leggermente</b> la tua velocità di movimento mentre carichi il lancio.</li><li>Non cumulabile.</li>","name":"Spilla luccicante","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"Un\'impugnatura levigata che consente un uso veloce di questo attrezzo letale.<br><li><b>Riduce moderatamente</b> il tempo di ricarica tra i lanci dell\'accetta.</li>","name":"Impugnatura in legno di quercia","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"Una treccia decorativa fatta di lunghi fili d\'erba. Questo ricordo dei tempi andati aumenta la rabbia e l\'attenzione della Cacciatrice.<br><li><b>Riduce moderatamente</b> il tempo di lancio dell\'accetta.</li>","name":"Treccia di fili d\'erba","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"La cinghia di cuoio può essere attaccata a un passante della cintura per portare gli attrezzi più facilmente.<br><li>Inizia con <b>1 </b>accetta extra.</li><li>Aumenta il numero massimo di accette trasportabili di <b>1</b>.</li>","name":"Passante in pelle","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"Petali essiccati che, se infusi in un tè, alleviano i sintomi della fatica e dello spossamento.<br><li><b>+20%</b> alla velocità di volo dell\'accetta.</li>","name":"Radice di rosa","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"I guanti di pelle indurita proteggono le mani e assicurano una presa ferma.<br><li><b>Riducono moderatamente</b> il tempo di ricarica delle accette in un armadietto.</li>","name":"Guanti di pelle di daino","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"Un intruglio tossico per la lama dell\'accetta. L\'intruglio torbido è composto perlopiù dal veleno del marasso che ha un effetto indebolente.<br><li>Il bersaglio subisce l\'effetto <b>Sfinimento</b> per <b>5 secondi</b>.</li>","name":"Intruglio velenoso","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"Le teste di queste accette sono ricoperte di ruggine incrostata e volatile che rende le ferite inflitte particolarmente difficili da guarire.<br><li>I bersagli colpiti subiscono l\'effetto <b><i>Lacerazione</i></b>.</li>","name":"Testa arrugginita","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"Un foulard a fiori pulito e colorato. Questo ricordo dei tempi andati aumenta la rabbia e la concentrazione della Cacciatrice.<br><li><b>Riduce considerevolmente </b> il tempo di lancio dell\'accetta.</li>","name":"Foulard della nonna","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"Un robusto cinturone rubato a un soldato. I passanti e le fondine sono utili per portare gli attrezzi.<br><li>Inizia con <b>2 </b>accette extra.</li><li>Aumenta il numero massimo di accette trasportabili di <b>2</b>.</li>","name":"Cintura della fanteria","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"Un intruglio spettrale che emana una luce inquietante.<br><li>L\'aura delle vittime colpite ti viene mostrata per <b>5 secondi</b>.</li>","name":"Intruglio luccicante","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"La testa delle accette è macchiata da una sostanza ripugnante che indebolisce chiunque ne venga a contatto.<br><li>I bersagli colpiti subiscono gli effetti <b><i>Lacerazione</i></b> ed <b><i>Emorragia</i></b> fino alla completa guarigione.</li><li>Non cumulabile.</li>","name":"Testa sporca","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"La statuina di una volpe dalle incisioni grossolane, grande solo pochi centimetri. Ci ricorda che astuzia e scaltrezza non temono la forza bruta.<br><li>Conferisce l\'effetto <i><b>Impercettibile</b></i> per <b>15 secondi</b> dopo aver ricaricato.</li>","name":"Volpe di legno","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"Una testa dell\'accetta in vetro plasmata dalla Nebbia. La lama è calda ed è pervasa dal potere dell\'Entità.<br><li>I colpi con l\'accetta riducono subito i sopravvissuti in fin di vita.</li><li>Imposta il numero massimo di accette trasportate a <b>1</b>.</li>","name":"Testa iridescente","flavor":"\\"Il vetro iridescente taglia sia la carne che l\'anima.\\"","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"Una fasciatura prelevata dal cadavere di un soldato. Sorregge e protegge tibia e caviglia.<br><li>La Cacciatrice si muove a <b>4,6 m/s</b> quando non ha accette.</li>","name":"Fascia mollettiera","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"Un olio rancido usato per una lubrificazione mediocre.<br><br><li><b>Riduce leggermente</b> il tempo di ricarica della motosega dopo aver colpito un sopravvissuto.</li>","name":"Olio Vegetale","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"Una candela pulita adatta a una motosega.<br><br><li><b>Aumenta leggermente</b> la velocità di ripristino delle cariche.</li>","name":"Candela","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"Una lima il cui scopo è quello di affilare le catene della motosega.<br><li><b>Riduce leggermente</b> la durata delle convulsioni.</li>","name":"Lima per Motosega","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"Un dispositivo meccanico che limita la quantità di carburante che piccoli motori possono assumere in una sola volta, forzando una velocità sicura e costante.<br><br><li>La motosega non induce automaticamente lo stato di fin di vita.</li><li>Ottieni il <b>100%</b> di Punti Sangue in più per gli eventi motosega.</li>","name":"Limitatore di velocità","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Pompa più gas nel sistema di iniezione per assicurare un avvio più veloce ed efficace.<br><br><li><b>Aumenta moderatamente</b> la velocità di ripristino delle cariche.</li>","name":"Pompa di aspirazione","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"Una robusta barra di sostituzione in ferro per lunghe catene.<br><br><li><b>Aumenta leggermente</b> la quantità di giri disponibili per la motosega prima di attivare le convulsioni.</li>","name":"Spranga Lunga","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"Graffi causati da una lama incandescente coprono la motosega. Memorie di rimproveri trasmettono una gran paura di fallire a chi la usa.<br><br><li><b>Aumenta leggermente</b> la velocità di movimento della motosega.</li><li><b>Aumenta leggermente</b> il tempo di carica.</li>","name":"Graffi da coltello","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"Un sistema di scarico di fortuna realizzato con tubi del gas neri.<br><br><li><b>Riduce moderatamente</b> la durata delle convulsioni.</li>","name":"Marmitta artigianale","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"Una grande ciotola di chili fumante per mantenerti in forze.<br><br><li><b>Aumenta leggermente</b> la durata degli scatti quando viene consumato un token.</li><li><b>Aumenta leggermente</b> il raggio dell\'attacco travolgente con la motosega.</li><br>","name":"Chili","flavor":"\\"Un barbecue da leccarsi i baffi!\\" - Drayton Sawyer","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"Una densa sostanza giallastra, utilizzata per lubrificare gli oggetti di casa dei Sawyer.<br><br><li><b>Aumenta moderatamente</b> la quantità di giri disponibili per la motosega prima di attivare le convulsioni.</li>","name":"Il grasso","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"Incisioni raffiguranti le bestie oscure che vivono nella Nebbia coprono la motosega. Memorie di violenti rimproveri trasmettono una gran paura di fallire a chi la usa.<br><br><li><b>Aumentano moderatamente</b> la velocità di movimento della motosega.</li><li><b>Aumentano leggermente</b> il tempo di carica.</li>","name":"I segni della Bestia","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"Una catena con denti fresa insolitamente grandi che lascia le vittime paralizzate anche dopo essere state curate.<br><li>I sopravvissuti colpiti dalla motosega subiscono l\'effetto di <b>Lacerazione</b>.","name":"Catena efferata","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"Un olio specifico per motoseghe. Un additivo speciale impedisce all\'olio di colare fuori.<br><br><li>Mentre non ci sono altri sopravvissuti nel tuo raggio di terrore, abbatterne uno con la motosega nasconderà la sua aura per <b>20 secondi.</b></li>","name":"Lubrificante da Officina","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"Questa catena è macchiata di una sostanza ripugnante, che indebolisce chiunque ne venga a contatto.<br><br><li>I sopravvissuti colpiti dalla motosega fanno cadere gli oggetti che trasportano.</li>","name":"Catene sporche","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"Strumento che aumenta l\'angolo del calibro di profondità, facendo in modo che la sega \\"mangi\\" più \\"legno\\".<br><li><b>Aumenta</b> il numero di cariche.</li><li><b>Aumenta leggermente</b> il tempo di carica.</li><li><b>Riduce leggermente</b> la velocità massima dell\'attacco travolgente con la motosega.</li>","name":"Inclinatore calibro di profondità","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"Un telaio da motosega leggero e durevole con una spranga più corta. Rende la motosega più facile da maneggiare.<br><br><li>Mentre mandi su di giri la motosega, vedi le aure dei sopravvissuti entro <b>8 metri.</b></li>","name":"Telaio leggero","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"Questa catena è ricoperta di ruggine incrostata e volatile che rende le ferite inflitte particolarmente difficili da guarire.<br><br><li>I sopravvissuti feriti dalla motosega subiscono l\'effetto di <b><i>Sconforto</i></b> per <b>90 secondi</b>.</li><li>Non cumulabile.</li>","name":"Catena arrugginita","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"Una grande scodella di chili piccante, famosa per la carne di qualità superiore.<br><br><li><b>Aumenta moderatamente</b> la durata degli scatti quando viene consumato un token.</li><li><b>Aumenta moderatamente</b> la finestra aggiuntiva della motosega.</li><br>","name":"Chili pluripremiato","flavor":"\\"Il segreto è nella carne\\" - Drayton Sawyer","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"Un fettina di carne umana ancora giovane e liscia. Le vene emanano un bagliore luminescente, a testimonianza della vita che ancora scorre al loro interno.<br><br><li>Colpire un sopravvissuto con la motosega ne ripristina tutte le cariche.</li><li>Limita la durata massima delle convulsioni a 8 secondi.</li><br>","name":"Carne iridescente","flavor":"\\"A volte si fa fatica a credere a quello che viviamo. Datti un pizzicotto e vedrai che è tutto vero.\\" - Pam Jones","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"Una guida disegnata in modo approssimativo per regolare correttamente e mettere a punto il carburatore di una motosega.<br><li>Consuma automaticamente tutte le cariche quando ti lanci in un attacco travolgente con la motosega.</li><li><b>Aumenta leggermente</b> la durata dell\'attacco travolgente con la motosega.</li><li><b>Riduce leggermente</b> la velocità massima dell\'attacco travolgente con la motosega.</li>","name":"Guida per la messa a punto del carburatore","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"La maglietta a strisce gialle e arancioni di un bimbo. C\'è un nome cucito sopra: \\"Jesse\\".<br>Mentre i sopravvissuti si trovano nel <b>Mondo dei sogni</b>:<li><b>Aumenta leggermente</b> le penalità di regresso di <i>Guarigione</i> e <i>Riparazione</i>.</li>","name":"Maglietta di lana","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"Un blocco di legno bianco e blu con due agnellini al pascolo e la lettera S.<li>Dopo aver interagito con una <b>Trappola onirica</b> o un <b>Bancale onirico</b>, il sopravvissuto riceve lo stato di <b>Accecamento</b> per 30 secondi.</li>","name":"Blocco con pecore","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"Un disegno senza firma, fatto sicuramente da un bambino molto piccolo.<li>Quando un sopravvissuto innesca un <b>Tranello onirico</b>, ottieni un bonus di <b>200 Punti Sangue</b> per <b>Dissimulazione</b>.</li><li><b>Riduce considerevolmente</b> il rallentamento del <b>Tranello onirico</b>.</li>","name":"Disegno di un bimbo","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"Un piccolo rastrello, un attrezzo fondamentale per un bravo giardiniere.<br>Sostituisce i <b>Tranelli onirici</b> con i <b>Bancali onirici</b>.<li>7 <b>token onirici</b>.</li>","name":"Rastrello da giardino","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"Un paio di cesoie artigianali, usate per sfoltire i cespugli.<li>Sostituisce i <b>Tranelli onirici</b> con i <b>Bancali onirici</b>.</li><li>7 <b>token onirici</b>.</li><li>Le aure dei sopravvissuti vengono mostrate all\'<i>Incubo</i> per <b>4 secondi</b> quando questi interagiscono con i <b>Bancali onirici</b>.</li>","name":"Prototipo di tenaglie","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"Una robusta corda da esterni, perfetta per legare qualsiasi cosa.<br>Mentre i sopravvissuti si trovano nel <b>Mondo dei sogni</b>:<li>i generatori che vengono riparati emettono suoni udibili da una distanza incrementata di <b>8 metri</b>.</li>","name":"Corda da esterni","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"Uno schizzo a carboncino, rozzo e audace, firmato Nancy H.<li><b>Riduce leggermente</b> il tempo di ricarica della <b>Proiezione onirica</b> per ogni sopravvissuto nel <b>Mondo dei sogni</b>.</li>","name":"Schizzo di Nancy","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"Un vestito azzurro da bimba, con un nastro bianco.<br>Mentre i sopravvissuti si trovano nel <b>Mondo dei sogni</b>:<li><b>Aumenta leggermente</b> le penalità di regresso di <i>Guarigione</i> e <i>Riparazione</i>.</li><li>Le aure dei sopravvissuti vengono mostrate all\'<i>Incubo</i> per <b>3 secondi</b> dopo un Test Abilità di <i>Guarigione</i> o <i>Riparazione</i> fallito.</li>","name":"Vestito verde","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"Un blocco di legno bianco e viola con sopra un gatto che dorme e la lettera C.<li>Dopo aver interagito con un <b>Tranello onirico</b> o un <b>Bancale onirico</b>, il sopravvissuto riceve lo stato di <b>Emorragia</b> per 60 secondi.</li>","name":"Blocco con gatto","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"Un blocco di legno bianco e rosso con un unicorno impennato e la lettera U.<li>Dopo aver interagito con una <b>Trappola onirica</b> o un <b>Bancale onirico</b>, il sopravvissuto riceve lo stato di <b>Accecamento</b> per 60 secondi.</li>","name":"Blocco con unicorno","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"Catene usate per un\'altalena, arrugginite ma resistenti.<br>Mentre i sopravvissuti si trovano nel <b>Mondo dei sogni</b>:<li>i loro passi sono il <b>50% più rumorosi</b>.</li>","name":"Catene dell\'altalena","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"Un ritratto dipinto da Nancy Holbrook alla Badham, conservato come ricordo prezioso.<li><b>Riduce moderatamente</b> il tempo di ricarica della <b>Proiezione onirica</b> per ogni sopravvissuto nel <b>Mondo dei sogni</b>.</li>","name":"Capolavoro di Nancy","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"Una lunga corda da salto, consunta da molti anni di uso.<br>Mentre i sopravvissuti si trovano nel <b>Mondo dei sogni</b>:<li>i loro lamenti di dolore sono il <b>50% più rumorosi</b>.</li>","name":"Corda per saltare","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"Un vestito azzurro da bimba, con un nastro bianco. La parte davanti è rovinata da larghi tagli.<br>Mentre i sopravvissuti si trovano nel <b>Mondo dei sogni</b>:<li><b>Aumenta leggermente</b> le penalità di regresso di <i>Guarigione</i> e <i>Riparazione</i>.</li><li>Le aure dei sopravvissuti vengono mostrate all\'<i>Incubo</i> per <b>4 secondi</b> dopo un Test Abilità di <i>Guarigione</i> o <i>Riparazione</i> fallito.</li>","name":"Vestito azzurro","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"Un flacone di pillole che conteneva un medicinale chiamato Zoneral.<li>I sopravvissuti vedranno l\'<i>Incubo</i> a intermittenza a una distanza compresa tra <b>12 metri</b> e <b>24 metri</b>.</li><li>L\'<i>Incubo</i> è invisibile ai sopravvissuti oltre i <b>24 metri</b>.</li><li>L\'<i>Incubo</i> è invisibile ai sopravvissuti svegli mentre trasporta un sopravvissuto.</li>","name":"Flacone di pillole","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"Un barattolo di un materiale altamente volatile e infiammabile.<li>Sostituisce i <b>Tranelli onirici</b> con i <b>Bancali onirici</b>.</li><li>7 <b>token onirici</b>.</li><li>Le aure dei sopravvissuti vengono mostrate all\'<i>Incubo</i> per <b>6 secondi</b> quando questi interagiscono con i <b>Bancali onirici</b>.</li>","name":"Acquaragia","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"Una grande foto scattata alla scuola materna di Badham, che mostra l\'allegra classe del 1994-95.<li>Non può più annullare l\'azione di <b>Proiezione onirica</b>.</li><li>Mentre l\'<b>Incubo</b> incanala l\'abilità <b>Proiezione onirica</b>, tutti i generatori erutteranno sangue.</li><li>L\'Ombra dell\'<i>Incubo</i> non apparirà mentre viene usata la <b>Proiezione onirica</b>.</li>","name":"Foto di classe","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"Un blocco di legno graffiato e bruciacchiato, su cui si può riconoscere solo la lettera Z.<li>Dopo aver interagito con una <b>Trappola onirica</b> o un <b>Bancale onirico</b>, il sopravvissuto subisce l\'effetto di <b>Emorragia</b> per <b>60 secondi</b>.</li><li>Se il sopravvissuto è sano, sanguinerà per tutta la durata dell\'<b>Emorragia</b>.</li>","name":"Blocco con Z","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"Un grosso pennello macchiato di vernice rossa.<li>Tutti i sopravvissuti iniziano la prova nel <b>Mondo dei sogni</b>.</li><li>I Test Abilità falliti non svegliano i sopravvissuti nel <b>Mondo dei sogni</b>.</li>","name":"Pennello macchiato di rosso","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"Uno scatolone nero di cartone pieno zeppo di fotografie.<br>Mentre i sopravvissuti si trovano nel <b>Mondo dei sogni</b>:<li>i cancelli d\'uscita appena aperti vengono bloccati per <b>15 secondi</b>.</li>","name":"Scatola nera","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"Una modifica alla Scatola dell\'Enigmista: le parti lubrificate rendono la ricerca un esercizio più delicato.<br><li><b>Aumenta leggermente</b> le probabilità di attivare il Test Abilità quando si interagisce con una Scatola dell\'Enigmista.</li>","name":"Grasso da officina","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"Simbolo di uno stile di vita infranto. Il ricordo del doloroso passato rafforza la sua determinazione.<br><li><b>Riduce leggermente</b> il tempo di ricarica delle imboscate mancate.</li>","name":"Siringa incrinata","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"La cartella clinica di un uomo malato di cancro. Incute terrore e avventatezza nel lettore.<br><li><b>Riduce leggermente</b> il tempo di carica delle imboscate.</li>","name":"Cartella clinica di John","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"Cinghie di cuoio che tengono insieme il tessuto per velocizzare il movimento.<br><li><b>Riducono leggermente</b> il tempo richiesto per abbassarsi.</li>","name":"Cinghie militari","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"Un messaggio videoregistrato dell\'Enigmista, che spiega ad Amanda le regole del gioco. Il ricordo del doloroso passato rafforza la sua determinazione.<br><li><b>Riduce leggermente</b> il tempo di carica delle imboscate.</li><li><b>Riduce leggermente</b> il tempo di ricarica delle imboscate mancate.</li>","name":"Videocassetta","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"Una modifica alla Trappola per Orsi invertita: lame affilate collegate all\'interno della trappola lacerano la vittima a ogni suo movimento.<br><li>I sopravvissuti finiti in una Trappola per Orsi invertita subiscono l\'effetto di stato dell\'<b><i>Emorragia</b></i>.</li>","name":"Lame utilitarie","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"Una modifica alla Scatola dell\'Enigmista: l\'aggiunta di lame di rasoio interconnesse rende impossibile e potenzialmente doloroso frugare al suo interno.<br><li><b>Aumenta moderatamente</b> le probabilità di attivazione dei Test Abilità quando si interagisce con una Scatola dell\'Enigmista.</li>","name":"Cavi di rasoi","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"Un cofanetto di legno rivestito di raso con chiavistello, parte del lascito di un testamento.<br><li><b>Aumenta</b> le tagliole invertite disponibili di <b>1</b>.<br>","name":"Testamento","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"Una modifica alla Trappola per Orsi invertita: la maschera facciale, in tessuto pesante intriso di un sedativo, soffoca parzialmente il bersaglio rendendogli difficile concentrarsi.<br><li>I sopravvissuti che finiscono in una Trappola per Orsi invertita sono soggetti all\'effetto di stato dell\'<b><i>Accecamento</b></i>.</li><li>Non influenza la visibilità della Scatola dell\'Enigmista.</li>","name":"Maschera facciale","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"Una modifica alla Trappola per Orsi invertita: un veleno che non risulta letale, ma che indebolisce il corpo e rende quasi impossibile recuperare completamente da qualsiasi sforzo.<br><li>I sopravvissuti finiti in una Trappola per Orsi invertita subiscono l\'effetto di stato dello <b><i>Sfinimento</b></i>.</li>","name":"Tossina a rilascio lento","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"Una modifica alla tagliola invertita: i chiodi nella morsa, ricoperti di ruggine incrostata e volatile, rendono le ferite particolarmente difficili da curare.<br><li>I sopravvissuti feriti finiti in una tagliola invertita subiscono l\'effetto di stato <i><b>Lacerazione</b></i>.</li>","name":"Accessori rugginosi","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"Un progetto per una trappola inquietante seppur brillante, descritto nei dettagli su un foglio di carta.<br><li><b>Aumenta</b> le Scatole dell\'Enigmista disponibili di <b>1</b>.</li>","name":"Schizzo dell\'Enigmista","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"Una modifica alla Scatola dell\'Enigmista: l\'aggiunta di lame di rasoio interconnesse rende impossibile i movimenti improvvisi nella Scatola dell\'Enigmista senza doversi recidere i polsi.<br><li><b>Aumenta straordinariamente</b> la penalità dei Test Abilità non riusciti sulle Scatole dell\'Enigmista.</li>","name":"Rasoio interconnesso","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"Parti meccaniche che consentono la creazione di Scatole dell\'Enigmista impegnative e semplificano il piazzamento di tagliole invertite.<br><li><b>Aumenta leggermente</b> il tempo necessario a un sopravvissuto per cercare una Scatola dell\'Enigmista.</li><li><b>Riduce leggermente</b> il tempo richiesto per piazzare la tagliola invertita.</li>","name":"Borsa di ingranaggi","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"Un timer su cui qualcuno ha messo le mani. Una molla nel meccanismo forza gli ingranaggi a ruotare più rapidamente.<br><li><b>Riduce moderatamente</b> il tempo di morte della tagliola invertita.</li>","name":"Timer manomesso","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"Un progetto per una trappola inquietante seppur brillante, annotato su carta dall\'Enigmista.<br><li><b>Aumenta</b> le Scatole dell\'Enigmista disponibili di <b>1</b>.</li><li><b>Aumenta moderatamente</b> il tempo di morte della tagliola invertita.</li>","name":"Piano annotato dall\'Enigmista","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"Questo insieme di parti meccaniche consente la creazione di Scatole dell\'Enigmista super impegnative e semplifica il piazzamento di tagliole invertite.<br><li><b>Aumenta considerevolmente</b> il tempo necessario a un sopravvissuto per cercare una Scatola dell\'Enigmista.</li><li><b>Riduce moderatamente</b> il tempo richiesto per piazzare la tagliola invertita su un sopravvissuto.</li>","name":"Cassa di ingranaggi","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"Una scatola nera di metallo contenente un coltello e varie forniture mediche, come fasciature e compresse. I tagli profondi riducono lo stress e risvegliano i sensi.<br><li><b>Disattiva</b> l\'abilità del Maiale di vedere le aure delle Scatole dell\'Enigmista.</li><li><b>Ricevi una notifica</b> quando un sopravvissuto rimuove una Trappola per Orsi invertita.</li><li>Le aure dei sopravvissuti che rimuovono una Trappola per Orsi invertita ti vengono rivelate per <b>6 secondi</b>.</li>","name":"Segreto di Amanda","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"Non tutti i giochi devono avere le stesse regole.<br><li><b>Disattiva</b> l\'abilità dei sopravvissuti di vedere le Scatole dell\'Enigmista evidenziate finché la loro trappola non è attivata.</li>","name":"Set di regole n. 2","flavor":"\\"Ecco, queste sono le regole.\\" - L\'Enigmista","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"Una lettera minatoria all\'attenzione di Amanda. Induce rabbia e concentrazione nel lettore.<br><li>Mentre sei abbassato, puoi vedere i profili dei sopravvissuti entro 12 metri.</li><li><b>Riduce</b> le tagliole invertite disponibili di <b>3</b>.</li><li><b>Riduce</b> le Scatole dell\'Enigmista disponibili di <b>2</b>.</li>","name":"Lettera per Amanda","flavor":"\\"Amanda, eri con Cecil la notte in cui Jill ha perso Gideon. Hai ucciso il loro bambino. Tu lo sai e anche io lo so.\\" - Lettera per Amanda","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"Una suola interna ammuffita, un vero sollievo per i piedi affaticati.<br><li>Aumenta <b>moderatamente</b> la velocità di movimento durante la ricarica delle bottiglie.</li>","name":"Suole maleodoranti","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"Una piuma color arancione intenso, soffice al tatto.<br><li>Riduce <b>leggermente</b> il tempo di ricarica tra i lanci di bottiglie.</li>","name":"Piuma di pettirosso","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"Parte dell\'abbigliamento standard del Clown, questi guanti senza dita consentono abili manipolazioni.\\n<li>Modifica la parabola disegnata dal lancio della bottiglia.</li>\\n","name":"Guanti eleganti senza dita","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"Sii l\'anima della festa!<br><br><li>Rompendo le <b>bottiglie da party</b> usciranno dei coriandoli, oltre all\'effetto del gas.</li><li>Colpire un sopravvissuto direttamente con una <b>bottiglia da party</b> interrompe le azioni come al solito, ma conferisce anche <b>100 Punti Sangue</b>.</li>","name":"Bottiglia da party","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"Un tappo resistente, perfetto per le bottiglie di tonico nutraceutico.<br><li>Riduce <b>moderatamente</b> il tempo di ricarica.</li>","name":"Tappo spesso di sughero","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"Una bottiglia vuota, con dello zucchero e del sangue secchi.<br><li>Inizia con <b>1</b> bottiglia extra. </li><li>Aumenta il numero massimo di bottiglie trasportabili di <b>1</b>.</li>","name":"Bottiglia di soda appiccicosa","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"Una piuma nera dal riflesso smeraldo, molto soffice al tatto.<br><li>Riduce <b>moderatamente</b> il tempo di ricarica tra i lanci di bottiglie.</li>","name":"Piuma di storno","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"Un composto chimico volatile che irrita le vie respiratorie, ma incrementa l\'assorbimento dell\'antidoto nutraceutico.<br><li>Aumenta <b>moderatamente</b> la durata del Vigore.</li>","name":"Bottiglione di solvente","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"Un liquido infiammabile, poco denso e trasparente, che intorpidisce la mente se inalato.<br><li>La vittima intossicata è colpita dall\'effetto <b>Accecamento</b> per <b>30 secondi</b>.</li>","name":"Tanica di cherosene","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"Un classico senza tempo, di quelli che non si vedono tanto spesso.<br><li>Le nubi del tonico nutraceutico si colorano di giallo.</li><li>Le nubi dell\'antidoto nutraceutico si colorano di viola.</li>","name":"Porno in VHS","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"Un liquido sciropposo inodore, estremamente corrosivo.<br><li>Il bersaglio colpito da Intossicazione subisce l\'effetto di <b>Lacerazione</b>.</li>","name":"Fiala di acido solforico","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"Una sostanza chimica potente che causa irritazioni, ustioni e danni alle vie respiratorie.<br><li>La vittima intossicata viene colpita <b>moderatamente</b> da una penalità di <b>Rallentamento</b> extra.</li>","name":"Fiaschetta di candeggina","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"Un composto chimico dall\'odore intenso e a base di ammoniaca. Basta una minuscola annusata per dare una botta tremenda anche alle menti più apatiche.<br><li>Estende <b>moderatamente</b> l\'area d\'effetto dei gas dell\'antidoto nutraceutico.</li>","name":"Sali di ammoniaca","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"Un composto organico dall\'odore dolciastro e dalle potenti doti anestetiche.<br><li>Estende <b>moderatamente</b> l\'area d\'effetto dei gas del tonico nutraceutico.</li>","name":"Flacone di cloroformio","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"Sul viso e nell\'antidoto. Questo composto ignoto amplifica gli effetti dell\'antidoto.<br><li>Aumenta <b>considerevolmente</b> la durata del Vigore.</li>","name":"Kit per un trucco sgargiante","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"Quello che rimane dopo qualche ora di divertimento scadente e un mal di testa da incubo.<br><li>Inizia con <b>2</b> bottiglie extra. </li><li>Aumenta il numero massimo di bottiglie trasportabili di <b>2</b>.</li>","name":"Gin da due soldi","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"Un composto organico altamente volatile, tossico a questa concentrazione.<br><li>Aumenta <b>considerevolmente</b> la durata dell\'Intossicazione.</li>","name":"Etere 15% vol","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"Una lugubre collezione incompleta di dita. Riempie il Clown di brama e amplifica le sue abilità nella preparazione di elementi chimici.<br><li>Quando un sopravvissuto o un killer ottengono Vigore, possono vedere l\'aura del killer e di tutti i sopravvissuti in un raggio di 16 metri.</li>","name":"Scatola di sigari","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"Il prezioso dito medio di un omone tatuato. Dal leggero sapore di olio per motori.<br><li>Le aure dei sopravvissuti con l\'effetto di Intossicazione o Vigore ti sono rivelate per <b>6 secondi</b>.</li>","name":"Dito medio tatuato","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"Il mignolo pregiato di qualcuno con i capelli rossi. Vagamente profumato. Sa di pot-pourri e vernice.<br><li>I sopravvissuti colpiti direttamente da una bottiglia di tonico nutraceutico subiscono l\'effetto di stato <b>Vulnerabilità</b> per la durata dell\'intossicazione.</li>","name":"Mignolo di persona fulva","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"Un paio di comodi sandali bassi, facili da mettere e da togliere.<li>Aumenta leggermente la velocità di movimento del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Zōri","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"Un talismano che rende felici e pieni d\'entusiasmo.<li>Aumenta leggermente la durata del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Amuleto Shiawase","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"Uno dei mille orizuru per far ogni desiderio.<li>Accelera leggermente il recupero del potere del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Gru di origami","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"Un pettine di bambù dai denti stretti, per districare gentilmente i capelli in disordine.<li>Aumenta leggermente la velocità di carica per l\'attivazione del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Pettine di bambù regalato","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"Un nastro di seta per domare i capelli ribelli.<li>Aumenta moderatamente la velocità di carica per l\'attivazione del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Nastro bianco per capelli","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"Un orologio da polso con il vetro rotto. Il nome \\"Rin\\" è scarabocchiato sul cinturino.<li>Accelera moderatamente il recupero del potere del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Orologio rotto di Rin","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"Un berretto sportivo sporco di fango con il logo di un liceo. Riporta il nome \\"Rin\\" su un\'etichetta.<li>Aumenta moderatamente la velocità di movimento del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Berretto sportivo infangato","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"Un talismano della fortuna.<li>Aumenta moderatamente la durata del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Talismano Kaiun","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"Un bonsai dal fogliame verde-blu. Un tempo era il simbolo della tradizione di famiglia degli Yamaoka.<li>Aumenta leggermente la frequenza dello sfasamento passivo.</li><li>Cumulabile</li>","name":"Ginepro bonsai","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"Un flauto traverso arrugginito dal suono angosciante.<li>Accelera considerevolmente il recupero del potere del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Flauto arrugginito","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"Talismano Katsumori","name":"Talismano Katsumori","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"La guardia di una spada ancestrale. Realizzata per la famiglia Yamaoka.<li>Aumenta leggermente la durata della ricomparsa del Tormento di Yamaoka.</li><li>Aumenta leggermente la velocità di movimento per la ricomparsa del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Tsuba per katana","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"Un pratico paio di pantofole.<li>Aumenta considerevolmente la velocità di movimento del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Uwabaki sporchi","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"Un fermacapelli incrostato di sangue secco.<li>Aumenta considerevolmente la velocità di carica per l\'attivazione del Tormento di Yamaoka.</li><li>Cumulabile</li>","name":"Fermacapelli insanguinato","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"Un potente talismano che ti proteggerà dall\'essere ostacolato da circostanze sospette.<li><b>Aumenta straordinariamente</b> la durata del Tormento di Yamaoka.</li><li><b>Riduce leggermente</b> la velocità di movimento del Tormento di Yamaoka.</li>","name":"Amuleto Yakuyoke","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"Il fodero di una spada ancestrale. Realizzato in passato per la famiglia Yamaoka.<li>Aumenta moderatamente la durata della ricomparsa del Tormento di Yamaoka.</li><li>Aumenta moderatamente la velocità di movimento per la ricomparsa del Tormento di Yamaoka.</li>","name":"Saya per wakizashi","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"Un potente braccialetto che riporta un mantra sacro.<li>Il suono emesso dallo sfasamento viene udito da tutti i sopravvissuto al di fuori del raggio di terrore.</li>","name":"Braccialetto rosario","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"Un fiore di ciliegio rinsecchito e sgretolato. Un tempo era il simbolo della mortalità.<li>Aumenta leggermente la durata dello sfasamento passivo.</li><li>Aumenta leggermente la frequenza dello sfasamento passivo.</li>","name":"Fiore di ciliegio secco","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"Un anello d\'argento con l\'incisione \\"per la mia adorata figlia\\".<li>Aumenta straordinariamente la velocità di movimento del Tormento di Yamaoka.</li><li>I segni dei graffi non sono più visibili usando il Tormento di Yamaoka.</li>","name":"Anello madre-figlia","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"Un paio di occhiali da papà, un tempo appartenenti a un impiegato stressato.<li>Le tracce di sangue del sopravvissuto diventano visibili usando il Tormento di Yamaoka.</li>","name":"Occhiali da papà","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"Una spilletta dall\'espressione amichevole e di un vivace colore giallo con un\'anima sarcastica.<li>Durante la Frenesia brutale, colpire un sopravvissuto evidenziato dall\'Istinto del killer applica lo stato di Accecamento per 60 secondi.</li>","name":"Spilletta Smiley sorridente","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"Un righello di legno graffiato con delle tacche.<li><b>Riduce leggermente</b> il tempo necessario per ricaricare la barra di potere.</li>","name":"Righello graffiato","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"Un elenco di missioni maligne da completare, ricordo di tempi migliori.<li><b>Aumenta leggermente</b> la durata della Frenesia brutale.</li>","name":"Lista dei dispetti","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"Un braccialetto di corda spessa intrecciata grigia e rossa. Riporta l\'inscrizione \\"F J S J\\", scritta rozzamente con inchiostro nero.<li><b>Aumenta leggermente</b> il raggio di rilevamento dell\'Istinto del killer.</li>","name":"Braccialetto dell\'amicizia","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"Pastiglie dall\'alto contenuto di caffeina per una mente brillante in occasione di esami o altre attività sanguinolente.<li><b>Aumenta moderatamente</b> il raggio di rilevamento dell\'Istinto del killer.</li>","name":"Pillole Niente nanna","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"Una bozza strappata da un blocco per gli appunti, raffigurante il murale della Legione.<li><b>Aumenta moderatamente</b> la durata della Frenesia brutale.</li>","name":"Schizzo murale","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"Una compilation tenebrosa e deprimente, composta principalmente di potenti ballate e tristi melodie.<li><b>Riduce leggermente</b> l\'affaticamento al termine della Frenesia brutale.</li>","name":"Cassetta di Julie","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"Un righello di legno su cui sono incisi i nomi dei nemici.<li><b>Riduce moderatamente</b> il tempo necessario per ricaricare la barra di potere.</li>","name":"Righello inciso","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"Una spilletta con uno Smiley deturpato, un tempo dall\'espressione amichevole e di un vivace colore giallo. Un\'icona della Legione. <li>Durante la <i>Frenesia brutale</i>, colpire un sopravvissuto evidenziato dall\'Istinto del killer applica lo stato <b><i>Lacerazione</i></b>.</li>","name":"Spilletta Smiley deturpato","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"Una spilla fatta a mano con l\'effige della Legione. Da usare esclusivamente durante azioni intimidatorie.<li>Durante la Frenesia brutale, colpire un sopravvissuto evidenziato dall\'Istinto del killer applica lo stato di Sconforto per 60 secondi.</li>","name":"Spilletta della Legione","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"Una compilation veloce e potente di canzoni energetiche dal ritmo sostenuto.<li><b>Aumenta considerevolmente</b> la velocità di rilevamento dell\'Istinto del killer.</li>","name":"Cassetta di Susie","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"Un album da disegno con schizzi creativi ed evocativi, se non un tantino bizzarri.<li><b>Aumenta considerevolmente</b> la durata della Frenesia brutale.</li>","name":"Blocco da disegno rubato","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"Questa lama è ricoperta di macchie malsane di sudiciume che rendono particolarmente difficile la guarigione delle ferite.<li><b>Aumenta leggermente</b> il tempo necessario ai sopravvissuti per completare un\'azione di guarigione.</li>","name":"Lama malevola","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"Un mix di tracce frenetiche e ritmi sostenuti per rilassarsi quando la vita fa schifo.<li><b>Riduce moderatamente</b> l\'affaticamento al termine della Frenesia brutale.</li>","name":"Cassetta di Joey","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"Un articolo medico sulle lesioni e le ferite da arma da taglio rubato dalla biblioteca pubblica di Ormond.<li><b>Riduce moderatamente</b> il timer della Ferita profonda di tutti i sopravvissuti.</li>","name":"Studio ferite da taglio","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"Mai intraprendere una missione omicida senza la tua musica! Una tracklist di distorsioni e percussioni esagerate che ti spacca i timpani.<li>Gli attacchi di Frenesia brutale <b>riducono considerevolmente</b> il timer di Ferita profonda di un sopravvissuto.</li>","name":"Cassetta di Frank","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"Questa lama è ricoperta di luride macchie di sangue e sudiciume che rendono particolarmente difficile la guarigione delle ferite.<li><b>Aumenta moderatamente</b> il tempo necessario ai sopravvissuti per completare un\'azione di guarigione.</li>","name":"Lama lercia","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"Un mucchietto di lerciume raccolto dal luogo di eterno riposo dell\'inserviente. Inspiegabilmente freddo.<li><b>Riduce considerevolmente</b> l\'affaticamento al termine della Frenesia brutale.</li>","name":"Sudiciume gelido","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"Una spilletta in similvetro plasmata dalla stessa Nebbia che riproduce le sembianze della Legione. La superficie è calda e irradia il potere dell\'Entità.<br><br>Quando l\'effetto di stato della Ferita profonda è applicato durante la Frenesia brutale:<br><li>il tuo raggio di terrore si ripercuote <b>sull\'intera mappa;</b></li><li>tutti i bancali che salti si <b>rompono immediatamente.</b></li><br>Questo effetto dura fino all\'esaurimento della barra di potere.<br>","name":"Spilletta iridescente","flavor":"\\"La giovinezza consumata dal vetro iridescente amplifica ed espande la portata dell\'Entità.\\"","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"Ritmi oscuri, pezzi violenti e parti cantate incomprensibili da un altro mondo riempiono la mente di un vibrante sesto senso.<li>Mentre usi la Frenesia brutale, il <b>progresso di riparazione dei generatori</b> è determinabile dall\'<b>intensità delle loro aure.</b></li>","name":"Cassetta fumante","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"Una tavoletta di pietra frammentata recante una formula corrotta, in origine utilizzata per allontanare le malattie e le sensazioni di malessere generale.<li><b>Riduce leggermente</b> il tempo di attivazione della Pozza della Devozione.</li><li><b>Aumenta leggermente</b> la velocità di movimento durante la Purificazione corrotta.</li>","name":"Frammento di tavoletta di preghiera","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"Una resina preziosa estratta dagli alberi di boswellia serrata, usata durante le cerimonie per via del suo profumo dolce all\'aroma di agrumi.<li><b>Aumenta leggermente</b> la velocità di movimento mentre si carica la Purificazione abietta.</li>","name":"Incenso di olibano","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"Un sigillo a forma di cilindro, realizzato con pietra porosa, raffigurante un rituale con divinità alate.<li><b>Aumenta leggermente</b> il tempo di infezione degli oggetti.</li>","name":"Sigillo di calcare","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"Una pasta dall\'odore molto pungente realizzata con radici triturate, marinate per tre giorni nella salamoia per pesci e per altri due giorni nel vino. Si applica sugli sfoghi cutanei.<li><b>Riduce leggermente</b> il tempo di ricarica della Purificazione abietta.</li>","name":"Unguento guaritore","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"Un amuleto in pietra ollare, con su incisa in maniera grossolana una divinità alata che allontana le malattie. Aumenta la devozione di chi lo indossa.<li><b>Aumenta leggermente</b> la durata della Purificazione corrotta.</li>","name":"Amuleto della profilassi","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"Liquido torbido e schiumoso che permea l\'aria con un aroma pungente di erbe e alcol. Si applica direttamente sulle vesciche.\\n<li><b>Riduce moderatamente</b> il tempo di ricarica della Purificazione abietta.</li>","name":"Tintura potente","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"Un sigillo a forma di cilindro, forgiato utilizzando pietra dura metallica. Su di esso sono incisi esseri con la testa di uccello che stanno in piedi vicino a strani macchinari. Si usa come recipiente per le ceneri benedette.<li><b>Aumenta moderatamente</b> il tempo di infezione degli oggetti.</li>","name":"Sigillo di ematite","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"Uno sciroppo a base di acqua e senape che, se bevuto, stimola il vomito per purificare il corpo dal male.<li><b>Aumenta leggermente</b> l\'efficacia della Purificazione abietta.</li>","name":"Pozione emetica","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"Un frutto maturato alla perfezione da mangiare durante le cerimonie di Purificazione. Delizioso.<li>Comincia la prova con <b>1</b> Pozza della Devozione corrotta in più.</li>","name":"Mela benedetta","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"Un bicchiere contenente un olio spalmabile dotato di proprietà espettoranti. Emana la classica essenza di alloro e rosmarino.<li><b>Aumenta moderatamente</b> la velocità di carica della Purificazione abietta.</li>","name":"Olio spalmabile","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"Uno sciroppo disgustoso dalle origini sconosciute. Il liquido giallo e denso viene bevuto per stimolare il vomito. Si usa per purificare il corpo dal male.<li><b>Aumenta moderatamente</b> l\'efficacia della Purificazione abietta.</li>","name":"Emetico infetto","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"Una pasta di cera nera inebriata con linfa di cedro che diffonde un aroma dolce e di terra. Si applica direttamente sulla pelle infetta.<li><b>Aumenta leggermente</b> la velocità di movimento mentre si carica la Purificazione abietta.</li><li><b>Riduce moderatamente</b> il tempo di ricarica della Purificazione abietta.</li>","name":"Unguento aromatizzato","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"Un amuleto di ossidiana usato per allontanare i malesseri durante i rituali di esorcismo. Su di esso è scritta una preghiera rivolta al dio del caos e della pestilenza. Fornisce devozione violenta a chi lo indossa.<li><b>Aumenta moderatamente</b> la durata della Purificazione corrotta.</li>","name":"Amuleto dell\'esorcismo","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"Una mela sbucciata avvolta da ceneri benedette. Mangiando questo frutto è possibile allontanare gli spiriti dei deceduti maligni e carichi d\'invidia.<li>Comincia la prova con <b>1</b> Pozza della Devozione corrotta in più.</li><li><b>Aumenta leggermente</b> il tempo di infezione degli oggetti.</li>","name":"Mela incenerita","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"Una tavoletta di pietra decorata in oro, che raffigura i disegni e le parole di una formula corrotta utilizzata in origine per venerare divinità dimenticate.<li><b>Riduce moderatamente</b> il tempo di attivazione della Pozza della Devozione.</li><li><b>Aumenta moderatamente</b> la velocità di movimento durante la Purificazione corrotta.</li>","name":"Tavoletta della venerazione","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"Una pozione dall\'odore nauseabondo e mezza congelata, preparata con ingredienti sconosciuti. Si beve per stimolare rapidamente il vomito e si usa per purificare il corpo dal male.<li><b>Aumenta considerevolmente</b> l\'efficacia della Purificazione abietta.</li>","name":"Emetico abietto","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"Un dito mozzato in decomposizione di Adiris, messo in un filo e indossato come amuleto intorno al collo. Diffonde potere abietto.<li><b>Aumenta considerevolmente</b> la probabilità con cui i sopravvissuti contraggono infezioni durante le interazioni.</li>","name":"Dito mozzato","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"Un amuleto di pietra del sangue con una dettagliata effige del dio babilonese del caos e della pestilenza. Fornisce devozione illimitata a chi lo indossa.<li><b>Aumenta considerevolmente</b> la durata della Purificazione corrotta.</li>","name":"Amuleto del devoto","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"Un sigillo semitrasparente a forma di cilindro modellato dalla Nebbia, raffigurante l\'effige della Malattia. La sua superficie calda vibra del potere dell\'Entità.<li><b>Riduce moderatamente</b> la velocità di movimento durante la Purificazione corrotta.</li><li><b>Riduce straordinariamente</b> la durata della Purificazione corrotta.</li><li>La Purificazione abietta si trasforma in Purificazione corrotta ogni volta che viene acceso un generatore.</li>.","name":"Sigillo iridescente","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Una pasta nera realizzata con frammenti di ossa appuntiti. Inalarne i fumi maleodoranti affina l\'occhio della mente.<li>Le aure dei sopravvissuti ti vengono rivelate per <b>5 secondi</b> quando vomitano.</li>","name":"Incenso nero","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"Una telecamera rubata a una delle vittime di Olsen a Philadelphia, dove lavorava. Il filmato riporta l\'ultima serata trascorsa in città.<br><li><b>Aumenta leggermente</b> la velocità con cui un sopravvissuto diventa contrassegnato quando non ci si sporge da un riparo.</li>","name":"\\"Philly\\"","flavor":"\\"Philly è tutta da amare: non fa che dare, e io voglio ricordarmela per sempre.\\" - Ghost Face","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"Una scatola di fiammiferi presa dal Walleyes, un baretto di Northern Roseville, su cui è scritto in blu il numero di telefono di una vittima. Una delle prove incriminanti ritrovate.<br><li><b>Aumenta leggermente</b> il tasso recupero del potere del <i>Sudario notturno</i>.</li>","name":"Fiammiferi del Walleyes","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"Ritagli di articoli riguardanti delitti irrisolti avvenuti tra lo Utah e la Pennsylvania. Gli articoli, scritti solo in parte da Ghost Face, riportano tutti omicidi perpetrati da lui.<br>I tuoi successi ti inorgogliscono e incrementano la tua autostima.<br><li><b>Aumenta leggermente</b> la velocità di movimento quando perseguiti qualcuno.</li>","name":"Ritagli di prime pagine","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"Profumo di un negozietto economico con un forte odore di alcol etilico. Indossato da Ghost Face per annunciare la sua presenza e riservato solo alle visite più improvvise.<br><li><b>Aumenta leggermente</b> il tempo in cui un sopravvissuto resta contrassegnato.</li>","name":"Boccetta di profumo da due soldi","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"Lente per la messa a fuoco manuale per non essere individuato anche quando scatti foto da lontano.<br><li><b>Aumenta leggermente</b> la velocità a cui un sopravvissuto diventa contrassegnato quando non ci si sporge da un riparo.</li><li><b>Aumenta leggermente</b> il tempo in cui un sopravvissuto resta contrassegnato.</li>","name":"Lente per teleobiettivo","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"Un quaderno a spirale pieno di scritte a mano confuse che elencano vari strumenti usati per perseguitare le vittime. Rileggere i metodi usati in passato rievoca elettrizzanti ricordi.<br><li><b>Aumenta moderatamente</b> la velocità di movimento mentre perseguiti qualcuno.","name":"Diario di Olsen","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"Piena di scritte blu brusche e contorte. Tutte le vittime degli omicidi di Roseville sono elencate qui, con tanto di indirizzo e numero telefonico.<br><li><b>Aumenta moderatamente</b> il tasso di recupero del potere del <i>Sudario notturno</i>.</li>","name":"Rubrica di Olsen","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"La mappa scribacchiata di Northern Roseville, Florida. Ogni X rappresenta una vittima di Ghost Face. Tracciare la posizione dei tuoi bersagli ti permette di aggirarti per le vie cittadine senza essere individuato.<br><li><b>Aumenta moderatamente</b> il tempo in cui l\'Istinto del killer resta visibile quando il killer viene rivelato.</li>","name":"Mappa contrassegnata","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"Cinghie nere che tengono tutto al proprio posto, anche negli agguati più sfrenati.<br><li><b>Aumenta leggermente</b> la velocità di movimento quando sei abbassato.</li>","name":"Cinghie ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"Nel portafogli di Olsen ci sono trenta dollari in banconote, una tessera di un videoclub e una foto spiegazzata della prima vittima a Roseville. Portare con te delle prove incriminanti ti riempie di emozione e determinazione.<br><li><b>Aumenta considerevolmente</b> la velocità di movimento mentre perseguiti qualcuno.</li>","name":"Portafogli di Olsen","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"Una fondina leggera e flessibile per portare la tua lama. Muoversi è un vero piacere quando tutto rimane al proprio posto.<br><li><b>Aumenta moderatamente</b> la velocità di movimento quando sei abbassato.</li>","name":"Fondina per coltello in cuoio","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"Una travolgente fragranza muschiata portata da Ghost Face per annunciare il suo arrivo. Riservata alle vittime destinate a finire in prima pagina.<br><li><b>Aumenta moderatamente</b> il tempo in cui un sopravvissuto resta contrassegnato.</li>","name":"Profumo duraturo","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"Una fondina montata sulla cintura per portare la tua lama con facilità e discrezione. Nessuno sa cos\'hai in mente di combinare stanotte.<br><li><b>Aumenta moderatamente</b> la velocità a cui un sopravvissuto diventa contrassegnato quando non ci si sporge da un riparo.</li>","name":"Fondina di coltello per cintura","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"Una penna blu dal tappo mangiucchiato che contiene tracce del DNA di Danny. La prova incriminante mai ritrovata.<br><li><b>Aumenta considerevolmente</b> il tasso di recupero del potere del <i>Sudario notturno</i>.</li>","name":"Penna rosicchiata","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"Una pagina strappata che illustra la routine settimanale della prima vittima di Olsen a Roseville. Conoscere le abitudini delle tue vittime ti permette di anticiparne ogni mossa. \\n<br><li><b>Aumenta moderatamente</b> il tempo in cui l\'Istinto del killer resta visibile quando il killer viene rivelato.</li><li><b>Riduce moderatamente</b> il raggio di rilevamento per il killer quando Sudario notturno è attivo.</li><br><span class=\\"FlavorText\\">\\"Ti osservo da un po\'. Volevo che stavolta fosse speciale. Uno di quegli articoli che non si possono dimenticare.\\" - Ghost Face</span>","name":"Routine dettagliata della vittima","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"La lente notturna permette di scattare foto nitide anche nel buio più pesto. Ideale per visite notturne improvvisate ma discrete.<br><li><b>Aumenta considerevolmente</b> la velocità a cui un sopravvissuto diventa contrassegnato quando non ci si sporge da un riparo.</li>","name":"Monocolo notturno","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"Una fondina che consente la massima libertà di movimento: perfetta per sferrare colpi potenti e improvvisi senza sacrificare l\'agilità. Rubata a un agente di pattuglia la notte in cui Danny lasciò Philadelphia.<br><li><b>Aumenta considerevolmente</b> la velocità di movimento quando sei abbassato.</li><span class=\\"FlavorText\\">\\"Devo prepararmi come un vero scout. Via queste inutili toppe. Ho in mente qualcosa di molto meglio.\\" - Ghost Face</span>","name":"Fondina da gamba per coltello","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"Una patente che riporta la vera identità di Olsen: Danny Johnson.<br><li><b>Riduce considerevolmente</b> il raggio da cui è possibile rivelare il killer mentre <i>Sudario notturno</i> è attivo.</li>","name":"Patente","flavor":"\\"Tutti si chiedono chi sia in realtà Ghost Face. Ma quello che dovrebbero chiedersi è \\"chi sarà il prossimo\\".\\" - Ghost Face","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"Un filmato ottenuto da Olsen per scrivere l\'articolo che tanto terrorizzò Roseville.<br><li><b>Aumenta straordinariamente</b> la velocità con cui un sopravvissuto diventa contrassegnato quando si sporge da un riparo.</li><li><b>Riduce straordinariamente</b> la velocità con cui un sopravvissuto diventa contrassegnato quando non si sporge da un riparo.</li>","name":"\\"Ghost Face immortalato dalla telecamera\\"","flavor":"\\"In questo filmato si vede un\'ombra entrare a tarda notte in un\'abitazione di Northern Roseville, Florida. Il mattino seguente è stata chiamata la polizia per denunciare un omicidio nella zona. Chiudete a chiave le porte di casa: c\'è un killer tra noi che si aggira liberamente, come un fantasma nel cuore della notte.\\" - La Gazzetta di Roseville","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"La telecamera di sicurezza che riprese Ghost Face mentre irrompeva in un\'abitazione sulla Belleview Road, a Northern Roseville. La perfetta angolazione della telecamera permise di riprendere uno scorcio di Ghost Face, senza però fornire veri indizi alla polizia.<br><li>Le aure di tutti i sopravvissuti al di fuori del tuo raggio di terrore ti vengono rivelate per 4 secondi quando un sopravvissuto contrassegnato entra nello stato di fin di vita.</li>","name":"Telecamera di sicurezza esterna","flavor":"\\"Un\'immagine vale più di mille parole.\\" - Ghost Face","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"La polpa di una zucca infettata dal terreno contaminato di Hawkins.<li>Quando varchi un portale, questo viene distrutto. Ottieni 200 Punti Sangue in più per il teletrasporto.</li>","name":"Zucca marcia","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"Una coda di topo gommosa per sfamare il Demogorgone.<li><b>Riduce leggermente</b> il tempo necessario ad aprire un portale.</li>","name":"Coda di topo","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"Una massa gocciolante di fegato molliccio.<li><b>Aumenta leggermente</b> la velocità di movimento del killer durante la carica di <b>Degli Abissi</b>.</li>","name":"Fegato di topo","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"Un cuore fermentato strappato dal petto di una creatura tentacolata del Sottosopra.<li><b>Aumenta leggermente</b> la velocità di ricarica degli attacchi <b>Squarcio</b> a segno.</li>","name":"Cuore nero","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"Ragnatele umide ed elastiche che tengono aperti i passaggi interdimensionali.<li><b>Aumentano leggermente</b> il tempo necessario ai sopravvissuti per sigillare un portale.</li>","name":"Ragnatele vischiose","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"Una patina maleodorante e vischiosa che ricopre i passaggi interdimensionali.<li><b>Aumenta moderatamente</b> l\'area in cui i sopravvissuti possono essere individuati usando <b>Degli Abissi</b>.</li>","name":"Muco appiccicoso","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"Interiora marce che nutrono il Demogorgone.<li><b>Aumentano leggermente</b> la velocità di movimento del killer nel varcare i portali.</li>","name":"Interiora verde marcio","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"Le saporite interiora di una povera vittima.<li><b>Aumentano</b> il numero di portali disponibili di <b>1</b>.</li><li><b>Aumentano leggermente</b> la velocità di ricarica degli attacchi <b>Squarcio</b> mancati.</li>","name":"Interiora di Mao","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"Un paio di occhiali rotti riemersi dal Sottosopra.<li><b>Accelera leggermente</b> il recupero dello <i>Squarcio</i> quando rompi un bancale.</li>","name":"Occhiali di Barb","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"Un fungo di colore scuro nativo del Sottosopra. Consente al Demogorgone di distorcere telepaticamente i sensi della sua preda.<li><b>Aumenta leggermente</b> la durata dello stato <b>Impercettibile</b> applicato al killer all\'uscita da un portale.</li>","name":"Tignosa violacea","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"Rampicanti robusti e spinosi che ricoprono e rinforzano i passaggi interdimensionali.<li><b>Aumentano leggermente</b> il tempo necessario ai sopravvissuti per sigillare un portale.</li><li><b>Aumentano leggermente</b> l\'area in cui i sopravvissuti possono essere individuati usando <b>Degli Abissi</b>.</li>","name":"Rampicanti spinosi","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"Una bibita carica di energia psichica.<li>Mostra le aure gialle dei generatori che vengono riparati mentre varchi i portali.</li>","name":"Bibita di Undici","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"Un polmone ruvido e gommoso in grado di rinvigorire il Demogorgone.<li><b>Aumenta considerevolmente</b> la velocità di movimento del killer nel varcare i portali.</li><li>Riduce il numero di portali disponibili di <b>2</b>.</li>","name":"Polmone di cervo","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"Un accendino che porta solo guai.<li>I sopravvissuti sotto l\'effetto di un portale subiranno lo stato <b>Accecamento</b>. Una volta lontani dal portale, l\'effetto resterà attivo per <b>60 secondi</b>.</li>","name":"Accendino d\'ottone","flavor":"\\"Emette un potente campo elettromagnetico. Dev\'essere venuto in contatto con il Sottosopra.\\" - Laboratorio Nazionale di Hawkins","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"Un fungo velenoso di un colore rosso brillante, originario del Sottosopra.<li><b>Aumenta moderatamente</b> la durata dello stato <b>Impercettibile</b> applicato al Demogorgone all\'uscita da un portale.</li>","name":"Ovolo vermiglio","flavor":"\\"I test su questo campione sono tuttora in corso, ma finora i risultati sono stati deludenti.\\" - Laboratorio Nazionale di Hawkins","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"Una resina appiccicosa e infiammabile che rinforza i passaggi interdimensionali.<li><b>Aumenta moderatamente</b> il tempo necessario ai sopravvissuti per sigillare un portale.</li>","name":"Resina del Sottosopra","flavor":"\\"Un campione prelevato da un albero che nascondeva un portale verso un altro piano dell\'esistenza. Nessuno studio condotto sui suoi effetti ha prodotto risultati definitivi.\\" - Laboratorio Nazionale di Hawkins","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"Un enorme uovo ancora caldo, avvolto in un disgustoso groviglio di ragnatele.<li><b>Accelera considerevolmente</b> il recupero del potere di varcare i portali.</li>","name":"Uovo sconosciuto","flavor":"\\"Un uovo enorme è stato rinvenuto nel Sottosopra, ma nessuno dei campioni è giunto intatto al laboratorio per essere esaminato.\\" - Laboratorio Nazionale di Hawkins","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"Un fischietto bianco arrugginito della piscina pubblica di Hawkins.<li>I sopravvissuti vicini a un portale attivo verranno evidenziati dall\'Istinto del killer senza dover caricare <b>Degli Abissi</b>.</li>","name":"Fischietto da bagnino","flavor":"\\"Emette un forte campo elettromagnetico. Dev\'essere venuto in contatto con il Sottosopra.\\" - Laboratorio Nazionale di Hawkins","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"Una varietà di muschio dagli effetti psichedelici che cresce sulla corteccia degli alberi del Sottosopra.<li>Quando varchi un portale, il Demogorgone emerge dal portale di destinazione senza emettere suoni, ma a discapito della velocità.</li><li><b>Aumenta straordinariamente</b> la durata dell\'effetto <b>Impercettibile</b> del Demogorgone quando esce da un portale.</li>","name":"Muschio rosso","flavor":"\\"Consumarne le foglie potenzia le capacità atletiche e causa stati di euforia.\\" - Laboratorio Nazionale di Hawkins","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"Un lichene dai potenti effetti che cresce sulle rocce del Sottosopra in forma di polvere.<li><b>Rivela le aure</b> di tutti i sopravvissuti nel varcare il Sottosopra e per <b>3 secondi</b> dopo esserne uscito.</li>","name":"Lichene del lebbroso","flavor":"\\"La minima dose provoca stati allucinatori.\\" - Laboratorio Nazionale di Hawkins","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"Per perseguire i suoi puri e nobili fini, Kazan portava con sé un oggetto per scacciare il male che l\'avrebbe portato sulla cattiva strada.<li><b>Aumenta leggermente</b> la velocità di assorbimento dei globuli di sangue.</li>","name":"Talismano Yaku-yoke","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"Se la corda fosse stata più resistente, avrebbe certamente trattenuto Kazan. Invece lui riuscì a scappare e a massacrare i suoi rapitori.<li><b>Aumenta leggermente</b> la distanza dalla quale puoi vedere le auree dei globuli di sangue.</li>","name":"Corda rovinata","flavor":"\\"Per quanto precisa e puntuale, anche la Morte talvolta può errare.\\" - Dottrina Renjiro 14:5","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"Una ciotolina che risale alle nozze di Kazan, rotta ancor prima della fatidica prima notte.<li><b>Aumenta leggermente</b> il tasso di carica per attivare la <i>Furia sanguinaria</i>.</li><li><b>Riduce leggermente</b> il tempo di disattivazione della <i>Furia sanguinaria</i>.</li>","name":"Sakazuki crepato","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"Akito cadde durante una delle innumerevoli escursioni invernali verso il tempio. Il pellegrinaggio non bastò a far guarire la gamba.<li><b>Aumenta leggermente</b> la velocità di movimento mentre assorbi i globuli di sangue.</li>","name":"Unghia di piede annerita","flavor":"\\"Se un uomo non si sacrifica per i propri figli, non è degno di essere chiamato padre.\\" - Dottrina Renjiro 11:12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"Lo stemma raffigurante delle corna che Kazan rimosse dal suo elmo dopo essere stato accomunato a un demone.<li><b>Aumenta leggermente</b> il tasso di ricarica passiva dell\'<i>Ira Yamaoka<i>.</li>","name":"Maedate lucidato","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"Un dipinto a inchiostro che un tempo impreziosiva la Tenuta Yamaoka. Raffigura un leone mangiato dai ratti.<li><b>Aumenta leggermente</b> il tasso di carica per attivare la <i>Furia sanguinaria</i>.</li><li><b>Riduce leggermente</b> il tempo di disattivazione della <i>Furia sanguinaria</i>.</li><li><b>Riduce moderatamente</b> la penalizzazione per il consumo della <i>Furia sanguinaria</i> quando abbatti un sopravvissuto.</li>","name":"Leone di inchiostro","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"Un bastone appartenente a Renjiro, ma che Kazan rubò prima di partire.<li><b>Aumenta leggermente</b> la durata della <i>Furia sanguinaria</i>.</li>","name":"Saihai scheggiato","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"La spada da allenamento di Akito. Dopo l\'incidente, la abbandonò tra le ragnatele.<li><b>Aumenta moderatamente</b> la distanza dalla quale puoi vedere le auree dei globuli di sangue.</li>","name":"Spada di legno per bambini","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"Il sangue di un giovane chiamato Kazan, il nobile impostore. Sebbene nascose a suo padre le prove dello scontro, questa fascia lo rallegrava nel profondo.<li><b>Aumenta moderatamente</b> la velocità di movimento mentre assorbi i globuli di sangue.</li>","name":"Fascia insanguinata","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"Lo stendardo della famiglia Yamaoka da cui Kazan traeva un incommensurabile orgoglio.<li><b>Aumenta moderatamente</b> la durata della <i>Furia sanguinaria</i>.</li>","name":"Sashimono degli Yamaoka","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"La maschera che Kazan comprò da giovane per festeggiare il Setsubun. Le rivoltanti fauci presto iniziarono a tormentarlo nel sonno.<li><b>Aumenta leggermente</b> la quantità di globuli di sangue lasciati dai sopravvissuti.</li>","name":"Maschera da Oni in legno","flavor":"\\"Non è una coincidenza che quell\'uomo sia così esperto di demoni.\\" - Dottrina Renjiro 3:8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"I frammenti di una lama ancestrale, distrutta da Kazan in un attacco di ira.<li><b>Aumentano moderatamente</b> il tasso di ricarica passiva di <i>Ira Yamaoka</i>.</li>","name":"Wakizashi frantumata","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"Il codino di un samurai che mise in dubbio l\'onore di Kazan. La base è ancora attaccata a un sottile lembo di pelle insanguinata.<li><b>Aumenta considerevolmente</b> il tasso di carica per attivare <i>Scatto demoniaco</i> mentre <i>Furia sanguinaria</i> è attiva.</li>","name":"Codino scotennato","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"Un gingillo donato a Kazan quando nacque per proteggere lui e la sua famiglia da ogni male.<li><b>Aumenta moderatamente</b> la velocità di movimento di <i>Scatto demoniaco</i> mentre <i>Furia sanguinaria</i> è attiva.</li>","name":"Talismano Kanai-anzen","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"Il panno che la madre di Kazan usò per asciugarsi le lacrime, quando suo figlio partì per la purificazione della casta dei samurai.<li><b>Riduce considerevolmente</b> la penalizzazione per il consumo della <i>Furia sanguinaria</i> quando abbatti un sopravvissuto.</li>","name":"Tenugui intriso di lacrime","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"Le schegge di un\'imbarcazione che condusse Renjiro Yamaoka. Nonostante le avversità, si dice che il leggendario samurai sopravvisse.<li><b>Aumentano moderatamente</b> la quantità di globuli di sangue lasciati dai sopravvissuti.</li>","name":"Scafo in frantumi","flavor":"\\"Se desideri congegnare un sotterfugio, inizia a dare ascolto solo a te stesso.\\" - Dottrina Renjiro 7:9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"Un dente acquistato da un commerciante di oggetti esotici. Simboleggia potere e nobiltà.<li><b>Aumenta considerevolmente</b> la durata della <i>Furia sanguinaria</i>.</li>","name":"Zanna di leone","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"La stampella che il figlio di Kazan usava dopo essere precipitato da un albero. L\'amica di Akito e la sua famiglia furono punite per le ferite riportate dal ragazzo.<li><b>Aumenta considerevolmente</b> la velocità di movimento dello <i>Scatto demoniaco</i> mentre <i>Furia sanguinaria</i> è attiva.</li>","name":"Stampella di Akito","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"Il guanto che Renjiro strinse al petto dopo essere stato colpito da suo figlio.<li>Tutti i sopravvissuti vedono i globuli di sangue.</li><li>Se un superstite entra in contatto con un Globulo di sangue, lo assorbe e rivela la sua aura al Killer per <b>2 secondi</b>.</li><li>L\'effetto si accumula per ogni Globulo di sangue assorbito.</li>","name":"Guanto insanguinato di Renjiro","flavor":"\\"Quando ogni cosa ti abbandona, tieniti stretto l\'onore.\\" - Dottrina Renjiro 14:12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"Chi sfoggia questo stemma dimostra la propria appartenenza alla famiglia Yamaoka.<br><li>Mentre <i>Furia sanguinaria</i> è attiva, fallire un <i>Colpo demoniaco</i> farà sì che tutti i sopravvissuti nel <b>raggio di 12 metri</b> inizino a urlare, rivelando così la loro posizione.</li>","name":"Stemma di famiglia iridescente","flavor":"\\"Accetta ciò che sei e fanne scudo per il tuo cuore.\\" - Dottrina Renjiro 11:2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"Un brandello di iuta sudicio. Con un po\' di saliva e olio di gomito, è stato possibile ripulire il fucile dopo una violenta sparatoria.<li><b>Riduce leggermente</b> il tempo di recupero del fucile a fiocina dopo dei colpi a vuoto.</li>","name":"Straccio insalivato ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"Una tintura di oli ed estratti acquistata da un mercante ambulante, che la spacciava come cura contro ogni male.<li><b>Aumenta leggermente</b> la velocità del mulinello del fucile a fiocina.</li>","name":"Olio di serpente ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"Anelli d\'acciaio fragile usati per la prima volta sul prototipo di fucile a fiocina. Nonostante i difetti della catena, ha ancora un valore affettivo.<li>Conferisce il <b>50%</b> di Punti Sangue bonus per gli eventi di <i>Trafitto</i>.</li><li>I sopravvissuti si liberano più facilmente.</li>","name":"Catena fiacca","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"Una vecchia cintura per munizioni modificata da Caleb per le sue speciali armi. È ancora visibile la sottile terra rossa tipica del deserto del Territorio dell\'Arizona.<li><b>Aumenta leggermente</b> la velocità di ricarica del fucile a fiocina.</li>","name":"Cintura per munizioni modificata ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"Un chiodo da rotaia che Caleb legò alla parte anteriore del fucile a fiocina durante un periodo di macabra curiosità. La punta smussata evita una perforazione netta. <li>Colpire un sopravvissuto trafitto infligge l\'effetto <b>Lacerazione</b>.</li>","name":"Chiodo arrugginito ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"Una pianta normalissima. Caleb scoprì che le fiocine intinte nell\'olio da essa ricavato causavano vesciche insopportabili nell\'area intorno alle ferite.<li><b>Aumenta leggermente</b> il tempo di medicazione dei sopravvissuti se afflitti da <b>Ferita profonda</b>.</li>","name":"Foglie di rovere velenosa","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"Un distintivo d\'argento trovato sul cadavere di uno sceriffo del Territorio dell\'Arizona che si intromise nelle taglie appartenenti alla banda Hellshire.<li><b>Riduce leggermente</b> il raggio di terrore quando usi il mirino del fucile a fiocina.</li><li><b>Riduce leggermente</b> la velocità di movimento quando usi il mirino del fucile a fiocina.</li><span class=\\"FlavorText\\">\\"Inizia a recitare le tue preghiere, perché entro mezzanotte penzolerai con un cappio alla gola.\\" - Caleb Quinn</span>","name":"Distintivo da sceriffo ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"Il proiettile che perforò la mascella di Caleb durante una tremenda sparatoria. Risveglia un ardente desiderio di vendetta.<li><b>Aumenta leggermente</b> la velocità di movimento quando usi il mirino del fucile a fiocina.</li><span class=\\"FlavorText\\">\\"Nel momento stesso in cui mi hai commesso un torto, non hai fatto altro che attirare la morte direttamente alla tua porta.\\" - Caleb Quinn</span>","name":"Mascella crivellata ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"Una lattina di foglie di tabacco edulcorate e tagliate, rinvenuta su un cadavere sviscerato in quel di Glenvale. Stimola il sistema nervoso.<li><b>Riduce moderatamente</b> la durata dello stordimento quando i sopravvissuti si liberano dal fucile a fiocina.</li>","name":"Tabacco da masticare","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"Il tintinnio sordo delle chiave rievoca in Caleb ricordi furiosi.<li><b>Aumenta moderatamente</b> la velocità di ricarica del fucile a fiocina.</li>","name":"Chiavi del direttore ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"I resti ormai ingialliti di un manifesto di una taglia posta su Mason Kelly. È servito molto a Caleb per restare concentrato durante la caccia.<li><b>Aumenta moderatamente</b> la velocità di movimento quando usi il mirino del fucile a fiocina.</li><span class=\\"FlavorText\\">\\"Andrai incontro a un atroce destino. Lo giuro sulla tomba di mia madre.\\" - Caleb Quinn</span>","name":"Manifesto da ricercato ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"Una lattina contenente una piccola quantità di olio per ridurre l\'attrito negli apparecchi meccanici. I primi modelli del fucile a fiocina erano noti per i frequenti inceppamenti, ragion per cui era necessario avere dell\'olio sempre a portata di mano.<li><b>Riduce moderatamente</b> il tempo di recupero del fucile a fiocina dopo dei colpi a vuoto.</li>","name":"Lattina d\'olio ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"Nero di rabbia per essersi lasciato sfuggire una taglia per ben due volte, Caleb intrecciò dei rametti di rovi su una fiocina e ne sfrutto le massime potenzialità. <li>I sopravvissuti che si liberano dal fucile a fiocina subiscono l\'effetto <b>Lacerazione</b>.</li>","name":"Rovi dello spino di Giuda ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"Un dente d\'oro estratto a Henry Bayshore mentre strillava implorando pietà, ore prima di ricevere il colpo di grazia.<li><b>Aumenta moderatamente</b> la velocità del mulinello del fucile a fiocina.</li><span class=\\"FlavorText\\">\\"Sta\' al tuo posto, ragazzino. Sta\' al tuo posto e zitto.\\" - Henry Bayshore</span>","name":"Dente d\'oro di Bayshore","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"Una catena spessa e pesante a cui era collegata una sfera metallica che teneva in ostaggio la caviglia di Caleb, poi riconvertita e agganciata a una fiocina.<li><b>Aumenta considerevolmente</b> le cariche necessarie ai sopravvissuti per liberarsi da una fiocina.</li><span class=\\"FlavorText\\">\\"Ai detenuti che svolgono lavori all\'esterno del cortile carcerario deve essere applicata una sfera metallica del peso non inferiore agli 8 kg.\\" - Regolamento del Penitenziario Hellshire</span>","name":"Catena carceraria","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"La tiepida consolazione in bottiglia che placò l\'ira di Caleb, rallentandone il passo.<li><b>Riduce moderatamente</b> il raggio di terrore quando usi il mirino del fucile a fiocina.</li><li><b>Riduce moderatamente</b> la velocità di movimento quando usi il mirino del fucile a fiocina.</li><span class=\\"FlavorText\\">\\"Il dolce gusto dell\'aspra frontiera\\" - Propaganda del Gold Creek, 1876</span>","name":"Whisky Gold Creek","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"Un sigaro di qualità preso dalla giacca del capo di Caleb mentre frignava per la fiocina che gli trapassava l\'addome.<li><b>Riduce considerevolmente</b> la durata dello stordimento quando i sopravvissuti si liberano da una fiocina.</li><span class=\\"FlavorText\\">\\"Vedi di non puntare quell\'affare contro di me, razza di imbecille con la mascella sfigata.\\" - Henry Bayshore</span>","name":"Sigaro di Bayshore","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"Acciaio flessibile di foggia americana guarnito con spuntoni affilatissimi. Nonostante la sua semplicità, Caleb ce lo vide bene intorno a una fiocina per renderla ancora più letale.<li><b>Aumenta moderatamente</b> il tempo di medicazione se colpito da <b>Ferita profonda</b>.</li></li><span class=\\"FlavorText\\">\\"Presto non ci sarà più nulla di cui aver paura. Ma fino ad allora, ci sarò io.\\" - Caleb Quinn</span>","name":"Filo spinato","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"Una moneta che pare di vetro, temprata dalla Nebbia come pagamento per i servizi offerti dal cacciatore di taglie.<li>Ai sopravvissuti trafitti da almeno <b>15 metri</b> di distanza viene inflitto l\'effetto di <b>Vulnerabilità</b> per tutto il tempo in cui rimangono trafitti.</li><span class=\\"FlavorText\\">\\"I patti stretti in situazioni disperate vengono ripagati con la pazzia.\\"</span>","name":"Moneta iridescente","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"Il marchio a fuoco della banda Hellshire. Gira voce che venisse usato sulle nuove reclute, ma in realtà serviva a marchiare le taglie più problematiche.<li>Per tutto il tempo in cui un sopravvissuto rimane trafitto dalla fiocina, le aure di tutti i sopravvissuti entro il tuo raggio di terrore vengono rivelate.</li><span class=\\"FlavorText\\">\\"Banda Hellshire: giustizieri o fuorilegge?\\" - Prima pagina della Gazzetta di Glenvale</span>","name":"Marchio Hellshire","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"Rinvenuto in un frigorifero. Vi è inciso un ripugnante volto rigonfio.<li><b>Aumenta leggermente</b> la durata per cui rimarrà attiva la scia dei <b>Riti del Giudizio</b>.</li>","name":"Anello di piombo ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"Una farfalla trovata su un letto in uno degli appartamenti Woodside. Talmente delicata che rischia di sgretolarsi al minimo tocco.<li><b>Aumenta leggermente</b> il tasso di ricarica dei <b>Riti del Giudizio</b>.</li>","name":"Farfalla morta ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"Rinvenuto nel seminterrato dell\'ospedale di Brookhaven. Ha un\'incisione a forma di ragno.<li><b>Aumenta leggermente</b> il lasso di tempo totale in cui è possibile eseguire i <b>Riti del Giudizio</b>.</li>","name":"Anello di rame ","flavor":"\\"Ero rinchiuso nel seminterrato del seminterrato. Era così piccolo e buio e avevo così tanta paura. Ho fatto cadere il mio prezioso anello. Ma mai, e poi mai tornerò lì dentro.\\"","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"Una cinghia in nylon usata per legare le vittime a una struttura metallica. Il colore non permette di discernere il sangue di cui è intrisa.<li><b>Aumenta leggermente</b> la portata del <b>Castigo dei dannati</b>.</li>","name":"Cinghia nera ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"Una bambola in cera realizzata da un prigioniero pronto a ricevere la sentenza.<li><b>Aumenta moderatamente</b> la portata del <b>Castigo dei dannati</b>.</li>","name":"Bambola di cera ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"La punta acuminata e arrugginita di una lancia. C\'è ancora il sangue dell\'ultima malcapitata vittima.<li><b>Aumenta moderatamente</b> il lasso di tempo totale in cui è possibile eseguire i <b>Riti del Giudizio</b>.</li>","name":"Punta di lancia ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"Un pezzo di stoffa rosa leopardata. Non si capisce per cosa fosse usato.<li><b>Aumenta leggermente</b> la durata dell\'<i>Istinto del killer</i> se attivato dai <b>Riti del Giudizio</b>.</li>","name":"Tessuto leopardato  ","flavor":"\\"Non importa chi sono. Sono qui per te, James.\\" - Maria","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"Una videocassetta di due innamorati in vacanza a Silent Hill, lasciata al Lakeview Hotel nonostante il valore affettivo.<li><b>Aumenta moderatamente</b> il tasso di ricarica dei <b>Riti del Giudizio</b>.</li>","name":"Videocassetta dimenticata ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"Un carillon su cui è raffigurata Cenerentola, preso da una valigetta con adesivi di svariate mete turistiche.<li><b>Aumenta moderatamente</b> la durata per cui rimarrà attiva la scia dei <b>Riti del Giudizio</b>.</li>","name":"Carillon con Cenerentola ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"Una fotografia di due figure rosse incappucciate dal titolo \\"Banchetto Rosso e Bianco per gli Dei\\".<li><b>Aumenta considerevolmente</b> il tasso di ricarica dei <b>Riti del Giudizio</b>.</li>","name":"Fotografia della Setta di Valtiel ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"Una tavoletta in metallo su cui sono incisi simboli aztechi.<li><b>Aumenta considerevolmente</b> il lasso di tempo totale in cui è possibile eseguire i <b>Riti del Giudizio</b>.</li>","name":"Tavola de \\"L\'Oppressore\\" ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"Un dipinto di una figura imponente con una piramide d\'acciaio in testa. Sullo sfondo si notano persone in gabbia.<li><b>Aumenta moderatamente</b> la durata dell\'<i>Istinto del killer</i> se attivato dai <b>Riti del Giudizio</b>.</li>","name":"Giornata nebbiosa, resti del Giudizio ","flavor":"\\"È lui...\\"","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"Il piede levigato di un manichino grigio, strappato con forza dalla gamba.<li><b>Aumenta considerevolmente</b> la durata per cui rimarrà attiva la scia dei <b>Riti del Giudizio</b>.</li>","name":"Piede di manichino ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"Un grafico del Lakeview Hotel, su cui sono dipinte fiamme di un rosso acceso.<li><b>Aumenta considerevolmente</b> la distanza del Castigo dei dannati.</li>","name":"Dipinto \\"Uomo che Brucia\\" ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"Un uovo fresco di un rosso vivace, grande quanto un uovo di quaglia.<li><b>Aumenta considerevolmente</b> la durata dell\'<i>Istinto del killer</i> se attivato dai <b>Riti del Giudizio</b>.</li>","name":"Uovo scarlatto ","flavor":"\\"Non ho mai avuto tanta paura in vita mia! Tu te ne freghi di me, vero? - Maria","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"Un uovo rossastro-arancione piuttosto strano, grande quanto un uovo di quaglia.<li>I sopravvissuti affetti dai <b>Riti del Giudizio</b> subiscono l\'effetto di <b>Accecamento</b> per <b>60 secondi</b>.</li>","name":"Uovo color ruggine ","flavor":"\\"James... Mi hai resa felice.\\" - Mary","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"Libro sulle storie e leggende di Silent Hill e delle zone circostanti.<li>I sopravvissuti affetti dai <b>Riti del Giudizio</b> subiscono l\'effetto di <b>Ignaro</b> per <b>15 secondi</b>.</li><span class=\\"FlavorText\\">\\"Chiamavano questo luogo \\"Il Posto degli Spiriti Silenziosi\\".\\"</span>","name":"Libro \\"Antiche Memorie\\" ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"Un libro che narra di un\'antica divinità, di autore ignoto.<li>I sopravvissuti feriti affetti dal <i>Tormento</i> subiscono l\'effetto dell\'<b>Emorragia</b>.</li>","name":"Libro \\"Cerimonia Rossa\\" ","flavor":"\\"Parla. Io sono Quello Rosso. Le menzogne e la nebbia non sono loro bensì io.\\"","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"Un calice dall\'aspetto molto antico fatto di pura ossidiana.<li><b>Il Boia</b> riceve l\'effetto di <b>Impercettibile</b> quando si trova su una scia dei <b>Riti del Giudizio</b>.</li>","name":"Calice di ossidiana ","flavor":"\\"Scusami per averti svegliato. Ma senza di te non vado avanti.\\" - James Sunderland","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"Un talismano con una strana incisione, probabilmente alterata dall\'influsso dell\'Entità.<li>Quando rinchiudi un sopravvissuto in una <b>Gabbia della Redenzione</b>, le auree di tutti i sopravvissuti affetti dal <i>Tormento</i> ti vengono rivelate per <b>6 secondi.</b></li>","name":"Sigillo di Metatron iridescente ","flavor":"\\"Questo potente riquadro magico dalle proprietà dissipanti e protettive è chiamato \\"Elmo di Virun VII\\", detto anche \\"Sigillo di Metatron\\".\\"","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Una pillola del tutto inefficace... forse.<br><br><li><b>Riduce leggermente</b> la velocità di movimento durante un Impeto.</li><li>Guadagna <b>100%</b> Punti Sangue bonus sugli eventi Impeto.</li> ","name":"Compressa placebo ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"La pianta venefica da cui nacque l\'interesse di Talbot per la chimica. Rievoca ricordi sepolti.<br><br><li><b>Aumenta leggermente</b> la velocità di recupero dopo un Impeto.</li>","name":"Digitale ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"Questo campione iniziale non portò i risultati sperati, ma dimostrò comunque effetti sorprendenti.<br><br><li>Affonta automaticamente il sopravvissuto più vicino entro <b>16 metri</b> dopo uno Schianto.</li>","name":"Composto 7 ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"Un monocolo che Talbot usava di rado nonostante la vista lo stesse abbandonando in età avanzata.<br><br><li>Mostra  la destinazione di uno Schianto.</li>","name":"Monocolo scheggiato","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"I resti degli appunti di Talbot. Contengono ancora preziosissime informazioni.<br><br><li><b>Diminuisce </b> la quantità di token Impeto di <b>1.</b></li><li><b> Aumenta moderatamente</b> la velocità di rigenerazione dei token.</li>","name":"Appunti rovinati ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"Petali di pustole essiccati e polverizzati finemente.<br><br><li><b>Accelera moderatamente</b> la durata dello Schianto.</li>","name":"Polvere di pustole ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"Un campione della bile della Piaga, distillata e trattata con un mix di sostanze chimiche.<br><br><li><b>Aumenta lievemente</b> la velocità di rotazione durante l\'Impeto.</li>","name":"Bile della Malattia","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"Una spina di notevoli dimensioni prelevata da un tumore viscerale. Secerne una tossina di media entità.<br><br><li><b>Aumenta moderatamente</b> la velocità di recupero dopo un Impeto.</li>","name":"Spina tumorale","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"Un ratto che è tornato brevemente in vita dopo un\'iniezione di siero, diventando aggressivo e incontrollabile.<br><br><li><b>Aumenta moderatamente</b> la velocità dell\'Impeto per ciascun Impeto consecutivo.</li> ","name":"Ratto infettato ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"Comunissimo sale marino che ha brevemente attraversato il mondo degli spiriti, processo che ne ha alterato le proprietà.<br><br><li><b>Aumenta moderatamente</b> la velocità di rotazione durante un Impeto.</li>","name":"Sali ombrosi ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"Un miscuglio di rose essiccate prese dal rarissimo bouquet della Luna Nuova.<br><br><li><b>Aumenta considerevolmente</b> la durata dello Schianto.</li>","name":"Tonico di rose ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"Un siero fatale per gli esseri umani. Stimola qualità benefiche in chi è... tutt\'altro che umano.<br><br><li>Avviare uno Schianto rivela l\'aura dei sopravvissuti entro <b>8 metri</b> dal luogo d\'urto per <b>3 secondi</b>.</li>","name":"Composto 21 ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"Un corvo morto che ha subito grottesche mutazioni tramite un siero.<br><br><li><b>Aumenta considerevolmente</b> la velocità dell\'Impeto per ciascun Impeto consecutivo.</li> ","name":"Corvo infettato ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"Un ormone prelevato dalla ghiandola surrenale di un soggetto reticente. \\nNonostante fornisca una scarica di energia, può far stancare chi lo usa.<br><br><li><b>Riduce enormemente</b> la velocità di rotazione durante l\'Impeto.</li><li><b>Aumenta notevolmente</b> la velocità di rigenerazione dei token.</li><li><b>Aumenta</b> la quantità di token Impeto di <b>2.</b></li><li><b>Aumenta enormemente</b> il massimo angolo di visione durante l\'Impeto.</li><br><br><span class=\\"FlavorText\\">\\"Ti prego, non farlo...\\"</span>\\"","name":"Fiala di adrenalina ","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"Il diario di un uomo che afferma di aver fatto ritorno dal Vuoto. Le informazioni contenute comprendono applicazioni pratiche.<br><br><li>Ricevi l\'effetto <b>Impercettibile</b> durante l\'Impeto.</li><br>","name":"Diario di Vigo ","flavor":"\\"In una discarica di sogni infranti e infinita routine, l\'uomo con una via d\'uscita è un dio.\\" - Talbot Grimes","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"Talbot usò questa pietra per incidere sulle mura della fumeria quella che considerava la sua ricerca.<br><br><li>Colpire un sopravvissuto con un Impeto letale invocherà l\'Entità per bloccare i bancali entro un raggio di <b>12 metri</b> dalla tua posizione per <b>6 secondi</b>.</li><br>","name":"Pietra evocativa ","flavor":"\\"La morte è solo l\'inizio.\\"","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"Una sostanza chimica estratta dalla ghiandola pineale di un sopravvissuto morto di recente.<br><br><li>Durante un Impeto, appena entri nel raggio di <b>16 metri</b> da un sopravvissuto che ripara o cura, attiva un Test Abilità <b>straordinariamente</b> difficile per quel sopravvissuto. Attivabile una sola volta per ciascun sopravvissuto e per ciascun Impeto. Non si attiva per un Impeto avviato entro <b>16 metri</b> dal sopravvissuto.</li><br>","name":"Elemento chimico dell\'anima ","flavor":"\\"... si sospetta causi alterazioni atipiche nell\'attività ritmica neurale.\\" - Libro scolastico misterioso senza etichetta","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"Un anello regalato ai neolaureati in chimica presso l\'Università di Medicina di Londra, come segno della loro irrefrenabile ambizione.<br><br><li>Colpire un sopravvissuto con un Impeto letale ricaricherà immediatamente tutti i token Impeto.</li><br>","name":"Anello dell\'Alchimista ","flavor":"\\"Lo studente è accusato di sottrazione di cadaveri a scopo di ricerca scientifica non autorizzata.\\" - Monito accademico di Talbot Grimes, 1838","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"Una targhetta da laboratorio in un materiale simile al vetro, plasmato dalla nebbia. Forse un dono dall\'Entità o magari un crudele scherzo per etichettare la Piaga, come lui in passato fece con gli altri.<br><br><li>Dopo aver consumato tutti i token Impeto, l\'ultimo Impeto letale riduce i sopravvissuti in fin di vita.</li><br>","name":"Targhetta della Piaga iridescente","flavor":"\\"Il progresso richiede un cambio radicale.\\" - Talbot Grimes","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"Il penultimo tentativo di Talbot di formulare un siero. Non gli rese la fuga più facile, ma ebbe potenti effetti collaterali.<br><br><li>I sopravvissuti entro <b>16 metri</b> da uno Schianto subiranno \\nl\'effetto <b>Rallentamento</b> per <b>3 secondi</b>.</li><li>Distruggere pallet o muri che si possono rompere li annienterà e stordirà La Piaga per<b>1.5 secondi.</b></li><br><br><span class=\\"FlavorText\\">\\"Il tempo \\nstringe. Questa è la volta buona...\\" - Talbot Grimes</span>","name":"Composto 33 ","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"Una minuscola spada giocattolo, lunga appena qualche centimetro. Victor la impugnava e si galvanizzava potentemente.<br><br><li><b>Riduce leggermente</b> il tempo per caricare il Balzo.</li>","name":"Spada giocattolo","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"Charlotte pianse la morte di Victor in tanti modi. Le unghie iniziarono a staccarsi dalle mani annerite di lui, così lei ne conservò una per ricordo.<br><br><li><b>Riduce moderatamente</b> il tempo necessario a Victor per separarsi da Charlotte.</li>","name":"Unghietta","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"Una bottiglia in metallo con del latte ormai irrancidito. Victor non la smetteva di urlare, ma si zittì del tutto appena vide che era ora della pappa.<br><br><li><b>Aumenta leggermente</b> il raggio degli strilli di Victor.</li>","name":"Latte rancido","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"Una statuina in legno che Victor aveva adocchiato al mercato. Si mise a strillare finché sua madre non gliela rubò, ma per poco non si fecero beccare.<br><br><li>Mostra la destinazione di un Balzo.</li>","name":"Statuina a forma di gatto","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"Un guanto appartenuto alla madre dei Gemelli. In momenti disperati, veniva tenuto sulla bocca di Victor per impedirgli di emettere suoni.<br><br><li><b>Aumenta moderatamente</b> il raggio degli strilli di Victor.</li>","name":"Guanto di Madeleine","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"Il candelabro che Victor ribaltò incendiando tutti i suoi rapitori. Simbolo della sua grande tenacia.<br><br><li><b>Aumenta leggermente</b> il tempo necessario ai sopravvissuti per schiacciare Victor.</li>","name":"Candelabro cerimoniale","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"Un bulbo oculare appartenente a un gattino divorato dalla famiglia Deshayes in un attacco di fame. Victor lo nascose da sua madre e lo usò come giocattolo.<br><br><li>Gli strilli di Victor si interrompono quando carichi il Balzo al massimo.</li>","name":"Occhio di gatto","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"Un cappuccio di uno degli uomini che davano la caccia a Charlotte. Poco dopo, divenne lui la preda.<br><br><li><b>Riduce leggermente</b> il tempo necessario a Charlotte per risvegliarsi dallo stato di sonnolenza.</li>","name":"Cappuccio nero insanguinato","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"Due dentini che Victor perse molto tempo fa. Straordinariamente appuntiti.<br><br><li>I sopravvissuti che rimuovono Victor subiscono l\'effetto <b>Accecamento</b> per <b>15 secondi.</b></li>","name":"Denti da latte","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"Il sonaglio con una rozza incisione che Victor desiderava tanto, finché sua madre non lo rubò per lui. Decisamente troppo pesante per un bambino.<br><br><li>I sopravvissuti che rimuovono Victor subiscono l\'effetto <b>Sconforto</b> per <b>20 secondi.</b></li> ","name":"Sonaglio pesante","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"Un biscotto raffermo non lievitato che Madeleine rubò a un mercato cittadino. Non era molto, ma meglio di niente...<br><br><li><b>Riduce leggermente</b> il tempo di ricarica del Balzo.</li>","name":"Biscotto raffermo","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"Una poltiglia appiccicosa e vomitevole che ricopriva i Deshayes durante un tentativo di fuga per le fogne cittadine.<br><br><li><b>Aumenta leggermente</b> il tempo necessario ai sopravvissuti per rimuovere Victor.</li>","name":"Melma fognaria","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"Ago arrugginito","name":"Ago arrugginito","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"Uno straccio indossato da Madeleine poco prima del trapasso. I Gemelli lo tennero come ricordo.<br><br><li><b>Aumenta leggermente</b> la velocità di Victor.</li><br>","name":"Sciarpa di Madeleine","flavor":"\\"... sarà dunque documentato come servigio per un bene superiore, nonché sterminio di ogni male.\\" - Indagine sulla morte di Madeleine Deshayes","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"Un soldatino che Victor stringeva negli attimi di paura. Non si sa perché, ma Charlotte ne era invidiosa.<br><br><li>Se un sopravvissuto schiaccia Victor mentre è in stato di quiete, la sua aura verrà rivelata per <b>6 secondi.</b></li><br>","name":"Soldatino di Victor","flavor":"\\"Gnn... Gnn... Nio baua maaa gno boio... - Victor Deshayes","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"Una trottola in legno con cui giocavano entrambi i Gemelli, anche se Victor la voleva tutta per sé. Imparò che per ottenere tutto ciò che voleva bastava stringere le cose e strillare come un matto.<br><br><li>I sopravvissuti colpiti dal Balzo di Victor fanno cadere tutti gli oggetti trasportati.</li><br>","name":"Trottola giocattolo","flavor":"\\"Shhh... Shhh... Va bene, è tuo.\\" - Charlotte Deshayes","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"Uno stufato di verdure raccolte qua e là e arricchito con muschio e corteccia d\'albero per dare una falsa sensazione di sazietà.<br><br><li><b>Aumenta moderatamente</b> la velocità di Victor.</li><br>","name":"Stufato selvatico","flavor":"\\"Mangia... mangia, figlio mio. Manda giù e ti sentirai meglio.\\" - Madeleine Deshayes","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"Uno dei pochi lussi che Madeleine poté concedersi nella sua vita precedente. Emette una fragranza piacevolissima.<br><br><li>I sopravvissuti entro il raggio degli strilli di Victor subiscono l\'effetto <b>Ignaro</b>.</li><br>","name":"Goccia di profumo","flavor":"\\"Fate attenzione alle streghe e ai loro intrighi, ché sovente si servono della purezza nel cuore degli uomini.\\" - Storia di streghe e demoni (1602)","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"Un lembo di stoffa ruvida che Charlotte metteva in bocca a cinque anni. Le impediva di urlare quando i cacciatori di streghe si avvicinavano.<br><br><li>Charlotte riceve l\'effetto <b>Impercettibile</b> per <b>20 secondi</b> dopo che si è risvegliata dallo stato di quiete.</li><br>","name":"Straccio sordina","flavor":"\\"Madre, questo gioco non mi piace più...\\" - Charlotte Deshayes","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"Un ciondolo in simil vetro forgiato dalla nebbia stessa. Su di esso vi è un ritratto di Madeleine Deshayes, sebbene con un\'aria piuttosto inquietante.<br><br><li>Se un sopravvissuto schiaccia Victor mentre è in stato di quiete, subisce l\'effetto <b>Vulnerabilità</b> per <b>30 secondi.</b></li><br>","name":"Ciondolo iridescente","flavor":"\\"Il vostro legame non è una maledizione, amori miei. È la vostra forza.\\" - Madeleine Deshayes","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"Un marsupio con una serie di tasche nascoste, impiegato dagli aspiranti maghi e da chi ha qualcosa da nascondere.<br><li><b>Aumenta</b> di <b>10</b> il numero massimo di trincianti da portare.</li><li>Inizia la prova con <b>10</b> trincianti extra.</li>","name":"Marsupio ingannevole","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"Coltelli incrostati di sangue e ormai deteriorati. Occupano un posto speciale nel cuore di Ji-Woon, che li usava nei suoi primi omicidi.<br><li>Ottieni il <b>100%</b> di Punti Sangue bonus per gli eventi <b>Standing Ovation</b>.</li><li><b>Aumenta moderatamente</b> l\'indicatore di Mutilazione di ciascun sopravvissuto.</li>","name":"Coltelli souvenir","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"Un giro di accordi accattivante su cui però Ji-Woon non è mai riuscito a scrivere nulla.<br><li><b>Aumenta leggermente</b> la velocità di movimento quando lanci i trincianti.</li>","name":"Giro omicida","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"Cavi bruciati dall\'incendio che uccise quattro dei cinque membri dei NO SPIN. La loro morte è la causa della nascita dell\'Ingannatore.<br><li><b>Aumenta leggermente</b> la durata dell\'Evento di punta.</li>","name":"Cavi infernali","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"Un drink inventato in un modesto bar di Changwon, diventato il preferito di Ji-Woon.<br><li><b>Aumenta moderatamente</b> la durata dell\'Evento di punta.</li>","name":"Tequila Moonrock","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"Un singolo underground prodotto da Ji-Woon prima della fama. Solo i più accaniti fan dei NO SPIN posseggono questa gemma nascosta.<br><li><b>Aumenta leggermente</b> il tempo prima che l\'indicatore di Mutilazione inizi a svuotarsi.</li>","name":"Singolo On Target","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"Il primissimo coltello da lancio di Ji-Woon. Un regalo da parte di suo padre, il quale sperava che montasse uno spettacolo per i clienti del loro ristorante di famiglia.<br><li><b>Aumenta leggermente</b> la durata dello svuotamento dell\'indicatore di Mutilazione di ciascun sopravvissuto quando non hai più trincianti.</li>","name":"Coltello fortunato","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"La firma del celebre Ingannatore. Dopo qualche centinaio di autografi, il polso gli doleva come non mai, ma l\'idea di essere così ricercato lo gasava parecchio.<br><li><b>Aumenta leggermente</b> la velocità iniziale di lancio dei trincianti.</li>","name":"Autografo di Ji-Woon","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"Le scarpe indossate da Ji-Woon durante la clip musicale di One Caged Heart. Consente movimenti agili ed eleganti sulle punte.<br><li><b>Aumenta moderatamente</b> la velocità di movimento mentre lanci i trincianti.</li>","name":"Scarpe One Caged Heart","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"Un orologio da taschino indossato da Ji-Woon durante il live di I\'ll Be Waiting for You. Un oggetto di scena che non funziona e non funzionerà mai.<br><li><b>Aumenta considerevolmente</b> la durata dello svuotamento dell\'indicatore di Mutilazione di ciascun sopravvissuto quando non hai più trincianti.</li>","name":"Orologio I\'ll Be Waiting for You","flavor":"\\"Don’t run away<br>Don\'t say we’re through<br>No way to escape this<br>I\'ll be waiting for you\\"<br>- \\"I\'ll Be Waiting for You\\" dei NO SPIN","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"Un polsino che Ji-Woon indossò durante le riprese della clip musicale \\"Ripper\\". Il caso volle che questo modello stabilizzasse il polso meglio di qualunque tutore medico.<br><li><b>Aumenta moderatamente</b> il tempo prima che l\'indicatore di Mutilazione inizi a svuotarsi.</li>","name":"Polsino Ripper","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"Un audio contenente le urla graffianti delle vittime. Ji-Woon le incluse in uno dei suoi brani più celebri.<br><li><b>Riduce moderatamente</b> l\'indicatore di Mutilazione di ciascun sopravvissuto.</li>","name":"Omicidio melodioso","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"Una lattina in edizione limitata che promuove i NO SPIN. Caffeina e zuccheri a palla.<br><li><b>Aumenta moderatamente</b> la velocità dl lancio iniziale.</li>","name":"Bibita Frizz-Spin","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"Un boa che Ji-Woon avvolgeva intorno al collo squarciato della povera vittima. Nasconde svariate tasche.<br><li><b>Aumenta</b> di <b>15</b> il numero massimo di trincianti da portare.</li><li>Inizia la prova con <b>15</b> trincianti extra.</li>","name":"Boa sanguinoso","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"Dei coltelli che solo chi ha poca immaginazione considera fallati. Da giovane, Ji-Woon sbalordiva gli spettatori coi suoi giochetti.<br><li>I trincianti rimbalzano nell\'ambiente due volte.</li><li>Se colpiscono dopo il rimbalzo, conferiscono Punti Sangue bonus.</li>","name":"Lame da show","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"Il primo album dell\'Ingannatore. I toni ruvidi e brutali hanno suscitato opinioni contrastanti tra i fan, a dispetto del plauso della critica.<br><li>I trincianti si frantumano quando colpiscono elementi dell\'ambiente, infliggendo il <b>50% di Mutilazione</b> ai sopravvissuti vicini.</li>","name":"Album Edge of Revival","flavor":"\\"You whisper on me<br>Warm as can be<br>Burning each breath<br>Till I can\'t breathe\\"<br>- \\"Whispers of Warmth\\" dell\'Ingannatore","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"Gemelli conficcati nelle orbite di un sasaeng che aveva commesso l\'errore di stalkerare Ji-Woon. Pulendo il sangue, il riflesso è cristallino.<br><li>Quando all\'indicatore di Mutilazione di un sopravvissuto manca un colpo di trinciante per raggiungere il massimo, viene rivelata l\'aura di quel sopravvissuto per <b>6 secondi</b>.</li>","name":"Gemelli di diamante","flavor":"\\"Shhh... Non devi più vedere il tuo sangue.\\" - Ji-Woon Hak","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"Il primo singolo dei NO SPIN dopo l\'arrivo di Ji-Woon, salito in vetta alle classiche coreane ottenendo un All-Kill.<br><li>I trincianti trafiggono i sopravvissuti.</li><li>Gli altri sopravvissuti che vengono trafitti dallo stesso trinciante ricevono il <b>50% di Mutilazione</b>.</li>","name":"Singolo Cut Thru U","flavor":"\\"Can\'t stop this love<br>That\'s tearing your heart<br>Wherever you go<br>I will cut you apart\\"<br> - \\"Cut Thru U\\" dei NO SPIN","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"Una foto in simil vetro forgiata dalla Nebbia stessa. Gli occhi di Ji-Woon luccicano olograficamente sul suo volto sorridente.<br><li>Quando all\'indicatore di Mutilazione di un sopravvissuto manca un colpo di trinciante per raggiungere il massimo, infligge a quel sopravvissuto l\'effetto <b>Vulnerabilità</b>.</li>","name":"Fototessera iridescente","flavor":"\\"Va tutto bene, urla il mio nome. Voglio sentire ogni sensazione risvegliata dal dolore.\\" - Ji-Woon Hak","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"La raccolta delle ultime registrazioni vocali delle vittime di Ji-Woon, masterizzata in versione vinile. Così forte da essere terrificante.<br><li>La Mutilazione causata dai trincianti inizia come minimo al <b>50%</b>, ma dipende dalla vicinanza al bersaglio.</li><li>Ogni colpo di trinciante aumenta la Mutilazione causata fino a un massimo di <b>200%</b>.</li><li>Se un trinciante non va a segno, la Mutilazione torna ai valori iniziali.</li>","name":"Compilation Agonia","flavor":"\\"Ti prego, no... Non farmi del male... Non ries... Non...\\" - Voce non identificata","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"Un braccialetto elettronico targato Umbrella dato ai visitatori. Funge anche da dispositivo di localizzazione.<li><b>Amplia moderatamente</b> il raggio di rilevamento degli zombi.</li>","name":"Braccialetto da visitatore","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"Un manuale che racchiude tutte le tecniche di combattimento ravvicinato insegnate alla S.T.A.R.S., a cura di Chris Redfield.<li>Dopo aver colpito un sopravvissuto, l\'aura degli zombi diventa gialla per <b>6 secondi</b>.</li>","name":"Manuale di combattimento S.T.A.R.S.","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"Dispositivo medico che non se l\'è vista bella durante il caos che ha investito Raccoon City.<li><b>Aumenta moderatamente</b> il tempo necessario ai sopravvissuti per iniettarsi il vaccino.</li><li><b>Aumenta leggermente</b> la durata dell\'Istinto del killer quando i sopravvissuti usano il vaccino.</li>","name":"Siringa rovinata","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"Il piccolo intestino di Brian Irons, capo della RPD. Uno spettacolo succulento per gli zombi.<li><b>Aumenta leggermente</b> la velocità di movimento degli zombi.</li>","name":"Intestino di Brian","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"Il cuore di uno zombi smembrato. Rientra tra i rifiuti pericolosi per l\'abbondanza di virus contenuto.<li><b>Aumenta moderatamente</b> il tasso di mutazione quando annienti gli zombi con la Frustata di tentacolo.</li><br>","name":"Cuore di zombi","flavor":"\\"Parlare con questo non serve a niente.\\" - Leon S. Kennedy","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"Di Mikhail era rimasto ben poco dopo l\'esplosione, tranne l\'occhio sinistro: una leccornia per gli zombi.<li><b>Aumenta moderatamente</b> la velocità di movimento degli zombi.</li>","name":"Occhio di Mikhail","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"Il sangue contaminato di un poliziotto di Raccoon City.<li><b>Aumenta moderatamente</b> il tasso di mutazione quando colpisci i sopravvissuti con la Frustata di tentacolo.</li><br>","name":"Sangue di Marvin","flavor":"\\"Sappi solo che, se non farai attenzione, questo posto ti divorerà vivo.\\" - Marvin Branagh","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"Un ormone che acuisce i sensi e predispone il corpo allo scontro fisico.<li><b>Aumenta considerevolmente</b> la durata dell\'Istinto del killer quando i sopravvissuti usano il vaccino.</li>","name":"Iniettore di adrenalina","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"Un braccialetto elettronico targato Umbrella dato in dotazione agli amministratori della struttura. Consente l\'accesso alle aree protette, ma funge anche da dispositivo di localizzazione.<li><b>Amplia considerevolmente</b> il raggio di rilevamento degli zombi.</li>","name":"Braccialetto da amministratore","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"Un campione danneggiato del Tyrant T-002 morto in combattimento. Riporta segni di ustioni profonde.<li><b>Aumenta moderatamente</b> il tasso di mutazione quando annienti gli zombi con la Frustata di tentacolo.<li>Riduce moderatamente il tempo di rigenerazione degli zombi.","name":"Sangue di Tyrant","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"Un campione del virus T sviluppato dalla Umbrella Corporation. Provoca mutazioni estreme e gravi danni cerebrali nei soggetti esposti.<li><b>Aumenta considerevolmente</b> il tasso di mutazione quando annienti gli zombi con la Frustata di tentacolo. ","name":"Campione di virus T","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"Un ormone con leggere proprietà calmanti da usare quando non si deve fare rumore.<li>Ricevi l\'effetto <b>Impercettibile</b> per <b>15 secondi</b> quando viene annientato uno zombi.</li>","name":"Iniettore di serotonina","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"I resti tutti aggrovigliati di una pianta esposta al virus T, responsabile della morte di uno dei ricercatori a capo del suo stesso sviluppo.<li><b>Aumenta considerevolmente</b> il tempo necessario ai sopravvissuti per aprire le casse di rifornimento.","name":"Tralci di pianta 43 ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"Una lingua prensile e appiccicosa che si avvolge rapidamente a ogni cosa che tocca.<li><b>Aumenta moderatamente</b> la durata dell\'effetto <b>Rallentamento</b> dopo che i sopravvissuti vengono contagiati.</li><br>","name":"Lingua lambente","flavor":"\\"È... un incubo.\\" - Claire Redfield","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"Un parassita impiegato nello sviluppo del Nemesis T-Type, in grado di assoggettare il cervello dell\'ospite.<li>I sopravvissuti che vengono contagiati subiscono l\'effetto di <b>Ignaro</b> per 60 secondi.","name":"Parassita NE-α","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"Irrimediabilmente spiaccicato e intriso del sangue di un recente scontro. Ciononostante, emana un profumino niente male.<li>Rivela l\'aura di un sopravvissuto per <b>12 secondi</b> dopo aver sbloccato una cassa di rifornimento.</li>","name":"Panino di Jill","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"Chi li salverà ora? In questo nastro di inchiostro asciutto c\'è qualcosa che galvanizza gli zombi.<li><b>Riduce considerevolmente</b> il tempo di rigenerazione degli zombi.</li><li>Aumenta moderatamente la velocità di movimento degli zombi.</li><li>Quando vengono riparati <b>5</b> generatori, tutti gli zombi annientati si rigenerano in un\'area d\'uscita.</li><br>","name":"Nastro di inchiostro asciutto","flavor":"\\"Senti, che sia ben chiaro... È l\'ultima volta!\\" - Jill Valentine","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"Una moneta spaccata in due raffigurante un uccello cinto da una corona d\'alloro.<li>Rimuove <b>1</b> cassa di rifornimento dalla prova.</li><br>","name":"Moneta rotta della riabilitazione","flavor":"\\"Non me l\'aspettavo così il primo giorno.\\" - Leon S. Kennedy","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"Un simbolo di speranza per Raccoon City, ormai rasa al suolo.<li><b>Aumenta straordinariamente</b> la velocità di movimento degli zombi per <b>30 secondi</b> dopo che un generatore viene riparato.</li><br>","name":"Distintivo S.T.A.R.S. rotto","flavor":"\\"S.T.A.R.S...\\" - Nemesis","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"Un distintivo in simil vetro forgiato dalla Nebbia stessa. Rappresenta una grande azienda che si spinse oltre i limiti etici e umani della scienza.<li>I sopravvissuti subiscono l\'effetto di <b>Vulnerabilità</b> per <b>12 secondi</b> quando usano un vaccino.</li><br>","name":"Distintivo Umbrella iridescente","flavor":"\\"Impegno, onestà, integrità. Sono questi i valori chiave alla base della Umbrella Corporation.\\" - Dottor Matt Gorkis","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/it/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Conferisce il <b>50%</b> di bonus Punti Sangue nella categoria Brutalità.<br><li>Cumulabile.</li>","name":"Corona dei Traupidi","flavor":"\\"Realizzata a mano con bastoncini insanguinati e viscere, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"Conferisce il <b>75%</b> di bonus Punti Sangue nella categoria Brutalità.<br><li>Cumulabile.</li>","name":"Corona dei Traupidi Devoti","flavor":"\\"Devotamente realizzata a mano con bastoncini insanguinati e viscere, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue nella categoria Brutalità.<br><li>Cumulabile.</li>","name":"Corona dei Traupidi Ardenti","flavor":"\\"Realizzata a mano con passione ardente e imperitura, utilizzando bastoncini insanguinati e viscere, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"Conferisce il <b>50%</b> di bonus Punti Sangue nella categoria Dissimulazione.<br><li>Cumulabile.</li>","name":"Corona del Corvo","flavor":"\\"Realizzata a mano con carboni e rametti anneriti, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"Conferisce il <b>75%</b> di bonus Punti Sangue nella categoria Dissimulazione.<br><li>Cumulabile.</li>","name":"Corona del Corvo Devoto","flavor":"\\"Devotamente realizzata a mano con carboni e rametti anneriti, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue nella categoria Dissimulazione.<br><li>Cumulabile.</li>","name":"Corona del Corvo Ardente","flavor":"\\"Realizzata a mano con passione ardente e imperitura, utilizzando carboni e rametti anneriti, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"Conferisce il <b>50%</b> di bonus Punti Sangue nella categoria Caccia.<br><li>Cumulabile.</li>","name":"Corona del Gufo Maculato","flavor":"\\"Realizzata a mano con metalli taglienti, corde e piume, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"Conferisce il <b>75%</b> di bonus Punti Sangue nella categoria Caccia.<br><li>Cumulabile.</li>","name":"Corona del Gufo Maculato Devoto","flavor":"\\"Devotamente realizzata a mano con metalli taglienti, corde e piume, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue nella categoria Caccia.<br><li>Cumulabile.</li>","name":"Corona del Gufo Maculato Ardente","flavor":"\\"Realizzata a mano con passione ardente e imperitura, utilizzando metalli taglienti, corde e piume, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"Conferisce il <b>50%</b> di bonus Punti Sangue nella categoria Sacrificio.<br><li>Cumulabile.</li>","name":"Corona dell\'Averla","flavor":"\\"Realizzata a mano con bastoncini, corde e ossa, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"Conferisce il <b>75%</b> di bonus Punti Sangue nella categoria Sacrificio.<br><li>Cumulabile.</li>","name":"Corona dell\'Averla Devota","flavor":"\\"Devotamente realizzata a mano con bastoncini, corde e ossa, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue nella categoria Sacrificio.<br><li>Cumulabile.</li>","name":"Corona dell\'Averla Ardente","flavor":"\\"Realizzata a mano con passione ardente e imperitura, utilizzando corde e ossa, questa corona invoca la benedizione dell\'Entità per un maggiore spargimento di sangue.\\"","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"Conferisce il <b>25%</b> di bonus Punti Sangue in tutte le categorie.<br><li>Cumulabile.</li>","name":"Guscio vuoto","flavor":"\\"Un bozzolo non identificabile lesionato da qualunque cosa ci fosse al suo interno.\\"","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue in tutte le categorie.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Budino del sopravvissuto","flavor":"\\"Un budino parecchio salato...\\"","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"Invoca l\'Entità per impedire la comparsa di <b>2</b> casse.<br><li>Cumulabile.</li>","name":"Moneta tagliata","flavor":"\\"Due metà di una moneta di metallo spesso.\\"","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"Invoca l\'Entità per impedire la comparsa di <b>1</b> cassa.<br><li>Cumulabile.</li>","name":"Moneta graffiata","flavor":"\\"Una moneta rovinata di origine ignota.\\"","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"Invoca l\'Entità per <b>diminuire leggermente</b> la <b>distanza</b> dei ganci sacrificali apparsi nel mondo.<br><li>Cumulabile.</li>","name":"Legno di quercia ammuffito","flavor":"\\"Un pezzo di legno di quercia, umido e putrescente, ricoperto di muffa.\\"","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"Invoca l\'Entità per <b>diminuire sensibilmente</b> la <b>distanza</b> fra i ganci sacrificali sparsi nel mondo.<br><li>Cumulabile.</li>","name":"Legno di quercia marcio","flavor":"\\"Un pezzo di legno di quercia in decomposizione sul quale sono stati intagliati strani segni.\\"","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"Invoca l\'Entità per <b>diminuire decisamente</b> la <b>distanza</b> fra i ganci sacrificali sparsi nel mondo.<br><li>Cumulabile.</li>","name":"Legno di quercia putrido","flavor":"\\"Un pezzo di legno di quercia rovinato dal quale cola un liquido nero putrescente.\\"","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"Conferisce l\'abilità di <b>uccidere l\'ultimo sopravvissuto</b> con le tue mani durante la prossima prova.<br><li>Segreto.</li>","name":"Memento Mori di legno di cipresso","flavor":"\\"Hai lavorato bene, l\'ultimo è tuo.\\"","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"Conferisce l\'abilità di <b>uccidere un sopravvissuto</b> che ha raggiunto il <b>secondo stato appeso al gancio</b> con le tue mani durante la prossima prova.<li>Segreto.</li>","name":"Memento Mori di avorio","flavor":"\\"Concedimi il piacere di lasciarmene uccidere uno.\\"","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"Conferisce l\'abilità di <b>uccidere tutti i sopravvissuti</b> che hanno raggiunto il <b>secondo stato appesi al gancio</b> con le tue mani durante la prossima prova.<li>Segreto.</li>","name":"Memento Mori in ebano","flavor":"\\"Potrei giurare che ha parlato alla bestia. Si è fermata come se stesse ascoltando con calma il fruscio delle foglie e poi... ha iniziato a sorridere.\\"","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"Tutti i sopravvissuti cominciano la prova separatamente.<br><li>Segreto.</li>","name":"Sudario della Separazione","flavor":"\\"Un sottile sudario nero, che sta andando in brandelli.\\"","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/it/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Ogni volta che la riparazione di un generatore è completata, i sopravvissuti entro <span class=\\"Highlight1\\">{0} metri</span> da quel generatore vengono rivelati per <span class=\\"Highlight2\\">{1} secondi</span>.<br>Quando la riparazione dell\'ultimo generatore viene completata, le aure di tutti i sopravvissuti sono rivelate per <span class=\\"Highlight3\\">{2} secondi</span>.","name":"Sussurro amaro","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Rivela le aure dei sopravvissuti in fin di vita in un raggio di <span class=\\"Highlight1\\">{0} metri</span>.","name":"Cacciatore di cervi","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"La tua emanazione terrificante colpisce a distanza soprannaturale. Il tuo raggio di terrore aumenta del <span class=\\"Highlight1\\">{0}%</span>. Ottieni il <span class=\\"Highlight2\\">{1}%</span> di Punti Sangue in più per azioni nella categoria Dissimulazione.","name":"Inquietante","flavor":"\\"Assapora la loro paura.\\"","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"Sblocca l\'abilità di furtività.<br><br>Restando fermo per <span class=\\"Highlight1\\">{0} secondi</span> diventi <b>Impercettibile</b> finché non ti muoverai nuovamente.","name":"Insidioso","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"Una maledizione il cui potere ha origine dalla speranza. Il tuo totem Maledizione ti rinvigorisce quando i sopravvissuti sono sul punto di scappare.<br>Una volta che i cancelli d\'uscita vengono alimentati, se un totem spento è presente sulla mappa, questa maledizione verrà applicata ad esso.</br><br>Se la maledizione è attiva,<li>i sopravvissuti subiscono l\'effetto della <b><i>Vulnerabilità</i></b>.</li><li>La tua velocità di movimento aumenta del <span class=\\"Highlight1\\">{0}%</span></li><br>Gli effetti della Maledizione persistono finché il relativo totem Maledizione resta in piedi.<br>","name":"Maledizione: Nessuno sfugge alla Morte","flavor":"\\"E la bestia divenne più veloce e potente, come se le fruste tenebrose dell\'Entità stessero flagellando il suo dorso.\\"","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"Una maledizione il cui potere ha origine dalla speranza. Le false speranze dei sopravvissuti ti riempiono di adrenalina e rafforzano i tuoi totem. Ottieni un token per ogni totem spento e totem Maledizione rimasto sulla mappa. <br><li>Ottieni il <span class=\\"Highlight1\\">{0}%</span> in più di Punti Sangue per ogni token per le azioni della categoria del Cacciatore.</li><li>La velocità di purificazione dei sopravvissuti è ridotta del <span class=\\"Highlight2\\">{1}%</span> per ogni token.</li><li>Ricevi una notifica quando qualcuno inizia ad agire su un totem Maledizione.</li><br><i>Gli effetti della Maledizione persistono finché il relativo totem Maledizione resta in piedi.</i>","name":"Maledizione: Il brivido della Caccia","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"La tua cura fervente per i ganci trovati nel seminterrato ha suscitato l\'interesse dell\'Entità. Ai ganci del seminterrato sono conferiti i seguenti bonus:<br><li>Avanzamento dell\'Entità più veloce del <span class=\\"Highlight1\\">{0}%</span>.</li><li>Difficoltà dei tentativi di fuga incrementata del <span class=\\"Highlight2\\">{1}%</span>.</li><li>Penalità sui tentativi di fuga falliti incrementata del <span class=\\"Highlight3\\">{2}%</span>.</li>","name":"Reliquiario mostruoso","flavor":"\\"Allora saprai che non c\'è via d\'uscita, quando, appeso nell\'oscurità, guarderai in faccia le tenebre.\\"","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"Sai dove colpire per farli sanguinare. Le ferite inflitte dagli <i>attacchi base</i> a segno causano gli effetti <b>Lacerazione</b> ed <b>Emorragia</b>. <b>Emorragia</b> aumenta <span class=\\"Highlight\\">{0}</span> la frequenza di sanguinamento del sopravvissuto.<br><b>Emorragia</b> causata dal <i>Macellaio approssimativo</i> viene rimossa quando il sopravvissuto guarisce completamente.","name":"Macellaio approssimativo","flavor":"\\"Fa parte della sua sadica natura. Non sono previste uccisioni veloci, perché si diletta nello spettacolo osceno della nostra agonizzante sofferenza.\\"","tiers":[["leggermente"],["moderatamente"],["considerevolmente"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"I corvi di tutto il mondo possono comunicare con te. <span class=\\"Highlight1\\">{0}%</span> delle volte, ricevi un indizio visivo dai corvi gracchianti in un raggio di <span class=\\"Highlight2\\">{1} metri</span>.<br><i>Spie dalle Tenebre</i> ha un tempo di ricarica di <span class=\\"Highlight3\\">{2} secondi.</span> ","name":"Spie dalle Ombre","flavor":"\\"Nelle ombre tormentano, sfregiando le nostre menti a ogni grido.\\"","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"Recuperi più velocemente dagli attacchi mancati sferrati con la tua arma principale. Il tempo di recupero dopo gli <i>attacchi base</i> mancati diminuisce del <span class=\\"Highlight1\\">{0}%</span>.","name":"Inarrestabile","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"Hai una comprensione rudimentale della voce dell\'Entità. Sporadicamente percepisci il sussurro dell\'Entità quando sei in un raggio di <span class=\\"Highlight1\\">{0} metri</span> da un sopravvissuto.","name":"Sussurri","flavor":"\\"Non è chiaro quali siano le motivazioni della Nebbia, ma è innegabile che essa, a volte, sia dalla parte della bestia.\\" -Appunti","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"Sei profondamente sensibile al respiro della tua preda. I respiri dei sopravvissuti sofferenti sono più rumorosi del <span class=\\"Highlight1\\">{0}%</span> e i respiri normali sono più rumorosi del <span class=\\"Highlight2\\">{1}%</span>.","name":"Stridore","flavor":"\\"Se non ti fermi e trattieni il respiro… lo farà lei.\\"","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"Il loro coraggio si affievolisce al cospetto della loro incontrovertibile mortalità.<br>Tutti i sopravvissuti ricevono una penalità pari a <span class=\\"Highlight1\\">{0}%</span> fino a un massimo di <span class=\\"Highlight1\\">{1}%</span> alla velocità di riparazione, sabotaggio e purifica dei totem per ciascun sopravvissuto ferito, in fin di vita o appeso a un gancio.","name":"Tanatofobia","flavor":"\\"Lei gioca con noi e gioisce della nostra sofferenza.\\"","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Ti vengono rivelate le aure di sopravvissuti che stanno curando qualcuno o che stanno ricevendo delle cure in un raggio di <span class=\\"Highlight1\\">{0} metri</span>.","name":"Vocazione di un\'Infermiera","flavor":"\\"Ancora legata ai frammenti della sua vita precedente, è attratta da coloro i quali necessitano d\'aiuto .\\"","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"La tua sola presenza infonde grande paura. I sopravvissuti nel tuo raggio di terrore hanno il <span class=\\"Highlight1\\">{0}%</span> di probabilità in più di innescare il Test Abilità in fase di riparazione o guarigione. L\'area di successo del Test Abilità innescato diminuisce del <span class=\\"Highlight2\\">{1}%</span>.","name":"Presenza inquietante","flavor":"\\"Siamo succubi della sua presenza.\\"","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"La tua notevole forza ti permette di annientare le difese della tua preda. Distruggi <b>i bancali, i muri frantumabili e i generatori</b> caduti con un incremento della velocità del <span class=\\"Highlight1\\">{0}%</span>.","name":"Forza brutale","flavor":"\\"C\'è qualcosa in più dei meri muscoli. Un oscuro potere motiva la bestia.\\"","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"Ti eccita il pensiero di appendere al gancio la tua preda. Aumenta la tua velocità di movimento mentre trasporti corpi del <span class=\\"Highlight1\\">{0}%</span>. Durante il trasporto di un corpo, il tuo raggio di terrore aumenta di <span class=\\"Highlight2\\">{1} metri</span>.","name":"Agitazione","flavor":"\\"A un certo punto, l\'eccitazione di appendere al gancio uno di noi diventa più importante che ucciderci.\\"","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"La tua acuta capacità di inseguimento ti permette di seguire le tracce lasciate dai sopravvissuti.<br>I segni di graffi lasciati dai sopravvissuti si genereranno <span class=\\"Highlight\\">{0}</span> più vicino.","name":"Predatore","flavor":"\\"Non smettere mai di muoverti. Spero che tu sia sempre a due passi di vantaggio dalla bestia.\\" - Appunti","tiers":[["leggermente"],["moderatamente"],["considerevolmente"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"Come un segugio con la cacciagione, senti l\'odore delle tracce di sangue a grande distanza. Le tracce di sangue fresco diventano <span class=\\"Highlight1\\">considerevolmente</span> più distinguibili e possono essere seguite per <span class=\\"Highlight2\\">{0} secondi</span> in più del normale.","name":"Segugio","flavor":"\\"Ciottoli scintillanti al chiaro di luna, la mia vita gocciola via in una pista così facile da seguire.\\"","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"Hai una vista acuta nel buio della notte. Il tuo campo visivo è di <span class=\\"Highlight2\\">{0}gradi</span> più ampio del normale. <br><i>Non cumulabile con altri incrementi al campo visivo.</i>","name":"Nato per le Tenebre","flavor":"\\"Brillando nel buio più pesto, i suoi occhi squarciano la notte e trafiggono la tua anima.\\"","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"Riesci a sopportare il dolore. Riduci la durata degli <b>stordimenti causati dai bancali</b> del <span class=\\"Highlight1\\">{0}%</span>.","name":"Resistente","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"A differenza di altre bestie della Nebbia, ti sei adattato alla luce. Sei immune all\'accecamento causato da torce, petardi, granate stordenti e mine esplosive. L\'aura dei sopravvissuti che cercano di accecarti viene rivelata per <span class=\\"Highlight1\\">{0} secondi.</span>","name":"Resistente alla Luce","flavor":"\\"Questi mostri... si adattano! E sviluppano strane nuove abilità.\\" - Dal Diario di Vigo","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"Quando i progressi di riparazione di un generatore raggiungono un totale di <span class=\\"Highlight1\\">{0}%</span>, viene riprodotta una notifica sonora e ricevi l\'effetto di <b>Impercettibile</b> per <span class=\\"Highlight2\\">{2} secondi</span>.","name":"Mastro ferraio","flavor":"\\"Il Mandriano realizza attrezzature impressionanti a partire da rottami. Strumenti per mutilarci in modi creativi...\\" - Appunti","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"Diventi <b>ossessionato</b> da uno dei sopravvissuti.<br>Ottieni un token per ogni <i>attacco base</i> a segno che non colpisce l\'ossessione. <br>Ogni token garantisce un tempo di ricarica dopo un <i>attacco base</i> a segno cumulabile ridotto del <span class=\\"Highlight1\\">{0}%</span>, e puoi ottenere fino a <span class=\\"Highlight2\\">{1}</span> token.<br>Colpire la tua ossessione con un <i>attacco base</i> ti farà perdere <span class=\\"Highlight3\\">{2}</span> token. <br>Se la tua ossessione viene sacrificata o uccisa, non potrai più ottenere token.<br><li><i>Il killer può essere <b>ossessionato</b> solo da un sopravvissuto per volta.</i></li>","name":"Conserva il meglio per la fine","flavor":"\\"La morte è arrivata nella tua cittadina, sceriffo.\\" - Dott. Sam Loomis","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"Diventi <b>ossessionato</b> da uno dei sopravvissuti.<br>Ogni volta che insegui la tua ossessione e te la lasci scappare, ricevi un token fino a un massimo di {0}.<br>Ogni token aumenta la tua velocità di movimento del <span class=\\"Highlight1\\">{1}%</span>.<br>Eseguire un <i>attacco base</i> o un <i>attacco speciale</i> utilizza un token.<br><li><i>Il killer può essere <b>ossessionato</b> solo da un sopravvissuto per volta.</i></li>","name":"Gioca con il tuo cibo","flavor":"\\"Ti sei preso gioco di loro, vero Michael? Ma non ci riuscirai con me.\\" –Dott. Sam Loomis","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"Diventi <b>ossessionato</b> da uno dei sopravvissuti.<br>La tua ossessione ottiene un bonus alla velocità d\'azione del <span class=\\"Highlight1\\">{0}%</span> per liberare o guarire altri sopravvissuti.<br>Ogni volta che appendi al Gancio un sopravvissuto che non sia l\'ossessione, l\'ossessione riceve un token, se è ancora viva.<br>Se l\'ossessione è ancora viva, tutti gli altri sopravvissuti ricevono una penalità del <span class=\\"Highlight2\\">{1}%</span> alla velocità di riparazione, guarigione e sabotaggio per ciascun token.<br><li><i>Il killer può essere ossessionato solo da un sopravvissuto per volta.</i></li>","name":"Luce morente","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"Una maledizione che blocca l\'abilità di lettura dell\'aura. Colpire un sopravvissuto con un <i>attacco base</i> mentre il totem Maledizione è attivo provoca <b>Accecamento</b>. Questo effetto si applica agli ultimi <span class=\\"Highlight1\\">{0}</span> sopravvissuti colpiti.<br><i>Gli effetti della Maledizione persistono finché il relativo totem Maledizione resta in piedi.</i>","name":"Maledizione: Il Terzo Sigillo","flavor":"\\"Se sfiora la tua pelle porterai il marchio della strega!\\"","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"Una maledizione che influisce sui progressi di riparazione dei generatori. Tutti i generatori vengono colpiti dalla <i>Maledizione: Rovina</i>. Quando un generatore non viene riparato da un sopravvissuto, regredirà all\'istante in automatico al <span class=\\"Highlight1\\">{0}%</span> della normale velocità di regressione.<br><br><i>Gli effetti della Maledizione persistono finché il relativo totem Maledizione resta in piedi.</i><br>","name":"Maledizione: Rovina","flavor":"\\"Una maledizione è stata lanciata su di te e causerà la tua rovina.\\"","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"Una maledizione il cui potere ha origine dalla speranza. Le false speranze dei sopravvissuti alimentano la tua fame. Quando un sopravvissuto viene salvato da un gancio ad almeno <span class=\\"Highlight1\\">24 metri</span> di distanza, Divora Speranza riceve un token.<br><li><span class=\\"Highlight3\\">2 token</span>: ottieni un incremento a <b><i>Fretta</i></b> del <span class=\\"Highlight2\\">{0}%</span> per <span class=\\"Highlight3\\">10 secondi</span> dopo aver appeso al gancio un sopravvissuto. L\'incremento si verifica <span class=\\"Highlight3\\">10 secondi</span> dopo aver appeso al gancio un sopravvissuto.</li><li><span class=\\"Highlight3\\">3 token</span>: i sopravvissuti subiranno lo stato <b><i>Vulnerabilità</i></b>.</li><li><span class=\\"Highlight2\\">5 token</span>: conferisce l\'abilità di uccidere i sopravvissuti con le tue stesse mani.</li><br><i>Gli effetti della Maledizione persistono finché il relativo totem Maledizione resta in piedi.</i><br>","name":"Maledizione: Divora Speranza","flavor":"\\"Se non fai nulla, avrai le mani sporche del loro sangue. Se li salvi, la sua fame crescerà.\\"","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"Basta la tua presenza per far recitare le ultime preghiere. I sopravvissuti all\'interno del tuo raggio di terrore sono soggetti a inefficienza.<br>Il tasso di logoramento degli oggetti dei sopravvissuti colpiti aumenta del <span class=\\"Highlight1\\">{0}%</span>.","name":"Presenza sovrastante","flavor":"\\"Merda, ho perso le garze!\\"","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"Approccio meticoloso condito da un\'applicazione terrificante.<br>Durante un inseguimento, il tuo raggio di terrore aumenta di <span class=\\"Highlight1\\">{0} metri</span>. Altrimenti, il tuo raggio di terrore diminuisce di <span class=\\"Highlight2\\">{0} metri</span> e il tuo campo visivo aumenta di <span class=\\"Highlight3\\">{1} gradi</span>.<br><i>I vantaggi al campo visivo non sono cumulabili.</i>","name":"Sorveglianza e sevizia","flavor":"\\"È l\'ora della terapia!\\" - Il Dottore","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"Il tuo odio per il progresso è la tua fonte di energia.<br>Sovraccarica un generatore eseguendo l\'azione <b>Danneggia il Generatore</b>. Il prossimo sopravvissuto che interagisce con quel generatore dovrà affrontare un Test Abilità <span class=\\"Highlight1\\">straordinariamente</span> difficile. Fallirlo comporta una perdita di progressi aggiuntiva pari a un <span class=\\"Highlight2\\">{0}%</span>.<br>Superarlo non fa guadagnare progressi, ma almeno si evita l\'esplosione del generatore.","name":"Sovraccarico","flavor":"\\"È una trappola. Ma una trappola in cui qualcuno dovrà cadere...\\" - Il Dottore","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"La tua sete di sangue è talmente intensa da farti perdere momentaneamente la connessione con l\'Entità. Questo ti rende del tutto imprevedibile.<br><br>Conferisce l\'effetto di <b>Impercettibile</b> dopo aver ottenuto Sete di sangue I. L\'effetto viene rimosso quando perdi Sete di sangue.<br><br><li>Ottieni il <span class=\\"Highlight1\\">{0}%</span> in più di Punti Sangue per azioni nella categoria Cacciatore.</li>","name":"Animale da preda","flavor":"\\"Dove si è cacciata?\\"","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Le aure dei sopravvissuti ti vengono rivelate per <span class=\\"Highlight1\\">{0} secondi</span> quando questi si introducono nel seminterrato e tu ti trovi a più di <span class=\\"Highlight2\\">{1} metri</span> di distanza dall\'entrata.<br><i>Dominio territoriale</i> può essere innescato una volta ogni <span class=\\"Highlight3\\">{2} secondi</span>.","name":"Dominio territoriale","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"Una maledizione il cui potere ha origine dalla disperazione. La caccia è un\'irresistibile melodia del terrore che confonde l\'attenzione delle tue prede. I sopravvissuti ricevono come penalità un regresso del <span class=\\"Highlight1\\">{0}%</span> quando perdono un Test Abilità mentre sono impegnati a curare o riparare.<br>Il potere della ninna nanna della Cacciatrice aumenta ogni volta che un sopravvissuto viene appeso al gancio. Influisce sugli avvertimenti dei Test Abilità di cura e riparazione:<br><li><b>Da 1 a 4 token:</b> il lasso di tempo tra il Test Abilità e l\'avvertimento sonoro sarà più breve.</li><li><b>5 token:</b> nessun avvertimento Test Abilità.</li><br><i>Gli effetti della Maledizione persistono finché il relativo totem Maledizione resta in piedi.</i>","name":"Maledizione: La ninna nanna della Cacciatrice","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"Il trauma causato dai tuoi attacchi brutali rende difficile chiedere aiuto.<br>I sopravvissuti finiti in fin di vita dagli attacchi base non vengono rivelati agli altri sopravvissuti mentre si trovano all\'esterno di un raggio di <span class=\\"Highlight1\\">{2} metri</span>.<br>I sopravvissuti finiti in fin di vita dagli attacchi base strisciano il <span class=\\"Highlight2\\">{1}% più lentamente</span> per <span class=\\"Highlight3\\">{0} secondi</span>.<br>In questo frangente, i sopravvissuti subiscono l\'effetto di <b>Accecamento</b>.","name":"KO","flavor":"\\"Oh, quella pistola non va bene. Alla vecchia maniera... con una mazza! Vedi? Così muoiono meglio.\\" - Nubbins Sawyer","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"Un profondo legame con l\'Entità sblocca il potenziale di capacità di lettura dell\'aura. Dopo aver appeso al gancio un sopravvissuto, l\'aura di tutti gli altri sopravvissuti ti viene rivelata per <span class=\\"Highlight1\\">{0} secondi</span> quando si trovano a oltre <span class=\\"Highlight2\\">{1} metri</span> dal gancio.<br><li>Quando un sopravvissuto viene appeso al gancio per la prima volta, conferisce un bonus del <span class=\\"Highlight3\\">{2}%</span> cumulabile a tutti i Punti Sangue ottenuti, fino a un massimo del <span class=\\"Highlight4\\">{3}%</span>.<br>I Punti Sangue bonus vengono conferiti solo dopo la prova.</li>","name":"Barbecue e chili","flavor":"\\"Uccidere non mi trasmette alcun piacere. Ci sono cose che vanno fatte anche se non ti piacciono.\\" -Drayton Sawyer","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"All\'impatto i tuoi attacchi efferati fanno cadere gli oggetti ai sopravvissuti. Se non vengono raccolti, gli oggetti caduti vengono consumati dall\'Entità dopo <span class=\\"Highlight1\\">{0} secondi</span>.<br>Rivela gli oggetti a terra entro <span class=\\"Highlight2\\">{1} metri</span> con un\'aura bianca, che diventa rossa finché non vengono consumati dall\'Entità.","name":"Caduta di Franklin","flavor":"\\"Sally, sento qualcosa. Fermati! Fermati!\\" - Franklin","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"La continua pressione che deriva dalla possibilità di perdere la preda ti riempie di furia e motivazione. Ogni volta che un generatore viene riparato da un sopravvissuto, Fuoco e fiamme si potenzia.<br><li>Per ogni generatore completato, ottieni un miglioramento cumulabile del <span class=\\"Highlight1\\">{0}%</span> che ti conferisce un bonus alla velocità di raccolta, caduta, salto, danneggiamento dei generatori e rottura di bancali per il resto della prova.</li>","name":"Fuoco e fiamme","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"Diventi <b>ossessionato</b> da uno dei sopravvissuti. Ogni volta che colpisci la tua ossessione con un <i>attacco base</i>, il tempo di apertura dei cancelli d\'uscita aumenta di <span class=\\"Highlight1\\">{0} secondi</span> fino a un massimo di <span class=\\"Highlight2\\">{1} secondi aggiuntivi</span>.<br><i>Ricordati di me</i> non ha effetto sulla tua ossessione.<br><li><i>Il killer può essere <b>ossessionato</b> solo da un sopravvissuto per volta.</i></li>","name":"Ricordati di me","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"Non appena il cancello d\'uscita si apre, viene attivato Custode sanguinario. Le aure dei sopravvissuti nei pressi delle aree d\'uscita ti sono rivelate. <br>Una volta per partita, appendere al gancio un sopravvissuto mentre è attivo Custode sanguinario invocherà l\'Entità, che bloccherà l\'uscita a tutti i sopravvissuti per <span class=\\"Highlight1\\">{0} secondi</span>.","name":"Custode sanguinario","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"Le tue ingegnose modifiche ai ganci hanno impedito la manomissione.<br><li>Riceverai una notifica quando un sopravvissuto inizia a sabotare un gancio.</li><li>Mentre trasporti un sopravvissuto, vedi l\'aura degli altri sopravvissuti entro <span class=\\"Highlight1\\">{0} metri</span> da un gancio.</li>","name":"Gioco dell\'impiccato","flavor":"\\"Niente scuse, niente equivoci... Niente lacrime.\\" - Amanda Young","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Tutti i generatori in regressione verranno evidenziati da un\'aura bianca. Se la regressione viene interrotta su un generatore, questo sarà evidenziato da un\'aura gialla per <span class=\\"Highlight1\\">{0} secondi</span>.<br>I rumori emessi riparando i generatori si sentiranno fino a <span class=\\"Highlight2\\">{1} metri</span> di distanza in più.","name":"Sorveglianza","flavor":"\\"Ti comporterai bene?\\" - Amanda Young","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"Quando un sopravvissuto salva qualcuno da un gancio a una distanza di almeno <span class=\\"Highlight1\\">{0} metri</span> da te, si attiva <i>Fa\' la tua scelta</i> che fa urlare il sopravvissuto e vi applica l\'effetto di <b><i>Vulnerabilità</i></b> per <span class=\\"Highlight2\\">{1} secondi</span>.<br><i>Fa\' la tua scelta</i> ha un tempo di ricarica di <span class=\\"Highlight3\\">{2} secondi</span>. ","name":"Fa\' la tua scelta","flavor":"\\"È sorprendente scoprire quali strumenti possano salvare una vita.\\" - Amanda Young","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"La tua potente presa sui sopravvissuti ne rende quasi impossibile la fuga. Gli effetti dei tentativi di divincolamento dei sopravvissuti diminuiscono del <span class=\\"Highlight1\\">{0}%</span>. Il tempo per liberarsi dalla tua morsa aumenta del <span class=\\"Highlight2\\">{1}%</span>.","name":"Morsa di ferro","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"Basta la tua presenza per far recitare le ultime preghiere. Ai sopravvissuti nel tuo raggio di terrore viene inflitta una penalità del <span class=\\"Highlight1\\">{0}%</span> per la velocità di guarigione.<br>","name":"Coulrofobia","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"Un profondo legame con l\'Entità sblocca una grande forza. Dopo aver appeso al gancio un sopravvissuto, il generatore che rompi subito dopo perde istantaneamente un <span class=\\"Highlight1\\">{0}%</span> dei progressi. Dopo il danneggiamento, la regressione torna ai valori normali.<br><i>\\"Anghingò\\"</i> si attiva per <span class=\\"Highlight1\\">{1} secondi</span> dopo che il sopravvissuto viene appeso al gancio.","name":"Anghingò","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"La velocità dei tuoi salti aumenta del <span class=\\"Highlight1\\">{0}%</span>.<br>Eseguire un salto invoca l\'Entità, che blocca l\'area del salto per <span class=\\"Highlight1\\">{1} secondi</span>.<br>È possibile bloccare solo 1 area di salto in questo modo. L\'area di salto è bloccata unicamente per i sopravvissuti. <br>Non ha effetto sui bancali.","name":"Inganno","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"Ogni bancale che rompi amplifica la collera dell\'Entità.<br>Dopo aver spaccato <span class=\\"Highlight1\\">{0} bancali</span>, la prossima volta che vieni stordita da un bancale, l\'Entità lo spaccherà all\'istante.<br>Continui a subire la penalità dell\'effetto di Stordimento.<br>","name":"Furia dello Spirito","flavor":"\\"Ha la furia nel sangue.\\"","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"Nella prova si generano due totem Maledizione intrappolati.<br>Quando uno dei due viene purificato da un sopravvissuto, tutti i sopravvissuti subiscono l\'<span class=\\"Highlight3\\">effetto di Vulnerabilità</span> per <span class=\\"Highlight1\\"> {0} secondi</span>. <br>Il totem Maledizione rimanente diventa subito un totem spento.<br>","name":"Maledizione: Terra maledetta","flavor":"\\"La sua casa fu profanata.\\"","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"Diventi <b>ossessionata</b> da un sopravvissuto.<br>Ogni volta che un generatore viene completato, quel sopravvissuto vede la tua aura per <span class=\\"Highlight1\\">{0} secondi</span>.<br>Ogni volta che un generatore viene completato, la posizione di tutti i sopravvissuti ti viene rivelata per <span class=\\"Highlight2\\">{1} secondi</span>.<br>Una volta completati tutti i generatori, il sopravvissuto che ti ossessiona subisce l\'effetto di <span class=\\"Highlight3\\">Vulnerabilità</span> e il killer può <span class=\\"Highlight3\\">ucciderlo</span>.<br><li><i>Il killer può essere ossessionato solo da un sopravvissuto per volta.</i></li>","name":"Rancore","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"Ogni generatore nel raggio di <span class=\\"Highlight1\\">{0} metri</span> a cui stanno lavorando due o più sopravvissuti viene avvolto da un\'aura gialla. Quando il generatore viene contrassegnato per la prima volta, Discordia attiva una notifica sonora sul generatore. Se il generatore non è più a portata o se non lo stanno riparando due o più sopravvissuti, l\'aura persiste per altri <span class=\\"Highlight2\\">4 secondi</span>.<br>","name":"Discordia","flavor":"\\"I saputelli fanno sempre una brutta fine. Grazie a noi.\\" - La Legione","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"Mentre trasporti un sopravvissuto, non subisci nessun tempo di ricarica per gli <i>attacchi base</i> mancati, e colpire un altro sopravvissuto con un <i>attacco base</i> mette in pausa il suo timer di divincolamento per <span class=\\"Highlight1\\">{0} secondi</span>.<br>","name":"Tenacia furiosa","flavor":"\\"Non c\'è alcuna via d\'uscita ora. Siamo troppo bravi.\\" - La Legione","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"Apri gli armadietti un <span class=\\"Highlight1\\">{0}%</span> più velocemente.<br><br>Un sopravvissuto che esce da un armadietto subirà l\'effetto di Vulnerabilità per <span class=\\"Highlight1\\">{2} secondi</span> e urlerà, rivelando la sua posizione per <span class=\\"Highlight1\\">{1} secondi</span>.<br>","name":"Vergine di ferro","flavor":"\\"Questo posto non è adatto ai vigliacchi.\\" - La Legione","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"Le tue preghiere invocano un potere oscuro che riduce le possibilità dei sopravvissuti di continuare a vivere. All\'inizio della prova, i <span class=\\"Highlight1\\">{0} generatori</span> più lontani rispetto a te vengono bloccati dall\'Entità per <span class=\\"Highlight1\\">{1} secondi</span>.<br>Durante questo periodo, i sopravvissuti non posso riparare questi generatori, i quali sono indicati da un\'aura bianca.<br>","name":"Intervento corrotto","flavor":"\\"In tutto il mondo è risaputo che gli Dei maledicono gli infedeli.\\" (La Tavola di Adiris, 3.7)","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"I lamenti degli infedeli ti fanno sussultare.<br>Ciascun sopravvissuto che si trova a portata del tuo raggio di terrore, mentre un altro è in fin di vita, urlerà e ti rivelerà la sua posizione per <span class=\\"Highlight1\\">{0} secondi</span>.","name":"Terrore contagioso","flavor":"\\"L\'orrore assale il cuore degli infedeli che gridano ai piedi del caduto.\\" (Inno di Elogio, 11.4)","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"L\'esibizione dei tuoi poteri crea un vortice di panico che si diffonde per tutta l\'area.<br><br>Diventi ossessionato da uno dei sopravvissuti. Colpire l\'ossessione con un <i>attacco base</i> le trasferirà il tuo raggio di terrore per <span class=\\"Highlight2\\">{1} secondi</span> e imposterà il raggio a <span class=\\"Highlight1\\">{0} metri</span>. In questo frangente, ottieni l\'effetto di <b>Impercettibile</b>.<br><br>Il sopravvissuto che ha ricevuto il raggio di terrore viene considerato anche \\"all\'interno del raggio di terrore\\" per altre finalità.<br><br><li><i>Il killer può essere <b>ossessionato</b> solo da un sopravvissuto per volta.</i></li><br>","name":"Devozione oscura","flavor":"\\"E il terrore dovrà scendere sui miscredenti ribelli, i quali dovranno falsamente annunciare il mio arrivo.\\" (La Tavola di Adiris, 48.9)","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"I tuoi sensi già sviluppati vengono potenziati nell\'oscuro regno dell\'Entità.<br><br>Sblocca il potenziale dell\'abilità di lettura dell\'aura. Se un sopravvissuto esegue un\'azione affrettata entro <span class=\\"Highlight1\\">48 metri</span> dalla tua posizione, ne verrà rivelata l\'aura per <span class=\\"Highlight2\\">{0} secondi</span>.<br><br><i>Sono tutt\'orecchi</i> può essere attivato una sola volta ogni <span class=\\"Highlight3\\">{1} secondi</span>.<br>","name":"Sono tutt\'orecchi","flavor":"\\"Non serve agitarsi. È tutta la vita che mi preparo per questo.\\" - Ghost Face","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"I tuoi oscuri piani e la tua scaltra compostezza provocano l\'Entità.<br><br>Dopo aver afferrato un sopravvissuto, tutti i generatori non riparati vengono bloccati dall\'Entità e non possono essere riparati per i <span class=\\"Highlight1\\">{0} secondi</span> successivi. I generatori interessati vengono evidenziati da un\'aura bianca.<br><br><i>Tremori frementi</i> può essere attivato una sola volta ogni <span class=\\"Highlight2\\">{1} secondi</span>.<br>","name":"Tremori frementi","flavor":"\\"Qui la notte che mi assiste non ha fine.\\" - Ghost Face","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"Diventi <b>ossessionato</b> da uno dei sopravvissuti. Ti aggiri nell\'ombra, eliminando le tue vittime una dopo l\'altra. Quando appendi al gancio la tua ossessione, <i>Inseguimento furtivo</i> riceve un token, fino a un massimo di <span class=\\"Highlight1\\">{0}</span>.<br><br>Ciascun token riduce il tuo raggio di terrore di <span class=\\"Highlight2\\">{1} metri</span> durante un inseguimento.<br><br>Quando la tua ossessione viene salvata dal gancio, diventi ossessionato dal sopravvissuto che ha effettuato il soccorso. Se la tua ossessione viene sacrificata o uccisa, perdi tutti i tuoi token.<br><br><li><i>Il killer può essere <b>ossessionato</b> da un solo sopravvissuto alla volta.</i></li><br>","name":"Inseguimento furtivo","flavor":"\\"Non hai idea di cosa ho in serbo per te. I giornali ne parleranno per settimane intere: me ne accerterò di persona.\\" - Ghost Face","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"L\'aria è carica della tua inquietante presenza, che interferisce con la tecnologia.<br><br>Far entrare un sopravvissuto nello stato di fin di vita con un <i>attacco base</i> fa immediatamente esplodere e regredire tutti i generatori in un raggio di <span class=\\"Highlight1\\">{0} metri</span>. I generatori colpiti dalla Scarica perdono immediatamente un <span class=\\"Highlight2\\">{1}%</span> dei progressi.<li><i>Scarica</i> può essere attivata solo una volta ogni <span class=\\"Highlight3\\">{2} secondi</span>.</li><br>","name":"Scarica","flavor":"\\"La creatura sembra influire sull\'elettricità e sugli oggetti elettronici circostanti in un modo che non ci spieghiamo.\\" - Laboratorio Nazionale di Hawkins","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"La tua inquietante presenza spossa e indebolisce la preda.<br><br>Mentre riparano i generatori, i sopravvissuti subiscono l\'effetto di <b>Sfinimento</b>.<br><br>Mentre un sopravvissuto ripara un generatore, ogni timer di <b>Sfinimento</b> viene messo in pausa. Terminata la riparazione, il sopravvissuto subisce l\'effetto di <b>Sfinimento</b> per <span class=\\"Highlight2\\">{1} secondi</span>.<br>","name":"Rompicapo","flavor":"\\"Le apparenti abilità telepatiche del soggetto suscitano terrore e affaticamento negli individui circostanti.\\" - Laboratorio Nazionale di Hawkins","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"I tuoi legami con l\'aldilà si manifestano quando la tua preda tenta la fuga.<br><br>Ogni volta che un generatore viene completato, tutte le finestre e i luoghi da saltare in un raggio di <span class=\\"Highlight1\\">{0} metri</span> dal generatore completato vengono bloccati a tutti i sopravvissuti per i successivi <span class=\\"Highlight2\\">{1} secondi</span>.<br><br>Vedi l\'aura di tutti i luoghi da saltare bloccati da <i>Cattività</i> per tutta la sua durata.<br>","name":"Cattività","flavor":"\\"Il soggetto appare in grado di influire sullo stato degli oggetti circostanti, come se esistessero in una forma differente e in una dimensione diversa dalla nostra.\\" - Laboratorio Nazionale di Hawkins","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Sei ben conscio dei punti chiave presenti sul campo.<br><br>Le aure di tutti i bancali, muri frantumabili e luoghi dei salti ti vengono rivelate entro un raggio di <span class=\\"Highlight1\\">{0} metri</span>.<br>","name":"Tattica Zanshin","flavor":"\\"Nella forza del tuo nemico si cela una grande debolezza.\\" - Dottrina Renjiro 12:5","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"Le sofferenze del singolo vengono inflitte a tutti gli altri.<br><br>Quando appendi al gancio un sopravvissuto, tutti gli altri sopravvissuti feriti subiscono <span class=\\"Highlight1\\">Emorragia</span> e <span class=\\"Highlight1\\">Sfinimento</span> per <span class=\\"Highlight2\\">{0} secondi</span>.<br><br><i>Eco sanguigna</i> ha una ricarica di <span class=\\"Highlight3\\">{1} secondi.</span><br>","name":"Eco sanguigna","flavor":"\\"Attacca un nemico con la massima precisione e i suoi alleati patiranno in egual misura.\\" - Dottrina Renjiro 6:3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"Chi ti ha fatto un torto deve pagare. Il sopravvissuto che ti acceca o ti stordisce con un bancale o un armadietto diventa la tua ossessione.<br><br>Ogni volta che un nuovo sopravvissuto diventa la tua ossessione, questo subisce l\'effetto <span class=\\"Highlight1\\">Ignaro</span> per <span class=\\"Highlight2\\">{0} secondi</span> e la sua aura ti viene rivelata per <span class=\\"Highlight3\\">{1} secondi</span>.<br><br><li><i>Il killer può diventare <b>ossessionato</b> da un solo sopravvissuto alla volta.</i></li><br>","name":"Nemesi","flavor":"\\"Solo gli stolti sputano in faccia ai demoni e si credono vincitori.\\" Dottrina Renjiro 4:9","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"Hai orecchio per gli ingranaggi ben oleati.<br><br>Dopo aver colpito un sopravvissuto <span class=\\"Highlight1\\">{0}</span> volte con il tuo <i>attacco base</i>, <i>Meccanico</i> si attiva per <span class=\\"Highlight2\\">{1} secondi</span>.<br><br>Mentre <i>Meccanico</i> è attivo, ogni volta che un sopravvissuto completa un Test Abilità buono durante una riparazione, il generatore verrà evidenziato da un\'aura gialla per tutto il tempo della riparazione.<br>","name":"Meccanico","flavor":"\\"A volte, è proprio l\'opera magna di un uomo a farlo finire nella tomba.\\" - Il direttore della prigione","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"Diventi <b>ossessionato</b> da uno dei sopravvissuti.<br><br>Dopo aver appeso al gancio l\'ossessione, <i>Dispositivo dell\'uomo morto</i> si attiva per i <span class=\\"Highlight1\\">{0} secondi</span> successivi. <br><br>Una volta attivo, il sopravvissuto che smette di riparare un generatore prima del completamento fa sì che l\'Entità blocchi il generatore fino alla fine dell\'effetto di <i>Dispositivo dell\'uomo morto</i>. <br><br>I generatori interessati verranno evidenziati da un\'aura bianca. <br><br><i>Il killer può diventare <b>ossessionato</b> da un solo sopravvissuto alla volta.</i><br>","name":"Dispositivo dell\'uomo morto","flavor":"\\"Ho visto che faccia fa chi ha capito di essere a un passo dalla morte.\\" - Caleb Quinn","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"Una maledizione che lascia una scia di distruzione. Chi incrocia il tuo cammino merita di essere punito.<br><br>I sopravvissuti che purificano un totem spento subiscono l\'effetto di <b>Ignaro</b> per <span class=\\"Highlight1\\">{0} secondi</span>.<br><br>Se viene purificato almeno un totem Maledizione (compreso questo), le aure di tutti i sopravvissuti vengono rivelate per <span class=\\"Highlight2\\">{1} secondi</span>.<br>","name":"Maledizione: Castigo","flavor":"\\"Brutto idiota, ti sei dato la zappa sui piedi da solo.\\" - Caleb Quinn","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"Chi si oppone al dovere subirà un giudizio inclemente.<br><br>I sopravvissuti che ricevono un colpo di protezione subiscono l\'effetto di <b>Sconforto</b> per <span class=\\"Highlight1\\">{0} secondi</span>.","name":"Penitenza imposta","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"Guidi le tue vittime lungo un percorso di dolori e patimenti.<br><br>Dopo aver preso a calci un generatore, diventi <b>Impercettibile</b> finché il generatore smette di regredire o finché un sopravvissuto viene ferito o rimane in fin di vita. In questo lasso di tempo, l\'aura gialla del generatore viene rivelata ai sopravvissuti.<br><br>Questo effetto può essere attivato solo una volta ogni <span class=\\"Highlight1\\">{2} secondi</span>.","name":"Scia del Tormento","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"Coloro che vivono una vita intrecciata nelle tenebre sono destinati a soffrire insieme.<br><br>Quando un sopravvissuto ne guarisce un altro per uno stato di salute almeno <span class=\\"Highlight1\\">{0} metri</span> dal killer, il sopravvissuto che guarisce urlerà, rivelando la propria posizione e attivando <i>Morte certa</i> per i prossimi <span class=\\"Highlight2\\">{1} secondi</span>. In questo lasso di tempo, il sopravvissuto subirà l\'effetto di <b>Ignaro</b> quando si allontana di oltre <span class=\\"Highlight3\\">{2} metri</span> dal sopravvissuto guarito. ","name":"Morte certa","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"Dopo aver preso a calci un generatore, il primo sopravvissuto che vi interagirà nei prossimi <span class=\\"Highlight1\\">{0} secondi</span> urlerà, rivelando la propria posizione per <span class=\\"Highlight2\\">{1} secondi</span> e subendo l\'effetto di <b>Vulnerabilità</b> per <span class=\\"Highlight3\\">{2} secondi</span>.<br><br><i>Morsa del drago</i> ha un tempo di ricarica di <span class=\\"Highlight4\\">{3} secondi</span>.<br>","name":"Morsa del drago","flavor":"\\"Questo composto ha potenziale enorme... la minima traccia ha effetti sovrannaturali.\\" - Dal diario di Talbot Grimes","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"Una maledizione che ottiene il favore dell\'Entità quando viene versato del sangue.<br><br>Quando un sopravvissuto viene colpito con un <i>attacco base</i>, i bancali entro <span class=\\"Highlight1\\">{0} metri</span> dalla tua posizione vengono riposizionati dall\'Entità per <span class=\\"Highlight2\\">{1} secondi</span> e non è possibile farli cadere.<br><br><i>Maledizione: Favore di sangue</i> ha un tempo di ricarica di <span class=\\"Highlight3\\">{2} secondi</span>.<br>","name":"Maledizione: Favore di sangue","flavor":"\\"Non è un\'esagerazione affermare che le prove non sono altro che una sorta di risposta biologica.\\" - Dal diario di Talbot Grimes","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"Quando <i>Maledizione: Immortale</i> è attiva, le aure dei sopravvissuti presenti entro <span class=\\"Highlight1\\">{0} metri</span> da qualunque totem spento saranno rivelate.<br><br>Quando viene purificato un altro totem Maledizione, quella maledizione viene trasferita al totem Maledizione: Immortale, disattivando Maledizione: Immortale, trasferendo anche i relativi token.","name":"Maledizione: Immortale","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"Proteggi quel poco che hai e percepisci il minimo scompiglio tra le tue cose.<br><br>I sopravvissuti rivelano la loro posizione quando interagiscono con una cassa o quando raccolgono un oggetto entro <span class=\\"Highlight1\\">{0} metri</span> dalla tua posizione.<br><br>La prova inizia con un massimo di <span class=\\"Highlight1\\">{1}</span> casse in più nella mappa.","name":"Incettatore","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"La vita è sempre stata dura con te, per cui tu la rendi dura agli altri.<br><br>Quando danneggi un generatore, dai inizio al regresso anche a un massimo di altri <span class=\\"Highlight1\\">{0}</span> generatori casuali.<br><br>Se questi generatori sono in via di riparazione, i sopravvissuti che li stanno riparando ricevono un Test Abilità difficile.<br><br><i>Oppressione</i> ha un tempo di ricarica di <span class=\\"Highlight2\\">{1}</span> secondi.<br>","name":"Oppressione","flavor":"\\"Maledetti loro per averci maledetto.\\" - Charlotte Deshayes","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"La fine si avvicina e tu ti appresti a uccidere.<br><br>Ogni volta che viene completato un generatore, Colpo di grazia si potenzia e tu ottieni un token.<br><br>Consuma un token per aumentare di un <span class=\\"Highlight1\\">{0}%</span> la distanza del prossimo attacco in affondo.","name":"Colpo di grazia","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"Tutti restano incantati dalla tua impareggiabile capacità di intrattenere gli altri.<br><br>Quando trasporti un sopravvissuto, gli altri sopravvissuti nel tuo raggio di terrore subiscono l\'effetto <b>Vulnerabilità</b>.<br>L\'effetto persiste per <span class=\\"Highlight1\\">{0} secondi</span> sui sopravvissuti che escono dal tuo raggio di terrore e su quelli dentro il tuo raggio quando appendi un sopravvissuto al gancio o lo lasci andare.<br><i>Fame di fama</i> ha un tempo di ricarica di <span class=\\"Highlight2\\">{1} secondi</span> quando smetti di trasportare un sopravvissuto.<br>","name":"Fame di fama","flavor":"\\"Goditi il momento. Pochi arrivano così vicino.\\" - Ji-Woon Hak","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"Una maledizione che tiene a bada chi ti è inferiore.<br><br>L\'Entità blocca una finestra per <span class=\\"Highlight1\\">{0} secondi</span> dopo che un sopravvissuto esegue un salto <b>affrettato</b> al suo interno.<br><br><i>Gli effetti della Maledizione persistono finché il relativo totem Maledizione resta in piedi.</i><br>","name":"Maledizione: Controllo delle folle","flavor":"\\"Non hai alcun controllo. È sempre così per quelli come te.\\" - Ji-Woon Hak","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"Non si accettano nullità nella sala VIP.<br><br>Dopo aver appeso un sopravvissuto al gancio per la prima volta, <i>Nessuna via d\'uscita</i> ottiene un token.<br>Quando viene riparato l\'ultimo generatore, l\'Entità blocca entrambi gli interruttori d\'uscita per <span class=\\"Highlight1\\">{0} secondi</span>, più altri <span class=\\"Highlight2\\">{1} secondi</span> per ciascun token posseduto.<br>","name":"Nessuna via d\'uscita","flavor":"\\"Quel suono quando sanguini... Fammelo sentire ancora.\\" - Ji-Woon Hak","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"Sei stato progettato per scovare ed eliminare bersagli.<br><br>All\'inizio della prova, le aure di tutti sopravvissuti ti vengono rivelate per <span class=\\"Highlight1\\">{0} secondi.</span><br><br><span class= \\"FlavorText\\">\\"... sa cosa vuole e non si fermerà finché non l\'avrà ottenuto.\\" - Carlos Oliveira<\\\\span>","name":"Inseguitore letale","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"Sai come brutalizzare un membro della squadra per seminare il panico.<br><br>Ogni volta che un sopravvissuto sano diventa ferito per un tuo attacco base, tutti i sopravvissuti feriti subiscono l\'effetto <b>Ignaro</b> per <span class=\\"Highlight1\\">{0} secondi.</span><br><I>Isteria</i> si può attivare solo una volta ogni <span class=\\"Highlight2\\">{1} secondi.</span><br><br><span class= \\"FlavorText\\">\\"Scusa, non volevo spaventarti. Non so più cosa aspettarmi, ormai.\\" - Robert Kendo","name":"Isteria","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"Il parassita NE-α ti fornisce l\'intelligenza e la coscienza necessarie per piazzare una trappola.<br><br>Dopo aver preso a calci un generatore, la sua aura verrà evidenziata in giallo. Quando riduci un sopravvissuto in fin di vita con un attacco base, tutti i generatori interessati esploderanno, causandone una regressione di un <span class=\\"Highlight1\\">{0}%</span> e facendone sparire l\'aura.<br>Se un generatore esplode, il sopravvissuto che lo sta riparando urlerà e subirà l\'effetto Immobilizzato per <span class=\\"Highlight2\\">{1} secondi</span>.<br><i>Eruzione</i> ha un tempo di ricarica di <span class=\\"Highlight3\\">{2} secondi.</span><br><br><span class= \\"FlavorText\\">\\"Sa anche usare le armi?!\\" - Jill Valentine","name":"Eruzione","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/it/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Evan MacMillan idolatrava suo padre. Non solo perché era l\'erede di un\'immensa fortuna, ma per il modo in cui la gestiva. Cresciuto sotto la sua mano ferma, Evan aveva preso ad amministrare i dipendenti con il pugno di ferro. La produzione era sempre di alto livello e la tenuta MacMillan prosperava sotto padre e figlio. Quando la salute mentale di Archie MacMillan andò sgretolandosi, Evan lo protesse dal branco che voleva una parte del suo patrimonio. Qualsiasi cosa suo padre gli avesse chiesto di fare, Evan l\'avrebbe fatta.<br><br>Quando Archie MacMillan perse del tutto la testa, Evan diventò il suo esecutore in quello che sarebbe stato ricordato come il più terribile omicidio di massa nella storia moderna. Non fu mai dimostrato, ma si diceva che Evan avesse condotto più di cento uomini in quelle buie gallerie, prima di far saltare gli esplosivi e seppellirli per sempre. La storia della tenuta MacMillan è una vicenda di benessere e potere finita male. Non si conosce il numero esatto delle vittime che caddero per mano di padre e figlio. Nessuno sa cosa accadde a Evan MacMillan. Anche la fine del padre rimase un enigma irrisolto: fu trovato nel seminterrato del suo stesso magazzino, morto e abbandonato.<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"Philip Ojomo arrivò in questo paese pieno di speranze per un nuovo inizio. Fu entusiasta di ottenere un lavoro alle Demolizioni Autohaven, un piccolo sfasciacarrozze dove gli sbirri corrotti chiudevano un occhio sui loschi traffici che vi si svolgevano. A Ojomo non importava. Era già stato testimone di attività criminali nella sua terra natia e, fintanto che non lo coinvolgevano, fingeva di non vedere. A lui interessava solo riparare le macchine e manovrare la pressa. E lo faceva molto bene. Ogni macchina che arrivava si trasformava in un cubo compatto di metallo.<br><br>Questo finché un giorno non notò, per caso, del sangue colare da uno dei veicoli da demolire. Quando aprì il bagagliaio vi trovò un giovane, imbavagliato e con le mani legate, dagli occhi pieni di terrore. Ojomo liberò il ragazzo, che riuscì a correre per qualche metro prima che il suo capo lo fermasse per tagliargli la gola. Quando Ojomo chiese spiegazioni, gli fu risposto che il suo lavoro era molto simile a quello di un boia, poiché quasi ogni macchina da demolire aveva una pover\'anima dentro, e che quello era un \\"servizio\\" che veniva offerto ad alcuni clienti \\"speciali\\". Ojomo perse le staffe. Spinse nella pressa il suo capo, che venne lentamente ridotto in pezzi. Quando la testa spuntò fuori, Ojomo l\'afferrò e la strappò dal resto del corpo con tutta la colonna vertebrale. Quindi se ne andò e non fu mai più visto.<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"Figlio dei ricchi proprietari terrieri Max ed Evelyn Thompson, questo ragazzo senza nome era trattato come un rifiuto dai suoi genitori violenti. Orribilmente sfigurato, venne tenuto isolato dalla società. I suoi genitori se ne vergognavano così tanto, che lo murarono in una stanza, dandogli da mangiare attraverso un buco nel muro. Quando il ragazzo scappò, si vendicò brutalmente, ammazzando i genitori che lo avevano torturato anziché crescerlo.<br><br>Dopo questo gesto, continuò a vivere nella fattoria, sfogando la sua violenza deviata sugli animali liberi di scorrazzare. Quando riuscì a liberarsi dalle sue catene, corse attraverso i campi di grano, inseguendo e ammazzando ogni forma di vita sul cammino. I corpi di Max ed Evelyn non vennero mai trovati, a differenza di quelli degli animali torturati e sventrati sparsi nella fattoria. La Fattoria Coldwind fu sistemata alla svelta e la terra fu divisa e messa in vendita. Non ci fu mai un compratore per la fattoria. Forse per via del suono della motosega che si poteva ancora sentire nelle notti più calde d\'estate.<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"Sally Smithson arrivò in città sognando di sentire presto il suono di piccoli passi e gridolini nella casa in legno costruita dal marito Andrew. Ma un giorno, il capo di Andrew andò a renderle una visita che cambiò per sempre la sua vita. Senza risorse, Sally dovette trovare una soluzione, ma l\'unico impiego che trovò fu presso l\'ospedale psichiatrico Crotus Prenn. Iniziò dal basso, facendo il turno di notte. Dopo aver assistito a cose orribili per decenni, la sua mente raggiunse il limite. Alla fine non sopportò più quel peso e iniziò a sentire il bisogno di purificarsi. Quando i dipendenti del mattino arrivarono, un giorno di settembre, trovarono oltre cinquanta pazienti senza vita nei loro letti, insieme a 4 membri dello staff, anch\'essi morti. Solo Sally era sopravvissuta, ma la sua mente era andata, dondolando avanti e indietro senza sosta. La fecero salire su un\'ambulanza, che però non raggiunse mai l\'ospedale: fu ritrovata incidentata in un bosco vicino, con i membri dello staff senza vita e nessuna traccia di Sally.","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"Non appena Anna iniziò a muovere i primi passi, la madre le insegnò come sopravvivere a una vita dura e solitaria nella foresta del nord. Vivere in un\'area così remota e solitaria richiedeva capacità e determinazione. Quando ormai diventava troppo buio per lavorare fuori, si rifugiavano nella loro casa, un robusto cottage costruito per resistere agli inverni più freddi. Anna dormiva tra le braccia della madre, riscaldata dal calore del suo petto, e circondata dai suoi pochi giocattoli e dalle maschere in legno che la madre le aveva costruito. Cullata da storie e ninne nanne, Anna faceva sogni felici, ignara degli eventi che presto avrebbero cambiato tutto.<br><br>Lei e la madre davano la caccia a un grande alce per la foresta. Sapevano che era una preda pericolosa, ma l\'inverno era stato molto duro e le scorte di cibo erano quasi finite. Il pensiero della fame le spaventava più di ogni altra creatura della foresta. Senza alcun preavviso, l\'alce si impennò, emise un verso e prese di mira Anna. Era paralizzata dalla paura e tutto il mondo sembrava tremare sotto gli zoccoli dell\'enorme bestia. L\'alce era vicino, Anna poteva vedere i suoi occhi iniettati di furia omicida. Di colpo la madre si scagliò contro l\'alce, armata della sua ascia. Le scappò un urlo raccapricciante mentre l\'alce la incornava e la lanciava in aria. Cercò con tutte le sue forze di colpire ripetutamente la testa dell\'alce, mentre l\'animale cercava di scagliarla via. Le corna dell\'alce si spezzarono con un suono inquietante e la madre di Anna si liberò. La bestia collassò.<br><br>Anna era troppo piccola per spostare il corpo martoriato della madre, quindi restò al suo fianco nella radura dove era finita. Per distrarla dai versi dell\'alce in fin di vita, la madre strinse Anna e le canticchiò la sua ninna nanna preferita. La cacciatrice e l\'alce restarono così, sempre più freddi e quieti... Finché Anna non restò sola nella foresta silenziosa. Alla fine, Anna si alzò per affrontare il lungo cammino verso casa.<br><br>Sapeva come sopravvivere nella foresta gelida, anche se era solo una bambina. Seguì il suo istinto e diventò una cosa sola con la natura selvaggia. Gli anni passarono, Anna diventò più forte e si dedicò alla caccia. Crescendo si trasformò in una pericolosa predatrice e la sua umanità diventò un pallido ricordo.<br><br>Ampliò il suo territorio e imparò a sopravvivere cacciando. Imparò a destreggiarsi tra scoiattoli, lepri, visoni e volpi. Presto si stancò di loro e iniziò a cacciare animali più pericolosi come lupi e orsi. Quando degli ignari viaggiatori finirono nella foresta, Anna scoprì la sua nuova preda preferita: gli umani. I poveri sventurati che finivano nel suo territorio venivano massacrati come degli animali. Anna adorava collezionare i loro oggetti e gli indumenti colorati, le piacevano soprattutto i giocattoli dei più piccoli. Non riusciva, però, a uccidere le bambine.<br><br>Le portava via con sé, nella sua casa nel cuore della foresta. Erano preziose per lei e prendersi cura di loro risvegliava qualcosa nel profondo del suo cuore. Desiderava ardentemente un rapporto con una persona cara, un figlia tutta per lei. Legava le bambine saldamente al muro con una corda ruvida e le circondava di oggetti rubati come giocattoli di legno, bambole e libri di favole che non era in grado di leggere. Non poteva lasciarle andare, sarebbero sicuramente morte là fuori.<br><br>Tutte le bambine che teneva morivano per il freddo, la fame o le malattie. Ogni volta Anna precipitava nello sconforto e nella pazzia più totale. Sentiva il bisogno di provarci ancora, così iniziò a irrompere nei villaggi vicini per sterminare intere famiglie e rapire le bambine. Per calmare le bambine terrorizzate, indossava una maschera di animale che anni prima la madre le aveva fatto. Gli abitanti dei villaggi diffusero la leggenda della mezza bestia che si aggirava per la Foresta rossa: la Cacciatrice, che uccideva gli uomini e mangiava le bambine...<br><br>Ben presto la guerra arrivò nella foresta. I soldati tedeschi iniziarono ad avanzare per attaccare l\'impero russo ormai al collasso. Non c\'erano più viaggiatori di passaggio in quel tremendo periodo. Gli abitanti del villaggio avevano abbandonato le loro case e non c\'erano più bambine, solo soldati. Molti di loro vennero ritrovati con delle ferite da ascia; interi gruppi sparirono misteriosamente. Finita la guerra, le voci sulla Cacciatrice sparirono... inghiottite dalla Foresta rossa.","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"Certe persone sono semplicemente delle mele marce. Mele iniettate di una forma pura di malvagità. Michael Myers era fra queste. Non aveva alcun motivo di far soffrire il prossimo: lo faceva soltanto perché gli piaceva. Ma la vita può essere difficile persino per le menti colme di terrore. La differenza sta nella maniera in cui si affrontano i problemi.<br><br>Per Michael, l\'unico modo per trovare la pace interiore era uccidere. Quando ammazzò sua sorella, la polizia trovò sulla scena del crimine un ragazzino silenzioso con indosso un costume da pagliaccio. Se ci si imbatte in un incendio, non ci si versa sopra della benzina. Ma fu proprio questo che fecero gli agenti, ignari di come il demonio avrebbe con il tempo attecchito in quel corpicino. Mandare Michael in un istituto psichiatrico fu un debole tentativo di salvare il bambino. Le terapie non riuscite e le continue grida notturne lo resero ancora più introverso e deviato. La gente sperava che la storia di Michael Myers fosse una parentesi da dimenticare in fretta, e che lui avrebbe finito i suoi giorni rinchiuso a marcire. Ma poi... scappò.<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"Lisa Sherwood crebbe in una cittadina tranquilla. La gente del villaggio era gentile e gli anziani aiutavano a risolvere le dispute e a mantenere vive le antiche tradizioni. Lisa aveva una passione particolare per i talismani che le avevano insegnato a usare per la sua sicurezza e fortuna. Una sera, mentre stava camminando nel bosco verso casa, all\'improvviso si scatenò una terribile tempesta. In quell\'umida e viscida oscurità, inciampò e batté la testa. In alcuni momenti di lucidità, scorse delle sagome nere che si avvicinavano tra gli alberi. In breve tempo, erano così vicine da poterne scorgere il ghigno maligno e vorace.<br><br>La incatenarono al muro in un sotterraneo allagato. Nel buio riusciva a vedere altre persone, piene di ferite aperte che erano ormai divenute ricettacoli di mosche. Una volta che i cannibali iniziavano a tagliare pezzi di carne dai loro corpi con lame arrugginite, non sopravvivevano a lungo, ma in qualche modo Lisa resisteva. Affamata e mutilata, le catene erano diventate troppo larghe per le sue braccia scarne. Bastò un piccolo sforzo e il metallo lacerò la sua pelle e i suoi muscoli finché non fu libera. Dalla sua carne fuoriusciva del pus giallo, e sotto le piaghe le si potevano vedere le ossa. Non poteva andare oltre. Delirante, iniziò a pensare a casa sua; pensò agli anziani. Tracciò i simboli che le avevano insegnato. In lei si destò un oscuro desiderio. Un desiderio di sangue. Scelse la vendetta.<br>Alla fine, le ricerche della polizia condussero a una vecchia casa nella palude. I suoi abitanti erano stati smembrati e mangiati. I talismani degli anziani erano abbozzati per terra con il sangue. Il corpo di Lisa non fu mai ritrovato.<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"I killer compiono le loro efferate gesta per via dell\'impulso della loro mente malata o vi sono forzati da condizionamenti esterni? Questo è stato a lungo un tema di dibattito. Ma, per un killer, natura e nutrimento sono inestricabilmente connessi.<br><br>Faccia di cuoio non uccide per il desiderio di esercitare il suo potere sugli altri, per soddisfare i propri bisogni carnali, né tantomeno per zittire le voci nella sua testa. Uccide perché ha paura. Ha paura che gli altri possano ferirlo, di deludere la sua famiglia, che la sua necessità di mangiare carne umana venga scoperta.<br><br>Egli fa ciò che gli viene detto, la sua famiglia lo ama e questo è tutto ciò che conta. Gli estranei rappresentano una minaccia, e le minacce vanno eliminate.<br><br>Come quei mocciosi che si sono presentati a casa sua senza essere stati invitati. Sono entrati come se tutto gli fosse dovuto. Hanno ficcato il naso ovunque, certamente per scoprire i segreti di famiglia. Ma Faccia di cuoio si è occupato di loro, ha protetto la sua famiglia, proprio come gli è stato insegnato.<br><br>Non è soltanto un protettore... Assume vari ruoli, e ognuno con un volto diverso. Serve la cena, si prende cura della famiglia, si veste bene quando ci si siede a tavola. In passato erano i suoi nonni a occuparsi di tutti, ma ora il nonno è vecchio e la nonna è immobile da tempo, quindi Faccia di cuoio e i suoi fratelli hanno dovuto prendere il loro posto. La famiglia è tutto per lui. La famiglia è sicurezza e certezza.<br><br>Eppure, nonostante avesse fatto del suo meglio, una di quei mocciosi era scappata. Lui aveva provato a fermarla, inseguendola il più velocemente possibile, ma lei aveva trovato aiuto: un altro estraneo, alla guida di un camion. Quel camionista maligno aveva ucciso suo fratello, mettendolo sotto come un opossum. Accecato dalla furia, Faccia di cuoio gli si era lanciato addosso con la motosega, pronto a vendicare la sua famiglia, ma il camionista era stato più veloce. Aveva spinto da parte Faccia di cuoio, rivoltandogli contro la motosega.<br><br>Mentre guardava gli estranei allontanarsi, la rabbia, il dolore e la sofferenza si mescolavano alla preoccupazione di quello che sarebbe potuto accadere alla sua famiglia. Avrebbero sicuramente avvisato la polizia, che avrebbe portato via i suoi fratelli, suo nonno... Cos\'avrebbe fatto senza di loro? Senza i loro comandi, sarebbe appassito fino a morire.<br><br>Mentre il suo mondo crollava, Faccia di cuoio girava intorno a sé, agitando la motosega, cercando di respingere la miriade di minacce esterne intorno a lui.<br><br>Allora, una nuova sensazione aveva preso il sopravvento dentro di lui. L\'aveva raggiunto da lontano, strisciandogli gelidamente sulla pelle. Si rese conto che, qualsiasi cosa gli estranei avrebbero potuto fargli, nell\'ombra si celava qualcosa di peggiore e di più grande. Fu pervaso da un terrore mai provato prima. Ma era quasi rassicurante, come la paura che aveva provato con i suoi familiari. La paura di deluderli.<br><br>Era arrivato in un luogo familiare ma ignoto, e sapeva d\'istinto cosa fare. Non avrebbe dovuto fallire come con la sua famiglia. Gli estranei sarebbero arrivati, ma lui avrebbe usato le sue capacità per superare qualsiasi ostacolo. Si sarebbero udite delle grida, ma poi avrebbe riportato il mondo al silenzio. Finché il ronzio della motosega non fosse stato l\'unico suono udibile.<br><br>Che gli estranei facciano la loro comparsa.","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"Mostrando un\'eccezionale predisposizione per la psicologia, Herman fu selezionato per un corso di formazione speciale nell\'ambito di un programma avanzato in neuroscienze presso una struttura segreta in Illinois, nota come Istituto Commemorativo Léry, una vera e propria facciata per la CIA. Qui, Herman conobbe il Dott. Otto Stamper e, sotto la sua guida, cominciò a fare uso di metodi insoliti e sempre più crudeli per carpire informazioni dai prigionieri inviati all\'istituto, che fungeva anche da prigione e centro rieducativo sotto copertura per qualsiasi nemico del governo statunitense. Il suo utilizzo sfrenato di terapie violente basate sull\'elettroshock generò conseguenze drammatiche e si rivelò una minaccia per la sicurezza nazionale.<br><br>Nel corso degli anni, Herman divenne noto come il Dottore: nessuno mise mai in dubbio le sue qualifiche mediche, né ciò che accadesse ai prigionieri una volta ottenute le informazioni. L\'orribile verità venne fuori soltanto dopo che l\'Istituto Commemorativo Léry rimase nel silenzio più totale per una settimana. Il personale, i pazienti e i prigionieri vennero trovati tutti morti con diversi tipi di trauma cerebrale. Furono rinvenuti tutti i cadaveri dei prigionieri e dei dipendenti, compreso quello del Dott. Otto Stamper, ma non si trovò alcuna traccia del \\"Dottore\\" Herman Carter.<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"Anche da vivo, per chi lo conosceva Freddy Krueger era una creatura uscita da un incubo. Dietro una maschera di calore e affabilità, nascondeva un temperamento che mostrava solo alle sue vittime. Quando finalmente quelle vittime furono scoperte, i genitori di Springwood scovarono Freddy e decisero di farsi giustizia da soli. Quella notte pensarono che il fuoco li avesse liberati da quel mostro, e che gli altri bambini sarebbero stati finalmente al sicuro, ma... il male trova modi creativi per sopravvivere.<br>Passarono gli anni, gli orrori furono dimenticati e le vittime dimenticarono a loro volta. Ma un giorno, in qualche modo, Freddy fece ritorno e i sogni si tramutarono nuovamente in incubi.<br>Freddy scagliò la sua furia contro coloro da cui riteneva di essere stato insultato, diventando particolarmente ossessionato da Nancy Holbrook. Sottovalutò, però, la forza e l\'intraprendenza di lei. Insieme al suo giovane amico Quentin, Nancy riuscì a indebolire Freddy, lasciandolo mutilato e dandolo ancora una volta per morto.<br>Ma la morte non l\'aveva voluto la prima volta... perché avrebbe dovuto cambiare idea adesso? Freddy riuscì ancora una volta a sopravvivere, e ritornò consumato dal desiderio di vendetta. Questa volta posò gli occhi sul ragazzo che aveva bloccato la sua strada verso Nancy... la sua prediletta.<br>Freddy invase i sogni di Quentin, terrorizzandolo notte dopo notte, finché non riuscì a indebolirne tutte le forze e le difese. Al momento giusto, forzò il giovane a tornare in un\'oscura proiezione della scuola materna Badham, dove avrebbe finalmente ottenuto la sua vendetta.<br>Freddy inseguì il ragazzo nei corridoi della scuola con tutta calma, assaporando ogni momento della caccia. Era questo che lo attirava più di ogni altra cosa: l\'odore del sudore delle vittime, il loro ansimare terrorizzato. Questo era il suo gioco preferito.<br>A un tratto, il ragazzo si fermò alla fine di un lungo corridoio. Era forse troppo stanco per correre ancora? Si era rassegnato al suo destino? Freddy si avvicinò a braccia aperte, graffiando le pareti con i suoi artigli. Quando le punte sfregarono contro un tubo di metallo, lo stridio non fece che aumentare il terrore del ragazzo.<br>Improvvisamente, una pioggia di scintille cadde dall\'alto fino a raggiungere il liquido sul pavimento. Si sviluppò una fiamma blu, che rapidamente raggiunse tutta la stanza.<br>Il ragazzo se la dette a gambe levate mentre Freddy lasciava le fiamme dietro di sé, infuriato. Le stanze e le pareti iniziarono a fondersi in un turbinio di ricordi, finché non si ritrovarono nello scantinato di Freddy. Lì il ragazzo non avrebbe avuto scampo.<br>Lentamente, Freddy si avvicinò. Il giovane era talmente spaventato che Freddy poteva quasi sentire il sapore della sua paura, ma i suoi occhi brillavano di un odio sprezzante che Freddy trovava quasi ammirevole.<br>Ritirò il pugno e le sue lame.<br>Poi, Freddy avvertì un\'altra presenza dietro di sé, una presenza antica, potente e oscura. Un terribile fetore lo avvolse e non sentì altro che il rumore lontano di assi di legno stridenti e cigolanti, poi lo schianto di metallo contro metallo. Gli sembrò qualcosa di arcano e sconosciuto, a metà tra un linguaggio e il terrore puro.<br>Dopo una sensazione di capogiro e di caduta, Freddy si ritrovò nella scuola. Ma non era la sua scuola. Aveva lo stesso aspetto e allo stesso tempo sembrava diversa. Qualcosa stava contenendo i suoi poteri, focalizzandoli su qualcos\'altro. Il ragazzino era svanito, ma c\'erano altre prede nel corridoio. Alcune erano perfettamente insignificanti, ma altre sarebbero diventate le sue nuove prede preferite. Tutti sarebbero caduti sotto ai suoi artigli.","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"Quando John Kramer, meglio conosciuto come l\'Enigmista, pianificò la nascita del figlio nell\'Anno del Maiale dello zodiaco cinese, si augurò che fosse un segno di fertilità e rinascita: un nuovo inizio per lui e la moglie, e l\'alba di una vita meravigliosa per il figlio. Tuttavia, quel piano andò in fumo la notte in cui un tossico entrò di soppiatto nella clinica della moglie, per rimediare qualche dose. <br><br>Quel tragico evento causò la morte del figlio non ancora nato. In seguito, John riuscì a trovare il tossico, rendendolo il suo primo oggetto di prova e cambiando per sempre anche il significato del Maiale. Divenne una rappresentazione della malattia che stava consumando John da dentro, un promemoria del fatto che siamo semplicemente carne, se non ci eleviamo con le nostre azioni, attaccandoci alla vita per sfuggire alla morsa della morte.<br><br>Il Maiale divenne un mezzo, un mandatario dell\'Enigmista, incaricato di portare le cavie ai loro test. Per alcuni tra quelli che emersero vittoriosi, Il Maiale poteva ancora rappresentare una rinascita, nelle loro nuove vite da apprendisti, persino discepoli, dell\'Enigmista. <br><br>Fu il caso di Amanda Young, un\'anima inquieta, la cui vita non era stata altro che una serie di momenti dolorosi, per se stessa e per chi si trovava vicino a lei. Tutto ciò cambiò quando affrontò e superò il test dell\'Enigmista. Decidendo che la sua vita dovesse pur valere qualcosa, abbracciò la causa dell\'Enigmista, pronta a prendere il suo posto una volta che il cancro lo avesse consumato.<br><br>Tuttavia, divenne sempre più dipendente da John, finendo per unire l\'angoscia per la sua morte imminente al ritenere che i soggetti di prova non fossero in grado di salvarsi da soli e di rinascere nel crogiolo al centro dei giochi. <br><br>Consapevole di ciò, John la mise davanti a un altro gioco, un\'altra possibilità per salvarsi, ma Amanda lasciò che la sua rabbia e la sua gelosia dominassero le sue azioni. Non superò il test e si prese una pallottola come conseguenza. <br><br>Mentre sanguinava sul pavimento di piastrelle, l\'oscurità avvolse la vista di Amanda, accompagnata dal rumore del legno crepitante. Poi si ritrovò in una foresta, ancora una volta vedendo il mondo attraverso gli occhi di un Maiale. Gli alberi la circondavano, i loro rami la avvolgevano da tutti i lati. Era immersa in ondate di panico e poteva sentire il suo respiro riverberare all\'interno della maschera.<br><br>Era stata maledetta, condannata a trascorrere i suoi giorni in quel luogo, con quelle sembianze? O forse non era che un altro test? E se non lo avesse fallito? John era sempre un passo avanti a chiunque altro, pianificava ogni possibile eventualità e non avrebbe mai rinunciato a lei, non era forse così?<br><br>Anche se l\'Enigmista non fosse più esistito, l\'avrebbe lasciata a qualcun altro. Un individuo per cui lei sarebbe stata di nuovo Il Maiale.<br><br>Alla fine, si rese conto di aver compiuto le scelte giuste. Il tempo dei giochi era finito. Non c\'era più alcuna possibilità di redenzione per loro. Erano carne, e la carne era destinata a morire. ","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"Kenneth Chase nacque nel 1932 da un parto difficile, al quale sua madre non sopravvisse. Tale evento provocò una rottura nel rapporto con suo padre, che purtroppo non si sarebbe mai risanato. Così, mentre il ragazzo cresceva, il risentimento e l\'alcolismo del padre si acuivano sempre di più. Quando Kenneth raggiunse l\'età scolare, conducevano ormai vite separate.<br><br>A scuola era brillante e il suo talento da atleta non era da meno. Diventò un uomo alto e forte, che eccelleva nelle gare di atletica, ma evitava qualsiasi attività sportiva che implicasse il lavoro di squadra.<br><br>Tornando a casa da scuola, spesso trovava delle piume per terra e così cominciò a collezionarle, conservandole in una scatola per sigari sotto il letto. Con il padre sempre al lavoro o sotto gli effetti dell\'alcol, Kenneth trascorreva ore e ore in solitudine, analizzando la forma regolare e la morbidezza di quelle piume, passandosele sulle labbra. Osservando gli uccelli attirati dalla mangiatoia nel suo giardino, cominciò a bramarne la morbidezza e decise di catturarne uno. S\'ingraziò il dentista locale, procurandosi dell\'anestetico. Con questo improvvisò una trappola sulla mangiatoia, sperando che avrebbe stordito qualche uccello per il tempo sufficiente a poterlo toccare.<br><br>Dopo alcuni tentativi falliti, riuscì a catturare un pettirosso. Mentre lo teneva sul palmo della mano, fu attraversato da una scossa di adrenalina: quella vita era in suo potere. I suoi piani, inizialmente, erano quelli di liberare la bestiola una volta svanito l\'effetto dell\'anestetico. Invece, mentre quegli occhietti riprendevano a sbattere, e così quelle alucce, non allentò la morsa. Strinse lentamente quel fragile collo, finché l\'uccellino smise di dimenarsi. Gettò via il corpo, conservando solo le piume, con cui iniziò una nuova collezione, dopo aver buttato le altre perché \\"finte\\".<br><br>Verso la fine degli anni \'40, Kenneth aveva abbandonato la scuola e aveva cominciato a lavorare come lavapiatti presso un ristorante locale. Era anche passato a prede più grandi: scoiattoli, procioni e cani, diventando esperto nel dosaggio dell\'anestetico necessario per ogni vittima.<br><br>Nei primi mesi del 1954, un ragazzo sparì e la città venne setacciata da cima a fondo alla sua ricerca. Qualche mese dopo, il padre di Kenneth, che stava facendo dei lavori nel solaio di casa, trovò una scatola per sigari. L\'aprì e vide, con orrore, che conteneva piume, zampe di animali e un dito umano.<br><br>Di ritorno dal lavoro, Kenneth scorse suo padre uscire dal solaio con la scatola di sigari in mano. Si voltò e non fece più ritorno a casa.<br><br>Dopo aver fatto il barbone per qualche settimana, incontrò un circo itinerante e, con la sua forza prodigiosa, lo reclutarono per lavorare con le corde. Assunse un nuovo nome: Jeffrey Hawk.<br><br>Ritrovatosi improvvisamente parte di una comunità affiatata, \\"Jeffrey\\" dovette imparare a socializzare. Indossò una nuova personalità come se fosse un travestimento, diventando presto noto come un giovane affascinante e disponibile, e fu accolto nella sua nuova famiglia.<br><br>Nel decennio successivo rimase con il circo, viaggiando negli Stati Uniti in lungo e in largo. Ma, a causa della volatilità di quel tipo di vita, assunse delle brutte abitudini. Alcol, cattiva alimentazione, droghe... ne faceva un uso spropositato. Per un certo periodo, questi vizi gli bastarono, ma poi le sue vecchie necessità riaffiorarono e la sua esistenza nomade divenne una copertura per riprendere a uccidere. Rubò i vestiti e il trucco degli artisti, creandosi un travestimento che gli avrebbe permesso di avvicinare le sue vittime, per poi anestetizzarle e portarle nel suo caravan. Qui si sarebbero ritrovate legate e completamente alla sua mercé. Si sarebbe divertito, torturandole mentalmente e fisicamente, inebriandosi con le loro grida fino al sopraggiungere del loro eterno silenzio.<br><br>Quando la loro forza era allo stremo, studiava le loro mani, cercando il dito più bello, passandoselo sulla lingua per assaporarne il gusto. Una volta trovato quello di suo gradimento, lo tagliava aggiungendolo orgogliosamente alla sua collezione e liberandosi del resto del corpo come se fosse stato uno scarto superfluo.<br><br>Uomini, donne, giovani, vecchi, non faceva differenza. L\'essenza di una collezione pregiata è la varietà, nelle memorie e nelle storie che riesce a evocare.<br><br>Con il passare del tempo, iniziò a togliersi sempre meno il costume, saldandolo alla sua vecchia personalità, identificandosi con il clown, il suo vero io.<br><br>Diventò compiacente e sbadato. Mentre dormiva ubriaco, una vittima riuscì a liberarsi. Scappò gridando aiuto e, quando \\"Jeffrey\\" si svegliò, si ritrovò circondato dai suoi colleghi del circo. Prese il suo cavallo e il suo caravan e sparì nella notte.<br><br>Si mise a vagabondare per il Paese, presenziando agli spettacoli circensi dei luoghi dove si trovava, ma senza che il suo nome comparisse sulla locandina. Attirava quelli più coraggiosi (o abbastanza pazzi da avvicinarlo), li catturava e spariva prima che qualcuno si accorgesse della loro scomparsa.<br><br>A un certo punto, lungo il suo cammino, abbandonò le strade ordinarie degli Stati Uniti, viaggiando attraverso un velo di nebbia e raggiungendo un nuovo mondo. Era un luogo di transitorietà e impermanenza, che si addiceva perfettamente alla vita che aveva scelto di condurre. Sentendosi a casa come mai prima di allora, si accampò in attesa del suo primo visitatore.","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"Rin era l\'unica figlia della famiglia Yamaoka. Crebbe tra le mura polverose di una casa tradizionale di Kagawa. Studiò Scienze dell\'educazione a Takamatsu, un\'università privata, che pesò notevolmente sulle finanze barcollanti della sua famiglia. Quell\'anno, sua madre si ammalò, e le bollette iniziarono ad accumularsi. Rin trovò un lavoro part-time nel futile tentativo di aiutare ad alleggerire il fardello familiare.<br><br>Suo padre si ritrovò con un debito che continuava ad aumentare. Cominciò a fare doppi turni nella speranza di ottenere una promozione. E fu allora che iniziò a perdere sonno. Durante la notte, un bisbiglio spettrale lo teneva sveglio, ricordandogli della sua situazione senza speranza. Esausto, cominciò a distaccarsi dalla realtà. Cercando di combattere le parole di quella voce notturna, il padre di Rin compì un gesto disperato. Incontrò il suo capo e gli spiegò la situazione. Lo implorò di dargli un bonus, un anticipo, delle ferie... qualsiasi cosa.<br><br>La sua richiesta fu negata. L\'azienda aveva lanciato una linea di produzione difettosa che gli stava costando una fortuna. Qualcuno doveva prendersene la colpa, e il padre di Rin calzava quel ruolo alla perfezione. Venne licenziato dopo ventidue anni di servizio.<br><br>Quella sera, Rin tornò a casa dal lavoro più tardi del solito. Era rimasta con alcuni clienti che si erano attardati al ristorante. Parcheggiando la sua bici, udì le grida di sua madre provenire dalla casa.<br><br>Corse dentro, affrettandosi sulle scale fino alla camera dei suoi genitori. Una volta entrata, trovò i pezzi di sua madre sul pavimento. Le sue membra erano state recise perfettamente, aggrovigliate in una posizione innaturale. I suoi seni erano stati asportati, rivelando la cassa toracica, che era completamente aperta. Rin deglutì.<br><br>Una katana affilata si abbassò furiosamente su di lei. Rin bloccò la lama, che la colpì sull\'avambraccio. Lo shock del riconoscimento affievolì il dolore: suo padre brandiva una katana con un\'espressione impassibile. Rin gli gridò di fermarsi, ma lui le colpì di nuovo il braccio.<br><br>Cercò di scappare ma scivolò sul pavimento insanguinato. Si sollevò contro lo stipite della porta. La katana attraversò il muro, tagliandole l\'altro braccio. Gridò dal dolore zoppicando nel corridoio, solo per trovarsi nuovamente davanti suo padre.<br><br>Indietreggiò, barcollando, tenendosi l\'addome. Le immagini delle membra mozzate della madre le passarono davanti agli occhi.<br><br>Rin si lanciò contro suo padre, facendolo indietreggiare. Lui le colpì l\'addome facendola piegare dal dolore. Mentre lei cercava di avanzare nuovamente, lui la colpì sulla coscia, facendola collassare per terra.<br><br>La ragazza strisciò verso le scale, ma il padre le afferrò i capelli trascinandola contro una partizione. Il vetro si ruppe all\'impatto e lei vi cadde attraverso, finendo al piano di sotto.<br><br>Udì dei passi sopra di lei. Con fatica, si mosse, facendosi strada in un mare di vetri rotti. Le schegge la tormentavano, strappandole la carne. Bisognava fermarlo. Non se la sarebbe cavata, dopo quello che le aveva fatto... dopo quello che aveva fatto a sua madre.<br><br>Tossendo sangue, il suo mento sfiorò il vetro, facendola sanguinare ancora di più. Il suono del suo battito cardiaco iniziò a echeggiarle nelle orecchie. Sentiva il suo corpo così pesante da non riuscire più a muoversi.<br><br>Il suolo tremò sotto i passi del padre. Sapeva che non ce l\'avrebbe fatta, ma non le importava più. Gliel\'avrebbe fatta pagare, in questa vita o nella prossima.<br><br>Una nebbia oscura velò lentamente i suoi occhi, ma non la sua rabbia. Non avrebbe riposato, non ancora. L\'oscurità bisbigliava, promettendo sangue e vendetta.<br><br>Dopo aver fatto questo giuramento, Rin chiuse gli occhi.","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"Frank Morrison aveva diciannove anni, ma non li dimostrava. Aveva lasciato la scuola dopo essere stato espulso dalla squadra di basket per aver spinto l\'arbitro contro gli spalti. Eppure Frank era un tipo con del potenziale, che sapeva rallegrare una stanza nonostante la sua infanzia deprimente. A sei anni era stato portato via da Calgary per cominciare un serie di permanenze presso varie case famiglia. Per quanto sbroccasse, facesse scenate e si ribellasse, continuavano a mandarlo in nuove case famiglia, che tutto erano tranne familiari. Il suo ultimo trasferimento era avvenuto tre anni prima, quando il padre affidatario, Clive Andrews, lo aveva prelevato da un centro per adozioni. Avevano viaggiato per sette ore prima di raggiungere un piccolo bungalow a Ormond. Quella sarebbe stata la volta in cui avrebbero trascorso più tempo assieme. Clive era troppo occupato a spendere gli assegni dei Servizi Sociali in bevute al bar.<br><br>Ormond era una piccola cittadina isolata e deprimente, che contava seimila abitanti, dove gli inverni grigi duravano per quasi tutto l\'anno. Frank fece tutto il possibile per trovare un\'altra famiglia adottiva, ma cambiò idea dopo che iniziò a interessarsi a un bella ragazza. Julie era una ragazza popolare, convinta di meritarsi una vita migliore di quella di Ormond, e Frank, in quanto forestiero, rappresentava il suo biglietto di fuga. Frank partecipava alle feste di Julie, dove gli invitati erano più giovani di lui e si lasciavano facilmente impressionare, e la cosa gli piaceva. Incontrò l\'impulsivo Joey, a cui piaceva stare al centro dell\'attenzione, e la timida e ingenua Susie, la migliore amica di Julie.<br><br>Il gruppo si ritrovava presso un rifugio abbandonato sul Monte Ormond. Il tempo trascorso insieme era il modo migliore per spezzare il monotono conformismo della loro piccola vita quotidiana, così insignificante. Frank lo vedeva come un\'occasione per trasformare la loro mancanza di esperienza in qualcosa di potente. Organizzava nottate all\'insegna della depravazione e della violenza, testando i loro limiti. Essenzialmente, bullismo, vandalismo e furti erano i loro programmi per il week-end. Arrivarono al punto che avrebbero fatto qualsiasi cosa avesse chiesto loro di fare. Quando indossavano le loro maschere, non c\'erano più limiti. Erano la sua Legione. Una sera, Frank osò chiedere a Joey di distruggere il negozio da cui era stato licenziato. Vi s\'intrufolarono facilmente, perché dopo l\'ora di chiusura non avrebbe dovuto esserci più nessuno. Ma un inserviente che stava facendo le pulizie afferrò Julie. Nell\'udire le sue grida, Frank fu colto dall\'impulso di accorrere in suo aiuto con il coltello in mano e, senza esitare, lo conficcò nella lama del malcapitato.<br><br>Il gruppo fissò Frank scioccato ed egli ordinò loro di portare a termine il lavoro. Joey serrò la mascella, afferrò il coltello e pugnalò l\'uomo sanguinante tra le costole. Susie non voleva farlo. Frank le gridò contro. Dovevano finire quello che avevano cominciato. Julie chiuse gli occhi e pugnalò l\'uomo al petto. Passò il coltello umido a Susie. Ora c\'erano tutti dentro. Susie fissava Julie incredula, mentre Frank afferrava la sua mano tremolante per piantare il coltello nella gola dell\'uomo. Frank disse loro di muoversi in fretta. Lavarono il sangue sul pavimento, trasferirono il corpo nel bagagliaio dell\'auto di Joey e guidarono fino al Monte Ormond.<br><br>Tutti e quattro scavarono nel terreno gelato per seppellire il cadavere, ma Frank vide qualcosa muoversi tra gli alberi. Coltello alla mano, si allontanò dal gruppo per scoprire cosa stesse accadendo. La Nebbia si stava addensando intorno a Frank, era così densa che non riusciva più a vedere nulla. Ripercorse i suoi passi e si imbatté in una scia inquietante. La seguì, come rispondendo al richiamo dell\'oscurità. Julie, Susie e Joey completarono la sepoltura, ma Frank era come sparito. Julie vide le sue impronte fresche nella neve. I tre seguirono la pista, che li riportò nel bosco. Quando Julie, Susie e Joey non tornarono a casa quella notte, i loro genitori pensarono che fossero fuggiti con Frank. Ogni famiglia se ne uscì con una teoria diversa. L\'umore della città cambiò, tuttavia, quando nei pressi di un rifugio abbandonato sul Monte Ormond fu ritrovato un corpo.","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"Quando aveva cinque anni, Adiris, la più giovane della famiglia, fu abbandonata sui gradini rosso mattone del Tempio della Purificazione, nel centro di Babilonia. Per superare la sua infinita sofferenza, si convinse che gli dei avevano un piano per lei. Cominciò una nuova vita come serva silenziosa. Si sarebbe presa cura dei giardini, avrebbe preparato i pasti cerimoniali e avrebbe lucidato gli incensieri per le cerimonie. Di notte, avrebbe pregato al fine di ricevere un segno che le rivelasse la sua missione.<br><br>Quando diventò maggiorenne, partecipò insieme ai sacerdoti di alto rango all\'adorazione annuale della capra di mare, il dio dell\'acqua e della creazione. Agitando l\'incensiere lungo tutto l\'ipostilo, sparse fumi neri e spessi che, prima di dissolversi, raggiunsero i freddi pilastri di pietra in cima. Si sentì più sollevata e la beatitudine che ne risultò la fece sentire più che mai vicina agli dei. Lavorò giorno e notte per tutti i giorni seguenti, sia compiendo nuovi doveri sia facendone di altri e allo stesso tempo aiutava i sacerdoti durante i rituali di purificazione.<br><br>I sacerdoti avevano sempre più bisogno di assistenza. Venivano effettuate purificazioni ogni giorno per venire incontro alle necessità fuori dalle mura del tempio, dove si stava diffondendo una malattia catastrofica. Nell\'arco di qualche mese, anche i sacerdoti contrassero la malattia. In brevissimo tempo divennero troppo deboli per poter eseguire qualsiasi rituale. Dato che aveva assistito a numerosi rituali di purificazione, Adiris era l\'unica in grado di continuare a eseguirli. Il panico che si stava diffondendo nelle strade doveva essere fermato, anche da una novizia.<br><br>Per via dell\'ansia per la sua prima cerimonia, Adiris visitò il santuario dei sacerdoti. Quando accese le candele, sul retro notò una piccola apertura. Passandoci attraverso, raggiunse una cripta nascosta sotto il santuario. La stanza era completamente vuota, fatta eccezione per una statua dorata di una donna, con le mani distese e le dita ricoperte di gioielli. Quello era il segno che Adiris stava aspettando.<br><br>La sala grande era ornata di fiori, i quali si inchinarono all\'ingresso di Adiris. Si diresse verso l\'altare in mattoni e prese in mano un pugnale cerimoniale in argento. Le sue dita ricoperte di anelli di rubino afferrarono la lama come se fossero artigli. La visione improvvisa della lussuria intrigò i seguaci, i quali erano già rimasti colpiti dalla sua giovinezza e bellezza.<br><br>Appena iniziò a recitare la preghiera della creazione, una donna sul fondo perse i sensi e cadde a terra. Adiris si precipitò da lei e notò le vesciche nere che le ricoprivano tutti i piedi. Senza esitare neanche per un istante, Adiris prese la lama sacra e si colpì il piede, mozzandosi un dito. In seguito offri quella parte del corpo insanguinata agli dei, chiedendo loro di proteggere la donna. I seguaci restarono in silenzio, mentre riconoscevano Adiris come loro nuova sacerdotessa.<br><br>Con la stessa velocità della malattia, in città iniziarono a diffondersi storie sul suo benessere, la sua bellezza e la sua devozione. Presto, i seguaci di Adiris iniziarono a chiamarla Alta sacerdotessa di Babilonia.<br><br>Ma la sua fede venne messa alla prova appena iniziò a mostrare i primi sintomi dell\'infezione; la sua tosse divenne un miscuglio di catarro e sangue, il collo si riempì di ascessi e il piede, ormai con quattro dita, iniziò ad annerirsi. Piena di vergogna per la sua condizione, cominciò a indossare un copricapo con velo e portava sempre con sé un incensiere per mascherare il fetore rancido da malata che la sua pelle emanava. Nella speranza di essere salvata, continuava a eseguire i rituali, offrendo acqua benedetta e cibo ai suoi seguaci.<br><br>Ma nessun rituale poteva salvarla. Nel disperato tentativo di appagare gli dei, Adiris si esiliò dalla città. Viaggiò verso nord seguita da qualche seguace e si avventurò verso la fredda foresta di Urashtu, fino a quando arrivò il momento in cui non riuscì più a camminare.<br><br>Si accamparono in una grotta umida, dove Adiris stava sdraiata in una pozza di vomito. I piedi, ormai neri, erano così gonfi che non poteva più andare avanti. In quella grotta, lei e i seguaci si resero conto del loro destino: erano stati contagiati tutti dalla malattia.<br><br>Inchinandosi davanti ai suoi seguaci, in preda alle crisi di vomito, Adiris recitò un\'ultima preghiera. I fumi neri dell\'incenso si diffusero nell\'aria umida prima di essere spazzati via da una brezza fresca.<br><br>I corpi di Adiris e dei suoi seguaci non furono mai ritrovati. Molte leggende raccontano del suo ritorno, ma nessuno sa davvero quale sia stato il destino dell\'Alta sacerdotessa di Babilonia.","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"Danny Johnson, conosciuto da alcuni come Jed Olsen, prese il giornale dal piano della cucina: era della settimana prima, ma riportava la sua faccia stampata in bella mostra sulla prima pagina, granulosa e dallo sguardo spento. Era uno di quei tipici pomeriggi afosi, in cui il caldo e l\'umidità della Florida permeavano ogni angolo della cucina, facendolo sudare anche senza muoversi. Si stravaccò su una sedia umida per leggere. L\'articolo non poteva che essere di un certo livello. D\'altronde, le sue gesta a Roseville erano state straordinarie.<br><br><i><b>LA SCOMPARSA DI GHOST FACE</b><br><br>18 giugno 1993<br><br>A un primo sguardo, Jed Olsen era un giornalista freelance modesto ma travolgente, la cui esperienza enumerava svariate testate minori. Il personale della Gazzetta di Roseville apprezzava il suo atteggiamento apparentemente onesto e alla mano, motivo per cui, al momento del colloquio, divenne uno di famiglia dopo neanche cinque minuti:<br><br>\\"Jed riconobbe subito il caporedattore nella stanza, gli fece un bel sorriso, gli strinse la mano con fare deciso e si mise a parlare dei bei valori dell\'America di una volta. Tutto qui. Questo gli bastò per essere assunto.\\" - Ex collaboratore della Gazzetta di Roseville<br><br>Olsen non giustificò mai i suoi continui viaggi di lavoro, che lo portarono a conoscere diverse cittadine dallo Utah alla Pennsylvania. Non era possibile effettuare accertamenti sui suoi impieghi precedenti. Aveva un portfolio niente male e un buon modo di fare, a loro serviva un collaboratore sin da subito.<br><br><b>GLI OMICIDI DI ROSEVILLE</b><br><br>Quando iniziarono gli omicidi di Roseville, Olsen lavorava al giornale già da cinque mesi: vittime di ogni età pugnalate a morte nelle loro abitazioni. Stando ai rapporti della polizia, le vittime sembravano scelte a caso, ma il killer sapeva bene come aggirarsi nelle varie case. Le ripetute ferite da accoltellamento indicavano moventi di carattere personale. Non fu rinvenuta la minima traccia di DNA. La polizia locale era sconcertata: gli omicidi erano stati perpetrati con una furia alla stregua di un delitto passionale, seppur premeditati a mente lucida.<br><br>L\'omicida sembrava divertirsi a perseguitare le sue vittime, due delle quali avevano denunciato di essere state pedinate fino a casa da un individuo losco, pochi giorni prima della loro morte. Il killer le avrebbe seguite da Walleyes, un baretto nella zona settentrionale di Roseville, scattando foto delle loro case in cerca di un punto d\'accesso. Era in grado di osservare la stessa vittima per intere settimane, registrandone puntigliosamente routine e abitudini giornaliere. Quando il desiderio di sangue si faceva impellente, visitava la più vulnerabile delle vittime e irrompeva in casa di soppiatto.<br><br>Tutto il personale di polizia lavorò al caso degli omicidi di Roseville. Olsen fu spesso inviato a intervistare le famiglie delle vittime, riportando le dichiarazioni ufficiali della polizia. Al tempo ignoto a tutti, il suo coinvolgimento si aggiunse al conteggio finale dei morti.<br><br><b>GHOST FACE</b><br><br>A Roseville dilagò il panico quando Olsen filmò una figura incappucciata irrompere in una casa nel cuore della notte. Il volto mascherato, un\'immagine bianca sfocata nell\'oscurità, fissò la telecamera per un secondo per poi svanire nell\'abitazione. Ne seguì un articolo scritto da Olsen stesso, intitolato \\"Ghost Face immortalato dalla telecamera\\". All\'epoca sembrava fiero del suo pezzo, divertito da come la popolazione cittadina rabbrividisse leggendo i suoi racconti.<br><br>Settimane più tardi, Olsen lasciò un bigliettino sulla scrivania del suo ufficio e sparì:<br><br>\\"Spero che vi siano piaciute le mie storie tanto quanto è piaciuto a me darvi vita. Niente paura, non ho ancora finito.\\" - Jed Olsen<br><br>Le forze dell\'ordine di Roseville continuano a non rilasciare dichiarazioni circa la sparizione di Jed Olsen.</i><br><br>Danny sorrise, strappando via l\'articolo dal giornale. Non appena le indagini cominciarono a puntare verso di lui, raccolse le sue cose e andò rapidamente via da Roseville.<br><br>Si alzò in piedi resistendo alla sedia sudata che gli tratteneva la pelle. Un\'umidità soffocante lo colpì entrando in camera da letto. La condensa trasudava su una finestrella appannata e brandelli di carta da parati penzolavano dalle pareti, la cui fantasia floreale era ricoperta di foto raccapriccianti e prime pagine di giornale. Danny fissò con una puntina l\'articolo della settimana prima su una foto di scalpi lacerati. Fu colpito da un debole attacco di fame e si chiese quando fosse stata l\'ultima volta che aveva messo qualcosa sotto i denti. Quella stessa mattina, mentre sciacquava il coltello e i vestiti? O la notte prima, dopo aver pedinato quella ragazza lungo la strada? I ricordi erano confusi.<br><br>Fece un passo indietro e ammirò la sua opera sulla parete. Si ritrovò a vagare con la mente, ricordando tutti gli articoli scritti, le storie pianificate e le scene a cui aveva dato vita.<br><br>Un brivido gli corse lungo la schiena. Una gelida brezza tramutò l\'umidità della camera da letto in una Nebbia opaca e congelante. Si levò un grido di una donna. Foglie secche crepitarono sotto i suoi piedi.<br><br>Lui sorrise trepidante. ","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"Una bocca enorme piena di denti appuntiti come spilli, grossi artigli affilati e ricurvi e zampe potenti con cui travolgere le vittime rendono il Demogorgone un mostro terrificante da affrontare in qualsiasi dimensione. Questo incubo di rabbia selvaggia e incontenibile bracca la sua preda per poi farla a pezzi, divorando fino all\'ultimo morso di carne e interiora e non lasciando neanche un boccone agli sciacalli. Questa creatura senza freni né compassione incombe sulla sua vittima senza mostrare nemmeno un\'ombra di pietà, solo il puro istinto della sua insaziabile sete di sangue che la spinge a sferrare il colpo di grazia. Cacciatore perfetto, il Demogorgone è la macabra incarnazione degli orrori che si celano nel Sottosopra ed è per questo che è stato scelto per l\'Entità.","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"A Kazan Yamaoka non era mai bastato onorare il nome di famiglia. Voleva superare la reputazione di suo padre e porre fine a quella che considerava la rovina della casta dei samurai, ovvero semplici contadini che si autoproclamavano samurai. Suo padre cercò di indirizzarlo verso scopi più nobili, ma Kazan non gli diede ascolto e, impossessatosi della sua katana, partì per un oscuro viaggio al fine di dimostrare il suo valore e liberare il Giappone dalla piaga degli impostori. Ignorando il codice che gli venne insegnato, Kazan uccise gli impostori sulle colline e nelle valli, sulle spiagge e nei boschi. Ogni uccisione era brutale, cruenta e morbosa. Prima li umiliava, tagliando loro il tipico codino, poi li privava della loro armatura. La sua ira, la sete di sangue e il suo perverso senso dell\'onore non aveva limiti. I monaci che lo credevano posseduto da poteri oscuri e ultraterreni lo maledicevano, mentre un nobile lo ribattezzò \\"Oni Yamaoka\\", il samurai furente. Un insulto tanto per Kazan, quanto per la sua famiglia.<br><br>Determinato a riscattare il nome di famiglia, Kazan trucidò chiunque osasse chiamarlo così. Questo insulto lo confondeva. Aveva sconfitto i migliori e purificato la classe dei samurai, sterminando tutti gli impostori. Com\'era possibile che qualcuno l\'avesse accomunato a un demone, a un orco? Forse perché aveva calcato un campo di battaglia per abbattere i più feroci guerrieri? Forse perché con il suo kanabo aveva spaccato centinaia di crani? O era perché sentiva il bisogno di riscuotere un \\"trofeo\\" dalle sue vittime? A lui non importava. Essere chiamato orco era un\'offesa che non poteva tollerare e la nefasta voce nella testa lo esortava a dare la caccia a colui che aveva oltraggiato il suo nome.<br><br>Mentre si dirigeva verso la città del nobile, Kazan si ritrovò di fronte a un samurai che gli sbarrava la strada sterrata che percorreva. Kazan preparò il kanabo. Senza proferire parole, il samurai partì all\'attacco per coglierlo di sorpresa. Ma tentennò. Con un colpo devastante, Kazan spaccò la testa al samurai, aprendogli in due l\'elmo. Mentre si avvicinava al samurai tramortito, Kazan vide il volto di suo padre che esalava il suo ultimo respiro con uno sguardo di vergogna mista a rimpianto. Kazan chiuse gli occhi e lanciò un urlo di dolore fino a perdere il fiato. Quando li riaprì... suo padre era scomparso. Non solo aveva ucciso suo padre, ma aveva anche permesso ai ladri di rubarne la salma per strappargli via l\'armatura.<br><br>Amareggiato, sperduto e deluso, Kazan vagò senza meta con la voce di suo padre che gli riecheggiava nella mente, lo scherniva, lo accusava dei suoi fallimenti, scatenando la sua ira più incontrollabile. Un giorno, camminando nei boschi, Kazan trovò la statua di un Oni. Si fermò e restò immobile per qualche istante. La statua, battuta dalle intemperie e ricoperta di vegetazione, sembrava deriderlo, accusandolo di essere uno dei samurai impostori che lui tanto desiderava annientare. Kazan scacciò questa voce dalla sua testa e si ricordò del nobile che l\'aveva ridicolizzato chiamandolo \\"Oni Yamaoka\\".<br><br>Ancora più adirato di prima, Kazan si diresse verso una cittadina sui monti innevati, proprio quella in cui dimorava il nobile. Ai cancelli della città, Kazan fu accolto da una decina di samurai, e altrettanti caddero per i colpi del suo kanabo. La sua velocità e la sua forza non avevano eguali. La sua rabbia era indecifrabile. Ricoperto di sangue, Kazan combatté in tutta la città, per poi trovare il nobile nascosto nella sua dimora. Lo trascinò fuori, gli lacerò i tendini per immobilizzarlo e lo osservò implorare pietà e vergognarsi come un cane. Senza esitare, gli conficcò il pugno in gola e ne estrasse la perfida lingua che aveva oltraggiato il suo nome.<br><br>Soddisfatto, Kazan uscì dalla dimora e si ritrovò circondato da decine di contadini che brandivano falci arrugginite, forche appuntite e mazze pesanti. Sopravvisse ai primi assalti, ma gli attacchi erano troppi e da tutte le direzioni. In una questione di istanti, Kazan finì al suolo, fissando un cielo freddo, indifferente e incupito, mentre i contadini pugnalavano e torturavano l\'Oni che aveva massacrato il loro beneamato signore a turno. La ressa delirante trascinò Kazan in un piccolo mulino di pietra per proseguire la tortura e infine lasciarlo morire lentamente e nel modo più doloroso. Al loro ritorno, il mulino era colmo di una strana nebbia nera e il corpo e il kanabo di Kazan erano misteriosamente scomparsi. Era solo l\'inizio dell\'oscura leggenda di un Oni furente che infesta la città.","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"Nato nei polverosi calanchi del Midwest statunitense, Caleb Quinn era figlio di immigrati irlandesi con difficoltà di ogni tipo. Malattie, carestia e morte non erano certo una novità sui territori di frontiera, dove i pionieri si contendevano anche le briciole, mentre i magnati mangiavano sulle spalle dei meno abbienti. Il padre di Caleb, un vecchio ingegnere, non aveva molte possibilità di esercitare, dacché tutte le aziende avevano l\'insegna esposta fuori con la dicitura \\"Non si dà lavoro agli irlandesi\\". I suoi attrezzi antiquati rimasero a prendere la polvere per anni, finché Caleb li ritrovò. Notato l\'interesse di suo figlio nel suo mestiere, il padre gli regalò la sua vecchia chiave inglese. \\n\\nI congegni che Caleb creò sotto la guida di suo padre avevano applicazioni alquanto singolari, ma prendevano sempre una piega macabra quando suo padre era via. Nascose i progetti di una maschera in grado di conficcare spuntoni seghettati nelle orbite per poi cavarne via gli occhi. I progetti comprendevano tanto di disegni raffiguranti i bulli che lo maltrattavano. \\n\\nCrescendo, le abilità ingegneristiche di Caleb si fecero appetibili per il mercato e i datori di lavoro si videro costretti a mettere da parte ogni forma di discriminazione. Così, fu assunto da Henry Bayshore, il proprietario della United West Rail. \\n\\nPer iniziare Caleb inventò un\'arma che sparava chiodi da rotaia nel suolo, poi partorì una fresa a vapore. Ma mentre Bayshore fingeva indifferenza, Caleb vide i suoi brevetti rubati o venduti e le sue creazioni arrivarono ad altre aziende. \\n\\nCaleb sentiva una sensazione già provata scorrergli nelle vene. Una sensazione che alimentava il profondo dolore che covava in cuor suo. Ancora una volta, doveva accontentarsi delle briciole, mentre i ricchi godevano del suo lavoro e delle sue invenzioni. Pervaso dalla rabbia, irruppe nell\'ufficio di Bayshore e gli sbatté la faccia in un piatto di stufato. Mentre veniva allontanato con la forza, puntò il fucile dritto nello stomaco del suo capo e premette il grilletto. Un chiodo gli si piantò nelle viscere perforando la pelle e inchiodando Bayshore alla scrivania. \\n\\nUna sola cosa lo salvò dall\'impiccagione: in qualche modo, Bayshore sopravvisse. Per quindici anni, Caleb rimase rinchiuso nel Penitenziario Hellshire, il primo carcere privato della nazione. In questa fortezza di detenuti analfabeti, fece inaspettatamente amicizia con il direttore della prigione. Lui gli progettava strumenti di tortura e in cambio riceveva pasti extra. Dopo un po\', il direttore gli propose uno sconto della pena. Gli parlò di qualcosa di più grande di un semplice agio economico, ma di un vero e proprio capitale politico. Inoltre, le sue conoscenze avrebbero potuto incastrare Bayshore, lasciandolo a marcire in cella a vita. Aveva una sola richiesta: diventare ricco. Per farlo, doveva riempire la prigione. Usare l\'ingegno per sbattere dentro i fuori legge vivi. \\n\\nCaleb tornò nella sua officina e, dopo qualche modifica, ideò un\'arma tutta nuova: il fucile a fiocina. Il primo utilizzo avvenne quando un ladro rapinò una lavanderia cinese. Cogliendo la palla al balzo, Caleb sguinzagliò il suo prototipo. Sparato il chiodo, si udirono giunti metallici stridere e il chiodo si conficcò nell\'addome del bersaglio. Ma l\'arma si agganciò all\'intestino del ladro, che lanciò un grido raggelante vedendo le sue interiora strappate e disseminate sull\'asfalto. \\n\\nDopo diversi tentativi e modifiche, gli sventramenti diminuirono. Il direttore della prigione orchestrò tutto e fece rilasciare altri detenuti irlandesi per dare vita alla banda di Caleb, la banda Hellshire. \\n\\nPer sei anni la banda vagò per la nazione prelevando ricercati da sbattere in prigione, tenendo fede all\'accordo preso. Dopo un sanguinoso scontro a Glenvale, Caleb scorse un articolo in prima pagina: Henry Bayshore acquista il Penitenziario Hellshire. Nella foto, Bayshore dal volto sfigurato e il direttore si stringevano la mano con fare orgoglioso. Caleb sentiva il cuore palpitargli dalla rabbia e il sangue pulsargli dalle vene fino a scoppiare. Era stato svenduto. Era solo una pedina in un gioco tra ricchi. \\n\\nLa banda Hellshire giurò fedeltà a Caleb, invocando la testa del direttore. Con un roboante galoppo, raggiunsero l\'entrata della prigione, sfondandola e inveendo come predoni assetati di sangue. Una guardia sollevò la pistola, ma esitò. Un chiodo gli perforò il petto. Caleb gli afferrò la testa e la sbatté contro una cella finché il sangue imbrattò le sbarre. \\n\\nRaggiunto l\'ufficio del direttore, Caleb aprì la porta a calci e vide una scena a lui a dir poco gradita. A tremare di paura in un angolo non c\'era solo il direttore, ma anche Bayshore in carne e ossa. Sopraffatto dalla rabbia, Caleb aggredì Bayshore, colpendolo, randellandolo, lacerandone le carni. Il sangue gli colava dal volto, formando una pozza cremisi sotto i suoi piedi. La banda Hellshire assalì il direttore, spaccandogli le ossa a calci. \\n\\nI due, in preda allo sconforto, imploravano di essere uccisi, ma la banda li trascinò nel refettorio e li lasciò alla mercé di un numero sempre maggiore di prigionieri. \\n\\nRicoperto di sangue e sudore, Caleb arrancò fino alla sua vecchia cella, incurante delle urla di Bayshore. Si sedette al bordo del letto con le dita gocciolanti di sangue. Dall\'inferriata della finestra penetrò una fitta nebbia sovrannaturale. Tirò fuori la sua vecchia chiave inglese, ormai incrinata e arrugginita e vi passò sopra un pollice, osservandola con occhi annebbiati. Non ricordava quand\'è che l\'avesse presa, ma non gli importava. Ai suoi piedi vedeva un percorso polveroso, al cui termine c\'erano le figure di quanti gli avevano fatto del male: i bulli che lo maltrattavano, i quadri superiori che lo sfruttavano e ancora... Henry Bayshore. Dalla nebbia vide emergere gli strumenti con cui avrebbe potuto liberarsi di loro. Tremendi ganci in acciaio, geniali ma stupendi nella loro semplicità. Il dolore gli colpi una gamba appena si rimise in piedi, ma lui tenne duro e avanzò lungo il percorso polveroso, lasciando una copiosa scia di sangue dietro di sé. ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"Boia sadico e spietato, Pyramid Head nutre un vero e proprio feticcio nell\'infliggere dolore e sofferenza. Oberato del peso di un elmo d\'acciaio e armato di un\'enorme lama affilata, Pyramid Head vagava per i diabolici corridoi di Silent Hill, dedito a un compito che nessuno comprese mai appieno. Perfino i mostri si nascondevano nell\'oscurità per sfuggirgli, consci del fatto che chiunque lo incrociasse avrebbe subito le angherie più sfrenate. Terminato il suo incarico, quando i suoi servigi non furono più richiesti, si preparò per un lungo riposo... finché le sue abilità furono reclamate altrove. La nebbia che lo avvolse era in qualche modo diversa da quella a cui era abituato a Silent Hill, come se ogni strato contenesse gli impulsi nervosi di creature agitate che lo cercavano. In quel momento venne stipulato un patto mai esplicitato. La nube fluttuante era un invito al suo senso del dovere e al suo sadismo. Un invito che Pyramid Head, addentrandosi nella nebbia, accettò nuovamente.","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"Per comprendere la condizione umana, bisogna esservi superiore. Era questo il credo di Talbot Grimes, chimico scozzese dall\'irrefrenabile ambizione che lo portò a conquistare vette mai sperate. Da giovane era molto popolare: brillante, carismatico e intrepido, non perdeva mai occasione di mettere in discussione l\'autorità. Ma nonostante il suo saper interagire con gli altri, era estremamente indipendente e trascorreva molto tempo da solo a esplorare le interminabili distese vicino la sua città. Quell\'ingenua curiosità infantile gli costò quasi la vita un giorno, quando condusse esperimenti in un\'area di digitale velenosa. Rimase allettato per giorni grondante di sudore, espellendo ogni alimento ingerito. Anche dopo la guarigione, la paura non ebbe mai la meglio su di lui, al contrario era estremamente affascinato. Gli effetti drastici che quel singolo fiore ebbero su di lui avevano un non so che di magico.<br><br>In età adulta, la sua ambizione si sviluppò rapidamente tanto quanto i suoi opinabili metodi. Si iscrisse all\'Università di Medicina di Londra e si distinse nonostante i numerosi moniti ricevuti. La sua volontà di ferro di superare i limiti gli valse un posto nella Compagnia Britannica delle Indie Orientali e nell\'arco di sette anni ricevette l\'incarico di capo chimico. Col tempo, portò a compimento uno dei suoi maggiori raggiungimenti: un elemento chimico in grado di incrementare la produttività degli operai, al contempo riducendone il bisogno di sonno. Come ricompensa ricevette un laboratorio segreto al di sotto di un campo di prigionia sull\'isola di Dyer.<br><br>E proprio lì, poco distante dalle coste indiane, i prigionieri della guerra dell\'oppio funsero da cavie forzate dei suoi esperimenti, che portarono allo sviluppo di un farmaco che permetteva ai soldati di tollerare dolori sovrumani. Sebbene gli effetti collaterali fossero di lieve entità, si vociferava di alcuni soldati impazziti. In questo incontrollabile stato, massacrarono interi villaggi, impalando alcuni abitanti sulle baionette e impiccandone altri agli alberi. Non ci furono rapporti ufficiali sulle cavie degli esperimenti, e Talbot non si assunse la minima responsabilità di quelli che erano solo racconti di guerra ingigantiti.<br><br>Per quanto con la sua spietata genialità sembrasse impassibile di fronte a ogni cosa, Talbot trascurava tutti i nemici che si era creato per via del suo discutibile operato. Quando ne prese coscienza, tuttavia, rimase molto colpito. Letteralmente. Con un tubo in acciaio sulla nuca, durante una spedizione a Mangalore. Venne legato e caricato su un carro. Quando fu sbendato, un uomo in pessimo stato gli mostrò una fossa comune contenente centinaia di cadaveri. All\'insaputa di Talbot, quel suo farmaco stimolatore della produttività aveva quasi sterminato tutti gli operai di una fabbrica. Sapeva di non essere in grado di difendersi dall\'ira e dalle accuse del suo rapitore, così si limitò a raggomitolarsi su sé stesso per proteggersi dalla raffica di colpi con il tubo d\'acciaio. Il suo corpo venne gettato in quella fossa, dato ormai per morto. Alternando stati di coscienza e il nero più oscuro, strisciò in cerca di fuga affondando le dita nella carne in putrefazione. Le mosche banchettavano con la sua pelle scoperta, come un centinaio di spilli che lo trafiggevano. Crollò e si ritrovò faccia a faccia con gli abbaglianti occhi nocciola di una donna senza vita. Rimasto ormai senza forze, rimase lì a contemplare l\'operato della sua esistenza.<br><br>Poi, ormai in punto di morte, fu salvato. Si risvegliò su una branda con un volto solcato dalle rughe che lo osservava con fare gentile. Ogni suo respiro sofferto venne curato in un\'antica e misteriosa scuola che fungeva da monastero. Nei lussureggianti giardini che si nascondevano dietro quelle alte ma semplici mura, i monaci studiavano testi proibiti, desiderosi di espandere la mente umana in cerca di altre dimensioni, convinti che fossero tutte interconnesse.<br><br>Le conoscenze di Talbot si dimostrarono indispensabili, dacché le sue sostanze chimiche psicotrope si integravano perfettamente con le teorie dell\'espansione neurale. Apprese dunque che non fu salvato per mera coincidenza. Infatti, venne raccolto dalla fossa con l\'intento di espandere la conoscenza dell\'intera scuola. Accettò di dare il suo supporto finché avrebbe recuperato tutte le forze e fu incaricato di ricercare un composto derivato dell\'ipofisi in grado di aprire il terzo occhio. Una sostanza che i monaci chiamavano \\"elemento chimico dell\'anima\\". Ma quello che iniziò come un favore nei confronti dei suoi salvatori, presto si tramutò in un\'ossessione. Studiando con attenzione gli archivi scolastici di testi perduti, scoprì formule scientifiche che confermarono idee dapprima inconcepibili. Sognò di introdurre l\'intero genere umano in un nuovo periodo di illuminismo. Forse così gli incubi in cui vedeva centinaia di operai morti sarebbero svaniti dalla sua mente, così come quei due occhi color nocciola.<br><br>Ma quando ormai si avvicinava a una scoperta rivoluzionaria, l\'atteggiamento dei monaci nei suoi confronti cambiò. I loro sorrisi gentili erano accompagnati da sguardi irrequieti che si distoglievano all\'istante al minimo contatto visivo. Le cortesi conversazioni divennero mormorii soffocati. L\'ultima cosa che ricorda della scuola è il soffitto della sua stanza, con crepe che si diramavano come dendrite.<br><br>I ricordi successivi sono come un mosaico infranto di immagini ed emozioni. Luci confuse, zoccoli sul selciato, ruvida iuta che gli raschia le guance e tremendi morsi sul braccio. Si risvegliò sporco e distrutto, disteso su un materasso di paglia di una fumeria d\'oppio. Nonostante la mente annebbiata, il suo primo pensiero furono i suoi appunti, l\'unica attestazione delle sue innovative rivelazioni. Si mise affannosamente a cercarli mettendo a soqquadro quel sudicio seminterrato e chiedendo aiuto a gran voce. I pochi presenti alzarono lo sguardo dalle loro amache con sguardi narcotizzati e apatici che presto si tramutarono in una specie di sonno. Ma ancor prima di notare la figura incappucciata dietro di lui, un ago gli perforò il braccio e il mondo scomparve ancora una volta.<br><br>Sveglio. Di nuovo. Ogni volta più confuso di quella prima. Con la lingua tastò le cavità tra i denti. Quanto tempo è passato, si chiedeva. Poi, un vago ricordo. L\'elemento chimico dell\'anima. I suoi appunti. L\'orlo della scoperta. Un lontano sussurro gli entrò in mente.<br><br>Maneggiava una pietra, affilandola con le mani tremolanti. Nella tenue luce della fumeria, tra i catatonici occupanti, incise la sua ricerca sulle pareti. Scrisse per ore finché gli sanguinarono le dita. Giunse fino al pavimento, annotando tutto ciò che gli sussurrava quella voce, nonostante non capisse nulla. Terminato tutto ciò che c\'era da scrivere, strinse la pietra e si incise il messaggio sul petto. Macchiato di sangue, aveva appena assistito a un vero miracolo davanti ai suoi occhi: uno splendido campo di rigogliosi fiori arancioni. La voce lo chiamò, invitandolo a entrare in quel campo per scoprire mondi e dimensioni al di là della comprensione umana. Per un istante, Talbot si sentì pervaso dal senso di meraviglia che provava da bambino.<br><br>La popolazione della fumeria si risvegliò in silenzio, con l\'odore di fumo che ancora permeava l\'aria. Arrancando fuori da quella narcotica nebbia, videro il pavimento in pietra sporco di sangue, come minuscoli fiumiciattoli che ne percorrevano le crepe. Gli occhi si abituarono al buio della stanza e si iniziarono a intravedere lettere squadrate che imbrattavano le pareti. Lettere e lettere e lettere, senza fine. Ma la frase era una, ed era sempre la stessa: <i>La morte è solo l\'inizio</i>.","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"I gemelli siamesi Charlotte e Victor Deshayes avevano un legame emotivo come nessun altro. Le scarse probabilità di riuscita del loro parto erano considerate un miracolo nel 17° secolo, eppure diedero inizio sin da subito a una vita di tormenti. Victor nacque con la parte inferiore del busto collegata al petto di sua sorella, e con le gambe avvolte intorno ai muscoli e agli organi di lei. Victor era più minuto di Charlotte al punto che, più che avere le sembianze di un bambino a sé, pareva un\'appendice del corpo di lei. Alla nascita, i due neonati vagirono come tutti i pargoli, ma allo stesso modo gridò spaventata la levatrice, che fuggì di casa spargendo la voce di un demone partorito da una strega. E così iniziò la caccia a Charlotte, Victor e alla loro mamma, Madeleine.<br><br>Gli anni successivi furono per i due gemelli solo ricordi fugaci ed effimeri, ma al contempo la cosa più simile a una vita normale che avessero mai conosciuto. Credevano che il viaggio con la madre fosse una cosa che ogni bambino dovesse provare prima o poi, o che i numerosi nascondini per le campagne francesi fossero all\'ordine del giorno per chiunque. A cinque anni, il gioco si fece improvvisamente più difficile quando la madre si ammalò. Ormai sfinita e pallida in volto, Madeleine dovette forzatamente addossare a Charlotte la responsabilità di trovare il cibo. La ragazzina, appesantita dall\'abbigliamento usato per nascondere il corpo sporgente di Victor, si mise in marcia dalla tenda nella foresta verso la cittadina più vicina. Seppur in modo strano, mise in atto l\'addestramento di una vita: cercava varchi nel mercato e sgraffignava tutto il cibo che poteva. Il gioco risultò in una vittoria, seppur momentanea.<br><br>Dopo mezzanotte, le fiamme avvolgevano l\'accampamento della famigliola, danzando nell\'oscurità. Un solo grido interruppe il silenzio notturno e una calca di cacciatori di streghe accorse in gran numero. Grosse mani sporche strapparono i gemelli dal loro letto, con Charlotte che respingeva a calci chiunque le si avvicinasse. Madeleine urlò spaventata per ciò che sarebbe potuto capitare ai suoi figli, ma la sua voce venne improvvisamente messa a tacere da una sprangata nel cranio. Victor iniziò a strillare, lamentandosi come un ratto in trappola.<br><br>I cacciatori si coordinarono rapidamente. Un giudice presente sul luogo dichiarò Madeleine colpevole di stregoneria, come comprovato dalla sua demoniaca progenie. Dopo pochi minuti, la incatenarono priva di sensi a un albero, circondandola con muschio e rametti secchi. Ripresi i sensi, non cercò di opporsi, ma implorò solo i suoi figli di volgere lo sguardo altrove. Quest\'opzione, tuttavia, non era contemplata. I due gemelli furono obbligati a osservare il tutto. Prima la torcia che veniva accesa, poi le fiamme che pian piano divoravano la loro madre dal basso, partendo dalla gonna fino ad arderne e carbonizzarne le carni. Osservarono finché le urla che le graffiavano le corde vocali si estinsero e non rimase altro che carboni crepitanti e un tanfo nauseabondo.<br><br>Ogni forma di gioia o purezza nei loro cuori morì insieme alla loro mamma. Vennero imprigionati e trasportati in un antico tempio di legno, poi venduti a un gruppo segreto di gente vestita con cappe nere. Victor reagiva con la ferocia di una bestia rabbiosa, ghermendo e addentando chiunque gli si avvicinasse. L\'unica consolazione in grado di calmarlo era l\'abbraccio di sua sorella. Charlotte, dal canto suo, rancorosa e colma di odio verso chiunque tranne suo fratello, si ripromise di proteggerlo per sempre.<br><br>Nel tempio, funsero da cavia in strani esperimenti per anni. Alcuni crudeli, ma la maggior parte solo strani e incomprensibili. Un giorno, vennero costretti a spezzare il collo a un uccellino grigio. L\'indomani, dovettero sanguinare dalle dita in un vaso di rose. Ogni settimo giorno, dovevano dormire con un ramo umido di quercia sotto il cuscino. E poi c\'erano i canti. Un infinito ostinato scandito dalle figure incappucciate a intervalli ben definiti.<br><br>Col tempo, venne messo a punto l\'esperimento finale. Due figure incappucciate guidarono i due gemelli verso il centro del tempio, ponendo Charlotte su un altare illuminato da candelabri. Da un cappuccio si intravedeva il volto rugoso di un uomo che pose il palmo sulla fronte dei due gemelli, esaminandone accuratamente i crani. Memento mori, pronunciò estraendo una lama splendente.<br><br>Charlotte rotolò su un lato, facendo cadere dall\'altare suo fratello, che allungò il braccio il più possibile, urlando e rovesciando il candelabro a terra. Le fiamme giunsero all\'istante alla legna secca e si sparsero per tutto il pavimento, incendiando le cappe nere che strisciavano a terra. Urla di dolore perforarono il caos, rinvigorendo Charlotte che sfrecciò in quell\'inferno con la vista offuscata dalle fiamme divampanti e dal fumo nero sempre più denso. Un doloroso senso di pesantezza le riempì i polmoni. Crollò a terra, asfissiata, finché vide... gli alberi. La luce del sole. Arrancò dall\'incendio verso l\'erba bagnata dalla rugiada e proseguì verso la foresta senza guardare indietro finché crollò a terra.<br><br>Quando riaprì gli occhi, Charlotte cercò la mano di Victor, che non si muoveva. Il corpo di lui pendeva passivamente dal busto di lei. Charlotte gli strinse il volto e lo guardò negli occhi tristi e immobili. Non c\'erano più i movimenti a cui era abituata, come piccoli strattoni o leggeri calcetti nel petto. Victor era morto.<br><br>Charlotte era costretta ad andare avanti con il lutto nel cuore, temendo di essere rincorsa dalle cappe nere e dai cacciatori di streghe. Nascose il cadavere di suo fratello sotto i vestiti e proseguì verso le fogne di una città vicina per accamparsi. Usciva solo per rubare del cibo o, nei casi di massima disperazione, rubando il mangime per porci dai fienili. Nel corso degli anni, gli arti di Victor si annerirono, sebbene il suo organismo dimostrò una certa resistenza alla totale decomposizione, come se il sangue di sua sorella ancora fluisse nelle sue vene. Proteggere il suo corpo senza vita divenne l\'unica ragione di vita per Charlotte, che si rifiutò sempre di separarsi dall\'unica famiglia che le era rimasta.<br><br>Visse l\'adolescenza come un gioco di sopravvivenza. L\'odio che provava per l\'umanità crebbe giorno dopo giorno perché sapeva che nessuno l\'avrebbe mai lasciata in pace. Nonostante tutta la gente morta durante i suoi furti e i disperati tentativi di fuga, ne avrebbe avuta tanta altra alle calcagna ad accusarla con parole di odio: mostro, demone, strega. E i peggiori erano gli uomini con le cappe nere. Le davano la caccia senza sosta, costringendola di continuo ad abbandonare il suo rifugio per mettersi in fuga.<br><br>Per anni Charlotte fuggì, versando il sangue per necessità, cullando il suo fratellino morto da tempo nel cuore della notte. Durante il gelo dell\'inverno, il suo corpo iniziò ad accusare la fatica. Il cibo scarseggiava e il riparo di baracche pericolanti non serviva a molto contro quelle temperature. Si accampò armata di falce vicino a un falò nel bosco, non sapendo se sarebbe morta per il freddo o per mano delle cappe nere. Con le narici cristallizzate e le labbra vagamente cianotiche per il gelo, Charlotte sentì qualcosa di mai provato prima. Accettazione. Chiuse gli occhi aprendosi alla serenità della morte, quando... uno strillo le bucò i timpani, acuto e raggelante. Con degli spasmi, Victor le si agitò in petto e venne avvolto dalla nebbia. Prima che Charlotte potesse reagire, Victor le cadde di dosso in una pozza di sangue, atterrando nella neve e fuggendo via.<br><br>Riprendendosi dall\'agonia, inizio a cercarlo. Lo chiamò a gran voce, percorse tutta la foresta finché le gambe le cedettero e alla fine vide Victor seduto appena fuori da una spessa coltre di nebbia. Aveva il volto deforme e maligno e gridava mentre una figura nera incappucciata emerse dalla nebbia, gli afferrò il braccio e lo strattonò. La serenità negli occhi di Charlotte svanì completamente e, al suo posto, tornò l\'ira con cui aveva convissuto per anni. Afferrò saldamente la falce e si addentrò nella nebbia, pronta a eviscerare chiunque si avvicinasse al suo fratellino.","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"Ji-Woon Hak si nutriva delle attenzioni del pubblico, gasandosi per ogni sguardo e per ogni bocca che pronunciava il suo nome. La sua reputazione era già alle stelle, ma lui ne bramava sempre di più. Iniziò da bambino ad attirare l\'attenzione degli altri. Lavorando nel ristorante di famiglia, metteva su degli spettacolini usando coltelli da lancio per solleticare l\'interesse della gente. I turisti più creduloni erano convinti si trattasse di un\'esperienza tipicamente coreana ed erano più che disposti a pagare per assistervi. Il padre di Ji-Woon spese gli introiti del ristorante per le lezioni di canto e di danza per suo figlio, spingendolo a raggiungere la tanto agognata fama.<br><br>E Ji-Woon non deluse le aspettative. Dopo anni passati a mostrare le sue abilità a perfetti sconosciuti nei più disparati talent show, imboccò la giusta via per la celebrità. Yun-Jin Lee, produttrice dell\'etichetta Mightee One Entertainment, lo reclutò nel suo corso di formazione, così Ji-Woon si trasferì in un dormitorio di Seoul in cui, per quattordici ore al giorno, veniva istruito su come diventare una star, imparava a ballare, cantare e camminare mostrando il giusto equilibrio tra fiducia in sé e modestia.<br><br>E per quanto estenuante, il corso diede i suoi frutti. Yun-Jin scelse Ji-Woon per entrare a far parte della band NO SPIN, che fu pervasa da una nuova travolgente energia. La fama arrivò praticamente all\'istante. Ji-Woon visse in un rapido susseguirsi di interviste e adorazione che, invece di esaurirlo come successe ai suoi compagni, gli infuse un nuovo vigore. Ogni giorno aveva la conferma di essere una spanna sopra la mediocrità che prevaleva nella società.<br><br>Ma col tempo, anche lo champagne iniziò a stufarlo. Guardando i suoi fan, vedeva la loro gioia e l\'invidia divisa per tutti i cinque membri della band. Fu questo pensiero che gli fece venir voglia di spingersi oltre.<br><br>Ji-Woon rimase lo stesso di sempre, all\'apparenza, nascondendo però l\'odio che covava da tempo sotto un grande fascino. Registrò il nuovo album dei NO SPIN al fianco dei suoi compagni, senza perdersi mai neanche un beat. Dopo una pausa pranzo tranquilla, tornò in studio e scoprì che il destino gli aveva concesso un dono. L\'inconfondibile odore di cavi in fiamme. Corse verso la regia, ma trovò la porta sbarrata da alcuni amplificatori caduti. Dall\'altra parte, i suoi compagni sbattevano contro la porta, urlando per cercare di sovrastare il crepitio delle fiamme.<br><br>Ji-Woon rispose alle urla, corse verso gli amplificatori, ne afferrò uno e... si fermò. Paralizzato. Ogni respiro era una scelta cosciente che richiedeva tutta la sua attenzione. Le urla si udivano a malapena finché, lentamente, lui si allontanò. Poi li sentì. Mentre bruciavano vivi, invocavano il suo nome. Urlavano, implorando di salvarli. Ji-Woon! Ji-Woon! Ji-Woon Hak! Era la cosa più bella che avesse mai sentito. Quando sopraggiunsero i pompieri, le sue lacrime erano sincere.<br><br>Ji-Woon venne osannato come figura tragica, un eroe che fece il possibile nel vano tentativo di salvare i suoi amici. Yun-Jin gli procurò innumerevoli interviste, finché giunse il momento di cambiare nome. Così nacque l\'Ingannatore, artista solista autoprodotto che mostrava un cuore tenero sotto un aspetto più selvaggio. Ma lontano dai palchi e dagli studi televisivi, qualcosa di più oscuro crebbe in lui.<br><br>Prese di mira le persone che vivevano da sole, facendo loro visita di notte. La prima vittima fu uno studente universitario dalla voce molto soave. Ji-Woon lo svegliò con una mazza da baseball in testa, legandogli mani e piedi e imbavagliandolo con uno straccio fissato con del nastro adesivo sulla bocca. Lo torturò per ore, dissezionandolo vivo. Ma c\'era qualcosa che non tornava. Un suono, un collegamento. Volle sentirlo implorare pietà con la sua stupenda voce mentre gli apriva lo stomaco, ma lui emetteva solo urla soffocate.<br><br>Da questo luì imparò e si regolò di conseguenza.<br><br>Le vittime andavano rapite e portate in un edificio abbandonato perché potessero urlare a più non posso, esternando le loro emozioni. Lui ne fece vera e propria musica, stimolandoli nei punti giusti per provocare vari tipi di urla, grida e strilli. Una coltellata nel quadrato dei lombi suscitava un lungo pianto gutturale, mentre un taglio nella carotide provocava un suono simile a quello di un gatto strangolato. Quanta onestà nelle loro sofferenze. Ji-Woon registrò ogni sessione, campionandole e inserendole nei suoi brani, nascoste da vari strati di melodie.<br><br>Le sue opere lo riempivano di gioia. Lasciò indizi per la polizia, posizionando una sciarpa di visone di un recente servizio fotografico intorno alla gola sgozzata di una vittima. Per l\'omicidio seguente, asportò i denti a un uomo per impiantarli nel pugile sdentato di un suo video. Durante una richiesta d\'attenzioni particolarmente audace, uccise una fan durante un incontro con il VIP, mettendole due gemelli di diamante al posto degli occhi e scrivendole sul petto HO VISTO DIO col suo stesso sangue. Ogni scena era uno spettacolo stupefacente.<br><br>Tra musica e omicidi, le opere di Ji-Woon facevano discutere in tutto il mondo. Ma preso sempre più dall\'arte della violenza, la sua carriera musicale subì un duro colpo. Il fatturato era calato parecchio e i dirigenti della Mightee One imputavano tutto a lui. Yun-Jin, ferita professionalmente, si schierò in sua difesa, ma era sola contro tutti. Il consiglio decretò che Ji-Woon non poteva più autoprodurre i suoi brani.<br><br>Una decisione devastante. Le sue tracce combinavano musica e sincera umanità, ma i dirigenti rifiutarono ogni proposta che non fosse generica e conforme alla media. È questo che vogliono? Saranno accontentati. Se loro non capivano la sua arte, lui ve li avrebbe inclusi finché non l\'avessero compresa perfettamente. \\n\\nAveva tre mesi prima del suo show privato per i membri del consiglio della Mightee One. Tre mesi per programmare il suo magnum opus. Trasferì indicibili somme di denaro sul conto di un veterinario in cambio di intere bombole di protossido di azoto, poi corruppe il tecnico del teatro privato della Mightee One perché gli consentisse l\'accesso. Essere famoso gli concesse un beneficio del dubbio che nessun comune mortale può capire. Pochi istanti prima dell\'inizio dello show, il gas venne diffuso nella sala in cui i dirigenti e i macchinisti attendevano Ji-Woon, opportunatamente in ritardo rispetto alla tabella di marcia. \\n\\nQuando fece la sua comparsa, c\'erano corpi incoscienti accasciati sulle poltrone e a terra. Agì in fretta. Legò ogni persona, fermandosi solo davanti a Yun-Jin, la donna che l\'aveva salvato dalla rovina, mettendolo sul cammino che meritava. Lei andava premiata. Meritava un ingresso speciale al suo mirabolante spettacolo. Anche da sedata, si oppose con una rabbia incontenibile. Molto più impetuosa rispetto agli altri. La tirò su come fosse la sua unica spettatrice, spalancandole gli occhi con la forza. Gli altri, invece, li portò sul palco tutti singhiozzanti per il suo atto finale. Con un ghigno malefico, li truccò in volto e sparò i riflettori su di loro, facendone i suoi strumenti. \\n\\nLi torturò a lungo al suono delle sue melodie autoprodotte, passando con eleganza da un corpo all\'altro, in un crescendo lirico dei loro lamenti. Urlavano, frignavano, strillavano, invocavano i loro cari, invocavano le madri. Il risultato fu una magnifica espressione di emozioni apparentemente umane. E il tutto avvenne con gli sguardi fissi su Ji-Woon. \\n\\nViscere cosparse sul palco finché, scagliato il suo coltello da lancio, l\'ultimo strumento umano si acquietò e la musica si interruppe. Ji-Woon, stremato e ricoperto di sangue e sudore, guardò Yun-Jin e s\'inchinò. Sipario. Aveva raggiunto la perfezione. Lama alla mano, si diresse verso Yun-Jin, determinato a completare la sua opera prima dei ringraziamenti finali. Ma appena le si avvicinò...\\n\\nLa nebbia. \\n\\nNon si sa da dove, ma si condensò tutto intorno, umida, fredda... rassicurante. Vide il palcoscenico migliore di sempre: ospedali e templi, foreste e mattatoi. Un luogo eterno abbellito con ganci arrugginiti, popolato da milioni di occhi che ne studiano i movimenti per potergli sfuggire. Per poterlo <i>vivere</i>. L\'unica cosa che gli era richiesta era accettare, diventare uno strumento della nebbia e, più di ogni altra cosa, farli urlare. \\n\\nBis!","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"Ideato dalla Umbrella Corporation, Nemesis è un\'arma bio-organica praticamente inarrestabile progettata per inseguire ed eliminare i suoi bersagli. Parte della serie Tyrant T-103, questo esemplare dispone di intelligenza e coscienza sviluppatissime grazie al parassita NE-α innestatogli. Nella sua prima missione venne liberato a Raccoon City con un unico obiettivo: sterminare i membri della S.T.A.R.S. Durante la sua furia distruttiva in città, Nemesis affrontò Jill Valentine varie volte e, sebbene se la fece sfuggire, rimase sempre a pochi passi da lei. Era sul punto di prenderla, quando una strana nebbia calò intorno a loro, mescolandosi coi fumi della città nel caos. Questo fenomeno non era certo un problema per l\'abominio, che non soffriva né il freddo né il calo della concentrazione di ossigeno nell\'aria. L\'importante era persistere anche nella nebbia per portare a compimento la missione: trovare la S.T.A.R.S., sterminare la S.T.A.R.S. e uccidere chiunque lo avrebbe ostacolato.","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/it/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Un violento e potente ultimo respiro strappato al direttore dell\'Ospedale psichiatrico Crotus Prenn, Patrick Spencer. Incanalare la sua energia permette all\'Infermiera di attraversare il mondo degli spiriti in un batter d\'occhio più volte di fila. Questa azione la lascia in uno stato di affaticamento.<br><li>Conferisce il Battito di Ciglia.</li><li>Conferisce <b>1</b> concatenazioni di Battito di Ciglia aggiuntive.</li>","name":"Ultimo Respiro di Spencer","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"Una grande trappola da appoggio realizzata in acciaio. Le trappole si trovano all\'interno dell\'area, pronte per essere prelevate e posizionate ovunque.<br><br><b>TAGLIOLA</b><br>Inizi la prova automaticamente con <b>1 tagliola</b>. Trovane e raccogline altre setacciando l\'ambiente di gioco.<br><b>Posizionare le tagliole:</b><br>Tieni premuto il <i>pulsante del potere</i> per posizionare una <b>tagliola</b> davanti a te, in un punto adatto. Una <b>tagliola</b> posizionata immobilizzerà e paralizzerà lo sfortunato giocatore che la calpesta. Un sopravvissuto sano che calpesta una <b>tagliola</b> posizionata rimarrà ferito, ma potrà tentare di liberarsi. Premi il <i>pulsante di interazione</i> per sollevare un sopravvissuto vicino immobilizzato da una <b>tagliola</b>.<br><b>Riposizionare le tagliole:</b><br>Tieni premuto il <i>pulsante del potere</i> vicino a una <b>tagliola</b> per ripristinarla lì dov\'è se non è già stata posizionata.<b>Raccogliere le tagliole:</b><br>Premi il <i>pulsante di interazione</i> vicino a una <b>tagliola</b> per raccoglierla. Per impostazione definita, puoi trasportare massimo <b>1 tagliola</b>.","name":"Trappola per Orsi","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"Una pesante campana di ghisa permeata di antichi poteri. Una volta suonata, permette al suo utilizzatore di entrare e camminare nel mondo degli spiriti.<br><br><b>CAMPANA DEL PIANTO</b><br>Tieni premuto il <i>pulsante del potere</i> per diventare <b>invisibile</b>. Premi nuovamente il <i>pulsante del potere</i> mentre sei invisibile per tornare <b>visibile</b> e muoverti più velocemente per <b>1 secondo</b>. La Campana del Pianto può essere udita fino a una distanza di <b>24 metri</b>.<br><br><b>Invisibilità</b><br>Mentre è invisibile, lo <b>Spettro</b> può muoversi più rapidamente senza essere visto e sfruttare l\'effetto <b>Impercettibile</b>. <b>Lo Spettro</b> non può attaccare mentre è invisibile, ma può sempre interagire con gli oggetti presenti nell\'ambiente. Se esposto a fonti luminose, <b>lo Spettro</b> tornerà automaticamente <b>visibile</b>.","name":"Campana del Pianto","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"Tieni premuto il <i>pulsante del potere</i> per iniziare uno sprint con la motosega. I sopravvissuti colpiti durante questo sprint finiscono in fin di vita.<br><li>Ogni azione compiuta con la motosega (accenderla, mandarla su di giri e usare lo <b>sprint</b>) riempie la barra di surriscaldamento.</li><li>Una volta riempita la <b>barra di surriscaldamento</b>, non sarà possibile usare la motosega finché non si sarà completamente raffreddata. Lo <b>sprint con la motosega</b> non viene interrotto dal surriscaldamento.</li><li>La <b>barra di surriscaldamento</b> diminuisce quando non usi la motosega.</li>","name":"Motosega","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"Un\'abilità insegnatale dalla madre e perfezionata nella natura selvaggia. La Cacciatrice lancia le accette con una precisione letale.<br><li>Comincia la prova con <b>5 accette</b>.</li><li>Carica il lancio per aumentare al massimo la velocità.</li><li>Fai il pieno di accette negli <b>armadietti</b>.</li>","name":"Accetta da caccia","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"Le tenebre interiori alimentano la sua determinazione nel togliere la vita alla sua preda.<br><br><b>MALVAGITÀ INNATA</b><br>Attivando <b>Malvagità Innata</b>, <b>l\'Ombra</b> riesce a vedere chiaramente le sue prede e a ottenere più potere malvagio perseguitandole.<br><br><b>Malvagità Innata I</b><br>Conferisce l\'effetto <b>Impercettibile</b>. Riduce leggermente la velocità di movimento e l\'affondo dell\'<i>attacco base</i>.<br><br><b>Malvagità Innata II</b><br>Riduce moderatamente il raggio di terrore e aumenta leggermente la velocità di movimento e l\'affondo dell\'<i>attacco base</i>.<br><br><b>Malvagità Innata III</b><br>Una volta attivata, tutti i sopravvissuti entrano nello stato di <b>Vulnerabilità</b>. <b>Malvagità Innata III</b> dura <b>60 secondi</b>, dopo i quali regredisce a <b>Malvagità Innata II</b>.<br><br><b>ABILITÀ SPECIALE: PERSEGUITARE</b><br>Tieni premuto il <i>pulsante del potere</i> per perseguitare tutti i sopravvissuti visibili e alimentare i progressi per i livelli di <b>Malvagità Innata</b>.<br><br><span class=\\"FlavorText\\">\\"L\'ho incontrato quindici anni fa. Mi era stato detto che non era rimasto più nulla: nessuna razionalità, nessuna coscienza, nessuna comprensione, neanche il più rudimentale senso di vita o morte, di bene o male, di giusto o sbagliato. Ho incontrato questo bambino di sei anni dal volto vuoto, pallido, senza emozione e con gli occhi neri come la pece... gli occhi del diavolo. Ho passato otto anni cercando di raggiungerlo e poi altri sette cercando di tenerlo rinchiuso, da quando mi sono reso conto che ciò che viveva dietro agli occhi di quel ragazzo era puro e semplice... male.\\" - Dott. Sam Loomis</span>","name":"Malvagità Innata","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"Fonte del potere della Strega, un dito annerito usato come catalizzatore per il suo terribile potere. La Strega piega e modella il fango a suo piacimento. Con semplici disegni rituali, crea ingannevoli copie di se stessa con fango e resti in decomposizione che può utilizzare per vari scopi.<br><li>Conferisce l\'abilità di creare e mantenere <b>10</b> trappole Fantasma.</li><li> Conferisce l\'abilità di spostarsi istantaneamente verso le trappole Fantasma innescate in un raggio di <b>40 metri</b>.</li>","name":"Catalizzatore annerito","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"Il Cannibale inizia la prova con 3 cariche. Tieni premuto il <I>pulsante del potere</i> per consumarne una ed eseguire un <b>attacco travolgente con la motosega</b> in grado di colpire più bersagli. I sopravvissuti colpiti durante l\'<b>attacco travolgente con la motosega</b> finiscono in fin di vita.<br><li>Usa una carica per prolungare la durata dell\'<b>attacco travolgente con la motosega</b>, a scapito di un tempo di ricarica leggermente più lungo.</li><li>Le cariche della motosega si ripristinano quando non usi la motosega.</li><br><br>La <b>barra delle convulsioni</b> si riempie lentamente quando mandi su di giri la motosega. Una volta riempita o dopo aver colpito un oggetto durante un <b>attacco travolgente con la motosega</b>, il Cannibale scatena le <b>convulsioni</b> che infliggono danni a tutti i sopravvissuti vicino a lui, facendoli finire in fin di vita.<br><li>La durata delle <b>convulsioni</b> aumenta per ciascuna carica usata durante l\'<b>attacco travolgente con la motosega</b>. Le cariche rimaste vanno perse.</li><li>Durante le <b>convulsioni</b><b>, la velocità di movimento si riduce.</li><li>La <b>barra delle convulsioni</b> diminuisce quando non usi la motosega e si svuota del tutto durante l\'<b>attacco travolgente con la motosega</b>. ","name":"Motosega di Bubba","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>SCINTILLA DI CARTER</b><br>Colpire i sopravvissuti con le abilità speciali del <b>Dottore</b>, <b>Terapia d\'urto</b> o <b>Esplosione statica</b>, aumenta la <i>Pazzia</i> del sopravvissuto, infliggendo <b>Pazzia</b> e attivando effetti progressivamente più potenti.<br><b>Pazzia 1:</b><br>Fa urlare i sopravvissuti una volta, rivelandone la posizione al <b>Dottore</b>. Influisce <b>leggermente</b> sul posizionamento e sulla direzione dei Test Abilità.<br><b>Pazzia 2:</b><br>Fa urlare i sopravvissuti una volta e causa delle allucinazioni sotto forma di <i>illusioni del Dottore</i>. Influisce <b>moderatamente</b> sul posizionamento e sulla direzione dei Test Abilità.<br><b>Pazzia 3:</b><br>Fa urlare i sopravvissuti a intervalli e causa delle allucinazioni sotto forma di <i>illusioni del Dottore</i>. Influisce <b>straordinariamente</b> sul posizionamento e sulla direzione dei Test Abilità. Il sopravvissuto non può eseguire azioni di guarigione, riparazione, sabotaggio, sblocco o purificazione, né usare gli oggetti finché non riacquista il senno con <i>Assennamento</i>. Quando un sopravvissuto riacquista il senno con <i>Assennamento</i>, torna a <b>Pazzia 1</b>.<br><br><b>ABILITÀ SPECIALE: Terapia d\'urto</b><br>Tieni premuto il <i>pulsante del potere</i> per eseguire <b>Terapia d\'urto</b> e scatenare un attacco d\'urto di fronte a te. I sopravvissuti colpiti dalla <b>Terapia d\'urto</b> subiscono una <i>Pazzia</i> incrementata che interrompe ogni interazione. La <b>Terapia d\'urto</b> nega immediatamente l\'effetto di <b>Ignaro</b>.<br><br><b>ABILITÀ SPECIALE: Esplosione statica</b><br>Tieni premuto il <i>pulsante abilità attiva</i> per eseguire un\'<b>Esplosione statica</b> e far urlare tutti i sopravvissuti nel raggio di terrore del Dottore, infliggendo loro una <i>Pazzia</i> incrementata. L\'<b>Esplosione statica</b> può essere attivata solo quando non si sta ricaricando. L\'<b>Esplosione statica</b> nega immediatamente l\'effetto di <b>Ignaro</b>.","name":"Scintilla di Carter","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"I sopravvissuti svegli sentono il raggio di terrore dell\'<b>Incubo</b> e lo avvistano a una distanza massima di 16 metri, vedendolo a intermittenza tra i 16 e i 32 metri, ma non riescono a vederlo oltre questa distanza. L\'<b>Incubo</b> addormenta passivamente i sopravvissuti, facendoli entrare nel Mondo dei sogni dopo 60 secondi. Inoltre, può farli entrare nel Mondo dei sogni all\'istante colpendoli con un <i>attacco base</i>.<br><br>Una volta entrati nel Mondo dei sogni, i sopravvissuti subiscono l\'effetto <b>Ignaro</b> e possono essere vittima dei <b>Tranelli onirici</b>. I sopravvissuti possono svegliarsi fallendo i Test Abilità, facendo eseguire l\'<i>azione di sveglia</i> a un sopravvissuto sveglio o utilizzando gli orologi che trovano. Ogni <i>azione di sveglia</i> successiva richiederà il doppio del tempo. Gli orologi sveglia concedono ai sopravvissuti 30 secondi di immunità al sonno.<br><br><b>ABILITÀ SPECIALE: TRANELLO ONIRICO</b><br>Tieni premuto il <i>pulsante del potere</i> per posizionare un <b>Tranello onirico</b>. I sopravvissuti che toccano un <b>Tranello onirico</b> subiranno l\'effetto <b>Rallentamento</b> durante o subito dopo averlo fatto.<br><br>Alcuni accessori permettono di sostituire i <b>Bancali onirici</b> con i <b>Tranelli onirici</b>. I Bancali onirici appaiono nel Mondo dei sogni nel punto in cui ci sarebbero i normali bancali; vengono evidenziati per l\'<b>Incubo</b> e non lo stordiscono.<br><br><b>TOKEN ONIRICI</b>:<br>L\'<b>Incubo</b> inizia con 5 token onirici necessari per posizionare i Tranelli onirici. Una volta usati tutti, il Tranello onirico posizionato per primo verrà distrutto, lasciando spazio al nuovo.<br><br><b>ABILITÀ SPECIALE: PROIEZIONE ONIRICA</b><br>Tieni premuto il <i>pulsante Abilità attiva</i> per teletrasportarti vicino a un generatore nella tua visuale. Il tempo di ricarica si riduce del 15% per ogni sopravvissuto nel Mondo dei sogni.","name":"Demone dei sogni","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"Eternamente devota alla causa del suo signore, punisce gli ingrati e i colpevoli sottoponendo loro enigmi astuti e letali.<br><br><b>Il Maiale</b> può muoversi nell\'ombra, tendere imboscate e piazzare Trappole per Orsi invertite letali sulle teste dei sopravvissuti.<br><br><b>BATTESIMO DELL\'ENIGMISTA</b><br>Inizia la prova con <b>4</b> Trappole per Orsi invertite <i>inattive</i>. Quando ti trovi sopra un sopravvissuto in fin di vita, premi il <i>pulsante abilità attiva</i> per piazzare una Trappola per Orsi invertita <i>inattiva</i> sul sopravvissuto. Le Trappole per Orsi invertite diventano <i>attive</i> quando viene completato un generatore nella prova.<br>I sopravvissuti possono cercare di liberarsi dalle Trappole per Orsi invertite <i>attive</i> o <i>inattive</i> cercando le Scatole dell\'Enigmista sparse nell\'ambiente e trovare la chiave giusta.<br><b>Trappole per Orsi invertite attive</b><br>Una volta <i>attive</i>, le Trappole per Orsi invertite faranno partire un conto alla rovescia. Se il timer scende a zero o se il sopravvissuto con una Trappola per Orsi invertita <i>attiva</i> cerca di fuggire dalla prova con una Trappola per Orsi invertita <i>attiva</i> ancora attaccata, questo verrà automaticamente sacrificato.<br><br><b>ABILITÀ SPECIALE: ABBASSARSI</b><br>Premi il <i>pulsante abilità attiva</i> per abbassarti. Premi nuovamente il <i>pulsante abilità attiva</i> mentre sei abbassato per tornare in piedi. Mentre è abbassato, <b>il Maiale</b> si muove più lentamente. Mentre è abbassato, <b>il Maiale</b> riceve l\'effetto di <b>Impercettibile</b>.<br><br><b>ABILITÀ SPECIALE: IMBOSCATA</b><br>Mentre sei abbassato, tieni premuto il <i>pulsante Attacca</i> per scattare ed eseguire un\'<b>imboscata</b>.<br><br><span class=\\"FlavorText\\">\\"Mi darai tutto di te, ogni cellula del tuo corpo. I segni sulle tue braccia vengono da un\'altra vita. Ce la lasceremo alle spalle. Quando cammini lungo quel corridoio, non hai alcuna via d\'uscita. Ne sei consapevole?\\" -Battesimo dell\'Enigmista</span>","name":"Battesimo dell\'Enigmista","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"Nel corso di anni di esperimenti con anestetici e miorilassanti, Kenneth sviluppò diverse formule e degli intrugli efficaci. Fece largo uso del suo preferito, il tonico nutraceutico, intossicando e catturando molte vittime riluttanti. Anche l\'antidoto nutraceutico applica una serie di effetti molto utili.<br><br>Premi il <i>pulsante abilità attiva</i> per passare dal <b>tonico nutraceutico</b> all\'<b>antidoto nutraceutico</b>. Premi o tieni premuto e rilascia il <i>pulsante del potere</i> per lanciare una bottiglia.<br><br>Tieni premuto il pulsante <i>abilità attiva</i> per ricaricare le bottiglie.<br><br><b>ABILITÀ SPECIALE: Tonico nutraceutico</b><br>La bottiglia si infrangerà a contatto, rilasciando una nube di gas viola che <b>intossica</b> i sopravvissuti. I sopravvissuti affetti dall\'<b>Intossicazione</b> saranno affetti da problemi alla vista, riduzione della velocità di movimento e tosse involontaria per 2 secondi.<br><br><b>ABILITÀ SPECIALE: Antidoto nutraceutico</b><br>La bottiglia si infrangerà a contatto, rilasciando una nube di gas grigia che diventa gialla dopo l\'attivazione. Il Clown e i sopravvissuti che entrano nella <b>nube di un antidoto</b> attivo ricevono il 10% di bonus alla velocità di movimento per 5 secondi. I sopravvissuti affetti dall\'<b>Intossicazione</b> che entrano nella <b>nube dell\'antidoto</b> vengono curati.","name":"Il tonico nutraceutico","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"Lo Spirito può usare il suo potere, il Tormento di Yamaoka, per accedere a una dimensione eterea e riapparire in un altro luogo.<br><li>Tieni premuto il pulsante di azione per caricare. Lo Spirito lascerà il suo corpo, lasciando dietro di sé un simulacro immobile.</li><br>Mentre il Tormento di Yamaoka è attivo:<li>lo Spirito può transitare liberamente verso un luogo nuovo, muovendosi più rapidamente per un breve periodo. Il suo movimento è ancora ristretto agli ambienti fisici.</li><li>Lo Spirito abbandona la dimensione fisica, perdendo di vista tutti i sopravvissuti. Tuttavia, può ancora vedere i segni di graffi che questi lasciano nell\'ambiente.</li><li>Lo Spirito produce un segnale sonoro dalla sua posizione.</li><li>Al termine del potere, lo Spirito mantiene il potenziamento della velocità per un breve periodo e il suo simulacro svanisce.</li><br>Usare il Tormento di Yamaoka esaurisce la barra del potere dello Spirito. La barra del potere si ricarica automaticamente nel tempo, e dev\'essere al massimo prima di poter essere attivata nuovamente.","name":"Tormento di Yamaoka","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"Erano un normalissimo gruppo di amici, finché Frank non li tramutò nella Legione. Ora traggono potere dal brivido di non rispettare alcuna regola, tranne le loro.<br><br><b>FRENESIA BRUTALE</b><br>Attiva <b>Frenesia brutale</b> per correre più veloce e concatenare gli attacchi tra più sopravvissuti. Quando la barra del potere è piena, premi il <i>pulsante de potere</i> per attivare <b>Frenesia brutale</b>. Mentre <b>Frenesia brutale</b> è attiva, <b>la Legione</b> si muove più rapidamente e ha accesso ad altre abilità: <b>Salto del bancale</b> e <b>Squarcio brutale</b>.<br><br><b>ABILITÀ SPECIALE: SALTO DEL BANCALE</b><br>Premi il <i>pulsante di interazione</i> mentre <b>Frenesia brutale</b> è attiva per eseguire un <b>Salto del bancale</b> su un bancale caduto.<br><br><b>ATTACCO SPECIALE: SQUARCIO BRUTALE</b><br>Premi il <i>pulsante Attacca</i> mentre <b>Frenesia brutale</b> è attiva per eseguire uno <b>Squarcio brutale</b>. Colpire un sopravvissuto con <b>Squarcio brutale</b> lo ferisce e infligge l\'effetto di <b>Ferita profonda</b>. La barra del potere della Legione si riempie e tutti i sopravvissuti nel raggio di terrore senza <b>Ferita profonda</b> vengono evidenziati dall\'Istinto del killer. Se il sopravvissuto è già affetto da <b>Ferita profonda</b>, <b>Frenesia brutale</b> si conclude immediatamente senza alcun effetto.","name":"Frenesia brutale","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"Le sue condizioni peggiorarono per via della malattia che si diffondeva nel suo organismo. Le dita dei piedi si annerirono, il collo si cosparse di cisti e iniziò a vomitare sangue.<br><br><b>PURIFICAZIONE ABIETTA</b><br>Infetta gli oggetti e i sopravvissuti presenti nell\'ambiente circostante con <b>Purificazione abietta</b> per innescare un interminabile ciclo di malattie. Tieni premuto il <i>pulsante del potere</i> per caricare <b>Purificazione abietta</b> e rilascialo per emettere un getto di bile infetta. Colpisci un sopravvissuto per infettarlo per una breve durata. I sopravvissuti che interagiscono con gli oggetti infetti contrarranno la stessa infezione.<br><br>Quando la barra d\'infezione di un sopravvissuto si riempie del tutto, il sopravvissuto rimane ferito, subisce l\'effetto di <b>Sconforto</b> ed è costretto a vomitare a intervalli irregolari.<br><br><b>ABILITÀ SPECIALE: INGESTIONE CORROTTA</b><br>I sopravvissuti infetti possono guarirsi da soli e curare l\'infezione purificandosi presso una <i>Pozza della Devozione</i>. Eseguire questa azione corrompe la pozza, permettendo alla <b>Malattia</b> di consumare questa corruzione e potenziare la sua purificazione. Tieni premuto il <i>pulsante di interazione</i> accanto a una <i>Pozza della Devozione</i> corrotta per trasformare la <b>Purificazione abietta</b> in <b>Purificazione corrotta</b>. Questa azione rimuove la corruzione dalla pozza.<br><br><b>ATTACCO SPECIALE: PURIFICAZIONE CORROTTA</b><br>Dopo aver usato l\'abilità <b>Ingestione corrotta</b>, <b>Purificazione abietta</b> viene sostituita da <b>Purificazione corrotta</b> per una breve durata. <b>Purificazione corrotta</b> infligge danni all\'istante con il getto emesso, ma non può più diffondere l\'infezione ai sopravvissuti o agli oggetti presenti nell\'ambiente.","name":"Purificazione abietta","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>Ghost Face</b> studiava le sue vittime per settimane, segnandone meticolosamente le abitudini. Quando l\'impulso di uccidere si faceva impellente, sapeva esattamente come e dove colpire.<br><br><b>SUDARIO NOTTURNO</b><br>Premi il <i>pulsante del potere</i> per attivare <b>Sudario notturno</b> quando la barra del potere è piena. Mentre <b>Sudario notturno</b> è attivo, <b>Ghost Face</b> riceve l\'effetto di <b>Impercettibile</b>. Sferrare un <i>attacco base</i> svuota completamente la barra del potere e disattiva <b>Sudario notturno</b>.<br><b>Individuazione</b><br>I sopravvissuti vicini a <b>Ghost Face</b> possono cercare di <i>individuarlo</i> guardando brevemente nella sua direzione. Una volta <i>individuato</i>, la barra del potere di <b>Ghost Face</b> si svuoterà completamente e <b>Sudario notturno</b> si disattiverà in automatico. La posizione dei sopravvissuti che <i>individuano</i> <b>Ghost Face</b> verrà indicata dall\'<i>Istinto del killer</i> per un brevissimo lasso di tempo.<br><br><b>ABILITÀ SPECIALE: PERSEGUITARE</b><br>Tieni premuto il <i>pulsante del potere</i> per perseguitare i sopravvissuti mentre <b>Sudario notturno</b> è attivo. Tieni premuto il <i>pulsante del potere</i> mentre sei riparato per sporgerti e perseguitare più velocemente. Perseguitare un sopravvissuto del tutto lo <i>contrassegna</i> e applica l\'effetto di <b>Vulnerabilità</b> alla vittima <i>contrassegnata</i> per un breve lasso di tempo.<br><br><b>ABILITÀ SPECIALE: ABBASSARSI</b><br>Premi il pulsante abilità attiva per abbassarti; premilo nuovamente per rialzarti. Mentre è abbassato, <b>Ghost Face</b> si muove più lentamente.<br><br><span class=\\"FlavorText\\">\\"Non far caso a me. Continua così. Perfetto. È questa l\'immagine che voglio serbare di te.\\" - Ghost Face</span>","name":"Sudario notturno","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"Un ignoto potere ultraterreno pervase il suo corpo. All\'improvviso, si generò una spaccatura della terra che divorò il Demogorgone.<br><br><b>DEGLI ABISSI</b><br>Tieni premuto il <i>pulsante del potere</i> per caricare completamente <b>Degli Abissi</b> e successivamente attivarlo. Tutti i sopravvissuti vicini a un portale attivo verranno evidenziati dall\'Istinto del killer.<br><br><b>ATTACCO SPECIALE: SQUARCIO</b><br>Premi il <i>pulsante di attacco</i> mentre carichi <b>Degli Abissi</b> per proiettarti in avanti e sferrare un tremendo fendente.<br><br><b>ABILITÀ SPECIALE: PORTALI</b><br>Premi il <i>pulsante abilità attiva</i> per aprire un portale davanti a te.<br><b>Varca i portali</b><br>Mentre ti trovi su un portale posizionato e hai evidenziato un altro portale, premi nuovamente il <i>pulsante abilità attiva</i> per raggiungere il portale evidenziato percorrendo il Sottosopra.<br><b>Portali attivi</b><br>I portali vengono \\"attivati\\" quando vengono attraversati per la prima volta (sia come punto di partenza, che di arrivo). I sopravvissuti possono sigillare solo i portali attivi, i quali avranno un\'aura evidenziata in giallo.","name":"Degli Abissi","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"Il desiderio di annientare le stirpi più deboli prende forma.<br><br><b>IRA YAMAOKA</b><br>Assorbi i globuli di sangue lasciati dai nemici feriti. Tieni premuto il <i>pulsante del potere</i> per assorbire i globuli di sangue nell\'ambiente e riempire la barra del potere. Una volta piena, tieni premuto il <i>pulsante abilità attiva</i> per attivare <b>Furia sanguinaria</b>.<br><b>Furia sanguinaria:</b>\\nMentre <b>Furia sanguinaria</b> è attiva, <b>l\'Oni</b> diventa letale e può accedere a ulteriori abilità: <b>Scatto demoniaco</b> e <b>Colpo demoniaco</b>.<br><br><b>ABILITÀ SPECIALE: Scatto demoniaco</b><br>Tieni premuto il <i>pulsante del potere</i> mentre <b>Furia sanguinaria</b> è attiva per eseguire uno <b>Scatto demoniaco</b>. Questa abilità permette all\'<b>Oni</b> di coprire notevoli distanze a gran velocità.<br><br><b>ATTACCO SPECIALE: Colpo demoniaco</b><br>Tieni premuto il <i>pulsante Attacca</i> mentre <b>Furia sanguinaria</b> è attiva per eseguire un <b>Colpo demoniaco</b> nella direzione verso cui sei rivolto. <b>Colpo demoniaco</b> ha un raggio esteso e infligge nei sopravvissuti colpiti lo stato di fin di vita.","name":"Ira Yamaoka","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"Grazie al suo ingegno, l\'Araldo di morte riesce ad attirare le taglie con un\'invenzione unica nel suo genere: un fucile ibrido modificato che rimpiazza le munizioni convenzionali con una fiocina affilatissima affissa a una catena.<br><br><b>IL REDENTORE</b><br>Tieni premuto il <i>pulsante del potere</i> per usare il mirino. Premi il <i>pulsante attacca</i> per sparare una fiocina in grado di conficcarsi nel sopravvissuto e riavvolgi il mulinello per tirare il malcapitato verso <b>l\'Araldo di morte</b>.<br><b>Mulinello:</b><br>Mentre un sopravvissuto è trafitto da <b>il Redentore</b>, tieni premuto il <i>pulsante del potere</i> per tirarlo verso di te. A questo punto il sopravvissuto potrà opporsi o sfruttare l\'ambiente circostante per fare pressione contro la catena e infine spezzarla. Se questo avviene, <b>l\'Araldo di morte</b> sarà brevemente stordito, ma il sopravvissuto rimarrà ferito e subirà l\'effetto di <b>Ferita profonda</b>. Usare un <i>attacco base</i> mentre un sopravvissuto è trafitto spezzerà la catena senza applicare alcuna penalità né all\'<b>Araldo di morte</b>, né al sopravvissuto. Anche colpire un sopravvissuto con un <i>attacco base</i> mentre è trafitto e sano vi infliggerà la <b>Ferita profonda</b>.<br><b>Ricarica:</b><br><b>Il Redentore</b> deve essere ricaricato dopo ciascun colpo per poterlo sparare nuovamente. Tieni premuto il <i>pulsante abilità attiva</i> per ricaricare <b>il Redentore</b>.","name":"Il Redentore","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"Spalanca i cancelli della sofferenza e preparati a ricevere la tua sentenza! Il gran coltello squarcia il terreno, consentendo l\'ascesa di forze infernali e diffondendo patimento in chiunque vi si avvicini.<br><br><b>RITI DEL GIUDIZIO</b><br>Tieni premuto il <i>pulsante del potere</i> per attivarlo, poi muoviti in una direzione qualsiasi per tracciare una scia nel terreno.<br><br>I sopravvissuti che varcano questa scia attiveranno l\'<i>Istinto del killer</i> e verranno affetti dal <i>Tormento</i>. I sopravvissuti in fin di vita affetti dal <i>Tormento</i> possono essere rinchiusi in una <b>Gabbia della Redenzione</b>.<br><br><b>ATTACCO SPECIALE: Castigo dei dannati</b><br>Premi il <i>pulsante attacca</i> mentre <b>Riti del Giudizio</b> è attivo per eseguire <b>Castigo dei dannati</b>. Questo attacco rilascia un\'onda d\'urto che infligge danni ai sopravvissuti colpiti.<br><br><b>ABILITÀ SPECIALE: Gabbia della Redenzione</b><br>Premi il <i>pulsante abilità attiva</i> quando ti trovi su un sopravvissuto in fin di vita affetto dal <i>Tormento</i> per rinchiuderlo in una <b>Gabbia della Redenzione</b>. I sopravvissuti rinchiusi in una <b>Gabbia della Redenzione</b> possono essere sacrificati come se fossero appesi a un gancio. Durante la seconda fase del rituale di invocazione, saranno costretti a completare Test Abilità per respingere l\'Entità.<br><br>Un sopravvissuto che salva o viene salvato da una <b>Gabbia della Redenzione</b> perde l\'effetto del <i>Tormento</i>.<br><br><b>ABILITÀ SPECIALE: Giudizio finale</b><br>Premi il <i>pulsante abilità attiva</i> quando ti trovi su un sopravvissuto in fin di vita affetto dal <i>Tormento</i> che ha già raggiunto la fase di divincolamento da un gancio o da una gabbia per giustiziarlo.","name":"Riti del Giudizio","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"Nelle sue vene scorre del siero di pustole che gli altera la mente e il corpo, conferendogli tuttavia abilità fisiche sovrannaturali.<br><br><b>ABILITÀ SPECIALE: IMPETO</b><br>Premi il <i>pulsante del potere</i> per effettuare un <b>Impeto</b> in avanti. Farlo consuma un token <b>Impeto</b>. Durante un <b>Impeto</b>, la Piaga non può sferrare attacchi.<br><br>Esegui un <b>Impeto</b> contro un muro o un ostacolo per effettuare uno <b>Schianto</b>. Se l\'<b>Impeto</b> non colpisce un muro o un ostacolo, o se la Piaga rimane senza token <b>Impeto</b>, entrerà in un breve stato di affaticamento e inizierà a ricaricare i token.<br><br><b>ATTACCO SPECIALE: IMPETO LETALE</b><br>Dopo uno <b>Schianto</b>, premi il <i>pulsante del potere</i> per sferrare un <b>Impeto letale</b>. Farlo consuma un token <b>Impeto</b>. L\'<b>Impeto letale</b> agisce esattamente come l\'<b>Impeto</b> normale, con la differenza che la Piaga può attaccare usando il <i>pulsante di attacco</i>.","name":"Corruzione infettata","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"Legati tra loro da sangue e sofferenze, i Gemelli hanno ricevuto il potere di separarsi dal corpo che condividono. Vanno a caccia insieme come fratelli inseparabili, costituendo una minaccia doppia per i sopravvissuti.<br><br><b>ABILITÀ SPECIALE: Legame di sangue</b><br>Tieni premuto il <i>pulsante del potere</i> per liberare <b>Victor</b>. Passa da <b>Charlotte</b> a <b>Victor</b> con il <i>pulsante abilità</i>.<br><br>Se lasci <b>Victor</b> da solo, attiverà l\'<b>Istinto del killer</b>, rivelando a <b>Charlotte</b> i profili dei sopravvissuti che camminano o corrono vicino a lui. I sopravvissuti che sentono gli strilli di <b>Victor</b> sono sensibili. Tuttavia, mentre controlli <b>Charlotte</b>, i sopravvissuti possono schiacciare <b>Victor</b>.<br><br>Se <b>Victor</b> viene schiacciato, ricrescerà sul corpo di <b>Charlotte</b> dopo un po\'.<br><br><b>ATTACCO SPECIALE: Balzo</b><br>Mentre controlli <b>Victor</b>, tieni premuto il <i>pulsante abilità</i> per caricare un <b>Balzo</b> e usa il <i>pulsante attacco</i> per saltare.<br><br>Atterrare su un sopravvissuto con un <b>Balzo</b> infligge danni. Se il sopravvissuto ha la salute al massimo, <b>Victor</b> gli si attaccherà, attivando l\'<b>Istinto del killer</b> e rivelando la posizione di tutti i sopravvissuti vicini. Mentre è attaccato, il sopravvissuto subisce gli effetti <b>Sconforto</b>, <b>Ignaro</b> e <b>Immobilizzato</b> e non potrà entrare negli armadietti, né uscire dai cancelli d\'uscita. Il sopravvissuto può schiacciare <b>Victor</b> mentre gli è attaccato completando l\'azione di <b>Rimozione</b>.<br><br>Se <b>Victor</b> non colpisce nessuno con il <b>Balzo</b>, sarà temporaneamente vulnerabile e potrà essere schiacciato dai sopravvissuti. Se invece atterra su un ostacolo più alto di lui, verrà distrutto.","name":"Legame di sangue","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>Un\'affascinante abilità affinata in una vita di pratica. Ji-Woon Hak scaglia una raffica di trincianti a gran velocità.</i><br><br><b>STANDING OVATION</b><br><br>Inizia la prova con <b>60 trincianti</b>. Tieni premuto il <i>pulsante del potere</i> per caricare ed entrare in modalità di lancio.<br><br>A questo punto, premi il <i>pulsante d\'attacco</i> per lanciare un trinciante oppure tieni premuto il <i>pulsante d\'attacco</i> per scagliarne una raffica. Se lanci una raffica, aumenterai il controllo e la velocità di lancio a discapito della velocità di movimento. Usa gli armadietti per rifornirti di trincianti.<br><br><b>Indicatore di Mutilazione:</b> l\'<b>indicatore di Mutilazione</b> dei sopravvissuti aumenta ogni volta che vengono colpiti da un trinciante. Quando l\'indicatore si riempie, il sopravvissuto perderà uno stato di salute, finendo ferito o abbattuto.<br><br>L\'indicatore di Mutilazione dei sopravvissuti si riduce gradualmente se non vengono colpiti da un trinciante per un breve periodo. Colpire un sopravvissuto con un attacco base farà immediatamente diminuire il suo indicatore di Mutilazione.<br><br><b>ABILITÀ SPECIALE: Evento di punta</b><br>Ogni colpo con il trinciante riempie l\'<b>indicatore Evento</b>. Una volta pieno, puoi premere il <i>pulsante abilità</i> per attivare <b>Evento di punta</b>. In questa modalità, l\'Ingannatore lancia automaticamente una quantità illimitata di trincianti per tutta la durata dell\'<b>Evento di punta</b>. La velocità di lancio sarà notevolmente aumentata e la velocità di movimento non diminuisce dopo ciascun lancio. Puoi premere il <i>pulsante abilità</i> per annullare l\'<b>Evento di punta</b>, ma in questo modo azzererai l\'<b>Indicatore Evento</b> e partirà il tempo di ricarica di <b>Standing Ovation</b>.","name":"Standing Ovation","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"Un virus che causa mutazioni estreme e può essere trasferito ad altri. Gli effetti incrementano la forza e l\'aggressività di Nemesis.<br><br><b>ATTACCO SPECIALE: Frustata di tentacolo</b><br>Tieni premuto il pulsante del potere per caricare un attacco. Una volta carico, premi il pulsante d\'attacco per scatenare la <b>Frustata di tentacolo</b>. Colpire un sopravvissuto con la <b>Frustata di tentacolo</b> infligge l\'effetto <b>Contagiato</b> e accelera il <b>tasso di mutazione</b>. Se un sopravvissuto è già <b>Contagiato</b>, la <b>Frustata di tentacolo</b> ne danneggia la salute.<br><br>I sopravvissuti possono curarsi dal <b>contagio</b> usando su loro stessi o su altri sopravvissuti un <b>vaccino</b> trovato nelle <b>casse di rifornimento</b>. I <b>vaccini</b> sono in quantità limitata. Dopo aver usato un <b>vaccino</b>, la posizione del sopravvissuto verrà rivelata dall\'Istinto del killer.<br><br><b>Tasso di mutazione:</b> il tuo potere si espande con l\'aumentare del <b>tasso di mutazione</b>. Al <b>tasso di mutazione 2</b>, la <b>Frustata di tentacolo</b> può distruggere bancali e muri frantumabili. Al <b>tasso di mutazione 3</b>, il raggio della <b>Frustata di tentacolo</b> aumenta. L\'icona del virus T mostra il livello attuale del <b>tasso di mutazione</b>.<br><br><b>NEMICI SPECIALI: zombi</b><br>Quando uno <b>zombi</b> attacca un sopravvissuto, gli infligge l\'effetto <b>Contagiato</b>. Se il sopravvissuto è già <b>Contagiato</b>, la sua salute verrà danneggiata.<br><br>Gli <b>zombi</b> possono essere annientati da una <b>Frustata di tentacolo</b> per accelerare il tuo <b>tasso di mutazione</b>, mentre i sopravvissuti possono annientarli con i bancali. Gli <b>zombi</b> annientati si rigenerano dopo un po\'.","name":"VIRUS T","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/it/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue in tutte le categorie a tutti i giocatori della prova.<br><li>Cumulabile.</li>","name":"Festoni del party insanguinato","flavor":"\\"Un ricordino dei bei tempi in cui la gente arrivava insieme, ma andava via urlando.\\"","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"<b>Dissipa leggermente</b> la Nebbia oscura.<br><li>Cumulabile.</li>","name":"Reagente trasparente","flavor":"\\"La Nebbia avanza, intrappolando qualunque cosa nella Sua profonda follia. Non Le si può sfuggire, non c\'è nessuna via di fuga, nessun rifugio, tranne che per le limpide acque dello stagno perso nella foresta.\\" - Dagli appunti di uno sconosciuto","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"<b>Addensa leggermente</b> la Nebbia oscura.<br><li>Cumulabile.</li>","name":"Reagente debole","flavor":"\\"Paralizzata, resisto alla fredda e lenta morte.\\"","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"<b>Addensa moderatamente</b> la Nebbia oscura.<br><li>Cumulabile.</li>","name":"Reagente offuscante","flavor":"\\"La Nebbia è allettante, ipnotizzante. La amo e La temo allo stesso tempo.\\" - Dal blocco dei bozzetti di Donna","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"<b>Addensa fortemente</b> la Nebbia oscura.<br><li>Cumulabile.</li>","name":"Reagente intorbidente","flavor":"\\"La nebbia sembra proteggerci dalla bestia, ma è un veleno, un cancro, che ci riempie di oscurità e follia.\\" - Dagli appunti di uno sconosciuto","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"Invoca l\'Entità per il <b>chiaro di luna più tenebroso</b>.","name":"Bouquet della Luna nuova ","flavor":"\\"Meglio tornare a dormire, non c\'è luna questa notte.\\"","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"Invoca l\'Entità per un <b>fioco chiaro di luna</b>.","name":"Bouquet della Luna crescente","flavor":"\\"La luna lentamente si dissolve in un sorriso: \'Non preoccuparti, il tuo segreto è al sicuro con me.\' O forse si tratta di un ghigno?\\"","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"Invoca l\'Entità per un <b>chiaro di luna più luminoso</b>.","name":"Bouquet del quarto di Luna","flavor":"\\"La vecchia luna mostra il suo volto, guardando in basso sulle prede.\\"","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"Invoca l\'Entità per il <b>chiaro di luna più luminoso</b>.","name":"Bouquet della luna piena","flavor":"\\"Al sorgere della luna, i lupi ululano per l\'inizio della caccia.\\"","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"Se bruciata, <b>aumenta leggermente</b> le probabilità di essere inviato alla tenuta MacMillan.<br><li>Cumulabile.</li>","name":"Pagina di libro mastro di MacMillan","flavor":"\\"Una pagina lacerata e sbiadita di libro mastro con informazioni illeggibili, eccetto il timbro MacMillan.\\"","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"Se bruciata, <b>aumenta considerevolmente</b> le probabilità di essere inviato alla tenuta MacMillan.<br><li>Cumulabile.</li>","name":"Pagina di libro mastro Firmata","flavor":"\\"Una pagina sbiadita di libro mastro facente riferimento ad apparecchiature da miniera e altre transazioni. Firmata da Archie MacMillan.\\"","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"Se bruciato, <b>aumenta straordinariamente</b> le probabilità di essere inviato alla tenuta MacMillan.<br><li>Cumulabile.</li>","name":"Osso della falange di MacMillan","flavor":"\\"I resti scheletali di MacMillan furono ritrovati nei sotterranei del deposito della miniera. Le ossa della sua gamba fatte a pezzi e un martello da minatore appoggiato sul suo grembo.\\"","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"Se bruciato, <b>aumenta leggermente</b> le probabilità di essere inviato alle Demolizioni Autohaven.<br><li>Cumulabile.</li>","name":"Targa distrutta","flavor":"\\"Un foglio di metallo notevolmente arrugginito, ritorto e lacerato.\\"","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"Se bruciata, <b>aumenta considerevolmente</b> le probabilità di essere inviato alle Demolizioni Autohaven.<br><li>Cumulabile.</li>","name":"Targa della Virginia","flavor":"\\"Una targa ricurva e arrugginita dello stato della Virginia.\\"","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"Se bruciata, <b>aumenta straordinariamente</b> le probabilità di essere inviato alle Demolizioni Autohaven.<br><li>Cumulabile.</li>","name":"Chiave di Azarov","flavor":"\\"Una chiave rotta appartenente a un veicolo di marca sconosciuta. Il suo portachiavi identifica il proprietario come un certo A. Azarov.\\"","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"Se bruciata, <b>aumenta leggermente</b> le probabilità di essere inviato alla fattoria Coldwind.<br><li>Cumulabile.</li>","name":"Piastrina per bestiame n. 28","flavor":"\\"Una piastrina macchiata di sangue bovino contrassegnata con il numero \\"28\\".\\"","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"Se bruciata, <b>aumenta considerevolmente</b> le probabilità di essere inviato alla fattoria Coldwind.<br><li>Cumulabile.</li>","name":"Piastrina per bestiame di Coldwind n. 81","flavor":"\\"Una piastrina macchiata di sangue bovino contrassegnata con la dicitura \\"fattoria Coldwind\\" e con il numero \\"81\\".\\"","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"Se bruciata, <b>aumenta straordinariamente</b> le probabilità di essere inviato alla fattoria Coldwind.<br><li>Cumulabile.</li>","name":"Ciondolo portafoto a cuore","flavor":"\\"Una collana d\'argento con ciondolo portafoto a cuore. Al suo interno c\'è la seguente incisione: E+M.\\"","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"Se bruciato, <b>aumenta leggermente</b> le probabilità di essere inviato all\'Ospedale psichiatrico Crotus Prenn.<br><li>Cumulabile.</li>","name":"Targhetta infermità mentale","flavor":"\\"Un foglietto di carta sbiadito e consunto contenente informazioni illeggibili.\\"","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"Se bruciato, <b>aumenta considerevolmente</b> le probabilità di essere inviato all\'Ospedale psichiatrico Crotus Prenn.<br><li>Cumulabile.</li>","name":"Targhetta infermità mentale di P. Elliott","flavor":"\\"Un foglietto di carta rosa che accerta il trasferimento di Philip Elliott all\'Ospedale psichiatrico Crotus Prenn.\\"","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"Se bruciato, <b>aumenta straordinariamente</b> le probabilità di essere inviato all\'Ospedale psichiatrico Crotus Prenn.","name":"Fotografia matrimonio bruciacchiata","flavor":"\\"Un ritratto bruciacchiato di una coppia di sposi nel giorno del loro matrimonio. I loro volti sono completamente anneriti e irriconoscibili.\\"","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"Se bruciato, <b>aumenta leggermente</b> la probabilità di essere inviato a Haddonfield.<br><li>Cumulabile.</li>","name":"Volantino del Festival della Raccolta","flavor":"\\"Un opuscolo informativo sbiadito del Festival della Raccolta di Haddofield del \'78. Una grande zucca tipo cartone animato è rappresentata sul lato superiore.\\"","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"Se bruciata, <b>aumenta considerevolmente</b> la probabilità di essere inviato a Haddonfield.<br><li>Cumulabile.</li>","name":"Assicella pericolante","flavor":"\\"Un\'assicella marcia e ammuffita di legno di quercia come quelle trovate in molte delle case di Haddonfield.\\"","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"Se bruciata, <b>aumenta straordinariamente</b> la possibilità di essere inviato a Haddonfield.","name":"Chiave di proprietà immobiliare di Strode","flavor":"\\"Una chiave di casa, dall\'apparenza banale. Un\'etichetta di cartoncino attaccata ad essa dice: \\"Agenzia Immobiliare Strode\\", seguito da un indirizzo scritto a mano: \\"45 Lampkin Lane\\".\\"","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"Se bruciato, <b>aumenta leggermente</b> le probabilità di essere inviato alla palude Backwater.<br><li>Cumulabile.</li>","name":"Cordame fumante","flavor":"\\"Un pezzo di cima bruciata ancora fumante.\\"","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"Se bruciato, <b>aumenta considerevolmente</b> le probabilità di essere inviato alla palude Backwater.<br><li>Cumulabile.</li>","name":"Cartello di benvenuto fumante","flavor":"\\"Un cartello di benvenuto realizzato usando un pezzo grezzo di un\'asse di cipresso levigato dall\'acqua. Il cartello è carbonizzato e ancora fumante.\\"","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"Se bruciato, <b>aumenta straordinariamente</b> le probabilità di essere inviato alla palude Backwater.","name":"Libro di ricette della nonna","flavor":"\\"Un raccoglitore rilegato in pelle contenente orribili ricette a base di carne umana come il buon chili della nonna.\\"","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"Se bruciato, <b>aumenta leggermente</b> la chance di essere inviati all\'Istituto Commemorativo Léry.<br><li>Cumulabile.</li>","name":"Certificato d\'urgenza","flavor":"\\"Una copia carbone ingiallita del certificato per sottoporre immediatamente un paziente a un trattamento d\'urgenza. Le informazioni copiate sono macchiate e illeggibili.\\"","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"Se bruciata, <b>aumenta considerevolmente</b> le probabilità di essere inviato all\'Istituto Commemorativo Léry.<br><li>Cumulabile.</li>","name":"Valutazione psichiatrica","flavor":"\\"Una valutazione psichiatrica firmata da Herman Carter. Descrive la perdita di memoria di un paziente e suggerisce come procedere.\\"","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"Se bruciati, <b>aumentano straordinariamente</b> le probabilità di essere inviato all\'Istituto Commemorativo Léry.","name":"Occhiali incrinati","flavor":"\\"Occhiali da lettura piegati con lenti incrinate macchiate da sangue rappreso.\\"","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"Se bruciata, <b>aumenta leggermente</b> le probabilità di essere inviato nella Foresta rossa.<br><li>Cumulabile.</li>","name":"Roccia dipinta","flavor":"\\"Roccia levigata dalla corrente. Vi è raffigurato un orso con la vernice rossa, nera e bianca.\\"","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"Se bruciato, <b>aumenta considerevolmente</b> le probabilità di essere inviato nella Foresta rossa.<br><li>Cumulabile.</li>","name":"Libro per bambini","flavor":"\\"Un libro vecchio e decrepito le cui pagine sono state rovinate dalle intemperie.\\"","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"Se bruciata, <b>aumenta straordinariamente</b> le probabilità di essere inviato nella Foresta rossa.","name":"L\'ultima maschera","flavor":"\\"Una maschera intagliata a forma di tigre, adatta al viso di un bambino. Sul retro è presente una scritta sbiadita in alfabeto cirillico.\\"","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"Se bruciato, <b>aumenta straordinariamente</b> le probabilità di essere inviato a Springwood.","name":"Il pifferaio magico","flavor":"\\"Tradito dalla città, cerca vendetta prendendo tutti i loro bambini.\\"","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"Bruciare questa offerta ti conferisce protezione contro la perdita di accessori alla fine della prova.","name":"Difesa nera","flavor":"\\"Ascolta la mia voce, risparmia il mio cammino, proteggimi dal vuoto.\\"","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"Bruciare questa offerta ti conferisce protezione contro la perdita del tuo oggetto e dei suoi accessori.","name":"Difesa bianca","flavor":"\\"Proteggimi dal male, difendimi e poi spegniti.\\"","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"Se bruciato, <b>aumenta straordinariamente</b> le probabilità di essere inviati alla Tenuta Yamaoka.","name":"Stemma dei Yamaoka","flavor":"\\"Non si sfugge mai una famiglia distrutta. Ne esci solo quando i ricordi smettono di tormentarti.\\"","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"Invoca l\'Entità per rifiutare tutte le offerte che alterano le probabilità di essere spediti in un regno specifico.<br>Può essere annullato solo se vengono usate quattro offerte identiche.","name":"Custodia sacrificale","flavor":"\\"Rinunciamo al nostro volere e ci affidiamo ciecamente alla tua guida.\\"","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"Se bruciata, <b>aumenta straordinariamente</b> le probabilità di essere spediti nella scuola elementare Midwich.","name":"Lettera di Mary","flavor":"\\"Nei miei sogni tormentati, vedo quella città.\\"","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"Se bruciato, <b>aumenta straordinariamente</b> le probabilità di essere inviati al Mattatoio di Gideon.","name":"Frammento dell\'Enigmista","flavor":"\\"﻿Congratulazioni. Sei ancora in vita. Tante persone sono così ingrate di essere vive. Ma tu no. Non più.﻿\\"","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"Se bruciata, <b>aumenta straordinariamente</b> le possibilità di essere inviato al Laboratorio Nazionale di Hawkins.","name":"Carta d\'identità del Laboratorio Nazionale di Hawkins ","flavor":"\\"Una carta d\'identità fradicia e sporca di sangue, con tanto di numero seriale.\\"","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"<b>Aumenta straordinariamente</b> le probabilità di essere spediti nella Tomba di Glenvale dopo essere stati bruciati.","name":"Cappio polveroso","flavor":"\\"Chiedi a chiunque cerchi di sopravvivere in queste terre soffocanti che cos\'è davvero un cappio e vedrai cosa ti risponderà. Pietà. Fottuta pietà.\\"","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"Una tremenda e nauseabonda torta per festeggiare i nostri primi tre anni insieme. Conferisce il <b>103%</b> di Punti Sangue bonus in tutte le categorie per tutti i giocatori che prendono parte alla prova.<br><li>Cumulabile.</li>","name":"Gateau inquietante","flavor":"\\"Buon anniversario! Alla vostra, e ai nostri tre anni insieme!\\"<br>- Il team di Dead by Daylight","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"Una torta incredibilmente sinistra per festeggiare in nostri primi quattro anni insieme, l\'1% più saporita del gateau inquietante. Conferisce il <b>104%</b> di Punti Sangue bonus in tutte le categorie per tutti i giocatori che prendono parte alla prova.<br><li>Cumulabile.</li>","name":"Gateau agghiacciante","flavor":"\\"Buon anniversario! Alla vostra, e a tanti altri anni insieme!\\"<br>- Il team di Dead by Daylight","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/it/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Una sottile lente grandangolare in perfette condizioni. Progettata per diffondere la luce della torcia elettrica a spese del suo campo di efficacia.<br><li><b>Ingrandisce moderatamente</b> il fascio luminoso della torcia</li><li><b>Riduce leggermente</b> il campo del fascio luminoso della torcia.</li>","name":"Lente grandangolare","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"Una piccola lampadina per torcia elettrica dotata di maggiore potenza, per un fascio luminoso più intenso e brillante.<br><li><b>Restringe leggermente</b> la portata del fascio luminoso della torcia.</li><li><b>Aumenta leggermente</b> la luminosità visiva del fascio luminoso.</li><li><b>Aumenta leggermente</b> la durata dell\'accecamento.</li>","name":"Lampadina potente","flavor":"\\"Neanche la luce più intensa può penetrare le tenebre della nebbia oscura.\\"","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"Una striscia di cuoio avvolta intorno alla torcia elettrica per una presa migliore.<br><li><b>Aumenta leggermente</b> la precisione della torcia.</li>","name":"Impugnatura di pelle","flavor":"\\"In troppi sono caduti a causa di mani sudate.\\"","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"Una batteria standard di marca sconosciuta.<br><li>Aggiunge <b>2 secondi</b> di utilizzo a una torcia elettrica standard.</li>","name":"Batteria","flavor":"\\"Un\'altra batteria quasi scarica.\\"","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"Una combinazione di lente e riflettore per amplificare il fascio luminoso della torcia elettrica.<br><li><b>Aumenta moderatamente</b> la luminosità visiva del fascio luminoso.</li><li><b>Aumenta moderatamente</b> la durata dell\'accecamento.</li>","name":"Lente a riflessione interna totale","flavor":"\\"Lascia che la luce li bruci e li spinga fuori dal loro tenebroso sudario.\\"","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"Un\'impugnatura di gomma pensata specificatamente per aumentare la presa delle torce elettriche.<br><li><b>Aumenta moderatamente</b> la precisione della torcia elettrica.</li>","name":"Impugnatura di gomma","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"Una lampada a incandescenza progettata per prolungare la durata della batteria di una torcia elettrica.<br><li><b>Diminuisce moderatamente</b> il consumo della batteria della torcia.</li>","name":"Filamento a basso amperaggio","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"Una batteria contrassegnata con la dicitura \\"lunga durata\\".<br><li>Aggiunge <b>4 secondi</b> di utilizzo a una torcia elettrica standard.</li>","name":"Batteria alta potenza","flavor":"\\"Una batteria della durata di 8 ore dura solo un paio di secondi nella nebbia oscura.\\"","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"Una lente di vetro di un certo spessore, che concentra il fascio luminoso della torcia elettrica per incrementarne l\'intensità.<br><li><b>Aumenta leggermente</b> il campo del fascio luminoso della torcia.</li><li><b>Aumenta leggermente</b> la portata del fascio luminoso della torcia.</li><li><b>Aumenta leggermente</b> la luminosità visiva del fascio luminoso.</li><li><b>Aumenta leggermente</b> la durata dell\'accecamento.</li>","name":"Lenti focali","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"Un modello recente di batteria che dura più a lungo.<br><li>Aggiunge <b>6 secondi</b> di utilizzo a una torcia elettrica standard.</li>","name":"Batteria a lunga durata","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"Una lampada chimica che genera un\'intensa luce chiara.<br><li><b>Aumenta considerevolmente</b> la luminosità visiva del fascio luminoso.</li><li><b>Aumenta considerevolmente</b> la durata dell\'accecamento.</li>","name":"Lampada alogena ad alta intensità","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"Una lente ampia realizzata con zaffiro antigraffio, che ottimizza la potenza e la portata del fascio luminoso.<br><li><b>Ingrandisce moderatamente</b> il fascio luminoso della torcia elettrica.</li><li><b>Aumenta leggermente</b> il fascio luminoso della torcia elettrica.</li><li><b>Aumenta moderatamente</b> la luminosità visiva del fascio luminoso.</li><li><b>Aumenta moderatamente</b> la durata dell\'accecamento.</li>","name":"Lenti di zaffiro esclusive","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"Una lampada pesante e completamente opaca di origine sconosciuta, che anche da spenta emette una tenue luce.<br><li><b>Aumenta straordinariamente</b> la luminosità visiva del fascio luminoso.</li><li><b>Aumenta straordinariamente</b> la durata dell\'accecamento.</li><li><b>Aumenta leggermente</b> il consumo della batteria della torcia elettrica.</li>","name":"Lampada bizzarra","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"Corda fittamente intrecciata, usata nei rituali di preghiera. Può essere appesa alla Chiave.<br><li>Aggiunge <b>10 secondi</b> di utilizzo alla Chiave.</li>","name":"Corda da preghiera","flavor":"\\"Prega quanto vuoi, le tue parole si perderanno lì nella Nebbia.\\"","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"Una perla bianca porosa e ricoperta di graffi. Un minuscolo anello di salto permette alla perla di essere collegata alla Chiave.<br><li><b>Aumenta moderatamente</b> il campo di lettura dell\'aura della Chiave.</li>","name":"Perla graffiata","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"Una collana di perle opache di varie dimensioni utilizzate nei rituali di preghiera. Può essere appesa alla Chiave.<br><li>Aggiunge <b>15 secondi</b> di utilizzo alla Chiave.</li>","name":"Rosario","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"Un medaglione di ottone notevolmente usurato. Qualunque disegno o incisione una volta presente su di esso è ora completamente scomparso. Può essere appeso alla Chiave utilizzando il suo anello di salto per incanalare l\'abilità di lettura dell\'aura della chiave.<br><li>Rivela l\'<b>aura dei sopravvissuti</b> in un raggio di <b>24 metri</b>.</li>","name":"Medaglione eroso","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"Un medaglione d\'oro dall\'aspetto sbiadito. Entrambe le facce sono lisce e prive di qualunque iscrizione. Può essere appeso alla Chiave usando il suo anello di salto per incanalare l\'abilità di lettura dell\'aura della chiave.<br><li>Rivela l\'<b>aura dei sopravvissuti</b> in un raggio di <b>48 metri</b>.</li>","name":"Medaglione d\'oro","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"Un portachiavi dall\'apparenza banale con un\'insolita patina scura bluastra. L\'anello lega la Chiave al suo utilizzatore, impedendogli di perderla, anche nei momenti più bui.<br><li>In caso di morte perdi questo accessorio, non la Chiave.</li>","name":"Anello di fissaggio","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"Questo pezzo di vetro opaco emette un rumore sordo vibrante. Quando si utilizza la chiave per aprire la botola oscura, il medaglione di vetro protegge la chiave dalla rottura, incanalando nel vetro l\'energia della Nebbia.<br><li>Quando apri la botola oscura perdi questo accessorio, non la chiave.</li>","name":"Vetro opale","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"Un\'ambra rosso sangue con venature nere. L\'ambra è calda al tatto. Può essere appesa alla Chiave utilizzando il suo anello di salto per incanalare l\'abilità di lettura dell\'aura della chiave.<br><li>Rivela l\'<b>aura del killer</b> in un raggio di <b>32 metri</b> con un <b>notevole consumo</b> dell\'energia della Chiave.</li>","name":"Ambra sanguigna","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"Un pezzo frammentato di un materiale spesso e fibroso. Su di esso vi è un disegno parziale e sbiadito, cosa che di per sé è piuttosto inutile.<br><li>Aggiunge <b>5 secondi</b> di carica a ogni mappa.</li>","name":"Frammento di mappa","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"Un piccolo filo elettrico. Entrambe le estremità sono notevolmente danneggiate, come se fosse stato strappato con forza dal punto in cui era fissato. Può essere legato intorno a una mappa per migliorarne la capacità di lettura dell\'aura.<br><li>Sblocca l\'abilità di individuazione dei <b>cancelli di uscita</b>.</li>","name":"Cavo elettrico giallo","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"Un timbro di legno dotato di un tampone di gomma reticolata e utilizzato per contrassegnare documenti. Non è chiaro come o da chi questo timbro sia stato utilizzato originariamente. Può essere usato con una mappa.<br><li><b>Aumenta moderatamente</b> la portata dell\'abilità di individuazione degli obiettivi della mappa.</li>","name":"Timbro inusuale","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"Una sostanza viscida e traslucida con una spettrale sfumatura lavanda. Questa gelatina di origine ignota è altamente resistente al calore.<br><li><b>Rallenta moderatamente</b> il tasso di combustione della mappa.</li>","name":"Gel ritardante","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"Un pezzo di spago ispido e ruvido di un colore rosso intenso. Può essere legato intorno ad una mappa per migliorare la sua abilità di lettura dell\'aura.<br><li>Sblocca l\'abilità di individuazione degli <b>effetti personali del killer</b>.</li>","name":"Spago Rosso","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"Una strana lente bi-asferica circondata da un anello d\'oro che può essere utilizzata per ingrandire la mappa e contrassegnare una specifica posizione. Il manufatto emette un\'energia visibile e percepibile dai sopravvissuti.<br><li>Sblocca l\'abilità contrassegno su un\'azione secondaria.</li><li>Crea un contrassegno che può essere visto da tutti i sopravvissuti.</li>","name":"Lente di Visby di vetro","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"Un timbro scolpito in un robusto legno chiaro. Il testo sulla sua base è incomprensibile: \\"kw\'zvre\'od\\". Può essere utilizzato con una mappa.<br><li><b>Aumenta considerevolmente</b> il raggio di individuazione degli obiettivi della mappa.</li>","name":"Timbro singolare","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"Un cordoncino nero liscio dall\'aspetto morbido. Può essere legato intorno a una mappa per migliorare la sua capacità di lettura dell\'aura.<br><li>Sblocca l\'abilità di individuazione delle <b>serrature oscure</b>.</li>","name":"Corda di Seta Nera","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"Un intricato insieme di lenti avvolto in un apparato sorprendentemente complesso. Gli ingranaggi che controllano la messa a fuoco delle lenti si muovono da soli per focalizzarsi su qualcosa di invisibile agli esseri umani.<br><li>Ogni sopravvissuto vede l\'aura generata dalla mappa quando il proprietario l\'attiva.</li>","name":"Lente di Visby di cristallo","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"Guanti medici monouso per evitare la contaminazione incrociata.<br><li><b>Aumentano moderatamente</b> il bonus avanzamento per aver completato i Test Abilità eccellenti.</li>","name":"Guanti di Gomma","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"Adesivo di qualità medica per chiudere piccole ferite.<br><li><b>Aumenta leggermente</b> la velocità di guarigione.</li>","name":"Cerotto a Farfalla","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"Una confezione di bendaggi, in genere presenti nei kit di pronto soccorso.<br><li>Aggiunge <b>8 cariche</b> al kit medico.</li>","name":"Fasciature","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"Una banale spugna utilizzata per assorbire il sangue in eccesso, permettendo di accedere più facilmente alle ferite.<br><li><b>Aumenta considerevolmente</b> il bonus avanzamento per aver completato i Test Abilità eccellenti.</li>","name":"Spugna","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"Una confezione di bende autofissanti, che non richiedono quindi l\'ausilio di un gancio, per una medicazione più veloce e con meno riaggiustamenti.<br><li>Aggiunge <b>8 cariche</b> al kit medico.</li><li><b>Aumenta leggermente</b> la velocità di guarigione.</li>","name":"Benda autoaderente","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"Non è esattamente un dispositivo medico, ma può essere comunque usato per chiudere una ferita in modo veloce e doloroso.<br><li><b>Aumenta moderatamente</b> la probabilità che appaia un Test Abilità.</li><li><b>100% di Punti Sangue bonus</b> quando completi i Test Abilità eccellenti.</li><li><b>Aumenta leggermente</b> la velocità di guarigione.</li>","name":"Ago e filo","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"Forbici progettate per tagliare i tessuti con facilità.<br><li><b>Aumentano moderatamente</b> la velocità di guarigione.</li>","name":"Forbici Mediche","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"Una garza sterile usata per diversi tipi di ferite. Parte di un kit completo per il trattamento delle ferite. <br><li>Aggiunge <b>12 cariche</b> al kit medico.</li>","name":"Rotolo di garza","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"Un dispositivo medico usato per contenere e isolare i tessuti corporei. Sebbene molto efficace, la sutura chirurgica è impegnativa da utilizzare.<br><li><b>Aumenta considerevolmente</b> la probabilità che appaia un Test Abilità.</li><li><b>Conferisce il 150% di Punti Sangue bonus</b> completando i Test Abilità eccellenti.</li><li><b>Aumenta leggermente</b> la velocità di guarigione.</li>","name":"Sutura chirurgica","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"Una confezione di cerotti in gel utilizzati per suturare ferite fortemente essudanti.<br><li>Aggiunge <b>16 cariche</b> al kit medico.</li>","name":"Medicazioni in gel","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"Un tampone altamente assorbente che previene le fuoriuscite di liquido corporeo se applicato a una grossa ferita addominale.<br><li><b>Aumenta considerevolmente</b> la velocità di guarigione.</li><li><b>Riduce la carica</b> di <b>8</b> unità.</li>","name":"Medicazioni addominali","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"Una polvere bianca dalle proprietà coagulanti. Applica l\'agente su una ferita per fermare l\'emorragia.<br><li>Mentre effettui una cura con il kit medico, premi il pulsante <i>Azione secondaria</i> per usare l\'agente emostatico.</li><li>Quando viene usato l\'<i>agente emostatico</i> su un sopravvissuto ferito, questo riceve l\'effetto <b>Tenacia</b> per <b>8 secondi</b>. <li>Consuma il kit medico.</li>","name":"Agente emostatico","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"Una sostanza antiemorragica in grado di arrestare il sanguinamento in una manciata di secondi.<br><li>Mentre effettui una cura con il kit medico, premi il pulsante <i>Azione secondaria</i> per usare la siringa antiemorragica.</li><li>Il sopravvissuto in questione ottiene passivamente uno stato di salute <b>16</b> secondi dopo l\'uso.</li><li>Sul tempo necessario influiscono competenze, oggetti e accessori in grado di modificare la <i>velocità di guarigione</i>.</li><li>Questo effetto viene annullato se il sopravvissuto cambia stato di salute o viene afferrato.</li><li>Consuma il kit medico.</li>","name":"Siringa antiemorragica","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"Strumento utile per stringere tubi o mantenere i cavi in posizione per prevenire danni e lesioni.<br><li>I rumori generati dalle riparazioni e la distanza da cui è possibile udirli si riducono di 8 metri.</li>","name":"Morsetto a molla","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"Molle, viti e ingranaggi. Perlopiù spazzatura inutilizzabile.<br><li>Aggiunge <b>8 cariche</b> alla cassetta degli attrezzi.</li>","name":"Scarti","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"Un banale strofinaccio. Sospettosamente pulito.<br><li><b>Aumenta leggermente</b> la velocità di riparazione della cassetta degli attrezzi.</li>","name":"Strofinaccio Pulito","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"Una bobina di filo di rame, portatile ma pesante.<br><li>Aggiunge <b>12 cariche</b> alla cassetta degli attrezzi.</li>","name":"Bobina di Cavo Elettrico","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"I giunti oscillanti forniscono flessibilità per le viti che sono difficili da raggiungere, in fondo ai dispositivi meccanici.<br><li><b>Aumentano moderatamente</b> la velocità di riparazione della cassetta degli attrezzi.</li>","name":"Giunti oscillanti","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"Guanti spessi che riducono la destrezza, ma proteggono le mani dalle ferite.<br><li>Impediscono al killer di ricevere una notifica quando saboti un gancio con la cassetta degli attrezzi.</li>","name":"Guanti di protezione","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"Qualcuno ha dipinto velocemente su questo pezzo di corteccia quelle che sembrano essere istruzioni di riparazione.<br><li>Elimina i Test Abilità quando ripari con la cassetta degli attrezzi.</li>","name":"Istruzioni","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"Una chiave inglese regolabile dalla presa resistente. Essenziale in qualsiasi cassetta degli attrezzi.<br><li>I ganci sabotati con la cassetta degli attrezzi richiedono 15 secondi in più per rigenerarsi.</li>","name":"Morsa","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"Un attrezzo da taglio rudimentale realizzato con cavi metallici seghettati e due manici di legno.<br><li><b>Aumenta leggermente</b> la velocità di sabotaggio della cassetta degli attrezzi.</li>","name":"Filo da taglio","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"Una piccola sega a mano con lama metallica.<br><li><b>Aumenta moderatamente</b> la velocità di sabotaggio della cassetta degli attrezzi.</li>","name":"Sega per Metalli","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"Questa complessa parte meccanica sembra stranamente fuori posto. È pulita e luccicante come se fosse appena uscita dalla fabbrica.<br><li>L\'azione di <b>Riparazione</b> della cassetta degli attrezzi verrà sostituita con <b>Installa un pezzo nuovo</b>.</li><li>Installare un <i>pezzo nuovo</i> riparerà il <b>15%</b> di un generatore in un lasso di <b>5</b> secondi.</li><li>Durante l\'installazione, verrai sottoposto a <b>2</b> Test Abilità dall\'elevata difficoltà.</li><li>Completandoli, otterrai un progresso del <b>5%</b> per ciascuno, fino a un massimo del <b>25%</b> di progressi aggiunti.</li><li><i>Questo accessorio viene consumato dopo l\'utilizzo</i></li>","name":"Pezzo nuovo","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"Una fede nuziale incisa, emersa dalla nebbia e che riverbera di un\'indescrivibile e incomprensibile energia.<li>Rivela l\'aura dell\'ossessione.</li><li>Riduce le possibilità di diventare l\'ossessione del killer.</li>","name":"Fede nuziale particolare","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/it/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Conferisce il <b>50%</b> di bonus Punti Sangue nella categoria Obiettivo.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Sacchetto di alloro di palude","flavor":"\\"Un sacchetto cucito a mano, delle dimensioni di un palmo, riempito di foglie secche. Rilascia un leggero aroma simile al tè.\\"","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"Conferisce il <b>75%</b> di bonus Punti Sangue nella categoria Obiettivo.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Alloro di palude fresco","flavor":"\\"Un bellissimo fiore viola che cresce in mezzo alla palude contaminata. Rilascia un leggero aroma simile al tè.\\"","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue nella categoria Obiettivo.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Alloro di palude profumato","flavor":"\\"Un bellissimo fiore viola che cresce in mezzo alla palude contaminata. Rilascia un forte aroma simile al tè.\\"","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"Conferisce il <b>50%</b> di bonus Punti Sangue nella categoria Sopravvivenza.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Sacchetto di foglie fresche di amaranto","flavor":"\\"Un sacchetto cucito a mano, delle dimensioni di un palmo, riempito di granelli simili a perline. Si dice che l\'amaranto sia eterno.\\"","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"Conferisce il <b>75%</b> di bonus Punti Sangue nella categoria Sopravvivenza.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Foglie fresche di amaranto","flavor":"\\"Le foglie verde chiaro sono attraversate da peculiari venature cremisi. Si dice che l\'amaranto sia eterno.\\"","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue nella categoria Sopravvivenza.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Foglie fresche di amaranto profumate","flavor":"\\"Le foglie verde chiaro sono attraversate da peculiari venature cremisi. Rilascia un forte aroma di radici.\\"","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"Conferisce il <b>50%</b> di bonus Punti Sangue nella categoria Altruismo.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Sacchetto di boccioli di primula","flavor":"\\"Un sacchetto cucito a mano, delle dimensioni di un palmo, contenente 4 petali d\'oro. La primula si schiude all\'ultimo momento, prima che il sole lasci il posto alla notte.\\"","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"Conferisce il <b>75%</b> di bonus Punti Sangue nella categoria Altruismo.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Boccioli di primula freschi","flavor":"\\"Fiori dorati colti al loro apice. La primula si schiude all\'ultimo momento, prima che il sole lasci il posto alla notte.\\"","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue nella categoria Altruismo.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Boccioli di primula profumati","flavor":"\\"Fiori dorati colti al loro apice. Rilascia un forte aroma terroso e confortante.\\"","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"Conferisce il <b>50%</b> di bonus Punti Sangue nella categoria Coraggio.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Sacchetto di garofano dei poeti","flavor":"\\"Un sacchetto cucito a mano, delle dimensioni di un palmo, contenente un mix di petali chiari e foglie glauche bluastre. Rilascia un profumo fortemente speziato, simile ai chiodi di garofano.\\"","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"Conferisce il <b>75%</b> di bonus Punti Sangue nella categoria Coraggio.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Garofano dei poeti fresco","flavor":"\\"Un mazzo di fiori dai petali chiari e dal cuore rosso sangue. Rilascia un profumo speziato, simile ai chiodi di garofano.\\"","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue nella categoria Coraggio.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Garofano dei poeti fresco","flavor":"\\"Un mazzo di fiori dai petali chiari e dal cuore rosso sangue. Rilascia un profumo fortemente speziato, simile ai chiodi di garofano.\\"","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"Conferisce il <b>25%</b> di bonus Punti Sangue in <b>tutte</b> le categorie a tutti i sopravvissuti.<br><li>Cumulabile.</li>","name":"Busta da lettera richiusa","flavor":"\\"Una busta da lettera richiusa e legata con 4 nastri colorati.\\"","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"Conferisce il <b>25%</b> di bonus Punti Sangue in tutte le categorie.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Busta sigillata","flavor":"\\"Una busta da lettere, chiusa e senza indirizzo, ingiallita dal tempo. Il suo messaggio non sarà mai svelato.\\"","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"Conferisce il <b>100%</b> di bonus Punti Sangue in tutte le categorie.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Torta Fuga!","flavor":"\\"Quest\'immagine di una torta sembra vera.\\"","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"<b>Aumenta leggermente</b> la fortuna.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Sacchetto di gesso","flavor":"\\"Un piccolo sacchetto di cotone riempito di una polvere di gesso bianca di origine sconosciuta. Alcuni ritengono che porti fortuna.\\"","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>Aumenta moderatamente</b> la fortuna di <b>tutti</b> i sopravvissuti.<br><li>Cumulabile.</li>","name":"Sacchetto di gesso color crema","flavor":"\\"Una statuetta friabile in miniatura fatta di sale nero e raffigurante una donna inginocchiata che offre un dono. Alcuni ritengono che porti fortuna.\\"","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"<b>Aumenta considerevolmente</b> la fortuna.<br><li>Personale.</li><li>Cumulabile.</li>","name":"Sacchetto di gesso color avorio","flavor":"\\"Un piccolo sacchetto di pelle con una linea dritta bianca cucita a mano su uno dei suoi lati. Contiene una polvere di gesso color avorio che brilla al chiaro di luna. Alcuni ritengono che porti fortuna.\\"","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>Aumenta leggermente</b> la fortuna di <b>tutti</b> i sopravvissuti.<br><li>Cumulabile.</li>","name":"Sacchetto di sale","flavor":"\\"Un piccolo sacchetto di cotone riempito di cristalli di sale nero. Alcuni ritengono che porti fortuna. Non farlo cadere.\\"","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>Aumenta considerevolmente</b> la fortuna di <b>tutti</b> i sopravvissuti.<br><li>Cumulabile.</li>","name":"Vasetto di labbra sotto sale di Vigo","flavor":"\\"Un vasetto di vetro sigillato ermeticamente e contenente labbra umane che galleggiano in una torbida salamoia. Alcuni ritengono che porti fortuna.\\"","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"Invoca l\'Entità per creare <b>1</b> altra cassa.<br><li>Cumulabile.</li>","name":"Moneta ossidata","flavor":"\\"Un pezzo di metallo rotondo che ha perso tutta la sua lucentezza.\\"","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"Invoca l\'Entità per creare altre <b>2</b> casse.<br><li>Cumulabile.</li>","name":"Moneta luccicante","flavor":"\\"Un pezzo d\'oro pulito e lucidato.\\"","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"Calma l\'Entità per <b>aumentare leggermente</b> la <b>distanza</b> dei ganci sacrificali apparsi nel mondo.<br><li>Cumulabile.</li>","name":"Legno di quercia pietrificato","flavor":"\\"Un pezzo di legno pietrificato in deterioramento.\\"","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"Cominci la prova con qualcun altro.<br><li>Segreto.</li>","name":"Sudario dell\'Unione","flavor":"\\"Un pezzo di tessuto annodato.\\"","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"Tutti i sopravvissuti cominciano la prova insieme.<br><li>Segreto.</li>","name":"Sudario dei Legami","flavor":"\\"Un pezzo di tessuto quadrato e sbiadito, con piccoli nodi alle estremità.\\"","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"Inizi la prova il più lontano possibile dal killer.<br><li>Segreto.</li>","name":"Sudario di Vigo","flavor":"\\"Ho trovato meraviglie nella nebbia nel corso degli anni, ma solo adesso capisco come piegare le regole irrefutabili della Nebbia.\\" - Dal diario di Vigo","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/it/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Ogni volta che un generatore viene completato, l\'aura del killer ti viene rivelata per <span class=\\"Highlight1\\">{0} secondi</span>.<br>Quando viene alimentato l\'ultimo generatore, l\'aura del killer ti viene rivelata per <span class=\\"Highlight2\\">{1} secondi</span>.","name":"Sensazione tenebrosa","flavor":"\\"Dai retta a un veterano: rallenta, non aver fretta e cerca di non preoccuparti troppo! Il modo migliore per batterlo è sapere come pensa.\\" - Dalle audiocassette smarrite: Murf","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. La paranoia, combinata al tuo terrore di fallire, ti aiuta a evitare di ripetere gli stessi errori.<br>All\'inizio della partita e ogni volta che viene completato un generatore, ti viene rivelata l\'aura di <span class=\\"Highlight1\\">{0}</span> generatori vicini tra di loro per <span class=\\"Highlight2\\">{1} secondi</span>.<br>Se hai in mano una mappa in grado di individuare i generatori, quelli rivelati dal <i>Déjà-vu</i> verranno aggiunti alla mappa.","name":"Déjà-vu","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"Le crescenti probabilità di successo nella fuga ti riempiono di speranza e ti mettono le ali ai piedi. Lo stato <b><i>Fretta</i></b> aumenta del <span class=\\"Highlight1\\">{0}%</span> non appena i cancelli di uscita vengono alimentati per <span class=\\"Highlight3\\">{1} secondi</span>.<br>","name":"Speranza","flavor":"\\"Stronzi, allacciate le cinture! Si parte!\\" -Dalle audiocassette smarrite: Nikki","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Mentre sei appeso al gancio, le aure di tutti i sopravvissuti vengono rivelate a tutti gli altri sopravvissuti. Se il killer è in un raggio di <span class=\\"Highlight1\\">{0} metri</span>, la sua aura viene rivelata a tutti gli altri sopravvissuti.<br><br>Mentre un altro sopravvissuto è appeso al gancio, ti vengono rivelate le aure di tutti gli altri sopravvissuti. Se il killer è in un raggio di <span class=\\"Highlight1\\">{0} metri</span> dal sopravvissuto appeso, ti viene rivelata la sua aura.","name":"Parentela","flavor":"\\"Siate gentili gli uni con gli altri. Siamo tutti nella stessa barca.\\" - Dalle audiocassette smarrite: Sujan","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"La tua corsa, lieve e attenuata, rende le tue tracce più difficili da seguire. I segni di graffi restano visibili per <span class=\\"Highlight1\\">{0} secondi</span> in meno del normale.","name":"Peso piuma","flavor":"\\"Fai con calma, sa dov\'eri prima... come dico sempre: vivi lentamente e muori da vecchio.\\" -Dalle audiocassette smarrite: Dylan","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"È impensabile lasciarsi qualcuno alle spalle. Una volta che un cancello d\'uscita viene aperto, ottieni questi effetti:<br><li><span class=\\"Highlight1\\">{0}%</span> di Punti Sangue in più per azioni di cura e liberazione dal gancio.</li><li><span class=\\"Highlight2\\">{1}%</span> di bonus alla velocità di azione quando curi o liberi dal gancio altri sopravvissuti.</li><li>Ti vengono rivelate le auree di tutti gli altri sopravvissuti.</li>","name":"Non si abbandona nessuno","flavor":"\\"...non mi dire. Per me se collaboriamo, possiamo fregarlo e buttarlo giù. Evitiamo mosse scontate e pensiamo al bene comune!\\" - Dalle audiocassette smarrite: Clyde","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. L\'aura delle casse chiuse e degli oggetti nell\'ambiente ti viene rivelata entro un raggio di <span class=\\"Highlight1\\">{0} metri</span>. Conferisce una probabilità <b>considerevolmente</b> maggiore di trovare oggetti di rarità superiore nelle casse.","name":"Istinto del Predatore","flavor":"\\"I pionieri trascorrevano ore a depredare questi gioiellini.\\" -Dalle audiocassette smarrite: Aizeyu","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"Hai l\'innegabile capacità di percepire il pericolo. Ottieni un avvertimento sonoro quando guardi in direzione del killer in un cono di <span class=\\"Highlight1\\">45 gradi</span> con un raggio di <span class=\\"Highlight2\\">{0} metri</span>. Ogni volta che viene attivata, la Premonizione ha un tempo di ricarica di <span class=\\"Highlight3\\">{1} secondi</span>.","name":"Premonizione","flavor":"\\"Ho un brutto presentimento!\\"","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"Mantieni la motivazione nelle situazioni disperate. Conferisce un <span class=\\"Highlight1\\">{0}%</span> di velocità aggiuntiva di riparazione, sabotaggio, guarigione, liberazione dal gancio, salto, purificazione, apertura dei cancelli d\'uscita e sblocco delle casse quando sei ferito.","name":"Determinazione","flavor":"\\"Resta concentrato, anche nei momenti più difficili.\\"","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"Hai sviluppato una metodologia efficace per liberarti da ganci.<br><li>Garantisce fino a <span class=\\"Highlight1\\">{0}</span> tentativi di fuga extra dal gancio.</li><li>La probabilità di liberarti dal gancio aumenta di un <span class=\\"Highlight2\\">{1}%</span>.</li>","name":"Carne sfuggente","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"Hai l\'innegabile capacità di percepire il pericolo. Ottieni un avvertimento sonoro quando guardi in direzione dei totem in un cono di <span class=\\"Highlight1\\">45 gradi</span> con un raggio di <span class=\\"Highlight2\\">{0}metri</span>. Ogni volta che viene attivata, Piccole prede ha un tempo di ricarica di <span class=\\"Highlight3\\">{1} secondi</span>. Ricevi un token per ciascun totem spento e totem Maledizione purificato da qualunque giocatore. Il cono di individuazione di Piccole prede si riduce di <span class=\\"Highlight4\\">5 gradi</span> per ciascun token.","name":"Piccole prede","flavor":"\\"No.\\" - Dalle audiocassette smarrite: Andy","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"Un innaturale formicolio ti mette in guardia da una morte imminente. Ricevi un avviso se il killer guarda direttamente nella tua direzione in un raggio di <span class=\\"Highlight1\\">{0} metri</span>. Quando Brivido di paura è attivo, le probabilità di attivare il Test Abilità aumentano di un <span class=\\"Highlight2\\">{1}%</span> con aree di successo ridotte di un <span class=\\"Highlight3\\">{2}%</span>. Quando Brivido di paura è attivo, la tua velocità di riparazione, sabotaggio, guarigione, liberazione dal gancio, salto, purificazione, apertura dei cancelli d\'uscita e sblocco delle casse aumenta di un <span class=\\"Highlight4\\">{3}%</span>.","name":"Brivido di paura","flavor":"\\"C\'è una voce che non usa parole. Ascoltate.\\" - Dalle audiocassette smarrite: Sassy","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"In condizioni di stress estremo le tue prestazioni sono massime. Le aree di successo del Test Abilità eccellente durante riparazione e guarigione aumentano di un <span class=\\"Highlight1\\">{0}%</span> quando sei ferito.","name":"Dimmi che non sta accadendo per davvero","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"Aiutare gli altri fa bene al tuo morale.<br><br>Quando salvi un sopravvissuto da un gancio, ottieni un aumento del <span class=\\"Highlight1\\">{0}%</span> della velocità con cui guarisci gli altri sopravvissuti per <span class=\\"Highlight3\\">{1} secondi</span>.","name":"Ce la faremo","flavor":"\\"Sono sicuro che riusciremmo a fuggire tutti insieme se ci aiutassimo l\'un l\'altro.\\"","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Ti vengono rivelate le aure degli alleati in un raggio di <span class=\\"Highlight1\\">{0} metri</span>.","name":"Legame","flavor":"\\"Dobbiamo lavorare come una squadra, per sopravvivere ho bisogno che tu sopravviva!\\" - Dwight","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"Aumenta la velocità di riparazione di un <span class=\\"Highlight1\\">{0}%</span> per ogni altro sopravvissuto che lavora a un generatore nel raggio di <span class=\\"Highlight2\\">{1} metri</span>. Il bonus si applica anche a tutti gli altri sopravvissuti nel raggio.<br>Ottieni un <span class=\\"Highlight3\\">{2}%</span> di Punti Sangue in più per le azioni cooperative.<br>I sopravvissuti possono subire un solo effetto di Mettiti alla Prova alla volta.","name":"Mettiti alla Prova","flavor":"\\"Mostrami di cosa sei capace!\\" - Dwight","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"Sei in grado di organizzare una squadra per collaborare in modo più efficiente. Aumenta la velocità di guarigione, sabotaggio, liberazione dai ganci, purificazione, apertura dei cancelli d\'uscita e sblocco delle casse degli altri sopravvissuti di un <span class=\\"Highlight1\\">{0}%</span> in un raggio di <span class=\\"Highlight2\\">{1} metri</span>.<br>I sopravvissuti possono essere affetti da un solo effetto Leader alla volta.<br>Se esci dal raggio di competenza del Leader, questo effetto persiste sugli altri sopravvissuti per <span class=\\"Highlight3\\">{2} secondi</span>.","name":"Leader","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Non fai rumore come gli altri quando scavalchi velocemente gli ostacoli o ti nascondi negli armadietti.<br><br>Il raggio di rilevamento del rumore delle azioni di salto e occultamento diminuisce di un <span class=\\"Highlight1\\">{0}%</span>.<br><br>Questo effetto può essere innescato una volta ogni <span class=\\"Highlight2\\">{1} secondi</span>.","name":"Veloce e silenzioso","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"Quando inizi a correre, scatta al <span class=\\"Highlight1\\">{0}%</span> della tua normale velocità di corsa per un massimo di <span class=\\"Highlight2\\">{1} secondi</span>.<br>Causa <i>Sfinimento</i> per <span class=\\"Highlight4\\">{2} secondi</span>.<br><i>Scatto improvviso</i> non può essere usato quando si è in uno stato di <i>Sfinimento</i>.<br>Durante la corsa, non puoi guarire dallo <i>Sfinimento</i>.","name":"Scatto improvviso","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Un\'energia inaspettata ti pervade quando sei sul punto di fuggire. <span class=\\"Highlight1\\">Guarisci istantaneamente lo <b>stato di salute</b></span> ed effettua uno scatto al <span class=\\"Highlight2\\">{0}%</span> della tua normale velocità di corsa per <span class=\\"Highlight3\\">{1} secondi</span>, quando un cancello d\'uscita viene alimentato. Se ti trovi in trappola, l\'adrenalina non si applica, ma si attiva quando ti liberi.<br><i>Una volta attivata, l\'Adrenalina</i> ti <b>risveglierà</b> se sei addormentato.<br><i>L\'Adrenalina</i> ignora lo <i>Sfinimento</i>.<br>Causa <i>Sfinimento</i> per <span class=\\"Highlight4\\">{2} secondi</span>.<br>Durante la corsa, non puoi guarire dallo <i>Sfinimento</i>.","name":"Adrenalina","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Ti vengono rivelate le aure degli alleati feriti o in fin di vita in un raggio di <span class=\\"Highlight1\\">{0} metri</span>. L\'Empatia non rivela l\'aura degli alleati a diretto contatto con il killer.","name":"Empatia","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"Alcune piante presenti nella foresta possono essere trasformate in tinture che rallentano il sanguinamento. La <b>velocità di guarigione</b> e l\'<b>efficacia degli oggetti curativi</b> aumentano del <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Conoscenze botaniche","flavor":"\\"Le conoscenze botaniche di base potrebbero salvarti la vita, un giorno.\\"","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"Sblocca l\'abilità di autoguarigione senza alcun oggetto curativo al <span class=\\"Highlight1\\">{0}%</span> della normale velocità di guarigione. Aumenta l\'efficacia dell\'autoguarigione del <span class=\\"Highlight3\\">{1}%</span>.","name":"Cura di sé","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"Sei capace di concentrarti ed entrare in uno stato meditativo per attutire un po\' il dolore. I gemiti di dolore causati dalle ferite diminuiscono del <span class=\\"Highlight1\\">{0}%</span>.","name":"Volontà di ferro","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"Gli animali sembrano fidarsi di te, mantenendo spesso la calma in tua presenza. Riduce le probabilità di allertare le creature del bosco del <span class=\\"Highlight1\\">{0}%</span>.<br>Spirito calmo ti permette di superare l\'impulso di urlare.","name":"Spirito calmo","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura.<br><li>Se trasporti un sopravvissuto, vedi le aure dei ganci in un raggio di <span class=\\"Highlight1\\">56 metri</span> dal punto in cui hai sollevato il sopravvissuto.</li><br>Sblocca l\'abilità di sabotaggio dei ganci senza una cassetta degli attrezzi.<br><li>Sabotare un gancio senza una cassetta degli attrezzi richiede <span class=\\"Highlight2\\">2,5 secondi</span>.</li><li>L\'azione di sabotaggio ha un tempo di ricarica di <span class=\\"Highlight3\\">{0} secondi</span>.</li>","name":"Sabotatore","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"La tua agilità è senza pari.<br><br>Dopo una lunga caduta, i riflessi felini riducono del <span class=\\"Highlight1\\">{0}%</span> la durata del tuo barcollamento dovuta alla caduta e riducono il volume dei lamenti di dolore del <span class=\\"Highlight1\\">100%</span>. Scatti al <span class=\\"Highlight2\\">{1}%</span> della tua normale velocità di corsa per un massimo di <span class=\\"Highlight3\\">{2} secondi</span>.<br><br>Causa <b>Sfinimento</b> per <span class=\\"Highlight4\\">{3} secondi</span>.<br><br>Non puoi usare <i>Atterraggio bilanciato</i> durante <b>Sfinimento</b>.<br><br>Durante la corsa, non puoi guarire dallo <b>Sfinimento</b>.<br>","name":"Atterraggio bilanciato","flavor":"\\"Ho saltato da posti più alti.\\" - Nea","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"Anni trascorsi a sfuggire ai poliziotti ti hanno insegnato un paio di cosette sulla furtività. La tua velocità di movimento mentre sei abbassata aumenta del <span class=\\"Highlight1\\">{0}%</span>.","name":"Evasione urbana","flavor":"\\"La pittura è ancora fresca, ma io sono già lontana.\\" - Nea","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"Lunghe notti all\'aperto ti hanno insegnato a fare tanto con ciò che hai. Riduci il tasso di consumo della carica di un oggetto del <span class=\\"Highlight1\\">{0}%</span> per te e per i tuoi alleati in un raggio di <span class=\\"Highlight2\\">{1} metri</span>. Se esci dal raggio, questo effetto persiste per <span class=\\"Highlight4\\">{2} secondi.</span><br>","name":"Saper stare al mondo","flavor":"\\"Così non va bene. Lascia che ti mostri come si fa.\\" - Nea","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura.<br>Se sei l\'ultimo sopravvissuto rimasto nella prova, puoi vedere l\'aura della botola oscura in un raggio di <span class=\\"Highlight1\\">{0}</span> metri.","name":"Ultima speranza","flavor":"\\"Io non perdo tempo in cazzate. Farò tutto da solo!\\" - Bill","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"Quando salvi un alleato da un gancio nel raggio di terrore del killer, vieni pervaso da un\'energia inattesa.<br>I sopravvissuti che liberi dal gancio ricevono l\'effetto <b>Tenacia</b> per <span class=\\"Highlight1\\">{0} secondi</span>.<br>","name":"Tempo prezioso","flavor":"\\"Farà un male assurdo, ma non ti ammazzerà. Alzati e cammina, soldato. È ora di entrare in azione!\\" - Bill Overbeck","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"La tua esperienza sui campi di battaglia ti ha insegnato un trucchetto o due sulla sopravvivenza.<br>Dona l\'abilità di riprenderti completamente dallo stato di fin di vita <b>una volta per prova</b>. Aumenta la velocità di recupero dallo stato di fin di vita del <span class=\\"Highlight1\\">{0}%</span>.","name":"Volontà d\'acciaio","flavor":"\\"Dio santo, mi sono proprio rincoglionito!\\" - Bill","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"I pochi amici che ti restano meritano la migliore protezione.<br>Quando curi un altro sopravvissuto in fin di vita, la tua velocità di guarigione aumenta del <span class=\\"Highlight1\\">100%.</span><br>Ricevi un token ogni volta che: <li>Esegui un salvataggio sicuro dal gancio</li><li>Ricevi un colpo per proteggere un sopravvissuto</li><li>Aiuti un sopravvissuto stordendo il killer con un bancale</li><li>Aiuti un sopravvissuto accecando il killer con una torcia</li>Ottieni un bonus del <span class=\\"Highlight2\\">25%</span> cumulabile per ciascun token a tutti i Punti Sangue ottenuti, fino a un massimo di un <span class=\\"Highlight3\\">{1}%</span>. I Punti Sangue bonus vengono conferiti solo dopo la prova.","name":"Vivremo per sempre","flavor":"\\"Forza, diamoci da fare! Me ne sbatto, amico.\\" - David King","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"Competenza attivabile.<br>Tu sì che sai come incassare colpi. Quando vieni ferito, premi sulla tua scorta di Adrenalina e avanza velocemente per evitare i danni.<br><li>Premi il pulsante <i>abilità attiva</i> mentre avanzi per scattare.</li><li>Durante lo scatto, eviti i danni.</li><li>Causa <i>Sfinimento</i> per <span class=\\"Highlight4\\">{0} secondi</span>.<br>Durante la corsa, non puoi guarire dallo <i>Sfinimento</i>.</li>","name":"Morto stecchito","flavor":"\\"Una notte camminavo per un vicolo, quando una bottiglia di birra mi vola accanto alla testa, poi un\'altra e un\'altra ancora. Mi sono detto: \\"Ci sarà da divertirsi, diamoci dentro!\\" È stata solo una piccola discussione, lo giuro!\\" - David King","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"Subisci l\'effetto di <span class=\\"Highlight1\\">Sconforto</span> per la durata della prova.<br>Il tuo sangue denso si coagula praticamente all\'istante. <li>Non lasci pozze di sangue.</li><li>I lamenti di dolore causati dalle ferite si riducono del <span class=\\"Highlight2\\">{0}%</span> in qualsiasi momento.</li><li>Conferisce l\'abilità di guarire completamente dallo stato di fin di vita.</li>","name":"Nessuna bega","flavor":"\\"Non ci ho più visto. L\'ho colpito. Mi hanno cacciato via. Dopo sono andato in un pub, mi sono scolato un paio di pinte e ho voltato pagina. Tanto non me ne può fregare di meno, sai. Che si fottano.\\" - David King","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"Man mano che i tuoi amici cadono per mano del killer, ti ritrovi isolato e le <b>abilità di lettura dell\'aura</b> del killer nei tuoi confronti sono annebbiate.<br>Ogni volta che un altro sopravvissuto viene ucciso o sacrificato, otterrai un token. Per ciascuno di essi, il killer non può leggere la tua aura in un raggio massimo di <span class=\\"Highlight1\\">{0} metri</span> per ogni sopravvissuto <b>ucciso</b> o <b>sacrificato</b>.<br><li><i>Aumenta la tua probabilità di diventare l\'ossessione del killer.</i></li><li><i>Il killer può essere <b>ossessionato</b> solo da un sopravvissuto per volta.</i></li>","name":"Unico sopravvissuto","flavor":"\\"Era l\'Uomo Nero.\\" - Laurie Strode","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"Un legame sovrannaturale ti collega al killer.<br><br>Ogni volta che la tua aura viene rivelata al killer, l\'aura del killer ti diventa visibile e ottieni un bonus di <span class=\\"Highlight1\\">{0}%</span> alla velocità di guarigione, riparazione e purificazione.<br>Se sei l\'ossessione, la tua aura viene rivelata al killer per <span class=\\"Highlight2\\">3 secondi</span> una volta ogni <span class=\\"Highlight3\\">30 secondi</span>.<br>Aumenta la probabilità di diventare l\'ossessione.<br>","name":"Oggetto dell\'ossessione","flavor":"\\"Mi stava guardando!\\" - Laurie Strode","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"Pugnala l\'aggressore nel tentativo di fuggire.<br>Dopo esserti liberato da un gancio (da solo o grazie all\'aiuto di altri), si attiverà <i>Colpo decisivo</i> per <span class=\\"Highlight1\\">{0} secondi</span>.<br>Mentre è attivo, se completi un Test Abilità quando il killer ti afferra, potrai fuggire e stordirlo per <span class=\\"Highlight1\\">5 secondi</span>.<br><li>Completare o fallire il Test Abilità annullerà il <i>Colpo decisivo</i>.</li><li>Diventi l\'Ossessione dopo aver stordito il killer.</li><br>Mentre è attivo, il <i>Colpo decisivo</i> verrà disattivato da queste interazioni:<li>riparare un generatore</li><li>curare te o altri</li><li>purificare un totem</li><li>sabotare un gancio</li><li>liberare altri dal gancio</li><br><li><i>Incrementa le possibilità di diventare l\'Ossessione.</i></li><li><i>Il killer può essere <b>ossessionato</b> solo da un sopravvissuto per volta.</i></li>","name":"Colpo decisivo","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"Rafforza il potenziale dell\'abilità di lettura dell\'aura tuo e della tua squadra.<br><li>Aumenta il raggio di lettura di <span class=\\"Highlight1\\">{0} metri</span>.</li><li>I sopravvissuti possono avere solo un effetto <i>Carte scoperte</i> alla volta.</li>","name":"Carte scoperte","flavor":"\\"Fare attenzione è la prima regola da rispettare per sopravvivere. Naturalmente, avere un aspetto come il mio non guasta.\\" -Ace","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"Tutto andrà bene alla fine; te lo senti. La tua sicurezza rafforza il sentimento di speranza di coloro che ti circondano. Per ogni altro sopravvissuto ancora in vita, conferisce un <span class=\\"Highlight1\\">{0}%</span> di bonus alla speranza di tutti i sopravvissuti rimanenti.<br>","name":"Alza la posta","flavor":"\\"Cosa posso dire? Sono solo un ragazzo molto fortunato... Sono sicuro che ne resterai in parte contagiato.\\" -Ace","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"La Dea Bendata sembra essere sempre generosa con te.<br>Recuperando un oggetto da una cassa, hai un <span class=\\"Highlight1\\">{0}%</span> di probabilità che un accessorio di rarità <span class=\\"Highlight2\\">Molto raro/a</span> (o inferiore) vi sia collegato.<br><span class=\\"Highlight3\\">{1}%</span> di probabilità di trovare un accessorio di rarità <span class=\\"Highlight4\\">Poco comune</span> (o inferiore).<br>Durante la fuga, non perdi gli eventuali accessori collegati all\'oggetto.","name":"Asso nella manica","flavor":"\\"Non è tutto oro quel che luccica. Ma l\'oro non vale nulla in questo posto, quindi questo potrebbe tornare utile.\\" - Ace","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"La precisione e l\'efficacia nelle manutenzioni sono il tuo marchio di fabbrica.<br>Il rumore prodotto dalle tue riparazioni e la distanza a cui può essere sentito sono ridotti di <span class=\\"Highlight2\\">{0} metri</span>. Se fallisci un Test Abilità, le possibilità che il generatore non esploda sono del <span class=\\"Highlight1\\">{1}%</span>. ","name":"Tecnico","flavor":"\\"Sarò furtiva come un ninja.\\" - Feng Min","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"Dopo un salto <b>affrettato</b>, forza uno sprint al <span class=\\"Highlight1\\">{0}%</span> della tua normale velocità di corsa per un massimo di <span class=\\"Highlight2\\">{1} secondi</span>. <br>Causa <i>Sfinimento</i> per <span class=\\"Highlight4\\">{2} secondi</span>.<br><i>Agilità</i> non può essere usata quando si è in stato <i>Sfinimento</i>.<br>Durante la corsa, non puoi guarire dallo <i>Sfinimento</i>.<br>","name":"Agilità","flavor":"\\"Pazzi siamo?\\" - Feng Min","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"I tuoi sensi sopraffini sono in estrema allerta.<br>Quando il killer esegue un\'azione di rottura, puoi vederlo per <span class=\\"Highlight1\\">{0} secondi</span>.","name":"Allerta","flavor":"\\"Ho il sesto senso.\\" - Feng Min","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Quando tutti i generatori vengono attivati, puoi vedere i cancelli d\'uscita nel raggio di <span class=\\"Highlight1\\">{0} metri</span>. Quando apri i cancelli d\'uscita, la tua aura viene rivelata agli altri sopravvissuti fino a <span class=\\"Highlight2\\">{1} metri</span>.<br>Quando <i>Sveglia!</i> è attiva, apri i cancelli d\'uscita più velocemente del <span class=\\"Highlight3\\">{2}%</span>.","name":"Sveglia!","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"Hai un vero talento nel trovare medicinali. Sblocchi le casse a una velocità di un <span class=\\"Highlight1\\">{0}%</span> superiore e la distanza da cui i rumori causati dalla loro apertura possono essere sentiti diminuisce di <span class=\\"Highlight2\\">{1} metri</span>.<br><i>Farmacia</i> garantisce un kit medico per le emergenze nella tua <b>prima</b> cassa sbloccata.<br>","name":"Farmacia","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"Nelle situazioni disperate ti preoccupi per i tuoi amici. Tu e i tuoi alleati entro un raggio di <span class=\\"Highlight1\\">{0} metri</span> vi riprenderete più velocemente di un <span class=\\"Highlight2\\">{1}%</span> da <b>Sfinimento, Emorragia, Rallentamento</b> e <b>Accecamento</b>. Se esci dal raggio, questo effetto persiste per <span class=\\"Highlight4\\">{2} secondi.</span><br>","name":"Veglia","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"Niente può fermarti. La tua feroce tenacia nelle situazioni disperate ti consente di strisciare il <span class=\\"Highlight1\\">{0}%</span> più rapidamente e di recuperare allo stesso tempo.<br>","name":"Tenacia","flavor":"\\"Che diavolo è? Ammazzerò quel bastardo!\\" - Detective David Tapp","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Quando completi un generatore, le aure di generatori, casse e totem entro <span class=\\"Highlight1\\">{0} metri</span> ti vengono rivelate per <span class=\\"Highlight2\\">{1} secondi</span>.<br>Se hai in mano una mappa in grado di individuare obiettivi, i generatori, le casse e i totem rivelati dall\'<i>Intuizione del Detective</i> vengono aggiunti alla mappa.","name":"Intuizione del detective","flavor":"\\"Sei in grado di dirci dove ti trovavi la notte scorsa?\\" - Detective David Tapp","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"Avvicinarti al killer infonde in te una profonda determinazione. Per ogni <span class=\\"Highlight1\\">{0} secondi</span> trascorsi all\'interno del raggio di terrore del killer e non in un inseguimento, ottieni un token fino a un massimo di <span class=\\"Highlight2\\">{1}</span>.<br>Quando <i>Sotto controllo</i> presenta almeno <b>1 token</b>, i Test Abilità buoni saranno considerati Test Abilità eccellenti, consumeranno <b>1 token</b> e conferiranno un bonus dell\'<span class=\\"Highlight3\\">1%</span> ai progressi di riparazione dei generatori.","name":"Sotto controllo","flavor":"\\"Ti avevo preso, eri in ginocchio davanti a me. Stai fuggendo terrorizzato perché ti avevamo preso. Chiuderemo questo caso!\\" - Detective David Tapp","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"Quando esegui un salto rapido o esci da un armadietto con uno scatto, non lasci segni di graffi per <span class=\\"Highlight1\\">{0} secondi</span>.<br><i>Balla con me</i> ha un tempo di ricarica di <span class=\\"Highlight1\\">{1} secondi</span>. <br>","name":"Balla con me","flavor":"\\"Un altro spettacolo è cominciato,<br>balla con me prima che sopraggiunga la tempesta, <br>segui i miei passi al ritmo affannato,<br>balla con me fino all\'alba funesta.\\" <br>- \\"Balla con me\\" di Kate Denson","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Le aure dei bancali, muri frantumabili e luoghi dei salti ti vengono rivelate entro un raggio di <span class=\\"Highlight1\\">{0} metri</span>.<br><i>Momenti propizi</i> ha un tempo di ricarica di <span class=\\"Highlight1\\">{1} secondi</span> quando salti o lasci cadere un bancale durante un inseguimento.","name":"Momenti propizi","flavor":"\\"Alzati e splendi, lavora sodo, fatti un nome,<br>prendi la mira, premi il grilletto, non cadere nel precipizio,<br>impara il valore della fede e della famiglia e non lamentarti,<br>sfrutta al massimo ogni momento propizio.\\"<br>- \\"Momenti propizi\\" di Kate Denson","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"Sei un combattente e fai di tutto pur di scappare dalla presa dell\'avversario. Gli effetti dei tuoi tentativi di divincolamento dal killer aumentano del <span class=\\"Highlight1\\">{0}%</span>. <br>Oscuri l\'abilità del killer di vedere l\'aura dei ganci entro <span class=\\"Highlight1\\">{1} metri</span>.","name":"Perdi le staffe","flavor":"\\"Scalcia e dimenati,<br>muoviti per liberarti,<br>le tue mani non possono trattenermi.\\" <br>- \\"Perdi le staffe\\" di Kate Denson","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"Competenza attivabile.<br>Trovarsi nel raggio di terrore del killer e non in un inseguimento per <span class=\\"Highlight1\\">{0} secondi</span> attiva <i>Diversivo</i>.<br><li>Una volta attivato <i>Diversivo</i>, premi <i>abilità attiva</i> quando sei accovacciato e immobile per lanciare un sasso che genera una distrazione per il killer a una distanza di <span class=\\"Highlight2\\">20 metri</span>.</li><br><li>La competenza si disattiva dopo l\'uso.</li><br>La distrazione consiste in:<br><li>Una notifica sonora</li><li>Segni di graffi</li>","name":"Diversivo","flavor":"\\"Ci sono cose facili e cose giuste. Se le confondi tra loro, non vi è certezza di cosa diventerai.\\" - Adam Francis","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"Dopo aver eseguito un salvataggio sicuro dal gancio, si attiva <i>Liberazione</i>.<br>Ora hai il <span class=\\"Highlight1\\">100%</span> di probabilità di liberarti dal gancio durante il tentativo di fuga.<br>Una <i>Liberazione</i> dal gancio riuscita attiva l\'effetto di <span class=\\"Highlight2\\">Sconforto</span> per <span class=\\"Highlight3\\">{0} secondi</span>.","name":"Liberazione","flavor":"\\"Mi ha cresciuto un uomo severo che mi ha insegnato come trarre vantaggio anche dalle situazioni peggiori.\\" - Adam Francis","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"Cominci la prova con una penalità di <span class=\\"Highlight1\\">-{1}%</span> sui Test Abilità per guarire i sopravvissuti.<br>Per ogni Test Abilità completato durante la guarigione di un sopravvissuto, ricevi un token, fino a un massimo di <span class=\\"Highlight2\\">{0}</span>.<br>Ogni token ti conferisce un progresso bonus di <span class=\\"Highlight1\\">+{2}%</span>.<br>Se stai usando l\'<i>Autoapprendimento</i>, non potrai eseguire dei Test Abilità eccellenti.<li><i>Autoapprendimento</i> non è attivo quando usi un kit medico per guarire.</li>","name":"Autoapprendimento","flavor":"\\"Non c\'è limite a quello che puoi fare, purché sia supportato da un duro lavoro.\\" - Adam Francis","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"Ogni volta che ti liberi da un gancio (per fuga o salvataggio), questo si spezza e l\'aura del killer ti viene rivelata per <span class=\\"Highlight1\\">{0}</span> secondi. Un gancio spezzato da questa competenza richiede <span class=\\"Highlight2\\">180 secondi</span> per rigenerarsi.<br>","name":"Collasso","flavor":"\\"Famelica bestia alla carica\\"<br>Uno schizzo/dipinto eseguito su un pezzo di legno trovato sul ciglio di una strada. Sentivo che aveva una storia da raccontare e colsi l\'opportunità per farlo. - Jeff, china e olio su pezzo di legno, 12x16","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"Sblocca il potenziale di capacità di lettura dell\'aura.<br><br>Vedrai l\'aura di tutti i sopravvissuti:<br><li>Che liberi o ti liberano da un gancio;</li><li>Su cui completi un\'azione di guarigione o viceversa.</li><br>Anch\'essi possono vedere la tua aura.<br><br>Si verifica per un numero massimo di <span class=\\"Highlight1\\">{0} sopravvissuti</span>. Tutti gli effetti di questa competenza verranno reimpostati se un killer ti appende al gancio.<br>","name":"Convalescenza","flavor":"\\"La benedizione che squarcia la tempesta\\"<br>Opera a olio in omaggio ai miei migliori amici, nonché i migliori musicisti che conosca, il cui primo album rimarrà sempre il mio preferito per avermi fatto vedere la luce nei periodi più bui. - Jeff, olio su tela, 16x16","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"Cominci la prova con <span class=\\"Highlight1\\">{0} token</span>.<br><br>Quando la tua aura si rivelerà al killer, si attiva <i>Stravolgimento</i> e viene consumato un token.<br><br>Per i <span class=\\"Highlight1\\">{1} secondi</span> successivi, mentre <i>Stravolgimento</i> è attivo, non lasci segni di graffi e la tua aura non viene rivelata al killer.<br><li><i>Stravolgimento</i> non si attiva se sei in fin di vita o in trappola.</li><br>","name":"Stravolgimento","flavor":"\\"Il mantello con piume di falco che inganna la morte\\"<br>Schizzo nato da diverse notti insonni invernali. Esplorazione della mitologia norrena: il coraggio nasconde le carenze, anche nei casi di assoluta vulnerabilità. - Jeff, matita su carta color avorio, 12x12","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"Condividere esperienze dolorose ha un potere curativo.<br>Mentre sei ferito, guarire un sopravvissuto senza usare un kit medico guarirà anche te con un tasso di conversione di <span class=\\"Highlight1\\">{0}%</span>.","name":"Solidarietà","flavor":"\\"Presentarsi quando le cose si mettono male, ascoltare quali sono i problemi delle persone e aiutare chi ne ha bisogno; è così che si diventa più forti, è così che si cresce.\\" - Jane Romero","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"Raggiungere un obiettivo incrementa la fiducia in te stessa.<br>Dopo aver completato un generatore, non lasci dietro di te segni di graffi per <span class=\\"Highlight1\\">{0} secondi</span>.","name":"Compostezza","flavor":"\\"Ok, calma. Non pensare troppo, continua a muoverti: ci sei.\\" - Jane Romero","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"Quando hai preso una decisione, nessuno può intralciarti.<br><br>Mentre sei in un armadietto, <i>Frontale</i> si attiverà per <span class=\\"Highlight1\\">{0} secondi</span>.<br>Mentre <i>Frontale</i> è attivo, esegui un\'azione affrettata per uscire dall\'armadietto e usare <i>Frontale</i>. Se il killer si trova nel raggio d\'azione di <i>Frontale</i>, verrà stordito per <span class=\\"Highlight1\\">{1} secondi</span>.<br>Provoca <span class=\\"Highlight3\\">Sfinimento</span> per <span class=\\"Highlight1\\">{2} secondi</span>. <br>Frontale non può essere usato quando si è in stato di Sfinimento.<br>Durante la corsa non puoi guarire dallo <span class=\\"Highlight3\\">Sfinimento</span>. <br><i>Frontale</i> non può essere usato se sono presenti corvi inattivi.<br>","name":"Frontale","flavor":"\\"Le persone vengono ricordate per gli ostacoli che superano. Puoi scappare e dimenticare di cosa sei capace, o puoi affrontare le tue paure e ricordare al mondo chi sei.\\" - Jane Romero","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"Hai un\'inspiegabile capacità di sfuggire all\'inevitabile.<br><br>Mentre ti trovi in fin di vita, se il killer ti afferra, il <span class=\\"Highlight1\\">{0}%</span> della tua velocità di recupero verrà convertito in velocità di dimenamento fino a un massimo del <span class=\\"Highlight2\\">{1}%</span>.<br>","name":"Ritorno","flavor":"\\"Ci becchiamo al ritorno.\\" - Ash Williams","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"Sblocca il potenziale dell\'abilità di lettura dell\'aura. Il processo di guarigione dei sopravvissuti in fin di vita è determinabile dall\'intensità della loro aura, fino a una distanza di <span class=\\"Highlight1\\">{0} metri</span>.<br><br>Quando guarisci un sopravvissuto dallo stato di fin di vita allo stato di ferimento, tu e il sopravvissuto guarito vedrete l\'aura del killer per <span class=\\"Highlight2\\">{1} secondi</span>.<br>","name":"Allaccia le cinture","flavor":"\\"I cacciatori di fantasmi non possono mai lasciare qualcuno indietro.\\" - Ash Williams","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"Il Male ti troverà sempre.<br><br>Dopo <span class=\\"Highlight1\\">{0} </span>eventi punteggio Colpo di protezione, si attiverà <i>Coraggio dell\'uomo</i>.<br><br>Una volta attivo, la prossima occasione che da <b>ferito</b> ti porterà allo stato di <b>fin di vita</b> sarà annullata.<br><br>Non appena tornerai con la salute piena, la tua aura sarà rivelata al killer se ti trovi in un raggio di <span class=\\"Highlight2\\">{1} metri</span> da lui.<br><br><i>Coraggio dell\'uomo</i> si disattiverà non appena sarai nuovamente in fin di vita.<br><i><li>Aumenta le probabilità di diventare l\'ossessione del killer.</li><li>Il killer può essere <b>ossessionato</b> solo da un sopravvissuto per volta.</li></i><br>","name":"Il coraggio dell\'uomo","flavor":"\\"Il bersaglio del Male sulla mia schiena è grosso quanto il Tiger Stadium.\\" - Ash Williams","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"Cerchi giustizia e vuoi svelare la verità, non importa quale ostacolo ti venga posto davanti.<br><br>L\'aura del generatore che stai riparando viene rivelata a tutti gli altri sopravvissuti entro <span class=\\"Highlight1\\">{0} metri</span>.<br><br>Se il killer abbatte un sopravvissuto mentre ripari un generatore, vedrai l\'aura di tutti gli altri sopravvissuti per <span class=\\"Highlight2\\">{1} secondi</span>.<br>","name":"L\'unione fa la forza","flavor":"\\"Riduciamo quel laboratorio a un mucchio di cenere.\\" - Nancy Wheeler","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"Quando hai un obiettivo in testa, nulla ti farà desistere. Meglio chiedere perdono che permesso. <br><br>Puoi vedere sempre i tuoi segni di graffi.<br><br>Il tuo passo aumenta di un <span class=\\"Highlight1\\">{0}%</span> in velocità.<br>","name":"Fissata","flavor":"\\"Voglio finire ciò che ho iniziato. Voglio ucciderlo.\\" - Nancy Wheeler","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"Quando ti senti solo e sperduto, ascolti il tuo cuore e ti fidi dei tuoi istinti.<br><br>Ogni volta che completi una purifica totem, si attiva <i>Forza interiore</i>. Mentre <b>Sconforto</b> è attivo, <i>Forza interiore</i> non si attiva.<br><br>Mentre <i>Forza interiore</i> è attiva, nasconderti in un armadietto per <span class=\\"Highlight1\\">{0} secondi</span> mentre sei ferito ti guarirà del tutto.<br><br><i>Forza interiore</i> si disattiva subito dopo l\'attivazione.<br>","name":"Forza interiore","flavor":"\\"Per tutto questo tempo, ce l\'ho messa tutta a fingere che stessi bene, ma non è così.\\" - Nancy Wheeler","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"Nonostante tutti ti conoscano per il tuo egocentrismo, metti a repentaglio la tua stessa vita pur di aiutare chi è in difficoltà.<br><br>Quando liberi dal gancio un sopravvissuto, questo non lascia segni di graffi o tracce di sangue per <span class=\\"Highlight1\\">{0} secondi</span>. Vedi l\'aura del killer e il killer vede la tua per <span class=\\"Highlight2\\">{1} secondi</span>.<br>","name":"Babysitter","flavor":"\\"Ho giurato di proteggervi e, anche se siete tutte teste di cazzo, ho intenzione di mantenere la parola.\\" - Steve Harrington","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"La vita ti ha insegnato l\'importanza dell\'amicizia, e questa ha infuso in te una straordinaria forza.<br><br>Mentre ti divincoli dal gancio, si attiva <i>Cameratismo</i>.<br><br>Se un altro sopravvissuto si trova entro <span class=\\"Highlight1\\">{0} metri</span> da te mentre <i>Cameratismo</i> è attivo, il timer del gancio viene messo in pausa per <span class=\\"Highlight2\\">{1} secondi</span>.<br>","name":"Cameratismo","flavor":"\\"Allora, ricordati. Una volta lì dentro... fai finta che non te ne freghi nulla. Esatto, così. Stai imparando, amico mio. Stai imparando.\\" - Steve Harrington","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"Una volta guariti gli altri sopravvissuti per un totale equivalente a uno stato di salute, si attiva <i>Nuova energia</i>. Mentre <span class=\\"Highlight1\\">Sconforto</span> è attivo, <i>Nuova energia</i> non si attiva.<br><br>Mentre <i>Nuova energia</i> è attiva, la volta successiva che ti liberi o vieni liberato dal gancio, subisci l\'effetto di <span class=\\"Highlight1\\">Sconforto</span>. Dopo un totale di <span class=\\"Highlight2\\">{0} secondi</span>, <i>Nuova energia</i> ti guarisce del tutto.<br><br><i>Nuova energia</i> si disattiva dopo averti guarito del tutto o se entri nello stato di fin di vita prima che <i>Nuova energia</i> si attivi. Perdi lo stato di <span class=\\"Highlight1\\">Sconforto</span>.<br>","name":"Nuova energia","flavor":"\\"Sì, ma no.\\" - Steve Harrington","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"Hai rimediato qualche graffio e un paio di lividi, ma la fortuna è sempre dalla tua.<br><br><i>Colpo di fortuna</i> si attiva ogni volta che vieni ferito. Mentre <i>Colpo di fortuna</i> è attivo, non lasci tracce di sangue, né segni di graffi per un totale di <span class=\\"Highlight1\\">{0} secondi</span>.<br><br>Una volta decorsa la durata totale, <i>Colpo di fortuna</i> si disattiva permanentemente per tutto il resto della prova.<br>","name":"Colpo di fortuna","flavor":"\\"Questo non ti basterà a battermi. Ce ne vogliono di botte per farmi andare al tappeto.\\" - Yui Kimura","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"Ti difendi con le unghie e con i denti, usando ogni strumento a portata di mano per portarti in vantaggio.<br><br>Tieni premuto il <i>pulsante abilità attiva</i> per <span class=\\"Highlight1\\">{0} secondi</span> mentre sei accanto a un bancale lanciato per farlo tornare in posizione verticale.<br><br><i>A ogni costo</i> ha una ricarica di <span class=\\"Highlight2\\">{1} secondi</span>.<br>","name":"A ogni costo","flavor":"\\"Ti colpirò con ogni mezzo possibile. E poi... lo rifarò ancora e ancora.\\" - Yui Kimura","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"Quando vedi qualcuno nei guai, parti in quarta, spronandolo a superare qualunque ostacolo.<br><br>Quando sei entro <span class=\\"Highlight1\\">{0} metri</span> da un sopravvissuto trasportato, ottieni l\'effetto di <span class=\\"Highlight2\\">Fretta</span> che incrementa la tua velocità di movimento di un <span class=\\"Highlight3\\">{1}%</span> e la velocità di divincolamento del sopravvissuto trasportato di un <span class=\\"Highlight4\\">{2}%</span>.<br>","name":"Evasione","flavor":"\\"Vieni, ci faremo strada con spade e lame affilate.\\" - Yui Kimura","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"Hai imparato che a volte il miglior approccio è quello furtivo. <br><br>Dopo esserti liberato o essere stato liberato da un gancio, <i>In via ufficiosa</i> si attiva per <span class=\\"Highlight1\\">{0}secondi</span>. <br><br>Mentre <i>In via ufficiosa</i> è attiva, la tua aura non viene mostrata al killer e i lamenti di dolore causati dalle ferite si riducono del <span class=\\"Highlight2\\">{1}%</span>.<br>","name":"In via ufficiosa","flavor":"\\"Fidati, conduco le mie investigazioni in modo approfondito ma discreto.\\" - Zarina Kassir","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"Hai notato che la gente presta attenzione ai rumori più intensi. <br><br>Dopo aver riparato un generatore per almeno <span class=\\"Highlight1\\">{0} secondi</span>, ti verrà evidenziato da un\'aura gialla. Il generatore rimarrà evidenziato finché non lo ripari del tutto, ne ripari un altro o entri in un armadietto. <br><br>Entrare in un armadietto fa partire una notifica sonora per il killer dal generatore evidenziato. <br><li><i>Depistaggio</i> può essere attivato solo una volta ogni <span class=\\"Highlight2\\">{1} secondi</span>.</li><br>","name":"Depistaggio","flavor":"\\"I notiziari tagliano le notizie scomode e complesse. Quelle vere, per intenderci.\\" - Zarina Kassir","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"Metti a repentaglio la tua vita per il bene degli altri.<br><br><i>Per il popolo</i> è attiva solo mentre la salute è al massimo.<br><br>Premi il <i>pulsante abilità attiva</i> quando curi un altro sopravvissuto senza kit medico per farlo passare immediatamente dallo stato di vita a quello di ferito, o da ferito a sano.<br><br>Diventi ferito e ricevi l\'effetto di <b>Sconforto</b> per <span class=\\"Highlight1\\">{0} secondi</span>.<br><br>Diventi l\'ossessione.<br><br>Equipaggiandoti con questa competenza <b>riduci</b> le probabilità di diventare l\'ossessione del killer all\'inizio della prova.<br>","name":"Per il popolo","flavor":"\\"Siamo noi a scrivere la nostra storia e sta a noi decidere come finirà.\\" - Zarina Kassir","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"Hai superato insormontabili difficoltà e ne sei uscito più forte.<br><br>Ricevi l\'effetto <b>Tenacia</b> per <span class=\\"Highlight1\\">{0} secondi</span> dopo essere stato curato o essere guarito dallo stato di fin di vita.<br>Se sei sotto l\'effetto di una maledizione, puoi guarire completamente dallo stato di fin di vita.<br><br>Questo effetto può essere attivato solo una volta ogni <span class=\\"Highlight2\\">30 secondi</span>.","name":"Guardia spirituale","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"È come se un tuo lato assopito si fosse risvegliato e senti di poter fare di tutto per aiutare gli altri.<br><br>Quando tu o l\'ossessione venite feriti, ciascuno di voi può vedere l\'aura dell\'altro.<br><br>Dopo aver completato un\'azione di guarigione sull\'ossessione o dopo che quest\'ultima ne ha completata una su di te, entrambi ricevete <span class=\\"Highlight1\\">{1}%</span> di <b>Fretta</b> per tutto il tempo in cui vi trovate a meno di <span class=\\"Highlight2\\">16 metri</span> di distanza l\'uno dall\'altro.<br><br>Riduce le probabilità di diventare l\'ossessione.<br><br>Se sei l\'ossessione, questa competenza si disattiva.","name":"Patto di sangue","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"Essere preda di forze maligne è divenuta una consuetudine e hai iniziato a sfruttare la situazione a tuo vantaggio.<br><br><i>Alleanza repressa</i> si attiva dopo aver riparato i generatori per un totale di <span class=\\"Highlight1\\">{0} secondi.</span><br><br>Quando ripari un generatore mentre la competenza è attiva, premi il <i>pulsante abilità attiva</i> per invocare l\'Entità e bloccare il generatore per <span class=\\"Highlight2\\">{1} secondi</span>. La competenza si disattiva.<br><br>I generatori interessati verranno rivelati a tutti i sopravvissuti da un\'aura bianca.","name":"Alleanza repressa ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"La tua attenzione è focalizzata sulla fuga.<br><br>Vedi le aure dei generatori entro <span class=\\"Highlight1\\">{0} metri</span>.<br><br>Ogni volta che viene completato un generatore, <i>Visionario</i> viene disattivato per <span class=\\"Highlight2\\">{1} secondi</span>.","name":"Visionario","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"Ti rifiuti di cadere, anche nella tua ora più buia.<br><br>Per ogni sopravvissuto ferito, appeso al gancio o in fin di vita, accelera le tue azioni di guarigione e liberazione dal gancio del <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Estremi rimedi","flavor":"\\"E se useranno palle da demolizione, tu costruisci mura più resistenti.\\" - Felix Richter","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"Sai come sfruttare al meglio la tua strumentazione.<br><br>Una volta per ciascuna prova, un oggetto con le cariche esaurite riempirà il <span class=\\"Highlight1\\">{0}%</span> delle sue cariche dopo <span class=\\"Highlight2\\">{1} secondi</span>.<br>","name":"Costruito per durare","flavor":"\\"L\'architettura è l\'anima della civiltà.\\" - Felix Richter","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"Hai un occhio attento che scorge ciò che sfugge ad altri.<br><br>Inizia la prova con <span class=\\"Highlight1\\">{0} token</span>. Quando una cassa è già stata aperta, consuma un token per rovistare al suo interno in cerca di un oggetto. Puoi rovistare una sola volta per ciascuna cassa.<br><br>Rovisti nelle casse un <span class=\\"Highlight2\\">{1}% più velocemente</span>.","name":"Stima","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"Il tuo stile di vita avventuroso richiede momenti di ingegnosa distrazione.<br><br>Interagire con un armadietto mentre scatti attiva una notifica sonora presso la tua posizione e ti consente di non lasciare segni di graffi per <span class=\\"Highlight1\\">{0} secondi</span>.<br><br>Non entri più negli armadietti mentre scatti e mentre questa competenza è attiva.<br><br><i>Raggiro</i> può essere attivato solo una volta ogni <span class=\\"Highlight2\\">{1} secondi</span>.","name":"Raggiro","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"Non sai cosa voglia dire arrendersi e non hai intenzione di farlo ora.<br><br>Mentre un killer ti trasporta, se ti divincoli per un <span class=\\"Highlight1\\">{0}%</span> dei progressi, attiverai <i>Lotta di potere</i>. Mentre <i>Lotta di potere</i> è attiva, puoi far cadere un bancale vicino per stordire il killer.<br>","name":"Lotta di potere","flavor":"\\"Mi sono già affidata alla protezione degli altri una volta e ho perso tutto. Non capiterà mai più.\\" - Élodie Rakoto","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"A volte è necessario sacrificare gli altri per andare avanti.<br><br>Quando un altro sopravvissuto viene appeso al gancio, ottieni <span class=\\"Highlight1\\">{0} token.</span>Consumi tutti i token dopo un Test Abilità eccellente su un generatore. Ogni token consumato conferisce un <span class=\\"Highlight2\\">{1}%</span> di progressi bonus per i Test Abilità eccellenti quando ripari i generatori.<br>","name":"Impazienza","flavor":"\\"I deboli vanno sacrificati prima. Così va la natura, così gira l\'economia. È la realtà che nessuno vuole accettare.\\" - Yun-Jin","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"Quando il tuo rivale commette un errore, tu cogli la palla al balzo.<br><br>Dopo aver stordito il killer con un bancale, scatti al <span class=\\"Highlight1\\">{0}%</span> della tua normale velocità per <span class=\\"Highlight2\\">{1} secondi.</span><br>Causa l\'effetto <b>Sfinimento</b> per <span class=\\"Highlight3\\">{2} secondi.</span><br>Questa competenza non può essere usata durante l\'effetto <b>Sfinimento</b>.<br>","name":"Hit di successo","flavor":"\\"Ho avuto a che fare con pazzi in giacca e cravatta. Tu sei peggio e ti vesti da schifo.\\" - Yun-Jin","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"La vita è inclemente. A volte è bene guardarsi le spalle da soli.<br><br>Quando un altro sopravvissuto entro <span class=\\"Highlight1\\">{0} metri</span> da te viene colpito da un attacco base o da un attacco speciale, si attiva <i>Autoprotezione</i>.<br>I tuoi segni di graffi, le pozze di sangue e i lamenti di dolore vengono nascosti per <span class=\\"Highlight2\\">{1} secondi.</span><br>","name":"Autoprotezione","flavor":"\\"Ecco una cosa che ho imparato in questo mondo: quando l\'ascia oscilla, tieni giù la testa.\\" - Yun-Jin","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"Sai come tenere testa ai nemici più forti di te, dando la caccia ed eliminando ogni loro supporto.<br><br>Riesci a purificare i totem il <b>20%</b> più velocemente. Dopo aver purificato un totem, vedi l\'aura del totem più lontano da te per <span class=\\"Highlight1\\">{0} secondi</span> e ricevi un ulteriore <span class=\\"Highlight2\\">{1}%</span> di velocità bonus cumulabile per la purificazione dei totem per tutto il resto della prova.<br><br><span class= \\"FlavorText\\">\\"Non mi dispiace qualche indagine.\\" - Jill Valentine</span>","name":"Controforza","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"Hai fatto ritorno da condizioni estremamente avverse... e ci riuscirai ancora.<br><br>Ricevi <span class=\\"Highlight1\\">{0}%</span> di progressi di guarigione subito dopo esserti liberato o essere stato liberato dal gancio.<br><br><span class= \\"FlavorText\\">\\"È il mio turno, stronzo.\\" - Jill Valentine</span>","name":"Reviviscenza","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"Quando non puoi optare per uno scontro diretto, trovi sempre un modo per contrattaccare.<br><br><i>Mina esplosiva</i> si attiva dopo aver completato un valore totale pari a un <span class=\\"Highlight1\\">{0}%</span> dei progressi di riparazione sui generatori.<br>Dopo aver riparato un generatore per almeno <span class=\\"Highlight2\\">{1} secondi</span>, premi il <i>pulsante abilità</i> per posizionare una trappola che rimane attiva per <span class=\\"Highlight3\\">{2} secondi</span>. I generatori interessati verranno rivelati a tutti i sopravvissuti da un\'aura gialla. Su ogni generatore può essere attiva una sola trappola.<br><li>Quando il killer danneggia un generatore in trappola, la trappola esploderà, stordendo il killer e accecando chiunque si trovi nelle vicinanze. Dopodiché, <i>Mina esplosiva</i> si disattiva.</li><br><br><span class= \\"FlavorText\\">Vuoi la S.T.A.R.S.? Te la do io la S.T.A.R.S.!\\" - Jill Valentine</span>","name":"Mina esplosiva","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"Provi dolore come tutti, ma preferisci che la cosa non si sappia in giro.<br><br>Non fai rumore e non emetti lamenti di dolore quando ti curi. Non partono notifiche sonore dopo i Test Abilità di guarigione falliti e la guarigione regredisce solo di un <span class=\\"Highlight1\\">{0}%</span><br><br><span class= \\"FlavorText\\">\\"Posso farcela.\\" - Leon S. Kennedy</span>","name":"Stringi i denti","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"Ti sei adattato a un mondo in preda al caos sfruttando al meglio le sue macerie.<br><br>Dopo aver completato <span class=\\"Highlight1\\">{0}%</span> di progressi su qualunque generatore, si attiva <i>Granata stordente</i>.<br>Entra in un armadietto quando non hai nulla in mano e premi il pulsante abilità per creare una granata stordente.<br><li>1 carica.</li><li>Esplode emettendo una forte deflagrazione e un bagliore luminoso.</li><li>Attiva una notifica sonora.</li><li>Può essere impiegata per distrarre o accecare.</li><br>Quando fuggi dalla prova, lasci la granata all\'interno della prova.<br><br><span class= \\"FlavorText\\">\\"Sparisci dalla mia vista!\\" - Leon S. Kennedy</span>","name":"Granata stordente","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"Tieni d\'occhio gli obiettivi quando tentano la fuga.<br><br>Completa <span class=\\"Highlight1\\">{0}</span> Test Abilità buoni o eccellenti mentre ripari i generatori per attivare <i>Recluta</i> per tutto il resto della prova.<br>Una volta attivato, potrai vedere l\'aura dei generatori in fase di regressione.<br><br><span class= \\"FlavorText\\">\\"Fermerò io questa cosa, tenente. Promesso.\\" - Leon S. Kennedy</span>","name":"Recluta","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/it/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/it/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Un leader nervoso in grado di localizzare i suoi alleati e aumentarne l\'efficacia.<BR><BR>Le sue competenze personali, <B>Legame</B>, <B>Mettiti alla Prova</B> e <B>Leader</B>, gli consentono di avvicinarsi agli altri sopravvissuti e fornire bonus alle loro azioni e alle proprie.","name":"Dwight Fairfield","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"Un\'atleta energica in grado di seminare la maggior parte dei killer.<BR><BR>Le sue competenze personali, <B>Veloce e silenzioso</B>, <B>Scatto improvviso</B> e <B>Adrenalina</B>, rappresentano un vantaggio all\'ora di scappare e distanziare il killer che la insegue.","name":"Meg Thomas","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"Una botanica studiosa in grado di aumentare la capacità di sopravvivere della sua squadra e la sua, ovviamente.<BR><BR>Le sue competenze personali, <B>Empatia</B>, <B>Conoscenze botaniche</B> e <B>Cura di sé</B>, le permettono di individuare sopravvissuti feriti e di curare più efficacemente sé stessa e la propria squadra.","name":"Claudette Morel","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"Un survivalista solitario in grado di cavarsela nella maggior parte delle situazioni.<BR><BR>Le sue competenze personali, <B>Volontà di ferro</B>, <B>Spirito calmo</B> e <B>Sabotatore</B>, gli consentono di muoversi in maniera più efficace nella mappa e di sopravvivere quando è ferito.","name":"Jake Park","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"Un\'artista di strada in grado di scappare e nascondersi facilmente.<BR><BR>Le sue competenze personali, <B>Atterraggio bilanciato</B>, <B>Evasione urbana</B> e <B>Saper stare al mondo</B>, la rendono perfetta per completare gli obiettivi e filarsela alla svelta.","name":"Nea Karlsson","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"Un vecchio soldato avvezzo ad affrontare situazioni critiche.<BR><BR>Le sue competenze personali, <B>Ultima speranza</B>, <B>Tempo prezioso</B> e <B>Volontà d\'acciaio</B>, lo rendono più forte nei momenti disperati.","name":"William \\"Bill\\" Overbeck","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"Un attaccabrighe robusto amante del rischio.<BR><BR>Le sue competenze personali, <B>Vivremo per sempre</B>, <B>Morto stecchito</B> e <B>Nessuna bega</B>, premiano lo stile di gioco aggressivo e provocatore, ma lo lasciano vulnerabile.","name":"David King","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"Una sopravvissuta ostinata, pronta a superare ogni sfida.<BR><BR>Le sue competenze personali, <B>Unico sopravvissuto</B>, <B>Oggetto dell\'ossessione</B> e <B>Colpo decisivo</B>, le conferiscono potenti abilità di sopravvivenza, ma la lasciano esposta ai pericoli.","name":"Laurie Strode","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"Uno scommettitore fortunato che migliora le probabilità dell\'intera squadra.<BR><BR>Le sue competenze personali, <B>Carte Scoperte</B>, <B>Alza la posta</B> e <B>Asso nella manica</B>, aumentano la fortuna di tutti i sopravvissuti e aiutano a sbloccare le casse.","name":"Ace Visconti","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"Un\'accanita giocatrice in grado di modificare la sua strategia rapidamente per adattarsi alle situazioni più impegnative.<BR><BR>Le sue competenze personali <B>Tecnico</B>, <B>Agilità</B> e <B>Allerta</B> l\'aiutano a riparare i generatori e a individuare il killer.","name":"Feng Min","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"Un risoluto viaggiatore nei sogni che aumenta la capacità di sopravvivere e recuperare della sua squadra.<BR><BR>Le sue competenze personali, <B>Sveglia!</B>, <B>Farmacia</B> e <B>Veglia</B>, aiutano i sopravvissuti a localizzare i cancelli d\'uscita e recuperare più facilmente.","name":"Quentin Smith","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"Un detective ossessionato in grado di localizzare e completare gli obiettivi più velocemente.<BR><BR>Le sue competenze personali, <B>Tenacia</B>, <B>Intuizione del detective</B> e <B>Sotto controllo</B>, gli permettono di recuperare rapidamente e concentrarsi sugli obiettivi.","name":"Detective Tapp","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"Un Usignolo della speranza, in grado di sfruttare al meglio gli ambienti circostanti. <br><br>Le sue competenze personali, <b>Balla con me</b>, <b>Momenti propizi</b> e <b>Perdi le staffe</b>, le garantiscono la lungimiranza e l\'esuberanza necessarie a sfuggire alle situazioni peggiori.","name":"Kate Denson","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"Un insegnante pieno di risorse, capace di adattarsi a nuove circostanze e sviluppare strategie di conseguenza. <br><br>Le sue competenze personali, <b>Diversivo</b>, <b>Liberazione</b> e <b>Autoapprendimento</b>, lo aiutano a distrarre il killer, a sopravvivere a situazioni disperate e a diventare più abile nel corso della prova.","name":"Adam Francis","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"Un artista pacato, incrollabile nelle circostanze avverse.<br><br>Le sue competenze personali, <b>Collasso</b>, <b>Convalescenza</b> e <b>Stravolgimento</b>, gli conferiscono dei vantaggi di osservazione e lo aiutano a nascondersi dal killer.","name":"Jeff Johansen","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"Una celebrità influente, che è andata contro tutti per affrontare le sfide che aveva davanti.<br><br>Le sue competenze personali, <b>Solidarietà</b>, <b>Compostezza</b> e <b>Frontale</b>, le conferiscono un set di abilità flessibili che le permette di aiutare gli altri, e se stessa, a cavarsela in situazioni pericolose.","name":"Jane Romero","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"Un \\"lupo solitario\\", vanitoso e determinato; un uomo fatto per sopravvivere.<br><br>Le sue competenze personali, <b>Ritorno</b>, <b>Allaccia le cinture</b> e <b>Coraggio dell\'uomo</b>, gli conferiscono resistenza aggiuntiva a dolore e avversità, insieme all\'abilità di aiutare i suoi amici a uscire da situazioni complicate. ","name":"Ashley J. Williams","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"Un\'aspirante giornalista in grado di fare acute osservazioni e capire ciò che sfugge all\'occhio altrui.<br><br>Le sue competenze personali, <b>L\'unione fa la forza</b>, <b>Fissata</b> e <b>Forza interiore</b>, le donano le informazioni e il coraggio necessari per fronteggiare sfide inaspettate.","name":"Nancy Wheeler","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"Un ex atleta in grado di proteggere e assistere i compagni sopravvissuti, senza far mai mancare il suo personalissimo umorismo.<br><br>Le sue competenze personali, <b>Babysitter</b>, <b>Cameratismo</b>e <b>Nuova energia</b>, lo aiutano a creare diversivi, sopportare il dolore e tornare a combattere.","name":"Steve Harrington","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"Una pilota da strada che sa il fatto suo, in grado di superare le sfide più impegnative e soccorrere gli altri sopravvissuti in difficoltà.<br><br>Le sue competenze personali <b>Colpo di fortuna</b>, <b>A ogni costo</b> ed <b>Evasione</b> le permettono di coprire le sue tracce di sangue, ripristinare i bancali lanciati e aiutare i sopravvissuti indifesi.","name":"Yui Kimura","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"Un\'impavida documentarista in grado di sfruttare l\'arguzia per evitare di essere individuata ed essere di grande aiuto agli altri sopravvissuti.<br><br>Le sue competenze personali, <b>In via ufficiosa</b>, <b>Depistaggio</b> e <b>Per il popolo</b>, la aiutano a nascondersi dai pericoli, creare diversivi e curare gli altri a costo della propria vita.","name":"Zarina Kassir","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"Cheryl Mason è una giovane ma navigata veterana del terrore, in grado di infondere coraggio in sé stessa e nella sua squadra.<br><br>Le sue competenze personali, <b>Guardia spirituale</b>, <b>Patto di sangue</b> e <b>Alleanza repressa</b>, le permettono di sopravvivere tra insormontabili difficoltà, restare in contatto con gli altri membri della squadra e mettere a punto efficaci strategie.","name":"Cheryl Mason","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"Un architetto visionario capace di sfruttare la sua implacabile determinazione per ideare piani con cui aiutare gli altri sopravvissuti.<br><br>Le sue competenze personali <b>Visionario</b>, <b>Estremi rimedi</b> e <b>Costruito per durare</b> lo aiutano a rivelare i generatori, soccorrere i sopravvissuti e sfruttare al meglio la sua strumentazione.","name":"Felix Richter","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"Un\'investigatrice dell\'occulto sopravvissuta grazie ad astuzia e caparbietà impareggiabili.<br><br>Le sue competenze personali <b>Stima</b>, <b>Raggiro</b> e <b>Lotta di potere</b> le permettono di interagire con gli oggetti in modi differenti, avendo sempre un piano B per sfuggire ai killer.","name":"Élodie Rakoto","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"Una produttrice musicale egocentrica che pensa ai propri interessi anche nei momenti più turbolenti.<br><br>Le sue competenze personali <b>Impazienza</b>, <b>Hit di successo</b> e <b>Autoprotezione</b> migliorano le abilità per sfuggire più rapidamente da un inseguimento quando gli altri sono feriti. ","name":"Yun-Jin Lee","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"Jill Valentine è uno dei membri fondatori della S.T.A.R.S. con alle spalle innumerevoli vittorie contro le armi bio-organiche.<br><br>Le sue competenze personali <b>Controforza</b>, <b>Reviviscenza</b> e <b>Mina esplosiva</b> le permettono di rispondere indirettamente agli attacchi, al contempo offrendo grande supporto ai suoi compagni. ","name":"Jill Valentine","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"Leon S. Kennedy è un poliziotto alle prime armi che dimostrò tutto la sua devozione alla causa durante l\'epidemia di Raccoon City.<br><br>Le sue competenze personali <b>Stringi i denti</b>, <b>Granata stordente</b> e <b>Recluta</b> gli consentono di ignorare il dolore, disorientare il killer e ritrovare gli obiettivi perduti. ","name":"Leon S. Kennedy","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./it/index.ts ***!
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
/* harmony import */ var _src_lib_locales_it__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/it */ "./src/lib/locales/it.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_it__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map