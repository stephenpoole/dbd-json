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

/***/ "./src/lib/locales/ko.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/ko.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_ko_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/ko/items.json */ "./src/data.compiled/locales/ko/items.json");
/* harmony import */ var _data_compiled_locales_ko_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/ko/killerAddons.json */ "./src/data.compiled/locales/ko/killerAddons.json");
/* harmony import */ var _data_compiled_locales_ko_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/ko/killerOfferings.json */ "./src/data.compiled/locales/ko/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_ko_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/ko/killerPerks.json */ "./src/data.compiled/locales/ko/killerPerks.json");
/* harmony import */ var _data_compiled_locales_ko_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/ko/killers.json */ "./src/data.compiled/locales/ko/killers.json");
/* harmony import */ var _data_compiled_locales_ko_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/ko/powers.json */ "./src/data.compiled/locales/ko/powers.json");
/* harmony import */ var _data_compiled_locales_ko_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/ko/sharedOfferings.json */ "./src/data.compiled/locales/ko/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_ko_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/ko/survivorAddons.json */ "./src/data.compiled/locales/ko/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_ko_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/ko/survivorOfferings.json */ "./src/data.compiled/locales/ko/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_ko_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/ko/survivorPerks.json */ "./src/data.compiled/locales/ko/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_ko_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/ko/survivors.json */ "./src/data.compiled/locales/ko/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.Korean;
var data = {
  items: _data_compiled_locales_ko_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_ko_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_ko_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_ko_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_ko_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_ko_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_ko_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_ko_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_ko_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_ko_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_ko_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/ko/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/ko/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"두꺼운 종이로 싸여진 작은 폭약 한 줄. 큰 소리와 강렬한 빛을 발산한다. 상대를 방해하거나, 실명시키거나, 축하하기 위해 사용할 수 있다.<br><li>내구도 <span class=\\"Highlight1\\">1</span></li>","name":"중국식 폭죽","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"표준 규격의 손전등. 어둠을 밝히는 데 사용할 수 있다.<br><li><span class=\\"Highlight1\\">8초</span> 동안 사용할 수 있다.</li>","name":"손전등","flavor":"\\"앞 놈이 다 써버렸군, 꺼지기 직전이야.\\"","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"주황색 광선에 작은 유령이 붙어 있는 손전등.<br><li><b>8초</b> 동안 사용할 수 있다.</li><li>당신의 인생에 등장하는 친절한 유령들의 수가 <b>상당히 증가한다</b>.</li>","name":"도깨비불","flavor":"\\"행복한 할로윈이 되기를!\\"","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"좋은 손잡이로 훌륭한 휴대성을 가진 손전등. 효율적인 기술은 더 적은 전력으로 강한 빛을 만든다.<br><li><span class=\\"Highlight1\\">8초</span> 동안 사용할 수 있다.</li><li>손전등의 배터리 소모가 <b>약간 감소한다</b>.</li><li>손전등의 정확도가 <b>약간 증가한다</b>.</li>","name":"운동용 손전등","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"많은 전력이 충전되어 있는, 튼튼하지만 무거운 손전등.<br><li><span class=\\"Highlight1\\">12초</span> 동안 사용할 수 있다.</li><li>손전등의 정확도가 <b>약간 감소한다</b>.</li><li>손전등의 밝기가 <b>적당히 증가한다</b>.</li><li>손전등 빛이 살인마에게 미치는 효과가 <b>적당히 증가한다</b>.</li>","name":"다용도 손전등","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"힘을 지녀 진동하는, 머리와 자루만이 남은 열쇠. 부숴진 열쇠는 그 자체만으로는 힘을 이끌어 낼 수 없지만, 여러 가지 물건들을 열쇠 고리에 연결하여 다양한 힘을 이끌어 낼 수 있다. <br><li><span class=\\"Highlight1\\">10초</span> 동안 사용할 수 있다.</li>","name":"부숴진 열쇠","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"큰 힘을 지녔었던, 무디고 구부러진 열쇠. 이 열쇠는 그 자체만으로 힘을 이끌어 낼 수는 없지만, 대신 여러 가지 물건들을 열쇠고리에 연결하여 다양한 힘을 이끌어 낼 수 있다.<br><li><b>5초</b> 동안 사용할 수 있다.</li><li>소모하여 비상탈출구를 열 수 있다.</li>","name":"무뎌진 열쇠","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"불길한 힘이 새어나오는 변색되고 뒤틀린 열쇠. 만능열쇠는 그 자체만으로는 힘을 이끌어 낼 수 없지만, 여러 가지 물건들을 열쇠고리에 연결하여 다양한 힘을 이끌어 낼 수 있다. <br><li><span class=\\"Highlight1\\">30초</span> 동안 사용 할 수 있다.</li><li>사용하면 비상탈출구를 열 수 있다.</li>","name":"만능열쇠","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"평범한 가죽끈으로 말려져 있는 마치 피부와 같은 재질의 지도. 손에 쥐고 지도에 정신을 집중하면, 지도를 천천히 태우면서 강력한 오라 감지 능력을 발휘할 수 있다. 지도의 사용 시간이 남아 있다면, 탐색을 마친 물체의 오라가 계속 나타난다.<br><li><span class=\\"Highlight1\\">20초</span> 동안 사용할 수 있다.</li><li>희생제를 시작할 때 <span class=\\"Highlight2\\">1개</span>의 발전기를 자동으로 탐색한다.</li><li><span class=\\"Highlight3\\">8미터</span> 내에 존재하는 발전기를 탐색하는 능력이 활성화된다.</li>","name":"지도","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"이상할 정도로 신선한 피부로 만들어진 지도. 가장자리의 핏자국은 마르지 않았다. 다양한 색의 끈으로 감겨 있다. 쥐고 지도에 정신을 집중하면, 지도를 천천히 태우면서 강력한 오라 감지 능력을 발휘할 수 있다. 지도의 사용 시간이 남아 있다면, 탐색을 마친 물체의 오라가 계속 나타난다.<br><li><span class=\\"Highlight1\\">20초</span> 동안 사용할 수 있다.</li><li>희생제를 시작할 때 <span class=\\"Highlight2\\">3개</span>의 물체를 자동으로 탐색한다.</li><li><span class=\\"Highlight3\\">8미터</span> 내에 존재하는 발전기를 탐색하는 능력이 활성화된다.</li><li><span class=\\"Highlight3\\">8미터</span> 내에 존재하는 비상탈출구를 탐색하는 능력이 활성화된다.</li><li><span class=\\"Highlight3\\">8미터</span> 내에 존재하는 갈고리를 탐색하는 능력이 활성화된다.</li><li><span class=\\"Highlight3\\">8미터</span> 내에 존재하는 탈출구를 탐색하는 능력이 활성화된다.</li>","name":"무지개 지도","flavor":"\\"나는 낙심했다. 말로 표현할 수 없는 지식과 엄청난 노력, 내가 모를 수도 있는 그 어떤 것도, 이 악몽에서 벗어나는 데 아무런 쓸모도 없다.\\" - 비고의 일지","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"치료 도구가 부족함에도 응급 상황에서 생명을 구할 수 있는 가장 기초적인 구급상자.<br><li><b>내구도 16</b>.</li><li>타인을 치료하는 속도가 <b>적당히 빨라진다</b>.</li><li><b>자가 치료</b> 능력이 활성화된다.</li>","name":"캠핑용 구급상자","flavor":"\\"간신히 치료할 도구 정도나 있겠군요.\\"","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"응급 처치 장비가 담겨 있는, 형광색 할로윈 스티커가 붙여진 플라스틱 점심 도시락.<br><li><b>내구도 <span class=\\"Highlight1\\">24</span></b></li><li>치료 속도가 <b>상당히 빨라진다</b>.</li><li><b>자가 치료</b> 능력이 활성화된다.</li><li>다른 사람들에게 <b>상당히 잘 보여진다</b>. </li>","name":"할로윈 점심 도시락","flavor":"\\"안전 제일! 할로윈 때에는 더 잘 보여지도록 하렴.\\"","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"심각한 부상도 치료할 수 있도록 필요한 모든 장비가 구비된 구급상자.<br><li>내구도 <span class=\\"Highlight1\\">24</span></li><li>치료 속도가 <b>상당히 빨라진다</b>.</li><li><b>자가 치료</b> 능력이 활성화된다.</li>","name":"구급상자","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"좋은 상태의 치료 용품을 구비한 튼튼하고 잘 정돈된 의료 키트.<br><li><b>내구도 16</b>.</li><li>타인을 치료하는 속도가 <b>엄청나게 빨라진다</b>.</li><li>자가 치료 속도가 <b>엄청나게 빨라진다</b>.</li><li><b>자가 치료</b> 능력이 활성화된다.</li>","name":"비상용 구급상자","flavor":"\\"거의 모든 상처를 치료할 수 있지만... 이건 힘들겠어.\\"","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"주로 손이 닿기 어렵고 고립된 위치에 있는 사람들의 응급 구조를 위한 의료 물품이 담긴 큰 철제 상자.<br><li>내구도 <b>32</b>.</li><li>타인을 치료하는 속도가 <b>엄청나게 빨라진다</b>.</li><li>스킬 체크 성공 구간이 <b>적당히 넓어진다</b>.</li><li>스킬 체크 대성공 구간이 <b>적당히 넓어진다</b>.</li><li><b>자가 치료</b> 능력이 활성화된다.</li>","name":"경관의 구급상자","flavor":"\\"작은 라벨이 뒷면에 붙어 있다: VK.ID-3994723.\\"","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"언제라도 부서질 것 같은 공구가 들어있는 철제 상자. 특별한 훈련 없이 기계 장치를 수리하거나 파괴할 수 있다.<br><li><b>내구도 16</b>.</li><li>수리 속도가 <b>적당히 빨라진다.</b></li><li>스킬 체크의 성공 구간이 <b>약간 좁아진다.</b></li><li><b>파괴공작</b> 능력이 활성화된다.</li>","name":"낡은 공구상자","flavor":"\\"이걸 공구라고 부르는 거야?... 정말로?\\"","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"기본적인 도구들이 들어있는 철제 상자. 특별한 훈련 없이, 기계 장치를 수리하거나 파괴할 수 있다.<br><li><b>내구도 20.</b></li><li>수리 속도가 <b>적당히 빨라진다.</b></li><li><b>파괴공작</b> 능력이 활성화된다.</li><li>파괴공작의 속도가 <b>약간 빨라진다.</b></li>","name":"공구상자","flavor":"\\"이 공구들이 왜 여기 있는지 모르겠어. 우리 중 한명이 들고 왔거나, 그 괴물들의 것인걸까?\\"","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"전문적인 기계 공구가 들어있는 철제 상자. 특별한 훈련 없이, 기계 장치를 수리하거나 파괴할 수 있다.<br><li><b>내구도 16</b>.</li><li>수리 속도가 <b>상당히 빨라진다.</b></li><li><b>파괴공작</b> 능력이 활성화된다.</li><li>파괴공작의 속도가 <b>약간 감소한다</b>.</li>","name":"기계공의 공구상자","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"기본적인 공구와 여분의 기계 부품이 들어간 큰 철제 상자. 특별한 훈련 없이, 기계 장치를 수리하거나 파괴할 수 있다.<br><li><b>내구도 32</b>.</li><li>수리 속도가 <b>적당히 빨라진다.</b></li><li><b>파괴공작</b> 능력이 활성화된다.</li>","name":"대형 공구상자","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"공학용 전문 공구가 들어있는 철제 상자.초보자도 대부분의 공구로 빠르게 기계 장치를 수리하거나 파괴할 수 있다.<br><li><b>내구도 16</b>.</li><li>수리 속도가 <b>엄청나게 빨라진다.</b></li><li><b>파괴공작</b> 능력이 활성화된다.</li><li>파괴공작의 속도가 <b>적당히 빨라진다.</b></li>","name":"기술자의 공구상자","flavor":"\\"나는 무엇과도 비교할 수 없을 만큼 정교한 도구를 만들었으나 그들에게 도둑맞고 말았다. 이것은 안개가 뱉어낸 조잡한 모조품일 뿐이다.\\" - 비고의 일지","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"다양한 크기의 톱과 바이스 외에도 많은 공구가 들어간 철제 상자. 공구상자에 들어있는 공구들은 파괴가 목적인 공구들이지만, 다양한 기계 장치를 수리할 때도 쓸 수 있다.<br><li><b>내구도 24</b>.</li><li>수리 속도가 <b>약간 빨라진다.</b></li><li><b>파괴 공작</b> 능력이 활성화된다.</li><li>파괴공작의 속도가 <b>상당히 빨라진다.</b></li>","name":"알렉스의  공구상자","flavor":"\\"대부분의 공구에 \\\\\'알렉스\'\\\\라고 표시되어 있다.\\"","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"작고, 폭발하기 쉬운 저녁 식사 테이블 장식. 큰 소리와 강렬한 빛을 발산한다. 상대를 방해하거나, 실명시키거나, 축하하기 위해 사용할 수 있다.<br><li>내구도 <span class=\\"Highlight1\\">1</span></li>","name":"겨울 폭죽","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"작으면서 폭발 위험이 높은 식탁 장식. 폭발 시 큰 소리와 함께 밝은 빛, 다양한 색종이가 터져나온다. 상대를 방해하거나, 실명시키거나, 3주년을 함께 축하하기 위해 사용할 수 있다.<br><li><b>1회 사용 가능.</b></li>","name":"3주년 파티 폭죽","flavor":"“축하합니다! 함께 3주년을 축하해 주세요!\\"<br>– 데드 바이 데이라이트 팀","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"생존자를 완전히 치료하는 순간 색종이 조각이 폭발하는 축제용 구급상자. 서프라이즈!<br><li><b>내구도 24</b>.</li><li>다른 이를 치료하는 속도가 <b>상당히 증가한다</b>.</li><li><b>자가 치료</b> 능력이 활성화된다.</li>","name":"기념일 구급상자","flavor":"\\"4주년 축하해요! 앞으로 더 많은 해를 함께 하길!\\"<br>- 데드 바이 데이라이트 팀","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"살인마의 눈을 멀게 하는 순간 색종이 조각이 폭발하는 축제용 손전등. 서프라이즈!<br><li><b>8초</b> 동안 사용 가능하다.</li>","name":"기념일 손전등","flavor":"\\"4주년 축하해요! 앞으로 더 많은 해를 함께 하길!\\"<br>- 데드 바이 데이라이트 팀","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/ko/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"보호용 패드가 있는 가죽 장갑.<br><li>곰덫의 설치 속도가 <b>약간 빨라진다</b>.</li>","name":"덫 설치용 장갑","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"곰덫이 사냥감을 잡고 있을 수 있는 힘을 주는 크고 무거운 코일 스프링.<br><li>곰덫을 무력화하는 데 걸리는 시간이 <b>약간 증가한다.</b></li>","name":"강력 코일 스프링","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"곰덫의 코일 스프링을 이중 구조에서 사중 구조로 바꾸어 사냥감을 조이는 힘을 엄청나게 상승시킨다.<br><li>곰덫을 무력화하는 데 걸리는 시간이 <b>적당히 증가한다.</b></li>","name":"4코일 스프링 키트","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"나무의 재. 끓여서 바르면 곰덫이 눈에 덜 띄게 된다.<br><li>곰덫이 <b>적당히 어두워진다</b>.</li><li>모든 곰덫에 적용된다.</li>","name":"로그우드 염료","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"곰덫에 달 수 있는 이 턱은 톱과 같은 날을 가지고 있어서 사냥감을 물면 엄청나게 큰 상처를 남긴다.<br><li>곰덫에 걸린 생존자는 치료받기 전까지 <b>출혈</b> 상태 이상에 걸리게 된다.</li>","name":"톱니 모양 턱","flavor":"\\"포식자 짐승처럼, 그것은 냄새를 맡고 피를 추적할 수 있었어.\\"","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"곰덫을 빠르고 안전하게 설치할 수 있도록 만들어진 간단한 공구.<br><li>곰덫의 설치 속도가 <b>적당히 빨라진다</b>.</li>","name":"덫 설치기","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"가죽으로 만들어진 짐 운반용 가방. 사냥에 필요한 도구들을 나르기에 적합할 만큼 크고 튼튼하다.<br><li>추가로 <span class=\\"Highlight1\\">1개</span>의 곰덫을 가지고 시작한다. </li><li>추가로 <span class=\\"Highlight2\\">2개</span>의 곰덫을 더 소지할 수 있다.</li>","name":"덫 운반용 가방","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"단단하고 불안정한 녹슨 곰덫은 사냥감에게 치료하기 힘든 상처를 입힌다.<br><li>곰덫에 걸린 생존자는 <b>깊은 상흔</b> 상태 이상에 걸리게 된다.","name":"녹슨 턱","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"주로 사용하는 코일이 망가졌을 때도 곰덫을 효과적으로 유지해주는 보조 코일.<br><li>곰덫을 무력화하는 데 걸리는 시간이 <b>상당히 증가한다.</b></li>","name":"보조 코일","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"타르와 같이 무광의 검은색을 띄는 끈적한 물질. 곰덫에 이 물질을 바르면, 사냥감의 눈에 잘 띄지 않는다.<br><li>곰덫이 <b>상당히 어두워진다</b>.</li><li>모든 곰덫에 적용된다.</li>","name":"타르 병","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"기계의 연결 부분에서 마찰을 적게 하고 움직임을 용이하게 하는 데 사용되는 왁스 블럭.<br><li>곰덫으로부터 탈출할 확률이 <b>적당히 감소한다</b>.</li>","name":"왁스 블럭","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"곰덫의 스프링을 다루기 위험하게 만드는 투명한 윤활제.<br><li>곰덫을 무력화하는 데 걸리는 시간이 <b>엄청나게 증가한다.</b></li>","name":"매끄러운 코일","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"곰덫을 튼튼하게 고정할 목적으로 사용하는 특수 공구 세트.<br><li>곰덫의 설치 속도가 <b>엄청나게 빨라진다</b>.</li><li>곰덫으로부터의 탈출과 구출 시간이 <b>상당히 증가한다</b>.</li><li>곰덫으로부터 탈출할 확률이 <b>적당히 감소한다</b>.</li>","name":"고정용 공구","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"다양한 종류의 가죽들을 투박하게 뭉쳐 매우 큰 가방을 만들었다.<br><li>추가로 <span class=\\"Highlight2\\">2개</span>의 곰덫을 가지고 시작한다. </li><li>추가로 <span class=\\"Highlight2\\">2개</span>의 곰덫을 더 소지할 수 있다.</li>","name":"수제 덫 가방","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"끈적하기도 하고, 미끄럽기도 한 이 끔찍한 액체는 곰덫의 스프링을 다루는 것을 더욱 위험하게 만든다.<br><li><b>건강한 상태</b>의 생존자가 곰덫을 파괴공작하거나 무력화시키면, 피투성이 코일이 대가를 요구하여 그 생존자를 <b>부상한 상태</b>로 만든다.</li><li>곰덫을 무력화하는 데 걸리는 시간이 <b>약간 증가한다.</b></li>","name":"피투성이 코일","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"이 무서울 정도로 빛나는 돌로 날카로워진 덫들은 각자 자아를 가지고 있는 것처럼 보인다.<br><li><span class=\\"Highlight1\\">30초</span><b>마다</b>, 무력화되어 있던 곰덫 중 하나가 자동으로 설치된다.</li>","name":"핏빛 연마석","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"교활함을 상징하는 ‘Laokeye’의 문양을 종몸 부분에 재로 그려 넣었다.<br><li>은신 상태에서 판자를 부수거나 발전기를 손상시킬 경우 <b>즉시 은신 상태에서 벗어난다</b>.</li>","name":"\\"뱀\\" - 그을음","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"노련한 추적자를 상징하는 ‘Wonnug’의 문양을 종몸 부분에 재로 그려넣었다.<br><li>평소보다 핏자국이 <b>상당히 잘 보이게 된다</b>.</li>","name":"\\"사냥개\\" - 그을음","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"영적 세계를 상징하는 ‘Khugwemuu’의 문양을 종몸 부분에 재로 그려 넣었다.<br><li>은신을 해제한 후에도 <span class=\\"Highlight1\\">6초</span> 동안 공포 범위가 사라지고 붉은 안광이 보이지 않는다.","name":"\\"고스트 페이스\\" - 그을음","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"야수의 영역을 상징하는 ‘Kunwulju’의 문양을 종몸 부분에 재로 그려 넣었다.<br><li>은신 상태에서 <b>공포 범위가 사라지지 않는다</b>.</li><li>기습 공격 항목에서 <span class=\\"Highlight1\\">100%</span>의 추가 블러드 포인트를 획득한다.</li>","name":"\\"야수\\" - 그을음","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"매우 매끄러운 뼛조각으로 만든 종망치. 이 뼛조각은 통곡의 종이 불규칙하고 무질서한 음향을 발산하게 만든다.<li>생존자들은 통곡의 종이 울리는 <b>거리</b>와 <b>방향</b>을 가늠할 수 없게 된다.","name":"뼈로 만든 종망치","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"순간 이동을 상징하는 \'Kratin\'의 문양을 종몸 부분에 진흙으로 그려 넣었다.<br><li>은신하는 데 걸리는 시간이 <b>상당히 줄어든다</b>.</li>","name":"\\"깜빡임\\" - 진흙","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"파괴적인 폭풍을 상징하는 ‘Ohuwe-Onmnea’ 문양을 종몸 부분에 진흙으로 그려 넣었다.<li>은신 상태에서 레이스의 이동속도가 <b>적당히 빨라진다</b>.</li>","name":"\\"폭풍\\" - 진흙","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"사냥감을 향한 기습을 상징하는 ‘Kuntin-Takkho’의 문양을 종몸 부분에 진흙으로 그려 넣었다.<br><li>은신을 벗어나는 데 걸리는 시간이 <b>약간 감소한다</b>.</li>","name":"\\"신속한 사냥\\" - 진흙","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"흉포함을 상징하는 \'Baikra-Kaeug\' 의 문양을 종몸 부분에 진흙으로 그려 넣었다.<br><li><b>기습 공격</b>을 당한 생존자는 <span class=\\"Highlight1\\">60초</span> 동안 <i>실명</i> 상태 이상에 걸리게 된다 .</li>","name":"\\"눈 먼 투사\\" - 진흙","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"파괴적인 폭풍을 상징하는 ‘Ohuwe-Onmnea’ 문양을 종몸 부분에 백색 잉크로 그려 넣었다.<li>은신 상태에서 레이스의 이동속도가 <b>상당히 빨라진다</b>.</li>","name":"\\"폭풍\\" - 순백","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"사냥감을 향한 기습을 상징하는 ‘Kuntin-Takkho’의 문양을 종몸 부분에 진흙으로 그려 넣었다.<br><li>은신을 벗어나는 데 걸리는 시간이 <b>적당히 감소한다</b>.</li>","name":"\\"신속한 사냥\\" - 순백","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"어둠의 응집을 상징하는 \'Yiwarick\'의 문양을 종몸 부분에 백색 잉크로 그려 넣었다.<br><li>은신 상태에서 창틀을 넘는 속도, 캐비닛을 여는 속도, 판자와 다른 물건을 부수는 속도 그리고 발전기를 손상시키는 속도가 <b>상당히 줄어든다</b>.</li>","name":"\\"그림자 무도\\" - 순백","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"순간 이동을 상징하는 \'Kratin\'의 문양을 종몸 부분에 백색 잉크로 그려 넣었다.<br><li>은신하는 데 걸리는 시간이 <b>엄청나게 줄어든다</b>.</li>","name":"\\"깜빡임\\" - 순백","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"흉포함을 상징하는 \'Baikra-Kaeug\' 의 문양을 종몸 부분에 백색 잉크로 그려 넣었다.<br><li>기습 공격을 당한 생존자는 건강한 상태로 치료될 때까지 <b>깊은 상흔</b>과 <b>출혈</b> 상태 이상에 걸리게 된다.</li>","name":"\\"눈 먼 투사\\" - 순백","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"파괴적인 폭풍을 상징하는 ‘Ohuwe-Onmnea’ 문양을 종몸 부분에 진흙으로 그려 넣었다.<br><li>은신 상태에서 레이스의 이동속도가 <b>엄청나게 빨라진다</b>.</li>","name":"\\"폭풍\\" - 붉은 피","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"사냥감을 향한 기습을 상징하는 ‘Kuntin-Takkho’의 문양을 종머리 부분에 피로 새겨 넣었다.<br><li>은신을 벗어나는 데 걸리는 시간이 <b>상당히 감소한다</b>.</li>","name":"\\"신속한 사냥\\" - 붉은 피","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"어둠의 응집을 상징하는 \'Yiwarick\'의 문양을 종몸 부분에 피로 새겨 넣었다.<br><li>은신 상태에서 창틀을 넘는 속도, 캐비닛을 여는 속도, 판자와 다른 물건을 부수는 속도 그리고 발전기를 손상시키는 속도가 <b>엄청나게 줄어든다</b>.</li>","name":"\\"그림자 무도\\" - 붉은 피","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"만물을 주시하는 엔티티를 상징하는 \'Kra-Frabai\'의 문양을 종머리 부분에 피로 새겨 넣었다.<br><li>은신 상태에서 생존자의 오라를 볼 수 있는 능력을 얻는다. 은신 상태일 때, <span class=\\"Highlight1\\">12미터</span> 내에 있는 생존자의 오라를 볼 수 있다.</li>","name":"\\"만물을 보는 눈\\" - 붉은 피","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"의식용 끈으로 감싼 종망치. 종소리를 한층 부드럽게 만들어주고 불길한 기운을 발산한다.<br><li>통곡의 종소리가 <b>완전히 사라진다</b>.</li>","name":"의식용 종망치","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"만물을 주시하는 엔티티를 상징하는 \'Kra-Frabai\'의 문양이 종머리 부분에서 불길한 빛을 발한다.<br><li>생존자의 오라를 읽을 수 있는 능력을 얻게 된다. 은신 상태일 때, <b>발전기 수리 상태를 오라의 진한 정도로 구분할 수 있게 된다</b>.</li>","name":"\\"만물을 보는 눈\\" - 영혼","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"매우 잘 만들어진 클러치로, 체인이 부드럽게 움직일 수 있도록 한다.<br><br><li>전기톱 질주가 발동되는 동안, 충격 지역이 <b>감소한다</b>.</li>","name":"헤비 클러치","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"전기톱 엔진이 한 번에 사용할 수 있는 연료의 양을 제한하여 일정하고 안전한 속도를 내게 해주는 기계장치.<br><br><li>전기톱에 타격을 받은 생존자들은 건강 상태가 한 단계 낮아진다.</li><li>전기톱을 사용하여 얻는 기만 항목의 블러드포인트가 <b>100%</b> 증가한다.</li>","name":"속도 제어기","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"금이 가고 먼지가 많은 필터지만, 여전히 재고로 쌓여있는 모델보다 더 잘 작동한다.<br><br><li>전기톱 과열 제한이 <b>약간 증가한다</b>.</li>","name":"고철상 공기 필터","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"충격으로부터 보호해 주는 강화된 발가락이 있는 부츠.<br><br><li>전기톱으로 물체에 타격을 가한 후의 회복 시간이 <b>약간 줄어든다</b>.</li>","name":"강철 발가락 부츠","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"대충 수정된 머플러에 공기가 숭숭 통한다.<br><br><li>전기톱의 냉각 정도가 <b>약간 증가한다</b>.</li>","name":"구멍뚤린 소음기","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"고국의 남성들이 착용할 영예롭게 반짝이는 벨트.<br><br><li>전기톱이 과열되면 공포 범위를 8미터가량 <b>감소시킨다</b>.</li>","name":"큰 버클","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"시끄러운 체인에 사용하는 저렴한 기름.<br><br><li>전기톱에 의해 만들어진 소음이 <b>약간 감소한다</b>.</li>","name":"싸구려 엔진 오일","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"믿을 수 있는 부츠 한 켤레로, 맥스 톰슨 경의 시체에서 뽑아냈다.<br><br><li>전기톱 질주의 회전 성능이 <b>적당히 증가한다</b>.</li>","name":"아버지의 부츠","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"전기톱의 희생양이 된 자들을 전기통 몸통 부분에 새겼다. 이 판화는 전기톱을 사용하는 자에게 결의를 다지게 해준다. <br><li>전기톱의 질주 속도가 <b>약간 빨라진다</b>.</li><li>전기톱의 시동에 필요한 시간이 <b>약간 증가한다</b>.</li><li>중첩 가능</li>","name":"죽음의 판화","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"에블린 톰슨의 작은 가방에서 나온 알약 카페인 몇 알. 부작용으로는 신경과민과 예민함이 있다.<br><br><li>판자에 의해 기절한 후 30초 동안 전기톱의 시동에 필요한 시간이 <b>약간 줄어든다</b>.</li><br>","name":"어머니의 비밀","flavor":"\\"의사 선생님, 제발 몇 알만 더 처방해 주세요.\\" —애블린 톰슨","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"킥백의 가능성을 감소시키데에 특화된 체인이다.<br><br><li>전기톱 질주가 발동되는 동안, 장애물에 부딪힐 경우, 타임 페널티가 <b>상당히 감소한다</b>.</li>","name":"로우 킥백 체인","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"사냥감을 미행할 때 사냥꾼의 냄새를 감추기 위한 향긋한 향이 있는 잎을 으깬 것이다.<br><br><li>전기톱의 타격이 적중한 후, 15초 동안 감지 불가능 상태 이상을 얻는다.</li>","name":"으깬 잎","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"안개 속에 서식하는 어둠을 먹고 사는 괴물을 전기통 몸통 부분에 새겼다. 이 판화는 전기톱을 사용하는 자에게 결의를 다지게 해준다.<br><li>전기톱의 질주 속도가 <b>적당히 빨라진다</b>.</li><li>전기톱의 시동에 필요한 시간이 <b>약간 증가한다</b>.</li><li>중첩 가능</li>","name":"파멸의 판화","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"눈 밑에 바를 수 있는 진한 기름으로 눈부심을 줄여준다.<br><br><li>손전등이 당신을 비출 때 전기톱의 냉각 정도가 <b>적당히 증가한다</b>.</li>","name":"검은 기름","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"먼지와 기름이 말라붙었지만, 이 카뷰레터는 잘 조정되었다.<br><br><li>전기톱의 시동에 필요한 시간이 <b>적당히 줄어든다</b>.</li><li>기본 이동 속도가 4.4 m/s로 <b>감소한다</b>.","name":"조정한 카뷰레터","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"진흙을 걷는 걸음 걸음마다의 안정성과 제어력을 확보하기 위해 금속이 장착된 부츠.<br><li>전기톱의 회전 성능이 <b>엄청나게 증가한다</b>.</li><li>장애물에 부딪혔을 때의 페널티가 <b>상당히 증가한다</b>.</li>","name":"징 박힌 부츠","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"고약한 냄새가 나는 장갑으로, 알 수 없는 물질로 더럽혀졌다. 장갑에 매우 안 좋지만, 두꺼운 천을 만들어졌다.<br><br><li>전기톱의 회전 속도를 올릴 때 과열되는 열기가 <b>적당히 줄어든다</b>.</li><br>","name":"돈사 장갑","flavor":"\\"열심히 일하는 사람의 영혼은 더럽힐 수 없지.\\" — 맥스 톰슨 경","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"가벼운 체인이 전기톱의 무게를 감소시켜, 훌륭한 기동성을 선사한다.<br><br><li>판자 또는 벽을 부순 후 계속해서 전기톱 질주를 발동시킨다.</li><li>판자 또는 벽을 부순 후 5초 내에 전기톱 타격을 받은 생존자들은 건강 상태가 한 단계 낮아진다.</li>","name":"주목받지 않는 체인","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"한때, 맥스 주니어의 속박을 의미했던 이 벽돌은 방안에 있는 바리케이드가 무너졌을 때 떨어진 최초의 벽돌이다.<br><br><li>전기톱 질주를 2초 동안 유지하면, 질주를 끝낼 때까지 감지 불가능 상태 이상을 얻는다.</li><br>","name":"핏빛 벽돌","flavor":"\\"아들아, 어떤 소동을 일으키는 거냐?\\" — 맥스 톰슨 경","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"다른 모든 것을 능가하는 능숙한 솜씨로 만든 전기톱 소음기.<br><br><li>공포 범위 밖에 있는 생존자들에게 전기톱 소리는 들리지 않는다.</li>","name":"첨단 소음기","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"싸구려 재목에 도색조차 하지 않은 말 모양 장난감. 긴장증 환자와 그의 간호사가 깊은 관계였음을 상징한다.<br><li>빗나간 점멸 공격으로 인한 추가 탈진 시간을 <b>적당히 감소시킨다.</b></li>","name":"장난감 나무 말","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"병실에서 가져온 기생충이 있는 참빗. 불안증 환자와 그녀의 간호사가 깊은 관계였음을 상징한다.<br><li>점멸을 사용한 돌진 공격의 이동 거리를 <b>적당히 감소시킨다</b>.</li><li><i>점멸 공격</i>의 블러드포인트를 <b>100%</b> 증가시킨다.</li>","name":"흰색 참빗","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"무디고 녹슨 금속 숟가락. 202호실 환자인 ‘배드맨’에게서 압수했다.<br><li>점멸 공격으로 생존자 타격에 성공하면 고통에 찬 비명 소리가 <b>60초</b> 동안 <b>적당히 커진다</b>.</li>","name":"금속 숟가락","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"배드맨이 자신의 손으로 뽑아낸 썩은 어금니.<br><li>점멸 공격으로 생존자 공격에 성공하면 <b>28 미터</b> 내에 있는 치료 중이거나, 치료받는 생존자의 오라를 <b>60초 동안</b> 볼 수 있다.</li>","name":"배드맨의 기념품","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"불에 타고 깨진 회중시계. 덜그럭거리는 소리가 난다. 모리스 간호사의 시체에서 얻었다.<br><li>연속 점멸을 할 수 있는 제한 시간이 <b>적당히 늘어난다</b>.</li>","name":"회중시계","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"불안증 소녀의 시체에서 주운 팔찌. 싸구려지만 누군가에게는 중요한 물건이었을 것이다.<br><li>점멸의 최대 이동 거리를 <b>적당히 감소시킨다.</b></li><li><i>정확한 점멸</i>의 블러드포인트를 <b>100%</b> 증가시킨다.</li>","name":"색이 바랜 팔찌","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"추도식에 사용되는 검은 허리끈. 캠벨 신부의 시체에서 얻었다.<br><li>점멸 충전 속도를 <b>적당히 증가시킨다</b>.</li>","name":"어두운 허리끈","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"환자의 반복 행동을 멈추게 하는 데 쓰였던 솔방울. 긴장증 소년의 시체에서 얻었다.<br><li>연속 점멸으로 인한 추가 탈진 시간이 <b>상당히 줄어든다</b>.</li>","name":"긴장증 소년의 보물","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"배드맨\'에게서 빼앗은 불안하고 떨리는 숨결. 너스의 손길이 닿으면 공격적으로 고동치며 뛰어오른다.<br><li>생존자를 점멸 공격으로 타격하면 <b>너스의 점멸 능력이 무력화되고</b> 너스의 기본 이동 속도가 <b>60초</b> 동안 <b>초당 4.6미터</b>로 증가한다.</li>","name":"경련성 호흡","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"살찐 잡역부에게서 훔친 부풀어 오르는 느린 숨결. 너스의 손길이 닿자 약하게 진동한다.<br><li>점멸의 최대 이동 거리를 <b>상당히 증가시킨다.</b></li><li>점멸의 최대 충전 시간을 <b>상당히 증가시킨다.</li>","name":"무거운 헐떡임","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"캠벨 신부로부터 빼앗은 청량하고 훌륭한 숨결. 너스의 손길이 닿으면 살짝 구부러진다.<br><li>점멸 충전 속도를 <b>상당히 증가시킨다</b>.</li>","name":"취약한 헐떡임","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"긴장증 소년에게서 수집한 불규칙하고 악화되어가는 숨결. 평소에는 안정적이고 차분하지만 너스의 손길이 닿으면 심하게 흔들린다.<br><li>점멸 후 탈진 시간이 <b>적당히 감소한다</b>.</li>","name":"운동실조증","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"너스가 아끼던 불안증 소녀의 놀란 헐떡임. 너스의 손길이 닿으면 격렬하게 경련을 일으킨다.<br><li>점멸 사용 중에 생존자를 지나치면 생존자가 비명을 지르며 <i>기만</i> 항목에서 <b>200 블러드포인트</b>를 얻는다.</li>","name":"불안한 숨막힘","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"붉은색과 검은색이 교차하는 체크 무늬 손수건 조각. 천 조각이 너스에게 엄청난 집중력을 불어넣는다.<br><li>너스가 점멸의 도달 위치를 볼 수 있게 된다.</li>","name":"체크 무늬 손수건","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"크로투스 프렌 정신병원의 잡역부 \'하비 카바나\'에게서 빼앗은 강력한 마지막 숨결. 너스의 손 안에서 강하게 흔들린다.<br><li>점멸의 최대 이동 거리를 <b>엄청나게 증가시킨다</b>.</li><li>점멸의 최대 충전 시간을 <b>엄청나게 증가시킨다</b>.</li>","name":"\\"카바나\\"의 마지막 숨결","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"크로투스 프렌 정신병원의 환자 \'매리 제너\'에게서 빼앗은 강력한 마지막 숨결. 너스의 손 안에서 강하게 떨린다.<br><li>점멸 이후 너스는 <i>능력 활성화 버튼</i>을 눌러 점멸을 사용하기 이전 위치로 돌아간다. 반드시 너스가 탈진으로 쓰러지기 전에 작동시켜야 한다.</li>","name":"\\"제너\\"의 마지막 숨결","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"크로투스 프렌 정신병원의 신부였던 \'캠벨\'에게서 빼앗은 강력한 마지막 숨결. 너스의 손 안에 들어가면 심하게 딱딱거리는 소리가 난다.<br><li>완전히 충전된 점멸을 모두 사용하고 다시 모습을 드러낸 후, 현재 보고 있는 방향으로 반 정도 충전된 점멸을 즉시 사용한다.</li>","name":"\\"캠벨\\"의 마지막 숨결","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"크로투스 프렌 정신병원의 환자 \'배드맨\'에게서 낚아챈 강력한 마지막 숨결. 너스의 손 안에서 강하게 덜컥거린다.<br><li>점멸 공격으로 생존자 타격에 성공하면 너스의 <b>감지 불가능</b> 상태가 <b>16초</b> 동안 지속된다.</li><li>이 효과는 <b>60초</b>에 한 번만 발동된다.</li>","name":"\\"배드맨\\"의 마지막 숨결","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"신성한 책에 사용했던 희고 깨끗한 책갈피. 분란을 상징한다.<br><li>연속 점멸 횟수가 <b>1</b>회 추가된다.</li><li>너스의 시야 안에서 점멸할 수 없게 된다.</li>","name":"찢어진 책갈피","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"특이하게 짝이 맞지 않는 단추를 수집해놓은 성냥갑. 끔찍한 장소를 떠올리게 한다.<br><li>연속 점멸 횟수가 <b>1</b>회 제거된다.</li>너스의 기본 이동 속도를 <b>초당 4.2미터</b>로 증가시킨다.</li>","name":"성냥갑","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"플라스틱제 싸구려 귀걸이. 귀금속과 비슷하게 꾸며져있다.<br><li>미행 중 이동 속도가 <b>약간 빨라진다</b>.</li>","name":"싸구려 귀걸이","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"여성의 관심을 끌기 위해 다소 천박하게 쓴 \\"낭만적인\\" 메모.<br><li><b>내면의 악 <span class=\\"Highlight1\\">I단계</span></b> 상태에서 돌진 공격의 거리가 <b>약간 증가한다</b>.</li>","name":"남자친구의 메모","flavor":"\\"메모에 D라 쓰인 서명이 있다.\\"","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"약간 웨이브진 금발 머리카락.<br><li><b>내면의 악 III단계</b> 상태의 지속 시간이 <b>약간 증가한다</b>.</li><li>처음으로 <b>내면의 악 III단계</b> 상태에 도달하기 위한 미행 게이지의 양이 <b>약간 증가한다</b>.</li>","name":"금발 머리카락","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"반사율이 매우 높은 작은 조각. 깨진 거울의 파편인 것 같다.<br><li><b>내면의 악 II단계</b>상태에서 <b>1초</b> 이상 미행한 생존자의 오라를 볼 수 있다.</li><li>오라는 <b>2초</b> 동안 볼 수 있다.</li>","name":"반사되는 파편","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"묘지에서 주운 마르고 색이 변한 제비꽃<br><li>생존자 미행을 통해 얻는 내면의 악 게이지가 <b>약간 증가한다</b>.</li>","name":"추모화","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"주디스가 좋아했던 구슬과 싸구려 금속으로 만들어진 목걸이.<br><li>미행 중 이동 속도가 <b>적당히 빨라진다</b>.</li>","name":"보석 장식","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"머리카락을 볼륨감있고 부드럽게 만들어주는 큰 머리빗.<br><li><b>내면의 악 III단계</b> 상태의 지속 시간이 <b>적당히 증가한다</b>.</li><li>처음으로 <b>내면의 악 III단계</b> 상태에 도달하기 위해 필요한 미행 게이지의 양이 <b>약간 증가한다</b>.</li>","name":"머리빗","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"아마도 어떤 물건이 깨지면서 생겨났을 작고 착색된 유리 조각.<br><li><b>내면의 악 <span class=\\"Highlight1\\">I단계</span></b>상태에서 <span class=\\"Highlight1\\">1초</span> 이상 미행한 생존자의 오라를 볼 수 있다.</li><li>오라는 <span class=\\"Highlight2\\">3초</span> 동안 볼 수 있다.</li>","name":"유리 파편","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"목부터 꼬리까지 절개된 회색 토끼의 시체.<br><li><b>내면의 악 <span class=\\"Highlight2\\">II단계</span></b> 상태에서 공포 범위가 <b>적당히 감소한다</b>.</li><li><b>내면의 악 <span class=\\"Highlight3\\">III단계</span></b> 상태에서 공포 범위가 <b>적당히 증가한다</b>.</li>","name":"토끼 시체","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"크고 날카로운 거울 조각.<br><li><b>내면의 악 II단계</b> 상태에서 <b>1초</b> 이상 미행한 생존자의 오라를 볼 수 있다.</li><li>오라는 <b>5초</b> 동안 볼 수 있다.</li>","name":"거울 조각","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"주디스 마이어스의 일기장. 대부분의 페이지는 무섭고 불길한 그림으로 훼손됐다.<br><li>1명의 생존자가 <b>집착 대상</b>이 된다.</li><li>집착 대상을 미행해서 얻는 내면의 악 게이지가 <b>상당히 증가한다</b>.</li><li><i>집착 대상이 희생되고 난 후 새로운 집착 대상이 재설정되지 않는다.</i></li>","name":"주디스의 일기","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"한 때는 사치스러운 물건들이 담겼던 텅빈 나무 상자.<br><li>미행 중 이동 속도가 <b>상당히 빨라진다</b>.</li>","name":"보석 상자","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"65년 해든필드 고등학교 연감에서 찢어낸 광택지. 주디스 마이어스를 추모하는 내용이다.<br><li>생존자 미행을 통해 얻는 내면의 악 게이지가 <b>적당히 증가한다</b>.</li>","name":"J.마이어스를 위한 추도사","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"머리를 묶는 데 사용했던 파란색 리본 머리핀.<br><li><b>내면의 악 III단계</b> 상태의 지속 시간이 <b>상당히 증가한다</b>.</li><li>처음으로 <b>내면의 악 III단계</b> 상태에 도달하기 위해 필요한 미행 게이지의 양이 <b>약간 증가한다</b>.</li>","name":"리본 머리핀","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"휴대용으로 지니고 다닐 수 있는 스탠딩 화장 거울. 뿌연 먼지와 분이 묻어있는 것 빼곤 완벽한 상태이다.<br><li><b>내면의 악 <span class=\\"Highlight2\\">II단계</span> </b>상태에서 미행을 하면 <span class=\\"Highlight1\\">16미터</span> 내에 있는 생존자의 오라를 볼 수 있다.</li><li><b>내면의 악 <span class=\\"Highlight2\\">II단계</span> </b>상태에서 더 이상 내면의 악 레벨을 올릴 수 없다.</li><li>이동 속도가 <b>약간 느려진다</b>.<li><li>생존자를 타격할 때마다 잔혹함 항목에서 <span class=\\"Highlight4\\">100%</span><b>의 추가 블러드 포인트</b>를, 기만 항목에서 <span class=\\"Highlight4\\">150%</span><b>의 추가 블러드 포인트</b>를 획득한다.</li>","name":"화장 거울","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"깨진 묘비에서 가져온 주먹만한 크기의 묘비 조각.<br><li><b>내면의 악 III단계</b> 상태에서 <b>건강하거나 부상한 생존자를 살해</b>할 수 있는 능력을 얻는다.</li><li><b>내면의 악 III단계</b> 상태에서 미행 능력이 <b>비활성화</b> 된다.</li><li>생존자를 살해하면 내면의 악 게이지를 <b>상당히 소모한다</b>.</li><li>처음으로 <b>내면의 악 III단계</b> 상태에 도달하기 위해 필요한 미행 게이지의 양이 <b>상당히 증가한다</b>.</li>","name":"묘비 조각","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"휴대용으로 지니고 다닐 수 있는 화장 거울. 어떤 날카로운 금속 물체에 의해 심하게 난도질되어 있다.<br><li><b>내면의 악 <span class=\\"Highlight1\\">I단계</span> </b>상태에서 미행을 하면 <span class=\\"Highlight1\\">32미터</span> 내에 있는 생존자의 오라를 볼 수 있다.</li><li><b>내면의 악 <span class=\\"Highlight1\\">I단계</span> </b>상태에서 더 이상 내면의 악 레벨을 올릴 수 없다.</li><li>생존자를 타격할 때마다 잔혹함 항목에서 <span class=\\"Highlight4\\">100%</span><b>의 추가 블러드 포인트</b>를, 기만 항목에서 <span class=\\"Highlight4\\">200%</span><b>의 추가 블러드 포인트</b>를 획득한다.</li>","name":"난도질된 거울","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"검은색 밴드로 묶인 금발의 머리카락.<br><li><b>내면의 악 III단계</b> 상태의 지속 시간이 <b>엄청나게 증가한다</b>.</li><li>처음으로 <b>내면의 악 III단계</b> 상태에 도달하기 위해 필요한 미행 게이지의 양이 <b>적당히 증가한다</b>.</li>","name":"머리카락 다발","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"싱클레어산 공동묘지에서 도난당한 주디스 마이어스의 크고 무거운 화강암 묘비.<br><li><b>내면의 악 III단계</b> 상태에서 <b>건강하거나 부상한 생존자를 살해</b>할 수 있는 능력을 얻는다.</li><li><b>내면의 악 III단계</b>상태에서 미행 능력이 <b>비활성화</b> 된다.</li><li>처음으로 <b>내면의 악 III단계</b> 상태에 도달하기 위해 필요한 미행 게이지의 양이 <b>엄청나게 증가한다</b>.</li><li>이동 속도가 <b>적당히 느려진다</b>.</li>","name":"주디스의 묘비","flavor":"\\"사랑하는 주디, 여기에 잠들다.\\"","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"누군가의 두피에서 강하게 뜯겨진 머리카락 묶음. 여성스러운 꽃 향기가 난다.<br><li><b>내면의 악 III단계</b> 상태의 지속 시간이 <b>무제한</b>이 된다.</li><li>처음으로 <b>내면의 악 III단계</b> 상태에 도달하기 위해 필요한 미행 게이지의 양이 <b>엄청나게 증가한다</b>.</li>","name":"향기로운 머리카락 다발","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"죽은 식물 줄기로 만든 단단한 목걸이.<br><li>환영 덫을 설치하는 데 걸리는 시간이 <b>약간 감소한다</b>.</li>","name":"줄기 목걸이","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"옅은 금색으로 빛나는 미세한 알 조각.<br><li>환영 덫의 지속시간이 <b>약간 증가한다</b>.</li>","name":"달걀 껍질 가루","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"파리의 시체들로 검어진 작은 진흙 덩어리. 먹어치우면 스태미나가 보충된다.<br><li>해그가 자신의 환영 덫으로 순간 이동할 수 있는 사거리가 <b>약간 증가한다</b>.</li>","name":"죽은 파리 진흙","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"탁한 물이 들어 있는 유리 약병. 지금과는 다른 시대에서 떠내려온 것 같다.<br><li>환영 덫의 발동 범위가 <b>약간 증가한다</b>.</li>","name":"늪지대 물","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"질 좋은 회색털로 덮여있는 소량의 작고 깨끗한 꽃송이.<br><li>환영 덫을 발동시킨 생존자의 오라를 <span class=\\"Highlight1\\">2초</span> 동안 볼 수 있다.</li>","name":"갯버들꽃","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"완전히 둥글고 비어있는 반쪽 짜리 알 껍질.<br><li>환영 덫의 지속시간이 <b>적당히 증가한다</b>.</li><li>중첩 가능</li>","name":"달걀 껍질 반쪽","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"한 줌의 누런 잠자리 날개. 마르고 바삭한 촉감이다. 먹어치우면 스태미나가 보충된다.<br><li>해그가 자신의 환영 덫으로 순간 이동할 수 있는 사거리가 <b>적당히 증가한다</b>.</li><li>중첩 가능</li>","name":"잠자리 날개","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"삼나무 껍질과 늪지 이끼로 죽은 식물의 줄기를 조잡하게 장식한 목걸이.<br><li>환영 덫을 설치하는 데 걸리는 시간이 <b>적당히 감소한다</b>.</li>","name":"사이프러스 목걸이","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"접혀진 수련 잎 안에 오래되어 썩은 물이 고여있다.<br><li>환영 덫의 발동 범위가 <b>적당히 증가한다</b>.</li>","name":"피섞인 물","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"3개의 버드나무 가지를 붙여 만든 삼각형의 화환.<br><li>환영 덫을 발동시킨 생존자의 오라를 <span class=\\"Highlight1\\">4초</span> 동안 볼 수 있다.</li><li>중첩 가능</li>","name":"버드나무 화환","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"시든 난초의 꽃과 나뭇잎으로 죽은 식물의 줄기를 조잡하게 장식한 목걸이<br><li>환영 덫을 설치하는 데 걸리는 시간이 <b>상당히 감소한다</b>.</li>","name":"늪지 난초 목걸이","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"큰 늪지대의 매미 시체. 바삭한 촉감이다. 먹어치우면 스태미나가 보충된다.<br><li>해그가 자신의 환영 덫으로 순간 이동할 수 있는 사거리가 <b>상당히 증가한다</b>.</li><li>중첩 가능</li>","name":"말린 매미","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"깨지고 비어 있는 옅은 오렌지색 거북이 알.<br><li>환영 덫의 지속 시간이 <b>상당히 증가한다</b>.</li><li>중첩 가능</li>","name":"깨진 거북알","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"깊은 진홍색의 혈관이 있는 소량의 진흙. 피의 막이 진흙의 힘을 강화한다.<br><li>환영 덫의 발동 범위가 <b>상당히 증가한다</b>.</li><li>중첩 가능</li>","name":"피투성이 진흙","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"식인종 마을 도살자의 잘려진 손. 갇혀 있는 생명력의 정수가 해그의 엄청난 잠재력을 일깨운다.<br><li>환영이 충돌 판정을 가지게 된다.</li><li>환영 덫으로 순간 이동할 수 있는 능력이 사라진다.</li><li>기만 항목에서 <span class=\\"Highlight4\\">300%</span>의 추가 블러드포인트를 획득한다.</li><li> 다른 모든 애드온들보다 우선적으로 적용된다.</li>","name":"흉터난 손","flavor":"\\"...\\" -도살자","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"식인종 마을의 지하감옥에서 납치된 사람과 시체를 묶어두던 족쇄. 갇혀있는 생명력의 정수가 엄청난 잠재력을 일깨운다.<br><li>생존자가 환영 덫에 걸려도 생존자에게 표시되지 않는다.</li><li>환영 덫이 환영을 생성하지 않는다.</li>","name":"녹슨 족쇄","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"식인종 마을 장로의 차가운 심장. 갇혀있는 생명력의 정수가 엄청난 잠재력을 일깨운다.<br><li>생존자가 환영 덫에 걸리면 해그의 공포 범위가 <b>0</b>이 된다.</li><li>환영의 공포 범위가 <b>16미터</span> 증가한다.</li><br><span class=\\"FlavorText\\">\\"그 꼬맹이의 고기를 더 가져와.\\" - 노파</b>","name":"노파의 심장","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"머리를 자주 맞아서 변형된 식인종 마을 귀머거리 소년의 귀. 갇혀있는 생명력의 정수가 엄청난 잠재력을 일깨운다.<br><li>환영 덫에 걸린 생존자의 청력이 <b>6초</b> 동안 마비된다.</li>","name":"심하게 훼손된 귀","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"오랫동안 늪지대를 떠돈 어린아이의 신발. 갇혀있는 생명력의 정수가 엄청난 잠재력을 일깨운다.<br><li>환영 덫의 발동 범위 안에 있는 생존자는 <b><i>근육 손상</i></b> 상태 이상에 걸린다.</li><li>해그의 이동 속도가 <b>약간 빨라진다</b>.</li><li>환영 덫으로 순간 이동할 수 있는 능력이 사라진다.</li>","name":"축축한 신발","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"리사 셔우드가 실종된 날에 입고 있었던 드레스에서 찢어진 작은 조각. 갇혀 있는 생명력의 정수가 엄청난 잠재력을 일깨운다.<br><li>해그가 자신의 환영 덫으로 순간 이동할 수 있는 사거리가 <b>무제한</b>이 된다.</li><li>생존자가 발동시키지 않은 환영 덫으로 순간 이동 할 수 있다. 이 능력은 <span class=\\"Highlight1\\">15초</span>의 대기시간을 가진다.</li>","name":"민트색 누더기","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"곰팡이가 피었지만 아직 전류가 통하는 전극.<br><li><b>전기장 방출</b>의 사거리가 <b>약간 증가한다</b>.</li>","name":"곰팡이 핀 전극","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"단풍나무로 만들어진 하얀색 체스 나이트. 노인에게서 받은 이 선물은 오래된 기억을 불러일으키며, 닥터가 집중할 수 있게 도와준다.<br><li><i>특수 능력</i>인 <b>전기장 방출</b>의 효과를 시각적으로 보여준다.</li>","name":"단풍나무 나이트","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"래리 기념 연구소의 환자들이 매일 처방받는 전기 충격 요법. 환자에게 가벼운 정신적 혼란을 안겨 준다.<br><li><b>정전기 폭발</b>의 재사용 대기 시간이 <b>약간 감소한다</b>.</li><br><b>광기</b> 상태의 생존자들은 <i>질서의 고통</i>을 받는다:<li>이미 부서진 판자가 <i>환영 판자</i>로 바뀌며, 생존자가 가까이 다가가기 전까지 환영이 지속된다.</li><li>새로운 <i>환영 판자</i>는 <b>20초</b>마다 이미 부서진 판자의 위치에 무작위로 생성된다.</li><li><b>닥터</b>는 <i>환영 판자</i>의 오라를 본다.</li>","name":"\\"질서\\" - 등급 I","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"파장을 이용해 다양한 정신병을 치료하는 전기 충격 요법. 카터의 전류를 에너지원으로 사용하는 이 요법은 환자에게 가벼운 불안감을 유발한다.<br><li><b>정전기 폭발</b>이 준비되면 공포 범위가 <b>약간 증가한다</b>.</li><li><b>정전기 폭발</b>이 재사용 대기 시간 모드일 때 공포 범위가 <b>약간 감소한다</b>.</li><br><b>광기</b> 상태의 생존자들은 <i>침착함의 고통</i>을 받는다:<li><b>광기 II단계</b>: 생존자들은 <b>간헐적으로</b> 멀리서 들리는 듯한 <i>환영 같은 심장 박동</i>을 듣는다.</li><li><b>광기 III단계</b>: 생존자들은 <b>끊임없이</b> 멀리서 들리는 듯한 <i>환영 같은 심장 박동</i>을 듣는다.</li>","name":"\\"침착\\" - 등급 I","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"각성 프로젝트의 소형 카세트테이프. 거의 백색소음만 녹음되어있다. 닥터의 정신을 열어 다른 치료방법을 사용 할 수 있게한다.<br><li><i>특수 능력</i>인 <b>전기장 방출</b>이 반지모양이 되어 <b>8 미터</b>로 <b>닥터</b>앞에 나타나며, 바깥쪽 반경은 <b>4.2 미터</b> 안쪽 반경은 <b>3 미터</b>가 된다.</li>","name":"버려진 테이프","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"전기 충격 요법에 사용되는 평범한 전극. 생산된지 얼마 안되서 광이 난다.<br><li><b>전기장 방출</b>의 사거리가 <b>적당히 증가한다</b>.</li>","name":"광이 나는 전극","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"각성 프로젝트에 희생된 자들의 인터뷰가 담겨 있는 무편집본 카세트테이프. 닥터의 마음을 움직여 치료 방법에 큰 변화를 준다.<br><li><i>특수 능력</i>인 <b>전기장 방출</b>의 범위가 원뿔 모양에서 길이는 <b>24미터</b>, 폭은 <b>2미터</b>인 기둥 모양으로 바뀐다.</li>","name":"인터뷰 테이프","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"안갯속에서 개발한 실험적인 전기 충격 요법. 강한 자극의 파장을 이용해 환자와 닥터의 정신을 연결한다. 이 요법은 환자에게 가벼운 환각 증세를 유발한다.<br><li>생존자들의 <b>광기</b> 단계가 상승할 때마다 <b>1초</b> 동안 그들의 오라가 드러난다.</li><br><b>광기</b> 상태의 생존자들은 <i>침착함의 고통</i>을 받는다:</li><li><i>닥터의 환영</i> 지속시간이 <b>적당히 증가한다</b>.</li><li><b>닥터</b>는 <i>닥터의 환영</i> 오라를 본다.</li>","name":"\\"통제\\" - 등급 II","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"래리 기념 연구소의 환자들이 매일 처방받는 매우 자극적인 전기 충격 요법. 환자에게 적당한 정신적 혼란을 안겨 준다.<br><li><b>정전기 폭발</b>의 재사용 대기 시간이 <b>적당히 감소한다</b>.</li><br><b>광기</b> 상태의 생존자들은 <i>질서의 고통</i>을 받는다:<li>이미 부서진 판자가 <i>환영 판자</i>로 바뀌며, 생존자가 가까이 다가가기 전까지 환영이 지속된다.</li><li>새로운 <i>환영 판자</i>는 <b>20초</b>마다 이미 부서진 판자의 위치에 무작위로 생성된다.</li><li><b>닥터</b>는 <i>환영 판자</i>의 오라를 본다.</li><span class=\\"FlavorText\\">\\"부작용은 거의 없습니다.\\" -래리 기념 연구소</span>","name":"\\"질서\\" - 등급 II","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"환자를 징벌할 때 쓰이는, 높은 전류를 이용한 전기 충격 요법. 환자에게 적당한 피해망상을 안겨 준다.<br><li>특수 능력인 <b>전기장 방출</b>의 폭발 지연이 <b>약간 감소한다</b>.</li><br><b>광기</b> 상태의 생존자들은 <i>징계의 고통</i>을 받는다:<li><b>광기 II단계</b>: 추격 중에 생존자들은 마치 <b>닥터</b>가 바로 뒤에 있었던 듯한 <i>환영 같은 붉은 불빛</i>과 <i>공포 범위</i> 효과를 받는다. 이 효과는 추적이 끝난 후 <b>6초</b> 동안 지속된다.</li><li><b>광기 III단계</b>: <i>환영 같은 붉은 불빛</i>과 <i>공포 범위</i> 효과는 계속해서 지속된다.</li><li><b>닥터</b>는 또한 <i>붉은 불빛의 환영</i>을 볼 수 있다.</li><span class=\\"FlavorText\\">\\"저희 연구소는 세심한 주의를 들여 환자들을 재교육하고 있습니다.\\" -래리 기념 연구소</span>","name":"\\"징벌\\" - 등급 II","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"파장을 이용해 다양한 정신병을 치료하는 위험한 전기 충격 요법. 카터의 전류를 에너지원으로 사용하는 이 요법은 환자에게 적당한 불안감을 유발한다.<br><li><b>정전기 폭발</b>이 준비되면 공포 범위가 <b>적당히 증가한다</b>.</li><li><b>정전기 폭발</b>이 재사용 대기 시간 모드일 때 공포 범위가 <b>적당히 감소한다</b>.</li><br><b>광기</b> 상태의 생존자들은 <i>침착함의 고통</i>을 받는다:<li><b>광기 II단계</b>: 생존자들은 <b>간헐적으로</b> 멀리서 들리는 듯한 <i>환영 같은 심장 박동</i>을 듣는다.</li><li><b>광기 III단계</b>: 생존자들은 <b>끊임없이</b> 멀리서 들리는 듯한 <i>환영 같은 심장 박동</i>을 듣는다.</li><span class=\\"FlavorText\\">\\"전기 충격 요법은 가장 안전한 치료 방법 중 하나입니다.\\" -래리 기념 연구소</span>","name":"\\"침착\\" - 등급 II","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"오랫동안 매우 높은 전류를 견딜 수 있는 전극.<br><li><b>전기장 방출</b>의 사거리가 <b>상당히 증가한다</b>.</li>","name":"큰 자극을 주는 전극","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"안갯속에서 개발한 실험적인 전기 충격 요법. 강한 자극의 파장을 이용해 환자와 닥터의 정신을 연결한다. 이 요법은 환자에게 심한 환각 증세를 유발한다.<br><li>생존자들의 <b>광기</b> 단계가 상승할 때마다 <b>2초</b> 동안 그들의 오라가 드러난다.</li><br><b>광기</b> 상태의 생존자들은 <i>침착함의 고통</i>을 받는다:<li><i>닥터의 환영</i> 지속시간이 <b>적당히 증가한다</b>.</li><li><b>닥터</b>는 닥터의 <i>환영</i> 오라를 본다.</li>","name":"\\"통제\\" - 등급 III","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"환자를 징벌할 때 쓰이는, 매우 높은 전류를 이용한 전기 충격 요법. 환자에게 심각한 피해망상을 안겨 준다.<br><li>특수 능력인 <b>전기장 방출</b>의 폭발 지연이 <b>적당히 감소한다</b>.</li><br><b>광기</b> 상태의 생존자들은 <i>징계의 고통</i>을 받는다:<li><b>광기 II단계</b>: 추격 중에 생존자들은 마치 <b>닥터</b>가 바로 뒤에 있었던 듯한 <i>환영 같은 붉은 불빛</i>과 <i>공포 범위</i> 효과를 받는다. 이 효과는 추적이 끝난 후 <b>6초</b> 동안 지속된다.</li><li><b>광기 III단계</b>: <i>환영 같은 붉은 불빛</i>과 <i>공포 범위</i> 효과는 계속해서 지속된다.</li><li><b>닥터</b>는 또한 <i>붉은 불빛의 환영</i>을 볼 수 있다.</li><span class=\\"FlavorText\\">\\"환자에 대한 존중은 저희 연구소의 가장 핵심적인 원칙입니다.\\" -래리 기념 연구소</span>","name":"\\"징벌\\" - 등급 III","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"안갯속에서 개발한 실험적인 전기 충격 요법. 투박한 글씨체로 주석이 달려 있다. 강한 자극의 파장을 이용해 환자와 닥터의 정신을 연결한다. 이 요법은 환자에게 극심한 환각 증세를 유발한다.<br><li>생존자들의 <b>광기</b> 단계가 상승할 때마다 <b>3초</b> 동안 그들의 오라가 드러난다.</li><br><b>광기</b> 상태의 생존자들은 <i>침착함의 고통</i>을 받는다:<br><li><i>닥터의 환영 지속시간</i>이 <b>적당히 증가한다</b>.</li><li><b>닥터</b>는 <i>닥터의 환영</i> 오라를 본다.</li><span class=\\"FlavorText\\">\\"놈들이 겪고 있는 <u>역겨운</u> 질병이 무엇인지 내겐 보여.\\" -서명되지 않은 공책</span>","name":"\\"통제\\" - 카터의 공책","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"실험적인 전기 충격 요법. 의사 헤르만 카터가 직접 주석을 달았다. 긴 시간 동안 계속되는 자극은 환자에게 극심한 혼란을 안겨 준다.<br><li><b>정전기 폭발</b>의 재사용 대기 시간이 <b>상당히 감소한다</b>.</li><br><b>광기</b> 상태의 생존자들은 <i>질서의 고통</i>을 받는다:<li>이미 부서진 판자가 <i>환영 판자</i>로 바뀌며, 생존자가 가까이 다가가기 전까지 환영이 지속된다.</li><li>새로운 <i>환영 판자</i>는 <b>20초</b>마다 이미 부서진 판자의 위치에 무작위로 생성된다.</li><li><b>닥터</b>는 <i>환영 판자</i>의 오라를 본다.</li><span class=\\"FlavorText\\">\\"자고로 자극은 <u>발작을 일으킬 정도</u>는 되야지.\\" -헤르만 카터</span>","name":"\\"질서\\" - 카터의 공책","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"환자를 징벌할 때 쓰이는, 높은 전류를 이용하는 전기 충격 요법. 의사 헤르만 카터가 직접 주석을 달았다. 엄청나게 높은 전압은 환자에게 극심한 피해망상을 안겨 준다.<br><li>특수 능력인 <b>전기장 방출</b>의 폭발 지연이 <b>상당히 감소한다</b>.</li><br><b>광기</b> 상태의 생존자들은 <i>질서의 고통</i>을 받는다:<li><b>광기 II단계</b>: 추격 중에 생존자들은 마치 <b>닥터</b>가 바로 뒤에 있었던 듯한 <i>환영 같은 붉은 불빛</i>과 <i>공포 범위</i> 효과를 받는다. 이 효과는 추적이 끝난 후 <b>6초</b> 동안 지속된다.</li><li><b>광기 III단계</b>: <i>환영 같은 붉은 불빛</i>과 <i>공포 범위</i> 효과는 계속해서 지속된다.</li><li><b>닥터</b>는 또한 <i>붉은 불빛의 환영</i>을 볼 수 있다.</li><span class=\\"FlavorText\\">\\"실험체들이 계속해서 저항하는 것을 막으려면, 최대 단계의 징벌 조치를 가하면 된다.\\" -헤르만 카터</span>","name":"\\"징벌\\" - 카터의 공책","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"전기 충격 요법에 대한 여러 실험 방법을 적어 놓은 노트. 의사 헤르만 카터가 직접 주석을 달았다. 파장을 이용해 다양한 정신병을 치료하는 위험한 전기 충격 요법. 카터의 전류를 에너지원으로 사용하는 이 요법은 환자에게 견딜 수 없는 공포와 불안감을 유발한다.<br><li><b>정전기 폭발</b>이 준비되면 공포 범위가 <b>상당히 증가한다</b>.</li><li><b>정전기 폭발</b>이 재사용 대기 시간 모드일 때 공포 범위가 <b>약간 감소한다</b>.</li><br><b>광기</b> 상태의 생존자들은 <i>침착함의 고통</i>을 받는다:<li><b>광기 II단계</b>: 생존자들은 <b>간헐적으로</b> 멀리서 들리는 듯한 <i>환영 같은 심장 박동</i>을 듣는다.</li><li><b>광기 III단계</b>: 생존자들은 <b>끊임없이</b> 멀리서 들리는 듯한 <i>환영 같은 심장 박동</i>을 듣는다.</li><span class=\\"FlavorText\\">\\"높은 수준의 발작이 심한 긴장증을 유발할 거야. 그들이 고통스러워하는 모습을 보는건 내 마음에 <u>안식</u>을 주지.\\" -헤르만 카터</span>","name":"\\"침착\\" - 카터의 공책","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"안개 자체에서 만들어진, 유리로 된 체스 말 킹. 그 안에 잠재되어 있는 엔티티의 힘으로 어떠한 굳건한 정신도 망가뜨릴 수 있다.<br><br><b>광기</b> 상태의 생존자들은 다음과 같은 <i>고통<i>을 받는다: <i>침착함, 징계, 질서, 통제</i>.<li><b>간헐적으로</b> 멀리서 들리는 듯한 <i>환영 같은 심장 박동</i>을 듣는다.</li><li>추격 중에 생존자들은 마치 <b>닥터</b>가 바로 뒤에 있었던 듯한 <i>환영 같은 붉은 불빛</i>과 <i>공포 범위</i>효과를 받는다. 이 효과는 <b>광기 II단계</b>에서 추적이 끝난 후 <b>6초</b> 동안 지속되며 <b>광기 III단계</b>에서도 효과는 계속해서 지속된다.</li><li>이미 부서진 판자가 <i>환영 판자</i>로 바뀌며, 생존자가 가까이 다가가기 전까지 환영이 지속된다. 새로운 <i>환영 판자</i>는 <b>20초</b>마다 이미 부서진 판자의 위치에 무작위로 생성된다.</li><li><i>닥터의 환영</i> 지속시간이 <b>적당히 증가한다</b>.</li><li>닥터는 환영 같은 붉은 불빛을 보며 <i>닥터의 환영 및 환영 판자</i>의 오라 역시 볼 수 있다.</li>","name":"핏빛 체스 킹","flavor":"\\"이 핏빛 유리를 보면 자신도 모르는 채 광기에 빠져들게 된다\\"","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"안개 자체에서 만들어진, 유리로 된 체스 말 퀸. 상당한 전기 충격을 받지 않으면 만질 수 없다.<br><li><i>특수 능력</i>인 <b>전기장 방출</b> 또는 <b>정전기 폭발</b>에 감전되는 모든 생존자들은 장시간 이어지는 <b>정전기 충전</b>을 얻는다. <b>정전기 충전</b>은 <i>방전</i>될 때까지 지속된다.</li><li>반경 <b>4미터</b> 내에 <i>특수 능력</i>인 <b>전기장 방출</b> 또는 <b>정전기 폭발</b>에 감전되는 다수의 생존자가 있으면 <b>정전기 충</b>전을 얻지 않는다.</li><li><b>정전기 충전</b>을 가진 다른 생존자가 반경 <b>4미터</b> 내에 들어오면 해당 생존자는 <i>특수 능력</i>인 <b>전기장 방출</b>의 효과를 얻으며 <b>정전기 충전</b>은 즉시 <i>방전</i>된다.</li>","name":"핏빛 체스 퀸","flavor":"\\"일단 효과적인 치료법을 확립하고 나면 우리는 어떻게 효율적으로 전달할지 주력할 수 있겠어.\\" -헤르만 카터","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"너무 거칠어서 위험한 돌. 이 돌로 갈린 도끼의 날은 봉합되지 않는 부상을 입힌다.<br><li>타격을 받은 목표가 다 치유될 때까지 그의 신음소리가 <b>50%</b> 더 커진다.</li>","name":"거친 돌","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"물집이 생기고 엉덩이를 닦아내는 데 쓰이는 간단한 재료 조각.<br><li><b>+10%</b> 손도끼 비행 속도.</li>","name":"노란색 옷감","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"응급 처치용 붕대가 탄탄하게 감긴 손도끼의 손잡이.<br><li>손도끼를 연속으로 던질 때의 재사용 대기시간이 <b>약간 감소</b>한다.</li><li>중첩 가능</li>","name":"붕대 감긴 손잡이","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"손도끼의 날에 발라진 독. 아마니타 버섯의 독은 정신을 마비시킨다.<br><li>손도끼에 피격당한 생존자는 <b><i>실명</i></b> 상태이상에 <b>60초</b> 동안 걸리게 된다.</li><li>중첩되지 않는다.</li>","name":"아마니타 독버섯","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"이상하리만큼 무거운 도끼날로 대상에 강력한 타격을 주기 위해 그렇게 제작되었다. 강한 팔 힘을 가진 자만이 다룰 수 있다.<br><li>피격당한 생존자는 <b>10초</b> 동안 <b>불구화</b> 상태 효과에 빠진다.</li>","name":"무거운 도끼날","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"형체를 알아볼 수 없을 정도로 훼손되었지만 여전히 반짝이는 구리 핀. 까다로운 사냥감에게서 약탈해왔다.<br><li>손도끼 던지기 준비 동작 중에 이동속도가 <b>약간 증가</b>한다.</li><li>중첩되지 않는다.</li>","name":"반짝이는 핀","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"빠른 조작이 가능하도록 손질된 손잡이.<br><li>손도끼를 연속으로 던질 때의 재사용 대기시간이 <b>적당히 감소</b>한다.</li><li>중첩 가능</li>","name":"참나무 손잡이","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"만나 풀로 만들어진 동그란 장식물이 달린 노리개. 헌트리스에게 잃어버린 작은 아이에 대한 기억을 불러일으켜 분노와 집중력을 끌어올린다.<br><li>손도끼 던지기 준비 동작에 드는 시간이 <b>적당히 감소</b>한다.</li><li>중첩 가능</li>","name":"만나 풀 노리개","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"벨트에 달수있는 도구를 수납하기에 용이한 가죽고리.<br><li><span class=\\"Highlight1\\">1개</span>의 손도끼를 추가로 들고 시작한다.</li><li>최대로 들 수 있는 손도끼의 양이 <span class=\\"Highlight2\\">1개</span> 증가한다.</li>","name":"가죽고리","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"차로 끓였을 때 탈진과 과로 증상을 완화시켜주는 말린 꽃잎.<br><li>손도끼의 속도가 <b>20%</b> 증가한다.</li>","name":"장미 뿌리","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"손을 보호함과 동시에 안정적인 그립감을 주는 매끈한 가죽 장갑.<br><li>캐비닛에서 손도끼를 재장전 하는 시간이 <b>적당히 감소한다</b>.</li>","name":"사슴가죽 장갑","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"손도끼의 날에 발라진 독액. 이 탁한 용액은 물리면 피로감을 느끼게 하는 베루스 독뱀의 신경독으로 만들어졌다.<br><li>손도끼에 피격당한 생존자는 <b>탈진</b> 상태 이상에 <b>5초</b> 동안 걸리게 된다.</li>","name":"신경독 용액","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"잔뜩 녹이 슬은 도끼날은 사냥감이 부상을 치료하는 것을 더 어렵게 만든다.<br><li>피격당한 생존자는 <b><i>깊은 상흔</i></b> 상태 이상에 빠진다</li>.","name":"녹슨 도끼날","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"화려한 꽃무늬가 수놓아져 있는 깨끗한 손수건. 헌트리스에게 잃어버린 작은 아이에 대한 기억을 불러일으켜 분노와 집중력을 끌어올린다.<br><li>손도끼 던지기 준비 동작에 드는 시간이 <b>상당히 감소</b>한다.</li><li>중첩 가능</li>","name":"꽃무늬 손수건","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"군인에게서 강탈한 튼튼하고 실용적인 벨트. 가죽고리와 권총집은 도구를 수납하기에 용이하다.<br><li><span class=\\"Highlight2\\">2개</span>의 손도끼를 추가로 들고 시작한다.</li><li>최대로 들 수 있는 손도끼의 양이 <span class=\\"Highlight2\\">2개</span> 증가한다.</li>","name":"보병의 허리띠","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"다른 세계에서 만들어진 희미하고 불길하게 빛나는 혼합물.<br><li>손도끼에 피격당한 생존자의 오라가 <span class=\\"Highlight1\\">5초</span> 동안 보인다.</li>","name":"빛나는 용액","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"만지는 사람의 정신을 혼미하게 하는 더러운 무언가가 묻어있는 도끼날.<br><li><b>피격당한 생존자는 건강한 상태로 치료될 때까지 <i>깊은 상흔</i></b>과 <b><i>출혈</i></b> 상태 이상에 빠진다.</li><li>중첩 불가능.</li>","name":"더러운 도끼날","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"대충 조각된 이 여우 조각상은 크기가 그렇게 크지 않다. 잠행 능력과 교활함이 가공되지 않은 힘만큼이나 효과적이라는 것을 상기시켜준다.<br><li>재장전 후 <b>15초</b> 동안 <i><b>감지 불가능</b></i> 상태 효과를 제공한다.</li>","name":"나무 여우","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"유리처럼 투명한 도끼날이 안개에 서식하는 엔티티의 힘을 담은 것처럼 보인다.<br><li>성공적인 손도끼 타격은 건강한 생존자조차 빈사 상태에 빠지게 만든다.</li><li>최대로 들 수 있는 손도끼의 양이 <b>1</b>개로 설정된다.</li>","name":"핏빛 도끼날","flavor":"\\"핏빛의 유리는 살과 영혼을 자른다.\\"","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"죽은 군인에게서 가져온 랩으로 발목과 아랫쪽 다리를 보호하는 데 쓰인다.<br><li>손도끼가 없는 헌트리스는 <b>4.6 m/s</b>의 속도로 이동한다.</li>","name":"군인의 각반","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"낮은 품질의 윤활유. 산패한 기름 때문에 냄새가 고약하다.<br><br><li>생존자 한 명을 성공적으로 타격하면 전기톱의 재사용 대기 시간이 <b>약간 감소한다</b>.</li>","name":"식물성 기름","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"전기톱에 딱 맞게 설계된 점화 플러그.<br><br><li>재충전율이 <b>약간 증가한다</b>.</li>","name":"점화 플러그","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"전기톱의 체인을 날카롭도록 다듬는 줄칼.<br><li>울부짖음 지속 시간이 <b>약간 감소한다</b>.</li>","name":"전기톱 줄","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"전기톱 엔진이 한번에 사용할수 있는 연료의 양을 제한하여 일정하고 안전한 속도를 내게 해주는 기계장치.<br><br><li>생존자들이 전기톱에 맞아도 빈사 상태가 되지 않는다.</li><li>전기톱을 사용하여 얻는 기만 항목의 블러드포인트가 <b>100%</b> 증가한다.</li>","name":"속도 제어기","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"빠르고 강하게 시동을 걸기 위해 점화 시스템에 더 많은 연료를 공급한다.<br><br><li>재충전율이 <b>적당히 증가한다</b>. </li>","name":"뇌관 전구","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"긴 체인을 사용하기 위한 단단한 강철 봉.<br><br><li>울부짖음 발동 전 사용 가능한 회전량이 <b>약간 증가한다</b>.</li>","name":"긴 가이드 바","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"칼날에 의해 전기톱의 몸통이 긁힌 흔적. 패배의 기억이 사용자를 실패의 두려움에 빠트린다.<br><br><li>전기톱을 사용하는 중에 이동 속도가 <b>약간 빨라진다</b>.</li><li>전기톱의 시동 시간이 <b>약간 증가한다</b>.</li>","name":"칼날의 흔적","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"검은색 가스 파이프로 만든 임시 배기 시스템.<br><br><li>울부짖음 지속 시간이 <b>적당히 감소한다</b>.</li>","name":"수제 소음기","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"보기만 해도 힘이 나는 따뜻한 칠리.<br><br><li>토큰이 한 개 소모되면 돌진 지속 시간이 <b>약간 증가한다</b>.</li><li>추가 전기톱 싹쓸이 창이 <b>약간 증가한다</b>.</li><br>","name":"칠리","flavor":"\\"여기 맛 좋은 바비큐가 있어! \\" -드레이톤 소이어","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"소이어가 만든 찐득한 노란색 윤활유. 다목적 윤활제로 집안 곳곳에서 사용된다.<br><br><li>울부짖음 발동 전 사용 가능한 회전량이 <b>적당히 증가한다</b>.</li>","name":"구리스","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"안개 속에 사는 악한 괴물에게 당해서 생긴 전기톱을 뒤덮은 삐죽한 흔적. 난폭한 패배의 기억이 사용자를 실패의 두려움에 빠트린다.<br><br><li>전기톱을 사용하는 중에 이동 속도가 <b>적당히 빨라진다</b>.</li><li>전기톱의 시동시간이 <b>약간 증가한다</b>.</li>","name":"야수의 흔적","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"거대한 톱날을 가진 체인, 이 톱날에 베인 희생자는 치료하더라도 후유증이 남게 된다.<br><li>전기톱에 의해 타격을 입은 생존자는 <b>깊은 상흔</b> 상태 이상으로 고통받는다.","name":"소름끼치는 체인","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"전기톱에 사용하기 위해 특별히 배합된 오일. 특수 첨가물이 누액을 방지한다.<br><br><li>공포 범위 내에 다른 생존자가 없을 때, 전기톱으로 생존자를 쓰러뜨리면 <b>20초</b> 동안 생존자의 오라가 감춰진다.</li>","name":"평범한 윤활유","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"만지는 사람의 정신을 혼미하게 하는 더러운 무언가가 묻어있는 체인.<br><br><li>전기톱에 타격을 입은 생존자는 가지고 있던 아이템을 떨어뜨린다.</li>","name":"그을린 체인","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"측심기의 각도를 조정하는 도구. 체인이 더 많은 \\"나무\\"를 썰 수 있게 한다.<br><li>차지 샷이 <b>증가한다</b>.</li><li>시동에 필요한 시간이 <b>약간 증가한다</b>.</li><li>전기톱 싹쓸이의 최대 속도가 <b>약간 줄어든다</b>.</li>","name":"심도계","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"짧은 가이드 바를 사용한 가볍고 내구성 좋은 전기톱 섀시. 전기톱을 다루기 쉽게 만든다.<br><br><li>회전 속도를 올리는 동안 <b>8 미터</b> 내에 있는 생존자들의 오라를 볼 수 있다.</li>","name":"경량 섀시","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"방청제가 두껍게 발라져 있어 희생자의 상처를 치료하기 어렵게 만든다.<br><br><li>전기톱에 부상당한 생존자는 <b>90초</b> 동안 <b><i>치료 불능</i></b> 상태에 빠진다.</li><li>중첩되지 않는다.</li>","name":"녹슨 체인","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"최고급 고기를 갈아 만든 매콤한 칠리.<br><br><li>토큰이 한 개 소모되면 돌진 지속 시간이 <b>적당히 증가한다</b>.</li><li>추가 전기톱 창이 <b>적당히 증가한다</b>.</li><br>","name":"수상 경력을 자랑하는 칠리","flavor":"\\"맛의 비밀은 고기에 있지.\\" -드레이톤 소이어","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"매끈하고 젊은 육체가 얇게 잘려있다. 정맥은 여전히 생명이 붙어 있는 것처럼, 휘황찬란하게 빛난다.<br><br><li>전기톱으로 생존자를 때리면 재충전된다.</li><li>최대 울부짖음 지속 시간이 8초로 제한된다.</li><br>","name":"핏빛 육체","flavor":"\\"지금 일어나고 있는 일이 사실이라는 것을 믿을 수 없는 순간들이 있다. 자신을 꼬집어 그것이 사실이라는 것을 알 수 있을 것이다.\\" — 팸 존스","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"조잡한 설명서. 전기톱의 카뷰레터를 개조하고 이를 적절하게 조정하는 방법이 그려져 있다.<br><li>전기톱 질주를 발동하면 자동으로 모든 공격을 소모한다.</li><li>체인 돌진 지속 시간이 <b>약간 증가한다</b>.</li><li>전기톱 싹쓸이의 최대 속도가 <b>약간 줄어든다</b>.</li>","name":"카뷰레터 개조 설명서","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"작은 소년의 주황색과 노란색 줄무늬 셔츠. \\"제시\\"라는 이름표가 달려있다.<br>생존자가 <b>꿈의 세계</b>에 빠져 있는 동안 다음과 같은 효과가 적용된다.<li><i>치료</i> 및 <i>발전기 수리</i> 진행도 감소 페널티가 <b>약간 증가한다</b>.</li>","name":"양모 셔츠","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"풀을 뜯고 있는 두 마리의 양과 문자 \\"S\\"가 그려진 흰색과 파란색의 나무 블록.<li>생존자가 <b>꿈 함정</b>과 <b>꿈 판자</b>와 상호작용을 하면 30초 동안 <b>실명 상태 이상</b>에 시달리게 된다.</li>","name":"양 그림 블럭","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"무엇을 그렸는진 알 수 없는, 어린 아이가 그린 그림.<li>생존자가 <b>꿈 올가미</b>를 작동시키면 <b>\'기만\'</b> 항목의 <b>200 블러드포인트를 추가로 획득</b>한다.</li><li>생존자가 <b>꿈 올가미</b>로 받는 속도 둔화 효과가 <b>상당히 감소한다.</b></li>","name":"어린 아이가 그린 그림","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"숙련된 정원사라면 누구나 가지고 있는 작은 갈퀴.<br><b>꿈 올가미</b>를 <b>꿈 판자</b>로 바꾼다.<li><b>꿈 토큰</b> 7개 필요.</li>","name":"정원용 갈퀴","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"덤불을 다듬을 때 사용하는 수제 갈퀴.<li><b>꿈 올가미</b>를 <b>꿈 판자</b>로 바꾼다.</li><li><b>꿈 토큰</b>7개 필요.</li><li>생존자가 <b>꿈 판자</b>와 상호작용할 경우, <i>나이트메어</i>에게 <b>4초</b> 동안 생존자의 오라가 노출된다.</li>","name":"평범한 갈퀴","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"무엇이든 간편하게 묶을 수 있는 튼튼한 야외용 노끈.<br>생존자가 <b>꿈의 세계</b>에 들어설 경우 다음이 적용된다:<li>발전기 수리 소리가 <b>8 미터 떨어진 곳</b>에서도 들린다.</li>","name":"야외용 노끈","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"목탄으로 그린 투박하고 거친 느낌의 그림. 낸시 H라고 서명이 되어 있다.<li><b>꿈의 세계</b>에 빠진 각 생존자에 따른 <b>꿈 투영</b> 능력의 회복 속도를 <b>약간 증가시킨다.</b></li>","name":"낸시의 스케치","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"작은 소녀가 입었던 하얀색 비단 리본이 달린 초록색 드레스.<br>생존자가 <b>꿈의 세계</b>에 빠져 있는 동안 다음과 같은 효과가 적용된다.<li><i>치료</i> 및 <i>발전기 수리</i> 진행도 감소 페널티가 <b>약간 증가한다</b>.</li><li><i>치료</i> 또는 <i>발전기 수리</i> 스킬 체크에 실패할 경우, <i>나이트메어</i>에게 <b>3초 동안</b> 생존자의 오라가 노출된다.</li>","name":"초록색 드레스","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"잠자는 고양이와 문자 \\"C\\"가 그려진 흰색과 보라색의 나무 블록.<li>생존자가 <b>꿈 올가미</b> 또는 <b>꿈 판자</b>와 상호작용을 할 경우, 60초 동안 <b>출혈</b> 상태 이상에 시달리게 된다.</li>","name":"고양이 그림 블럭","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"뛰노는 유니콘과 문자 \\"U\\"가 그려진 흰색과 빨간색의 나무 블록.<li>생존자가 <b>꿈 함정</b>과 <b>꿈 판자</b>와 상호작용을 하면 60초 동안 <b>실명 상태 이상</b>에 시달리게 된다.</li>","name":"유니콘 그림 블럭","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"녹이 많이 슬었지만, 그네 의자와 연결하기엔 아직 끄떡없는 체인.<br>생존자가 <b>꿈의 세계</b>에 들어설 경우 다음이 적용된다:<li>발자국 소리가 <b>50% 더 커진다</b>.</li>","name":"그네의 체인","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"소중한 기억을 유지하기 위해 배드햄 유치원에서 낸시 홀브룩이 그린 캐릭터 그림.<li><b>꿈의 세계</b>에 빠진 각 생존자에 따른 <b>꿈 투영</b> 능력의 회복 속도를 <b>적당히 증가시킨다</b>.</li>","name":"낸시의 걸작","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"오랫동안 사용해서 색이 바랜 줄이 긴 이중 줄넘기.<br>생존자가 <b>꿈의 세계</b>에 들어설 경우 다음이 적용된다:<li>신음소리가 <b>50% 더 커진다</b>.</li>","name":"줄넘기","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"작은 소녀가 입었던 하늘색 드레스, 하얀색 레이스로 장식되어 있으며, 앞 부분이 크게 찢어져있다.<br>생존자가 <b>꿈의 세계</b>에 빠져 있는 동안 다음과 같은 효과가 적용된다.<li><i>치료</i> 및 <i>발전기 수리</i> 진행도 감소 페널티가 <b>약간 증가한다</b>.</li><li><i>치료</i> 또는 <i>발전기 수리</i> 스킬 체크에 실패할 경우, <i>나이트메어</i>에게 <b>4초 동안</b> 생존자의 오라가 노출된다.</li>","name":"하늘색 드레스","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"비어있는 약통. 한 때 \'조네럴\'이란 이름의 약이 들어있었다.<li>생존자는 <b>12미터</b>에서 <b>24미터</b>의 감소된 거리에서 <i>나이트메어</i>를 가끔 볼 수 있게 된다.</li><li><b>24미터</b>를 넘으면 생존자는 <i>나이트메어</i>를 볼 수 없다.</li><li><i>나이트메어</i>가 생존자 옮기는 동안에도 깨어있는 생존자에게 보이지 않게 된다.</li>","name":"약통","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"휘발성이 강해 불이 잘 붙는 내용물이 들어있는 깡통.<li><b>꿈 올가미</b>를 <b>꿈 판자</b>로 바꾼다.</li><li><b>꿈 토큰</b> 7개.</li><li>생존자가 <b>꿈 판자</b>와 상호작용할 경우, <i>나이트메어</i>에게 <b>6초</b> 동안 생존자의 오라가 노출된다.</li>","name":"도료 희석제","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"94~95년도 배드햄 유치원 학급 아이들의 명랑한 모습을 찍은 단체 사진.<li>발동한 <b>꿈 투영</b> 능력은 더 이상 취소할 수 없다.</li><li><b>나이트메어</b>가 <b>꿈 투영</b> 능력을 발동하면 모든 발전기로부터 피가 뿜어져 나온다.</li><li><i><b>꿈 투영</b> 능력을 사용하는 동안 나이트메어의 투영이 보이지 않게 된다.</li>","name":"학급 단체 사진","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"심한 난도질과 함께 불에 그을린 나무 블록. \\"Z\\"라는 문자 하나만 알아볼 수 있다.<li>생존자가 <b>꿈 함정</b> 또는 <b>꿈 판자</b>와 상호작용을 하면 <b>60초</b> 동안 <b>출혈<b> 상태 이상에 빠진다.</li><li>생존자가 건강한 상태라면, <b>출혈</b> 상태 이상 효과가 적용되는 동안만 피를 흘린다.</li>","name":"Z 블럭","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"선홍색 물감이 묻어 있는 큰 그림용 붓.<li>모든 생존자가 <b>꿈의 세계</b>에 빠진 상태에서 희생제를 시작한다.</li><li>생존자들이 <b>꿈의 세계</b>에 빠져 있는 동안 스킬 체크가 실패해도 깨어나지 못한다.</li>","name":"빨간 물감 붓","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"수 많은 사진들로 가득 채워진 검은색 골판지 상자.<br>생존자가 <b>꿈의 세계</b>에 들어설 경우 다음이 적용된다:<li><b>15초</b> 동안 최근에 열린 출구가 막힌다</li>","name":"검은 상자","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"기름칠된 부품들은 상자 수색을 까다롭게 만든다. 직쏘상자에 아래의 효과를 부여한다.<br><li>직쏘 상자를 수색할 때 스킬 체크가 나타날 확률이 <b>약간 증가한다</b>.</li>","name":"작업장 기름","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"망가진 삶의 상징. 예전의 삶을 돌아보는 것은 그녀가 다시금 헛된 마음을 먹지 않게 만든다.<br><li>빗나간 매복 공격의 재사용 대기 시간이 <b>약간 감소한다</b>.</li>","name":"조각난 주사기","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"암 환자의 진료 기록. 읽는 이를 굉장히 두렵고 무모하게 만든다. <br><li>매복 공격의 차징 시간이 <b>약간 감소한다</b>.</li>","name":"존의 진료 기록","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"옷을 단단히 고정시켜 민첩하게 움직일 수 있게 해주는 가죽 끈. <br><li>매복 상태로 전환하는 데 걸리는 시간이 <b>약간 감소한다</b>.</li><li>중첩 가능</li>","name":"전투용 끈","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"직쏘가 제작한 테이프. 아만다에게 알려줄 게임 규칙이 기록되어있다. 예전의 삶을 돌아보는 것은 그녀가 다시금 헛된 마음을 먹지 않게 만든다.<br><li>매복 공격의 차징 시간이 <b>약간 감소한다</b>.</li><li>빗나간 매복 공격의 재사용 대기 시간이 <b>약간 감소한다</b>.</li>","name":"비디오 테이프","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"피해자가 움직일 때마다 덫 안쪽에 설치된 날카로운 면도날이 살갖을 벤다. 역방향 곰덫에 아래의 효과를 부여한다.<br><li>역방향 곰덫이 씌워진 생존자들은 <b><i>출혈</b></i> 상태이상에 걸리게 된다.</li>","name":"다용도 칼날","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"상자 속에 날카로운 가시가 달린 철사줄을 더해 상자 수색을 어렵게 만든다. 직쏘 상자에 아래와 같은 효과를 부여한다.<br><li>직쏘 상자를 수색할 때 스킬 체크가 나타날 확률이 <b>적당히 증가한다</b>.</li>","name":"가시 철사줄","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"광택이 나는 걸쇠형 나무상자, 유언장에는 상속에 대한 내용이 적혀있다.<br><li>사용 가능한 역방향 곰덫의 개수가 <b>1개</b> <b>증가한다</b>.<br>","name":"유언장","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"진정제를 묻힌 무거운 마스크, 목표물을 질식시켜 정신을 흐트러지게 만든다. 역방향 곰덫이 씌인 생존자에게 아래와 같은 효과를 부여한다.<br><li>역방향 곰덫이 씌워진 생존자들은 <b><i>실명</i></b> 상태이상에 걸리게 된다.</li><li>생존자들이 역방향 곰덫 착용 후 직쏘 상자의 오라를 볼 수 있는 능력에는 영향을 끼치지 않는다.</li>","name":"마스크","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"치명적이진 않지만 힘을 약하게 만드는 독. 역방향 곰덫이 아래의 효과를 부여한다.<br><li>역방향 곰덫이 씌워진 생존자들은 <b><i>탈진</b></i> 상태이상에 걸리게 된다.</li>","name":"서서히 퍼지는 독","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"녹슬고 더러운 나사못이 부상의 치료를 더디게 한다. 역방향 곰덫에 아래의 효과를 부여한다.<br><li>역방향 곰덫이 씌워지고 부상당한 생존자들은 <i><b>깊은 상흔</b></i> 상태 이상에 걸리게 된다.</li>","name":"녹슨 부속품","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"충격적으로 끔찍하지만 영리함이 돋보이는 설계도, 직쏘가 직접 주석을 달았다.<br><li>사용 가능한 직쏘 상자의 개수가 <b>1개</b> <b>증가한다</b>.</li>","name":"직쏘의 스케치","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"직쏘 상자속에 날카로운 면도칼을 더해 갑자기 움직이면 손목이 잘리게 된다. 직쏘 상자에 아래와 같은 효과를 부여한다.<br><li>직쏘 상자의 스킬 체크를 실패할 경우 받는 페널티가 <b>엄청나게 증가한다</b>.</li>","name":"맞물리는 면도날","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"역방향 곰덫과 직쏘 상자를 설치할 때 사용하는 기계부품.<br><li>생존자가 직쏘 상자를 수색하는데 걸리는 시간이 <b>약간 증가한다</b>.</li><li>역방향 곰덫을 생존자에게 씌우는 시간이 <b>약간 감소한다</b>.</li>","name":"기계부품 가방","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"시간이 더 빨리 가도록 용수철을 넣은 조작된 타이머.<br><li>역방향 곰덫 타이머의 시간이 <b>적당히 감소한다</b>.</li>","name":"조작된 타이머","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"충격적으로 끔찍하지만 설계자의 기발함이 돋보이는 설계 도면.<br><li>맵 상의 직쏘 상자의 개수가 <b>1개</b> <b>증가한다</b>.</li><li>역방향 곰덫 타이머의 시간이 <b>적당히 증가한다</b>.</li>","name":"직쏘의 주석이 달린 도면","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"설계가 매우 복잡한 역방향 곰덫과 직쏘 상자를 손쉽게 설치할 때 사용하는 기계부품.<br><li>생존자가 직쏘 상자를 수색하는데 걸리는 시간이 <b>상당히 증가한다</b>.</li><li>역방향 곰덫을 생존자에게 씌우는 시간이 <b>적당히 감소한다</b>.</li>","name":"부품 상자","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"쇠로 만들어진 검은색 상자. 안에는 나이프와 압박 붕대 같은 다양한 의료 용품들이 들어있다. 깊은 상처는 스트레스를 줄이고 감각을 깨운다.<br><li>아만다가 직쏘 상자의 위치를 <b>볼 수 없게 된다</b>.</li><li>생존자가 역방향 곰덫을 해제하는 데 성공했을 시 <b>알람을 받는다</b>.</li><li>역방향 곰덫을 해제한 생존자의 오라를 <span class=\\"Highlight1\\">6초</span> 동안 볼 수 있다.</li>","name":"아만다의 비밀","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"\\"모든 게임이 같은 규칙을 가질 필요는 없잖아.\\"<br><li>역방향 곰덫의 타이머가 작동하기 전까지, 생존자들은 <b>직쏘 상자의 오라를 볼 수 없다</b>.</li>","name":"두 번째 규칙","flavor":"\\"잘들어, 모든 것엔 규칙이 있지\\" -직쏘","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"아만다의 주의를 끌기 위해 쓰인 협박 편지. 읽는 이를 분노에 타오르게 한다.<br><li>앉아 있는 동안 12미터 내에 있는 생존자들의 윤곽선을 볼 수 있다.</li><li>사용 가능한 역방향 곰덫의 개수가 <b>3</b>개 <b>감소</b>한다.</li><li>직쏘 상자의 개수가 <b>2</b>개 <b>감소</b>한다.</li>","name":"아만다의 편지","flavor":"\\"아만다, 질이 기디언을 잃어버린 날 밤에 너는 세실과 있었어. 네가 그들의 아이를 죽인 거야. 그 사실은 너도 알고 나도 알지.\\" -아만다의 편지","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"피로한 발에 편안함을 가져다주는 곰팡이 낀 신발 안창.<br><li>병을 재장전하는 동안의 이동 속도가 <b>적당히</b> 빨라진다.</li>","name":"악취를 풍기는 신발 안창","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"촉감이 부드러운 오렌지색의 깃털.<br><li>병을 던진 이후 재사용 대기 시간이 <b>약간</b> 감소한다.</li>","name":"로빈의 깃털","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"클라운이 행사때 사용하는 장갑, 손가락 부분을 잘라서 제작되었으며 이는 그의 손재주를 더욱 훌륭하게 만들어준다.\\n<li>병이 날아간 모양을 바꾼다.</li>\\n","name":"행사용 핑거리스 장갑","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"마취 목적으로 사용되는 유기 화합물.<br><li>특제 가스에 의한 마취 지속 시간이 <b>약간</b> 증가한다.</li>","name":"파티 병","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"특제 가스 병에 쓰이는 놀라울 정도로 견고하고 크기가 딱 알맞은 뚜껑.<br><li>특제 가스의 재충전에 필요한 시간이 <b>적당히</b> 감소한다.</li>","name":"두꺼운 코르크 마개","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"마른 설탕과 혈액이 끈적하게 달라붙어 있는 빈 병.<br><li>희생제에서 병을 <b>1개 추가로</b> 소유한 채 시작할 수 있다.</li><li>최대 소지량에서 <b>1개</b>의 병을 추가로 더 소유할 수 있다. </li>","name":"끈적한 탄산음료 병","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"에메랄드 광택의 검은 깃털. 촉감이 매우 부드럽다.<br><li>병을 던진 이후 재사용 대기 시간이 <b>적당히</b> 감소한다.</li>","name":"찌르레기 깃털","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"호흡기를 자극하는 휘발성 화학 물질. 특제 해독 가스의 흡수력이 빨라진다.<br><li>기운 회복 지속 시간이 <b>적당히</b> 증가한다.</li>","name":"용매 주전자","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"특제 가스를 들이마셨을 때 정신을 마비시키는 묽고 투명한 가연성 액체.<br><li>특제 가스를 들이마신 생존자는 <b>30초</b> 동안 <b>실명</b> 상태 이상에 걸리게 된다.</li>","name":"등유통","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"역대급 걸작. 다신 이런 걸작을 볼 수 없을 것이다.<br><li>만담용 특제 가스 구름을 노랗게 만든다.</li><li>특제 해독 구름을 보랗게 만든다.</li>","name":"포르노 비디오","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"시럽 같은 액체가 담긴 유리병. 냄새가 없으며 부식하기 매우 쉽다.<br><li>특제 가스를 들이마신 생존자는 <b>깊은 상흔</b> 상태 이상에 빠진다.</li>","name":"황산 유리병","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"인간의 폐를 자극하고 화상 및 심한 손상을 유발하는 치명적인 화학 물질. <li>특제 가스를 들이마신 생존자는 <b>적당한 효과의 <i>근육 손상</i></b> 상태이상에 걸리게 된다.","name":"표백제 플라스크","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"특제 해독 가스에 의한 마취 지속 시간이 <b>적당히</b> 증가한다.","name":"암모니아수","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"달콤한 냄새를 풍기는 유기 화합물. 강한 마취 효과를 지니고 있다.<br><li>특제 가스의 효과 영역이 <b>적당히</b> 확장된다.</li>","name":"클로로폼이 든 병","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"얼굴과 해독제에 사용할 수 있다. 정체를 알 수 없는 화합물은 해독제의 효과를 강화시킨다.<br><li>기운 회복 지속 시간을 <b>상당히</b> 증가시킨다.</li>","name":"화려한 화장용품 키트","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"싼값에 즐길 수 있지만, 지옥과도 같은 두통을 동반한다.<br><li><b>2개</b>를 추가로 소유한 채 시작할 수 있다.</li><li>최대 소지량에서 <b>2개</b>를 추가로 더 소유할 수 있다.</li>","name":"싸구려 진","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"고농도의 휘발성 유기 화합물. 독성이 매우 강하다.<br><li>특제 가스에 의한 마취 지속 시간이 <b>상당히</b> 증가한다.</li>","name":"에테르 15 vol%","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"담뱃갑 안에 음산하면서도 아직 수집을 덜 마친 손가락들이 들어있다. 이는 클라운의 수집욕을 자극시켜 화학물 제작 능력을 향상시킨다.<br><li>생존자 또는 살인마가 기운을 회복하면 16m 내 다른 플레이어들의 오라를 볼 수 있다.</li>","name":"담뱃갑","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"큰 문신을 한 사내의 소중한 중지손가락. 기계 기름의 맛이 희미하게 남아있다.<br><li>특제 가스 또는 해독 가스를 들이마신 생존자의 오라를 <b>6초</b> 동안 볼 수 있다.</li>","name":"문신한 사내의 중지손가락","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"빨간 머리를 한 사람의 새끼손가락. 향기가 어렴풋이 나며, 포푸리와 바니시가 섞인 맛이 난다.<br><li>특제 가스 병에 직접적으로 맞은 생존자는 <b><i>약점 노출</i></b> 상태 이상에 걸리고 짧은 시간 내에 성공한 공격이 생존자를 <span class=\\"Highlight3\\">빈사 상태</span>로 만든다.</li><li>특제 가스의 마취 지속 시간이 <b>약간 감소한다</b>.</li><li>중첩 가능</li>","name":"빨간 머리의 새끼손가락","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"간편하게 신고 다닐 수 있는 평평한 일본식 샌들.<li>영적 세계에서 이동속도가 <b>약간 빨라진다</b>.</li><li>중첩 가능</li>","name":"조리","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"지닌 이가 진심으로 행복하길 염원하기 위해 만든 부적.<li>영적 세계의 지속 시간이 <b>약간 증가한다</b>.</li><li>중첩 가능</li>","name":"행복의 부적","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"한 마리의 종이학. 천 마리의 학을 접으면 소원이 이루어진다고 한다.<li>야마오카의 원혼 능력 게이지를 회복하는 시간이 <b>약간 빨라진다</b>.</li><li>중첩 가능</li>","name":"종이학","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"촘촘한 빗살을 가진 대나무 빗. 헝클어진 머리카락을 부드럽게 풀어준다.<li>영적 세계로 진입할 때 걸리는 충전 시간이 약간 증가한다.</li><li>중첩 가능</li>","name":"선물 받은 대나무 빗","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"흐트러진 머리를 다듬어주는 비단 재질의 리본.<li>영적 세계로 진입할 때 걸리는 충전 시간이 적당히 증가한다.</li><li>중첩 가능</li>","name":"하얀 리본","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"유리가 깨진 손목시계. 손목밴드 부분에 \\"린\\"이라는 이름이 적혀있다.<li>야마오카의 원혼 능력 게이지를 회복하는 시간이 <b>적당히 빨라진다</b>.</li><li>중첩 가능</li>","name":"린의 고장난 시계","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"고등학교 로고가 박힌 진흙투성이의 스포츠 모자. \\"린\\"의 이름이 바느질되어있다.<li>영적 세계에서 이동속도가 <b>적당히 빨라진다</b>.</li><li>중첩 가능</li>","name":"진흙투성이 스포츠 모자","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"행운이 항상 당신의 편이길 염원하는 부적.<li>영적 세계의 지속 시간이 <b>적당히 증가한다</b>.</li><li>중첩 가능</li>","name":"행운의 부적","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"어두운 청록색의 잎을 가진 분재 나무. 한때 야마오카 가문을 대표하던 상징이었다.<li>스피릿이 이동 중에 남기는 잔상의 빈도가 <b>약간 높아진다</b>.</li><li>중첩 가능</li> ","name":"향나무 분재","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"소름끼치는 소리를 내는 녹슨 플루트.<li>야마오카의 원혼 능력 게이지를 회복하는 시간이 <b>상당히 빨라진다</b>.</li><li>중첩 가능</li>","name":"녹슨 플루트","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"성공을 염원하는 부적","name":"성공을 염원하는 부적","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"조상 대대로 전해내려오는 검의 보호대. 야마오카 가문에서 직접 만들었다.<li>영적 세계에서 돌아와 다시 모습을 드러내는 데 걸리는 시간이 <b>약간 증가한다</b>.</li><li>영적 세계에서 돌아와 다시 모습을 드러낼 때 이동속도가 <b>약간 빨라진다</b>.</li><li>중첩 가능</li>","name":"카타나 츠바","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"실내에서 쓰기에 적절한 실내화.<li>영적 세계에서 이동속도가 <b>상당히 빨라진다</b>.</li><li>중첩 가능</li>","name":"더러운 실내화","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"응고된 피가 말라붙어있는 헤어 브로치.<li>영적 세계로 진입할 때 걸리는 충전 시간이 상당히 증가한다.</li><li>중첩 가능</li>","name":"피투성이 헤어 브로치","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"지닌 이를 뜻밖의 재앙으로부터 보호해주는 영험한 힘을 가진 부적.<li>야마오카의 원혼의 지속 시간을 <b>엄청나게 증가시킨다</b>.</li><li><b>야마오카의 원혼의 이동 속도를 약간 감소시킨다.</li>","name":"액막이 부적","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"조상 대대로 전해내려오는 칼집. 야마오카 가문에서 직접 만들었다.<li>영적 세계에서 돌아와 다시 모습을 드러내는 데 걸리는 시간이 <b>적당히 증가한다</b>.</li><li>영적 세계에서 돌아와 다시 모습을 드러낼 때 이동속도가 <b>적당히 빨라진다</b>.</li>","name":"와키자시 칼집","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"신성한 주문 만트라가 깃들어있는, 영험한 힘을 가진 목걸이.<li>공포 범위 바깥에 있는 생존자는 소리를 들을 수 있다.</li>","name":"염주 목걸이","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"말라서 바스러진 벚꽃잎. 한때 삶의 덧없음의 상징이었다.<li>스피릿이 이동 중에 남기는 잔상의 흔적이 <b>약간 오래 남는다</b>.</li><li>스피릿이 이동 중에 남기는 잔상의 빈도가 <b>약간 높아진다</b>.</li>","name":"마른 벚꽃","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"\\"소중한 나의 딸\\"이라는 글씨가 새겨져 있는 은반지.<li>영적 세계에서 이동속도가 <b>엄청나게 빨라진다</b>.</li><li>영적 세계에서 생존자의 <b>발자국이 보이지 않게 된다</b>.</li>","name":"모녀 반지","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"항상 회사일에 치여 살던 샐러리맨 아버지의 안경.<li>영적 세계에서 생존자의 <b>핏자국을 볼 수 있게 된다</b>.<li>","name":"아버지의 안경","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"빈정거릴 때 사용하는 친근한 모습의 밝은 노랑색 단추이다.<li>음산한 광기 상태에서 살인마의 본능에 의해 강조 표시된생존자를 공격하면 60초 동안 상대를 실명 상태에 빠뜨린다.</li>","name":"웃는 얼굴 핀","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"복무 기간을 깊이 새겨 넣은 나무 자이다.<li> 힘이 차는 데 걸리는 시간이 <b>약간 감소한다</b>.</li>","name":"흠집 난 자","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"해야 할 못된 일을 적어 놓은 목록으로, 좋았던 시절의 기념품이다.<li> 음산한 광기 지속 시간이 <b>약간 증가한다</b>.</li>","name":"못된 장난 목록","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"회색과 적색의 넓은 밧줄을 꼬은 팔찌이다. 굵은 검은색과 함께 서투른 글씨로 \\"F J S J\\"라고 써놨다.<li>살인마의 본능 탐지 범위가 <b>약간 증가한다</b>.</li>","name":"우정 팔찌","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"시험이나 흡수 행동 시 신경을 날카롭게 만들어 주는 고카페인 알약이다.<li> 살인마의 본능 탐지 범위가 <b>적당히 증가한다</b>.</li>","name":"잠 깨는 약","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"공책에서 찢어낸 군단 벽화 스케치이다.<li> 음산한 광기 지속 시간이 <b>적당히 증가한다</b>.</li>","name":"벽화 스케치","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"주로 힘 있는 발라드와 음울한 멜로디로 구성된 음침하고 우울한 믹스테이프이다.<li>음산한 광기 후, 탈진이 <b>약간 감소한다</b>.</li>","name":"줄리의 믹스 테이프","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"적들의 이름을 깊이 새겨 넣은 나무 자이다.<li>능력이 차는 데 걸리는 시간이 <b>적당히 감소한다</b>.</li>","name":"긁힌 자","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"일그러진 웃는 얼굴이 왠지 친숙한 밝은 노랑색 단추이다. 군단의 상징이다.<li><i>음산한 광기</i> 상태에서 살인마의 본능에 의해 강조 표시된 생존자를 공격하면 상대를 <b><i>깊은 상흔</i></b> 상태에 빠뜨린다.</li>","name":"일그러진 웃는 얼굴 핀","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"군단의 얼굴이 그려진 수제 단추다. 오직 위협에만 사용한다.<li>음산한 광기 상태에서 살인마의 본능에 의해 강조 표시된 생존자를 공격하면 60초 동안 상대를 치료 불능 상태에 빠뜨린다.</li>","name":"군단의 핀","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"미친 듯이 질주하는 박자와 함께 열기가 넘치는 노래가 든 믹스 테이프다. <li>살인마의 본능 탐지 범위가 <b>엄청나게 증가한다</b>.</li>","name":"수지의 믹스 테이프","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"뭔가 연상되지만 좀 기이한 상상화가 들어있는 스케치북이다.<li> 음산한 광기의 지속 시간이 <b>상당히 증가한다</b>.</li>","name":"도둑 맞은 스케치북","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"비위생적이며 녹으로 얼룩진 칼날이 상처 치료를 아주 어렵게 만든다.<li> 생존자가 상처를 치료하는 데 필요한 시간이 <b>약간 증가한다</b>.</li>","name":"고약한 칼날","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"폭발적인 사운드와 두들기는 울림이 가득한 믹스로 인생이 뭐 같을 때 듣는다.<li>음산한 광기 후, 탈진이 <b>적당히 감소한다</b>.</li>","name":"조이의 믹스 테이프","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"오르몬드 공공 도서관에서 훔친 과학 기사로 상처와 찔린 상처에 대한 연구를 평이하게 설명하고 있다.<li>모든 생존자들의 심각한 부상 시간이 <b>적당히 감소한다</b>.</li>","name":"찔린 상처 연구","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"살인 임무를 수행할 때에는 반드시 음악과 함께 하도록 하자. 재생 목록은 귀를 찌르는 타악기와 육중한 뒤틀림으로 가득하다.<li>음산한 광기를 담아 공격 시 생존자의 심각한 부상 지속 시간이 <b>상당히 감소한다</b>.</li>","name":"프랭크의 믹스 테이프","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"더러운 핏자국과 녹으로 얼룩진 칼날이 상처 치료를 아주 어렵게 만든다.<li> 생존자가 상처를 치료하는 데 필요한 시간이 <b>적당히 증가한다</b>.</li>","name":"더러운 칼날","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"관리인이 마지막 안식을 취한 장소에서 수집한 흙 한 줌이다. 기이할 정도로 차갑다.<li>음산한 광기 후, 탈진이 <b>상당히 감소한다</b>.</li>","name":"차가운 흙","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"안개가 스스로 군단 모형에 붙여준 유리 같은 단추이다. 표면은 따스하고 엔티티의 힘으로 진동하고 있다.<br><br>음산한 광기 상태에서 생존자들에게 깊은 상흔을 입히면　<br><li>공포 범위가 <b>지도 전체로 확대된다.</b></li><li>건너는 판자는 <b>모조리 파괴된다.</b></li><br>이 효과는 능력 게이지가 다 떨어질 때까지 유지된다.<br>","name":"핏빛 단추","flavor":"“핏빛 유리가 생기를 잡아먹으면 엔티티의 영역이 확장된다.”","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"음울한 비트와 폭력적인 비명, 다른 세계에서 오는 이해할 수 없는 목소리는 떨리는 영감을 가진 마음을 가득 채워준다.<li>음산한 광기를 사용하면 <b>발전기 수리 진행 상황을</b> <b>발전기 오라의 세기</b>로 알 수 있다.</li>","name":"연기 나는 믹스 테이프","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"원래는 전신 권태와 병을 내쫓기 위해 사용했으나 지금은 타락한 주문이 적힌 깨진 석판.<li>헌신의 웅덩이의 활성화 시간이 <b>약간 감소한다</b>.</li><li>부정한 숙청이 활성화된 동안 이동 속도가 <b>약간 증가한다</b>.</li>","name":"기도 석판 조각","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"유향 나무에서 추출한 귀한 수액으로 의식 중에 달콤한 귤 향을 내기 위해 사용한다.<li>끔찍한 숙청을 충전하는 동안 이동 속도가 <b>약간 증가한다</b>.</li>","name":"유향","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"다공석으로 만든 원통형 인장으로 날개 달린 신에게 제사를 올리는 장면이 묘사되어 있다.<li>대상의 감염 시간을 <b>약간 증가시킨다</b>.</li>","name":"석회석 인장","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"강렬하게 톡 쏘는 향이 나는, 으깬 뿌리로 만든 반죽이다. 생선 젓갈에 사흘 동안 재우고 와인에 다시 이틀을 재워서 만든다. 발진이 생긴 피부에 바른다.<li>끔찍한 숙청의 재사용 대기시간을 <b>약간 감소시킨다</b>.</li>","name":"치료용 연고","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"질병을 쫓아내는 날개 달린 신이 어설프게 묘사된 동석 아뮬렛. 착용자를 헌신의 감정으로 가득 채운다.<li>부정한 숙청의 지속 시간을 <b>약간 증가시킨다</b>.</li>","name":"질병 예방용 부적","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"거품이 나는 탁한 액체로 대기 중을 톡 쏘는 약초와 알코올 향으로 채운다. 물집이 생긴 자리에 직접 바른다.\\n<li>끔찍한 숙청의 재사용 대기시간이 <b>적당히 감소한다</b>.</li>","name":"강력한 팅크","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"금속성의 경질석으로 만든 원통형의 인장으로, 이상한 기계 옆에 서 있던 새 머리 형태의 물체로 새겼다. 신성한 유해의 보관함으로 사용된다.<li>대상의 감염 시간을<b>적당히 증가시킨다</b>.</li>","name":"적철석 인장","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"겨자 물을 베이스로 한 시럽으로 구토를 유발한다. 신체에 깃든 악을 내쫓는 데 사용한다.<li>끔찍한 숙청의 효과를 <b>약간 증가시킨다</b>.</li>","name":"구토 물약","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"정화 의식을 끝낸 뒤 아침으로 먹는 딱 맞게 익은 사과로 맛이 훌륭하다.<li>헌신의 웅덩이 <b>1개</b>를 추가적으로 부패시킨 상태로 희생제를 시작한다.</li>","name":"축복받은 사과","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"품질이 괜찮은 마사지 오일을 담은 비커. 월계수와 로즈메리의 푸른 향기가 물씬 풍긴다.<li>끔찍한 숙청의 충전 속도를 <b>적당히 증가시킨다</b>.</li>","name":"마사지 오일","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"역한 맛의 알 수 없는 시럽. 노랑빛의 진한 액체를 마시면 구토가 올라온다. 신체에 깃든 악을 내쫓는 데 사용한다.<li>끔찍한 숙청의 효과를 <b>적당히 증가시킨다</b>.</li>","name":"감염된 구토제","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"검은 밀랍 반죽에 삼나무 수액을 더해 달콤하면서 흙냄새가 섞인 향이 난다. 감염된 피부에 직접 바른다.<li>끔찍한 숙청을 충전하는 동안 이동 속도가 <b>약간 증가한다</b>.</li><li>끔찍한 숙청의 대기 시간이<b> 적당히 감소한다</b>.</li>","name":"향을 첨가한 연고","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"유령 쫓기 의식을 하는 동안 질병을 내쫓는 데 쓰는 흑요석으로 만든 아뮬렛. 대혼란과 질병의 신에게 드리는 기도가 새겨져 있다. 착용자는 격렬한 헌신의 감정으로 가득 찬다.<li>부정한 숙청의 지속 시간이 <b>적당히 증가한다</b>.</li>","name":"악령 쫓기용 아뮬렛","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"신성화된 유해 위로 굴린 껍질 깎은 사과. 이 사과를 먹으면 망자들의 질투 많은 사악한 유령들을 내쫓을 수 있다.<li>헌신의 웅덩이 <b>1개</b>를 추가적으로 부패시킨 상태로 희생제를 시작한다.</li><li>대상의 감염 시간을 <b>약간 증가시킨다.</b></li>","name":"잿빛 사과","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"잊혀진 신들을 숭배하기 위해 사용했으나 현재는 타락해버린 주문의 그림과 글귀가 적힌, 금으로 장식된 석판.<li>헌신의 웅덩이의 활성화 시간을 <b>적당히 감소시킨다</b>.</li><li>부정한 숙청이 활성화된 동안 이동 속도가 <b>적당히 증가한다</b>.</li>","name":"숭배 석판","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"정체불명의 재료로 만들었으며 구역질 나는 냄새에 반쯤 엉겨 붙은 물약. 마시는 즉시유발하며, 신체에 스며든 악을 내쫓는 데 사용한다.<li>끔찍한 숙청의 효과를 <b>상당히 증가시킨다</b>.</li>","name":"끔찍한 구토제","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"썩어가는 아디리스의 잘린 발가락을 실로 엮어 목에 걸 수 있도록 만든 아뮬렛. 사악한 힘을 내뿜는다.<li>생존자들이 감염으로 받는 게이지를 <b>상당히 증가시킨다</b>.</li>","name":"잘린 발가락","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"바빌로니아의 대혼란과 질병의 신의 조각상을 이용해 복잡한 모양으로 깎은 혈석 아뮬렛. 착용자를 끝없는 헌신으로 가득 채운다.<li>부정한 숙청의 지속 시간이 <b>상당히 증가한다</b>.</li>","name":"헌신자의 아뮬렛","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"역병의 조각상을 이용해 안개가 만들어낸 반투명한 원통형 인장. 그 표면은 따뜻하며 엔티티의 힘으로 진동한다.<li>부정한 숙청이 활성화된 동안 이동 속도가 <b>적당히 증가한다</b>.</li><li>부정한 숙청의 지속 시간을 <b>엄청나게 감소시킨다</b>.</li><li>발전기가 하나 완성될 때마다 끔찍한 숙청이 부정한 숙청으로 바뀐다.</li>","name":"핏빛 인장","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"날카로운 뼈 부스러기로 만든 검은 반죽. 그 끔찍한 향기를 맡으면 심상의 눈이 밝아진다.<li>생존자가 구토를 하면 그들의 오라가 <span class=\\"Highlight1\\">5초</span> 동안 드러난다.</li>","name":"검은 향","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"올슨이 전에 일하던 필라델피아에서 희생자를 처리하고 빼앗은 카메라. 필름 안에는 그가 필라델피아에서 보낸 마지막 날의 기록이 고스란히 담겨 있다.<br><li>잠복 상태에서 벗어나지 않을 경우 생존자에게 표식이 새겨질 확률이 <b>약간 증가한다</b>.</li>","name":"“필리”","flavor":"“이래서 필리가 좋아. 아낌없이 베풀어 주는 데다, 난 이들을 하나도 잊어버리고 싶지 않거든.” –고스트 페이스","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"로즈빌 북부에 있는 작은 술집에서 받은 성냥갑. 피해자의 전화번호가 파란색 글씨로 적혀 있다. 그의 유죄를 입증한 증거물 중 하나이다.<br><li><i>밤의 장막</i>의 능력 회복률이 <b>약간 증가한다</b>.</li>","name":"월아이즈 성냥갑","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"유타 지방에서 펜실베니아에 이르는 미해결 사건을 다룬 신문 기사의 헤드라인 조각들이다. 고스트 페이스는 이들 중 일부를 작성했으며, 이 사건들은 모두 그가 저지른 것들이다.<br>성공한 기록 하나마다 자존감이 고양되고, 자신감도 올라간다.<br><li>미행 중 이동 속도가 <b>약간 증가한다</b>.</li>","name":"헤드라인 기사 조각","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"염가 판매점에서 구매한 소독용 알콜 향이 강한 향수로, 고스트 페이스가 자신의 존재를 알리기 위해 사용한다. 이 향수는 흔적을 남기기 위해 잠깐 들르는 용도로 사용한다.<br><li>모든 생존자의 표식 시간이 <b>약간 증가한다</b>.</li>","name":"싸구려 향수","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"멀리서 사진을 찍어도 발각되지 않는 수동식 초점 렌즈.<br><li>잠복 상태에서 벗어나지 않을 경우 생존자에게 표식이 새겨질 확률이 <b>약간 증가한다</b>.</li><li>생존자의 표식 시간이 <b>약간 증가한다</b>.</li>","name":"망원 렌즈","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"나선철 형식으로 얼룩이 묻어있으며, 글자로 가득한 노트. 이 수기에는 피해자를 미행하는 데 사용한 다양한 장비에 대한 내용이 자세히 기록되어 있다. 과거를 되돌아보며 스릴 넘치는 추억을 되새길 때도 유용하다.<br><li>미행 중 이동 속도가 <b>적당히 증가한다</b>.</li>","name":"올슨의 수기","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"무뚝뚝한 어투로 쓰인 푸른 색 글자로 가득한 전화번호부. 로즈빌에서 발생한 모든 살인사건 피해자의 주소와 전화번호가 기록되어 있다.<br><li><i>밤의 장막</i>의 능력 회복률이 <b>적당히 증가한다</b>.</li>","name":"올슨의 주소록","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"플로리다 주의 로즈빌 북부가 그려진 주석이 첨부된 지도. 각 X 마크는 고스트 페이스에게 희생된 피해자들의 위치를 표시한다. 목표에 대한 계획만 수립되면 들키지 않고 거리를 돌아다닐 수 있다.<br><li>살인마의 위치가 발각될 시 살인마의 본능으로 볼 수 있는 시간이 <b>적당히 증가한다</b>.</li>","name":"표식이 그려진 지도","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"밀행 중 모든 물건을 고정시키는 검은 색 스트랩.<br><li>앉아있는 동안 이동 속도가 <b>약간 증가한다</b>.</li>","name":"신치 스트랩 ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"현금 30달러, 비디오 클럽 회원증, 올슨의 첫 범행 피해자가 찍힌 사진이 접힌 상태로 보관되어 있는 올슨의 지갑이다. 유죄를 입증할 수 있는 증거를 지님으로써 흥분을 고조시키고 자신의 죄를 반박할 수 있다.<br><li>미행 중 이동 속도가 <b>상당히 증가한다</b>.</li>","name":"올슨의 지갑","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"칼을 소지하는데 적당하며, 조용하고 유연한 칼집. 제자리에 고정만 잘하면 이동이 굉장히 편해진다.<br><li>앉아있는 동안 이동 속도가 <b>적당히 증가한다</b>.</li>","name":"가죽 나이프 칼집","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"고스트 페이스가 자신의 존재를 알리기 위해 사용하는 강한 사향이 포함된 향수. 처치하기로 계획한 피해자를 찾아갈 때 사용한다.<br><li>생존자의 표식 시간이 <b>적당히 증가한다</b>.</li>","name":"독한 향수","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"정찰용으로 딱 어울리는 벨트 클립으로 칼을 안전하게 소지할 수 있다. 오늘 밤 벌어질 계획에 대해 아는 이는 아무도 없을 것이다.<br><li>잠복 상태에서 벗어나지 않을 경우 생존자에게 표식이 새겨질 확률이 <b>적당히 증가한다</b>.</li>","name":"나이프 벨트 클립","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"대니의 DNA 흔적이 남아있는 이빨자국이 새겨진 뚜껑 달린 파란색 펜이다. 누구도 찾지 못한 그의 유죄를 입증하는 결정적인 증거물이다.<br><li><i>밤의 장막</i>의 능력 회복률이 <b>상당히 증가한다</b>.</li>","name":"이빨자국이 난 펜","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"올슨에게 희생된 첫 피해자가 매주 어떻게 행동했는지 적혀 있는 찢어진 페이지. 피해자의 습관을 파악함으로써 저들의 행동 패턴을 파악할 수 있다.\\n<br><li>살인마의 위치가 발각될 시 살인마의 본능으로 볼 수 있는 시간이 <b>적당히 증가한다</b>.</li><li>밤의 장막이 활성화 중일 때 생존자에게 탐지되는 범위가 <b>적당히 감소한다</b>.</li><br><span class=\\"FlavorText\\">“잠시 지켜보고 있었지. 사람들의 기억에 영원히 남을 특별한 헤드라인을 원하거든.” -고스트 페이스</span>","name":"피해자의 세부 일정","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"어둠 속에서도 선명한 사진을 찍을 수 있는 야간 투시용 렌즈. 밤 동안 신중하게 움직이며 잠시 들르는 목적으로 사용하기 좋은 장비다.<br><li>잠복 상태에서 벗어나지 않을 경우 생존자에게 표식이 새겨질 확률이 <b>상당히 증가한다</b>.</li>","name":"야간 투시용 단안경","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"모든 행동에 적합한 칼로, 자유롭게 움직이며 신속하게 깊은 상처를 입히는 데 적합하다. 이것은 대니가 필라델피아에서 야간 순찰을 돌던 경관에게서 훔쳐낸 무기다.<br><li>앉아있는 동안 이동 속도가 <b>상당히 증가한다</b>.</li><span class=\\"FlavorText\\">“스카우트처럼 준비해야지. 멍청한 배지는 필요 없어. 내가 얻을 건 그보다 훨씬 더 멋지거든.” -고스트 페이스</span>","name":"허벅지에 차는 칼집","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"올슨의 진짜 정체인 대니 존슨에 대한 정보가 담겨 있는 운전면허증이다.<br><li><i>밤의 장막</i>이 활성화 중일 때 생존자에게 탐지되는 범위가 <b>상당히 감소한다</b>.</li>","name":"운전면허증","flavor":"\\"모두가 고스트 페이스의 정체를 알고 싶어 하지. 하지만 그들이 정말로 물어봐야 할 건 그게 아니라, 다음 차례가 누구냐는 거야.” -고스트 페이스","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"올슨이 로즈빌 지역에 공포를 조장하는 기사를 쓰기 위해 입수한 테이프다.<br><li>잠복에서 벗어날 경우 생존자에게 표식이 새겨질 확률이 <b>엄청나게 증가한다</b>.</li><li>잠복 상태에서 벗어나지 않을 경우 생존자에게 표식이 새겨질 확률이 <b>엄청나게 감소한다</b>.</li>","name":"“테이프에 찍힌 고스트 페이스”","flavor":"“영상을 보면, 플로리다 로즈빌 북부 지역에서 늦은 시각 집으로 들어간 검은 그림자의 모습을 볼 수 있다. 다음 날 아침, 경찰은 이 지역에서 살인사건 신고를 받고 출동했다. 문단속을 철저히 하는 것이 좋을 것이다. 살인범은 마치 유령처럼 밤거리를 거니는 우리들 중 누군가일 테니까.” –로즈빌 가제트","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"로즈빌 북부의 벨리뷰 도로 근처의 집에 침입한 고스트 페이스를 찍은 소형 감시용 카메라. 이 카메라는 고스트 페이스의 행동거지를 남기면서도 경찰에 결정적인 단서를 제공하지 못하도록 교묘한 위치에 설치되었다.<br><li>징표를 새긴 생존자가 빈사 상태가 되면 자신의 공포 범위 바깥에 있는 모든 생존자의 오라가 4초 동안 표시된다.</li>","name":"야외 보안 카메라","flavor":"“사진 안에는 단어 천 개의 가치가 담겨있는 법이지.” –고스트 페이스","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"호킨스의 썩은 토양 때문에 감염된 호박 속.<li>뒤집힌 세계를 횡단하는 동안, 당신이 들어왔던 포털이 파괴되었다. 이 때 블러드 포인트 200을 획득한다.</li>","name":"썩은 호박","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"데모고르곤이 먹는 쫄깃쫄깃한 쥐꼬리.<li>포털을 여는 데 소요되는 시간을 <b>약간 감소시킨다.</b></li>","name":"쥐꼬리","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"짭짤하고 부드러운 한 무더기의 간. 눅눅하다.<li><b>심연</b>을 충전하는 동안 살인마의 이동 속도가 <b>약간 증가한다.</b></li>","name":"쥐 간","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"뒤집힌 세계 속에 존재하던 촉수 생물체의 가슴에서 뜯겨진 검고 발효된 심장.<li><b>찢어발기기</b> 타격 공격의 회복 속도를 <b>약간 증가시킨다</b>.</li>","name":"검은 심장","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"차원 간 터널을 넓히는 탄력 있는 거미줄. 물기가 어려 있다.<li>생존자가 포털을 봉인하는 데 소요되는 시간이 <b>약간 늘어난다</b>.</li>","name":"끈끈한 거미줄","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"차원 간 터널을 덮고 팽창하는 막. 끈적거리며 악취가 진동한다.<li><b>심연</b>이 생존자를 감지하는 반경을 <b>적당히 증가시킨다</b>.</li>","name":"끈적한 내벽","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"데모고르곤의 원기를 높여주는 썩은 창자.<li>뒤집힌 세계를 횡단하는 동안 살인마의 이동 속도를 <b>약간 증가시킨다.</b></li>","name":"썩은 푸른 창자","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"가엾은 희생양의 맛있는 내장.<li>이용 가능한 총 포털 수를 <b>1</b>개 <b>늘린다</b>.</li><li>빗나간 <b>찢어발기기</b>공격의 회복 속도를 <b>약간 증가시킨다</b>.</li>","name":"야옹이의 내장","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"뒤집힌 세계로 여행하던 중 깨져버린 안경.<li> 판자를 부수면 <i>찢어발기기</i> 회복 속도가 <b>약간 증가한다</b></li>","name":"바바라의 안경","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"데모고르곤이 먹이를 감각하는 텔레파시를 왜곡할 수 있도록 해주는 뒤집힌 세계로부터 온 짙은 색의 버섯.<li>포털에서 나올 때 살인마에게 적용되는 <b>감지 불가능한 상태 이상</b>의 지속 시간을 <b>약간 증가시킨다.</b></li>","name":"보라색 왁스캡 버섯","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"차원 간 터널을 보강하며 뻗어 있는 두껍고 가시가 돋친 덩굴.<li>생존자가 포털을 봉인하는 데 소요되는 시간이 <b>약간 늘어난다</b></li>.<li><b>심연</b>이 생존자를 감지하는 반경을 <b>약간 증가시킨다</b>.</li>","name":"가시돋친 덩굴 식물","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"탄산음료를 초자연적 에너지로 가득 채울 수 있다.<li>뒤집힌 세계를 횡단하는 동안 수리 중인 발전기의 노란색 오라를 보여준다</li>","name":"일레븐의 탄산음료","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"데모고르곤에 새로운 힘을 불어넣는 고무 느낌의 생 허파.<li>뒤집힌 세계를 횡단하는 동안 살인마의 이동 속도를 <b>상당히 증가시킨다.</b></li><li>사용 가능한 포털의 수가 <b>2개</b> 줄어든다.</li>","name":"사슴의 허파","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"문제를 일으키는 데 사용되는 라이터.<li>포털의 영향을 받는 생존자들은 <b>실명</b> 상태 이상에 시달리게 된다. 포털과의 접촉을 끊으면, 이 효과는 <b>60초</b> 동안 지속된다.</li>","name":"케이스가 놋쇠로 된 라이터","flavor":"“강력한 전자기장을 방출하라. 틀림없이 뒤집힌 세계와 접촉했을 것이다.” -호킨스 국립 연구소","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"뒤집힌 세계로부터 온 선홍색 독버섯.<li>살인마가 포털에서 나올 때 적용되는 <b>감지 불가능</b> 상태 이상의 지속 시간을 <b>적당히 증가시킨다</b>.</li>","name":"다홍색 웹캡 버섯","flavor":"“이 표본을 가지고 실험을 계속할 것. 지금까지의 결과는 일관성이 없다.\\" - 호킨스 국립 연구소","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"끈적거리고 인화성이 강한 수액. 차원 간 터널로 가는 관문을 강화한다.<li>생존자가 포털을 봉인하는 데 소요되는 시간을 <b>적당히 늘린다</b>.</li>","name":"뒤집힌 세계의 송진","flavor":"\\"나무껍질에서 채취한 표본으로, 한때 문으로 사용되기도 했다. 지금까지 그것의 효과에 대한 우리의 판단은 확실하지 않다.\\" -호킨스 국립 연구소","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"섬뜩한 거미줄로 덮인 크고 따뜻한 알.<li>뒤집힌 세계를 횡단하는 능력의 회복 속도를 <b>상당히 높인다</b>.</li>","name":"알 수 없는 알","flavor":"\\"뒤집힌 세계에서 커다란 알이 발견되었지만, 조사를 위해 실험실로 이동시키는 과정을 견뎌낸 표본은 없었다.\\" -호킨스 국립 연구소","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"한때 호킨스 공용수영장을 지배했던 금속 소재의 녹슨 호루라기.<li>활성화된 포털 주변의 생존자들은 <b>심연</b> 차지 없이 살인마의 본능에 감지된다.</li>","name":"안전 요원의 호루라기","flavor":"“강력한 전자기장을 방출하라. 틀림없이 뒤집힌 세계와 접촉했을 것이다.” - 호킨스 국립 연구소","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"뒤집힌 세계의 나무에서 자라는 환각제 이끼.<li>뒤집힌 세계를 횡단하는 동안, 데모고르곤이 목표 포털에서 고요하게 그리고 더 느리게 나온다.</li><li>데모고르곤이 포털에서 나왔을 때 적용된 <b>감지 불가능</b> 상태 이상 효과의 지속 시간을 <b>엄청나게 증가시킨다.</b></li>","name":"붉은 이끼","flavor":"“잎을 먹으면 운동능력이 향상되고 극도의 행복감이 생긴다.” -호킨스 국립 연구소","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"뒤집힌 세계의 바위에 먼지가 붙어 있는 양 자라는 강력한 노란색 이끼.<li>뒤집힌 세계를 횡단하는 동안, 그리고 포털에서 나오는 <b>3초</b> 동안 모든 생존자의 <b>오라를 노출시킨다</b>.</li>","name":"러프로스 이끼","flavor":"“소량의 복용은 심각한 환각을 일으킬 수 있다.” - 호킨스 국립 연구소","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"카잔이 자신의 목표는 순수하다고 생각해 자신을 타락시킬 수도 있는 악귀를 쫓기 위해 들고 다닌 장신구.<li>핏빛 구체의 흡수 속도를 <b>약간 증가시킨다</b>.</li>","name":"액막이 부적","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"밧줄이 더 강했더라면 카잔을 놓치지 않았을 테지만 그는 결국 탈출하여 그를 납치한 자들을 살해했다.<li>핏빛 구체 오라 감지 거리를 <b>약간 증가시킨다</b>.</li>","name":"썩은 밧줄","flavor":"\\"비록 죽음이 집중되어 있지만, 그는 점멸에게 알려져 있다.\\" -렌지로의 교리 14:5","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"카잔의 결혼식에 사용된 술잔. 깨지기 전까지 밤새도록 만드는 일은 없었다.<li><i>핏빛 분노</i>를 발동하기 위한 활성화 충전율을 <b>약간 증가시킨다</b>.</li><li><i>핏빛 분노의</i> 비활성화 시간을 <b>약간 감소시킨다</b>.</li>","name":"깨진 술잔","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"사원을 향한 카잔의 수많은 겨울 여정 중에 떨어진 발톱. 그의 순례에도 불구하고 다리는 결코 회복되지 않았다.<li>핏빛 구체를 흡수하면 이동 속도가 <b>약간 증가한다</b>.</li>","name":"검게 변한 발톱","flavor":"\\"아버지의 희생이 자식을 위한 게 아니라면, 아버지는 대체 누구란 말인가\\" -렌지로의 교리 11:12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"악마와 비교한 후 카잔이 자신의 헬멧으로부터 떼어낸 뿔 모양의 장식.<li><i>야마오카의 분노<i>의 수동 충전률을 <b>약간 증가시킨다</b>.</li>","name":"빛나는 뿔 장식","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"한때 야마오카의 저택에 걸려 있던 사자 수묵화. 쥐 떼가 잡아먹는 이야기를 묘사하고 있다.<li><i>핏빛 분노</i>를 발동하기 위한 활성화 충전율을 <b>약간 증가시킨다</b>.</li><li><i>핏빛 분노의</i> 비활성화 시간을 <b>약간 감소시킨다</b>.</li><li>생존자를 빈사 상태로 만들면 <i>핏빛 분노</i> 소모 페널티가 <b>적당히 감소한다</b>.</li>","name":"사자 수묵화","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"렌지로의 지휘채이며, 카잔이 출발하자마자 도난 당했다.<li><i>핏빛 분노</i>의 지속 시간을 <b>약간 증가시킨다</b>.</li>","name":"닳아버린 지휘채","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"아키토의 연습용 목검이며, 아이는 부상 후 별로 사용하지 않았다.<li>핏빛 구체 오라 감지 거리를 <b>적당히 증가시킨다</b>.</li>","name":"어린이의 목검","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"카잔이라 불리는 가짜 귀족 소년의 피 묻은 띠. 카잔의 아버지와의 싸움을 숨기고 비밀리에 종종 띠를 드러낸다.<li>핏빛 구체를 흡수하면 이동 속도가 <b>적당히 증가한다</b>.</li>","name":"피 묻은 띠","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"야마오카 일가의 깃발. 카잔은 깃발로부터 강력한 자부심을 느꼈다.<li><i>핏빛 분노</i>의 지속 시간을 <b>적당히 증가시킨다</b>.</li>","name":"야먀오카의 깃발","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"어린 카잔이 입춘 전날에 구매했던 마스크. 혐오스러운 이빨이 악몽으로 나타나기 시작했다.<li>생존자가 핏빛 구체를 떨어트리는 양을 <b>약간 증가시킨다</b>.</li>","name":"나무 악귀 가면","flavor":"\\"인간이 악마에 친숙하다는 것은 결코 우연이 아니다.\\" -렌지로의 교리 3:8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"카잔의 분노에 의해 파괴된 옛 조상의 요도.<li><i>야마오카의 분노</i>의 수동 재충전율을 <b>적당히 증가시킨다</b>.</li>","name":"조각난 요도","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"카잔의 명예를 품은 사무라이의 상투이다. 뿌리에는 얇은 핏빛 두피가 붙어 있다.<li><i>핏빛 분노</i>가 활성화되어 있는 동안 <i>악마의 돌진</i>의 이동 속도가 <b>상당히 증가한다</b>.</li>","name":"도려낸 상투","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"카잔이 태어났을 때 주어진 장신구이며, 위험으로부터 그의 가족을 지켜준다고 전해진다.<li><i>핏빛 분노</i>가 활성화되어 있는 동안 <i>악마의 돌진</i>의 이동 속도가 <b>적당히 증가한다</b>.</li>","name":"가정 보호 부적","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"카잔이 사무라이를 정화하기 위해 순례를 떠날 때 그의 어머니가 눈물을 훔쳤던 손수건.<li>생존자를 빈사 상태로 만들면 <i>핏빛 분노</i> 소모 페널티가 <b>상당히 감소한다</b>.</li>","name":"눈물에 젖은 손수건","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"렌지로 야마오카가 탔던 배의 파편. 모든 역경 속에서도 전설의 사무라이는 버젓이 살아남았다.<li>생존자가 핏빛 구체를 떨어트리는 양을 <b>적당히 증가시킨다</b>.</li>","name":"조각난 선체","flavor":"\\"속임수를 계획하고 있다면 조언없이 시작하라.\\" -렌지로의 교리 7:9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"이국의 상인으로부터 팔린 이빨. 고귀함과 권력을 상징한다.<li><i>핏빛 분노의</i> 지속 시간을 <b>상당히 증가시킨다</b>.</li>","name":"사자의 이빨","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"카잔의 아들이 나무에서 떨어진 후 사용한 목발이다. 아키토의 친구와 그녀의 가족들은 그의 부상 때문에 벌을 받았다.<li><i>핏빛 분노</i>가 활성화되어 있는 동안 <i>악마의 돌진</i>의 이동 속도가 <b>상당히 증가한다</b>.</li>","name":"아키토의 목발","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"자신의 아들로부터 공격을 당한 후 흉골을 잡았던 렌지로의 장갑.<li>모든 생존자는 핏빛 구체를 볼 수 있게 된다.</li><li>핏빛 구체와 계약을 맺는 생존자는 빗빛 구체를 흡수하고 <b>2초</b> 동안 살인마에게 오라를 발산한다.</li><li>이 효과는 각 핏빛 구체가 흡수될 때마다 중첩된다.</li>","name":"렌지로의 피 묻은 장갑","flavor":"\\"다른 모든 것들이 쏟아져 나올 때, 단지 명예만 붙잡고 있으면 된다.\\" -렌지로의 교리 14:12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"소유자가 야마오카 일가라는 것을 증명하는 문장.<br><li><i>핏빛 분노</i>가 활성화되어 있는 동안 <i>악마의 일격</i>이 빗나가면 <b>12미터 내</b>에 있는 모든 생존자가 비명을 지르며 현재 위치가 드러난다.</li>","name":"핏빛 가문 문장","flavor":"\\"자신의 마음을 보호할 수 있도록 자신이 누군지 깨달아라.\\" -렌지로의 교리 11:2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"더러운 누더기 조각. 총격전에서 작살 총을 닦아내는 건 침과 팔꿈치의 기름으로 충분했다.<li>공격 실패 후 작살 총의 재사용 대기 시간이 <b>약간 감소한다</b>.</li>","name":"침 묻은 누더기 ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"여행 상인에게 구매한 추출물과 오일의 팅크. 세상의 모든 질병을 치료한다고 한다.<li>작살 총의 감기 속도가 <b>약간 빨라진다</b>.</li>","name":"엉터리 약 ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"케일럽의 프로토타입 작살 총에 처음에 사용된 약한 철 연결고리. 체인이 큰 효과가 없었지만, 애착이 간다.<li><i>창에 찔리다</i> 스코어 이벤트에서 <b>50%</b>의 추가 블러드포인트를 획득한다.</li><li>생존자들은 더 쉽게 탈출할 수 있다.</li>","name":"부서질 듯한 체인","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"케일럽이 자신의 특수 무기를 위해 개조한 오래된 총알 벨트. 애리조나 준주의 사막에는 아직 미세하게 붉은 먼지가 남아 있다.<li>작살 총의 재장전 속도가 <b>약간 빨라진다</b>.</li>","name":"개조된 총알 벨트 ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"케일럽이 병적 호기심의 순간에 작살 총 앞 부분에 달아버린 철길용 못. 둔탁한 못의 끝은 대상을 결코 깔끔하게는 뚫지 못한다.<li>찌른 생존자를 공격하면 <b>깊은 상흔</b> 상태 이상에 빠진다.</li>","name":"녹슨 못 ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"평범하게 생긴 식물이지만, 케일럽은 식물에서 나온 기름으로 코팅된 창을 사용하면 상처 주위에 견딜 수 없는 물집이 생긴다는 것을 알게 됐다.<li><b>심각한 부상</b> 상태의 영향으로 생존자의 상처가 아무는 시간이 <b>약간 증가한다</b>.</li>","name":"옻나무 잎","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"현상 수배와 함께 헬셔 갱단을 방해한 애리조나 준주의 법 집행관의 시체로부터 떼낸 은빛 배지.<li>작살 총의 시야를 조준하는 동안 공포 범위가 <b>약간 감소한다</b>.</li><li>작살 총의 시야를 조준하는 동안 이동 속도가 <b>약간 느려진다</b>.</li><span class=\\"FlavorText\\">“기도나 하라고, 정오까지는 들릴 테니 말이야.” -케일럽 퀸</span>","name":"집행관의 배지 ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"격렬한 총격전에서 케일럽의 턱을 찢어버린 총알. 복수에 대한 불타는 욕망을 다시 불러일으켰다.<li>작살 총 시야를 조준하는 동안 이동 속도가 <b>약간 빨라진다</b>.</li><span class=\\"FlavorText\\">\\"나한테 실수한 순간 넌 이미 죽음의 문턱에 놓인 거야.\\" -케일럽 퀸</span>","name":"조 스매셔 ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"글렌베일의 처참한 시체에서 꺼낸 잘게 썰려 달달한 향이 추가된 담뱃잎 캔. 신경을 자극한다.<li>생존자가 작살 총에서 벗어나면 기절 지속시간이 <b>적당히 감소한다</b>.</li>","name":"씹는담배","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"뭉툭하고 거슬리는 열쇠. 케일럽의 격렬한 기억을 회상시킨다.<li>작살 총의 재장전 속도가 <b>적당히 빨라진다</b>.</li>","name":"교도소장의 열쇠 ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"누렇게 물든 메이슨 켈리의 현상 수배 전단. 케일럽은 사냥에 집중했다.<li>작살 총의 시야를 조준하는 동안 이동 속도가 <b>적당히 빨라진다</b>.</li><span class=\\"FlavorText\\">\\"어머니의 무덤에 맹세하건대 너에게 엄벌을 내릴 것이다.\\" -케일럽 퀸</span>","name":"현상 수배 전단 ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"기계의 마찰을 줄이기 위해 사용하는 오일을 조금 담은 깡통. 작살 총의 초기 모델은 막히기 일쑤였기 때문에 오일을 발라야만 했다.<li>공격 실패 후 작살 총의 재사용 대기 시간이 <b>적당히 감소한다</b>.</li>","name":"작은 오일 깡통 ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"케일럽이 현상수배범을 두 번이나 놓친 것에 분노하여 가시가 날카로운 가지들을 비틀어 창 형태로 만들고 풀어놓은 것.<li>작살 총에서 벗어난 생존자는 <b>깊은 상흔</b> 상태 이상에 빠진다.</li>","name":"수엽나무 가시 ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"헨리 베이쇼어가 끝장나기 전 몇 시간 동안 자비를 외칠 때 떼어 낸 금니.<li>작살 총의 감기 속도가 <b>적당히 빨라진다</b>.</li><span class=\\"FlavorText\\">\\"자신의 처지를 알라고, 애송이. 네 처지를 말이야.” —헨리 베이쇼어</span>","name":"베이쇼어의 금니","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"쇠공이 이어져있으며 한때 케일럽의 발목을 감싸고 있던 두껍고 무거운 체인. 이후에는 창에 달리게 된다.<li>생존자가 창에서 해방되기 위해 필요한 힘이 <b>상당히 늘어한다</b>.</li><span class=\\"FlavorText\\">“교도소 마당 너머에서 일하는 수감자들에게 18파운드 이상의 쇠공을 달아야 한다.” -헬셔 교도소 경비원 지침서</span>","name":"감옥 체인","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"케일럽의 분노를 진정시키고 그의 발걸음을 늦추게 만든 병에 담긴 따뜻하고 안락한 위스키.<li>작살 총의 시야를 조준하는 동안 공포 범위가 <b>적당히 감소한다</b>.</li><li>작살 총의 시야를 조준하는 동안 이동 속도가 <b>적당히 감소한다</b>.</li><span class=\\"FlavorText\\">“거친 정착지를 위한 부드러운 맛” -골드 크릭 광고, 1876년</span>","name":"골드 크릭 위스키","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"케일럽의 상사가 복부에 창이 꽂혀 울부짖는 동안, 상사의 재킷에서 꺼낸 질 좋은 시가.<li>생존자가 창에서 벗어나면 기절 지속시간이 <b>상당히 감소한다</b>.</li><span class=\\"FlavorText\\">\\"그거 나한테 들이밀지 마, 이 멍청한 새끼야.\\" -헨리 베이쇼어</span>","name":"베이쇼어의 시가","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"뾰족한 가시가 있으며 잘 휘어지는 미국산 철사. 철사의 심플함에도 불구하고 케일럽은 이것을 창에 감아 사용하면 창의 잔인함을 극도로 끌어올릴 수 있다는 것을 알게 됐다.<li><b>심각한 부상</b> 상태의 영향으로 생존자의 상처가 아무는 시간이 <b>적당히 증가한다</b>.</li></li><span class=\\"FlavorText\\">\\"곧 있으면, 더 이상 두려움에 떨 필요가 없지. 하지만 그때까진... 날 두려워하라고.\\" -케일럽 퀸</span>","name":"가시철사","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"안개 자체에서 만들어진, 유리로 된 동전. 현상금 사냥꾼가 제공한 서비스에 대한 지불금.<li>최소 <b>15미터</b> 멀리에서 날아온 창에 찔린 생존자는 창에 찔린 동안 <b>약점 노출</b> 상태가 된다.</li><span class=\\"FlavorText\\">\\"절박한 상태에서 한 거래는 광기 상태에서 대가를 치르게 된다.\\"</span>","name":"핏빛 동전","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"헬셔 갱단의 낙인 도구. 전설적인 명성에도 불구하고 그들에게 낙인을 찍히는 없었다. 대신 험한 싸움이 가득한 현상금 사냥에 자주 사용되곤 하였다.<li>생존자가 창에 찔린 동안 공포 범위 내에 있는 모든 생존자들의 오라를 볼 수 있다.</li><span class=\\"FlavorText\\">“헬셔 갱단: 그들은 정의의 사도인가, 무법자인가?” -글렌베일 가제트 헤드라인</span>","name":"헬셔의 도구","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"냉장고에서 발견됐다. 역겹고 비대한 얼굴이 새겨져있다.<li><b>판결 의식</b>의 흔적이 환경에 남아 있는 기간이 <b>약간 증가한다</b>.</li>","name":"납 반지 ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"우드 사이드 아파트의 한 침대에서 발견된 나비. 나비는 만지면 부스러질 듯 약해 보인다.<li><b>판결 의식</b>의 재충전율이 <b>약간 증가한다</b>.</li>","name":"죽은 나비 ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"브룩헤이븐 병원 지하실에서 발견되었다. 거미 그림이 새겨져있다.<li><b>판결 의식</b>을 수행할 수 있는 총 시간이 <b>약간 증가한다</b>.</li>","name":"구리 반지 ","flavor":"“난 지하실 내 지하실에 감금되어 있었어. 지하실은 너무 작고 어두웠어. 두려움에 떨던 난, 내 소중한 반지를 떨어뜨리고 말았지만, 난 다시는 그곳으로 돌아가지 않을 거야.”","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"금속 프레임에 피해자를 구속하는 데 사용됐던 나일론 끈. 색깔 때문에 피가 스며드는 것을 보기 어렵다.<li><b>지옥의 처벌</b> 거리가 <b>약간 증가한다</b>.</li>","name":"검은 끈 ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"밀랍으로 조각한 인형, 곧 자신에게 내려질 판결을 직면하게 될 죄수가 손수 만든 인형.<li><b>지옥의 처벌</b> 거리가 <b>적당히 증가한다</b>.</li>","name":"밀랍 인형 ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"날카롭고 녹슨 창끝. 마지막 희생자의 피로 물들었다.<li><b>판결 의식</b>을 수행할 수 있는 총 시간이 <b>적당히 증가한다</b>.</li>","name":"창 머리 ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"분홍색 표범 프린트 천 조각. 어디에 썼는지 구별하기 어렵다.<li><b>판결 의식</b>이 발동되면 <i>살인마의 본능</i>의 기간이 <b>약간 증가한다</b>.</li>","name":"표범 프린트 천  ","flavor":"“내가 누군지는 상관없어. 난 제임스, 당신을 위해 왔어.” -마리아","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"사일런트 힐에서 휴식을 취하고 있는 연인이 찍힌 비디오테이프. 비디오테이프가 가진 감상적 가치에도 불구하고, 레이크뷰 호텔에 버려졌다.<li><b>판결 의식</b>의 재충전율이 <b>적당히 증가한다</b>.</li>","name":"잊혀진 비디오테이프 ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"신데렐라 동화에서 나온 오르골. 여러 지역을 다닌 듯한 수화물 스티커로 꾸며진 여행 가방에서 발견되었다.<li><b>판결 의식</b>의 흔적이 환경에 남아 있는 기간이 <b>적당히 증가한다</b>.</li>","name":"신데렐라의 오르골 ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"빨간 후드를 입은 두 사람의 사진. 신들을 위한 크림슨과 화이트 연회라는 제목이 붙여져있다.<li><b>판결 의식</b>의 재충전율이 <b>상당히 증가한다</b>.</li>","name":"발티엘 종파 사진 ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"아즈텍 형상이 새겨진 금속판.<li><b>판결 의식</b>을 수행할 수 있는 총 시간이 <b>상당히 증가한다</b>.</li>","name":"압박자의 판 ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"머리 위에 철제 피라미드를 두른 당당한 모습의 그림. 희생자들은 뒤에 갇혀 있다.<li><b>판결 의식</b>이 발동되면 <i>살인마의 본능</i>의 기간이 <b>적당히 증가한다</b>.</li>","name":"안개 낀 날, 판결 후 남은 것 ","flavor":"\\"그자다...”","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"마네킹의 부드러운 회색빛 발. 다리에서 잔인하게 뜯겨져 나왔다.<li><b>판결 의식</b>의 흔적이 환경에 남아 있는 기간이 <b>상당히 증가한다</b>.</li>","name":"마네킹 발 ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"레이크뷰 호텔의 도해. 죄책감의 장소 위에 붉은 불길이 그려져 있다.<li>지옥의 처벌 거리가 <b>상당히 증가한다</b>.</li>","name":"버닝 맨 페인트 ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"신선한 알로 눈에 띄게 빨갛다. 메추리알 크기 정도다.<li><b>판결 의식</b>이 발동되면 <i>살인마의 본능</i>의 기간이 <b>상당히 증가한다</b>.</li>","name":"다홍색 알 ","flavor":"\\"난 평생 이렇게 겁먹은 적이 없었어! 당신은 날 신경 쓸 필요도 없는 존재라고 생각하는 거지?” -마리아","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"오래되어 보이는 주홍색 알. 메추리알 크기 정도다.<li><b>판결 의식</b>의 영향을 받은 생존자는 <b>60초</b> 동안 <b>실명</b> 상태 효과로 고통을 받는다.</li>","name":"녹슨색 알 ","flavor":"“제임스... 당신은 날 행복하게 만들어.” -메리","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"사일런트 힐과 주변 지역의 역사와 전설에 대한 책이다.<li><b>판결 의식</b>의 영향을 받은 생존자는 <b>15초</b> 동안 <b>인지 불가능</b> 상태 효과로 고통을 받는다.</li><span class=\\"FlavorText\\">“사람들은 이곳을 ‘사일런트 스피릿의 장소’라고 부른다.”</span>","name":"잃어버리 기억 ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"고대 신에 관한 책. 작가는 미상이다.<li><i>고통</i>의 영향을 받은 부상당한 생존자는 <b>출혈</b> 상태 효과로 고통을 받는다.</li>","name":"크림슨 세레모니 책 ","flavor":"“네 이름은 무엇이냐. 난 크림슨 원이다. 거짓말과 안개는 그들이 아닌, 이 몸이지.”","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"순수 흑요석으로 조각된 고블릿, 오랜 고대의 것으로 보인다.<li><b>판결 의식</b> 흔적 위에 서있는 <b>처형자</b>는 <b>감지 불가능</b> 상태를 발동시킨다.</li>","name":"흑요석 고블릿 ","flavor":"“내가 깨웠다면 용서해 줘. 하지만 난 당신이 없이는 더 이상 나아갈 수 없어.” -제임스 선더랜드","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"기묘한 디자인이 새겨진 부적. 엔티티의 영향력이 변화시킨 것 같다.<li>생존자를 <b>속죄의 우리</b>로 보내면 <i>고통</i>받는 모든 생존자의 오라가 <b>6초</b> 동안 드러난다.</li>","name":"핏빛 메타트론 큐브 ","flavor":"\\"강력한 보호와 방전 성질을 가진 이 마법진은 \'비룬 7세 크레스트\' 또는 \'메타트론 큐브\'이라고 불린다.”","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"전혀 효과가 없는 약... 아, 효과가 없는 건 아닌가?<br><br><li>질주 중 움직임의 속도가 <b>적당히 줄어든다.</b></li><li>질주 점수를 얻을 때, <b>100%</b> 보너스 블러드 포인트를 얻는다.","name":"플라시보 약 ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"화학에 대한 탤벗의 흥미를 일깨워준 독초. 깊은 곳에 묻혀 있는 기억을 불러일으킨다.<br><br><li>질주 후 회복 속도가 <b>약간 증가한다</b>.</li> ","name":"디기탈리스 ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"원하는 결과를 얻는 데는 실패한 초기 샘플이지만, 그럼에도 불구하고 놀라운 효과를 보여주었다.<br><br><li>충돌 후  충돌 지점 <b>16 미터 내에</b> 생존자를 자동적으로 대면하게 된다.</li>","name":"화합물 7 ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"말년에 나빠진 시력에도 불구하고 잘 사용하지 않았던 탤벗의 단안경.<br><br><li>충돌 표적의 위치를 표시한다.</li>","name":"닳아버린 단안경","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"탤벗의 노트에서 남은 부분. 귀중한 정보가 여전히 포함되어 있다.<br><br><li>사용 가능한 질주 토큰의 개수가 <b>1개</b> <b>줄어든다.</b></li><li>토큰 재생률이 <b>상당히 증가한다</b>.</li>\\n","name":"뜯겨나간 노트 ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"말린 고름집 꽃잎을 갈아 미세한 가루로 만들었다.<br><br><li>충돌 지속 시간이 <b>상당히 증가한다</b>.</li>","name":"고름집 가루 ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"역병의 증오 샘플, 증류 후 화학 물질과 혼합하여 처리한다.<br><br><li>질주 중 선회율이 <b>약간 증가한다.</b></li> ","name":"역병 증오","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"동고병 돌기에서 잘라낸 상당한 크기의 가시나무. 가벼운 독소를 분비한다.<br><br><li>질주 후, 재생 속도가 <b>적당히 증가한다</b>.</li> ","name":"돌기 가시나무","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"혈청 주사를 맞으면 잠시 생기를 되찾은 쥐, 공격적이고 걷잡을 수 없게 된다.<br><br><li>질주를 연이어 사용할 때, 질주 속도가 <b>적당히 증가한다</b>.</li> ","name":"황폐화된 쥐 ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"순간적으로 영적 세계를 통과한 일반적인 바다 소금, 그 과정에서 성질이 바뀌었다.<br><br><li>질주 발동 중 선회율이 <b>적당히 증가한다</b>.</li> ","name":"본영 소금 ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"희귀한 초승달 꽃다발의 말린 장미와 함께 섞은 혼합물.<br><br><li>충돌 지속 시간이 <b>상당히 증가한다</b>.</li> ","name":"장미 강장제 ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"인간에게 치명적인 세럼. 더 특별한... 자들에게만 유익한 효과가 있다.<br><br><li>충돌 발동 시, 충격 지역에서 <b>8미터</b> 내에 있는 생존자의 오라가 <b>3초</b> 동안 드러난다.</li>","name":"화합물 21 ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"황폐화된 혈청으로 기괴하게 변이된 죽은 까마귀.<br><br><li><b>질주를 연이어 사용할 때, 질주 속도가</b> 상당히 증가한다.</li>","name":"황폐화된 까마귀 ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"원치 않는 피험자의 부신에서 제거된 호르몬. 가슴 철렁일 만큼의 에너지가 제공되지만, 사용자는 피로감을 느낄 수 있다.<br><br><li><b>질주 중 선회율이</b> 엄청나게 감소한다.</li><li><b>질주 토큰의 재생 속도가</b> 엄청나게 증가한다.</li><li><b>사용 가능한 질주 토큰의 수가</b> 2개로<b> 늘어난다.</b></li><li><b>질주 중 최대 시야가</b> 상당히 증가한다.</li><br>","name":"아드레날린 유리병 ","flavor":"\\"제발 이러지 마세요...\\"","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"공허에서 돌아왔다고 주장하는 한 남자의 일지. 일지에 적힌 지식은 매우 실용적이다.<br><br><li>질주 발동 중 <b>감지 불가능</b> 상태 효과를 획득한다.</li><br>","name":"비고의 일지 ","flavor":"\\"잊혀진 꿈과 끊임없는 일상의 황무지에서 탈출할 수 있는 이는 신밖에 없다.\\" —탤벗 그라임스","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"탤벗이 사용한 돌로, 아편굴의 벽에 자신의 연구라고 믿었던 것을 새겼다.<br><br><li>치명적인 질주를 발동하여 생존자를 타격하면 엔티티를 소환하여 <b>12미터</b> 이내 살인마의 위치 반경 <b>6초</b>동안  내 판자를 차단한다.</li><br>","name":"소환석 ","flavor":"\\"죽음은 단지 시작일 뿐이다.\\"","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"죽은 지 얼마 안 된 생존자의 송과샘에서 쥐어짜낸 화학 물질.<br><br><li>질주 발동 중, 수리 또는 치료 중인 생존자의 <b>16미터</b> 범위 내에 진입하는 순간, 생존자에게 <b>엄청나게</b> 어려운 스킬 체크가 발동된다. 생존자 당, 질주 당 한 번만 활성화할 수 있다. 생존자의 <b>16미터</b> 내에서는 질주를 발동할 수 없다.</li><br>","name":"영혼의 화학 물질 ","flavor":"\\"신경 주기활동에 비정상적인 변화를 일으킬 것으로 의심됨...\\" —분류되어 있지 않은 의문의 교내 문서","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"런던 의과대학을 졸업하는 화학자들에게 주어지는 반지. 억제되지 않은 야심을 일깨워 준다.<br><br><li>치명적인 질주로 생존자와 충돌할 경우 질주 토큰을 모두 회복한다.</li><br>","name":"연금술사의 반지 ","flavor":"\\\\\\"그 학생은 무허가 과학 시험을 핑계로 시체 강탈을 한 혐의를 받고 있다.\\" —1838년, 탤벗 그라임스의 교수 문책","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"유리 같은 실험실 꼬리표로, 안개로 만들어졌다. 엔티티의 선물인지, 블라이트가 한때 사람들을 괴롭혔던 것처럼 그를 따라다니는 지독한 농담 같기도 하다.<br><br><li>질주 토큰을 모두 사용하면, 마지막 치명적인 질주로 생존자를 빈사 상태로 만든다.<br>","name":"핏빛 블라이트 태그","flavor":"\\"진보에 급격한 변화가 필요해.\\" —탤벗 그라임스","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"탤벗의 두 번째 시도. 탈출에 도움을 주진 못했지만, 부작용이 심하다.<br><br><li>충돌 효과의 <b>16미터</b> 이내에 있는 생존자는 <b>3초</b> 동안 <b>근육 손상</b> 상태 효과로 고통받는다</b>.</li><li>판자나 벽에 부딪힐 경우 블라이트는 <b>1.5초 동안</b> 기절 상태에 빠진다.</li><br>","name":"화합물 33 ","flavor":"\\"시간이 촉박해. 제발 이번엔...\\" —탤벗 그라임스","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"몇 인치밖에 되지 않는 아주 작은 장난감 검. 검을 쥐고 있는 빅터의 마음에 폭력적인 열정을 불러일으켰다.<br><br><li>덮치기를 차지하는 시간이 <b>약간 감소한다</b>.</li>","name":"장난감 검","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"샬롯이 빅터의 죽음을 애도하는 데는 많은 방법이 있었지만, 그녀는 썩어가는 동생의 손에서 손톱 하나를 떼어냈다. 그렇게 동생의 죽음을 추모하며 손톱 하나를 간직했다.<br><br><li>빅터가 샬롯과 떨어져 있는 시간이 <b>적당히 감소한다</b>.</li>","name":"조그마한 손톱","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"발효된 우유가 채워진 금속 병. 비명을 지르던 빅터를 조용하게 만드는 건 한 끼의 식사였다.<br><br><li>빅터의 비명 범위가 <b>약간 증가한다</b></li>","name":"산유","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"어린 빅터의 눈길을 사로잡은 나무 모형. 그는 어머니가 그것을 시장에서 훔칠 때까지 비명을 질렸고, 그 때문에 정체가 탄로날뻔했다.<br><br><li>덮치기 대상의 위치를 표시한다.</li>","name":"고양이 모형","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"한때 쌍둥이의 엄마가 소유했던 장갑. 절망적이었던 그때, 빅터가 소리 내지 못하도록 그의 입에 물려졌다.<br><br><li>빅터의 비명 범위가 <b>적당히 증가한다</b>.</li>","name":"마들렌의 장갑","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"빅터가 넘어뜨린 나무 촛대로, 납치범을 불태웠다. 그의 집념의 상징.<br><br><li>빅터를 으스러뜨리는 데 필요한 시간이 <b>약간 증가한다</b>.</li>","name":"의식용 나무 촛대","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"굶주린 데헤이스 가족들이 먹은 고양이의 눈알. 빅터는 눈알을 가지고 놀기 위해, 엄마로부터 그것을 숨겼다.<br><br><li>덮치기 기술이 완전히 차지되면 빅터의 비명소리가 멈춘다.</li>","name":"고양이의 눈알","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"샬롯을 사냥한 남자들 중 한 명의 후드. 그리고 곧, 그는 먹잇감이 되었다.<br><br><li>샬롯이 휴면 상태에서 깨어나는 시간이 <b>약간 감소한다</b>.</li>","name":"핏빛 검은 후드","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"오래전 빅터가 잃어버린 치아 두 개. 매우 뾰족했다.<br><br><li>빅터를 제거한 생존자는 <b>15초</b> 동안 실명 상태 이상에 걸린다.</li>","name":"아기 치아","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"빅터가 욕심냈던 딸랑이. 그는 어머니가 자신을 위해 그것을 도둑질을 할 때까지 울음을 멈추지 않았다. 하지만 아기의 손에 쥐여주기엔 너무 무거운 딸랑이다.<br><br><li>빅터를 제거한 생존자는<b>20</b>초 동안 <b>치료 불능</b> 상태 이상에 빠진다.</li> ","name":"치우쳐진 딸랑이","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"마들렌이 마을 시장에서 훔친 딱딱하고 이스트를 넣지 않은 비스킷. 풍족하진 않았지만 웬만한 식사보다 좋았다.<br><br><li>덮치기의 재사용 대기 시간이 <b>약간 감소한다</b>.</li>","name":"오래된 비스킷","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"도시 하수구를 통해 탈출 시도를 하는 동안 데헤이스 가족들을 뒤덮었던 역겹고 끈적끈적한 혼합물.<br><br><li>생존자로 하여금 빅터를 제거하는 데 걸리는 시간이 <b>약간 증가한다</b>.</li>","name":"하수 쓰레기","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"녹슨 바늘","name":"녹슨 바늘","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"마들렌이 죽기 직전에 멨던 스카프. 쌍둥이는 그것을 어머니의 죽음을 기념하기 위해 간직했다.<br><br><li>빅터의 속도가 <b>약간 증가한다</b>.</li><br>","name":"마들렌의 스카프","flavor":"\\"...이는 공익을 위한 행위, 그리고 악의 근절로 기억될 것이다.\\" — 마들렌 데헤이스의 죽음에 대한 조사","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"빅터가 두려움을 느낄 때마다 꼭 끌어안았던 장난감 병정. 샬롯 안에 질투라는 감정을 불러일으켰다.<br><br><li>빅터가 아무런 행동도 취하고 있지 않을 때 생존자가 빅터를 으스러뜨리면 <b>6초</b> 동안 그들의 오라가 드러난다</li><br>","name":"빅터의 병정","flavor":"\\"나--나--나쁜 자들을 죽여야... 해...애...\\" — 빅터 데헤이스","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"쌍둥이가 서로 공유하는 나무 팽이. 비록 빅터는 자신만을 위한 팽이를 원했지만... 그리고 시간이 지나 그는 꼭 매달려 소리를 지르면 자신이 원하는 것을 얻는 수 있다는 것을 알게 되었다.<br><br><li>빅터가 덮친 생존자들은 쥐고 있던 아이템을 떨어뜨린다.</li><br>","name":"팽이","flavor":"\\"쉿... 쉿... 알겠어, 네 거야.\\" — 샬롯 데헤이스","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"이끼와 나무껍질을 섞어 허황된 충만감을 자아내는 숙성된 채소 스튜.<br><br><li>빅터의 속도가 <b>적당히 증가한다</b>.</li><br>","name":"숲의 스튜","flavor":"\\"먹으렴... 아가... 먹어야 해. 삼키면 좀 괜찮게 느껴질 거야.\\" — 마들렌 데헤이스","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"마들렌의 과거를 떠나오면 함께 챙긴 몇 안 되는 사치품 중 하나. 기분 좋은, 사람을 무장해제시키는 냄새를 풍긴다.<br><br><li>빅터의 비명소리 범위 내에 있는 생존자는 <b>인지 불가능</b> 상태 효과에 빠진다.</li><br>","name":"향수 한 방울","flavor":"\\"마녀들의 속임수를 조심하라, 그들은 사람의 마음속에 있는 선함을 착취한다.\\" — 마녀와 악마의 역사(1602)","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"다섯 살짜리 샬롯이 자신의 입에 넣을 거친 천 조각. 마녀 사냥꾼들이 근처에 다가올 때 그녀가 소리 지르는 걸 참을 수 있게 해줬다.<br><br><li>샬롯이 유휴 상태에서 깨어나면 샬롯에게 <b>20초</b> 동안 <b>감지 불가능</b> 상태 이상이 주어진다.</li><br>","name":"침묵의 천","flavor":"\\"나는 이 놀이가 이제 재미있지 않아, 엄마...\\" — 샬롯 데헤이스","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"유리처럼 생긴 펜던트는 안개가 만든 것이다. 펜던트에는 마들렌 데헤이스의 초상화가 그려져있다. 비록 그녀의 얼굴에서 뭔지 모를 불안감이 느껴졌지만...<br><br><li>빅터가 아무런 행동도 취하고 있지 않을 때 생존자가 빅터를 으스러뜨리면 생존자는 <b>30초</b> 동안 <b>약점 노출</b> 상태 이상에 빠진다.</li><br>","name":"핏빛 펜던트","flavor":"\\"너희 둘이 이렇게 태어난 건 저주가 아니란다, 아가야. 서로에게 의지할 수 있는 힘이란다.\\" — 마들렌 데헤이스","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"숨은 주머니가 많은 작은 가방. 숨길 것과 야심이 가득한 마술사가 사용했던 것.<br><li>최대로 소지할 수 있는 칼의 수가 <b>10</b>개 <b>증가한다</b>.</li><li><b>10</b>개의 칼을 추가로 소지한 채 희생제를 시작한다.</li>","name":"트릭 주머니","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"피 묻은 칼로 오랫동안 사용한 듯 많이 닳아있다. 지운의 첫 살인부터 사용했던 것으로 그에겐 상징적인 칼이다.<br><li><b>명연기</b>로 생존자를 타격할 때마다 <b>100%</b>의 보너스 블러드포인트를 획득한다.</li><li>각 생존자의 열상 미터기가 <b>적당히 증가한다</b>.</li>","name":"메멘토 칼","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"지운은 절대 찾지 못한 코드. 하지만 여전히 그 소리는 명백히 외기 쉬운 파트였다.<br><li>칼을 투척할 때 이동 속도가 <b>약간 증가한다</b>.</li>","name":"킬링 파트 선율","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"5명 중 4명의 NO SPIN 멤버를 죽음으로 몰아간 스튜디오 화재에서 나온 타버린 전선. 그들의 죽음은 트릭스터를 세상에 알리는 계기가 되었다.<br><li>메인 이벤트 시간이 <b>약간 증가한다</b>.</li>","name":"지옥의 전선","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"창원의 어느 바에서 만든 술. 지운이 가장 좋아하는 술이 되었다.<br><li>메인 이벤트 시간이 <b>적당히 증가한다</b>.</li>","name":"테킬라 문락","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"지운이 인기를 얻기 전 직접 제작한 언더그라운드 싱글 음반. NO SPIN의 진정한 열성팬들 만이 이 숨겨진 보석을 수집했다.<br><li>열상 미터기의 감퇴 시작 전 시간이 <b>약간 증가한다</b>.</li>","name":"On Target 싱글","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"지운이 처음으로 투척한 칼. 패밀리 레스토랑에 자주 오는 손님들을 위한 쇼를 위해 지운의 아버지가 구입한 칼이다.<br><li>칼이 다 떨어지면 각 생존자의 열상 미터기 감퇴 시간이 <b>약간 증가한다</b>.</li>","name":"행운의 칼","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"트릭스터로 알려진 연예인의 서명. 수 백 명에게 서명을 해준 그의 팔목은 힘들었지만 그를 찾는 사람이 많다는 사실에 그는 더욱 힘이 났다.<br><li>첫 칼 투척 속도가 <b>약간 증가한다</b>.</li>","name":"지운의 사인","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"One Caged Heart의 뮤직비디오 촬영 때 신었던 신발. 포인트가 되는 춤을 출 때 더욱 부드럽고 우아하게 움직일 수 있도록 도와준다.<br><li>칼을 투척할 때 이동 속도가 <b>적당히 증가한다</b>.</li>","name":"Caged Heart 신발","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"지운이 I’ll Be Waiting for You 라이브 공연 당시 착용했던 회중시계. 그저 무대용 장식으로 사용되므로 시침이 움직이는 일은 없다.<br><li>소지한 칼을 모두 사용하면 각 생존자의 열상 미터의 감퇴 시간이 <b>상당히 증가한다</b>.</li>","name":"Waiting for You 시계","flavor":"“도망치지 마<br>끝났다고 말하지 마<br>탈출할 방법은 없어<br>기다리고 있을게”<br>— NO SPIN의 “I’ll Be Waiting for You”","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"지운의 뮤직비디오 Ripper를 촬영하던 당시 착용했던 손목 보호대. 의도하지 않았지만, 디자인은 다른 많은 의학 교정기보다 손목을 더 안정시켰다.<br><li>열상 미터기의 감퇴 시작 전 시간이 <b>적당히 증가한다</b>.</li>","name":"Ripper 보호대","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"희생자들의 입 밖으로 흘러나온 날카롭고 또렷한 비명을 녹음한 음성 파일. 지운은 그 비명소리를 좀 더 그의 인기 있는 노래에 삽입하였다.<br><li>각 생존자의 열상 미터기가 <b>적당히 증가한다</b>.</li>","name":"아름다운 선율의 살인","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"NO SPIN 홍보를 위해 제작된 한정판 탄산음료 캔. 당과 카페인 함량이 높다.<br><li>첫 투척 속도가 <b>적당히 증가한다</b>.</li>","name":"피즈-스핀 탄산음료","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"지운이 베여버린 희생자의 목에 두른 보아. 많은 주머니가 숨겨져있다.<br><li>최대로 소지할 수 있는 칼의 수가<b>15</b>개 <b>증가한다</b>.</li><li><b>15</b>개의 칼을 추가로 소지한 채 희생제를 시작한다.</li>","name":"피투성이 보아","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"상상력이 부족한 이들에게는 그저 결점 있는 칼로 보일지 모르지만 지운에게는 특수한 칼이다. 어린 지운은 그가 연기한 트릭으로 관중들을 현혹시켰다.<br><li>칼이 주변 환경에 두 번 맞고 튕킨다. </li><li>튕기고 떨어진 타격은 보너스 블러드포인트를 제공한다.</li>","name":"트릭 칼","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"트릭스터의 데뷔 앨범. 거칠고 공격적인 말투는 비평가들의 호평에도 불구하고 팬들 사이에서는 엇갈린 반응들이 존재했다<br><li>칼이 주변 환경에 맞아도 주변에 있는 생존자에게 <b>50%의 열상</b>을 입힌다.</li>","name":"Edge of Revival 앨범","flavor":"“네 속삭임이 내게 닿았어<br>너무나 따뜻했지<br>네 숨을 태워<br>네가 숨을 쉴 수 없을 때까지”<br>— 트릭스터의 “Whispers of Warmth”","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"지운을 미행하는 실수를 범한 사생팬의 눈에 박힌 커프링크. 흐르는 피를 닦아내면 반짝이는 것들이 보일 것이다.<br><li>생존자의 열상 미터기가 가득 채워지기까지 딱 한발의 타격이 남았을 때, <b>6초</b> 동안 생존자의 오라가 드러난다.</li>","name":"다이아몬드 커프링크","flavor":"“쉿... 넌 더 이상 네 피를 볼 필요가 없어.” —학지운","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"지운이 NO SPIN에 멤버로 합류한 후 처음으로 발매된 싱글. 한국 음악 차트를 휩쓸었다.<br><li>칼은 생존자를 뚫고 지나간다.</li><li>동일한 칼로 타격을 입은 다음 생존자는 <b>50%의 열상</b>을 입는다.</li>","name":"Cut Thru U 싱글","flavor":"“이 사랑을 멈출 수 없어<br>가슴이 찢어지는 고통이야<br>네가 어디에 있던<br>널 갈라놓을 거야”<br>— NO SPIN의 “Cut Thru U”","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"안개 자체에서 만들어진 유리 같은 사진. 지운의 눈이 웃는 얼굴에 홀로그래픽처럼 희미하게 비친다.<br><li>생존자의 열상 미터기가 가득 채워지기까지 딱 한발의 타격이 남았을 때, 생존자는 <b>약점 노출</b> 상태 효과에 빠진다.</li>","name":"핏빛 포토 카드","flavor":"“괜찮아, 내 이름을 불러봐. 네 고통이 깨어나는 모든 소리를 듣게 해줘...” —학지운","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"지운이 살해한 희생자들의 마지막 소리를 모은 컬렉션. 레코드판에 녹음되었다. 그들이 느끼는 공포와 감정이 날것 그대로 느껴진다.<br><li>칼로 인한 열상은 목표가 얼마나 가까이 있느냐에 따라 달라지며, 최소 <b>50%</b>이다.</li><li>칼의 타격은 칼로 인한 열상을 최대 <b>200%</b>까지 증가시킨다.</li><li>생존자가 공격을 피하면 칼로 인한 열상은 초깃값으로 원상 복구된다.</li>","name":"최후의 발악 컬렉션","flavor":"“제발요, 아, 안돼... 해치지 마세요... 살... 살려주세요” —신원 미상의 목소리","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"시설 방문객을 위한 전자 엄브렐러 손목 밴드. 추적 장치로도 사용된다.<li>좀비의 탐지 범위가 <b>적당히 확대된다</b>.</li>","name":"방문객 손목 밴드","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"편찬된 S.T.A.R.S. 근거리 전투 지식 매뉴얼. 크리스 레드필드에 의해 편집되었다.<li>생존자 타격 후 <b>6초</b> 동안 좀비의 오라가 노랗게 변한다.</li>","name":"S.T.A.R.S. 전장 매뉴얼","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"라쿤 시티를 집어삼킨 혼돈의 시기 동안 사용된 형편없는 의료 장비.<li>생존자가 백신을 투약하는 데 걸리는 시간이 <b>적당히 증가한다</b>.</li><li>생존자가 백신을 사용하면 살인마의 본능 효과 유지 시간이 <b>약간 증가한다</b>.</li>","name":"손상된 주사기","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"RPD 서장, 브라이언 아이언스의 소장. 좀비의 구미를 당긴다.<li>좀비의 이동 속도가 <b>약간 증가한다</b>.</li>","name":"브라이언의 창자","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"내장이 제거된 좀비의 심장. 바이러스가 가득하기 때문에 유해 폐기물로 간주되었다.<li>촉수 일격으로 좀비를 말살하면 돌연 변이율이 <b>적당히 증가한다</b>.</li><br>","name":"좀비의 심장","flavor":"\\"말 따윈 통하지 않아.\\" —레온 S. 케네디","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"미하일에게 남은 것은 거의 없었지만, 그의 왼쪽 눈은 그를 죽게 한 폭발에서 살아남았다. 그리고 그 눈알은 좀비들에게 맛있는 음식으로 남았다.<li>좀비의 이동 속도가 <b>적당히 증가한다</b>.</li>","name":"마하일의 눈","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"라쿤 시티 경찰의 오염된 피.<li>촉수 일격으로 생존자를 타격하면 돌연 변이율이 <b>적당히 증가한다</b>.</li><br>","name":"마빈의 피","flavor":"\\"조심하지 않으면 이곳은 너를 산채로 잡아먹을 거라는 것만 알아둬.\\" —마빈 브래너","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"감각을 고조시키고 육체를 전투태세로 만드는 호르몬.<li>생존자가 백신을 사용하면 살인마의 본능 효과 유지 시간이 <b>상당히 증가한다</b>.</li>","name":"아드레날린 주사기","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"시설 관리자를 위한 전자 엄브렐러 손목 밴드. 보안 구역 접근 허가 및 추적 장치로도 사용된다.<li>좀비의 탐지 범위가 <b>상당히 확대된다</b>.</li>","name":"관리자 손목 밴드","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"전투에서 사망한 T-002 타이런트에서 가져온 손상된 샘플. 극심한 화상의 흔적들이 있다.<li>촉수 일격으로 좀비를 말살하면 돌연 변이율이 <b>적당히 증가한다</b>.<li>좀비의 리스폰 시간이 적당히 증가한다.","name":"타이런트 고어","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"엄브렐러 코퍼레이션에 의해 개발된 T-바이러스의 샘플로, 연구 대상에게 심각한 돌연변이와 뇌손상을 유발한다.<li>촉수 일격으로 좀비를 말살하면 돌연 변이율이<b>상당히 증가한다</b>. ","name":"T-바이러스 샘플","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"은신해야 할 때 사용자를 약간 진정시켜주는 호르몬.<li>좀비를 말살하면 <b>15초</b> 동안 <b>감지 불가능</b> 상태 이상을 획득한다.</li>","name":"세로토닌 주사기","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"T-바이러스에 감염된 식물의 뒤엉킨 잔해로, T-바이러스를 개발한 연구원 중 한 명을 사망에 이르게 하였다.<li>생존자가 서플라이 박스를 여는 시간이 <b>상당히 증가한다</b>.","name":"43번 식물 덩굴 ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"만지는 모든 것을 쉽게 감싸는 끈적끈적한 혀.<li>생존자가 오염된 후 <b>근육 손상</b>에 빠지는 시간이 <b>적당히 증가한다</b>.</li><br>","name":"릭커의 혀","flavor":"\\"마치... 악몽과 같아.\\" —클레어 레드필드","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"네메시스 T타입 개발에 사용된 기생체로, 숙주의 뇌를 장악할 수 있다.<li>오염 상태가 되면 생존자는 60초 동안 <b>인지 불가능</b> 상태 효과에 빠진다.","name":"Ne-알파 기생체","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"비참하게 찌그러지고 최근 치렀던 전투에서 묻은 피가 뚝뚝 떨어지고 있다. 하지만 그런 모습에도 불구하고 샌드위치의 냄새는 잊을 수 없을 만큼 맛있는 냄새가 난다.<li>서플라이 박스를 잠금 해제한 후 생존자의 오라가 <b>12초</b> 동안 드러난다.</li>","name":"질의 샌드위치","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"이제 누가 그들을 구할 것인가? 좀비에게 활력을 주는 이 마른 잉크 리본에는 어떠한 특별한 점이 있다.<li>좀비의 리스폰 시간이 <b>상당히 감소한다</b>.</li><li>좀비의 이동 속도가 적당히 증가한다.</li><li>발전기 <b>5</b>대가 수리되면 출구에 소멸된 좀비들이 리스폰되어 나타난다.</li><br>","name":"감손된 잉크 리본","flavor":"\\"이봐, 그냥 말해두는 데... 이게 마지막일 줄 알아.\\" —질 발렌타인","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"월계관을 쓴 새가 그려진 동전. 반으로 쪼개졌다.<li>희생제에서 서플라이 박스 <b>1</b>개를 제거한다.</li><br>","name":"부서진 회복 동전","flavor":"\\"내가 상상했던 첫 근무일은 이런 게 아니었는데.\\" —레온 S. 케네디","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"라쿤 시티 희망의 상징이 완전히 파괴되었다.<li>발전기가 수리된 후, <b>30초</b> 동안 좀비의 이동 속도가 <b>엄청나게 증가한다</b>.</li><br>","name":"조각난 S.T.A.R.S. 배지","flavor":"\\"S.T.A.R.S...\\" —네메시스","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"안개 자체에서 만들어진, 유리로 된 배지. 배지는 윤리적이고 인도적인 과학의 도를 넘은 회사를 나타낸다.<li>백신을 사용한 생존자는 <b>12초</b> 동안 <b>약점 노출</b> 상태 효과에 빠진다.</li><br>","name":"핏빛 엄브렐러 배지","flavor":"\\"헌신, 정직, 성실. 이것들은 엄브렐러 코퍼레이션의 토대를 만드는 핵심 가치들입니다.\\" —맷 고르키스 박사","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/ko/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"잔혹함 항목에서 블러드포인트를 <span class=\\"Highlight2\\">50%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"풍금조 모양 화환","flavor":"\\"피 묻은 막대와 내장을 재료로 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"잔혹함 항목에서 블러드포인트를 <span class=\\"Highlight3\\">75%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"독실한 풍금조 모양 화환","flavor":"\\"피 묻은 막대와 내장을 재료로 독실하게 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"잔혹함 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"열렬한 풍금조 모양 화환","flavor":"\\"식지 않게 불타오르는 열정에 피 묻은 막대와 내장을 재료로 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"기만 항목에서 블러드포인트를 <span class=\\"Highlight2\\">50%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"까마귀 모양 화환","flavor":"\\"새까만 나뭇가지와 석탄을 재료로 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"기만 항목에서 블러드포인트를 <span class=\\"Highlight3\\">75%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"독실한 까마귀 모양 화환","flavor":"\\"새까만 나뭇가지와 석탄을 재료로 독실하게 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"기만 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"열렬한 까마귀 모양 화환","flavor":"\\"식지 않게 불타오르는 열정에 새까만 나뭇가지와 석탄을 재료로 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"사냥 항목에서 블러드포인트를 <span class=\\"Highlight2\\">50%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"점박이 올빼미 모양 화환","flavor":"\\"날카로운 금속과 밧줄, 깃털을 재료로 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"사냥 항목에서 블러드포인트를 <span class=\\"Highlight3\\">75%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"독실한 점박이 올빼미 모양 화환","flavor":"\\"날카로운 금속과 밧줄, 깃털을 재료로 독실하게 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"사냥 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"열렬한 점박이 올빼미 모양 화환","flavor":"\\"식지 않게 불타오르는 열정에 날카로운 금속과 밧줄, 깃털을 재료로 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"희생 항목에서 블러드포인트를 <span class=\\"Highlight2\\">50%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"때까치 모양 화환","flavor":"\\"막대와 힘줄, 뼈를 재료로 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"희생 항목에서 블러드포인트를 <span class=\\"Highlight3\\">75%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"독실한 때까치 모양 화환","flavor":"\\"막대와 힘줄, 뼈를 재료로 독실하게 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"희생 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"열렬한 때까치 모양 화환","flavor":"\\"식지 않게 불타오르는 열정에 막대와 힘줄, 뼈를 재료로 만들어진 화환. 더 많은 유혈을 위해 엔티티에게 축복을 구한다.\\"","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"모든 항목에서 블러드포인트를 <span class=\\"Highlight1\\">25%</span> 더 획득한다.<br><li>중첩 가능</li>","name":"벗겨진 껍질","flavor":"\\"알 수 없는 무언가가 파고 나온 고치\\"","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"모든 항목에서 블러드포인트를 <span class=\\"Highlight1\\">100%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"생존자 푸딩","flavor":"\\"엄청나게 짠 푸딩...\\"","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"엔티티에게 <span class=\\"Highlight2\\">2개</span>의 아이템 상자를 제거할 것을 요청한다. <br><li>중첩 가능</li>","name":"잘려진 동전","flavor":"\\"반으로 잘려진 금속제 동전\\"","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"엔티티에게 <span class=\\"Highlight1\\">1개</span>의 아이템 상자를 제거할 것을 요청한다. <br><li>중첩 가능</li>","name":"흠집 난 동전","flavor":"\\"기원을 알 수 없는 훼손된 동전\\"","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"엔티티에게 세계에 나타나는 희생의 갈고리와의 <b>거리</b>를 <b>약간 줄여줄 것</b>을 요청한다. <br><li>중첩 가능</li>","name":"곰팡이 핀 오크 나무","flavor":"\\"곰팡이로 가득한 눅눅하고 썩은 오크 나무 조각\\"","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"엔티티에게 세계에 나타나는 희생의 갈고리와의 <b>거리</b>를 <b>적당히 줄여줄 것</b>을 요청한다. <br><li>중첩 가능</li>","name":"썩은 오크 나무","flavor":"\\"이상한 흔적이 새겨져 있는 분해된 오크 나무 조각.\\"","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"엔티티에게 세계에 나타나는 희생의 갈고리와의 <b>거리</b>를 <b>상당히 줄여줄 것</b>을 요청한다. <br><li>중첩 가능</li>","name":"악취 나는 오크 나무","flavor":"\\"검은 껍질을 지닌 액체로 인해 망가진 오크 나무 조각.\\"","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"다음 희생제에서 <b>마지막 생존자를 <span class=\\"Highlight3\\">살해</span></b>할 수 있는 능력을 부여한다.<br><li>비밀</li>","name":"죽음의 상징: 상록수","flavor":"\\"잘했다. 마지막은 너의 것이다.\\"","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"다음 희생제에서 <b>2회 째 갈고리</b>에 걸렸었던 <b>생존자 한 명을 살해</b>할 수 있는 능력을 부여한다.<li>비밀</li>","name":"죽음의 상징: 상아","flavor":"\\"한 명을 제 손으로 죽일 수 있도록 허락해 주십시오.\\"","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"다음 희생제에서 <b>2회 째 갈고리</b>에 걸렸었던 <b>생존자 모두를 살해</b>할 수 있는 능력을 부여한다.<li>비밀</li>","name":"죽음의 상징: 흑단","flavor":"\\"나는 그것이 그 짐승에게 말을 하는 걸 봤다고 맹세할 수 있어. 하지만 나뭇잎들이 바스락거리는 소리를 들으려는 것이었는지 잠시 멈추었고, 그런 다음... 비웃었어.\\"","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"모든 생존자가 흩어져서 희생제를 시작한다.<br><li>비밀</li>","name":"분단의 장막","flavor":"\\"얇고 검은 장막이 우리를 모두 흩어지게 만든다.\\"","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/ko/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"오라를 감지하는 잠재력을 끌어낸다. 발전기가 수리 완료될 때마다, 수리 완료된 발전기로부터 <span class=\\"Highlight1\\">{0}미터</span> 안에 있는 생존자들의 오라를 <span class=\\"Highlight2\\">{1}초</span> 동안 볼 수 있다.<br>출구에 전원이 공급되면, 모든 생존자들의 오라를 <span class=\\"Highlight1\\">{2}초</span> 동안 볼 수 있다.","name":"격렬한 중얼거림","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. <span class=\\"Highlight1\\">{0}미터</span> 내에 존재하는 빈사 상태 생존자의 오라를 볼 수 있다.","name":"사슴 사냥꾼","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"당신이 내뿜는 공포는 초자연적일 정도로 먼 거리에서도 느껴진다. 공포 범위가 <span class=\\"Highlight1\\">{0}%</span> 증가한다. \'기만\' 항목의 블러드포인트를 <span class=\\"Highlight2\\">{1}%</span> 더 획득한다. ","name":"비참함","flavor":"\\"그들이 너를 두려워함을 즐겨라.\\"","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"은신 능력이 활성화된다.<br><br><span class=\\"Highlight1\\">{0}초</span> 동안 움직이지 않으면 <b>감지 불가능</b> 상태 이상이 주어지며, 다시 움직일 때까지 해당 상태가 유지된다.","name":"기만","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"희망을 짓뭉개버리는 주술. 생존자들이 도주하려는 찰나에 주술 토템이 당신에게 힘을 불어넣어 준다. <br>출구에 전력이 공급되었을 때 지도에 일반 토템이 남아 있으면, 이 주술이 해당 토템에 적용된다. </br><br>이 주술이 사라질 때까지 <li>생존자들은 <b><i>약점 노출</i></b> 상태 이상에 걸린다. </li><li>당신의 이동 속도는 <span class=\\"Highlight1\\">{0}%</span> 상승한다. </li><br>주술의 효과는 관련된 주술 토템이 멀쩡한 이상 계속된다. <br>","name":"주술: 피할 수 없는 죽음","flavor":"\\"또한 야수는 더욱더 빨라지고 더 강해졌다. 마치 엔티티의 보이지 않는 채찍이 녀석의 등을 후려치기라도 하듯이.\\"","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"희망으로부터 힘을 얻는 주술. 생존자의 잘못된 희망이 자신을 흥분시키고 토템을 힘으로 채운다. 일반 토템과 주술 토템이 지도에 남아있는 개수만큼 토큰을 얻는다.<br><li>각 토큰마다 사냥 항목에서 <span class=\\"Highlight1\\">{0}%</span>의 추가 블러드포인트를 얻는다.</li><li>생존자들의 토템 정화 속도가 각 토큰마다 <span class=\\"Highlight2\\">{1}%</span> 느려진다.</li><li>누군가 주술 토템을 작동하려고 하면 알림을 받는다.</li><br><i>주술의 효과는 관련 주술 토템이 활성화되어 있는 동안에만 지속한다.</i>","name":"주술: 사냥의 전율","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"희생제에 지하실의 갈고리를 이용해 엔티티의 관심을 이끌어낸다. 생존자를 지하실의 갈고리에 매달면 다음과 같은 효과가 발생한다:<br><li>엔티티의 의식 진행 속도가 <span class=\\"Highlight1\\">{0}%</span> 빨라진다.</li><li>갈고리에서 스스로 탈출할 확률이 <span class=\\"Highlight2\\">{1}%</span> 감소한다.</li><li>탈출에 실패할 경우 받는 페널티가 <span class=\\"Highlight3\\">{2}%</span> 증가한다.</li>","name":"거대한 신전","flavor":"“심연 속에서 어둠의 존재를 마주할 때, 너는 비로소 탈출구가 존재하지 않음을 알게 될 것이다.”","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"악독한 도살자","tiers":[["과다출혈을 일으킬 수 있는 부위를 알게 된다. <i>기본 공격</i>으로 부상당한 생존자는 <b>깊은 상흔</b>과 <b>출혈</b> 상태 이상에 걸리게 된다. 또한, <b>출혈</b>로 인해 생존자의 출혈 빈도가 <span class=\\"Highlight1\\">약간</span> 증가한다.<br><i>악독한 도살자</i>로 인해 겪는 <b>출혈</b> 상태 이상은 생존자가 완전히 치료되면 없어진다.<br><span class=\\"FlavorText\\">\\"그건 놈들의 본성과도 같아. 단숨에 숨통을 끊지 않고, 고통 속에서 천천히 죽어가는 모습을 지켜보는 걸 좋아하지.\\"</span>"],["과다출혈을 일으킬 수 있는 부위를 알게 된다. <i>기본 공격</i>으로 부상당한 생존자는 <b>깊은 상흔</b>과 <b>출혈</b> 상태 이상에 걸리게 된다. 또한, <b>출혈</b>로 인해 생존자의 출혈 빈도가 <span class=\\"Highlight1\\">적당히</span> 증가한다.<br><i>악독한 도살자</i>로 인해 겪는 <b>출혈</b> 상태 이상은 생존자가 완전히 치료되면 없어진다.<br><span class=\\"FlavorText\\">\\"그건 놈들의 본성과도 같아. 단숨에 숨통을 끊지 않고, 고통 속에서 천천히 죽어가는 모습을 지켜보는 걸 좋아하지.\\"</span>"],["과다출혈을 일으킬 수 있는 부위를 알게 된다. <i>기본 공격</i>으로 부상당한 생존자는 <b>출혈</b> 상태 이상에 걸리게 된다. 또한, <b>출혈</b>로 인해 생존자의 출혈 빈도가 <span class=\\"Highlight1\\">상당히</span> 증가한다.<br><i>악독한 도살자</i>로 인해 겪는 <b>출혈</b>과 <b>깊은 상흔</b> 상태 이상은 생존자가 완전히 치료되면 없어진다.<br><span class=\\"FlavorText\\">\\"그건 놈들의 본성과도 같아. 단숨에 숨통을 끊지 않고, 고통 속에서 천천히 죽어가는 모습을 지켜보는 걸 좋아하지.\\"</span>"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"이 세계의 까마귀들은 살인마와 직접 소통할 수 있다. <span class=\\"Highlight2\\">{1}미터</span> 내에 존재하는 까마귀가 울음소리를 내며 날아오를 때, <span class=\\"Highlight1\\">{0}%</span>의 확률로 시각적 알림을 받을 수 있다.<br><i>어둠 속의 첩자</i>는 <span class=\\"Highlight3\\">{2}초</span>의 재사용 대기시간을 가진다. ","name":"어둠 속의 첩자","flavor":"\\"어둠 속에서 그것들이 내는 울음소리 하나하나가 정신을 갉아먹는다.\\"","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"통상 공격이 빗나갔을 때, 다음을 기약하며 재정비한다. 빗나간 <i>기본 공격</i> 이후의 경직이 <span class=\\"Highlight1\\">{0}%</span> 감소한다.","name":"가차없는 공격","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"미약하지만 엔티티의 속삭임을 이해할 수 있다. 생존자가 <span class=\\"Highlight1\\">{0}미터</span> 내에 있을 때, 엔티티의 속삭임이 들린다.<br>","name":"속삭임","flavor":"\\"안개의 실체가 무엇인지는 몰라도, 확실한 건 그것이 살인마의 편을 더 많이 들어준다는 것이다.\\" -낡은 수첩","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"사냥감이 내쉬는 호흡에 민감해진다. 부상당한 생존자의 신음이 <span class=\\"Highlight1\\">{0}%</span> 더 크게 들리고, 건강한 상태의 생존자의 숨소리가 <span class=\\"Highlight2\\">{1}%</span> 더 크게 들린다. <br>","name":"천식","flavor":"“숨을 죽여, 그녀가 그렇게 만들기 전에.”","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"피할 수 없는 죽음이 한 발자국씩 다가옴에 따라 그들의 용기도 사그라져간다.<br>부상, 빈사 상태나 갈고리에 걸린 모든 생존자 수에 따라 발전기 수리, 파괴 공작 및 토템 정화 속도가 <span class=\\"Highlight1\\">{0}%</span> 느려지며, 최대 <span class=\\"Highlight1\\">{1}%</span>까지 느려진다.","name":"사망 공포증","flavor":"\\"그녀는 우릴 가지고 놀며 고통받는 모습을 즐기지.\\"","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. <span class=\\"Highlight1\\">{0}미터</span> 내에 있는 치료 중이거나, 치료받는 생존자의 오라를 볼 수 있다.<br>","name":"간호사의 소명","flavor":"“그녀에게 각인된 전생의 기억들이, 도움이 필요한 사람들에게 그녀를 이끈다.”","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"당신의 존재만으로도 공포가 스며들게 한다. 공포 범위 내에 있는 생존자들은 수리 또는 치료 하는 동안 스킬 체크가 발동될 확률이 <span class=\\"Highlight1\\">{0}%</span> 증가하고, 스킬 체크의 성공 구간이 <span class=\\"Highlight2\\">{1}%</span> 좁아진다.","name":"불안한 존재","flavor":"\\"우리는 그 존재감에 압도당했어.\\"","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"당신의 강력한 완력은 먹잇감의 당신의 방어기제로도 막을 수 없다. <b>사용된 판자</b>와 부서지기 쉬운 문을 부수는 속도와 발전기를 손상시키는 속도가 <span class=\\"Highlight1\\">{0}%</span> 빨라진다.","name":"짐승 같은 힘","flavor":"\\"그 괴물의 힘은 근육이 아니라 어둠으로부터 나온다.\\"","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"사냥감을 갈고리에 걸 기대감에 달아오른다. 생존자를 들고 있는 동안 이동 속도가 <span class=\\"Highlight1\\">{0}%</span> 빨라지고 공포 범위가 <span class=\\"Highlight2\\">{1}미터</span> 넓어진다.<br>","name":"동요","flavor":"“지금은 우리를 죽이는 것보다 갈고리에 거는 걸 더 즐기고 있어.”","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"포식자","tiers":[["날이 선 감각으로 시간이 지나 희미해진 사냥감의 흔적을 찾아낸다.<br>생존자의 발자국이 <span class=\\"Highlight1\\">약간</span> 서로 가깝게 생성된다.<br><span class=\\"FlavorText\\">\\"무슨 일이 있어도 멈추지 마. 놈에게서 한 발짝이라도 더 멀어져야 해.\\" -낡은 수첩</span>"],["날이 선 감각으로 시간이 지나 희미해진 사냥감의 흔적을 찾아낸다.<br>생존자의 발자국이 <span class=\\"Highlight1\\">적당히</span> 서로 가깝게 생성된다.<br><span class=\\"FlavorText\\">\\"무슨 일이 있어도 멈추지 마. 놈에게서 한 발짝이라도 더 멀어져야 해.\\" -낡은 수첩</span>"],["날이 선 감각으로 시간이 지나 희미해진 사냥감의 흔적을 찾아낸다.<br>생존자의 발자국이 <span class=\\"Highlight1\\">상당히</span> 서로 가깝게 생성된다.<br><span class=\\"FlavorText\\">\\"무슨 일이 있어도 멈추지 마. 놈에게서 한 발짝이라도 더 멀어져야 해.\\" -낡은 수첩</span>"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"마치 사냥개처럼 멀리 있는 피도 냄새로 추적할 수 있다. 신선한 혈흔이 보통 상태보다 <span class=\\"Highlight1\\">상당히</span> 눈에 잘 보이며 <span class=\\"Highlight2\\">{0}초</span> 더 오래 지속한다.<br>","name":"집요한 사냥개","flavor":"“달빛에 빛나는 조약돌처럼, 내 삶도 방울져 떨어지며 쉽게 따라올 수 있는 흔적을 남긴다.”","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"가장 어두운 밤에도 그 눈은 예리한 시야를 잃지 않는다. 시야가 평소보다 <span class=\\"Highlight2\\">{0}도</span> 넓어진다.<br><i>이 능력은 다른 FOV 증가 능력과 중첩되지 않는다.</i><br>","name":"그림자의 피조물","flavor":"“놈의 번뜩이는 눈은, 가장 깊은 어둠을 꿰뚫고 심장을 찌른다.”","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"고통에서 빨리 벗어나는 회복력을 가진다. <b>판자 기절</b>의 지속 시간이 <span class=\\"Highlight1\\">{0}%</span> 감소한다.","name":"인내심","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"안개 속의 다른 괴물들과는 다르게, 당신은 빛에 적응해 견딜 수 있게 되었다. 또한 당신은 손전등, 폭죽, 섬광탄 및 폭풍형 지뢰로 인한 실명에 면역이 되어 있다. 당신을 실명시키려는 생존자의 오라가 <span class=\\"Highlight1\\">{0}초</span> 동안 드러난다.","name":"빛의 피조물","flavor":"\\"이 괴물들은 계속해서 적응하고, 이전엔 볼 수 없었던 기상천외한 특성을 가지고 돌아온다.\\" -비고의 일지","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"발전기가 <span class=\\"Highlight1\\">{0}%</span> 수리되면 큰 소음을 내고 <span class=\\"Highlight2\\">{2}초</span>동안 <b>감지 불가능</b> 상태 이상이 주어진다.","name":"땜장이","flavor":"“힐빌리는 고철을 이용해 인상적인 도구를 만들어 낸다. 창의적인 방식으로 불구를 만드는 도구를...” -수첩","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"한 명의 생존자에게 <b>집착</b>한다.<br>집착 대상이 아닌 생존자를 <i>기본 공격</i>할 때 마다 토큰을 한 개씩 얻는다.<br>토큰 하나당 성공적인 <i>기본 공격</i> 후의 재사용 대기 시간을 <span class=\\"Highlight1\\">{0}%</span>만큼 줄여 준다. 토큰은 중첩 가능하며 최대 <span class=\\"Highlight2\\">{1}</span>개의 토큰을 모을 수 있다.<br>집착 대상을 <i>기본 공격</i>으로 타격하면 <span class=\\"Highlight3\\">{2}</span>개의 토큰을 잃는다. <br>집착 대상이 살해되거나 희생되면 더 이상 토큰을 얻을 수 없다.<br><li><i>살인마는 한 번에 하나의 생존자에게만 <b>집착</b>할 수 있다.</i></li>","name":"가장 좋은 것은 마지막에","flavor":"\\\\“죽음이 당신의 작은 마을에 당도하였군, 보안관.\\\\” –샘 루미스 박사\\"","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"한 명의 생존자에게 <b>집착</b> 한다.<br>집착 대상을 추격하다가 추격 판정이 사라지면 최대 {0}개까지 중첩 가능한 토큰을 얻는다.<br>각 토큰마다 이동 속도가 <span class=\\"Highlight1\\">{1}%</span> 빨라진다.<br><i>기본 공격</i> 또는 <i>특수 공격</i>을 시도하면 1개의 토큰을 소모한다.<br><li><i>살인마는 한 번에 한 생존자에게만 <b>집착</b>할 수 있다.</i></li>","name":"먹이 농락","flavor":"“넌 그들을 속여왔어, 그렇지 않나 마이클? 하지만 난 속일 수 없어.” -샘 루미스 박사","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"한 명의 생존자에게 <b>집착</b>하게 된다.<br>집착 대상은 <span class=\\"Highlight1\\">{0}%</span>의 행동 속도 보너스를 얻어 다른 생존자들을 구출하고 치료할 수 있게 한다.<br>집착 대상이 살아 있고 집착 대상이 아닌 생존자를 갈고리에 걸 때마다 토큰을 얻는다.<br>집착 대상이 살아있는 경우, 집착 대상이 아닌 모든 생존자는 각 토큰마다 수리, 치료, 파괴공작 속도에 대해 <span class=\\"Highlight2\\">{1}%</span>의 패널티를 받는다.<br><li><i>살인마는 한 번에 하나의 생존자에게만 집착할 수 있다.</i></li>","name":"꺼져 가는 빛","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"오라 감지 능력을 차단하는 주술. 주술 토템이 활성화된 동안 생존자를 <i>기본 공격</i>하면 <b>실명</b> 상태 이상을 적용한다. 이 효과는 마지막으로 공격당한 <span class=\\"Highlight1\\">{0}명</span>의 생존자에게 적용된다.<br><i>주술의 효과는 주술 토템이 활성화되어 있는 동안에만 지속한다.</i>","name":"주술: 제3의 봉인","flavor":"“그 손길이 닿으면 마녀의 낙인이 남는다!”","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"생존자의 발전기 수리에 영향을 미치는 주술. 모든 발전기가 <i>주술: 파멸</i>의 영향을 받는다. 발전기 수리가 진행되지 않는 동안 주술로 인해 발전기 수리 진행 상황은 즉시 자동으로 일반 진행 속도의 <span class=\\"Highlight1\\">{0}%</span>로 되돌아간다.<br><br><i>주술의 효과는 주술 토템이 활성화되어 있는 동안에만 지속한다.</i><br>","name":"주술: 파멸","flavor":"“목전에 닥친 저주가 당신의 파멸을 불러온다.”","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"희망으로부터 힘을 얻는 주술. 생존자의 잘못된 희망이 굶주림에 불을 붙인다. 살인마의 <span class=\\"Highlight1\\">24미터</span> 외에서 생존자가 구출될 때마다 삼켜지는 희망이 토큰을 얻는다.<br><li><span class=\\"Highlight3\\">2토큰</span>: 생존자를 갈고리에 건 후 <span class=\\"Highlight3\\">10초</span> 뒤에 <span class=\\"Highlight3\\">10초</span>동안 <span class=\\"Highlight2\\">{0}%</span>의 <b><i>이동 속도 증가</i></b> 상태 효과를 얻는다.</li><li><span class=\\"Highlight3\\">3토큰</span>: 생존자들이 <b><i>약점 노출</i></b> 상태 이상에 걸린다.</li><li><span class=\\"Highlight2\\">5토큰</span>: 손으로 생존자를 살해할 수 있다.</li><br><i>주술의 효과는 주술 토템이 활성화되어 있는 동안에만 지속한다.</i><br>","name":"주술: 삼켜지는 희망","flavor":"\\"아무것도 하지 않으면, 네 손에 그들의 피를 묻히는 거야. 네가 그들을 살리면, 그녀는 더 굶주리겠지.\\"","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"당신은 존재만으로도 공포가 스며들게 한다. 당신의 공포 범위 안에 있는 생존자들은 비효율적으로 행동한다.<br>영향을 받는 생존자들의 아이템 소비량이 <span class=\\"Highlight1\\">{0}%</span> 증가한다.","name":"압도적인 존재감","flavor":"\\"젠장!! 거즈를 떨어뜨렸어!\\"","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"접근은 조심스럽게, 해야 할 때는 무섭게.<br>추격 중 공포 범위가 <span class=\\"Highlight1\\">{0}미터</span> 증가한다. 추격 중이 아닐 경우 공포 범위는 <span class=\\"Highlight2\\">{0}미터</span> 감소하며, 시야 범위는 <span class=\\"Highlight3\\">{1}도</span> 증가한다.<br><i>시야각에 도움을 주는 효과는 중첩되지 않는다.</i><br>","name":"감시와 학대","flavor":"\\"치료 받을 시간이다!\\" -닥터","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"탈출 진행에 대해 증오심으로 불타오른다.<br><b>발전기 손상</b> 행동을 통해 발전기를 과충전시킬 수 있다. 그 후 발전기를 수리하기 시작한 생존자는 <span class=\\"Highlight1\\">엄청나게</span> 어려운 스킬 체크를 수행해야 한다. 스킬 체크를 실패하면 진행도의 <span class=\\"Highlight2\\">{0}%</span> 감소한다.<br>스킬 체크에 성공할 경우, 추가적인 진행도 증가는 없으나 발전기 폭발을 막을 수 있다.","name":"과충전","flavor":"\\"이건 함정이야. 하지만 누군가는 함정에 발을 들여야 해...\\" -닥터","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"당신의 살해 욕구는 엔티티와의 연결이 잠시 끊어져 당신을 완전히 예측 불가능할 상태로 만들 정도로 매우 강렬하다.<br><br><b>감지 불가능</b> 상태 이상은 분노 1단계 달성 후에 주어지며, 분노를 잃으면 해당 상태를 잃게된다.<br><br><li>사냥 항목 행동에서 <span class=\\"Highlight1\\">{0}%</span>의 추가 블러드포인트를 얻는다.</li>","name":"맹수","flavor":"“어디로 갔지?”","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. 지하실에서 <span class=\\"Highlight2\\">{1}미터</span> 떨어져 있을 때, 지하실에 들어간 생존자의 오라가 <span class=\\"Highlight1\\">{0}초</span> 동안 나타난다.<br><i>텃세</i>는 <span class=\\"Highlight3\\">{2}초</span>의 재사용 대기시간을 갖는다.","name":"텃세","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"절망을 흡수할수록 힘이 세지는 주술. 저항할 수 없는 끔찍한 노래를 이용하는 당신의 사냥은 사냥감의 집중을 흐트러뜨린다. 치료 또는 수리 중 생존자들이 스킬 체크에 실패하면 <span class=\\"Highlight1\\">{0}%</span>의 진행도가 추가로 감소한다.<br>생존자가 갈고리에 걸릴 때마다 토큰을 얻는다. 또한 치료와 수리 스킬 체크 경고에 영향을 준다.<br><li><b>1~4 토큰:</b> 스킬 체크 경고음과 스킬 체크 사이의 간격이 줄어든다.</li><li><b>5 토큰:</b> 스킬 체크 경고음이 사라진다.</li><br><i>주술의 효과는 주술 토템이 활성화되어 있는 동안에만 지속한다.</i>","name":"주술: 사냥꾼의 자장가","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"자신의 잔혹한 공격이 야기한 트라우마가 도움을 요청하는 것을 매우 어렵게 만든다.<br>기본 공격으로 빈사 상태가 된 생존자는 <span class=\\"Highlight1\\">{2}미터</span> 밖에 있는 다른 생존자들에게 보이지 않게 된다.<br>기본 공격으로 빈사 상태가 된 생존자는 <span class=\\"Highlight3\\">{0}초</span> 동안 <span class=\\"Highlight2\\">{1}%</span> 더 느리게 기어간다.<br>그동안, 생존자는 <b>실명</b> 상태 이상에 빠진다.","name":"때려눕히기","flavor":"\\"오, 그 총은 정말 아니야. 너무 구식인걸… 받침대도 있어! 잘 봐, 이게 더 나을 거야. 이렇게 하면 더 잘 죽겠지.\\"-누빈스 소이어","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"엔티티와의 강한 유대가 오라를 감지하는 잠재력을 끌어낸다. 생존자를 갈고리에 건 후, 갈고리로부터 <span class=\\"Highlight2\\">{1}미터</span> 밖에 있는 생존자들의 오라가 <span class=\\"Highlight1\\">{0}초</span> 동안 나타난다.<br><li>각 생존자가 처음 갈고리에 걸릴 때마다 누적 가능한 <span class=\\"Highlight3\\">{2}%</span>의 추가 블러드포인트를 얻으며, 최대 <span class=\\"Highlight4\\">{3}%</span>까지 누적된다.<br> 추가 블러드포인트는 희생제가 끝난 후에 지급된다.</li>","name":"바비큐 & 칠리","flavor":"\\"난 죽이는 걸 좋아하지 않아. 하지만 어떤 일들은 좋아하지 않아도 해야만 하지. 네가 좋아해야 한다는 것은 아니란다.\\"-드레이톤 소이어","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"당신의 악랄한 공격에 의한 충격으로 생존자들이 아이템을 떨어뜨린다. 잃어버린 아이템을 다시 줍지 않으면, <span class=\\"Highlight1\\">{0}초</span> 후, 엔티티에 의해 소모된다.<br><span class=\\"Highlight2\\">{1}미터</span> 내에 아이템이 떨어지면 아이템이 흰색 오라와 함께 드러난다. 바닥에 떨어진 아이템의 오라는 엔티티에게 소모될 때까지 점차 빨간 오라를 띄게 된다.","name":"프랭클린의 죽음","flavor":"\\"샐리, 무슨 소리가 들린 것 같아. 멈춰! 멈춰!\\" -프랭클린","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"사냥감을 놓칠 것 같은 압박이 당신을 분노로 타오르게 하고 뜻밖의 동기를 부여한다. 생존자들이 발전기 수리를 완료할 때마다 격분의 힘이 커진다.<br><li>수리한 발전기 하나 당 <span class=\\"Highlight1\\">{0}%</span>의 누적 가능한 보너스가 부여되며 희생제의 남은 시간 동안 들기, 내려놓기, 넘기, 발전기 손상시키기, 판자를 부수는 속도가 상승한다.</li>","name":"격분","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"한 명의 생존자에게 <b>집착</b>한다. <i>기본 공격</i>으로 집착 대상을 공격할 때마다, 출구를 여는 데 걸리는 시간이 <span class=\\"Highlight1\\">{0}초</span> 증가하며, 최대 <span class=\\"Highlight2\\">{1}초</span>까지 증가할 수 있다.<br>집착 대상은 <i>나를 기억하나<i></i>의 영향을 받지 않는다.<br><li>살인마는 한 번에 한 명의 생존자에게만 <b>집착</b>할 수 있다.</i></li>","name":"나를 기억하나","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"피의 교도관은 출구가 개방되는 순간부터 활성화된다. 출구에 머물러 있는 모든 생존자의 오라를 볼 수 있다. <br>피의 교도관이 활성화되어 있는 동안 단 한 번, 생존자를 갈고리에 걸면 엔티티가 모든 생존자가 지나갈 수 없도록 모든 출구를 <span class=\\"Highlight1\\">{0}초</span> 동안 봉쇄한다.","name":"피의 교도관","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"더욱 정교하게 변환 시킨 갈고리가 조작을 알려준다.<br><li>생존자가 파괴공작을 시도할 때 알림을 받는다.</li><li>생존자를 옮기는 동안 <span class=\\"Highlight1\\">{0}미터</span> 내 모든 생존자의 오라가 표시된다.</li>","name":"집행인의 손재주","flavor":"\\"변명 하지말고, 얼버무리지도 마… 우는 것도 안 돼.\\" - 아만다 영","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. 모든 손상된 발전기가 흰색으로 표시된다. 발전기의 수리 진행도가 감소하면 <span class=\\"Highlight1\\">{0}초</span> 동안 노란색으로 표시된다.<br>발전기 수리에서 나는 소음이 추가로 <span class=\\"Highlight2\\">{1}미터</span>까지 들리게 된다.<br>","name":"감시","flavor":"\\"착하게 굴겠니?\\" -아만다 영","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"생존자가 당신으로부터 <span class=\\"Highlight1\\">{0}미터</span> 떨어진 갈고리에서 다른 생존자를 구출했을 때, <i>선택하라</i>가 발동되면, 구출된 생존자는 비명을 지르며 <span class=\\"Highlight2\\">{1}초</span>동안 <b><i>약점 노출</i></b> 상태이상에 걸리게 된다.<br><i>선택하라</i>는 <span class=\\"Highlight3\\">{2}초</span>의 재사용 대기 시간이 있다. ","name":"선택하라","flavor":"\\"어떤 도구가 목숨을 구할 수 있는지 알면 아마 놀랄 거야.\\" -아만다 영","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"생존자를 둘러멜 때 도망치지 못하도록 억세게 움켜쥔다. 생존자의 몸부림으로 인한 흔들림이 <span class=\\"Highlight1\\">{0}%</span> 감소하고, 벗어나는 데 걸리는 시간이 <span class=\\"Highlight2\\">{1}%</span> 증가한다.","name":"강철의 손아귀","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"당신은 존재만으로도 공포가 스며들게 한다. 공포 범위 내에 있는 생존자들의 치료 속도가 <span class=\\"Highlight1\\">{0}%</span> 느려진다.<br>","name":"광대 공포증","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"엔티티와 깊은 유대를 맺고 막강한 힘을 부여받는다. 생존자를 갈고리에 건 후에, 발전기를 손상시키는 즉시 발전기의 총 진행도 중 <span class=\\"Highlight1\\">{0}%</span>를 잃는다. 발전기 손상 액션 후, 일반 발전기 진행 속도가 적용된다.<br><i>깜짝 상자</i>는 생존자를 갈고리에 건 후 <span class=\\"Highlight1\\">{1}초</span> 안에 발전기를 손상해야 발동된다.","name":"깜짝 상자","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"넘기 속도가 <span class=\\"Highlight1\\">{0}%</span> 빨라진다.<br>뭔가를 넘은 후, 엔티티에게 해당 장소를 <span class=\\"Highlight1\\">{1}초</span> 동안 봉쇄해줄 것을 요청한다.<br>오직 1개의 넘은 장소를 봉쇄할 수 있다. 생존자는 봉쇄된 장소를 넘나드는 것이 불가능하다.<br>판자에는 영향을 끼치지 않는다.","name":"눈속임","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"판자를 부술 때마다 엔티티의 분노에 힘을 얻는다. <span class=\\"Highlight1\\">{0}개</span>의 판자를 부수고 다음 판자에 기절 당할 경우, 엔티티가 즉시 그 판자를 부순다.<br>판자로 인한 기절에 대한 면역 효과는 없다. <br>","name":"분노의 영혼","flavor":"“분노는 그녀가 가진 힘의 원동력이야.”","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"희생제에 두 개의 주술 토템이 생성된다.<br>생존자 중 한 명이 두 개의 주술 토템 중 하나를 정화하면 모든 생존자들이 <span class=\\"Highlight1\\">{0}초</span> 동안 <span class=\\"Highlight3\\">약점 노출 상태 이상</span>에 걸리게 된다.<br>해당 기술이 발동하면 남은 하나의 주술 토템은 일반 토템으로 바뀐다.<br>","name":"주술: 원혼이 깃든 대지","flavor":"“그녀의 집안은 완전히 몰락했어.”","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"한 명의 생존자에게 <b>집착</b>한다.<br>한 개의 발전기가 수리 완료될 때마다, 집착자는 당신의 오라를 <span class=\\"Highlight1\\">{0}초</span> 동안 볼 수 있다.<br>한 개의 발전기가 수리 완료될 때마다, 당신은 <span class=\\"Highlight2\\">{1}초</span> 동안 모든 생존자의 위치를 볼 수 있다.<br>모든 발전기가 수리 완료되었을 경우, 집착자는 <span class=\\"Highlight3\\">약점 노출</span> 상태 이상에 걸리며 살인마는 빈사 상태의 집착 대상을 직접 <span class=\\"Highlight3\\">살해</span>할 수 있는 능력을 얻는다.<br><li><i>살인마는 한 번에 한 생존자에게 <b>집착</b>할 수 있다.</i></li>","name":"원한","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"2명 이상의 생존자가 수리하는 <span class=\\"Highlight1\\">{0}미터</span> 범위 내의 발전기는 노란색의 오라를 띈다. 발전기가 처음 표시되면, 불협화음이 발전기에서 큰 소음을 낸다. 발전기의 범위에서 벗어나거나 2명의 생존자가 더 이상 발전기를 수리하지 않는 경우에도 오라는 <span class=\\"Highlight2\\">4초</span> 동안 유지된다.<br>","name":"불협화음","flavor":"\\"야비한 놈은 항상 죽음을 맞이하지. 우리 모두 그걸 알고 있고.\\" -군단","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"생존자를 옮기는 동안에는 빗나간 <i>기본 공격</i>으로 인한 경직이 없으며, <i>기본 공격</i>으로 다른 생존자를 공격하는 데 성공하면 둘러메고 있는 생존자의 몸부림이 <span class=\\"Highlight1\\">{0}초</span> 동안 정지한다.<br>","name":"미친 투지","flavor":"\\"결코 빠져나가지 못할 것이다.” -군단","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"캐비닛을 <span class=\\"Highlight1\\">{0}%</span> 더 빠르게 열 수 있다.<br><br>캐비닛에서 나온 생존자들은 <span class=\\"Highlight1\\">{2}초</span> 동안 약점 노출 상태가 되며고 비명을 지르게 되며 <span class=\\"Highlight1\\">{1}초</span> 동안 그들의 위치가 드러난다.<br>","name":"아이언 메이든","flavor":"“여긴 겁쟁이가 올 곳이 못 되지.” - 군단","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"자신의 기도가 어둠의 힘을 불러내 생존자들의 생존 확률에 영향을 미친다. 희생제가 시작될 때, 자신에게서 가장 멀리 있는 <span class=\\"Highlight1\\">{0}개의 발전기</span>가 엔티티에 의해 <span class=\\"Highlight1\\">{1}초</span> 동안 차단당한다.<br>그동안 생존자들은 이 발전기들을 수리할 수 없다. 영향을 받은 발전기는 흰색 오라로 강조 표시된다.<br>","name":"부정한 개입","flavor":"\\"이 일은 세상 전역에 알려져 신을 부정한 자들을 저주하리라.\\"(아디리스의 석판 3.7)","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"믿음이 없는 자의 울부짖음이 심장을 빨리 뛰게 한다.<br>다른 생존자가 기본 공격으로 빈사 상태에 빠지면, 살인마의 공포 범위 내의 다른 생존자들이 비명을 지르며 살인마에게 <span class=\\"Highlight1\\">{0}초</span> 동안 자신의 위치를 드러낸다.","name":"전염성 공포","flavor":"\\"공포는 타락한 자의 발 밑에 엎드려 우는 신앙심 없는 자를 집어 삼킨다.\\"(찬송가, 11. 4)","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"능력을 사용하는 순간 온 땅에 공포의 소용돌이가 퍼져 나간다.<br><br>한 명의 생존자에게 집착한다. 집착 대상에게 <i>기본 공격</i>이 성공하면 <span class=\\"Highlight1\\">{0}미터</span>의 공포 범위가 <span class=\\"Highlight2\\">{1}초</span> 동안 집착 대상에게 옮겨간다. 그동안 <b>감지 불가능</b> 상태 이상이 주어진다.<br><br>공포 범위를 옮겨받은 생존자 또한 \\"공포 범위 내\\"에 있는 것으로 간주된다.<br><br><li><i>살인마는 한 번에 한 명의 생존자에게만 <b>집착</b>할 수 있다.</i></li><br>","name":"어둠의 헌신","flavor":"“그리고 나의 도착을 거짓으로 알리는 반항적인 비신자에게는 공포가 휩싸이리라.”(아디리스의 석판, 48.9)","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"엔티티의 검은 왕국에서 당신의 예리한 감각은 더욱 날카로워진다.<br><br>오라를 감지하는 잠재력을 이끌어내며, 자신 주변 <span class=\\"Highlight1\\">48미터</span> 내에서 과격한 행동을 한 생존자 전원의 오라가 <span class=\\"Highlight2\\">{0}초</span> 동안 드러난다.<br><br><i>밝은 귀</i>는 <span class=\\"Highlight3\\">{1}초에</span> 한 번만 발동된다.<br>","name":"밝은 귀","flavor":"\\"걱정할 것 없어. 내 인생 전부를 바쳐 오늘을 준비했으니까.\\" –고스트 페이스","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"사악한 계획과 예리하면서 침착한 행동이 엔티티를 깨운다.<br><br>생존자를 들면 엔티티에 의해 모든 발전기가 차단되어 <span class=\\"Highlight1\\">{0}초</span> 동안 수리할 수 없게 된다. 영향을 받은 발전기는 흰색 오라로 강조 표시된다.<br><br><i>전율의 기쁨</i> 은 <span class=\\"Highlight2\\">{1}초</span>마다 한 번만 발동된다.<br>","name":"전율의 기쁨","flavor":"\\"밤은 내 지원군이지, 그리고 이곳의 밤은 끝나지 않아.\\" –고스트 페이스","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"한 명의 생존자에게 <b>집착</b>한다. 그림자 속에 숨어 희생양을 하나하나 제거한다. 집착 대상이 갈고리에 걸리면 <i>은밀한 추격</i>에 토큰을 받으며, 최대 <span class=\\"Highlight1\\">{0}개</span>까지 중첩할 수 있다.<br><br>토큰 하나당 추격 중 공포 범위가 <span class=\\"Highlight2\\">{1}미터</span> 감소한다.<br><br>생존자가 집착 대상을 갈고리에서 구출하면 해당 구출자가 다시 집착 대상이 된다. 집착 대상이 죽거나 제물로 바쳐지면 토큰을 모두 잃는다.<br><br><li><i>살인마는 한 번에 하나의 대상에게만 <b>집착</b>할 수 있다.</i></li><br>","name":"은밀한 추격","flavor":"\\"내가 너희들을 위해 뭘 준비했는지 상상도 하지 못할 거야. 몇 주 뒤면 뉴스에 보도되겠지. 내가 보장해.\\" –고스트 페이스","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"당신의 섬뜩한 존재감이 공기를 메우고 기계를 방해한다.<br><br><i>기본 공격</i>으로 생존자를 빈사 상태에 빠트리면 <span class=\\"Highlight1\\">{0}미터</span> 내의 발전기가 전부 폭발하여 손상되기 시작한다. 서지의 영향을 받은 발전기는 진행도의 <span class=\\"Highlight2\\">{1}%</span>를 즉시 잃게 된다.<li><i>서지</i>는 <span class=\\"Highlight3\\">{2}초</span>마다 한 번씩 발동시킬 수 있다.</li><br>","name":"서지","flavor":"“이 생명체는 전기와 근처의 전자제품에 알 수 없는 영향을 미치는 것처럼 보인다.” -호킨스 국립 연구소","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"당신의 존재감이 사냥감을 괴롭히고 약화시킨다.<br><br>발전기를 수리하는 동안 생존자는 <b>탈진</b> 상태에 빠진다.<br><br>생존자가 발전기를 수리하는 동안 모든 <b>탈진</b> 상태 타이머가 일시 정지하게 된다. 하지만 수리를 끝낸 후, 생존자는 다시 <b>탈진</b> 상태에 빠지며 <span class=\\"Highlight2\\">{1}초</span> 동안 지속된다.<br>","name":"마인드 브레이커","flavor":"\\"실험체의 텔레파시 능력은 명확하며, 주변 사람들에게 공포와 피로감을 느끼게 한다.\\" -호킨스 국립 연구소","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"사냥감이 도망치려고 할 때 당신의 다른 세계가 나타난다.<br><br>발전기가 완성될 때마다 완성된 발전기 <span class=\\"Highlight1\\">{0} 미터</span> 이내의모든 창문과 판자 위치는 다음 <span class=\\"Highlight2\\">{1}초</span> 동안 모든 생존자에게 보이지 않는다. <br><br>그동안 당신은 <i>잔혹한 속박</i>으로 숨겨진 판자 위치의 오라를 감지할 수 있게 된다.<br>","name":"잔혹한 속박","flavor":"“실험체는 주변 물체에 영향을 미칠 수 있는 것으로 보인다. 마치 우리 차원을 대체하는 다른 차원 안에서 또 다른 형태로 존재하듯이 말이다.” -호킨스 국립 연구소","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. 정신이 맑아지고 전장을 파악할 수 있게 된다.<br><br><span class=\\"Highlight1\\">{0}미터</span> 범위 내에 위치한 판자와 부서지기 쉬운 문, 창틀의 오라를 모두 볼 수 있다.<br>","name":"잔심 전술","flavor":"“적의 강함 속에 약점이 있다.” -렌지로의 교리 12:5","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"생존자 한 명에게 고통을 주면 다른 생존자들도 피해를 입는다.<br><br>생존자를 갈고리에 걸면, 부상당한 생존자는 <span class=\\"Highlight1\\">출혈</span> 상태 이상에 걸리고, <span class=\\"Highlight2\\">{0}초</span> 동안 <span class=\\"Highlight1\\">탈진</span> 상태 이상에 걸리게 된다.<br><br><i>피의 메아리</i>는 <span class=\\"Highlight3\\">{1}초</span>의 재사용 대기 시간을 가진다.<br>","name":"피의 메아리","flavor":"“정확하게 적을 찌르면 그의 전우들마저도 아픔을 느낄 것이다.” -렌지로의 교리 6:3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"자신이 받은 피해를 되갚아 줄 기회를 찾는다. 판자 또는 캐비닛으로 자신을 실명시키거나 기절시킨 생존자 한 명을 집착 대상으로 지정한다.<br><br>집착 대상으로 새로 지정된 생존자는 <span class=\\"Highlight2\\">{0}초</span> 동안 <span class=\\"Highlight1\\">인지 불가능</span> 상태 이상이 적용되며, <span class=\\"Highlight3\\">{1}초</span> 동안 대상 생존자의 오라가 보인다.<br><br><li><i>살인마는 한 번에 한 명의 생존자에게만 <b>집착</b>할 수 있다.</i></li><br>","name":"천벌","flavor":"“어리석은 자만이 악마의 얼굴에 침을 뱉고 승리를 단언한다.” -렌지로의 교리 4:9","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"잘 작동하는 장비에 귀를 얻었다.<br><br><i>기본 공격</i>으로 생존자 <span class=\\"Highlight1\\">{0}명</span>을 공격하면 <span class=\\"Highlight2\\">{1}초</span> 동안 <i>기어 헤드</i>가 활성화된다.<br><br><i>기어 헤드</i>가 활성화되어 있는 동안 발전기를 수리하는 동안 스킬 체크에 성공할 때마다 수리되고 있는 한 노란색 오라로 표시된다.<br>","name":"기어 헤드","flavor":"\\"가끔 남자로서 최고의 성과는 그를 무덤에 넣는 것이기도 하지.\\" -교도소장","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"한 명의 생존자에게 <b>집착</b>한다.<br><br>집착 대상을 갈고리에 걸면 <span class=\\"Highlight1\\">{0}초</span> 후에 <i>차단 스위치</i>가 활성화 된다. <br><br>활성화되어 있는 동안 발전기가 완전히 수리되기 전에 수리를 중단하는 모든 생존자는 <i>차단 스위치</i> 효과가 끝날 때까지 엔티티에 의해 발전기에 접근할 수 없게 된다. <br><br>영향을 받은 발전기는 흰색 오라로 표시된다.<br><br><i>살인마는 오직 한 번에 한 생존자에게만 <b>집착</b>할 수 있다.</i><br>","name":"차단 스위치","flavor":"\\"나는 자신의 죽음을 깨달은 남자의 표정을 본 적이 있지.\\" -케일럽 퀸","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"파괴에 의해 발동되는 주술. 당신을 배신한 자들은 모두 벌을 받게 된다.<br><br>일반 토템을 정화하는 모든 생존자는 <span class=\\"Highlight1\\">{0}초</span> 동안 <b>인지 불가능</b> 상태에 빠진다.<br><br>이후 이 토템을 포함해 주술 토템이 정화되면 <span class=\\"Highlight2\\">{1}초</span> 동안 모든 생존자들의 오라를 볼 수 있다.<br>","name":"주술: 응징","flavor":"\\"멍청한 자식, 스스로를 향해 방아쇠를 당겨버렸군.\\" -케일럽 퀸","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"그의 임무에 방해가 되는 자는 가혹한 심판을 받게 될 것이다.<br><br>보호 공격을 받는 생존자는 <span class=\\"Highlight1\\">{0}초</span> 동안 <b>치료 불능</b> 상태에 빠진다.","name":"강압 받은 속죄","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"희생자에게 고통과 처벌의 길을 안내한다.<br><br>발전기를 발로 차면, 발전기의 손상이 멈추거나 생존자가 부상을 당하거나, 또는 어떤 방식으로든 빈사 상태에 빠지게 될 때까지 <b>감지 불가능</b> 상태가 지속된다. 그동안 생존자들에게 발전기의 노란 오라가 드러난다.<br><br>해당 효과는 <span class=\\"Highlight1\\">{2}초</span>마다 사용 가능하다.","name":"고통의 흔적","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"어둠 속에서 서로의 삶이 얽혀진 사람들은 함께 고통받을 운명이다.<br><br>생존자가 살인마로부터 최소 <span class=\\"Highlight1\\">{0}미터</span> 떨어져 있는 또 다른 생존자의 건강 상태를 한 단계 회복시키면, 치료 행동을 하는 생존자가 비명을 지른다. 이 비명으로 인해 생존자들의 위치가 드러나게 되며, <i>죽음 결속</i>이 다음 <span class=\\"Highlight2\\">{1}초</span> 동안 활성화된다. 해당 효과가 활성화되는 동안 만약 생존자가 치료받은 생존자에게서 <span class=\\"Highlight3\\">{2}미터</span> 이상 떨어지면 <b>인지 불가능</b> 상태 효과로 고통을 받게 된다. ","name":"죽음 결속","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"발전기를 발로 찬 후, 향후 <span class=\\"Highlight1\\">{0}초</span> 동안 발전기와 상호 작용하는 첫 번째 생존자는 <span class=\\"Highlight2\\">{1}초</span> 동안 자신의 위치가 드러나며, <span class=\\"Highlight3\\">{2}초</span> 동안 <b>약점 노출</b> 상태 효과에 빠진다.<br><br><i>드래곤의 손아귀</i>는 <span class=\\"Highlight3\\">{2}초</span>의 재사용 대기 시간을 가진다.<br>","name":"드래곤의 손아귀","flavor":"“이 화합물에 이런 잠재력이... 조금의 흔적도 비정상적인 효과를 일으킨다.” —탤벗 그라임스의 일지","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"피가 흘렸을 때, 엔티티의 호의를 얻는 주술.<br><br>생존자가 <i>기본 공격</i>으로 타격 당하면 살인마로부터 <span class=\\"Highlight1\\">{0}미터</span> 내에 있는 판자는 엔티티에 의해 <span class=\\"Highlight2\\">{1}초</span> 동안 고정된다. 해당 판자는 무너뜨릴 수 없다.<br><br><i>주술: 피의 호의</i>는 <span class=\\"Highlight3\\">{2}초</span>의 재사용 대기 시간을 가진다.<br>","name":"주술: 피의 호의","flavor":"“실험이 생물학적 반응이라고 제안하는 것은 상상력의 비약이 아닐 것이다.” —탤벗 그라임스의 일지","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"<i>주술: 불멸</i>이 활성화되는 동안, 일반 토템으로부터 <span class=\\"Highlight1\\">{0}미터</span> 내에 있는 생존자들의 오라가 동안 드러난다.<br><br>다른 주술 토템이 정화되면 해당 토템의 주술은 주술: 불멸 토템으로 옮겨지며, 주술: 불멸은 비활성화된다. 주술을 옮긴 토큰 역시 옮겨진다.","name":"주술: 불멸","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"몇 안 되는 소유물을 지키는 데 일가견이 있으며 비축해둔 것에 생기는 작은 소란에도 민감하다.<br><br>생존가가 상자와 상호작용하거나 자신의 주변 <span class=\\"Highlight1\\">{0}미터</span> 내에서 아이템을 습득하면 생존자의 위치가 드러난다.<br><br>희생제는 환경에 최대 <span class=\\"Highlight1\\">{1}</span>개의 상자가 추가되어 시작된다.","name":"호더","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"당신의 삶은 고되다. 그러니 당신은 다른 이들의 삶도 고되게 만든다.<br><br>발전기를 손상시키면, 최대 <span class=\\"Highlight1\\">{0}</span>대의 무작위 발전기가 손상되기 시작한다.<br><br>영향을 받은 발전기가 다시 수리되더라도 해당 발전기를 수리하던 생존자에게는 어려운 스킬 체크가 주어진다.<br><br><i>억압</i>은 <span class=\\"Highlight2\\">{1}</span>초의 재사용 대기 시간을 가진다.<br>","name":"억압","flavor":"\\"그들이 우리를 지옥에 떨어지게 한 것처럼 그들을 지옥에 떨어뜨릴 거야.\\" —샬롯 데헤이스","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"끝이 다가오면 공세를 시작한다.<br><br>발전기가 완료될 때마다 \'최후의 일격\'의 파워가 증가한다.<br><br>토큰을 하나 소모할 때마다 다음 돌진 공격의 거리가 <span class=\\"Highlight1\\">{0}%</span> 증가한다.","name":"최후의 일격","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"독보적인 쇼맨십은 모두를 눈부시게 한다.<br><br>생존자를 둘러메고 있을 때 공포 범위 내에 있는 생존자들은 <b>약점 노출</b> 상태 효과에 빠지게 된다.<br>생존자들은 공포 범위에서 벗어난 후에도 효과는 <span class=\\"Highlight1\\">{0}초</span> 동안 지속되며, 생존자를 갈고리에 걸거나 내려놓을 때 역시 공포 범위 내에 있는 생존자에게도 효과가 동일하게 지속된다.<br>생존자가 내려놓을 때부터 <i>덕통사고</i>의 재사용 대기 시간 <span class=\\"Highlight2\\">{1}초</span>가 진행된다.<br>","name":"덕통사고","flavor":"\\"이 순간은 즐겨, 아주 몇몇에게만 허락된 시간이라구.\\" — 학지운","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"나보다 많은 숫자의 사람들을 제대로 길들일 수 있는 주술.<br><br>엔티티는 생존자가 <b>빠른</b> 행동으로 창틀을 뛰어넘으면 <span class=\\"Highlight1\\"> {0}초</span> 동안 창문을 막아준다.<br><br><i>주술의 효과는 주술 토템이 활성화되어 있는 동안에만 지속됩니다.</i><br>","name":"주술: 군중 통제","flavor":"\\"너에겐 통제할 능력이 없어. 너희 같은 사람들은 절대 가질 수 없지.\\" — 학지운","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"VIP 룸에는 아무나 들일 수 없다.<br><br>첫 번째 생존자를 갈고리에 걸면 <i>출구 없음</i>은 토큰을 획득하다.<br>마지막 발전기가 수리되면 엔티티에 의해 <span class=\\"Highlight1\\">{0}초</span> 동안 양쪽 출구 스위치가 막히며, 살인마가 보유한 토큰의 수만큼 추가 <span class=\\"Highlight2\\">{1}초</span> 동안 막힌다.<br>","name":"출구 없음","flavor":"\\"피가 흐를 때 나는 소리 같네... 다시 한번 더 들려줘.\\" — 학지운","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"목표물을 추적하고 제거하도록 설계되었다.<br><br>희생제 시작 시, 모든 생존자의 오라가 <span class=\\"Highlight1\\">{0}초</span>동안 드러난다.<br><br><span class= \\"FlavorText\\">\\"...원하는 것이 무엇인지 알고 있으니, 그것을 가질 때까지 멈추지 않을 거야.\\" —카를로스 올리비에라<\\\\span>","name":"치명적인 추적자","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"당신은 팀원 한 명을 잔인하게 다루어 극심한 공포를 일으키는 방법을 알고 있다.<br><br>기본 공격으로 생존자를 부상 상태에 빠지게 만들 때마다, 부상 상태에 빠진 모든 생존자를 <span class=\\"Highlight1\\">{0}초</span> 동안 <b>인지 불가능</b> 상태 효과에 빠지게 만든다.<br><I>히스테리</i>는 <span class=\\"Highlight2\\">{1}초</span>마다 사용 가능하다.<br><br><span class= \\"FlavorText\\">\\"미안하네, 내가 좀 흥분했어. 뭘 어떻게 해야할지 몰랐네.\\" —로버트 켄도","name":"히스테리","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"Ne-알파 기생체는 함정을 만드는 데 필요한 정보와 의식을 제공한다.<br><br>발전기를 발로 차면, 발전기의 오라가 노랗게 표시된다. 기본 공격으로 생존자를 빈사 상태에 빠뜨리면, 영향을 받은 모든 발전기가 폭발하며 진행 상항이 <span class=\\"Highlight1\\">{0}%</span> 퇴보되며 이는 발전기의 오라가 사라진다.<br>발전기가 폭발할 때 발전기를 수리했던 모든 생존자는 비명을 지르며 <span class=\\"Highlight2\\">{1}초</span> 동안 불구화 상태 효과에 빠진다<br>.<i>폭발</i>은 <span class=\\"Highlight3\\">{2}초</span>의 재사용 대기 시간을 가진다.<br><br><span class= \\"FlavorText\\">\\"무기를 사용할 수 있다고?\\" —질 발렌타인","name":"폭발","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/ko/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"에반 맥밀란은 자신의 아버지, 아치 맥밀란을 우상으로 여겼다. 막대한 재산의 상속자이기뿐만 아니라, 그의 아버지가 사유지를 운영하는 방법 때문이었다. 에반은 자신의 밑에서 일하는 노동자들을 통제하고 감시하는 역할을 맡았다. 아버지와 아들의 통제 아래에서 맥밀란 사유지의 생산성은 항상 높았다. 하지만 아치 맥밀란의 건강과 정신 상태가 점점 나빠지자, 에반은 아버지의 재산을 노리는 무리로부터 아버지를 보호해야 했다. 아버지가 무엇을 요구하든지 에반은 따를 것이다. <br><br>마침내 아치가 완전히 이성을 잃었을 때, 에반은 현대 역사상 가장 최악의 대량 학살을 저지르고 말았다. 에반은 수백명의 노동자들을 어두운 광산에 밀어 넣고, 폭파했다. 맥밀란 사유지에서 일어난 이야기는 재산과 힘을 가지고 있는 자들이 그릇된 생각을 가지고 있으면 어떤 비극이 벌어지는지 잘 보여주고 있다. 그 이후, 에반의 아버지가 자신의 창고 지하실에서 죽은 채로 발견되었다는 것 말고 다른 에반 맥밀란에 대한 기록은 전해지지 않는다.<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"필립 오조모는 새로운 시작을 하겠다는 희망을 가지고 이 나라에 도착했으며, 운 좋게도 오토헤븐 폐차장에 취업해 생계를 꾸려나가고 있었다. 무슨 연유에선지 그의 직장은 뇌물을 받은 경찰의 묵인하에 영업하고 있었지만, 오조모는 신경 쓰지 않았다. 그의 모국에서도 많은 범죄를 봐 왔기 때문에, 자신과 관련이 없다면 상관하고 싶지 않았다. 오조모는 그저 차를 고치고, 분쇄하는 것에 집중했다. 이것들은 그가 매우 잘하는 일이었다. 차를 넣으면, 작은 사각형 모양의 고철이 나온다. <br><br>어느 흐린 날, 오조모는 아직 분쇄되지 않은 차에서 피가 흐르고 있는 것을 발견했다. 거기엔 손발이 묶인 채 공포에 질려 벌벌 떨고 있던 청년이 있었다. 무슨 일인지 영문을 모르던 오조모는 그 남자를 풀어줬으나, 그의 상사는 도망치던 남자를 붙잡아 목을 벴다. 오토헤븐 폐차장은 의뢰를 받은 이들을 증거 없이 처리하는 곳이었고 오조모는 자기도 모르게 \'처형자\'로 일해왔다는 충격적인 사실을 전해 듣는다. 분개하여 이성을 잃은 오조모는 그가 여태까지 했던 것처럼 그의 상사를 차에 집어넣어 천천히 분쇄기로 갈아버렸다. 아자로프의 신체 일부가 기계에 걸리자 오조모는 아자로프의 머리를 척추째로 뽑아버렸고, 그 이후 그곳을 떠난 오조모의 모습을 본 이는 아무도 없었다고 한다.<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"부유한 대지주인 맥스와 에블린 톰슨의 아들로 태어난 힐빌리는, 부모가 원하지 않는 자식이었으며, 부모는 이름도 지어주지 않았다. 아들의 존재를 부끄러워했던 부모에 의해 방에 감금되었으며, 벽에 난 작은 구멍으로 음식을 받아먹어야만 했다. 그 소년이 마침내 탈출하였을 때, 자신을 키워주는 대신 고문했던 부모를 잔인하게 도살하여 복수했다. <br><br>하지만 그 후에도 그의 광기는 멈추지 않았고, 농장에서 살면서 가축들을 도살했다. 결국 그는 자신의 족쇄로부터 탈출해, 옥수수밭을 달리며 눈앞에 보이는 모든 것을 잔인하게 학살했다. 이후 고문받아 내장이 모두 꺼내진 동물들의 사체가 농장 전역에서 발견되었지만, 맥스와 에벌린의 시체는 행방을 알 수 없었다. 거대했던 콜드윈드 농장은 황폐해졌고, 사람들은 토지를 분할 및 매각하려 했지만, 구매하려는 구매자는 나타나지 않았다. 더운 여름밤 들렸던 소리는 아마도 전기톱 소리였을 것이다.","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"샐리 스미손은 아이들과 그녀의 남편 앤드류와 그가 지은 통나무 집에서 함께 행복하게 사는 꿈을 가지고 이 마을에 왔다. 그리고 어느 날 앤드류와 일하던 감독이 샐리를 찾아왔고, 그 후로 샐리는 전혀 다른 삶을 살게 되었다. 다른 곳에서 일을 찾지 못했고, 결국 크로터스 프렌 정신병원에서 일하게 됐다.  샐리는 밑바닥에서 시작하게 됐으며, 매우 힘들게도 밤에 일해야만 했다. 수십 년 동안 끔찍하고 잔혹한 것들을 견뎌내야만 했으며, 그 때문에 정신은 점점 황폐해져만 갔다. 마침내, 한계에 다다른 샐리는 결국 광기에 사로잡혀, 정화하고자 하는 갈망에 몸을 내맡겼다. 9월 어느 날 아침 정신병원을 방문한 당직자는 침대에 눕혀진 50구의 환자들의 시신과 4구의 직원들의 시신을 발견했고, 생존자는 텅 빈 눈으로 몸을 앞뒤로 흔들고 있는 샐리 뿐이었다. 샐리는 구급차로 이송되었으나, 그 구급차는 병원에 당도하지 않았다. 그 차는 숲 근처에서 사고가 나 부서진 채로 발견되었고, 차 안의 모든 사람은 죽어있었다. 그리고 샐리는 어디에서도 발견되지 않았다.","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"안나가 걸음을 떼기 시작했을 때, 안나의 어머니는 가혹하고 고독한 북부의 숲에서 살아남는 법을 가르쳐주기 시작했다. 이와 같은 매우 위험한 오지에서의 생활은 기술과 적응이 필요했다. 해가 지고 일을 하기가 어려워지면, 안나의 가족은 가혹한 겨울도 견딜 수 있는 견고한 자신들의 집으로 들어왔다. 벽난로 옆에서 안나는 어머니가 만들어준 나무 장난감과 가면들 사이에서 어머니의 팔을 베고 자장가를 들으며 행복한 꿈을 꾸었다. 곧 일어날 모든 것을 바꿀 참사에 대해 아무것도 모른 채.<br><br>안나와 어머니는 숲속에서 커다란 엘크를 쫒고 있었다. 위험한 사냥감인 줄은 알고 있었지만, 이번 겨울은 유달리 혹독하고 식량은 동이 나고 있었다. 굶주림은 숲의 어떤 생물보다 그들을 두렵게 했다. 어떠한 경고도 없이, 엘크는 뒤로 돌더니 안나에게로 돌진했다. 거대한 짐승의 발이 지면에 내리 찍힐 때마다 온 세계가 흔들리는 것 같았고, 안나는 공포에 온몸이 마비되고 말았다. 엘크의 눈에 깃든 살의가 보일 만큼 가까워졌을 때 안나의 어머니가 도끼를 들고 그 앞을 가로막았다. 엘크의 뿔에 받혀 안나의 어머니가 공중으로 떠올랐고, 오싹한 비명이 입에서 새어나왔다. 안나의 어머니는 모든 힘을 다해 엘크의 머리에 도끼를 계속해서 휘둘렀고, 엘크는 그녀를 떨쳐내려고 흔들었다. 뚝하는 소리와 함께, 엘크의 뿔이 부러졌고 안나의 어머니는 벗어났다. 야수는 쓰러졌다.<br><br>어머니의 쓰러진 몸을 일으켜 세우기에 안나는 너무 작았기에 그 자리에 주저앉았다. 죽어가는 엘크의 울음소리가 들려오는 와중에 어머니는 안나에게 좋아하는 자장가를 불러주었다. 안나가 고요한 숲에 혼자 남을 때까지.<br><br>집으로 돌아온 안나는 생존을 위해 본능을 따라 야생과 하나가 되었다. 사냥을 연습하며 위험한 포식자가 되어갔고 인간성을 서서히 잃어갔다. 영토를 넓히고 다람쥐와 토끼, 밍크와 여우, 심지어 늑대와 곰 같은 더 위험한 동물들까지 사냥했다. 아무것도 모르는 여행객이 그 숲을 통과했을 때, 안나는 새로운 먹잇감인 인간을 발견했다. 그 불행한 영혼들은 다른 동물들처럼 도살되었다. 안나는 희생자의 물건과 형형색색의 옷, 특히 장난감을 모으는 것을 좋아했다. 그러나 차마 어린 소녀들은 죽일 수 없었다. 안나는 소녀들을 숲속 깊은 곳의 오두막으로 데려갔다. 안나에게 그 아이들은 소중했고, 안나에게 마음속 깊은 곳 뭔가를 깨웠다. 안나는 가족이 된 소녀들과 친밀해지기를 원했다. 훔친 나무 장난감, 인형과 안나는 읽을 수 없는 책들 사이에서 소녀들은 벽에 거친 끈으로 단단히 묶였다. 소녀들을 돌아다니게 둘 수는 없었다. 이렇게 하지 않으면 틀림없이 밖으로 나가서 죽게 될 것이다. 그러나 소녀들은 항상 쇠약해져 굶어 죽거나 추위, 병으로 죽었고, 이런 소녀들의 죽음은 언제나, 안나는 슬픔과 광기에 깊이 빠져들게 했다. 그 광기는 안나가 마을을 습격해 무고한 가족들을 도살하고 그들의 딸을 납치하게 했다. 안나는 두려워하는 소녀들을 진정시키기 위해 어머니가 수년 전에 만든 동물 가면 중 하나를 썼다. 마을 사람들은 붉은 숲에서 남자들을 죽이고 어린 소녀들을 먹는 반인반수의 여사냥꾼의 전설을 퍼뜨렸다. <br><br>전쟁이 결국 그 숲까지 퍼지게 되었다. 독일군은 러시아 제국을 무너뜨리기 위해 행진을 시작했다. 이 암흑기 동안, 더는 여행객들이 존재할 수 없었다. 마을 사람들은 집을 버리고 떠났고 티끌 하나 발견되지 않았다. 오직 도끼로 거칠게 난도질 된 군인들의 시체만이 발견되었을 뿐이다. 기이하게 한 무리의 군대가 모두 사라지기도 했다. 전쟁이 끝나고, 여사냥꾼의 소문도 같이 잊혀져 붉은 숲에 집어삼켜졌다.","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"몇몇 인간은 단지 타고난 본성이 악하다. 본성에 정제된 순수한 형태의 악을 품고 있다. 마이클 마이어스는 이러한 부류의 사람 중 하나다. 마이클에게 다른 사람에게 고통을 주는 것은 잘못된 일이 아니었으며, 그것이야말로 정확하게 자신이 찾고 있던 일이었다. 그러나 이러한 악으로 마음이 가득 찬 사람들은 살아가는 것조차 힘들다. 마이클과 다른 사람들의 차이점은 문제를 해결하는 방법에 있었다.<br><br>마이클은 다른 사람을 죽이는 일로 내면의 평화를 찾았다. 그가 자기 누나의 목숨을 앗아갔을 때, 경찰은 사건 현장에서 광대 분장을 하고 있던 말 없는 소년을 찾아냈다. 만일 누군가가 커지는 불길을 본다면, 거기에 가솔린을 들이붓지는 않는다. 그러나 그 소년의 악마 같은 본성을 알 수 없었던 경찰들의 행동은 불길에 가솔린을 들이붓는 것과 같았다. 마이클을 구한다는 이유와 함께 정신병원으로 보냈기 때문이다. 성공적이지 못한 치료와 매일 밤 들리는 비명은 단지 마이클을 더 내향적이고 정신적으로 혼란스럽게 만들 뿐이었다. 사람들은 마이클이 곧 잊히고 묻히기를 바랬다. 하지만 그때... 마이클이 탈출했다.<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"리사 셔우드는 친절한 사람들과 오래된 전통이 있는 조용한 마을에서 자랐다. 리사는 특히 주술에 관심이 많았으며 노인들은 리사에게 행운과 안전을 상징하는 문양을 그리는 법을 알려주었다. 어느 날 밤, 숲을 지나 집에 가던 중, 전조도 없이 매우 큰 폭풍을 만난다. 어둡고 축축한 숲속에서 리사는 발을 헛디뎌 넘어지고 머리를 세게 부딪혔다. 희미해지는 의식 속에서 리사가 마지막으로 본 것은 사악하고 굶주린 습격자들이었다.<br><br>그들은 리사를 어느 침수된 지하실에 감금했다. 어둠 속에서, 리사는 커다란 상처가 파리 떼에 뒤덮인 다른 마을 사람들을 볼 수 있었다. 식인 행위가 시작되고 녹슨 칼과 지저분한 이빨이 그들의 몸을 난도질하며 대부분의 사람은 살아남지 못했지만, 리사는 어떻게든 살아남았다. 굶주림 끝에 리사의 팔은 족쇄를 헐렁하게 할 정도로 여위었다. 팔을 잡아당기자 금속이 근육을 찢었고, 마침내 풀려났다. 리사의 살에서 누런 고름이 비어져 나왔고, 썩어가는 상처 아래로 뼈가 보였다. 리사의 목숨이 꺼져가고 있을 때, 혼미한 의식 속에서 리사는 집과 마을 사람들을 생각했다. 그리고 마을 사람들이 가르쳐준 문양을 그렸다. 그때 어두운 굶주림이 리사 안에 섞이며 그것이 피를 바랬고, 리사는 복수하기로 결심했다. <br>경찰이 마침내 늪지대의 낡은 집을 찾아냈을 때, 그 마을에 살던 사람들의 시체는 게걸스럽게 먹혀 심하게 훼손되어 있었다. 전통적인 문양들이 바닥에 피로 휘갈겨져 있었고, 리사의 시체는 끝내 발견되지 않았다.<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"살인마들이 살인하는 이유는 그들의 병든 마음때문일까, 아니면 다른 외부의 요인으로 인한 것일까\' 라는 주제는 항상 논쟁의 대상이었다. 그러나 한 살인마에게는 본능과 외부의 요인, 둘 다 연관이 있었다.<br><br>레더페이스가 살인을 하는 이유는 남보다 우위를 차지하기 위해서도, 쾌락을 위해서도, 머릿속에서 들리는 목소리 때문도 아니다. 두렵기 때문이다. 다른 사람이 자신을 해칠까 두려워서, 가족이 자신을 불쾌하게 생각할까 봐 두려워서, 인육을 먹겠다는 의지가 발각될까 두려워서이다.<br><br>자신이 들은 대로 행동하고, 자신의 가족은 자신을 사랑하니까 중요한 건 그뿐이다. 외부인은 위협이며, 위협은 해결해야 한다.<br><br>멋대로 집에 들어온 아이들처럼 말이다. 꼭 자신의 집처럼 들어온 아이들 말이다. 집을 구경하고, 가족의 비밀을 찾으려고 했다. 하지만 레더페이스가 해결했고, 가족을 지켰다. 배운 대로.<br><br>보호자뿐만 아니라 다른 역할도 많으며, 그 역할에는 각자의 얼굴이 있다. 저녁을 준비하며, 가족을 돌보고, 식사할 때는 제대로 된 복장을 갖춘다. 원래는 할아버지와 할머니가 레더페이스를 돌봐줬지만, 할아버지는 늙었고 할머니는 거동을 못 하게 된 지가 오래니 레더페이스와 그의 형제가 그 역할을 이어받아야 했다. 레더페이스에게는 가족이 전부이다. 가족을 지키고 안전하게 해줘야 한다.<br><br>하지만, 최선을 다했음에도 한 여자아이가 도망치고 말았다. 막으려고 했지만 실패했고, 최대한 빨리 쫓아가려고 했으나 그 아이를 돕는 자가 있었다. 트럭을 몰던 또 다른 외부인이었다. 사악한 트럭 기사는 레더페이스의 형제를 동물이라도 된다는 듯이 깔아뭉갰다. 분노한 레더페이스가 놈을 덮쳤고, 톱으로 가족의 복수를 하려 했으나 트럭 기사는 재빨랐다. 그는 레더페이스를 쓰러뜨리고 톱을 빼앗아 레더페이스에게 들이댔다.<br><br>외부인들이 사라져가는 걸 보자 분노, 슬픔, 고통이 찾아오고 자신의 가족은 이제 어떻게 될지 우려가 되었다. 놈들은 분명히 경찰을 대동해 다시 찾아올 테고, 경찰은 형제와 할아버지를 데려갈 게 뻔하다. 모두를 데려가면 레더페이스는 어떻게 될까? 명령을 받지 않으면 자신은 시들어 죽게 될 것이다.<br><br>자신의 세상이 무너진 레더페이스는 원을 그리며 돌면서 톱을 휘둘렀고, 자신을 둘러싼 무수히 많은 외부의 위협과 싸우고자 했다.<br><br>하지만 또 다른 기분이 엄습했다. 알아채지도 못한 사이에 한기가 돌았다. 외부인이 자신에게 무슨 짓을 하든 더 나쁜 일이 있다는 걸 깨달았다. 그림자 속에 숨겨진 더 큰 일이. 전과는 비교할 수 없는 공포에 휩싸이게 됐다. 하지만 가족에게서 느꼈던 공포처럼 편안했다. 가족을 실망시켰다는 공포 말이다.<br><br>익숙하지만 알수 없는 기분이 들었고, 어떻게 해야 할지 본능적으로 알았다. 레더페이스의 가족에게 일어났던 일처럼 실패해서는 안 된다. 외부인이 다시 올 테지만 자신의 능력으로 위협을 물리칠 것이다. 비명을 지르겠지만 조용하게 만들 수 있다. 톱이 돌아가는 소리만 남을 때까지.<br><br>외부인이 오기를 기다린다.","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"심리학에 특출한 재능을 보였던 헤르만은 CIA가 주도하는 특별한 뇌과학 프로그램에 발탁되어 래리 기념 연구소라고 알려진 비밀 시설로 가게 되었다. 여기서 헤르만은 오토 스템퍼 박사를 만나게 되며, 그의 지도아래 연구소로 보내진 스파이들에게서 정보를 캐내기 위해 매우 잔인한 요법들을 시행하기 시작했다. 그는 점점 더 난폭한 전기충격요법을 사용하기 시작했고, 국가에 위협을 끼칠 수도 있는 많은 중요한 정보들을 빼내었다. <br><br>시간이 흘러, 헤르만은 닥터라는 이름을 얻었으며, 아무도 그가 의사 면허증이 있는가 또는 정보를 실토한 스파이들은 어떻게 되는가에 대한 의문을 가지지 않았다. 마침내 래리 기념 연구소의 무서운 진실이 밝혀졌다. 직원, 환자들, 그리고 죄수들은 모두 다양한 종류의 두뇌 외상으로 죽은 채 발견되었다. 그중에는 오토 스탬퍼 박사의 시체도 있었지만, “닥터” 헤르만 카터는 끝내 발견되지 않았다.<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"그가 살아있을 때에도, 프레디 크루거는 그의 진정한 모습을 아는 사람들에게는 악몽같은 존재였다. 따뜻함과 친근함의 가면 뒤에 숨은 프레디의 실제 성격은 그의 피해자들만 알고있었다. 마침내 사람들이 피해자의 말에 귀기울였을때, 스프링우드의 부모들은 프레디를 잡아 그들의 손으로 프레디를 심판하였다. 그들은 그 날의 화재가 괴물을 없애고, 아이들을 안전하게 해줄거라고 믿었다. 하지만 그처럼 강한 악은 살아남고 말았다. <br>시간이 흐르고 공포가 희미해져가자 희생자들은 그를 완전히 잊게 되었다. 하지만 프레디가 돌아왔고, 꿈은 다시 악몽이 되었다.<br>프레디는 그를 화나게 한 사람들에게 자신의 분노를 집중했고, 낸시 홀브룩에게 집착하기 시작했다. 하지만 그는 그녀의 힘과 지략을 과소평가했다. 그녀의 친구인 쿠엔틴과 함께, 그녀는 프레디를 약화시켜 한번 더 쓰러뜨리는데 성공했다.<br>하지만 죽음은 저번에도 프레디가 죽기를 원하지 않았는데 왜 그가 지금 죽을것이라 생각하는가?그는 다시 나타났고, 복수를 다짐했다. 이제 그의 분노는 낸시를 향한 복수를 방해했던 남자아이를 향했다.<br>프레디는 쿠엔틴의 꿈에 매일 밤마다 나타났고, 그가 체력에 한계를 느낄 때까지 공격해왔다. 적당한 때가 되자, 쿠엔틴은 프레디에 의해 베드햄 유치원의 어두운 곳으로 끌려오게 되었다. 이 곳이 그의 마지막 복수를 할 장소였다.<br>프레디는 유치원의 복도를 따라 소년을 미행했다. 그는 서두르지 않고, 사냥의 매 순간을 음미했다. 그가 가장 즐긴 것들은 공기 속의 땀 냄새, 공포에 질린 거친 숨결이였다. 그것들은 모두 그의 장난감이였다.<br>긴 복도 끝에 소년이 있었다. 너무 무섭고 지쳐서 더 이상 도망칠수 없었을까? 운명을 받아들인 걸일까? 프레디가 팔을 벌리고 손톱을 벽에 긁으며 다가왔다. 손가락 끝은 파이프를 훑었고, 금속성 소리는 소년의 공포감만 더할 뿐이었다.<br>불꽃이 바닥과 바닥을 뒤엎은 액체에 튀었다. 푸른 화염이 방을 재빠르게 집어삼켰다. 프레디가 불속에서 분노에 차올라 뛰쳐나올때, 소년은 도망쳤다. 그들이 프레디의 지하실에 도달할때까지 방들과 벽들은 그들을 빠르게 지나치며 흐려져갔다. 탈출구는 없었다.<br>프레디는 천천히 소년에게 다가갔다. 소년의 공포는 프레디가 알아챌 정도로 커졌지만, 소년의 눈은 거의 존경스러울 정도로 반항적인 증오로 불타올랐다. <br>프레디가 손톱을 들어올렸다.<br>그리고 프레디는 무언가 다른 것을 느꼈다; 오래되고, 강력하고 어두운 것을. 독기가 그를 감쌌고 유일하게 느낄 수 있는 감각은 멀리서 구부러지고 삐걱거리는 목재 기둥의 소리 뿐이었다. 메아리가 울려퍼졌다. 언어와 순수한 공포 사이에는 무언가 신비하고 알 수 없는 것이 있었다.<br>떨어지고 회전하는 순간이 이어졌고 프레디는 학교로 돌아왔다. 하지만 프레디의 학교가 아니었다. 생긴 것은 똑같았지만, 뭔가 다른 느낌이 들었다. 그의 힘은 어떤 면에서는 절제되었고 다른 누군가에게 집중되어있었다. 소년은 더이상 보이지 않았지만, 다른 희생양이 복도로 걸어왔다. 어떤 이들은 하찮아 보였다; 다른 이들은 그의 새 장난감이 될 것이다. 모든 것이 그의 손톱 앞에 쓰러질 것이니.","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"흔히 직쏘로 잘 알려진 존 크레이머는 그들 부부 사이에는 새로운 시작을, 아이에게는 멋진 삶의 시작을 선사하고 싶었기에 풍요와 부활을 상징하는 돼지의 해에 아이를 갖기로 계획했고, 아이는 그 해에 태어나기로 되어있었다. 그러나 이 계획은 한 마약 중독자가 마약을 훔치기 위해 아내의 클리닉에 침입했을 때 산산이 조각났다.<br><br>아들을 죽게 만든 그 사건이 일어난 뒤 존은 마침내 그 마약 중독자를 찾아냈다. 그리고 존은 그를 첫 번째 실험 대상으로 삼았다. 이제 그에게 있어서 \'돼지(피그)\'의 의미는 영원히 바뀌어 버렸다. 그것은 죽음의 문턱에서 살아남거나 자신을 스스로 극복하지 못하는 이상 우리는 단지 고깃덩이에 불과하다는, 존의 내면에 존재하는 추악한 재앙을 불러일으키는 매개체를 의미하게 되었다. 그렇게 피그는 그들의 실험체를 운반하는 직쏘의 수하가 되었다. 그리고 충성스러운 피그는 직쏘의 제자로 \'부활\'해 새로운 삶을 살게 되었다.<br><br>아만다 영의 경우에도 그랬다. 아만다의 인생은 자신과 주위 사람들에게 해만 끼치는 삶이었지만, 그런 끔찍한 삶은 직쏘를 만났을 때, 그리고 직쏘의 실험에 참여했을 때 변화했다. 이제 아만다는 자신의 인생이 가치가 있는 것이라고 생각하게 되었다. 아만다는 암이 직쏘를 잠식했을 때 그의 자리를 이어갈 준비를 하며, 그의 실험에 헌신하게 되었지만, 존의 죽음이 임박하고, 실험체들은 게임의 시련 속에서 다시 태어나거나 자신을 구할 수 없다는 믿음 때문에 점점 더 존에게 의존적으로 변해갔다. 이런 아만다를 본 존은 아만다를 구원할 다른 게임과, 다른 기회를 보여주었지만, 그런데도 아만다는 자신의 분노와 질투가 자신을 지배하도록 내버려두었다. 아만다는 실험에 실패했고, 총에 맞아 그녀의 삶을 마감했다.<br><br>타일 바닥에 피를 흘리며 죽어갈 때, 어둠이 나무 삐걱대는 소리와 함께 뭔가가 아만다의 시야를 채워갔다. 아만다는 숲속에 있었으며, 다시 \'피그\'의 눈으로 세상을 보게 되었다. 나무들이 아만다를 에워싸고 나뭇가지가 마구 할퀴어댔다. 공포의 물결은 아만다를 뒤덮었고 마스크 안에서 울리는 자신의 숨소리를 들을 수 있었다.<br><br>이런 꼴로 이런 곳에서 삶을 보내는 저주를 받은 것일까? 아니면 이것은 다른 실험일까? 아마 자신은 전혀 실패하지 않은 것이 아닐까? 존은 언제나 모두에게 한 걸음 더 나아가고, 모든 가능성에 대비하라고 가르쳤기에, 그는 아만다를 포기하지 않았던 것이 아닐까?<br><br>직쏘는 죽었지만, 아만다에게 다른 것을 전해주었다. \'피그\'로써의 삶 말이다. 궁극적으로 아만다는 자신의 결정은 모두 옳았다고 여겼다. 게임의 시간은 아직 끝나지 않았다. 그들 누구에게도 구원의 기회는 존재하지 않는다. 저들은 모두 고깃덩이이며, 고깃덩이는 죽어야만 한다.","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"1932년 케네스 체이스가 태어날 때 난산으로 어머니가 사망했다. 이 사건은 케네스와 그의 아버지 사이에 엄청난 거리가 생기는 계기가 되었고 그 거리는 다시는 좁혀지지 않았다. 케네스가 자라면서, 아버지의 분노도 커져만 갔고, 그는 습관적으로 술을 마시게 되었다. 케네스가 학교에 다닐 즈음부터 그들은 거의 완전히 떨어져서 살게 되었다.<br><br>학업적인 면에서 케네스는 평범했지만, 특출난 운동 솜씨를 보였다. 그는 키 크고 힘이 세게 자랐고, 달리기 운동에서 엄청난 활약을 보였지만 팀 운동을 함께 하자는 제안은 항상 거절했다.<br><br>학교에서부터 집으로 걸어올 때 가끔 땅에 있는 깃털을 발견하곤 했고 수집품으로서 그것들을 침대 밑의 담배 박스에 넣어서 모으기 시작했다. 그의 아버지는 항상 일하거나 술을 마시고 있었기에 케네스는 오랜 시간을 혼자 보내야만 했고, 케네스는 입술에 깃털들을 비빌 때 느껴지는 규칙적인 깃털의 결들과 부드러움에 사로잡혔다. 집 정원에 있는 먹이통에 날아오는 새들을 바라보며, 케네스는 그 새가 얼마나 부드러울지 상상했고 한 마리를 잡기로 결심했다. 지역의 치과 의사에게 환심을 사서 소량의 마취제를 구했다. 마취제를 이용해서 그는 먹이통에 함정을 설치했고 그것이 그가 새를 만질 수 있는 시간을 충분히 벌어줄 거라고 생각했다.<br><br>몇 번의 실패 끝에, 그는 결국 개똥지빠귀 한 마리를 잡을 수 있었다. 새를 손에 들었을 때, 하나의 생명이 더 살아갈지의 여부가 자신의 손에 달려있다는 사실에 갑자기 쾌감을 느꼈다. 원래는 새가 마취에서 풀리면 새를 놓아줄 생각이었다. 하지만 새의 눈이 뒤집어지고 의식이 돌아와서 더욱 몸부림칠 때, 케네스는 새를 더 세게 움켜쥐었다. 케네스의 손가락이 새의 가슴 깃털이 움직이지 않을 때까지 새의 목을 감싸안고 조였다. 깃털만 남기고 나머지는 버렸고, 예전에 모은 수집품을 \'가짜\'로 치부해버리고 새로운 수집품을 모으기 시작했다.<br><br>1940년대 말, 케네스는 학교를 떠나 지역의 작은 식당에서 빈 그릇을 치우는 사람으로 일하기 시작했다. 이제 다람쥐, 너구리, 그리고 개와 같은 더 큰 수집품들을 모으기 시작했다. 수집품마다 투여할 마취제의 양을 조절하는 실력도 엄청나게 늘었다.<br><br>1954년 초, 젊은 남성이 실종되었고 실종자를 찾기 위해서 마을 전체가 뒤집어졌다. 몇 달 뒤, 케네스의 아버지는 집 밑의 좁은 공간에서 일하다가 담배 박스를 발견했다. 박스를 부숴서 열었고 깃털들, 동물의 발들, 그리고 사람의 손가락을 발견하고 엄청난 공포에 휩싸였다.<br><br>일을 하고 집에 돌아오는 길에, 케네스는 아버지가 담배 박스를 들고 지하실을 나오는 것을 보았다. 케네스는 뒤돌아서서 떠났고 다시는 돌아오지 않았다.<br><br>몇 주간의 방탕한 생활 끝에 케네스는 이동식 서커스를 보았고, 엄청난 힘을 가진 케네스는 로프를 당기는 역할을 맡게 되었다. 제프리 호크라는 이름을 가지게 되었다.<br><br>한번도 경험해본 적 없던 굳게 단결된 공동체를 접함으로써, \'제프리\'는 사회성을 배웠다. 새로운 성격을 위장하고, 매력적이고 이타적인 이미지로 새로운 가족에게서 호감을 얻게 되었다.<br><br>다음 10년 동안 서커스에서 지냈고, 미국의 넓고 긴 땅덩어리를 여행하였다. 하지만 떠돌아다니는 삶을 살았던 탓에 케네스는 나쁜 습관들을 가지게 되었다. 술이든, 정크 푸드든, 마약이든, 먹고 싶은 만큼 먹었다. 시간이 지나며 이러한 나쁜 행동을 충분히 하면서, 예전의 본능들이 되살아났지만 케네스는 살인을 저질러도 떠돌이 생활 덕분에 발각되지 않을 수 있었다. 공연하는 동료들로부터 옷과 화장 도구를 빌려 분장을 하고 희생자들을 데려와 마취시킨 다음, 캐러밴으로 데려왔다. 사람들의 정신을 차렸을 때 자신에게 자비를 구하는 것을 즐겼다. 케네스는 희생자들이 밤에 실종되기 전에 정신적으로나 육체적으로 고문했고, 그들의 비명은 그에게 활력소가 되어 즐거움을 주었다.<br><br>희생자들의 힘이 완전히 다했을 때, 케네스는 그들의 손가락을 자른 후 맛보고 가장 맛있고 예쁜 손가락을 찾아 다녔다. 가장 예쁜 손가락을 찾으면 그 손가락을 잘라서 자랑스럽게 자신의 수집품에 추가했고, 나머지는 쓰레기처럼 버렸다.<br><br>케네스는 남성이든. 여성이든, 젊은이든, 노인이든 간에 신경 쓰지 않았다. 좋은 수집품의 정수는 그것의 다양성과 수집품들이 불러내는 기억, 그리고 이야기이기 때문이다.<br><br>케네스는 점점 더 자신의 복장을 덜어냈고 자신만의 스타일로 다듬었다. 그리고 클라운으로서의 자기 자신을 받아들였다.<br><br>시간이 지나며, 케네스는 현실에 안주했고 일을 대충하게 되었다. 술에 취해 잠들었을 때 한 명의 희생자가 눈이 가려진 상태로 풀려나 도망쳤다. 도망쳐서 비명을 지르며 도움을 구했고 클라운이 일어났을 때 다른 서커스단 일원들에게 포위당했다. 케네스는 말을 채찍질했고 캐러밴은 어둠 속으로 사라졌다.<br><br>그때부터 케네스는 온 나라를 배회했고, 연극 광고 안내문에서는 케네스를 볼 수 없었지만 케네스는 기생충처럼 항상 카니발이나 서커스에 출현했다. 자신에게 가까이 올 만큼 용감하거나 멍청한 사람들을 꾀었고 마취시켜서 그들이 실종되었다는 것을 다른 사람들이 깨닫기 전에 다른 곳으로 떠났다.<br><br>길을 따라가다가, 미국의 잘 포장된 길을 뒤로하고 안개 속으로 들어가서 새로운 장소로 도달했다. 그곳은 일시적이고 덧없는, 그가 살고 싶었던 인생에 딱 맞는 장소였다. 평생 살아오면서 가졌던 집들보다 이곳을 더욱 집처럼 느끼며, 그는 캠프를 차려 그의 첫 방문자를 기다렸다.","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"린은 야마오카 집안의 외동딸이었다. 가가와현에 있는 먼지가 자욱한 전통 가옥에서 나고 자랐다. 린은 타카마츠시의 사립 대학을 다녔는데, 이는 집안의 가계에 큰 재정적 부담을 안겨주었다. 그 해, 린의 어머니는 병에 걸렸고 지불해야만 하는 청구서들은 쌓여만 갔다. 린은 가계의 짐을 덜어주기 위해 아르바이트를 구했지만, 보수는 형편없었다.<br><br>린의 아버지는 끝이 보이지 않는 빚과 맞닥뜨렸다. 린의 아버지는 승진에 희망을 품으며 평소보다 두 배로 교대 근무를 하였다. 그 때문에 점점 잠이 부족해지기 시작했다. 매일 밤 어두운 속삭임이 그를 괴롭혔고, 현재의 절망적인 상황을 계속 되뇌었다. 지칠 대로 지친 린의 아버지는 현실 감각마저 잃어가기 시작했다. 매일 밤 그 속삭임을 떨쳐내기 위해, 필사적으로 몸부림쳤다. 그는 직장 상사를 만나 집안 사정을 토로했다. 상여금, 승진, 휴가... 그 어떤것이든..<br><br>하지만 상사는 그의 부탁을 들어주지 않았다. 회사는 결함 있는 제품을 생산하였고 그 결과 큰 적자를 보게 되었다. 누군가는 이번 사태에 대한 책임을 져야만 했고 회사는 그 표적으로 린의 아버지를 지목하였다. 그로 인해 결국 22년간 몸 바쳤던 회사에서 해고당했다.<br><br>그날 저녁, 린은 식당에서 서빙하느냐 늦게까지 일을 하다 아르바이트를 끝내고 집으로 돌아왔다. 린이 집 앞에 자전거를 세워놨을 때, 집 안에서 울리는 어머니의 비명을 들었다.<br><br>린은 급히 계단을 올라 부모님의 방으로 달려갔다. 그곳에서 린은 어머니의 토막 난 시체를 목도하게 되었다. 어머니의 팔다리는 깔끔하게 잘려나가 있었고, 부자연스럽게 뒤엉켜있었다. 또한 가슴은 갈비뼈가 드러날 정도로 심각하게 훼손되어 있었다. 린은 구역질을 났다.<br><br>그때 날카로운 카타나가 린을 베었고, 팔을 두 동강냈다. 린은 육체적 고통보다 자신의 아버지가 매정하게 카타나를 휘두르고 있다는 사실에 더 큰 충격을 받았다. 린은 처절하게 울부짖으며 아버지를 말리려 했지만, 아버지는 그녀의 팔을 다시 한 번 베어버렸다.<br><br>린은 피로 얼룩진 바닥을 미끄러지듯 황급히 빠져나갔다. 문틀을 부여잡으며 자신을 일으켜 세웠다. 카타나가 벽을 찢고 다른쪽 팔도 베었다. 린은 고통에 찬 비명을 지르고 다리를 절며 복도로 뛰쳐나갔지만, 아버지의 검이 기다리고 있을 뿐이었다.<br><br>린은 뒤로 물러서서, 찢어진 배를 부여잡고 온몸을 떨었다. 어머니의 토막 난 팔다리가 눈에 아른거렸다. 린은 아버지에게 달려들었고, 아버지는 잠시 주춤했지만 이내 린의 찢어진 배를 가격했고, 린은 고통스러워하며 나자빠졌다. 린은 필사적으로 다시 일어서려 했지만, 아버지가 그녀의 허벅지를 베었고, 다시 한번 바닥에 뒹굴었다.<br><br>린이 계단을 향해 기어가자 아버지는 딸의 머리카락을 움켜잡고 유리창으로 던졌다. 그 충격으로 유리가 산산이 조각났고 한 층 아래로 굴러떨어졌다. 그렇게 떨어진 린은 위층에서 자신에게 다가오는 발소리를 듣고 있었다. 죽을힘을 다해 산산이 조각난 유리 파편의 바다로 자신의 몸을 던졌다. 유리 파편이 그녀의 살을 파고들었다. 아버지는 그러지 말았어야 했다... 자신의 딸 그리고 아내에게 저지른 만행으로부터 결코 자유로울 수 없을 것이다.<br><br>린은 피를 토했으며, 턱에 유리 조각이 깊게 박힐수록 더 심하게 피를 흘렸다. 더딘 심장 박동 소리가 귀를 울렸다. 자신의 몸이 너무 무겁게 느껴졌고 더는 움직일 수 없었다.<br><br>대지가 아버지의 발소리로 요동쳤다. 린은 이제 원하던 것을 얻을 수 없다는 걸 알게 되었지만, 상관없었다. 아버지는 반드시 대가를 치르게 될 것이다. 이번 생 혹은 다음 생에서라도.<br><br>어두운 안개가 천천히 린의 눈을 감쌌으나, 분노는 쉽사리 가라앉지 않았다. 린은 아직 안식을 취할 수 없었다. 그 때 어둠이 피와 복수를 속삭였다.<br><br>서약은 이루어졌고 린은 눈을 감았다.","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"프랭크 모리슨은 이룬 게 별로 없는 열아홉 살이었다. 심판을 스탠드로 밀친 문제로 농구팀에서 쫓겨난 이후로 학교도 가지 않았다. 하지만 프랭크에게는 가능성이 있었고 암울한 어린 시절에도 불구하고 분위기를 띄우는 능력이 있었다. 프랭크가 캘거리를 떠나 위탁 가정을 떠돌기 시작한 건 6살 때부터였다. 수없이 욕을 하고 떼를 쓰고 싸움을 하고 다녀도 정부는 계속 낯선 가정으로 옮겨주기만 했다. 3년 전, 클라이브 앤드류스가 양아버지가 되어 입양 기관에서 프랭크를 데려간 것이 마지막이었다. 둘은 7시간이나 걸려서 오르몬드에 있는 작은 오두막에 갔다. 아마 둘이 같이 보낸 시간 중에 가장 긴 시간이었을 것이다. 클라이브는 가족 복지기관에서 받은 양육비로 술을 마시느라 바빴다.<br><br>오르몬드는 작고 낡은 동네로 주민이 6천 명밖에 되지 않는 외딴곳이었고, 회색 겨울이 일 년의 대부분을 차지했다. 프랭크는 다른 입양 가정으로 가려고 할 수 있는 짓을 다 하다가 한 예쁜 소녀의 관심을 받게 되면서 마음을 바꿨다. 줄리는 동네에서 유명했고 자신이 오르몬드에서 썩는 것보다 더 나은 삶을 자격이 있다고 믿었다. 그리고 외지에서 온 프랭크가 바로 그 구명줄이었다. 프랭크는 줄리가 여는 파티에 참석했다. 다들 자기보다 어렸기에 손쉽게 강한 인상을 줄 수 있었고, 그건 꽤 기분 좋았다. 으스대길 좋아하는 충동적인 조이와 줄리의 절친이고 순진한 부끄럼쟁이 수지도 알게 되었다.<br><br>넷은 오르몬드 산에 있는 버려진 산장에서 어울리기 시작했다. 다 같이 있으면 조그맣고 무의미한 인생의 지루한 단조로움에서 탈출할 수 있었다. 프랭크는 자신들의 미숙함을 뭔가 특출난 힘으로 바꿀 기회라고 보았다. 그래서 야밤에 소동을 피우며 자신들의 한계를 시험했다. 주말이면 으레 시비 걸기, 기물 파손, 도둑질 등을 저질렀다. 그리하여 결국 세 사람은 프랭크가 하자는 대로 하게 되는 지경에 이르렀다. 넷이서 마스크를 쓰면 못할 것이 없었다. 어느 날 저녁, 프랭크는 조이에게 자신을 해고한 가게를 때려 부수라고 지시했다. 그들은 문을 닫은 후 텅 빈 가게에 쉽게 침입할 수 있었다. 하지만 관리인이 곧 줄리에게 달려들어 들었고, 프랭크는 지나치게 흥분해서 손에 쥐고 있던 칼로 관리인의 등을 찔러버렸다.<br><br>그들은 프랭크 때문에 충격에 휩싸였고, 그는 하던 일을 마저 끝내야 한다고 말했다. 그러자 조이는 칼을 들어 피를 흘리고 있는 그의 갈비뼈를 다시 찔렀다. 하지만 수지는 그것을 원하지 않았고, 프랭크는 그녀에게 소리쳤다. 줄리는 눈을 꽉 감고 칼을 집어 그의 가슴을 다시 찔렀고, 피에 젖은 칼을 수지에게 넘겨주었다. 이제 그들은 모두 공범이 되었다. 수지는 두려움에 떨며 줄리를 보았고, 그 사이에 프랭크가 그녀의 떨리는 손에 칼을 쥐어 꽉 잡고는 남자의 목에 깊게 찔렀다. 프랭크는 계속해서 빨리 움직이라고 소리쳤고, 그들은 흔적을 처리한 후에 시체를 묻기 위해 트렁크에 싣고 오르몬드 산으로 향했다.<br><br>산에서 시체를 묻고 있을 때, 프랭크는 누군가가 숲속을 지나가는 것을 발견했고, 그는 확인을 위해 그쪽으로 다가갔다. 그러자 프랭크 주위로 안개가 짙어졌고, 너무 짙은 나머지 앞이 보이지 않기 시작했다. 프랭크는 서둘러 돌아오려다 넘어졌는데, 그때 불길한 징조를 발견했다. 그것은 어둠으로 이어지는 괴상한 길이었다. 이윽고 줄리와 수지, 조이가 시체를 처리했지만 프랭크는 아직 보이지 않았다. 그리고 줄리는 눈 위에 새로 생긴 발자국을 발견했고, 셋은 흔적을 따라서 다시 숲속으로 들어갔다. 그날 밤, 셋이 돌아오지 않자 그들의 부모는 드디어 자식들이 프랭크와 같이 도망가 버렸다고 생각했고, 마을 사람들은 저마다의 추측을 내놓았다. 이후 오르몬드 산의 버려진 오두막에서 시체가 발견되었을 때, 마을의 분위기는 바뀌기 시작했다.","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"일곱 가족 중 가장 어렸던 아디리스는 다섯 살이던 무렵, 바빌론의 중심에 있는 정화의 사원 벽돌처럼 빨갛게 불타는 계단에 홀로 남겨졌다. 충격과 슬픔을 이겨내기 위해, 그녀는 자신을 위한 계획을 가지고 있던 신들에게 매달렸다. 아디리스의 새로운 인생은 일종의 노예 상태라 할 만했다. 정원을 가꾸고, 의식에 쓰일 상을 차렸으며, 의식용 향기구를 닦았다. 아다리스는 밤이 되면 자신의 목표를 드러내 줄 상징을 보여달라며 기도를 올렸다.<br><br>아디리스가 성년이 되었을 때, 물과 창조를 관장하는 염소자리를 기리는 연례 의식에 참여하는 고위 사제들을 수행했다. 거대한 다주식 회랑에서 향로를 위아래로 흔들며, 향이 모두 타기 전에 차가운 석조 기둥에 닿도록 검은색 짙은 연기를 내보냈다. 연기가 기둥에 닿는 순간 자신의 걱정들은 사라졌으며, 신들이 내린 축복으로 어느 때보다 신들과 가까워졌음을 느꼈다. 이후 사제들의 정화 의식을 돕게 된 아디리스는 새로 맡은 임무는 물론 기존의 일도 충실히 하면서 하루하루 부지런히 보냈다.<br><br>하지만 사제들은 갈수록 더 많은 도움이 필요했다. 드높은 사원의 담장 너머로 끔찍한 역병이 다시 퍼지면서 예방을 위해 매일 청소를 해야 했다. 하지만 수개월 뒤, 사제들도 결국 역병에 걸리고 말았다. 이들은 순식간에 힘을 잃어 어떤 의식도 치를 수 없을 만큼 약해지고 말았고, 수많은 정화 의식을 도왔던 아디리스는 의식을 이어나갈 수 있는 유일한 사람이 되었다. 계속 커지는 공포는 초보자의 손을 빌리는 한이 있더라도 제압해야만 했다.<br><br>첫 번째 의식을 앞두고 불안했던 아디리스는 사제들의 성전실을 방문했다. 양초에 불을 붙이고 나니 등 뒤에 좁은 출입구가 있는 것을 발견할 수 있었다. 틈새로 몸을 구겨 넣은 아디리스는 성역 아래에 숨겨져 있던 지하실을 발견했다. 그곳에는 보석으로 손가락을 잔뜩 치장한 채 손을 쭉 뻗은 어느 여인의 황금 동상만이 서 있을 뿐이었다. 이는 곧 아디리스가 기다리던 신호이기도 했다.<br><br>아다리스가 대회랑으로 입장하자 그곳을 꽉 채운 추종자들이 절을 올렸다. 벽돌 제단으로 성큼성큼 걸어간 아디리스는 은으로 연마한 의식용 단검을 집어 들었다. 루비 반지를 낀 손으로 마치 발톱으로 낚아채듯 칼을 움켜쥐었다. 그 현란한 광경은 이미 아디리스의 젊음과 아름다움에 매혹된 추종자들을 완전히 굴복시켰다.<br><br>아디리스가 창조의 서사시를 암송하기 시작하자, 뒤에 있던 한 여성이 기절하여 쓰러졌다. 여자에게 달려간 아디리스는 그 여성의 발을 뒤덮은 검은 수포들을 발견했다. 주저 없이 성스러운 칼을 쥐고 자신의 발을 향해 휘둘러 발가락 하나를 잘라냈다. 그 뒤 피투성이의 발가락을 신에게 바치면서 이 불쌍한 여성을 보호해줄 것을 간청했다. 아디리스를 새로운 여사제로 여기는 추종자들 사이에 침묵이 퍼졌다.<br><br>아디리스의 부와 아름다움, 헌신에 관한 이야기는 바빌론 전역에 질병만큼이나 빠른 속도로 퍼져나갔다. 얼마 후 아디리스의 추종자들은 그녀를 바빌론의 고위 여사제로 부르게 되었다.<br><br>하지만 아디리스에게 감염의 첫 번째 징후가 나타나자 믿음이 흔들리기 시작했다. 아디리스는 피와 가래가 섞인 기침을 했으며, 목에는 종양이 퍼졌고, 네 발가락만이 남은 발은 검게 변했다. 자신에게 나타나는 증상에 부끄러움을 느낀 아다리스는 베일 달린 머리 장식을 쓰기 시작했고 자신의 피부에서 나는 기름 썩은 내를 가리기 위해 향로를 들고 다녔다. 구원을 꿈꾸며 의식을 계속했고, 추종자들에게 축복받은 물과 음식을 나눠주었다.<br><br>하지만 어떠한 의식도 아디리스를 구할 순 없었다. 신들에게 간청을 드리는 절박한 시도에도 불구하고 아디리스는 도시에서 제 발로 떠나게 되었다. 얼마 안 남은 추종자들과 함께 북쪽으로 떠난 아디리스는 우라슈투의 추운 삼림지대를 헤치며 더는 걸을 수 없을 때까지 나아갔다.<br><br>이들 무리는 자리를 잡았고, 아디리스의 자신의 토사물위에 쓰러졌다. 검게 번했던 아디리스의 발은 퉁퉁 부어 더 이상 걸을 수 없는 지경이었다. 아디리스와 추종자들은 동굴 안에서 진실을 깨달았다. 이들은 모두 전염병에 걸린 것이었다.<br><br>구역질 나는 추종자들 사이에 무릎 꿇은 아디리스는 마지막 기도를 올렸다. 향의 검은 연기가 차가운 바람에 흩어지기 전에 축축한 공기 속으로 퍼졌다.<br><br>아디리스는 물론 추종자들의 시신 모두 발견되지 않았다. 많은 이들은 아디리시의 귀환을 이야기했지만, 바빌론의 고위 여사제에게 어떤 운명이 닥쳤는지 아는 이는 하나도 없었다.","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"몇몇에겐 제드 올슨이라는 이름으로 익숙한 대니 존슨은 부엌 탁자 위의 신문을 집어 들었다. 일주일 전 신문이었지만, 거칠고 퀭한 그의 얼굴이 첫 면을 장식하고 있었다. 그 사건이 일어난 건 뜨겁고 습한 공기가 부엌의 모든 사물에 스며들어 가만히 서 있던 대니마저 땀을 뻘뻘 흘리게 했던 후덥지근한 플로리다의 어느 오후였다. 이 신문 기사는 무조건 좋아야 한다. 로즈빌에서 그가 이룬 업적은 대단했기 때문이다.<br><br><i><b>고스트 페이스, 자취를 감추다</b><br><br>1993년 6월 18일<br><br>제드 올슨의 첫인상은 다양한 소규모 신문사를 다니며 경력을 쌓은 겸손하고 열정적인 프리랜서였다. 로즈빌 가제트의 기자들은 융통성있고 정직한 그의 성품에 크게 기대했고, 면접이 시작한 지 5분도 지나지 않아 그는 이방인 취급에서 완전히 벗어났다.<br><br>\\"제드는 면접실에 들어서자마자 편집장을 빠르게 찾아내고는 그에게 기분 좋은 미소와 힘찬 악수를 건네며 미국의 전통적인 가치에 대해 대화를 나눴어요. 그리고는 곧 입사가 결정됐죠.\\"—로즈빌 가제트 전 기고자<br><br>올슨은 유타에서 펜실베니아까지 그 동안 작은 마을들을 전전한 자신의 들쭉날쭉한 경력에 대해 변명하지 않았다. 이전 직장에 대해서도 확인할 필요가 없었다. 그의 이력서는 깔끔했고, 면접 태도도 아주 좋았으며, 신문사는 기고자를 필요로 했다.<br><br><b>로즈빌의 연쇄 살인마</b><br><br>로즈빌에서 살인 사건이 시작됐을 때, 올슨은 신문사에서 일한 지 5개월 차였다. 피해자는 젊은이부터 노인까지 다양했으며, 집으로 돌아가던 중에 흉기에 찔려 당했다. 수사 보고서를 살펴본 결과 피해자는 불특정 다수였지만, 살인자는 현장 주변을 훤히 꿰고 있었다. 여러 개의 자상은 개인적 동기에 의한 살인임을 말해주고 있었다. 하지만 DNA 흔적은 전혀 발견되지 않아 관할 경찰은 당혹감을 감추지 못했다. 살인범은 범죄에 대한 열정과도 같은 격렬한 범죄를 저질렀지만, 동시에 아주 냉혹하게 범행을 계획했다.<br><br>또한 살인마는 목표 대상을 미행하는 것을 좋아했다. 두 명의 피해자는 사망하기 며칠 전까지 집으로 가던 중 검은 형체에게 미행을 당했다는 신고를 했다. 살인범은 로즈빌 북부 월아이즈부터 이들을 따라갔으며 집에 도착했을 때 내부로 들어갈 방법을 찾으려 사진을 몇 장 찍은 것이 분명했다. 범인은 몇 주 동안 같은 피해자를 관찰하며 대상의 습관이나 행동반경을 치밀하게 관찰했다. 살인충동이 일 때마다 그는 목록에서 가장 약한 피해자를 찾아 집 안으로 몰래 침입했다.<br><br>신문사의 모든 직원이 로즈빌 연쇄 살인 사건에 매달렸다. 올슨은 종종 피해자의 집을 찾아가 유족들과 인터뷰를 하고 경찰의 공식 발표를 전했다. 당시에는 아무도 모르고 있었지만, 올슨의 개입으로 인해 최후의 시체 한 구가 더 추가되었다.<br><br><b>고스트 페이스</b><br><br>올슨이 한밤중에 후드 모자를 뒤집어쓴 인물이 가택을 침입하는 영상을 공개했을 때, 로즈빌은 공포로 몸서리쳤다. 얼굴에 마스크를 쓴 인물이 어둠 속에서 뿌옇지만 하얀 모습으로 카메라를 잠시 응시하더니 집 내부로 사라진 것이다. 올슨은 \\"테이프에 찍힌 고스트 페이스\\"라는 기사를 냈다. 그는 마을 전체가 자신이 쓴 기사로 얼마나 겁을 먹었을지 상상하며 즐거워하는 듯했다.<br><br>몇 주 뒤, 올슨은 사무실 책상에 쪽지 하나를 남기고 모습을 감췄다.<br><br>“제 이야기가 마음에 드셨으면 좋겠습니다. 전 이야기에 생명력을 불어넣는 것을 좋아하거든요. 걱정하지 마세요. 일은 아직 끝난 게 아니니까요.” –제드 올슨<br><br>제드 올슨의 행방이 묘연해지면서 로즈빌 치안 당국은 어떤 성명도 내지 않았다.</i><br><br>대니는 신문에서 자신이 쓴 기사를 오리며 미소를 지었다. 당국이 그를 지목했을 때, 그는 짐을 꾸려 서둘러 로즈빌을 떠났다.<br><br>그가 일어서자 축축한 의자 시트가 그의 살에 달라붙었다. 대니가 침실로 들어서자 숨 막힐 정도의 습기가 그를 집어삼켰다. 갈라진 벽지는 힘없이 축 늘어져 있었고, 뿌옇게 습기가 낀 작은 창문에 물방울이 흘러내리고 있었다. 꽃무늬 벽지에는 끔찍한 사진들과 신문 헤드라인들로 뒤덮여 있었다. 대니는 자상이 있는 두부 사진 위에 일주일 전의 신문을 핀으로 고정했다. 허기로 인한 고통이 미약하게 그를 자극할 때, 그는 마지막으로 밥을 먹은 게 언제인지 곰곰히 생각했다. 오늘 아침 칼과 옷을 씻으면서 먹은 게 마지막이었나? 아니면 길에서 여자애를 쫓던 어젯밤이었나? 기억이 잘 나지 않았다.<br><br>대니는 한 발짝 뒤로 물러나 벽에 장식한 자기 작품을 경외심에 찬 눈으로 바라보았다. 그는 마음 속에서 자신이 쓴 모든 기사와 계획한 모든 이야기, 그리고 현실 세계에서 재현한 모든 장면을 되짚고 있었다.<br><br>전율이 한 차례 그의 몸을 타고 흘렀다. 쌀쌀한 바람이 침실의 습기를 만나 불투명하고 차가운 안개로 변했다. 여성이 비명을 질렀다. 말라붙은 나뭇잎이 그의 발밑에서 바스락거렸다.<br><br>그는 새로운 기대로 미소를 지었다. ","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"바늘 같은 송곳니들이 가득 차 있는 꽃이 핀 듯한 얼굴과 거대하고 구부러져 있는 날카로운 발톱을 지닌 데모고르곤은 모든 차원을 자유롭게 이동하며 생존자들을 위협하는 무시무시한 괴물입니다. 그는 먹이를 사냥할 때 자비나 동정 따위 없이 육체를 산산 조각내고 남김없이 먹어치우는 잔인한 악몽 그 자체이며, 단지 피를 갈망하는 순수한 본능에 의해 움직일 뿐입니다. 완벽한 사냥꾼 데모고르곤은 뒤집힌 세계에 도사리고 있는 섬뜩한 증거이자 엔티티가 선택한 이유이기도 합니다.","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"카잔 야마오카는 자신의 가문의 명예를 존경하는 것만으로는 부족하다고 항상 생각했다. 자신의 아버지가 쌓은 명성을 뛰어넘길 원했고, 사무라이인 양 행세하는 농부들 때문에 사무라이 문화가 사라지는 것을 막고자 했다. 아버지는 그가 귀족으로서의 삶을 살 것을 권유했지만, 이에 수긍하지 않고 카잔은 아버지의 도검을 가져갔다. 그러고는 자신의 가치를 입증하고 일본에 거짓된 자들을 모조리 제거하기 위해 어둠의 순례길에 올랐다. 그동안 교육받았던 신조를 무시한 채, 카잔은 전국을 돌아다니며 거짓된 자들을 처단했다. 처단 방식은 잔혹하고 잔인할 뿐만 아니라 소름 끼칠 정도였다. 그는 농부와 전사들의 상투를 풀어헤친다거나 그들의 갑옷을 벗겨 크게 면박을 주었다. 카잔의 분노, 충동, 명예에 대한 비뚤어진 인식은 사그라들지 않았다. 수도승들은 다른 세계의 사악한 무언가가 카잔을 조종하고 있다면서 그를 비난했다. 한 영주는 카잔을 분노에 불타는 사무라이, ‘악귀 야마오카’라고 부르기 시작했는데, 이는 카잔과 그 가문 모두를 모욕하는 말이었다.<br><br>이에 카잔은 가문의 오명을 씻어내기로 결심했고, 이제 자신을 감히 악귀 야마오카라고 부르는 자는 누구든 도살하게 된다. 카잔은 자신에게 붙은 모욕적인 별명 때문에 혼란을 겪게 된다. 자신은 가장 강력한 자를 무찔렀으며, 이 땅 위에 존재하던 거짓된 자들을 모두 제거하여 사무라이 집단을 정화시켰다. 그런 그를 어떻게 감히 악귀이라 할 수 있는가? 전장에 나가서 누구보다 맹렬한 전사들의 목을 베어버렸기 때문에? 도깨비방망이 같은 금쇄봉으로 수백 개의 머리통을 날려버렸기 때문에? 아니면 그가 무찌른 자에게서 ‘전리품’을 챙기려 했기 때문일까? 그 이유는 중요하지 않았다. 자신을 악귀라고 부르는 걸 더 이상 참을 수 없었던 카잔은, 머릿속에서 들리는 정체불명의 목소리에 이끌려 자신의 이름을 모욕한 영주를 죽이러 영주의 마을로 향했다.<br><br>카잔이 영주의 마을로 가던 중에, 흙길에서 길을 막고 서있는 사무라이 한 명과 마주했다. 카잔은 금쇄봉을 꺼낼 준비를 했다. 단 한 마디의 말도 없이 사무라이는 공격을 시작했고, 빠르게 기세를 제압했다. 하지만 사무라이는 망설이고 있었다. 카잔은 그 틈을 놓치지 않고 무시무시한 일격으로 사무라이의 머리를 가격했고, 투구를 부숴버렸다. 일격으로 쓰러진 사무라이의 얼굴을 자세히 보니 자신의 아버지였다. 카잔은 충격에 뒤로 주춤했다. 아버지는 수치스러움과 후회가 뒤섞인 표정으로 카잔을 바라보더니, 이윽고 숨을 거뒀다. 카잔은 괴로움에 몸부림치며 목소리가 나오지 않을 때까지 소리 질렀고, 정신을 잃었다. 카잔이 다시 눈을 떴을 때는... 이미 아버지의 시체가 사라진 뒤였다. 카잔은 자신의 아버지를 죽였을 뿐만 아니라, 도적들이 아버지의 시체를 훔쳐 가게 놔두기까지 한 것이다.<br><br>쓰라린 고통과 상실감, 환멸감에 짓눌린 카잔은 정처 없이 전국을 떠돌아다녔다. 머릿속에서는 계속해서 아버지의 목소리가 카잔을 괴롭히고, 그때의 일이 잊히지 않았다. 걷잡을 수없이 극심한 분노의 구덩이에 빠지게 된 것이다. 그러던 어느 날, 카잔은 숲속을 지나가다가 \'악귀\' 조각상을 발견하게 되었다. 이어서 조각상 앞에 멈춰 서더니 오랫동안 가만히 서있었다. 잡초로 무성하고 낡은 조각상이 꼭 카잔을 조롱하고 있는 것 같았고, 카잔이야말로 자신이 그동안 필사적으로 잡으러 다녔던 거짓된 사무라이라며 비난하는 것 같았다. 카잔은 고개를 휘저으며 웃었고, 곧이어 자신을 ‘악귀 야마오카’라고 조롱했던 영주를 희미하게 떠올리게 된다.<br><br>다시 한번 분노에 휩싸인 카잔은 그 영주가 살고 있는 설산 꼭대기의 마을로 떠났다. 사무라이 십여 명은 마을 입구를 지키고 서있었지만 모두 카잔의 금쇄봉에 쓰러졌다. 더 이상 카잔의 속도와 위력을 당해낼 자가 없었던 것이다. 카잔의 분노는 누구도 쉽게 이해할 수 없었다. 피투성이가 된 카잔은 마을에서 전투를 이어갔고, 얼마 안 지나서 한 저택에 숨어있던 영주를 발견하게 되었다. 카잔은 영주를 옷장에서 끌어내어, 힘줄을 잘라내서 그가 도망치지 못하도록 했다. 이어서 영주가 목숨을 구걸하며 개처럼 몸부림치는 모습을 지켜봤다. 카잔은 이윽고 영주의 입안에 주먹을 찔러 넣은 다음, 자신의 이름을 더럽히던 간악한 혀를 뽑아냈다.<br><br>카잔은 만족스러움을 느끼며 주택을 빠져나왔지만, 수십 명의 농부들이 녹슨 낫과 날카로운 쇠스랑, 단단한 곤봉으로 무장해서 카잔을 에워쌌다. 처음에는 잘 버텼지만 사방에서 들이닥치는 공격을 모두 상대하기엔 역부족이었다. 짧은 찰나 동안 카잔은 바닥에 누워 자신에게 무관심한 차가운 저녁 하늘을 바라보았고 농부들은 자신들의 영주를 도살한 ‘악귀’를 돌아가면서 찌르고 고문했다. 광분한 무리들은 카잔을 작은 방앗간으로 끌고 가서 계속 고문했다. 결국 카잔은 천천히 고통스럽게 죽어갔다. 농부들이 다시 방앗간으로 돌아왔을 때에는 기묘한 검은색 안개가 가득했고, 카잔의 시체와 금쇄봉은 사라지고 없었다. 이로써 마을을 떠돌아다니는 분노에 불타는 악귀의 비밀스러운 전설이 시작된 것이다.","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"미국 중서부의 먼지 날리는 황무지에서 태어난 케일럽 퀸은 생존 사투를 벌이고 있던 아일랜드 이민자의 아들이었다. 정착의 끝에는 질병, 기근, 그리고 죽음이 흔한 광경이었으며, 그곳의 거물들이 잔치를 벌이는 동안 개척자들은 자신들이 어떻게 하면 나머지를 챙길 수 있는지 다투었다. 한때 엔지니어였던 케일럽의 아버지는 거래처가 \'아일랜드인은 받지 않는다\'라는 문구를 걸었을 때부터 일을 거의 할 수 없게 되었고, 같은 일에 관심을 보이던 아들에게 오래된 렌치를 선물한다. \\n\\n아버지의 도움으로 케일럽이 만들었던 장비는 조금 진기했지만, 아버지가 떠난 후에는 빛을 잃고 말았다. 그는 작살의 날카로운 바늘을 인간의 눈에 관통 시켜 찢어 놓는 계획을 숨겼는데, 그를 괴롭히는 사람들에게 완벽한 계획이었다. \\n\\n케일럽은 나이가 들면서 능력을 인정받기 시작했고, 그의 고용주들은 점점 차별을 버리며 마침내 서부 철도 회사의 사장인 헨리 베이쇼어가 그를 고용했다. \\n\\n케일럽은 처음으로 땅에 철길을 위한 못을 박는 기계를 발명했고, 다음으로는 증기 동력 터널 드릴을 만들었다. 그러나 케일럽으로부터 특허를 훔쳐 판매된 장비들은 다른 회사들에서 가동되기 시작했으며, 사장인 베이쇼어는 시치미를 땠다. \\n\\n익숙한 감각이 혈관을 관통해 케일럽의 가슴에 날카로운 고통을 안겨주었다. 부유한 자들이 그의 지적 노동으로 혜택을 누리는 동안 그는 계속해서 나머지 몫이라도 챙기기 위한 사투를 벌였다. 마침내 분노를 참지 못한 케일럽은 베이쇼어의 사무실에 찾아갔지만 묵사발이 났다. 사무실에서 끌려가는 동안 결국 자신이 만든 총을 사장의 배를 향해 발사했고 철길용 못이 피부와 내장을 관통하여 베이쇼어를 책상에 박히게 하였다. \\n\\n다행히 예상치 못한 베이쇼어의 생존 덕분에 그는 교수형은 피할 수 있었다. 케일럽은 그 죄로 국가의 첫 사립 교도소인 헬셔 교도소에 15년 동안 갇혀 있었지만, 문맹이 유죄인 요새에서 그는 운이 좋게 학식 있는 교도소장과 친구가 되었다. 케일럽은 그를 위해 고문 기계를 설계해 주었고 대가로 식량을 더 받기도 하였다. 얼마 후 교도소장은 그의 판결에 대한 감형을 도와주었다. 그는 금전적 부, 정치적 자본보다 더 큰 무언가를 얘기했고, 그의 연줄을 이용하면 베이쇼어가 평생 감옥에 갇혀 썩게 할 수 있다고 했다. 단 한 가지 조건을 걸고 말이다. 천재성을 이용해 무법자들을 산 채로 잡아와 수감시켜 자신의 배를 부르게 해달라는 것. \\n\\n케일럽은 작업장에 돌아와 몇 번의 수정을 거쳐 새로운 작살 총을 제작하였다. 첫 번째 테스트는 중국인의 세탁물을 훔친 도둑에게 이루어졌다. 금속 연결 부위가 끼익 소리를 내었으며 작살은 앞으로 쏠려 발사되었고 대상의 복부를 관통하였다. 작살이 당겨지면서 도둑의 내장도 같이 잡아당겼고, 비명과 함께 그들을 먼지투성이 길바닥에 내동댕이쳤다. \\n\\n여러 번의 테스트 끝에 내장을 끄집어내는 일이 줄었다. 교도소장은 계속 자신의 연줄을 이용하며 마침내 아일랜드인들을 석방해주고 그의 무리까지 지어주었다. 헬셔 갱단이 탄생한 것이다. \\n\\n그들은 6년 동안 나라 이곳저곳을 돌며 무법자들을 생포해 가두었고, 교도소장과의 협상에 대한 책임을 다했다. 어느 날 글렌베일에서 피의 전투가 펼쳐진 후 케일럽은 \'헨리 베이쇼어, 헬셔 교도소의 새로운 소유주\'라는 뉴스 기사를 발견했고, 사진 속에서는 조금 늙은 베이쇼어가 교도소장과 자랑스럽게 악수를 하고 있었다. 케일럽은 분노와 함께 심장이 요동쳤고, 혈관을 통해 피가 폭발하는 것 같았다. 그는 마침내 게임을 시작하기로 다짐했다. \\n\\n헬셔 갱단의 멤버들은 케일럽에게 충성을 맹세하고 교도소장의 머리를 갈망했다. 우레와 같은 분노는 교도소 출입구를 박살 내었고, 피에 굶주린 살인마처럼 울부짖었다. 경비원이 총을 들고 주저했지만 곧 작살이 가슴에 날아와 꽂혔고, 케일럽은 남자의 머리를 잡아 터질 때까지 교도소 철창에 부딪혔다. \\n\\n소장실에 다다른 케일럽은 문을 박차고 들어갔는데 운 좋은 광경을 목격하게 되었다. 교도소장뿐만 아니라 헨리 베이쇼어도 거기에 있었던 것이다. 분노에 완전히 지배된 케일럽은 베이쇼어에게 달려들어 그를 완전히 박살 냈고, 얼굴에서 떨어진 피가 바닥에 흥건했다. 헬셔 갱단 멤버들도 교도소장에게 달려들어 그의 뼈를 모두 부러트렸다. \\n\\n죽어가던 두 사람이 목숨을 애원했지만, 무리는 그들을 붐비는 죄수들의 앞으로 던져버렸다. \\n\\n그 둘의 피와 땀으로 물든 케일럽은 그의 옛 감방을 응시하며 추억에 잠겨있었기에 베이쇼어의 비명을 거의 듣지 못했다. 그의 손가락 끝에서 떨어진 한 방울의 피가 침대의 가장자리에 떨어졌고, 창으로 둘러진 창문 너머로 두껍고 부자연스러운 안개가 흘렀다. 그는 초점을 잃은 눈을 살며시 뜨며 깨지고 녹슨 오래된 렌치를 꺼내어 렌치의 조임 장치를 엄지로 어루만졌다. 그는 그것을 자신이 언제부터 가지게 되었는지 기억하지 못했지만, 신경 쓰지 않았다. 그는 발밑으로 먼지 묻은 길을 보았고, 그 길에 끝에서 그동안 당한 수모들이 떠올렸다. 자신을 괴롭힌 자들, 그를 이용한 자들 그리고... 헨리 베이쇼어. 안갯속에서 느껴지는 무언가가 그들을 없애기 위해 존재한다는 것을 느꼈다. 자비란 없는 강철 고리, 단순함 속에서 피어나는 화려함과 아름다움. 서 있는 동안 다리의 고통이 심했지만 그는 고통을 견디며 먼지 쌓인 길을 걸어 흐르는 피의 흔적을 뒤로 남긴 채 그곳을 떠났다. ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"가학적이고 무자비한 처형자 삼각두는 고통을 주는 처벌에 집착한다. 강철로 된 틀이 머리를 조이고 거대한 대검을 찬 그는 사일런트 힘의 지옥 같은 복도를 활보했다. 그에게는 아무도 이해하지 못할 임무가 있었다. 그가 지나간 곳은 괴물들까지 그림자를 찾아 달아났고, 그의 길을 지나친 사람들은 공격의 희생양이 되었다. 임무를 마치고 그의 존재가 더 이상 필요 없음을 느낀 그는 오랜 휴식을 준비했다. 그럼에도 불구하고, 또 다른 곳에서 그를 부르고 있었다. 그를 감싸 안은 안개는 사일런트 힐에서의 안개와는 조금 달랐다. 마치 자신을 찾아 헤매는 의식이 있는 생명체 같았다. 그리고 그와 안개 사이에 무언의 동의가 있는 듯했다. 휘날리는 구름은 그의 임무와 가학증에 대해 속삭였다. 그렇게 삼각두는 안갯속으로 한 걸음 더 들어가며 자신의 임무를 다시 한번 받아들였다. ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"‘인간의 조건을 이해하려면 인간을 초월해야 한다.’ 이는 스코틀랜드의 화학자 탤벗 그라임스의 신조였는데, 그의 억제되지 않은 야망이 그를 우뚝 솟은 높은 곳까지 데려다주었다. 어린 시절부터 그는 인기가 많은 소년이었다. 똑똑하고, 카리스마가 있었으며, 권한에 도전하는 데 두려움이 없었다. 하지만 사회적인 태도에도 불구하고 매우 독립적이었고, 그는 마을 근처의 무성한 들판을 혼자 탐험하는 데 많은 시간을 보냈다. 어린 시절의 호기심으로 독성이 강한 디기탈리스의 한 부분을 가지고 실험하다 거의 죽을 뻔한 적도 있다. 수일 동안, 그는 땀으로 흠뻑 젖은 침대에 누워 그는 배 속에 있는 모든 음식을 게워냈다. 하지만 죽을 고비를 넘기고 회복한 그의 머릿속에는 두려움보다 어떻게 작은 꽃 한 송이가 그에게 그렇게 큰 영향을 끼칠 수 있는가에 대한 환상이 자리 잡았다.<br><br>성인이 되면서 그의 야망은 그의 의심쩍은 방법만큼이나 빠르게 성장했다. 그는 런던 의과대학에 진학했다. 여러 번의 질책에도 불구하고 뛰어난 실력을 발휘했다. 한계까지 밀어붙이는 그의 성격 덕에 그는 동인도 회사에서 자리를 하나 맡게 되었고 7년도 안 되는 시간 만에 그는 수석 화학자가 되어 있었다. 이윽고, 그는 자신의 가장 큰 업적 중 하나인 노동자의 생산성을 높이는 동시에 휴식의 필요성을 줄일 수 있는 화학 물질을 완성했다. 그리고 그는 다이어 섬의 수용소 아래에 있는 비밀 실험실로 보상을 받았다.<br><br>인도 앞바다에서, 아편 전쟁으로 끌려온 죄수들은 본의 아니게 그의 피실험체가 되었고, 그는 그들을 이용하여 믿을 수 없을 정도의 고통을 견딜 수 있게 해주는 약을 군인들을 위해 개발하게 되었다. 대부분의 부작용은 경미했지만, 몇몇 군인들은 약 복용으로 인해 정신이 나갔다는 소문이 돌았다. 마을을 떠돌아다니며 사람들을 총검으로 찔러 학살하고 나무에 매달기도 했다는 소문이었다. 그들에 대한 공식적인 보고는 없었지만, 탤벗은 과장한 전쟁 이야기라며 자신을 탓하지 않았다.<br><br>비록 그의 냉담한 총명함은 동요하지 않은 듯 보였지만, 그의 의심쩍은 업적이 만들어낸 적들에 대해서는 매우 무지했다. 이에 대한 깨달음은 생각보다 무식하게 다가왔다. 망갈로르로 여행하는 중 누군가 그의 뒤통수를 가격했고, 그는 포박당한 채 마차에 실렸다. 그의 눈을 덮고 있던 눈가리개가 벗겨졌을 때, 병든 한 남자가 그에게 수백 구의 시체로 가득 찬 무덤들을 보여주었다. 탤벗이 알지 못한 사이에, 생산성을 높여준다는 그의 약이 공장에 있는 모든 사람들을 죽음으로 몰고 간 것이다. 그는 납치범들의 분노와 비난으로부터 자신을 지킬 수 없다는 걸 알고 있었다. 납치범들이 쇠 파이프로 그를 구타하자, 그는 그저 몸을 웅크릴 수밖에 없었다. 납치범들은 탤벗의 몸뚱어리를 시체 더미에 던져, 그가 시체들 사이에서 죽음을 맞이하도록 방치했다. 그의 손가락이 썩은 시체를 파고들었지만, 그는 마다하지 않고 탈출을 위해 깜깜해지는 의식을 붙잡으며 기어갔다. 흑파리가 그의 벗겨진 살을 파먹자, 수백 개의 바늘이 찌르는 듯한 고통이 느껴졌다. 다시 쓰러진 그는 죽은 여인의 눈부신 녹갈색의 눈을 마주하고, 그렇게 평생의 업적을 목격하게 되었다.<br><br>그는 죽음의 끝자락에서 다시 되살아났다. 눈을 떠보니 그는 작은 침대에 뉘어져 있었고, 그 옆엔 주름진 한 사람이 그를 간호하고 있었다. 수도원으로 가장한 신비로운 학교, 고통스러운 숨을 들이마실 때마다 그의 건강이 돌아왔다. 높지만 겸손한 벽 뒤로 신록의 정원이 펼쳐져 있었고, 그곳에서 수도사들은 금지된 문자를 연구했으며, 인간의 정신세계를 이해하기 위해 다른 차원을 찾으려 애썼다. 다른 차원도 우리를 찾으려 한다는 믿음을 가진 채 말이다.<br><br>탤벗의 지식은 그곳에서 없어선 안될 존재였고, 그의 정신착란 화합 물질은 신경 팽창 이론과 아주 매끄럽게 통합되었다. 그러자 그는 그의 부활은 우연이 아닌, 학교의 지식수준을 높이기 위해 시체 더미에서 구원받았다고 생각했다. 그는 치료가 끝날 때까지 학교에 남아, 송과샘에서 추출하여 만든 화합물로, 소위 영혼의 화학 물질로 불리는 심안을 뜨게 할 물질에 대한 연구를 돕기로 했다. 그를 구해준 이의 부탁으로 시작한 연구는 점점 집착으로 변해갔다. 학교의 잃어버린 문헌 기록 보관소를 자세히 살펴보던 그는 이전에는 생각할 수 없었던 아이디어를 확증하는 과학적 공식들을 찾아냈다. 인류를 새로운 계몽으로 이끌어나갈 꿈을 꿨다. 아마도, 그때쯤 일까, 눈부신 녹갈색 눈과 죽은 수백 명의 공장 인부들이 그의 머릿속에서 사라지기 시작한 것이…<br><br>그가 돌파구의 끝에 다다르자, 수도사들의 태도가 변하기 시작했다. 그들이 내민 온화한 미소는 곧 불안한 눈빛으로 변했고, 그와 나누던 공손한 대화는 숨죽인 중얼거림으로 변해갔다. 침대 위 석고 천장에 신경세포처럼 간 금이 그가 마지막으로 본 학교의 모습이었다. <br><br>그 후, 그의 마지막 기억은 산산조각 난 이미지와 감정이 흐릿하게 섞여 있었다. 얼룩진 불빛, 자갈돌 위에 말발굽 소리, 볼을 긁는 거친 삼베, 팔에 날카로운 상처. 누더기를 걸친 채 아편굴의 매트리스에 누워 있던 탤벗이 생각할 수 있던 거라곤, 그의 획기적인 발견을 기록한 기록물뿐이었다. 그는 우중충한 지하실을 헤집고 다니며 큰소리로 도움을 간청했다. 하지만 돌아온 것은 주변에 그와 함께 아편에 취한 사람들의 무관심한 시선이었다. 로브를 쓴 사람들이 그의 주변을 둘러싼 것을 알아차리기도 전에 그의 팔에 주삿바늘이 꽂혔고 그의 세상은 다시 한번 사라졌다.<br><br>다시. 깨어났다. 기억은 지난 번보다 더 흐릿해졌다. 그는 텅빈 치아사이로 혀를 내민다. ‘얼마나 시간이 흐른 걸까.’ 흐릿한 기억이 다시 돌아왔다. 영혼의 화학 물질. 그의 노트. 돌파구에 가장가리. 멀리서 들리는 속삭임이 그의 뇌리를 스쳤다.<br><br>그는 떨리는 손으로 돌맹이를 만지작거리며 돌을 날카롭게 갈았다. 소굴의 희미한 불빛 속에서, 격변하는 아편쟁이들 사이에서, 그는 기억 속에 남은 자신의 연구를 벽에 써 내려갔다. 그는 손가락으로 피가 날 때까지 몇 시간 동안 기록들을, 벽에, 그리고 바닥에 써 내려갔고, 알아듣지 못하면서도 목소리가 속삭이는 모든 것을 받아 들었다. 더 이상 쓸 곳이 남아 있지 않자 그는 돌멩이를 움켜쥐고 메시지를 가슴에 새겼다. 피로 물든 그의 앞에 푸르스름하고 주황색 꽃이 핀 장엄한 들판이 나타났다. 기적이었다, 적어도 그에게는… 속삭임은 들판으로 들어와 인간들이 이해할 수 없는 세계와 차원을 발견하라고 그에게 말했다. 그 순간, 탤벗은 어린 시절 느꼈던 경이로움을 느꼈다.<br><br>아편굴의 사람들은 침묵에 잠겼고, 건조한 연기 향기는 아직도 공중에 남아 있었다. 약물로 흐릿해진 안개를 털어낸 그들은 돌바닥이 피로 젖어 있는 것을 발견했고, 작은 개울들이 갈라진 틈 사이로 구불구불 흐르고 있었다. 어두컴컴한 방에 적응한 그들은 작은 개울을 따라 들쭉날쭉 휘갈긴 글씨를 발견했다. 끊임없이 써 내려간 그 글의 끝에는 단, 한 문장이 써져있었다: <i>죽음은 단지 시작일 뿐이다</i>.","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"샴쌍둥이 샬롯과 빅터 데헤이스는 남다른 감정적 유대감을 형성하고 있다. 17세기에 그들이 성공적으로 이 세상에 나왔다는 것이 기적이라고 말할 수 있겠지만, 그들은 곧 핍박의 삶을 살게 된다. 빅터의 하체는 여자 형제의 가슴에 붙은 채, 그리고 그 여자 형제의 근육과 장기를 중심으로 다리가 뒤틀린 채 태어난다. 그는 샬롯보다 조금 작았는데, 시간이 흐르고 그는 하나의 완전한 형태가 아닌 마치 샬롯의 부속물처럼 자라났다. 신생아들이 꽥 하는 날카로운 소리를 지르자, 그들의 출산을 도운 산파도 마녀가 악마를 낳았다며 비명을 지르며 산모의 집에서 도망쳤다. 그렇게 샬롯, 빅터, 그들의 어머니 마들렌을 향한 사냥이 시작되었다.<br><br> 쌍둥이에게 그 후의 시간은 깜짝할 새 지나간 추억이었다. 그들은 어머니와의 여행이 모든 아이들이 겪는 보통의 일이라고 믿었고 프랑스 시골 마을을 통해 숨바꼭질을 하는 듯한 게임이 평범한 일상이라고 생각했다. 그들에게 그것은 가장 정상적인 삶에 가까운 것이었다. 5살이 되던 해, 새로운 도전이 그들에게 찾아왔다. 어머니의 병이었다. 창백해진 얼굴과 힘없는 몸… 마들렌은 샬롯에게 식량 수집을 맡겨야 했다. 튀어나온 빅터의 몸을 감출 수 있도록 여벌의 옷을 겹겹이 입은 어린 소녀는 부담감을 느끼며 숲속의 움막을 나와 가까운 마을로 향했다. 이상한 광경이었지만, 그녀는 시장이 열릴 때를 기다려 연습한 대로 손에 집히는 음식들을 슬쩍했다. 성공적이었지만, 그리 오래가지 않았다.<br><br>자정이 지나고 시뻘건 불길들이 어둠 속을 휙휙 지나며 가족의 움막을 에워쌌다. 위엄 있는 외침 소리는 밤의 정적을 깨뜨렸고 마녀 사냥꾼의 무리가 몰려들었다. 추잡한 손이 쌍둥이들을 침대에서 떼어내려 다가왔고 샬롯은 그런 손을 향해 미친 듯이 발길질했다. 마들렌은 자식들을 살려달라며 부르짖었다. 하지만 두개골이 깨지는 둔탁한 소리와 함께 다시 조용해졌다. 덫에 걸린 쥐처럼, 빅터는 비명을 질렀다.<br><br>사냥꾼들은 일을 재빠르게 처리해나갔다. 판사는 마들렌이 마법을 행했으며 이는 악마를 낳은 것으로 증명되었다고 선언했다. 판결이 내려진 지 몇 분도 되지 않아, 그들은 마른 나뭇가지와 이끼로 그녀의 발을 죄었고 의식이 없는 그녀의 몸을 나무에 묶었다. 잠시 후 정신을 차린 마들렌은 저항하지 않았다. 단지, 자식들에게 고개를 돌리라며 애원할 뿐이었다. 하지만 형제에게는 선택권이 없었다. 횃불에 불이 붙어졌고 그 불이 어머니의 치마에, 그리고 그 위로 솟구쳐 올라 어머니의 살을 휩싸는 것을… 지글지글 타오르는 것을 강제로 지켜볼 수밖에 없었다. 어머니의 몸에서 떨어져 나오는 지방, 거품이 일며 일그러지는 어머니의 얼굴. 그들은 불길이 그녀의 성대를 찢어 비명이 더 이상 들리지 않을 때까지 모든 것을 지켜봤다. 그곳에 남은 것은 불씨가 타닥이는 소리와 메스꺼운 악취뿐이었다.<br><br>그들 안에 있던 기쁨과 선함은 어머니와 함께 죽음을 맞이했다. 우리에 갇힌 채 오래된 목조 사원으로 옮겨진 그들은 검은 망토를 입은 비밀스러운 집단에게 팔렸다. 빅터는 다가오는 모두를 할퀴고 물어뜯으며 흉포하고 폭력적인 짐승처럼 반응했다. 그를 진정시킬 수 있던 건 샬롯의 포옹뿐이었다. 동생을 제외한 모든 이에게 쓰라린 증오심을 품은 그녀는 삶의 목적을 동생을 지키는 데 쓰기로 했다.<br><br>그들은 사원에서 몇 년동안 특이한 실험을 당했다. 어떤 실험은 잔인했지만, 대부분은 이해할 수 없는 실험들이 많았다. 어느 날은 작은 회색빛 새의 목을 꺾으라는 명령을 받았고, 그다음에는 손가락에 피를 흘리며 장미 꽃병을 만들어야 했다. 또한, 7일마다 축축한 참나무 가지를 베개 밑에 깔고 자야 했으며, 일정한 시간마다 망토를 입은 사람들의 끝없는 노랫소리를 들어야 했다. 이윽고, 마지막 실험이 계획되었다. 예복을 입은 두 명이 쌍둥이를 사원의 중앙으로 데려갔다. 그리고 샬롯을 나무 촛대가 있는 방의 제단 위에 올려놓았다. 주름진 얼굴의 남자는 자신의 후드 밑으로 쌍둥이를 응시하며 두 손으로 쌍둥이의 두개골을 조심스럽게 검사했다. ‘죽음을 기억하라.’ 그는 반짝이는 검을 빼 들며 속삭였다.<br><br>샬롯은 빅터를 제단 밖으로 밀치며 옆쪽으로 뒹굴었다. 남자는 으악 소리를 내며 팔을 최대한 뻗었고 나무 촛대는 바닥으로 떨어졌다. 불길은 삽시간에 마른 나무에 옮겨붙었고 이윽고 온 바닥에 불길이 닿았다. 그리고 그곳에 서 있던 남자의 망토에까지… 고통의 비명이 혼돈을 뚫고 샬롯에게 활력을 불어넣었다. 그녀는 불길, 검은 연기, 그리고 이글거리는 불꽃 사이를 뚫고 달렸다. 그녀의 폐 안으로 검은 연기가 들었고 타는 듯한 연기의 무거움이 느껴졌다. 출구는 찾을 수 없었고 내딛는 한발 한발에 그들을 집어삼킬듯한 열기만이 존재할 뿐이었다. 그녀는 무릎을 꿇었다. 숨이 막혔다. 그리고 그녀 앞에 햇빛과 나무들이 보였다. 그녀는 비틀거리며 이슬이 맺힌 수풀 속으로 걸음을 옮기기 시작했다. 그녀는 뒤도 돌아보지 않고 숲속으로 뛰어 들어갔다. 그리곤 정신을 잃었다.<br><br>샬롯은 눈을 뜨자마자 동생 빅터의 손을 잡으려고 했지만, 그는 꿈쩍도 하지 않았다. 빅터의 몸은 샬롯의 몸통에 힘없이 매달려 있었다. 그녀는 그의 얼굴을 꼭 껴안고 아직 슬프고 고요한 눈을 바라봤다. 지난 몇 년간 함께였기에 익숙하던 동작들, 즉 그의 몸이 그녀의 피부를 잡아당기고, 다리가 그녀의 흉부에 있는 구멍을 찌르던 감각들… 아무것도 느껴지지 않았다. 빅터가 죽었다.<br><br>슬픔에 잠긴 샬롯은 검은 망토를 입은 자들과 마녀 사냥꾼이 근처를 배회할까 두려워 계속해서 이동했다. 죽은 동생의 시신을 옷 속에 감추고 인근 도시의 하수구로 향했다. 그곳에서 그녀는 텐트를 지었다. 음식을 최대한 많이 훔치기 위해서만 모습을 드러냈고 절망감이 느껴질 때쯤엔 돼지들이 먹는 음식 찌꺼기에 의지하였다. 시간이 흐르자 빅터의 시신은 사지가 흘러내려 검고 그을리며 썩어갔지만 샬롯의 피가 동생의 몸에 흐르는 듯이 완전히 부패되진 않았다. 빅터의 죽은 몸을 보호하는 것은 샬롯의 유일한 존재 이유가 되었다. 그녀는 남겨진 유일한 가족과의 이별하기 위해 필사적이었다.<br><br>샬롯의 십대 시절은 여전히 생존 게임과 같았다. 인간에 대한 증오는 날이 갈수록 커져갔고 그녀는 그 증오가 절대 사라지지 않을 것이라는 것을 깨달음을 얻게 되었다. 그녀가 실패한 도둑질과 필사적이었던 탈출 시도 중 얼마나 많은 사람이 죽었든 간에 상관없이 그녀를 쫓고 그녀를 향해 던져진 비난의 말들이 더 많았다. 괴물, 악마, 마녀. 그중, 검은 망토를 입은 자들이 가장 나쁜 자들이었다. 그녀를 향한 그들의 사냥은 끝날 줄 몰랐기에 그녀는 쉴 새 없이 피난처를 버리고 도망칠 수밖에 없었다.<br><br>샬롯은 몇 년 간 필요에 따라 피를 뽑았고 밤에는 죽은 그녀의 동생을 안고 도망쳤다. 몹시 추운 겨울이 찾아오면 샬롯의 몸은 아주 안 좋아졌다. 음식은 부족했고 아무렇게나 지은 판잣집도 혹한 겨울에는 아무런 소용이 없었다. 그녀는 숲속의 캠프파이어 근처로 몸을 숨겼다. 검은 망토를 입은 자들이 그녀를 먼저 데려갈지, 이 겨울의 추위가 그녀를 데려갈지 알 수 없었다. 샬롯의 콧구멍에 서리가 서렸고 입술은 은은한 푸른빛이 돌기 시작했다. 그녀는 한 번도 경험하지 못한 것을 느꼈다. 그녀는 눈을 감았다. 죽음의 평온함을 받아들이는 듯… 하지만 그때 날카롭고 악랄한 소리가 그녀의 귀를 찔렀다. 그녀가 미처 반응하기도 전에, 빅터는 핏덩이의 몸으로 샬롯의 몸에서 빠져나와 눈 위에 착지했다. 그리고 도망쳤다.<br><br>샬롯은 죽음의 문턱에서 빠져나와 추격하기 시작했다. 그녀는 동생의 이름을 부르며 숲속을 헤맸다. 다리에 힘이 빠질 때까지, 그리고 그녀의 시야에 빅터, 자신의 동생이 보일 때까지. 빅터는 진한 안개의 끝에 앉아 있었다. 이윽고 안갯속에서 후드를 뒤집어쓴 어두운 형제가 그의 팔을 붙잡고 그를 속박하자 뒤틀리고 야만적인 그의 얼굴은 비명을 질렀다. 샬롯의 삶에 조금씩 찾아오던 평온은 그녀가 그토록 오랫동안 의지해 온 들끓는 증오와 분노로 대체되어 소멸되었다. 낫을 꽉 움켜쥔 채, 그녀는 안갯속으로 돌진했다. 동생에게 다가오는 자들의 내장을 꺼낼 준비가 되어있던 그녀였다. ","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"학지운, 그는 자신을 바라보는 모든 이들의 눈과 자신의 이름을 외치는 자들로부터 힘을 얻었다. 그 위신 속에서 그는 단 한 가지의 욕망으로 채워져있었다. 바로 더 많은 것을 갈구하는 욕망. 그는 어린 시절부터 사람들을 끌어모으는 끄는 재주가 있었다. 그는 가족들이 운영하는 식당에서 칼을 던지는 공연을 했다. 그의 재주 덕분에 식당은 장사진을 이뤘다. 특히 이것이 한국 전통 공연이라고 단단히 오해한 허술한 여행자들은 이 공연을 보기 위해 기꺼이 돈을 냈다. 지운의 아버지는 식당에서 번 돈을 아들의 춤과 보컬 레슨에 사용했다. 지운이 결코 얻을 수 없는 명성을 위해 아들을 몰아붙였다.<br><br>지운은 실망하지 않았다. 하지만 오디션에 도전한지 몇 년이 지난 지금, 그는 노래로 스타덤에 올랐다. 이윤진, Mightee One 엔터테인먼트의 프로듀서가 지운을 그녀의 트레이닝 프로그램에 합류시킨 것이다. 지운은 서울의 한 기숙사로 옮긴 뒤 하루 14시간 동안의 트레이닝을 통해 스타로 거듭나고 있었다. 그녀는 지운에게 춤과 노래를 가르쳤으며 자신감과 겸손 사이에서 균형 있게 행동하는 법을 가르쳤다.<br><br>지운은 물 흐르는 듯이 그 과정을 따랐고 효과가 있었다. 윤진은 지운을 NO SPIN 밴드의 새 멤버로 선택했다. 밴드에는 날것의 에너지가 필요했다. 명성은 곧바로 그들을 뒤따랐다. 지운의 하루는 수많은 인터뷰와 팬들의 찬양으로 가득했다. 다른 밴드 멤버들에겐 죽음의 스케줄이었던 반면, 지운에게는 힘이 되었다. 그에겐 하루하루가 자신이 어느 중산층의 사람들보다 위대한 존재라는 것을 증명해주는 것이기 때문이다.<br><br>하지만 시간이 흐르고, 인기는 시들어갔다. 그의 눈에는 팬들의 사랑이 다섯 갈래로 갈라져 각 밴드 멤버들 사이로 희미해지는 것으로 보였다. 자신을 통해 터져 나왔던 검증은 그로 하여금 더 많은 것을 갈망하게 만들었다.<br><br>지운은 오랫동안 혐오 속에 묻혀 있던 매력을 흉내 내면서도 윤진이 꾸며놓은 이미지를 유지해갔다. 그는 밴드 멤버들과 함께 NO SPIN의 신규 앨범을 녹음했고, 단 한 음도 놓치지 않았다. 긴 점심을 즐기고 스튜디오로 다시 돌아온 지운은 뜻밖의 행운을 맞이하게 된다. 스튜디오는 전선 타는 냄새로 가득했다. 그는 재빨리 조정실로 달려갔지만 그곳엔 천장에서 떨어진 스피커가 문을 막고 있었다. 조정실의 반대편에는 밴드 멤버들이 불 옆에서 울부짖으며 문을 두드리고 있었다.<br><br>지운은 멤버들의 이름을 부르며 스피커 쪽으로 돌진했다. 그는 스피커를 옮기기 위해 힘을… 아니, 그는 그대로 멈춰있었다. 그대로 얼어붙었다. 그가 내쉬는 호흡 하나하나는 그의 주의를 집중시키기 위한 의도적이었으며 고의적인 과정이었다. 그는 울음소리가 거의 들리지 않을 때까지 천천히 뒤로 물러났다. 그리고 그의 귀에 마지막으로 담긴 멤버들의 비명... 그들의 불타는 순간까지 지운의 이름을 불렀다. 살려달라고… \\"지운아!\\" \\"지운아!\\" \\"학지운!\\" 그가 들어본 소리 중 가장 아름다운 소리였다. 소방대원들이 도착했을 때 그가 보인 눈물은 진실이었다.<br><br>지운은 동료들을 구하기 위해 모든 것을 시도한 비극적인 영웅으로 칭송받았다. 사고 후 윤진은 지운에게 새로운 이미지가 자리 잡힐 수 있도록 수많은 인터뷰를 준비했다. 지운은 거친 겉모습 아래 상냥한 마음을 지닌 솔로 싱어송라이터, 트릭스터로 다시 태어났다. 그러나 콘서트 무대와 TV 무대에서 멀어지면 그의 마음속에 어두운 무언가가 자라났다.<br><br>그는 혼자 사는 사람을 목표로 삼아, 한밤중 그들을 찾아갔다. 첫 번째 희생자는 매혹적인 음색을 가진 음대 학생이었다. 지운은 야구방망이로 그의 두개골을 내리쳐 그의 잠을 깨우고 헝겊으로 팔과 다리를 묶고 입을 막았다. 그는 그를 산 채로 해부하면서 몇 시간 동안이나 그를 고문하였다. 하지만 무언가가 빠져있었다. 지운은 화재 사고에서 울려 퍼졌던 비명소리, 그리고 사건과의 연관성을 원했다. 그가 남자의 배를 가를 때 애원하는 희생자의 기분 좋은 목소리가 듣고 싶었다. 하지만 입을 막은 헝겊 너머로 들러오는 것은 숨죽인 채 흐느끼는 그의 울음소리뿐이었다.<br><br>지운은 학습했고 잘못된 점은 바로잡았다.<br><br>지운은 희생자들을 납치해 폐건물로 데려갔다. 그 건물에서 그들의 목소리가 아무런 제약도 받지 않고 감정을 담아낼 수 있도록 말이다. 그는 다른 종류의 비명과 울부짖음을 만들기 위해 적절한 장소로 가 그들의 목소리로 음악을 만들었다. 허리 부근의 근육인 요방형근을 찌르면 길고 목 뒷부분에서 나오는 듯한 울부짖음을 만들었고 경동맥을 끊으면 교살당하는 고양이의 울음소리처럼 들였다. 그들의 고통에는 정직함이 있었다. 지운은 각 세션을 녹음하며 자신의 곡에 삽입해 멜로디 뒤에 감췄다.<br><br>그는 대담했다. 최근 화보 촬영 중 착용했던 밍크 보아 스카프를 자신이 베여버린 희생자의 목에 감아놓았다. 그다음에는 자신의 뮤직비디오에 권투선수로 출연한 남자의 치아를 뽑고 살해했다. 그는 VIP 팬미팅에 온 팬의 살해한 뒤 그녀의 눈알을 뽑고 그 자리에 자신의 커프링크를 꽂아두었다. 그리곤, 그녀의 가슴팍에 그녀의 피로 ‘신을 보았다’라는 글귀를 써놓았다. 이는 모두 사람들의 이목을 집중시키기 위한 살인이었다. 모든 장면 하나하나가 눈부셨다.<br><br>음악과 살인 사이에서 지운의 작품은 전 세계 사람들의 입에 오르내렸다. 그러나 폭력이 그가 선호하는 예술 스타일이 되면서 그의 음악적 커리어는 땅에 떨어지고 말았다. 수익은 하락했고 Mightee One 경영진들은 그를 향해 손가락질했다. 윤진은 자신의 가수를 지키기 위해 경영진을 향해 분노를 쏟아부었지만, 역부족이었다. 하여 그녀는 지운이 더 이상 혼자서 제작을 할 수 없도록 하였다.<br><br>결정은 충격적이었다. 지운은 자신의 곡들이 진정한 인류를 음악으로 융합시켰다고 주장했지만, 경영진은 평범하지 않거나 자신들의 기대와 다른 곡은 모두 퇴짜를 놓았다. 그렇다면… 그들이 지운의 예술을 이해하지 못한다면 그들이 이해할 때까지 인간의 소리를 첨가시킬 것이다. \\n\\n3개월… 지운이 Mightee One 엔터테인먼트의 경영진을 위해 비공개 공연을 준비한 시간이었다. 그의 걸작을 보여주기 위한 3개월이었다. 그는 수의사에게 어마어마한 돈을 송금하고 아산화질소가 담긴 통을 손에 넣었다. 그 후, Mightee One의 무대 기술자에게 뇌물을 먹여 자신이 비공개 공연이 진행될 홀을 미리 이용할 수 있도록 부탁하였다. 보통 사람이었다면 사람들의 의심을 살 것이 뻔했지만, 그의 유명세 때문일까, 아무도 그를 의심하지 않았다. 공연시간이 다가오자 예정보다 조금 늦은 지운을 기다리며 경영진들과 무대 담당자들이 각자의 자리에 착석했다. \\n\\n그가 도착했을 때쯤 반쯤 의식을 읽은 사람들이 좌석 뒤에 널브러져 있었고 몇몇은 바닥을 기어 다니고 있었다. 지운은 재빨리 작업을 시작했다. 사람들을 모두 묶기 시작했다. 그러나 윤진, 자신을 진흙탕에서 구해내고 지운이 마땅히 받아야 할 사랑의 존재를 일켜줘준 여자 앞에서는 잠시 멈춰 섰다. 지운은 아주 특별한 방법으로 그들에게 다가올 경의로움을 경험할 수 있도록 그녀에게 보상을 내리기로 했다. 진정제를 투약한 후에도 그녀는 미친 듯이 몰아치는 폭풍처럼, 저항했다. 다른 사람들보다 더 강한 상대였다. 지운은 윤진을 단 한 명의 외로운 청중으로 받쳐 들고 그녀의 눈을 똑바로 쳐다봤다. 그리고 눈물을 흘리며 흐느끼는 나머지 사람들을 무대 위로 끌고 온 뒤 그들의 마지막 공연을 준비했다. 경멸을 담은 비웃음으로 사람들의 얼굴에 화장을 칠하고 무대 조명을 비췄다. 그들은 그의 도구가 되었다. \\n\\n지운은 자신이 직접 만든 멜로디에 맞춰 무대에 오른 사람들을 고문했다. 우아한 몸짓으로 사람들 사이를 뛰어다니고 그들의 울부짖음을 지휘했다.  그들은 소리치고 비명을 지르며 사랑하는 사람들의 이름을, 어머니의 이름을 부르짖었다. 희생자들은 지운에게 시선을 고정시킨 채 엄청난 감정들이 쏟아내었다. 인간이라는 증거였다. \\n\\n지운이 던진 칼에 끝까지 명줄을 잡고 있던 마지막 인간 악기가 조용해지고 음악이 멈출 때까지 무대 위에서 내장이 쏟아져 내렸다. 땀과 피로 범벅이 된 지운은 조금 지친 듯 윤진을 바라보며 목례하였다. 커튼 콜. 그는 완벽을 이뤄냈다. 그리고 지운은 손에 칼을 쥔 채 크레딧이 올라가기 전 느슨해진 끈을 다시 묶기 위해 윤진에게 한 걸음 한 걸음 다가갔다. 하지만 그가 다가가자… \\n\\n안개... \\n\\n어디선가에서 밀려온 안개를 그들을 감쌌다. 축축하고 시원하지만… 안락한 안개였다. 지운의 눈에 웅장한 무대가 들어왔다. 병원, 사원, 숲, 도축장… 그를 지켜보고, 그에게서 도망치고, <i>그를 경험하는</i> 백만 개의 눈들로 지탱되고 녹슨 갈고리로 장식된 평지까지. 그는 그저 그곳에 서서 안개를 받아들이고 안개의 실행자가 되어 희생자들의 비명소리로 공간을 채우기만 하면 됐다. \\n\\n앵콜!","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"엄브렐러 코퍼레이션에 의해 설계된 네메시스는 거의 무적의 생체병기로, 목표물을 추적하고 제거하는 데 집착한다. 타이런트 T-103 시리즈의 일부인 해당 표본에 Ne-알파 기생체를 이식하여 표본의 지능과 인식을 높였다. 네메시스의 첫 번째 임무, ‘라쿤 시티의 S.T.A.R.S. 멤버를 모두 몰살하라.’ 도시를 헤집고 다니며 네메시스는 질 발렌타인과 여러 번 마주쳤고 그때마다 질은 그를 피해 도망에 성공하지만 네메시스도 그녀의 실력에 뒤지지 않는다. 목표물이 시야에 다시 들어오는 그때 기이한 안개가 혼돈에 빠진 도시의 연기와 섞여 그들을 덮쳤다. 기이한 현상은 그에게 아무런 해를 가하지 못했다. 혹독한 추위와 산소 감소는 결코 그를 죽일 수 없다. 그에게 중요한 것은 안갯속으로 계속 나아가 임무를 계속 진행하는 것이다. S.T.A.R.S.를 찾아 S.T.A.R.S.를 몰살하고 자신을 방해하는 자를 모두 죽이는 것.","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/ko/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"크로투스 프렌 정신병원의 소장, 패트릭 스펜서에게서 빼앗은 마지막 숨결. 강력하고 파괴적인 힘으로 너스가 영적 차원을 경유하는 점멸 이동을 사용할 수 있게 해 주지만 그 힘을 사용한 후에는 탈진을 겪게 된다.<br><li>점멸을 사용할 수 있다.</li><li>점멸 후, 탈진 상태가 되기 전에 <span class=\\"Highlight1\\">1회</span>의 점멸을 더 사용할 수 있다.</li>","name":"스펜서의 마지막 숨결","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"발이 걸리면 도망치지 못하도록 철로 만들어진 큰 곰덫. 곰덫들은 희생제 무대의 아무 데나 놓여 있으며, 집어서 어디든 설치할 수 있다.<br><br><b>곰덫</b><br>초기화가 되면, <b>1개의 곰덫</b>을 보유한 채 희생제를 시작한다. 주변을 탐색하여 더 많은 곰덫을 찾아 수집할 수 있다.<br><b>곰덫 설치:</b><i>능력 버튼</i>을 길게 눌러 알맞은 위치에 <b>곰덫</b>을 설치할 수 있다. <b>곰덫</b>을 밟은 플레이어는 제대로 움직일 수 없다. 건강한 상태의 생존자가 <b>곰덫</b>을 밟으면 부상 상태가 되지만 탈출을 시도해볼 수 있다. <i>상호작용 버튼</i>을 눌러 <b>곰덫</b>에 걸린 주변 생존자를 둘러업을 수 있다.<br><b>덫 초기화:</b><br>곰덫이 아직 설치가 되지 않은 경우, 곰덫 주변에 서서 <i>능력 버튼</i>을 길게 눌러 원래 위치에 초기화할 수 있다.<b>곰덫 수집:</b><br><b>곰덫</b> 주변에서 <i>상호작용 버튼</i>을 눌러 곰덫을 수집할 수 있다. 초기화가 되면, 어떤 경우에도 최대 <b>1개의 곰덫</b>을 보유한 채 시작하게 된다.","name":"곰덫","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"고대의 힘을 불어넣은 주철로 만든 종. 레이스가 종을 치면 영적 세계로 이동할 수 있다.<br><br><b>통곡의 종</b><br><i>능력 버튼</i>을 길게 눌러 <b>은신</b>할 수 있다. <i>능력 버튼</i>을 다시 누르면 <b>은닉 해제</b>할 수 있으며, 은신 상태에서는 <b>1초</b> 동안 이동 속도가 빨라진다. 생존자는 통곡의 종은 <b>24미터</b> 안에서 들을 수 있다.<br><br><b>은신:</b><br>은신 중인 <b>레이스</b>의 이동 속도가 약간 증가하고 거의 보이지 않게 되며, <b>감지 불가능</b> 상태 효과를 획득한다. 은신 상태에서 <b>레이스</b>는 공격을 멈추지만, 주변 사물과 상호 작용은 가능하다. <b>레이스</b>가 밝은 빛에 노출되면 자동으로 <b>은닉 해제</b>된다.","name":"통곡의 종","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"<i>능력 버튼</i>을 길게 눌러 전기톱 질주를 발동시킬 수 있다. 전기톱 질주에 타격은 입은 생존자는 빈사 상태에 빠진다.<br><li> 각각의 전기톱 액션(전기톱 작동, 전기톱의 회전 속도 증가, <b>전기톱 질주</b>)으로 과열 미터기가 차오른다.</li><li> <b>과열 미터기</b>가 다 차오르면, 재사용 대기 시간이 지날 때까지 전기톱을 사용할 수 없다. 하지만, 열용량 초과로 인해 <b>전기톱 질주</b>가 중단되지 않는다.</li><li><b>과열 미터기</b>는 전기톱을 사용하지 않을 때 내려간다.</li> ","name":"전기톱","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"헌트리스가 엄마에게서 배우고 야생의 생활을 하면서 능숙해진 능력. 헌트리스는 손도끼를 정확하게 던질 수 있다.<br><li><b><span class=\\"Highlight1\\">5개</span>의 손도끼</b>를 가지고 희생제를 시작한다.</li><li>손도끼 투척 버튼을 오래 누르고 있을수록 손도끼를 빨리 던질 수 있게 된다.</li><li>손도끼는 <b>캐비닛</b>에서 충전할 수 있다.</li>","name":"사냥 손도끼","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"내면에 간직한 어둠이 사냥감의 생명을 빼앗으려는 의지를 부추긴다.<br><br><b>내면의 악</b><br><b>내면의 악</b>을 활성화하면 <b>쉐이프</b>는 사냥감의 모습을 명확하게 볼 수 있고, 미행이 지속되는 동안 악의 힘을 쌓아 올릴 수 있다. <br><br><b>내면의 악 I단계:</b><br><b>감지 불가능</b> 상태 효과를 획득한다. 이동 속도가 약간 감소한다. <i>기본 공격</i> 중 돌진 거리가 약간 감소한다.<br><br><b>내면의 악 II단계:</b><br>공포 범위가 적당히 감소한다. 이동 속도가 약간 증가한다. <i>기본 공격</i> 중 돌진 거리가 약간 증가한다.<br><br><b>내면의 악 III단계:</b><br>발동 시 모든 생존자를 <b>약점 노출</b> 상태로 만든다. <b>내면의 악 III단계</b>는 큰 폭으로 미행 게이지를 소모하며 <b>60초</b> 동안 지속된 후, <b>내면의 악 II단계</b>로 돌아간다.<br><br><b>특수 능력: 미행</b><br><i>능력 버튼</i>을 길게 눌러 볼 수 있는 모든 생존자를 미행할 수 있다. 생존자를 미행하면 <b>내면의 악</b> 단계를 올릴 수 있다.<br><br><span class=\\"FlavorText\\">\\"15년 전, 그를 처음 만났습니다. 아무것도 없더군요. 이유도, 양심의 가책도, 이해심도요. 가장 기본적인 삶과 죽음에 대한 감정, 선과 악, 옳고 그름의 기준도 없었어요. 고작 여섯 살짜리 아이가 멍하고 창백한 무표정의 얼굴에, 악마처럼 검은 눈동자를 가졌더군요. 8년 동안 그를 치료하려고 애썼습니다. 그리고 다음 7년 동안은 그를 가둬두려고 애썼죠. 그 소년의 눈 뒤에 도사린 순수하고도 단순한 악을 느꼈기 때문입니다.\\" - 샘 루미스 박사</span>","name":"내면의 악","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"해그의 힘의 근원. 검게 변색된 손가락이 무서운 힘의 촉매로 사용된다. 간단한 주술 의식으로 진흙을 마음대로 움직여, 진흙과 부패의 기운으로 이루어진 환영을 만들고 사용한다.<br><li><span class=\\"Highlight1\\">10개</span>의 환영 덫을 만들고 유지할 수 있다.</li><li><span class=\\"Highlight1\\">40미터</span> 내의 환영 덫이 발동되면 즉시 해당 위치로 순간 이동할 수 있다.</li>","name":"검게 변색된 촉매","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"카니발은 완충된 3개의 차지샷을 보유한 채로 희생제를 시작한다. <I>능력 버튼</i>을 길게 눌러 차지샷 1개를 소모하여 다수의 상대를 타격할 수 있는 <b>전기톱 싹쓸이</b> 공격을 발동할 수 있다. <b>전기톱 싹쓸이</b>로 타격을 입은 생존자는 빈사 상태에 빠진다.<br><li>차지샷을 사용하여 <b>전기톱 싹쓸이</b>의 지속 시간을 연장시킬 수 있다. 하지만, 지속 시간을 연장하면 그다음 재사용 대기 시간이 약간 길어진다.</li><li> 전기톱을 사용하지 않는 시간 동안 챠지샷이 재충전된다.</li><br><br> 전기톱의 회전 속도를 올리면 <b>울부짖음 미터기</b>가 천천히 차오른다. 미터기가 가득 차거나 <b>전기톱 싹쓸이</b>로 물체를 타격하면, <b>울부짖음</b>을 방출한다. <b>울부짖음</b>은 살인마 주변에 있는 모든 생존자들에게 피해를 입히며 생존자들은 빈사 상태에 빠진다.<br><li> <b>전기톱 싹쓸이</b>에 사용된 각 차지샷마다 <b>울부짖음</b> 지속 시간이 증가한다. 사용하지 않은 차지샷은 사라진다.</li><li> <b>울부짖음</b>이 발동되는 동안 이동 속도가 늦어진다.</li><li> <b>울부짖음 미터기</b>는 전기톱을 사용하고 있지 않을 때 줄어들며 <b>전기톱 싹쓸이</b>가 발동되는 동안 완전히 소모된다.</li> ","name":"부바의 전기톱","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>카터의 전류</b><br><b>닥터</b>의 특수 능력인 <b>전기장 방출</b> 또는 <b>정전기 폭발</b>로 생존자를 성공적으로 공격하여 생존자의 <i>광기</i>를 증가시켜 결국 <b>광기</b>의 상태로 그들을 괴롭히고 점점 더 강력한 효과를 촉발시킨다.<br><b>광기 I단계:</b><br>1회 비명을 질러 <b>닥터</b>에게 위치를 노출한다. 스킬 체크 발생과 방향에 <b>약간</b> 영향을 준다.<br><b>광기 II단계:</b><br>1회 비명을 지르고 <i>닥터의 환영</i>의 형태로 환영을 보게 된다. 스킬 체크 발생과 방향에 <b>적당히</b> 영향을 준다.<br><b>광기 III단계:</b><br>즉시 비명을 지르고 <i>닥터의 환영</i>의 형태로 환영을 보게 된다. 스킬 체크 발생과 방향에 <b>엄청나게</b> 영향을 준다. <i>정신 가다듬기</i>에 성공하기 전까지 생존자는 치료, 수리, 파괴 공작, 잠금 해제, 정화 또는 아이템을 사용할 수 없다. 생존자가 <i>정신 가다듬기</i>를 성공하면 <b>광기 I단계</b>로 내려간다.<br><br><b>특수 능력: 전기장 방출</b><br><i>능력 버튼</i>을 길게 눌러 <b>전기장 방출</b>을 발동하면, 플레이어 앞 지면에 전기장 공격을 퍼붓는다. <b>전기장 방출</b>에 감전되는 생존자는 <i>광기</i>가 증가하며 수행 중인 모든 상호 작용은 중단된다. <b>전기장 방출</b>은 즉시 <b>인지 불가능</b> 상태를 무효화한다.<br><br><b>특수 능력: 정전기 폭발</b><br><i>능력 활성화 버튼</i>을 길게 눌러 <b>정전기 폭발</b>을 발동하면, 닥터의 공포 범위 내에 있는 모든 생존자는 비명을 지르고 <i>광기</i>가 증가한다. <b>정전기 폭발</b>은 오직 재사용 대기 시간이 아닐 때만 발동할 수 있다. <b>정전기 폭발</b>은 즉시 <b>인지 불가능</b> 상태를 무효화한다.","name":"카터의 불꽃","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"깨어 있는 생존자들은 <b>나이트메어</b>의 심장 박동을 들을 수 있으며, 16미터 안에서 나이트메어를 볼 수 있다. 깨어있는 생존자들은 16미터~32미터 안에서 <b>나이트메어</b>를 간헐적으로 볼 수 있지만 그 외 범위에서는 볼 수 없게 된다. 생존자들을 수동적으로 60초 동안 잠에 들게 할 수 있으며 <i>기본 공격</i>으로 생존자들을 타격하여 즉시 꿈의 세계로 보낼 수 있다.<br><br>꿈의 세계에서 생존자들은 <b>인지 불가능</b> 상태에 걸리게 되고 <b>꿈 올가미</b>에 영향을 받게 된다. 스킬 체크에 실패하면 생존자들은 깨어나 잠을 자고 있는 생존자들에게 <i>깨우기 행동</i>을 취할 수 있거나 자고 있는 생존자들을 깨울 수 있는 알람 시계를 찾을 수 있다. 지속적인 <i>깨우기 행동</i>은 두 배의 시간이 걸리며, 알람 시계를 사용한 생존자들은 30초 동안 수면에 대한 내성이 생긴다.<br><br><b>특수 능력: 꿈 올가미</b><br><i>능력 버튼</i>을 길게 누르면 <b>꿈 올가미</b>가 설치된다. <b>꿈 올가미</b>를 만진 직후 생존자는 <b>근육 손상</b> 상태 이상에 빠지게 된다.<br><br>일부 애드온을 사용하여 <b>꿈 판자</b>로 <b>꿈 올가미</b>를 설치할 수 있다. 꿈 판자는 꿈의 세계 내 판자 위치에 생성된다. 판자는 <b>나이트메어</b>에게 표시되어 보여지며 꿈 판자로 나이트메어를 기절시킬 수 없다.<br><br><b>꿈 토큰</b>:<br><b>나이트메어</b>는 꿈 올가미 설치에 사용되는 꿈 토큰 5개를 소지한 채 시작한다. 모든 토큰을 소비하면 가장 오래된 꿈 올가미가 파괴되고 새로운 꿈 올가미가 생성된다.<br><br><b>특수 능력: 꿈 투영</b><br><i>능력 활성화 버튼</i>을 길게 누르면 자신의 시점이 발전기로 순간 이동된다. 꿈의 세계에 빠져 있는 생존자마다 재사용 대기 시간이 15% 감소한다.","name":"꿈의 악마","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"주인의 사상을 영원히 따르는 그녀는, 은혜를 모르는 사람들과 죄를 지은 사람들을 음흉하고 잔인하게 처벌했다.<br><br><b>피그</b>는 은밀한 움직임과 함께 매복 공격으로 돌진하며, 생존자의 머리에 치명적인 역방향 곰덫을 씌울 수 있다.<br><br><b>직쏘의 세례</b><br><b>4개</b>의 <i>비활성화</i>된 역방향 곰덫을 가지고 희생제를 시작한다. 빈사 상태의 생존자 옆에서 <i>능력 활성화 버튼</i>을 눌러 생존자에게 <i>비활성화</i>된 역방향 곰덫을 설치할 수 있다. 발전기 수리 시도가 완료되면 역방향 곰덫은 <i>활성화</i>된다.<br>생존자들은 맵 곳곳에 있는 직쏘 상자에서 키를 찾아 <i>활성화</i> 또는 <i>비활성화</i>된 역방향 곰덫을 해제할 수 있다.<br><b>활성화된 역방향 곰덫</b><br>역방향 곰덫이 <i>활성화</i>되면 카운트 다운이 시작된다. <i>활성화</i>된 역방향 곰덫에 걸린 생존자는 타이머의 시간이 끝나거나 <i>활성화</i>된 역방향 곰덫을 지닌 채 희생제를 탈출하려고 하면 자동으로 희생된다.<br><br><b>특수 능력: 앉기</b><br><i>능력 활성화 버튼</i>을 눌러 앉을 수 있으며, <i>능력 활성화 버튼</i>을 다시 누르면 일어설 수 있다. <b>피그</b>는 앉아있는 동안 느리게 이동한다. <b>피그</b>에게는 앉아있는 동안 <b>감지 불가능</b> 상태 효과가 보장된다.<br><br><b>특수 능력: 매복</b><br><i>공격 버튼</i>을 눌러 돌진과 <b>매복</b> 공격을 할 수 있다.<br><br><span class=\\"FlavorText\\">넌 나에게 모든 것을 주게 될 거야, 세포 하나하나까지도. 네 팔에 있는 자국은 다른 생의 일이고, 우린 그 삶을 이제 잊어버릴 거야. 네가 이 통로를 내려오면, 다시는 예전 삶으로 돌아가지 못해. 이해하겠니?\\" -직쏘의 세례</span>","name":"직쏘의 세례","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"마취제와 근육 이완제로 실험하는 몇 년 동안, 클라운은 몇 가지의 유용한 혼합물들과 화학식들을 만들어냈다. 그가 가장 아끼는 것이면서도 가장 효과가 좋은 혼합물인 만담용 특제 가스는 그가 많은 불행한 희생양들을 마취시키고 납치하는 데 도움을 주었다. 그와 관련된 특제 해독제 역시 효과가 좋다.<br><br><i>능력 활성화 버튼</i>을 탭하여 <b>만담용 특제 가스</b>와 <b>특제 해독제</b>를 전환할 수 있다. <i>능력 버튼</i>을 탭하거나 길게 누른 후 떼서 병을 투척할 수 있다.<br><br><i>능력 활성화 버튼</i>을 길게 눌러 병을 보충할 수 있다.<br><br><b>특수 능력: 만담용 특제 가스</b><br>충격을 받으면, 병이 깨지고 생존자를 <b>마취시키는</b> 보라색 구름을 방출한다. <b>마취된</b> 생존자들은 2초 동안 흐릿한 시야를 가지며, 이동 속도가 느려지고, 기침을 하게 된다.<br><br><b>특수 능력: 특제 해독제</b><br>충격을 받으면, 병이 깨지고 활성화 시 노랗게 변하는 회색 가스 구름이 방출한다. 클라운과 생존자가 활성화된 <b>해독 구름</b> 속으로 들어가면 5초 동안 10%의 이동 속도 보너스를 얻게 된다. <b>마취에 취한</b> 생존자가 <b>해독 구름</b>에 들어가면 치료된다.","name":"만담용 특제 가스","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"스피릿은 자신의 능력인 \'야마오카의 원혼\'을 사용하여 영적 세계를 드나들 수 있으며 현실로 돌아올 때는 새로운 지점에서 나타난다.<br><li>능력 사용 버튼을 길게 눌러서 해당 능력을 사용할 수 있다. 스피릿은 능력 사용과 동시에 자신의 육체를 떠나며, 능력을 사용한 자리에는 자신의 \'껍질\'을 남긴다.</li><br>야마오카의 원혼 능력이 발동된 동안:<li>스피릿은 짧은 시간동안 나타날 새로운 위치로 이동할 수 있으며, 짧은 시간 동안 이동 속도가 빨라진다. 그러나 능력 사용 중에도 주변 지형지물들과의 충돌 판정은 유지된다.</li><li>스피릿은 영적 세계에서 모든 생존자들의 모습을 볼 수는 없지만, 그들의 발자국은 땅바닥에 지속해서 남는다.<li>생존자는 스피릿이 능력을 사용하는 중에 그녀의 현재 위치를 대략 가늠할 수 있는 청각 신호를 받을 수 있다.</li><li>능력 사용이 끝나고 현실로 돌아오면, 스피릿의 껍질은 즉시 사라지고 짧은 시간 동안 이동속도 증가 효과를 받는다.</li> <br><br>야마오카의 원혼 능력을 사용하면 스피릿의 능력 게이지가 닳게 된다. 게이지는 능력을 사용하지 않을 때 시간이 지나면 자동으로 채워진다. 능력은 게이지가 완전히 충전되어야만 사용할 수 있다.","name":"야마오카의 원혼","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"프랭크가 군단으로 만들기 전까지 그들은 평범한 친구들이었다. 하지만 그들은 이제 어떠한 규칙도 지키지 않고 규칙을 지키지 않는 스릴 넘치는 자유에 힘을 얻는다.<br><br><b>음산한 광기</b><br><b>음산한 광기</b>를 사용하면 생존자들 사이를 빠르게 이동하며 다수의 공격을 감행할 수 있으며, 능력 게이지가 가득 차면 <i>능력 버튼</i>을 눌러 <b>음산한 광기</b>를 발동할 수 있다. <b>음산한 광기</b>가 활성화되어 있는 동안 <b>군단</b>은 더 빠르게 움직이며, 추가적인 능력으로 <b>판자 넘기</b>와 <b>음산한 베기</b>를 사용할 수 있게 된다.<br><br><b>특수 능력: 판자 넘기</b><br><b>판자 넘기</b>는 <b>음산한 광기</b>가 활성화되어 있는 동안 엎어진 판자 앞에서 <i>상호작용 버튼</i>을 눌러 사용할 수 있다.<br><br><b>특수 능력: 음산한 베기</b><br><b>음산한 베기</b>는 <b>음산한 광기</b>가 활성화되어 있는 동안 <i>공격 버튼</i>을 눌러 사용할 수 있다. <b>음산한 베기</b>로 생존자를 가격하면 부상 상태에 빠트리고 <b>깊은 상흔</b> 상태 이상 효과를 걸며, 군단의 능력 게이지가 회복된다. <b>깊은 상흔</b> 상태 이상에 빠진 생존자들은 살인마의 본능에 의해 표시되며, 그렇지 않은 모든 생존자는 영향을 받지 않는다. 또한 이미 생존자가 <b>깊은 상흔</b> 상태 이상에 빠져 있는 경우, <b>음산한 광기</b>는 효과 없이 즉시 비활성화된다.","name":"음산한 광기","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"그녀는 전염병이 몸을 뒤덮으면서 상태가 악화되었다. 발가락은 검게 변했으며, 목에는 낭종으로 인해 버섯이 피고 목은 매일같이 피를 토했다.<br><br><b>끔찍한 숙청</b><br><b>끔찍한 숙청</b>으로 환경에 존재하는 사물과 생존자들을 감염시켜 끊임없는 질병을 퍼트린다. <i>능력 버튼</i>을 누르면 <b>끔찍한 숙청</b>을 충전할 수 있으며, 다시 버튼을 놓으면 감염 담즙 줄기를 발산한다. 줄기에 닿은 생존자는 감염되며, 환경의 사물도 짧은 시간 동안 오염된다. 생존자는 또한 오염된 물체와 상호작용해도 감염된다.<br><br>생존자의 감염 표시기가 완전히 채워지면 생존자는 부상 상태에 빠져 <b>치료 불능</b> 상태 이상 효과에 걸리게 되고, 임의의 간격으로 구토에 시달리게 된다.<br><br><b>특수 능력: 부패 흡수</b><br>감염된 생존자는 <i>헌신의 웅덩이</i>를 통해 정화하며 감염을 치료하고 자신의 체력을 완전히 회복한 상태로 되돌릴 수 있다. 이 행동은 웅덩이를 부패시키며, <b>역병</b>은 부패를 소모하여 숙청을 강화시킬 수 있다. 부패된 <i>헌신의 웅덩이</i>에서 <i>상호작용 버튼</i>을 누르고 있으면 <b>끔찍한 숙청</b>이 <b>부정한 숙청</b>으로 변한다. 이 행동은 웅덩이의 부패를 제거시킨다.<br><br><b>특수 공격: 부정한 숙청</b><br><b>부패 흡수</b> 능력을 사용하면 짧은 시간 동안 <b>끔찍한 숙청</b>이 <b>부정한 숙청</b>으로 변한다. <b>부정한 숙청</b>의 줄기에 닿은 생존자는 즉시 피해를 입지만 더 이상 생존자를 감염시키거나 환경의 사물을 오염시킬 수는 없다.","name":"끔찍한 숙청","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>고스트 페이스</b>는 몇 주 동안 희생자를 연구하고 그 습관을 세세하게 기록한다. 살인 충동이 끓어오르기 시작할 때, 그는 어디에서 어떻게 공격해야 효과적인지를 잘 알고 있다.<br><br><b>밤의 장막</b><br>능력 게이지가 가득 찼을 때 <i>능력 버튼</i>을 길게 눌러 <b>밤의 장막</b>을 활성화할 수 있다. <b>밤의 장막</b>이 활성화된 동안 <b>고스트 페이스</b>에게는 <b>감지 불가능</b> 상태 효과가 보장된다.<i>기본 공격</i> 사용 시 능력 게이지는 완전히 고갈되며, <b>밤의 장막</b> 능력 역시 해제된다.<br><b>탐지</b><br><b>고스트 페이스</b> 근처에 있는 생존자는 고스트 페이스가 있는 방향을 바라볼 때 짧은 시간 동안 그를 <i>탐지</i> 할 수 있을 지도 모른다. <i>탐지</i>에 성공한 경우 <b>고스트 페이스</b>의 능력 게이지는 완전히 고갈되며 <b>밤의 장막</b>도 자동으로 해제된다.<b>고스트 페이스</b>를 <i>탐지</i>한 생존자는 <i>살인마의 본능</i>에 의해 자신의 위치가 짧은 시간 동안 표시된다.<br><br><b>특수 능력: 미행</b><br><b>밤의 장막</b>이 활성화된 동안 <i>능력 버튼</i>을 길게 눌러 생존자를 미행할 수 있다. 잠복 중 <i>능력 버튼</i>을 길게 누르면 숙여서 더 빠르게 미행할 수 있다. 생존자를 끝까지 미행하면 대상에게 <i>표식</i>이 새겨져 제한된 시간 동안 <b>약점 노출</b> 상태에 빠지게 된다.<br><br><b>특수 능력: 앉기</b><br>능력 활성화 버튼을 눌러 앉을 수 있으며, 버튼을 다시 누르면 일어설 수 있다. <b>고스트 페이스</b>는 앉아있는 동안 느리게 이동한다.<br><br><span class=\\"FlavorText\\">“난 신경쓰지 마. 바로 그거야, 계속해. 완벽하군. 이게 내가 기억하고 싶었던 당신 모습이야.” –고스트 페이스</span>","name":"밤의 장막","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"알 수 없는 다른 세계의 힘이 그것의 몸을 타고 밀려 들어왔다. 갑자기 땅이 갈라지며 열리더니 데모고르곤을 통째로 삼켰다.<br><br><b>심연</b><br><i>능력 버튼</i>을 길게 눌러서 완전히 충전하면 <b>심연</b>을 활성화시킬 수 있다. 활성화된 포털의 근처에 있는 모든 생존자들은 살인마에게 감지된다.<br><br><b>특수 공격: 찢어발기기</b><br><b>심연</b>을 충전하거나 버튼을 누르고 있는 도중 <i>공격 버튼</i>을 누르면 상대방을 향해 뛰쳐나가 포악하게 벤다.<br><br><b>특수 능력: 포털</b><br><i>능력 활성화 버튼</i>을 누르면 자신의 앞에 있는 지면에 포털을 만든다.<br><b>뒤집힌 세계 횡단</b><br>포탈을 하나 지정한 후, 설치된 포탈에 서서 <i>능력 활성화 버튼</i>을 한번 더 누르면 뒤집힌 세계를 통해 지정한 포털로 갈 수 있다.<br><b>활성화된 포털</b><br>처음으로 포털을 횡단하면 출발지와 도착지의 포털이 활성화된다. 생존자는 활성화된 포털만을 봉인할 수 있다. 활성화된 포털 오라는 노란색으로 강조 표시가 된다.","name":"심연","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"나약한 핏줄을 끊어버리려는 열망이 힘으로 실현되었다.<br><br><b>야마오카의 분노</b><br>부상당한 적이 남긴 핏빛 구체를 흡수할 수 있다. 이때, <i>능력 버튼</i>을 길게 눌러 핏빛 구체를 흡수 할 수 있으며 능력 게이지를 채운다. 능력 게이지가 가득 차면 <i>능력 활성화 버튼</i>을 길게 눌러 <b>핏빛 분노</b>를 발동할 수 있다.<br><b>핏빛 분노:</b>\\n<b>핏빛 분노</b>가 활성화된 동안, <b>악귀</b>는 치명적인 피해를 입힐 수 있게 되며, <b>악마의 돌진</b>과 <b>악마의 일격</b> 능력을 추가로 얻게 된다.<br><br><b>특수 능력: 악마의 돌진</b><br><b>핏빛 분노</b>가 활성화된 동안 <i>능력 버튼</i>을 길게 눌러 <b>악마의 돌진</b>을 발동할 수 있다. 해당 능력을 사용하면 <b>악귀</b>는 먼 거리를 빠른 속도록 이동할 수 있게 된다.<br><br><b>특수 공격: 악마의 일격</b><br><b>핏빛 분노</b>가 활성화된 동안, <i>공격 버튼</i>을 길게 눌러 <b>악마의 일격</b>을 바라보고 있는 방향으로 발동할 수 있다. <b>악마의 일격</b>의 돌진 사정거리는 더 확장되며, 일격을 맞은 건강한 생존자는 즉시 빈사 상태에 빠진다.","name":"야마오카의 분노","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"데스슬링거는 자신의 천재성을 활용, 기존 탄약을 체인이 부착된 날카로운 작살로 교체하여 개조한 혁신적인 발명품으로 현상수배범을 사냥한다.<br><br><b>구속자</b><br><i>능력 버튼</i>을 길게 눌러 시야를 조준할 수 있다. <i>공격 버튼</i>을 길게 눌러 생존자에게 박히도록 창을 쏘면 생존자들은 <b>데스슬링거</b> 쪽으로 감긴다.<br><b>감기:</b><br>생존자가 <b>구속자</b>에 의해 찔리면 <i>능력 버튼</i>을 길게 눌러 생존자를 살인마 쪽으로 당길 수 있다. 생존자는 체인에 저항하거나 주변 환경을 이용하여 체인으로부터 자신을 해방시킬 수 있다. 저항과 해방은 <b>데스슬링거</b>를 짧은 시간 동안 기절시킬 수 있지만, 생존자를 부상 상태에 빠트리고 <b>심각한 부상</b> 상태 이상 효과에 빠트린다. 생존자가 창에 찔린 동안 <i>기본 공격</i>을 사용하면 <b>데스슬링거</b> 및 생존자에 페널티 적용 없이 체인을 부실 수 있다. <i>기본 공격</i>으로 창에 찔린 생존자를 성공적으로 가격하면 건강한 상태에 <b>심각한 부상</b> 상태 이상 효과에 빠트린다.<br><b>재장전:</b><br><b>구속자</b>는 발사 시 즉시 재장전되도록 해야 한다. <i>능력 활성화 버튼</i>을 길게 눌러 <b>구속자</b>를 재장전할 수 있다.","name":"구속자","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"고통의 문을 열고 심판을 받아라! 대검은 땅을 갈라 지옥 같은 마음을 일으키며 다가오는 모든 이들에게 고통을 퍼뜨린다.<br><br><b>판결 의식</b><br><i>능력 버튼</i>을 길게 눌러 활성화시킬 수 있으며, 그 후에는 어떤 방향으로든 이동하여 지면에 흔적을 남긴다.<br><br>흔적 위를 걷거나 뛰는 생존자는 <i>살인마의 본능</i>을 발동시키며 <i>고통</i>에 걸린다. <i>고통</i>에 걸린 생존자가 빈사 상태에 있는 동안 <b>속죄의 우리</b>로 보내질 수 있다.<br><br><b>특수 공격: 지옥의 처벌</b><br><b>판결 의식</b>이 활성화된 동안 <i>공격 버튼</i>을 눌러 <b>지옥의 처벌</b>을 발동할 수 있다. 이 능력은 힘의 파장을 발산하며, 길 위에 아무 생존자를 타격할 수 있다.<br><br><b>특수 능력: 속죄의 우리</b><br><i>고통</i>에 빠져 죽어가는 생존자 위에 서서 <i>능력 활성화 버튼</i>을 누르면 생존자를 <b>속죄의 우리</b>로 보낼 수 있다. <b>속죄의 우리</b>에 있는 생존자는 갈고리에 걸린 것과 동일하게 희생될 수 있다. 엔티티에게서 벗어나기 위해서는 두 번째 소환 의식 단계가 진행되는 동안, 스킬 체크를 완료해야 한다.<br><br><b>속죄의 우리</b>에서 구조되거나 다른 생존자를 구조한 생존자의 <i>고통</i>은 제거된다.<br><br><b>특수 능력: 최종 판결</b><br>갈고리 또는 우리에서 이미 저항 단계에 도달하여 <i>고통</i>에 빠져 죽어가는 생존자 위에 서서 <i>능력 활성화 버튼</i>을 눌러 처형할 수 있다.","name":"판결 의식","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"고름집 세럼이 그의 혈관 속을 흐르며, 그의 심신을 손상시키지만, 비정상적인 신체적 능력을 부여한다.<br><br><b>특수 능력: 질주</b><br><i>능력 버튼</i>을 눌러 빠르게 앞으로 <b>질주</b>한다. 질주 시, <b>질주</b> 토큰을 소모한다. <b>질주</b>가 발동되는 동안, 블라이트는 공격을 개시할 수 없다.<br><br>주변에 있는 벽이나 장애물을 향해 <b>질주</b>해 <b>충돌</b>할 수 있다. <b>질주</b>하여 벽이나 장애물에 다다를 수 없거나 블라이트의 <b>질주</b> 토큰이 부족한 경우, 짧은 탈진 상태에 빠지며 토큰은 충전된다.<br><br><b>특수 공격: 치명적인 질주</b><br><b>충돌</b> 후, <i>능력 버튼</i>을 눌러 <b>치명적인 질주</b>를 발동할 수 있다. 질주 시, <b>질주</b> 토큰을 소모한다. <b>치명적인 질주</b>는 블라이트가 <i>공격 버튼</i>을 눌러 공격을 개시하는 것을 제외하면 <b>질주</b>와 동일하다.","name":"황폐화된 부패","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"피와 트라우마로 영원히 결속됐지만 공유된 몸을 분리할 수 있는 능력이 주어졌다. 남매로서 함께 사냥하고 생존자에게 가하는 위협을 두 배로 증가시킨다.<br><br><b>특수 능력: 피의 유대</b><br><i>능력 버튼</i>을 길게 눌러 <b>빅터</b>를 방출할 수 있다. <i>어빌리티 버튼</i>을 탭하여 <b>샬롯</b>과 <b>빅터</b>간 교차 조작할 수 있다.<br><br>빅터가 혼자 남겨지는 동안, <b>빅터</b>는 <b>살인마의 본능</b>을 발동시켜 주변에서 걷거나 뛰는 생존자들의 윤곽선이 <b>샬롯</b>에게 드러난다. <b>빅터의</b> 비명을 들을 수 있는 생존자는 예민하게 반응한다. 살인마 역할의 플레이어가 <b>샬롯</b>을 조작하는 동안 <b>빅터</b>는 생존자에 의해 으스러질 수 있다.<br><br>으스러지면 약간의 시간이 지난 후 <b>빅터</b>는 <b>샬롯</b>의 몸에서 다시 자라난다.<br><br><b>특수 공격: 덮치기</b><br><b>빅터</b>를 조작하는 동안, <i>어빌리티 버튼</i>을 길게 눌러 <b>덮치기</b>를 차지할 수 있으며 <i>공격 버튼</i>을 탭하여 방출할 수 있다.<br><br><b>덮치기</b> 공격에 성공하면 생존자에게 피해를 줄 수 있다. 만약 생존자가 건강한 상태라면, <b>빅터</b>는 생존자에게 달라붙어, <b>살인마의 본능</b>을 발동하여 주변에 있는 모든 생존자의 위치를 드러낼 수 있다. 생존자에게 달라붙은 상태에서 생존자는 <b>치료 불능</b>, <b>인지 불가능</b>, 그리고 <b>불구화</b> 상태 효과에 빠진다. 이러한 상태 효과에 빠진 생존자들은 캐비닛에 들어가거나 출구를 통해 나갈 수 없다. <b>빅터</b>가 생존자들에게 달라붙은 상태에서 생존자는 <b>제거</b> 행동을 완료하여 그를 으스러뜨릴 수 있다.<br><br>만약 <b>빅터</b>의 <b>덮치기</b>가 실패할 경우, 그는 순간적으로 취약해져 생존자에게 으스러질 수 있다. 만약 빅터가 자신보다 큰 방해물에 착지하면 그는 파괴된다.","name":"피의 유대","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>평생 연습을 통해 갈고닦은 매혹적인 기술로 학지운은 빠른 속도로 칼의 질풍을 방출한다.</i><br><br><b>명연주</b><br><br><b>칼 60개</b>를 소지한 채 희생제를 시작한다. <i>능력 버튼</i>을 길게 눌러 마무리 및 투척 상태에 돌입한다.<br><br>투척 상태에서 <i>공격 버튼</i>을 탭하여 칼을 하나 투척할 수 있으며 <i>공격 버튼</i>을 더 길게 눌러 칼의 질풍을 방출할 수 있다. 질풍 방출은 조작과 투척 확률을 높이는 반면 이동 속도를 낮춘다. 캐비닛에서 칼을 보충할 수 있다.<br><br><b>열상 미터기:</b> 칼의 타격을 받을 때마다 생존자의 <b>열상 미터기</b>가 증가한다. 미터기가 가득 차면 건강 상태 한 단계를 잃으며 생존자는 부상 또는 빈사 상태에 이를 수 있다.<br><br>잠시 동안 타격을 피한다면 생존자의 열상 미터기는 점점 떨어진다. 기본 공격으로 생존자를 타격하면 열상 미터기가 즉시 떨어질 것이다.<br><br><b>특수 능력: 메인 이벤트</b><br>칼로 타격 시마다 <b>이벤트 미터기</b>가 채워진다. 미터기가 가득 차면, <i>어빌리티 버튼</i>을 눌러 <b>메인 이벤트</b>를 활성화할 수 있다. 해당 모드에서 트릭스터는 <b>메인 이벤트</b> 동안 자동으로 무제한 칼을 투척하고 투척 속도가 상당히 증가하며 한 번 투척할 때마다 감소되던 그의 이동 속도를 유지할 수 있게 된다. <b>메인 이벤트</b>는 <i>공격 버튼</i>을 눌러 취소할 수 있습니다. 취소 시, <b>이벤트 미터기</b>가 0이 되고 <b>명연주</b>의 재사용 대기 시간이 시작된다.","name":"명연주","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"변이를 일으키는 바이러스는 다른 이에게 전파될 수 있다. 바이러스의 효과는 네메시스 내에 공격성과 힘을 고조되게 만든다.<br><br><b>특수 공격: 촉수 일격</b><br>능력 버튼을 길게 눌러 공격을 차지할 수 있다. 차지가 완료되면 공격 버튼을 탭하여 <b>촉수 일격</b>을 방출한다. <b>촉수 일격</b>으로 생존자를 타격하면 생존자는 <b>오염</b> 상태 효과에 빠지며 <b>변이율</b>을 증가한다. 만약 생존자가 이미 <b>오염</b> 상태에 빠져있다면 <b>촉수 일격</b>은 생존자의 건강에 피해를 입힌다.<br><br>자신이 보유하거나 다른 생존자가 보유한 <b>서플라이 상자</b>에서 찾은 <b>백신</b>을 사용하여 <b>오염</b>을 치료할 수 있다. 하지만 <b>백신</b> 개수는 제한적이다. <b>백신</b> 사용 후, 생존자의 위치는 살인마의 본능에 의해 드러난다.<br><br><b>변이율:</b> 능력은 <b>변이율</b>이 증가함에 따라 확대된다. <b>변이율 레벨 2</b> 도달 시, <b>촉수 일격</b>은 판자 및 부서지기 쉬운 문을 파괴할 수 있다. <b>변이율 레벨 3</b> 도달 시, <b>촉수 일격</b>의 범위가 증가한다. T-바이러스 아이콘은 <b>변이율</b>의 현재 레벨을 표시한다.<br><br><b>특수 적: 좀비</b><br><b>좀비</b>가 생존자를 공격할 때, 좀비는 생존자들에게 <b>오염 효과</b>를 가한다. 만약 생존자가 이미 <b>오염</b> 상태에 빠져있다면 생존자의 건강에 피해를 입힌다.<br><br><b>좀비</b>는 <b>촉수 일격</b>으로 말살될 수 있으며, <b>변이율</b>을 증가시키고 생존자들은 좀비를 판자로 말살할 수 있다. 말살된 <b>좀비</b>는 짧은 시간이 지난 후 리스폰된다.","name":"T-바이러스","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/ko/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"이 희생제의 모든 참가자들은 모든 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>중첩 가능</li>","name":"피묻은 파티 장식끈","flavor":"\\"이것은 사람들이 모였을 때 보낸 정말 좋았던 시간을 떠올리게 한다, 마지막엔 모두 비명을 지르며 떠났지만.\\"","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"어두운 안개가 <b>약간 옅어진다.</b> <br><li>중첩 가능</li>","name":"맑은 시약","flavor":"\\"그 안개는 도망칠 수도, 벗어날 수도, 피할 수도 없이, 모두를 광기로 뒤덮었다. 안개를 막을 수 있는 호수의 맑은 물은 이미 숲에서 잃어버린 후였다.\\" -주인 없는 수첩","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"어두운 안개가 <b>약간 짙어진다.</b> <br><li>중첩 가능</li>","name":"희미한 시약","flavor":"\\"나는 살을 에는 추위에 온 몸이 마비되어가고 있음을 느꼈다.\\"","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"어두운 안개가 <b>적당히 짙어진다.</b> <br><li>중첩 가능</li>","name":"흐릿한 시약","flavor":"\\"안개는 매력적이지만 우리에게 최면을 걸고 있어. 나는 이 안개가 편안한 안식처같기도 하지만 동시에 두렵기도 해.\\" -도나의 스케치북","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"어두운 안개가 <b>대단히 짙어진다.</b> <br><li>중첩 가능</li>","name":"탁한 시약","flavor":"\\"겉보기에 안개는 괴물들로부터 우리를 지켜주는 것 같았지만, 동시에 우리를 육체적 그리고 정신적으로도 쇠약하게 만들고 있었다.\\" -주인 없는 수첩","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"엔티티에게 <b>달빛을 가장 어둡게</b> 만들 것을 요청한다.","name":"초승달 꽃다발 ","flavor":"\\"이렇게 달이 안 보이는 밤에는 잠을 자러 가는 것이 좋겠어.\\"","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"엔티티에게 <b>달빛을 어둡게</b> 만들 것을 요청한다.","name":"초승달 꽃다발","flavor":"\\"달은 미소지으며 천천히 사라진다: \'걱정하지 마라, 너의 비밀은 지켜주겠다.\' 아니면 그 미소는 비웃음일까?\\"","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"엔티티에게 <b>달빛을 밝게</b> 만들 것을 요청한다.","name":"하현달 꽃다발","flavor":"\\"이지러져 가는 달이 먹잇감을 내려다보듯 그녀의 얼굴을 비춘다.\\"","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"엔티티에게 <b>달빛을 가장 밝게</b> 만들 것을 요청한다.","name":"보름달 꽃다발","flavor":"\\"달이 떠오르면 늑대가 울부짖어 사냥의 시작을 알린다.\\"","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"이 공물을 불태울 경우 \'맥밀란 사유지\' 지역에서 희생제를 시작할 확률이 <b>약간 증가한다.</b><br><li>중첩 가능</li>","name":"맥밀란 거래 원장","flavor":"\\"그다지 읽고 싶지 않은 회계원장. 심하게 훼손되어 맥밀란가의 도장을 제외하고는 알아 볼 수가 없다.\\"","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"이 공물을 불태울 경우 \'맥밀란 사유지\' 지역에서 희생제를 시작할 확률이 <b>상당히 증가한다.</b><br><li>중첩 가능</li>","name":"서명된 거래 원장","flavor":"\\"광업과 다른 거래들이 기록되어 있는 거래원장.  아치 맥밀란의 이름으로 흐릿하게  서명되어 있다.\\"","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"이 공물을 불태울 경우 \'맥밀란 사유지\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br><li>중첩 가능</li>","name":"맥밀란의 손가락 뼈","flavor":"\\"광산의 창고 지하실에서 발견된 맥밀란의 유골. 그의 다리뼈가 훼손된 채로 망치와 함께 발견되었다.\\"","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"이 공물을 불태울 경우  \'오토헤이븐 차량보관소\' 지역에서 희생제를 시작할 확률이 <b>약간 증가한다.</b><br><li>중첩 가능</li>","name":"뜯겨나간 번호판","flavor":"\\"심하게 녹슬고 훼손된 금속제 시트.\\"","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"이 공물을 불태울 경우 \'오토헤이븐 차량보관소\' 지역에서 희생제를 시작할 확률이 <b>상당히 증가한다</b>.<br><li>중첩 가능</li>","name":"버지니아 번호판","flavor":"\\"버지니아 주에서 생산된 녹슬고 찌그러진 번호판이다.\\"","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"이 공물을 불태울 경우 \'오토헤이븐 차량보관소\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br><li>중첩 가능</li>","name":"아자로프의 열쇠","flavor":"\\"어떤 브랜드인지 구분할 수 없는 차량의 열쇠 . 다만 열쇠고리로 주인이 아자로프임을 알 수 있다.\\"","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"이 공물을 불태울 경우 \'콜드윈드 농장\' 지역에서 희생제를 시작할 확률이 <b>약간 증가한다.</b><br><li>중첩 가능</li>","name":"콜드윈드 가축용 꼬리표-28","flavor":"\\"피로 얼룩진 가축 식별용 표식. \'콜드윈드농장\'과 \'28\'이라는 숫자가 새겨져 있다.\\"","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"이 공물을 불태울 경우 \'콜드윈드 농장\' 지역에서 희생제를 시작할 확률이 <b>상당히 증가한다.</b><br><li>중첩 가능</li>","name":"콜드윈드 가축용 꼬리표-81","flavor":"\\"피로 얼룩진 가축 식별용 표식. \'콜드윈드농장\'과 \'81\'이라는 숫자가 새겨져 있다.\\"","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"이 공물을 불태울 경우 \'콜드윈드 농장\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br><li>중첩 가능</li>","name":"하트 로켓","flavor":"\\"은 재질의 하트 모양 로켓. \'E+M\'이라는 문구가 새겨져있다.\\"","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"이 공물을 불태울 경우 \'크로투스 프렌 정신병원\' 지역에서 희생제를 시작할 확률이 <b>약간 증가한다.</b></li><br>","name":"정신병원 입원 서류","flavor":"\\"낡고 흐려진 정신병원 입원 서류. 뭐라고 쓰여 있는지 알 수 없다.\\"","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"이 공물을 불태울 경우 \'크로투스 프렌 정신병원\' 지역에서 희생제를 시작할 확률이 <b>적당히 증가한다.</b><br><li>중첩 가능</li>","name":"필립 엘리엇의 입원 서류","flavor":"\\"핑크색 종이. \'필립 엘리엇\'의 크로투스 프렌 정신병원 입원 서류다.\\"","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"이 공물을 불태울 경우 \'크로투스 프렌 정신병원\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br><li>중첩가능</li>","name":"검게 타버린 결혼 사진","flavor":"\\"불에 탄 결혼사진. 얼굴 부분이 완전히 타버려서 누구인지 알 수 없다.\\"","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"이 공물을 불태울 경우 \'해든 필드\' 지역에서 희생제를 시작할 확률이 <b>약간 증가한다.</b><br><li>중첩 가능</li>","name":"수확제 광고 전단지","flavor":"\\"빛바랜 78년 해든필드 수확제의 광고 전단지. 할로윈 호박 캐릭터가 크게 그려져 있다.\\"","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"이 공물을 불태울 경우 \'해든필드\' 지역에서 희생제를 시작할 확률이 <b>상당히 증가한다</b>.<br><li>중첩 가능</li>","name":"오래된 물막이 판","flavor":"\\"곰팡이가 나고 부식된 구슬 장식 물막이 판. 해든필드의 거의 모든 집에서 찾을 수 있다\\"","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"이 공물을 불태울 경우 \'해든 필드\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br><li>중첩 가능</li>","name":"스트로드 부동산의 열쇠","flavor":"\\"평범해 보이는 열쇠. 열쇠고리에 연결된 태그의 앞면에는 \'스트로드 부동산\', 뒷면에는 \'45, 렘킨레인\' 이라는 글씨가 보인다.\\"","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"이 공물을 불태울 경우 \'백워터 늪지대\' 지역에서 희생제를 시작할 확률이 <b>약간 증가한다.</b><br><li>중첩 가능</li>","name":"연기나는 선박용 밧줄","flavor":"\\"불에 탄 밧줄 조각. 아직 따뜻한 연기를 내뿜는다.\\"","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"이 공물을 불태울 경우 \'백워터 늪지대\' 지역에서 희생제를 시작할 확률이 <b>상당히 증가한다.</b><br><li>중첩 가능</li>","name":"연기나는 환영 표지판","flavor":"\\"물광낸 삼나무의 거친 조각으로 만든 환영 표지판. 그을린 표지판에서 아직도 연기가 난다.\\"","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"이 공물을 불태울 경우 \'백워터 늪지대\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br><li>중첩 가능</li>","name":"할머니의 요리책","flavor":"\\"가죽을 엮어 만든 요리책. 끔찍하게도 할머니의 비밀 소스가 아닌 인육 요리 레시피가 적혀있다.\\"","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"이 공물을 불태울 경우 \'래리 기념 연구소\' 지역에서 희생제를 시작할 확률이 <b>약간 증가한다</b>.<br><li>중첩 가능</li>","name":"응급 자격증","flavor":"\\"환자들을 응급 조치를 위해 구금할 때 사용되는 노란색 자격증 사본. 번짐이 심해 뭐라고 써져있는지 읽을 수 없다. \\"","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"이 공물을 불태울 경우 래리 기념 연구소에서 희생제를 시작할 확률이 <b>상당히 증가한다</b><br>","name":"정신 감정서","flavor":"\\"헤르만 카터가 서명한 정신 감정서. 기억력 저하가 심각해 다음 치료단계로 넘어가야 한다고 쓰여 있다.\\"","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"이 공물을 불태울 경우 \'래리 기념 연구소\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br><li>중첩가능</li>","name":"부숴진 안경","flavor":"\\"구부러진 돋보기 안경. 안경알에는 마른 피가 묻어 있다.\\"","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"이 공물을 불태울 경우 붉은 숲에서 희생제를 시작할 확률이 <b>약간 증가한다</b><br><li>중첩 가능</li>","name":"색칠된 강가의 돌","flavor":"\\"매끄럽고 가벼운 돌, 강물로 광이 난다. 진지하게 생긴 곰을 그리기 위해 붉은색, 검은색, 하얀색 페인트로 장식했다.\\"","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"이 공물을 불태울 경우 \'붉은 숲\' 지역에서 희생제를 시작할 확률이 <b>상당히 증가한다</b>.<br><li>중첩 가능</li>","name":"아이들의 책","flavor":"\\"오래되어 바스라질것만 같은 동화책, 몇몇 페이지들은 풍화되었다.\\"","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"이 공물을 불태울 경우 \'붉은 숲\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br><li>중첩 가능</li>","name":"마지막 가면","flavor":"\\"아이의 얼굴에 꼭 맞게 만들어진 아름다운 호랑이  가면. 뒤에 흐릿하게 키릴 알파벳이 적혀 있다.\\"","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"이 공물을 불태울 경우 \'스프링 우드\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br><li>중첩 가능</li>","name":"피리부는 사나이","flavor":"\\"마을에게 배신당한 그는, 아이들을 납치하는것으로 복수했다.\\"","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"이 공물을 불태우면 희생제가 끝난 후에도 애드온을 잃지 않는다.<br>","name":"검은 보호자","flavor":"\\"나의 목소리를 듣고, 나의 뜻을 행하며, 나를 공허로부터 지켜라.\\"","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"이 공물을 불태우면 희생제에서 아이템과 애드온을 잃지 않는다.","name":"하얀 보호자","flavor":"\\"악으로부터 나를 지키고, 벗어날 수 있게 해주소서.\\"","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"이 공물을 불태울 경우 \'야마오카 사유지\' 지역에서 희생제를 시작할 확률이 <b>상당히 증가한다</b>.<br><li>중첩 가능</li>","name":"야마오카 가문 문장","flavor":"\\"당신은 자신이 죽인 가족들의 원혼으로부터 절대 벗어날 수 없어. 그날의 기억이 사라지지 않는 한 당신은 계속해서 도망쳐야 할거야.\\"","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"엔티티를 소환하여 특정 영역으로 보내질 확률을 바꿀 모든 공물을 거절하도록 요청한다.<br>동일한 네 개의 영역의 공물이 플레이하는 경우에만 취소할 수 있다.","name":"제물로 바쳐진 피보호자","flavor":"“저희는 맹목적으로 저희의 의지를 굽히지 않고 당신에게 지도를 호소합니다.”","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"화상을 입었을 때 미드위치 초등학교로 보내질 확률을 <b>엄청나게 증가한다</b>.","name":"메리의 편지","flavor":"\\"싱숭생숭했던 내 꿈에서 저 마을을 봤어..\\"","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"이 공물을 불태울 경우 \'기디언 고기 공장\' 지역에서 희생제를 시작할 확률이 <b>엄청나게 증가한다.</b><br>","name":"직쏘 퍼즐 조각","flavor":"\\"축하해. 당신은 아직도 살아있어. 많은 사람들은 살아있다는 것에 대해 감사할 줄을 모르더군. 그러나 당신은 아니야. 더 이상은 아니지.\\"","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"화상을 입었을 때 호킨스 국립 연구소로 보내질 확률을 <b>엄청나게 증가한다</b>.","name":"호킨스 국립 연구소 신분증 ","flavor":"\\"일련번호가 적힌 눅눅하고 피로 얼룩진 신분증.\\"","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"이 공물을 불태울 경우 글렌베일의 무덤으로 보내질 확률이 <b>엄청나게 증가한다</b>.","name":"먼지투성이 올가미","flavor":"\\"이 먼지투성이의 땅에서 살아남으려는 자들에게 물어보거라. 올가미가 진정으로 뜻하는 게 무엇인지. \'빌어먹을 자비\'다.\\"","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"끔찍한 형태로 뒤틀린 3주년 기념 케이크. 이 희생제에 참가한 모든 플레이어가 모든 항목에서 블러드포인트를 <b>103%</b> 더 획득한다.<br><li>중첩 가능</li>","name":"섬뜩한 케이크","flavor":"“축하합니다! 함께 3주년을 축하해 주세요!”<br>– 데드 바이 데이라이트 팀","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"세상 인상적으로 음산한 4주년 기념 케이크. 섬뜩한 케이크보다 1% 더 맛있다. 이 희생제에 참가한 모든 플레이어가 모든 항목에서 블러드포인트를 <b>104%</b> 더 획득한다.<br><li>중첩 가능</li>","name":"섬뜩한 케이크","flavor":"\\"4주년 축하해요! 앞으로 더 많은 해를 함께 하길!\\"<br>- 데드 바이 데이라이트 팀","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/ko/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"완벽한 형태의 얇은 렌즈. 빛을 넓게 확산시키는 대신, 사거리는 좁아지도록 설계되었다.<br><li>손전등 빛의 범위가 <b>적당히 넓어진다</b>.</li><li>손전등 빛의 사정거리가 <b>약간 감소한다</b>.</li>","name":"와이드 렌즈","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"손전등용 작은 전구. 더 많은 전력을 소모해서 밝고 강한 빛을 발산한다.<br><li>손전등의 빛의 반경이 <b>약간 좁아진다</b>.</li><li>손전등의 빛의 밝기가 <b>약간 증가한다</b>.</li><li>살인마의 실명 시간이 <b>약간 증가한다</b>.중첩 가능 </li>","name":"손전등용 전구","flavor":"\\"어떤 강력한 빛도 검은 안개의 어둠을 밝힐 수는 없어.\\"","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"후레쉬를 감싸기 위한 가죽 조각. 이것을 두르고 있으면 쥐고 있기 편하다. <br><li>손전등의 정확도가 <b>약간 증가한다</b>.</li>","name":"가죽 손잡이","flavor":"\\"손에 땀이 나서 자꾸만 떨어뜨리게 돼.\\"","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"제조사를 알 수 없는 평범한 배터리.<br><li>손전등의 사용 시간을 <b>2초</b> 늘려 준다.</li>","name":"배터리","flavor":"\\"또 거의 다 쓴 배터리잖아.\\"","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"손전등의 빛이 강해지도록 렌즈와 반사경이 잘 조립되어 있다.<br><li>살인마에 대한 손전등 빛의 밝기가 <b>적당히 증가한다.</b></li><li>실명 시간이 <b>적당히 증가한다</b>.</li>","name":"집중반사경","flavor":"\\"저 괴물들이 두른 어둠의 장막을 빛으로 태워버리겠어.\\"","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"손전등의 그립감을 높이기 위한 특제 고무 손잡이.<br><li>손전등의 정확도가 <b>적당히 증가한다</b>.</li>","name":"고무 손잡이","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"손전등의 배터리 수명을 절약할 수 있도록 설계된 필라멘트 전구.<br><li>손전등의 배터리 소모량이 <b>적당히 감소한다</b>.</li>","name":"저전압 필라멘트","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"\\"산업용 규격\\"이라고 표기된 배터리.<br><li>손전등의 사용 시간을 <b>4초</b> 늘려 준다.</li>","name":"대용량 배터리","flavor":"\\"배터리엔 8시간 사용할 수 있다고 적혀있지만 이 검은 안개에서는 단 몇초 정도 쓸 수 있을 뿐이다.\\"","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"손전등의 빛을 한 곳에 더욱 강하게 집중 시킬 수 있도록 만들어진 두꺼운 유리 렌즈.<br><li>손전등 빛의 사정거리가 <b>약간 증가한다</b>.</li><li>손전등 빛의 반경이 <b>약간 좁아진다</b>.</li><li>손전등 빛의 밝기가 <b>약간 증가한다</b>.</li><li>실명 시간이 <b>약간 증가한다</b>.</li>","name":"포커스 렌즈","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"최신 배터리. 더 오랫동안 지속된다.<br><li>손전등의 사용 시간을 <b>6초</b> 늘려 준다.</li>","name":"오래 가는 배터리","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"강력하고 맑은 빛을 만들어내는 할로겐 전구.<br><li>손전등 빛의 밝기가 <b>상당히 증가한다</b>.</li><li>실명 시간이 <b>상당히 증가한다 </b>.</li>","name":"강력한 할로겐 전구","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"최고급 수정으로 만든 와이드 렌즈. 손전등에 부착해 최적의 출력을 발산한다.<br><li>손전등 빛의 범위가 <b>적당히 넓어진다</b>.</li><li>손전등 빛의 세기가 <b>약간 증가한다</b>.</li><li>손전등 빛의 밝기가 <b>적당히 증가한다</b>.</li><li>실명 시간이 <b>적당히 증가한다</b>.</li>","name":"최고급 수정 렌즈","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"정체를 알 수 없는 무겁고 불투명한 전구. 전원을 차단해도 희미한 빛이 흘러나온다.<br><li>손전등 빛의 밝기가 <b>엄청나게 증가한다</b>.</li><li>실명 시간이 <b>엄청나게 증가한다</b>.</li><li>손전등의 배터리 소모량이 <b>약간 증가한다</b>.</li>","name":"정체불명의 전구","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"기도 의식에 사용되는 단단하게 매듭지어진 끈. 열쇠에 부착할 수 있다.<br><li>열쇠의 사용 시간을 <b>10초</b> 늘려 준다.</li>","name":"의식용 매듭","flavor":"\\"너의 기도는 안개 속에서 길을 잃고 헤매일 것이다.\\"","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"구멍나고 긁혀있는 흰색의 진주. 작은 고리를 이용해서 열쇠에 부착할 수 있다.<br><li>열쇠의 오라 감지 범위가 <b>적당히 증가한다</b>. </li>","name":"흠집 난 진주","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"다양한 크기의 어두운색의 구슬로 꿰어진 의식용 도구. 열쇠에 부착할 수 있다.<br><li>열쇠의 사용 시간을 <b>15초</b> 늘려 준다.</li>","name":"묵주","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"심하게 마모된 동화. 한 때 어떤 글귀나 그림이 새겨져 있던 것 같지만 지금은 형체를 알아 볼 수 없다. 열쇠에 부착하면 특별한 오라를 느낄 수 있다.<br><li><b>24미터</b> 내에 있는 <b>다른 생존자의 오라</b>를 보여 준다.</li>","name":"침식된 토큰","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"밋밋하게 생긴 금화. 양쪽면 모두 특별한 글귀가 써있지 않고 매끄럽다. 열쇠에 부착하면 특별한 오라를 느낄 수 있다.<br><li><span class=\\"Highlight1\\">48미터</span> 내에 있는 <b>다른 생존자의 오라</b>를 보여 준다.</li><li>중첩 가능</li>","name":"황금 토큰","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"특이할 정도로 푸르스름하고 어두운 광택을 지녔지만 모양은 평범한 열쇠고리. 열쇠에 부착하면, 사용자는 어떤 최악의 상황에서도 열쇠를 잃어버리지 않는다.<br><li>당신이 사망했을 때, 열쇠를 잃는 대신 이 애드온을 잃는다.</li>","name":"열쇠고리","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"미세하게 떨리는 불투명한 유리조각. 열쇠로 검은 자물쇠를 열 때, 유리 토큰은 열쇠가 부러지지 않도록 하여 안개를 유리 속으로 빨아들인다.<br><li>검은 자물쇠를 열 경우, 열쇠를 잃는 대신 이 애드온을 잃는다.</li>","name":"하얀 빛깔 유리","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"피의 색을 닮아 붉고, 표면에 마치 혈관 같은 검은 줄무늬가 있다. 만지면 따뜻함이 느껴지는 호박옥. 열쇠에 부착하면 특별한 오라를 느낄 수 있다. <br><li>열쇠의 에너지를 <b>크게 소모해서</b> <span class=\\"Highlight1\\">32미터</span> 내에 있는 <b>살인마의 오라</b>를 볼 수 있다. </li>","name":"핏빛 호박","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"두꺼운 섬유 소재의 지도 조각. 무언가 그려져 있지만, 색이 바래고 찢겨 쓸모는 없다.<br><li>지도의 사용 시간을 <b>5초</b> 증가시켜 준다. </li>","name":"지도 부록","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"짧은 전선. 양쪽 끝을 힘으로 잡아 뜯은 것 처럼 심하게 훼손되어있다. 이 전선을 지도에 묶으면 오라를 느끼는 능력이 향상된다.<br><li><b>탈출구</b>의 위치를 탐색할 수 있는 능력이 활성화된다.</li>","name":"노란색 전선","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"평행선의 음영 고무패드가 달려 있는 문서용 목제 도장. 어떤 용도로 누가 사용했는지는 알 수 없지만, 지도에 사용할 수 있다.<br><li>지도의 탐색 범위가 <b>적당히 증가한다</b>.</li>","name":"특이한 도장","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"끈적하고 반투명한 젤리. 무엇으로 만들었는지는 알 수 없지만 열에 매우 강하고 어쩐지 섬뜩한 느낌의 라벤더 색이다.<br><li>지도가 소모되는 시간을 <b>적당히 늦춰 준다.</b></li>","name":"지연성 젤리","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"진홍색의 뻣뻣하고 거친 노끈. 이 끈을 지도에 묶으면 오라를 느끼는 능력이 향상된다.<br><li><b>살인마의 물건</b>의 위치를 탐색할 수 있는 능력이 활성화된다.</li>","name":"붉은색 노끈","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"지도를 확대하고 특정 위치를 표시할 수 있도록 만들어진 황금 구슬로 꿴 표시기. 이 구슬은 다른 생존자들이 감지할 수 있는 특별한 빛을 발산한다. <br><li>지도의 추가 상호작용으로 표식을 남길 수 있다.</li><li>남긴 표식은 다른 모든 생존자들에게도 공유된다.</li>","name":"유리 구슬","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"단단한 나무로 만들어진 도장. 하단에는 해석할 수 없는 글귀가 조각되어 있다: \\"kw\'zvre\'od\\\\.\\" 지도에 사용할 수 있다.<br><li>지도의 탐색 범위가 <b>상당히 증가한다</b>.</li>","name":"이상한 도장","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"매끈한 재질의 검은색 끈. 이 끈을 지도에 묶으면 오라를 느끼는 능력이 향상된다.<br><li><b>비상탈출구</b>의 위치를 탐색할 수 있는 능력이 활성화된다.</li>","name":"검은색 비단 끈","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"렌즈 세트로 구성된 대단히 복잡한 장치. 렌즈의 초점을 조절하는 기어는 사람의 눈에 보이지 않는 무언가에 스스로 초점을 맞춘다.<br><li>지도를 활성화하면 보여지는 오라가 사용자뿐 아니라 모든 다른 생존자들에게도 공유된다.</li>","name":"수정 구슬","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"교차 오염을 방지하는 용도의 일회용 의료용 장갑.<br><li>스킬 체크 대성공을 통한 진척도 보너스가 <b>적당히 증가한다</b>.</li>","name":"의료용 장갑","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"작은 상처를 봉합하는데 사용하는 의료용 테이프.<br><li>치료 속도가 <b>약간 상승한다</b>.</li>","name":"다공성 반창고","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"구급상자에서 흔히 찾을 수 있는 붕대.<br><li>구급상자에 <b>내구도 8</b>을 추가한다.</li>","name":"붕대","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"평범한 스펀지. 주변의 피를 흡수하여 상처 부위를 잘 확인할 수 있다.<br><li>스킬 체크 대성공을 통한 진척도 보너스가 <b>상당히 증가한다</b>.</li>","name":"스펀지","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"클립이 필요 없이 스스로 고정되어 상처 부위를 빠르게 지혈이 가능한 붕대.<br><li>구급상자에 내구도를 <b>8</b> 추가한다.</li><li>치료 속도가 <b>약간 빨라진다</b>.</li>","name":"자기 접착 붕대","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"공식적인 의료 도구는 아니다. 다소 고통스러운 방법이지만 빠르게 상처를 봉합할 수 있다.<br><li>스킬 체크 발생 빈도가 <b>적당히 증가한다</b>.</li><li>스킬 체크 대성공 시 <b>100%의 블러드포인트 보너스</b>를 받는다.</li><li>치료 속도가 <b>약간 증가한다</b>.</li>","name":"실과 바늘","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"붕대를 쉽게 자를 수 있게 만든 가위.<br><li>치료 속도가 <b>적당히 빨라진다.</b></li>","name":"의료용 가위","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"다양한 상처에 활용할 수 있는 멸균 거즈. 종합 치료 용품의 구성품.<br><li>구급상자에 <b>내구도 12</b>를 추가한다.</li>","name":"거즈 두루마리","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"절개된 부위를 봉합하는데 사용하는 의료용 도구. 매우 효과적이지만 사용하기 어렵다.<br><li>스킬 체크의 성공율이 <b>상당히 증가한다</b>.</li><li>스킬 체크 대성공 시 <b>150%의 블러드포인트 보너스</b>를 받는다.</li><li>치료 속도가 <b>약간 증가한다</b>.</li>","name":"수술용 봉합선","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"심한 삼출성 부상에 사용하는 젤 패드.<br><li>구급상자에 <b>내구도 16</b>을 추가한다.</li>","name":"젤 패드","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"복부에 큰 상처가 생겼을 때, 체액이 새어나오는 것을 방지하는 용도로의 흡수력이 높은 패드.<br><li>치료 속도가 <b>상당히 빨라진다</b>.</li><li>내구도가 <b>8</b>만큼 <b>감소한다</b>.</li>","name":"압박 붕대","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"지혈 효과가 있는 하얀색 가루. 상처 부위에 바르면 출혈을 막을 수 있다.<br><li>치료받는 동안<i>추가 상호작용</i> 버튼을 누르면, 항출혈 주사기를 사용할 수 있는 구급상자를 사용할 수 있다.</li><li>부상당한 생존자에게 <i>항출혈제</i>를 사용했다면 그는 <b>8초</b> 동안 <b>인내</b> 상태 효과에 빠진다.<li>사용 중인 구급 상자가 소비된다.</li>","name":"항 출혈제","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"단 몇 초면 출혈을 멎게 만드는 항출혈성 치료제.<br><li>치료받는 동안<i>추가 상호작용</i> 버튼을 누르면, 항출혈 주사기를 사용할 수 있는 구급상자를 사용할 수 있다.</li><li>치료제를 맞은 생존자는 <b>16</b>초 후 자동으로 건강 상태 하나를 회복한다.</li><li>필요 시간은 <i>치유 속도</i>에 영향을 미치는 기술과 애드온에 따라 달라진다.</li><li>이 효과는 효과를 받는 생존자의 건강 상태가 바뀌거나 살인마에게 잡히면 취소된다.</li><li>사용 중인 구급상자가 소비된다.</li>","name":"항 출혈 주사기","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"호스를 조정하거나 전선을 고정하는데 유용한 도구. 피해이나 부상을 방지한다.<br><li>수리 소음과 들을 수 있는 거리가 8미터 감소한다.</li>","name":"스프링 클램프","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"스프링, 나사, 톱니 등의 잡다한 부품.<br><li>공구상자에 <b>내구도를 8</b> 추가한다.</li>","name":"잡동사니","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"평범한 천 조각. 수상할 정도로 깨끗하다.<br><li>공구상자의 수리 속도가 <b>약간 빨라진다.</b></li>","name":"깨끗한 천","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"휴대용으로 가지고 다닐 수 있지만 매우 무거운 무게를 자랑하는 철선.<br><li>공구상자에 <b>내구도를 12</b> 추가한다.</li>","name":"와이어 스풀","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"기계 장치 내부 깊숙한 곳의 볼트를 조정할 수 있는 도구.<br><li>공구상자의 수리 속도가 <b>적당히 빨라진다</b>.</li>","name":"회전고리 소켓","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"손재주를 부릴 수 없게 되지만 부상으로부터 손을 보호해주는 두꺼운 장갑.<br><li>공구상자를 이용하여 갈고리를 파괴하는 동안 살인마에게 발각되지 않는다.</li>","name":"보호 장갑","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"누군가가 다급하게 수리 방법을 기록해둔 나무 껍질.<br><li>공구상자로 수리하는 동안 스킬 체크가 제거된다.</li>","name":"설명서","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"손잡이가 거친 조정용 렌치. 공구상자의 기본 구성품.<br><li>공구상자로 파괴된 갈고리는 재생성까지 15초가 걸린다.</li>","name":"그립 렌치","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"금속제 와이어의 양 끝에 나무 손잡이를 달아 만든 기본적인 절삭 도구.<br><li>공구상자를 이용한 파괴 공작 속도가 <b>약간 빨라진다</b>.</li>","name":"커팅용 와이어","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"한 손으로 들어 사용할 수 있는 작은 쇠톱.<br><li>공구상자를 이용한 파괴 공작 속도가 <b>적당히 증가한다.</b></li>","name":"쇠톱","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"매우 정교하게 설계된 새로운 부품. 발전기와 호환되지 않을 것만 같다. 생산공정을 갓 마치고 출품된 것처럼 깨끗하게 빛난다.<br><li><b>공구상자 수리</b> 상호작용이 <b>새로운 부품 장착</b>으로 대체된다.</li><li><i>새로운 부품 장착</i> 상호작용은 <b>5초</b> 동안 발전기 수리를 자동으로 <b>15%</b> 진전시킨다.</li><li>장착이 수행되는 동안 <b>어려운 스킬체크가 2번</b> 발동된다.</li><li>이 스킬 체크에 성공할 시 추가적으로 <b>발전기 수리를 5%</b> 더 진전시켜, <b>발전기를 최대 25% 수리한다.</b></li><li><i>이 애드온은 사용 후 소모된다.</i></li>","name":"새로운 부품","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"설명할 수 없고 이해도 할 수 없는 기운이 서린 결혼반지. 글자가 새겨져 있으며 안갯속에서 나왔다.<li>집착 대상의 오라를 노출시킨다.</li><li>살인마의 집착에 걸려들 확률을 감소시킨다.</li><li>중첩 가능</li>","name":"특별한 웨딩 반지","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/ko/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"목표 항목에서 블러드포인트를 <span class=\\"Highlight2\\">50%</span> 더 획득한다.<br><li>개인</li><li>중첩 가능</li>","name":"늪지 월계수 향주머니","flavor":"\\"마른 잎이 들어있는, 손바느질로 만든 작은 향주머니. 차와 비슷한 희미한 향을 뿜는다.\\"","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"목표 항목에서 블러드포인트를 <span class=\\"Highlight3\\">75%</span> 더 획득한다.<br><li>개인</li><li>중첩 가능</li>","name":"산뜻한 늪지 월계수","flavor":"\\"오염된 늪의 한가운 데서 자라는 아름다운 보라색 꽃. 차와 비슷한 부드러운 향을 뿜는다.\\"","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"목표 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>개인</li><li>중첩 가능</li>","name":"향기로운 늪지 월계수","flavor":"\\"오염된 늪의 한가운 데서 자라는 아름다운 보라색 꽃. 차와 비슷한 강한 향을 뿜는다.\\"","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"생존 항목에서 블러드포인트를 <span class=\\"Highlight2\\">50%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"상쾌한 아마란스 향주머니","flavor":" \\"구슬 같은 곡물이 들어있는, 손바느질로 만든 작은 향주머니. 아마란스의 꽃말은 영속성이라고 한다.\\"","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"생존 항목에서 블러드포인트를 <span class=\\"Highlight3\\">75%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"산뜻한 아마란스","flavor":"\\"옅은 녹색 잎에 진홍색의 잎맥이 눈에 띈다. 아마란스의 꽃말은 영속성이라고 한다.\\"","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"생존 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>개인</li><li>중첩 가능</li>","name":"향기로운 아마란스","flavor":"\\"옅은 녹색 잎에 진홍색의 잎맥이 눈에 띈다. 무 냄새가 강하게 난다.\\"","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"이타심 항목에서 블러드포인트를 <span class=\\"Highlight2\\">50%</span> 더 획득한다.<br><li>개인</li><li>중첩 가능</li>","name":"프림로즈 꽃 향주머니","flavor":"\\"4개의 금빛 꽃잎이 들어있는, 손바느질로 만든 작은 향주머니. 태양이 밤에게 자리를 양보하기 직전의 마지막 순간에 피어난다.\\"","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"이타심 항목에서 블러드포인트를 <span class=\\"Highlight3\\">75%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"산뜻한 프림로즈 꽃","flavor":" \\"절정기에 수확한 금빛의 꽃. 태양이 밤에게 자리를 양보하기 직전의 마지막 순간에 피어난다.\\"","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"이타심 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"향기로운 프림로즈 꽃","flavor":"\\"절정기에 수확한 금빛의 꽃. 강하고 부드럽게 편안함을 뿜는다.\\"","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"대담함 항목에서 블러드포인트를 <span class=\\"Highlight2\\">50%</span> 더 획득한다.<br><li>개인</li><li>중첩 가능</li>","name":"패랭이 꽃 향주머니","flavor":"\\"창백한 꽃잎과 청록의 잎이 섞여 들어있는, 손바느질로 만든 작은 향주머니. 매운 정향같은 향을 뿜는다.\\"","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"대담함 항목에서 블러드포인트를 <span class=\\"Highlight3\\">75%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"산뜻한 패랭이 꽃","flavor":"\\"분홍빛의 꽃잎과 피처럼 붉은 꽃술의 꽃으로 만들어진 꽃다발. 매운 정향 같은 향을 뿜는다.\\"","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"대담함 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"산뜻한 패랭이 꽃","flavor":" \\"분홍빛의 꽃잎과 피처럼 붉은 꽃술의 꽃으로 만들어진 꽃다발. 매운 정향 같은 향을 뿜는다.\\"","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"모든 생존자가 모든 항목에서 블러드포인트를 <span class=\\"Highlight1\\">25%</span> 더 획득한다.<br><li>중첩 가능</li>","name":"묶여진 편지봉투","flavor":"\\"뜯겨진 봉투가 4색의 리본으로 다시 묶여있다.\\"","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"모든 항목에서 블러드포인트를 <span class=\\"Highlight1\\">25%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"밀봉된 편지","flavor":"\\"시간이 흘러 변색한, 주소도 쓰여 있지 않고 열어 보지도 않은 봉투. 그 내용은 절대 알려지지 않을 것이다.\\"","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"모든 항목에서 블러드포인트를 <span class=\\"Highlight4\\">100%</span> 더 획득한다.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"탈출! 케이크","flavor":" \\"이 케이크에 있는 그림은 아주 당연하게도 진짜지.\\"","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"행운이 <b>약간 증가한다.</b><br><li>중첩 가능</li>","name":"가루 주머니","flavor":"\\"면 재질의 작은 주머니에 정체를 알 수 없는 백악질의 가루가 들어 있다. 몇몇 사람들은 이 공물이 행운을 가져다준다고 믿는 모양이다.\\"","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>모든</b> 생존자의 행운이 <b>적당히 증가한다</b>.<br><li>중첩 가능</li>","name":"크림색 가루 주머니","flavor":"\\"부서지기 쉬운 검은 소금으로 만들어진 공물을 바치는 여성의 조각상이다. 이것이 행운을 불러온다고 믿는 사람들도 있다.\\"","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"행운이 <b>상당히 증가한다</b>.<br><li>개인에게만 적용됨</li><li>중첩 가능</li>","name":"상아색 가루 주머니","flavor":"\\"손으로 바느질한 작은 가죽 주머니. 달빛을 반사하는 상아색 가루로 가득 차 있다. 이것이 행운을 불러온다고 믿는 사람들도 있다.\\"","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>모든</b> 생존자의 행운이 <b>약간 증가한다</b>.<br><li>중첩 가능</li>","name":"소금 주머니","flavor":"\\"검은 소금 결정이 들어있는 작은 주머니. 이 주머니가 행운을 불러온다고 믿는 사람들도 있다. 흘리지 말 것.\\"","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>모든</b> 생존자의 행운이 <b>상당히 증가한다</b>.<br><li>중첩 가능</li>","name":"비고의 염장한 입술 항아리","flavor":"\\"검은 소금물에 사람의 입술들이 졀여져있는 투명한 유리병. 이것이 행운을 불러온다고 믿는 사람들도 있다.\\"","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"엔티티에게 <span class=\\"Highlight1\\">1개</span>의 아이템 상자를 더 만들어낼 것을 요청한다. <br><li>중첩 가능</li>","name":"색 바랜 동전","flavor":"\\"더 이상 반짝이지 않는 동그란 금속 동전 조각\\"","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"엔티티에게 <span class=\\"Highlight2\\">2개</span>의 아이템 상자를 더 만들어낼 것을 요청한다.<br><li>중첩 가능</li>","name":"빛나는 동전","flavor":"\\"깨끗하게 닦여진 금화\\"","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"엔티티를 진정시켜 세계에 나타나는 희생의 갈고리 사이와의 <b>거리</b>를 <b>약간 늘려줄 것을</b> 요청한다. <br><li>중첩 가능</li>","name":"굳어버린 오크 나무","flavor":"\\"돌처럼 단단하게 굳어버린 오크 나무 조각.\\"","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"다른 한 명의 생존자와 함께 게임을 시작한다.<br><li>비밀</li>","name":"연대의 장막","flavor":"\\"천조각으로 묶여있어 .\\"","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"모든 생존자가 모여서 희생제를 시작한다.<br><li>비밀</li>","name":"결합의 장막","flavor":"\\"사각형의 천을 잘 빨아서, 각 모서리의 끝을 매듭짓는다.\\"","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"살인마로부터 가능한 한 멀리에서 게임을 시작한다.<br><li>비밀</li>","name":"비고의 장막","flavor":"\\"긴 세월을 안개 속에서 보내며 많은 것들을 봤지만, 내가 이해할 수 있는 것은 안개는 거스를 수 없다는 것 뿐이었다.\\" -비고의 일지","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/ko/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"오라를 감지하는 잠재력을 끌어낸다. 발전기 수리를 완료할 때마다 살인마의 오라를 <span class=\\"Highlight1\\">{0}초</span> 동안 볼 수 있다.<br>출구에 전원이 공급되면 살인마의 오라를 <span class=\\"Highlight2\\">{1}초</span> 동안 볼 수 있다.","name":"어두운 감각","flavor":"\\"오래된 격언: 침착해라. 굳게 마음을 먹고 서두르지 말라. 적을 이기는 가장 좋은 방법은 적의 생각을 읽는 것이다.\\" - 잃어버린 테이프, 머프","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. 실패에 대한 당신의 공포로부터 발생한 피해망상이 당신이 같은 실수를 반복하는 것을 막도록 도와준다. 희생제가 시작될 때와 각 발전기가 수리 완료될 때, 서로 가까이에 있는 발전기 <span class=\\"Highlight1\\">{0}개</span>의 오라를 <span class=\\"Highlight2\\">{1}초</span> 동안 볼 수 있다.<br>이 때 지도를 가지고 있다면 <i>데자뷰</i>로 찾은 발전기도 지도에 추가된다.","name":"데자뷰","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"점점 커지는 탈출 가능성이 자신의 희망을 채우고 날개를 달아준다. 출구에 전원이 공급되면 <span class=\\"Highlight1\\">{0}%</span> <b><i>이동 속도 증가</i></b> 상태 효과가 <span class=\\"Highlight3\\">{1}초</span> 동안 지속한다.<br>","name":"희망","flavor":"\\"벨트 차, 멍청이들아! 달려보자고!\\" - 잃어버린 테이프: 니키","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"갈고리에 걸려있는 동안 다른 생존자들의 잠재력을 끌어내 오라가 보이도록 한다. 생존자들에게 서로의 오라를 보여주고, 자신이 걸린 갈고리 주변 <span class=\\"Highlight1\\">{0}미터</span> 내에 있는 살인마의 오라도 보여준다.<br><br>다른 생존자가 갈고리에 걸려 있는 동안 다른 생존자의 오라가 보이며, 다른 생존자가 걸린 갈고리 주변 <span class=\\"Highlight1\\">{0}미터</span> 내에 있는 살인마의 오라도 보여준다.","name":"동질감","flavor":"\\\\“다른 이들에게 잘해주도록 해, 우린 하나가 되어야 살아남을 수 있어.\\\\” -잃어버린 테이프: 수잔","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"가볍고 부드럽게 달려 흔적을 찾기 어렵게 만든다. 발자국이 지속하는 시간이 <span class=\\"Highlight1\\">{0}초</span> 감소한다.<br>","name":"경량화","flavor":"\\"천천히 움직여, 그가 네 위치를 알아챌 거야... 항상 말했잖아. 천천히 살고 나이 먹어서 죽자고.\\" -잃어버린 테이프. 딜런","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"누군가를 남겨두고 도망치는 것은 상상도 할 수 없는 일이다. 출구가 열리면, 다음을 획득하게 된다.<br><li>다른 생존자를 치유하거나 갈고리에서 구출 시, <span class=\\"Highlight1\\">{0}%</span> 추가 블러드포인트 획득.</li><li>다른 생존자를 치유하거나 갈고리에서 구출 시, <span class=\\"Highlight2\\">{1}%</span> 추가 속도 획득.</li><li>다른 생존자의 오라를 볼 수 있음.</li>","name":"아무도 버려두지 않아","flavor":"“…그래. 말도 안 되겠지. 그래도 나는 우리가 함께 한다면 그 괴물들을 뛰어넘고 쓰러뜨릴 수 있다고 믿어. 절대 예측할 수 있거나 이기적으로 움직이지마!” –잃어버린 테이프: 클라이드","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. 주변 <span class=\\"Highlight1\\">{0}미터</span> 내에 존재하는 미개봉된 상자와 아이템의 오라를 볼 수 있다. 상자에서 더 높은 등급의 아이템을 획득할 확률이 <b>상당히</b> 증가한다.","name":"약탈자의 본능","flavor":"\\"먼저 온 이들은 이 상자들을 몇 시간이나 뒤지곤 했었다.\\" -잃어버린 테이프: 아제유","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"위험을 감지하는 능력을 습득한다. <span class=\\"Highlight3\\">{1} 초</span>마다 한 번씩, 자신이 바라보는 전방 <span class=\\"Highlight1\\">45도</span>, <span class=\\"Highlight2\\">{0}미터</span> 원뿔형 범위 안에 살인마가 있다면 소리로 알림을 받게 된다. ","name":"불길한 예감","flavor":"\\"느낌이 좋지 않아, 뭔가 오고 있어!\\"","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"절망적인 상황이 당신에게 힘을 불어넣는다. 부상당한 상태에서 수리, 파괴공작, 치료, 구출, 창틀 넘기, 정화, 출구 열기 및 잠금 해제 속도가 <span class=\\"Highlight1\\">{0}%</span> 빨라진다.","name":"회복력","flavor":"\\"상황이 안 좋지만... 지금은 집중해야 돼.\\"","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"갈고리에서 풀려나는 효과적인 방법을 알아냈다.<br><li>갈고리에서 탈출 시도를 할 수 있는 횟수가 <span class=\\"Highlight1\\">{0}</span>회 증가한다.</li><li>탈출 시도에 성공할 확률은 <span class=\\"Highlight2\\">{1}%</span> 증가한다.</li>","name":"미끈한 고기","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"위험을 감지하는 능력을 습득한다. <span class=\\"Highlight3\\">{1}초</span> 마다 한 번씩, 당신이 바라보는 전방 <span class=\\"Highlight1\\">45도</span>, <span class=\\"Highlight2\\">{0}미터</span>의 원뿔형 범위 안에 토템이 있다면 소리로 알림을 받는다. 아무 플레이어가 각 일반 토템과 주술 토템은 정화할 때마다 토큰 하나를 획득하게 된다. 작은 사냥감의 탐지 원뿔형 범위는 토큰마다 <span class=\\"Highlight4\\">5도</span>씩 감소한다.","name":"작은 사냥감","flavor":"\\"안 될 말이지.\\" -잃어버린 테이프: 앤디","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"이상한 따끔거림이 당신에게 다가오는 파멸을 경고한다. <span class=\\"Highlight1\\">{0}미터</span> 내에 존재하는 살인마가 당신이 있는 방향을 직접 바라볼 때 활성화된다. \'등골이 오싹해\' 활성화 중에는 스킬 체크 발생 빈도가 <span class=\\"Highlight2\\">{1}%</span> 증가하고, 스킬 체크 성공 구간이 <span class=\\"Highlight3\\">{2}%</span> 좁아진다. 또한 등골이 오싹해 활성화 중에는 수리, 파괴공작, 치료, 구출, 넘기, 정화, 출구 열기 및 잠금 해제 속도가 <span class=\\"Highlight4\\">{3}%</span> 증가한다.","name":"등골이 오싹해","flavor":"\\"여기 문자를 사용하지 않는 괴이한 목소리가 있습니다. 들어보세요.\\" -새시의 잃어버린 테이프","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"극한의 상황 속에서 놀라운 뒷심을 발휘한다. 부상한 상태에서 치료와 수리를 할 때 스킬 체크의 대성공 구간이 <span class=\\"Highlight1\\">{0}%</span> 넓어진다.","name":"이런 일이 일어나다니","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"다른 사람을 도와 의욕을 증진시킨다.<br><br>갈고리에서 생존자를 구출하면 <span class=\\"Highlight3\\">{1}초</span> 동안 치료 속도가 <span class=\\"Highlight1\\">{0}%</span> 빨라진다.","name":"우린 해낼거야","flavor":"\\"우리가 서로 돕는다면 우리 모두 탈출할 수 있을거라고 믿어.\\"","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. <span class=\\"Highlight1\\">{0}미터</span> 범위 내에 있는 동료의 오라를 감지할 수 있게 된다.<br>","name":"유대감","flavor":"“우리는 똘똘 뭉쳐야 합니다. 당신들이 살아남아야 나도 살 수 있어요!” -드와이트","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"<span class=\\"Highlight2\\">{1}미터</span> 내에 모든 다른 생존자는 보너스 수리 속도 <span class=\\"Highlight1\\">{0}%</span>를 획득하며, 범위 내에 있는 모든 생존자에게 동일한 보너스가 적용된다.<br>협력 행동 시 블러드포인트를 <span class=\\"Highlight3\\">{2}%</span> 더 얻는다.<br>생존자는 한 번에 하나의 자기 증명 영향만 받을 수 있다.<br>","name":"자기 증명","flavor":"\\"네가 내게 뭘 할 수 있는지 보여줘 봐!\\" -드와이트","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"더 효율적으로 협력할 수 있는 팀을 구성할 수 있다. 당신과 <span class=\\"Highlight2\\">{1}미터</span> 이내의 거리에 있는 다른 생존자의 치료, 파괴 공작, 정화, 출구 열기, 상자 잠금 해제 속도가 <span class=\\"Highlight1\\">{0}%</span> 증가한다.<br>생존자는 한 번에 하나의 리더 효과만 받을 수 있다.<br>리더 기술의 유효 범위를 떠나도 기술은 <span class=\\"Highlight3\\">{2}초</span> 동안 유지된다.","name":"리더","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"창틀을 뛰어넘을 때와 캐비닛에 숨을 때 다른 사람들보다 조용히 움직일 수 있다.<br><br>소음과 발각 범위가 <span class=\\"Highlight1\\">{0}%</span> 감소한다.<br><br>이 효과는 <span class=\\"Highlight2\\">{1}초</span>에 한 번씩만 발동된다.","name":"빠르고 조용하게","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"달리기 시작할 때, 전력을 다한 질주로 달리기 속도가 <span class=\\"Highlight2\\">{1}초</span> 동안 <span class=\\"Highlight1\\">{0}%</span>로 상승한다.<br>이동 속도 증가가 끝난 후 <span class=\\"Highlight4\\">{2}초</span> 동안 <b><i>탈진</i></b> 상태이상에 걸리게 된다.<br><i>전력 질주</i>는 <b><i>탈진</i></b> 상태이상을 겪는 중에는 사용할 수 없다.<br>달리기 중에는 <b><i>탈진</i></b> 상태이상으로부터 회복할 수 없다.","name":"전력 질주","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"탈출을 눈앞에 두고, 예상치 못한 힘을 얻는다. 출구에 전원이 공급되면, <span class=\\"Highlight1\\">즉시 <b>한 단계 회복</b></span>하고, <span class=\\"Highlight3\\">{1}초</span> 동안 달리기 속도가 <span class=\\"Highlight2\\">{0}%</span>로 상승한다. <br>이동할 수 없는 상황에서 <i>아드레날린</i>이 발동된 경우, 다시 움직일 수 있을 때까지 효과 발동이 지연된다.<br>꿈 속에 있을 때 <i>아드레날린</i>이 발동된 경우, 즉시 <b>꿈에서 깨어난다</b>. <br><i>아드레날린</i>은 <b>탈진</b> 상태이상을 무시한다.<br>이동 속도 증가가 끝난 후 <span class=\\"Highlight4\\">{2}초</span> 동안 <b><i>탈진</i></b> 상태이상에 걸리게 된다. 달리기 중에는 <b><i>탈진</i></b> 상태이상으로부터 회복할 수 없다.","name":"아드레날린","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. <span class=\\"Highlight1\\">{0}미터</span> 내에 존재하는 부상한 상태나 빈사 상태 생존자의 오라를 볼 수 있다. 대상 생존자가 살인마와 직접 접촉한 동안에는 보이지 않는다.","name":"공감","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"모닥불 주변에서 발견한 식물로 출혈을 늦추는 약물을 만들어 낸다. <b>치료 속도</b>와 <b>치료 아이템</b> 효율이 <span class=\\"Highlight1\\">{0}%</span> 증가한다.<br>","name":"식물학 지식","flavor":"\\"기초적인 식물학 지식만 갖춰도 언젠가 목숨을 구할 수 있지.”","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"통상의 <span class=\\"Highlight1\\">{0}%</span> 속도로 구급상자 없이 자가 치료를 할 수 있다. 자가 치료에 구급상자를 사용할 시 효율이 <span class=\\"Highlight3\\">{1}%</span> 증가한다.","name":"자가 치료","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"집중하여 명상과 비슷한 상태에 들어가 통증을 어느 정도 완화할 수 있다. 부상으로 인한 신음이 <span class=\\"Highlight1\\">{0}%</span> 줄어든다.","name":"굳건한 의지","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"마치 신뢰하는 것처럼, 당신이 가까이에 있어도 동물들이 평온함을 유지한다. 산림 동물들을 놀라게 할 확률이 <span class=\\"Highlight1\\">{0}%</span> 감소한다.<br>차분한 영혼은 비명을 참아낼 수 있도록 해준다.","name":"차분한 영혼","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"오라를 감지하는 잠재력을 끌어낸다.<br><li>살인마가 생존자를 옮기고 있는 경우, 생존자를 짊어진 장소로부터 <span class=\\"Highlight1\\">56 미터</span> 범위 내에 갈고리 오라를 볼 수 있게 된다.</li><br>공구상자 없이 갈고리를 파괴할 수 있는 능력이 활성화된다.<br><li>공구상자 없이 갈고리를 파괴하는 것은 <span class=\\"Highlight2\\">2.5초</span>가 걸린다.</li><li>파괴공작은 <span class=\\"Highlight3\\">{0}초</span>의 재사용 대기 시간이 걸린다.</li>","name":"공작원","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"당신의 민첩함은 타의 추종을 불허한다.<br><br>마치 고양이를 방불케 하는 반사 신경이 착지 후의 경직을 <span class=\\"Highlight1\\">{0}%</span> 줄여 주며, 신음 소리를 <span class=\\"Highlight1\\">100%</span> 줄여준다. 또한 보통 달리기 속도의 <span class=\\"Highlight2\\">{1}%</span>로 질주하기 시작하며 최대 <span class=\\"Highlight3\\">{2}초</span> 동안 지속된다.<br><br>이동 속도 증가가 끝난 후 <span class=\\"Highlight4\\">{3}초</span> 동안 <b>탈진</b> 상태 이상에 걸리게 된다.<br><br><b>탈진</b> 상태 이상을 겪는 중에는 <i>균형 잡힌 착지</i>를 사용할 수 없다.<br><br>달리기 중에는 <b>탈진</b> 상태 이상으로부터 회복할 수 없다.<br>","name":"균형잡힌 착지","flavor":"\\"더 높은 곳에서도 뛰어내려 봤어. 이 정도쯤이야.\\" -니아","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"경찰의 눈을 피해 숨어다닌 내공이 있다. 앉아서 움직이는 속도가 <span class=\\"Highlight1\\">{0}%</span> 빨라진다.<br>","name":"세련된 회피","flavor":"\\"페인트가 마르기도 전에 빠져나갔지.\\" -니아","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"긴 밤을 지새우다 보니 가진 것으로 많은 것을 할 수 있었다. 자신과 <span class=\\"Highlight2\\">{1}미터</span> 범위 안에 있는 주변 생존자의 아이템 충전 소비율을 <span class=\\"Highlight1\\">{0}%</span> 감소시킨다. 범위를 벗어나도 이 효과는 <span class=\\"Highlight4\\">{2}초</span>간 지속한다. <br>","name":"노련함","flavor":"\\"넌 지금 잘못하고 있어! 어떻게 하는지 제대로 보여주지.\\" -니아","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"어떤 대가를 치룬다 해도, 당신은 주어진 일을 끝낼 것이다...<br>당신이 희생제의 마지막 생존자라면, 탈출에 필요한 남은 발전기의 숫자 당 수리 속도가 <span class=\\"Highlight1\\">{0}미터</span> 빨라진다.","name":"홀로 남겨진 자","flavor":"\\"저런 허튼소리 듣지 않아. 혼자서라도 해내겠어!\\" -빌 오버벡","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"갈고리에서 동료를 구해내면 알 수 없는 힘이 흘러들어온다.<br>갈고리에서 구해낸 생존자는 <span class=\\"Highlight1\\">{0}초</span> 동안 <b>인내</b> 상태 효과를 얻게 된다.<br>","name":"빌려온 시간","flavor":"\\"아마 죽을 만큼 아프겠지만 죽지는 않을 거야. 일어서라. 빨리 움직여!” — 빌 오버벡","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"과거의 전투가 살아남는 법을 알려줬다. <b>희생제에서 한 번 만</b> 빈사 상태에서 스스로 회복할 수 있다. 빈사 상태에서의 회복 속도가 <span class=\\"Highlight1\\">{0}%</span> 빨라진다.<br>","name":"불굴","flavor":"\\"이런 젠장, 나 지금 심각하게 엉망인데!\\" -빌 오버벡","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"당신의 몇몇 친구들은 보호받을 자격이 있다.<br>빈사 상태에 빠진 다른 생존자를 치료하는 동안, 치료 속도가 <span class=\\"Highlight1\\">100%</span> 증가한다.<br>다음 행동을 실행하면 토큰 1개를 획득한다.<li>갈고리에서 생존자 구출하기</li><li>다른 생존자를 보호하기 위해 살인마의 공격을 대신 맞기</li><li>판자로 살인마를 기절시켜 생존자 구하기</li><li>손전등으로 살인마를 실명시켜 생존자 구하기</li>토큰 당 <span class=\\"Highlight2\\">25%</span>의 추가 블러드포인트를 획득하며, 최대 <span class=\\"Highlight3\\">{1}%</span>까지 중첩될 수 있다. 추가 블러드포인트는 희생제가 끝난 후 지급된다.","name":"우리는 영원히 살거야","flavor":"“덤벼, 어디 한번 해보자고! 내가 신경이나 쓸 것 같아.” -데이비드 킹","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"기술 발동 버튼을 눌러 사용할 수 있다.<br>부상한 상태 일 때, 아드레날린을 분비시켜 순간적으로 빠르게 질주하고 공격을 회피할 수 있다.<br><li>달리는 도중 <i>능력 활성화</i> 버튼을 누르면 짧은 시간 동안 전방으로 질주할 수 있다.</li><li>질주하는 동안 피해를 입지 않는다.</li><li>질주가 끝난 후 <span class=\\"Highlight4\\">{0}초</span> 동안 <i>탈진</i> 상태 이상에 걸리게 된다.<br>달리기 중에는 <i>탈진</i> 상태 이상으로부터 회복할 수 없다.</li>","name":"죽기살기","flavor":"“우리가 어느 날 밤 골목길을 걸어가고 있을 때, 맥주병 한 개, 두 개, 세 개가 날아와 나를 스쳤어. 그때 생각했지, \'꼬마들이랑 재미 좀 보자고, 어디 한번 해보자!\' 그건 정당방위였다고, 맹세해!\\" -데이비드 킹","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"희생제를 <span class=\\"Highlight1\\">치료 불능</span> 상태 이상에 걸린 채로 시작한다.<br>당신이 흘린 핏자국은 즉시 응고되어 살인마의 추격을 방해한다.<li>더 이상 핏자국을 남기지 않는다.</li><li>부상으로 인한 신음소리가 영구적으로 <span class=\\"Highlight2\\">{0}%</span> 감소한다.</li><li>빈사 상태에서 스스로 완전히 회복할 수 있다.</li>","name":"신경 쓰지 마","flavor":"“참을 수가 없었어. 결국 그를 한 대 치고 말았지... 그러니까 그들이 와서 날 출입금지 시키더군. 그래서 술집에 가서 몇 잔 걸치고 2차를 갔어. 난 전혀 신경 쓰지 않았어. 무슨 말인지 알아? 그럴 가치가 없었다고.” -데이비드 킹","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"더 많은 생존자가 살인마에게 쓰러질수록 고독함이 생존 본능을 이끌어내어 자신에게 향한 <b>살인마의 오라 감지 능력</b>이 방해를 받는다.<br>동료 생존자가 살해 당하거나 희생될 때마다, 1개의 토큰을 획득한다. 각 토큰마다, <b>살해</b>당했거나 <b>희생</b>된 생존자 한 명당 살인마는 최대 <span class=\\"Highlight1\\">{0}미터</span>까지 당신의 오라를 볼 수 없게 된다.<br><li><i>살인마의 집착 대상으로 지정될 확률이 증가한다.</i></li><li><i>살인마는 한 번에 한 명의 생존자에게만 <b>집착</b>할 수 있다.</i></li>","name":"유일한 생존자","flavor":"“그건 부기맨이었어요.” -로리 스트로드","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"살인마와 초자연적인 유대감으로 연결된다.<br><br>생존자의 오라가 살인마에게 드러날 때마다, 살인마의 오라 또한 생존자에게 드러나며 치유, 수리 및 정화 속도에 대한 <span class=\\"Highlight1\\">{0}%</span>의 보너스를 획득한다.<br>생존자가 집착 대상이 되면, 생존자의 오라가 <span class=\\"Highlight2\\">3초</span>에 한 번씩 <span class=\\"Highlight3\\">30초</span> 동안 살인마에게 드러난다.<br>집착 대상으로 지정될 확률이 증가한다.<br>","name":"집착의 대상","flavor":"“그가 나를 보고 있었어!” – 로리 스트로드","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"탈출하려는 시도 중 공격자를 찌른다.<br>갈고리에서 풀려났거나 스스로 탈출했을 때 <i>결정적인 일격</i>이 <span class=\\"Highlight1\\">{0}초</span> 동안 활성화된다.<br>활성화된 동안 살인마에게 붙잡혀 스킬 체크에 성공하면 살인마를 <span class=\\"Highlight1\\">5초</span> 동안 기절시켜 탈출할 수 있다.<br><li>스킬 체크를 성공하거나 실패하면 <i>결정적인 일격</i>은 비활성화된다.</li><li>살인마를 기절시키면 집착 대상이 된다.</li><br>활성화된 동안, 다음 설명에 따르면 <i>결정적인 일격</i>을 비활성화할 수 있다:<li>발전기 수리</li><li>자신 또는 다른 생존자 치료</li><li>토템 정화</li><li>갈고리 파괴공작</li><li>갈고리에서 다른 생존자 구출</li><br><li><i>자신이 집착대상이 될 확률이 증가한다.</i></li><li><i>살인마는 한 번에 한 명의 생존자에게만 <b>집착</b>할 수 있습니다.</i></li>","name":"결정적인 일격","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"당신과 팀의 오라를 감지하는 잠재력을 끌어낸다.<br><li>오라를 읽는 능력의 범위가 <span class=\\"Highlight1\\">{0}미터</span> 증가한다.</li><li>생존자는 오직 한 번에 하나의 <i>통찰력</i> 효과의 영향을 받는다.</li>","name":"통찰력","flavor":"“항상 주의를 집중하는 것이 나를 오랫동안 살게 해줬지. 물론, 내 외견도 말이야.” -에이스","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"결국 다 잘 풀리겠지; 당신은 그냥 그렇게 생각했지만 그 자신감이 주변 사람의 희망도 강하게 만들었다. 각 생존자들은 살아있는 동안 서로에게 <span class=\\"Highlight1\\">{0}%</span> 의 행운 보너스를 제공한다.<br>","name":"판돈 올리기","flavor":"“내가 뭐랬어? 운 하나는 기가 막히다니까... 네게도 이 운이 전해질 거라고 확신하지.” -에이스","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"행운의 여신이 당신과 함께 하는 것 같다.<br>상자에서 아이템을 얻을 때, <span class=\\"Highlight1\\">{0}%</span>의 확률로 <span class=\\"Highlight2\\">극귀</span>(혹은 낮은 등급의) 애드온이 추가될 수 있다.<br><span class=\\"Highlight3\\">{1}%</span>의 확률로 <span class=\\"Highlight4\\">평범하지 않은 아이템</span> 희귀도(혹은 낮은 등급의) 애드온을 찾을 수 있다.<br>탈출 시, 아이템과 더불어 애드온까지 가지고 탈출할 수 있다.","name":"비장의 패","flavor":"“반짝거리는 것은 모두 금이 아니다. 하지만 이곳에서는 금은 한 푼의 가치도 없으니, 이것이 유용할 것이다.” -에이스","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"당신은 기계를 매우 정교하고 조심히 다루는 데 일가견이 있다.<br>발전기 수리 시 발생하는 소음을 들을 수 있는 거리가 <span class=\\"Highlight2\\">8미터</span> 감소한다. 스킬 체크 실패 시, <span class=\\"Highlight1\\">50%</span>의 확률로 발전기가 폭발하지 않는다.<br>","name":"기술자","flavor":"“조용히 처리해야겠군.” -펭 민","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"<b>빠른</b> 뛰어넘기 직후 <span class=\\"Highlight2\\">{1}초</span> 동안 달리기 속도가 <span class=\\"Highlight1\\">{0}%</span> 증가한다.<br>이동 속도 증가가 끝난 후 <span class=\\"Highlight4\\">{2}초</span> 동안 <i>탈진</i>에 걸리게 된다.<br><i>유연함</i>은 <i>탈진</i>을 겪는 중에는 사용할 수 없다.<br>달리기 중에는 <i>탈진</i>으로부터 회복할 수 없다.<br>","name":"유연함","flavor":"“야, 화났냐?” -펭 민","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"경계 태세에 돌입한 당신의 예리한 감각. <br>휴식 동작을 취하는 살인마의 모습이 <span class=\\"Highlight1\\">{0}초</span>간 드러나게 된다.<br>","name":"기민함","flavor":"“난 무엇이든 꿰뚫어 보지.” -펭 민","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. 모든 발전기에 전원이 공급되면, <span class=\\"Highlight1\\">{0}미터</span> 내에 있는 출구의 오라가 나타난다. 출구를 여는 동안, <span class=\\"Highlight2\\">{1}미터</span> 내에 있는 다른 생존자들에게 자신의 오라가 나타난다. <br><i>정신 차려!</i>가 발동되어 있다면, 출구를 여는 속도가 <span class=\\"Highlight3\\">{2}%</span> 빨라진다.","name":"정신 차려!","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"당신은 약을 찾는 재주가 있다. 상자를 잠금 해제하는 속도가 <span class=\\"Highlight1\\">{0}%</span> 빨라지고, 소음을 들을 수 있는 범위가 <span class=\\"Highlight2\\">{1}미터</span> 감소한다.<br><i>약제학</i>은 <b>처음</b>으로 잠금 해제한 상자로부터 희귀한 등급의 아이템인 비상용 구급상자를 획득하는 것을 무조건 보장한다.<br>","name":"약제학","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"비참한 상황에서조차 친구들을 챙기는 당신. 당신을 비롯해 <span class=\\"Highlight1\\">{0}m</span> 범위 내에 있는 당신의 동료들이 <b>탈진, 출혈, 근육 손상</b> 및 <b>실명</b> 상태 이상에서 <span class=\\"Highlight2\\">{1}%</span> 더 빨리 회복된다. 범위 이탈 시, 이 효과는 <span class=\\"Highlight4\\">{2}초간</span> 유지된다.<br>","name":"불침번","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"당신을 가로막는 것은 아무것도 없다. 이 끔찍한 상황에서도 당신의 지독한 집념은 당신을 빈사 상태에서 <span class=\\"Highlight1\\">{0}%</span> 더 빠르게 기어갈 수 있게 해주며, 동시에 부상을 치료할 수 있다.<br>","name":"집념","flavor":"\\"이게 도대체 뭐야? 난 나쁜 놈을 끝장내고 있었다고!\\"-데이비드 탭 형사","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. 자신이 직접 발전기 수리를 완료하면, <span class=\\"Highlight1\\">{0}미터</span> 내의 발전기, 상자, 토템의 오라가 <span class=\\"Highlight2\\">{1}초</span> 동안 나타난다.<br>만약 지도를 가지고 있다면, <i>형사의 직감</i>으로 나타난 발전기, 상자, 토템이 지도에 추가된다.","name":"형사의 직감","flavor":"\\"어젯밤 어디 계셨는지 말씀해 주실 수 있으십니까?\\" - 형사 데이비드 탭","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"살인마와 가까워질수록 당신의 투지는 불타오른다. 추격 중이 아닌 상태에서 살인마의 공포 범위 안에 있을 경우, 매 <span class=\\"Highlight1\\">{0}초</span> 마다 토큰을 얻을 수 있으며, 최대 <span class=\\"Highlight2\\">{1}토큰</span>을 누적할 수 있다.<br><i>잠복 근무</i> 토큰이 <b>1토큰</b> 이상 있을 때 스킬 체크를 성공하면 스킬 체크 대성공으로 간주하며, </b>1토큰<b>을 소모한다. 또한 발전기 수리 진행도가 <span class=\\"Highlight3\\">1%</span> 증가한다.","name":"잠복 근무","flavor":"\\"잡았다, 널 잡아서 내가 굴복시켰다고. 우리가 널 잡았으니 겁먹고 도망치는 거지. 우리가 이 사건을 해결할 거야!\\" - 데이비드 탭 형사","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"빠르게 창틀을 뛰어넘거나, 캐비닛에서 뛰쳐나온 후  <span class=\\"Highlight1\\">{0}초</span> 동안 발자국이 남지 않는다. <br><i>\'나와 함께 춤을\'</i>은 <span class=\\"Highlight1\\">{1}초</span>의 재사용 대기시간이 있다. <br>","name":"나와 함께 춤을","flavor":"\\"또 다른 공연이 우릴 기다리고 있어. <br>다가오는 폭풍 속에서, 나와 함께 춤을 추자 .<br>날 보고 따라 해봐, 계속 춤을 춰봐. <br>나와 함께 춤추자, 해가 우릴 밝게 비출 때까지.\\"<br>-케이트 덴슨의 \\"나와 함께 춤을\\" 중","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. <span class=\\"Highlight1\\">{0}미터</span> 내에 있는 판자와 부서지기 쉬운 문, 창틀의 오라를 볼 수 있다. <br><i>기회의 창</i>은 추격당하는 도중에 판자를 사용하거나 창틀을 뛰어넘을 경우 <span class=\\"Highlight1\\">{1}초</span> 동안 비활성화된다. <br>","name":"기회의 창","flavor":"“털고 일어나, 움직여, 세상에 너의 이름을 각인하는 거야.<br>마음을 다잡고, 활시위를 당겨, 명성이란 과녁을 맞혀. <br>믿음의 가치를 알아야 해, 그리고 가족도. 주저앉아 불평할 여유 따윈 없어.<br>활짝 여는 거야, 네 기회의 창을”-케이트 덴슨의 \\"기회의 창\\" 중","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"당신은 살인마의 손아귀에서 벗어나기 위해 최선을 다해 투쟁하는 사람이다. 당신의 몸부림이 살인마에게 <span class=\\"Highlight1\\">{0}%</span> 더 크게 작용한다. <br>또한 살인마가 반경 <span class=\\"Highlight1\\">{1}미터</span> 내에 있는 갈고리의 오라를 볼 수 없게 한다. <br>","name":"폭발","flavor":"<br>\\"맞서 싸워, <br>자유를 향해 춤을 춰, <br>언제까지고 날 붙들고 있진 못할 거야.”<br>-케이트 덴슨의 “폭발” 중","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"기술 발동 버튼을 눌러 사용할 수 있다.<br>살인마의 공포 범위에서 추격당하지 않은 상태로 <span class=\\"Highlight1\\">{0}초</span> 동안 있을 경우 <i>교란</i>이 활성화된다.<br><li>가만히 앉아 있는 상태에서 <i>교란</i>이 활성화되며, <i>능력 활성화</i> 버튼을 눌러 돌멩이를 던질 수 있다. 돌멩이는 살인마의 <span class=\\"Highlight2\\">20미터</span> 범위 내에 방해를 일으킨다.</li><li>이 능력을 발동하면 기술 대기시간이 초기화된다.</li><br>방해의 종류는 다음과 같다: <br><li>큰 소음</li><li>긁힌 자국</li><br>","name":"교란","flavor":"“쉬운 길과 옳은 길. 그 두 가지의 차이를 모른다면, 당신이 미래에 어떤 사람이 될지 상상하기 어렵군요.” -아담 프란시스","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"다른 생존자를 갈고리로부터 안전하게 구출했을 경우, <i>구조</i>를 사용할 수 있게 된다.<br>자신이 갈고리에 걸렸을 때 <span class=\\"Highlight1\\">100%</span>의 확률로 스스로 탈출할 수 있다.<br><i>구조</i>를 이용하여 갈고리로부터 스스로 탈출한 즉시 <span class=\\"Highlight2\\">치료 불능</span> 상태 이상에 <span class=\\"Highlight3\\">{0}초</span> 동안 걸리게 된다.","name":"구조","flavor":"“나는 엄격한 삼촌 밑에서 자라오면서, 최악의 상황 속에 내가 할 수 있는 최선의 일이 무엇인지 배웠어.” -아담 프란시스","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"스킬 체크에 성공할 때, 희생제 시작 시 기본적으로 치료 진척도가 <span class=\\"Highlight1\\">-{1}%</span> 감소하는 페널티가 생긴다.<br>다른 생존자를 치료하는 도중 나오는 스킬 체크를 성공할 때마다 토큰 한 개를 얻으며, 최대 <span class=\\"Highlight2\\">{0}토큰</span>을 얻을 수 있다.<br>스킬 체크에 성공할 때, 토큰 하나당 <span class=\\"Highlight1\\">+{2}%</span>의 진척도를 즉시 회복시켜 준다.<br><i>독학자</i> 사용 중에는 스킬 체크 대성공을 수행할 수 없다.<li><i>독학자</i>는 구급상자를 사용하여 치료할 경우 효력을 발휘하지 않는다.</li>","name":"독학자","flavor":"“당신이 무언가에 대해 끊임없이 파고들수록, 배움에는 끝이 없다는 걸 알게 될 것입니다.”-아담 프란시스","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"탈출이나 구출을 통해 갈고리에서 빠져나가면 갈고리가 부러지면서 살인마의 오라를 <span class=\\"Highlight1\\">{0}초 동안 볼 수 있다</span>.이 기술로 망가진 갈고리는 <span class=\\"Highlight2\\">180초</span>가 지나서야 재생성된다.<br>","name":"부수기","flavor":"“짐승의 뱃속으로부터 탈출하라.”<br>길가 옆에 있는 평화로워 보이는 나무에서 어떤 흔적을 발견했는데, 무언가를 말해주고 있는 것 같았어. 마치 두 번째 기회는 놓치지 않는다는 것처럼. –제프, 나무에 그려져 있는 그림, 12x16","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"자신과 <span class=\\"Highlight1\\">{0}</span> 생존자 사이에 형성되는 쌍방향 연결이다.<br><li>갈고리에서 구해줬던 상대와 이어진다.</li><li>연결된 상대와의 치료 행동을 완료한다.</li><br>다른 생존자들과도 <span class=\\"Highlight1\\">{0}</span>개까지 연결을 만들 수 있다. 연결은 제거되지 않는 한 바뀌지 않는다.<br><br>살인마에게 당해 갈고리에 걸리면 다른 생존자와의 연결이 모두 사라진다.","name":"갱생 지도","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"<span class=\\"Highlight1\\">토큰 {0}개</span>를 가지고 희생제를 시작한다.<br><br>살인마에게 오라를 감지당하면 <i>뒤틀림</i>이 발동되고 토큰이 한 개 소모된다.<br><br>그 후 <span class=\\"Highlight1\\">{1}초</span> 동안 <i>뒤틀림</i>이 활성화되는 동안 긁힌 자국을 남기지 않아, 살인마에게 오라가 감지되지 않는다.<br><li><i>뒤틀림</i>은 빈사 상태 또는 함정에 빠지면 활성화되지 않는다. </li><br>","name":"뒤틀림","flavor":"“죽음은 작은 깃털 하나로도 면할 수 있어.”<br>잠 못 드는 겨울밤 며칠 동안 스케치 영감을 얻었지. 노르웨이의 신화 탐험 말이야. 용감함은 가장 위험한 순간에도 자신의 약점을 숨길 수 있어. –제프, 스케치가 들어 있는 종이 몇 장, 12x12","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"고통스러운 경험을 나누는 일도 치료의 힘을 갖고 있다.<br>부상당했을 때, 구급상자를 사용하지 않고 생존자를 치료하면 자기 자신도 <span class=\\"Highlight1\\">{0}%</span>만큼 치료된다.","name":"연대","flavor":"\\"상황이 어려울 때 나타나, 고민을 들어주고 필요한 걸 제공해준다. 그렇게 더 강해지고 성장하는 거지.\\" -제인 로메로","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"목표를 달성하면 자신감도 올라간다.<br>발전기가 완성되면, <span class=\\"Highlight1\\"> {0}초</span> 동안 발자국이 남지 않는다.<br>","name":"침착","flavor":"\\"좋아, 침착하게. 깊이 생각하지 말고 계속 앞으로 나가. 넌 할 수 있어.\\" –제인 로메로","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"당신이 마음만 먹으면, 아무도 자신을 방해할 수 없다.<br><br>캐비닛에 <span class=\\"Highlight1\\">{0} 초</span> 동안 서 있으면 <i>정면충돌</i>이 발동된다.<br><i>정면충돌</i>이 발동됐을 때 빠른 행동과 함께 캐비닛을 빠져나온 후 <i>정면충돌</i> 능력을 사용하고 살인마가 <i>정면충돌</i> 효과 범위 안에 있는 경우에 한해 <span class=\\"Highlight1\\">{1} 초</span> 동안 살인마를 기절시킨다.<br><span class=\\"Highlight1\\">{2} 초</span> 동안 <span class=\\"Highlight3\\">탈진</span> 상태에 빠진다. <br><span class=\\"Highlight3\\">탈진</span>상태에서는 정면충돌을 사용할 수 없다. <br><i>정면충돌</i>은 까마귀가 있을 경우 사용할 수 없다.<br>","name":"정면충돌","flavor":"\\"사람들은 도전을 이겨내고 기억에 남는다. 자신의 잠재력을 잊고 도망치거나 혹은 자신의 공포와 마주하여 세상에 자신의 진짜 존재를 각인시킬 수 있다.\\" -제인 로메로","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"탈출 불가 상황을 빠져나갈 수 있는 초자연 능력을 얻는다.<br><br>빈사 상태에 빠지면 살인마에게 붙잡혔을 때 회복 진행도의 <span class=\\"Highlight1\\">{0}%</span>가 몸부림 진행도로 전환되어 최대 <span class=\\"Highlight2\\">{1}%</span>까지 늘어난다.<br>","name":"슬리퍼","flavor":"\\"슬리퍼를 신고 네 놈을 잡아주지.\\" - 애쉬 윌리엄스","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"오라를 감지하는 잠재력을 끌어낸다. 빈사 상태에 빠진 생존자의 회복 진행도는 최대 <span class=\\"Highlight1\\">{0}미터</span>까지 오라가 보인다.<br><br>생존자를 빈사 상태에서 부상 상태로 치료하면, 치료받은 생존자와 자기 자신 모두 <span class=\\"Highlight2\\">{1}초</span> 동안 살인마의 오라를 볼 수 있다.<br>","name":"재정비","flavor":"\\"유령 퇴치꾼들은 절대 사람을 그냥 지나치지 않지.\\" -애쉬 윌리엄스","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"악은 언제나 당신을 찾아낼 수 있다.<br><br>보호 공격 점수 이벤트가 <span class=\\"Highlight1\\">{0}</span>회 발생하면, <i>남자의 패기</i>가 발동된다. <br><br>기술이 발동되면 <b>빈사 상태</b>에 빠뜨릴 수 있었던 다음 <b>부상 상태</b>는 무시된다.<br><br>이후 체력을 모두 회복하면 살인마와의 거리가 <span class=\\"Highlight2\\">{1} 미터</span> 이상일 때 오라가 살인마에게 노출된다.<br><br><i>남자의 패기</i>는 다시 한 번 빈사 상태에 빠질 경우 비활성화된다.<br><i><li>살인마의 집착 대상이 될 확률이 증가한다.</li><li>살인마는 한 번에 하나의 생존자에게만 <b>집착</b>할 수 있다.</li></i><br>","name":"남자의 패기","flavor":"\\"악은 언제나 야구장 크기만한 눈으로 내 뒤를 지켜보고 있어.\\" -애쉬 윌리엄스","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"어떤 장애물이 앞을 가로막고 있어도 정의를 추구하고 진실을 밝혀낸다.<br><br>지금 수리하고 있는 발전기의 오라가 <span class=\\"Highlight1\\">{0}미터</span> 안에 있는 모든 생존자들에게 보인다.<br><br>만약 당신이 발전기를 수리하는 동안 살인마가 한 생존자를 쓰러뜨리면 당신은 <span class=\\"Highlight2\\">{1} 초</span> 동안 다른 생존자들의 오라를 감지할 수 있게 된다.<br>","name":"함께라면 더 좋지","flavor":"“저 연구소를 전부 잿더미로 만들어버리자.” -낸시 윌러","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"목표를 마음에 두고 있다면 되돌아갈 길은 없다. 허락을 구하기 보다는 용서를 구하는 것이 낫다. <br><br>항상 자신의 다친 흔적을 볼 수 있다.<br><br><span class=\\"Highlight1\\">{0}%</span>더 빠르게 걸을 수 있다.<br>","name":"시선 고정","flavor":"\\"우리가 시작한 일을 끝내고 싶어. 그걸 죽여버릴 거야.\\" -낸시 윌러","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"길을 잃거나 외롭다고 느낄 때 내면을 들여다 보고 자신의 직감을 믿는다.<br><br>토템을 정화할 때마다 <i>내면의 힘</i>이 활성화된다. 이미 <b>치료 불능</b> 상태인 경우, <i>내면의 힘</i>이 활성화되지 않는다.<br><br><i>내면의 힘</i>이 활성화된 후 <span class=\\"Highlight1\\">{0}초</span> 동안 캐비닛에 숨어 있으면 부상 상태에서 건강한 상태로 자동 치료된다.<br><br><i>내면의 힘</i>은 성공적으로 발동된 후에 바로 비활성화된다.<br>","name":"내면의 힘","flavor":"“그동안 난 모든 게 다 괜찮은 척 하려고 노력했지만, 소용없었어.” -낸시 윌러","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"자기중심적이라는 평판을 받지만, 도움이 필요한 사람을 위해서라면 모든 위험을 무릅쓴다.<br><br>생존자를 갈고리에서 구출했을 때 풀려난 생존자에게 다친 흔적이나 핏자국이 <span class=\\"Highlight1\\">{0}초</span> 동안 나타나지 않는다. 살인마의 오라를 감지할 수 있으며, 살인마는 또한 자신의 오라를 <span class=\\"Highlight2\\">{1}초</span> 동안 감지할 수 있다.<br>","name":"베이비시터","flavor":"“멍청한 네 녀석들을 지키기로 약속했었지. 그게 바로 내 계획이야.” -스티브 해링턴","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"인생은 당신에게 우정의 중요성을 가르쳐 주었고, 당신은 그것에서 힘을 얻었다.<br><br>갈고리에 걸려 저항 단계에 접어들었을 때 <i>동료애</i>가 활성화된다.<br><br><i>동료애</i>가 활성화되어 있는 동안 다른 생존자가 <span class=\\"Highlight1\\">{0}미터</span> 안에 있는 경우 갈고리 타이머가 <span class=\\"Highlight2\\">{1}초</span> 동안 일시 정지한다.<br>","name":"동료애","flavor":"\\"그러니까, 그 안에 들어가게 되면 이걸 기억해... 신경 쓰지 않는 척 하는 거야. 그래, 친구야. 잘 배우고 있어.” -스티브 해링턴","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"다른 생존자를 건강한 상태까지 치료하면 <i>새로운 활력</i>이 활성화된다. 이미 <span class=\\"Highlight1\\">치료 불능</span> 상태인 경우, <i>새로운 활력</i>이 활성화되지 않는다.<br><br><i>새로운 활력</i>이 활성화되어 있는 동안 다음 갈고리에서 구출되거나 스스로 탈출할 때 <span class=\\"Highlight1\\">치료 불능</span> 상태에 빠진다. 총 <span class=\\"Highlight2\\">{0}초</span>가 지나면 <i>새로운 활력</i>의 효과로 부상 상태에서 건강한 상태로 자동 치료된다.<br><br><i>새로운 활력</i>은 <i>새로운 활력</i>을 발동하기 전에 빈사 상태에 빠지거나 완전히 치료되면 비활성화된다. 또한 <span class=\\"Highlight1\\">치료 불능</span> 상태가 사라진다.<br>","name":"새로운 활력","flavor":"\\"그래, 그건 안 돼.\\" -스티브 해링턴","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"적과 싸우면서 상처가 나고 멍도 들었지만, 운이 항상 따른다.<br><br><i>행운</i> 능력은 부상당했을 때 발동된다. <i>행운</i>이 활성화되는 동안 최대 <span class=\\"Highlight1\\">{0}초</span> 동안 피를 흘리지 않거나 발자국을 남기지 않고, <br><br>능력 활성 시간을 모두 사용하면 희생제가 종료될 때까지 <i>행운</i> 능력은 비활성화된다.<br>","name":"행운","flavor":"“그 실력으론 날 이길 수 없다. 근처도 오지 못하겠지.” -유이 키무라 ","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"다른 누군가에게 의존하지 않으며, 손이 닿는 것 중에 도움이 될 만한 건 뭐든 활용한다.<br><br>떨어진 판자 옆에 서있는 상태에서 <i>능력 활성화 버튼</i>을 <span class=\\"Highlight1\\">{0}초 동안</span> 길게 눌러 판자를 다시 세울 수 있다.<br><br><i>필요하다면 무엇이든</i>은 <span class=\\"Highlight2\\">{1}초</span>의 재사용 대기시간을 가진다.<br>","name":"필요하다면 무엇이든","flavor":"“내 모든 것을 담아 다시 공격해주지. 그리고 반복할 거다.” -유이 키무라 ","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"누군가에게 도움이 필요하면 빠르게 움직일 수 있으며, 이 모습을 본 사람들은 장애물을 뛰어넘을 수 있는 힘을 얻는다.<br><br><span class=\\"Highlight1\\">{0}미터</span> 내에 살인마에게 붙잡힌 생존자가 있는 경우 <span class=\\"Highlight2\\">이동 속도 증가</span> 효과가 발동되어 <span class=\\"Highlight3\\">{1}%</span> 더 빨라지고, 붙잡힌 생존자의 몸부림 속도도 <span class=\\"Highlight4\\">{2}%</span> 더 빨라진다.<br>","name":"탈출","flavor":"“어서 와라, 결판을 지을 시간이다.” -유이 키무라 ","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"때로는 조용한 접근이 가장 좋은 방법이기도 하다. <br><br>자신이 갈고리에서 구출되거나 탈출하면 <i>비공개 조건</i>이 <span class=\\"Highlight1\\">{0}초</span> 동안 활성화된다. <br><br><i>비공개 조건</i> 능력이 활성화되어 있는 동안 살인마는 자신의 오라는 볼 수 없게 되며 부상으로 인한 고통이 <span class=\\"Highlight2\\">{1}%</span> 감소한다.<br>","name":"비공개 조건","flavor":"\\"절 믿으세요, 누구보다 신중하고 철저하게 조사하는 사람이니까.\\" -자리나 카시르","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"큰소리는 사람들의 이목을 집중시킨다.<br><br>발전기를 최소 <span class=\\"Highlight1\\">{0}초</span> 이상 수리하면 노란색 오라로 표시되며 자신만 볼 수 있다. 이후 완전히 수리하거나, 새로운 발전기를 수리하거나, 캐비닛에 들어갈 때까지 해당 발전기는 계속 표시된다. <br><br>아무 캐비닛에 들어가면 살인마에게만 보이는 발전기에서 큰 소음이 나게 된다. <br><li><i>오보</i>는 <span class=\\"Highlight2\\">{1}초</span>마다 사용할 수 있다.</li><br>","name":"오보","flavor":"\\"뉴스는 부담스럽고 복잡한 것을 잘라내지, 진실을 숨기기 위해 말이야.\\" -자리나 카시르","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"다른 사람들을 위해 자신을 희생한다.<br><br><i>국민을 위하여</i>는 건강한 상태에서만 활성화할 수 있다.<br><br>구급상자 없이 다른 생존자를 치료할 동안 <i>능력 활성화 버튼</i>을 누르면 빈사 상태에서 부상 상태 또는 부상 상태에서 건강한 상태로 즉시 치료할 수 있다.<br><br>자신은 부상 상태가 되며 <span class=\\"Highlight1\\">{0}초</span> 동안 <b>치료 불능</b> 상태에 빠지게 된다.<br><br>집착 대상이 된다.<br><br>이 기술을 장착하면 희생제 시작 시 살인마의 집착 대상이 될 확률이 <b>감소한다</b>.<br>","name":"국민을 위하여","flavor":"\\"우린 모두 자신만의 이야기를 쓰고 그것이 실제로 어떻게 끝날지 결정할 수 있다.\\" -자리나 카시르","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"엄청난 고난을 겪은 후 더 강해졌다.<br><br>치료 후 또는 빈사 상태에서 회복한 후 <span class=\\"Highlight1\\">{0}초</span> 동안 <b>인내</b> 상태 효과가 발동한다.<br>주술의 저주에 걸린 동안 생존자는 빈사 상태에서 회복한다.<br><br>해당 효과는 <span class=\\"Highlight2\\">30초</span> 마다 사용 가능하다.","name":"소울 가드","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"내 안에 잠재된 무언가가 깨어나는 것 같다. 예를 들어, 본래의 능력을 뛰어넘을 수 있을 것 같은 느낌이랄까.<br><br>나 또는 집착 대상이 부상을 입었을 때, 서로의 오라를 볼 수 있게 된다.<br><br>집착 대상을 치료하거나 집착 대상에 의해 치료되었을 경우, 둘 사이의 거리가 <span class=\\"Highlight2\\">16미터</span> 이하일 경우 <span class=\\"Highlight1\\">{1}%</span>의 <b>이동 속도 증가</b> 상태 효과가 발생한다.<br><br>집착 대상이 될 확률이 감소한다.<br><br>또한 집착 대상이 되면, 해당 기술이 비활성화된다.","name":"피의 협정","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"악의적인 세력에 쫓기는 데 익숙해져 있는 당신은 그것을 이제 자신에게 유리하게 이용하기 시작한다.<br><br>발전기 수리 후 총 <span class=\\"Highlight1\\">{0}초</span> 동안 <i>억압된 동맹</i>이 활성화된다.<br><br>해당 기술이 활성화된 동안 발전기를 수리하면, <i>능력 활성화 버튼</i>을 눌러 엔티티를 소환하여 발전기를 <span class=\\"Highlight2\\">{1}초</span> 동안 차단하게 할 수 있다. 기술이 비활성화된다.<br><br>영향을 받은 발전기는 모든 생존자들에게 흰 오라를 드러낸다.","name":"억압된 동맹 ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"탈출 수단에 눈에 띄게 집중한다.<br><br><span class=\\"Highlight1\\">{0}미터</span> 내 발전기의 오라를 볼 수 있다.<br><br>발전기가 완료되면 <span class=\\"Highlight2\\">{1}초</span> 동안 <i>선견지명</i>을 사용할 수 없다.","name":"선견지명","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"가장 힘든 시기에도 당신은 실패하려 하지 않는다.<br><br>부상, 빈사 상태나 갈고리에 걸린 생존자 수에 따라 치료 및 구출 속도가 <span class=\\"Highlight1\\">{0}%</span> 증가한다.<br>","name":"필사의 조치","flavor":"\\"그들이 레킹볼과 함께 올 때면, 더 견고한 벽을 지어야 한다.” —펠릭스 릭터","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"도구를 최대한 활용하는 방법을 알고 있다.<br><br>희생제당 1회에 한해, 고갈된 아이템은 <span class=\\"Highlight2\\">{1}초</span> 후, 차지의 <span class=\\"Highlight1\\">{0}%</span>가 리필된다.<br>","name":"견고함","flavor":"\\"건축은 문명의 영혼이다.” —펠릭스 릭터","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"다른 이라면 쉽게 지나쳤을 것이지만 당신에게는 사소한 것을 알아차릴 수 있는 세심한 눈이 있다.<br><br><span class=\\"Highlight1\\">{0}개의 토큰</span>을 보유한 채 희생제를 시작한다. 상자가 이미 열렸다면 토큰을 하나 소모하여 아이템을 뒤져볼 수 있다. 상자 뒤지기는 상자당 한 번만 실행할 수 있다.<br><br>상자들과 <span class=\\"Highlight2\\">{1}%</span> 더 빨리 상호작용한다.","name":"판별","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"당신의 모험적인 삶에는 교활한 그릇된 방향으로의 순간들이 필요하다.<br><br>전력 질주 동안 캐비닛을 열면 당신의 위치를 알리는 큰 소음이 발생하며 <span class=\\"Highlight1\\">{0}초</span> 동안 발자국을 남기지 않는다.<br><br>전력 질주 및 해당 기술이 활성화되는 동안 캐비닛에 들어갈 수 없다.<br><br><i>속임수</i>는 <span class=\\"Highlight2\\">{1}초</span>에 한 번씩만 발동된다.","name":"속임수","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"당신은 포기하지 않는다. 그리고 지금 바로 시작하려고도 하지 않는다.<br><br>살인마에게 붙잡히는 동안 몸부림 진행 상황이 <span class=\\"Highlight1\\">{0}%</span>에 도달하면 <i>힘찬 발버둥</i>이 활성화된다. <i>힘찬 발버둥</i>이 활성화되면 주변에 서 있는 판자를 떨어뜨려 살인마를 기절시킬 수 있다.<br>","name":"힘찬 발버둥","flavor":"“난 나의 안전을 타인에게 의지한 적이 있어. 그리고 모든 것을 잃게 되었지. 두 번 다시 그런 일을 없어.” —엘로디 라코토","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"앞서나가기 위해서는 때때로 다른 사람들의 희생이 필요하다.<br><br>다른 생존자가 갈고리에 걸릴 때마다, <span class=\\"Highlight1\\">{0}개의 토큰</span>을 획득한다. 스킬 체크에 대성공한 후 토큰을 모두 소비하게 된다. 발전기를 수리할 때 토큰을 소비하면 토큰 하나마다 스킬 체크 대성공에 대한 <span class=\\"Highlight2\\">{1}%</span>의 진척도 보너스가 제공된다.<br>","name":"고속 승진","flavor":"\\"약한 자들이 먼저 희생되지. 자연스러운 거야, 다 하나를 주고 하나를 가지는 거야... 많은 이들이 가장 직면하기 어려워하는 사실이지.\\" — 윤진","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"라이벌이 실수를 하면 기회를 가로챌 수 있다.<br><br>판자로 살인마를 기절시키면 전력을 다한 질주로 달리기 속도가 <span class=\\"Highlight2\\">{1}초</span> 동안 <span class=\\"Highlight1\\">{0}%</span>로 상승한다.<br>이동 속도 증가가 끝난 후<span class=\\"Highlight3\\">{2}초</span> 동안 <b>탈진</b> 상태 이상에 걸리게 된다.<br>해당 기술은 <b>탈진</b> 상태 동안 사용할 수 없다.<br>","name":"대 히트","flavor":"\\"내가 양복쟁이 사이코패스들을 상대해온 사람이야. 너 따윈 그저 더 못난 모습에 패션 센스도 더럽게 없는 새끼일 뿐이야.\\" —윤진","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"삶이 지독스럽다. 때로는 자신을 돌보는 것이 최선일 때가 있다.<br><br><span class=\\"Highlight1\\">{0}미터</span> 내에 있는 다른 생존자가 기본 공격 또는 특수 공격에 의해 타격을 받을 때마다 <i>자기 보호</i>가 활성화된다.<br><span class=\\"Highlight2\\">{1}초</span> 동안 살인마에게 발자국, 핏자국, 그리고 부상으로 인한 신음이 보이거나 들리지 않게 된다.<br>","name":"자기 보호","flavor":"\\"이 바닥에서 내가 배운 거라곤, 누군가 도끼를 휘두른다면 그저 머리를 숙이고 숨어라라는 거야.\\" — 윤진","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"당신은 당신보다 더 강한 적에 저항하는지 알고 있으며, 이는 그들의 지지 세력을 추적하고 쓰러뜨리는 것부터 시작해야 한다.<br><br>토템을 <b>20%</b> 빠르게 정화한다. 토템 정화 후, <span class=\\"Highlight1\\">{0}초</span> 동안 가장 멀리 있는 토템의 오라가 보이며, 희생제가 종료될 때까지 토템 정화를 위한 <span class=\\"Highlight2\\">{1}%</span>의 중첩 가능한 속도 보너스가 추가로 획득한다.<br><br><span class= \\"FlavorText\\">\\"조금의 탐정은 괜찮아.\\" —질 발렌타인</span>","name":"저항력","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"불가능한 역경에서 돌아온 당신은... 다시 그것을 반복할 것이다.<br><br>갈고리에서 구출되거나 혼자서 탈출한 후 <span class=\\"Highlight1\\">{0}%</span>의 치료 속도를 즉시 획득한다.<br><br><span class= \\"FlavorText\\">\\"내 차례야, 새끼야.\\" —질 발렌타인</span>","name":"부활","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"직접 전투가 옵션이 아니라면 반격을 가할 방법을 찾아야 한다.<br><br><i>폭풍형 지뢰</i>는 총 <span class=\\"Highlight1\\">{0}%</span> 가치의 발전기 수리 진행 상황이 완료된 후 활성화된다.<br>최소 <span class=\\"Highlight2\\">{1}초</span> 이상 발전기를 수리한 후, <i>어빌리티 버튼</i>을 눌러 <span class=\\"Highlight3\\">{2}초</span> 동안 활성화되는 덫을 설치할 수 있다. 영향을 받은 발전기의 오라는 모든 생존자에게 노랗게 나타난다. 덫은 발전기 한 대에 한 개만 활성화할 수 있다.<br><li>덫이 설치된 발전기를 살인마가 손상시키면 덫은 폭발하는 동시에 살인마를 기절시키고 주변에 있는 모든 이들을 실명시킨다.그 후, <i>폭풍형 지뢰</i>는 비활성화된다.</li><br><br><span class= \\"FlavorText\\">\\"너 같은 괴물은 사라지는 게 좋아! \\" 질 발렌타인</span>","name":"폭풍형 지뢰","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"고통은 누구 못지않게 당신을 아프게 하지만 당신은 다른 사람들이 이를 몰랐으면 한다.<br><br>치료 중, 부상으로 인한 신음을 포함하여 아무런 소리를 내지 않지 않는다. 치료 스킬 체크에 실패하면 큰 소음이 들리지 않지만 치료 진행도가 <span class=\\"Highlight1\\">{0}%</span>만큼 줄어든다.<br><br><span class= \\"FlavorText\\">\\"할 수 있어.\\" —레온 S. 케네디</span>","name":"고통 참기","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"혼란에 빠진 세상에 적응한 자는 잔해 속에서도 무언가를 만들어낸다.<br><br>발전기에 <span class=\\"Highlight1\\">{0}%</span> 진행도를 완료하면, <i>섬광탄</i>이 활성화된다.<br>빈손으로 캐비닛에 들어가 어빌리티 버튼을 누르면 섬광탄을 제작할 수 있다.<br><li>내구도 1.</li><li>요란한 쾅 소리와 번쩍이는 빛으로 폭발한다.</li><li>큰 소음을 일으킨다.</li><li>교란 또는 실명시키는 데 사용할 수 있다.</li><br>희생제 탈출 시 섬광탄을 두고 떠난다.<br><br><span class= \\"FlavorText\\">\\"내 앞에서 꺼져!\\" —레온 S. 케네디</span>","name":"섬광탄","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"목표물이 도망가지 않게 주시해야 한다.<br><br>발전기 수리 중 스킬 체크를 <span class=\\"Highlight1\\">{0}</span>회 성공 또는 대성공하면 남은 희생제 동안 <i>신입의 패기</i>를 활성화할 수 있다.<br>스킬이 활성화되면 손상된 발전기의 오라를 볼 수 있게 된다.<br><br><span class= \\"FlavorText\\">\\"부서장님, 제가 꼭 막겠습니다. 약속드리죠.\\" —레온 S. 케네디</span>","name":"신입의 패기","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/ko/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/ko/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"불안정한 지도자","name":"드와이트 페어필드","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"활동적인 운동선수","name":"메그 토마스","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"학구열을 가진 식물학자","name":"클로뎃 모렐","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"고독한 생존주의자","name":"제이크 파크","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"도시의 미술가","name":"니아 칼슨","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"노련한 군인","name":"윌리엄 빌 오버백","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"거친 싸움꾼","name":"데이비드 킹","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"결심한 생존자","name":"로리 스트로드","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"전체 팀의 기술 확률을 상승시키는 행운의 도박사.<BR><BR>그의 개인 기술인, <B>통찰력</B>, <B>판돈 올리기</B> 및 <B>비장의 패</B>로 모든 생존자들의 행운을 상승시키며 상자를 잠금 해제하는 데 도움을 준다.","name":"에이스 비스콘티","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"목표에 집중하는 경쟁자로 자신의 전략을 아주 폭넓고 어려운 개개의 상황에 맞춰 설계할 수 있습니다.<BR><BR>그녀는 개인 기술인 <B>기술자</B>, <B>유연함</B>, <B>기민함</B>을 통해 발전기를 수리하고 살인마의 위치를 파악합니다.","name":"펭 민","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"결연한 꿈을 걷는 자로 팀원의 생존성과 회복력을 높여준다.<BR><BR>그는 전승 기술인 <B>정신 차려!</B>, <B>약제학</B>, <B>불침번</B>을 이용해 생존자들이 출구를 찾고 더 쉽게 회복할 수 있도록 돕는다.","name":"쿠엔틴 스미스","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"집착하는 형사","name":"탭 형사","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"주변 환경을 최대한 잘 활용할 수 있는 능력을 가진 희망적인 음악가. <br><br>그녀의 전승 기술인 <b>나와 함께 춤을</b>, <b>기회의 창</b> 그리고 <b>폭발</b>은 가장 절망적인 상황 속에서조차 도망칠 수 있는 통찰력과 활기를 불어넣어줍니다.","name":"케이트 덴슨","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"낯선 환경이나 상황에서도 빠르게 적응하고, 그에 따른 전략적인 사고를 할 수 있는 교사.<br><br>그의 전승 기술인 <b>교란</b>, <b>구조</b> 그리고 <b>독학자</b>는 살인마의 시선을 다른 곳으로 끌고, 절망적인 상황에서도 스스로 살아남을 수 있으며, 희생제 안에서 자신의 노련함을 증명한다.","name":"아담 프란시스","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"불가능한 확률에 흔들림 없이 맞서는 과묵한 예술가이다.<br><br>전승 기술은 <b>부수기</b>, <b>갱생 지도</b>, <b>뒤틀림</b>으로, 관찰하기 좋고 살인마로부터 존재감을 숨기는 데 도움이 된다.","name":"제프 요한센","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"영향력 있는 유명 인사로, 앞길을 가로막는 장애물들을 정면으로 돌파하는 성격이다.<br><br>그녀는 <b>연대</b>, <b>침착</b>, <b>정면충돌</b>이라는 개인 기술들을 보유하고 있으며, 이들을 유연하게 활용하여 자신은 물론 다른 사람들을 도와 어려운 상황을 헤쳐나간다.","name":"제인 로메로","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"\\"외로운 늑대\\", 자만심 넘치며 자기주장이 강한, 생존을 위해 태어난 남자이다.<br><br>그의 개인 기술은 <b>슬리퍼</b>, <b>재정비</b>, <b>남자의 패기</b>로, 난처한 상황에 처한 친구들을 도울 수 있는 것은 물론 고통스럽거나 어려운 상황에서도 쉽게 회복할 수 있게 해주는 능력들이다. ","name":"애슐리 제이 윌리엄스","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"열정적인 기자 지망생으로 정확한 조사 능력과 함께 다른 사람들이라면 놓칠 수도 있는 부분을 잘 감지한다.<br><br>그녀의 개인 기술은 <b>함께라면 더 좋지</b>, <b>시선 고정</b>, <b>내면의 힘</b>이며, 이 기술들은 그녀가 예상할 수 없는 일에 도전하는데 필요한 정보와 용기를 준다.","name":"낸시 윌러","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"한때 이름 좀 날렸던 양아치로서, 독특한 자기만의 유머가 그의 특징이지만 의외로 동료 생존자들을 보호하고 돕는다.<br><br>전승 기술로 <b>베이비시터</b>, <b>동료애</b>, <b>새로운 활력</b>을 지니고 있다. 이 기술들은 살인마를 교란하고 고통을 견딜 수 있게 하며 다시 싸울 수 있도록 한다.","name":"스티브 해링턴","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"성격이 확고한 비공식 레이서. 자신과 동료 생존자가 힘든 상황 속에서도 유리하게 이겨낼 수 있도록 도와준다.<br><br>개인 기술인 <b>행운</b>, <b>필요하다면 무엇이든</b>, <b>탈출</b>을 사용하면 자신의 핏자국을 감추거나 떨어진 판자를 다시 올리고, 속수무책으로 당하는 생존자들을 도와줄 수 있다.","name":"유이 키무라","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"세상 물정에 밝고 용기 있는 다큐멘터리 제작자로 살인마의 탐지를 피하고 다른 생존자들을 훌륭하게 도와준다.<br><br>그녀의 개인 기술인 <b>비공개 조건</b>, <b>오보</b> 그리고 <b>국민을 위하여</b>는 그녀가 위험이 닥쳤을 때 그녀의 자취를 드러내지 않고 방해를 일으키고 그녀의 안전을 포기하면서 다른 이들을 빠르게 치료한다.","name":"자리나 카시르","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"쉐릴 메이슨은 테러에 참여한 자신과 그녀의 팀 모두를 대담하게 만드는 용사다.<br><br>그녀의 개인 기술인 <b>소울 가드</b>, <b>피의 협정</b>, 그리고 <b>억압된 동맹</b>으로 그녀는 엄청난 고난을 이겨내고, 팀원들과 계속 연락을 취하며 목표를 계획할 수 있다.","name":"쉐릴 메이슨","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"선견지명이 있는 건축가로서, 계획을 세우고 다른 생존자들을 도울 수 있다.<br><br>그의 개인 기술, <b>선견지명</b>, <b>필사의 조치</b> 및 <b>견고함</b>으로 발전기를 탐지하고 생존자를 구하며 그의 도구를 최대한 활용할 수 있게 도와준다.","name":"펠릭스 릭터","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"오컬트 조사관으로 교활한 속임수과 완고한 결심으로 자신의 생존을 유지할 수 있다.<br><br>그녀의 개인 기술인, <b>판별</b>, <b>속임수</b>, 그리고 <b>힘찬 발버둥</b>으로 창의적이게 사물과 상호작용할 수 있는 동시에 살인마로부터 탈출하기 위한 대책 계획을 세울 수 있다. ","name":"엘로디 라코토","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"격동의 시간을 살아오는 동안 이기적인 음악 프로듀서, 이윤진은 목표를 좀 더 앞당긴다.<br><br>그녀의 개인 기술인, <b>고속 승진</b>, <b>대 히트</b> 및 <b>자기 보호</b>로 다른 생존자가 다쳤을 때 자신의 능력을 향상시켜 빠르게 추격을 피할 수 있다. ","name":"이윤진","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"질 발렌타인은 수많은 생체병기들에 맞서 승리를 거둔 S.T.A.R.S.의 창립 멤버이다.<br><br>질 발렌타인은 개인 기술인 <b>저항력</b>, <b>부활</b> 그리고<b>폭풍형 지뢰</b>로 간접적으로 반격할 수 있으며, 그녀의 팀원들에게 강력한 지원을 제공할 수 있다. ","name":"질 발렌타인","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"레온 S. 케네디는 라쿤 시티가 바이러스 감염 위험에 빠졌을 때 경찰관으로서의 의무보다 더 많은 일을 해낸 신입 경찰관이다.<br><br>레온은 개인 기술인 <b>고통 참기</b>, <b>섬광탄</b>, 그리고 <b>신입의 패기</b>로 고통을 무시하고 살인마를 혼란에 빠뜨리며 놓쳐버린 목표물을 추적할 수 있다. ","name":"레온 S. 케네디","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./ko/index.ts ***!
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
/* harmony import */ var _src_lib_locales_ko__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/ko */ "./src/lib/locales/ko.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_ko__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map