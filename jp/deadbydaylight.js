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

/***/ "./src/lib/locales/jp.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/jp.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_jp_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/jp/items.json */ "./src/data.compiled/locales/jp/items.json");
/* harmony import */ var _data_compiled_locales_jp_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/jp/killerAddons.json */ "./src/data.compiled/locales/jp/killerAddons.json");
/* harmony import */ var _data_compiled_locales_jp_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/jp/killerOfferings.json */ "./src/data.compiled/locales/jp/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_jp_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/jp/killerPerks.json */ "./src/data.compiled/locales/jp/killerPerks.json");
/* harmony import */ var _data_compiled_locales_jp_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/jp/killers.json */ "./src/data.compiled/locales/jp/killers.json");
/* harmony import */ var _data_compiled_locales_jp_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/jp/powers.json */ "./src/data.compiled/locales/jp/powers.json");
/* harmony import */ var _data_compiled_locales_jp_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/jp/sharedOfferings.json */ "./src/data.compiled/locales/jp/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_jp_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/jp/survivorAddons.json */ "./src/data.compiled/locales/jp/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_jp_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/jp/survivorOfferings.json */ "./src/data.compiled/locales/jp/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_jp_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/jp/survivorPerks.json */ "./src/data.compiled/locales/jp/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_jp_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/jp/survivors.json */ "./src/data.compiled/locales/jp/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.Japanese;
var data = {
  items: _data_compiled_locales_jp_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_jp_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_jp_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_jp_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_jp_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_jp_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_jp_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_jp_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_jp_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_jp_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_jp_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/jp/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/jp/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"厚紙で包装された小さな爆発物の束。爆発すると大きな爆発音と強い光を放つ。妨害や目眩まし、あるいはお祝いに使える。<br><li><b>基礎チャージ量は1</b></li>","name":"爆竹","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"普通の懐中電灯。暗闇で道を照らすことができる。<br><li><b>基礎チャージ量は8秒</b></li>","name":"懐中電灯","flavor":"「前の持ち主に電池のほとんどを無駄遣いされたようだ。」","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"オレンジの光と小さなオバケを追加する特殊なレンズがついた懐中電灯。<br><li><b>基礎チャージ量は8秒</b></li><li>あなたの人生に友好的なオバケが<b>かなり増加する</b></li>","name":"ウィル・オ・ウィスプ","flavor":"「ハッピー・トリックオアトリート！」","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"握りやすいグリップがついた、とても持ち運びしやすい懐中電灯。効率のよい電力変換で強力な光を発生させることができ、消費電力も抑えられている。<br><li><b>8秒</b>使用できる</li><li>懐中電灯の電池消費量が<b>少し減少する</b></li><li>懐中電灯の精度が<b>少し上昇する</b></li>","name":"小型懐中電灯","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"頑丈で重い大容量の懐中電灯。<br><li><b>12秒</b>使用できる</li><li>精度が<b>少し減少する</b></li><li>光の明るさが<b>そこそこ増加する</b></li><li>目眩ましの持続時間が<b>そこそこ増加する</b></li>","name":"高性能懐中電灯","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"カギの頭と軸の部分。何かの力でうち震えている。壊れたカギは単体で力を発揮することはないが、色々なものを環に取り付けることができ、その力を伝達することで様々な効果を得られる。<br><li><b>基礎チャージ量は10秒</b></li>","name":"壊れたカギ","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"すり減って曲がったカギ。かつてはものすごい力を持っていたようだ。壊れたカギは単体で力を発揮することはないが、色々なものを環で取り付けることができ、その力を伝達することで様々な効果を得られる。<br><li><b>基礎チャージ量は5秒</b></li><li>このアイテムを消費してハッチを開くことも可能</li>","name":"すり減ったカギ","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"変色して歪んだカギ。不吉な力で振動している。単体で力を発揮することはないが、色々なものを環に接続することができ、カギの力を伝達して様々な効果を得られる。<br><li><b>基礎チャージ量は30秒</b></li><li>このアイテムを消費してハッチを開くことも可能</li>","name":"スケルトンキー","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"何かの皮で作られたらしい羊皮紙。無色の革糸で巻いて封をしてある。マップを持つと持ち主に眠る驚異的なオーラ可視能力を解放するが、マップは少しずつ燃えていく。マップのチャージが残っている間、発見済みの発電機のオーラが視えるようになる。<br><li><b>基礎チャージ量は20秒</b></li><li>発電機を<b>1つ</b>自動的に捕捉した状態で開始する</li><li><b>8メートル</b>以内にある発電機を追跡できるようになる</li>","name":"マップ","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"奇妙な生皮で作られた羊皮紙。端に生乾きの血がついている。色とりどりの縄や紐で巻いて封をしてある。マップを持つと持ち主に眠る驚異的なオーラ可視能力を解放するが、マップは少しずつ燃えていく。 マップのチャージが残っている間、発見済みの対象物のオーラが視えるようになる。 <br><li><b>基礎チャージ量は20秒</b></li><li>対象物を<b>3つ</b>自動的に捕捉した状態で開始する</li><li><b>8メートル</b>以内にある<b>対象物を追跡</b>できるようになる</li><li><b>8メートル</b>以内にある<b>黒い錠前を追跡</b>できるようになる</li><li><b>8メートル</b>以内にある<b>殺人鬼の所有物を追跡</b>できるようになる</li><li><b>8メートル</b>以内にある<b>脱出ゲートを追跡</b>できるようになる</li>","name":"虹色のマップ","flavor":"「まったくがっかりだ。言葉に出来ないほどの知識や、血のにじむような努力をすべて合わせてもなお、実を結ばない。この悪夢から脱出するための有益な手がかりはまだ何もない。」- ヴィゴの手記","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"中身がいくつか足りないことがあるものの、緊急時に命を救うための基本的な医療キット。<br><li><b>基礎チャージ量は16</b>。</li><li>他者を治療する速度が<b>そこそこ上昇する</b></li><li><b>自己治療</b>ができるようになる。</li>","name":"携帯用医療キット","flavor":"「まともな治療ができるだけの道具が辛うじて揃っている。」","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"発光するハロウィンのシールが貼られ、救急用の装備が入っているプラスチック製のランチボックス。<br><li><b>基礎チャージ量は24</b></li><li>他者を治療する速度が<b>かなり上昇する</b></li><li><b>自己治療</b>ができるようになる</li><li>自分の姿が<b>かなり見えやすくなる</b></li>","name":"ハロウィンのランチボックス","flavor":"「安全第一！イタズラするときもお菓子をあげるときも見つかりやすくしておきましょう。」","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"怪我や深刻な負傷を処置するための道具が入った、一般的な救急箱。<br><li><b>基礎チャージ量は24</b></li><li>他者を治療する速度が<b>かなり上昇する</b></li><li>自分を治療することができるようになる</li>","name":"救急箱","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"きちんと整理されている、しっかりした医療キット。緊急治療用の道具が最良の状態で入っている。<br><li><b>基礎チャージ量は16</b>。</li><li>他者を治療する速度が<b>とてつもなく上昇する。</b></li><li>自己治療の速度が<b>とてつもなく上昇する。</b></li><li><b>自己治療</b>ができるようになる。</li>","name":"非常用医療キット","flavor":"「どんな傷でもほぼ治せる……今回のはムリだけど。」","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"到達困難な孤立地域などでの使用を目的とした医療器具が詰まっている大きな金属の箱。<br><li><b>基礎チャージ量は24</b>。</li><li>他者を治療する速度が<b>とてつもなく上昇する</b>。</li><li>スキルチェックの成功範囲が<b>そこそこ増加する</b></li><li>スキルチェックのボーナス範囲が<b>そこそこ増加する</b></li><li><b>自己治療</b>ができるようになる。</li>","name":"救助隊用医療キット","flavor":"「後ろ側に『VK.ID-3994723』と刻印されたラベルが貼り付いている。」","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"いつ壊れてもおかしくない粗悪な工具が入った金属の箱。特に練習しなくても機械を修理したり破壊したりできる。<br><li><b>基礎チャージ量は16</b></li><li>修理速度が<b>そこそこ上昇する</b></li><li>スキルチェックの成功範囲が<b>少し減少する</b></li><li><b>破壊工作</b>ができるようになる</li>","name":"ボロボロの工具箱","flavor":"「これが工具だと？……冗談だよな？」","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"基本的な工具が入った金属の箱。特に練習しなくても機械を修理したり破壊したりできる。<br><li><b>基礎チャージ量は20</b></li><li>修理速度が<b>そこそこ上昇する</b></li><li><b>破壊工作</b>ができるようになる</li><li><b>破壊の速度が</b>少し上昇する</li>","name":"工具箱","flavor":"「こういう道具は一体どこから来たのだろう。誰かが持ち込んだのか、それともあの怪物たちの物なのだろうか？」","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"整備士用の専門工具が入った金属の箱。特に練習しなくても機械を修理したり破壊したりできる。<br><li><b>基礎チャージ量は16</b></li><li>修理速度が<b>かなり上昇する</b></li><li><b>破壊工作</b>ができるようになる</li><li>破壊の速度が<b>少し低下する</b></li>","name":"整備士の工具箱","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"基本的な工具や機械の部品が入った大きな金属の箱。特に練習しなくても機械を修理したり破壊したりできる。<br><li><b>基礎チャージ量は32</b></li><li>修理速度が<b>そこそこ上昇する</b></li><li><b>破壊工作</b>ができるようになる</li>","name":"大きな工具箱","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"機械工学の専門的な道具が揃った金属の箱。初心者でもほとんどの道具を使用でき、機械を素早く修理したり破壊したりできる。<br><li><b>基礎チャージ量は16</b></li><li>修理速度が<b>とてつもなく上昇する</b></li><li><b>破壊工作</b>ができるようになる</li><li>破壊の速度が<b>そこそこ低下する</b></li>","name":"機械技師の工具箱","flavor":"「私は他には比較にならないほど優れた工具を作った。それが盗まれてしまったときは呆然と立ち尽くしたものだ。これは霧から弾き出された粗悪なレプリカだ。」- ヴィゴの手記","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"ノコギリや色々なサイズの工具など、色々な道具が入った金属の箱。中の道具は明らかに破壊工作を目的としたものだが、様々な機械を修理するためにも使用できる。<br><li><b>基礎チャージ量は24</b></li><li>修理速度が<b>少し上昇する</b></li><li><b>破壊工作</b>ができるようになる</li><li>破壊の速度が<b>かなり上昇する</b></li>","name":"アレックスの工具箱","flavor":"「ほとんどの道具に『アレックス』と名前が書いてある。」","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"小さいが非常に高い爆発力を持つディナーテーブル用のデコレーション。大きな音を出し、激しい光を発しながら起爆する。妨害や目潰し、あるいはお祝いに使える。<br><li><b>1チャージ分</b></li>","name":"冬のパーティースターター","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"小さいが非常に高い爆発力を持つディナーテーブル用のデコレーション。大きな音を出し、激しい光を発しながら起爆する。妨害や目潰し、あるいは3周年を一緒にお祝いするのに使える。<br><li><b>1チャージ分。</b></li>","name":"3周年のパーティースターター","flavor":"記念日おめでとう！3周年に一緒に乾杯！<br>– Dead by Daylightチーム","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"お祝い用の医療キット。生存者を治療して完全回復させると紙吹雪を撒き散らしながら爆発する。サプライズ！<br><li><b>基礎チャージ量は24</b></li><li>他の生存者を治療する速度が<b>かなり上昇する</b></li><li><b>自己治療</b>ができるようになる</li>","name":"周年記念の医療キット","flavor":"「記念日おめでとう！今後のさらなる発展に幸あれ！」<br>-Dead by Daylight開発チーム","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"お祝い用の懐中電灯。殺人鬼に目眩しを食らわすと紙吹雪を撒き散らしながら爆発する。サプライズ！<br><li>使用時間は<b>8秒</b>。</li>","name":"周年記念の懐中電灯","flavor":"「記念日おめでとう！今後のさらなる発展に幸あれ！」<br>-Dead by Daylight開発チーム","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/jp/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"防護パッドが施された革手袋。<br><li>トラバサミの設置速度が<b>少し増加する</b></li>","name":"トラッパーのグローブ","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"トラバサミの締まる力をかなり強化する大型の重たいコイルスプリング。<br><li>トラバサミの解除時間が<b>少し増加する</b></li>","name":"強力なコイルスプリング","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"トラバサミの交換キット。コイルを通常の2コイルから4コイル仕様に変換し、罠の締めつけ力を強化する。<br><li>トラバサミの解除時間が<b>そこそこ増加する</b></li>","name":"4コイルのスプリングキット","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"木の灰。湯に通すと、トラバサミを染めるのに使うことができ、トラバサミに気づきにくくすることができる。<br><li>すべてのトラバサミを<b>そこそこ見えづらくする</b></li>","name":"ログウッドの染料","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"罠に挟まれた者に深い傷を負わせる、ノコギリの刃のような、トラバサミの替え歯。<br><li>トラバサミに掛かった生存者は治療を受けるまで<b>出血</b>のステータス効果を受ける</li>","name":"ギザギザした歯","flavor":"「捕食獣のごとく、こいつは血の匂いを嗅ぎ、獲物を追いかける」","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"すばやく安全にトラバサミを設置するために作られた道具。<br><li>トラバサミの設置速度が<b>そこそこ増加する</b></li>","name":"トラバサミ設置器","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"乾いた皮製のウェストバッグ。狩猟用の装備を運ぶために大きくて丈夫。<br><li>トラバサミが<b>1個</b>マッチ開始時に追加される</li><li>トラバサミを持ち運べる個数が<b>2個</b>増加する</li>","name":"トラッパーのバッグ","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"トラバサミの歯。ところどころに固くて剥がれやすい錆が付着しているため、傷がとても治りづらくなる。<br><li>トラバサミに掛かった生存者が<b>重傷</b>のステータス効果に苦しむ","name":"錆びた歯","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"メインのコイルが使えなくなった時でもトラバサミを作動させられる補助コイル。<br><li>トラバサミの解除時間が<b>かなり増加する</b></li>","name":"補助コイル","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"タールの様に黒くてくすんだ、ベトベトする素材。トラバサミに使用することで目立ちにくくする効果がある。<br><li>全てのトラバサミを<b>かなり見えづらくする</b></li>","name":"タールのボトル","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"機械部品の摩擦抵抗を減らし、滑らかな動きをもたらすワックスの塊。<br><li>トラバサミから脱出できる可能性を<b>そこそこ減少させる</b></li>","name":"ワックスのブロック","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"きれいな機械油が罠のバネを調整し、威力を上げる。<br><li>トラバサミの解除時間が<b>とてつもなく増加する</b></li>","name":"油まみれのコイル","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"トラバサミが効果的に作動するようしっかり固定するための専用の道具セット。<br><li>トラバサミの設置速度が<b>とてつもなく増加する</b></li><li>トラバサミからの救出および脱出速度が<b>かなり増加する</b></li><li>トラバサミから脱出できる確率が<b>そこそこ減少する</b></li>","name":"締め具","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"いろいろな革を雑に縫い合わせてできている、とても大きなバッグ。<br><li>トラバサミが<b>2個</b>マッチ開始時に追加される</li><li>トラバサミを持ち運べる個数が<b>2個</b>増加する</li>","name":"縫い合わされたバッグ","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"不気味な液体に覆われたこのスプリングは、所によりねばつき、所により滑りやすく、扱いがより困難で危険だ。<br><li>罠が<b>無傷</b>の生存者によって破壊または解除された場合、血まみれのコイルは代償を求め、その生存者を<b>負傷状態</b>にする</li><li>トラバサミの解除時間が<b>少し増加する</b></li>","name":"血まみれのコイル","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"このかすかに光る鋭い石が付いた罠は、自ら命を得ているかのようだ。<br><li><b>30秒</b>ごとに、閉じているトラバサミがランダムで1つ設置状態になる</li>","name":"玉虫色の石","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"鐘の胴体に煤を使い指で描かれたシンボル<br>「狡猾」を表す\\"オアス-ネク\\"。<br><li>レイスが透明化状態でパレットの破壊や発電機へのダメージを行うと、<b>完全に透明化解除する</b></li>","name":"「蛇」- 煤","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"鐘の胴体に煤を使い指で描かれたシンボル<br>「無類の追跡者」を表す\\"グド-ボイ\\"。<br><li>新しい血のシミが通常よりも<b>かなり</b>見えやすくなる</li>","name":"「猟犬」- 煤","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"鐘の胴体に煤を使い指で描かれたシンボル<br>「霊界」を表す\\"クグウェムウ\\"。<br><li>透明化解除後、レイスの脅威範囲と赤い光が<b>6秒間</b>抑制される</li>","name":"「亡霊」- 煤","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"鐘の胴体に煤を使い指で描かれたシンボル<br>「恐怖の世界」を表す\\"クグフェルウ\\"。<br><li>透明化した際に、レイスの脅威範囲が<b>抑制されなくなる</b></li><li>凝視と奇襲で得られるブラッドポイントが100％まで増加する</li>","name":"「暗獣」- 煤","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"滑らかに研磨された骨でできた、鳴子。鐘の音を歪んだ状態で響かせ、聞いた者を混乱させる。<br><li>「悲哀の鐘」の<b>距離</b>と<b>方向</b>が認識できなくなる</li>","name":"骨の鳴子","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"「刹那」を表す「クラティン」のシンボルが鐘の胴体に泥を使い指で描かれている。<br><li>レイスの透明化にかかる時間が<b>かなり</b>減少する</li>","name":"「ブリンク」- 泥","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"「暴風」を表す「オフウィ-オンムニア」のシンボルが鐘の胴体に泥を使い指で描かれている。<li>透明化状態の間、レイスの移動速度が<b>そこそこ上昇する</b></li>","name":"「暴風」- 泥","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"「獲物への強襲」を表す「クンティン-タコホ」のシンボルが鐘の胴体に泥を使い指で描かれている。<br><li>レイスの透明化の解除にかかる時間が<b>少し減少する</b></li>","name":"「俊足の狩人」- 泥","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"鐘の胴体に泥を使い指で描かれたシンボル<br>「残虐性」を表す\\"バイクラ-カユーグ\\"。<br><li><b>奇襲</b>で生存者を<b>60秒間</b><b>オーラ不可視</b>状態にする</li>","name":"「盲目の戦士」- 泥","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"「暴風」を表す「オフウィ-オンムニア」のシンボルが鐘の胴体に白インクを使い指で描かれている。<li>透明化状態の間、レイスの移動速度が<b>かなり上昇する</b></li>","name":"「暴風」- 白","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"「獲物への強襲」を表す「クンティン-タコホ」のシンボルが鐘の胴体に白インクを使い指で描かれている。<br><li>レイスの透明化の解除にかかる時間が<b>そこそこ減少する</b></li>","name":"「俊足の狩人」- 白","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"「相乗効果」を表す「イワリック」のシンボルが鐘の胴体に白インクを使い指で描かれている。<br><li>透明化した状態での窓の乗り越え、ロッカーの開閉、パレットの破壊、発電機破壊に必要な時間が<b>かなり減少する</b></li>","name":"「影舞」- 白","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"「刹那」を表す「クラティン」のシンボルが鐘の胴体に白インクを使い指で描かれている。<br><li>レイスの透明化にかかる時間が<b>とてつもなく減少する</b></li>","name":"「ブリンク」- 白","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"「残虐性」を表す「バイクラ-カユーグ」のシンボルが鐘の胴体に白インクを使い指で描かれている。<br><li>奇襲で生存者に<b>重傷</b>と<b>出血</b>のステータス効果を与える。効果は完全に治療されるまで続く</li>","name":"「盲目の戦士」- 白","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"「暴風」を表す「オフウィ-オンムニア」のシンボルが鐘の胴体に血で刻印されている。<br><li>透明化状態の間、レイスの移動速度が<b>とてつもなく上昇する</b></li>","name":"「暴風」- 血","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"「獲物への強襲」を表す「クンティン-タコホ」のシンボルが鐘の上部に血で刻印されている。<br><li>レイスの透明化の解除にかかる時間が<b>かなり減少する</b></li>","name":"「俊足の狩人」- 血","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"「相乗効果」を表す「イワリック」のシンボルが鐘の胴体に血で刻印されている。<br><li>透明化した状態での窓の乗り越え、ロッカーの開閉、パレットや破壊可能なオブジェクトの破壊、発電機破壊に必要な時間が<b>とてつもなく減少する</b></li>","name":"「影舞」- 血","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"鐘の上部に血で刻印されたシンボル<br>「すべてを見通すエンティティ」を表す\\"クラ-フラバイ\\"。<br><li>隠し持ったオーラを視認できる能力を呼び覚ます。透明化している間、<b>12メートル</b>以内にいる生存者のオーラを探知できる</li>","name":"「全能視」- 血","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"鐘の音を消すため、鶏冠結びで結われたロープが巻きつけられている。”それ”からは悪意のあるオーラが発している。<br><li>悲哀の鐘の音を<b>完全に聞こえなくする</b></li><li>重複する</li>","name":"音無しの鳴子","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"鐘の上部で不吉に光るシンボル<br>「すべてを見通すエンティティ」を表す\\"クラ-フラバイ\\"。<br><li>オーラを視認できる能力を呼び覚ます。透明化時、<b>発電機の修理進行度</b>が<b>オーラの強さ</b>で判別できる</li>","name":"「全能視」- 魂","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"チェーンの動きをスムーズに保ってくれる、しっかりとしたクラッチ。<br><br><li>チェーンソーダッシュ時の衝突ゾーンが<b>縮小する</b></li>","name":"ヘビークラッチ","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"小型エンジンが処理できる量の燃料だけを送り込むようにする制御装置。スピードを安定させ、安全にする。<br><br><li>チェーンソーが命中した生存者は負傷1段階分のダメージを受ける</li><li>チェーンソー命中によって得られるブラッドポイントが<b>100%</b>増加する</li>","name":"スピードリミッター","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"ほこりまみれのひび割れたフィルター。性能は在庫品に比べてもまだ高い。<br><br><li>チェーンソーがオーバーヒートする上限が<b>少し上がる</b></li>","name":"中古のエアフィルター","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"つま先部分が強化されたブーツ。衝撃から守ってくれる。<br><br><li>チェーンソーがオブジェクトに命中した後の回復時間が<b>少し短縮される</b></li>","name":"安全ブーツ","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"雑な改良が施されたマフラー。空気が流れやすくなっている。<br><br><li>チェー</b>ンソーの冷却速度が<b>少し上昇する</li>","name":"穴あきマフラー","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"古き良き時代の田舎少年がみんな付けていた、ピカピカの輝くベルト。<br><br><li>チェーンソーがオーバーヒートすると脅威範囲が8メートル<b>縮小する</b></li>","name":"大きなバックル","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"お手頃価格のオイル。うるさい音がするチェーンの滑りをよくするために使う。<br><br><li>チェーンソーの音が<b>少し減少する</b></li>","name":"ノーブランドのモーターオイル","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"マックス・トンプソン Sr.の遺体から引き抜かれた頑丈なブーツ。<br><br><li>チェーンソーダッシュのカーブ性能が<b>そこそこ増加する</b></li>","name":"親父のブーツ","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"チェーンソーの胴体に彫られた彫刻。仕留めた獲物の数を数えている。使用者の決意をより固くする。<br><li>チェーンソー使用時の移動速度が<b>少し上昇する</b></li><li>チャージ時間が<b>少し増加する</b></li><li>重複する</li>","name":"死の彫刻","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"エヴリン・トンプソンのポーチにあった少量のカフェインの錠剤。神経過敏やイライラなどの副作用がある。<br><br><li>パレットで怯んだ後、30秒間チェーンソーのチャージ時間が<b>少し減少する</b></li><br>","name":"母の助っ人","flavor":"「ドクターお願いよ、もっとお薬をちょうだい。」 —エヴリン・トンプソン","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"反動作用の発生率が下がる特殊なチェーン。<br><br><li>チェーンソーダッシュ中、障害物にぶつかった時の時間ロスが<b>かなり短縮される</b></li>","name":"低反動のチェーン","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"香りの強い葉をすり潰したもの。獲物を追うハンターのにおいを隠してくれる。<br><br><li>チェーンソーで攻撃を命中させると、探知不可のステータス効果を15秒間得る</li>","name":"すり潰した葉","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"チェーンソーの胴体に彫られた彫刻。霧の中に棲む怪物を表す。使用者の決意をより固くする。<br><li>チェーンソー使用時の移動速度が<b>そこそこ上昇する</b></li><li>チャージ時間が<b>少し増加する</b></li><li>重複する</li>","name":"破滅の彫刻","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"目の下に塗ってグレアを減らすための濃厚なグリース。<br><br><li>懐中電灯に照らされるとチェーンソーの冷却速度が<b>そこそこ上昇する</b></li>","name":"黒いグリース","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"埃や油まみれだが、しっかり調整されたキャブレター。<br><br><li>チェーンソーのチャージ時間が<b>そこそこ短縮される</b></li><li>基本移動速度が4.4m/秒に<b>低下する</b>","name":"同調済みのキャブレター","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"金属付きブーツ。金属がぬかるみに食い込むので、一歩一歩に安定性をもたらす。<br><li>チェーンソーの操作性能が<b>とてつもなく上昇する。</b></li><li>チェーンソーで障害物に衝突した時のペナルティが<b>かなり増加する。</b></li>","name":"スパイク付きブーツ","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"謎のシミがついた悪臭のする手袋。何もかも異常な手袋だが、生地は分厚い。<br><br><li>チェーンソーの回転数を上げ始めた時の熱量が<b>そこそこ減少する</b></li><br>","name":"豚小屋のグローブ","flavor":"「真面目に働く男の肝っ玉とは、どんな面倒にも左右されないもんだ。」 — マックス・トンプソン Sr.","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"チェーンソーの重量を軽減してくれる軽いチェーン。操作性が大幅に向上する。<br><br><li>チェーンソーダッシュ中、パレットや壁を破壊しても止まらなくなる</li><li>パレットまたは壁を破壊して5秒以内にチェーンソーが命中した生存者は負傷1段階分のダメージを受ける</li>","name":"軽量チェーン","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"かつてマックス Jrが監禁されていた部屋のバリケードが崩壊した時、一番最初に落ちたレンガ。<br><br><li>チェーンソーダッシュを2秒維持すると、ダッシュし終えるまで探知不可のステータス効果を得る</li><br>","name":"玉虫色のレンガ","flavor":"「一体何をそんなに騒いでる？」 —マックス・トンプソン Sr.","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"精巧なチェーンソーのマフラー。他のどのマフラーよりも高性能。<br><br><li>脅威範囲外の生存者にチェーンソーの音がしなくなる</li>","name":"頂点のマフラー","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"馬に似せるために、安っぽい木材から彫って作られたまま塗装されていないおもちゃ。かつては緊張病の患者と彼の看護師の、深い絆の象徴だった。<br><li>ブリンク攻撃に失敗した時の追加の疲労が<b>そこそこ減少する。</b></li>","name":"木馬","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"診療所から持ち出された毛じらみ用の櫛。かつては心配症の患者と彼女の看護師の、深い絆の象徴だった。<br><li>ブリンク後の突進攻撃の範囲が<b>そこそこ減少する。</b></li><li><i>ブリンク攻撃</i>で得られるブラッドポイントが<b>100%</b>増加する。</li>","name":"白い梳き櫛","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"光沢がなく、所々錆びて染みが付いた金属のスプーン。202号室の患者「バッドマン」から没収された。<br><li>ブリンク攻撃が生存者に命中すると、生存者のうめき声が<b>60秒間</b><b>そこそこ大きくなる</b>。</li>","name":"金属のスプーン","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"「バッドマン」の死体の手から摘出された腐った奥歯。<br><li>ブリンク攻撃が生存者に命中すると、<b>28メートル</b>以内で生存者が治療もしくは治療を受けた場合、<b>60秒間</b>彼らのオーラが見えるようになる。</li>","name":"バッドマンの形見","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"がらがら音を立てる破片が入った、黒焦げになって壊れている懐中時計。看護士モリスの遺体から持ち去られた。<br><li>連続ブリンクのチャージ時間が<b>そこそこ長くなる。</b></li>","name":"懐中時計","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"誰かが大事にしていたかもしれない、無価値なアクセサリーの一部。心配性の女の子の遺体から奪われた。<br><li>ブリンクの最大範囲が<b>そこそこ減少する。</b></li><li><i>正確なブリンク</i>で得られるブラッドポイントが<b>100%</b>上昇する。</li>","name":"すり減ったブレスレット","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"弔事の際にベルトとして使われた黒いロープ。キャンベル神父の遺体から奪われた。<br><li>ブリンクのチャージ速度が<b>そこそこ上昇する。</b></li>","name":"暗色の帯","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"予想だにせず患者の多動を抑えた松ぼっくり。緊張病の男の子の遺体から奪われた。<br><li>連続ブリンクによる追加の疲労が<b>かなり減少する。</b></li>","name":"緊張病の男の子の宝物","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"バッドマンから採取した、引きつって震える呼気。ナースが触れると激しく脈動して暴れる。<br><li>生存者にブリンク攻撃が命中すると<b>ナースのブリンク発動が不可となり</b>、基本移動速度が<b>60秒間</b><b>4.6m/秒</b>に上昇する。</li>","name":"痙攣する呼気","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"太った職員から採取された呼気。ゆっくりと膨らむ。ナースが触れると穏やかに振動する。<br><li>ブリンクの最大範囲が<b>かなり上昇する。</b></li><li>ブリンクの最大チャージ時間が<b>かなり増加する。</b></li>","name":"重く息切れする呼気","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"ヒューヒューと乱れた息。キャンベル神父から盗まれた。ナースが触ると少し歪む。<br><li>ブリンクのチャージ速度が<b>かなり上昇する。</b></li>","name":"はかない息切れ","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"緊張病の男の子から採取した、不規則で悪化している呼気。普段は落ち着いているが、ナースが触れると急激に乱れる。<br><li>ブリンクの疲労時間が<b>そこそこ減少する。</b></li>","name":"失調性の呼気","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"心配症の女の子から採取された驚きの喘ぎ。ナースが好み、触れると勢い良く痙攣する。<br><li>ブリンクで生存者を追い越すと生存者が悲鳴を上げ、<i>邪悪</i>カテゴリーのブラッドポイントが<b>200ポイント</b>増加する。</li>","name":"心配性の喘ぎ","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"赤と黒の縞模様のシャツがちぎれたもの。生地の切れ端がナースに猛烈な集中力を吹き込む。<br><li>ブリンクで狙った生存者の位置が見えるようになる。</li>","name":"縞模様の布切れ","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"クロータス・プレン・アサイラムの職員であったハーヴェイ・カヴァナーの、力強い最期の一息。ナースの手の中で力を持ってさまよう。<br><li>ブリンクの最大範囲が<b>とてつもなく増加する。</b></li><li>ブリンクの最大チャージ時間が<b>とてつもなく増加する。</b></li>","name":"カヴァナーの最期の一息","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"クロータス・プレン・アサイラムの患者であったメアリー・ジェナーの、力強い最期の一息。ナースの手の中で力を持って揺れ動く。<br><li>ブリンク後に<i>アビリティ発動のボタン</i>を押すと、即座に元の位置に戻ることができる。ブリンク後の疲労で動けなくなる前にボタンを押さないと発動しない。</li>","name":"ジェナーの最期の一息","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"クロータス・プレン・アサイラムのキャンベル神父から奪われた、力強い最期の一息。ナースの手の中で熱気を帯びてパチパチと弾ける。<br><li>フルチャージしたブリンクで再出現後に、ナースが向いている方向に半分のチャージで即座にブリンクする。</li>","name":"キャンベルの最期の一息","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"クロータス・プレン・アサイラムの患者であったバッドマンの、力強い最期の一息。ナースの手の中で力を持って震える。<br><li>生存者にブリンク攻撃が命中するとナースは<b>探知不可</b> ステータスを<b>16秒間</b>獲得する。</li><li>この効果は<b>60秒間</b>に一度だけ発動する。</li>","name":"「バッドマン」の最期の一息","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"白くてきれいなリボンの切れ端。かつては神聖な本に取り付けられていて、討論の象徴だった。<br><li>連続ブリンク可能回数が<b>1回</b>増加する。</li><li>ブリンクは視界内にのみ有効。</li>","name":"ちぎれた栞","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"形が異なるボタンの奇妙な寄せ集めが入っているマッチ箱。恐ろしい場所を思い出させるのに効果的。<br><li>連続ブリンク可能回数が<b>1回</b>減少する。</li><li>ナースの基本移動速度が<b>4.2m/秒</b>に上昇する。</li>","name":"マッチ箱","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"とても安っぽいプラスチック製のアクセサリー。貴金属に見せるために色が塗られている。<br><li>凝視している間の移動速度が<b>少し上昇する</b></li>","name":"安っぽいイヤリング","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"少し安っぽいかもしれない「ロマンチック」な言葉が書かれたメモ。ガールフレンドの注意を引くために書かれたもの。<br><li><b>内なる邪悪I</b>の溜め攻撃の射程距離が<b>少し増加する</b></li>","name":"ボーイフレンドのメモ","flavor":"「メモには\\"D\\"とサインされている。」","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"少しウェーブがかっている、金色の髪の毛。<br><li><b>内なる邪悪III</b>の効果時間が<b>少し増加する</b></li><li>初めて<b>内なる邪悪III</b>になるまでに必要な邪悪さの量が<b>少し増加する</b></li>","name":"金色の髪の毛","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"非常によく反射する物質の小さなかけら。おそらく壊れた鏡であると思われる。<br><li>内なる邪悪IIのとき、<b>1秒</b>以上凝視した<b>生存者のオーラが視えるようになる</b></li><li><b>2秒間</b>オーラが表示され続ける</li>","name":"キラキラする破片","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"一部がしおれてしまっている、ピンク色の乾いた飛燕草。墓石のそばから摘んできたようだ。<br><li>生存者を凝視しているとき、邪悪さの蓄積する割合が<b>少し増加する</b></li>","name":"思い出の花","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"ビーズと廉価な金属で作られている、大きなネックレス。ジュディスのお気に入りのひとつ。<br><li>凝視しているときの移動速度が<b>そこそこ上昇する</b></li>","name":"ジュエリー","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"ナイロン毛のブラシ。髪にハリとやわらかさを出してくれる。<br><li><b>内なる邪悪III</b>の持続時間が<b>そこそこ増加する</b></li><li>初めて<b>内なる邪悪III</b>になるまでに必要な邪悪さの量が<b>少し増加する</b></li>","name":"ヘアブラシ","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"小さな色付きガラスの欠片で、おそらく壊れた何かの一部。出所を確かめることはできないだろう。<br><li><b>内なる邪悪I</b>のとき、<b>1秒</b>以上凝視した<b>生存者のオーラが視えるようになる</b></li><li><b>3秒間</b>オーラが表示され続ける</li>","name":"ガラスの破片","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"首から尻尾まで引き裂かれた灰色のウサギ。<br><li><b>内なる邪悪II</b>の脅威範囲が<b>そこそこ減少する</b></li><li><b>内なる邪悪III</b>の脅威範囲が<b>そこそこ増加する</b></li>","name":"ウサギの死体","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"割れた鏡の鋭く大きなかけら。<br><li>内なる邪悪IIのとき、<b>1秒</b>以上凝視した<b>生存者のオーラが視えるようになる</b></li><li><b>5秒間</b>オーラが表示され続ける</li>","name":"鏡のかけら","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"ジュディス・M・マイヤーズの持ち物であることが記された日記。大部分のページが恐ろしい乱雑な落書きがあって読めない。<br><li>1人の生存者に<b>執着する</b></li><li>オブセッション状態の生存者を凝視しているとき、邪悪さが蓄積する割合が<b>かなり増加する</b></li><li><i>オブセッションは1マッチにつき1人のみ。</i></li>","name":"ジュディスの日記","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"何の変哲もない木箱。昔はたくさんのものをしまっていたようだ。<br><li>凝視しているときの移動速度が<b>かなり上昇する</b></li>","name":"ジュエリーボックス","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"1965年の卒業アルバムからはぎ取られた光沢紙のページ。ジュディス・マイヤーズにささげられる。<br><li>生存者を凝視しているとき、邪悪さが蓄積する割合が<b>そこそこ増加する</b></li>","name":"J・マイヤーズの思い出","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"髪の毛を留めるのに使う、タータン柄の青いリボン。<br><li><b>内なる邪悪III</b>の持続時間が<b>かなり増加する</b></li><li>初めて<b>内なる邪悪III</b>になるまでに必要な邪悪さの量が<b>少し増加する</b></li>","name":"リボンの髪留め","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"埃とフェイスパウダーに薄く覆われている以外は完璧な状態の、スタンドがついた持ち運べる化粧鏡。<br><li><b>内なる邪悪II</b>で凝視中、<b>16メートル以内の生存者のオーラが視えるようになる</b></li><li>内なる邪悪が<b>ティア II</b>より上昇しなくなる</li><li>移動速度が<b>少し低下する</b></li><li><b>攻撃</b>スコアが発生するたびに、ブラッドポイントが<b>残忍カテゴリー</b>に<b>100%</b>追加され、<b>邪悪カテゴリー</b>に<b>150%</b>追加される</li>","name":"化粧鏡","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"壊れた墓石から取られた、こぶし大の御影石の欠片。<br><li><b>内なる邪悪III</b>のとき、<b>無傷または負傷している生存者を殺害</b>できるようになる</li><li><b>内なる邪悪III</b>で凝視することが<b>できなくなる</b></li><li>生存者を殺害すると、内なる邪悪の残量が<b>かなり減少する</b></li><li>初めて<b>内なる邪悪III</b>になるまでに必要な邪悪さの量が<b>かなり増加する</b></li>","name":"墓石の欠片","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"スタンドのついた持ち運べる化粧鏡。鋭い金属のようなもので激しい傷をつけられている。<br><li><b>内なる邪悪I</b>で凝視中、<b>32メートル以内の生存者のオーラが視えるようになる</b></li><li>内なる邪悪が<b>ティア I</b>より上昇しなくなる</li><li><b>攻撃</b>スコアが発生するたびに、ブラッドポイントが<b>残忍カテゴリー</b>に<b>100%</b>追加され、<b>邪悪カテゴリー</b>に<b>200%</b>追加される</li>","name":"傷ついた鏡","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"黒いゴムで結われた、金色の毛髪の一房。<br><li><b>内なる邪悪III</b>の持続時間が<b>とてつもなく増加する</b></li><li>初めて<b>内なる邪悪III</b>になるまでに必要な邪悪さの量が<b>そこそこ増加する</b></li>","name":"髪の毛の房","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"シンクレア山墓地にあった、大きくて重い御影石の墓石。ジュディス・マイヤーズのもの。<br><li><b>内なる邪悪III</b>のとき、<b>無傷または負傷している生存者を殺傷</b>できるようになる</li><li><b>内なる邪悪III</b>になると、凝視することが<b>できなくなる</b></li><li>初めて<b>内なる邪悪III</b>になるまでに必要な邪悪さの量が<b>とてつもなく増加する</b></li><li>移動速度が<b>そこそこ低下する</b></li>","name":"ジュディスの墓石","flavor":"「愛する娘、ここに眠る。」","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"誰かの頭皮から強引に引きちぎられた金髪の毛の束。かすかに女性らしい花のような香りを放っている。<br><li><b>内なる邪悪III</b>の持続時間が<b>無限</b>となる</li><li>初めて<b>内なる邪悪III</b>になるまでに必要な邪悪さの量が<b>とてつもなく増加する</b></li>","name":"いい香りがする髪の毛の束","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"枯れた植物からできた、ストイックな首飾り。<br><li>魔法陣の設置時間が<b>少し減少する</b></li>","name":"ロープのネックレス","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"淡い金色に輝く卵の欠片。<br><li>発動した幻像の罠の有効時間が<b>少し増加する</b></li>","name":"粉々になった卵の殻","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"小さな泥の塊。ハエの死骸で黒ずんでいる。体力をつけるために食される。<br><li>ハグのテレポート可能距離が<b>少し増加する</b></li>","name":"ハエの死骸が入った泥","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"古い薬品の瓶に詰まった淀んだ水。<br><li><b>幻像の罠の有効範囲が</b>少し増加する</li>","name":"沼の水","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"灰色の毛で覆われている自然のままの花房。<br><li>幻像の罠が発動したとき、生存者のオーラが<b>3秒</b>視えるようになる</li>","name":"ネコヤナギの花々","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"半分に割れた丸い卵の殻。<br><li>発動した幻像の罠の有効時間が<b>そこそこ増加する</b></li>","name":"半分の卵の殻","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"片手ほどの大きさの黄色みがかった羽。乾燥しており、パリパリしている。体力をつけるために食す。<br><li>ハグのテレポート可能距離が<b>そこそこ増加する</b></li>","name":"トンボの羽","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"枯れた植物で飾られた檜の首飾り。雑に作られており既に苔に覆われている。<br><li><b>幻像の罠の設置時間が</b>そこそこ減少する</li>","name":"糸杉の首飾り","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"睡蓮の葉に包まれている汚れた水。<br><li>幻像の罠の有効範囲が<b>そこそこ増加する</b></li>","name":"血染めの水","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"脆い柳の枝で組まれた、三角形のリース。<br><li>幻像の罠が発動したとき、生存者のオーラが<b>4秒</b>視えるようになる</li>","name":"柳のリース","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"枯れた植物で作られた、固い首飾り。萎びた蘭の花びらと葉で飾られている。<br><li>幻像の罠の設置時間が<b>かなり減少する</b></li>","name":"湿地蘭のネックレス","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"うっすらと灰がかかっている大きな沼ゼミ。パリパリしている。体力をつけるために食す。<br><li>ハグのテレポート可能距離が<b>かなり増加する</b></li>","name":"乾燥したセミ","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"薄橙色のカメの卵。割れており、中身は無くなっている。<br><li>発動した幻像の罠の有効時間が<b>かなり増加する</b></li>","name":"割れたカメの卵","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"深紅色の筋が入っている一握りの泥。入り混じった血が泥に力を与える。<br><li>幻像の罠の有効範囲を<b>かなり拡大する</b></li>","name":"血が混じった泥","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"切断された、人食い村の肉屋の手。秘められた生命力は、ハグの隠された大いなる能力を解放する。<br><li>泥の幻像に当たり判定が発生する</li><li>ハグが罠にテレポートできなくなる</li><li>邪悪カテゴリーで入手できるブラッドポイントが<b>300%</b>になる</li><li>他のアドオンより効果が勝る</li>","name":"切り取られた手","flavor":"「……」- 村の肉屋","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"人食い村の地下室で囚人や死体を拘束するために使われていた枷。秘められた生命力は、ハグの隠された大いなる能力を解放する。<br><li>幻像の罠が発動しても、生存者に何も通知されなくなる</li><li>罠からハグの幻が出現しなくなる</li>","name":"錆びた枷","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"人食い村の老人の冷たくなった心臓。秘められた生命力は、ハグの隠された大いなる能力を解放する。<br><li>幻像の罠が発動したとき、ハグの心音範囲が<b>0</b>になる</li><li>泥の幻像の心音範囲が<b>16メートル</b>増加する</li>","name":"おばあちゃんの心臓","flavor":"「あの子の肉をもう一切れ持っておいで。」- おばあちゃん","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"人食い村の耳が聞こえない少年の耳。頭を何回も殴られたせいで歪んでいる。秘められた生命力は、ハグの隠された大いなる能力を解放する。<br><li>幻像の罠を発動させた生存者の耳を<b>6秒間</b>聞こえなくする</li>","name":"変形した耳","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"永らく沼の中で失われていた子供の靴。秘められた生命力は、ハグの隠された大いなる能力を解放する。<br><li>幻像の罠の効果範囲内にいる全ての生存者が<b><i>妨害</i></b>効果に苦しむ</li><li>ハグの移動速度が<b>少し</b>上昇する</li><li>ハグが罠にテレポートできなくなる</li>","name":"ずぶ濡れの靴","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"リサ・シャーウッドが失踪した日に着ていた洋服の切れ端。秘められた生命力は、ハグの隠された大いなる能力を解放する。<br><li>ハグがマップ上のどの幻像の罠にもテレポートできるようになる</li><li>テレポートのクールダウンは<b>15秒</b></li>","name":"ミント柄のぼろきれ","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"カビが生えても弱い電流を通す電極棒。<br><li><b>ショック療法</b>の範囲が<b>少し増加する</b></li>","name":"カビが生えた電極","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"樫材で出来た白いチェスのナイトの駒。とある老人からの贈り物で、遠い記憶を思い起こさせ、ドクターに凄まじい集中力を与える。<br><li><i>特殊攻撃</i>の<b>ショック療法</b>の効果範囲が表示されるようになる</li>","name":"楓製のナイト","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"従来の電気ショック療法。レリー記念研究所の患者に毎日行われていた。患者に軽度のの混乱を引き起こす場合がある。<br><li><b>放電爆破</b>のクールダウンが<b>少し減少する</b></li><br><b>狂気</b>状態の生存者は<i>秩序の症状</i>が出る。<li>破壊されたパレットが<i>幻覚のパレット</i>に置き換わり近づくまで視え続けることがある</li><li><i>幻覚のパレット</i>はランダムな破壊済みパレットの場所に<b>20秒</b>毎に生成される</li><li><b>ドクター</b>は<i>幻覚のパレット</i>のオーラを視ることができる</li>","name":"「秩序」- クラスI","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"様々な精神病を和らげるための低周波を使用する電気ショック療法。カーターのスパークをエネルギー源とするこの処置は、患者に軽度の不安を引き起こす。<br><li><b>放電爆破</b>の準備が整っている間、脅威範囲が<b>少し増加する</b></li><li><b>放電爆破</b>がクールダウンの間、脅威範囲が<b>少し減少する</b></li><br><b>狂気</b>状態の生存者は<i>鎮静の症状</i>を発症する。<li><b>狂気度II</b>：生存者は<i>幻覚の脅威範囲</i>の心音が遠くから<b>断続的に</b>聞こえるようになる</li><li><b>狂気度III</b>：生存者は<i>幻覚の脅威範囲</i>の心音が遠くから<b>絶えず</b>聞こえるようになる</li>","name":"「鎮静」- クラスI","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"ほぼホワイトノイズのみが収録された覚醒プロジェクトのカセットテープ。ドクターの精神を開放し、新しい治療方法に目覚めさせる。<br><li><i>特殊アビリティ</i>の<b>ショック療法</b>が<b>ドクター</b>の前<b>8メートル</b>に出現し、放射状から外半径<b>4.2メートル</b>、内半径<b>3メートル</b>のリング状に変化する</li>","name":"壊れたテープ","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"新品のような電極装置。電気ショック療法を実施するために標準装備として使われる。<br><li><b>ショック療法</b>の範囲が<b>そこそこ増加する</b></li>","name":"磨かれた電極","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"覚醒プロジェクトのカセットテープで、被害者のインタビューが未編集で収録されている。ドクターの精神を開放し、新しい治療方法に目覚めさせる。<br><li><i>特殊アビリティ</i>の<b>ショック療法</b>の範囲が、放射状から射程<b>24メートル</b>、幅<b>2メートル</b>のビーム状に変化する</li>","name":"インタビューテープ","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"霧の中で開発された、実験段階の電気ショック療法。患者とドクターの精神を結びつける周波数を使用する。この処置は、患者に軽度の幻覚症状を引き起こすことで知られている。<br><li>生存者の<b>狂気度</b>が進行したとき、その生存者のオーラを<b>1秒間</b>視ることができる</li><br><b>狂気</b>状態の生存者は<i>抑制の症状</i>を発症する。</li><li><i>幻覚のドクター</i>の出現時間が<b>そこそこ増加する</b></li><li><b>ドクター</b>は<i>幻覚のドクター</i>のオーラを視ることができる</li>","name":"「抑制」- クラスII","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"高刺激の電気ショック療法。レリー記念研究所の患者に毎日行われていた。患者に中程度の混乱を引き起こす場合がある。<br><li><b>放電爆破</b>のクールダウンが<b>そこそこ減少する</b></li><br><b>狂気</b>状態の生存者は<i>秩序の症状</i>を発症する。<li>破壊されたパレットが<i>幻覚のパレット</i>に置き換わり近づくまで視え続けることがある</li><li><i>幻覚のパレット</i>はランダムな破壊済みパレットの場所に<b>20秒</b>毎に生成される</li><li><b>ドクター</b>は<i>幻覚のパレット</i>のオーラを視ることができる</li><span class=\\"FlavorText\\">「副作用が起きるのは非常にまれです。」 - レリー記念研究所</span>","name":"「秩序」- クラスII","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"覚醒プロジェクトで懲罰を目的として使用される電気ショック療法。一定量の高圧電流を使用する。患者を中程度の妄想状態にする場合がある。<br><li><b>ショック療法</b>のデトネーションの遅れが<b>少し減少する</b></li><br><b>狂気</b>状態の生存者は<i>懲罰の症状</i>を発症する。<li><b>狂気度II</b>：追いかけられているとき、生存者は<b>6秒間</b>、まるで<b>ドクター</b>が真後ろにいるかのように<i>幻覚の赤い光</i>と<i>脅威範囲</i>を認識する</li><li><b>狂気度III</b>：<i>i幻覚の赤い光</i>と<i>脅威範囲</i>は常に作用している</li><li><b>ドクター</b>は<i>幻覚の赤い光</i>を視ることができる</li><span class=\\"FlavorText\\">「当研究所では患者の皆さまを再教育するにあたり、細心の注意を払っています。」 - レリー記念研究所</span>","name":"「懲罰」- クラスII","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"様々な精神病を和らげるための低周波を使用する、危険な電気ショック療法。カーターのスパークをエネルギー源とするこの処置は、患者に適度な不安を引き起こす。<br><li><b>放電爆破</b>の準備が整っている間、脅威範囲が<b>そこそこ増加する</b></li><li><b>放電爆破</b>がクールダウンの間、脅威範囲が<b>そこそこ減少する</b></li><br><b>狂気</b>状態の生存者は<i>鎮静の症状</i>が出る。<li><b>狂気度II</b>：生存者は<i>幻覚の脅威範囲</i>の心音が遠くから<b>断続的に</b>聞こえるようになる</li><li><b>狂気度III</b>：生存者は<i>幻覚の脅威範囲</i>の心音が遠くから<b>絶えず</b>聞こえるようになる</li><span class=\\"FlavorText\\">「電気ショック療法は最も安全な医療処置の一つです」――レリー記念研究所</span>","name":"「鎮静」- クラスII","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"超高電圧にも長時間耐えられる電極の試作品。<br><li><b>ショック療法</b>の範囲が<b>かなり増加する</b></li>","name":"高刺激電極","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"霧の中で開発された、実験段階の電気ショック療法。刺激の強い周波数を使用し、患者とドクターの精神を結びつける。この処置は、患者に深刻な幻覚症状を引き起こすことで知られている。<br><li>生存者の<b>狂気度</b>が進行したとき、その生存者のオーラを<b>2秒間</b>視ることができる</li><br><b>狂気</b>状態の生存者は<i>抑制の症状</i>を発症する。<li><i>幻覚のドクター</i>の出現時間が<b>そこそこ増加する</b></li><li><b>ドクター</b>は<i>幻覚のドクター</i> のオーラを視ることができる</li>","name":"「抑制」- クラスIII","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"覚醒プロジェクトで懲罰を目的として使用される電気ショック療法。一定量の超高圧電流を使用する。患者を深刻な妄想状態にする場合がある。<br><li><b>ショック療法</b>のデトネーションの遅れが<b>そこそこ減少する</b></li><br><b>狂気</b>状態の生存者は<i>懲罰の症状</i>を発症する。<li><b>狂気度II</b>：追いかけられているとき、生存者は<b>6秒間</b>、まるで<b>ドクター</b>が真後ろにいるかのように<i>幻覚の赤い光</i>と<i>脅威範囲</i>を認識する</li><li><b>狂気度III</b>：<i>i幻覚の赤い光</i>と<i>脅威範囲</i>は常に作用している</li><li><b>ドクター</b>は<i>幻覚の赤い光</i>を視ることができる</li><span class=\\"FlavorText\\">「患者の皆さまへの敬意が私たちの理念の根幹です。」 - レリー記念研究所</span>","name":"「懲罰」- クラスIII","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"霧の中で開発された、実験段階の電気ショック療法。乱雑に注釈が書き込まれている。耐え難い周波数を使用し、患者とドクターの精神を結びつける。この処置は、患者に重篤な幻覚症状を引き起こすことで知られている。<br><li>生存者の<b>狂気度</b>が進行したとき、その生存者のオーラを<b>3秒間</b>視ることができる</li><br><b>狂気</b>状態の生存者は<i>抑制の症状</i>を発症する。<br><li><i>幻覚のドクター</i>の出現時間が<b>そこそこ増加する</b></li><li><b>ドクター</b>は<i>幻覚のドクター</i>のオーラを視ることができる</li><span class=\\"FlavorText\\">「私には彼らの<u>おぞましい</u>疾患が見える。」 - 無記名のメモ</span>","name":"「抑制」- カーターのメモ","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"実験段階の電気ショック療法。ハーマン・カーター博士自らの注釈付き。強い刺激を均一に、長時間与えることで患者に重篤な混乱を引き起こす。<br><li><b>放電爆破</b>のクールダウンが<b>かなり減少する</b></li><br><b>狂気</b>状態の生存者は<i>秩序の症状</i>が発症する。<li>破壊されたパレットが<i>幻覚のパレット</i>に置き換わり近づくまで視え続けることがある。</li><li><i>幻覚のパレット</i>はランダムな破壊済みパレットの場所に<b>20秒</b>毎に生成される</li><li><b>ドクター</b>は<i>幻覚のパレット</i>のオーラを視ることができる</li><span class=\\"FlavorText\\">「刺激は<u>痙攣</u>レベルに維持されなくてはならない。」 - H. カーター</span>","name":"「秩序」- カーターのメモ","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"覚醒プロジェクトで懲罰を目的として使用される電気ショック療法。ハーマン・カーター博士自らの注釈付き。耐えられないほどの高圧電流により、患者を重篤な妄想状態に陥らせる。<br><li><b>ショック療法</b>のデトネーションの遅れが<b>かなり減少する</b></li><br><b>狂気</b>状態の生存者は<i>懲罰の症状</i>を発症する。<li><b>狂気度II</b>：追いかけられているとき、生存者は<b>6秒間</b>、まるで<b>ドクター</b>が真後ろにいるかのように<i>幻覚の赤い光</i>と<i>脅威範囲</i>を認識する</li><li><b>狂気度III</b>：<i>i幻覚の赤い光</i>と<i>脅威範囲</i>は常に作用している</li><li><b>ドクター</b>は<i>幻覚の赤い光</i>を視ることができる</li><span class=\\"FlavorText\\">「執拗な被験者の再発を防ぐため、懲罰を与える際には最大レベルを使用するように。」 - H. カーター</span>","name":"「懲罰」- カーターのメモ","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"実験段階の電気ショック療法。ハーマン・カーター博士自らの注釈付き。様々な精神病を和らげるための低周波を使用する。カーターの電光をエネルギー源とするこの処置は、患者に手に負えない恐怖と不安感を与える。<br><li><b>放電爆破</b>の準備が整っている間、脅威範囲が<b>かなり増加する</b></li><li><b>放電爆破</b>がクールダウンの間、脅威範囲が<b>かなり減少する</b></li><br><b>狂気</b>状態の生存者は<i>鎮静の症状</i>が出る。<li><b>狂気度II</b>：生存者は<i>幻覚の脅威範囲</i>の心音が遠くから<b>断続的に</b>聞こえるようになる</li><li><b>狂気度III</b>：生存者は<i>幻覚の脅威範囲</i>の心音が遠くから<b>絶えず</b>聞こえるようになる</li><span class=\\"FlavorText\\">「より良質の発作は緊張症を引き起こす。少なくとも、それが続く間は私は<u>平穏</u>でいられる。」 - H. カーター</span>","name":"「鎮静」- カーターのメモ","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"霧から創られたガラスのようなチェスのキングの駒。内部で反響するエンティティの痕跡は、強靭な精神の持ち主さえも狂わせる。<br><br><b>狂気</b>状態の生存者は<i>鎮静、懲罰、秩序</i>、そして<i>抑制の症状</i>を発症する。<li>生存者は<i>幻覚の脅威範囲</i>の心音が遠くから<b>断続的に</b>聞こえるようになる</li><li>追いかけられているとき、生存者はまるで<b>ドクター</b>が真後ろにいるかのように<i>幻覚の赤い光</i>と<i>脅威範囲</i>を認識する。この効果は追跡が終了した時点で<b>狂気度II</b>の場合は<b>6秒間</b>持続し、<b>狂気度III</b>の場合は常に作用する</li><li>破壊されたパレットが<i>幻覚のパレット</i>に置き換わり近づくまで視え続けることがある。新しい<i>幻覚のパレット</i>はランダムな破壊済みパレットの場所に<b>20秒</b>毎に生成される</li><li><i>幻覚のドクター</i>の持続時間が<b>そこそこ増加する</b></li><li><b>ドクター</b>は<i>幻覚の赤い光</i>と、<i>幻覚のドクターおよび幻覚のパレット</i>のオーラを視ることができる</li>","name":"玉虫色のキング","flavor":"「玉虫色のガラスを覗き込むことは、狂気の渦に飛び込むということだ。」","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"霧そのものから作られたガラス状のクイーンのチェス駒。触ると相当な電気衝撃を必ず受ける。<br><li><i>特殊アビリティ</i>の<b>ショック療法</b>か<b>放電爆破</b>が命中した生存者は長びく<b>静電気</b>を受ける。 <b>静電気</b> は<i>放電</i>されるまで生存者につきまとう</li><li><b>4メートル</b>以内に同時にいる複数の生存者に<b>ショック療法</b>または<b>放電爆破</b>のいずれかの同じ<i>特殊アビリティ</i>が命中した場合、<b>静電気</b>を受けることはない</li><li>生存者の<b>4メートル</b>以内に<b>静電気</b>を持っている別の生存者がいる場合、その生存者は<i>特殊アビリティ</i>の<b>ショック療法</b>と同じ効果を持つ電撃を受け、<b>静電気</b>は即座に<i>放電される</i></li>","name":"玉虫色のクイーン","flavor":"「効果的な治療法を確立すれば、その効果的な提供手段に集中できる。」 - H. カーター","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"粗すぎて何の役にも立たない石。これで傷がついた刃で切られると、ひどい開放創ができる。<br><li>攻撃が命中した生存者の痛みによるうめき声が<b>50%</b>増大する。うめき声は完全に回復すると通常に戻る</li>","name":"ザラザラした石","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"水ぶくれのある顔を拭き取るための質素な生地の布切れ。<br><li>手斧を飛ばす速度が<b>10%</b>上昇する</li>","name":"黄ばんだ布","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"手斧の柄に巻かれた包帯。<br><li>手斧のクールダウンが<b>少し減少する</b></li>","name":"包帯が巻かれた柄","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"手斧の刃に塗る毒。テングダケの毒は頭脳を麻痺させる。<br><li>命中した対象が<b>60秒間</b><b><i>目眩まし</i></b>効果に苦しむ</li><li>重複しない</li>","name":"テングダケの毒","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"変則的な重りの付いた手斧の刃。強打を与えるために作られた。扱うためには腕の筋力が必要。<br><li>命中したターゲットは<b>10秒間</b><b>行動不能</b>のステータス効果に苦しむ</li>","name":"重りの付いた刃","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"原型をとどめていないが、未だピカピカに磨かれている銅のブローチ。特に厄介な獲物から奪われた。<br><li>手斧を構えているときの移動速度が<b>少し上昇する</b></li><li>重複しない</li>","name":"光り輝くブローチ","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"素早く、巧妙に扱うことが出来るよう磨かれた、手斧用の樫製の柄。<br><li>手斧のクールダウンが<b>そこそこ</b>減少する</li>","name":"樫製の柄","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"ドジョウツナギから作られた、丸い装飾用の編み紐。取り残された幼い存在の記憶により、ハントレスは怒りと集中力で満たされる。<br><li>手斧を構える時間が<b>そこそこ</b>減少する</li>","name":"ドジョウツナギの編み紐","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"輪に結ばれた革紐は、ベルトに取り付けることで道具の持ち運びを容易にする。<br><li><b>追加で1本の</b>手斧を持って開始する</li><li>持ち運べる手斧が<b>1本</b>増加する</li>","name":"革の輪","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"乾燥した花びら。お茶にすると倦怠感や過労を和らげてくれる。<br><li>手斧を飛ばす速度が<b>20％</b>上昇する</li>","name":"イワベンケイ","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"なめされた革で作られた手袋は手を守り、しっかりとしたグリップを与えてくれる。<br><li>ロッカーで手斧を補充する時間が<b>そこそこ減少する</b></li>","name":"鹿革の手袋","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"手斧の刃に塗られた有毒な調合薬。濁った毒液は、主に目眩を引き起こす効果を持つクサリヘビの毒でできている。<br><li>命中した対象が<b>5秒間</b><b>疲労</b>のステータス効果に苦しむ</li>","name":"毒性の調合物","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"手斧の刃のところどころに固くて剥がれやすい錆が付着しているため、傷がとても治りづらくなる。<br><li>命中した対象が<b><i>重傷</i></b>のステータス効果に苦しむ</li>","name":"錆びた刃","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"花柄で飾られた、綺麗でカラフルなスカーフ。取り残された幼い存在の記憶により、ハントレスは怒りと集中力で満たされる。<br><li>手斧を構える時間が<b>かなり減少する</b></li>","name":"花のバブーシュカ","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"兵士から奪われた丈夫で万能なベルト。多数の革の輪とホルスターは道具を運ぶのに役に立つ。<br><li><b>追加で2本の</b>手斧を持って開始する</li><li>持ち運べる手斧が<b>2本</b>増加する</li>","name":"歩兵のベルト","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"この世のものとは思えない調合薬は、不吉な光をかすかに放っている。<br><li>手斧が命中した生存者のオーラを<b>5秒間</b>表示する</li>","name":"鮮やかな調合薬","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"手斧の頭が汚らわしい何かの染みが付いており、触れたものを誰でも衰弱させる。<br><li>命中した対象が<b><i>重傷</i></b>と<b><i>出血</i></b>のステータス効果に苦しむ。効果は完全に治療されるまで続く</li><li>重複しない</li>","name":"汚れた斧頭","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"大ざっぱに彫られた10センチ足らずの小さな狐の像。隠密さと狡猾さには実力と同等の効力があることを思い出させてくれる。<br><li>リロード後、<b>15秒間</b><i><b>探知不可</b></i>のステータス効果を得る</li>","name":"木製の狐","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"霧から創られたガラスのような手斧の刃。刃は温かく、エンティティの力で振動しているかのようだ。<br><li>手斧が命中した無傷の生存者は即座に瀕死状態に陥る</li><li>持ち運ぶ手斧の上限数が<b>1本</b>に設定される</li>","name":"玉虫色の刃","flavor":"「玉虫色のガラスは肉と魂を断ち切る。」","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"死んだ兵士から手に入れた布。サポーターとして足首と下腿を保護してくれる。<br><li>手斧を持っていない時のハントレスの移動速度が<b>秒速4.6メートル</b>になる</li>","name":"兵士の巻きゲートル","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"悪臭がする油。低質な潤滑油として使われている。<br><br><li>生存者への攻撃成功時、チェーンソーのクールダウンが<b>少し減少する</b></li>","name":"植物油","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"チェーンソーに適した綺麗な点火プラグ。<br><br><li>チャージの回復速度が<b>少し上昇する</b></li>","name":"点火プラグ","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"チェーンソーの刃を研ぐためのヤスリ。<br><li>癇癪の持続時間が<b>少し減少する</b></li>","name":"チェーンソー用ヤスリ","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"小型エンジンが処理できる量の燃料だけを送り込むようにする制御装置。スピードを安定させ、安全にする。<br><br><li>チェーンソーの攻撃を受けても自動的に瀕死状態にならない。</li><li>チェーンソー命中によって得られるブラッドポイントが<b>100%</b>増加する。</li>","name":"スピードリミッター","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"点火システムに多くのガスを送り込むことにより、素早いパワフルな始動が可能になる。<br><br><li>チャージの回復速度が<b>そこそこ上昇する</b></li>","name":"プライマー・バルブ","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"鉄製の頑丈なバー。長いチェーンに対応。<br><br><li>癇癪を発動する前に、チェーンソーの回転数が<b>少し上昇する</b></li>","name":"長いガイドバー","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"高熱の刃によってもたらされた、チェーンソーのボディを覆う傷跡。これを持つと、暴力的なしつけの記憶のせいで失敗に対する恐怖でいっぱいになる。<br><br><li>チェーンソー使用時の移動速度が<b>少し上昇する</b></li><li>チャージ時間が<b>少し増加する</b></li>","name":"ナイフの傷","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"黒いガスパイプで作られた、その場しのぎの排気装置。<br><br><li>癇癪の持続時間が<b>そこそこ減少する</b></li>","name":"自家製マフラー","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"生気と活力を与えてくれる、大盛りの温かいチリ。<br><br><br><li>トークン消費時のダッシュ持続時間が<b>少し増加する</b></li><li>掃討チェーンソーの攻撃チャンス時間が<b>少し増加する</b></li>","name":"チリ","flavor":"「うまいバーベキューを仕入れたよ。」- ドレイトン・ソーヤー","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"粘度が高い黄ばんだ油性物質。ソーヤー家が混合したこの潤滑剤は、住居周りで多目的な用途に使用されている。<br><br><li>癇癪を発動する前に、チェーンソーの回転数が<b>そこそこ上昇する</b></li>","name":"グリース","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"チェーンソーのボディを覆うギザギザのマーク。霧の中に生きる闇の魔獣により罰として刻まれた。これを持つと、暴力的なしつけの記憶のせいで失敗に対する恐怖でいっぱいになる。<br><br><li>チェーンソー使用時の移動速度が<b>そこそこ上昇する</b></li><li>チャージ時間が<b>少し増加する</b></li>","name":"暗獣の刻印","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"非常に頑丈な刃が取り付けられたチェーン。犠牲者は治療を受けても傷が残る。<br><li>チェーンソーで攻撃された生存者は<b>重傷</b>のステータス効果に苦しむ。","name":"残虐なチェーン","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"チェーンソー用に特殊な配合がなされた油。特別な添加剤で落ちにくくしてある。<br><br><li>脅威範囲に他の生存者がいない状態で生存者1人をチェーンソーでダウンさせると、<b>20秒間</b>その生存者のオーラが視えなくなる</li>","name":"市販の潤滑剤","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"汚染物質が付着したチェーン。触れた者を衰弱させる。<br><br><li>チェーンソーが命中した生存者はアイテムを落とす。</li>","name":"汚れたチェーン","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"デプスゲージの角度を深くするための道具。チェーンが\\"木\\"にさらに食い込むようになる。<br><li>チャージ数が<b>増加する</b></li><li>チャージ時間が<b>少し増加する</b></li><li>掃討チェーンソーの最大速度が<b>少し低下する</b></li>","name":"デプスゲージ","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"耐久力のある軽量なチェーンソーのシャーシ。チェーンソーが扱いやすくなる。<br><br><li>チェーンソーの回転数を上げている間、<b>8メートル</b>以内の生存者のオーラが視えるようになる</li>","name":"軽量シャーシ","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"汚れて移りやすい錆がついたチェーン。負傷を治療しづらくする。<br><br><li>チェーンソーで負傷した生存者が<b>90秒</b>間、<b><i>衰弱</i></b>効果に苦しむ</li><li>重複しない</li>","name":"錆びた鎖","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"特上肉のおかげで有名になった、大盛りのスパイシーチリ。<br><br><li>トークン消費時のダッシュ持続時間が<b>そこそこ増加する</b></li><li>チェーンソーの攻撃チャンス時間が<b>そこそこ増加する</b></li><br>","name":"絶品のチリ","flavor":"「美味しさの秘密は肉にあるのですよ。」- ドレイトン・ソーヤー","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"滑らかで若い肉体を薄く切ったもの。発光性の輝きに光る血液は、今なお生気が漂うようだ。<br><br><li>チェーンソーで生存者に攻撃を命中させると、チャージが回復する</li><li>癇癪の最大持続時間を8秒間に制限する</li><br>","name":"玉虫色の刃","flavor":"「今起きていることが現実だと受け止められない時ってあるのよ。自分を窮地に追いやれば、あなたもそれがわかるかもしれないわ。」 —パム・ジョーンズ","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"チェーンソーのキャブレターの調整方法について乱暴に書かれた説明書。<br><li>チェーンソーダッシュを行うと自動的にチャージがすべて消費される。</li><li>チェーンソーダッシュの持続時間が<b>少し増加する</b></li><li>掃討チェーンソーの最大速度が<b>少し低下する</b></li>","name":"キャブレター調整ガイド","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"ある少年の、オレンジと黄色の縞模様のシャツ。「ジェシー」という名前タグが縫い付けられている。<br>生存者が<b>ドリームワールド</b>にいる場合：<li><i>治療</i>と<i>修理</i>の進行度のペナルティが<b>少し上昇する</b></li>","name":"ウールのシャツ","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"「S」の文字と草を食べるモコモコの子羊2頭が描かれている白と青の木製のブロック。<li>生存者が<b>ドリームスネア</b>か<b>ドリームパレット</b>にアクションを起こすと、その生存者は30 秒間、<b>目眩まし効果</b> を受ける。</li>","name":"羊のブロック","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"明らかに幼い子供が描いた作者不明の絵。<li>生存者が<b>ドリームスネア</b>を踏むと、<b>邪悪カテゴリー</b>の<b>ブラッドポイントを追加で200獲得することができる。</b></li><li><b>ドリームスネア</b>の速度低下が<b>かなり減少</b>する。</li>","name":"子供の絵","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"腕利きの庭師であれば誰もが持つべき小さな熊手。<br><b>ドリームスネア</b>を<b>ドリームパレット</b>と交換する。<li>7<b>ドリームトークン</b></li>","name":"庭用熊手","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"茂みの刈り込みに便利な自家製ツール。<li><b>ドリームスネア</b>を<b>ドリームパレット</b>と交換する。</li><li>7<b>ドリームトークン</b></li><li>生存者が<b>ドリームパレット</b>にアクションを行うと、<b>4秒間</b><i>ナイトメア</i>にオーラが視えるようになる</li>","name":"爪の試作品","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"丈夫な屋外用ロープ。色んなものを縛るのに役立つ。<br><b>ドリームワールド</b>にいる生存者が<li>発電機を修理する音が<b>8メートル</b>離れた距離から聞こえる</li>","name":"屋外用ロープ","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"フゼインで描かれたラフで大胆なスケッチ画。ナンシー・Hの署名が入っている。<li><b>ドリームワールド</b>にいる生存者1人につき、<b>ドリームプロジェクション</b>の特殊能力回復速度が<b>少し上昇</b>する。</li>","name":"ナンシーのスケッチ","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"ある少女の、白い絹のリボンが付いた緑色のドレス。<br>生存者が<b>ドリームワールド</b>にいる場合：<li><i>治療</i>と<i>修理</i>の進行度のペナルティが<b>少し上昇する</b></li><li>生存者が<i>治療</i>または<i>修理</i>のスキルチェックに失敗すると<b>3 秒間</b>、<i>ナイトメア</i>は生存者のオーラを視ることができる</li>","name":"緑のドレス","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"白と紫色の木製ブロック。「C」の文字と眠っている猫が描かれている。<li>生存者が<b>ドリームスネア</b>または<b>ドリームパレット</b>にアクションを起こすと、その生存者は60 秒間、<b>出血効果</b>に苦しむ。</li>","name":"猫のブロック","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"白と赤の木製ブロック。「U」の文字と跳ねるユニコーンが描かれている。<li>生存者が<b>ドリームスネア</b>か<b>ドリームパレット</b>にアクションを起こすと、その生存者は60 秒間、<b>目眩まし効果</b> を受ける。</li>","name":"ユニコーンのブロック","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"ブランコの椅子をしっかり固定するために使われる、錆びているが丈夫なチェーン。<br>生存者が<b>ドリームワールド</b>にいる間、<li>足音が<b>50%増大する</b></li>","name":"スイングチェーン","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"思い出として大切に保管されている、ナンシー・ホルブルックがバダム幼稚園で描いた肖像画。<li><b>ドリームワールド</b>にいる生存者1人につき、<b>ドリームプロジェクション</b>の特殊能力回復速度が<b>かなり上昇</b>する。</li>","name":"ナンシーの最高傑作","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"ダブルダッチ縄跳び用の縄。長年の使用で汚れている。<br>生存者が<b>ドリームワールド</b>にいる間、<li>痛みによるうめき声が<b>50%増大する</b></li>","name":"縄跳び用の縄","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"ある少女の、白いレースが付いた淡い青色のドレス。前面が大きく引き裂かれ、台無しになっている。<br>生存者が<b>ドリームワールド</b>にいる場合：<li><i>治療</i>と<i>修理</i>の進行度のペナルティが<b>少し上昇する</b></li><li>生存者が<i>治療</i>または<i>修理</i>のスキルチェックに失敗すると<b>4 秒間</b>、<i>ナイトメア</i>は生存者のオーラを視ることができる</li>","name":"青いドレス","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"かつてゾネラルという錠剤が入っていた空の容器。<li>生存者が<i>ナイトメア</i>を断続的に視認できる範囲が<b>12メートル</b>～<b>24メートル</b>に減少する。</li><li><i>ナイトメア</i>は生存者から<b>24メートル</b>以上離れている場合、視認されない。</li><li><i>ナイトメア</i>は生存者を運んでいる間、起床した生存者に視認されない。</li>","name":"錠剤の容器","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"非常に揮発性と引火性が高い物質が入った缶。<li><b>ドリームスネア</b>を<b>ドリームパレット</b>と交換する</li><li>7<b>ドリームトークン</b></li><li>生存者が<b>ドリームパレット</b>にアクションを行うと、<b>6秒間</b><i>ナイトメア</i>にオーラが視えるようになる</li>","name":"塗料用シンナー","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"バダム幼稚園の賑やかな94～95年組が映っている大きな写真。<li><b>ドリームプロジェクション</b>がキャンセルできなくなった。</li><li><b>ナイトメア</b>が<b>ドリームプロジェクション</b>を発動している間、すべての発電機から血が噴き出る。</li><li><b>ドリームプロジェクション</b>を使用しても<i>ナイトメア</i>の姿が現れなくなる。</li>","name":"クラス写真","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"深い傷のある焼けた木製ブロック。判別できる特徴は「Z」の文字しかない。<li>生存者が<b>ドリームスネア</b>か<b>ドリームパレット</b>にアクションを起こすと、その生存者は<b>60 秒間</b>、<b>出血効果<b> を受ける。</li><li>無傷の生存者は<b>出血効果が消えるまで出血する。</li>","name":"Zのブロック","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"赤い塗料で濡れている大きな赤いペイントブラシ。<li>すべての生存者が<b>ドリームワールド</b>から儀式を開始する。</li><li><b>ドリームワールド</b>では、スキルチェックに失敗しても生存者が起床しない。</li>","name":"赤いペイントブラシ","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"写真がたくさん詰まった黒い段ボール箱。<br>生存者が<b>ドリームワールド</b>にいる間、<li>開いて間もない脱出ゲートが<b>15秒間</b>封鎖される</li>","name":"黒い箱","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"ジグソウボックスの改造。部品に塗られた潤滑油のせいで、中を調べるのにより繊細な動きが必要になる。<br><li>ジグソウボックスを操作するときにスキルチェックが発動する確率が<b>少し増加する</b></li>","name":"工場の潤滑油","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"壊れた人生の象徴。過去の自分を回想することで、決意を固くする。<br><li>奇襲攻撃に失敗したときのクールダウンが<b>少し減少する</b></li>","name":"割られた注射器","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"とあるがん患者のカルテ。読んだ者を恐怖感とやけくそな気分で満たす。<br><li>奇襲攻撃の溜め時間が<b>少し減少する</b></li>","name":"ジョンのカルテ","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"素早く動き回れるように、服の裾を固定する革紐。<br><li>しゃがむまでの時間が<b>少し減少する</b></li>","name":"軍用の革紐","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"ゲームのルールをアマンダに説明しているジグソウの録画ビデオ。過去の自分を回想することで、決意を固くする。<br><li>奇襲攻撃の溜め時間が<b>少し減少する</b></li><li>奇襲攻撃に失敗したときのクールダウンが<b>少し減少する</b></li>","name":"ビデオテープ","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"逆トラバサミを改造する。<br>罠の内側に取り付けられた鋭い刃が、犠牲者が動く度に深く傷つける。<br><li>逆トラバサミを取り付けられた生存者が<b><i>出血</i></b>効果に苦しむ</li>","name":"万能な刃物","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"ジグソウボックスの改造。カミソリのように切れるワイヤーを追加することで中を調べるのがさらに困難になり、また苦痛の可能性を伴うものになる。<br><li>ジグソウボックスを操作するときに、スキルチェックが発動する確率が<b>そこそこ増加する</b></li>","name":"カミソリワイヤー","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"遺言の一部として提供された木箱。掛けがねがかかり、サテンの裏地でしつらえられている。<br><li>使用可能な逆トラバサミが<b>1つ</b><b>増加する</b><br>","name":"遺言","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"逆トラバサミを改造する。<br>鎮静剤を塗った厚手の布製フェイスマスクが対象の呼吸をある程度阻害し、集中できないようにする。<br><li>逆トラバサミを取り付けられた生存者が<b><i>目眩まし</i></b>効果に苦しむ</li><li>ジグソウボックスのハイライトには影響しない</li>","name":"フェイスマスク","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"逆トラバサミを改造する。<br>罠の内側に取り付けられた鋭い刃が、犠牲者が動く度に深く傷つける。<br><li>逆トラバサミを取り付けられた生存者が<b><i>疲労</i></b>効果に苦しむ</li>","name":"緩効性毒物","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"逆トラバサミの改造。逆トラバサミの刃が剥がれやすいサビでまだらに覆われており、傷の治療が著しく困難になる。<br><li>逆トラバサミを取り付けられた負傷状態の生存者が<b><i>重傷</i></b>のステータス効果に苦しむ</li>","name":"錆びた付属品","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"不穏だが天才的な罠の設計図。詳細にスケッチされている。<br><li>使用可能なジグソウボックスが<b>1つ</b><b>増加する</b></li>","name":"ジグソウのスケッチ","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"ジグソウボックスを改造する。<br>重なり合うカミソリの刃を追加することにより、ジグソウボックス内で手首を切り裂かれずに急に動くことが不可能になる。<br><li>ジグソウボックスでスキルチェック失敗をした時のペナルティが<b>とてつもなく増加する</b></li>","name":"重なり合うカミソリ刃","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"数点の機械部品。難しいジグソウボックスと、取り付けが簡単な逆トラバサミを作れるようになる。<br><li>生存者がジグソウボックスを調べる時間が<b>少し増加する</b></li><li>逆トラバサミを設置する時間が<b>少し減少する</b></li>","name":"機械部品の袋","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"改造されたタイマー。装置に仕掛けられたばねによって歯車の回転速度が上がる。<br><li>逆トラバサミの死亡タイマーが<b>そこそこ減少する</b></li>","name":"改造タイマー","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"不穏だが天才的な罠の設計図。ジグソウの注釈付きで紙に記されている。<br><li>使用可能なジグソウボックスが<b>1つ</b><b>増加する</b></li><li>逆トラバサミの死亡タイマーが<b>そこそこ増加する</b></li>","name":"ジグソウの注釈付き設計図","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"機械部品のコレクション。非常に難しいジグソウボックスと取り付けが簡単な逆トラバサミを作れるようになる。<br><li>生存者がジグソウボックスを調べる時間が<b>かなり増加する</b></li><li>生存者に逆トラバサミを設置する時間が<b>そこそこ減少する</b></li>","name":"機械部品の箱","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"1本のナイフと、包帯や湿布などの医療品が入った黒い金属の箱。深い切り傷はストレスを減らし、感覚を呼び覚ます。<br><li>ピッグがジグソウボックスのオーラを視る能力を<b>無効にする</b></li><li>生存者が逆トラバサミを除去したとき、<b>それを感知できる</b></li><li>逆トラバサミを除去している生存者のオーラが<b>6秒間</b>視えるようになる</li>","name":"アマンダの秘密","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"全てのゲームが同じルールである必要はない。<br><li>罠のタイマーが作動するまでの間、<br>生存者がジグソウボックスのオーラを視る能力を<b>無効にする</b></li>","name":"ルールセットNo.2","flavor":"「よく聞け、ゲームにはルールがある」- ジグソウ","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"アマンダ宛の脅迫の手紙。読んだ者は怒りと集中力に満ちる。<br><li>しゃがんでいる間、12メートル以内の生存者のオーラを視ることができる</li><li>使用可能な逆トラバサミの数が<b>3つ</b><b>減少する</b></li><li>使用可能なジグソウボックスの数が<b>2つ</b><b>減少する</b></li>","name":"アマンダへの手紙","flavor":"「ジルが流産した夜、君はセシルといた。彼らの子供を君が殺した。君も、俺だってわかっている事実だ。」- アマンダの手紙","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"疲れた足には心地良い、カビの生えた靴の中底。<br><li>ボトルのリロード中の移動速度が<b>そこそこ</b>増加する</li>","name":"臭い中敷","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"柔らかい手触りの、暖かいオレンジ色の羽。<br><li>ボトル投げのクールダウンが<b>少し</b>減少する</li>","name":"コマドリの羽根","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"標準的なクラウンの衣装の一部。指の部分を切り落とすことで器用さが増す。\\n<li>投げたボトルの曲線が変わる</li>\\n","name":"指あきのパレード用手袋","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"麻酔用の有機化合物。<br><li>中毒の効果時間が<b>少し</b>増加する</li>","name":"パーティー用ボトル","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"寸劇のトニックのボトルに驚くほどピッタリとフィットする丈夫なコルク。<br><li>リロード時間が<b>そこそこ</b>減少する</li>","name":"厚いコルク栓","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"乾燥したソーダと血でネバネバした空のボトル。<br><li>開始時のボトルが<b>1本</b>追加される</li><li>持ち運べるボトルの本数が<b>1本</b>増加する</li>","name":"ネバネバしたソーダボトル","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"とても柔らかい手触りの、エメラルドの光沢を持つ黒い羽。<br><li>ボトル投げのクールダウンが<b>そこそこ</b>減少する</li>","name":"ムクドリの羽","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"揮発性の化学化合物。呼吸器に炎症を引き起こすが、寸劇の解毒剤の吸収性を増加させる。<br><li>活発の持続時間が<b>そこそこ</b>増加する</li>","name":"溶剤の器","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"吸入すると頭が麻痺する、薄い透明の可燃性の液体。<br><li>中毒になった対象が<b>30秒間</b><b>目眩まし</b>効果に苦しむ</li>","name":"灯油缶","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"古典的名作。同じレベルのものは二度とお目にかかれない。<br><li>寸劇のトニックのガスが黄色になる</li><li>寸劇の解毒剤のガスが紫になる</li>","name":"VHSポルノビデオ","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"無臭で粘着性の、腐食性の高い液体。<br><li>中毒になった対象が<b>重傷</b>のステータス効果に苦しむ</li>","name":"硫酸の瓶","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"炎症、火傷、肺の損傷を引き起こす強力な化学薬品。<br>中毒になった対象が<b>そこそこ</b>余分に<b>妨害</b>のペナルティを受ける。","name":"ブリーチのフラスコ","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"寸劇の解毒剤のガス範囲が<b>そこそこ</b>拡大する。","name":"アンモニア水","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"強い麻酔作用がある、甘い匂いのする有機化合物。<br><li>寸劇のトニックの効果範囲が<b>そこそこ</b>増加する</li>","name":"クロロホルムのボトル","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"半分は顔に、半分はトニックに使用。未知の化合物が解毒剤の効果を増大させる。<br><li>活発の持続時間が<b>かなり</b>増加する</li>","name":"派手なメイク道具","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"安上がりに酔えるが、ひどい頭痛をもたらすジンが入っていたボトル。<br><li>開始時のボトルが<b>2本</b>追加される</li><li>持ち運べるボトルの数が<b>2つ</b>増加する</li>","name":"安物のジンボトル","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"有毒な状態にまで濃縮された、揮発性の高い有機化合物。<br><li>中毒の効果時間が<b>かなり</b>増加する</li>","name":"15vol% のエーテル","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"おぞましい、不完全な指のコレクション。クラウンの願望を膨らませ、化学薬品の製造能力に集中させる。<br><li>活発になった生存者や殺人鬼は、16メートルの範囲内にいる他の生存者や殺人鬼全員のオーラが視えるようになる</li>","name":"葉巻の箱","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"入れ墨のある大柄な男の貴重な中指。かすかに機械油の味がする。<br><li>中毒または活発になった生存者のオーラを<b>6秒間</b>視ることができる</li>","name":"入れ墨男の中指","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"赤毛の女性の貴重な小指。かすかに香気を放つ。ポプリとニスの味がする。<br><li>寸劇のトニックのボトルが直接命中した生存者が<b>無防備</b>効果に苦しむ</li>","name":"赤毛の小指","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"着脱が容易で快適なサンダル。<li>山岡の祟りの移動速度が少し上昇する</li><li>重複する</li>","name":"草履","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"着用者に幸福と熱狂をもたらすお守り。<li>山岡の祟りの持続時間が少し増加する</li><li>重複する</li>","name":"幸せのお守り","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"願いをかなえる千羽鶴のうちの一つ。<li>山岡の祟りの回復速度が少し上昇する</li><li>重複する</li>","name":"折り鶴","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"乱れた髪をやさしくほぐす、歯の細かな竹櫛。<li>山岡の祟りの発動を溜める速度が少し上昇する。</li><li>重複する。</li>","name":"贈り物の竹櫛","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"乱れた髪をまとめるための絹のリボン。<li>山岡の祟りの発動を溜める速度がそこそこ上昇する。</li><li>重複する。</li>","name":"白のヘアリボン","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"ガラス蓋が割れた腕時計。バンドに「凜」という名前が殴り書きされている。<li>山岡の祟りの回復速度がそこそこ上昇する。<li>重複する</li>","name":"凜の壊れた腕時計","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"高校の校章が付いた泥だらけのスポーツキャップ。「凜」という名札が縫い付けられている。<li>山岡の祟りの移動速度がそこそこ上昇する</li><li>重複する</li>","name":"泥だらけの運動会のキャップ","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"幸運を呼ぶお守り。<li>山岡の祟りの持続時間がそこそこ増加する</li><li>重複する</li>","name":"開運のお守り","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"暗藍色の葉をつけた盆栽。かつては山岡家の伝統の象徴だった。<li>パッシブフェージングの頻度が少し増加する</li><li>重複する</li>","name":"杜松の盆栽","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"耳に残る音色を響かせる、錆びた横笛。<li>山岡の祟りの回復速度がかなり上昇する</li><li>重複する</li>","name":"錆びた横笛","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"勝守のお守り","name":"勝守のお守り","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"先祖代々伝わる刀の鍔。山岡家のために作られたもの。<li>山岡の祟り使用後の再出現時間が少し増加する</li><li>山岡の祟り使用後の再出現時の移動速度が少し上昇する</li><li>重複する</li>","name":"刀の鍔","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"便利な上履き。<li>山岡の祟りの移動速度がかなり上昇する</li><li>重複する</li>","name":"汚れた上履き","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"乾いた血がこびりついた髪飾り。<li>山岡の祟りの発動を溜める速度がかなり上昇する。</li><li>重複する。</li>","name":"血に塗れた髪飾り","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"怪しげな運命が自分の努力を邪魔するのを防ぐ強力なお守り。<li>山岡の祟りの持続時間が<b>とてつもなく増加する。</li><li>山岡の祟りの移動速度が<b>少し上昇する</b>。</li>","name":"厄除けのお守り","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"先祖代々伝わる刀の鞘。かつて山岡家のために作られたもの。<li>山岡の祟り使用後の再出現時間がそこそこ増加する</li><li>山岡の祟り使用後の再出現時の移動速度がそこそこ上昇する</li>","name":"脇差の鞘","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"念仏を唱える際に用いる強力な腕輪。<li>ひるませる音の放出が脅威範囲外にいるすべての生存者に聞こえる。</li>","name":"数珠","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"散り散りになっている桜のドライフラワー。かつては生の儚さの象徴だった。<li>パッシブフェージングの持続時間が少し増加する</li><li>パッシブフェージングの頻度が少し増加する</li>","name":"桜のドライフラワー","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"「愛しい娘へ」と彫られた銀の指輪。<li>山岡の祟りの移動速度がとてつもなく上昇する</li><li>山岡の祟りを使用しているとき、赤い傷マークが見えなくなる</li>","name":"母娘の指輪","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"働き詰めのサラリーマンである父が着けていた眼鏡。<li>山岡の祟りを使用しているとき、生存者の血痕が見えるようになる</li>","name":"父親の眼鏡","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"友好的なデザインの明るい黄色のバッジ。皮肉の意味で使われる。<li>愚連の狂乱中にに殺人鬼の本能でハイライトされた生存者を攻撃すると、目眩ましの効果が60秒間適用される</li>","name":"スマイリーフェイスのバッジ","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"ハッシュ記号が深く彫られた木製定規。<li>能力ゲージの回復時間が<b>少し減少する</b></li>","name":"傷のついた定規","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"輝いていた日々を思い出させる、いたずら作戦の達成リスト。<li>愚連の狂乱の持続時間が<b>少し増加する</b></li>","name":"いたずらリスト","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"灰色と赤の編み込みロープでできた幅広ブレスレット。黒くて太い文字で「F J S J」と雑に書かれている。<li>殺人鬼の本能の探知範囲が<b>少し広がる</b></li>","name":"友情のブレスレット","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"カフェインを多く含む錠剤。テストなど疲れる活動に取り組む時に感覚が研ぎ澄まされる。<li>殺人鬼の本能の探知範囲が<b>そこそこ広がる</b></li>","name":"眠気覚まし薬","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"ノートから切り取られた、リージョンの壁画のラフスケッチ。<li>愚連の狂乱の持続時間が<b>そこそこ増加する</b></li>","name":"壁画のスケッチ","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"パワーバラードや陰気な曲ばかりが入った、暗く陰鬱なミックステープ。<li>愚連の狂乱が終了した後の疲労が<b>少し減少する</b></li>","name":"ジュリーのミックステープ","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"敵の名前が深く刻まれた、木製の定規。<li><b>能力ゲージの回復に必要な時間が</b>そこそこ減少する</li>","name":"エッチングされた定規","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"以前は友好の象徴だった、落書きされた明るい黄色のスマイリーのバッジ。リージョンの特徴的なアイコン。<li><i>愚連の狂乱</i>中に殺人鬼の本能でハイライトされた生存者を攻撃すると、<b><i>重傷</i></b>のステータス効果が適用される</li>","name":"落書きされたスマイリーバッジ","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"リージョンの顔が描かれた手製のバッジ。脅迫を試みる時だけに使う。<li>「愚連の狂乱」中に殺人鬼の本能でハイライトされた生存者を攻撃すると、衰弱効果が60秒間適用される。</li>","name":"リージョンのバッジ","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"超高速ビートのエネルギッシュな曲が入った、テンポの速いスリリングなミックステープ。<li>殺人鬼の本能の探知範囲が<b>とてつもなく広がる</b></li>","name":"スージーのミックステープ","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"少し奇妙とは言わないまでも、創造的で心揺さぶるスケッチが描かれたスケッチブック。<li>愚連の狂乱の持続時間が<b>かなり上昇する</b></li>","name":"盗まれたスケッチブック","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"不衛生な垢と染みで汚れた刃が、傷の治りを非常に悪くする。<li>生存者が傷を完治させるまでに必要な時間が<b>少し長くなる</b></li>","name":"悪意の刃","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"人生がクソッタレな時に落ち着いてリラックスするための、激しい曲と最高のビートのミックス。<li>愚連の狂乱が終了した後の疲労が<b>そこそこ減少する</b></li>","name":"ジョーイのミックステープ","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"オーモンドの公共図書館から盗まれた、医療関連の印刷記事。損傷や刺し傷についての研究が大衆向きに書いてある。<li>すべての生存者の深手のタイマーが<b>そこそこ減少する</b></li>","name":"刺し傷の研究","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"音楽なしで殺人任務を遂行するなんてあり得ない。重厚なディストーションと、鼓膜に突き刺さる大音響でパーカッションを奏でる再生リスト。<li>愚連の狂乱の攻撃で、生存者の深手のタイマーが<b>かなり減少する</b></li>","name":"フランクのミックステープ","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"血液と垢の不潔な染みで汚れた刃が、傷の治りを非常に悪くする。<li>生存者が傷を完治させるまでに必要な時間が<b>そこそこ長くなる</b></li>","name":"汚れた刃","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"用務員が葬られた場所で集めた少量の泥。異常なほどに冷たい。<li>愚連の狂乱が終了した後の疲労が<b>かなり減少する</b></li>","name":"冷たい泥","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"霧から作られた、リージョンの特徴をよくとらえたガラスのようなバッジ。表面は温かく、エンティティの力が反響している。<br><br>愚連の狂乱発動中：<br><li><b>マップ全体</b>が脅威範囲になる</li><li>自分が乗り越えたパレットが<b>即座に破壊される</b></li><br>この効果は能力ゲージが無くなるまで続く。<br>","name":"玉虫色のバッジ","flavor":"「玉虫色のガラスに貪られた若者たちは、エンティティが及ぶ範囲を強化して広げる。」","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"暗いビート、暴力的な早弾き、この世のものとは思えない底知れぬボーカルが精神を満たし、第六感を震わせる。<li>愚連の狂乱の使用中、<b>発電機の修理進行度</b>が<b>オーラの強さ</b>で判別できる</li>","name":"煙を吐くミックステープ","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"石版の破片。元来は病魔や不快感を取り除くために使われた、堕落の呪文が刻まれている。<li>献身の淀みの発動時間が<b>少し減少する</b></li><li>汚濁の吐瀉を行っている状態での移動速度が<b>少し上昇する</b></li>","name":"祈りの石版片","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"ボスウェリアの木から抽出された希少な樹液。甘い柑橘系の香りで、儀式の最中に使用される。<li>黒死の吐瀉のチャージ中の移動速度が<b>少し上昇する</b></li>","name":"オリバナムのお香","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"多孔質の石でできた円筒形の印章。翼を持つ神々が登場する儀式の光景が描かれている。<li>オブジェクトの感染時間が<b>少し増加する</b></li>","name":"石灰岩の印章","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"酷い刺激臭のする、根を潰したペースト状の軟膏。魚の塩漬けに3日、ワインに2日漬け込まれている。皮膚の発疹に塗布する。<li>黒死の吐瀉のクールダウン時間が<b>少し減少する</b></li>","name":"治癒の軟膏","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"翼を持つ神々が大ざっぱに彫刻されたせっけん石のお守り。病魔を退け、身に着けた者は献身で満たされる。<li>汚濁の吐瀉の持続時間が<b>少し上昇する</b></li>","name":"予防のお守り","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"ハーブとアルコールのつんとした匂いを放つ、泡立って濁った液体。水膨れに塗布する。\\n<li>黒死の吐瀉のクールダウンが<b>そこそこ減少する</b></li>","name":"強力チンキ","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"金属質の貴石でできた円筒形の印章。奇妙な機械の隣に立つ鳥の頭を持つ生き物の姿が刻まれている。神聖な灰の容器として用いられる。<li>オブジェクトの感染時間が<b>そこそこ増加する</b></li>","name":"赤鉄鉱の印章","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"辛子入りの水でできたシロップ剤。体内から悪を一掃する。<li>黒死の吐瀉の効果が<b>少し上昇する</b></li>","name":"催吐薬","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"浄化の儀式中の朝食にぴったりの、美味しい完熟りんご。<li>汚れた献身の淀みが<b>1つ</b>増えた状態で儀式を開始する</li>","name":"祝福のりんご","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"去痰作用のあるマッサージ用オイルの入ったビーカー。月桂樹とローズマリーの新鮮な香りを放っている。<li>黒死の吐瀉のチャージ速度が<b>そこそこ上昇する</b></li>","name":"マッサージ用オイル","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"原料不明の吐き気を催す甘い汁。濃厚な黄色い液体は、飲用すると嘔吐を誘発する。体内から悪を一掃する。<li>黒死の吐瀉の効果が<b>そこそこ上昇する</b></li>","name":"感染催吐薬","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"暗い色をした、蝋質のペースト。織り交ぜられた杉の樹液が甘く土のような芳香を放っている。感染した皮膚に直接塗布する。<li>黒死の吐瀉のチャージ中の移動速度が<b>少し上昇する</b></li><li>黒死の吐瀉のクールダウンが<b>そこそこ減少する</b></li>","name":"香る軟膏","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"悪魔祓いの儀式中に病魔を退ける黒曜石のお守り。騒乱と疫病を司る神への祈りが刻み込まれていて、身に着けた者は激しい献身で満たされる。<li>汚濁の吐瀉の持続時間が<b>そこそこ増加する</b></li>","name":"退魔のお守り","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"神聖な灰に塗れた、皮を剥いたりんご。このような果物を食べることで、邪悪で嫉妬深い死者の霊魂を撃退した。<li>汚れた献身の淀みが<b>1つ</b>増えた状態で儀式を開始する</li><li>オブジェクトの感染時間が<b>少し増加する</b></li>","name":"灰色のりんご","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"金で装飾された石版。元は忘れ去られた神々を崇めるために用いられた、堕落の呪文の線画や文字が記されている。<li>「献身の淀み」の発動時間が<b>そこそこ減少する</b></li><li>汚濁の吐瀉中の移動速度が<b>そこそこ上昇する</b></li>","name":"崇拝の石版","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"腐敗臭のする、原料が不明な半ば凝固した薬。服用するとすぐに嘔吐を引き起こし、体内から悪を一掃する。<li>黒死の吐瀉の効果が<b>かなり上昇する</b></li>","name":"穢れの吐剤","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"アディリスの切断された腐りかけの足の指。糸で繋いでお守りとして首の周りに掛ける。穢れの力を放っている。<li>生存者が他者との接触で感染する確率が<b>かなり上昇する</b></li>","name":"切断された足の指","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"騒乱と疫病を司るバビロニアの神の姿が複雑に彫刻された、血玉髄のアミュレット。身に着けた者は限りない献身で満たされる。<li>汚濁の吐瀉の持続時間が<b>かなり増加する</b></li>","name":"狂信者のお守り","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"プレイグの姿が刻まれた半透明で円筒形の印章。霧そのものから作られた。表面は暖かく、エンティティの力で脈打っている。<li>汚濁の吐瀉を行なっている状態での移動速度が<b>そこそこ減少する</b></li><li>汚濁の吐瀉の持続時間が<b>とてつもなく減少する</b></li><li>発電機が完成するたびに、黒死の吐瀉が汚濁の吐瀉になる</li>","name":"玉虫色の印章","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"鋭い骨の削り屑でできた、黒いペースト状のお香。その悪臭を吸い込むと、心眼が研ぎ澄まされる。<li>嘔吐した生存者のオーラが<b>5秒間</b>視えるようになる</li>","name":"黒のお香","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"以前働いていたフィラデルフィアで、オルセンの犠牲者から盗まれたカメラ。中に入っているフィルムには、その街でのオルセンの最後の夜が写っている。<br><li>遮蔽物から覗き込んでいない場合、生存者が無防備状態になる速度が<b>少し上昇する</b>。</li>","name":"「愛しのフィラデルフィア」","flavor":"「フィラデルフィアは大好きだ。いつも様々な物を与えてくれる。何もかも大事な思い出だ」– ゴーストフェイス","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"北ローズビルにある小さなバー、ウォールアイの紙マッチ。犠牲者の電話番号が青字で殴り書きしてある。発見された有力な証拠の一つ。<br><li><i>闇の包容</i>の能力回復速度が<b>少し上昇する</b>。</li>","name":"ウォールアイの紙マッチ","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"ユタ州からペンシルバニア州にかけての未解決殺人事件を特集した記事の切り抜き。ゴーストフェイスはいくつかの見出しを書いているだけだが、すべての殺人事件に関与していた。<br>成功を重ねることで自尊心と自信が高まる。<br><li>つけ回し中の移動速度が<b>少し上昇する</b>。</li>","name":"見出しの切り抜き","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"1ドルショップで買ったコロン。ツンとした消毒用アルコールの刺激臭がする。自分の存在をアピールするためにゴーストフェイスが使う。突然の訪問のための備え。<br><li>生存者が無防備状態になっている時間が<b>少し増加する</b>。</li>","name":"安物コロン","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"気付かれずに遠くから写真撮影ができるマニュアルフォーカスのレンズ。<br><li>遮蔽物から覗き込んでいない場合、生存者が無防備状態になる速度が<b>少し上昇する</b>。</li><li>生存者の無防備状態の継続時間が<b>少し増加する</b>。</li>","name":"望遠レンズ","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"染みだらけの手書きの目次がついたリング式ノート。犠牲者をつけ回すのに使用した様々な道具が日記に詳細に記述されている。過去の行動を読み返すことで、スリリングな記憶が呼び起こされる。<br><li>つけ回し中の移動速度が<b>そこそこ上昇する</b>。</li>","name":"オルセンの日記","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"不鮮明な汚い筆跡で書かれたリスト。ローズビル殺人事件の犠牲者全員の電話番号と住所が載っている。<br><li><i>闇の包容</i>の能力回復速度が<b>そこそこ上昇する</b>。</li>","name":"オルセンのアドレス帳","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"フロリダ州、北ローズビルの注釈つきの地図。Xはゴーストフェイスの犠牲者を表している。標的を地図に正確に示すことで、察知されることなく街を徘徊できる。<br><li>殺人鬼が発見されると、殺人鬼の本能が視える時間が<b>そこそこ増加する</b>。</li>","name":"印をつけた地図","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"うろついている時でも物をしっかりと固定できる黒いストラップ。<br><li>しゃがみ中の移動速度が<b>少し上昇する</b>。</li>","name":"シンチストラップ ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"オルセンの財布には現金30ドル、ビデオ屋の会員カード、ローズビルでのオルセンの最初の犠牲者の束ねられた写真が入っている。決定的な証拠を持ち歩くことで興奮が高まり、決意が固まる。<br><li>つけ回し中の移動速度が<b>かなり上昇する</b>。</li>","name":"オルセンの財布","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"目立たず柔軟性のあるナイフ用シース。装備がしっかり固定されていると、動きやすさが向上する。<br><li>しゃがみ中の移動速度が<b>そこそこ上昇する</b>。</li>","name":"革製ナイフシース","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"ゴーストが自己の存在をアピールする際につける、圧倒的な存在感を放つ麝香のフレグランス。記事にするつもりだった犠牲者のために取っておいた。<br><li>生存者が無防備状態のまま継続する時間が<b>そこそこ増加する</b>。</li>","name":"持続性のある香水","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"目立たないようにナイフを腰に装備する際に最適なベルトクリップ。今夜の計画は誰にも知られることはない。<br><li>遮蔽物から覗き込んでいない場合、生存者が無防備状態になる速度が<b>そこそこ上昇する</b>。</li>","name":"ナイフ用ベルトクリップ","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"キャップに噛んだ跡のある青いペン。ダニーのDNAの痕跡が残っている。発見されることのなかった、有罪を示す証拠。<br><li><i>闇の包容</i>の能力回復速度が<b>かなり上昇する</b>。</li>","name":"噛み跡のついたペン","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"破れたページに、ローズビルでオルセンが最初に殺害した犠牲者の、毎週の日課についての概要が書かれている。習慣を分析することで、犠牲者の行動が予測可能になる。\\n<br><li>殺人鬼が発見されると、殺人鬼の本能が視える時間が<b>そこそこ増加する</b>。</li><li>闇の包容発動中に、殺人鬼の居場所を明かす探知範囲が<b>そこそこ減少する</b>。</li><br><span class=\\"FlavorText\\">「しばらく君を監視していたよ。今回は読者の頭に刻み込まれるくらい特別な見出しにしたくてね」- ゴーストフェイス</span>","name":"詳細な犠牲者の日課","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"暗闇でも鮮明な写真が撮影可能な暗視用レンズ。深夜、目立たないようにアポなし訪問をする際に最適。<br><li>遮蔽物から覗き込んでいない場合、生存者が無防備状態になる速度が<b>かなり上昇する</b>。</li>","name":"単眼暗視スコープ","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"動きを妨げないナイフ用シース。自在な動きで素早く致命傷を与える際に適している。ダニーがフィラデルフィアを去った夜、巡回中の警官から盗んだもの。<br><li>しゃがみ中の移動速度が<b>かなり上昇する</b>。</li><span class=\\"FlavorText\\">「偵察兵のような覚悟が必要だ。くだらない記章なんてなくていい。僕にはもっといいものが手に入る」- ゴーストフェイス</span>","name":"ドロップレッグタイプのナイフシース","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"オルセンの本名がダニー・ジョンソンであることを証明する運転免許証。<br><li><i>闇の包容</i>発動中に、殺人鬼の居場所を明かす探知範囲が<b>かなり減少する</b>。</li>","name":"運転免許証","flavor":"「誰もがゴーストフェイスの正体を知りたがっているが、本当に聞くべきなのは『次は誰の番か』だ」   - ゴーストフェイス","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"ローズビルを震撼させた記事を書くためにオルセンが用意したテープ。<br><li>遮蔽物から覗き込むと、生存者が無防備状態になる速度が<b>とてつもなく上昇する</b>。</li><li>遮蔽物から覗き込んでいない場合は、生存者が無防備状態になる速度が<b>とてつもなく低下する</b>。</li>","name":"「ゴーストフェイス、カメラに捉えられる」","flavor":"「この映像では、黒っぽい人影が深夜にフロリダの北ローズビルの住宅に侵入する場面が捉えられています。翌朝警察が呼ばれ、その地域での殺人事件を報じました。施錠を怠らないでください。殺人鬼は私たちのすぐ近くで、闇に潜む亡霊のごとく気ままに徘徊しています」– ローズビル・ガゼット","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"小型監視カメラ。ゴーストフェイスが北ローズビルのベルビュー通りにある住宅に侵入する様子が映っている。警察に証拠を残すことなくゴーストフェイスの姿が一瞬だけ映るよう、カメラは完璧なアングルで設置されていた。<br><li>無防備状態の生存者が瀕死状態になると、脅威範囲外の生存者全員のオーラが4秒間見える。</li>","name":"屋外用防犯カメラ","flavor":"「映像には言葉の千倍の価値がある」–ゴーストフェイス","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"ホーキンスの腐った土壌に汚染されたかぼちゃ。<li>裏側の世界を横断する際、進入するポータルが破壊される。横断するとブラッドポイントを200追加で取得する</li>","name":"腐ったかぼちゃ","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"デモゴルゴンが食べる、噛みごたえのあるネズミの尻尾。<li>ポータルを開くための時間が<b>少し減少</b>する。</li>","name":"ネズミの尾","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"塩気のある柔らかなレバーの山。<li><b>深淵のいざない</b>を溜めている間、殺人鬼の移動速度が<b>少し上昇</b>する。</li>","name":"ネズミのレバー","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"裏側の世界の触手生物より剥ぎ取られた黒くうねる心臓。<li><b>シュレッド</b>の攻撃が命中した時の回復速度が<b>少し上昇する。</b></li>","name":"黒の心臓","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"湿った弾性のある網で、次元間トンネルを拡張する。<li>生存者がポータルを閉鎖するのに要する時間を<b>少し延長</b>する。</li>","name":"ヴィスカス・ウェビング","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"軽い粘性のある地層。次元間トンネルを覆い、拡張している。<li><b>深淵のいざない</b>によって生存者を発見する範囲が<b>そこそこ拡大</b>する</li>","name":"スティッキーライニング","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"デモゴルゴンの餌となる腐敗したトライプ。<li>裏側の世界を横断する間の殺人鬼の移動速度を<b>少し上昇</b>させる。</li>","name":"腐った緑色のトライプ","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"不運な犠牲者の美味しい内臓。<li>使用可能なポータルの合計数が<b>1つ</b><b>増加する。</b></li><li><b>シュレッド</b>の攻撃が外れた時の回復速度が<b>少し上昇する。</b></li>","name":"ミューの内蔵","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"裏側の世界を通過して壊れたメガネ。<li>パレットを破壊した際の<i>シュレッド</i>の回復速度が<b>少し上昇する</b></li>","name":"バーブの眼鏡","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"裏側の世界の黒いキノコ。デモゴルゴンはこれによりテレパシーで獲物の感覚を歪める。<li>ポータルから出現した際に殺人鬼に適用される<b>不明なステータス効果</b>の効果時間を<b>少し延長する。</b></li>","name":"ヴァイオレット・ワックスキャップ","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"厚いとげのあるつる植物で、次元間トンネルを伸ばしたり補強したりする。<li>生存者がポータルを閉鎖するのに要する時間を<b>少し延長</b>する</li>。<li><b>深淵のいざない</b>によって生存者を発見する範囲を<b>少し拡大</b>する。</li>","name":"茨のツル","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"精神エネルギーで満ちたソーダ缶。<li>裏側の世界を横断する間、修理中の発電機が黄色のオーラで表示される</li>","name":"イレブンのソーダ","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"デモゴルゴンを再活性化する生のゴム状の肺。<li>裏側の世界を横断する間の殺人鬼の移動速度が<b>かなり上昇する</b></li><li>使用できるポータルの数が<b>2</b>減少する</li>","name":"鹿の肺","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"トラブルを引き起こすのに使用されたライター。<li>ポータルの影響下にある生存者は<b>目眩まし</b>のステータス効果を受ける。ポータルから離れたあとも、この効果は<b>60秒間</b>持続する</li>","name":"真鍮のライター","flavor":"「強力な電磁場を発生させるということは、裏側の世界と接触したにちがいない」 - ホーキンス国立研究所","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"裏側の世界の真っ赤な毒キノコ。<li>ポータルから出現した際に、デモゴルゴンに適用されていた<b>探知不可の効果</b>の持続時間を<b>そこそこ延長する。</li>","name":"ヴァーミリオン・ウェブキャップ","flavor":"「この標本で実験を続けているが、今のところ結果は一致しない。」 - ホーキンス国立研究所","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"次元間トンネルへの入り口を強化する粘着性で可燃性の樹液。<li>生存者がポータルを閉鎖するのに要する時間を<b>中度に延長</b>する。</li>","name":"裏側の世界の樹脂","flavor":"「かつて門として使われていた木の樹皮から採取したサンプル。これまでのところ、その効果に関する私たちの結論は定まっていない」-ホーキンス国立研究所","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"大きな温かい卵におぞましいクモの巣をかけたもの。<li>裏側の世界での特殊能力回復速度を<b>かなり上昇</b>させる。</li>","name":"未知の卵","flavor":"「裏側の世界で大きな卵が発見された。だが、適切な検査のための研究所への輸送に耐えたサンプルはなかった」 -ホーキンス国立研究所","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"錆びついた金属製のホイッスル。かつてホーキンス公共プールを支配していた。<li>殺人鬼の本能による発動済みポータル付近の生存者の位置表示が、<b>深淵のいざない</b>のチャージ不要で実現する</li>","name":"ライフガードのホイッスル","flavor":"「強力な電磁場を発生させるということは、裏側の世界と接触したにちがいない」 - ホーキンス国立研究所","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"裏側の世界の樹皮で成長するサイケデリックな苔。<li>裏側の世界を横断する際、デモゴルゴンは狙ったポータルへと静かに出現するが、出現速度は低下する</li><li>ポータルから出現したデモゴルゴンに適用される<b>探知不可</b>の効果持続時間が<b>とてつもなく増加する</b></li>","name":"赤い苔","flavor":"「葉を摂取すると運動能力が高まり、多幸感を引き起こす」 - ホーキンス国立研究所","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"裏側の世界の岩の上で、ホコリのように成長する地衣類。<li>裏側の世界を横断している間と、ポータルから出現した後<b>3秒間</b>、全ての生存者の<b>オーラが視える</b></li>","name":"ふけ状の地衣類","flavor":"「少量の服用で重度の幻覚を引き起こすことがある」 - ホーキンス国立研究所","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"自分の目標が純粋で公正であると考える崋山は、行く道を踏み外させようとする悪を避けるためにお守りを持ち歩いた。<li>血の球の吸収速度が<b>少し上昇する</b>。</li>","name":"厄除けのお守り","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"ロープがもっと強かったら、崋山を拘束することができたであろう。しかし、そうではなかったため崋山は囚われの身から逃がれ、その相手を虐殺した。<li>血の球のオーラを検知できる距離が<b>少し上昇する</b>。</li>","name":"朽ちかけたロープ","flavor":"「死神は素晴らしい集中力の持ち主だが、それでも瞬きはする。」- 練次郎の教え 拾肆ノ伍","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"崋山の結婚式で使われた盃。夜が終わる前にひびが入ってしまった。<li><i>血の怒り</i>を発動するチャージ速度を<b>少し上昇する</b>。</li><li><i>血の怒り</i>の解除時間を<b>少し減少する</b>。</li>","name":"ひびの入った盃","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"崋山の冬の百遍路中に剥がれたもの。献身的な巡礼にもかかわらず、彰人の脚は治らなかった。<li>血の球を吸収中の移動速度が<b>少し上昇する</b>。</li>","name":"黒ずんだ足爪","flavor":"「父親が子のために犠牲を払わなければ、何をもって父親と言えるのだろうか。」- 練次郎の教え 拾壱ノ拾弐","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"鬼と比べられた崋山が自分の兜から引きちぎった角付きの前立物。<li><i>山岡の怒り<i>のパッシブリチャージ速度が<b>少し上昇する</b></li>","name":"磨かれた前立物","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"山岡邸に一時期飾られていた水墨画。ネズミに食べられたライオンの話が描かれている。<li><i>血の怒り</i>を発動するチャージ速度を<b>少し上昇する</b>。</li><li><i>血の怒り</i>の解除時間を<b>少し減少する</b>。</li><li>生存者をダウンさせた時の<i>血の怒り</i>の消費ペナルティが<b>そこそこ減少する</b>。</li>","name":"水墨画のライオン","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"練次郎のものであった采配。崋山が去ったときに盗んでいった。<li><i>血の怒り</i>の発動時間を<b>少し上昇する</b>。</li>","name":"欠けた采配","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"彰人の練習用の刀。怪我をした後は、ほとんど使われることがなかった。<li>血の球のオーラを検知できる距離が<b>そこそこ上昇する</b>。</li>","name":"子どもの木刀","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"ニセ貴族の崋山と呼ばれる男の子の血。崋山はしばしば父親の目から喧嘩の証拠を隠した。そして隠れてサッシュに付着した血を楽しむのだった。<li>血の球吸収中の移動速度が<b>そこそこ上昇する</b>。</li>","name":"血塗れのサッシュ","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"山岡家の幟。崋山はこれに圧倒的な誇りを感じたらしい。<li><i>血の怒り</i>の発動時間を<b>そこそこ上昇する</b>。</li>","name":"山岡家の幟","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"若い崋山が節分を祝うために購入したお面。そのゾッとするような牙をむいた口元が悪夢に出てくるようになった。<li>生存者が落とす血の球の量が<b>少し上昇する</b>。</li>","name":"木製の鬼の面","flavor":"「人間が鬼に親しみを持つのは偶然ではない。」- 練次郎の教え 参ノ捌","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"先祖代々受け継がれた刀の一部。崋山の怒りに触れて壊された。<li><i>山岡の怒り</i>のパッシブリチャージ速度が<b>そこそこ上昇する</b>。</li>","name":"折れた脇差","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"崋山の高潔さに疑問を抱いた侍のちょんまげ。毛根には血まみれの薄い頭皮がついている。<li><i>血の怒り</i>発動中に<i>鬼の猛進</i>を発動するチャージ速度を<b>かなり上昇する</b>。</li>","name":"頭皮のついたちょんまげ","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"崋山が生まれたときに授けられたお守り。家族を守る力があると言われている。<li><i>血の怒り</i>発動中の<i>鬼の猛進</i>による移動速度が<b>そこそこ上昇する</b>。</li>","name":"家内安全のお守り","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"崋山が侍を浄化する巡礼に旅立った際に、崋山の母が涙を拭った手ぬぐい。<li>生存者をダウンさせた時の<i>血の怒り</i>の消費ペナルティが<b>かなり減少する</b>。</li>","name":"涙が染み込んだ手ぬぐい","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"山岡練次郎を運んだ船の一部。あらゆる障害を乗り越えて、伝説の侍は生き延びたようだ。<li>生存者が落とす血の球の量が<b>そこそこ上昇する</b>。</li>","name":"裂けた船体","flavor":"「策略を練るのならば、誰にも話さないことだ。」- 練次郎の教え 漆ノ玖","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"珍しいものを扱う行商が売っていた牙。力と高貴さを象徴している。<li><i>血の怒り</i>の発動時間を<b>かなり上昇する</b>。</li>","name":"ライオンの牙","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"崋山の息子である彰人が木から落ちた後に使用した松葉づえ。友だちとその家族は、彰人の怪我のせいで罰せられた。<li><i>血の怒り</i>発動中の<i>鬼の猛進</i>による移動速度が<b>かなり上昇する</b>。</li>","name":"彰人の松葉づえ","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"息子の一撃を受けた後に練次郎が胸に掲げた籠手。<li>すべての生存者に血の球が見えるようになる。</li><li>血の球に接触した生存者は、血の球を吸収するとともに、殺人鬼からは<b>2秒間</b>、オーラが見えるようになる</li>。<li>この効果は血の球を吸収するたびに重複する</li>。","name":"練次郎の血塗れの籠手","flavor":"「何もかもを失っても、高潔であれ。」- 練次郎の教え 拾肆ノ拾弐","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"持っていることで山岡家の一部であることを意味する家紋。<br><li><i>血の怒り</i>が発動中、<i>鬼の一撃</i>を外すと、<b>半径12メートル</b>内の生存者全員が叫び声をあげて、その現在置を明かす。</li>","name":"玉虫色の家紋","flavor":"「己の心を守れるように、己を知ることだ。」- 練次郎の教え 拾壱ノ弐","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"汚れた黄麻布。銃撃戦の真っ最中にスピアガンを拭くなら、唾で必死に磨けばいい。<li><b>銛が外れた後のクールダウン時間が少し短くなる</b></li>","name":"唾磨きのボロ布 ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"巡回セールスマンから買ったオイルとエキスのチンキ。あらゆる症状を治すらしい。<li>スピアガンの巻き取り速度が<b>少し上昇する</b></li>","name":"インチキ薬 ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"当初カレブがスピアガンのプロトタイプに使用した壊れやすい鉄の鎖。失敗作だが思い入れがある。<li><i>銛命中</i>スコアが発生すると、ブラッドポイントを<b>50%</b>追加で獲得する</li><li>生存者の銛から逃れる難易度が下がる</li>","name":"ボロボロの鎖","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"カレブが特殊兵器のために改造した古い弾帯。アリゾナ準州の砂漠の細かい赤土が今でも付着している。<li><b>スピアガンのリロード速度が少し上昇する</b></li>","name":"改造弾帯 ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"カレブが病的な好奇心にかられてスピアガンの前部に固定した線路の犬釘。先端の切れが鈍く、簡単には貫通しない。<li>犬釘が刺さった生存者を攻撃すると<b>重傷</b>のステータス効果を付与する</li>","name":"錆びた犬釘 ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"何の変哲もなさそうな植物だが、その油を銛に塗ると傷の周辺に耐え難いほどの水疱ができることをカレブは発見した。<li><b>深手</b>のステータス効果を受けている生存者の治癒時間が<b>少し増加する</b></li>","name":"漆の葉","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"アリゾナ準州の保安官の遺体から奪われた銀バッジ。ヘルシャーギャングの賞金稼ぎを妨害して殺された。<li>スピアガンの照準をのぞき込む間の脅威範囲が<b>少し減少する</b></li><li>スピアガンの照準をのぞき込む間の移動速度が<b>少し低下する</b></li><span class=\\"FlavorText\\">「葬式の手配をしておけ。昼前には首吊りだ。」- カレブ・クイン</span>","name":"保安官の記章 ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"逆上した銃撃戦でカレブの顎を突き破った弾丸。燃えるような復讐の念が蘇る。<li>スピアガンの照準をのぞき込む間の移動速度が<b>少し上昇する</b></li><span class=\\"FlavorText\\">「俺を不当に扱ったその瞬間に、お前は死の淵に立っていた。」 - カレブ・クイン</span>","name":"顎粉砕弾 ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"切り取られた缶入りの甘い煙草。グレンベールのはらわたを抜かれた死体から盗まれたもの。神経系を刺激する。<li>生存者がスピアガンから抜け出したときの怯む時間が<b>そこそこ減少する</b></li>","name":"噛み煙草","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"耳障りな鈍い鍵の金属音がカレブに激高の記憶を呼び起こさせる。<li>スピアガンのリロード速度が<b>そこそこ上昇する</b></li>","name":"看守の鍵 ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"メイソン・ケリーの指名手配ポスターの黄ばんだ残骸。カレブは狩りに集中していた。<li>スピアガンの照準をのぞき込む間の移動速度が<b>そこそこ上昇する</b></li><span class=\\"FlavorText\\">「お前は苛烈な報いを受けることになる。お袋の墓に誓って言うよ。」 - カレブ・クイン</span>","name":"指名手配ポスター ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"機械の摩擦を減らすためのオイルを少量入れた缶。スピアガンの初期モデルは引っかかることで有名で、オイルは必需品だった。<li><b>槍が外れた後のクールダウン時間がそこそこ短くなる</b></li>","name":"ブリキのオイル缶 ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"賞金首に2回も逃げられたことに怒り、カレブは棘のある枝を銛に巻きつけて放った。<li>スピアガンから逃れた生存者は<b>重傷</b>のステータス効果に苦しむ</li>","name":"ハニーローカストの棘 ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"ヘンリー・ベイショアから引き抜かれた金歯。命乞いの叫び声もむなしく、数時間後にはとどめを刺された。<li>スピアガンの巻き取り速度が<b>そこそこ上昇する</b></li><span class=\\"FlavorText\\">「立場をわきまえろ。身の程を知れってことだよ。」- ヘンリー・ベイショア</span>","name":"ベイショアの金歯","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"鉄の球が付いた太くて重い鎖。かつてカレブの足首に掛けられていたが、今では銛につなぐために使われている。<li>生存者が銛から逃れるために必要なチャージが<b>かなり増加する</b></li><span class=\\"FlavorText\\">「刑務所の構外で作業する受刑者には18ポンドもの鉄球を装着することとする。」 - ヘルシャー刑務所看守の手引</span>","name":"刑務所の足かせ","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"温かい安らぎを与える瓶入りの飲み物。カレブの怒りは鎮まり、足取りはゆっくりとなった。<li>スピアガンの照準をのぞき込む時の脅威範囲が<b>そこそこ縮小する</b></li><li>スピアガンの照準をのぞき込む間の移動速度が<b>そこそこ低下する</b></li><span class=\\"FlavorText\\">「厳しい辺境にも、やさしい口当たり」- ゴールドクリークの広告（1876年）</span>","name":"ゴールドクリークのウィスキー","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"カレブの上司が持っていた高級葉巻。腹に犬釘が刺さって嘆いているなか上着から引き抜いた。<li>生存者が銛から抜け出したときの怯む時間が<b>かなり減少する</b></li><span class=\\"FlavorText\\">「このたわけめ、そいつをこちらに向けたらただじゃおかんぞ。」- ヘンリー・ベイショア</span>","name":"ベイショアの葉巻","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"返しが裏打ちされた、柔軟なアメリカ製の鋼鉄。シンプルだが、カレブはこれを銛に巻きつければ殺傷能力が上がることに気がついた。<li><b>深手</b>のステータス効果を受けている生存者の治癒時間が<b>そこそこ増加する</b></li></li><span class=\\"FlavorText\\">「さしあたって恐れる対象は何もない。それまでは俺を恐れておけ。」 - カレブ・クイン</span>","name":"鉄条","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"霧そのものから作られたガラス状の硬貨。賞金稼ぎが提供したサービスに対する支払い金。<li><b>15メートル</b>以上離れた位置で銛に刺さった生存者は、銛が抜けるまで<b>無防備</b>のステータス効果に苦しむ</li><span class=\\"FlavorText\\">「死物狂いで結んだ取引の対価は、狂気のなかで支払われるのだ。」</span>","name":"玉虫色のコイン","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"ヘルシャーギャングの焼き印。伝説とは裏腹に実際には新人に使われたことはなく、代わりに血の気の多い賞金首に押すために使われていた。<li>生存者に銛が刺さっている間はずっと、脅威範囲内にいる生存者全員のオーラが視えるようになる。</li><span class=\\"FlavorText\\">「ヘルシャーギャングは正義の追求者か、無法者か？」 - グレンベール新聞トップ記事</span>","name":"ヘルシャーの鉄","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"冷蔵庫で見つかった指輪。不快なむくみ顔が彫り込まれている。<li><b>裁きの儀式</b>がマップ上に残存する持続時間が<b>少し増加する</b></li>","name":"鉛の指輪 ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"ウッドサイドアパートのベッドで見つかった蝶。触れると壊れてしまいそうなほど脆い。<li><b>裁きの儀式</b>のチャージ速度が<b>少し上昇する</b></li>","name":"死んだ蝶 ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"ブルックヘイヴン病院の地下で見つかった指輪。蜘蛛の絵が彫り込まれている。<li><b>裁きの儀式</b>が発動する合計時間が<b>少し増加する</b></li>","name":"銅の指輪 ","flavor":"「地下の地下に閉じ込められました。とても狭く、とても暗く、とても怖かったです。大切な指輪を落としてしまいました。でももうあそこには入りたくないです。」","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"金属の骨組に人を拘束するために使われていたナイロン製のストラップ。黒色で血が染み込んでもわかりづらい。<li><b>地獄の罰</b>の範囲が<b>少し拡大する</b></li>","name":"黒のストラップ ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"ろうで作られた人形。裁きを受ける直前の囚人の手によって作られた。<li><b>地獄の罰</b>の範囲が<b>そこそこ拡大する</b></li>","name":"ろう人形 ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"錆びた槍の先。鋭い刃は最後の被害者の血痕で覆われている。<li><b>裁きの儀式</b>が発動する合計時間が<b>そこそこ伸びる</b></li>","name":"槍の穂先 ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"ピンク色ヒョウ柄の布切れ。何に使われていたかは不明。<li><b>裁きの儀式</b>によって引き起こされた<i>殺人鬼の本能</i>の持続時間が<b>少し増加する</b></li>","name":"ヒョウ柄の布  ","flavor":"「私の正体はどうだっていい。あなたのために来たのよ、ジェイムス。」- マリア","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"サイレントヒルで休暇を楽しむカップルのビデオテープ。思い入れのある物のはずだが、レイクビューホテルに置き去りにされていた。<li><b>裁きの儀式</b>のチャージ速度が<b>そこそこ上昇する</b></li>","name":"忘れられたビデオテープ ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"童話「シンデレラ」の人形付きオルゴール。さまざまな行き先のシールが貼られたスーツケースの中で見つかった。<li><b>裁きの儀式</b>がマップ上に残存する持続時間が<b>そこそこ増加する</b></li>","name":"灰被り姫のオルゴール ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"赤い頭巾をかぶった2人の人物の写真。神に捧げる赤と白の宴という題名がついている。<li><b>裁きの儀式</b>のチャージ速度が<b>かなり上昇する</b></li>","name":"ヴァルティエル派の写真 ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"アステカ族が彫り込まれた金属製の板。<li><b>裁きの儀式</b>が発動する合計時間が<b></b>かなり増加する</li>","name":"虐げる者の銘板 ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"堂々とした男の絵。鋼鉄のピラミッド型の物体を頭にかぶり、背景には檻に閉じ込められた被害者が描かれている。<li><b>裁きの儀式</b>によって引き起こされた<i>殺人鬼の本能</i>の持続時間が<b>そこそこ増加する</b></li>","name":"霧の日、裁きの跡 ","flavor":"「奴だ…」","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"灰色の滑らかなマネキンの片足。無残にも脚から切り離されている。<li><b>裁きの儀式</b>がマップ上に残存する持続時間が<b>かなり増加する</b></li>","name":"マネキンの足 ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"レイクビューホテルの略図。この罪なる建物には赤い炎が描かれている。<li>地獄の罰の距離が<b>かなり伸びる</b></li>","name":"燃える人の絵","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"ひときわ赤い新鮮なタマゴ。ウズラの卵ほどの大きさ。<li><b>裁きの儀式</b>によって引き起こされた<i>殺人鬼の本能</i>の持続時間が<b>かなり増加する</b></li>","name":"緋色の卵 ","flavor":"「泣きそうになったのよ。死にそうになったんだから！私のこと…どうでもいいと思ってるんでしょう？」- マリア","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"赤みのかかったオレンジ色をした古そうなタマゴ。ウズラの卵ほどの大きさ。<li><b>裁きの儀式</b>の効果を受けた生存者は<b>60秒間</b>、<b>目眩まし</b>のステータス効果に苦しむ。</li>","name":"錆色の卵 ","flavor":"「ジェイムス…あなたのおかげで幸せだった。」- メアリー","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"サイレントヒルやその近辺の伝承や歴史について書かれている本。<li><b>裁きの儀式</b>の効果を受けた生存者は<b>15秒間</b>、<b>忘却</b>のステータス効果に苦しむ</li><span class=\\"FlavorText\\">「ここは『静かなる精霊眠る場所』と呼ばれていた。」</span>","name":"失われた記憶の書 ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"古の神に関する本。著者は不明。<li>負傷した生存者が<i>煩悶</i>の影響を受けると、<b>出血</b>のステータス効果に苦しむ</li>","name":"赤の祭祀の書 ","flavor":"「語れ。我は真紅のものである。嘘と霧は、彼らではなく、また我である。」","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"黒曜石で作られた古めかしい杯。<li><b>エクセキューショナー</b>は<b>裁きの儀式</b>の道の上に立つと、<b>探知不可</b>のステータス効果を得る</li>","name":"黒曜石の酒杯 ","flavor":"「眠りから目覚めさせるのを許して欲しい。でもあなたなしでは前に進めない。」 - ジェイムス・サンダーランド","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"奇妙なデザインが刻み込まれたお守り。エンティティの影響によって変化したと見られる。<li>生存者を<b>贖罪の檻</b>に送り込むと、<i>煩悶</i>に苦しむ生存者のオーラが<b>6秒間</b>視えるようになる</li>","name":"玉虫色のメタトロンの紋章 ","flavor":"「この四角い魔法の物体は『バイルン7世のクレスト』またの名を『メタトロンの紋章』と呼ばれ、強力な保護特性と魔よけ効果を持つ。」","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"完全に効果のない薬…かどうかはわからない。<br><br><li>突進中の移動速度が<b>そこそこ低下する</b>。</li><li>突進のスコア発生時にブラッドポイントを<b>100%</b>追加取得する</li>","name":"錠剤タイプの偽薬 ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"タルボットの化学に対する興味を引き出した有毒植物。奥底に秘めた思い出をよみがえらせる。<br><br><li>突進の後の回復速度が<b>少し上昇する</b></li> \\n","name":"ジギタリス ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"初期のサンプル。期待されていた結果を達成することはなかったが、それでも驚くような効果を証明した。<br><br><li>衝突の後<b>16メートル内にいる</b>最も近い生存者に直面する。</li>","name":"化合物7 ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"年老いて視力が衰えたにもかかわらず、タルボットがほとんど使わなかった単眼鏡。<br><br><li>激突の目標位置が表示される</li>","name":"欠けた単眼鏡","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"タルボットの手記の一部。価値のある情報が記載されている。<br><br><li>利用可能な突進トークンが<b>1つ</b>減少する</li><li>突進トークンの再生速度が<b>そこそこ上昇する</b></li> ","name":"ボロボロの手記 ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"乾燥させたパチュラの花弁を細塵状にすりつぶしたもの。<br><br><li>衝突時間が<b>そこそこ上昇する</b></li>","name":"パチュラの粉 ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"プレイグの胆汁のサンプル。精製され、化学薬品の混合物で処理されている。<br><br><li>突進中のターン速度が<b>少し</b><b>上昇する</b></li> ","name":"プレイグの胆汁","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"臓器の潰瘍から切り取った棘。かなり大きく、軽度の毒素を分泌する。<br><br><li>突進後の回復速度が<b>そこそこ上昇する</b></li> ","name":"潰瘍の棘","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"血清を投与され一瞬生き返ったネズミ。攻撃的で制御不能になった。<br><br><li>連続するラッシュごとの突進の速度が<b>そこそこ上昇する</b></li> ","name":"破滅したネズミ ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"一瞬だけ霊界を通り抜けた、ごく普通の海塩。その過程で性質が変わった。<br><br><li>突進中のターン速度が<b>そこそこ上昇する</b></li> ","name":"本影の塩 ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"非常に貴重な新月の花束から取った、乾燥したバラの花で作られた混合物。<br><br><li>激突の持続時間が<b>かなり増加する</b></li> ","name":"バラの強壮剤 ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"人間の命を脅かす血清。それ以上の存在である者には、有益な効果をもたらす。<br><br><li>激突を発動すると、衝突位置の<b>8メートル</b>以内にいる生存者のオーラが<b>3秒間</b>視える</li>","name":"化合物21 ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"破滅の血清によりグロテスクな変異を遂げて死んだカラス.<br><br><li><b>連続するラッシュごとの突進の速度が</b> かなり上昇する。</li>\\n","name":"破滅したカラス ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"\\"不幸な被験者の副腎から抽出したホルモン。使用するとほとばしるエネルギーを得ることができるが、その後に疲労がやってくる。<br><br><li><b>突進中のターン速度が</b> かなり減少する。</li><li>トークンの再生率が<b> かなり増加する。</b></li><li>利用可能な突進トークンが<b>2つ</b><b>増加する。</b></li><li><b>突進中の視角が</b> かなり増加する。</li><br><br><span class=\\"\\"FlavorText\\"\\">\\\\「お願い、やめて…」\\"\\"</span>\\n\\"","name":"アドレナリンの小瓶 ","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"虚空から戻ってきたと言う男の日記。記載された情報には実用性がある。<br><br><li>突進中は<b>探知不可</b>のステータス効果を得る</li><br>","name":"ヴィゴの手記 ","flavor":"「忘れ去られた夢と終わりなき日常しかない荒れ地では、そこから抜け出す方法を知っている者が神である。」 ―タルボット・グライムズ","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"タルボットはこの石を使って、本人が研究であると主張する対象をアヘン窟の壁に刻んだ。<br><br><li>死の突進が生存者に命中するとエンティティを呼び出し、<b>6秒間</b>現在地から<b>12メートル</b>以内のパレットをブロックする</li><br>","name":"召喚の石 ","flavor":"「死は始まりに過ぎないのだ。」","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"最近死亡した生存者の松果腺から絞り出した化学物質。<br><br><li>突進中、修理または治療中の生存者の周囲<b>16メートル</b>以内に入った瞬間に、その生存者に対し<b>とてつもなく</b>難しいスキルチェックが発生する。突進1回で生存者1人につき1回のみ発動可。生存者の<b>16メートル</b>以内で開始した突進に対しては発動しない。</li><br>","name":"魂の化学物質 ","flavor":"「…は神経の律動活動に異常な変化をおよぼすと考えられる。」 ―未分類の謎めいた教科書","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"ロンドン医科大学を卒業した化学者に与えられる指輪。飽くなき野望を象徴する。<br><br><li>死の突進で生存者を攻撃すると即座にすべての突進トークンがリチャージされる。</li><br>","name":"錬金術師の指輪 ","flavor":"「その生徒は、無許可の科学実験を行う目的で墓を荒らしたという罪に問われている」 —教員によるタルボット・グライムズの処分（1838年）","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"霧そのものから作られたガラス状の研究室用ラベル。エンティティによるプレゼント。あるいは、かつて本人が他者にしていたような、ブライトにラベルをつける残酷ないたずら。<br><br><li>すべての突進トークンを使い切ると、最後に繰り出した死の突進を受けた生存者は瀕死状態になる。</li><br>","name":"玉虫色のブライト用ラベル","flavor":"「進化には劇的な変化が伴うものだ。」 ―タルボット・グライムズ","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"タルボットが最後から2番目に作った血清の試作品。タルボットの脱出には寄与しなかったが、強力な副作用があった。<br><br><li>激突の開始時、衝突位置の<b>16メートル</b>以内にいる生存者は<b>3秒間</b><b>妨害</b>のステータス効果に苦しむ</li><li>衝突パレットか破壊可能な壁で破壊され<b>1.5秒間</b>ブライトを気絶させる</li><br>","name":"化合物33 ","flavor":"「時間がない。これで決めなければ…」 ―タルボット・グライムズ","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"数センチしかないおもちゃのミニ剣。それを持つと、ヴィクトルの中で暴力への強い興味が湧き上がった。<br><br><li>飛び付きのチャージ時間が<b>少し減少する</b></li>","name":"おもちゃの剣","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"ヴィクトルの死を嘆き悲しむシャルロットは、ヴィクトルの腐った手から剥がれてきた爪を形見にした。<br><br><li>ヴィクトルがシャルロットから離れるまでの時間が<b>そこそこ短縮される</b></li>","name":"爪","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"酸っぱくなってしまった牛乳が入った金属製のボトル。どれほどうるさいヴィクトルでも、食事の時にこれがあると大人しくなった。<br><br><li>ヴィクトルの叫び声の範囲が<b>少し拡大する</b></li>","name":"酸っぱくなった牛乳","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"幼いヴィクトルの目に留まった木製の置物。母親が盗んでくれるまで金切り声で喚いたせいで、隠れているのがバレそうだった。<br><br><li>飛び付きのターゲットの位置が表示される</li>","name":"猫の置物","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"ツインズの母親が持っていた手袋。非常時にはヴィクトルの声が漏れないよう、これで口を押さえていた。<br><br><li>ヴィクトルの叫び声の範囲が<b>そこそこ拡大する</b></li>","name":"マドレーヌの手袋","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"枝分かれしたキャンドルスティック。ヴィクトルがこれで転倒したおかげで追っ手が燃えた、執念の象徴。<br><br><li>生存者がヴィクトルを潰すのに必要な時間が<b>少し増加する</b></li>","name":"儀式用のキャンドルスティック","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"腹をすかせたデエ一家が食べた猫の眼。ヴィクトルが母親に内緒でおもちゃにして遊んでいた。<br><br><li>飛び付きのチャージが満タンになるとヴィクトルの叫び声が止まる</li>","name":"猫の眼","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"シャルロットを追っていた男の1人がかぶっていた頭巾。男は間もなく餌食になった。<br><br><li>シャルロットが休止状態から復活するまでの時間が<b>少し短縮される</b></li>","name":"血塗れの黒頭巾","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"ヴィクトルがずっと前に失った2本の歯。異常なほど鋭い。<br><br><li>ヴィクトルを払い除けた生存者は目眩ましのステータス効果に<b>15 秒間</b>苦しむ</li>","name":"乳歯","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"作りが粗悪な乳児用のおもちゃ。母親がそれを盗んでくれるまでヴィクトルは泣き叫んだ。子供に持たせるには全体的に重すぎる。<br><br><li>ヴィクトルを払い除けた生存者は<b>衰弱</b>のステータス効果に<b>20 秒間</b>苦しむ</li> ","name":"重いガラガラ","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"マドレーヌが町の市場で盗んだ無発酵の硬いパン。量は少なかったが、大抵の食事に比べマシだった。<br><br><li>飛び付きのクールダウンが<b>少し短縮される</b></li>","name":"硬くなったパン","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"町の下水道を逃亡中にデエ姉弟がまみれた汚泥。<br><br><li>生存者がヴィクトルを払い除けるのに要する時間が<b>少し増加する</b></li>","name":"下水道のヘドロ","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"錆びた針","name":"錆びた針","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"マドレーヌが死ぬ少し前に着ていた布きれ。ツインズが形見として持っていた。<br><br><li>ヴィクトルの速度が<b>少し上昇する</b></li><br>","name":"マドレーヌのスカーフ","flavor":"「…は大義のため、そして悪の根絶における尽力の記録となるだろう。」 — マドレーヌ・デエの死に関する調査","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"ヴィクトルが怖い時にしがみついていたおもちゃの兵士。それには、シャルロットの中に嫉妬が湧き上がらせる何かがあった。<br><br><li>待機中のヴィクトルを潰した生存者のオーラが<b>6秒間</b>視えるようになる</li><br>","name":"ヴィクトルの兵士","flavor":"「ワ・ワ・ワル…イヤツラ…コロシて…」 — ヴィクトル・デエ","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"ツインズが持っていた木のコマ。自分だけのコマを欲しがったヴィクトルは、がっしりとしがみついて叫び声を上げれば欲しいものが手に入るということを覚えた。<br><br><li>ヴィクトルに飛び付かれた生存者は持っているアイテムを落とす。</li><br>","name":"コマ","flavor":"「シーッ…静かにして、お願い…わかったわ、あなたにあげる。」 — シャルロット・デエ","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"略奪した野菜で作ったシチュー。苔や樹皮が混ざり合ってまろやかさが出ているような錯覚を覚える。<br><br><li>ヴィクトルの速度が<b>そこそこ上昇する</b></li><br>","name":"森のシチュー","flavor":"「ほら…食べて。食べたらきっと良くなるわ。」 — マドレーヌ・デエ","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"マドレーヌが過去の人生から逃げ出した時に持ってきた、数少ない贅沢品のひとつ。爽やかで、怒りを鎮めてくれるような香り。<br><br><li>ヴィクトルの奇声から範囲内の生存者は<b>忘却</b>のステータス効果を受ける</li><br>","name":"微量の香水","flavor":"「男の親切心につけ込む魔女の偽りには、用心しなければならない。」 — 魔女と悪魔の歴史（1602年）","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"5歳だったシャルロットが口の中に入れていた粗悪な布きれ。口に入れて、魔女狩りのハンターが近くにいる時に叫ばないようにしていた。<br><br><li>待機状態から戻ったシャルロットが<b>20秒間</b><b>探知不可</b>の状態になる。</li><br>","name":"沈黙の布","flavor":"「お母さん、私もうこの遊びイヤなの…」 — シャルロット・デエ","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"霧そのものから作られたガラス状のペンダント。マドレーヌ・デエの肖像画が描かれているが、その描写にはどこか不吉なものがある。<br><br><li>待機中のヴィクトルを潰した生存者は<b>30秒間</b><b>無防備</b>のステータス効果に苦しむ</li><br>","name":"玉虫色のペンダント","flavor":"「私の愛しい子供たち。つながっているのは呪いなんかじゃないわ。活かすことのできる長所なのよ。」 — マドレーヌ・デエ","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"隠れポケットがたくさんある小袋。手品師になりたい人と、隠すものがある人が使う。<br><li>所持できるナイフの上限数が<b>10本</b><b>増加する</b></li><li>儀式開始時に所持するナイフ数が<b>10本</b>増える</li>","name":"トリック用ポーチ","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"血の錆びがついたナイフ。ジウンが殺人をはじめた頃から使っているため、擦り切れている。彼にとって大事な思い出の品。<br><li><b>名演</b>のスコアが発生するとブラッドポイントを<b>100%</b>追加取得する</li><li>各生存者の裂傷メーターが<b>そこそこ上昇する</b></li>","name":"思い出のナイフ","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"ジウンが曲に使わなかったコード。とは言え、間違いなくキャッチーなサウンドだ。<br><li>ナイフを投げている間の移動速度が<b>少し上昇する</b></li>","name":"死の声部のコード","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"NO SPINメンバー4人が亡くなった火事で焼けたスタジオのケーブル。彼らの死がトリックスターをもたらした。<br><li>メインイベントの持続時間が<b>少し増加する</b></li>","name":"烈火のケーブル","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"昌原の質素なバーで誕生したカクテル。ジウンのお気に入りになった。<br><li>メインイベントの持続時間が<b>そこそこ増加する</b></li>","name":"テキーラ・ムーンロック","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"有名になる前にジウンが制作したアングラのシングル。NO SPINの大ファンだけがこの隠れた宝石を集めていた。<br><li>裂傷メーターの上限減少が開始するまでの時間が<b>少し増加する</b></li>","name":"シングル曲『狙いうち』","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"ジウンが手に入れた初めての投げナイフ。父親はこのナイフを彼に買い与え、一家が経営するレストランの常連にショーを披露するよう期待した。<br><li>投げるナイフがなくなった時、各生存者の裂傷メーターの上限減少時間が<b>少し長くなる</b></li>","name":"幸運のナイフ","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"トリックスターという名の有名アーティストが書いたサイン。何百回と書いたために手首が痛むが、それほど求められているということを知るのは爽快だった。<br><li>ナイフ投げの速度が最初から<b>少し上昇する</b></li>","name":"ジウンのサイン","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"『心ひとつ捕らわれて』のミュージックビデオでジウンが履いていたシューズ。スムーズで優雅な動きのダンスが叶う。<br><li>ナイフ投げの間、移動速度が<b>そこそこ増加する</b></li>","name":"檻の心のシューズ","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"『アイル・ビー・ウェイティング・フォー・ユー』の演奏中にジウンが身に着けていた懐中時計。小道具なので機能しない。この先も。<br><li>投げるナイフがなくなった時、各生存者の裂傷メーターの上限減少時間が<b>かなり長くなる</b></li>","name":"『ウェイティング・フォー・ユー』の時計","flavor":"「いかないでくれ<br>終わりだなんて言わないで<br>逃がれることなんてできない<br>君を待ち続けるから」<br>— NO SPIN『アイル・ビー・ウェイティング・フォー・ユー』","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"『引き裂き魔』のミュージックビデオ撮影時にジウンが使っていた手首固定器具。意図したわけではなかったが、多くの医療用サポーターよりも手首が安定するデザインだった。<br><li>裂傷メーターの上限減少が開始するまでの時間が<b>そこそこ増加する</b></li>","name":"引き裂き魔のサポーター","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"被害者の金切り声を収録した音声ファイル。ジウンがこの音源を取り入れた曲は、それなりにヒットした。<br><li>各生存者の裂傷メーターが<b>そこそこ減少する</b></li>","name":"美しい旋律の殺人","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"NO SPINを宣伝する限定版の缶入り炭酸飲料。砂糖とカフェインの含有量は高め。<br><li>ナイフ投げの速度が最初から<b>そこそこ上昇する</b></li>","name":"フィズスピンソーダ","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"切り裂いた被害者の首にジウンが巻いたボア。中にはポケットがたくさん隠されている。<br><li>所持できるナイフの上限数が<b>15本</b><b>増加する</b></li><li>儀式開始時に所持するナイフ数が<b>15本</b>増える</li>","name":"血まみれのボア","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"自慢のナイフ。想像力に欠けた人間には欠陥品にしか見えないが、幼いジウンはトリックを披露して観客の目を奪った。<br><li>ナイフがどこか生存者以外に当たると2回跳ね返る</li><li>跳ね返ったナイフが命中するとブラッドポイントを追加で取得する。</li>","name":"トリック用の刃物","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"トリックスターのデビューアルバム。粗暴で物騒な音色は批評家から称賛を受けたものの、ファンの間では賛否両論だった。<br><li>ナイフは生存者以外に命中すると砕け散り、付近の生存者に<b>50%の裂傷</b>を与える。</li>","name":"エッジの効いた復活アルバム","flavor":"「君のささやき声に<br>ぬくもりを感じて<br>息をするたび焦がす想いが<br>息を止めてしまうまで」<br>— トリックスター『ぬくもりのささやき」","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"ジウンのストーカーをするという過ちを犯してしまった過激ファンの、えぐられた眼球に入れられたカフスボタン。血をこすり落とせば素晴らしい輝きを放ってくれる。<br><li>生存者の裂傷メーターがあと1回のナイフ命中で満タンになる時、その生存者のオーラが<b>6秒間</b>視えるようになる</li>","name":"ダイヤのカフスボタン","flavor":"「シーッ…もう自分の血を見ずに済むんだから」 —ハク・ジウン","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"ジウンの加入後はじめてNO SPINがリリースしたシングル。韓国の国内チャート1位をオールキル（総なめ）にした。<br><li>ナイフが生存者を貫通する。</li><li>同じナイフが次に命中した生存者は<b>50%の裂傷</b>を受ける</li>","name":"シングル『カット・スルー・ユー』","flavor":"「愛が止まらない<br>君の心は張り裂けそう<br>どこにいても君を<br>バラバラにしちゃいたい<br>— NO SPIN『カット・スルー・ユー』","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"霧から作られたガラス状の写真。ニヤリと笑うジウンの目がホログラフ的に光っている。<br><li>生存者の裂傷メーターがあと1回のナイフ命中で満タンになる時、その生存者は<b>無防備</b>のステータス効果に苦しむ</li>","name":"玉虫色のフォトカード","flavor":"「ほら、僕の名前を叫んでごらん。苦痛が呼び覚ます声を聴かせてくれよ…」 —ハク・ジウン","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"ジウンがレコード用に被害者から録音した最終音源のコレクション。感情がそのまま伝わる恐ろしい音声だ。<br><li>最低<b>50%</b>から、裂傷の度合が標的の近さによって決まる。</li><li>ナイフが命中するたびに、裂傷が最大<b>200%</b>まで増加する</li><li>ナイフが外れると、裂傷は初期値にリセットされる</li>","name":"断末魔の編集音源","flavor":"「お願い、やめて…痛くしないで…もう無理…うう…」 —正体不明の声","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"腕輪型の電子装置。アンブレラ社を訪れた来客用だが、追跡装置の機能も兼ね備えている。<li>ゾンビの探知範囲が<b>そこそこ広がる</b></li>","name":"訪問者用リストバンド","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"様々な経歴を持つS.T.A.R.S.隊員たちの 戦闘技術を基に書面化された体術教本。 著者・監修はクリス・レッドフィールド。<li>生存者を攻撃した後、ゾンビのオーラが<b>6秒間</b>黄色に変わる</li>","name":"S.T.A.R.S.式体術教本","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"ラクーンシティを襲った混乱のさなかに損傷した医療機器。<li>生存者がワクチンを注入する時間が<b>そこそこ増加する</b></li><li>生存者のワクチン使用時、殺人鬼の本能の効果時間が<b>少し増加する</b></li>","name":"壊れた注射器","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"R.P.D.の署長、ブライアン・アイアンズの小腸。ゾンビにはごちそうに見える。<li>ゾンビの移動速度が<b>少し上昇する</b></li>","name":"ブライアンのはらわた","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"内臓が飛び出たゾンビの心臓。確実にウイルスにまみれているため、危険廃棄物として扱われる。<li>触手打撃でゾンビを撃破した時の変異度が<b>そこそこ上昇する</b></li><br>","name":"ゾンビの心臓","flavor":"「こいつらに言葉は通じない」 —レオン・S・ケネディ","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"爆死したミハイルは体と呼べるものは皆無に等しかったが、左の眼球だけが形をとどめていた。ゾンビのおいしいデザートとなって残っている。<li>ゾンビの移動速度が<b>そこそこ上昇する</b> </li>","name":"ミハイルの眼","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"ラクーン市警警官の汚染された血液。<li>触手打撃で生存者を攻撃した時の変異度が<b>そこそこ増加する</b></li><br>","name":"マービンの血","flavor":"「隙を見せると生きたまま食われるぞ。それだけは頭に入れておけ」 —マービン・ブラナー","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"感覚を高めるホルモン。体を戦うモードにする。<li>生存者のワクチン使用時、殺人鬼の本能の効果時間が<b>かなり増加する</b></li>","name":"アドレナリン入り注射器","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"腕輪型の電子装置。アンブレラ社の施設管理担当が安全な区域を出入りするために与えられた許可証だが、追跡装置の機能も兼ね備えている。<li>ゾンビの探知範囲が<b>かなり広がる</b></li>","name":"管理者用リストバンド","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"戦闘で死亡したT‐002 タイラントの損傷したサンプル。重度の火傷跡がある。<li>触手打撃でゾンビを撃破した時の変異度が<b>そこそこ上昇する</b><li>ゾンビの再出現時間がそこそこ減少する。","name":"暴君の血","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"アンブレラ社によって開発されたt-ウィルスのサンプル。被験者に凄まじい変異と脳の損傷を引き起こす。<li>触手打撃でゾンビを撃破した時の変異度が<b>かなり上昇する</b> ","name":"t-ウィルスのサンプル","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"隠密が必要な時に使うと少しリラックスさせてくれるホルモン剤。<li>ゾンビが撃破された時に<b>15秒間</b>、<b>探知不可</b>のステータス効果を得る</li>","name":"セロトニン入り注射器","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"t-ウィルスに感染したつる植物の一部。これにより開発に関わった研究者の1人が命を奪われた。<li>生存者がサプライケースを開く時間が<b>かなり増加する</b>","name":"プラント43のつる ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"粘着性があってつかみやすい舌。触れるといとも簡単に巻き付く。<li>汚染された生存者の<b>妨害</b>ステータス効果の持続時間が<b>そこそこ増加する</b></li><br>","name":"リッカーの舌","flavor":"「まるで…悪夢だわ」 —クレア・レッドフィールド","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"ネメシスT-型の開発に使用された寄生体。宿主の脳を乗っ取る能力を持つ。<li>汚染の効果を受けた生存者は<b>忘却</b>のステータス効果に60秒間苦しむ。","name":"Ne-α寄生体","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"さっきの戦闘で無念にも押しつぶされ血まみれになってしまったが、美味しそうな匂いが気になって仕方ない。<li>サプライケースをロック解除した生存者のオーラが<b>12秒間</b>視えるようになる</li>","name":"ジルのサンドイッチ","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"もはや誰が彼らを救えると言うのか？使い切ったインクリボンにはゾンビを活動的にさせる何かがある。<li>ゾンビの再出現時間が<b>かなり減少する</b></li><li>ゾンビの移動時間がそこそこ増加する</li><li>発電機の修理が <b>5台</b>完了すると、 撃破されたすべてのゾンビが脱出ゲート付近に再出現する。</li><br>","name":"インク切れのインクリボン","flavor":"「言っとくけど…これで本当に最後だからね」 —ジル・バレンタイン","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"月桂冠の中に鳥が描かれた硬貨。半分に割れている。<li>儀式からサプライケースを<b>1個</b>減らす。</li><br>","name":"割れた廃品硬貨","flavor":"「想像していた初日とは大違いだな」 —レオン・S・ケネディ","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"ラクーンシティの希望の象徴。完全に破壊されている。<li>発電機の修理が完了すると、<b>30秒間</b>ゾンビの移動速度が<b>とてつもなく上昇する</b></li><br>","name":"粉砕されたS.T.A.R.S.の記章","flavor":"「S.T.A.R.S.…」 —ネメシス","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"霧そのものから作られたガラス状の記章。倫理的で人道的な科学をはるかに超えた企業を象徴する。<li>ワクチン使用時に生存者が<b>12秒間</b><b>無防備</b>のステータス効果に苦しむ</li><br>","name":"玉虫色のアンブレラ記章","flavor":"「コミットメント、公正、誠実。これが、アンブレラ社の基礎を作る基本理念だ」 —マット・ゴーキス博士","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/jp/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"残忍カテゴリーのブラッドポイントを<b>50%</b>追加取得する。<br><li>重複する</li>","name":"フウキンチョウのリース","flavor":"「血塗れの小枝や内臓で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"残忍カテゴリーのブラッドポイントを<b>75%</b>追加取得する。<br><li>重複する</li>","name":"信心深いフウキンチョウのリース","flavor":"「強い祈りをこめて血塗れの小枝や内臓で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"残忍カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>重複する</li>","name":"熱烈なフウキンチョウのリース","flavor":"「燃えるような不滅の執念をこめて血塗れの小枝や内臓で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"邪悪カテゴリーのブラッドポイントを<b>50%</b>追加取得する。<br><li>重複する</li>","name":"カラスのリース","flavor":"「黒ずんだ木の枝や炭で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"邪悪カテゴリーのブラッドポイントを<b>75%</b>追加取得する。<br><li>重複する</li>","name":"信心深いカラスのリース","flavor":"「強い祈りをこめて黒ずんだ木の枝や炭で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"邪悪カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>重複する</li>","name":"熱烈なカラスのリース","flavor":"「燃えるような不滅の執念をこめて黒ずんだ木の枝や炭で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"狩猟カテゴリーのブラッドポイントを<b>50%</b>追加取得する。<br><li>重複する</li>","name":"フクロウのリース","flavor":"「鋭い金属片やロープ、羽根で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"狩猟カテゴリーのブラッドポイントを<b>75%</b>追加取得する。<br><li>重複する</li>","name":"信心深いフクロウのリース","flavor":"「強い祈りをこめて鋭い金属片やロープ、羽根で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"狩猟カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>重複する</li>","name":"熱烈なフクロウのリース","flavor":"「燃えるような不滅の執念をこめて鋭い金属片やロープ、羽根で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"処刑カテゴリーのブラッドポイントを<b>50%</b>追加取得する。<br><li>重複する</li>","name":"モズのリース","flavor":"「小枝や紐、骨で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"処刑カテゴリーのブラッドポイントを<b>75%</b>追加取得する。<br><li>重複する</li>","name":"信心深いモズのリース","flavor":"「強い祈りをこめて小枝や紐、骨で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"処刑カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>重複する</li>","name":"熱烈なモズのリース","flavor":"「燃えるような不滅の執念をこめて小枝や紐、骨で作られたリース。更なる獲物を求め、エンティティの祝福を願う。」","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"全カテゴリーのブラッドポイントを<b>25%</b>追加取得する。<br><li>重複する</li>","name":"空の抜け殻","flavor":"「内側から破られた、正体不明のサナギの抜け殻。」","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"全カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"生存者のプリン","flavor":"「めちゃくちゃしょっぱいプリンだ…」","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"エンティティに生成されるチェストが<b>2個</b>少なくなるよう願う。<br><li>重複する</li>","name":"割れたコイン","flavor":"「半分に割れた薄い金属のコイン。」","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"エンティティに生成されるチェストが<b>1個</b>少なくなるよう願う。<br><li>重複する</li>","name":"傷ついたコイン","flavor":"「傷ついたコイン。どこから来たのかは不明。」","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"エンティティに呼びかけ、世界に出現する処刑用フックの<b>距離</b>を<b>少し減少</b>させる。<br><li>重複する</li>","name":"カビが生えた樫の木","flavor":"「湿って腐り、カビに覆われた樫の木。」","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"エンティティに生成される処刑用フックの<b>距離</b>が徐々に減少するよう願う。<br><li>重複する</li>","name":"腐った樫の木","flavor":"「奇妙な模様が彫ってある腐りかけの樫の木の一部。」","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"エンティティに生成される処刑用フックの<b>距離</b>かなり減少するよう願う。<br><li>重複する</li>","name":"腐敗した樫の木","flavor":"「腐った黒い液体が浸み出してきているボロボロの樫の木の一部。」","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"次回マッチ中、自らの手で<b>最後の生存者を殺害する</b>能力を得る。<br><li>シークレット</li>","name":"糸杉のメメント・モリ","flavor":"「よくやった、最後の1人は好きにしろ。」","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"次回マッチ中、自らの手で<b>2度フックに吊るされた</b><b>生存者を1人殺害する</b>能力を得る。<li>シークレット</li>","name":"象牙のメメント・モリ","flavor":"「奴らの1人を殺めることをお許しください。」","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"次回マッチ中、自らの手で<b>2度フックに吊るされた</b><b>生存者を全員殺害する</b>能力を得る。<li>シークレット</li>","name":"黒檀のメメント・モリ","flavor":"「誓ってもいい、アレはあの化け物に話しかけていたんだ。奴は静かに立ち止まって、まるで木々のざわめきを聞いているようだった。そして奴は…笑ったんだ。」","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"全ての生存者が別れた場所から開始する。<br><li>シークレット</li>","name":"別離の覆布","flavor":"「黒くて薄く、裂けてバラバラになった覆い。」","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/jp/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"潜在的なオーラ可視能力を解放する。発電機の修理が完了する度、修理完了した発電機の<span class=\\"Highlight1\\">{0}メートル</span>以内にいる生存者が<span class=\\"Highlight2\\">{1}秒間</span>表示される。<br>最後の発電機の修理が完了すると、全ての生存者のオーラが<span class=\\"Highlight3\\">{2}秒間</span>表示される。","name":"憎悪の囁き","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"潜在的なオーラ可視能力を解放する。<span class=\\"Highlight1\\">{0}メートル</span>以内にいる瀕死状態の生存者のオーラが視えるようになる。","name":"忍び寄る者","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"あなたから発せられる恐怖は尋常でない長距離でも相手を捉える。脅威範囲が<span class=\\"Highlight1\\">{0}%</span>増加する。邪悪カテゴリのアクションで獲得するブラッドポイントが<span class=\\"Highlight2\\">{1}%</span>増加する。<br>","name":"苦悶の根源","flavor":"「奴らの恐怖を浴びろ。」","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"隠密能力が使用できるようになる。<span class=\\"Highlight1\\">{0}秒間</span>静止すると、再度動くかアクションを行うまで<b>探知不可</b>のステータス効果を得る。","name":"狡猾","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"希望に根付く呪い。生存者たちの脱出が目前に迫ったとき、あなたは呪いのトーテムの力によって駆り立てられる。<br>脱出ゲートが通電したとき、もし無力なトーテムがマップ上に残っていれば、この呪いが適用される。<br><br>この呪いが発動中、<li>生存者が<b><i>無防備</i></b>効果に苦しむ</li><li>移動速度が<span class=\\"Highlight1\\">{0}%</span>上昇する</li><br>呪いの効果は、紐づけられた呪いのトーテムが残っているかぎり持続する。<br>","name":"呪術：誰も死から逃れられない","flavor":"「そしてあの怪物は、まるでエンティティの影の鞭が背中を打っているかの如く、更に速く、強くなるのだ。」","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"希望に根付く呪い。生存者の偽りの希望が殺人鬼を興奮させ、トーテムを強化する。マップ上に残っている無力、および呪いのトーテム1つ毎にトークンを得る。<br><li>各アクションで獲得する狩猟カテゴリーのブラッドポイントが1トークンにつき<span class=\\"Highlight1\\">{0}%</span>増加する</li><li>生存者がトーテムを破壊する速度が1トークンにつき<span class=\\"Highlight2\\">{1}%</span>減少する</li><li>何者かが呪いのトーテムに対し作業を開始したとき、通知を得る</li><br><i>呪いの効果は、紐付けられた呪いのトーテムが残っているかぎり持続する。</i>","name":"呪術：狩りの興奮","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"地下室のフックに対する、あなたの熱烈な想いがエンティティの歓心を買った。<br>地下室のフックから以下のボーナスを得る。<br><li>エンティティの進行速度が<span class=\\"Highlight1\\">{0}%</span>上昇する</li><li>フックからの脱出難易度が<span class=\\"Highlight2\\">{1}%</span>上昇する</li><li>フックからの脱出に失敗した際にペナルティが<span class=\\"Highlight3\\">{2}%</span>増加する</li>","name":"異形の祭壇","flavor":"「そこで君は絶対に逃げられないことを悟るだろう。地の底で吊り下げられたとき、君は闇そのものと対峙するのだ。」","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"ずさんな肉屋","tiers":[["あなたは獲物のどこを攻撃すれば出血が多くなるかわかる。<i>通常攻撃</i>が命中した生存者に<b>重傷</b>と<b>出血</b>のステータス効果を与える。<b>出血</b>で生存者の出血頻度が<span class=\\"Highlight1\\">少し</span>増加する。<br><i>ずさんな肉屋</i>による<b>出血</b>効果は、生存者が完全に回復すると解除される。<br><span class=\\"FlavorText\\">「これが奴のサディスティックな本性のなせる業だ。一瞬でトドメを刺さず、我々が苦しみ喘いでいる光景を楽しんでいるのだ。」</span>"],["あなたは獲物のどこを攻撃すれば出血が多くなるかわかる。<i>通常攻撃</i>が命中した生存者に<b>重傷</b>と<b>出血</b>のステータス効果を与える。<b>出血</b>で生存者の出血頻度が<span class=\\"Highlight1\\">そこそこ</span>増加する。<br><i>ずさんな肉屋</i>による<b>出血</b>は、生存者が完全に回復すると解除される。<br><span class=\\"FlavorText\\">「これが奴のサディスティックな本性のなせる業だ。一瞬でトドメを刺さず、我々が苦しみ喘いでいる光景を楽しんでいるのだ。」</span>"],["あなたは獲物のどこを攻撃すれば出血が多くなるかわかる。<i>通常攻撃</i>が命中した生存者に<b>重傷</b>と<b>出血</b>のステータス効果を与える。<b>出血</b>で生存者の出血頻度が<span class=\\"Highlight1\\">かなり</span>増加する。<br><i>ずさんな肉屋</i>による<b>出血</b>効果は、生存者が完全に回復すると解除される<br><span class=\\"FlavorText\\">「これが奴のサディスティックな本性のなせる業だ。一瞬でトドメを刺さず、我々が苦しみ喘いでいる光景を楽しんでいるのだ。」</span>"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"この世界のカラスはあなたと直接コミュニケーションが取れる。<span class=\\"Highlight2\\">{1}メートル</span>以内にいるカラスが鳴くと、 <span class=\\"Highlight1\\">{0}%</span>の確率で、目で見て分かるサインを送ってくる。<br><i>影の中の密偵</i>には<span class=\\"Highlight3\\">{2}秒間</span>のクールダウンがある。<br>","name":"影の密偵","flavor":"「奴らが暮色の中で叫ぶたび、俺たちは苦しみ心を蝕まれる。」","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"あなたはメイン武器での<i>通常攻撃</i>に失敗したあと、素早く復帰できる。攻撃失敗時のクールダウンが<span class=\\"Highlight1\\">{0}%</span>減少する。","name":"無慈悲","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"あなたはエンティティの言葉が少し理解できる。生存者から<span class=\\"Highlight1\\">{0}メートル</span>以内にいると、時々エンティティの囁きが聞こえるようになる。<br>","name":"囁き","flavor":"「この霧が意思を持っているかどうかはわからないが、大抵あの怪物の味方をするのは確かだ。」- 手帳","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"あなたは獲物の呼吸音を鋭く感じ取ることができる。苦痛にあえぐ生存者の呼吸音が<span class=\\"Highlight1\\">{0}%</span>大きくなり、通常の呼吸音が<span class=\\"Highlight2\\">{1}%</span>大きくなる。<br>","name":"喘鳴","flavor":"「落ち着いて息を抑えろ……さもないと奴がお前の息の根を止めるぞ。」","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"彼らの勇気は、避けられない死に直面して消えていく。<br>全ての生存者は、負傷、瀕死、またはフックに吊るされている生存者1人につき、修理、破壊工作、トーテム浄化の速度に<span class=\\"Highlight1\\">{0}%</span>から最大<span class=\\"Highlight1\\">{1}%</span>のペナルティを受ける。","name":"死恐怖症","flavor":"「あの女、俺達に苦痛を与えて楽しんでやがる。」","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"潜在的なオーラ可視能力を解放する。<br><br><span class=\\"Highlight1\\">{0}メートル</span>以内にいる治療中、または治療を受けている生存者のオーラを視ることができる。<br>","name":"看護婦の使命","flavor":"「過去の断片がそうさせるのか、あの女は助けが必要な人々に引き寄せられる。」","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"あなたは存在しているだけで相手に恐怖を与える。あなたの脅威範囲内にいる生存者は、修理または治療のスキルチェック発生率が<span class=\\"Highlight1\\">{0}%</span>上昇する。発生したスキルチェックの成功範囲が<span class=\\"Highlight2\\">{1}%</span>減少する。","name":"不安の元凶","flavor":"「奴の存在そのものが我々にとっては災難だ。」","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"あなたのすさまじい力は獲物の防御を粉々に砕く。倒された<b>パレット、破壊可能な壁、発電機</b>を破壊する速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。","name":"野蛮な力","flavor":"「あの力は単なる筋力だけではない。闇の力があの怪物を奮起させているのだ。」","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"あなたは獲物をフックに吊るすことへの期待に胸を躍らせる。生存者を運んでいる間の移動速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。生存者を運んでいる間、脅威範囲が<span class=\\"Highlight2\\">{1}メートル</span>増加する。<br>","name":"興奮","flavor":"「奴はある時から、我々の誰か1人をフックに吊るすときの興奮が、殺すことの願望を上回った。」","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"捕食者","tiers":[["あなたの鋭い追跡能力は、走り抜けた生存者が残した痕跡に集中することができる。生存者が残す赤い傷マークが現れる間隔が<span class=\\"Highlight1\\">少し</span>減少する。<br><br><span class=\\"FlavorText\\">「絶対に足を止めるな、そしていつもあの怪物より2歩先にいることを祈れ。」- 手帳</span>"],["あなたの鋭い追跡能力は、走り抜けた生存者が残した痕跡に集中することができる。生存者が残す赤い傷マークが現れる間隔が<span class=\\"Highlight1\\">そこそこ</span>減少する。<br><br><span class=\\"FlavorText\\">「絶対に足を止めるな、そしていつもあの怪物より2歩先にいることを祈れ。」- 手帳</span>"],["あなたの鋭い追跡能力は、走り抜けた生存者が残した痕跡に集中することができる。生存者が残す赤い傷マークが現れる間隔が<span class=\\"Highlight1\\">かなり</span>減少する。<br><br><span class=\\"FlavorText\\">「絶対に足を止めるな、そしていつもあの怪物より2歩先にいることを祈れ。」- 手帳</span>"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"まるで猟犬のように、遠距離でも血の匂いを追跡できる。新鮮な血痕が、通常より<span class=\\"Highlight1\\">かなり</span>識別できるようになり、追跡可能時間が<span class=\\"Highlight2\\">{0}秒</span>増加する。<br>","name":"血の追跡者","flavor":"「砂利が月明りでキラキラと光る。私の生命が零れ落ち、容易にわかる跡を残す。」","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"あなたは夜の闇の中で鋭い視力を発揮する。<br>視野が通常よりも<span class=\\"Highlight2\\">{0}度</span>広がる。<br><i>他の視野拡大効果と重複しない。</i><br>","name":"闇より出でし者","flavor":"「暗黒の闇で輝く奴の眼は、夜を貫いて魂を突き刺す。」","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"あなたは苦痛をすぐに跳ね除ける。<b>パレット</b>で怯む時間が<span class=\\"Highlight1\\">{0}%</span>減少する。<br>","name":"不屈","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"他の霧の怪物たちとは違い、あなたは光に適応した。懐中電灯や爆竹、スタングレネード、地雷爆破による目眩ましに影響を受けなくなる。あなたに目眩ましを試みる生存者のオーラが<span class=\\"Highlight1\\">{0}秒間</span>視えるようになる。","name":"光より出でし者","flavor":"「あの怪物たちは…適応する！奴らは新たな能力を身につけて現れるのだ。」- ヴィゴの手記","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"発電機の修理が<span class=\\"Highlight1\\">{0}%</span>まで完了すると騒音の通知が発動し、<span class=\\"Highlight2\\">{2}秒間</span>、<b>探知不可</b>のステータス効果を得る。","name":"ガラクタいじり","flavor":"「ヒルビリーはガラクタを使い、見事な道具を作り出す。それを使って独創的なやり方で酷い怪我を負わせる…」- 手帳","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"1人の生存者に<b>執着</b>する。<br>オブセッション以外の生存者に<i>通常攻撃</i>を命中させる度にトークンを1個獲得する。1トークンにつき、<i>通常攻撃</i>成功後のクールダウンが<span class=\\"Highlight1\\">{0}%</span>ずつ減少する。トークンは最大<span class=\\"Highlight2\\">{1}</span>個まで獲得できる。<br>オブセッションを<i>通常攻撃</i>すると<span class=\\"Highlight3\\">{2}個</span>のトークンを失う。<br>オブセッション対象者が処刑されるか死亡すると、それ以降トークンを獲得することはできない。<br><li><i>殺人鬼が一度に<b>執着</b>できる生存者は1人のみ。</i></li>","name":"最後のお楽しみ","flavor":"「町に死が訪れつつある。」- サム・ルーミス医師","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"1人の生存者に<b>執着する</b>。<br>オブセッション状態の生存者を追いかけて取り逃がすたびに、トークンを{0}獲得する。<br>1トークンにつき移動速度が<span class=\\"Highlight1\\">{1}%</span>上昇する。<br><i>通常攻撃</i> または<i>特殊攻撃</i>を実行するたびに1トークンを消費する。<br><li><i>殺人鬼が同時に<b>オブセッション</b>にできる生存者は1人のみ</i></li>","name":"弄ばれる獲物","flavor":"「奴らはうまく騙せても、私には通用せんぞ。」- サム・ルーミス医師","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"1人の生存者に<b>執着</b>する。<br>オブセッション状態の生存者は、フック救助の速度と他の生存者の治療速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。<br>オブセッション状態でない生存者をフックに吊るした時に、オブセッション状態の生存者がいればトークンを獲得する。オブセッション状態の生存者がいる場合、オブセッション状態でない生存者は修理、治療、破壊速度に対し、各トークンごとに<span class=\\"Highlight2\\">{1}%</span>のペナルティを受ける。<br><li><i>複数の生存者が同時にオブセッション状態になることはない。</i></li>","name":"消えゆく灯","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"オーラ可視能力を妨げる呪い。呪いのトーテムが活動している間、生存者に通常攻撃が命中すると<b>目眩まし</b>効果を付与する。呪いの効果は最後に攻撃した<span class=\\"Highlight1\\">{0}</span>人に有効。<br><br><i>呪いの効果は、紐付けられた呪いのトーテムが残っているかぎり持続する。</i><span class=\\"FlavorText\\">「彼女に触られたな！魔女の印をつけられてるぞ！」</span>","name":"呪術：第三の封印","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"この呪いはすべての生存者による発電機の修理進行度に影響を与える。全ての発電機が<i>呪術：破滅</i>の影響を受ける。生存者による修理が行われていない間、即座に発電機の修理進行が通常の後退速度の<span class=\\"Highlight1\\">{0}%</span>で自動的に後退する。<br><br><i>呪いの効果は、紐付けられた呪いのトーテムが残っているかぎり持続する。</i><br>","name":"呪術：破滅","flavor":"「君は呪いをかけられた。これは破滅を導くだろう。」","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"希望に根付く呪い。生存者の偽りの希望が殺人鬼の飢餓をあおる。生存者がフックから救助されたとき、<span class=\\"Highlight1\\">24メートル</span>以上離れていれば、このパークがトークンを獲得する。<br><li><span class=\\"Highlight3\\">2トークン</span>：生存者を吊るしたあと、<span class=\\"Highlight3\\">10秒後</span>に<span class=\\"Highlight3\\">10秒間</span><span class=\\"Highlight2\\">{0}%</span>の<b><i>迅速</i></b>効果を受ける。<span class=\\"Highlight3\\"></span></li><li><span class=\\"Highlight3\\">3トークン</span>：生存者が<b><i>無防備</i></b>効果に苦しむ</li><li><span class=\\"Highlight2\\">5トークン</span>：殺人鬼が自らの手で生存者を殺害できるようになる</li><br><i>呪いの効果は、紐付けられた呪いのトーテムが残っているかぎり持続する。</i><br>","name":"呪術：貪られる希望","flavor":"「放っておけば、君の手は彼らの血に塗れる。助ければ、今度は彼女の飢餓をあおる。」","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"あなたの存在そのものが、底知れない恐怖を呼び起こす。自分の脅威範囲内の生存者が非効率効果に苦しむ。<br>効果を受けた生存者のアイテム消耗率が<span class=\\"Highlight1\\">{0}%</span>増加する。<br>","name":"圧倒的存在感","flavor":"「くそっ！ガーゼを落としてしまった！」","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"接近に慎重さを、診察に恐怖を。<br>生存者を追いかけているとき、脅威範囲が<span class=\\"Highlight1\\">{0}メートル</span>増加する。生存者を追いかけていない場合、脅威範囲が<span class=\\"Highlight2\\">{0}メートル</span>減少し、視界が<span class=\\"Highlight3\\">{1}度</span>拡大される。<br><i>視界増加は重複しない。</i><br>","name":"観察＆虐待","flavor":"「治療の時間だ！」- ドクター","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"進歩への憎しみから力を得る。<br><b>発電機破壊</b>アクションで発電機を過充電させる。次にその発電機に接触した生存者は<span class=\\"Highlight1\\">とてつもなく</span>難しいスキルチェックに直面する。スキルチェックが失敗した場合、発電機の進行度が<span class=\\"Highlight2\\">{0}%</span>追加で減少する。<br>スキルチェックが成功した場合、発電機は進行しないが、発電機の爆発は回避される。","name":"オーバーチャージ","flavor":"「罠だ。罠は誰かが掛からなければ意味がない…」- ドクター","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"殺戮本能が強烈に高まってエンティティとの繋がりが一時的に失われ、行動が完全に予測不能になる。<br><br>血の渇望ティアIを獲得すると<b>探知不可</b>のステータス効果を得る。血の渇望を失うと、このステータス効果は終了する。<br><br><li>狩猟カテゴリーの行動で獲得できるブラッドポイントが<span class=\\"Highlight1\\">{0}%</span>増加する。</li>","name":"猛獣","flavor":"「あの女、どこへ消えた？」","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"潜在的なオーラ可視能力を解放する。あなたが地下室の入り口から<span class=\\"Highlight2\\">{1}メートル</span>以上離れているとき、地下室に入った生存者のオーラが<span class=\\"Highlight1\\">{0}秒間</span>視えるようになる。<br><i>縄張り意識</i>は<span class=\\"Highlight3\\">{2}秒間</span>のクールタイムがある。","name":"縄張り意識","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"絶望に根付く呪い。あなたの狩りは抵抗できない恐怖の唄であり、獲物の警戒心を惑わせる。生存者が治療中または修理中のスキルチェックに失敗したとき、進行度に<span class=\\"Highlight1\\">{0}%</span>の後退ペナルティを受ける。<br>生存者が吊るされる度に、女狩人の子守唄は力を増す。治療中または修理中のスキルチェック警告音に以下の影響をおよぼす。<br><li><b>1～4トークン：</b>スキルチェックとスキルチェック前の警告音の間が短くなる</li><li><b>5トークン：</b>スキルチェック前の警告音が無くなる</li><br><i>呪いの効果は、紐付けられた呪いのトーテムが残っているかぎり持続する。</i>","name":"呪術：女狩人の子守唄","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"あなたに攻撃された生存者はトラウマを受け、仲間の救助を得られにくくなる。<br>通常攻撃で瀕死状態に入った生存者は、<span class=\\"Highlight1\\">{2}メートル</span>以上離れているほかの生存者から探知不可になる。<br>通常攻撃で瀕死状態に入った生存者は、<span class=\\"Highlight3\\">{0} 秒間</span>、這いずり移動速度が<span class=\\"Highlight2\\">{1}%低下する</span>。<br>この間、生存者は<b>目眩まし</b>効果の影響を受ける。","name":"ノックアウト","flavor":"「エアガンはよくない。昔ながらのハンマーが一番さ。いい死に方ができる。」- ヌビンズ・ソーヤー","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"エンティティとの深い繋がりが潜在的なオーラ可視能力を強化する。生存者をフックに吊るした後<span class=\\"Highlight1\\">{0}秒間</span>、フックから<span class=\\"Highlight2\\">{1}メートル</span>以上離れた全ての生存者のオーラを視ることができる。<br><li>生存者が初めてフックに吊るされるたび、全ての獲得ブラッドポイントが<span class=\\"Highlight3\\">{2}%</span>増加する。最大で<span class=\\"Highlight4\\">{3}%</span>まで。この効果は重複する。<br>追加取得したブラッドポイントはマッチ終了後に付与される</li>","name":"バーベキュー＆チリ","flavor":"「どうも殺しは楽しめない。だが気に入らないことでもやらねばならん。」- ドレイトン・ソーヤー","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"あなたの邪悪な攻撃を受けた生存者は衝撃でアイテムを落とす。落ちたアイテムは<span class=\\"Highlight1\\">{0}秒</span>が経過する前に拾わなければエンティティに吸収される。<br><span class=\\"Highlight2\\">{1} メートル</span>以内の地面に落ちたアイテムは、白いオーラで判明する。アイテムのオーラはエンティティに吸収されるまで徐々に赤へと変わる。","name":"フランクリンの悲劇","flavor":"「何か音がする。止まれ！」- フランクリン","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"獲物を失うというプレッシャーが高まると、怒りで満たされることで望外の意欲を得る。生存者が発電機の修理を完了するたびに、このパークは強化される。<br><li>各発電機の修理が完了すると<span class=\\"Highlight1\\">{0}%</span>の重複可能な強化効果を得て、儀式の残り時間中は拾う、落とす、乗り越え、発電機破壊、パレットの破壊の速度が上昇する</li>","name":"ファイヤー・アップ","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"1人の生存者に<b>執着する。</b>オブセッションを<i>通常攻撃</i>するたびに、脱出ゲート開放にかかる時間が<span class=\\"Highlight1\\">{0}秒</span>増加する。この効果は最大<span class=\\"Highlight2\\">{1}秒</span>まで重複する。<br>オブセッションは<i>リメンバーミー<i>の影響を受けない。</i><br><li>殺人鬼が一度に<b>執着</b>できる生存者は1人のみ</i></li>","name":"リメンバー・ミー","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"脱出ゲートが開放されることで発動する。<br>出口エリア内にいる生存者のオーラを視ることができる。<br>1マッチに1回だけ、血の番人が発動中に生存者をフックに吊るすと、エンティティを召喚して全ての出口を<span class=\\"Highlight1\\">{0}秒間</span>封鎖する。全ての生存者に対して有効。","name":"血の番人","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"フックに独創的な改造を加え、改変があれば警告を発する。<br><li>生存者がフックの破壊工作を開始すると通知を受け取る。</li><li>生存者を運んでいる間、フックから<span class=\\"Highlight1\\">{0}メートル</span>以内にいる生存者のオーラが視える</li>","name":"処刑人の妙技","flavor":"「言い訳やごまかしは通用しない…泣き言も。」- アマンダ・ヤング","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"潜在的なオーラ可視能力を解放する。修理進行度が後退しているすべての発電機が白いオーラで強調される。発電機の修理進行度の後退が食い止められると、<span class=\\"Highlight1\\">{0}秒間</span>黄色いオーラで強調される。<br>発電機の修理音の聞こえる範囲が<span class=\\"Highlight2\\">{1}メートル</span>広がる。<br>","name":"監視","flavor":"「大人しくする？」- アマンダ・ヤング","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"生存者があなたから<span class=\\"Highlight1\\">{0}メートル</span>以上離れたフックに吊るされた仲間を救助すると、<i>選択は君次第だ</i>が発動して救助者が叫び、<span class=\\"Highlight2\\">{1}秒間</span><b><i>無防備</i></b>の効果を受ける。<br><i>選択は君次第だ</i>には<span class=\\"Highlight3\\">{2}秒間</span>のクールダウンがある。","name":"選択は君次第だ","flavor":"「思わぬモノが命を救うのよ。」- アマンダ・ヤング","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"あなたは生存者を力強く掴み、抜け出すことを不可能に近くする。生存者のもがく効果が<span class=\\"Highlight1\\">{0}%</span>減少する。抜け出すために必要な時間が<span class=\\"Highlight2\\">{1}%</span>増加する。","name":"鋼の握力","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"存在そのものが、底知れない恐怖を呼び起こす。<br>脅威範囲内の生存者の治療速度が<span class=\\"Highlight1\\">{0}%</span>低下する。","name":"ピエロ恐怖症","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"エンティティとの深い繋がりが強大な力を解放する。生存者を吊るすと、次に破壊する発電機の修理進行度が即座に<span class=\\"Highlight1\\">{0}%</span>減少する。発電機破壊アクションの後、発電機の進行度は通常通り減少していく。<br><i>イタチが飛び出した</i>は、生存者が吊るされた後<span class=\\"Highlight1\\">{1}秒間</span>有効。","name":"イタチが飛び出した","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"障害物を乗り越える速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。<br>乗り越えを行うと、エンティティがその場所を<span class=\\"Highlight1\\">{1}秒間</span>封鎖する。<br>同時に封鎖できる場所は1ヶ所のみ。封鎖は生存者のみ有効。<br>パレットには効果が適用されない。","name":"まやかし","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"パレットを壊すごとにエンティティの怒りが増幅する。<br>パレットを<span class=\\"Highlight1\\">{0}つ</span>破壊すると、次にパレットで怯んだときに、エンティティが即座にパレットを破壊する。<br>怯み効果は通常通り受ける。<br>","name":"怨霊の怒り","flavor":"「怒りこそ彼女に流れる血だ。」","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"罠が封じられた呪いのトーテムが2個生成される。<br>生存者が罠の呪いのトーテムのいずれか一方を浄化すると、すべての生存者が<span class=\\"Highlight1\\">{0}秒間</span><span class=\\"Highlight3\\">無防備状態</span>に苦しむ。<br>残りの罠の呪いのトーテムは即座に無力なトーテムになる。<br>","name":"呪術：霊障の地","flavor":"「彼女の家は穢された。」","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"1人の生存者に<b>執着する。</b><br>発電機の修理が完了するたびに、 オブセッション対象者はあなたのオーラを<span class=\\"Highlight1\\">{0}秒間</span>視ることができる。<br>発電機の修理が完了するたびに、すべての生存者の位置を<span class=\\"Highlight2\\">{1}秒間</span>探知できる。<br>すべての発電機の修理が完了すると、オブセッション対象者は<span class=\\"Highlight3\\">無防備</span>状態になり、殺人鬼はオブセッション対象者を<span class=\\"Highlight3\\">殺害</span>できるようになる。<br><li><i>オブセッション状態になるのは1マッチにつき1人まで。殺人鬼は一度に1人の生存者にしか取り付けない。</i></li>","name":"怨恨","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"2人以上の生存者が修理する<span class=\\"Highlight1\\">{0}メートル</span>以内の発電機が黄色のオーラで強調される。初めて強調された発電機は不協和音によって大きな音の通知が発生する。発電機が範囲外になるか、2人以上の生存者によって修理されなくなった後もオーラが<span class=\\"Highlight2\\">4秒間</span>持続する。<br>","name":"不協和音","flavor":"「知ったかぶりは殺される。俺たちはいつもそれを見てきた。」- リージョン","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"生存者を運んでいる間、<i>通常攻撃</i>の失敗時のクールダウンがなくなり、<i>通常攻撃</i>の成功時、運んでいる生存者のもがきゲージが<span class=\\"Highlight1\\">{0}</span>秒間停止する。<br>","name":"狂気の根性","flavor":"「今すぐ抜け出すことはない。なに、俺たちが十分に上手くやってやるからな。」- リージョン","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"ロッカーを開ける速度が<span class=\\"Highlight1\\">{0}％</span>上昇する。<br><br>ロッカーから出た生存者は、<span class=\\"Highlight1\\">{2}秒間</span>無防備状態になって叫び、<span class=\\"Highlight1\\">{1}秒間</span>位置が表示される。<br>","name":"アイアンメイデン","flavor":"「臆病者に居場所はない。」- リージョン","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"祈りを捧げて闇の力を召喚し、生存者の生存確率に介入する。儀式開始時に、一番離れた位置にある<span class=\\"Highlight1\\">発電機{0}つ</span>がエンティティによって<span class=\\"Highlight1\\">{1}秒間</span>ブロックされる。<br>その間は、ブロックされた発電機は修理ができない。ブロックされている発電機は白いオーラでハイライトされる。<br>","name":"堕落の介入","flavor":"「信仰なき者は神々の呪いを受けることが大地に知れ渡るであろう」（アディリスの石版、第3章7節）","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"信仰なき者の叫び声に心臓が激しく脈打つ。<br>生存者を瀕死状態にすると、脅威範囲内の生存者全員が叫び声をあげ、<span class=\\"Highlight1\\">{0}秒間</span>位置が通知される。","name":"伝播する怖気","flavor":"「不信心者は心を恐怖に支配され、死者の足元で叫び声をあげる」（賛美歌、第11章4節）","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"あなたは力を誇示し、大地に混乱の惨禍を巻き起こす。<br><br>1人の生存者に執着する。オブセッションに<i>通常攻撃</i>を命中させると、<span class=\\"Highlight2\\">{1}秒間</span>、脅威範囲がオブセッションに移動して、範囲が<span class=\\"Highlight1\\">{0}メートル</span>になる。効果中、<b>探知不可</b>のステータス効果を得る。<br><br>脅威範囲が移動した生存者は、他の目的で「脅威範囲内にいる」とみなされる。<br><br><li><i>殺人鬼が一度に<b>執着</b>できる生存者は1人のみ</i></li><br>","name":"闇の信仰心","flavor":"「そして恐れを知らぬ信仰なき者は恐怖に屈し、我が偽りの到来を告げるであろう」（アディリスの石板、第48章9節）","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"エンティティの闇の領域で感覚が鋭く研ぎ澄まされる。<br><br>潜在的なオーラ可視能力を解放する。自分から<span class=\\"Highlight1\\">48メートル</span>以内でせっかちな行動を行なった生存者のオーラが<span class=\\"Highlight2\\">{0}秒間</span>見える。<br><br><i>地獄耳</i>は<span class=\\"Highlight3\\">{1}秒</span>ごとに1回のみ発動可能。<br>","name":"地獄耳","flavor":"何も心配はいらない。このために人生をかけて準備してきたんだ」–ゴーストフェイス","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"闇の計画と抜け目のない冷静さがエンティティを目覚めさせる。<br><br>生存者を担いだ後、生存者によって修理中でない発電機すべてがエンティティによりブロックされ、次の<span class=\\"Highlight1\\">{0}秒間</span>修理不能になる。ブロックされている発電機は白いオーラでハイライトされる。<br><br><i>戦慄</i>は<span class=\\"Highlight2\\">{1}秒</span>ごとに発動可能。<br>","name":"戦慄","flavor":"「夜が俺の力となる。そしてここに夜明けは来ない」–ゴーストフェイス","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"あなたは1人の生存者に<b>執着</b>する。影に潜んで犠牲者を1人ずつ消していく。オブセッション状態の生存者をフックに吊るすと、<i>隠密の追跡</i>は最大<span class=\\"Highlight1\\">{0}つ</span>までトークンを獲得する。<br><br>1トークンにつき、追跡中の脅威範囲が<span class=\\"Highlight2\\">{1}メートル</span>減少する。<br><br>オブセッション状態の生存者をフックから救助した生存者は、オブセッションになる。オブセッション状態の生存者が処刑されるか殺害されると、すべてのトークンを失う。<br><br><li><i>同時に<b>オブセッション</b>状態にできる生存者は1人のみ。</i></li><br>","name":"隠密の追跡","flavor":"「素晴らしい計画を立てたんだ。確実に何週間も話題になるようなね」–ゴーストフェイス","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"不気味な存在感が辺りに充満し、テクノロジーを妨げる。<br><br><i>通常攻撃</i>で生存者を瀕死状態にすると、<span class=\\"Highlight1\\">{0}メートル</span>以内の範囲にある全ての発電機が即座に爆発し、修理の進行度が減少し始める。サージの影響を受けた発電機は進行度が即座に<span class=\\"Highlight2\\">{1}%</span>減少する。<li><i>サージ</i>は<span class=\\"Highlight3\\">{2}秒</span>ごとに一度だけ発動可能。</li><br>","name":"サージ","flavor":"「詳細は不明だが、この生物は電界と周囲の電子機器に影響を与えるようだ」―ホーキンス国立研究所","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"息苦しくなるような存在感で、獲物を消耗させて衰弱させる。<br><br>生存者が発電機を修理中に<b>疲労</b>ステータスの影響を受ける。<br><br>すでに<b>疲労</b>ステータスのタイマーが存在している場合、生存者が発電機を修理している間は疲労のタイマーが停止する。修理アクションを終えた後<span class=\\"Highlight2\\">{1}秒間</span><b>疲労</b>ステータスの影響を受ける。<br>","name":"マインドブレーカー","flavor":"「その検体のテレパシーのような能力は、恐怖心を呼び起こして近くの人間を疲労させるようだ」―ホーキンス国立研究所","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"獲物が逃走を試みると、別世界とのつながりが姿を現す。<br><br>発電機の修理が完了するたび、修理が完了した発電機から<span class=\\"Highlight1\\">{0}メートル</span>以内の範囲にある全ての窓と乗り越え可能な地形が<span class=\\"Highlight2\\">{1}秒間</span>封鎖される。<br><br>生存者は封鎖された地点を乗り越えることができない。封鎖中、殺人鬼には<i>無慈悲の極地</i>で封鎖された場所のオーラが見える。<br>","name":"無慈悲の極地","flavor":"「その検体はまるで我々とは別の次元に異なる形態で存在しているかのように、付近にある物体の状態に影響を与えられるようだ」―ホーキンス国立研究所","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"潜在的なオーラ可視能力を解放する。あなたは神経が敏感になり、戦場の要所を把握できるようになる。<br><br>全てのパレット、破壊可能な壁、そして乗り越えの位置のオーラが<span class=\\"Highlight1\\">{0}メートル</span>範囲で視えるようになる。<br>","name":"残心の戦術","flavor":"「敵の強みにこそ弱点がある。」- 練次郎の教え 拾弐ノ伍","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"1人の苦しみは他の者にも及ぶ。<br><br>1人の生存者をフックに吊るすと、その他の負傷した生存者の全員が<span class=\\"Highlight1\\">出血</span>と<span class=\\"Highlight1\\">疲労</span>のステータス効果に<span class=\\"Highlight2\\">{0}秒間</span>苦しむ。<br><br><i>血の共鳴</i>には<span class=\\"Highlight3\\">{1} 秒のクールダウンがある。</span><br>","name":"血の共鳴","flavor":"「正確に敵を攻撃しろ。さすれば仲間にまで響く。」- 練次郎の教え 陸ノ参","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"ひどい仕打ちをした輩に報復を望む。パレットやロッカーを使って目くらましや怯ませてくる生存者はあなたのオブセッションとなる。<br><br>新たな生存者がオブセッションになるときは毎回<span class=\\"Highlight1\\">忘却</span>状態となり、その効果が<span class=\\"Highlight2\\">{0}秒</span>継続する。また彼らのオーラが<span class=\\"Highlight3\\">{1}秒間</span>視えるようになる。<br><br><li><i>殺人鬼の<b>オブセッション</b>になる生存者は1回に1人のみ</i></li><br>","name":"天誅","flavor":"「鬼の顔に唾を吐きかけて勝ちほこるのは愚か者だけだ。」- 練次郎の教え 肆ノ玖","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"あなたはよく油を塗った歯車を聞き分けることができる。<br><br>生存者に<i>通常攻撃</i>を<span class=\\"Highlight1\\">{0}</span>回命中させると、<i>変速機</i>が<span class=\\"Highlight2\\">{1}秒間</span>発動する。<br><br><i>発電機</i>が稼働中は、生存者が修理のスキルチェックでグッドを出すたびに、修理が進行しているかぎり黄色のオーラで表示される。<br>","name":"変速機","flavor":"「最高の仕事でも結果的に自分の墓穴を掘ることがあるんだよ。」 - 刑務所長","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"あなたは1人の生存者に<b>執着</b>する。<br><br>オブセッションをフックに吊るすと、次の<span class=\\"Highlight1\\">{0}秒間</span>、<i>死人のスイッチ</i>が発動する。<br><br>発動中、生存者が発電機の修理を完了する前に中断すると、発電機は<i>死人のスイッチ</i>の効果が終わるまでエンティティによってブロックされる。<br><br>ブロックされた発電機は白いオーラでハイライトされる。<br><br><i>殺人鬼が一度に<b>執着</b>できる生存者は1人のみ。</i><br>","name":"死人のスイッチ","flavor":"「自分が死ぬことに気付いたときの人間の顔なら見たことがあるぜ。」 - カレブ・クイン","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"破壊時に激しい攻撃を繰り出す呪い。あなたとすれ違った者は報いを受ける。<br><br>無力なトーテムを浄化した生存者は、<span class=\\"Highlight1\\">{0}秒</span>間<b>忘却</b>のステータス効果に苦しむ。<br><br>これを含む呪いのトーテムが浄化されると、すべての生存者のオーラが<span class=\\"Highlight2\\">{1}秒</span>間視えるようになる。<br>","name":"呪術：報復","flavor":"「とんでもない間抜けだ、自分で引き金を引きやがって。」 - カレブ・クイン","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"任務の妨げになる者たちは、厳しい裁きに苦しむことになる。<br><br>味方の代わりに攻撃を受けた生存者は<span class=\\"Highlight1\\">{0}秒間</span>、<b>衰弱</b>のステータス効果に苦しめられる。","name":"強制苦行","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"あなたは餌食となる人間を苦痛と罰の道へと誘導する。<br><br>発電機を蹴ると、発電機の進行度が止まるか、生存者が負傷または瀕死状態になるまで<b>探知不可</b>になる。この間、その発電機の黄色いオーラが生存者に視えるようになる。<br><br>この効果は<span class=\\"Highlight1\\">{2}秒</span>ごとに1回のみ発動する。","name":"煩悶のトレイル","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"闇の中で人生が重なり合った者たちは、共に苦しむ宿命にある。<br><br>殺人鬼から<span class=\\"Highlight1\\">{0}メーター</span>以上離れた場所で生存者が別の生存者を治療して1段階回復させると、治療を施した側の生存者が叫んで位置が判明し、次の<span class=\\"Highlight2\\">{1}秒間</span><i>デスバウンド</i>が発動する。発動中、その生存者は回復した生存者から<span class=\\"Highlight3\\">{2}メートル</span>以上離れている場合、<b>忘却</b>のステータス効果に苦しむ。 ","name":"デスバウンド","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"発電機を蹴った後の<span class=\\"Highlight1\\">{0}秒間</span>で最初にその発電機にアクションを行った生存者は叫び声を上げ、<span class=\\"Highlight2\\">{1}秒間</span>位置が判明し、<span class=\\"Highlight3\\">{2}秒間</span><b>無防備</b>のステータス効果を受ける。<br><br><i>ドラゴンの掌握</i>には<span class=\\"Highlight4\\">{3}秒間</span>のクールダウンが発生する。<br>","name":"ドラゴンの掌握","flavor":"「この化合物には大きな可能性がある。微量であっても、不自然な効果を引き起こすのだ。」 —タルボット・グライムズの日記","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"血が流れるとエンティティの恩恵を受ける呪い。<br><br>生存者に<i>通常攻撃</i>が命中すると、<span class=\\"Highlight1\\">{0}メートル</span>以内にあるパレットが<span class=\\"Highlight2\\">{1}秒間</span>エンティティによって固定される。固定されたパレットを倒すことはできない。<br><br><i>呪術：血の恩恵</i>には<span class=\\"Highlight3\\">{2}秒間</span>のクールダウンが発生する。<br>","name":"呪術：血の恩恵","flavor":"「儀式が何らかの生物学的反応であるという提唱は、闇雲な想像ではない。」 —タルボット・グライムズの日記","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"<i>呪術：不死</i>の発動中、いずれかの無力なトーテムの<span class=\\"Highlight1\\">{0}メートル</span>以内にいる生存者のオーラが視える。<br><br>それとは別の呪いのトーテムを浄化するとそのトーテムの呪いは呪術：不死のトーテムに移動し、呪術：不死の呪いを解く。移動された呪いにあったトークンも一緒に移動する。","name":"呪術：不死","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"数少ない持ち物を固守するあなたは、備蓄が乱されないように神経を尖らせている。<br><br><span class=\\"Highlight1\\">{0}メートル</span>以内でチェストにアクションを行うかアイテムを拾った生存者の位置が判明する。<br><br>儀式の開始時点で、マップ上に最大<span class=\\"Highlight1\\">{1}</span>個のチェストが追加で出現する。","name":"溜め込み屋","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"これまで人生ハードモードだったあなたは、他の者の人生も難易度を上げることにした。<br><br>発電機を破壊すると、他のランダムな発電機の修理進行度が最大<span class=\\"Highlight1\\">{0}</span>台まで後退し始める。<br><br>これらの発電機が修理中の場合、修理をしている生存者に難しいスキルチェックが発生する。<br><br><i>迫害</i>には<span class=\\"Highlight2\\">{1}</span>秒間のクールダウンが発生する。<br>","name":"迫害","flavor":"「彼らが私達を破滅させたように、彼らを破滅させるのよ。」 —シャルロット・デエ","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"終わりが近づき、あなたはとどめを刺しにかかる。<br><br>発電機の修理が完了するたびに、とどめの一撃の力が高まる。1トークンを獲得する。<br><br>1トークンを使用すると、次の突進攻撃の距離が<span class=\\"Highlight1\\">{0}メートル</span>増加する。","name":"とどめの一撃","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"あなたはその比類なきパフォーマンス能力で見る者の目を奪う。<br><br>生存者を担いでいる時、脅威範囲内にいるその他の生存者が<b>無防備</b>のステータス効果に苦しむ。<br>効果は脅威範囲外に出てからも<span class=\\"Highlight1\\">{0}秒間</span>続くほか、担いだ生存者をフックに吊るすか、解放した時に範囲内にいる生存者も同じ時間効果が続く。<br><i>スターに憧れて</i>は生存者が担がれていない状態になってから<span class=\\"Highlight2\\">{1}秒間</span>のクールダウンが発生する。<br>","name":"スターに憧れて","flavor":"「この瞬間を楽しみなよ。こんなに近づける奴はそういない」— ハク・ジウン","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"あなたより劣る人間が適切に集まる呪い。<br><br>生存者が窓の<b>高速</b>乗り越えを行うと、その窓がエンティティによって<span class=\\"Highlight1\\">{0}秒間</span>ブロックされる。<br><br><i>呪いの効果は、紐付けられた呪いのトーテムが残っているかぎり持続する</i><br>","name":"呪術：クラウドコントロール","flavor":"「君にはどうすることもできない。君のような人間にはね」— ハク・ジウン","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"VIPルームに誰かを入れる時、あなたには特別な目的がある。<br><br>生存者を初めてフックに吊るすたびに、<i>袋小路</i>の1トークンを獲得する。<br>最後の発電機の修理が完了すると、<span class=\\"Highlight1\\">{0}秒間</span>に加え、所持するトークン1つにつき<span class=\\"Highlight2\\">{1}秒間</span>、脱出ゲートの両方のスイッチがエンティティによってブロックされる。<br>","name":"袋小路","flavor":"「血を流す時のその音だ…もう一度聞かせてくれ」 — ハク・ジウン","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"あなたは標的を追い詰めて抹殺することを目的に作られた。<br><br>儀式開始時、生存者全員のオーラが<span class=\\"Highlight1\\">{0}秒間</span>視える。<br><br><span class= \\"FlavorText\\">「…そいつは目的を果たすまで止まらない」 —カルロス・オリヴェイラ<\\\\span>","name":"死を呼ぶ追跡者","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"あなたはチームの1人をどう残忍にいたぶればパニックを引き起こせるかを心得ている。<br><br>無傷の生存者を通常攻撃で負傷状態にした時、負傷したすべての生存者が<span class=\\"Highlight1\\">{0}秒間</span><b>忘却</b>のステータス効果に苦しむ。<br><I>集団ヒステリー</i> は<span class=\\"Highlight2\\">{1}秒間</span>のクールタイムがある。<br><br><span class= \\"FlavorText\\">「ちょっとビビっちまって悪かったよ。どうなるか見当もつかなかったんだ」 —ロバート・ケンド","name":"集団ヒステリー","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"Ne-α寄生体のおかげで、あなたには罠を仕掛けるために必要な知能と認識力が備わっている。<br><br>発電機を蹴ると、その後オーラが黄色で強調表示される。生存者を通常攻撃で瀕死状態にすると強調表示されたすべての発電機が爆発し、修理の進行度が<span class=\\"Highlight1\\">{0}%</span>減少して、オーラは消失する。<br>爆発時に発電機を修理中だった生存者は叫び声を上げ、<span class=\\"Highlight2\\">{1}秒間</span>行動不能のステータス効果に苦しむ。<br><i>イラプション</i>には<span class=\\"Highlight3\\">{2}秒間</span>のクールダウンが発生する。<br><br><span class= \\"FlavorText\\">「この化け物、武器も使えるの？」—ジル・バレンタイン","name":"イラプション","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/jp/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"エヴァン・マクミランは父親を崇拝していた。それは彼が莫大な財産の相続人であったというだけではなく、そうすることで父親の地所を管理していた。父親の庇護の元、エヴァンは厳格に労働者を管理することに没頭していった。生産高はいつも好調で、マクミラン・エステートは父子経営のもと成長していった。やがてアーチー・マクミランの精神状態はゆるやかに乱れていったが、エヴァンは財産のおこぼれを狙う者たちから父を守った。エヴァンは父親の言うことならどんなことでも行ったのだ。<br><br>ついにアーチーは完全に錯乱し、エヴァンは父親の意思のもと、近代史における最悪の殺人鬼と化すこととなった。エヴァンが100人を超える労働者を暗いトンネルに入らせ、入り口を爆破して永遠に閉ざしたことを証明する手段は存在しない。マクミラン・エステートの物語は、富と権力が非常に間違った方向に使われた例として語られるようになった。父子により犠牲となった人たちの数は不明。その後のエヴァン・マクミランについて記録は全く残っていない。そしてもう1つの謎は、彼の父親が倉庫の地下室で――遺棄死体として発見されたことだ。<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"フィリップ・オジョモは新たな人生への希望を胸に、着の身着のままでこの国にやってきた。彼はオートヘイヴン・レッカーズで職を見つけられたことに満足していた。その小さなスクラップ置き場は警官を買収して何らかの裏取引が行われる場であったようだが、オジョモは気にしなかった。彼は故郷で犯罪を間近で目にしてきたが、彼自身に火の粉が降りかからない限り、彼は関わろうとしなかった。彼はただ車を直し、プレス機を動かし、ミスも何事もなくこなしていた。プレス機の中に車が入っていくと、出てくるものはただ金属の小さな立方体だった。<br><br>しかしそれはある薄暗い日、彼が偶然にプレスされる前の車から血が流れ出てくるのを見つけるときまでだった。彼がトランクを開けると、手を縛られ、口を塞がれて怯えた目をする若い男がいた。オジョモは彼を逃したが、3メートルも走ったところでオジョモの雇い主が現れ、彼の喉を切り裂いた。オジョモが説明を求めると、雇い主は、今まで潰してきた全ての車の中には生きた人間がおり、それが「顧客」に対しスクラップ置き場が提供している「サービス」であり、オジョモ自身はただの処刑人であったことを告げられた。オジョモは激昂し、衝動をそのまま行動に移した。雇い主をプレス機に放り込み、ゆっくりと潰したのだ。雇い主の頭部が飛び出すと、背骨ごと身体から引き抜いた。そして彼はどこかへ去っていき、その後誰も見たものはいない。<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"裕福な地主であるマックス・トンプソンとエヴリン・トンプソン夫妻の間に生まれた息子は、望まれずこの世に生を受け、名前すらつけてもらえなかった。容姿が酷く歪んでいた彼は社会から断絶させられた。両親は彼の存在をとても恥じ、幽閉した上で壁の穴から食事を与えていた。少年が逃げ出したとき、自分を育てる代わりに苦しめ続けた両親に行った復讐は凄惨なものだった。<br><br>なすべきことを終えた後、少年はその農場で生活を始め、狂気的な暴力は逃げ出した動物たちに向けられた。少年はついに足枷から解放され、トウモロコシ畑を走り回り、目に入ったものはなんでも追い詰めて殺戮した。後の捜査でもトンプソン夫妻の遺体は見つからなかったが、農場中にバラバラにされた動物の死体が散乱していた。コールドウィンド・ファームはただちに廃業させられ、分割されて売却されたが、家屋は誰も買い取ろうとしなかった。暑い夏の夜に響いていた音は、おそらくチェーンソーの音だったのだろう。<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"サリー・スミッソンは、夫アンドリューの建てた家で子供達と笑顔で暮らすことを夢見て町に来た。しかしある日アンドリューの親方がサリーを訪ねてきたとき、彼女の人生は永遠に歪んだ。彼女はクロータス・プレン・アサイラム以外に仕事が見つからなかったのだ。彼女の待遇は最低で、辛い夜勤担当であった。年月を重ね、彼女の精神は限界に達した。何十年もおぞましいものを見続け、彼女の眼は陵辱されつくしてしまったのだ。ついに彼女はこれ以上耐えられなくなり、「心の浄化」を求める欲望が膨らんでいった。ある9月の朝、職員が病院に出勤すると、50人以上の患者の死体と4人の職員の死体をベッドの上に発見した。唯一サリーだけがその夜を生き延び、ゆらゆらと身体を揺らして呆然としていた。職員はサリーを救急車に乗せたが、病院にたどり着くことはなかった。救急車は木に激突しているところが発見されたが、サリーは行方不明となった。","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"アナが歩けるようになると、彼女の母親はすぐに北部の森での厳しい孤独な生活を生き延びる方法の教育を始めた。危険に満ちた遠隔地で生きるには、能力と不屈の心身が必要であるからだ。生産的なことをするには日光が弱まりすぎたときは、親子は厳しい冬でも耐えられるように建てられた小屋に避難していた。アナは暖炉の近くで母の腕に抱かれ、アナのために作られた木製の玩具や仮面に囲まれて眠りについた。おとぎ話や子守唄で眠りに落ちていく彼女は幸せな夢を見ることができた。全てを変える出来事が目の前に迫っているとも知らずに。<br><br>アナと母親は大きなヘラジカの後を尾行していた。危険な獲物であることは分かっていたが、その冬は特に厳しく、食料がほぼ底をついていたのだ。餓死の恐怖は森のどんな生き物よりも親子を怯えさせた。ヘラジカは突然後ろ足で立ち上がり、吠えてアナに突進してきた。彼女は恐怖で硬直し、全ての世界が巨大な獣の蹄の下で揺れ動くように感じた。アナがヘラジカの眼に宿る怒りの炎を見ることができるほどの距離に近づいた瞬間、母親が斧を持ってアナの前に飛び出した。彼女がヘラジカの角に突き刺されて空中に持ち上げられると、凍りつくような叫び声が溢れ出た。母親はヘラジカが振りほどこうとする間、全力で何度も何度も斧をその頭に振り下ろした。嫌な音とともにヘラジカの角は折れ、アナの母親は自由となり、ヘラジカは崩れ落ちた。<br><br>アナは重傷を負った母親の身体を動かすには幼すぎたため、彼女が落ちた場所で座り、寄り添うことしかできなかった。ヘラジカの断末魔からアナの気をそらすため、母親はアナを抱きしめ、大好きな子守唄を歌った。女狩人とヘラジカが静かに、そして冷たくなっていく間、親子は最期の時を過ごした。そしてアナは静寂な森の中に独り残された。ついにアナは立ち上がり、家への長い帰路についた。<br><br>まだ子供であったが、アナは森の中で生き延びるだけの必要な知識を備えていた。彼女は自分の感覚に従い、野で生きる存在となった。彼女は成長して強くなり、狩りの練習に励んだ。アナが危険な捕食者に成長すると、彼女の人間性は遠い日の思い出と消えていった。<br><br>彼女は縄張りを広げ、狩りの日々を過ごしていた。彼女の獲物はリス、兎、イタチ、キツネと困難なものに変化していったが、最終的に彼女はそれらに飽き、狼や熊のような危険な生き物を狩るようになった。しかしある時何も知らない旅行者が彼女の森を通ったとき、彼女は新しい自分好みの獲物を発見することとなった。人間である。彼女の縄張りに足を踏み入れてしまった不運な人間は、他の動物と同じように屠殺された。彼女は彼らが持ち込んだ道具やカラフルな衣服、そして特に獲物に子供が混じっていたときに持っている玩具を集めるのを好んだ。しかし、彼女は絶対に少女を手にかけることはなかった。<br><br>少女たちは森の奥にある住居に連れ去られた。少女たちは貴重であり、見つめていると彼女の心の奥深くで何かが目覚めた。彼女は愛する人――自らの子供――との親子関係を渇望するようになった。獲物から奪った木製の玩具や人形、彼女が読めない絵本に囲まれた少女たちは、荒縄で首を壁にきつく結び付けられていた。少女たちは外に出れば間違いなく殺されるため、自由にする訳にいかなかったのである。<br><br>毎回、寒さか食糧不足か病気により少女たちは無駄に命を落とした。毎回、アナの心は苦痛と悲哀、そして狂気に沈んでいった。彼女はやり直しを強いられ、近隣の村を襲い、家族を皆殺しにして少女を誘拐するようになった。彼女は怯える子供達を落ち着かせるため、母親がはるか以前に作った動物の仮面を被った。村人たちはレッド・フォレストに潜み、男を殺して少女を食らう半人半獣の怪物、ハントレスの噂を語り合った。<br><br>その森にもついに戦禍が訪れた。ドイツ軍の兵士が崩壊しつつあるロシア帝国を攻撃するため森の中を行軍するようになったのだ。暗黒の時代において、旅行者は1人もいなくなった。村人たちは故郷を捨てて少女は見つからなくなり、兵士だけが残った。しかし兵士の多くは斧による酷い傷を負った状態で発見され、いくつもの小隊が謎の失踪を遂げた。戦争が終わるとハントレスの噂はレッド・フォレストの中に消えた。","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"世の中には、単純に悪の種として存在する人間がいる。純粋で曇りない、真の邪悪で満たされた種。マイケル・マイヤーズはまさにその1人だ。彼は他人を傷つけることに躊躇するどころか、それこそが彼の望むことだった。しかしこのような恐るべき精神の持ち主にとってさえ、人生は時に苦難を伴うことがある。ただし常人との違いは、問題の解決方法だ。<br><br>マイケルの場合、内なる平穏を得るために彼は人を殺す必要があった。彼が姉の命を奪った時、警察はピエロの格好をした大人しい少年を現場で見つけた。広がる炎を見つけた時にガソリンをかける者はいないにもかかわらず、警察は同じことをしてしまった。彼らは少年の身体の中に潜む悪魔がどのような姿を成すか想像できなかったのだ。マイケルを精神病院に送ったのは、彼を救うにはあまりに手ぬるい試みだった。セラピーは効果を成さず、夜な夜な響く叫び声は彼を更に内向的にし、狂気に陥れていった。人々はマイケル・マイヤーズが忘れ去られて封印され、失敗としてすぐに風化することを望んでいた。しかし…その後、彼は脱走してしまう。<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"リサ・シャーウッドは平和な村で育った。人々はとても親切で、年長者達は争いごとを好まず、古い伝統を守っていた。リサは大人たちに教えてもらった安全と幸運を願うおまじないが大好きだった。ある夜、彼女が家に帰るために森の中を歩いていたところ、突然激しい嵐に襲われた。足元が滑りやすい闇の中、リサは転んで頭を打ってしまった。意識が遠のく中、彼女は木々の間から近づいてくる黒い影を見た。彼らが近づいてくると、リサは彼らの顔に飢えた笑顔を垣間見、邪悪な企みを感じ取った。<br><br>彼らはリサを浸水した地下室に監禁した。暗闇の中で彼女は他の囚人たち――傷口が大きく開き、ハエがたかっている――を見ることができた。囚人たちは食人グループの錆びたナイフで肉を切り取られ始めると長くは保たなかったが、なぜかリサは生き延びた。飢餓と肉体が奪われたことにより彼女の腕はやせ細り、手枷に隙間ができるほどであった。リサが腕を引っ張ると、金属が皮膚や筋肉を引き裂いたが、彼女は自由になることができた。彼女の肉からは黄色く粘々した膿が吹き出し、腐った傷跡から骨が見えていた。彼女はもう1歩も動けなかった。錯乱した精神の中、彼女は自分の家――大人たちのことを思い出し、皆が教えてくれたおまじないの印を描いた。その時、血を求める暗い飢餓が彼女の中でうごめき、彼女は復讐を選んだ。<br>警察は、捜索の末に沼にある古い小屋にたどり着いた。住民はバラバラに解体されて貪られており、床には大人たちのおまじないが血で描かれていた。リサの死体は見つかっていない。<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"殺人鬼の邪悪な行いは、病的な精神の衝動によるものなのか。あるいは外的な圧力により追いつめられるが故なのか。これは長い間議論され続けているが、ある1人の殺人鬼は、本性と外因が密かに結びついている。<br><br>レザーフェイスが他者を殺めるのは自身のエゴの強制でも、性的欲求を満たすためでも、頭に響く声を鎮めるためでもない。彼が殺すのは、恐れているからだ。誰かに傷つけられることを、家族に失望されることを、そして人肉を食するという共通の秘密が露見することを恐れているからだ。<br><br>彼は言われたことは何でもやり、家族が自分を好きでいてくれる。それが全てなのだ。よそ者は脅威であり、脅威は排除されなければならないのだ。<br><br>例えば、家に上がり込んできたあの招かれざる少年たちのように。まるで我が家のように上がり込んできた少年たちは家の中を探し回り、家族の秘密を暴こうとした。間違いなく。しかしレザーフェイスは彼らを始末し、家族を守った。皆から教わったように。<br><br>彼はただ家族を守るだけでなく、沢山の仕事があり、それにはそれぞれの「顔」がある。夕食を用意し、家族の面倒を見て、食事には正装で現れる。かつては祖父母が家族全員の世話をしてくれたが、祖父は歳を取り、祖母は動かなくなってしまった。そのため、レザーフェイスと彼の兄たちがその役目を引き継ぐしかなった。彼にとって家族は全てだ。彼にとって家族とは「安全」であり、「安心」なのだ。<br><br>しかし彼が最良を尽くしても、少年たちの1人が逃げ出してしまった。レザーフェイスは少女を止めようと懸命に追いかけたが、助けに入った他のよそ者――邪悪なトラック運転手により彼の兄は轢き殺されてしまった。まるで小動物のように。激怒した彼はチェーンソーを復讐に燃やして運転手に飛びかかったが、彼は素早く、逆に殴り倒されて自らの刃を受けてしまう。<br><br>よそ者たちが走り去るのを見たレザーフェイスは怒り、悲しみ、苦痛、そして彼の家族に降りかかるであろう事態への不安に襲われた。彼らは当然警察を連れて戻るだろう。そして警察は兄たちや祖父を奪っていくだろう。彼ら無くしてレザーフェイスに何ができるというのか？彼らの命令がないと、彼は野垂れ死にするだろう。<br><br>崩れ行く彼の世界で、彼は回り、チェーンソーを振った。彼を覆う無数の外敵を退けるために。<br><br>その時である。レザーフェイスを異なる感情が襲った。それは冷たい戦慄と共に、視界の外から彼の皮膚を這い登ってきた。その時彼は理解した。よそ者が何をしようとも、更に大きい、更に悪しき存在が闇の中に存在することを。彼はかつてない恐怖に包まれたが、それは同時に、彼が家族に抱いていた恐怖と同じ、安らぎにも近いものだった。「失望させてしまう恐怖」である。<br><br>そして彼は、見たことがない場所にいた。しかしそこはどこか親近感があり、自分が何をしなくてはならないかを本能的に理解した。もう、家族を守り切れなかったような失敗は許されない。ここにもよそ者がやってくるだろうが、どのような脅威も排除する。叫び声が響いても、また静寂を取り戻すことができるだろう。この世界に残るのが、尊きチェーンソーの音だけになるまで。<br><br>さぁ、よそ者を迎えよう。","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"類まれなる心理学の才能を示したハーマンは、イリノイにあるCIAの秘密施設、レリーズ・メモリアル・インスティテュートにおける先進神経科学プログラムの受講者に選ばれた。ハーマンはそこでオットー・スタンパー博士と出会い、彼の指導のもと、研究所に送られてきた囚人から情報を引き出すために、奇怪でおぞましさを増すばかりの術式を行うようになった。その施設は敵国のスパイを再教育する機関でもあったのだ。彼が電気痙攣療法を自由に使用した結果は驚くほど優秀であり、国家の安全保障に関わるいくつもの脅威が明らかになった。<br><br>年月が経つにつれハーマンは「ドクター」と呼ばれるようになり、もはや彼が医師免許を持っているのか、あるいは尋問が終わった後の囚人たちに何が起こっているのか誰も気にすることはなくなっていた。そして研究所から1週間応答がなくなった後、ついに恐怖の所業が明らかになった。全ての職員、患者、囚人が、ありとあらゆる頭部外傷を負って絶命していたのだ。オットー・スタンパー博士を含む全ての死体の身元が確認されたものの、ハーマン・\\"ドクター\\"・カーターの消息は不明であった。<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"フレディ・クルーガーは、存命のときでさえ彼の本当の姿を知る者にとっては悪魔の怪物そのものであった。優しさと親しみやすさの仮面に身を隠し、フレディの本性は犠牲者にしか知られることはなかった。犠牲者の声がついに明るみに出ると、スプリングウッドの子を持つ親たちはフレディを追い詰め、自分たちの手で審判を下した。彼らは燃え盛る炎があの鬼畜を焼き尽くし、子供達は安全になったと思っていた。しかし彼の中に潜む悪魔はそれでも生き延びる術を持っていたのである。<br>そして年月が流れ、恐怖は葬られ、犠牲者たちはあえて忘れ去られた。しかしフレディは帰還し、人々の夢は再び悪夢に変貌した。<br>フレディはその怒りを自らを陥れたと感じる人々に向け、最も執念を燃やす存在：ナンシー・ホルブルックに近づいていった。だがフレディは彼女の強さと機知を見くびっていた。ナンシーは友人であるクエンティンと共にフレディを弱体化させ、切り裂き、死んだものとしてもう一度置き去りにすることができた。<br>しかしフレディが最初にその時を迎えたとき、死は彼を受け入れなかった。どうして彼女達は今回はトドメを刺せたと思ってしまったのだろうか？彼は復讐に燃え、三度現れた。そして狙いをあの少年――最大の目標であったナンシーへの道を塞いだ少年に切り替えた。フレディはクエンティンの夢に侵入し、毎晩彼を脅かし続けた。彼の立ち向かう力と身を守る力が尽きるまで。その時が来たとき、彼は少年をバダム幼稚園を暗闇で写し取った世界に連れ去った。彼が復讐を遂げるための場所である。<br>フレディは幼稚園の廊下を渡り少年を尾行した。今回、彼は全ての瞬間を味わいながら少年を追った。特に大気に漂う汗の匂い、恐怖に乱れる呼吸音は彼が最も楽しんだものだ。彼にとって、犠牲者とは弄ぶ存在だったのである。<br>そして長い廊下の終わりに少年は佇んでいた。疲れ果てたのか？恐怖に足がすくんだか？あるいは運命を受け入れたのか？フレディは近づいていく。腕を大きく広げ、爪で壁を掻きながら。爪はパイプをなぞり、金属音が少年の不安を更に煽る。<br>火花が降り注ぎ、タイル張りの床を覆う液体の上に落ちる。その時青い炎が沸き上がり、部屋全体を瞬く間に覆った。<br>激怒したフレディが炎の渦から抜け出すと同時に少年は逃げ出した。しかし、部屋や壁は一瞬でぼやけて消えていった。フレディの地下室にいる限り、そしてこの世界にいる限り、逃げ出す術はないのだ。<br>フレディはゆっくりと少年に近づいていく。少年の恐怖は極限まで高まり、フレディはそれを肌で感じるほどであったが、その両目は称賛に値するほどの挑戦的な憎悪で未だ燃え盛っていた。<br>フレディは爪を下ろした。<br>その瞬間、フレディは何か他の存在を感じた。旧く力強い、闇に覆われた何かである。瘴気が彼を包み込み、感じられるのは遠くの何処かで木製の梁がたわみ、軋む音だけだった。金属と金属が衝突したような唸り声が反響する。それは理解し難い未知の、言語と純粋な恐怖の中間にあるものであった。<br>落下しながら回転するような感覚を経て、フレディは再び幼稚園にいた。しかしそこは既に彼のものではなかった。外見は同じだが、何かが違う。彼の能力は歪められ、他のことに注がれるようになっていた。少年はいなくなってしまったが、他の獲物が廊下を歩いている。大したことがない者もいるだろうが、新たなお気に入りとなる者もきっといるだろう。全ては彼の爪のもとに倒れるのだ。","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"「ジグソウ」の名で知られるジョン・クレイマーは、中国の干支で「亥（豚）」の年に息子が生まれるよう計画していた。豚は豊穣と再生の象徴であり、彼と妻の新たなる門出、そして息子の輝かしい人生の始まりとして相応しいと考えていたのだ。だがその計画は、妻が働いている病院に麻薬中毒者が強盗に入った夜に打ち砕かれた。<br><br>この事件の結果、妻は流産した。ジョンは最終的に麻薬中毒者を捕らえ、最初の被験者とした。そしてその「豚」も、永久に変わったのだ。それはジョンを内側から腐らせる病気の象徴に変わり、また人間は単なる肉に過ぎず、行動を通じて自らを高め、死地から己の人生を掴み取らなければならない、という備忘となった。<br><br>ピッグは器となり、被験者をテストへと運ぶ、ジグソウの代理人となった。ピッグは、「ゲーム」に勝利した者たちの一部にとっては依然として、ジグソウの弟子、果ては後継者としての新しい人生へと導いた、再生の象徴だった。<br><br>アマンダ・ヤングもその一人だった。トラブルに巻き込まれどん底に落とされた彼女の人生は、自身と周囲の人間への害悪にあふれていた。ジグソウのテストに直面し、生還したことで、全ては変わった。自分の命にも価値はあると確信した彼女はジグソウの思想の信奉者となり、ジグソウが癌で死んだ後はその後継者となる意志を固めていた。<br><br>だが彼女は、ジョンの死が差し迫っていることへの苦悩と、被験者達がゲームのるつぼの中で己を救い、再生することなどできないという思い込みから、よりジョンに依存していったのだ。<br><br>それを見て取ったジョンは彼女に新たなゲームを仕掛け、彼女がもう一度己を救うチャンスを与えたのだが、アマンダは私怨や制裁願望から行動することを止められなかった。彼女はテストに失敗し、その結果射殺された。<br><br>タイルの床で血の海に沈んだ彼女の視界を闇が包み込み、そこでは木のきしむような音がした。次の瞬間、彼女は森にいて、再び豚の目を通して世界を見ていた。木々が彼女を取り囲み、その枝があらゆる角度から襲い掛かる。パニックの波に襲われながら、彼女は仮面の中で自分の呼吸が反響する音を聞いた。<br><br>彼女は地獄に落ち、呪われて、この姿で過ごし続けなければならなくなったのだろうか？それとも、これも新たなテストなのか？それとも、彼女は「ゲームオーバー」になってないのでは？ジョンはいつも、他の誰よりも一手先を考え、あらゆる結果に備えた計画を立てていた。それに彼が彼女を見捨てるはずがないだろう。<br><br>ジグソウはこの世を去ったかもしれないが、彼は彼女を別の存在に預けたのだ。そう、彼女がピッグとなって仕えるべき存在に。<br><br>そして今、彼女は自分の下した決断が正しかったと確信している。ゲームの時間は終わった。彼らの誰にも、チャンスなどなかった。彼らは肉で、肉は死ぬことを定められていたのだ。","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"1932年、ケネス・チェイスは難産の末に誕生したが、その時に母親を失った。この出来事は彼と父親との間に埋まることのない溝を生むことになる。ケネスが成長していくにつれ、父の恨みの感情と酒癖も悪化していった。ケネスが学校に通う頃になると、二人はほとんど別々の人生を暮らし始める。<br><br>学業の面では、彼は凡庸だったが、運動能力は秀でていた。身長が高く、力も強くなり、トラック競技を得意としていたが、彼はどんなチームスポーツへの勧誘も拒み続けた。<br><br>学校からの帰り道、ケネスはよく地面に落ちている羽を見つけ、やがてコレクションを始め、集めた羽を葉巻の箱に入れてベッドの下にしまうようになった。父親は仕事に出ているか、酒で意識を失っているかのどちらかであるため、ケネスは何時間も一人で過ごしては、羽の軸から生える羽毛の規則性や、唇に当てた時の柔らかい感触に魅せられていた。庭のバードフィーダーにやってくる鳥を見ながら、彼はその鳥たちがどれだけ柔らかいのか想像し、一匹捕まえようと心に決めた。ケネスは地元の歯科医に取り入り、麻酔薬を手に入れた。自分の手で触れるように鳥を気絶させるために、彼はその麻酔薬を使ってフィーダーに罠を仕掛けた。<br><br>何度かの失敗の後、ケネスは一羽のロビンを捕獲した。手の上に横たわる鳥…。その命は自分の意のままなのだ。突然、彼は感情のほとばしりを感じた。麻酔薬が切れた時、彼はそれを逃がしてやるつもりだった。だが、目をピクピクさせて意識を取り戻したロビンがもがき始めた時、ケネスは握っている手の力を緩めなかった。彼の指がロビンの喉の周りをゆっくりと締め付けていき、ついには胸の羽の動きが完全に止まってしまう。ケネスは死骸を処分し、1本の羽だけ取っておき、古い『偽り』のコレクションを捨てて、新しいコレクションを始めた。<br><br>1940年代の後半、ケネスは学校をやめ、地元の食堂で給仕として働き始めた。そして、彼の獲物はリス、アライグマ、犬など、より大きなものへエスカレートしていき、それぞれの麻酔薬の調節にも熟達していく。<br><br>1954年の前半、一人の若者が行方不明になり、町をひっくり返しての捜索が行われた。その2、3か月後、家の床下で作業をしていたケネスの父が葉巻の箱を見つけた。それをこじ開けて彼が見た驚愕の中身は、鳥の羽、動物の足…そして、人間の指だった。<br><br>仕事から戻った時、ケネスは父が葉巻の箱を持って床下から出てくるのを目にした。彼は踵を返して立ち去り、二度と家には戻らなかった。<br><br>数週間、厳しい生活を続けた後、彼は旅回りのサーカス団に出会い、その並外れた力の強さからロープを扱う仕事を与えられた。この時から、彼は新しい名前、ジェフリー・ホークを名乗るようになる。<br><br>突然、緊密な集団の中に身を置くことになった『ジェフリー』は、社交することを覚えなければならなかった。彼はまるで変装するかのように、新しい人格を身に着け、すぐに魅力的で頼りになる男として、新しい仲間に受け入れられた。<br><br>その後の10年間、ジェフリーはサーカス団の一員として、アメリカ中を旅した。しかし、そのような巡業生活の弊害から、彼は悪癖に陥り始める。酒、ジャンクフード、ドラッグ…彼はそのすべてに耽溺した。しばらくの間、これらの悪癖は彼を満足させていたが、やがてかつての衝動が戻り、流浪者としての彼の存在は、再び殺しを始めるための隠れ蓑となった。ジェフリーはサーカス芸人の衣装とメイクを盗み、変装を施して犠牲者たちに近づき、彼らを麻酔薬で眠らせて自分のキャラバンまで運び込んだ。縛られてどうすることもできない犠牲者が目を覚ました時、ようやくジェフリーの楽しみが始まる。彼らの叫び声に煽られるかのように、彼は精神的、肉体的に責め苦を与え、やがて彼らは夜の中に消え失せていく。<br><br>犠牲者の力が最も弱まった時、ジェフリーは一番きれいな指を注意深く探し、一番おいしい指を見つけるために自分の舌の上に当てた。最高の指を見つけると、彼はそれを手から切り落として、誇らしくコレクションに加え、死体は値打ちのない廃物として処分した。<br><br>老若男女…彼は選り好みしなかった。良いコレクションの本質とは、多彩さであり、そのものにまつわる記憶や物語なのである。<br><br>彼が衣装を脱ぐことは徐々に少なくなっていき、同時にかつての自己も捨て去り、道化師の人格を完全に本当の自分として受け入れるようになった。<br><br>そのうち、ジェフリーは不注意でぞんざいになった。彼が酔っぱらって寝ている間に、一人の犠牲者が拘束をほどき、助けを求めて叫びながら逃げ出した。彼が目を覚ました時、サーカス団の者たちが彼に迫ってきていた。彼は馬に鞭を打ち、彼のキャラバンは夜の中へ消えていった。<br><br>その後、彼は寄生虫のようにカーニバルやサーカスについて国内を放浪したが、彼の名前が興行のビラに載ることは決してなかった。彼は自分に近づく勇敢な（そして愚かな）者たちを罠にかけ、彼らが行方不明として捜索される前に、次の場所へと移っていった。<br><br>旅の途中のどこかで、ジェフリーはアメリカの普通の道路から外れ、霧のベールを潜り抜けて、新たな世界に足を踏み入れていた。そこははかない無常の地であり、彼が選んだ人生には最適の場所だった。かつて得たことのない自分の居場所に彼は野営を設置し、最初の訪問者を待ち受ける。","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"凜は山岡家の一人娘だった。彼女が育ったのは、香川県にある昔ながらの寂れた家屋。凜は私立の高松大学で教育学を学んだが、傾きかけた家計にとってこれは重い負担となった。また、同年に母親が病気になったことで、借金はどんどんと膨れ上がった。凜は少しでも家計を救おうとバイトに励んだが、負債額が減ることはなかった。<br><br>日々増えていく借金。凜の父親は、その状況を打破すべく、勤務時間を倍にして働き始め、昇進を目指した。しかし、その頃から彼は睡眠不足に悩まされるようになった。絶望的な状況を突きつけてくるような悪の囁きに毎晩うなされるようになったのだ。疲れ果てた彼は現実感を失い始めた。夜に聞く囁きに負けてしまわぬよう、凜の父親はついに救いの手を求めた。上司のもとを訪れた彼は、今の状況を説明し、ボーナス、前払い、休みなど、あらゆるものを乞うてみたのだ。<br><br>しかし、彼の要求は拒否された。彼の働く会社は、その頃、製品ラインの一部に欠陥が見つかり、甚大な損害を出していた。誰かが責任を負わざるを得ないその状況で、凜の父親に白羽の矢が立ってしまったのだ。結果、彼は22年間勤め上げた会社から呆気なく解雇された。<br><br>その晩、凜は仕事を終えて帰宅した。いつもレストランに遅くまで残っては、客の相手をしていたのだ。自転車を倉庫に止めていると、屋内から母親の悲鳴が聞こえてきた。<br><br>凜は家に駆け込み、階段を登って両親の部屋に向かった。床には、母親のバラバラの死体が散らばっていた。すっぱりと切り落とされ、不自然に絡まりあう手足。切り開かれて胸郭が飛び出た胸部。凜は思わず吐きそうになった。<br><br>その時、凜に向かって鋭い刀が振り下ろされた。とっさに刃を腕で食い止めた凜。剥き出しの前腕に刀が刺さったが、目の前の衝撃的な事実に、痛みなどどこかへ吹っ飛んでしまった。険しい表情で刀を手にしているのは他の誰でもない、父親だった。彼を止めようと思った凜は大声で叫んだが、父親は再び彼女の腕を切りつけた。<br><br>慌てて逃げ出そうとした凜は、床に飛び散った血で足を滑らせてしまった。戸の枠につかまり、凜が立ち上がると、刀は壁を突き破り、彼女のもう一方の腕を裂いた。凜は苦痛に叫び、廊下へとよろめき出たが、再び父の刃が襲い掛かってきた。<br><br>彼女は震えながら、切られた柔らかな腹部を抑え、後ずさった。母親の絡まり合った四肢の映像が脳裏をよぎる。<br><br>その瞬間、凜は父親に突進し、彼を後ろによろめかせた。それでも父親は、凜の切り裂かれた腹部を殴りつける。あまりの痛みに倒れ込む凜。彼女が必死に立ち上がろうとすると、父親は今度は彼女の腿を切りつけ、彼女を床に倒れ込ませた。<br><br>凜が階段の方に這っていこうとすると、父親は彼女の髪をつかみ、彼女の頭を障子に突っ込んだ。その衝撃でガラスも割れ、彼女は障子を突き抜けて1階まで落ちてしまった。<br><br>上の階から聞こえてくる足音。凜は必死に動き、割れたガラスだらけの床を這っていった。ガラスの破片が体に食い込み、肉を裂く。「父親を止めなければ。」そう思った凜。彼女や母親へのこの仕打ちを絶対に許すわけにはいかなかった。<br><br>吐血する彼女の顎をガラスがかすめ、さらに血が流れた。凜の耳には、だんだんと低い心音が響き始めた。体はあまりにも重くなり、もはや動くことはできなかった。<br><br>父親の足音で揺れる地面。彼女はもう自分が助からないと分かっていたが、そんなことは問題ではなかった。今世であろうと来世であろうと、彼女は必ず復讐を果たすことを心に決めた。<br><br>暗い霧がゆっくりと彼女の目を覆ったが、それは彼女の憤怒を鎮めることはできなかった。死なない――まだ死ねない。流血と復讐を約束するように、闇がそう囁いた。<br><br>そして心に誓いを立てた凜は、ゆっくりと目を閉じた。","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"19歳のフランク・モリソンは、何かで成果を出したことはほとんどなかった。観客席に審判を押しのけたことでバスケットボールチームをクビになると、学校も不登校になってしまった。明るい未来を築く見込みのあるフランクだったが、子供の頃は暗い少年時代を過ごした。6歳の時にカルガリーから連れ出されると、里親の家をたらい回しにされた。何度も食ってかかり、癇癪をおこしては喧嘩をしたが、その度に新しい、知らない里親の家へと送られた。最後の養父となったクライブ・アンドリュースが養子センターからフランクを連れ帰った時は、フランクにとって3年ぶりの引っ越しだった。2人は7時間もかけてオーモンドにある小さなバンガローにたどり着いた。それは2人で共に過ごした一番長い時間だったかもしれない。クライブは福祉施設から受け取った小切手をバーで酒と交換するのに忙しかったからだ。<br><br>オーモンドはこじんまりとした寂れた町だった。人口6,000人の都市部から離れた町で、1年のほとんどが陰鬱な冬だった。フランクは別の養父母を見つけようとあらゆる手段を尽くしたが、ある美しい少女との出会いによって気持ちが変わった。ジュリーという名のその少女は、いつかオーモンドを出てマシな人生を送ると決めていた。町の外から来たフランクを、ジュリーは外の世界へ出るために利用しようと考えた。ジュリーが開いたパーティーに参加した時、来ていたのは皆年下で、フランクは簡単に好印象を与えることができていい気分になった。パーティーでは、衝動的な性格で自慢屋のジョーイ、そしてジュリーの親友である内気で無邪気なスージーに出会った。<br><br>彼らはよく、オーモンド山にある廃墟となったロッジに出かけていった。友達と共に過ごすことで、それぞれが毎日続くちっぽけで退屈な生活から逃避できた。フランクにとっては、自分たちの経験不足を何か強力なものへと変えるチャンスでもあった。毎晩のように酒を飲み歩いては大騒ぎし、自分たちの限界を試した。暴行、破壊、窃盗。どれも週末には欠かさず計画した。やがて、皆はフランクのあらゆる要求を実行するまでになった。仮面をつければ、そこには限界など存在しなかった。ある晩、フランクは自分がクビになった店を破壊するようジョーイにけしかけた。彼らは閉店後の誰もいない店内にたやすく侵入した。ところが、まだ店に残っていた清掃員がジュリーに気がつき、近づいたとたんに捕まえた。ジュリーの苦しそうな叫び声を聞いて黒い衝動に突き動かされたフランクは、助けようとナイフをためらいなく清掃員の背中に突き刺した。<br><br>フランクはショック状態に陥って自分を見つめる仲間に向かって、仕事を終わらせろと命令した。ジョーイは歯を食いしばってナイフをつかみ取り、流血する清掃員の脇腹を刺した。スージーが拒否すると、フランクが怒鳴りつけた。始めてしまったことは終わらせなくてはならない。ジュリーは目を閉じてその男の胸にナイフを突き刺し、血で濡れたそのナイフをスージーに手渡した。今や全員が共犯者なのだ。フランクは不信の眼差しでジュリーを見るスージーの震える手をつかみ、そのまま男の喉にナイフを深く差し込んだ。フランクは急げと命令した。彼らは血塗れの床にモップをかけ、ジョーイの車のトランクに死体を押し込むと、オーモンド山へ向かった。<br><br>4人が全員で死体を捨てようと泥まみれの雪を掘っていたその時、フランクが森を移動する何かに気づいた。フランクはナイフをつかんで仲間の元を離れ、様子を見に向かった。すると、周りに濃い霧が立ちこめ、あっという間に先が見えなくなった。足跡をたどって道を引き返そうとした時、フランクの前に突如不吉な小道が現れた。フランクはまるで闇に呼び寄せられるかのように、その不気味な道を進んでいった。ジュリー、スージー、ジョーイが掘る作業を終えると、フランクの姿がないことに気がついた。ジュリーがくっきりと雪に残された泥の足跡を見つけると、3人は足跡をたどり、森の奥深くへと入っていった。その夜、ジュリー、スージー、ジョーイが家に戻らなかったので、彼らの両親はフランクと一緒に家出をしたのだと考え、それぞれの親がそれぞれの説を唱えた。しかし、オーモンド山の廃墟のロッジで死体が発見されると、町の雰囲気は一転した。","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"7人家族の中で一番幼かったアディリスは、5歳の時、バビロン中心部にある浄罪の神殿の、赤レンガの焼け付くような階段に置き去りにされた。神々の意思が介在しているのだと信じることで、アディリスはその衝撃と悲しみを乗り越えようとした。新しい生活はひっそりとした奴隷のような状態だった。アディリスは庭園の手入れを行い、儀式の食事を準備し、儀式に使う香炉を磨いた。夜になると、自らの存在理由を啓示してくれるであろう奇跡の出現を求め、神に祈った。<br><br>成人したアディリスは高位の司祭に随行し、水と創造の神である山羊座の、年に一度の礼拝に参列した。大列柱室で吊り香炉を揺らすと、分厚い黒い煙が広がっていく。それは冷たくそびえ立つ、石の屋根にまで届き、散り散りになって消えた。悩みが取り除かれ無上の幸福感を覚えたアディリスは、自分がこれまでになく神々に近づいたと感じた。アディリスは来る日も来る日も身を粉にして働いた。自分の務めを果たす一方で新しい仕事を受け、浄化の儀式では司祭を補助した。<br><br>司祭はますます多くの助けを必要としていた。神殿の高壁外からの求めにも応じるため浄罪は毎日行われたが、神殿の外では災厄をもたらす疫病が再び猛威を奮っており、数カ月もすると、司祭たちも疫病に罹患した。間もなく司祭たちは衰弱し、儀式を執り行えなくなった。唯一儀式を続けることができたのは、浄罪の儀式を何度も手伝っていたアディリスだけとなってしまう。混乱が勢いを増すなか、たとえ自分が未熟な儀式者であったとしても、止めなくてはならない。<br><br>最初の儀式を前に不安になっていたアディリスは、司祭の聖所を訪ねる。アディリスがロウソクに火を灯すと、奥のほうに狭い通路があることに気がついた。その隙間を進むと、アディリスは聖所の地下に隠されていた穴蔵を発見した。その部屋に何もなかったが、唯一、両腕を広げ、指に宝石を嵌めた黄金の女性像が立っていた。それはアディリスがずっと待ち望んでいた奇跡であった。<br><br>信者で埋め尽くされた大広間にアディリスが入っていくと、全員が頭を垂れた。アディリスは煉瓦作りの祭壇へと大股で歩いていき、銀で作られた儀式の短剣を握りしめた。ルビーの指輪を嵌めた指が、かぎ爪のように刃の周りを包み込む。突如現れたその高貴な存在に信者は興味を惹かれる。信者はすでにアディリスの若さと美貌に目を見張っていた。<br><br>アディリスが創造の叙事詩の暗唱を始めると、背後にいた女性が気を失い、その場に倒れ込んだ。アディリスが駆け寄ると、その女性の足を黒い水膨れが覆っていることに気がついた。躊躇することなくアディリスは神聖な短剣を握り、自らの足に向けて振り下ろし、足の指を切り落とした。アディリスは血に塗れた体の一部を神々に奉じ、その女性を守るよう神に祈りを捧げた。信者の間に沈黙が広がる。信者たちはアディリスを新たな女司祭として崇めていた。<br><br>アディリスの富、美貌、そして献身の物語は疫病と同じくらい素早く街に広まり、間もなくして信者たちはアディリスをバビロンの女祭司長と呼ぶようになった。<br><br>だが、アディリスの信仰心は試されることになる。感染初期の兆候が現れたのだ。痰と血の混じった咳をするようになり、首には発疹が吹き出して膿瘍ができ、指が四本となった足は黒ずみはじめた。自らの容貌を恥じたアディリスは、ヴェールの付いた頭飾りを被りはじめ、疫病が原因の皮膚から漂う悪臭を隠すために吊り香炉を持ち歩いた。助かる望みを捨てることなく、アディリスは儀式を続け、祝福の水や食べ物を信者たちに与えた。<br><br>しかし、どれほど儀式を執り行っても、アディリスの症状は回復しなかった。躍起になり神への嘆願を試みる中、アディリスは街から姿を消した。少数の信者を伴い北へ向かったアディリスは、冷たいウラルトゥの森林地帯を抜け、歩けなくなるまで旅を続けた。<br><br>一行が野営を行なったじめじめとした洞窟の中で、アディリスは自らの吐瀉物の中で横たわっていた。黒変した足は腫れ上がり、これ以上遠くへ行くことはもはや不可能だった。洞窟の中で、アディリスと信者たちは全員が疫病に感染していることを悟る。<br><br>アディリスは吐き気に苦しむ信者の中でひざまずくと、最後の祈りを捧げた。湿った空気の中に立ち上る香の黒い煙を、冷たい風が吹き飛ばしていく。<br><br>アディリスの骸や信者の骸はどこにも見つからなかった。多くの者がアディリスの帰還の物語を語ったが、バビロンの女司祭長に降りかかった運命は、誰も知らない。","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"ダニー・ジョンソン、またの名をジェド・オルセンというその男は台所のカウンターから新聞紙をひっつかんだ。1週間も前の新聞だが、第1面に載っているダニーの顔は画質が粗く、表情は沈み込んでいた。ありふれたフロリダの蒸し暑い午後だった。熱気と湿気がキッチン中に広がり、じっと立っている間にも汗が流れ落ちてくる。ダニーは猫背になって湿った椅子に座り、新聞を読み始めた。記事の出来は期待できる。ローズビルでの仕事は素晴らしかった。<br><br><i><b>1993年6月18日</b><br><br>ゴーストフェイス、跡形もなく姿を消す<br><br>一見すると、ジェド・オルセンは多数の小さな新聞社で経験を積んだ、謙虚で熱心なフリーランス記者だった。ローズビル・ガゼットのスタッフは穏やかで誠実そうなジェドの人柄を評価し、面接開始から5分もしないうちに打ち解けていた。<br><br>「ジェドはすぐに部屋にいるチーフエディターを見つけると満面の笑顔で笑いかけ、固い握手を交わし、古き良きアメリカの価値観について語り始めた。そんな風に奴はここに入ってきた」—ローズビル・ガゼットの元寄稿者<br><br>オルセンはユタ州からペンシルバニア州の小さな町をいくつか転々としていた、変わった自分の経歴に関して何の弁明もしなかった。前職を証明するものが何もなかったからだ。オルセンのポートフォリオはまともだったし、態度も良好、それにローズビル・ガゼットは寄稿者をすぐにでも必要としていた。<br><br><b>ローズビル連続殺人</b><br><br>オルセンがローズビルの新聞社で働き始めて5か月後、ローズビルで殺人事件が起きる。若者から老人に至るまで、犠牲者を自宅で刺殺するという連続殺人だった。報告によると被害者は無作為に選ばれていたようだったが、殺人犯は被害者宅の勝手を把握しており、遺体の複数の刺し傷が個人的な動機を示唆していた。DNAの痕跡は発見されず、地元警察は困惑した。犯行は痴情のもつれと同種の、怒りに任せた殺人でありながら、あらかじめ冷徹に計画されたものだった。<br><br>殺人犯は標的を執拗につけ狙うことを好んだ。犠牲者の2人は死の数日前、帰宅途中に黒っぽい人影に後をつけられていたという。犯人は犠牲者をローズビル北部の小さなバー「ウォールアイ」から尾行し、自宅にいる被害者の写真を撮り、侵入経路を探した。同じ犠牲者を何週間も監視し、日常習慣や行動パターンを細かく記録していた可能性があった。殺人衝動が抑えられなくなると、リストの中からもっとも狙いやすい犠牲者のもとを訪れ、静かに家に侵入した。<br><br>新聞社では記者全員がローズビル殺人事件の話題を追った。オルセンはたびたび犠牲者の遺族のところに取材に出向き、警察の公式発表を伝えた。当時は誰も知らなかったが、オルセンが関与したことで最終的な犠牲者の数は増加した。<br><br><b>ゴーストフェイス</b><br><br>夜にフードをかぶった人影が住宅に侵入する映像をオルセンが制作すると、ローズビルの人々はパニックに陥った。闇の中で白く不鮮明に映るマスクをつけた顔が、一瞬カメラを見つめ、家の中へと消える。―ゴースト、カメラに捉えられる―それがオルセンの書いた記事の表題だった。その時、オルセンは自分の仕事を誇りに感じ、「ゴースト」の話に恐怖する街を見て楽しんでいるようだった。<br><br>数週間後、オルセンは仕事場の机の上にメモを残して姿を消した。<br><br>「記事は気に入ってくれたかな。物語を現実のものにするのは楽しかったよ。残念に思う必要はない。物語にはまだ続きがあるからな」―ジェド・オルセン<br><br>ジェド・オルセンが逃亡中という理由で、ローズビル警察は依然としてコメントを拒否している。</i><br><br>ダニーは笑うと、新聞紙から記事を破りとった。捜査機関がダニーを追っていたその時、すでにダニーは荷物をまとめ、迅速にローズビルを後にしていた。<br><br>ダニーが起き上がると、ベトベトした椅子に肌が張り付いた。耐え難いほどの湿気を感じながら寝室へ入っていく。結露が湿気で曇った小窓へ垂れ落ち、破れた壁紙が剥がれてぶら下がっている。花柄模様のその壁紙は、不気味な写真や新聞の見出しで覆われている。ダニーは引き裂かれた頭皮の写真の上に、1週間前の記事を押しピンで留めた。空腹によるわずかな胃の痛みを感じ、最後に食事を取ったのはいつだったかと考えた。今朝、ナイフと服を洗っている時？それとも昨晩、街で少女を付け狙った後だったか。はっきりとは思い出せなかった。<br><br>ダニーは1歩下がると、壁に貼った自分の作品に見惚れた。心を空っぽにして、自分の書いたすべての記事や練り上げた物語、そして実現させた場面の数々を思い浮かべた。<br><br>身体に震えが走る。寝室に吹き込んだ冷たい風が湿気を冷やし、不透明で凍りつくような霧が現れた。女の金切り声が上がり、ダニーの足元で落ち葉がカサカサと音を立てる。<br><br>ダニーは期待に胸をはずませて微笑んだ。 ","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"顔にあたる部分には、針状の牙がびっしりと生え揃った花弁のような口、犠牲者を襲うための曲がりくねった鋭い爪と強靭な脚。このような外見から、デモゴルゴンはいかなる次元においても恐ろしい怪物たる存在だ。それはまさに原始の怒りを持つ解き放たれた悪夢であり、狩った獲物をバラバラに引き裂きその血肉を一片も残さず貪り食う。この怪物には慈悲や自制心など存在しない。犠牲者を襲う時には、ためらいや容赦などを一切見せず、純粋な血への渇望のままに死を振りかざす。紛れもない狩人であるデモゴルゴンは、裏側の世界に潜む恐怖の証そのものであり、それがエンティティの目にかなった理由でもある。","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"山岡崋山はその家名に敬意を示すだけでは満足しなかった。父の名声を超えたかった彼は、侍になりすます農民たちのせいで侍文化が廃れていくのを目の当たりにし、なんとかそれを止めたいと考えていた。父親は彼の意識を貴族として生きることに向けようとしたが、崋山はそれを拒み、父の刀を借り受けて闇の巡業を行うようになった。自らの価値を証明するため、そして日本からニセ侍を排除するために。教わった規範を無視し、崋山は丘や谷、海辺や森林にいたニセ侍たちを殺害した。その殺し方は残忍で冷酷、かつ病的なものだった。彼は農民も武士も関係なく髷を引っ張りまわし、装甲をはぎ取って屈辱を与えた。その怒り、流血への欲求、そして歪んだ名誉は、とどまるところを知らなかった。僧侶たちは、彼が異世界から来た闇の何ものかにとり憑かれていると考え、ののしった。一方で領主は彼のことを憤怒の侍「鬼の山岡」と呼び始め、それは崋山だけでなくその一族をも侮辱することとなった。<br><br>家名の名誉を取り戻すと心に決めた崋山は、自分を「鬼の山岡」と呼ぶ者を片っぱしから惨殺するようになった。侮辱を受けて彼は戸惑った。最善を尽くしてニセ者を打倒し、彼らを追い出すことで侍階級を浄化したのに。なぜ皆は自分を鬼と呼ぶのか？戦地へ赴き、最強の武士たちを斬り捨てたから？それとも金棒を携え、それで何百もの頭蓋骨を叩き潰したからか？あるいは、倒した相手から必ず戦利品を奪い取っていたためだろうか？理由が何であれ関係はない。鬼と呼ばれるのは、とても耐えられることではなかった。そして彼の頭の中で不穏な声がささやきかけた。お前の名を冒涜した領主を叩き潰せ、と。<br><br>領主の町にたどり着いたとき、崋山は不意に自分の目の前に侍が立っていることに気づいた。整備されていない道の上で、彼の行く手を阻んでいる。カザンは自分の金棒を構えた。一言も発することなく、その侍は攻撃を仕掛け、すぐに優位に立った。しかし、その男は躊躇した。壊滅的な一撃で崋山はその侍の頭を兜もろとも粉砕した。倒れたその侍に近づいて目にしたのは、父の顔だった。彼はよろめいて後ずさり、尻もちをついた。もはや虫の息の父親は、恥ずかしさと後悔の混じったような目で崋山を見つめた。目を閉じ、カザンは苦しみの雄叫びを上げた。その声が出なくなるまでずっと。そして再び目を開けると…父は息絶えていた。崋山は父親を殺し、そのうえ盗人どもがその装甲を求めて遺体を盗んでいくのを容認した。<br><br>苦痛と喪失感、そして幻滅。崋山はその地をあてもなくさまよった。頭の中で父の声が響く。彼を嘲るその声に、自分が不出来な息子であるということを思い知らされ、彼は手のつけようもない暗黒の怒りの中に身を落としていた。ある日、森の中を歩いていた崋山は偶然にも鬼の像を見つけた。彼は立ち止まり、しばらくの間ただじっとその場に立ち尽くしていた。雨風にさらされ、雑草に覆われたその像は彼をあざ笑っているかのようだった。自らが壊滅させようと躍起になっていたニセ侍に、自分がまさになっているではないか、と。その笑い声を頭から振り払いながら、崋山は自分のことを「鬼の山岡」と嘲笑した領主のことをぼんやり思い出していた。<br><br>怒りを再燃させた崋山は、領主が住む雪深い山の高地にある町へと向かった。十数人の侍が町の入り口でカザンを待ち受けていたが、崋山の金棒に倒れた。彼のスピードと強さに匹敵する者はいなかったし、彼の怒りは理解不能だった。血や血塊を浴びて戦いながら町の奥へと進み、崋山はすぐさま屋敷に身を隠している領主を探し当てた。領主を書斎から引きずり出すと、腱を斬って動きを封じ、領主が犬のようにもがきながら彼に許しを乞うのを見ていた。崋山は躊躇せず領主の口めがけて拳を叩きつけると、彼の名を冒涜したその邪悪な舌を引き抜いた。<br><br>満足した崋山が屋敷を出ると、数十人の農民たちに取り囲まれた。錆びた鎌、鋭い三つまた、重いこん棒を手に振りかざしている。最初の数回の襲撃は免れたものの、相手は圧倒的多勢であらゆる方向から攻撃を仕掛けてきた。ほどなくして地面に倒れた崋山は、だんだんと暗くなっていく冷たい空を眺めていた。空は、無関心といった様子だった。農民たちは、自分たちが慕っていた領主を惨殺した「鬼」を代わるがわる貫き、責め苦を与えた。暴徒化した農民たちは崋山を小さな石臼の中に引きずり入れて拷問を続け、最後には放置して、ゆっくりと苦痛に満ちた死を与えた。彼らが戻ると、石臼は奇妙な黒い霧で満たされ、崋山の体と金棒はどこにも見当たらなかった。それは、町に出没する、憤怒する鬼の闇伝説の始まりだった。    ","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"カレブ・クインは、裕福でないアイルランド移民の息子としてアメリカ中西部のほこりだらけの荒れ地で生まれた。辺境の地では病気、飢餓、そして死が当たり前の光景で、富豪たちが宴に明け暮れる一方で、開拓者たちはどんなくず鉄でさえ手に入れようと争っていた。カレブの父親はかつてエンジニアだったが、どこも「アイルランド人はお断り」と門前払いされ、働き口を選ぶことなどできなかった。ある日、カレブは何年も使われていなかった父親の古い道具を見つけた。息子が商売に興味を持っていることを知った父は、古いレンチを彼にあげたのだった。 \\n\\n父親の教えを受けながら、カレブはユニークな応用を生かした装置を作ったが、父親がいない時に彼はそれを残忍な道具に変えていた。有刺鉄線の針で人間の目をえぐり、眼窩から引き裂くマスクを密かに作ろうとしていたのだ。マスクの図案には、自分をいじめた少年たちが装着した様子が描かれていた。\\n\\n成長するにつれカレブのエンジニアとしての能力は市場に通用するレベルに達し、雇用主側も差別を忘れ注目した。そして、彼はユナイテッドウエスト鉄道のオーナー、ヘンリー・ベイショアに雇われた。 \\n \\nカレブはまず、線路の犬釘を地面に打ち込む銃を開発し、その次に蒸気駆動のトンネル掘削機を作った。ところがベイショアが無関心だったせいで、それらの機械は他の会社から発売されてしまう。カレブから特許が盗まれ売り渡されていたのだ。\\n\\n覚えのある感覚が蘇ってカレブの血の中を駆け巡り、心臓に鋭い痛みを与えた。今でも自分はクズ鉄を手に入れるために必死なのに。金持ちは自分の知的労働から利益を搾取している。怒りに圧倒され、彼はベイショアのオフィスに飛び込み、顔が血まみれになるまで殴りつけた。引き離された彼は上司の腹に特殊な銃を押し付け、引き金を絞った。線路の犬釘が皮膚と内臓を突き抜け、ベイショアはデスクに釘付けになった。\\n\\nカレブが絞首刑にならずに済んだのは、意外にもベイショアが一命を取りとめたからだ。 15年間、カレブは全国で第一号の私設刑務所であるヘルシャー刑務所に収監された。教養のない囚人だらけの要塞で、彼は学のある刑務所長と親しい関係になった。普通ならあり得ないことだ。カレブは刑務所長のために拷問装置を設計し、見返りに他の囚人より多くの食事を与えられた。しばらくすると、刑務所長は彼の減刑を提案してきた。所長は金銭的富よりも大きなもの、つまり政治的資本について語り、自分のコネクションを使えばベイショアを陥れて一生檻の中に入れることができると言った。彼の要求はただ、彼を金持ちにし、監獄を満員にすること。独創性を発揮して無法者たちを生きて監獄に連れてくることだった。\\n\\n自分の仕事場に戻ったカレブは、少しばかりの改良を加えて新しいスピアガンを作った。最初に試したのは中国人のクリーニング屋が襲われた時だった。チャンスとばかりにカレブはそのプロトタイプを持ち出した。金属のジョイントが甲高い音を立てると、ターゲットの腹を犬釘がえぐった。そして犬釘を引くと泥棒の腸が引っかかり、とんでもない音を立てながら埃だらけの道に引っ張り出された。\\n\\n数回繰り返した後、取り出すはらわたは減っていった。刑務所長が裏で画策し、アイルランド人の囚人を釈放してカレブの元に送った。ヘルシャーギャングの誕生である。\\n\\n刑務所長との約束を果たすため、一味は6年間全国を渡り歩いて、刑務所にブチ込む指名手配犯を追い続けた。グレンベールでの血みどろの戦いの後、ある新聞の見出しがカレブの目に留まった。そこには、「ヘンリー・ベイショア、ヘルシャー刑務所を買収」と書かれていた。写真の中では、醜い顔になったベイショアが誇らしげに刑務所長と握手をしていた。カレブの心臓は怒りで打ち震え、静脈が破れんばかりに憤怒の血が駆け巡った。彼は、金持ちのゲームの駒に過ぎなかったのだ。\\n\\nヘルシャーギャングはカレブへの忠誠を誓い、刑務所長の首を取ろうとした。彼らはものすごい勢いで刑務所の入り口を突破し、血に飢えた略奪者のように叫んだ。看守がピストルを向けたが、躊躇した隙にスピアガンが彼の胸を撃ち抜いた。カレブは男の頭をつかみ、独房の格子が貫通するまで叩きつけた。\\n\\n刑務所長室のドアを蹴って開けると、カレブを待っていたのは都合のいい光景だった。隅で怯えていたのは刑務所長だけでなく、ヘンリー・ベイショアもそこにいたのだ。怒りに突き動かされたカレブは、ベイショアに突進して殴り、こん棒で殴打し肉を引き裂いた。男は顔から血を滴らせ、足元を真紅の海で染めた。ヘルシャーギャングのメンバーたちは刑務所長に群がり、骨を砕くほど蹴り倒した。\\n\\n崩れ落ちて命乞いをする二人の男をギャングたちは食堂に引きずっていき、続々と集まる囚人の群れの中に放りだした。 \\n\\n血と汗にまみれたカレブは、ベイショアの悲鳴をほとんど気にも留めず、自分がかつて収監されていた独房に足を踏み入れた。彼は指先から血を滴らせながらベッドの端に座った。格子窓から濃い不自然な霧が漂ってくる。彼はひび割れて錆びた古いレンチを取り出し、かすむ目でそれを見つめながら金属に親指を滑らせた。いつそれが自分のものになったのか、カレブは思い出せなかった。思い出せなくてもどうでもよかった。彼の足元には埃っぽい道があり、その果てには、彼を不当に扱ったあらゆる人物のシルエットが見えた。彼をいじめた少年たち、彼を利用した重役たち、そして再び...ヘンリー・ベイショアの影がそこにあった。霧の中から、彼らを始末するための道具が現れる。容赦ない鋼製のフックは、そのシンプルさゆえに輝かしく美しい。立ち上がると痛みで足が引き裂かれるようだったが、彼はそれに耐えて埃っぽい道を進んだ。彼の後ろには流れる血の跡が続いていた。 ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"加虐的で無慈悲な処刑人である三角頭は、痛みを通して断罪を施すことに固執している。頭部に鋼鉄の枠をかぶり、歪で巨大な鉈を携え、彼はサイレントヒルの地獄のごとき道を常人には理解しようもない使命を背負い闊歩していた。彼の行く場所は怪物でさえ陰に潜み、出会った生き物は、ためらいのない攻撃行為の犠牲となった。使命を果たし自身の存在が必要でなくなった時、彼は長い眠りにつこうとしたが、別の世界でその力が必要とされてしまった。彼を包んだ霧は、サイレントヒルで見かけるものとは違っていた。まるで生き物の神経束のようなそれは、這いよるように彼にたどり着いた。そこには暗黙の了解があった。押し寄せる雲は使命とサディズムへの招待状だ、霧に足を踏み入れた三角頭は再び自らの責務を受け入れた。 ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"「人間という存在を理解するには、それを超える必要がある」。これを信条とするスコットランド人の化学者、タルボット・グライムズは、その無限の野心で高みへと昇りつめた。子どもの頃、頭脳明晰でカリスマ的、権力にたてつくことも恐れなかった彼は人気者で、愛嬌があってチヤホヤされていたが、異様なまでに自立していた。町の近くに広がる壮大な野原を一人で探索し、ほとんどの時間を過ごしていたのだ。子どもの好奇心から始まった研究だが、有毒なジギタリスの実験でタルボットは危うく命を落としかけた。何日もの間寝込んだタルボットは、異常な量の汗をかき、食べたものはすべてもどしてしまった。回復したタルボットに湧きあがったのは、恐怖ではなく強い興味だった。それほど劇的に自分に影響を及ぼした花に、彼は摩訶不思議な魅力を覚えた。<br><br>大人になると、タルボットの野心はさらに広がり、それと同時に問題のある実験の速度も増していった。ロンドン医科大学に進んだタルボットは、たびたび叱責を受けながらも学業に秀でていた。限界を越えようとする意欲を買われた彼はイギリス東インド会社に就職し、7年で化学者として主任の地位を手にした。その後間もなくして、人生でもっとも偉大な実績のひとつを達成する。生産性を増加させる一方で労働者の休息の必要性を軽減する化学物質を開発したのだ。タルボットは、ダイアー島の捕虜収容所の地下にある秘密の研究所を任された。<br><br>インドの沿岸沖にあるその島では、アヘン戦争の捕虜が同意なしにタルボットの被験者となり、多大な苦痛に耐え得る兵士を作り出す薬の開発が行われた。大半の副作用は軽度だったが、少人数の兵士が狂気に陥ったという噂が流れた。狂乱した兵士は村で大虐殺を起こし、銃剣で村人を突き刺して、木から吊るしたという。この件に関する公式な報告はなく、タルボットはそれが誇張された戦争下の噂話でしかないと主張し自分に責任があることを否定した。<br><br>無慈悲で明晰な頭脳を持つ彼は冷静なように見えたが、その疑問視される実験に次々とさらされる敵兵に対して、タルボットは意識を向けていなかった。そして、現実が文字通り叩きつけられることになる。マンガロールを旅行中だったタルボットは、後頭部に鉄パイプによる殴打を受け、縛られ、ワゴン車に乗せられた。目隠しが取り去られると、具合の悪そうな男がタルボットを何百人もの遺体が埋まっている共同墓地に案内した。タルボットの知らないところで、彼が開発した生産性増加の薬により、ほぼ工場1つ分に相当する労働者が死亡していたのである。誘拐犯の怒りと非難を前に、対抗することはできないとタルボットは悟った。鉄パイプが振り下ろされるたびに体を丸めることしか彼にはできなかった。タルボットは共同墓地に投げ入れられ、死を待つのみとなった。意識と暗い闇の間をさまよいながら、タルボットはそこから這い出ようとした。指が腐敗した肉に食い込む。どす黒いハエが露出されたタルボットの肌を食いちぎろうとする。何百もの針に刺されているような感覚が身体を突き抜ける。倒れたタルボットの目の前には、死んだ女性の輝くヘーゼル色の目がある。衰弱して顔を背けることができないタルボットは、自分のライフワークがもたらした結末を見据えることしかできなかった。<br><br>その後、タルボットは死の淵から救出された。皺だらけの優しそうな顔が視界に入ると、自分が小さなベッドに横たわっていることに気づいた。息をするにも苦痛を伴う状態だったが、修道院を装ったこの古代の謎の学校で、タルボットは健康を取り戻した。高く素朴な壁の裏にある植物が生い茂った庭では、修道僧たちが禁じられた文字を研究していた。彼らは1つの次元が他の次元とつながっていると信じ、新たな次元を探求するべく人間の精神を拡張する取り組みをしていたのだ。<br><br>タルボットの知識がここで不可欠であることは分かっていた。彼の開発した精神を変造する化学物質は、精神拡張の理論と造作なく統合した。その瞬間、タルボットは自分が救われたのは偶然でないことに気づいた。学校の知識を進化させるために、わざわざ墓地から拾われたのだ。研究を依頼されたタルボットは、完全回復するまで協力することに同意した。研究対象は松果腺から抽出した化合物で、精神の目を開くことを可能にするこの物質を修道僧は「魂の化学物質」と呼んでいた。自分を救ってくれた人々に対する厚意として始まった研究に、タルボットは間もなく執着していく。学校の文書保管庫にある記録を読み漁り、以前は想像もできなかったようなアイデアを裏付ける化学式を見いだした。そして、人類を新たな啓蒙の時代へ先導することを夢に見始めた。おそらくその頃から、何百人もの死亡した工場労働者が、そしてヘーゼル色の目が現れる悪夢が、脳裏から徐々に消えていった。<br><br>成功に近づくにつれ、修道僧の態度が豹変した。かつては優しい笑みを浮かべていた修道僧たちは、タルボットを見るなり、その不安な目をそむけるようになった。礼儀正しく会話をしてくれていた修道僧は、静かなささやき声で話すようになっていた。最後にタルボットが学校で目にしたのは、樹状突起のように枝分かれした、自分のベッドの上のひび割れたしっくい天井だった。<br><br>次に覚えていることは、砕けたモザイクのかかった映像と感覚である。汚れた照明、石畳上の馬の蹄、粗野な黄麻布が自分の頬に擦れる感覚、そして腕に食い入る鋭い痛み。アヘン窟内のわらでできたマットレスの上で目を覚ましたタルボットは、ボロボロで不衛生な状態で大の字になっていた。濃い霧の中にいるような頭に最初に浮かんだのは、自分の手記だった。それはタルボットの画期的な発見の記録が書かれた唯一の文書だ。大きな声で助けを求めながら、薄汚い窟の中を必死になって探した。何人かの居住者はハンモックから顔を上げたが、その薬に侵された目には無関心しか見られず、すぐにまどろみに浸っていった。タルボットの後ろにローブを着た誰かが現れたかと思うと、腕に針が刺さり、再び世界は闇に包まれた。<br><br>また目覚めだ。目覚めは回を増すごとに、どんどん不明瞭になっていった。歯の間の大きな隙間を舌で触ってみる。どれぐらい経ったんだろう……かすかな記憶が戻ってくる。魂の化学物質。手記。もう少しで成功だった。遠くからささやく声が頭に入ってくる。<br><br>不器用な様子で石を探すと、震える手でそれを研いだ。窟の暗い照明の下、無反応の居住者に囲まれながら、記憶をたどり、研究の内容を壁に刻んだ。壁から床へ、ささやき声の言っていることは理解不能だったが、そのすべてを取り込み、指に血が滲み始めるまで何時間も書き続けた。書く場所がなくなると、石を握り自分の胸に文字を刻んだ。血みどろのタルボットは、そこで奇跡を目にした。オレンジ色の花が一面に咲いた壮大な野原だ。ささやき声は、野原に入り、人間の理解を超える世界と次元を発見するようにと、タルボットを急き立てている。一瞬、子どものころに感じた不思議に魅了される感覚を覚えた。<br><br>アヘン窟の居住者たちが静かに目覚めた。煙の乾いた匂いはまだ漂っている。薬でボーッとしたままヨロヨロと歩く居住者たちは、血で濡れた石床に気づいた。亀裂には小さな小川が流れている。目が暗闇に慣れると、ぎこちない走り書きが目に入ってきた。終わることなく何度も何度も記された文章は、ただ1行。<i>死は始まりに過ぎない</i>","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"結合双生児のシャルロット・デエとヴィクトル・デエは、特別な心の絆で結ばれていた。17世紀、無事に生まれる可能性の低さを考えると、彼らがこの世に生を受けたのは奇跡とも言える出来事だった。しかし誕生直後から、迫害に苦しめられる2人の人生が始まる。ヴィクトルの下半身はシャルロットの胸部に結合し、脚は彼女の筋肉と内臓に絡みついた状態で生まれた。彼はシャルロットよりも小さく、それはまるでひとつの体ではなくシャルロットの体の付属品のようだった。出産時、金切り声を上げたのは赤ん坊だけではなかった。助産婦は悲鳴を上げて家から出て行き、魔女が悪魔を生んだと叫んだ。こうしてシャルロット、ヴィクトル、そして母親のマドレーヌの狩りが始まった。<br><br>それから数年があっという間に過ぎたが、この時が双子が知る限りで最もまともな時代だった。双子は他の子供達も自分達と同じように母親と旅しているのだと思い込んでいた。彼らにとって日常は、フランスの田舎を走り回ったり、隠れたりするゲームだった。5才になると、このゲームに新たなルールが加わった。母が病になったのだ。消耗し、青白い顔色をしていたマドレーヌは、食料集めをシャルロットに任せるしかなかった。シャルロットは突き出したヴィクトルの体を隠すために何枚も服を重ね、森の住処から出た。服は重かったが、彼女は近くの町へと力強く歩いていった。そこには妙な光景が広がっていたが、シャルロットは訓練された通り、市場が開くのを待ってから、手当たり次第に食べ物を盗んだ。成功したかに思えたが、喜んでいられたのは束の間のことだった。<br><br>真夜中、3人の住処が闇をうごめく炎に囲まれた。突撃を命じる声が夜の静寂を破り、魔女狩りのハンター達が押し入ってきた。汚れた手の数々が双子を寝床から引きはがし、シャルロットは近づく者を一心不乱に蹴り上げた。マドレーヌは子供達の名を泣き叫んでいたが、突然その声が止んだ。頭をこん棒で殴られたのだ。ヴィクトルは捕らえられた鼠のような金切声を上げた。<br><br>ハンター達の動きは素早かった。マドレーヌは魔術を行った罪に問われ、悪魔の子を産んだことがその証明であるとして有罪になった。数分後、ハンター達は無意識の彼女を木に縛り付け、足元を小枝やコケで囲んだ。マドレーヌは意識を取り戻すと、子供達に背を向けろと懇願した。だがそれは許されなかった。ハンター達は無理やり、母親に火を点ける様子を双子に見せた。双子は母親のスカートに火が燃え広がり、音を立てて肉が焼け焦げていく様を見た。体から脂がしたたり落ち、顔が泡立ち、よじれていくのを見た。焼かれた喉が、悲鳴とともに消えていくのを見た。そして残ったのは、燃えさしが立てる音と、吐き気のする臭いだけだった。<br><br>双子の内にある喜びや優しさという感情は、彼らの母親とともに死んだ。檻に入れられ、古い木造の神殿に連れてこられた双子は、黒い服を着た秘密組織の人間に売り飛ばされた。ヴィクトルは近づく者に、まるで獰猛な獣のように爪を立て、噛みついた。彼の心を慰め、落ち着かせることができるのは、姉の抱擁だけだった。一方シャルロットは弟以外の全員を恨み、嫌悪し、弟を守ることに存在意義を見出していた。<br><br>神殿では何年にもわたって異常な実験が行われた。残虐な実験もあったが、多くは不可解なものだった。ある日は命じられて灰色の小鳥の首を折り、その次に指から流れる血をバラの花瓶に入れさせられた。また1週間に一度、枕の下に湿ったブナの木を入れて寝かされた。そして繰り返される詠唱。黒いケープをまとった影が、決まった間隔で歌を歌い続けた。<br><br>やがて、最後の実験計画が決まった。ローブを着た2つの影が双子を神殿の中央に先導し、燭台で照らされた祭壇にシャルロットを押さえつけた。フードの下から皺だらけの老人の顔が覗いている。男は手を双子の額に当て、2人の頭蓋を慎重に調べた。そして輝く剣を抜きながら、「メメント・モリ」と呻いた。<br><br>シャルロットは弟を祭壇から降ろそうと、横に転がった。弟は金切声を上げながら、懸命に腕を伸ばし、燭台を倒した。火があっという間に乾いた木を燃やし、床に広がった炎が黒いローブに燃え移った。苦し気な叫び声が混乱を貫き、シャルロットを鼓舞した。シャルロットは地獄の中を駆けた。視界は黒煙と燃え上がる炎で遮られていた。重く痛いものが彼女の肺を満たした。出口が見つからない。一歩進むごとに、熱に圧倒される。息ができずに、膝から崩れ落ちた。その時2人が目にしたのは、日の光と木々だった。シャルロットはよろめきながら必死に炎から逃れ、露にぬれた草地に出た。そして振り向かずに森へと駆け込み、倒れるまで走り続けた。<br><br>目が覚めたシャルロットは、ヴィクトルの手に触れようと腕を伸ばした。だが彼は動こうとしない。彼の体は、力なくシャルロットの胴体にぶら下がっていた。シャルロットは弟の顔を抱きかかえ、もう動かない悲しげな瞳をじっと見つめた。自分の皮膚を引っ張る弟の体、胸の空洞をつつく弟の足―慣れ親しんだ感覚が、もう感じられない。ヴィクトルは死んだ。<br><br>シャルロットは嘆き悲しみながらも、進み続けるしかなかった。黒マントと魔女狩りが辺りをうろついているかもしれない。弟の遺体を服の下に隠し、近くの町の下水道へ向かうと、そこを住処にした。外に出る時は大抵食べ物を盗むためだった。切羽詰まると家畜小屋に侵入し、豚の残飯で空腹を凌ぎ、数年を過ごした。その間も、ヴィクトルの体は腐っていった。手足はじゅくじゅくと腐り黒くなっていったが、完全に腐敗することは拒んでいるようだった。まるで、まだ姉の血が彼の体を流れているようだった。命のない弟の体を守ることが、シャルロットの唯一の存在意義になった。たった独り残された家族と離れ離れになることを、彼女は拒んだ。<br><br>十代の年頃になると、シャルロットの人生は生き残りをかけたゲームになっていた。人間に対する憎しみは日を追うごとに増していった。自分の存在が認められることは絶対にないと身をもって知ったのだ。盗みに失敗した時や逃げるのに必死だった時、いくら殺しても追手は止まない。そして彼女を「化け物」、「悪魔」、「魔女」と断罪する言葉も、止むことはなかった。人間の中でも最悪なのが、あの黒マント達だ。彼らの狩りは永遠に続き、シャルロットは何度も住処を変え、逃げ続けなければならなかった。<br><br>こうしてシャルロットは、何年もの間を追手から逃げ、必要に迫られたら血を流し、夜は弟の体をあやすように抱いて過ごした。ある凍てつく冬の日、シャルロットの体は限界を迎えていた。食べ物もほとんどなく、逃げ込んだ先にあった古ぼけた小屋は、寒さを凌ぐのに何の役にも立たなかった。シャルロットは暖を取ろうと、鎌を手に、森の中に作ったたき火に身を寄せた。近くに黒マントが潜んでいることは知る由もなかった。小鼻に霜が付き、唇が淡い青色を帯びていくなかで、シャルロットは今まで経験したことのない何かを感じた。それは、死を受け入れることだった。目を閉じ、穏やかな死に身を任せる。すると静寂を引き裂くような、甲高い悲鳴と悪意が耳を貫いた。彼女の胸で痙攣して激しく揺れるヴィクトルを、濃い霧が取り巻いている。シャルロットが反応する間もなく、ヴィクトルは血の海を作りながら彼女の体から雪の上に落ち、走り出した。<br><br>シャルロットは死の淵から自分を引き戻し、弟を追った。弟の名前を呼びながら、脚が動かなくなるまで、森を走った。そしてついに追いついた。ヴィクトルが濃い霧の端に座り込んでいるのが見える。弟は顔を歪ませ、獣のような表情をして悲鳴を上げた。霧から現れた黒いフードの影が、彼の腕を掴み、押さえつけていたのだ。シャルロットに静かに近付いていた平穏はかき消され、積年の恨みと激しい怒りに取って変わった。 シャルロットは鎌を握りしめ、霧に向かって突進していく。弟に近づく者は誰であろうと、そのはらわたを引きずり出すと心に決めて。","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"ハク・ジウンは人の注目を浴びて成功した。彼に向けられたありとあらゆる眼差し、そして彼の名を話題にするひと声ひと声すべてがジウンの原動力だった。名声を手にした彼の唯一の願い、それはさらなる名声だった。ジウンは幼少時から人の注目を浴びる方法を心得ていた。家族の経営するレストランで働いていた時、彼はナイフ投げを使ったショーを披露して店に客を呼び込んだ。だまされやすい観光客はそれが韓国の伝統的な出し物だと信じ込み、喜んで観賞に金をつぎ込んだ。ジウンの父親は店の売り上げを息子がダンスや歌のレッスンを受けるために費やし、自分には手に入らなかった名声という名の希望をジウンに託した。<br><br>ジウンは期待に応えた。何年かスター発掘番組で特技を披露し続けた後、スターへの道がようやく開かれる。マイティー・ワン・エンターテインメントのプロデューサーであるリー・ユンジンが、ジウンを自らの訓練プログラムにスカウトしたのだ。ソウルにある寮に引っ越したジウンは、1日14時間のスター養成訓練を受けた。立ち振る舞いや歌をはじめ、自信と謙虚さをバランス良く演出する方法などを教わった。<br>骨の折れる訓練だったが、それが功を奏す。ユンジンはジウンをバンド「NO SPIN」のメンバーに選出した。バンドに飾らないエネルギーをもたらしたジウンは、瞬く間に有名になった。ひっきりなしのインタビューを受け、憧れの対象となったジウンは、目まぐるしいスケジュールにバンド仲間が疲れ切る一方で、元気いっぱいだった。自分は社会に吐き出された凡人よりも偉大な人間である。彼にとって毎日は、それを確信する日々だった。<br><br>ところが、時が経つにつれシャンパンの炭酸は抜けていった。ファンを見てみると、その熱狂や憧れは5人のバンドメンバーそれぞれに分けられ、薄まっている。それを認識した彼に残ったのは、さらなる名声への切望だった。<br><br>ジウンは物まねに精を出し、嫌悪の下に長らく秘めていた魅力を繕った。NO SPINの最新アルバムをレコーディングする時も、彼は動揺を見せなかった。長い昼休憩の後でスタジオに戻った時、ジウンは運命から贈り物を授かったことを知る。そこで彼は、ケーブルの焼けるにおいに気づいた。間違いない。コントロールルームに急ぐも、ドアは倒れたスピーカーでふさがっている。向こう側ではバンドメンバーがドアを激しく叩いていた。彼らの叫び声がパチパチと燃える火の音と一緒に聞こえる。<br><br>メンバーに呼びかけながらジウンはスピーカーへと走り寄り、1つ掴んで、止まった。ジウンはピタリと動かなかった。息をつくたびに、全身全霊で意識を集中させ考えた。すぐ近くで叫んでいる彼らの声はほとんど聞こえない。ゆっくり彼が後ろへと下がるまでは。そしてジオンは聞いた。メンバーは焼けながら彼の名前を叫んでいた。助けてくれと彼の名を呼ぶ声。ジウン！ジウン！ハク・ジウン！ジウンはこれほど美しい音を聞いたことがなかった。消防隊が到着した時に流した涙は本物だった。<br><br>ジウンは悲劇の人物になった。無駄な努力ながらも仲間を救おうと、やれるだけの努力をした英雄として称えられた。ユンジンはインタビューで彼を見世物にした後、ブランドの再構築に取り掛かった。ジウンは「トリックスター」として生まれ変わった。自らの曲をプロデュースし、荒っぽい外見だが優しい心を持つソロアーティスト。しかし、コンサートやテレビでの舞台から離れたところで、何か黒いものが大きくなっていく。<br><br>ジウンは1人暮らしをターゲットに選び、犯行は夜に行われた。1人目の被害者は、魅惑的な声をした音大生だった。ジウンは就寝中だった男子学生の頭を野球のバットで殴り、手足を拘束して、口をガムテープで塞いだ。彼は大学生を何時間も痛めつけ、生きたまま体を切断した。それでも何かが足りない。音、そしてつながりだ。腹部を切開しながらジウンが聞きたかったのは心からの命乞いから生まれる素晴らしい声なのに、実際に得られたのはガムテープから聞こえるくぐもった泣き声だけだった。<br><br>彼はそこから学び、適応した。<br><br>感情を抑えることなく声を出させるために、被害者を誘拐し、廃墟まで運び込まなければならなかった。被害者の声でジウンは曲を作った。適所を突いて、さまざまな悲鳴やうめき声を誘発する。腰方形筋を刺すとしわがれたうめき声を引き起こし、頸動脈を切りつけると猫を絞め殺すのと似た音を作り出した。彼らの苦しみには正直さがあった。ジウンは犯行のたびに録音し、合成してうまく曲に織り込んで、メロディーが折り重なる層の裏側に隠した。<br><br>ジウンは自分の作品に大得意だった。彼は警察へのほのめかしとして、最近の写真撮影会で使用したミンクのボアを被害者の切り裂かれた喉に巻いておいた。その次の殺害時には男性の歯を抜いた。ミュージックビデオに出演していたボクサーの歯が無かったからだ。注目を集めるため大胆さが増すなか、VIPのパーティーで出会ったファンの女性を殺した彼は、女性の眼玉をダイヤのカフスボタンと入れ替え、胸に血で「私は神をみた」と書いた。どの現場も強烈な壮観だった。<br><br>音楽と殺人の間で、ジウンの作品は世界中で話題になった。ところが、暴力が彼のアートスタイルの特徴になると、音楽のキャリアに影響が出た。収益が減収したマイティー・ワンの経営陣が、彼を非難しはじめたのだ。プロとして怒りを覚えたユンジンは彼を擁護したが、多数派に押され、ジウンは曲を自作することが禁じられてしまった。<br><br>その決定によって彼は大きく落胆した。彼の楽曲は本物の人間らしさを音楽に融合させたものだったが、どこにでもあるような万人受けする要素に欠けた音楽は、経営陣によって否定されたのだった。それであれば仕方ない。自分の芸術が理解されないのであれば、理解されるまで組み込むまでだ。 \\n\\nマイティー・ワンの経営陣に向けたプライベートライブを決行するために、ジウンは3ヵ月を準備に費やした。傑作を披露する計画だ。ジウンは獣医からとんでもない大金で亜酸化窒素を手に入れ、マイティー・ワンが経営する劇場の舞台スタッフに賄賂を渡して建物内に入った。有名だった彼を、普通の人間は疑おうとしなかった。ライブの準備が整い、経営陣と舞台係がジウンの登場を待つなか、部屋にはガスが充満していった。予定は都合よく遅れていた。 \\n\\nジウンが登場する頃には、意識朦朧となった観客はそれぞれ座席で手足を広げた状態だったり、床を這ったりしていた。彼は素早く動き皆を拘束したが、ユンジンの番になって手を止めた。泥穴から自分を引っ張り出し、彼が報われるべき道を敷いてくれたひと。彼女は特別に、これから起きる感嘆の光景を目の当たりにすべき存在だ。鎮静状態であってもユンジンは抵抗した。それは彼女の内にある、他の誰よりもずっと強力な激しい嵐だった。ジウンはたった一人の観客であるユンジンの身体を支え、目をこじ開けた。むせび泣く他の連中は最後のショーを行うため、ステージに上げられた。冷笑しながらジウンは彼らの顔に化粧を塗りたくり、舞台照明でその姿を照らした。楽器の準備はできた。 \\n\\n自作のメロディーを奏でるために、ジウンは彼らを拷問し、1つの肉体から別の肉体へと優雅に走って移動しながら、その悲嘆の声でオペラのようなクレッシェンドを演出した。叫び声、すすり泣き、金切り声。彼らは愛する家族を、母親を求めて泣き叫んだ。それは壮大なる感情のほとばしりだった。人間であるとはどういうことか。その間、彼らはジウンをじっと見つめていた。 \\n\\nジウンがナイフを投げ、最後の人間楽器が音を出さなくなって音楽が止まり、舞台からの内臓の流出も止まった。ヘトヘトになった汗と血まみれのジウンは、ユンジンの方を見て一礼した。カーテンコールだ。彼は完全なるショーを成し遂げた。ナイフを握りしめ、ユンジンに向かって進んでいく。エンドロールが始まる前に仕上げが必要だ。ところがあと少しで—  \\n\\n霧が現れた。 \\n\\nどこからともなく、それは彼の周りに押し寄せた。ジメジメとひんやりして、不快な霧。ジウンが見たのは壮大なステージだった。病院、寺院、森林、屠殺場—錆びたフックで飾られた、不滅の世界を維持する百万もの目が彼に注目し、彼から逃げ惑い、<i>彼を体感する</i>。ジウンのやるべきことはただ1つ。受け入れ、霧の道具となること。そして何よりも、叫び声を作り出すことだ。 \\n\\nアンコール！","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"ネメシスはアンブレラ社が作り出した生体兵器として生まれた。ほぼ破壊不能な彼に、標的を追跡して抹殺する以外の目的はない。タイラントT-103型のこの種は、Ne-α寄生体を投与することで知能と認識力が向上した。ネメシスに与えられた初の任務は、ラクーンシティに解き放たれ、S.T.A.R.S.のメンバーを全滅させるというものだった。街を破壊しながら、ネメシスはジル・バレンタインと幾度となく対峙するも、標的は何とか逃れてしまう。しかしそれも、大きな後れではなかった。標的確保まであと少しという時、ネメシスに奇妙な霧が降りかかった。霧は街の煙と混ざり合い、混乱を生み出していた。そんな現象でも彼が動じることは一切ない。極度の寒さや酸素の薄さなど、脅威ではなかった。ただ重要なのは霧の中へと入り、任務を続行することだけだ。S.T.A.R.S.を見つけ出し、S.T.A.R.S.を全滅させて、邪魔をする者は片っ端から殺すという任務を果たすために。","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/jp/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"クロータス・プレン・アサイラムの所長パトリック・スペンサーから奪われた力強く荒々しい最期の一息。この力を伝達することで、ナースは魂の世界を連続して通り抜けられるようになる。この行動はナースを疲労状態にする。<br><li>ブリンクが使用可能となる</li><li>連続ブリンクの回数が<b>1回</b>増加する</li>","name":"スペンサーの最期の一息","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"鋼鉄製の足を挟む大型の罠。罠はあたりに散在しており、拾い上げて好きな場所に設置できる。<br><br><b>トラバサミ</b><br>初期設定として儀式の開始時に <b>トラバサミを1つ</b>持っている。マップ上でさらに見つけ出し集めることができる。<br><b>トラバサミを仕掛ける</b><br>正しい位置で<i>能力ボタン</i>を長押しすると、目の前に<b>トラバサミ</b>を仕掛けることができる。仕掛けられた<b>トラバサミ</b>を踏んだプレイヤーは身動きが取れなくなり、能力を失う。仕掛けられた<b>トラバサミ</b>を踏んだ無傷の生存者は負傷するが、罠から逃れるために試みることもできる。<i>アクションボタン</i>を押すと、付近で<b>トラバサミ</b>に掛かった生存者を担ぎ上げる。<br><b>罠をリセットする</b><br>マップ上の<b>トラバサミ</b>の近くにいる状態で<i>能力ボタン</i>を長押しすると、仕掛けが完了していない場合にかぎり、その場で仕掛け直すことができる。<b>トラバサミを回収する</b><br>マップ上の<b>トラバサミ</b>の近くにいる状態で<i>アクションボタン</i>を押すと回収する。初期設定でいつでも最大<b>1つのトラバサミ</b>を所持している。","name":"トラバサミ","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"古代の力が込められた重い釣鐘。鳴らすと魂の世界に入り込むことができる。<br><br><b>悲哀の鐘</b><br><i>能力ボタン</i>を長押しして<b>透明化</b>する。透明化の状態で<i>能力ボタン</i>をもう一度押すと<b>透明化が解除</b>され、再び現れる際に<b>1秒</b>の急加速を得る。悲哀の鐘の音は<b>24メートル</b>先まで聞こえる。<br><br><b>透明化：</b><br>透明時、<b>レイス</b>の移動速度が上昇し、ほぼ完全に透明になって<b>探知不可</b>の効果を得る。 透明時、<b>レイス</b>は攻撃することができないが、マップ上のオブジェクトにアクションを行うことができる。<b>レイス</b>が明るい光にさらされると自動的に<b>透明化が解除</b>される。","name":"悲哀の鐘","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"<i>能力ボタン</i> を長押しするとチェーンソーダッシュが発動する。チェーンソーダッシュ中に攻撃が命中した生存者は瀕死状態になる。<br><li>チェーンソーのアクション（チェーンソーを始動する、チェーンソーの回転数を上げる、<b>チェーンソーダッシュ発動</b>）をそれぞれ行うたびにオーバーヒートメーターが増加する</li><li><b>オーバーヒートメーター</b>が満タンになるとチェーンソーは完全にクールダウンするまで使用不可になる。 熱量の上限に達しても発動中の<b>チェーンソーダッシュ</b>に影響はない</li><li><b>オーバーヒートメーター</b>はチェーンソー未使用時に減少する。</li> ","name":"チェーンソー","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"彼女の母親から教わり、未開の森で極めた技。ハントレスは致命的な精度で手斧を投げることができる。<br><li><b>手斧5本</b>を持ってマッチを開始する</li><li>チャージして投げることで投擲速度を最大まで上げる</li><li><b>ロッカーから</b>手斧を補充することができる</li>","name":"狩猟用手斧","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"内なる闇が獲物の命を奪う意思を増大させる。<br><br><b>内なる邪悪</b><br><b>内なる邪悪</b>を発動すると<b>シェイプ</b>が獲物をハッキリと見えるようになり、凝視することで更なる邪悪な力を蓄積する。<br><br><b>内なる邪悪I：</b><br><b>探知不可</b>のステータス効果を得る。移動速度が少し低下する。<i>通常攻撃</i>の突進の距離が少し減少する。<br><br><b>内なる邪悪II：</b><br>脅威範囲がそこそこ減少する</b><br>。移動速度が少し上昇する。<i>通常攻撃</i>の突進の距離が少し増加する。<br><br><b>内なる邪悪III：</b><br>発動時、すべての生存者が<b>無防備</b>のステータス効果を受ける。<b>内なる邪悪III</b>は<b>60秒</b>持続し、その後<b>内なる邪悪II</b>へと退行する。<br><br><b>特殊アビリティ：つけ回し</b><br><i>能力ボタン</i>を長押しして視界にいる生存者を全員つけ回す。生存者をつけ回すと<b>内なる邪悪</b>のティア達成度が上がる。<br><br><span class=\\"FlavorText\\">「15年前に初めて彼に会ったとき、彼には理性、良心、知性など人間的なものがまるでなく、善悪をも理解しなかった。私が会ったとき、まだ6才の子供なのに彼の顔は青白く無表情で、暗い瞳は悪魔のそれだった……。私が彼を8年間研究し、7年間監禁したのは、彼の目の奥に邪悪なものを確かに見たからだ。」 - サム・ルーミス医師</span>","name":"内なる邪悪","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"ハグの力の根源である黒ずんだ指は、恐るべき能力の触媒として使われる。ハグは泥を意思のままに形作ることができる。簡単な呪いの図柄を描くことで泥から偽の彼女自身を複製することができ、様々な効果を発揮する。<br><li>幻像の罠を<b>10個</b>作成、保持する能力を得る</li><li><b>40メートル</b>以内の発動した幻像の罠に一瞬で移動する能力を得る</li>","name":"黒ずんだ触媒","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"カニバルは3チャージで儀式を開始する。<I>能力ボタン</i>を長押しすると<b>掃討チェーンソー</b> を1チャージで発動し、複数の標的に命中させることができる。<b>掃討チェーンソー</b>中に攻撃が命中した生存者は瀕死状態に陥る。<br><li>1チャージを使用すると<b>掃討チェーンソー</b>の持続時間が延長される。これを行うと、クールダウンが少し長くなる</li><li>チェーンソーのチャージはチェーンソー未使用時に回復する</li><br><br>チェーンソーの回転数を上げている時、<b>癇癪メーター</b>が徐々に満たされる。<b>掃討チェーンソー</b>の発動中にメーターが満タンになるか、オブジェクトに攻撃が命中すると、カニバルは<b>癇癪</b>を爆発させる。<b>癇癪</b>が起きると周囲にいる生存者にダメージを与え、瀕死状態に陥らせる。<br><li><b>癇癪</b>は<b>掃討チェーンソー</b>中に使用したチャージごとに持続時間が増加する。残ったチャージはすべて消失する</li><li><b>癇癪</b>が起きている間は移動速度が低下する</li><li><b>掃討チェーンソー</b>中にチェーンソーを使用せずに能力ゲージが完全に消耗すると、<b>癇癪メーター</b>は減少する</li> ","name":"ババのチェーンソー","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>カーターの電光</b><br><b>ドクター</b>の特殊アビリティ<b>ショック療法</b>または<b>放電爆破</b>を生存者に命中させると、生存者の<i>狂気度</i>が上昇し、最終的には<b>狂気</b>のステータス効果を与え、その効果が次第に強くなる。<br><b>狂気度I：</b><br>生存者が1度だけ叫び声を発して、<b>ドクター</b>にその位置が判明する。スキルチェックの結果と方向に<b>少し</b>影響する。<br><b>狂気度II：</b><br>生存者が1度だけ叫び声を発して、<i>幻覚のドクター</i>の形で幻覚症状を覚える。スキルチェックの結果と方向に<b>そこそこ</b> 影響する。<br><b>狂気度III：</b><br>生存者が断続的に叫び声を発して、<i>幻覚のドクター</i>の形で幻覚症状を覚える。スキルチェックの結果と方向に<b>とてつもなく</b>影響する。生存者は無事に<i>正気を取り戻す</i>まで、治療・修理・破壊工作・開錠・浄化、アイテム使用といったアクションを行うことができない。<i>正気を取り戻す</i>アクションを完了した生存者は<b>狂気度I</b>に戻る。<br><br><b>特殊アビリティ：ショック療法</b><br><i>能力ボタン</i>を長押しすると<b>ショック療法</b>を実行し、目の前の地面に広い範囲で感電攻撃を解き放つ。<b>ショック療法</b>が命中した生存者の<i>狂気度</i>は上昇し、実行中のアクションが即座に中断される。<b>ショック療法</b>によって<b>忘却</b>のステータス効果は即座に無効化する。<br><br><b>特殊アビリティ：放電爆破</b><br><i>アビリティ発動のボタン</i>を長押しすると<b>放電爆破</b>を実行し、ドクターの脅威範囲内にいる生存者全員に叫び声を上げさせ、<i>狂気度</i>は上昇する。<b>放電爆破</b>はクールダウン中には発動できない。<b>放電爆破</b>によって<b>忘却</b>のステータス効果は即座に無効化する。","name":"カーターの電光","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"起きている生存者には<b>ナイトメア</b>の心音が聞こえ、16メートル以内にいるとその姿が見える。16メートルから32メートルの距離では彼の姿が断続的に見え、それ以上離れている場合は視認することはできない。<b>ナイトメア</b>は60秒間経過で生存者を自動的に眠らせてドリームワールドに引きずり込むほか、<i>通常攻撃</i>が命中した生存者は即時にドリームワールドに引きずり込まれる。<br><br>ドリームワールドに入った生存者は<b>忘却</b>のステータス効果を受け、さらに<b>ドリームスネア</b>の影響を受ける。生存者はスキルチェックで失敗するか、起きている生存者に<i>起床アクション</i>をしてもらう、あるいは見つけた目覚まし時計を使用することで起床することができる。<i>起床アクション</i>は成功するたびに、次の起床アクションにかかる時間が倍になる。目覚まし時計を使用した生存者は、30秒間眠りに落ちなくなる。<br><br><b>特殊アビリティ：ドリームスネア</b><br><i>能力ボタン</i>を長押しすると<b>ドリームスネア</b>を設置する。生存者は<b>ドリームスネア</b>と接触している間とその後短時間、<b>妨害</b>のステータス効果を受ける。<br><br>いくつかのアドオンによって、<b>ドリームパレット</b>が<b>ドリームスネア</b>に置き代わる。ドリームパレットはドリームワールドのパレットの位置に出現する。ドリームパレットは<b>ナイトメア</b>に強調表示され、怯みの対象にならない。<br><br><b>ドリームトークン</b>：<br><b>ナイトメア</b>はドリームスネアの設置に使用するドリームトークンを5個持った状態で開始する。トークンを全て使い果たすと、一番古いドリームスネアが破壊され、新しいドリームスネアが配置される。<br><br><b>特殊アビリティ：ドリームプロジェクション</b><br><i>アビリティ発動のボタン</i>を長押しすると視界内の発電機の位置にテレポートする。ドリームワールドにいる生存者1人につきクールダウンが15%短縮される。","name":"ドリームデーモン","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"永遠に師匠の思想に身を捧げる彼女は、命のありがたみを知らない者や犯罪者に対して罰を与える。<br><br><b>ピッグ</b>は密かに移動や奇襲攻撃で、生存者の頭に逆トラバサミを装着したりすることができる。<br><br><b>ジグソウの洗礼</b><br>儀式の開始時に<i>発動していない</i>逆トラバサミを<b>4</b>個持っている。瀕死状態で生存者の前に立ちはだかりながら、<i>アビリティ発動のボタン</i>を押して生存者に<i>発動していない</i>逆トラバサミを仕掛ける。逆トラバサミはその儀式でいづれかの発動機が修理完了すると<i>発動する</i>。<br>生存者はマップ上に設置されたジグソウボックスを探してカギを見つけることで、<i>発動している</i>または<i>発動していない</i>逆トラバサミ<br>から逃れる試みを行うことができる。<b>発動中の逆トラバサミ</b><br>逆トラバサミが<i>発動</i>すると、タイマーのカウントダウンが始まる。<i>発動中</i>の逆トラバサミを持った生存者は、タイマーが時間切れになるか、<i>発動中</i>の逆トラバサミが付着した状態で儀式からの脱出を試みると自動的に処刑される。<br><br><b>特殊アビリティ：しゃがむ</b><br><i>アビリティ発動のボタン</i>を押してしゃがむ。しゃがんでいる状態でもう一度 <i>アビリティ発動のボタン</i>を押すと立ち上がる。しゃがんでいる間、<b>ピッグ</b>の移動速度は遅くなる。しゃがんでいる間、<b>ピッグ</b>は<b>探知不可</b>のステータス効果を得る。<br><br><b>特殊攻撃：奇襲攻撃</b><br>しゃがんでいる状態で<i>攻撃ボタン</i>を押すとダッシュし、<b>奇襲攻撃</b>を行う。<br></i><span class=\\"FlavorText\\">「君のすべてを私に。細胞さえもだ。腕の注射の跡は\\"前世\\"のものだと思え。忘れ去るのだ。あの廊下に出たら、後戻りはできない。わかってるな？」- ジグソウの洗礼</span>","name":"ジグソウの洗礼","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"麻酔薬や筋弛緩薬について何年も実験を繰り返した末、ケネスは数種類の効果的な調合法を開発した。特にお気に入りの「寸劇のトニック」の効果は高く、彼はそれで数多くの犠牲者を否応なく中毒にし、捕獲してきた。関連する「寸劇の解毒剤」にも有用な効果がある。<br><br><i>アビリティ発動のボタン</i>をタップして<b>寸劇のトニック</b>と<b>寸劇の解毒剤</b>を切り替える。<i>能力ボタン</i>をタップまたは長押しし、ボタンを離すことでボトルを投擲する。<br><br><i>アビリティ発動</i>のボタンを長押しするとボトルが補充される。<br><br><b>特殊アビリティ：寸劇のトニック</b><br>何かに当たるとボトルが割れて紫色のガスが放出され、生存者を<b>中毒状態</b>にする。<b>中毒</b>になった生存者は視界に異常をきたして移動速度が低下し、2秒間咳をする。<br><br><b>特殊アビリティ：寸劇の解毒剤</b><br>何かに当たるとボトルが割れて灰色のガスが放出され、そのガスは活性化すると黄色に変わる。クラウンと生存者は活性化した<b>解毒剤のガス</b>に晒されると、移動速度が5秒間10%上昇する。<b>中毒状態</b>の生存者は<b>解毒剤のガス</b>に晒されると解毒される。","name":"寸劇のトニック","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"スピリットは「山岡の祟り」を使って霊界に入り、別の位置に再出現することができる。<br><li>能力ボタンを長押しして溜める。スピリットは身体を離れ、動かない「抜け殻」を残す</li><br>山岡の祟りの発動中：<li>スピリットは別の場所に自由に移動し、短時間でより速く移動することができる。しかし実際の行動は、物理的な環境や周囲の物に制限される</li><li>スピリットは物質界を離れると、生存者を視認できなくなるが、彼らが残す赤い傷マークを感知することはできる</li><li>スピリットは声で自分の現在位置を知らせる</li><li>能力が終了すると、スピリットは少しの間高速移動を維持し、抜け殻は消える</li><br>山岡の祟りを使用すると、スピリットの能力バーが減少する。能力バーは時間の経過とともに自動的に補充される。再び発動させるには能力バーが完全に補充されるのを待つ必要がある。","name":"山岡の祟り","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"フランクが彼らをリージョンにするまで、彼らは普通の友だちだった。今となっては、自分たちのルール以外には従わないというスリル満点の自由から力を得ている。<br><br><b>愚連の狂乱</b><br><b>愚連の狂乱</b>を発動して高速で走り、複数の生存者に次々と攻撃する。能力ゲージが満タンになると、<i>能力ボタン</i>を押して<b>愚連の狂乱</b>を発動できる。<b>愚連の狂乱</b>の発動中は、<b>リージョン</b>の移動速度が上がり、追加アビリティである<b>パレット乗り越え</b>と<b>愚連の切り裂き</b>を使用できるようになる。<br><br><b>特殊アビリティ：パレット乗り越え</b><br><b>愚連の狂乱</b>発動中に<i>アクションボタン</i>を押すと、<b>パレット乗り越え</b>で倒されたパレットを乗り越えられる。<br><br><b>特殊攻撃：愚連の切り裂き</b><br><b>愚連の狂乱</b>発動中に<i>攻撃ボタン</i>を押すと、<b>愚連の切り裂き</b>を発動する。<b>愚連の切り裂き</b>で生存者を攻撃すると、生存者は負傷状態に陥り、<b>深手</b>のステータス効果を受ける。リージョンの能力ゲージが回復し、脅威範囲内にいて<b>深手</b>のステータス効果を受けていない生存者の位置が、殺人鬼の本能により明らかになる。生存者が既に<b>深手</b>のステータス効果を受けている場合、<b>愚連の狂乱</b>は効果なしで即座に終了する。","name":"愚連の狂乱","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"疫病に侵された彼女の容体はどんどん悪化していった。つま先はどす黒くなって首の嚢胞は腫れ上がり、血の混じった嘔吐物が喉を詰まらせた。<br><br><b>黒死の吐瀉</b><br>マップ内オブジェクトと生存者を<b>黒死の吐瀉</b>に感染させて、終わりのない疫病のサイクルを作り出す。<i>能力ボタン</i>の長押しで<b>黒死の吐瀉</b>をチャージ。ボタンを放すと、感染力の高い胆汁を噴出する。これが生存者に命中すると、生存者は感染する。マップ内オブジェクトに命中すると短時間汚染され、このオブジェクトに生存者がアクションを行うと、生存者も感染する。<br><br>生存者の感染ゲージが満タンになると、負傷状態に陥り、<b>衰弱</b>のステータス効果を受け、不規則な間隔で嘔吐し続ける。<br><br><b>特殊アビリティ：腐敗摂取</b><br>感染した生存者は、<i>献身の淀み</i>を使用することで感染を除去し、完全回復できる。これにより献身の淀みは腐敗し、<b>プレイグ</b>は腐敗を糧にして黒死の吐瀉を強力にする。腐敗した<i>献身の淀み</i>の隣で<i>アクションボタン</i>を長押しすると、<b>黒死の吐瀉</b>が<b>汚濁の吐瀉</b>に変化する。これにより献身の淀みから腐敗が消える。<br><br><b>特殊攻撃：汚濁の吐瀉</b><br><b>腐敗摂取</b>のアビリティ使用後、短期間<b>黒死の吐瀉</b>は<b>汚濁の吐瀉</b>となる。<b>汚濁の吐瀉</b>で胆汁が命中した生存者は、即座にダメージを受けるが、生存者もマップ内オブジェクトも感染することはない。","name":"黒死の吐瀉","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>ゴーストフェイス</b>は犠牲者を何週間も研究し、日常習慣を細かく記録した。殺人衝動が抑えられなくなった時も、獲物の居場所や襲撃方法を正確に把握していた。<br><br><b>闇の包容</b>能力ゲージが満タンの状態で<i>能力ボタン</i>を押すと、<b>闇の包容</b>が発動する。<b>闇の包容</b>の発動中、<b>ゴーストフェイス</b>は<b>探知不可</b>のステータス効果を得る。 <i>通常攻撃を行うと</i>能力ゲージが完全に消耗し、<b>闇の包容</b>が解除される。<br><b>発見</b><br><b>ゴーストフェイス</b>の近距離にいる生存者は、ゴーストフェイスの方向を短時間見ることでゴーストフェイスの<i>発見</i>を試みることができる。<i>発見</i>に成功すると<b>ゴーストフェイス</b>の能力ゲージが完全に消耗し、自動的に<b>闇の包容</b>が解除される。<b>ゴーストフェイス</b>が生存者に<i>発見</i>されると<i>殺人鬼の本能</i>が発動し、ごく短時間の間その生存者の現在の位置が表示される。<br><br><b>特殊アビリティ：つけ回し<b>闇の包容</b>発動中に<i>能力ボタン</i>を長押しすると、生存者をつけ回す。遮蔽物の後ろで<i>能力ボタン</i>を長押しすると、身を乗り出して覗き込み、より素早くつけ回しを行うことができる。生存者のつけ回しが完了すると標的を<i>マーキング</i>し、一定時間<b>無防備効果</b>を付与する。<br><br><b>特殊アビリティ：しゃがむ</b>アビリティ発動のボタンを押すとしゃがみ、再度ボタンを押すと立ち上がる。<b>しゃがみ中はゴーストフェイス</b>の移動速度が遅くなる。<br><br><span class=\\"FlavorText\\">「僕のことはいいから、自然に構えて。そう、完ぺきだ。これぞ保存したい1枚だよ」 –ゴーストフェイス</span>","name":"闇の包容","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"正体不明の別世界の力が体に満ちた。突如として地面に亀裂が走り、デモゴルゴンを丸ごと呑み込んでいく。<br><br><b>深淵のいざない</b><br><i>能力ボタン</i>を長押しして完全にチャージされると、<b>深淵のいざない</b>が発動する。発動済みポータルの近くにいる生存者全員の位置が、殺人鬼の本能によって明らかになる。<br><br><b>特殊攻撃：シュレッド</b><br><b>深淵のいざない</b>のチャージ中もしくはホールド中に<i>攻撃ボタン</i>を押すと、前方に飛び込んで邪悪な一撃を解き放つ。<br><br><b>特殊アビリティ：ポータル</b><br><i>アビリティ発動のボタン</i>を押すと、目の前にポータルを設置する。<br><b>ポータル間の移動</b><br>別のポータルがハイライトされている状態で、設置したポータルの上に立っている時に<i>アビリティ発動のボタン</i>を再度押すと、裏側の世界を通り抜けて狙ったポータルへ移動する。<br><b>発動済みポータル</b><br>一度移動に使用したポータルは、入口側・出口側ともに「発動済み」状態になる。生存者は、「発動済み」ポータルのみ封鎖が可能。発動済みポータルは、黄色のオーラで強調表示される。","name":"深淵のいざない","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"文字どおり力に姿を変えた弱い血筋を打ち破る野望。<br><br><b>山岡の怒り</b><br>負傷した敵が残した血の球を吸収する。<i>能力ボタン</i>を長押ししてマップ中の血の球を吸収し、能力ゲージを満タンにする。能力ゲージが満タンになったら<i>アビリティ発動のボタン</i>を長押しして、<b>血の怒り</b>を発動する。<br><b>血の怒り:</b>\\n<b>血の怒り</b>が発動中、<b>鬼</b>は死に至らしめるほどの力を得て、追加アビリティの<b>鬼の猛進</b>と<b>鬼の一撃</b>が使えるようになる。<br><br><b>特殊アビリティ:鬼の猛進</b><br><b>血の怒り</b>が発動中、<i>能力ボタン</i>を長押しして<b>鬼の猛進</b>を実行する。このアビリティにより<b>鬼</b>は広い範囲を高速で移動することができる。<br><br><b>特殊攻撃: 鬼の一撃</b><br><b>血の怒り</b>の発動中、<i>攻撃ボタン</i>を長押しして進行方向に向かって<b>鬼の一撃</b>を実行する。<b>鬼の一撃</b>の有効な突進範囲は広く、無傷の生存者に攻撃が命中すると即座に瀕死状態に陥れる。","name":"山岡の怒り","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"デススリンガーの創意工夫によって生み出されたハイブリッドライフル。従来の弾薬をチェーン付きの鋭い銛に置き換え、大幅な改造を加えたこの唯一無二の発明品で懸賞首を引き寄せる。<br><br><b>贖い主</b><br><i>能力ボタン</i>を長押しすると照準をのぞき込む。 <i>攻撃ボタン</i>を押すと銛を発射し、銛が刺さった生存者は意思に反して<b>デススリンガー</b>の元へとたぐり寄せられる。<br><b>引き寄せる：</b><br>銛が突き刺さった生存者を、<i>能力ボタン</i>を押して自分の方へ引き寄せることができる。生存者は鎖と格闘したり、周囲の物で鎖を圧迫して壊そうと試みたりする。これをすると<b>デススリンガー</b>は束の間怯み、生存者は負傷状態から<b>深手</b>のステータス効果が付与される。 生存者に銛が刺さっている間に<i>通常攻撃</i>をすると<b>デススリンガー</b>と生存者にペナルティなく鎖が壊れる。銛が刺さった無傷の生存者に<i>通常攻撃</i>が命中した場合も<b>深手</b>のステータス効果が付与される。<br><b>リロード：</b><br><b>贖い主</b>は毎回発射する度、リロードする必要がある。<i>アビリティ発動のボタン</i>を長押しすると<b>贖い主</b>をリロードする。","name":"贖い主","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"苦悶の扉を開き、裁きを受けよ！大鉈が大地を引き裂き地獄のような構造物が現れて、近寄るすべての者に激しい苦痛をもたらす。<br><br><b>裁きの儀式</b><br><i>能力ボタン</i>を押して発動させ、好きな方向に移動して地面にトレイルを刻み込む。<br><br>トレイルの上を歩くか走って通った生存者は、<i>殺人鬼の本能</i>を呼び起こして<i>煩悶</i>のステータス効果を受ける。<i>煩悶</i>の効果を受けている生存者は瀕死状態になると、<b>贖罪の檻</b>へ送り込まれる可能性がある。<br><br><b>特殊攻撃：地獄の罰</b><br><b>裁きの儀式</b>が発動中、<i>攻撃ボタン</i>を押すと<b>地獄の罰</b>を発動する。これによりエネルギーの波動を解き放ち、軌道上の生存者にダメージを与える。<br><br><b>特殊アビリティ：贖罪の檻</b><br><i>煩悶</i>のステータス効果を受けた瀕死状態の生存者の前に立ちはだかって<i>アビリティ発動のボタン</i>を押し、<b>贖罪の檻</b>に送り込む。<b>贖罪の檻</b>に入った生存者はフックに吊るされているかのように処刑することができる。召喚儀式の第2段階で、生存者はエンティティから逃れるためにスキルチェックを完了せざるを得なくなる。<br><br><b>贖罪の檻</b>から救出された生存者、あるいは他の生存者を救出した生存者は、<i>煩悶</i>から解放される。<br><br><b>特殊アビリティ：最後の審判</b><br>フックまたは檻の中ですでに耐久フェーズに入り、<i>煩悶</i>に苦しむ瀕死状態の生存者の前に立ちはだかって<i>アビリティ発動のボタン</i>を押すと、その生存者を処刑する。","name":"裁きの儀式","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"パチュラの血清が彼の体内を駆け巡り、精神と身体を堕落させたが、異常な身体能力を与えた。<br><br><b>特殊アビリティ：突進</b><br><i>能力ボタン</i>を押すと高速で前方に<b>突進</b>する。このアクションは<b>突進</b>トークンを消費する。<b>突進</b>の発動中は攻撃を行えない。<br><br>マップ上の壁や障害物に<b>突進</b>すると、<b>激突</b>を発動する。<b>突進</b>が壁や障害物に当たらなかった場合や<b>突進</b>トークンがなくなると、短時間の疲労状態になりトークンのリチャージを開始する。<br><br><b>特殊攻撃：死の突進</b><br><b>激突</b>後、<i>能力ボタン</i>を押すと<b>死の突進</b>が発動する。このアクションは<b>突進</b>トークンを消費する。<b>死の突進</b>は<i>攻撃ボタン</i>を押して攻撃を行えるという以外は<b>突進</b>と同様の能力を発揮する。","name":"胴枯の堕落","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"血と心の傷によって永遠に結合したツインズは、共有する体から離れるパワーを授かった。協力して狩りをする弟と姉は生存者にとって2倍の驚異となる。<br><br><b>特殊アビリティ：血の結束</b><br><i>能力ボタン</i>を押すと<b>ヴィクトル</b>を解放する。<i>アビリティ発動のボタン</i>をタップすると<b>シャルロット</b>と<b>ヴィクトル</b>の操作を切り替える。<br><br><b>ヴィクトル</b>は操作されずにいると<b>殺人鬼の本能</b>が発動し、彼の付近を歩行中または走行中の生存者のオーラが<b>シャルロット</b>に視えるようになる。<b>ヴィクトルの</b>甲高い叫び声を聞いた生存者は影響を受けやすい。ただし<b>シャルロット</b>が操作されている間、生存者は<b>ヴィクトル</b>を潰すことができる。<br><br><b>ヴィクトル</b>は潰されると、一定時間が経過した後で<b>シャルロット</b>の体の一部として復活する。<br><br><b>特殊攻撃：飛び付き</b><br><b>ヴィクトル</b>の操作中に<i>アビリティ発動のボタン</i>を長押しすると<b>飛び付き</b>をチャージし、<i>攻撃ボタン</i>で解き放つ。<br><br><b>飛び付き</b>が命中した生存者はダメージを受ける。<b>ヴィクトル</b>は、無傷状態の生存者にはしがみつく。これにより<b>殺人鬼の本能</b>が発動し、付近にいるすべての生存者の居場所が判明する。しがみつかれた生存者はその間、<b>衰弱</b>、<b>忘却</b>、<b>行動不能</b>のステータス効果を受け、ロッカーへの進入と脱出ゲートからの脱出が不可になる。しがみつかれている間、生存者は<b>払い除け</b>アクションを完了すると<b>ヴィクトル</b>を潰すことができる。<br><br><b>飛び付き</b>が外れた場合、<b>ヴィクトル</b>は一瞬だけ脆弱になり、生存者は彼を潰すことが可能になる。ヴィクトルは自分の背より高い障害物に着地すると自滅する。","name":"血の結束","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>魅惑的なスキルを生涯をかけて磨き上げたハク・ジウンは、ナイフを速射する。</i><br><br><b>名演</b><br><br><b>ナイフを60本</b>持った状態で儀式を開始する。<i>能力ボタン</i>を長押しすると腕を構え、ナイフを投げるモードに入る。<br><br>投げモードの間、<i>攻撃ボタン</i>をタップするとナイフを1本投げ、<i>攻撃ボタン</i>を長押しすると連射する。連射するとコントロールと投げる速度は上がるが、移動速度は低下する。ロッカーにナイフが補充される。<br><br><b>裂傷メーター：</b>ナイフが命中するたびに生存者は<b>裂傷メーター</b>が上昇する。メーターが満タンになると生存者はダメージを受け、負傷するか、ダウンする。<br><br>短時間ナイフが命中しなかった場合、生存者の裂傷メーターは徐々に低下する。通常攻撃を受けた生存者は裂傷メーターが即座に低下する。<br><br><b>特殊アビリティ：メインイベント</b><br>ナイフが命中するたびに<b>イベントメーター</b>が上昇する。満タンになった状態で<i>アビリティ発動のボタン</i>を押すと<b>メインイベント</b>が発動する。このモードに入ると、トリックスターは<b>メインイベント</b>が解除されるまでナイフを自動的に無制限で投げる。発動中は投げる速度が大幅に上昇し、どれだけ投げても移動速度が低下しなくなる。<b>メインイベント</b>は<i>アビリティ発動のボタン</i>を押すと解除される。解除を行うと<b>イベントメーター</b>がゼロにリセットされ、<b>名演</b>のクールダウンが開始する。","name":"名演","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"凄まじい変異を引き起こすウィルス。他者への感染能力を持ち、ネメシスの内なる敵意と力を増大する効力がある。<br><br><b>特殊攻撃：触手打撃</b><br>能力ボタンを長押ししてチャージする。チャージが完了すると攻撃ボタンをタップして<b>触手打撃</b>を放つ。<b>触手打撃</b>を命中させると生存者に<b>汚染</b> のステータス効果を与え、<b>変異度</b>が上昇する。すでに<b>汚染</b>状態の生存者は<b>触手打撃</b>によってダメージを受ける。<br><br>生存者は<b>サプライケース</b>に入った<b>ワクチン</b>を使って自分や他の生存者の<b>汚染</b> を治すことができる。<b>ワクチン</b>の個数には上限がある。<b>ワクチン</b>を使用した生存者は殺人鬼の本能によってその位置が判明する。<br><br><b>変異度：</b><b>変異度</b>が上がると能力が拡大する。<b>変異度2</b>でパレットと破壊可能な壁が<b>触手打撃</b>で破壊できるようになる。<b>変異度3</b>で<b>触手打撃</b>の範囲が広がる。t-ウィルスのアイコンに現在の<b>変異度</b>のレベルが表示される。<br><br><b>特殊戦力：ゾンビ</b><br><b>ゾンビ</b>は攻撃した生存者に<b>汚染</b>効果を与える。生存者がすでに<b>汚染</b>状態の場合はダメージを与えて負傷させる。<br><br><b>ゾンビ</b>は<b>触手打撃</b>で撃破することができ、撃破すると<b>変異度</b>が上昇する。生存者はゾンビをパレットで撃破することができる。撃破された<b>ゾンビ</b>は短時間で再び出現する。","name":"t-ウィルス","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/jp/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"このマッチの全プレイヤーが、全カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>重複する</li>","name":"血塗れのパーティーリボン","flavor":"「団結した人々が、叫びながら去っていったあの素晴らしい瞬間を思い出すための証。」","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"闇の霧の濃度が<b>少し減少する。</b><br><li>重複する</li>","name":"澄んだ試験薬","flavor":"「霧が立ち込め、全てを狂気に呑み込んでいく。そこには逃げ場も、出口も、安全な場所も無いが、池で汲んだ綺麗な水はある。」- 筆者不明の手帳","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"闇の霧の濃度が<b>少し増加する。</b><br><li>重複する</li>","name":"薄い試験薬","flavor":"「身体が痺れる。命に関わるほどの寒さだ。」","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"闇の霧の濃度が<b>そこそこ増加する。</b><br><li>重複する</li>","name":"霞がかった試験薬","flavor":"「この霧はとても魅惑的で、うっとりする。愛おしいと同時に、恐ろしくもある。」- ドナのスケッチブック","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"闇の霧の濃度が<b>すごく増加する。</b><br><li>重複する</li>","name":"濁った試験薬","flavor":"「どうやらこの霧は俺達をあの化け物から守ってくれるようだ。だがこの霧は毒であり、俺達を蝕んで闇と狂気で満たしていく。」- 筆者不明の手帳","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"エンティティに<b>月が最も暗くなるよう</b>願う。","name":"新月の花束 ","flavor":"「寝床に戻ろう、今夜は月が出ないからな。」","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"エンティティに<b>月が暗くなるよう</b>願う。","name":"三日月の花束","flavor":"「『心配しないで。私があなたたちの秘密を守りましょう。』月はゆっくりと、ニコリという微笑みに変わる。…あるいは、\\"ニヤリ\\"かもしれない。」","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"エンティティに<b>月が明るくなるよう</b>願う。","name":"半月の花束","flavor":"「下弦の月が顔を出し、上空から獲物を見下ろす。」","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"エンティティに<b>月が最も明るくなるよう</b>願う。","name":"満月の花束","flavor":"「月が出る。狼が吠える。狩りが始まる合図だ。」","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"これを燃やすとマクミラン・エステートに送られる確率が<b>少し上昇する。</b><br><li>重複する</li>","name":"マクミランの帳簿のページ","flavor":"「色褪せて破けた台帳の1ページ。マクミランの印鑑以外は判読できない。」","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"これを燃やすとマクミラン・エステートに送られる確率が<b>かなり上昇する。</b><br><li>重複する</li>","name":"サインの入った台帳のページ","flavor":"「採鉱設備とその他の取引について書かれている台帳の色褪せた1ページ。アーチー・マクミランの署名がある。」","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"これを燃やすとマクミラン・エステートに送られる確率が<b>とてつもなく上昇する。</b><br>","name":"マクミランの指骨","flavor":"「マクミランの白骨死体が鉱山の倉庫の地下で発見された。彼の足の骨は粉々に打ち砕かれており、膝の上に採掘用ハンマーが置いてあった。」","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"これを燃やすとオートヘイヴン・レッカーズに送られる確率が<b>少し上昇する。</b><br><li>重複する</li>","name":"割れたナンバープレート","flavor":"「ひどく錆びて曲がり、裂けている鉄板。」","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"これを燃やすとオートヘイヴン・レッカーズに送られる確率が<b>かなり上昇する。</b><br><li>重複する</li>","name":"ヴァージニア州のナンバープレート","flavor":"「錆びて歪んだ、ヴァージニア州のナンバープレート。」","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"これを燃やすとオートヘイヴン・レッカーズに送られる確率が<b>とてつもなく上昇する。</b><br><li>重複する</li>","name":"アザロフのカギ","flavor":"「どの車のものか分からない壊れたカギ。キーホルダーにより、持ち主はA. アザロフという名前であることがわかる。」","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"これを燃やすとコールドウィンド・ファームに送られる確率が<b>少し上昇する。</b><br><li>重複する</li>","name":"牛用タグ28番","flavor":"「『28』と番号が振られた血痕つきの牛用タグ。」","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"これを燃やすとコールドウィンド・ファームに送られる確率が<b>かなり上昇する。</b><br><li>重複する</li>","name":"コールドウィンドの牛用タグ81番","flavor":"「『コールドウィンド・ファーム』と書かれ、『81』と番号が振られた血痕つきの牛用タグ。」","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"これを燃やすとコールドウィンド・ファームに送られる確率が<b>とてつもなく上昇する。</b><br><li>重複する</li>","name":"ハート型のロケットペンダント","flavor":"「銀色でハート型のロケットネックレス。\\"E+M\\"という文字が刻まれている。」","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"これを燃やすとクロータス・プレン・アサイラムに送られる確率が<b>少し上昇する。</b><br><li>重複する</li>","name":"精神疾患の札","flavor":"「破れて霞み、字を読むことができない札。」","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"これを燃やすとクロータス・プレン・アサイラムに送られる確率が<b>かなり上昇する。</b><br><li>重複する</li>","name":"P. エリコットの精神疾患の札","flavor":"「クロータス・プレン・アサイラムに転院させられることを示す、フィリップ・エリオットという人物を識別するためのピンク色の札。」","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"これを燃やすとクロータス・プレン・アサイラムに送られる確率が<b>とてつもなく上昇する。</b><br>","name":"黒焦げた結婚写真","flavor":"「ある男女の、結婚式の写真。焼けて顔の部分は黒焦げており、判別することはできない。」","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"これを燃やすとハドンフィールドに送られる確率が<b>少し上昇する。</b><br><li>重複する</li>","name":"収穫祭のチラシ","flavor":"「\'78年ハドンフィールド収穫祭の色褪せたチラシ。大きなカボチャのキャラクターが描かれている。」","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"これを燃やすとハドンフィールドに送られる確率が<b>かなり上昇する。</b><br><li>重複する</li>","name":"老朽化した板壁","flavor":"「カビが生えて腐食した樫の板。似たものがハドンフィールドのほとんどの家で見られる。」","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"これを燃やすとハドンフィールドに送られる確率が<b>とてつもなく上昇する。<br></b><br>","name":"ストロード不動産のカギ","flavor":"「平凡な家屋のカギ。ダンボールの『ストロード不動産』と書かれたタグがついており、手書きで『ランプキン・レーン45』と書かれている。」","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"これを燃やすとバックウォーター・スワンプに送られる確率が<b>少し上昇する。</b><br><li>重複する</li>","name":"煙を放つロープ","flavor":"「まだ温かい煙が出ている、焼けた船舶用ロープ。」","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"これを燃やすとバックウォーター・スワンプに送られる確率が<b>かなり上昇する。</b><br><li>重複する</li>","name":"煙を放つ歓迎の看板","flavor":"「水に曝された粗悪な糸杉の板で作られた歓迎の看板。焦げており、まだ煙が出ている。」","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"これを燃やすとバックウォーター・スワンプに送られる確率が<b>とてつもなく上昇する。</b><br>","name":"おばあちゃんの料理本","flavor":"「『とっても美味しい特製チリ料理』といったおぞましい人肉レシピを収録する革製の立派な本。」","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"これを燃やすとレリー記念研究所に送られる確率が<b>少し上昇する。</b><br><li>重複する</li>","name":"緊急証明書","flavor":"「緊急治療のため患者の即時勾留を認める、黄色いカーボンコピーの証明書。写った情報は汚れていて読めない。」","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"これを燃やすとレリー記念研究所に送られる確率が<b>そこそこ上昇する。</b><br><li>重複する</li>","name":"精神医学的評価報告書","flavor":"「ハーマン・カーターの署名がある精神医学的報告書。とある患者の記憶力の低下についての説明と、処置の次の段階に関する提案が記述されている。」","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"これを燃やすとレリー記念研究所に送られる確率が<b>とてつもなく上昇する。</b><br>","name":"割れた眼鏡","flavor":"「曲がった読書用眼鏡。割れたレンズには乾いた血の染みがこびりついている」","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"これを燃やすとレッド・フォレストに送られる可能性が<b>少し上昇する。</b><br><li>重複する</li>","name":"絵が描かれた川の石","flavor":"「せせらぎで磨かれた、すべすべしてやわらかい岩。赤、黒と白の塗料で、厳しい表情の熊が描かれている。」","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"これを燃やすとレッド・フォレストに送られる確率が<b>かなり上昇する。</b><br><li>重複する</li>","name":"児童書","flavor":"「古びてボロボロな童話集。ページはどこかに失われてしまっている。」","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"これを燃やすとレッド・フォレストに送られる確率が<b>とてつもなく上昇する。</b><br>","name":"最後のマスク","flavor":"「美しく作りあげられたトラのマスク。子供の顔に心地よくぴったりと合うだろう。裏側にかすれたキリル文字で書かれたメモがある。」","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"これを燃やすとスプリングウッドに送られる確率が<b>とてつもなく</b>上昇する。<br>","name":"ハーメルンの笛吹き","flavor":"「町に裏切られた彼は、復讐として彼らの子供達全員を求めた。」","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"このオファリングを燃やすと、マッチ終了後にアドオンを失わなくなる。<br>","name":"黒の魔除け","flavor":"「我が声を聞き給え。我を赦し給え。我を虚無から守り給え。」","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"このオファリングを燃やすと、アイテムとアドオンを失わなくなる。","name":"白の魔除け","flavor":"「かの邪悪を退けてください。私を守ってください。そして、消え去ってください。」","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"これを燃やすと山岡邸に送られる確率が<b>とてつもなく上昇する。</b><br>","name":"山岡家の家紋","flavor":"「崩壊した家庭を抜け出すことはできない。あの記憶に付きまとわれなくなるまで逃げるしかない。」","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"エンティティに呼びかけ、特定の領域に送られる確率を変えるオファリングをすべて拒否してもらう。<br>4つの同一の領域オファリングがプレイされた場合のみ、この効果は解除される。","name":"生贄の魔除け","flavor":"「我々は盲目に意志を捨て、あなたのお導きを請う。」","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"燃えるとミッドウィッチ小学校に送り込まれる確率が<b>とてつもなく上昇する</b>。","name":"メアリーへの手紙","flavor":"「あいまいな眠りの中で、夢見るのはあの町。」","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"これを燃やすとギデオン食肉工場に送られる可能性が<b>とてつもなく上昇する。</b><br>","name":"ジグソーパズルのピース","flavor":"「おめでとう。君はまだ生きている。多くの人間は\\"生\\"に感謝をしない。 だが君は違う。今日からはな。」","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"燃やされると、ホーキンス国立研究所に送られる可能性が<b>とてつもなく上昇する</b>。","name":"ホーキンス国立研究所のIDカード ","flavor":"「びしょ濡れで血の染みが付いた、シリアル番号の書かれたIDカード」","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"これを燃やすとグレンベールの墓に送られる確率が<b>とてつもなく増加する</b>。","name":"ホコリだらけの首吊縄","flavor":"「この息の詰まるホコリまみれの土地で生き延びようとしている奴らに聞けば、首吊縄の本当の意味がわかるだろう。慈悲だよ。」","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"3周年を一緒に記念する、胃の中身が逆流するようなおぞましいケーキ。この儀式のすべてのプレイヤーに、全カテゴリーで<b>103%</b>の追加ブラッドポイントを与える。<br><li>重複する</li>","name":"身の毛もよだつケーキ","flavor":"「記念日おめでとう！3周年に一緒に乾杯！<br>– Dead by Daylightチーム","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"4周年を一緒に祝うための、見事までに残酷なケーキ。身の毛もよだつケーキよりも1%おいしい。この儀式のすべてのプレイヤーに、全カテゴリーで<b>104%</b>の追加ブラッドポイントを与える。<br><li>重複する</li>","name":"むごたらしいケーキ","flavor":"「記念日おめでとう！今後のさらなる発展に幸あれ！」<br>– Dead by Daylight開発チーム","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/jp/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"薄い広角レンズ。傷一つない状態で、照射距離と引き換えに懐中電灯の光を拡散するように作られている。<br><li>懐中電灯の光が<b>そこそこ拡大する</b></li><li>懐中電灯の照射距離が<b>少し減少する</b></li>","name":"広角レンズ","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"強い光を発する高ワットの小さな電球。<br><li>懐中電灯の照射半径が<b>少し減少する</b></li><li>光の明るさが<b>少し増加する</b></li><li>目眩ましの効果時間が<b>少し増加する</b></li>","name":"強力電球","flavor":"「どんなに強い光であっても黒い霧の闇を照らすことはできない。」","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"グリップを強化するために懐中電灯に巻かれた革の紐。<br><li>懐中電灯の精度が<b>少し上昇する</b></li>","name":"革のグリップ","flavor":"「手汗のせいで命を落とした奴は数え切れん。」","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"ブランド名不明の電池。<br><li>懐中電灯の使用可能時間が<b>2秒</b>増加する</li>","name":"電池","flavor":"「また切れかけの乾電池だ。」","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"懐中電灯の光を増大させる、レンズと反射器のセット。<br><li>光の明るさが<b>そこそこ増加する</b></li><li>目眩ましの効果時間が<b>そこそこ増加する</b></li>","name":"全反射レンズ","flavor":"「この光で奴らを闇から引きずり出してやる。」","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"懐中電灯にぴったりはまる、ゴム製のグリップ。<br><li>懐中電灯の精度が<b>そこそこ上昇する</b></li>","name":"ゴム製のグリップ","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"懐中電灯の電池の寿命を延ばすように設計された白熱電球。<br><li>懐中電灯の電池消費量が<b>そこそこ減少する</b></li>","name":"低電流フィラメント","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"「工業用」と書かれた電池。<br><li>標準の懐中電灯の使用可能時間が<b>4秒</b>増加する</li>","name":"大容量電池","flavor":"「8時間保つと謳われていた電池が、黒い霧の中ではほんの数秒で尽きてしまう。」","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"懐中電灯の光を収束し、強さを増すことができる厚いレンズ。<br><li>懐中電灯の照射距離が<b>少し増加する</b></li><li>懐中電灯の照射半径が<b>少し減少する</b></li><li>光の明るさが<b>少し増加する</b></li><li>目眩ましの効果時間が<b>少し増加する</b></li>","name":"集光レンズ","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"長持ちする最近の乾電池。<br><li>懐中電灯の使用可能時間が<b>6秒</b>増加する</li>","name":"長寿命の電池","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"強力な光を放つ化学電球。<br><li>光の明るさが<b>かなり増加する</b></li><li>目眩ましの持続時間が<b>かなり増加する</b></li>","name":"強力なハロゲンランプ","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"傷に耐性があるサファイアでできた広角レンズ。光の強さと距離を調整する。<br><li>懐中電灯の光が<b>そこそこ広くなる</b></li><li>懐中電灯の光が<b>少し強くなる</b></li><li>光の明るさが<b>そこそこ増加する</b></li><li>目眩ましの持続時間が<b>そこそこ増加する</b></li>","name":"高性能サファイアレンズ","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"スイッチを切ってもぼんやりと明かりを放つ、製造元不明の重くくすんだ電球。<br><li>光の明るさが<b>とてつもなく増加する</b></li><li>目眩ましの持続時間が<b>とてつもなく増加する</b></li><li>懐中電灯の電池消費量が<b>少し増加する</b></li>","name":"変わった電球","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"儀式で祈りを捧げるために使われた、固く結ばれた紐。カギに取り付けることができる。<br><li>カギの使用時間が<b>10秒</b>増加する</li>","name":"祈祷者のロープ","flavor":"「好きなだけ祈るがいいさ。あんたの言葉はどこかに消えていくだろう。そう、霧の中に。」","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"穴が開いて傷がついた真珠。小さな環により、カギに取り付けることができる。<br><li>カギが持つオーラ可視能力の有効距離が<b>そこそこ増加する</b></li>","name":"傷ついた真珠","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"儀式用の数珠。様々な大きさの艶がないビーズで作られている。カギに取り付けることができる。<br><li>カギの使用可能時間が<b>15秒</b>増加する</li>","name":"祈祷者の数珠","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"かなりすり減った真鍮のコイン。彫刻や模様があったかもしれないが、今や全く読み取れない。カギの環に繋げてオーラ可視能力を伝達できる。<br><li>自分から<b>24メートル</b>以内にいる<b>生存者のオーラ</b>が視えるようになる</li>","name":"腐食したトークン","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"鈍く光る金のコイン。両面とも無地で何も彫られていない。カギの環に繋げてオーラ可視能力を伝達できる。<br><li>自分から<b>48メートル</b>以内にいる<b>生存者のオーラ</b>が視えるようになる</li>","name":"金のトークン","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"形は普通だが、珍しい青黒い光沢を放つリング。どんなに深い闇の中でも、持ち主とカギを結びつける。<br><li>死亡してもカギを失わず、代わりにこのアドオンを失う</li>","name":"編み込みリング","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"鈍い振動音を発する不透明なガラス片。黒い錠前を解除するためにカギが使われたとき、このガラスのトークンはカギが破壊されるのを防ぎ、黒い霧のエネルギーをガラスに伝達する。<br><li>黒い錠前を解除してもカギはなくならないが、代わりにこのアドオンを失う</li>","name":"白いガラス","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"黒い血管が走っている、血のように赤い琥珀。手で触ると暖かい。カギの環に繋げてオーラ可視能力を伝達できる。<br><li>カギのエネルギーを<b>大きく消費</b>し、<b>32メートル</b>以内の<b>殺人鬼のオーラ</b>を表示する</li>","name":"真っ赤な琥珀","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"厚みのある布切れ。色褪せた地図の一部が描かれているが、これだけでは役に立たない。<br><li>マップに<b>5秒チャージ</b>を追加する</li>","name":"マップの付録","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"細い電線。元あった場所から引きちぎられたように両端が傷ついている。マップに巻き付けるとオーラ可視能力を強化する。<br><li><b>脱出ゲート</b>の場所を追跡できるようになる</li>","name":"黄色いワイヤー","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"ゴム版がついた木製の判子。誰が何のために使用していたかは定かでない。マップに使用できる。<br><li>マップの追跡可能距離が<b>そこそこ増加する</b></li>","name":"珍しいスタンプ","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"薄紫色で薄気味悪い、半透明のどろどろした物体。何でできているかはわからないが、とても熱に強い。<br><li>マップの燃焼速度が<b>そこそこ低下する</b></li>","name":"抑制剤ゼリー","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"固くてざらざらした濃い赤のより糸。マップに巻き付けるとオーラ可視能力を強化する。<br><li><b>殺人鬼の所有物</b>を追跡できるようになる。</li>","name":"赤いより糸","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"金のリングで囲まれた照星。マップを拡大でき、特定の場所にマーキングすることができる。生存者から見えるエネルギーを放出する。<br><li>セカンダリアクションでマーキングができるようになる</li><li>全ての生存者から見ることができるマーカーを作成する</li>","name":"ガラスの照星","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"頑丈なブロンド色の木材から彫り出された判子。底には「kw\'zvre\'od」という意味不明な文字が彫られている。マップと一緒に使用できる。<br><li>マップの追跡可能距離が<b>かなり増加する</b></li>","name":"奇妙なスタンプ","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"すべすべとして柔らかそうな黒い紐。マップに巻き付けるとオーラ可視能力を強化する。<br><li><b>黒い錠前</b>の場所を追跡できるようになる。</li>","name":"黒い絹のより糸","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"複雑なレンズの組み合わせ。驚くほど入り組んだ部品で囲まれている。ギアがレンズの焦点の動きを自動調整し、人には見えないはずのものが見えるようになる。<br><li>マップを使用したときに表示されるオーラが全ての生存者から見えるようになる</li>","name":"クリスタルの照星","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"使い捨ての医療用手袋。二次汚染を予防する。<br><li>スキルチェックでグレイトを出した際に追加される修理進行度が<b>そこそこ増加する</b></li>","name":"ゴム製手袋","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"小さな傷を塞ぐための医療用テープ。<br><li>治療速度が<b>少し上昇する</b></li>","name":"バタフライテープ","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"救急箱の中によく入っている包帯セット。<br><li>医療キットに<b>8チャージ</b>追加する。</li>","name":"包帯","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"あふれた血を吸い取り、傷口を見やすくするスポンジ。<br><li>スキルチェックでグレイトを出した際に追加される修理進行度が<b>かなり増加する</b></li>","name":"スポンジ","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"粘着剤がついた包帯のパック。クリップが無くても貼り付くため、位置がずれることがなく素早い応急手当が可能。<br><li>医療キットに<b>8チャージ</b>追加する</li><li>治療速度が<b>少し上昇する</b></li>","name":"テーピングテープ","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"厳密には医療器具ではないが、激痛と引き換えに傷口を素早く塞ぐことができる。<br><li>スキルチェックの発生確率が<b>そこそこ上昇する</b></li><li>スキルチェックでグレイトを出すと<b>100%のボーナスブラッドポイント</b>を獲得する</li><li>治療速度が<b>少し上昇する</b></li>","name":"針と糸","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"衣服を簡単に切断できるように設計されたハサミ。<br><li>治療速度が<b>そこそこ上昇する</b></li>","name":"医療用ハサミ","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"様々な傷に使える、滅菌ガーゼ。外傷用応急処置セットの1つ。<br><li>医療キットに<b>12チャージ</b>追加する</li>","name":"ガーゼのロール","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"身体の組織を縫合し、固定するために使われる医療器具。非常に効果が高いが、使用難度は高い。<br><li>スキルチェックの発生確率が<b>かなり上昇する</b>。</li><li>スキルチェックでグレイトを出すと<b>150% の追加ブラッドポイント</b>を獲得する。</li><li>回復速度が<b>少し上昇する</b>。</li>","name":"外科用縫合糸","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"出血が激しい傷を手当てするための、ゲル状のパッド。<br><li>医療キットに<b>16チャージ</b>追加する</li>","name":"ジェルのパッド","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"腹部に重傷を負ったとき、体液が漏れ出すのを防ぐことができる吸収性のパッド。<br><li>治療速度が<b>かなり上昇する</b></li><li>アイテムのチャージ量が<b>8</b><b>減少する</b></li>","name":"腹部用パッド","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"凝固性を持つ白い粉。薬品を創傷に使うことにより止血する。<br><li>医療キットで治療中に<i>セカンダリアクション</i>ボタンを押して止血剤を使用する</li><li><i>止血剤</i>を負傷した生存者に使用すると、生存者は<b>我慢</b>の効果を<b>8秒間</b>得る<li>使用すると医療キットを消耗する</li>","name":"止血剤","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"止血用の薬剤。出血をものの数秒で止めることができる。<br><li>医療キットで治療中に<i>セカンダリアクション</i>ボタンを押して止血用注射器を使用する</li><li>効果を受けた生存者は、使用<b>16</b>秒後に健康状態を受動的に獲得する</li><li>所要時間は<i>治療の速度</i>を左右するパークやアイテム、アドオンによって変化する</li><li>この効果は影響を受けた生存者の健康状態が変わるか、殺人鬼に捕獲されると終了する</li><li>使用すると医療キットを消耗する</li>","name":"止血用注射器","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"管やワイヤーをまとめ、破損や怪我を防ぐことができる便利な道具。<br><li>修理音の聴こえる範囲が8メートル短くなる</li>","name":"スプリングクランプ","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"スプリングやネジ、歯車など、ほとんど使い物にならないガラクタ。<br><li>工具箱に<b>8チャージ</b>追加する</li>","name":"鉄クズ","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"妙に綺麗なぼろきれ。<br><li> 工具箱の修理速度が<b>少し上昇する</b></li>","name":"綺麗なぼろきれ","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"重いが持ち運び可能な銅線スプール。<br><li>工具箱に<b>12チャージ</b>追加する</li>","name":"ワイヤーのリール","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"機械の内部で、長さが足りないボルトに角度や柔軟性を与える器具。<br><li>工具箱の修理速度が<b>そこそこ上昇する</b></li>","name":"可動式ジョイント","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"細かい作業はしにくいが、怪我から手を保護する分厚い手袋。<br> <li>工具箱でフックを破壊するときに殺人鬼に知られるのを防ぐ</li>","name":"保護手袋","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"何者かに修理方法が走り書きされたと思われる木の皮。<br><li>工具箱で修理する間のスキルチェックを排除する</li>","name":"説明書","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"丈夫なグリップがついた可動レンチ。工具箱には欠かせない。<br><li>工具箱を使って破壊されたフックが再出現するまでの時間が15秒長くなる</li>","name":"グリップレンチ","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"基本の切断用道具。木製の取っ手と刃がついた鉄線でできている。<br><li>工具箱の破壊工作の速度が<b>少し上昇する</b></li>","name":"カッティングワイヤー","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"鉄製の刃がついた小さなノコギリ。<br><li>工具箱による破壊工作の速度が<b>そこそこ上昇する</b></li>","name":"弓ノコ","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"場違いで奇妙に思える、機械式の複雑なパーツ。新品のように輝いており、まるで工場から出荷されたばかりのようだ。<br><li><b>「工具箱で修理」</b>アクションが<b>「真新しいパーツを装着」</b>に置き換わる</li><li><i>「真新しいパーツを装着」</i>を実行することで、<b>5秒</b>かけて発電機の修理が<b>15%</b>進行する</li><li>装着中、<b>2回難しいスキルチェックに直面する</li><li>スキルチェックに成功するたびに<b>5%</b>修理が進み、最大<b>25%</b>進行する</li><li><i>使用後このアドオンは消費される</i></li>","name":"真新しいパーツ","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"霧から現れ、未知の不可解なエネルギーと共鳴する彫刻を施した結婚指輪。<li>オブセッションのオーラが見えるようになる。</li><li>殺人鬼のオブセッションになる確率が減少する。</li><li>効果は重複する</li>","name":"珍しい結婚指輪","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/jp/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"目標カテゴリーのブラッドポイントを<b>50%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"月桂樹の匂い袋","flavor":"「乾いた葉が詰まった、小さな手縫いの匂い袋。かすかにお茶のような香りを放つ。」","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"目標カテゴリーのブラッドポイントを<b>75%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"新鮮な月桂樹","flavor":"「淀んだ沼の中で育つ、美しい紫の花。かすかにお茶のような香りを放つ。」","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"目標カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"いい香りの月桂樹","flavor":"「淀んだ沼の中で育つ、美しい紫の花。お茶のような強い香りを放つ。」","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"生存カテゴリーのブラッドポイントを<b>50%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"アマランサスの匂い袋","flavor":"「丸い穀物が詰まった、小さな手縫いの匂い袋。アマランサスは枯れることがないと言われている。」","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"生存カテゴリーのブラッドポイントを<b>75%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"新鮮なアマランサス","flavor":"「深紅の葉脈が目立つ、淡い緑色の葉。アマランサスは枯れることがないと言われている。」","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"生存カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"いい香りのアマランサス","flavor":"「深紅の葉脈が目立つ、淡い緑色の葉。根菜の強い香りを放つ。」","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"協力カテゴリーのブラッドポイントを<b>50%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"イチゲサクラソウの匂い袋","flavor":"「金色の花びらが4枚入った、小さな手縫いの匂い袋。サクラソウは、夜の帳が下りる直前に花開く。」","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"協力カテゴリーのブラッドポイントを<b>75%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"新鮮なイチゲサクラソウ","flavor":"「最も色づいた時に摘まれた金色の花々。サクラソウは、夜の帳が下りる直前に花開く。」","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"協力カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"いい香りのイチゲサクラソウ","flavor":"「最も色づいた時に摘まれた金色の花々。心地よい大地の香りをひときわ放つ。」","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"大胆カテゴリーのブラッドポイントを<b>50%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"ナデシコの匂い袋","flavor":"「淡い花びらと青い葉が入った、小さな手縫いの匂い袋。ツンとする香辛料のような香りを放つ。」","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"大胆カテゴリーのブラッドポイントを<b>75%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"新鮮なナデシコ","flavor":"「深紅の花芯が桃色の花びらで囲われた花々。ツンとする香辛料のような香りを放つ。」","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"大胆カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"新鮮なナデシコ","flavor":"「深紅の花芯が桃色の花びらで囲われた花々。ツンとする香辛料のような強い香りを放つ。」","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"生存者全員が、<b>全ての</b>カテゴリーのブラッドポイントを<b>25%</b>追加取得する。<br><li>重複する</li>","name":"縛られた封筒","flavor":"「開封されて再び封をされた後、4色のリボンで縛られた封筒。」","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"全カテゴリーのブラッドポイントを<b>25%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"封がされた封筒","flavor":"「宛先が書かれておらず、開封されていない黄ばんだ封筒。手紙の内容は永遠に謎となった。」","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"全カテゴリーのブラッドポイントを<b>100%</b>追加取得する。<br><li>自分のみ</li><li>重複する</li>","name":"脱出だ！ケーキ","flavor":"「このケーキの絵は、もちろん本物だ。」","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"運が<b>少し増加する。</b><br><li>重複する</li>","name":"白い粉のポーチ","flavor":"「何かわからない白い粉が入った、綿製の小さなポーチ。幸運を呼ぶと信じる人もいる。」","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>全ての</b>生存者の運が<b>そこそこ増加する。</b><br><li>重複する</li>","name":"クリーム粉のポーチ","flavor":"「黒塩でできた脆くて小さい像。跪いて捧げものをする女性の形をしている。幸運を呼ぶと信じる人もいる。」","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"運が<b>かなり上昇する。</b><br><li>重複する</li>","name":"粉末入れのポーチ","flavor":"「横の部分が手縫いされ、白い線の入った革製の小さなポーチ。中には月光で輝くクリーム色の粉末が詰まっている。幸運を呼ぶと信じる人もいる。」","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>全ての</b>生存者の運が<b>少し増加する。</b><br><li>重複する</li>","name":"塩のポーチ","flavor":"「黒塩の結晶が詰まった綿製の小袋。幸運を呼ぶと信じる人もいる。こぼさないように。」","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>すべての</b>生存者の運が<b>かなり上昇する。</b><br><li>重複する</li>","name":"ヴィゴの塩漬け唇入り瓶","flavor":"「引き裂かれた人間の唇を塩水漬けにして入れてある密閉保存瓶。幸運を呼ぶと信じる人もいる。」","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"エンティティに生成されるチェストが<b>1個</b>多くなるよう願う。<br><li>重複する</li>","name":"変色したコイン","flavor":"「光沢を失った丸い金属片。」","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"エンティティに生成されるチェストが<b>2個</b>多くなるよう願う。<br><li>重複する</li>","name":"輝くコイン","flavor":"「汚れのない、磨かれた金色の物体。」","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"エンティティを鎮め、世界に出現する処刑用フックの<b>距離</b>を<b>少し増加</b>させる。<br><li>重複する</li>","name":"石化した樫の木","flavor":"「劣化している石化した木。」","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"誰かと一緒にマッチを開始する。<br><li>シークレット</li>","name":"同盟の覆布","flavor":"「縫い合わせられた生地の切れ端。」","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"全ての生存者が同じ場所から開始する。<br><li>シークレット</li>","name":"団結の覆布","flavor":"「四角い洗いざらしの布。四隅に小さな結び目がついている。」","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"殺人鬼から可能な限り遠い地点でマッチを開始する。<br><li>シークレット</li>","name":"ヴィゴの覆布","flavor":"「俺はこの霧の中で何年も不思議な事を見てきたが、それでも霧の絶対的なルールを曲げる方法しかわからない。」- ヴィゴの手記","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/jp/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"潜在的なオーラ可視能力を解放する。発電機の修理が完了する度、殺人鬼のオーラを<span class=\\"Highlight1\\">{0}秒間</span>探知できる。<br>最後の発電機の修理を完了させた時には、殺人鬼のオーラを<span class=\\"Highlight2\\">{1}秒間</span>探知できる。","name":"闇の感覚","flavor":"「この年寄りの言葉を聞いていけ。ゆっくりと、慌てず、そしてあまり心配しすぎないようにすることだ！ヤツを倒す一番いい方法は、ヤツの考え方を知ることだ。」- マーフの失われたテープ","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"潜在的なオーラ可視能力を解放する。失敗への恐怖を伴う妄想により、同じ失敗を繰り返すことに対する心構えができる。<br>マッチ開始時及び発電機の修理が完了する度に、互いに近接している<span class=\\"Highlight1\\">{0}台</span>の発電機のオーラを<span class=\\"Highlight2\\">{1}秒間</span>探知できる。<br>発電機の場所を記録できるマップを持っている場合、<i>デジャヴ</i>によって発見した発電機が、マップに記録される。","name":"デジャヴ","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"無事に脱出できる可能性が高まったことがあなたを希望で満たし、翼を与える。脱出ゲートが通電すると<span class=\\"Highlight3\\">{1}秒間</span>、<span class=\\"Highlight1\\">{0}%</span>の<b><i>迅速</i></b>効果を受ける。<br>","name":"希望","flavor":"「みんな覚悟を決めて！やってやりましょう！」- ニッキの失われたテープ","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"潜在的なオーラ可視能力を解放する。あなたが吊るされているとき、生存者のオーラが他の生存者全員から視えるようになる。殺人鬼が<span class=\\"Highlight1\\">{0}メートル</span>以内にいるとき、他の生存者全員に殺人鬼のオーラが視えるようになる。<br><br>自分以外の生存者がフックに吊るされている場合、あなたは他の生存者全員のオーラを視ることができる。殺人鬼がフックに吊るされた生存者から<span class=\\"Highlight1\\">{0} メートル</span>以内にいる場合、あなたは殺人鬼のオーラを視ることができる。","name":"血族","flavor":"「仲間を思いやりましょうよ。ここではみんな一緒よ。」- スージャンの失われたテープ","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"軽やかにそっと走り、通ったあとの追跡を困難にする。<br>赤い傷マークが見えたまま残る時間が、通常より<span class=\\"Highlight1\\">{0}秒</span>減少する。<br>","name":"身軽","flavor":"「ゆっくりだ、奴はお前がいた場所を知っているんだからな…いつも言ってるだろ？『のんびり暮らせば長生きできる』ってな。」- ディランの失われたテープ","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"仲間を見捨てるなどあり得ない。最低でも1箇所の脱出ゲートが開くと、あなたは次の効果を得る。<br>他の生存者の治療時やフックから救助した時のブラッドポイントが<li><span class=\\"Highlight1\\">{0}%</span>増加する</li>他の生存者の治療速度やフックから救助した時の速度が<li><span class=\\"Highlight2\\">{1}%</span>上昇する</li><li>他の生存者全員のオーラが視えるようになる</li>","name":"誰も見捨てはしない","flavor":"「……フン、わかってるさ。だがな、皆で協力すればきっとヤツを裏をかいて一杯食わせられる。だから勝手なマネはするんじゃねぇぞ！」 - クライドの失われたテープ","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"潜在的なオーラ可視能力を解放する。<br><span class=\\"Highlight1\\">{0}メートル</span>以内にある、未開封のチェストのオーラと、マップ上のアイテムが視えるようになる。チェストからレア度の高いアイテムを発見する確率が<b>かなり</b>上昇する。<span class=\\"FlavorText\\">「長いこと先人たちはこんなかわいこちゃんたちをくすねてきたものだわ。」- アイゼユの失われたテープ</span>","name":"コソ泥の本能","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"あなたは、拒否されない危機感知能力を手に入れた。<span class=\\"Highlight1\\">45度</span>以内かつ<span class=\\"Highlight2\\">{0}メートル</span>以内にいる殺人鬼の方向を見ると、警告音が鳴る。発動するたびに<span class=\\"Highlight3\\">{1}秒間</span>のクールダウンがある。","name":"予感","flavor":"「嫌な予感がする！」","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"危機的な状況にあっても、あなたは活力に満ちあふれている。<span class=\\"Highlight1\\">負傷状態のとき、修理・破壊工作・治療・フックからの救助・乗り越え・浄化・ゲートの開放・開錠の速度が{0}</span>%<br>上昇する。<span class=\\"FlavorText\\">「集中するのよ、今がどんなに絶望的でも。」</span>","name":"逆境魂","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"あなたはフックから効率的に抜け出す方法を編み出した。<br><li>フックから自力で抜け出すために、もがける回数が<span class=\\"Highlight1\\">{0}回</span>増加する</li><li>フックから脱出できる確率が<span class=\\"Highlight2\\">{1}%</span>上昇する</li>","name":"ツルツルとした肉体","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"あなたは軽視できない危機感知能力を手に入れた。<span class=\\"Highlight1\\">45度</span>以内かつ<span class=\\"Highlight2\\">{0}メートル</span>以内に位置するトーテムの方向を見ると、警告音が鳴る。小さな獲物は発動するたび<span class=\\"Highlight3\\">{1}秒</span>のクールダウンがある。無力なトーテムと呪いのトーテムが浄化されるたびにトークンを1つ獲得する。トークン1つにつき小さな獲物の探知範囲が<span class=\\"Highlight4\\">5度</span>減少する。","name":"小さな獲物","flavor":"「やだね。」 - アンディーの失われたテープ","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"異常な悪寒により身に危険が迫っているのがわかる。殺人鬼が<span class=\\"Highlight1\\">{0}メートル</span>以内の範囲にいて、かつこちらをまっすぐ見ていると通知される。凍りつく背筋が発動している間はスキルチェックの発生確率が<span class=\\"Highlight2\\">{1}%</span>上昇し、スキルチェックの成功範囲が<span class=\\"Highlight3\\">{2}%</span>縮小する。凍りつく背筋が発動している間は、修理・破壊工作・治療・フックからの救出・乗り越え・浄化・脱出ゲート開放・開錠の速度がそれぞれ<span class=\\"Highlight4\\">{3}%</span>上昇する。","name":"凍りつく背筋","flavor":"「言葉がなくても聞こえる声があるのよ。耳を澄まして。」- サッシーの失われたテープ","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"あなたは究極のプレッシャーの下にあっても全力を発揮できる。自分が負傷しているとき、修理と治療の「スキルチェック：グレイト」成功範囲が<span class=\\"Highlight1\\">{0}%</span>増加する。","name":"痛みも気から","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"他の生存者を助けることで、自分の士気が高まる。<br><br>生存者をフックから救出すると、<span class=\\"Highlight3\\">{1}秒間</span>、他者を治療する速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。","name":"きっとやり遂げる","flavor":"「助け合ってひとつになれば、全員脱出できるって信じてる。」","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"オーラの視認能力を解放する。<span class=\\"Highlight1\\">{0}メートル</span>以内にいる仲間のオーラを可視化する。<br>","name":"絆","flavor":"「力を合わせよう、僕が助かるにはみんなに生き残ってもらわなくちゃいけないんだ！」- ドワイト","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"<span class=\\"Highlight2\\">{1}メートル</span>以内で発電機を修理している生存者は、修理速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。範囲内の生存者全員にも同じ上昇が適用される。<br>共同作業で取得するブラッドポイントが<span class=\\"Highlight3\\">{2}%</span>増加する。<br>「有能の証明」の効果は1度につき1つのみ適用される。<br>","name":"有能の証明","flavor":"「お前の実力を見せてみな！」- ドワイト","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"チームを組み、より効率的な協力が可能になる。<span class=\\"Highlight2\\">{1}メートル</span>以内にいる他の生存者の治療・破壊工作・フックからの救助・浄化・ゲートの開放・チェスト開錠の速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。<br>生存者には、「リーダー」の効果は1度につき1つのみ適用される。<br>他の生存者が「リーダー」の効果範囲外に出た場合でも、効果は<span class=\\"Highlight3\\">{2}</span>秒間持続する。","name":"リーダー","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"あなたは素早く障害物を乗り越えたり、ロッカーに隠れたりするとき、他の人たちのような大きな音を立てずに済む。<br><br>乗り越えや隠れるアクションで発生する音の探知範囲と、音が聞こえる範囲が<span class=\\"Highlight1\\">{0}%</span>減少する。<br><br>この効果は<span class=\\"Highlight2\\">{1}秒間</span>のクールタイムがある。","name":"素早く静かに","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"走り始めたとき、通常の<span class=\\"Highlight1\\">{0}%</span>の速度で最大<span class=\\"Highlight2\\">{1}秒間</span>全力で走る。<br><i>疲労</i>時に使用できない。<br><br><span class=\\"Highlight4\\">{2}秒間</span>の<i>疲労</i>を発生させる。<br>走っている間、<i>疲労</i>は回復しない。","name":"全力疾走","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"脱出が目前に迫ると、あなたは予想だにしないエネルギーで満たされる。脱出ゲートが通電すると、<span class=\\"Highlight1\\">健康状態が即座に<b>1段階</b>回復</span>し、<span class=\\"Highlight3\\">{1}秒間</span>通常の<span class=\\"Highlight2\\">{0}%</span>の速さで走ることができる。発動時に行動不能だった場合、このパークの効果は保留され、解放されたときに発動する。<br><li>生存者がまどろみ状態・夢見状態の場合、<b>解除する</b></li><li><i>疲労</i>状態でも発動が可能</li><li>スキル使用後<span class=\\"Highlight4\\">{2}秒間</span>の<i>疲労</i>を発生させる</li><li>走っている間、<i>疲労</i>は回復しない</li>","name":"アドレナリン","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"潜在的なオーラ可視能力を解放する。<br><br><span class=\\"Highlight1\\">{0}メートル</span>以内にいる、瀕死または負傷状態の仲間のオーラが視えるようになる。ただし、殺人鬼に直接触れられている仲間のオーラを視ることはできない。","name":"共感","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"キャンプファイア周辺の植物を薬品に変え、出血を遅らせる。<b>治療速度</b>と<b>治療アイテムの効率</b>が<span class=\\"Highlight1\\">{0}%</span>上昇する。<br>","name":"植物学の知識","flavor":"「基本的な植物学の知識が、いつか自分の命を救うかもしれない。」","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"回復アイテムを使わずに、通常の<span class=\\"Highlight1\\">{0}%</span>の速度で自己治療ができるようになる。自己治療に回復アイテムを使うときの効率が<span class=\\"Highlight3\\">{1}%</span>上昇する。","name":"セルフケア","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"集中力を高めて一種の瞑想状態になり、多少の痛みを感じなくなる。痛みによるうめき声が<span class=\\"Highlight1\\">{0}%</span>減少する。","name":"鋼の意思","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"あなたは動物たちに信頼されているようだ。近くにいてもじっとしていることが多い。<br>森の生き物を驚かせる確率が<span class=\\"Highlight1\\">{0}%</span>低下する。<br>あなたの平穏な魂は、狂気、中毒、負傷時の叫び声をあげたい衝動を抑えることができる。","name":"魂の平穏","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"潜在的なオーラ可視能力を解放する。<br><li>生存者が運ばれている場合、担がれた場所から半径<span class=\\"Highlight1\\">56メートル</span>内にあるフックのオーラが視える。</li><br>工具箱を使わなくてもフックを破壊できるようになる<br><li>工具箱を使わずにフックを破壊するための所要時間は<span class=\\"Highlight2\\">2.5秒</span></li><li>破壊工作には<span class=\\"Highlight3\\">{0}秒</span>のクールダウンがある</li>","name":"サボタージュ","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"あなたは誰にも負けない敏捷性を持つ。<br><br>高所から落ちた後、猫のような反射神経により落下時のよろめく時間が<span class=\\"Highlight1\\">{0}%</span>減少し、うめき声の大きさが<span class=\\"Highlight1\\">100%</span>低下する。通常の<span class=\\"Highlight2\\">{1}%</span>の速さで、最大<span class=\\"Highlight3\\">{2}秒間</span>走ることができる。<br><br><span class=\\"Highlight4\\">{3}秒</span>間</b>の<b>疲労</b>を発生させる。<br><br><b>疲労</b>中は<i>スマートな着地</i>を使うことができない。<br><br>走っている間、<b>疲労</b>は回復しない。<br>","name":"スマートな着地","flavor":"「もっと高い所から飛んだことがあるわ」 - ネア","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"何年も警察から逃げ続けた経験は隠密行動のイロハを教えてくれた。<br>しゃがみ状態の移動速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。<br>","name":"都会の逃走術","flavor":"「ペンキはまだ新しいけど、私はここに来て随分経つわ。」- ネア","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"長く、夜間を外で過ごしたことは、あなたに有効な生きる術を教えてくれた。自分と<span class=\\"Highlight2\\">{1}メートル</span>以内にいる仲間のアイテムチャージの消費速度が<span class=\\"Highlight1\\">{0}%</span>低下する。範囲外に出た場合、効果は<span class=\\"Highlight4\\">{2}秒間</span>持続する。<br>","name":"都会の生存術","flavor":"「不器用ね！手本を見せてあげるわ。」- ネア","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"潜在的なオーラ可視能力を解放する。<br>儀式で最後の生存者となった場合、<span class=\\"Highlight1\\">{0}</span>メートル以内にあるハッチのオーラが見える。","name":"置き去りにされた者","flavor":"「わしは何もせずここにいる訳じゃない。独りでもやり抜く！」―ビル","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"仲間をフックから救助すると、あなたの体に想定外のエネルギーがみなぎる。<br>生存者をフックから外すと、<span class=\\"Highlight1\\">{0}秒間</span><b>我慢</b>のステータス効果を得る。<br>","name":"与えられた猶予","flavor":"「おそらく死ぬほど痛いが、死にはせん。さあ元気を出せ。行くぞ！」—ビル・オーバーベック","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"過去の戦いは、生き延びるための術を教えてくれた。<br><b>1マッチに1回のみ</b>、瀕死状態から完全回復することができる。瀕死時の回復速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。<br>","name":"不滅","flavor":"「なんてことだ、これは本当にまずいぞ！」- ビル","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"あなたの数少ない友人は最高の護りを得る。<br>瀕死状態の生存者を治療する時の治療速度が<span class=\\"Highlight1\\">100%</span>上昇する。<br>次のアクションを行うためのトークンを獲得する：<li>フックから安全に救出する</li><li>味方の代わりに攻撃を受ける</li><li>パレットで殺人鬼を怯ませて生存者を救出する</li><li>懐中電灯で殺人鬼を目眩ましして生存者を救出する</li>全カテゴリーのブラッドポイントを1トークンにつき<span class=\\"Highlight2\\">25%</span>追加で獲得する。この効果は最大<span class=\\"Highlight3\\">{1}%</span>まで重複する。追加取得したブラッドポイントはマッチ終了後に付与される。","name":"ずっと一緒だ","flavor":"「オラ行くぞ、やってやろうぜ！俺はちっとも気にしねぇよ。」- デイビッド・キング","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"発動可能なパーク。<br>あなたは攻撃を耐えられる。負傷時、ダメージを避けるためアドレナリンを一気に放出して前方に素早くダッシュする。<br><li>前方へダッシュするには、走っているときに<i>アビリティ発動</li>ボタンを押す。</li><li>走っているときのみ<i>アビリティが発動可能</i></li><li>スキル発動中はダメージを回避できる<li>キャラクターに<span class=\\"Highlight4\\">{0}秒間</span>の<i>疲労</i>を発生させる。<br>走っている間は<i>疲労</i>が回復しない</li>","name":"デッド・ハード","flavor":"「いつかの夜に俺らが裏路地を歩いてたらよ、俺の近くをビール瓶が1本、また1本、また1本と飛んでったんだ。俺は思ったね、「お前らここはちょいと楽しめそうだぜ、張り切っていこうぜ！」ってな。あれはエラい大喧嘩だったな、マジで！」- デイビッド・キング","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"儀式の間、<span class=\\"Highlight1\\">衰弱</span>効果の影響を受ける。<br>あなたの濃い血はほぼ一瞬で凝固する。<li>血痕は残らない。</li><li>負傷によるうめき声が常時<span class=\\"Highlight2\\">{0}%</span>低減される。</li><li>瀕死状態から完全に回復する能力を得る。</li>","name":"弱音はナシだ","flavor":"「カッとしてな。1発殴っちまったんだよ。その場で出入り禁止にされてよ。その後パブに行って何杯か引っかけて、次に移ったよ。ぐちぐち言ってても仕方ないからな、そうだろ？やってられねえよ。」 - デイビッド・キング","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"あなたの友が殺人鬼の手にかかるほど、あなたを包む孤独が殺人鬼の<b>オーラ可視能力</b>を妨げる。<br>仲間の生存者が死亡するか、処刑されるたび1トークン獲得する。1トークンで、あなたのオーラは<b>死亡</b>または<b>処刑</b>された生存者1人につき、<span class=\\"Highlight1\\">{0}メートル</span> の距離以内において殺人鬼に探知されない。<br><li><i>殺人鬼のオブセッションとなる確率が上昇する。</i></li><li><i>殺人鬼が同時に<b>オブセッション</b>にできる生存者は1人のみ</i></li>","name":"唯一の生存者","flavor":"「ブギーマンなの？」- ローリー・ストロード","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"殺人鬼に対し、不可思議な因縁のようなつながりを得る。<br><br>殺人鬼に自分のオーラが視える時、こちらも殺人鬼のオーラが視えるようになり、治療・修理・浄化の速度がそれぞれ<span class=\\"Highlight1\\">{0}%</span>上昇する。<br>オブセッションの間は</span><span class=\\"Highlight2\\">30秒ごと</span>に<span class=\\"Highlight3\\">3秒間</span>、自分のオーラが殺人鬼に視える。<br>オブセッションになる確率が上がる。<br>","name":"執念の対象","flavor":"「私を見てたわ！」- ローリー・ストロード","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"あなたは決死の覚悟で攻撃者からの逃亡を試みる。<br>フックから救助されるか自力で脱出した後、<i>「決死の一撃」</i>が<span class=\\"Highlight1\\">{0}秒間</span>発動する。<br>発動中に殺人鬼に捕まった場合、スキルチェックに成功すると殺人鬼の手から逃れ、殺人鬼を<span class=\\"Highlight1\\">5秒間</span>怯ませることができる。<br><li>スキルチェックに成功しても失敗しても、<i>決死の一撃</i>は無効になる</li><li>殺人鬼を怯ませた後、自分がオブセッション状態になる</li><br>発動中、次のアクションを行うと<i>決死の一撃</i>は無効になる：<li>発電機の修理</li><li>自分または他の生存者の治療</li><li>トーテムの浄化</li><li>フックの破壊</li><li>フックから救助</li><br><li><i>オブセッションになる確率が上昇する</i></li><li><i><b>オブセッション</b>になるのは1マッチにつき1人のみ</i></li>","name":"決死の一撃","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"あなたと仲間の潜在的なオーラ可視能力を強化する。<br><li>オーラの可視能力の有効距離が<span class=\\"Highlight1\\">{0}メートル</span>上昇する</li><li>一度に適用される<i>手札公開</i>の効果は1回のみ。</li>","name":"手札公開","flavor":"「俺は用心深さで何年も生き延びてきた。それともちろん、俺がカッコよかったってのもあるけどな。」- エース","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"「最後には全てうまくいく。」あなたはそう信じている。その自信が、仲間たちの希望を後押しする。<br>自分以外の生き残っている生存者1人ごとに、生存者全員の運が<span class=\\"Highlight1\\">{0}%</span>増加する。<br>","name":"賭け金のレイズ","flavor":"「なんというか、俺はただ超ラッキーなだけさ…。お前たちも少しはあやかれると思うぜ。」- エース","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"幸運の女神はいつも価値ある何かをあなたに授けるようだ。<br>チェストからアイテムを取得したとき、<span class=\\"Highlight1\\">{0}%</span>の確率で<span class=\\"Highlight2\\">ベリーレア</span>以下のアドオンが1つ装着される。<br><span class=\\"Highlight3\\">{1}%</span>の確率で<span class=\\"Highlight4\\">アンコモン</span>（またはそれ以下）のアドオンが見つかる。<br>逃れる際にアイテムに装着したアドオンを保持できる。","name":"最後の切り札","flavor":"「キラキラ光るからといってそれが高価とは限らねえ。だがここじゃ純金だってクソほどの価値もない、だからこういうものが役に立つんだよ。」- エース","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"あなたは慎重かつ精密に機械を操作できる。<br>修理時に発生する物音と、それの聞こえる範囲が<span class=\\"Highlight2\\">{0}メートル</span>減少する。修理スキルチェックに失敗した場合、<span class=\\"Highlight1\\">{1}%</span>の確率で発電機の爆発を阻止できる。<br>","name":"テクニシャン","flavor":"「これステルスするから。」- フェン・ミン","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"<b>急いで</b>乗り越えを行うと加速し、最大<span class=\\"Highlight2\\">{1}秒間</span>、移動速度が通常の<span class=\\"Highlight1\\">{0}%</span>に上昇する。<br><br><span class=\\"Highlight4\\">{2}秒間</span>の<i>疲労</i>を発生させる。<br><i>しなやか</i>は<i>疲労</i>時に使用できない。<br>走っている間、<i>疲労</i>は回復しない。<br>","name":"しなやか","flavor":"「おこなの？」- フェン・ミン","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"あなたの鋭敏な感覚は警戒を怠らない。<br>殺人鬼が破壊アクションを行ったとき、あなたは殺人鬼が<span class=\\"Highlight1\\">{0}秒間</span>視えるようになる。<br>","name":"警戒","flavor":"「私、トゥルーサイトあるし。」- フェン・ミン","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"潜在的なオーラ可視能力を解放する。あなたは、全ての発電機が通電すると<span class=\\"Highlight1\\">{0}メートル</span>以内にある脱出ゲートを視ることができる。脱出ゲートを開放している間、最大<span class=\\"Highlight2\\">{1}メートル</span>までにいる他の生存者はあなたのオーラを視ることができる。<br><i>目を覚ませ！</i>が発動中、脱出ゲートを開く速度が<span class=\\"Highlight3\\">{2}%</span>上昇する。","name":"目を覚ませ！","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"あなたは薬品を見つけるコツを知っている。チェストの開錠速度が<span class=\\"Highlight1\\">{0}%</span>上昇し、開錠による物音と、それが聞こえる距離が<span class=\\"Highlight2\\">{1}メートル減少する。</span><br><i>調剤学</i>で、開錠<b>1個目</b>のチェストで非常用医療キットが確実に手に入る。<br>","name":"調剤学","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"あなたは窮地に追い込まれても仲間の世話をする。<span class=\\"Highlight1\\">{0}メートル</span>以内の自分と仲間が<b>疲労、出血、妨害</b>、<b>目眩まし</b>の状態から<span class=\\"Highlight2\\">{1}%</span>早く回復する。範囲外に出ても、効果は<span class=\\"Highlight4\\">{2}秒間</span>持続する。<br>","name":"寝ずの番","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"何もあなたを止めることはできない。悲惨な状況にあっても、すさまじい執念により這いずり移動速度が<span class=\\"Highlight1\\">{0}%</span>上昇し、同時に回復することができる。<br>","name":"執念","flavor":"「こいつは何だ？あいつは任せろ！」- デイビッド・タップ刑事","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"潜在的なオーラ可視能力を解放する。発電機の修理完了時、<span class=\\"Highlight1\\">{0}メートル</span>以内の発電機、チェスト、トーテムのオーラが<span class=\\"Highlight2\\">{1}秒間</span>視えるようになる。<br>オブジェクトを記録できるマップを持っている場合、<i>刑事の直感</i>で探知された発電機、チェスト、トーテムはマップに記録される。","name":"刑事の直感","flavor":"「昨夜どこに？」- デイビッド・タップ刑事","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"殺人鬼に近づくと決意に満たされる。殺人鬼の脅威範囲内で、かつ追いかけられていないとき、<span class=\\"Highlight1\\">{0}秒</span>ごとにトークンが1溜まる。最大<span class=\\"Highlight2\\">{1}トークン</span>まで溜まる。<br><i>張り込み</i>時に<b>1トークン</b>以上溜まっている時、「グッド」のスキルチェックは「グレイト」とみなされ、<b>1トークン</b>消費し、発電機の修理で<span class=\\"Highlight3\\">1%</span>の修理進行ボーナスを獲得する。","name":"張り込み","flavor":"「この手で、一度は捕らえた。貴様は怯えて俺から逃げる。必ずしょっ引いてやるからな！」- デイビッド・タップ刑事","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"素早い乗り越えを行ったり、ロッカーから飛び出したりするとき、<span class=\\"Highlight1\\">{0}秒間</span>赤い傷マークを残さない。<br><br><span class=\\"Highlight1\\">{1}秒間</span>のクールダウンがある。<br>","name":"ダンス・ウィズ・ミー","flavor":"「見せつけてやる。<br>嵐の中で私と踊ろう。<br>私のリードに従って、<br>日が昇るまで私と踊ろう」<br> - ケイト・デンソン作曲「ダンス・ウィズ・ミー」","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"潜在的なオーラ可視能力を解放する。<span class=\\"Highlight1\\">{0}メートル</span>以内のパレット、破壊可能な壁、そして乗り越えの位置のオーラを視ることができる。<br>逃走中にパレットを乗り越えたり倒したりすると、<i>ウィンドウズ・オブ・オポチュニティ</i>は<span class=\\"Highlight1\\">{1}秒間</span>のクールダウンを要する。<br>","name":"ウィンドウズ・オブ・\\nオポチュニティ","flavor":"「元気に飛び起き、一生懸命働いて、道を切り開こう。<br>狙いをすまし、引き金を引き、名を上げよう。<br>信頼と家族の価値を知り、決して不満は言わないで。<br>チャンスという名の窓を開け放って」- ケイト・デンソン作曲「ウィンドウズ・オブ・オポチュニティ」","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"闘志を奮い起こし、最後まで抵抗しろ！あなたの担がれたときのもがく効果が<span class=\\"Highlight1\\">{0}%</span>増加する。<br><br><span class=\\"Highlight1\\">{1}メートル</span>以内にあるフックのオーラを探知する殺人鬼の能力を妨害する。<br>","name":"ボイルオーバー","flavor":"「見損なわないで。<br>私はいつだって自由。<br>いつまでも捕まえておくことはできないわ」<br> - ケイト・デンソン作曲「ボイルオーバー」","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"発動可能なパーク。<br>追いかけられていない状態で殺人鬼の脅威範囲内に<span class=\\"Highlight1\\">{0}秒間</span>いると<i>陽動</i>が発動する。<br><li><i>陽動</i>の発動後、動かずにしゃがんだ状態で<i>アビリティ発動</i>のボタンを押すと小石を投げる。これにより<span class=\\"Highlight1\\">20メートル</span>離れた先に殺人鬼を陽動することができる</li><br><li>発動と同時にパークのタイマーはリセットされる</li><br>陽動の方法<br><li>大きな音の通知</li><li>赤い傷マーク</li>","name":"陽動","flavor":"「簡単なことと、正しいこととがある。これを混同すると、どんな奴になってしまうかわからない。」- アダム・フランシス","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"他の生存者を安全にフックから救出した後、<i>解放</i>が発動する。<br>フックから自力で脱出を試みた際、<span class=\\"Highlight1\\">100%</span>の確率で発動する。<br><i>解放</i>の発動に成功すると、<span class=\\"Highlight3\\">{0}秒間</span><span class=\\"Highlight2\\">衰弱</span>効果を受ける。","name":"解放","flavor":"「私の育て親は厳しかったが、まずい状況をうまく切り抜ける方法を教えてくれた。」- アダム・フランシス","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"生存者を治療する際のスキルチェックに<span class=\\"Highlight1\\">-{1}%</span>の進行度ペナルティを受けた状態で儀式を開始する。<br>生存者を治療中、スキルチェックが成功するたびにトークンを1個獲得し、最大<span class=\\"Highlight2\\">{0}トークン</span>まで獲得できる。<br>生存者の治療中、スキルチェックを成功させるたびにトークン1個につき<span class=\\"Highlight1\\">+{2}%</span>の進行ボーナスを付与する。<br><i>独学者</i>の使用中はスキルチェック：グレイトは発生しない。<li>医療キットでの治療中に<i>独学者</i>は発動しない</li>","name":"独学者","flavor":"「努力を続けて下積みをすれば、どんなことでも達成できる。」- アダム・フランシス","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"フックから脱出するか救出されると、そのフックは破壊され、殺人鬼のオーラが<span class=\\"Highlight1\\">{0}秒間</span>表示される。このパークによって破壊されたフックが再出現するまで<span class=\\"Highlight2\\">180秒</span> かかる。<br>","name":"ブレイクダウン","flavor":"「窮地のスリル。」<br>道端で見つけた木片に絵を描いてみた。俺はそいつが何か伝えたがってるんじゃないかと思ったんだ。そしてこいつはゴミになる前に2度目のチャンスを得たのさ。- ジェフ、インクと洗浄油が塗られた木の板、12×16","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"潜在的なオーラ可視能力を解放する。<br><br>あなたは特定の生存者のオーラを視ることができる。<br><li>自分がフックから救助した、もしくは自分をフックから救助した</li><li>自分が治療を完了した、もしくは自分の治療を完了した</li><br>彼らもまたあなたのオーラを視ることができる。<br><br>最大<span class=\\"Highlight1\\">{0}人分</span>。あなたが殺人鬼に吊るされると全ての効果が失われる。<br>","name":"アフターケア","flavor":"「嵐を突き抜ける慈悲。」<br>最高のミュージシャンでもある俺の親友に贈る油絵だ。あいつらのファーストアルバムは今でも気に入ってる。おかげで人生の憂鬱な時間を切り抜けられたんだ。- ジェフ、キャンバスの油絵、16×16","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"<span class=\\"Highlight1\\">トークンを{0}個</span>持った状態で試練を開始する。<br><br><i>ディストーション</i>は殺人鬼に自分のオーラが視られる可能性があるときに発動し、トークンを消費する。<br><br><i>ディストーション</i>発動中、<span class=\\"Highlight1\\">{1}秒間</span>赤い傷マークは残らなくなり、殺人鬼は自分のオーラが視えなくなる。<br><li><i>ディストーション</i>は瀕死状態または罠に掛かっている状態では発動されない。</li><br>","name":"ディストーション","flavor":"「ハヤブサの羽のマントで死を欺くか罠にかかる」<br>冬の眠れない夜からスケッチのインスピレーションを得た。北欧神話の探索。勇敢さは最大の欠点すら隠すことができる。（作者：ジェフ、鉛筆で描かれたトーン紙、12×12","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"痛みを分かち合うことで、人は癒される。<br>負傷時に医療キットを使わず生存者を治療すると、<span class=\\"Highlight1\\">{0}%</span>の変換率で自分の傷も回復する。","name":"連帯感","flavor":"「自分が大変な状況でも駆けつけて、誰かの悩みに耳を傾け、困っている人に手を差し伸べる。こうして人は強くなり、成長していく。」- ジェーン・ロメロ","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"目標を達成すると自信がみなぎる。<br>発電機の修理が完了した後、<span class=\\"Highlight1\\">{0}秒間</span>赤い傷マークを残さなくなる。<br>","name":"平常心","flavor":"「ほら、落ち着いて。考え込むのはやめて前進あるのみ。大丈夫だから。」- ジェーン・ロメロ","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"覚悟を決めた時、そこに立ちはだかる者は誰もいない。<br><br><span class=\\"Highlight1\\">{0}秒間</span>ロッカーの中に立っていると<i>真っ向勝負</i><br>が発動可能になる。<i>真っ向勝負</i>が発動可能な状態でロッカーを飛び出すと<i>真っ向勝負</i>が発動し、<i>真っ向勝負</i>の有効範囲内にいる殺人鬼を<span class=\\"Highlight1\\">{1}秒間</span>怯ませる。<br><span class=\\"Highlight3\\">疲労</span>のステータス効果を<span class=\\"Highlight1\\">{2}秒間</span>発生させる。<br>真っ向勝負は疲労時に使用できない。<br>走っている間、<span class=\\"Highlight3\\">疲労</span>のステータス効果は回復しない。<br><i>真っ向勝負</i>は、頭の上にカラスが飛んでいる場合は使用できない。<br>","name":"真っ向勝負","flavor":"「人は克服した障害によって記憶される。逃げても自分の本当の力なんて分からない。恐怖に立ち向かって、自分の存在を世に知らせるの」- ジェーン・ロメロ","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"あなたは謎の力で逃れられない運命から回避する。<br><br>瀕死状態での回復進行度の<span class=\\"Highlight1\\">{0}%</span>が、殺人鬼に担がれた時の、もがき進行度に変換される。最大変換量はもがきゲージ全体の<span class=\\"Highlight2\\">{1}%</span>分。<br>","name":"フリップ・フロップ","flavor":"「帰りに連絡する。」- アッシュ・ウィリアムズ","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"潜在的なオーラ可視能力を解放する。<br>最大<span class=\\"Highlight1\\">{0}メートル</span>までの距離で、瀕死の生存者の回復進行度がそのオーラの強さで判別できる。<br><br>あなたが瀕死状態の生存者を負傷状態にまで回復させると、回復したその生存者とあなたの双方に<span class=\\"Highlight2\\">{1}秒間</span>、殺人鬼のオーラが見える。<br>","name":"ベルトを締めろ！","flavor":"「ゴースト・ビーターズは絶対に仲間を見捨てない。」- アッシュ・ウィリアムズ","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"邪悪な者は、いつでもあなたを探し出す方法を心得ている。<br><br>味方の代わりに殺人鬼の攻撃を<span class=\\"Highlight1\\">{0}回</span>受けると<i>英雄の奮起</i>が発動する。<br><br>パーク発動中は一度だけ、攻撃を受けても<b>負傷状態</b>から<b>瀕死状態</b>にならない。<br><br>完全に回復した状態になると、殺人鬼から<span class=\\"Highlight2\\">{1}メートル</span>以上離れている場合に自分のオーラを殺人鬼に探知される。<br><br>二度目に瀕死状態になる攻撃を受けた際、<i>英雄の奮起</i>は発動しない。<br><i><li>オブセッション状態になる確率が上昇する。</li><li>複数の生存者が同時に<b>オブセッション</b>になることはない。</li></i><br>","name":"英雄の奮起","flavor":"「俺はいとも簡単に悪霊どもに見つかっちまう」- アッシュ・ウィリアムズ","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"行く手にどんな障害が立ちはだかろうとも、正義を追求して真実を暴き出す。<br><br>自分が修理している発電機のオーラが、<span class=\\"Highlight1\\">{0}メートル</span>以内の全ての生存者に見えるようになる。<br><br>自分が発電機を修理している間に、生存者が殺人鬼にダウンさせられると、<span class=\\"Highlight2\\">{1}秒間</span>、生存者全員のオーラが見えるようになる。<br>","name":"一緒にいよう","flavor":"「あの研究所を灰にしてやりましょう」―ナンシー・ウィーラー","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"目標を決めたら、もう後戻りはできない。行動の許可を求めるより、行ったことの許しを請うほうがいい。<br><br>自分の残した赤い傷マークが常に視えるようになる。<br><br>歩行速度が通常よりも<span class=\\"Highlight1\\">{0}%</span>上昇する。<br>","name":"執着心","flavor":"「始めたことは終わらせる。あいつを殺したいの」―ナンシー・ウィーラー","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"思い迷って孤独を感じた時は、自分の心の中を覗き込み、直感に従う。<br><br>トーテムを浄化するたびに、<i>内なる力</i>が発動可能になる。すでに<b>衰弱ステータス</b>を受けている場合、<i>内なる力</i>は発動しない。<br><br><i>内なる力</i>が発動可能かつ負傷状態でロッカー内に<span class=\\"Highlight1\\">{0}秒</span>間隠れると、負傷状態から完全に回復する。<br><br>発動に成功すると、<i>内なる力</i>は無効化される。<br>","name":"内なる力","flavor":"「あれから一生懸命、順調ってふりを続けてきたけど、違うの」―ナンシー・ウィーラー","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"自己中心的だという噂もある一方で、危険を冒して窮地に陥った仲間を助け出すこともある。<br><br>生存者をフックから救助すると、救助された生存者の赤い傷マークと血痕が<span class=\\"Highlight1\\">{0}秒間</span>残らなくなる。また<span class=\\"Highlight2\\">{1}秒間</span>、自分と殺人鬼のオーラがお互いに視認可能になる。<br>","name":"ベビーシッター","flavor":"「お前らクソガキを守ると約束した、それをいまからやるところだ」―スティーブ・ハリントン","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"自分に力を与えてくれる友情の大切さは、人生から教わった。<br><br>フックに吊るされて、耐久フェーズになった時に<i>仲間意識</i>が発動する。<br><br><i>仲間意識</i>発動中に他の生存者が自分から<span class=\\"Highlight1\\">{0}メートル</span>以内にいる場合、フックのゲージが<span class=\\"Highlight2\\">{1}秒間</span>停止する。<br>","name":"仲間意識","flavor":"「いいか忘れるなよ、中に入ったら...気のないふりをしろ。そうだ、よくできているぞ。その調子だ」―スティーブ・ハリントン","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"他の生存者を、負傷1回分に相当する量だけ治療すると、<i>セカンドウインド</i>が発動する。すでに<span class=\\"Highlight1\\">衰弱</span>のステータス効果を受けている場合、<i>セカンドウインド</i>は発動しない。<br><br><i>セカンドウインド</i>が発動中、次に自分がフックから救助されるか自力で脱出した際、<span class=\\"Highlight1\\">衰弱</span>のステータス効果を受ける。合計<span class=\\"Highlight2\\">{0}秒</span>間とどまっていると、<i>セカンドウインド</i>の効果により負傷から無傷に回復する。<br><br><i>セカンドウインド</i>は自分が無傷に回復するか、<i>セカンドウインド</i>の発動に成功する前に瀕死状態になると無効になる。<span class=\\"Highlight1\\">衰弱</span>のステータス効果を失う。<br>","name":"セカンドウインド","flavor":"「いいや、そりゃダメだ」―スティーブ・ハリントン","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"これまでそれなりに傷やあざを受けてきた。だが運は常にあなたに味方する。<br><br><i>怪我の功名</i>は負傷すると発動する。<i>怪我の功名</i>が発動中、合計<span class=\\"Highlight1\\">{0}秒間</span>、血痕や赤い傷マークが残らなくなる。<br><br><i>怪我の功名</i>は合計有効時間が経過すると、それ以降のの儀式中には発動しない。<br>","name":"怪我の功名","flavor":"「そんなんじゃ私を倒すには程遠いね。」- 木村結衣","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"優位を勝ち取るために立ち上がり、その手にあるものすべてを利用する。<br><br>倒されたパレットの横で<i>アビリティ発動のボタン</i>を<span class=\\"Highlight1\\">{0}秒間</span>長押しすると、パレットを元の立った状態に戻せる。<br><br><i>強硬手段</i>のクールダウンは<span class=\\"Highlight2\\">{1}秒間</span>。<br>","name":"強硬手段","flavor":"「あるもの全てを使ってあんたを攻撃する。何度もね。」- 木村結衣","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"誰かが困った時に全力を発揮し、どんな障害も克服できるよう鼓舞する。<br><br>運ばれている生存者の<span class=\\"Highlight1\\">{0}メートル</span>以内にいると<span class=\\"Highlight2\\">迅速</span>の効果を得て、移動速度が<span class=\\"Highlight3\\">{1}%</span>上昇する。運ばれている生存者のもがく速度が<span class=\\"Highlight4\\">{2}%</span>上昇する。<br>","name":"突破","flavor":"「負けるな、絶対にここから逃げ延びるんだ。」- 木村結衣","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"あなたは学んだ。静かなやり方が時に最も有効であることを。<br><br>フックから救助されるか、フックから自力で脱出すると、<i>オフレコ</i>が<span class=\\"Highlight1\\">{0}秒間</span>発動する。<br><br><i>オフレコ</i>が発動している間、あなたのオーラは殺人鬼には視えず、怪我の痛みによるうなり声が<span class=\\"Highlight2\\">{1}%</span>減少する。<br>","name":"オフレコ","flavor":"「大丈夫、調査は徹底的かつ慎重にやるタイプなの。」 - ザリーナ・カッシル","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"あなたは、人間とは大きな音を出すものに一番注目するものであるということに気がついた。<br><br>発電機を<span class=\\"Highlight1\\">{0}秒</span>以上修理すると、あなたに視える黄色のオーラで強調される。発電機の強調は完全に修理するか、新しい発電機を修理した場合、あるいはロッカーに入るまで持続する。<br><br>ロッカーに入ると、強調された発電機の位置を殺人鬼に知らせる騒音ゲージが始動する。<br><li><i>おとり</i>は<span class=\\"Highlight2\\">{1}秒</span>につき1回のみ発動する</li><br>","name":"おとり","flavor":"「このニュースは面倒で複雑な部分をカットしてる。それが真実なのに。」 - ザリーナ・カッシル","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"あなたは他人のために自らの命と怪我のリスクを冒す。<br><br><i>人々のために</i>は無傷状態のときのみ発動する。<br><br>医療キットを使用せず他の生存者を治療している間に<i>アビリティ発動のボタン</i>を押すと、即座に瀕死から負傷、または負傷から無傷に回復させることができる。<br><br>あなたは負傷し、<span class=\\"Highlight1\\">{0}秒間</span><b>衰弱</b>ステータスの効果を受ける。<br><br>あなたはオブセッションになる。<br><br>このパークを装備すると、儀式開始時に殺人鬼のオブセッションになる確率が<b>低くなる</b>。<br>","name":"人々のために","flavor":"「私たちは自分の物語を描くことも、その本当の結末を自分で決めることもできる。」 - ザリーナ・カッシル","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"これまで計り知れない苦難の道を歩んできたあなたは、強く鍛えられている。<br><br>瀕死状態から治療されるか回復すると、<span class=\\"Highlight1\\">{0}秒間</span><b>我慢</b>のステータス効果を得る。<br>呪われている間、瀕死状態から完全回復することができる。<br><br>この効果は<span class=\\"Highlight2\\">30秒間</span>のクールタイムがある。","name":"ソウルガード","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"それはまるで、あなたの潜在的な部分がまだ目覚めていないかのようだ。あなたは自分を超越して援助を得られるような感覚を覚える。<br><br>あなたかオブセッションが負傷すると、両者とも互いのオーラが視えるようになる。<br><br>オブセッションを治療するか、オブセッションに治療してもらうと、両者とも互いの距離が<span class=\\"Highlight2\\">16メートル</span> 以上になるまで<span class=\\"Highlight1\\">{1}%</span>の <b>迅速</b> 効果を得る。<br><br>オブセッションになる確率が低くなる。<br><br>このパークは自分がオブセッションになると無効になる。","name":"血の協定","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"悪意に満ちた力によって駆り立てられることに慣れたあなたは、それを自分の有利になるよう利用し始めた。<br><br>発電機を合計で<span class=\\"Highlight1\\">{0}秒間</span>修理すると、</i>抑圧の同盟<i>が発動する。<br><br>このパークが発動中、発電機を修理しながら<i>アビリティ発動のボタン</i>を押すとエンティティが招集され、その発電機が<span class=\\"Highlight2\\">{1}秒間</span>ブロックされる。このパークは無効になる。<br><br>パークによって作用した発電機は、白いオーラで生存者全員に表示される。","name":"抑圧の同盟 ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"あなたは脱出手段に驚くほど集中している。<br><br><span class=\\"Highlight1\\">{0}メートル</span>以内の発電機のオーラが視える。<br><br>発電機の修理が完了するたびに、<i>透視家</i>は<span class=\\"Highlight2\\">{1}秒間</span>無効になる。","name":"透視家","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"あなたはどんなに苦しい時でも、自分が失敗することを許さない。<br><br>負傷しているかフックに吊るされている、または瀕死の生存者1人につき、治療とフック救助アクションの速度が<span class=\\"Highlight1\\">{0}%</span>上昇する。<br>","name":"苦肉の策","flavor":"「相手が鉄球で来たら、より頑強な壁を築くのだ。」 —フェリックス・リクター","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"あなたは道具を最大限に活用する方法を知っている。<br><br>儀式中に1回、チャージ量を使い果たしたアイテムが<span class=\\"Highlight2\\">{1}秒</span>後に、チャージ量の<span class=\\"Highlight1\\">{0}%</span>を回復する。<br>","name":"耐久設計","flavor":"「建築は文明の魂である。」 —フェリックス・リクター","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"あなたの目は用心深く、多くの人間が見落とすものにも気づく。<br><br><span class=\\"Highlight1\\">{0}トークン</span>を持った状態で儀式を開始する。チェストが開放済みの場合、1トークンを消費してアイテムを漁る。アイテム漁りを行えるのはチェスト1個につき1回のみ。<br><br>チェスト漁りの速度が<span class=\\"Highlight2\\">{1}%</span>上昇する。","name":"査定","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"冒険に満ちたあなたのライフスタイルには、狡猾に行き先を惑わすことが必要になる。<br><br>走行中にロッカーにアクションを行うとその場で大きな通知音が発生し、赤い傷マークが<span class=\\"Highlight1\\">{0}秒間</span>残らなくなる。<br><br>走行中や、このパークが発動中はロッカーに入れない。<br><br><i>勢力争い</i>は<span class=\\"Highlight2\\">{1}秒</span>ごとに1回のみ発動できる。","name":"欺き","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"あなたは決して諦めない。今だって、絶対に。<br><br>殺人鬼に運ばれている間、もがきの進行度が<span class=\\"Highlight1\\">{0}%</span>に達すると<i>勢力争い</i>が発動する。<i>勢力争い</i>が発動中、付近のパレットを倒して殺人鬼を怯ませることができる。<br>","name":"勢力争い","flavor":"「かつては自分を守るために人を当てにして、すべてを失った。もう絶対に繰り返さない。」 —エロディー・ラコト","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"時に他を犠牲にすることは、出世するために必要なことだ。<br><br>他の生存者がフックに吊るされるたび、あなたは<span class=\\"Highlight1\\">{0}トークン</span>を獲得する。発電機修理のスキルチェックでグレイトを出すとすべてのトークンを消費する。発電機の修理中、スキルチェックでグレイトを出した際に追加される修理進行度が1トークンにつき<span class=\\"Highlight2\\">{1}%</span>増加する。<br>","name":"出世街道","flavor":"「弱い者が先に犠牲になる。それが、ビジネスの世界…多くの人は向き合うことを拒むけど、それが現実よ」 — ユンジン","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"あなたはライバルがミスをした時、チャンスを見逃さない。<br><br>パレットで殺人鬼を怯ませた後、通常の<span class=\\"Highlight1\\">{0}%</span>の速度で<span class=\\"Highlight2\\">{1}秒間</span>全力疾走する。<br><span class=\\"Highlight3\\">{2}秒間</span><b>疲労</b>状態になる。<br>このパークは<b>疲労</b>のステータス中は使用できない。<br>","name":"大ヒット","flavor":"「私はスーツ姿のサイコパスを相手してきたの。あなたはそれよりみっともないし、ひどい恰好よ」 —ユンジン","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"人生は甘くない。時に、自分で用心することが最善の方法となる。<br><br><span class=\\"Highlight1\\">{0}メートル</span>以内にいる他の生存者が通常攻撃または特殊攻撃を受けるたび、<i>自己防衛</i>が発動する。<br>自分の赤い傷マーク、血痕、痛みによるうなり声が<span class=\\"Highlight2\\">{1} 秒間</span>隠される。<br>","name":"自己防衛","flavor":"「この業界で学んだことは、誰かが斧を振り回していたら頭を低くしておくってことよ」 — ユンジン","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"あなたは自分より強い敵に抵抗する方法を知っている。すなわち、サポート役を追い詰めて撲滅するということを。<br><br>トーテムの浄化速度が<b>20%</b>速くなる。トーテムを浄化すると、その後現在地から一番遠くにあるトーテムのオーラが<span class=\\"Highlight1\\">{0}秒間</span>視えるようになり、儀式が終了するまでトーテムの浄化速度が追加で<span class=\\"Highlight2\\">{1}%</span>速くなる。追加のスピードアップは重複する。<br><br><span class= \\"FlavorText\\">「探偵ごっこも悪くないわね」 —ジル・バレンタイン</span>","name":"カウンターフォース","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"ほぼ絶望的な状況から復活を遂げたあなたは、また次も同じように立ち上がるだろう。<br><br>フックから救助されるか自力で脱出すると、治療の進行度が即座に<span class=\\"Highlight1\\">{0}%</span>追加される。<br><br><span class= \\"FlavorText\\">「次はこっちの番よ。覚悟しなさい」 —ジル・バレンタイン</span>","name":"起死回生","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"直接的な戦いが望めない時でも、あなたは反撃する手段を見つけ出す。<br><br><i>地雷爆破</i>は発電機の修理進行度が合計で<span class=\\"Highlight1\\">{0}%</span>相当に達すると発動する。<br>発電機を<span class=\\"Highlight2\\">{1}秒</span>以上修理した後、<i>アビリティ発動のボタン</i>を押して罠を設置する。罠の有効時間は<span class=\\"Highlight3\\">{2}秒間</span>。罠を仕掛けた発電機はすべての生存者に黄色のオーラで強調表示される。発電機1台につき有効化できる罠は1つのみ。<br><li>罠が設置された発電機を殺人鬼が破壊すると罠が爆発して殺人鬼が怯み、その付近にいる全員が目眩まし状態になる。その後<i>地雷爆破</i>は解除される</li><br><br><span class= \\"FlavorText\\">「S.T.A.R.S.が欲しいんでしょう？ほら、どうぞ！」  —ジル・バレンタイン</span>","name":"地雷爆破","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"あなたは皆と同じように痛みを感じても、それを周りには隠そうとする。<br><br>治療中、痛みによるうめき声をはじめ音を一切出さない。治療のスキルチェックに失敗しても大きな通知音は発生せず、治療の進行後退も<span class=\\"Highlight1\\">{0}%</span>だけで済む。<br><br><span class= \\"FlavorText\\">「耐えろ、今は辛抱だ」 —レオン・S・ケネディ</span>","name":"忍苦の時","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"混沌の世界に適応するあなたは、がれきで自作できる物を作り出す。<br><br>いずれかの発電機を<span class=\\"Highlight1\\">{0}%</span>まで修理完了すると<i>スタングレネード</i>が発動する。<br>何も持っていない状態でロッカーに入りアビリティ発動のボタンを押すと、閃光手榴弾を作製する。<br><li>チャージは1</li><li>爆発時に爆破音と閃光が発生する</li><li>大きな通知音が発生する</li><li>牽制と目眩ましに使用できる</li><br>閃光手榴弾は儀式の脱出時に手放す<br><br><span class= \\"FlavorText\\">「消えうせろ！」 —レオン・S・ケネディ</span>","name":"スタングレネード","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"あなたは失われつつある目標を用心深くチェックする。<br><br>発電機の修理中にスキルチェックでグッドまたはグレイトを<span class=\\"Highlight1\\">{0}</span>回出すと、<i>新人魂</i>が発動する。効果は儀式終了まで持続する。<br>発動後は修理の進行が後退している発電機のオーラが視える。<br><br><span class= \\"FlavorText\\">「俺が止めてみせます。任せてください」 —レオン・S・ケネディ</span>","name":"新人魂","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/jp/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/jp/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"協力者を見つけ彼らの能力を上げる怖がりなリーダー。<BR><BR>彼の固有パークの<B>「絆」</B>や<B>「有能の証明」</B>、<B>「リーダー」</B>で他の生存者の近くに辿り着き、自身や仲間の行動の補助ができるようになる。","name":"ドワイト・フェアフィールド","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"数多の殺人鬼よりも速く走る活気に満ちたアスリート。<BR><BR>彼女の固有パークの<B>「素早く静かに」</B>や<B>「全力疾走」</B>、<B>「アドレナリン」</B>で逃走を優位に進め、殺人鬼から距離をとることができるようになる。","name":"メグ・トーマス","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"自身や仲間の生存の可能性を向上させる熱心な植物学者。<BR><BR>彼女の固有パークの<B>「共感」</B>や<B>「植物学の知識」</B>、<B>「セルフケア」</B>で怪我をした生存者を見つけ、自身や仲間を効果的に治療できるようになる。","name":"クローデット・モレル","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"大抵の状況下では引けを取らない孤独なサバイバリスト。<BR><BR>彼の固有パークの<B>「鋼の意志」</B>や<B>「魂の平穏」</B>、<B>「サボタージュ」</B>でより効果的に動き回り、負傷時でも生き残ることができるようになる。","name":"ジェイク・パーク","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"容易に脱出し身を隠す都会のアーティスト。<BR><BR>彼女の固有パークの<B>「スマートな着地」</B>や<B>「都会の逃走術」</B>、<B>「都会の生存術」</B>で目標を完遂するのに適した状態になり素早く行方を暗ますことができるようになる。","name":"ネア・カールソン","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"危険的状況に対応することに慣れている年老いた軍人。<BR><BR>彼の固有パークの<B>「置き去りにされた者」</B>や<B>「与えられた猶予」</B>、<B>「不滅」</B>で危機が差し迫った状況の中で彼をより強くする。","name":"ウィリアム・\\"ビル\\"・オーバーベック","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"危険なプレイで儲けているいかつい喧嘩屋。<BR><BR>彼の固有パークの<B>「ずっと一緒だ」</B>や<B>「デッド・ハード」</B>、<B>「弱音はナシだ」</B>で攻撃的に一矢報う対立的プレイスタイルだが、攻撃に弱い。","name":"デイビッド・キング","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"どんな試練も切り抜ける覚悟を持つ決然とした生存者。<BR><BR>彼女の固有パークの<B>「唯一の生存者」</B>や<B>「執念の対象者」</B>、<B>「決死の一撃」</B>で自身を危険にさらけ出す代わりに生存能力を高めることができるようになる。","name":"ローリー・ストロード","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"仲間全員の勝算を引き上げる強運なギャンブラー。<BR><BR>彼の固有パークの<B>「手札公開」</B>や<B>「賭け金のレイズ」</B>、<B>「最後の切り札」</B>で全ての生存者の運を上げ、チェスト開錠の助けとなる。","name":"エース・ヴィスコンティ","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"目標に集中し、困難な状況でも素早く戦略を切り替えて対応する専心的な競争者。<BR><BR>彼女の固有パークの<B>「テクニシャン」</B>や<B>「しなやか」</B>、<B>「警戒」</B>は発電機の修理や殺人鬼の発見に役立つ。","name":"フェン・ミン","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"生存の可能性を上げ仲間を治療する、断固たるドリームウォーカー。<BR><BR>彼の固有パークの<B>目を覚ませ！</B>や<B>調剤学</B>、<B>不寝番</B>で脱出ゲートを見つけ、より容易に治療ができるようになる。","name":"クエンティン・スミス","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"目標の場所を突き止め、それをいち早く完遂する執念の刑事。<BR><BR>彼の固有パークの<B>「執念」</B>や<B>「刑事の直感」</B>、<B>「張り込み」</B>で目標に集中し、素早く立て直すことができるようになる。","name":"タップ刑事","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"自分の身の回りのものを曲で表現する希望の歌姫。<br><br>彼女の固有パークの<B>「ダンス・ウィズ・ミー」</B>や<B>「ウィンドウズ・オブ・オポチュニティ」</B>、<B>「ボイルオーバー」</B>で最悪の窮地を抜け出すための洞察力と大胆さがもたらされる。","name":"ケイト・デンソン","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"新しい状況に適応し、それに応じて戦略を立てることができる機転の利く教師。<br><br>彼の固有パークの<B>「陽動」</B>や<B>「解放」</B>、<B>「独学者」</B>で殺人鬼の気を逸らし、危機的な状況を切り抜け、より上手く試練を続けることができる。","name":"アダム・フランシス","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"勝ち目がないように思える状況でも、確固たる意志をもって立ち上がる物静かなアーティスト。<br><br>彼の固有パークの<B>「ブレイクダウン」</B>や<B>「アフターケア」</B>、<B>「ディストーション」</B>で観察力を研ぎ澄まし、殺人鬼から身を隠すのに役立つ。","name":"ジェフ・ヨハンセン","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"影響力のあるセレブリティ。周囲の意見に屈せず、困難な状況にも真正面から取り組む。<br><br>固有パークの<b>「連帯感」</b>、<b>「平常心」</b>、<b>「真っ向勝負」</b>を使い、柔軟に能力を駆使して自分自身や他の生存者を助け、危険な状況から脱出する。","name":"ジェーン・ロメロ","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"自信過剰で自分の道を貫き通す一匹狼。生き延びるために生まれたような男。<br><br>固有パークの<b>「フリップ・フロップ」</b>、<b>「ベルトを締めろ！」</b>、<b>「英雄の奮起」</b>で得た力で、痛みや困難にも負けずに立ち向かい、厄介な状況にある仲間の救助も忘れない。 ","name":"アシュレイ・J・ウィリアムズ","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"野心に満ちたジャーナリスト。鋭い観察眼と、周囲の人間が見落とすようなことも見抜く洞察力を持っている。<br><br>固有パークの<b>力を合わせて</b>、<b>執着心</b>、<b>内なる力</b>を使って情報を集め、予想外の困難にも果敢に立ち向かう。","name":"ナンシー・ウィーラー","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"スクールカーストの元トップ。自身の専売特許であるウィットに富んだ言葉と皮肉を口にしながらも、仲間の生存者の盾となって救援に駆けつける。<br><br>固有パークの<b>ベビーシッター</b>、<b>仲間意識</b>、<b>セカンドウインド</b>を使って殺人鬼の注意を引き付け、痛みに耐えながら再び戦いの地へと戻っていく。","name":"スティーブ･ハリントン","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"鍛えられたストリートレーサー。困難な状況下において、自分と仲間の生存者たちを優位な状況に置くことができる。<br><br>固有パーク<b>怪我の功名</b>、<b>強硬手段</b>、<b>突破</b>を使用して、血の跡を隠し、倒れたパレットを元の状態にして、無力な生存者を助けることができる。","name":"木村結衣","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"都会で生き抜く術を使って探知から逃れ、他の生存者を大いに手助けする勇敢なドキュメンタリー作家。<br><br>固有パークの<b>オフレコ</b>、<b>おとり</b>、<b>人々のために</b>を使って危険に直面するなかで身を潜め、殺人鬼の気をそらせて、自分の身の安全と引き換えに他者を素早く回復させる。","name":"ザリーナ・カッシル","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"シェリル・メイソンは恐怖に立ち向かう若きベテランとして、自分と仲間を勇気づける。<br><br>固有パークの<b>ソウルガード</b>、<b>血の協定</b>、<b>抑圧の同盟</b>で計り知れない苦難を乗り切り、仲間との接触を保って、目標を立てる。","name":"シェリル・メイソン","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"先見性のある建築士。確固とした意志の強さで計画を立て、他の生存者を救出することができる。<br><br>固有パークの<b>透視家</b>、<b>苦肉の策</b>、<b>耐久設計</b>は、発電機を可視化し、生存者を救出して、道具を最大限に活用することができる。","name":"フェリックス・リクター","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"オカルト調査に従事し、巧みな手口と断固たる決意で自らの命を守ることができる。<br><br>固有パークの<b>査定</b>、<b>欺き</b>、<b>勢力争い</b>で、新たな方法でオブジェクトにアクションを行いながらも、殺人鬼から逃れるための代替策を準備しておく。 ","name":"エロディー・ラコト","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"利己主義の音楽プロデューサー。混乱の時も目標に向かって前進することができる。<br><br>固有パークの<b>出世街道</b>、<b>大ヒット</b>、<b>自己防衛</b>で、他の人が被害にあっている時に自分の能力を向上し、追跡から素早く逃げることができる。 ","name":"リー・ユンジン","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"S.T.A.R.S.の発足メンバーであるジル・バレンタインは、これまで数えきれないほどの生体兵器に打ち勝ってきた。<br><br>固有パークの<b>カウンターフォース</b>、<b>起死回生</b>、<b>地雷爆破</b>で、間接的に反撃を繰り出し、仲間に強力な支援を提供する。 ","name":"ジル・バレンタイン","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"新人警官のレオン・S・ケネディは、ラクーンシティが危機的状況のなか任務で求められる以上の活躍を見せた。<br><br>固有パークの<b>忍苦の時</b>、<b>スタングレネード</b>、<b>新人魂</b>で、痛みを我慢し、殺人鬼を混乱させて、失われそうな目標を見守る。 ","name":"レオン・S・ケネディ\\n","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./jp/index.ts ***!
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
/* harmony import */ var _src_lib_locales_jp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/jp */ "./src/lib/locales/jp.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_jp__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map