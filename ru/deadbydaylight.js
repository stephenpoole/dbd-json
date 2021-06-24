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

/***/ "./src/lib/locales/ru.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/ru.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_ru_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/ru/items.json */ "./src/data.compiled/locales/ru/items.json");
/* harmony import */ var _data_compiled_locales_ru_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/ru/killerAddons.json */ "./src/data.compiled/locales/ru/killerAddons.json");
/* harmony import */ var _data_compiled_locales_ru_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/ru/killerOfferings.json */ "./src/data.compiled/locales/ru/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_ru_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/ru/killerPerks.json */ "./src/data.compiled/locales/ru/killerPerks.json");
/* harmony import */ var _data_compiled_locales_ru_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/ru/killers.json */ "./src/data.compiled/locales/ru/killers.json");
/* harmony import */ var _data_compiled_locales_ru_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/ru/powers.json */ "./src/data.compiled/locales/ru/powers.json");
/* harmony import */ var _data_compiled_locales_ru_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/ru/sharedOfferings.json */ "./src/data.compiled/locales/ru/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_ru_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/ru/survivorAddons.json */ "./src/data.compiled/locales/ru/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_ru_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/ru/survivorOfferings.json */ "./src/data.compiled/locales/ru/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_ru_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/ru/survivorPerks.json */ "./src/data.compiled/locales/ru/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_ru_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/ru/survivors.json */ "./src/data.compiled/locales/ru/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.Russian;
var data = {
  items: _data_compiled_locales_ru_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_ru_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_ru_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_ru_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_ru_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_ru_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_ru_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_ru_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_ru_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_ru_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_ru_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/ru/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/ru/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Несколько взрывчатых устройств, завернутых в плотную бумагу. При детонации вспыхивает ярким светом и издает громкие хлопки. Можно использовать для отвлечения или для ослепления.<br><li><b>1 заряд</b>.</li>","name":"Китайская Хлопушка","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"Стандартный фонарик. Освещает путь в темноте.<br><li>Время работы - <b>8 сек</b>.</li>","name":"Фонарик","flavor":"«Почти весь заряд батарейки был использован предыдущим владельцем».","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"Фонарик со специальной насадкой, проецирующей оранжевого призрака. <br><li>Время работы: <b>8 секунд</b>. </li><li><b>Значительно увеличивает шанс появления </b>дружелюбных призраков в вашей жизни.</li>","name":"Блуждающий Огонек","flavor":"«Удачной охоты за сладостями!»","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"Очень удобный фонарик с хорошей рукояткой. Его эффективность заключается в выработке мощного светового луча при меньшем потреблении энергии.<br><li><b>Срок службы - 8 сек.</b></li><li><b>Слегка уменьшает</b> расход батареи фонарика.</li><li><b>Немного увеличивает</b> его точность.</li>","name":"Спортивный Фонарик","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"Прочный, но тяжелый фонарик с мощным зарядом.<br><li><b>Срок службы - 12 секунд.</b></li><li><b>Слегка уменьшает</b> точность.</li><li><b>Умеренно увеличивает</b> силу воздействия луча фонарика на Убийцу.</li><li><b>Умеренно увеличивает</b> продолжительность ослепления.</li>","name":"Тяжелый Фонарь","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"Верхняя часть ключа, излучающая силу. Сила сломанного ключа не может быть активирована сама по себе. Разные предметы могут быть прицеплены на колечко для придания различных эффектов сломанному ключу. <br><li>Срок службы - <b>10 сек.</b></li>","name":"Сломанный Ключ","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"Потертый изогнутый ключ, когда-то державший в себе великую силу. Сила ключа не может быть активирована сама по себе. Разные предметы могут быть прицеплены на колечко, для придания различных эффектов потертому ключу<br><li>Срок действия — <b>5 сек.</b></li><li>Можно использовать для открытия черных замков.</li>","name":"Потертый Ключ","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"Потертый изогнутый ключ, источающий зловещую силу. Сила ключа не может быть активирована сама по себе. Разные предметы могут быть прицеплены на колечко Мастер-Ключа для получения различных эффектов. <br><li>Срок действия <b>30 секунд.</b></li><li>Можно использовать для открытия люка.</li>","name":"Ключ Скелета","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"Старый кусок пергамента из кожи. Свернут и скреплен бесцветным кожаным шнурком. При использовании карты открывается способность чтения ауры, что, в свою очередь, медленно сжигает карту. Ауры Целей, которые вы обнаружили, открыты для вас до тех пор, пока не израсходуются все заряды карты.<br><li><b>20 сек.</b> использования.</li><li>Матч начинается с <b>1-им</b> отслеживаемым генератором.</li><li>Открывает способность отслеживать генераторы в радиусе <b>8-и метров</b> от вас.</li>","name":"Карта","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"Кусок пергамента, сделанный из кожи, причем до странного свежей. Даже кровь на его краях еще не высохла. Свернут и скреплен множеством цветных шнурков и веревок. При изучении карты у вас открывается способность к чтению ауры, что, в свою очередь, медленно сжигает карту. Ауры Целей, которые вы обнаружили, видны вам до тех пор, пока у карты есть заряды.<br><li><b>20 сек. использования</b>.</li><li>В начале матча карта автоматически отслеживает <b>3 объекта</b>.</li><li>Открывает способность <b>отслеживать объекты</b> в радиусе <b>8 метров</b> от вас.</li><li>Открывает способность <b>отслеживать люк</b> в радиусе <b>8 метров</b> от вас.</li><li>Открывает способность <b>отслеживать вещи убийцы</b> в радиусе <b>8 метров</b> от вас.</li><li>Открывает способность <b>отслеживать ворота</b> в радиусе <b>8 метров</b> от вас.</li>","name":"Радужная Карта","flavor":"«Меня это так обескураживает. Все эти невообразимые познания и куча усилий, и ничего конкретного. Ничего, что помогло бы выбраться из этого кошмара». — из дневника Виго","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"Примитивная аптечка, которая может спасти жизнь в чрезвычайных ситуациях, хоть в ней и не хватает некоторых предметов.<br><li><b>16 зарядов</b>.</li><li><b>Умеренно увеличивает</b> скорость, с которой вы лечите других выживших.</li><li>Позволяет <b>лечить себя</b>.</li>","name":"Походная Аптечка","flavor":"«В ней едва хватает материалов даже для немудреных процедур».","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"Пластиковый ланчбокс со светящимися Хеллоуинскими наклейками. Внутри находятся предметы первой помощи.<br><li><b>24 заряда.</b></li><li><b>Значительно увеличивает</b>  скорость, с которой вы лечите других Выживших. </li><li>Открывает способность «Самолечение».</li><li>Делает вас <b>более заметным.</b></li>","name":"Ланчбокс Всех Святых","flavor":"«Безопасность превыше всего! Убедитесь, что вас хорошо видно, когда будете выпрашивать сладости».","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"Стандартная аптечка со всем необходимым оборудованием для лечения как небольших, так и более серьезных травм.<br><li><b>24</b> заряда.</li><li><b>Значительно увеличивает</b> скорость, с которой вы лечите других Выживших.</li><li>Открывает способность «Самолечение».</li>","name":"Аптечка","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"Большая, хорошо собранная аптечка. Все предметы для первой помощи в отличном состоянии.<br><li><b>16 зарядов</b>.</li><li><b>Чрезвычайно увеличивает</b> скорость, с которой вы лечите других выживших.</li><li><b>Чрезвычайно увеличивает</b> скорость, с которой вы лечите себя.</li><li>Позволяет <b>лечить себя</b>.</li>","name":"Аптечка первой помощи","flavor":"«Для всего есть лекарство... кроме этого».","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"Большая металлическая коробка с медикаментами, предназначенная для спасательных операций в труднодоступных, изолированных местах.<br><li><b>32 заряда</b>.</li><li><b>Чрезвычайно увеличивает</b> скорость, с которой вы лечите других выживших.</li><li><b>Умеренно увеличивает</b> размер зон успеха при проверках реакции.</li><li><b>Умеренно увеличивает</b> размер бонусных зон при проверках реакции.</li><li>Позволяет <b>лечить себя</b>.</li>","name":"Аптечка лесничего","flavor":"«На задней стороне можно найти приклеенный ярлык с гравировкой VK.ID-3994723».","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"Большая металлическая коробка со старыми инструментами, которые могут сломаться в любой момент. Даже без подготовки их можно использовать для починки или поломки различных механических компонентов.<br><li><b>16 зарядов</b>.</li><li><b>Умеренно увеличивает</b> скорость починки.</li><li><b>Слегка уменьшает</b> размер зон успеха проверки реакции.</li><li>Открывает способность <b>ломать</b> некоторые объекты.</li>","name":"Изношенные Инструменты","flavor":"«Ты называешь это инструментами?.. Серьезно?».","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"Большая металлическая коробка с базовыми инструментами. Даже без подготовки их можно использовать для починки или поломки различных механических компонентов.<br><li><b>20 зарядов</b>.</li><li><b>Умеренно увеличивает</b> скорость починки.</li><li>Открывает способность <b>ломать</b> некоторые объекты.</li><li><b>Слегка увеличивает</b> скорость поломки.</li>","name":"Ящик с Инструментами","flavor":"«Непонятно, откуда взялись эти инструменты. Принес ли их один из нас, или же они принадлежат кому-то из монстров?».","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"Металлическая коробка со специнструментами, использующимися в механике. Даже без подготовки их можно использовать для починки или поломки различных механических компонентов.<br><li><b>16 зарядов</b>.</li><li><b>Значительно увеличивает</b> скорость починки.</li><li>Открывает способность <b>ломать</b> некоторые объекты.</li><li><b>Слегка уменьшает</b> скорость поломки.</li>","name":"Инструменты Механика","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"Большая металлическая коробка с базовыми инструментами и запасными механическими деталями. Даже без специальных навыков вы сможете воспользоваться ими для починки или поломки различных механических компонентов.<br><li><b>32 заряда</b>.</li><li><b>Умеренно увеличивает</b> скорость починки.</li><li>Открывает способность <b>ломать</b> некоторые объекты.</li>","name":"Вместительный Ящик с Инструментами","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"Металлическая коробка с узкоспециализированными инженерными инструментами. Большинство из них могут быть использованы даже новичками для быстрой починки или поломки различных механических компонентов.<br><li><b>16 зарядов</b>.</li><li><b>Чрезвычайно увеличивает</b> скорость починки.</li><li>Открывает способность <b>ломать</b> некоторые объекты.</li><li><b>Умеренно увеличивает</b> скорость поломки.</li>","name":"Инструменты Инженера","flavor":"«Я создал бесподобные инструменты и был опустошен, когда их у меня украли. Эти же — лишь жалкая подделка, найденная в Тумане» (из дневника Виго).","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"Металлический ящик, содержащий в основном пилы и плоскогубцы различных размеров, а также другие инструменты. Несмотря на то, что содержимое этого ящика явно предназначено для разрушения, его также можно использовать для починки различных механических компонентов.<br><li><b>24 заряда</b>.</li><li><b>Слегка увеличивает</b> скорость починки.</li><li>Открывает способность <b>ломать</b> некоторые объекты.</li><li><b>Значительно увеличивает</b> скорость поломки.</li>","name":"Инструменты Алекса","flavor":"«На большинстве инструментов есть надпись \\"Собственность Алекса\\"».","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"Небольшой, но крайне взрывоопасный атрибут праздничного стола. При взрыве издает громкий хлопок и производит слепящую вспышку. Можно использовать для отвлечения, ослепления или для празднования.<br><li><b>1 заряд.</b></li>","name":"Новогодняя Хлопушка","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"Маленькое взрывоопасное украшение для праздничного стола. При взрыве раздаются громкие хлопки, мелькают яркие вспышки и разлетаются веселые конфетти. Можно использовать, чтобы отвлечь противника, ослепить его... или просто порадоваться годовщине.<br><li><b>1 заряд.</b></li>","name":"Хлопушка третьей годовщины","flavor":"«С годовщиной! Отпразднуем три года, проведенных вместе!»<br>— Команда Dead by Daylight","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"Праздничная аптечка, из которой при полном излечении выжившего вылетают конфетти. Сюрприз!<br><li><b>24 заряда</b>.</li><li><b>Значительно увеличивает</b> скорость, с которой вы лечите других выживших.</li><li>Позволяет <b>лечить себя</b>.</li>","name":"Аптечка годовщины","flavor":"«С годовщиной! За то, чтобы провести вместе еще многие годы!»<br>— Команда Dead by Daylight","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"Праздничный фонарик, из которого при ослеплении убийцы вылетают конфетти. Сюрприз!<br><li><b>8 секунд</b> использования.</li>","name":"Фонарик годовщины","flavor":"«С годовщиной! За то, чтобы провести вместе еще многие годы!»<br>— Команда Dead by Daylight","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/ru/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Защитные кожаные перчатки.<br><li><b>Слегка увеличивают</b> скорость установки Медвежьих Капканов.</li>","name":"Охотничьи Перчатки","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"Большая и тяжелая пружина, добавляющая мощности медвежьим капканам.<br><li><b>Слегка увеличивает</b> время обезвреживания медвежьих капканов.</li>","name":"Мощная Пружина","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"Ремкомплект для установки четырех пружин вместо двух в медвежьи капканы, в результате чего возрастает их мощь.<br><li><b>Умеренно увеличивает</b> время обезвреживания медвежьих капканов.</li>","name":"Комплект из 4-х спиральных пружин","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"Древесная зола. Если ее сварить, можно получить темный раствор для покраски Медвежьих Капканов - это сделает их менее заметными.<br><li><b>Умеренно затемняет</b> все Медвежьи Капканы.</li>","name":"Древесная Краска","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"Эти челюсти Медвежьих Капканов похожи на пилу и наносят ужасные рваные раны при срабатывании.<br><li>Выжившие, раненые Медвежьим Капканом, страдают от эффекта <b>Кровотечение</b> до тех пор, пока не вылечатся.</li>","name":"Зазубренные Челюсти","flavor":"«Как хищный зверь, он чует кровь».","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"Простые инструменты для быстрой и безопасной установки Медвежьих Капканов.<br><li><b>Умеренно увеличивают</b> скорость установки Медвежьих Капканов.</li>","name":"Растяжки для Капканов","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"Кожаный поясной мешок. Большой и прочный, отлично подходит для транспортировки охотничьего снаряжения.<br><li>Вы начинаете матч с <b>1-м дополнительным</b> Медвежьим Капканом.</li><li>Позволяет носить с собой еще <b>2 дополнительных</b> Медвежьих Капкана.</li>","name":"Охотничья Сумка","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"Эти челюсти медвежьего капкана покрыты коркой ржавчины, что делает травмы особенно трудноизлечимыми.<br><li>Выжившие, пойманные в медвежий капкан, страдают от эффекта <b>«Травма»</b>.","name":"Ржавые Челюсти","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"Дополнительная пружина, сохраняющая функциональность медвежьего капкана после износа основной пружины.<br><li><b>Значительно увеличивает</b> время обезвреживания медвежьих капканов.</li>","name":"Дополнительная Пружина","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"Черное липкое вещество, похожее на деготь. При нанесении на Медвежьи Капканы делает их менее заметными.<br><li><b>Значительно затемняет</b> ловушку.</li><li>Действует на все Медвежьи Капканы.</li>","name":"Смоляная Бутылка","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"Кирпич из воска используется для снижения трения и плавного движения механических деталей.<br><li><b>Умеренно снижает</b> шанс побега из Медвежьего Капкана.</li>","name":"Кусок Воска","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"Прозрачное масло делает пружины ловушек еще более опасными.<br><li><b>Чрезвычайно увеличивает</b> время обезвреживания медвежьих капканов.</li>","name":"Маслянистая Пружина","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"Специализированный набор инструментов для быстрой установки Медвежьих Капканов. Повышает эффективность Капканов.<br><li><b>Чрезвычайно увеличивает</b> скорость установки Медвежьих Капканов.</li><li><b>Значительно увеличивает</b> время спасения и побега из Медвежьих Капканов.</li><li><b>Умеренно снижает</b> шанс побега из Медвежьего Капкана.</li>","name":"Крепежные Инструменты","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"Большая сумка, небрежно сшитая из нескольких кусков кожи различного происхождения.<br><li>Вы начинаете матч с <b>2-мя дополнительными</b> Медвежьими Капканами.</li><li>Позволяет носить с собой еще <b>2 дополнительных</b> Медвежьих Капкана.</li>","name":"Заштопанный Мешок","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"Липкая и скользкая, эта мрачная жидкость делает пружины ловушек еще опаснее.<br><li>Когда капкан сломан или обезврежен <b>здоровым</b> выжившим, кровавые пружины взимают плату за это действие, а выживший становится <b>раненым</b>.</li><li><b>Слегка увеличивает</b> время обезвреживания медвежьих капканов.</li>","name":"Кровавая Пружина","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"Капканы, заточенные этим переливающимся камнем, будто становятся живыми.<br><li>Каждые <b>30 секунд</b> один случайно выбранный закрытый Медвежий Капкан раскрывается сам по себе.</li>","name":"Радужный Камень","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"Символ Оас-Нек, олицетворяющий коварство, нарисован сажей на колоколе.<br><li>Призрак полностью <b>выйдет из невидимости</b>, когда будет ломать доски и генераторы (в режиме невидимости).</li>","name":"«Змей» - Сажа","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"Символ Воннуг, олицетворяющий бесподобного следопыта, нарисован сажей на колоколе.<br><li>Свежие кровавые следы видны <b>значительно</b> лучше, чем обычно.</li>","name":"«Ищейка» - Сажа","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"Символ Кугвемуу, олицетворяющий мир духов, нарисован сажей на колоколе.<br><li>После выхода из невидимости радиус террора Призрака остается подавленным в течение <b>6</b> секунд.</li>","name":"«Гоуст Фейс» — Сажа","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"Символ Кунгферуу, олицетворяющий мир страха, нарисован сажей на колоколе.<br><li>Радиус террора Призрака больше <b>не подавляется</b> в режиме невидимости.</li><li>Вы получаете на 100% больше Очков Крови за выслеживание и внезапные атаки по Выжившим.</li>","name":"«Зверь» - Сажа","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"Язычок колокола, изготовленный из полированной кости. Из-за него Плачущий Колокол звучит крайне странно и путает противника.<li>Выжившие больше не смогут определить <b>расстояние</b> до Плачущего Колокола, и понять <b>с какой стороны</b> он звучит.</li>","name":"Костяной Язычок Колокола","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"Символ Кратин, олицетворяющий скорость, нарисован грязью на колоколе.<br><li><b>Значительно</b> уменьшает время перехода в режим невидимости.</li>","name":"«Скачок» - Грязь","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"Символ Охувэ-Онмнеа, олицетворяющий ярость, нарисован грязью на колоколе.<li><b> Умеренно увеличивает</b> скорость передвижения Призрака в режиме невидимости.</li>","name":"«Ураган» - Грязь","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"Символ Кунтин-Такко, олицетворяющий быстрое выслеживание жертвы, нарисован грязью на колоколе.<br><li><b>Слегка снижает</b> время выхода из режима невидимости.</li>","name":"«Стремительная охота» - Грязь","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"Символ Байкра-Кеуг, олицетворяющий невосприимчивость, нарисован грязью на колоколе.<br><li><b>Внезапные атаки</b> по Выжившим лишают их возможности <b>читать ауры</b> в течение <b>60-и секунд.</b></li>","name":"«Слепой воин» - Грязь","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"Символ Охувэ-Онмнеа, олицетворяющий сильный шторм, нарисован белой краской на колоколе.<li><b>Значительно увеличивает</b> скорость передвижения Призрака в режиме невидимости.</li>","name":"«Ураган» - Белая Краска","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"Символ Кунтин-Такко, олицетворяющий быстрое выслеживание жертвы, нарисован белой краской на колоколе.<br><li><b>Умеренно снижает</b> время выхода из режима невидимости.</li>","name":"«Стремительная охота» - Белая Краска","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"Символ Онмене-Вивуфо, олицетворяющий темную синергию, выведен белой краской на колоколе.<br><li><b>Значительно уменьшает</b> время, необходимое для прыжков через окна, открытия шкафчиков, поломки досок, хрупких предметов и генераторов (в режиме невидимости).</li>","name":"«Танец Теней» - Белая Краска","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"Символ Кратин, олицетворяющий скорость, нарисован белой краской на колоколе.<br><li><b>Чрезвычайно</b> уменьшает время перехода в режим невидимости.</li>","name":"«Скачок» - Белая Краска","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"Символ Байкра-Кеуг, олицетворяющий невосприимчивость, нарисован белой краской на колоколе.<br><li>Внезапные атаки по выжившим заставляют их страдать от эффектов <b>«Травма»</b> и <b>«Кровотечение»</b> до тех пор, пока они полностью не вылечатся.</li>","name":"«Слепой воин» - Белая Краска","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"Символ Охувэ-Онмнеа, олицетворяющий сильный шторм, отпечатан кровью на колоколе.<br><li><b>Значительно увеличивает</b> скорость движения Призрака после выхода из невидимости.</li>","name":"«Ураган» - Кровь","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"Символ Кунтин-Такко, олицетворяющий быстрое выслеживание жертвы, отпечатан кровью на верхушке колокола.<br><li><b>Значительно снижает</b> время выхода из режима невидимости.</li>","name":"«Стремительная охота» - Кровь","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"Символ Онмене-Вивуфо, олицетворяющий темную синергию, отпечатан кровью на колоколе.<br><li><b>Чрезвычайно уменьшает</b> время, необходимое для прыжков через окна, открытия шкафчиков, поломки досок, хрупких предметов и генераторов (в режиме невидимости).</li>","name":"«Танец Теней» - Кровь","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"Символ Кра-Фрабай, олицетворяющий наблюдающую за нами Сущность, отпечатан кровью на колоколе.<br><li>Открывает способность чтения ауры. Позволяет в режиме невидимости видеть ауры Выживших в радиусе <b>12-и метров</b> от вас.</li>","name":"«Всевидящий» - Кровь","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"Веревка, обвязанная вокруг язычка колокола, для создания более мягкого звука.<br><li><b>Умеренно снижает</b> расстояние, на котором Выжившие слышат звук входа и выхода Призрака из невидимости. </li><li>Эффект суммируется.</li>","name":"Обмотанный Язычок","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"Символ Кра-Фрабай, олицетворяющий наблюдающую за нами Сущность, отпечатан белой краской на колоколе.<br><li>Открывает способность чтения ауры. В режиме невидимости вы можете определять <b>степень починки генераторов</b> по <b>яркости их ауры.</b></li>","name":"«Всевидящий» - Дух","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"Качественная муфта, благодаря которой цепь нигде не застревает.<br><br><li><b>Уменьшает</b> область столкновения во время рывка с бензопилой.</li>","name":"Тяжелая муфта","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"Механическое устройство, ограничивающее единовременную подачу топлива в малые двигатели, тем самым обеспечивая постоянную и безопасную скорость.<br><br><li>При ранении бензопилой выжившие теряют одно состояние здоровья.</li><li>Вы получаете на <b>100%</b> больше очков крови за действия с бензопилой.</li>","name":"Ограничитель Скорости","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Пыльный и треснувший, этот фильтр все равно работает лучше стандартных моделей.<br><br><li><b>Слегка увеличивает</b> предел перегрева бензопилы.</li>","name":"Воздушный фильтр со свалки","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"Ботинки с укрепленными мысками для защиты от ударов.<br><br><li><b>Слегка ускоряют</b> восстановление после столкновения бензопилы с объектами.</li>","name":"Ботинки с железными мысками","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"Наспех модифицированный глушитель для лучшего притока воздуха.<br><br><li><b>Слегка ускоряет</b> охлаждение бензопилы.</li>","name":"Продырявленный глушитель","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"Великолепная блестящая пряжка, которую носили многие славные деревенские жители.<br><br><li><b>Уменьшает</b> радиус террора на 8 м при перегреве бензопилы.</li>","name":"Большая пряжка","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"Недорогое масло, подходящее для смазки шумных цепей.<br><br><li><b>Слегка уменьшает</b> шум от бензопилы.</li>","name":"Моторное масло неизвестной марки","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"Пара добротных ботинок, снятых с трупа Макса Томпсона-старшего.<br><br><li><b>Умеренно увеличивает</b> ловкость управления во время рывка с бензопилой.</li>","name":"Папины ботинки","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"Метки на Бензопиле соответствуют количествам жизней, которые она забрала. Наполняет ее пользователя решимостью.<br><li><b>Слегка увеличивает</b> скорость движения с Бензопилой.</li><li><b>Слегка увеличивает</b> время завода.</li><li>Эффект суммируется.</li>","name":"Метки Смерти","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"Немного кофеиновых таблеток, найденных в сумочке Эвелин Томпсон. Среди побочных эффектов — нервозность и раздражительность.<br><br><li><b>Слегка уменьшает</b> время завода бензопилы в течение 30 сек. после оглушения досками.</li><br>","name":"Мамины помощницы","flavor":"«Доктор, пожалуйста, мне нужно больше!» (Эвелин Томпсон).","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"Специальная цепь, снижающая вероятность отдачи.<br><br><li><b>Значительно уменьшает</b> время бездействия при столкновении с объектами во время рывка с бензопилой.</li>","name":"Цепи с низкой отдачей","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"Влажная кашица из ароматных листьев, скрывающая запах охотника от добычи.<br><br><li>Нанеся удар бензопилой, вы получаете эффект «Незаметность» на 15 сек.</li>","name":"Кашица из листьев","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"Метки на Бензопиле символизируют темного хищника, обитающего в тумане. Наполняет ее пользователя решимостью.<br><li><b>Умеренно увеличивает</b> скорость движения с Бензопилой.</li><li><b>Слегка увеличивает</b> время завода.</li><li>Эффект суммируется.</li>","name":"Роковые Метки","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"Густая и жирная мазь, которую можно нанести под глаза, чтобы уберечь их от ярких вспышек.<br><br><li><b>Умеренно увеличивает</b> охлаждение бензопилы, когда на вас светят фонариком.</li>","name":"Солидол","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"Хоть этот карбюратор и покрыт толстым слоем грязи и масла, он прекрасно откалиброван.<br><br><li><b>Умеренно уменьшает</b> время завода бензопилы.</li><li><b>Уменьшает</b> базовую скорость передвижения до 4,4 м/с.","name":"Калиброванный карбюратор","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"Ботинки с пристегнутыми металлическими нашлепками, которые не дают подошвам скользить по грязи.<br><li><b>Чрезвычайно увеличивают</b> скорость поворота при использовании бензопилы.</li><li><b>Значительно увеличивают</b> штрафное время после столкновения с объектами.</li>","name":"Сапоги с Шипами","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"Неизвестно чем перепачканные перчатки. Пусть и вонючие, зато из очень толстой и прочной ткани.<br><br><li><b>Умеренно снижают</b> накапливание тепла при пуске бензопилы.</li><br>","name":"Перчатки из свинарника","flavor":"«Никакой грязи не запятнать душу настоящего работяги» (Макс Томпсон-старший).","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"С новыми цепями бензопила становится легче, что позволяет лучше ее контролировать.<br><br><li>Рывок с бензопилой продолжается, когда вы ломаете доски или стены.</li><li>При ранении бензопилой в течение 5 сек. после поломки доски или стены выжившие теряют одно состояние здоровья.</li>","name":"Облегченные цепи","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"Когда стена, что удерживала Макса-младшего в его комнате, начала трястись и рушиться, этот кирпич выпал первым.<br><br><li>После 2 сек. рывка с бензопилой вы получаете эффект «Незаметность» до окончания рывка.</li><br>","name":"Переливчатый кирпич","flavor":"«Эй, ты там чего затеял, малой?» (Макс Томпсон-старший).","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"Мастерски сделанный глушитель для бензопилы, которому все прочие и в подметки не годятся.<br><br><li>Выжившие не слышат звуки бензопилы за пределами радиуса террора.</li>","name":"Превосходный глушитель","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"Бесцветная резная игрушка из дешевого дерева, формой напоминающая лошадку. Когда-то она была символом глубокой связи между пациентом-кататоником и медсестрой.<br><li><b>Умеренно снижает</b> дополнительное истощение после неудачных атак скачком.</li>","name":"Деревянная Лошадь","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"Гребень для вычесывания вшей, взятый из клиники. Некогда служил символом тесной связи между тревожной пациенткой и медсестрой.<br><li><b>Умеренно снижает</b>дальность атак с выпадом после скачка.</li><li>Увеличивает количество очков крови, получаемых за <i>атаки скачком</i>, на <b>100%</b>.</li>","name":"Белый Гребень от Паразитов","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"Тусклая, местами ржавая и запачканная металлическая ложка. Изъята у Плохиша, пациента из палаты №202.<br><li>После успешной атаки-скачка громкость стонов раненого выжившего <b>умеренно повышается</b> на <b>60 сек.</b></li>","name":"Металлическая Ложка","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"Гнилой коренной зуб, вырванный из холодной руки мертвого «Плохиша».<br><li>Успешная атака-скачок на <b>60 сек.</b> показывает вам ауру выживших, когда те лечатся сами или с чьей-то помощью и находятся в пределах <b>28 м</b>.</li>","name":"Памятный Сувенир Плохиша","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"Обгоревшие и разбитые карманные часы с бренчащими внутри деталями. Забраны с тела медсестры Морис.<br><li><b>Умеренно увеличивают</b> промежуток между скачками в цепочке.</li>","name":"Карманные Часы","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"Возможно, это грошовое украшение кому-то было дорого. Снято с тела беспокойной девушки.<br><li><b>Умеренно снижает </b>максимальную дальность скачка.</li><li>Повышает количество очков крови, получаемых за <i>точные скачки</i>, на <b>100%</b>.</li>","name":"Потертый Браслет","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"Черная веревка, служившая поясом в скорбные времена. Взята с тела отца Кэмпбелла.<br><li><b>Умеренно ускоряет</b> восстановление скачка.</li>","name":"Темный Веревочный Пояс","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"Эта сосновая шишка отчего-то успокаивала пациента, и тот переставал нервно дергаться. Забрана с тела мальчика с кататоническим синдромом.<br><li><b>Значительно снижает</b> дополнительное истощение после цепочки скачков.</li>","name":"Сокровище Мальчика-кататоника","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"Неровное и трепетное дыхание, отнятое у Плохиша. Оно агрессивно бьется и дергается от прикосновения Медсестры.<br><li>После успешной атаки по выжившему скачком <b>Медсестра не может делать скачок</b>, но ее скорость передвижения возрастает до <b>4,6 м/с</b> на <b>60 сек.</b></li>","name":"Судорожный Вздох","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"Медленное и сиплое дыхание, украденное у жирного санитара. Слабо колеблется от прикосновения Медсестры.<br><li><b>Значительно увеличивает</b> максимальную дальность скачка.</li><li><b>Значительно увеличивает</b> максимальную длительность заряда скачка.</li>","name":"Тяжелая Одышка","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"Свистящее и хриплое дыхание, украденное у отца Кэмпбелла. Тихо завивается и закручивается при прикосновении Медсестры.<br><li><b>Значительно ускоряет</b> восстановление скачка.</li>","name":"Тихий Хрип","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"Неровное и угасающее дыхание мальчика с кататоническим синдромом. Обычно спокойное, в руках Медсестры оно тревожно учащается.<br><li><b>Умеренно снижает</b> время истощения после скачка.</li>","name":"Атактическое Дыхание","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"Вздох удивления, забранный у беспокойной девочки, которая нравилась Медсестре. Живо дергается при ее прикосновении.<br><li>Совершая скачок сквозь выжившего, вы заставляете его вскрикнуть и получаете <b>200 очков крови</b> в категории <i>«Хитрость»</i>.</li>","name":"Тревожный Вздох","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"Оторванный кусок красно-черной клетчатой фланели. Клочок ткани наделяет Медсестру губительной концентрацией.<br><li>Позволяет Медсестре видеть, в каком месте она окажется после скачка.</li>","name":"Клетчатая Фланель","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"Сильный последний вздох, украденный у Харви Кавана, санитара психбольницы «Кротус Пренн». Напряженно пульсирует в руках Медсестры.<br><li><b>Чрезвычайно увеличивает</b> максимальную дальность скачка.</li><li><b>Чрезвычайно увеличивает</b> максимальную длительность заряда скачка.</li>","name":"Последний вздох Кавана","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"Сильный последний вздох, украденный у Мэри Дженнер, пациентки психиатрической лечебницы «Кротус Пренн». Судорожно трепещет в руках Медсестры.<br><li>Позволяет Медсестре мгновенно вернуться в изначальное место после скачка нажатием <i>кнопки активной способности</i>. Необходимо использовать прежде, чем начнет действовать истощение.</li>","name":"Последний вздох Дженнер","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"Сильный последний вздох, вырванный у отца Кэмпбелла, священника психиатрической больницы «Кротус Пренн». В руках Медсестры он напряженно хрипит.<br><li>После полностью заряженного скачка Медсестра тут же делает еще один наполовину заряженный скачок в сторону, в которую смотрит.</li>","name":"Последний Вздох Кемпбелла","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"Сильный последний вздох, отнятый у Плохиша — пациента психиатрической лечебницы «Кротус Пренн». Неудержимо мечется в руках Медсестры.<br><li>После успешной атаки по выжившему скачком на Медсестру <b>16 сек.</b> действует эффект <b>«Незаметность»</b>.</li><li>Может сработать только раз в <b>60 сек.</b></li>","name":"Последний Вздох «Плохиша»","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"Белый и до сих пор чистый кусок тесьмы. Когда-то крепился к священной книге и считался символом спора.<br><li>Добавляет <b>1</b> заряд скачка.</li><li>Медсестра может совершать скачок только в место, которое видит.</li>","name":"Порванная Закладка","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"Спичечный коробок, в который сложили странную коллекцию всевозможных пуговиц. Напоминает владельцу об одном жутком месте.<br><li>Убирает <b>1</b> заряд скачка.</li><li>Повышает базовую скорость передвижения Медсестры до <b>4,2 м/с</b>.</li>","name":"Спичечный коробок","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"Очень дешевое ювелирное изделие из пластика. Покрашено так, чтобы было похоже на драгоценный материал.<br><li><b>Слегка увеличивает</b> скорость движения при преследовании.</li>","name":"Безвкусные Серьги","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"«Романтичная», немного похабная записка, оставленная для привлечения внимания любовницы.<br><li><b>Слегка увеличивает</b> дальность выпада ножа во время <b>Чистого Зла I</b>.</li>","name":"Записка от Парня","flavor":"«Подпись на записке: Д.»","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"Слегка волнистый светлый волос.<br><li><b>Слегка увеличивает</b> продолжительность действия <b>Чистого Зла III</b>.</li><li><b>Слегка увеличивает</b> количество зла, необходимого для достижения <b>Чистого Зла III</b> в первый раз.</li>","name":"Светлый Волос","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"Крошечный кусочек светоотражающего материала, скорее всего, от разбитого зеркала.<br><li><b>Чистое Зло II открывает ауры выживших</b>, которых преследовали по крайней мере <b>1 сек.</b></li><li>Аура остается видимой в течение <b>2 сек.</b></li>","name":"Светоотражающий Осколок","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"Частично выцветшая и высохшая розовая живокость, собранная с надгробия. <br><li><b>Слегка увеличивает</b> скорость получаемого зла при преследовании выжившего.</li>","name":"Мемориальный Цветок","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"Большое ожерелье из бисера и недорогих металлов. Одно из самых любимых Джудит. <br><li><b>Умеренно увеличивает</b> скорость движения при преследовании.</li>","name":"Бижутерия","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"Нейлоновая расческа, используемая для придания объема и мягкости волосам.<br><li><b>Умеренно увеличивает</b> продолжительность действия <b>Чистого Зла III</b>.</li><li><b>Слегка увеличивает</b> количество зла, необходимого для достижения <b>Чистого Зла III</b> в первый раз.</li>","name":"Расческа для Волос","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"Крошечный кусочек грязного стекла, вероятно, от какого-то разбитого предмета. Невозможно определить его происхождение.<br><li><b>Чистое Зло I раскрывает ауры Выживших</b>, которых преследовали по крайней мере, <b>1-у секунду</b>.</li><li>Аура остается видимой в течение <b>3-х секунд</b>.</li>","name":"Осколок Стекла","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"Серый кролик, который был вскрыт от шеи до хвоста.<br><li><b>Умеренно сокращает</b> радиус террора <b>Чистого Зла ll</b>.</li><li><b>Умеренно увеличивает</b> радиус террора <b>Чистого Зла III</b>.</li>","name":"Мертвый Кролик","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"Большой и острый осколок разбитого зеркала.<br><li><b>Чистое Зло II открывает ауры выживших</b>, которых преследовали по крайней мере <b>1 сек.</b></li><li>Аура остается видимой в течение <b>5 сек.</b></li>","name":"Осколок Зеркала","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"Дневник Джудит М. Майерс. Большинство страниц изуродованы пугающими и мерзкими рисунками.<br><li>Вы становитесь <b>одержимы</b> одним из выживших. </li><li><b>Значительно увеличивает</b> скорость получаемого зла при преследовании жертвы, которой вы одержимы. </li><li><i>Только одна одержимость за матч.</i></li>","name":"Дневник Джудит","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"Пустой деревянный ящик, в котором некогда хранились украшения.<br><li><b>Значительно увеличивает</b> скорость движения при преследовании.</li>","name":"Коробка с Бижутерией","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"Страница из альбома выпускников 65-го года школы Хэддонфилда, посвященная Джудит Майерс.<br><li><b>Умеренно увеличивает</b> скорость получаемого зла при преследовании выжившего.</li>","name":"В Память о Дж. Майерс","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"Синяя клетчатая ленточка, используемая для завязывания волос.<br><li><b>Значительно увеличивает</b> продолжительность действия <b>Чистого Зла III</b>.</li><li><b>Слегка увеличивает</b> количество зла, необходимого для достижения <b>Чистого Зла III</b> в первый раз.</li>","name":"Бант для Волос","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"Обычное зеркало, в прекрасном состоянии, если не обращать внимания на слои пыли и пудры, покрывающих его.<br><li><b>Чистое Зло II раскрывает ауры Выживших</b>, когда вы наблюдаете за ними в радиусе <b>16-и метров</b>.</li><li>Чистое Зло не может подняться выше <b>II стадии</b>.</li><li><b>Слегка снижает</b> общую скорость передвижения.</li><li>За каждый <b>Удар</b> по жертве вы получаете на <b>100%</b> очков крови больше в категории <b>Зверство</b> и дополнительно на <b>150%</b> очков крови больше в категории <b>Хитрость</b>.</li>","name":"Дамское Зеркало","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"Кусок гранита размером с кулак, взятый с разбитого надгробия.<br><li>Открывает способность <b>убивать здоровых или травмированных выживших</b> во время <b>Чистого Зла III</b>.</li><li><b>Отключает</b> способность преследовать во время <b>Чистого Зла III</b>.</li><li>Убийство выжившего <b>значительно истощает</b> силу Чистого Зла.</li><li><b>Значительно увеличивает</b> количество зла, необходимого для достижения <b>Чистого Зла III</b> в первый раз.</li>","name":"Кусок Надгробия","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"Зеркало, поцарапанное острым предметом.<br><li><b>Чистое Зло l раскрывает ауры Выживших</b>, когда вы наблюдаете за ними в радиусе <b>32 метров</b>.</li><li>Чистое Зло не может подняться выше <b>I стадии</b>.</li><li>За каждый <b>Удар</b> по жертве вы получаете на <b>100%</b> очков больше крови в категории <b>Зверство</b> и дополнительно на <b>200%</b> очков крови больше в категории <b>Хитрость</b>.</li>","name":"Поцарапанное Зеркало","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"Отрезанная прядь светлых волос, перевязанная черной резинкой.<br><li><b>Чрезвычайно увеличивает</b> продолжительность действия <b>Чистого Зла III</b>.</li><li><b>Умеренно увеличивает</b> количество зла, необходимого для достижения <b>Чистого Зла III</b> в первый раз.</li>","name":"Прядь Волос","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"Огромное и тяжелое надгробие, украденное с кладбища Маунтин Синклер, принадлежавшее Джудит Майерс.<br><li>Открывает способность <b>убивать здоровых или травмированных выживших</b> во время <b>Чистого Зла III</b>.</li><li><b>Отключает</b> способность преследовать во время <b>Чистого Зла III</b>.</li><li><b>Чрезвычайно увеличивает</b> количество зла, необходимого для достижения <b>Чистого Зла III</b> в первый раз.</li><li><b>Умеренно снижает</b> скорость передвижения.</li>","name":"Надгробие Джудит","flavor":"«Здесь лежит тело нашей любимой дочери».","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"Клок белокурых волос, силой вырванный с чьей-то головы. Испускает женственный, цветочный аромат.<br><li><b>Неограниченная</b> продолжительность действия <b>Чистого Зла III</b>.</li><li><b>Чрезвычайно увеличивает</b> количество зла, необходимого для достижения <b>Чистого Зла III</b> в первый раз.</li>","name":"Ароматный Клок Волос","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"Ожерелье из мертвых растений.<br><li><b>Слегка сокращает</b> время установки ловушки-Фантома.</li>","name":"Веревочное Ожерелье","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"Крохотные кусочки яичной скорлупы, переливающиеся бледно-золотистым оттенком.<br><li><b>Слегка увеличивает</b> время действия активированной ловушки-фантома.</li>","name":"Измельченная Яичная Скорлупа","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"Комочек черной грязи с останками мух. Поглощается для увеличения выносливости.<br><li><b>Слегка увеличивает</b> расстояние, откуда Ведьма может телепортироваться к своим ловушкам.</li>","name":"Грязь с Мертвой Мухой","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"Мутная вода в старинной стеклянной банке из-под таблеток.<br><li><b>Слегка увеличивает</b> эффективный радиус действия ловушки-Фантома.</li>","name":"Болотная Вода","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"Несколько небольших стеблей, покрытых тонкой сероватой шерстью.<br><li>Показывает ауру Выживших в течение <b>3-х секунд</b>, когда те активируют ловушку-Фантом.</li>","name":"Сережки из Ивы","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"Половина идеально круглой яичной скорлупы.<br><li><b>Умеренно увеличивает</b> время действия активированной ловушки-Фантома.</li>","name":"Половина Яичной Скорлупы","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"Горстка сухих желтоватых крыльев. Поглощаются для увеличения выносливости.<br><li><b>Умеренно увеличивает</b> расстояние, откуда Ведьма может телепортироваться к своим ловушкам.</li>","name":"Крылья Стрекозы","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"Твердое ожерелье из мертвых растений, неаккуратно скрепленных с кипарисовой корой и болотным мхом.<br><li><b>Умеренно сокращает</b> время установки ловушки-Фантома.</li>","name":"Кипарисовое Ожерелье","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"Грязная вода в свернутом листке кувшинки.<br><li><b>Умеренно увеличивает</b> эффективный радиус действия ловушки-фантома.</li>","name":"Кровавая Вода","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"Три хрупких веточки ивы, скрепленные в виде треугольного венка.<br><li>Позволяет видеть ауру Выживших в течение <b>5-и секунд</b>, когда те активируют ловушку-Фантом.</li>","name":"Ивовый Венок","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"Ожерелье из мертвых растений, неаккуратно скрепленных с увядшими лепестками орхидеи и листьями.<br><li><b>Значительно сокращает</b> время установки ловушки-Фантома.</li>","name":"Ожерелье из Болотной Орхидеи","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"Большая болотная цикада, покрытая тонким слоем пепла. Хрустящая. Поглощается для увеличения выносливости.<br><li><b>Значительно увеличивает</b> расстояние, откуда Ведьма может телепортироваться к своим ловушкам.</li>","name":"Сушеная Цикада","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"Бледно-оранжевое яйцо черепахи, разбитое и пустое.<br><li><b>Значительно увеличивает</b> время действия активированной ловушки-Фантома.</li>","name":"Разбитое Яйцо Черепахи","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"Горстка грязи с прожилками темно-красного цвета. Кровавые прослойки наделяют грязь силой.<br><li><b>Значительно увеличивает</b> эффективный радиус действия ловушки-Фантома.</li>","name":"Кровавая Грязь","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"Отрубленная рука мясника из деревни каннибалов. Заточенная внутри эссенция жизни открывает огромный потенциал в силе Ведьмы.<br><li>Грязевые Фантомы обретают плотность.</li><li>Лишает Ведьму способности телепортироваться к ловушкам.</li><li>Дает <b>300%</b> очков крови в категории «Хитрость».</li><li>Перекрывает работу всех других улучшений.</li>","name":"Рука со Шрамом","flavor":"«...» (Мясник).","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"Кандалы, когда-то используемые для содержания пленных и трупов в подвале, в деревне каннибалов. Заточенная внутри эссенция жизни открывает огромный потенциал в силе Ведьмы.<br><li>Выжившие не замечают, что задели ловушки-Фантомы.</li><li>Ловушка не вызывает Фантом Ведьмы.</li>","name":"Ржавые Кандалы","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"Холодное сердце престарелого жителя деревни каннибалов. Заточенная внутри эссенция жизни открывает огромный потенциал в силе Ведьмы.<br><li>Уменьшает радиус сердцебиения Ведьмы до <b>0</b>, когда Выживший попадает в ловушку-Фантом.</li><li>Радиус сердцебиения Грязевых ловушек-Фантомов увеличивается на <b>16 метров</b>.</li>","name":"Бабушкино Сердце","flavor":"«Притащите мне еще кусок этой девчонки» (Бабушка).","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"Ухо глухого мальчика из деревни каннибалов. Изуродовано из-за множества ударов по голове. Заточенная внутри эссенция жизни открывает огромный потенциал в силе Ведьмы.<br><li>Попавшие в ловушку-Фантом Выжившие оглохнут на <b>6 секунд</b>.</li>","name":"Обезображенное Ухо","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"Детский ботинок, давно затерянный на болотах. Заточенная внутри эссенция жизни открывает огромный потенциал в силе Ведьмы.<br><li>Выжившие, находящиеся в радиусе активированной ловушки-Фантома, страдают от эффекта <b><i>Замедление.</i></b></li><li><b>Слегка</b> увеличивает скорость передвижения Ведьмы.</li><li>Лишает Ведьму способности телепортироваться к ловушкам.</li>","name":"Вымокший Ботинок","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"Небольшой кусок ткани, вырванный с платья Лизы Шервуд в день, когда она исчезла. Заточенная внутри эссенция жизни открывает огромный потенциал в силе Ведьмы.<br><li>Ведьма телепортируется к любой ловушке-фантому на уровне.</li><li>Время перезарядки телепортации ловушки-Фантома равно <b>15-и секундам</b>.</li>","name":"Зеленая Тряпка","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"Заплесневелый электрод, все еще пропускающий слабый ток.<br><li><b>Слегка увеличивает</b> дальность <b>«Шоковой терапии»</b>.</li>","name":"Заплесневелый Электрод","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"Белая шахматная фигура коня из кленовой древесины. Этот подаренный стариком предмет пробуждает давние воспоминания Доктора и делает его крайне сосредоточенным.<br><li>Делает видимым радиус эффекта <i>особой атаки</i> <b>«Шоковая терапия»</b>.</li>","name":"Кленовый Конь","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"Стандартная электрошоковая терапия, одна из ежедневных процедур пациентов Мемориального института Лэри. Может вызвать у пациента слабый приступ замешательства.<br><li><b>Слегка ускоряет</b> восстановление <b>«Статического разряда»</b>.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Порядок»</i>:<li>сломанные доски могут быть заменены <i>иллюзией целых досок</i>. Эффект сохраняется до тех пор, пока выживший не приблизится к ним.</li><li>Новая <i>иллюзорная доска</i> случайным образом появляется на месте одной из сломанных каждые <b>20 сек.</b></li><li><b>Доктор</b> при этом видит ауры <i>иллюзорных досок</i>.</li>","name":"«Порядок» - Класс I","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"Электрошоковая процедура с глубоко проникающими волнами, используемая для облегчения симптомов различных психических заболеваний. Подпитываемая искрой Картера, может вызвать у пациента легкую тревожность.<br><li><b>Слегка увеличивает</b> радиус террора, когда <b>«Статический разряд»</b> готов.</li><li><b>Слегка уменьшает</b> радиус террора, когда <b>«Статический разряд»</b> восстанавливается.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Спокойствие»</i>:<li><b>Безумие II</b>: выжившие <b>периодически</b> ощущают отдаленный <i>иллюзорный радиус террора</i>.</li><li><b>Безумие III</b>: выжившие <b>постоянно</b> ощущают отдаленный <i>иллюзорный радиус террора</i>.</li>","name":"«Спокойствие» - Класс I","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"Аудиокассета с проекта «Пробуждение», содержащая в основном белый шум. Прослушав ее, Доктор чувствует озарение и пробует альтернативные методы лечения.<br><li><i>Особая способность</i> <b>«Шоковая терапия»</b> теперь поражает жертв не в конусе, а в кольце, появляющемся в <b>8 м</b> от <b>Доктора</b> с внешним радиусом в <b>4,2 м</b> и внутренним радиусом в <b>3 м</b>.</li>","name":"Сломанная Кассета","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"Практически новое стандартное оборудование для электрошоковых процедур.<br><li><b>Умеренно увеличивает</b> дальность <b>«Шоковой терапии»</b>.</li>","name":"Отполированный Электрод","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"Аудиокассета с проекта «Пробуждение», содержащая нетронутые оригинальные показания жертвы. Прослушав ее, Доктор чувствует озарение и пробует альтернативные методы лечения.<br><li><i>Особая способность</i> <b>«Шоковая терапия»</b> теперь поражает жертв не в конусе, а на прямой длиной <b>24 м</b> и шириной <b>2 м</b>.</li>","name":"Кассета с записью показаний","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"Экспериментальная электрошоковая процедура, разработанная в Тумане. Использует импульс для создания связи между разумами Доктора и пациента. Может вызывать у пациента слабые галлюцинации.<br><li>Ауры выживших подсвечиваются на <b>1 сек.</b> каждый раз, когда их уровень <b>безумия</b> повышается.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Усмирение»</i>:</li><li><b>умеренно увеличивает</b> <i>время действия галлюцинаций — </i>иллюзорных Докторов</li><li><b>Доктор</b> при этом видит ауры <i>иллюзорных Докторов</i>.</li>","name":"«Усмирение» - Класс II","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"Эта электрошоковая терапия с мощным импульсом — одна из ежедневных процедур пациентов Мемориального института Лэри. Может вызвать у пациента довольно сильный приступ замешательства.<br><li><b>Умеренно ускоряет</b> восстановление <b>«Статического разряда»</b>.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Порядок»</i>:<li>сломанные доски могут быть заменены <i>иллюзией целых досок</i>. Эффект сохраняется до тех пор, пока выживший не приблизится к ним.</li><li>Новая <i>иллюзорная доска</i> случайным образом появляется на месте одной из сломанных каждые <b>20 сек.</b></li><li><b>Доктор</b> при этом видит ауры <i>иллюзорных досок</i>.</li><span class=\\"FlavorText\\">«Побочные эффекты крайне маловероятны» (Мемориальный институт Лэри).</span>","name":"«Порядок» - Класс II","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"Электрошоковая процедура проекта «Пробуждение», применявшаяся в качестве наказания. Использует дозированный, но мощный разряд тока. Может вызвать у пациента умеренную паранойю.<br><li><b>Слегка уменьшает</b> задержку срабатывания <b>«Шоковой терапии»</b>.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Дисциплина»</i>:<li><b>Безумие II</b>: во время погони выжившие видят <i>иллюзорное красное свечение</i> и чувствуют <i>радиус террора</i> <b>Доктора</b> так, будто он находится прямо у них за спиной. После окончания погони эффект действует <b>6 сек.</b>.</li><li><b>Безумие III</b>: <i>иллюзорное красное свечение</i> и <i>радиус террора</i> присутствуют все время.</li><li><b>Доктор</b> при этом видит <i>иллюзорное красное свечение</i>.</li><span class=\\"FlavorText\\">«Мы очень мягко перевоспитываем пациентов» (Мемориальный институт Лэри).</span>","name":"«Дисциплина» - Класс II","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"Рискованная электрошоковая процедура с глубоко проникающими волнами, используемая для облегчения симптомов различных психических заболеваний. Подпитываемая искрой Картера, может вызвать у пациента умеренную тревожность.<br><li><b>Умеренно увеличивает</b> радиус террора, когда <b>«Статический разряд»</b> готов.</li><li><b>Умеренно уменьшает</b> радиус террора, когда <b>«Статический разряд»</b> восстанавливается.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Спокойствие»</i>:<li><b>Безумие II</b>: выжившие <b>периодически</b> ощущают отдаленный <i>иллюзорный радиус террора</i>.</li><li><b>Безумие III</b>: выжившие <b>постоянно</b> ощущают отдаленный <i>иллюзорный радиус террора</i>.</li><span class=\\"FlavorText\\">«Шоковая терапия — одна из самых безопасных медицинских процедур» (Мемориальный институт Лэри).</span>","name":"«Спокойствие» - Класс II","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"Экспериментальный электрод, способный долго выдерживать мощный разряд.<br><li><b>Значительно увеличивает</b> дальность <b>«Шоковой терапии»</b>.</li>","name":"Электрод Для Мощного Импульса","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"Экспериментальная электрошоковая процедура, разработанная в Тумане. Использует мощный импульс для создания связи между разумами Доктора и пациента. Может вызывать у пациента сильные галлюцинации.<br><li>Ауры выживших подсвечиваются на <b>2 сек.</b> каждый раз, когда их уровень <b>безумия</b> повышается.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Усмирение»</i>:<li><b>умеренно увеличивает</b> время действия галлюцинаций — <i>иллюзорных Докторов</i>.</li><li><b>Доктор</b> при этом видит ауры <i>иллюзорных</i> Докторов.</li>","name":"«Усмирение» - Класс III","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"Электрошоковая процедура проекта «Пробуждение», применявшаяся в качестве наказания. Использует дозированный, но крайне мощный разряд тока. Может вызвать у пациента серьезную паранойю.<br><li><b>Умеренно уменьшает</b> задержку срабатывания <b>«Шоковой терапии»</b>.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Дисциплина»</i>:<li><b>Безумие II</b>: во время погони выжившие видят <i>иллюзорное красное свечение</i> и чувствуют <i>радиус террора</i> <b>Доктора</b> так, будто он находится прямо у них за спиной. После окончания погони эффект действует <b>6 сек.</b>.</li><li><b>Безумие III</b>: <i>иллюзорное красное свечение</i> и <i>радиус террора</i> присутствуют все время.</li><li><b>Доктор</b> при этом видит <i>иллюзорное красное свечение</i>.</li><span class=\\"FlavorText\\">«Один из главных наших принципов — уважение к пациентам» (Мемориальный институт Лэри).</span>","name":"«Дисциплина» - Класс III","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"Экспериментальная электрошоковая процедура, разработанная в Тумане. Снабжена небрежными комментариями. Использует невыносимой силы импульс для создания связи между разумами Доктора и пациента. Может вызывать у пациента страшнейшие галлюцинации.<br><li>Ауры выживших подсвечиваются на <b>3 сек.</b> каждый раз, когда их уровень <b>безумия</b> повышается.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Усмирение»</i>:<br><li><b>умеренно увеличивает</b> время действия галлюцинаций — <i>иллюзорных Докторов</i>.</li><li><b>Доктор</b> при этом видит ауры <i>иллюзорных Докторов</i>.</li><span class=\\"FlavorText\\">«Я ВИЖУ ИХ <u>ОТВРАТИТЕЛЬНЫЕ</u> БОЛЕЗНИ» (заметки без подписи).</span>","name":"«Усмирение» - Заметки Картера","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"Экспериментальная электрошоковая процедура, назначенная самим доктором Германом Картером. Мощный и непрерывный импульс вводит пациента в состояние сильного замешательства и дезориентации.<br><li><b>Значительно ускоряет</b> восстановление <b>«Статического разряда»</b>.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Порядок»</i>:<li>сломанные доски могут быть заменены <i>иллюзией целых досок</i>. Эффект сохраняется до тех пор, пока выживший не приблизится к ним.</li><li>Новая <i>иллюзорная доска</i> случайным образом появляется на месте одной из сломанных каждые <b>20 сек.</b></li><li><b>Доктор</b> при этом видит ауры <i>иллюзорных досок</i>.</li><span class=\\"FlavorText\\">«Импульс должен быть <u>постоянным</u>, на одном уровне» (Г. Картер).</span>","name":"«Порядок» - Заметки Картера","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"Электрошоковая процедура проекта «Пробуждение», применявшаяся в качестве наказания. Назначалась самим доктором Германом Картером. Невыносимо мощный разряд тока вызывает у пациента беспросветную паранойю.<br><li><b>Значительно уменьшает</b> задержку срабатывания <b>«Шоковой терапии»</b>.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Дисциплина»</i>:<li><b>Безумие II</b>: во время погони выжившие видят <i>иллюзорное красное свечение</i> и чувствуют <i>радиус террора</i> <b>Доктора</b> так, будто он находится прямо у них за спиной. После окончания погони эффект действует <b>6 сек.</b>.</li><li><b>Безумие III</b>: <i>иллюзорное красное свечение</i> и <i>радиус террора</i> присутствуют все время.</li><li><b>Доктор</b> при этом видит <i>иллюзорное красное свечение</i>.</li><span class=\\"FlavorText\\">«Во избежание рецидива всегда используйте максимальный уровень разряда для приучения особо упертых пациентов к дисциплине» (Г. Картер).</span>","name":"«Дисциплина» - Заметки Картера","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"Экспериментальная электрошоковая процедура, назначенная самим доктором Германом Картером. Использует глубоко проникающие волны для облегчения симптомов различных психических заболеваний. Подпитываемая искрой Картера, может вызвать у пациента чувство беспокойства и неконтролируемого страха.<br><li><b>Значительно увеличивает</b> радиус террора при готовности <b>«Статического разряда»</b>.</li><li><b>Значительно уменьшает</b> радиус террора во время восстановления <b>«Статического разряда»</b>.</li><br>Выжившие с эффектом <b>«Безумие»</b> страдают от <i>психического расстройства «Спокойствие»</i>:<li><b>Безумие II</b>: выжившие <b>периодически</b> ощущают отдаленный <i>иллюзорный радиус террора</i>.</li><li><b>Безумие III</b>: выжившие <b>постоянно</b> ощущают отдаленный <i>иллюзорный радиус террора</i>.</li><span class=\\"FlavorText\\">«Сильные припадки вызывают кататонию. Но хотя бы на это время я обретаю <u>спокойствие</u>» (Г. Картер).</span>","name":"«Спокойствие» - Заметки Картера","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"Шахматная фигура короля. Похожа на стеклянную, но на самом деле создана из самого Тумана. Присутствие Сущности внутри нее может сломить даже самый стойкий разум.<br><br>Выжившие с эффектом <b>«Безумие»</b> страдают от одного из следующих <i>психических расстройств: «Спокойствие», «Дисциплина», «Порядок»</i> или <i>«Усмирение»</i>.<li>Выжившие <b>периодически</b> слышат отдаленный <i>иллюзорный радиус террора</i>.</li><li>Во время погони выжившие видят <i>иллюзорное красное свечение</i> и чувствуют <i>радиус террора</i> <b>Доктора</b> так, будто он находится прямо у них за спиной. При <b>Безумии II</b> эффект действует еще <b>6 сек.</b> после окончания погони; при <b>Безумии III</b> эффект присутствует все время.</li><li>Сломанные доски могут быть заменены <i>иллюзией целых досок</i>. Эффект сохраняется до тех пор, пока выживший не приблизится к ним. <i>Новая иллюзорная доска</i> случайным образом появляется на месте одной из сломанных каждые <b>20 сек.</b></li><li><b>Умеренно увеличивает</b> время действия галлюцинаций — <i>иллюзорных Докторов</i>.</li><li><b>Доктор</b> при этом видит <i>иллюзорное красное свечение</i>, а также ауры <i>иллюзорных Докторов и досок</i>.</li>","name":"Радужный Король","flavor":"«Вглядываться в мутную гладь радужного стекла — все равно, что погружаться в безумие».","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"Шахматная фигура ферзя. Похожа на стеклянную, но на самом деле создана из самого Тумана. Довольно сильно бьет током любого, кто к ней прикоснется.<br><li>На всех выживших, подвергшихся действию <i>особых способностей</i> <b>«Шоковая терапия»</b> или <b>«Статический разряд»</b>, накладывается <b>«Статический заряд»</b>. <b>«Статический заряд»</b> <i>рассеивается</i> только после срабатывания.</li><li>Если <i>особая способность</i> <b>«Шоковая терапия»</b> или <b>«Статический разряд»</b> одновременно поражает нескольких выживших, находящихся не более чем в <b>4 м</b> друг от друга, <b>«Статический заряд»</b> на них не накладывается.</li><li>Когда выживший оказывается в пределах <b>4 м</b> от другого выжившего со <b>«Статическим зарядом»</b>, его бьет током; эффекты удара такие же, как у <i>особой способности</i> <b>«Шоковая терапия»</b>. После этого <b>«Статический заряд»</b> мгновенно <i>рассеивается</i>.</li>","name":"Радужный ферзь","flavor":"«Как только мы создадим эффективный метод лечения, можно будет сосредоточиться на его внедрении» (Г. Картер).","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"Этот оселок слишком груб для нормальной заточки. Поврежденное им лезвие наносит ужасные рваные раны.<br><li>Вопли жертвы после удара становятся громче на <b>50%</b> до полного излечения.</li>","name":"Грубый Оселок","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"Простой клочок ткани, которым удобно перевязывать лопнувшие волдыри и вытирать лицо.<br><li><b>+10%</b> к скорости полета топора.</li>","name":"Пожелтевшая тряпка","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"Топорище, плотно обмотанное лейкопластырем.<br><li><b>Слегка уменьшает</b> время между повторными бросками топоров.</li><li>Эффект суммируется.</li>","name":"Обмотанная Рукоять","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"Яд, наносимый на лезвия топоров. Токсин мухомора притупляет разум.<br><li>После удара жертва страдает от эффекта <b><i>«Слепота»</i></b> в течение <b>60 сек.</b></li><li>Эффект не суммируется.</li>","name":"Яд Мухомора","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"Топор с необычным балансом для нанесения тяжелых ударов. Требует твердой руки и недюжинной силы.<br><li>При попадании цель получает эффект <b>«Обездвиживание»</b> на <b>10 сек.</b></li>","name":"Утяжеленный топор","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"Медная брошь, потерявшая былой рисунок, но тем не менее до блеска отполированная. Взята с трупа одной особенно трудной добычи.<br><li><b>Слегка увеличивает</b> скорость передвижения во время заряда броска топора.</li><li>Эффект суммируется.</li>","name":"Сияющая Брошь","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"Отполированная рукоять позволяет более искусно обращаться с оружием убийства.<br><li><b>Умеренно уменьшает</b> время между повторными бросками топоров.</li><li>Эффект суммируется.</li>","name":"Дубовое Топорище","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"Венок, сотканный из травы манника. Память о потере малышей наполняет Охотницу яростью и делает ее сосредоточенной.<br><li><b>Умеренно уменьшает</b> время, необходимое для заряда броска топоров.</li><li>Эффект суммируется.</li>","name":"Венок из Манника","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"Эту кожаную петлю можно прикрепить к ремню и использовать для переноса инструментов.<br><li>Вы начинаете матч с <b>1-м дополнительным</b> топором.</li><li>Увеличивает максимальное количество носимых одновременно топоров на <b>1</b>.</li><li>Эффект суммируется.</li>","name":"Кожаная Петля","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"Чай из этих сушеных лепестков облегчает симптомы усталости и перенапряжения.<br><li><b>+20%</b> к скорости полета топорика.</li>","name":"Розовый корень","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"Пара кожаных перчаток, которые защищают руки и обеспечивают крепкую хватку.<br><li><b>Умеренно уменьшают</b> время вынимания топоров из шкафчика.</li>","name":"Перчатки из Оленевой Кожи","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"Токсин, наносимый на лезвия топоров. Попадая в кровь, этот мутный раствор на основе яда гадюки лишает жертву сил.<br><li>После удара жертва страдает от эффекта <b>«Усталость»</b> в течение <b>5 сек.</b></li>","name":"Ядовитая Смесь","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"Лезвия этих топоров покрыты старой и легко осыпающейся ржавчиной, из-за чего полученные раны крайне трудно излечить.<br><li>Жертва удара страдает от эффекта <b><i>«Травма»</i></b>.</li>","name":"Ржавый Топор","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"Чистый и яркий платок, украшенный рисунками цветов. Память о потере малышей наполняет Охотницу яростью и делает ее сосредоточенной.<br><li><b>Значительно уменьшает</b> время, необходимое для заряда броска топоров.</li><li>Эффект суммируется.</li>","name":"Бабушкин Платок","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"Большой разгрузочный пояс, снятый с тела солдата. Многочисленные карманы и лямки крайне удобны для переноса инструментов.<br><li>Вы начинаете матч с <b>2-я дополнительными</b> топорами.</li><li>Увеличивает максимальное количество носимых одновременно топоров на <b>2</b>.</li><li>Эффект суммируется.</li>","name":"Разгрузочный Пояс","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"Неизвестная смесь, обладающая зловещим свечением.<br><li>После удара топором, аура жертвы видна вам на протяжении <b>5-и секунд</b>.</li>","name":"Светящаяся Смесь","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"Лезвия этих топоров измазаны отвратительной дрянью, прикосновение к которой приводит к печальным последствиям.<br><li>Жертва удара страдает от эффектов <b><i>«Травма»</i></b> и <b><i>«Кровотечение»</i></b> до полного излечения.</li><li>Эффект не суммируется.</li>","name":"Испачканный Топор","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"Грубо вырезанная фигурка лисы в несколько сантиметров высотой. Напоминание о том, что скрытность и смекалка зачастую помогают больше, чем грубая сила.<br><li>Дает эффект <i><b>«Незаметность»</b></i> на <b>15 сек.</b> после пополнения запаса.</li>","name":"Деревянная лиса","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"Как будто сделанный из стекла, этот топор — порождение самого Тумана. Лезвие его отдает теплом и немного вибрирует, наполненное силой Сущности.<br><li>Попадания топором сразу приводят здоровых выживших в состояние при смерти.</li><li>Максимальное количество носимых топоров — <b>1</b>.</li>","name":"Радужный Топор","flavor":"«Радужное стекло рассекает и плоть, и душу».","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"Куски ткани, принадлежавшие мертвому солдату. Защищают и фиксируют ноги в лодыжках и голенях.<br><li>Без топоров Охотница движется со скоростью <b>4,6 м/с</b>.</li>","name":"Солдатские портянки","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"Прогорклое масло, используемое в качестве смазки низкого качества.<br><br><li><b>Слегка уменьшает</b> время перезарядки бензопилы при попадании по выжившему.</li>","name":"Растительное Масло","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"Чистая свеча зажигания для бензопилы.<br><br><li><b>Слегка ускоряет</b> восстановление зарядов.</li>","name":"Свеча Зажигания","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"Напильник, служащий для заточки зубьев бензопилы.<br><li><b>Слегка уменьшает</b> продолжительность ярости.</li>","name":"Напильник для Бензопилы","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"Механическое устройство, ограничивающее единовременную подачу топлива в малые двигатели, тем самым обеспечивая постоянную и безопасную скорость.<br><br><li>Атаки бензопилой не гарантируют ввод выживших в предсмертное состояние.</li><li>Вы получаете на <b>100%</b> больше очков крови за действия с бензопилой.</li>","name":"Ограничитель Скорости","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Закачивает больше бензина в систему зажигания, позволяя быстро и резко завести пилу.<br><br><li><b>Умеренно ускоряет</b> восстановление зарядов.</li>","name":"Сжимной Насос","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"Прочная запасная шина для длинных цепей бензопилы.<br><br><li><b>Слегка увеличивает</b> доступный завод до вспышки ярости.</li>","name":"Длинное Реле для Бензопилы","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"Бензопила покрыта царапинами, оставленными раскаленным клинком. Воспоминания о взбучках держат хозяина бензопилы в постоянном страхе перед неудачей.<br><br><li><b>Слегка увеличивает</b> скорость передвижения при использовании бензопилы.</li><li><b>Слегка увеличивает</b> время завода бензопилы.</li>","name":"Метки Ножом","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"Самодельная выхлопная система из черных газовых труб.<br><br><li><b>Умеренно уменьшает</b> продолжительность ярости.</li>","name":"Самодельный Глушитель","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"Большая миска горячего чили утоляет голод и придает сил.<br><br><li><b>Слегка увеличивает</b> продолжительность рывка при трате жетона.</li><li><b>Слегка увеличивает</b> дополнительный промежуток при размахивании бензопилой.</li><br>","name":"Чили","flavor":"«У меня есть отличное барбекю!» (Дрейтон Сойер).","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"Густая смесь желтоватого цвета, созданная Сойерами. Используется как универсальная домашняя смазка.<br><br><li><b>Умеренно увеличивает</b> доступный завод до вспышки ярости.</li>","name":"Смазка","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"Грубые насечки на бензопиле — наказание от зверя, живущего в тумане. Воспоминания о взбучках держат хозяина бензопилы в постоянном страхе перед неудачей.<br><br><li><b>Умеренно увеличивает</b> скорость передвижения при использовании бензопилы.</li><li><b>Слегка увеличивает</b> время завода бензопилы.</li>","name":"Метки Зверя","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"Цепь с необыкновенно большими зубьями, оставляющая жертв покалеченными даже после лечения.<br><li>На раненных бензопилой выживших накладывается эффект <b>«Травма»</b>.","name":"Ужасная цепь","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"Масло, специально разработанное для бензопил. Особая добавка предотвращает выброс масла.<br><br><li>Если вы смертельно раните выжившего бензопилой, когда в пределах радиуса террора нет других выживших, аура раненого выжившего не будет видна его товарищам в течение <b>20 сек.</b></li>","name":"Производственная Смазка","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"Эта цепь смазана мерзким веществом, изнуряющим любого, кто к нему прикоснется.<br><br><li>Удары бензопилой заставляют выживших ронять предметы.</li>","name":"Грязные цепи","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"Инструмент, позволяющий заточить зубья бензопилы так, чтобы та съедала больше «дерева».<br><li><b>Увеличивает</b> количество зарядов.</li><li><b>Слегка увеличивает</b> время завода бензопилы.</li><li><b>Слегка уменьшает</b> максимальную скорость при размахивании бензопилой.</li>","name":"Ограничитель для Заточки Цепи","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"Легкая и прочная рама бензопилы с короткой направляющей планкой. Облегчает использование бензопилы.<br><br><li>Поддерживая завод бензопилы, вы видите ауры выживших в радиусе <b>8 м.</b></li>","name":"Облегченное Шасси","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"Цепь покрыта пятнами ржавчины, поэтому раны, нанесенные ей, особенно трудно вылечить.<br><br><li>На раненых бензопилой выживших в течение <b>90 сек.</b> действует эффект <b><i>«Ослабление»</i></b>.</li><li>Эффект не суммируется.</li>","name":"Ржавая Цепь","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"Большая миска острого чили, знаменитого благодаря исключительному мясу.<br><br><li><b>Умеренно увеличивает</b> продолжительность рывка при трате жетона.</li><li><b>Умеренно увеличивает</b> дополнительный промежуток при взмахах бензопилой.</li><br>","name":"Чили-Победитель Состязания","flavor":"«Весь секрет в мясе» (Дрейтон Сойер).","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"Тонкий и гладкий ломтик свежего мяса. Кровеносные сосуды переливаются и сияют, словно в них еще течет жизнь.<br><br><li>Удар по выжившему бензопилой восстанавливает заряды.</li><li>Ограничивает максимальную продолжительность ярости до 8 сек.</li><br>","name":"Переливчатая плоть","flavor":"«Порой бывает сложно поверить, что все происходящее — правда. Ущипни себя и убедись, что это так» (Пэм Джонс).","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"Небрежно нацарапанная инструкция для правильной настройки и регулировки карбюратора бензопилы.<br><li>При начале рывка с бензопилой все заряды автоматически расходуются.</li><li><b>Слегка продлевает</b> рывок с бензопилой.</li><li><b>Слегка уменьшает</b> максимальную скорость при размахивании бензопилой.</li>","name":"Руководство по Настройке Карбюратора","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"Детская рубашка в желто-оранжевую полоску. На бирке вышито имя владельца — «Джесси».<br>Когда выжившие находятся в <b>Мире Снов</b>:<li><b>слегка увеличивает</b> откат процессов <i>лечения</i> и <i>починки</i>.</li>","name":"Шерстяная Рубашка","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"Бело-синий брусок с изображением пасущихся овечек и буквы «О».<li>Когда выживший взаимодействует с <b>силками сна</b> или <b>доской сна</b>, на него накладывается <b>эффект «Слепота»</b> на 30 секунд.</li>","name":"Кубик с Овцами","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"Детский рисунок, неизвестно чей.<li>Вы дополнительно получаете <b>200 очков крови</b> в категории <b>«Хитрость»</b>, когда выживший попадает в <b>силки сна</b>.</li><li><b>Силки сна</b> <b>значительно меньше</b> замедляют выживших.</li>","name":"Детский Рисунок","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"Небольшие грабли. Необходимый инструмент в арсенале любого опытного садовника.<br>Заменяет <b>силки сна</b> на <b>доски сна</b>.<li>7 <b>жетонов сна</b>.</li>","name":"Садовые Грабли","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"Самодельный инструмент, облегчающий подрезку кустарников.<li>Заменяет <b>силки сна</b> на <b>доски сна</b>.</li><li>7 <b>жетонов сна</b>.</li><li>Когда выжившие взаимодействуют с <b>досками сна</b>, их ауры подсвечиваются <i>Кошмару</i> на <b>4 сек.</b></li>","name":"Прототип Перчатки с Лезвиями","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"Прочная веревка, которую можно привязать к чему угодно.<br>В <b>Мире Снов</b> <li>шум, который выжившие производят во время починки генераторов, слышен на <b>8 м дальше обычного</b>.</li>","name":"Крепкая Веревка","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"Грубый размашистый набросок. Нарисован углем и подписан «Нэнси Х.».<li><b>Слегка ускоряет</b> восстановление <b>«Смещения во сне»</b> за каждого выжившего в <b>Мире Снов</b>.</li>","name":"Эскиз Нэнси","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"Детское платьице зеленого цвета с шелковистой белой лентой.<br>Когда выжившие находятся в <b>Мире Снов</b>:<li><b>слегка повышает</b> откат процессов <i>лечения</i> и <i>починки</i>.</li><li>Когда выжившие не проходят проверку реакции при <i>лечении</i> или <i>починке</i>, их ауры подсвечиваются <i>Кошмару</i> на <b>3 секунды</b>.</li>","name":"Зеленое Платье","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"Бело-фиолетовый брусок с изображением спящей кошки и буквы «К».<li>Когда выживший взаимодействует с <b>силками сна</b> или <b>доской сна</b>, на него накладывается <b>эффект «Кровотечение»</b> на 60 секунд.</li>","name":"Кубик с Кошкой","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"Бело-красный брусок с изображением ставшего на дыбы единорога и буквы «Е».<li>Когда выживший взаимодействует с <b>силками сна</b> или <b>доской сна</b>, на него накладывается <b>эффект «Слепота»</b> на 60 секунд.</li>","name":"Кубик с Единорогом","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"Ржавая, но все еще прочная цепь, которую использовали для крепления качелей.<br>В <b>Мире Снов</b> <li>шаги выживших звучат на <b>50% громче</b>.</li>","name":"Цепь от Качелей","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"Портрет, нарисованный Нэнси Холбрук в Бэдхеме. Хранится как памятная вещица.<li><b>Умеренно ускоряет</b> восстановление <b>«Смещения во сне»</b> за каждого выжившего в <b>Мире Снов</b>.</li>","name":"Шедевр Нэнси","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"Длинная двойная скакалка, вытертая за годы использования.<br>В <b>Мире Снов</b> <li>выжившие кричат от боли на <b>50% громче</b>.</li>","name":"Скакалка","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"Детское платьице нежно-голубого цвета с белым кружевом. Передняя часть разодрана в клочья.<br>Когда выжившие находятся в <b>Мире Снов</b>:<li><b>слегка повышает</b> откат процессов <i>лечения</i> и <i>починки</i>.</li><li>Когда выжившие не проходят проверку реакции при <i>лечении</i> или <i>починке</i>, их ауры подсвечиваются <i>Кошмару</i> на <b>4 секунды</b>.</li>","name":"Голубое Платье","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"Пустой пузырек из-под лекарства «Зонерал».<li>Выжившие будут периодически видеть <i>Кошмара</i> на меньшем расстоянии (от <b>12</b> до <b>24 м</b>).</li><li>Если <i>Кошмар</i> находится на расстоянии более <b>24 м</b>, выжившие не смогут его увидеть.</li><li>Когда <i>Кошмар</i> несет выжившего, бодрствующие выжившие не могут его увидеть.</li>","name":"Пузырек для Лекарства","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"Банка крайне летучего и огнеопасного вещества.<li>Заменяет <b>силки сна</b> на <b>доски сна</b>.</li><li>7 <b>жетонов сна</b>.</li><li>Когда выжившие взаимодействуют с <b>досками сна</b>, их ауры подсвечиваются <i>Кошмару</i> на <b>6 сек.</b></li>","name":"Растворитель для Краски","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"Большая фотография, сделанная в детском саду Бэдхема. На ней изображены жизнерадостные малыши из группы 1994–1995 гг.<li>Действие <b>«Смещения во сне»</b> больше нельзя отменить.</li><li>Пока <b>Кошмар</b> применяет способность <b>«Смещение во сне»</b>, все генераторы будут источать кровь.</li><li>Изображение <i>Кошмара</i> больше не появляется при использовании <b>«Смещения во сне»</b>.</li>","name":"Групповое Фото","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"Обожженный деревянный брусок, покрытый глубокими царапинами. На нем можно различить только букву «Z».<li>Когда выживший взаимодействует с <b>силками сна</b> или <b>досками сна</b>, на него накладывается эффект <b>«Кровотечение»</b> на <b>60 сек</b>.</li><li>Если выживший здоров, то будет истекать кровью все время, что действует эффект <b>«Кровотечение»</b>.</li>","name":"Кубик с буквой «Z»","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"Большая малярная кисть, с которой стекает багряная краска.<li>Все выжившие начинают матч в <b>Мире Снов</b>.</li><li>Выжившие не просыпаются от неудачных проверок реакции, когда находятся в <b>Мире Снов</b>.</li>","name":"Красная Кисть","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"Черная картонная коробка с фотографиями.<br>Пока выжившие находятся в <b>Мире Снов</b><li>, открытые недавно врата блокируются на <b>15 сек.</b></li>","name":"Черная Коробка","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"Модификация для коробки Пилы - скользкие внутренности коробки затрудняют поиск ключа.<br><li><b>Слегка увеличивает</b> шанс появления окна проверки реакции во время обыска коробки Пилы.</li>","name":"Рабочая Смазка","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"Символ саморазрушения. Воспоминания о своей прошлой жизни наполняют Аманду решимостью.<br><li><b>Слегка уменьшает</b> штрафное время после неудачной атаки из засады.</li>","name":"Разбитый Шприц","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"Медицинская карта больного раком мужчины. Наполняет читающего страхом и заставляет действовать безрассудно.<br><li><b>Слегка уменьшает</b> время подготовки к атаке из засады.</li>","name":"Медкарта Джона","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"Кожаные ремни, опоясывают мешающие движению детали одежды.<br><li><b>Слегка уменьшают</b> время перехода в режим скрытности (перемещение пригнувшись).</li>","name":"Боевые Ремни","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"Запись Пилы, объясняющего правила игры Аманде. Воспоминания о своей прошлой жизни наполняют Аманду решимостью.<br><li><b>Слегка уменьшает</b> время подготовки к атаке из засады.</li><li><b>Слегка снижает</b> штрафное время после неудачной атаки из засады.</li>","name":"Видеокассета","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"Модификация для Обратного Капкана - острые лезвия внутри ловушки ранят жертву при каждом ее движении.<br><li>Выжившие с Обратным Капканом на голове страдают от эффекта <b><i>Кровотечение.</b></i></li>","name":"Лезвия","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"Модификация для коробки Пилы - колючая проволока затрудняет процесс поиска ключа в коробке.<br><li><b>Умеренно увеличивает</b> шанс появления окна проверки реакции во время обыска коробки Пилы.</li>","name":"Колючая Проволока","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"Деревянный ящик, обшитый шелком внутри. Является частью завещания. <br><li><b>Увеличивает</b> количество обратных капканов в инвентаре на <b>1</b>.<br>","name":"Завещание","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"Модификация для Обратного Капкана - лицевая маска, пропитанная снотворным. Частично удушает жертву, и ей становится тяжелее сконцентрироваться.<br><li>Выжившие с Обратным Капканом на голове страдают от эффекта <b><i>Слепота.</b></i></li><li>Не влияет на подсветку Коробок Пилы.</li>","name":"Лицевая Маска","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"Модификация для Обратного Капкана - несмертельный яд, который тотально ослабляет жертву, из-за чего та никак не может перевести дух.<br><li>Выжившие с Обратным Капканом на голове страдают от эффекта <b><i>Усталость.</b></i></li>","name":"Токсин Медленного Действия","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"Модификация для обратного капкана — дополнительные клыки, покрытые ржавчиной. С ними лечение ран становится сложной задачей.<br><li>Раненые выжившие, попавшие в обратный капкан, страдают от эффекта <i><b>«Травма»</b></i>.</li>","name":"Ржавые Клыки","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"Гениальный, но ужасающий дизайн ловушки, набросанный в деталях на бумаге, и подписанный Пилой.<br><li><b>Увеличивает</b> количество коробок Пилы на <b>1</b>.</li>","name":"Набросок Пилы","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"Модификация для Коробки Пилы - лезвия-ловушки не позволяют Выжившим быстро обыскать Коробку, не порезав при этом запястья.<br><li><b>Чрезвычайно увеличивает</b> штраф за провал Проверки Реакции во время обыска Коробки Пилы.</li>","name":"Лезвия-ловушки","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"Несколько металлических деталей, - они позволяют создавать более трудные для поиска коробки Пилы, а также ускоряют установку обратных капканов.<br><li><b>Слегка увеличивает</b> время поиска ключа в коробках пилы для выживших.</li><li><b>Слегка уменьшает</b> время, необходимое для установки обратных капканов.</li>","name":"Мешок с Шестеренками","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"Модифицированный таймер. Пружина в механизме заставляет шестеренки вращаться быстрее.<br><li><b>Умеренно уменьшает</b> время таймера обратного отсчета у обратных капканов.</li>","name":"Модифицированный Таймер","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"Гениальный, но ужасающий дизайн ловушки, перенесенный на бумагу и подписанный самим Пилой.<br><li><b>Увеличивает</b> количество коробок Пилы на <b>1</b>.</li><li><b>Умеренно увеличивает</b> время таймера обратного отсчета у обратных капканов.</li>","name":"Подробный План Пилы","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"Коллекция металлических деталей, - они позволяют создавать неимоверно трудные для поиска коробки Пилы, а также ускоряют установку обратных капканов.<br><li><b>Значительно увеличивает</b> время поиска ключа в коробках Пилы для выживших.</li><li><b>Умеренно уменьшает</b> время, необходимое для установки обратных капканов.</li>","name":"Ящик с Шестеренками","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"Черная металлическая коробка, внутри - нож, различные медицинские препараты, повязки и бинты. Глубокие порезы ослабляют стресс и обостряют чувства.<br><li><b>Убирает</b> у Свиньи способность видеть ауры Коробок Пилы.</li><li><b>Вы получаете уведомление,</b> когда Выживший освобождается от Обратного Капкана.</li><li>Ауры Выживших, которые освобождаются от Капкана, раскрываются вам на <b>6 секунд</b>.</li>","name":"Секрет Аманды","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"Не у всех игр должны быть одинаковые правила.<br><li><b>Убирает</b> у Выживших способность видеть ауры Коробок Пилы до момента активации таймера Обратного Капкана.</li>","name":"Набор правил №2","flavor":"«Слушайте правила игры» (Пила).","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"Письмо, шантажирующее Аманду. Наполняет читающего яростью и заставляет сосредоточиться.<br><li>Пригнувшись, вы видите ауры выживших в радиусе 12 м.</li><li><b>Уменьшает</b> количество обратных капканов в инвентаре на <b>3</b>.</li><li><b>Уменьшает</b> количество коробок Пилы на <b>2</b>.</li>","name":"Письмо Аманды","flavor":"«Аманда, ты была с Сесилом в ту ночь, когда Джилл потеряла Гидеона. Ты убила их ребенка. Ты это знаешь, и я тоже» (письмо Аманды).","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"Заплесневелые стельки, помогают успокоить уставшие ноги.<br><li><b>Умеренно</b> увеличивает скорость передвижения во время подготовки бутылок.</li>","name":"Вонючие Стельки","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"Оранжевое перо, мягкое на ощупь.<br><li><b>Слегка</b> снижает временной промежуток между бросками бутылок.</li>","name":"Перо Малиновки","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"Атрибут стандартного клоунского наряда с отрезанными пальцами для лучшей хватки.\\n<li>Изменяет траекторию полета бутылки.</li>\\n","name":"Клоунские Перчатки Без Пальцев","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"Органическая анестезирующая смесь.<br><li><b>Слегка</b> увеличивает продолжительность эффекта «Отравление».</li>","name":"Бутылка для вечеринки","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"Плотная пробка, прекрасно подходящая к бутылкам добивающего тоника.<br><li><b>Умеренно</b> снижает время перезарядки.</li>","name":"Толстая Пробка","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"Пустая бутылка, покрытая липкой оболочкой из сахара и крови.<br><li>Вы стартуете с <b>1 дополнительной</b> бутылкой. </li><li>Увеличивает максимальное количество бутылок в инвентаре на <b>1</b>. </li>","name":"Липкая Бутылка Из-под Газировки","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"Черное перо с изумрудным блеском, крайне мягкое на ощупь.<br><li><b>Умеренно</b> снижает временной промежуток между бросками бутылок. </li>","name":"Перо Скворца","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"Легковоспламеняемая химическая смесь, которая раздражает дыхательные пути, но повышает усвояемость добивающего антидота. <br><li><b>Умеренно</b> увеличивает длительность эффекта «Бодрость».</li>","name":"Сосуд с Растворителем","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"Чистая легковопламеняющаяся жидкость с резким запахом, при вдыхании притупляет разум.<br><li>Отравленная жертва страдает от эффекта <b>«Слепота»</b> на протяжении <b>30 секунд</b>.</li>","name":"Канистра Керосина","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"Нестареющая классика. Теперь вы будете видеть все в новом свете.<br><li>Окрашивает облако добивающего тоника желтым.</li><li>Окрашивает облако добивающего антидота фиолетовым.</li>","name":"Порнуха на Кассете","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"Жидкость без цвета и запаха, по плотности напоминающая масло. Обладает сильными разъедающими свойствами.<br><li>Отравленная жертва страдает от эффекта <b>«Травма»</b>.</li>","name":"Пробирка с Серной Кислотой","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"Сильный химикат, способный вызвать раздражение кожи, ожоги и повредить легкие.<br><li>Отравленная жертва дополнительно <b>умеренно</b> страдает от эффекта <b>Замедление</b>. <li>Продолжительность эффекта Отравления <b>слегка</b> снижена.</li><li>Эффект суммируется.</li>","name":"Мензурка с Отбеливателем","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"<b>Умеренно</b> увеличивает радиус действия облака добивающего антидота.","name":"Нашатырный спирт","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"Сладкопахнущая смесь органического происхождения с сильными анестезирующими свойствами.<br><li><b>Умеренно</b> увеличивает радиус действия газового облака добивающего тоника.</li>","name":"Бутылка Хлороформа","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"Что-то из этого ляжет на лицо, что-то пойдет в антидот. Это неизвестное соединение усиливает действие антидота.<br><li><b>Значительно</b> увеличивает длительность эффекта «Бодрость».</li>","name":"Набор Яркого Грима","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"Напоминает о былых дешевых временах и адской головной боли.<br><li>Вы стартуете с <b>2 дополнительными</b> бутылками. </li><li>Увеличивает максимальное количество бутылок в инвентаре на <b>2</b>. </li>","name":"Бутылка Дешевого Джина","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"Крайне взрывоопасная анестезирующая смесь.<br><li><b>Значительно</b> увеличивает продолжительность эффекта отравления.</li>","name":"15-процентный Эфир","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"Жуткая и не до конца собранная коллекция пальцев. Наполняет Клоуна страстью и позволяет ему лучше создавать химические препараты.<br><li>Когда выживший или убийца получает «Бодрость», он видит ауры всех выживших и убийц в радиусе 16 м.</li>","name":"Коробка из-под Сигар","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"Трофейный палец большого татуированного мужчины. Имеет терпкий вкус машинного масла.<br><li>Вы видите ауры выживших с эффектом «Отравление» или «Бодрость» на протяжении <b>6 секунд</b>.</li>","name":"Татуированный Средний Палец","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"Трофейный мизинец рыжей девушки. Источает едва уловимый аромат. На вкус как попурри и лак.<br><li>Если бутылка Добивающего Тоника разбивается о Выжившего, тот будет страдать от эффекта <b>Уязвимость</b>.</li><li><b>Слегка</b> уменьшает продолжительность эффекта Отравления. </li><li>Эффект суммируется.</li>","name":"Мизинец Рыжей Девушки","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"Удобные плоские сандалии.<li>Слегка увеличивают скорость передвижения во время Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Дзори","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"Талисман счастья и хорошего настроения.<li>Слегка увеличивает продолжительность Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Амулет Сиавасэ","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"Один из тысячи оридзуру. Загадай желание.<li>Слегка ускоряет восстановление Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Журавль Оригами","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"Бамбуковая расческа с частыми зубьями. Аккуратно распутывает взъерошенные волосы.<li>Слегка ускоряет активацию «Преследования» Ямаоки.</li><li>Эффект суммируется.</li>","name":"Подаренная Бамбуковая Расческа","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"Шелковый бант, призванный укротить разбушевавшиеся волосы.<li>Умеренно ускоряет активацию «Преследования» Ямаоки.</li><li>Эффект суммируется.</li>","name":"Белый Бант","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"Наручные часы с разбитым циферблатом. Имя «Рин» нацарапано на ремешке.<li>Умеренно ускоряют восстановление Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Сломанные Часы Рин","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"Замызганная кепка с логотипом школы. Внутри пришита бирка хозяйки: «Рин».<li>Умеренно увеличивает скорость передвижения во время Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Грязная Бейсболка","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"Талисман удачи.<li>Умеренно увеличивает продолжительность Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Талисман Каиун","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"Деревце бонсай с темной сине-зеленой кроной. Когда-то было символом традиций семьи Ямаока.<li>Слегка увеличивает частоту пассивного «мерцания» Духа.</li><li>Эффект суммируется.</li>","name":"Можжевеловый Бонсай","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"Ржавый инструмент, издающий потусторонние звуки.<li>Значительно ускоряет восстановление Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Ржавая Флейта","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"Талисман Кацумори","name":"Талисман Кацумори","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"Гарда родового клинка. Изготовлена для семьи Ямаока.<li>Слегка увеличивает время появления после использования Преследования Ямаоки.</li><li>Слегка увеличивает скорость передвижения во время появления после использования Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Цуба Катаны","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"Удобная пара домашней обуви.<li>Значительно увеличивают скорость передвижения во время Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Грязные Увабаки","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"Заколка для волос с коркой запекшейся крови.<li>Значительно ускоряет активацию «Преследования» Ямаоки.</li><li>Эффект суммируется.</li>","name":"Кровавая Заколка","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"Мощный талисман, защищающий от подозрительных происшествий.<li><b>Чрезвычайно увеличивает</b> продолжительность преследования Ямаоки.</li><li><b>Слегка снижает</b> скорость передвижения во время преследования Ямаоки.</li>","name":"Амулет Якуёкэ","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"Ножны для родового клинка. Когда-то были изготовлены для семьи Ямаока.<li>Умеренно увеличивает время появления после использования Преследования Ямаоки.</li><li>Умеренно увеличивает скорость передвижения во время появления после использования Преследования Ямаоки.</li><li>Эффект суммируется.</li>","name":"Сая Вакидзаси","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"Могущественный браслет с тайной мантрой.<li>Все выжившие вне радиуса террора слышат звук перемещения.</li>","name":"Браслет-Четки","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"Рассыпающийся на части сухой цветок вишни. Когда-то был символом смертности.<li>Слегка увеличивает продолжительность пассивного «мерцания» Духа.</li><li>Слегка увеличивает частоту пассивного «мерцания» Духа.</li>","name":"Высушенный Цветок Вишни","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"Серебряное кольцо с гравировкой «Моей дорогой дочери».<li>Чрезвычайно увеличивает скорость передвижения во время Преследования Ямаоки.</li><li>Следы-трещины больше не видны во время использования Преследования Ямаоки.</li>","name":"Кольцо от Мамы","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"Типичные отцовские очки, принадлежавшие офисному трудоголику.<li>Следы крови Выживших видны во время использования Преследования Ямаоки.</li>","name":"Отцовские Очки","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"Дружелюбный ярко-желтый значок выглядит издевательски.<li>Если выживший подсвечен «Инстинктом убийцы», удар по нему во время «Дикого бешенства» накладывает эффект «Слепота» на 60 сек.</li>","name":"Значок-смайлик","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"Деревянная линейка с глубокими царапинами.<li><b>Слегка уменьшает</b> время, необходимое для заполнения шкалы силы.</li>","name":"Поцарапанная линейка","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"Список запланированных проступков. Напоминает о старых деньках.<li><b>Слегка увеличивает</b> продолжительность «Дикого бешенства».</li>","name":"Список непослушных","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"Широкий серо-красный браслет из плетеного шнура. На нем видны буквы «Ф Д С Д», криво выведенные черными чернилами.<li><b>Слегка увеличивает</b> радиус действия «Инстинкта убийцы».</li>","name":"Браслет дружбы","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"Таблетки с высоким содержанием кофеина. Повышают смекалку, что бывает полезно во время экзаменов или других утомительных занятий.<li><b>Умеренно увеличивает</b> радиус действия «Инстинкта убийцы».</li>","name":"Таблетки от сна","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"Вырванный из тетради набросок рисунка одного из бойцов Легиона.<li><b>Умеренно увеличивает</b> продолжительность «Дикого бешенства».</li>","name":"Рисунок на стене","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"Мрачная и депрессивная кассета, большинство треков на которой — рок-баллады и печальные мелодии.<li><b>Слегка снижает</b> истощение после окончания «Дикого бешенства».</li>","name":"Кассета Джули","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"Деревянная линейка с вырезанными именами врагов.<li><b>Умеренно уменьшает</b> время, необходимое для заполнения шкалы силы.</li>","name":"Линейка с гравировкой","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"Яркий и безликий желтый значок. Когда-то символ дружеской улыбки, который стал символом Легиона.<li>Если выживший подсвечен «Инстинктом убийцы», удар по нему во время <i>«Дикого бешенства»</i> накладывает эффект <b><i>«Травма»</i></b>.</li>","name":"Безликий значок-смайлик","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"Самодельный значок с лицом Легиона. Используется исключительно для устрашения.<li>Если выживший подсвечен «Инстинктом убийцы», удар по нему во время «Дикого бешенства» накладывает эффект «Ослабление» на 60 сек.</li>","name":"Значок Легиона","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"Микстейп из быстрых и будоражащих кровь песен под бодрый ритм.<li><b>Чрезвычайно увеличивает</b> радиус действия «Инстинкта убийцы».</li>","name":"Кассета Сузи","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"Альбом с необычными, экспрессивными и диковатыми набросками.<li><b>Значительно продлевает</b> «Дикое бешенство».</li>","name":"Украденный альбом","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"Раны, нанесенные этим грязным, испачканным в саже лезвием, заживают особенно плохо.<li><b>Слегка увеличивает</b> время, необходимое Выжившим для действия «Подлатать».</li>","name":"Скверный нож","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"Клевые композиции и бойкие ритмы помогают забыть о проблемах, если жизнь — дерьмо.<li><b>Умеренно снижает</b>истощение после окончания «Дикого бешенства».</li>","name":"Кассета Джо","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"Медицинская статья, украденная из библиотеки Ормонда. Популярно рассказывает о повреждениях и колотых ранах.<li><b>Умеренно сокращает</b> время, остающееся у выживших с «Глубокой раной».</li>","name":"Исследование колотых ран","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"Никогда не идите на мокрое дело без любимых мелодий. Перегруженные струны и громкие ударные просто рвут барабанные перепонки!<li>Атаки в режиме «Дикого бешенства» <b>значительно сокращают</b> время, остающееся у выживших с «Глубокой раной».</li>","name":"Кассета Фрэнка","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"Раны, нанесенные этим испачканным в крови и саже лезвием, заживают особенно плохо.<li><b>Умеренно увеличивает</b> время, необходимое Выжившим для действия «Подлатать».</li>","name":"Грязный нож","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"Неестественно холодная горсть грязи с места упокоения уборщика.<li><b>Значительно снижает</b> истощение после окончания «Дикого бешенства».</li>","name":"Холодная грязь","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"Стеклянная кнопка с символом Легиона, отлитая из самого Тумана. Ее теплая поверхность вибрирует от мощи Сущности.<br><br>Во время «Дикого бешенства»:<br><li>ваш радиус террора <b>охватывает всю карту;</b></li><li>доски, через которые вы перепрыгиваете, <b>мгновенно ломаются.</b></li><br>Эффект длится до опустошения шкалы силы.<br>","name":"Радужная кнопка","flavor":"«Молодость, поглощенная переливчатым стеклом, усиливает Сущность и позволяет ей дотягиваться до укромных мест».","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"Мрачные ритмы, агрессивно аритмичные композиции и жуткий потусторонний вокал затуманивают разум и пробуждают зудящее шестое чувство.<li>Во время «Дикого бешенства» вы можете <b>определять степень починки генератора</b> по <b>яркости его ауры.</b></li>","name":"Дымящаяся кассета","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"Разбитая каменная скрижаль с испорченным заклинанием, некогда использовавшимся для исцеления болезней и общего недомогания.<li><b>Слегка уменьшает</b> время активации ячейки преданности.</li><li><b>Слегка повышает</b> скорость движения при проведении «Очищения от скверны».</li>","name":"Фрагмент молитвенной скрижали","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"Драгоценная смола босвеллии часто применяется в обрядах из-за сладкого цитрусового аромата.<li><b>Слегка повышает</b> скорость движения при зарядке «Очищения от зла».</li>","name":"Смолистое благовоние","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"Цилиндрическая пломба из пористого камня с изображением крылатых богов, проводящих некий обряд.<li><b>Слегка повышает</b> время заражения объектов.</li>","name":"Пломба из песчаника","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"Едкая паста из толченых корней, замоченных на три дня в рыбном рассоле и на два — в вине. Втирать в кожные высыпания.<li><b>Слегка уменьшает</b> время перезарядки «Очищения от мерзости».</li>","name":"Целебный бальзам","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"Амулет из мыльного камня с грубым изображением крылатого божества, отгоняющий болезни. Наполняет владельца преданностью.<li><b>Слегка повышает</b> продолжительность «Очищения от скверны».</li>","name":"Амулет предотвращения","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"Темная пенная жидкость, которая пахнет травами и алкоголем. Наносится на волдыри.\\n<li><b>Умеренно снижает</b> время перезарядки «Очищения от зла».</li>","name":"Сильная микстура","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"Цилиндрическая пломба из металлической руды с гравировкой в виде птицеголовых существ, стоящих у неведомых механизмов. Используется для хранения священного праха.<li><b>Умеренно увеличивает</b> время заражения объектов.</li>","name":"Гематитовая пломба","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"Сироп из воды с горчицей, позволяющий быстро вызвать рвоту. Помогает очистить тело от зла.<li><b>Слегка повышает</b> эффективность «Очищения от мерзости».</li>","name":"Рвотное","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"Полностью созревший фрукт, который подойдет для перекуса во время обряда очищения. Вкуснота!<li>Матч начинается с <b>1</b> дополнительной оскверненной купелью преданности.</li>","name":"Освященное яблоко","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"Мензурка с маслом для растирания, используемое как отхаркивающее средство. Источает свежайший аромат лавра и розмарина.<li><b>Умеренно повышает</b> скорость зарядки «Очищения от зла».</li>","name":"Масло для растираний","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"Отвратительный сироп неизвестного происхождения. Густая желтая жижа вызывает рвоту. Помогает очистить тело от зла.<li><b>Умеренно повышает</b> эффективность «Очищения от мерзости».</li>","name":"Зараженное рвотное","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"Темная воскоподобная паста с добавлением кедрового сока, дающим сладковатый и землистый аромат. Наносится непосредственно на зараженную кожу.<li><b>Слегка повышает</b> скорость движения во время заряда «Очищения от мерзости».</li><li><b>Умеренно снижает</b> время перезарядки «Очищения от мерзости».</li>","name":"Благовонная мазь","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"Обсидиановый амулет c гравировкой молитвы богу чумы и хаоса. Защищает от дурноты во время обрядов экзорцизма и наполняет владельца яростной преданностью.<li><b>Умеренно увеличивает</b> продолжительность «Очищения от скверны».</li>","name":"Амулет экзорцизма","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"Того, кто съест очищенное яблоко, вывалянное в священном прахе, обходят стороной злобные и завистливые духи умерших. <li>Матч начинается с <b>1</b> дополнительной оскверненной купелью преданности.</li><li><b>Слегка увеличивает</b> время заражения объектов.</li>","name":"Яблоко праха","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"Украшенная золотом каменная скрижаль с рисунками и письменами, которые повествуют об оскверненном ритуале поклонения забытым богам.<li><b>Умеренно снижает</b> время активации ячейки преданности.</li><li><b>Умеренно повышает</b> скорость движения при использовании «Очищения от скверны».</li>","name":"Скрижаль поклонения","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"Вонючее загустевшее зелье неизвестного состава. Применяется в качестве рвотного. Помогает очистить тело от зла.<li><b>Значительно повышает</b> эффективность «Очищения от зла».</li>","name":"Зловещее рвотное","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"Этот амулет представляет собой ничто иное, как обшитый тканью разлагающийся палец ноги Адирис. Излучает энергию зла.<li><b>Значительно повышает</b> вероятность заражения Выживших при взаимодействии.</li>","name":"Отрезанный палец","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"Затейливый резной амулет из кровавика, изображающий вавилонского бога чумы и хаоса. Наделяет владельца безграничной преданностью.<li><b>Значительно увеличивает</b> продолжительность «Очищения от скверны».</li>","name":"Амулет ревнителя","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"Полупрозрачная цилиндрическая пломба в виде статуэтки Чумы, вылепленная из самого Тумана. Ее теплая поверхность содрогается от заключенной внутри силы Сущности.<li><b>Умеренно снижает </b>скорость движения при проведении «Очищения от скверны».</li><li><b>Чрезвычайно увеличивает</b> продолжительность действия «Очищения от скверны».</li><li>«Очищение от зла» становится «Очищением от скверны» при каждом отремонтированном генераторе.</li>","name":"Радужная печать","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Темная паста из острых костяных опилок. Ее вонючие испарения обостряют внутренний взор.<li>Когда Выживших рвет, их ауры становятся видны вам на <b>5 секунды</b>.</li>","name":"Черный фимиам","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"Камера, которую Олсен украл у своей жертвы в Филадельфии, где он когда-то работал. На пленке запечатлена его последняя ночь в городе.<br><li><b>Слегка повышает </b>скорость, с которой вы отмечаете выжившего, когда не выглядываете из укрытия.</li>","name":"«Филадельфия»","flavor":"«Люблю Филадельфию. Она дарит столько подарков, что я не хочу забывать о ней» (Гоуст Фейс).","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"Спичечный коробок из «Судака» — небольшого бара на севере Розвилля. На нем синей ручкой нацарапан телефон жертвы. Одна из важных улик, которые удалось найти.<br><li><b>Слегка ускоряет</b> восстановление <i>«Ночного савана»</i>.</li>","name":"Спичечный коробок из «Судака»","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"Вырезанные из газет статьи о нераскрытых убийствах, совершенных в множестве мест от Юты до Пенсильвании. Гоуст Фейс написал лишь некоторые из них, но все жертвы — на его счету.<br>Вы гордитесь своими успехами, и напоминание о них придает вам уверенности.<br><li><b>Слегка повышает</b> скорость передвижения при преследовании.</li>","name":"Газетные вырезки","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"Одеколон из магазинчика «Все за доллар». Резко пахнет спиртом. Гоуст Фейс использует его, чтобы заявить о своем присутствии, и хранит для неожиданных визитов.<br><li><b>Слегка увеличивает</b> время существования метки на выжившем.</li>","name":"Дешевый одеколон","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"Объектив с ручной фокусировкой. Позволяет фотографировать издалека и оставаться незамеченным.<br><li><b>Слегка повышает</b> скорость, с которой вы отмечаете выжившего, когда не выглядываете из укрытия.</li><li><b>Слегка продлевает</b> действие вашей метки на выжившего.</li>","name":"Телеобъектив","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"Блокнот на спирали, страницы с записями покрыты пятнами. В дневнике перечислено оборудование для слежки за жертвами. Записи о старых методах пробуждают волнующие воспоминания.<br><li><b>Умеренно повышает</b> скорость передвижения при преследовании.</li>","name":"Дневник Олсена","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"Испещрена неаккуратными записями, сделанными синей ручкой. В ней перечислены все жертвы убийцы в Розвилле, приведены их адреса и номера телефонов.<br><li><b>Умеренно ускоряет</b> восстановление <i>«Ночного савана»</i>.</li>","name":"Адресная книга Олсена","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"Карта северной части Розвилля, штат Флорида. Крестиками отмечены жертвы Гоуст Фейса. Обозначив их на карте, можно передвигаться по улицам незаметно.<br><li><b>Умеренно продлевает</b> действие «Инстинкта убийцы», когда вас обнаруживают.</li>","name":"Карта с метками","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"Черные ремешки, которые закрепляют все на местах для спокойного рыскания в ночи.<br><li><b>Немного повышает</b> скорость передвижения в положении пригнувшись.</li>","name":"Ремешки ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"Кошелек Олсена. Внутри лежат 30 долларов, карточка члена видеоклуба и сложенная фотография первой жертвы Олсена в Розвилле. Изобличающая улика волнует и придает решимости.<br><li><b>Значительно повышает</b> скорость передвижения при преследовании.</li>","name":"Кошелек Олсена","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"Пластичные и не создающие лишнего шума ножны. Перемещаться гораздо проще, когда все крепко держится на своих местах.<br><li><b>Умеренно повышают</b> скорость передвижения в положении пригнувшись.</li>","name":"Кожаные ножны","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"Перебивающий все запахи мускусный аромат. Гоуст Фейс использует его, чтобы заявить о своем присутствии. Хранится для жертв, о которых убийца планирует написать.<br><li><b>Умеренно увеличивает</b> время существования метки на выжившем.</li>","name":"Стойкий парфюм","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"Отличный зажим, с которым можно горизонтально носить нож на пояснице так, чтобы его не было видно. Никто не узнает, что вы собираетесь сотворить сегодня ночью.<br><li><b>Умеренно повышает</b> скорость, с которой вы отмечаете выжившего, когда не выглядываете из укрытия.</li>","name":"Зажим для ремня","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"Синяя ручка с погрызенным колпачком, на котором можно найти следы ДНК Дэнни. Изобличающая улика, которую так и не нашли.<br><li><b>Значительно повышает</b> скорость восстановления <i>«Ночного савана»</i>.</li>","name":"Погрызенная ручка","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"Вырванная страница с недельным распорядком дня первой жертвы Олсена в Розвилле. Зная привычки добычи, вы можете предсказать ее поведение. \\n<br><li><b>Умеренно продлевает</b> действие «Инстинкта убийцы», когда вас обнаруживают.</li><li><b>Умеренно сокращает</b> расстояние, с которого выживший может обнаружить убийцу при действующем «Ночном саване».</li><br><span class=\\"FlavorText\\">«Я наблюдал за тобой. Хотел, чтобы наша встреча была особенной, чтобы этот заголовок запомнили навсегда» (Гоуст Фейс).</span>","name":"Распорядок дня жертвы","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"Объектив с ночным видением, который позволяет делать четкие снимки даже в темноте. То что надо для неожиданных ночных визитов.<br><li><b>Значительно повышает</b> скорость, с которой вы отмечаете выжившего, когда не выглядываете из укрытия.</li>","name":"Монокуляр ночного видения","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"Ножны, которые не стесняют движения. С ними очень удобно быстро наносить глубокие раны. Украдены у патрульного в ночь, когда Дэнни покинул Филадельфию.<br><li><b>Значительно повышают</b> скорость передвижения в положении пригнувшись.</li><span class=\\"FlavorText\\">«Я должен быть всегда готов, как скаут. Только дурацкие нашивки мне не нужны. Моя награда намного лучше» (Гоуст Фейс).</span>","name":"Набедренные ножны","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"Водительские права на имя Дэнни Джонсона. Так зовут Олсена на самом деле.<br><li><b>Значительно уменьшают</b> расстояние, с которого выживший может обнаружить убийцу при действующем <i>«Ночном саване»</i>.</li>","name":"Водительские права","flavor":"«Все хотят знать, кто Гоуст Фейс на самом деле. Пусть лучше гадают, кто будет следующим» (Гоуст Фейс).","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"Запись, сделанная Олсеном для статьи, ужаснувшей весь Розвилль.<br><li><b>Чрезвычайно увеличивает</b> скорость, с которой вы отмечаете выжившего при выглядывании из-за укрытия.</li><li><b>Чрезвычайно снижает</b> скорость, с которой вы отмечаете выжившего без выглядывания из-за укрытия.</li>","name":"«Гоуст Фейс пойман на камеру»","flavor":"«На записи видно, как поздно ночью некая темная фигура входит в дом в северной части Розвилля (штат Флорида). На следующее утро полиции сообщили об убийстве в этой местности. Запирайте двери: убийца прячется среди нас, он беспрепятственно бродит, словно привидение в ночи» («Розвилль Газетт»).","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"Небольшая камера наблюдения, заснявшая, как Гоуст Фейс пробирается в дом на Белвью-Роуд в северной части Розвилля. Камера специально была расположена так, чтобы запечатлеть Гоуст Фейса, но не дать полиции веских улик.<br><li>Ауры всех выживших вне вашего радиуса террора подсвечиваются на 4 сек., когда отмеченный выживший оказывается в предсмертном состоянии.</li>","name":"Наружная камера наблюдения","flavor":"«Изображение лучше тысячи слов» (Гоуст Фейс).","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"Мякоть тыквы, сгнившей на зараженной почве Хоукинса.<li>Во время перемещений по Изнанке порталы уничтожаются после вашего входа в них. Вы получаете на 200 очков крови больше за перемещения.</li>","name":"Гнилая тыква","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"Жесткий крысиный хвост, который может съесть Демогоргон.<li><b>Слегка ускоряет</b> открытие портала.</li>","name":"Крысиный хвост","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"Хлюпающая кучка мягкой соленой печени.<li><b>Слегка увеличивает</b> скорость передвижения убийцы во время зарядки навыка <b>«Из Бездны»</b>.</li>","name":"Крысиная печенка","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"Черное гнилое сердце, вырванное из груди существа с щупальцами, обитающего на Изнанке.<li><b>Слегка ускоряет восстановление</b> <b>«Разрыва»</b> после попадания.</li>","name":"Черное сердце","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"Влажная и тягучая паутина, расширяющая межпространственные туннели.<li><b>Слегка замедляет</b> запечатывание порталов выжившими.</li>","name":"Клейкая паутина","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"Зловонное клейкое вещество, покрывающее межпространственные туннели.<li><b>Умеренно увеличивает</b> радиус, на котором способность <b>«Из Бездны»</b> обнаруживает выживших.</li>","name":"Липкая слизь","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"Гнилые внутренности, служащие пищей для Демогоргона.<li><b>Слегка повышают</b> скорость передвижения убийцы во время путешествия по Изнанке.</li>","name":"Протухшая требуха","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"Вкусные внутренности случайной жертвы.<li><b>Увеличивают</b> общее число доступных порталов на <b>1</b>.</li><li><b>Слегка ускоряют восстановление</b> <b>«Разрыва»</b> после промаха.</li>","name":"Кишки Мяуса","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"Сломанные очки, побывавшие на Изнанке.<li><b>Слегка ускоряют</b> восстановление <i>«Разрыва»</i> при уничтожении досок</li>","name":"Очки Барб","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"Темный гриб с Изнанки, позволяющий Демогоргону телепатически влиять на эмоциональное состояние жертвы.<li><b>Слегка продлевает</b> время действия <b>эффекта «Незаметность»</b>, накладываемого на убийцу при выходе из портала.</li>","name":"Пурпурная влажноголовка","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"Густо переплетенные лозы с шипами, укрепляющие своды межпространственных туннелей.<li><b>Слегка замедляют</b> запечатывание порталов выжившими.</li><li><b>Слегка увеличивают</b> радиус, на котором способность <b>«Из Бездны»</b> обнаруживает выживших.</li>","name":"Шипастые лозы","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"Банка из-под газировки, заряженная психической энергией.<li>Подсвечивает желтым ауры ремонтируемых генераторов во время путешествий по Изнанке.</li>","name":"Банка Одиннадцатой","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"Сырое и жесткое легкое, которое придает сил Демогоргону.<li><b>Значительно повышает</b> скорость передвижения убийцы во время путешествия по Изнанке.</li><li>Снижает количество доступных порталов на <b>2</b>.</li>","name":"Легкое оленя","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"Зажигалка, из-за которой случилась беда.<li>На выживших, подвергшихся влиянию портала, действует эффект <b>«Слепота»</b>. Когда контакт с порталом прерывается, эффект остается на <b>60 сек.</b></li>","name":"Медная зажигалка","flavor":"«Обладает сильным электромагнитным полем: должно быть, объект соприкасался с Изнанкой» (Национальная лаборатория Хоукинса).","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"Ярко-красный ядовитый гриб с Изнанки.<li><b>Умеренно продлевает</b> время действия <b>эффекта «Незаметность»</b>, накладываемого на Демогоргона при выходе из портала.</li>","name":"Киноварный паутинник","flavor":"«Эксперименты над образцом продолжаются, но результаты противоречивые». — Национальная лаборатория Хоукинса","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"Липкая горючая смола, защищающая проходы в межпространственные туннели.<li><b>Умеренно замедляет</b> запечатывание порталов выжившими.</li>","name":"Смола с Изнанки","flavor":"«Образец, взятый с коры дерева, когда-то служившего вратами. Пока что мы не уверены, какие эффекты он вызывает» (Национальная лаборатория Хоукинса).","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"Крупное теплое яйцо, покрытое жуткой паутиной.<li><b>Значительно ускоряет</b> восстановление силы, необходимой для путешествия по Изнанке.</li>","name":"Странное яйцо","flavor":"«На Изнанке было обнаружено крупное яйцо, но образцы не пережили транспортировку. Исследовать их не удалось» (Национальная лаборатория Хоукинса).","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"Ржавый железный свисток, что когда-то был законом в бассейне Хоукинса.<li>Не расходует заряд <b>«Из Бездны»</b> на обнаружение выживших рядом с активированными порталами при помощи инстинкта убийцы.</li>","name":"Свисток спасателя","flavor":"«Обладает сильным электромагнитным полем: должно быть, объект соприкасался с Изнанкой» (Национальная лаборатория Хоукинса).","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"Галлюциногенный мох, растущий на коре деревьев Изнанки.<li>Блуждающий по Изнанке Демогоргон выходит из портала бесшумно, но медленнее обычного.</li><li><b>Чрезвычайно </b>продлевает действие эффекта <b>«Незаметность»</b>, который накладывается на Демогоргона после выхода из портала.</li>","name":"Красный мох","flavor":"«Употребление расширяет физические возможности и вызывает эйфорию» (Национальная лаборатория Хоукинса).","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"Напоминающий пыль выносливый лишайник. Растет на камнях Изнанки.<li><b>Подсвечивает ауру</b> всех раненых выживших на все время путешествия по Изнанке и на <b>3 сек.</b> после выхода из портала.</li>","name":"Чешуйчатый лишайник","flavor":"«Небольшой дозы достаточно, чтобы вызвать серьезные галлюцинации» (Национальная лаборатория Хоукинса).","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"Казан искренне считал, что вершит правое дело. Поэтому он носил с собой амулет и отпугивал им злые силы, чтобы те не сбивали его с истинного пути.<li><b>Слегка ускоряет</b> поглощение шариков крови.</li>","name":"Талисман якуекэ","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"Будь веревка прочнее, Казан вряд ли смог бы вырваться. Освободившись, он жестоко убил тех, кто его пленил.<li><b>Слегка увеличивает</b> расстояние, с которого можно заметить ауры шариков крови.</li>","name":"Сгнившая веревка","flavor":"«Смерть никогда не отвлекается, но порой моргает». — «Учение Рендзиро» 14:5","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"Чаша со свадебной церемонии Казана. Пробыла целой недолго.<li><b>Слегка ускоряет</b> подготовку <i>«Кровавой ярости»</i>.</li><li><b>Слегка ускоряет</b> прекращение <i>«Кровавой ярости»</i>.</li>","name":"Треснувшая сакадзуки","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"Он отвалился во время одного из сотни зимних походов Казана к храму. Увы, паломничество не исцелило ногу Акито.<li><b>Слегка увеличивает</b> скорость передвижения при поглощении шариков крови.</li>","name":"Почерневший ноготь","flavor":"«Кто же отец, если не тот, кто идет на жертвы ради своих детей?» — «Учение Рендзиро» 11:12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"Украшение для шлема в виде рогов. Казан оторвал их, когда его прозвали демоном.<li><b>Слегка ускоряет</b> пассивное восстановление <i>«Гнева Ямаоки»<i>.</li>","name":"Блестящий маэдатэ","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"Нарисованная тушью картина, что когда-то висела в поместье Ямаока. Изображает льва, которого поедают мыши.<li><b>Слегка ускоряет</b> подготовку <i>«Кровавой ярости»</i>.</li><li><b>Слегка ускоряет</b> прекращение <i>«Кровавой ярости»</i>.</li><li><b>Умеренно снижает</b> штраф к расходу <i>«Кровавой ярости»</i>, когда вы смертельно раните выжившего.</li>","name":"Лев, нарисованный тушью","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"Принадлежавший Рендзиро жезл. Казан украл его, когда покинул дом.<li><b>Слегка продлевает</b> действие <i>«Кровавой ярости»</i>.</li>","name":"Поцарапанный сайхай","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"Тренировочный меч Акито. Почти не использовался с тех пор, как мальчик получил травму.<li><b>Умеренно увеличивает</b> расстояние, с которого можно заметить ауры шариков крови.</li>","name":"Детский деревянный меч","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"Кровь мальчишки, который обозвал Казана «мнимой знатью». Казан скрыл свидетельства драки от отца и частенько любовался повязкой втайне от него.<li><b>Умеренно увеличивает</b> скорость передвижения при поглощении шариков крови.</li>","name":"Окровавленная повязка","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"Знамя семьи Ямаока. От одного его вида Казана переполняла гордость.<li><b>Умеренно продлевает</b> действие <i>«Кровавой ярости»</i>.</li>","name":"Сасимоно семьи Ямаока","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"Маска, которую юный Казан купил на праздник Сэцубун. Эта мерзкая клыкастая пасть начала преследовать его в кошмарах.<li><b>Слегка увеличивает</b> количество шариков крови, которые оставляют выжившие.</li>","name":"Деревянная маска они","flavor":"«Люди неспроста хорошо наслышаны о демонах». — «Учение Рендзиро» 3:8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"Фрагменты фамильного клинка, сломанного Казаном в порыве ярости.<li><b>Умеренно ускоряет</b> пассивное восстановление <i>«Гнева Ямаоки»</i>.</li>","name":"Расколотый вакидзаси","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"Пучок волос самурая, усомнившегося в чести Казана. Корни волос прочно цепляются за окровавленный клочок кожи.<li><b>Значительно ускоряет</b> подготовку <i>«Рывка демона»</i>, когда действует <i>«Кровавая ярость»</i>.</li>","name":"Скальп с пучком волос","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"Этот оберег сделали при рождении Казана, чтобы защитить семью от опасностей.<li><b>Умеренно увеличивает</b> скорость <i>«Рывка демона»</i>, когда действует <i>«Кровавая ярость»</i>.</li>","name":"Талисман канай андзэн","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"Этой тряпицей мать Казана утирала слезы, когда он отправился в паломничество, чтобы очистить самурайскую честь.<li><b>Значительно снижает</b> штраф к расходу <i>«Кровавой ярости»</i>, когда вы смертельно раните выжившего.</li>","name":"Мокрое от слез тэнугуи","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"Обломки судна, на котором путешествовал Рендзиро Ямаока. Похоже, легендарный самурай выжил, хотя шансов у него почти не было.<li><b>Умеренно увеличивает</b> количество шариков крови, которые оставляют выжившие.</li>","name":"Разбитый корпус","flavor":" «Собираешься пойти на хитрость? Начни с того, что ни у кого не спрашивай совета». — «Учение Рендзиро» 7:9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"Зуб, купленный у торговца экзотическими вещицами. Символизирует силу и благородное происхождение.<li><b>Значительно продлевает</b> действие <i>«Кровавой ярости»</i>.</li>","name":"Львиный клык","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"Сын Казана пользовался этим костылем после падения с дерева. За тот несчастный случай наказали девочку, с которой играл Акито, и всю ее семью.<li><b>Значительно увеличивает</b> скорость <i>«Рывка демона»</i>, когда действует <i>«Кровавая ярость»</i>.</li>","name":"Костыль Акито","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"Эту перчатку Рендзиро прижимал к груди, когда сын нанес ему удар.<li>Все выжившие могут видеть шарики крови.</li><li>Вступая в контакт с шариком крови, выживший поглотит его и раскроет свою ауру убийце на <b>2 секунды</b>.</li><li>Эффект накапливается с каждым поглощенным шариком.</li>","name":"Окровавленная перчатка Рендзиро","flavor":"«Когда все утекает сквозь пальцы, держись за свою честь». — «Учение Рендзиро» 14:12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"Этот герб означает, что его владелец — член семьи Ямаока.<br><li>Если во время <i>«Кровавой ярости»</i> <i>«Удар демона»</i> промахивается мимо цели, все выжившие <b>в радиусе 12 м</b> закричат и выдадут свое местоположение.</li>","name":"Переливчатый семейный герб","flavor":"«Знай, кто ты есть: так ничто не сможет ранить твое сердце». — «Учение Рендзиро» 11:2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"Грязный кусок мешковины. В пылу перестрелки чистить ружье некогда: поплевал, потер — и сойдет.<li><b>Слегка ускоряет</b> восстановление гарпунного ружья после выстрелов мимо цели.</li>","name":"Замызганная тряпица ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"Смесь масел и вытяжек, купленная у странствующего торговца. Он утверждал, что его товар исцеляет все недуги.<li><b>Слегка увеличивает</b> скорость притягивания гарпунного ружья.</li>","name":"Змеиное масло ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"Калеб начал пользоваться прототипом гарпунного ружья именно с этой непрочной стальной цепью. Теперь это больше дань сентиментальности.<li>Дает <b>50%</b> бонусных очков крови в событиях с эффектом <i>«Загарпунен»</i>.</li><li>Выжившим проще вырваться на свободу.</li>","name":"Хрупкая цепь","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"Старый патронташ, который Калеб переделал для своего оружия. Все еще хранит следы мелкой красной пустынной пыли Территории Аризоны.<li><b>Слегка ускоряет</b> перезарядку гарпунного ружья.</li>","name":"Переделанный патронташ ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"В порыве мрачного любопытства Калеб приладил к гарпунному ружью железнодорожный костыль. Тупой наконечник не позволяет ему как следует пронзить цель.<li>Нанося удар по выжившему, пронзенному гарпуном, вы накладываете на него эффект <b>«Травма»</b>.</li>","name":"Ржавый костыль ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"Калеб обнаружил, что если натереть острие гарпуна соком этого обычного с виду растения, раны воспалятся, а их края покроются крайне болезненными волдырями.<li><b>Незначительно увеличивает</b> время латания выжившего во время действия эффекта <b>«Глубокая рана»</b>.</li>","name":"Листья ядовитого дуба","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"Серебряный значок, снятый с трупа шерифа на Территории Аризоны. Зря он мешал Хелширской банде преследовать жертв.<li><b>Слегка уменьшает</b> радиус террора во время прицеливания из гарпунного ружья.</li><li><b>Слегка уменьшает</b> скорость передвижения во время прицеливания из гарпунного ружья.</li><span class=\\"FlavorText\\">«Начинай молиться: к полудню ты будешь болтаться в петле». — Калеб Куинн</span>","name":"Значок шерифа ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"Пуля, раздробившая Калебу челюсть во время бурной перестрелки. Вновь пробуждает жгучую жажду мести.<li><b>Слегка увеличивает</b> скорость передвижения во время прицеливания из гарпунного ружья.</li><span class=\\"FlavorText\\">«Ты навлек на себя смерть, когда решил пойти против меня». — Калеб Куинн</span>","name":"Зубодробилка ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"Коробочка нарезанных и подслащенных листьев табака, подобранная с выпотрошенного тела в Гленвейле. Неплохо бодрит.<li><b>Умеренно уменьшает</b> продолжительность оглушения, когда выживший срывается с гарпуна.</li>","name":"Жевательный табак","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"Приглушенное позвякивание ключей пробуждает ярость и воспоминания.<li><b>Умеренно увеличивает</b> скорость перезарядки гарпунного ружья.</li>","name":"Ключи начальника тюрьмы ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"Пожелтевший и порванный плакат о розыске Мейсона Келли настраивает Калеба на охоту.<li><b>Умеренно увеличивает</b> скорость передвижения во время прицеливания из гарпунного ружья.</li><span class=\\"FlavorText\\">«Клянусь могилой матушки, ты жестоко за это поплатишься». — Калеб Куинн</span>","name":"Плакат «В розыске» ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"Жестянка с остатками масла для смазки механизмов. Ранние модели гарпунного ружья часто заклинивали, и масло всегда надо было держать под рукой.<li><b>Умеренно ускоряет</b> восстановление гарпунного ружья после выстрелов мимо цели.</li>","name":"Жестяная масленка ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"Когда от него сбежала вторая цель, разъяренный Калеб приделал к гарпуну шипастые ветки.<li>Выжившие, сорвавшиеся с гарпуна, получают эффект <b>«Травма»</b>.</li>","name":"Колючки гледичии ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"Золотой зуб, вырванный у Генри Бейшора. Тот не один час молил о пощаде, прежде чем его прикончили.<li><b>Умеренно увеличивает</b> скорость притягивания гарпунного ружья.</li><span class=\\"FlavorText\\">«Знай свое место, пацан. Знай свое место». — Генри Бейшор</span>","name":"Золотой зуб Бейшора","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"Толстая и тяжелая цепь, которая когда-то крепила железный шар к лодыжке Калеба. Теперь она приделана к гарпуну.<li><b>Значительно увеличивает</b> количество рывков, необходимое, чтобы избавиться от гарпуна.</li><span class=\\"FlavorText\\">«К кандалам заключенных, работающих за пределами тюремного двора, должны быть прикованы железные шары весом не менее 18 фунтов» — справочник тюрьмы «Хелшир».</span>","name":"Тюремная цепь","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"Жидкость в бутылке согревала Калеба, утешала, умаляла его гнев и замедляла шаги.<li><b>Умеренно уменьшает</b> радиус террора во время прицеливания из гарпунного ружья.</li><li><b>Умеренно уменьшает</b> скорость передвижения во время прицеливания из гарпунного ружья.</li><span class=\\"FlavorText\\">«Мягкий вкус в суровые времена» — реклама «Голд Крик», 1876 г.</span>","name":"Виски «Голд Крик»","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"Хорошая сигара. Калеб вытащил ее из куртки начальника, пока тот выл, пронзенный гарпуном.<li><b>Значительно уменьшает</b> продолжительность оглушения, когда выживший срывается с гарпуна.</li><span class=\\"FlavorText\\">«Не тыкай в меня этой штуковиной, тупомордый болван!» — Генри Бейшор</span>","name":"Сигара Бейшора","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"Гибкая американская сталь с острыми шипами. Несмотря на всю очевидность, именно Калеб догадался обернуть ей гарпун, сделав его еще более устрашающим.<li><b>Умеренно увеличивает</b> время латания выжившего во время действия эффекта <b>«Глубокая рана»</b>.</li></li><span class=\\"FlavorText\\">«Скоро бояться будет нечего, а до тех пор бойся меня» (Калеб Куинн).</span>","name":"Колючая проволока","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"Полупрозрачная монета, отлитая из самого Тумана. Оплата охотнику за головами за оказанные услуги.<li>Выжившие, пронзенные гарпуном с расстояния не менее <b>15 метров</b>, получают эффект <b>«Уязвимость»</b> до тех пор, пока не избавятся от гарпуна.</li><span class=\\"FlavorText\\">«Сделки, заключенные в отчаянии, оплачиваются безумием».</span>","name":"Радужная монета","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"Клеймо Хелширской банды. Вопреки слухам, им прижигали не новых членов банды, а особенно несговорчивых преступников.<li>Пока выживший пронзен гарпуном, вы видите ауры всех выживших в пределах радиуса вашего террора.</li><span class=\\"FlavorText\\">«Хелширская банда: искатели справедливости или головорезы?» — заголовок из «Гленвейл Газетт».</span>","name":"Хелширское клеймо","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"Найдено в холодильнике. На нем выгравировано мерзкое, обрюзгшее лицо.<li>Борозды <b>«Обрядов осуждения»</b> остаются на поверхности <b>чуть дольше</b>.</li>","name":"Свинцовое кольцо ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"Бабочка, найденная на кровати в апартаментах «Вуд-Сайд». Очень хрупкая и готова рассыпаться от любого прикосновения.<li><b>Слегка ускоряет</b> перезарядку <b>«Обрядов осуждения»</b>.</li>","name":"Мертвая бабочка ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"Найдено в подвале госпиталя «Брукхейвен». На нем выгравировано изображение паука.<li><b>Слегка увеличивает</b> общую продолжительность использования <b>«Обрядов осуждения»</b>.</li>","name":"Медное кольцо ","flavor":"«Меня заперли внутри подвала в подвале. Там было темно, тесно и очень страшно. Мое любимое кольцо осталось там, но я ни за что туда не вернусь. Никогда».","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"Нейлоновый ремень, которым жертву привязывали к металлическому каркасу. Из-за темного цвета кровь на нем почти не заметна.<li><b>Слегка увеличивает</b> дальность действия <b>«Кары обреченных»</b>.</li>","name":"Черный ремень ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"Вырезанная из воска кукла. Сделана узником, который ожидал скорого суда.<li><b>Умеренно увеличивает</b> дальность действия <b>«Кары обреченных»</b>.</li>","name":"Восковая кукла ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"Острый и ржавый наконечник копья, с которого хлопьями отваливается кровь предыдущей жертвы.<li><b>Умеренно увеличивает</b> общую продолжительность использования <b>«Обрядов осуждения»</b>.</li>","name":"Наконечник копья ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"Лоскут розовой ткани с леопардовым узором. Сложно понять, для чего он использовался.<li><b>Слегка увеличивает</b> время действия <i>«Инстинкта убийцы»</i>, активированного <b>«Обрядами осуждения»</b>.</li>","name":"Леопардовая ткань  ","flavor":"«Не имеет значения, кто я. Я здесь из-за тебя, Джеймс» (Мария).","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"Кассета, на которую записан отдых влюбленных в Сайлент Хилле. Ее оставили в отеле «Лэйквью», несмотря на дорогие воспоминания.<li><b>Умеренно ускоряет</b> перезарядку <b>«Обрядов осуждения»</b>.</li>","name":"Забытая видеокассета ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"Музыкальная шкатулка с фигуркой из сказки о Золушке. Найдена в чемодане, облепленном наклейками из самых разных мест.<li>Борозды <b>«Обрядов осуждения»</b> остаются на поверхности <b>умеренно дольше</b>.</li>","name":"Музыкальная шкатулка с Золушкой ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"Фотография двух фигур в красных капюшонах. Законный Багровый и Белый банкет для богов.<li><b>Значительно ускоряет</b> перезарядку <b>«Обрядов осуждения»</b>.</li>","name":"Фотография секты Валтиэля ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"Металлическая табличка с вырезанными ацтекскими символами.<li><b>Значительно увеличивает</b> общую продолжительность использования <b>«Обрядов осуждения»</b>.</li>","name":"Табличка угнетателя ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"Рисунок, изображающий грозную фигуру со стальной пирамидой на голове. На фоне видны жертвы, запертые в клетках.<li><b>Умеренно увеличивает</b> время действия <i>«Инстинкта убийцы»</i>, активированного <b>«Обрядами осуждения»</b>.</li>","name":"Туманный день, останки правосудия ","flavor":"«Это он...»","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"Гладкая серая стопа манекена, грубо оторванная от ноги.<li>Борозды <b>«Обрядов осуждения»</b> остаются на поверхности <b>значительно дольше</b>.</li>","name":"Стопа манекена ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"Схема отеля «Лэйквью». Поверх этого пропитанного виной места нарисованы красные языки пламени.<li><b> Значительно увеличивает</b> дальность «Кары обреченных».</li>","name":"Рисунок «Горящий человек» ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"Свежее яйцо приметного ярко-красного цвета. Размером примерно с яйцо перепелки.<li><b>Значительно увеличивает</b> время действия <i>«Инстинкта убийцы»</i>, активированного <b>«Обрядами осуждения»</b>.</li>","name":"Алое яйцо ","flavor":"«Мне никогда в жизни не было так страшно! Ты совсем не заботишься обо мне... правда?» (Мария).","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"Старое на вид яйцо красновато-оранжевого цвета. Размером примерно с яйцо перепелки.<li>На выживших, подверженных действию <b>«Обрядов осуждения»</b>, накладывается эффект <b>«Слепота»</b> на <b>60 сек.</b></li>","name":"Яйцо цвета ржавчины ","flavor":"«Джеймс... ты сделал меня счастливой» (Мэри).","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"Книга об истории и легендах Сайлент Хилла и его окрестностей.<li>На выживших, подверженных действию <b>«Обрядов осуждения»</b>, накладывается эффект <b>«Забывчивость»</b> на <b>15 сек.</b></li><span class=\\"FlavorText\\">«Эту область называли \\"Место безмолвных духов\\"».</span>","name":"Книга «Потерянные воспоминания» ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"Книга о древнем божестве. Автор неизвестен.<li>На выживших с ранением и эффектом <i>«Мучение»</i> также действует эффект <b>«Кровотечение»</b>.</li>","name":"Книга «Багровая церемония» ","flavor":"«Говори. Я — Багровый. Ложь и туман — не они, а я».","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"Древний на вид кубок, высеченный из куска обсидиана.<li><b>Палач</b> получает эффект <b>«Незаметность»</b>, когда стоит на борозде <b>«Обрядов осуждения»</b>.</li>","name":"Обсидиановый кубок ","flavor":"«Прости, что бужу тебя. Но без тебя я не могу продолжать жить» (Джеймс Сандерленд).","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"Талисман со странным изображением. Похоже, влияние Сущности как-то его изменило.<li>Когда вы сажаете выжившего в <b>клетку искупления</b>, ауры всех выживших с эффектом <i>«Мучение»</i> подсвечиваются вам на <b>6 сек.</b></li>","name":"Радужная печать Метатрона ","flavor":"«Этот магический квадрат с сильными защитными и рассеивающими свойствами называется \\"Герб Вируна VII\\" или \\"Печать Метатрона\\"».","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Пилюля, которая не оказывает совершенно никакого эффекта... Или все-таки оказывает?<br><br><li><b>Умеренно уменьшает</b> скорость движения во время ускорения.</li></li>Вы набираете <b>100%</b> бонусных очков крови за ускорения.</li>","name":"Таблетка плацебо ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"Ядовитое растение, с которого и началось увлечение Тальбота химией. Воскрешает давно забытые воспоминания.<br><br><li><b>Слегка повышает</b> скорость восстановления после ускорения.</li>","name":"Наперстянка ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"Этот ранний образец не позволил достичь желаемого результата, зато отличается неожиданными эффектами.<br><br><li>Автоматически разворачивает к ближайшему выжившему в радиусе <b>16 м</b> после столкновения.</li>","name":"Состав №7 ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"Монокль, которым Тальбот почти не пользовался, несмотря на ухудшившееся с возрастом зрение.<br><br><li>Показывает целевое место столкновения.</li>","name":"Монокль со сколами","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"Обрывки записей Тальбота, где все еще можно найти какую-то ценную информацию.<br><br><li><b>Уменьшают</b> количество доступных жетонов ускорения на <b>1.</b></li><li><b>Умеренно увеличивают</b> скорость восстановления жетонов.</li>","name":"Порванные записи ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"Сушеные лепестки гнойника, истолченные в порошок.<br><br><li><b>Умеренно увеличивают</b> продолжительность столкновения.</li>","name":"Порошок гнойника ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"Образец желчи Чумы, дистиллированный и обработанный химикатами.<br><br><li><b>Слегка увеличивает</b> скорость поворота при ускорении.</li>","name":"Желчь Чумы","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"Крупный шип, срезанный с язвенника. Выделяет токсин средней силы.<br><br><li><b>Умеренно увеличивает</b> скорость восстановления после ускорения.</li>","name":"Шип язвенника","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"Крыса, которую ненадолго вернули к жизни инъекцией сыворотки, сделавшей ее агрессивной и неуправляемой.<br><br><li><b>Умеренно увеличивает</b> скорость ускорения за каждое следующее ускорение подряд.</li>","name":"Изуродованная крыса ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"Обычная морская соль, которая на мгновение прошла через мир духов, что изменило ее свойства.<br><br><li><b>Умеренно увеличивает</b> скорость поворота при ускорении.</li>","name":"Теневые соли ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"Микстура из сушеных роз из крайне редкого букета «Новолуние».<br><br><li><b>Значительно увеличивает</b> продолжительность столкновения.</li> ","name":"Розовый тоник ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"Эта сыворотка смертельна для человека, но оказывает благотворное действие на тех, кто... больше, чем человек.<br><br><li>В начале столкновения показывает ауры выживших в радиусе <b>8 м</b> от точки столкновения в течение <b>3 сек.</b></li>","name":"Состав №21 ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"Мертвая ворона, изуродованная сывороткой Мора до неузнаваемости.<br><br><li><b>Значительно увеличивает</b> скорость ускорения за каждое следующее ускорение подряд.</li>","name":"Изуродованная ворона ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"Гормон, извлеченный из надпочечника подопытного без его согласия. Дает заряд энергии, но может вызвать истощение.<br><br><li><b>Чрезвычайно уменьшает</b> скорость поворота при ускорении.</li><li><b>Значительно увеличивает</b> скорость восстановления жетонов.</li><li><b>Увеличивает</b> количество доступных жетонов ускорения на <b>2.</b></li><li><b>Значительно увеличивает</b> максимальный угол обзора во время ускорения.</li><br>","name":"Флакон с адреналином ","flavor":"«Пожалуйста, не надо...»","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"Дневник человека, который утверждал, что вернулся из пустоты. Имеющейся в нем информации можно найти практическое применение.<br><br><li>Вы получаете эффект <b>«Незаметность»</b> при ускорении.</li><br>","name":"Дневник Виго ","flavor":"«В пустоши забытых мечтаний и бесконечной рутины человек, который может найти из нее выход, равен богу». — Тальбот Граймс","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"Этим камнем Тальбот выцарапывал свои, как он считал, исследования на стене опиумного притона.<br><br><li>Удар выжившего «Смертельным ускорением» призывает Сущность для блокировки досок в радиусе <b>12 м</b> от вашего местоположения в течение <b>6 сек.</b></li><br>","name":"Камень призыва ","flavor":"«Смерть — это только начало».","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"Жидкость, выдавленная из эпифиза бывшего «выжившего».<br><br><li>Если во время ускорения вы на <b>16 м</b> приближаетесь к выжившему, занятому лечением или починкой, этот выживший вынужден пройти <b>чрезвычайно</b> сложную проверку реакции. Доступно один раз для каждого выжившего во время каждого ускорения. Не действует при ускорении, активированном в пределах <b>16 м</b> от выжившего.</li><br>","name":"Вещество души ","flavor":"«Может вызывать атипичные изменения в ритмической активности нейронов» (отрывок из неизвестного школьного учебника).","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"Кольцо, которое дается химикам при окончании Лондонской медицинской школы. Напоминание о неуемных амбициозных желаниях.<br><br><li>Удар выжившего «Смертельным ускорением» мгновенно перезаряжает все жетоны ускорения.</li><br>","name":"Кольцо алхимика ","flavor":"«Учащийся обвиняется в расхищении могил с целью проведения несанкционированных научных изысканий» (выговор, объявленный преподавательским составом Тальботу Граймсу в 1838 г.)","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"Полупрозрачная лабораторная бирка, отлитая из самого Тумана. Либо подарок Сущности, либо жестокая шутка с целью навесить на Мора бирку так же, как он когда-то делал с другими.<br><br><li>При использовании всех жетонов ускорения ваше последнее смертельное ускорение введет выживших в предсмертное состояние.</li><br>","name":"Переливчатая бирка Мора","flavor":"\\\\«Прогресс не обходится без разительных перемен.\\\\» — Тальбот Граймс","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"Предпоследняя попытка Тальбота получить сыворотку. Хотя образец и не помог ему при побеге, он вызвал сильные побочные эффекты.<br><br><li>На любого выжившего в радиусе <b>16 м</b> от столкновения будет действовать эффект <b>«Замедление»</b> в течение <b>3 сек.</b>.</li><li>Удары по поддонам или разрушаемым стенам уничтожат их и оглушат Мора на <b>1.5 сек.</b></li><br>","name":"Состав №33 ","flavor":"«Времени мало. Лишь бы получилось...» — Тальбот Граймс","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"Крошечный игрушечный меч не больше десяти сантиметров в длину. С ним Виктор всегда приходил в злобное возбуждение.<br><br><li><b>Слегка ускоряет</b> зарядку «Наскока».</li>","name":"Игрушечный меч","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"Скорбь Шарлотты о смерти Виктора порой принимала причудливые формы. Когда ногти начали сползать с его разлагавшихся рук, она взяла один на память.<br><br><li><b>Умеренно ускоряет</b> отделение Виктора от Шарлотты.</li>","name":"Ноготок","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"Металлическая бутылка с давно скисшим молоком. Как бы громко ни вел себя Виктор, еда всегда его утихомиривала.<br><br><li><b>Слегка увеличивает</b> радиус воплей Виктора.</li>","name":"Скисшее молоко","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"Деревянная фигурка, привлекшая внимание юного Виктора. Он вопил, пока мать не стянула ее с прилавка, едва не выдав их всех.<br><br><li>Показывает место, куда направлен «Наскок».</li>","name":"Статуэтка кошки","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"Перчатка, некогда принадлежавшая матери Близнецов. В худшие времена она зажимала рот Виктору, не позволяя даже пискнуть.<br><br><li><b>Умеренно увеличивает</b> радиус воплей Виктора.</li>","name":"Перчатка Мадлен","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"Виктор уронил этот подсвечник и поджег своих пленителей. С тех пор эта вещь служит символом его решительности.<br><br><li><b>Слегка увеличивает</b> время, за которое выживший давит Виктора.</li>","name":"Ритуальный подсвечник","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"Глазное яблоко кошки, которую семейство Дейе съело, спасаясь от голода. Виктор скрыл его от матери и превратил в свою игрушку.<br><br><li>Вопли Виктора прекращаются при полном заряде «Наскока».</li>","name":"Кошачий глаз","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"Капюшон одного из охотников за Шарлоттой. Вскоре охотник превратился в добычу.<br><br><li><b>Слегка ускоряет</b> выход Шарлотты из бездействия.</li>","name":"Черный капюшон с кровью","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"Два пугающе острых зуба, выпавшие у Виктора давным-давно.<br><br><li>Выжившие, которым удается оторвать Виктора, получают «Слепоту» на <b>15 сек.</b></li>","name":"Молочные зубы","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"Грубая погремушка, из-за которой Виктор заходился плачем, пока мать не украла игрушку для своего чада. Слишком тяжелая для ребенка.<br><br><li>Выжившие, которым удается оторвать Виктора, получают эффект <b>«Ослабление»</b> на <b>20 сек.</b></li> ","name":"Увесистая погремушка","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"Черствый и пресный хлебец, украденный Мадлен на городском базаре. Не самая сытная еда, но лучше многого, что им приходилось есть.<br><br><li><b>Слегка ускоряет</b> перезарядку «Наскока».</li>","name":"Черствый хлебец","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"Отвратительная липкая масса, покрывшая семейство Дейе во время бегства через городскую канализацию.<br><br><li><b>Слегка увеличивает</b> время, необходимое выжившему для отрывания Виктора.</li>","name":"Канализационная слякоть","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"Ржавая иголка","name":"Ржавая иголка","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"Ветошь, которой Мадлен укрывалась незадолго до смерти. Близнецы сохранили ее на память.<br><br><li><b>Слегка повышает</b> скорость Виктора.</li><br>","name":"Шарф Мадлен","flavor":"«Будет записано как деяние на общее благо и во имя искоренения зла» (протокол расследования смерти Мадлен Дейе).","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"Игрушечный солдатик, которого Виктор прижимал к себе в минуты испуга. По неизвестной причине он вызывал смутную ревность Шарлотты.<br><br><li>Если выжившему удастся раздавить бездействующего Виктора, его аура становится видимой на <b>6 сек.</b></li><br>","name":"Солдатик Виктора","flavor":"«Ш-ш... шильный уысый дядя...» (Виктор Дейе)","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"Деревянный волчок близнецов, хоть Виктор и хотел бы владеть им безраздельно. Вскоре он понял, что получить желаемое просто: нужно только вцепиться покрепче и орать погромче.<br><br><li>Когда Виктор наскакивает на выживших, у тех выпадает из рук любой предмет, который они несли.</li><br>","name":"Волчок","flavor":"«Тише, тише... Твое так твое» (Шарлотта Дейе).","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"Рагу из наворованных овощей, в которое для пущей (хотя и ложной) сытности подмешаны мох и древесная кора.<br><br><li><b>Умеренно повышает</b> скорость Виктора.</li><br>","name":"Лесное рагу","flavor":"«Ешь, ешь, дитя. Как проглотишь, станет легче» (Мадлен Дейе).","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"Один из немногих предметов роскоши из прежней жизни Мадлен. Источает приятный и умиротворяющий аромат.<br><br><li>Выжившие в пределах слышимости криков Виктора получают эффект <b>«Забывчивость»</b>.</li><br>","name":"Капля парфюма","flavor":"«Берегись коварной ведьмы, ибо она обратит твою доброту против тебя» («История ведьм и демонов», 1602 год).","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"Грубый клочок ветоши, которым пятилетняя Шарлотта затыкала себе рот. Он не давал ей кричать, когда охотникам удавалось подобраться слишком близко.<br><br><li>Прекращая бездействовать, Шарлотта получает статус <b>«Незаметность»</b> на <b>20 сек.</b></li><br>","name":"Тряпичный кляп","flavor":"«Мама, мне больше не хочется в это играть...» (Шарлотта Дейе)","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"Кажется, что этот кулон сделан из стекла, но на самом деле он выплавлен из самого Тумана. На нем изображена Мадлен Дейе, однако в ее образе проглядывает нечто пугающее.<br><br><li>Раздавив бездействующего Виктора, выживший получает эффект <b>«Уязвимость»</b> на <b>30 сек.</b></li><br>","name":"Переливчатый кулон","flavor":"«Ваша связь — не проклятие, любимые мои. Это источник вашей силы» (Мадлен Дейе).","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"Сумка с множеством потайных карманов. Используется начинающими магами и людьми, которые держат тайное под рукой.<br><li><b>Увеличивает</b> макс. количество носимых ножей на <b>10</b>.</li><li>В начале матча дает <b>10</b> дополнительных ножей.</li>","name":"Сумка ловкача","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"Порыжевшие от крови и затупившиеся от износа ножи. Чиун использовал их в первых убийствах, и теперь они дороги ему как память.<br><li>Дает <b>100%</b> бонусных очков крови за <b>«Коронный номер»</b>.</li><li><b>Умеренно увеличивает</b> показатель порезов каждого выжившего.</li>","name":"Памятные ножи","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"Аккорды, к которым Чиун так и не подобрал мелодию. Впрочем, они все еще цепляют звучанием.<br><li><b>Слегка увеличивают</b> скорость передвижения при метании ножей.</li>","name":"Убойные аккорды","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"Провода, обгоревшие после пожара в студии, который унес жизни четырех из пяти участников группы «БЕЗ ПРИКРАС». Их смерти и вызвали появление Трюкача.<br><li><b>Слегка продлевает</b> «Кульминацию».</li>","name":"Злосчастные провода","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"Напиток, придуманный в скромном баре Чанвона и ставший любимым у Чиуна.<br><li><b>Умеренно продлевает</b> «Кульминацию».</li>","name":"Текила «Лунный камень»","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"Андеграундный сингл, выпущенный Чиуном еще до обретения известности. Эта редкая драгоценность есть только в коллекциях самых больших поклонников группы.<br><li><b>Слегка увеличивает</b> время до начала опустошения шкалы порезов.</li>","name":"Сингл «Вижу цель»","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"Самый первый метательный нож Чиуна. Куплен его отцом для представлений, которые сын должен был устраивать для частых посетителей их семейного ресторана.<br><li><b>Слегка замедляет</b> опустошение шкалы порезов у каждого выжившего, когда кончаются ножи.</li>","name":"Счастливый ножик","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"Автограф звезды, известной под сценическим псевдонимом Трюкач. Несмотря на боли в запястье после сотен розданных автографов, такая популярность придавала ему сил.<br><li><b>Слегка увеличивает</b> начальную скорость метания ножей.</li>","name":"Автограф Чиуна","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"Обувь Чиуна из клипа на песню «Запертое сердце». Позволяет двигаться плавно и грациозно, как в балете.<br><li><b>Умеренно увеличивает</b> скорость передвижения при метании ножей.</li>","name":"Туфли запертого сердца","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"Карманные часы, которые были у Чиуна во время исполнения песни «Я буду ждать тебя». Просто реквизит, который никогда не работал и не будет работать.<br><li><b>Значительно ускоряет</b> опустошение шкалы порезов у каждого выжившего, когда кончаются ножи.</li>","name":"Часы-реквизит","flavor":"«Не убегай,<br>не рви со мной.<br>Я буду ждать тебя,<br>ведь нет судьбы иной».<br>Песня «Я буду ждать тебя» группы «БЕЗ ПРИКРАС»","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"Напульсник, который Чиун носил во время съемок клипа на песню «Потрошитель». Оказалось, что он фиксирует запястье лучше многих медицинских фиксаторов.<br><li><b>Умеренно увеличивает</b> время до начала опустошения шкалы порезов.</li>","name":"Напульсник из «Потрошителя»","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"Аудиофайл с записью чистых и четких криков жертв. Чиун включил эти звуки в один из своих популярных треков.<br><li><b>Умеренно уменьшает</b> шкалу порезов у каждого выжившего.</li>","name":"Мелодичное убийство","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"Банка газировки из ограниченной партии с рекламой группы «БЕЗ ПРИКРАС». Высокое содержание сахара и кофеина.<br><li><b>Умеренно увеличивает</b> начальную скорость метания ножей.</li>","name":"Шипучка без прикрас","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"Горжетка с потайными отделениями, которую Чиун накинул на перерезанное горло жертвы.<br><li><b>Увеличивает</b> макс. количество носимых ножей на <b>15</b>.</li><li>В начале матча дает <b>15</b> дополнительных ножей.</li>","name":"Кровавая горжетка","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"Особые ножи, которые кажутся плохими только людям с недостатком воображения. С ними молодой Чиун потрясал зрителей своими трюками.<br><li>Ножи дважды отскакивают от предметов окружения.</li><li>Рикошетные попадания дают дополнительные очки крови.</li>","name":"Трюковые ножи","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"Дебютный альбом Трюкача. Вызвал неоднозначную реакцию у фанов за свое грубое и жестокое звучание, несмотря на признание у критиков.<br><li>Ножи раскалываются при попадании в предметы, нанося <b>50% порезов</b> ближайшим выжившим.</li>","name":"Альбом «Край возрождения»","flavor":"«Я чувствую кожей твой шепот,<br>от каждой буквы тепло.<br>Вдохи твои обжигают горло,<br>отбирая мой кислород».<br>«Теплый шепот» в исполнении Трюкача","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"Запонки, которыми Чиун выколол глаза не в меру ретивой поклоннице, которой хватило глупости его преследовать. Если стереть кровь, они заманчиво сверкают и переливаются.<br><li>Когда на шкале порезов выжившего остается одно попадание до максимума, его аура открывается на <b>6 сек.</b></li>","name":"Бриллиантовые запонки","flavor":"«Ш-ш-ш, больше тебе не нужно видеть свою кровь» (Хак Чиун).","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"Первый сингл группы «БЕЗ ПРИКРАС» после присоединения к ним Чиуна. Взлетел на верхние строчки корейских чартов.<br><li>Ножи пронзают выживших насквозь.</li><li>Следующие выжившие, в которых попадают те же ножи, получают <b>50% порезов</b>.</li>","name":"Сингл «Сквозь тебя»","flavor":"«Этих чувств не остановишь,<br>они сердце прошьют насквозь.<br>Где ни была бы ты,<br>тебя настигнет нож моей любви».<br>Песня «Сквозь тебя» группы «БЕЗ ПРИКРАС»","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"Словно сделанная из стекла фотография, вылепленная из самого Тумана. Глаза Чиуна голографически сверкают, а на лице видна широкая улыбка.<br><li>Когда на шкале порезов выжившего остается одно попадание до максимума, он получает эффект <b>«Уязвимость»</b>.</li>","name":"Переливающийся снимок","flavor":"«Можешь выкрикивать мое имя. Дай мне послушать все, что пробуждает в тебе боль» (Хак Чиун).","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"Коллекция предсмертных звуков от жертв Чиуна, адаптированная для винила. Пугает и эмоционально выворачивает наизнанку.<br><li>Сила пореза от ножей считается в зависимости от близости к цели, начиная с минимальных <b>50%</b>.</li><li>Каждое попадание усиливает порезы до максимальных <b>200%</b>.</li><li>Если нож не попадает в цель, сила порезов сбрасывается до начального значения.</li>","name":"Сборник «Предсмертные муки»","flavor":"«Нет, пожалуйста!.. Не делайте мне больно... Я не могу... Я...» (неопознанный голос).","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"Электронный браслет Umbrella для гостей на территории корпорации. Также служит устройством слежения.<li><b>Умеренно увеличивает</b> радиус обнаружения зомби.</li>","name":"Гостевой браслет","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"Справочное руководство S.T.A.R.S. о ближнем бое, составленное Крисом Редфилдом.<li>Ауры зомби становятся желтыми на <b>6 сек.</b> после попадания по выжившему.</li>","name":"Полевой справочник S.T.A.R.S.","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"Медицинская принадлежность, плохо пережившая страшный хаос в Раккун-Сити.<li><b>Умеренно увеличивает</b> время, которое тратят выжившие на введение вакцины.</li><li><b>Слегка продлевает</b> действие эффекта «Инстинкт убийцы» при использовании вакцины выжившими.</li>","name":"Поврежденный шприц","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"Тонкий кишечник Брайана Айронса, начальника полицейского управления Раккун-Сити. Лакомый кусочек для зомби.<li><b>Слегка увеличивает</b> скорость передвижения зомби.</li>","name":"Кишки Брайана","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"Сердце вскрытого зомби. Считается опасными отходами, поскольку явно кишит вирусами.<li><b>Умеренно повышает</b> скорость мутации при уничтожении зомби «Ударом щупальцем».</li><br>","name":"Сердце зомби","flavor":"«Словами эту тварь не уймешь» (Леон С. Кеннеди).","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"От Михаила мало что осталось, но его левый глаз пережил взрыв, убивший самого солдата. Для зомби это настоящий деликатес.<li><b>Умеренно повышает</b> скорость передвижения зомби.</li>","name":"Глаз Михаила","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"Зараженная кровь офицера полиции Раккун-Сити.<li><b>Умеренно увеличивает</b> скорость мутации при попадании «Ударом щупальцем» по выжившим.</li><br>","name":"Кровь Марвина","flavor":"«Заруби себе на носу: если ослабишь внимание в этом месте, тебя съедят заживо» (Марвин Брэнаг).","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"Гормон, усиливающий работу органов чувств и готовящий тело к бою.<li><b>Значительно продлевает</b> действие «Инстинкта убийцы», когда выжившие используют вакцину.</li>","name":"Шприц с адреналином","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"Электронный браслет Umbrella для администраторов объекта. Открывает доступ в охраняемые зоны и одновременно служит устройством слежения.<li><b>Значительно увеличивает</b> радиус обнаружения зомби.</li>","name":"Браслет администратора","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"Поврежденная часть Тирана Т-002, погибшего в бою. На тканях видны следы серьезных ожогов.<li><b>Умеренно повышает</b> скорость мутации при уничтожении зомби «Ударом щупальцем».<li>Умеренно снижает время восстановления зомби.","name":"Останки Тирана","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"Образец Т-вируса, разработанного корпорацией Umbrella. Вызывает чрезвычайно сильные мутации и повреждение мозга у зараженного.<li><b>Значительно повышает</b> скорость мутации при уничтожении зомби «Ударом щупальцем». ","name":"Образец Т-вируса","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"Слегка снимающий напряжение гормон на случай, когда требуется действовать скрытно.<li>Дает эффект <b>«Незаметность»</b> на <b>15 сек.</b> при уничтожении зомби.</li>","name":"Шприц с серотонином","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"Переплетенные останки растения, зараженного Т-вирусом и убившего одного из вирусологов.<li><b>Значительно замедляют</b> открывание ящиков с припасами выжившими.","name":"Лианы образца 43 ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"Липкий и цепкий язык, который с легкостью обвивается вокруг всего, к чему прикоснется.<li><b>Умеренно увеличивает</b> время действия эффекта <b>«Замедление»</b> на зараженных выживших.</li><br>","name":"Язык лизуна","flavor":"«Это словно... ночной кошмар» (Клэр Редфилд).","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"Паразит, использованный при разработке Немезисов Т-типов. Умеет захватывать контроль над мозгом носителя.<li>При получении заражения на выжившего 60 сек. действует эффект <b>«Забывчивость»</b>.","name":"Паразит Ne-α (Ne-Альфа)","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"Весь помятый и забрызганный кровью после недавней схватки, но продолжающий вкусно и сильно пахнуть.<li>Показывает ауру выжившего в течение <b>12 сек.</b> после открытия им ящика с припасами.</li>","name":"Сэндвич Джилл","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"Кто их теперь спасет? Что-то в сухости этой чернильной ленты придает зомби энергии.<li><b>Значительно снижает</b> время восстановления зомби.</li><li>Умеренно повышает скорость передвижения зомби.</li><li>После починки <b>5</b> генераторов любые уничтоженные зомби снова появляются в зоне выхода.</li><br>","name":"Израсходованная чернильная лента","flavor":"«Так, чтобы ты знал... это последний, мать его, раз» (Джилл Валентайн).","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"Монета с изображением птицы в обрамлении лаврового венка. Сломана напополам.<li>Убирает <b>1</b> ящик с припасами из матча.</li><br>","name":"Сломанная монета восстановления","flavor":"«Не так я представлял себе свой первый день» (Леон С. Кеннеди).","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"Символ ныне растоптанной надежды Раккун-Сити.<li><b>Чрезвычайно увеличивает</b> скорость передвижения зомби на <b>30 сек.</b> после починки генератора.</li><br>","name":"Расколотый значок S.T.A.R.S.","flavor":"«S.T.A.R.S...» (Немезис).","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"Значок из материала, похожего на стекло, сделанный из самого Тумана. Служит символом корпорации, которая вывела свои исследования далеко за рамки этики и гуманной науки.<li>При использовании вакцины выжившие на <b>12 сек.</b> получают эффект <b>«Уязвимость»</b>.</li><br>","name":"Переливчатый значок Umbrella","flavor":"«Преданность, честность, верность принципам. Именно на эти ценности опирается корпорация Umbrella» (доктор Мэтт Горкис).","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/ru/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Дает <b>50%</b> бонусных очков крови в категории «Жестокость».<br><li>Эффект суммируется.</li>","name":"Венок Танагры","flavor":"«Изготовленный из кровавых палок и кишок, этот венок призывает Сущность пролить больше крови».","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"Дает <b>75%</b> бонусных очков крови в категории «Жестокость».<br><li>Эффект суммируется.</li>","name":"Молитвенный Венок Танагры","flavor":"«Изящно изготовленный из кровавых палок и кишок, этот венок призывает Сущность пролить больше крови».","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"Дает <b>100%</b> бонусных очков крови в категории «Жестокость».<br><li>Эффект суммируется.</li>","name":"Пламенный Венок Танагры","flavor":"«Изготовленный с пламенной страстью из кровавых палок и кишок, этот венок призывает Сущность пролить больше крови».","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"Дает <b>50%</b> бонусных очков крови в категории «Хитрость».<br><li>Эффект суммируется.</li>","name":"Венок Ворона","flavor":"«Изготовленный из закопченных веток и углей, этот венок призывает Сущность пролить больше крови».","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"Дает <b>75%</b> бонусных очков крови в категории «Хитрость».<br><li>Эффект суммируется.</li>","name":"Молитвенный Венок Ворона","flavor":"«Искусно изготовленный из закопченных веток и углей, этот венок призывает Сущность пролить больше крови».","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"Дает <b>100%</b> бонусных очков крови в категории «Хитрость».<br><li>Эффект суммируется.</li>","name":"Пламенный Венок Ворона","flavor":"«Изготовленный с пламенной страстью из кровавых палок и кишок, этот венок призывает Сущность пролить больше крови».","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"Дает <b>50%</b> бонусных очков крови в категории «Охота».<br><li>Эффект суммируется.</li>","name":"Венок Пятнистой Совы","flavor":"«Изготовленный из острого металла, веревок и перьев, этот венок призывает Сущность пролить больше крови».","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"Дает <b>75%</b> бонусных очков крови в категории «Охота».<br><li>Эффект суммируется.</li>","name":"Молитвенный Венок Пятнистой Совы","flavor":"«Искусно изготовленный из острого металла, веревок и перьев, этот венок призывает Сущность пролить больше крови».","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"Дает <b>100%</b> бонусных очков крови в категории «Охота».<br><li>Эффект суммируется.</li>","name":"Пламенный Венок Пятнистой Совы","flavor":"«Изготовленный с пламенной страстью из кровавых палок и кишок, этот венок призывает Сущность пролить больше крови».","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"Дает <b>50%</b> бонусных очков крови в категории «Жертвоприношение».<br><li>Эффект суммируется.</li>","name":"Венок Сорокопута","flavor":"«Изготовленный из палок, веревок и костей, этот венок призывает Сущность пролить больше крови».","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"Дает <b>75%</b> бонусных очков крови в категории «Жертвоприношение».<br><li>Эффект суммируется.</li>","name":"Молитвенный Венок Сорокопута","flavor":"«Этот венок из палок, веревок и костей призывает Сущность пролить больше крови».","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"Дает <b>100%</b> бонусных очков крови в категории «Жертвоприношение».<br><li>Эффект суммируется.</li>","name":"Пламенный Венок Сорокопута","flavor":"«Изготовленный с пламенной страстью из кровавых палок и кишок, этот венок призывает Сущность пролить больше крови».","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"Дает <b>25%</b> бонусных очков крови во всех категориях.<br><li>Эффект суммируется.</li>","name":"Пустая Оболочка","flavor":"«Непонятный кокон, поврежденный изнутри».","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"Дарует <b>100%</b> бонусных очков крови во всех категориях.<br><li>Личный.</li><li>Эффект суммируется.</li>","name":"Пудинг из Выживших","flavor":"«Пудинг, здорово сдобренный солью...»","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"Призывает Сущность предотвратить появление <b>2-х</b> сундуков.<br><li>Эффект суммируется.</li>","name":"Разрезанная Монета","flavor":"«Две половинки толстой металлической монеты».","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"Призывает Сущность предотвратить появление <b>1</b> сундука.<br><li>Эффект суммируется.</li>","name":"Поцарапанная Монета","flavor":"«Потертая монета неизвестного происхождения».","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"Призыв к Сущности с просьбой <b>слегка уменьшить</b> <b>расстояние</b> между крюками для жертвоприношений.<li>Эффект суммируется.</li>","name":"Заплесневелый дуб","flavor":"«Гнилой дубовый топляк, пропитанный водой и покрытый скользкой тиной».","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"Призывает Сущность <b>умеренно уменьшить</b> <b>расстояние</b> между крюками для жертвоприношений.<br><li>Эффект суммируется.</li>","name":"Гнилой Дуб","flavor":"«Разлагающийся кусок дуба, на котором были выгравированы странные знаки».","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"Призывает Сущность <b>значительно уменьшить</b> <b>расстояние</b> между крюками для жертвоприношений.<br><li>Эффект суммируется.</li>","name":"Разложившийся Дуб","flavor":"«Разваливающийся кусок дуба, из которого сочится черная гниющая жидкость».","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"Дарует возможность <b>убить последнего Выжившего</b> в следующем матче.<br><li>Секретное подношение.</li>","name":"Кипарисовое Memento Mori","flavor":"«Ты хорошо поработал, последний твой».","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"Дарует возможность <b>убить одного из выживших</b>, которого вы перед этим повесили на крюк, и который достигли на нем <b>второй стадии</b>, в следующем матче.<li>Секретное.</li>","name":"Костяное Memento Mori","flavor":"«Даруй мне наслаждение в виде убийства».","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"Дарует возможность <b>убить всех выживших</b>, которых вы перед этим подвесили на крюк, и которые достигли на нем <b>второй стадии</b>, в следующем матче.<li>Секретное.</li>","name":"Эбеновое Memento Mori","flavor":"«Я могу поклясться, что она разговаривала со зверем. Тот остановился, будто прислушиваясь к шелесту листьев, а затем... ухмыльнулся».","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"Все Выжившие начинают матч порознь.<br><li>Секретное подношение.</li>","name":"Пелена Разлуки","flavor":"«Тонкая, черная пелена разлетающаяся на куски».","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/ru/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"У вас появляется способность чтения ауры. Каждый раз после полной починки генератора вы будете видеть ауры Выживших в радиусе <span class=\\"Highlight1\\">{0} метров</span> от заведенного генератора в течение <span class=\\"Highlight2\\">{1} секунд</span>.<br>Когда будет полностью заведен последний генератор, ауры всех Выживших откроются вам на <span class=\\"Highlight3\\">{2} секунд</span>.","name":"Тихий Шорох","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"У вас появляется способность чтения ауры. Вы видите ауры умирающих Выживших в радиусе <span class=\\"Highlight1\\">{0} м</span> от вас.","name":"Охотник на Оленей","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"Ваша ужасающая энергетика распространяется на сверхъестественно большие расстояния. Радиус вашего террора увеличивается на <span class=\\"Highlight1\\">{0}%</span>. Вы получаете на <span class=\\"Highlight2\\">{1}%</span> больше очков крови за действия в категории «Хитрость».<br>","name":"Сеющий Страх","flavor":"«Насладись их страхом».","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"Вы научились действовать скрытно.<br><br>Простояв неподвижно в течение <span class=\\"Highlight1\\">{0} сек.</span>, вы получаете эффект <b>«Незаметность»</b>, который пропадает, если вы совершите действие или начнете двигаться.","name":"Коварство","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"Порча, черпающая силу в надежде. Тотем порчи наполняет вас силой, когда Выжившие в двух шагах от бегства.<br>Как только на ворота будет подано питание, проклятие падет на тусклый тотем, если он остался на карте.</br><br>Во время действия этого проклятия <li>Выжившие получают эффект <b><i>«Уязвимость»</i></b>.</li><li>Ваша скорость движения увеличена на <span class=\\"Highlight1\\">{0}%.</span></li><br>Порча действует, пока не уничтожен соответствующий тотем.<br>","name":"Порча: Никому не скрыться от Смерти","flavor":"«Тварь стала быстрее и сильнее, словно подстегнутая туманным хлыстом Сущности».","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"Порча, черпающая силу в надежде. Ложная надежда Выживших возбуждает вас и усиливает ваши тотемы. Вы получаете жетон за каждый тусклый тотем и тотем порчи на карте.<br><li>За каждый жетон вы получаете на <span class=\\"Highlight1\\">{0}%</span> больше очков крови за действия в категории «Охота».</li><li>Скорость очищения тотемов у Выживших сокращается на <span class=\\"Highlight2\\">{1}%</span> за каждый жетон.</li><li>Вы получите уведомление, когда Выживший начнет очищать тотем порчи.</li><br><i>Порча действует, пока не уничтожен соответствующий тотем.</i>","name":"Порча: Охотничий Азарт","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"Ваша страсть к крюкам в подвале заинтересовала Сущность. Крюки из подвала дают следующие бонусы:<br><li>Сущность поглощает жертву на <span class=\\"Highlight1\\">{0}%</span> быстрее.</li><li>На <span class=\\"Highlight2\\">{1}%</span> возрастает сложность побега с крюка.</li><li>На <span class=\\"Highlight3\\">{2}%</span> увеличивается наказание при неудачных попытках побега.</li>","name":"Чудовищный Храм","flavor":"«И тогда ты поймешь, что сбежать не получится. Там, на крюке, ты лицом к лицу с самой тьмой».","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"Небрежный Мясник","tiers":[["Вы знаете, как заставить жертву истекать кровью. Раны, нанесенные успешными <i>базовыми атаками</i>, накладывают эффекты <b>«Травма»</b> и <b>«Кровотечение»</b>. <b>«Кровотечение»</b> <span class=\\"Highlight1\\">слегка</span> увеличивает силу истекания кровью у выжившего.<br>Эффект <b>кровотечения</b>, вызванный <i>«Небрежным мясником»</i>, снимается, только когда выживший будет полностью вылечен.<br><span class=\\"FlavorText\\">«Все дело в садистском характере. Быстрому убийству нет места, поскольку наслаждение приносит именно кровавый спектакль мучительных страданий».</span>"],["Вы знаете, как заставить жертву истекать кровью. Раны, нанесенные успешными <i>базовыми атаками</i>, накладывают эффекты <b>«Травма»</b> и <b>«Кровотечение»</b>. <b>«Кровотечение»</b> <span class=\\"Highlight1\\">умеренно</span> увеличивает силу истекания кровью у выжившего.<br>Эффект <b>кровотечения</b>, вызванный <i>«Небрежным мясником»</i>, снимается, только когда выживший будет полностью вылечен.<br><span class=\\"FlavorText\\">«Все дело в садистском характере. Быстрому убийству нет места, поскольку наслаждение приносит именно кровавый спектакль мучительных страданий».</span>"],["Вы знаете, как заставить жертву истекать кровью. Раны, нанесенные успешными <i>базовыми атаками</i>, накладывают эффекты <b>«Травма»</b> и <b>«Кровотечение»</b>. <b>«Кровотечение»</b> <span class=\\"Highlight1\\">значительно</span> увеличивает силу истекания кровью у выжившего.<br>Эффект <b>кровотечения</b>, вызванный <i>«Небрежным мясником»</i>, снимается, только когда выживший будет полностью вылечен.<br><span class=\\"FlavorText\\">«Все дело в садистском характере. Быстрому убийству нет места, поскольку наслаждение приносит именно кровавый спектакль мучительных страданий».</span>"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"Вороны могут общаться с вами напрямую. В <span class=\\"Highlight1\\">{0}%</span> случаев каркающие вороны будут давать вам визуальную подсказку, когда вы находитесь в радиусе <span class=\\"Highlight2\\">{1} м</span>.<br><i>«Сумеречным шпионам»</i> требуется <span class=\\"Highlight3\\">{2} сек. на перезарядку.</span><br>","name":"Сумеречные шпионы","flavor":"«Они терзают нас в ночи, с каждым криком оставляя шрамы в наших головах».","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"Вы быстрее оправляетесь после неудачной атаки основным оружием. Время перезарядки после <i>базовой атаки</i> мимо цели снижается на <span class=\\"Highlight1\\">{0}%</span>.","name":"Безжалостный","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"Вы начинаете немного понимать, о чем говорит Сущность. Вы периодически слышите ее шепот, находясь в радиусе <span class=\\"Highlight1\\">{0} м</span> от Выжившего.<br>","name":"Шепоты","flavor":"«Мотив тумана неясен, но безусловно он зачастую принимает сторону зверя» (из блокнота).","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"Вы крайне чувствительны к дыханию своей жертвы. Дыхание Выживших, страдающих от боли, звучит на <span class=\\"Highlight1\\">{0}%</span> громче, обычное дыхание громче на <span class=\\"Highlight2\\">{1}%</span>.<br>","name":"Стридор","flavor":"«Если не остановитесь и не задержите дыхание... она задержит его за вас».","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"Их храбрость тает перед лицом неизбежной смерти.<br>За каждого раненого, умирающего или повешенного на крюк выжившего скорость поломки, починки и очистки тотемов у остальных снижается на <span class=\\"Highlight1\\">{0}%</span>. Максимальный штраф — <span class=\\"Highlight1\\">{1}%</span>.","name":"Танатофобия","flavor":"«Она играет с нами и наслаждается нашей болью».","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"У вас появляется способность чтения ауры. Ауры Выживших - лечащих или лечащихся, раскрываются вам, когда они находятся в радиусе <span class=\\"Highlight1\\">{0} метров</span> от вас.<br>","name":"Зов Медсестры","flavor":"«Еще не потерявшая всех воспоминаний из прошлой жизни, ее влечет к нуждающимся, как и раньше».","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"Одно ваше присутствие вселяет страх. У выживших, находящихся в пределах вашего радиуса террора, на <span class=\\"Highlight1\\">{0}%</span> чаще срабатывает проверка реакции при починке или лечении. Зона успеха при проверке реакции уменьшается на <span class=\\"Highlight2\\">{1}%</span>.","name":"Пугающее Присутствие","flavor":"«Когда он рядом, мы не можем сосредоточиться».","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"С такой великой силой вам не страшна никакая преграда. Теперь вы ломаете <b>опрокинутые доски, разрушаемые стены и генераторы</b> на <span class=\\"Highlight1\\">{0}%</span> быстрее.","name":"Зверская Сила","flavor":"«Это больше, чем просто мышцы. Зверем движут сами силы тьмы».","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"Вы возбуждены от желания поскорее повесить вашу добычу. Увеличивает вашу скорость во время перемещения тел на <span class=\\"Highlight1\\">{0}%</span>. Во время транспортировки тела радиус вашего террора увеличивается на <span class=\\"Highlight2\\">{1} м</span>.<br>","name":"Нетерпимость","flavor":" «В какой-то момент желание повесить одного из нас на крюк перевешивает желание убить нас».","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"Хищник","tiers":[["Ваш талант следопыта позволяет тщательнее исследовать следы, которые оставляют за собой бегущие Выжившие.<br>Следы-трещины, оставленные Выжившими, будут появляться <span class=\\"Highlight1\\">слегка</span> ближе и плотнее друг к другу.<br><br><span class=\\"FlavorText\\">«Никогда не останавливайся и надейся, что ты всегда на два шага впереди зверя» (Из дневника).</span>"],["Ваш талант следопыта позволяет тщательнее исследовать следы, которые оставляют за собой бегущие Выжившие.<br>Следы-трещины, оставленные Выжившими, будут появляться <span class=\\"Highlight1\\">умеренно</span> ближе и плотнее друг к другу.<br><br><span class=\\"FlavorText\\">«Никогда не останавливайся и надейся, что ты всегда на два шага впереди зверя» (Из дневника).</span>"],["Ваш талант следопыта позволяет тщательнее исследовать следы, которые оставляют за собой бегущие Выжившие.<br>Следы-трещины, оставленные Выжившими, будут появляться <span class=\\"Highlight1\\">значительно</span> ближе и плотнее друг к другу.<br><br><span class=\\"FlavorText\\">«Никогда не останавливайся и надейся, что ты всегда на два шага впереди зверя» (Из дневника).</span>"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"Подобно гончей, вы чуете кровь издалека. Свежие следы крови <span class=\\"Highlight1\\">значительно заметнее</span>, чем обычно, и отслеживаются на <span class=\\"Highlight2\\">{0} сек.</span> дольше.<br>","name":"Ищейка","flavor":"«Камушки переливаются в лунном свете; жизнь моя стекает по тропинке, которую так легко найти».","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"Вы хорошо видите во мраке ночи. Угол вашего обзора увеличен на <span class=\\"Highlight2\\">{0} градусов</span>.<br><i>Не суммируется с другими бонусами к углу обзора.</i><br>","name":"Детище Тьмы","flavor":"«Его глаза, сияющие во мраке, пронзают ночь и жалят твою душу».","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"Вы не чувствуете боль. Длительность <b>оглушения досками</b> снижена на <span class=\\"Highlight1\\">{0}%</span>.","name":"Стойкий","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"В отличие от других тварей из Тумана, вы приспособились к свету. Вы обрели иммунитет к ослеплению фонариками, хлопушками, ослепляющими гранатами и фугасными минами. Ауры выживших, которые пытаются вас ослепить, подсвечиваются вам на <span class=\\"Highlight1\\">{0} сек.</span>","name":"Детище Света","flavor":"«Эти монстры... Они приспосабливаются! У них откуда-то появляются странные новые способности!» (из дневника Виго).","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"Когда ремонт генератора доходит до <span class=\\"Highlight1\\">{0}%</span>, вы слышите громкий звук и получаете эффект <b>«Незаметность»</b> на <span class=\\"Highlight2\\">{2} сек.</span>","name":"Умелец","flavor":"«Деревенщина делает впечатляющие штуки из разного хлама. Очень творческий подход к издевательствам над нами...» — Запись в блокноте","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"Вы становитесь <b>одержимы</b> одним выжившим.<br>За каждый успешный удар <i>базовой атакой</i> НЕ по объекту одержимости вы получаете один жетон. <br>Каждый жетон ускоряет восстановление после успешных <i>базовых атак</i> на <span class=\\"Highlight1\\">{0}%</span> (эффект суммируется). Всего вы можете получить до <span class=\\"Highlight2\\">{1}</span> шт. жетонов.<br>Если вы попадете <i>базовой атакой</i> по объекту одержимости, то потеряете <span class=\\"Highlight3\\">{2}</span> шт. жетонов. <br>Вы не сможете получать жетоны, если ваш объект одержимости будет принесен в жертву или убит.<br><li><i>Одновременно убийца может быть <b>одержим</b> только одной жертвой.</i></li>","name":"Оставьте лучшее напоследок","flavor":"«Смерть пришла в ваш маленький городок, шериф». — Доктор Сэм Лумис","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"Вы становитесь <b>одержимы</b> одним выжившим.<br>Каждый раз, когда вы преследуете и упускаете объект одержимости, вы получаете 1 жетон (вплоть до {0}).<br>Каждый жетон повышает вашу скорость передвижения на <span class=\\"Highlight1\\">{1}%</span>.<br>Каждая <i>базовая</i> или <i>особая атака</i> тратит один жетон.<br><li><i>Одновременно убийца может быть <b>одержим</b> только одной жертвой.</i></li>","name":"Поиграть со своей жертвой","flavor":"«Ты обманул их, не так ли, Майкл? Но не меня» (Доктор Сэм Лумис).","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"Вы становитесь <b>одержимы</b> одним выжившим.<br>Объект вашей одержимости получает бонус к скорости действий <span class=\\"Highlight1\\">{0}%</span> при снятии с крючка и лечении других выживших.<br> Каждый раз, когда вы вешаете на крюк выжившего, не являющегося объектом вашей одержимости, и если объект одержимости при этом жив, вы получаете жетон.<br>Пока объект одержимости жив, остальные выжившие получают штраф к скорости ремонта, лечения и поломки <span class=\\"Highlight2\\">{1}%</span> за каждый жетон.<br><li><i>Одновременно убийца может быть одержим только одним выжившим.</i></li>","name":"Угасающий Свет","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"Порча, препятствующая чтению ауры. При активном тотеме порчи удар по выжившему <i>базовой атакой</i> вызывает эффект <b>«Слепота»</b>, который распространяется на последних <span class=\\"Highlight1\\">{0}</span> выживших, попавших под удар.<br><i>Порча действует, пока не уничтожен соответствующий тотем.</i>","name":"Порча: Третья Печать","flavor":"«Она дотронулась до тебя! Теперь на тебе метка ведьмы!»","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"Порча, влияющая на прогресс починки генераторов у всех выживших. <i>«Порча: Погибель»</i> воздействует на все генераторы. Когда выживший прекращает чинить генератор, прогресс тут же автоматически начинает снижаться со скоростью, составляющей <span class=\\"Highlight1\\">{0}%</span> от обычной.<br><br><i>Порча действует, пока не уничтожен соответствующий тотем.</i><br>","name":"Порча: Погибель","flavor":"«На тебе лежит проклятие. Оно приведет к твоей погибели».","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"Порча, черпающая силу в надежде. Ложная надежда Выживших лишь усиливает ваш голод. Когда Выживший спасен с крюка хотя бы в <span class=\\"Highlight1\\">24 метрах</span> от вас, навык «Пожирание надежды» получает жетон.<br><li><span class=\\"Highlight3\\">2 жетона</span>: <span class=\\"Highlight2\\">скорость передвижения увеличивается на {0}%</span><b><i></i></b> на <span class=\\"Highlight3\\">10 секунд</span> после того, как вы вешаете Выжившего на крюк. Ускорение активируется через <span class=\\"Highlight3\\">10 секунд</span> после повешения.</li><li><span class=\\"Highlight3\\">3 жетона</span>: Выжившие получают эффект <b><i>«Уязвимость»</i></b>.</li><li><span class=\\"Highlight3\\">5 жетонов</span>: дает возможность убивать Выживших своими руками.</li><br><i>Эффект порчи сохраняется, пока стоит соответствующий тотем.</i><br>","name":"Порча: Пожирание Надежды","flavor":"«Если ты бездействуешь, ты виноват в их смерти. Но если ты их спасаешь, это лишь еще больше усиливает её голод».","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"Одно ваше присутствие вселяет страх. Выжившие, находящиеся в вашем радиусе террора, становятся менее способными.<br>У этих Выживших возрастает скорость траты предметов на <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Невыносимое Присутствие","flavor":"«Дерьмо! Я уронил повязку!»","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"Щепетильный в своих методах и грозный в своем обличии.<br>Во время погони ваш радиус террора увеличивается на <span class=\\"Highlight1\\">{0} м</span>. В обычном состоянии ваш радиус террора уменьшается на <span class=\\"Highlight2\\">{0} м</span>, а угол обзора увеличивается на <span class=\\"Highlight3\\">{1} град</span>.<br><i>Эффекты увеличения угла обзора не суммируются.</i>","name":"Слежка и Наказание","flavor":"«Вам пора на процедуры!» — Доктор","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"Вас переполняет ненависть к прогрессу.<br>Вы можете перегрузить генератор, совершив действие <b>«Поломка генератора»</b>. Выживший, который попытается взаимодействовать с этим генератором, столкнется с <span class=\\"Highlight1\\">чрезвычайно</span> тяжелой проверкой реакции. При провале этой проверки починка откатывается еще на <span class=\\"Highlight2\\">{0}%</span>.<br>Успешная проверка не увеличивает прогресс починки, но защищает от взрыва.","name":"Перегрузка","flavor":"«Это ловушка, но нам придется в нее шагнуть...» — Доктор","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"Ваша жажда убийства столь сильна, что на короткое время затмевает даже связь с Сущностью, и ваши действия становятся совершенно непредсказуемыми.<br><br>Когда вы получаете 1-й уровень кровожадности, на вас начинает действовать эффект <b>«Незаметность»</b>. Эффект пропадает, когда вы теряете кровожадность.<br><br><li>Вы получаете на <span class=\\"Highlight1\\">{0}%</span> больше очков крови в категории «Охота».</li>","name":"Хищный Зверь","flavor":"«Куда она подевалась?»","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"У вас появляется способность чтения ауры. Ауры Выживших раскрываются вам на <span class=\\"Highlight1\\">{0} секунды</span>, когда те спускаются в подвал, а вы находитесь более чем в <span class=\\"Highlight2\\">{1}-х метрах</span> от него.<br><i>Территориальный Императив</i> может сработать лишь раз в <span class=\\"Highlight3\\">{2} секунд</span>.","name":"Территориальный Императив","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"Порча, черпающая свою силу из отчаяния. Вы напеваете навязчивую мелодию ужаса, которая путает мысли жертвы. Выжившие получают штраф <span class=\\"Highlight1\\">{0}%</span> к прогрессу при лечении или починке, если проваливают проверку реакции.<br>Каждый раз, когда выживший попадает на крюк, сила «Колыбельной Охотницы» возрастает. Это сказывается на предупреждении о проверках реакции при лечении и починке: <br><li><b>от 1 до 4 жетонов:</b> время между проверками реакции и предупреждающим о них звуком сокращается.</li><li><b>5 жетонов:</b> нет предупреждения при проверке реакции.</li><br><i>Эффект порчи сохраняется, пока стоит соответствующий ей тотем.</i>","name":"Порча: Колыбельная Охотницы","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"Травмы, нанесенные вашими жестокими ударами, не позволяют выжившим звать на помощь.<br>Ауры умирающих выживших, которых вы сразили базовыми атаками, не видны их союзникам, пока те находятся более чем в <span class=\\"Highlight1\\">{2} м</span> от них.<br>Умирающие выжившие, которых вы сразили базовыми атаками, ползают на <span class=\\"Highlight2\\">{1}% медленнее</span> в течение <span class=\\"Highlight3\\">{0} сек</span>.<br>В это время на выживших действует эффект <b>«Слепота»</b>.","name":"Нокаут","flavor":"«О, пистолет?.. Нет, это ерунда. По старинке... молотком! Так гораздо лучше, знаете ли. Так они умирают куда интереснее» (Наббинс Сойер).","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"Тесная связь с Сущностью дарует вам способность чтения аур. После того, как вы вешаете Выжившего на крюк, ауры остальных Выживших открываются вам на <span class=\\"Highlight1\\">{0} сек.</span>, если они находятся более чем в <span class=\\"Highlight2\\">{1} м</span> от крюка.<br><li>Каждый раз, когда Выживший повешен в первый раз, вы получаете <span class=\\"Highlight3\\"\\\\>{2}%</span> суммируемый бонус ко всем очкам крови (макс. бонус — <span class=\\"Highlight4\\">{3}%</span>).<br>Бонусные очки крови выдаются после матча.</li>","name":"Барбекю и Чили","flavor":"«Не могу получать удовольствия от убийств. Просто есть вещи, которые приходится делать. Это не значит, что они должны тебе нравиться» (Дрейтон Сойер).","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"Ваши атаки столь яростны, что попавшие под удар выжившие роняют предметы. Если выпавший предмет не успеют подобрать в течение <span class=\\"Highlight1\\">{0} сек.</span>, Сущность его поглотит.<br>Ауры выпавших предметов в радиусе <span class=\\"Highlight2\\">{1} м</span> подсвечиваются белым. Ауры предметов постепенно краснеют, пока их не поглотит Сущность.","name":"Гибель Франклина","flavor":"«Салли, я что-то слышу. Стой! Остановись!» (Франклин).","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"Страх потерять жертв наполняет вас злобой и заставляет продолжать охоту. Каждый раз, после того как выживший восстанавливает генератор, пламя мести разгорается сильнее.<br><li>За каждый отремонтированный генератор вы получаете +<span class=\\"Highlight1\\">{0}%</span> (бонус суммируется) к скорости следующих действий до конца матча: поднятие/бросание, преодоление препятствий, поломка генераторов и досок.</li>","name":"Яркое Пламя","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"Вы становитесь <b>одержимы</b> одним выжившим. Каждый раз, когда вы попадаете по объекту одержимости <i>базовой атакой</i>, время, необходимое для открытия ворот, увеличивается на <span class=\\"Highlight1\\">{0} сек.</span> вплоть до <span class=\\"Highlight2\\">{1} сек.</span> максимум.<br>Навык <i>«Помни меня»<i> не влияет на объект одержимости.</i><br><li>Одновременно убийца может быть <b>одержим</b> только одной жертвой.</i></li>","name":"Помни Меня","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"Как только открываются Ворота, навык Кровавый Смотритель станет активным. Вы будете видеть ауры Выживших, которые находятся рядом с выходом. <br>Раз в матч, когда хотя бы одни Ворота открыты, повесив Выжившего на крюк, вы призываете Сущность заблокировать все выходы для Выживших на <span class=\\"Highlight1\\">{0} секунд </span>.","name":"Кровавый Смотритель","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"Благодаря хитроумным усовершенствованиям крюков вы узнаете, если кто-то пытается их повредить.<br><li>Вы получаете уведомление, когда выживший начинает ломать крюк.</li><li>Когда вы несете выжившего, вам будет показана аура любого выжившего в радиусе <span class=\\"Highlight1\\">{0} м</span> от крюка.</li>","name":"Секрет Палача","flavor":"«Не оправдывайся. Не хитри... И не плачь» (Аманда Янг).","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"У вас появляется способность чтения ауры. Любой сломанный генератор подсвечивается белым. Если поломка исправлена, генератор подсвечивается желтым на <span class=\\"Highlight1\\">{0} сек</span>.<br>Шум от ремонта генераторов слышен на большем расстоянии (+<span class=\\"Highlight2\\">{1} м</span>).<br>","name":"Наблюдение","flavor":"«Будешь паинькой?» (Аманда Янг).","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"Когда выживший спасает союзника с крюка на расстоянии хотя бы <span class=\\"Highlight1\\">{0} м</span> от вас, срабатывает <i>«Выбор за тобой»</i>: спаситель вскрикивает, и на него накладывается эффект <b><i>«Уязвимость»</i></b> на <span class=\\"Highlight2\\">{1} сек.</span><br><i>«Выбор за тобой»</i> может снова сработать через <span class=\\"Highlight3\\">{2} сек.</span>","name":"Выбор За Тобой","flavor":"«Ты бы удивилась, узнав, какие инструменты могут спасти жизнь» (Аманда Янг).","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"Железная хватка, с которой вы держите Выживших, практически лишает их возможности побега. Эффективность сопротивления Выживших понижена на <span class=\\"Highlight1\\">{0}%</span>. Время высвобождения из вашей хватки увеличивается на <span class=\\"Highlight2\\">{1}%</span>.","name":"Мертвая Хватка","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"Само ваше присутствие внушает сильный страх. Находясь в радиусе вашего террора, Выжившие лечатся на <span class=\\"Highlight1\\">{0}%</span> медленнее.<br>","name":"Клоунофобия","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"Глубокая связь с Сущностью дарит вам силу. После того, как вы подвесили выжившего, следующий сломанный вами генератор сразу лишится <span class=\\"Highlight1\\">{0}%</span> прогресса. После повреждения генератора прогресс будет уменьшаться с обычной скоростью.<br><i>«Чертик из табакерки»</i> действует в течение <span class=\\"Highlight1\\">{1} сек.</span> после подвешивания выжившего.","name":"Чертик Из Табакерки","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"Вы перелезаете через препятствия на <span class=\\"Highlight1\\">{0}%</span> быстрее.<br>После преодоления препятствия Сущность заблокирует его на <span class=\\"Highlight1\\">{1} сек</span>.<br>Навык может заблокировать только одно препятствие за раз. Препятствие заблокировано только для Выживших.<br>Не действует на доски.","name":"Розыгрыш","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"Каждая сломанная доска приумножает ярость Сущности.<br>После поломки <span class=\\"Highlight1\\">{0} досок</span>, в следующий раз когда вы будете оглушены доской, Сущность моментально сломает ее.<br>При этом вы все равно пострадаете от оглушения.<br>","name":"Ярость Духа","flavor":"«Ярость в ее крови».","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"В матче появятся два проклятых Тотема.<br>Когда Выживший очищает любой из проклятых Тотемов, все Выжившие начинают страдать от эффекта <span class=\\"Highlight3\\">«Уязвимость»</span> в течение <span class=\\"Highlight1\\">{0} сек</span>. <br>Другой проклятый Тотем сразу становится пустышкой.<br>","name":"Порча: Проклятая Земля","flavor":"«Ее дом осквернили».","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"Вы становитесь <b>одержимы</b> одним Выжившим.<br>Каждый раз после полной починки генератора ваша Одержимость видит вас на протяжении<span class=\\"Highlight1\\"> {0} секунд</span>.<br>Каждый раз после полной починки генератора ауры всех Выживших раскрываются вам на <span class=\\"Highlight2\\"> {1} секунды</span>.<br>Как только все генераторы заведены, ваша Одержимость начинает страдать от эффекта <span class=\\"Highlight3\\">Уязвимость</span> и вы можете <span class=\\"Highlight3\\">убить</span> ее своими руками.<br><li><i>Убийца может быть одержим только одним игроком за раз.</i></li>","name":"Ненависть","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"Любой генератор в радиусе <span class=\\"Highlight1\\">{0} м</span>, который чинят два или более выживших, будет подсвечен желтой аурой. При первом подсвечивании «Разлад» вызывает громкий звук, указывающий на генератор. Если генератор оказывается вне радиуса действия или уже не чинится двумя или более выжившими, аура остается еще на <span class=\\"Highlight2\\">4 сек.</span><br>","name":"Разлад","flavor":"«Умников убивают. Мы всегда за этим следим» (Легион).","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"Когда вы несете выжившего, <i>базовые атаки</i> мимо цели не требуют перезарядки. После успешного попадания <i>базовой атакой</i> по другому выжившему уже пойманный не сможет вырываться <span class=\\"Highlight1\\">{0} сек.</span><br>","name":"Безумное упорство","flavor":"«Теперь уже не сбежишь. Мы слишком хороши». — Легион","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"Вы открываете шкафчики на <span class=\\"Highlight1\\">{0}%</span> быстрее.<br><br>Вылезающие из шкафчиков выжившие получают эффект «Уязвимость» на <span class=\\"Highlight1\\">{2} сек.</span> Они кричат, раскрывая свое местоположение на <span class=\\"Highlight1\\">{1} сек.</span><br>","name":"Железная дева","flavor":"«Трусам здесь не место» (Легион).","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"Ваши молитвы пробуждают темную силу, которая мешает выжившим. В начале испытания Сущность блокирует <span class=\\"Highlight1\\">генераторы ({0})</span>, которые находятся от вас дальше всего, на <span class=\\"Highlight1\\">{1} сек.</span><br>На протяжении этого времени выжившие не могут их чинить. Такие генераторы подсвечиваются белым.<br>","name":"Вмешательство скверны","flavor":"«Весть сия да разнесется по земле: Боги карают неверных» («Скрижаль Адирис», 3.7).","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"От криков неверных ваше сердце бьется чаще.<br>Когда кто-нибудь из выживших оказывается в предсмертном состоянии, все выжившие в радиусе вашего террора кричат и выдают себя на <span class=\\"Highlight1\\">{0} сек</span>.","name":"Заразительный ужас","flavor":"«Ужас наполняет сердца неверных, и они рыдают у ног павших» («Хвалебный гимн», 11. 4).","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"Демонстрация вашей силы вызывает панический вихрь, который охватывает все вокруг.<br><br>Вы становитесь одержимы одним выжившим. Когда вы попадаете по объекту одержимости <i>базовыми атаками</i>, ваш радиус террора передается ему на <span class=\\"Highlight2\\">{1} сек.</span> и распространяется на <span class=\\"Highlight1\\">{0} м</span>. В течение этого времени на вас действует эффект <b>«Незаметность»</b>.<br><br>Выживший, которому передан радиус террора, считается находящимся в пределах радиуса террора убийцы.<br><br><li><i>Одновременно убийца может быть <b>одержим</b> только одной жертвой.</i></li><br>","name":"Темная преданность","flavor":"«Ужас овладеет заблудшими, и они разнесут ложную весть о моем прибытии». — «Скрижали Адирис», 48.9","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"Ваши органы чувств обострились в темных владениях Сущности.<br><br>Разблокирует возможности чтения ауры. Вы увидите ауру любого выжившего, совершающего резкие действия на расстоянии <span class=\\"Highlight1\\">48 м</span> от вас. Действует <span class=\\"Highlight2\\">{0} сек.</span><br><br><i>«Чуткий слух»</i> срабатывает только раз в <span class=\\"Highlight3\\">{1} сек.</span><br>","name":"Чуткий слух","flavor":"«Не стоит беспокоиться, я готовился к этому всю жизнь» (Гоуст Фейс).","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"Ваши темные помыслы, собранность и хладнокровие будоражат Сущность.<br><br>Когда вы подбираете выжившего, Сущность блокирует все генераторы, которые в данный момент не чинят выжившие, и в течение <span class=\\"Highlight1\\">{0} сек.</span> их нельзя будет ремонтировать. Такие генераторы подсвечиваются белым.<br><br><i>«Пугающая тряска»</i> срабатывает только раз в <span class=\\"Highlight2\\">{1} сек</span>.<br>","name":"Пугающая тряска","flavor":"«Ночь — моя союзница, а здесь она вечна» (Гоуст Фейс).","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"Вы становитесь <b>одержимы</b> одним выжившим. Вы прячетесь в тенях, уничтожая жертв одну за другой. Когда объект вашей одержимости оказывается на крюке, <i>«Скрытная погоня»</i> получает жетон, но не более <span class=\\"Highlight1\\">{0} шт.</span><br><br>Во время погони каждый жетон уменьшает ваш радиус террора на <span class=\\"Highlight2\\">{1} м</span>.<br><br>Если выживший снимает объект вашей одержимости с крюка, вы становитесь одержимы спасителем. Вы потеряете все жетоны, если объект одержимости будет принесен в жертву или убит.<br><br><li><i>Одновременно убийца может быть <b>одержим</b> только одним выжившим.</i></li><br>","name":"Скрытная погоня","flavor":"«Ты даже не представляешь, что тебя ждет. Газеты будут писать об этом неделями, это я тебе обещаю» (Гоуст Фейс).","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"В вашем ужасающем присутствии воздух электризуется, а техника начинает сходить с ума.<br><br>Если вы доводите выжившего до предсмертного состояния <i>базовой атакой</i>, все генераторы в радиусе <span class=\\"Highlight1\\">{0} м</span> тут же взрываются и начинают портиться. Генераторы, на которые подействовал «Выброс», сразу потеряют <span class=\\"Highlight2\\">{1}%</span> прогресса их починки.<li><i>«Выброс»</i> можно активировать с перерывом в <span class=\\"Highlight3\\">{2} сек.</span></li><br>","name":"Выброс","flavor":"«Существо неведомым образом влияет на электричество и электронику поблизости». — Национальная лаборатория Хоукинса","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"Ваша пугающая близость ослабляет жертву и лишает ее сил.<br><br>Во время починки генераторов на выживших действует эффект <b>«Усталость»</b>.<br><br>Все текущие таймеры <b>усталости</b> замедляются на время починки генератора. Завершив действие починки, выживший снова попадает под действие <b>усталости</b> на <span class=\\"Highlight2\\">{1} сек</span>.<br>","name":"Разрушитель разума","flavor":"«Похоже, телепатические способности особи позволяют ей вызывать у людей, оказавшихся поблизости, ощущения ужаса и усталости». — Национальная лаборатория Хоукинса","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"Ваша связь с иным миром проявляется, когда жертва пытается сбежать.<br><br>После каждого завершения ремонта генератора все окна и места для прыжков в радиусе <span class=\\"Highlight1\\">{0} м</span> от исправного генератора блокируются для всех выживших на <span class=\\"Highlight2\\">{1} сек</span>. <br><br>Во время действия навыка вы видите ауру мест для прыжков, заблокированных <i>«Жестокой изоляцией»</i>.<br>","name":"Жестокая изоляция","flavor":"«Похоже, особь способна влиять на состояние ближайших объектов. Они словно одновременно существуют в ином мире, в отличной от видимой нами форме» (Национальная лаборатория Хоукинса).","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"У вас появляется способность чтения ауры. Вы в курсе того, где расположены важные для выживания объекты.<br><br>Вы видите ауры досок, разрушаемых стен и мест совершения прыжков в радиусе <span class=\\"Highlight1\\">{0} м</span> от себя.<br>","name":"Тактика зансин","flavor":"«В силе твоего врага кроется его слабость» («Учение Рендзиро» 12:5).","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"Боль одного передается и другим.<br><br>Когда выживший попадает на крюк, все остальные раненые выжившие получают <span class=\\"Highlight1\\">кровотечение</span> и <span class=\\"Highlight1\\">усталость</span> на <span class=\\"Highlight2\\">{0} сек.</span><br><br>Время восстановления <i>«Отзвука крови»</i> — <span class=\\"Highlight3\\">{1} сек.</span><br>","name":"Отзвук крови","flavor":"«Рази врага без промаха, и его товарищи почувствуют угрозу». — «Учение Рендзиро» 6:3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"Вы стремитесь покарать тех, кто вам навредил. Если выживший ослепляет вас или оглушает с помощью доски или шкафчика, он становится объектом вашей одержимости.<br><br>Становясь объектом одержимости, любой выживший получает статус <span class=\\"Highlight1\\">«Забывчивость»</span> на <span class=\\"Highlight2\\">{0} сек.</span> Вы видите его ауру в течение <span class=\\"Highlight3\\">{1} сек.</span><br><br><li><i>Одновременно убийца может быть <b>одержим</b> только одним выжившим.</i></li><br>","name":"Возмездие","flavor":"«Только глупец может плюнуть демону в лицо и провозгласить себя победителем» («Учение Рендзиро» 4:9).","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"Вы знаете, как звучат хорошо смазанные механизмы.<br><br>Когда вы <span class=\\"Highlight1\\">{0}</span> раз(а) атакуете выжившего <i>базовой атакой</i>, навык <i>«Знаток техники»</i> активируется на <span class=\\"Highlight2\\">{1} сек.</span><br><br>Пока <i>«Знаток техники»</i> активен, каждый раз, когда кто-то из выживших хорошо проходит проверку реакции при ремонте, аура этого генератора становится желтой до окончания ремонта.<br>","name":"Знаток техники","flavor":"«Порой человека сводит в могилу его же мастерство». — Начальник тюрьмы","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"Вы становитесь <b>одержимы</b> одним выжившим.<br><br>Когда вы вешаете объект одержимости на крюк, навык <i>«Аварийная кнопка»</i> активируется на следующие <span class=\\"Highlight1\\">{0} сек</span>. <br><br>Когда навык активен, Сущность заблокирует генератор на время действия <i>«Аварийной кнопки»</i>, если выживший бросит его, не дочинив. <br><br>Заблокированные генераторы подсвечиваются белым.<br><br><i>Одновременно убийца может быть <b>одержим</b> только одним выжившим.</i><br>","name":"Аварийная кнопка","flavor":"«Я видел глаза человека, осознавшего, что ему конец». — Калеб Куинн","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"Порча, возникающая из-за разрушения. Кара настигнет тех, кто посмеет перейти вам дорогу.<br><br>На любого выжившего, очистившего тусклый тотем, будет наложен эффект <b>«Забывчивость»</b> на <span class=\\"Highlight1\\">{0} сек.</span><br><br>При очищении любого проклятого тотема, в том числе этого, вам будут подсвечены ауры всех выживших на <span class=\\"Highlight2\\">{1} сек.</span><br>","name":"Порча: Кара","flavor":"«Дурак, ты сам нажал на спуск». — Калеб Куинн","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"Те, кто смеют мешать вашему делу, будут сурово наказаны.<br><br>Если выживший принимает удар на себя, на него накладывается эффект <b>«Ослабление»</b> на <span class=\\"Highlight1\\">{0} сек.</span>","name":"Принудительная мера","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"Вы направляете жертв по пути боли и наказания.<br><br>Сломав генератор, вы получаете эффект <b>«Незаметность»</b>, пока прогресс починки генератора не прекратит снижаться, или пока кто-то из выживших не окажется ранен или при смерти. В это время аура генератора подсвечивается для выживших желтым.<br><br>Эффект может сработать только один раз в <span class=\\"Highlight1\\">{2} сек.</span>","name":"Тропа терзаний","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"Те, чьи жизни связаны с тьмой, обречены страдать вместе.<br><br>Когда выживший восстанавливает другому выжившему состояние здоровья в <span class=\\"Highlight1\\">{0} м</span> от убийцы и более, совершивший лечение закричит, выдавая свое расположение. При этом активируются <i>«Смертельные узы»</i> на <span class=\\"Highlight2\\">{1} сек.</span> В это время на выжившего будет действовать эффект <b>«Забывчивость»</b>, если он отойдет от вылеченного товарища более чем на <span class=\\"Highlight3\\">{2} м</span>. ","name":"Смертельные узы","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"Первый выживший, который будет взаимодействовать с генератором в течение <span class=\\"Highlight1\\">{0} сек.</span> после его поломки, закричит, выдав свое расположение на <span class=\\"Highlight2\\">{1} сек.</span>, а также получит эффект <b>«Уязвимость»</b> на <span class=\\"Highlight3\\">{2} сек</span>.<br><br>Время перезарядки<i>«Драконьей хватки»</i>: <span class=\\"Highlight4\\">{3} сек</span>.<br>","name":"Драконья хватка","flavor":"«В этом составе заключен великий потенциал... Даже мельчайшие дозы вызывают сверхъестественные эффекты» (дневник Тальбота Граймса).","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"Эта порча вызывает благосклонное отношение Сущности при пролитии крови.<br><br> После удачной <i>базовой атаки</i> по выжившему, Сущность удерживает на месте доски в радиусе <span class=\\"Highlight1\\">{0} м</span> от вас в течение <span class=\\"Highlight2\\">{1} сек.</span> Эти доски нельзя опрокинуть.<br><br>Время перезарядки <i>«Порчи: Благоволение крови»</i>: <span class=\\"Highlight3\\">{2} сек.</span><br>","name":"Порча: Благоволение крови","flavor":" «Нетрудно представить, что испытания — это своего рода биологическая реакция» (дневник Тальбота Граймса).","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"Пока <i>«Порча: Не-смерть»</i> действует, открываются ауры выживших в радиусе <span class=\\"Highlight1\\">{0} м</span> от любого тусклого тотема.<br><br>Когда идет очистка другого проклятого тотема, порча с этого тотема (вместе с ее жетонами) переносится на тотем «Порча: Не-смерть» с прекращением действия эффекта «Порча: Не-смерть».","name":"Порча: Не-смерть","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"Вещей у вас немного. Вы бережете их, поэтому сразу замечаете, если в ваших запасах что-то поменялось.<br><br>Выжившие выдают свое расположение, когда возятся с сундуком или подбирают предмет в <span class=\\"Highlight1\\">{0} м</span> от вас.<br><br>В начале матча на карте будет до <span class=\\"Highlight1\\">{1}</span> дополнительных сундуков.","name":"Скопидом","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"Жизнь была к вам жестока, и теперь вы не намерены облегчать ее другим.<br><br>Когда вы повреждаете генератор, до <span class=\\"Highlight1\\">{0}</span> случайных генераторов также начинают ломаться.<br><br>Если один из этих генераторов чинят, запускается сложная проверка реакции для всех выживших, участвующих в ремонте.<br><br>Использовать <i>«Притеснение»</i> можно каждые <span class=\\"Highlight2\\">{1}</span> сек. <br>","name":"Притеснение","flavor":"«Пусть будут прокляты так же, как сами проклинали нас» (Шарлотта Дейе).","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"Когда конец близок, вы наносите смертельный удар.<br><br>Каждый законченный ремонт генератора повышает силу «Добивания». Вы получаете жетон.<br><br>Использование одного жетона позволяет увеличить расстояние следующей атаки с выпадом на <span class=\\"Highlight1\\">{0}%</span>.","name":"Добивание","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"Все покорены вашим непревзойденным артистизмом.<br><br>Когда вы несете выжившего, на всех других выживших в вашем радиусе террора действует эффект <b>«Уязвимость»</b>.<br>Он действует <span class=\\"Highlight1\\">{0} сек.</span> на выживших, которые покинут ваш радиус террора, а также на тех, кто находится в радиусе, когда вы подвешиваете схваченного выжившего на крюк или выпускаете его.<br><i>«Фанатение»</i> перезаряжается в течение <span class=\\"Highlight2\\">{1} сек.</span>, как только вы выпускаете выжившего из рук.<br>","name":"Фанатение","flavor":"«Наслаждайся моментом. Так близко ко мне оказываются единицы» (Хак Чиун).","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"Порча для надлежащего управления стадом из низших существ.<br><br>Сущность на<span class=\\"Highlight1\\"> {0} сек.</span> блокирует оконный проем после того, как через него <b>быстро</b> перепрыгивает выживший.<br><br><i>Порча действует, пока не уничтожен соответствующий тотем.</i><br>","name":"Порча: Контроль толпы","flavor":"«Ты ничего не контролируешь. Такие никогда и ничего не могут» (Хак Чиун).","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"Вы не пустите в VIP-зал абы кого... и не выпустите.<br><br>После первого подвешивания выжившего на крюк, <i>«Выхода нет»</i> получает жетон.<br>Когда будет починен последний генератор, Сущность заблокирует оба переключателя ворот на <span class=\\"Highlight1\\">{0} сек.</span>, а также на дополнительные <span class=\\"Highlight2\\">{1} сек.</span> за каждый полученный вами жетон.<br>","name":"Выхода нет","flavor":"«Дай мне еще раз послушать твои стоны... когда ты истекаешь кровью» (Хак Чиун).","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"Вас создали для выслеживания и устранения целей.<br><br>В начале матча вы видите ауры всех выживших в течение <span class=\\"Highlight1\\">{0} сек.</span><br><br><span class= \\"FlavorText\\">«Оно знает, чего хочет, и не остановится, пока этого не получит» (Карлос Оливейра).<\\\\span>","name":"Преследователь-убийца","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"Вы способны изувечить одного члена команды, чтобы вызвать панику у остальных.<br><br>Когда вы раните здорового выжившего базовой атакой, все раненые выжившие получают эффект <b>«Забывчивость»</b> на <span class=\\"Highlight1\\">{0} сек.</span><br><I>«Истерия»</i> может срабатывать только раз в <span class=\\"Highlight2\\">{1} сек.</span><br><br><span class= \\"FlavorText\\">«Прости, я начинаю шарахаться от теней. Не понимаю, чего можно ждать» (Роберт Кендо).","name":"Истерия","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"Паразит NE-α наделяет вас интеллектом и сознанием, нужными для установки ловушки.<br><br>После пинка по генератору его аура подсвечивается желтым. Когда вы доводите выжившего до предсмертного состояния базовой атакой, каждый затронутый генератор взрывается, теряя <span class=\\"Highlight1\\">{0}%</span> прогресса починки, после чего его аура исчезает.<br>Любой выживший, занимающийся починкой генератора, при его взрыве закричит и получит эффект «Обездвиживание» на <span class=\\"Highlight2\\">{1} сек.</span><br>><i>«Подрыв»</i> перезаряжается <span class=\\"Highlight3\\">{2} сек.</span><br><br><span class= \\"FlavorText\\">«Оно может использовать оружие?» (Джилл Валентайн)","name":"Подрыв","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/ru/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Эван МакМиллан боготворил своего отца. И дело было не только в том, что он являлся наследником солидного состояния, а еще в том, как отец управлял поместьем. После строгого воспитания, Эван так же строго управлял рабочей силой. Пока отец и сын стояли во главе, уровень производства был чрезвычайно высок. И даже после того, как Арчи МакМиллан начал сходить с ума, сын защищал его от толпы, жаждущей оторвать кусок богатства. Эван всегда беспрекословно выполнял любую просьбу отца.<br><br>Когда старик окончательно свихнулся, Эван превратился в его исполнителя, совершив самое жестокое массовое убийство нашего времени. Так и не было доказано, что Эван завел в тоннели более ста человек, взорвав затем выход, обрекая рабочих на великие мучения. История Поместья МакМилланов - очередной пример разрушительной силы денег и власти. До сих пор не известно, сколько человек пали жертвами от рук сына и отца. Судьба Эвана МакМиллана тоже окутана тайной. Остается загадкой и произошедшее с его отцом, чей труп был найден в подвале его собственного сарая.","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"Филип Ожомо приехал в эту страну, желая все начать с чистого листа. Он был очень рад предложению поработать на Свалке Автохевен. Небольшой двор для утилизации сырья, на который копы не обращали внимания, хоть и знали о грязных делишках, происходящих тут. Ожомо было все равно. Он был не понаслышке знаком с преступной деятельностью еще у себя на родине, но до тех пор, пока его не пытались в нее втянуть, он не обращал внимания. Он занимался починкой машин и работал за прессом. Получалось у него здорово. Загружалась машина, а выходил аккуратный металлический куб.<br><br>Все было хорошо, пока одним пасмурным днем Филип не заметил кровь на еще целой машине. Открыв багажник, он обнаружил связанного парня с кляпом во рту и глазами, полными ужаса. Ожомо освободил беднягу, и тот пробежал без малого пять шагов, пока босс Филипа не перерезал беглецу глотку. На вопрос почему тот так поступил, босс ответил, что Ожомо - всего лишь исполнитель, и до этого почти каждая машина тоже содержала в себе людей. И что это были «услуги», предоставляемые свалкой некоторым «клиентам». Ожомо буквально снесло крышу. Он забросил своего босса под пресс и медленно опустил тяжелый пласт, оставив за пределами только голову. После того, как пресс был опущен, Ожомо схватил голову и выдернул ее вместе с позвоночником. Затем он развернулся и ушел. Больше его никогда не видели.<br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"Безымянный сын зажиточных землевладельцев Макса и Эвелин Томпсонов был непрошенным ребенком для жестоких родителей. Из-за своего ужасного уродства, парень был скрыт от глаз общества. Родители настолько стыдились своего сына, что поместили его в закрытую комнату и кормили сквозь дыру в стене. Когда пленник сбежал, его месть была беспощадной и кровавой - он расчленил тех, кто должен был его воспитывать, а стали его мучителями.<br><br>После этого он продолжил жить на ферме и убивал животных, утоляя всплески своей жестокости. Наконец свободный от своих оков, он гонялся и мучил любое живое существо на своих полях. Тела Макса и Эвелин так и не были найдены, в отличии от бесчисленных трупов обезображенных и измученных животных. Ферма Колдвинд была отделена от основных земель, но нового покупателя так и не нашлось. Может, все дело в звуках бензопилы, доносящихся оттуда летними ночами.","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"Салли Смитсон приехала в город с мечтами о деревянном домике, который построит ее муж Эндрю, и в котором будут слышны смех и топот детских ножек. Но однажды жизнь Салли навсегда изменилась, когда на пороге появился бригадир Эндрю с тяжелыми новостями. Не имея других вариантов, Салли пришлось устроиться на работу в Лечебницу Кротус Пренн. Начала она с самых низов, с тяжелой ночной смены. Спустя несколько лет, ее разум больше не мог выносить всех тех страданий, свидетелем которых она стала за все это время. Наконец, ее разум помутился, а телом овладела жажда очищения. Когда одним сентябрьским днем прибыла утренняя смена, то обнаружила пятьдесят бездыханных тел пациентов в своих кроватях и четыре трупа сотрудников. Лишь Салли была жива, но, полностью потеряв рассудок, она только слегка раскачивалась взад-вперед. Ее погрузили в машину скорой помощи, которой не суждено было доехать до больницы. Машину нашли перевернутой в ближайшем лесу, как и трупы санитаров внутри. А вот Салли нигде не было.","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"Как только Анна научилась ходить, мать начала обучать ее выживанию в глухом северном лесу. Проживание в таком далеком от цивилизации месте требует от тебя устойчивости и умения. Когда солнечный свет угасал, и делать что-либо снаружи становилось невозможным, они укрывались в доме, - ладно сбитой избушке, способной выдержать даже самую свирепую зиму. В тепле очага и материнских рук, Анна играла с деревянными игрушками и масками, сделанными мамой. Она засыпала под звуки сказок и колыбельных, ее посещали только светлые и добрые сны. Она еще не знала, что скоро все изменится.<br><br>Как-то Анна со своей матерью выслеживали гигантского лося в чаще. Они знали, что животное это - крайне опасное, но особенно холодная зима и скудные запасы пищи заставляли их рисковать. Страх перед смертью от голода был сильнее ужаса от любого лесного обитателя. Без какого-либо предупреждения огромный лось взревел и бросился на Анну. Ее парализовал страх, а весь мир будто задрожал под копытами этого поистине адского жителя леса. Лось был настолько близко, что Анна могла разглядеть животную ярость в его глазах. Именно в этот момент между ними появилась мать с топором в руке. Когда лось поднял мать на своих исполинских рогах в воздух, с ее губ сорвался крик, от которого кровь стынет в жилах. И пока тот пытался стрясти человека, она раз за разом вонзала топор в голову зверя. С ужасающим хрустом рога лося сломались и мать Анны была на свободе. Зверь пал.<br><br>Анна была еще слишком мала, чтобы самой оттащить искалеченное тело матери домой, поэтому девочка осталась сидеть с ней на опушке, где произошло сражение. Чтобы отвлечь Анну от ужасных предсмертных хрипов лося, мать обняла ее и напевала дочери ее любимую колыбельную. Так они и лежали, пока тела лося и матери полностью не охладели, а Анна осталась в полной тишине, одна в лесу. В конце концов она поднялась и направилась к дому.<br><br>Даже будучи маленьким ребенком, она уже знала достаточно, чтобы выжить в замерзшем лесу. Отдавшись своим инстинктам, она породнилась с дикой природой. Она повзрослела, окрепла и овладела искусством охоты. Становясь опасным хищником, человечность Анны угасала с каждым днем.<br><br>Она промышляла охотой и расширила границы своих владений. Начинала она с белок, зайцев, норок и лисиц. Но такая добыча ей вскоре наскучила, и Анна переключилась на более опасных жителей леса - медведей и волков. А когда ничего не подозревающие путники забрели к ней, она открыла для себя свою любимую добычу - людей. Несчастные души, потерявшиеся в ее владениях были сражены как любой другой зверь. Ей нравилось собирать с их тел инструменты и яркие побрякушки, но особенно она любила игрушки, если среди добычи были малыши. Но самих маленьких девочек она никогда не трогала.<br><br>Девочек она забирала далеко в лес, в свою хижину. Анна очень дорожила ими - глядя на них, в сердце у нее теплились давно забытые чувства. Она выбрала себе любимицу, нарекла ту своим ребенком. Среди украденных игрушек, кукол и книг, которые некому было прочесть, сидели девочки, крепко привязанные за шеи веревками к стене. Анна не могла позволить им выходить из дома - снаружи дети бы точно погибли.<br><br>Девочки неизменно умирали от болезней или холода. Каждый раз это погружало Анну еще глубже в пучину боли и безумия. Она намеревалась попробовать еще раз, и начала совершать набеги на ближайшие деревни, вырезая семьи и похищая их дочерей. Чтобы успокоить испуганных детей, она начала носить маску животного, сделанную ее матерью много лет назад. Деревенские жители слагали легенды о полузвере-получеловеке, живущем в Красном Лесу - об Охотнице, которая убивала взрослых и поедала детей.<br><br>Вскоре до леса добралась великая Война. В чаще маршировали немцы, сминая ослабевшую Российскую Империю. В эти темные времена путников в лесу больше не было. Деревни тоже опустели, там больше не было детей, - только солдаты. Многие из которых были найдены со следами ужасных ран от топора. Пропадали целые отряды. Но как только Война закончилась, прекратились и слухи об Охотнице - их поглотил Красный Лес.","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"Некоторые люди просто гнилые по своей природе. Гниль эта порождена чистым злом. Майкл Майерс был как раз поражен такой гнилью. У него не было проблем с причинением боли другим. Напротив, он именно этого и желал. Но даже у тех, у кого разум наполнен ужасом, бывают свои проблемы. Другой вопрос, как именно они будут эти проблемы решать.<br><br>Майкл, например, начал убивать, чтобы обрести покой. И начал он со своей сестры. Полиция обнаружила на месте преступления молчаливого мальчика в маске клоуна. Вообще не стоит тушить огонь бензином, но именно такое решение приняли власти, не имея понятия, как это отразится на мальчике и демоне, что в нем поселился. Решение отправить Майкла в психлечебницу изначально было принято с целью помочь ему. Но безуспешное лечение и крики по ночам лишь сделали его более отчужденным и необщительным. Люди полагали, что Майкл Майерс станет эдакой нелепой интермедией, которая вскоре сгниет и забудется. А потом... он сбежал.<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"Лиза Шервуд выросла в тихом селении. Деревенские жители были добры, а старейшины помогали разрешать все споры, сохраняя тем самым древние традиции. Особенно Лизе понравилось, как те научили ее рисовать символы для привлечения удачи и успеха. Однажды ночью, когда она возвращалась домой, в лесу внезапно грянул гром. Ничего не видя перед собой, Лиза поскользнулась и крепко ударилась головой. Периодически приходя в сознание, Лиза могла еле-еле различить приближающиеся к ней зловещие очертания фигур. Скоро они были так близко, что можно было разглядеть злобный оскал на их лицах.<br><br>Ее приковали к стене в затопленном подвале. Сквозь пелену она видела страшные раны своих соседей, окутанных мухами. Жить им оставалось недолго - каннибалы отрезали от них один кусок мяса за другим. Лиза каким-то чудом пока избегала этой участи. Ее искалеченные и исхудавшие руки начали свободно болтаться в оковах и она стала вытаскивать их, сдирая кожу и мышцы, пока наконец ей это не удалось. Из ее плоти сочился гной, сквозь страшные зараженные раны виднелись кости. Силы покинули ее. В помутившемся разуме промелькнули воспоминания о доме, о старейшинах, о знаках, которым те ее научили. Как только Лиза завершила рисунок, внутри нее проснулся жестокий голод, требующий крови. Она выбрала путь мщения.<br>Когда полиция в итоге наткнулась на покошенный дом на болоте, в нем уже не было никого в живых. На полу и на стенах были кровью начерчены символы старейшин. Тело Лизы так и не было обнаружено.","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"Давно ведутся споры о том, что заставляет Убийц совершать свои злостные поступки - потеря разума, или же влияние потусторонних сил. Но для одного определенного Убийцы природа и пропитание связаны неразрывно.<br><br>Кожаное Лицо убивает не ради посыла какого-то сообщения, не для удовлетворения садистских наклонностей, и даже не ради избавления от голосов в своей голове. Он убивает, потому что испуган. Он боится, что другие смогут причинить ему вред; боится разочаровать свою семью; боится, что люди узнают о его жажде пожирать человеческую плоть.<br><br>Он делает, что велено, и за это он любим своей семьей. Чужаки - угроза, а угрозу нужно устранять. <br><br>Как например те тинейджеры, что пришли к ним без приглашения. Пришли, как будто к себе домой. Без сомнения обыскивали дом, пытаясь отыскать секреты его семьи. Но Кожаное Лицо разобрался с ними и защитил свою семью - как его и учили.<br><br>Но он не только защитник, у него множество ролей, и под каждую роль заготовлена отдельная маска. Он накрывает на стол, заботится о семье, хорошо одевается, когда те ужинают. Его дедушка и мама всегда заботились о них, но теперь дедуля очень слаб и почти не двигается, так что пришла очередь Кожаному Лицу и его брату заботиться о нем. Семья - это святое. Семья - это защита и безопасность.<br><br>Но несмотря на все его старания, один тинейджер все-таки сбежал. Он пытался остановить ее, преследовал так быстро, как только мог - но ей помогли, - очередной чужак на грузовике. Злой дальнобойщик убил его брата, переехал того, как крысу. В ярости, Кожаное Лицо бросился на водителя, стремясь отомстить за брата, но тот был слишком быстр. Он сразил Кожаное Лицо и обратил его же бензопилу против него. <br><br>В ярости, унынии и боли, Кожаное Лицо наблюдал за тем, как чужаки скрываются от него, и думал о том, что же теперь будет с его семьей. Ведь чужаки наверняка вернутся с полицией, а та заберет его братьев, его дедушку. Что он будет делать без них? Он не сможет жить, просто умрет без их приказов.<br><br>Мир Кожаного Лица рухнул, и он в закрутился на месте, сражая бензопилой воображаемых врагов вокруг него в приступе беспомощной ярости.<br><br>Но потом пришли другие мысли. Они пришли в форме видения, впиваясь холодными нитками в его разум. Он осознал, что несмотря на всё, что с ним могут сделать чужаки, всегда будет существовать призрачная сила, которая сделает еще хуже. Его наполнил ужас, самый сильный ужас в его жизни. Но вместе с тем он как бы умиротворял его, так как был похож на ужас, который ему приходилось испытывать, когда он был со своей семьей. Ужас разочаровать их.<br><br>Он вернулся в то неизвестное, но знакомое состояние, и инстиктивно понял, что нужно делать. Он не мог разочаровать эту силу, как он разочаровал свою семью. Чужаки еще вернутся, но он сделает все, чтобы устранить угрозу. И когда стихнут все крики, мир вновь погрузится в тишину. Единственный звук, который будет ее нарушать - рев бензопилы.<br><br>Пускай чужаки возвращаются.","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"Герман, обладающий невиданными познаниями в области психологии, был вручную отобран для участия в секретной неврологической программе. Его отправили в закрытый комплекс в Иллинойсе — Мемориальный Институт Лэри, который на самом деле был под контролем ЦРУ. Там Герман встретил доктора Отто Стэмпера, под чьим началом методы Картера по извлечению информации из заключенных становились все жестче и страннее. Стоит сказать, что лечебный центр был еще и тюрьмой для всех врагов США, разум которых пытались перепрограммировать. А благодаря любимому способу лечения Германа — электрошоку — было обнаружено несколько потенциальных угроз национальной безопасности.<br><br>Спустя несколько лет все называли Германа просто «Доктор», и уже никто не интересовался, есть ли у него медицинская лицензия, или что дальше происходит с узниками, после того, как те выдали всю информацию. Только спустя неделю после пропажи связи с Институтом был обнаружен этот кошмар — весь персонал лечебницы был найден мертвым с разными видами травм головы. Все тела, включая доктора Отто Стэмпера, были опознаны, но не было найдено никаких следов Германа «Доктора» Картера.<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"Даже при жизни Фредди Крюгер был кошмарным существом для тех, кто знал его по-настоящему. Скрываясь за маской доброты и дружелюбия, Фредди раскрывал свой настоящий характер только своим жертвам. И когда эти жертвы нарушили свое молчание, родители Спрингвуда открыли охоту на Фредди, организовав народный суд. Им казалось, что огонь уничтожил монстра той ночью, что их дети наконец в безопасности, но столь сильное зло всегда найдет способ выжить. <br>Прошло много лет, ужас затаился, а жертвы обо всем забыли. Но потом Фредди каким-то образом вернулся, и сны вновь превратились в кошмары. <br>Фредди направил свою злость на тех, кто по его мнению был виноват в произошедшем, постепенно приближаясь к истинному объекту одержимости - Нэнси Холбрук. Но Фредди недооценил ее силу и находчивость. Вместе со своим другом Квентином, она ослабила Фредди и в очередной раз лишила его жизни. <br>Смерть не пожелала забирать Фредди в первый раз, с какой стати делать это теперь? И он восстал снова, окрыленный чувством мести. Теперь он сосредоточился на том, кто помешал ему воссоединиться с его крошкой Нэнси. <br>Фредди начал врываться в сны Квентина, терроризируя парня, пока тот совсем не ослабел. Подгадав момент, он заставил Квентина вернуться в темные коридоры Детсада Бэхем. Тут-то и должна свершиться его месть.<br>Фредди медленно следил за парнем. Не торопился, наслаждаясь каждым моментом охоты. Больше всего ему нравилось ловить запах страха своих жертв, слышать их прерывистое дыхание. Он с ними игрался. <br>В конце коридора стоял подросток. Что же он, устал и не может бежать? Уже смирился со своей участью? Фредди приблизился к нему, раздвинув руки и царапая стену когтями. Кончики лезвий проехались по трубе, издавая дикий скрежещущий звук.<br>Дождь из искр ринулся из-под лезвий на пол, прямо в разлитую по нему жидкость. Синее пламя тут же охватило помещение.<br>Парень сразу убежал, а Фредди в ярости боролся с охватившим его огнем. Одна комната сменяла другую, пока погоня не привела их в подвал Фредди. Отсюда уже не сбежать.<br>Медленно, Фредди приблизился к жертве. Ее страх был настолько сильным, что Фредди буквально пробовал его на вкус, но при этом глаза Квентина горели, выражая такое сильное презрение, что убийца на мгновение восхитился подобным зрелищем. <br>Фредди занес над головой руку с лезвиями.<br>Но тут же ощутил странное присутствие рядом с собой - нечто древнее, темное и мощное. Этот дух окутал его, и все чувства вмиг притупились, оставляя лишь тихий звук скрипящих вдалеке деревянных свай. Затем эхо бьющихся между собой металлических предметов. После пришло ощущение страха и чего-то неземного, вне нашей реальности. <br>Наконец, после полета сквозь пространство, Фредди снова очутился в детском саду. Правда не в своем; этот хоть и был похож, но ощущался иначе. Сила Фредди тоже преобразилась. Квентин пока что сбежал, но коридоры наполнились новыми жертвами. Кто-то из них был скучен, а кому-то было суждено стать новым любимчиком Фредди. Но все они будут сражены его лезвиями.","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"Джон Крамер, более известный по своему прозвищу «Пила», запланировал рождение сына во время года Свиньи по китайскому зодиаку, чтобы это событие олицетворяло собой плодородие и перерождение, начало новой жизни для него и жены. План развалился на куски, когда одной ночью в клинику его жены ворвался наркоман в поисках дозы. <br><br>События той ночи обернулись смертью нерожденного сына Джона. Пила похитил наркомана, сделав его своим первым испытуемым. Вместе с Крамером изменялась и Свинья. Она стала олицетворением болезни, пожирающей Джона изнутри, напоминанием, что мы всего лишь куски мяса, если не будем изо всех сил рваться из хватки смерти, позволяя нашим действиям говорить за себя.<br><br>Свинья стала отражением, агентом Пилы, доставляющим жертв для испытаний. Для некоторых, прошедших испытание, Свинья могла стать билетом в новую жизнь - предлагая роль помощника Пилы, а может даже и роль преемника. <br><br>Такова была судьба Аманды Янг, заблудшей души, которая почти всю свою жизнь только и делала, что вредила себе и окружающим. Все изменилось, когда она успешно завершила испытание Пилы. Решив, что ее жизнь обрела смысл, Аманда стала верной делу Пилы, готовясь перенять бразды правления на себя, в момент когда рак одолеет Джона.<br><br>Но она стала слишком зависима от Крамера, не могла вынести факта его скорой гибели. К тому же она не верила, что люди перерождаются в процессе испытаний. <br><br>Видя это, Пила подготовил для Аманды еще одно испытание, как шанс спасти ее, но та поддалась злости и зависти, провалив из-за этого испытание и получив пулю в шею. <br><br>Истекая кровью на кафельном полу, Аманда погрузилась во мрак. Затем к темноте присоединился скрипящий звук качающихся на ветру деревьев. Она была в лесу, вновь наблюдая за миром из глаз Свиньи. Деревья начали окружать ее, цепляя отовсюду своими корнями. Волны страха накрывали ее, дыхание оглушающе звучало внутри маски.<br><br>Неужели она проклята скитаться в такой форме до конца дней? Или это очередное испытание? Может она и не провалила прошлый тест? Ведь Джон всегда все планировал на несколько шагов вперед, и он никак не мог ее бросить, ведь так?<br><br>Хоть Пила и исчез из нашего мира, он передал Аманду другому учителю. Такому, под чьим началом Аманда снова станет Свиньей.<br><br>Наконец, она осознала, что все это время принимала только верные решения. Время игр закончилось. У этих людей нет никаких шансов переродиться. Они просто куски мяса, которым суждено сдохнуть. ","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"Кеннет Чейз появился на свет в 1932 году. Роды были трудными, и его мать их не пережила. Эта трагедия воздвигла вечный барьер между отцом и сыном. Мальчик рос, а вместе с ним росли алкоголизм отца и его отвращение к сыну. Они уже практически жили каждый своей жизнью к времени, когда Кеннет пошел в школу.<br><br>Успеваемость была средней, но Кеннет сиял в спорте. Он вырос высоким и сильным, был прекрасным бегуном, но наотрез отказывался играть в команде.<br><br>По дороге домой Кеннет собирал перья птиц, и скоро у него образовалась целая коллекция в коробке из-под сигар, которую он прятал под кроватью. Папаша либо пропадал на работе, либо пребывал в пьяном угаре, так что Кеннет в основном был предоставлен самому себе. Он помешался на перьях - на узорах, на их разнообразии, даже начал водить себе ими по губам. Наблюдая за птицами на кормушке в саду, Кеннет воображал, какими мягкими они должны были быть, и решил поймать одну. Он познакомился с местным дантистом и вскоре разжился анестетиками. С их помощью он соорудил ловушку, в надежде что птица будет без сознания какое-то время и он сможет ее потрогать.<br><br>После нескольких неудачных попыток он поймал малиновку. Когда та была в его руках, мальчика охватило странное возбуждение. Он планировал отпустить птицу, как только та оправится от анестетика. Вместо этого, когда птица пришла в себя и начала сопротивляться, Кеннет не ослабил хватки. Его пальцы продолжали крепко сжимать тельце, пока то не перестало подавать признаки жизни. Он избавился от трупа, оставив себе перо, которое положило начало новой коллекции. Прошлые перья он выкинул, окрестив их «фальшивкой».<br><br>К концу сороковых годов Кеннет бросил школу и стал мальчиком на побегушках в закусочной. И уже переключился на другую живность - белок, енотов и собак, выверяя дозу анестетика для каждого вида.<br><br>В 1954  году в городе исчез без следа молодой человек, и все бросились его искать. Спустя несколько месяцев отец Кеннета нашел коробку из-под сигар в подполье дома. Открыв ее, он с ужасом осмотрел содержимое - перья, лапы животных и человеческий палец.<br><br>Возвращаясь с работы, Кеннет застал своего отца с коробкой в руках. Кеннет развернулся и убежал. Больше он никогда не появлялся дома.<br><br>После нескольких недель скитаний он наткнулся на бродячий цирк, и, учитывая его телосложение, его взяли работать на канатах. Он придумал себе новое имя - Джеффри Хоук.<br><br>Внезапно попав в дружный коллектив, «Джеффри» вынужден был учиться вести себя в компании. Он искусно отыгрывал свой новый образ, быстро прослыв услужливым и радушным человеком среди членов своей новой семьи.<br><br>Более десяти лет он оставался в цирке, исследуя США вдоль и поперек. Но новый образ жизни накладывал свой отпечаток, и Кеннет приобрел много вредных привычек. Алкоголь, фастфуд, наркотики - все это было в порядке вещей. Поначалу этого было достаточно, но былая природа брала свое - ему снова нужно было убивать. Кеннет украл грим и одежду у коллег, и этот маскарад позволял приближаться к жертвам, чтобы безопасно усыплять их. После этого он тащил их к каравану, где они приходили в себя, понимая, что они теперь в его власти. Он наконец-то снова веселился, подпитываясь энергией от криков своих жертв, когда те вопили в ночи.<br><br>Как только сила жертв угасала, Кеннет тщательно осматривал их пальцы, выбирая самый красивый, а затем облизывал их, выбирая самый вкусный. Как только выбор был сделан, он отрезал палец и гордо добавлял его в свою коллекцию, выбрасывая тело, как ненужный мусор.<br><br>Мужчины, женщины, старые, молодые - ему было все равно. Суть хорошей коллекции состоит в разнообразии экспонатов и того, какие воспоминания они порождают.<br><br>Он все реже выбирался из костюма, постепенно принимая личину клоуна как свою собственную.<br><br>Со временем, Кеннет стал нерасторопным. Пока он отсыпался после пьянки, жертва смогла сбежать из его пут. Она убежала, крича, а затем Кеннет проснулся, обнаружив, что все циркачи бегут к нему. Он хлестнул коня и растворился в ночи.<br><br>С тех пор он слонялся по всей стране, прибиваясь к бродячим циркам, но никто не видел, чтобы он когда-либо выступал. Он заманивал тех смельчаков и глупцов, которые сближались с ним, и сбегал, пока их не хватились.<br><br>В какой-то момент Кеннет покинул дороги США, передвигаясь во мгле, и обнаружил, что попал в другой мир. Окружение стало призрачным и непостоянным, что как нельзя лучше подходило к его новому образу жизни. Впервые за всю свою жизнь Кеннет почувствовал себя дома. Он разбил лагерь и приготовился к визиту своей первой жертвы.","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"Рин была единственным ребенком в семье Ямаока. Ее детство прошло в запыленных комнатах старинного дома в Кагаве. Она училась на педфакультете в частном университете Такамацу, что крайне негативно сказывалось на семейных финансах. К тому же заболела мама и счета за лечение только ухудшили ситуацию. Рин начала подрабатывать, чтобы хоть как-то помочь родителям.<br><br>Долги отца семейства росли не по дням, а по часам. Он начал работать в две смены в надежде получить повышение. Именно тогда у него началась тяжелая бессонница. Жуткий шепот не давал ему уснуть, постоянно напоминая о всех бедах. Вымотанный до предела, отец начал терять связь с реальностью. Пытаясь противостоять голосам в своей голове, он решился на отчаянный шаг. Отец пошел к начальству и объяснил свою ситуацию. Он умолял о премии, об авансе, отдыхе - о чем угодно.<br><br>Прошение было отклонено. Тем временем компания потеряла большие суммы из-за убыточного производства. Кого-то нужно было выставить крайним, и отец Рин прекрасно подошел на эту роль. Он был уволен после двадцати одного года службы.<br><br>Тем вечером Рин вернулась домой с работы. В этот раз она задержалась допоздна, развлекая посетителей в ресторане. Рин ставила велосипед в сарай, когда услышала из дома крики матери.<br><br>Вбежав внутрь, Рин кинулась наверх, в родительскую спальню. Там она обнаружила изрубленное тело своей мамы на полу. Ее конечности были отрублены легко, быстро и под неестественным углом. Груди были отрезаны, открывая разрубленную грудную клетку. Рин вырвало.<br><br>Со свистом вниз устремилась острая катана. Рин остановила лезвие рукой, и оно вошло ей в предплечье. Но шок от увиденного перекрыл всю боль - напротив стоял отец, в воинственной позе и с клинком в руке. Рин закричала, моля о пощаде, однако тот лишь продолжил наносить удары по руке дочери.<br><br>Рин вскочила, но тут же поскользнулась на огромной луже крови. Опершись на дверную ручку, дочь поднялась на ноги. И тут же взмах катаны лишил ее другой руки. В агонии она кое-как добрела до коридора, но отцовское лезвие настигло ее и там.<br><br>Сделав шаг назад, Рин опустила глаза вниз и обнаружила, что держит в руке свои внутренности. В голове вспыхнул образ изуродованного тела матери.<br><br>Рин бросилась на отца, заставив того отступить назад. Но затем он нанес удар по животу, из-за чего дочь захлебнулась от боли. Пока та пыталась подняться, он рассек ей бедро.<br><br>Рин хотела уползти прочь, но отец схватил ее за волосы и швырнул за перегородку. Зазвенело разбитое стекло, и Рин упала на первый этаж.<br><br>Сверху послышались шаги. С колоссальным усилием Рин начала двигаться, прокладывая себе дорогу в луже разбитого стекла. Осколки глубоко впивались в кожу, раздирая плоть. Но отца нужно было остановить. Ему не сойдет с рук то, что он сделал с ней, что он сделал с мамой.<br><br>Изрыгая кровь в приступе кашля, Рин еще сильнее разодрала подбородок об осколки. В ушах зазвенел звук бьющегося сердца. Тело налилось свинцовой тяжестью и отказалось двигаться.<br><br>А земля гремела от шагов отца. Рин знала, что это конец, но ей было уже наплевать. Она заставит его расплатиться за содеянное, если не в этой жизни, так в другой.<br><br>Темный Туман застил глаза, но не смог сдержать фонтанирующую ярость. Время отдыха еще не пришло. И тьма тихо зашептала, обещая кровь и расплату.<br><br>Клятва была дана и Рин закрыла глаза.","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"Девятнадцатилетний Фрэнк Моррисон никогда не выделялся из толпы сверстников. Он бросил школу после того, как толкнул судью на трибуны и вылетел из баскетбольной команды. Впрочем, Фрэнк обладал некоторым обаянием и умел вдохновлять людей, несмотря на свое невеселое детство. В шесть лет его забрали из Калгари, чем положили начало путешествию Фрэнка по приемным семьям. Он закатывал истерики, бесился, ввязывался в драки и менял одну приемную семью за другой. В последний раз Фрэнк переехал три года назад, когда его усыновил новый приемный отец Клайв Эндрюз. Они провели в дороге семь часов, прежде чем доехали до небольшого домика в Ормонде. Больше они никогда не проводили столько времени вместе: Клайв был слишком занят выпиванием в баре на деньги, выдаваемые на содержание приемного сына.<br><br>Ормонд был маленьким и скучным городком с шестью тысячами жителей, в котором большую часть года царила безликая зима. Фрэнк изо всех сил старался попасть в новую приемную семью, но передумал, когда однажды заметил милую девушку по имени Джули. Красивая и популярная, она не хотела всю жизнь провести в Ормонде. Во Фрэнке, прибывшем из других мест, она видела свой билет на свободу. Он начал ходить на вечеринки, что устраивала Джули. Все гости там были младше него. Такую публику было легко впечатлить, и Фрэнку это нравилось. Там он познакомился со вспыльчивым Джоуи, который любил выпендриться, а также с тихой и наивной Сузи, лучшей подружкой Джули.<br><br>Молодежь любила торчать в заброшенном домике у горы Ормонд. Вместе они отдыхали от скучных условностей, мелкой и бессмысленной повседневной рутины. Фрэнк понял, что неопытными друзьями легко управлять. Ночи напролет юнцы развлекались и буйствовали, а Фрэнк меж тем исподволь проверял, на что они способны. Ни одни выходные не проходили без хулиганства, вандализма и воровства. В конце концов подростки были готовы сделать все, о чем бы Фрэнк их ни попросил. Надевая маски, они ощущали себя свободными от запретов. Однажды ночью Фрэнк предложил Джоуи разгромить магазин, откуда его недавно уволили. Банда легко пробралась внутрь после закрытия, когда внутри никого не должно было быть. Но оказалось, что в помещении еще оставался уборщик, который схватил Джули, как только ее заметил. Фрэнк услышал ее сдавленные крики и впал в темную ярость. Он ринулся на помощь девушке и без колебаний вонзил нож старику в спину. <br><br>Товарищи уставились на Фрэнка в изумлении, когда тот приказал им закончить начатое. Джоуи стиснул зубы, схватил нож и пырнул истекающую кровью жертву между ребер. Сузи не хотела этого делать. Фрэнк заорал, что они должны идти до конца. Тогда Джули закрыла глаза и вонзила нож в грудь мужчины. Она передала влажный клинок Сузи и сказала, что теперь они повязаны кровью. Сузи пристально смотрела на Джули, не веря своим глазам, а Фрэнк обхватил ее дрожащие ладони и воткнул нож в горло незнакомца. Затем Фрэнк приказал компании поторапливаться: они отмыли пол от крови, закинули тело в багажник машины Джоуи и направились к горе Ормонд.<br><br>Когда они вместе раскапывали грязный снег, чтобы избавиться от тела, Фрэнк заметил, как в лесу что-то движется. Он схватил нож и отделился от группы, чтобы удостовериться. Вокруг Фрэнка сгустился туман. Он был таким непроглядным, что парень не видел ничего вокруг. Фрэнк решил вернуться по своим следам, но по пути заметил зловещую тропку и пошел по ней, словно влекомый тьмой. Джули, Сузи и Джоуи закончили копать, но Фрэнка нигде не было. Джули заметила на снегу грязные следы своего парня. Троица пошла искать главаря, вслед за ним углубляясь в лес. Джули, Сузи и Джоуи так и не вернулись домой. Родители решили, что дети сбежали с Фрэнком. У всех семей были свои догадки о случившемся, но когда у заброшенного дома рядом с горой Ормонд нашли труп, люди стали обсуждать совершенно другие версии.","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"Адирис, младшей из семи детей в семье, было пять лет, когда ее оставили на горячих красных кирпичах лестницы храма очищения в центре Вавилона. Она убедила себя, что боги уготовили ей особую судьбу, и так победила отчаяние. Новую жизнь она посвятила тихому служению: ухаживала за садами, готовила ритуальные блюда и чистила курильницы для благовоний. Ночью она молила богов указать ей истинную цель.<br><br>Повзрослев, она начала прислуживать высшим жрицам на ежегодных церемониях почитания морского козла — бога воды и созидания. Она шла по огромным гипостильным залам, поводя курильницей, и жирные клубы дыма поднимались к холодным каменным колоннам и там растворялись в воздухе. Тревога уступила место блаженству, и она ощущала близость богов как никогда. Каждый день она трудилась не покладая рук, выполняла свои обязанности и принимала новые, прислуживая жрицам во время ритуалов очищения.<br><br>Но помощи требовалось все больше и больше. За стенами храма свирепствовала эпидемия страшной чумы, и обряды очищения проводились каждый день. За несколько месяцев болезнь поразила всех жрецов. Они ослабели настолько, что не могли провести даже простейший ритуал, и только неофитка Адирис, которая присутствовала на каждой церемонии, могла занять их место.<br><br>Девушка, взволнованная предстоящей первой церемонией, бродила по храмовому святилищу, и когда она зажгла свечи, то заметила узкий проход на его дальней стене. Он вывел Адирис в склеп под святилищем, где не было ничего, кроме золотой статуи женщины, раскинувшей руки с увешанными самоцветами пальцами. Это был знак, которого она так долго ждала!<br><br>В большом зале было множество прихожан, которые преклонили колена, завидев столь юную и прекрасную жрицу. Она подошла к кирпичному алтарю и взяла серебряный ритуальный кинжал. Пальцы девушки хищно сжали клинок, и удивленные прихожане увидели на них россыпь рубиновых колец. <br><br>Адирис затянула песнь творения и вдруг заметила, как женщина в задних рядах упала без чувств. Девушка ринулась к ней и обнаружила, что ноги несчастной покрыты черными волдырями. Без промедления Адирис взмахнула священным клинком и ударила по собственной ноге, отрубив палец. Она протянула богам окровавленный обрубок, умоляя защитить женщину. Оправившись от потрясения, пораженная толпа признала Адирис новой жрицей.<br><br>Сказания о ее богатстве, красоте и преданности распространялись по городу быстрее болезни. Вскоре последователи объявили Адирис верховной жрицей Вавилона.<br><br>Но с появлением первых признаков заболевания ее вера поколебалась; с каждым приступом кашля она отхаркивала кровавую мокроту, шея жрицы покрылась нарывами, а четырехпалая нога потемнела. Адирис переполняло отвращение к самой себе, она начала носить вуаль и курильницу, скрывавшую зловоние болезни. В надежде на спасение она не оставляла обрядов и продолжала раздавать последователям благословенную воду и пищу.<br><br>Но ритуалы не помогали. В отчаянной попытке воззвать к богам, Адирис удалилась в отшельничество. С несколькими спутниками она отправилась на север. Она брела через холодные леса Урарту до тех пор, пока ее тело не отказалось идти.<br><br>Они разбили лагерь в сырой пещере, там Адирис и лежала без сил в луже собственной рвоты. Ее почерневшая нога так распухла, что на нее стало невозможно ступать. В той пещере Адирис и ее последователям открылась истина: чума добралась до каждого из них.<br><br>Стоя на коленях среди исходящих рвотой подданных, Адирис вознесла свою последнюю молитву. Черные испарения ее курильницы столбом поднялись в сыром воздухе и развеялись на холодном ветру.<br><br>Ни тело Адирис, ни тела ее последователей не нашли. Многие предсказывали ее возвращение, но истинная судьба верховной жрицы Вавилона осталась неизвестна.","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"Дэнни Джонсон, также известный как Джед Олсен, схватил газету с кухонного стола: она была недельной давности, но на первой странице красовалось его лицо, зернистое и впалое. Стоял один из тех душных флоридских вечеров, когда жара и влажность пропитывает на кухне все и заставляет потеть, будь ты хоть трижды недвижим. Он опустился в мокрое кресло и начал читать. Хорошо бы статья вышла удачной — он отлично поработал в Розвилле.<br><br><i><b>ГОУСТ ФЕЙС ИСЧЕЗ</b><br><br>18 июня 1993 г.<br><br>На первый взгляд Джед Олсен был скромным и усердным фрилансером, поработавшим на множество мелких газет. Сотрудникам «Розвилль Газетт» нравилось то, каким добродушным и честным он казался, и поэтому к нему перестали относиться как к незнакомцу уже через пять минут с начала собеседования.<br><br>«Джед быстро выделил в комнате главного редактора, широко тому улыбнулся, крепко пожал руку и заговорил о традиционных американских ценностях. И все, его приняли», — бывший сотрудник «Розвилль Газетт»<br><br>Олсен никогда не объяснял свою беспокойную карьеру, которая зигзагом проходила через несколько маленьких городков от Юты до Пенсильвании. Его работу на предыдущих местах подтвердить было невозможно. У него было хорошее портфолио и правильное отношение к делу, плюс им немедленно нужен был сотрудник.<br><br><b>УБИЙСТВА В РОЗВИЛЛЕ</b><br><br>Олсен проработал в газете пять месяцев, когда начались убийства: жертвы разного возраста были зарезаны в своих домах. Согласно отчетам, жертвы были выбраны случайно, но убийца знал планы их домов. Многочисленные ножевые ранения указывали на личный мотив. Следов ДНК обнаружено не было. Местная полиция была поставлена в тупик: убийства были выполнены с яростью, присущей преступлениям в состоянии аффекта, но в тоже время были хладнокровно продуманы заранее. Неуловимого, словно привидение, убийцу прозвали Гоуст Фейсом.<br><br>Также убийца любил следить за своими жертвами. За несколько дней до смерти две жертвы сообщали о том, что их преследовала темная фигура. Убийца следовал за своими жертвами от «Судака», маленького бара в северном Розвилле, и фотографировал их дома, высматривая способ пробраться внутрь. Он мог следить за своими жертвами неделями, скрупулезно изучая их привычки и распорядок дня. Когда на него накатывало желание убивать, он выбирал самую уязвимую жертву из списка и бесшумно вламывался в дом.<br><br>Все работники газеты работали над историей об убийствах в Розвилле. Олсена часто отправляли взять интервью у семей жертв или передать официальные заявления полиции. Тогда никто не знал, что это только увеличило общее число жертв.<br><br><b>ГОУСТ ФЕЙС</b><br><br>В Розвилле началась паника, когда Олсен принес видеоматериал фигуры в капюшоне, ночью вламывающуюся в чей-то дом. Лицо под маской, расплывчатое белое пятно во тьме, на секунду появилось на пленке и затем исчезло в доме. В результате Олсен написал статью «Гоуст Фейс пойман на камеру». Казалось, что он гордится своей работой, его веселило то, что весь город боится его историй о привидениях.<br><br>Спустя несколько недель Олсен оставил на рабочем столе записку и исчез:<br><br>«Надеюсь, вам понравились мои истории. Я с удовольствием воплощал их в жизнь. Не переживайте, я еще не закончил», — Джед Олсен.<br><br>Полиция Розвилля до сих пор отказывается комментировать ситуацию, ведь Джед Олсен остается на свободе.</i><br><br>Дэнни улыбнулся, вырывая статью из газеты. Когда расследование начало указывать на него, он собрал вещи и быстро покинул Розвилль.<br><br>Он поднялся, отлепив кожу от липкого сиденья. Удушающая влажность окружила его на входе в спальню. Конденсат скатывался по маленькому запотевшему окошку, а со стены свисали потрескавшиеся влажные обои. Цветочный узор на них был покрыт ужасающими фотографиями и газетными заголовками. Дэнни прикрепил статью недельной давности поверх фотографии снятых скальпов. Он почувствовал легкий укол голода и задумался о том, когда ел в последний раз. Сегодня утром, когда он отмывал нож и одежду? Или прошлой ночью, когда закончил следить за той девушкой? Он не мог вспомнить.<br><br>Дэнни отступил на шаг, чтобы полюбоваться своей работой на стене. Его мысли отправились в полет. Он вспомнил все написанные статьи, запланированные истории и воплощенные в жизнь сцены.<br><br>Вдруг он поежился от холода. Стылый ветер превратил влажность в спальне в плотный ледяной туман. Женщина завопила. Под его ногами хрустнули сухие листья.<br><br>Он улыбнулся в предвкушении. ","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"Вместо лица — раскрывающаяся лепестками пасть с зубами-иглами; крупные изогнутые когти бритвенной остроты; мощные конечности, позволяющие настичь жертву одним прыжком... Демогоргон — ужасающий монстр, опасный в любом измерении. Это воплощение необузданной ярости раздирает жертв на части и пожирает все до последнего кусочка, ничего не оставляя падальщикам. Ему неведомо сострадание: настигая добычу, Демогоргон не колеблется и беспощадно убивает ее, движимый инстинктами и неутолимой жаждой крови. Понятно, почему этот идеальный охотник и представитель кошмарной фауны Изнанки заинтересовал Сущность.","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"Казан Ямаока не мог удовольствоваться простым поддержанием чести своего рода. Он хотел превзойти славного отца и жаждал покончить с крестьянами, которые все чаще мнили себя самураями и тем попирали традиции воинов. Отец пытался привлечь сына к более благородным делам, но Казан отказывался внимать его советам. Позаимствовав отцовскую катану, он отправился в мрачный поход с тем, чтобы проявить себя и очистить Японию от самозванцев. Забыв о кодексе чести, Казан принялся убивать ложных самураев в горах и долах, в лесах и на побережье. Он убивал жестоко, лихорадочно и без всякой жалости, перед смертью унижая крестьян и воинов, отрезая им волосы и заставляя снимать доспехи. Его ярость, кровожадность и извращенное чувство чести были безграничны. Монахи приписывали ему одержимость темной потусторонней сущностью и проклинали Казана, а благородный повелитель стал называть его «буйный самурай Они Ямаока». Тем он оскорбил Казана и его семью.<br><br>Твердо решив обелить имя своего рода, Казан стал убивать всякого, кто посмеет назвать его Они. Он не понимал, чем заслужил подобное оскорбление. Разве он не победил лучших воинов? Разве не облагородил сословие самураев, избавив эти края от обманщиков? Как у людей поворачивался язык называть его безмозглым демоном? Может, его звали так за убийство даже самых грозных противников на поле боя? Или за сотни голов, проломленных боевой дубинкой? За «трофеи», отрезаемые у жертв? Но вопросы вопросами, а вынести подобного обращения он не мог. Зловещий голос в голове воина требовал зарубить повелителя, который позорит его имя.<br><br>Подойдя к воротам столицы, Казан увидел самурая, который преграждал ему путь. Едва Казан вытащил канабо, как самурай безмолвно бросился в бой и быстро одержал верх, но заколебался и не нанес смертельный удар. Зато это сделал Казан, со страшной силой опустив дубинку на голову врага и смяв его шлем. Когда противник упал, Казан подошел к нему, взглянул на открывшееся от удара лицо и узнал отца. Он отпрянул и упал на грязную дорогу, а отец все смотрел на него с укором в глазах. Испуская последний вздох, он прошептал, что жалеет о рождении сына. Казан зажмурился и завопил от душевной боли. Он кричал, пока не кончились силы, потом открыл глаза... и не увидел трупа отца. Став отцеубийцей, он не смог даже уберечь его от воров, которые польстились на доспех и уволокли тело.<br><br>Раздавленный, утративший себя и терзаемый виной, Казан стал бесцельно бродить по округе. В его голове громыхал отцовский голос, который уязвлял сына, напоминал о неудачах и доводил Казана до припадков черной ярости. Так продолжалось до тех пор, пока отцеубийца не набрел на статую демона-они. Он остановился посреди леса и долго, неотрывно смотрел на старое изваяние. Заросшая и подточенная дождями статуя словно насмехалась над ним, величая Казана тем самым мнимым самураем, от которых он столь отчаянно пытался избавиться. Воин тряхнул головой, отгоняя терзающий разум хохот, и словно в забытьи вспомнил правителя, который дал ему глумливое прозвище «Они Ямаока».<br><br>В его сердце снова запылал гнев. Казан отправился высоко в заснеженные горы — туда, где жил тот самый правитель. Подойдя к городским воротам, он встретил десяток самураев и убил всех до единого своей дубинкой-канабо. Никто не мог сравниться с ним в силе и скорости, не мог постичь жар его чудовищной ярости. Покрытый кровью и мозгами убитых, Казан прошелся по городу и нашел повелителя, который прятался в своем доме. Он вытащил обидчика наружу, подрезал ему сухожилия и стал любоваться тем, как обездвиженная жертва скулит подобно псу и молит его о пощаде. Потом без тени сомнения он вбил кулак в рот правителя и вырвал грязный язык, которым тот смел порочить имя воина.<br><br>Утолив жажду мести, Казан вышел из двора дома и вдруг понял, что окружен десятками крестьян с вилами, косами и тяжелыми дубинами в руках. Он отбился от первых атакующих, но потом люди бросились на него скопом и со всех сторон. Очень быстро Казан рухнул на землю и мог разве что глядеть в холодное и безучастное темное небо. Крестьяне продолжали колоть и бить самурая, изуверски пытая «Они» за жестокое убийство их любимого правителя. Разъяренная толпа уволокла Казана в небольшую каменную мельницу, где его продолжили мучать и в итоге оставили умирать медленной и болезненной смертью. Когда наутро люди вернулись, они увидели, что вся мельница заполнена невесть откуда взявшимся черным дымом, а тело и дубинка Казана бесследно исчезли. Так родилась мрачная легенда о яростном они, не дающем покоя местным жителям.","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"Калеб Куинн родился в семье ирландских иммигрантов среди пыльных пустошей Среднего Запада Америки. В пограничных землях болезни, голод и смерть были привычным делом. Первопроходцы цеплялись за крохи, чтобы выжить, а магнаты процветали за счет их трудов. Отец Калеба некогда был прекрасным инженером, но в его умениях никто не нуждался: кругом висели привычные объявления «Ирландцам просьба не беспокоить». Его старые инструменты много лет пролежали без дела, пока их не нашел Калеб. Заметив интерес сына к ремеслу, отец подарил ему свой старый гаечный ключ. \\n\\nВместе с отцом Калеб мастерил замысловатые вещицы, но без его присмотра создавал зловещие устройства. Он не рассказывал, что придумал маску, которая будет вонзать зазубренные иглы в глаза и вырывать их из черепа, и тщательно прятал наброски того, как она будет работать на задиравших его мальчишках. \\n\\nСо временем на инженерные умения Калеба появился спрос, и работодатели забыли о неприязни к ирландцам. Ему предложил работу некий Генри Бейшор, владелец железнодорожной компании «Юнайтед Вест Рейл». \\n\\nКалеб изобрел пушку, вгоняющую железнодорожные костыли в землю, а затем разработал паровой бур для прокладки туннелей. Бейшор делал вид, будто это маловажные достижения, но вскоре оказалось, что устройствами уже пользуются в других компаниях: изобретения Калеба попросту украли и перепродали. \\n\\nКалеба охватило знакомое чувство, от которого сердце пронзала колющая боль. Даже теперь он обходился объедками, а богачи пользовались его изобретениями. Обуреваемый яростью, он ворвался в кабинет Бейшора и разбил лицо мерзавца в кровавую кашу. В приступе гнева он выхватил изобретенную им пушку, прижал к животу работодателя и нажал на спуск. Железнодорожный костыль пробил плоть и внутренности Бейшора, пригвоздив того к столу. \\n\\nКалеба не повесили лишь потому, что Бейшор каким-то чудом выжил. В наказание его на 15 лет отправили в тюрьму «Хелшир» — первое в стране частное заведение такого рода. В этом узилище, набитом неграмотными головорезами, Калеба неожиданно взял под опеку образованный начальник тюрьмы. Так Калеб начал создавать пыточные устройства в обмен на дополнительные пайки. Спустя некоторое время тюремщик предложил смягчить наказание Калеба, обещая ему не только богатство, но и политическое влияние. Он уверял, что его связи помогут упечь Бейшора за решетку до конца жизни. В обмен на это от Калеба требовалось только одно — обогатить начальника, с помощью собственной изобретательности отлавливая преступников живьем и наполняя ими тюрьму. \\n\\nКалеб вернулся в мастерскую, чуть изменил прошлое изобретение и создал новое оружие, назвав его гарпунным ружьем. Первое испытание состоялось, когда какой-то воришка ограбил китайскую прачечную: Калеб не упустил эту возможность и опробовал прототип. Металлические сочленения заскрежетали, ружье пальнуло, а гарпун метнулся вперед и вонзился в живот цели... но запутался в кишках. Стоило за него дернуть, как гарпун с премерзким чавканьем вытащил внутренности воришки прямо в дорожную пыль. \\n\\nПосле нескольких улучшений ружье почти перестало потрошить жертв. Начальник тюрьмы распорядился выпустить других заключенных ирландцев, из которых Калеб набрал отряд. Так появилась «Хелширская банда». \\n\\nШесть лет они бродили по стране, выполняя свою часть сделки. После кровавой битвы в Гленвейле Калебу попалась на глаза газета с заголовком «Генри Бейшор покупает тюрьму \\"Хелшир\\"». На фотографии обезображенный Бейшор с гордым видом пожимал руку начальнику тюрьмы. От ярости сердце Калеба заколотилось, а вены так набухли, что едва не лопнули. Его предали... снова. Он опять стал пешкой в игре богачей. \\n\\nВсе члены Хелширской банды поклялись в верности Калебу и решили расправиться с начальником тюрьмы. С оглушительным ревом банда ворвалась в «Хелшир», словно кровожадные грабители, ураганом сметая все на своем пути. Кто-то из охранников поднял было пистолет, но замешкался и тут же получил гарпун в грудь. Схватив мужчину, Калеб принялся долбить его головой о дверь камеры, пока содержимое черепа не полилось сквозь прутья. \\n\\nДобравшись до кабинета начальника, Калеб пинком открыл дверь и увидел сладостную картину: в углу испуганно съежился не только тюремщик, но и сам Генри Бейшор. Ослепленный яростью, Калеб кинулся на старого врага и принялся безжалостно мордовать его; кровь стекала с лица ручьем, собираясь в багровую лужу под ногами. Хелширские бандиты окружили начальника тюрьмы и принялись избивать его ногами. После каждого пинка отчетливо слышался хруст костей. \\n\\nИзувеченные и сломленные, Бейшор и тюремщик молили о смерти. Шайка Калеба оттащила их в общее отделение, отдав на растерзание толпе заключенных. \\n\\nМокрый от крови и пота, Калеб проковылял в камеру, которую когда-то занимал, почти не слыша воплей Бейшора. Он присел на край койки; с кончиков его пальцев капала кровь. Сквозь зарешеченное окно в камеру проник неестественно густой туман. Калеб достал свой старый гаечный ключ, ржавый и покрытый сколами, и провел по нему пальцем, изучая вещь невидящими глазами. Он не помнил, откуда у него этот ключ, да и не хотел вспоминать. У своих ног он заметил пыльную тропку, а там, куда она вела, виднелись силуэты всех, кто поступал с ним не по справедливости: хулиганы-мальчишки, лживые представители власти... и снова Генри Бейшор. Сквозь туман проступили инструменты для казни: беспощадные стальные крюки, величественные и прекрасные в своей простоте. Калеб поднялся. Ногу пронзила боль, но он стиснул зубы и захромал по пыльной тропе вперед, оставляя за собой кровавые следы. ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"Пирамидоголовый — беспощадный палач-садист, одержимый единственным желанием причинять боль своим жертвам. Обремененный стальной конструкцией на голове и огромным тяжеловесным клинком, он бродил по чудовищным коридорам Сайлент Хилла, выполняя лишь одному ему понятную задачу. Когда раздавался звук его шагов, в темные углы забивались даже чудовища; те же, кто вставал на его пути, становились жертвами необузданной злобы палача. Выполнив долг, Пирамидоголовый был готов уйти на покой, однако нашлось место, где его навыки оказались очень нужны. Поднявшийся туман отличался от привычной мглы Сайлент Хилла: казалось, что каждый его завиток — это извивающийся усик некого живого, ищущего существа. В тот же миг было заключено молчаливое соглашение. Клубящееся облако предложило новый долг и возможности для садизма, а Пирамидоголовый выразил согласие, сделав шаг навстречу туману. ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"Чтобы понять состояние человека, следует возвыситься над его положением. Таково было жизненное кредо Тальбота Граймса — амбициозного шотландского химика, достигшего невиданных успехов. В детстве его — умного, харизматичного, не боящегося перечить старшим — любили сверстники. Несмотря на признание, он яростно оберегал свою самостоятельность и подолгу оставался в одиночестве, бродя по бескрайним полям вокруг родного городка. Невинное детское любопытство едва не стоило ему жизни после экспериментов с ядовитой наперстянкой. Тальбот оказался прикован к постели на несколько дней, обильно потея и потеряв всяческий аппетит. Когда мальчик наконец поправился, его охватил не страх, а неподдельный интерес. Было что-то магическое в том, как один-единственный цветок настолько сильно повлиял на его организм.<br><br>Когда Тальбот вырос, он быстро понял, чего хочет достичь и насколько сомнительные средства готов применять. Он учился в Лондонской медицинской школе и демонстрировал выдающиеся успехи, несмотря на несколько выговоров от преподавателей. Его готовность раздвигать границы дозволенного обеспечила ему место в Британской Ост-Индской компании, а через несколько лет он уже занимал должность ведущего химика. Через какое-то время он совершил одно из своих величайших открытий, создав вещество, которое могло увеличить продуктивность рабочего, одновременно снижая потребность в отдыхе. За это он получил в награду секретную лабораторию под лагерем военнопленных на острове Дайер.<br><br>Туда, к берегам Индии, свозили пленных, захваченных в ходе Опиумной войны. Они и стали невольными подопытными ученого. На них Тальбот испытывал средство, позволявшее солдатам переносить сильнейшую боль. Хотя большинство побочных эффектов было незначительным, ходили слухи, что некоторых солдат лекарство лишило рассудка. Потеряв разум, они вырезали целые деревни, кололи местных жителей штыками и развешивали их на деревьях. Однако никаких официальных докладов по этому вопросу не делалось, а Тальбот отказывался считать себя виноватым за то, что могло оказаться обычными солдатскими байками.<br><br>Казалось, что этого черствого гения просто невозможно поколебать. Но Тальбот не представлял, каких врагов он нажил из-за своих трудов и спорных решений. Осознание накрыло его практически буквально, вместе с ударом стальной трубы по затылку во время поездки в Мангалуру. Тальбота связали и бросили в повозку. Когда с его глаз сняли повязку, болезненного вида мужчина показал ему общую могилу, куда были свалены сотни тел. Тальбот не подозревал, что рабочих, которых убило его средство для повышения продуктивности, уже набралось бы на целую фабрику. Он знал, что не сможет защитить себя от ярости и обвинений похитителя. Ему осталось только сжаться в комок под градом ударов стальной трубы. Затем тело Тальбота бросили в ту же могилу и оставили умирать. Там, то приходя в сознание, то погружаясь в черные пучины беспамятства, он полз к свободе, и пальцы его то и дело погружались в гниющую плоть. Черные мухи слетелись на его неприкрытые раны. Ему казалось, что в кожу вонзаются сотни игл. Упав и не в силах больше подняться, он обнаружил, что смотрит прямо в ослепительно яркие светло-карие глаза мертвой женщины. У него не осталось сил, чтобы отодвинуться.Он мог только лежать и смотреть на дело своих рук.<br><br>Тальбот был на волоске от смерти, но этот волосок так и не оборвался. Ученый пришел в себя на узкой кровати и увидел доброе морщинистое лицо своего спасителя. С каждым болезненным вдохом к нему понемногу возвращалось здоровье. Его выхаживали в древней школе тайных знаний, замаскированной под монастырь. Там, посреди зеленых садов, за высокими невзрачными стенами монахи изучали запретные тексты, стараясь расширить сознание в поисках иных измерений, между которыми, как они верили, существовала связь.<br><br>Знания Тальбота оказались бесценны. Его изменяющие сознание вещества органично дополнили теории по расширению способностей нервной системы. Он понял, что оказался спасен не по банальной прихоти судьбы. Нет, его вытащили из могилы специально для обретения новых знаний. Он согласился помогать монахам во время выздоровления, и те поручили ему изучение «вещества души» — состава, полученного из шишковидной железы и способного открыть третий глаз. Тальбот приступил к этому исследованию из благодарности, но вскоре стал одержим им. Он сутками просиживал над забытыми текстами из архивов школы и открывал научные формулы, подтверждавшие идеи, которые еще недавно казались чем-то невозможным. Тальбот начал мечтать о том, чтобы ввести человечество в новую эпоху просветления. Возможно тогда его ночные кошмары, в которых он видел сотни трупов рабочих и пару светло-карих глаз, наконец-то прекратятся.<br><br>Когда Тальбот почти достиг прорыва, отношение монахов изменилось. Их добрые улыбки сопровождались тревогой в глазах. Монахи быстро отводили взгляды, но Тальбота было не провести. На смену вежливым беседам, которые когда-то велись при нем, пришли перешептывания по углам. Последним, что он увидел в школе, был старый потолок над кроватью, трещины в котором расходились словно дендриты.<br><br>Следующие воспоминания представляли собой разрозненную мозаику картинок и ощущений. Смазанные огни, стук копыт по мостовой, грубая мешковина, царапающая щеки, укусы острых зубов. Он проснулся немытый, одетый в лохмотья, на соломенном матрасе опиумного притона. Его разум словно укутали в толстый туман. Первым делом Тальбот вспомнил о своих записях — единственном письменном свидетельстве прорывных открытий. Он заметался в поисках по грязному подвалу и громко молил о помощи. Редкие гости притона поднимали головы со своих гамаков, но лишь апатично взирали на него затуманенными наркотиком глазами. Тальбот едва успел заметить выросшую перед ним фигуру в капюшоне. В его руку вонзилась игла, и мир перед глазами вновь померк.<br><br>Пробуждение. Еще одно. С каждым разом они становились все туманнее. Он ощупал языком пустые места между зубами. «Сколько еще?» — подумал он. К нему вернулось смутное воспоминание о веществе души, его записях и скором открытии. В голове послышался голос, звучавший словно издалека.<br><br>Трясущимися руками ученый пытался заточить камень. В сумрачном подвале, в окружении пребывающих в вечном ступоре людей, он по памяти выцарапывал свои исследования на стенах. Тальбот писал часами, пока пальцы не начинали кровоточить. Со стен он перешел на пол, записывая все, что нашептывал ему голос, хотя и не понимал смысла слов. Когда места для записей не осталось, он сжал камень покрепче и выцарапал строки прямо у себя на груди. И тогда ему, измазанному кровью, открылось чудо: невероятное поле ярких оранжевых цветов. Шепот звал и манил шагнуть туда, открыть миры и измерения за пределами человеческого понимания. На миг Тальбот почувствовал то самое ощущение чуда, что сопровождало его в детстве.<br><br>Обитатели опиумного притона проснулись в тишине. В воздухе до сих пор висел сухой запах дыма. Когда наркотический дурман в их сознании рассеялся, они увидели еще не засохшую кровь на каменном полу. Ее тонкие струйки до сих пор текли в трещинах между камней. Когда глаза привыкли к полумраку комнаты, люди начали различать угловатые буквы, выцарапанные в стенах. Буквы складывались в одну и ту же бесконечно повторяемую фразу: <i>«Смерть — это только начало»</i>.","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"Сиамские близнецы Шарлотта и Виктор Дейе были навеки связаны самыми тесными узами. Они родились в далеком XVII веке и выжили только чудом, но сразу же были названы отродьями. Все дело в том, что нижней частью тела Виктор врос в грудь сестры, а где-то внутри его ноги переплетались с ее мышцами и органами. Он был меньше Шарлотты и больше походил на придаток ее тела, чем на полностью сформировавшегося человека. Когда новорожденные стали плакать, вместе с ними завопила и принимавшая роды повитуха. Она опрометью выбежала из дома, крича о рожденном ведьмой демоне. Так началась охота на Шарлотту, Виктора и их мать Мадлен.<br><br>Близнецы почти не помнили свои младенческие годы, но это время можно было с наименьшей натяжкой назвать нормальной жизнью. Им казалось, что странствия с матерью по всей Франции в попытках скрыться от людей было обычным делом для всех детей. В пятилетнем возрасте их «игра» осложнилась из-за болезни матери. У бледной и измученной Мадлен не было иного выбора, кроме как поручить Шарлотте найти хоть немного еды. Она замотала девочку в тряпки, скрывающие выпирающее тело Виктора. Малышка вышла из лесной чащи и отправилась в ближайший городок. Она выглядела странно, но старательно делала то, чему ее учили: дождалась удачного момента на рынке и стащила подвернувшуюся снедь. Так она победила в новой игре, но ненадолго.<br><br>В глухую ночь вокруг лесного убежища семьи заколыхалось пламя факелов. Кто-то выкрикнул приказ, и целая толпа охотников на ведьм бросилась вперед. Чьи-то руки вырвали близнецов из постели. Шарлотта отчаянно пиналась, отбиваясь от пришлых. Мадлен умоляла пощадить детей, но удар дубиной по голове оборвал ее мольбы. Виктор завопил, пища, словно загнанная в угол крыса.<br><br>Охотники не теряли времени даром. Пришедший с ними судья объявил Мадлен виновной в колдовстве, чему свидетельствовали ее демонические отпрыски. За пару минут ее бесчувственное тело приковали к дереву, обложив ноги сухими ветвями и мхом. Придя в себя, она не стала сопротивляться и лишь попросила детей отвернуться, но их заставили смотреть. Близнецы видели, как охотники поджигают хворост факелами, как пламя перекидывается на юбку матери, опаляя ее кожу. Они видели, как с ее тела капали шипящие капли жира, а лицо стало пузыриться и искажаться. Дети смотрели, пока не умолкли крики, разорвавшие ее голосовые связки, и не осталось ничего, кроме потрескивания углей и тошнотворного запаха.<br><br>Вместе с матерью они утратили всякую радость и доброту. Их посадили в клетку и отвезли в старый деревянный храм, где продали группе незнакомцев в темных плащах. Виктор царапался и кусался с яростью бешеного зверя и успокоился только в объятиях сестры. Шарлотта, озлобленная и ненавидящая всех, кроме своего брата, обрела смысл жизни в его защите.<br><br>В храме над ними годами проводили необычные эксперименты, некоторые из которых были жестоки, другие же попросту необъяснимы. Однажды им приказали свернуть шею маленькой серой птичке, а в другой раз — капать кровью с пальцев, орошая вазу с розами. Каждый седьмой день они спали с влажными дубовыми ветками под подушкой. А еще были песнопения: люди в балахонах постоянно пели через равномерные промежутки времени.<br><br>Через некоторое время наступил час последнего эксперимента. Двое в мешковатых одеяниях отвели близнецов в центр храма и поместили Шарлотту на алтарь в хорошо освещенном зале. Человек с морщинистым лицом возложил руки на лбы близнецов, внимательно осматривая их черепа. Он пробормотал «Memento mori» и вытащил сияющий нож.<br><br>Шарлотта перекатилась на бок, сместив брата с алтаря. Закричав, он изо всех сил вытянул руку и сбил светильник на землю. Сухое дерево немедленно вспыхнуло. Пламя поползло по полу, поджигая черные балахоны. В наступившем хаосе слышались крики боли, придавая Шарлотте сил. Она рванулась сквозь обжигающее пламя и черный дым. Болезненная тяжесть заполнила ее легкие. Выхода не было, каждый шаг вел к сокрушающему жару. Задыхаясь, она упала на колени и вдруг увидела… солнечный свет и деревья. Она выпала из пламени на покрытую росой траву. Не оглядываясь, Шарлотта бежала сквозь лес, пока не рухнула без сил.<br><br>Шарлотта открыла глаза и нащупала руку брата. Он не шелохнулся. Его тело беспомощно свисало с ее торса. Она обхватила его лицо руками, всматриваясь в печальные и безжизненные глаза. Привычные для нее движения, когда его тело натягивало ее кожу, или его ноги шевелились в ее груди, прекратились. Виктор был мертв.<br><br>У Шарлотты не было иного выбора, кроме как бежать дальше, и она оплакивала брата, спасаясь от людей в черных плащах и охотников на ведьм. Она спрятала труп Виктора под одеждой и пробралась в канализацию ближайшего города. Там девочка и осталась, часто выбираясь наверх, чтобы украсть еду, хотя в дни страшного голода годились и помои для свиней. Спустя несколько лет конечности Виктора почернели и начали сочиться гнилью, но само тело отказывалось полностью разлагаться, словно кровь сестры все еще циркулировала в нем. Защита этого бездыханного тела стала для Шарлотты единственным смыслом жизни. Она отказывалась расставаться с последним родным человеком, который у нее остался.<br><br>В подростковом возрасте ее жизнь превратилась в борьбу за выживание. Ее ненависть ко всем людям скопом крепла день ото дня, подпитываемая пониманием, что они никогда не оставят ее в покое. Сколько бы ни погибло во время ее неудачных краж и отчаянных попыток сбежать, но тех, кто гнался за ней, порицал ее, называл чудовищем, демоном и ведьмой, становилось только больше. Хуже всех были люди в черных плащах. Они никогда не оставляли попыток поймать ее, вынуждая девушку постоянно бросать обжитые места и спасаться бегством.<br><br>Долгие годы Шарлотта скрывалась, проливала кровь по необходимости и по ночам качала на руках своего давно погибшего брата. Во время особенно холодной зимы силы оставили ее. Еды почти не было, а утлые лачуги не защищали от мороза. Она сидела у костра в лесу с серпом в руке, гадая, кто прикончит ее первым: люди в черных плащах или жуткий холод. Когда вокруг ее ноздрей образовалась корка льда, а губы приобрели синюшный оттенок, Шарлотта ощутила неизведанное ранее чувство принятия. Она закрыла глаза, погружаясь в безмятежность смерти, когда вопль, пронзительный и злобный, пронзил тишину. Виктор содрогнулся и вырвался из ее груди в облаке тумана. Прежде чем она успела что-то понять, он рухнул на снег, затем вскочил и побежал, оставив только кровавую лужу.<br><br>Сойдя с порога смерти, она помчалась за ним. Зовя повзрослевшего брата, Шарлотта бежала по лесу, пока ее ноги не начали подламываться. Наконец она увидела Виктора, сидящего на самой границе густого тумана. Его лицо было искажено дикой гримасой. Он закричал, когда из тумана вышла темная фигура и схватила его за руку. Умиротворение, завладевшее было нутром Шарлотты, улетучилось. Его сменила клокочущая ненависть и ярость, в которых она так долго черпала силы. Покрепче ухватив серп, Шарлотта бросилась в туман, готовая выпотрошить любого, кто посмеет приблизиться к ее брату.","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"Хак Чиун упивался чужим вниманием. Каждый устремленный на него взгляд, каждое произнесение его имени словно заряжало певца энергией. Купаясь в чужом восторге, он желал его все больше и больше. Он с детства умел привлекать к себе всеобщее внимание. В семейном ресторане родителей Хак развлекал посетителей своими представлениями с метательными ножами. Наивные туристы верили, что это традиционное корейское развлечение. Они легко и без вопросов платили, чтобы на него посмотреть. Отец Чиуна тратил выручку на сына, оплачивая уроки танцев и вокала. Он толкал своего ребенка на поиски славы, которой так и не смог достичь сам.<br><br>И Чиун его не разочаровал. Он годами рассыпал бисер своих талантов перед посредственностями в составе конкурсных жюри, пока ему не улыбнулась удача. Ли Юнчин, продюсер из Mightee One Entertainment, пригласила Чиуна в свою программу обучения. Он переехал в общежитие в Сеуле и стал вкалывать по четырнадцать часов в сутки. Из юного дарования начали делать звезду: учили двигаться и петь, держаться перед публикой с нужным сочетанием уверенности и скромности.<br><br>Ему приходилось нелегко, но учеба давала результаты. Юнчин решила включить Чиуна в музыкальную группу «БЕЗ ПРИКРАС», надеясь, что он привнесет чистую энергию в их творчество. Можно сказать, что вскоре музыканты проснулись знаменитыми. Чиун с головой погрузился в сверкающую пучину людского обожания и напропалую давал интервью. Безумный график выступлений вытягивал все соки из остальных участников группы, но Хак словно лучился энергией. Еще бы, ведь он каждый день видел, что поднялся над серой массой обывателей.<br><br>Впрочем, со временем притупились даже эти некогда острые чувства. При взгляде на фанатов он видел, что их восторг и зависть делятся на пятерых, рассеиваются между всеми участниками группы. Признание публики заставляло его жаждать еще большей славы.<br><br>Чиун сохранял лицо и прятал отвращение к людям глубоко внутри, нацепив маску обаятельного паренька. Вместе с остальными он записал новый альбом группы «БЕЗ ПРИКРАС». А когда вернулся в студию после длинного обеденного перерыва, то обнаружил, что судьба преподнесла ему подарок. Его встретил столь узнаваемый запах горящей проводки. Он ринулся в пультовую, но дверь загораживали упавшие колонки. По другую сторону в дверь отчаянно стучали остальные члены группы, и их крикам вторил рев пламени.<br><br>Чиун крикнул в ответ, подбежал к колонкам, схватился за одну и... остановился. Застыл. Каждый его вдох стал осознанным и требующим полного внимания действием настолько, что крики из комнаты стали едва слышны. Чиун медленно сделал шаг назад. И еще один. Затем он услышал. Сгорая в огне, они выкрикивали его имя. Звали его, желая увидеть в нем спасителя. Чиун! Чиун! Хак Чиун! Он в жизни не слышал ничего прекраснее. Когда приехали пожарные, он плакал и делал это искренне.<br><br>О Чиуне узнали как о трагическом герое, который сделал все возможное в тщетных попытках спасти друзей. Юнчин организовывала ему одно интервью за другим, пока не пришло время ребрендинга. Он переродился в образе Трюкача — сольного исполнителя с песнями собственного сочинения, под диким обликом которого скрывалось чуткое сердце. Но вдали от света софитов и шума телевизионных студий в нем зрело нечто темное.<br><br>Он стал искать добычу среди одиночек и приходил к ним по ночам. Его первой жертвой стал студент музыкального колледжа с чарующим голосом. Чиун разбудил его ударом биты по черепу, связал ему руки и ноги, а в рот запихнул тряпку и заклеил поверх скотчем. После этого он пытал и расчленял его несколько часов, пока парень не умер. Но ему все равно чего-то не хватало... Отклика, контакта. Он хотел слышать этот чудесный голос, когда жертва выкрикивает мольбы во время вспарывания живота, а получил только глухое мычание из-за кляпа.<br><br>Это убийство его кое-чему научило, и он изменил методы.<br><br>Жертв нужно похищать и увозить куда-нибудь в заброшенное здание, где можно было не заглушать их голоса и наслаждаться чистыми эмоциями. Он начал записывать вопли и вставлять их в музыку. Стал искать, куда бы ловчее ткнуть, чтобы получать разные виды криков. Если всадить нож в квадратную мышцу поясницы, то получишь долгий горловой вой, а перерезанная сонная артерия вызывала звук, похожий на те, что издает кошка при удушении. В их страданиях была своя честность. Чиун записывал каждую сессию, а затем микшировал звуки и вставлял их в песни, скрывая за слоями мелодий.<br><br>Он был в восторге от своей работы. Певец оставлял подсказки для полиции. Однажды он красиво обернул норковую горжетку с недавней фотосессии вокруг перерезанного горла жертвы. У следующего убитого он вырвал зубы, которых не было у боксера в одном из его клипов. Один раз, когда жажда чужого внимания толкнула его на особенную дерзость, Хак убил фанатку с VIP-встречи, вставил свои запонки с бриллиантами в ее пустые глазницы и кровью написал «Я ВИДЕЛА БОГА» у девушки на груди. Каждое его выступление становилось головокружительным спектаклем.<br><br>Работы Чиуна, будь то музыка или убийства, обсуждались по всему миру. Но когда предпочитаемым методом самовыражения окончательно стала жестокость, это сказалось и на музыкальной карьере певца. Доходы падали, и руководство Mightee One корило за это своенравную звезду. Юнчин встала на защиту Чиуна с яростью настоящего профессионала, но противник взял числом. Руководство настояло, что Чиун перестанет исполнять песни собственного сочинения.<br><br>Это решение привело к чудовищной развязке. В его треках музыка сплеталась с сутью человека, а директорат отказывался признавать отклонения от мейнстрима, если они шли вразрез с ожиданиями. Ну и пусть. Если они не могут понять его творения, он включит в пласт искусства их самих. \\n\\nУ него было три месяца до приватного концерта для членов совета директоров Mightee One. Три месяца, чтобы спланировать свой «магнум опус». Он перевел сумасшедшие суммы денег одному ветеринару и приобрел канистры с закисью азота, а затем подкупил работника сцены частного театра Mightee One, чтобы тот пустил его в нужную комнату. Звездный статус распахивал перед ним двери и давал кредит доверия, недостижимый для простых смертных. Когда шоу было готово, газ начал потихоньку просачиваться в комнату с директорами и работниками сцены. Они ждали Чиуна, а он так удачно задерживался. \\n\\nК его появлению люди в полубессознательном состоянии обмякли в креслах или пытались ползти к выходу. Он быстро связал их и заколебался, только когда дошла очередь до Юнчин — женщины, вытащившей его из грязи и открывшей перед ним дорогу к жизни, которую он заслуживал. Ей положена награда. Особое место для начинающегося шоу чудес. Подпитываемая гневом, она сопротивлялась даже после лошадиной дозы успокоительного и была куда сильнее остальных. Он устроил ее в кресле как единственного зрителя и силком открыл ей глаза. Остальные, все в соплях и слезах, были перенесены на сцену, где у каждого была роль в последнем акте. С презрительной усмешкой он намазал на них грим и осветил софитами. Они стали его средством самовыражения. \\n\\nПод звуки собственных мелодий он пытал их, грациозно скользя от одного тела к другому, выводя вопли на поистине оперное крещендо. Они кричали, всхлипывали, орали, звали родных и любимых, вспоминали матерей. Какое блистательное торжество эмоций и того, что делало их людьми. И все это с взглядами, устремленными на Чиуна. \\n\\nСо сцены тонкой струйкой текла кровь, пока после броска его метательного ножа не умолкла последняя жертва. И музыка стихла. Чиун, потный, окровавленный и вымотанный, повернулся к Юнчин и отвесил глубокий поклон. Занавес. Он достиг совершенства. С ножом в руке он прошел к Юнчин, готовый завершить оставшиеся дела перед финалом. Но когда дошел до нее... \\n\\nТуман. \\n\\nОн взялся ниоткуда. Его сырые и прохладные клочья окутали его, и в них было... уютно. Он увидел большую сцену, полную больниц и храмов, лесов и скотобоен. Вечное измерение, украшенное ржавыми крюками и жившее вниманием миллионов глаз, которые будут смотреть на Чиуна, убегать от него и <i>ощущать, что он такое</i>. Ему требовалось всего лишь согласиться, стать инструментом Тумана и главное — заставить их кричать. \\n\\nНа бис!","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"Немезис создан корпорацией Umbrella и является биоорганическим оружием, которое почти невозможно остановить. Он думает только о преследовании и уничтожении указанных целей. Этот экземпляр входит в серию Тиранов Т-103 и обладает повышенным интеллектом благодаря вживленному паразиту NE-α. Впервые Немезиса опробовали в Раккун-Сити, поставив перед ним единственную задачу истребить агентов отряда S.T.A.R.S. Сокрушая все на своем пути, он несколько раз столкнулся с Джилл Валентайн. Хотя ей удавалось ускользать, Немезис всегда дышал ей в спину. Когда ему почти удалось загнать цель в угол, их обоих накрыл странный туман, смешавшийся с дымом от царившего в городе хаоса. Для Немезиса с его устойчивостью к холоду и недостатку кислорода этот феномен ничего не значил. Имело значение только одно: продолжить выполнение задания по нахождению и уничтожению агентов S.T.A.R.S., убивая любого, кто встанет на пути.","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/ru/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Сильный и неистовый последний вздох, вырванный у смотрителя Психлечебницы Кротус Пренн, Патрика Спенсера. Направляя его энергию, Медсестра может прыгнуть сквозь мир духов, используя Скачок несколько раз подряд. После этого она сильно устает.<br><li>Открывает способность Скачка.</li><li>Добавляет <b>1</b> прыжок к цепочке Скачков.</li>","name":"Последний вздох Спенсера","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"Большой стальной капкан. Такие валяются повсюду, их можно подбирать и устанавливать, где угодно.<br><br><b>МЕДВЕЖИЙ КАПКАН</b><br>По умолчанию в начале матча у вас есть <b>1 медвежий капкан</b>. Исследуйте карту, чтобы находить и использовать больше капканов.<br><b>Установка медвежьего капкана:</b><br>нажмите и удерживайте <i>кнопку силы</i>, чтобы установить <b>медвежий капкан</b> на подходящей поверхности перед собой. Размещенный <b>медвежий капкан</b> обездвиживает и выводит из строя любого, кто в него наступит. Здоровый выживший, попавшийся в <b>медвежий капкан</b>, получит ранение, но может попытаться сбежать. Нажмите <i>кнопку взаимодействия</i>, чтобы забрать выжившего из ближайшего <b>медвежьего капкана</b>.<br><b>Взведение капкана:</b><br>найдя неактивный <b>медвежий капкан</b>, вы можете подойти к нему и зажать <i>кнопку силы</i>, чтобы взвести его.<b>Сбор медвежьих капканов:</b><br>нажмите <i>кнопку взаимодействия</i>, стоя рядом с лежащим <b>медвежьим капканом</b>, чтобы подобрать его. По умолчанию вы можете носить с собой <b>1 медвежий капкан</b>.","name":"Медвежий Капкан","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"Тяжелый чугунный колокол, обладающий древней силой. У звонящего в него есть возможность прогуляться по миру духов.<br><br><b>ПЛАЧУЩИЙ КОЛОКОЛ</b><br>Удерживайте <i>кнопку силы</i>, чтобы <b>замаскироваться</b>. Снова зажмите <i>кнопку силы</i> в замаскированном состоянии, чтобы <b>снять маскировку</b>; при появлении ваша скорость возрастет на <b>1 сек.</b> Звук плачущего колокола слышен на расстоянии <b>24 м</b>.<br><br><b>Маскировка</b><br>Замаскированный <b>Призрак</b> передвигается быстрее, становится почти невидимым и получает эффект <b>«Незаметность»</b>. Будучи замаскированным, <b>Призрак</b> не может атаковать, но способен взаимодействовать с предметами окружения. На ярком свету <b>Призрак</b> автоматически <b>теряет маскировку</b>.","name":"Плачущий Колокол","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"Удерживайте <i>кнопку силы</i>, чтобы совершить рывок с бензопилой. Выжившие, пораженные во время рывка с бензопилой, оказываются при смерти.<br><li> Все действия с бензопилой (заведение бензопилы, поддержание завода и <b>рывок с бензопилой</b>) наполняют шкалу перегрева.</li><li> Когда <b>шкала перегрева</b> заполняется, бензопилу нельзя использовать, пока она полностью не остынет. Перегрев не прерывает текущий <b>рывок с бензопилой</b>.</li><li><b>Шкала перегрева</b> постепенно пустеет, когда вы не используете бензопилу.</li>","name":"Бензопила","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"Этому навыку обучила ее мать, а природа лишь отточила мастерство. Охотница может бросать Топоры с убийственной точностью.<br><li>Вы начинаете матч с <b>5-ю Топорами</b>.</li><li>Для максимальной скорости полета Топора до конца заряжайте бросок.</li><li>Пополняйте запасы Топоров в <b>Шкафчиках</b>.</li>","name":"Охотничьи Топоры","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"Тьма внутри питает его решимостью лишить жизни свою жертву.<br><br><b>ЧИСТОЕ ЗЛО</b><br>Активизация <b>«Чистого Зла»</b> позволяет <b>Тени</b> четко видеть своих жертв и накапливать больше сил зла, преследуя их.<br><br><b>Чистое Зло I:</b><br>дает эффект <b>«Незаметность»</b>. Слегка снижает скорость движения. Слегка снижает дальность <i>базовых атак</i> с выпадом.<br><br><b>Чистое Зло II:</b><br>умеренно уменьшает радиус террора. Слегка увеличивает скорость движения. Слегка увеличивает дальность <i>базовых атак</i> с выпадом.<br><br><b>Чистое Зло III:</b><br>при активации на всех выживших накладывается эффект <b>«Уязвимость»</b>. <b>«Чистое Зло III»</b> действует <b>60 секунд</b>, после чего превращается в <b>«Чистое Зло II»</b>.<br><br><b>ОСОБОЕ УМЕНИЕ: ПРЕСЛЕДОВАНИЕ</b><br>Удерживайте <i>кнопку силы</i>, чтобы преследовать всех выживших в поле зрения. Преследование повышает ваш уровень <b>«Чистого Зла»</b>.<br><br><span class=\\"FlavorText\\">«Я встретил его пятнадцать лет назад; мне сказали, что в нем ничего не осталось — ни разума, ни совести, ни сознания; и даже самого примитивного осознания жизни или смерти, добра или зла, хорошего или плохого. Я встретил этого шестилетнего ребенка с его пустым, бледным, бесчувственным лицом и черными глазами... глазами дьявола. Я провел восемь лет, пытаясь достучаться до него; а потом еще семь, стараясь держать его взаперти, потому что я понял — за глазами этого мальчика скрывалось чистое... зло» (Доктор Сэм Лумис).</span>","name":"Чистое Зло","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"Источник силы Ведьмы - почерневший палец, используется как проводник ее страшной силы. Ведьма может контролировать и придавать форму грязи силой мысли. С помощью простых ритуальных рисунков она создает коварные копии самой себя из грязи и гнили, и использует их для разных целей.<br><li>Наделяет способностью создавать и контролировать <b>10</b> ловушек-Фантомов.</li><li>Дает возможность мгновенно перемещаться к потревоженным ловушкам-Фантомам, если те находятся в радиусе <b>40-а метров</b>.</li>","name":"Почерневший Проводник","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"Каннибал начинает испытание с тремя зарядами. Удерживайте <I>кнопку силы</i>, чтобы израсходовать один заряд и начать <b>размахивать бензопилой</b> с возможностью поразить несколько целей за раз. Выжившие, задетые во время <b>размахивания бензопилой</b>, сразу оказываются при смерти.<br><li>Используйте больше зарядов, чтобы продлить <b>размахивание бензопилой</b>; время восстановления при этом немного увеличится.</li><li> Заряды бензопилы восстанавливаются, когда вы не используете ее.</li><br><br>Когда вы поддерживаете завод бензопилы, постепенно заполняется <b>шкала ярости</b>. При заполнении шкалы или при столкновении с препятствием во время <b>размахивания бензопилой</b> Каннибал впадает в <b>ярость</b>. Во время <b>ярости</b> вы смертельно раните всех выживших вокруг себя.<br><li>Продолжительность <b>ярости</b> будет тем больше, чем больше зарядов бензопилы вы потратили во время <b>размахивания бензопилой</b>. Все оставшиеся заряды при этом будут утрачены.</li><li> Во время <b>ярости</b> скорость передвижения уменьшается.</li><li><b>Шкала ярости</b> постепенно пустеет, когда вы не используете бензопилу, и полностью опустошается во время <b>размахивания бензопилой</b>.</li> ","name":"Бензопила Буббы","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>ИСКРА КАРТЕРА</b><br>Поражая выживших особыми способностями <b>«Шоковая терапия»</b> и <b>«Статический разряд»</b>, <b>Доктор</b> вызывает у жертв <i>безумие</i>. По мере роста уровня <b>безумия</b> его проявления становятся все более ужасающими.<br><b>Безумие I:</b><br>заставляет выживших однократно вскрикнуть, что выдает их расположение <b>Доктору</b>. <b>Слегка</b> влияет на размещение и направление зон при проверке реакции.<br><b>Безумие II:</b><br>заставляет выживших однократно вскрикнуть и вызывает у них галлюцинации в виде <i>призрачного Доктора</i>. <b>Умеренно</b> влияет на размещение и направление зон при проверке реакции.<br><b>Безумие III:</b><br>заставляет выживших время от времени вскрикивать и вызывает у них галлюцинации в виде <i>призрачного Доктора</i>. <b>Чрезвычайно</b> влияет на размещение и направление зон при проверке реакции. В этом состоянии выжившие не могут лечить, чинить, ломать, открывать, очищать или использовать предметы, пока не выполнят действие <i>«Прийти в себя»</i>. Когда выживший выполняет действие <i>«Прийти в себя»</i>, уровень безумия снижается до <b>безумия I</b>.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: «Шоковая терапия»</b><br>Удерживайте <i>кнопку силы</i>, чтобы использовать <b>«Шоковую терапию»</b> — дальнюю атаку электричеством в области перед собой. У выживших, пораженных <b>«Шоковой терапией»</b>, повышается уровень <i>безумия</i>; все действия, которые они выполняли в тот момент, тут же прерываются. <b>«Шоковая терапия»</b> немедленно устраняет эффект <b>«Забывчивость»</b>.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: «Статический разряд»</b><br>Удерживайте <i>кнопку активной способности</i>, чтобы использовать <b>«Статический разряд»</b> и заставить всех выживших в пределах радиуса террора Доктора закричать и повысить их уровень <i>безумия</i>. <b>«Статический разряд»</b> нельзя использовать, пока он не восстановится. <b>«Статический разряд»</b> немедленно устраняет эффект <b>«Забывчивость»</b>.","name":"Искра Картера","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"Бодрствующие выжившие слышат радиус террора <b>Кошмара</b> и видят его на расстоянии 16 м, периодически видят на расстоянии от 16 до 32 м и не способны его разглядеть, если он находится дальше. <b>Кошмар</b> постепенно погружает выживших в дрему и автоматически переносит в Мир Снов через 60 секунд, а также мгновенно переносит их в Мир Снов успешной <i>базовой атакой</i>.<br><br>В Мире Снов выжившие попадают под действие <b>«Забывчивости»</b>, а также уязвимы для <b>силков сна</b>. Выживший может проснуться, если не пройдена проверка реакции, если его <i>будит</i> бодрствующий соратник, либо при использовании найденного им будильника. После каждого успешного <i>пробуждения</i> на следующее уходит в два раза больше времени. Будильники на 30 секунд дают выжившим полную невосприимчивость к усыплению.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: СИЛКИ СНА</b><br>Удерживайте <i>кнопку силы</i>, чтобы разместить <b>силки сна</b>. На выживших будет действовать эффект <b>«Замедление»</b> при прикосновении к <b>силкам сна</b> и небольшое время после этого.<br><br>Некоторые дополнения позволяют заменить <b>силки сна</b> на <b>доски сна</b>. Доски сна появляются в местах размещения досок в Мире Снов. Они подсвечены для <b>Кошмара</b> и не оглушают его.<br><br><b>ЖЕТОНЫ СНА</b>:<br><b>Кошмар</b> начинает матч с 5 жетонами сна, за счет которых он размещает силки сна. Когда у него заканчиваются жетоны, самые старые силки уничтожаются, а на карте размещаются новые.<br><br><b>ОСОБОЕ УМЕНИЕ: СМЕЩЕНИЕ ВО СНЕ</b><br>Удерживайте <i>кнопку активной способности</i>, чтобы переместиться к генератору в зоне видимости. Умение восстанавливается на 15% быстрее за каждого выжившего, находящегося в Мире Снов.","name":"Демон Снов","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"Навечно преданная делу своего учителя, она наказывает неблагодарных и виновных с помощью своей хитрости и убийственных ловушек.<br><br><b>Свинья</b> может передвигаться пригнувшись, атаковать из засады и надевать на головы выживших смертоносные обратные капканы.<br><br><b>КРЕЩЕНИЕ ПИЛЫ</b><br>Вы начинаете матч с <b>4</b> <i>неактивными</i> медвежьими обратными капканами. <i>Неактивный</i> капкан можно надеть выжившего в предсмертном состоянии, подойдя к нему и нажав <i>кнопку активной способности</i>. Капканы <i>активируются</i> при запуске любого генератора.<br>Выживший может снять обратный капкан (как <i>активный</i>, так и <i>неактивный</i>), если найдет верный ключ в одной из коробок Пилы, которые расположены на карте.<br><b>Активные обратные капканы</b><br>Когда капкан <i>активируется</i>, начинается обратный отсчет. <i>Активный</i> обратный капкан автоматически приносит выжившего в жертву, когда истекает время, или если выживший с таким<i></i> капканом пытается сбежать через ворота.<br><br><b>ОСОБОЕ УМЕНИЕ: ПРИГНУТЬСЯ</b><br>Нажмите <i>кнопку активной способности</i>, чтобы пригнуться. Снова нажмите <i>кнопку активной способности</i> в положении пригнувшись, чтобы встать. Пригнувшись, <b>Свинья</b> передвигается медленнее и получает эффект<b></b> <b>«Незаметность»</b>.<br><br><b>ОСОБАЯ АТАКА ИЗ ЗАСАДЫ</b><br>Нажмите и удерживайте <i>кнопку атаки</i>, пригнувшись, чтобы выполнить <b>атаку из засады</b>.<br><br><span class=\\"FlavorText\\">«Ты отдашь мне все. Каждую клеточку своего тела. Отметины на твоих руках — из другой жизни. Мы оставим ее позади. Если пройдешь по этому коридору, назад пути не будет. Ты понимаешь, Аманда?» (Крещение Пилы)</span>","name":"Баптизм Пилы","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"Годами Кеннет экспериментировал с анестезирующими препаратами и миорелаксантами, разработав в итоге несколько эффективных формул. Его любимой смесью стал добивающий тоник. Кеннет регулярно пользовался им, чтобы отравлять и обездвиживать жертв. Идущий с ним в паре добивающий антидот также имеет полезные эффекты.<br><br>Нажмите <i>кнопку активной способности</i> для переключения между <b>тоником</b> и <b>антидотом</b>. Нажмите или удерживайте и отпустите<i> кнопку силы</i>, чтобы швырнуть бутылку.<br><br>Нажмите и удерживайте <i>кнопку активной способности</i>, чтобы пополнить бутылки.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: «Добивающий тоник».</b><br>При контакте бутылка разбивается, выпуская облако фиолетового газа, который <b>отравляет</b> выживших. У <b>отравленных</b> выживших на 2 секунды мутнеет зрение, снижается скорость и появляется непроизвольный кашель.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: «Добивающий антидот».</b><br>При контакте бутылка разбивается, выпуская облако серого газа, который желтеет при активации. Клоун или любой выживший, попавший в активированное <b>облако антидота</b>, на 5 секунд получает ускорение передвижения на 10%. <b>Отравленные</b> выжившие исцеляются в <b>облаке антидота</b>.","name":"Добивающий Тоник","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"Дух может использовать свою Силу - Преследование Ямаоки, чтобы ворваться в бесплотный мир и появиться в другом месте.<br><li>Нажмите и держите клавишу Силы для заряда. Дух отделится от своего тела, оставляя за собой лишь физическую оболочку.</li><br>Пока Преследование Ямаоки активно:<li>Дух может переместиться в другое место, двигаясь при этом немного быстрее в течение короткого времени. Она не может просачиваться сквозь стены и препятствия.</li><li>Дух покидает физический мир, теряя из виду всех Выживших. Однако она все равно видит следы-трещины, которые Выжившие оставляют за собой.</li><li>Дух издаст звук, обозначая свое текущее местоположение.</li><li>Как только Сила заканчивается, Дух еще на некоторое время сохраняет прирост к скорости передвижения, а ее физическая оболочка превращается в прах.</li><br>Использование Преследования Ямаоки расходует шкалу Силы Духа. Шкала снова восполнится со временем. Шкала должна быть полностью заполнена, перед тем, как Сила может быть использована.","name":"Преследование Ямаоки","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"До знакомства с Фрэнком, который превратил их в Легион, они были обычными подростками и друзьями. Теперь они сами устанавливают правила и черпают силу из этой будоражащей и безумной свободы.<br><br><b>ДИКОЕ БЕШЕНСТВО</b><br>Активация <b>«Дикого бешенства»</b> позволяет вам быстро бежать и наносить удары нескольким выжившим по очереди. Когда шкала силы заполнена, нажмите <i>кнопку силы</i> для активации <b>«Дикого бешенства»</b>. Пока <b>«Дикое бешенство»</b> активно, <b>Легион</b> передвигается быстрее и может использовать дополнительные способности: <b>«Прыжок через доску»</b> и <b>«Дикий удар»</b>.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: ПРЫЖОК ЧЕРЕЗ ДОСКУ</b><br>Нажмите <i>кнопку взаимодействия</i>, когда действует <b>«Дикое бешенство»</b>, чтобы <b>перепрыгнуть</b> через опрокинутую доску.<br><br><b>ОСОБАЯ АТАКА: ДИКИЙ УДАР</b><br>Нажмите <i>кнопку атаки</i>, когда действует <b>«Дикое бешенство»</b>, чтобы нанести <b>дикий удар</b>. Попав по выжившему <b>диким ударом</b>, вы раните его и накладываете эффект <b>«Глубокая рана»</b>. При этом шкала силы Легиона заполняется, а «Инстинкт убийцы» подсвечивает всех выживших без эффекта <b>«Глубокая рана»</b> в пределах вашего радиуса террора. Если удар приходится по выжившему, на которого уже действует эффект <b>«Глубокая рана»</b>, <b>«Дикое бешенство»</b> тут же отключается и не дает вам преимуществ.","name":"Дикое бешенство","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"Чем глубже чума проникала в ее тело, тем ужаснее оно становилось: пальцы почернели, шея поросла гроздьями уродливых опухолей, а в горле клокотала кровавая рвота.<br><br><b>ОЧИЩЕНИЕ ОТ МЕРЗОСТИ</b><br><b>«Очищение от мерзости»</b> позволяет заражать предметы и выживших и вызывать нескончаемую эпидемию. Зажмите <i>кнопку силы</i>, чтобы зарядить <b>«Очищение от мерзости»</b>. Отпустите, чтобы выпустить струю заразной желчи. Выживший, по которому попадет атака, будет заражен. Попав по предмету, вы заразите его на какое-то время. Если выживший вступит в контакт с зараженным предметом, то тоже заразится.<br><br>Выживший, шкала заражения которого заполнится целиком, подвергнется эффекту <b>«Ослабление»</b> и получит ранение. Его будет рвать через случайные промежутки времени.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: ПОГЛОЩЕНИЕ СКВЕРНЫ</b><br>Зараженные выжившие могут излечиться от болезни и восстановить здоровье, совершив омовение в <i>Купели преданности</i>. После этого купель становится отравленной, а <b>Чума</b> может поглотить из нее скверну и развить свою силу. Зажмите <i>кнопку взаимодействия</i>, находясь у отравленной <i>Купели преданности</i>, чтобы преобразовать <b>«Очищение от мерзости»</b> в <b>«Очищение от скверны»</b>. Это действие также очистит купель.<br><br><b>ОСОБАЯ АТАКА: ОЧИЩЕНИЕ ОТ СКВЕРНЫ</b><br>Использовав умение <b>«Поглощение скверны»</b>, вы ненадолго замените <b>«Очищение от мерзости»</b> на <b>«Очищение от скверны»</b>. <b>«Очищение от скверны»</b> мгновенно наносит урон любому выжившему, задетому струей, но больше не заражает выживших и предметы.","name":"Очищение от мерзости","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>Гоуст Фейс</b> следил за своими жертвами неделями, скрупулезно изучая их привычки. Когда желание убивать становилось невыносимым, он точно знал, где нанести удар.<br><br><b>НОЧНОЙ САВАН</b><br>Нажмите <i>кнопку силы</i>, чтобы активировать <b>«Ночной саван»</b> при полной шкале силы. Когда <b>«Ночной саван»</b> активен, <b>Гоуст Фейс</b> получает эффект <b>«Незаметность»</b>. Совершив <i>базовую атаку</i>, вы полностью опустошите шкалу силы, а <b>«Ночной саван»</b> перестанет действовать.<br><b>Обнаружение</b><br>Выжившие могут <i>обнаружить</i> <b>Гоуст Фейса</b>, когда он находится поблизости, ненадолго задержав на нем взгляд. При успешном <i>обнаружении</i> шкала силы <b>Гоуст Фейса</b> опустеет, а <b>«Ночной саван»</b> исчезнет. Если выживший <i>обнаруживает</i> <b>Гоуст Фейса</b>, <i>«Инстинкт убийцы»</i> ненадолго подсказывает последнему, где находится увидевший.<br><br><b>ОСОБОЕ УМЕНИЕ: ПРЕСЛЕДОВАНИЕ</b><br>Удерживайте <i>кнопку силы</i>, чтобы следить за жертвами, когда <b>«Ночной саван»</b> активен. Удерживайте <i>кнопку силы</i>, прячась за укрытием, чтобы выглянуть и выслеживать быстрее. Завершив преследование выжившего, вы <i>отметите</i> свою жертву, и она временно получит статус <b>«Уязвимость»</b><i></i>.<br><br><b>ОСОБОЕ УМЕНИЕ: ПРИГНУТЬСЯ</b><br>Нажмите кнопку активной способности, чтобы пригнуться. Снова нажмите кнопку активной способности в положении пригнувшись, чтобы встать. Пригнувшись, <b>Гоуст Фейс</b> передвигается медленнее.<br><br><span class=\\"FlavorText\\">«Не обращай на меня внимания. Вот так, продолжай. Прекрасно! Я запечатлею твой образ» (Гоуст Фейс)</span>","name":"Ночной саван","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"По его телу пробежал разряд чуждой этому миру энергии. Внезапно земля разверзлась и поглотила Демогоргона целиком.<br><br><b>ИЗ БЕЗДНЫ</b><br>Нажмите и удерживайте <i>кнопку силы</i>, чтобы полностью зарядить и активировать способность <b>«Из Бездны»</b>. Все выжившие поблизости от активного портала будут обнаружены «Инстинктом убийцы».<br><br><b>ОСОБАЯ АТАКА «РАЗРЫВ»</b><br>Нажмите <i>кнопку атаки</i> во время зарядки или удержания способности <b>«Из Бездны»</b>, чтобы сделать рывок вперед и нанести страшный рассекающий удар.<br><br><b>ОСОБОЕ УМЕНИЕ: ПОРТАЛЫ</b><br>Нажмите <i>кнопку активной способности</i> для открытия портала на земле перед собой.<br><b>Путешествие по Изнанке</b><br>Стоя в портале и выделив другой портал, еще раз нажмите <i>кнопку активной способности</i>, чтобы пройти через Изнанку и выскочить из выбранного портала.<br><b>Активные порталы</b><br>Порталы активируются, когда через них проходят в первый раз. Выжившие могут запечатать только активные порталы. Ауры таких порталов подсвечиваются желтым.","name":"Из Бездны","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"Желание избавиться от слабых с помощью грубой силы.<br><br><b>ГНЕВ ЯМАОКИ</b><br>Вы поглощаете шарики крови, оставшиеся от раненых врагов. Нажмите и удерживайте <i>кнопку силы</i>, чтобы поглощать шарики и заполнять шкалу силы. Заполнив шкалу, нажмите и удерживайте <i>кнопку активной способности</i>, чтобы впасть в <b>кровавую ярость</b>.<br><b>Кровавая ярость:</b>\\nПока действует <b>кровавая ярость</b>, <b>Они</b> становится крайне опасен и получает доступ к способностям <b>«Рывок демона»</b> и <b>«Удар демона»</b>.<br><br><b>СПОСОБНОСТЬ: «Рывок демона»</b><br>Удерживайте <i>кнопку силы</i> во время действия <b>кровавой ярости</b>, чтобы выполнить <b>рывок демона</b>. Эта способность позволяет <b>Они</b> быстро перемещаться на большое расстояние.<br><br><b>ОСОБАЯ АТАКА: «Удар демона»</b><br>Удерживайте <i>кнопку атаки</i> во время действия <b>кровавой ярости</b>, чтобы нанести <b>удар демона</b> в направлении взгляда. <b>Удар демона</b> с выпадом имеет большую дальность действия и при успешном попадании приводит любого выжившего в состояние «при смерти».","name":"Гнев Ямаоки","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"Изобретательный Стрелок может притягивать добычу, используя свою уникальную разработку — переделанное ружье, которое стреляет не привычными пулями, а острейшими гарпунами на цепи.<br><br><b>ИСКУПИТЕЛЬ</b><br>Нажмите и удерживайте <i>кнопку силы</i>, чтобы прицелиться. Нажмите <i>кнопку атаки</i>, чтобы выпустить гарпун, который может пронзить выжившего и позволить <b>Стрелку</b> притянуть его к себе.<br><b>Притягивание:</b><br>когда выживший пронзен гарпуном <b>«Искупителя»</b>, нажмите и удерживайте <i>кнопку силы</i>, чтобы притянуть жертву. Выживший может сопротивляться, чтобы сорваться с цепи, или порвать ее об окружающие предметы. В случае успеха <b>Стрелок</b> будет ненадолго оглушен, а выживший получит ранение и эффект <b>«Глубокая рана»</b>. Если вы используете <i>базовую атаку</i>, пока выживший пронзен гарпуном, цепь тоже порвется, но никакие негативные эффекты не подействуют ни на <b>Стрелка</b>, ни на выжившего. Попав <i>базовой атакой</i> по пронзенному гарпуном здоровому выжившему, вы также наложите на него эффект <b>«Глубокая рана»</b>.<br><b>Перезарядка:</b><br><b>«Искупитель»</b> надо перезаряжать после каждого выстрела, чтобы использовать его снова. Нажмите и удерживайте <i>кнопку активной способности</i>, чтобы перезарядить <b>«Искупитель»</b>.","name":"Искупитель","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"Отворите врата страданий и будьте судимы! Великий нож рассекает землю, пробуждая дьявольское творение и неся страдания всем, кто посмеет приблизиться.<br><br><b>ОБРЯДЫ ОСУЖДЕНИЯ</b><br>Удерживайте <i>кнопку силы</i> для активации, а затем перемещайтесь в любом направлении, чтобы пропахать борозду в земле.<br><br>Если выживший заходит или забегает на борозду, на него накладывается эффект <i>«Мучение»</i>; также при этом активируется <i>«Инстинкт убийцы»</i>. Смертельно раненого выжившего с эффектом <i>«Мучение»</i> можно посадить в <b>клетку искупления</b>.<br><br><b>ОСОБАЯ АТАКА: «Кара обреченных»</b><br>Нажмите <i>кнопку атаки</i> при действующих <b>«Обрядах осуждения»</b>, чтобы использовать <b>«Кару обреченных»</b>. При этом вы выпустите перед собой волну силы, которая ранит любых выживших на своем пути.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: клетка искупления</b><br>Нажмите <i>кнопку активной способности</i>, стоя над лежащим выжившим с эффектом <i>«Мучение»</i>, чтобы посадить его в <b>клетку искупления</b>. Выжившие в <b>клетке искупления</b> могут быть принесены в жертву так же, как если бы они висели на крюке. На втором этапе жертвоприношения выжившие должны будут проходить проверки реакции, чтобы сдержать Сущность.<br><br>С выжившего снимается эффект <i>«Мучение»</i>, если его спасают из <b>клетки искупления</b>, либо если он спасает из клетки другого выжившего.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: «Страшный суд»</b><br>Нажмите <i>кнопку активной способности</i>, стоя у умирающего выжившего с эффектом <i>«Мучение»</i>, который дошел до фазы сопротивления на крюке или в клетке, чтобы его казнить.","name":"Обряды осуждения","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"Сыворотка гнойника растекается по венам, пропитывая тело и разум скверной, но давая ему сверхъестественные физические способности.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: «УСКОРЕНИЕ»</b><br>Нажмите <i>кнопку силы</i>, чтобы <b>ускоренно</b> побежать вперед. При этом расходуется жетон <b>ускорения</b>. При <b>ускорении</b> Мор не сможет атаковать.<br><br><b>Ускорьтесь</b> и бегите к стене или препятствию, чтобы <b>столкнуться</b> с ним. Если при <b>ускорении</b> не удастся задеть стену или препятствие, или если у Мора закончатся жетоны <b>ускорения</b>, он впадет в кратковременное состояние истощения и начнет восстанавливать жетоны.<br><br><b>ОСОБАЯ АТАКА: «СМЕРТЕЛЬНОЕ УСКОРЕНИЕ»</b><br>После <b>ускорения</b> нажмите <i>кнопку силы</i>, чтобы провести <b>«Смертельное ускорение»</b>. При этом расходуется жетон <b>ускорения</b>. <b>«Смертельное ускорение»</b> работает так же, как и обычное <b>ускорение</b>, но при нем Мор может атаковать с помощью <i>кнопки атаки.</i>","name":"Моровая скверна","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"Близнецы навеки связаны узами крови и трагедии, но наделены силой, позволяющей им разделять сросшиеся тела. Когда брат и сестра охотятся сообща, грозящая выжившим опасность удваивается.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: «Узы крови»</b><br>Нажмите и удерживайте <i>кнопку силы</i>, чтобы выпустить <b>Виктора</b>. Для переключения между <b>Шарлоттой</b> и <b>Виктором</b> нажимайте кнопку <i>способности</i>.<br><br>Когда <b>Виктор</b> остается в одиночестве, в нем просыпается <b>инстинкт убийцы</b>, который помогает <b>Шарлотте</b> видеть силуэты выживших, ходящих или бегающих рядом с ним. Этому подвержены выжившие, слышащие вопли <b>Виктора</b>. При этом выжившие могут раздавить <b>Виктора</b>, пока активна <b>Шарлотта</b>.<br><br>Раздавленный <b>Виктор</b> со временем вновь вырастает на теле <b>Шарлотты</b>.<br><br><b>ОСОБАЯ АТАКА: «Наскок»</b><br>Управляя <b>Виктором</b>, удерживайте <i>кнопку способности</i>, чтобы зарядить <b>«Наскок»</b>. Нажмите <i>кнопку атаки</i> для его активации.<br><br>Удачный <b>«Наскок»</b> наносит урон выжившему. Если запас здоровья выжившего полон, <b>Виктор</b> вцепляется в него, при этом срабатывает его <b>«Инстинкт убийцы»</b>, открывая местоположение всех выживших поблизости. Удерживаемый выживший получает эффекты <b>«Ослабление»</b>, <b>«Забывчивость»</b> и <b>«Обездвиживание»</b>. Он не может забираться в шкафчики и сбегать через ворота. Выживший может раздавить вцепившегося <b>Виктора</b>, <b>оторвав</b> его от себя.<br><br>Если <b>«Наскок»</b> <b>Виктора</b> не достигает цели, малорослый убийца ненадолго становится уязвимым и может быть раздавлен выжившим. Если Виктор приземлится на препятствие, которое выше него, он будет уничтожен.","name":"Узы крови","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>Вызывающий оторопь навык, отточенный десятками лет практики. Хак Чиун молниеносно метает град ножей.</i><br><br><b>«КОРОННЫЙ НОМЕР»</b><br><br>В начале матча вы получаете <b>60 ножей</b>. Нажмите и удерживайте <i>кнопку силы</i>, чтобы подготовиться к броску.<br><br>В состоянии броска нажмите <i>кнопку атаки</i>, чтобы бросить один нож, или удерживайте <i>кнопку атаки</i>, чтобы бросить сразу несколько. Метание нескольких ножей увеличивает контроль и скорость метания, но снижает скорость передвижения. Пополняйте запас ножей в шкафчиках.<br><br><b>Шкала порезов:</b> <b>шкала порезов</b> выжившего заполняется при каждом попадании ножа. Когда она будет заполнена, выживший потеряет уровень здоровья и получит обычное или смертельное ранение.<br><br>Шкала порезов выжившего будет постепенно пустеть, если он сможет хотя бы недолго избегать ножей. Попадание по выжившему обычной атакой сразу уменьшает его шкалу порезов.<br><br><b>ОСОБАЯ СПОСОБНОСТЬ: «Кульминация»</b><br>Каждое попадание ножом заполняет <b>шкалу события</b>. Когда она заполнится, вы сможете использовать <b>«Кульминацию»</b>, нажав <i>кнопку активной способности</i>. В этом состоянии Трюкач автоматически метает неограниченное количество ножей, пока идет <b>«Кульминация»</b>. Скорость его бросков значительно возрастет, а передвижение не будет замедляться после каждого броска. <b>«Кульминацию»</b> можно отменить нажатием <i>кнопки активной способности</i>. При этом обнуляется <b>шкала события</b> и начинается перезарядка <b>«Коронного номера»</b>.","name":"Коронный номер","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"Этот вирус вызывает сильнейшие мутации и может передаваться другим. Он повышает агрессию и физическую силу Немезиса.<br><br><b>ОСОБАЯ АТАКА: «Удар щупальцем»</b><br>Нажмите и удерживайте кнопку силы, чтобы зарядить атаку. Когда накопится заряд, нажмите кнопку атаки, чтобы <b>ударить щупальцем</b>. Если <b>«Удар щупальцем»</b> поражает выжившего, тот получает эффект <b>«Заражение»</b>, а ваша <b>скорость мутации</b> увеличивается. Если выживший уже <b>заражен</b>, <b>«Удар щупальцем»</b> отнимает его здоровье.<br><br>Выжившие могут избавляться от <b>заражения</b> с помощью <b>вакцины</b>, которую можно найти в <b>ящиках с припасами</b>, делая уколы себе и другим выжившим. Количество <b>вакцины</b> ограничено. После использования <b>вакцины</b> «Инстинкт убийцы» покажет местоположение выжившего.<br><br><b>Скорость мутации:</b> ваша сила растет с увеличением <b>скорости мутации</b>. При <b>скорости мутации 2</b> <b>«Удар щупальцем»</b> может уничтожать доски и разрушаемые стены. При <b>скорости мутации 3</b> увеличивается дальность действия <b>«Удара щупальцем»</b>. Текущий <b>уровень мутации</b> виден на значке Т-вируса.<br><br><b>ОСОБЫЙ ВРАГ: зомби</b><br>Когда <b>зомби</b> атакует выжившего, тот получает эффект <b>«Заражение»</b>. Если выживший уже <b>заражен</b>, зомби отнимет его здоровье.<br><br><b>Зомби</b> можно уничтожить <b>ударом щупальца</b>, чтобы повысить вашу <b>скорость мутации</b>, а выжившие могут уничтожать зомби досками. Уничтоженные <b>зомби</b> вскоре появляются снова.","name":"Т-ВИРУС","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/ru/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Дарует <b>100%</b> бонусных Очков Крови во всех категориях для всех участников текущего испытания. <br><li>Эффект суммируется.</li>","name":"Окровавленные Праздничные Гирлянды","flavor":"«Напоминание о чертовски веселом времени, когда люди собрались вместе, чтобы повеселиться, а затем, крича, разбежались».","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"<b>Слегка рассеивает</b> Темный Туман.<br><li>Эффект суммируется.</li>","name":"Чистый реагент","flavor":"«Туман захватывает всё в тиски своего густого безумия. От него не убежать, не скрыться и не найти спасения, разве что только в прозрачных водах прудов, затерянных в лесу» (Из тетради неизвестного автора).","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"<b>Слегка сгущает</b> Темный Туман.<br><li>Эффект суммируется.</li>","name":"Слабый Реагент","flavor":"«Парализованный, я стою на холоде в ожидании смерти».","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"<b>Умеренно сгущает</b> Темный Туман.<br><li>Эффект суммируется.</li>","name":"Туманный Реагент","flavor":"«Туман очаровывает и гипнотизирует. Я люблю и боюсь его одновременно» (Из блокнота Донны).","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"<b>Сильно сгущает</b> Темный Туман.<br><li>Эффект суммируется.</li>","name":"Мутный Реагент","flavor":"«Туман вроде бы защищает от зверя, но он словно яд, как раковая опухоль, - наполняет нас тьмой и безумием» (Из дневника неизвестного автора).","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"Призывает Сущность сделать <b>лунный свет очень тусклым</b>.","name":"Букет «Новолуние» ","flavor":"«Лучше пойти спать: луны этой ночью ждать не стоит».","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"Призывает Сущность сделать <b>лунный свет тусклым</b>.","name":"Букет «Полумесяц»","flavor":"«Луна медленно исчезает с улыбкой: \\"Не волнуйся, твой секрет со мной в безопасности\\". Или это оскал?»","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"Призывает Сущность сделать <b>лунный свет ярче</b>.","name":"Букет «Четверть Луны»","flavor":"«Старая луна показала свой истинный облик, опустив глаза на добычу».","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"Призывает Сущность сделать <b>лунный свет очень ярким</b>.","name":"Букет «Полнолуние»","flavor":"«С восходом луны слышен вой волков, означающий начало охоты».","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"<b>Слегка увеличивает</b> шансы отправиться в Поместье МакМиллан после сожжения.<br><li>Эффект суммируется.</li>","name":"Страница из Гроссбуха МакМиллана","flavor":"«Потрепанная и выцветшая страница из гроссбуха МакМиллана, на которой ничего не разобрать, кроме его печати».","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"<b>Значительно увеличивает</b> шансы отправиться в Поместье МакМиллан после сожжения.<br><li>Эффект суммируется.</li>","name":"Подписанная Страница Гроссбуха","flavor":"«Сгоревшая страница из гроссбуха с информацией о горнодобывающем оборудовании и различных операциях. Подписана Арчи МакМилланом».","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"<b>Чрезвычайно увеличивает</b> шансы отправиться в поместье МакМиллан после сожжения.<br><li>Эффект суммируется.</li>","name":"Кость Фаланги МакМиллана","flavor":"«Останки МакМиллана были найдены в одном из шахтерских складов. Кости его ног были раздроблены на куски, а шахтерский молот лежал на коленях».","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"<b>Слегка увеличивает</b> шансы отправиться на Свалку Автохевен после сожжения.<br><li>Эффект суммируется.</li>","name":"Сломанный Номерной Знак","flavor":"«Сильно ржавый и поломанный кусок металла».","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"<b>Значительно увеличивает</b> шансы отправиться на Свалку Автохевен после сожжения.<br><li>Эффект суммируется.</li>","name":"Номерной Знак Штата Вирджиния","flavor":"«Ржавый изогнутый автомобильный номерной знак штата Вирджиния».","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"<b>Чрезвычайно увеличивает</b> шансы отправиться на Свалку Автохевен после сожжения.<br><li>Эффект суммируется.</li>","name":"Ключ Азарова","flavor":"«Сломанный ключ от автомобиля неизвестной марки. Судя по надписи на брелке, ключ принадлежал некоему А. Азарову».","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"<b>Слегка увеличивает</b> шансы отправиться на Ферму Колдвинд после сожжения.<br><li>Эффект суммируется.</li>","name":"Бирка № 28 из скотобойни","flavor":"«Окровавленная бирка скотобойни с номером 28».","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"<b>Значительно увеличивает</b> шансы отправиться на Ферму Колдвинд после сожжения.<br><li>Эффект суммируется.</li>","name":"Бирка № 81 из скотобойни Колдвинд","flavor":"«Окровавленная бирка скотобойни с номером 81 и гравировкой \\"Ферма Колдвинд\\"».","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"<b>Чрезвычайно увеличивает</b> шансы отправиться на Ферму Колдвинд после сожжения.<br><li>Эффект суммируется.</li>","name":"Медальон в Форме Сердца","flavor":"«Серебряное ожерелье в форме сердца. Довольно простая работа с гравировкой \\"E+M\\"».","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"<b>Слегка увеличивает</b> шансы отправиться в психлечебницу Кротус Пренн после сожжения.<br><li>Эффект суммируется.</li>","name":"Справка о Сумасшествии","flavor":"«Потертый и выгоревший кусок бумаги с нечитаемой информацией».","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"<b>Значительно увеличивает</b> шансы отправиться в психлечебницу Кротус Пренн после сожжения.<br><li>Эффект суммируется.</li>","name":"Справка о Сумасшествии Ф. Эллиота","flavor":"«Розовый бумажный листок, сообщающий о трансфере Филипа Эллиота в Психлечебницу Кротус Пренн».","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"<b>Колоссально увеличивает</b> шансы отправиться в психлечебницу Кротус Пренн после сожжения.<br>","name":"Обугленная Свадебная Фотография","flavor":"«Сожженный портрет пары в день свадьбы - обугленные лица молодоженов невозможно разглядеть».","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"<b>Слегка увеличивает</b> шанс отправиться в Хэддонфилд после сожжения.<br><li>Эффект суммируется.</li>","name":"Листовка Фестиваля урожая","flavor":"«Выцветшая информационная брошюра для Фестиваля урожая 1978 года в Хэддонфилде. С изображением большой мультяшной тыквы на обложке».","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"<b>Значительно увеличивает</b> шанс отправиться в Хэддонфилд, после сожжения.<br><li>Эффект суммируется.</li>","name":"Дряхлая Доска","flavor":"«Заплесневелая и гнилая дубовая доска - такими обшиты большинство домов Хэддонфилда».","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"<b>Чрезвычайно увеличивает</b> шансы отправиться в Хэддонфилд после сожжения.<br>","name":"Ключ Риелторского Агентства Строуд","flavor":"«Обычный ключ от дома. На прикрепленной к нему бирке можно прочитать \\"Риелторское агентство Строуд\\" и надпись от руки \\"переулок Лэмпкин, 45\\"».","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"<b>Слегка увеличивает</b> шанс отправиться на Гнилое Болото после сожжения.<br><li>Эффект суммируется.</li>","name":"Дымящиеся Снасти","flavor":"«Моток тлеющей веревки, от которой до сих пор поднимается дым».","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"<b>Значительно увеличивает</b> шанс отправиться на Гнилое Болото после сожжения.<br><li>Эффект суммируется.</li>","name":"Дымящийся знак «Добро пожаловать»","flavor":"«Знак \\"Добро Пожаловать\\", сделанный из грубого куска кипарисовой доски. Дерево обуглено и продолжает дымиться».","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"<b>Чрезвычайно увеличивает</b> шанс отправиться на Гнилое Болото после сожжения.<br><li>Эффект суммируется.</li>","name":"Кулинарная книга бабушки","flavor":"«Внутри этой книги в кожаной обложке содержатся ужасные рецепты из человеческого мяса, в том числе и знаменитый бабушкин чили».","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"<b>Слегка увеличивает</b> шанс отправиться в Мемориальный Институт Лэри при сжигании.<br><li>Эффект суммируется.</li>","name":"Свидетельство О Срочной Госпитализации","flavor":"«Желтая копия свидетельства о срочной госпитализации. Скопированную информацию разобрать уже невозможно».","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"<b>Значительно увеличивает</b> шанс отправиться в Мемориальный Институт Лэри при сжигании.<br><li>Эффект суммируется.</li>","name":"Отчет о Психическом Состоянии","flavor":"«Психиатрический отчет, подписанный Германом Картером. В нем рассказано об ухудшении памяти у пациентов, а также расписаны следующие возможные способы лечения».","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"<b>Чрезвычайно увеличивает</b> шанс отправиться в Мемориальный Институт Лэри после сожжения.<br><li>Эффект суммируется.</li>","name":"Сломанные Очки","flavor":"«Погнутые очки для чтения. На разбитых стеклах видны подтеки высохшей крови».","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"<b>Слегка увеличивает</b> шанс отправиться в Красный Лес после сожжения.<br><li>Эффект суммируется.</li>","name":"Разукрашенный Камень","flavor":"«Скользкий и ровный на ощупь камень, отполированный ручьем. Украшен красной, черной и белой краской, рисунок являет собой крайне серьезно настроенного медведя».","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"<b>Значительно увеличивает</b> шанс отправиться в Красный Лес после сожжения.<br><li>Эффект суммируется.</li>","name":"Детская Книга","flavor":"«Старинная и ветхая книга, все страницы которой практически рассыпались».","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"<b>Чрезвычайно увеличивает</b> шанс отправиться в Красный Лес после сожжения.<br>","name":"Последняя Маска","flavor":"«Красивая и искусно созданная маска, которая, судя по размерам, отлично подойдет ребенку. На оборотной стороне можно разглядеть выцветшую надпись на русском языке».","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"Чрезвычайно увеличивает шанс отправиться в Спрингвуд после сожжения.<br>","name":"Гамельнский Крысолов","flavor":"«Его предал город, и он отомстил ему, забрав всех детей».","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"Сжигание данного подношения дает вам защиту от потери улучшений по окончании матча.<br>","name":"Черный Защитник","flavor":"«Услышь мой голос, охраняй мой путь, защити меня от пустоты».","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"Сжигание этого подношения дает вам защиту от потери улучшений.","name":"Белый Защитник","flavor":"«Убереги меня от зла, защити меня, а затем сгинь».","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"<b>Чрезвычайно повышает</b> шанс отправиться в Поместье Ямаоки после сожжения.<br>","name":"Фамильный Гребень Ямаока","flavor":"«Невозможно покинуть разрушенный дом. Можно лишь бежать и бежать, пока воспоминания не прекратят тебя мучить».","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"Призывает Сущность, чтобы отвергнуть все подношения, которые изменяют шанс отправиться в конкретное измерение.<br>Можно отменить, только если использовать четыре одинаковых подношения измерений.","name":"Жертвенный оберег","flavor":"«Слепы наши глаза, и кладем мы к ногам Твоим волю нашу и молим Тебя указать нам путь».","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"<b>Чрезвычайно увеличивает</b> шанс отправиться в начальную школу Мидвича после сожжения.","name":"Письмо Мэри","flavor":"«В моих беспокойных снах я вижу этот город».","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"<b>Чрезвычайно увеличивает</b> шанс отправиться в Мясокомбинат «Гидеон» после сожжения.<br>","name":"Кусок Пазла","flavor":"«Поздравляю. Вы еще живы. Большинство людей в нашем мире абсолютно не ценят жизнь. Но только не вы. И не теперь».","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"<b>Чрезвычайно увеличивает</b> шанс отправиться в национальную лабораторию Хоукинса после сожжения.","name":"Бейдж Национальной лаборатории Хоукинса ","flavor":"«Промокший и окровавленный бейдж с личным номером».","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"<b>Чрезвычайно увеличивает</b> шансы отправиться в область «Могила в Гленвейле» после сожжения.","name":"Пыльная удавка","flavor":"«Спросите любого, кто пытается выжить на этой пыльной земле. Вам скажут, что удавка — само милосердие».","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"Ужасающий торт в честь трех лет, проведенных вместе. Определенно вызовет несварение. На <b>103%</b> увеличивает число получаемых в этом испытании очков крови во всех категориях и для всех игроков.<br><li>Эффект суммируется.</li>","name":"Ужасный торт","flavor":"«С годовщиной! Отпразднуем три года, проведенных вместе!»<br>— Команда Dead by Daylight","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"Потрясающе кошмарный торт в честь четырех лет, проведенных вместе. Вкуснее ужасного печенья на 1%! На <b>104%</b> увеличивает число получаемых в этом испытании очков крови во всех категориях и для всех игроков.<br><li>Эффект суммируется.</li>","name":"Зловещий пирог","flavor":"«С годовщиной! За то, чтобы провести вместе еще многие годы!»<br>— Команда Dead by Daylight","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/ru/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Тонкая широкоугольная линза в идеальном состоянии. Предназначена для расширения луча фонарика за счет снижения дальности свечения.<br><li><b>Значительно расширяет</b> луч фонарика.</li><li><b>Слегка уменьшает</b> дальность свечения луча фонарика.</li>","name":"Широкоугольные Линзы","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"Маленькая многоваттная лампочка для более яркого и мощного свечения.<br><li><b>Слегка сужает</b> радиус луча фонарика.</li><li><b>Слегка увеличивает</b> мощность луча фонарика.</li><li><b>Слегка увеличивает</b> продолжительность ослепления.</li>","name":"Электролампа","flavor":"«Даже самый мощный свет не проникнет сквозь тьму черного тумана».","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"Кожаная лента, намотанная на фонарик для лучшего хвата.<br><li><b>Немного повышает</b> точность фонарика.</li>","name":"Кожаная Рукоять","flavor":"«Слишком много людей погибло из-за потных ладоней».","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"Стандартная батарейка неизвестной марки.<br><li>Добавляет <b>2 сек.</b> использования обычному фонарику.</li>","name":"Батарейка","flavor":"«Еще одна почти разряженная батарейка».","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"Комплект из линзы и отражателя для увеличения мощности луча фонарика.<br><li><b>Умеренно увеличивает</b> яркость луча фонарика.</li><li><b>Умеренно увеличивает</b> продолжительность ослепления.</li>","name":"TIR Оптика","flavor":"«Пусть же свет выжжет их темную пелену».","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"Резиновая рукоятка фонарика, специально подогнана для более крепкого хвата.<br><li><b>Умеренно увеличивает</b> точность фонарика.</li>","name":"Резиновая Рукоятка","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"Нить лампы накаливания, предназначенная для продления срока службы батарейки фонарика.<br><li><b>Умеренно уменьшает</b> расход батарейки фонарика.</li>","name":"Тонкая Нить Накаливания","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"Батарейка с пометкой «Промышленная мощность».<br><li>Добавляет <b>4 сек.</b> использования обычному фонарику.</li>","name":"Сверхмощная Батарейка","flavor":"«На батарейке указано время работы \\"до 8 часов\\", но на самом деле в черном тумане она продержится всего несколько секунд».","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"Толстая стеклянная линза, которая фокусирует луч фонарика, чтобы увеличить его яркость.<br><li><b>Слегка увеличивает</b> дальность свечения луча фонарика.</li><li><b>Слегка сужает</b> радиус луча фонарика.</li><li><b>Слегка увеличивает</b> мощность луча фонарика.</li><li><b>Слегка увеличивает</b> продолжительность ослепления.</li>","name":"Фокусирующая Линза","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"Новая модель аккумулятора, заряд которого длится дольше.<br><li>Добавляет <b>6 сек.</b> использования обычному фонарику.</li>","name":"Аккумулятор с Мощным Зарядом","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"Химическая лампочка, которая генерирует интенсивный яркий свет.<br><li><b>Значительно увеличивает</b> яркость светового луча.</li><li><b>Значительно увеличивает</b> продолжительность ослепления.</li>","name":"Интенсивный Галоген","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"Широкая линза из устойчивого к царапинам сапфира, оптимизирует мощность и дистанцию светового луча.<br><li><b>Умеренно увеличивает</b> радиус луча фонарика.</li><li><b>Слегка увеличивает</b> световой луч.</li><li><b>Умеренно увеличивает</b> яркость луча.</li><li><b>Умеренно увеличивает</b> продолжительность ослепления.</li>","name":"Высококлассные Сапфировые Линзы","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"Тяжелая и полностью мутная лампочка неизвестного происхождения, которая излучает слабый свет, даже когда выключена.<br><li><b>Чрезвычайно увеличивает</b> яркость луча фонарика.</li><li><b>Чрезвычайно увеличивает</b> продолжительность ослепления.</li><li><b>Слегка увеличивает</b> расход заряда батареи.</li>","name":"Странная Лампочка","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"Туго сплетенная веревка, используемая в поминальных ритуалах. На нее можно повесить ключ.<br><li>Добавляет <b>10 сек.</b> к использованию ключа.</li>","name":"Молитвенная Веревка","flavor":"«Молись сколько влезет, все равно твои слова теряются где-то там, в Тумане».","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"Потертая и поцарапанная жемчужина. Крохотное колечко позволяет прицепить ее к ключу.<br><li><b>Умеренно увеличивает</b> радиус чтения ауры при использовании ключа.</li>","name":"Поцарапанный Жемчуг","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"Цепь из матовых бусин разного размера, используемая в молитвенных ритуалах. Можно прикрепить к ключу.<br><li>Добавляет <b>15 сек.</b> к использованию ключа.</li>","name":"Молитвенные Четки","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"Сильно изношенный медный жетон. Если надпись или рисунок когда-то и были выгравированы на нем, сейчас они полностью исчезли. Если прикрепить его к Ключу, откроется умение чтения ауры.<br><li>Раскрывает <b>ауры Выживших</b> в радиусе <b>24-х метров</b> от вас.</li>","name":"Треснувший Жетон","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"Потертый золотой жетон. Обе стороны гладкие и лишены каких-либо надписей. При крепеже к Ключу открывается возможность чтения ауры.<br><li>Раскрывает <b>ауры Выживших</b>, находящихся в радиусе <b>48-и метров</b> от вас.</li><li>Эффект суммируется.</li>","name":"Золотой Жетон","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"Обычное кольцо для ключей, правда со странным синим сиянием. Оно прицепляет Ключ к вам, предотвращая его потерю даже в самых опасных ситуациях.<br><li>При смерти вы потеряете это улучшение, но не сам Ключ.</li>","name":"Сплетенное Кольцо","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"Этот кусок матового стекла издает глухой вибрирующий звук. При использовании ключа для открытия черного замка стеклянный медальон защищает ключ от повреждений, направляя энергию тумана в стекло.<br><li>Открыв черный замок, вы потеряете это улучшение, но сохраните ключ.</li>","name":"Матовое Стекло","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"Кроваво-красный янтарь c черными прожилками. Теплый на ощупь. Его можно прикрепить к Ключу, чтобы активировать способность чтения ауры.<br><li>За счет энергии Ключа раскрывает <b>ауру Убийцы</b>, когда тот находится в радиусе <b>32-х метров.</b></li>","name":"Кровавый Янтарь","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"Фрагмент плотного волокнистого материала. Неполная, едва заметная карта, нарисованная на нем, сама по себе бесполезна.<br><li>Добавляет <b>5 сек. использования</b> любой карте.</li>","name":"Кусок Карты","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"Небольшой электрический провод. Оба конца сильно повреждены, как будто его вырвали откуда-то силой. Им можно обмотать карту, чтобы усилить способность чтения ауры.<br><li>Открывает способность отслеживать, где находятся <b>ворота</b>.</li>","name":"Желтый Провод","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"Деревянная печать для документов. Непонятно, как и кем она раньше использовалась. Ее можно использовать с картой.<br><li><b>Умеренно увеличивает</b> радиус действия способности отслеживания с помощью карты.</li>","name":"Необычная Печать","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"Склизкое, полупрозрачное вещество с мертвенно-бледным лавандовым оттенком. Это желе неизвестного происхождения обладает высокой устойчивостью к нагреванию.<br><li><b>Умеренно уменьшает</b> скорость сгорания карты.</li>","name":"Огнезащитное Желе","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"Жесткая и шершавая бечевка темно-красного цвета. Ею можно обмотать карту, чтобы улучшить способность чтения ауры.<br><li>Открывает способность отслеживать нахождение <b>личных вещей Убийцы</b>.</li>","name":"Красная Бечевка","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"Странный прицел, обрамленный золотом, которым можно увеличить карту и пометить конкретную позицию. Прицел излучает энергию, которую Выжившие могут видеть и чувствовать.<br><li>Открывает способность ставить Метки при активации вспомогательного действия.</li><li>Устанавливает метку, которую могут видеть все Выжившие.</li>","name":"Стеклянный Прицел","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"Печать, вырезанная из крепкого светлого дерева. Текст, найденный на ее основе, неясен: «kw\'zvre\'od». Может быть использована с картой.<br><li><b>Значительно увеличивает</b> радиус действия способности отслеживания с помощью карты.</li>","name":"Странная Печать","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"Гладкий черный шнур. Им можно обмотать карту, чтобы увеличить радиус чтения ауры.<br><li>Открывает способность отслеживать <b>люк</b>.</li>","name":"Черный Шелковый Шнур","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"Сложный аппарат, состоящий из набора линз с изощренной конструкцией. Шестерни, управляющие фокусом линз, двигаются сами по себе, будто фокусируясь на чем-то невидимом для человека.<br><li>При активации каждый Выживший видит ауру, сгенерированную картой.</li>","name":"Кристальный Прицел","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"Одноразовые медицинские перчатки для защиты от перекрестного загрязнения.<br><li><b>Умеренно повышают</b> бонус прогресса за отличные проверки реакции.</li>","name":"Резиновые Перчатки","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"Качественный медицинский пластырь, используется для защиты небольших ран.<br><li><b>Слегка увеличивает</b> скорость лечения.</li>","name":"Пластырь-бабочка","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"Пачка бинтов, которую можно найти практически в любой аптечке.<br><li>Добавляет <b>8 зарядов</b> к аптечке.</li>","name":"Повязки","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"Обычная губка, которой вытирали кровь, чтобы очищать раны.<br><li><b>Значительно повышает</b> бонус прогресса за отличные проверки реакции.</li>","name":"Губка","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"Бинты с клейкой основой для быстрой перевязки без использования зажимов.<br><li>Добавляет <b>8 зарядов</b> к аптечке.</li><li><b>Слегка увеличивает</b> скорость лечения.</li>","name":"Самоклеющиеся Бинты","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"Сложно назвать это медицинским прибором, однако с его помощью можно быстро (правда, болезненно) заштопать рану.<br><li><b>Умеренно увеличивает</b> шанс появления проверки реакции.</li><li>Вы получаете <b>на 100% больше очков крови</b> при успешной отличной проверке реакции.</li><li><b>Слегка увеличивает</b> скорость лечения.</li>","name":"Иголка и Нитка","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"Ножницы, предназначенные для легкого разреза ткани.<br><li><b>Умеренно увеличивают</b> скорость лечения.</li>","name":"Медицинские Ножницы","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"Стерильные бинты. Один из важнейших предметов для обработки ран.<br><li>Добавляет <b>12 зарядов</b> к аптечке.</li>","name":"Бинты","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"Медицинский прибор для сшивания ран. Аккуратное наложение шва является хоть и крайне эффективным способом лечения, но при этом требует сноровки.<br><li><b>Значительно увеличивает</b> шанс появления проверки реакции.</li><li><b>Вы получаете на 150% больше очков крови</b> при успешных отличных проверках реакции.</li><li><b>Слегка увеличивает</b> скорость лечения.</li>","name":"Хирургическая Игла","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"Пачка гелевых повязок для ран с обильной экссудацией.<br><li>Добавляет <b>16 зарядов</b> к аптечке.</li>","name":"Гелевые Повязки","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"Хорошо впитывающие повязки, предотвращающие потерю крови при серьезных ранениях живота.<br><li><b>Значительно ускоряют</b> лечение.</li><li><b>Уменьшают количество зарядов</b> на <b>8</b>.</li>","name":"Брюшные Повязки","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"Белый порошок, улучшающий свертываемость крови. Нанесите вещество на рану, чтобы остановить кровотечение.<br><li>Нажмите кнопку <i>вспомогательного действия</i> во время лечения, чтобы использовать кровоостанавливающий препарат.</li><li>Раненый выживший, на котором был использован <i>кровоостанавливающий препарат</i>, получает эффект <b>«Стойкость»</b> на <b>8 сек</b>.<li>При использовании исчерпывает запасы аптечки.</li>","name":"Кровоостанавливающий Препарат","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"Средство для быстрой остановки кровотечения.<br><li>Нажмите <i>кнопку вспомогательного действия</i> во время лечения, чтобы использовать кровоостанавливающий шприц.</li><li>Выживший, на котором был использован предмет, восстановит уровень здоровья в течение <b>16 сек.</b></li><li>Время лечения зависит от навыков, улучшений и предметов, влияющих на <i>скорость лечения</i>.</li><li>Эффект перестает действовать, когда уровень здоровья выжившего изменяется или когда выжившего подбирают.</li><li>Вы теряете аптечку при использовании.</li>","name":"Кровоостанавливающий Шприц","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"Полезный инструмент для зажима шлангов или крепления проводов во избежание травм.<br><li>Радиус, в котором можно услышать звук починки генератора, который вы заводите, уменьшен на 8 м.</li>","name":"Пружинный Зажим","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"Пружины, винты и шестеренки. В основном непригодный металлолом.<br><li>Добавляет <b>8 зарядов</b> инструментам.</li>","name":"Старые Запчасти","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"Обыкновенная тряпка. Подозрительно чистая.<br><li><b>Слегка увеличивает</b> скорость починки инструментами.</li>","name":"Чистая Тряпка","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"Переносной, но тяжелый моток медного провода.<br><li>Добавляет <b>12 зарядов</b> инструментам.</li>","name":"Катушка Проволоки","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"Шарнирный ключ позволяет работать с болтами в самой глубине устройств.<br><li><b>Умеренно увеличивает</b> скорость ремонта при помощи ящика с инструментами.</li>","name":"Шарнирный Ключ","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"Толстые перчатки ухудшают мелкую моторику, но защищают кисти рук от травм.<br><li>При поломке крюка инструментами убийца не получает оповещение.</li>","name":"Защитные Перчатки","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"На этом куске коры нацарапано что-то вроде инструкций по ремонту.<br><li>При починке с помощью инструментов проверки реакции не появляются.</li>","name":"Руководство","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"Разводной ключ с прочной рукояткой. Так и просится в ящик с инструментами.<br><li>Крюки, сломанные при помощи инструментов, восстанавливаются на 15 секунд дольше.</li>","name":"Разводной Ключ","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"Примитивный инструмент для резки из зубчатого металлического провода и двух деревянных ручек.<br><li><b>Слегка увеличивает</b> скорость поломки при помощи ящика с инструментами.</li>","name":"Режущая Проволока","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"Небольшая ручная пила, оборудованная лезвием для работы по металлу.<br><li><b>Умеренно увеличивает</b> скорость поломки с помощью инструментов.</li>","name":"Ножовка","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"Странно наблюдать столь затейливую деталь в таком месте. Блестящая и чистая, она словно только сошла с конвейера.<br><li><b>Починка инструментами</b> заменяется <b>установкой новой детали</b>.</li><li>Установка <i>новой детали</i> повысит прогресс починки на <b>15%</b> за <b>5</b> секунд.</li><li>Во время установки детали вы должны пройти <b>2 сложные проверки реакции</b>.</li><li>Успешные проверки реакции дополнительно повышают прогресс починки на <b>5%</b>, то есть можно починить генератор максимум на <b>25%</b>.</li><li><i>Вы лишаетесь предмета после использования.</i></li>","name":"Новая Деталь","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"Обручальное кольцо с гравировкой, найденное в тумане. Источает неописуемую и необъяснимую энергию.<li>Подсвечивает ауру объекта одержимости.</li><li>Снижает вероятность стать объектом одержимости убийцы.</li><li>Эффект суммируется.</li>","name":"Уникальное обручальное кольцо","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/ru/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Дает <b>50%</b> бонусных очков крови в категории «Цели».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Мешочек с Вереском","flavor":"«Небольшой, сшитый вручную пакетик, наполненный сухими листьями. Испускает слабый чайный аромат».","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"Дает <b>75%</b> бонусных очков крови в категории «Цели».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Свежий Вереск","flavor":"«Красивый фиолетовый цветок, который растет посреди гнилого болота. Испускает мягкий чайный аромат».","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"Дает <b>100%</b> бонусных очков крови в категории «Цели».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Душистый Вереск","flavor":"«Красивый фиолетовый цветок, который растет посреди гнилого болота. Испускает сильный чайный аромат».","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"Дает <b>50%</b> бонусных очков крови в категории «Выживание».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Мешочек с сухими листьями Ширицы","flavor":"«Небольшой, сшитый вручную пакетик, наполненный зернами, похожими на бусинки. Амарант считается неувядаемым».","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"Дает <b>75%</b> бонусных очков крови в категории «Выживание».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Свежая Ширица","flavor":"«Бледно-зеленые листья с выделяющимися алыми жилками. Амарант считается неувядаемым».","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"Дает <b>100%</b> бонусных очков крови в категории «Выживание».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Душистый Лист Ширицы","flavor":"«Бледно-зеленые листья с выделяющимися алыми жилками. Испускает сильный аромат редьки».","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"Дает <b>50%</b> бонусных очков крови в категории «Альтруизм».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Мешочек с цветками Примулы","flavor":"«Небольшой, сшитый вручную пакетик с 4-мя золотыми лепестками внутри. Примула открывается ровно в тот момент, когда солнце уступает место ночи».","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"Дает <b>75%</b> бонусных очков крови в категории «Альтруизм».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Свежий Цветок Примулы","flavor":"«Золотые цветы, которые собирают в пик их жизни. Примула открывается ровно в тот момент, когда солнце уступает место ночи».","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"Дает <b>100%</b> бонусных очков крови в категории «Альтруизм».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Душистый Цветок Примулы","flavor":"«Золотые цветы, которые собирают в пик их жизни. Испускают сильный земляной и успокаивающий аромат».","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"Дает <b>50%</b> бонусных очков крови в категории «Храбрость».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Мешочек с Гвоздикой","flavor":"«Небольшой, сшитый вручную пакетик, содержащий смесь светлых лепестков с сизовато-голубоватыми листьями. Испускает сильный пряный запах, похожий на гвоздику».","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"Дает <b>75%</b> бонусных очков крови в категории «Храбрость».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Свежая Гвоздика","flavor":"«Букет цветов с розовыми лепестками и красными кровяными сердцевинами. Испускает пряный запах, похожий на гвоздику».","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"Дает <b>100%</b> бонусных очков крови в категории «Храбрость».<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Свежая Гвоздика","flavor":"«Букет цветов с розовыми лепестками и красными кровяными сердцевинами. Испускает сильный пряный запах, похожий на гвоздику».","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"Дарует <b>25%</b> дополнительных Очков Крови во <b>всех</b> категориях, всем Выжившим.<br><li>Эффект суммируется.</li>","name":"Перевязанный Конверт","flavor":"«Открытый конверт вновь запечатан и связан 4 цветными лентами».","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"Дает <b>25%</b> бонусных очков крови во всех категориях.<br><li>Личное подношение.</li><li>Эффект суммируется.</li>","name":"Запечатанный Конверт","flavor":"«Безадресный и запечатанный конверт, пожелтевший от времени. Его содержание так и останется загадкой».","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"Дарует <b>100%</b> бонусных Очков Крови во всех категориях.<br><li>Личный.</li><li>Эффект суммируется.</li>","name":"Торт «Побег!»","flavor":"«Эта картинка торта настоящая».","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"<b>Слегка увеличивает</b> удачу.<br><li>Личный.</li><li>Эффект суммируется.</li>","name":"Мешок с Мелом","flavor":"«Небольшой холщовый мешок, наполненный белым меловым порошком неизвестного происхождения. Некоторые считают, что он приносит удачу».","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>Умеренно увеличивает</b> удачу <b>всех</b> Выживших.<br><li>Эффект суммируется.</li>","name":"Мешок с Мелом Кремового цвета","flavor":"«Рассыпающаяся миниатюрная статуэтка из черной соли изображает женщину на коленях, предлагающую подарок. Некоторые считают, что он приносит удачу».","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"<b>Значительно увеличивает</b> удачу.<br><li>Личный.</li><li>Эффект суммируется.</li>","name":"Мешок с Мелом из Слоновой Кости","flavor":"«Небольшой кожаный мешок с прямой белой линией, вышитой вручную. Мешок наполнен меловым порошком из слоновой кости, который блестит при лунном свете. Некоторые считают, что он приносит удачу».","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>Слегка увеличивает</b> удачу <b>всех</b> Выживших.<br><li>Эффект суммируется.</li>","name":"Мешок с Солью","flavor":"«Небольшой холщовый мешок, наполненный кристаллами черной соли. Некоторые считают, что он приносит удачу. Не рассыпь содержимое».","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>Значительно увеличивает</b> удачу <b>всех</b> Выживших.<br><li>Эффект суммируется.</li>","name":"Банка Виго с Засоленными Губами","flavor":"«Плотно закрытая стеклянная банка, в которой в мутном растворе плавают оторванные человеческие губы. Некоторые считают, что она приносит удачу».","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"Призывает Сущность создать на <b>1</b> сундук больше.<br><li>Эффект суммируется.</li>","name":"Потускневшая Монета","flavor":"«Круглый кусок металла, переставший сиять».","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"Призывает Сущность создать еще <b>2</b> сундука.<br><li>Эффект суммируется.</li>","name":"Блестящая Монета","flavor":"«Чистый и отполированный кусок золота».","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"Успокаивает Сущность и <b>слегка увеличивает</b> <b>расстояние</b> между крюками для жертвоприношений.<br><li>Эффект суммируется.</li>","name":"Окаменевший дуб","flavor":"«Окаменевшее полено, которое разваливается на части».","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"Матч начинается рядом с союзником.<br><li>Секретное подношение.</li>","name":"Пелена Союза","flavor":"«Сотканный кусок ткани».","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"Все Выжившие начинают матч вместе.<br><li>Секретное подношение.</li>","name":"Пелена Единства","flavor":"«Квадратный кусок ткани с маленькими узелками на углах».","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"Вы начинаете матч как можно дальше от Убийцы.<br><li>Секретное подношение.</li>","name":"Платок Виго","flavor":"«За долгие годы я находил много разных чудес в тумане, но только теперь я понимаю, как обойти его нерушимые правила» (Из дневника Виго).","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/ru/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"У вас появляется способность чтения ауры. Каждый раз после полной починки генератора вы будете видеть ауру убийцы в течение <span class=\\"Highlight1\\">{0} сек</span>.<br>Когда будет полностью заведен последний генератор, аура убийцы откроется вам на <span class=\\"Highlight2\\">{1} сек</span>.","name":"Темное Чувство","flavor":"«Послушай совет старика: притормози, не спеши и постарайся сильно не волноваться! Лучший способ победить — понять его мышление» (Потерянные записи: Мёрф).","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"У вас появляется способность чтения ауры. Паранойя, сплетенная со страхом неудачи, позволяют вам лучше подготовиться и не повторять былых ошибок.<br>Ауры <span class=\\"Highlight1\\">{0}</span> генераторов, находящихся близко друг к другу, раскрываются вам на <span class=\\"Highlight2\\">{1} сек</span>.<br>Если у вас есть карта, отслеживающая генераторы, тогда генераторы, открытые с помощью навыка <i>Дежавю</i>, добавляются на карту.","name":"Дежавю","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"Растущие шансы на побег вселяют в вас надежду и окрыляют. На <span class=\\"Highlight3\\">{1} сек.</span> после того, как на ворота подано питание, вы получаете эффект <b><i>«Ускорение»</i></b> на <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Надежда","flavor":"«Пристегните ремни, петушки! Погнали!» (Потерянные записи: Никки).","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"У вас появляется способность чтения ауры. Когда вы висите на крюке, все выжившие видят ауры друг друга. Если убийца находится в пределах <span class=\\"Highlight1\\">{0} м</span> от вас, его аура также подсвечивается всем другим выжившим.<br><br>Когда на крюке висит кто-то другой, вы видите ауры всех остальных выживших. Если убийца находится в пределах <span class=\\"Highlight1\\">{0} м</span> от повешенного на крюк выжившего, вы также видите ауру убийцы.","name":"Кровные Узы","flavor":"«Будьте добры друг к другу. Мы застряли здесь все вместе». — Потерянные кассеты: Сужан","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"Ваш бег легок и аккуратен, и вас сложнее отследить. Следы-трещины остаются видимыми на <span class=\\"Highlight1\\">{0} сек.</span> меньше, чем обычно.<br>","name":"Легковес","flavor":"«Не торопись, он знает, где ты был… Я вот всегда говорю: живи медленно, умри стариком» (Потерянные записи: Дилан).","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"Нельзя оставлять кого-то на произвол судьбы. Если открыты хотя бы одни ворота, на вас действуют следующие эффекты:<br><li>вы получаете на <span class=\\"Highlight1\\">{0}%</span> больше очков крови, когда лечите и снимаете с крюков других выживших;</li><li>вы на <span class=\\"Highlight2\\">{1}%</span> быстрее лечите и снимаете с крюков других выживших;</li><li>вы видите ауры всех других выживших.</li>","name":"Никто Не Остался Позади","flavor":"«Да, точняк... но я верю, что мы сможем перехитрить и одолеть убийцу, если будем работать вместе. Не будьте предсказуемыми и эгоистичными!» (Потерянные записи: Клайд).","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"У вас появляется способность чтения ауры. Вы видите ауры неоткрытых сундуков и предметов вокруг в радиусе <span class=\\"Highlight1\\">{0} м</span>. <b>Значительно</b> повышает шанс обнаружить в сундуке более редкий предмет.","name":"Мародерское Чутье","flavor":"«Помню, первопроходцы обчищали этих малышей часами» (Потерянные записи: Aizeyu)","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"Вы, без сомнения, умеете чувствовать приближающуюся опасность. Вы получаете звуковое предупреждение, когда смотрите в сторону Убийцы в секторе с обзором <span class=\\"Highlight1\\">45 градусов</span>, находясь не более чем в <span class=\\"Highlight2\\">{0} м</span> от него. Предчувствию требуется <span class=\\"Highlight3\\">{1} сек.</span> на восстановление после каждой активации.","name":"Предчувствие","flavor":"«Не нравится мне это!»","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"Вы мотивированы в сложных ситуациях. Дает <span class=\\"Highlight1\\">{0}%</span> дополнительной скорости при починке, поломке, лечении, снятии с крюка, прыжках через препятствия, очистке, открытии ворот и сундуков, пока вы ранены.","name":"Устойчивость","flavor":" «Нужно сосредоточиться, даже если тебе приходится нелегко».","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"Вы разработали эффективный способ спрыгивать с крюков. <br><li>Дает дополнительные попытки сбежать с крюка (максимум <span class=\\"Highlight1\\">{0}</span>).</li><li>Ваши шансы спрыгнуть с крюка увеличиваются на <span class=\\"Highlight2\\">{1}%</span>.</li>","name":"Скользкое Мясо","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"Вы превосходно чувствуете опасность и получаете звуковое предупреждение, когда смотрите в сторону тотемов в радиусе <span class=\\"Highlight1\\">45 градусов</span> на расстоянии <span class=\\"Highlight2\\">{0} м</span>. Навык «Мелкая дичь» можно повторно использовать через <span class=\\"Highlight3\\">{1} сек.</span> после каждой активации. За каждый тусклый и проклятый тотем, очищенный любым игроком, вы получаете жетон. Угол обнаружения «Мелкой дичи» сужается на <span class=\\"Highlight4\\">5 градусов</span> за каждый жетон.","name":"Мелкая Дичь","flavor":"«Не-а» (Потерянные записи: Энди).","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"Необычное покалывание предупреждает вас о надвигающейся гибели. Вы будете оповещены, когда убийца посмотрит в вашу сторону, находясь в радиусе <span class=\\"Highlight1\\">{0} м</span> от него. Пока этот навык активен, шанс проверки реакции увеличивается на <span class=\\"Highlight2\\">{1}%</span> с уменьшенной на <span class=\\"Highlight3\\">{2}%</span> зоной успеха. Также, пока навык активен, скорость починки, поломки, лечения, снятия с крюка, прыжков, очищения, открывания ворот и сундуков увеличивается на <span class=\\"Highlight4\\">{3}%</span>.","name":"Мурашки по Спине","flavor":" «Есть голос, который говорит без слов. Прислушайся». — Потерянные записи: Сэсси","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"Вы действуете на пределе возможностей в момент сильного стресса. Когда вы ранены, зона отличной реакции при ее проверке во время починки и лечения увеличивается на <span class=\\"Highlight1\\">{0}%</span>.","name":"Этому не бывать","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"Вы воодушевляетесь, помогая другим.<br><br>Снимая выжившего с крюка, вы получаете прирост к скорости лечения других выживших на <span class=\\"Highlight1\\">{0}%</span> на <span class=\\"Highlight3\\">{1} сек.</span>","name":"Мы Справимся","flavor":"«Я уверен, что мы все сможем сбежать невредимыми, если будем помогать друг другу».","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"У вас появляется способность чтения ауры. Вы видите ауры союзников в радиусе <span class=\\"Highlight1\\">{0} м</span>.<br>","name":"Связь","flavor":"«Нужно сплотиться. Выживешь ты — выживу я!» (Дуайт).","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"Каждый другой Выживший, работающий с генератором в радиусе <span class=\\"Highlight2\\">{1} м</span>, повышает скорость починки на <span class=\\"Highlight1\\">{0}%</span>. Такой же бонус дается всем прочим Выжившим в радиусе действия.<br>За совместные действия вы получаете на <span class=\\"Highlight3\\">{2}%</span> больше очков крови.<br>На Выживших может действовать только один эффект.<br>","name":"Прояви себя","flavor":"«Покажи, на что способен!» (Дуайт).","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"Вы умеете добиться от своей команды эффективной совместной работы. В радиусе <span class=\\"Highlight2\\">{1} м</span> от вас на <span class=\\"Highlight1\\">{0}%</span> повышается скорость следующих действий: лечение, поломка, снятие с крюков, очищение, открытие ворот и сундуков.<br>Одновременно может действовать только один эффект лидерства.<br>Эффект сохраняется на выживших вне радиуса воздействия лидера в течение <span class=\\"Highlight3\\">{2} сек.</span>","name":"Лидер","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Вы шумите не так сильно, как другие, когда быстро перепрыгиваете через препятствия или прячетесь в шкафчиках.<br><br>Радиус обнаружения этих шумов снижается на <span class=\\"Highlight1\\">{0}%</span>.<br><br>Этот эффект может сработать только один раз в <span class=\\"Highlight2\\">{1} сек.</span>","name":"Быстрый и Тихий","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"Спринтуйте со скоростью в <span class=\\"Highlight1\\">{0}%</span> от обычного бега в течение <span class=\\"Highlight2\\">{1} секунд</span>.<br>Вызывает <i>Усталость</i> на <span class=\\"Highlight4\\">{2} секунд</span>.<br>Навык <i>Спринтер</i> невозможно использовать во время <i>Усталости</i>.<br>Вы не можете снять <i>Усталость</i> во время бега.","name":"Спринтер","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Когда вы на грани побега, вас подпитывает внезапный прилив энергии. <span class=\\"Highlight1\\">Мгновенно исцеляет <b>одно состояние здоровья</b> (из смертельно раненого в раненого, или из раненого в здорового)</span>, увеличивает скорость бега до <span class=\\"Highlight2\\">{0}%</span> от вашей обычной скорости в течение <span class=\\"Highlight3\\">{1} секунд</span>, сразу после того, как на ворота подано питание. Данный навык не подействует на вас, если вы не можете двигаться в момент активации, но сработает, как только вы освободитесь.<br><i>Адреналин</i> <b>разбудит</b> вас при активации, если вы спите.<br><i>Адреналин</i> игнорирует <i>Усталость</i>.<br>Вызывает <i>Усталость</i> на <span class=\\"Highlight4\\">{2} секунд</span>.<br>Вы не можете снять <i>Усталость</i> во время бега.","name":"Адреналин","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"У вас появляется способность чтения ауры. Вы видите ауры умирающих или травмированных союзников в радиусе <span class=\\"Highlight1\\">{0} м</span> от вас. <i>Сострадание</i> не позволяет видеть ауры союзников, когда те находятся в прямом контакте с Убийцей.","name":"Сострадание","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"Вы умеете изготавливать замедляющие кровотечение настойки из растений, найденных вокруг лагеря. <b>Скорость лечения</b> и <b>эффективность лечебного предмета</b> увеличиваются на <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Познания в Ботанике","flavor":"«Базовые познания в ботанике однажды могут спасти вам жизнь».","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"У вас появляется способность лечить себя без аптечки, но со скоростью <span class=\\"Highlight1\\">{0}%</span> от обычной скорости лечения. Повышает эффективность лечащих предметов на <span class=\\"Highlight3\\">{1}%</span>.","name":"Сам себе доктор","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"Вы сможете сконцентрироваться и войти в медитативное состояние, чтобы заглушить боль. Вопли от вызванной травмами боли заглушаются на <span class=\\"Highlight1\\">{0}%</span>.","name":"Железная Воля","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"Похоже животные доверяют вам, поскольку зачастую сохраняют спокойствие в вашем присутствии. Уменьшает шансы спугнуть лесных обитателей на <span class=\\"Highlight1\\">{0}%</span>.<br>Спокойствие вашего духа позволяет сдерживать желание закричать.","name":"Спокойствие духа","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"У вас появляется способность чтения ауры.<br><li>Когда убийца несет выжившего, вы видите ауры крюков в радиусе <span class=\\"Highlight1\\">56 м</span> от места, где подобрали выжившего.</li><br>Позволяет ломать крюки без инструментов.<br><li>Поломка крюка без инструментов занимает <span class=\\"Highlight2\\">2,5 сек.</span>.</li><li>Повторно выполнить действие поломки можно спустя <span class=\\"Highlight3\\">{0} сек.</span>.</li>","name":"Крушитель","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"Ваша ловкость достойна уважения.<br><br>Обладая кошачьей реакцией, после падений с высоты вы на <span class=\\"Highlight1\\">{0}%</span> меньше подвержены оглушению и вскрикиваете на <span class=\\"Highlight1\\">100%</span> тише. После приземления скорость бега составляет <span class=\\"Highlight2\\">{1}%</span> от обычной скорости на протяжении <span class=\\"Highlight3\\">{2} сек.</span><br><br>Накладывает эффект <b>«Усталость»</b> на <span class=\\"Highlight4\\">{3} сек.</span><br><br><i>«Ловкое приземление»</i> нельзя использовать, пока не пройдет <b>усталость</b>.<br><br><b>Усталость</b> не проходит во время бега.<br>","name":"Ловкое Приземление","flavor":"«Прыгала я с мест и повыше». — Нея","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"Годы беготни от полицейских научили вас парочке трюков. Присев, вы передвигаетесь на <span class=\\"Highlight1\\">{0}%</span> быстрее.<br>","name":"Городской Бег","flavor":"«Краска еще не высохла, а меня уже давно след простыл» (Нея).","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"Долгие ночи научили вас пользоваться тем, что оказалось под рукой. Замедляет расход заряда предмета на <span class=\\"Highlight1\\">{0}%</span> для вас и союзников, находящихся в пределах <span class=\\"Highlight2\\">{1} метров</span> от вас. При выходе из радиуса действия эффект сохраняется на <span class=\\"Highlight4\\">{2} секунд.</span><br>","name":"Уроки Улиц","flavor":"«Ты все делаешь не так! Дай покажу, как надо» (Нея).","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"<br>Пробуждает у персонажа способность к чтению ауры. Если вы — последний выживший в матче, то видите ауру люка в радиусе <span class=\\"Highlight1\\">{0}</span> м.","name":"Оставленный Позади","flavor":"«Я не занимаюсь фигней. Всё сделаю сам!» (Билл).","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"Спасение союзника от повешения неожиданно наполняет вас энергией.<br>После снятия выжившего с крюка этот выживший получает эффект <b>«Стойкость»</b> на <span class=\\"Highlight1\\">{0} сек.</span><br>","name":"Одолженное время","flavor":"«Конечно, дико больно, но от этого не умирают. Проснись и пой, солдат. Надо идти!» (Билл Овербек)","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"Былые битвы научили вас выживать.<br>Вы можете самостоятельно подняться на ноги из предсмертного состояния <b>один раз за матч</b>. Скорость вашего восстановления увеличена на <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Несокрушимый","flavor":"«Вашу ж мать! Докладываю обстановку - мне полный пиз...» (Билл).","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"Ваши немногочисленные друзья заслуживают лучшей защиты.<br>При лечении находящегося при смерти выжившего ваша скорость лечения повышается на <span class=\\"Highlight1\\">100%.</span><br>Получите жетон за любое из следующих действий:<li>безопасное снятие с крюка;</li><li>принятие на себя удара, чтобы защитить другого выжившего;</li><li>спасение выжившего при оглушении убийцы доской;</li><li>спасение выжившего при ослеплении убийцы фонариком.</li>Получите суммируемый бонус к очкам крови в размере <span class=\\"Highlight2\\">25%</span> во всех категориях, вплоть до <span class=\\"Highlight3\\">{1}%</span>. Бонусные очки крови выдаются только после матча.","name":"Мы Будем Жить Вечно","flavor":"«Ну давай, говно, иди сюда! Давай, мне плевать!» — Дэвид Кинг","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"Активируемый навык.<br>Вы можете пережить серьезную трепку. Когда вы ранены, выброс адреналина поможет вам рвануться вперед и избежать урона.<br><li>Нажмите кнопку <i>активной способности</i> во время бега, чтобы совершить рывок.</li><li>Вы не можете получить урон во время рывка.</li><li>Накладывает эффект <i>«Усталость»</i> на <span class=\\"Highlight4\\">{0} сек.</span><br><i>Усталость</i> не проходит во время бега.</li>","name":"Крепкий Орешек","flavor":"«Идем мы, значит, по узкому переулку как-то, и тут чувствую — мимо меня бутылка пролетает. А потом еще одна, и еще, и еще! Ну, думаю: \\"Щас позабавимся, пацаны, давай, подходи по одному!\\". Короче, драчка была что надо, точно те говорю!» — Дэвид Кинг","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"В течение всего матча вы страдаете от эффекта <span class=\\"Highlight1\\">«Ослабление»</span>.<br>Ваша кровь сворачивается практически мгновенно. <li>Вы не оставляете за собой лужи крови.</li><li>Звуки стонов от травм приглушены на <span class=\\"Highlight2\\">{0}%</span> в течение всего времени.</li><li>Дарует возможность полностью самостоятельно восстановиться будучи при смерти.</li>","name":"Без Сожаления","flavor":"«Ну вспылил. Наподдал ему хорошенько... А они взяли и изгнали меня... Ну пошел в бар, выпил пару кружек, открыл следующую главу своей жизни. Не буду я по этому поводу убиваться, сечешь? Меня таким не проймешь». — Дэвид Кинг.","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"Чем больше ваших союзников погибает от рук убийцы, тем сильнее вы отрешаетесь от мира, что мешает убийце <b>различать вашу ауру</b>.<br>Каждый раз, когда выжившего <b>убивают</b> или <b>приносят в жертву</b>, вы получаете жетон. Убийца не сможет читать вашу ауру на расстоянии до <span class=\\"Highlight1\\">{0} м</span> за каждый жетон.<br><li><i>Увеличивает ваши шансы стать объектом одержимости убийцы.</i></li><li><i>Одновременно убийца может быть <b>одержим</b> только одной жертвой.</i></li>","name":"Единственный Выживший","flavor":"«Это был Бугимэн» (Лори Строуд).","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"Вас и убийцу связывают сверхъестественные узы.<br><br>Когда ваша аура становится видна убийце, вы сами видите ауру убийцы и получаете +<span class=\\"Highlight1\\">{0}%</span> к скорости лечения, починки и очищения.<br>Если вы стали объектом одержимости, ваша аура становится видна убийце в течение <span class=\\"Highlight2\\">3 сек.</span> каждые <span class=\\"Highlight3\\">30 сек.</span><br>Увеличивает ваш шанс стать объектом одержимости.<br>","name":"Объект Одержимости","flavor":"«Он следил за мной!» (Лори Строуд)","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"Пырните врага при попытке сбежать. <br>Когда вас снимают с крюка, или вы освобождаетесь самостоятельно, на <span class=\\"Highlight1\\">{0} сек.</span> активируется <i>«Решающий удар»</i>.<br>Пока он действует, вы можете вырваться из рук убийцы, если пройдете проверку реакции. При этом вы оглушите его на <span class=\\"Highlight1\\">5 сек.</span><br><li>При успешной или неудачной проверке реакции <i>«Решающий удар»</i> отключается.</li><li>Оглушив убийцу, вы становитесь объектом его одержимости.</li><br>Пока навык действует, следующие действия отключают <i>«Решающий удар»</i>:<li>починка генератора;</li><li>лечение себя или других;</li><li>очистка тотема;</li><li>поломка крюка;</li><li>снятие с крюка других.</li><br><li><i>Увеличивает ваш шанс стать объектом одержимости.</i></li><li><i>Убийца может быть <b>одержим</b> только одним выжившим за раз.</i></li>","name":"Решающий удар","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"Улучшает способность чтения ауры у вас и вашей команды.<br><li>Увеличивает радиус чтения ауры на <span class=\\"Highlight1\\">{0} м</span>.</li><li>Одновременно на выживших может действовать только один эффект <i>«Игры в открытую»</i>.</li>","name":"Игра в Открытую","flavor":"«Внимательность — вот что помогало мне выжить все эти годы. Ну и то, что я красавчик, конечно» (Эйс).","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"Все будет хорошо - вы это нутром чуете. Подобная уверенность вселяет надежду в окружающих вас. За каждого еще живого игрока остальные получают бонус - <span class=\\"Highlight1\\">{0}%</span> к удаче.<br>","name":"Повысить Ставки","flavor":"«Ну, что я могу сказать? Я просто очень везучий парень... Уверен, немного этой удачи и тебе перепадет» (Эйс).","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"Госпожа удача всегда подкидывает вам что-нибудь хорошее на пути.<br>При извлечении предмета из сундука есть <span class=\\"Highlight1\\">{0}%</span> шанс того, что на нем будет <span class=\\"Highlight2\\">очень редкое</span> (или менее редкое) улучшение.<br><span class=\\"Highlight3\\">{1}%</span> шанс наткнуться на <span class=\\"Highlight4\\">необычное</span> улучшение (или менее редкое).<br>При побеге вы сохраняете все улучшения своего предмета.","name":"Туз в рукаве","flavor":"«Не все то золото, что блестит. Но золото ничего не стоит в этой дыре, а вот это должно пригодиться» (Эйс).","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"Вы способны аккуратно и безошибочно обращаться с техникой.<br>Радиус, в котором можно услышать звук починки генератора, который вы заводите, сокращен на <span class=\\"Highlight2\\">{0} метров</span>. При провале Проверки Реакции, существует <span class=\\"Highlight1\\">{1}%</span> шанс того, что генератор не взорвется.<br>","name":"Техник","flavor":"«Это я пройду по стелсу» (Фенг Мин).","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"После <b>ускоренного</b> прыжка через препятствие вы получаете ускорение в виде <span class=\\"Highlight1\\">{0}%</span> от вашей обычной скорости бега на <span class=\\"Highlight2\\">{1} сек</span>. <br>Вызывает <i>«Усталость»</i> на <span class=\\"Highlight4\\">{2} сек</span>.<br><i>«Гибкость»</i> невозможно использовать в состоянии <i>«Усталости»</i>.<br>На бегу <i>«Усталость»</i> не проходит.<br>","name":"Гибкость","flavor":"«Ты в своем уме?» (Фенг Мин).","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Вы постоянно находитесь в состоянии боевой готовности.<br>Когда Убийца рушит препятствия, он раскрывает вам свое местоположение на <span class=\\"Highlight1\\">{0} сек</span>.<br>","name":"Тревога","flavor":"«У меня зоркий глаз» (Фенг Мин).","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"У вас появляется способность чтения ауры. Когда все генераторы будут отремонтированы, вы сможете увидеть ворота в радиусе <span class=\\"Highlight1\\">{0} м</span> от вас. Во время открытия ворот ваша аура видна другим Выжившим в радиусе до <span class=\\"Highlight2\\">{1} м</span>.<br>Пока навык <i>Проснись</i> активен, вы открываете ворота на <span class=\\"Highlight3\\">{2}%</span> быстрее.","name":"Проснись","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"У вас талант находить лекарства. Вы открываете сундуки на <span class=\\"Highlight1\\">{0}%</span> быстрее, при этом радиус звука и слышимость этого действия сокращены на <span class=\\"Highlight2\\">{1} м.</span><br>Навык <i>«Аптекарь»</i> гарантирует нахождение аптечки первой помощи в <b>первом</b> открытом сундуке.<br>","name":"Аптекарь","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"Вы присматриваете за друзьями даже в самые трудные минуты. Вы и ваши союзники в радиусе <span class=\\"Highlight1\\">{0} м</span> оправляетесь от <b>истощения, кровотечения, замедления</b> и <b>ослепления</b> на <span class=\\"Highlight2\\">{1}%</span> быстрее. При выходе из радиуса действия эффект сохраняется на <span class=\\"Highlight4\\">{2} сек.</span><br>","name":"Бессонница","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"Вас ничто не может остановить. Ваша железная выдержка в трудных ситуациях позволяет ползать при смерти на <span class=\\"Highlight1\\">{0}%</span> быстрее, имея при этом возможность одновременно восстанавливать силы.<br>","name":"Выдержка","flavor":"«Это еще что такое? Я арестовываю этого ублюдка!» (Детектив Дэвид Тэпп).","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"У вас появляется способность чтения ауры. После починки генератора вы видите ауры генераторов, сундуков и тотемов в радиусе <span class=\\"Highlight1\\">{0} м</span> на протяжении <span class=\\"Highlight2\\">{1} сек.</span><br>Если у вас в руках есть карта, которая отслеживает объекты, <i>«Чутье детектива»</i> добавит на нее генераторы, сундуки и тотемы.","name":"Детективное Чутье","flavor":"«Можете сказать, где вы были вчера ночью?» (Детектив Дэвид Тэпп).","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"Близость к убийце наполняет вас решимостью. За каждые <span class=\\"Highlight1\\">{0} сек.</span>, что вы находитесь внутри радиуса террора убийцы, но вне погони, вы получаете жетон (до <span class=\\"Highlight2\\">{1} шт. максимум</span>).<br>Когда у навыка <i>«Выслеживание подозреваемого»</i> имеется хотя бы <b>1 жетон</b>, хорошие проверки реакции автоматически превращаются в отличные, расходуя при этом <b>1 жетон</b>, и дают дополнительный <span class=\\"Highlight3\\">1%</span> к степени починки генератора.","name":"Выслеживание Подозреваемого","flavor":"«Я тебя вычислил, я поставил тебя на колени. Ты испугался и побежал, потому что мы тебя вычислили. Я доведу это дело до конца!» (детектив Дэвид Тэпп)","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"После быстрого прыжка через препятствия, или выхода из шкафчика «на бегу», вы не оставляете следов-трещин в течение <span class=\\"Highlight1\\">{0} секунд</span>.<br><i>Потанцуй Со Мной</i> можно использовать снова через <span class=\\"Highlight4\\">{1} секунд</span> после активации. <br>","name":"Потанцуй Со Мной","flavor":"И снова концерт громогласно ревёт,<br>Потанцуй со мной, ибо шторм грядет,<br>Следи за ритмом, постарайся успеть,<br>Танцуй со мной, пока не встретим рассвет.<br> («Потанцуй Со Мной», Кейт Денсон)","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"Открывает способность чтения ауры. Ауры досок, разрушаемых стен и препятствий, через которые можно перепрыгнуть, видны вам, когда вы находитесь в <span class=\\"Highlight1\\">{0} м</span> от них. <br><i>«Уникальную Возможность»</i> можно повторно использовать через <span class=\\"Highlight1\\">{1} сек.</span> после прыжка через препятствие, или опрокидывания доски во время погони. ","name":"Уникальная Возможность","flavor":"«Проснись и пой — труба зовет, работай и трудись, <br>Прицел возьми, взведи курок и к цели ты стремись, <br>Цени заботу, веру и семью — над ними не глумись. <br> Возможностей забрезжит уникальных перед тобою высь».<br> («Уникальная возможность», Кейт Денсон)","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"Вы - боец, и сделаете все возможное, чтобы сбежать из хватки врага. Вы раскачиваете Убийцу на <span class=\\"Highlight1\\">{0}%</span> сильнее, когда пытаетесь сбежать из его хватки. <br>Вы подавляете способность Убийцы видеть ауры крюков в радиусе <span class=\\"Highlight1\\">{1} метров</span>.<br>","name":"Через Край","flavor":"Ярость и Воля -<br>К свободе страсть.<br>Твоим рукам меня не удержать.<br> («Через Край», Кейт Денсон)","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"Активируемый навык.<br><i>«Диверсия»</i> активируется, если вы в течение <span class=\\"Highlight1\\">{0} сек.</span> находитесь в радиусе террора убийцы, но не в режиме погони.<br><li><i></i>После активации навыка вы можете нажать кнопку <i>активной способности</i> (если пригнулись и не шевелитесь), чтобы бросить камешек, который отвлечет убийцу оповещением о шуме в радиусе <span class=\\"Highlight2\\">20 м.</span></li><br><li>Таймер навыка сбрасывается после использования.</li><br>Отвлекающее действие включает:<br><li>оповещение о громком звуке;</li><li>следы-трещины.</li>","name":"Диверсия","flavor":"«Есть обычные дела, а есть дела правые. Если ты не в состоянии отличить одно от другого, даже не знаю, что с тобой дальше будет» (Адам Фрэнсис).","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"<i>«Освобождение»</i> активируется после безопасного снятия с крюка другого выжившего. <br>Теперь у вас есть <span class=\\"Highlight1\\">100%</span> шанс снять себя с крюка при попытке бегства.<br>Успешное <i>освобождение</i> с крюка накладывает эффект <span class=\\"Highlight2\\">ослабления</span> на <span class=\\"Highlight3\\">{0} сек.</span>","name":"Освобождение","flavor":"«Меня растил жестокий человек, который научил извлекать выгоду даже из самых поганых ситуаций». — Адам Фрэнсис.","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"Вы начинаете матч со штрафом <span class=\\"Highlight1\\">-{1}%</span> к прогрессу проверок реакции во время лечения выживших.<br>За каждую успешную проверку реакции во время лечения выживших вы будете получать по жетону, максимальное количество жетонов — <span class=\\"Highlight2\\">{0}</span>.<br>Каждый жетон дарует вам <span class=\\"Highlight1\\">+{2}%</span> бонус к прогрессу за каждую успешную проверку реакции во время лечения выживших.<br>Во время использования навыка <i>«Самоучка»</i> вам недоступны отличные проверки реакции.<li><i>»Самоучка»</i> не будет активен при использовании аптечек.</li>","name":"Самоучка","flavor":"«Нет предела тому, чего ты можешь достичь, если усердно стараешься добиться своего» (Адам Фрэнсис).","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"Каждый раз, когда вас снимают с крюка, либо когда вы сами с него слезаете, крюк ломается, и вы видите ауру убийцы в течение <span class=\\"Highlight1\\">{0} сек.</span> Крюк, сломанный этим навыком, восстанавливается <span class=\\"Highlight2\\">180 сек.</span><br>","name":"Поломка","flavor":"«Побег из пасти зверя».<br>«Этот набросок или рисунок я сделал на куске дерева, который нашел у дороги. Мне показалось, что у него есть своя история. И дал ему второй шанс» (Джефф, тушь и масло на куске дерева, 30x40).","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"Навык открывает способность к чтению ауры. Вы способны видеть ауру каждого Выжившего:<br><li>которого вы снимаете с крюка, или который снимает с крюка вас;</li><li>которого вы вылечиваете, или который вылечивает вас.</li><br>Выжившие также видят вашу ауру.<br>Вы можете создать до <span class=\\"Highlight1\\">{0}</span> связи. Если Убийца повесит вас на крюк, имеющиеся с Выжившими связи разрушаются.","name":"Уход за больным","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"В начале испытания у вас есть <span class=\\"Highlight1\\">жетоны: {0} шт.</span><br><br>Когда убийца может увидеть вашу ауру, тратится один жетон и активируется <i>«Искажение»</i>.<br><br>В течение следующих <span class=\\"Highlight1\\">{1} сек.</span> <i>навык</i> активен: в это время вы не оставляете следы-трещины, а убийца не видит вашу ауру.<br><li><i>«Искажение»</i> не активируется, если вы находитесь при смерти или в ловушке.</li><br>","name":"Искажение","flavor":"«Смерть, одураченная плащом из перьев сокола».<br>«Набросок, сделанный после нескольких бессонных зимних ночей. Основано на скандинавской мифологии: храбрость скрывает недостатки, даже когда ты наиболее уязвим» (Джефф, карандаш, тонированная бумага, 30x30).","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"Иногда очень полезно делиться болезненными воспоминаниями.<br>Если вы в раненом состоянии лечите Выжившего без аптечки, то лечитесь сами в пропорции <span class=\\"Highlight1\\">{0}%</span>.","name":"Солидарность","flavor":"«Хочешь стать сильнее? Хочешь расти? Будь там, где все плохо, умей слушать тех, кто страдает и поддерживать их» (Джейн Ромеро).","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"Достигая целей, вы набираетесь уверенности.<br>После починки генератора вы не оставляете следов-трещин в течение <span class=\\"Highlight1\\">{0} сек</span>.<br>","name":"Равновесие","flavor":"«Ладно, спокойно. Не думай слишком много и просто иди вперед. Ты сможешь...» (Джейн Ромеро).","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"Вы сосредотачиваетесь на цели, и горе тем, кто встанет у вас на пути.<br><br>Если вы прячетесь в шкафчике <span class=\\"Highlight1\\">{0} сек.</span>, активируется навык <i> «Напролом»</i>.<br>Чтобы использовать <i> его,</i> быстро выбегите из шкафчика, когда <i>навык</i> активен. Если убийца находится в зоне действия навыка <i>«Напролом»</i>, вы оглушите его на <span class=\\"Highlight1\\">{1} сек</span>.<br>Вызывает эффект <span class=\\"Highlight3\\">«Усталость»</span> на <span class=\\"Highlight1\\">{2} сек</span>. <br>Усталые персонажи не могут бежать напролом.<br>Во время бега <span class=\\"Highlight3\\">усталость</span> не проходит. <br><i>«Напролом»</i> нельзя использовать, если рядом есть вороны.<br>","name":"Напролом","flavor":"«Людей помнят по их победам. Можешь бежать и забыть все, что умеешь, а можешь выйти против своих страхов и напомнить миру о себе» (Джейн Ромеро).","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"У вас удивительная способность избегать неизбежного.<br><br>Когда Убийца подхватывает вас в состоянии «При смерти», <span class=\\"Highlight1\\">{0}%</span> вашего возвращения в чувства направляется на раскачивание, до максимальных <span class=\\"Highlight2\\">{1}%</span> раскачивания.<br>","name":"Раскачка","flavor":"«Раскачаемся — повстречаемся» (Эш Уильямс).","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"У вас появляется способность чтения ауры. Степень восстановления умирающих Выживших можно определить по интенсивности их аур с расстояния до <span class=\\"Highlight1\\">{0} м</span>.<br><br>Когда вы исцеляете Выжившего до состояния «Ранение», и вы, и исцеленный Выживший можете видеть ауру Убийцы на протяжении <span class=\\"Highlight2\\">{1} сек</span>.<br>","name":"Пристегнись","flavor":"«Победители приведений своих не бросают!» (Эш Уильямс).","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"Зло всегда знает, где вас искать. <br><br><i>«Проверка на прочность»</i> активируется, если <span class=\\"Highlight1\\">{0} раз(а) происходит событие </span>«Удар на себя». <br><br>После активации следующее событие, которое должно перевести вас из <b>раненого</b> в <b>предсмертное состояние</b>, не причинит вреда.<br><br>При следующем восстановлении здоровья до максимума, если вы будете дальше, чем в <span class=\\"Highlight2\\">{1} м</span> от убийцы, ваша аура станет ему видна.<br><br><i>«Проверка на прочность»</i> отключится, когда вы окажетесь в предсмертном состоянии.<br><i><li>Повышает шанс стать объектом одержимости убийцы.</li><li>Одновременно убийца может быть <b>одержим</b> только одним выжившим.</li></i><br>","name":"Проверка на прочность","flavor":"«Зло нарисовало у меня на спине мишень со стадион \\"Тайгерс\\" размером» (Эш Уильямс).","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"Вы жаждете справедливости и всегда докапываетесь до истины несмотря ни на что.<br><br>Аура генератора, который вы чините в настоящий момент, видна всем выжившим в радиусе <span class=\\"Highlight1\\">{0} м</span>.<br><br>Если во время вашей работы с генератором убийца тяжело ранит кого-то из выживших, вы видите ауру всех выживших на протяжении <span class=\\"Highlight2\\">{1} сек</span>.<br>","name":"Лучше вместе","flavor":"«Сожжем эту лабораторию дотла» (Нэнси Уиллер).","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"Если вы ставите цель, то идете к ней до конца: лучше просить прощения, чем разрешения. <br><br>Вы всегда видите собственные следы-трещины.<br><br>Ваша скорость ходьбы возрастает на <span class=\\"Highlight1\\">{0}%</span>.<br>","name":"Фиксация","flavor":"«Я хочу закончить начатое. Хочу его убить» (Нэнси Уиллер).","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"Когда кажется, что вы одни, а впереди — непроглядная тьма, вы вглядываетесь в себя и доверяетесь инстинктам.<br><br>После каждой очистки тотема активируется <i>«Внутренняя сила»</i>. Если на вас действует <b>эффект «Ослабление»</b>, <i>«Внутренняя сила»</i> не активируется.<br><br>Пока <i>«Внутренняя сила»</i> активна, вы полностью исцеляетесь от ранений, если прячетесь в шкафчике <span class=\\"Highlight1\\">{0} сек</span>.<br><br>После срабатывания <i>«Внутренняя сила»</i> отключается.<br>","name":"Внутренняя сила","flavor":"«Я изо всех сил притворялась, что всё в порядке, но это не так» (Нэнси Уиллер).","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"Вас называют эгоистом, но вы готовы все поставить на карту ради тех, кто попал в беду.<br><br>Когда вы снимаете выжившего с крюка, спасенный на протяжении следующих <span class=\\"Highlight1\\">{0} сек</span>. не оставляет следов-трещин и пятен крови. Вы видите ауру убийцы, а тот видит вашу ауру на протяжении <span class=\\"Highlight2\\">{1} сек</span>.<br>","name":"Нянька","flavor":"«Я обещал, что спасу вас, засранцы, и именно так и поступлю» (Стив Харрингтон).","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"Жизнь научила вас, что дружба важна и придает сил.<br><br>Когда вы на крюке на стадии сопротивления, активируется навык <i>«Товарищество»</i>.<br><br>Если кто-то из выживших окажется в радиусе <span class=\\"Highlight1\\">{0} м </span>от вас, пока действует <i>навык</i>, таймер крюка останавливается на <span class=\\"Highlight2\\">{1} сек</span>.<br>","name":"Товарищество","flavor":"«Когда приедешь на место, помни... делай вид, что тебе все пофиг. Вот так, дружище, у тебя получается. У тебя получается» (Стив Харрингтон).","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"<i>«Второе дыхание»</i> открывается, когда вы исцеляете другого выжившего до следующей стадии здоровья. Если на вас действует эффект <span class=\\"Highlight1\\">«Ослабление»</span>, <i>«Второе дыхание»</i> не активируется.<br><br>Если вы освободитесь с крюка, или вас снимут с крюка во время действия <i>навыка</i>, вы получите эффект <span class=\\"Highlight1\\">«Ослабление»</span>. Через <span class=\\"Highlight2\\">{0} сек.</span> <i>«Второе дыхание»</i> полностью вас исцелит.<br><br><i>«Второе дыхание»</i> прекращается после полного исцеления, или если вы оказываетесь при смерти прежде, чем <i>навык</i> успешно сработает. Вы теряете <span class=\\"Highlight1\\">эффект «Ослабление»</span>.<br>","name":"Второе дыхание","flavor":"«Ага, значит, нет». — Стив Харрингтон","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"Вы получаете свою долю синяков и шишек, но удача всегда на вашей стороне.<br><br><i>«Везение»</i> начинает действовать, когда вы получаете ранение. Пока действует <i>«Везение»</i>, вы перестаете оставлять кровавый след и следы-трещины на <span class=\\"Highlight1\\">{0} сек.</span><br><br><i>«Везение»</i> отключается до самого конца матча, когда его общее время действия истечет.<br>","name":"Везение","flavor":"«Таким меня не проймешь. Даже не мечтай» (Юи Кимура).","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"Вы привыкли стоять за себя и получать преимущество любыми средствами.<br><br>Подойдя к упавшей доске, нажмите и удерживайте <i>кнопку активной способности</i> в течение <span class=\\"Highlight1\\">{0} сек.</span>, чтобы вернуть доску в вертикальное положение.<br><br><i>«Любыми средствами»</i> восстанавливается в течение <span class=\\"Highlight2\\">{1} сек.</span><br>","name":"Любыми средствами","flavor":"«Я буду бить тебя изо всех сил, снова и снова» — Юи Кимура","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"Завидев человека в беде, вы врубаете повышенную передачу и вместе с ним стараетесь выбраться из передряги.<br><br>Оказавшись в радиусе <span class=\\"Highlight1\\">{0} м</span> от переносимого выжившего, вы получаете <span class=\\"Highlight2\\">спешку</span> и движетесь на <span class=\\"Highlight3\\">{1}%</span> быстрее. Скорость попыток вырваться у пойманного выжившего возрастает на <span class=\\"Highlight4\\">{2}%</span>.<br>","name":"Форсаж","flavor":"«Вперед, мы сможем прорваться!» — Юи Кимура ","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"Вы понимаете, что иногда лучше действовать по-тихому. <br><br><i>«Без огласки»</i> активируется на <span class=\\"Highlight1\\">{0} сек.</span>, когда вас снимают с крюка, или если вы снимаете себя сами. <br><br>Пока <i>навык</i> активен, убийца не может видеть вашу ауру, а вопли от вызванной травмами боли заглушаются на <span class=\\"Highlight2\\">{1}%</span>.<br>","name":"Без огласки","flavor":"«Можете мне довериться: я провожу расследования тщательно и осторожно». — Зарина Кассир","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"Вы заметили, что шумиха особенно привлекает людей.<br><br>Если вы чинили генератор не менее <span class=\\"Highlight1\\">{0} сек.</span>, он будет подсвечиваться для вас желтым. Аура пропадет при завершении ремонта подсвеченного генератора, либо если вы полностью почините другой генератор или войдете в шкафчик. <br><br>Когда вы войдете в шкафчик, убийца получит уведомление о шуме у подсвеченного генератора. <br><li><i>«Обман во благо»</i> может сработать только раз в <span class=\\"Highlight2\\">{1} сек.</span></li><br>","name":"Обман во благо","flavor":"«Из новостей выкидывают самое обременительное и сложное для восприятия — правду». — Зарина Кассир","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"Ради других вы готовы подвергнуть себя опасности.<br><br>Навык <i>«Ради людей»</i> активен, только когда вы полностью здоровы.<br><br>Когда вы лечите другого выжившего без аптечки, нажмите <i>кнопку активной способности</i>, чтобы мгновенно перевести выжившего из предсмертного состояния в раненое или из раненого в здоровое.<br><br>Вы получаете ранение и эффект <b>«Ослабление»</b> на <span class=\\"Highlight1\\">{0} сек.</span><br><br>Вы становитесь объектом одержимости.<br><br>Навык <b>уменьшает</b> вероятность стать объектом одержимости в начале матча.<br>","name":"Ради людей","flavor":"«Мы можем сами писать свою историю и решать, чем она закончится». — Зарина Кассир","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"Вы пережили немыслимые испытания, которые закалили вас.<br><br>Вылечившись или восстановившись из предсмертного состояния, вы получаете эффект <b>«Стойкость»</b> на <span class=\\"Highlight1\\">{0} сек.</span><br>Если на вас действует порча, вы можете полностью восстановиться из предсмертного состояния.<br><br>Этот эффект может проявляться каждые <span class=\\"Highlight2\\">30 сек.</span>","name":"Оберег души","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"Внутри вас словно что-то пробудилось. Вы чувствуете, что ради помощи другим способны на все.<br><br>Если вы или объект одержимости ранены, вы видите ауры друг друга.<br><br>Вылечив объект одержимости или будучи вылеченными объектом одержимости, вы оба получаете эффект <b>«Спешка»</b>, увеличивающий скорость до <span class=\\"Highlight1\\">{1}%</span>, пока не отдалитесь друг от друга на <span class=\\"Highlight2\\">16 м</span>.<br><br>Уменьшает вероятность стать объектом одержимости.<br><br>Навык отключается, если вы сами становитесь объектом одержимости.","name":"Кровавый договор","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"Вы привыкли к преследующим вас темным силам и научились обращать это себе на пользу.<br><br><i>«Скрытый союз»</i> активируется, когда вы чините генераторы суммарно в течение <span class=\\"Highlight1\\">{0} сек.</span><br><br>Во время действия навыка нажмите <i>кнопку активной способности</i> во время починки генератора, чтобы призвать Сущность заблокировать его на <span class=\\"Highlight2\\">{1} сек.</span> После этого навык отключается.<br><br>Ауры заблокированных генераторов подсвечиваются белым для всех выживших.","name":"Скрытый союз ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"Вы на редкость сосредоточены на поисках способов выбраться.<br><br>Вы видите ауры генераторов в радиусе <span class=\\"Highlight1\\">{0} м</span>.<br><br>После любой починки генератора <i>«Визионер»</i> отключается на <span class=\\"Highlight2\\">{1} сек.</span>","name":"Визионер","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"Вы отказываетесь сдаваться даже в самую трудную минуту.<br><br>Увеличивает скорость вашего лечения и снятия с крюка на <span class=\\"Highlight1\\">{0}%</span> за каждого раненого, повешенного на крюк или умирающего выжившего.<br>","name":"Отчаянные меры","flavor":"«Если враг идет с тараном, строй стены покрепче» (Феликс Рихтер).","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"Вы умеете извлечь максимум пользы из своих инструментов.<br><br>Раз за матч полностью потраченный предмет восстановит <span class=\\"Highlight1\\">{0}%</span> своих зарядов спустя <span class=\\"Highlight2\\">{1} сек.</span><br>","name":"Строим на века","flavor":"«Архитектура — это душа цивилизации» (Феликс Рихтер).","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"Там, где другие ничего не заметят, вы увидите многое.<br><br>В начале матча вы получаете жетоны в количестве <span class=\\"Highlight1\\">{0} шт.</span> Вы можете потратить жетон на обыск открытого сундука для поиска предмета. Сундук можно обыскать только один раз.<br><br>Вы обыскиваете сундуки на <span class=\\"Highlight2\\">{1}%</span> быстрее.","name":"Изучение","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"Ваша жизнь была полна приключений и приучила вас напрягать извилины.<br><br>При взаимодействии со шкафчиком на бегу прозвучит громкое уведомление о месте, где вы находитесь. При этом вы не будете оставлять следы-трещины в последующие <span class=\\"Highlight1\\">{0} сек.</span><br><br>Во время бега и действия этого навыка вы не будете залезать в шкафчики.<br><br><i>«Уловку»</i> можно применять раз в <span class=\\"Highlight2\\">{1} сек.</span>","name":"Уловка","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"Вы не привыкли сдаваться и не собираетесь мириться с поражениями.<br><br>Если убийца несет вас, а шкала попыток вырваться заполняется на <span class=\\"Highlight1\\">{0}%</span>, активируется <i>«Отчаянная борьба»</i>. Пока действует навык <i>«Отчаянная борьба»</i>, вы можете опрокинуть ближайшую стоящую доску и оглушить убийцу.<br>","name":"Отчаянная борьба","flavor":"«Я понадеялась на других и потеряла все. Больше этому не бывать!» (Элоди Ракото)","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"Иногда нужно принести в жертву других, чтобы преуспеть самой.<br><br>Когда другой выживший оказывается на крюке, вы получаете <span class=\\"Highlight1\\">жетоны ({0}).</span>Вы используете все жетоны после отличной проверки реакции для генератора. Каждый использованный жетон дает <span class=\\"Highlight2\\">{1}%</span> дополнительного прогресса починки для отличных проверок реакций.<br>","name":"За чужой счет","flavor":"«Первыми в жертву приносятся слабые. Это закон природы и бизнеса... Правда, которой мало кто отважится посмотреть в глаза» (Юнчин).","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"Когда соперник совершает ошибку, вы оборачиваете ее себе на пользу.<br><br>Оглушив убийцу доской, вы станете бегать на <span class=\\"Highlight1\\">{0}%</span> быстрее своей обычной скорости в течение <span class=\\"Highlight2\\">{1} сек.</span><br>На <span class=\\"Highlight3\\">{2} сек.</span> вызывает эффект <b>«Усталости»</b>.<br>Этот навык нельзя использовать при <b>«Усталости»</b>.<br>","name":"Ударный забег","flavor":"«Я имела дело с психопатами в костюмах. Ты такой же, только страшнее и хуже одет» (Юнчин).","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"Жизнь не прощает ошибок. Иногда лучше думать только о себе.<br><br>Когда другому выжившему в радиусе <span class=\\"Highlight1\\">{0} м</span> от вас наносят удар базовой или особой атакой, активируется <i>«Самосохранение»</i>.<br>Ваши следы-трещины, лужи крови и вопли боли будут скрыты на <span class=\\"Highlight2\\">{1} сек.</span><br>","name":"Самосохранение","flavor":"«Индустрия научила меня не высовывать голову, когда машут топорами» (Юнчин).","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"Вы умеете справляться с врагами, которые сильнее вас. Тут главное найти и обезвредить их средства поддержки.<br><br>Вы очищаете тотемы на <b>20%</b> быстрее. После очистки вам на <span class=\\"Highlight1\\">{0} сек.</span> открывается аура самого дальнего от вас тотема, и вы получаете бонус к скорости очистки тотемов в размере <span class=\\"Highlight2\\">{1}%</span> до конца матча. Бонусы могут складываться.<br><br><span class= \\"FlavorText\\">«Я не против немного поработать детективом» (Джилл Валентайн).</span>","name":"Противодействие","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"Вы вернулись, хотя были обречены на смерть... Если понадобится, вы сделаете это снова.<br><br>Вы получаете <span class=\\"Highlight1\\">{0}%</span> к прогрессу лечения сразу после того, как собственными силами или с чьей-то помощью снялись с крюка.<br><br><span class= \\"FlavorText\\">«Моя очередь, сволочь» (Джилл Валентайн).</span>","name":"Поправка","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"Если прямая конфронтация невозможна, вы все равно найдете способ нанести ответный удар.<br><br><i>«Фугасная мина»</i> становится доступна после того, как суммарный прогресс починки генераторов достигнет <span class=\\"Highlight1\\">{0}%</span>.<br>После починки генератора успейте нажать <i>кнопку способности</i> в течение <span class=\\"Highlight2\\">{1} сек.</span>, чтобы поставить ловушку, которая будет действовать <span class=\\"Highlight3\\">{2} сек</span>. Затронутые генераторы получат желтую ауру, которая будет видна всем выжившим. На генераторе может находиться только одна ловушка.<br><li>Когда убийца повреждает генератор с ловушкой, мина взрывается, оглушая убийцу и ослепляя всех поблизости. Затем <i>фугасная мина</i> деактивируется.</li><br><br><span class= \\"FlavorText\\">«Тебе нужны S.T.A.R.S.? Так я дам тебе S.T.A.R.S.!» (Джилл Валентайн)</span>","name":"Фугасная мина","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"Вы тоже чувствуете боль, но не любите показывать это окружающим.<br><br>При лечении вы не шумите, в том числе не вскрикиваете от боли. Неудачная проверка реакции при лечении не наказывается звуковым сигналом, а прогресс лечения снижается только на <span class=\\"Highlight1\\">{0}%.</span><br><br><span class= \\"FlavorText\\">«Я смогу» (Леон С. Кеннеди).</span>","name":"Стиснув зубы","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"Вы приспособились к общему хаосу и научились мастерить полезное из хлама.<br><br>Когда прогресс починки любого генератора достигает <span class=\\"Highlight1\\">{0}%</span>, становится доступна <i>«Световая граната»</i>.<br>Залезьте в шкафчик без носимого предмета и нажмите кнопку способности, чтобы сделать световую гранату.<br><li>1 заряд.</li><li>Взрывается с грохотом и вспышкой света.</li><li>Подает звуковой сигнал.</li><li>Можно использовать для отвлечения или ослепления.</li><br>Сбегая из матча, вы не берете гранату с собой.<br><br><span class= \\"FlavorText\\">«Вали отсюда!» (Леон С. Кеннеди).</span>","name":"Световая граната","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"Вы помните о поставленных задачах даже в сложных ситуациях.<br><br>Ваши хорошие или отличные проверки реакции (<span class=\\"Highlight1\\">{0}</span>) при починке генераторов позволяют активировать <i>«Дух новичка»</i> до конца матча.<br>После активации вы сможете видеть ауры ветшающих генераторов.<br><br><span class= \\"FlavorText\\">«Я остановлю это, лейтенант, обещаю» (Леон С. Кеннеди).</span>","name":"Дух новичка","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/ru/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/ru/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Нервный лидер, который может определять местоположение своих союзников и повышать эффективность их действий.<BR><BR>Его личные навыки, - <B>Связь</B>, <B>Прояви себя</B> и <B>Лидер</B>, позволяют ему увеличивать скорость действий других Выживших, когда те находятся рядом.","name":"Дуайт Фэйрфилд","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"Энергичный атлет, способная сбежать почти от любого Убийцы.<BR><BR>Ее личные навыки, - <B>Быстрый и Тихий</B>, <B>Спринтер</B> и <B>Адреналин</B>, позволяют эффективнее убегать от Убийцы и уклоняться от близкого контакта.","name":"Мэг Томас","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"Опытный ботаник, которая может повысить шансы на выживание, - как свои, так и всей команды.<BR><BR>Ее личные навыки, - <B>Сострадание</B>, <B>Познания в Ботанике</B> и <B>Сам Себе Доктор</B>, позволяют вычислить местонахождение раненых Выживших, а также эффективнее лечить себя и союзников.","name":"Клодетт Морель","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"Специалист по выживанию, по жизни старается идти отдельно от других. В большинстве ситуаций сам может за себя постоять.<BR><BR>Его личные навыки, - <B>Железная Воля</B>, <B>Спокойствие Духа</B> и <B>Крушитель</B>, позволяют эффективнее передвигаться по опасной территории и выживать, будучи раненым.","name":"Джейк Парк","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"Городской художник, способна быстро сбежать и спрятаться.<BR><BR>Ее личные навыки, - <B>Ловкое Приземление</B>, <B>Городской Бег</B> и <B>Уроки Улиц</B>, помогают ей быстро уходить от опасности и эффективнее справляться с выполнением задач игры.","name":"Нея Карлссон","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"Старый солдат, способный выстоять даже в критических ситуациях.<BR><BR>Его личные навыки, - <B>Оставленный Позади</B>, <B>Одолженное Время</B> и <B>Несокрушимый</B>, даруют ему силы в опасные моменты.","name":"Уильям «Билл» Овербек","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"Грубый драчун, его стиль - чем выше риск, тем больше награда.<BR><BR>Его личные навыки, - <B>Мы Будем Жить Вечно</B>, <B>Крепкий Орешек</B> и <B>Без Сожаления</B>, позволяют играть агрессивно и вызывающе, но при этом делают его уязвимым.","name":"Дэвид Кинг","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"Опытная Выжившая, готовая к любым испытаниям.<BR><BR>Ее личные навыки, - <B>Единственный Выживший</B>, <B>Объект Одержимости</B> и <B>Решающий Удар</B>, даруют мощные способности, правда при этом увеличивается риск быть замеченным.","name":"Лори Строуд","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"Азартный игрок, дарующий удачу всей команде.<BR><BR>Его личные навыки — <B>«Игра в Открытую»</B>, <B>«Повысить Ставки»</B> и <B>«Туз в Рукаве»</B> — повышают удачу всех выживших и помогают открыть сундуки.","name":"Эйс Висконти","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"Выжившая с сильным духом соперничества. Она может сосредоточиться на выполнении задач и быстро переключать внимание с одного на другое.<BR><BR>Ее личные навыки, - <B>Техник</B>, <B>Гибкость</B> и <B>Тревога</B>, помогают эффективнее чинить генераторы и обнаруживать местонахождение Убийцы.","name":"Фенг Мин","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"Решительный сновидец, который повышает шансы выживания всей команды и помогает союзникам быстрее восстанавливаться от определенных недугов.<BR><BR>Его личные навыки, - <B>Проснись</B>, <B>Аптекарь</B> и <B>Бессонница</B>, помогают Выжившим находить ворота и быстрее сбрасывать негативные эффекты.","name":"Квентин Смит","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"Одержимый детектив, который может обнаруживать и быстро справляться с задачами игры.<BR><BR>Его личные навыки, - <B>Выдержка</B>, <B>Детективное Чутье</B> и <B>Выслеживание Подозреваемого</B>, позволяют сосредоточить внимание на целях матча и быстрее восстанавливать силы при смерти.","name":"Детектив Тэпп","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"Певица-оптимист, прекрасно ориентируется на местности. <br><br>Ее личные навыки, - <b>Потанцуй Со Мной</b>, <b>Уникальная Возможность</b> и <b>Через Край</b>, позволяют ей умело пользоваться своим окружением и сбегать даже в самых опасных ситуациях.","name":"Кейт Денсон","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"Находчивый учитель, умеет приспособиться к новым обстоятельствам и придумать план действий на ходу. <br><br>Его уникальные навыки, - <b>Диверсия</b>, <b>Освобождение</b> и <b>Самоучка</b>, помогут отвлечь Убийцу, выжить в самых безвыходных ситуациях и стать более опытным в течение матча.","name":"Адам Фрэнсис","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"Спокойный художник, привыкший бороться, даже если победить невозможно.<br><br>Личные навыки, - <b>Поломка</b>, <b>Уход за больным</b> и <b>Искажение</b>, увеличивают его наблюдательность и помогают скрываться от Убийцы.","name":"Джефф Йохансен","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"Влиятельная знаменитость, любительница плыть против течения и встречать трудности с распростертыми объятиями.<br><br>Ее навыки, - <b>Солидарность</b>, <b>Равновесие</b> и <b>Напролом</b>, позволяют помогать как другим, так и себе, а также избегать опасностей.","name":"Джейн Ромеро","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"Одинокий волк, дерзкий и наглый. Рожден, чтобы выживать.<br><br>Его навыки <b>«Раскачка»</b>, <b>«Пристегнись»</b> и <b>«Проверка на прочность»</b> дополнительно защищают его от боли и трудных ситуаций, а также помогают выручать друзей, попавших в трудное положение. ","name":"Эшли Джей Уильямс","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"Подававшая большие надежды журналистка с острым взглядом и чутьем, способная замечать то, что упустили другие.<br><br>Личные навыки: <b>«Лучше вместе»</b>, <b>«Фиксация»</b> и <b>«Внутренняя сила»</b> помогают получать информацию и набираться мужества перед встречей с неведомым.","name":"Нэнси Уиллер","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"Бывший спортсмен, защищающий товарищей по несчастью и периодически развлекающий их своеобразными шуточками.<br><br>Личные навыки <b>«Нянька»</b>, <b>«Товарищество»</b> и <b>«Второе дыхание»</b> позволяют ему отвлекать убийц, терпеть боль и возвращаться в строй.","name":"Стив Харрингтон","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"Бывалая стритрейсерша, способная извлечь выгоду для себя и других выживших даже из самой сложной ситуации.<br><br>Ее личные навыки <b>«Везение»</b>, <b>«Любыми средствами»</b> и <b>«Форсаж»</b> позволяют прятать свой кровавый след, возвращать упавшие доски на место и помогать беспомощным выжившим.","name":"Юи Кимура","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"Отчаянный автор документальных фильмов, чья находчивость позволяет избегать обнаружения и поддерживать других выживших.<br><br>Ее личные навыки <b>«Без огласки»</b>, <b>«Обман во благо»</b> и <b>«Ради людей»</b> помогают отвлекать убийц и скрываться у них под носом, а также быстро лечить товарищей, пренебрегая собственной безопасностью.","name":"Зарина Кассир","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"Юная Шерил Мейсон хорошо знакома с ужасом и умеет приободрить как себя, так и товарищей по команде.<br><br>Ее личные навыки <b>«Оберег души»</b>, <b>«Кровавый договор»</b> и <b>«Скрытый союз»</b> позволяют ей выживать в сложнейших ситуациях, поддерживать связь с товарищами по команде и планировать выполнение задач.","name":"Шерил Мейсон","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"Архитектор и дальновидный человек, способный придумать план и помочь другим выжившим благодаря своему упорству и непреклонности.<br><br>Его личные навыки — <b>«Визионер»</b>, <b>«Отчаянные меры»</b> и <b>«Строим на века»</b> — помогают ему обнаруживать генераторы, спасать выживших и извлекать максимум пользы из инструментов.","name":"Феликс Рихтер","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"Оккультный исследователь с хитрыми трюками в рукаве и упрямой решимостью выжить.<br><br>Ее личные навыки <b>«Изучение»</b>, <b>«Уловка»</b> и <b>«Отчаянная борьба»</b> позволяют нестандартно взаимодействовать с предметами и неожиданным образом сбегать от убийц. ","name":"Элоди Ракото","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"Меркантильный музыкальный продюсер, которая умеет двигаться к своей цели наперекор всему на свете.<br><br>Ее личные навыки <b>«За чужой счет»</b>, <b>«Ударный забег»</b> и <b>«Самосохранение»</b> позволяют улучшать свои способности во время страдания других, а также быстро скрываться от погони. ","name":"Ли Юнчин","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"Джилл Валентайн — одна из главных оперативников S.T.A.R.S. и человек, сладивший с массой биологических угроз.<br><br>Ее личные навыки — <b>«Противодействие»</b>, <b>«Поправка»</b> и <b>«Фугасная мина»</b> — позволяют давать непрямой отпор врагу и оказывать существенную поддержку товарищам. ","name":"Джилл Валентайн","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"Леон С. Кеннеди — новоиспеченный страж порядка, который вышел далеко за рамки обычного долга полицейского во время катастрофы в Раккун-Сити.<br><br>Его личные навыки — <b>«Стиснув зубы»</b>, <b>«Световая граната»</b> и <b>«Дух новичка»</b> — позволяют игнорировать боль, дезориентировать убийцу и видеть оставленные без внимания цели. ","name":"Леон С. Кеннеди","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./ru/index.ts ***!
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
/* harmony import */ var _src_lib_locales_ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/ru */ "./src/lib/locales/ru.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_ru__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map