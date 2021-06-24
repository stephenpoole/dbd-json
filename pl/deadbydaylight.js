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

/***/ "./src/lib/locales/pl.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/pl.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_pl_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/pl/items.json */ "./src/data.compiled/locales/pl/items.json");
/* harmony import */ var _data_compiled_locales_pl_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/pl/killerAddons.json */ "./src/data.compiled/locales/pl/killerAddons.json");
/* harmony import */ var _data_compiled_locales_pl_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/pl/killerOfferings.json */ "./src/data.compiled/locales/pl/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_pl_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/pl/killerPerks.json */ "./src/data.compiled/locales/pl/killerPerks.json");
/* harmony import */ var _data_compiled_locales_pl_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/pl/killers.json */ "./src/data.compiled/locales/pl/killers.json");
/* harmony import */ var _data_compiled_locales_pl_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/pl/powers.json */ "./src/data.compiled/locales/pl/powers.json");
/* harmony import */ var _data_compiled_locales_pl_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/pl/sharedOfferings.json */ "./src/data.compiled/locales/pl/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_pl_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/pl/survivorAddons.json */ "./src/data.compiled/locales/pl/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_pl_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/pl/survivorOfferings.json */ "./src/data.compiled/locales/pl/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_pl_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/pl/survivorPerks.json */ "./src/data.compiled/locales/pl/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_pl_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/pl/survivors.json */ "./src/data.compiled/locales/pl/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.Korean;
var data = {
  items: _data_compiled_locales_pl_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_pl_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_pl_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_pl_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_pl_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_pl_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_pl_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_pl_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_pl_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_pl_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_pl_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/pl/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/pl/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Drobne ładunki wybuchowe owinięte w solidną papierową obudowę. Eksplodują z hukiem oraz wywołują intensywne błyski świetlne. Mogą zostać użyte do odwrócenia uwagi, oślepienia celu albo do świętowania.<br><li><b>1 ładunek.</b></li>","name":"Chińskie Petardy","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"Standardowa latarka. Może być użyta do rozświetlenia ciemności na twojej drodze.<br><li><b>8 sekund</b> użytku.</li>","name":"Latarka","flavor":"„Niemalże cała bateria została bezsensownie zużyta przez poprzedniego właściciela”.","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"Latarka wyposażona w specjalne soczewki, które dodają pomarańczowe zabarwienie i małego ducha do światła latarki.<br><li><b>8 sekund</b> użytku.</li><li><b>Znacząco zwiększa działanie </b>Przyjaznego Ducha w twoim życiu.</li>","name":"Błędny Ognik","flavor":"„Wesołego Halloween! Niech nie zbraknie wam słodyczy i psikusów!”","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"Przenośna latarka z solidnym uchwytem. Za sprawą wydajnej technologii, jaką się charakteryzuje, może emitować potężne światło przy ograniczonej konsumpcji energii.<br><li><b>8 sekund użytku.</b></li><li><b>Nieznacznie zmniejsza</b> zużycie energii latarki.</li><li><b>Nieznacznie zwiększa</b> celność.</li>","name":"Sportowa Latarka","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"Solidna, lecz ciężka latarka z bardzo mocną baterią.<br><li><b>12 sekund użytku.</b></li><li><b>Nieznacznie zmniejsza</b> celność.</li><li><b>Średnio zwiększa</b> jasność światła latarki.</li><li><b>Średnio zwiększa</b> czas trwania oślepienia.</li>","name":"Użyteczna Latarka","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"Fragment klucza wibrujący energią. Moc drzemiąca w tym zepsutym kluczu nie może się uwolnić samoistnie. Różnorodne obiekty dołączone do klucza uwalniają jego energię.<br><li><b>10 sekund</b> użytku.</li>","name":"Złamany Klucz","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"Zgięty, nieciekawy klucz, który posiadał w przeszłości wielką moc. Moc drzemiąca w kluczu nie może się uwolnić samoistnie. Różnorodne obiekty dołączone do klucza uwalniają jego energię.<br><li><b>5 sekund</b> użytku.</li><li>Może zostać zużyty do otwarcia czarnych zamków.</li>","name":"Monotonny Klucz","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"Zaśniedziały i zakrzywiony klucz emanujący złowieszczą energią. Moc drzemiąca w kluczu nie może się uwolnić samoistnie. Różnorodne obiekty dołączone do klucza uwalniają jego energię. <br><li><b>30 sekund</b> użytku.</li><li>Może zostać użyty do otwarcia włazu. Użycie jednorazowe.</li>","name":"Uniwersalny klucz","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"Stary kawałek pergaminu stworzony z materiału przypominającego ludzką skórę. Jest zwinięty i obwiązany bezbarwnym rzemykiem. Dzierżenie i używanie mapy ujawnia aury poszczególnych obiektów; gdy używasz mapy, traci ona powoli swoje ładunki i zużywa się. Aury obiektów, które odkryłeś wcześniej, są ukazywane w trakcie używania mapy, aż do momentu jej całkowitego zużycia.<br><li><b>20 sekund</b> użytku.</li><li>Zaczynasz grę z <b>1</b> generatorem zlokalizowanym automatycznie.</li><li>Umożliwia <b>lokalizowanie generatorów</b> w zasięgu <b>8 metrów</b>.</li>","name":"Mapa","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"Kawałek pergaminu stworzony ze świeżej skóry. Krew na jego krańcach jeszcze nie zaschła. Jest zwinięty i zapieczętowany różnokolorowymi sznurkami. Dzierżenie i używanie mapy ujawnia aury poszczególnych obiektów; gdy używasz mapy, traci ona powoli swoje ładunki i zużywa się. Aury obiektów, które odkryto wcześniej, są ukazywane w trakcie używania mapy, aż do momentu jej całkowitego zużycia.<br><li><b>20 sekund użytku.</b></li><li>Zaczynasz grę z <b>3 obiektami</b> zlokalizowanymi automatycznie.</li><li>Umożliwia <b>lokalizowanie  generatorów</b> w odległości <b>8 metrów</b>.</li><li>Umożliwia <b>lokalizowanie włazu</b> w odległości <b>8 metrów</b>.</li><li>Umożliwia <b>lokalizowanie przedmiotów należących do Zabójcy</b> w odległości <b>8 metrów</b>.</li><li>Umożliwia <b>lokalizowanie bram wyjściowych</b> w odległości <b>8 metrów</b>.</li>","name":"Tęczowa Mapa","flavor":"„Co za porażka… Cała ta niesamowita wiedza i wysiłek i wciąż nic materialnego, nic, co pomogłoby mi wydostać się z tego koszmaru”. – Dziennik Viga","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"Prosta apteczka ratująca życie w nagłych wypadkach pomimo braków w zaopatrzeniu.<br><li><b>16 ładunków.</b></li><li><b>Umiarkowanie zwiększa</b> prędkość leczenia innych.</li><li>Odblokowuje możliwość <b>samodzielnego leczenia</b>.</li>","name":"Apteczka Obozowa","flavor":"„Ledwo starcza materiałów na przyzwoity opatrunek”.","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"Plastikowe pudełko śniadaniowe z fosforyzującymi naklejkami halloweenowymi, w którym schowano wyposażenie do udzielania pierwszej pomocy.<br><li><b>24 ładunki</b>.</li><li><b>Znacznie zwiększa</b> prędkość leczenia innych.</li><li>Odblokowuje możliwość <b>samodzielnego leczenia</b>.</li><li>Sprawia, że Ocalały jest <b>znacznie bardziej widoczny</b>.</li>","name":"Pudełko śniadaniowe na Halloween","flavor":"„Bezpieczeństwo jest najważniejsze! Upewnij się, że jesteś widoczny, gdy zbierasz cukierki w Halloween”.","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"Standardowa apteczka z kompletnym wyposażeniem, za pomocą którego można opatrzyć zarówno niegroźne, jak i poważne rany.<br><li><b>24</b> ładunki.</li><li><b>Znacząco zwiększa</b> prędkość leczenia.</li><li>Odblokowuje możliwość <b>samodzielnego leczenia</b>.</li>","name":"Apteczka Pierwszej Pomocy","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"Solidny i dobrze zorganizowany zestaw medyczny. Zawiera wysokiej jakości wyposażenie medyczne.<br><li><b>16 ładunków.</b></li><li><b>Ogromnie przyspiesza</b> leczenie innych.</li><li><b>Ogromnie przyspiesza</b> leczenie siebie.</li><li>Odblokowuje możliwość <b>samodzielnego leczenia</b>.</li>","name":"Apteczka awaryjna","flavor":"„Na wszystko jest jakieś lekarstwo… Ale nie na to”.","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"Przestronna, metalowa apteczka zawierająca wyposażenie medyczne przeznaczone do ratowania ludzi w ciężkich warunkach, często w odizolowanych miejscach.<br><li><b>32 ładunki.</b></li><li><b>Ogromnie przyspiesza</b> leczenie innych.</li><li><b>Średnio zwiększa</b> pasek sukcesu dla testów umiejętności.</li><li><b>Średnio zwiększa</b> obszar bonusowy dla testów umiejętności.</li><li>Odblokowuje możliwość <b>samodzielnego leczenia</b>.</li>","name":"Apteczka leśniczego","flavor":"„Mała, grawerowana etykieta jest przyklejona z tyłu apteczki: VK.ID-3994723”.","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"Metalowa skrzynka zawierająca niesprawne narzędzia, które mogą się zepsuć w każdym momencie. Można jej użyć do naprawy albo niszczenia mechanicznych elementów.<br><li><b>16 ładunków.</b></li><li><b>Średnio zwiększa</b> szybkość naprawy.</li><li><b>Nieznacznie zmniejsza</b> paski sukcesu testów umiejętności.</li><li>Odblokowuje możliwość <b>sabotażu</b>.</li>","name":"Zużyte Narzędzia","flavor":"„I ty to nazywasz narzędziami? Serio?”","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"Metalowa skrzynka zawierająca podstawowy zestaw narzędzi. Może być użyta do naprawy albo niszczenia mechanicznych elementów.<br><li><b>20 ładunków.</b></li><li><b>Umiarkowanie zwiększa</b> szybkość naprawy.</li><li>Odblokowuje możliwość <b>sabotażu</b>.</li><li><b>Nieznacznie zwiększa</b> szybkość sabotażu.</li>","name":"Skrzynka z Narzędziami","flavor":"„Nie wiadomo, skąd pochodzą te narzędzia. Przyniósł je jeden z nas, czy należały do jednego z potworów?”","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"Metalowa skrzynka zawierająca specjalistyczne narzędzia mechanika. Można ich używać do naprawiania lub niszczenia różnorodnych mechanicznych elementów nawet bez odpowiedniego przeszkolenia.<br><li><b>16 ładunków.</b></li><li><b>Znacznie zwiększa</b> szybkość naprawy.</li><li>Odblokowuje możliwość <b>sabotażu</b>.</li><li><b>Nieznacznie zmniejsza</b> szybkość sabotażu.</li>","name":"Skrzynka z Narzędziami Mechanika","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"Metalowa skrzynka zawierająca podstawowy zestaw narzędzi i nieco części mechanicznych. Może być użyta do naprawy albo niszczenia mechanicznych elementów.<br><li><b>32 ładunki.</b></li><li><b>Umiarkowanie zwiększa</b> szybkość naprawy.</li><li>Odblokowuje możliwość <b>sabotażu</b>.</li>","name":"Przestronna Skrzynka z Narzędziami","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"Metalowa skrzynka zawierająca specjalistyczne narzędzia inżynierskie. Większości narzędzi można używać do naprawiania lub niszczenia różnorodnych mechanicznych elementów nawet bez odpowiedniego przeszkolenia.<br><li><b>16 ładunków</b>.</li><li><b>Ogromnie zwiększa</b> szybkość naprawy.</li><li>Odblokowuje możliwość <b>sabotażu</b>.</li><li><b>Umiarkowanie zmniejsza</b> szybkość sabotażu.</li>","name":"Skrzynka z Narzędziami Inżyniera","flavor":"„Stworzyłem znakomite narzędzia, lecz nie byłem w stanie nic zrobić, kiedy mi je kradziono. Te są jedynie żałosną imitacją znalezioną we Mgle”. – Dziennik Viga","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"Metalowa skrzynka zawierająca głównie piły i obcęgi różnych wielkości, ale także inne narzędzia. Mimo że znajdujące się w skrzynce przedmioty służą głównie do niszczenia, mogą być także użyte do naprawy mechanicznych elementów.<br><li><b>24 ładunki.</b></li><li><b>Nieznacznie zwiększa</b> szybkość naprawy.</li><li>Odblokowuje możliwość <b>sabotażu</b>.</li><li><b>Znacznie zwiększa</b> szybkość sabotażu.</li>","name":"Skrzynka z narzędziami Alexa","flavor":"„Większość narzędzi jest podpisana jako «własność Alexa»”.","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"Niegroźne, świąteczne petardy. Pełnią funkcję dekoracji na stół. Wybuchają z hukiem i błyskiem intensywnego światła. Mogą zostać użyte do odwrócenia uwagi, oślepienia celu lub do świętowania.<br><li><b>1 ładunek.</b></li>","name":"Starter Zimowej Imprezy","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"Niegroźne, świąteczne petardy. Pełnią funkcję dekoracji na stół. Wybuchają kolorowym konfetti z hukiem i błyskiem intensywnego światła. Mogą zostać użyte do odwrócenia uwagi, oślepienia celu lub do świętowania trzech wspólnych lat.<br><li><b>1 ładunek.</b></li>","name":"Zestaw imprezowy z okazji trzeciej rocznicy","flavor":"„Wszystkiego najlepszego z okazji trzech wspólnych lat!”<br>– Zespół Dead by Daylight","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"Imprezowa apteczka, która po całkowitym wyleczeniu ocalałego strzela konfetti. Niespodzianka!<br><li><b>24 ładunki</b>.</li><li><b>Znacznie zwiększa</b> prędkość leczenia innych.</li><li>Odblokowuje akcję <b>samodzielnego leczenia</b>.</li>","name":"Apteczka rocznicowa","flavor":"„Wszystkiego najlepszego! Kolejnych lat w grze!”<br> – zespół Dead by Daylight","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"Imprezowa latarka, która po oślepieniu zabójcy strzela konfetti. Niespodzianka!<br><li><b>Działa 8 sekund</b>.</li>","name":"Latarka rocznicowa","flavor":"„Wszystkie najlepszego! Kolejnych lat w grze!”<br> – zespół Dead by Daylight","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/pl/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Ochronne, watowane, skórzane rękawice.<br><li><b>Nieznacznie zmniejsza</b> czas potrzebny do rozkładania pułapek.</li>","name":"Rękawice Trapera","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"Duża i ciężka sprężyna, która wzmacnia chwyt pułapek na niedźwiedzie.<br><li><b>Nieznacznie zwiększa</b> czas potrzebny do rozbrojenia pułapek na niedźwiedzie.</li>","name":"Mocna Sprężyna","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"Zestaw wymienny do pułapek na niedźwiedzie. Zastępuje typowy, podwójny system sprężyn systemem składającym się z czterech sprężyn wzmacniających chwyt pułapek na niedźwiedzie.<br><li><b>Umiarkowanie zwiększa</b> czas potrzebny do rozbrojenia pułapek na niedźwiedzie.</li>","name":"Zestaw 4 sprężyn","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"Popiół drzewny. Po zagotowaniu może służyć do barwienia pułapek na niedźwiedzie, dzięki czemu stają się one mniej widoczne.<br><li><b>Średnio przyciemnia</b> pułapki.</li>","name":"Kampesz","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"Podobne do ostrza piły zamienne szczęki do pułapek na niedźwiedzie, powodujące okropne otwarte rany u ofiar.<br><li>Ocalali, którzy wpadli w pułapkę, otrzymują efekt <b>Krwawienia</b>, trwający aż do momentu uleczenia.</li>","name":"Ząbkowane Szczęki","flavor":"„Jest niczym drapieżna bestia, która wyczuwa i śledzi krew”.","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"Proste narzędzia zaprojektowane tak, aby można było szybko i bezpiecznie rozkładać pułapki na niedźwiedzie.<br><li><b>Średnio zmniejsza</b> czas potrzebny do rozkładania pułapek.</li>","name":"Rozkładacz pułapek","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"Skórzana torba biodrowa. Jest duża i solidna; służy do transportu sprzętu myśliwskiego.<br><li>Zaczynasz mecz z <b>1 dodatkową</b> pułapką na niedźwiedzie.</li><li>Umożliwia przechowywanie <b>2 dodatkowych</b> pułapek na niedźwiedzie.</li>","name":"Torba Trapera","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"Szczęki pułapek na niedźwiedzie pokryte kruchą i lotną rdzą. Sprawia ona, że rany ofiar, które wpadły w pułapkę, stają się bardzo trudne do wyleczenia.<br><li>Na ofiary złapane w pułapki nakładany jest efekt <b>Zmasakrowany</b>.","name":"Zardzewiałe szczęki","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"Druga sprężyna utrzymująca pułapkę na niedźwiedzie w całości, w razie gdyby główne sprężyny stały się bezużyteczne.<br><li><b>Znacznie zwiększa</b> czas potrzebny do rozbrojenia pułapek na niedźwiedzie.</li>","name":"Dodatkowa Sprężyna","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"Czarna, matowa i lepka substancja podobna do smoły. Po zastosowaniu na pułapkach na niedźwiedzie, czyni je trudniejszymi do dostrzeżenia.<br><li><b>Znacznie przyciemnia</b> pułapki.</li>","name":"Butelka Smoły","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"Blok wosku używany do zmniejszenia tarcia i ułatwiający ruch mechanicznych części.<br><li><b>Średnio zmniejsza</b> szansę wydostania się z pułapek.","name":"Kostka Wosku","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"Olej, który sprawia, że majstrowanie przy sprężynach w pułapkach staje się bardziej ryzykowne.<br><li><b>Ogromnie zwiększa</b> czas potrzebny do rozbrojenia pułapek na niedźwiedzie.</li>","name":"Naoliwiona sprężyna","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"Specjalny zestaw narzędzi używany do mocowania pułapek na niedźwiedzie, zapewniający ich skuteczność.<br><li><b>Ogromnie zmniejsza</b> czas potrzebny do rozkładania pułapek.</li><li><b>Znacznie zwiększa</b> czas potrzebny do uwolnienia ofiar z pułapek.</li><li><b>Średnio zmniejsza</b> szansę wydostania się z pułapek.","name":"Narzędzia Mocujące","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"Pozszywane ze sobą kawałki skór różnego rodzaju, tworzące ogromny plecak.<br><li>Zaczynasz mecz z <b>2 dodatkowymi</b> pułapkami na niedźwiedzie.</li><li>Umożliwia przechowywanie <b>2 dodatkowych</b> pułapek na niedźwiedzie.</li>","name":"Pozszywany plecak","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"Lepko-śliski, groźny płyn, który sprawia, że majstrowanie przy sprężynach w pułapkach staje się bardziej niebezpiecznym zadaniem.<br><li>Kiedy <b>zdrowy</b> ocalały zniszczy lub rozbroi pułapkę, zakrwawiona sprężyna sprawi, że znajdzie się on w <b>stanie krytycznym</b>.</li><li><b>Nieznacznie zwiększa</b> czas potrzebny do rozbrojenia pułapek na niedźwiedzie.</li>","name":"Zakrwawiona sprężyna","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"Pułapki naostrzone tą lśniącą osełką zdają się żyć własnym życiem.<br><li>Raz na każde <b>30 sekund</b>, jedna losowa nierozstawiona pułapka na niedźwiedzie rozstawi się automatycznie.</li>","name":"Opalizująca Osełka","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"Symbol Laokeye. Został narysowany palcem zanurzonym w sadzy. Reprezentuje przebiegłość.<br><li>Widmo <b>wyjdzie z trybu niewidzialności</b> natychmiast po zniszczeniu palety lub uszkodzeniu generatora.</li>","name":"„Wąż” – Sadza","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"Symbol Wonnug. Został narysowany palcem zanurzonym w sadzy. Reprezentuje bezkonkurencyjnego tropiciela.<br><li>Świeże ślady krwi są <b>znacznie</b> bardziej widoczne niż normalnie, gdy znajdujesz się w trybie niewidzialności.</li>","name":"„Pies” – Sadza","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"Symbol Khugwemuu. Został narysowany palcem zanurzonym w sadzy. Reprezentuje niematerialny wymiar.<br><li>Po wyjściu z trybu niewidzialności, zasięg terroru i czerwona poświata Widma pozostają nieaktywne przez <b>6 sekund</b>.</li>","name":"\\\\„Duch\\\\” – Sadza","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":" Reprezentujący świat grozy symbol Kunwulju został narysowany na dzwonie palcem zanurzonym w sadzy.<br><li>Zasięg terroru Widma <b>nie jest stłumiony</b>, gdy znajdujesz się w trybie niewidzialności.</li><li>Zapewnia 100% premii do Punktów Krwi za prześladowanie i niespodziewane ataki.</li>","name":"„Bestia” – Sadza","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"Grzechotka wykonana z wypolerowanych kawałków kości. Dołączona do Zawodzącego Dzwonu sprawia, że dźwięk odbija się i chaotycznie zmienia kierunek brzmienia.<li>Ocalali nie mogą określić <b>dystansu</b> ani <b>kierunku</b>, z którego rozbrzmiewa dźwięk Zawodzącego Dzwonu.<li>","name":"Kościana Grzechotka","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"Symbol Kratin narysowany na Dzwonie palcem zamoczonym w błocie. Reprezentuje szybkie przemijanie.<br><li><b>Znacznie skraca</b> czas znikania Widma.</li>","name":"„Mignięcie” – Błoto","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"Symbol Ohuwe-Onmnea narysowany na Dzwonie palcem zamoczonym w błocie. Reprezentuje gwałtowną burzę.<li><b>Umiarkowanie zwiększa</b> prędkość ruchu Widma w trybie niewidzialności.</li>","name":"„Wichura” – Błoto","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"Symbol Kuntin-Takkho narysowany na Dzwonie palcem zamoczonym w błocie. Reprezentuje gwałtowny skok na ofiarę.<br><li><b>Nieznacznie skraca</b> czas ponownego pojawiania się Widma.</li>","name":"„Szybkie Łowy” – Błoto","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"Symbol Baikra-Kaeug. Został narysowany palcem zamoczonym w błocie. Reprezentuje głuchotę.<br><li><b>Niespodziewane ataki</b> nakładają na ocalałych efekt <b>oślepienia</b> na okres <b>60 sekund</b>.</li>","name":"„Ślepy wojownik” – Błoto","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"Symbol Ohuwe-Onmnea narysowany na Dzwonie palcem zamoczonym w białym atramencie. Reprezentuje gwałtowną burzę.<li><b>Znacznie zwiększa</b> prędkość ruchu Widma w trybie niewidzialności.</li>","name":"„Wichura” – Biel","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"Symbol Kuntin-Takkho narysowany na Dzwonie palcem zamoczonym w białym atramencie. Reprezentuje gwałtowny skok na ofiarę.<br><li><b>Umiarkowanie skraca</b> czas ponownego pojawiania się Widma.</li>","name":"„Szybkie Łowy” – Biel","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"Reprezentujący mroczną jedność symbol Yiwarick został namalowany na dzwonie palcem maczanym w białym atramencie.<br><li><b>Znacznie przyspiesza</b> akcje przeskoku przez okna, otwierania szafek, niszczenia palet i innych przedmiotów oraz uszkadzania generatorów, gdy znajdujesz się w trybie niewidzialności.</li>","name":"„Taniec Cienia” – Biel","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"Symbol Kratin narysowany na Dzwonie palcem zamoczonym w białym atramencie. Reprezentuje szybkie przemijanie.<br><li><b>Ogromnie skraca</b> czas znikania Widma.</li>","name":"„Mignięcie” – Biel","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"Symbol Baikra-Kaeug. Został narysowany białym atramentem na Dzwonie. Reprezentuje zaciekłość.<br><li>Niespodziewane ataki nakładają na ocalałych efekty <b>Zmasakrowany</b> i <b>Krwawienie</b>, które trwają aż do momentu pełnego wyleczenia.</li>","name":"„Ślepy wojownik” – Biel","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"Symbol Ohuwe-Onmnea odciśnięty krwią na Dzwonie. Reprezentuje gwałtowną burzę.<br><li><b>Ogromnie zwiększa</b> prędkość ruchu Widma w trybie niewidzialności.</li>","name":"„Wichura” – Krew","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"Symbol Kuntin-Takkho odciśnięty krwią na głowicy Dzwonu. Reprezentuje gwałtowny skok na ofiarę.<br><li><b>Znacznie skraca</b> czas ponownego pojawiania się Widma.</li>","name":"„Szybkie Łowy” – Krew","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"Reprezentujący mroczną jedność symbol Yiwarick został odciśnięty krwią na dzwonie.<br><li><b>Ogromnie przyspiesza</b> wykonywanie akcji przeskoku przez okna, otwierania szafek, niszczenia palet i innych przedmiotów oraz uszkadzania generatorów, gdy znajdujesz się w trybie niewidzialności.</li>","name":"„Taniec Cienia” – Krew","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"Symbol Kra-Frabai. Został narysowany palcem zamoczonym we krwi. Reprezentuje spoglądający na nas Byt.<br><li>Gdy poruszasz się w trybie niewidzialności, dostrzegasz aury ocalałych znajdujących się w zasięgu <b>12 metrów</b> od ciebie.</li>","name":"„Wszystkowidzący” – Krew","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"Węzeł zawiązany wokół serca dzwonu. Tłumi dźwięki wydawane przez dzwon. Emanuje złowrogą aurą.<br><li><b>Całkowicie wycisza</b> dźwięk Zawodzącego Dzwonu.</li>","name":"Obwiązane serce dzwonu","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"Symbol Kra-Frabai. Żarzy się złowrogo na czaszce dzwonu. Reprezentuje spoglądający na nas Byt.<br><li>Wyzwala niesamowity potencjał odczytywania aury. Gdy znajdujesz się w trybie niewidzialności, jesteś w stanie określić stopień <b>postępu naprawy generatorów</b> na podstawie <b>intensywności aur generatorów</b>.</li>","name":"„Wszystkowidzący” – Duch","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"Dobrze wykonane sprzęgło, które zapewnia płynny ruch łańcucha.<br><br><li><b>Zmniejsza</b> strefę zderzenia podczas sprintu z piłą łańcuchową.</li>","name":"Ciężkie sprzęgło","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"Mechaniczne urządzenie ograniczające ilość paliwa, którą można wlać za jednym razem do małych silników. Wymusza stałą, bezpieczną prędkość pracy silnika.<br><br><li>Ocalali trafieni piłą łańcuchową otrzymują obrażenia w wysokości jednego stanu zdrowia.</li><li>Otrzymujesz <b>100%</b> więcej Punktów Krwi za trafienia piłą łańcuchową.</li>","name":"Ogranicznik Prędkości","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Popękany i zakurzony filtr, który wciąż działa lepiej niż oryginalny model.<br><br><li><b>Nieznacznie zwiększa</b> limit przegrzania piły łańcuchowej.</li>","name":"Filtr powietrza z wysypiska","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"Buty ze wzmocnionymi palcami chroniące przed uderzeniem.<br><br><li><b>Nieznacznie skracają</b> czas odzyskiwania równowagi po trafieniu obiektu piłą łańcuchową.</li>","name":"Obuwie ochronne","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"Nieco zmodyfikowany tłumik, który poprawia przepływ powietrza.<br><br><li><b>Nieznacznie zwiększa</b> prędkość chłodzenia piły łańcuchowej.</li>","name":"Przebity tłumik","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"Wspaniały, lśniący pas noszony przez wielu mieszkańców wsi.<br><br><li><b>Zmniejsza</b> zasięg terroru o 8 metrów, gdy piła łańcuchowa jest przegrzana.</li>","name":"Duża klamra","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"Tani olej, którego można użyć do nasmarowania głośnych łańcuchów.<br><br><li><b>Nieznacznie zmniejsza</b> hałas wydawany przez piłę łańcuchową.</li>","name":"Olej silnikowy firmy krzak","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"Para sprawdzonych butów ściągniętych ze zwłok Maksa Thompsona Seniora.<br><br><li><b>Umiarkowanie zwiększa</b> sterowność podczas sprintu z piłą łańcuchową.</li>","name":"Buty po tacie","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"Grawerunek wskazujący ilość odebranych przez piłę żyć. Przepełnia użytkownika determinacją.<br><li><b>Nieznacznie zwiększa</b> prędkość uruchomionej piły łańcuchowej.</li><li><b>Nieznacznie zmniejsza</b> szybkość uruchamiania piły łańcuchowej.</li><li>Łączy się.</li>","name":"Grawerunek Śmierci","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"Kilka tabletek kofeinowych znalezionych w torebce Evelyn Thompson. Efekty uboczne obejmują niepokój i rozdrażnienie.<br><br><li><b>Nieznacznie zmniejszają</b> czas ładowania piły łańcuchowej przez 30 sek. po oszołomieniu przez paletę.</li><br>","name":"Pomocnicy mamy","flavor":"„Doktorze, proszę dać mi jeszcze trochę”. – Evelyn Thompson","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"Specjalny łańcuch, który zmniejsza prawdopodobieństwo wystąpienia odrzutu.<br><br><li><b>Znacznie skraca</b> karę za zderzenie się z przeszkodą podczas sprintu z piłą łańcuchową.</li>","name":"Łańcuchy o niskim odrzucie","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"Mokra papka z pachnących liści, która maskuje zapach łowcy tropiącego ofiarę.<br><br><li>Daje efekt Niewykrywalny na 15 sekund po trafieniu piłą łańcuchową.</li>","name":"Liściasta papka","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"Grawerunek reprezentujący mroczną bestię żyjącą we Mgle. Przepełnia użytkownika determinacją.<br><li><b>Średnio zwiększa</b> prędkość uruchomionej piły łańcuchowej.</li><li><b>Nieznacznie zmniejsza</b> szybkość uruchamiania piły łańcuchowej.</li><li>Łączy się.</li>","name":"Grawerunek Zagłady","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"Gęsty smar, który można nałożyć pod oczy, aby zmniejszyć oślepiające odblaski.<br><br><li><b>Umiarkowanie zwiększa</b> prędkość chłodzenia piły łańcuchowej, kiedy pada na ciebie światło latarki.</li>","name":"Czarny smar","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"Choć cały wybrudzony jest błotem, gaźnik ten został dobrze skalibrowany.<br><br><li><b>Umiarkowanie skraca</b> czas ładowania piły łańcuchowej.</li><li><b>Zmniejsza</b> podstawową prędkość ruchu do 4,4 m/s.","name":"Wyregulowany gaźnik","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"Buty z przymocowanymi kawałkami metalu, które zagłębiają się w błocie i zapewniają większą stabilność i kontrolę podczas chodzenia.<br><li><b>Ogromnie zwiększają</b> sterowność piły łańcuchowej.</li><li><b>Znacznie zwiększają</b> czas trwania oszołomienia po wpadnięciu na jakiś obiekt.</li>","name":"Buty z Kolcami","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"Śmierdzące rękawice pobrudzone nieznanymi substancjami. Choć są beznadziejne, to jednak wykonano je z grubego materiału.<br><br><li><b>Umiarkowanie zmniejszają</b> ciepło wytwarzane podczas pracy piły łańcuchowej.</li><br>","name":"Rękawice do chlewu","flavor":"„Nic nie skazi duszy ciężko pracującego człowieka”. – Max Thompson Senior","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"Lekkie łańcuchy, które zmniejszają wagę piły łańcuchowej i ułatwiają poruszanie nią.<br><br><li>Umożliwiają kontynuację sprintu z piłą łańcuchową po zniszczeniu palety lub ściany.</li><li>Ocalali trafieni piłą łańcuchową w ciągu 5 sek. od zniszczenia palety lub ściany otrzymują obrażenia w wysokości jednego stanu zdrowia.</li>","name":"Łańcuchy niskoprofilowe","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"Ta cegła, niegdyś symbol izolacji Maksa Juniora, była pierwszym elementem, który odpadł bo zburzeniu ścian jego pokoju.<br><br><li>Po 2 sekundach sprintu z piłą łańcuchową otrzymujesz efekt Niewykrywalny do zakończenia sprintu.</li><br>","name":"Opalizująca cegła","flavor":"„Co kombinujesz, chłopcze”? – Max Thompson Senior","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"Mistrzowsko wykonany tłumik piły łańcuchowej o nieprześcignionej wydajności.<br><br><li>Piła łańcuchowa jest niesłyszalna dla ocalałych poza zasięgiem terroru.</li>","name":"Doskonały tłumik","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"Niepomalowana zabawka wyciosana z taniego drewna na podobieństwo konia. Dawniej symbol silnej więzi łączącej pacjenta cierpiącego na katatonię z pielęgniarką.<br><li><b>Umiarkowanie zmniejsza</b> dodatkowe zmęczenie z chybionych ataków teleportacyjnych.</li>","name":"Drewniany Konik","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"Pasożytniczy grzebień nitkowy zabrany z kliniki. Stanowi dawny symbol silnej więzi łączącej niespokojną pacjentkę z pielęgniarką.<br><li><b>Umiarkowanie zmniejsza</b> odległość ataków teleportacyjnych.</li><li>Zwiększa liczbę punktów krwi za <i>ataki teleportacyjne</i> o <b>100%</b>.</li>","name":"Grzebień Niespokojnego Pacjenta","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"Zwyczajna, częściowo zardzewiała i poplamiona metalowa łyżka. Została skonfiskowana od pacjenta z pokoju 202, \\"Złego Człowieka\\".<br><li>Trafienie ocalałego atakiem teleportacyjnym sprawia, że odgłosy bólu stają się <b>umiarkowanie głośniejsze</b> przez <b>60 sekund</b>.</li>","name":"Metalowa Łyżka","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"Przegniły trzonowiec wyrwany z zimnej i martwej ręki „Złego Człowieka”.<br><li>Trafienie ocalałego atakiem teleportacyjnym powoduje ujawnienie jego aury podczas leczenia lub otrzymywania pomocy w promieniu <b>28 metrów</b> przez <b>60 sekund</b>.</li>","name":"Pamiątka po złym człowieku","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"Zwęglony i zniszczony zegarek kieszonkowy z grzechocącymi elementami. Został zrabowany z ciała pielęgniarki o imieniu Moris.<br><li><b>Umiarkowanie zwiększa</b> długość łączonych teleportacji.</li>","name":"Zegarek Kieszonkowy","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"Bezwartościowy kawałek biżuterii. Niewykluczone, że może mieć dla kogoś wartość sentymentalną. Został wykradziony z płuc niespokojnej dziewczyny.<br><li><b>Umiarkowanie zmniejsza</b> maksymalną odległość teleportacji.</li><li>Zwiększa liczbę punktów krwi za <i>precyzyjną teleportację</i> o <b></b>100%.</li>","name":"Odbarwiona bransoletka","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"Czarna lina używana jako pasek w czasie żałoby. Zabrane z ciała ojca Campbella.<br><li><b>Umiarkowanie zwiększa</b> prędkość ładowania teleportacji.</li>","name":"Ciemny Pasek","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"Sosnowa szyszka, która niespodziewanie uspokoiła powtarzalne ruchy pacjenta. Zabrana z ciała chłopca z katatonią.<br><li><b>Znacznie zmniejsza</b> dodatkowe zmęczenie z połączonych teleportacji.</li>","name":"Skarb Chłopca z Katatonią","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"Nerwowy i drżący oddech wykradziony „Złemu Człowiekowi”. Pulsuje i skacze agresywnie w rękach Pielęgniarki.<br><li>Trafienie ocalałego atakiem teleportacyjnym <b>wyłącza umiejętność teleportacji Pielęgniarki</b> i zwiększa jej podstawową prędkość ruchu do <b>4,6 m/s</b> na <b>60 sekund.</b></li>","name":"Spazmatyczny Oddech","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"Wolny i ciężki oddech wykradziony grubemu dyżurnemu. Drży słabo w rękach Pielęgniarki.<br><li><b>Znacznie zwiększa</b> maksymalny zasięg teleportacji.</li><li><b>Znacznie wydłuża</b> maksymalny czas ładowania teleportacji.</li>","name":"Ciężkie Dyszenie","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"Gwałtowny i tępy oddech skradziony od ojca Campbella. Zgina się cicho w rękach Pielęgniarki.<br><li><b>Znacznie zwiększa</b> prędkość ładowania teleportacji.</li>","name":"Ciche Sapanie","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"Nieregularny, marniejący oddech odebrany chłopcu cierpiącemu na katatonię. Jest zazwyczaj miarowy i stabilny, ale gdy znajduje się w rękach Pielęgniarki, staje się niezwykle niespokojny. <br><li><b>Umiarkowanie skraca</b> czas trwania zmęczenia po teleportacji.</li>","name":"Przedśmiertny Oddech","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"Pełne zaskoczenia tchnienie wykradzione niespokojnej dziewczynie, którą Pielęgniarka darzyła szczególną sympatią. Drga energicznie na dotyk Pielęgniarki.<br><li>Teleportacja obok ocalałego zmusza go do krzyku i daje <b>20 punktów krwi</b> w kategorii <i>Przebiegłość</i>.</li>","name":"Niespokojny Oddech","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"Rozpruty kawałek bawełnianego materiału w czerwono-czarną kratę. Fabryczny skrawek wprowadzający Pielęgniarkę w stan destrukcyjnego skupienia. <br><li>Pozwala Pielęgniarce dostrzec docelowe miejsce teleportacji.</li>","name":"Flanelowy Pled","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"Potężny, ostatni oddech wykradziony z płuc Harveya Kavanagha — pacjenta przytułku Crotus Prenn. Drży intensywnie w rękach Pielęgniarki.<br><li><b>Ogromnie zwiększa</b> maksymalny zasięg teleportacji.</li><li><b>Ogromnie wydłuża</b> maksymalny czas ładowania teleportacji.</li>","name":"Ostatni Oddech Kavanagha","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"Potężny, ostatni oddech odebrany Mary Jenner — pacjentce przytułku Crotus Prenn. Drży intensywnie w rękach Pielęgniarki.<br><li>Po teleportacji pozwala Pielęgniarce powrócić do początkowej pozycji po naciśnięciu <i>przycisku aktywnej umiejętności</i>. Należy włączyć zanim Pielęgniarka ulegnie zmęczeniu.</li>","name":"Ostatni Oddech Jenner","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"Potężny, ostatni oddech wyrwany od ojca Campbella, kapelana przytułku Crotus Prenn. Drży intensywnie w rękach Pielęgniarki.<br><li>Po ponownym pojawieniu się po w pełni naładowanej teleportacji Pielęgniarka natychmiast teleportuje się z połową ładunku w kierunku, w którym jest zwrócona.</li>","name":"Ostatni oddech Campbella","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"Potężne, ostatnie tchnienie „Złego Człowieka\\", pacjenta przytułku Crotus Prenn. Drży intensywnie w rękach Pielęgniarki.<br><li>Trafienie ocalałego atakiem teleportacyjnym daje Pielęgniarce status <b>Niewykrywalny</b> na <b>16 sekund</b>.</li><li>Efekt można włączyć tylko raz na <b>60 sekund</b>.</li>","name":"Ostatni Oddech „Złego Człowieka\\"","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"Nieskazitelnie biały kawałek wstążki dołączonej do świętej księgi. Stanowi symbol debaty.<br><li>Dodaje <b>1</b> ładunek teleportacyjny.</li><li>Teleportacja jest niemożliwa do miejsc poza zasięgiem wzroku Pielęgniarki.</li>","name":"Poszarpana Zakładka","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"Pudełko zawierające dziwną kolekcję niedopasowanych zapałek. Służy jako pamiątka z okropnego miejsca.<br><li>Usuwa <b>1</b> ładunek teleportacji.</li><li>Zwiększa podstawową prędkość ruchu pielęgniarki do <b>4,2 m/s</b>.</li>","name":"Pudełko zapałek","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"Bardzo tani element biżuterii zrobiony z plastiku. Został pomalowany, aby przypominał cenny materiał.<br><li><b>Nieznacznie zwiększa</b> prędkość ruchu podczas śledzenia.</li>","name":"Tandetne kolczyki","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"„Romantyczna”, nieco żenująca notka pozostawiona przez osobę usiłującą zwrócić na siebie uwagę kochanki.<br><li><b>Nieznacznie zwiększa</b> zasięg ataku będąc na <b>I poziomie Wewnętrznego Zła</b>.</li>","name":"Notka od chłopaka","flavor":"„Ta notka jest podpisana: D.”","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"Pojedynczy, lekko skręcony jasny włos.<br><li><b>Nieznacznie zwiększa</b> długość trwania <b>Wewnętrznego Zła na poziomie 3</b>.</li><li><b>Nieznacznie zwiększa</b> liczbę punktów zła wymaganą do osiągnięcia <b>3. poziomu Wewnętrznego Zła</b> po raz pierwszy.</li>","name":"Blond włos","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"Malutki kawałek odblaskowego materiału, prawdopodobnie ze zbitego lustra.<br><li><b>Wewnętrzne Zło na poziomie 2. ujawnia aury ocalałych,</b> którzy byli przez ciebie śledzeni przez co najmniej <b>1 s</b>.</li><li>Aury pozostają widoczne przez <b>2 s</b>.</li>","name":"Odblaskowy odłamek","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"Wysuszona różowa ostróżka zabrana z nagrobka. Częściowo wyblakła.<br><li><b>Nieznacznie zwiększa</b> prędkość zdobywania punktów zła podczas śledzenia ocalałego.</li>","name":"Pamiątkowy kwiat","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"Duży naszyjnik wykonany z koralików oraz niedrogich metali. Jeden z ulubionych elementów biżuterii Judith.<br><li><b>Umiarkowanie zwiększa</b> prędkość ruchu podczas śledzenia.</li>","name":"Biżuteria","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"Nylonowa szczotka dodająca włosom objętości i miękkości.<br><li><b>Umiarkowanie zwiększa</b> długość trwania <b>Wewnętrznego Zła na poziomie 3</b>.</li><li><b>Nieznacznie zwiększa</b> liczbę punktów zła wymaganą do osiągnięcia <b>3. poziomu Wewnętrznego Zła</b> po raz pierwszy.</li>","name":"Szczotka do włosów","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"Mały kawałek barwionego szkła pochodzący najprawdopodobniej z rozbitego przedmiotu. Ustalenie pochodzenia szkła nie jest możliwe.<br><li><b>Wewnętrzne Zło na poziomie I ujawnia aury Ocalałych,</b> którzy byli przez ciebie śledzeni przez co najmniej <b>1 s</b>.</li><li>Aury pozostają widoczne przez <b>3 s</b>.</li>","name":"Odłamek szkła","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"Szary królik. Został rozcięty od szyi aż po ogon.<br><li><b>Średnio zmniejsza</b> zasięg terroru będąc na <b>II poziomie Wewnętrznego Zła</b>.</li><li><b>Średnio zwiększa</b> zasięg terroru będąc na <b>III poziomie Wewnętrznego Zła</b>.</li>","name":"Martwy królik","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"Wielki i ostry kawałek stłuczonego lustra.<br><li><b>Wewnętrzne Zło na poziomie 2. ujawnia aury ocalałych,</b> którzy byli przez ciebie śledzeni przez co najmniej <b>1 s</b>.</li><li>Aury pozostają widoczne przez <b>5 s</b>.</li>","name":"Lustrzany odłamek","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"Dziennik należący do Judith M. Myers. Większość stron jest oszpecona niepokojącymi, wręcz przerażającymi rysunkami.<br><li>Jeden z ocalałych staje się twoją <b>obsesją</b>.</li><li><b>Znacznie zwiększa</b> prędkość zdobywania punktów zła podczas śledzenia obsesji.</li><li><i>Tylko jedna obsesja na mecz.</i></li>","name":"Dziennik Judith","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"Drewniane pudełko, w którym przechowywano kiedyś różne przedmioty.<br><li><b>Znacznie zwiększa</b> prędkość ruchu podczas śledzenia.</li>","name":"Pudełko na biżuterię","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"Lśniąca strona wyrwana z klasowej książki pamiątkowej rocznika 1965 w liceum Haddonfield. Poświęcona pamięci Judith Myers.<br><li><b>Umiarkowanie zwiększa</b> prędkość zdobywania punktów zła podczas śledzenia ocalałego.</li>","name":"Pamiątka po J.Myers","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"Niebieska tartanowa kokardka do zawiązywania włosów.<br><li><b>Znacznie zwiększa</b> długość trwania <b>Wewnętrznego Zła na poziomie 3</b>.</li><li><b>Nieznacznie zwiększa</b> liczbę punktów zła wymaganą do osiągnięcia <b>3. poziomu Wewnętrznego Zła</b> po raz pierwszy.</li>","name":"Kokarda do włosów","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"Stojące, przenośne lusterko do makijażu. Jest w idealnym stanie, ale pokrywa je cienka warstwa kurzu i pudru.<br><li>Gdy jesteś na <b>II poziomie Wewnętrznego Zła,</b> dostrzegasz aury Ocalałych znajdujących się w zasięgu <b>16 m</b> od ciebie. Aury są widoczne tylko wtedy, gdy używasz swojej mocy.</li><li>Możesz osiągnąć maksymalnie <b>II poziom Wewnętrznego Zła</b>.</li><li>Otrzymujesz <b>100%</b> więcej Punktów Krwi za każde <b>uderzenie Ocalałego.</b> Otrzymujesz także <b>150%</b> więcej Punktów Krwi w kategorii <b>Brutalność</b> i <b>Przebiegłość</b>.</li>","name":"Stojące lusterko","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"Kawałek granitu wielkości pięści zabrany z rozbitego nagrobka.<br><li>Na <b>3. poziomie Wewnętrznego Zła</b> odblokowuje możliwość <b>zabicia</b> zdrowych lub będących w stanie krytycznym ocalałych.</li><li><b>Odbiera</b> możliwość śledzenia na <b>3. poziomie Wewnętrznego Zła</b>.</li><li>Zabicie ocalałego <b>znacząco ogranicza moc</b> Wewnętrznego Zła.</li><li><b>Znacznie zwiększa</b> liczbę punktów zła wymaganą do osiągnięcia <b>3. poziomu Wewnętrznego Zła</b> po raz pierwszy.</li>","name":"Kawałek nagrobka","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"Stojące, przenośne lusterko do makijażu. Zostało zarysowane ostrym, metalowym narzędziem.<br><li>Gdy jesteś na <b>I poziomie Wewnętrznego Zła,</b> dostrzegasz aury Ocalałych znajdujących się w zasięgu <b>32 m</b> od ciebie. Aury są widoczne tylko wtedy, gdy używasz swojej mocy.</li><li>Możesz osiągnąć maksymalnie <b>I poziom Wewnętrznego Zła</b>.</li><li>Otrzymujesz <b>100%</b> więcej Punktów Krwi za każde <b>uderzenie Ocalałego. </b>Otrzymujesz także <b>200%</b> więcej Punktów Krwi w kategorii <b>Brutalność</b> i <b>Przebiegłość</b>.</li>","name":"Strzaskane lusterko","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"Ucięty, związany elastyczną gumką pukiel blond włosów.<br><li><b>Ogromnie zwiększa</b> długość trwania <b>Wewnętrznego Zła na poziomie 3</b>.</li><li><b>Umiarkowanie zwiększa</b> liczbę punktów zła wymaganą do osiągnięcia <b>3. poziomu Wewnętrznego Zła</b> po raz pierwszy.</li>","name":"Pukiel włosów","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"Wielki i ciężki granitowy nagrobek skradziony z cmentarza Mt. Sinclair, należący do Judith Myers.<br><li>Odblokowuje możliwość <b>zabicia</b> nietkniętych lub rannych ocalałych na <b>3. poziomie Wewnętrznego Zła</b>.</li><li><b>Odbiera</b> możliwość śledzenia na <b>3. poziomie Wewnętrznego Zła</b>.</li><li><b>Ogromnie zwiększa</b> liczbę punktów stalkingu wymaganą do osiągnięcia <b>3. poziomu Wewnętrznego Zła</b> po raz pierwszy.</li><li><b>Średnio zmniejsza</b> prędkość poruszania się.</li>","name":"Nagrobek Judith","flavor":"„Spoczywa tu nasza ukochana córka”.","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"Kępka jasnych włosów wyrwanych siłą z czyjejś głowy. Dobywa się z niej kwiecisty zapach kobiecych perfum.<br><li>Po osiągnięciu <b>Wewnętrznego Zła na poziomie 3.</b> stan ten trwa <b>w nieskończoność</b>.</li><li><b>Ogromnie zwiększa</b> liczbę punktów zła wymaganą do osiągnięcia <b>3. poziomu Wewnętrznego Zła</b> po raz pierwszy.</li>","name":"Pachnąca kępka włosów","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"Sztywna ozdoba noszona na szyi, została stworzona ze zgniłych roślin.<br><li><b>Nieznacznie zmniejsza</b> czas potrzebny do rozkładania Widmowych Pułapek.</li><li><li>Łączy się.</li>","name":"Naszyjnik z liny","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"Maleńkie fragmenty skorupki jaja o lśniącym, złotawym odcieniu.<br><li><b>Nieznacznie wydłużają</b> czas działania aktywowanych widmowych pułapek.</li>","name":"Sproszkowana skorupka","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"Mały kawałek błota, czarny od szczątków much. Zjadany w celu zwiększenia wytrzymałości.<br><li><b>Nieznacznie zwiększa</b> odległość, z jakiej Wiedźma może się teleportować do pułapek.</li>","name":"Zabłocona martwa mucha","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"Brudna, ciemna woda znajdująca się w szklanej butelce z dawnych czasów.<br><li><b>Nieznacznie zwiększa</b> zasięg działania Widmowych Pułapek.</li>","name":"Woda bagienna","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"Mała wiązanka dziewiczych kwiatów pokrytych szarawym futrem dobrej jakości.<br><li>Ukazuje na <b>3 sekundy</b> aury ocalałych, którzy aktywowali Widmowe Pułapki.</li>","name":"Bazie kotki","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"Połówka idealnie wydrążonej skorupki.<br><li><b>Średnio zwiększa</b> czas funkcjonowania Widmowych Pułapek.</li>","name":"Połowa skorupki","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"Garść żółtawych, suchych, chrupiących skrzydeł. Są zjadane, aby zwiększyć wytrzymałość.<br><li><b>Średnio zwiększa</b> dystans, z jakiego Wiedźma może się teleportować do Widmowych Pułapek.</li>","name":"Skrzydła ważki","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"Sztywna ozdoba noszona na szyi, została stworzona ze zgniłych roślin ozdobionych cyprysową korą i mchem bagiennym.<br><li><b>Średnio zmniejsza</b> czas potrzebny do rozkładania Widmowych Pułapek.</li><li><li>Łączy się.</li>","name":"Naszyjnik z cyprysem","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"Skażona woda znajdująca się w złożonym liściu lilii wodnej.<br><li><b>Umiarkowanie zwiększa</b> zasięg działania widmowych pułapek.</li>","name":"Krwawa woda","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"Trzy gładkie gałązki wierzby połączone w trójkątny wieniec.<br><li>Ukazuje na <b>5 sekund</b> aury ocalałych, którzy aktywowali Widmowe Pułapki.</li>","name":"Wierzbowy wieniec","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"Sztywna ozdoba przeznaczona do noszenia na szyi. Jest wykonana ze zgniłych roślin; przystrojono ją zwiędłymi płatkami orchidei.<br><li><b>Znacznie zmniejsza</b> czas potrzebny do rozkładania Widmowych Pułapek.</li><li><li>Łączy się.</li>","name":"Naszyjnik z bagiennej orchidei","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"Ogromna cykada bagienna pokryta warstwami popiołu. Chrupiąca. Jest zjadana, aby zwiększyć wytrzymałość.<br><li><b>Znacznie zwiększa</b> dystans, z jakiego Wiedźma może się teleportować do Widmowych Pułapek.</li>","name":"Suszona cykada","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"Bladopomarańczowe, pęknięte i puste żółwie jajo.<br><li><b>Znacznie zwiększa</b> czas funkcjonowania aktywowanych Widmowych Pułapek.</li>","name":"Pęknięte żółwie jajko","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"Garść błota z żyłami w szkarłatowym kolorze. Krwawe warstwy przeplatają się z błotem.<br><li><b>Znacznie zwiększa</b> zasięg działania Widmowych Pułapek.</li>","name":"Krwawe błoto","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"Odcięta ręka rzeźnika mieszkającego w wiosce kanibali. Uwięziona wewnątrz ręki esencja życia odblokowuje potężny potencjał mocy Wiedźmy.<br><li>Uniemożliwia Ocalałym przechodzenie przez błotne fantomy.</li><li>Odbiera Wiedźmie zdolność teleportacji do Widmowych Pułapek.</li><li>Daje <b>300%</b> więcej Punktów Krwi w kategorii „Przebiegłość”.</li><li>Blokuje możliwość wyboru innych dodatków.</li>","name":"Ręka kata","flavor":"„…” – Rzeźnik","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"Kajdany te używane były niegdyś do przetrzymywania więźniów i zwłok w piwnicy znajdującej się w wiosce kanibali. Uwięziona wewnątrz kajdan esencja życia odblokowuje potężny potencjał mocy Wiedźmy.<br><li>Ocalali nie dostają żadnego powiadomienia o tym, że aktywowali widmową pułapkę.</li><li>Pułapka nie aktywuje fantomów Wiedźmy.</li>","name":"Zardzewiałe kajdany","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"Zimne serce starszej z wioski kanibali. Uwięziona wewnątrz serca esencja życia odblokowuje potężny potencjał mocy Wiedźmy.<br><li>Gdy ocalały aktywuje widmową pułapkę, zasięg terroru Wiedźmy wynosi <b>0</b>.</li><li>Zwiększa zasięg terroru błotnych fantomów o <b>16 m</b>.</li>","name":"Serce babci","flavor":"„Przynieś mi kolejny kawałek dziewczyny”. – Babcia","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"Ucho głuchego chłopca pochodzącego z wioski kanibali. Zdeformowane przez wielokrotne uderzenia w głowę. Uwięziona wewnątrz ucha esencja życia odblokowuje potężny potencjał mocy Wiedźmy.<br><li>Ocalali, którzy aktywowali widmową pułapkę, zostają ogłuszeni na <b>6 sekund</b>.</li>","name":"Zdeformowane ucho","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"Dziecięcy but, dawno zagubiony w torfowisku. Uwięziona wewnątrz buta esencja życia odblokowuje potężny potencjał mocy Wiedźmy.<br><li>Widmowe pułapki nakładają efekt <i>Skrępowania</i> na każdego ocalałego w zasięgu ich działania.</li><li><b>Nieznacznie</b> zwiększa prędkość ruchu Wiedźmy.</li><li>Odbiera Wiedźmie zdolność teleportacji do widmowych pułapek.</li>","name":"Przemoknięty but","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"Mały kawałek bawełny pochodzący z rozdartej sukienki noszonej przez Lisę Sherwood w dniu jej zaginięcia. Uwięziona wewnątrz kawałka esencja życia odblokowuje potężny potencjał mocy Wiedźmy.<br><li>Wiedźma może teleportować się do dowolnej Widmowej Pułapki na mapie, niezależnie od dystansu.</li><li>Po teleportacji do jednej z Widmowych Pułapek, wykonanie tej akcji ponownie możliwe jest po upływie <b>15 s</b>.</li>","name":"Miętowy łachman","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"Spleśniała elektroda, która przewodzi prąd o słabym natężeniu.<br><li><b>Nieznacznie zwiększa</b> zasięg <b>Terapii Szokowej</b>.</li>","name":"Spleśniała Elektroda","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"Biały pionek do szachów przedstawiający rycerza, wykonany z klonu. Jest to prezent od starego mężczyzny, który wywołuje dawne, odległe wspomnienia i nasyca Doktora dewastującym skupieniem.<br><li>Ujawnia obszar działania <i>ataku</i> <b>Terapią Szokową</b>.</li>","name":"Klonowy Rycerz","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"Standardowa procedura elektrowstrząsowa. Stanowiła niegdyś część rutyny pacjenta leczonego w Instytucie Pamięci Léry\'ego. Może wywoływać u pacjenta stan łagodnej dezorientacji.<br><li><b>Nieznacznie skraca</b> czas odnawiania <b>Wybuchu Statycznego</b>:</li><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu schorzenia <i>Porządek</i>:<li>Zniszczone palety mogą zostać zastąpione <i>iluzorycznymi paletami</i>, które znikają tylko wtedy, gdy się do nich podejdzie.</li><li>Nowa <i>iluzoryczna paleta</i> pojawia się co <b>20 sekund</b> w miejscu losowej zniszczonej palety.</li><li><b>Doktor</b> widzi aury <i>iluzorycznych palet</i>.</li>","name":"\\"Porządek\\" – Klasa I","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"Procedura elektrowstrząsowa wykorzystująca basową falę dźwiękową w celu łagodzenia skutków pewnych chorób psychicznych. Fala dźwiękowa nasycona Iskrą Cartera wypacza procedurę i wywołuje łagodny niepokój u pacjenta.<br><li><b>Nieznacznie zwiększa</b> zasięg terroru, gdy <b>Wybuch Statyczny</b> jest gotowy.</li><li><b>Nieznacznie zmniejsza</b> zasięg terroru podczas ładowania <b>Wybuchu Statycznego</b>.</li><br>Ocalali z efektem <b>Szaleństwa</b> cierpią na skutek schorzenia <i>Spokój</i>:<li><b>Szaleństwo 2</b>: ocalali <b>co jakiś czas</b> słyszą odległy <i>iluzoryczny zasięg terroru</i>.</li><li><b>Szaleństwo 3</b>: ocalali <b>ciągle</b> słyszą odległy <i>iluzoryczny zasięg terroru</i>.</li>","name":"\\"Spokój\\" – Klasa I","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":" Kaseta magnetofonowa używana podczas projektu \\"Przebudzenie\\" zawierająca głównie biały szum.  Wyzwala umysł Doktora i pozwala mu stosować alternatywne sposoby leczenia.\\n<br><br><li><b>Terapia Szokowa</b> <i> zmienia się ze stożka w wiązkę pojawiającą się <b>8 m</b> przed <b>Doktorem</b>, z zasięgiem <b>4.2 m</b> i szerokością <b>3 m</b>.</li>","name":"Zniszczona kaseta","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"Standardowe urządzenie elektrodowe służące do przeprowadzania terapii elektrowstrząsowych.<br><li><b>Umiarkowanie zwiększa</b> zasięg <b>Terapii Szokowej</b>.</li>","name":"Wypolerowana Elektroda","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"Kaseta magnetofonowa używana podczas projektu „Przebudzenie”, zawierająca na taśmie oryginalną wersję przesłuchania ofiary. Wyzwala umysł Doktora i pozwala mu stosować alternatywne sposoby leczenia.<br><li><b>Terapia Szokowa</b> zmienia się ze stożka w wiązkę mającą zasięg <b>24 metrów</b> oraz <b>2 metry</b> szerokości.</li>","name":"Kaseta z Przesłuchania","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"Eksperymentalna procedura elektrowstrząsowa doskonalona we Mgle. Wykorzystuje falę dźwiękową łączącą umysł pacjenta z umysłem Doktora. Wywołuje u pacjenta łagodne halucynacje.<br><li>Kiedy wzrasta poziom <b>szaleństwa</b> ocalałych, ich aury są widoczne przez <b>1 sekundę</b>.</li><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu schorzenia <i>Powściągliwość</i>:</li><li><b>Umiarkowanie wydłuża</b> czas trwania <i>Iluzorycznego Doktora</i>. </li><li><b>Doktor</b> widzi aury <i>Iluzorycznych Doktorów</i>.</li>","name":"\\"Powściągliwość\\" – Klasa II","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"Silnie stymulująca procedura elektrowstrząsowa. Stanowiła niegdyś część rutyny pacjenta leczonego w Instytucie Pamięci Léry\'ego. Może wywoływać u pacjenta stan umiarkowanej dezorientacji.<br><li><b>Umiarkowanie skraca</b> czas odnawiania <b>Wybuchu Statycznego</b>:</li><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu schorzenia <i>Porządek</i>:<li>Zniszczone palety mogą zostać zastąpione <i>iluzorycznymi paletami</i>, które znikają tylko wtedy, gdy się do nich podejdzie.</li><li>Nowa <i>iluzoryczna paleta</i> pojawia się co <b>20 sekund</b> w miejscu losowej zniszczonej palety.</li><li><b>Doktor</b> widzi aury <i>iluzorycznych palet</i>.</li><span class=\\"FlavorText\\">„Efekty uboczne występują niezwykle rzadko”. – Instytut Pamięci Léry\'ego</span>","name":"\\"Porządek\\" – Klasa II","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"Procedura elektrowstrząsowa stosowana podczas projektu „Przebudzenie” mająca na celu ukarać krnąbrnych pacjentów poprzez rażenie ich określoną dawką wysokiego napięcia. Może wywołać u pacjenta umiarkowaną paranoję.<br><li><b>Nieznacznie skraca</b> opóźnienie detonacji <b>Terapii Szokowej</b>.</li><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu schorzenia <i>Dyscyplina</i>:<li><b>Szaleństwo 2</b>: podczas pościgu ocalali widzę <i>iluzoryczną czerwoną poświatę</i> oraz <i>zasięg terroru</i>, tak jakby <b>Doktor</b> znajdował się bezpośrednio za nimi. Ten efekt utrzymuje się przez <b>6 sekund</b> po zakończeniu pościgu.</li><li><b>Szaleństwo 3</b>: <i>iluzoryczna czerwona poświata</i> oraz <i>zasięg terroru</i> są na stałe włączone.</li><li><b>Doktor</b> również widzi <i>iluzoryczną czerwoną poświatę</i>.</li><span class=\\"FlavorText\\">„Uczymy naszych pacjentów na nowo, okazując im największą troskę”. – Instytut Pamięci Léry\'ego</span>","name":"\\"Dyscyplina\\" – Klasa II","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"Ryzykowna procedura elektrowstrząsowa wykorzystująca basową falę dźwiękową w celu łagodzenia skutków pewnych chorób psychicznych. Fala dźwiękowa nasycona Iskrą Cartera wypacza procedurę i wywołuje lekki niepokój u pacjenta.<br><li><b>Umiarkowanie zwiększa</b> zasięg terroru, gdy <b>Wybuch Statyczny</b> jest gotowy.</li><li><b>Umiarkowanie zmniejsza</b> zasięg terroru podczas ładowania <b>Wybuchu Statycznego</b>.</li><br>Ocalali z efektem <b>Szaleństwa</b> cierpią na skutek schorzenia <i>Spokój</i>:<li><b>Szaleństwo 2</b>: ocalali <b>co jakiś czas</b> słyszą odległy <i>iluzoryczny zasięg terroru</i>.</li><li><b>Szaleństwo 3</b>: ocalali <b>ciągle</b> słyszą odległy <i>iluzoryczny zasięg terroru</i>.</li><span class=\\"FlavorText\\">„Terapia elektrokonwulsywna jest jedną z najbezpieczniejszych procedur medycznych”. – Instytut Pamięci Léry\'ego</span>","name":"\\"Spokój\\" – Klasa II","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"Eksperymentalna elektroda, która może przyjmować na siebie bardzo duży ładunek elektryczny przez dłuższy okres czasu.<br><li><b>Znacznie zwiększa</b> zasięg <b>Terapii Szokowej</b>.</li>","name":"Silnie Stymulująca Elektroda","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"Eksperymentalna procedura elektrowstrząsowa doskonalona we Mgle. Wykorzystuje silnie stymulującą falę dźwiękową w celu połączenia umysłu pacjenta z umysłem Doktora. Wywołuje u pacjenta silne halucynacje.<br><li>Kiedy wzrasta poziom <b>szaleństwa</b> ocalałych, ich aury są widocznie przez <b>2 sekundy</b>.</li><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu schorzenia <i>Powściągliwość</i>:<li><b>Umiarkowanie wydłuża</b> czas trwania <i>Iluzorycznego Doktora</i>. </li><li><b>Doktor widzi aury <i>Iluzorycznych</i> Doktorów.</li>","name":"\\"Powściągliwość\\" – Klasa III","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"Procedura elektrowstrząsowa stosowana podczas projektu „Przebudzenie” mająca na celu ukarać krnąbrnych pacjentów poprzez rażenie ich określoną dawką bardzo wysokiego napięcia. Może wywołać u pacjenta silną paranoję.<br><li><b>Umiarkowanie skraca</b> opóźnienie detonacji <b>Terapii Szokowej</b>.</li><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu schorzenia <i>Dyscyplina</i>:<li><b>Szaleństwo 2</b>: podczas pościgu ocalali widzę <i>iluzoryczną czerwoną poświatę</i> oraz <i>zasięg terroru</i>, tak jakby <b>Doktor</b> znajdował się bezpośrednio za nimi. Ten efekt utrzymuje się przez <b>6 sekund</b> po zakończeniu pościgu.</li><li><b>Szaleństwo 3</b>: <i>iluzoryczna czerwona poświata</i> oraz <i>zasięg terroru</i> są na stałe włączone.</li><li><b>Doktor</b> również widzi <i>iluzoryczną czerwoną poświatę</i>.</li><span class=\\"FlavorText\\">„Okazywanie szacunku naszym pacjentom to jedna z naczelnych zasad panujących w tej placówce”. – Instytut Pamięci Léry\'ego</span>","name":"\\"Dyscyplina\\" – Klasa III","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"Eksperymentalna procedura elektrowstrząsowa doskonalona we Mgle i nabazgrana niestarannie. Wykorzystuje potężnie stymulującą falę dźwiękową w celu połączenia umysłu pacjenta z umysłem Doktora. Wywołuje u pacjenta ekstremalne halucynacje.<br><li>Kiedy wzrasta poziom <b>szaleństwa</b> ocalałych, ich aury są widocznie przez <b>3 sekundy</b>.</li><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu schorzenia <i>Powściągliwość</i>:<br><li><b>Umiarkowanie wydłuża</b> <i>czas trwania Iluzorycznego Doktora</i>. </li><li><b>Doktor widzi aury <i>Iluzorycznych Doktorów</i>.</li><span class=\\"FlavorText\\">„WIDZĘ ICH <u>ODRAŻAJĄCE</u> CHOROBY”. – Niepodpisane notatki</span>","name":"\\"Powściągliwość\\" – Notatki Cartera","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"Doświadczalna wersja procedury elektrowstrząsowej. Została odnotowana przez Doktora Hermana Cartera w osobie własnej. Długi, stały impuls pozostawia pacjenta w stanie silnej dezorientacji.<br><li><b>Znacznie skraca</b> czas odnawiania <b>Wybuchu Statycznego</b>.</li><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu schorzenia <i>Porządek</i>:<li>Zniszczone palety mogą zostać zastąpione <i>iluzorycznymi paletami</i>, które znikają tylko wtedy, gdy się do nich podejdzie.</li><li>Nowa <i>iluzoryczna paleta</i> pojawia się co <b>20 sekund</b>.</li><li><b>Doktor</b> widzi aury <i>iluzorycznych palet</i>.</li><span class=\\"FlavorText\\">„Impuls musi być utrzymany na poziomie <u>drgawkowym</u>”. – H. Carter</span>","name":"\\"Porządek\\" – Notatki Cartera","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"Procedura elektrowstrząsowa stosowana podczas projektu „Przebudzenie” i zapisana przez samego doktora Hermana Cartera. Niezwykle wysokie napięcie wywołuje u pacjenta ekstremalną paranoję.<br><li><b>Znacznie skraca</b> opóźnienie detonacji <b>Terapii Szokowej</b>.</li><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu schorzenia <i>Dyscyplina</i>:<li><b>Szaleństwo 2</b>: podczas pościgu ocalali widzę <i>iluzoryczną czerwoną poświatę</i> oraz <i>zasięg terroru</i>, tak jakby <b>Doktor</b> znajdował się bezpośrednio za nimi. Ten efekt utrzymuje się przez <b>6 sekund</b> po zakończeniu pościgu.</li><li><b>Szaleństwo 3</b>: <i>iluzoryczna czerwona poświata</i> oraz <i>zasięg terroru</i> są na stałe włączone.</li><li><b>Doktor</b> również widzi <i>iluzoryczną czerwoną poświatę</i>.</li><span class=\\"FlavorText\\">„Aby uniknąć nawrotu choroby u naszych najbardziej wymagających pacjentów, użyjcie maksymalnej dawki napięcia podczas wykonywania procedury”. – H. Carter</span>","name":"\\"Dyscyplina\\" – Notatki Cartera","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"Eksperymentalna wersja procedury elektrowstrząsowej opisana przez samego doktora Hermana Cartera. Wykorzystuje basową falę dźwiękową w celu łagodzenia skutków pewnych chorób psychicznych. Fala dźwiękowa nasycona Iskrą Cartera wywołuje niekontrolowany strach i niepokój u pacjenta.<br><li><b>Znacznie zwiększa</b> zasięg terroru, gdy <b>Wybuch Statyczny</b> jest gotowy.</li><li><b>Znacznie zmniejsza</b> zasięg terroru podczas ładowania <b>Wybuchu Statycznego</b>.</li><br>Ocalali z efektem <b>Szaleństwa</b> cierpią na skutek schorzenia <i>Spokój</i>:<li><b>Szaleństwo 2</b>: ocalali <b>co jakiś czas</b> słyszą odległy <i>iluzoryczny zasięg terroru</i>.</li><li><b>Szaleństwo 3</b>: ocalali <b>ciągle</b> słyszą odległy <i>iluzoryczny zasięg terroru</i>.</li><span class=\\"FlavorText\\">„Potężniejsze drgawki padaczkowe wywołują katatonię. Przynajmniej jestem <u>spokojny</u> na czas ich trwania”. – H. Carter</span>","name":"\\"Spokój\\" – Notatki Cartera","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"Szklany pionek do szachów przedstawiający króla, ukształtowany przez samą Mgłę. Zaklęty w nim pogłos potężnego Bytu może wywołać szaleństwo nawet u najsilniejszych umysłów.<br><br>Ocalali z efektem <b>szaleństwa</b> cierpią z powodu następujących schorzeń: <i>Spokój, Dyscyplina, Porządek</i> oraz <i>Powściągliwość</i>.<li>Ocalali <b>co jakiś czas</b> słyszą odległy <i>iluzoryczny zasięg terroru</i>.</li><li>Podczas pościgu ocalali widzą <i>iluzoryczną czerwoną poświatę</i> oraz <i>zasięg terroru</i>,  tak jakby <b>Doktor</b> znajdował się bezpośrednio za nimi. Efekt utrzymuje się przez <b>6 sekund</b> po zakończeniu pościgu na <b>2. poziomie szaleństwa</b> i jest stale włączony na <b>3. poziomie szaleństwa</b>.</li><li>W miejsce zniszczonych palet pojawiają się <i>iluzoryczne palety</i>, które znikają tylko wtedy, gdy się do nich podejdzie. Nowe <i>iluzoryczne palety</i> są generowane w miejscu losowej zniszczonej palety co <b>20 sekund</b>.</li><li><b>Umiarkowanie wydłuża</b> czas trwania <i>iluzorycznego Doktora</i>.</li><li><b>Doktor</b> widzi <i>iluzoryczną czerwoną poświatę</i> oraz aury <i>iluzorycznych Doktorów i iluzorycznych palet</i>.</li>","name":"Opalowy Król","flavor":"„Wpatrywanie się w opalowe szkło jest równoznaczne z zatapianiem się w otchłanie szaleństwa”","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"Szklany pionek do szachów przedstawiający królową, ukształtowany przez samą Mgłę. Nie można go dotknąć bez silnego porażenia prądem.<br><li>Wszyscy ocalali trafieni <i>umiejętnością <b><b>Terapia Szokowa</b> lub <b>Wybuch Statyczny</b> zdobywają utrzymujący się <b>Ładunek Statyczny</b>. Ładunek statyczny pozostaje w ocalałych do <i>rozładowania</i>. </li><li>Kilku ocalałych trafionych tą samą <i>umiejętnością <b>Terapia Szokowa</b> lub <b>Wybuch Statyczny</b> znajdujących się w promieniu <b>4 metrów</b> od siebie nie gromadzą <b>Ładunku Statycznego</b>. </li><li>Za każdym razem, gdy ocalały znajduje się w zasięgu <b>4 metrów</b> od innego ocalałego z <b>Ładunkiem Statycznym</b>, zostaje porażony z takim samym efektem jak po <i>umiejętności</i><b>Terapia Szokowa</b>, a <b>Ładunek Statyczny</b> zostaje <i>wyładowany</i> natychmiast</li>","name":"Opalowa królowa","flavor":"„Gdy ustalimy już skuteczną metodę leczenia, możemy skupić się na wydajnym sposobie jej zastosowania”. – H. Carter","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"Kamień zbyt szorstki, aby nadawał się do czegokolwiek. Uszkodzone kamieniem ostrze wywołuje otwarte rany.<br><li>Intensywność jęków bólu trafionych celów jest zwiększona o <b>50%</b> do pełnego wyleczenia.</li>","name":"Szorstki kamień","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"Prosty kawałek materiału do opatrywania pęcherzy i przecierania twarzy.<br><li><b>+10%</b> do prędkości lotu toporka.</li>","name":"Pożółkła szmata","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"Bandaże owinięte precyzyjnie wokół trzonka.<br><li><b>Nieznacznie zmniejsza</b> czas, po jakim można ponownie rzucić toporem.</li><li>Łączy się.</li>","name":"Zabandażowany Trzonek","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"Toksyna z muchomora rozsmarowana na ostrzach toporków. Otępia zmysły.<br><li>Na ofiary trafione miotanym toporkiem nakładany jest efekt <b><i>Oślepienia</i></b> na <b>60 sekund</b>.</li><li>Nie łączy się.</li>","name":"Toksyna z Muchomora","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"Dziwnie wyważona głowica toporka, przeznaczona do zadawania mocnych uderzeń celowi. Wymaga od użytkownika silnych ramion.<br><li>Trafione cele otrzymują efekt <b>Unieruchomiony</b> na <b>10 sekund</b>.</li>","name":"Wyważona głowica","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"Miedziana, oszpecona broszka, która nadal mocno się błyszczy. Została odebrana wyjątkowo trudnej do upolowania ofierze.<br><li><b>Nieznacznie zwiększa</b> prędkość ruchu, gdy chodzisz, ładując rzut toporem.</li><li>Łączy się.</li>","name":"Połyskująca Broszka","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"Wypolerowany trzonek umożliwiający wykonywanie szybkich, zwinnych ruchów zabójczym narzędziem.<br><li><b>Średnio zmniejsza czas,</b> po którym można ponownie rzucić toporem.</li><li>Łączy się.</li>","name":"Dębowy Trzonek","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"Okrągła, dekoracyjna plecionka wykonana z glycerii. Przypomina Łowczyni o tym, co utraciła jako dziecko, napełniając ją gniewem i czyniąc ją bardziej skupioną.<br><li><b>Średnio zwiększa</b> szybkość ładowania rzutu toporem.</li><li>Łączy się.</li>","name":"Plecionka z Glycerii","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"Skórzana pętla, którą można przypiąć do paska, umożliwiająca noszenie większej ilości sprzętu.<br><li>Zaczynasz rozgrywkę z <b>1 dodatkowym</b> toporkiem.</li><li>Domyślna ilość dostępnych toporków ulega zmianie; możesz nosić <b>jeden dodatkowy</b> toporek.</li><li>Łączy się.</li>","name":"Skórzany Węzeł","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"Wysuszone płatki, które po zaparzeniu w herbacie łagodzą objawy zmęczenia i nadmiernego wysiłku.<br><li><b>+20%</b> do prędkości lotu toporka.</li>","name":"Różany korzeń","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"Skórzane rękawice. Służą do ochrony rąk i zapewniają solidny chwyt.<br><li><b>Umiarkowanie zmniejszają</b> czas potrzebny do wyciągnięcia zapasowych toporów z szafek.</li>","name":"Rękawice ze skóry Jelenia","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"Toksyczny napar wylany wprost na ostrza toporków. Gęsta substancja została przyrządzona głównie z wywołującego zmęczenie jadu żmii.<br><li>Na trafione ofiary nakładany jest efekt <b>Wyczerpany</b> na <b>5 s</b>.</li>","name":"Trująca Mikstura","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"Żeleźca toporków są pokryte kruchą i lotną rdzą, sprawiającą, że rany ofiar, które wpadły w pułapkę, stają się bardzo trudne do wyleczenia.<br><li>Na trafione ofiary nakładany jest efekt <b><i>Zmasakrowany</i></b>.</li>","name":"Zardzewiały Żeleziec","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"Czysta, kolorowa chustka na głowę przyozdobiona kwiecistym wzorem. Przypomina Łowczyni o tym, co utraciła jako dziecko. Napełnia kobietę gniewem i sprawia, że staje się ona bardziej skupiona.<br><li><b>Znacząco zmniejsza</b> czas ładowania rzutu toporkiem.</li><li>Łączy się.</li>","name":"Kwiecista Babuszka","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"Solidny pas na narzędzia zrabowany żołnierzowi. Ma wiele skórzanych pętli, które umożliwiają noszenie większej ilości sprzętu.<br><li>Zaczynasz grę z <b>2 dodatkowymi</b> toporkami.</li><li>Domyślna ilość dostępnych toporków ulega zmianie; możesz nosić <b>dwa dodatkowe</b> toporki.</li><li>Łączy się.</li>","name":"Pasek Piechoty","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"Mikstura nie z tego świata świecąca czymś złowrogim.<br><li>Gdy trafisz ocalałego miotanym toporem, jego aura będzie widoczna przez <b>5 sekund</b> licząc od chwili trafienia.</li>","name":"Jarząca się Mikstura","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"Żeleźca toporków pokryte cuchnącą substancją, która osłabia każdego, kto się z nią zetknie.<br><li>Na trafione ofiary nakładane są efekty <b><i>Zmasakrowany</i></b> i <b><i>Krwotok</i></b> do chwili pełnego wyleczenia.</li><li>Nie łączy się.</li>","name":"Poplamiony Żeleziec","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"Ta niestarannie wyciosana figurka lisa ma nie więcej niż kilkanaście centymetrów wysokości. Przypomina, że skradanie i przebiegłość potrafią być równie skuteczne, co czysta siła.<br><li>Daje efekt <i><b>Niewykrywalny</b></i> na <b>15 sekund</b> po przeładowaniu.</li>","name":"Drewniany lis","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"Toporek jakby ze szkła, stworzony z samej Mgły. Ostrze jest wciąż ciepłe i wibruje energią Bytu.<br><li>Udane trafienie toporkiem natychmiast wywołuje stan agonii u ofiary.</li><li>Ustawia maksymalną liczbę niesionych toporków na <b>1</b>.</li>","name":"Opalowy Żeleziec","flavor":"„Opalizujące szkło przebija się przez ciało i duszę”.","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"Opaska zdjęta z martwego żołnierza. Zapewnia ochronę i wsparcie kostce i dolnej części nogi.<br><li>Łowczyni porusza się z prędkością <b>4,6 m/s</b>, gdy nie ma toporków.</li>","name":"Owijacz żołnierza","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"Zjełczały olej pełniący funkcję kiepskiego smaru.<br><br><li><b>Nieznacznie skraca</b> czas odnawiania piły łańcuchowej po udanym trafieniu ocalałego.</li>","name":"Olej Warzywny","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"Czysta świeca zapłonowa do piły łańcuchowej.<br><br><li><b>Nieznacznie zwiększa</b> prędkość odnawiania ładunków.</li>","name":"Świeca Zapłonowa","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"Pilnik, którego przeznaczeniem jest pogłębianie łańcuchów piły mechanicznej.<br><br><li><b>Nieznacznie skraca</b> czas trwania furii.</li>","name":"Pilnik do Piły Łańcuchowej","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"Mechaniczne urządzenie ograniczające ilość paliwa, którą można wlać za jednym razem do małych silników. Wymusza stałą, bezpieczną prędkość pracy silnika.<br><br><li>Atak piłą łańcuchową nie aktywuje automatycznie stanu agonii.</li><li>Otrzymujesz <b>100%</b> więcej Punktów Krwi za trafienia piłą łańcuchową.</li>","name":"Ogranicznik Prędkości","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Pompuje więcej paliwa do układu zapłonowego, aby zapewnić szybki i mocny start urządzenia.<br><br><li><b>Umiarkowanie zwiększa</b> prędkość odnawiania ładunków.</li>","name":"Pompa Paliwowa","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"Solidna żelazna prowadnica zastępcza do długich łańcuchów.<br><br><li><b>Umiarkowanie zwiększa</b> liczbę możliwych zwiększeń obrotów przed wywołaniem furii.</li>","name":"Długie Ostrze","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"Na pile widać zadrapania od płonącego ostrza. Bolesne wspomnienia wypełniają posiadacza strachem przed porażką.<br><br><li><b>Nieznacznie zwiększa</b> prędkość ruchu piły łańcuchowej.</li><li><b>Nieznacznie skraca</b> czas ładowania.</li>","name":"Zarysowania od noża","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"Prowizoryczny system wydechowy wykonany z czarnych rur gazowych.<br><br><li><b>Umiarkowanie skraca</b> czas trwania furii.</li>","name":"Tłumik domowej roboty","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"Duża, parująca miska chili, która przywróci ci siły.<br><br><li><b>Nieznacznie wydłuża</b> czas trwania pędu po zużyciu żetonu.</li><li><b>Nieznacznie wydłuża</b> dodatkowy czas wymachiwania piłą łańcuchową.</li><br>","name":"Chilli","flavor":"„Mam tu świetnego grilla!” – Drayton Sawyer","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"Gęsty żółtawy płyn opracowany przez rodzinę Sawyerów. Używany w ich domu jako uniwersalny smar.<br><br><li><b>Umiarkowanie zwiększa</b> liczbę możliwych zwiększeń obrotów przed wywołaniem furii.</li>","name":"Smar","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"Na pile widać zadrapania – ślad kary wymierzonej przez mroczną bestię żyjącą we Mgle. Bolesne wspomnienia wypełniają posiadacza strachem przed porażką.<br><br><li><b>Umiarkowanie zwiększa</b> prędkość ruchu piły łańcuchowej.</li><li><b>Nieznacznie skraca</b> czas ładowania.</li>","name":"Znaki Bestii","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"Łańcuch z wyjątkowo mocnymi zębami, które sprawiają, że ofiary pozostają okaleczone nawet po leczeniu.<br><li>Ocalali trafieni piłą łańcuchową otrzymują efekt <b>Zmasakrowany</b>.","name":"Przerażający Łańcuch","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"Olej stworzony do piły łańcuchowej. Specjalny dodatek zapobiega wyciekaniu oleju.<br><br><li>Powalenie ocalałego piłą łańcuchową, gdy żaden inny ocalały nie znajduje się w zasięgu terroru, ukrywa aurę ocalałego na <b>20 sekund.</b></li>","name":"Sklepowy Smar","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"Ten łańcuch jest poplamiony paskudną substancją, która osłabia każdego, kto jej dotknie.<br><br><li>Trafienia piłą łańcuchową sprawiają, że ocalali upuszczają trzymane przedmioty.</li>","name":"Poplamione łańcuchy","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"Narzędzie, które zwiększa kąt miernika głębokości. Sprawia, że piła mocniej wgryza się w… drewno?<br><li><b>Zwiększa</b> liczbę ładunków.</li><li><b>Nieznacznie wydłuża</b> czas ładowania.</li><li><b>Nieznacznie zmniejsza</b> maksymalną prędkość wymachiwania piłą łańcuchową.</li>","name":"Miernik Głębokości Pochylenia","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"Lekka, wytrzymała rama piły łańcuchowej z krótszą prowadnicą. Ułatwia panowanie nad urządzeniem.<br><br><li>Podczas zwiększania obrotów piły widzisz aury ocalałych oddalonych o maksymalnie <b>8 metrów.</b></li>","name":"Lekka rama","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"Łańcuch pokryty kruszącą się i odpadającą rdzą, która sprawia, że rany stają się wyjątkowo trudne do wyleczenia.<br><br><li>Ocalali trafieni piłą łańcuchową otrzymują efekt <b><i>Okaleczony</i></b> na <b>90 sekund</b>.</li><li>Nie łączy się.</li>","name":"Zardzewiały Łańcuch","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"Duża miska pikantnego chili znana z wybornego mięsa.<br><br><li><b>Umiarkowanie zwiększa</b> czas pędu po zużyciu żetonu.</li><li><b>Umiarkowanie wydłuża </b> dodatkowy czas na korzystanie z piły łańcuchowej.</li><br>","name":"Wielkokrotnie nagradzane chili","flavor":"„Sekret tkwi w mięsie”. – Drayton Sawyer","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"Cienki plaster delikatnego, młodego mięsa. Żyły migoczą blaskiem, jakby wciąż płynęło w nich życie.<br><br><li>Trafienie ocalałego piłą łańcuchową odnawia jej ładunki.</li><li>Ogranicza maksymalny czas trwania furii do 8 sekund.</li><br>","name":"Opalizujące mięso","flavor":"„Czasami nie możemy uwierzyć, że to, co się dzieje, jest prawdziwe. Uszczypnij się, a być może przekonasz się, że to właśnie ten moment”. – Pam Jones","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"Prymitywnie narysowana instrukcja prawidłowej regulacji i konfiguracji gaźnika piły łańcuchowej.<br><li>Automatycznie zużywa wszystkie ładunki w momencie uruchomienia sprintu z piłą łańcuchową.</li><li><b>Nieznacznie wydłuża</b> czas trwania pędu.</li><li><b>Nieznacznie zmniejsza</b> maksymalną prędkość wymachiwania piłą łańcuchową.</li>","name":"Poradnik Podkręcania Gaźnika","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"Koszulka w żółto-pomarańczowe paski, z przyszytą plakietką „Jesse”. Należała do małego dziecka.<br>Gdy ocalali znajdują się w <b>Świecie Snu</b>:<li><b>nieznacznie zwiększa</b> kary do <i>leczenia</i> i <i>naprawiania</i>.</li>","name":"Wełniana Koszulka","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"Biało-niebieski, drewniany klocek, który przedstawia dwie pasące się owieczki i literę „S”.<li>Gdy ocalały wchodzi w interakcję z <b>Senną Pułapką</b> lub <b>Senną Paletą</b>, otrzymuje efekt <b>Oślepienie</b> na 30 sekund.</li>","name":"Klocek z wizerunkiem owcy","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"Niepodpisany rysunek wykonany bez wątpienia przez małe dziecko.<li>Otrzymasz <b>200 dodatkowych Punktów Krwi</b> do <b>Przebiegłości</b>, gdy ocalały uruchomi <b>Senne Sidła</b>.</li><li><b>Znacznie zmniejsza</b> spowolnienie ocalałych spowodowane przez <b>Senne Sidła</b>.</li>","name":"Rysunek Dziecka","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"Małe grabie – niezbędnik każdego znakomitego ogrodnika.<br>Zamień <b>Senne Sidła</b> na <b>Senne Palety</b>. <li>7<b> Sennych Żetonów.</b></li>","name":"Grabie ogrodnicze","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"Narzędzie domowej roboty. Ułatwia przycinanie krzewów.<li>Zamienia <b>Senne Sidła</b> na <b>Senne Palety</b>.</li><li>7 <b>Sennych Żetonów</b>.</li><li>Aury ocalałych zostają pokazane <i>Koszmarowi</i> na <b>4 sekundy</b>, gdy wchodzą oni w interakcję z <b>Sennymi Paletami</b>.</li>","name":"Prototypowe pazury","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"Wytrzymała lina – można nią związać wszystko.<br>Gdy ocalali są w <b>Świecie Snu</b>:<li>Dźwięki napraw generatora słychać z odległości <b>większej o 8 metrów</b>.</li>","name":"Lina","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"Surowy i śmiały szkic wykonany węglem przez Nancy H.<li>Każdy ocalały w <b>Świecie Snu</b> <b>nieznacznie skraca</b> czas odnowienia <b>Projekcji Snu</b>.</li>","name":"Szkic Nancy","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"Zielona sukienka z jedwabną białą kokardą. Należała kiedyś do jakiejś dziewczynki.<br>Gdy ocalali znajdują się w <b>Świecie Snu</b>:<li><b>nieznacznie zwiększa</b> kary do <i>leczenia</i> i <i>naprawiania</i>.</li><li>Aury ocalałych zostają ukazane <i>Koszmarowi</i> na <b>3 sekundy</b> po każdym chybionym teście umiejętności <i>leczenia</i> lub <i>naprawy</i>.</li>","name":"Zielona Sukienka","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"Biało-fioletowy, drewniany klocek przedstawiający śpiącego kota i literę „C”.<li>Gdy ocalały wchodzi w interakcję z <b>Sennymi Sidłami</b> lub <b>Senną Pułapką</b>, otrzymuje efekt <b>Krwotok</b> na 60 sekund.</li>","name":"Klocek z wizerunkiem kota","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"Biało-czerwony, drewniany klocek, który przedstawia podskakującego jednorożca i literę „U”.<li>Gdy ocalały wchodzi w interakcję z <b>Senną Pułapką</b> lub <b>Senną Paletą</b>, otrzymuje efekt <b>Oślepienie</b> na 60 sekund.</li>","name":"Klocek z wizerunkiem jednorożca","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"Zardzewiały, lecz mocny łańcuch służący do bezpiecznego montowania huśtawki.<br>Gdy ocalali są w <b>Świecie Snu</b>:<li>Dźwięki ich kroków są <b>50% głośniejsze</b>.</li>","name":"Łańcuch od huśtawki","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"Malunek przedstawiający niezidentyfikowaną postać. Został narysowany przez Nancy Holbrook w Badham i był tam przechowywany jako cenna pamiątka.<li><b>Każdy ocalały w Świecie Snu</b> <b>umiarkowanie skraca</b> czas odnowienia <b>Projekcji Snu</b>.</li>","name":"Arcydzieło Nancy","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"Długa i wysłużona podwójna skakanka. Widać na niej lata używania.<br>Gdy ocalali są w <b>Świecie Snu</b>:<li>Dźwięki jęków bólu są <b>50% głośniejsze</b>.</li>","name":"Skakanka","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"Jasnobłękitna sukienka z białą koronką, której przednią część zniszczyły długie rozcięcia; należała kiedyś do jakiejś dziewczynki. <br>Gdy ocalali znajdują się w <b>Świecie Snu</b>:<li><b>nieznacznie zwiększa</b> kary do <i>leczenia</i> i <i>naprawiania</i>.</li><li>Aury ocalałych zostają ukazane <i>Koszmarowi</i> na <b>4 sekundy</b> po każdym chybionym teście umiejętności <i>leczenia</i> lub <i>naprawy</i>.</li>","name":"Błękitna Sukienka","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"Pusty pojemnik na pigułki, który zawierał kiedyś lek o nazwie Zoneral.<li>Ocalali co jakiś czas będą widzieć <i>Koszmar</i> z ograniczonej odległości <b>12 metrów</b> do <b>24 metrów</b>.</li><li><i>Koszmar</i> jest niewidzialny dla ocalałych znajdujących się dalej niż <b>24 metry</b>.</li><li><i>Koszmar</i> jest niewidoczny dla obudzonych ocalałych podczas niesienia ocalałego.</li>","name":"Pojemnik na pigułki","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"Blaszany kanister wypełniony łatwopalną cieczą.<li>Zamienia <b>Senne Sidła</b> na <b>Senne Palety</b>.</li><li>7 <b>Sennych Żetonów</b>.</li><li>Aury ocalałych zostają pokazane <i>Koszmarowi</i> na <b>6 sekund</b>, gdy wchodzą oni w interakcję z <b>Sennymi Paletami</b>.</li>","name":"Rozcieńczalnik","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"Duża fotografia zrobiona w przedszkolu w Badham, przedstawiająca pogodną klasę z rocznika 94–95.<li>Nie można anulować działania <b>Projekcji Snu</b>.</li><li>Kiedy <b>Koszmar</b> skorzysta z umiejętności <b>Projekcja Snu</b>, wszystkie generatory będą wyrzucały z siebie krew.</li><li>Iluzoryczna postać <i>Koszmaru</i> nie pojawi się podczas korzystania z <b>Projekcji Snu.</b></li>","name":"Zdjęcie Klasowe","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"Spalony drewniany klocek z głębokimi rysami, na którym można rozpoznać jedynie literę „Z”.<li>Gdy ocalały wchodzi w interakcję z <b>Sennymi Sidłami</b> lub <b>Senną Paletą</b>, otrzymuje efekt <b>Krwotok na <b>60 sekund</b>.</li><li>Jeśli ocalały jest zdrowy, będzie krwawił przez czas trwania efektu <b>Krwotoku</b>.</li>","name":"Klocek z literą Z","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"Duży pędzel zamoczony w szkarłatnej farbie.<li>Wszyscy ocalali rozpoczynają próbę w <b>Świecie Snu</b>.</li><li>Chybione testy umiejętności nie budzą ocalałych w <b>Świecie Snu</b>.</li>","name":"Pędzel zamoczony szkarłatną farbą","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"Czarny karton wypełniony fotografiami.<br>Gdy ocalali znajdują się w <b>Świecie Snu</b>:<li>Niedawno otwarte bramy wyjściowe zostają zablokowane na <b>15 sekund</b>.</li>","name":"Czarne Pudełko","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"Modyfikacja skrzynki Jigsawa: nasmarowane części utrudniają przeszukiwanie skrzynek.<br><li><b>Nieznacznie zwiększa</b> szansę na pojawienie się testu umiejętności podczas przeszukiwania skrzynek Jigsawa.</li>","name":"Warsztatowy smar","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"Symbol nieszczęśliwego życia. Wspomnienia przeszłości wzmacniają determinację.<br><li><b>Nieznacznie skraca</b> czas odnowienia ataku z ukrycia.</li>","name":"Rozbita Strzykawka","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"Akta medyczne mężczyzny chorego na raka. Przepełniają czytelnika przerażeniem, ale i lekkomyślnością.<br><li><b>Nieznacznie skracają</b> czas ładowania ataku z ukrycia.</li>","name":"Akta medyczne Johna","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"Skórzane paski utrzymujące materiał w całości. Umożliwiają wykonywanie zwinnych ruchów.<br><li><b>Nieznacznie zmniejsza</b> czas potrzebny do kucnięcia.</li><li>Łączy się.</li>","name":"Pasy Bojowe","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"Nagranie, na którym Jigsaw wyjaśnia Amandzie zasady gry. Wspomnienia przeszłości wzmacniają jej determinację.<br><li><b>Nieznacznie skraca</b> czas ładowania ataku z ukrycia.</li><li><b>Nieznacznie skraca</b> czas odnawiania ataku z ukrycia.</li>","name":"Kaseta VHS","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"Modyfikacja do odwróconej pułapki na niedźwiedzie: ostrza znajdujące się w pułapce kaleczą ofiarę z każdym jej ruchem.<br><li>Na Ocalałych nakładany jest efekt <b><i>„Krwawienia”</b></i>; dotyczy tylko tych Ocalałych, którzy noszą na głowie odwróconą pułapkę.</li>","name":"Ostrza użytkowe","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"Modyfikacja skrzynki Jigsawa: dodatek w postaci zaostrzonych drutów sprawiających, że przeszukiwanie skrzynek staje się wyjątkowo trudne i potencjalnie bolesne.<br><li><b>Umiarkowanie zwiększa</b> szansę na pojawienie się testu umiejętności podczas przeszukiwania skrzynek Jigsawa.</li>","name":"Ostre Druty","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"Zatrzaśnięte drewniane pudełko wyłożone satyną. Podarowane jako wyraz ostatniej woli.<br><li><b>Zwiększa</b> liczbę dostępnych odwróconych pułapek na niedźwiedzie o <b>1</b>.<br>","name":"Ostatnia Wola","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"Modyfikacja do odwróconej pułapki na niedźwiedzie: maska wykonana z grubej tkaniny i nasączona środkiem usypiającym, który utrudnia oddychanie i obniża koncentrację.<br><li>Na Ocalałych nakładany jest efekt <b><i>„Oślepienia”</b></i>; dotyczy tylko tych Ocalałych, którzy noszą na głowie odwróconą pułapkę.</li><li>Nie dotyczy aur skrzynek Jigsawa.</li>","name":"Maska Na Twarz","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"Modyfikacja do odwróconej pułapki na niedźwiedzie: trucizna, która nie jest śmiertelna, lecz osłabia ciało i sprawia, że całkowite wyzdrowienie jest niemal niemożliwe.<br><li>Na Ocalałych nakładany jest efekt <b><i>„Wyczerpania”</b></i>; dotyczy tylko tych Ocalałych, którzy noszą na głowie odwróconą pułapkę.</li>","name":"Powolnie uwalniana toksyna","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"Modyfikacja odwróconej pułapki na niedźwiedzie: szczęki zostają pokryte kruchą i lotną rdzą, która sprawia, że rany ofiar stają się bardzo trudne do wyleczenia.<br><li>Na ofiary złapane w pułapki nakładany jest efekt <i><b>Zmasakrowany</b></i>.</li>","name":"Zardzewiałe Kolce","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"Niepokojący, lecz genialny projekt pułapki, szczegółowo rozrysowany na kartce.<br><li><b>Zwiększa liczbę</b> dostępnych skrzynek Jigsawa o <b>1</b>.</li>","name":"Szkic Jigsawa","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"Modyfikacja do skrzynek Jigsawa: dodatek w postaci zabezpieczających żyletek, które uniemożliwiają gwałtowne poruszanie rękoma w skrzynce Jigsawa bez podcinania sobie przy tym nadgarstków.<br><li><b>Ogromnie zwiększa</b> karę za nietrafienie testów umiejętności podczas przeszukiwania skrzynek Jigsawa.</li>","name":"Brzytwa Blokująca","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"Kilka mechanicznych części, które umożliwiają tworzenie bardziej wymagających skrzynek Jigsawa i łatwiejsze zakładanie odwróconych pułapek na niedźwiedzie.<br><li><b>Nieznacznie wydłużają</b> czas potrzebny ocalałemu na przeszukanie skrzynki Jigsawa.</li><li><b>Nieznacznie skracają</b> czas potrzebny na założenie odwróconej pułapki na niedźwiedzie.</li>","name":"Torba z przyborami","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"Czasomierz, przy którym ktoś majstrował. Sprężyna w urządzeniu zmusza zębatki do szybszych obrotów.<br><li><b>Umiarkowanie skraca</b> czas, po którym odwrócona pułapka na niedźwiedzie zabija ocalałych.</li>","name":"Zmodyfikowany Regulator Czasowy","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"Niepokojący, lecz genialny projekt pułapki, szczegółowo rozrysowany przez Jigsawa.<br><li><b>Zwiększa liczbę</b> dostępnych skrzynek Jigsawa o <b>1</b>.</li><li><b>Umiarkowanie wydłuża</b> czas, po którym odwrócona pułapka na niedźwiedzie zabija ocalałych.</li>","name":"Plan z Komentarzem Jigsawa","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"Kolekcja mechanicznych części, które umożliwiają tworzenie niezwykle wymagających skrzynek Jigsawa i łatwiejsze zakładanie odwróconych pułapek na niedźwiedzie.<br><li><b>Znacznie wydłuża</b> czas potrzebny ocalałym na przeszukanie skrzynki Jigsawa.</li><li><b>Umiarkowanie skraca</b> czas potrzebny na założenie ocalałemu odwróconej pułapki na niedźwiedzie.</li>","name":"Skrzynia z przyborami","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"Czarne, metalowe pudełko, kryjące w swoim wnętrzu nóż i różnego rodzaju medyczne zaopatrzenie, takie jak bandaże i okłady. Głębokie nacięcia zmniejszają stres i pobudzają zmysły.<br><li><b>Uniemożliwia</b> odczytywanie aur skrzynek Jigsawa.</li><li>Za każdym razem, gdy Ocalały zdejmie z głowy pułapkę, <b>otrzymasz specjalne powiadomienie</b>.</li><li>Aury Ocalałych, którzy zdjęli pułapkę z głowy, będą widoczne przez okres <b>6 s</b> licząc od momentu pozbycia się pułapki.</li>","name":"Sekret Amandy","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"Nie wszystkie gry muszą się rządzić tymi samymi zasadami.<br><li>Ocalali z pułapką na głowie <b>nie widzą na mapie aur skrzynek Jigsawa</b>; będą je widzieć dopiero od momentu aktywacji odwróconej pułapki.</li>","name":"Zestaw reguł nr 2","flavor":"„Słuchajcie, oto zasady gry” – Jigsaw","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"Listowny szantaż adresowany do Amandy. Przepełnia czytelnika wściekłością, ale i skupieniem.<br><li>Gdy kucasz, dostrzegasz aury ocalałych znajdujących się w odległości 12 metrów od ciebie.</li><li><b>Zmniejsza</b> liczbę dostępnych odwróconych pułapek na niedźwiedzie o <b>3</b>.</li><li><b>Zmniejsza</b> liczbę dostępnych skrzynek Jigsawa o <b>2</b>.</li>","name":"List do Amandy","flavor":"„Amando, byłaś z Cecylem tej nocy, gdy Jill straciła Gideona. Zabiłaś ich dziecko i dobrze o tym wiesz. Ja też zdaję sobie z tego sprawę”. – List do Amandy","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"Spleśniała wkładka do butów zapewniająca komfort zmęczonym stopom.<br><li><b>Umiarkowanie</b>zwiększa prędkość ruchu podczas napełniania butelek.</li>","name":"Śmierdzące Wkładki do Butów","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"Piórko w kolorze pomarańczowym. Miękkie w dotyku.<br><li><b>Nieznacznie</b> skraca czas oczekiwania pomiędzy rzutami butelką.</li>","name":"Pióro Rudzika","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"Część klasycznego stroju Klauna. Ucięte palce pozwalają wykonywać zręczne ruchy.\\n<li>Zmienia łuk rzutu butelki.</li>\\n","name":"Rękawiczki Bez Palców","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"Związek organiczny używany do znieczulania.<br><li><b>Nieznacznie</b> wydłuża czas trwania odurzenia.</li>","name":"Butelka imprezowa","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"Solidny korek, który idealnie pasuje do otworu w butelce wypełnionej Odurzającą Mieszanką Komika.<br><li><b>Umiarkowanie</b> skraca czas napełniania butelek.</li>","name":"Gruby Korek","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"Pusta butelka. Klei się od zaschniętego cukru i krwi.<br><li>Zaczynasz rozgrywkę z <b>1 dodatkową</b> butelką.</li><li>Możesz nosić podczas meczu <b>1</b> dodatkową butelkę.</li>","name":"Lepka Butelka Po Napoju Gazowanym","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"Czarne piórko o szmaragdowym połysku. Jest bardzo miękkie w dotyku.<br><li><b>Umiarkowanie</b> skraca czas oczekiwania pomiędzy rzutami butelką.</li>","name":"Pióro Szpaka","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"Chemiczna, lotna mieszanka drażniąca drogi oddechowe i zwiększająca wchłanianie Antidotum Komika.<br><li><b>Umiarkowanie</b> wydłuża czas działania efektu pobudzenia.</li>","name":"Dzbanek z Rozpuszczalnikiem","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"Przejrzysty, rozrzedzony, łatwopalny płyn, przytępiający zmysły tych, którzy go powąchają.<br><li>Odurzeni ocalali cierpią z powodu <b>Oślepienia</b> przez <b>30 sekund</b>.</li>","name":"Puszka z Kerozyną","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"Nieśmiertelny klasyk. Nic już nie będzie takie samo.<br><li>Opary Odurzającej Mieszanki Komika stają się żółte.</li><li>Opary Antidotum Komika stają się fioletowe.</li>","name":"Kaseta Porno","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"Bezwonny płyn o konsystencji syropu. Silnie korozyjny.<br><li>Odurzeni ocalali cierpią z powodu efektu <b>Zmasakrowany</b>.</li>","name":"Fiolka z Kwasem Siarkowym","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"Silny związek chemiczny, który wywołuje podrażnienia, poparzenia i uszkadza płuca.<br><li><b>Średnio zwiększa</b> siłę działania efektu <b>Skrępowany</b> u odurzonych ocalałych.","name":"Fiolka z Wybielaczem","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"<b>Umiarkowanie</b> zwiększa obszar działania Gazu Leczniczego Komika.","name":"Dusza jelenia","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"Mieszanka organiczna o słodkim zapachu. Ma silne właściwości znieczulające.<br><li><b>Umiarkowanie</b> zwiększa zasięg działania Odurzającej Mieszanki Komika.</li>","name":"Butelka Chloroformu","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"Szczypta chemii dla urody, szczypta chemii do mieszanki. Nieznany związek wzmacnia działanie antidotum.<br><li><b>Znacznie</b> wydłuża czas trwania efektu pobudzenia.</li>","name":"Krzykliwy Zestaw do Makijażu","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"Jedyna pozostałość po tanim alkoholu i potężnym bólu głowy.<br><li>Zaczynasz rozgrywkę z <b>2 dodatkowymi</b> butelkami.</li><li>Możesz nosić podczas rozgrywki <b>2</b> dodatkowe butelki.</li>","name":"Butelka Taniego Ginu","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"Bardzo lotna, toksyczna substancja organiczna.<br><li><b>Znacznie</b> wydłuża czas trwania efektu odurzenia.</li>","name":"Eter, 15%","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"Ponura i niekompletna kolekcja palców. Napełnia Klauna nostalgią i skupieniem w ćwiczeniu umiejętności chemicznych.<br><li>Gdy ocalały lub zabójca stanie się pobudzony, widzi aury wszystkich innych graczy w promieniu 16 metrów.</li>","name":"Pudełko Na Cygara","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"Cenny środkowy palec należący do wysokiego mężczyzny z tatuażami. Ma mdławy posmak oleju, który wlewa się do silników różnych maszyn.<br><li>Aury odurzonych lub pobudzonych ocalałych są dla ciebie widoczne przez <b>6 sekund</b>.</li>","name":"Środkowy Palec Mężczyzny z Tatuażem","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"Cenny mały palec rudowłosej. Ma niewyraźny zapach. Smakuje jak mieszanka ziół i lakieru.<br><li>Gdy trafisz Ocalałych Odurzającą Mieszanką Komika w taki sposób, że butelka rozbije się <b>bezpośrednio na ich ciele</b>, nałożysz na nich efekt <b>Narażenia</b>.</li>","name":"Mały Palec Rudowłosej","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"Wygodna para sandałów. Łatwe do założenia, łatwe do zsunięcia.<li>Nieznacznie zwiększa prędkość ruchu w trakcie korzystania z mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Japońskie Sandały","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"Talizman na szczęście.<li>Nieznacznie przedłuża działanie mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Amulet Fortuny","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"Jeden z tysiąca orizuru mający sprawić, że marzenia staną się rzeczywistością.<li>Nieznacznie przyspiesza odnawianie się mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Żuraw z Origami","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"Bambusowy grzebień z wąskimi ząbkami do rozplątywania rozczochranych włosów.<li>Nieznacznie przyspiesza ładowanie się mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Bambusowy Grzebień","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"Jedwabny grzebień służący do walki z niesforną fryzurą.<li>Umiarkowanie przyspiesza ładowanie się mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Biała Wstążka","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"Zepsuty zegarek na rękę. Na opasce znajduje się imię „Rin\\".<li>Średnio przyspiesza odnawianie się mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Zepsuty Zegarek Rin","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"Zabłocona czapka z logiem szkoły średniej. Wyszyto na niej imię „Rin\\".<li>Średnio zwiększa prędkość ruchu podczas korzystania z mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Zabłocona Sportowa Czapka","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"Talizman mający przynosić szczęście.<li>Średnio przedłuża działanie mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Talizman Kaiun","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"Mroczne drzewko bonsai z niebiesko-zielonymi liśćmi. Stanowiło niegdyś tradycyjny symbol rodziny Yamaoka.<li>Nieznacznie zwiększa częstotliwość migania twojej postaci, gdy nie korzystasz z mocy.</li><li>Łączy się.</li>","name":"Drzewko Bonsai","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"Zardzewiały flet poprzeczny wydający przerażający dźwięk.<li>Znacznie przyspiesza odnawianie się mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Zardzewiały Flet","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"Talizman Katsumori","name":"Talizman Katsumori","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"Garda rodowego ostrza. Wykonana dla rodziny Yamaoka.<li>Nieznacznie zwiększa prędkość po wyjściu z duchowego świata.</li><li>Nieznacznie zwiększa okres trwania wspomnianego wcześniej przyspieszenia.</li><li>Łączy się.</li>","name":"Garda Katany","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"Wygodna para butów do chodzenia po domu.<li>Znacznie zwiększa prędkość ruchu podczas korzystania z mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Brudne Japońskie Kapcie","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"Broszka do włosów pokryta zaschniętą krwią.<li>Znacznie przyspiesza ładowanie się mocy Opętania Yamaoki.</li><li>Łączy się.</li>","name":"Zakrwawiona Broszka do Włosów","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"Talizman chroniący cię przed mrocznymi zakusami losu.<li><b>Ogromnie wydłuża</b> działanie mocy Opętania Yamaoki.</li><li><b>Nieznacznie zmniejsza</b> prędkość ruchu podczas korzystania z mocy Opętania Yamaoki.","name":"Amulet Yakuyoke","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"Pochwa rodowego ostrza. Wykonana dla rodziny Yamaoka.<li>Średnio zwiększa prędkość po wyjściu z duchowego świata.</li><li>Znacząco zwiększa okres trwania wspomnianego wcześniej przyspieszenia.</li><li>Łączy się.</li>","name":"Pochwa Miecza Wakizashi","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"Bransoletka obdarzona potężną mocą.<li>Dźwięk migania postaci jest słyszany przez wszystkich ocalałych poza zasięgiem terroru.</li>","name":"Bransoletka z Koralików","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"Pokruszony, wysuszony kwiat wiśni. Stanowił niegdyś symbol śmiertelności.<li>Nieznacznie zwiększa częstotliwość migania twojej postaci, gdy nie korzystasz z mocy.</li><li>Nieznacznie przedłuża okres trwania tego zjawiska.</li><li>Łączy się.</li>","name":"Suszony Kwiat Wiśni","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"Srebrny pierścionek z wygrawerowaną dedykacją „dla ukochanej córki\\".<li>Ogromnie zwiększa prędkość ruchu podczas korzystania z mocy Opętania Yamaoki.</li><li>Nie dostrzegasz czerwonych zarysowań pozostawianych przez biegnących ocalałych.</li>","name":"Pierścionek od Matki","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"Para okularów należących do ojca. Stanowiły kiedyś własność przepracowanego urzędnika.<li>Gdy korzystasz z mocy Opętania Yamaoki, dostrzegasz ślady krwi pozostawiane przez rannych ocalałych.","name":"Okulary Ojca","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"Sympatyczna żółta przypinka służąca jako sarkastyczny manifest.<li>Trafienie Ocalałego oznaczonego instynktem zabójcy w trakcie trwania Dzikiego Szału aktywuje efekt Oślepienia na 60 s.</li>","name":"Przypinka z uśmieszkiem","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"Drewniana linijka z głęboko wyrytymi liniami.<li><b>Nieznacznie skraca</b> czas potrzebny na napełnienie wskaźnika mocy.</li>","name":"Porysowana linijka","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"Lista łobuzerskich zadań do wykonania, pamiątka z lepszych czasów.<li><b>Nieznacznie wydłuża</b> czas trwania Dzikiego Szału.</li>","name":"Lista łobuzerstw","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"Szeroka, szaro-czerwona pleciona bransoletka. Widać na niej litery „F J S J” naniesione czarnym atramentem.<li><b>Nieznacznie zwiększa</b> zasięg wykrywania instynktu Zabójcy.</li>","name":"Bransoletka przyjaźni","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"Tabletki o wysokiej zawartości kofeiny, które zwiększą twoją wydajność podczas egzaminów i innych wyczerpujących czynności.<li><b>Umiarkowanie zwiększają</b> zasięg wykrywania instynktu Zabójcy.</li>","name":"Tabletki na koncentrację","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"Wyrwany z zeszytu szkic muralu przedstawiającego Legion.<li><b>Umiarkowanie zwiększa</b> czas trwania Dzikiego Szału.</li>","name":"Szkic muralu","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"Mroczna i dołująca składanka ballad rockowych i ponurych melodii.<li><b>Nieznacznie zmniejsza</b> zmęczenie po zakończeniu Dzikiego Szału.</li>","name":"Składanka Julie","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"Drewniana linijka z głęboko wyrytymi imionami wrogów.<li><b>Umiarkowanie skraca</b> czas potrzebny na napełnienie wskaźnika mocy.</li>","name":"Grawerowana linijka","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"Niegdyś przyjaźnie wyglądający żółty guzik, który przedstawia oszpeconą buźkę. Symbol Legionu.<li>Trafienie Ocalałego oznaczonego instynktem zabójcy w trakcie trwania <i>Dzikiego Szału</i> uruchamia efekt <b><i>Zmasakrowania</i></b>.</li>","name":"Zniszczona przypinka z uśmieszkiem","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"Ręcznie robiony guzik z twarzą Legionu. Do użycia jedynie przy zastraszaniu.<li>Trafienie Ocalałego oznaczonego instynktem zabójcy w trakcie trwania Dzikiego Szału nakłada efekt Okaleczenia na 60 s.</li>","name":"Przypinka Legionu","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"Szybka i ekscytująca składanka z energetycznymi piosenkami i mocnym bitem.<li><b>Ogromnie zwiększa</b> zasięg wykrywania instynktu Zabójcy.</li>","name":"Składanka Susie","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"Szkicownik z wyjątkowo kreatywnymi i sugestywnymi, by nie rzec dziwnymi, rysunkami.<li><b>Znacząco zwiększa</b> czas trwania Dzikiego Szału.</li>","name":"Skradziony szkicownik","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"To ostrze pokryte jest brudnymi plamami, co sprawia, że rany nim zadane nie goją się dobrze.<li><b>Nieznacznie zwiększa</b> czas potrzebny Ocalałym na leczenie.</li>","name":"Paskudne ostrze","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"Miks mocnych kawałków i tłustych bitów idealnych na doła.<li><b>Umiarkowanie zmniejsza</b> zmęczenie po zakończeniu Dzikiego Szału.</li>","name":"Składanka Joeya","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"Artykuł medyczny skradziony z biblioteki publicznej w Ormond, objaśniający badania nad ranami kłutymi.<li><b>Umiarkowanie obniża</b> poziom licznika Głębokiej Rany wszystkich ocalałych.</li>","name":"Opracowanie na temat ran kłutych","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"Nigdy nie ruszaj na misję bez swoich piosenek. Kakofonia dźwięków i perkusja wbijająca się w uszy jak ostrze.<li>Sprawia, że ataki zadawane w Dzikim Szale <b>znacznie skracają</b> licznik Głębokiej Rany ocalałego.</li>","name":"Składanka Franka","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"To ostrze jest zakrwawione i brudne, co sprawia, że rany nim zadane nie goją się dobrze.<li><b>Umiarkowanie zwiększa</b> czas potrzebny Ocalałym na leczenie.</li>","name":"Brudne ostrze","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"Garść ziemi zabrana z miejsca wiecznego odpoczynku dozorcy. Nienaturalnie zimna.<li><b>Znacząco zmniejsza</b> zmęczenie po zakończeniu Dzikiego Szału.</li>","name":"Zimny piach","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"Wyglądający jak ze szkła guzik uformowany z samej Mgły, który przedstawia podobiznę Legionu. Jego powierzchnia jest ciepła i promieniuje mocą Bytu.<br><br>Gdy podczas Dzikiego Szału nałożony zostanie efekt Głębokiej Rany:<br><li>twój zasięg terroru obejmuje <b>całą mapę;</b></li><li>palety, przez które przeskakujesz, <b>zostają natychmiast zniszczone.</b></li><br>Efekt trwa do opróżnienia wskaźnika.<br>","name":"Opalizujący guzik","flavor":"„Młodość pochłonięta przez opalizujące szkło powiększa i poszerza zasięg Bytu”.","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"Mroczne rytmy, szybkie solówki i głęboki wokal nie z tej ziemi budzą twój szósty zmysł.<li>Gdy korzystasz Dzikiego Szału, <b>postęp naprawy generatorów</b> można określić poprzez <b>intensywność ich aury.</b></li>","name":"Dymiąca składanka","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"Rozbita kamienna tabliczka z nieczystym zaklęciem używanym pierwotnie do wypędzania chorób i poczucia ogólniej niemocy.<li><b>Nieznacznie skraca</b> czas aktywacji Wód Pobożności.</li><li><b>Nieznacznie zwiększa</b> prędkość ruchu podczas trzymania Skażonego Oczyszczenia.</li>","name":"Fragment tabliczki modlitewnej","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"Cenna żywica pobrana z kadzidłowców i wykorzystywana podczas ceremonii ze względu na jej słodki, cytrusowy zapach.<li><b>Nieznacznie zwiększa</b> prędkość ruchu podczas ładowania Podłego Oczyszczenia.</li>","name":"Aromatyczne kadzidło","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"Cylindryczna pieczęć wykonana z porowatego kamienia przedstawiająca rytualną scenę ze skrzydlatymi bóstwami.<li><b>Nieznacznie wydłuża</b> czas zakażenia przedmiotów.</li>","name":"Wapienna pieczęć","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"Pasta o gryzącym zapachu kruszonych korzeni marynowanych przez trzy dni w wodzie po rybach i przez dwa dni w winie. Stosowana na wysypki.<li><b>Nieznacznie skraca oczekiwanie na ponowne użycie</b> Podłego Oczyszczenia.</li>","name":"Balsam leczniczy","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"Steatytowy amulet z prymitywnie wygrawerowanym skrzydlatym bóstwem. Odpędza chorobę. Napełnia lojalnością noszącą go osobę.<li><b>Nieznacznie wydłuża</b> czas trwania Skażonego Oczyszczenia.</li>","name":"Amulet profilaktyczny","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"Spieniona, mętna ciecz wypełniająca powietrze wyraźnym zapachem ziół i alkoholu. Stosowana bezpośrednio na pęcherze.\\n<li><b>Średnio skraca</b> czas oczekiwania na ponowne użycie Podłego Oczyszczenia.</li>","name":"Silna nalewka","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"Cylindryczna pieczęć wykuta z metalicznego kamienia z wygrawerowanymi postaciami o ptasich głowach stojącymi obok dziwnych maszyn. Wykorzystywana do przechowywania uświęconych prochów.<li><b>Średnio wydłuża</b> czas zarażenia przedmiotów.</li>","name":"Hematytowa pieczęć","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"Syrop na bazie wody i musztardy, który powoduje wymioty po spożyciu. Służy do wypędzania zła z ciała.<li><b>Nieznacznie zwiększa</b> skuteczność Podłego Oczyszczenia.</li>","name":"Mikstura wymiotna","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"Doskonale dojrzały owoc do spożycia podczas ceremonii oczyszczenia. Przepyszny.<li>Rozpocznij rozgrywkę z <b>1</b> dodatkowym zbiornikiem ze skażonymi Wodami Pobożności.</li>","name":"Błogosławione jabłko","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"Puchar olejku o właściwościach wykrztuśnych. Wydziela świeży zapach lauru i rozmarynu.<li><b>Średnio zwiększa</b> prędkość ładowania Podłego Oczyszczenia.</li>","name":"Olejek","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"Obrzydliwy syrop nieznanego pochodzenia. Tę żółtą, gęstą ciecz pije się, aby wywołać wymioty. Służy do wypędzania zła z ciała.<li><b>Średnio zwiększa</b> skuteczność Podłego Oczyszczenia.</li>","name":"Skażona substancja wymiotna","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"Ciemna, woskowata pasta wymieszana z cedrowym sokiem, który wydziela słodki, ziemisty aromat. Stosowana bezpośrednio na skażoną skórę.<li><b>Nieznacznie zwiększa</b> prędkość ruchu podczas ładowania Podłego Oczyszczenia.</li><li><b>Średnio skraca</b> czas oczekiwania na ponowne użycie Podłego Oczyszczenia.</li>","name":"Aromatyczna maść","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"Obsydianowy amulet odpędzający mdłości podczas egzorcyzmów. Zawiera modlitwę do boga chaosu i zarazy. Napełnia noszącego zagorzałą lojalnością.<li><b>Średnio wydłuża</b> czas trwania Skażonego Oczyszczenia.</li>","name":"Amulet Egzorcysty","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"Obrane jabłko obtoczone w uświęconych prochach. Zjedzenie takiego owocu chroniło przed zawistnymi duchami zmarłych.<li>Rozpocznij rozgrywkę z <b>1</b> dodatkowym zbiornikiem ze skażonymi Wodami Pobożności.</li><li><b>Nieznacznie wydłuża </b>czas zarażenia przedmiotów.</li>","name":"Popielate Jabłko","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"Ozdobiona złotem kamienna tabliczka przedstawiająca rysunki i nieczyste zaklęcia służące początkowo do czczenia zapomnianych bóstw.<li><b>Średnio skraca</b> czas aktywacji Wód Pobożności.</li><li><b>Średnio zwiększa</b> prędkość ruchu podczas trzymania Skażonego Oczyszczenia.</li>","name":"Tabliczka kultu","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"W połowie zakrzepła mikstura o okropnym zapachu zrobiona z nieokreślonych składników. Pita w celu szybkiego wywołania wymiotów. Używana do wypędzania zła z ciała.<li><b>Znacznie zwiększa</b> skuteczność Podłego Oczyszczenia.</li>","name":"Wstrętna substancja wymiotna","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"Gnijący odcięty palec stopy Adiris nawleczony na nić i noszony na szyi jako amulet. Promieniuje złowrogą mocą.<li><b>Znacznie zwiększa</b> prędkość zarażania Ocalałych po interakcjach.</li>","name":"Odcięty palec","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"Amulet ze skomplikowanymi żłobieniami i wizerunkiem babilońskiego boga chaosu i zarazy. Napełnia noszącego bezgraniczną lojalnością.<li><b>Znacznie wydłuża</b> czas trwania Skażonego Oczyszczenia.</li>","name":"Amulet Czciciela","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"Prześwitująca cylindryczna pieczęć z wizerunkiem Plagi uformowana z samej Mgły. Jej powierzchnia jest ciepła i pulsuje energią Bytu.<li><b>Średnio zmniejsza</b> prędkość ruchu podczas trzymania Skażonego Oczyszczenia.</li><li><b>Ogromnie zmniejsza</b> czas trwania Skażonego Oczyszczenia.</li><li>Podłe Oczyszczenie staje się Skażonym Oczyszczeniem za każdym razem, kiedy ukończono naprawę generatora.</li>","name":"Opalizująca pieczęć","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Ciemna pasta wykonana z ostrych kawałków kości. Wdychanie jej oparów pobudza trzecie oko.<li>Dostrzegasz aury wymiotujących Ocalałych przez <b>5 s</b>.</li>","name":"Czarne Kadzidło","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"Kamera ukradziona jednej z ofiar Olsena w Filadelfii, gdzie wcześniej pracował. Znajdujące się na niej nagranie przedstawia jego ostatnią noc w mieście.<br><li><b>Nieznacznie zwiększa</b> prędkość oznaczania ocalałego, gdy nie wychylasz się zza osłony.</li>","name":"„Philly”","flavor":"„Jak tu nie kochać Filadelfii: ciągle zapewnia nowe atrakcje, a ja nie chcę niczego zapomnieć”. – Ghost Face","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"Pudełko zapałek z Walleyes – małego baru w północnym Roseville. Na niebiesko zapisano na nim numer telefonu ofiary. Jeden z odnalezionych dowodów.<br><li><b>Nieznacznie zwiększa</b> prędkość ładowania <i>Nocnego Całunu</i>.</li>","name":"Zapałki z Walleyes","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"Wycięte artykuły dotyczące nierozwiązanych spraw morderstw na obszarze od Utah do Pensylwanii. Mimo że Ghost Face napisał tylko część z nich, popełnił wszystkie te morderstwa.<br>Osiągnięciu sukcesu napawa cię dumą i zwiększa twoją pewność siebie.<br><li><b>Nieznacznie zwiększa </b>prędkość ruchu podczas śledzenia.</li>","name":"Wycinki z gazet","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"Woda kolońska za dolara o ostrym zapachu alkoholu do dezynfekcji. Stosowana przez Ghost Face\'a do zaznaczania swojej obecności. Zarezerwowana na spontaniczne wizyty.<br><li><b>Nieznacznie zwiększa</b> czas oznaczenia ocalałego.</li>","name":"Tania woda kolońska","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"Obiektyw z ręcznym ustawianiem ostrości pozwalający na dyskretne robienie zdjęć z daleka.<br><li><b>Nieznacznie zwiększa</b> prędkość oznaczania ocalałego, gdy nie wychylasz się zza osłony.</li><li><b>Nieznacznie zwiększa</b> czas trwania oznaczenia ocalałego.</li>","name":"Obiektyw teleskopowy","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"Kołozeszyt pełen poplamionych, odręcznych notatek. Zawiera szczegółowe opisy różnych przedmiotów używanych do śledzenia ofiar. Przeglądanie przeszłych metod przywraca emocjonujące wspomnienia.<br><li><b>Umiarkowanie zwiększa</b> prędkość ruchu podczas śledzenia.</li>","name":"Dziennik Olsena","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"Zapełniona rozmazanym, niewyraźnym pismem. Wymienione są w niej wszystkie ofiary morderstw w Roseville, a także ich numery telefonów i adresy.<br><li><b>Umiarkowanie skraca czas ładowania </b>Nocnego Całunu<i>.</i>","name":"Książka adresowa Olsena","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"Opisana mapa północnego Roseville na Florydzie. Każdy „X” oznacza ofiarę Ghost Face\'a. Oznaczanie celów na mapie umożliwia poruszanie się po ulicach bez ryzyka wykrycia.<br><li><b>Umiarkowanie wydłuża</b> czas widoczności instynktu zabójcy po ujawnieniu zabójcy.</li>","name":"Oznaczona mapa","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"Czarne pasy, który utrzymują wszystko na miejscu podczas skradania się.<br><li><b>Nieznacznie zwiększa</b> prędkość ruchu podczas kucania.</li>","name":"Paski zatrzaskowe ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"W portfelu Olsena można znaleźć trzydzieści dolarów, kartę członkowską klubu wideo oraz złożone zdjęcie jego pierwszej ofiary w Roseville. Noszenie przy sobie obciążających dowodów zwiększa emocje i determinację.<br><li><b>Znacznie zwiększa</b> prędkość ruchu podczas śledzenia.</li>","name":"Portfel Olsena","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"Cichy i elastyczny futerał do przenoszenia noża. Ruch jest łatwiejszy, gdy wszystko jest przypięte w dobrym miejscu.<br><li><b>Umiarkowanie zwiększa</b> prędkość poruszania się podczas kucania.</li>","name":"Skórzane etui na nóż","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"Zniewalający zapach piżma noszony przez Ducha w celu podkreślenia jego obecności. Zarezerwowany dla ofiar, o których planował napisać.<br><li><b>Umiarkowanie zwiększa</b> czas trwania oznaczenia ocalałego.</li>","name":"Trwałe perfumy","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"Klamra do paska pozwalająca na dyskretne przenoszenie noża. Nikt nie wie, jakie są twoje plany na wieczór.<br><li><b>Umiarkowanie zwiększa</b> prędkość oznaczania ocalałego, gdy nie wychylasz się zza osłony.</li>","name":"Klamra do paska z nożem","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"Niebieski długopis z pogryzioną nakrętką pokrywy DNA Danny\'ego. Obciążający dowód, który nigdy nie został odnaleziony.<br><li><b>Znacznie zwiększa</b> prędkość ładowania <i>Nocnego Całunu.</i>","name":"Obgryziony długopis","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"Wyrwana strona z opisem tygodnia pierwszej ofiary Olsena w Roseville. Spisywanie zwyczajów ofiar pozwala przewidzieć ich ruchy.\\n<br><li><b>Umiarkowanie wydłuża</b> czas widoczności instynktu zabójcy po ujawnieniu zabójcy.</li><li><b>Umiarkowanie zwiększa</b> zasięg wykrywania, aby ujawnić zabójcę, gdy Nocny Całun jest aktywny.</li><br><span class=\\"FlavorText\\">„Obserwowałem cię przez jakiś czas. Chciałem, aby to było coś wyjątkowego – nagłówki, których ludzie nie zapomną”. – Ghost Face</span>","name":"Szczegółowa rutyna ofiary","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"Soczewka noktowizyjna umożliwiająca robienie wyraźnych zdjęć nawet w ciemności. Idealna do dyskretnych i spontanicznych nocnych wizyt.<br><li><b>Znacznie zwiększa</b> prędkość oznaczania ocalałego, gdy nie wychylasz się zza osłony.</li>","name":"Monokular noktowizyjny","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"Futerał umożliwiający pełny zakres ruchów, idealny do zadawania szybkich i mocnych ran podczas swobodnego poruszania się. Ukradziony policjantowi w nocy, kiedy Danny opuścił Filadelfię.<br><li><b>Znacznie zwiększa</b> prędkość ruchu po ukucnięciu.</li><span class=\\"FlavorText\\">„Trzeba przygotować się jak harcerz, ale bez tych głupich łat. Mam coś dużo lepszego”. – Ghost Face</span>","name":"Etui na nóż przyczepiane do nogi","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"Prawo jazdy ujawniające prawdziwą tożsamość Olsena: Danny Johnson.<br><li><b>Znacznie zwiększa</b> zasięg wykrywania zabójcy, gdy <i>Nocny Całun</i> jest aktywny.</li>","name":"Prawo jazdy","flavor":"„Wszyscy chcą wiedzieć, kim jest Ghost Face. Powinni jednak pytać, kto następny”. – Ghost Face","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"Taśma nagrana przez Olsena na potrzeby artykułu, który zasiał strach w Roseville.<br><li><b>Ogromnie zwiększa</b> prędkość oznaczania ocalałego po wychyleniu się zza osłony.</li><li><b>Ogromnie zmniejsza</b> prędkość oznaczania ocalałego, jeśli nie wychylisz się zza osłony.</li><br><span class=\\"FlavorText\\">„Na nagraniu widać ciemną postać wchodząca do domu późną nocą w północnym Roseville na Florydzie. Policję wezwano następnego ranka, aby zgłosić morderstwo w okolicy. Zamknijcie drzwi na klucz: zabójca jest wśród Was i porusza się swobodnie niczym duch w nocy”. – The Roseville Gazette","name":"„Ghost Face na taśmie”","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"Mała kamera, która nagrała Ducha włamującego się do domu przy Belleview Road w północnym Roseville. Urządzenie było ustawione pod idealnym kątem, aby uchwycić Ducha bez dostarczania policji jakichkolwiek istotnych wskazówek.<br><li>Aury wszystkich ocalałych poza twoim zasięgiem terroru zostają ujawnione na 4 sekundy, kiedy oznaczony ocalały zostanie wprowadzony w stan agonii.</li>","name":"Zewnętrzna kamera bezpieczeństwa","flavor":"„Jeden obraz jest wart więcej niż tysiąc słów”. – Ghost Face","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"Miąższ dyni skażony zgniłą glebą w Hawkins.<li>Gdy przemierzasz Drugą Stronę, portal, w który wchodzisz, zostaje zniszczony. Zyskujesz dodatkowe 200 Punktów Krwi za przejście.</li>","name":"Zgniła dynia","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"Żylasty ogon szczura do zjedzenia przez Demogorgona.<li><b>Nieznacznie skraca</b> czas potrzebny do otwarcia portalu.</li>","name":"Ogon szczura","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"Mokra sterta słonych, miękkich wątrób.<li><b>Nieznacznie zwiększa</b> prędkość ruchu zabójcy podczas ładowania umiejętności <b>Z Otchłani</b>.</li>","name":"Wątroba szczura","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"Czarne sfermentowane serce wyrwane z klatki istoty z mackami po Drugiej Stronie.<li><b>Nieznacznie przyspiesza</b> ładowanie <b>Postrzępienia</b> po celnym ataku.</li>","name":"Czarne serce","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"Mokre, elastyczne sieci, które poszerzają międzywymiarowe tunele.<li><b>Nieznacznie wydłuża</b> czas potrzebny ocalałym na zamknięcie portalu.</li>","name":"Lepka sieć","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"Cuchnąca, lepka, rozszerzająca się warstwa, która pokrywa międzywymiarowe tunele.<li><b>Umiarkowanie zwiększa</b> promień wykrywania ocalałych przez umiejętność <b>Z Otchłani</b>.</li>","name":"Klejący nabłonek","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"Zgniłe flaki posilające Demogorgona.<li><b>Nieznacznie zwiększa</b> prędkość ruchu zabójcy podczas przemierzania Drugiej Strony.</li>","name":"Zgniłe zielone flaki","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"Smaczne wnętrzności pechowej ofiary.<li><b>Zwiększają</b> całkowitą liczbę dostępnych portali o <b>1</b>.</li><li><b>Nieznacznie wydłużają</b> czas aktywacji umiejętności <b>Postrzępienie</b> po chybionym ataku.</li>","name":"Flaki mewy","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"Złamane okulary, które były po Drugiej Stronie.<li><b>Nieznacznie zwiększają</b> prędkość odnawiania <i>Postrzępienia</i> podczas niszczenia palety.</li>","name":"Okulary Barb","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"Ciemny grzyb z Drugiej Strony, który umożliwia Demogorgonowi telepatyczne zakłócenie zmysłów ofiary.<li><b>Nieznacznie wydłuża</b> czas trwania efektu <b>Niewykrywalny</b> zastosowanego na zabójcy po wyjściu z portalu.</li>","name":"Fioletowy grzyb","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"Grube, kolczaste pnącza rozciągające się i wzmacniające międzywymiarowe tunele.<li><b>Nieznacznie wydłuża</b> czas potrzebny ocalałym na zamknięcie portalu.</li><li><b>Nieznacznie zwiększa</b> promień wykrywania ocalałych przez umiejętność <b>Z Otchłani</b>.</li>","name":"Kolczaste winorośle","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"Puszka z napojem naładowana nadnaturalną energią.<li>Podczas przemierzania Drugiej Strony wyświetla żółte aury naprawianych generatorów</li>","name":"Napój Jedenastki","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"Surowe, gumowate płuco, które wzmacnia Demogorgona.<li><b>Znacznie zwiększa</b> prędkość ruchu zabójcy podczas przemierzania Drugiej Strony.</li><li>Zmniejsza liczbę dostępnych portali o <b>2</b>.</li>","name":"Płuco jelenia","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"Zapalniczka służąca do wzniecania kłopotów.<li>Ocalali będący pod wpływem portalu otrzymują efekt <b>Ślepota</b>. Po zakończeniu kontaktu z portalem efekt utrzymuje się przez <b>60 sekund</b>.</li>","name":"Zapalniczka w mosiężnej obudowie","flavor":"„Emituje silne pole elektromagnetyczne: musiała mieć styczność z Drugą Stroną”. – Hawkins National Laboratory","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"Jasnoczerwony trujący grzyb z Drugiej Strony.<li><b>Umiarkowanie wydłuża</b> czas trwania efektu <b>Niewykrywalny</b> zastosowanego na Demogorgonie po wyjściu z portalu.</li>","name":"Cynobrowy grzyb","flavor":"„Wciąż prowadzimy eksperymenty na tym osobniku, ale na razie wyniki są niespójne”. – Hawkins National Laboratory","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"Lepki i łatwopalny sok, które wzmacnia wejście do międzywymiarowych tuneli.<li><b>Umiarkowanie wydłuża</b> czas potrzebny ocalałym do zamknięcia portalu.</li>","name":"Żywica z Drugiej Strony","flavor":"„Próbka pobrana z kory drzewa używanego kiedyś jako przejście. W tej chwili wnioski dotyczące jej działania są niejednoznaczne”. – Hawkins National Laboratory","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"Duże, ciepłe jajo pokryte okropną siecią.<li><b>Znacznie zwiększa</b> prędkość odzyskiwania mocy przemierzania Drugiej Strony.</li>","name":"Nieznane jajo","flavor":"„Po Drugiej Stronie zauważono duże jajo, jednak żadna próbka nie przetrwała transportu do laboratorium w celu wykonania badań”. – Hawkins National Laboratory","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"Zardzewiały metalowy gwizdek, który niegdyś zaprowadzał porządek na publicznym basenie w Hawkins.<li>Ocalali w pobliżu aktywnych portali są wskazywani przez Instynkt Zabójcy bez potrzeby ładowania umiejętności <b>Z Otchłani</b>.</li>","name":"Gwizdek ratownika","flavor":"„Emituje silne pole elektromagnetyczne: musiał mieć styczność z Drugą Stroną”. – Hawkins National Laboratory","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"Halucynogenny mech porastający korę drzew po Drugiej Stronie.<li>Podczas przemierzania Drugiej Strony Demogorgon wychodzi z portalu cicho, ale wolniej.</li><li><b>Ogromnie wydłuża</b> czas trwania efektu <b>Niewykrywalny</b> nałożonego na Demogorgona po wyjściu z portalu.</li>","name":"Czerwony mech","flavor":"„Zjedzenie liści zwiększa sprawność fizyczną i wywołuje euforię”. – Hawkins National Laboratory","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"Bujny porost rosnący gęsto na skałach po Drugiej Stronie.<li><b>Odkrywa aury</b> wszystkich ocalałych podczas przemierzania Drugiej Strony oraz na <b>3 sekundy</b> po wyjściu z portalu.</li>","name":"Trędowaty narost","flavor":"„Jedna mała dawka może wywołać silne halucynacje”. – Hawkins National Laboratory","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"Uważając swoje cele za czyste i sprawiedliwe, Kazan nosił talizman, aby odpędzać zło, które mogłoby sprowadzić go na złą drogę.<li><b>Nieznacznie zwiększa</b> prędkość zbierania krwawych kul.</li>","name":"Talizman yaku-yoke","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"Gdyby lina była mocniejsza, prawdopodobnie utrzymałaby Kazana, a tak uciekł i zamordował porywaczy.<li><b>Nieznacznie zwiększa</b> odległość, z której można wykryć aury krwawych kul.</li>","name":"Gnijąca lina","flavor":"„Choć śmierć jest skupiona, czasem mruga”. – Doktryna Renjira 14:5","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"Naczynie z ceremonii zaślubin Kazana. Nie przetrwało nocy.<li><b>Nieznacznie przyspiesza</b> ładowanie <i>Krwawej Furii</i>.</li><li><b>Nieznacznie skraca</b> czas wyłączenia <i>Krwawej Furii</i>.</li>","name":"Pęknięte sakazuki","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"Odpadł podczas jednej z setek zimowych wypraw Kazana do świątyni. Mimo pielgrzymki noga Akito nigdy nie wyzdrowiała.<li><b>Nieznacznie zwiększa</b> prędkość ruchu podczas zbierania krwawych kul.</li>","name":"Czarny paznokieć","flavor":"„Jeśli ojciec nie poświęca się dla swoich dzieci, jaki z niego ojciec?” – Doktryna Renjira 11:12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"Rogaty grzebień, który Kazan zerwał ze swojego hełmu, gdy porównano go do demona.<li><b>Nieznacznie zwiększa</b> szybkość biernego odnawiania <i>Gniewu Yamaoki<i>.</li>","name":"Wypolerowane maedate","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"Atramentowy obraz, który wisiał kiedyś w posiadłości rodziny Yamaoka. Przedstawia historię lwa zjedzonego przez myszy.<li><b>Nieznacznie przyspiesza</b> ładowanie <i>Krwawej Furii</i>.</li><li><b>Nieznacznie skraca</b> czas zakończenia <i>Krwawej Furii</i>.</li><li><b>Umiarkowanie zmniejsza</b> zużycie <i>Krwawej Furii</i> podczas powalania ocalałego.</li>","name":"Atramentowy lew","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"Buława, która należała do Renjira. Kazan ukradł ją, gdy odchodził.<li><b>Nieznacznie wydłuża</b> czas trwania <i>Krwawej Furii</i>.</li>","name":"Wyszczerbione saihai","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"Miecz treningowy Akito. Chłopak rzadko używał go po wypadku.<li><b>Umiarkowanie zwiększa</b> odległość, z której można wykryć aury krwawych kul.</li>","name":"Drewniany dziecięcy miecz","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"Krew chłopca, który nazwał Kazana fałszywym szlachcicem. Kazan ukrył ślady walki przed ojcem i często w tajemnicy bawił się w tunice.<li><b>Umiarkowanie zwiększa</b> prędkość ruchu podczas zbierania krwawych kul.</li>","name":"Zakrwawiona tunika","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"Herb rodziny Yamaoka, który napełniał Kazana niewyobrażalną dumą.<li><b>Umiarkowanie wydłuża</b> czas trwania <i>Krwawej Furii</i>.</li>","name":"Sashimono rodziny Yamaoka","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"Maska, którą młody Kazan kupił, by świętować Setsubun. Jej usta najeżone kłami zaczęły nawiedzać go w koszmarach.<li><b>Nieznacznie zwiększa</b> liczbę krwawych kul upuszczanych przez ocalałych.</li>","name":"Drewniana maska Oni","flavor":"„To nie przypadek, że ten człowiek tak dobrze zna demony”. — Doktryna Renjira 3:8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"Fragmenty rodowego ostrza zniszczonego przez Kazana w przypływie gniewu.<li><b>Umiarkowanie zwiększa</b> prędkość pasywnego ładowania <i>Gniewu Yamaoki</i>.</li>","name":"Roztrzaskany miecz wakizashi","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"Kok samuraja, który zakwestionował honor Kazana. Na końcówkach zwisa cienki pasek zakrwawionej skóry.<li><b>Znacznie zwiększa</b> prędkość ładowania <i>Demonicznego pędu</i>, gdy <i>Krwawa Furia</i> jest aktywna.</li>","name":"Odcięty kok","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"Wisiorek, który Kazan otrzymał przy narodzinach. Jego moce mają chronić rodzinę przed krzywdą.<li><b>Umiarkowanie zwiększa</b> prędkość <i>Demonicznego Pędu</i>, gdy <i>Krwawa Furia</i> jest aktywna.</li>","name":"Talizman kanai-anzen","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"Tkanina, w którą matka Kazana płakała, gdy wyruszył na pielgrzymkę w celu oczyszczenia klasy samurajów.<li><b>Znacznie zmniejsza</b> zużycie <i>Krwawej Furii</i> podczas powalania ocalałego.</li>","name":"Tenugui przesiąknięte łzami","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"Fragmenty statku, który niósł Renjira Yamaokę. Mimo wszystko legendarny samuraj zdawał się przetrwać.<li><b>Umiarkowanie zwiększa</b> liczbę krwawych kul upuszczanych przez ocalałych.</li>","name":"Połamany kadłub","flavor":"„Planując intrygę, nie korzystaj z rad”. – Doktryna Renjira 7:9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"Ząb sprzedawany przez egzotycznego handlarza. Symbolizuje moc i szlachetność.<li><b>Znacznie wydłuża</b> czas trwania <i>Krwawej Furii</i>.</li>","name":"Kieł lwa","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"Kula używana przez syna Kazana, po upadku z drzewa. Koleżanka Akito i jej rodzina została ukarana za krzywdę chłopca.<li><b>Znacząco zwiększa</b> prędkość <i>Demonicznego Pędu</i>, gdy <i>Krwawa Furia</i> jest aktywna.</li>","name":"Kula Akito","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"Rękawica, którą Renjiro przyciskał do mostka po ciosie zadanym przez syna.<li>Wszyscy ocalali widzą krwawe kule.</li><li>Ocalały, który dotknie krwawej kuli, wchłonie ją i ujawni swoją aurę Zabójcy na <b>2</b> sekundy.</li><li>Efekty wynikające z wchłoniętych kul sumują się.</li>","name":"Zakrwawiona rękawica Renjira","flavor":"„Gdy wszystko inne zawiedzie, trzymaj się swojego honoru”. – Doktryna Renjira 14:12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"Herb, którego właściciel należy do rodziny Yamaoka.<br><li>Gdy <i>Krwawa Furia</i> jest aktywna, niecelny <i>Cios Demona</i> sprawi, że wszyscy ocalali <b>w promieniu 12 metrów</b> krzykną, zdradzając, gdzie się znajdują.</li>","name":"Opalowy herb rodzinny","flavor":"„Wiedz, kim jesteś, by chronić swoje serce”. – Doktryna Renjira 11:2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"Brudny kawałek juty. Ślina wystarczyła do wytarcia kuszy w trakcie strzelaniny. <li><b>Nieznacznie skraca</b> czas odnawiania Kuszy po nietrafionych strzałach.</li>","name":"Opluta ścierka ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"Mieszanka olejków i wyciągów kupiona od obwoźnego sprzedawcy. Rzekomo leczy wszystkie dolegliwości. <li><b>Nieznacznie zwiększa</b> szybkość naciągania Kuszy.</li>","name":"Wężowy olej ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"Słabe stalowe ogniwa używane przez Caleba w prototypie Kuszy. Mimo nieskutecznych prób z łańcuchem, miały one wartość sentymentalną.<li>Daj <b>50%</b> więcej Punktów Krwi za punktowane <i>przebicie</i>.</li><li>Ocalali mogą się łatwiej uwolnić.</li>","name":"Brzęczący łańcuch","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"Stary pas na amunicję, który Caleb dostosował do swojego specjalistycznego arsenału. Wciąż widać na nim drobny czerwony kurz z pustyni w Terytorium Arizony. <li><b>Nieznacznie zwiększa</b> szybkość przeładowania Kuszy.</li>","name":"Zmodyfikowany pas na amunicję ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"Gwóźdź kolejowy, który Caleb przymocował z przodu Kuszy w przypływie chorobliwej ciekawości. Tępy koniec uniemożliwia mu czyste przebicie celu. <li>Trafienie ocalałego przebitego włócznią nakłada nań efekt <b>Zmasakrowany</b>.</li>","name":"Zardzewiały gwóźdź ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"Zwyczajnie wyglądająca roślina, której olej umieszczony na włóczni powodował powstawanie bolesnych pęcherzy wokół ran.<li><b>Nieznacznie wydłuża</b> czas leczenia ocalałego z efektem <b>głębokiej rany</b>.</li>","name":"Trujące dębowe liście","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"Srebrna odznaka zdjęta w Terytorium Arizony z ciała stróża prawa, który przeszkodził w łowach gangu z Hellshire. <li><b>Nieznacznie zmniejsza</b> zasięg terroru podczas patrzenia przez celownik Kuszy. </li><li><b>Nieznacznie zmniejsza</b> szybkość ruchu podczas patrzenia przez celownik Kuszy. </li><span class=\\"FlavorText\\">„Lepiej się pomódl. Zawiśniesz do południa”. – Caleb Quinn</span>","name":"Odznaka policjanta ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"Pocisk, który przebił się przez szczękę Caleba podczas szaleńczej strzelaniny. Pobudza palącą chęć zemsty. <li><b>Nieznacznie zwiększa</b> szybkość ruchu podczas patrzenia przez celownik Kuszy. </li><span class=\\"FlavorText\\">„Wyrządzając mi krzywdę, ściągnąłeś na siebie śmierć”. – Caleb Quinn</span>","name":"Łamacz szczęk ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"Puszka przyciętych i posłodzonych liści tytoniu zabrana z wypatroszonego ciała w Glenvale. Pobudza system nerwowy.<li><b>Umiarkowanie skraca</b> czas trwania ogłuszenia, gdy ocalały wyrywa się z przygwożdżenia przez Kuszę.</li>","name":"Tytoń do żucia","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"Stłumione dzwonienie kluczy obudziło w Calebie wściekłe wspomnienie. <li><b>Umiarkowanie zwiększa</b> szybkość przeładowania Kuszy.</li>","name":"Klucze strażnika ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"Pożółkłe resztki plakatu z poszukiwanym Masonem Kellym. Pozwalał Calebowi skupić się na polowaniu. <li><b>Umiarkowanie zwiększa</b> szybkość ruchu podczas patrzenia przez celownik Kuszy. </li><span class=\\"FlavorText\\">„Surowo się z tobą policzę, przysięgam na grób matki”. – Caleb Quinn</span>","name":"Plakat z poszukiwanym ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"Puszka z niewielką ilością oleju zmniejszającego tarcie maszyn. Wczesne modele Kuszy stale się zacinały i wszędzie trzeba było nosić ze sobą smar. <li><b>Umiarkowanie skraca</b> czas odnawiania Kuszy po nietrafionych strzałach.</li>","name":"Puszka ze smarem ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"Rozwścieczony przez ofiarę, która uciekła mu dwukrotnie, Caleb nawinął kolczaste gałęzie na włócznię i wypuścił ją. <li>Ocalali, którzy wyrwą się z przygwożdżenia przez Kuszę, otrzymują efekt <b>Zmasakrowany</b>.</li>","name":"Kolczaste krzewy ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"Złoty ząb wyrwany Henry\'emu Bayshore\'owi, który wrzeszczał i błagał o litość przez kilka godzin, zanim został zabity. <li><b>Umiarkowanie zwiększa</b> szybkość naciągania Kuszy. </li><span class=\\"FlavorText\\">„Znaj swoje miejsce, chłopcze. Znaj swoje cholerne miejsce”. – Henry Bayshore</span>","name":"Złoty ząb Bayshore\'a","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"Gruby, ciężki łańcuch, który utrzymywał niegdyś stalową kulę przypiętą do kostki Caleba. Został potem przyczepiony do włóczni.<li><b>Znacznie zwiększa</b> liczbę ładunków potrzebnych ocalałemu do wyrwania się z przygwożdżenia.</li><span class=\\"FlavorText\\">„Osadzeni pracujący poza spacerniakiem muszą mieć przypiętą do kostki stalową kulę o wadze co najmniej 8 kilogramów”. – instrukcje dla strażników więzienia Hellshire</span>","name":"Łańcuch więzienny","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"Ciepła zawartość butelki, która uspokoiła gniew Caleba i spowolniła jego kroki. <li><b>Umiarkowanie zmniejsza</b> zasięg terroru podczas patrzenia przez celownik Kuszy. </li><li><b>Umiarkowanie zmniejsza</b> szybkość ruchu podczas patrzenia przez celownik Kuszy. </li><span class=\\"FlavorText\\">„Spokojny smak na dziki zachód” – ogłoszenie z Gold Creek, 1876 r.</span>","name":"Gold Creek Whiskey","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"Wysokiej jakości cygaro wyrwane z kurtki szefa Caleba, gdy ten zawodził nad włócznią wystającą z jego brzucha.<li><b>Znacznie skraca</b> czas ogłuszenia, gdy ocalały uwolni się z przygwożdżenia włócznią.</li><span class=\\"FlavorText\\">„Nie celuj tym we mnie, tępaku”. – Henry Bayshore</span>","name":"Cygaro Bayshore\'a","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"Elastyczna amerykańska stal z ostrymi kolcami. Caleb uznał, że owinie drut wokół włóczni, aby zwiększyć jej śmiercionośność.<li><b>Umiarkowanie wydłuża</b> czas leczenia ocalałego z efektem <b>głębokiej rany</b>.</li></li><span class=\\"FlavorText\\">„Zaraz nie będzie się czego bać. Do tego czasu bój się mnie”. – Caleb Quinn</span>","name":"Drut kolczasty","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"Moneta przypominająca szkło wykonana z Mgły. Płatność dla łowcy nagród za jego usługi.<li>Ocalali trafieni włócznią z odległości co najmniej <b>15 metrów</b> otrzymują efekt <b>Narażony</b> na czas przebicia.</li><span class=\\"FlavorText\\">„Desperackie transakcje są opłacane szaleństwem”.</span>","name":"Opalowa moneta","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"Żelazo do oznaczania gangu z Hellshire. Wbrew pogłoskom grupa nie wypalała znaku rekrutom, ale używała żelaza do znakowania wyjątkowo problematycznych zdobyczy.<li>Tak długo jak ocalały zostaje przybity włócznią, aury wszystkich ocalałych w zasięgu terroru zostają ujawnione.</li><span class=\\"FlavorText\\">„Gang z Hellshire: sprawiedliwi czy przestępcy?” – nagłówek w Glenvale Gazette</span>","name":"Żelazo z Hellshire","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"Znaleziony w lodówce. Wygrawerowano na nim odrażającą, rozdętą twarz.<li><b>Nieznacznie wydłuża</b> czas pozostawania ścieżki <b>Rytuału sądu</b> na mapie.</li>","name":"Ołowiany pierścień ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"Motyl znaleziony na łóżku w Wood Side. Jest bardzo delikatny i niemal rozpada się po dotknięciu.<li><b>Nieznacznie zwiększa</b> prędkość odnawiania <b>Rytuału sądu</b>.</li>","name":"Martwy motyl ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"Znalezisko ze szpitala w Brookhaven. Ozdobiony wygrawerowanym pająkiem.<li><b>Nieznacznie wydłuża</b> czas możliwości wykonania <b>Rytuału sądu</b>.</li>","name":"Miedziany pierścień ","flavor":"„Byłam zamknięta w najgłębszej piwnicy. Była bardzo mała i ciemna, a ja strasznie się bałam. Zgubiłam swój cenny pierścionek, ale już nigdy, przenigdy tam nie wrócę”.","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"Nylonowy pasek, który posłużył do przywiązania ofiary do metalowego stelaża. Barwa utrudnia dostrzeżenie wsiąkniętej w niego krwi.<li><b>Nieznacznie zwiększa</b> zasięg <b>Kary dla potępionych</b>.</li>","name":"Czarny pasek ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"Lalka ręcznie wykonana z wosku przez więźnia na moment przed sądem.<li><b>Umiarkowanie zwiększa</b> zasięg <b>Kary dla potępionych</b>.</li>","name":"Lalka z wosku ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"Ostra i zardzewiała końcówka włóczni. Jest pokryta krwią ostatniej ofiary.<li><b>Umiarkowanie wydłuża</b> łączny czas na wykonanie <b>Rytuału sądu</b>.</li>","name":"Grot włóczni ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"Fragment różowej tkaniny w panterkę. Trudno powiedzieć, do czego była używana.<li><b>Nieznacznie wydłuża</b> czas trwania <i>Instynktu zabójcy</i> uruchomionego przez <b>Rytuał sądu</b>.</li>","name":"Tkanina w panterkę  ","flavor":"„Nieważne, kim jestem. Jestem tu dla ciebie, James”. – Maria","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"Taśma zakochanej pary na wakacjach w Silent Hill. Mimo sentymentalnej wartości pozostawiono ją w hotelu Lakeview.<li><b>Umiarkowanie zwiększa</b> prędkość odnawiania <b>Rytuału sądu</b>.</li>","name":"Zapomniana kaseta ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"Pozytywka z figurką z bajki o Kopciuszku. Znaleziona w walizce pokrytej naklejkami z różnych miejscowości.<li><b>Umiarkowanie wydłuża</b> czas pozostawania ścieżki <b>Rytuału sądu</b> na mapie.</li>","name":"Pozytywka z Kopciuszkiem ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"Zdjęcie dwóch postaci w czerwonych kapturach podpisane „Bankiet szkarłatu i bieli dla bogów”.<li><b>Znacznie zwiększa</b> prędkość odnawiania <b>Rytuału sądu</b>.</li>","name":"Zdjęcie sekty Valtiela ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"Metalowa tablica z azteckimi symbolami.<li><b>Znacznie wydłuża</b> łączny czas na wykonanie <b>Rytuału sądu</b>.</li>","name":"Tabliczka ciemiężcy ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"Malunek okazałej postaci ze stalową piramidą na głowie. W tle widać ofiary w klatkach.<li><b>Umiarkowanie wydłuża</b> czas trwania <i>Instynktu zabójcy</i> uruchomionego przez <b>Rytuał sądu</b>.</li>","name":"Mglisty dzień, resztki sądu ","flavor":"„To on…”","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"Gładka szara stopa manekina, brutalnie oderwana od nogi.<li><b>Znacznie wydłuża</b> czas pozostawania ścieżki <b>Rytuału sądu</b> na mapie.</li>","name":"Stopa manekina ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"Schemat hotelu Lakeview. Na tym miejscu winy namalowano czerwone płomienie.<li><b>Znacznie zwiększa</b> zasięg Kary dla potępionych.</li>","name":"Rysunek płonącego człowieka ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"Świeże jajko o uderzająco czerwonym kolorze. Wielkości przepiórczego jaja.<li><b>Znacznie wydłuża</b> czas trwania <i>Instynktu zabójcy</i> uruchomionego przez <b>Rytuał sądu</b>.</li>","name":"Szkarłatne jajo ","flavor":"„Nigdy w życiu się tak nie bałam! W ogóle się mną nie przejmujesz… Prawda?” – Maria","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"Jajko o starym wyglądzie, w czerwonawopomarańczowym kolorze. Wielkości przepiórczego jaja.<li>Ocalali dotknięci <b>Rytuałem sądu</b> otrzymują efekt <b>Oślepienie</b> na <b>60 sekund</b>.</li>","name":"Rdzawe jajo ","flavor":"„James… Uszczęśliwiłeś mnie”. – Mary","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"Książka o historii i legendach Silent Hill oraz obszaru otaczającego miasto.<li>Ocalali dotknięci <b>Rytuałem sądu</b> otrzymują efekt <b>Nieświadomy</b> na <b>15 sekund</b>.</li><span class=\\"FlavorText\\">„Nazywali to miejsce «obszarem cichych duchów»”.</span>","name":"Książka „Utracone wspomnienia” ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"Książka o pradawnym bogu. Autor nieznany.<li>Ranni ocalali dotknięci <i>Udręką</i> otrzymują efekt <b>Krwotok</b>.</li>","name":"Książka „Szkarłatna ceremonia” ","flavor":"„Mów. Jestem Szkarłatem. Kłamstwa i mgła to nie oni – to ja”.","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"Kielich o starożytnym wyglądzie wykonany z czystego obsydianu.<li><b>Kat</b> zyskuje efekt <b>Niewykrywalny</b>, gdy stoi na ścieżce <b>Rytuału sądu</b>.</li>","name":"Obsydianowy kielich ","flavor":"„Wybacz, że cię budzę, ale nie mogę iść dalej bez ciebie”. – James Sunderland","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"Talizman z dziwną inskrypcją. Zdaje się, że zmienił ją wpływ Bytu.<li>Po wysłaniu ocalałego do <b>klatki odkupienia</b> aury wszystkich ocalałych dotkniętych <i>Udręką</i> zostają ujawnione na <b>6 sekund</b>.</li>","name":"Opalizująca pieczęć Metatrona ","flavor":"„Ta magiczna płytka o silnych właściwościach ochronnych jest nazywana herbem Virun VII lub pieczęcią Metatrona”.","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Zupełnie nieskuteczna tabletka. Ale czy na pewno?<br><br><li><b>Umiarkowanie zmniejsza</b> prędkość ruchu podczas Pędu.</li><li>Zyskaj <b>100%</b> więcej Punktów Krwi podczas punktowanego Pędu.</li>","name":"Placebo ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"Trująca roślina, dzięki której Talbot zainteresował się chemią. Przywołuje dawno wyparte wspomnienia.<br><br><li><b>Nieznacznie zwiększa</b> tempo regeneracji po Pędzie.</li> ","name":"Naparstnica purpurowa ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"Ta wczesna próbka nie przyniosła pożądanych rezultatów, ale i tak wykazała zaskakujące efekty.<br><br><li>Automatycznie odwraca się w stronę ocalałego po Uderzeniu.</li>","name":"Mikstura nr 7 ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"Monokl, którego Talbot rzadko używał, mimo pogarszającego się wzroku.<br><br><li>Pokazuje położenie celu Uderzenia.</li>","name":"Wyszczerbiony monokl","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"Pozostałości po notatkach Talbota. Wciąż zawierają cenne informacje.br><li><b>Zmniejsza</b> ilość dostępnych żetonów Pędu o <b>1.</b></li><li><b>Umiarkowanie zwiększają</b> prędkość regeneracji żetonów.</li> ","name":"Porwane notatki ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"Suszone płatki krostorośli zmielone na drobny pył.<br><br><li><b>Umiarkowanie zwiększają</b> czas trwania uderzenia.</li>","name":"Pył z krostorośli ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"Próbka żółci Plagi, destylowana i potraktowana mieszaniną chemikaliów.<br><br><li><b>Nieznacznie zwiększa</b> prędkość obrotów podczas Pędu.</li> ","name":"Żółć Plagi","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"Pokaźnych rozmiarów cierń odcięty z przerośla. Wydziela łagodną toksynę.<br><br><li><b>Umiarkowanie zwiększa</b> tempo regeneracji po Pędzie.</li> ","name":"Cierń przerośla","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"Szczur, który na krótko powrócił do życia po wstrzyknięciu serum. Wywołało ono u niego niekontrolowaną agresję.<br><br><li><b>Umiarkowanie zwiększa</b> prędkość każdego kolejnego Pędu.</li> ","name":"Zarażony szczur ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"Zwykła sól morska, która na chwilę znalazła się w świecie duchów, co zmieniło jej właściwości.<br><br><li><b>Umiarkowanie zwiększa</b> prędkość obrotów podczas Pędu.</li> ","name":"Sól z Półmroku ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"Mikstura z suszonych róż z nadzwyczaj rzadkiego Bukietu Nowiu Księżyca.<br><br><li><b>Znacząco wydłuża</b> czas trwania Uderzenia.</li> ","name":"Woda różana ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"Serum. Śmiertelnie trujące dla ludzi, ale wywołuje pomyślne skutki u tych, którzy są… czymś więcej.<br><br><li>Rozpoczynając Uderzenie, odkrywasz aury ocalałych w promieniu <b>8 metrów</b> od miejsca zderzenia na <b>3 sekundy</b>.</li>","name":"Mikstura nr 21 ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"Martwy kruk, groteskowo zmutowany przez serum zarazy.<br><br><li><b>Znacząco wydłuża</b> prędkość każdego kolejnego Pędu.</li> ","name":"Zarażony kruk ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"Hormon z nadnerczy nieskłonnego do współpracy obiektu badań. Chociaż zapewnia nagły skok energii, jej użycie może zmęczyć.<br><br><li><b>Ogromnie zmniejsza</b> prędkość obrotów podczas Pędu.</li><li><b>Ogromnie zwiększa</b> prędkość regeneracji żetonów.</li><li><b>Zwiększa</b> dostępną liczbę żetonów Pędu o<b>2.</b></li><li><b>Znacząco zwiększa</b> maksymalne pole widzenia podczas Pędu.</li><br>","name":"Ampułka z adrenaliną ","flavor":"\\\\„Proszę, nie rób tego…”","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"Dziennik mężczyzny, który twierdził, że powrócił z Pustki. Wiedza w nim zawarta ma praktyczne zastosowanie.<br><br><li>Zyskujesz efekt <b>Niewykrywalny</b> podczas Pędu.</li><br>","name":"Dziennik Viga ","flavor":"„Człowiek, który znajdzie wyjście z pustkowi zapomnianych marzeń i niekończącej się rutyny, staje się Bogiem”. – Talbot Grimes","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"Talbot używał tego kamienia, aby wyryć na ścianach swej nory to, co uważał za wyniki swoich badań.<br><br><li>Trafienie ocalałego Śmiertelnym Pędem przywołuje Byt, który blokuje palety w promieniu <b>12 metrów</b> od ciebie przez <b>6 sekund</b>.</li><br>","name":"Kamień przywołań ","flavor":"„Śmierć to dopiero początek”.","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"Płyn pobierany z szyszynki zmarłego niedawno ocalałego.<br><br><li>Podczas pędu wejście w promień <b>16 metrów</b> od naprawiającego lub leczącego ocalałego uruchamia dla niego <b>ogromnie</b> trudny test umiejętności. Można uruchomić jeden raz na pęd na ocalałego. Nie uruchamia się dla pędu rozpoczętego w promieniu <b>16 metrów</b> od ocalałego.</li><br>","name":"Substancja duszy ","flavor":"„Podejrzewa się, że wywołuje nietypowe zmiany w rytmach fal mózgowych”. – Nieoznakowany tekst szkoły mistyków","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"Pierścień, który otrzymują chemicy w dniu ukończenia studiów na London School of Medicine. Ma przypominać o niepowstrzymanej ambicji.<br><br><li><b>Trafienie ocalałego Śmiertelnym pędem  natychmiastowo odnowi wszystkie żetony Pędu.</li><br>","name":"Pierścień alchemika ","flavor":"„Student został oskarżony o okradanie grobów z zamiarem przeprowadzania nielegalnych badań na zwłokach”. – Nagana dla studenta Talbota Grimesa, 1838 r.","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"Etykieta laboratoryjna wyglądająca na szklaną, uformowana z Mgły. Albo dar od Bytu, albo okrutny żart, w ramach którego Zaraza zostaje oznakowany tak, jak kiedyś oznaczał innych.<br><br><li>Po zużyciu wszystkich żetonów Pędu ostatni Śmiertelny pęd wprowadzi ocalałych w stan agonii.</li><br>","name":"Opalizująca etykieta Zarazy","flavor":"„Postęp wymaga drastycznych zmian”. – Talbot Grimes","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"Przedostatni wysiłek Talbota, by stworzyć serum. Chociaż nie umożliwiło mu ucieczki, miało potężne efekty uboczne.<br><br><li>Ocalali w promieniu <b>16 metrów</b> od Uderzenia otrzymują efekt <b>Skrępowany</b>, utrzymujący się przez <b>3 sekundy</b>.</li><li>Uderzenie w palety lub ściany zniszczu je i ogłuszy Zarazę na <b>1.5 sekund.</b></li><br>","name":"Mikstura nr 33 ","flavor":"\\\\„Zostało mało czasu. Oby to było to…” – Talbot Grimes","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"Miniaturowy zabawkowy miecz o długości zaledwie kilku centymetrów. Victor czuł przypływ brutalnych emocji, gdy go trzymał.<br><br><li><b>Nieznacznie skraca</b> czas ładowania Skoku.</li>","name":"Zabawkowy miecz","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"Charlotte miała różne sposoby na żałobę po śmierci Victora. Gdy paznokcie odpadły z jego gnijących dłoni, zachowała jeden na pamiątkę.<br><br><li><b>Umiarkowanie skraca</b> czas potrzebny na odłączenie Victora od Charlotte.</li>","name":"Mały paznokieć","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"Metalowy pojemnik z kwaśnym mlekiem. Choć Victor potrafił być naprawdę głośny, uspokajał się, gdy dostawał posiłek.<br><br><li><b>Nieznacznie zwiększa</b> zasięg wrzasków Victora.</li>","name":"Kwaśne mleko","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"Drewniana figurka, która zwróciła uwagę małego Victora. Piszczał, aż matka ukradła ją z targu, niemal zdradzając ich przykrywkę.<br><br><li>Wyświetla docelową lokalizację Skoku.</li>","name":"Figurka kota","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"Rękawiczka należąca kiedyś do matki Bliźniąt. W trudnych chwilach zasłaniała usta Victora, żeby był cicho.<br><br><li><b>Umiarkowanie zwiększa</b> zasięg wrzasków Victora.</li>","name":"Rękawiczka Madeleine","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"Przewrócony przez Victora kandelabr. W wywołanym pożarze spłonęli prześladowcy rodzeństwa. To symbol uporu chłopca.<br><br><li><b>Nieznacznie wydłuża</b> czas potrzebny ocalałemu na zgniecenie Victora.</li>","name":"Ceremonialny kandelabr","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"Gałka oczna, która należała do kota zjedzonego przez głodującą rodzinę Deshayes. Victor ukrył ją przed matką i traktował jak zabawkę.<br><br><li>Wrzaski Victora cichną po pełnym naładowaniu Skoku.</li>","name":"Kocie oko","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"Kaptur jednego z mężczyzn, którzy polowali na Charlotte. Szybko sam stał się ofiarą.<br><br><li><b>Nieznacznie skraca</b> czas potrzebny na wybudzenie Charlotte z uśpienia.</li>","name":"Zakrwawiony czarny kaptur","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"Dwa zęby, które wypadły Victorowi dawno temu. Są niezwykle ostre.<br><br><li>Ocalali, którzy zrzucą Victora, otrzymują efekt Oślepienie na <b>15 sekund.</b></li>","name":"Zęby mleczne","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"Tandetnie wyrzeźbiona grzechotka, za którą Victor płakał, dopóki matka jej dla niego nie ukradła. Jest zdecydowanie zbyt ciężka, żeby powierzyć ją dziecku.<br><br><li>Ocalali, którzy zrzucą Victora, otrzymują efekt <b>Okaleczony</b> na <b>20 sekund.</b></li> ","name":"Ciężka grzechotka","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"Twarde, niezakwaszone ciastko, które Madeleine ukradła z targu. Niewielkie, ale lepsze niż większość posiłków.<br><br><li><b>Nieznacznie skraca</b> czas odnowienia Skoku.</li>","name":"Czerstwe ciastko","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"Odrażająca, lepka mikstura, która pokrywała rodzeństwo Deshayes podczas próby ucieczki przez miejskie kanały.<br><br><li><b>Nieznacznie wydłuża</b> czas potrzebny ocalałemu na zrzucenie Victora.</li>","name":"Szlam ściekowy","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"Zardzewiała igła","name":"Zardzewiała igła","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"Ubranie, które Madeleine miała na sobie krótko przed śmiercią. Bliźnięta zachowały je na pamiątkę.<br><br><li><b>Nieznacznie zwiększa</b> prędkość Victora.</li><br>","name":"Szalik Madeleine","flavor":"\\\\„...zostaje niniejszym uznane za uczynek mający na celu dążenie do większego dobra i eksterminacji zła”. – Śledztwo w sprawie śmierci Madeleine Deshayes","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"Zabawkowy żołnierzyk, którego Victor używał, kiedy się bał. Było w nim coś, co wywoływało zazdrość u Charlotte.<br><br><li>Aura ocalałego, który zgniecie Victora podczas jego nieaktywności, zostaje ujawniona na <b>6 sekund.</b></li><br>","name":"Żołnierzyk Victora","flavor":"„Kch--kch—U… Umrzyć złych ludzi…” – Victor Deshayes","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"Drewniany bączek, którym Bliźnięta bawiły się wspólnie, chociaż Victor wolał mieć go tylko dla siebie. Nauczył się, że dostaje, co chce, jeśli złapie się mocno i zacznie krzyczeć.<br><br><li>Ocalali upuszczają trzymany przedmiot, gdy wskoczy na nich Victor.</li><br>","name":"Bączek","flavor":"„Cii… Cichutko. Proszę, jest twój”. – Charlotte Deshayes","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"Gulasz ze skradzionych warzyw wymieszanych z mchem i korą, aby stworzyć iluzję najedzenia.<br><br><li><b>Umiarkowanie zwiększa</b> prędkość Victora.</li><br>","name":"Leśny gulasz","flavor":"„Jedz. Jedz, dziecko. Poczujesz się lepiej”. – Madeleine Deshayes","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"Jeden z niewielu luksusów, z którymi Madeleine uciekła od wcześniejszego życia. Ma przyjemny, rozbrajający zapach.<br><br><li>Ocalali w określonej odległości od wrzasków Victora otrzymują efekt <b>Nieświadomy</b>.</li><br>","name":"Kropla perfum","flavor":"„Strzeżcie się przed fałszem wiedźm, wykorzystują one bowiem dobro w ludzkich sercach”. – Historia wiedźm i demonów (1602)","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"Szorstki pasek tkaniny, który pięcioletnia Charlotte wkładała sobie do ust. Pomagał jej nie krzyczeć, gdy łowcy czarownic byli blisko.<br><br><li>Charlotte otrzymuje efekt <b>Niewykrywalny</b> na <b>20 sekund</b> po wybudzeniu się ze stanu nieaktywności.</li><br>","name":"Uciszający materiał","flavor":"„Nie podoba mi się już ta zabawa, mamo…” – Charlotte Deshayes","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"Wisiorek z materiału przypominającego szkło, uformowany z samej Mgły. Widnieje na nim portret Madeleine Deshayes, chociaż w jej wyglądzie jest coś niepokojącego.<br><br><li>Ocalały, który zgniecie Victora podczas jego nieaktywności, otrzyma efekt <b>Narażony</b> na <b>30 sekund.</b></li><br>","name":"Opalizujący wisiorek","flavor":"„Wasze połączenie nie jest klątwą, skarby. To wasza siła!” – Madeleine Deshayes","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"Sakiewka z wieloma ukrytymi kieszeniami. Używana przez ambitnych magików i tych, którzy chcą coś ukryć.<br><li><b>Zwiększ</b> maksymalną liczbę niesionych ostrzy o <b>10</b>.</li><li>Rozpocznij próbę z <b>10</b> dodatkowymi ostrzami.</li>","name":"Sakiewka do sztuczek","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"Pokryte krwią noże, zużyte od nadmiernego korzystania. Ji-Woon posługiwał się nimi podczas pierwszych morderstw, więc mają dla niego wartość sentymentalną.<br><li>Zdobywaj <b>100%</b> dodatkowych Punktów Krwi za wyniki uzyskane przy pomocy <b>Popisu</b>.</li><li><b>Umiarkowanie zwiększa</b> wskaźnik poszarpania każdego ocalałego.</li>","name":"Pamiątkowe ostrza","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"Akordy, dla których Ji-Woon nigdy nie znalazł piosenki. Nadal jednak wpadają w ucho.<br><li><b>Nieznacznie zwiększają</b> prędkość ruchu podczas rzucania ostrzami.</li>","name":"Zabójcze akordy","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"Spalone przewody ze studia, które zabiły czterech z pięciu członków NO SPIN. Z ich śmierci zrodził się Magik.<br><li><b>Nieznacznie wydłuża</b> czas trwania Gwoździa Programu.</li>","name":"Piekielne kable","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"Napój wymyślony w skromnym barze Changwon. Szybko stał się ulubionym trunkiem Ji-Woona.<br><li><b>Umiarkowanie wydłuża</b> czas trwania Gwoździa Programu.</li>","name":"Księżycowa tequila","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"Undergroundowy singiel wyprodukowany przez Ji-Woona, zanim ten stał się sławny. Tylko najwięksi fani NO SPIN posiadali tę perełkę.<br><li><b>Nieznacznie wydłuża</b> czas upływający do chwili, gdy zacznie maleć miernik poszarpania.</li>","name":"Trafiony singiel","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"Pierwszy nóż do rzucania należący do Ji-Woona. Kupił go jego ojciec z zamiarem zrobienia pokazu dla gości rodzinnej restauracji.<br><li><b>Nieznacznie zwiększa</b> czas zepsucia miernika poszarpania każdego ocalałego po wyczerpaniu ostrzy.</li>","name":"Szczęśliwe ostrze","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"Autograf gwiazdy znanej jako Magik. Choć jego nadgarstek zdrętwiał po wykonaniu setek podpisów, mężczyznę cieszyła taka popularność.<br><li><b>Nieznacznie zwiększa</b> początkową prędkość rzucania ostrzami.</li>","name":"Autograf Ji-Woona","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"Buty, które Ji-Woon nosił w teledysku do „One Caged Heart”. Umożliwiają płynne i zgrabne ruchy w tańcu.<br><li><b>Umiarkowanie zwiększają</b> prędkość ruchu podczas rzucania ostrzami.</li>","name":"Buty z „One Caged Heart”","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"Zegarek kieszonkowy noszony przez Ji-Woona w trakcie wykonywania „I’ll Be Waiting for You”. To rekwizyt, który nie działa i nigdy nie będzie działał.<br><li><b>Znacznie wydłuża</b> czas trwania zepsucia wskaźnika poszarpania każdego ocalałego po wyczerpaniu ostrzy.</li>","name":"Zegarek z „Waiting for You”","flavor":"„Nie odchodź<br>Nie mów, że to koniec już<br>Nie uciekniesz<br>Będę czekał tu”<br>– NO SPIN, „I’ll Be Waiting for You”","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"Bransoletka noszona przez Ji-Woona w teledysku „Ripper”. Choć nie jest to zamierzone, jej konstrukcja stabilizuje nadgarstek lepiej niż niejedna taśma medyczna.<br><li><b>Umiarkowanie wydłuża</b> czas upływający do chwili, gdy zacznie maleć miernik poszarpania.</li>","name":"Bransoletka z „Rippera”","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"Plik dźwiękowy z głośnym i wyraźnym jękiem ofiary. Ji-Woon dołączył te odgłosy do jednego ze swoich popularnych utworów.<br><li><b>Umiarkowanie zmniejsza</b> wskaźnik poszarpania każdego ocalałego.</li>","name":"Melodyjne morderstwo","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"Napój w limitowanej puszcze promującej NO SPIN. Wysoka zawartość cukru i kofeiny.<br><li><b>Umiarkowanie zwiększa</b> początkową prędkość rzutu.</li>","name":"Napój Fizz-Spin","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"Szal boa, który Ji-Woon owinął wokół poderżniętego gardła ofiary. Skrywa wiele kieszeni.<br><li><b>Zwiększ</b> maksymalną liczbę niesionych ostrzy o <b>15</b>.</li><li>Rozpocznij próbę z <b>15</b> dodatkowymi ostrzami.</li>","name":"Zakrwawiony szal","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"Specjalne ostrza, które tylko ludzie bez wyobraźni uważają za uszkodzone. Młody Ji-Woon oczarowywał widzów swoimi sztuczkami.<br><li>Ostrza odbijają się od przedmiotów dwa razy. <li><li>Uderzenia rykoszetem dają dodatkowe Punkty Krwi.</li>","name":"Ostrza do sztuczek","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"Debiutancki album Magika. Surowy i złowrogi ton był różnie odbierany przez fanów mimo uznania krytyków.<br><li>Ostrza roztrzaskują się po uderzeniu w przedmiot i zadają pobliskim ocalałym <b>50% poszarpania</b>.</li>","name":"Album „Edge of Revival”","flavor":"„Twój ciepły oddech<br>I cichy szept<br>Palą mnie z mocą<br>Odbierając dech”<br> – Magik, „Whispers of Warmth”","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"Spinki do mankietów wbite w oczy psychofana, który popełnił błąd i śledził Ji-Woona. Po wytarciu krwi można zobaczyć ich niezwykły blask.<br><li>Gdy na wskaźniku poszarpania ocalałego do poziomu maksymalnego brakuje jednego trafienia ostrzem, aura ofiary zostaje odkryta na <b>6 sekund</b>.</li>","name":"Diamentowe spinki","flavor":"„Ciii… Nie musisz już patrzeć na swoją krew”. – Ji-Woon Hak","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"Pierwszy singiel NO SPIN po dołączeniu Ji-Woona. Sięgnął szczytu koreańskich list przebojów.<br><li>Ostrza przebijają ocalałych.</li><li>Kolejni ocalali trafieni tym samym ostrzem otrzymują <b>50% poszarpania</b>.</li>","name":"Singiel „Cut Thru U”","flavor":"„Przed siłą miłości<br>Nie ocalisz serca<br>Moje wielkie uczucie<br>Będzie jak morderca”<br>– NO SPIN, „Cut Thru U”","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"Zdjęcie przypominające szkło, uformowane z Mgły. Holograficzne oczy Ji-Woona błyszczą na jego wyszczerzonej twarzy.<br><li>Gdy na wskaźniku poszarpania ocalałego do poziomu maksymalnego brakuje jednego trafienia ostrzem, ocalały otrzymuje status <b>Narażony</b>.</li>","name":"Opalizujące zdjęcie","flavor":"„W porządku, krzycz moje imię. Chcę usłyszeć wszystko, co budzi w tobie ból…” – Ji-Woon Hak","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"Kolekcja ostatnich odgłosów wydawanych przez ofiary Ji-Woona, nagrana na winylu. Przerażająca i przytłaczająca.<br><li>Poszarpanie spowodowane ostrzami zależy od odległości od celu. Minimalna wartość to <b>50%</b>.</li><li>Każde trafienie ostrzem zwiększa poszarpanie, ale nie bardziej niż do <b>200%</b>.</li><li>Po spudłowaniu poszarpanie spowodowane ostrzami jest resetowane do początkowej wartości.</li>","name":"Kompilacja odgłosów agonii","flavor":"„Proszę, nie… Nie chcę, żeby bolało… Nie mogę… Ja…” – Niezidentyfikowany głos","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"Elektroniczna opaska Umbrella dla gości ośrodka. Działa też jako urządzenie śledzące.<li><b>Umiarkowanie zwiększa</b> zasięg wykrywania zombie.</li>","name":"Opaska dla gości","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"Zbiór wiedzy S.T.A.R.S. na temat walki bezpośredniej. Pod redakcją Chrisa Redfielda.<li>Aury zombie podświetlają się na żółto przez <b>6 sekund</b> po trafieniu ocalałego.</li>","name":"Podręcznik walki S.T.A.R.S.","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"Sprzęt medyczny, który nie sprawdził się podczas chaosu ogarniającego Raccoon City.<li><b>Umiarkowanie wydłuża</b> czas potrzebny ocalałemu na przyjęcie szczepionki.</li><li><b>Nieznacznie wydłuża</b> czas efektu Instynkt Zabójcy po użyciu szczepionki przez ocalałego.</li>","name":"Uszkodzona strzykawka","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"Jelito cienkie Briana Ironsa – szefa RPD. Apetyczny kąsek dla zombie.<li><b>Nieznacznie zwiększa</b> prędkość ruchu zombie.</li>","name":"Jelito Briana","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"Serce wypatroszonego zombie. Jest uznawane za niebezpieczny odpad i z pewnością roi się od wirusów.<li><b>Umiarkowanie zwiększa</b> prędkość mutacji po zniszczeniu zombie Uderzeniem Macki.</li><br>","name":"Serce zombie","flavor":"„Słowa nic tu nie dadzą”. – Leon S. Kennedy","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"Choć z Mikhaila nie zostało wiele, jego lewa gałka oczna przetrwała eksplozję. Jest teraz smaczną przekąską dla zombie.<li><b>Umiarkowanie zwiększa</b> prędkość ruchu zombie.</li>","name":"Oko Mikhaila","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"Skażona krew policjanta z Raccoon City.<li><b>Umiarkowanie zwiększa</b> prędkość mutacji po trafieniu ocalałego Uderzeniem Macki.</li><br>","name":"Krew Marvina","flavor":"„Musisz tylko pamiętać, że to miejsce pożre cię żywcem, jeśli nie zachowasz ostrożności”. – Marvin Branagh","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"Hormon, który wyostrza zmysły i przygotowuje ciało do walki.<li><b>Znacznie wydłuża</b> czas trwania efektu Instynkt Zabójcy, gdy ocalali używają szczepionki.</li>","name":"Zastrzyk adrenaliny","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"Elektroniczna opaska Umbrella dla administratorów ośrodka. Daje dostęp do chronionych obszarów, ale działa też jako urządzenie śledzące.<li><b>Znacznie zwiększa</b> zasięg wykrywania zombie.</li>","name":"Opaska administratora","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"Uszkodzona próbka Tyrana T-002, który zginął w walce. Widać na niej ślady poważnych oparzeń.<li><b>Umiarkowanie zwiększa</b> prędkość mutacji po zniszczeniu zombie Uderzeniem Macki.<li>Umiarkowanie skraca czas odradzania zombie.","name":"Krew Tyrana","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"Próbka wirusa T stworzonego przez Umbrella Corporation. Wywołuje skrajne mutacje i uszkodzenia mózgu,<li><b>Znacznie zwiększa</b> prędkość mutacji po zniszczeniu zombie Uderzeniem Macki. ","name":"Próbka wirusa T","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"Hormon, który delikatnie rozluźnia użytkownika, gdy potrzebne jest ukrycie się.<li>Zdobądź efekt <b>Niewykrywalny</b> na <b>15 sekund</b> po zniszczeniu zombie.</li>","name":"Zastrzyk serotoniny","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"Poplątane pozostałości rośliny zarażonej wirusem T. Zabiła jednego z badaczy, którzy ją stworzyli.<li><b>Znacznie wydłuża</b> czas potrzebny ocalałym na otwieranie skrzyń z zapasami.","name":"Pnącza sadzonki 43 ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"Lepki i chwytny język, które z łatwością owija się wokół wszystkiego, czego dotknie.<li><b>Umiarkowanie wydłuża</b> czas trwania <b>skrępowania</b> ocalałych po skażeniu.</li><br>","name":"Język lizacza","flavor":"„To jak… koszmar”. – Claire Redfield","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"Pasożyt używany przy tworzeniu typów T Nemesis. Potrafi przejąć kontrolę nad mózgiem żywiciela.<li>Po otrzymaniu efektu skażenia ocalali otrzymują również efekt <b>Nieświadomy</b> na 60 sekund.","name":"Pasożyt NE-α","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"Jest okropnie zgnieciona i ocieka krwią po ostatniej walce. Mimo to ma przepyszny aromat.<li>Pokazuje aury ocalałych przez <b>12 sekund</b> po odblokowaniu przez nich skrzyni z zapasami.</li>","name":"Kanapka Jill","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"Kto ich teraz ocali? W tej pustej taśmie do maszyny do pisania jest coś, co napędza zombie.<li><b>Znacznie skraca</b> czas odradzania zombie.</li><li>Umiarkowanie zwiększa prędkość ruchu zombie.</li><li>Gdy <b>5</b> generatorów jest w naprawie, pokonane zombie odradzają się w obszarze wyjściowym.</li><br>","name":"Wyczerpana taśma z atramentem","flavor":"„Dla jasności… Robię to, cholera, ostatni raz”. – Jill Valentine","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"Żeton przedstawiający ptaka otoczonego wieńcem laurowym. Pęknięty na pół.<li>Usuwa <b>1</b> skrzynię z zapasami z próby.</li><br>","name":"Złamany żeton","flavor":"„Nie tak wyobrażałem sobie swój pierwszy dzień”. – Leon. S Kennedy","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"Symbol nadziei dla Raccoon City – doszczętnie zniszczony.<li><b>Ogromnie zwiększa</b> prędkość ruchu zombie na <b>30 sekund</b> po naprawie generatora.</li><br>","name":"Zniszczona odznaka S.T.A.R.S.","flavor":"„S.T.A.R.S…” – Nemesis","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"Przypominająca szkło forma stworzona z samej Mgły. Reprezentuje korporację, która posunęła się daleko poza granice etycznej i humanitarnej nauki.<li>Ocalali otrzymują efekt <b>Narażony</b> na <b>12 sekund</b> po skorzystaniu ze szczepionki.</li><br>","name":"Opalizująca odznaka Umbrella","flavor":"„Oddanie, szczerość, uczciwość. Oto główne wartości tworzące podstawy Umbrella Corp”. – Dr Matt Gorkis","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/pl/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Zapewnia <b>50%</b> dodatkowych Punktów Krwi w kategorii Brutalność.<br><li>Łączy się.</li>","name":"Wieniec Pirangi","flavor":"„Ten wieniec, stworzony z krwawych patyków oraz wnętrzności, prosi Byt o więcej krwi”.","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"Zapewnia <b>75%</b> dodatkowych Punktów Krwi w kategorii Brutalność.<br><li>Łączy się.</li>","name":"Gorliwy Wieniec Pirangi","flavor":"„Ten wieniec, stworzony z krwawych patyków oraz wnętrzności, prosi Byt o więcej krwi”.","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"Zapewnia <b>100%</b> dodatkowych Punktów Krwi w kategorii Brutalność.<br><li>Łączy się.</li>","name":"Gorejący Wieniec Pirangi","flavor":"„Ten wieniec, stworzony z płomienną, nieśmiertelną pasją, prosi Byt o więcej krwi”.","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"Zapewnia <b>50%</b> dodatkowych Punktów Krwi w kategorii Przebiegłość.<br><li>Łączy się.</li>","name":"Kruczy Wieniec","flavor":"„Ten wieniec, stworzony z przypalonych gałązek i węgielków, prosi Byt o więcej krwi”.","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"Zapewnia <b>75%</b> dodatkowych punktów w kategorii Przebiegłość.<br><li>Łączy się.</li>","name":"Gorliwy Wieniec Kruka","flavor":"„Ten wieniec, stworzony w pocie czoła ze sczerniałych gałęzi i węgla, prosi Byt o więcej krwi”.","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"Zapewnia <b>100%</b> dodatkowych Punktów Krwi w kategorii Przebiegłość.<br><li>Łączy się.</li>","name":"Gorejący Wieniec Kruka","flavor":"„Ten wieniec, stworzony z płomienną, nieśmiertelną pasją ze sczerniałych gałęzi oraz węgla, prosi Byt o więcej krwi”.","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"Zapewnia <b>50%</b> dodatkowych Punktów Krwi w kategorii Polowanie.<br><li>Łączy się.</li>","name":"Wieniec Puszczyka Plamistego","flavor":"„Ten wieniec, stworzony z ostrych kawałków metalu, lin oraz piór, prosi Byt o więcej krwi”.","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"Zapewnia <b>75%</b> dodatkowych Punktów Krwi w kategorii Polowanie.<br><li>Łączy się.</li>","name":"Gorliwy Wieniec Cętkowanej Sowy","flavor":"„Ten wieniec, stworzony w pocie czoła z ostrych metali, sznurów oraz piór, prosi Byt o więcej krwi”.","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"Zapewnia <b>100%</b> dodatkowych Punktów Krwi w kategorii Polowanie.<br><li>Łączy się.</li>","name":"Gorejący Wieniec Puszczyka Plamistego","flavor":"„Ten wieniec, stworzony z płomienną, nieśmiertelną pasją z ostrego metalu, lin i piór, prosi Byt o więcej krwi”.","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"Zapewnia <b>50%</b> dodatkowych Punktów Krwi w kategorii Ofiara.<br><li>Łączy się.</li>","name":"Sroczy Wieniec","flavor":"„Ten wieniec, stworzony z patyków, sznurków i kości, prosi Byt o więcej krwi”.","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"Zapewnia <b>75%</b> dodatkowych Punktów Krwi w kategorii Ofiara.<br><li>Łączy się.</li>","name":"Gorliwy Wieniec Sroki","flavor":"„Ten wieniec, stworzony w pocie czoła z patyków, nici oraz kości, prosi Byt o więcej krwi”.","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"Zapewnia <b>100%</b> dodatkowych Punktów Krwi w kategorii Ofiara.<br><li>Łączy się.</li>","name":"Gorejący Wieniec Sroki","flavor":"„Ten wieniec, stworzony z płomienną, nieśmiertelną pasją z patyków, nici oraz kości, prosi Byt o więcej krwi”.","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"Zapewnia <b>25%</b> dodatkowych Punktów Krwi we wszystkich kategoriach.<br><li>Łączy się.</li>","name":"Dziurawa muszla","flavor":"„Niezindetyfikowany kokon, rozerwany przez coś, co wyszło ze środka”.","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"Zapewnia <b>100%</b> premii do Punktów Krwi we wszystkich kategoriach.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Pudding Ocalałego","flavor":"„Przesolony pudding…”","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"Prosi Byt o to, by zapobiegł pojawieniu się <b>2</b> skrzyń.<br><li>Łączy się.</li>","name":"Przecięta moneta","flavor":"„Dwie połówki grubej, metalowej monety”.","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"Prosi Byt, aby ten zapobiegł pojawieniu się <b>jednej</b> ze skrzyń.<br><li>Łączy się.</li>","name":"Porysowana Moneta","flavor":"„Zniszczona moneta nieznanego pochodzenia”.","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"Wzywa Byt, aby <b>delikatnie zmniejszył</b> <b>odległość</b> pomiędzy hakami ofiarnymi pojawiającymi się w świecie.<br><li>Łączy się.</li>","name":"Spleśniały Dąb","flavor":"„Wilgotny i rozkładający się kawałek dębu pokryty pleśnią”.","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"Wzywa Byt, aby <b>umiarkowanie zwiększył</b> <b>odległość</b>pomiędzy hakami ofiarnymi pojawiającymi się w świecie.</li>","name":"Zgniły Dąb","flavor":"„Rozkładający się kawał dębu, na którym wyryto dziwne znaki”.","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"Wzywa Byt, aby <b>znacznie zmniejszył odległość</b>pomiędzy hakami ofiarnymi pojawiającymi się na mapie.<br><li>Łączy się.</li>","name":"Przegniły dąb","flavor":"„Zniszczony kawałek dębu nasączony czarną, gnijącą cieczą”.","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"Zapewnia możliwość <b>własnoręcznego zabicia ostatniego ocalałego</b> w trakcie meczu.<br><li>Sekret.</li><br><span class=\\"FlavorText\\">„Dobrze się spisałeś, ostatni jest twój”.","name":"Cyprysowe Memento Mori","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"W kolejnej próbie daje możliwość <b>zabicia jednego ocalałego</b>, który osiągnął <b>drugą fazę zawieszenia na haku</b> z twojej ręki.<br><li>Tajemnica.</li><span class=\\"FlavorText\\">„Pozwól mi zabić jednego z nich”.</span>","name":"Memento Mori z Kości Słoniowej","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"W kolejnej próbie daje możliwość <b>zabicia wszystkich ocalałych</b>, którzy osiągnęli <b>drugą fazę zawieszenia na haku</b> z twojej ręki.<br><li>Tajemnica.</li><span class=\\"FlavorText\\">„Mógłbym przysiąc, że to przemówiło do bestii. Zatrzymała się, jakby spokojnie słuchała szelestu liści, a potem… uśmiechnęła się”.</span>","name":"Hebanowe Memento Mori","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"Wszyscy Ocalali zaczynają mecz oddzielnie.<br><li>Sekret.</li>","name":"Całun Rozdzielenia","flavor":"„Cienki, czarny całun, który rozpada się na kawałki”.","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/pl/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Wyzwala potencjał odczytywania aury. Za każdym razem, gdy generator zostanie w pełni naprawiony, aury Ocalałych w zasięgu <span class=\\"Highlight1\\">{0} m</span> od tego generatora stają się dla ciebie widoczne przez <span class=\\"Highlight2\\">{1} s</span>.<br>Wraz z aktywacją bram wyjściowych, aury Ocalałych stają się dla ciebie widoczne przez <span class=\\"Highlight3\\">{2} s</span>.","name":"Gorzki Szmer","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"Wyzwala potencjał odczytywania aury. Dostrzegasz aury Ocalałych znajdujących się w stanie agonii w promieniu <span class=\\"Highlight1\\">{0} m</span> od ciebie.","name":"Tropiciel","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"Twoja przeraźliwa obecność emanuje na nienaturalnie dużym obszarze. Twój zasięg terroru jest zwiększony o <span class=\\"Highlight1\\">{0}%</span>. Zyskujesz <span class=\\"Highlight2\\">{1}%</span> więcej Punktów Krwi za wykonywanie działań w kategorii Przebiegłość. <br>","name":"Niepokój","flavor":"„Pław się w blasku ich przerażenia”.","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"Odblokowuje zdolność ukrywania się. Stojąc nieruchomo przez <span class=\\"Highlight1\\">{0} s</span>, otrzymujesz efekt <b>Niewykrywalny</b> do momentu, gdy ponownie się poruszysz lub wykonasz jakąkolwiek czynność.","name":"Podstępność","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"Klątwa czerpiąca swą moc z nadziei. Ożywia cię moc przeklętego totemu, gdy Ocalali są bliscy ucieczki.<br>Kiedy zasilanie bram wyjściowych zostaje przywrócone, a na mapie wciąż znajduje się zwykły totem, obejmie go ta klątwa.</br><br>Gdy klątwa jest aktywna:<li>Ocalali otrzymują efekt <b><i>Narażenie</i></b></li><li>twoja prędkość ruchu zostaje zwiększona o <span class=\\"Highlight1\\">{0}%</span>.</li><br><i>Efekty klątwy utrzymują się, dopóki związany z nią przeklęty totem nie zostanie zniszczony.</i><br>","name":"Klątwa: Nikt nie ucieka śmierci","flavor":"„I oto bestia stała się szybsza, potężniejsza, jak gdyby cieniste bicze Bytu smagały ją po plecach”.","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"Siła klątwy pochodzi z nadziei. Fałszywa nadzieja Ocalałych wypełnia cię ekscytacją i wzmacnia twoje totemy. Za każdy totem pozostały na mapie otrzymujesz żeton.<br><li>Otrzymuj <span class=\\"Highlight1\\">{0}%</span> więcej Punktów Krwi w kategorii Polowanie za każdy zdobyty żeton.</li><li>Za każdy żeton, który udało ci się zdobyć, prędkość niszczenia totemów przez Ocalałych jest zmniejszona o <span class=\\"Highlight2\\">{1}%</span>.</li><li>Otrzymuj powiadomienie za każdym razem, gdy ktoś zaczyna niszczyć przeklęty totem.</i>","name":"Klątwa: Dreszcz Polowania","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"Twoja żarliwa troska o haki znalezione w piwnicy wzbudziła zainteresowanie Bytu. Haki znajdujące się w piwnicy otrzymują następujące bonusy:<br><li>o <span class=\\"Highlight1\\">{0}%</span> szybsza progresja Bytu</li><li>o <span class=\\"Highlight2\\">{1}%</span> zwiększona trudność przy próbach samodzielnej ucieczki z haka</li><li>o <span class=\\"Highlight3\\">{2}%</span> zwiększona kara za nieudaną próbę samodzielnej ucieczki z haka.</li>","name":"Potworna Świątynia","flavor":"„Wtedy będziesz wiedzieć, że nie ma ucieczki. Wisząc w głębinach, stawiasz czoło mrocznemu”.","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"Wiesz, gdzie uderzyć, aby zaczęli krwawić. Rany wywołane udanymi <i>podstawowym atakami</i> wywołują efekty <b>Zmasakrowany</b> i <b>Krwotok</b>. <b>Krwotok</b> <span class=\\"Highlight\\">{0}</span> zwiększa częstotliwość krwawienia ocalałego.<br>Efekt <b>Krwotok</b> spowodowany przez <i>Niechlujnego Rzeźnika</i> jest usuwany, gdy ocalały zostanie całkowicie uleczony.","name":"Niechlujny Rzeźnik","flavor":"„To tkwi w jego sadystycznej naturze. Nie zadowala się szybkim zabójstwem, gdyż zachwyca go oglądanie plugawego spektaklu w postaci naszego cierpienia”.","tiers":[["nieznacznie"],["umiarkowanie"],["znacznie"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"Zamieszkujące ten świat kruki potrafią się z tobą bezpośrednio komunikować. Istnieje <span class=\\"Highlight1\\">{0}%</span> szans na to, że otrzymasz wskazówkę wizualną, kiedy kruki w promieniu <span class=\\"Highlight2\\">{1} m</span> od ciebie wzbiją się w powietrze.<br><i>Szpiedzy z Cienia</i> odnawiają się przez <span class=\\"Highlight3\\">{2} s</span>. ","name":"Szpiedzy z Cienia","flavor":"„Dręczą nas w cieniu, naznaczając nasze umysły z każdym krzykiem”.","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"Jeśli wykonasz chybiony atak główną bronią, odzyskasz siły szybciej niż normalnie. Wykonanie kolejnego <i>podstawowego ataku</i> po chybieniu jest możliwe o <span class=\\"Highlight1\\">{0}%</span> szybciej.","name":"Bezlitosny","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"Posiadasz zdolność podstawowego rozumienia głosu Bytu. Sporadycznie słyszysz szept Bytu informujący cię o obecności Ocalałego w odległości do <span class=\\"Highlight1\\">{0} m</span>.<br>","name":"Szepty","flavor":"„Nie jest do końca jasne, jakie są intencje Mgły, ale nie ulega wątpliwości, że często stoi ona po stronie bestii”. – Notatnik","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"Potrafisz wyczuć oddech swych ofiar. Oddech Ocalałych w stanie krytycznym jest głośniejszy o <span class=\\"Highlight1\\">{0}%</span>, a ich zwykły oddech jest głośniejszy o <span class=\\"Highlight2\\">{1}%</span>.<br>","name":"Jęki","flavor":"„Jeśli się nie zatrzymasz i nie złapiesz oddechu… ona to zrobi”.","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"Ich odwaga blednie w obliczu niezaprzeczalnej śmiertelności.<br>Za każdego ocalałego, który jest ranny, umierający lub zawieszony na haku, wszyscy ocalali otrzymują karę <span class=\\"Highlight1\\">{0}%</span> do prędkości naprawy, sabotażu i oczyszczania totemów (maksymalnie <span class=\\"Highlight1\\">{1}%</span>).","name":"Tanatofobia","flavor":"„Droczy się z nami i pławi się w naszym bólu”.","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"Wyzwala potencjał odczytywania aury. Dostrzegasz aury Ocalałych, którzy leczą się bądź są leczeni w zasięgu <span class=\\"Highlight1\\">{0} m</span> od ciebie.<br>","name":"Wezwanie Pielęgniarki","flavor":"„Wciąż przywiązana do fragmentów z jej dawnego życia, przybywa do tych, którzy potrzebują jej pomocy”.","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"Sama twoja obecność wywołuje wielki strach. Ocalali w zasięgu twojego terroru mają o <span class=\\"Highlight1\\">{0}%</span> więcej szans na uaktywnienie testu umiejętności podczas naprawy lub leczenia. Te testy umiejętności mają paski sukcesu zmniejszone o <span class=\\"Highlight2\\">{1}%</span>.","name":"Niepokojąca Obecność","flavor":"„Sama tego obecność nas przytłacza”.","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"Twoja wielka siła pozwala ci przebijać się przez osłony twych ofiar. Niszczysz <b>zrzucone palety, ściany i uszkadzasz generatory</b> <span class=\\"Highlight1\\">{0}%</span> szybciej.","name":"Brutalna Siła","flavor":"„To nie tylko mięśnie. Mroczna siła motywuje bestię”.","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"Nie możesz się doczekać, aż powiesisz swą zdobycz. Zwiększa prędkość transportowania Ocalałych na ramieniu o <span class=\\"Highlight1\\">{0}%</span> oraz zasięg terroru o <span class=\\"Highlight2\\">{1} m</span>.<br>","name":"Ekscytacja","flavor":"„W pewnym momencie ekscytacja związana z powieszeniem jednego z nas staje się ważniejsza niż pragnienie pozbawienia nas życia”.","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"Twoje niebywałe zdolności tropicielskie pozwalają ci skupić swoją uwagę na śladach biegających Ocalałych.<br>Czerwone Zarysowania zostawiane przez Ocalałych będą się pojawiać <span class=\\"Highlight\\">{0}</span> bliżej siebie.<br>","name":"Drapieżnik","flavor":"„Nigdy nie przestawaj się ruszać i módl się, abyś był zawsze dwa kroki przed bestią”. – Notatnik","tiers":[["nieznacznie"],["umiarkowanie"],["znacznie"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"Wyczuwasz krew z daleka niczym myśliwski pies gończy. Świeże ślady krwi stają się <span class=\\"Highlight1\\">znacznie</span> łatwiejsze do zauważenia i mogą być śledzone przez <span class=\\"Highlight2\\">{0} s</span> dłużej niż normalnie.<br>","name":"Pies Gończy","flavor":"„Kamienie błyszczą w świetle księżyca; życie wypływa ze mnie strugą, za którą tak łatwo podążyć”.","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"Dobrze widzisz w ciemności. Twoje pole widzenia jest o <span class=\\"Highlight2\\">{0}°</span> większe niż normalnie.<br><i>Nie łączy się z innymi premiami do pola widzenia.</i><br>","name":"Zrodzony w Cieniu","flavor":"„Błyszcząc w nieprzeniknionych ciemnościach, jego wzrok przebija noc i osacza twoją duszę”.","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"Jesteś odporny na ból. Oszołomienie jest o <span class=\\"Highlight1\\">{0}%</span> krótsze.","name":"Wytrzymały","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"Inaczej niż innym bestiom z Mgły, tobie udało się przystosować do światła. Otrzymujesz odporność na oślepienie spowodowane latarkami, petardami, granatami błyskowymi i minami. Aury ocalałych, którzy próbują cię oślepić, zostają ujawnione na <span class=\\"Highlight1\\">{0} s.</span>","name":"Zrodzony w Świetle","flavor":"„Te potwory… One się przystosowują! Zdobywają dziwne nowe zdolności”. – Dziennik Viga","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"Gdy postęp naprawy generatora wyniesie <span class=\\"Highlight1\\">{0}%</span>, usłyszysz głośne powiadomienie i otrzymasz efekt <b>Niewykrywalny</b> na <span class=\\"Highlight2\\">{2} s</span>.","name":"Majsterkowicz","flavor":"„Wieśniak tworzy imponujące narzędzia ze śmieci. Może nas nimi okaleczać na wyjątkowo twórcze sposoby…” – Notatnik","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"Jeden z ocalałych staje się twoją <b>obsesją</b>.<br>Otrzymujesz żeton za każdy udany <i>podstawowy atak</i>, którego celem nie jest obsesja. <br>Każdy kolejny żeton skraca o <span class=\\"Highlight1\\">{0}%</span> czas odnawiania udanego <i>podstawowego ataku</i>; możesz zebrać maksymalnie <span class=\\"Highlight2\\">{1}</span> żetonów.<br>Trafienie obsesji <i>podstawowym atakiem</i> sprawi, że stracisz <span class=\\"Highlight3\\">{2}</span> żetony. <br>Gdy twoja obsesja zostanie poświęcona lub zabita, nie otrzymasz więcej żetonów.<br><li><i>Zabójca w danej chwili może mieć <b>obsesję</b> na punkcie tylko jednego ocalałego.</i></li>","name":"Najlepsze zostaw na koniec","flavor":"„Śmierć zawitała do twojego małego miasteczka, szeryfie”. – Dr Sam Loomis","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"Jeden z ocalałych staje się twoją <b>obsesją</b>.<br>Za każdym razem, kiedy pozwolisz mu przed sobą uciec, otrzymasz żeton, do maksymalnej liczby {0} żetonów.<br>Każdy żeton zwiększa twoją szybkość ruchu o <span class=\\"Highlight1\\">{1}%</span>.<br>Wykonanie <i>podstawowego</i> lub <i>specjalnego ataku</i> zużywa jeden żeton.<br><li><i>Zabójca może mieć <b>obsesję</b> na punkcie jednego ocalałego naraz.</i></li>","name":"Baw Się Swoim Jedzeniem","flavor":"„Oszukałeś ich, prawda, Michael? Ale nie mnie”. – Dr Sam Loomis","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"Jeden z ocalałych staje się twoją <b>obsesją</b>.<br>Twoja obsesja otrzymuje premię <span class=\\"Highlight1\\">{0}%</span> do szybkości czynności przy zdejmowaniu z haka i leczeniu innych ocalałych.<br> Za każdym razem, kiedy powiesisz ocalałego innego niż twoja obsesja, otrzymasz żeton.<br>Jeśli obsesja żyje, każdy inny ocalały otrzymuje <span class=\\"Highlight2\\">{1}%</span> kary do szybkości naprawy, leczenia i sabotażu za każdy żeton.<br><li><i>Zabójca może mieć obsesję na punkcie tylko jednego ocalałego naraz.</i></li>","name":"Umierające Światło","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"Klątwa wpływająca na zdolność odczytywania aury przez Ocalałego. Kiedy totem jest aktywny, udane trafienie Ocalałego <i>podstawowym atakiem</i> skutkuje nałożeniem efektu <b>Ślepoty</b>. Efekt działa na ostatnich <span class=\\"Highlight1\\">{0}</span> trafionych Ocalałych.<br><br><i>Efekt klątwy trwa tak długo, jak długo związany z mocą totem pozostaje nietknięty.</i><span class=\\"FlavorText\\">„Dotknęła twej skóry, nosisz na sobie znak Wiedźmy!”</span>","name":"Klątwa: Trzecia pieczęć","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"Klątwa wpływająca na postęp napraw generatorów wszystkich ocalałych. Wszystkie generatory zostają objęte klątwą <i>Ruina</i>. Gdy generator nie jest naprawiany, natychmiast cofa postęp naprawy generatora z szybkością o wartości <span class=\\"Highlight1\\">{0}%</span> normalnej szybkości.<br><br><i>Efekt klątwy trwa tak długo, jak długo związany z mocą totem pozostaje nietknięty.</i><br>","name":"Klątwa: Ruina","flavor":"„Ciąży na tobie klątwa. Doprowadzi do twej ruiny”.","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"Klątwa czerpie swą siłę z nadziei. Fałszywa nadzieja Ocalałych wzmacnia twój głód. Za każdym razem, kiedy Ocalały zostaje uratowany z haka, a ty znajdujesz się co najmniej <span class=\\"Highlight1\\">24 m</span> od niego, Pożeracz Nadziei otrzymuje jeden <b>Żeton</b>.<br><li><span class=\\"Highlight3\\">2 Żetony</span>: Otrzymujesz <span class=\\"Highlight2\\">{0}%</span> premii do prędkości ruchu na <span class=\\"Highlight3\\">10 s</span> po powieszeniu Ocalałego na haku. <b><i>Pośpiech</i></b> aktywuje się po <span class=\\"Highlight3\\">10 s</span> od powieszenia Ocalałego.</li><li><span class=\\"Highlight3\\">3 Żetony</span>: Na Ocalałych zostaje nałożony efekt <b><i>Narażenia</i></b>.</li><li><span class=\\"Highlight2\\">5 Żetonów</span>: Odblokowuje możliwość własnoręcznego zabicia wszystkich Ocalałych.</li><br><i>Efekt klątwy trwa tak długo, jak długo związany z mocą totem pozostaje nietknięty.</i><br>","name":"Klątwa: Pożeracz Nadziei","flavor":"„Jeśli nic nie zrobisz, będziesz mieć ich krew na rękach. Jeśli ich uratujesz, jej głód wzrośnie”.","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"Sama twoja obecność wywołuje wielki strach. Ocalali znajdujący się w zasięgu terroru cierpią z powodu niewydajności.<br>Ocalali objęci działaniem umiejętności zużywają ładunki swoich przedmiotów <span class=\\"Highlight1\\">{0}%</span> szybciej.<br>","name":"Przytłaczająca Obecność","flavor":"„Cholera! Upuściłem gazę!”","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"Skrupulatność, drobiazgowość, brak litości w działaniu – tak można cię opisać.<br>Kiedy prowadzisz pościg, twój zasięg terroru jest zwiększony o <span class=\\"Highlight1\\">{0} m</span>. Gdy nie prowadzisz pościgu, twój zasięg terroru zmniejsza się o <span class=\\"Highlight2\\">{0} m</span>, a twoje pole widzenia zwiększa się o <span class=\\"Highlight3\\">{1}°</span>.<br><i>Bonusy do pola widzenia nie łączą się.</i><br>","name":"Bestialska Obserwacja","flavor":"„Czas na terapię!” – Doktor","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"Napędza cię nienawiść do postępu.<br>Przeciąż generator, wykonując na nim akcję <b>Uszkodź Generator</b>. Ocalały, który przystąpi ponownie do naprawy generatora, będzie musiał zmierzyć się z <span class=\\"Highlight1\\">ogromnie</span> trudnym testem umiejętności. Niezaliczenie testu spowoduje dodatkową utratę <span class=\\"Highlight2\\">{0}%</span> postępu.<br>Zaliczenie testu umiejętności nie zapewnia żadnego postępu, ale powstrzymuje wybuch generatora.","name":"Przeciążenie","flavor":"„To pułapka. Taka, w którą trzeba wejść…” – Doktor","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"Twoja żądza zabijania jest tak silna, że na chwilę tracisz połączenie z Bytem, przez co zaczynasz się zachowywać w sposób nieprzewidywalny.<br><br>Daje efekt <b>Niewykrywalny</b> po osiągnięciu 1. poziomu Żądzy Krwi. Efekt zostaje usunięty po utracie Żądzy Krwi.<br><br><li>Zyskujesz <span class=\\"Highlight1\\">{0}%</span> więcej Punktów Krwi za działania z kategorii Łowca.</li>","name":"Drapieżna Bestia","flavor":"„Dokąd ona poszła?”","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"Wyzwala potencjał twojego odczytywania aury. Gdy jesteś w odległości co najmniej <span class=\\"Highlight2\\">{1} m</span> od Piwnicy, ukazują ci się na <span class=\\"Highlight1\\">{0} s</span> aury wchodzących do niej Ocalałych.<br><i>Zwierzę Terytorialne</i> może być uaktywnione raz na <span class=\\"Highlight3\\">{2} s</span>.","name":"Zwierzę Terytorialne","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"Klątwa czerpiąca swą moc z desperacji ofiar. Twoje polowanie jest przerażającą pieśnią strachu, która sieje zamęt w umysłach ofiar i sprawia, że są one mniej skupione. Za każdym razem, gdy ocalali nie trafią testu umiejętności podczas naprawy lub leczenia, tracą dodatkowe <span class=\\"Highlight1\\">{0}%</span> postępu. <br>Za każdym razem, gdy powiesisz ocalałego na haku, <i>Kołysanka Łowczyni</i> rośnie w siłę. Wpływa to na ostrzeżenia o teście umiejętności podczas leczenia lub naprawiania:<br><li><b>1 do 4 żetonów:</b> czas pomiędzy pojawieniem się dźwiękowego ostrzeżenia o teście umiejętności i właściwym testem umiejętności jest krótszy.</li><li><b>5 żetonów:</b> całkowity brak ostrzeżenia dźwiękowego o teście umiejętności. </li><br>Klątwa trwa tak długo, jak długo związany z nią totem pozostaje nietknięty.","name":"Klątwa: Kołysanka Łowczyni","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"Twoje brutalne ataki wywołują u ocalałych poważne obrażenia i sprawiają, że nie są oni w stanie wołać o pomoc.<br>Ocalali wprowadzeni w stan agonii twoimi podstawowymi atakami nie są ujawniani innym ocalałym w odległości większej niż <span class=\\"Highlight1\\">{2} m</span>.<br>Ocalali wprowadzeni w stan agonii twoimi podstawowymi atakami czołgają się o <span class=\\"Highlight2\\">{1}% wolniej</span> przez <span class=\\"Highlight3\\">{0} s</span>.<br>W tym czasie ocalali otrzymują efekt <b>Oślepienie</b>.","name":"Nokaut","flavor":"„Wygląda na to, że ten pistolet na nic się już nie przyda. Nie szkodzi. Możemy sobie poradzić starym sposobem… Młotem kowalskim! To znacznie lepszy sposób, bo sprawia, że szybciej umierają”. – Nubbins Sawyer","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"Twoja głęboka więź z Bytem wyzwala potencjał odczytywania aury. Gdy powiesisz Ocalałego, zobaczysz aury wszystkich pozostałych Ocalałych znajdujących się w odległości większej niż <span class=\\"Highlight2\\">{1} m</span> od haka. Będą one widoczne przez <span class=\\"Highlight1\\">{0} s</span>, licząc od momentu powieszenia Ocalałego. Za każdym razem, gdy powiesisz Ocalałego po raz pierwszy na haku, otrzymasz kumulatywny bonus <span class=\\"Highlight3\\">{2}%</span> do wszystkich otrzymywanych Punktów Krwi, aż do maksymalnie <span class=\\"Highlight4\\">{3}%</span>.<br>Dodatkowe punkty są przyznawane po zakończeniu rozgrywki.</li><br>","name":"Barbecue i Chilli","flavor":"\\\\„Nie potrafię nie czerpać przyjemności z zabijania. Istnieją rzeczy, które po prostu musisz robić. Nie oznacza to od razu, że musisz je lubić”. – Drayton Sawyer","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"Twoje okrutne ataki sprawiają, że ocalali upuszczają trzymane przedmioty. Upuszczone przedmioty zostaną pochłonięte przez Byt po <span class=\\"Highlight1\\">{0} s</span>, jeśli nikt ich nie podniesie. <br>Oznacz białą aurą przedmioty na ziemi w odległości <span class=\\"Highlight2\\">{1} m</span>. Aury przedmiotów na ziemi zmieniają kolor na czerwony, dopóki nie pochłonie ich Byt.","name":"Zguba Franklina","flavor":"„Sally, słyszę coś. Zatrzymaj się!” – Franklin","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"Rosnąca obawa, że ofiary mogą uciec, wypełnia cię gniewem i przynosi niespodziewaną motywację. Za każdym razem, gdy ocalały ukończy naprawę generatora, Paląca Potrzeba nabiera mocy. <br><li>Za każdy ukończony generator otrzymujesz kumulatywny bonus <span class=\\"Highlight1\\">{0}%</span> do prędkości podnoszenia, zrzucania, przeskakiwania, uszkadzania generatorów i niszczenia palet do końca próby.</li>","name":"Paląca Potrzeba","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"Jeden z ocalałych staje się twoją <b>obsesją</b>. Za każdym razem, gdy uderzysz obsesję <i>podstawowym atakiem</i>, wydłużasz czas otwarcia bram wyjściowych o <span class=\\"Highlight1\\">{0} s</span> (najwyżej do <span class=\\"Highlight2\\">{1} dodatkowych s</span>).<br>Twoja obsesja nie podlega wpływowi <i>Zapamiętaj mnie.<i></i><br><li>Zabójca może mieć <b>obsesję</b> na punkcie jednego ocalałego naraz.</i></li>","name":"Zapamiętaj Mnie","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"Gdy tylko jedna z bram wyjściowych zostaje otwarta, umiejętność aktywuje się i aury Ocalałych znajdujących się w obrębie wyjść stają się dla ciebie widoczne. <br>Raz na mecz, kiedy <i>Krwawy Strażnik</i> jest aktywny, powieszenie Ocalałego na haku przywoła Byt, który zablokuje oba wyjścia na <span class=\\"Highlight1\\">{0} s</span>, uniemożliwiając całkowicie ucieczkę wszystkim Ocalałym znajdującym się na mapie.","name":"Krwawy Strażnik","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"Twoje pomysłowe ulepszenia haków ostrzegają cię, gdy ktoś przy nich majstruje<br><li>Otrzymujesz powiadomienia, gdy ocalały zaczyna sabotować hak.</li><li>Niosąc ocalałego, widzisz aury innych ocalałych w promieniu <span class=\\"Highlight1\\">{0} m</span> od haka.</li>","name":"Sztuczka Kata","flavor":"„Żadnych wymówek, żadnego matactwa… Żadnego płaczu”. – Amanda Young","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"Wyzwala potencjał twojego odczytywania aury. Wszystkie niszczejące generatory będą otoczone białą aurą. Kiedy niszczenie generatora zostanie przerwane, będzie on podświetlany na żółto przez <span class=\\"Highlight1\\">{0} s</span>.<br>Hałas powstały w trakcie naprawy generatora rozchodzi się na dodatkowe <span class=\\"Highlight2\\">{1} m</span>.<br>","name":"Inwigilacja","flavor":"„Będziesz się zachowywać?” – Amanda Young","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"Kiedy ocalały ratuje sojusznika z haka w odległości co najmniej <span class=\\"Highlight1\\">{0} m</span> od ciebie, <i>Dokonaj wyboru</i> zmusza ratującego do krzyku i nakłada na niego efekt <b><i>Narażenia</i></b>. Efekt trwa przez <span class=\\"Highlight2\\">{1} s</span>.<br><i>Dokonaj wyboru</i> odnawia się przez <span class=\\"Highlight3\\">{2} s</span>. ","name":"Dokonaj Wyboru","flavor":"„Zdziwiłbyś się, jakie narzędzia mogą uratować życie”. – Amanda Young","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"Twój potężny chwyt sprawia, że ucieczka z twojego objęcia staje się dla Ocalałych niemalże niemożliwa. Efekty szamotania się przez Ocalałego zostają zmniejszone o <span class=\\"Highlight1\\">{0}%</span>. Czas potrzebny do wydostania się z twojego uścisku zostaje zwiększony o <span class=\\"Highlight2\\">{1}%</span>.","name":"Żelazny Chwyt","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"Sama twoja obecność wywołuje wielki strach. Ocalali znajdujący się w zasięgu terroru leczą siebie i innych <span class=\\"Highlight1\\">{0}%</span> wolniej.<br>","name":"Koulrofobia","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"Twoja głęboka więź z Bytem zapewnia ci nadludzką siłę. Gdy powiesisz ocalałego na haku, kolejny generator, który uszkodzisz, ulegnie natychmiastowej regresji o <span class=\\"Highlight1\\">{0}%</span>. Normalne cofnięcie postępu naprawy następuje po akcji uszkodzenia generatora.<br>Umiejętność <i>Entliczek-Pentliczek</i> pozostaje aktywna przez <span class=\\"Highlight1\\">{1} s</span> od powieszenia ocalałego na haku.","name":"Entliczek-Pentliczek","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"Przeskakujesz przez obiekty <span class=\\"Highlight1\\">{0}%</span> szybciej niż normalnie.<br>Kiedy przeskoczysz przez obiekt, Byt zablokuje możliwość przeskakiwania przez niego na okres <span class=\\"Highlight1\\">{1} s.</span><br>W ten sposób można zablokować tylko jeden obiekt. Blokada dotyczy tylko Ocalałych. <br>Nie wpływa na palety.","name":"Kpina","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"Każda zniszczona paleta potęguje gniew Bytu.<br>Gdy zniszczysz <span class=\\"Highlight1\\">{0} palety</span>, Byt zniszczy automatycznie kolejną paletę, która cię ogłuszy.<br>Umiejętność nie niweluje stanu ogłuszenia.<br>","name":"Duchowa Furia","flavor":"„Gniew płynie w jej żyłach”.","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"Dwa przeklęte totemy-pułapki pojawiają się na mapie.<br>Gdy jakikolwiek Ocalały zniszczy jeden z totemów, na wszystkich Ocalałych nałożony zostanie efekt <span class=\\"Highlight3\\">Narażenia</span> trwający przez <span class=\\"Highlight1\\">{0} s</span>.<br>Pozostały przeklęty totem zamienia się wtedy w zwykły totem.<br>","name":"Klątwa: Nawiedzona Ziemia","flavor":"„Jej dom został zbezczeszczony”.","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"Jeden z Ocalałych staje się twoją <b>obsesją</b>.<br>Za każdym razem, gdy Ocalali ukończą naprawę generatora, obsesja dostrzega twoją aurę przez okres <span class=\\"Highlight1\\">{0} s</span>.<br>Za każdym razem, gdy Ocalali ukończą naprawę generatora, dostrzegasz położenie wszystkich Ocalałych przez okres <span class=\\"Highlight2\\">{1} s</span>.<br>Gdy Ocalali naprawią wszystkie wymagane generatory, na obsesję zostanie nałożony efekt <span class=\\"Highlight3\\">Narażenia</span> i uzyskasz możliwość <span class=\\"Highlight3\\">zabicia</span> swojej obsesji.<br><li><i>Zabójca może mieć obsesję na punkcie jednego Ocalałego naraz.</i></li>","name":"Uraza","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"Każdy generator w promieniu <span class=\\"Highlight1\\">{0} m</span> naprawiany przez dwóch lub więcej ocalałych zostaje oznaczony żółtą aurą. Gdy generator zostanie podświetlony po raz pierwszy, Dysonans uruchamia głośne powiadomienie przy generatorze. Gdy generator znajdzie się poza zasięgiem lub przestanie być naprawiany przez co najmniej dwóch ocalałych, aura pozostaje widoczna przez kolejne <span class=\\"Highlight2\\">4 sekundy</span>.<br>","name":"Dysonans","flavor":"„Cwaniaki giną. Dbamy o to”. – Legion","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"Niosąc ocalałego, nie otrzymujesz kary w postaci czasu odnawiania za niecelne podstawowe ataki, a trafienie innego ocalałego podstawowym atakiem zatrzymuje licznik czasu szamotania niesionej postaci na <span class=\\"Highlight1\\">{0} s</span>.<br>","name":"Twardy charakter","flavor":"„Nie ma już ucieczki. Jesteśmy w tym zbyt dobrzy”. – Legion","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"Otwierasz szafki o <span class=\\"Highlight1\\">{0}%</span> szybciej.<br><br>Gdy ocalały wychodzi z szafki, otrzymuje efekt Narażony utrzymujący się przez <span class=\\"Highlight1\\">{2} s</span> i krzyczy, co, ujawnia jego lokalizację na <span class=\\"Highlight1\\">{1} s</span>.<br>","name":"Żelazna dziewica","flavor":"„To nie miejsce dla tchórzy”. — Legion","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"Twoje modlitwy przywołują mroczną moc, która zmniejsza szanse ocalałych na przetrwanie. Na początku rozgrywki <span class=\\"Highlight1\\">{0} generatory</span> znajdujące się najdalej od ciebie zostają zablokowane przez Byt na <span class=\\"Highlight1\\">{1} sek</span>.<br>Ocalali nie mogą przez ten czas naprawiać tych generatorów. Wszystkie objęte generatory są podświetlone białą aurą.<br>","name":"Skażona Interwencja","flavor":"„Niech wieść niesie się wśród ludu, że bogowie przeklinają niewiernych”. – Tabliczka Adiris, 3.7","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"Krzyki niewiernych sprawiają, że serce bije ci szybciej.<br>Gdy wprowadzisz ocalałego w stan agonii podstawowym atakiem, inni ocalali, którzy znajdują się w twoim zasięgu terroru, zaczną krzyczeć i ujawnią swoją lokalizację na <span class=\\"Highlight1\\">{0} s</span>.","name":"Zaraźliwy Strach","flavor":"„Strach opanowuje serca niewiernych, którzy płaczą u stóp upadłych”. – Hymn Uwielbienia, 11.4","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"Pokaz twoich mocy tworzy rozprzestrzeniający się wir paniki.<br><br>Wpadasz w obsesję na punkcie jednego ocalałego. Trafienie obsesji <i>podstawowym atakiem</i> przenosi twój zasięg terroru na obsesję na <span class=\\"Highlight2\\">{1} s</span> i ustawia jego promień na <span class=\\"Highlight1\\">{0} m</span>. Na ten czas otrzymujesz efekt <b>Niewykrywalny</b>. <br><br>Ocalały z przekazanym zasięgiem terroru również jest wykrywany wewnątrz zasięgu terroru do innych celów.<br><br><li><i>Zabójca może mieć <b>obsesję</b> wyłącznie na punkcie jednego ocalałego naraz.</i></li><br>","name":"Mroczne Oddanie","flavor":"„A strach opanuje nieposłusznego niewiernego, który bezpodstawnie będzie głosił moje przyjście”. – Tabliczka Adiris, 48.9","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"Twoje zmysły zostają wyostrzone w ciemnym królestwie Bytu.<br><br>Odblokowuje potencjał odczytywania aury. Aury ocalałych wykonujących szybkie akcje w promieniu <span class=\\"Highlight1\\">48 metrów</span> od ciebie zostaną ukazane na <span class=\\"Highlight2\\">{0} sek</span>.<br><br><i>Zamieniam się w słuch</i> można włączyć jedynie co <span class=\\"Highlight3\\">{1} sek</span>.<br>","name":"Zamieniam Się w Słuch","flavor":"„Spokojna głowa, przygotowywałem się do tego całe życie”. – Ghost Face","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"Twoje mroczne zamiary i przebiegłość pobudzają Byt.<br><br>Po podniesieniu ocalałego wszystkie nienaprawione generatory zostają zablokowane przez Byt i nie można ich naprawić przez kolejne <span class=\\"Highlight1\\">{0} sek</span>. Generatory te są oznaczone białą aurą.<br><br><i>Dreszczyk Emocji</i> można aktywować tylko raz na <span class=\\"Highlight2\\">{1} sek</span>.<br>","name":"Dreszczyk emocji","flavor":"„Noc to mój sojusznik – tutaj jest ona nieskończona”. – Ghost Face","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"Jeden z ocalałych staje się twoją <b>obsesją</b>. Czaisz się w cieniu, po kolei eliminując ofiary. Gdy twoja obsesja wisi na haku, <i>tajemny pościg</i> otrzymuje żeton (maksymalnie <span class=\\"Highlight1\\">{0}</span>).<br><br>Każdy żeton zmniejsza twój zasięg terroru podczas pościgu o <span class=\\"Highlight2\\">{1} m</span>.<br><br>Gdy ocalały ratuje obsesję z haka, sam staje się obsesją. Tracisz wszystkie żetony, jeśli obsesja zostanie poświęcona lub zabita.<br><br><li><i>Zabójca może mieć <b>obsesję</b> na punkcie tylko jednego ocalałego naraz. </i></li><br>","name":"Tajemny Pościg","flavor":"„Nawet nie wiesz, co dla ciebie zaplanowałem. Tygodniami będą o tym pisać w gazetach – zadbam o to”. – Ghost Face","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"Twoja mroczna obecność naładowuje powietrze i zakłóca działanie urządzeń.<br><br>Wprowadzanie ocalałych w stan agonii za pomocą <i>podstawowego ataku</i> sprawia, że wszystkie generatory w promieniu <span class=\\"Highlight1\\">{0} m</span> natychmiast eksplodują i psują się. Generatory dotknięte Skokiem Napięcia natychmiast tracą <span class=\\"Highlight2\\">{1}%</span> postępu naprawy.<li><i>Skok Napięcia</i> można aktywować tylko raz na <span class=\\"Highlight3\\">{2} s</span>.</li><br>","name":"Skok Napięcia","flavor":"„Istota wydaje się w niewiadomy sposób wpływać na elektryczność i pobliskie urządzenia elektroniczne”. – Hawkins National Laboratory","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"Niepokój, jaki wzbudzasz, wyczerpuje i osłabia twoje ofiary.<br><br>Podczas naprawiania generatorów ocalali otrzymują efekt <b>Wyczerpania</b>.<br><br>Liczniki istniejących stanów <b>Wyczerpania</b> u ocalałych naprawiających generator zostają wstrzymane na czas trwania nowego efektu, który utrzymuje się jeszcze przez <span class=\\"Highlight2\\">{1} s</span> po zaprzestaniu naprawy.<br>","name":"Osłabienie Woli","flavor":"„Wykazywane przez osobnika zdolności telepatyczne mogą wzbudzać w pobliskich osobach uczucia strachu i zmęczenia”. – Hawkins National Laboratory","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"Twoje związki z innym światem wychodzą na jaw, gdy ofiara usiłuje uciec.<br><br>Za każdym razem, gdy generator zostaje naprawiony, wszystkie okna i obiekty, przez które można przeskoczyć, <span class=\\"Highlight1\\">w promieniu {0} m</span> od niego blokują się dla wszystkich ocalałych na kolejne <span class=\\"Highlight2\\">{1} s</span>.<br><br>Przez ten czas widzisz aurę obiektów zablokowanych przez <i>Bezlitosne Granice</i>.<br>","name":"Bezlitosne Granice","flavor":"„Osobnik wykazuje zdolność wpływania na stan znajdujących się wokół obiektów, zupełnie jakby istniały one w innej formie w alternatywnym wymiarze”. – Hawkins National Laboratory","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"Wyzwala potencjał odczytywania aury. Mentalnie wyczuwasz najważniejsze punkty pola bitwy.<br><br>Pokazane zostają ci aury wszystkich palet, ścian i miejsc przeskoków w odległości <span class=\\"Highlight1\\">{0} m</span>.<br>","name":"Taktyka Zanshin","flavor":"„W sile twojego wroga tkwi słabość”. – Doktryna Renjira 12:5","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"Cierpienie jednostki dotyka innych.<br><br>Po powieszeniu ocalałego na haku wszyscy pozostali ranni ocalali otrzymują efekt <span class=\\"Highlight1\\">Krwawienia</span> oraz efekt <span class=\\"Highlight1\\">Wyczerpany</span> na <span class=\\"Highlight2\\">{0} s</span>.<br><br><i>Krwawe Echo</i> odnawia się po upływie <span class=\\"Highlight3\\">{1} s.</span><br>","name":"Krwawe Echo","flavor":"„Precyzyjnie zaatakuj wroga, a odczują to jego sojusznicy”. – Doktryna Renjira 6:3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"Chcesz wyrównać rachunki z tymi, którzy cię skrzywdzili. Ocalały, który cię oślepi lub ogłuszy paletą bądź szafką, staje się twoją obsesją.<br><br>Za każdym razem, gdy nowy ocalały zostaje obsesją, otrzymuje efekt <span class=\\"Highlight1\\">Nieświadomy</span> na <span class=\\"Highlight2\\">{0} s</span>, a jego aura staje się dla ciebie widoczna na <span class=\\"Highlight3\\">{1} s</span>.<br><br><li><i>Zabójca może mieć <b>obsesję</b> wyłącznie na punkcie jednego ocalałego naraz.</i></li><br>","name":"Nemezis","flavor":"„Tylko głupiec pluje w twarz demona i ogłasza się zwycięzcą”. – Doktryna Renjira 4:9","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"Dobrze znasz dźwięk prawidłowo naoliwionych mechanizmów.<br><br>Po trafieniu ocalałego <span class=\\"Highlight1\\">{0}</span> razy <i>podstawowym atakiem</i> umiejętność <i>Maniak Techniki</i> aktywuje się na <span class=\\"Highlight2\\">{1} s</span>.<br><br>Gdy umiejętność <i>Maniak Techniki</i> jest aktywna i ocalały wykona dobry test umiejętności w trakcie naprawy, generator zostanie podświetlony żółtą aurą na czas trwania naprawy.<br>","name":"Maniak Techniki","flavor":"„Czasem najlepszym dziełem człowieka jest to, co wpędza go do grobu”. – Naczelnik więzienia","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"Jeden z ocalałych staje się twoją <b>obsesją</b>.<br><br>Po powieszeniu obsesji na haku <i>Czuwak</i> aktywuje się na kolejne <span class=\\"Highlight1\\">{0} s</span>. <br><br>Gdy efekt jest aktywny, a ocalały przerwie pracę nad generatorem przed jego pełnym naprawieniem, Byt zablokuje generator do zakończenia działania efektu <i>Czuwak</i>. <br><br>Zablokowane generatory są oznaczone białą aurą.<br><br><i>Zabójca w danej chwili może mieć <b>obsesję</b> na punkcie tylko jednego ocalałego.</i><br>","name":"Czuwak","flavor":"„Widziałem wyraz jego twarzy, gdy zorientował się, że zaraz umrze”. – Caleb Quinn","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"Klątwa uwalniana po zniszczeniu. Ci, którzy się sprzeciwią, zostaną ukarani.<br><br>Ocalały, który oczyści zwykły totem, otrzyma efekt <b>Nieświadomy</b> na <span class=\\"Highlight1\\">{0} s</span>.<br><br>Oczyszczenie jakiegokolwiek przeklętego totemu sprawia, że aury ocalałych zostają ujawnione na <span class=\\"Highlight2\\">{1} s</span>.<br>","name":"Klątwa: Odwet","flavor":"„Cholerny głupcze, wydałeś na siebie wyrok”. – Caleb Quinn","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"Ci, którzy przeszkodzą w wykonaniu obowiązku, zostaną surowo ukarani.<br><br>Ocalali, którzy przyjmą uderzenie ochronne, otrzymają efekt <b>Okaleczony</b> na <span class=\\"Highlight1\\">{0} s.</span>","name":"Wymuszona pokuta","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"Prowadzisz ofiary drogą bólu i kar.<br><br>Po kopnięciu generatora otrzymujesz status <b>Niewykrywalny</b> na czas cofania postępu naprawy generatora albo do chwili zranienia ocalałego lub wprowadzenia go w dowolny sposób w stan agonii. W tym czasie żółta aura generatora staje się widoczna dla ocalałych.<br><br>Efekt można włączyć tylko raz na <span class=\\"Highlight1\\">{2} s.</span>","name":"Ścieżka udręki","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"Przeznaczeniem osób, których życia są splecione w ciemności, jest wspólne cierpienie.<br><br>Ocalały leczący jeden stan zdrowia innego ocalałego w odległości co najmniej <span class=\\"Highlight1\\">{0} m</span> od zabójcy krzyknie i ujawni swoją lokalizację, a także aktywuje efekt <i>Skazany na śmierć</i> na <span class=\\"Highlight2\\">{1} s.</span> W tym czasie ocalały otrzyma też efekt <b>Nieświadomy</b>, jeśli znajdzie się dalej niż <span class=\\"Highlight3\\">{2} m</span> od leczonego ocalałego. ","name":"Skazany na śmierć","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"Po kopnięciu generatora pierwszy ocalały, który wejdzie z nim w interakcję w trakcie kolejnych <span class=\\"Highlight1\\">{0} s</span> krzyknie. ujawni swoją lokalizację na <span class=\\"Highlight2\\">{1} s</span> i otrzyma efekt <b>Narażony</b> na <span class=\\"Highlight4\\">{2} s</span>.<br><br><i>Uścisk smoka</i> odnawia się po upływie <span class=\\"Highlight4\\">{3} s</span>.<br>","name":"Uścisk smoka","flavor":"„W tej miksturze drzemie taki potencjał… Nawet jej odrobina wywołuje nietypowe efekty”. – Dziennik Talbota Grimesa","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"Klątwa, która zapewnia łaskę Bytu przy rozlewie krwi.<br><br>Kiedy ocalały zostanie trafiony <i>podstawowym atakiem</i>, palety w promieniu <span class=\\"Highlight1\\">{0} m</span> od ciebie są przytrzymywane w miejscu przez Byt przez <span class=\\"Highlight2\\">{1} s</span>. Tych palet nie można zrzucić.<br><br><i>Klątwa: Łaska krwi</i> odnawia się po upływie <span class=\\"Highlight3\\">{2} s</span>.<br>","name":"Klątwa: Łaska krwi","flavor":"„Myślę, że nie będzie przesadą, jeśli powiem, że te próby mogą być pewnym rodzajem odpowiedzi biologicznej”. – Dziennik Talbota Grimesa","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"Kiedy <i>Klątwa: Nieumarły</i> jest aktywna, aury ocalałych w odległości <span class=\\"Highlight1\\">{0} m</span> od zwykłego totemu są widoczne.<br><br>Gdy przeklęty totem jest zniszczony, klątwa przenosi się na inny totem z Klątwą: Nieumarły i dezaktywuje Klątwę: Nieumarły. Żetony przenoszonej klątwy również zostają przeniesione.","name":"Klątwa: Nieumarły","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"Chronisz swój niewielki dobytek i nie znosisz, gdy ktoś zagląda do twoich zapasów.<br><br>Ocalali ujawniają swoje położenie, gdy wchodzą w interakcję ze skrzynią lub podnoszą przedmiot w odległości <span class=\\"Highlight1\\">{0} m</span> od ciebie.<br><br>Maksymalna liczba dodatkowych skrzyń na początku próby to <span class=\\"Highlight1\\">{1}</span>.","name":"Zbieracz","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"Życie nie było dla ciebie łatwe, więc utrudniasz je innym.<br><br>W momencie uszkodzenia generatora stan maksymalnie <span class=\\"Highlight1\\">{0} innych losowych generatorów także spada.<br><br>Jeśli generatory te są akurat naprawiane, ocalały będzie musiał wykonać trudny test umiejętności.<br><br>Czas odnowienia <i>Opresji</i> wynosi <span class=\\"Highlight2\\">{1}</span> s.","name":"Opresja","flavor":"„Potępiajcie ich, jak oni potępiają nas”. – Charlotte Deshayes","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"Gdy koniec jest bliski, decydujesz się na zabójstwo.<br><br>Po każdym ukończeniu generatora moc Ciosu łaski wzrasta. Otrzymujesz żeton.<br><br>Zużyj żeton, aby zwiększyć odległość kolejnego ataku z rozpędu o <span class=\\"Highlight1\\">{0}%</span>.","name":"Cios łaski","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"Twoje mistrzowskie występy olśniewają wszystkich.<br><br>Gdy niesiesz ocalałego, wszyscy inni ocalali w twoim zasięgu terroru otrzymują efekt <b>Narażony</b>.<br>Efekt utrzymuje się przez <span class=\\"Highlight1\\">{0} s</span> na ocalałych, którzy wyjdą z zasięgu terroru, oraz na tych, którzy w nim pozostaną, jeśli powiesisz na haku lub puścisz niesionego ocalałego.<br><i>Oczarowanie</i> odnawia się przez <span class=\\"Highlight2\\">{1} s</span>, gdy ocalały nie jest już niesiony.<br>","name":"Oczarowanie","flavor":"„Ciesz się tą chwilą – niewielu doszło tak blisko”. – Ji-Woon Hak","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"Klątwa pozwala odpowiednio zaganiać tych, którzy nie są tak ważni jak ty.<br><br>Byt blokuje okno na <span class=\\"Highlight1\\">{0} s</span> po <b>szybkim</b> przeskoku ocalałego.<br><br><i>Efekty klątwy działają, dopóki stoi powiązany z nią przeklęty totem.</i><br>","name":"Klątwa: Panowanie nad tłumem","flavor":"„Nie masz kontroli. Tacy jak ty nigdy jej nie mieli”. – Ji-Woon Hak","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"Nie wpuścisz byle kogo do pokoju dla VIP-ów.<br><br>Po pierwszym powieszeniu ocalałego na haku umiejętność <i>Bez Wyjścia</i> otrzymuje żeton.<br>Po naprawie ostatniego generatora Byt blokuje oba przełączniki bramy wyjściowej na<span class=\\"Highlight1\\">{0} s</span> oraz dodatkowe <span class=\\"Highlight2\\">{1} s</span> za każdy posiadany przez ciebie żeton.<br>","name":"Bez Wyjścia","flavor":"„Ten dźwięk, gdy krwawisz… Chcę usłyszeć go jeszcze raz”. – Ji-Woon Hak","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"Stworzono cię do tropienia i eliminowania celów.<br><br>Na początku próby aury ocalałych są dla ciebie widoczne przez <span class=\\"Highlight1\\">{0} s.</span><br><br><span class= \\"FlavorText\\">„Wie, czego chce, i nie spocznie, póki tego nie osiągnie”. – Carlos Oliveira<\\\\span>","name":"Śmiertelny Pościg","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"Wiesz, jak skrzywdzić jednego członka drużyny, by wywołać panikę.<br><br>Gdy wprowadzisz zdrowego ocalałego w stan krytyczny podstawowym atakiem, wszyscy ranni ocalali otrzymają efekt <b>Nieświadomy</b> na <span class=\\"Highlight1\\">{0} s</span>.<br><I>Histeria</i> jest dostępna tylko raz na <span class=\\"Highlight2\\">{1} s.</span><br><br><span class= \\"FlavorText\\">„Wybaczcie, trochę mnie poniosło. Nie wiedziałem, czego się spodziewać”. – Robert Kendo","name":"Histeria","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"Pasożyt NE-α zapewnia ci inteligencję i świadomość potrzebne do zastawienia pułapki.<br><br>Po kopnięciu generatora jego aura podświetla się na żółto. Gdy wprowadzisz ocalałego w stan agonii podstawowym atakiem, każdy kopnięty generator wybucha, a postęp jego naprawy cofa się o <span class=\\"Highlight1\\">{0}%</span>. Aury tych generatorów znikają.<br>Ocalały naprawiający generator w momencie wybuchu krzyknie i otrzyma efekt Unieruchomiony na <span class=\\"Highlight2\\">{1} s</span>.<br>Czas odnawiania <i>Erupcji</i> wynosi <span class=\\"Highlight3\\">{2} s.</span><br><br><span class= \\"FlavorText\\">„Potrafi używać broni?” – Jill Valentine","name":"Erupcja","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/pl/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Evan Macmillan ubóstwiał swojego ojca. Był on nie tylko dziedzicem wielkiej fortuny, ale także zarządcą ogromnego majątku. Evan został wychowany przez ojca żelazną ręką i w taki sam sposób traktował lokalną siłę roboczą. Za sprawą ojca i syna, produkcja utrzymywała się zawsze na wysokim poziomie, a majątek rodziny prosperował. Gdy zdrowie psychiczne Archiego Macmillana zaczęło słabnąć, Evan chronił ojca przed tłumem, który usiłował zagarnąć dla siebie części jego majątku. Evan wypełniał każde polecenie ojca bez pytania.<br><br>Kiedy Archie Macmillan utracił całkowicie zdrowe zmysły, Evan stał się sprawcą wydarzenia, które miało być później znane jako najbardziej nieludzkie masowe morderstwo w ówczesnej historii. Nigdy nie dowiedziono, że Evan poprowadził setkę mężczyzn do ciemnych tuneli przed detonacją ładunków wybuchowych, pieczętując tym samym ich los. Opowieść o majątku Macmillanów jest opowieścią o bogactwie i władzy użytej w złym celu. Nie wiadomo, jak wiele osób padło ofiarą ojca i syna. Nie istnieje żaden zapis tego, co stało się potem z posiadłością. Ojciec Evana jest kolejną nierozwikłaną zagadką – został znaleziony w piwnicy własnego magazynu – samotny i martwy.<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"Philip Ojomo przybył do kraju jedynie z nadzieją na nowy początek. Był szczęśliwy, gdy zaoferowano mu pracę na „Złomowisku”, gdzie przekupni policjanci przymykali oko na wszelkie szemrane interesy, które miały tam miejsce. Ojomo nie przejmował się skorumpowanymi ludźmi. W jego ojczyźnie nie raz był świadkiem przestępstw i tak długo jak się w żadne z nich nie mieszał, miał się dobrze.  Reperował jedynie samochody i posługiwał się miażdżarką. Był w tym bardzo dobry. Wchodził samochód, wychodziła mała, metalowa kostka.<br><br>Pewnego ponurego dnia zauważył przypadkiem krew wypływającą z samochodu przeznaczonego na zmiażdżenie. Gdy go otworzył, znalazł w środku młodego człowieka, zakneblowanego, ze związanymi rękoma i paniką w oczach. Ojomo uwolnił mężczyznę, a ten odbiegł na zaledwie trzy metry, gdyż szef Ojomo poderżnął nieszczęśnikowi gardło. Ojomo domagał się wyjaśnień i otrzymał odpowiedź. Dowiedział się, że był jedynie zwyczajnym egzekutorem, bo mniej więcej każdy samochód, który miażdżył, zawierał w sobie „żywy ładunek”. Wykonywał tym samym „usługę” dla pewnych „klientów”. Ojomo stracił nad sobą panowanie. Wrzucił własnego szefa do miażdżarki i pozwolił jej pracować do momentu, aż ta zacięła się na głowie; Ojomo odłączył ją wtedy wraz z kręgosłupem od reszty ciała. Po tym wydarzeniu uciekł w nieznane i nigdy więcej go nie widziano.<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"Wieśniak był bezimiennym, niechcianym dzieckiem dzikusów. Po upływie pewnego czasu został adoptowany przez bogatych właścicieli ziemskich, Maxa i Evelyn Thompson. Jego zdeformowane ciało budziło w ludziach odrazę i przyprawiało ich o dreszcze, dlatego odcięto go od reszty społeczeństwa. Przybrani rodzice, wstydząc się swojego syna, zamurowali jego pokój, a następnie wsadzili go do środka przez dziurę w ścianie i podawali przez nią jedzenie. Kiedy chłopiec uciekł, zamordował bestialsko swych przybranych rodziców, którzy zamiast wychowywać nieszczęśnika, ciągle go torturowali.<br><br>Kiedy Wieśniak zakończył swoje porachunki z „rodzicami\\", kontynuował życie na farmie, wyżywając się na zwierzętach żyjących na wolności. Gdy pozbył się dawnych kajdan, przebiegł przez pola kukurydzy, masakrując wszystko, co stanęło mu na drodze. Nigdy nie odnaleziono ciała Maxa i Evelyn. Odnaleziono za to torturowane i wypatroszone zwierzęta. Farma Coldwind została szybko zasiedlona, a ziemia podzielona i sprzedana, lecz nigdy nie znaleziono nabywcy na dom znajdujący się na farmie. Może to z powodu dźwięku piły łańcuchowej, wydobywającego się z wnętrza domu w trakcie upalnych, letnich nocy?<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"Sally Smithson przybyła do miasta marząc o dziecku i śmiechu w drewnianym domu zbudowanym przez jej męża Andrewa. Pewnego dnia majster Andrewa złożył Sally wizytę, która na zawsze odmieniła jej życie. Została sama. Sally nie miała większego wyboru; mogła znaleźć pracę jedynie w pobliskim Przytułku Crotus Prenn. Nie posiadała wystarczającego wykształcenia czy kwalifikacji, a zatem była zmuszona podjąć pracę na kiepskim stanowisku, wykonując swe obowiązki podczas ciężkich dyżurów nocnych. Wraz z upływem lat jej poczytalność zaczęła słabnąć. Długie lata spędzone w otoczeniu szaleńców odcisnęły swoje piętno na jej psychice. W końcu nie mogła znieść tego dłużej i wpadła na pomysł oczyszczenia „przeklętego miejsca\\", jakim było jej miejsce pracy. Kiedy pewnym wrześniowym porankiem pracownicy pełniący poranny dyżur zjawili się w Przytułku, zastali na miejscu ponad pięćdziesięciu martwych pacjentów i czterech martwych pracowników, leżących nieruchomo w swoich łóżkach. Jedyną ocalałą była Sally, lecz jej umysł przepadł, dając temu wyraz poprzez szaleńcze ruchy głowy. Zabrano ją do karetki, lecz ta nigdy nie dotarła do szpitala. Odnaleziono ją rozbitą w pobliskim lesie; w środku znajdowały się ciała pracowników, ale Sally przepadła i nigdzie nie można było jej znaleźć.","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"Od momentu, gdy Anna nauczyła się chodzić, jej matka zaczęła uczyć dziewczynkę, jak przeżyć w północnych lasach, prowadząc ciężkie, samotne życie. Życie w ekstremalnie odosobnionym i niebezpiecznym miejscu wymagało odpowiednich umiejętności i wytrzymałości. Kiedy światło dzienne stawało się zbyt słabe, by przeprowadzać jakiekolwiek produktywne czynności, kobiety chowały się w swoim domu, którym była wielka, solidna i stara chata skonstruowana tak, by przetrwać nawet najcięższe zimy. Anna odpoczywała w ciepłym objęciu swej matki, otoczona drewnianymi zabawkami i maskami, które wytworzyła dla niej rodzicielka. Odpływała w objęcia Morfeusza, słuchając opowieści i kołysanek, a następnie śniła o szczęśliwych rzeczach, nie zdając sobie sprawy z tego, że nadchodzące wydarzenia diametralnie i nieodwołalnie odmienią jej całe życie.<br><br>Anna i jej matka polowały w lesie na dużego łosia. Wiedziały, że to niebezpieczne zwierzę, ale dopadła je szczególnie sroga zima, a jedzenie zaczęło się kończyć. Widmo głodu przerażało je bardziej niż jakakolwiek leśna kreatura. Łoś stanął bez ostrzeżenia na tylnych nogach, zaryczał i zaszarżował w stronę Anny. Przerażona dziewczyna stanęła jak wryta i zdawało się jej, że świat zaczął się trząść pod naciskiem łomoczących kopyt ogromnej bestii. Łoś był już na tyle blisko, że Anna mogła dostrzec morderczą furię w jego oczach. W tym samym momencie matka dziewczyny rzuciła się z toporem w ręku między łosia i córkę. Gdy łoś nabił jej ciało na poroże i podniósł kobietę w powietrze, z jej ust wydobył się mrożący krew w żyłach krzyk. Używając całej swojej siły, wbijała wielokrotnie topór w głowę bestii usiłującej strząsnąć kobietę ze swojego poroża. Nagle wydobył się dźwięk obrzydliwego chrupnięcia, a poroże odpadło od głowy łosia i matka Anny była ponownie wolna. Bestia upadła.<br><br>Anna była zbyt mała, by przenieść gdziekolwiek ranną matkę, więc usiadła jedynie u jej boku w miejscu, gdzie ta opadła niczym szmaciana lalka. Matka Anny przytuliła dziewczynkę, aby odwrócić jej uwagę od płaczu umierającego łosia. Zaczęła też nucić córce jej ulubioną kołysankę. Kobiety trwały tak w uścisku aż do momentu, gdy zarówno łoś, jak i matka, zamarli w lodowym, bezgłośnym bezruchu, zostawiając Annę samą w milczącym lesie. Po upływie pewnego czasu Anna wstała i zaczęła kierować się w stronę domu.<br><br>Mimo iż nadal była tylko dzieckiem, wiedziała wystarczająco dużo o tym, jak przetrwać w zamarzniętym lesie. Kierowała się instynktami i stawała się z puszczą jednością. Dorastając, stawała się silniejsza i wytrwale doskonaliła swoje myśliwskie rzemiosło. Wyrosła na niebezpiecznego drapieżnika, a jej człowieczeństwo zdawało się być jedynie snem z przeszłości, który już dawno popadł w zapomnienie.<br><br>Anna poszerzyła swoje terytorium łowieckie i polowała na każde żywe stworzenie. Początkowo polowała tylko na wiewiórki, zające, norki i lisy. Kiedy znudziła się jej drobna zwierzyna, zaczęła polować na bardziej niebezpieczne zwierzęta, takie jak wilki i niedźwiedzie. Kiedy w jej lesie pojawili się niczego nieświadomi podróżnicy, odkryła swoją nową ulubioną zwierzynę: ludzi. Pechowe dusze, które zapuściły się na jej terytorium, były masakrowane tak samo jak inne zwierzęta. Łowczyni uwielbiała kolekcjonować narzędzia i kolorowe stroje swych ofiar, a także drobne zabawki, które przy sobie nosiły. Mimo tego nigdy nie odważyła się zabijać małych dziewczynek.<br><br>Zamiast zabijać, zabierała je do swojego domu ukrytego głęboko w lesie. Były dla niej cenne, a ich drobne twarzyczki przywoływały dobre, szczęśliwe wspomnienia z dzieciństwa. Anna pragnęła kogoś, kogo może pokochać - własnego dziecka. Porwane dziewczynki, otoczone stosami drewnianych zabawek, lalek i książeczek z opowieściami, były mocno przywiązywane do ściany za szyję szorstką, drażniącą liną. Anna nie mogła pozwolić im odejść... w przeciwnym wypadku na pewno by umarły.<br><br>Dziewczynki marniały i umierały z zimna, głodu lub z powodu choroby. Z każdą kolejną śmiercią niewinnej duszyczki Anna coraz bardziej pogłębiała swój ból, żal i szaleństwo. Zaczęła atakować pobliskie wioski i mordowała żyjące tam rodziny, porywając jedynie małe dziewczynki. Czyniąc to, nosiła na twarzy zwierzęce maski, wytworzone przed wieloma laty przez jej matkę. Nosiła je po to, by uspokoić porywane przez siebie dziewczynki. Okoliczni mieszkańcy zaczęli opowiadać legendy o pół człowieku-pół-bestii kryjącej się w Czerwonym Lesie: Łowczyni, morderczyni mężczyzn, która pożerała małe dziewczynki.<br><br>Wojna zawitała także i do lasu. Niemieccy żołnierze maszerowali przez leśne gęstwiny, usiłując pokonać upadające Imperium Rosyjskie. Podczas tych mrocznych czasów zabrakło podróżników. Okoliczni mieszkańcy opuścili swe domy i nigdzie nie można było już odnaleźć małych dziewczynek; pozostali jedynie żołnierze. Wielu z nich zostało odnalezionych z okropnymi ranami zadanymi toporem. W tajemniczych okolicznościach ginęły całe zastępy żołnierzy. Kiedy wojna dobiegła końca, wraz z nią przepadły pogłoski o Łowczyni: myśliwej pochłoniętej przez Czerwony Las.","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"Niektórzy ludzie to po prostu złe nasiona. Nasiona nasycone najczystszym złem. Michael Myers to jedno z takich nasion. Nie miał żadnych zahamowań przed krzywdzeniem innych. Wręcz przeciwnie, właśnie tego pragnął. Ale życie bywa trudne nawet dla tych, których umysły wypełnione są terrorem. Różnica polega na sposobie rozwiązywania problemów.<br><br>Michael musiał zabijać – tylko tak odnajdywał wewnętrzny spokój. Policja znalazła cichego chłopca ubranego w strój klauna – jak się później okazało, zamordował swoją siostrę. Kiedy ktoś natknie się na rozprzestrzeniający się ogień, to nie dolewa do niego benzyny, a właśnie takie działania podjęli urzędnicy, którzy nie zdawali sobie sprawy z tego, jak ich działania wpłyną na psychikę demona ukrytego w ciele chłopca. Umieszczenie Michaela w szpitalu psychiatrycznym było marną próbą uratowania dziecka. Nieudana terapia i nocne krzyki powodowały, że Michael coraz bardziej zamykał się w sobie; równolegle wzmagało się jego szaleństwo. Ludzie mieli nadzieję, że Michael wkrótce zostanie zapomniany, a historia tej pomyłki zgnije w czeluściach niepamięci. Ale wtedy… on uciekł.<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"Lisa Sherwood dorastała w spokojnym miasteczku. Ludzie mieszkający w tym miejscu byli życzliwi, a starszyzna pomagała rozwiązywać wszelkie spory i podtrzymywać przy życiu stare tradycje. Lisa miała wiele zainteresowań, ale bardziej niż wszystkim innym interesowała się rysowaniem rytualnych znaków, które miały rzekomo zapewniać bezpieczeństwo i szczęście. Pewnej nocy, gdy wracała do domu przez las, rozpętała się bez żadnego ostrzeżenia straszliwa burza. Idąc w ciemności, Lisa poślizgnęła się i uderzyła się w głowę. Tracąc przytomność, zauważyła mroczne kształty zbliżające się od strony drzew. W końcu znalazły się tak blisko, że można było dostrzec ich okrutne, wygłodniałe uśmiechy.<br><br>Porywacze przykuli Lisę łańcuchami do ściany i więzili kobietę w zalanej piwnicy. W ciemności poznała inne osoby, które miały na ciele otwarte rany, w których aż roiło się od much. Inni nie przetrwali zbyt długo, gdyż kanibale zaczęli wycinać zardzewiałymi ostrzami kawałki mięsa z ich ciał, ale Lisa trzymała się kurczowo swojego życia. Im bardziej była głodna, im bardziej okaleczona, tym luźniejsze stawały się kajdany na jej wychudzonych rękach. Szarpała się, a metal przedzierał się przez skórę i mięśnie. Jej wysiłki opłaciły się i umożliwiły kobiecie ucieczkę. Z jej ciała sączyła się ropa, spod wielu ran widoczne były gołe kości. To było zbyt wiele – nie mogła iść dalej. Tracąc resztki zmysłów, myślała o domu, o starszyźnie. Narysowała znaki, których ją nauczono. Poczuła w sobie mroczny głód. Głód krwi. Wybrała zemstę.<br>Policja podczas poszukiwań dotarła do starego domu na bagnach. Rezydenci przybytku zostali odnalezieni rozczłonkowani i pożarci. Uroki starszyzny zostały namalowane na podłodze krwią. Ciała Lisy nigdy nie odnaleziono.<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"Ludzkość od zawsze zastanawiała się nad tym, czy zabójcy dokonują haniebnych czynów za sprawą wewnętrznej, psychicznej potrzeby, czy są do tego zmuszani przez kogoś innego. Jest to jeden z najstarszych przedmiotów dyskusji. Istnieje jednak zabójca, który łączy w sobie dwa wspomniane wcześniej elementy.<br><br>Leatherface zabija nie dlatego, że pragnie wyżywać się na innych, zaspokoić swoje popędy albo uciszyć głosy w udręczonym umyśle. Zabija, ponieważ się boi. Boi się, że inni go zranią, że jego rodzina się na nim zawiedzie, że ich chęć jedzenia ludzkiego mięsa zostanie odkryta.<br><br>Jego postępowaniem kieruje rodzina. Rodzina, która go kocha. Tylko ona się dla niego liczy. Osoby z zewnątrz są zagrożeniem, a zagrożenie trzeba unicestwić.<br><br>Weźmy za przykład małe dzieci, które weszły nieproszone do jego domu. Weszły bezczelnie, jakby wchodziły do siebie. Myszkowały w nim po to, by wygrzebać rodzinne sekrety, nie ma co ku temu wątpliwości. Leatherface poradził sobie z nimi, ochronił swoją rodzinę, postąpił tak, jak go nauczono.<br><br>Nie jest jedynie obrońcą. Pełni wiele ról, a każda rola ma własną twarz. Podaje obiady, opiekuje się rodziną, przebiera się, gdy rodzina spożywa posiłek. Kiedyś opiekowali się nim Dziadzio i Babunia. Opiekowali się także jego rodzeństwem, ale Dziadzio jest już zbyt stary, więc jego obowiązki przejęli bracia. Rodzina jest dla niego wszystkim. Ostoją i bezpieczeństwem.<br><br>Mimo tego, że zrobił wszystko, co w jego mocy, jeden z dzieciaków uciekł. Próbował ją powstrzymać, goniąc za nią ile sił w nogach, ale pomógł jej ktoś z zewnątrz – kierowca ciężarówki. Zły kierowca zabił jego brata, przejechał po nim, jakby był oposem. Leatherface wyskoczył w jego kierunku z piłą mechaniczną, przepełniony furią i pragnieniem zemsty, lecz kierowca był zbyt szybki. Powalił Leatherface\'a na bok i wykorzystał jego własną piłę przeciwko niemu.<br><br>Gdy oglądał odjeżdżających przybyszów, gniew, ból i cierpienie połączyło się z zaniepokojeniem. Obawiał się o przyszłość swojej rodziny. Nie ulega wątpliwości, że bluźnierczy przybysze wróciliby z policją, a ta zabrałaby jego braci i Dziadzia. Co by bez nich począł? Co by począł bez ich poleceń? Uschnąłby niczym roślinka pozbawiona życiodajnej wody.<br><br>Gdy jego świat się zawalił, Leatherface wirował w kółko, wymachując piłą na wszystkie strony, próbując walczyć z niezliczoną ilością zagrożeń, które go otaczały.<br><br>Później ogarnęło go kolejne uczucie. Przepełzło po jego skórze niczym lodowaty dreszcz. Zdał sobie sprawę, że nie liczy się to, co mogą mu zrobić obcy,  gdyż istniało coś gorszego, coś większego, coś, co żyło w cieniu. Napełnił go strach, jakiego nigdy wcześniej nie czuł. Był jednak kojący, podobny do tego, który czuł obcując z rodziną. Strach przed tym, aby ich nie zawieść.<br><br>Znalazł się w miejscu, które było znajome, lecz jednocześnie nieznane i od razu wiedział, co musi zrobić. Nie mógł pozwolić sobie na porażkę podobną do tej, jaką była utraty rodziny. Nikt nie powstrzyma go przed osiągnięciem celu, a już na pewno nie obcy ludzie z zewnątrz. Zrobi wszystko, by pokonać przeszkody na swojej drodze. Nie bacząc na zagrożenie, nie bacząc na krzyki. Uciszy świat. Uciszy go i sprawi, że pozostanie na świecie tylko jeden dźwięk – złowrogie wycie metalowych zębów piły.<br><br>Niech przyjdą.","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"Herman wyróżniał się wielkim talentem w naukach psychologicznych. Właśnie dlatego został zrekrutowany do tajnego programu neurologicznego prowadzonego w placówce w Illinois znanej jako „Léry Memorial Institute\\", będącej w rzeczywistości komórką CIA. Tam poznał sławnego dr. Ottona Stampera i pod jego nadzorem zaczął stosować dziwne, coraz bardziej okrutne metody wydobywania informacji od więźniów wysyłanych do instytutu, pełniącego także rolę tajnego więzienia i centrum reedukacji dla wrogów Stanów Zjednoczonych. Swobodnie stosując brutalną terapię elektrowstrząsową, odnosił duże sukcesy: wykrył kilka spisków zagrażających bezpieczeństwu narodowemu. <br><br>Wraz z upływem lat Herman stał się znany jako „Doktor” i nikt nigdy nie dopytywał, czy ma faktycznie dyplom lekarski ani co stało się z więźniami, którzy przekazali mu wszystkie cenne informacje. Dopiero tydzień po tym, jak centrala straciła kontakt z instytutem, odkryto prawdziwy horror. Cały personel, wszyscy pacjenci i więźniowie zostali odnalezieni martwi z różnymi urazami głowy. Wśród mnóstwa zmasakrowanych ciał odnaleziono także zwłoki dr. Ottona Stampera, ale nigdzie ani śladu Hermana „Doktora” Cartera.<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"Dla tych, którzy go naprawdę znali, Freddy Krueger był prawdziwym koszmarem. Nawet za życia. Za maską serdeczności i życzliwości skrywał prawdziwe oblicze, które ukazywał jedynie swoim ofiarom. Kiedy ich głos został w końcu usłyszany, rodzice dzieci mieszkający w Springwood wzięli sprawy w swoje ręce i „dobrali się\\" do Freddy\'ego. Tamtej nocy pozbyli się potwora, aby ich dzieci mogły żyć w końcu bezpiecznie. Przynajmniej tak sądzili. Nie mógł przecież przetrwać w paszczy ognia. A jednak przetrwał. Tak wielkie zło drzemiące w człowieku zawsze znajdzie sposób na przetrwanie. <br>Mijały lata, horror przeszłości został zapomniany. Taki sam los spotkał dawne wspomnienia ofiar. A wtedy on, Freddy, powrócił jakimś cudem do naszego świata i sny stały się znowu koszmarem.<br>Freddy skupił swoją wściekłość na tych, którzy sprawili mu ból. Kulminację gniewu skierował przeciwko swojej prawdziwej obsesji: Nancy Holbrook. Popełnił jednak błąd, bo nie docenił siły i zaradności dziewczyny. Nancy zdołała osłabić Freddy\'ego razem z jej przyjacielem, Quentinem, raniąc oprawcę i pozostawiając go na śmierć po raz drugi. <br>Śmierć miała jednak inne plany. Gdy pierwszy raz spotkała Freddy\'ego, nie chciała go przyjąć, więc czemu myśleli, że tym razem miałoby być inaczej? Freddy pojawił się raz jeszcze, przepełniony pragnieniem zemsty, ale tym razem skupił się na chłopaku, który powstrzymał go przed pokonaniem Nancy. Stał się głównym celem Freddy\'ego.<br>Freddy nawiedzał Quentina w snach, strasząc go co noc aż do momentu, gdy ten utracił całkowicie wolę do walki. Gdy nadeszła odpowiednia chwila, zmusił chłopaka do powrotu do „odwróconego świata\\", gdzie znajdowała się alternatywna wersja Przedszkola w Badham. To właśnie tam Freddy zamierzał dokonać ostatecznej zemsty.<br>Obserwował chłopaka na szkolnych korytarzach. Nie spieszył się. Delektował się każdą sekundą polowania. To było to, co lubił najbardziej: zapach potu w powietrzu, nierówny oddech ogarnięty przerażeniem. Byli jego zabawkami. <br>Chłopak stał na końcu korytarza, zbyt zmęczony i przerażony, by biec dalej. Być może poddał się swojemu przeznaczeniu? Freddy zbliżył się do niego, rozpostarł ramiona i zazgrzytał pazurami, ocierając nimi o ścianę. Ich czubki poruszały się wzdłuż rury, a metaliczne dźwięki pogłębiały strach chłopaka.<br>Na podłogę pokrytą kafelkami i cieczą spadł złowrogi deszcz iskier. Pojawił się niebieski płomień, który szybko pochłonął cały pokój.<br>Gdy Freddy buchał ognistą furią, chłopiec uciekł, wzbijając się w powietrze. Pokoje i ściany zmieniały swoje położenie aż do momentu, gdy obaj znaleźli się w piwnicy Freddy\'ego. Stamtąd nie dało się już uciec.<br>Freddy zbliżył się powoli do chłopaka. Strach chłopca był wtedy tak wielki, że Freddy mógł go niemal zasmakować. Jego oczy zapłonęły buntowniczą, niemal zachwycającą nienawiścią.<br>Freddy schował swe pazury.<br>Poczuł przy sobie dziwną obecność, coś starego, silnego i mrocznego. Przepełnił go bardzo nieprzyjemny zapach i jedyną rzeczą, którą słyszał, był dźwięk przypominający skrzypiące, zginające się w oddali drewniane belki. Jęczące echo ocierające się z metalu o metal. Coś tajemniczego, nieznanego… przypominającego starożytny język, przepełniony czystym terrorem. <br>Pojawiały się chwile, w których czuł się tak, jakby kręcił się na karuzeli, a następnie z niej upadał. Trafił z powrotem do szkoły. Nie była to jednak jego szkoła. Wyglądała tak samo, ale czuł się tam inaczej. Jego moce zostały zmodyfikowane – niektóre części mocy zostały osłabione, inne wzmocnione. Nie było tam chłopaka, którego gonił, ale na korytarzu pojawiły się zupełnie nowe ofiary. Niektóre z nich nie miały dla niego znaczenia, inne stały się jego nową obsesją. Bez względu na to, kim jest jego ofiara, jedno jest pewne – wszyscy upadną w agonii pod ciężarem jego pazurów.","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"John Kramer, znany lepiej jako Jigsaw, chciał, by jego syn urodził się podczas chińskiego roku pod znakiem świni. Chciał, by jego narodzenie stanowiło symbol płodności i odrodzenia, nowy początek dla niego samego i jego żony oraz początek wspaniałego życia dla ich wspólnego dziecka. Plan mężczyzny legł w gruzach podczas feralnej nocy, gdy pewna osoba uzależniona od narkotyków wkradła się do kliniki jego żony, usiłując ukraść „towar\\".<br><br>Po tym zdarzeniu, które poskutkowało śmiercią jego nienarodzonego syna, John schwytał winowajcę, aby ten stał się pierwszym obiektem „próby\\". Świnia stała się w oczach Kramera czymś innym. Stała się symbolem zjadającego go od środka cierpienia. Przypominała, że jesteśmy jedynie kupą mięsa, ale mamy możliwość wznieść się ponad nasze czyny i uratować swe życia z bezlitosnych szczęk śmierci.<br><br>Świnia stała się „naczyniem\\", „agentem\\" Jigsawa zbierającym „obiekty\\" do „prób\\". Ci, którzy przeszli je pomyślnie, mogli odrodzić się jako uczniowie, być może nawet jako następcy Jigsawa. W ich przypadku świnia stanowiła symbol odrodzenia.<br><br>I tu przechodzimy do Amandy Young – zagubionej duszy, której życie stanowiło karuzelę nieszczęść zarówno dla niej samej, jak i dla osób żyjących w jej pobliżu. Amanda zmieniła się w momencie, gdy przeszła pomyślnie próbę Jigsawa. Doszła do wniosku, że jej życie jest coś warte i została oddanym pomocnikiem Jigsawa, gotowym przejąć na siebie obowiązki mistrza po jego śmierci, gdyż ten umierał powoli na raka.<br><br>Stała się jednak coraz bardziej zależna od Johna. Udręka spowodowana zbliżającą się śmiercią mistrza połączyła się z przekonaniem, że ich „obiekty prób\\" nie zasługują na szansę uratowania swojego życia.<br><br>Widząc jej „wadliwe\\" podejście, John sprawił kobiecie kolejną grę, kolejną szansę na uratowanie się, lecz Amanda dała się opętać uczuciu wściekłości i zazdrości. Nie udało się jej podołać nowej próbie.<br><br>Gdy ją postrzelono, wykrwawiała się na podłodze; jej wzrok uciekał w odmęty ciemności. Towarzyszył temu dźwięk przypominający skrzypienie drewna. Znalazła się w lesie, po raz kolejny widząc świat oczami Świni. Otaczały ją drzewa, gałęzie rozszarpywały jej ciało ze wszyskich stron niczym pazury bestii. Ogarnęła ją fala paniki. Usłyszała swój oddech odbijający się wewnątrz maski.<br><br>Czy została przeklęta, aby spędzić resztę swych dni w tym przebraniu? Może była to tylko kolejna próba, której nie udało się przejść do końca? Wiedziała, że John był zawsze o krok przed innymi, miał plan na każdą ewentualność i nigdy by jej nie porzucił… prawda?<br><br>Nawet jeśli Jigsaw opuścił ten świat, to trzeba pamiętać, że mianował Amandę swoją następczynią. Otrzymała szansę, by ponownie stać się Świnią.<br><br>W końcu zrozumiała, że dokonała właściwych wyborów. Czas gier i prób dobiegł końca. Żadnemu z nich nie należała się szansa na wybawienie. Byli mięsem, a mięso istnieje po to, by umrzeć.","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"Kenneth Chase urodził się w 1932 roku. Jego narodzinom towarzyszyła śmierć matki, która zmarła nieszczęśliwie podczas porodu. Dramatyczny poród sprawił, że ojciec Kennetha był dla niego surowy i kłócił się z synem przez całe życie - śmierć matki była wieczną kością niezgody. Kenneth dorastał żyjąc w cieniu urazy ze strony ojca i przyglądał się, jak ten nieuchronnie popada w alkoholizm. Mężczyźni nie rozmawiali ze sobą i prowadzili niemalże odrębne życia.<br><br>Kenneth był świetnym uczniem i dzielnym sportowcem, prezentując raz po raz swoje atletyczne talenty. Wyrósł na silnego, mądrego mężczyznę, ale odrzucał wszelkie oferty przystąpienia do drużyn lub klubów sportowych.<br><br>Kenneth miał nietypowe hobby: gdy wracał ze szkoły do domu, zbierał po drodze piórka ptaków i tworzył z nich kolekcję, trzymając swe miękkie skarby pod łóżkiem w pudełku na cygara. Chłopak rzadko kiedy widział się z ojcem, gdyż ten ciągle pracował lub zataczał się pijany w pobliskich barach. Kenneth uznał, że może spożytkować czas spędzony w samotności na podziwianiu piór, dotykaniu ich, gładzeniu swych ust miękkim puchem. Gdy obserwował ptaki snujące się po jego ogrodzie w okolicach karmnika, wyobrażał sobie ich miękkie ciała i postanowił, że musi złapać jedno z tych stworzeń. Zaprzyjaźnił się z miejscowym dentystą, dzięki czemu uzyskał łatwy dostęp do środków znieczulających. Zastawił chemiczną pułapkę na ptaki, wierząc, że środek znieczuli latające zwierzęta, dzięki czemu będzie mógł w spokoju dotykać ich miękkich, puchatych ciał.<br><br>Z początku doznał serii porażek, ale w końcu się udało – złapał rudzika. Wziął go w swoje wielkie, silne dłonie. Poczuł przypływ adrenaliny. Poczuł, że trzyma w dłoniach los tej istoty. Początkowo zamierzał wypuścić ptaszynę, gdy ta otrząśnie się z narkotycznego oszołomienia, ale wtedy ptaszek zaczął się szarpać. Kenneth poczuł, że musi zacisnąć dłonie jeszcze mocniej… wokół szyi rudzika. Ściskał ptaszka tak mocno, aż życie odpłynęło z oczu niewiniątka. Pozbył się ciała i zostawił sobie tylko jedno, maleńkie piórko. Rozpoczął nową kolekcję, nazywając przy tym swoją starą kolekcję „fałszywą”.<br><br>Kenneth skończył swoją szkolną edukację pod koniec lat 40. i zaczął pracować w miejscowej jadłodajni. Wraz z upływem kolejnych lat powiększał swoją nową kolekcję o większe zwierzęta, tj. wiewiórki, szopy, psy. Odkrywał przy tym idealne proporcje dawki środka znieczulającego.<br><br>Na początku 1954 roku zaginął młody mieszkaniec miasteczka. Całe miasto stanęło na głowie, byle tylko go odnaleźć. Kilka miesięcy później, gdy ojciec Kennetha wykonywał prace konserwatorskie pod domem, odnalazł pudełka na cygara należące do syna. Otworzył je, po czym zamarł z przerażenia. W środku leżały ptasie pióra, zwierzęce łapy… i odcięty palec zaginionego chłopca. <br><br>Gdy Kenneth wrócił z pracy, ujrzał ojca trzymającego w rękach jego pudełko na cygara. Odwrócił wzrok, uciekł z domu i nigdy do niego nie wrócił.<br><br>Pierwsze tygodnie były ciężkie. Kenneth napotkał po drodze wędrowny cyrk i dostrzegł okazję, aby zdobyć nową pracę. Zaprezentował pracodawcy swą niezwykłą krzepkość i siłę. Został zatrudniony do pracy siłowej i rozkładania namiotu cyrkowego. Przyjął nowe imię: Jeffrey Hawk.<br><br>„Jeffrey” szybko dostrzegł, że ludzie pracujący w cyrku to zżyta społeczność, więc musiał się trochę uspołecznić. Uczynił ze swej nowej tożsamości maskę, przebranie, udając przed innymi uroczego, miłego mężczyznę. W ten sposób został członkiem swojej nowej rodziny.<br><br>Kolejne 10 lat spędził na podróżowaniu po całych Stanach Zjednoczonych. Popadł w tym czasie w złe nawyki. Zaczął jeść śmieciowe jedzenie, pić alkohol, zażywać narkotyki. Nadużywał niemal wszystkiego. Pragnął zastąpić jedną obsesję innymi, ale nie udało mu się. Postanowił wrócić do zabijania. Ukradł przebranie klauna i zestaw do makijażu, udając przed innymi cyrkowego komika. Używał tej strategii, aby móc się do nich zbliżyć, a następnie odurzyć ofiary chemiczną mieszanką. Zabierał ofiary do swojej przyczepy, gdzie te budziły się zdane na jego łaskę. Odnalazł swą dawną obsesję, która sprawiała mu radość – torturowanie i zabijanie niewinnych, których krzyki ginęły w odmętach nocnego zapomnienia. <br><br>Gdy ofiary opadły z sił, Kenneth przyglądał się badawczo ich palcom, ucinając najładniejsze, najsmaczniejsze palce. Smakował je swoim językiem, oceniając je niczym krytyk kulinarny wytworną potrawę. Gdy znalazł odpowiedniego „kandydata”, odcinał go od reszty dłoni, a następnie dodawał do swej kolekcji, wyrzucając przy tym zbędne odpadki, jakim była reszta ciała. <br><br>Mężczyźni, kobiety, młodzi, starzy – traktował wszystkich jednakowo. Esencja dobrej kolekcji tkwi w różnorodności i wspomnieniach, jakie ze sobą niosą. <br><br>Z biegiem czasu przyjmował swoją prawdziwą tożsamość, łącząc ją z tożsamością klauna, za którego się przebierał. Zatracał się w swym szaleństwie bez reszty.<br><br>Pewnego dnia popełnił jednak błąd. Stał się niestaranny, niezdarny. Jedna z jego ofiar uciekła, gdy ten leżał otumaniony alkoholem. Ofiara krzyczała, błagała o pomoc i w końcu ją znalazła. Kenneth obudził się w towarzystwie rozwścieczonego tłumu cyrkowych kompanów zmierzających w jego kierunku. Zrobił to, co potrafił najlepiej – uciekł. Po raz kolejny. Smagnął konia biczem i odjechał w kierunku nocnych ciemności. <br><br>Przemierzał kraj w przebraniu klauna, kręcąc się w pobliżu karnawałów i innych grup cyrkowych, udając, że jest ich częścią. Kontynuował swoją morderczą działalność, porywając i zabijając ofiary. Uciekał, zanim ktokolwiek zorientował się, że nieszczęśnicy zniknęli. <br><br>Pewnego dnia dotarł do zupełnie innego miejsca. Miejsca przesiąkniętego mgłą, mrokiem i śmiercią. Trafił do wymiaru Bytu. Uznał, że czuje się tu jak w domu, a nawet lepiej, więc postanowił zostać tu na stałe i powitać swoje nowe ofiary w kolorowym stroju komika z najgorszych koszmarów…","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"Rin była jedynaczką, ostatnim dzieckiem z rodu Yamaoka. Dorastała w zakurzonych korytarzach tradycyjnego japońskiego domu w Kagawie. Studiowała edukację na prywatnym uniwersytecie w Takamatsu; opłaty za studia stanowiły główne źródło problemów finansowych jej rodziny, których już wcześniej było bez liku. Matka Rin zachorowała w tym samym roku, gdy Rin rozpoczęła studia, a rachunki gromadziły się w zastraszającym tempie. Rin chciała nieco odciążyć rodziców, więc podjęła pracę na pół etatu, mając przy tym nadzieję, że sytuacja finansowa rodziny ulegnie poprawie.<br><br>Niestety, jej wysiłki zdały się na nic. Ojciec Rin patrzył z przerażeniem na kolejne długi i nie zapowiadało się na to, że zostaną niebawem spłacone. Mężczyzna zaczął pracować na dwie zmiany, licząc po cichu, że otrzyma niedługo awans. To właśnie wtedy przestał sypiać. Każdej nocy budził go ponury szept, przypominając nieszczęśnikowi o beznajdziejnej sytuacji, w jakiej się znajdował. Wycieńczony bezustanną harówką zaczął powoli tracić kontakt z rzeczywistością. Próbował zagłuszyć nocne szepty, ale te stawały się coraz głośniejsze. Podjął desperacką decyzję – udał się do swojego przełożonego i błagał go, by ten dał mu premię, awans, płatny urlop… cokolwiek.<br><br>Jego prośby zostały odrzucone. Sytuacja stała się jeszcze bardziej skomplikowana, gdyż firma, w której pracował, popełniła błąd i sprzedała serię wadliwych produktów, co odbiło się następnie potężnym echem na finansach przedsiębiorstwa. Zarząd zdecydował, że trzeba znaleźć winnego; ktoś musiał być pociągnięty do odpowiedzialności. Znaleziono odpowiedniego kozła ofiarnego – Pana Yamaokę. Mężczyzna został wyrzucony niczym śmieć po dwudziestu dwóch latach ciężkiej pracy.<br><br>W dniu w którym go wyrzucono, jego córka pracowała do późna, żeby obsłużyć klientów, którzy zostali w restauracji po godzinach otwarcia. Gdy Rin wróciła do domu, zaparkowała swój rower w szopce, a chwilę potem usłyszała przerażający krzyk swojej matki dochodzący z wnętrza domu.<br><br>Wbiegła czym prędzej do środka i pobiegła po schodach do pokoju rodziców. Jej oczom objawił się prawdziwy horror – ujrzała odcięte części ciała matki, porozrzucane po całej podłodze, jakby były starymi zabawkami, którymi nikt już się nie bawi. Kończyny kobiety zostały pocięte i ułożone w nienaturalnej pozycji. Jej piersi były pokrojone w plasterki, odsłaniając rozciętą, otwartą klatkę piersiową. Rin omal nie zwymiotowała.<br><br>Uwagę dziewczyny odwróciła ostra jak brzytwa katana, wirująca w jej kierunku. Rin próbowała zablokować ostrze, ale to wbiło się w gołe przedramię jak w gąbkę. Rin doznała największego szoku w swoim życiu; tak silnego, że przyćmił na chwilę ogromny ból. Spojrzała na swojego napastnika… własnego ojca. Stał przed nią niczym kamienna rzeźba z obojętnym wyrazem twarzy. Płakała, błagała go, by się opanował, ale ten zdawał się jej nie słyszeć i uciął jej rękę.<br><br>Zaczęła uciekać w popłochu niczym wystraszone zwierzę. Poślizgnęła się na podłodze wysmarowanej krwią. Podniosła się, chwytając pospiesznie ramę od drzwi. Ojciec Rin nie zamierzał przestać i gonił córkę z morderczym ostrzem w dłoniach.<br><br>Dziewczyna otrzymała kolejny cios w brzuch. Trzymała w swych drobnych dłoniach własne wnętrzności. Przed jej oczyma ukazał się mglisty obraz poplątanych kończyn matki.<br><br>Rin zaszarżowała w stronę ojca i przewróciła go na podłogę. Przepełniony wściekłością mężczyzna uderzył córkę w rozcięty brzuch, a ta upadła na ziemię niczym szmaciana lalka, czując w środku niewyobrażalny ból. Próbowała wstać, ale wtedy ostrze ucięło jej udo. Upadła ponownie.<br><br>Gdy pełzła w kierunku schodów, ojciec chwycił ją za włosy, szarpnął nią i rzucił w kierunku ścianki działowej. Jej głowa rozbiła się o szkło; dziewczyna spadła piętro niżej.<br><br>Usłyszała kroki nad głową. Czołgała się po stosie stłuczonego szkła, a odłamki wgryzały się w jej ciało, zdzierając bezlitośnie skórę. Ktoś musiał go powstrzymać. Nie mogło mu to ujść na sucho. Jego zbrodnia… to, co zrobił matce…<br><br>Kaszlała krwią, a jej podbródek zaczął tryskać szkarłatną posoką. W jej uszach dzwonił dźwięk bijącego serca. Czuła się, jakby jej ciało było z betonu; nie była w stanie się poruszyć.<br><br>Ziemia chwiała się pod krokami jej ojca. Wiedziała, że nie wyjdzie z tego cało, ale nie miało to dla niej żadnego znaczenia. Zależało jej tylko na zemście, w tym życiu lub następnym.<br><br>Mroczna mgła zakryła jej oczy, ale nie stłumiła gniewu dziewczyny. Rin nie zamierzała się poddać… przynajmniej na razie. Walczyła ze zbliżającą się śmiercią, aż nagle usłyszała mroczny szept, który obiecał jej, że będzie w stanie dokonać zemsty na swym oprawcy.<br><br>Przysięga została złożona. Rin zamknęła oczy. Otworzyła je w zupełnie innym miejscu…","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"Frank Morrison miał dziewiętnaście lat i niewiele sukcesów na koncie. Przestał chodzić do szkoły, kiedy wyleciał z drużyny koszykówki po tym, jak popchnął sędziego na trybuny. Frank miał jednak potencjał i mógł błyszczeć mimo mało obiecujących początków. W wieku sześciu lat został zabrany z Calgary i rozpoczął swoją wędrówkę po rodzinach zastępczych. On wpadał we wściekłość i pakował się w bójki, a oni przenosili go tylko znów i znów do nowych, obcych domów. Ostatni raz przeprowadził się przed trzema laty, kiedy jego nowy przybrany ojciec, Clive Andrews, odebrał go z centrum adopcyjnego. Jechali siedem godzin, zanim dotarli do małego domku w Ormond. To był najdłuższy czas, jaki kiedykolwiek razem spędzili. Clive był zbyt zajęty wymianą czeków z opieki społecznej na kolejki w barze.<br><br>Ormond było niewielkim, nudnym miasteczkiem na peryferiach, zamieszkałym przez sześć tysięcy osób. Szara zima utrzymywała się tu przez większą część roku. Frank robił wszystko, by dostać się do kolejnej rodziny, ale zmienił zdanie, kiedy wpadł w oko pięknej dziewczynie. Julie była powszechnie lubiana i przekonana, że zasługuje na coś więcej niż życie w Ormond, a Frank, jako przyjezdny, miał być jej przepustką. Chłopak chodził na urządzane przez nią imprezy, gdzie wszyscy byli młodsi od niego. Łatwo było im zaimponować, co bardzo mu się spodobało. Spotkał impulsywnego, lubiącego się popisywać Joeya i nieśmiałą, naiwną Susie – najlepszą przyjaciółkę Julie.<br><br>Przesiadywali w opuszczonej chatce na Mount Ormond. Wspólnie spędzony czas był idealną odskocznią od nudnej, nic nieznaczącej codzienności, w której ramy się wpasowali. Frank widział w tym szansę na przekształcenie ich braku doświadczenia w coś potężnego. Wypełniał noce rozpasaniem i szaleństwem, sprawdzając granice przyjaciół. Znęcanie się, wandalizm i kradzieże były stałym punktem ich programu weekendowego. Zaszło to tak daleko, że zrobiliby wszystko, czego by zażądał. Nic nie było niemożliwe, kiedy zakładali maski. Pewnego wieczoru Frank podpuścił Joeya, żeby zdemolował sklep, z którego go zwolnili. Z łatwością wślizgnęli się do budynku, opuszczonego po godzinach. Ich zabawę zakłócił jednak dozorca, który pochwycił Julie, gdy przechodziła obok. Słysząc jej przytłumiony głos, Frank zadziałał impulsywnie. Chwycił jej kieszonkowy nóż i bez chwili wahania wbił ostrze w plecy dozorcy.<br><br>Podczas gdy grupa patrzyła na Franka z niedowierzaniem, rozkazał im dokończyć dzieła. Joey przytrzymał jego szczękę, wziął nóż i dźgnął krwawiącego mężczyznę między żebra. Susie nie chciała tego zrobić. Frank krzyczał na nią, przekonywał, że muszą skończyć to, co zaczęli. Julie zamknęła oczy i wbiła nóż w pierś mężczyzny. Podała mokre ostrze Susie. Byli teraz wspólnikami, jednością. Susie spojrzała na Julie z niedowierzaniem, a Frank chwycił jej drżącą dłoń i zatopił nóż w gardle nieszczęśnika. Frank powiedział im, żeby się pospieszyli: wyszorowali krew z podłogi, ukryli ciało w bagażniku samochodu Joeya i odjechali na Mount Ormond.<br><br>Cała czwórka kopała w błotnistym śniegu, aby ukryć zwłoki, gdy Frank zobaczył coś poruszającego się w głębi lasu. Wyciągnął swój nóż i oddzielił się od grupy, żeby sprawdzić, co to. Mgła gęstniała wokół Franka, opary były już tak gęste, że nie widział nic przed sobą. Zawrócił po swoich śladach i natknął się na złowieszczy szlak. Udał się tą dziwną ścieżką, jakby wzywany przez mrok. Julie, Susie i Joey skończyli kopanie dołu, ale nigdzie nie mogli dostrzec Franka. Julie zauważyła ślady butów na śniegu i cała trójka udała się szlakiem, który zaprowadził ich głębiej do lasu. Kiedy Julie, Susie i Joey nie wrócili do domu na noc, ich rodzice uznali, że zbiegli z Frankiem. Każda rodzina miała inną teorię na ten temat. Atmosfera w miasteczku zmieniła się jednak, gdy w opuszczonej chatce na Mount Ormond znaleziono ciało.","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"Gdy Adiris, najmłodsza w siedmioosobowej rodzinie, miała 5 lat, pozostawiono ją na ceglanych stopniach Świątyni Oczyszczenia w centrum Babilonu. Aby poradzić sobie z niedowierzaniem i żalem, zaczęła wierzyć, że bogowie mają wobec niej plany. Swoje nowe życie spędziła na spokojnej służbie – zajmowała się ogrodami, przygotowywała ceremonialne posiłki i polerowała kadzielnice. Nocami modliła się o znak, który objawiłby jej cel życia.<br><br>Gdy dorosła, pomagała wysoko postawionym kapłanom podczas corocznych nabożeństw ku czci Koziorożca – boga wody i stworzenia. Kołysząc kadzielnicą w wielkiej hipostylowej sali, wypuściła gęste, czarne opary, które dotarły do wysokich, kamiennych filarów, a potem zniknęły. Jej zmartwienia uniosły się wraz z dymem, a ogarniające ją szczęście sprawiło, że poczuła się bliżej bogów niż kiedykolwiek wcześniej. Przez kolejne dni pracowała bez wytchnienia, wypełniając swoje obowiązki i podejmując się kolejnych wyzwań podczas udzielania kapłanom pomocy przy rytuałach oczyszczenia.<br><br>Kapłani potrzebowali coraz większej pomocy. Oczyszczenia były wykonywane codziennie ze względu na zapotrzebowanie świata znajdującego się poza wysokimi murami świątyni, gdzie ponownie pojawiła się śmiercionośna plaga. Po kilku miesiącach kapłani zarazili się chorobą. Niedługo potem byli już zbyt słabi, aby przeprowadzać jakiekolwiek rytuały. Jako że Adiris asystowała przy wielu oczyszczeniach, była jedyną osobą zdolną do kontynuowania tego procesu. Narastającą panikę trzeba było opanować, nawet gdyby miała to zrobić nowicjuszka.<br><br>Zestresowana przed swoją pierwszą ceremonią Adiris odwiedziła komnatę sanktuarium kapłanów. Gdy zapaliła świece, zauważyła wąskie przejście z tyłu. Prześliznęła się przez szczelinę i znalazła się w krypcie ukrytej pod sanktuarium. W pomieszczeniu znajdował się jedynie złoty posąg kobiety z rozpostartymi ramionami, o palcach udekorowanych klejnotami. To był znak, na który czekała Adiris.<br><br>Wielka sala pełna była wyznawców kłaniających się na widok Adiris, która szybkim krokiem podeszła do kamiennego ołtarza i chwyciła wykuty ze srebra ceremonialny sztylet. Jej palce ozdobione rubinami zacisnęły się na rękojeści niczym szpony. Ten nagły pokaz bogactwa zaciekawił wyznawców, których już wcześniej urzekły młodość i piękno Adiris.<br><br>Gdy zaczęła recytować epos o stworzeniu, kobieta z tyłu zasłabła i upadła. Adiris podbiegła do niej i zauważyła czarne pęcherze pokrywające jej stopy. Bez zawahania ucięła swój własny palec u nogi świętym ostrzem. Zakrwawioną część ciała złożyła w ofierze bogom, prosząc o ochronę dla kobiety. Wśród wyznawców zapanowała cisza – ujrzeli w Adiris nową kapłankę.<br><br>Opowieści o jej bogactwie, pięknie i pobożności zaczęły rozprzestrzeniać się po mieście tak samo szybko, jak zaraza. Wkrótce wyznawcy zaczęli nazywać ją Wielką Kapłanką Babilonu.<br><br>Jednak jej wiara została wystawiona na próbę, gdy zaczęły pojawiać się u niej pierwsze znaki zarażenia. Kaszlała flegmą i krwią, jej szyja pokryła się wrzodami, a stopa z czterema palcami pociemniała. Ze wstydu zaczęła nosić woalkę i nie rozstawała się z kadzielnicą maskującą fetor choroby, który przyległ do jej skóry. W nadziei na ratunek nie przestała wykonywać rytuałów, zapewniając błogosławioną wodę i żywność wyznawcom.<br><br>Jednak żaden rytuał nie mógł jej już ocalić. W desperackiej próbie przypodobania się bogom Adiris odeszła z miasta. Wyruszyła na północ z kilkoma wyznawcami przez zimne lasy Urartu, aż nie dało się dalej iść.<br><br>Zatrzymali się w wilgotnej jaskini, gdzie Adiris upadła w kałuży własnych wymiocin. Jej całkiem czarna już stopa była tak opuchnięta, że dalsza wędrówka nie była możliwa. Wyznawcy i Adiris zdali sobie wówczas sprawę, że wszyscy są zarażeni przez plagę.<br><br>Klęcząc wśród swoich wymiotujących wyznawców, Adiris pomodliła się ostatni raz. Czarne opary kadziła unosiły się w wilgotnym powietrzu, a potem rozdmuchiwał je zimny wiatr.<br><br>Nigdy nie znaleziono ciał Adiris ani jej wyznawców. Wiele osób opowiadało historię o jej powrocie, ale nikt tak naprawdę nie wiedział, jaki los spotkał Wielką Kapłankę Babilonu.","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"Danny Johnson, znany niektórym jako Jed Olsen, chwycił gazetę z kuchennego blatu. Była co prawda z zeszłego tygodnia, ale na pierwszej stronie na ziarnistym zdjęciu widniała jego zapadnięta twarz. Był to jeden z tych dusznych dni na Florydzie, kiedy upał i wilgoć przenikały wszystko w kuchni i powodowały, że pocił się, stojąc w miejscu. Przygarbił się na wilgotnym krześle, aby przeczytać tekst. Miał nadzieję, że artykuł będzie dobry — w końcu odwalił kawał dobrej roboty w Roseville.<br><br><i><b>GHOST FACE ZNIKA</b></i><br><br>18 czerwca 1993<br><br>Na pierwszy rzut oka Jed Olsen był skromnym i pełnym entuzjazmu freelancerem z doświadczeniem zdobytym w różnych małych gazetach. Pracownicy Roseville Gazette docenili jego szczerość i otwartość, dlatego już po pięciu minutach rozmowy kwalifikacyjnej zaczęli traktować go jak jednego z nich:<br><br>„Jed szybko zauważył redaktora naczelnego, uśmiechnął się do niego szeroko i mocno uścisnął jego dłoń. Rozmawiali o tradycyjnych amerykańskich wartościach. Potem został przyjęty” — były redaktor Roseville Gazette<br><br>Olsen nigdy nie uzasadniał swojej nieprzewidywalnej ścieżki kariery, która prowadziła go między kilkoma małymi miastami od Utah po Pensylwanię. Nie można było zweryfikować jego wcześniejszych dokonań. Miał przyzwoite portfolio i dobre nastawienie, a gazeta pilnie potrzebowała redaktora.<br><br><b>MORDERSTWA W ROSEVILLE</b><br><br>Olsen pracował w gazecie przez 5 miesięcy, gdy rozpoczęła się seria morderstw w Roseville: ofiary od najmłodszej do najstarszej były dźgane w swoich domach. Z raportów wynikało, że były one wybierane losowo, jednak zabójca wiedział, jak poruszać się po ich domach. Wiele ran kłutych wskazywało na motyw osobisty. Nie znaleziono śladów DNA. Lokalna policja była bezradna: morderstwa dokonane były z furią przypominającą zbrodnię przeprowadzoną z pasją, a jednocześnie z zimną premedytacją.<br><br>Morderca lubił także prześladować swoje cele. Kilka dni przed śmiercią dwie ofiary zgłaszały, że są śledzone w drodze do domu przez ciemną postać. Zabójca miał iść za nimi z Walleyes — małego baru w północnym Roseville — i robić im zdjęcia w domu, szukając sposobu na wejście do środka. Jedną ofiarę mógł obserwować tygodniami, skrupulatnie zapisując jej zwyczaje i harmonogram. Gdy poczuł chęć dokonania zabójstwa, udawał się do najbardziej bezbronnej ofiary na liście i po cichu włamywał się do domu.<br><br>Cała redakcja pracowała nad historią morderstw w Roseville. Olsen często był wyznaczany do przeprowadzania wywiadów z rodzinami ofiar i przekazywania oficjalnych oświadczeń od policji. Nikt nie wiedział wtedy, że jego udział przyczynił się do zwiększenia liczby ciał.<br><br><b>GHOST FACE</b><br><br>W Roseville wybuchła panika, gdy Olsen stworzył materiał przedstawiający zakapturzoną postać, włamującą się w nocy do domu. Zamaskowana jasna twarz w ciemności spojrzała na sekundę w kamerę, zanim zniknęła w środku. Artykuł napisany przez Olsena nosił tytuł „Ghost Face na taśmie”. Zdawał się być wtedy dumny ze swojej pracy i podobało mu się, że całe miasto bało się jego strasznych historii.<br><br>Kilka tygodni później Olsen pozostawił na swoim biurku notatkę i zniknął:<br><br>„Mam nadzieję, że podobały się Wam moje historie — z radością wprowadzałem je w życie. Nie martwcie się — Duch może i odszedł, ale jeszcze nie skończyłem”. – Jed Olsen<br><br>Policja w Roseville wciąż odmawia komentarza na temat Jeda Olsena przebywającego na wolności.<br><br>Danny uśmiechnął się, wyrywając artykuł z gazety. Gdy śledztwo zaczęło wskazywać na niego, spakował torby i szybko opuścił Roseville.<br><br>Wstał, plecy przykleiły mu się do lepkiego oparcia. Gdy wszedł do sypialni, zalała go fala wilgoci. Woda kapała z małego zaparowanego okna, a kawałki tapety zwisały bezwładnie ze ściany. Jej kwiecisty wzór był pokryty przerażającymi zdjęciami i nagłówkami z gazet. Danny przykleił tygodniowy artykuł nad zdjęciem poszarpanych skalpów. Poczuł delikatny głód — kiedy ostatnio jadł? Rano, kiedy czyścił nóż i ubrania? Czy wczoraj wieczorem, gdy skończył śledzić tę dziewczynę? Nie pamiętał.<br><br>Cofnął się i zaczął podziwiać swoje dzieło na ścianie. Zagłębił się w myślach, wspominając wszystkie artykuły, które napisał, historie, które zaplanował, i sceny, które wprowadził w życie.<br><br>Przebiegł go dreszcz. Chłodna bryza zmieniła wilgoć w sypialni w gęstą, lodowatą mgłę. Usłyszał krzyk kobiety. Suche liście zaskrzypiały pod jego stopami.<br><br>Uśmiechnął się w oczekiwaniu.","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"Twarz otwierająca się jak kwiat pełen ostrych zębów, wielkie zakrzywione pazury oraz silne nogi umożliwiające skakanie na ofiary czynią Demogorgona przerażającym potworem w każdym wymiarze. To bestia wpadająca w niepowstrzymany szał podczas polowania na ofiarę, którą rozrywa na kawałki i pożera, nie zostawiając niczego. Stworzenie to nie zna współczucia i nie ma ograniczeń. Nachylając się nad ofiarą, nie okazuje cienia litości — kieruje nim jedynie instynkt i nienasycona żądza krwi. Demogorgon to doskonały łowca, makabryczny dowód istnienia upiorów czających się po Drugiej Stronie — oczywisty wybór dla Bytu.","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"Szacunek dla rodowego nazwiska nigdy nie był wystarczający dla Kazana Yamaoki. Mężczyzna pragnął prześcignąć reputację ojca i dokończyć proces, który uważał za oczyszczanie kultury samurajów z oszukańczych farmerów. Ojciec próbował zwrócić jego uwagę ku bardziej szlachetnym celom, jednak Kazan nie słuchał tych rad. Pożyczył katanę ojca i wyruszył na mroczną pielgrzymkę w celu udowodnienia swojej wartości i usunięcia oszustów z Japonii. Ignorując wpajany mu niegdyś kodeks, zabijał kłamców na wzgórzach i w dolinach, na plażach i w lasach. Morderstwa były brutalne, okrutne i makabryczne. Upokarzał nie tylko farmerów, lecz także wojowników, zdzierając z nich zbroję i zrywając im z głów koki. Jego gniew, żądza krwi i wypaczone poczucie honoru nie znały granic. Mnisi uważali, że opętało go coś mrocznego, coś, co pochodziło z innego świata, i przeklęli go. Pewien szlachcic zaczął nawet nazywać go „Oni-Yamaoka”, gniewnym samurajem, co było obrazą zarówno dla Kazana, jak i jego rodziny.<br><br>Zdeterminowany, by oczyścić nazwisko rodu, Kazan zaczął mordować wszystkich, którzy ośmielili się mówić o nim „Oni-Yamaoka”. Nie rozumiał tej obelgi. Pokonał przecież najlepszych i oczyścił klasę samurajów z oszustów. Dlaczego ktokolwiek miałby traktować go w ten sposób? Czy to dlatego, że wszedł na pole bitwy, by zabić najgroźniejszych wojowników? Czy to dlatego, że za pomocą kanabō zmiażdżył setki czaszek? A może dlatego, że zachowywał trofeum po każdej z ofiar? To nie miało znaczenia. Nie mógł znieść miana potwora, a złowieszczy głos w jego głowie nakazał mu zabicie lorda, który zbezcześcił jego imię.<br><br>Gdy ruszył w stronę miasta lorda, na jego drodze stanął samuraj. Kazan przygotował kanabō. Przeciwnik zaatakował bez słowa i szybko zyskał przewagę, zawahał się jednak. Potężnym uderzeniem Kazan zmiażdżył jego hełm i głowę. Gdy zbliżył się do powalonego wroga, ujrzał twarz ojca. Zachwiał się i upadł. Ojciec spojrzał na Kazana z mieszaniną wstydu i żalu, nim wydał ostatnie tchnienie. Kazan zamknął oczy i zaczął krzyczeć w agonii. Krzyczał, aż opadł z sił. Kiedy ponownie otworzył oczy, ojciec zniknął. Nie dość, że Kazan go zabił, to jeszcze pozwolił złodziejom ukraść jego ciało dla zbroi.<br><br>Rozgoryczony, zagubiony i rozczarowany, włóczył się bez celu, a głos ojca dzwonił mu w głowie, drwiąc z niego i przypominając mu o porażkach. Wywoływało to u niego napady bezgranicznej wściekłości. Pewnego dnia w lesie natrafił na posąg oni. Zatrzymał się i stał bez ruchu przez dłuższą chwilę. Zniszczony i zarośnięty pomnik zdawał się z niego drwić i oskarżać o bycie jednym z fałszywych samurajów, których tak bardzo chciał zniszczyć. Kazan potrząsnął głową, aby wyrzucić z niej kpiący głos, i jak przez mgłę przypomniał sobie lorda, który nazwał go „Oni-Yamaoka”.<br><br>Ponownie czując przypływ gniewu, Kazan wyruszył w pokryte śniegiem góry – do miasta, w którym zasiadał lord. W bramie czekało na niego kilkunastu samurajów; wszyscy polegli od ciosów kanabō. Szybkość i siła Kazana były niezrównane, a furia – niepojęta. Pokryty krwią przebił się przez miasto i szybko odnalazł lorda ukrywającego się w willi. Wyciągnął go z szafy i przeciął mu ścięgna, żeby go unieruchomić. Potem parzył, jak ten błaga i wije się jak robak. Bez wahania wepchnął mu pięść w usta i wyrwał plugawy język, który zbezcześcił jego imię.<br><br>Zadowolony Kazan wyszedł z willi, lecz został otoczony przez dziesiątki farmerów trzymających zardzewiałe kosy, ostre widły i ciężkie pałki. Przeżył kilka pierwszych ataków, ale z każdej strony nadciągało zbyt wielu napastników. Chwilę później leżał na ziemi, patrząc w zimne, obojętne, ciemne niebo, a wieśniacy po kolei dźgali i torturowali tego „oni”, który zamordował ich ukochanego lorda. Zaciągnęli Kazana do małego kamiennego młyna, by kontynuować tortury, a potem zostawili go na powolną i bolesną śmierć. Gdy wrócili, młyn wypełniała dziwna czarna mgła, a ciała Kazana i jego kanabō nigdzie nie było. Dało to początek mrocznej legendzie o rozwścieczonym oni nawiedzającym miasto.","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"Caleb Quinn urodził się wśród piaszczystych nieużytków środkowego zachodu Ameryki jako syn ledwo wiążących koniec z końcem irlandzkich imigrantów. Choroby, głód i śmierć były częstym widokiem na pograniczu i pionierzy musieli zadowolić się każdym ochłapem, podczas gdy magnatom żyło się doskonale. Ojciec Caleba, były inżynier, nie miał zbyt wielu okazji do wykonywania swojego zawodu, bo pracodawcy zgodnie wywieszali jedną informację: nie przyjmujemy Irlandczyków. Jego porzucone narzędzia leżały nieużywane przez lata, aż odkopał je Caleb. Zauważywszy zainteresowanie syna, ojciec podarował mu stary klucz.\\n\\nUrządzenia, które Caleb tworzył pod okiem ojca, miały niezwykłe funkcje, a bez nadzoru stawały się dość złowrogie. Chłopak opracowywał w ukryciu maskę, która wbijałaby igły w ludzkie oczy i wyrywała je z oczodołów. Rysował też szkice, na których dokuczający mu chłopcy testowali urządzenie. \\n\\nPo pewnym czasie umiejętności Caleba stały się pożądane na rynku i pracodawcy odeszli od swoich dyskryminujących poglądów. Henry Bayshore, właściciel United West Rail, zatrudnił Caleba.\\n\\nW pierwszej kolejności chłopak opracował pistolet, który strzelał gwoździami kolejowymi w ziemię. Następnie skonstruował parowe wiertło do drążenia tuneli. Jednak ze względu na udawaną obojętność Bayshore\'a, urządzenia zaczęły wkrótce pojawiać się w innych firmach, a patenty zostały skradzione Calebowi i sprzedane. \\n\\nCaleba nawiedziło znane uczucie, które pozostawiło ostry ból w sercu. Nawet teraz walczył o ochłapy, a bogacze korzystali z jego pracy intelektualnej. Ogarnęła go wściekłość. Wpadł do biura Bayshore\'a i przerobił jego twarz na krwawą miazgę. Gdy go odciągnęli, wycelował swój specjalistyczny pistolet w brzuch szefa i pociągnął za spust. Gwóźdź kolejowy przebił się przez skórę oraz wnętrzności i przybił Bayshore\'a do biurka. \\n\\nCaleb uniknął stryczka tylko dlatego, że szef jakimś cudem przeżył. Quinn spędził piętnaście lat w Hellshire — pierwszym w kraju prywatnym więzieniu. W fortecy pełnej niepiśmiennych skazańców znalazł nieoczekiwanego przyjaciela — wykształconego naczelnika. W zamian za tworzenie dla niego narzędzi tortur Caleb otrzymywał dodatkowe posiłki. Po jakimś czasie naczelnik zaproponował złagodzenie kary. Mówił o czymś większym niż pieniądze — o kapitale politycznym. Twierdził, że dzięki swoim kontaktom jest w stanie wrobić Bayshore\'a i wsadzić go za kraty na resztę życia. Chciał za to tylko jednego: bogactwa. Caleb miał wypełnić więzienie. Korzystać ze swojej pomysłowości, aby dostarczać żywych przestępców. \\n\\nCaleb powrócił do swojego warsztatu i po wprowadzeniu kilku modyfikacji stworzył coś nowego — kuszę. Pierwsza okazja do wypróbowania urządzenia nadarzyła się, gdy złodziej obrabował chińską pralnię. Caleb wyciągnął swój prototyp. Metalowe połączenia zaskrzypiały, gdy gwóźdź wystrzelił i przebił brzuch celu. Jednak w chwili szarpnięcia, włócznia zahaczyła się o wnętrzności złodzieja i wyrzuciła je na zakurzoną drogę. \\n\\nPo kilkunastu próbach liczba wypatroszeń zmniejszyła się. Naczelnik więzienia załatwił uwolnienie Irlandczyków, którzy utworzyli szajkę Caleba. Narodził się gang z Hellshire. \\n\\nPrzez sześć lat podróżowali po kraju, poszukując przestępców do więzienia i tym samym wywiązując się ze swojej części umowy. Po krwawej walce w Glenvale Calebowi wpadł w oczy nagłówek w gazecie: Henry Bayshore kupuje więzienie Hellshire. Na zdjęciu oszpecony Bayshore dumnie ściskał rękę naczelnika. Serce Caleba zabiło wściekle, krew zagotowała się, jakby miała wykipieć z jego żył. Został sprzedany. Był tylko pionkiem w grze bogatych ludzi. \\n\\nCzłonkowie gangu z Hellshire przysięgli wierność Calebowi i ruszyli po głowę naczelnika. W niszczycielskim pędzie przebili się do więzienia, wydając z siebie przerażające okrzyki. Strażnik uniósł pistolet, lecz zawahał się. Wtedy włócznia przebiła jego klatkę piersiową. Caleb podniósł jego głowę i uderzał nią w celę więzienną, aż przebiła się przez kraty. \\n\\nPo dotarciu do biura naczelnika Caleb wyważył drzwi kopniakiem, a jego oczom ukazał się radosny widok. Nie tylko naczelnik kulił się w rogu pokoju. Był tam też Henry Bayshore. Przepełniony wściekłością Caleb wpadł na Bayshore\'a, tłukąc i rozszarpując jego ciało. Krew mężczyzny spływała mu po twarzy, a u stóp rosła szkarłatna plama. Członkowie gangu zaatakowali naczelnika, łamiąc jego kości każdym kolejnym kopnięciem. \\n\\nGdy obaj mężczyźni błagali o śmierć, napastnicy wyciągnęli ich do części wspólnej i pozostawili na pastwę więźniów.\\n\\nPrzesiąknięty krwią i potem Caleb zatoczył się do swojej celi, nie zwracając uwagi na krzyki Bayshore\'a. Usiadł na krawędzi łóżka, a krew kapała z jego palców. Gęsta i nienaturalna mgła przeniknęła przez kraty w oknie. Quinn wyjął swój stary, popękany i zardzewiały klucz. Przeciągnął po nim kciukiem, przyglądając mu się zamglonymi oczami. Nie pamiętał, kiedy go dostał. Nie obchodziło go to. U stóp widział zakurzoną ścieżkę, a na jej końcu sylwetki wszystkich, którzy go skrzywdzili: chłopców ze szkoły, wykorzystujących go kierowników i… Henry\'ego Bayshore\'a. Z mgły wyłoniły się narzędzia, którymi mógł się ich pozbyć — bezlitosne stalowe haki, piękne w swej prostocie. Poczuł ból w nodze, gdy wstał, ale wytrzymał i ruszył wzdłuż zakurzonej ścieżki, pozostawiając za sobą krwawy ślad. ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"Piramidogłowy, sadystyczny i bezlitosny kat, ma obsesję na punkcie wymierzania kary przez ból. Obarczony stalowym hełmem na głowie, z ogromnym nożem w ręce, przemierzał piekielne korytarze Silent Hill, wykonując zadanie, którego nikt tak naprawdę nie rozumiał. Tam, gdzie się pojawiał, nawet potwory chowały się w mroku. Ci, którzy wchodzili mu w drogę, stawali się ofiarami bezgranicznej agresji. Gdy spełnił swoje zadanie i jego obecność nie była już konieczna, zaczął przygotowywać się do długiego odpoczynku. Jednak jego umiejętności okazały się potrzebne gdzieś indziej. Mgła, która go otoczyła, była inna od tej, którą znał z Silent Hill – jakby każda smuga zawierała nerwy wijącej się istoty, która go szukała. Właśnie wtedy wyraził niewypowiedzianą zgodę. Kłębiąca się chmura stanowiła zaproszenie do spełnienia kolejnego sadystycznego obowiązku. Piramidogłowy wszedł we mgłę i jeszcze raz postanowił zrobić to, co do niego należało. ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"Aby pojąć kondycję ludzką, należy wznieść się ponad nią. Tak brzmiało kredo Talbota Grimesa, szkockiego chemika, który dzięki swej niepohamowanej ambicji wzniósł się na wyżyny. Był lubianym dzieckiem – bystrym, charyzmatycznym chłopcem, który nie bał się podważania autorytetów. Mimo ogłady towarzyskiej był też wolnym duchem i godzinami samotnie eksplorował ciągnące się kilometrami okoliczne pola i łąki. Jednak jego dziecięca ciekawość nieomal przywiodła go do zguby, kiedy zaczął eksperymentować z kępą naparstnicy purpurowej. Wiele dni spędził w łóżku, pocąc się i zwracając każdy pokarm, który trafił do jego żołądka. Kiedy odzyskał siły, ogarnął go nie strach, lecz fascynacja. Było coś magicznego w tym, jak jeden mały kwiatek mógł tak drastycznie na niego wpłynąć.<br><br>W młodości równie szybko co jego wątpliwe metody rozwinęła się jego ambicja. Mimo kilku nagan ukończył London School of Medicine z najlepszymi wynikami. Jego gotowość do przekraczania granic zapewniła mu miejsce w Brytyjskiej Kompanii Wschodnioindyjskiej, gdzie w ciągu paru lat zdobył pozycję głównego chemika. Z czasem dokonał jednego ze swoich największych odkryć: stworzył substancję chemiczną, która zwiększała wydajność pracownika, jednocześnie zmniejszając jego zapotrzebowanie na odpoczynek. W nagrodę za to osiągnięcie otrzymał tajne laboratorium pod więzieniem na Dyer Island.<br><br>Tam, u wybrzeży Indii, jeńcy z wojny opiumowej wbrew swej woli stawali się jego obiektami badań, które doprowadziły do wynalezienia substancji znacząco zwiększającej wytrzymałość żołnierzy na ból. Choć większość skutków ubocznych była drugorzędna, według plotek część żołnierzy po jej zażyciu zwariowała. W zwierzęcym szale masakrowali wioski, nabijali na bagnety tubylców i wieszali ich na gałęziach drzew. Brakowało jednak oficjalnych raportów na ten temat, a Talbot nie chciał brać odpowiedzialności za coś, co mogło być tylko przerysowaną opowieścią z frontu.<br><br>Zdawało się, że nic nie poruszy jego bezdusznego intelektu, zaś on sam również nie zdawał sobie sprawy, że jego dyskusyjne badania przysporzyły mu wrogów. Świadomość tego uderzyła go całkiem dosłownie – stalową rurką w tył głowy, podczas wycieczki do Mangaluru. Skrępowano go i załadowano na ciężarówkę. Kiedy zdjęto mu przepaskę z oczu, niezdrowo wyglądający mężczyzna pokazał mu zbiorową mogiłę wypełnioną setkami ciał. Talbot nie wiedział, że w wyniku stosowania jego środka zwiększającego produktywność zmarło dość ludzi, by obsadzić całą fabrykę. Wiedział za to, że nie obroni się przed wściekłością i oskarżeniami swojego porywacza – mógł jedynie skulić się pod razami stalowej rurki. Następnie wrzucono go do mogiły i pozostawiono w niej na śmierć. Jego świadomość raz po raz zapadała się w czarną pustkę, kiedy czołgał się, próbując uciec z pułapki, a jego palce zatapiały się w rozkładających się ciałach. Czarne muchy żerowały na jego odsłoniętej skórze, wbijając się w nią niczym igły. Kiedy wreszcie upadł, spojrzał prosto w olśniewająco piękne, piwne oczy zmarłej kobiety. Zbyt słaby, by się od niej oderwać, mógł jedynie podziwiać dzieło swego życia.<br><br>Ktoś go jednak zabrał ze skraju śmierci. Obudził się w niewielkim łóżku, gdzie ujrzał nachylającą się nad nim dobrotliwą, pomarszczoną twarz. Każdy oddech sprawiał mu niewyobrażalny ból, lecz wrócił do zdrowia dzięki troskliwej opiece w starożytnej szkole mistyków udającej klasztor. W bujnych ogrodach za wysokimi, skromnymi murami mnisi studiowali zakazane teksty, dążąc do rozszerzenia ludzkiego umysłu, aby odnaleźć inne wymiary. Wierzyli, że wszystko jest ze sobą połączone.<br><br>Wiedza Talbota okazała się nieoceniona, zaś jego substancje zmieniające stan umysłu gładko łączyły się z teoriami ekspansji neuronalnej. Uświadomił sobie, że jego ocalenie nie było przypadkowe – wyrwano go z tej jamy, aby przyczynił się do poszerzenia wiedzy szkoły. Zgodził się pomagać, dopóki w pełni nie odzyska sił. Jego zadaniem było prowadzenie badań nad czymś, co mnisi nazywali „substancją duszy”, związkiem otrzymywanym z szyszynki, który mógł otworzyć trzecie oko. To, co zaczęło się jako przysługa dla jego wybawicieli, szybko przerodziło się w prawdziwą obsesję. Zgłębiając archiwa zapomnianych tekstów, odkrył notatki, które potwierdziły jego niewiarygodne pomysły. Marzył o wprowadzeniu ludzkości w nowe Oświecenie. Być może wtedy obraz setek martwych ciał robotników – i tych piwnych oczu – opuściłby jego umysł raz na zawsze.<br><br>Kiedy zbliżał się do przełomowego momentu swoich badań, postawa mnichów wobec niego zmieniła się. Łagodnym uśmiechom towarzyszyły teraz zaniepokojone spojrzenia, które zauważone, szybko się odwracały. Uprzejme konwersacje, w które niegdyś go wtajemniczano, stały się ściszonymi szeptami. Ostatnią rzeczą, jaką zapamiętał ze szkoły, były pęknięcia na suficie nad swym łóżkiem, rozchodzące się w tynku niczym dendryty.<br><br>Jego kolejne wspomnienia to mozaika obrazów i wrażeń. Rozmazane światła, łomot końskich kopyt na bruku, szorstki worek na policzkach i ostre ukłucia w ramię. Obudził się umęczony i brudny, rozciągnięty na słomianym sienniku w palarni opium. Pierwsza myśl, która pojawiła się w jego zamglonym umyśle, dotyczyła notatek – jedynego świadectwa przełomowych odkryć. Szukał ich gorączkowo, rzucając się bezwładnie po obskurnej piwnicy i wzywając pomocy. Pozostali mieszkańcy nory patrzyli na niego z hamaków pustym, apatycznym wzrokiem, po czym zapadali w półsen. Nim się zorientował, pojawiła się przed nim zakapturzona postać, która zagłębiła igłę w jego ramieniu, i ponownie rozwarła się pod nim ciemność.<br><br>Świadomy. Znowu. Każdy kolejny raz bardziej mglisty. Dotknął językiem ziejących dziur między zębami. „Jak długo?” – zastanawiał się. Substancja duszy. Notatki. Na granicy przełomu. Odległy szept wypełnił jego umysł.<br><br>Złapał jakiś kamień i zaczął go ostrzyć drżącymi dłońmi o podłogę. W przygaszonym świetle palarni, pośród jej katatonicznych mieszkańców, rył w ścianach swoje badania, wszystko, co pamiętał. Pisał godzinami, aż z palców ciekła mu krew. Przeniósł się na podłogę, przyjmując wszystko, co dyktował mu głos, chociaż nie był zdolny go pojąć. Kiedy skończyła mu się podłoga, chwycił krzemień i zaczął ryć na własnej klatce piersiowej. Zbroczony krwią ujrzał przed sobą prawdziwy cud – wspaniałe pole bujnych, barwnych kwiatów naparstnicy. Szept kusił go, by wszedł na to pole i odkrył światy i wymiary przekraczające ludzkie pojęcie. Przez chwilę Talbot poczuł ten sam dziecinny zachwyt co lata temu.<br><br>Mieszkańców palarni opium obudziła cisza i gryzący zapach dymu unoszącego się w powietrzu. Kiedy wygramolili się ze swoich legowisk, wciąż lekko odurzeni, odkryli, że kamienna podłoga jest mokra od krwi, której cienkie strużki płyną w pęknięciach. Gdy ich oczy zaś przyzwyczaiły się do mroku zalegającego w pomieszczeniu, zauważyli napisy na każdej możliwej powierzchni. Była to tylko jedna linijka, powtarzająca się bez końca: <i>Śmierć to dopiero początek</i>.","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"Bliźnięta syjamskie Charlotte i Victor Deshayes nawiązały niepowtarzalną więź emocjonalną. Prawdopodobieństwo ich udanych narodzin w XVII wieku było tak niskie, że wydarzenie to mogłoby zostać opisane jako cud, jednak mimo to życie bliźniąt stanowiło niekończące się pasmo prześladowań. Dolna część ciała Victora przyrośnięta była do klatki piersiowej siostry, a jego nogi poskręcane wokół jej mięśni i organów. Był mniejszy od Charlotte i wyglądał bardziej jak dodatek do jej ciała niż w pełni rozwinięty chłopiec. Wraz z krzykiem nowo narodzonych dzieci wrzeszczała też położna, która odebrała poród. Wybiegła z domu i rozpowiadała wszystkim o demonie zrodzonym z wiedźmy. Tak rozpoczęło się polowanie na Charlotte, Victora i ich matkę Madeleine.<br><br>Kolejne lata stanowiły dla bliźniąt przelotne wspomnienie, jednak były bliższe normalności niż cokolwiek w ich życiu. Podróż z matką rodzeństwo uważało za coś, co przechodzą wszystkie dzieci, a zabawy w bieganie i chowanie się na francuskiej wsi nie wydawały się niczym niezwykłym. W wieku pięciu lat bliźnięta stanęły przed nowym wyzwaniem, gdy zachorowała ich matka. Blada i wyczerpana Madeleine musiała scedować obowiązek zbierania jedzenia na Charlotte. Dziewczynka, obciążona dodatkową odzieżą zakrywającą wystające ciało Victora, wyruszyła z namiotu w lesie do pobliskiego miasta. W tym dziwnym dla niej miejscu zrobiła to, czego się uczyła: poczekała na dobry moment na rynku i zwinęła całą żywność, jaką mogła. Misja zakończyła się sukcesem, jednak radość była krótkotrwała.<br><br>Po północy rozdzierające ciemność płomienie otoczyły obóz rodziny. Głośny rozkaz zakłócił nocną ciszę i tłum łowców czarownic wdarł się do środka. Brudne ręce wyciągnęły bliźnięta z łóżka. Charlotte gorączkowo kopała każdego, kto się zbliżył. Madeleine krzyczała rozpaczliwie do dzieci, lecz jej głos został brutalnie uciszony uderzeniem pałki w głowę. Victor jęczał jak szczur w pułapce.<br><br>Łowcy działali bardzo szybko. Obecny na miejscu sędzia ogłosił Madeleine winną czarnoksięstwa, czego dowodem było urodzenie demona. W ciągu kilku minut jej nieprzytomne ciało zostało przykute do drzewa, a wokół stóp ułożono jej suche gałązki i mech. Gdy się obudziła, nie walczyła. Błagała tylko, aby dzieci się odwróciły. Bliźnięta nie miały jednak wyboru. Zmuszono je do patrzenia, jak płomienie ogarniają spódnicę matki i przypalają jej ciało, jak kapie z niego tłuszcz, jak rozpuszcza się jej twarz. Patrzyły, aż rozdzierające wrzaski płonącej kobiety całkowicie ucichły, a po ich matce pozostał jedynie żarzący się pył i przyprawiający o mdłości smród.<br><br>Wszelka radość i dobro, które były w dzieciach, umarły razem z ich matką. Zamknięto je w klatce i sprzedano tajemnej grupie ludzi przyodzianych w czarne płaszcze. Victor jak wściekłe zwierzę gryzł i drapał każdego, kto się zbliżył. Uspokajały go jedynie objęcia siostry. Charlotte, pełna goryczy i nienawiści do wszystkich z wyjątkiem brata, wyznaczyła sobie jako cel jego ochronę.<br><br>W świątyni przez wiele lat poddawano ich nietypowym eksperymentom. Niektóre były okrutne, a inne – zwyczajnie zaskakujące. Jednego dnia kazano im skręcić kark małego szarego ptaka. Kiedy indziej musieli spuszczać krew z palców do wazonu z różami. Co siedem dni spali z gałęzią wilgotnego dębu pod poduszką. No i śpiewanie: niekończący się chór zakapturzonych postaci w zaplanowanych odstępach.<br><br>Z czasem nadeszła pora na ostatni eksperyment. Dwie postacie w płaszczach zapędziły bliźnięta na środek świątyni i położyły Charlotte na ołtarzu w pomieszczeniu oświetlonym świecami. Pomarszczona twarz wyłoniła się spod kaptura. Mężczyzna położył dłonie na czołach rodzeństwa i dokładnie zbadał obie czaszki. „Memento mori” – powiedział i wyciągnął błyszczące ostrze.<br><br>Charlotte obróciła się na bok i zsunęła brata z ołtarza. Chłopiec pisnął, wyciągnął rękę najdalej, jak potrafił, i zrzucił jeden z kandelabrów na ziemię. Suche drewno natychmiast zajęło się płomieniami. Ogień rozprzestrzeniał się po podłodze i podpalał leżące na niej czarne płaszcze. Krzyki agonii przebiły się przez chaos i dodały Charlotte energii. Zaczęła biec przez piekło, w którym jej oczy zasłonięte były czarnym dymem i ogniem. Czuła bolesny ciężar w płucach. Nie mogła znaleźć wyjścia, każdy krok prowadził do wszechogarniającego ciepła. Upadła na kolana i zaczęła się dusić, gdy nagle zobaczyła słońce i drzewa. Wyszła z ognia na mokrą od rosy trawę. Nie oglądała się za siebie – biegła naprzód, aż upadła.<br><br>Gdy otworzyła oczy, sięgnęła po rękę Victora. Nie poruszył się. Jego ciało zwisało bezwładnie z jej klatki piersiowej. Charlotte chwyciła go za twarz i spojrzała w jego smutne, nieruchome oczy. Nie czuła już ruchów, do których była przyzwyczajona: ciągnięcia skóry i dźgania nóg brata w klatce piersiowej. Victor był martwy.<br><br>Charlotte nie miała wyboru – musiała ruszać. Bała się, że śledzą ją czarne płaszcze i łowcy wiedźm. Ukryła zwłoki brata pod ubraniem i poszła w stronę kanałów pobliskiego miasta. Na miejscu rozbiła obóz, z którego potem często wychodziła na powierzchnię, aby ukraść trochę jedzenia. W desperacji uciekała się nawet do podbierania świńskich pomyj z okolicznych stodół. Przez lata zwłoki Victora zgniły, jednak choć jego kończyny sczerniały i ropiały, ciało zdawało się odporne na całkowity rozkład, jakby wciąż płynęła w nim krew siostry. Ochrona martwego brata stała się jednym sensem życia dla Charlotte. Nie chciała stracić jedynego członka rodziny, jaki jej pozostał.<br><br>Jej nastoletnie lata były walką o przetrwanie. Nienawiść Charlotte do ludzi rosła każdego dnia; dziewczyna zdawała sobie sprawę, że nigdy nie dadzą jej spokoju. Nieważne, ile osób ginęło podczas jej nieudanych kradzieży i desperackich prób ucieczki – zawsze znajdowali się kolejni prześladowcy wykrzykujący w jej stronę paskudne przezwiska: potwór, demon, wiedźma. A najgorsze były czarne płaszcze. Ich polowanie nie miało końca, więc stale musiała pozostawać w ruchu.<br><br>Przez lata uciekała, zabijając z przymusu i tuląc dawno zmarłego brata w nocy. Podczas pewnej surowej zimy jej ciało zaczęło odmawiać posłuszeństwa. Jedzenia było mało, a schronienie w chybotliwej szopie nie wystarczało przy lodowatych temperaturach. Z sierpem w dłoni skryła się w pobliżu ogniska w lesie i nie wiedziała, co dopadnie ją pierwsze – czarne płaszcze czy zimno. Gdy w pobliżu jej nozdrzy pojawił się szron, a usta przybrały niebieski odcień, Charlotte poczuła coś zupełnie nowego. Akceptację. Zamknęła oczy, czekając na objęcia śmierci, gdy nagle przeszywający i złowrogi krzyk dobiegł jej uszu. Victor poruszył się i odpadł z jej klatki piersiowej. Spowiła go mgła. Nim Charlotte zdążyła zareagować, jej brat znalazł się na śniegu w plamie krwi, wstał i zaczął biec.<br><br>Charlotte oparła się śmierci i zaczęła gonić Victora. Wołała jego imię, biegnąc przez las, aż zaczęła tracić siłę w nogach. Nagle zobaczyła go siedzącego na krawędzi gęstej mgły. Jego twarz była zdeformowana i zdziczała. Krzyczał, gdy postać w ciemnym kapturze wyszła z mgły, chwyciła go za ramię i pociągnęła za sobą. Spokój, który ogarnął Charlotte, zniknął. Zastąpiły go kipiąca nienawiść i gniew, na których tak długo polegała. Zacisnęła palce na sierpie i wbiegła w mgłę, gotowa wypatroszyć każdego, kto zbliży się do jej brata.","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"Ji-Woon Hak kwitł, gdy otrzymywał uwagę innych. Napędzało go każde oko, które na niego patrzyło, i każdy język, który wymawiał jego imię. W całym tym prestiżu miał tylko jedno pragnienie: więcej. Już jako dziecko znajdował sposoby, by przyciągać tłumy. Podczas pracy w rodzinnej restauracji uatrakcyjniał lokal za pomocą przedstawień, podczas których popisywał się sztuką rzucania nożami. Naiwni turyści wierzyli, że była to południowokoreańska tradycja, i z radością płacili, by oglądać pokazy. Ojciec Ji-Woona wydał zarobione na restauracji pieniądze na lekcje śpiewu i tańca dla syna, pchając go ku sławie, której sam nigdy nie osiągnął.<br><br>Ji-Woon nie zawiódł oczekiwań ojca. Po latach prezentowania umiejętności nieistotnym ludziom na konkursach talentów trafił na drogę do gwiazdorstwa. Yun-Jin Lee, producentka w Mightee One Entertainment, przyjęła go do programu szkoleniowego. Przeniósł się do internatu w Seulu, gdzie przez czternaście godzin dziennie zmieniany był w gwiazdę, uczony ruchów i śpiewu oraz odpowiedniej równowagi pewności siebie i skromności.<br><br>Trening był wykańczający, ale działał. Yun-Jin wybrała Ji-Woona, aby dołączył do zespołu NO SPIN i wprowadził do grupy nową energię. Sława przyszła niemal od razu. Ji-Woon żył wśród wywiadów i zachwytu. I choć zabiegany harmonogram męczył członków jego zespołu, on sam był pełen energii. Każdy dzień potwierdzał, że był lepszy od miernot nieustannie wypluwanych przez społeczeństwo.<br><br>Jednak z czasem szampan stracił swój smak. Gdy Ji-Woon patrzył na fanów, widział, że ich radość i zazdrość dzielą się na pięciu członków zespołu. To spostrzeżenie sprawiło, że desperacko zapragnął czegoś więcej.<br><br>Ji-Woon zachowywał pozory i udawał urok, który dawno zatonął w morzu pogardy. Nagrał ostatni album NO SPIN z kolegami bez najmniejszej pomyłki. Po długiej przerwie obiadowej wrócił do studia i odkrył, że los zrobił mu prezent. Zapachu spalonych kabli nie dało się z niczym pomylić. Popędził do pokoju producenta i znalazł drzwi zablokowane przewróconymi głośnikami. Po drugiej stronie koledzy z zespołu walili w drzwi, a im wrzaskom towarzyszyło trzaskanie płomieni.<br><br>Ji-Woon zawołał do nich, popędził do głośników, podniósł jeden z nich i… zatrzymał się. Zamarł. Każdy oddech był świadomym procesem wymagającym pełni jego uwagi. Pobliskie krzyki były ledwie słyszalne. Wycofał się. I wtedy to usłyszał. Płonęli i wrzeszczeli jego imię. Błagali, żeby ich uratował. Ji-Woon! Ji-Woon! Ji-Woon Hak! Była to najpiękniejsza rzecz, jaką kiedykolwiek słyszał. Gdy przybyli strażacy, jego łzy nie były udawane.<br><br>Ji-Woon został okrzyknięty postacią tragiczną – bohaterem, który zrobił wszystko, co mógł, by ratować przyjaciół. Yun-Jin prowadziła go przez wywiady, aż nadszedł czas na zmianę marki. Odrodził się jako Magik – artysta solowy, który sam tworzył swoje piosenki i skrywał czułe serce pod dziką powłoką. Jednak poza aranżacjami koncertów i scen w telewizji pojawiło się w nim coś mrocznego.<br><br>Za cel obierał tych, którzy mieszkali sami. Przychodził do nich w nocy. Pierwszy był student, do którego pokoju prowadziły schody przeciwpożarowe. Ji-Woon obudził mężczyznę uderzeniem kija bejsbolowego w głowę. Związał mu ręce i nogi, zakneblował szmatą i zakleił usta taśmą. Torturował go godzinami, przeprowadził na nim sekcję żywcem. Jednak czegoś mu brakowało. Nie czuł połączenia. Chciał słyszeć błagania, gdy rozcinał brzuch mężczyzny, a dostał tylko jęki stłumione przez szmatę.<br><br>Nauczył się i zmienił metodę.<br><br>Ofiary trzeba było porywać, zawozić do opuszczonego budynku, w którym ich głosy nie musiały być niczym ograniczone. Tworzył z nich muzykę. Dźgał odpowiednie miejsca, aby wywoływać różne rodzaje krzyków i pisków. Kłucie mięśnia czworobocznego lędźwi wywoływało długi, głęboki ryk, a przecięcie tętnicy szyjnej dawało dźwięk podobny do odgłosów duszonego kota. W ich cierpieniu słychać było szczerość. Ji-Woon nagrywał wszystkie sesje, obrabiał je i wykorzystywał w piosenkach. Wrzaski ukrywał pod warstwami melodii.<br><br>Praca wprowadzała go w euforię. Zostawił tropy dla policji. Futrzany szal z ostatniej sesji zdjęciowej owinął wokół poderżniętego gardła ofiary. Podczas kolejnego zabójstwa wyrwał mężczyźnie zęby, których brakowało bokserowi w jednym z jego teledysków. Szczególnie zuchwałą próbą zdobycia uwagi było zabicie fanki, którą poznał w trakcie VIP-owskiego spotkania. Zamienił jej oczy na diamentowe spinki do mankietów, a krwią na klatce piersiowej napisał „WIDZIAŁAM BOGA”. Każda scena była oszałamiającym widowiskiem.<br><br>Między muzyką a morderstwami Ji-Woon zyskał światową sławę. Jednak gdy przemoc stała się jego preferowanym stylem, kariera muzyczna ucierpiała. Zyski spadały i szefostwo Mightee One obwiniało jego. Yun-Jin starała się go bronić, wykorzystując całą swą zawodową wściekłość, ale nie miała szans. Zdecydowano, że Ji-Woon nie będzie dłużej sam produkował własnych utworów.<br><br>Ta decyzja była druzgocząca. Jego piosenki łączyły muzykę z prawdziwym człowieczeństwem, a kierownictwo odrzucało wszystko, co nie było ogólne i oklepane. W porządku. Jeśli nie potrafią zrozumieć jego sztuki, dołączy ich do niej, aż do nich dotrze. \\n\\nMiał trzy miesiące do prywatnego koncertu dla członków zarządu Mightee One. Trzy miesiące, by zaplanować swoje największe dzieło. Przelał niesamowite kwoty weterynarzowi w zamian za kanistry podtlenku azotu, a potem przekupił technika scenicznego prywatnej hali koncertowej Mightee One, aby zdobyć dostęp do pomieszczenia. Sława dawała mu przywileje, o których zwykli ludzie mogli tylko pomarzyć. Gdy występ był gotowy i szefowie oraz obsługa koncertu czekali na wejście spóźniającego się Magika, do pomieszczenia został wpuszczony gaz. \\n\\nKiedy Ji-Woon wszedł do środka, na wpół przytomne ciała rozlewały się w fotelach i pełzały po podłodze. Działał szybko. Związał wszystkich i zatrzymał się tylko przy Yun-Jin – kobiecie, która wyciągnęła go z bagna i poprowadziła drogą, na jaką zasługiwał. Miała zostać nagrodzona. Otrzymać specjalny dostęp do nadchodzącej cudownej wystawy. Nawet pod wpływem działania środka usypiającego walczyła dużo silniej niż inni. Była jak burza. Usadził ją jako jedynego widza i uniemożliwił jej zamknięcie oczu. Pozostałych, jęczących i łkających, zaniósł na scenę na ostatni akt. Z szyderczym uśmiechem nałożył im na twarze makijaż i skierował na nich światła. Stali się jego instrumentami. \\n\\nOdegrał na nich wyprodukowane przez siebie utwory. Torturował ich i z gracją przeskakiwał od jednego ciała do drugiego, by z ich wycia utworzyć operowe crescendo. Krzyczeli, stękali, skomleli, płakali, wzywali ukochanych, wołali matki. Był to niesamowity wyraz emocji, pokaz tego, co znaczy być człowiekiem. Występowali z oczami utkwionymi w Ji-Woonie. \\n\\nWnętrzności spadały ze sceny do momentu, kiedy po rzucie nożem ostatni ludzki instrument ucichł, a muzyka się skończyła. Pokryty potem i krwią, zmęczony Ji-Woon spojrzał na Yun-Jin i ukłonił się. Kurtyna. Osiągnął perfekcję. Z nożem w ręce ruszył w kierunku Yun-Jin, przygotowany, aby w ostatniej scenie dokończyć to, co zaczął. Jednak gdy do niej podszedł… \\n\\nMgła. \\n\\nNie wiedział, skąd się wzięła, ale otoczyła ich. Była wilgotna, chłodna… Przyjemna. Zobaczył wielką scenę: szpitale i świątynie, lasy i rzeźnie. Niezmierzony teren pełen zardzewiałych haków, podtrzymywany milionem oczu, które będą na niego patrzyły, żywiły się nimi, <i>doświadczały go</i>. Musiał to tylko zaakceptować. Stać się częścią Mgły i… wywoływać krzyk. \\n\\nCzas na bis!","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"Nemesis to niemal niepowstrzymana broń biologiczna opracowana przez korporację Umbrella. Zadaniem i pragnieniem tej istoty jest ściganie i eliminowanie celów. Jako część serii Tyrant T-103 gatunek ten ma zwiększoną inteligencję i świadomość dzięki wprowadzanemu pasożytowi NE-α. Pierwszą misją broni była eksterminacja członków S.T.A.R.S. w Raccoon City. Podczas niszczenia miasta Nemesis starł się z Jill Valentine wiele razy i choć udało jej się uciec, potwór stale deptał jej po piętach. Niemal dopiął swego, gdy opadła na nich dziwna mgła, łącząc się z dymem pogrążonego w chaosie miasta. Zjawisko to nic dla potwora nie znaczyło – mrożące zimno i niedomiar tlenu nie były żadnym zagrożeniem. Najważniejsze, by nie poddawać się, wejść we mgłę i kontynuować misję: znaleźć S.T.A.R.S., wyeliminować S.T.A.R.S., zabić wszystkich, którzy staną na drodze.","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/pl/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Potężne, gwałtowne i ostatnie tchnienie odebrane opiekunowi przytułku Crotus Prenn, Patrickowi Spencerowi. Używanie energii drzemiącej w oddechu pozwala Pielęgniarce przemieszczać i teleportować się w niematerialnym świecie kilka razy pod rząd. Takie działanie wprowadza ją w stan oszołomienia.<br><li>Odblokowuje możliwość teleportacji.</li><li>Umożliwia wykonanie <b>1</b> dodatkowego przeskoku teleportacyjnego.</li>","name":"Ostatni Oddech Spencera","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"Duża stalowa pułapka krępująca nogi ofiary. Pułapki leżą rozproszone na mapie i można je podnieść w skorzystać z nich w dowolnym miejscu.<br><br><b>PUŁAPKA NA NIEDŹWIEDZIE</b><br>Domyślnie zaczynasz próbę z <b>1 pułapką na niedźwiedzie</b>. Znajdź ich więcej na mapie.<br><b>Rozstawianie pułapki na niedźwiedzie:</b><br>Naciśnij i przytrzymaj <i>przycisk mocy</i>, aby rozstawić <b>pułapkę na niedźwiedzie</b> w odpowiednim miejscu przed sobą. Aktywowana <b>pułapka na niedźwiedzie</b> unieruchomi gracza, który na nią wejdzie. Zdrowy ocalały, który złapie się w <b>pułapkę na niedźwiedzie</b> otrzyma stan krytyczny, ale może próbować uciec. Naciśnij <i>przycisk interakcji</i>, aby podnieść pobliskiego ocalałego unieruchomionego przez <b>pułapkę na niedźwiedzie</b>.<br><b>Ponowne zastawianie pułapki:</b><br>Naciśnij i przytrzymaj <i>przycisk mocy</i>, stojąc w pobliżu <b>pułapki na niedźwiedzie</b>, aby ponownie zastawić ją w tym samym miejscu.<b>Zbieranie pułapek na niedźwiedzie:</b><br>Naciśnij <i>przycisk interakcji</i>, stojąc w pobliżu <b>pułapki na niedźwiedzie</b>, aby ją podnieść. Domyślnie możesz nosić maksymalnie <b>1 pułapkę na niedźwiedzie</b> naraz.","name":"Pułapka na niedźwiedzie","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"Ciężki żelazny dzwon przesiąknięty starożytnymi mocami. Użytkownik wchodzi za jego pomocą do świata duchów.<br><br><b>ZAWODZĄCY DZWON</b><br>Naciśnij i przytrzymaj <i>przycisk mocy</i>, aby <b>ukryć się</b>. Naciśnij i przytrzymaj <i>przycisk mocy</i> ponownie podczas ukrywania, aby <b>wyłączyć ukrywanie</b> i otrzymać <b>1 sekundę</b> przyspieszenia po ponownym pojawieniu się. Dźwięk Zawodzącego Dzwonu rozchodzi się na odległość <b>24 metrów</b>.<br><br><b>Ukrywanie</b><br>Podczas ukrywania <b>Widmo</b> otrzymuje zwiększoną prędkość ruchu, niemal całkowitą niewidzialność i efekt <b>Niewykrywalny</b>.<b>Widmo</b> nie może atakować podczas ukrywania, ale może wchodzić w interakcje z przedmiotami. Jasne światło sprawia, że <b>Widmo</b> automatycznie <b>wychodzi z ukrycia</b>.","name":"Zawodzący Dzwon","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"Naciśnij i przytrzymaj <i>przycisk mocy</i>, aby rozpocząć sprint z piłą łańcuchową. Ocalali trafieni podczas sprintu zostają wprowadzeni w stan agonii.<br><li>Każde działanie z piłą łańcuchową (uruchomienie piły, zwiększanie obrotów i <b>sprint z piłą łańcuchową</b>) powodują wzrost wskaźnika przegrzania.</li><li>Gdy <b>wskaźnik przegrzania</b> napełni się, piły łańcuchowej nie można używać do jej pełnego ostygnięcia. Osiągnięcie limitu temperatury nie przerywa <b>sprintu z piłą łańcuchową</b>.</li><li><b>Wskaźnik przegrzania</b> zmniejsza się, gdy piła nie jest używana.</li> ","name":"Piła Łańcuchowa","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"Umiejętność, której nauczyła się od matki i którą doskonaliła w dziczy. Łowczyni potrafi miotać toporkami z zabójczą precyzją.<br><li>Zaczynasz rozgrywkę z <b>5 Toporkami</b>.</li><li>Ładowanie rzutu zwiększa jego maksymalną prędkość.</li><li>Wyciągaj zapasowe toporki <b>z szafek</b>.</li>","name":"Toporki Myśliwskie","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"Wewnętrzny mrok drzemiący w duszy mężczyzny karmi jego determinację do odbierania życia ofiarom.<br><br><b>WEWNĘTRZNE ZŁO</b><br>Aktywowanie <b>Wewnętrznego Zła</b> sprawia, że <b>Kształt</b> może wyraźnie zobaczyć swoje ofiary oraz wzmagać siłę złych mocy poprzez śledzenie ocalałych. <br><br><b>Wewnętrzne Zło I</b><br> Daje efekt <b>Niewykrywalny</b>. Nieznacznie zmniejsza szybkość ruchu. <i>Podstawowy atak</i> ma nieznacznie zmniejszony zasięg.<br><br><b>Wewnętrzne Zło II</b><br> Umiarkowanie zmniejsza zasięg terroru. Nieznacznie zwiększa szybkość ruchu. <i>Podstawowy atak</i> ma nieznacznie zwiększony zasięg.<br><br><b>Wewnętrzne Zło III</b><br>Po włączeniu wszyscy ocalali otrzymują efekt <b>Narażony</b>. <b>Wewnętrzne Zło III</b>trwa <b>60 sekund</b>, po czym zmienia się w <b>Wewnętrzne Zło II</b>.<br><br><b>SPECJALNA UMIEJĘTNOŚĆ: PRZEŚLADOWANIE</b><br>Naciśnij i przytrzymaj <i>przycisk mocy</i>, aby prześladować wszystkich widocznych ocalałych. Prześladowanie to zwiększa postęp przez poszczególne poziomy <b>Wewnętrznego zła</b>.<br><br><span class=\\"FlavorText\\">„Spotkałem go piętnaście lat temu; powiedziano mi, że nic z niego nie zostało: brak mu opamiętania, sumienia, wyrozumiałości; opuściło go nawet elementarne poczucie życia czy śmierci, dobra czy zła, prawości czy nieprawości. Spotkałem to sześcioletnie dziecko z obojętną, pozbawioną emocji twarzą i przepełnionymi mrokiem oczami… Oczami diabła. Spędziłem osiem lat, próbując do niego dotrzeć, i kolejne siedem, więżąc go, gdy zdałem sobie sprawę, że to, co tkwiło w oczach chłopca, to czyste, prymitywne… zło”. – Dr Sam Loomis</span>","name":"Wewnętrzne Zło","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"Źródło mocy Wiedźmy. Wiedźma używa swojego sczerniałego palca w charakterze katalizatora potwornej mocy; potrafi też formować błoto wedle swej woli, tworząc za pomocą rytualnych znaków sobowtóry z błota i zgnilizny.<br><li>Pozwala tworzyć i utrzymywać do <b>10</b> Widmowych Pułapek.</li><li>Pozwala na natychmiastowe przemieszczanie się do Widmowych Pułapek, które zostały aktywowane przez Ocalałych. Teleportacja do Widmowej Pułapki jest możliwa wtedy, gdy znajdujesz się w odległości nie większej niż <b>40 metrów</b> od aktywowanej pułapki.</li>","name":"Sczerniały Katalizator","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"Kanibal rozpoczyna próbę z trzema ładunkami. Naciśnij i przytrzymaj <I>przycisk mocy</i>, aby zużyć jeden ładunek i wykonać <b>wymach piłą łańcuchową</b>, który może trafić wiele celów. Ocalali trafieni <b>wymachem piłą łańcuchową</b> zostają wprowadzeni w stan agonii.<br><li>Skorzystaj z ładunku, aby wydłużyć czas <b>machania piłą</b>. Spowoduje to nieco dłuższy czas odnawiania.</li><li>Ładunki piły łańcuchowej odnawiają się, gdy urządzenie nie jest używane.</li><br><br><b>Wskaźnik furii</b> powoli napełnia się podczas zwiększania obrotów piły łańcuchowej. Gdy się wypełni, względnie po trafieniu obiektu podczas <b>wymachu piłą łańcuchową</b>, Kanibal wpada w <b>furię</b>. <b>Furia</b> zadaje obrażenia wszystkim ocalałym w pobliżu i wprowadza ich w stan agonii.<br><li>Czas trwania <b>furii</b> zwiększa się z każdym ładunkiem wykorzystanym w trakcie <b>wymachu piłą łańcuchową</b>. Wszystkie pozostałe ładunki zostają utracone.</li><li>Podczas <b>furii</b> prędkość ruchu jest zmniejszona.</li><li><b>Wskaźnik furii</b> maleje, gdy piła łańcuchowa nie jest używana, i całkowicie wyczerpuje się podczas <b>wymachu piłą łańcuchową</b>.</li> ","name":"Piła łańcuchowa Bubby","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>ISKRA CARTERA</b><br>Udane trafienie ocalałego specjalnymi umiejętnościami <b>Doktora</b>, czyli <b>Terapią Szokową</b> lub <b>Wybuchem Statycznym</b>, zwiększa <i>Szaleństwo</i> ofiary, prowadząc do aktywowania statusu <b>Szaleństwo</b> i włączenia efektów o wzrastającej mocy.<br><b>Szaleństwo I:</b><br>wywołuje jeden krzyk ocalałego ujawniający jego położenie <b>Doktorowi</b>. <b>Nieznacznie</b> wpływa na trudność i kierunek testu umiejętności.<br><b>Szaleństwo II:</b><br>wywołuje jeden krzyk ocalałego i aktywuje halucynacje w formie <i>iluzorycznego Doktora</i>. <b>Umiarkowanie</b> wpływa na trudność i kierunek testu umiejętności.<br><b>Szaleństwo III:</b><br>wywołuje przerywane krzyki ocalałego i aktywuje halucynacje w formie <i>iluzorycznego Doktora</i>. <b>Ogromnie</b> wpływa na trudność i kierunek testu umiejętności. Ocalały nie może leczyć, naprawiać, sabotować, odblokowywać, oczyszczać ani używać przedmiotów, dopóki nie <i>Otrząśnie się z Tego</i>. Gdy ocalały <i>Otrząśnie się z Tego</i>, powraca do <b>Szaleństwa I</b>.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: Terapia Szokowa</b><br>Naciśnij i przytrzymaj <i>przycisk mocy</i>, aby wykonać <b>Terapię Szokową</b>, wywołując długodystansowy atak rażący na ziemi przed tobą. Ocalali trafieni <b>Terapią Szokową</b> otrzymują zwiększone <i>Szaleństwo</i>, a wszystkie wykonywane przez nich interakcje są natychmiast przerywane. <b>Terapia Szokowa</b> natychmiast odwołuje efekt <b>Nieświadomy</b>.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: Wybuch Statyczny</b><br>Naciśnij i przytrzymaj <i>przycisk aktywnej umiejętności</i>, aby przeprowadzić <b>Wybuch Statyczny</b>, wywołujący krzyk u wszystkich ocalałych w zasięgu terroru Doktora i powodujący u nich zwiększone <i>Szaleństwo</i>. <b>Wybuch Statyczny</b> można aktywować, dopiero gdy jest gotowy. <b>Wybuch Statyczny</b> natychmiast odwołuje efekt <b>Nieświadomy</b>.","name":"Iskra Cartera","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"Przebudzeni ocalali słyszą zasięg terroru <b>Koszmaru</b> i widzą Koszmar w promieniu 16 metrów, co jakiś czas w promieniu od 16 do 32 metrów, nie widzą go natomiast z większej odległości. <b>Koszmar</b> pasywnie usypia ocalałych i przenosi ich do Świata Snu w ciągu 60 sekund lub natychmiast po trafieniu ich <i>podstawowym atakiem</i>.<br><br>W Świecie Snów ocalali otrzymują efekt <b>Nieświadomy</b> i mogą podlegać działaniu <b>Sennych Sideł</b>. Ocalali mogą wybudzić się po niezdanym teście umiejętności, dzięki przytomnemu ocalałemu, który wykona działanie <i>Pobudka</i>, lub za pomocą budzików znalezionych w trakcie próby. Wykonanie każdego kolejnego działania <i>Pobudka</i> zajmuje dwa razy więcej czasu. Budziki dają ocalałym odporność na zaśnięcie przez 30 sekund.<br><br><b>SPECJALNA UMIEJĘTNOŚĆ: SENNE SIDŁA</b><br>Przytrzymaj <i>przycisk mocy</i>, by umieścić <b>Senne Sidła</b>. Ocalali otrzymają efekt <b>Skrępowany</b> po dotknięciu pułapki oraz chwilę po jej opuszczeniu.</b>.<br><br>Niektóre dodatki pozwalają zastąpić <b>Senne Sidła</b> <b>Sennymi Paletami</b>. Senne Palety pojawiają się w miejscach palet w Świecie Snów. Są podświetlone dla <b>Koszmaru</b> i nie ogłuszają go.<br><br><b>SENNE ŻETONY</b>:<br><b>Koszmar</b> zaczyna grę z 5 żetonami, które może wykorzystać do rozmieszczania Sennych Sideł. Po zużyciu wszystkich żetonów najstarsze Sidła są zastępowane nowymi.<br><br><b>SPECJALNA UMIEJĘTNOŚĆ: PROJEKCJA SNU</b><br>Przytrzymaj <i>przycisk aktywnej umiejętności</i>, by teleportować się do generatora w polu widzenia. Za każdego ocalałego w Świecie Snu czas odnawiania Projekcji Snu jest skracany o 15%.","name":"Władca snów","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"Zawsze wierna swojemu mistrzowi, karze winnych i niewdzięcznych ludzi za pomocą chytrych, morderczych łamigłówek.<br><br><b>Świnia</b> może poruszać się niezauważona, atakować z ukrycia oraz nakładać śmiercionośne odwrócone pułapki na niedźwiedzie na głowy Ocalałych.<br><br><b>CHRZEST JIGSAWA</b><br>Rozpocznij próbę z <b>4</b> <i>nieaktywnymi</i> odwróconymi pułapkami na niedźwiedzie. Stojąc na ocalałym w stanie agonii, naciśnij <i>przycisk aktywnej umiejętności</i>, aby umieścić na nim <i>nieaktywną</i> odwróconą pułapkę na niedźwiedzie. Odwrócone pułapki na niedźwiedzie stają się <i>aktywne</i>, gdy dowolny generator zostanie ukończony podczas próby.<br>Ocalali mogą próbować wyzwolić się z <i>aktywnych</i> lub <i>nieaktywnych</i> odwróconych pułapek na niedźwiedzie, znajdując skrzynki Jigsawa rozrzucone po mapie w celu odnalezienia prawidłowego klucza.<br><b>Aktywne odwrócone pułapki na niedźwiedzie</b><br>Gdy odwrócona pułapka na niedźwiedzie staje się <i>aktywna</i>, rozpoczyna się odmierzanie czasu. Ocalały z <i>aktywną</i> odwróconą pułapką na niedźwiedzie zostaje automatycznie poświęcony, gdy jego czas dobiegnie końca, lub gdy spróbuje opuścić próbę z przymocowaną <i>aktywną</i> pułapką.<br><br><b>SPECJALNA UMIEJĘTNOŚĆ: KUCANIE</b><br>Naciśnij <i>przycisk aktywnej umiejętności</i>, aby ukucnąć. Naciśnij <i>przycisk aktywnej umiejętności</i> ponownie, podczas kucania, aby wstać.<b>Świnia</b> porusza się wolniej po ukucnięciu. <b>Świnia</b> otrzymuje efekt <b>Niewykrywalny</b> podczas kucania.<br><br><b>ATAK SPECJALNY: ZASADZKA</b><br>Naciśnij i przytrzymaj <i>przycisk ataku</i> podczas kucania, aby zamachnąć się i wykonać atak <b>z ukrycia</b>.<br><br><span class=\\"FlavorText\\">„Oddasz mi wszystko — każdą komórkę w swoim ciele. Ślady na twych ramionach pochodzą z innego życia. Pozwól mu odejść w zapomnienie. Z tej drogi nie ma już odwrotu. Czy rozumiesz, co do ciebie mówię?” – Chrzest Jigsawa</span>","name":"Chrzest Jigsawa","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"Przez lata eksperymentów nad środkami odurzającymi i zwiotczającymi mięśnie Klaun opracował kilka skutecznych chemicznych formuł. Swojej ulubionej nadał nazwę „Odurzająca Mieszanka Komika”. Używał jej przy każdej możliwej okazji, bo umożliwiała odurzanie i chwytanie niczego nieświadomych ofiar. Związane z nią Antidotum Komika również ma przydatne efekty.<br><br>Naciśnij <i>przycisk aktywnej umiejętności</i>, aby przełączać się między <b>Mieszanką</b> i <b>Antidotum</b>. Naciśnij lub przytrzymaj, a następnie zwolnij <i>przycisk mocy</i>, aby rzucić butelkę.<br><br>Naciśnij i przytrzymaj <i>przycisk aktywnej umiejętności</i>, aby uzupełnić butelki.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: Odurzająca Mieszanka Komika</b><br>Po uderzeniu butelka rozbija się i wypuszcza fioletową chmurę gazu, która <b>zatruwa</b> ocalałych. <b>Zatruci</b> ocalali mają pogorszony wzrok, zmniejszoną prędkość ruchu i kaszlą przez 2 sekundy.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: Antidotum Komika</b><br>Po uderzeniu butelka rozbija się i wypuszcza szarą chmurę gazu, która zmienia kolor na żółty po aktywacji. Klaun i ocalali, którzy wejdą w aktywną <b>chmurę Antidotum</b>, otrzymują 10% premii do prędkości na 5 sekund. <b>Zatruci</b> ocalali, którzy wejdą w <b>chmurę Antidotum</b>, zostają wyleczeni.","name":"Odurzająca Mieszanka Komika","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"Zjawa może użyć swojej mocy – Opętania Yamaoki – aby przeniknąć do niematerialnego wymiaru i pojawić się w nowym miejscu.<br><li>Naciśnij i przytrzymaj przycisk mocy, aby jej użyć. Zjawa opuści swoje ciało, a w czasie, gdy używasz mocy, twoja metafizyczna powłoka będzie dostrzegalna dla Ocalałych pod postacią iluzji.</li><br>Gdy Opętanie Yamaoki jest aktywne:<li>Zjawa może przez pewien czas swobodnie się przemieszczać i czyni to ze zwiększoną prędkością. Nie może jednak przechodzić przez obiekty.</li><li>Zjawa opuszcza świat fizyczny i Ocalali stają się dla niej niewidoczni, niemniej jednak wciąż widać czerwone zarysowania pozostawiane przez biegnących Ocalałych.</li><li>Zjawa wydobywa z siebie głośny, przerażający krzyk zawsze wtedy, gdy używa mocy.</li><li>Gdy kończy się czas działania mocy, zwiększona prędkość ruchu utrzymuje się jeszcze przez chwilę po wyjściu ze świata duchów, a iluzoryczna postać zanika.</li><br>Korzystanie z Opętania Yamaoki zużywa pasek naładowania mocy, który z czasem automatycznie się odnawia. Pasek mocy musi być pełen przed jej ponownym użyciem.","name":"Opętanie Yamaoki","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"Byli grupą znajomych, zanim Frank utworzył z nich Legion. Teraz czerpią moc z bezgranicznej wolności i nieprzestrzegania żadnych zasad prócz swoich własnych.<br><br><b>DZIKI SZAŁ</b><br>Włącz <b>Dziki Szał</b>, aby biegać z dużą prędkością i łączyć ataki pomiędzy różnymi ocalałymi. Gdy Twój wskaźnik mocy jest pełny, naciśnij <i>przycisk mocy</i>, aby uaktywnić <b>Dziki Szał</b>. Gdy <b>Dziki Szał</b> jest aktywny, <b>Legion</b> porusza się szybciej i otrzymuje dostęp do dodatkowych zdolności: <b>Skoku Przez Paletę</b> i <b>Dzikiego Cięcia</b>.<br><br><b>SPECJALNA UMIEJĘTNOŚĆ: SKOK PRZEZ PALETĘ</b><br>Naciśnij <i>przycisk interakcji</i>, gdy <b>Dziki Szał</b> jest aktywny, aby wykonać <b>Skok Przez Paletę</b> nad przewróconą paletą.<br><br><b>SPECJALNY ATAK: DZIKIE CIĘCIE</b><br>Naciśnij <i>przycisk ataku</i>, gdy <b>Dziki Szał</b> jest aktywny, aby wykonać <b>Dziki Cięcie</b>. Trafienie ocalałego <b>Dziki Cięciem</b> wywołuje u niego stan krytyczny i aktywuje efekt <b>Głębokiej Rany</b>. Wskaźnik mocy Legionu zostaje uzupełniony, a wszyscy ocalali w zasięgu terroru, którzy nie mają aktywnego efektu <b>Głębokiej Rany</b>, zostają oznaczeni instynktem zabójcy. Jeśli ocalały ma już efekt <b>Głębokiej Rany</b>, <b>Dziki Szał</b> kończy się natychmiast bez efektu.","name":"Dziki szał","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"Jej stan pogarszał się, gdy zaraza wyniszczała jej ciało: jej palce u stóp zrobiły się czarne, na szyi wyrosły cysty, a w gardle bulgotały krwawe wymioty.<br><br><b>PODŁE OCZYSZCZENIE</b><br>Zarażaj obiekty w otoczeniu i ocalałych <b>Podłym Oczyszczeniem</b>, aby wytworzyć niekończący się cykl choroby. Naciśnij i przytrzymaj <i>przycisk mocy</i>, aby naładować <b>Podłe Oczyszczenie</b>, i zwolnij przycisk, aby wypuścić strumień skażonej żółci. Trafienie ocalałego spowoduje u niego zarażenie. Trafienie przedmiotu w otoczeniu zakazi go na krótki czas. Ocalali wchodzący w interakcję ze skażonymi obiektami również zostaną zarażeni.<br><br>Ocalały, którego wskaźnik zarażenia zostanie całkowicie wypełniony, otrzymuje efekt <b>Okaleczony</b> i zaczyna wymiotować w losowych odstępach.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: WCHŁONIĘCIE SKAŻENIA</b><br>Zarażeni ocalali mogą w pełni uleczyć się sami i pozbyć się skażenia, korzystając z <i>Wód Pobożności</i>. Ta akcja skaża zbiornik, dzięki czemu <b>Plaga</b> może wchłonąć infekcję i wzmocnić swoje oczyszczenie. Naciśnij i przytrzymaj <i>przycisk interakcji</i>, stojąc obok skażonych <i>Wód Pobożności</i>, aby zmienić <b>Podłe Oczyszczenie</b> w <b>Skażone Oczyszczenie</b>. Ta akcja usuwa skażenie ze zbiornika.<br><br><b>ATAK SPECJALNY: SKAŻONE OCZYSZCZENIE</b><br>Po skorzystaniu z umiejętności <b>Wchłonięcie Skażenia</b> na krótki czas <b>Podłe Oczyszczenie</b> zostaje zastąpione <b>Skażonym Oczyszczeniem</b>. <b>Skażone Oczyszczenie</b> natychmiast zadaje obrażenia każdemu trafionemu ocalałemu, jednak nie zaraża już ocalałych ani nie zakaża przedmiotów.","name":"Podłe Oczyszczenie","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>Ghost Face</b> obserwował swoje ofiary tygodniami i skrupulatnie zapisywał ich zwyczaje. Gdy zaczynał odczuwać pragnienie zabójstwa, dokładnie wiedział, jak i gdzie uderzyć.<br><br><b>NOCNY CAŁUN</b><br>Naciśnij <i>przycisk mocy</i>, aby aktywować <b>Nocny Całun</b> po napełnieniu wskaźnika mocy. <b>Ghost Face</b> otrzymuje efekt <b>Niewykrywalny</b>, gdy <b>Nocny Całun</b> jest aktywny. Wykonanie <i>podstawowego ataku</i> opróżnia wskaźnik mocy i wyłącza <b>Nocny Całun</b>.<br><b>Wykrycie</b><br>Ocalali w pobliżu <b>Ghost Face\'a</b> mogą próbować <i>wykryć</i> go, patrząc przez chwilę w jego stronę. Udane <i>wykrycie</i> powoduje całkowite opróżnienie wskaźnika mocy <b>Ghost Face\'a</b> i automatyczne wyłączenie <b>Nocnego Całunu</b>. Lokalizacja ocalałych, którzy <i>wykryją</i> <b>Ghost Face\'a</b>, zostaje na bardzo krótki czas ujawniona przez <i>instynkt zabójcy</i>.<br><br><b>SPECJALNA UMIEJĘTNOŚĆ: PRZEŚLADOWANIE</b><br>Przytrzymaj <i>przycisk mocy</i>, aby śledzić ocalałych podczas działania <b>Nocnego Całunu</b>. Przytrzymaj <i>przycisk mocy</i> za osłoną, aby wychylić się i śledzić szybciej. Ukończenie śledzenia ocalałego <i>oznacza</i> cel i nakłada na niego efekt <b>Narażony</b> na ograniczony czas.<i></i><br><br><b>SPECJALNA UMIEJĘTNOŚĆ: KUCANIE</b><br>Naciśnij przycisk aktywnej umiejętności, aby ukucnąć. Naciśnij przycisk aktywnej umiejętności ponownie podczas kucania, aby wstać. Kucając, <b>Ghost Face</b> porusza się wolniej.<br><br><span class=\\"FlavorText\\">„Nie przejmuj się mną. Tak jest, idź dalej. Doskonale. Tak cię zapamiętam”. – Ghost Face</span>","name":"Nocny całun","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"Przez jego ciało przetoczył się ładunek nieznanej, obcej mocy. Nagle ziemia otwarła się i pochłonęła Demogorgona w całości.<br><br><b>Z OTCHŁANI</b><br>Wciśnij i przytrzymaj <i>przycisk mocy</i>, by naładować i aktywować <b>Z Otchłani</b>. Wszyscy ocalali znajdujący się obok aktywnego portalu zostaną ujawnieni przez instynkt zabójcy.<br><br><b>SPECJALNY ATAK: POSTRZĘPIENIE</b><br>Wciśnij <i>przycisk ataku</i> podczas ładowania lub podtrzymywania <b>Z Otchłani</b>, by rzucić się naprzód i zadać okrutny cios.<br><br><b>SPECJALNA UMIEJĘTNOŚĆ: PORTALE</b><br>Wciśnij <i>przycisk aktywacji umiejętności</i>, by otworzyć przed sobą portal na ziemi.<br><b>Przemierzanie Drugiej Strony</b><br>Kiedy stoisz w otwartym portalu, podczas gdy inny portal jest zaznaczony, wciśnij <i>przycisk aktywacji umiejętności</i> ponownie, by przenieść się na drugą stronę i wyłonić się z docelowego portalu.<br><b>Aktywne portale</b><br>Portale stają się aktywne po ich pierwszym użyciu w dowolną stronę. Ocalali mogą zamykać tylko aktywne portale. Aury takich przejść są podświetlone na żółto.","name":"Z Otchłani","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"Pragnienie zniszczenia słabszych rodów przerodziło się w siłę.<br><br><b>GNIEW YAMAOKI</b><br>Wchłaniaj krwawe kule pozostawione przez zranionych wrogów. Naciśnij i przytrzymaj <i>przycisk mocy</i>, by wchłonąć krwawe kule w otoczeniu i napełnić wskaźnik mocy. Gdy twój wskaźnik mocy się napełni, naciśnij i przytrzymaj <i>przycisk aktywnej umiejętności</i> w celu aktywowania <b>Krwawej Furii</b>.<br><b>Krwawa Furia:</b>\\nGdy <b>Krwawa Furia</b> jest aktywna, <b>Oni</b> staje się zabójczy i otrzymuje dostęp do dodatkowych umiejętności: <b>Demonicznego Pędu</b> i <b>Ciosu Demona</b>.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: Demoniczny Pęd</b><br>Naciśnij i przytrzymaj <i>przycisk mocy</i>, gdy <b>Krwawa Furia</b> jest aktywna, by wykonać <b>Demoniczny Pęd</b>. Umiejętność pozwala <b>Oni</b> szybko pokonywać duże odległości.<br><br><b>ATAK SPECJALNY: Cios Demona</b><br>Naciśnij i przytrzymaj <i>przycisk ataku</i>, gdy <b>Krwawa Furia</b> jest aktywna, by wykonać <b>Cios Demona</b> w aktualnie obranym kierunku. <b>Cios Demona</b> ma większy zasięg, a celne uderzenie natychmiast wprowadza zdrowych ocalałych w stan agonii.","name":"Gniew Yamaoki","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"Pomysłowość Śmiercionoścy pozwala mu przyciągać ofiary za pomocą niezwykłego wynalazku — silnie zmodyfikowanej hybrydowej strzelby, która zamiast zwykłej amunicji wykorzystuje ostrą jak brzytwa włócznię przymocowaną do łańcucha.<br><br><b>WYBAWCA</b><br>Naciśnij i przytrzymaj <i>przycisk mocy</i>, aby spojrzeć przez celownik. Naciśnij <i>przycisk ataku</i>, aby wystrzelić włócznię, która wbije się w ocalałego i umożliwi przyciągnięcie go siłą do <b>Śmiercionoścy</b>.<br><b>Zwijanie:</b><br>Gdy ocalały zostanie przygwożdżony włócznią za pomocą umiejętności <b>Wybawca</b>, naciśnij i przytrzymaj <i>przycisk mocy</i>, aby przyciągnąć ofiarę do siebie. Ocalali mogą siłować się z łańcuchem lub korzystać z otoczenia, aby go zerwać. Udane próby spowodują chwilowe ogłuszenie <b>Śmiercionoścy</b> i wprowadzenie ocalałego w stan krytyczny oraz nałożenie na niego efektu <b>głębokiej rany</b>. Skorzystanie z <i>podstawowego ataku</i>, gdy ocalały jest nabity na włócznię, spowoduje zerwanie łańcucha bez nakładania kar na <b>Śmiercionoścę</b> i na ocalałego. Skuteczne trafienie <i>podstawowym atakiem</i> zdrowego ocalałego nabitego na włócznię nałoży na niego efekt <b>głębokiej rany</b>.<br><b>Przeładowanie:</b><br>Umiejętność <b>Wybawca</b> należy przeładować po każdym strzale. Naciśnij i przytrzymaj <i>przycisk aktywnej umiejętności</i>, aby przeładować <b>Wybawcę</b>.","name":"Wybawca","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"Otwórz bramy cierpienia i stań przed sądem! Wielki nóż rozcina ziemię, tworząc piekielną konstrukcję i rozprowadzając agonię na wszystkich, którzy się zbliżą.<br><br><b>RYTUAŁ SĄDU</b><br>Przytrzymaj <i>przycisk mocy</i>, aby włączyć umiejętność, a następnie rusz w dowolnym kierunku, aby wydrążyć ścieżkę w ziemi.<br><br>Ocalali, którzy wejdą na ścieżkę lub przez nią przebiegną, uruchomią <i>Instynkt zabójcy</i> i otrzymają status <i>Udręka</i>. Ocalali pod wpływem <i>Udręki</i> mogą zostać wysłani do <b>klatki odkupienia</b>, gdy będą w stanie agonii.<br><br><b>ATAK SPECJALNY: Kara dla potępionych</b><br>Naciśnij <i>przycisk ataku</i>, gdy <b>Rytuał sądu</b> jest aktywny, aby wykonać <b>Karę dla potępionych</b>. Umiejętność wyzwala falę energii, która rani wszystkich ocalałych na jej drodze.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: Klatka odkupienia</b><br>Naciśnij <i>przycisk aktywnej umiejętności</i>, gdy stoisz nad ocalałym w stanie agonii i pod wpływem <i>Udręki</i>, aby wysłać go do <b>klatki odkupienia</b>. Ocalałych w <b>klatce odkupienia</b> można poświęcić, jakby wisieli na haku. Podczas drugiej fazy rytuału przywołania zostaną zmuszeni do wykonania testów umiejętności w celu odparcia Bytu.<br><br>Ocalały, który ratuje innego ocalałego albo sam jest ratowany z <b>Klatki odkupienia</b>, przestanie być dotknięty <i>Udręką</i>.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: Sąd ostateczny</b><br>Naciśnij <i>przycisk aktywnej umiejętności</i>, gdy stoisz nad ocalałym w stanie agonii i pod wpływem <i>Udręki</i>, który osiągnął już fazę walki na haku lub w klatce, aby go stracić.","name":"Rytuał sądu","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"Serum z krostorośli krąży w jego żyłach, niszcząc ciało i umysł, lecz dając w zamian nadnaturalne zdolności.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: PĘD</b><br>Naciśnij <i>przycisk mocy</i>, aby szybko <b>pędzić</b> do przodu. Zużyje to żeton <b>Pędu</b>. Podczas <b>Pędu</b> Zaraza nie może atakować.<br><br>Podczas <b>Pędu</b> wpadnij na ścianę lub przeszkodę w otoczeniu, aby ją <b>Uderzyć</b>. Jeśli w trakcie <b>Pędu</b> nie uda ci się wpaść na ścianę lub przeszkodę, albo jeśli Zaraza nie ma już żetonów <b>Pędu</b>, zostanie on chwilowo oszołomiony i rozpocznie regenerację żetonów.<br><br><b>ATAK SPECJALNY: ŚMIERTELNY PĘD</b><br>Po <b>Uderzeniu</b> naciśnij <i>przycisk mocy</i>, aby pobiec <b>Śmiertelnym Pędem</b>. Zużyje to żeton <b>Pędu</b>. <b>Śmiertelny Pęd</b> różni się od <b>Pędu</b> tym, że w trakcie tego pierwszego można wykonywać ataki Zarazą za pomocą <i>przycisku ataku</i>.","name":"Zarażone zepsucie","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"Choć na zawsze połączone krwią i przeżyciami, Bliźnięta otrzymały moc rozdzielania się. Polują wspólnie jako brat i siostra, podwajając zagrożenie dla ocalałych.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: Więź Krwi</b><br>Naciśnij i przytrzymaj <i>przycisk mocy</i>, aby odłączyć <b>Victora</b>. Przełączaj sterowanie między <b>Charlotte</b> a <b>Victorem</b> za pomocą <i>przycisku umiejętności</i>.<br><br>Pozostawiony <b>Victor</b> uruchamia <b>instynkt zabójcy</b> i pokazuje <b>Charlotte</b> zarysy przebiegających lub przechodzących obok niego ocalałych. Ocalali, którzy słyszą wrzaski <b>Victora</b>, są podatni. Mogą jednak zgnieść <b>Victora</b>, gdy kontrolowana jest <b>Charlotte</b>.<br><br>Po zgnieceniu <b>Victor</b> wróci do <b>Charlotte</b> po pewnym czasie.<br><br><b>ATAK SPECJALNY: Skok</b><br>Podczas sterowania <b>Victorem</b> przytrzymaj <i>przycisk umiejętności</i>, aby naładować <b>Skok</b>, a następnie <i>przycisk ataku</i>, aby wykonać atak.<br><br>Skuteczny <b>Skok</b> zadaje obrażenia ocalałemu. Jeśli ocalały ma pełne zdrowie, <b>Victor</b> przyczepi się do niego, uruchomi <b>instynkt zabójcy</b> i ujawnij lokalizację wszystkich pobliskich ocalałych. Na czas przyczepienia ocalały otrzymuje efekty <b>Okaleczony</b>, <b>Nieświadomy</b> i <b>Unieruchomiony</b>. Nie może wchodzić do szafek ani przejść przez bramę wyjściową. Ocalały może zgnieść przyczepionego <b>Victora</b>, wykonując akcję <b>Zrzuć</b>.<br><br>Jeśli <b>Victor</b> chybi <b>Skokiem</b>, przez chwilę jest podatny i ocalały może go zgnieść. Jeśli Victor wyląduje na wyższej od siebie przeszkodzie, zostanie zniszczony.","name":"Więź Krwi","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>Hipnotyzująca umiejętność opanowana przez lata praktyki – Ji-Woon Hak potrafi rzucać nożami z zabójczą prędkością.</i><br><br><b>POPIS</b><br><br>Rozpoczynasz próbę z <b>60 nożami</b>. Naciśnij i przytrzymaj <i>przycisk mocy</i>, aby przygotować się i wejść w tryb rzucania.<br><br>W trybie rzucania naciśnij <i>przycisk ataku</i>, aby rzucić jednym ostrzem, lub przytrzymaj <i>przycisk ataku</i>, aby zasypać ofiarę nożami. Rzucanie wielu noży zwiększa celność i prędkość rzutu, ale zmniejsza prędkość ruchu. Noże uzupełnia się w szafkach.<br><br><b>Miernik poszarpania:</b> <b>Miernik poszarpania</b> ocalałego wzrasta po każdym trafieniu nożem. Gdy wskaźnik zostanie wypełniony, ocalały straci stan zdrowia – zostanie ranny lub powalony.<br><br>Miernik poszarpania ocalałego stopniowo spada, jeśli ofiara nie otrzyma ciosu nożem przez krótki czas. Trafienie ocalałego podstawowym atakiem natychmiast obniża miernik poszarpania.<br><br><b>UMIEJĘTNOŚĆ SPECJALNA: Gwóźdź Programu</b><br>Każde trafienie ostrzem napełnia <b>miernik programu</b>. Po jego wypełnieniu można uruchomić <b>Gwóźdź Programu</b> za pomocą <i>przycisku umiejętności</i>. W tym trybie Magik automatycznie rzuca nielimitowaną liczbą noży przez cały czas trwania <b>Gwoździa Programu</b>. Prędkość rzutów zostaje znacznie zwiększona, a prędkość ruchu nie spada w miarę rzucania. <b>Gwóźdź Programu</b> można anulować <i>przyciskiem umiejętności</i>. Powoduje to wyzerowanie <b>miernika programu</b> i rozpoczęcie czasu odnawiania <b>Popisu</b>.","name":"Popis","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"Wirus, który powoduje skrajne mutacje i przenosi się na innych. Jego efekty wzmagają agresję i siłę Nemesisa.<br><br><b>ATAK SPECJALNY: Uderzenie Macką</b><br>Naciśnij i przytrzymaj przycisk mocy, aby naładować atak. Po naładowaniu naciśnij przycisk ataku, aby wykonać <b>Uderzenie Macką</b>. Trafienie ocalałego <b>Uderzeniem Macką</b> nakłada na niego status <b>Skażony</b> i zwiększa twoją <b>prędkość mutacji</b>. Jeśli ocalały jest już <b>skażony</b>, <b>Uderzenie Macką</b> odbiera mu zdrowie.<br><br>Ocalali mogą wyleczyć <b>Skażenie</b> własne lub innych za pomocą <b>szczepionki</b> dostępnej w <b>skrzyniach z zapasami</b>. Liczba <b>szczepionek</b> jest ograniczona. Po wykorzystaniu <b>szczepionki</b>lokalizacja ocalałego zostaje ujawniona przez Instynkt Zabójcy.<br><br><b>Prędkość mutacji:</b> Twoja moc rośnie wraz ze wzrostem <b>prędkości mutacji</b>. Przy <b>prędkości mutacji 2</b> <b>Uderzenie Macką</b> może niszczyć palety i część ścian. Przy <b>prędkości mutacji 3</b> <b>Uderzenie Macką</b> ma większy zasięg. Ikona wirusa T wyświetla bieżący poziom <b>prędkości mutacji</b>.<br><br><b>SPECJALNY WRÓG: Zombie</b><br>Gdy <b>zombie</b> atakuje ocalałego, nakłada na niego efekt <b>Skażony</b>. Jeśli ocalały jest już <b>skażony</b>, jego zdrowie spada.<br><br><b>Zombie</b> można niszczyć <b>Uderzeniem Macką</b> w celu zwiększenia <b>prędkości mutacji</b>. Ocalali mogą niszczyć je paletami. Zniszczone <b>zombie</b> odradzają się po krótkim czasie.","name":"WIRUS T","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/pl/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Zapewnia wszystkim graczom <b>100%</b> bonus do Punktów Krwi we wszystkich kategoriach podczas jednej konkretnej rozgrywki.<br><li>Łączy się.</li>","name":"Krwawa Zabawa Streamerów","flavor":"„Pamiątka cholernie dobrych czasów, kiedy ludzie zbierali się razem, ale uciekali z krzykiem”.","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"<b>Nieznacznie rozrzedza</b> Mroczną Mgłę.<br><li>Łączy się.</li>","name":"Czysty Odczynnik","flavor":"„Mgła napływa i więzi wszystko w swym gęstym szaleństwie. Nie ma tu drogi ucieczki, nie ma tu żadnego schronienia. Można się jedynie schować w czystych wodach stawu zagubionego w lesie”. – Nieznany Autor, Notatnik","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"<b>Nieznacznie zagęszcza</b> Mroczną Mgłę.<br><li>Łączy się.</li>","name":"Słaby Odczynnik","flavor":"„Stoję sparaliżowany na zimnie, a śmierć wisi nade mną”.","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"<b>Znacznie zagęszcza</b> Mroczną Mgłę.<br><li>Łączy się.</li>","name":"Mglisty Odczynnik","flavor":"„Ta Mgła jest pociagająca, hipnotyzująca. Uwielbiam ją, ale jednocześnie się jej boję”. – Szkicownik Donny","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"<b>Ogromnie zagęszcza</b> Mroczną Mgłę.<br><li>Łączy się.</li>","name":"Mroczny Odczynnik","flavor":"„Mgła zdaje się chronić nas przed bestią, ale jest to trucizna, rak wypełniający nas mrokiem i szaleństwem”. –Autor nieznany, Notatnik","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"Prosi Byt o <b>najciemniejszą noc</b>.","name":"Bukiet nowiu księżyca ","flavor":"„Śpij dalej, księżyc nie ukaże się tej nocy”.","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"Prosi Byt o <b>ciemniejszą noc</b>.","name":"Bukiet Półksiężyca","flavor":"„Księżyc gaśnie powoli, zmieniając się w uśmiech: «Nie przejmuj się, twoje sekrety są u mnie bezpieczne.» A może tylko się szczerzy?”","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"Prosi Byt o <b>jaśniejszą noc</b>.","name":"Bukiet Ćwierć-Księżyca","flavor":"„Stary księżyc pokazuje swoją twarz, patrząc pogardliwie na ofiary”.","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"Prosi Byt o <b>najjaśniejszą noc</b>.","name":"Bukiet Pełni Księżyca","flavor":"„Wraz z wzejściem księżyca, wilki wyją, oznajmiając o rozpoczęciu polowania”.","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"Po spaleniu <b>nieznacznie zwiększa</b> szansę na wylosowanie mapy „Posiadłość MacMillanów”.<br><li>Łączy się.</li>","name":"Strona z Księgi Macmillana","flavor":"„Podarta, wyblakła strona z księgi z nieczytelną informacją. Wyciśnięto na niej pieczątkę MacMillanów”.","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"Po spaleniu <b>znacznie zwiększa</b> szansę na wylosowanie mapy „Posiadłość MacMillanów”.<br><li>Łączy się.</li>","name":"Podpisana Strona Księgi","flavor":"„Wyblakła strona zawierająca informacje o ekwipunku górniczym oraz transakcjach handlowych. Jest podpisana przez Archiego Macmillana”.","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"Po spaleniu <b>ogromnie zwiększa</b> szansę na wylosowanie mapy „Posiadłość MacMillanów”.<br><li>Łączy się.</li>","name":"Kość Paliczkowa Macmillana","flavor":"„W piwnicy znajdującej się w magazynie kopalni odnaleziono pozostałości szkieletu MacMillana. Kości nóg były roztrzaskane na kawałki, a obok leżał młot górniczy”.","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"Po spaleniu <b>nieznacznie zwiększa</b> szansę na wylosowanie mapy „Złomowisko Aut”.<br><li>Łączy się.</li>","name":"Postrzępiona Blacha","flavor":"„Mocno zardzewiałe, powyginane i rozdarte blachy”.","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"Po spaleniu <b>znacznie zwiększa</b> szansę na wylosowanie mapy „Złomowisko Aut”.<br><li>Łączy się.</li>","name":"Rejestracja Wirgińska","flavor":"„Zardzewiała, wygięta rejestracja samochodowa pochodząca ze stanu Wirginia”.","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"Po spaleniu <b>ogromnie zwiększa</b> szansę na wylosowanie mapy „Złomowisko Aut”.<br><li>Łączy się.</li>","name":"Klucz Azarowa","flavor":"„Zepsuty klucz do samochodu nieznanej marki. Brelok dołączony do klucza wskazuje na to, że jego właścicielem jest niejaki A.Azarow”.","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"Po spaleniu <b>nieznacznie zwiększa</b> szansę na wylosowanie mapy „Farma Coldwind”.<br><li>Łączy się.</li>","name":"Znacznik Bydła -28","flavor":"„Zakrwawiony znacznik bydła z wygrawerowaną liczbą 28”.","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"Po spaleniu <b>znacznie zwiększa</b> szansę na wylosowanie mapy „Farma Coldwind”.<br><li>Łączy się.</li>","name":"Znacznik Bydła Coldwind -81","flavor":"„Zakrwawiony znacznik bydła z grawerunkiem «Farma Coldwind» oraz numerem 81”.","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"Po spaleniu <b>ogromnie zwiększa</b> szansę na wylosowanie mapy „Farma Coldwind”.<br><li>Łączy się.</li>","name":"Medalik w Kształcie Serca","flavor":"„Srebrny medalik w kształcie serca. Proste wnętrze z wygrawerowanymi literami: E+M”.","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"Po spaleniu <b>nieznacznie zwiększa</b> szansę na wylosowanie mapy „Przytułek Crotus Prenn”.<br><li> Łączy się></li>","name":"Obłędny Bilet","flavor":"„Zużyty oraz wyblakły bilet z nieczytelną informacją”.","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"Po spaleniu <b>znacznie zwiększa</b> szansę na wylosowanie mapy „Przytułek Crotus Prenn”.<br><li>Łączy się.</li>","name":"Obłędny Bilet P.Elliotta","flavor":"„Różowy, papierowy bilet wskazujący Philipa Elliota jako uprawnionego do przejazdu do Przytułka Crotus Prenn”.","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"<b>Po spaleniu ogromnie zwiększa</b> szansę na wylosowanie mapy „Przytułek Crotus Prenn”.<br>","name":"Zwęglona Fotografia Ślubna","flavor":"„Spalony portret pewnej pary na ich weselu, twarze są całkowicie zwęglone oraz niedające się zidentyfikować”.","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"Po spaleniu <b>nieznacznie zwiększa</b> szansę na wylosowanie mapy „Haddonfield”.<br><li>Łączy się</li>","name":"Ulotka Dożynkowa","flavor":"„Wyblakła ulotka informująca o «78-ych Dożynkach w Haddonfield». Przednia strona przedstawia wielką kreskówkową dynię”.","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"Po spaleniu <b>znacznie zwiększa</b> szansę na wylosowanie mapy „Haddonfield”.<br><li>Łączy się</li>","name":"Niszczejąca Deska","flavor":"„Zapleśniała i zgniła deska dębowa, taka sama jak te użyte w większości domów w Haddonfield”.","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"Po spaleniu <b>ogromnie zwiększa</b> szansę na wylosowanie mapy „Haddonfield”.<br>","name":"Klucz do Nieruchomości Strode","flavor":"„Zwyczajnie wyglądający klucz do domu. Na załączonej kartonowej zawieszce widnieje napis «Nieruchomość Strode» i dopisany ręcznie adres: 45 Lampkin Lane”.","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"Po spaleniu <b>nieznacznie zwiększa</b> szansę na wylosowanie mapy „Bagienne Rozlewisko”.<br><li>Łączy się</li>","name":"Dymiące Sznury","flavor":"„Spalony kawałek liny żeglarskiej, wciąż dymiący się ciepło”.","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"Po spaleniu <b>znacznie zwiększa</b> szansę na wylosowanie mapy „Bagienne Rozlewisko”.<br><li>Łączy się</li>","name":"Dymiący Znak Powitalny","flavor":"„Znak powitalny wykonany z topornej deski wypolerowanej przez wodę. Znak jest zwęglony i wciąż się dymi”.","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"Po spaleniu <b>ogromnie zwiększa</b> szansę na wylosowanie mapy „Bagienne Rozlewisko”.<br>","name":"Książka Kucharska Babci","flavor":"„Oprawiona w skórę księga zawierająca straszne przepisy z wykorzystaniem ludzkiego mięsa, takie jak pyszne babcine chili”.","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"Po spaleniu <b>nieznacznie zwiększa</b> szansę na wylosowanie mapy „Léry\'s Memorial Institute\\".<br><li>Łączy się.</li>","name":"Awaryjny Certyfikat","flavor":"„Żółta, wykonana węglem kopia dokumentu, który w nagłych przypadkach umożliwia natychmiastowe osadzenie pacjenta w placówce medycznej. Skopiowane informacje są rozmazane i nieczytelne”.","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"<b>Po spaleniu znacząco zwiększa</b> szansę na wylosowanie mapy „Léry\'s Memorial Institute”.<br><li>Łączy się.</li>","name":"Raport Psychiatryczny","flavor":"„Raport psychiatryczny podpisany przez Hermana Cartera. Opisuje pogorszenie pamięci pacjenta i sugeruje kolejne kroki w procedurze”.","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"<b>Po spaleniu ogromnie zwiększa</b> szansę na wylosowanie mapy „Instytut Pamięci Léry\'ego”.","name":"Roztrzaskane Okulary","flavor":"„Pogięte okulary do czytania. Na zniszczonej soczewce można dostrzec lśniącą plamkę krwi”.","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"Po spaleniu <b>nieznacznie zwiększa</b> szansę na wylosowanie mapy „Czerwony Las”.<br><li>Łączy się.</li>","name":"Pomalowany Kamyk z Rzeki","flavor":"„Gładki kamyk wypolerowany przez potok. Jest pomalowany czerwoną, czarną i białą farbą tak, aby przedstawiać podobiznę groźnego niedźwiedzia”.","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"Po spaleniu <b>znacznie zwiększa</b> szansę na wylosowanie mapy “Czerwony Las”.<br><li>Łączy się.</li>","name":"Książka dla Dzieci","flavor":"„Niewiarygodnie stara i zniszczona książka z opowieściami, której strony zostały wydarte przez wszelkie możliwe żywioły”.","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"<b>Po spaleniu</b> ogromnie zwiększa szansę na wylosowanie mapy „Czerwony Las”.<br>","name":"Ostatnia Maska","flavor":"„Pięknie wykonana maska tygrysa, która idealnie pasowałaby do twarzy dziecka. W wewnętrznej części maski znajduje się zapisana cyrylicą notatka”.","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"Po spaleniu <b>ogromnie zwiększa</b> szansę na wylosowanie mapy „Springwood”.<br>","name":"Flecista z Hameln","flavor":"„Zdradzony przez mieszkańców miasta, wypełnia swoją zemstę poprzez porywanie ich dzieci”.","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"Spalenie tego daru zapewnia ochronę przed utratą dodatków do mocy aż do zakończenia rozgrywki.<br>","name":"Czarny Strażnik","flavor":"„Usłysz mój głos, zachowaj mój sposób życia, chroń mnie przed pustką”.","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"Spalenie tego daru zapewnia ochronę przed utratą przedmiotów oraz dodatków do przedmiotu.","name":"Biały Strażnik","flavor":"„I trzymaj mnie ode złego, ochroń mnie i odejdź”.","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"Po spaleniu <b>ogromnie zwiększa</b> szansę na wylosowanie mapy „Posiadłość Rodziny Yamaoka”.","name":"Herb Rodziny Yamaoka","flavor":"„Ucieczka z domu przypomina walkę z wiatrakami: prędzej czy później dopadną cię wspomnienia, podążą twym szlakiem i nie pozwolą o sobie zapomnieć.\\"","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"Wzywa Byt, aby odrzucił wszystkie dary, które zmieniają szansę na odesłanie do określonego wymiaru.<br>Może zostać anulowane tylko w wypadku, kiedy zostaną złożone cztery identyczne dary.","name":"Strażnik ofiarny","flavor":"„Ślepi, poddajemy się twej woli i błagamy o przewodnictwo”.","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"<b>Ogromnie zwiększa</b> szansę na zesłanie do szkoły podstawowej Midwich Elementary po spaleniu.","name":"List Mary","flavor":"„W niespokojnych snach widzę to miasto”.","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"Po spaleniu <b>znacznie zwiększa</b> szansę na wylosowanie mapy „Zakład mięsny Gideon”.<br><li>Łączy się.</li>","name":"Kawałek Układanki","flavor":"„Gratulacje. Wciąż żyjesz. Większość ludzi nie potrafi docenić faktu, że żyje. Ale nie ty. Już nie”.","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"<b>Ogromnie zwiększa</b> szansę wysłania do Hawkins National Laboratory w razie spalenia.","name":"Karta Hawkins National Laboratory ","flavor":"„Przemoczona i zakrwawiona karta identyfikacyjna z numerem”.","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"<b>Ogromnie zwiększa</b> szansę wysłania do grobu w Glenvale po spaleniu.","name":"Zakurzona pętla","flavor":"„Każdy wiążący koniec z końcem na tym zakurzonym zadupiu powie ci, czym jest pętla – zbawieniem”.","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"Wspaniały, powodujący mdłości tort z okazji naszych trzech wspólnych lat. Daje <b>103-procentowy</b> bonus Punktów Krwi we wszystkich kategoriach dla wszystkich graczy w tej grze.<br><li>Łączy się</li>","name":"Makabryczny tort","flavor":"„Wszystkie najlepszego z okazji trzech wspólnych lat!”<br> – Zespół Dead by Daylight","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"Niezwykle ponury tort z okazji naszych czterech wspólnych lat. O 1% smaczniejszy niż makabryczny tort. Daje <b>104-procentowy</b> bonus do Punktów Krwi we wszystkich kategoriach dla wszystkich graczy w tej grze.<br><li>Łączy się</li>","name":"Upiorny tort","flavor":"„Wszystkiego najlepszego z okazji czterech wspólnych lat! Liczymy na kolejne!”<br> – zespół Dead by Daylight","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/pl/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Cienka, szeroka soczewka w idealnym stanie. Została zaprojektowana tak, aby poszerzać wiązkę światła kosztem jej zasięgu.<br><li><b>Umiarkowanie rozszerza</b> wiązkę światła latarki.</li><li><b>Nieznacznie zmniejsza</b> zasięg wiązki światła latarki.</li>","name":"Szeroka Soczewka","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"Malutka żarówka latarki o większej mocy, która zapewnia jaśniejszą i silniejszą wiązkę światła.<br><li><b>Nieznacznie zwęża</b> wiązkę światła latarki.</li><li><b>Nieznacznie zwiększa</b> jasność światła latarki.</li><li><b>Nieznacznie zwiększa</b> czas trwania Oślepienia.</li>","name":"Mocna Żarówka","flavor":"„Nawet najsilniejsze światło nie przebije się przez ciemność czarnej mgły”.","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"Skórzany pasek owinięty wokół latarki. Poprawia chwyt.<br><li><b>Nieznacznie zwiększa</b> celność latarki.</li>","name":"Skórzany Uchwyt","flavor":"„Zbyt wielu zginęło przez spocone dłonie”.","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"Standardowa bateria nieznanej marki.<br><li>Wydłuża działanie zwykłej latarki o <b>2 s</b>.</li>","name":"Bateria","flavor":"„Kolejna niemalże wyczerpana bateria”.","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"Soczewka i reflektor wzmacniające wiązkę latarki.<br><li><b>Umiarkowanie zwiększają</b> jasność światła latarki.</li><li><b>Umiarkowanie wydłużają</b> czas trwania Oślepienia.</li>","name":"Jaskrawy Filtr","flavor":"„Niech światło wypali ich mroczną zasłonę”.","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"Dopasowany gumowy uchwyt poprawiający chwyt latarki.<br><li><b>Umiarkowanie zwiększa</b> celność latarki.</li>","name":"Gumowy uchwyt","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"Żarówka żarnikowa mająca przedłużać żywotność baterii.<br><li><b>Umiarkowanie zmniejsza</b> prędkość zużywania się baterii latarki.</li>","name":"Energooszczędna Żarówka","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"Bateria oznaczona jako „przemysłowa siła”.<br><li>Wydłuża działanie zwykłej latarki o <b>4 s</b>.</li>","name":"Pojemna Bateria","flavor":"„Bateria, która według reklam może wytrzymać 8 godzin, wystarcza w czarnej mgle na zaledwie kilka sekund”.","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"Gruba szklana soczewka, która skupia wiązkę światła wydobywającego się z latarki. Zwiększa intensywność wiązki światła.<br><li><b>Nieznacznie zwiększa</b> zasięg wiązki światła latarki.</li><li><b>Nieznacznie zwęża</b> wiązkę światła latarki.</li><li><b>Nieznacznie zwiększa</b> jasność światła latarki.</li><li><b>Nieznacznie zwiększa</b> czas trwania Oślepienia.</li>","name":"Soczewka Skupiająca","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"Najnowszy model baterii, o zwiększonej trwałości.<br><li>Wydłuża działanie zwykłej latarki o <b>6 s</b>.</li>","name":"Długo trzymająca bateria","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"Chemiczna żarówka emitująca intensywnie jasne światło.<br><li><b>Znacząco zwiększa</b> jasność światła latarki.</li><li><b>Znacząco zwiększa</b> czas trwania Oślepienia.</li>","name":"Intensywny halogen","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"Szeroka soczewka wykonana z niedającego się zarysować szafiru, który optymalizuje moc i zasięg wiązki światła.<br><li><b>Średnio rozszerza</b> wiązkę światła latarki.</li><li><b>Nieznacznie zwiększa</b> rozmiar wiązki światła latarki.</li><li><b>Średnio zwiększa</b> jasność światła latarki.</li><li><b>Średnio zwiększa</b> czas trwania oślepienia.</li>","name":"Dalekosiężna szafirowa soczewka","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"Ciężka i nieprzezroczysta żarówka nieznanego pochodzenia. Emituje słabe światło nawet wtedy, gdy jest wyłączona.<br><li><b>Ogromnie zwiększa</b> jasność światła latarki.</li><li><b>Ogromnie wydłuża</b> czas trwania Oślepienia.</li><li><b>Nieznacznie zwiększa</b> prędkość zużywania się baterii latarki.</li>","name":"Dziwna żarówka","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"Ciasno spleciony sznurek używany podczas rytuałów modlitewnych. Można go przymocować do klucza.<br><li>Dodaje <b>10 sekund</b> do działania klucza.</li>","name":"Sznur Modlitewny","flavor":"„Módlcie się, ile dusza zapragnie. Wasze słowa znikają we Mgle”.","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"Porowata i porysowana biała perła. Maleńki zaczep pozwala na przymocowanie perły do klucza.<br><li><b>Umiarkowanie zwiększa</b> zasięg odczytywania aur przez klucz.</li>","name":"Porysowana Perła","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"Naszyjnik wykonany z matowych koralików różnej wielkości. Używany podczas modlitewnych rytuałów. Może zostać przymocowany do klucza.<br><li>Dodaje <b>15 sekund</b> do działania klucza.</li>","name":"Różaniec","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"Mocno zużyty żeton wykonany z mosiądzu. Jeśli kiedykolwiek coś na nim wygrawerowano, to napis ten zniknął bardzo dawno temu. Może zostać przymocowany do klucza, aby przekazać mu zdolność odczytywania aury.<br><li>Ujawnia <b>aury Ocalałych</b> znajdujących się w zasięgu <b>24 m</b> od ciebie.</li>","name":"Przeżarty Żeton","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"Złoty, niespecjalnie wyróżniający się żeton. Obie jego strony są gładkie i pozbawione jakichkolwiek inskrypcji. Może zostać przymocowany do klucza, aby przekazać mu zdolność odczytywania aury.<br><li>Ujawnia <b>aury Ocalałych</b> znajdujących się w zasięgu <b>48 m</b> od ciebie.</li>","name":"Złoty Żeton","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"Pospolita zawieszka na klucz o niezwykle granatowym połysku. Łączy energię klucza z energią użytkownika, uniemożliwiając utratę klucza nawet w najmroczniejszych czasach.<br><li>Gdy umrzesz podczas rozgrywki, nie stracisz dzierżonego przez siebie klucza; stracisz jedynie ten dodatek do przedmiotu.</li>","name":"Kółko na Klucze","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"Nieprzezroczysty kawałek szkła, który wydaje z siebie wibrujący dźwięk. Gdy używasz klucza do odblokowania włazu, szkło chroni klucz przed pęknięciem, przyjmując na siebie całą energię Mgły.<br><li>Otwierając właz, nie tracisz klucza; zamiast tego tracisz ten dodatek do przedmiotu.</li>","name":"Mętne Szkło","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"Szkarłatny bursztyn z czarnymi żyłkami. Jest ciepły w dotyku. Może zostać przymocowany do klucza, aby przekazać mu zdolność odczytywania aury.<br><li>Ujawnia <b>aurę zabójcy</b> znajdującego się w zasięgu <b>32 metrów</b> od ciebie. Użycie dodatku pochłania <b>ogromną ilość ładunków</b> wytrzymałości klucza.</li>","name":"Krwawy bursztyn","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"Fragment grubego, włóknistego materiału. Narysowano na nim kawałek wyblakłej mapy, która sama w sobie jest bezużyteczna.<br><li>Dodaje <b>5 sekund</b> do wytrzymałości dowolnej mapy.</li>","name":"Dodatkowy Fragment","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"Mały przewód elektryczny. Oba końce są mocno uszkodzone, tak jakby przewód został siłą wyrwany ze swojego pierwotnego miejsca. Może być zawiązany wokół mapy, aby zwiększyć jej zdolność odczytywania aury.<br><li>Umożliwia odczytywanie aur <b>bram wyjściowych</b>.</li>","name":"Żółty Kabel","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"Drewniana pieczęć z gumowym spodem służąca do oznaczania dokumentów. Nie wiadomo, kto był jej pierwotnym właścicielem ani do czego ją stosował. Można używać razem z mapą.<br><li><b>Umiarkowanie zwiększa</b> zasięg oznaczania punktów z mapy.</li>","name":"Niepospolity Stempel","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"Śluzowata półprzezroczysta substancja o paskudnym lawendowym odcieniu. Ta galaretowata masa nieznanego pochodzenia jest wyjątkowo odporna na wysokie temperatury.<br><li><b>Umiarkowanie spowalnia</b> spalanie się mapy.</li>","name":"Ognioodporna galareta","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"Brudny, szorstki kawałek sznurka w szkarłatnym kolorze. Może być zawiązany wokół mapy, aby wzmocnić jej zdolność odczytywania aury.<br><li>Umożliwia odczytywanie aur <b>przedmiotów należących do zabójcy</b>.</li>","name":"Czerwony Sznurek","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"Dziwny, zdobiony złotem koralik, Może zostać użyty do powiększenia mapy i oznaczania konkretnej pozycji. Emituje energię, którą mogą odczuć i zobaczyć wszyscy Ocalali.<br><li>Po naciśnięciu przycisku drugiej akcji umieszcza znacznik.</li><li>Utworzony znacznik emituje jasne światło, które widzi każdy Ocalały.</li>","name":"Szklany Koralik","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"Pieczęć wyciosana z wytrzymałego, jasnego drewna. Tekst znajdujący się u podstawy pieczęci jest niezrozumiały: „kw\'zvre\'od”. Można używać razem z mapą.<br><li><b>Znacznie zwiększa </b> zasięg oznaczania punktów z mapy.</li>","name":"Dziwny Stempel","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"Czarny, gładki przewód o łagodnym wyglądzie. Może być zawiązany wokół mapy, aby zwiększyć jej zdolność odczytywania aury.<br><li>Umożliwia odczytywanie <b>aury włazu</b>.</li>","name":"Jedwabny Czarny Sznur","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"Skompikowany zestaw soczewek złożony w zadziwiające urządzenie. Kółka zębate kontrolują samonapędzające się soczewki, które skupiają się na czymś niewidzialnym dla ludzkiego oka.<br><li>Każdy Ocalały widzi aury obiektów ujawnianych przez mapę, kiedy jej posiadacz ją aktywuje.</li>","name":"Kryształowy Koralik","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"Jednorazowe rękawiczki medyczne noszone po to, aby uniknąć zanieczyszczenia krzyżowego.<br><li><b>Umiarkowanie zwiększają</b> bonus postępu za dobre zaliczenie testu umiejętności.</li>","name":"Gumowe Rękawiczki","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"Taśma medyczna wysokiej jakości służąca do zamykania małych ran.<br><li><b>Nieznacznie przyspiesza</b> leczenie.</li>","name":"Plaster Motylkowy","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"Zestaw bandaży znajdujący się zazwyczaj w apteczkach pierwszej pomocy.<br><li>Dodaje <b>8 ładunków</b> do apteczki.</li>","name":"Bandaże","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"Pospolita gąbka służąca do pochłaniania dodatkowej ilości krwi. Zapewnia łatwiejszy dostęp do ran.<br><li><b>Znacznie zwiększa</b> bonus postępu za dobre zaliczenie testu umiejętności.</li>","name":"Gąbka","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"Opakowanie bandaży, które przylegają do siebie bez potrzeby używania zacisków, co pozwala na szybsze i dokładniejsze opatrywanie ran.<br><li>Dodaje <b>8 ładunków</b> do apteczki.</li><li><b>Nieznacznie przyspiesza</b> leczenie.</li>","name":"Samoprzylepny bandaż","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"Nie jest to wprawdzie profesjonalny sprzęt medyczny, ale nadaje się do szybkiego, choć bolesnego zamykania rany.<br><li><b>Umiarkowanie zwiększa </b> szansę na wywołanie testu umiejętności.</li><li><b>100$ dodatkowych Punktów Krwi</b> za wykonanie świetnego testu umiejętności.</li><li><b>Nieznacznie przyspiesza</b> leczenie.</li>","name":"Igła i nić","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"Nożyczki zaprojektowane do łatwego przecinania tkanin.<br><li><b>Umiarkowanie przyspieszają</b> leczenie.</li>","name":"Medyczne Nożyce","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"Sterylna gaza używana do opatrywania różnych ran. Stanowi część zestawu pielęgnacyjnego.<br><li>Dodaje <b>12 ładunków</b> do apteczki.</li>","name":"Zwój gazy","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"Szwy używane do zamykania ran i łączenia tkanki. Mimo że szwy chirurgiczne są bardzo skuteczne, są także trudne w użyciu.<br><li><b>Znacznie zwiększa</b> szansę na wywołanie testu umiejętności.</li><li><b>150% dodatkowych Punktów Krwi</b> otrzymywanych za świetne zaliczenie testu umiejętności.</li><li><b>Nieznacznie przyspiesza</b> leczenie.</li>","name":"Chirurgiczny szew","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"Opakowanie żelowych opatrunków stosowanych do opatrywania ciężkich ran.<br><li>Dodaje <b>16 ładunków</b> do apteczki.</li>","name":"Żelowy opatrunek","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"Opatrunek o właściwościach absorpcyjnych, który zapobiega wyciekom płynów ustrojowych. Stosowany do opatrywania dużych ran brzucha.<br><li><b>Znacznie przyspiesza</b> leczenie.</li><li><b>Zmniejsza liczbę ładunków</b> o <b>8</b>.</li>","name":"Opatrunek na brzuch","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"Biały proszek o właściwościach koagulacyjnych. Po naniesieniu na ranę zatrzymuje krwotok.<br><li>Naciśnij przycisk <i>drugiej akcji</i> podczas leczenia apteczką, aby skorzystać z Odczynnika.</li><li>Ranny ocalały, na którym użyty zostanie <i>Odczynnik</i>, otrzymuje efekt <b>Wytrzymałość</b> na <b>8 sekund</b>. W tym czasie obrażenia, które wprowadziłyby ocalałego w stan agonii, wywołają zamiast tego efekt <b>głębokiej rany</b>. Ocalały ma <b>20 sekund</b>, aby się <i>uleczyć</i>.</li><li>Jeśli ocalały odniesie jakiekolwiek obrażenia podczas trwania efektu <b>głębokiej rany</b> lub jeśli czas efektu <b>głębokiej rany</b> dobiegnie końca, ocalały przejdzie natychmiast w stan agonii.</li><li>Zużywa apteczkę.</li>","name":"Odczynnik","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"Substancja przeciwkrwotoczna, która w mgnieniu oka zatrzymuje krwawienie.<br><li>Naciśnij przycisk <i>drugiej akcji</i> podczas leczenia apteczką, aby skorzystać z zastrzyku tamującego krwawienie.</li><li>Ocalały podlegający działaniu substancji będzie biernie odzyskiwał zdrowie przez <b>16</b> sekund od użycia.</li><li>Wymagany czas jest modyfikowany przez umiejętności, przedmioty i dodatki, które wpływają na <i>prędkość leczenia</i>.</li><li>Efekt jest anulowany, gdy ocalały zmieni stan zdrowia lub zostanie podniesiony.</li><li>Zużywa apteczkę.</li>","name":"Zastrzyk Tamujący Krwawienie","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"Użyteczne narzędzie służące do zaciskania gumowych węży ogrodowych i przytrzymywania drutów we właściwym miejscu. Zapobiega nieszczęśliwym wypadkom.<br><li>Hałasy wywoływane przez naprawy są ograniczone, a ich zasięg zmniejszony o 8 metrów.</li>","name":"Kleszcze","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"Sprężyny, śruby i koła zębate. Przeważnie bezużyteczne śmieci.<br><li>Dodają <b>8 ładunków</b> do skrzynki z narzędziami.</li>","name":"Skrawki","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"Zwyczajna szmatka. Jest podejrzanie czysta.<br><li><b>Nieznacznie zwiększa</b> prędkość naprawy za pomocą skrzynki z narzędziami.</li>","name":"Czysta Szmatka","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"Przenośna, bardzo ciężka szpula miedzianego drutu.<br><li>Dodaje <b>12 ładunków</b> do skrzynki z narzędziami.</li>","name":"Kłębek Drutu","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"Nasadka zapewniająca giętkość i elastyczność śrub znajdujących się głęboko w mechanicznych urządzeniach, poza zasięgiem jakichkolwiek narzędzi.<br><li><b>Umiarkowanie przyspiesza</b> naprawianie za pomocą skrzynki z narzędziami.</li>","name":"Nasadka przegubowa","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"Grube rękawiczki, które zmniejszają zwinność, ale chronią ręce przed urazem.<br><li>Zapobiega informowaniu zabójcy o sabotowaniu haka za pomocą skrzynki z narzędziami.</li>","name":"Rękawice Ochronne","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"Na tym kawałku kory namalowano coś, co przypomina instrukcję naprawy.<br><li>Usuwa testy umiejętności podczas naprawy za pomocą skrzynki narzędziowej.</li>","name":"Instrukcje","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"Nastawny klucz z mocnym uchwytem. Niezbędny przyrząd w każdej skrzynce z narzędziami.<br><li>Haki sabotowane za pomocą skrzynki narzędziowej odnawiają się 15 sekund dłużej.</li>","name":"Zacisk","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"Podstawowe narzędzie tnące wykonane z metalowego drutu i dwóch drewnianych uchwytów.<br><li><b>Nieznacznie przyspiesza</b> sabotowanie za pomocą skrzynki z narzędziami.</li>","name":"Drut do cięcia","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"Mała piła ręczna przymocowana do metalowego ostrza.<br><li><b>Umiarkowanie przyspiesza</b> sabotowanie za pomocą skrzynki z narzędziami.</li>","name":"Piła do Metalu","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"Te skomplikowane mechaniczne części wydają się tu nie pasować. Są czyste i lśnią, jakby wyszły prosto z fabryki.<br><li><b>Naprawianie generatora</b> jest zastąpione akcją <b>Zamontuj Markowe Części</b>.</li><li>Akcja <i>Zamontuj Markowe Części</i> automatycznie naprawi <b>15%</b> generatora w przeciągu <b>5 sekund</b>.</li><li>W momencie montowania markowych części wywołane zostaną <b>2 trudne testy umiejętności</b>. </li><li>Każde udane trafienie takiego testu umiejętności zapewni dodatkowe <b>5% postępu w naprawie generatora</b> do maksymalnie <b>25%</b>.</li><li><i>Dodatek znika po użyciu.</i></li>","name":"Markowe Części","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"Grawerowana obrączka ślubna pochodząca z Mgły, pulsująca nieopisaną i niepojętą energią. <li>Pokazuje aurę obsesji.</li><li>Zmniejsza szansę zostania obsesją zabójcy.</li>","name":"Niezwykła obrączka ślubna","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/pl/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Zapewnia <b>50%</b> dodatkowych Punktów Krwi w kategorii Cel.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Saszetka z Bagienną Lawendą","flavor":"„Ręcznie szyta saszetka wypełniona suchymi liśćmi. Uwalnia mdły, herbaciany zapach”.","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"Zapewnia <b>75%</b> dodatkowych Punktów Krwi w kategorii Cel.<br><li>Osobiste.</li<li>Łączy się.</li>","name":"Świeża Bagienna Lawenda","flavor":"„Przepiękny, fioletowy kwiat, który rośnie w środku skażonych bagien. Uwalnia łagodny, herbaciany zapach”.","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"Zapewnia <b>100%</b> dodatkowych Punktów Krwi w kategorii Cel.<br><li>Osobiste.</li<li>Łączy się.</li>","name":"Pachnąca Bagienna Lawenda","flavor":"„Przepiękny fioletowy kwiat, który rośnie w samym centrum skażonego bagna. Uwalnia silny, herbaciany zapach”.","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"Zapewnia <b>50%</b> dodatkowych Punktów Krwi w kategorii Przetrwanie.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Saszetka z liśćmi Szarłatu Wyniosłego","flavor":"„Ręcznie szyta saszetka wypchana paciorkowatym zbożem. Powiada się, że Szarłat jest wieczny”.","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"Zapewnia <b>75%</b> dodatkowych Punktów Krwi w kategorii Przetrwanie.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Świeży Szarłat Wyniosły","flavor":"„Bladozielone liście są poprzeplatane dziwnymi szkarłatnymi żyłkami. O szarłacie mówi się, że jest wieczny”.","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"Zapewnia <b>100%</b> dodatkowych Punktów Krwi w kategorii Przetrwanie.<br><li>Osobiste.</li<li>Łączy się.</li>","name":"Pachnący Szarłat Wyniosły","flavor":"„Blado-zielone liście podświetlone osobliwymi karmazynowymi żyłami. Uwalnia silny rzodkiewkowy zapach”.","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"Zapewnia <b>50%</b>  dodatkowych Punktów Krwi w kategorii Altruizm.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Saszetka Kwitnących Pierwiosnków","flavor":"„Ręcznie szyta saszetka zawierająca 4 złote płatki. Pierwiosnek otwiera się tuż przed tym, jak słońce ustępuje miejsca nocy”.","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"Zapewnia <b>75%</b> dodatkowych Punktów Krwi w kategorii Altruizm.<br><li>Osobiste.</li<li>Łączy się.</li>","name":"Świeże Kwitnące Pierwiosnki","flavor":"„Złote, zerwane przy czubku kwiaty. Pierwiosnki otwierają się tuż przed tym, kiedy słońce ustępuje miejsca nocy”.","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"Zapewnia <b>100%</b> dodatkowych Punktów Krwi w kategorii Altruizm.<br><li>Osobiste.</li<li>Łączy się.</li>","name":"Pachnące Kwitnące Pierwiosnki","flavor":"„Złote, zerwane przy czubku kwiaty. Uwalniają mocny, ziemisty lecz kojący zapach”.","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"Zapewnia <b>50%</b> dodatkowych Punktów Krwi w kategorii Zuchwałość.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Saszetka Goździków","flavor":"„Ręcznie szyta saszetka zawierająca mieszaninę bladych płatków oraz zielonkawo-niebieskich liści. Uwalnia mocny i ostry goździkowy zapach”.","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"Zapewnia <b>75%</b> dodatkowych Punktów Krwi w kategorii Zuchwałość.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Świeże Goździki","flavor":"„Pęk kwiatów z różowymi płatkami oraz krwistoczerwoną owocnią. Uwalnia ostry, goździkowy zapach”.","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"Zapewnia <b>100%</b> dodatkowych Punktów Krwi w kategorii Zuchwałość.<br><li>Osobiste.</li<li>Łączy się.</li>","name":"Świeże Goździki","flavor":"„Pęk kwiatów z różowymi płatkami i krwistoczerwoną owocnią. Uwalnia silny, korzenno-goździkowy zapach”.","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"Zapewnia <b>25%</b> dodatkowych Punktów Krwi we <b>wszystkich</b> kategoriach dla każdego z Ocalałych.<br><li>Łączy się</li>","name":"Związana Koperta","flavor":"„Otwarta koperta, ponownie zapieczętowana oraz związana 4 kolorowymi wstążkami”.","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"Zapewnia <b>25%</b> dodatkowych Punktów Krwi we wszystkich kategoriach.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Zapieczętowana Koperta","flavor":"„Niezaadresowana, zamknięta koperta, która pożółkła wraz z upływem czasu. Znajdująca się w środku wiadomość na zawsze pozostanie tajemnicą”.","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"Zapewnia <b>100%</b> premię do otrzymywanych Punktów Krwi we wszystkich kategoriach.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Ucieczkowe Ciasto","flavor":"„Zdjęcie tego ciasta jest z pewnością prawdziwe”.","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"<b>Nieznacznie zwiększa</b> szczęście.<br><li>Łączy się.</li>","name":"Woreczek Kredy","flavor":"„Mały bawełniany woreczek wypełniony białym proszkiem nieznanego pochodzenia. Niektórzy wierzą, że przynosi szczęście”.","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>Umiarkowanie zwiększa</b> szczęście <b>wszystkich</b> ocalałych.<br><li>Łączy się.</li>","name":"Kremowy Woreczek Kredy","flavor":"„Krucha, miniaturowa statuetka zrobiona z czarnej soli, reprezentująca klęczącą, ofiarującą dar kobietę. Niektórzy wierzą, że przynosi ona szczęście”.","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"<b>Znacząco zwiększa</b> szczęście.<br><li>Osobiste.</li><li>Łączy się.</li>","name":"Woreczek Proszku z Kości Słoniowej","flavor":"„Mały skórzany woreczek ukazujący proste, ręcznie szyte, białe linie na jednej z jego stron. Worek jest wypełniony proszkiem z kości słoniowej, który lśni w blasku księżyca. Niektórzy wierzą, że przynosi szczęście”.","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>Nieznacznie zwiększa</b> szczęście <b>wszystkich</b> Ocalałych.<br><li>Łączy się.</li>","name":"Słony Woreczek","flavor":"„Mały, bawełniany woreczek wypełniony czarnymi kryształkami soli. Niektórzy wierzą, że przynosi szczęście. Nie rozsyp jego zawartości”.","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>Znacznie zwiększa</b> szczęście <b>wszystkich</b> ocalałych.<br><li>Łączy się.</li>","name":"Słoik słonych ust Viga","flavor":"„Mocno zakręcony szklany słoik, zawierający wyrwane ludzkie usta, pływające w mętnej solance. Niektórzy wierzą, że przynosi szczęście.”","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"Prosi Byt, aby przywołał  <b>jedną</b> skrzynię więcej.<br><li>Łączy się.</li>","name":"Zaśniedziała Moneta","flavor":"„Okrągły kawałek metalu, który stracił cały połysk”.","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"Prosi Byt o przywołanie <b>2 dodatkowych</b> skrzyń.<br><li>Łączy się.</li>","name":"Błyszcząca moneta","flavor":"„Czysty, wypolerowany kawałek złota…”","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"Uspokaja Byt oraz <b>nieznacznie zmniejsza</b> <b>liczbę</b> haków ofiarnych pojawiających się na mapie.<br><li>Łączy się.</li>","name":"Skamieniały Dąb","flavor":"„Niszczejący kawałek skamieniałego drewna”.","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"Zaczynasz mecz z losowym Ocalałym.<br><li>Sekret.</li>","name":"Całun Zjednoczenia","flavor":"„Związany kawałek materiału”.","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"Wszyscy Ocalali zaczynają mecz razem.<br><li>Sekret.</li>","name":"Całun Przywiązania","flavor":"„Wyblakły, kwadratowy kawałek tkaniny zasupłany na każdym końcu”.","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"Zaczynasz mecz z dala od Zabójcy.<br><li>Sekret.</li>","name":"Całun Viga","flavor":"„Przebywając we Mgle przez lata, miałem styczność z wieloma cudami i nie mogłem ich pojąć; dopiero teraz rozumiem, jak zagiąć nieodwracalne zasady Mgły”. –  Dziennik Viga","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/pl/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Wyzwala potencjał twojego odczytywania aury. Za każdym razem, gdy ukończona zostanie naprawa generatora, dostrzegasz aurę zabójcy przez <span class=\\"Highlight1\\">{0} s</span>.<br>Kiedy bramy wyjściowe stają się aktywne, dostrzegasz aurę zabójcy przez <span class=\\"Highlight2\\">{1} s</span>.","name":"Mroczny Zmysł","flavor":"„Przyjmij radę od weterana: Zwolnij, nie spiesz się i staraj się tyle nie martwić! Najlepszy sposób, by go pokonać, to wiedzieć jak myśli”. – Zaginione taśmy, Murf","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"Wyzwala potencjał twojego odczytywania aury. Paranoja połączona ze strachem przed porażką sprawia, że nie popełniasz dwa razy tych samych błędów.<br>Aury <span class=\\"Highlight1\\">{0}</span> generatorów znajdujących się w bliskiej odległości od siebie są ujawnione na okres <span class=\\"Highlight2\\">{1} s</span> za każdym razem, gdy rozpoczynasz mecz oraz zawsze wtedy, gdy zostanie naprawiony dowolny generator.<br>Jeżeli trzymasz w ręku mapę pozwalającą lokalizować obiekty, generatory ujawnione za pomocą <i>Deja Vu</i> dodawane są do mapy.","name":"Deja Vu","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"Wzrastające szanse na udaną ucieczkę napełniają cię nadzieją i dodają ci skrzydeł. Twoja bazowa prędkość ruchu jest zwiększona o <span class=\\"Highlight1\\">{0}%</span>, licząc od momentu aktywacji bram. Efekt trwa przez <span class=\\"Highlight3\\"> {1} s</span>.<br>","name":"Nadzieja","flavor":"„Zapinać pasy, ćwoki! Ruszamy!” – Zaginione taśmy: Nikki","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"Wyzwala potencjał twojego odczytywania aury. Kiedy jesteś na haku, aury wszystkich ocalałych zostają ujawnione pozostałym ocalałym. Jeżeli zabójca jest w promieniu <span class=\\"Highlight1\\">{0} m</span> od haka, jego aura jest ujawniona pozostałym ocalałym.<br><br>Gdy inny ocalały jest na haku, widzisz aury wszystkich pozostałych ocalałych. Jeśli zabójca znajduje się w promieniu <span class=\\"Highlight1\\">{0} m</span> od haka, widzisz także jego aurę.","name":"Pokrewieństwo","flavor":"„Bądźcie dla siebie mili. Siedzimy w tym razem”. – Zaginione taśmy: Sujan","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"Twój bieg jest lekki i delikatny, czyniąc twój trop trudniejszym do śledzenia. Ślady zadrapań pozostają widoczne o <span class=\\"Highlight1\\">{0} s</span> krócej niż normalnie.<br>","name":"Lekkość","flavor":"„Nie spiesz się, on wie, gdzie byłeś… Zawsze mówiłem: żyj wolno i umieraj staro”. – Zaginione taśmy: Dylan","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"Zostawienie kogoś w tyle jest nie do pomyślenia. Kiedy bramy wyjściowe zostają otwarte, uzyskujesz następujące efekty: <br><li><span class=\\"Highlight1\\">{0}%</span> więcej Punktów Krwi za leczenie i zdejmowanie z haków innych ocalałych.</li><li><span class=\\"Highlight2\\">{1}%</span> większa prędkość akcji podczas leczenia i zdejmowania z haka innych ocalałych.</li><li>Aury wszystkich ocalałych zostają ci ujawnione.</li>","name":"Nikt Nie Zostaje w Tyle","flavor":"„Ta, bez kitu. Ale uważam, że razem możemy go przechytrzyć i pokonać. Nie bądźcie przewidywalni i samolubni!” – Zaginione taśmy: Clyde","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"Wyzwala potencjał odczytywania aury. Aury nieotwartych skrzyń i przedmiotów na mapie w zasięgu <span class=\\"Highlight1\\">{0} m</span> stają się dla ciebie widoczne. Zapewnia <b>znacząco</b> większą szansę na odnajdywanie w skrzyniach rzadszych przedmiotów.","name":"Instynkt Grabieżcy","flavor":"„Pionierzy zbierali łupy godzinami”. – Zaginione taśmy: Aizeyu","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"Posiadasz niezaprzeczalną zdolność do wyczuwania zagrożenia. Kiedy patrzysz w kierunku zabójcy w promieniu <span class=\\"Highlight1\\">45°</span> i zasięgu <span class=\\"Highlight2\\">{0} m</span>, dostajesz ostrzeżenie dźwiękowe. Przeczucie odnawia się po upływie <span class=\\"Highlight3\\">{1} s</span>, licząc od każdorazowej aktywacji.","name":"Przeczucie","flavor":"„Mam złe przeczucie!”","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"Skrajne warunki motywują cię do działania. Gdy odniesiesz ranę, twoja prędkość reperowania, sabotowania, leczenia, ratowania z haka, przeskakiwania przez przeszkody, niszczenia totemów, otwierania bram i odblokowywania skrzyń jest zwiększona o <span class=\\"Highlight1\\">{0}%</span>.","name":"Zaradność","flavor":"„Skup się, nawet w tych desperackich czasach”.","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"Udało ci się opracować skuteczny sposób ucieczki z haków.<br><li>Daje dodatkowe próby uwolnienia się z haka: <span class=\\"Highlight1\\">{0}</span>.</li><li>Szanse na ucieczkę z haka są zwiększone o <span class=\\"Highlight2\\">{1}%</span>.</li>","name":"Śliskie Mięso","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"Posiadasz niezaprzeczalną zdolność do wyczuwania zagrożenia. Otrzymujesz dźwiękowe powiadomienie, kiedy patrzysz w kierunku totemów w promieniu <span class=\\"Highlight1\\">45°</span> i zasięgu <span class=\\"Highlight2\\">{0} m</span>. Drobna Gra odnawia się po <span class=\\"Highlight3\\">{1} s</span>, licząc od każdorazowej aktywacji. Za każdy zwykły i przeklęty totem oczyszczony przez dowolnego gracza otrzymujesz żeton. Zasięg wykrywania Drobnej Gry zostaje zmniejszony o <span class=\\"Highlight4\\">5°</span> na żeton.","name":"Drobna Gra","flavor":"„Nie”. – Zaginione taśmy: Andy","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"Nienaturalny dreszcz ostrzega cię przed nadchodzącym zagrożeniem. Otrzymujesz ostrzeżenie za każdym razem, gdy zabójca patrzy w twoim kierunku i znajduje się w zasięgu <span class=\\"Highlight1\\">{0} m</span> od ciebie. Kiedy Dreszcz jest aktywny, szanse na pojawienie się testów umiejętności są zwiększone o <span class=\\"Highlight2\\">{1}%</span>, a paski sukcesu testów umiejętności – zmniejszone o <span class=\\"Highlight3\\">{2}%</span>. Kiedy Dreszcz jest aktywny, twoja szybkość naprawiania, sabotowania, leczenia, zdejmowania z haka, przeskakiwania, oczyszczania, otwierania bram wyjściowych i przeszukiwania jest zwiększona o <span class=\\"Highlight4\\">{3}%</span>.","name":"Dreszcz","flavor":"„Skup się. Usłyszysz głos, który nie używa słów”. – Zaginione taśmy: Sassy","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"Dajesz z siebie wszystko, kiedy jesteś pod wpływem ogromnego stresu. Gdy odniesiesz ranę, twoje paski sukcesu testów umiejętności są zwiększone o <span class=\\"Highlight1\\">{0}%</span>. Efekt ma zastosowanie do naprawiania i leczenia.","name":"To Się Nie Dzieje","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"Pomaganie innym zwiększa twoje morale.<br><br>Gdy ratujesz ocalałego z haka, otrzymujesz o <span class=\\"Highlight1\\">{0}%</span> zwiększoną prędkość leczenia innych na <span class=\\"Highlight3\\">{1}s</span>.","name":"Damy Radę","flavor":"„Jestem przekonany, że możemy uciec w jednym kawałku, jeżeli będziemy sobie nawzajem pomagać”.","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"Wyzwala potencjał odczytywania aury. Widzisz aury sojuszników w zasięgu <span class=\\"Highlight1\\">{0} m</span>.<br>","name":"Więź","flavor":"„Musimy działać jako drużyna, musicie przeżyć, żebym ja mógł przeżyć!” – Dwight","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"Za każdego innego Ocalałego pracującego przy generatorze w zasięgu <span class=\\"Highlight2\\">{1} m</span> otrzymujesz premię <span class=\\"Highlight1\\">{0}%</span> do prędkości naprawy. Ta sama premia przyznawana jest wszystkim Ocalałym w zasięgu.<br>Zyskujesz <span class=\\"Highlight3\\">{2}%</span> więcej Punktów Krwi za akcje kooperatywne.<br>Ocalali mogą być pod wpływem tylko jednego efektu „Wykaż się” jednocześnie.<br>","name":"Wykaż się","flavor":"„Pokaż mi, na co cię stać!” – Dwight","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"Jesteś w stanie zmobilizować drużynę do skuteczniejszej współpracy. Ocalali znajdujący się w zasięgu <span class=\\"Highlight2\\">{1} m</span> od ciebie leczą, sabotują, ścigają z haków, oczyszczają, odblokowują skrzynie i otwierają bramy wyjściowe o <span class=\\"Highlight1\\">{0}%</span> szybciej. Ocalali mogą mieć aktywny tylko jeden efekt Lider jednocześnie.<br>Po wyjściu z zasięgu efekt utrzymuje się przez <span class=\\"Highlight3\\">{2}s</span>.","name":"Lider","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Gdy szybko przeskakujesz przez przeszkody lub chowasz się w szafkach, nie hałasujesz tak mocno jak inni.<br><br>Zasięg powiadomień zabójcy o akcjach związanych z przeskakiwaniem przez przeszkody lub chowaniem się w szafkach jest zmniejszony o <span class=\\"Highlight1\\">{0}%</span>.<br><br>Ten efekt może być wywołany raz na każde <span class=\\"Highlight2\\">{1} s</span>.","name":"Szybko i Cicho","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"Kiedy zaczynasz biec, przechodzisz w sprint ze <span class=\\"Highlight1\\">{0}%</span> normalnej prędkości na maksymalnie <span class=\\"Highlight2\\">{1} sekundy</span>.<br>Powoduje <i>Wyczerpanie</i> na <span class=\\"Highlight4\\">{2} sekund</span>.<br><i>Sprint</i> nie może zostać użyty podczas trwania <i>Wyczerpania</i>.<br>Czas efektu <i>Wyczerpania</i> nie zmniejsza się podczas biegu.","name":"Sprint","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Nabierasz nowych sił, kiedy jesteś blisko ucieczki. W momencie aktywacji bram <span class=\\"Highlight1\\">natychmiast leczysz się ze <b>stanu krytycznego</b> lub <b>stanu agonii</b> </span> i przez <span class=\\"Highlight3\\">{1} sekund</span> możesz biec ze <span class=\\"Highlight2\\">{0}%</span> normalnej prędkości.<br><i>Adrenalina</i> nie uaktywni się, jeśli Ocalały jest unieruchomiony i zacznie działać dopiero wtedy, gdy zostanie uwolniony.<br><i>Adrenalina</i> <b>obudzi Ocalałego</b>, jeżeli jest uśpiony w momencie aktywacji.<br><i>Adrenalina</i> ignoruje <i>Wyczerpanie</i>.<br>Wywołuje <i>Wyczerpanie</i> na <span class=\\"Highlight4\\">{2} sekund</span>.<br>Czas trwania efektu <i>Wyczerpania</i> nie zmniejsza się podczas biegania.","name":"Adrenalina","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"Odblokowuje możliwość dostrzegania aury. Dostrzegasz aury Ocalałych z twojej drużyny w zasięgu <span class=\\"Highlight1\\">{0} m</span>, gdy są ranni lub w stanie agonii. Empatia nie ujawnia aur sojuszników, gdy są w bezpośrednim kontakcie z Zabójcą.","name":"Empatia","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"Zmieniasz znalezione na terenie obozowiska rośliny w mikstury spowalniające krwawienie. <b>Prędkość leczenia</b> i <b>wydajność przedmiotu leczącego</b> wzrastają o <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Wiedza Botaniczna","flavor":"„Podstawowa wiedza o roślinach może pewnego dnia uratować ci życie”.","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"Odblokowuje możliwość samodzielnego leczenia się bez apteczki z prędkością <span class=\\"Highlight1\\">{0}%</span> normalnego leczenia. Zwiększa efektywność leczenia przedmiotem do tego przeznaczonym o <span class=\\"Highlight3\\">{1}%</span>.","name":"Samoopatrywanie","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"Potrafisz się skoncentrować i wejść w stan medytacji, ignorując część odczuwanego bólu. Jęki na skutek obrażeń ograniczone są o <span class=\\"Highlight1\\">{0}%</span>.","name":"Żelazna Wola","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"Zwierzęta zdają ci się ufać, często pozostając spokojnymi w twojej obecności. Zmniejsza szanse na zaalarmowanie leśnych zwierząt o <span class=\\"Highlight1\\">{0}%</span>.<br>Spokojny Duch pozwala ci powstrzymywać krzyki.","name":"Spokojny Duch","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"Wyzwala potencjał odczytywania aury.<br><li>Widzisz aury haków w promieniu <span class=\\"Highlight1\\">56 metrów</span> od miejsca podniesienia, gdy ocalały jest niesiony.</li><br>Odblokowuje umiejętność sabotowania haków bez skrzynki na narzędzia.<br><li>Sabotowanie haka bez skrzynki na narzędzia zajmuje <span class=\\"Highlight2\\">2,5 s</span>.</li><li>Sabotaż odnawia się przez <span class=\\"Highlight3\\">{0} s</span>.</li>","name":"Sabotażysta","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"Twoja zręczność jest niezrównana.<br><br>Efekty oszołomienia po wykonaniu skoku są zmniejszone o <span class=\\"Highlight1\\">{0}%</span>, a głośność jęków po upadku cicha o <span class=\\"Highlight1\\">100%</span>. Zaczynasz biec z prędkością <span class=\\"Highlight2\\">{1}%</span> normalnego biegu przez maksymalnie <span class=\\"Highlight3\\">{2} s</span>.<br><br>Wywołuje efekt Wyczerpany na <span class=\\"Highlight4\\">{3} s</span>.<br><br><i>Podczas trwania efektu <b>Wyczerpany</b> nie można korzystać z Miękkiego Lądowania.<br><br>Efekt Wyczerpany nie znika podczas biegania.<br>","name":"Miękkie Lądowanie","flavor":"„Skakałam z wyższych miejsc”. – Nea","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"Lata ucieczki przed glinami nauczyły cię jednej lub dwóch rzeczy o ostrożności. Twoja prędkość skradania się jest zwiększona o <span class=\\"Highlight1\\">{0}%.</span><br>","name":"Skrytość","flavor":"„Farba jest wciąż świeża, ale mnie już tu dawno nie ma”. – Nea","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"Długie noce spędzone poza domem nauczyły cię efektywnego wykorzystywania zasobów. Zmniejsz szybkość zużywania przedmiotów przez ciebie i twoich sojuszników w promieniu <span class=\\"Highlight2\\">{1} m</span> o <span class=\\"Highlight1\\">{0}%</span>. Po wyjściu z zasięgu efekt utrzymuje się przez <span class=\\"Highlight4\\">{2} s</span>.<br>","name":"Wiedza Uliczna","flavor":"„Źle to robisz! Pokażę ci, jak się to robi”. – Nea","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Odblokowuje możliwość odczytywania aury.<br>Jeśli jesteś ostatnim ocalałym w rozgrywce, możesz zobaczyć aurę włazu z odległości <span class=\\"Highlight1\\">{0}</span> m.","name":"Porzucony","flavor":"„Nie będę się z tym pieprzył, zrobię to sam!” – Bill","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"Otrzymujesz zastrzyk niespodziewanej energii, gdy zdejmujesz sojusznika z haka.<br>Ocalali zdjęci z haka otrzymują efekt <b>Wytrzymałość</b> na <span class=\\"Highlight1\\">{0} s</span>.<br>","name":"Życie na kredyt","flavor":"„Piecze pewnie jak cholera, ale cię nie zabije. Wstawaj i na nich, żołnierzu! Ruchy!” – Bill Overbeck","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"Dawne bitwy nauczyły cię paru rzeczy o przetrwaniu. <br>Odblokowuje możliwość samodzielnego wyleczenia się ze <b>stanu agonii</b>, lecz możesz tego dokonać <b>tylko raz na mecz</b>. Zwiększa tempo regeneracji o <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Niezłomość","flavor":"„Jestem całkowicie ROZPIEPRZONY, jasna cholera!” – Bill","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"Twoi przyjaciele zasługują na najlepszą ochronę.<br>Gdy leczysz innego ocalałego w stanie agonii, prędkość twojego działania jest zwiększona o <span class=\\"Highlight1\\">100%.</span><br>Otrzymaj żeton za wykonanie dowolnej z następujących czynności:<li>Wykonaj bezpieczne zdjęcie z haka</li><li>Przyjmij uderzenie, aby bronić ocalałego</li><li>Uratuj ocalałego poprzez ogłuszenie zabójcy paletą</li><li>Uratuj ocalałego poprzez oślepienie zabójcy latarką</li>Otrzymaj za każdy żeton <span class=\\"Highlight2\\">25%</span> łączącej się premii Punktów Krwi do <span class=\\"Highlight3\\">{1}%</span>. Dodatkowe punkty są przyznawane po zakończeniu rozgrywki.","name":"Będziemy Żyć Wiecznie","flavor":"„W porządku, niech tak będzie! Mam to w dupie, stary”. – David King","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"Umiejętność aktywowana.<br>Możesz wytrzymać niezłe lanie. Gdy odniesiesz ranę, sięgnij do swoich zapasów adrenaliny i popędź do przodu, aby uniknąć obrażeń .<br><li>Wciśnij przycisk <i>Umiejętności Aktywnej</i>, aby popędzić do przodu.</li><li>Podczas pędu unikasz obrażeń.</li><li>Wywołuje <i>Wyczerpanie</i> na <span class=\\"Highlight4\\">{0} s</span>.<br>Czas trwania efektu <i>Wyczerpania</i> nie zmniejsza się podczas biegania.</li>","name":"Twarda Sztuka","flavor":"„Szliśmy sobie pewnej nocy przez korytarz, aż tu nagle przeleciała obok mnie butelka piwa, a potem następna i następna. Pomyślałem sobie: Będzie niezła bitka, Panowie, zapraszam! Kurz latał we wszystkie strony, przysięgam!” – David King","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"Przez cały czas trwania próby znajdujesz się pod wpływem efektu <span class=\\"Highlight1\\">okaleczenia</span>.<br>Twoja gęsta krew krzepnie niemal natychmiastowo. <li>Nie zostawiasz za sobą śladów krwi.</li><li>Wywołane przez obrażenia jęki bólu są w każdej chwili redukowane o <span class=\\"Highlight2\\">{0}%</span>.</li><li>Zapewnia możliwość pełnego wyleczenia się ze stanu agonii.</li>","name":"Bez Biadolenia","flavor":"„Nie wytrzymałem. Przywaliłem mu. No i mnie wyrzucili… Poszedłem potem do baru, wychyliłem parę kufli i zostawiłem to za sobą. I tak mi się to już sprzykrzyło, rozumiesz? Mam to w dupie”. – David King","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"Im więcej twoich przyjaciół wpada w ręce zabójcy, tym większe stają się twoje szanse na przetrwanie. <b>Zdolność odczytywania aury</b> przez zabójcę ulega zakłóceniu.<br>Za każdym razem, kiedy inny ocalały zostaje zabity lub poświęcony, dostajesz żeton. Każdy żeton zapobiega odczytaniu twojej aury przez zabójcę, gdy znajdujecie się w odległości maksymalnie <span class=\\"Highlight1\\">{0} m</span> od siebie za każdego <b>zabitego</b> lub <b>poświęconego</b> ocalałego.<br><li><i>Zwiększa twoje szanse na zostanie obsesją.</i></li><li><i>Zabójca może mieć <b>obsesję</b> wyłącznie na punkcie jednego ocalałego naraz.</i></li>","name":"Ostatnia Ocalała","flavor":"„To był boogeyman”. – Laurie Strode","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"Łączy cię z zabójcą nadprzyrodzona więź.<br><br>Gdy zabójca zaczyna widzieć twoją aurę, jego aura zostaje ujawniona tobie i otrzymujesz bonus <span class=\\"Highlight1\\">{0}%</span> do prędkości leczenia, naprawiania i oczyszczania.<br>Jeżeli jesteś obsesją, twoja aura jest ujawniana zabójcy na <span class=\\"Highlight2\\">3 sekundy</span> co <span class=\\"Highlight3\\">30 sekund</span>.<br>Zwiększa twoje szanse na zostanie obsesją.<br>","name":"Obiekt obsesji","flavor":"„On mnie obserwował!” – Laurie Strode","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"Dźgasz napastnika w próbie ucieczki.<br>Gdy ktoś zdejmie cię z haka lub gdy zejdziesz z niego samodzielnie, <i>Ostateczny Cios</i> stanie się aktywny na <span class=\\"Highlight1\\">{0} s</span>.<br>Gdy umiejętność jest aktywna i złapie cię zabójca, wykonaj test umiejętności, aby automatycznie mu się wyrwać i ogłuszyć go na <span class=\\"Highlight1\\">5 sekund</span>.<br><li>Udany lub nieudany test umiejętności wyłącza <i>Ostateczny Cios</i>.</li><li>Skuteczne ogłuszenie zabójcy zmieni cię w obsesję.</li><br>Następujące działania wyłączają <i>Ostateczny Cios</i>:<li>Naprawa generatora</li><li>Leczenie siebie lub innych</li><li>Oczyszczanie totemu</li><li>Sabotowanie haka</li><li>Zdejmowanie ocalałych z haka</li><br><li><i>Zwiększa szansę na zostanie obsesją.</i></li><li><i>Zabójca może mieć <b>obsesję</b> wyłącznie na punkcie jednego ocalałego równocześnie.</i></li>","name":"Ostateczny cios","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"Zwiększa możliwości dostrzegania aury przez ciebie i członków twojego zespołu.<br><li>Zwiększa zasięg umiejętności bazujących na odczytywaniu aur o <span class=\\"Highlight1\\">{0} m</span>.</li><li>Ocalali mogą otrzymać tylko jeden efekt <i>Otwarte Karty</i> równocześnie.</li>","name":"Otwarte Karty","flavor":"„Czujność jest tym, co trzymało mnie przy życiu przez te wszystkie lata. I oczywiście mój świetny wygląd”. – Ace","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"Wszystko będzie dobrze, czujesz to. Twoja pewność siebie wzmacnia nadzieję osób znajdujących się w otoczeniu. Umiejętność zapewnia premię w postaci <span class=\\"Highlight1\\">{0}%</span> dodatkowego szczęścia dla każdego Ocalałego pozostającego przy życiu.<br>","name":"Podnieść stawkę","flavor":"„Cóż mogę powiedzieć? Po prostu jestem szczęściarzem… Możliwe, że moje szczęście przejdzie na ciebie”. – Ace","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"Fortuna zwykle ci sprzyja.<br>Kiedy przeszukujesz skrzynię, masz <span class=\\"Highlight1\\">{0}%</span> szans na zdobycie <span class=\\"Highlight2\\">bardzo rzadkiego</span> (lub czestszego) dodatku dołączonego do przedmiotu.<br>Masz również <span class=\\"Highlight3\\">{1}%</span> szans na wydobycie <span class=\\"Highlight4\\">niezwykłego</span> (lub częstszego) dodatku dołączonego do przedmiotu.<br>Po ucieczce zachowujesz wszystkie dodatki do przedmiotu.","name":"As w rękawie","flavor":"„Nie wszystko złoto, co się świeci. Jednak złoto nie jest tu nic warte, więc to może się przydać”. – Ace","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"Jesteś mistrzem w obsługiwaniu wszelkiego rodzaju maszyn.<br>Zasięg słyszalności dźwięków wydawanych przy naprawianiu generatora jest zmniejszony o <span class=\\"Highlight2\\">{0} m</span>. Przy nieudanym teście umiejętności istnieje <span class=\\"Highlight1\\">{1}%</span> szans na to, że generator nie wybuchnie.","name":"Technik","flavor":"“Zrobię to po cichu”. -Feng Min","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"Po wykonaniu przeskoku <b>w biegu</b> przyspieszasz do <span class=\\"Highlight1\\">{0}%</span> normalnej prędkości na maksymalnie <span class=\\"Highlight2\\">{1} s</span>. <br>Wywołuje <i>Wyczerpanie</i> na <span class=\\"Highlight4\\">{2} s</span>.<br>Umiejętność <i>Gibkość</i> nie może zostać użyta, gdy jesteś pod wpływem <i>Wyczerpania</i>.<br>Czas trwania efektu <i>Wyczerpania</i> nie skraca się podczas biegania.<br>","name":"Gibkość","flavor":"„Ty durny?” – Feng Min","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Twoje wyostrzone zmysły są w stanie podwyższonej gotowości.<br>Gdy Zabójca wykonuje akcję niszczenia, widzisz go przez <span class=\\"Highlight1\\">{0} s</span>.<br>","name":"Czujność","flavor":"„Widzę więcej”. – Feng Min","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"Wyzwala potencjał twojego odczytywania aury. Gdy zostaną uruchomione wszystkie wymagane generatory, zobaczysz bramy wyjściowe w zasięgu <span class=\\"Highlight1\\">{0} m</span>. Gdy przystąpisz do otwierania bramy, inni ocalali w odległości do <span class=\\"Highlight2\\">{1} m</span> zobaczą twoją aurę.<br>Gdy umiejętność <i>Pobudka!</i> jest aktywna, otwierasz bramy wyjściowe o <span class=\\"Highlight3\\">{2}%</span> szybciej.","name":"Pobudka!","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"Masz nosa do znajdowania leków. Odblokowywanie skrzyń jest o <span class=\\"Highlight1\\">{0}%</span> szybsze, a związane z tym odgłosy rozchodzą się na odległość mniejszą o <span class=\\"Highlight2\\">{1} m.</span><br><i>Farmacja</i> gwarantuje znalezienie apteczki w <b>pierwszej</b> odblokowanej skrzyni.<br>","name":"Farmacja","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"Dbasz o przyjaciół nawet w najniebezpieczniejszych sytuacjach. Ty i znajdujący się w promieniu <span class=\\"Highlight1\\">{0} m</span> sojusznicy wychodzicie z efektów <b>Wyczerpany, Krwotok, Skrępowanie</b> i <b>Oślepienie</b> o <span class=\\"Highlight2\\">{1}%</span> szybciej. Poza zasięgiem efekt Czuwania utrzymuje się przez <span class=\\"Highlight4\\">{2} s.</span><br>","name":"Czuwanie","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"Nie ma nic, co mogłoby cię powstrzymać. W beznadziejnych sytuacjach twoja nadludzka wytrwałość sprawia, że czołgasz się <span class=\\"Highlight1\\">{0}%</span> szybciej. Oprócz tego możesz się jednocześnie regenerować.<br>","name":"Wytrwałość","flavor":" „Co to jest, do diabła? Nie ma co, pokażę temu czemuś gdzie raki zimują!” – Detektyw David Tapp","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"Wyzwala potencjał odczytywania aury. W momencie ukończenia naprawy generatora, aury generatorów, skrzyń i totemów znajdujących się w zasięgu <span class=\\"Highlight1\\">{0} m</span> od ciebie stają się widoczne przez <span class=\\"Highlight2\\">{1} s</span>.<br>Jeżeli posiadasz mapę pozwalającą śledzić cele, generatory, skrzynie i totemy ujawnione dzięki <i>Przeczuciu Detektywa</i> są dodawane do mapy.","name":"Przeczucie Detektywa","flavor":"„Czy możesz nam powiedzieć, gdzie byłeś zeszłej nocy?” – Detektyw David Tapp","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"Przebywanie w pobliżu Zabójcy napełnia cię determinacją. Za każde <span class=\\"Highlight1\\">{0} s</span> spędzone w zasięgu terroru Zabójcy, ale nie podczas pościgu, otrzymujesz Żeton, aż do maksymalnie <span class=\\"Highlight2\\">{1} Żetonów</span>.<br>Gdy <i>Nadzór</i> ma przynajmniej <b>1 Żeton</b>, dobre testy umiejętności są traktowane jako świetne testy umiejętności, zabierają <b>1 Żeton</b> i dają dodatkowy <span class=\\"Highlight3\\">1%</span> do postępu naprawy generatora.","name":"Nadzór","flavor":"„Miałem cię. Miałem cię, gdy uklęknąłeś na kolanach. Byłeś przerażony, bo cię mieliśmy. Zamkniemy tę sprawę!” – Detektyw David Tapp","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"Gdy wykonujesz akcję szybkiego przeskoku lub wyskakujesz w pośpiechu z szafki, przez <span class=\\"Highlight1\\">{0} s</span> nie zostawiasz za sobą żadnych śladów.<br><i>Zatańcz Ze Mną</i> odnawia się po upływie <span class=\\"Highlight4\\">{1} s</span>. <br>","name":"Zatańcz Ze Mną","flavor":"„Na horyzoncie widać już kolejne show, <br>Zatańcz ze mną, kochanie, będę tylko twą, <br>Popatrz na me trzewiki, wybijają takt, nie stój jak słup soli, dogoń dźwięk raz-dwa, <br>Wokół nas tylko burza, ale tańczmy, kochanie, tańczmy tak długo, aż słońce nas zastanie”.<br>– Kate Denson, „Zatańcz Ze Mną”","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"Wyzwala potencjał twojego odczytywania aury. Dostrzegasz aury palet, ścian i miejsc przeskoków znajdujących się w zasięgu <span class=\\"Highlight1\\">{0} m</span> od ciebie. <br>Po przeskoczeniu przez obiekt lub zrzuceniu palety podczas pościgu <i>Ostatnia Szansa</i> jest nieaktywna przez <span class=\\"Highlight1\\">{1} s</span>. <br>","name":"Ostatnia Szansa","flavor":"„To ostatnia szansa, więc wstawaj, kolego! Wyrób swe nazwisko, zrób w swym życiu coś miłego, <br>Wyceluj w swe marzenia i traf szczęście w samo oko, nie ma nic gorszego niż być za pan brat ze zwłoką, <br>Doceń wiarę i rodzinę, nie narzekaj godzinami, czerp cudowności życia, jakby były czereśniami, <br>Zagraj z życiem w pasjansa, bowiem życie to twa ostatnia szansa”. – Kate Denson, „Ostatnia Szansa”","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"W twoim sercu iskrzy wola walki, dlatego zrobisz wszystko, aby wyrwać się z objęć wroga. Efekty szamotania zwiększają się o <span class=\\"Highlight1\\">{0} %</span>. <br>Zakłócasz zdolność Zabójcy do dostrzeżenia aur haków znajdujących się w zasięgu <span class=\\"Highlight1\\">{1} m</span> od niego.<br>","name":"Do Utraty Tchu","flavor":"„Szarp się dziecino, całuj usta wolności, <br>Bo nikt nie może więzić w swym sercu miłości”.<br>- Kate Denson, „Do Utraty Tchu”","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"Umiejętność aktywowana.<br><i>Dywersja</i> staje się aktywna po <span class=\\"Highlight1\\">{0} s</span> przebywania poza pościgiem w zasięgu terroru zabójcy.<br><li>Gdy <i>Dywersja</i> jest aktywna: kucając w bezruchu, naciśnij przycisk <i>aktywnej umiejętności</i>, aby rzucić kamyk, który wywoła głośne powiadomienie dźwiękowe dla zabójcy w odległości <span class=\\"Highlight2\\">20 m</span>.</li><br><li>Licznik czasu umiejętności ulega wyzerowaniu po jej użyciu.</li><br>Rozproszenie obejmuje:<br><li>Głośne powiadomienie dźwiękowe</li><li>Czerwone zarysowania</li>","name":"Dywersja","flavor":"„W życiu jest droga prawości i nieprawości. Jeśli zbłądzisz na tę drugą, to nie sposób przewidzieć, kim się potem staniesz”. – Adam Francis","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"<i>Wybawienie</i> aktywuje się po uratowaniu innego ocalałego z haka.<br>Gdy umiejętność jest aktywna, masz <span class=\\"Highlight1\\">100%</span> szans na sukces przy próbie samodzielnej ucieczki z haka.<br>Skuteczne <i>wybawienie</i> od haka nałoży efekt <span class=\\"Highlight2\\">okaleczenia</span> utrzymujący się przez <span class=\\"Highlight3\\">{0} sek.</span>.","name":"Wybawienie","flavor":"„Zostałem wychowany przez surowego człowieka, który nauczył mnie, jak radzić sobie w nawet najgorszych okolicznościach”. – Adam Francis","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"Rozpoczynasz rozgrywkę z karą <span class=\\"Highlight1\\">-{1}%</span> do postępu za testy umiejętności wykonywane podczas leczenia ocalałych.<br>Za każdy udany test umiejętności podczas leczenia ocalałych otrzymujesz żeton, aż do maksymalnie <span class=\\"Highlight2\\">{0} żetonów</span>.<br>Każdy <b>żeton</b> zapewnia bonus <span class=\\"Highlight1\\">+{2}%</span> do postępu leczenia za udane testy umiejętności.<br>Podczas korzystania z <i>Samouka</i> nie można wykonać świetnych testów umiejętności.<li>Umiejętność nie jest aktywna, jeśli używasz do leczenia apteczki.</li>","name":"Samouk","flavor":"„Nie ma rzeczy niemożliwych, o ile włożymy w naszą pracę wysiłek.” - Adam Francis","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"Za każdym razem, kiedy uciekniesz z haka lub ktoś cię z niego uratuje, hak się łamie i aura Zabójcy jest dla ciebie widoczna przez <span class=\\"Highlight1\\">{0} s</span>. Hak zniszczony za pomocą tej umiejętności odnawia się po <span class=\\"Highlight2\\">180 sekundach</span>.<br>","name":"Przełamanie","flavor":"„Ucieczka z brzucha bestii”<br>Oto szkic/obraz na kawałku drewna, który znalazłem kiedyś przy drodze. Czułem, że ma historię do opowiedzenia. I nie zmarnował swojej szansy”. – Jeff, atrament i olej na desce, 12x16","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"Wyzwala potencjał twojego odczytywania aury.<br><br>Dostrzegasz aurę każdego Ocalałego:<br><li>którego uratowałeś z haka lub który uratował ciebie z haka;</li><li>na którym wykonałeś akcję leczenia lub który wykonał akcję leczenia na tobie.</li><br>Ci Ocalali również widzą twoją aurę.<br><br>Efekt może obejmować następującą liczbę Ocalałych: <span class=\\"Highlight1\\">{0}</span>. Jeśli Zabójca złapie cię na hak, wszystkie efekty <i>Drugiej pomocy</i> zostaną usunięte.<br>","name":"Druga pomoc","flavor":"„Miłosierdzie rozdzierające burzę”<br>Praca olejna wykonana na cześć moich najlepszych kumpli, którzy są jednoczesnie najlepszymi muzykami jakich znam. Ich pierwsza płyta nadal jest moją ulubioną. Pomogła mi przejść przez mroczny okres w życiu. – Jeff, olej na płótnie, 16x16","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"Zaczynasz grę z <span class=\\"Highlight1\\">{0} żetonami</span>.<br><br>Gdy twoja aura ma zostać ujawniona zabójcy, <i>Zakłócenie</i> aktywuje się i żeton zostaje wykorzystany.<br><br>Przez następne <span class=\\"Highlight1\\">{1} s</span> (gdy umiejętność pozostaje aktywna) nie zostawiasz czerwonych zarysowań, a twoja aura nie jest widoczna dla zabójcy.<br><li><i>Zakłócenie</i> nie może być aktywowane, gdy jesteś w stanie agonii lub gdy znajdujesz się w pułapce.</li><br>","name":"Zakłócenie","flavor":"„Śmierć oszukana przez płaszcz z sokolich piór”<br>Szkic powstały podczas kilku bezsennych zimowych nocy. Zgłębianie mitologii nordyckiej: odwaga może ukryć nasze wady, nawet gdy jesteśmy najbardziej bezbronni. – Jeff, ołówek na barwionym papierze, 12 x 12","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"Dzielenie się bolesnymi doświadczeniami ma uzdrawiającą moc.<br>Gdy jesteś ranny, leczenie ocalałego bez użycia apteczki leczy również ciebie, przy czym współczynnik własnego leczenia wynosi <span class=\\"Highlight1\\">{0}%</span> leczenia innego ocalałego.","name":"Solidarność","flavor":"„Pojawianie się w trudnych chwilach, wysłuchiwanie problemów innych i wspieranie potrzebujących – w ten sposób nabierasz siły i rozwijasz się”. – Jane Romero","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"Osiąganie celów zwiększa twoją pewność siebie.<br>Po ukończeniu naprawy generatora nie pozostawiasz czerwonych zarysowań przez <span class=\\"Highlight1\\"> {0} s</span>.<br>","name":"Opanowanie","flavor":"„Okej, spokojnie. Nie myśl za dużo i po prostu idź przed siebie. Dasz radę”. – Jane Romero","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"Kiedy się na coś nastawisz, niech lepiej nikt nie staje ci na drodze.<br><br><i>Determinacja<i> uruchamia się po <span class=\\"Highlight1\\">{0} s</span> w szafce.<br>Gdy <i>Determinacja<i> jest aktywna, wykonaj szybką akcję, by wyjść z szafki i skorzystać z <i>Determinacji</i>. Jeśli zabójca znajduje się w zasięgu <i>Determinacji</i>, zostaje ogłuszony na <span class=\\"Highlight1\\">{1} s</span>.<br>Wywołuje efekt <span class=\\"Highlight3\\">Wyczerpania</span> na <span class=\\"Highlight1\\">{2} s</span>.<br>Determinacji nie można używać podczas Wyczerpania.<br><span class=\\"Highlight3\\">Wyczerpanie</span> nie mija podczas biegu. <br><i>Determinacji</i> nie można używać, gdy towarzyszą ci kruki.<br>","name":"Determinacja","flavor":"„Ludzi zapamiętuje się po trudnościach, jakie pokonali. Możesz uciec i zapomnieć, na co cię stać, albo zmierzyć się ze swoim strachem i przypomnieć światu, kim jesteś”. – Jane Romero","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"Masz niezwykłą zdolność unikania nieuniknionego.<br><br>W stanie agonii <span class=\\"Highlight1\\">{0}%</span> postępu leczenia zmienia się w postęp szamotania (maksymalnie do <span class=\\"Highlight2\\">{1}%</span> całkowitego postępu szamotania) w momencie podniesienia przez zabójcę.<br>","name":"Mijanka","flavor":"„Spotkamy się na mijance”. – Ash Williams","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"Odblokowuje pełen potencjał odczytywania aury. Postęp leczenia Ocalałych w stanie agonalnym można określić po intensywności ich aury z odległości maksymalnie <span class=\\"Highlight1\\">{0} m</span>.<br><br>Gdy leczysz ocalałego ze stanu agonii do stanu krytycznego, widzicie aurę zabójcy przez <span class=\\"Highlight2\\">{1} s</span>.<br>","name":"Zapnij Pasy","flavor":"„Pogromcy duchów nikogo nie zostawiają”. – Ash Williams","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"Zło zawsze cię znajdzie.<br><br><i>Ludzki Zapał</i> aktywuje się po wykonaniu <span class=\\"Highlight1\\">{0} </span> uderzeń ochronnych.<br><br>Kolejne obrażenia, które wywołałyby u ciebie <b>stan agonii</b> po <b>stanie krytycznym</b>, są ignorowane.<br><br>Kolejne pełne wyleczenie spowoduje pokazanie zabójcy twojej aury, jeśli znajdziesz się od niego dalej niż <span class=\\"Highlight2\\">{1} m</span>.<br><br><i>Ludzki Zapał</i> wyłączy się przy kolejnym przejściu w stan agonii.<br><i><li>Zwiększa szansę, że staniesz się obsesją zabójcy.</li><li>Zabójca może mieć <b>obsesję</b> na punkcie tylko jednego ocalałego naraz.</li></i><br>","name":"Ludzki zapał","flavor":"„Śmierć ma na moich plecach celownik większy niż stadion baseballowy”. – Ash Williams","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"Szukasz sprawiedliwości i chcesz odkryć prawdę bez względu na wszelkie przeszkody.<br><br>Aura naprawianego przez ciebie generatora staje się widoczna dla każdego ocalałego w zasięgu <span class=\\"Highlight1\\">{0} m</span>.<br><br>Jeśli zabójca pokona ocalałego w czasie, gdy naprawiasz generator, na <span class=\\"Highlight2\\">{1} s</span> zobaczysz aury wszystkich pozostałych ocalałych.<br>","name":"W kupie siła","flavor":"„Spalmy to laboratorium”. – Nancy Wheeler","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"Gdy myślisz o celu, nie ma już dla ciebie odwrotu. Nie będziesz prosić o pozwolenie – najwyżej później przeprosisz. <br><br>Cały czas widzisz swoje czerwone zarysowania.<br><br>Idziesz o <span class=\\"Highlight1\\">{0}%</span> szybciej.<br>","name":"Fiksacja","flavor":"„Chcę skończyć, co zaczęłam. Chcę to zabić”. – Nancy Wheeler","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"W osamotnieniu i niepewności zwracasz się ku sobie i własnym instynktom<br><br>. Za każdym razem, gdy dokonasz oczyszczenia totemu, aktywuje się <i>Wewnętrzna Siła</i> Jeśli jesteś już pod wpływem efektu <b>Okaleczony</b>, <i>Wewnętrzna Siła</i> nie aktywuje się.<br><br>Gdy <i>Wewnętrzna Siła</i> jest aktywna, ukrycie się w szafce na <span class=\\"Highlight1\\">{0} s</span> po zranieniu automatycznie cię uleczy.<br><br><i>Wewnętrzna Siła</i> dezaktywuje się, gdy tylko zadziała.<br>","name":"Wewnętrzna Siła","flavor":"„Przez cały ten czas tak się starałam udawać, że wszystko jest w porządku. Ale nie jest”. – Nancy Wheeler","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"Choć mówią, że jesteś skupiony na sobie, potrafisz zaryzykować wszystko, by pomóc potrzebującym.<br><br>Gdy zdejmujesz ocalałego z haka, nie zostawiasz czerwonego zarysowania ani krwawego śladu przez następne <span class=\\"Highlight1\\">{0} s</span>. Widzicie z zabójcą nawzajem swoje aury przez <span class=\\"Highlight2\\">{1} s</span>.<br>","name":"Niańka","flavor":"„Obiecałem, że będę was pilnował, gnojki, i zamierzam tego dotrzymać”. – Steve Harrington","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"Życie nauczyło cię, jak ważna jest przyjaźń. Ona daje ci siłę.<br><br>Gdy wisisz na haku podczas fazy walki, aktywuje się <i>Koleżeństwo</i>.<br><br>Jeśli inny ocalały znajduje się w promieniu <span class=\\"Highlight1\\">{0} m</span> od ciebie w czasie, gdy działa <i>Koleżeństwo</i>, twój licznik wisielca zatrzymuje się na <span class=\\"Highlight2\\">{1} s</span>.<br>","name":"Koleżeństwo","flavor":"„Jak już się tam dostaniesz, pamiętaj – udawaj, że masz to gdzieś. Właśnie tak, uczysz się, przyjacielu. Uczysz się”. – Steve Harrington","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"Gdy inny ocalały został przez ciebie uleczony o równowartość jednego stanu zdrowia, aktywuje się <i>Drugi Oddech</i>. Jeśli jesteś już pod wpływem efektu <span class=\\"Highlight1\\">okaleczenie</span>,<i>Drugi Oddech</i> się nie aktywuje.<br><br>Gdy <i>Drugi Oddech</i> jest aktywny, następnym razem, kiedy ktoś zdejmie cię z haka lub zejdziesz z niego samodzielnie, ulegniesz <span class=\\"Highlight1\\">okaleczeniu</span>. Po <span class=\\"Highlight2\\">{0} sek.</span> <i>Drugi Oddech</i> automatycznie całkowicie leczy cię ze stanu krytycznego.<br><br><i>Drugi Oddech</i> dezaktywuje się, gdy jesteś w pełni zdrowia lub gdy wejdziesz w stan agonii, zanim <i>Drugi Oddech</i> zadziała. <span class=\\"Highlight1\\">Okaleczenie</span> mija.<br>","name":"Drugi Oddech","flavor":"„Owszem, nie”. – Steve Harrington","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"Masz wiele zadrapań i siniaków, ale szczęście zawsze się do ciebie uśmiecha.<br><br><i>Łut Szczęścia</i> aktywuje się za każdym razem, gdy odniesiesz obrażenia. Kiedy <i>Łut Szczęścia</i> jest aktywny, nie zostawiasz za sobą plam krwi ani czerwonych zarysowań przez łącznie <span class=\\"Highlight1\\">{0} s</span>.<br><br><i>Łut Szczęścia</i> zostaje na stałe wyłączony do końca próby po wykorzystaniu całego czasu.<br>","name":"Łut Szczęścia","flavor":"„To zdecydowanie za mało, żeby mnie pokonać”. – Yui Kimura ","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"Walczysz o swoje, korzystając ze wszystkiego, co masz pod ręką, by zyskać przewagę.<br><br>Naciśnij <i>przycisk aktywnej umiejętności</i> i przytrzymaj go przez <span class=\\"Highlight1\\">{0} s</span>, stojąc obok przewróconej palety, aby z powrotem ją postawić.<br><br>Umiejętność <i>Po Trupach do Celu</i> odnawia się po upływie <span class=\\"Highlight2\\">{1} s</span>.<br>","name":"Po Trupach do Celu","flavor":"„Zaatakuję Cię wszystkim, co mam. Później zrobię to jeszcze raz”. – Yui Kimura ","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"Pracujesz na wyższych obrotach, gdy ktoś ma kłopoty, i inspirujesz innych do radzenia sobie z problemami.<br><br>W odległości <span class=\\"Highlight1\\">{0} m</span> od niesionego ocalałego otrzymujesz efekt <span class=\\"Highlight2\\">Pośpiech</span> i poruszasz się z prędkością zwiększoną o <span class=\\"Highlight3\\">{1}%</span>. Prędkość szamotania się niesionego ocalałego zostaje zwiększona o <span class=\\"Highlight4\\">{2}%</span>.<br>","name":"Ucieczka","flavor":"„Chodź, jakoś się z tego wygrzebiemy”. – Yui Kimura ","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"Wiesz już, że ciche podejście jest czasem najlepsze. <br><br>Gdy uciekniesz z haka lub ktoś cię z niego zdejmie, umiejętność <i>Nieoficjalnie</i> aktywuje się na <span class=\\"Highlight1\\">{0} s</span>.<br><br>Gdy umiejętność <i>Nieoficjalnie</i> jest aktywna, twoja aura nie będzie widoczna dla zabójcy, a jęki bólu wywołane obrażeniami zostaną ograniczone o <span class=\\"Highlight2\\">{1}%</span>.<br>","name":"Nieoficjalnie","flavor":"„Zaufaj mi, działam dokładnie i dyskretnie”. – Zarina Kassir","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"Z twoich obserwacji wynika, że ludzie zwracają uwagę na to, co wydaje najgłośniejszy dźwięk.<br><br>Gdy naprawiasz generator przez co najmniej <span class=\\"Highlight1\\">{0} s</span>, zostaje on podświetlony żółtą aurą widoczną tylko dla ciebie. Generator pozostaje podświetlony do jego pełnego naprawienia, zreperowania nowego generatora lub wejścia do szafki.<br><br>Wejście do szafki aktywuje wskaźnik hałasu z generatora widoczny dla zabójcy.<br><li>Umiejętność <i>Fałszywy Trop</i> można uruchomić tylko raz na <span class=\\"Highlight2\\">{1} s</span>.</li><br>","name":"Fałszywy trop","flavor":"„Wiadomości pomijają to, co jest trudne i skomplikowane — czyli prawdę”. – Zarina Kassir","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"Ryzykujesz życiem dla innych. <br><br>Umiejętność <i>Za Ludzi</i> jest aktywna wyłącznie przy pełnym zdrowiu.<br><br>Naciśnij <i>przycisk aktywnej umiejętności</i>, lecząc innego ocalałego bez apteczki, aby natychmiast zmienić ich stan z agonii na krytyczny lub z krytycznego na zdrowy.<br><br>Otrzymujesz stan krytyczny i efekt <b>Okaleczony</b> na <span class=\\"Highlight1\\">{0} s</span>.<br><br>Stajesz się obsesją.<br><br>Wyposażenie tej umiejętności <b>zmniejsza</b> prawdopodobieństwo zostania obsesją na początku próby.<br>","name":"Za Ludzi","flavor":"„Możemy napisać własną historię i zdecydować, jak ma się skończyć”. – Zarina Kassir","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"Przyszło ci się mierzyć z ogromnymi trudnościami, które cię wzmocniły.<br><br>Zyskaj efekt <b>Wytrzymałość</b> na <span class=\\"Highlight1\\">{0} s</span> po wyleczeniu lub wyjściu ze stanu agonii.<br>Gdy działa nałożona na ciebie klątwa, możesz w pełni wyjść ze stanu agonii. <br><br>Ten efekt można włączyć tylko raz na <span class=\\"Highlight2\\">30 sekund.</span>","name":"Strażnik duszy","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"To tak, jakby obudziła się jakaś ukryta część ciebie. Wydaje ci się, że możesz sięgnąć poza siebie, by otrzymać pomoc. <br><br>Gdy ty lub obsesja jesteście ranni, widzicie nawzajem swoje aury.<br><br>Po wyleczeniu obsesji lub otrzymaniu od niej leczenia zyskujecie <span class=\\"Highlight1\\">{1}%</span> efektu <b>Pośpiech</b>, dopóki nie znajdujecie się już w odległości <span class=\\"Highlight2\\">16 m</span> od siebie.<br><br>Zmniejsza szansę zostania obsesją.<br><br>Jeśli jesteś obsesją, umiejętność wyłącza się.","name":"Pakt krwi","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"Unikanie złowrogich mocy nie jest dla ciebie niczym nowym i potrafisz obrócić to na własną korzyść.<br><br><i>Stłumiony sojusz</i> aktywuje się po naprawianiu generatorów przez łącznie <span class=\\"Highlight1\\">{0} s.</span><br><br>Podczas naprawy generatora z aktywną umiejętnością naciśnij <i>przycisk aktywnej umiejętności</i>, aby wezwać Byt i zablokować generator na <span class=\\"Highlight2\\">{1} s.</span> Umiejętność wyłącza się.<br><br>Zablokowane generatory zostaną podświetlone białą aurą dla wszystkich ocalałych.","name":"Stłumiony sojusz ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"Mocno skupiasz się na znalezieniu drogi ucieczki.<br><br>Widzisz aurę generatora w promieniu <span class=\\"Highlight1\\">{0} m</span> od siebie.<br><br>Gdy generator zostanie ukończony, umiejętność <i>Wizjoner</i> jest niedostępna przez <span class=\\"Highlight2\\">{1} s</span>.","name":"Wizjoner","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"Nie zgadzasz się na porażkę, nawet w najgorszych chwilach.<br><br>Zwiększa szybkość leczenia i zdejmowania z haka o <span class=\\"Highlight1\\">{0}%</span> za każdego zranionego, zawieszonego na haku lub umierającego ocalałego.<br>","name":"Desperacki krok","flavor":"„Jeśli ktoś zburzy twoje ściany, następne wybuduj mocniejsze”. – Feliks Richter","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"Wiesz, jak najlepiej wykorzystać swoje narzędzia.<br><br>Raz na próbę w wyczerpanym przedmiocie odnowi się <span class=\\"Highlight1\\">{0}%</span> jego ładunków po upływie <span class=\\"Highlight2\\">{1} sek</span>.<br>","name":"Trwałość przede wszystkim","flavor":"„Architektura jest duszą cywilizacji”. – Feliks Richter","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"Dzięki swojej czujności dostrzegasz to, czego inni nie zauważają.<br><br>Rozpocznij próbę z <span class=\\"Highlight1\\">{0} żetonami</span>. Jeśli skrzynia została już otwarta, wykorzystaj żeton, aby poszukać w niej przedmiotu. Przeszukiwanie jest możliwe tylko raz na skrzynię.<br><br>Przeszukujesz skrzynie o <span class=\\"Highlight2\\">{1}%</span> szybciej.","name":"Ocena sytuacji","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"Twój śmiały styl życia wymaga czasem zastosowania zmyłki.<br><br>Interakcja z szafką podczas sprintu uruchamia głośne powiadomienie w twojej lokalizacji i sprawia, że zostawiasz czerwone zarysowania przez <span class=\\"Highlight1\\">{0} s</span>.<br><br>Nie wchodzisz do szafek podczas sprintu oraz podczas działania tej umiejętności.<br><br><i>Oszustwo</i> można uruchomić raz na <span class=\\"Highlight2\\">{1} s</span>.","name":"Oszustwo","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"Nigdy się nie poddajesz i teraz nie będzie inaczej.<br><br>Gdy niesie cię zabójca, osiągnięcie <span class=\\"Highlight1\\">{0}%</span> postępu szamotania aktywuje <i>Intensywną walkę</i>. Gdy <i>Intensywna walka</i> jest aktywna, możesz przewrócić pobliską paletę, aby ogłuszyć zabójcę.<br>","name":"Intensywna walka","flavor":"„Polegałam na ochronie innych i straciłam wszystko. Nigdy więcej”. – Élodie Rakoto","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"Czasami by zrobić krok naprzód, trzeba poświęcić innych.<br><br>Gdy inny ocalały zostaje zawieszony na haku, otrzymujesz żetony <span class=\\"Highlight1\\">({0}).</span>Zużywasz wszystkie żetony po świetnym teście umiejętności przy generatorze. Każdy zużyty żeton zwiększa o <span class=\\"Highlight2\\">{1}%</span> postęp naprawy generatora po świetnym teście umiejętności.<br>","name":"Szybka Ścieżka","flavor":"„Słabi zostaną poświęceni jako pierwsi. Tak działa natura, biznes. To prawda, której większość nie chce zauważać”. – Yun-Jin","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"Kiedy twój przeciwnik popełnia błąd, wykorzystujesz okazję.<br><br>Po ogłuszeniu zabójcy paletą rozpoczynasz sprint z prędkością <span class=\\"Highlight1\\">{0}%</span> normalnego biegu na maksymalnie <span class=\\"Highlight2\\">{1} s.</span><br>Wywołuje efekt <b>Wyczerpany</b> na <span class=\\"Highlight3\\">{2} s.</span><br>Umiejętności nie można użyć, gdy trwa efekt <b>Wyczerpany</b>.<br>","name":"Przebój","flavor":"„Miałam do czynienia z psychopatami w garniturach. Ty jesteś po prostu brzydszy i gorzej ubrany”. – Yun-Jin","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"Życie jest okrutne. Czasem lepiej uważać na siebie.<br><br>Gdy inny ocalały w promieniu <span class=\\"Highlight1\\">{0} m</span> od ciebie zostaje trafiony atakiem podstawowym lub specjalnym, aktywuje się <i>Instynkt Samozachowawczy</i>.<br>Twoje czerwone zarysowania, ślady krwi i jęki bólu zostają ukryte na <span class=\\"Highlight2\\">{1} s.</span><br>","name":"Instynkt Samozachowawczy","flavor":"„Nauczyłam się czegoś w branży: gdy machają siekierą, trzymaj głowę nisko”. – Yun-Jin","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"Wiesz, jak radzić sobie z silniejszym przeciwnikiem. Wszystko zaczyna się od jego wytropienia i pozbycia się jego wsparcia.<br><br>Oczyszczasz totemy o <b>20%</b> szybciej. Po oczyszczeniu widzisz aurę najdalszego totemu przez <span class=\\"Highlight1\\">{0} s</span> i otrzymujesz łączący się bonus <span class=\\"Highlight2\\">{1}%</span> do prędkości czyszczenia totemów do końca próby.<br><br><span class= \\"FlavorText\\">„Nie przeszkadza mi odrobina zabawy w detektywa”. – Jill Valentine</span>","name":"Przeciwdziałanie","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"Udało ci się wydostać z sytuacji bez wyjścia… I zrobisz to ponownie.<br><br>Otrzymujesz <span class=\\"Highlight1\\">{0}%</span> postępu leczenia natychmiast po zdjęciu lub zejściu z haka.<br><br><span class= \\"FlavorText\\">„Moja kolej, suko”. – Jill Valentine</span>","name":"Odrodzenie","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"Gdy bezpośrednie starcie nie wchodzi w grę, i tak znajdujesz okazje do kontrataku.<br><br><i>Mina</i> aktywuje się po ukończeniu łącznie <span class=\\"Highlight1\\">{0}%</span> postępu naprawy generatorów.<br>Po co najmniej <span class=\\"Highlight2\\">{1} s</span> naprawiania generatora naciśnij <i>przycisk umiejętności</i>, aby zamontować pułapkę aktywną przez <span class=\\"Highlight3\\">{2} s</span>. Generatory z minami zostaną ujawnione wszystkim ocalałym za pomocą żółtej aury. Na generatorze może być aktywna tylko jedna pułapka.<br><li>Gdy zabójca uszkodzi generator z pułapką, ta eksploduje, ogłuszając zabójcę i oślepiając wszystkich w pobliżu.<i>Mina</i> przestaje być aktywna.</li><br><br><span class= \\"FlavorText\\">„Chcesz S.T.A.R.S.? Proszę bardzo!” – Jill Valentine</span>","name":"Mina","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"Odczuwasz ból tak samo jak wszyscy, ale wolisz, żeby inni o tym nie wiedzieli.<br><br>Nie wydajesz żadnych dźwięków, w tym jęków bólu, podczas leczenia. Nieudane testy umiejętności w trakcie leczenia nie powodują powiadomienia dźwiękowego, a leczenie cofa się jedynie o <span class=\\"Highlight1\\">{0}%.</span><br><br><span class= \\"FlavorText\\">„Dam radę”. – Leon S. Kennedy</span>","name":"Zaciśnięte Zęby","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"Udało ci się dostosować do świata pogrążonego w chaosie i dobrze wykorzystujesz znajdowane odpady.<br><br>Po ukończeniu <span class=\\"Highlight1\\">{0}%</span> naprawy dowolnego generatora aktywuje się <i>Granat Błyskowy</i>.<br>Wejdź do szafki z pustymi rękami i naciśnij przycisk umiejętności, aby wykonać granat.<br><li>1 ładunek.</li><li>Wybucha z głośnym hukiem i jasnym światłem.</li><li>Generuje powiadomienie dźwiękowe.</li><li>Może posłużyć do odwrócenia uwagi lub oślepienia.</li><br>Przy wyjściu z próby zostawiasz granat.<br><br><span class= \\"FlavorText\\">„Zejdź mi z oczu!” – Leon S. Kennedy</span>","name":"Granat Błyskowy","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"Bacznie obserwujesz cele, gdy uciekają.<br><br>Ukończ <span class=\\"Highlight1\\">{0}</span> dobre lub świetne testy umiejętności podczas naprawiania generatora, aby aktywować <i>Zapał Nowicjusza</i> do końca próby.<br>Po aktywacji widzisz aurę generatorów, których stan ulega pogorszeniu.<br><br><span class= \\"FlavorText\\">„Powstrzymam to, poruczniku, obiecuję”. – Leon S. Kennedy</span>","name":"Zapał Nowicjusza","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/pl/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/pl/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Nerwowy lider posiadający zdolność lokalizowania swoich sojuszników. Zwiększa także efektywność ocalałych.<br><br>Jego przyswajalne umiejętności: <b>Więź</b>, <b>Wykaż się</b> i <b>Lider</b> ułatwiają odnajdywanie pozostałych ocalałych i zapewniają bonus w postaci szybszego wykonywania czynności. Wspomniana premia dotyczy zarówno sojuszników, jak i samego użytkownika umiejętności.","name":"Dwight Fairfield","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"Energiczna lekkoatletka. Jest w stanie prześcignąć większość zabójców.<br><br>Jej przyswajalne umiejętności: <b>Szybko i Cicho</b>, <b>Sprint</b> i <b>Adrenalina</b> zapewniają przewagę podczas pościgów i skutecznie zwiększają dystans między ocalałym a zabójcą.","name":"Meg Thomas","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"Zagorzała botaniczka zapewniająca swojej drużynie (i sobie samej) większe szanse na przetrwanie.<br><br>Jej przyswajalne umiejętności: <b>Empatia</b>, <b>Wiedza Botaniczna</b> i <b>Samoopatrywanie</b> pozwalają dostrzec aury rannych ocalałych i sprawiają, że leczenie zarówno sojuszników, jak i siebie jest bardziej efektywne i szybsze.","name":"Claudette Morel","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"Samotny surwiwalista przygotowany na każdą ewentualność.<BR><BR>Jego przyswajalne umiejętności: <B>Żelazna Wola</B>, <B>Spokojny Duch</B> i <B>Sabotażysta</B> umożliwiają bezpieczniejsze poruszanie się po mapie i zwiększają szanse na przetrwanie w sytuacji, gdy jest się rannym.","name":"Jake Park","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"Miejska artystka, dla której ucieczka i ukrywanie się to chleb powszedni.<BR><BR>Jej przyswajalne umiejętności: <B>Miękkie Lądowanie</B>, <B>Skryta</B> i <B>Wiedza Uliczna</B> ułatwiają realizację celów głównych gry i unikanie konfrontacji z zabójcą.","name":"Nea Karlsson","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"Były żołnierz, który opanował do perfekcji sztukę przetrwania w bardzo trudnych warunkach. <br><br>Jego przyswajalne umiejętności: <b>Porzucony</b>, <b>Pożyczony Czas</b> i <b>Niezłomny</b> wzmacniają sojuszników (i jego samego), gdy znajdują się w nieciekawych sytuacjach.","name":"William „Bill” Overbeck","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"Potężny mięśniak lubujący się w ostrej rozgrywce.<br><br>Jego przyswajalne umiejętności: <b>Będziemy Żyć Wiecznie</b>, <b>Twarda Sztuka</b> i <b>Bez Biadolenia</b> nagradzają agresywny i konfrontacyjny styl gry, ale czynią go podatnym na obrażenia.","name":"David King","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"Zdeterminowana ocalała gotowa zmierzyć się z każdym możliwym wyzwaniem.<BR><BR>Jej przyswajalne umiejętności: <B>Ostatnia Ocalała</B>, <B>Obiekt Obsesji</B> i <B>Ostateczny Cios</B> zapewniają duże szanse na przetrwanie, ale okupione są tym, że pozostaje się często na widoku.","name":"Laurie Strode","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"Hazardzista, którego szczęście nie opuszcza nawet na krok. Zapewnia swojej drużynie większe szanse na przetrwanie.<BR><BR>Jego wyjątkowe umiejętności: <B>Otwarte karty</B>, <B>Podnieść stawkę</B> i <B>As w rękawie</B> zwiększają szczęście wszystkich ocalałych i ułatwiają odblokowywanie skrzyń.","name":"Ace Visconti","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"Uwielbia rywalizację. Potrafi szybko dostosować swoją strategię, aby poradzić sobie w trudnych sytuacjach.<BR><BR>Jej przyswajalne umiejętności: <B>Technik</B>, <B>Gibka</B> i <B>Zaalarmowana</B> ułatwiają naprawę generatorów i lokalizowanie zabójcy.","name":"Feng Min","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"Zdeterminowany lunatyk zapewniający swojej drużynie większe szanse na przetrwanie. Potrafi też sprawić, że drużyna szybciej odzyskuje siły.<BR><BR>Jego umiejętności: <B>Pobudka!</B>, <B>Farmacja</B> i <B>Czuwanie</B> ułatwiają Ocalałym lokalizowanie bram wyjściowych i umożliwiają szybszą regenerację.","name":"Quentin Smith","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"Detektyw z obsesją. Potrafi lokalizować cele i wypełniać szybciej zadania główne.<br><br>Jego przyswajalne umiejętności: <b>Wytrwałość</b>, <b>Przeczucie Detektywa</b> i <b>Nadzór</b> ułatwiają wypełnianie celów głównych gry i umożliwiają szybką regenerację.","name":"Detektyw Tapp","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"Piosenkarka o złotym sercu. <br><br>Jej przyswajalne umiejętności: <b>Zatańcz Ze Mną</b>, <b>Ostatnia Szansa</b> i <b>Do Utraty Tchu</b> umożliwiają dostrzeganie obiektów znajdujących się na mapie i zwiększają szansę na udaną ucieczkę z objęcia Zabójcy.","name":"Kate Denson","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"Zaradny nauczyciel potrafiący dostosować się bez trudu do nowych warunków, opracowując coraz to nowsze strategie przetrwania.<br><br>Jego przyswajalne umiejętności: <b>Dywersja</b>, <b>Wybawienie</b> i <b>Samouk</b> pomagają odwracać uwagę zabójcy, umożliwiają przetrwanie w ciężkich warunkach i zapewniają przewagę w późniejszych etapach rozgrywki.","name":"Adam Francis","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"Cichy artysta nieugięty w obliczu największych trudności.<br><br>Jego przyswajalne umiejętności: <b>przełamanie</b>, <b>druga pomoc</b> i <b>zakłócenie</b>, dają mu obserwacyjną przewagę i pomagają ukryć się przed zabójcą.","name":"Jeff Johansen","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"Wpływowa celebrytka idąca pod prąd, by stawić czoła trudnościom.<br><br>Jej umiejętności – <b>Solidarność</b>, <b>Opanowanie</b> i <b>Determinacja</b> – pomagają jej i innym w ucieczce z niebezpiecznych sytuacji.","name":"Jane Romero","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"Zarozumiały samotnik, uparty, stworzony, by przetrwać.<br><br>Dzięki umiejętnościom <b>Mijanka</b>, <b>Zapnij Pasy</b> i <b>Ludzki Zapał</b> jest bardziej odporny na ból oraz trudności i potrafi wyciągnąć przyjaciół z nieprzyjemnej sytuacji.","name":"Ashley J. Williams","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"Początkująca, przenikliwa dziennikarka umiejąca zauważać to, co inni często pomijają.<br><br>Jej osobiste umiejętności, <b>Razem Raźniej</b>, <b>Fiksacja</b> i <b>Wewnętrzna Siła</b>, zapewniają jej dodatkowe dane oraz odwagę potrzebną do mierzenia się z nieoczekiwanymi wyzwaniami.","name":"Nancy Wheeler","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"Były sportowiec, który jest w stanie chronić innych ocalałych i pomagać im, zachowując specyficzne poczucie humoru.<br><br>Jego przyswajalne umiejętności, <b>Niańka</b>, <b>Koleżeństwo</b> i <b>Drugi Oddech</b>, pomagają mu odwracać uwagę zabójcy, znosić ból i powracać do walki.","name":"Steve Harrington","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"Twarda uczestniczka wyścigów ulicznych, umiejąca zdobyć przewagę dla siebie i innych ocalałych w trudnych sytuacjach. Dzięki osobistym umiejętnościom <b>Łut szczęścia</b>, <b>Po trupach do celu</b> i <b>Ucieczka</b> potrafi ukrywać pozostawiane za sobą ślady krwi, podnosić palety i pomagać bezradnym ocalałym.","name":"Yui Kimura","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"Odważna dokumentalistka wykorzystująca swój uliczny spryt do unikania wykrycia i wspierania innych ocalałych.<br><br>Jej wyjątkowe umiejętności <b>Nieoficjalnie</b>, <b>Fałszywy Trop</b> i <b>Za Ludzi</b> pomagają jej pozostać w ukryciu w obliczu zagrożenia, odwracać uwagę zabójcy i szybko leczyć innych z narażeniem własnego bezpieczeństwa.","name":"Zarina Kassir","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"Cheryl Mason to młoda kobieta, która wyszła z przerażających sytuacji i potrafi dodać odwagi sobie i zespołowi.<br><br>Jej wyjątkowe umiejętności, <b>Strażnik duszy</b>, <b>Pakt krwi</b> oraz <b>Stłumiony sojusz</b>, umożliwiają jej przetrwanie największych trudności, pozostanie w kontakcie z członkami zespołu i planowanie celów.","name":"Cheryl Mason","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"Prawdziwy wizjoner wśród architektów. Dzięki niezwykłej determinacji potrafi ułożyć plan i pomóc innym ocalałym.<br><br>Jego umiejętności specjalne, <b>Wizjoner</b>, <b>Desperacki krok</b> oraz <b>Trwałość przede wszystkim</b>, pozwalają mu odkrywać generatory, ratować ocalałych i maksymalnie wykorzystywać posiadane narzędzia.","name":"Feliks Richter","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"Badaczka wiedzy tajemnej korzystająca ze sprytnych sztuczek i determinacji, aby pozostać przy życiu.<br><br>Jej umiejętności specjalne – <b>Ocena sytuacji</b>, <b>Oszustwo</b> i <b>Intensywna walka</b> – udostępniają zupełnie nowe sposoby używania przedmiotów i dają dodatkowy plan ucieczki przed zabójcami. ","name":"Élodie Rakoto","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"Skupiona na sobie producentka muzyczna umiejąca realizować cele w trudnych czasach.<br><br>Jej umiejętności specjalne – <b>Szybka Ścieżka</b>, <b>Przebój</b> i <b>Instynkt Samozachowawczy</b> – pozwalają jej poprawiać swoje zdolności i szybko uciekać przed pościgiem, gdy innym dzieje się krzywda. ","name":"Yun-Jin Lee","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"Jill Valentine jest założycielką S.T.A.R.S. Odniosła zwycięstwo nad niezliczonymi broniami organicznymi.<br><br>Jej umiejętności specjalne – <b>Przeciwdziałanie</b>, <b>Odrodzenie</b> i <b>Mina</b> – umożliwiają jej pośrednią walkę i zapewnianie znacznego wsparcia reszcie zespołu. ","name":"Jill Valentine","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"Leon S. Kennedy to młody policjant, który wykazał się wielką gorliwością w trakcie wypadku w Raccoon City.<br><br>Jego umiejętności specjalne – <b>Zaciśnięte Zęby</b>, <b>Granat Błyskowy</b> i <b>Zapał Nowicjusza</b> – pozwalają mu ignorować ból, rozpraszać zabójcę i śledzić utracone cele. ","name":"Leon S. Kennedy","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./pl/index.ts ***!
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
/* harmony import */ var _src_lib_locales_pl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/pl */ "./src/lib/locales/pl.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_pl__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map